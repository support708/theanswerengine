/**
 * One-time script: Deploy Hunters Roofing report + create Gmail draft.
 * Run with: node scripts/deploy-and-draft.js
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
  const key = trimmed.slice(0, eqIdx);
  const val = trimmed.slice(eqIdx + 1);
  process.env[key] = val;
}

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GMAIL_CLIENT_ID = process.env.GMAIL_CLIENT_ID;
const GMAIL_CLIENT_SECRET = process.env.GMAIL_CLIENT_SECRET;
const GMAIL_REFRESH_TOKEN = process.env.GMAIL_REFRESH_TOKEN;
const GMAIL_SEND_AS = process.env.GMAIL_SEND_AS || 'support@theanswerengine.ai';

async function deployReport() {
  console.log('--- Deploying Hunters Roofing report to GitHub ---');

  const reportPath = path.join(__dirname, '..', 'public', 'blindspot', 'hunters-roofing.html');
  const htmlContent = fs.readFileSync(reportPath, 'utf-8');
  const encodedContent = Buffer.from(htmlContent).toString('base64');

  const filePath = 'public/blindspot/hunters-roofing.html';
  const apiBase = 'https://api.github.com';
  const owner = 'support708';
  const repo = 'theanswerengine-nextjs';

  // Check if file exists
  let existingSha;
  try {
    const getRes = await fetch(
      `${apiBase}/repos/${owner}/${repo}/contents/${filePath}?ref=main`,
      { headers: { Authorization: `Bearer ${GITHUB_TOKEN}`, Accept: 'application/vnd.github.v3+json' } }
    );
    if (getRes.ok) {
      const existing = await getRes.json();
      existingSha = existing.sha;
      console.log('File exists, will update (SHA:', existingSha.slice(0, 8) + '...)');
    } else {
      console.log('File does not exist yet, will create');
    }
  } catch (e) {
    console.log('File does not exist yet, will create');
  }

  const body = {
    message: 'Deploy report: hunters-roofing',
    content: encodedContent,
    branch: 'main',
  };
  if (existingSha) body.sha = existingSha;

  const putRes = await fetch(
    `${apiBase}/repos/${owner}/${repo}/contents/${filePath}`,
    {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        Accept: 'application/vnd.github.v3+json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    }
  );

  if (!putRes.ok) {
    const errText = await putRes.text();
    console.error('GitHub deploy FAILED:', putRes.status, errText);
    return false;
  }

  const result = await putRes.json();
  console.log('Report deployed successfully.');
  console.log('Commit SHA:', result.commit.sha);
  console.log('URL: https://theanswerengine.ai/blindspot/hunters-roofing');
  return true;
}

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
  if (!data.access_token) {
    throw new Error('Failed to get access token: ' + JSON.stringify(data));
  }
  return data.access_token;
}

async function createDraft() {
  console.log('\n--- Creating Hunters Roofing email draft ---');

  const to = 'hunterdoug@earthlink.net';
  const subject = 'What AI says when people ask about roofing contractor in Northridge';
  const body = `Douglas,

I was researching roofing contractor businesses in Northridge this week and came across Hunters Roofing.

I noticed something that may or may not affect you, but I wanted to make sure you had it on your radar.

When someone asks ChatGPT, Claude, or Google AI for a roofing contractor recommendation in Northridge, Hunters Roofing doesn't come up. Roof Repair Specialist does.

This is happening despite your 89 five-star reviews.

I put together a short visual breakdown showing exactly what AI platforms see (and don't see) when they look at your online presence:

https://theanswerengine.ai/blindspot/hunters-roofing

The report is yours regardless. No strings attached.

I'll walk you through exactly what I found on a 30-minute Zoom. No pitch, just the data and what it means for your market. If it makes sense to talk about next steps after that, great. If not, you keep the report either way.

Book a 30-min call: https://calendly.com/theanswerengine-support/30min

-- JB
The Answer Engine
(213) 444-2229
support@theanswerengine.ai

P.S. I built this specifically for Hunters Roofing. The insights are yours to keep whether we talk or not.`;

  const emailLines = [
    `From: ${GMAIL_SEND_AS}`,
    `To: ${to}`,
    `Subject: ${subject}`,
    'Content-Type: text/plain; charset=utf-8',
    '',
    body,
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
    body: JSON.stringify({
      message: { raw: encodedEmail },
    }),
  });

  if (!res.ok) {
    const errText = await res.text();
    console.error('Gmail draft FAILED:', res.status, errText);
    return false;
  }

  const result = await res.json();
  console.log('Draft created successfully.');
  console.log('Draft ID:', result.id);
  console.log('To:', to);
  console.log('Subject:', subject);
  return true;
}

async function main() {
  let success = true;

  if (GITHUB_TOKEN) {
    const deployed = await deployReport();
    if (!deployed) success = false;
  } else {
    console.log('GITHUB_TOKEN not set, skipping deploy');
  }

  if (GMAIL_CLIENT_ID && GMAIL_CLIENT_SECRET && GMAIL_REFRESH_TOKEN) {
    const drafted = await createDraft();
    if (!drafted) success = false;
  } else {
    console.log('Gmail credentials not set, skipping draft');
  }

  if (success) {
    console.log('\nAll done. Check your Gmail drafts and https://theanswerengine.ai/blindspot/hunters-roofing');
  }
}

main().catch(console.error);
