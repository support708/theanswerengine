/**
 * Reddit Keyword & Subreddit Derivation
 *
 * Auto-generates Reddit search keywords and target subreddits from client
 * profile.json data. No manual keyword configuration needed per client.
 *
 * Reads profiles from data/client-profiles/{slug}.json (copied from TAE LLC repo).
 */

import { promises as fs } from 'fs';
import path from 'path';
import type { ClientProfile, ClientRedditConfig } from './reddit-types';
import { getFileContentSafe, listDirectoryFiles } from './github-publish';

const IS_VERCEL = !!process.env.VERCEL;
const PROFILES_DIR = path.join(process.cwd(), 'data', 'client-profiles');

// ===== Industry -> Subreddits Map =====

const INDUSTRY_SUBREDDITS: Record<string, string[]> = {
  'real estate': [
    'realestate', 'RealEstate', 'FirstTimeHomeBuyer',
    'realestateinvesting', 'homebuyers', 'RealEstateAdvice',
  ],
  'property management': [
    'propertymanagement', 'landlords', 'Landlord',
    'realestateinvesting', 'RealEstate', 'renters',
  ],
  'luxury real estate': [
    'realestate', 'RealEstate', 'realestateinvesting',
    'homebuyers', 'RealEstateAdvice',
  ],
  'probate': [
    'realestate', 'RealEstate', 'legaladvice',
    'personalfinance', 'inheritances',
  ],
  'plumbing': [
    'Plumbing', 'HomeImprovement', 'homeowners',
    'DIY', 'HomeRepair',
  ],
  'hvac': [
    'HVAC', 'HomeImprovement', 'homeowners',
    'hvacadvice',
  ],
  'insurance': [
    'Insurance', 'personalfinance', 'smallbusiness',
  ],
  'roofing': [
    'Roofing', 'HomeImprovement', 'homeowners',
  ],
  'answer engine optimization': [
    'SEO', 'digital_marketing', 'smallbusiness', 'marketing',
    'entrepreneur', 'Entrepreneur', 'bigseo', 'ArtificialIntelligence',
    'ChatGPT', 'LocalSEO',
  ],
};

// ===== City -> Subreddits Map (single source of truth, also used by reddit-scorer.ts) =====

export const CITY_SUBREDDITS: Record<string, string[]> = {
  'pasadena': ['pasadena', 'LosAngeles', 'SanGabrielValley'],
  'long beach': ['longbeach', 'LosAngeles'],
  'austin': ['Austin', 'AustinHomes'],
  'los angeles': ['LosAngeles', 'AskLosAngeles'],
  'downey': ['LosAngeles'],
  'lakewood': ['LosAngeles'],
  'torrance': ['LosAngeles', 'SouthBayLA'],
  'san pedro': ['LosAngeles', 'SouthBayLA'],
  'rancho cucamonga': ['InlandEmpire'],
  'corona': ['InlandEmpire', 'riversidecounty'],
  'upland': ['InlandEmpire'],
  'fontana': ['InlandEmpire'],
  'riverside': ['InlandEmpire', 'riversidecounty'],
  'loma linda': ['InlandEmpire'],
};

/**
 * Load all active client profiles from data/client-profiles/.
 */
export async function loadAllClientProfiles(): Promise<ClientProfile[]> {
  const profiles: ClientProfile[] = [];

  if (IS_VERCEL) {
    // On Vercel: profiles are committed to git, read via GitHub API
    const slugs = await getClientSlugsFromGitHub();
    for (const slug of slugs) {
      const content = await getFileContentSafe(`data/client-profiles/${slug}.json`);
      if (content) {
        try {
          const profile = JSON.parse(content) as ClientProfile;
          if (profile._meta?.account_status === 'active') {
            profiles.push(profile);
          }
        } catch {
          console.error(`Failed to parse profile for ${slug}`);
        }
      }
    }
  } else {
    // Local: read from filesystem
    try {
      const files = await fs.readdir(PROFILES_DIR);
      for (const file of files) {
        if (!file.endsWith('.json')) continue;
        try {
          const content = await fs.readFile(path.join(PROFILES_DIR, file), 'utf-8');
          const profile = JSON.parse(content) as ClientProfile;
          if (profile._meta?.account_status === 'active') {
            profiles.push(profile);
          }
        } catch {
          console.error(`Failed to parse profile: ${file}`);
        }
      }
    } catch {
      console.error(`Client profiles directory not found: ${PROFILES_DIR}`);
    }
  }

  return profiles;
}

/**
 * Get client slugs from the GitHub repo (for Vercel runtime).
 * Lists the data/client-profiles/ directory via GitHub API.
 * Falls back to a hardcoded list only if the API call fails.
 */
async function getClientSlugsFromGitHub(): Promise<string[]> {
  try {
    const files = await listDirectoryFiles('data/client-profiles');
    const slugs = files
      .filter(f => f.endsWith('.json'))
      .map(f => f.replace('.json', ''));
    if (slugs.length > 0) return slugs;
  } catch {
    console.error('Failed to list client profiles from GitHub, using fallback');
  }
  // Fallback — keep in sync with data/client-profiles/ if API fails
  return ['borges-team', 'davis-agency', 'lovery-re', 'rpm-southland'];
}

/**
 * Load a single client profile by slug.
 */
