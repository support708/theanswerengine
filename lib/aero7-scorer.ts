import type { AERO10Score } from './types';

/**
 * AERO-10 Scorer — 10-pillar, 100-point scale.
 * Upgraded from AERO-7 (March 2026).
 * Parses scores from Claude research output. Validates and normalizes.
 */
export function parseAERO7FromResearch(raw: {
  answerQuality?: number;
  entityOptimization?: number;
  relevanceFreshness?: number;
  optimizationStructure?: number;
  voiceAuthenticity?: number;
  authoritySignals?: number;
  authorityDistribution?: number;
  consensusCoCitation?: number;
  platformReadiness?: number;
  technicalAccessibility?: number;
  // Legacy field — maps to authorityDistribution
  aiVisibility?: number;
}): AERO10Score {
  const clamp = (v: number | undefined) => Math.min(10, Math.max(0, Math.round(v ?? 0)));

  const scores: AERO10Score = {
    answerQuality: clamp(raw.answerQuality),
    entityOptimization: clamp(raw.entityOptimization),
    relevanceFreshness: clamp(raw.relevanceFreshness),
    optimizationStructure: clamp(raw.optimizationStructure),
    voiceAuthenticity: clamp(raw.voiceAuthenticity),
    authoritySignals: clamp(raw.authoritySignals),
    authorityDistribution: clamp(raw.authorityDistribution ?? raw.aiVisibility),
    consensusCoCitation: clamp(raw.consensusCoCitation),
    platformReadiness: clamp(raw.platformReadiness),
    technicalAccessibility: clamp(raw.technicalAccessibility),
    total: 0,
  };

  scores.total =
    scores.answerQuality +
    scores.entityOptimization +
    scores.relevanceFreshness +
    scores.optimizationStructure +
    scores.voiceAuthenticity +
    scores.authoritySignals +
    scores.authorityDistribution +
    scores.consensusCoCitation +
    scores.platformReadiness +
    scores.technicalAccessibility;

  return scores;
}

/** AERO-10 grade scale (100-point) per Framework v3.0 */
export function getAERO7Grade(total: number): string {
  if (total >= 90) return 'A+';
  if (total >= 80) return 'A';
  if (total >= 70) return 'B+';
  if (total >= 60) return 'B';
  if (total >= 50) return 'C';
  if (total >= 40) return 'D';
  return 'F';
}

export const AERO10_LABELS: Record<keyof Omit<AERO10Score, 'total'>, string> = {
  answerQuality: 'P1: Answer Quality',
  entityOptimization: 'P2: Entity Optimization',
  relevanceFreshness: 'P3: Relevance & Freshness',
  optimizationStructure: 'P4: Optimization Structure',
  voiceAuthenticity: 'P5: Voice & Authenticity',
  authoritySignals: 'P6: Authority Signals',
  authorityDistribution: 'P7: Authority Distribution',
  consensusCoCitation: 'P8: Consensus & Co-Citation',
  platformReadiness: 'P9: Platform-Specific Readiness',
  technicalAccessibility: 'P10: Technical AI Accessibility',
};

/** @deprecated Use AERO10_LABELS */
export const AERO7_LABELS = AERO10_LABELS;
