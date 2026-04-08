/**
 * Lead Hunter Bot — Core Logic (v3)
 *
 * 3-pass search strategy:
 *   Pass 1: Business discovery — find real businesses via web search (reliable, never empty)
 *   Pass 2: AI citation test — ask who AI recommends, cross-reference, build prospect profiles
 *   Pass 3: Contact enrichment + differentiator extraction
 *   Scoring: 5-factor with citation-weighted AI Blind Spot score
 *   Gate: Outreach-readiness check (Fabrication Gate)
 *
 * Uses Claude Haiku for cost-efficient discovery.
 */

import { callClaudeWithWebSearch, extractText } from './anthropic';
import type { RawProspect, LeadScoreBreakdown, HuntPriority, HuntState, CitationResult } from './hunter-types';
import { VERTICALS, METROS } from './hunter-types';
import { getCurrentHuntPriorities } from './learning-data';
import { readHuntLog } from './hunter-data';

const HUNT_MODEL = 'claude-haiku-4-5';

/**
 * Validate and sanitize an email string.
 * Returns the email if valid, undefined if not.
 * Catches AI hallucinations like "Not found", "N/A", "unknown@", etc.
 */
export function sanitizeEmail(raw: string | undefined | null): string | undefined {
  if (!raw || typeof raw !== 'string') return undefined;
  const trimmed = raw.trim().toLowerCase();

  // Reject obvious non-emails
  const rejectPatterns = [
    'not found', 'not available', 'n/a', 'none', 'unknown', 'no email',
    'unavailable', 'not listed', 'not provided', 'no contact',
  ];
  if (rejectPatterns.some(p => trimmed.includes(p))) return undefined;

  // Must have @ and . after @
  if (!trimmed.includes('@') || !trimmed.includes('.')) return undefined;

  // Basic email regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(trimmed)) return undefined;

  return trimmed;
}

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

/**
 * Learning-aware rotation: 50/50 explore/exploit strategy.
 * Even sessions: pure rotation (exploration of new verticals/metros).
 * Odd sessions: pick the top priority from learning data (exploitation of winners).
 * Falls back to pure rotation if no learning data exists.
 */
export async function getRotationTargetWithLearning(
  state: HuntState,
): Promise<{ vertical: string; metro: string }> {
  let priorities: import('./learning').HuntPriority[] = [];
  try {
    priorities = await getCurrentHuntPriorities();
  } catch {
    // Learning log may not exist yet — fall back to pure rotation
  }

  // If no learning data, pure rotation
  if (priorities.length === 0) {
    return getRotationTarget(state);
  }

  // 50/50 explore/exploit
  const useExploitation = state.totalSessionsRun % 2 === 0;
  if (!useExploitation) {
    return getRotationTarget(state);
  }

  // Exploitation: pick the highest-scoring priority not run in last 3 sessions
  let recentPairs: Set<string>;
  try {
    const log = await readHuntLog();
    const last3 = log.slice(-3);
    recentPairs = new Set(last3.map(s => `${s.vertical}|${s.metro}`));
  } catch {
    recentPairs = new Set();
  }

  const bestPriority = priorities.find(
    p => !recentPairs.has(`${p.vertical}|${p.metro}`) && p.sampleSize >= 2
  );

  if (bestPriority) {
    return { vertical: bestPriority.vertical, metro: bestPriority.metro };
  }

  // Fallback to rotation if all priorities were recently run
  return getRotationTarget(state);
}

// --- Search Pass 1: Business Discovery (find real businesses, always returns results) ---

