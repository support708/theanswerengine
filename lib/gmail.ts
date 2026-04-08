/**
 * Gmail email templates.
 * Inbound (form submission) + outbound (prospecting) initial emails.
 * 3 follow-up sequences shared across both.
 *
 * Follow-up schedule:
 *   Follow-up 1: 3 days after sent (value reminder)
 *   Follow-up 2: 7 days after sent (social proof + urgency)
 *   Follow-up 3: 14 days after sent (soft close, no Calendly)
 */

import type { Lead } from './types';

// --- Outbound (prospecting) templates ---

export function buildEmailSubject(lead: Lead): string {
  return `What AI says when people ask about ${lead.serviceNiche.toLowerCase()} in ${lead.city}`;
}

// --- Inbound (form submission) templates ---

export function buildInboundEmailSubject(lead: Lead): string {
  return `Your AI Visibility Report for ${lead.businessName}`;
}

export function buildInboundEmailBody(lead: Lead): string {
  const reportUrl = `https://theanswerengine.ai/blindspot/${lead.reportSlug}`;
  const competitorLine = lead.competitorName
    ? `Instead, AI platforms are recommending ${lead.competitorName}.`
    : 'Instead, AI platforms are pointing people toward your competitors.';

  return `${lead.contactFirstName},

Thanks for reaching out through our site. I ran a full AI visibility audit on ${lead.businessName} in ${lead.city}, and I wanted to get the results to you right away.

Here is the short version: when someone asks ChatGPT, Claude, or Google AI for a ${lead.serviceNiche.toLowerCase()} recommendation in ${lead.city}, ${lead.businessName} is not showing up. ${competitorLine}

I put together a detailed visual breakdown of exactly what AI platforms see (and miss) when they evaluate your online presence:

${reportUrl}

The report is yours to keep, no strings attached.

If you want, I can walk you through the findings on a 30-minute Zoom. No pitch, just the data and what it means for your market.

Book a 30-min call: https://calendly.com/theanswerengine-support/30min

-- JB
The Answer Engine
(213) 444-2229
support@theanswerengine.ai`;
}

export function buildInboundHtmlEmailBody(lead: Lead): string {
  const reportUrl = `https://theanswerengine.ai/blindspot/${lead.reportSlug}`;
  const previewUrl = `https://theanswerengine.ai/api/og/${lead.reportSlug}`;
  const calendlyUrl = 'https://calendly.com/theanswerengine-support/30min';
  const competitorLine = lead.competitorName
    ? `Instead, AI platforms are recommending <strong>${lead.competitorName}</strong>.`
    : 'Instead, AI platforms are pointing people toward your competitors.';

  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;font-family:Georgia,serif;font-size:15px;line-height:1.6;color:#1a1a1a;background:#ffffff;">
<div style="max-width:600px;margin:0 auto;padding:32px 20px;">

<p>${lead.contactFirstName},</p>

<p>Thanks for reaching out through our site. I ran a full AI visibility audit on ${lead.businessName} in ${lead.city}, and I wanted to get the results to you right away.</p>

<p>Here is the short version: when someone asks ChatGPT, Claude, or Google AI for a ${lead.serviceNiche.toLowerCase()} recommendation in ${lead.city}, <strong>${lead.businessName} is not showing up.</strong> ${competitorLine}</p>

<p>I put together a detailed visual breakdown of exactly what AI platforms see (and miss) when they evaluate your online presence:</p>

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

<div style="text-align:center;margin:0 0 24px 0;">
<a href="${reportUrl}" target="_blank" style="display:inline-block;background:#FF6A00;color:#ffffff;font-family:Arial,sans-serif;font-size:16px;font-weight:bold;padding:14px 32px;border-radius:6px;text-decoration:none;letter-spacing:0.5px;">View Your Full Report</a>
</div>

<p>The report is yours to keep, no strings attached.</p>

<p>If you want, I can walk you through the findings on a 30-minute Zoom. No pitch, just the data and what it means for your market.</p>

<p><a href="${calendlyUrl}" target="_blank" style="color:#FF6A00;font-weight:bold;">Book a 30-min call</a></p>

<p style="margin-top:32px;padding-top:16px;border-top:1px solid #e0e0e0;color:#666;font-size:13px;">
-- JB<br/>
The Answer Engine<br/>
(213) 444-2229<br/>
support@theanswerengine.ai
</p>

</div>
</body>
</html>`;
}

// --- Real Estate vertical templates (references Justin Borges case study) ---

export function buildRealEstateEmailSubject(lead: Lead): string {
  return `${lead.contactFirstName}, AI is sending your leads to other agents`;
}

export function buildRealEstateEmailBody(lead: Lead): string {
  const reportUrl = `https://theanswerengine.ai/blindspot/${lead.reportSlug}`;
  const caseStudyUrl = 'https://theanswerengine.ai/case-studies/justin-borges';
  const competitorLine = lead.competitorName
    ? `When I ran the audit, ${lead.competitorName} came up instead.`
    : 'When I ran the audit, other agents in your market came up instead.';

  return `${lead.contactFirstName},

I was looking into which real estate agents AI platforms recommend in ${lead.city}, and ${lead.businessName} is not showing up.

${competitorLine}

This matters because more buyers and sellers are starting their search by asking ChatGPT, Claude, or Google AI for agent recommendations. If you are not the answer, someone else is getting that lead.

I actually solved this exact problem for an LA real estate team. They went from zero AI visibility to 8,400+ monthly clicks, 1.1M+ impressions, and 100% AI citation rates for their expertise queries. The full case study with verified Google Search Console data is here:

${caseStudyUrl}

I also put together a free visibility report specifically for ${lead.businessName}, showing exactly what AI sees (and misses) about your online presence:

${reportUrl}

Happy to walk you through both on a quick 30-minute call. No pitch, just the data.

Book a call: https://calendly.com/theanswerengine-support/30min

-- JB
The Answer Engine
(213) 444-2229
support@theanswerengine.ai`;
}

