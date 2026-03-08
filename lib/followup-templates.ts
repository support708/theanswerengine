/**
 * Follow-up email templates (3 stages).
 * Master Prompt v9.5: Follow-up 3 has NO Calendly link (soft close only).
 * All templates match the "no pitch, just the data" tone.
 */

import type { Lead } from './types';

const SIGNATURE = `-- JB
The Answer Engine
(213) 444-2229
support@theanswerengine.ai`;

/**
 * Follow-up 1: Gentle nudge, 3 days after initial email sent.
 * Tone: Quick check-in, re-share report link.
 */
export function buildFollowUp1(lead: Lead): { subject: string; body: string } {
  const reportUrl = `https://theanswerengine.ai/blindspot/${lead.reportSlug}`;

  return {
    subject: `Re: What AI says when people ask about ${lead.serviceNiche.toLowerCase()} in ${lead.city}`,
    body: `${lead.contactFirstName},

Quick follow-up on the AI visibility report I sent over for ${lead.businessName}.

In case it got buried, here's the direct link:

${reportUrl}

The short version: when people ask AI for ${lead.serviceNiche.toLowerCase()} recommendations in ${lead.city}, ${lead.businessName} isn't showing up. The report shows exactly why and what's fixable.

Happy to walk through it on a quick call if that's easier:
https://calendly.com/theanswerengine-support/30min

Either way, the report is yours.

${SIGNATURE}`,
  };
}

/**
 * Follow-up 2: Add urgency with competitor data, 3 days after follow-up 1.
 * Tone: Competitor angle, specific data point.
 */
export function buildFollowUp2(lead: Lead): { subject: string; body: string } {
  const competitorLine = lead.competitorName
    ? `Right now, ${lead.competitorName} is the one AI recommends instead of ${lead.businessName}.`
    : `Right now, your competitors are the ones AI recommends instead of ${lead.businessName}.`;

  const reviewLine = lead.research?.reviewCount
    ? `You have ${lead.research.reviewCount} reviews. That's real credibility that AI platforms aren't seeing.`
    : `You have a strong reputation that AI platforms aren't seeing.`;

  return {
    subject: `Re: What AI says when people ask about ${lead.serviceNiche.toLowerCase()} in ${lead.city}`,
    body: `${lead.contactFirstName},

One more note on this.

${competitorLine}

${reviewLine}

This isn't a quality issue. It's a visibility issue, and it's fixable. The report I sent breaks down the specific gaps.

If you want to talk through it, I'm free this week:
https://calendly.com/theanswerengine-support/30min

No pitch. Just showing you what I found.

${SIGNATURE}`,
  };
}

/**
 * Follow-up 3: Soft close, 5 days after follow-up 2.
 * Master Prompt rule: NO Calendly link. This is the final touch.
 */
export function buildFollowUp3(lead: Lead): { subject: string; body: string } {
  return {
    subject: `Re: What AI says when people ask about ${lead.serviceNiche.toLowerCase()} in ${lead.city}`,
    body: `${lead.contactFirstName},

Last note from me on this. I know you're busy running ${lead.businessName}, so I'll keep it short.

The AI visibility data I put together for you is still available. If the timing isn't right now, no worries at all. The insights don't expire.

If anything changes or you want a second look down the road, just reply to this email.

Wishing you continued success.

${SIGNATURE}`,
  };
}

/**
 * Determine which follow-up stage a lead needs based on current status and time elapsed.
 * Returns null if no follow-up is due yet.
 */
export function getFollowUpDue(lead: Lead): 'follow_up_1' | 'follow_up_2' | 'follow_up_3' | 'no_response' | null {
  const now = Date.now();
  const lastAction = lead.actionLog[lead.actionLog.length - 1];
  if (!lastAction) return null;

  const lastActionTime = new Date(lastAction.timestamp).getTime();
  const daysSince = (now - lastActionTime) / (1000 * 60 * 60 * 24);

  switch (lead.status) {
    case 'sent':
      return daysSince >= 3 ? 'follow_up_1' : null;
    case 'follow_up_1':
      return daysSince >= 3 ? 'follow_up_2' : null;
    case 'follow_up_2':
      return daysSince >= 5 ? 'follow_up_3' : null;
    case 'follow_up_3':
      return daysSince >= 7 ? 'no_response' : null;
    default:
      return null;
  }
}

/**
 * Build the appropriate follow-up email for a lead.
 */
export function buildFollowUpEmail(lead: Lead, stage: 'follow_up_1' | 'follow_up_2' | 'follow_up_3'): { subject: string; body: string } {
  switch (stage) {
    case 'follow_up_1': return buildFollowUp1(lead);
    case 'follow_up_2': return buildFollowUp2(lead);
    case 'follow_up_3': return buildFollowUp3(lead);
  }
}
