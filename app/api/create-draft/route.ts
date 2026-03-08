import { NextRequest, NextResponse } from 'next/server';
import { getLeadById, updateLead } from '@/lib/leads';
import { buildEmailSubject, buildEmailBody } from '@/lib/gmail';
import { createGmailDraft, isGmailConfigured } from '@/lib/gmail-api';
import { notifyEmailDrafted } from '@/lib/telegram';

export async function POST(req: NextRequest) {
  const { leadId } = await req.json();
  if (!leadId) {
    return NextResponse.json({ error: 'leadId required' }, { status: 400 });
  }

  const lead = await getLeadById(leadId);
  if (!lead) {
    return NextResponse.json({ error: 'Lead not found' }, { status: 404 });
  }

  if (lead.status !== 'report_ready' && lead.status !== 'email_drafted') {
    return NextResponse.json({ error: 'Report must be ready before drafting email' }, { status: 400 });
  }

  if (!lead.contactEmail) {
    return NextResponse.json({ error: 'Lead has no contact email' }, { status: 400 });
  }

  const subject = buildEmailSubject(lead);
  const body = buildEmailBody(lead);

  let draftId: string | null = null;
  let gmailUsed = false;

  // Try to create a real Gmail draft if credentials are configured
  if (isGmailConfigured()) {
    try {
      const result = await createGmailDraft({
        to: lead.contactEmail,
        subject,
        body,
      });
      if (result) {
        draftId = result.draftId;
        gmailUsed = true;
      }
    } catch (error) {
      console.error('Gmail draft creation failed:', error);
      // Fall through — still mark as drafted with email content returned
    }
  }

  const updated = await updateLead(leadId, {
    status: 'email_drafted',
    emailDraftId: draftId,
    actionLog: [
      ...lead.actionLog,
      {
        action: gmailUsed
          ? `Gmail draft created (${draftId})`
          : 'Email draft prepared (manual send required)',
        timestamp: new Date().toISOString(),
      },
    ],
  });

  if (updated) {
    await notifyEmailDrafted(updated);
  }

  return NextResponse.json({
    success: true,
    gmailDraft: gmailUsed,
    draftId,
    email: {
      to: lead.contactEmail,
      subject,
      body,
    },
  });
}
