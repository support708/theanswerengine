#!/usr/bin/env tsx
/**
 * Case Study Generator — produces a TAE case study for one client, suitable
 * for publication on theanswerengine.ai/case-studies as agency proof.
 *
 * Pulls everything:
 *   - Authority Index history (baseline Day 0 → current)
 *   - GSC 28d current metrics vs earliest-90d window
 *   - Reddit opportunity volume over the engagement
 *   - Blog posts published for the client (if TAE-hosted)
 *   - Client goals for narrative framing
 *
 * Hands the data payload to Haiku 4.5 to write the narrative. Output is
 * DRAFT markdown at data/case-studies/<slug>-<yyyyMmDd>.md for Justin to
 * review before publishing. Never auto-publishes.
 *
 * Usage:
 *   npx tsx scripts/generate-case-study.ts lovery-re
 */

import * as fs from 'fs';
import * as path from 'path';

const envPath = path.join(process.cwd(), '.env.local');
if (fs.existsSync(envPath)) {
  for (const line of fs.readFileSync(envPath, 'utf-8').split('\n')) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*?)\s*$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^"(.*)"$/, '$1');
  }
}

import { computeAuthorityIndex, loadAuthorityIndexHistory } from '../lib/aeo-authority-index';
import { readOpportunities } from '../lib/reddit-state';
import { callClaude, extractText } from '../lib/anthropic';

interface ClientProfile {
  business?: { dba?: string; legal_name?: string; industry?: string; founded_year?: string };
  service_area?: { primary_city?: string; primary_state?: string };
  author?: { full_name?: string; first_name?: string; job_title?: string };
  goals?: { primary_outcome?: string; target_audience?: string };
}

function loadProfile(slug: string): ClientProfile {
  const fp = path.join(process.cwd(), 'data', 'client-profiles', `${slug}.json`);
  if (!fs.existsSync(fp)) throw new Error(`Profile not found: ${slug}`);
  return JSON.parse(fs.readFileSync(fp, 'utf-8'));
}

const CASE_STUDY_SYSTEM_PROMPT = `You are a concise, factual case-study writer for The Answer Engine LLC, an AEO (Answer Engine Optimization) agency. You write short narrative case studies based on real performance data the agency provides. Style is direct and quantified — no marketing fluff, no superlatives, no invented details.

RULES:
- Only use facts explicitly listed in the DATA PAYLOAD. Never invent metrics, quotes, dates, or outcomes.
- Do not use em-dashes. Use commas or periods.
- Write 300-450 words total.
- Structure: (1) 2-sentence setup, (2) "What we did" paragraph summarizing agency work from the data, (3) "Results" section with 3-5 bullet data points verbatim from the payload, (4) 1-paragraph forward-looking closer.
- Output raw markdown. No meta-commentary, no title (caller adds title).
- If a metric is zero or weak, say so honestly. Brand Safety does not apply — this is a TAE-owned surface, and honesty earns trust with prospects.
- Client-facing brand safety DOES apply to the client being profiled: never attribute losses to them, always to agency-in-progress work.`;

async function main() {
  const slug = process.argv[2];
  if (!slug) {
    console.error('Usage: npx tsx scripts/generate-case-study.ts <client-slug>');
    process.exit(1);
  }

  const profile = loadProfile(slug);
  const displayName = profile.business?.dba || profile.business?.legal_name || slug;
  const authorName = profile.author?.full_name || 'the team';
  const city = profile.service_area?.primary_city || 'their service area';
  const industry = profile.business?.industry || 'service';
  const goal = profile.goals?.primary_outcome || 'growth';

  console.log(`=== Case Study — ${displayName} ===\n`);

  // Current Authority Index + baseline from history.
  const current = await computeAuthorityIndex(slug, { persist: false });
  const history = loadAuthorityIndexHistory(slug);
  const baseline = history.length > 0 ? history[0] : null;

  // Reddit opportunity totals.
  const oppStore = await readOpportunities();
  const clientOpps = oppStore.opportunities.filter(o => o.clientSlug === slug);
  const oppSent = clientOpps.filter(o => o.digestSentAt !== null).length;
  const oppHighImpact = clientOpps.filter(o => (o.score?.composite ?? 0) >= 7).length;

  const payload = {
    client: { displayName, authorName, city, industry, primaryGoal: goal },
    authority_index: {
      current: current.score,
      baseline: baseline?.score ?? null,
      delta: baseline ? current.score - baseline.score : null,
      component_breakdown_current: current.breakdown,
    },
    gsc_current: current.signals,
    gsc_baseline_signals: baseline ? baseline.signals : null,
    reddit: {
      total_opportunities_tracked: clientOpps.length,
      digests_sent: oppSent,
      high_impact_count: oppHighImpact,
    },
    engagement_days: baseline
      ? Math.round((Date.now() - new Date(baseline.timestamp).getTime()) / (1000 * 60 * 60 * 24))
      : 0,
  };

  console.log('Data payload:');
  console.log(JSON.stringify(payload, null, 2));
  console.log('');

  const prompt = `Write the case study for ${displayName}.

DATA PAYLOAD:
${JSON.stringify(payload, null, 2)}

Output markdown only.`;

  const response = await callClaude({
    model: 'claude-haiku-4-5',
    system: [{ type: 'text', text: CASE_STUDY_SYSTEM_PROMPT, cache_control: { type: 'ephemeral' } }],
    messages: [{ role: 'user', content: prompt }],
    maxTokens: 1500,
  });

  const markdown = extractText(response).trim().replace(/[\u2014\u2013]/g, ', ');

  const outDir = path.join(process.cwd(), 'data', 'case-studies');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
  const stamp = new Date().toISOString().slice(0, 10);
  const outPath = path.join(outDir, `${slug}-${stamp}.md`);

  const title = `${displayName}: ${payload.authority_index.baseline !== null ? 'From ' + payload.authority_index.baseline + '/100 to ' + payload.authority_index.current + '/100' : payload.authority_index.current + '/100 AEO Authority'}`;

  const frontmatter = `---
client_slug: ${slug}
client_display: ${displayName}
industry: ${industry}
generated: ${new Date().toISOString()}
authority_current: ${payload.authority_index.current}
authority_baseline: ${payload.authority_index.baseline ?? 'n/a'}
engagement_days: ${payload.engagement_days}
status: draft
---
`;

  fs.writeFileSync(outPath, `${frontmatter}\n# ${title}\n\n${markdown}\n`);
  console.log(`Draft written: ${outPath}`);
  console.log(`\n--- Preview ---\n${markdown.slice(0, 600)}${markdown.length > 600 ? '\n...[truncated]' : ''}`);
}

main().catch(err => {
  console.error('Case study generation failed:', err);
  process.exit(1);
});
