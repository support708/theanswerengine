/**
 * Fallback copy — defaults when editorial copy is missing
 */

export const fallbackHeadline = (address?: string): string => {
  if (address) {
    return `${address} — Luxury Property`;
  }
  return 'Luxury Property Available';
};

export const fallbackNarrative = (address?: string): string => {
  const intro = address
    ? `This property is located at ${address}.`
    : 'This is a luxury property opportunity.';

  return `${intro} Built with quality finishes and attention to detail, this home offers comfortable living in a desirable location. Whether you're looking for your dream home or an investment property, this residence has much to offer.`;
};

export const fallbackPullquote = (): string => {
  return 'A home worth discovering';
};

export const fallbackSpecs = {
  bedrooms: '—',
  bathrooms: '—',
  sqft: '—',
  lotSize: '—',
  yearBuilt: '—',
  pricePerSqft: '—',
};

export const fallbackBarPattern = 'compass';
export const fallbackPropertyType = 'Luxury Residence';
export const fallbackNeighborhood = 'Los Angeles Area';

export const genericPullquotes = [
  'Where luxury meets location',
  'Built for living and entertaining',
  'A home with character and charm',
  'Timeless design, modern comfort',
  'Your LA lifestyle awaits',
  'Where quality meets character',
];

export function getRandomFallbackPullquote(): string {
  return genericPullquotes[Math.floor(Math.random() * genericPullquotes.length)];
}

export const neighborhoodFallbacks: Record<string, string> = {
  'Brentwood': 'Brentwood is one of Los Angeles\'s most sought-after neighborhoods.',
  'Pacific Palisades': 'Pacific Palisades offers coastal charm with proximity to beaches.',
  'Holmby Hills': 'Holmby Hills is a prestigious neighborhood known for grand estates.',
};

export function getNeighborhoodFallback(neighborhood?: string): string {
  if (!neighborhood) return 'This property is in a desirable Los Angeles neighborhood.';
  return neighborhoodFallbacks[neighborhood] || `${neighborhood} is a notable LA neighborhood.`;
}

export function getCompleteFallbackEditorial(address?: string) {
  return {
    headline: fallbackHeadline(address),
    narrative: fallbackNarrative(address),
    pullquote: fallbackPullquote(),
    barPattern: fallbackBarPattern,
    specs: fallbackSpecs,
  };
}
