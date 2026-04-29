/**
 * Goal-Aware Recommendation Engine.
 *
 * Input:  a client slug + any data summary (GSC metrics, Reddit activity,
 *         conversion audit results, rank movements, etc.)
 * Output: narrative interpretation + 3 next-actions tied to that client's
 *         stated goals + a flag if Justin should manually review.
 *
 * Every report/digest/alert across the system routes through this so clients
 * never see raw numbers — they see goal-tied intelligence.
 *
 * Uses Haiku 4.5 (default; Sonnet runs into rate limits during batch work)
 * with prompt caching on the static system prompt.
 */

import * as fs from 'fs';
import * as path from 'path';
import { callClaude, extractText } from './anthropic';

export interface Recommendation {
  action: string;
  rationale: string;
  tied_to_goal: string;
}

export interface GoalAwareOutput {
  interpretation: string;          // 2 sentences, no raw numbers dump
  recommendations: Recommendation[]; // exactly 3
  conversation_flag: {
    needed: boolean;
    reason?: string;
  };
  brand_safe: boolean;              // system passed Brand Safety Layer
}

interface ClientGoals {
  primary_outcome?: string;
  secondary_outcomes?: string[];
  target_audience?: string;
  conversion_definition?: string;
  notes?: string;
}

interface ClientProfile {
  business?: { dba?: string; legal_name?: string; industry?: string };
  service_area?: { primary_city?: string };
  goals?: ClientGoals;
  _meta?: { client_slug?: string };
}

const SYSTEM_PROMPT = `You are an internal recommendation engine for The Answer Engine LLC (an AEO agency serving local service businesses). Your job: turn raw performance data into goal-tied, client-safe recommendations that justify a $1k/mo retainer.

NON-NEGOTIABLE RULES:

1. BRAND SAFETY LAYER
   - Never surface a metric as a failure. Frame losses as opportunities the agency is actively solving.
   - No language like "you're underperforming," "this is bad," "this dropped." Instead: "we spotted an opening on X and have deployed Y."
   - If every metric in the input is negative, set conversation_flag.needed = true and keep recommendations reframed-positive.
   - Never expose internal jargon: no "PBN," "link scheme," "cannibalization," "black hat," "authority," "link juice."
   - Use plain outcome language: impressions, clicks, leads, indexed pages, queries ranking.

2. INTERPRETATION LAYER
   - Read the client's goals (primary_outcome, secondary_outcomes, target_audience, conversion_definition).
   - Interpret data THROUGH that lens. Generic AEO wins that don't serve their stated goal are NOT recommendations.
   - If the data shows growth but it's not goal-aligned, say so plainly in the interpretation.

3. OUTPUT FORMAT — return strict JSON only. No markdown, no commentary.
{
  "interpretation": "<2 sentences. Plain-English. No raw numbers. What the data means for their goal.>",
  "recommendations": [
    { "action": "<specific next-step the agency will take>", "rationale": "<why this moves their goal>", "tied_to_goal": "<which goal this serves>" },
    ...exactly 3 items total
  ],
  "conversation_flag": {
    "needed": <boolean: true if Justin should call this client because of strategic ambiguity, decline, or pivot opportunity>,
    "reason": "<if needed=true, 1 sentence why>"
  }
}

4. EACH RECOMMENDATION MUST
   - Be specific (not "create more content" — "publish 2 seller-intent posts targeting 'sell my house fast {city}' queries")
   - Be executable by the agency (not by the client)
   - Tie to ONE stated goal

5. SPECIAL CASES
   - If this is LAMH (lametrohomefinder.com), apply extra caution — never recommend anything that could put its 1.14M impressions at risk.
   - If data is too thin to interpret (e.g. brand new client, <30 days), set conversation_flag.needed = true and recommend baseline-capture actions.`;

function loadClientProfile(slug: string): ClientProfile {
  const filepath = path.join(process.cwd(), 'data', 'client-profiles', `${slug}.json`);
  if (!fs.existsSync(filepath)) {
    throw new Error(`Client profile not found: ${slug}`);
  }
  return JSON.parse(fs.readFileSync(filepath, 'utf-8'));
}