export function buildRealEstateHtmlEmailBody(lead: Lead): string {
  const reportUrl = `https://theanswerengine.ai/blindspot/${lead.reportSlug}`;
  const previewUrl = `https://theanswerengine.ai/api/og/${lead.reportSlug}`;
  const caseStudyUrl = 'https://theanswerengine.ai/case-studies/justin-borges';
  const calendlyUrl = 'https://calendly.com/theanswerengine-support/30min';
  const competitorLine = lead.competitorName
    ? `When I ran the audit, <strong>${lead.competitorName}</strong> came up instead.`
    : 'When I ran the audit, other agents in your market came up instead.';

  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;font-family:Georgia,serif;font-size:15px;line-height:1.6;color:#1a1a1a;background:#ffffff;">
<div style="max-width:600px;margin:0 auto;padding:32px 20px;">

<p>${lead.contactFirstName},</p>

<p>I was looking into which real estate agents AI platforms recommend in ${lead.city}, and <strong>${lead.businessName} is not showing up.</strong></p>

<p>${competitorLine}</p>

<p>This matters because more buyers and sellers are starting their search by asking ChatGPT, Claude, or Google AI for agent recommendations. If you are not the answer, someone else is getting that lead.</p>

<p>I actually solved this exact problem for an LA real estate team. They went from zero AI visibility to:</p>

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

<p><a href="${caseStudyUrl}" target="_blank" style="color:#FF6A00;font-weight:bold;">See the full case study (verified GSC data)</a></p>

<p>I also put together a free visibility report specifically for ${lead.businessName}:</p>

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

<div style="text-align:center;margin:0 0 24px 0;">
<a href="${reportUrl}" target="_blank" style="display:inline-block;background:#FF6A00;color:#ffffff;font-family:Arial,sans-serif;font-size:16px;font-weight:bold;padding:14px 32px;border-radius:6px;text-decoration:none;letter-spacing:0.5px;">View Your Full Report</a>
</div>

<p>Happy to walk you through the findings on a 30-minute call. No pitch, just the data.</p>

<p><a href="${calendlyUrl}" target="_blank" style="color:#FF6A00;font-weight:bold;">Book a 30-min call</a></p>

<p style="margin-top:32px;padding-top:16px;border-top:1px solid #e0e0e0;color:#666;font-size:13px;">
-- JB<br/>
The Answer Engine<br/>
(213) 444-2229<br/>
support@theanswerengine.ai
</p>

</div>
</body>
</html>`;
}

export function buildEmailBody(lead: Lead): string {
  const reportUrl = `https://theanswerengine.ai/blindspot/${lead.reportSlug}`;
  const competitorLine = lead.competitorName
    ? `${lead.competitorName} does.`
    : 'other businesses do.';

  const reviewLine = lead.research?.reviewCount
    ? `This is happening despite your ${lead.research.reviewCount} reviews.`
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
    ? `This is happening despite your ${lead.research.reviewCount} reviews.`
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

<div style="text-align:center;margin:0 0 24px 0;">
<a href="${reportUrl}" target="_blank" style="display:inline-block;background:#FF6A00;color:#ffffff;font-family:Arial,sans-serif;font-size:16px;font-weight:bold;padding:14px 32px;border-radius:6px;text-decoration:none;letter-spacing:0.5px;">View Your Full Report</a>
</div>

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

// --- Follow-up Email Templates ---

export function buildFollowUp1Subject(lead: Lead): string {
  return `Re: What AI says when people ask about ${lead.serviceNiche.toLowerCase()} in ${lead.city}`;
}

export function buildFollowUp1Body(lead: Lead): string {
  const reportUrl = `https://theanswerengine.ai/blindspot/${lead.reportSlug}`;
  const calendlyUrl = 'https://calendly.com/theanswerengine-support/30min';

  return `${lead.contactFirstName},

Quick follow-up on the AI visibility report I sent over for ${lead.businessName}.

I know things get buried in the inbox, so wanted to make sure this didn't slip through. The report is still live here:

${reportUrl}

The short version: when potential customers ask AI platforms for ${lead.serviceNiche.toLowerCase()} recommendations in ${lead.city}, ${lead.businessName} isn't showing up. That's traffic and leads going to competitors instead.

Happy to walk through what I found in 30 minutes. No pitch, just the data.

${calendlyUrl}

-- JB
The Answer Engine
(213) 444-2229
support@theanswerengine.ai`;
}

export function buildFollowUp1Html(lead: Lead): string {
  const reportUrl = `https://theanswerengine.ai/blindspot/${lead.reportSlug}`;
  const calendlyUrl = 'https://calendly.com/theanswerengine-support/30min';

  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;font-family:Georgia,serif;font-size:15px;line-height:1.6;color:#1a1a1a;background:#ffffff;">
<div style="max-width:600px;margin:0 auto;padding:32px 20px;">

<p>${lead.contactFirstName},</p>

<p>Quick follow-up on the AI visibility report I sent over for ${lead.businessName}.</p>

<p>I know things get buried in the inbox, so wanted to make sure this didn't slip through. The report is still live here:</p>

<p><a href="${reportUrl}" target="_blank" style="color:#FF6A00;font-weight:bold;">View Your AI Visibility Report</a></p>

<p>The short version: when potential customers ask AI platforms for ${lead.serviceNiche.toLowerCase()} recommendations in ${lead.city}, <strong>${lead.businessName} isn't showing up.</strong> That's traffic and leads going to competitors instead.</p>

<p>Happy to walk through what I found in 30 minutes. No pitch, just the data.</p>

<p><a href="${calendlyUrl}" target="_blank" style="color:#FF6A00;font-weight:bold;">Book a 30-min call</a></p>

<p style="margin-top:32px;padding-top:16px;border-top:1px solid #e0e0e0;color:#666;font-size:13px;">
-- JB<br/>
The Answer Engine<br/>
(213) 444-2229<br/>
support@theanswerengine.ai
</p>

</div>
</body>
</html>`;
}

export function buildFollowUp2Subject(lead: Lead): string {
  return `${lead.contactFirstName}, your competitors are showing up in AI and you're not`;
}

export function buildFollowUp2Body(lead: Lead): string {
  const reportUrl = `https://theanswerengine.ai/blindspot/${lead.reportSlug}`;
  const calendlyUrl = 'https://calendly.com/theanswerengine-support/30min';
  const competitorLine = lead.competitorName
    ? `Right now, when someone asks ChatGPT or Google AI for a ${lead.serviceNiche.toLowerCase()} recommendation in ${lead.city}, they get ${lead.competitorName}. Not ${lead.businessName}.`
    : `Right now, when someone asks ChatGPT or Google AI for a ${lead.serviceNiche.toLowerCase()} recommendation in ${lead.city}, ${lead.businessName} doesn't come up.`;

  return `${lead.contactFirstName},

I wanted to share one more thing before I move on.

${competitorLine}

This isn't about SEO or traditional marketing. AI-powered search is becoming how people find service providers, and the businesses that show up first are winning that traffic right now.

I put together a free report specifically for ${lead.businessName} showing exactly where the gaps are:

${reportUrl}

If you want to chat about it, I have a few spots open this week:

${calendlyUrl}

Either way, the report is yours to keep.

-- JB
The Answer Engine
(213) 444-2229
support@theanswerengine.ai`;
}

export function buildFollowUp2Html(lead: Lead): string {
  const reportUrl = `https://theanswerengine.ai/blindspot/${lead.reportSlug}`;
  const calendlyUrl = 'https://calendly.com/theanswerengine-support/30min';
  const competitorLine = lead.competitorName
    ? `Right now, when someone asks ChatGPT or Google AI for a ${lead.serviceNiche.toLowerCase()} recommendation in ${lead.city}, they get <strong>${lead.competitorName}</strong>. Not ${lead.businessName}.`
    : `Right now, when someone asks ChatGPT or Google AI for a ${lead.serviceNiche.toLowerCase()} recommendation in ${lead.city}, <strong>${lead.businessName} doesn't come up.</strong>`;

  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;font-family:Georgia,serif;font-size:15px;line-height:1.6;color:#1a1a1a;background:#ffffff;">
<div style="max-width:600px;margin:0 auto;padding:32px 20px;">

<p>${lead.contactFirstName},</p>

<p>I wanted to share one more thing before I move on.</p>

<p>${competitorLine}</p>

<p>This isn't about SEO or traditional marketing. AI-powered search is becoming how people find service providers, and the businesses that show up first are winning that traffic right now.</p>

<p>I put together a free report specifically for ${lead.businessName} showing exactly where the gaps are:</p>

<p><a href="${reportUrl}" target="_blank" style="color:#FF6A00;font-weight:bold;">View Your AI Visibility Report</a></p>

<p>If you want to chat about it, I have a few spots open this week:</p>

<p><a href="${calendlyUrl}" target="_blank" style="color:#FF6A00;font-weight:bold;">Book a 30-min call</a></p>

<p>Either way, the report is yours to keep.</p>

<p style="margin-top:32px;padding-top:16px;border-top:1px solid #e0e0e0;color:#666;font-size:13px;">
-- JB<br/>
The Answer Engine<br/>
(213) 444-2229<br/>
support@theanswerengine.ai
</p>

</div>
</body>
</html>`;
}

export function buildFollowUp3Subject(lead: Lead): string {
  return `Last note on ${lead.businessName}'s AI visibility`;
}

export function buildFollowUp3Body(lead: Lead): string {
  const reportUrl = `https://theanswerengine.ai/blindspot/${lead.reportSlug}`;

  return `${lead.contactFirstName},

Last note from me on this.

The AI visibility report I built for ${lead.businessName} will stay live at the link below. If the timing isn't right now, no worries at all. If things change down the road, just reply to this email and we can pick it up.

${reportUrl}

Wishing you and the team continued success.

-- JB
The Answer Engine
(213) 444-2229
support@theanswerengine.ai`;
}

export function buildFollowUp3Html(lead: Lead): string {
  const reportUrl = `https://theanswerengine.ai/blindspot/${lead.reportSlug}`;

  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;font-family:Georgia,serif;font-size:15px;line-height:1.6;color:#1a1a1a;background:#ffffff;">
<div style="max-width:600px;margin:0 auto;padding:32px 20px;">

<p>${lead.contactFirstName},</p>

<p>Last note from me on this.</p>

<p>The AI visibility report I built for ${lead.businessName} will stay live at the link below. If the timing isn't right now, no worries at all. If things change down the road, just reply to this email and we can pick it up.</p>

<p><a href="${reportUrl}" target="_blank" style="color:#FF6A00;font-weight:bold;">View Your AI Visibility Report</a></p>

<p>Wishing you and the team continued success.</p>

<p style="margin-top:32px;padding-top:16px;border-top:1px solid #e0e0e0;color:#666;font-size:13px;">
-- JB<br/>
The Answer Engine<br/>
(213) 444-2229<br/>
support@theanswerengine.ai
</p>

</div>
</body>
</html>`;
}

/** Get the email templates for a follow-up type */
export function getFollowUpTemplates(lead: Lead, type: 'follow_up_1' | 'follow_up_2' | 'follow_up_3'): {
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
  }
}
