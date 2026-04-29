// DocuSign eSign REST API — Authorization Code Grant flow
// Handles token refresh, envelope sending, and brand management

const BASE_URI = process.env.DOCUSIGN_BASE_URI!
const AUTH_HOST = process.env.DOCUSIGN_AUTH_HOST!
const INTEGRATION_KEY = process.env.DOCUSIGN_INTEGRATION_KEY!
const CLIENT_SECRET = process.env.DOCUSIGN_CLIENT_SECRET!
const API_ACCOUNT_ID = process.env.DOCUSIGN_API_ACCOUNT_ID!
const REDIRECT_URI = process.env.NODE_ENV === 'development'
  ? process.env.DOCUSIGN_REDIRECT_URI_LOCAL!
  : process.env.DOCUSIGN_REDIRECT_URI!

// In-memory token cache (survives restarts via env refresh token)
let cachedAccessToken: string | null = null
let tokenExpiry: number = 0

export function getAuthUrl(): string {
  const params = new URLSearchParams({
    response_type: 'code',
    scope: 'signature impersonation',
    client_id: INTEGRATION_KEY,
    redirect_uri: REDIRECT_URI,
  })
  return `https://${AUTH_HOST}/oauth/auth?${params}`
}

export async function exchangeCodeForTokens(code: string) {
  const credentials = Buffer.from(`${INTEGRATION_KEY}:${CLIENT_SECRET}`).toString('base64')
  const res = await fetch(`https://${AUTH_HOST}/oauth/token`, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${credentials}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      code,
      redirect_uri: REDIRECT_URI,
    }),
  })
  if (!res.ok) throw new Error(`DocuSign token exchange failed: ${await res.text()}`)
  return res.json() as Promise<{ access_token: string; refresh_token: string; expires_in: number }>
}

export async function getAccessToken(): Promise<string> {
  if (cachedAccessToken && Date.now() < tokenExpiry - 60_000) return cachedAccessToken

  const refreshToken = process.env.DOCUSIGN_REFRESH_TOKEN
  if (!refreshToken) throw new Error('No DocuSign refresh token — run /api/docusign/auth first')

  const credentials = Buffer.from(`${INTEGRATION_KEY}:${CLIENT_SECRET}`).toString('base64')
  const res = await fetch(`https://${AUTH_HOST}/oauth/token`, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${credentials}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
    }),
  })
  if (!res.ok) throw new Error(`DocuSign token refresh failed: ${await res.text()}`)
  const data = await res.json()
  cachedAccessToken = data.access_token
  tokenExpiry = Date.now() + data.expires_in * 1000
  return cachedAccessToken!
}

function apiUrl(path: string) {
  return `${BASE_URI}/restapi/v2.1/accounts/${API_ACCOUNT_ID}${path}`
}

async function dsGet(path: string) {
  const token = await getAccessToken()
  const res = await fetch(apiUrl(path), {
    headers: { Authorization: `Bearer ${token}`, Accept: 'application/json' },
  })
  if (!res.ok) throw new Error(`DocuSign GET ${path} failed: ${await res.text()}`)
  return res.json()
}

async function dsPost(path: string, body: unknown) {
  const token = await getAccessToken()
  const res = await fetch(apiUrl(path), {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(body),
  })
  if (!res.ok) throw new Error(`DocuSign POST ${path} failed: ${await res.text()}`)
  return res.json()
}

async function dsPut(path: string, body: unknown, contentType = 'application/json') {
  const token = await getAccessToken()
  const res = await fetch(apiUrl(path), {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': contentType,
      Accept: 'application/json',
    },
    body: contentType === 'application/json' ? JSON.stringify(body) : body as BodyInit,
  })
  if (!res.ok) throw new Error(`DocuSign PUT ${path} failed: ${await res.text()}`)
  return res.json()
}

// ─── Brands ──────────────────────────────────────────────────────────────────

export async function listBrands() {
  return dsGet('/brands')
}

export async function createAEBrand(): Promise<string> {
  const data = await dsPost('/brands', {
    brandName: 'The Answer Engine',
    defaultBrandLanguage: 'en',
    colors: [
      // Signing ceremony — primary action button (the big "Sign Here" CTA)
      { name: 'ButtonPrimaryBackground', color: 'FF6B35' },
      { name: 'ButtonPrimaryText', color: 'FFFFFF' },
      // Secondary buttons (Next, Continue, etc.)
      { name: 'ButtonSecondaryBackground', color: '1A1A1A' },
      { name: 'ButtonSecondaryText', color: 'FFFFFF' },
      // Page header bar
      { name: 'HeaderBackground', color: '1A1A1A' },
      { name: 'HeaderText', color: 'FFFFFF' },
      // Signing page body
      { name: 'BodyBackground', color: 'F7F7F7' },
      { name: 'BodyColor', color: '1A1A1A' },
      // Links and accents
      { name: 'LinkColor', color: 'FF6B35' },
    ],
  })
  const brandId: string = data.brandId
  await uploadBrandLogo(brandId)
  return brandId
}

