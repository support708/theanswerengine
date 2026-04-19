/**
 * Weekly Wins & Misses digest.
 *
 * Compares this week's GSC data (last 7d) vs the prior week (7-14d ago)
 * per client, computes rank deltas per query, and classifies:
 *   - WINS: rank improved by >3 positions (or new query appeared top-30)
 *   - MISSES: rank dropped by >3 positions
 *   - STEADY: everything else (not surfaced)
 *
 * Two-track output (Brand Safety Layer):
 *   - INTERNAL (Justin, Telegram): wins + misses + diagnosis, full picture
 *   - CLIENT (email DRAFT, gated by Brand Safety): wins only; misses are
 *     reframed as "we spotted an opening and are deploying X" with explicit
 *     forward-looking next-actions tied to the client's stated goal.
 *
 * Interpretation Layer:
 *   - Every recommendation ties to client.goals.primary_outcome
 *   - Top 3 next-actions always included in the client-facing render
 *   - If a conversation is needed (majority misses), flag it Justin-only
 *
 * LAMH Safety Protocol:
 *   - LAMH digest is INTERNAL ONLY — never sent client-facing
 *   - Telegram summary only; no email draft generated
 */
import { getTopQueries, type GscQueryRow } from './gsc-api';

export interface WeekBounds {
  thisWeekStart: string;
  thisWeekEnd: string;
  priorWeekStart: string;
  priorWeekEnd: string;
}

export interface QueryDelta {
  query: string;
  thisPosition: number;
  priorPosition: number | null; // null if query wasn't in top-30 last week
  positionDelta: number | null; // negative = improved (rank went down = better)
  thisImpressions: number;
  thisClicks: number;
  classification: 'win' | 'miss' | 'steady' | 'new';
}

export interface ClientWinsMisses {
  slug: string;
  displayName: string;
  siteUrl: string;
  isLamh: boolean;
  goalPrimaryOutcome: string;
  goalConversionDefinition?: string;
  window: WeekBounds;
  wins: QueryDelta[];
  misses: QueryDelta[];
  newQueries: QueryDelta[];
  totalThisWeekClicks: number;
  totalPriorWeekClicks: number;
  weekOverWeekClicksPct: number;
  needsConversation: boolean;
}

const WIN_THRESHOLD = 3; // position delta (this < prior - 3 = win)
const MISS_THRESHOLD = 3; // position delta (this > prior + 3 = miss)
const MIN_IMPRESSIONS = 5; // filter noise — only care about queries with real traffic

export function weekBounds(now: Date = new Date()): WeekBounds {
  // GSC lags ~2-3 days; use today - 3 as end of "this week"
  const thisEnd = new Date(now.getTime() - 3 * 86400 * 1000);
  const thisStart = new Date(thisEnd.getTime() - 6 * 86400 * 1000);
  const priorEnd = new Date(thisStart.getTime() - 1 * 86400 * 1000);
  const priorStart = new Date(priorEnd.getTime() - 6 * 86400 * 1000);
  const fmt = (d: Date) => d.toISOString().slice(0, 10);
  return {
    thisWeekStart: fmt(thisStart),
    thisWeekEnd: fmt(thisEnd),
    priorWeekStart: fmt(priorStart),
    priorWeekEnd: fmt(priorEnd),
  };
}

function indexByQuery(rows: GscQueryRow[]): Map<string, GscQueryRow> {
  const m = new Map<string, GscQueryRow>();
  for (const r of rows) m.set(r.query, r);
  return m;
}

/**
 * Compute wins / misses / new queries for one client.
 */
