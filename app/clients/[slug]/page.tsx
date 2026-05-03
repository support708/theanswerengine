/**
 * Client Dashboard — pull-based deep-dive for one client.
 *
 * Surfaces the same data the Monday Brief email summarizes, but in-depth:
 *   - AEO Authority Index hero + sparkline of history
 *   - This Week's Wins (rank ups + new queries)
 *   - Reddit opportunities queue (unsent, high-impact)
 *   - Platform Citations tabs (Perplexity / Claude / Google AI / ChatGPT)
 *     — stubs until #10 tracker ships
 *   - Goal-Aware Recommender output ("What We're Doing Next")
 *   - Content velocity (new ranking pages in last 28d)
 *
 * v1 scope: admin-auth gated (same as /admin). Per-client NextAuth accounts
 * is a follow-up — for now, Justin opens the dashboard on behalf of clients
 * via preview links or screenshares.
 *
 * This is a Server Component. Data fetching happens at render. No client-
 * side hooks, no useEffect, no event handlers — Brand Safety means the
 * server curates what the client sees before it reaches the browser.
 */

import { notFound, redirect } from 'next/navigation';
import { auth } from '@/auth';
import { readFileSync, existsSync } from 'fs';
import { join } from 'path';
import { computeAuthorityIndex, loadAuthorityIndexHistory, type AuthorityIndexResult, type AuthorityIndexEntry } from '@/lib/aeo-authority-index';
import { buildWinsMissesForClient, type ClientWinsMisses } from '@/lib/gsc-wins-misses';
import { readOpportunities } from '@/lib/reddit-state';
import { buildRecommendations, type GoalAwareOutput } from '@/lib/goal-aware-recommender';
import type { RedditOpportunity } from '@/lib/reddit-types';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

interface ProfileJson {
  business?: { legal_name?: string; dba?: string };
  author?: { first_name?: string; full_name?: string };
  contact?: { website_url?: string };
  goals?: { primary_outcome?: string; conversion_definition?: string };
}

function loadProfile(slug: string): ProfileJson | null {
  const filepath = join(process.cwd(), 'data', 'client-profiles', `${slug}.json`);
  if (!existsSync(filepath)) return null;
  return JSON.parse(readFileSync(filepath, 'utf-8')) as ProfileJson;
}

function siteUrlForSlug(slug: string): string | null {
  const mapPath = join(process.cwd(), 'data', 'gsc-client-map.json');
  if (!existsSync(mapPath)) return null;
  const map: Record<string, string> = JSON.parse(readFileSync(mapPath, 'utf-8'));
  for (const [siteUrl, s] of Object.entries(map)) {
    if (siteUrl.startsWith('_')) continue;
    if (s === slug) return siteUrl;
  }
  return null;
}

interface DashboardData {
  profile: ProfileJson;
  authority: AuthorityIndexResult;
  history: AuthorityIndexEntry[];
  winsMisses: ClientWinsMisses;
  opps: RedditOpportunity[];
  recommendation: GoalAwareOutput;
}

async function loadDashboard(slug: string): Promise<DashboardData | null> {
  const profile = loadProfile(slug);
  if (!profile) return null;
  const siteUrl = siteUrlForSlug(slug);
  if (!siteUrl) return null;

  const displayName = profile.business?.dba || profile.business?.legal_name || slug;
  const goalPrimary = profile.goals?.primary_outcome || 'client goal not set';

  const [authority, winsMisses, oppStore] = await Promise.all([
    computeAuthorityIndex(slug, { persist: false }),
    buildWinsMissesForClient({
      slug,
      displayName,
      siteUrl,
      isLamh: slug === 'lamh',
      goalPrimaryOutcome: goalPrimary,
      goalConversionDefinition: profile.goals?.conversion_definition,
    }),
    readOpportunities(),
  ]);

  const history = loadAuthorityIndexHistory(slug);
  const opps = oppStore.opportunities
    .filter(o => o.clientSlug === slug && o.digestSentAt === null)
    .sort((a, b) => (b.score?.composite || 0) - (a.score?.composite || 0));

  const recommendation = await buildRecommendations(slug, {
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
      })),
    },
    reddit: { unsent_high_impact: opps.filter(o => (o.score?.composite || 0) >= 7).length },
  });

  return { profile, authority, history, winsMisses, opps, recommendation };
}

