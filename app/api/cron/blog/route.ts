/**
 * Vercel Cron endpoint for The Content Engine.
 * Protected by CRON_SECRET.
 *
 * GET /api/cron/blog?action=remind  — Daily Telegram reminder to run blog protocol
 * GET /api/cron/blog?action=publish — Batch push all staged articles
 * GET /api/cron/blog                — Generate mode (manual/API trigger)
 */

import { NextRequest, NextResponse } from 'next/server';
import { runBlogSession, publishStagedArticles } from '@/lib/blog-scheduler';

export const maxDuration = 120;

export async function GET(request: NextRequest) {
  const authHeader = request.headers.get('authorization');
  const cronSecret = process.env.CRON_SECRET;

  if (!cronSecret) {
    return NextResponse.json({ error: 'CRON_SECRET not configured' }, { status: 500 });
  }

  if (authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const action = request.nextUrl.searchParams.get('action');

  // --- Daily Reminder ---
  if (action === 'remind') {
    try {
      const { sendMessage } = await import('@/lib/telegram');
      await sendMessage(
        `<b>The Content Engine</b>\n\n` +
        `Time to run your daily blog protocol.\n` +
        `Open Claude Code and say:\n` +
        `"run daily blog protocol"`
      );
      return NextResponse.json({ success: true, message: 'Reminder sent' });
    } catch (err) {
      return NextResponse.json(
        { error: err instanceof Error ? err.message : 'Reminder failed' },
        { status: 500 },
      );
    }
  }

  // --- Batch Publish Mode ---
  if (action === 'publish') {
    try {
      const result = await publishStagedArticles();
      if (result.count === 0) {
        return NextResponse.json({ success: true, message: 'No staged articles to publish' });
      }
      return NextResponse.json({
        success: true,
        published: result.count,
        commitSha: result.commitSha,
      });
    } catch (err) {
      return NextResponse.json(
        { error: err instanceof Error ? err.message : 'Batch publish failed' },
        { status: 500 },
      );
    }
  }

  // --- Generate Mode (needs BLOG_ENABLED) ---
  if (process.env.BLOG_ENABLED !== 'true') {
    return NextResponse.json({ message: 'Blog bot is disabled', hint: 'Set BLOG_ENABLED=true' }, { status: 200 });
  }

  try {
    const session = await runBlogSession('cron');
    const duration = session.completedAt
      ? `${((new Date(session.completedAt).getTime() - new Date(session.startedAt).getTime()) / 1000).toFixed(1)}s`
      : 'unknown';

    return NextResponse.json({
      success: true,
      session: {
        id: session.id,
        topic: session.topicTitle,
        slug: session.slug,
        auditScore: session.auditScore,
        auditPassed: session.auditPassed,
        staged: session.published,
        totalTokens: session.researchTokens + session.generationTokens + session.auditTokens,
        duration,
        error: session.error || null,
      },
    });
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : 'Blog generation failed' },
      { status: 500 },
    );
  }
}
