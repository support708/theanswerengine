import { NextRequest, NextResponse } from 'next/server';
import { getLeadById, updateLead, readLeads, writeLeads } from '@/lib/leads';
import { sanitizeField } from '@/lib/sanitize';
import { notifyStatusChange } from '@/lib/telegram';
import type { LeadStatus } from '@/lib/types';

const VALID_STATUSES: LeadStatus[] = [
  'queued', 'researching', 'research_complete', 'generating_report',
  'report_ready', 'email_drafted', 'approved', 'sent',
  'replied', 'follow_up_1', 'follow_up_2', 'follow_up_3',
  'closed_won', 'closed_lost', 'no_response',
];

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const lead = await getLeadById(id);
  if (!lead) {
    return NextResponse.json({ error: 'Lead not found' }, { status: 404 });
  }
  return NextResponse.json(lead);
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = await req.json();

  // Build safe update object
  const updates: Record<string, unknown> = {};

  if (body.status) {
    if (!VALID_STATUSES.includes(body.status)) {
      return NextResponse.json({ error: 'Invalid status' }, { status: 400 });
    }
    updates.status = body.status;
  }

  if (body.notes !== undefined) {
    updates.notes = sanitizeField('notes', body.notes);
  }

  if (body.research !== undefined) {
    updates.research = body.research;
  }

  if (body.emailDraftId !== undefined) {
    updates.emailDraftId = body.emailDraftId;
  }

  if (body.reportSlug !== undefined) {
    updates.reportSlug = body.reportSlug;
  }

  // Add to action log
  if (body.action) {
    const lead = await getLeadById(id);
    if (lead) {
      updates.actionLog = [
        ...lead.actionLog,
        { action: sanitizeField('action', body.action), timestamp: new Date().toISOString() },
      ];
    }
  }

  const updated = await updateLead(id, updates);
  if (!updated) {
    return NextResponse.json({ error: 'Lead not found' }, { status: 404 });
  }

  // Telegram notification for manual status changes
  if (body.status && ['approved', 'sent', 'replied', 'follow_up_1', 'follow_up_2', 'follow_up_3', 'closed_won', 'closed_lost', 'no_response'].includes(body.status)) {
    await notifyStatusChange(updated, body.status);
  }

  return NextResponse.json(updated);
}

export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const leads = await readLeads();
  const filtered = leads.filter(l => l.id !== id);

  if (filtered.length === leads.length) {
    return NextResponse.json({ error: 'Lead not found' }, { status: 404 });
  }

  await writeLeads(filtered);
  return NextResponse.json({ success: true });
}
