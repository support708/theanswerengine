/**
 * Top-Performer Conversion Audit builder.
 *
 * For a client: pull top-clicks pages over the last 28 days from GSC,
 * fetch each page, extract H1/title/meta/primary CTA, then ask Claude
 * (Haiku 4.5) to score whether the on-page conversion funnel aligns
 * with the client's stated goal and propose a rewrite brief.
 *
 * Design rules (backlog: Brand Safety Layer + Interpretation Layer):
 *   - Every recommendation ties back to client.goals.primary_outcome
 *   - Losses reframed as opportunities ("we spotted an opening")
 *   - Always produce Top 3 Next Actions
 *   - Flag when a conversation is needed
 *   - LAMH is surface-only — never propose CTA changes
 */
import { getTopPages } from './gsc-api';
import type { GscPageRow } from './gsc-api';

export interface ClientGoals {
  primary_outcome: string;
  secondary_outcomes?: string[];
  target_audience?: string;
  conversion_definition?: string;
  notes?: string;
}

export interface ClientProfileLite {
  slug: string;
  displayName: string;
  siteUrl: string;
  websiteUrl: string;
  contactEmail: string;
  goals: ClientGoals;
  services?: Array<string | { name: string; description?: string; is_primary?: boolean }>;
  brandVoiceNotes?: string;
  isLamh: boolean;
}

export interface PageSnapshot {
  h1: string | null;
  title: string | null;
  metaDescription: string | null;
  primaryCtaText: string | null;
  primaryCtaHref: string | null;
  secondaryCtaText: string | null;
  hasForm: boolean;
  rawTextPreview: string; // first ~800 chars of body for LLM context
}

export interface RewriteBrief {
  alignmentScore: 0 | 1 | 2 | 3;
  alignmentRationale: string;
  recommendedH1: string | null;
  recommendedPrimaryCta: { text: string; intent: string } | null;
  recommendedSupportingElement: string | null; // form/lead-magnet hint
  confidence: 'low' | 'medium' | 'high';
}

export interface PageAuditResult {
  url: string;
  path: string;
  clicks: number;
  impressions: number;
  ctr: number;
  position: number;
  fetchOk: boolean;
  fetchError?: string;
  snapshot?: PageSnapshot;
  brief?: RewriteBrief;
  lamhSurfaceOnly: boolean;
}

export interface TopPerformerAudit {
  slug: string;
  displayName: string;
  siteUrl: string;
  isLamh: boolean;
  goals: ClientGoals;
  periodStart: string;
  periodEnd: string;
  pages: PageAuditResult[];
  totalClicksTop10: number;
  totalImpressionsTop10: number;
  topNextActions: string[];
  conversationFlag: string | null;
  generatedAt: string;
}

// =========================
// Date window — last 28 days, GSC lag of 3 days
// =========================

export function last28DayWindow(now: Date = new Date()): { start: string; end: string } {
  const end = new Date(now.getTime() - 3 * 86400 * 1000);
  const start = new Date(end.getTime() - 27 * 86400 * 1000);
  const fmt = (d: Date) => d.toISOString().slice(0, 10);
  return { start: fmt(start), end: fmt(end) };
}

// =========================
// HTML parsing (no cheerio — regex, keep it simple and defensive)
// =========================

const UA =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) ' +
  'Chrome/124.0.0.0 Safari/537.36 TheAnswerEngine-Auditor/1.0';

