/**
 * Branded search tracker.
 *
 * Hypothesis: as AEO authority work compounds, people who encounter a
 * client's brand in AI answers come back via Google using the brand name.
 * A rising branded-search count is the cleanest proof that AEO is
 * translating to real search demand — not just impressions on generic
 * queries.
 *
 * This module finds branded queries in a GSC property and measures
 * week-over-week + 4-week trend.
 *
 * Design:
 *   - Per-client brand tokens configured in BRAND_TOKENS below (pull from
 *     profile's business.dba / legal_name + common variants).
 *   - Match is case-insensitive and matches on any token contained in the
 *     query string (so "best brand name seller" counts).
 *   - Filters out URL-looking queries (someone pasting the site URL into
 *     Google isn't branded demand, it's a navigation shortcut).
 *   - Returns weekly buckets for the last 4 weeks.
 *
 * LAMH: tracked internally. Client-facing sends gated by caller.
 */
import { getTopQueries, type GscQueryRow } from './gsc-api';

/** Per-client branded-search tokens. Lowercase, any-one-match. */
export const BRAND_TOKENS: Record<string, string[]> = {
  'lovery-re': ['lovery', 'ryan fisher', 'lovery real estate'],
  'borges-team': ['borges', 'justin borges', 'borges real estate'],
  'rpm-southland': ['rpm southland', 'rpm long beach', 'real property management southland'],
  'davis-agency': ['davis agency', 'derrik davis', 'the davis agency'],
  'the-answer-engine': ['answer engine', 'theanswerengine', 'the answer engine'],
  lamh: ['la metro home finder', 'lametrohomefinder', 'la metro homefinder'],
  clearclose: ['clearclose', 'clear close builder', 'clearclose builder services'],
};

export interface WeekBucket {
  start: string;
  end: string;
  brandedImpressions: number;
  brandedClicks: number;
  totalImpressions: number;
  totalClicks: number;
  matchedQueries: Array<{ query: string; impressions: number; clicks: number }>;
}

export interface BrandedSearchTrend {
  slug: string;
  displayName: string;
  siteUrl: string;
  tokens: string[];
  weeks: WeekBucket[]; // oldest → newest (4 entries)
  totalBrandedImpressions4w: number;
  weekOverWeekPct: number; // last week vs prior week
  fourWeekTrendPct: number; // last week vs first week
  verdict: 'rising' | 'stable' | 'falling' | 'no-data';
}

function rangeStart(offsetWeeks: number, now: Date): Date {
  // "offsetWeeks = 0" means most recent 7-day window ending 3 days before now
  const end = new Date(now.getTime() - (3 + offsetWeeks * 7) * 86400 * 1000);
  return new Date(end.getTime() - 6 * 86400 * 1000);
}

function rangeEnd(offsetWeeks: number, now: Date): Date {
  return new Date(now.getTime() - (3 + offsetWeeks * 7) * 86400 * 1000);
}

function fmt(d: Date): string {
  return d.toISOString().slice(0, 10);
}

function isUrlLike(q: string): boolean {
  return /\bhttps?:\/\//i.test(q) || /\.(com|net|org|ai|io|co)\b/i.test(q);
}

function matchesTokens(query: string, tokens: string[]): boolean {
  const q = query.toLowerCase();
  return tokens.some(t => q.includes(t));
}

/**
 * Pull 4 weekly windows for one site and bucket branded vs total.
 */
