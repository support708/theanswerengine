/**
 * Fabrication Scan 2.0 — Pre-send gate for all outbound client emails.
 *
 * Every client-facing send should route through sendGmailMessageGated().
 * The scanner finds numerical/statistical claims in the email body that are
 * not backed by the caller-supplied verifiedFacts pool. If unverified claims
 * are detected in strict mode, the email is held as a Gmail draft and Justin
 * gets a Telegram alert with the flagged phrases.
 *
 * This extends lib/fabrication-scan.ts (which was blog-focused) with email-
 * specific patterns: position ranks, GSC-style counts, score claims, rank
 * deltas, and citation softeners ("studies show", etc.).
 *
 * Design rules obeyed:
 * - Every client-facing send is gated (cardinal-rule protection for trust).
 * - Justin gets raw truth via Telegram; client never sees a hold.
 * - Over-flag is recoverable (Justin edits draft, sends). Under-flag is not.
 *   Err toward over-flagging.
 */

import {
  createGmailDraft,
  sendGmailMessageWithRetry,
  isGmailConfigured,
} from './gmail-api';
import { sendMessage } from './telegram';

export interface EmailFabricationFlag {
  pattern: string;
  match: string;
  context: string;
}

export interface EmailScanResult {
  clean: boolean;
  flags: EmailFabricationFlag[];
}

export interface GatedSendOptions {
  to: string;
  subject: string;
  body: string;
  htmlBody?: string;
  from?: string;
  threadId?: string;
  /**
   * Pool of strings containing facts the caller has verified. A flagged
   * phrase passes the gate if it appears (normalized) inside any verifiedFact.
   * Callers should include the raw output of research/GSC pulls/audit data
   * that the email body was derived from.
   */
  verifiedFacts: string[];
  /**
   * strict=true  (default)  — flagged unverified claims HOLD the send as a
   *                            draft and ping Justin.
   * strict=false            — scan runs, flags are logged to Telegram, send
   *                            proceeds anyway. Use for narrative-only
   *                            follow-ups that legitimately contain no stats.
   */
  strict?: boolean;
  /** Short client label for Telegram context (e.g. 'lovery', 'lamh'). */
  clientSlug?: string;
  /** Human-readable surface label (e.g. 'Monday Brief', 'Follow-up 2'). */
  context?: string;
}

export interface GatedSendResult {
  held: boolean;
  reason?: string;
  flags: EmailFabricationFlag[];
  messageId?: string;
  threadId?: string;
  draftId?: string;
}

/**
 * High-signal patterns for outbound email scanning. Each pattern targets a
 * claim type the caller must either verify via verifiedFacts or strip.
 *
 * Kept intentionally narrow — we want stat-shaped claims, not every digit in
 * a phone number or address.
 */
