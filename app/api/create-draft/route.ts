import { NextRequest, NextResponse } from 'next/server';
import { getLeadById, updateLead } from '@/lib/leads';
import { buildEmailSubject, buildEmailBody } from '@/lib/gmail';
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

  const subject = buildEmailSubject(lead);
  const body = buildEmailBody(lead);

  // Return the email content for the admin to review and create draft via Gmail MCP
  // The actual Gmail draft creation happens through the Gmail MCP connected to Claude Code
  // In production, this would integrate with Gmail API directly

  const updated = await updateLead(leadId, {
    status: 'email_drafted',
    actionLog: [
      ...lead.actionLog,
      { action: 'Email draft prepared', timestamp: new Date().toISOString() },
    ],
  });

  // Telegram notification
  if (updated) {
    await notifyEmailDrafted(updated);
  }

  return NextResponse.json({
    success: true,
    email: {
      to: lead.contactEmail,
      subject,
      body,
    },
  });
}
