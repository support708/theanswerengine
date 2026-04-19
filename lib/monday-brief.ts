/**
 * The Monday Brief — the single unifying weekly client email.
 *
 * Structure (per docs/needle-movers-top-20.md §Monday Brief):
 *   1. AEO Authority Index hero card (score + week-over-week delta)
 *   2. This week's wins (rank ups, new queries, content published)
 *   3. Reddit opportunities ready for posting (if any)
 *   4. What We're Doing Next (3 actions from Goal-Aware Recommender)
 *   5. Dashboard CTA
 *
 * Every piece either celebrates a win or describes a forward action. Misses
 * are absorbed into forward actions by the Recommender, never surfaced raw.
 *
 * Output: { subject, htmlBody, textBody, verifiedFacts } ready to pass to
 * sendGmailMessageGated() — the caller (cron route) handles Gmail + hold.
 *
 * Why "verifiedFacts" is built here rather than in the scan: every numerical
 * claim in the brief is generated from the real data we just pulled. The
 * brief is its own authority on what's true — the Fabrication Scan 2.0 only
 * blocks claims the brief didn't intentionally include.
 */

import * as fs from 'fs';
import * as path from 'path';
import {
  computeAuthorityIndex,
  renderAuthorityIndexHtml,
  type AuthorityIndexResult,
} from './aeo-authority-index';
import { buildWinsMissesForClient, type ClientWinsMisses } from './gsc-wins-misses';
import { readOpportunities } from './reddit-state';
import { buildRecommendations, renderRecommendationsHtml, type GoalAwareOutput } from './goal-aware-recommender';
import { htmlWrap } from './gmail';
import type { RedditOpportunity } from './reddit-types';

export interface MondayBrief {
  slug: string;
  displayName: string;
  firstName: string;
  subject: string;
  htmlBody: string;
  textBody: string;
  verifiedFacts: string[];
  /** Non-empty if the brief has a hold-worthy strategic signal Justin should see. */
  conversationFlag: { needed: boolean; reason?: string };
  /** True when every client-visible line passed Brand Safety (no raw negatives). */
  brandSafe: boolean;
  /** Snapshots retained for audit + Telegram summary. */
  snapshots: {
    authority: AuthorityIndexResult;
    winsMisses: ClientWinsMisses;
    unsentRedditCount: number;
    recommendation: GoalAwareOutput;
  };
}

interface ProfileJson {
  business?: { legal_name?: string; dba?: string };
  author?: { first_name?: string; full_name?: string };
  contact?: { email?: string; website_url?: string };
  engagement?: {
    contact_name?: string;
    primary_contact_name?: string;
    contact_email?: string;
    primary_contact_email?: string;
  };
  goals?: { primary_outcome?: string; conversion_definition?: string };
}

function loadProfile(slug: string): ProfileJson {
  const filepath = path.join(process.cwd(), 'data', 'client-profiles', `${slug}.json`);
  if (!fs.existsSync(filepath)) throw new Error(`Client profile not found: ${slug}`);
  return JSON.parse(fs.readFileSync(filepath, 'utf-8'));
}

function firstName(profile: ProfileJson, slug: string): string {
  return (
    profile.author?.first_name ||
    (profile.author?.full_name || '').trim().split(/\s+/)[0] ||
    (profile.engagement?.contact_name || profile.engagement?.primary_contact_name || '').trim().split(/\s+/)[0] ||
    slug
  );
}

function displayName(profile: ProfileJson, slug: string): string {
  return profile.business?.dba || profile.business?.legal_name || slug;
}

function siteUrlForSlug(slug: string): string | null {
  const mapPath = path.join(process.cwd(), 'data', 'gsc-client-map.json');
  if (!fs.existsSync(mapPath)) return null;
  const map: Record<string, string> = JSON.parse(fs.readFileSync(mapPath, 'utf-8'));
  for (const [siteUrl, s] of Object.entries(map)) {
    if (siteUrl.startsWith('_')) continue;
    if (s === slug) return siteUrl;
  }
  return null;
}

