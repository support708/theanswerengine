/**
 * Monthly AEO Intelligence Report builder.
 *
 * Pulls a client's Search Console data for a target month + the prior month,
 * computes month-over-month deltas, identifies page-2 opportunities, and
 * renders inner HTML content to be wrapped by lib/gmail.ts htmlWrap().
 */

import { getTopQueries, getTopPages, type GscQueryRow, type GscPageRow } from './gsc-api';
import {
  readActivityForMonth,
  renderActivitySectionHtml,
  renderActivitySectionPlain,
  type ActivityItem,
} from './agency-activity';

export interface MonthlyReportData {
  siteUrl: string;
  displayName: string;
  monthLabel: string;           // "April 2026"
  periodStart: string;          // YYYY-MM-DD
  periodEnd: string;            // YYYY-MM-DD
  totalImpressions: number;
  totalClicks: number;
  avgCtr: number;               // 0-1
  avgPosition: number;
  impressionsPrev: number;
  clicksPrev: number;
  deltaImpressions: number;     // %
  deltaClicks: number;          // %
  topQueries: GscQueryRow[];
  topPages: GscPageRow[];
  page2Opportunities: GscQueryRow[];
}

/**
 * Given a month string (YYYY-MM) return the GSC-friendly date bounds.
 * GSC data lags ~2-3 days, so if the target month is the CURRENT month,
 * we cap the end at (today - 3 days).
 */
export function monthBounds(yyyyMm: string): { start: string; end: string; label: string } {
  const [year, month] = yyyyMm.split('-').map(Number);
  const start = new Date(Date.UTC(year, month - 1, 1));
  const lastDayOfMonth = new Date(Date.UTC(year, month, 0));
  const now = new Date();
  const threeDaysAgo = new Date(now.getTime() - 3 * 24 * 60 * 60 * 1000);
  const end = lastDayOfMonth < threeDaysAgo ? lastDayOfMonth : threeDaysAgo;

  const fmt = (d: Date) => d.toISOString().slice(0, 10);
  const label = start.toLocaleDateString('en-US', { month: 'long', year: 'numeric', timeZone: 'UTC' });
  return { start: fmt(start), end: fmt(end), label };
}

export function priorMonthBounds(yyyyMm: string): { start: string; end: string } {
  const [year, month] = yyyyMm.split('-').map(Number);
  const prevYear = month === 1 ? year - 1 : year;
  const prevMonth = month === 1 ? 12 : month - 1;
  const start = new Date(Date.UTC(prevYear, prevMonth - 1, 1));
  const end = new Date(Date.UTC(prevYear, prevMonth, 0));
  const fmt = (d: Date) => d.toISOString().slice(0, 10);
  return { start: fmt(start), end: fmt(end) };
}

function sumRows(rows: GscQueryRow[] | GscPageRow[]): { impressions: number; clicks: number } {
  return rows.reduce(
    (acc, r) => ({ impressions: acc.impressions + r.impressions, clicks: acc.clicks + r.clicks }),
    { impressions: 0, clicks: 0 },
  );
}

function pctDelta(current: number, prior: number): number {
  if (prior === 0) return current > 0 ? 100 : 0;
  return Math.round(((current - prior) / prior) * 100);
}

/**
 * Fetch data and build the report structure for one site + one month.
 */