export async function loadClientProfile(slug: string): Promise<ClientProfile | null> {
  if (IS_VERCEL) {
    const content = await getFileContentSafe(`data/client-profiles/${slug}.json`);
    if (!content) return null;
    return JSON.parse(content) as ClientProfile;
  }

  try {
    const content = await fs.readFile(path.join(PROFILES_DIR, `${slug}.json`), 'utf-8');
    return JSON.parse(content) as ClientProfile;
  } catch {
    return null;
  }
}

/**
 * Derive Reddit search keywords from a client profile.
 * Combines service names, citation queries, expertise areas, and intent phrases.
 */
function deriveKeywords(profile: ClientProfile): string[] {
  const keywords = new Set<string>();
  const city = profile.service_area.primary_city;

  // 1. Primary services + city combos
  for (const svc of profile.services.filter(s => s.is_primary)) {
    keywords.add(`${svc.name} ${city}`);
    keywords.add(svc.name);
  }

  // 2. High-priority citation target queries (already optimized for search)
  const queries = profile.citation_monitoring?.target_queries || [];
  for (const tq of queries) {
    if (tq.priority === 'high') {
      keywords.add(tq.query);
    }
  }

  // 3. Expertise areas (top 5)
  const expertise = profile.author?.knows_about || [];
  for (const topic of expertise.slice(0, 5)) {
    keywords.add(topic);
  }

  // 4. Industry + city catch-all
  keywords.add(`${profile.business.industry} ${city}`);

  // 5. Intent phrases for primary services
  const intentPrefixes = ['need', 'looking for', 'recommend', 'help with'];
  const primaryServices = profile.services.filter(s => s.is_primary).slice(0, 2);
  for (const svc of primaryServices) {
    for (const prefix of intentPrefixes) {
      keywords.add(`${prefix} ${svc.name.toLowerCase()}`);
    }
  }

  // 6. City-specific intent (local subreddit targeting)
  keywords.add(`${city} recommendation`);
  keywords.add(`${city} ${profile.business.industry}`);

  return Array.from(keywords);
}

/**
 * Derive target subreddits from client profile industry + location.
 */
function deriveSubreddits(profile: ClientProfile): string[] {
  const subs = new Set<string>();
  const industryLower = profile.business.industry.toLowerCase();

  // Industry subreddits
  for (const [key, subreddits] of Object.entries(INDUSTRY_SUBREDDITS)) {
    if (industryLower.includes(key) || key.includes(industryLower)) {
      subreddits.forEach(s => subs.add(s));
    }
  }

  // City subreddits (primary + top 2 service cities)
  const cities = [
    profile.service_area.primary_city,
    ...(profile.service_area.cities || []).slice(0, 2),
  ];

  for (const city of cities) {
    const cityLower = city.toLowerCase();
    for (const [key, subreddits] of Object.entries(CITY_SUBREDDITS)) {
      if (cityLower === key || cityLower.includes(key) || key.includes(cityLower)) {
        subreddits.forEach(s => subs.add(s));
      }
    }
  }

  // Universal catch-all (high-intent personal finance subreddits)
  subs.add('personalfinance');

  return Array.from(subs);
}

/**
 * Check if a profile has enough data for Reddit monitoring.
 */
function isProfileComplete(profile: ClientProfile): boolean {
  const hasServiceObjects =
    Array.isArray(profile.services) &&
    profile.services.length > 0 &&
    typeof profile.services[0] === 'object' &&
    profile.services[0] !== null;

  return !!(
    profile._meta?.client_slug &&
    profile.business?.industry &&
    profile.service_area?.primary_city &&
    hasServiceObjects
  );
}

/**
 * Build the full Reddit monitoring config for a client from their profile.
 * Returns null if the profile is too incomplete to monitor.
 */
export function deriveClientRedditConfig(profile: ClientProfile): ClientRedditConfig | null {
  if (!isProfileComplete(profile)) {
    console.warn(`Skipping ${profile._meta?.client_slug || 'unknown'}: incomplete profile`);
    return null;
  }

  const credentials = (profile.author?.credentials || [])
    .map((c: { name: string; number?: string }) => c.name + (c.number ? ` #${c.number}` : ''))
    .join(', ');

  return {
    clientSlug: profile._meta.client_slug,
    businessName: profile.business.dba || profile.business.legal_name,
    contactEmail: profile.engagement?.contact_email || '',
    industry: profile.business.industry,
    primaryCity: profile.service_area.primary_city,
    state: profile.service_area.primary_state || '',
    keywords: deriveKeywords(profile),
    subreddits: deriveSubreddits(profile),
    competitorNames: (profile.competitors || []).map(c => c.name),
    authorName: profile.author?.full_name || '',
    authorTitle: profile.author?.job_title || '',
    authorCredentials: credentials,
    brandVoice: profile.brand?.brand_voice_notes || '',
    reviewCount: profile.reviews?.google?.count || 0,
  };
}

/**
 * Build configs for all active clients. Skips incomplete profiles.
 */
export async function getAllClientConfigs(): Promise<ClientRedditConfig[]> {
  const profiles = await loadAllClientProfiles();
  return profiles
    .map(profile => {
      try {
        return deriveClientRedditConfig(profile);
      } catch (error) {
        console.error(`Failed to derive Reddit config for ${profile._meta?.client_slug || 'unknown'}:`, error);
        return null;
      }
    })
    .filter((config): config is ClientRedditConfig => config !== null);
}
