/**
 * Telegram Bot notifications for pipeline status changes.
 * Sends rich, data-driven messages per Master Prompt v9.5 Section 6.
 * Rate limited to 1 message/second.
 */

import type { Lead } from './types';
import type { BlogSession } from './blog-types';
import { getAERO7Grade } from './aero7-scorer';

const TELEGRAM_API = 'https://api.telegram.org/bot';

let lastSent = 0;

export async function sendMessage(text: string): Promise<void> {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    console.warn('Telegram not configured (TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID missing)');
    return;
  }

  // Rate limit: 1 message/second
  const now = Date.now();
  const wait = Math.max(0, 1000 - (now - lastSent));
  if (wait > 0) await new Promise(r => setTimeout(r, wait));
  lastSent = Date.now();

  try {
    const res = await fetch(`${TELEGRAM_API}${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: 'HTML',
        disable_web_page_preview: true,
      }),
    });

    if (!res.ok) {
      console.error(`Telegram send failed: ${res.status}`);
    }
  } catch (err) {
    console.error('Telegram send error:', err);
  }
}

export async function notifyLeadCreated(lead: Lead): Promise<void> {
  await sendMessage(
    `<b>New lead queued:</b> ${lead.businessName}\n` +
    `Contact: ${lead.contactFirstName} (${lead.contactEmail})\n` +
    `City: ${lead.city} | Niche: ${lead.serviceNiche}\n` +
    `${lead.competitorName ? `Competitor: ${lead.competitorName}\n` : ''}` +
    `${lead.notes ? `Notes: ${lead.notes.slice(0, 200)}\n` : ''}`
  );
}

export async function notifyResearchComplete(lead: Lead): Promise<void> {
  if (!lead.research) return;

  const r = lead.research;
  const grade = getAERO7Grade(r.aero7.total);
  const threshold = r.aero7.total <= 39 ? 'AI Invisible. Priority prospect.' :
    r.aero7.total <= 49 ? 'Rebuilding Required. Excellent prospect.' :
    r.aero7.total <= 59 ? 'Below Standard. Good prospect.' :
    r.aero7.total <= 69 ? 'Average. Significant work needed.' :
    r.aero7.total <= 79 ? 'Competitive. Strategic improvements.' :
    'Strong Position. Minor tune-ups.';

  const diffList = r.hiddenDifferentiators.length > 0
    ? r.hiddenDifferentiators.slice(0, 3).map(d => `  - ${d}`).join('\n')
    : '  (none found, flagged for manual review)';

  await sendMessage(
    `<b>Research complete:</b> ${lead.businessName} (${lead.contactFirstName})\n\n` +
    `AERO-10: ${r.aero7.total}/100 (${grade}) ${threshold}\n` +
    `Reviews: ${r.reviewCount || 'Unknown'} at ${r.rating || '?'} stars\n` +
    `AI Citations: ${r.aiCited ? 'Yes' : '0 across all platforms'}\n` +
    `Top competitor: ${lead.competitorName || 'Unknown'}\n\n` +
    `Hidden differentiators:\n${diffList}`
  );
}

export async function notifyReportReady(lead: Lead): Promise<void> {
  const fabricationStatus = lead.fabricationFlags.length === 0 ? 'CLEAN' : `${lead.fabricationFlags.length} FLAGS`;
  const emDashStatus = lead.emDashClean ? 'CLEAN' : 'FAILED';

  await sendMessage(
    `<b>Report ready:</b> ${lead.businessName} (${lead.contactFirstName})\n\n` +
    `AERO-10: ${lead.research?.aero7.total ?? '?'}/100\n` +
    `Fabrication scan: ${fabricationStatus}\n` +
    `Em-dash scan: ${emDashStatus}\n\n` +
    `Review now:\nhttps://theanswerengine.ai/admin/pipeline/${lead.id}`
  );
}

export async function notifyEmailDrafted(lead: Lead): Promise<void> {
  await sendMessage(
    `<b>Email drafted:</b> ${lead.businessName}\n` +
    `To: ${lead.contactEmail}\n` +
    `Awaiting approval.\n\n` +
    `Review: https://theanswerengine.ai/admin/pipeline/${lead.id}`
  );
}

export async function notifyStatusChange(lead: Lead, newStatus: string): Promise<void> {
  await sendMessage(
    `<b>${lead.businessName}</b> status: ${newStatus}\n` +
    `Contact: ${lead.contactFirstName} (${lead.contactEmail})`
  );
}

export async function notifyFollowUpDrafted(lead: Lead, stage: number, gmailUsed: boolean): Promise<void> {
  const draftNote = gmailUsed ? 'Gmail draft ready' : 'Draft prepared (check admin)';
  const stageLabel = stage === 3 ? 'FINAL follow-up (soft close, no Calendly)' : `Follow-up ${stage}`;

  await sendMessage(
    `<b>${stageLabel} drafted:</b> ${lead.businessName}\n` +
    `To: ${lead.contactEmail}\n` +
    `${draftNote}\n\n` +
    `Review and send from Gmail, then mark status in admin:\n` +
    `https://theanswerengine.ai/admin/pipeline/${lead.id}`
  );
}