function stripTags(s: string): string {
  return s
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

function pickH1(html: string): string | null {
  const m = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  if (!m) return null;
  const text = stripTags(m[1]);
  return text.length > 0 ? text.slice(0, 300) : null;
}

function pickTitle(html: string): string | null {
  const m = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  if (!m) return null;
  const text = stripTags(m[1]);
  return text.length > 0 ? text.slice(0, 200) : null;
}

function pickMetaDescription(html: string): string | null {
  const patterns = [
    /<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)["']/i,
    /<meta[^>]*content=["']([^"']+)["'][^>]*name=["']description["']/i,
    /<meta[^>]*property=["']og:description["'][^>]*content=["']([^"']+)["']/i,
  ];
  for (const pat of patterns) {
    const m = html.match(pat);
    if (m) return stripTags(m[1]).slice(0, 320);
  }
  return null;
}

function hasForm(html: string): boolean {
  return /<form\b/i.test(html);
}

interface CandidateCta {
  text: string;
  href: string | null;
  score: number; // higher = more prominent
}

// Prominent CTA keywords used to score alignment-neutral "button-ness"
const CTA_KEYWORDS = [
  'contact',
  'schedule',
  'book',
  'call',
  'request',
  'consultation',
  'get started',
  'start',
  'free',
  'valuation',
  'estimate',
  'quote',
  'find out',
  'learn more',
  'search',
  'browse',
  'view',
  'see',
  'explore',
  'reach',
  'sign up',
  'register',
  'inquire',
  'talk',
  'submit',
  'send',
];

function scoreCandidate(text: string, klass: string, tag: string): number {
  let s = 0;
  if (tag === 'button') s += 6;
  if (/btn|button|cta|primary|action/i.test(klass)) s += 4;
  const lower = text.toLowerCase();
  for (const k of CTA_KEYWORDS) if (lower.includes(k)) s += 2;
  // Short, action-y text scores higher
  if (text.length > 0 && text.length < 40) s += 2;
  if (text.length >= 40 && text.length < 80) s += 1;
  return s;
}

function pickCtas(html: string): { primary: CandidateCta | null; secondary: CandidateCta | null } {
  const candidates: CandidateCta[] = [];

  // <button> tags
  const btnRe = /<button\b([^>]*)>([\s\S]*?)<\/button>/gi;
  let m: RegExpExecArray | null;
  while ((m = btnRe.exec(html)) !== null) {
    const attrs = m[1] || '';
    const text = stripTags(m[2] || '');
    if (!text || text.length > 160) continue;
    const klass = (attrs.match(/class=["']([^"']+)["']/i) || [])[1] || '';
    candidates.push({ text, href: null, score: scoreCandidate(text, klass, 'button') });
  }

  // <a> tags with href (potential CTAs)
  const aRe = /<a\b([^>]*)>([\s\S]*?)<\/a>/gi;
  while ((m = aRe.exec(html)) !== null) {
    const attrs = m[1] || '';
    const text = stripTags(m[2] || '');
    if (!text || text.length > 160) continue;
    const href = (attrs.match(/href=["']([^"']+)["']/i) || [])[1] || null;
    const klass = (attrs.match(/class=["']([^"']+)["']/i) || [])[1] || '';
    // Skip pure navigation anchors
    if (href && /^#/.test(href)) continue;
    // Skip empty/social anchors
    if (/^(facebook|twitter|instagram|linkedin|youtube|tiktok)\.com/i.test(text)) continue;
    const s = scoreCandidate(text, klass, 'a');
    if (s <= 0) continue;
    candidates.push({ text, href, score: s });
  }

  candidates.sort((a, b) => b.score - a.score);
  return {
    primary: candidates[0] || null,
    secondary: candidates[1] || null,
  };
}

function previewText(html: string, maxChars = 800): string {
  // Strip scripts/styles first
  const clean = html
    .replace(/<script\b[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style\b[\s\S]*?<\/style>/gi, ' ');
  // Grab body if present
  const bodyMatch = clean.match(/<body\b[^>]*>([\s\S]*?)<\/body>/i);
  const source = bodyMatch ? bodyMatch[1] : clean;
  return stripTags(source).slice(0, maxChars);
}

export async function fetchPageSnapshot(url: string): Promise<{ ok: true; snapshot: PageSnapshot } | { ok: false; error: string }> {
  try {
    const res = await fetch(url, {
      method: 'GET',
      redirect: 'follow',
      headers: {
        'User-Agent': UA,
        Accept: 'text/html,application/xhtml+xml',
        'Accept-Language': 'en-US,en;q=0.9',
      },
      signal: AbortSignal.timeout(15000),
    });
    if (!res.ok) return { ok: false, error: `HTTP ${res.status}` };
    const html = await res.text();
    if (!html || html.length < 200) return { ok: false, error: 'empty or minimal response' };

    const h1 = pickH1(html);
    const title = pickTitle(html);
    const metaDescription = pickMetaDescription(html);
    const ctas = pickCtas(html);
    const snapshot: PageSnapshot = {
      h1,
      title,
      metaDescription,
      primaryCtaText: ctas.primary?.text ?? null,
      primaryCtaHref: ctas.primary?.href ?? null,
      secondaryCtaText: ctas.secondary?.text ?? null,
      hasForm: hasForm(html),
      rawTextPreview: previewText(html, 800),
    };
    return { ok: true, snapshot };
  } catch (err) {
    return { ok: false, error: (err as Error).message || 'fetch failed' };
  }
}

// =========================
// LLM rewrite brief (Claude Haiku 4.5 — tight JSON out)
// =========================

const BRIEF_SYSTEM = `You are a conversion-focused copy strategist for a local AEO agency.
You get ONE URL's on-page snapshot and the client's stated business goal.
Your job is to assess whether the on-page conversion path aligns with that goal and, if not, propose a tight rewrite brief.

Output STRICT JSON only, wrapped in a \`\`\`json code block, matching this schema:
{
  "alignmentScore": 0|1|2|3,
  "alignmentRationale": "1-2 sentences. Plain English. Tie to the stated goal. No filler.",
  "recommendedH1": "string or null (null if existing H1 is already strong)",
  "recommendedPrimaryCta": { "text": "3-6 word action phrase", "intent": "what the click should do (e.g. 'home valuation form', 'schedule consultation')" } | null,
  "recommendedSupportingElement": "form/lead-magnet hint OR null",
  "confidence": "low"|"medium"|"high"
}

Scoring:
  0 = page traffic is wasted (CTA absent, contradicts goal, or off-topic)
  1 = weak alignment (generic or mismatched CTA)
  2 = decent alignment but could sharpen
  3 = strong alignment — leave as is

Rules:
  - Tie every recommendation explicitly to the goal.
  - Keep CTA text crisp (3-6 words, action verb).
  - No em-dashes. No banned agency jargon ("synergy", "leverage", "ecosystem", "blind spot blitz").
  - If data is ambiguous, set confidence "low" and explain in rationale.
  - If the page is genuinely already aligned (score 3), return null for all recommended* fields.`;

interface AnthropicBriefResponse {
  content: Array<{ type: string; text?: string }>;
}

async function callClaudeForBrief(input: {
  apiKey: string;
  model: string;
  client: ClientProfileLite;
  page: PageAuditResult & { snapshot: PageSnapshot };
}): Promise<RewriteBrief> {
  const services = Array.isArray(input.client.services)
    ? (input.client.services as Array<string | { name: string; description?: string }>).map(s =>
        typeof s === 'string' ? s : s.name,
      )
    : [];

  const userPayload = {
    client: {
      displayName: input.client.displayName,
      goal_primary_outcome: input.client.goals.primary_outcome,
      goal_conversion_definition: input.client.goals.conversion_definition || '',
      goal_target_audience: input.client.goals.target_audience || '',
      goal_notes: input.client.goals.notes || '',
      brand_voice_notes: input.client.brandVoiceNotes || '',
      services: services.slice(0, 8),
    },
    page: {
      url: input.page.url,
      path: input.page.path,
      clicks_last_28d: input.page.clicks,
      impressions_last_28d: input.page.impressions,
      avg_position: Number(input.page.position.toFixed(1)),
      h1: input.page.snapshot.h1,
      title: input.page.snapshot.title,
      meta_description: input.page.snapshot.metaDescription,
      primary_cta_text: input.page.snapshot.primaryCtaText,
      primary_cta_href: input.page.snapshot.primaryCtaHref,
      secondary_cta_text: input.page.snapshot.secondaryCtaText,
      has_form: input.page.snapshot.hasForm,
      body_preview: input.page.snapshot.rawTextPreview,
    },
  };

  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': input.apiKey,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: input.model,
      max_tokens: 800,
      system: BRIEF_SYSTEM,
      messages: [{ role: 'user', content: JSON.stringify(userPayload) }],
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Claude API ${res.status}: ${text.slice(0, 400)}`);
  }

  const data = (await res.json()) as AnthropicBriefResponse;
  const text = data.content?.find(b => b.type === 'text')?.text || '';
  const jsonMatch = text.match(/```json\s*([\s\S]*?)```/) || text.match(/\{[\s\S]*\}/);
  if (!jsonMatch) throw new Error('Claude returned no JSON');

  const raw = (jsonMatch[1] || jsonMatch[0]).trim();
  const parsed = JSON.parse(raw) as RewriteBrief;

  // Normalize alignmentScore to 0-3 int
  const score = Math.max(0, Math.min(3, Math.round(Number(parsed.alignmentScore) || 0))) as 0 | 1 | 2 | 3;

  return {
    alignmentScore: score,
    alignmentRationale: String(parsed.alignmentRationale || '').trim(),
    recommendedH1: parsed.recommendedH1 || null,
    recommendedPrimaryCta: parsed.recommendedPrimaryCta || null,
    recommendedSupportingElement: parsed.recommendedSupportingElement || null,
    confidence: (parsed.confidence || 'medium') as 'low' | 'medium' | 'high',
  };
}

// =========================
// Top-3 next actions + conversation flag (interpretation layer)
// =========================

function buildTopNextActions(client: ClientProfileLite, pages: PageAuditResult[]): string[] {
  const actions: string[] = [];

  if (client.isLamh) {
    actions.push(
      `Protect LAMH authority — surface top ${pages.length} pages only, no CTA edits without Justin approval (LAMH Safety Protocol).`,
    );
    actions.push(
      `Monitor IDX-driven buyer conversion on top landing pages — goal is buyer inquiries and saved searches.`,
    );
    actions.push(`Audit outbound-link ratio monthly (portfolio links must stay under 5% of total outbounds).`);
    return actions;
  }

  const weak = pages.filter(p => p.brief && p.brief.alignmentScore <= 1);
  const medium = pages.filter(p => p.brief && p.brief.alignmentScore === 2);
  const highestClicks = pages[0];

  if (weak.length > 0) {
    actions.push(
      `Ship rewrites on ${weak.length} misaligned top-${pages.length} pages — each one converts existing traffic into ${client.goals.conversion_definition || client.goals.primary_outcome}.`,
    );
  }
  if (medium.length > 0) {
    actions.push(
      `Sharpen CTAs on ${medium.length} partially-aligned pages (H1/CTA tweaks, not full rewrites).`,
    );
  }
  if (highestClicks && highestClicks.brief && highestClicks.brief.alignmentScore < 3) {
    actions.push(
      `Prioritize "${highestClicks.path}" first — highest-traffic page, biggest conversion lift per hour of work.`,
    );
  }
  // Always add a forward-looking goal anchor if we have fewer than 3
  while (actions.length < 3) {
    if (actions.length === 0) {
      actions.push(
        `Install a single goal-aligned CTA on every top-${pages.length} page tied to ${client.goals.primary_outcome}.`,
      );
    } else if (actions.length === 1) {
      actions.push(
        `Add a lead-capture form matching the conversion definition: ${client.goals.conversion_definition || 'primary conversion'}.`,
      );
    } else {
      actions.push(`Re-audit in 28 days — measure CTR lift on rewritten pages.`);
    }
  }
  return actions.slice(0, 3);
}

function buildConversationFlag(client: ClientProfileLite, pages: PageAuditResult[]): string | null {
  if (client.isLamh) return null; // LAMH is internal — no client convo

  const weakCount = pages.filter(p => p.brief && p.brief.alignmentScore <= 1).length;
  const total = pages.filter(p => p.brief).length;

  if (total === 0) return null;
  if (weakCount >= Math.ceil(total * 0.7)) {
    return `Most top-traffic pages are not converting toward ${client.goals.primary_outcome}. Recommend a strategy call with ${client.displayName} to realign on-page conversion focus before shipping rewrites.`;
  }
  return null;
}

// =========================
// Main builder
// =========================

export async function buildTopPerformerAudit(input: {
  client: ClientProfileLite;
  anthropicApiKey: string;
  anthropicModel?: string;
  topN?: number;
  windowEnd?: Date;
  onProgress?: (msg: string) => void;
}): Promise<TopPerformerAudit> {
  const topN = input.topN ?? 10;
  const { start, end } = last28DayWindow(input.windowEnd);
  const log = input.onProgress ?? (() => {});

  log(`[${input.client.slug}] pulling top ${topN} pages ${start} to ${end}`);
  const rows = await getTopPages(input.client.siteUrl, start, end, topN);

  const pages: PageAuditResult[] = [];

  for (const row of rows) {
    const url = row.page;
    const path = url.replace(/^https?:\/\/[^/]+/, '') || '/';
    const base: PageAuditResult = {
      url,
      path,
      clicks: row.clicks,
      impressions: row.impressions,
      ctr: row.ctr,
      position: row.position,
      fetchOk: false,
      lamhSurfaceOnly: input.client.isLamh,
    };

    log(`[${input.client.slug}] fetching ${path}`);
    const fetchResult = await fetchPageSnapshot(url);

    if (!fetchResult.ok) {
      base.fetchError = fetchResult.error;
      pages.push(base);
      continue;
    }

    base.fetchOk = true;
    base.snapshot = fetchResult.snapshot;

    if (input.client.isLamh) {
      // LAMH Safety Protocol: surface only, no brief
      pages.push(base);
      continue;
    }

    try {
      log(`[${input.client.slug}] briefing ${path}`);
      base.brief = await callClaudeForBrief({
        apiKey: input.anthropicApiKey,
        model: input.anthropicModel || 'claude-haiku-4-5-20251001',
        client: input.client,
        page: base as PageAuditResult & { snapshot: PageSnapshot },
      });
    } catch (err) {
      log(`[${input.client.slug}] brief failed for ${path}: ${(err as Error).message}`);
      base.fetchError = `brief failed: ${(err as Error).message}`;
    }

    pages.push(base);
  }

  const totalClicksTop10 = rows.reduce((s, r) => s + r.clicks, 0);
  const totalImpressionsTop10 = rows.reduce((s, r) => s + r.impressions, 0);

  return {
    slug: input.client.slug,
    displayName: input.client.displayName,
    siteUrl: input.client.siteUrl,
    isLamh: input.client.isLamh,
    goals: input.client.goals,
    periodStart: start,
    periodEnd: end,
    pages,
    totalClicksTop10,
    totalImpressionsTop10,
    topNextActions: buildTopNextActions(input.client, pages),
    conversationFlag: buildConversationFlag(input.client, pages),
    generatedAt: new Date().toISOString(),
  };
}

// =========================
// HTML rendering (Justin-facing raw + client-facing curated)
// =========================

const DISPLAY = `'Space Grotesk','Inter','Helvetica Neue',Arial,sans-serif`;
const MONO = `'JetBrains Mono',Consolas,Menlo,'Courier New',monospace`;

function escapeHtml(s: string | null | undefined): string {
  return String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function formatInt(n: number): string {
  return n.toLocaleString('en-US');
}

function scoreChip(score: 0 | 1 | 2 | 3): string {
  const labels = ['Not aligned', 'Weak', 'Partial', 'Aligned'];
  const colors = ['#BF172E', '#e07a1f', '#0d8a3e', '#0d8a3e'];
  return `<span style="display:inline-block;background:${colors[score]};color:#fff;font-family:${MONO};font-size:10px;font-weight:700;padding:3px 8px;letter-spacing:0.08em;text-transform:uppercase;">${labels[score]} ${score}/3</span>`;
}

function pageRowJustin(p: PageAuditResult, i: number, isLamh: boolean): string {
  const score = p.brief?.alignmentScore ?? null;
  const scoreDisplay = isLamh
    ? `<span style="display:inline-block;background:#555;color:#fff;font-family:${MONO};font-size:10px;font-weight:700;padding:3px 8px;letter-spacing:0.08em;text-transform:uppercase;">Surface only</span>`
    : score !== null
      ? scoreChip(score)
      : `<span style="display:inline-block;background:#999;color:#fff;font-family:${MONO};font-size:10px;font-weight:700;padding:3px 8px;letter-spacing:0.08em;text-transform:uppercase;">No brief</span>`;

  const h1Row = p.snapshot?.h1
    ? `<div style="margin:6px 0 0 0;font-size:12px;color:#555;"><b style="color:#333;">Current H1:</b> ${escapeHtml(p.snapshot.h1)}</div>`
    : `<div style="margin:6px 0 0 0;font-size:12px;color:#BF172E;"><b>Current H1:</b> <i>missing or not parseable</i></div>`;

  const ctaRow = p.snapshot?.primaryCtaText
    ? `<div style="margin:2px 0 0 0;font-size:12px;color:#555;"><b style="color:#333;">Current CTA:</b> "${escapeHtml(p.snapshot.primaryCtaText)}"${p.snapshot.primaryCtaHref ? ` &rarr; ${escapeHtml(p.snapshot.primaryCtaHref)}` : ''}</div>`
    : `<div style="margin:2px 0 0 0;font-size:12px;color:#BF172E;"><b>Current CTA:</b> <i>no prominent CTA detected</i></div>`;

  const fetchWarn = !p.fetchOk
    ? `<div style="margin:4px 0 0 0;font-size:12px;color:#BF172E;"><b>Fetch failed:</b> ${escapeHtml(p.fetchError || 'unknown')}</div>`
    : '';

  const briefBlock =
    !isLamh && p.brief
      ? `
<div style="margin-top:10px;padding:12px 14px;background:#fafafa;border-left:3px solid ${p.brief.alignmentScore >= 2 ? '#0d8a3e' : '#F27D24'};">
  <div style="font-size:12px;color:#333;line-height:1.55;"><b>Rationale:</b> ${escapeHtml(p.brief.alignmentRationale)}</div>
  ${
    p.brief.recommendedH1
      ? `<div style="margin-top:6px;font-size:12px;color:#333;"><b>Recommended H1:</b> ${escapeHtml(p.brief.recommendedH1)}</div>`
      : ''
  }
  ${
    p.brief.recommendedPrimaryCta
      ? `<div style="margin-top:4px;font-size:12px;color:#333;"><b>Recommended CTA:</b> "${escapeHtml(p.brief.recommendedPrimaryCta.text)}" &rarr; ${escapeHtml(p.brief.recommendedPrimaryCta.intent)}</div>`
      : ''
  }
  ${
    p.brief.recommendedSupportingElement
      ? `<div style="margin-top:4px;font-size:12px;color:#333;"><b>Supporting:</b> ${escapeHtml(p.brief.recommendedSupportingElement)}</div>`
      : ''
  }
  <div style="margin-top:6px;font-family:${MONO};font-size:10px;color:#888;text-transform:uppercase;letter-spacing:0.1em;">Confidence: ${p.brief.confidence}</div>
</div>`
      : '';

  const lamhNote = isLamh
    ? `<div style="margin-top:8px;padding:10px 12px;background:#fff8f0;border-left:3px solid #F27D24;font-size:12px;color:#333;">LAMH Safety Protocol: surface only. No CTA or H1 changes without explicit Justin approval.</div>`
    : '';

  return `
<tr>
  <td style="padding:14px 10px;border-bottom:1px solid #ececec;" valign="top">
    <div style="display:flex;align-items:baseline;">
      <span style="font-family:${MONO};font-size:11px;color:#999;min-width:22px;">${(i + 1).toString().padStart(2, '0')}</span>
      <span style="font-family:${MONO};font-size:12px;color:#1a1a1a;margin-left:8px;">${escapeHtml(p.path)}</span>
      <span style="margin-left:10px;">${scoreDisplay}</span>
    </div>
    <div style="margin-top:4px;font-family:${MONO};font-size:11px;color:#888;">${formatInt(p.clicks)} clicks &middot; ${formatInt(p.impressions)} impr &middot; pos ${p.position.toFixed(1)}</div>
    ${h1Row}
    ${ctaRow}
    ${fetchWarn}
    ${briefBlock}
    ${lamhNote}
  </td>
</tr>`;
}

export function renderJustinAuditInner(r: TopPerformerAudit): string {
  const pageRows = r.pages.map((p, i) => pageRowJustin(p, i, r.isLamh)).join('');
  const nextActions = r.topNextActions
    .map(
      (a, i) =>
        `<li style="margin:0 0 8px 0;font-size:14px;color:#1a1a1a;line-height:1.55;"><b style="color:#F27D24;font-family:${MONO};font-size:11px;margin-right:6px;">${(i + 1).toString().padStart(2, '0')}</b>${escapeHtml(a)}</li>`,
    )
    .join('');

  const conversationBlock = r.conversationFlag
    ? `
<div style="background:#fff8f0;border:1px solid #F27D24;padding:14px 16px;margin:0 0 22px 0;">
  <div style="font-family:${MONO};font-size:10px;letter-spacing:0.16em;text-transform:uppercase;color:#F27D24;margin-bottom:6px;">// Conversation flag</div>
  <div style="font-size:14px;color:#1a1a1a;line-height:1.55;">${escapeHtml(r.conversationFlag)}</div>
</div>`
    : '';

  const lamhBanner = r.isLamh
    ? `<div style="background:#fff8f0;border-left:4px solid #F27D24;padding:12px 16px;margin:0 0 20px 0;font-size:13px;color:#1a1a1a;"><b>LAMH Safety Protocol active.</b> Top pages are surfaced for monitoring only. 1.14M+ impressions asset — no rewrites without explicit approval.</div>`
    : '';

  return `
<h2 style="margin:0 0 4px 0;font-size:24px;line-height:1.1;color:#1a1a1a;font-family:${DISPLAY};font-weight:900;letter-spacing:-0.025em;text-transform:uppercase;">Top-Performer Conversion Audit</h2>
<p style="margin:0 0 18px 0;color:#555;font-size:14px;">${escapeHtml(r.displayName)} &mdash; last 28 days (${escapeHtml(r.periodStart)} to ${escapeHtml(r.periodEnd)})</p>

<div style="background:#fafafa;border-left:3px solid #F27D24;padding:12px 14px;margin:0 0 22px 0;">
  <div style="font-family:${MONO};font-size:10px;letter-spacing:0.16em;text-transform:uppercase;color:#888;margin-bottom:4px;">Client goal</div>
  <div style="font-size:14px;color:#1a1a1a;line-height:1.5;">${escapeHtml(r.goals.primary_outcome)}</div>
  ${r.goals.conversion_definition ? `<div style="margin-top:4px;font-size:12px;color:#555;"><b>Conversion:</b> ${escapeHtml(r.goals.conversion_definition)}</div>` : ''}
  ${r.goals.target_audience ? `<div style="margin-top:2px;font-size:12px;color:#555;"><b>Audience:</b> ${escapeHtml(r.goals.target_audience)}</div>` : ''}
</div>

${lamhBanner}

<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;margin:0 0 20px 0;">
  <tr>
    <td style="padding:14px;background:#fafafa;border-left:3px solid #F27D24;" valign="top">
      <div style="font-family:${MONO};font-size:10px;color:#888;letter-spacing:0.14em;text-transform:uppercase;margin-bottom:4px;">Top ${r.pages.length} Pages &middot; Clicks</div>
      <div style="font-family:${DISPLAY};font-size:26px;font-weight:900;color:#1a1a1a;">${formatInt(r.totalClicksTop10)}</div>
    </td>
    <td style="width:12px;"></td>
    <td style="padding:14px;background:#fafafa;border-left:3px solid #F27D24;" valign="top">
      <div style="font-family:${MONO};font-size:10px;color:#888;letter-spacing:0.14em;text-transform:uppercase;margin-bottom:4px;">Top ${r.pages.length} Pages &middot; Impressions</div>
      <div style="font-family:${DISPLAY};font-size:26px;font-weight:900;color:#1a1a1a;">${formatInt(r.totalImpressionsTop10)}</div>
    </td>
  </tr>
</table>

<h3 style="margin:0 0 10px 0;font-size:15px;color:#1a1a1a;font-family:${DISPLAY};font-weight:800;text-transform:uppercase;letter-spacing:0.02em;">What we're doing next</h3>
<ol style="margin:0 0 24px 0;padding:0 0 0 4px;list-style:none;">${nextActions}</ol>

${conversationBlock}

<h3 style="margin:0 0 10px 0;font-size:15px;color:#1a1a1a;font-family:${DISPLAY};font-weight:800;text-transform:uppercase;letter-spacing:0.02em;">Top pages (by clicks, last 28 days)</h3>
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;margin:0 0 26px 0;">
  <tbody>${pageRows || '<tr><td style="padding:12px;color:#888;font-size:13px;font-style:italic;">No pages with clicks over the last 28 days.</td></tr>'}</tbody>
</table>

<p style="margin:20px 0 0 0;font-size:11px;color:#aaa;">Window: ${escapeHtml(r.periodStart)} to ${escapeHtml(r.periodEnd)}. Data pulled live from GSC. Rewrite briefs generated by Claude Haiku 4.5 against the client's stated goals.</p>`;
}

export function renderClientCuratedInner(r: TopPerformerAudit, firstName: string): string {
  // Brand-safety curated version — wins-forward, losses reframed as "opening spotted"
  const opportunities = r.pages.filter(p => p.brief && p.brief.alignmentScore <= 2);
  const strong = r.pages.filter(p => p.brief && p.brief.alignmentScore === 3);

  const winsLine =
    strong.length > 0
      ? `We verified that ${strong.length} of your top ${r.pages.length} pages are already set up to convert traffic into ${escapeHtml(r.goals.conversion_definition || r.goals.primary_outcome)}.`
      : `We pulled your top ${r.pages.length} pages by traffic and lined up the conversion upgrades that will turn more of that traffic into ${escapeHtml(r.goals.conversion_definition || r.goals.primary_outcome)}.`;

  const openingsLine =
    opportunities.length > 0
      ? `We spotted ${opportunities.length} high-traffic pages with room to sharpen the call-to-action. Each rewrite is a direct conversion lift on traffic you're already earning.`
      : `Your top pages are lined up well. We're monitoring performance and queuing the next round of content to expand your footprint.`;

  const nextItems = r.topNextActions
    .map(
      (a, i) =>
        `<li style="margin:0 0 8px 0;font-size:14px;color:#1a1a1a;line-height:1.6;"><b style="color:#F27D24;font-family:${MONO};font-size:11px;margin-right:6px;">${(i + 1).toString().padStart(2, '0')}</b>${escapeHtml(a)}</li>`,
    )
    .join('');

  // Client-facing page list — no raw scores, no raw losses
  const pageList = r.pages
    .slice(0, 5)
    .map(
      (p, i) => `
    <tr>
      <td style="padding:8px 6px;border-bottom:1px solid #f0f0f0;font-family:${MONO};font-size:12px;color:#999;width:26px;">${(i + 1).toString().padStart(2, '0')}</td>
      <td style="padding:8px 6px;border-bottom:1px solid #f0f0f0;font-size:12px;color:#1a1a1a;font-family:${MONO};">${escapeHtml(p.path)}</td>
      <td style="padding:8px 6px;border-bottom:1px solid #f0f0f0;font-size:13px;color:#333;text-align:right;">${formatInt(p.clicks)}</td>
    </tr>`,
    )
    .join('');

  return `
<h2 style="margin:0 0 4px 0;font-size:24px;line-height:1.1;color:#1a1a1a;font-family:${DISPLAY};font-weight:900;letter-spacing:-0.025em;text-transform:uppercase;">Conversion audit</h2>
<p style="margin:0 0 22px 0;color:#555;font-size:14px;">${escapeHtml(r.displayName)} &mdash; last 28 days</p>

<p style="margin:0 0 14px 0;font-size:15px;color:#1a1a1a;line-height:1.6;">${escapeHtml(firstName)},</p>

<p style="margin:0 0 14px 0;font-size:15px;color:#1a1a1a;line-height:1.6;">${winsLine}</p>

<p style="margin:0 0 18px 0;font-size:15px;color:#1a1a1a;line-height:1.6;">${openingsLine}</p>

<h3 style="margin:24px 0 10px 0;font-size:15px;color:#1a1a1a;font-family:${DISPLAY};font-weight:800;text-transform:uppercase;letter-spacing:0.02em;">Your top-traffic pages</h3>
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;margin:0 0 22px 0;">
  <thead><tr>
    <th style="padding:8px 6px;border-bottom:2px solid #e5e7eb;text-align:left;font-family:${MONO};font-size:10px;letter-spacing:0.12em;color:#888;text-transform:uppercase;">#</th>
    <th style="padding:8px 6px;border-bottom:2px solid #e5e7eb;text-align:left;font-family:${MONO};font-size:10px;letter-spacing:0.12em;color:#888;text-transform:uppercase;">Page</th>
    <th style="padding:8px 6px;border-bottom:2px solid #e5e7eb;text-align:right;font-family:${MONO};font-size:10px;letter-spacing:0.12em;color:#888;text-transform:uppercase;">Clicks</th>
  </tr></thead>
  <tbody>${pageList}</tbody>
</table>

<h3 style="margin:24px 0 10px 0;font-size:15px;color:#1a1a1a;font-family:${DISPLAY};font-weight:800;text-transform:uppercase;letter-spacing:0.02em;">What we're doing next</h3>
<ol style="margin:0 0 24px 0;padding:0 0 0 4px;list-style:none;">${nextItems}</ol>

<div style="background:#fafafa;border-left:4px solid #F27D24;padding:16px 18px;margin:8px 0 20px 0;">
  <p style="margin:0 0 8px 0;font-family:${DISPLAY};font-size:15px;font-weight:800;color:#1a1a1a;">Want to move faster?</p>
  <p style="margin:0;font-size:13px;color:#555;">Reply to this email and we'll prioritize the rewrites that move the needle on ${escapeHtml(r.goals.primary_outcome)}.</p>
</div>`;
}

// =========================
// Brand Safety gate — every client-facing output must pass
// =========================

export interface BrandSafetyVerdict {
  pass: boolean;
  reasons: string[];
}

export function checkBrandSafety(curatedHtml: string, audit: TopPerformerAudit): BrandSafetyVerdict {
  const reasons: string[] = [];
  const text = curatedHtml.toLowerCase();

  // 1. No raw-negative framing
  const bannedPhrases = [
    'you are not',
    "you're not",
    'you failed',
    'declined by',
    'traffic is wasted',
    'your page is bad',
    'underperforming',
    'losing',
    'loss of',
  ];
  for (const p of bannedPhrases) {
    if (text.includes(p)) reasons.push(`contains banned phrase "${p}"`);
  }

  // 2. Proprietary names never exposed externally
  const proprietary = ['blind spot blitz', 'morning lead hunt', 'answerforge', 'aero-7', 'bsb', '$2,997'];
  for (const p of proprietary) {
    if (text.includes(p)) reasons.push(`contains proprietary name "${p}"`);
  }

  // 3. Must include forward-looking block ("what we're doing next")
  if (!/what we['']re doing next/i.test(curatedHtml)) {
    reasons.push('missing forward-looking "what we are doing next" section');
  }

  // 4. Reframe gate — if 100% of pages are score 0 or 1 AND no explicit reframe, hold
  const briefed = audit.pages.filter(p => p.brief);
  if (briefed.length > 0) {
    const allWeak = briefed.every(p => (p.brief?.alignmentScore ?? 3) <= 1);
    if (allWeak && !/we spotted|opening|opportunity|lift|queue/i.test(curatedHtml)) {
      reasons.push('all pages weak but no reframing language detected — hold for Justin manual review');
    }
  }

  // 5. LAMH must NEVER be sent client-facing (it's internal crown jewel)
  if (audit.isLamh) {
    reasons.push('LAMH is an internal asset — client-facing sends are not allowed');
  }

  return { pass: reasons.length === 0, reasons };
}

export function buildAuditSubject(displayName: string): string {
  return `Top-Performer Conversion Audit — ${displayName}`;
}