async function uploadBrandLogo(brandId: string) {
  const fs = await import('fs')
  const path = await import('path')
  const logoPath = path.join(process.cwd(), 'public', 'TheAnswerEngine_Color.png')
  if (!fs.existsSync(logoPath)) return
  const logoBuffer = fs.readFileSync(logoPath)
  const token = await getAccessToken()
  await fetch(apiUrl(`/brands/${brandId}/logos/primary`), {
    method: 'PUT',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'image/png' },
    body: logoBuffer,
  })
}

// ─── Envelopes ────────────────────────────────────────────────────────────────

export interface Signer {
  name: string
  email: string
  routingOrder?: number
}

export interface SendEnvelopeOptions {
  subject: string
  message?: string
  pdfBase64: string
  pdfName: string
  signers: Signer[]
  brandId?: string
  /** Redirect signers here after completing — should be your branded thank-you page */
  completionRedirectUrl?: string
  /** If true, saves as draft instead of sending immediately */
  draft?: boolean
}

export async function sendEnvelope(opts: SendEnvelopeOptions) {
  const { subject, message, pdfBase64, pdfName, signers, brandId, completionRedirectUrl, draft } = opts

  const recipients = signers.map((s, i) => ({
    recipientId: String(i + 1),
    routingOrder: String(s.routingOrder ?? i + 1),
    name: s.name,
    email: s.email,
    ...(completionRedirectUrl ? { clientUserId: undefined } : {}),
    tabs: {
      signHereTabs: [
        {
          documentId: '1',
          pageNumber: String(getSignaturePage(signers.length, i)),
          xPosition: i === 0 ? '72' : '320',
          yPosition: '580',
          scaleValue: '1',
        },
      ],
      dateSignedTabs: [
        {
          documentId: '1',
          pageNumber: String(getSignaturePage(signers.length, i)),
          xPosition: i === 0 ? '72' : '320',
          yPosition: '620',
        },
      ],
    },
  }))

  const envelope: Record<string, unknown> = {
    emailSubject: subject,
    emailBlurb: message ?? '',
    status: draft ? 'created' : 'sent',
    documents: [
      {
        documentId: '1',
        name: pdfName,
        fileExtension: 'pdf',
        documentBase64: pdfBase64,
      },
    ],
    recipients: { signers: recipients },
  }

  if (brandId) {
    envelope.brandId = brandId
  }

  if (completionRedirectUrl) {
    envelope.notification = {
      useAccountDefaults: 'false',
      reminders: { reminderEnabled: 'true', reminderDelay: '2', reminderFrequency: '2' },
      expirations: { expireEnabled: 'true', expireAfter: '30', expireWarn: '5' },
    }
  }

  return dsPost('/envelopes', envelope)
}

// Signature blocks appear on the last page of the contract
function getSignaturePage(totalSigners: number, signerIndex: number): number {
  // TrueDoor contract: signature grid is on page before exhibits (last main page)
  // For now target page 3 (adjust per doc)
  return 3
}

export async function getEnvelope(envelopeId: string) {
  return dsGet(`/envelopes/${envelopeId}`)
}

export async function voidEnvelope(envelopeId: string, reason: string) {
  return dsPut(`/envelopes/${envelopeId}`, { status: 'voided', voidedReason: reason })
}

// ─── Connect (Webhook) ────────────────────────────────────────────────────────

export async function registerWebhook(webhookUrl: string) {
  return dsPost('/connect', {
    name: 'The Answer Engine — Envelope Status',
    urlToPublishTo: webhookUrl,
    allUsers: 'true',
    enableLog: 'true',
    requiresAckStatus: 'true',
    envelopeEvents: [
      { envelopeEventStatusCode: 'sent' },
      { envelopeEventStatusCode: 'delivered' },
      { envelopeEventStatusCode: 'completed' },
      { envelopeEventStatusCode: 'declined' },
      { envelopeEventStatusCode: 'voided' },
    ],
  })
}
