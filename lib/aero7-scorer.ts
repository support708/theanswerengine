import type { AERO7Score } from './types';

/**
 * Parse AERO-7 scores from Claude research output.
 * Claude returns structured JSON with scores; this validates and normalizes.
 */
export function parseAERO7FromResearch(raw: {
  answerQuality?: number;
  entityOptimization?: number;
  relevanceFreshness?: number;
  optimizationStructure?: number;
  voiceAuthenticity?: number;
  authoritySignals?: number;
  aiVisibility?: number;
}): AERO7Score {
  const clamp = (v: number | undefined) => Math.min(10, Math.max(0, Math.round(v ?? 0)));

  const scores = {
    answerQuality: clamp(raw.answerQuality),
    entityOptimization: clamp(raw.entityOptimization),
    relevanceFreshness: clamp(raw.relevanceFreshness),
    optimizationStructure: clamp(raw.optimizationStructure),
    voiceAuthenticity: clamp(raw.voiceAuthenticity),
    authoritySignals: clamp(raw.authoritySignals),
    aiVisibility: clamp(raw.aiVisibility),
    total: 0,
  };

  scores.total =
    scores.answerQuality +
    scores.entityOptimization +
    scores.relevanceFreshness +
    scores.optimizationStructure +
    scores.voiceAuthenticity +
    scores.authoritySignals +
    scores.aiVisibility;

  return scores;
}

export function getAERO7Grade(total: number): string {
  if (total >= 63) return 'A+';
  if (total >= 56) return 'A';
  if (total >= 49) return 'B+';
  if (total >= 42) return 'B';
  if (total >= 35) return 'C';
  if (total >= 21) return 'D';
  return 'F';
}

export const AERO7_LABELS: Record<keyof Omit<AERO7Score, 'total'>, string> = {
  answerQuality: 'Answer Quality',
  entityOptimization: 'Entity Optimization',
  relevanceFreshness: 'Relevance & Freshness',
  optimizationStructure: 'Optimization Structure',
  voiceAuthenticity: 'Voice & Authenticity',
  authoritySignals: 'Authority Signals',
  aiVisibility: 'AI Visibility',
};
