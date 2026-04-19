/**
 * Competitor Battlecard — acquisition-stage artifact stitched into the
 * Blind Spot report for prospects who name a specific competitor.
 *
 * Produces:
 *   - A side-by-side head-to-head snapshot (HTML fragment)
 *   - 3 tactical flip-moves tied to gaps the prospect can close
 *   - A "what they haven't built yet" opportunity list
 *
 * Data sources:
 *   - Prospect's name + city + vertical (from lead.ts)
 *   - Prospect's existing Research output (citations, reviews, differentiator)
 *   - Competitor name (from lead.competitorName)
 *   - Claude-generated tactical analysis (Haiku 4.5, with caching)
 *
 * LAMH note: battlecards only render for prospect leads (acquisition). Never
 * generated for existing client portfolios — that would cross Brand Safety.
 */

import { callClaude, extractText } from './anthropic';

export interface BattlecardInput {
  prospectName: string;
  prospectCity: string;
  prospectState?: string;
  industry: string;
  competitorName: string;
  prospectAiCitations?: number;          // from AERO-10 research
  prospectReviewCount?: number;
  prospectReviewRating?: number;
  prospectWebsite?: string;
  prospectResearchNotes?: string;        // one-paragraph summary of what we know
  competitorWebsite?: string;
  competitorKnownCitations?: number;     // if research uncovered it
}

export interface BattlecardOutput {
  headline: string;                      // 1-line framing
  snapshot: {
    prospect: { name: string; aiCitations: number | null; reviews: string };
    competitor: { name: string; aiCitationsLabel: string; reviewsLabel: string };
  };
  whereTheyWin: string[];                // 3 items max
  flipMoves: { title: string; action: string }[];  // 3 items
  opportunityGaps: string[];             // 3 items the competitor hasn't built
  rawLlmOutput: string;
}

const BATTLECARD_SYSTEM_PROMPT = `You are a competitive intelligence analyst for The Answer Engine LLC, an AEO (Answer Engine Optimization) agency. You produce short, tactical battlecards for prospects who've named a specific competitor. The battlecard ships inside our Blind Spot report.

RULES:
- Only use facts in the INPUT PAYLOAD or widely known public facts about the industry. Never invent specific competitor metrics.
- No em-dashes. Use commas.
- No proprietary agency jargon: no "AERO-10", no "BSB", no "Blind Spot Blitz", no "link juice", no "cannibalization".
- Use plain outcome language: citations, rankings, reviews, leads.
- Frame gaps as actionable ("here's the move") not defeatist ("they're winning").
- Output strict JSON only in this exact schema:
{
  "headline": "<one sentence framing the gap>",
  "whereTheyWin": ["<bullet>", "<bullet>", "<bullet>"],
  "flipMoves": [
    { "title": "<short verb-led title>", "action": "<what the prospect + agency will do>" },
    { "title": "...", "action": "..." },
    { "title": "...", "action": "..." }
  ],
  "opportunityGaps": ["<gap the competitor has NOT filled>", "<gap>", "<gap>"]
}
No markdown, no commentary outside the JSON.`;

function reviewsLabel(count?: number, rating?: number): string {
  if (count == null && rating == null) return 'unknown';
  if (count == null) return `${rating}★`;
  if (rating == null) return `${count} reviews`;
  return `${count} reviews · ${rating}★`;
}

export async function buildBattlecard(input: BattlecardInput): Promise<BattlecardOutput> {
  const prompt = `INPUT PAYLOAD:
${JSON.stringify(input, null, 2)}

Return the battlecard JSON.`;

  const response = await callClaude({
    model: 'claude-haiku-4-5',
    system: [{ type: 'text', text: BATTLECARD_SYSTEM_PROMPT, cache_control: { type: 'ephemeral' } }],
    messages: [{ role: 'user', content: prompt }],
    maxTokens: 1500,
  });

  const raw = extractText(response).trim();
  const jsonMatch = raw.match(/\{[\s\S]*\}/);
  if (!jsonMatch) throw new Error(`Battlecard returned non-JSON: ${raw.slice(0, 200)}`);
  const parsed = JSON.parse(jsonMatch[0]);

  return {
    headline: String(parsed.headline || '').trim(),
    snapshot: {
      prospect: {
        name: input.prospectName,
        aiCitations: typeof input.prospectAiCitations === 'number' ? input.prospectAiCitations : null,
        reviews: reviewsLabel(input.prospectReviewCount, input.prospectReviewRating),
      },
      competitor: {
        name: input.competitorName,
        aiCitationsLabel: typeof input.competitorKnownCitations === 'number'
          ? String(input.competitorKnownCitations)
          : 'cited on multiple platforms',
        reviewsLabel: 'public review presence',
      },
    },
    whereTheyWin: Array.isArray(parsed.whereTheyWin) ? parsed.whereTheyWin.slice(0, 3).map(String) : [],
    flipMoves: Array.isArray(parsed.flipMoves) ? parsed.flipMoves.slice(0, 3).map((m: { title?: string; action?: string }) => ({
      title: String(m.title || '').trim(),
      action: String(m.action || '').trim(),
    })) : [],
    opportunityGaps: Array.isArray(parsed.opportunityGaps) ? parsed.opportunityGaps.slice(0, 3).map(String) : [],
    rawLlmOutput: raw,
  };
}

const DISPLAY = `'Space Grotesk','Inter','Helvetica Neue',Arial,sans-serif`;
const MONO = `'JetBrains Mono',Consolas,Menlo,'Courier New',monospace`;
const BRAND = '#FF6A00';

