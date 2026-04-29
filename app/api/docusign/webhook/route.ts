import { NextRequest, NextResponse } from 'next/server'
import { sendMessage as sendTelegram } from '@/lib/telegram'
import { verifyConnectToken } from '../oauth/route'

const STATUS_EMOJI: Record<string, string> = {
  sent: '📤',
  delivered: '👀',
  completed: '✅',
  declined: '❌',
  voided: '🚫',
}

// POST /api/docusign/webhook
// DocuSign Connect pushes envelope status changes here.
// Requests are authenticated via Bearer token obtained from /api/docusign/oauth.
export async function POST(req: NextRequest) {
  // Verify the Connect OAuth Bearer token
  const authHeader = req.headers.get('Authorization')
  if (!verifyConnectToken(authHeader)) {
    console.warn('DocuSign webhook: invalid or missing Bearer token')
    // Return 200 anyway — prevents DocuSign from retrying indefinitely on auth failures
    // while still logging the unauthorized attempt
    return new NextResponse('OK', { status: 200 })
  }

  try {
    const text = await req.text()

    // DocuSign sends XML — parse key fields with regex (no xml2js dependency)
    const envelopeId = text.match(/<EnvelopeID>(.*?)<\/EnvelopeID>/)?.[1] ?? 'unknown'
    const status = text.match(/<Status>(.*?)<\/Status>/)?.[1]?.toLowerCase() ?? 'unknown'
    const subject = text.match(/<EmailSubject>(.*?)<\/EmailSubject>/)?.[1] ?? ''
    const signer = text.match(/<Name>(.*?)<\/Name>/)?.[1] ?? ''
    const signerEmail = text.match(/<Email>(.*?)<\/Email>/)?.[1] ?? ''

    const emoji = STATUS_EMOJI[status] ?? '📋'
    const msg = [
      `${emoji} DocuSign — ${status.toUpperCase()}`,
      subject ? `Contract: ${subject}` : '',
      signer ? `Signer: ${signer} <${signerEmail}>` : '',
      `Envelope: ${envelopeId}`,
    ].filter(Boolean).join('\n')

    await sendTelegram(msg).catch(() => {})

    return new NextResponse('OK', { status: 200 })
  } catch (err) {
    console.error('DocuSign webhook error:', err)
    return new NextResponse('OK', { status: 200 })
  }
}
