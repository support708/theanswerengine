/**
 * Design tokens for TBRET marketing editorial layer
 * Color palette, spacing, typography rules
 */

// Color palette per hq TBRET marketing overhaul Phase 1
export const colors = {
  navy: '#04253A',        // Primary dark
  linen: '#e0debf',       // Light neutral
  offWhite: '#F5F3EE',    // Off-white background
  gold: '#C4A44A',        // Accent (print/postcard only, reserved)
} as const;

// Spacing scale (8px base)
export const spacing = {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  xxl: '48px',
} as const;

// Typography rules
export const typography = {
  // Font fallback (Adobe Fonts fallback, no spend)
  serif: '"Georgia", serif',           // For titles (Canela substitute)
  sansSerif: '"Helvetica", sans-serif', // For body (Sohne substitute)

  // Sizes
  sizes: {
    heading1: '36px',
    heading2: '28px',
    heading3: '24px',
    body: '16px',
    small: '14px',
  },

  // Line heights
  lineHeights: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.75,
  },

  // Font weights
  weights: {
    light: 300,
    normal: 400,
    semibold: 600,
    bold: 700,
  },
} as const;

// Component-specific token overrides
export const componentTokens = {
  headline: {
    color: colors.navy,
    fontSize: typography.sizes.heading2,
    fontFamily: typography.serif,
    fontWeight: typography.weights.bold,
    lineHeight: typography.lineHeights.tight,
  },
  narrative: {
    color: colors.navy,
    fontSize: typography.sizes.body,
    fontFamily: typography.sansSerif,
    fontWeight: typography.weights.normal,
    lineHeight: typography.lineHeights.normal,
  },
  pullquote: {
    color: colors.navy,
    fontSize: typography.sizes.heading3,
    fontFamily: typography.serif,
    fontWeight: typography.weights.semibold,
    lineHeight: typography.lineHeights.normal,
    borderLeft: `4px solid ${colors.gold}`,
    paddingLeft: spacing.md,
  },
} as const;

// Layout constants
export const layout = {
  // 60/10/30 rule: 60% content, 10% spacing, 30% breathing room
  contentRatio: 0.6,
  spacingRatio: 0.1,
  breathingRatio: 0.3,

  // Listing bar patterns (Kirman/Compass/Carolwood)
  barHeight: '6px',
  barSpacing: spacing.sm,
} as const;