export async function buildWinsMissesForClient(input: {
  slug: string;
  displayName: string;
  siteUrl: string;
  isLamh: boolean;
  goalPrimaryOutcome: string;
  goalConversionDefinition?: string;
  now?: Date;
}): Promise<ClientWinsMisses> {
  const window = weekBounds(input.now);
  const [thisRows, priorRows] = await Promise.all([
    getTopQueries(input.siteUrl, window.thisWeekStart, window.thisWeekEnd, 100),
    getTopQueries(input.siteUrl, window.priorWeekStart, window.priorWeekEnd, 100),
  ]);

  const priorIdx = indexByQuery(priorRows);
  const deltas: QueryDelta[] = [];

  for (const r of thisRows) {
    if (r.impressions < MIN_IMPRESSIONS) continue;

    const prior = priorIdx.get(r.query);
    if (!prior) {
      deltas.push({
        query: r.query,
        thisPosition: r.position,
        priorPosition: null,
        positionDelta: null,
        thisImpressions: r.impressions,
        thisClicks: r.clicks,
        classification: 'new',
      });
      continue;
    }

    const positionDelta = r.position - prior.position; // negative = improved
    let cls: QueryDelta['classification'] = 'steady';
    if (positionDelta <= -WIN_THRESHOLD) cls = 'win';
    else if (positionDelta >= MISS_THRESHOLD) cls = 'miss';

    deltas.push({
      query: r.query,
      thisPosition: r.position,
      priorPosition: prior.position,
      positionDelta,
      thisImpressions: r.impressions,
      thisClicks: r.clicks,
      classification: cls,
    });
  }

  const wins = deltas
    .filter(d => d.classification === 'win')
    .sort((a, b) => (a.positionDelta ?? 0) - (b.positionDelta ?? 0));
  const misses = deltas
    .filter(d => d.classification === 'miss')
    .sort((a, b) => (b.positionDelta ?? 0) - (a.positionDelta ?? 0));
  const newQueries = deltas
    .filter(d => d.classification === 'new')
    .sort((a, b) => b.thisImpressions - a.thisImpressions)
    .slice(0, 10);

  const totalThisWeekClicks = thisRows.reduce((s, r) => s + r.clicks, 0);
  const totalPriorWeekClicks = priorRows.reduce((s, r) => s + r.clicks, 0);
  const weekOverWeekClicksPct =
    totalPriorWeekClicks === 0
      ? totalThisWeekClicks > 0
        ? 100
        : 0
      : Math.round(((totalThisWeekClicks - totalPriorWeekClicks) / totalPriorWeekClicks) * 100);

  // Conversation flag: more misses than wins AND total clicks dropped
  const needsConversation = misses.length >= wins.length * 2 && weekOverWeekClicksPct < -15;

  return {
    slug: input.slug,
    displayName: input.displayName,
    siteUrl: input.siteUrl,
    isLamh: input.isLamh,
    goalPrimaryOutcome: input.goalPrimaryOutcome,
    goalConversionDefinition: input.goalConversionDefinition,
    window,
    wins,
    misses,
    newQueries,
    totalThisWeekClicks,
    totalPriorWeekClicks,
    weekOverWeekClicksPct,
    needsConversation,
  };
}

// =========================
// Internal Telegram digest (full picture, Justin-facing)
// =========================

export function renderInternalTelegram(data: ClientWinsMisses[]): string {
  const lines: string[] = [];
  lines.push(`<b>Weekly Wins &amp; Misses</b> — ${data[0]?.window.thisWeekStart ?? ''} to ${data[0]?.window.thisWeekEnd ?? ''}`);
  lines.push('');

  for (const c of data) {
    const arrow = c.weekOverWeekClicksPct > 0 ? '↑' : c.weekOverWeekClicksPct < 0 ? '↓' : '→';
    lines.push(
      `<b>${c.displayName}</b> ${arrow} ${c.weekOverWeekClicksPct > 0 ? '+' : ''}${c.weekOverWeekClicksPct}% WoW · ${c.totalThisWeekClicks} clicks${c.isLamh ? ' [LAMH]' : ''}`,
    );
    if (c.wins.length > 0) {
      lines.push(`  Wins (${c.wins.length}):`);
      for (const w of c.wins.slice(0, 5)) {
        lines.push(`    ✓ "${w.query}" ${(w.priorPosition ?? 0).toFixed(1)} → ${w.thisPosition.toFixed(1)} (${w.thisImpressions} impr)`);
      }
    }
    if (c.misses.length > 0) {
      lines.push(`  Misses (${c.misses.length}):`);
      for (const m of c.misses.slice(0, 5)) {
        lines.push(`    ✗ "${m.query}" ${(m.priorPosition ?? 0).toFixed(1)} → ${m.thisPosition.toFixed(1)} (${m.thisImpressions} impr)`);
      }
    }
    if (c.newQueries.length > 0) {
      const top = c.newQueries[0];
      lines.push(`  New top query: "${top.query}" at ${top.thisPosition.toFixed(1)} (${top.thisImpressions} impr)`);
    }
    if (c.needsConversation) {
      lines.push(`  ⚠ CONVERSATION FLAG — majority misses + clicks down >15%. Schedule call.`);
    }
    lines.push('');
  }

  return lines.join('\n');
}

