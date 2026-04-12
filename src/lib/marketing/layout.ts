/**
 * Layout rules and composition patterns for TBRET editorial
 * 60/10/30 ratio, bar patterns, visual hierarchy
 */

import { layout, spacing, colors } from './tokens';

/**
 * 60/10/30 Layout Rule
 * - 60% content (editorial, data, key information)
 * - 10% structural spacing (gutters, separators)
 * - 30% breathing room (whitespace, visual relief)
 */
export function calculateLayoutRatios(containerWidth: number) {
  return {
    content: containerWidth * layout.contentRatio,        // 60%
    spacing: containerWidth * layout.spacingRatio,         // 10%
    breathing: containerWidth * layout.breathingRatio,    // 30%
  };
}

// Bar pattern types (property neighborhood signature bars)
export enum BarPattern {
  KIRMAN = 'kirman',
  COMPASS = 'compass',
  CAROLWOOD = 'carolwood',
}

/**
 * Bar pattern styles — neighborhood identifiers
 * Used in listing headers to signal area character
 */
export const barPatterns = {
  [BarPattern.KIRMAN]: {
    name: 'Kirman Bar',
    colors: [colors.navy, colors.gold, colors.linen],
    height: layout.barHeight,
  },
  [BarPattern.COMPASS]: {
    name: 'Compass Bar',
    colors: [colors.gold, colors.navy, colors.linen],
    height: layout.barHeight,
  },
  [BarPattern.CAROLWOOD]: {
    name: 'Carolwood Bar',
    colors: [colors.linen, colors.gold, colors.navy],
    height: layout.barHeight,
  },
} as const;

/**
 * Component layout rules
 */
export const componentLayout = {
  // Headline block
  headline: {
    marginBottom: spacing.md,
    marginTop: spacing.lg,
    maxWidth: '100%',
  },

  // Narrative (prose block)
  narrative: {
    marginBottom: spacing.lg,
    marginTop: spacing.md,
    maxWidth: '90%', // Narrow for readability
    lineSpacing: spacing.sm,
  },

  // Pullquote (accent block)
  pullquote: {
    marginTop: spacing.xl,
    marginBottom: spacing.xl,
    marginLeft: 0,
    marginRight: 0,
    paddingTop: spacing.md,
    paddingBottom: spacing.md,
  },

  // Property specs (data grid)
  specs: {
    columns: 2,
    gap: spacing.lg,
    marginTop: spacing.lg,
  },
} as const;

/**
 * Editorial section structure
 * Defines the order and spacing of editorial components on a listing page
 */
export function createEditorialStructure() {
  return {
    sections: [
      {
        id: 'bar',
        type: 'bar',
        layout: 'full-width',
        spacing: { bottom: spacing.md },
      },
      {
        id: 'headline',
        type: 'headline',
        layout: componentLayout.headline,
      },
      {
        id: 'narrative',
        type: 'narrative',
        layout: componentLayout.narrative,
      },
      {
        id: 'pullquote',
        type: 'pullquote',
        layout: componentLayout.pullquote,
      },
      {
        id: 'specs',
        type: 'specs',
        layout: componentLayout.specs,
      },
    ],
  };
}

/**
 * Responsive breakpoints (matching Next.js Tailwind defaults)
 */
export const breakpoints = {
  mobile: 640,
  tablet: 768,
  desktop: 1024,
  wide: 1280,
} as const;

/**
 * Calculate responsive layout for container
 */
export function getResponsiveLayout(containerWidth: number) {
  let breakpoint = 'mobile';
  if (containerWidth >= breakpoints.wide) breakpoint = 'wide';
  else if (containerWidth >= breakpoints.desktop) breakpoint = 'desktop';
  else if (containerWidth >= breakpoints.tablet) breakpoint = 'tablet';

  const ratios = calculateLayoutRatios(containerWidth);

  return {
    breakpoint,
    containerWidth,
    ...ratios,
  };
}
