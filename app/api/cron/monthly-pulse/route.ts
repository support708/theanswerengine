/**
 * Public AEO Pulse — monthly public blog post for TAE.
 *
 * Runs 1st of each month at 16:00 UTC (hour after the monthly-report cron).
 * Aggregates portfolio-wide AEO signals for the prior completed month —
 * anonymously, never naming specific clients — and writes a DRAFT markdown
 * file at data/public-pulse/pulse-YYYY-MM.md for Justin to review before
 * publishing to theanswerengine.ai/blog. Never auto-publishes.
 *
 * Purpose: acquisition content. Demonstrates that TAE's portfolio is active
 * and producing measurable wins; prospect-facing proof without exposing any
 * individual client's numbers. Links into the Blind Spot / Territory Check
 * tools at the foot for conversion.
 *
 * Auth: Bearer ${CRON_SECRET}.
 */
import { NextRequest, NextResponse } from 'next/server';
import { writeFileSync, existsSync, mkdirSync } from 'fs';
import { join } from 'path';
import { aggregateCohorts } from '@/lib/cohort-aggregator';
import { computeAuthorityIndex } from '@/lib/aeo-authority-index';
import { callClaude, extractText } from '@/lib/anthropic';
import { sendMessage as sendTelegram } from '@/lib/telegram';
import { readFileSync } from 'fs';

export const maxDuration = 300;

function priorMonthYyyymm(now: Date = new Date()): string {
  const d = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth() - 1, 1));
  return `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, '0')}`;
}

function loadClientSlugs(): string[] {
  const mapPath = join(process.cwd(), 'data', 'gsc-client-map.json');
  const map: Record<string, string> = JSON.parse(readFileSync(mapPath, 'utf-8'));
  return Array.from(new Set(
    Object.entries(map)
      .filter(([k]) => !k.startsWith('_'))
      .map(([, v]) => v)
      .filter(v => v && v !== 'CONFIGURE_ME'),
  ));
}

const PULSE_SYSTEM_PROMPT = `You are a concise, factual editorial writer for The Answer Engine LLC's monthly public "AEO Pulse" blog post. You write a 450-650 word summary of the portfolio's aggregate AEO performance for the prior month.

RULES:
- ONLY use facts in the DATA PAYLOAD. Never invent specific metrics.
- Never name individual clients. Use cohort labels ("Real Estate cohort", "our property management client", etc.) and always plural/generic.
- No em-dashes. Use commas or periods.
- Structure:
  (1) 2-sentence opener framing the month's theme
  (2) "What the portfolio saw" — 3-5 bullets of aggregate metrics straight from the payload
  (3) "What's working" — 2-3 observations about which activities drove the wins, phrased as lessons for readers
  (4) "What we're building next" — 2-3 forward looking bullets (no promises, just "we're testing X")
  (5) Closer: 1 paragraph inviting prospects to request a Blind Spot Checker at theanswerengine.ai/tools/blind-spot-checker
- Grade 8-10 reading level.
- No jargon: no "AERO-10", no "link juice", no "cannibalization".
- Output raw markdown with H2 section headers, no frontmatter (caller prepends it).`;

export async function GET(req: NextRequest) { return handle(req); }
export async function POST(req: NextRequest) { return handle(req); }

