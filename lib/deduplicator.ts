/**
 * Deduplication for Lead Hunter Bot.
 * Prevents queuing prospects that already exist as leads or in the P3 backlog.
 */

import type { Lead } from './types';
import type { RawProspect } from './hunter-types';

/** Normalize business name for comparison: lowercase, strip legal suffixes, collapse whitespace */
export function normalizeBusinessName(name: string): string {
  return name
    .toLowerCase()
    .replace(/\b(llc|inc|corp|co|ltd|llp|pllc|pc|pa|dba)\b\.?/g, '')
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

/** Extract root domain from URL for comparison */
export function extractDomain(url: string): string {
  try {
    const hostname = new URL(url.startsWith('http') ? url : `https://${url}`).hostname;
    return hostname.replace(/^www\./, '').toLowerCase();
  } catch {
    return url.toLowerCase().replace(/^(https?:\/\/)?(www\.)?/, '').split('/')[0];
  }
}

/** Check if a prospect is a duplicate of any existing lead or backlog entry */
export function isDuplicate(
  prospect: RawProspect,
  existingLeads: Lead[],
  backlog: RawProspect[],
): boolean {
  const normalizedName = normalizeBusinessName(prospect.businessName);
  const prospectDomain = prospect.website ? extractDomain(prospect.website) : null;
  const prospectEmail = prospect.contactEmail?.toLowerCase().trim();

  // Check against existing leads
  for (const lead of existingLeads) {
    // Match by normalized name + city
    if (
      normalizeBusinessName(lead.businessName) === normalizedName &&
      lead.city.toLowerCase() === prospect.city.toLowerCase()
    ) {
      return true;
    }

    // Match by domain
    if (prospectDomain && lead.websiteUrl && extractDomain(lead.websiteUrl) === prospectDomain) {
      return true;
    }

    // Match by email
    if (prospectEmail && lead.contactEmail.toLowerCase() === prospectEmail) {
      return true;
    }
  }

  // Check against P3 backlog
  for (const existing of backlog) {
    if (
      normalizeBusinessName(existing.businessName) === normalizedName &&
      existing.city.toLowerCase() === prospect.city.toLowerCase()
    ) {
      return true;
    }

    if (prospectDomain && existing.website && extractDomain(existing.website) === prospectDomain) {
      return true;
    }

    if (prospectEmail && existing.contactEmail?.toLowerCase() === prospectEmail) {
      return true;
    }
  }

  return false;
}
