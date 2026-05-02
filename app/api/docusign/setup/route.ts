import { NextResponse } from 'next/server'
import { createBrand, registerWebhook, getAccessToken } from '@/lib/docusign'
import fs from 'fs'
import path from 'path'

export async function GET() {
  try {
    const logoPath = path.join(process.cwd(), 'public', 'TheAnswerEngine_Color.png')
    if (!fs.existsSync(logoPath)) {
      return NextResponse.json({ error: 'Logo not found at public/TheAnswerEngine_Color.png' }, { status: 400 })
    }
    const logoBinary = fs.readFileSync(logoPath)

    const brand = await createBrand({
      brandName: 'The Answer Engine',
      buttons: { primary: '#FF6B35' },
      text: '#1A1A1A',
      heading: '#1A1A1A',
    })

    const token = await getAccessToken()
    await fetch(
      `${process.env.DOCUSIGN_BASE_URI}/v2.1/accounts/${process.env.DOCUSIGN_ACCOUNT_ID}/brands/${brand.brandId}/logos/primary`,
      {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'image/png',
        },
        body: logoBinary,
      }
    )

    const webhook = await registerWebhook({
      name: 'AE Onboarding Webhook',
      url: process.env.NODE_ENV === 'production'
        ? 'https://theanswerengine.ai/api/docusign/webhook'
        : 'https://localhost:3000/api/docusign/webhook',
      events: ['envelope-sent', 'envelope-completed', 'recipient-completed'],
    })

    console.log('=== DOCUSIGN SETUP COMPLETE ===')
    console.log('Brand ID:', brand.brandId)
    console.log('Webhook ID:', webhook.webhookId)
    console.log('Add DOCUSIGN_BRAND_ID=' + brand.brandId + ' to .env.local')

    return NextResponse.json({
      success: true,
      brandId: brand.brandId,
      brandName: brand.brandName,
      webhookId: webhook.webhookId,
      message: 'Add DOCUSIGN_BRAND_ID to .env.local and redeploy',
    })
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Setup failed' },
      { status: 500 }
    )
  }
}
