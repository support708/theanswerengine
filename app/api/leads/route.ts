import { NextRequest, NextResponse } from 'next/server';
import { readLeads, writeLeads, generateId, generateSlug } from '@/lib/leads';
import { sanitizeField, sanitizeEmail, sanitizeUrl } from '@/lib/sanitize';
import { notifyLeadCreated } from '@/lib/telegram';
import type { Lead, LeadFormData } from '@/lib/types';

export async function GET() {
  const leads = await readLeads();
  return NextResponse.json(leads);
}

export async function POST(req: NextRequest) {
  const body = (await req.json()) as LeadFormData;

  // Sanitize all inputs
  const businessName = sanitizeField('businessName', body.businessName);
  const contactFirstName = sanitizeField('contactFirstName', body.contactFirstName);
  const contactEmail = sanitizeEmail(body.contactEmail ?? '');
  const websiteUrl = sanitizeUrl(body.websiteUrl ?? '');
  const city = sanitizeField('city', body.city);
  const serviceNiche = sanitizeField('serviceNiche', body.serviceNiche);
  const competitorName = sanitizeField('competitorName', body.competitorName);
  const notes = sanitizeField('notes', body.notes);

  // Validate required fields
  if (!businessName || !contactFirstName || !contactEmail || !city || !serviceNiche) {
    return NextResponse.json(
      { error: 'Missing required fields: businessName, contactFirstName, contactEmail, city, serviceNiche' },
      { status: 400 }
    );
  }

  if (!contactEmail) {
    return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
  }

  const reviewCount = body.reviewCount ? parseInt(body.reviewCount, 10) || null : null;
  const rating = body.rating ? parseFloat(body.rating) || null : null;

  const lead: Lead = {
    id: generateId(),
    businessName,
    contactFirstName,
    contactEmail,
    websiteUrl,
    city,
    serviceNiche,
    competitorName,
    reviewCount,
    rating,
    notes,
    status: 'queued',
    research: null,
    reportSlug: generateSlug(businessName),
    emailDraftId: null,
    fabricationFlags: [],
    emDashClean: false,
    actionLog: [{ action: 'Lead created', timestamp: new Date().toISOString() }],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  const leads = await readLeads();
  leads.push(lead);
  await writeLeads(leads);

  // Telegram notification
  await notifyLeadCreated(lead);

  return NextResponse.json(lead, { status: 201 });
}