export async function buildBrandedTrend(input: {
  slug: string;
  displayName: string;
  siteUrl: string;
  tokens?: string[];
  now?: Date;
}): Promise<BrandedSearchTrend> {
  const tokens = input.tokens ?? BRAND_TOKENS[input.slug] ?? [];
  const now = input.now ?? new Date();

  // Fetch 4 weeks (oldest first)
  const weekPromises: Promise<WeekBucket>[] = [];
  for (let i = 3; i >= 0; i--) {
    const start = fmt(rangeStart(i, now));
    const end = fmt(rangeEnd(i, now));
    const p = (async (): Promise<WeekBucket> => {
      const rows = await getTopQueries(input.siteUrl, start, end, 1000);
      let brandedImpressions = 0;
      let brandedClicks = 0;
      let totalImpressions = 0;
      let totalClicks = 0;
      const matched: Array<{ query: string; impressions: number; clicks: number }> = [];

      for (const r of rows) {
        totalImpressions += r.impressions;
        totalClicks += r.clicks;
        if (!isUrlLike(r.query) && tokens.length > 0 && matchesTokens(r.query, tokens)) {
          brandedImpressions += r.impressions;
          brandedClicks += r.clicks;
          matched.push({ query: r.query, impressions: r.impressions, clicks: r.clicks });
        }
      }
      matched.sort((a, b) => b.impressions - a.impressions);
      return {
        start,
        end,
        brandedImpressions,
        brandedClicks,
        totalImpressions,
        totalClicks,
        matchedQueries: matched,
      };
    })();
    weekPromises.push(p);
  }

  const weeks = await Promise.all(weekPromises);

  const latest = weeks[weeks.length - 1];
  const prior = weeks[weeks.length - 2];
  const first = weeks[0];

  const weekOverWeekPct =
    prior.brandedImpressions === 0
      ? latest.brandedImpressions > 0
        ? 100
        : 0
      : Math.round(((latest.brandedImpressions - prior.brandedImpressions) / prior.brandedImpressions) * 100);

  const fourWeekTrendPct =
    first.brandedImpressions === 0
      ? latest.brandedImpressions > 0
        ? 100
        : 0
      : Math.round(((latest.brandedImpressions - first.brandedImpressions) / first.brandedImpressions) * 100);

  const totalBrandedImpressions4w = weeks.reduce((s, w) => s + w.brandedImpressions, 0);

  let verdict: BrandedSearchTrend['verdict'];
  if (totalBrandedImpressions4w === 0) verdict = 'no-data';
  else if (fourWeekTrendPct >= 15) verdict = 'rising';
  else if (fourWeekTrendPct <= -15) verdict = 'falling';
  else verdict = 'stable';

  return {
    slug: input.slug,
    displayName: input.displayName,
    siteUrl: input.siteUrl,
    tokens,
    weeks,
    totalBrandedImpressions4w,
    weekOverWeekPct,
    fourWeekTrendPct,
    verdict,
  };
}

// =========================
// Internal Telegram digest
// =========================

export function renderTrendTelegram(trends: BrandedSearchTrend[]): string {
  const lines: string[] = [];
  lines.push(`<b>Branded Search Tracker</b> — 4-week trend`);
  lines.push('');
  for (const t of trends) {
    const verdictIcon = t.verdict === 'rising' ? '↑' : t.verdict === 'falling' ? '↓' : t.verdict === 'stable' ? '→' : '–';
    lines.push(
      `<b>${t.displayName}</b> ${verdictIcon} ${t.verdict}` +
        ` · ${t.totalBrandedImpressions4w} impr / 4w · ${t.weekOverWeekPct > 0 ? '+' : ''}${t.weekOverWeekPct}% WoW · ${t.fourWeekTrendPct > 0 ? '+' : ''}${t.fourWeekTrendPct}% 4wk`,
    );
    const last = t.weeks[t.weeks.length - 1];
    if (last.matchedQueries.length > 0) {
      const top = last.matchedQueries.slice(0, 3);
      for (const q of top) {
        lines.push(`  "${q.query}" — ${q.impressions} impr`);
      }
    } else {
      lines.push(`  (no branded queries this week)`);
    }
    lines.push('');
  }
  return lines.join('\n');
}

// =========================
// Client-facing curated (rising only)
// =========================

const DISPLAY = `'Space Grotesk','Inter','Helvetica Neue',Arial,sans-serif`;
const MONO = `'JetBrains Mono',Consolas,Menlo,'Courier New',monospace`;