export async function buildMonthlyReport(
  siteUrl: string,
  displayName: string,
  yyyyMm: string,
): Promise<MonthlyReportData> {
  const cur = monthBounds(yyyyMm);
  const prev = priorMonthBounds(yyyyMm);

  const [curQueries, curPages, prevQueries] = await Promise.all([
    getTopQueries(siteUrl, cur.start, cur.end, 50),
    getTopPages(siteUrl, cur.start, cur.end, 20),
    getTopQueries(siteUrl, prev.start, prev.end, 50),
  ]);

  const curTotals = sumRows(curQueries);
  const prevTotals = sumRows(prevQueries);

  const avgCtr = curTotals.impressions > 0 ? curTotals.clicks / curTotals.impressions : 0;
  const avgPosition = curQueries.length > 0
    ? curQueries.reduce((s, r) => s + r.position * r.impressions, 0) / Math.max(1, curTotals.impressions)
    : 0;

  // Page 2 opportunities: queries ranked 11-20 with non-trivial impressions
  const page2Opportunities = curQueries
    .filter(q => q.position > 10 && q.position <= 20 && q.impressions >= 10)
    .sort((a, b) => b.impressions - a.impressions)
    .slice(0, 10);

  return {
    siteUrl,
    displayName,
    monthLabel: cur.label,
    periodStart: cur.start,
    periodEnd: cur.end,
    totalImpressions: curTotals.impressions,
    totalClicks: curTotals.clicks,
    avgCtr,
    avgPosition,
    impressionsPrev: prevTotals.impressions,
    clicksPrev: prevTotals.clicks,
    deltaImpressions: pctDelta(curTotals.impressions, prevTotals.impressions),
    deltaClicks: pctDelta(curTotals.clicks, prevTotals.clicks),
    topQueries: curQueries.slice(0, 10),
    topPages: curPages.slice(0, 5),
    page2Opportunities,
  };
}

// =========================
// HTML rendering (inner content — wrap with htmlWrap)
// =========================

const DISPLAY = `'Space Grotesk','Inter','Helvetica Neue',Arial,sans-serif`;
const MONO = `'JetBrains Mono',Consolas,Menlo,'Courier New',monospace`;

function deltaBadge(pct: number): string {
  const sign = pct > 0 ? '+' : '';
  const color = pct > 0 ? '#0d8a3e' : pct < 0 ? '#BF172E' : '#888';
  const arrow = pct > 0 ? '&uarr;' : pct < 0 ? '&darr;' : '';
  return `<span style="color:${color};font-weight:700;font-family:${MONO};font-size:11px;letter-spacing:0.04em;">${arrow} ${sign}${pct}%</span>`;
}

function formatInt(n: number): string {
  return n.toLocaleString('en-US');
}

function formatCtr(ctr: number): string {
  return (ctr * 100).toFixed(1) + '%';
}

function formatPos(p: number): string {
  return p.toFixed(1);
}

