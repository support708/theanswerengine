import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'

// POST /api/docusign/oauth
// DocuSign Connect calls this endpoint (Authorization Server URL) to obtain a Bearer token
// before posting webhook events. We validate the client credentials and return a short-lived token.
// The token is a signed HMAC so we can verify it in the webhook handler without a DB.

const CLIENT_ID = 'The Answer Engine'
const CLIENT_SECRET = process.env.DOCUSIGN_CONNECT_SECRET!
const TOKEN_TTL_SECONDS = 3600

function makeToken(): string {
  const payload = `${Date.now()}|${TOKEN_TTL_SECONDS}`
  const sig = crypto.createHmac('sha256', CLIENT_SECRET).update(payload).digest('hex')
  return Buffer.from(`${payload}|${sig}`).toString('base64url')
}

export function verifyConnectToken(authHeader: string | null): boolean {
  if (!CLIENT_SECRET) return false
  const token = authHeader?.replace(/^Bearer\s+/i, '')
  if (!token) return false
  try {
    const decoded = Buffer.from(token, 'base64url').toString()
    const [ts, ttl, sig] = decoded.split('|')
    const expected = crypto.createHmac('sha256', CLIENT_SECRET).update(`${ts}|${ttl}`).digest('hex')
    if (sig !== expected) return false
    const issued = parseInt(ts, 10)
    const ttlMs = parseInt(ttl, 10) * 1000
    return Date.now() < issued + ttlMs
  } catch {
    return false
  }
}

export async function POST(req: NextRequest) {
  let body: URLSearchParams | null = null
  try {
    const text = await req.text()
    body = new URLSearchParams(text)
  } catch {
    return NextResponse.json({ error: 'invalid_request' }, { status: 400 })
  }

  const grantType = body.get('grant_type')
  const clientId = body.get('client_id')
  const clientSecret = body.get('client_secret')

  if (grantType !== 'client_credentials') {
    return NextResponse.json({ error: 'unsupported_grant_type' }, { status: 400 })
  }

  if (clientId !== CLIENT_ID || clientSecret !== CLIENT_SECRET) {
    return NextResponse.json({ error: 'invalid_client' }, { status: 401 })
  }

  const accessToken = makeToken()

  return NextResponse.json({
    access_token: accessToken,
    token_type: 'Bearer',
    expires_in: TOKEN_TTL_SECONDS,
  })
}
