/**
 * Copy templates and voice rules for TBRET editorial
 * Dual-voice system: editorial/factual for listing fields, warmer first-person for narrative
 */

/**
 * Voice personas
 * - Editorial: agent-friendly, citable, architectural/factual
 * - Insider: warmer, first-person, LA real estate insider (Justin's IG voice)
 */
export enum Voice {
  EDITORIAL = 'editorial',
  INSIDER = 'insider',
}

export interface CopyContext {
  address?: string;
  propertyType?: string;
  neighborhood?: string;
  features?: string[];
  acreage?: number;
  voice: Voice;
  fieldType: 'headline' | 'narrative' | 'pullquote';
}

/**
 * Headline copy rules
 * Agent-friendly, factual, address or core property feature
 */
export const headlineCopyRules = {
  voice: Voice.EDITORIAL,
  targetLength: { min: 5, max: 12, units: 'words' as const },
  style: {
    descriptive: true,
    specific: true,
    positive: true,
    noClaims: true,
  },
  templates: [
    '{adjective} {property_type} in {neighborhood}',
    '{property_type} with {primary_feature}',
    '{acreage} Acre {descriptor} in {area}',
  ],
};

/**
 * Narrative copy rules
 * Warmer, first-person, contextual
 */
export const narrativeCopyRules = {
  voice: Voice.INSIDER,
  targetLength: { min: 80, max: 200, units: 'words' as const },
  style: {
    firstPerson: true,
    contextual: true,
    knowledgeable: true,
    inviting: true,
    noMarketing: false,
  },
  narrative_elements: [
    'entry_experience',
    'neighborhood_character',
    'usage_potential',
    'lifestyle_promise',
  ],
};

/**
 * Pullquote copy rules
 * Short, punchy, facts or emotional hooks
 */
export const pullquoteCopyRules = {
  voice: [Voice.EDITORIAL, Voice.INSIDER],
  targetLength: { min: 6, max: 20, units: 'words' as const },
  style: {
    compelling: true,
    standaloneReadable: true,
    specific: true,
  },
  sources: ['unique_feature', 'neighborhood_fact', 'emotional_payoff'],
};

/**
 * Voice-switching prompt generator
 */
export function getVoiceSystemPrompt(voice: Voice): string {
  if (voice === Voice.EDITORIAL) {
    return `You are a professional real estate copy writer. Your tone is:
- Factual and specific
- Professional but accessible
- Citable and verifiable
- Agent-friendly (agents share this copy)
- No marketing hyperbole
Use architectural terms, neighborhood names, and specific features.`;
  }

  return `You are Justin Borges, a luxury real estate expert with 13+ years in LA.
Your tone is warm, first-person, and deeply knowledgeable about LA neighborhoods.
Share insider insights, lifestyle context, and genuine enthusiasm for properties.`;
}

/**
 * Validate copy against rules (works with any rule type)
 */
export function validateCopy(
  copy: string,
  rules: typeof headlineCopyRules | typeof narrativeCopyRules | typeof pullquoteCopyRules
): { valid: boolean; feedback: string[] } {
  const feedback: string[] = [];
  const wordCount = copy.split(/\s+/).length;

  if (wordCount < rules.targetLength.min) {
    feedback.push(`Too short: ${wordCount} words (min ${rules.targetLength.min})`);
  }
  if (wordCount > rules.targetLength.max) {
    feedback.push(`Too long: ${wordCount} words (max ${rules.targetLength.max})`);
  }

  // Validate style rules with proper type checking
  if ('noClaims' in rules.style && rules.style.noClaims && /claim|proven|guaranteed|best|only/i.test(copy)) {
    feedback.push('Contains unverifiable claims (remove: best, only, proven, etc.)');
  }

  if ('firstPerson' in rules.style && rules.style.firstPerson && !/\b(i|we|you)\b/i.test(copy)) {
    feedback.push('Should use first/second person ("I", "we", "you")');
  }

  return {
    valid: feedback.length === 0,
    feedback,
  };
}
