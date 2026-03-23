/**
 * Reddit Monitor — State Persistence
 *
 * Manages two JSON data files:
 *   data/reddit-state.json — seen post IDs, poll timestamps, monthly stats
 *   data/reddit-opportunities.json — scored opportunities per client
 *
 * Follows the same dual-mode pattern as email-scheduler.ts:
 *   Local: fs read/write
 *   Vercel: GitHub API via github-publish.ts
 */

import { promises as fs } from 'fs';
import path from 'path';
import { getFileContentSafe, publishToGitHub } from './github-publish';
import type {
  RedditState,
  RedditOpportunitiesStore,
  RedditOpportunity,
  MonthlyStats,
  ClientMonthlyStats,
} from './reddit-types';

const IS_VERCEL = !!process.env.VERCEL;

const STATE_PATH = path.join(process.cwd(), 'data', 'reddit-state.json');
const OPPS_PATH = path.join(process.cwd(), 'data', 'reddit-opportunities.json');
const GH_STATE_PATH = 'data/reddit-state.json';
const GH_OPPS_PATH = 'data/reddit-opportunities.json';

// TTL for seen post IDs: 30 days
const SEEN_POST_TTL_MS = 30 * 24 * 60 * 60 * 1000;

// Simple in-memory lock to prevent concurrent writes from poll + digest crons
let writeLock = false;
const LOCK_TIMEOUT_MS = 30_000; // 30s max lock hold
let lockAcquiredAt = 0;

async function acquireWriteLock(): Promise<boolean> {
  // Release stale locks
  if (writeLock && Date.now() - lockAcquiredAt > LOCK_TIMEOUT_MS) {
    writeLock = false;
  }
  if (writeLock) return false;
  writeLock = true;
  lockAcquiredAt = Date.now();
  return true;
}

function releaseWriteLock(): void {
  writeLock = false;
}

// ===== Default State =====

function currentMonth(): string {
  return new Date().toISOString().slice(0, 7); // "2026-03"
}

function defaultMonthlyStats(): MonthlyStats {
  return {
    month: currentMonth(),
    totalScanned: 0,
    totalQualified: 0,
    byClient: {},
  };
}

function defaultState(): RedditState {
  return {
    seenPostIds: {},
    lastPollBySubreddit: {},
    lastDigestByClient: {},
    monthlyStats: defaultMonthlyStats(),
  };
}

function defaultOpportunitiesStore(): RedditOpportunitiesStore {
  return { opportunities: [] };
}

// ===== State Read/Write =====

export async function readRedditState(): Promise<RedditState> {
  try {
    let data: string | null = null;

    if (IS_VERCEL) {
      data = await getFileContentSafe(GH_STATE_PATH);
    } else {
      data = await fs.readFile(STATE_PATH, 'utf-8');
    }

    if (!data) return defaultState();

    const state = JSON.parse(data) as RedditState;

    // Reset monthly stats if month rolled over
    if (state.monthlyStats.month !== currentMonth()) {
      state.monthlyStats = defaultMonthlyStats();
    }

    return state;
  } catch {
    return defaultState();
  }
}

export async function writeRedditState(state: RedditState): Promise<void> {
  const content = JSON.stringify(state, null, 2);

  if (IS_VERCEL) {
    await publishToGitHub(
      [{ path: GH_STATE_PATH, content }],
      `data: update reddit monitor state`,
    );
    return;
  }

  await fs.mkdir(path.dirname(STATE_PATH), { recursive: true });
  await fs.writeFile(STATE_PATH, content, 'utf-8');
}

// ===== Opportunities Read/Write =====

export async function readOpportunities(): Promise<RedditOpportunitiesStore> {
  try {
    let data: string | null = null;

    if (IS_VERCEL) {
      data = await getFileContentSafe(GH_OPPS_PATH);
    } else {
      data = await fs.readFile(OPPS_PATH, 'utf-8');
    }

    if (!data) return defaultOpportunitiesStore();
    return JSON.parse(data) as RedditOpportunitiesStore;
  } catch {
    return defaultOpportunitiesStore();
  }
}

export async function writeOpportunities(store: RedditOpportunitiesStore): Promise<void> {
  const content = JSON.stringify(store, null, 2);

  if (IS_VERCEL) {
    await publishToGitHub(
      [{ path: GH_OPPS_PATH, content }],
      `data: update reddit opportunities (${store.opportunities.length} total)`,
    );
    return;
  }

  await fs.mkdir(path.dirname(OPPS_PATH), { recursive: true });
  await fs.writeFile(OPPS_PATH, content, 'utf-8');
}

/**
 * Atomic flush: write both state and opportunities in a single GitHub commit.
 * Avoids double-commits on Vercel. Uses write lock to prevent concurrent writes.
 * Only commits if there were actual changes (new opportunities or state updates).
 */
