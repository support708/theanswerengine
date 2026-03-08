/**
 * Vercel Cron endpoint for Blog Bot.
 * Protected by CRON_SECRET - not by NextAuth (excluded in middleware).
 *
 * GET /api/cron/blog          — Generate mode: run pipeline, stage article
 * GET /api/cron/blog?action=publish — Publish mode: batch push all staged articles
 */

import { NextRequest, NextResponse } from 'next/server';
import { runBlogSession, publishStagedArticles } from '@/lib/blog-scheduler';

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

  const action = request.nextUrl.searchParams.get('action');

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

  // --- Generate Mode (default) ---
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
