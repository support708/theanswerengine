/**
 * Weekly Learning Retrospective Cron.
 * Analyzes lead outcomes and updates hunt priorities.
 * Schedule: Fridays 18:00 UTC (1 PM ET).
 */

import { NextRequest, NextResponse } from 'next/server';
import { generateWeeklyRetrospective } from '@/lib/learning';
import { readLearningLog, writeLearningLog } from '@/lib/learning-data';
import { sendMessage } from '@/lib/telegram';

export const maxDuration = 120; // Read-heavy, no external API calls

export async function GET(request: NextRequest) {
  const authHeader = request.headers.get('authorization');
  const cronSecret = process.env.CRON_SECRET;

  if (!cronSecret || authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const retro = await generateWeeklyRetrospective();

    // Persist to learning log
    const log = await readLearningLog();
    log.retrospectives.push(retro);
    // Keep last 52 weeks (1 year)
    log.retrospectives = log.retrospectives.slice(-52);
    log.currentPriorities = retro.huntPriorities;
    log.updatedAt = new Date().toISOString();
    await writeLearningLog(log);

    // Telegram notification
    await notifyRetrospective(retro);

    return NextResponse.json({
      success: true,
      retrospective: {
        id: retro.id,
        weekEnding: retro.weekEnding,
        totalLeads: retro.totalLeads,
        leadsQueuedThisWeek: retro.leadsQueuedThisWeek,
        leadsSentThisWeek: retro.leadsSentThisWeek,
        topNiche: retro.nicheMetrics[0]?.niche || 'none',
        topMetro: retro.metroMetrics[0]?.metro || 'none',
        huntPriorities: retro.huntPriorities.slice(0, 5),
      },
    });
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : 'Retrospective failed' },
      { status: 500 },
    );
  }
}

async function notifyRetrospective(retro: import('@/lib/learning').WeeklyRetrospective): Promise<void> {
  const topNiches = retro.nicheMetrics
    .filter(n => n.sent >= 2)
    .sort((a, b) => b.replyRate - a.replyRate)
    .slice(0, 3);

  const nicheLines = topNiches
    .map(n => `  ${n.niche}: ${(n.replyRate * 100).toFixed(0)}% reply (${n.replied}/${n.sent})`)
    .join('\n');

  const fuMetrics = retro.followUpMetrics;
  const bestStage = Object.entries(fuMetrics.replyRateByStage)
    .filter(([, rate]) => rate > 0)
    .sort(([, a], [, b]) => b - a)[0];

  const trendLine = retro.trends.replyRateDelta !== 0
    ? `\nReply rate trend: ${retro.trends.replyRateDelta > 0 ? '+' : ''}${(retro.trends.replyRateDelta * 100).toFixed(1)}% vs last week`
    : '';

  const improvingLine = retro.trends.improving.length > 0
    ? `\nImproving: ${retro.trends.improving.join(', ')}`
    : '';

  const decliningLine = retro.trends.declining.length > 0
    ? `\nDeclining: ${retro.trends.declining.join(', ')}`
    : '';

  await sendMessage(
    `<b>Weekly Retrospective</b> | ${retro.weekEnding}\n\n` +
    `Leads: ${retro.totalLeads} total | ${retro.leadsQueuedThisWeek} queued this week\n` +
    `Sent: ${retro.leadsSentThisWeek} this week\n\n` +
    `<b>Top Niches by Reply Rate:</b>\n${nicheLines || '  (insufficient data)'}\n\n` +
    `<b>Best Follow-up Stage:</b> ${bestStage?.[0]?.replace('_', ' ') || 'N/A'} (${((bestStage?.[1] || 0) * 100).toFixed(0)}%)\n\n` +
    `<b>Velocity:</b> ${retro.velocityMetrics.avgQueuedToSentHours}h avg queued-to-sent` +
    (retro.velocityMetrics.fastestClose ? ` | Fastest close: ${retro.velocityMetrics.fastestClose}` : '') +
    `\n\n<b>Hunt Priorities Updated:</b> ${retro.huntPriorities.length} combinations ranked` +
    trendLine +
    improvingLine +
    decliningLine
  );
}
