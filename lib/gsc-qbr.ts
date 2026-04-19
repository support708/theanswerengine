/**
 * Quarterly Business Review auto-deck builder.
 *
 * For a client, assembles:
 *   - Baseline (day-0) vs current 28-day snapshot
 *   - Headline metrics + delta badges (impressions, clicks, CTR, position)
 *   - Top queries ranking now that weren't in the baseline
 *   - Top pages by clicks this quarter
 *   - Content shipped signal — pulled from scheduled snapshots if present
 *   - "What's next" forward-looking block (from goals + pillar opportunities)
 *
 * Rendered as a full-page HTML document (not just email-inner), suitable
 * for direct browser viewing OR print-to-PDF. Also rendered as an email-
 * inner variant for embedded Gmail drafts.
 *
 * Brand Safety / Interpretation Layer:
 *   - Every metric tied to client's goals.primary_outcome in the copy
 *   - Negative deltas reframed as "recalibrating / opening spotted"
 *   - Top 3 next-quarter actions always included
 *   - LAMH: QBR is INTERNAL ONLY (Justin-facing), not sent to external parties
 */
import { captureSnapshot, deltaVsBaseline, type BaselineSnapshot } from './gsc-onboarding-baseline';
import { buildPillarClusters, type PillarCluster } from './gsc-pillar-clustering';

export interface QbrInput {
  slug: string;
  displayName: string;
  siteUrl: string;
  isLamh: boolean;
  goalPrimaryOutcome: string;
  goalConversionDefinition?: string;
  baseline?: BaselineSnapshot; // from data/gsc-baselines.json; if missing, QBR still works but "since day-0" section is omitted
  now?: Date;
}

export interface QbrData {
  slug: string;
  displayName: string;
  isLamh: boolean;
  goalPrimaryOutcome: string;
  generatedAt: string;
  current: BaselineSnapshot;
  baseline?: BaselineSnapshot;
  delta?: ReturnType<typeof deltaVsBaseline>;
  newTopQueries: string[]; // queries present now that weren't in baseline's top 20
  topPillars: PillarCluster[];
  nextQuarterActions: string[];
}

export async function buildQbr(input: QbrInput): Promise<QbrData> {
  const current = await captureSnapshot({
    slug: input.slug,
    displayName: input.displayName,
    siteUrl: input.siteUrl,
    capturedBy: 'qbr-auto',
    note: 'qbr-current-snapshot',
    now: input.now,
  });

  let delta: ReturnType<typeof deltaVsBaseline> | undefined;
  let newTopQueries: string[] = [];
  if (input.baseline) {
    delta = deltaVsBaseline(input.baseline, current);
    const baselineQueries = new Set(input.baseline.topQueries.map(q => q.query));
    newTopQueries = current.topQueries
      .filter(q => !baselineQueries.has(q.query))
      .slice(0, 10)
      .map(q => q.query);
  }

  // Pillar opportunities (LLM-naming skipped for QBR — surface tokens only)
  const topPillars = await buildPillarClusters({
    siteUrl: input.siteUrl,
    minImpressions: 5,
    minShared: 2,
    maxClusters: 3,
  });

  const nextQuarterActions = buildNextQuarterActions(input, current, topPillars);

  return {
    slug: input.slug,
    displayName: input.displayName,
    isLamh: input.isLamh,
    goalPrimaryOutcome: input.goalPrimaryOutcome,
    generatedAt: new Date().toISOString(),
    current,
    baseline: input.baseline,
    delta,
    newTopQueries,
    topPillars,
    nextQuarterActions,
  };
}

