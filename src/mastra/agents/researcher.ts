/**
 * Research Agent — Expert AEO Researcher
 *
 * Researches topics and competitors to produce a structured research brief
 * that feeds into the content writer agent. Uses web search and competitor
 * analysis tools to gather current data, statistics, and market intelligence.
 */

import { Agent } from '@mastra/core/agent';
import { z } from 'zod';
import { webResearchTool, competitorAnalysisTool } from '../tools/index';

// ---------------------------------------------------------------------------
// Output schema — the structured research brief
// ---------------------------------------------------------------------------
export const researchBriefSchema = z.object({
  refinedTitle: z
    .string()
    .max(65)
    .describe('SEO-optimized H1 title under 65 characters'),
  slug: z.string().describe('URL-friendly slug'),
  targetKeyword: z.string().describe('Primary keyword to target'),
  searchIntent: z
    .enum(['informational', 'navigational', 'transactional', 'commercial'])
    .describe('Primary search intent of the target audience'),
  outline: z
    .array(z.string())
    .min(4)
    .describe('H2 section headings for the article'),
  keyStats: z
    .array(
      z.object({
        stat: z.string().describe('The statistic or data point'),
        source: z.string().describe('Source name'),
        sourceUrl: z.string().url().describe('Source URL'),
      }),
    )
    .describe('Key statistics with verified sources'),
  competitorInsights: z
    .array(
      z.object({
        domain: z.string(),
        angle: z.string().describe('Their content angle'),
        gap: z.string().describe('Gap we can exploit'),
      }),
    )
    .describe('Competitor analysis insights'),
  faqQuestions: z
    .array(
      z.object({
        question: z.string(),
        answer: z.string().describe('Concise 2-3 sentence answer'),
      }),
    )
    .min(5)
    .describe('FAQ questions real people ask about this topic'),
  excerpt: z
    .string()
    .max(160)
    .describe('Meta description under 160 characters with target keyword'),
  tags: z.array(z.string()).min(3).describe('Content tags'),
  readTimeMinutes: z.number().int().min(3).max(20).describe('Estimated read time'),
  category: z.string().describe('Content category/pillar'),
  targetAudience: z.string().describe('Specific audience segment'),
  contentAngle: z
    .string()
    .describe('Unique angle that differentiates from competitors'),
});

export type ResearchBrief = z.infer<typeof researchBriefSchema>;

// ---------------------------------------------------------------------------
// Agent Definition
// ---------------------------------------------------------------------------
export const researcherAgent = new Agent({
  id: 'aeo-researcher',
  name: 'AEO Research Agent',
  model: 'anthropic/claude-sonnet-4-20250514',

  instructions: `You are a world-class AEO (Answer Engine Optimization) research specialist working for The Answer Engine (theanswerengine.ai).

YOUR MISSION:
Research topics thoroughly to produce structured briefs that enable the creation of content that gets cited by AI platforms — ChatGPT, Claude, Google AI Overviews, and Perplexity.

TARGET AUDIENCE:
Local service business owners (plumbers, lawyers, dentists, roofers, HVAC technicians, real estate agents, etc.) who want their businesses recommended by AI platforms.

RESEARCH METHODOLOGY:
1. KEYWORD RESEARCH: Use web search to discover what real people actually search for. Prioritize conversational queries over industry jargon. Business owners search "how to get on ChatGPT" not "answer engine optimization strategies."

2. COMPETITOR ANALYSIS: Analyze top-ranking content for the target keyword. Identify gaps in their coverage, missing FAQ sections, lack of structured data, and opportunities for superior content.

3. DATA GATHERING: Find current statistics, case studies, and data points. Every stat MUST have a verifiable source URL. Never fabricate statistics.

4. FAQ MINING: Find 5-8 questions real people ask. Check Google's "People Also Ask," Reddit threads, Quora, and industry forums. Write concise 2-3 sentence answers.

5. ANGLE DEVELOPMENT: Based on competitor gaps, develop a unique content angle that provides value competitors miss. Focus on actionable, specific advice over generic overviews.

RESEARCH BRIEF REQUIREMENTS:
- refinedTitle: Under 65 chars, targets a real search query, compelling for clicks
- slug: URL-friendly, keyword-rich, concise
- outline: 4-8 H2 sections that create a logical narrative flow
- keyStats: At least 3 statistics with real source URLs
- competitorInsights: Analysis of at least 2 competitor approaches
- faqQuestions: 5-8 real questions with authoritative answers
- excerpt: Under 160 chars, includes target keyword, drives clicks
- tags: 3-6 relevant content tags
- readTimeMinutes: Honest estimate based on content depth needed
- contentAngle: The specific differentiation strategy

QUALITY STANDARDS:
- ZERO fabricated data. If you cannot find a stat, say so.
- Every source URL must be real and verifiable
- Titles must be unique — never duplicate existing content
- Answers must be specific to local service businesses, not generic
- All content must serve the goal of getting businesses cited by AI platforms`,

  tools: {
    'web-research': webResearchTool,
    'competitor-analysis': competitorAnalysisTool,
  },
});
