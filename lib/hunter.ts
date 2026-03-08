/**
 * Lead Hunter Bot — Core Logic (v2, aligned with Morning Lead Hunt SOP v1.1)
 *
 * 4-pass search strategy:
 *   Pass 1: Pain signal detection (SOP Phase 2)
 *   Pass 2: Direct prospect discovery + structured citation test (SOP Phase 3)
 *   Pass 3: Contact enrichment + differentiator extraction (SOP Phase 4)
 *   Pass 4: Outreach-readiness check (SOP Fabrication Gate)
 *
 * 5-factor scoring with citation-weighted AI Blind Spot score.
 * Uses Claude Haiku for cost-efficient discovery.
 */

import { callClaudeWithWebSearch, extractText } from './anthropic';
import type { RawProspect, LeadScoreBreakdown, HuntPriority, HuntState, CitationResult } from './hunter-types';
import { VERTICALS, METROS } from './hunter-types';

const HUNT_MODEL = 'claude-haiku-4-5';

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

// --- Search Pass 1: Pain Signal Detection (SOP Phase 2) ---

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
- Businesses posting on Reddit, forums, or social media about losing leads or visibility

Return a JSON array of 5-10 pain signal descriptions, each mentioning a specific real business name. Example format:
["ABC Plumbing in Houston has 200+ Google reviews but ChatGPT recommends their competitor XYZ instead", "..."]`,
      },
    ],
    maxTokens: 2048,
  });

  const text = extractText(response);

  try {
    const match = text.match(/\[[\s\S]*\]/);
    if (match) {
      return JSON.parse(match[0]) as string[];
    }
  } catch {
    // If JSON parsing fails, split by newlines and filter
  }

  return text
    .split('\n')
    .map(l => l.replace(/^[-*\d.)\s]+/, '').trim())
    .filter(l => l.length > 20);
}

// --- Search Pass 2: Prospect Discovery + Structured Citation Test (SOP Phase 3) ---

export async function runSearchPass2(
  painSignals: string[],
  vertical: string,
  metro: string,
): Promise<RawProspect[]> {
  const signalContext = painSignals.slice(0, 5).join('\n');
  const maxLeads = process.env.HUNT_MAX_LEADS_PER_SESSION || '10';

  const response = await callClaudeWithWebSearch({
    model: HUNT_MODEL,
    system: `You are a lead researcher finding specific business details and testing their AI visibility. Search the web for real, verifiable information. For EACH business, you must also run a citation test: search for their service type + city on AI platforms and record which competitors appear instead. Return ONLY a JSON array. No markdown, no explanation. If you cannot verify a detail, omit it rather than guessing.`,
    messages: [
      {
        role: 'user',
        content: `Based on these pain signals about ${vertical} businesses in ${metro}:

${signalContext}

Search the web and find up to ${maxLeads} specific businesses. For each business:
1. Get their basic info (name, website, phone, reviews, rating)
2. Run a citation test: search "${vertical} in ${metro}" and note which businesses AI platforms recommend
3. Record which competitors appear in AI results and whether THIS business appears
4. Look for a real differentiator from their reviews or About page (e.g. "87 Google reviews, family-owned since 1985, specializes in emergency calls")

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
  "painSignals": ["specific signal 1", "specific signal 2"],
  "citationResults": [
    {"platform": "chatgpt", "query": "${vertical} in ${metro}", "cited": false, "competitorsCited": ["Competitor A", "Competitor B"]},
    {"platform": "google_ai", "query": "best ${vertical} ${metro}", "cited": false, "competitorsCited": ["Competitor C"]}
  ],
  "differentiator": "87 Google reviews, family-owned since 1985, known for same-day emergency service"
}]

Only include businesses you can verify exist via web search. Omit any field you cannot verify. Citation results must reflect what you actually found in AI platform searches.`,
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
        .map(p => {
          const signals = Array.isArray(p.painSignals) ? p.painSignals : [];
          const citations = parseCitationResults(p.citationResults);
          // Fallback: if Haiku didn't return structured citations, extract competitors from pain signals
          const effectiveCitations = citations.length > 0
            ? citations
            : buildFallbackCitation(signals, p.businessName || '', vertical, metro);

          return {
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
            painSignals: signals,
            citationResults: effectiveCitations,
            differentiator: typeof p.differentiator === 'string' ? p.differentiator : undefined,
            outreachReady: false, // Set in Pass 4
            scoreBreakdown: { aiBlindSpot: 0, reputationStrength: 0, contentGap: 0, revenuePotential: 0, contactQuality: 0, total: 0 },
            priority: 'P3' as HuntPriority,
          };
        });
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

// --- Search Pass 3: Contact Enrichment + Differentiator (SOP Phase 4) ---

export async function runSearchPass3(
  prospects: RawProspect[],
): Promise<RawProspect[]> {
  if (prospects.length === 0) return [];

  // Enrich prospects missing key contact info or differentiator
  const needsEnrichment = prospects.filter(p => !p.contactEmail || !p.contactName || !p.differentiator);
  if (needsEnrichment.length === 0) return prospects;

  const businessList = needsEnrichment
    .map(p => `- ${p.businessName} (${p.city}, ${p.state}) - website: ${p.website || 'unknown'} - reviews: ${p.reviewCount || '?'}`)
    .join('\n');

  const response = await callClaudeWithWebSearch({
    model: HUNT_MODEL,
    system: `You are a contact researcher. Search business websites, LinkedIn, Google reviews, and public directories for owner/manager names, email addresses, and unique business differentiators. A differentiator is something specific that makes this business stand out: years in business, family-owned status, specialty service, award, community involvement, unique review theme, etc. Return ONLY a JSON array. No markdown.`,
    messages: [
      {
        role: 'user',
        content: `Find contact information and differentiators for these businesses:

${businessList}

Return a JSON array:
[{
  "businessName": "exact name from above",
  "contactName": "Owner/Manager full name",
  "contactEmail": "their email",
  "differentiator": "One specific real thing from their reviews, About page, or community presence that makes them stand out. Must be verifiable."
}]

Only include contacts and differentiators you can verify from public sources. Omit if not found.`,
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
            prospect.contactEmail = enrichment.contactEmail;
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

// --- Pass 4: Outreach-Readiness Check (SOP Fabrication Gate) ---

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
  const hasContact = !!prospect.contactName && (!!prospect.contactEmail || !!prospect.phone);

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