export async function flushRedditData(
  state: RedditState,
  store: RedditOpportunitiesStore,
  hasChanges: boolean = true,
): Promise<void> {
  const locked = await acquireWriteLock();
  if (!locked) {
    console.warn('Reddit state write skipped: another write in progress');
    return;
  }

  try {
    if (IS_VERCEL) {
      // Skip commit if no meaningful changes (avoids empty-commit deploy loops)
      if (!hasChanges) {
        console.log('No changes to commit, skipping GitHub publish');
        return;
      }

      await publishToGitHub(
        [
          { path: GH_STATE_PATH, content: JSON.stringify(state, null, 2) },
          { path: GH_OPPS_PATH, content: JSON.stringify(store, null, 2) },
        ],
        `data: reddit monitor update (${store.opportunities.length} opps)`,
      );
      return;
    }

    // Local: write both files
    await fs.mkdir(path.dirname(STATE_PATH), { recursive: true });
    await Promise.all([
      fs.writeFile(STATE_PATH, JSON.stringify(state, null, 2), 'utf-8'),
      fs.writeFile(OPPS_PATH, JSON.stringify(store, null, 2), 'utf-8'),
    ]);
  } finally {
    releaseWriteLock();
  }
}

// ===== Deduplication =====

/**
 * Check if a post has already been seen.
 */
export function isPostSeen(state: RedditState, postId: string): boolean {
  return postId in state.seenPostIds;
}

/**
 * Mark a post as seen with current timestamp.
 */
export function markPostSeen(state: RedditState, postId: string): void {
  state.seenPostIds[postId] = Date.now();
}

/**
 * Prune seen post IDs older than 30 days.
 */
export function pruneSeenPosts(state: RedditState): number {
  const cutoff = Date.now() - SEEN_POST_TTL_MS;
  let pruned = 0;

  for (const [postId, timestamp] of Object.entries(state.seenPostIds)) {
    if (timestamp < cutoff) {
      delete state.seenPostIds[postId];
      pruned++;
    }
  }

  return pruned;
}

// ===== Monthly Stats =====

/**
 * Get or create client monthly stats entry.
 */
function getClientStats(state: RedditState, clientSlug: string): ClientMonthlyStats {
  if (!state.monthlyStats.byClient[clientSlug]) {
    state.monthlyStats.byClient[clientSlug] = {
      opportunities: 0,
      digestsSent: 0,
      highImpact: 0,
      mediumImpact: 0,
      lowImpact: 0,
    };
  }
  return state.monthlyStats.byClient[clientSlug];
}

/**
 * Record a qualified opportunity in monthly stats.
 */
export function recordOpportunity(
  state: RedditState,
  clientSlug: string,
  impact: 'high' | 'medium' | 'low',
): void {
  state.monthlyStats.totalQualified++;
  const clientStats = getClientStats(state, clientSlug);
  clientStats.opportunities++;

  if (impact === 'high') clientStats.highImpact++;
  else if (impact === 'medium') clientStats.mediumImpact++;
  else clientStats.lowImpact++;
}

/**
 * Record scanned posts count.
 */
export function recordScanned(state: RedditState, count: number): void {
  state.monthlyStats.totalScanned += count;
}

/**
 * Record a digest sent for a client.
 */
export function recordDigestSent(state: RedditState, clientSlug: string): void {
  const clientStats = getClientStats(state, clientSlug);
  clientStats.digestsSent++;
}

// ===== Opportunity Helpers =====

/**
 * Add a new opportunity to the store.
 */
export function addOpportunity(
  store: RedditOpportunitiesStore,
  opportunity: RedditOpportunity,
): void {
  store.opportunities.push(opportunity);
}

/**
 * Get unsent opportunities for a specific client.
 */
export function getUnsentOpportunities(
  store: RedditOpportunitiesStore,
  clientSlug: string,
): RedditOpportunity[] {
  return store.opportunities.filter(
    opp => opp.clientSlug === clientSlug && opp.digestSentAt === null,
  );
}

/**
 * Prune old opportunities (keep last 90 days, max 500 total).
 */
export function pruneOldOpportunities(store: RedditOpportunitiesStore): number {
  const cutoff = Date.now() - 90 * 24 * 60 * 60 * 1000;
  const before = store.opportunities.length;

  // Remove old opportunities
  store.opportunities = store.opportunities.filter(
    opp => new Date(opp.discoveredAt).getTime() > cutoff,
  );

  // Cap at 500 total (keep newest)
  if (store.opportunities.length > 500) {
    store.opportunities = store.opportunities
      .sort((a, b) => new Date(b.discoveredAt).getTime() - new Date(a.discoveredAt).getTime())
      .slice(0, 500);
  }

  return before - store.opportunities.length;
}
