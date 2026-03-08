/**
 * Gmail API integration for creating email drafts.
 * Requires OAuth2 credentials in environment variables:
 *   GMAIL_CLIENT_ID, GMAIL_CLIENT_SECRET, GMAIL_REFRESH_TOKEN
 *
 * To obtain credentials:
 * 1. Create a Google Cloud project at https://console.cloud.google.com
 * 2. Enable the Gmail API
 * 3. Create OAuth 2.0 credentials (Desktop app type)
 * 4. Run the OAuth consent flow to get a refresh token
 *    (use the /api/gmail/auth route below for convenience)
 * 5. Add credentials to .env.local
 */

import { google } from 'googleapis';

function getGmailClient() {
  const clientId = process.env.GMAIL_CLIENT_ID;
  const clientSecret = process.env.GMAIL_CLIENT_SECRET;
  const refreshToken = process.env.GMAIL_REFRESH_TOKEN;

  if (!clientId || !clientSecret || !refreshToken) {
    return null;
  }

  const oauth2Client = new google.auth.OAuth2(clientId, clientSecret);
  oauth2Client.setCredentials({ refresh_token: refreshToken });

  return google.gmail({ version: 'v1', auth: oauth2Client });
}

/**
 * Create a Gmail draft.
 * Returns the draft ID if successful, null if Gmail API is not configured.
 */
export async function createGmailDraft(options: {
  to: string;
  subject: string;
  body: string;
  from?: string;
}): Promise<{ draftId: string; messageId: string } | null> {
  const gmail = getGmailClient();
  if (!gmail) return null;

  const fromAddress = options.from || process.env.GMAIL_SEND_AS || 'support@theanswerengine.ai';

  // Build RFC 2822 email
  const emailLines = [
    `From: ${fromAddress}`,
    `To: ${options.to}`,
    `Subject: ${options.subject}`,
    'Content-Type: text/plain; charset=utf-8',
    '',
    options.body,
  ];

  const rawEmail = emailLines.join('\r\n');
  const encodedEmail = Buffer.from(rawEmail)
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');

  const response = await gmail.users.drafts.create({
    userId: 'me',
    requestBody: {
      message: { raw: encodedEmail },
    },
  });

  return {
    draftId: response.data.id!,
    messageId: response.data.message?.id || '',
  };
}

/**
 * Check if Gmail API credentials are configured.
 */
export function isGmailConfigured(): boolean {
  return !!(
    process.env.GMAIL_CLIENT_ID &&
    process.env.GMAIL_CLIENT_SECRET &&
    process.env.GMAIL_REFRESH_TOKEN
  );
}
