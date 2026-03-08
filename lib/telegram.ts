/**
 * Telegram Bot notifications for pipeline status changes.
 * Sends rich, data-driven messages per Master Prompt v9.5 Section 6.
 * Rate limited to 1 message/second.
 */

import type { Lead } from './types';
import { getAERO7Grade } from './aero7-scorer';

const TELEGRAM_API = 'https://api.telegram.org/bot';

let lastSent = 0;

async function sendMessage(text: string): Promise<void> {
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
  const threshold = r.aero7.total <= 20 ? 'Invisible. Priority prospect.' :
    r.aero7.total <= 40 ? 'Weak. Excellent prospect.' :
    r.aero7.total <= 55 ? 'Moderate. Good prospect.' :
    'Authority. Minor optimization only.';

  const diffList = r.hiddenDifferentiators.length > 0
    ? r.hiddenDifferentiators.slice(0, 3).map(d => `  - ${d}`).join('\n')
    : '  (none found, flagged for manual review)';

  await sendMessage(
    `<b>Research complete:</b> ${lead.businessName} (${lead.contactFirstName})\n\n` +
    `AERO-7: ${r.aero7.total}/70 (${grade}) ${threshold}\n` +
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
    `AERO-7: ${lead.research?.aero7.total ?? '?'}/70\n` +
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

export async function notifyHuntComplete(session: {
  trigger: string;
  vertical: string;
  metro: string;
  prospectsFound: number;
  p1Queued: number;
  p2Queued: number;
  p3Backlogged: number;
  duplicatesSkipped: number;
  errors: string[];
}): Promise<void> {
  const errorLine = session.errors.length > 0
    ? `\nErrors: ${session.errors.length} (${session.errors[0]?.slice(0, 80)})`
    : '';

  await sendMessage(
    `<b>Hunt Complete</b> | ${session.vertical} x ${session.metro}\n` +
    `Trigger: ${session.trigger}\n\n` +
    `Found: ${session.prospectsFound} prospects\n` +
    `P1: ${session.p1Queued} queued | P2: ${session.p2Queued} queued\n` +
    `P3: ${session.p3Backlogged} backlogged\n` +
    `Dupes skipped: ${session.duplicatesSkipped}` +
    errorLine
  );
}
