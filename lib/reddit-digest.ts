/**
 * Reddit Opportunity Digest — Email Builder & Smart Batching
 *
 * Builds branded HTML email digests for clients with their Reddit opportunities.
 * Smart batching: send when 3+ opportunities accumulate OR 7+ days since last digest.
 * Never sends empty digests.
 *
 * Uses existing gmail-api.ts sendGmailMessage() for delivery.
 * Respects domain warmup rate limits via email-scheduler.ts canSendToday().
 */

import { sendGmailMessage } from './gmail-api';
import { canSendToday } from './email-scheduler';
import { sendMessage } from './telegram';
import { loadClientProfile } from './reddit-keywords';
import {
  readRedditState,
  readOpportunities,
  writeOpportunities,
  writeRedditState,
  getUnsentOpportunities,
  recordDigestSent,
} from './reddit-state';
import type { RedditOpportunity, ClientProfile, DigestCronResult } from './reddit-types';

const MIN_OPPORTUNITIES_FOR_BATCH = 3;
const MAX_DAYS_BETWEEN_DIGESTS = 7;

/**
 * Check all clients for pending opportunities and send digests where triggered.
 */
export async function checkAndSendDigests(): Promise<DigestCronResult> {
  const result: DigestCronResult = {
    success: true,
    sent: [],
    skipped: [],
    errors: [],
  };

  const state = await readRedditState();
  const store = await readOpportunities();

  // Group unsent opportunities by client
  const clientSlugs = new Set(
    store.opportunities
      .filter(opp => opp.digestSentAt === null)
      .map(opp => opp.clientSlug),
  );

  for (const clientSlug of clientSlugs) {
    try {
      const unsent = getUnsentOpportunities(store, clientSlug);
      if (unsent.length === 0) {
        result.skipped.push(clientSlug);
        continue;
      }

      // Check smart batching conditions
      const lastDigest = state.lastDigestByClient[clientSlug];
      const daysSinceLastDigest = lastDigest
        ? (Date.now() - new Date(lastDigest).getTime()) / (1000 * 60 * 60 * 24)
        : Infinity;

      const shouldSend =
        unsent.length >= MIN_OPPORTUNITIES_FOR_BATCH ||
        (daysSinceLastDigest >= MAX_DAYS_BETWEEN_DIGESTS && unsent.length >= 1);

      if (!shouldSend) {
        result.skipped.push(clientSlug);
        continue;
      }

      // Check domain warmup rate limit
      const sendStatus = await canSendToday();
      if (!sendStatus.allowed) {
        result.skipped.push(clientSlug);
        result.errors.push(`${clientSlug}: daily send limit reached (${sendStatus.sent}/${sendStatus.limit})`);
        continue;
      }

      // Load client profile for email address and business details
      const profile = await loadClientProfile(clientSlug);
      if (!profile) {
        result.errors.push(`${clientSlug}: profile not found`);
        continue;
      }

      const email = profile.engagement.contact_email;
      if (!email || email === 'REQUIRED' || email === 'VERIFY') {
        result.errors.push(`${clientSlug}: no valid contact email`);
        continue;
      }

      // Sort by composite score descending
      const sorted = [...unsent].sort((a, b) => b.score.composite - a.score.composite);

      // Build and send the digest email
      const { subject, body, htmlBody } = buildDigestEmail(sorted, profile);

      const emailResult = await sendGmailMessage({ to: email, subject, body, htmlBody });

      if (!emailResult) {
        result.errors.push(`${clientSlug}: Gmail API not configured`);
        continue;
      }

      // Mark opportunities as sent
      const now = new Date().toISOString();
      for (const opp of unsent) {
        opp.digestSentAt = now;
        opp.status = 'digest_sent';
      }

      // Update state
      state.lastDigestByClient[clientSlug] = now;
      recordDigestSent(state, clientSlug);

      result.sent.push({ clientSlug, count: unsent.length });

      // Notify Justin via Telegram
      try {
        await sendMessage(
          `<b>Reddit Digest Sent</b>\n` +
          `Client: ${profile.business.dba || profile.business.legal_name}\n` +
          `Opportunities: ${unsent.length}\n` +
          `Sent to: ${email}`,
        );
      } catch {
        // Non-blocking
      }
    } catch (err) {
      const errMsg = err instanceof Error ? err.message : 'Unknown error';
      result.errors.push(`${clientSlug}: ${errMsg}`);
    }
  }

  // Persist updates
  await writeOpportunities(store);
  await writeRedditState(state);

  return result;
}

