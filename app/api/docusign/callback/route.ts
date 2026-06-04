import { NextRequest, NextResponse } from 'next/server'
import { exchangeCodeForTokens } from '@/lib/docusign'

export async function GET(req: NextRequest) {
  try {
    const code = req.nextUrl.searchParams.get('code')
    if (!code) return NextResponse.json({ error: 'No authorization code' }, { status: 400 })

    const tokens = await exchangeCodeForTokens(code)

    console.log('=== DOCUSIGN REFRESH TOKEN ===')
    console.log(tokens.refresh_token)
    console.log('=== ADD THIS TO .env.local AS DOCUSIGN_REFRESH_TOKEN ===')

    return NextResponse.json({
      success: true,
      message: 'Token exchange successful. Copy the refreshToken below and send to Claude.',
      accessToken: tokens.access_token.slice(0, 20) + '...',
      refreshToken: tokens.refresh_token,
    })
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Token exchange failed' },
      { status: 500 }
    )
  }
}
