/**
 * Data I/O for Blog Bot.
 * Manages blog-state.json and blog-topics.json.
 * Mirrors the pattern in lib/hunter-data.ts.
 */

import { promises as fs } from 'fs';
import path from 'path';
import type { BlogTopic, BlogState, BlogSession, BlogPostMeta, StagedArticle } from './blog-types';

const DATA_DIR = path.join(process.cwd(), 'data');
const STATE_PATH = path.join(DATA_DIR, 'blog-state.json');
const TOPICS_PATH = path.join(DATA_DIR, 'blog-topics.json');
const BLOG_POSTS_PATH = path.join(process.cwd(), 'app', 'blog', 'blogPosts.json');
const STAGED_PATH = path.join(DATA_DIR, 'blog-staged.json');

const DEFAULT_STATE: BlogState = {
  totalPublished: 0,
  totalFailed: 0,
  sessionsToday: 0,
  lastResetDate: new Date().toISOString().split('T')[0],
  sessions: [],
};

const SEED_TOPICS: BlogTopic[] = [
  {
    id: 'seed-1',
    title: 'What is Answer Engine Optimization? The Complete Guide',
    slug: 'what-is-answer-engine-optimization-guide',
    targetKeyword: 'what is answer engine optimization',
    category: 'AEO Education',
    pillar: 'AEO Education',
    priority: 1,
    status: 'queued',
    createdAt: new Date().toISOString(),
  },
  {
    id: 'seed-2',
    title: 'How to Get Cited by ChatGPT: A Local Business Guide',
    slug: 'how-to-get-cited-by-chatgpt-local-business',
    targetKeyword: 'how to get cited by ChatGPT local business',
    category: 'How-To Guides',
    pillar: 'How-To',
    priority: 2,
    status: 'queued',
    createdAt: new Date().toISOString(),
  },
  {
    id: 'seed-3',
    title: 'AEO vs SEO: What Local Businesses Actually Need to Know',
    slug: 'aeo-vs-seo-difference-local-business',
    targetKeyword: 'AEO vs SEO difference',
    category: 'Competitive Intelligence',
    pillar: 'Competitive Intelligence',
    priority: 2,
    status: 'queued',
    createdAt: new Date().toISOString(),
  },
  {
    id: 'seed-4',
    title: 'How Perplexity Decides What Sources to Cite',
    slug: 'how-perplexity-decides-what-to-cite',
    targetKeyword: 'how does Perplexity decide what to cite',
    category: 'Platform Deep Dives',
    pillar: 'Platform Deep Dives',
    priority: 3,
    status: 'queued',
    createdAt: new Date().toISOString(),
  },
  {
    id: 'seed-5',
    title: 'Does Schema Markup Actually Help with AI Search?',
    slug: 'does-schema-markup-help-ai-search',
    targetKeyword: 'does schema markup help with AI search',
    category: 'How-To Guides',
    pillar: 'How-To',
    priority: 3,
    status: 'queued',
    createdAt: new Date().toISOString(),
  },
  {
    id: 'seed-6',
    title: 'Why Google AI Overviews Are Replacing Traditional Search Results',
    slug: 'google-ai-overviews-replacing-search-results',
    targetKeyword: 'Google AI Overviews replacing search',
    category: 'AEO Education',
    pillar: 'AEO Education',
    priority: 2,
    status: 'queued',
    createdAt: new Date().toISOString(),
  },
  {
    id: 'seed-7',
    title: 'The Hub-and-Spoke Content Strategy for AI Citations',
    slug: 'hub-spoke-content-strategy-ai-citations',
    targetKeyword: 'hub and spoke content strategy AI',
    category: 'How-To Guides',
    pillar: 'How-To',
    priority: 2,
    status: 'queued',
    createdAt: new Date().toISOString(),
  },
  {
    id: 'seed-8',
    title: 'How Claude AI Evaluates Business Authority',
    slug: 'how-claude-ai-evaluates-business-authority',
    targetKeyword: 'how Claude AI recommends businesses',
    category: 'Platform Deep Dives',
    pillar: 'Platform Deep Dives',
    priority: 3,
    status: 'queued',
    createdAt: new Date().toISOString(),
  },
];

async function ensureDir(): Promise<void> {
  await fs.mkdir(DATA_DIR, { recursive: true });
}

// --- Blog State ---