/**
 * Build the email digest for a client.
 */
function buildDigestEmail(
  opportunities: RedditOpportunity[],
  profile: ClientProfile,
): { subject: string; body: string; htmlBody: string } {
  const businessName = profile.business.dba || profile.business.legal_name;
  const count = opportunities.length;
  const highCount = opportunities.filter(o => o.score.businessImpact === 'high').length;
  const medCount = opportunities.filter(o => o.score.businessImpact === 'medium').length;
  const lowCount = opportunities.filter(o => o.score.businessImpact === 'low').length;

  const dateRange = getDateRange(opportunities);

  // Subject line
  const subject = `${count} Reddit Opportunities This Week - ${businessName}`;

  // Plain text body
  const body = buildPlainTextDigest(opportunities, businessName, dateRange, highCount, medCount, lowCount);

  // HTML body
  const htmlBody = buildHtmlDigest(opportunities, businessName, dateRange, highCount, medCount, lowCount);

  return { subject, body, htmlBody };
}

/**
 * Build plain text email fallback.
 */
function buildPlainTextDigest(
  opportunities: RedditOpportunity[],
  businessName: string,
  dateRange: string,
  highCount: number,
  medCount: number,
  lowCount: number,
): string {
  let text = `Reddit Opportunities for ${businessName}\n`;
  text += `${dateRange}\n\n`;
  text += `${opportunities.length} opportunities found\n`;
  text += `High Impact: ${highCount} | Medium: ${medCount} | Low: ${lowCount}\n\n`;
  text += `---\n\n`;

  for (const opp of opportunities) {
    const impact = opp.score.businessImpact.toUpperCase();
    text += `[${impact} IMPACT] Score: ${opp.score.composite}/10\n`;
    text += `r/${opp.subreddit}: ${opp.title}\n`;
    text += `Why this matters: ${opp.score.impactReasoning}\n`;
    text += `Suggested response: ${opp.score.suggestedAngle}\n`;
    text += `Link: ${opp.postUrl}\n\n`;
  }

  text += `---\n`;
  text += `Curated by The Answer Engine | theanswerengine.ai\n`;
  text += `These opportunities were identified using AI-powered monitoring of Reddit discussions relevant to your business.\n`;

  return text;
}

/**
 * Build HTML email digest with branding.
 */
