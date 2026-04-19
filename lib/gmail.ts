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

// ============================================================
// Email shell — matches live site (theanswerengine.ai) exactly
// #131313 header with white logo + orange "THE ANSWER ENGINE"
// wordmark, #131313 body, #131313 footer with corner accent bar.
// Email-safe: table layout, inline styles, system-font stack
// (Space Grotesk/Inter fall back to Helvetica/Arial).
// ============================================================

const DISPLAY_STACK = `'Space Grotesk','Inter','Helvetica Neue',Arial,sans-serif`;
const SANS_STACK = `'Inter','Helvetica Neue',Arial,sans-serif`;
const MONO_STACK = `'JetBrains Mono',Consolas,Menlo,'Courier New',monospace`;

const BRAND_ORANGE = '#FF6A00';
const BG_PRIMARY = '#131313';
const BG_CARD = '#1c1b1b';
const BG_ALT = '#2a2a2a';

const LOGO_URL_DARK = 'https://www.theanswerengine.ai/TheAnswerEngine_white%20logo%20only.png';
const LOGO_URL_LIGHT = 'https://www.theanswerengine.ai/The_Answer_Engine_Solo_Logo_Transparent.png';

type EmailTheme = 'dark' | 'light';

function buildSig(theme: EmailTheme): string {
  const borderColor = theme === 'dark' ? 'rgba(255,255,255,0.10)' : '#e5e7eb';
  const primaryText = theme === 'dark' ? '#e5e2e1' : '#1a1a1a';
  const secondaryText = theme === 'dark' ? 'rgba(229,226,225,0.65)' : '#555555';
  const mutedText = theme === 'dark' ? 'rgba(229,226,225,0.55)' : '#777777';
  return `
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;margin-top:36px;">
  <tr><td style="border-top:1px solid ${borderColor};padding-top:20px;font-family:${SANS_STACK};font-size:13px;line-height:1.65;color:${secondaryText};">
    <span style="display:inline-block;font-family:${MONO_STACK};font-size:10px;letter-spacing:0.24em;text-transform:uppercase;color:${BRAND_ORANGE};margin-bottom:10px;">// Signed</span><br/>
    <strong style="color:${primaryText};font-family:${DISPLAY_STACK};font-weight:900;letter-spacing:-0.01em;text-transform:uppercase;font-size:15px;">Justin Borges</strong><br/>
    <span style="color:${mutedText};">Founder, The Answer Engine</span><br/>
    <a href="tel:+12134442229" style="color:${secondaryText};text-decoration:none;">(213) 444-2229</a><br/>
    <a href="mailto:support@theanswerengine.ai" style="color:${BRAND_ORANGE};text-decoration:none;">support@theanswerengine.ai</a>
  </td></tr>
</table>`;
}

