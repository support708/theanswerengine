/**
 * Gmail email templates — v2 (research-optimized).
 *
 * Template selection:
 *   Inbound (form submission) → buildInbound*
 *   Real Estate vertical → buildRealEstate* (includes Justin case study)
 *   All other outbound → buildEmail* (generic with social proof)
 *
 * Follow-up sequence (5 emails, distinct angles):
 *   FU1 (Day 3): Fresh data point — competitor update
 *   FU2 (Day 8): Social proof — case study results
 *   FU3 (Day 16): Reframe — what inaction costs
 *   FU4 (Day 25): Breakup — final value drop, close the file
 *
 * Design principles (from 2026 cold email research):
 *   - 75-125 words per email (2.4x reply rate vs 200+)
 *   - Single CTA per email (371% more clicks)
 *   - Social proof in at least 2 of 5 emails
 *   - Each follow-up adds new value, never "just checking in"
 *   - No fake "Re:" prefixes
 *   - Plain text primary, HTML secondary
 */

import type { Lead } from './types';

const SIG = `-- JB
The Answer Engine
(213) 444-2229
support@theanswerengine.ai`;

const HTML_SIG = `<p style="margin-top:32px;padding-top:16px;border-top:1px solid #e0e0e0;color:#666;font-size:13px;">
-- JB<br/>
The Answer Engine<br/>
(213) 444-2229<br/>
support@theanswerengine.ai
</p>`;

function htmlWrap(inner: string): string {
  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;font-family:Georgia,serif;font-size:15px;line-height:1.6;color:#1a1a1a;background:#ffffff;">
<div style="max-width:600px;margin:0 auto;padding:32px 20px;">
${inner}
${HTML_SIG}
</div>
</body>
</html>`;
}

function reportImageBlock(reportUrl: string, previewUrl: string, businessName: string): string {
  return `<!--[if mso]>
<v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" href="${reportUrl}" style="width:600px;" arcsize="0%" strokecolor="transparent" fillcolor="transparent">
<v:fill type="frame" src="${previewUrl}" />
<w:anchorlock/>
<center style="font-size:0;line-height:0;">&#160;</center>
</v:roundrect>
<![endif]-->
<!--[if !mso]><!-->
<a href="${reportUrl}" target="_blank" style="display:block;text-decoration:none;margin:24px 0;">
<img src="${previewUrl}" alt="AI Visibility Report for ${businessName}" width="600" style="width:100%;max-width:600px;height:auto;border-radius:8px;border:1px solid #e0e0e0;display:block;" />
</a>
<!--<![endif]-->

<div style="text-align:center;margin:0 0 24px 0;">
<a href="${reportUrl}" target="_blank" style="display:inline-block;background:#FF6A00;color:#ffffff;font-family:Arial,sans-serif;font-size:16px;font-weight:bold;padding:14px 32px;border-radius:6px;text-decoration:none;letter-spacing:0.5px;">View Your Full Report</a>
</div>`;
}

const CALENDLY_URL = 'https://calendly.com/theanswerengine-support/30min';
const CASE_STUDY_URL = 'https://theanswerengine.ai/case-studies/justin-borges';

// ============================================================
// OUTBOUND — Generic (all verticals except real estate)
// ============================================================

export function buildEmailSubject(lead: Lead): string {
  return `What AI says when someone asks for a ${lead.serviceNiche.toLowerCase()} in ${lead.city}`;
}

export function buildEmailBody(lead: Lead): string {
  const reportUrl = `https://theanswerengine.ai/blindspot/${lead.reportSlug}`;
  const competitor = lead.competitorName || 'your competitors';

  return `${lead.contactFirstName},

When someone asks ChatGPT or Google AI for a ${lead.serviceNiche.toLowerCase()} recommendation in ${lead.city}, ${lead.businessName} doesn't come up. ${competitor} does.

I built a free AI visibility report for ${lead.businessName} showing exactly what these platforms see and miss about your online presence:

${reportUrl}

We recently helped a business go from zero AI visibility to 8,400+ monthly clicks using this same analysis as a starting point. Happy to walk you through your report on a quick call.

${CALENDLY_URL}

${SIG}`;
}

