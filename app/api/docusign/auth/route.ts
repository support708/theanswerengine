import { NextResponse } from 'next/server'
import { getAuthUrl } from '@/lib/docusign'

// GET /api/docusign/auth — redirect to DocuSign OAuth consent screen
export async function GET() {
  const url = getAuthUrl()
  return NextResponse.redirect(url)
}
