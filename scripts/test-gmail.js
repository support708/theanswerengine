/**
 * Quick test: does Gmail draft creation work with current env vars?
 * Run: node scripts/test-gmail.js
 */

const fs = require('fs');
const path = require('path');

// Load .env.local manually
const envPath = path.join(__dirname, '..', '.env.local');
const envContent = fs.readFileSync(envPath, 'utf8');
envContent.split('\n').forEach(line => {
  const trimmed = line.trim();
  if (!trimmed || trimmed.startsWith('#')) return;
  const eqIdx = trimmed.indexOf('=');
  if (eqIdx === -1) return;
  const key = trimmed.substring(0, eqIdx);
  const val = trimmed.substring(eqIdx + 1);
  process.env[key] = val;
});

const { google } = require('googleapis');

console.log('CLIENT_ID present:', Boolean(process.env.GMAIL_CLIENT_ID));
console.log('CLIENT_SECRET present:', Boolean(process.env.GMAIL_CLIENT_SECRET));
console.log('REFRESH_TOKEN present:', Boolean(process.env.GMAIL_REFRESH_TOKEN));
console.log('SEND_AS:', process.env.GMAIL_SEND_AS);

const oauth2Client = new google.auth.OAuth2(
  process.env.GMAIL_CLIENT_ID,
  process.env.GMAIL_CLIENT_SECRET
);
oauth2Client.setCredentials({ refresh_token: process.env.GMAIL_REFRESH_TOKEN });

const gmail = google.gmail({ version: 'v1', auth: oauth2Client });

const fromAddress = process.env.GMAIL_SEND_AS || 'support@theanswerengine.ai';
const emailLines = [
  `From: ${fromAddress}`,
  'To: support@theanswerengine.ai',
  'Subject: [TEST] Gmail API Draft Test - Delete Me',
  'Content-Type: text/plain; charset=utf-8',
  '',
  'This is a test draft created by the pipeline Gmail integration.',
  'You can safely delete this draft.',
];

const rawEmail = emailLines.join('\r\n');
const encodedEmail = Buffer.from(rawEmail)
  .toString('base64')
  .replace(/\+/g, '-')
  .replace(/\//g, '_')
  .replace(/=+$/, '');

gmail.users.drafts.create({
  userId: 'me',
  requestBody: { message: { raw: encodedEmail } },
}).then(res => {
  console.log('\nSUCCESS! Draft created in your Gmail.');
  console.log('Draft ID:', res.data.id);
  console.log('Message ID:', res.data.message?.id);
  console.log('\nGo check your Gmail Drafts folder!');
}).catch(err => {
  console.error('\nFAILED:', err.message);
  if (err.response) {
    console.error('Status:', err.response.status);
    console.error('Details:', JSON.stringify(err.response.data).substring(0, 500));
  }
});