export async function runSearchPass1(
  vertical: string,
  metro: string,
): Promise<string[]> {
  const maxLeads = process.env.HUNT_MAX_LEADS_PER_SESSION || '10';

  const response = await callClaudeWithWebSearch({
    model: HUNT_MODEL,
    system: `You are a business researcher. Your ONLY job is to search the web and find real, currently operating local service businesses. You must return a JSON array of business names. Do not add commentary, caveats, or explanations. Just the JSON array.`,
    messages: [
      {
        role: 'user',
        content: `Search for ${vertical} businesses currently operating in ${metro}. Find ${maxLeads} real businesses by searching Google, Yelp, and local directories.

Requirements:
- Each must be a real, currently operating business (not a directory or aggregator)
- Include businesses of varying sizes (some well-known, some smaller local shops)
- Prefer businesses that have a website and Google reviews

Return ONLY a JSON array of business names. Nothing else.
Example: ["Smith Plumbing", "Jones & Sons HVAC", "Metro Electric Services"]`,
      },
    ],
    maxTokens: 1024,
  });

  const text = extractText(response);

  // Try JSON array extraction
  try {
    const match = text.match(/\[[\s\S]*?\]/);
    if (match) {
      const parsed = JSON.parse(match[0]) as string[];
      if (parsed.length > 0) return parsed;
    }
  } catch {
    // JSON parsing failed
  }

  // Fallback: extract business names from text lines
  const lines = text
    .split('\n')
    .map(l => l.replace(/^[-*\d.)"'\s]+/, '').replace(/["',]+$/, '').trim())
    .filter(l => l.length > 3 && l.length < 80 && !l.toLowerCase().startsWith('i ') && !l.toLowerCase().startsWith('here'));

  return lines.length > 0 ? lines : [];
}

// --- Search Pass 2: AI Citation Test + Prospect Profiles (SOP Phase 3) ---

export async function runSearchPass2(
  businessNames: string[],
  vertical: string,
  metro: string,
): Promise<RawProspect[]> {
  const maxLeads = process.env.HUNT_MAX_LEADS_PER_SESSION || '10';
  const city = metro.split(',')[0].trim();
  const state = metro.split(',')[1]?.trim() || '';

  // Build the business list prompt section
  const hasNames = businessNames.length > 0;
  const businessListSection = hasNames
    ? `I have a list of ${vertical} businesses in ${metro}. For each one, search the web and gather their details.\n\nBusinesses to research:\n${businessNames.slice(0, 10).map((n, i) => `${i + 1}. ${n}`).join('\n')}`
    : `Search the web and find ${maxLeads} real ${vertical} businesses currently operating in ${metro}. Search Google, Yelp, and local directories.`;

  const response = await callClaudeWithWebSearch({
    model: HUNT_MODEL,
    system: `You are a business intelligence researcher. Search the web for detailed information about local service businesses. Return ONLY valid JSON with the requested structure. No commentary, no caveats, no markdown fences. You MUST return data -- never return an empty result.`,
    messages: [
      {
        role: 'user',
        content: `${businessListSection}

For EACH business, search for:
1. Their website URL
2. Their Google review count and star rating
3. Owner or manager name (from website About page, LinkedIn, or directory)
4. Contact email (from their website contact page)
5. Phone number
6. A unique differentiator (years in business, specialty, awards, review themes)

Also answer this question: If a customer asked "Who is the best ${vertical} in ${city}?", which 3-5 businesses would most AI assistants recommend based on their online presence? List those as the "topCited" businesses.

Return this exact JSON structure:
{
  "topCited": ["Business A", "Business B", "Business C"],
  "businesses": [
    {
      "businessName": "Exact Business Name",
      "website": "https://...",
      "phone": "(555) 123-4567",
      "contactName": "Owner Name",
      "contactEmail": "email@business.com",
      "reviewCount": 150,
      "rating": 4.7,
      "differentiator": "Family-owned since 1992, 500+ Google reviews, specializes in emergency service"
    }
  ]
}

Include ALL businesses from the list. Omit any field you cannot verify rather than guessing.`,
      },
    ],
    maxTokens: 4096,
  });

  const text = extractText(response);

  try {
    // Try to parse as the new {topCited, businesses} structure
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      const parsed = JSON.parse(jsonMatch[0]) as {
        topCited?: string[];
        businesses?: Partial<RawProspect>[];
      };

      const topCited = Array.isArray(parsed.topCited) ? parsed.topCited : [];
      const businesses = Array.isArray(parsed.businesses) ? parsed.businesses : [];

      if (businesses.length > 0) {
        return businesses
          .filter(p => p.businessName)
          .map(p => {
            const isCited = topCited.some(tc =>
              tc.toLowerCase().includes((p.businessName || '').toLowerCase()) ||
              (p.businessName || '').toLowerCase().includes(tc.toLowerCase()),
            );

            // Build citation result: not cited = prospect opportunity
            const citationResults: CitationResult[] = [{
              platform: 'chatgpt' as const,
              query: `best ${vertical} in ${city}`,
              cited: isCited,
              competitorsCited: topCited.filter(tc =>
                !tc.toLowerCase().includes((p.businessName || '').toLowerCase()),
              ).slice(0, 5),
            }];

            const painSignals = isCited
              ? [`${p.businessName} appears in AI recommendations but may have optimization gaps`]
              : [`${p.businessName} has ${p.reviewCount || 'multiple'} Google reviews but is not recommended by AI assistants for "${vertical} in ${city}"`];

            return {
              businessName: p.businessName || '',
              contactName: p.contactName,
              contactEmail: sanitizeEmail(p.contactEmail),
              website: p.website,
              phone: p.phone,
              city,
              state,
              serviceNiche: vertical,
              reviewCount: typeof p.reviewCount === 'number' ? p.reviewCount : undefined,
              rating: typeof p.rating === 'number' ? p.rating : undefined,
              painSignals,
              citationResults,
              differentiator: typeof p.differentiator === 'string' ? p.differentiator : undefined,
              outreachReady: false,
              scoreBreakdown: { aiBlindSpot: 0, reputationStrength: 0, contentGap: 0, revenuePotential: 0, contactQuality: 0, total: 0 },
              priority: 'P3' as HuntPriority,
            };
          });
      }
    }

    // Fallback: try parsing as a plain array (old format)
    const arrayMatch = text.match(/\[[\s\S]*\]/);
    if (arrayMatch) {
      const parsed = JSON.parse(arrayMatch[0]) as Partial<RawProspect>[];
      return parsed
        .filter(p => p.businessName)
        .map(p => ({
          businessName: p.businessName || '',
          contactName: p.contactName,
          contactEmail: sanitizeEmail(p.contactEmail),
          website: p.website,
          phone: p.phone,
          city,
          state,
          serviceNiche: vertical,
          reviewCount: typeof p.reviewCount === 'number' ? p.reviewCount : undefined,
          rating: typeof p.rating === 'number' ? p.rating : undefined,
          painSignals: Array.isArray(p.painSignals) ? p.painSignals : [],
          citationResults: parseCitationResults(p.citationResults),
          differentiator: typeof p.differentiator === 'string' ? p.differentiator : undefined,
          outreachReady: false,
          scoreBreakdown: { aiBlindSpot: 0, reputationStrength: 0, contentGap: 0, revenuePotential: 0, contactQuality: 0, total: 0 },
          priority: 'P3' as HuntPriority,
        }));
    }
  } catch {
    // JSON parsing failed
  }

  return [];
}

/** Safely parse citation results from Claude's output */
function parseCitationResults(raw: unknown): CitationResult[] {
  if (!Array.isArray(raw)) return [];

  const validPlatforms = ['chatgpt', 'claude', 'perplexity', 'google_ai'] as const;

  return raw
    .filter((r): r is Record<string, unknown> => r && typeof r === 'object')
    .map(r => ({
      platform: (validPlatforms.includes(r.platform as typeof validPlatforms[number])
        ? r.platform
        : 'chatgpt') as CitationResult['platform'],
      query: typeof r.query === 'string' ? r.query : '',
      cited: r.cited === true,
      competitorsCited: Array.isArray(r.competitorsCited)
        ? r.competitorsCited.filter((c): c is string => typeof c === 'string')
        : [],
    }));
}

/**
 * Build a fallback citation result from pain signals when Claude
 * doesn't return structured citationResults (common with Haiku).
 * Extracts competitor names mentioned in pain signal text.
 */
function buildFallbackCitation(
  painSignals: string[],
  businessName: string,
  vertical: string,
  metro: string,
): CitationResult[] {
  // Look for competitor mentions in pain signals
  const competitors: string[] = [];
  const nameLower = businessName.toLowerCase();

  for (const signal of painSignals) {
    // Match "CompetitorName shows up" / "recommends CompetitorName" / "CompetitorName appears"
    // Also match common patterns like "but X is cited instead"
    const words = signal.split(/[,.]/).map(s => s.trim());
    for (const segment of words) {
      // Find capitalized multi-word names that aren't our business
      const nameMatch = segment.match(/([A-Z][A-Za-z]+(?:\s+[A-Z&][A-Za-z]*)*)/g);
      if (nameMatch) {
        for (const name of nameMatch) {
          if (
            name.length > 3 &&
            name.length < 50 &&
            !name.toLowerCase().includes(nameLower) &&
            !['Google', 'ChatGPT', 'Perplexity', 'Yelp', 'BBB', 'Reddit', 'Facebook', 'LinkedIn', 'Instagram'].includes(name) &&
            !name.match(/^(The|This|That|These|Their|They|When|What|How|Not|But|And|For|With|Has|Had|Are|Was|Were)$/)
          ) {
            if (!competitors.includes(name)) {
              competitors.push(name);
            }
          }
        }
      }
    }
  }

  if (competitors.length === 0) return [];

  return [{
    platform: 'chatgpt' as const,
    query: `${vertical} in ${metro}`,
    cited: false,
    competitorsCited: competitors.slice(0, 5),
  }];
}

// --- Search Pass 3: Contact Enrichment + Email Hunt + Differentiator (combined) ---

export async function runSearchPass3(
  prospects: RawProspect[],
): Promise<RawProspect[]> {
  if (prospects.length === 0) return [];

  // Enrich all prospects missing ANY key data (email, name, or differentiator)
  const needsEnrichment = prospects.filter(p => !p.contactEmail || !p.contactName || !p.differentiator);
  if (needsEnrichment.length === 0) return prospects;

  const businessList = needsEnrichment
    .map(p => {
      const missing: string[] = [];
      if (!p.contactEmail) missing.push('EMAIL');
      if (!p.contactName) missing.push('OWNER NAME');
      if (!p.differentiator) missing.push('DIFFERENTIATOR');
      return `- ${p.businessName} (${p.city}, ${p.state}) | website: ${p.website || 'unknown'} | reviews: ${p.reviewCount || '?'} | NEEDS: ${missing.join(', ')}`;
    })
    .join('\n');

  const response = await callClaudeWithWebSearch({
    model: HUNT_MODEL,
    system: `You are a business contact researcher. Your #1 priority is finding EMAIL ADDRESSES. Search aggressively: business websites (contact page, footer, about page), Google Business profiles, Yelp, BBB, LinkedIn, and any public directory. Also find owner names and one unique differentiator per business. Return ONLY a JSON array. No markdown, no commentary.`,
    messages: [
      {
        role: 'user',
        content: `Find contact info for these businesses. EMAIL is the top priority.

${businessList}

Search strategies for EMAIL (try ALL of these):
1. Visit the business website contact page, footer, and about page
2. Search Google for "[business name] [city] email" and "[business name] contact"
3. Check Google Business profile for listed email
4. Check Yelp business page for email
5. Search BBB for the business listing
6. Search LinkedIn for the owner/business
7. If you find the website domain, try info@domain.com or contact@domain.com

Return a JSON array with ALL businesses (even if you only found partial info):
[{
  "businessName": "exact name from above",
  "contactName": "Owner/Manager full name",
  "contactEmail": "their email address (THIS IS CRITICAL)",
  "differentiator": "One specific verifiable thing that makes them stand out"
}]

Include every field you can find. Omit only if truly unfindable after searching.`,
      },
    ],
    maxTokens: 2048,
  });

  const text = extractText(response);

  try {
    const match = text.match(/\[[\s\S]*\]/);
    if (match) {
      const enrichments = JSON.parse(match[0]) as {
        businessName: string;
        contactName?: string;
        contactEmail?: string;
        differentiator?: string;
      }[];

      for (const enrichment of enrichments) {
        const prospect = prospects.find(
          p => p.businessName.toLowerCase() === enrichment.businessName.toLowerCase(),
        );
        if (prospect) {
          if (enrichment.contactName && !prospect.contactName) {
            prospect.contactName = enrichment.contactName;
          }
          if (enrichment.contactEmail && !prospect.contactEmail) {
            const cleanEmail = sanitizeEmail(enrichment.contactEmail);
            if (cleanEmail) {
              prospect.contactEmail = cleanEmail;
            }
          }
          if (enrichment.differentiator && !prospect.differentiator) {
            prospect.differentiator = enrichment.differentiator;
          }
        }
      }
    }
  } catch {
    // Enrichment failed — prospects keep what they have
  }

  return prospects;
}

// --- Pass 5: Outreach-Readiness Check (SOP Fabrication Gate) ---

/**
 * Checks whether a prospect has enough verified data
 * to fill in the SOP outreach templates without fabrication.
 *
 * SOP Fabrication Gate requires ALL THREE:
 * 1. Citation test completed (at least 1 citation result with competitors)
 * 2. Enrichment done (real business name, real contact, real contact method)
 * 3. Every template bracket fillable with verified data
 */
export function checkOutreachReadiness(prospect: RawProspect): boolean {
  // Gate 1: Citation test completed with actual competitor data
  const hasCitationData = prospect.citationResults.length > 0 &&
    prospect.citationResults.some(r => r.competitorsCited.length > 0);

  // Gate 2: Contact enrichment — name + at least one contact method
  const hasContact = !!prospect.contactName && (!!sanitizeEmail(prospect.contactEmail) || !!prospect.phone);

  // Gate 3: Template-fillable data — city, niche, and at least one differentiator or pain signal
  const hasTemplateData = !!prospect.city && !!prospect.serviceNiche &&
    (!!prospect.differentiator || prospect.painSignals.length > 0);

  return hasCitationData && hasContact && hasTemplateData;
}

// --- 5-Factor Scoring (Updated: citation-weighted) ---

export function scoreProspect(prospect: RawProspect): LeadScoreBreakdown {
  // AI Blind Spot (0-15): Citation test results + pain signals
  let aiBlindSpot = 0;
  if (prospect.citationResults.length > 0) {
    // Not cited on any platform = maximum blind spot
    const notCitedCount = prospect.citationResults.filter(r => !r.cited).length;
    const competitorsFound = new Set(
      prospect.citationResults.flatMap(r => r.competitorsCited),
    ).size;
    aiBlindSpot += Math.min(10, notCitedCount * 4); // Up to 10 for not being cited
    aiBlindSpot += Math.min(5, competitorsFound * 1.5); // Up to 5 for competitors being cited instead
  } else {
    // No citation data — fall back to pain signal count
    aiBlindSpot = Math.min(15, prospect.painSignals.length * 3);
  }
  aiBlindSpot = Math.min(15, aiBlindSpot);

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
    contentGap = 10;
  } else {
    contentGap = 6; // Assume moderate gap — full assessment in research phase
  }

  // Revenue Potential (0-7.5): Based on niche profitability
  const highRevNiches = ['personal injury attorney', 'med spa', 'dentist'];
  const medRevNiches = ['hvac contractor', 'roofing contractor', 'chiropractor'];
  const niche = prospect.serviceNiche.toLowerCase();
  let revenuePotential = 5;
  if (highRevNiches.some(n => niche.includes(n))) revenuePotential = 7.5;
  else if (medRevNiches.some(n => niche.includes(n))) revenuePotential = 6;

  // Contact Quality (0-5): Actionable contact info + differentiator
  let contactQuality = 0;
  if (prospect.contactEmail) contactQuality += 2;
  if (prospect.contactName) contactQuality += 1;
  if (prospect.phone) contactQuality += 0.5;
  if (prospect.differentiator) contactQuality += 1.5; // Differentiator = template-ready
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
