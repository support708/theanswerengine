/**
 * Manual trigger for Blog Bot.
 * Requires NextAuth admin session.
 * POST /api/blog/generate
 */

import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import { runBlogSession, getBlogStatus } from '@/lib/blog-scheduler';

export const maxDuration = 120;

export async function POST() {
  const session = await auth();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const blogSession = await runBlogSession('manual');
    const duration = blogSession.completedAt
      ? `${((new Date(blogSession.completedAt).getTime() - new Date(blogSession.startedAt).getTime()) / 1000).toFixed(1)}s`
      : 'unknown';

    return NextResponse.json({
      success: true,
      session: {
        id: blogSession.id,
        topic: blogSession.topicTitle,
        slug: blogSession.slug,
        auditScore: blogSession.auditScore,
        auditPassed: blogSession.auditPassed,
        published: blogSession.published,
        totalTokens: blogSession.researchTokens + blogSession.generationTokens + blogSession.auditTokens,
        duration,
        error: blogSession.error || null,
      },
    });
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : 'Blog generation failed' },
      { status: 500 },
    );
  }
}

export async function GET() {
  const session = await auth();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const status = await getBlogStatus();
  return NextResponse.json(status);
}
