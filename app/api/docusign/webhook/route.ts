import { NextRequest, NextResponse } from 'next/server'
import { sendMessage as sendTelegram } from '@/lib/telegram'

export async function POST(req: NextRequest) {
  try {
    const authHeader = req.headers.get('Authorization') || ''
    if (!authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ error: 'Missing Bearer token' }, { status: 401 })
    }

    const token = authHeader.substring(7)
    const expectedToken = process.env.DOCUSIGN_CONNECT_SECRET
    if (token !== expectedToken) {
      return NextResponse.json({ error: 'Invalid token' }, { status: 401 })
    }

    const body = await req.text()

    const envelopeIdMatch = body.match(/<EnvelopeId>([^<]+)<\/EnvelopeId>/)
    const statusMatch = body.match(/<Status>([^<]+)<\/Status>/)

    if (!envelopeIdMatch || !statusMatch) {
      return NextResponse.json({ error: 'Invalid webhook payload' }, { status: 400 })
    }

    const envelopeId = envelopeIdMatch[1]
    const status = statusMatch[1]
    const signerMatch = body.match(/<SignerName>([^<]+)<\/SignerName>/)
    const signerName = signerMatch ? signerMatch[1] : 'Recipient'

    const message = `📋 DocuSign Update\n\nEnvelope: ${envelopeId}\nStatus: ${status}\nSigner: ${signerName}\n\nTime: ${new Date().toLocaleTimeString()}`

    await sendTelegram(message)

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error('Webhook error:', error)
    return NextResponse.json({ error: error instanceof Error ? error.message : 'Webhook processing failed' }, { status: 200 })
  }
}
