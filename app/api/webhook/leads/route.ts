/**
 * External Lead Ingestion Webhook
 * POST /api/webhook/leads
 *
 * Accepts leads from the Python lead hunter bot (or any external system).
 * Auth: Bearer token matching CRON_SECRET env var.
 * Reuses the same dedup, sanitization, and Telegram notification logic as POST /api/leads.
 */

import { NextRequest, NextResponse } from 'next/server';
import { readLeads, writeLeads, generateId, generateSlug } from '@/lib/leads';
import { sanitizeField, sanitizeEmail, sanitizeUrl } from '@/lib/sanitize';
import { normalizeBusinessName, extractDomain } from '@/lib/deduplicator';
import { notifyLeadCreated } from '@/lib/telegram';
import type { Lead } from '@/lib/types';

interface WebhookLeadPayload {
  businessName: string;
  contactFirstName: string;
  contactEmail: string;
  websiteUrl?: string;
  city: string;
  serviceNiche: string;
  competitorName?: string;
  reviewCount?: number | string;
  rating?: number | string;
  notes?: string;
  // Hunter bot enrichment fields
  huntSource?: string;
  huntScore?: number;
  huntPriority?: 'P1' | 'P2' | 'P3';
  huntDifferentiator?: string;
  reportSlug?: string;
}

function authenticateRequest(req: NextRequest): boolean {
  const secret = process.env.CRON_SECRET;
  if (!secret) return false;

  // Check Authorization: Bearer <secret>
  const authHeader = req.headers.get('authorization');
  if (authHeader?.startsWith('Bearer ') && authHeader.slice(7) === secret) {
    return true;
  }

  // Fallback: x-cron-secret header
  const cronHeader = req.headers.get('x-cron-secret');
  if (cronHeader === secret) {
    return true;
  }

  return false;
}

export async function POST(req: NextRequest) {
  if (!authenticateRequest(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  let body: WebhookLeadPayload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  // Sanitize inputs
  const businessName = sanitizeField('businessName', body.businessName);
  const contactFirstName = sanitizeField('contactFirstName', body.contactFirstName);
  const contactEmail = sanitizeEmail(body.contactEmail ?? '');
  const websiteUrl = sanitizeUrl(body.websiteUrl ?? '');
  const city = sanitizeField('city', body.city);
  const serviceNiche = sanitizeField('serviceNiche', body.serviceNiche);
  const competitorName = sanitizeField('competitorName', body.competitorName ?? '');
  const notes = sanitizeField('notes', body.notes ?? '');

  // Validate required fields
  if (!businessName || !contactFirstName || !contactEmail || !city || !serviceNiche) {
    return NextResponse.json(
      { error: 'Missing required fields: businessName, contactFirstName, contactEmail, city, serviceNiche' },
      { status: 400 },
    );
  }

  const reviewCount = body.reviewCount != null ? (typeof body.reviewCount === 'number' ? body.reviewCount : parseInt(String(body.reviewCount), 10) || null) : null;
  const rating = body.rating != null ? (typeof body.rating === 'number' ? body.rating : parseFloat(String(body.rating)) || null) : null;

  const leads = await readLeads();

  // Dedup check
  const normalizedName = normalizeBusinessName(businessName);
  const normalizedEmail = contactEmail.toLowerCase().trim();
  const domain = websiteUrl ? extractDomain(websiteUrl) : null;

  const duplicate = leads.find((existing) => {
    if (normalizeBusinessName(existing.businessName) === normalizedName && existing.city.toLowerCase() === city.toLowerCase()) {
      return true;
    }
    if (normalizedEmail && existing.contactEmail.toLowerCase() === normalizedEmail) {
      return true;
    }
    if (domain && existing.websiteUrl && extractDomain(existing.websiteUrl) === domain) {
      return true;
    }
    return false;
  });

  if (duplicate) {
    return NextResponse.json(
      {
        error: `Duplicate lead: ${duplicate.businessName} (${duplicate.status}) already exists`,
        existingId: duplicate.id,
        deduplicated: true,
      },
      { status: 409 },
    );
  }

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
    status: 'sent', // Hunter bot leads are already emailed — enter pipeline at 'sent'
    research: null,
    reportSlug: body.reportSlug || generateSlug(businessName),
    emailDraftId: null,
    fabricationFlags: [],
    emDashClean: false,
    actionLog: [
      { action: `Lead imported from hunter bot (${body.huntSource || 'lead_bot'})`, timestamp: new Date().toISOString() },
    ],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    // Hunter enrichment fields
    huntSource: body.huntSource || 'lead_bot',
    huntScore: body.huntScore,
    huntPriority: body.huntPriority,
    huntDifferentiator: body.huntDifferentiator,
    huntOutreachReady: true,
  };

  leads.push(lead);
  await writeLeads(leads);

  await notifyLeadCreated(lead);

  return NextResponse.json(
    { success: true, leadId: lead.id, businessName: lead.businessName },
    { status: 201 },
  );
}
