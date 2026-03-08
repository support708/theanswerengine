/**
 * Input sanitization for lead form data.
 * Strips HTML tags, limits field lengths, trims whitespace.
 */

const FIELD_LIMITS: Record<string, number> = {
  businessName: 200,
  contactFirstName: 100,
  contactEmail: 254,
  websiteUrl: 500,
  city: 100,
  serviceNiche: 200,
  competitorName: 200,
  notes: 2000,
};

function stripHtml(str: string): string {
  return str.replace(/<[^>]*>/g, '').replace(/&[^;]+;/g, ' ');
}

export function sanitizeField(key: string, value: unknown): string {
  if (typeof value !== 'string') return '';
  const limit = FIELD_LIMITS[key] ?? 500;
  return stripHtml(value).trim().slice(0, limit);
}

export function sanitizeEmail(email: string): string {
  const cleaned = email.trim().toLowerCase();
  // Basic email format check
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleaned)) return '';
  return cleaned.slice(0, 254);
}

export function sanitizeUrl(url: string): string {
  const trimmed = url.trim();
  if (!trimmed) return '';
  // Add https:// if no protocol
  const withProto = /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
  try {
    new URL(withProto);
    return withProto.slice(0, 500);
  } catch {
    return '';
  }
}