function passesBrandSafety(output: GoalAwareOutput): boolean {
  const banned = /\b(PBN|link scheme|cannibaliz|black hat|link juice|underperform|you're failing|bad CTR|poor ranking)\b/i;
  const blob = JSON.stringify(output);
  if (banned.test(blob)) return false;
  if (!output.recommendations || output.recommendations.length !== 3) return false;
  if (!output.interpretation || output.interpretation.trim().length < 20) return false;
  return true;
}

/**
 * Generate goal-aware recommendations for a client given a data summary.
 * The dataSummary is free-form — GSC metrics, Reddit activity, Top-Performer Audit
 * output, etc. The recommender figures out what it means in context of goals.
 */
export async function buildRecommendations(
  clientSlug: string,
  dataSummary: Record<string, unknown>,
): Promise<GoalAwareOutput> {
  const profile = loadClientProfile(clientSlug);
  const goals = profile.goals;
  if (!goals || !goals.primary_outcome) {
    throw new Error(`Client ${clientSlug} has no goals.primary_outcome — run onboarding goal capture first.`);
  }

  const businessName = profile.business?.dba || profile.business?.legal_name || clientSlug;
  const city = profile.service_area?.primary_city || 'unknown city';
  const isLamh = clientSlug === 'lamh';

  const userPrompt = `CLIENT CONTEXT
- Business: ${businessName}
- City: ${city}
- Industry: ${profile.business?.industry || 'unknown'}
${isLamh ? '- SPECIAL: This is LAMH (crown jewel, 1.14M+ impressions/mo). Apply extra caution.\n' : ''}
GOALS
- Primary outcome: ${goals.primary_outcome}
- Secondary outcomes: ${(goals.secondary_outcomes || []).join('; ') || 'none'}
- Target audience: ${goals.target_audience || 'unspecified'}
- Conversion definition: ${goals.conversion_definition || 'unspecified'}
- Notes: ${goals.notes || 'none'}

DATA SUMMARY (free-form — may include GSC metrics, rank changes, Reddit activity, audit output, etc.)
${JSON.stringify(dataSummary, null, 2)}

Return JSON only — the goal-aware interpretation + 3 recommendations + conversation flag.`;

  const response = await callClaude({
    model: 'claude-haiku-4-5',
    system: [
      { type: 'text', text: SYSTEM_PROMPT, cache_control: { type: 'ephemeral' } },
    ],
    messages: [{ role: 'user', content: userPrompt }],
    maxTokens: 1500,
  });

  const rawText = extractText(response).trim();

  const jsonMatch = rawText.match(/\{[\s\S]*\}/);
  if (!jsonMatch) {
    throw new Error(`Recommender returned non-JSON output: ${rawText.slice(0, 300)}`);
  }

  let parsed: GoalAwareOutput;
  try {
    parsed = JSON.parse(jsonMatch[0]);
  } catch (err) {
    throw new Error(`Recommender returned malformed JSON: ${(err as Error).message}`);
  }

  parsed.brand_safe = passesBrandSafety(parsed);

  return parsed;
}

/**
 * Render the output as HTML inner-content ready to drop into htmlWrap().
 * Used by reports/digests that want to embed recommendations directly.
 */
export function renderRecommendationsHtml(output: GoalAwareOutput): string {
  const DISPLAY = `'Space Grotesk','Inter','Helvetica Neue',Arial,sans-serif`;
  const BRAND = '#F27D24';

  const recItems = output.recommendations.map((r, i) => `
    <li style="margin:0 0 14px 0;padding:12px 14px;background:#fafafa;border-left:3px solid ${BRAND};list-style:none;">
      <div style="font-family:${DISPLAY};font-weight:800;color:#1a1a1a;font-size:14px;margin-bottom:4px;">${i + 1}. ${escapeHtml(r.action)}</div>
      <div style="font-size:13px;color:#555;margin-bottom:4px;">${escapeHtml(r.rationale)}</div>
      <div style="font-size:11px;color:${BRAND};text-transform:uppercase;letter-spacing:0.08em;font-weight:700;">Tied to: ${escapeHtml(r.tied_to_goal)}</div>
    </li>`).join('');

  return `
<h3 style="margin:0 0 10px 0;font-size:15px;color:#1a1a1a;font-family:${DISPLAY};font-weight:800;text-transform:uppercase;letter-spacing:0.02em;">What This Means For You</h3>
<p style="margin:0 0 20px 0;font-size:14px;color:#333;line-height:1.6;">${escapeHtml(output.interpretation)}</p>

<h3 style="margin:0 0 10px 0;font-size:15px;color:#1a1a1a;font-family:${DISPLAY};font-weight:800;text-transform:uppercase;letter-spacing:0.02em;">What We're Doing Next</h3>
<ul style="margin:0 0 20px 0;padding:0;">${recItems}</ul>`;
}

function escapeHtml(s: string): string {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
