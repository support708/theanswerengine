/**
 * Weekly Wins & Misses cron.
 *
 * Schedule: Monday 10am PT (18:00 UTC `0 18 * * 1`).
 *
 * Two-track output per backlog's Brand Safety Layer:
 *   1. INTERNAL: Telegram digest with full picture (wins + misses + flags)
 *      — Justin-facing, always sent.
 *   2. CLIENT: Gmail DRAFT per client with wins-forward curated render
 *      — Brand Safety gate must pass. Never auto-sent; Justin reviews.
 *
 * LAMH is INTERNAL ONLY: gets a Telegram line but no client-facing draft
 * (crown jewel, never sent client-facing per Safety Protocol).
 *
 * Query overrides:
 *   ?slug=<slug>  — run for one client
 *   ?dryRun=1     — skip draft creation, just return computed data
 */
import { NextRequest, NextResponse } from 'next/server';
import { readFileSync } from 'fs';
import { join } from 'path';
import {
  buildWinsMissesForClient,
  renderInternalTelegram,
  renderClientCuratedInner,
  checkBrandSafety,
  buildSubject,
  type ClientWinsMisses,
} from '@/lib/gsc-wins-misses';
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
  goals?: { primary_outcome?: string; conversion_definition?: string };
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
  const dryRun = searchParams.get('dryRun') === '1';

  const map = loadMap();
  const slugToSite: Record<string, string> = {};
  for (const [site, slug] of Object.entries(map)) slugToSite[slug] = site;

  const slugs = slugOverride ? [slugOverride] : Object.keys(slugToSite);

  const results: ClientWinsMisses[] = [];
  const draftResults: Array<{ slug: string; draftId?: string; blocked?: string[]; skipped?: string }> = [];
  const errors: Array<{ slug: string; error: string }> = [];

  for (const slug of slugs) {
    const siteUrl = slugToSite[slug];
    if (!siteUrl) continue;

    const profile = loadProfile(slug);
    const displayName = profile?.business?.dba || profile?.business?.legal_name || slug;
    const goal = profile?.goals?.primary_outcome || '';
    if (!goal) {
      errors.push({ slug, error: 'no goals.primary_outcome in profile' });
      continue;
    }

    try {
      const data = await buildWinsMissesForClient({
        slug,
        displayName,
        siteUrl,
        isLamh: slug === 'lamh',
        goalPrimaryOutcome: goal,
        goalConversionDefinition: profile?.goals?.conversion_definition,
      });
      results.push(data);

      // LAMH and dry runs never produce a client-facing draft
      if (dryRun || data.isLamh) {
        draftResults.push({ slug, skipped: data.isLamh ? 'LAMH (internal only)' : 'dry run' });
        continue;
      }

      if (!isGmailConfigured()) {
        draftResults.push({ slug, skipped: 'Gmail not configured' });
        continue;
      }

      const curated = renderClientCuratedInner(data, firstName(profile));
      const verdict = checkBrandSafety(curated, data);

      if (!verdict.pass) {
        draftResults.push({ slug, blocked: verdict.reasons });
        continue;
      }

      const html = htmlWrap(curated, 'light');
      const subject = `[Preview] ${buildSubject(displayName, data.window.thisWeekStart, data.window.thisWeekEnd)}`;
      const plain = `Weekly intelligence for ${displayName}\n${data.window.thisWeekStart} to ${data.window.thisWeekEnd}\nWins: ${data.wins.length}\nNew queries: ${data.newQueries.length}\nSee HTML for full report.`;

      const draft = await createGmailDraft({
        to: 'justin@theborgesrealestateteam.com', // always Justin — never auto-sent to client
        subject,
        body: plain,
        htmlBody: html,
      });
      draftResults.push({ slug, draftId: draft?.draftId });
    } catch (err) {
      errors.push({ slug, error: (err as Error).message?.slice(0, 200) || 'unknown' });
    }
  }

  // Internal Telegram digest — full picture, always sent (wins + misses + flags)
  if (results.length > 0) {
    await sendTelegram(renderInternalTelegram(results)).catch(() => {});
  }

  return NextResponse.json({
    success: errors.length === 0,
    clientCount: results.length,
    drafts: draftResults,
    errors,
    // include computed data only on dry runs to keep non-dry-run response slim
    ...(dryRun ? { data: results } : {}),
  });
}