// =========================
// Client-facing curated HTML (wins-forward, losses reframed)
// =========================

const DISPLAY = `'Space Grotesk','Inter','Helvetica Neue',Arial,sans-serif`;
const MONO = `'JetBrains Mono',Consolas,Menlo,'Courier New',monospace`;

function escapeHtml(s: string | null | undefined): string {
  return String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function buildTopNextActions(c: ClientWinsMisses): string[] {
  const actions: string[] = [];
  if (c.misses.length > 0) {
    actions.push(
      `Deploying targeted updates on ${c.misses.length} queries where we spotted an opening — each is a direct path back toward ${c.goalConversionDefinition || c.goalPrimaryOutcome}.`,
    );
  }
  if (c.wins.length > 0) {
    actions.push(
      `Doubling down on the ${c.wins.length} queries where ranking just jumped — building supporting content to hold and extend the gains.`,
    );
  }
  if (c.newQueries.length > 0) {
    actions.push(
      `Monitoring ${c.newQueries.length} new queries that surfaced this week — early signal that our authority work is expanding your footprint.`,
    );
  }
  while (actions.length < 3) {
    actions.push(`Re-running the playbook next week to keep momentum on ${c.goalPrimaryOutcome}.`);
    break;
  }
  return actions.slice(0, 3);
}

export function renderClientCuratedInner(c: ClientWinsMisses, firstName: string): string {
  const winRows = c.wins
    .slice(0, 5)
    .map(
      w => `
    <tr>
      <td style="padding:8px 6px;border-bottom:1px solid #f0f0f0;font-size:13px;color:#1a1a1a;">${escapeHtml(w.query)}</td>
      <td style="padding:8px 6px;border-bottom:1px solid #f0f0f0;font-size:13px;color:#0d8a3e;text-align:right;font-family:${MONO};">&uarr; ${Math.abs(w.positionDelta ?? 0).toFixed(1)} pos</td>
    </tr>`,
    )
    .join('');

  const newRows = c.newQueries
    .slice(0, 5)
    .map(
      q => `
    <tr>
      <td style="padding:8px 6px;border-bottom:1px solid #f0f0f0;font-size:13px;color:#1a1a1a;">${escapeHtml(q.query)}</td>
      <td style="padding:8px 6px;border-bottom:1px solid #f0f0f0;font-size:13px;color:#333;text-align:right;font-family:${MONO};">pos ${q.thisPosition.toFixed(1)}</td>
    </tr>`,
    )
    .join('');

  const actions = buildTopNextActions(c);
  const actionsList = actions
    .map(
      (a, i) =>
        `<li style="margin:0 0 8px 0;font-size:14px;color:#1a1a1a;line-height:1.55;"><b style="color:#FF6A00;font-family:${MONO};font-size:11px;margin-right:6px;">${(i + 1).toString().padStart(2, '0')}</b>${escapeHtml(a)}</li>`,
    )
    .join('');

  // Losses are reframed — we NEVER list the miss queries to the client.
  // Instead we say "we spotted X openings" as part of the next-action copy.
  const openingNote =
    c.misses.length > 0
      ? `<p style="margin:0 0 14px 0;font-size:15px;color:#1a1a1a;line-height:1.6;">We also spotted ${c.misses.length} ${c.misses.length === 1 ? 'opening' : 'openings'} this week where a targeted update will compound the wins. That work is already queued.</p>`
      : '';

  const winsBlock =
    c.wins.length > 0
      ? `
<h3 style="margin:24px 0 10px 0;font-size:15px;color:#1a1a1a;font-family:${DISPLAY};font-weight:800;text-transform:uppercase;letter-spacing:0.02em;">Wins this week</h3>
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;margin:0 0 22px 0;">
  <tbody>${winRows}</tbody>
</table>`
      : '';

  const newQueriesBlock =
    c.newQueries.length > 0
      ? `
<h3 style="margin:24px 0 10px 0;font-size:15px;color:#1a1a1a;font-family:${DISPLAY};font-weight:800;text-transform:uppercase;letter-spacing:0.02em;">New queries ranking for you</h3>
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;margin:0 0 22px 0;">
  <tbody>${newRows}</tbody>
</table>`
      : '';

  return `
<h2 style="margin:0 0 4px 0;font-size:24px;line-height:1.1;color:#1a1a1a;font-family:${DISPLAY};font-weight:900;letter-spacing:-0.025em;text-transform:uppercase;">Weekly intelligence</h2>
<p style="margin:0 0 22px 0;color:#555;font-size:14px;">${escapeHtml(c.displayName)} &mdash; ${escapeHtml(c.window.thisWeekStart)} to ${escapeHtml(c.window.thisWeekEnd)}</p>

<p style="margin:0 0 14px 0;font-size:15px;color:#1a1a1a;line-height:1.6;">${escapeHtml(firstName)},</p>

<p style="margin:0 0 14px 0;font-size:15px;color:#1a1a1a;line-height:1.6;">Quick weekly look at how AI-search visibility is moving for ${escapeHtml(c.displayName)} and what we're doing next to build toward ${escapeHtml(c.goalPrimaryOutcome)}.</p>

${openingNote}

${winsBlock}
${newQueriesBlock}

<h3 style="margin:24px 0 10px 0;font-size:15px;color:#1a1a1a;font-family:${DISPLAY};font-weight:800;text-transform:uppercase;letter-spacing:0.02em;">What we're doing next</h3>
<ol style="margin:0 0 24px 0;padding:0 0 0 4px;list-style:none;">${actionsList}</ol>

<div style="background:#fafafa;border-left:4px solid #FF6A00;padding:16px 18px;margin:8px 0 20px 0;">
  <p style="margin:0;font-size:13px;color:#555;">Reply to this email with any questions or priorities you want us to push higher in the queue.</p>
</div>`;
}

// =========================
// Brand Safety gate
// =========================

export interface BrandSafetyVerdict {
  pass: boolean;
  reasons: string[];
}

export function checkBrandSafety(curatedHtml: string, data: ClientWinsMisses): BrandSafetyVerdict {
  const reasons: string[] = [];
  const text = curatedHtml.toLowerCase();

  // 1. No raw-negative framing leaked through
  const banned = [
    'you are not',
    "you're not",
    'declined',
    'dropped',
    'lost rankings',
    'losing',
    'failing',
    'underperforming',
  ];
  for (const b of banned) if (text.includes(b)) reasons.push(`banned phrase "${b}"`);

  // 2. Proprietary names never exposed
  const proprietary = ['blind spot blitz', 'morning lead hunt', 'answerforge', 'aero-7', 'aero7', '$2,997'];
  for (const p of proprietary) if (text.includes(p)) reasons.push(`proprietary name "${p}"`);

  // 3. Forward-looking block required
  if (!/what we['']re doing next/i.test(curatedHtml)) {
    reasons.push('missing "what we are doing next" section');
  }

  // 4. If only misses (no wins, no new queries), hold for Justin manual framing
  if (data.wins.length === 0 && data.newQueries.length === 0 && data.misses.length > 0) {
    reasons.push('all-negative week (no wins, no new queries) — hold for manual framing');
  }

  // 5. LAMH never sent client-facing
  if (data.isLamh) reasons.push('LAMH is internal crown jewel — never sent client-facing');

  return { pass: reasons.length === 0, reasons };
}

export function buildSubject(displayName: string, start: string, end: string): string {
  return `Weekly intelligence — ${displayName} (${start} to ${end})`;
}