function esc(s: string | null | undefined): string {
  return String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

export function renderClientCuratedInner(t: BrandedSearchTrend, firstName: string, goalPrimaryOutcome: string): string {
  // Only called for verdict === 'rising' (caller gates on that)
  const latest = t.weeks[t.weeks.length - 1];

  return `
<h2 style="margin:0 0 4px 0;font-size:24px;line-height:1.1;color:#1a1a1a;font-family:${DISPLAY};font-weight:900;letter-spacing:-0.025em;text-transform:uppercase;">Brand demand is climbing</h2>
<p style="margin:0 0 22px 0;color:#555;font-size:14px;">${esc(t.displayName)} &mdash; 4-week branded-search trend</p>

<p style="margin:0 0 14px 0;font-size:15px;color:#1a1a1a;line-height:1.6;">${esc(firstName)},</p>

<p style="margin:0 0 14px 0;font-size:15px;color:#1a1a1a;line-height:1.6;">People are actively searching for ${esc(t.displayName)} by name more often than they were a month ago. Branded searches are up <b>+${t.fourWeekTrendPct}%</b> over the last 4 weeks. That is the cleanest signal that the authority work is translating into direct demand.</p>

<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;margin:20px 0 24px 0;">
  <tr>
    <td style="padding:16px;background:#fafafa;border-left:3px solid #F27D24;width:50%;" valign="top">
      <div style="font-family:${MONO};font-size:10px;color:#888;letter-spacing:0.14em;text-transform:uppercase;margin-bottom:4px;">This Week</div>
      <div style="font-family:${DISPLAY};font-size:28px;font-weight:900;color:#1a1a1a;letter-spacing:-0.02em;line-height:1;">${latest.brandedImpressions}</div>
      <div style="margin-top:4px;font-size:11px;color:#888;">branded impressions</div>
    </td>
    <td style="width:12px;"></td>
    <td style="padding:16px;background:#fafafa;border-left:3px solid #F27D24;width:50%;" valign="top">
      <div style="font-family:${MONO};font-size:10px;color:#888;letter-spacing:0.14em;text-transform:uppercase;margin-bottom:4px;">4-Week Trend</div>
      <div style="font-family:${DISPLAY};font-size:28px;font-weight:900;color:#0d8a3e;letter-spacing:-0.02em;line-height:1;">+${t.fourWeekTrendPct}%</div>
      <div style="margin-top:4px;font-size:11px;color:#888;">branded demand growth</div>
    </td>
  </tr>
</table>

<h3 style="margin:24px 0 10px 0;font-size:15px;color:#1a1a1a;font-family:${DISPLAY};font-weight:800;text-transform:uppercase;letter-spacing:0.02em;">What we're doing next</h3>
<ol style="margin:0 0 24px 0;padding:0 0 0 4px;list-style:none;">
  <li style="margin:0 0 8px 0;font-size:14px;color:#1a1a1a;line-height:1.55;"><b style="color:#F27D24;font-family:${MONO};font-size:11px;margin-right:6px;">01</b>Leaning into the query patterns driving this lift to keep compounding ${esc(goalPrimaryOutcome)}.</li>
  <li style="margin:0 0 8px 0;font-size:14px;color:#1a1a1a;line-height:1.55;"><b style="color:#F27D24;font-family:${MONO};font-size:11px;margin-right:6px;">02</b>Publishing new authority content on themes that are pulling brand searches in.</li>
  <li style="margin:0 0 8px 0;font-size:14px;color:#1a1a1a;line-height:1.55;"><b style="color:#F27D24;font-family:${MONO};font-size:11px;margin-right:6px;">03</b>Sharpening the on-page conversion funnel so this demand becomes real leads.</li>
</ol>`;
}

// =========================
// Brand Safety
// =========================

export interface BrandSafetyVerdict {
  pass: boolean;
  reasons: string[];
}

export function checkBrandSafety(curatedHtml: string, trend: BrandedSearchTrend): BrandSafetyVerdict {
  const reasons: string[] = [];

  // 1. Only rising clients should ever get a client-facing draft
  if (trend.verdict !== 'rising') {
    reasons.push(`verdict "${trend.verdict}" — only rising trends qualify for client-facing send`);
  }

  // 2. Require a minimum floor — don't celebrate 2 -> 4 impressions as "brand demand"
  const latest = trend.weeks[trend.weeks.length - 1];
  if (latest.brandedImpressions < 10) {
    reasons.push(`only ${latest.brandedImpressions} branded impressions this week — below minimum floor (10)`);
  }

  // 3. Forward-looking block
  if (!/what we['']re doing next/i.test(curatedHtml)) {
    reasons.push('missing "what we are doing next" section');
  }

  // 4. LAMH never sent client-facing
  if (trend.slug === 'lamh') reasons.push('LAMH is internal crown jewel — never sent client-facing');

  // 5. No banned phrases / proprietary names
  const text = curatedHtml.toLowerCase();
  const banned = ['blind spot blitz', 'morning lead hunt', 'answerforge', 'aero-7', '$2,997'];
  for (const b of banned) if (text.includes(b)) reasons.push(`proprietary name "${b}"`);

  return { pass: reasons.length === 0, reasons };
}
