/**
 * Email Send Rate Limiting & Follow-up Scheduling
 *
 * Domain warmup plan (daily send limits):
 *   Week 1-2: 5 emails/day
 *   Week 3-4: 10 emails/day
 *   Week 5-6: 20 emails/day
 *   Week 7-8: 30 emails/day
 *   Week 9+:  50 emails/day
 *
 * Follow-up schedule (days after initial send):
 *   Follow-up 1: 3 days
 *   Follow-up 2: 7 days
 *   Follow-up 3: 14 days
 *   After follow-up 3 with no response: mark no_response
 */

import { promises as fs } from 'fs';
import path from 'path';
import type { Lead } from './types';
import { getFileContentSafe, publishToGitHub } from './github-publish';

const IS_VERCEL = !!process.env.VERCEL;
const SEND_LOG_PATH = path.join(process.cwd(), 'data', 'send-log.json');
const GH_SEND_LOG = 'data/send-log.json';

// --- Domain warmup daily limits ---

export interface SendLogEntry {
  leadId: string;
  email: string;
  type: 'initial' | 'follow_up_1' | 'follow_up_2' | 'follow_up_3';
  sentAt: string;
}

export interface SendLog {
  startDate: string; // when we started sending (for warmup calculation)
  entries: SendLogEntry[];
}

export async function readSendLog(): Promise<SendLog> {
  try {
    if (IS_VERCEL) {
      const data = await getFileContentSafe(GH_SEND_LOG);
      if (data) return JSON.parse(data) as SendLog;
      return { startDate: new Date().toISOString().split('T')[0], entries: [] };
    }
    const data = await fs.readFile(SEND_LOG_PATH, 'utf-8');
    return JSON.parse(data) as SendLog;
  } catch {
    return { startDate: new Date().toISOString().split('T')[0], entries: [] };
  }
}

async function writeSendLog(log: SendLog): Promise<void> {
  if (IS_VERCEL) {
    await publishToGitHub(
      [{ path: GH_SEND_LOG, content: JSON.stringify(log, null, 2) }],
      `data: update send log (${log.entries.length} entries)`,
    );
    return;
  }
  await fs.mkdir(path.dirname(SEND_LOG_PATH), { recursive: true });
  await fs.writeFile(SEND_LOG_PATH, JSON.stringify(log, null, 2), 'utf-8');
}

export async function logSend(leadId: string, email: string, type: SendLogEntry['type']): Promise<void> {
  const log = await readSendLog();
  log.entries.push({
    leadId,
    email,
    type,
    sentAt: new Date().toISOString(),
  });
  await writeSendLog(log);
}

/**
 * Prepare a send log entry and return the file content for batching into
 * an atomic flush (avoids a separate GitHub commit).
 */
export async function prepareSendLogFile(
  leadId: string,
  email: string,
  type: SendLogEntry['type'],
): Promise<{ path: string; content: string }> {
  const log = await readSendLog();
  log.entries.push({
    leadId,
    email,
    type,
    sentAt: new Date().toISOString(),
  });
  return { path: GH_SEND_LOG, content: JSON.stringify(log, null, 2) };
}

