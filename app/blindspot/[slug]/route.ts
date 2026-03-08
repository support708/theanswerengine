import { NextRequest, NextResponse } from 'next/server';
import { readFileSync, existsSync } from 'fs';
import { join } from 'path';

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  // Sanitize slug — only allow alphanumeric, hyphens, underscores
  if (!/^[a-z0-9_-]+$/i.test(slug)) {
    return new NextResponse('Not Found', { status: 404 });
  }

  const filePath = join(process.cwd(), 'public', 'blindspot', `${slug}.html`);

  if (!existsSync(filePath)) {
    return new NextResponse('Report not found', { status: 404 });
  }

  const html = readFileSync(filePath, 'utf-8');

  return new NextResponse(html, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
