/**
 * Cron endpoint for follow-up email sequences.
 * Runs daily, finds leads due for follow-ups, creates Gmail drafts.
 * Respects daily send rate limits for domain warmup.
 *
 * Schedule: Daily at 9am PT (16:00 UTC) Mon-Fri
 */
import { NextRequest, NextResponse } from 'next/server';
import { readLeads, updateLead, getLeadById } from '@/lib/leads';
import { getFollowUpTemplates } from '@/lib/gmail';
import { createGmailDraft, isGmailConfigured } from '@/lib/gmail-api';
import { getLeadsDueForFollowUp, canSendToday, logSend } from '@/lib/email-scheduler';
import { notifyStatusChange } from '@/lib/telegram';

export const maxDuration = 60;

export async function POST(req: NextRequest) {
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
      let draftId: string | null = null;
      let gmailUsed = false;

      if (isGmailConfigured()) {
        try {
          const gmailResult = await createGmailDraft({
            to: lead.contactEmail,
            subject: templates.subject,
            body: templates.body,
            htmlBody: templates.htmlBody,
          });
          if (gmailResult) {
            draftId = gmailResult.draftId;
            gmailUsed = true;
          }
        } catch (error) {
          console.error(`Gmail draft failed for ${lead.businessName} (${followUpType}):`, error);
        }
      }

      // Update lead status
      const currentLead = await getLeadById(lead.id);
      if (currentLead) {
        await updateLead(lead.id, {
          status: followUpType,
          emailDraftId: draftId || currentLead.emailDraftId,
          actionLog: [
            ...currentLead.actionLog,
            {
              action: gmailUsed
                ? `${followUpType} Gmail draft created (${draftId})`
                : `${followUpType} email prepared`,
              timestamp: new Date().toISOString(),
            },
          ],
        });

        // Log the send for rate limiting
        await logSend(lead.id, lead.contactEmail, followUpType);

        // Telegram notification
        await notifyStatusChange(currentLead, followUpType);
      }

      results.push({
        leadId: lead.id,
        business: lead.businessName,
        type: followUpType,
        status: gmailUsed ? 'draft_created' : 'prepared',
      });
    }

    // Check for leads past follow_up_3 that should be marked no_response
    const staleLeads = leads.filter(l => {
      if (l.status !== 'follow_up_3') return false;
      const lastAction = l.actionLog[l.actionLog.length - 1];
      if (!lastAction) return false;
      const daysSince = Math.floor((Date.now() - new Date(lastAction.timestamp).getTime()) / (1000 * 60 * 60 * 24));
      return daysSince >= 7; // 7 days after follow_up_3 with no response
    });

    for (const lead of staleLeads) {
      await updateLead(lead.id, {
        status: 'no_response',
        actionLog: [
          ...lead.actionLog,
          { action: 'Auto-marked no_response (no reply after 3 follow-ups)', timestamp: new Date().toISOString() },
        ],
      });
      await notifyStatusChange(lead, 'no_response');
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
