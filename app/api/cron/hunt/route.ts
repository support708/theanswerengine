/**
 * Vercel Cron endpoint for Lead Hunter Bot.
 * Protected by CRON_SECRET — not by NextAuth (excluded in middleware + auth.ts).
 * Schedule configured in vercel.json.
 */

import { NextRequest, NextResponse } from 'next/server';
import { runHuntSession } from '@/lib/scheduler';
import type { HuntTrigger } from '@/lib/hunter-types';

export const maxDuration = 120; // 2 minutes max for Vercel Pro

export async function GET(request: NextRequest) {
  // Verify CRON_SECRET
  const authHeader = request.headers.get('authorization');
  const cronSecret = process.env.CRON_SECRET;

  if (!cronSecret) {
    return NextResponse.json({ error: 'CRON_SECRET not configured' }, { status: 500 });
  }

  if (authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  // Check if hunt is enabled
  if (process.env.HUNT_ENABLED !== 'true') {
    return NextResponse.json({ error: 'Hunt is disabled', hint: 'Set HUNT_ENABLED=true' }, { status: 200 });
  }

  // Determine trigger type from query param
  const trigger = (request.nextUrl.searchParams.get('trigger') || 'cron_daily') as HuntTrigger;
  const validTriggers: HuntTrigger[] = ['cron_daily', 'cron_weekly', 'cron_monthly'];
  const safeTrigger = validTriggers.includes(trigger) ? trigger : 'cron_daily';

  try {
    const session = await runHuntSession(safeTrigger);
    return NextResponse.json({
      success: true,
      session: {
        id: session.id,
        vertical: session.vertical,
        metro: session.metro,
        prospectsFound: session.prospectsFound,
        p1Queued: session.p1Queued,
        p2Queued: session.p2Queued,
        p3Backlogged: session.p3Backlogged,
        duplicatesSkipped: session.duplicatesSkipped,
        errors: session.errors,
        duration: session.completedAt
          ? `${((new Date(session.completedAt).getTime() - new Date(session.startedAt).getTime()) / 1000).toFixed(1)}s`
          : 'unknown',
      },
    });
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : 'Hunt failed' },
      { status: 500 },
    );
  }
}
