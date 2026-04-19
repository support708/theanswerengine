/**
 * Branded Search Tracker weekly cron — INTERNAL ONLY.
 *
 * Schedule: Monday 11am PT (19:00 UTC `0 19 * * 1`).
 *
 * Gut-check against 7-client portfolio 2026-04-19 showed most clients
 * still falling or flat on branded search. Only Davis Agency passed the
 * "rising + 10 impr floor" client-facing gate. Per Justin's instruction,
 * we only ship client-facing when data trends up.
 *
 * Therefore this cron is INTERNAL-ONLY by default: Telegram digest to
 * Justin, no client-facing drafts. When the data matures (and per the
 * pending full email outreach audit), flip mode=with-drafts via query
 * param or future config flag.
 *
 * Query overrides:
 *   ?mode=with-drafts  — also create Gmail DRAFTS for clients whose
 *                        brand data passes the Brand Safety gate
 *                        (verdict === 'rising' AND >=10 impr last week)
 *   ?slug=<slug>       — one client only
 *   ?dryRun=1          — skip Telegram + draft creation, return data
 */
import { NextRequest, NextResponse } from 'next/server';
import { readFileSync } from 'fs';
import { join } from 'path';
import {
  buildBrandedTrend,
  renderTrendTelegram,
  renderClientCuratedInner,
  checkBrandSafety,
  type BrandedSearchTrend,
} from '@/lib/gsc-branded-search';
import { isGscConfigured } from '@/lib/gsc-api';
import { htmlWrap } from '@/lib/gmail';
import { createGmailDraft, isGmailConfigured } from '@/lib/gmail-api';
import { sendMessage as sendTelegram } from '@/lib/telegram';

export const maxDuration = 300;

interface ClientProfileJson {
  business?: { legal_name?: string; dba?: string };
  author?: { first_name?: string; full_name?: string };
  engagement?: {
    contact_name?: string;
    primary_contact_name?: string;
    contact_email?: string;
    primary_contact_email?: string;
  };
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

function firstName(p: ClientProfileJson | null): string {
  return (
    p?.author?.first_name ||
    (p?.author?.full_name || '').trim().split(/\s+/)[0] ||
    (p?.engagement?.contact_name || p?.engagement?.primary_contact_name || '').trim().split(/\s+/)[0] ||
    'there'
  );
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
  const slugOverride = searchParams.get('slug');
  const withDrafts = searchParams.get('mode') === 'with-drafts';
  const dryRun = searchParams.get('dryRun') === '1';

  const map = loadMap();
  const slugToSite: Record<string, string> = {};
  for (const [site, slug] of Object.entries(map)) slugToSite[slug] = site;

  const slugs = slugOverride ? [slugOverride] : Object.keys(slugToSite);

  const trends: BrandedSearchTrend[] = [];
  const draftResults: Array<{ slug: string; draftId?: string; blocked?: string[]; skipped?: string }> = [];
  const errors: Array<{ slug: string; error: string }> = [];

  for (const slug of slugs) {
    const siteUrl = slugToSite[slug];
    if (!siteUrl) continue;

    const profile = loadProfile(slug);
    const displayName = profile?.business?.dba || profile?.business?.legal_name || slug;

    try {
      const trend = await buildBrandedTrend({ slug, displayName, siteUrl });
      trends.push(trend);

      if (!withDrafts || dryRun) {
        draftResults.push({ slug, skipped: dryRun ? 'dry run' : 'mode=internal-only' });
        continue;
      }

      // With-drafts mode: only create a draft if Brand Safety gate passes
      const goal = profile?.goals?.primary_outcome || '';
      const curated = renderClientCuratedInner(trend, firstName(profile), goal);
      const verdict = checkBrandSafety(curated, trend);
      if (!verdict.pass) {
        draftResults.push({ slug, blocked: verdict.reasons });
        continue;
      }

      if (!isGmailConfigured()) {
        draftResults.push({ slug, skipped: 'Gmail not configured' });
        continue;
      }

      const html = htmlWrap(curated, 'light');
      const latest = trend.weeks[trend.weeks.length - 1];
      const subject = `[Preview] Brand demand is climbing — ${displayName} (+${trend.fourWeekTrendPct}% 4wk)`;
      const plain = `Branded search is up ${trend.fourWeekTrendPct}% over the last 4 weeks for ${displayName}.\nThis week: ${latest.brandedImpressions} branded impressions across ${latest.matchedQueries.length} distinct queries.\nSee HTML for full report.`;

      const draft = await createGmailDraft({
        to: 'justin@theborgesrealestateteam.com',
        subject,
        body: plain,
        htmlBody: html,
      });
      draftResults.push({ slug, draftId: draft?.draftId });
    } catch (err) {
      errors.push({ slug, error: (err as Error).message?.slice(0, 200) || 'unknown' });
    }
  }

  // Internal Telegram always sent (unless dry run)
  if (!dryRun && trends.length > 0) {
    await sendTelegram(renderTrendTelegram(trends)).catch(() => {});
  }

  return NextResponse.json({
    success: errors.length === 0,
    mode: withDrafts ? 'with-drafts' : 'internal-only',
    clientCount: trends.length,
    summary: trends.map(t => ({
      slug: t.slug,
      verdict: t.verdict,
      fourWeekTrendPct: t.fourWeekTrendPct,
      weekOverWeekPct: t.weekOverWeekPct,
      totalBranded4w: t.totalBrandedImpressions4w,
    })),
    drafts: draftResults,
    errors,
    ...(dryRun ? { trends } : {}),
  });
}
