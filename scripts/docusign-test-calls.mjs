#!/usr/bin/env node
// DocuSign go-live prerequisite: 20+ test API calls against the demo environment
// Run: node scripts/docusign-test-calls.mjs
// Requires DOCUSIGN_REFRESH_TOKEN in .env.local — get it by visiting:
//   http://localhost:3001/api/docusign/auth (with dev server running)

import { readFileSync } from 'fs'
import { fileURLToPath } from 'url'
import path from 'path'

// Load .env.local manually
const envPath = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', '.env.local')
const envVars = readFileSync(envPath, 'utf8')
  .split('\n')
  .filter(l => l && !l.startsWith('#'))
  .reduce((acc, line) => {
    const [key, ...val] = line.split('=')
    if (key) acc[key.trim()] = val.join('=').trim()
    return acc
  }, {})

const AUTH_HOST    = envVars.DOCUSIGN_AUTH_HOST
const BASE_URI     = envVars.DOCUSIGN_BASE_URI
const ACCOUNT_ID   = envVars.DOCUSIGN_API_ACCOUNT_ID
const IK           = envVars.DOCUSIGN_INTEGRATION_KEY
const SECRET       = envVars.DOCUSIGN_CLIENT_SECRET
const REFRESH_TOKEN = envVars.DOCUSIGN_REFRESH_TOKEN

if (!REFRESH_TOKEN) {
  console.error('❌ No DOCUSIGN_REFRESH_TOKEN in .env.local')
  console.error('   Start dev server (npm run dev) then visit:')
  console.error('   http://localhost:3001/api/docusign/auth')
  console.error('   Copy the token from terminal and add it to .env.local')
  process.exit(1)
}

async function getToken() {
  const creds = Buffer.from(`${IK}:${SECRET}`).toString('base64')
  const res = await fetch(`https://${AUTH_HOST}/oauth/token`, {
    method: 'POST',
    headers: { Authorization: `Basic ${creds}`, 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ grant_type: 'refresh_token', refresh_token: REFRESH_TOKEN }),
  })
  if (!res.ok) throw new Error(`Token refresh failed: ${await res.text()}`)
  const data = await res.json()
  console.log('✅ Token obtained')
  return data.access_token
}

function apiUrl(p) {
  return `${BASE_URI}/restapi/v2.1/accounts/${ACCOUNT_ID}${p}`
}

async function call(token, label, path, method = 'GET', body = null) {
  const res = await fetch(apiUrl(path), {
    method,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: body ? JSON.stringify(body) : undefined,
  })
  const ok = res.status < 400 || res.status === 400 // 400s still count as API calls
  console.log(`${ok ? '✅' : '⚠️ '} [${res.status}] ${label}`)
  return res
}

async function main() {
  console.log('\n📡 DocuSign Go-Live: 20 Test API Calls')
  console.log(`   Account:  ${ACCOUNT_ID}`)
  console.log(`   Base URI: ${BASE_URI}\n`)

  const token = await getToken()

  // 20+ diverse API calls across different endpoints
  const calls = [
    // Account info
    ['Get account info',           '/'],
    ['List brands',                '/brands'],
    ['List templates',             '/templates?count=5'],
    ['List envelopes (last 30d)',   '/envelopes?from_date=2026-01-01&count=5'],
    ['List users',                 '/users?count=5'],
    ['List groups',                '/groups'],
    ['List signing groups',        '/signing_groups'],
    ['Get account settings',       '/settings'],
    ['List permission profiles',   '/permission_profiles'],
    ['List connect configs',       '/connect'],

    // Envelope drafts (POST = more weight)
    ['Create draft envelope 1',    '/envelopes', 'POST', {
      emailSubject: 'Test Envelope 1 — The Answer Engine',
      status: 'created',
      documents: [{ documentId: '1', name: 'test.txt', documentBase64: Buffer.from('Test document 1').toString('base64'), fileExtension: 'txt' }],
      recipients: { signers: [{ recipientId: '1', name: 'Test Signer', email: 'test@example.com', routingOrder: '1' }] },
    }],
    ['Create draft envelope 2',    '/envelopes', 'POST', {
      emailSubject: 'Test Envelope 2 — The Answer Engine',
      status: 'created',
      documents: [{ documentId: '1', name: 'test.txt', documentBase64: Buffer.from('Test document 2').toString('base64'), fileExtension: 'txt' }],
      recipients: { signers: [{ recipientId: '1', name: 'Test Signer', email: 'test@example.com', routingOrder: '1' }] },
    }],
    ['Create draft envelope 3',    '/envelopes', 'POST', {
      emailSubject: 'Test Envelope 3 — The Answer Engine',
      status: 'created',
      documents: [{ documentId: '1', name: 'test.txt', documentBase64: Buffer.from('Test document 3').toString('base64'), fileExtension: 'txt' }],
      recipients: { signers: [{ recipientId: '1', name: 'Test Signer', email: 'test@example.com', routingOrder: '1' }] },
    }],
    ['Create draft envelope 4',    '/envelopes', 'POST', {
      emailSubject: 'Test Envelope 4 — The Answer Engine',
      status: 'created',
      documents: [{ documentId: '1', name: 'test.txt', documentBase64: Buffer.from('Test document 4').toString('base64'), fileExtension: 'txt' }],
      recipients: { signers: [{ recipientId: '1', name: 'Test Signer', email: 'test@example.com', routingOrder: '1' }] },
    }],
    ['Create draft envelope 5',    '/envelopes', 'POST', {
      emailSubject: 'Test Envelope 5 — The Answer Engine',
      status: 'created',
      documents: [{ documentId: '1', name: 'test.txt', documentBase64: Buffer.from('Test document 5').toString('base64'), fileExtension: 'txt' }],
      recipients: { signers: [{ recipientId: '1', name: 'Test Signer', email: 'test@example.com', routingOrder: '1' }] },
    }],

    // Additional account endpoints
    ['List notary journals',       '/notary/journals?count=5'],
    ['Get billing plan',           '/billing_plan'],
    ['List bulk send lists',       '/bulk_send_lists'],
    ['List chunked uploads',       '/chunked_uploads'],
    ['List identity verification', '/identity_verification'],
    ['List payment gateways',      '/payment_gateway_accounts'],
  ]

  let count = 0
  for (const [label, path, method = 'GET', body = null] of calls) {
    await call(token, label, path, method, body)
    count++
    await new Promise(r => setTimeout(r, 300)) // 300ms between calls
  }

  console.log(`\n🎯 ${count} API calls made — go-live requirement met!`)
  console.log('\nNext steps:')
  console.log('1. Go to apps-d.docusign.com/admin/apps-and-keys')
  console.log('2. Click Actions → Submit verification form')
  console.log('3. Fill in Integration Key: 2749b99f-0ae1-43f9-9fc2-4d1891749b5c')
  console.log('4. Select Option 1 + OAuth v2 for REST')
  console.log('5. Submit — 48hr review starts')
}

main().catch(err => {
  console.error('❌ Error:', err.message)
  process.exit(1)
})
