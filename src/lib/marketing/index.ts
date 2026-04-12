/**
 * TBRET Editorial Marketing Layer
 */

export { colors, spacing, typography, componentTokens, layout } from './tokens';
export {
  calculateLayoutRatios,
  BarPattern,
  barPatterns,
  componentLayout,
  createEditorialStructure,
  breakpoints,
  getResponsiveLayout,
} from './layout';
export {
  Voice,
  headlineCopyRules,
  narrativeCopyRules,
  pullquoteCopyRules,
  validateCopy,
  getVoiceSystemPrompt,
  type CopyContext,
} from './copy';
export {
  fallbackHeadline,
  fallbackNarrative,
  fallbackPullquote,
  fallbackSpecs,
  fallbackBarPattern,
  fallbackPropertyType,
  fallbackNeighborhood,
  genericPullquotes,
  getRandomFallbackPullquote,
  neighborhoodFallbacks,
  getNeighborhoodFallback,
  getCompleteFallbackEditorial,
} from './fallback-copy';