export function renderMonthlyReportHtml(r: MonthlyReportData, firstName: string, activity: ActivityItem[] = []): string {
  const queryRows = r.topQueries.map((q, i) => `
    <tr>
      <td style="padding:8px 6px;border-bottom:1px solid #f0f0f0;font-family:${MONO};font-size:12px;color:#999;width:26px;">${(i + 1).toString().padStart(2, '0')}</td>
      <td style="padding:8px 6px;border-bottom:1px solid #f0f0f0;font-size:13px;color:#1a1a1a;">${escapeHtml(q.query)}</td>
      <td style="padding:8px 6px;border-bottom:1px solid #f0f0f0;font-size:13px;color:#333;text-align:right;">${formatInt(q.impressions)}</td>
      <td style="padding:8px 6px;border-bottom:1px solid #f0f0f0;font-size:13px;color:#333;text-align:right;">${formatInt(q.clicks)}</td>
      <td style="padding:8px 6px;border-bottom:1px solid #f0f0f0;font-size:13px;color:#333;text-align:right;">${formatPos(q.position)}</td>
    </tr>`).join('');

  const pageRows = r.topPages.map((p, i) => {
    const shortUrl = p.page.replace(/^https?:\/\/[^/]+/, '').slice(0, 48);
    return `
    <tr>
      <td style="padding:8px 6px;border-bottom:1px solid #f0f0f0;font-family:${MONO};font-size:12px;color:#999;width:26px;">${(i + 1).toString().padStart(2, '0')}</td>
      <td style="padding:8px 6px;border-bottom:1px solid #f0f0f0;font-size:12px;color:#1a1a1a;font-family:${MONO};">${escapeHtml(shortUrl) || '/'}</td>
      <td style="padding:8px 6px;border-bottom:1px solid #f0f0f0;font-size:13px;color:#333;text-align:right;">${formatInt(p.impressions)}</td>
      <td style="padding:8px 6px;border-bottom:1px solid #f0f0f0;font-size:13px;color:#333;text-align:right;">${formatInt(p.clicks)}</td>
    </tr>`;
  }).join('');

  const oppRows = r.page2Opportunities.length > 0
    ? r.page2Opportunities.map((q, i) => `
    <tr>
      <td style="padding:8px 6px;border-bottom:1px solid #f0f0f0;font-family:${MONO};font-size:12px;color:#FF6A00;font-weight:700;width:26px;">${(i + 1).toString().padStart(2, '0')}</td>
      <td style="padding:8px 6px;border-bottom:1px solid #f0f0f0;font-size:13px;color:#1a1a1a;">${escapeHtml(q.query)}</td>
      <td style="padding:8px 6px;border-bottom:1px solid #f0f0f0;font-size:13px;color:#333;text-align:right;">${formatInt(q.impressions)}</td>
      <td style="padding:8px 6px;border-bottom:1px solid #f0f0f0;font-size:13px;color:#BF172E;font-weight:700;text-align:right;">${formatPos(q.position)}</td>
    </tr>`).join('')
    : `<tr><td colspan="4" style="padding:12px;color:#888;font-size:13px;font-style:italic;">No page-2 queries this month. Focus on expanding impressions.</td></tr>`;

  return `
<h2 style="margin:0 0 4px 0;font-size:24px;line-height:1.1;color:#1a1a1a;font-family:${DISPLAY};font-weight:900;letter-spacing:-0.025em;text-transform:uppercase;">Monthly AEO Report</h2>
<p style="margin:0 0 22px 0;color:#555;font-size:14px;">${escapeHtml(r.displayName)} &mdash; ${escapeHtml(r.monthLabel)}</p>

<!-- HERO METRICS -->
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;margin:0 0 26px 0;">
  <tr>
    <td style="padding:16px;background:#fafafa;border-left:3px solid #FF6A00;width:50%;" valign="top">
      <div style="font-family:${MONO};font-size:10px;color:#888;letter-spacing:0.14em;text-transform:uppercase;margin-bottom:4px;">Impressions</div>
      <div style="font-family:${DISPLAY};font-size:28px;font-weight:900;color:#1a1a1a;letter-spacing:-0.02em;line-height:1;">${formatInt(r.totalImpressions)}</div>
      <div style="margin-top:4px;">${deltaBadge(r.deltaImpressions)} <span style="color:#888;font-size:11px;">vs prior month</span></div>
    </td>
    <td style="width:12px;"></td>
    <td style="padding:16px;background:#fafafa;border-left:3px solid #FF6A00;width:50%;" valign="top">
      <div style="font-family:${MONO};font-size:10px;color:#888;letter-spacing:0.14em;text-transform:uppercase;margin-bottom:4px;">Clicks</div>
      <div style="font-family:${DISPLAY};font-size:28px;font-weight:900;color:#1a1a1a;letter-spacing:-0.02em;line-height:1;">${formatInt(r.totalClicks)}</div>
      <div style="margin-top:4px;">${deltaBadge(r.deltaClicks)} <span style="color:#888;font-size:11px;">vs prior month</span></div>
    </td>
  </tr>
</table>

<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;margin:0 0 28px 0;">
  <tr>
    <td style="padding:12px 14px;background:#fafafa;width:50%;" valign="top">
      <span style="font-family:${MONO};font-size:10px;color:#888;letter-spacing:0.14em;text-transform:uppercase;">Avg CTR</span>
      <div style="font-family:${DISPLAY};font-size:18px;font-weight:800;color:#1a1a1a;margin-top:2px;">${formatCtr(r.avgCtr)}</div>
    </td>
    <td style="width:12px;"></td>
    <td style="padding:12px 14px;background:#fafafa;width:50%;" valign="top">
      <span style="font-family:${MONO};font-size:10px;color:#888;letter-spacing:0.14em;text-transform:uppercase;">Avg Position</span>
      <div style="font-family:${DISPLAY};font-size:18px;font-weight:800;color:#1a1a1a;margin-top:2px;">${formatPos(r.avgPosition)}</div>
    </td>
  </tr>
</table>

<!-- TOP QUERIES -->
<h3 style="margin:0 0 10px 0;font-size:15px;color:#1a1a1a;font-family:${DISPLAY};font-weight:800;text-transform:uppercase;letter-spacing:0.02em;">Top 10 Queries</h3>
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;margin:0 0 28px 0;">
  <thead>
    <tr>
      <th style="padding:8px 6px;border-bottom:2px solid #e5e7eb;text-align:left;font-family:${MONO};font-size:10px;letter-spacing:0.12em;color:#888;text-transform:uppercase;">#</th>
      <th style="padding:8px 6px;border-bottom:2px solid #e5e7eb;text-align:left;font-family:${MONO};font-size:10px;letter-spacing:0.12em;color:#888;text-transform:uppercase;">Query</th>
      <th style="padding:8px 6px;border-bottom:2px solid #e5e7eb;text-align:right;font-family:${MONO};font-size:10px;letter-spacing:0.12em;color:#888;text-transform:uppercase;">Impr</th>
      <th style="padding:8px 6px;border-bottom:2px solid #e5e7eb;text-align:right;font-family:${MONO};font-size:10px;letter-spacing:0.12em;color:#888;text-transform:uppercase;">Clicks</th>
      <th style="padding:8px 6px;border-bottom:2px solid #e5e7eb;text-align:right;font-family:${MONO};font-size:10px;letter-spacing:0.12em;color:#888;text-transform:uppercase;">Pos</th>
    </tr>
  </thead>
  <tbody>${queryRows || '<tr><td colspan="5" style="padding:12px;color:#888;font-size:13px;font-style:italic;">No query data this month.</td></tr>'}</tbody>
</table>

${renderActivitySectionHtml(activity)}

<!-- OPPORTUNITY QUEUE -->
<h3 style="margin:0 0 4px 0;font-size:15px;color:#1a1a1a;font-family:${DISPLAY};font-weight:800;text-transform:uppercase;letter-spacing:0.02em;">Page-2 Opportunities</h3>
<p style="margin:0 0 10px 0;font-size:12px;color:#777;">Queries ranked 11-20. One well-written article could push these to page 1.</p>
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;margin:0 0 28px 0;">
  <thead>
    <tr>
      <th style="padding:8px 6px;border-bottom:2px solid #e5e7eb;text-align:left;font-family:${MONO};font-size:10px;letter-spacing:0.12em;color:#888;text-transform:uppercase;">#</th>
      <th style="padding:8px 6px;border-bottom:2px solid #e5e7eb;text-align:left;font-family:${MONO};font-size:10px;letter-spacing:0.12em;color:#888;text-transform:uppercase;">Query</th>
      <th style="padding:8px 6px;border-bottom:2px solid #e5e7eb;text-align:right;font-family:${MONO};font-size:10px;letter-spacing:0.12em;color:#888;text-transform:uppercase;">Impr</th>
      <th style="padding:8px 6px;border-bottom:2px solid #e5e7eb;text-align:right;font-family:${MONO};font-size:10px;letter-spacing:0.12em;color:#888;text-transform:uppercase;">Pos</th>
    </tr>
  </thead>
  <tbody>${oppRows}</tbody>
</table>

<!-- TOP PAGES -->
<h3 style="margin:0 0 10px 0;font-size:15px;color:#1a1a1a;font-family:${DISPLAY};font-weight:800;text-transform:uppercase;letter-spacing:0.02em;">Top 5 Pages</h3>
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;margin:0 0 28px 0;">
  <thead>
    <tr>
      <th style="padding:8px 6px;border-bottom:2px solid #e5e7eb;text-align:left;font-family:${MONO};font-size:10px;letter-spacing:0.12em;color:#888;text-transform:uppercase;">#</th>
      <th style="padding:8px 6px;border-bottom:2px solid #e5e7eb;text-align:left;font-family:${MONO};font-size:10px;letter-spacing:0.12em;color:#888;text-transform:uppercase;">Path</th>
      <th style="padding:8px 6px;border-bottom:2px solid #e5e7eb;text-align:right;font-family:${MONO};font-size:10px;letter-spacing:0.12em;color:#888;text-transform:uppercase;">Impr</th>
      <th style="padding:8px 6px;border-bottom:2px solid #e5e7eb;text-align:right;font-family:${MONO};font-size:10px;letter-spacing:0.12em;color:#888;text-transform:uppercase;">Clicks</th>
    </tr>
  </thead>
  <tbody>${pageRows || '<tr><td colspan="4" style="padding:12px;color:#888;font-size:13px;font-style:italic;">No page data this month.</td></tr>'}</tbody>
</table>

<!-- CTA -->
<div style="background:#fafafa;border-left:4px solid #FF6A00;padding:18px 20px;margin:8px 0 20px 0;">
  <p style="margin:0 0 8px 0;font-family:${DISPLAY};font-size:15px;font-weight:800;color:#1a1a1a;">Want to capture those page-2 queries?</p>
  <p style="margin:0 0 12px 0;font-size:13px;color:#555;">Reply to this email and we'll queue the next content batch targeted at your top opportunities.</p>
  <a href="mailto:support@theanswerengine.ai?subject=Content%20Request%20-%20${encodeURIComponent(r.displayName)}" style="display:inline-block;background:#FF6A00;color:#000;font-family:${DISPLAY};font-size:12px;font-weight:900;padding:12px 20px;text-decoration:none;letter-spacing:-0.01em;text-transform:uppercase;">Request Content Batch &rarr;</a>
</div>

<p style="margin:20px 0 0 0;font-size:11px;color:#aaa;">
Report period: ${escapeHtml(r.periodStart)} to ${escapeHtml(r.periodEnd)}. Data pulled live from Google Search Console.
</p>`;
}

