/**
 * AEO Authority Index — a 0-100 weighted score that serves as the hero
 * number for every client-facing surface (Monday Brief, Monthly Report,
 * Dashboard). Composed of six components:
 *
 *   - GSC Performance   (40%)  [real]  impressions momentum, query
 *                                      diversity, avg position, CTR
 *   - Reddit Engagement (15%)  [real]  high-impact opps in last 30d
 *   - Content Velocity  (15%)  [real]  new ranking pages in last 28d
 *   - Reviews           (15%)  [real]  rating × log(count)
 *   - AI Citations      (10%)  [stub]  constant 50 until tracker ships
 *   - Backlink Proxy    ( 5%)  [stub]  scaled by total GSC impressions
 *
 * Per-client history is appended to data/authority-index-history.json on
 * every run; the delta vs last run is what feeds "↑ 3 from last week" in
 * the Monday Brief. All component math is deterministic — the only LLM use
 * is downstream (the Recommender consumes this score, it doesn't compute it).
 */

import * as fs from 'fs';
import * as path from 'path';
import { getTopQueries, getTopPages, type GscQueryRow, type GscPageRow } from './gsc-api';
import { readOpportunities } from './reddit-state';

export interface AuthorityIndexBreakdown {
  gsc: number;
  reddit: number;
  content_velocity: number;
  reviews: number;
  ai_citations: number;
  backlink_proxy: number;
}

export interface AuthorityIndexEntry {
  timestamp: string;             // ISO
  score: number;                 // 0-100
  breakdown: AuthorityIndexBreakdown;
  signals: {
    impressions_28d: number;
    impressions_prev_28d: number;
    clicks_28d: number;
    avg_position: number;
    avg_ctr: number;
    unique_queries: number;
    new_ranking_pages: number;
    reddit_high_impact_30d: number;
    review_count: number;
    review_rating: number;
  };
}

export interface AuthorityIndexResult extends AuthorityIndexEntry {
  slug: string;
  displayName: string;
  siteUrl: string;
  deltaFromLast: number | null;  // score - previous score (null if first run)
  lastEntryTimestamp: string | null;
}

interface HistoryFile {
  [clientSlug: string]: AuthorityIndexEntry[];
}

const HISTORY_PATH = path.join(process.cwd(), 'data', 'authority-index-history.json');
const HISTORY_MAX_ENTRIES_PER_CLIENT = 104; // 2 years of weekly runs

function loadHistory(): HistoryFile {
  if (!fs.existsSync(HISTORY_PATH)) return {};
  try {
    return JSON.parse(fs.readFileSync(HISTORY_PATH, 'utf-8'));
  } catch {
    return {};
  }
}

function saveHistory(history: HistoryFile): void {
  fs.writeFileSync(HISTORY_PATH, JSON.stringify(history, null, 2));
}

/**
 * Clamp helper — keeps component scores inside [0, 100].
 */
function clamp(n: number, min = 0, max = 100): number {
  return Math.max(min, Math.min(max, n));
}

/**
 * Compute GSC component from current + prior 28-day query rows.
 */
function computeGscComponent(
  cur: GscQueryRow[],
  prev: GscQueryRow[],
): { score: number; signals: { impressions: number; prevImpressions: number; clicks: number; avgPosition: number; avgCtr: number; uniqueQueries: number } } {
  const curImp = cur.reduce((s, r) => s + r.impressions, 0);
  const curClicks = cur.reduce((s, r) => s + r.clicks, 0);
  const prevImp = prev.reduce((s, r) => s + r.impressions, 0);

  const momentum = prevImp === 0
    ? (curImp > 0 ? 100 : 0)
    : Math.round(((curImp - prevImp) / prevImp) * 100);
  const momentumScore =
    momentum >= 20 ? 100 :
    momentum >= 0  ? 70 :
    momentum >= -20 ? 40 : 10;

  const uniqueQueries = cur.filter(r => r.impressions >= 10).length;
  const diversityScore = clamp(uniqueQueries * 2);

  const weightedPos = curImp > 0
    ? cur.reduce((s, r) => s + r.position * r.impressions, 0) / curImp
    : 50;
  const positionScore = clamp(((30 - weightedPos) / 30) * 100);

  const avgCtr = curImp > 0 ? curClicks / curImp : 0;
  const ctrScore = clamp(avgCtr * 1000);

  const component = Math.round((momentumScore + diversityScore + positionScore + ctrScore) / 4);

  return {
    score: component,
    signals: {
      impressions: curImp,
      prevImpressions: prevImp,
      clicks: curClicks,
      avgPosition: Math.round(weightedPos * 10) / 10,
      avgCtr: Math.round(avgCtr * 10000) / 10000,
      uniqueQueries,
    },
  };
}

/**
 * Count new pages ranking in current 28d window that weren't in prior 28d.
 */
