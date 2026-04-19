/**
 * Draft a test email using the new site-matched shell.
 * Creates a Gmail DRAFT (not sent) addressed to Justin so he can open it
 * in Gmail to see the actual rendering.
 */
const fs = require('fs');
const { google } = require('googleapis');

const env = fs.readFileSync('.env.local', 'utf-8');
const get = (k) => (env.match(new RegExp('^' + k + '=(.+)$', 'm')) || [])[1]?.trim() || '';

const oauth2Client = new google.auth.OAuth2(get('GMAIL_CLIENT_ID'), get('GMAIL_CLIENT_SECRET'));
oauth2Client.setCredentials({ refresh_token: get('GMAIL_REFRESH_TOKEN') });
const gmail = google.gmail({ version: 'v1', auth: oauth2Client });

const to = 'justin@theborgesrealestateteam.com';
const from = get('GMAIL_SEND_AS') || 'support@theanswerengine.ai';
const subject = '[Template Preview v2] The Answer Engine — site-matched email shell';

// ---------- SHELL (mirrors lib/gmail.ts htmlWrap) ----------
const DISPLAY = `'Space Grotesk','Inter','Helvetica Neue',Arial,sans-serif`;
const SANS = `'Inter','Helvetica Neue',Arial,sans-serif`;
const MONO = `'JetBrains Mono',Consolas,Menlo,'Courier New',monospace`;
const BRAND_ORANGE = '#FF6A00';
const BG = '#131313';
const LOGO_URL = 'https://www.theanswerengine.ai/TheAnswerEngine_white%20logo%20only.png';

const SIG_BLOCK = `
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;margin-top:36px;">
  <tr><td style="border-top:1px solid rgba(255,255,255,0.10);padding-top:20px;font-family:${SANS};font-size:13px;line-height:1.65;color:rgba(229,226,225,0.65);">
    <span style="display:inline-block;font-family:${MONO};font-size:10px;letter-spacing:0.24em;text-transform:uppercase;color:${BRAND_ORANGE};margin-bottom:10px;">// Signed</span><br/>
    <strong style="color:#e5e2e1;font-family:${DISPLAY};font-weight:900;letter-spacing:-0.01em;text-transform:uppercase;font-size:15px;">Justin Borges</strong><br/>
    <span style="color:rgba(229,226,225,0.55);">Founder, The Answer Engine</span><br/>
    <a href="tel:+12134442229" style="color:rgba(229,226,225,0.65);text-decoration:none;">(213) 444-2229</a><br/>
    <a href="mailto:support@theanswerengine.ai" style="color:${BRAND_ORANGE};text-decoration:none;">support@theanswerengine.ai</a>
  </td></tr>
</table>`;