function buildNextQuarterActions(input: QbrInput, current: BaselineSnapshot, pillars: PillarCluster[]): string[] {
  const actions: string[] = [];
  if (pillars.length > 0) {
    const top = pillars[0];
    actions.push(
      `Build a pillar page covering "${top.topTokens.slice(0, 3).join(', ')}" — one deep page would rank for the ${top.members.length}-query cluster already pulling ${top.totalImpressions.toLocaleString()} impressions.`,
    );
  }
  const topPage = current.topPages[0];
  if (topPage) {
    actions.push(
      `Sharpen the conversion funnel on "${(topPage.page || '').replace(/^https?:\/\/[^/]+/, '') || '/'}" — highest-traffic page, biggest lift per hour tied to ${input.goalPrimaryOutcome}.`,
    );
  }
  actions.push(
    `Continue monthly content cadence targeting queries at page 2 to convert impressions to clicks over the next 90 days.`,
  );
  while (actions.length < 3) actions.push(`Re-audit at the end of next quarter to measure compounding gains.`);
  return actions.slice(0, 3);
}

// =========================
// Rendering
// =========================

const DISPLAY = `'Space Grotesk','Inter','Helvetica Neue',Arial,sans-serif`;
const SANS = `'Inter','Helvetica Neue',Arial,sans-serif`;
const MONO = `'JetBrains Mono',Consolas,Menlo,'Courier New',monospace`;
const BRAND = '#FF6A00';