export async function readBlogState(): Promise<BlogState> {
  try {
    const data = await fs.readFile(STATE_PATH, 'utf-8');
    const state = JSON.parse(data) as BlogState;
    // Reset daily counter if date changed
    const today = new Date().toISOString().split('T')[0];
    if (state.lastResetDate !== today) {
      state.sessionsToday = 0;
      state.lastResetDate = today;
    }
    return state;
  } catch {
    return { ...DEFAULT_STATE };
  }
}

export async function writeBlogState(state: BlogState): Promise<void> {
  await ensureDir();
  // Keep last 50 sessions in state
  state.sessions = state.sessions.slice(-50);
  await fs.writeFile(STATE_PATH, JSON.stringify(state, null, 2), 'utf-8');
}

export async function appendBlogSession(session: BlogSession): Promise<void> {
  const state = await readBlogState();
  state.sessions.push(session);
  state.lastRun = session.completedAt || session.startedAt;
  if (session.published) {
    state.totalPublished++;
  } else if (session.error) {
    state.totalFailed++;
  }
  state.sessionsToday++;
  await writeBlogState(state);
}

// --- Topic Queue ---

export async function readTopicQueue(): Promise<BlogTopic[]> {
  try {
    const data = await fs.readFile(TOPICS_PATH, 'utf-8');
    return JSON.parse(data) as BlogTopic[];
  } catch {
    // First run: seed with initial topics
    await writeTopicQueue(SEED_TOPICS);
    return [...SEED_TOPICS];
  }
}

export async function writeTopicQueue(topics: BlogTopic[]): Promise<void> {
  await ensureDir();
  await fs.writeFile(TOPICS_PATH, JSON.stringify(topics, null, 2), 'utf-8');
}

export async function getNextTopic(): Promise<BlogTopic | null> {
  const topics = await readTopicQueue();
  // Get highest priority (lowest number) queued topic
  const queued = topics
    .filter(t => t.status === 'queued')
    .sort((a, b) => a.priority - b.priority);
  return queued[0] || null;
}

export async function markTopicInProgress(id: string): Promise<void> {
  const topics = await readTopicQueue();
  const topic = topics.find(t => t.id === id);
  if (topic) {
    topic.status = 'in_progress';
    await writeTopicQueue(topics);
  }
}

export async function markTopicPublished(id: string): Promise<void> {
  const topics = await readTopicQueue();
  const topic = topics.find(t => t.id === id);
  if (topic) {
    topic.status = 'published';
    topic.publishedAt = new Date().toISOString();
    await writeTopicQueue(topics);
  }
}

export async function markTopicFailed(id: string, error: string): Promise<void> {
  const topics = await readTopicQueue();
  const topic = topics.find(t => t.id === id);
  if (topic) {
    topic.status = 'failed';
    topic.error = error;
    await writeTopicQueue(topics);
  }
}

// --- Blog Posts JSON ---

export async function readBlogPosts(): Promise<BlogPostMeta[]> {
  const data = await fs.readFile(BLOG_POSTS_PATH, 'utf-8');
  return JSON.parse(data) as BlogPostMeta[];
}

export async function appendBlogPost(post: BlogPostMeta): Promise<void> {
  const posts = await readBlogPosts();
  posts.push(post);
  await fs.writeFile(BLOG_POSTS_PATH, JSON.stringify(posts, null, 2), 'utf-8');
}

export async function getNextBlogPostId(): Promise<number> {
  const posts = await readBlogPosts();
  const maxId = posts.reduce((max, p) => Math.max(max, p.id), 0);
  return maxId + 1;
}

// --- Blog Post Page File ---

export async function writeBlogPostPage(slug: string, content: string): Promise<void> {
  const dir = path.join(process.cwd(), 'app', 'blog', slug);
  await fs.mkdir(dir, { recursive: true });
  await fs.writeFile(path.join(dir, 'page.tsx'), content, 'utf-8');
}

// --- Staged Articles (batch publishing) ---

export async function readStagedArticles(): Promise<StagedArticle[]> {
  try {
    const data = await fs.readFile(STAGED_PATH, 'utf-8');
    return JSON.parse(data) as StagedArticle[];
  } catch {
    return [];
  }
}

export async function stageBlogArticle(article: StagedArticle): Promise<void> {
  await ensureDir();
  const staged = await readStagedArticles();
  staged.push(article);
  await fs.writeFile(STAGED_PATH, JSON.stringify(staged, null, 2), 'utf-8');
}

export async function clearStagedArticles(): Promise<void> {
  await ensureDir();
  await fs.writeFile(STAGED_PATH, '[]', 'utf-8');
}
