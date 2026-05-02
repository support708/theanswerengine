import { NextResponse } from 'next/server'
import { registerWebhook } from '@/lib/docusign'

export async function GET() {
  try {
    const webhook = await registerWebhook({
      name: 'AE Onboarding Webhook',
      url: 'https://theanswerengine.ai/api/docusign/webhook',
      events: ['envelope-sent', 'envelope-completed', 'recipient-completed'],
    })

    console.log('=== DOCUSIGN SETUP COMPLETE ===')
    console.log('Webhook ID:', webhook.webhookId)

    return NextResponse.json({
      success: true,
      webhookId: webhook.webhookId,
      message: 'Webhook registered. DocuSign is ready to send contracts.',
    })
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Setup failed' },
      { status: 500 }
    )
  }
}
