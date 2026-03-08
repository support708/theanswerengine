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

/**
 * Build HTML email with embedded report preview image.
 * The preview image links directly to the full report.
 */
export function buildHtmlEmailBody(lead: Lead): string {
  const reportUrl = `https://theanswerengine.ai/blindspot/${lead.reportSlug}`;
  const previewUrl = `https://theanswerengine.ai/api/og/${lead.reportSlug}`;
  const calendlyUrl = 'https://calendly.com/theanswerengine-support/30min';
  const competitorLine = lead.competitorName
    ? `${lead.competitorName} does.`
    : 'other businesses do.';
  const reviewLine = lead.research?.reviewCount
    ? `This is happening despite your ${lead.research.reviewCount} five-star reviews.`
    : 'This is happening despite your strong reputation.';

  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;font-family:Georgia,serif;font-size:15px;line-height:1.6;color:#1a1a1a;background:#ffffff;">
<div style="max-width:600px;margin:0 auto;padding:32px 20px;">

<p>${lead.contactFirstName},</p>

<p>I was researching ${lead.serviceNiche.toLowerCase()} businesses in ${lead.city} this week and came across ${lead.businessName}.</p>

<p>I noticed something that may or may not affect you, but I wanted to make sure you had it on your radar.</p>

<p>When someone asks ChatGPT, Claude, or Google AI for a ${lead.serviceNiche.toLowerCase()} recommendation in ${lead.city}, <strong>${lead.businessName} doesn't come up.</strong> ${competitorLine}</p>

<p>${reviewLine}</p>

<p>I put together a short visual breakdown showing exactly what AI platforms see (and don't see) when they look at your online presence:</p>

<!--[if mso]>
<v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" href="${reportUrl}" style="width:600px;" arcsize="0%" strokecolor="transparent" fillcolor="transparent">
<v:fill type="frame" src="${previewUrl}" />
<w:anchorlock/>
<center style="font-size:0;line-height:0;">&#160;</center>
</v:roundrect>
<![endif]-->
<!--[if !mso]><!-->
<a href="${reportUrl}" target="_blank" style="display:block;text-decoration:none;margin:24px 0;">
<img src="${previewUrl}" alt="AI Visibility Report for ${lead.businessName}" width="600" style="width:100%;max-width:600px;height:auto;border-radius:8px;border:1px solid #e0e0e0;display:block;" />
</a>
<!--<![endif]-->

<p>The report is yours regardless. No strings attached.</p>

<p>I'll walk you through exactly what I found on a 30-minute Zoom. No pitch, just the data and what it means for your market. If it makes sense to talk about next steps after that, great. If not, you keep the report either way.</p>

<p><a href="${calendlyUrl}" target="_blank" style="color:#FF6A00;font-weight:bold;">Book a 30-min call</a></p>

<p style="margin-top:32px;padding-top:16px;border-top:1px solid #e0e0e0;color:#666;font-size:13px;">
-- JB<br/>
The Answer Engine<br/>
(213) 444-2229<br/>
support@theanswerengine.ai
</p>

<p style="color:#999;font-size:12px;font-style:italic;">P.S. I built this specifically for ${lead.businessName}. The insights are yours to keep whether we talk or not.</p>

</div>
</body>
</html>`;
}