const EMAIL_FABRICATION_PATTERNS: { name: string; pattern: RegExp }[] = [
  { name: 'percentage',          pattern: /\b\d+(?:\.\d+)?\s*%/g },
  { name: 'dollar amount',       pattern: /\$[\d,]+(?:\.\d+)?/g },
  { name: 'score claim',         pattern: /\b\d+\s*\/\s*\d{2,3}\b/g },
  { name: 'large number',        pattern: /\b\d{1,3}(?:,\d{3})+\b/g },
  { name: 'position rank',       pattern: /\bpos(?:ition)?\s*#?\s*\d+/gi },
  { name: 'rank hash',           pattern: /#\d{1,3}\b/g },
  { name: 'rank delta',          pattern: /\b\d+\s*(?:→|->|to)\s*\d+\b/g },
  { name: 'count with unit',     pattern: /\b\d{2,}\s+(?:impressions?|clicks?|queries|keywords?|leads?|subscribers?|customers?|visitors?|articles?|posts?|mentions?|citations?|followers?|reviews?|rankings?|pages?)\b/gi },
  { name: 'multiplier',          pattern: /\b\d+(?:\.\d+)?x\b/gi },
  { name: 'out of N',            pattern: /\b\d+\s+out of\s+\d+\b/gi },
  { name: 'citation softener',   pattern: /\b(?:studies show|research indicates|according to recent|industry experts|a recent survey|statistics show|reports indicate|data shows)\b/gi },
];

/**
 * Normalize a string for fuzzy substring matching against verifiedFacts.
 * - lowercase
 * - strip thousands separators from digit groups (1,144 → 1144)
 * - collapse whitespace
 */
function normalize(s: string): string {
  return s
    .toLowerCase()
    .replace(/(\d),(\d)/g, '$1$2')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Strip HTML tags and common entities so the scanner sees the reader's text.
 */
function stripHtml(html: string): string {
  return html
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/&[a-z]+;/gi, ' ')
    .replace(/\s+/g, ' ')
    // Normalize "X /Y" → "X/Y" (HTML tag strip often leaves a space before /100)
    .replace(/(\d)\s+\/\s*(\d)/g, '$1/$2')
    .trim();
}

/**
 * Extract a short snippet around a match for Telegram context.
 */
function contextAround(haystack: string, match: string): string {
  const idx = haystack.toLowerCase().indexOf(match.toLowerCase());
  if (idx < 0) return '';
  const start = Math.max(0, idx - 30);
  const end = Math.min(haystack.length, idx + match.length + 30);
  return (start > 0 ? '…' : '') + haystack.slice(start, end).trim() + (end < haystack.length ? '…' : '');
}

/**
 * Scan an email for fabricated/unverified numerical claims.
 */
export function scanEmailForFabrication(opts: {
  subject: string;
  htmlBody?: string;
  textBody?: string;
  verifiedFacts: string[];
}): EmailScanResult {
  const subjectText = opts.subject || '';
  const htmlText = opts.htmlBody ? stripHtml(opts.htmlBody) : '';
  const plainText = opts.textBody || '';
  const scanText = `${subjectText}\n${plainText}\n${htmlText}`.replace(/\s+/g, ' ');

  const normalizedVerified = opts.verifiedFacts.map(normalize).filter(Boolean);
  const flags: EmailFabricationFlag[] = [];
  const seenPairs = new Set<string>();

  for (const { name, pattern } of EMAIL_FABRICATION_PATTERNS) {
    const matches = scanText.match(pattern);
    if (!matches) continue;
    for (const rawMatch of matches) {
      const normalizedMatch = normalize(rawMatch);
      if (!normalizedMatch) continue;

      const verified = normalizedVerified.some(v => v.includes(normalizedMatch));
      if (verified) continue;

      const dedupeKey = `${name}|${normalizedMatch}`;
      if (seenPairs.has(dedupeKey)) continue;
      seenPairs.add(dedupeKey);

      flags.push({
        pattern: name,
        match: rawMatch.trim(),
        context: contextAround(scanText, rawMatch),
      });
    }
  }

  return { clean: flags.length === 0, flags };
}

function summarizeFlagsForTelegram(flags: EmailFabricationFlag[]): string {
  const top = flags.slice(0, 8);
  const lines = top.map(f => `  • [${f.pattern}] "${f.match}"`);
  const overflow = flags.length > top.length ? `\n  …and ${flags.length - top.length} more` : '';
  return lines.join('\n') + overflow;
}

/**
 * Gated Gmail send. Runs fabrication scan pre-send. In strict mode (default),
 * flagged sends are held as drafts and Justin is pinged via Telegram.
 *
 * Drop-in replacement for sendGmailMessageWithRetry() for any client-facing
 * email. Internal/Justin-only sends can bypass by using the raw API.
 */
export async function sendGmailMessageGated(
  options: GatedSendOptions,
): Promise<GatedSendResult> {
  const strict = options.strict !== false;
  const verifiedFacts = options.verifiedFacts || [];
  const contextLabel = options.context || 'outbound email';
  const clientLabel = options.clientSlug || 'unknown';

  const scan = scanEmailForFabrication({
    subject: options.subject,
    htmlBody: options.htmlBody,
    textBody: options.body,
    verifiedFacts,
  });

  // Global kill-switch: nothing auto-sends to clients until Justin flips
  // AUTO_SEND_ENABLED=true. Pre-email-outreach-audit safety lock.
  const autoSendAllowed = process.env.AUTO_SEND_ENABLED === 'true';

  if (scan.clean && autoSendAllowed) {
    const sent = await sendGmailMessageWithRetry({
      to: options.to,
      subject: options.subject,
      body: options.body,
      htmlBody: options.htmlBody,
      from: options.from,
      threadId: options.threadId,
    });
    return {
      held: false,
      flags: [],
      messageId: sent.messageId,
      threadId: sent.threadId,
    };
  }

  if (scan.clean && !autoSendAllowed) {
    if (!isGmailConfigured()) {
      return {
        held: true,
        reason: 'AUTO_SEND_ENABLED is off and Gmail is not configured.',
        flags: [],
      };
    }
    const draft = await createGmailDraft({
      to: options.to,
      subject: `[DRAFT ONLY — clean scan] ${options.subject}`,
      body: options.body,
      htmlBody: options.htmlBody,
      from: options.from,
    });
    try {
      await sendMessage(
        `📝 <b>Draft Created (auto-send off)</b>\n` +
        `Client: ${clientLabel}\n` +
        `Context: ${contextLabel}\n` +
        `To: ${options.to}\n` +
        `Subject: ${options.subject}\n\n` +
        `Fabrication scan: CLEAN. Draft ready for your review/send in Gmail.`,
      );
    } catch { /* non-blocking */ }
    return {
      held: true,
      reason: 'AUTO_SEND_ENABLED is off; draft created for manual review.',
      flags: [],
      draftId: draft?.draftId,
    };
  }

  if (!strict && autoSendAllowed) {
    const sent = await sendGmailMessageWithRetry({
      to: options.to,
      subject: options.subject,
      body: options.body,
      htmlBody: options.htmlBody,
      from: options.from,
      threadId: options.threadId,
    });
    try {
      await sendMessage(
        `ℹ️ <b>Fabrication Scan (non-strict)</b>\n` +
        `Client: ${clientLabel}\n` +
        `Context: ${contextLabel}\n` +
        `To: ${options.to}\n` +
        `Subject: ${options.subject}\n\n` +
        `Sent with ${scan.flags.length} unverified phrase${scan.flags.length === 1 ? '' : 's'}:\n` +
        summarizeFlagsForTelegram(scan.flags),
      );
    } catch { /* non-blocking */ }
    return {
      held: false,
      flags: scan.flags,
      messageId: sent.messageId,
      threadId: sent.threadId,
    };
  }

  // Strict + flagged → HOLD as draft, ping Justin.
  if (!isGmailConfigured()) {
    return {
      held: true,
      reason: 'Gmail not configured; cannot create hold draft.',
      flags: scan.flags,
    };
  }

  const holdSubject = `[HOLD — ${scan.flags.length} UNVERIFIED CLAIM${scan.flags.length === 1 ? '' : 'S'}] ${options.subject}`;
  const draft = await createGmailDraft({
    to: options.to,
    subject: holdSubject,
    body: options.body,
    htmlBody: options.htmlBody,
    from: options.from,
  });

  try {
    await sendMessage(
      `⚠️ <b>Fabrication Scan HOLD</b>\n` +
      `Client: ${clientLabel}\n` +
      `Context: ${contextLabel}\n` +
      `To: ${options.to}\n` +
      `Subject: ${options.subject}\n\n` +
      `<b>Unverified claims (${scan.flags.length}):</b>\n` +
      summarizeFlagsForTelegram(scan.flags) +
      `\n\n<b>Action:</b> Review draft "${holdSubject.slice(0, 80)}" in Gmail; edit or approve before sending.`,
    );
  } catch { /* non-blocking */ }

  return {
    held: true,
    reason: `${scan.flags.length} unverified claim${scan.flags.length === 1 ? '' : 's'} detected; drafted for review.`,
    flags: scan.flags,
    draftId: draft?.draftId,
  };
}