export function htmlWrap(inner: string, theme: EmailTheme = 'light'): string {
  const isDark = theme === 'dark';
  const bg = isDark ? BG_PRIMARY : '#ffffff';
  const bodyText = isDark ? 'rgba(229,226,225,0.78)' : '#1a1a1a';
  const strongText = isDark ? '#ffffff' : '#000000';
  const headingText = isDark ? '#e5e2e1' : '#1a1a1a';
  const headerBorder = isDark ? 'rgba(255,255,255,0.10)' : '#e5e7eb';
  const footerBorder = isDark ? 'rgba(255,255,255,0.05)' : '#e5e7eb';
  const footerText = isDark ? 'rgba(255,255,255,0.40)' : '#888888';
  const logoUrl = isDark ? LOGO_URL_DARK : LOGO_URL_LIGHT;
  const paragraphColor = isDark ? 'rgba(229,226,225,0.78)' : '#333333';
  const HTML_SIG = buildSig(theme);
  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1.0" />
  <meta name="x-apple-disable-message-reformatting" />
  <meta name="color-scheme" content="${theme}" />
  <meta name="supported-color-schemes" content="dark light" />
  <title>The Answer Engine</title>
  <!--[if mso]>
  <style type="text/css">
    body, table, td, a { font-family: Arial, Helvetica, sans-serif !important; }
  </style>
  <![endif]-->
  <style type="text/css">
    body { margin:0 !important; padding:0 !important; width:100% !important; }
    a { color: ${BRAND_ORANGE}; }
    a:hover { color: ${isDark ? '#ffffff' : '#000000'}; }
    .ae-body p { margin: 0 0 16px 0; color: ${paragraphColor}; font-size: 15px; line-height: 1.62; }
    .ae-body strong { color: ${strongText}; font-weight: 700; }
    .ae-body a { color: ${BRAND_ORANGE}; font-weight: 600; }
    .ae-body h1, .ae-body h2, .ae-body h3 { color: ${headingText}; font-family: ${DISPLAY_STACK}; font-weight: 900; letter-spacing: -0.02em; text-transform: uppercase; }
    @media screen and (max-width: 620px) {
      .ae-shell { width: 100% !important; }
      .ae-pad { padding-left: 22px !important; padding-right: 22px !important; }
      .ae-wordmark { font-size: 15px !important; }
    }
  </style>
</head>
<body style="margin:0;padding:0;background:${bg};font-family:${SANS_STACK};-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;">
  <div style="display:none;max-height:0;overflow:hidden;mso-hide:all;font-size:1px;line-height:1px;color:${bg};">The Answer Engine // Answer Engine Optimization</div>

  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background:${bg};border-collapse:collapse;">
    <tr><td align="center" style="padding:0;">

      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="600" class="ae-shell" style="width:600px;max-width:600px;border-collapse:collapse;background:${bg};">

        <tr><td style="background:${bg};border-bottom:1px solid ${headerBorder};padding:18px 28px;" bgcolor="${bg}">
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
            <tr>
              <td valign="middle" style="padding-right:12px;">
                <img src="${logoUrl}" alt="The Answer Engine" width="28" height="28" style="display:block;border:0;${isDark ? 'opacity:0.92;' : ''}" />
              </td>
              <td valign="middle" class="ae-wordmark" style="font-family:${DISPLAY_STACK};font-weight:900;font-size:19px;letter-spacing:-0.035em;color:${BRAND_ORANGE};text-transform:uppercase;line-height:1;">
                THE ANSWER ENGINE
              </td>
            </tr>
          </table>
        </td></tr>

        <tr><td class="ae-body ae-pad" style="background:${bg};padding:38px 32px 34px 32px;font-family:${SANS_STACK};font-size:15px;line-height:1.62;color:${bodyText};" bgcolor="${bg}">

          <div style="margin-bottom:22px;">
            <span style="display:inline-block;background:${BRAND_ORANGE};color:#000000;padding:5px 10px;font-family:${MONO_STACK};font-size:10px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;">Intelligence Brief</span>
          </div>

${inner}

${HTML_SIG}

        </td></tr>

        <tr><td style="background:${bg};border-top:1px solid ${footerBorder};padding:16px 28px;" bgcolor="${bg}">
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;">
            <tr>
              <td align="left" style="font-family:${MONO_STACK};font-size:10px;letter-spacing:0.18em;color:${footerText};text-transform:uppercase;">
                &copy; 2026 The Answer Engine&nbsp;&nbsp;//&nbsp;&nbsp;AEO
              </td>
              <td align="right" style="font-family:${MONO_STACK};font-size:10px;letter-spacing:0.18em;color:${footerText};text-transform:uppercase;">
                <a href="https://theanswerengine.ai/privacy" style="color:${footerText};text-decoration:none;">Privacy</a>&nbsp;&nbsp;
                <a href="https://theanswerengine.ai/terms" style="color:${footerText};text-decoration:none;">Terms</a>&nbsp;&nbsp;
                <a href="https://theanswerengine.ai/about" style="color:${footerText};text-decoration:none;">About</a>&nbsp;&nbsp;
                <a href="https://theanswerengine.ai/blog" style="color:${footerText};text-decoration:none;">Blog</a>
              </td>
            </tr>
          </table>
        </td></tr>

        <tr><td align="right" style="background:${bg};padding:0;font-size:0;line-height:0;" bgcolor="${bg}">
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
            <tr><td width="128" height="4" style="background:${BRAND_ORANGE};font-size:0;line-height:0;" bgcolor="${BRAND_ORANGE}">&nbsp;</td></tr>
          </table>
        </td></tr>

      </table>

    </td></tr>
  </table>
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

We helped an LA real estate team go from zero AI visibility to 8,400+ monthly clicks using this same type of analysis as a starting point. Happy to walk you through your report on a quick call.

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

<p>We helped an LA real estate team go from zero AI visibility to 8,400+ monthly clicks using this same type of analysis as a starting point. Happy to walk you through your report on a quick call.</p>

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
  return `${competitor} is the AI recommendation in ${lead.city}, not ${lead.businessName}`;
}

export function buildFollowUp1Body(lead: Lead): string {
  const reportUrl = `https://theanswerengine.ai/blindspot/${lead.reportSlug}`;
  const competitor = lead.competitorName || 'your top competitor';

  return `${lead.contactFirstName},

Quick follow-up on the AI visibility report I sent for ${lead.businessName}.

Based on the research, ${competitor} is the one AI platforms recommend when asked about ${lead.serviceNiche.toLowerCase()} in ${lead.city}. That is unlikely to change on its own.

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
  return `How an LA real estate team went from invisible to 8,400+ monthly clicks`;
}

export function buildFollowUp2Body(lead: Lead): string {
  const reportUrl = `https://theanswerengine.ai/blindspot/${lead.reportSlug}`;

  return `${lead.contactFirstName},

I wanted to share something relevant to what I found in ${lead.businessName}'s AI visibility report.

One of our clients, an LA real estate team, faced a similar challenge. Zero AI visibility in a market with 70,000+ competing agents. Within 7 months they went from page 2 invisibility to 8,400+ monthly clicks and 100% AI citation rates for their expertise queries. All verified through Google Search Console.

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
