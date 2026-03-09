/**
 * Cron endpoint for follow-up email sequences.
 * Runs daily, finds leads due for follow-ups, AUTO-SENDS emails.
 * 100% autonomous -- no manual approval gate.
 *
 * Schedule: Daily at 9am PT (16:00 UTC)
 * Rate limited by domain warmup plan in lib/email-scheduler.ts
 */
import { NextRequest, NextResponse } from 'next/server';
import { readLeads, updateLead, getLeadById } from '@/lib/leads';
import { getFollowUpTemplates } from '@/lib/gmail';
import { sendGmailMessage, isGmailConfigured } from '@/lib/gmail-api';
import { getLeadsDueForFollowUp, canSendToday, logSend } from '@/lib/email-scheduler';
import { notifyFollowUpFailure } from '@/lib/telegram';

export const maxDuration = 60;

// Vercel cron sends GET requests
export async function GET(req: NextRequest) {
  return handleRequest(req);
}

export async function POST(req: NextRequest) {
  return handleRequest(req);
}

async function handleRequest(req: NextRequest) {
  // Auth check
  const authHeader = req.headers.get('authorization');
  const secret = process.env.CRON_SECRET;
  if (!secret || authHeader !== `Bearer ${secret}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const leads = await readLeads();
    const dueLeads = getLeadsDueForFollowUp(leads);

    if (dueLeads.length === 0) {
      return NextResponse.json({ success: true, message: 'No follow-ups due', processed: 0 });
    }

    const results: Array<{ leadId: string; business: string; type: string; status: string }> = [];

    for (const { lead, followUpType } of dueLeads) {
      // Check rate limit before each send
      const sendStatus = await canSendToday();
      if (!sendStatus.allowed) {
        results.push({
          leadId: lead.id,
          business: lead.businessName,
          type: followUpType,
          status: `rate_limited (${sendStatus.sent}/${sendStatus.limit} today)`,
        });
        break; // Stop processing, hit daily limit
      }

      const templates = getFollowUpTemplates(lead, followUpType);
      let sent = false;
      let messageId = '';
      let threadId = '';

      // Log send BEFORE sending to prevent double-send on crash
      if (isGmailConfigured() && lead.contactEmail) {
        await logSend(lead.id, lead.contactEmail, followUpType);

        try {
          const result = await sendGmailMessage({
            to: lead.contactEmail,
            subject: templates.subject,
            body: templates.body,
            htmlBody: templates.htmlBody,
          });
          if (result) {
            sent = true;
            messageId = result.messageId;
            threadId = result.threadId;
          }
        } catch (error) {
          console.error(`Follow-up send failed for ${lead.businessName} (${followUpType}):`, error);
        }
      }

      // Update lead status
      const currentLead = await getLeadById(lead.id);
      if (currentLead) {
        await updateLead(lead.id, {
          status: followUpType,
          actionLog: [
            ...currentLead.actionLog,
            {
              action: sent
                ? `${followUpType} auto-sent via Gmail (${messageId})`
                : `${followUpType} send failed, no Gmail configured`,
              timestamp: new Date().toISOString(),
            },
          ],
        });

        // Only notify on failure
        if (!sent) {
          await notifyFollowUpFailure(lead.businessName, followUpType, 'Gmail send failed or not configured');
        }
      }

      results.push({
        leadId: lead.id,
        business: lead.businessName,
        type: followUpType,
        status: sent ? 'auto_sent' : 'send_failed',
      });
    }

    // Auto-close leads past follow_up_3 with no response
    const staleLeads = leads.filter(l => {
      if (l.status !== 'follow_up_3') return false;
      const lastAction = l.actionLog[l.actionLog.length - 1];
      if (!lastAction) return false;
      const daysSince = Math.floor((Date.now() - new Date(lastAction.timestamp).getTime()) / (1000 * 60 * 60 * 24));
      return daysSince >= 7;
    });

    for (const lead of staleLeads) {
      await updateLead(lead.id, {
        status: 'no_response',
        actionLog: [
          ...lead.actionLog,
          { action: 'Auto-closed: no response after 3 follow-ups', timestamp: new Date().toISOString() },
        ],
      });
      results.push({
        leadId: lead.id,
        business: lead.businessName,
        type: 'no_response',
        status: 'auto_closed',
      });
    }

    return NextResponse.json({
      success: true,
      processed: results.length,
      results,
    });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Follow-up cron failed' },
      { status: 500 }
    );
  }
}