function escapeHtml(s: string): string {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

/**
 * Render the battlecard as inline HTML ready to embed into a Blind Spot
 * report. Caller wraps with htmlWrap if sending as email.
 */
export function renderBattlecardHtml(out: BattlecardOutput): string {
  const prospectCitations = out.snapshot.prospect.aiCitations === null
    ? 'no verified citations yet'
    : `${out.snapshot.prospect.aiCitations} verified citations`;

  const winLines = out.whereTheyWin.map(w => `
    <li style="margin:0 0 8px 0;padding:8px 12px;background:#fafafa;border-left:3px solid ${BRAND};list-style:none;font-size:13px;color:#333;">${escapeHtml(w)}</li>`).join('');

  const flipLines = out.flipMoves.map((f, i) => `
    <li style="margin:0 0 12px 0;padding:12px 14px;background:#f6faf6;border-left:3px solid #2e8b57;list-style:none;">
      <div style="font-family:${DISPLAY};font-weight:800;color:#1a1a1a;font-size:14px;margin-bottom:4px;">${i + 1}. ${escapeHtml(f.title)}</div>
      <div style="font-size:13px;color:#555;">${escapeHtml(f.action)}</div>
    </li>`).join('');

  const gapLines = out.opportunityGaps.map(g => `
    <li style="margin:0 0 6px 0;padding:6px 10px;background:#fff6ea;list-style:none;font-size:13px;color:#333;">${escapeHtml(g)}</li>`).join('');

  return `
<h2 style="margin:0 0 6px 0;font-family:${DISPLAY};font-size:20px;font-weight:900;color:#1a1a1a;letter-spacing:-0.02em;text-transform:uppercase;">Competitor Battlecard</h2>
<p style="margin:0 0 18px 0;font-size:14px;color:#555;">${escapeHtml(out.headline)}</p>

<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;margin:0 0 22px 0;">
  <tr>
    <td valign="top" style="padding:14px;background:#fafafa;border-left:3px solid ${BRAND};width:50%;">
      <div style="font-family:${MONO};font-size:10px;color:#888;letter-spacing:0.12em;text-transform:uppercase;margin-bottom:6px;">You</div>
      <div style="font-family:${DISPLAY};font-size:16px;font-weight:800;color:#1a1a1a;margin-bottom:6px;">${escapeHtml(out.snapshot.prospect.name)}</div>
      <div style="font-size:12px;color:#555;line-height:1.5;">${prospectCitations} · ${escapeHtml(out.snapshot.prospect.reviews)}</div>
    </td>
    <td style="width:12px;"></td>
    <td valign="top" style="padding:14px;background:#fafafa;border-left:3px solid #bbb;width:50%;">
      <div style="font-family:${MONO};font-size:10px;color:#888;letter-spacing:0.12em;text-transform:uppercase;margin-bottom:6px;">Competitor</div>
      <div style="font-family:${DISPLAY};font-size:16px;font-weight:800;color:#1a1a1a;margin-bottom:6px;">${escapeHtml(out.snapshot.competitor.name)}</div>
      <div style="font-size:12px;color:#555;line-height:1.5;">${escapeHtml(out.snapshot.competitor.aiCitationsLabel)} · ${escapeHtml(out.snapshot.competitor.reviewsLabel)}</div>
    </td>
  </tr>
</table>

<h3 style="margin:0 0 10px 0;font-size:14px;color:#1a1a1a;font-family:${DISPLAY};font-weight:800;text-transform:uppercase;letter-spacing:0.02em;">Where They Show Up Today</h3>
<ul style="margin:0 0 20px 0;padding:0;">${winLines}</ul>

<h3 style="margin:0 0 10px 0;font-size:14px;color:#1a1a1a;font-family:${DISPLAY};font-weight:800;text-transform:uppercase;letter-spacing:0.02em;">Three Flip Moves</h3>
<ol style="margin:0 0 20px 0;padding:0;list-style:none;">${flipLines}</ol>

<h3 style="margin:0 0 10px 0;font-size:14px;color:#1a1a1a;font-family:${DISPLAY};font-weight:800;text-transform:uppercase;letter-spacing:0.02em;">Gaps They Haven't Filled</h3>
<ul style="margin:0 0 20px 0;padding:0;">${gapLines}</ul>`;
}

/**
 * Plain-text fallback for email clients that strip HTML.
 */
export function renderBattlecardPlain(out: BattlecardOutput): string {
  const lines: string[] = [];
  lines.push(`COMPETITOR BATTLECARD`);
  lines.push(out.headline);
  lines.push('');
  lines.push(`YOU: ${out.snapshot.prospect.name} — ${out.snapshot.prospect.aiCitations ?? 'no verified'} citations, ${out.snapshot.prospect.reviews}`);
  lines.push(`COMPETITOR: ${out.snapshot.competitor.name} — ${out.snapshot.competitor.aiCitationsLabel}`);
  lines.push('');
  lines.push('WHERE THEY SHOW UP:');
  for (const w of out.whereTheyWin) lines.push(`  - ${w}`);
  lines.push('');
  lines.push('THREE FLIP MOVES:');
  for (let i = 0; i < out.flipMoves.length; i++) {
    lines.push(`  ${i + 1}. ${out.flipMoves[i].title}`);
    lines.push(`     ${out.flipMoves[i].action}`);
  }
  lines.push('');
  lines.push('GAPS THEY HAVEN\'T FILLED:');
  for (const g of out.opportunityGaps) lines.push(`  - ${g}`);
  return lines.join('\n');
}
