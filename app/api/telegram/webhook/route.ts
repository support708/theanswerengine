/**
 * Telegram Bot Webhook — Remote trigger for manual operations.
 * Commands:
 *   /hunt       — Run a manual hunt session
 *   /pipeline   — Process all queued leads through research → report → email
 *   /followup   — Run follow-up sequence for due leads
 *   /status     — Show current system status
 *   /help       — Show available commands
 *
 * Security: Only processes messages from the authorized TELEGRAM_CHAT_ID.
 * Does NOT interfere with scheduled Vercel crons.
 */

import { NextRequest, NextResponse } from 'next/server';
import { sendMessage } from '@/lib/telegram';
import { runHuntSession, getHuntStatus } from '@/lib/scheduler';
import { readLeads } from '@/lib/leads';

export const maxDuration = 120;

interface TelegramUpdate {
  update_id: number;
  message?: {
    message_id: number;
    from?: { id: number; first_name: string };
    chat: { id: number; type: string };
    date: number;
    text?: string;
  };
}

export async function POST(req: NextRequest) {
  try {
    // Verify webhook secret token (prevents spoofed requests)
    const webhookSecret = process.env.TELEGRAM_WEBHOOK_SECRET;
    if (webhookSecret) {
      const headerSecret = req.headers.get('x-telegram-bot-api-secret-token');
      if (headerSecret !== webhookSecret) {
        return NextResponse.json({ ok: true });
      }
    }

    const update: TelegramUpdate = await req.json();

    // Only process text messages
    if (!update.message?.text) {
      return NextResponse.json({ ok: true });
    }

    const chatId = update.message.chat.id.toString();
    const authorizedChatId = process.env.TELEGRAM_CHAT_ID;

    // Security: only accept messages from the authorized chat
    if (!authorizedChatId || chatId !== authorizedChatId) {
      return NextResponse.json({ ok: true });
    }

    const text = update.message.text.trim();
    const [command, ...args] = text.split(/\s+/);

    switch (command.toLowerCase()) {
      case '/hunt':
        await handleHunt();
        break;
      case '/pipeline':
        await handlePipeline(args[0]);
        break;
      case '/followup':
        await handleFollowup();
        break;
      case '/status':
        await handleStatus();
        break;
      case '/help':
        await handleHelp();
        break;
      default:
        // Ignore non-command messages
        break;
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Telegram webhook error:', error);
    return NextResponse.json({ ok: true }); // Always return 200 to Telegram
  }
}

async function handleHunt() {
  await sendMessage('Starting manual hunt session...');

  try {
    const session = await runHuntSession('manual');
    const duration = session.completedAt
      ? `${((new Date(session.completedAt).getTime() - new Date(session.startedAt).getTime()) / 1000).toFixed(1)}s`
      : 'unknown';

    await sendMessage(
      `<b>Manual Hunt Complete</b> | ${session.vertical} x ${session.metro}\n\n` +
      `Found: ${session.prospectsFound} prospects\n` +
      `P1: ${session.p1Queued} | P2: ${session.p2Queued} | P3: ${session.p3Backlogged}\n` +
      `Dupes skipped: ${session.duplicatesSkipped}\n` +
      `Duration: ${duration}` +
      (session.errors.length > 0 ? `\n\nErrors: ${session.errors.join('; ').slice(0, 300)}` : ''),
    );
  } catch (err) {
    await sendMessage(`<b>Hunt FAILED</b>\n${err instanceof Error ? err.message : String(err)}`);
  }
}

async function handlePipeline(leadId?: string) {
  await sendMessage(leadId ? `Processing lead ${leadId}...` : 'Processing all queued leads...');

  try {
    // Call the pipeline endpoint internally
    const baseUrl = process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

    const params = new URLSearchParams({ step: 'full' });
    if (leadId) params.set('leadId', leadId);

    const res = await fetch(`${baseUrl}/api/cron/pipeline?${params}`, {
      method: 'GET',
      headers: { Authorization: `Bearer ${process.env.CRON_SECRET}` },
    });

    const data = await res.json();

    if (data.success) {
      if (data.message) {
        await sendMessage(data.message);
      } else {
        const results = data.results || [data.result];
        const summary = results.map((r: Record<string, unknown>) => {
          const biz = r.businessName || r.leadId || 'Unknown';
          if (r.error) return `${biz}: FAILED - ${String(r.error).slice(0, 100)}`;
          const parts: string[] = [String(biz)];
          if (r.research && typeof r.research === 'object') parts.push('researched');
          if (r.report && typeof r.report === 'object') parts.push('report ready');
          if (r.email && typeof r.email === 'object') parts.push((r.email as { sent?: boolean }).sent ? 'email sent' : 'email drafted');
          return parts.join(' → ');
        }).join('\n');

        await sendMessage(`<b>Pipeline Complete</b>\nProcessed: ${data.processed || 1}\n\n${summary}`);
      }
    } else {
      await sendMessage(`<b>Pipeline Error</b>\n${data.error || 'Unknown error'}`);
    }
  } catch (err) {
    await sendMessage(`<b>Pipeline FAILED</b>\n${err instanceof Error ? err.message : String(err)}`);
  }
}

async function handleFollowup() {
  await sendMessage('Running follow-up sequence...');

  try {
    const baseUrl = process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

    const res = await fetch(`${baseUrl}/api/cron/followup`, {
      method: 'GET',
      headers: { Authorization: `Bearer ${process.env.CRON_SECRET}` },
    });

    const data = await res.json();

    if (data.success) {
      if (data.processed === 0) {
        await sendMessage('No follow-ups due today.');
      } else {
        const summary = (data.results || []).map((r: Record<string, string>) =>
          `${r.business}: ${r.type} → ${r.status}`
        ).join('\n');
        await sendMessage(`<b>Follow-ups Complete</b>\nProcessed: ${data.processed}\n\n${summary}`);
      }
    } else {
      await sendMessage(`<b>Follow-up Error</b>\n${data.error || 'Unknown error'}`);
    }
  } catch (err) {
    await sendMessage(`<b>Follow-up FAILED</b>\n${err instanceof Error ? err.message : String(err)}`);
  }
}

async function handleStatus() {
  try {
    const [huntStatus, leads] = await Promise.all([
      getHuntStatus(),
      readLeads(),
    ]);

    const statusCounts: Record<string, number> = {};
    for (const lead of leads) {
      statusCounts[lead.status] = (statusCounts[lead.status] || 0) + 1;
    }

    const statusLines = Object.entries(statusCounts)
      .sort((a, b) => b[1] - a[1])
      .map(([status, count]) => `  ${status}: ${count}`)
      .join('\n');

    const next = huntStatus.nextTarget;
    const last = huntStatus.lastSession;

    await sendMessage(
      `<b>System Status</b>\n\n` +
      `<b>Leads:</b> ${leads.length} total\n${statusLines}\n\n` +
      `<b>Hunt:</b>\n` +
      `  Next target: ${next.vertical} x ${next.metro}\n` +
      `  Sessions run: ${huntStatus.state.totalSessionsRun}\n` +
      `  Total queued: ${huntStatus.state.totalLeadsQueued}\n` +
      (last ? `  Last run: ${last.startedAt?.split('T')[0]} (${last.prospectsFound} found)` : '  No sessions yet'),
    );
  } catch (err) {
    await sendMessage(`<b>Status Error</b>\n${err instanceof Error ? err.message : String(err)}`);
  }
}

async function handleHelp() {
  await sendMessage(
    `<b>Available Commands</b>\n\n` +
    `/hunt — Run a manual hunt session\n` +
    `/pipeline — Process all queued leads\n` +
    `/pipeline &lt;leadId&gt; — Process a specific lead\n` +
    `/followup — Run follow-up sequence\n` +
    `/status — Show system status\n` +
    `/help — Show this message`,
  );
}