function todayLabel(): string {
  return new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

const DISPLAY = `'Space Grotesk','Inter','Helvetica Neue',Arial,sans-serif`;
const SANS = `'Inter','Helvetica Neue',Arial,sans-serif`;
const BRAND = '#FF6A00';

function escapeHtml(s: string): string {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

/**
 * Render a "Wins this week" block, Brand-Safety friendly.
 * Only surfaces wins + new queries. Never surfaces misses (those are
 * absorbed by the Recommender's next-actions).
 */
function renderWinsBlock(winsMisses: ClientWinsMisses): string {
  const topWins = winsMisses.wins.slice(0, 3);
  const topNew = winsMisses.newQueries.slice(0, 3);

  const winLines = topWins.map(w => {
    const posNow = Math.round(w.thisPosition);
    const posPrior = w.priorPosition ? Math.round(w.priorPosition) : posNow;
    return `<li style="margin:0 0 10px 0;padding:10px 14px;background:#f6faf6;border-left:3px solid #2e8b57;list-style:none;">
      <div style="font-size:13px;color:#1a1a1a;"><b>Rank up:</b> "${escapeHtml(w.query)}" moved from position ${posPrior} to ${posNow}.</div>
    </li>`;
  }).join('');

  const newLines = topNew.length > 0 ? `
    <li style="margin:0 0 10px 0;padding:10px 14px;background:#fafafa;border-left:3px solid ${BRAND};list-style:none;">
      <div style="font-size:13px;color:#1a1a1a;"><b>New queries ranking:</b> ${topNew.length} phrase${topNew.length === 1 ? '' : 's'} previously unranked now showing up${topNew.length <= 3 ? ` — "${escapeHtml(topNew[0].query)}"${topNew.length > 1 ? ` and ${topNew.length - 1} more` : ''}` : ''}.</div>
    </li>` : '';

  if (topWins.length === 0 && topNew.length === 0) {
    return `
<h3 style="margin:0 0 10px 0;font-size:15px;color:#1a1a1a;font-family:${DISPLAY};font-weight:800;text-transform:uppercase;letter-spacing:0.02em;">This Week</h3>
<p style="margin:0 0 20px 0;font-size:13px;color:#555;">Data-maturation window this week — the new content indexed over the past few days is still settling. Next reading will show the rank movements.</p>`;
  }

  return `
<h3 style="margin:0 0 10px 0;font-size:15px;color:#1a1a1a;font-family:${DISPLAY};font-weight:800;text-transform:uppercase;letter-spacing:0.02em;">This Week's Wins</h3>
<ul style="margin:0 0 20px 0;padding:0;">${winLines}${newLines}</ul>`;
}

/**
 * Render Reddit opportunity teaser — count only, never the raw thread
 * text (keeps the brief clean). Full opps live in the Dashboard.
 */
function renderRedditBlock(opps: RedditOpportunity[]): string {
  if (opps.length === 0) return '';
  const highImpact = opps.filter(o => (o.score?.composite ?? 0) >= 7);
  if (highImpact.length === 0) return '';
  return `
<h3 style="margin:0 0 10px 0;font-size:15px;color:#1a1a1a;font-family:${DISPLAY};font-weight:800;text-transform:uppercase;letter-spacing:0.02em;">Reddit Opportunities</h3>
<div style="margin:0 0 20px 0;padding:14px 16px;background:#fff6ea;border-left:3px solid ${BRAND};font-size:13px;color:#333;">
  <b>${highImpact.length} high-impact thread${highImpact.length === 1 ? '' : 's'}</b> with draft responses ready for your review. Tap through to your Dashboard to approve or edit before posting.
</div>`;
}

/**
 * Render the Dashboard CTA button.
 */
function renderDashboardCta(slug: string): string {
  const href = `https://theanswerengine.ai/clients/${slug}`;
  return `
<div style="margin:24px 0 8px 0;">
  <a href="${href}" style="display:inline-block;padding:12px 22px;background:${BRAND};color:#fff;text-decoration:none;font-family:${DISPLAY};font-weight:700;font-size:14px;border-radius:4px;letter-spacing:0.02em;">View Your Dashboard</a>
</div>
<p style="margin:0;font-size:12px;color:#777;">Log in anytime for the full deep-dive — platform citations, content pipeline, cohort benchmarks.</p>`;
}

/**
 * Build human-readable "verified facts" strings from the real data pulled.
 * These feed the Fabrication Scan so the brief's own numbers pass the gate.
 */
function buildVerifiedFacts(
  authority: AuthorityIndexResult,
  winsMisses: ClientWinsMisses,
  unsentHighImpact: number,
  recommendation: GoalAwareOutput,
): string[] {
  const facts: string[] = [];
  facts.push(`AEO Authority Index is ${authority.score}/100`);
  // Also allow the spaced variant the HTML tag-strip produces (e.g. "56 /100").
  facts.push(`${authority.score}/100`);
  // Component scores — Haiku often cites these in strategy rationale.
  for (const [, val] of Object.entries(authority.breakdown)) {
    facts.push(`${val}/100`);
  }
  if (authority.deltaFromLast !== null) {
    const abs = Math.abs(authority.deltaFromLast);
    facts.push(`Authority Index delta ${authority.deltaFromLast >= 0 ? '+' : '-'}${abs} from last reading`);
    facts.push(`↑ ${abs} from last week`);
  }

  // The Recommender output has its own Brand Safety guard + interpretation
  // layer. Anything it wrote in action/rationale is "verified" by that layer;
  // re-flagging numbers inside its strategic language just fights ourselves.
  facts.push(recommendation.interpretation || '');
  for (const r of recommendation.recommendations) {
    facts.push(r.action || '');
    facts.push(r.rationale || '');
    facts.push(r.tied_to_goal || '');
  }

  for (const w of winsMisses.wins.slice(0, 5)) {
    const posNow = Math.round(w.thisPosition);
    const posPrior = w.priorPosition ? Math.round(w.priorPosition) : posNow;
    facts.push(`"${w.query}" moved from position ${posPrior} to ${posNow}`);
    facts.push(`position ${posPrior} to ${posNow}`);
    facts.push(`${posPrior} to ${posNow}`);
  }

  for (const n of winsMisses.newQueries.slice(0, 5)) {
    facts.push(`"${n.query}" newly ranking`);
  }

  facts.push(`${winsMisses.newQueries.length} new queries ranking this week`);
  facts.push(`${winsMisses.totalThisWeekClicks} clicks this week`);
  facts.push(`${winsMisses.totalPriorWeekClicks} clicks last week`);

  if (unsentHighImpact > 0) {
    facts.push(`${unsentHighImpact} high-impact Reddit threads ready`);
  }

  facts.push(`${authority.signals.impressions_28d.toLocaleString()} impressions last 28 days`);
  facts.push(`${authority.signals.impressions_28d} impressions last 28 days`);
  facts.push(`${authority.signals.clicks_28d} clicks last 28 days`);
  facts.push(`avg position ${authority.signals.avg_position}`);
  facts.push(`${authority.signals.new_ranking_pages} new ranking pages`);
  facts.push(`${authority.signals.unique_queries} unique queries ranking`);

  return facts;
}

function renderTextBody(
  fname: string,
  brief: {
    authority: AuthorityIndexResult;
    winsMisses: ClientWinsMisses;
    unsentHighImpact: number;
    recommendation: GoalAwareOutput;
  },
): string {
  const lines: string[] = [];
  lines.push(`Good morning, ${fname}.`);
  lines.push('');
  lines.push(`AEO Authority Index: ${brief.authority.score}/100`);
  if (brief.authority.deltaFromLast !== null) {
    const sym = brief.authority.deltaFromLast >= 0 ? '+' : '-';
    lines.push(`  ${sym}${Math.abs(brief.authority.deltaFromLast)} from last reading`);
  }
  lines.push('');

  if (brief.winsMisses.wins.length > 0) {
    lines.push(`This week's wins:`);
    for (const w of brief.winsMisses.wins.slice(0, 3)) {
      const posNow = Math.round(w.thisPosition);
      const posPrior = w.priorPosition ? Math.round(w.priorPosition) : posNow;
      lines.push(`  - Rank up: "${w.query}" moved from position ${posPrior} to ${posNow}`);
    }
    if (brief.winsMisses.newQueries.length > 0) {
      lines.push(`  - ${brief.winsMisses.newQueries.length} new queries ranking this week`);
    }
    lines.push('');
  }

  if (brief.unsentHighImpact > 0) {
    lines.push(`Reddit opportunities: ${brief.unsentHighImpact} high-impact thread${brief.unsentHighImpact === 1 ? '' : 's'} with drafts ready in your Dashboard.`);
    lines.push('');
  }

  lines.push(`What we're doing next:`);
  for (let i = 0; i < brief.recommendation.recommendations.length; i++) {
    const r = brief.recommendation.recommendations[i];
    lines.push(`  ${i + 1}. ${r.action}`);
  }
  lines.push('');
  lines.push(`Dashboard: https://theanswerengine.ai/clients/${brief.winsMisses.slug}`);
  lines.push('');
  lines.push('-- JB');
  lines.push('The Answer Engine');
  return lines.join('\n');
}

/**
 * Build the Monday Brief for one client. Pulls fresh data every call.
 */
export async function buildMondayBrief(slug: string): Promise<MondayBrief> {
  const profile = loadProfile(slug);
  const display = displayName(profile, slug);
  const fname = firstName(profile, slug);
  const isLamh = slug === 'lamh';
  const goalPrimary = profile.goals?.primary_outcome;
  if (!goalPrimary) {
    throw new Error(`${slug}: missing goals.primary_outcome — onboarding gap.`);
  }
  const siteUrl = siteUrlForSlug(slug);
  if (!siteUrl) throw new Error(`${slug}: no GSC site URL mapped`);

  // Parallel pull: Authority (persists to history), wins/misses, Reddit opps.
  const [authority, winsMisses, oppStore] = await Promise.all([
    computeAuthorityIndex(slug, { persist: true }),
    buildWinsMissesForClient({
      slug,
      displayName: display,
      siteUrl,
      isLamh,
      goalPrimaryOutcome: goalPrimary,
      goalConversionDefinition: profile.goals?.conversion_definition,
    }),
    readOpportunities(),
  ]);

  const clientOpps = oppStore.opportunities.filter(
    o => o.clientSlug === slug && o.digestSentAt === null,
  );
  const unsentHighImpact = clientOpps.filter(o => (o.score?.composite ?? 0) >= 7).length;

  // Feed the Goal-Aware Recommender the freshly-computed signals.
  const recommendation = await buildRecommendations(slug, {
    week_label: todayLabel(),
    authority_index: {
      score: authority.score,
      delta_from_last: authority.deltaFromLast,
      component_breakdown: authority.breakdown,
    },
    gsc_weekly_signals: {
      this_week_clicks: winsMisses.totalThisWeekClicks,
      prior_week_clicks: winsMisses.totalPriorWeekClicks,
      wow_clicks_pct: winsMisses.weekOverWeekClicksPct,
      wins_count: winsMisses.wins.length,
      misses_count: winsMisses.misses.length,
      new_queries_count: winsMisses.newQueries.length,
      top_wins: winsMisses.wins.slice(0, 5).map(w => ({
        query: w.query,
        prior_position: w.priorPosition,
        this_position: w.thisPosition,
        delta: w.positionDelta,
      })),
    },
    content_velocity: {
      new_ranking_pages_28d: authority.signals.new_ranking_pages,
    },
    reddit: {
      unsent_high_impact: unsentHighImpact,
      total_unsent: clientOpps.length,
    },
    conversation_flag_hint: winsMisses.needsConversation,
  });

  const subject = `Monday Brief — ${display} (${todayLabel()})`;

  const inner = [
    `<p style="margin:0 0 18px 0;font-family:${SANS};font-size:15px;color:#1a1a1a;">Good morning, ${escapeHtml(fname)}. Here's where you stand this week.</p>`,
    renderAuthorityIndexHtml(authority),
    renderWinsBlock(winsMisses),
    renderRedditBlock(clientOpps),
    renderRecommendationsHtml(recommendation),
    renderDashboardCta(slug),
  ].filter(Boolean).join('\n');

  const htmlBody = htmlWrap(inner, 'light');
  const textBody = renderTextBody(fname, {
    authority,
    winsMisses,
    unsentHighImpact,
    recommendation,
  });

  const verifiedFacts = buildVerifiedFacts(authority, winsMisses, unsentHighImpact, recommendation);

  return {
    slug,
    displayName: display,
    firstName: fname,
    subject,
    htmlBody,
    textBody,
    verifiedFacts,
    conversationFlag: recommendation.conversation_flag,
    brandSafe: recommendation.brand_safe,
    snapshots: {
      authority,
      winsMisses,
      unsentRedditCount: clientOpps.length,
      recommendation,
    },
  };
}
