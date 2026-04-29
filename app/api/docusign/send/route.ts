import { NextRequest, NextResponse } from 'next/server'
import { sendEnvelope } from '@/lib/docusign'
import { sendMessage as sendTelegram } from '@/lib/telegram'
import fs from 'fs'
import path from 'path'

const BRAND_ID = process.env.DOCUSIGN_BRAND_ID

// Premium email body — what every recipient reads before clicking "Review Document"
function buildEmailMessage(clientName: string, signerName: string): string {
  return `Hi ${signerName},

Your service agreement with The Answer Engine is ready for your signature.

This agreement outlines the scope, timeline, and deliverables for your content program. It should take less than two minutes to review and sign.

If you have any questions before signing, reply to this email or call me directly at 323-684-4421.

Looking forward to building something great together.

— Justin Borges
Founder, The Answer Engine
theanswerengine.ai`
}

// POST /api/docusign/send
// Body: { client, signers: [{name, email}], pdfPath?, pdfBase64?, pdfName?, draft?, brandId? }
export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { client, signers, pdfPath, pdfBase64: rawBase64, pdfName, draft, brandId } = body

    if (!signers?.length) return NextResponse.json({ error: 'signers required' }, { status: 400 })

    let base64 = rawBase64
    let docName = pdfName ?? 'Service Agreement.pdf'

    if (pdfPath && !base64) {
      const abs = path.isAbsolute(pdfPath) ? pdfPath : path.join(process.cwd(), pdfPath)
      if (!fs.existsSync(abs)) return NextResponse.json({ error: `File not found: ${abs}` }, { status: 400 })
      base64 = fs.readFileSync(abs).toString('base64')
      docName = pdfName ?? path.basename(abs)
    }

    if (!base64) return NextResponse.json({ error: 'pdfPath or pdfBase64 required' }, { status: 400 })

    // Primary signer's name for the personalized email greeting
    const primarySignerName = signers[0]?.name?.split(' ')[0] ?? 'there'

    const result = await sendEnvelope({
      subject: `${client ?? 'The Answer Engine'} — Service Agreement`,
      message: buildEmailMessage(client ?? 'The Answer Engine', primarySignerName),
      pdfBase64: base64,
      pdfName: docName,
      signers,
      brandId: brandId ?? BRAND_ID,
      completionRedirectUrl: 'https://theanswerengine.ai/signed',
      draft: draft ?? false,
    })

    const action = draft ? 'Draft created' : 'Sent for signature'
    const names = signers.map((s: { name: string; email: string }) => `${s.name} <${s.email}>`).join(', ')
    await sendTelegram(
      `📝 DocuSign ${action}\nClient: ${client ?? 'Unknown'}\nSigners: ${names}\nEnvelope: ${result.envelopeId}`
    ).catch(() => {})

    return NextResponse.json({ ok: true, envelopeId: result.envelopeId, status: result.status })
  } catch (err) {
    console.error('DocuSign send error:', err)
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}
