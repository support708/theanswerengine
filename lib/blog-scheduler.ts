/**
 * Blog Bot Scheduler - orchestrates the full publish pipeline.
 * Picks topic -> runs 3-call pipeline -> writes files -> updates metadata -> notifies.
 */

import { runPipeline } from './blog-bot';
import {
  readBlogState,
  getNextTopic,
  markTopicInProgress,
  markTopicPublished,
  markTopicFailed,
  appendBlogSession,
  appendBlogPost,
  getNextBlogPostId,
  writeBlogPostPage,
} from './blog-data';
import { notifyBlogPublished } from './telegram';
import type { BlogSession, BlogPostMeta } from './blog-types';

const MAX_DAILY_CRON = 4;

export async function runBlogSession(trigger: 'cron' | 'manual'): Promise<BlogSession> {
  const sessionId = `blog_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
  const startedAt = new Date().toISOString();

  // Check daily limit for cron
  if (trigger === 'cron') {
    const state = await readBlogState();
    if (state.sessionsToday >= MAX_DAILY_CRON) {
      const session: BlogSession = {
        id: sessionId,
        startedAt,
        completedAt: new Date().toISOString(),
        trigger,
        topicId: '',
        topicTitle: 'SKIPPED',
        slug: '',
        researchTokens: 0,
        generationTokens: 0,
        auditTokens: 0,
        auditScore: 0,
        auditPassed: false,
        published: false,
        error: `Daily limit reached (${MAX_DAILY_CRON})`,
      };
      return session;
    }
  }

  // Get next topic
  const topic = await getNextTopic();
  if (!topic) {
    const session: BlogSession = {
      id: sessionId,
      startedAt,
      completedAt: new Date().toISOString(),
      trigger,
      topicId: '',
      topicTitle: 'NO_TOPICS',
      slug: '',
      researchTokens: 0,
      generationTokens: 0,
      auditTokens: 0,
      auditScore: 0,
      auditPassed: false,
      published: false,
      error: 'No queued topics available',
    };
    await appendBlogSession(session);
    return session;
  }

  await markTopicInProgress(topic.id);

  const session: BlogSession = {
    id: sessionId,
    startedAt,
    trigger,
    topicId: topic.id,
    topicTitle: topic.title,
    slug: topic.slug,
    researchTokens: 0,
    generationTokens: 0,
    auditTokens: 0,
    auditScore: 0,
    auditPassed: false,
    published: false,
  };

  try {
    // Run the 3-call pipeline
    const result = await runPipeline(topic);

    session.researchTokens = result.researchTokens;
    session.generationTokens = result.generationTokens;
    session.auditTokens = result.auditTokens;
    session.auditScore = result.audit.score;
    session.auditPassed = result.audit.passed;

    // Use the refined slug from research if different
    const finalSlug = result.research.slug || topic.slug;
    session.slug = finalSlug;

    if (!result.audit.passed) {
      session.error = `Audit failed (${result.audit.score}/100): ${result.audit.issues.join(', ')}`;
      await markTopicFailed(topic.id, session.error);
      session.completedAt = new Date().toISOString();
      await appendBlogSession(session);

      // Notify about failure
      try {
        await notifyBlogPublished(session);
      } catch { /* non-critical */ }

      return session;
    }

    // Audit passed - publish!
    // 1. Write page.tsx
    await writeBlogPostPage(finalSlug, result.code);

    // 2. Update blogPosts.json
    const nextId = await getNextBlogPostId();
    const today = new Date().toISOString().split('T')[0];
    const postMeta: BlogPostMeta = {
      id: nextId,
      title: result.research.refinedTitle,
      slug: finalSlug,
      excerpt: result.research.excerpt,
      category: result.research.category || topic.category,
      author: 'The Answer Engine Team',
      readTime: `${result.research.readTimeMinutes} min`,
      image: `/blog/${finalSlug}/hero`,
      publishDate: today,
      lastModified: today,
      featured: false,
      tags: result.research.tags,
    };
    await appendBlogPost(postMeta);

    // 3. Mark topic as published
    await markTopicPublished(topic.id);
    session.published = true;
    session.completedAt = new Date().toISOString();

    // 4. Log session
    await appendBlogSession(session);

    // 5. Telegram notification
    try {
      await notifyBlogPublished(session);
    } catch (err) {
      console.error('Telegram notification failed:', err);
    }

    return session;
  } catch (err) {
    const errorMsg = err instanceof Error ? err.message : String(err);
    session.error = errorMsg;
    session.completedAt = new Date().toISOString();
    await markTopicFailed(topic.id, errorMsg);
    await appendBlogSession(session);

    // Try to notify about failure
    try {
      await notifyBlogPublished(session);
    } catch { /* non-critical */ }

    return session;
  }
}

export async function getBlogStatus(): Promise<{
  state: Awaited<ReturnType<typeof readBlogState>>;
  lastSession?: BlogSession;
}> {
  const state = await readBlogState();
  const lastSession = state.sessions.length > 0 ? state.sessions[state.sessions.length - 1] : undefined;
  return { state, lastSession };
}
