/**
 * Page-2 Opportunity Queue weekly cron.
 *
 * Schedule: Monday 9am PT (17:00 UTC `0 17 * * 1`).
 *
 * For every client in data/gsc-client-map.json, pull last 28 days of GSC
 * queries, filter to page-2 queries with >=10 impressions, and persist
 * into data/gsc-page2-opportunities.json (via GitHub REST so the file is
 * tracked in source and readable across Vercel deploys).
 *
 * Sends a Telegram summary of new opportunities (Justin-facing, full
 * picture — this is internal discovery, not client-facing).
 *
 * Feeds into:
 *   - The TAE Content Engine (Claude Code daily blog protocol reads the
 *     store to pick next topic candidates)
 *   - Tool #5 Weekly Wins & Misses (consumes per-client opportunities
 *     when rendering the client-facing digest)
 */
import { NextRequest, NextResponse } from 'next/server';
import { readFileSync } from 'fs';
import { join } from 'path';
import {
  findOpportunitiesForClient,
  mergeStore,
  emptyStore,
  summarizeStore,
  topNewOpportunities,
  type OpportunityStore,
  type Page2Opportunity,
} from '@/lib/gsc-page2-opportunities';
import { isGscConfigured } from '@/lib/gsc-api';
import { getFileContentSafe, publishToGitHub } from '@/lib/github-publish';
import { sendMessage as sendTelegram } from '@/lib/telegram';

export const maxDuration = 300;

const STORE_PATH = 'data/gsc-page2-opportunities.json';

interface ClientProfileJson {
  business?: { legal_name?: string; dba?: string };
  goals?: { primary_outcome?: string };
}

function loadMap(): Record<string, string> {
  const path = join(process.cwd(), 'data', 'gsc-client-map.json');
  const raw = JSON.parse(readFileSync(path, 'utf-8')) as Record<string, string>;
  const out: Record<string, string> = {};
  for (const [k, v] of Object.entries(raw)) {
    if (!k.startsWith('_') && v && v !== 'CONFIGURE_ME') out[k] = v;
  }
  return out;
}

function loadProfile(slug: string): ClientProfileJson | null {
  try {
    const path = join(process.cwd(), 'data', 'client-profiles', `${slug}.json`);
    return JSON.parse(readFileSync(path, 'utf-8')) as ClientProfileJson;
  } catch {
    return null;
  }
}

async function readStore(): Promise<OpportunityStore> {
  try {
    const raw = await getFileContentSafe(STORE_PATH);
    if (!raw) return emptyStore();
    return JSON.parse(raw) as OpportunityStore;
  } catch {
    return emptyStore();
  }
}

async function writeStore(store: OpportunityStore): Promise<{ commitSha?: string; reason?: string }> {
  if (!process.env.GITHUB_TOKEN) {
    return { reason: 'GITHUB_TOKEN not set — store updated in-memory only' };
  }
  try {
    const { commitSha } = await publishToGitHub(
      [{ path: STORE_PATH, content: JSON.stringify(store, null, 2) + '\n' }],
      `data: weekly page-2 opportunities (${summarizeStore(store).totalOpportunities} total)`,
    );
    return { commitSha };
  } catch (err) {
    return { reason: (err as Error).message?.slice(0, 200) };
  }
}

export async function GET(req: NextRequest) {
  return handle(req);
}

export async function POST(req: NextRequest) {
  return handle(req);
}

async function handle(req: NextRequest) {
  const authHeader = req.headers.get('authorization');
  const secret = process.env.CRON_SECRET;
  if (!secret || authHeader !== `Bearer ${secret}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  if (!isGscConfigured()) {
    return NextResponse.json({ error: 'GSC not configured' }, { status: 500 });
  }

  const { searchParams } = new URL(req.url);
  const slugOverride = searchParams.get('slug'); // one client only
  const dryRun = searchParams.get('dryRun') === '1';

  const map = loadMap();
  const slugToSite: Record<string, string> = {};
  for (const [site, slug] of Object.entries(map)) slugToSite[slug] = site;

  const priorStore = await readStore();
  const nextByClient: Record<string, Page2Opportunity[]> = {};
  const errors: Array<{ slug: string; error: string }> = [];

  const slugs = slugOverride ? [slugOverride] : Object.keys(slugToSite);

  for (const slug of slugs) {
    const siteUrl = slugToSite[slug];
    if (!siteUrl) continue;

    const profile = loadProfile(slug);
    const displayName = profile?.business?.dba || profile?.business?.legal_name || slug;
    const goalPrimaryOutcome = profile?.goals?.primary_outcome;

    try {
      const opps = await findOpportunitiesForClient({
        slug,
        displayName,
        siteUrl,
        goalPrimaryOutcome,
        existingForSlug: priorStore.byClient[slug] || [],
        minImpressions: 10,
        maxPerClient: 15,
      });
      nextByClient[slug] = opps;
    } catch (err) {
      errors.push({ slug, error: (err as Error).message?.slice(0, 200) || 'unknown' });
    }
  }

  // If running a single slug, keep other clients' existing entries intact
  const nextStore = mergeStore(priorStore, slugOverride ? nextByClient : { ...nextByClient });
  // When running all slugs, REPLACE byClient entirely (so dropped slugs get cleared)
  if (!slugOverride) nextStore.byClient = nextByClient;

  const newOpportunities = topNewOpportunities(priorStore, nextStore, 10);
  const summary = summarizeStore(nextStore);

  // Persist to GitHub (unless dry run)
  let persistResult: { commitSha?: string; reason?: string } = {};
  if (!dryRun) {
    persistResult = await writeStore(nextStore);
  }

  // Telegram digest — internal, full picture
  const lines: string[] = [];
  lines.push(`<b>Page-2 Opportunity Queue</b> — weekly scan`);
  lines.push(`Total in store: ${summary.totalOpportunities} across ${summary.byClient.length} clients`);
  if (newOpportunities.length > 0) {
    lines.push('');
    lines.push(`<b>${newOpportunities.length} new this week:</b>`);
    for (const o of newOpportunities.slice(0, 10)) {
      lines.push(`  • [${o.clientSlug}] "${o.query}" — ${o.impressions} impr, pos ${o.position.toFixed(1)}`);
    }
  } else {
    lines.push('No new opportunities since last run.');
  }
  if (errors.length > 0) {
    lines.push('');
    lines.push(`<b>Errors:</b>`);
    for (const e of errors) lines.push(`  ✗ ${e.slug}: ${e.error}`);
  }
  if (persistResult.commitSha) {
    lines.push('');
    lines.push(`Store updated: ${persistResult.commitSha.slice(0, 7)}`);
  } else if (persistResult.reason) {
    lines.push('');
    lines.push(`Store NOT persisted: ${persistResult.reason}`);
  }
  await sendTelegram(lines.join('\n')).catch(() => {});

  return NextResponse.json({
    success: errors.length === 0,
    dryRun,
    summary,
    newOpportunitiesCount: newOpportunities.length,
    newOpportunities: newOpportunities.slice(0, 10),
    errors,
    persistResult,
  });
}