/** Get current daily send limit based on domain warmup weeks */
export async function getDailyLimit(): Promise<number> {
  const log = await readSendLog();
  const start = new Date(log.startDate);
  const now = new Date();
  const daysSinceStart = Math.floor((now.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
  const weeksSinceStart = Math.floor(daysSinceStart / 7);

  if (weeksSinceStart < 2) return 5;
  if (weeksSinceStart < 4) return 10;
  if (weeksSinceStart < 6) return 20;
  if (weeksSinceStart < 8) return 30;
  return 50;
}

/** Get number of emails sent today */
export async function getSentToday(): Promise<number> {
  const log = await readSendLog();
  const todayStr = new Date().toISOString().split('T')[0];
  return log.entries.filter(e => e.sentAt.startsWith(todayStr)).length;
}

/** Check if we can send more emails today (single read, no duplicate API calls) */
export async function canSendToday(): Promise<{ allowed: boolean; sent: number; limit: number }> {
  const log = await readSendLog();

  // Calculate limit from log
  const start = new Date(log.startDate);
  const daysSinceStart = Math.floor((Date.now() - start.getTime()) / (1000 * 60 * 60 * 24));
  const weeksSinceStart = Math.floor(daysSinceStart / 7);
  let limit: number;
  if (weeksSinceStart < 2) limit = 5;
  else if (weeksSinceStart < 4) limit = 10;
  else if (weeksSinceStart < 6) limit = 20;
  else if (weeksSinceStart < 8) limit = 30;
  else limit = 50;

  // Count today's sends from log
  const todayStr = new Date().toISOString().split('T')[0];
  const sent = log.entries.filter(e => e.sentAt.startsWith(todayStr)).length;

  return { allowed: sent < limit, sent, limit };
}

/** Get remaining sends available today */
export async function remainingSendsToday(): Promise<number> {
  const { sent, limit } = await canSendToday();
  return Math.max(0, limit - sent);
}

// --- Follow-up scheduling ---

const FOLLOW_UP_DELAYS = {
  follow_up_1: 3,  // days after sent
  follow_up_2: 7,  // days after sent
  follow_up_3: 14, // days after sent
};

/** Get the date a lead was marked as 'sent' from its action log */
function getSentDate(lead: Lead): Date | null {
  // Look for the action log entry that marks it as sent
  const sentEntry = [...lead.actionLog].reverse().find(
    entry => entry.action.toLowerCase().includes('sent') || entry.action.toLowerCase().includes('approved')
  );
  if (sentEntry) return new Date(sentEntry.timestamp);

  // Fallback: use updatedAt if status is sent or later
  if (['sent', 'follow_up_1', 'follow_up_2', 'follow_up_3'].includes(lead.status)) {
    return new Date(lead.updatedAt);
  }

  return null;
}

/** Find leads that are due for follow-up emails */
export function getLeadsDueForFollowUp(leads: Lead[]): { lead: Lead; followUpType: 'follow_up_1' | 'follow_up_2' | 'follow_up_3' }[] {
  const now = new Date();
  const due: { lead: Lead; followUpType: 'follow_up_1' | 'follow_up_2' | 'follow_up_3' }[] = [];

  for (const lead of leads) {
    const sentDate = getSentDate(lead);
    if (!sentDate) continue;

    const daysSinceSent = Math.floor((now.getTime() - sentDate.getTime()) / (1000 * 60 * 60 * 24));

    // Determine which follow-up is next based on current status
    if (lead.status === 'sent' && daysSinceSent >= FOLLOW_UP_DELAYS.follow_up_1) {
      due.push({ lead, followUpType: 'follow_up_1' });
    } else if (lead.status === 'follow_up_1' && daysSinceSent >= FOLLOW_UP_DELAYS.follow_up_2) {
      due.push({ lead, followUpType: 'follow_up_2' });
    } else if (lead.status === 'follow_up_2' && daysSinceSent >= FOLLOW_UP_DELAYS.follow_up_3) {
      due.push({ lead, followUpType: 'follow_up_3' });
    }
  }

  return due;
}

/** Get warmup status for admin dashboard */
export async function getWarmupStatus(): Promise<{
  weekNumber: number;
  dailyLimit: number;
  sentToday: number;
  remainingToday: number;
  totalSent: number;
  startDate: string;
}> {
  const log = await readSendLog();
  const start = new Date(log.startDate);
  const now = new Date();
  const daysSinceStart = Math.floor((now.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
  const weekNumber = Math.floor(daysSinceStart / 7) + 1;
  const [dailyLimit, sentToday] = await Promise.all([getDailyLimit(), getSentToday()]);

  return {
    weekNumber,
    dailyLimit,
    sentToday,
    remainingToday: Math.max(0, dailyLimit - sentToday),
    totalSent: log.entries.length,
    startDate: log.startDate,
  };
}
