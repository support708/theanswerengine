/**
 * Vercel Cron endpoint for Lead Hunter Bot.
 * Protected by CRON_SECRET — not by NextAuth (excluded in middleware + auth.ts).
 * Schedule configured in vercel.json.
 */

import { NextRequest, NextResponse } from 'next/server';
import { runHuntSession, getTodayQueuedCount } from '@/lib/scheduler';
import { notifyHuntComplete, notifyHuntDailySummary } from '@/lib/telegram';
import { readHuntLog } from '@/lib/hunter-data';
import type { HuntTrigger } from '@/lib/hunter-types';

export const maxDuration = 300; // 5 minutes — hunt runs 4 API calls with web search (discovery + citation + enrichment + email hunt)

const MAX_CHAIN_DEPTH = 5; // Hard cap: never chain more than 5 re-invocations

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

  // Determine trigger type and chain depth from query params
  const trigger = (request.nextUrl.searchParams.get('trigger') || 'cron_daily') as HuntTrigger;
  const validTriggers: HuntTrigger[] = ['cron_daily', 'cron_weekly', 'cron_monthly', 'manual'];
  const safeTrigger = validTriggers.includes(trigger) ? trigger : 'cron_daily';
  const chainDepth = parseInt(request.nextUrl.searchParams.get('chain') || '0', 10);

  try {
    const session = await runHuntSession(safeTrigger);
    const leadsQueued = session.p1Queued + session.p2Queued;
    const quota = parseInt(process.env.HUNT_MAX_LEADS_PER_SESSION || '10', 10);
    const totalToday = await getTodayQueuedCount();

    // Send Telegram notification with quota info
    try {
      await notifyHuntComplete({
        ...session,
        quotaTarget: quota,
        totalToday,
        chainDepth,
      });
    } catch {
      // Silent — don't fail the hunt for notification issues
    }

    // Self-re-invoke if quota not met
    // Conditions: quota not filled AND under chain cap AND this session found leads (not a dead rotation)
    const shouldReInvoke = totalToday < quota && chainDepth < MAX_CHAIN_DEPTH && leadsQueued > 0;

    if (shouldReInvoke && cronSecret) {
      const baseUrl = process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : request.nextUrl.origin;
      const reInvokeUrl = `${baseUrl}/api/cron/hunt?trigger=${safeTrigger}&chain=${chainDepth + 1}`;

      // Fire-and-forget: don't await (let this invocation return)
      fetch(reInvokeUrl, {
        headers: { 'Authorization': `Bearer ${cronSecret}` },
      }).catch(() => {}); // Swallow errors, next cron will pick up
    } else {
      // Chain is done — send daily summary with expense report
      try {
        const huntLog = await readHuntLog();
        const todayStr = new Date().toISOString().split('T')[0];
        const todaySessions = huntLog.filter(s => s.startedAt.startsWith(todayStr));

        // Haiku web search: ~$0.003 per call (input ~2K tokens, output ~1K)
        const apiCalls = todaySessions.length * 3;
        const estimatedCost = apiCalls * 0.003;

        await notifyHuntDailySummary({
          totalQueued: totalToday,
          quota,
          chainDepth,
          sessionsToday: todaySessions.map(s => ({
            vertical: s.vertical,
            metro: s.metro,
            p1: s.p1Queued,
            p2: s.p2Queued,
            p3: s.p3Backlogged,
            dupes: s.duplicatesSkipped,
          })),
          estimatedCost,
        });
      } catch {
        // Silent — don't fail for notification issues
      }
    }

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
      quota: {
        target: quota,
        queuedThisSession: leadsQueued,
        totalToday,
        chainDepth,
        reInvoked: shouldReInvoke,
      },
    });
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : 'Hunt failed' },
      { status: 500 },
    );
  }
}
