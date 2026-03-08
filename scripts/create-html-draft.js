/**
 * Create a proper HTML email draft for Hunters Roofing with report preview image.
 * Run with: node scripts/create-html-draft.js
 */

const fs = require('fs');
const path = require('path');

// Load .env.local
const envPath = path.join(__dirname, '..', '.env.local');
const envContent = fs.readFileSync(envPath, 'utf-8');
for (const line of envContent.split('\n')) {
  const trimmed = line.trim();
  if (!trimmed || trimmed.startsWith('#')) continue;
  const eqIdx = trimmed.indexOf('=');
  if (eqIdx === -1) continue;
  process.env[trimmed.slice(0, eqIdx)] = trimmed.slice(eqIdx + 1);
}

const GMAIL_CLIENT_ID = process.env.GMAIL_CLIENT_ID;
const GMAIL_CLIENT_SECRET = process.env.GMAIL_CLIENT_SECRET;
const GMAIL_REFRESH_TOKEN = process.env.GMAIL_REFRESH_TOKEN;
const GMAIL_SEND_AS = process.env.GMAIL_SEND_AS || 'support@theanswerengine.ai';

async function getAccessToken() {
  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: GMAIL_CLIENT_ID,
      client_secret: GMAIL_CLIENT_SECRET,
      refresh_token: GMAIL_REFRESH_TOKEN,
      grant_type: 'refresh_token',
    }),
  });
  const data = await res.json();
  if (!data.access_token) throw new Error('Token failed: ' + JSON.stringify(data));
  return data.access_token;
}

async function main() {
  const to = 'hunterdoug@earthlink.net';
  const subject = 'What AI says when people ask about roofing contractor in Northridge';
  const reportUrl = 'https://theanswerengine.ai/blindspot/hunters-roofing';
  const previewUrl = 'https://theanswerengine.ai/api/og/hunters-roofing';
  const calendlyUrl = 'https://calendly.com/theanswerengine-support/30min';

  const plainBody = `Douglas,

I was researching roofing contractor businesses in Northridge this week and came across Hunters Roofing.

I noticed something that may or may not affect you, but I wanted to make sure you had it on your radar.

When someone asks ChatGPT, Claude, or Google AI for a roofing contractor recommendation in Northridge, Hunters Roofing doesn't come up. Roof Repair Specialist does.

This is happening despite your 89 five-star reviews.

I put together a short visual breakdown showing exactly what AI platforms see (and don't see) when they look at your online presence:

${reportUrl}

The report is yours regardless. No strings attached.

I'll walk you through exactly what I found on a 30-minute Zoom. No pitch, just the data and what it means for your market. If it makes sense to talk about next steps after that, great. If not, you keep the report either way.

Book a 30-min call: ${calendlyUrl}

-- JB
The Answer Engine
(213) 444-2229
support@theanswerengine.ai

P.S. I built this specifically for Hunters Roofing. The insights are yours to keep whether we talk or not.`;

  const htmlBody = `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;font-family:Georgia,serif;font-size:15px;line-height:1.6;color:#1a1a1a;background:#ffffff;">
<div style="max-width:600px;margin:0 auto;padding:32px 20px;">

<p>Douglas,</p>

<p>I was researching roofing contractor businesses in Northridge this week and came across Hunters Roofing.</p>

<p>I noticed something that may or may not affect you, but I wanted to make sure you had it on your radar.</p>

<p>When someone asks ChatGPT, Claude, or Google AI for a roofing contractor recommendation in Northridge, <strong>Hunters Roofing doesn't come up.</strong> Roof Repair Specialist does.</p>

<p>This is happening despite your 89 five-star reviews.</p>

<p>I put together a short visual breakdown showing exactly what AI platforms see (and don't see) when they look at your online presence:</p>

<a href="${reportUrl}" target="_blank" style="display:block;text-decoration:none;margin:24px 0;">
<img src="${previewUrl}" alt="AI Visibility Report for Hunters Roofing" width="600" style="width:100%;max-width:600px;height:auto;border-radius:8px;border:1px solid #e0e0e0;display:block;" />
</a>

<div style="text-align:center;margin:0 0 24px 0;">
<a href="${reportUrl}" target="_blank" style="display:inline-block;background:#2EA3F2;color:#ffffff;font-family:Arial,sans-serif;font-size:16px;font-weight:bold;padding:14px 32px;border-radius:6px;text-decoration:none;letter-spacing:0.5px;">View Your Full Report</a>
</div>

<p>The report is yours regardless. No strings attached.</p>

<p>I'll walk you through exactly what I found on a 30-minute Zoom. No pitch, just the data and what it means for your market. If it makes sense to talk about next steps after that, great. If not, you keep the report either way.</p>

<p><a href="${calendlyUrl}" target="_blank" style="color:#2EA3F2;font-weight:bold;">Book a 30-min call</a></p>

<p style="margin-top:32px;padding-top:16px;border-top:1px solid #e0e0e0;color:#666;font-size:13px;">
-- JB<br/>
The Answer Engine<br/>
(213) 444-2229<br/>
support@theanswerengine.ai
</p>

<p style="color:#999;font-size:12px;font-style:italic;">P.S. I built this specifically for Hunters Roofing. The insights are yours to keep whether we talk or not.</p>

</div>
</body>
</html>`;

  // Build multipart MIME email
  const boundary = `boundary_${Date.now()}`;
  const emailLines = [
    `From: ${GMAIL_SEND_AS}`,
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
  ];

  const rawEmail = emailLines.join('\r\n');
  const encodedEmail = Buffer.from(rawEmail)
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/g, '');

  const accessToken = await getAccessToken();

  const res = await fetch('https://gmail.googleapis.com/gmail/v1/users/me/drafts', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ message: { raw: encodedEmail } }),
  });

  if (!res.ok) {
    const errText = await res.text();
    console.error('Draft creation FAILED:', res.status, errText);
    return;
  }

  const result = await res.json();
  console.log('HTML email draft created successfully.');
  console.log('Draft ID:', result.id);
  console.log('To:', to);
  console.log('Subject:', subject);
  console.log('Includes: Report preview image card');
  console.log('\nCheck your Gmail drafts folder.');
}

main().catch(console.error);
