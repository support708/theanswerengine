/**
 * Monthly AEO Report cron.
 *
 * Runs on the 1st of each month at 7am PT (15:00 UTC) and builds a
 * Monthly AEO Report for every client in data/gsc-client-map.json
 * for the PRIOR completed month (e.g. fires Apr 1 -> reports March).
 *
 * Draft-only: creates a Gmail DRAFT addressed to Justin for every
 * client. No auto-send. Justin reviews each draft and manually sends
 * (or re-addresses to the client contact) from his inbox.
 *
 * Auth: Bearer ${CRON_SECRET} header (Vercel cron injects automatically).
 *
 * Interpretation Layer: every report ties numbers back to the client's
 * stated goal via the report's copy.
 * Brand Safety: monthly report already only surfaces positive/neutral
 * metrics (impressions, clicks, opportunities). No raw-loss messaging.
 */
import { NextRequest, NextResponse } from 'next/server';
import { readFileSync } from 'fs';
import { join } from 'path';
import {
  buildMonthlyReport,
  renderMonthlyReportHtml,
  renderMonthlyReportPlain,
  buildMonthlyReportSubject,
} from '@/lib/gsc-monthly-report';
import { readActivityForMonth } from '@/lib/agency-activity';
import { buildClientVsCohort } from '@/lib/cohort-aggregator';
import { htmlWrap } from '@/lib/gmail';
import { createGmailDraft, isGmailConfigured } from '@/lib/gmail-api';
import { isGscConfigured } from '@/lib/gsc-api';
import { sendMessage as sendTelegram } from '@/lib/telegram';

export const maxDuration = 300;

interface ClientProfileJson {
  business?: { legal_name?: string; dba?: string };
  contact?: { website_url?: string; email?: string; primary_contact_email?: string };
  engagement?: {
    contact_name?: string;
    primary_contact_name?: string;
    contact_email?: string;
    primary_contact_email?: string;
  };
  author?: { first_name?: string; full_name?: string };
}

function priorMonthYyyymm(now: Date = new Date()): string {
  // If fired on Apr 1, we want March (the just-completed month).
  const d = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth() - 1, 1));
  return `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, '0')}`;
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

function firstName(profile: ClientProfileJson | null): string {
  if (!profile) return 'there';
  return (
    profile.author?.first_name ||
    (profile.author?.full_name || '').trim().split(/\s+/)[0] ||
    (profile.engagement?.contact_name || profile.engagement?.primary_contact_name || '').trim().split(/\s+/)[0] ||
    'there'
  );
}

function displayName(profile: ClientProfileJson | null, slug: string): string {
  return profile?.business?.dba || profile?.business?.legal_name || slug;
}

interface ClientResult {
  slug: string;
  siteUrl: string;
  status: 'drafted' | 'skipped' | 'error';
  message?: string;
  draftId?: string;
  impressions?: number;
  clicks?: number;
  deltaClicksPct?: number;
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
    return NextResponse.json({ error: 'GSC not configured (missing GSC_REFRESH_TOKEN)' }, { status: 500 });
  }
  if (!isGmailConfigured()) {
    return NextResponse.json({ error: 'Gmail not configured (missing GMAIL_REFRESH_TOKEN)' }, { status: 500 });
  }

  const { searchParams } = new URL(req.url);
  const monthOverride = searchParams.get('month'); // YYYY-MM
  const slugOverride = searchParams.get('slug'); // one slug only
  const yyyyMm = monthOverride || priorMonthYyyymm();

  const map = loadMap();
  const slugToSite: Record<string, string> = {};
  for (const [site, slug] of Object.entries(map)) slugToSite[slug] = site;

  const slugs = slugOverride ? [slugOverride] : Object.keys(slugToSite);
  const results: ClientResult[] = [];

  for (const slug of slugs) {
    const siteUrl = slugToSite[slug];
    if (!siteUrl) {
      results.push({ slug, siteUrl: '', status: 'skipped', message: 'no GSC property mapped' });
      continue;
    }

    const profile = loadProfile(slug);
    const name = displayName(profile, slug);
    const fname = firstName(profile);

    try {
      const [report, activity, cohort] = await Promise.all([
        buildMonthlyReport(siteUrl, name, yyyyMm),
        readActivityForMonth(slug, yyyyMm),
        buildClientVsCohort(slug).catch(() => null),
      ]);
      const inner = renderMonthlyReportHtml(report, fname, activity, cohort);
      const html = htmlWrap(inner, 'light');
      const plain = renderMonthlyReportPlain(report, fname, activity, cohort);
      const subject = `[Preview] ${buildMonthlyReportSubject(name, report.monthLabel)}`;

      const draft = await createGmailDraft({
        to: 'justin@theborgesrealestateteam.com',
        subject,
        body: plain,
        htmlBody: html,
      });

      results.push({
        slug,
        siteUrl,
        status: 'drafted',
        draftId: draft?.draftId,
        impressions: report.totalImpressions,
        clicks: report.totalClicks,
        deltaClicksPct: report.deltaClicks,
      });
    } catch (err) {
      results.push({
        slug,
        siteUrl,
        status: 'error',
        message: (err as Error).message?.slice(0, 300) || 'unknown error',
      });
    }
  }

  const drafted = results.filter(r => r.status === 'drafted').length;
  const errors = results.filter(r => r.status === 'error');

  // Telegram summary — Justin-facing, full picture (wins + any errors)
  const lines: string[] = [];
  lines.push(`<b>Monthly AEO Reports drafted</b> (${yyyyMm})`);
  lines.push(`${drafted} / ${results.length} clients — review in Gmail Drafts`);
  for (const r of results) {
    if (r.status === 'drafted') {
      const delta = r.deltaClicksPct !== undefined ? ` (${r.deltaClicksPct > 0 ? '+' : ''}${r.deltaClicksPct}%)` : '';
      lines.push(`  ✓ ${r.slug}: ${(r.clicks ?? 0).toLocaleString()} clicks${delta}`);
    } else if (r.status === 'error') {
      lines.push(`  ✗ ${r.slug}: ${r.message}`);
    } else {
      lines.push(`  — ${r.slug}: ${r.message}`);
    }
  }
  await sendTelegram(lines.join('\n')).catch(() => {});

  return NextResponse.json({
    success: errors.length === 0,
    month: yyyyMm,
    drafted,
    total: results.length,
    results,
  });
}
