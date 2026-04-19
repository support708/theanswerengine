/**
 * Blog Bot Scheduler - orchestrates the full publish pipeline.
 * Picks topic -> runs 3-call pipeline -> writes files -> updates metadata -> notifies.
 */

import { runPipeline, generateBlogSvg, generateBlogHeroImage } from './blog-bot';
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
  readBlogPosts,
  readStagedArticles,
  stageBlogArticle,
  clearStagedArticles,
} from './blog-data';
import { publishToGitHub, getFileContent } from './github-publish';
import { notifyBlogPublished } from './telegram';
import { autoSubmitTae } from './sitemap-auto-submit';
import type { BlogSession, BlogPostMeta, StagedArticle } from './blog-types';

const IS_VERCEL = !!process.env.VERCEL;

const MAX_DAILY_CRON = 2;

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
    // Gather existing titles/slugs for duplicate prevention
    let existingTitles: string[] = [];
    let existingSlugs: string[] = [];
    try {
      if (IS_VERCEL && process.env.GITHUB_TOKEN) {
        const postsJson = await getFileContent('app/blog/blogPosts.json');
        const posts = JSON.parse(postsJson) as BlogPostMeta[];
        existingTitles = posts.map(p => p.title);
        existingSlugs = posts.map(p => p.slug);
      } else {
        const posts = await readBlogPosts();
        existingTitles = posts.map(p => p.title);
        existingSlugs = posts.map(p => p.slug);
      }
    } catch { /* first run — no posts yet */ }

    // Run the 3-call pipeline
    const result = await runPipeline(topic, existingTitles, existingSlugs);

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
    const today = new Date().toISOString().split('T')[0];

    // Generate hero image (Gemini WebP with SVG fallback)
    const heroResult = await generateBlogHeroImage(
      result.research.refinedTitle,
      result.research.category || topic.category,
      finalSlug,
    );
    const heroSvg = heroResult.svgFallback;
    const imagePath = heroResult.webpPath || `/blog/${finalSlug}.svg`;

    if (IS_VERCEL && process.env.GITHUB_TOKEN) {
      // PRODUCTION: Stage article for end-of-day batch publish
      const postMeta: Omit<BlogPostMeta, 'id'> = {
        title: result.research.refinedTitle,
        slug: finalSlug,
        excerpt: result.research.excerpt,
        category: result.research.category || topic.category,
        author: 'The Answer Engine Team',
        readTime: `${result.research.readTimeMinutes} min`,
        image: imagePath,
        publishDate: today,
        lastModified: today,
        featured: true,
        tags: result.research.tags,
      };

      await stageBlogArticle({
        slug: finalSlug,
        code: result.code,
        svg: heroSvg,
        postMeta,
        topicId: topic.id,
        session,
        stagedAt: new Date().toISOString(),
      });
      console.log(`Staged for batch publish: ${finalSlug}`);
    } else {
      // LOCAL: Write files directly (for development/CLI usage)
      await writeBlogPostPage(finalSlug, result.code);

      // Write SVG hero image
      const { promises: fs } = await import('fs');
      const path = await import('path');
      const svgPath = path.join(process.cwd(), 'public', 'blog', `${finalSlug}.svg`);
      await fs.mkdir(path.dirname(svgPath), { recursive: true });
      await fs.writeFile(svgPath, heroSvg, 'utf-8');

      const nextId = await getNextBlogPostId();
      const postMeta: BlogPostMeta = {
        id: nextId,
        title: result.research.refinedTitle,
        slug: finalSlug,
        excerpt: result.research.excerpt,
        category: result.research.category || topic.category,
        author: 'The Answer Engine Team',
        readTime: `${result.research.readTimeMinutes} min`,
        image: imagePath,
        publishDate: today,
        lastModified: today,
        featured: true,
        tags: result.research.tags,
      };
      await appendBlogPost(postMeta);
    }

    // Mark topic as published
    await markTopicPublished(topic.id);
    session.published = true;
    session.completedAt = new Date().toISOString();

    // Log session
    await appendBlogSession(session);

    // Telegram notification
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

// --- Batch Publish (end-of-day cron) ---

export async function publishStagedArticles(): Promise<{ count: number; commitSha?: string }> {
  const staged = await readStagedArticles();
  if (staged.length === 0) {
    return { count: 0 };
  }

  // Fetch current blogPosts.json from GitHub
  const currentPostsJson = await getFileContent('app/blog/blogPosts.json');
  const currentPosts = JSON.parse(currentPostsJson) as BlogPostMeta[];
  let nextId = currentPosts.reduce((max, p) => Math.max(max, p.id), 0) + 1;

  // Build file list for single atomic commit
  const files: { path: string; content: string }[] = [];
  const titles: string[] = [];

  for (const article of staged) {
    const postMeta: BlogPostMeta = {
      ...article.postMeta,
      id: nextId++,
    };
    currentPosts.push(postMeta);
    titles.push(postMeta.title);

    files.push({ path: `app/blog/${article.slug}/page.tsx`, content: article.code });
    files.push({ path: `public/blog/${article.slug}.svg`, content: article.svg });
  }

  // Add updated blogPosts.json
  files.push({ path: 'app/blog/blogPosts.json', content: JSON.stringify(currentPosts, null, 2) });

  // Single GitHub commit for all articles
  const commitMsg = staged.length === 1
    ? `blog: ${titles[0]}`
    : `blog: publish ${staged.length} articles`;
  const { commitSha } = await publishToGitHub(files, commitMsg);
  console.log(`Batch published ${staged.length} articles: ${commitSha}`);

  // Clear staged articles
  await clearStagedArticles();

  // Telegram notification
  try {
    const { notifyBlogBatchPublished } = await import('./telegram');
    await notifyBlogBatchPublished(staged.length, commitSha);
  } catch { /* non-critical */ }

  // Auto-submit TAE sitemap to GSC so Google re-crawls the new articles.
  // Fire-and-forget: never blocks/fails the publish path.
  try {
    const result = await autoSubmitTae();
    if (result.submitted) {
      console.log(`Sitemap auto-submitted: ${result.feedpath}`);
    } else {
      console.log(`Sitemap auto-submit skipped: ${result.reason}`);
    }
  } catch (err) {
    console.log(`Sitemap auto-submit error (non-blocking): ${(err as Error).message}`);
  }

  return { count: staged.length, commitSha };
}

export async function getBlogStatus(): Promise<{
  state: Awaited<ReturnType<typeof readBlogState>>;
  lastSession?: BlogSession;
  stagedCount?: number;
}> {
  const state = await readBlogState();
  const lastSession = state.sessions.length > 0 ? state.sessions[state.sessions.length - 1] : undefined;
  const staged = await readStagedArticles();
  return { state, lastSession, stagedCount: staged.length };
}
