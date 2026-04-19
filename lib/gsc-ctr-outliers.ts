/**
 * CTR outlier detector.
 *
 * Surfaces pages / queries that rank in the top 10 but earn significantly
 * fewer clicks than their position should yield. These are the highest-
 * ROI title-and-meta rewrite targets: the ranking work is done, we just
 * need the title/description to actually pull the click.
 *
 * Expected CTR by position (industry averages, conservative):
 *   1: 28%, 2: 15%, 3: 11%, 4: 8%, 5: 7%, 6: 5%, 7: 4%, 8: 3%, 9: 2.5%, 10: 2%
 *
 * Outlier threshold: actual CTR < 60% of expected for the bucket.
 */
import { getTopQueries, getTopPages, type GscQueryRow, type GscPageRow } from './gsc-api';

export const EXPECTED_CTR_BY_POSITION: Record<number, number> = {
  1: 0.28,
  2: 0.15,
  3: 0.11,
  4: 0.08,
  5: 0.07,
  6: 0.05,
  7: 0.04,
  8: 0.03,
  9: 0.025,
  10: 0.02,
};

export function expectedCtr(position: number): number {
  const bucket = Math.min(10, Math.max(1, Math.round(position)));
  return EXPECTED_CTR_BY_POSITION[bucket] ?? 0.015;
}

export interface CtrOutlier {
  kind: 'page' | 'query';
  key: string; // URL for page, query string for query
  position: number;
  impressions: number;
  clicks: number;
  actualCtr: number;
  expectedCtr: number;
  gapPct: number; // actual / expected * 100 (lower = worse outlier)
  missedClicksEstimate: number; // how many clicks they'd have at expected CTR
}

function last28Window(now: Date = new Date()): { start: string; end: string } {
  const end = new Date(now.getTime() - 3 * 86400 * 1000);
  const start = new Date(end.getTime() - 27 * 86400 * 1000);
  const fmt = (d: Date) => d.toISOString().slice(0, 10);
  return { start: fmt(start), end: fmt(end) };
}

function scoreRow(r: { position: number; clicks: number; impressions: number }, minImpressions: number): CtrOutlier | null {
  if (r.position > 10) return null;
  if (r.impressions < minImpressions) return null;

  const expected = expectedCtr(r.position);
  const actual = r.impressions > 0 ? r.clicks / r.impressions : 0;
  if (expected === 0) return null;

  const gapPct = Math.round((actual / expected) * 100);
  if (gapPct >= 60) return null; // not an outlier

  const missedClicksEstimate = Math.max(0, Math.round(expected * r.impressions - r.clicks));

  return {
    kind: 'page',
    key: '',
    position: r.position,
    impressions: r.impressions,
    clicks: r.clicks,
    actualCtr: Number(actual.toFixed(4)),
    expectedCtr: Number(expected.toFixed(4)),
    gapPct,
    missedClicksEstimate,
  };
}

export async function findCtrOutliersForSite(input: {
  siteUrl: string;
  minImpressionsPage?: number;
  minImpressionsQuery?: number;
  now?: Date;
}): Promise<{ pageOutliers: CtrOutlier[]; queryOutliers: CtrOutlier[] }> {
  const { start, end } = last28Window(input.now);
  const minPage = input.minImpressionsPage ?? 50;
  const minQuery = input.minImpressionsQuery ?? 30;

  const [pages, queries] = await Promise.all([
    getTopPages(input.siteUrl, start, end, 50),
    getTopQueries(input.siteUrl, start, end, 100),
  ]);

  const pageOutliers: CtrOutlier[] = [];
  for (const p of pages) {
    const score = scoreRow(p, minPage);
    if (!score) continue;
    score.kind = 'page';
    score.key = p.page;
    pageOutliers.push(score);
  }

  const queryOutliers: CtrOutlier[] = [];
  for (const q of queries) {
    const score = scoreRow(q, minQuery);
    if (!score) continue;
    score.kind = 'query';
    score.key = q.query;
    queryOutliers.push(score);
  }

  // Sort by missed clicks estimate (biggest potential recovery first)
  pageOutliers.sort((a, b) => b.missedClicksEstimate - a.missedClicksEstimate);
  queryOutliers.sort((a, b) => b.missedClicksEstimate - a.missedClicksEstimate);

  return { pageOutliers, queryOutliers };
}

// ---- rendering helpers (minimal HTML, no email wrapper — caller composes) ----

const MONO = `'JetBrains Mono',Consolas,Menlo,'Courier New',monospace`;

