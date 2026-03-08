/**
 * Lead Hunter Bot — Core Logic
 * 3-pass search strategy, 5-factor scoring, rotation management.
 * Uses Claude Haiku + web_search for cost-efficient discovery.
 */

import { callClaudeWithWebSearch, extractText } from './anthropic';
import type { RawProspect, LeadScoreBreakdown, HuntPriority, HuntState } from './hunter-types';
import { VERTICALS, METROS } from './hunter-types';

const HUNT_MODEL = 'claude-haiku-4-5-20251001';

// --- Rotation ---

export function getRotationTarget(state: HuntState): { vertical: string; metro: string } {
  const vi = state.currentVerticalIndex % VERTICALS.length;
  const mi = state.currentMetroIndex % METROS.length;
  return {
    vertical: VERTICALS[vi],
    metro: METROS[mi],
  };
}

export function advanceRotation(state: HuntState): HuntState {
  let vi = state.currentVerticalIndex + 1;
  let mi = state.currentMetroIndex;
  let week = state.currentWeek;

  if (vi >= VERTICALS.length) {
    vi = 0;
    mi = mi + 1;
    if (mi >= METROS.length) {
      mi = 0;
      week = week >= 8 ? 1 : week + 1;
    }
  }

  return {
    ...state,
    currentVerticalIndex: vi,
    currentMetroIndex: mi,
    currentWeek: week,
  };
}

// --- Search Pass 1: Pain Signal Detection ---

export async function runSearchPass1(
  vertical: string,
  metro: string,
): Promise<string[]> {
  const response = await callClaudeWithWebSearch({
    model: HUNT_MODEL,
    system: `You are a lead researcher for an AI visibility agency. Your job is to find local service businesses that are NOT being recommended by AI platforms (ChatGPT, Claude, Google AI, Perplexity). Search the web for real businesses. Return ONLY a JSON array of pain signal strings. No markdown, no explanation.`,
    messages: [
      {
        role: 'user',
        content: `Search for ${vertical} businesses in ${metro} that have signs of being invisible to AI recommendations. Look for:
- Businesses with good Google reviews but no AI presence
- Businesses with outdated websites or no blog content
- Businesses without structured data/schema markup
- Businesses that competitors are outranking in AI results

Return a JSON array of 5-10 pain signal descriptions, each mentioning a specific real business name. Example format:
["ABC Plumbing in Houston has 200+ Google reviews but ChatGPT recommends their competitor XYZ instead", "..."]`,
      },
    ],
    maxTokens: 2048,
  });

  const text = extractText(response);

  try {
    // Try to extract JSON array from response
    const match = text.match(/\[[\s\S]*\]/);
    if (match) {
      return JSON.parse(match[0]) as string[];
    }
  } catch {
    // If JSON parsing fails, split by newlines and filter
  }

  // Fallback: split text into lines as pain signals
  return text
    .split('\n')
    .map(l => l.replace(/^[-*\d.)\s]+/, '').trim())
    .filter(l => l.length > 20);
}

// --- Search Pass 2: Direct Prospect Discovery ---

export async function runSearchPass2(
  painSignals: string[],
  vertical: string,
  metro: string,
): Promise<RawProspect[]> {
  const signalContext = painSignals.slice(0, 5).join('\n');

  const response = await callClaudeWithWebSearch({
    model: HUNT_MODEL,
    system: `You are a lead researcher finding specific business details. Search the web for real, verifiable information. Return ONLY a JSON array of prospect objects. No markdown, no explanation. If you cannot verify a detail, omit it rather than guessing.`,
    messages: [
      {
        role: 'user',
        content: `Based on these pain signals about ${vertical} businesses in ${metro}:

${signalContext}

Search the web and find up to ${process.env.HUNT_MAX_LEADS_PER_SESSION || '10'} specific businesses. For each, provide:

Return a JSON array with this exact structure:
[{
  "businessName": "Real Business Name",
  "contactName": "Owner/Manager name if found",
  "contactEmail": "email if found on website",
  "website": "https://their-website.com",
  "phone": "phone number if found",
  "city": "city name",
  "state": "state abbreviation",
  "serviceNiche": "${vertical}",
  "reviewCount": 123,
  "rating": 4.5,
  "painSignals": ["specific signal 1", "specific signal 2"]
}]

Only include businesses you can verify exist via web search. Omit any field you cannot verify.`,
      },
    ],
    maxTokens: 4096,
  });

  const text = extractText(response);

  try {
    const match = text.match(/\[[\s\S]*\]/);
    if (match) {
      const parsed = JSON.parse(match[0]) as Partial<RawProspect>[];
      return parsed
        .filter(p => p.businessName && p.city)
        .map(p => ({
          businessName: p.businessName || '',
          contactName: p.contactName,
          contactEmail: p.contactEmail,
          website: p.website,
          phone: p.phone,
          city: p.city || metro.split(',')[0].trim(),
          state: p.state || metro.split(',')[1]?.trim() || '',
          serviceNiche: p.serviceNiche || vertical,
          reviewCount: typeof p.reviewCount === 'number' ? p.reviewCount : undefined,
          rating: typeof p.rating === 'number' ? p.rating : undefined,
          painSignals: Array.isArray(p.painSignals) ? p.painSignals : [],
          scoreBreakdown: { aiBlindSpot: 0, reputationStrength: 0, contentGap: 0, revenuePotential: 0, contactQuality: 0, total: 0 },
          priority: 'P3' as HuntPriority,
        }));
    }
  } catch {
    // JSON parsing failed
  }

  return [];
}

