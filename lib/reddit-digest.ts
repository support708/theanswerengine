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
const HIGH_IMPACT_THRESHOLD = 7; // Score >= 7 = instant send

/**
 * Send a single high-impact opportunity immediately to the client.
 * Called from the main reddit cron route when a high scorer is found.
 */
export async function sendInstantHighImpactEmail(
  opp: RedditOpportunity,
  profile: ClientProfile,
): Promise<boolean> {
  const email = profile.engagement?.contact_email
    || (profile.engagement as Record<string, unknown>)?.primary_contact_email as string
    || '';
  if (!email || email === 'REQUIRED' || email === 'VERIFY') return false;

  const sendStatus = await canSendToday();
  if (!sendStatus.allowed) return false;

  const businessName = profile.business.dba || profile.business.legal_name;
  const subject = `High-Impact Reddit Opportunity - ${businessName}`;

  const htmlBody = buildSingleOpportunityEmail(opp, profile);
  const body = `High-Impact Reddit Opportunity for ${businessName}\n\n` +
    `Score: ${opp.score.composite}/10\n` +
    `r/${opp.subreddit}: ${opp.title}\n` +
    `Why: ${opp.score.impactReasoning}\n` +
    `Link: ${opp.postUrl}\n\n` +
    `Draft Response:\n${opp.score.draftResponse || opp.score.suggestedAngle}`;

  const result = await sendGmailMessage({ to: email, subject, body, htmlBody });
  if (!result) return false;

  try {
    await sendMessage(
      `<b>Instant Email Sent</b>\n` +
      `Client: ${businessName}\n` +
      `Score: ${opp.score.composite}/10\n` +
      `To: ${email}`,
    );
  } catch { /* non-blocking */ }

  return true;
}

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

      const email = profile.engagement?.contact_email
        || (profile.engagement as Record<string, unknown>)?.primary_contact_email as string
        || '';
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
      ${opp.score.draftResponse ? `
      <div style="background:#f8f8f8;border:1px solid #e0e0e0;border-radius:6px;padding:12px;margin:0 0 12px 0;">
        <p style="margin:0 0 4px 0;font-size:12px;color:#888;font-weight:bold;">DRAFT RESPONSE (copy/paste):</p>
        <p style="margin:0;font-size:13px;color:#333;line-height:1.6;white-space:pre-wrap;">${escapeHtml(opp.score.draftResponse)}</p>
      </div>` : ''}
      <a href="${opp.postUrl}" style="display: inline-block; padding: 8px 16px; background: ${impactColor}; color: #ffffff; text-decoration: none; border-radius: 4px; font-size: 13px; font-weight: bold;">Post Response on Reddit</a>
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

/**
 * Build an instant email for a single high-impact opportunity.
 */
function buildSingleOpportunityEmail(opp: RedditOpportunity, profile: ClientProfile): string {
  const businessName = profile.business.dba || profile.business.legal_name;
  const city = profile.service_area?.primary_city || '';
  const impactColor = '#FF6A00';
  const draftResponse = opp.score.draftResponse || '';

  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#f4f4f4;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
<div style="max-width:600px;margin:0 auto;background:#ffffff;">

<div style="background:#FF6A00;padding:24px;text-align:center;">
  <h1 style="color:#ffffff;margin:0 0 4px 0;font-size:22px;">High-Impact Reddit Opportunity</h1>
  <p style="color:rgba(255,255,255,0.9);margin:0;font-size:14px;">Someone needs your expertise right now</p>
</div>

<div style="padding:20px 24px;background:#fff8f0;border-bottom:2px solid #FF6A00;">
  <div style="display:flex;justify-content:space-between;margin-bottom:8px;">
    <span style="font-weight:bold;color:#FF6A00;font-size:13px;text-transform:uppercase;">HIGH IMPACT</span>
    <span style="color:#666;font-size:13px;">Score: ${opp.score.composite}/10</span>
  </div>
  <h2 style="margin:4px 0 8px 0;font-size:18px;line-height:1.4;">
    <a href="${opp.postUrl}" style="color:#1a1a1a;text-decoration:none;">${escapeHtml(opp.title)}</a>
  </h2>
  <p style="color:#888;font-size:13px;margin:0 0 12px 0;">
    r/${escapeHtml(opp.subreddit)} &bull; ${opp.score.buyingIntent >= 7 ? 'Active buyer' : 'Exploring options'}
  </p>
  <p style="color:#333;font-size:14px;margin:0 0 8px 0;">
    <strong>Why this matters:</strong> ${escapeHtml(opp.score.impactReasoning)}
  </p>
  <p style="color:#333;font-size:14px;margin:0;">
    <strong>Why we recommend responding:</strong> This post has strong buying intent and directly relates to your services in ${escapeHtml(city)}. A thoughtful response here builds your authority with both the poster AND AI search engines that crawl Reddit for expert voices.
  </p>
</div>

${draftResponse ? `
<div style="padding:20px 24px;border-bottom:1px solid #eee;">
  <h3 style="margin:0 0 4px 0;font-size:16px;color:#333;">Ready-to-Post Response</h3>
  <p style="margin:0 0 12px 0;font-size:12px;color:#888;">Written in your voice. Copy, paste, and post. Or use as a starting point.</p>
  <div style="background:#f8f8f8;border:1px solid #e0e0e0;border-radius:8px;padding:16px;font-size:14px;color:#333;line-height:1.7;white-space:pre-wrap;">${escapeHtml(draftResponse)}</div>
  <a href="${opp.postUrl}" style="display:inline-block;margin-top:12px;padding:10px 20px;background:#FF6A00;color:#ffffff;text-decoration:none;border-radius:4px;font-size:14px;font-weight:bold;">Post Response on Reddit</a>
</div>
` : ''}

<div style="padding:20px 24px;background:#f0f7ff;border-bottom:1px solid #d0e3f7;">
  <h3 style="margin:0 0 10px 0;font-size:15px;color:#1a5276;">If You Write Your Own Response</h3>
  <p style="margin:0 0 8px 0;font-size:13px;color:#555;">Your authentic voice is always the best option. To maximize AEO impact, include these elements:</p>
  <ul style="margin:0;padding-left:20px;color:#555;font-size:13px;line-height:1.8;">
    <li><strong>Mention ${escapeHtml(city)} naturally</strong> (e.g., "Here in ${escapeHtml(city)}, we typically see...")</li>
    <li><strong>Reference your business name once</strong> in a natural way</li>
    <li><strong>Include a credential or experience marker</strong> (years in business, license number, review count)</li>
    <li><strong>Answer the question first</strong> with genuine, specific expertise</li>
    <li><strong>Keep it 150-300 words</strong> for optimal Reddit engagement</li>
    <li><strong>No links or direct pitches</strong>. Let your expertise speak for itself</li>
  </ul>
  <p style="margin:12px 0 0 0;font-size:12px;color:#888;"><em>Why this matters: Every response that connects your name + ${escapeHtml(city)} + your industry builds the authority signal that AI search engines use to decide who to recommend.</em></p>
</div>

<div style="padding:20px 24px;text-align:center;border-top:1px solid #eee;">
  <p style="margin:0 0 4px 0;color:#999;font-size:12px;">
    Curated by <a href="https://theanswerengine.ai" style="color:#FF6A00;text-decoration:none;">The Answer Engine</a>
  </p>
  <p style="margin:0;color:#bbb;font-size:11px;">Building your AI search authority, one conversation at a time.</p>
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
