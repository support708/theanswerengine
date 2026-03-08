/**
 * Brand configuration and color scheme for blind spot reports.
 * The actual HTML generation is handled by Claude in the generate-report API route.
 */

export interface ReportBrand {
  heroGradientFrom: string;
  heroGradientTo: string;
  accent: string;
  bodyBg: string;
  cardBg: string;
  sectionDark: string;
}

export function getIndustryColors(niche: string): ReportBrand {
  const lower = niche.toLowerCase();

  if (/law|legal|attorney|estate|probate/.test(lower)) {
    return {
      heroGradientFrom: '#0a0a1a',
      heroGradientTo: '#1a2744',
      accent: '#c9a227',
      bodyBg: '#f8f8f6',
      cardBg: '#ffffff',
      sectionDark: '#1a2744',
    };
  }

  if (/hvac|plumb|electric|roof|home|contractor|handyman/.test(lower)) {
    return {
      heroGradientFrom: '#0a0a1a',
      heroGradientTo: '#1a2744',
      accent: '#FF6A00',
      bodyBg: '#f8f8f6',
      cardBg: '#ffffff',
      sectionDark: '#1a2744',
    };
  }

  if (/medical|health|dental|chiro|therapy|doctor|nurse|clinic/.test(lower)) {
    return {
      heroGradientFrom: '#0a0a1a',
      heroGradientTo: '#1e2d3d',
      accent: '#2d6a6a',
      bodyBg: '#f8f8f6',
      cardBg: '#ffffff',
      sectionDark: '#1e2d3d',
    };
  }

  // Default
  return {
    heroGradientFrom: '#0a0a0a',
    heroGradientTo: '#1a1a2e',
    accent: '#FF6A00',
    bodyBg: '#f8f8f6',
    cardBg: '#ffffff',
    sectionDark: '#0a0a0a',
  };
}

export const CALENDLY_URL = 'https://calendly.com/theanswerengine-support/30min';

export const REPORT_FOOTER = 'This analysis uses publicly available information. Questions? support@theanswerengine.ai';