function esc(s: string | null | undefined): string {
  return String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function fi(n: number): string {
  return n.toLocaleString('en-US');
}

function deltaBadge(pct: number, invertGood = false): string {
  const good = invertGood ? pct < 0 : pct > 0;
  const bad = invertGood ? pct > 0 : pct < 0;
  const color = good ? '#0d8a3e' : bad ? '#BF172E' : '#888';
  const sign = pct > 0 ? '+' : '';
  const arrow = good ? '&uarr;' : bad ? '&darr;' : '';
  return `<span style="color:${color};font-weight:800;font-family:${MONO};font-size:13px;">${arrow} ${sign}${pct}%</span>`;
}

export function renderQbrInner(q: QbrData, firstName: string): string {
  const current = q.current;
  const baseline = q.baseline;
  const delta = q.delta;

  const deltaBlock =
    baseline && delta
      ? `
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;margin:0 0 24px 0;">
  <tr>
    <td style="padding:18px;background:#fafafa;border-left:3px solid #FF6A00;" valign="top">
      <div style="font-family:${MONO};font-size:10px;color:#888;letter-spacing:0.14em;text-transform:uppercase;margin-bottom:4px;">Impressions since day-0</div>
      <div style="font-family:${DISPLAY};font-size:28px;font-weight:900;color:#1a1a1a;">${fi(current.totalImpressions)}</div>
      <div style="margin-top:4px;">${deltaBadge(delta.impressionsPct)} <span style="color:#888;font-size:11px;">vs ${fi(baseline.totalImpressions)} at start</span></div>
    </td>
    <td style="width:12px;"></td>
    <td style="padding:18px;background:#fafafa;border-left:3px solid #FF6A00;" valign="top">
      <div style="font-family:${MONO};font-size:10px;color:#888;letter-spacing:0.14em;text-transform:uppercase;margin-bottom:4px;">Clicks since day-0</div>
      <div style="font-family:${DISPLAY};font-size:28px;font-weight:900;color:#1a1a1a;">${fi(current.totalClicks)}</div>
      <div style="margin-top:4px;">${deltaBadge(delta.clicksPct)} <span style="color:#888;font-size:11px;">vs ${fi(baseline.totalClicks)} at start</span></div>
    </td>
  </tr>
</table>
<p style="margin:0 0 24px 0;color:#555;font-size:13px;">Window compared: ${esc(baseline.windowStart)}–${esc(baseline.windowEnd)} (day-0) vs ${esc(current.windowStart)}–${esc(current.windowEnd)} (now) — ${delta.daysSinceBaseline} days elapsed.</p>`
      : `
<p style="margin:0 0 20px 0;padding:12px 14px;background:#fff8f0;border-left:3px solid #FF6A00;color:#555;font-size:13px;">No day-0 baseline captured yet. Current 28-day snapshot only.</p>
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;margin:0 0 24px 0;">
  <tr>
    <td style="padding:18px;background:#fafafa;border-left:3px solid #FF6A00;">
      <div style="font-family:${MONO};font-size:10px;color:#888;letter-spacing:0.14em;text-transform:uppercase;margin-bottom:4px;">Impressions (last 28d)</div>
      <div style="font-family:${DISPLAY};font-size:28px;font-weight:900;color:#1a1a1a;">${fi(current.totalImpressions)}</div>
    </td>
    <td style="width:12px;"></td>
    <td style="padding:18px;background:#fafafa;border-left:3px solid #FF6A00;">
      <div style="font-family:${MONO};font-size:10px;color:#888;letter-spacing:0.14em;text-transform:uppercase;margin-bottom:4px;">Clicks (last 28d)</div>
      <div style="font-family:${DISPLAY};font-size:28px;font-weight:900;color:#1a1a1a;">${fi(current.totalClicks)}</div>
    </td>
  </tr>
</table>`;

  const newQueriesBlock =
    q.newTopQueries.length > 0
      ? `
<h3 style="margin:24px 0 10px 0;font-size:15px;color:#1a1a1a;font-family:${DISPLAY};font-weight:800;text-transform:uppercase;letter-spacing:0.02em;">New queries ranking since day-0</h3>
<ul style="margin:0 0 24px 0;padding:0 0 0 20px;color:#1a1a1a;font-size:14px;line-height:1.55;">
${q.newTopQueries.map(qq => `<li>${esc(qq)}</li>`).join('')}
</ul>`
      : '';

  const topPagesRows = q.current.topPages
    .slice(0, 5)
    .map(
      (p, i) => `
    <tr>
      <td style="padding:8px 6px;border-bottom:1px solid #f0f0f0;font-family:${MONO};font-size:12px;color:#999;width:26px;">${(i + 1).toString().padStart(2, '0')}</td>
      <td style="padding:8px 6px;border-bottom:1px solid #f0f0f0;font-size:12px;color:#1a1a1a;font-family:${MONO};">${esc(p.page.replace(/^https?:\/\/[^/]+/, '') || '/')}</td>
      <td style="padding:8px 6px;border-bottom:1px solid #f0f0f0;font-size:13px;color:#333;text-align:right;">${fi(p.impressions)}</td>
      <td style="padding:8px 6px;border-bottom:1px solid #f0f0f0;font-size:13px;color:#333;text-align:right;">${fi(p.clicks)}</td>
    </tr>`,
    )
    .join('');

  const pillarsBlock =
    q.topPillars.length > 0
      ? `
<h3 style="margin:24px 0 10px 0;font-size:15px;color:#1a1a1a;font-family:${DISPLAY};font-weight:800;text-transform:uppercase;letter-spacing:0.02em;">Top pillar opportunities for next quarter</h3>
<ol style="margin:0 0 24px 0;padding:0 0 0 20px;color:#1a1a1a;font-size:14px;line-height:1.6;">
${q.topPillars.slice(0, 3).map(p => `<li><b>${esc(p.topTokens.slice(0, 3).join(' · '))}</b> — ${p.members.length} queries, ${fi(p.totalImpressions)} impressions</li>`).join('')}
</ol>`
      : '';

  const actionsBlock = q.nextQuarterActions
    .map(
      (a, i) =>
        `<li style="margin:0 0 10px 0;font-size:14px;color:#1a1a1a;line-height:1.6;"><b style="color:#FF6A00;font-family:${MONO};font-size:11px;margin-right:6px;">${(i + 1).toString().padStart(2, '0')}</b>${esc(a)}</li>`,
    )
    .join('');

  return `
<h2 style="margin:0 0 4px 0;font-size:26px;line-height:1.1;color:#1a1a1a;font-family:${DISPLAY};font-weight:900;letter-spacing:-0.025em;text-transform:uppercase;">Quarterly Business Review</h2>
<p style="margin:0 0 22px 0;color:#555;font-size:14px;">${esc(q.displayName)} &mdash; ${esc(q.generatedAt.slice(0, 10))}</p>

<p style="margin:0 0 14px 0;font-size:15px;color:#1a1a1a;line-height:1.6;">${esc(firstName)},</p>

<p style="margin:0 0 20px 0;font-size:15px;color:#1a1a1a;line-height:1.6;">Here's the quarterly look at how your AI-search authority has grown and where we're headed over the next 90 days to keep compounding ${esc(q.goalPrimaryOutcome)}.</p>

${deltaBlock}

${newQueriesBlock}

<h3 style="margin:24px 0 10px 0;font-size:15px;color:#1a1a1a;font-family:${DISPLAY};font-weight:800;text-transform:uppercase;letter-spacing:0.02em;">Top pages this quarter</h3>
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;margin:0 0 24px 0;">
  <tbody>${topPagesRows}</tbody>
</table>

${pillarsBlock}

<h3 style="margin:24px 0 10px 0;font-size:15px;color:#1a1a1a;font-family:${DISPLAY};font-weight:800;text-transform:uppercase;letter-spacing:0.02em;">What we're doing next quarter</h3>
<ol style="margin:0 0 24px 0;padding:0 0 0 4px;list-style:none;">${actionsBlock}</ol>

<div style="background:#fafafa;border-left:4px solid #FF6A00;padding:18px 20px;margin:24px 0 20px 0;">
  <p style="margin:0;font-size:14px;color:#1a1a1a;line-height:1.55;">Reply to this email with anything you want prioritized differently, or if you want to jump on a quarterly review call to walk through the full strategy.</p>
</div>`;
}

/**
 * Full standalone HTML document (for saving to disk / browser viewing / print-to-PDF).
 */
export function renderQbrStandaloneHtml(q: QbrData, firstName: string): string {
  const inner = renderQbrInner(q, firstName);
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
  <title>QBR — ${esc(q.displayName)}</title>
  <style>
    @page { size: letter; margin: 0.5in; }
    body { margin: 0; padding: 0; background: #fff; font-family: ${SANS}; color: #1a1a1a; }
    main { max-width: 820px; margin: 0 auto; padding: 40px 32px; }
    .hdr { display: flex; align-items: center; border-bottom: 1px solid #e5e7eb; padding-bottom: 18px; margin-bottom: 28px; }
    .hdr img { width: 32px; height: 32px; }
    .hdr .wm { margin-left: 12px; font-family: ${DISPLAY}; font-weight: 900; font-size: 20px; letter-spacing: -0.035em; color: ${BRAND}; text-transform: uppercase; }
    .tag { display: inline-block; background: ${BRAND}; color: #000; padding: 5px 10px; font-family: ${MONO}; font-size: 10px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; margin-bottom: 22px; }
    footer { margin-top: 40px; padding-top: 20px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #888; text-align: center; }
  </style>
</head>
<body>
  <main>
    <div class="hdr">
      <img src="https://www.theanswerengine.ai/The_Answer_Engine_Solo_Logo_Transparent.png" alt="TAE" />
      <div class="wm">THE ANSWER ENGINE</div>
    </div>
    <span class="tag">Quarterly Review</span>
    ${inner}
    <footer>
      The Answer Engine · Quarterly Business Review · Generated ${esc(q.generatedAt)}
    </footer>
  </main>
</body>
</html>`;
}

// =========================
// Brand Safety
// =========================

export interface BrandSafetyVerdict {
  pass: boolean;
  reasons: string[];
}

export function checkBrandSafety(rendered: string, q: QbrData): BrandSafetyVerdict {
  const reasons: string[] = [];
  const text = rendered.toLowerCase();

  const banned = ['declined', 'dropped', 'lost rankings', 'losing', 'failing', 'underperforming'];
  for (const b of banned) if (text.includes(b)) reasons.push(`banned phrase "${b}"`);

  const proprietary = ['blind spot blitz', 'morning lead hunt', 'answerforge', 'aero-7', 'aero7', '$2,997'];
  for (const p of proprietary) if (text.includes(p)) reasons.push(`proprietary name "${p}"`);

  if (!/what we['']re doing next/i.test(rendered)) reasons.push('missing "what we are doing next" section');
  if (q.isLamh) reasons.push('LAMH is crown jewel — QBR is internal only, not client-facing');

  return { pass: reasons.length === 0, reasons };
}