function Sparkline({ history }: { history: AuthorityIndexEntry[] }) {
  if (history.length < 2) return null;
  const scores = history.slice(-12).map(e => e.score);
  const min = Math.min(...scores);
  const max = Math.max(...scores);
  const range = Math.max(1, max - min);
  const width = 200;
  const height = 40;
  const step = scores.length === 1 ? 0 : width / (scores.length - 1);
  const points = scores.map((s, i) => `${i * step},${height - ((s - min) / range) * height}`).join(' ');
  return (
    <svg width={width} height={height} className="mt-2" aria-label="Authority Index trend">
      <polyline points={points} fill="none" stroke="#F27D24" strokeWidth="2" />
    </svg>
  );
}

function ComponentBar({ label, value, note }: { label: string; value: number; note?: string }) {
  return (
    <div className="mb-3">
      <div className="flex justify-between text-sm text-gray-700 mb-1">
        <span className="font-medium">{label}</span>
        <span className="font-mono">{value}/100{note ? <span className="text-gray-400 ml-2 text-xs">{note}</span> : null}</span>
      </div>
      <div className="h-2 bg-gray-100 rounded overflow-hidden">
        <div className="h-full bg-[#F27D24]" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

export default async function ClientDashboardPage({ params }: { params: Promise<{ slug: string }> }) {
  const session = await auth();
  if (!session?.user) redirect(`/admin/login?from=/clients`);

  const { slug } = await params;
  const data = await loadDashboard(slug);
  if (!data) notFound();

  const { profile, authority, history, winsMisses, opps, recommendation } = data;
  const displayName = profile.business?.dba || profile.business?.legal_name || slug;
  const highImpactOpps = opps.filter(o => (o.score?.composite || 0) >= 7);

  return (
    <div className="min-h-screen bg-[#f7f6f4]">
      <header className="bg-[#FAF8F2] text-white py-6 px-8">
        <div className="max-w-6xl mx-auto flex items-baseline justify-between">
          <div>
            <div className="text-xs tracking-widest text-[#F27D24] uppercase font-bold">Client Dashboard</div>
            <h1 className="text-2xl font-bold mt-1">{displayName}</h1>
          </div>
          <div className="text-sm text-gray-400">
            Last updated {new Date(authority.timestamp).toLocaleString('en-US', { timeZone: 'America/Los_Angeles' })}
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-8 py-10 space-y-10">

        <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <div className="text-xs tracking-widest text-[#F27D24] uppercase font-bold mb-2">AEO Authority Index</div>
          <div className="flex items-baseline gap-6">
            <div className="text-6xl font-extrabold text-gray-900">{authority.score}<span className="text-2xl text-gray-400">/100</span></div>
            <div className="text-sm text-gray-600">
              {authority.deltaFromLast === null ? (
                <span>Baseline captured — weekly history will start next run.</span>
              ) : authority.deltaFromLast > 0 ? (
                <span>↑ {authority.deltaFromLast} from last reading</span>
              ) : authority.deltaFromLast === 0 ? (
                <span>Holding steady from last reading</span>
              ) : (
                <span>Momentum initiatives in progress — next reading will reflect impact</span>
              )}
              <Sparkline history={history} />
            </div>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-x-10">
            <ComponentBar label="GSC performance (40%)" value={authority.breakdown.gsc} />
            <ComponentBar label="Reddit engagement (15%)" value={authority.breakdown.reddit} />
            <ComponentBar label="Content velocity (15%)" value={authority.breakdown.content_velocity} />
            <ComponentBar label="Reviews (15%)" value={authority.breakdown.reviews} />
            <ComponentBar label="AI citations (10%)" value={authority.breakdown.ai_citations} note="stub" />
            <ComponentBar label="Backlink authority (5%)" value={authority.breakdown.backlink_proxy} note="stub" />
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <h2 className="text-xs tracking-widest text-[#F27D24] uppercase font-bold mb-4">This Week&apos;s Wins</h2>
          {winsMisses.wins.length === 0 && winsMisses.newQueries.length === 0 ? (
            <p className="text-sm text-gray-600">Data maturing this week — new indexing is settling. Check back Monday.</p>
          ) : (
            <ul className="space-y-3">
              {winsMisses.wins.slice(0, 5).map(w => (
                <li key={w.query} className="p-3 bg-green-50 border-l-4 border-green-600 text-sm">
                  <div className="font-semibold text-gray-900">Rank up: &ldquo;{w.query}&rdquo;</div>
                  <div className="text-gray-600">Position {Math.round(w.priorPosition ?? w.thisPosition)} → {Math.round(w.thisPosition)}</div>
                </li>
              ))}
              {winsMisses.newQueries.length > 0 && (
                <li className="p-3 bg-[#fff6ea] border-l-4 border-[#F27D24] text-sm">
                  <div className="font-semibold text-gray-900">{winsMisses.newQueries.length} new queries ranking</div>
                  <div className="text-gray-600">Previously unranked — now earning impressions.</div>
                </li>
              )}
            </ul>
          )}
        </section>

        {highImpactOpps.length > 0 && (
          <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 className="text-xs tracking-widest text-[#F27D24] uppercase font-bold mb-4">Reddit Opportunities</h2>
            <ul className="space-y-4">
              {highImpactOpps.slice(0, 5).map(o => (
                <li key={o.id} className="border-l-4 border-[#F27D24] pl-4">
                  <div className="text-sm text-gray-500 mb-1">
                    r/{o.subreddit} · score {o.score.composite}/10
                  </div>
                  <a href={o.postUrl} className="font-semibold text-gray-900 hover:underline" target="_blank" rel="noopener noreferrer">
                    {o.title}
                  </a>
                  <div className="text-sm text-gray-600 mt-1">{o.score.impactReasoning}</div>
                </li>
              ))}
            </ul>
          </section>
        )}

        <PlatformCitationsSection />

        <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <h2 className="text-xs tracking-widest text-[#F27D24] uppercase font-bold mb-2">What We&apos;re Doing Next</h2>
          <p className="text-sm text-gray-700 mb-6">{recommendation.interpretation}</p>
          <ol className="space-y-4">
            {recommendation.recommendations.map((r, i) => (
              <li key={i} className="p-4 bg-[#fafafa] border-l-4 border-[#F27D24]">
                <div className="font-semibold text-gray-900 mb-1">{i + 1}. {r.action}</div>
                <div className="text-sm text-gray-600 mb-2">{r.rationale}</div>
                <div className="text-xs uppercase tracking-widest text-[#F27D24] font-bold">Tied to: {r.tied_to_goal}</div>
              </li>
            ))}
          </ol>
        </section>

      </main>
    </div>
  );
}

function PlatformCitationsSection() {
  // Placeholder until #10 Platform-Specific Citation Tracker ships.
  const platforms = [
    { name: 'Perplexity', note: 'Tracker live next cycle', color: '#1fb8cd' },
    { name: 'Claude', note: 'Tracker live next cycle', color: '#F27D24' },
    { name: 'Google AI', note: 'Tracker live next cycle', color: '#4285F4' },
    { name: 'ChatGPT', note: 'Tracker live next cycle', color: '#10a37f' },
  ];

  return (
    <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
      <div className="flex items-baseline justify-between mb-4">
        <h2 className="text-xs tracking-widest text-[#F27D24] uppercase font-bold">Platform Citations</h2>
        <span className="text-xs text-gray-400">Stub — tracker ships next sprint</span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {platforms.map(p => (
          <div key={p.name} className="border border-gray-200 rounded-lg p-4 text-center">
            <div className="text-sm font-bold mb-1" style={{ color: p.color }}>{p.name}</div>
            <div className="text-2xl font-extrabold text-gray-400">—</div>
            <div className="text-[11px] text-gray-500 mt-1">{p.note}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
