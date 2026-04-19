/**
 * Onboarding baseline snapshot.
 *
 * Captures day-0 Search Console state for a new client so we have clean
 * before/after ammo for the sales deck, QBRs, and the eventual case study.
 * Snapshots are persisted to `data/gsc-baselines.json` via GitHub REST so
 * they're tracked in source and immutable from the snapshot date forward.
 *
 * A baseline includes:
 *   - 28-day impressions / clicks / avg CTR / avg position at capture time
 *   - Top 20 queries + top 10 pages
 *   - Captured GSC window (start / end dates)
 *   - Captured at (ISO timestamp)
 *
 * Capture policy:
 *   - Captured ONCE per client (first capture wins; subsequent captures
 *     are appended as "additional_snapshots" for QBR trend lines)
 *   - Overwrite requires explicit ?force=1 + captured_by=justin
 */
import { getTopQueries, getTopPages, type GscQueryRow, type GscPageRow } from './gsc-api';

export interface BaselineSnapshot {
  slug: string;
  displayName: string;
  siteUrl: string;
  capturedAt: string;
  windowStart: string;
  windowEnd: string;
  totalImpressions: number;
  totalClicks: number;
  avgCtr: number;
  avgPosition: number;
  topQueries: GscQueryRow[];
  topPages: GscPageRow[];
  capturedBy: string;
  note?: string;
}

export interface BaselinesFile {
  version: 1;
  updatedAt: string;
  byClient: Record<
    string,
    {
      baseline: BaselineSnapshot;
      additional_snapshots: BaselineSnapshot[]; // for QBR trend lines (Q1, Q2, etc.)
    }
  >;
}

export function emptyBaselinesFile(): BaselinesFile {
  return { version: 1, updatedAt: new Date().toISOString(), byClient: {} };
}

function last28Window(now: Date = new Date()): { start: string; end: string } {
  const end = new Date(now.getTime() - 3 * 86400 * 1000);
  const start = new Date(end.getTime() - 27 * 86400 * 1000);
  const fmt = (d: Date) => d.toISOString().slice(0, 10);
  return { start: fmt(start), end: fmt(end) };
}

/**
 * Build a fresh baseline snapshot from live GSC data.
 */
export async function captureSnapshot(input: {
  slug: string;
  displayName: string;
  siteUrl: string;
  capturedBy?: string;
  note?: string;
  now?: Date;
}): Promise<BaselineSnapshot> {
  const { start, end } = last28Window(input.now);

  const [queries, pages] = await Promise.all([
    getTopQueries(input.siteUrl, start, end, 50),
    getTopPages(input.siteUrl, start, end, 30),
  ]);

  const totals = queries.reduce(
    (a, r) => ({ impr: a.impr + r.impressions, clicks: a.clicks + r.clicks }),
    { impr: 0, clicks: 0 },
  );

  const avgCtr = totals.impr > 0 ? totals.clicks / totals.impr : 0;
  const avgPosition =
    totals.impr > 0
      ? queries.reduce((s, r) => s + r.position * r.impressions, 0) / totals.impr
      : 0;

  return {
    slug: input.slug,
    displayName: input.displayName,
    siteUrl: input.siteUrl,
    capturedAt: new Date().toISOString(),
    windowStart: start,
    windowEnd: end,
    totalImpressions: totals.impr,
    totalClicks: totals.clicks,
    avgCtr,
    avgPosition,
    topQueries: queries.slice(0, 20),
    topPages: pages.slice(0, 10),
    capturedBy: input.capturedBy || 'system',
    note: input.note,
  };
}

/**
 * Merge a snapshot into the baselines file.
 *  - If no baseline exists for this slug, it becomes THE baseline.
 *  - Otherwise it's appended to additional_snapshots (unless force=true).
 */
export function mergeSnapshot(
  file: BaselinesFile,
  snapshot: BaselineSnapshot,
  opts: { force?: boolean } = {},
): { file: BaselinesFile; action: 'created-baseline' | 'appended-snapshot' | 'overwrote-baseline' } {
  const existing = file.byClient[snapshot.slug];
  const nextFile: BaselinesFile = {
    ...file,
    updatedAt: new Date().toISOString(),
    byClient: { ...file.byClient },
  };

  if (!existing) {
    nextFile.byClient[snapshot.slug] = { baseline: snapshot, additional_snapshots: [] };
    return { file: nextFile, action: 'created-baseline' };
  }

  if (opts.force) {
    // Preserve old baseline as an archived snapshot; install the new one
    nextFile.byClient[snapshot.slug] = {
      baseline: snapshot,
      additional_snapshots: [existing.baseline, ...existing.additional_snapshots],
    };
    return { file: nextFile, action: 'overwrote-baseline' };
  }

  nextFile.byClient[snapshot.slug] = {
    baseline: existing.baseline,
    additional_snapshots: [...existing.additional_snapshots, snapshot],
  };
  return { file: nextFile, action: 'appended-snapshot' };
}

/**
 * Compute before/after vs the stored baseline. Useful for QBRs and case studies.
 */
export function deltaVsBaseline(
  baseline: BaselineSnapshot,
  current: BaselineSnapshot,
): {
  impressionsPct: number;
  clicksPct: number;
  ctrDelta: number;
  positionDelta: number; // negative = improved
  daysSinceBaseline: number;
} {
  const daysSinceBaseline = Math.round(
    (new Date(current.capturedAt).getTime() - new Date(baseline.capturedAt).getTime()) / 86400000,
  );
  const pct = (cur: number, base: number) =>
    base === 0 ? (cur > 0 ? 100 : 0) : Math.round(((cur - base) / base) * 100);
  return {
    impressionsPct: pct(current.totalImpressions, baseline.totalImpressions),
    clicksPct: pct(current.totalClicks, baseline.totalClicks),
    ctrDelta: Number((current.avgCtr - baseline.avgCtr).toFixed(4)),
    positionDelta: Number((current.avgPosition - baseline.avgPosition).toFixed(1)),
    daysSinceBaseline,
  };
}