function computeContentVelocity(cur: GscPageRow[], prev: GscPageRow[]): { score: number; newPages: number } {
  const prevUrls = new Set(prev.map(p => p.page));
  const newPages = cur.filter(p => !prevUrls.has(p.page) && p.impressions >= 1).length;
  const score = newPages === 0 ? 0 : newPages <= 2 ? 50 : newPages <= 4 ? 75 : 100;
  return { score, newPages };
}

/**
 * Count Reddit opportunities for this client in the last 30 days with
 * composite impact score ≥ 7.
 */
async function computeRedditComponent(clientSlug: string): Promise<{ score: number; highImpactCount: number }> {
  try {
    const store = await readOpportunities();
    const cutoff = Date.now() - 30 * 24 * 60 * 60 * 1000;
    const count = store.opportunities.filter(o =>
      o.clientSlug === clientSlug &&
      new Date(o.discoveredAt || 0).getTime() >= cutoff &&
      (o.score?.composite ?? 0) >= 7,
    ).length;
    const score =
      count === 0 ? 0 :
      count <= 2 ? 50 :
      count <= 4 ? 75 : 100;
    return { score, highImpactCount: count };
  } catch {
    return { score: 50, highImpactCount: 0 };
  }
}

/**
 * Review component from profile.reviews.google (and yelp as fallback).
 * Formula: rating (0-5) / 5 × log10(count+1) × 30, clamped 0-100.
 * 5.0 × 100 reviews → ~60. 5.0 × 1000 → ~90.
 */
function computeReviewComponent(profile: Record<string, unknown>): { score: number; count: number; rating: number } {
  const reviews = (profile.reviews as Record<string, { rating?: number; count?: number }> | undefined) || {};
  const google = reviews.google || {};
  const yelp = reviews.yelp || {};

  const count = Math.max(Number(google.count) || 0, Number(yelp.count) || 0);
  const rating = Math.max(Number(google.rating) || 0, Number(yelp.rating) || 0);

  if (count === 0 || rating === 0) {
    return { score: 50, count, rating }; // neutral placeholder
  }

  const score = clamp((rating / 5) * Math.log10(count + 1) * 30);
  return { score: Math.round(score), count, rating };
}

/**
 * Backlink proxy — scaled by total GSC impressions in last 28d. This is a
 * stand-in until we integrate Ahrefs/SEMrush. Sites with more impressions
 * almost always have more backlinks, so the proxy is directionally right.
 */
function computeBacklinkProxy(impressions28d: number): number {
  if (impressions28d >= 1_000_000) return 95;
  if (impressions28d >= 100_000) return 80;
  if (impressions28d >= 10_000) return 60;
  if (impressions28d >= 1_000) return 40;
  if (impressions28d >= 100) return 20;
  return 10;
}

/**
 * Resolve the GSC site URL for a client slug from data/gsc-client-map.json.
 */
function siteUrlForSlug(slug: string): string | null {
  const mapPath = path.join(process.cwd(), 'data', 'gsc-client-map.json');
  if (!fs.existsSync(mapPath)) return null;
  const map: Record<string, string> = JSON.parse(fs.readFileSync(mapPath, 'utf-8'));
  for (const [siteUrl, s] of Object.entries(map)) {
    if (s === slug) return siteUrl;
  }
  return null;
}

function loadProfile(slug: string): Record<string, unknown> {
  const filepath = path.join(process.cwd(), 'data', 'client-profiles', `${slug}.json`);
  if (!fs.existsSync(filepath)) {
    throw new Error(`Client profile not found: ${slug}`);
  }
  return JSON.parse(fs.readFileSync(filepath, 'utf-8'));
}

function daysAgoISO(days: number): string {
  const d = new Date(Date.now() - days * 24 * 60 * 60 * 1000);
  return d.toISOString().slice(0, 10);
}

export interface ComputeOptions {
  /** If true, append the result to data/authority-index-history.json */
  persist?: boolean;
}

/**
 * Compute the AEO Authority Index for a given client slug.
 * Pulls fresh data every call (GSC 28d current + prior, Reddit opps,
 * profile reviews). Fast (~2-4s) — safe to call on every Monday Brief run.
 */
