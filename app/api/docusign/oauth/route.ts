import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { grant_type, client_id, client_secret } = body

    if (client_id !== process.env.DOCUSIGN_INTEGRATION_KEY ||
        client_secret !== process.env.DOCUSIGN_CLIENT_SECRET) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
    }

    if (grant_type !== 'client_credentials') {
      return NextResponse.json({ error: 'Unsupported grant type' }, { status: 400 })
    }

    const token = Buffer.from(`${Date.now()}:${Math.random()}`).toString('base64')

    return NextResponse.json({
      access_token: token,
      token_type: 'Bearer',
      expires_in: 3600,
    })
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'OAuth failed' },
      { status: 500 }
    )
  }
}