function buildHtmlDigest(
  opportunities: RedditOpportunity[],
  businessName: string,
  dateRange: string,
  highCount: number,
  medCount: number,
  lowCount: number,
): string {
  const opportunityCards = opportunities.map(opp => {
    const impactColor = opp.score.businessImpact === 'high' ? '#FF6A00'
      : opp.score.businessImpact === 'medium' ? '#2196F3'
      : '#9E9E9E';

    const impactLabel = opp.score.businessImpact.charAt(0).toUpperCase() + opp.score.businessImpact.slice(1);
    const postedAgo = getTimeAgoFromISO(opp.discoveredAt);

    return `
    <div style="border-left: 4px solid ${impactColor}; padding: 16px; margin: 16px 0; background: #ffffff; border-radius: 0 4px 4px 0;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
        <span style="font-weight: bold; color: ${impactColor}; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">${impactLabel} Impact</span>
        <span style="color: #666; font-size: 13px;">Score: ${opp.score.composite}/10</span>
      </div>
      <h3 style="margin: 4px 0 8px 0; font-size: 16px; line-height: 1.4;">
        <a href="${opp.postUrl}" style="color: #1a1a1a; text-decoration: none;">${escapeHtml(opp.title)}</a>
      </h3>
      <p style="color: #888; font-size: 13px; margin: 0 0 12px 0;">
        r/${escapeHtml(opp.subreddit)} &bull; ${opp.score.buyingIntent >= 7 ? 'Active buyer' : opp.score.buyingIntent >= 4 ? 'Exploring options' : 'General discussion'} &bull; ${postedAgo}
      </p>
      <p style="color: #333; font-size: 14px; margin: 0 0 8px 0;">
        <strong>Why this matters:</strong> ${escapeHtml(opp.score.impactReasoning)}
      </p>
      <p style="color: #333; font-size: 14px; margin: 0 0 12px 0;">
        <strong>Suggested response:</strong> ${escapeHtml(opp.score.suggestedAngle)}
      </p>
      <a href="${opp.postUrl}" style="display: inline-block; padding: 8px 16px; background: ${impactColor}; color: #ffffff; text-decoration: none; border-radius: 4px; font-size: 13px; font-weight: bold;">View on Reddit</a>
    </div>`;
  }).join('');

  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin: 0; padding: 0; background: #f4f4f4; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
  <div style="max-width: 600px; margin: 0 auto; background: #ffffff;">

    <!-- Header -->
    <div style="background: #FF6A00; padding: 24px 24px 20px 24px; text-align: center;">
      <h1 style="color: #ffffff; margin: 0 0 4px 0; font-size: 22px; font-weight: 700;">Your Reddit Opportunities</h1>
      <p style="color: rgba(255,255,255,0.85); margin: 0; font-size: 14px;">${escapeHtml(dateRange)}</p>
    </div>

    <!-- Summary -->
    <div style="padding: 20px 24px; background: #f8f8f8; border-bottom: 1px solid #eee;">
      <p style="margin: 0 0 4px 0; font-size: 16px; color: #333;">
        <strong>${opportunities.length} opportunities</strong> found across Reddit for <strong>${escapeHtml(businessName)}</strong>
      </p>
      <p style="margin: 0; font-size: 14px; color: #666;">
        <span style="color: #FF6A00; font-weight: bold;">${highCount} High</span> &bull;
        <span style="color: #2196F3; font-weight: bold;">${medCount} Medium</span> &bull;
        <span style="color: #9E9E9E; font-weight: bold;">${lowCount} Low</span> Impact
      </p>
    </div>

    <!-- Opportunity Cards -->
    <div style="padding: 8px 24px;">
      ${opportunityCards}
    </div>

    <!-- Tips Section -->
    <div style="padding: 20px 24px; background: #f8f8f8; border-top: 1px solid #eee;">
      <h3 style="margin: 0 0 8px 0; font-size: 14px; color: #333;">Tips for Responding</h3>
      <ul style="margin: 0; padding-left: 20px; color: #666; font-size: 13px; line-height: 1.6;">
        <li>Be genuinely helpful first. Answer the question before mentioning your business.</li>
        <li>Share specific expertise and real experience.</li>
        <li>Avoid direct self-promotion. Let your knowledge speak for itself.</li>
        <li>Respond within 24 hours for maximum visibility.</li>
      </ul>
    </div>

    <!-- Footer -->
    <div style="padding: 20px 24px; text-align: center; border-top: 1px solid #eee;">
      <p style="margin: 0 0 4px 0; color: #999; font-size: 12px;">
        Curated by <a href="https://theanswerengine.ai" style="color: #FF6A00; text-decoration: none;">The Answer Engine</a>
      </p>
      <p style="margin: 0; color: #bbb; font-size: 11px;">
        AI-powered monitoring of Reddit discussions relevant to your business.
      </p>
    </div>

  </div>
</body>
</html>`;
}

// ===== Helpers =====

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function getDateRange(opportunities: RedditOpportunity[]): string {
  if (opportunities.length === 0) return '';

  const dates = opportunities.map(o => new Date(o.discoveredAt));
  const earliest = new Date(Math.min(...dates.map(d => d.getTime())));
  const latest = new Date(Math.max(...dates.map(d => d.getTime())));

  const fmt = (d: Date) => d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

  if (fmt(earliest) === fmt(latest)) return fmt(earliest);
  return `${fmt(earliest)} - ${fmt(latest)}`;
}

function getTimeAgoFromISO(isoString: string): string {
  const diffMs = Date.now() - new Date(isoString).getTime();
  const hours = Math.floor(diffMs / (1000 * 60 * 60));

  if (hours < 1) return 'Just now';
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days === 1) return '1 day ago';
  return `${days} days ago`;
}

/**
 * Build a Telegram monthly summary message.
 */
export function buildMonthlySummary(
  month: string,
  totalScanned: number,
  totalQualified: number,
  byClient: Record<string, { opportunities: number; highImpact: number; mediumImpact: number; lowImpact: number; digestsSent: number }>,
): string {
  const monthLabel = new Date(month + '-01').toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  let msg = `<b>Reddit Monitor - Monthly Summary</b>\n`;
  msg += `${monthLabel}\n\n`;
  msg += `Total scanned: ${totalScanned.toLocaleString()} posts\n`;
  msg += `Total qualified (score >= 6): ${totalQualified}\n\n`;

  for (const [slug, stats] of Object.entries(byClient)) {
    msg += `<b>${slug}</b>: ${stats.opportunities} opportunities `;
    msg += `(${stats.highImpact} high, ${stats.mediumImpact} medium, ${stats.lowImpact} low)\n`;
    msg += `Digests sent: ${stats.digestsSent}\n\n`;
  }

  return msg.trim();
}