export async function computeAuthorityIndex(
  slug: string,
  opts: ComputeOptions = {},
): Promise<AuthorityIndexResult> {
  const siteUrl = siteUrlForSlug(slug);
  if (!siteUrl) {
    throw new Error(`No GSC site URL mapped for client slug '${slug}' — add it to data/gsc-client-map.json`);
  }

  const profile = loadProfile(slug);
  const displayName = String(
    (profile.business as Record<string, string> | undefined)?.dba
    || (profile.business as Record<string, string> | undefined)?.legal_name
    || slug,
  );

  // GSC windows: current 28d (ending 3 days ago for GSC lag), prior 28d before that.
  const endDate = daysAgoISO(3);
  const startDate = daysAgoISO(31);   // 28-day window ending 3 days ago
  const prevEnd = daysAgoISO(32);
  const prevStart = daysAgoISO(60);

  const [curQueries, prevQueries, curPages, prevPages] = await Promise.all([
    getTopQueries(siteUrl, startDate, endDate, 500),
    getTopQueries(siteUrl, prevStart, prevEnd, 500),
    getTopPages(siteUrl, startDate, endDate, 200),
    getTopPages(siteUrl, prevStart, prevEnd, 200),
  ]);

  const gsc = computeGscComponent(curQueries, prevQueries);
  const content = computeContentVelocity(curPages, prevPages);
  const reddit = await computeRedditComponent(slug);
  const review = computeReviewComponent(profile);
  const backlinkProxy = computeBacklinkProxy(gsc.signals.impressions);
  const aiCitations = 50; // placeholder until #10 tracker ships

  const breakdown: AuthorityIndexBreakdown = {
    gsc: gsc.score,
    reddit: reddit.score,
    content_velocity: content.score,
    reviews: review.score,
    ai_citations: aiCitations,
    backlink_proxy: backlinkProxy,
  };

  const score = Math.round(
    0.40 * breakdown.gsc +
    0.15 * breakdown.reddit +
    0.15 * breakdown.content_velocity +
    0.15 * breakdown.reviews +
    0.10 * breakdown.ai_citations +
    0.05 * breakdown.backlink_proxy,
  );

  const entry: AuthorityIndexEntry = {
    timestamp: new Date().toISOString(),
    score,
    breakdown,
    signals: {
      impressions_28d: gsc.signals.impressions,
      impressions_prev_28d: gsc.signals.prevImpressions,
      clicks_28d: gsc.signals.clicks,
      avg_position: gsc.signals.avgPosition,
      avg_ctr: gsc.signals.avgCtr,
      unique_queries: gsc.signals.uniqueQueries,
      new_ranking_pages: content.newPages,
      reddit_high_impact_30d: reddit.highImpactCount,
      review_count: review.count,
      review_rating: review.rating,
    },
  };

  const history = loadHistory();
  const prior = history[slug] || [];
  const lastEntry = prior[prior.length - 1];
  const deltaFromLast = lastEntry ? score - lastEntry.score : null;
  const lastEntryTimestamp = lastEntry?.timestamp || null;

  if (opts.persist) {
    const updated = [...prior, entry].slice(-HISTORY_MAX_ENTRIES_PER_CLIENT);
    history[slug] = updated;
    saveHistory(history);
  }

  return {
    ...entry,
    slug,
    displayName,
    siteUrl,
    deltaFromLast,
    lastEntryTimestamp,
  };
}

/**
 * Read-only accessor for a client's historical index entries.
 */
export function loadAuthorityIndexHistory(slug: string): AuthorityIndexEntry[] {
  const history = loadHistory();
  return history[slug] || [];
}

/**
 * Render a compact HTML fragment suitable for the Monday Brief hero block.
 * Obeys Brand Safety — positive framing always; downward deltas shown as
 * "steady" unless the caller explicitly wants the raw number.
 */
export function renderAuthorityIndexHtml(result: AuthorityIndexResult, options: { rawDelta?: boolean } = {}): string {
  const DISPLAY = `'Space Grotesk','Inter','Helvetica Neue',Arial,sans-serif`;
  const BRAND = '#FF6A00';

  const deltaLine = (() => {
    if (result.deltaFromLast === null) return 'Your first reading — baseline captured.';
    if (options.rawDelta) {
      const sign = result.deltaFromLast >= 0 ? '↑' : '↓';
      return `${sign} ${Math.abs(result.deltaFromLast)} from last reading`;
    }
    if (result.deltaFromLast > 0) return `↑ ${result.deltaFromLast} from last week`;
    if (result.deltaFromLast === 0) return 'Holding steady from last week';
    return `Steady this week — momentum initiatives in progress`;
  })();

  return `
<div style="margin:0 0 20px 0;padding:20px;background:#fafafa;border-left:4px solid ${BRAND};">
  <div style="font-family:${DISPLAY};font-size:12px;color:${BRAND};letter-spacing:0.08em;text-transform:uppercase;font-weight:700;margin-bottom:8px;">AEO Authority Index</div>
  <div style="font-family:${DISPLAY};font-size:42px;font-weight:800;color:#1a1a1a;line-height:1;margin-bottom:6px;">${result.score}<span style="font-size:22px;color:#888;">/100</span></div>
  <div style="font-size:13px;color:#555;">${escapeHtml(deltaLine)}</div>
</div>`;
}

function escapeHtml(s: string): string {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
