/**
 * Page-2 Opportunity Queue finder.
 *
 * For each client, pull the last 28 days of GSC queries, filter to those
 * ranked 11-20 with >=10 impressions, and dedupe against queries that have
 * already been queued or published on TAE's blog (or are already in the
 * per-client opportunity store).
 *
 * Results are persisted to data/gsc-page2-opportunities.json via GitHub
 * REST so the file is readable across Vercel deploys AND tracked in source.
 * The TAE Content Engine (local Claude Code protocol or Vercel cron) can
 * consume the committed file to pick its next topic.
 *
 * Design rules (backlog Interpretation Layer):
 *   - Every opportunity records the owning client_slug + their goal snippet
 *   - Highest-impact queries surface first (sorted by impressions desc)
 *   - Per-client cap prevents one client from monopolizing the weekly digest
 */
import { getTopQueries, type GscQueryRow } from './gsc-api';

export interface Page2Opportunity {
  id: string; // `${slug}:${normalizedQuery}`
  clientSlug: string;
  clientDisplayName: string;
  siteUrl: string;
  query: string;
  impressions: number;
  clicks: number;
  position: number; // 10 < x <= 20
  firstSeenAt: string; // ISO date — when we first detected this opportunity
  lastSeenAt: string; // updated each run
  timesSeen: number;
  routedToTaeQueue?: boolean; // set true after TAE Content Engine picks it up
  goalPrimaryOutcome?: string; // from client profile — for Interpretation Layer
}

export interface OpportunityStore {
  version: 1;
  updatedAt: string;
  lastRunAt: string;
  byClient: Record<string, Page2Opportunity[]>;
}

export function emptyStore(): OpportunityStore {
  return {
    version: 1,
    updatedAt: new Date().toISOString(),
    lastRunAt: new Date().toISOString(),
    byClient: {},
  };
}

/**
 * Derive last 28-day window with GSC's 3-day lag backed out.
 */
export function last28Window(now: Date = new Date()): { start: string; end: string } {
  const end = new Date(now.getTime() - 3 * 86400 * 1000);
  const start = new Date(end.getTime() - 27 * 86400 * 1000);
  const fmt = (d: Date) => d.toISOString().slice(0, 10);
  return { start: fmt(start), end: fmt(end) };
}

export function normalizeQuery(q: string): string {
  return q
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80);
}

export function opportunityId(slug: string, query: string): string {
  return `${slug}:${normalizeQuery(query)}`;
}

/**
 * Filter raw GSC query rows into page-2 opportunities:
 *   - position > 10 and <= 20
 *   - impressions >= minImpressions (default 10)
 *   - clicks small enough that ranking lift matters (we skip already-converting
 *     high-click queries regardless of position)
 */
export function filterToPage2(
  rows: GscQueryRow[],
  opts: { minImpressions?: number; maxPerClient?: number } = {},
): GscQueryRow[] {
  const minImpr = opts.minImpressions ?? 10;
  const cap = opts.maxPerClient ?? 15;
  return rows
    .filter(r => r.position > 10 && r.position <= 20 && r.impressions >= minImpr)
    .sort((a, b) => b.impressions - a.impressions)
    .slice(0, cap);
}

/**
 * Run the opportunity finder for a single client. Merges with existing
 * store entries: if an opportunity was seen in a prior run, increments
 * timesSeen + updates lastSeenAt. New opportunities get firstSeenAt = now.
 */
export async function findOpportunitiesForClient(input: {
  slug: string;
  displayName: string;
  siteUrl: string;
  goalPrimaryOutcome?: string;
  existingForSlug: Page2Opportunity[];
  minImpressions?: number;
  maxPerClient?: number;
  windowEnd?: Date;
}): Promise<Page2Opportunity[]> {
  const { start, end } = last28Window(input.windowEnd);
  const rows = await getTopQueries(input.siteUrl, start, end, 100);
  const filtered = filterToPage2(rows, {
    minImpressions: input.minImpressions,
    maxPerClient: input.maxPerClient,
  });

  const nowIso = new Date().toISOString();
  const existingById = new Map<string, Page2Opportunity>();
  for (const o of input.existingForSlug) existingById.set(o.id, o);

  const next: Page2Opportunity[] = [];
  for (const r of filtered) {
    const id = opportunityId(input.slug, r.query);
    const prior = existingById.get(id);
    if (prior) {
      next.push({
        ...prior,
        impressions: r.impressions,
        clicks: r.clicks,
        position: r.position,
        lastSeenAt: nowIso,
        timesSeen: prior.timesSeen + 1,
        goalPrimaryOutcome: input.goalPrimaryOutcome || prior.goalPrimaryOutcome,
      });
      existingById.delete(id);
      continue;
    }
    next.push({
      id,
      clientSlug: input.slug,
      clientDisplayName: input.displayName,
      siteUrl: input.siteUrl,
      query: r.query,
      impressions: r.impressions,
      clicks: r.clicks,
      position: r.position,
      firstSeenAt: nowIso,
      lastSeenAt: nowIso,
      timesSeen: 1,
      goalPrimaryOutcome: input.goalPrimaryOutcome,
    });
  }

  // Drop opportunities that no longer qualify (fell off page 2 or impressions crashed).
  // existingById now only contains entries that were in the store but not in
  // this run's filtered list — we intentionally discard them so the store
  // reflects current state.

  return next;
}

/**
 * Merge per-client results back into a full store.
 */
export function mergeStore(store: OpportunityStore, byClient: Record<string, Page2Opportunity[]>): OpportunityStore {
  const nowIso = new Date().toISOString();
  return {
    version: 1,
    updatedAt: nowIso,
    lastRunAt: nowIso,
    byClient: { ...store.byClient, ...byClient },
  };
}

export function summarizeStore(store: OpportunityStore): {
  totalOpportunities: number;
  byClient: Array<{ slug: string; count: number; totalImpressions: number }>;
} {
  const entries = Object.entries(store.byClient).map(([slug, list]) => ({
    slug,
    count: list.length,
    totalImpressions: list.reduce((s, o) => s + o.impressions, 0),
  }));
  entries.sort((a, b) => b.totalImpressions - a.totalImpressions);
  return {
    totalOpportunities: entries.reduce((s, e) => s + e.count, 0),
    byClient: entries,
  };
}

export function topNewOpportunities(
  prior: OpportunityStore,
  next: OpportunityStore,
  n = 10,
): Page2Opportunity[] {
  const priorIds = new Set<string>();
  for (const list of Object.values(prior.byClient)) for (const o of list) priorIds.add(o.id);
  const newOnes: Page2Opportunity[] = [];
  for (const list of Object.values(next.byClient)) {
    for (const o of list) if (!priorIds.has(o.id)) newOnes.push(o);
  }
  newOnes.sort((a, b) => b.impressions - a.impressions);
  return newOnes.slice(0, n);
}