export function buildHtmlEmailBody(lead: Lead): string {
  const reportUrl = `https://theanswerengine.ai/blindspot/${lead.reportSlug}`;
  const previewUrl = `https://theanswerengine.ai/api/og/${lead.reportSlug}`;
  const competitor = lead.competitorName || 'your competitors';

  return htmlWrap(`
<p>${lead.contactFirstName},</p>

<p>When someone asks ChatGPT or Google AI for a ${lead.serviceNiche.toLowerCase()} recommendation in ${lead.city}, <strong>${lead.businessName} doesn't come up.</strong> ${competitor} does.</p>

<p>I built a free AI visibility report for ${lead.businessName} showing exactly what these platforms see and miss about your online presence:</p>

${reportImageBlock(reportUrl, previewUrl, lead.businessName)}

<p>We recently helped a business go from zero AI visibility to 8,400+ monthly clicks using this same analysis as a starting point. Happy to walk you through your report on a quick call.</p>

<p><a href="${CALENDLY_URL}" target="_blank" style="color:#FF6A00;font-weight:bold;">Book a 30-min call</a></p>`);
}

// ============================================================
// INBOUND — Form submission response
// ============================================================

export function buildInboundEmailSubject(lead: Lead): string {
  return `Your AI visibility report for ${lead.businessName}`;
}

export function buildInboundEmailBody(lead: Lead): string {
  const reportUrl = `https://theanswerengine.ai/blindspot/${lead.reportSlug}`;
  const competitor = lead.competitorName
    ? `AI platforms are recommending ${lead.competitorName} instead.`
    : 'AI platforms are pointing people toward your competitors instead.';

  return `${lead.contactFirstName},

Thanks for reaching out. I ran a full AI visibility audit on ${lead.businessName} in ${lead.city}.

The short version: when someone asks ChatGPT, Claude, or Google AI for a ${lead.serviceNiche.toLowerCase()} recommendation in your area, ${lead.businessName} is not showing up. ${competitor}

Your full report is here:

${reportUrl}

Happy to walk through the findings on a 30-minute call. No pitch, just the data.

${CALENDLY_URL}

${SIG}`;
}

export function buildInboundHtmlEmailBody(lead: Lead): string {
  const reportUrl = `https://theanswerengine.ai/blindspot/${lead.reportSlug}`;
  const previewUrl = `https://theanswerengine.ai/api/og/${lead.reportSlug}`;
  const competitor = lead.competitorName
    ? `AI platforms are recommending <strong>${lead.competitorName}</strong> instead.`
    : 'AI platforms are pointing people toward your competitors instead.';

  return htmlWrap(`
<p>${lead.contactFirstName},</p>

<p>Thanks for reaching out. I ran a full AI visibility audit on ${lead.businessName} in ${lead.city}.</p>

<p>The short version: when someone asks ChatGPT, Claude, or Google AI for a ${lead.serviceNiche.toLowerCase()} recommendation in your area, <strong>${lead.businessName} is not showing up.</strong> ${competitor}</p>

<p>Your full report is here:</p>

${reportImageBlock(reportUrl, previewUrl, lead.businessName)}

<p>Happy to walk through the findings on a 30-minute call. No pitch, just the data.</p>

<p><a href="${CALENDLY_URL}" target="_blank" style="color:#FF6A00;font-weight:bold;">Book a 30-min call</a></p>`);
}

// ============================================================
// REAL ESTATE — References Justin Borges case study
// ============================================================

export function buildRealEstateEmailSubject(lead: Lead): string {
  return `${lead.contactFirstName}, AI is sending your leads to other agents`;
}

export function buildRealEstateEmailBody(lead: Lead): string {
  const reportUrl = `https://theanswerengine.ai/blindspot/${lead.reportSlug}`;
  const competitor = lead.competitorName
    ? `When I checked, ${lead.competitorName} came up instead.`
    : 'When I checked, other agents in your market came up instead.';

  return `${lead.contactFirstName},

When someone asks ChatGPT or Google AI for a real estate agent in ${lead.city}, ${lead.businessName} is not the answer. ${competitor}

I solved this exact problem for an LA real estate team. They went from zero AI visibility to 8,400+ monthly clicks and 100% AI citation rates for their expertise queries. Full case study with verified data:

${CASE_STUDY_URL}

I also built a free visibility report specifically for ${lead.businessName}:

${reportUrl}

Happy to walk through both on a 30-minute call.

${CALENDLY_URL}

${SIG}`;
}