export async function notifyAutoClosedNoResponse(lead: Lead): Promise<void> {
  await sendMessage(
    `<b>Auto-closed:</b> ${lead.businessName}\n` +
    `Status: No Response (after 3 follow-ups)\n` +
    `Contact: ${lead.contactFirstName} (${lead.contactEmail})\n\n` +
    `Lead moved to no_response. Can be reopened from admin if they reply later.`
  );
}

export async function notifyHuntComplete(session: {
  trigger: string;
  vertical: string;
  metro: string;
  prospectsFound: number;
  p1Queued: number;
  p2Queued: number;
  p3Backlogged: number;
  duplicatesSkipped: number;
  outreachReadyCount?: number;
  errors: string[];
  quotaTarget?: number;
  totalToday?: number;
  chainDepth?: number;
}): Promise<void> {
  const errorLine = session.errors.length > 0
    ? `\nErrors: ${session.errors.length} (${session.errors[0]?.slice(0, 80)})`
    : '';

  const outreachLine = typeof session.outreachReadyCount === 'number'
    ? `\nOutreach-ready: ${session.outreachReadyCount} (have citation data + contact + differentiator)`
    : '';

  const quotaLine = typeof session.quotaTarget === 'number'
    ? `\nQuota: ${session.totalToday ?? 0}/${session.quotaTarget} today` +
      (session.chainDepth ? ` (chain ${session.chainDepth})` : '')
    : '';

  await sendMessage(
    `<b>Hunt Complete</b> | ${session.vertical} x ${session.metro}\n` +
    `Trigger: ${session.trigger}\n\n` +
    `Found: ${session.prospectsFound} prospects\n` +
    `P1: ${session.p1Queued} queued | P2: ${session.p2Queued} queued\n` +
    `P3: ${session.p3Backlogged} backlogged\n` +
    `Dupes skipped: ${session.duplicatesSkipped}` +
    outreachLine +
    quotaLine +
    errorLine
  );
}

export async function notifyPipelineFailure(leadId: string, businessName: string, step: string, error: string, attempts: number): Promise<void> {
  await sendMessage(
    `<b>Pipeline FAILED</b> (${attempts} attempts)\n` +
    `Business: ${businessName}\n` +
    `Step: ${step}\n` +
    `Error: ${error.slice(0, 300)}\n\n` +
    `Lead ID: ${leadId}\n` +
    `Check admin: https://theanswerengine.ai/admin/pipeline/${leadId}`
  );
}

/**
 * Daily hunt summary — sent when quota is filled or chain exhausted.
 * Includes expense report (API calls), leads queued, and verticals covered.
 */
export async function notifyHuntDailySummary(summary: {
  totalQueued: number;
  quota: number;
  chainDepth: number;
  sessionsToday: { vertical: string; metro: string; p1: number; p2: number; p3: number; dupes: number }[];
  estimatedCost: number;
}): Promise<void> {
  const quotaStatus = summary.totalQueued >= summary.quota ? 'FILLED' : `${summary.totalQueued}/${summary.quota}`;

  const sessionLines = summary.sessionsToday
    .map((s, i) => `  ${i + 1}. ${s.vertical} x ${s.metro} | P1: ${s.p1}, P2: ${s.p2}, P3: ${s.p3}, Dupes: ${s.dupes}`)
    .join('\n');

  await sendMessage(
    `<b>Daily Hunt Summary</b>\n\n` +
    `Quota: ${quotaStatus}\n` +
    `Total P1+P2 queued: ${summary.totalQueued}\n` +
    `Chain runs: ${summary.chainDepth + 1}\n\n` +
    `<b>Sessions:</b>\n${sessionLines}\n\n` +
    `<b>Expense Report:</b>\n` +
    `  API calls: ~${(summary.chainDepth + 1) * 3} (3 per session x ${summary.chainDepth + 1} chains)\n` +
    `  Est. cost: $${summary.estimatedCost.toFixed(4)}\n` +
    `  Model: claude-haiku-4-5 (${(summary.chainDepth + 1) * 3} web search calls)`
  );
}

export async function notifyHuntFailure(vertical: string, metro: string, error: string): Promise<void> {
  await sendMessage(
    `<b>Hunt FAILED</b> | ${vertical} x ${metro}\n` +
    `Error: ${error.slice(0, 300)}`
  );
}

export async function notifyFollowUpFailure(businessName: string, followUpType: string, error: string): Promise<void> {
  await sendMessage(
    `<b>Follow-up FAILED</b>\n` +
    `Business: ${businessName}\n` +
    `Type: ${followUpType}\n` +
    `Error: ${error.slice(0, 300)}`
  );
}

export async function notifyBlogPublished(session: BlogSession): Promise<void> {
  // Silent on success — only notify on failure
  if (!session.published) {
    const reason = session.error || 'Unknown error';
    await sendMessage(
      `<b>Content Engine</b> | Failed\n` +
      `${session.topicTitle}\n` +
      `${reason.slice(0, 200)}`
    );
  }
}

export async function notifyBlogBatchPublished(count: number, _commitSha: string): Promise<void> {
  await sendMessage(
    `<b>The Content Engine</b>\n` +
    `${count} new article${count > 1 ? 's' : ''} live on theanswerengine.ai/blog`
  );
}