export function renderMonthlyReportPlain(r: MonthlyReportData, firstName: string, activity: ActivityItem[] = []): string {
  return `Monthly AEO Report
${r.displayName} — ${r.monthLabel}

IMPRESSIONS: ${formatInt(r.totalImpressions)} (${r.deltaImpressions > 0 ? '+' : ''}${r.deltaImpressions}% vs prior month)
CLICKS: ${formatInt(r.totalClicks)} (${r.deltaClicks > 0 ? '+' : ''}${r.deltaClicks}% vs prior month)
AVG CTR: ${formatCtr(r.avgCtr)}
AVG POSITION: ${formatPos(r.avgPosition)}

${renderActivitySectionPlain(activity)}
TOP 10 QUERIES:
${r.topQueries.map((q, i) => `${(i + 1).toString().padStart(2, '0')}. ${q.query} — ${formatInt(q.impressions)} impr, ${formatInt(q.clicks)} clicks, pos ${formatPos(q.position)}`).join('\n')}

PAGE-2 OPPORTUNITIES (ranked 11-20, one article from page 1):
${r.page2Opportunities.length > 0
    ? r.page2Opportunities.map((q, i) => `${(i + 1).toString().padStart(2, '0')}. ${q.query} — ${formatInt(q.impressions)} impr, pos ${formatPos(q.position)}`).join('\n')
    : 'No page-2 queries this month.'}

TOP 5 PAGES:
${r.topPages.map((p, i) => `${(i + 1).toString().padStart(2, '0')}. ${p.page} — ${formatInt(p.impressions)} impr, ${formatInt(p.clicks)} clicks`).join('\n')}

Reply to this email to queue the next content batch targeted at your top opportunities.

--
Justin Borges
Founder, The Answer Engine
(213) 444-2229
support@theanswerengine.ai`;
}

function escapeHtml(s: string): string {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

export function buildMonthlyReportSubject(displayName: string, monthLabel: string): string {
  return `${monthLabel} AEO Report — ${displayName}`;
}
