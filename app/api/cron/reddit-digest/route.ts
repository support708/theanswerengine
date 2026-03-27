/**
 * Vercel Cron endpoint for Reddit Opportunity Digest sender.
 * Protected by CRON_SECRET (not NextAuth).
 *
 * Checks smart batching conditions for each client and sends email digests
 * when triggered (3+ unsent opportunities OR 7+ days since last digest).
 *
 * Schedule: hourly at :07 (configured in vercel.json)
 * Safety gate: Gmail API credentials (returns null gracefully if not configured)
 */

import { NextRequest, NextResponse } from 'next/server';
import { checkAndSendDigests } from '@/lib/reddit-digest';
import { sendMessage } from '@/lib/telegram';
import type { DigestCronResult } from '@/lib/reddit-types';

export const maxDuration = 60; // 1 minute — digests are fast

export async function GET(request: NextRequest) {
  // Auth
  const authHeader = request.headers.get('authorization');
  const cronSecret = process.env.CRON_SECRET;

  if (!cronSecret) {
    return NextResponse.json({ error: 'CRON_SECRET not configured' }, { status: 500 });
  }

  if (authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  // Gmail API is the real gate — if creds aren't configured, sends return null gracefully
  try {
    const result: DigestCronResult = await checkAndSendDigests();

    // Log errors if any
    if (result.errors.length > 0) {
      console.error('Reddit digest errors:', result.errors);

      try {
        await sendMessage(
          `<b>Reddit Digest Issues</b>\n` +
          `Sent: ${result.sent.length} digests\n` +
          `Errors: ${result.errors.join('\n')}`,
        );
      } catch {
        // Non-blocking
      }
    }

    return NextResponse.json(result);
  } catch (err) {
    const errMsg = err instanceof Error ? err.message : 'Unknown error';

    try {
      await sendMessage(
        `<b>Reddit Digest FAILED</b>\n` +
        `Error: ${errMsg}`,
      );
    } catch {
      // Can't even notify
    }

    return NextResponse.json({ error: errMsg }, { status: 500 });
  }
}