export function buildRealEstateHtmlEmailBody(lead: Lead): string {
  const reportUrl = `https://theanswerengine.ai/blindspot/${lead.reportSlug}`;
  const previewUrl = `https://theanswerengine.ai/api/og/${lead.reportSlug}`;
  const competitor = lead.competitorName
    ? `When I checked, <strong>${lead.competitorName}</strong> came up instead.`
    : 'When I checked, other agents in your market came up instead.';

  return htmlWrap(`
<p>${lead.contactFirstName},</p>

<p>When someone asks ChatGPT or Google AI for a real estate agent in ${lead.city}, <strong>${lead.businessName} is not the answer.</strong> ${competitor}</p>

<p>I solved this exact problem for an LA real estate team. They went from zero AI visibility to:</p>

<table style="width:100%;border-collapse:collapse;margin:16px 0;">
<tr>
<td style="text-align:center;padding:12px;background:#f8f8f8;border-radius:6px 0 0 6px;">
<div style="font-size:24px;font-weight:bold;color:#FF6A00;">8,400+</div>
<div style="font-size:12px;color:#666;">Monthly Clicks</div>
</td>
<td style="text-align:center;padding:12px;background:#f8f8f8;">
<div style="font-size:24px;font-weight:bold;color:#FF6A00;">1.1M+</div>
<div style="font-size:12px;color:#666;">Impressions</div>
</td>
<td style="text-align:center;padding:12px;background:#f8f8f8;border-radius:0 6px 6px 0;">
<div style="font-size:24px;font-weight:bold;color:#FF6A00;">100%</div>
<div style="font-size:12px;color:#666;">AI Citation Rate</div>
</td>
</tr>
</table>

<p><a href="${CASE_STUDY_URL}" target="_blank" style="color:#FF6A00;font-weight:bold;">See the full case study (verified GSC data)</a></p>

<p>I also built a free visibility report specifically for ${lead.businessName}:</p>

${reportImageBlock(reportUrl, previewUrl, lead.businessName)}

<p>Happy to walk through both on a 30-minute call.</p>

<p><a href="${CALENDLY_URL}" target="_blank" style="color:#FF6A00;font-weight:bold;">Book a 30-min call</a></p>`);
}

// ============================================================
// FOLLOW-UP 1 (Day 3) — Fresh data point: competitor update
// ============================================================

export function buildFollowUp1Subject(lead: Lead): string {
  const competitor = lead.competitorName || 'your top competitor';
  return `${competitor} is still the AI recommendation in ${lead.city}`;
}

export function buildFollowUp1Body(lead: Lead): string {
  const reportUrl = `https://theanswerengine.ai/blindspot/${lead.reportSlug}`;
  const competitor = lead.competitorName || 'your top competitor';

  return `${lead.contactFirstName},

Quick update on the AI visibility report I sent for ${lead.businessName}.

I checked again today. ${competitor} is still the top recommendation when AI platforms are asked about ${lead.serviceNiche.toLowerCase()} in ${lead.city}. ${lead.businessName} still does not appear.

The report breaks down exactly why and what to fix:

${reportUrl}

${SIG}`;
}

export function buildFollowUp1Html(lead: Lead): string {
  const reportUrl = `https://theanswerengine.ai/blindspot/${lead.reportSlug}`;
  const competitor = lead.competitorName || 'your top competitor';

  return htmlWrap(`
<p>${lead.contactFirstName},</p>

<p>Quick update on the AI visibility report I sent for ${lead.businessName}.</p>

<p>I checked again today. <strong>${competitor} is still the top recommendation</strong> when AI platforms are asked about ${lead.serviceNiche.toLowerCase()} in ${lead.city}. ${lead.businessName} still does not appear.</p>

<p>The report breaks down exactly why and what to fix:</p>

<p><a href="${reportUrl}" target="_blank" style="color:#FF6A00;font-weight:bold;">View Your AI Visibility Report</a></p>`);
}

// ============================================================
// FOLLOW-UP 2 (Day 8) — Social proof: case study results
// ============================================================

export function buildFollowUp2Subject(lead: Lead): string {
  return `How a business went from invisible to 8,400+ monthly clicks`;
}

export function buildFollowUp2Body(lead: Lead): string {
  const reportUrl = `https://theanswerengine.ai/blindspot/${lead.reportSlug}`;

  return `${lead.contactFirstName},

I wanted to share something relevant to what I found in ${lead.businessName}'s AI visibility report.

One of our clients had the same problem. Zero AI visibility in a market with 70,000+ competitors. Within 7 months they went from page 2 invisibility to 8,400+ monthly clicks and 100% AI citation rates. All verified through Google Search Console.

The starting point was the same analysis I built for you:

${reportUrl}

Worth a 30-minute conversation?

${CALENDLY_URL}

${SIG}`;
}

