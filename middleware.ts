import { NextRequest, NextResponse } from 'next/server';
import { auth } from './auth';

// Simple in-memory IP rate limiter for public endpoints
// Limits lead submissions to 5 per IP per 10 minutes
const ipLeadsMap = new Map<string, { count: number; resetAt: number }>();

function leadsRateLimit(ip: string): boolean {
  const now = Date.now();
  const window = 10 * 60 * 1000; // 10 minutes
  const max = 5;
  const entry = ipLeadsMap.get(ip);
  if (!entry || now > entry.resetAt) {
    ipLeadsMap.set(ip, { count: 1, resetAt: now + window });
    return true;
  }
  if (entry.count >= max) return false;
  entry.count++;
  return true;
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Rate limit public lead submissions
  if (pathname === '/api/leads' && req.method === 'POST') {
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';
    if (!leadsRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please wait before submitting again.' },
        { status: 429 }
      );
    }
    return NextResponse.next();
  }

  // All other routes: NextAuth handles auth
  return (auth as any)(req);
}

export const config = {
  matcher: ['/admin/:path*', '/api/((?!auth|cron|og|telegram|command-center/heartbeat|webhook|indexnow|borges-os|docusign|gsc-impressions).*)'],
};
