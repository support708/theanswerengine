/**
 * The Monday Brief cron — weekly unified client email.
 *
 * Runs Monday 08:00 PT (15:00 UTC — `0 15 * * 1`). For every client in
 * data/gsc-client-map.json:
 *   1. Build the Monday Brief (Authority Index + wins + Reddit + Goal-Aware
 *      recommendations) via lib/monday-brief.ts
 *   2. Pass through sendGmailMessageGated() — Fabrication Scan 2.0 plus the
 *      global AUTO_SEND_ENABLED kill-switch. Currently kill-switch is OFF so
 *      every brief becomes a Gmail DRAFT addressed to Justin for review
 *      before any client sees it.
 *   3. Telegram summary: per-client status, Authority Index + delta, any
 *      conversation flags from the Recommender.
 *
 * The brief routes to Justin (not the client contact) while the email
 * outreach audit is pending. Once Justin flips AUTO_SEND_ENABLED=true, the
 * cron will auto-send to each client's contact_email — but the Fabrication
 * Scan still runs, so any hallucinated numbers still hold the send.
 *
 * Auth: Bearer ${CRON_SECRET} header. Query overrides:
 *   ?slug=<slug>   build a single client (for live previews)
 *   ?dryRun=1      skip all drafts and Gmail — just return the computed data
 */
import { NextRequest, NextResponse } from 'next/server';
import { readFileSync } from 'fs';
import { join } from 'path';
import { buildMondayBrief } from '@/lib/monday-brief';
import { sendGmailMessageGated } from '@/lib/fabrication-scan-email';
import { isGmailConfigured } from '@/lib/gmail-api';
import { isGscConfigured } from '@/lib/gsc-api';
import { sendMessage as sendTelegram } from '@/lib/telegram';

export const maxDuration = 300;

interface BriefResult {
  slug: string;
  status: 'drafted' | 'held' | 'sent' | 'error';
  authorityScore?: number;
  authorityDelta?: number | null;
  flagsCount?: number;
  draftId?: string;
  messageId?: string;
  conversationFlag?: boolean;
  message?: string;
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

export async function GET(req: NextRequest) { return handle(req); }
export async function POST(req: NextRequest) { return handle(req); }

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
  const slugOverride = searchParams.get('slug');
  const dryRun = searchParams.get('dryRun') === '1';

  const map = loadMap();
  const allSlugs = Array.from(new Set(Object.values(map)));
  const slugs = slugOverride ? [slugOverride] : allSlugs;

  const results: BriefResult[] = [];

  for (const slug of slugs) {
    try {
      const brief = await buildMondayBrief(slug);

      if (dryRun) {
        results.push({
          slug,
          status: 'drafted',
          authorityScore: brief.snapshots.authority.score,
          authorityDelta: brief.snapshots.authority.deltaFromLast,
          conversationFlag: brief.conversationFlag.needed,
          message: `dry run — subject would be: ${brief.subject}`,
        });
        continue;
      }

      // Pre-audit routing: send to Justin, not the client. The brief is
      // addressed TO the client contact in its copy ("Good morning,
      // Ryan.") but the recipient header goes to Justin for review.
      const recipientForReview = 'justin@theborgesrealestateteam.com';

      const sendResult = await sendGmailMessageGated({
        to: recipientForReview,
        subject: `[Preview] ${brief.subject}`,
        body: brief.textBody,
        htmlBody: brief.htmlBody,
        verifiedFacts: brief.verifiedFacts,
        strict: true,
        clientSlug: slug,
        context: 'Monday Brief',
      });

      results.push({
        slug,
        status: sendResult.held ? (sendResult.flags.length > 0 ? 'held' : 'drafted') : 'sent',
        authorityScore: brief.snapshots.authority.score,
        authorityDelta: brief.snapshots.authority.deltaFromLast,
        flagsCount: sendResult.flags.length,
        draftId: sendResult.draftId,
        messageId: sendResult.messageId,
        conversationFlag: brief.conversationFlag.needed,
      });
    } catch (err) {
      results.push({
        slug,
        status: 'error',
        message: (err as Error).message?.slice(0, 300) || 'unknown error',
      });
    }
  }

  // Telegram summary — Justin-facing (raw truth track).
  const summaryLines: string[] = [];
  summaryLines.push(`<b>Monday Brief — ${new Date().toISOString().slice(0, 10)}</b>`);
  const drafted = results.filter(r => r.status === 'drafted').length;
  const held = results.filter(r => r.status === 'held').length;
  const sent = results.filter(r => r.status === 'sent').length;
  const errored = results.filter(r => r.status === 'error').length;
  summaryLines.push(`${drafted} draft · ${held} held · ${sent} sent · ${errored} error`);
  summaryLines.push('');
  for (const r of results) {
    const deltaSuffix = r.authorityDelta !== undefined && r.authorityDelta !== null
      ? ` (${r.authorityDelta >= 0 ? '+' : ''}${r.authorityDelta})`
      : '';
    const icon = r.status === 'sent' ? '✓' : r.status === 'drafted' ? '📝' : r.status === 'held' ? '⚠️' : '✗';
    const flag = r.conversationFlag ? ' 📞' : '';
    const detail = r.status === 'error'
      ? ` — ${r.message}`
      : ` — AI ${r.authorityScore}/100${deltaSuffix}${r.flagsCount ? ` · ${r.flagsCount} flag(s)` : ''}`;
    summaryLines.push(`${icon} ${r.slug}${detail}${flag}`);
  }
  try { await sendTelegram(summaryLines.join('\n')); } catch { /* non-blocking */ }

  return NextResponse.json({
    success: errored === 0,
    drafted,
    held,
    sent,
    errored,
    total: results.length,
    results,
  });
}