export function buildFollowUp2Html(lead: Lead): string {
  const reportUrl = `https://theanswerengine.ai/blindspot/${lead.reportSlug}`;

  return htmlWrap(`
<p>${lead.contactFirstName},</p>

<p>I wanted to share something relevant to what I found in ${lead.businessName}'s AI visibility report.</p>

<p>One of our clients had the same problem. Zero AI visibility in a market with 70,000+ competitors. Within 7 months they went from page 2 invisibility to <strong>8,400+ monthly clicks</strong> and <strong>100% AI citation rates</strong>. All verified through Google Search Console.</p>

<p>The starting point was the same analysis I built for you:</p>

<p><a href="${reportUrl}" target="_blank" style="color:#FF6A00;font-weight:bold;">View Your AI Visibility Report</a></p>

<p>Worth a 30-minute conversation?</p>

<p><a href="${CALENDLY_URL}" target="_blank" style="color:#FF6A00;font-weight:bold;">Book a 30-min call</a></p>`);
}

// ============================================================
// FOLLOW-UP 3 (Day 16) — Reframe: cost of inaction
// ============================================================

export function buildFollowUp3Subject(lead: Lead): string {
  return `The gap between ${lead.businessName} and AI-visible competitors is growing`;
}

export function buildFollowUp3Body(lead: Lead): string {
  const reportUrl = `https://theanswerengine.ai/blindspot/${lead.reportSlug}`;

  return `${lead.contactFirstName},

Every week that passes, your competitors are building more AI authority in ${lead.city}. The businesses that show up in AI recommendations today are training these platforms to keep recommending them tomorrow.

Your report is still live. The findings have not changed:

${reportUrl}

If the timing is better down the road, just reply to this email. Either way, the report is yours.

${SIG}`;
}

export function buildFollowUp3Html(lead: Lead): string {
  const reportUrl = `https://theanswerengine.ai/blindspot/${lead.reportSlug}`;

  return htmlWrap(`
<p>${lead.contactFirstName},</p>

<p>Every week that passes, your competitors are building more AI authority in ${lead.city}. The businesses that show up in AI recommendations today are training these platforms to keep recommending them tomorrow.</p>

<p>Your report is still live. The findings have not changed:</p>

<p><a href="${reportUrl}" target="_blank" style="color:#FF6A00;font-weight:bold;">View Your AI Visibility Report</a></p>

<p>If the timing is better down the road, just reply to this email. Either way, the report is yours.</p>`);
}

// ============================================================
// FOLLOW-UP 4 (Day 25) — Breakup: final value drop, close the file
// ============================================================

export function buildFollowUp4Subject(lead: Lead): string {
  return `Closing the file on ${lead.businessName}'s AI audit`;
}

export function buildFollowUp4Body(lead: Lead): string {
  const reportUrl = `https://theanswerengine.ai/blindspot/${lead.reportSlug}`;

  return `${lead.contactFirstName},

Last note from me. I am closing out ${lead.businessName}'s file on our end.

The AI visibility report will stay live here if you ever want to revisit it:

${reportUrl}

Wishing you continued success.

${SIG}`;
}

export function buildFollowUp4Html(lead: Lead): string {
  const reportUrl = `https://theanswerengine.ai/blindspot/${lead.reportSlug}`;

  return htmlWrap(`
<p>${lead.contactFirstName},</p>

<p>Last note from me. I am closing out ${lead.businessName}'s file on our end.</p>

<p>The AI visibility report will stay live here if you ever want to revisit it:</p>

<p><a href="${reportUrl}" target="_blank" style="color:#FF6A00;font-weight:bold;">View Your AI Visibility Report</a></p>

<p>Wishing you continued success.</p>`);
}

// ============================================================
// Template selector for follow-up cron
// ============================================================

export type FollowUpType = 'follow_up_1' | 'follow_up_2' | 'follow_up_3' | 'follow_up_4';

export function getFollowUpTemplates(lead: Lead, type: FollowUpType): {
  subject: string;
  body: string;
  htmlBody: string;
} {
  switch (type) {
    case 'follow_up_1':
      return { subject: buildFollowUp1Subject(lead), body: buildFollowUp1Body(lead), htmlBody: buildFollowUp1Html(lead) };
    case 'follow_up_2':
      return { subject: buildFollowUp2Subject(lead), body: buildFollowUp2Body(lead), htmlBody: buildFollowUp2Html(lead) };
    case 'follow_up_3':
      return { subject: buildFollowUp3Subject(lead), body: buildFollowUp3Body(lead), htmlBody: buildFollowUp3Html(lead) };
    case 'follow_up_4':
      return { subject: buildFollowUp4Subject(lead), body: buildFollowUp4Body(lead), htmlBody: buildFollowUp4Html(lead) };
  }
}
