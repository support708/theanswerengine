/**
 * Keyword cannibalization detector.
 *
 * Detects cases where 2+ pages on the same site rank for the same query
 * within the 28-day window. When this happens, Google splits authority
 * between the pages — a single consolidated page usually ranks higher.
 *
 * Action: merge (301 redirect lower-performing page to winner) OR
 * differentiate (rewrite pages to target adjacent but distinct queries).
 *
 * We surface the raw query→pages map, annotated with the severity:
 *   - HIGH: 2+ pages where both have impressions >=10 at the same query
 *     AND the position gap is tight (<3 positions)
 *   - MEDIUM: 2+ pages but one is much stronger (>3 position gap)
 *   - LOW: 2+ pages but minor impressions
 */
import { google } from 'googleapis';

export interface CannibalizationCase {
  query: string;
  severity: 'high' | 'medium' | 'low';
  pages: Array<{ url: string; impressions: number; clicks: number; position: number }>;
  totalImpressions: number;
  positionSpread: number; // max - min
}

interface RawRow {
  query: string;
  page: string;
  impressions: number;
  clicks: number;
  position: number;
}

function last28Window(now: Date = new Date()): { start: string; end: string } {
  const end = new Date(now.getTime() - 3 * 86400 * 1000);
  const start = new Date(end.getTime() - 27 * 86400 * 1000);
  const fmt = (d: Date) => d.toISOString().slice(0, 10);
  return { start: fmt(start), end: fmt(end) };
}

async function fetchQueryPageRows(siteUrl: string, start: string, end: string): Promise<RawRow[]> {
  const clientId = process.env.GMAIL_CLIENT_ID;
  const clientSecret = process.env.GMAIL_CLIENT_SECRET;
  const refreshToken = process.env.GSC_REFRESH_TOKEN;
  if (!clientId || !clientSecret || !refreshToken) throw new Error('GSC not configured');

  const oauth2Client = new google.auth.OAuth2(clientId, clientSecret);
  oauth2Client.setCredentials({ refresh_token: refreshToken });
  const gsc = google.searchconsole({ version: 'v1', auth: oauth2Client });

  const res = await gsc.searchanalytics.query({
    siteUrl,
    requestBody: {
      startDate: start,
      endDate: end,
      dimensions: ['query', 'page'],
      rowLimit: 10000,
    },
  });

  return (res.data.rows || []).map(r => ({
    query: (r.keys && r.keys[0]) || '',
    page: (r.keys && r.keys[1]) || '',
    impressions: r.impressions || 0,
    clicks: r.clicks || 0,
    position: r.position || 0,
  }));
}

export async function findCannibalizationForSite(input: {
  siteUrl: string;
  minImpressions?: number;
  maxCases?: number;
  now?: Date;
}): Promise<CannibalizationCase[]> {
  const { start, end } = last28Window(input.now);
  const minImpr = input.minImpressions ?? 10;
  const cap = input.maxCases ?? 50;

  const rows = await fetchQueryPageRows(input.siteUrl, start, end);

  // Group by query
  const byQuery = new Map<string, RawRow[]>();
  for (const r of rows) {
    if (!r.query || !r.page) continue;
    const list = byQuery.get(r.query) || [];
    list.push(r);
    byQuery.set(r.query, list);
  }

  const cases: CannibalizationCase[] = [];
  for (const [query, list] of byQuery) {
    const qualifying = list.filter(r => r.impressions >= minImpr);
    if (qualifying.length < 2) continue;

    // Severity scoring
    const positions = qualifying.map(r => r.position);
    const minPos = Math.min(...positions);
    const maxPos = Math.max(...positions);
    const spread = maxPos - minPos;
    const total = qualifying.reduce((s, r) => s + r.impressions, 0);

    const minPair = qualifying.filter(r => r.impressions >= 10).length;
    let severity: CannibalizationCase['severity'] = 'low';
    if (minPair >= 2 && spread < 3) severity = 'high';
    else if (minPair >= 2 && spread < 6) severity = 'medium';

    cases.push({
      query,
      severity,
      pages: qualifying
        .map(r => ({ url: r.page, impressions: r.impressions, clicks: r.clicks, position: r.position }))
        .sort((a, b) => a.position - b.position),
      totalImpressions: total,
      positionSpread: Number(spread.toFixed(1)),
    });
  }

  // Sort: high severity first, then by total impressions
  cases.sort((a, b) => {
    const sevRank = { high: 3, medium: 2, low: 1 } as const;
    const d = sevRank[b.severity] - sevRank[a.severity];
    if (d !== 0) return d;
    return b.totalImpressions - a.totalImpressions;
  });

  return cases.slice(0, cap);
}

// ---- rendering ----

const MONO = `'JetBrains Mono',Consolas,Menlo,'Courier New',monospace`;

function sevBadge(s: CannibalizationCase['severity']): string {
  const color = s === 'high' ? '#BF172E' : s === 'medium' ? '#e07a1f' : '#888';
  return `<span style="display:inline-block;background:${color};color:#fff;font-family:${MONO};font-size:9px;padding:2px 6px;letter-spacing:0.08em;text-transform:uppercase;">${s}</span>`;
}

function escapeHtml(s: string | null | undefined): string {
  return String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

export function renderCannibalizationInner(displayName: string, cases: CannibalizationCase[]): string {
  if (cases.length === 0) {
    return `
<h2 style="margin:0 0 6px 0;font-size:22px;color:#1a1a1a;font-weight:900;text-transform:uppercase;letter-spacing:-0.02em;">Keyword Cannibalization</h2>
<p style="margin:0 0 16px 0;color:#555;font-size:13px;">${escapeHtml(displayName)} &mdash; no cannibalization detected in the last 28 days.</p>`;
  }

  const blocks = cases
    .slice(0, 20)
    .map(c => {
      const pageList = c.pages
        .map(p => {
          const short = p.url.replace(/^https?:\/\/[^/]+/, '') || '/';
          return `
        <tr>
          <td style="padding:4px 6px;font-size:12px;font-family:${MONO};color:#1a1a1a;">${escapeHtml(short)}</td>
          <td style="padding:4px 6px;font-size:12px;color:#333;text-align:right;">pos ${p.position.toFixed(1)}</td>
          <td style="padding:4px 6px;font-size:12px;color:#333;text-align:right;">${p.impressions} impr</td>
          <td style="padding:4px 6px;font-size:12px;color:#333;text-align:right;">${p.clicks} clicks</td>
        </tr>`;
        })
        .join('');
      return `
<div style="margin-bottom:16px;padding:12px;background:#fafafa;border-left:3px solid #F27D24;">
  <div style="margin-bottom:6px;">
    <b style="font-size:14px;color:#1a1a1a;">${escapeHtml(c.query)}</b>
    ${sevBadge(c.severity)}
    <span style="font-size:11px;color:#888;margin-left:6px;">${c.pages.length} pages · ${c.totalImpressions} impr · spread ${c.positionSpread}</span>
  </div>
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;">
    <tbody>${pageList}</tbody>
  </table>
</div>`;
    })
    .join('');

  return `
<h2 style="margin:0 0 6px 0;font-size:22px;color:#1a1a1a;font-weight:900;text-transform:uppercase;letter-spacing:-0.02em;">Keyword Cannibalization</h2>
<p style="margin:0 0 16px 0;color:#555;font-size:13px;">${escapeHtml(displayName)} &mdash; ${cases.length} queries have multiple pages competing. Merge (301) or differentiate.</p>
${blocks}`;
}
