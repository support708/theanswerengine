/**
 * Vercel Cron endpoint for Blog Bot.
 * Protected by CRON_SECRET - not by NextAuth (excluded in middleware).
 * Runs 4x daily on weekdays (see vercel.json).
 */

import { NextRequest, NextResponse } from 'next/server';
import { runBlogSession } from '@/lib/blog-scheduler';

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

  // Check if blog bot is enabled
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
        published: session.published,
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