export function renderOutliersInner(
  displayName: string,
  pageOutliers: CtrOutlier[],
  queryOutliers: CtrOutlier[],
): string {
  const pageRows = pageOutliers
    .slice(0, 15)
    .map((o, i) => {
      const shortKey = o.key.replace(/^https?:\/\/[^/]+/, '') || '/';
      return `
    <tr>
      <td style="padding:6px;border-bottom:1px solid #f0f0f0;font-family:${MONO};font-size:11px;color:#999;">${(i + 1).toString().padStart(2, '0')}</td>
      <td style="padding:6px;border-bottom:1px solid #f0f0f0;font-size:12px;color:#1a1a1a;font-family:${MONO};">${shortKey}</td>
      <td style="padding:6px;border-bottom:1px solid #f0f0f0;font-size:12px;color:#333;text-align:right;">${o.position.toFixed(1)}</td>
      <td style="padding:6px;border-bottom:1px solid #f0f0f0;font-size:12px;color:#333;text-align:right;">${(o.actualCtr * 100).toFixed(1)}% <span style="color:#999;">/ ${(o.expectedCtr * 100).toFixed(1)}%</span></td>
      <td style="padding:6px;border-bottom:1px solid #f0f0f0;font-size:12px;color:#BF172E;font-weight:700;text-align:right;">+${o.missedClicksEstimate}</td>
    </tr>`;
    })
    .join('');

  const queryRows = queryOutliers
    .slice(0, 15)
    .map((o, i) => `
    <tr>
      <td style="padding:6px;border-bottom:1px solid #f0f0f0;font-family:${MONO};font-size:11px;color:#999;">${(i + 1).toString().padStart(2, '0')}</td>
      <td style="padding:6px;border-bottom:1px solid #f0f0f0;font-size:12px;color:#1a1a1a;">${escapeHtml(o.key)}</td>
      <td style="padding:6px;border-bottom:1px solid #f0f0f0;font-size:12px;color:#333;text-align:right;">${o.position.toFixed(1)}</td>
      <td style="padding:6px;border-bottom:1px solid #f0f0f0;font-size:12px;color:#333;text-align:right;">${(o.actualCtr * 100).toFixed(1)}% <span style="color:#999;">/ ${(o.expectedCtr * 100).toFixed(1)}%</span></td>
      <td style="padding:6px;border-bottom:1px solid #f0f0f0;font-size:12px;color:#BF172E;font-weight:700;text-align:right;">+${o.missedClicksEstimate}</td>
    </tr>`)
    .join('');

  const totalMissed = [...pageOutliers, ...queryOutliers].reduce((s, o) => s + o.missedClicksEstimate, 0);

  return `
<h2 style="margin:0 0 6px 0;font-size:22px;color:#1a1a1a;font-weight:900;text-transform:uppercase;letter-spacing:-0.02em;">CTR Outliers</h2>
<p style="margin:0 0 16px 0;color:#555;font-size:13px;">${escapeHtml(displayName)} &mdash; pages &amp; queries ranking top 10 but underperforming on CTR. Title/meta rewrite candidates.</p>

<p style="margin:0 0 18px 0;color:#1a1a1a;font-size:14px;">Estimated recoverable clicks from rewrites: <b style="color:#0d8a3e;">${totalMissed}</b></p>

<h3 style="margin:0 0 8px 0;font-size:13px;color:#1a1a1a;font-weight:800;text-transform:uppercase;">Pages (top 15)</h3>
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;margin:0 0 20px 0;">
  <thead><tr>
    <th style="padding:6px;border-bottom:2px solid #e5e7eb;text-align:left;font-family:${MONO};font-size:10px;color:#888;text-transform:uppercase;">#</th>
    <th style="padding:6px;border-bottom:2px solid #e5e7eb;text-align:left;font-family:${MONO};font-size:10px;color:#888;text-transform:uppercase;">Path</th>
    <th style="padding:6px;border-bottom:2px solid #e5e7eb;text-align:right;font-family:${MONO};font-size:10px;color:#888;text-transform:uppercase;">Pos</th>
    <th style="padding:6px;border-bottom:2px solid #e5e7eb;text-align:right;font-family:${MONO};font-size:10px;color:#888;text-transform:uppercase;">CTR / Exp</th>
    <th style="padding:6px;border-bottom:2px solid #e5e7eb;text-align:right;font-family:${MONO};font-size:10px;color:#888;text-transform:uppercase;">Missed</th>
  </tr></thead>
  <tbody>${pageRows || '<tr><td colspan="5" style="padding:10px;color:#888;font-size:13px;font-style:italic;">No page outliers.</td></tr>'}</tbody>
</table>

<h3 style="margin:0 0 8px 0;font-size:13px;color:#1a1a1a;font-weight:800;text-transform:uppercase;">Queries (top 15)</h3>
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;margin:0 0 8px 0;">
  <thead><tr>
    <th style="padding:6px;border-bottom:2px solid #e5e7eb;text-align:left;font-family:${MONO};font-size:10px;color:#888;text-transform:uppercase;">#</th>
    <th style="padding:6px;border-bottom:2px solid #e5e7eb;text-align:left;font-family:${MONO};font-size:10px;color:#888;text-transform:uppercase;">Query</th>
    <th style="padding:6px;border-bottom:2px solid #e5e7eb;text-align:right;font-family:${MONO};font-size:10px;color:#888;text-transform:uppercase;">Pos</th>
    <th style="padding:6px;border-bottom:2px solid #e5e7eb;text-align:right;font-family:${MONO};font-size:10px;color:#888;text-transform:uppercase;">CTR / Exp</th>
    <th style="padding:6px;border-bottom:2px solid #e5e7eb;text-align:right;font-family:${MONO};font-size:10px;color:#888;text-transform:uppercase;">Missed</th>
  </tr></thead>
  <tbody>${queryRows || '<tr><td colspan="5" style="padding:10px;color:#888;font-size:13px;font-style:italic;">No query outliers.</td></tr>'}</tbody>
</table>`;
}

function escapeHtml(s: string | null | undefined): string {
  return String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
