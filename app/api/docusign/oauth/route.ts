import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const contentType = req.headers.get('content-type') || ''
    let grant_type: string, client_id: string, client_secret: string

    if (contentType.includes('application/x-www-form-urlencoded')) {
      const text = await req.text()
      const params = new URLSearchParams(text)
      grant_type = params.get('grant_type') ?? ''
      client_id = params.get('client_id') ?? ''
      client_secret = params.get('client_secret') ?? ''
    } else {
      const body = await req.json()
      grant_type = body.grant_type
      client_id = body.client_id
      client_secret = body.client_secret
    }

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