async function handle(req: NextRequest) {
  const authHeader = req.headers.get('authorization');
  const secret = process.env.CRON_SECRET;
  if (!secret || authHeader !== `Bearer ${secret}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const monthOverride = searchParams.get('month');
  const yyyyMm = monthOverride || priorMonthYyyymm();

  try {
    // Portfolio-wide aggregates (never exposes individual client numbers).
    const cohorts = await aggregateCohorts({ yyyyMm, persist: true });
    const slugs = loadClientSlugs();

    // Totals across portfolio (the kind of number safe to publish anonymized).
    let totalImpressions = 0;
    let totalClicks = 0;
    let totalNewPages = 0;
    let totalUniqueQueries = 0;
    let clientsWithImpressionGrowth = 0;
    let clientsWithRankImprovement = 0;

    for (const slug of slugs) {
      try {
        const result = await computeAuthorityIndex(slug, { persist: false });
        totalImpressions += result.signals.impressions_28d;
        totalClicks += result.signals.clicks_28d;
        totalNewPages += result.signals.new_ranking_pages;
        totalUniqueQueries += result.signals.unique_queries;
        if (result.signals.impressions_28d > result.signals.impressions_prev_28d) clientsWithImpressionGrowth++;
        if (result.breakdown.gsc >= 60) clientsWithRankImprovement++;
      } catch {
        // skip failing client
      }
    }

    const payload = {
      month: yyyyMm,
      portfolio_size: slugs.length,
      aggregate_last_28d: {
        total_impressions: totalImpressions,
        total_clicks: totalClicks,
        total_new_ranking_pages: totalNewPages,
        total_unique_queries_ranking: totalUniqueQueries,
        clients_with_impression_growth: clientsWithImpressionGrowth,
        clients_with_strong_rank_position: clientsWithRankImprovement,
      },
      cohort_medians: cohorts.map(c => ({
        cohort: c.cohortDisplayName,
        size: c.cohortSize,
        suppressed: c.cohortSize < 3,
        median_authority_index: c.cohortSize >= 3 ? c.median.authority_index : null,
        median_impressions_28d: c.cohortSize >= 3 ? c.median.impressions_28d : null,
        median_clicks_28d: c.cohortSize >= 3 ? c.median.clicks_28d : null,
        median_avg_position: c.cohortSize >= 3 ? c.median.avg_position : null,
      })),
    };

    const response = await callClaude({
      model: 'claude-haiku-4-5',
      system: [{ type: 'text', text: PULSE_SYSTEM_PROMPT, cache_control: { type: 'ephemeral' } }],
      messages: [{ role: 'user', content: `DATA PAYLOAD:\n${JSON.stringify(payload, null, 2)}\n\nWrite the Pulse for ${yyyyMm}.` }],
      maxTokens: 2500,
    });
    const markdown = extractText(response).trim().replace(/[\u2014\u2013]/g, ', ');

    const monthLabel = new Date(yyyyMm + '-01').toLocaleString('en-US', { month: 'long', year: 'numeric', timeZone: 'UTC' });
    const title = `AEO Pulse: ${monthLabel}`;
    const frontmatter = `---
title: ${title}
slug: aeo-pulse-${yyyyMm}
date: ${yyyyMm}-01
status: draft
source: monthly-pulse-cron
data_payload:
  portfolio_size: ${payload.portfolio_size}
  total_impressions_28d: ${payload.aggregate_last_28d.total_impressions}
  total_clicks_28d: ${payload.aggregate_last_28d.total_clicks}
  total_new_ranking_pages_28d: ${payload.aggregate_last_28d.total_new_ranking_pages}
---
`;

    const outDir = join(process.cwd(), 'data', 'public-pulse');
    if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });
    const outPath = join(outDir, `pulse-${yyyyMm}.md`);
    writeFileSync(outPath, `${frontmatter}\n# ${title}\n\n${markdown}\n`);

    try {
      await sendTelegram(
        `<b>Monthly AEO Pulse drafted</b>\n` +
        `Month: ${yyyyMm}\n` +
        `Portfolio: ${payload.portfolio_size} clients\n` +
        `Total impressions 28d: ${totalImpressions.toLocaleString()}\n` +
        `Total clicks 28d: ${totalClicks.toLocaleString()}\n` +
        `New ranking pages: ${totalNewPages}\n\n` +
        `Draft: ${outPath}\n` +
        `Review and publish to /blog when ready.`,
      );
    } catch { /* non-blocking */ }

    return NextResponse.json({
      success: true,
      month: yyyyMm,
      draftPath: outPath,
      portfolio: payload,
    });
  } catch (err) {
    const msg = (err as Error).message?.slice(0, 400) || 'unknown error';
    try { await sendTelegram(`<b>Monthly AEO Pulse FAILED</b>\n${msg}`); } catch { /* non-blocking */ }
    return NextResponse.json({ success: false, error: msg }, { status: 500 });
  }
}
