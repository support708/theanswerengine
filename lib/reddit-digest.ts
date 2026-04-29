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
import { htmlWrap } from './gmail';
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

  const innerHtml = buildSingleOpportunityEmail(opp, profile);
  const htmlBody = htmlWrap(innerHtml, 'light');
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

      const emailResult = await sendGmailMessage({ to: email, subject, body, htmlBody: htmlWrap(htmlBody, 'light') });

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
 * Build inner HTML for Reddit digest (body content only, no doc structure).
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
    const impactColor = opp.score.businessImpact === 'high' ? '#F27D24'
      : opp.score.businessImpact === 'medium' ? '#2196F3'
      : '#9E9E9E';

    const impactLabel = opp.score.businessImpact.charAt(0).toUpperCase() + opp.score.businessImpact.slice(1);
    const postedAgo = getTimeAgoFromISO(opp.discoveredAt);

    return `
    <div style="border-left: 4px solid ${impactColor}; padding: 16px 18px; margin: 14px 0; background: #fafafa;">
      <div style="margin-bottom: 8px;">
        <span style="font-weight: bold; color: ${impactColor}; font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em;">${impactLabel} Impact</span>
        <span style="color: #777; font-size: 12px; margin-left: 10px;">Score: ${opp.score.composite}/10</span>
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

  return `
<h2 style="margin:0 0 6px 0;font-size:22px;line-height:1.15;color:#1a1a1a;font-family:'Space Grotesk','Inter','Helvetica Neue',Arial,sans-serif;font-weight:900;letter-spacing:-0.02em;text-transform:uppercase;">Reddit Opportunities</h2>
<p style="margin:0 0 6px 0;color:#555;font-size:15px;"><strong>${opportunities.length} opportunities</strong> found for <strong>${escapeHtml(businessName)}</strong> &mdash; ${escapeHtml(dateRange)}</p>
<p style="margin:0 0 22px 0;font-size:13px;color:#666;">
  <span style="color:#F27D24;font-weight:bold;">${highCount} High</span> &bull;
  <span style="color:#2196F3;font-weight:bold;">${medCount} Medium</span> &bull;
  <span style="color:#9E9E9E;font-weight:bold;">${lowCount} Low</span> Impact
</p>

${opportunityCards}

<div style="background:#fafafa;padding:18px 20px;margin-top:28px;border-left:3px solid #F27D24;">
  <h3 style="margin:0 0 10px 0;font-size:14px;color:#1a1a1a;font-family:'Space Grotesk','Inter','Helvetica Neue',Arial,sans-serif;font-weight:800;text-transform:uppercase;letter-spacing:0.04em;">Tips for Responding</h3>
  <ul style="margin:0;padding-left:20px;color:#555;font-size:13px;line-height:1.7;">
    <li>Be genuinely helpful first. Answer the question before mentioning your business.</li>
    <li>Share specific expertise and real experience.</li>
    <li>Avoid direct self-promotion &mdash; let your knowledge speak for itself.</li>
    <li>Respond within 24 hours for maximum visibility.</li>
  </ul>
</div>`;
}

/**
 * Build inner HTML for single opportunity email (body content only, no doc structure).
 */
function buildSingleOpportunityEmail(opp: RedditOpportunity, profile: ClientProfile): string {
  const businessName = profile.business.dba || profile.business.legal_name;
  const city = profile.service_area?.primary_city || '';
  const draftResponse = opp.score.draftResponse || '';

  return `
<h2 style="margin:0 0 6px 0;font-size:22px;line-height:1.15;color:#1a1a1a;font-family:'Space Grotesk','Inter','Helvetica Neue',Arial,sans-serif;font-weight:900;letter-spacing:-0.02em;text-transform:uppercase;">High-Impact Reddit Opportunity</h2>
<p style="margin:0 0 22px 0;color:#777;font-size:14px;">Someone needs your expertise right now${businessName ? ` &mdash; ${escapeHtml(businessName)}` : ''}</p>

<div style="border-left:4px solid #F27D24;background:#fafafa;padding:16px 18px;margin:0 0 20px 0;">
  <div style="margin-bottom:8px;">
    <span style="font-weight:bold;color:#F27D24;font-size:12px;text-transform:uppercase;letter-spacing:0.08em;">High Impact</span>
    <span style="color:#777;font-size:12px;margin-left:10px;">Score: ${opp.score.composite}/10</span>
  </div>
  <h3 style="margin:4px 0 8px 0;font-size:17px;line-height:1.4;">
    <a href="${opp.postUrl}" style="color:#1a1a1a;text-decoration:none;font-weight:700;">${escapeHtml(opp.title)}</a>
  </h3>
  <p style="color:#888;font-size:13px;margin:0 0 12px 0;">r/${escapeHtml(opp.subreddit)} &bull; ${opp.score.buyingIntent >= 7 ? 'Active buyer' : 'Exploring options'}</p>
  <p style="color:#333;font-size:14px;margin:0 0 8px 0;"><strong>Why this matters:</strong> ${escapeHtml(opp.score.impactReasoning)}</p>
  <p style="color:#333;font-size:14px;margin:0;"><strong>Why respond:</strong> Strong buying intent, directly relates to your services in ${escapeHtml(city)}. A thoughtful response builds authority with the poster AND AI search engines crawling Reddit.</p>
</div>

${draftResponse ? `
<h3 style="margin:24px 0 4px 0;font-size:16px;color:#1a1a1a;font-family:'Space Grotesk','Inter','Helvetica Neue',Arial,sans-serif;font-weight:800;">Ready-to-Post Response</h3>
<p style="margin:0 0 10px 0;font-size:12px;color:#888;">Written in your voice. Copy, paste, and post &mdash; or use as a starting point.</p>
<div style="background:#fafafa;border:1px solid #e5e7eb;padding:16px;font-size:14px;color:#333;line-height:1.7;white-space:pre-wrap;">${escapeHtml(draftResponse)}</div>
<div style="margin:14px 0 20px 0;">
  <a href="${opp.postUrl}" style="display:inline-block;background:#F27D24;color:#000000;font-family:'Space Grotesk','Inter',Arial,sans-serif;font-size:13px;font-weight:900;padding:14px 24px;text-decoration:none;letter-spacing:-0.01em;text-transform:uppercase;">Post Response on Reddit &rarr;</a>
</div>
` : ''}

<h3 style="margin:28px 0 8px 0;font-size:15px;color:#1a1a1a;font-family:'Space Grotesk','Inter','Helvetica Neue',Arial,sans-serif;font-weight:800;">If You Write Your Own Response</h3>
<p style="margin:0 0 10px 0;font-size:13px;color:#555;">Your authentic voice is always best. To maximize AEO impact, include these:</p>
<ul style="margin:0 0 12px 0;padding-left:20px;color:#555;font-size:13px;line-height:1.75;">
  <li><strong>Mention ${escapeHtml(city)} naturally</strong></li>
  <li><strong>Reference your business name once</strong>, naturally</li>
  <li><strong>Include a credential or experience marker</strong> (years, license, reviews)</li>
  <li><strong>Answer the question first</strong> with genuine, specific expertise</li>
  <li><strong>Keep it 150-300 words</strong> for optimal Reddit engagement</li>
  <li><strong>No links or direct pitches</strong> &mdash; let your expertise speak for itself</li>
</ul>
<p style="margin:0;font-size:12px;color:#888;font-style:italic;">Every response that connects your name + ${escapeHtml(city)} + your industry builds the authority signal AI search engines use to decide who to recommend.</p>`;
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
