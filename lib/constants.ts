/**
 * Centralized constants for The Answer Engine website
 * Update these values in one place to change across entire site
 */

export const CONTACT = {
  phone: '(213) 444-2229',
  phoneLink: 'tel:+12134442229',
  phoneRaw: '+1-213-444-2229',
  email: 'support@theanswerengine.ai',
  emailLink: 'mailto:support@theanswerengine.ai',
  hours: 'Monday - Friday, 9 AM - 6 PM PT',
  responseTime: 'Within 24 hours',
} as const;

export const PRICING = {
  foundation: 2997,
  display: '$2,997',
  perMonth: '$2,997/month',
} as const;

export const SITE = {
  name: 'The Answer Engine',
  url: 'https://theanswerengine.ai',
  tagline: 'Become the Answer',
  description: 'Answer Engine Optimization for local service businesses. Get cited by AI platforms like ChatGPT, Claude, Google AI Overviews, and Perplexity.',
} as const;

export const SOCIAL = {
  linkedin: 'https://www.linkedin.com/company/theanswerengine',
  instagram: 'https://instagram.com/theanswerengine',
} as const;

export const GUARANTEE = {
  days: 90,
  platforms: 2,
  text: 'Get cited by 2+ AI platforms within 90 days, or we work for free until you do.',
  shortText: '90-day guarantee',
} as const;

export const TERRITORY = {
  clientsPerMonth: 3,
  text: 'We only work with 3 clients per month to maintain quality.',
} as const;