function htmlWrap(inner) {
  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1.0" />
  <meta name="x-apple-disable-message-reformatting" />
  <meta name="color-scheme" content="dark light" />
  <meta name="supported-color-schemes" content="dark light" />
  <title>The Answer Engine</title>
  <style type="text/css">
    body { margin:0 !important; padding:0 !important; width:100% !important; }
    a { color: ${BRAND_ORANGE}; }
    .ae-body p { margin: 0 0 16px 0; color: rgba(229,226,225,0.78); font-size: 15px; line-height: 1.62; }
    .ae-body strong { color: #ffffff; font-weight: 700; }
    .ae-body a { color: ${BRAND_ORANGE}; font-weight: 600; }
    @media screen and (max-width: 620px) {
      .ae-shell { width: 100% !important; }
      .ae-pad { padding-left: 22px !important; padding-right: 22px !important; }
      .ae-wordmark { font-size: 15px !important; }
    }
  </style>
</head>
<body style="margin:0;padding:0;background:${BG};font-family:${SANS};-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;">
  <div style="display:none;max-height:0;overflow:hidden;mso-hide:all;font-size:1px;line-height:1px;color:${BG};">The Answer Engine // Answer Engine Optimization</div>
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background:${BG};border-collapse:collapse;">
    <tr><td align="center" style="padding:0;">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="600" class="ae-shell" style="width:600px;max-width:600px;border-collapse:collapse;background:${BG};">

        <tr><td style="background:${BG};border-bottom:1px solid rgba(255,255,255,0.10);padding:18px 28px;" bgcolor="${BG}">
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
            <tr>
              <td valign="middle" style="padding-right:12px;">
                <img src="${LOGO_URL}" alt="The Answer Engine" width="28" height="28" style="display:block;border:0;opacity:0.92;" />
              </td>
              <td valign="middle" class="ae-wordmark" style="font-family:${DISPLAY};font-weight:900;font-size:19px;letter-spacing:-0.035em;color:${BRAND_ORANGE};text-transform:uppercase;line-height:1;">
                THE ANSWER ENGINE
              </td>
            </tr>
          </table>
        </td></tr>

        <tr><td class="ae-body ae-pad" style="background:${BG};padding:38px 32px 34px 32px;font-family:${SANS};font-size:15px;line-height:1.62;color:rgba(229,226,225,0.78);" bgcolor="${BG}">
          <div style="margin-bottom:22px;">
            <span style="display:inline-block;background:${BRAND_ORANGE};color:#000000;padding:5px 10px;font-family:${MONO};font-size:10px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;">Intelligence Brief</span>
          </div>
${inner}
${SIG_BLOCK}
        </td></tr>

        <tr><td style="background:${BG};border-top:1px solid rgba(255,255,255,0.05);padding:16px 28px;" bgcolor="${BG}">
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;">
            <tr>
              <td align="left" style="font-family:${MONO};font-size:10px;letter-spacing:0.18em;color:rgba(255,255,255,0.40);text-transform:uppercase;">
                &copy; 2026 The Answer Engine&nbsp;&nbsp;//&nbsp;&nbsp;AEO
              </td>
              <td align="right" style="font-family:${MONO};font-size:10px;letter-spacing:0.18em;color:rgba(255,255,255,0.40);text-transform:uppercase;">
                <a href="https://theanswerengine.ai/privacy" style="color:rgba(255,255,255,0.40);text-decoration:none;">Privacy</a>&nbsp;&nbsp;
                <a href="https://theanswerengine.ai/terms" style="color:rgba(255,255,255,0.40);text-decoration:none;">Terms</a>&nbsp;&nbsp;
                <a href="https://theanswerengine.ai/about" style="color:rgba(255,255,255,0.40);text-decoration:none;">About</a>&nbsp;&nbsp;
                <a href="https://theanswerengine.ai/blog" style="color:rgba(255,255,255,0.40);text-decoration:none;">Blog</a>
              </td>
            </tr>
          </table>
        </td></tr>

        <tr><td align="right" style="background:${BG};padding:0;font-size:0;line-height:0;" bgcolor="${BG}">
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

// ---------- INNER CONTENT ----------
const inner = `
<p>Justin,</p>

<p>When someone asks ChatGPT or Google AI for a <strong>real estate agent recommendation in Los Angeles</strong>, The Borges Real Estate Team doesn't come up. The big brokerages do.</p>

<p>I built a free AI visibility report showing exactly what these platforms see — and what they're missing — about your online presence.</p>

<div style="text-align:center;margin:28px 0;">
  <a href="https://theanswerengine.ai/blindspot/preview" target="_blank" style="display:inline-block;background:${BRAND_ORANGE};color:#000000;font-family:${DISPLAY};font-size:14px;font-weight:900;padding:16px 32px;text-decoration:none;letter-spacing:-0.02em;text-transform:uppercase;">View Your Full Report &rarr;</a>
</div>

<p>We helped an LA real estate team go from zero AI visibility to 8,400+ monthly clicks using this same type of analysis as a starting point. Happy to walk you through your report on a quick call.</p>

<p><a href="https://calendly.com/theanswerengine-support/30min" target="_blank">Book a 30-min call</a></p>

<p style="margin-top:24px;padding-top:18px;border-top:1px dashed rgba(255,255,255,0.10);font-size:13px;color:rgba(229,226,225,0.50);">
<em>(Template preview — rebuilt to match the live site's nav + footer. Header: #131313 with white logo + orange wordmark. Body: #131313. Orange corner accent.)</em>
</p>`;

const htmlBody = htmlWrap(inner);

const plainBody = `Justin,

When someone asks ChatGPT or Google AI for a real estate agent recommendation in Los Angeles, The Borges Real Estate Team doesn't come up. The big brokerages do.

I built a free AI visibility report showing exactly what these platforms see — and what they're missing — about your online presence:

https://theanswerengine.ai/blindspot/preview

We helped an LA real estate team go from zero AI visibility to 8,400+ monthly clicks using this same type of analysis as a starting point. Happy to walk you through your report on a quick call.

https://calendly.com/theanswerengine-support/30min

Justin Borges
Founder, The Answer Engine
(213) 444-2229
support@theanswerengine.ai`;

function buildRaw() {
  const boundary = `boundary_${Date.now()}`;
  const lines = [
    `From: ${from}`,
    `To: ${to}`,
    `Subject: ${subject}`,
    'MIME-Version: 1.0',
    `Content-Type: multipart/alternative; boundary="${boundary}"`,
    '',
    `--${boundary}`,
    'Content-Type: text/plain; charset=utf-8',
    '',
    plainBody,
    '',
    `--${boundary}`,
    'Content-Type: text/html; charset=utf-8',
    '',
    htmlBody,
    '',
    `--${boundary}--`,
  ].join('\r\n');
  return Buffer.from(lines).toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

(async () => {
  try {
    const res = await gmail.users.drafts.create({
      userId: 'me',
      requestBody: { message: { raw: buildRaw() } },
    });
    console.log('✓ Draft v2 created');
    console.log('  draftId:', res.data.id);
    console.log('  Subject:', subject);
  } catch (err) {
    console.error('✗ Draft creation failed:', err.message);
    process.exit(1);
  }
})();
