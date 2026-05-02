import { NextResponse } from 'next/server'
import { getAuthUrl } from '@/lib/docusign'

export async function GET() {
  try {
    const authUrl = getAuthUrl()
    return NextResponse.redirect(authUrl)
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Auth URL generation failed' },
      { status: 500 }
    )
  }
}
