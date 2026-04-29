import { NextRequest, NextResponse } from 'next/server'
import { exchangeCodeForTokens } from '@/lib/docusign'

// GET /api/docusign/callback?code=xxx
// DocuSign redirects here after user grants consent.
// Logs the refresh token — copy it to DOCUSIGN_REFRESH_TOKEN in .env.local
export async function GET(req: NextRequest) {
  const code = req.nextUrl.searchParams.get('code')
  if (!code) return NextResponse.json({ error: 'No code' }, { status: 400 })

  try {
    const tokens = await exchangeCodeForTokens(code)
    // Log to console so you can copy to .env.local
    console.log('=== DOCUSIGN REFRESH TOKEN ===')
    console.log(tokens.refresh_token)
    console.log('==============================')
    return NextResponse.json({
      ok: true,
      message: 'Token obtained. Copy DOCUSIGN_REFRESH_TOKEN from server logs.',
      expires_in: tokens.expires_in,
    })
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}