// --- Search Pass 3: Contact Enrichment ---

export async function runSearchPass3(
  prospects: RawProspect[],
): Promise<RawProspect[]> {
  if (prospects.length === 0) return [];

  // Only enrich prospects missing key contact info
  const needsEnrichment = prospects.filter(p => !p.contactEmail || !p.contactName);
  if (needsEnrichment.length === 0) return prospects;

  const businessList = needsEnrichment
    .map(p => `- ${p.businessName} (${p.city}, ${p.state}) - website: ${p.website || 'unknown'}`)
    .join('\n');

  const response = await callClaudeWithWebSearch({
    model: HUNT_MODEL,
    system: `You are a contact researcher. Search business websites, LinkedIn, and public directories for owner/manager names and email addresses. Return ONLY a JSON array. No markdown.`,
    messages: [
      {
        role: 'user',
        content: `Find contact information for these businesses:

${businessList}

Return a JSON array:
[{
  "businessName": "exact name from above",
  "contactName": "Owner/Manager full name",
  "contactEmail": "their email"
}]

Only include contacts you can verify from public sources. Omit if not found.`,
      },
    ],
    maxTokens: 2048,
  });

  const text = extractText(response);

  try {
    const match = text.match(/\[[\s\S]*\]/);
    if (match) {
      const enrichments = JSON.parse(match[0]) as { businessName: string; contactName?: string; contactEmail?: string }[];

      // Merge enrichments back into prospects
      for (const enrichment of enrichments) {
        const prospect = prospects.find(
          p => p.businessName.toLowerCase() === enrichment.businessName.toLowerCase(),
        );
        if (prospect) {
          if (enrichment.contactName && !prospect.contactName) {
            prospect.contactName = enrichment.contactName;
          }
          if (enrichment.contactEmail && !prospect.contactEmail) {
            prospect.contactEmail = enrichment.contactEmail;
          }
        }
      }
    }
  } catch {
    // Enrichment failed — prospects keep what they have
  }

  return prospects;
}

// --- 5-Factor Scoring ---

export function scoreProspect(prospect: RawProspect): LeadScoreBreakdown {
  // AI Blind Spot (0-15): More pain signals = higher score
  const signalCount = prospect.painSignals.length;
  const aiBlindSpot = Math.min(15, signalCount * 3);

  // Reputation Strength (0-12.5): Reviews + rating indicate established business
  let reputationStrength = 0;
  if (prospect.reviewCount) {
    if (prospect.reviewCount >= 100) reputationStrength += 6;
    else if (prospect.reviewCount >= 50) reputationStrength += 4;
    else if (prospect.reviewCount >= 20) reputationStrength += 2.5;
    else reputationStrength += 1;
  }
  if (prospect.rating) {
    if (prospect.rating >= 4.5) reputationStrength += 6.5;
    else if (prospect.rating >= 4.0) reputationStrength += 4.5;
    else if (prospect.rating >= 3.5) reputationStrength += 2.5;
  }
  reputationStrength = Math.min(12.5, reputationStrength);

  // Content Gap (0-10): No website or basic website = opportunity
  let contentGap = 0;
  if (!prospect.website) {
    contentGap = 10; // No website = massive gap
  } else {
    // Assume moderate gap — full assessment happens during research phase
    contentGap = 6;
  }

  // Revenue Potential (0-7.5): Based on niche profitability
  const highRevNiches = ['personal injury attorney', 'med spa', 'dentist'];
  const medRevNiches = ['hvac contractor', 'roofing contractor', 'chiropractor'];
  const niche = prospect.serviceNiche.toLowerCase();
  let revenuePotential = 5; // default
  if (highRevNiches.some(n => niche.includes(n))) revenuePotential = 7.5;
  else if (medRevNiches.some(n => niche.includes(n))) revenuePotential = 6;

  // Contact Quality (0-5): Do we have actionable contact info?
  let contactQuality = 0;
  if (prospect.contactEmail) contactQuality += 2.5;
  if (prospect.contactName) contactQuality += 1.5;
  if (prospect.phone) contactQuality += 1;
  contactQuality = Math.min(5, contactQuality);

  const total = Number(
    (aiBlindSpot + reputationStrength + contentGap + revenuePotential + contactQuality).toFixed(1),
  );

  return {
    aiBlindSpot,
    reputationStrength,
    contentGap,
    revenuePotential,
    contactQuality,
    total,
  };
}

export function classifyPriority(score: number): HuntPriority {
  if (score >= 35) return 'P1';
  if (score >= 25) return 'P2';
  return 'P3';
}
