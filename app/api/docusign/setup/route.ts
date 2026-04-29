import { NextResponse } from 'next/server'
import { createAEBrand, listBrands, registerWebhook } from '@/lib/docusign'

// GET /api/docusign/setup
// One-time setup: creates AE brand + registers Connect webhook.
// Run once after completing the OAuth dance. Copy brandId → DOCUSIGN_BRAND_ID in .env.local.
export async function GET() {
  const results: Record<string, unknown> = {}

  // Check if AE brand already exists
  try {
    const existing = await listBrands()
    const aeBrand = existing.brands?.find(
      (b: { brandName: string }) => b.brandName === 'The Answer Engine'
    )
    if (aeBrand) {
      results.brand = { status: 'already_exists', brandId: aeBrand.brandId }
    } else {
      const brandId = await createAEBrand()
      results.brand = { status: 'created', brandId }
    }
  } catch (err) {
    results.brand = { status: 'error', error: String(err) }
  }

  // Register Connect webhook
  try {
    const webhookUrl = 'https://theanswerengine.ai/api/docusign/webhook'
    const webhook = await registerWebhook(webhookUrl)
    results.webhook = { status: 'registered', connectId: webhook.connectId }
  } catch (err) {
    // Webhook may already be registered — not fatal
    results.webhook = { status: 'error', error: String(err) }
  }

  return NextResponse.json({
    ok: true,
    ...results,
    next: 'Add DOCUSIGN_BRAND_ID to .env.local using the brandId above',
  })
}
