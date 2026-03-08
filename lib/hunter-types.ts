/**
 * Lead Hunter Bot type definitions.
 * Supports automated prospect discovery via Claude + web_search.
 */

export interface LeadScoreBreakdown {
  aiBlindSpot: number;        // 0-15
  reputationStrength: number; // 0-12.5
  contentGap: number;         // 0-10
  revenuePotential: number;   // 0-7.5
  contactQuality: number;     // 0-5
  total: number;              // 0-50
}

export type HuntPriority = 'P1' | 'P2' | 'P3';

export type HuntTrigger = 'cron_daily' | 'cron_weekly' | 'cron_monthly' | 'manual';

export interface RawProspect {
  businessName: string;
  contactName?: string;
  contactEmail?: string;
  website?: string;
  phone?: string;
  city: string;
  state: string;
  serviceNiche: string;
  reviewCount?: number;
  rating?: number;
  painSignals: string[];
  scoreBreakdown: LeadScoreBreakdown;
  priority: HuntPriority;
}

export interface HuntSession {
  id: string;
  startedAt: string;
  completedAt?: string;
  trigger: HuntTrigger;
  vertical: string;
  metro: string;
  prospectsFound: number;
  p1Queued: number;
  p2Queued: number;
  p3Backlogged: number;
  duplicatesSkipped: number;
  errors: string[];
}

export interface HuntState {
  currentWeek: number;         // 1-8
  currentVerticalIndex: number;
  currentMetroIndex: number;
  lastDailyRun?: string;
  lastWeeklyRun?: string;
  lastMonthlyRun?: string;
  totalLeadsQueued: number;
  totalSessionsRun: number;
}

export const VERTICALS = [
  'Personal Injury Attorney',
  'HVAC Contractor',
  'Roofing Contractor',
  'Plumber',
  'Electrician',
  'Dentist',
  'Chiropractor',
  'Med Spa',
] as const;

export const METROS = [
  'Los Angeles, CA',
  'Phoenix, AZ',
  'Dallas, TX',
  'Houston, TX',
  'Atlanta, GA',
  'Denver, CO',
  'San Diego, CA',
  'Tampa, FL',
] as const;

export const DEFAULT_HUNT_STATE: HuntState = {
  currentWeek: 1,
  currentVerticalIndex: 0,
  currentMetroIndex: 0,
  totalLeadsQueued: 0,
  totalSessionsRun: 0,
};
