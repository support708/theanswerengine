/**
 * Gmail draft creation.
 * Uses the Gmail MCP server connected to Claude Code.
 * In the API route, we call the MCP tool directly.
 * This module provides the email template and formatting.
 */

import type { Lead } from './types';

export function buildEmailSubject(lead: Lead): string {
  return `What AI says when people ask about ${lead.serviceNiche.toLowerCase()} in ${lead.city}`;
}

export function buildEmailBody(lead: Lead): string {
  const reportUrl = `https://theanswerengine.ai/blindspot/${lead.reportSlug}`;
  const competitorLine = lead.competitorName
    ? `${lead.competitorName} does.`
    : 'other businesses do.';

  const reviewLine = lead.research?.reviewCount
    ? `This is happening despite your ${lead.research.reviewCount} five-star reviews.`
    : 'This is happening despite your strong reputation.';

  return `${lead.contactFirstName},

I was researching ${lead.serviceNiche.toLowerCase()} businesses in ${lead.city} this week and came across ${lead.businessName}.

I noticed something that may or may not affect you, but I wanted to make sure you had it on your radar.

When someone asks ChatGPT, Claude, or Google AI for a ${lead.serviceNiche.toLowerCase()} recommendation in ${lead.city}, ${lead.businessName} doesn't come up. ${competitorLine}

${reviewLine}

I put together a short visual breakdown showing exactly what AI platforms see (and don't see) when they look at your online presence:

${reportUrl}

The report is yours regardless. No strings attached.

I'll walk you through exactly what I found on a 30-minute Zoom. No pitch, just the data and what it means for your market. If it makes sense to talk about next steps after that, great. If not, you keep the report either way.

Book a 30-min call: https://calendly.com/theanswerengine-support/30min

-- JB
The Answer Engine
(213) 444-2229
support@theanswerengine.ai

P.S. I built this specifically for ${lead.businessName}. The insights are yours to keep whether we talk or not.`;
}
