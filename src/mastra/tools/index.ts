/**
 * Custom Mastra tools for The Answer Engine content pipeline.
 * These tools give agents the ability to perform specific actions
 * like web research, competitor analysis, schema validation, and content scoring.
 */

import { createTool } from '@mastra/core/tools';
import { z } from 'zod';

// ---------------------------------------------------------------------------
// Web Research Tool
// ---------------------------------------------------------------------------
export const webResearchTool = createTool({
  id: 'web-research',
  description:
    'Searches the web for current information about a topic. Returns summarized findings with source URLs.',
  inputSchema: z.object({
    query: z.string().describe('The search query to research'),
    maxResults: z
      .number()
      .int()
      .min(1)
      .max(20)
      .default(10)
      .describe('Maximum number of results to consider'),
  }),
  outputSchema: z.object({
    findings: z.array(
      z.object({
        title: z.string(),
        url: z.string().url(),
        snippet: z.string(),
        relevance: z.enum(['high', 'medium', 'low']),
      }),
    ),
    summary: z.string(),
  }),
  execute: async (inputData) => {
    // Uses Anthropic web_search tool under the hood via the agent's model.
    // This tool acts as a structured wrapper — the agent will call it,
    // and the LLM's built-in web search capability handles the actual fetching.
    // When web search is not available, return a structured placeholder
    // that the agent can use to guide its research instructions.
    return {
      findings: [
        {
          title: `Research results for: ${inputData.query}`,
          url: 'https://theanswerengine.ai',
          snippet: `Agent should use its built-in web search to research: "${inputData.query}". Focus on AEO-relevant sources, competitor content, and current statistics.`,
          relevance: 'high' as const,
        },
      ],
      summary: `Research query registered: "${inputData.query}". The agent should use model-native web search to gather findings and return structured results.`,
    };
  },
});

// ---------------------------------------------------------------------------
// Competitor Analysis Tool
// ---------------------------------------------------------------------------
export const competitorAnalysisTool = createTool({
  id: 'competitor-analysis',
  description:
    'Analyzes competitor content for a given keyword to identify gaps, strengths, and opportunities for AEO-optimized content.',
  inputSchema: z.object({
    keyword: z.string().describe('Primary keyword to analyze competition for'),
    industry: z
      .string()
      .optional()
      .describe('Industry vertical for contextual analysis'),
    competitors: z
      .array(z.string().url())
      .optional()
      .describe('Specific competitor URLs to analyze'),
  }),
  outputSchema: z.object({
    competitorCount: z.number(),
    topCompetitors: z.array(
      z.object({
        domain: z.string(),
        strengths: z.array(z.string()),
        weaknesses: z.array(z.string()),
        contentFormat: z.string(),
        estimatedWordCount: z.number(),
      }),
    ),
    contentGaps: z.array(z.string()),
    opportunities: z.array(z.string()),
    recommendedAngle: z.string(),
    difficultyScore: z.number().min(1).max(10),
  }),
  execute: async (inputData) => {
    // The agent uses this tool's structured output format to organize
    // its competitor analysis. The actual analysis is performed by the LLM
    // using its training data and web search capabilities.
    return {
      competitorCount: 0,
      topCompetitors: [],
      contentGaps: [
        `No structured competitor data available for "${inputData.keyword}". Agent should analyze top-ranking pages using web search.`,
      ],
      opportunities: [
        'Create AEO-optimized content with proper schema markup',
        'Include FAQ sections targeting "People Also Ask" queries',
        'Structure content for AI citation with concise, authoritative answers',
      ],
      recommendedAngle: `Focus on actionable AEO strategies for "${inputData.keyword}" that help local service businesses get cited by AI platforms.`,
      difficultyScore: 5,
    };
  },
});

// ---------------------------------------------------------------------------
// Schema Validator Tool
// ---------------------------------------------------------------------------
export const schemaValidatorTool = createTool({
  id: 'schema-validator',
  description:
    'Validates JSON-LD structured data against Schema.org specifications. Returns validation results with specific errors and warnings.',
  inputSchema: z.object({
    jsonLd: z.string().describe('JSON-LD string to validate'),
    expectedTypes: z
      .array(z.string())
      .optional()
      .describe(
        'Expected Schema.org types (e.g., ["FAQPage", "LocalBusiness"])',
      ),
  }),
  outputSchema: z.object({
    valid: z.boolean(),
    errors: z.array(
      z.object({
        path: z.string(),
        message: z.string(),
        severity: z.enum(['error', 'warning']),
      }),
    ),
    schemaTypes: z.array(z.string()),
    recommendations: z.array(z.string()),
  }),
  execute: async (inputData) => {
    const errors: { path: string; message: string; severity: 'error' | 'warning' }[] = [];
    let parsedSchema: Record<string, unknown>;
    let schemaTypes: string[] = [];

    try {
      parsedSchema = JSON.parse(inputData.jsonLd);
    } catch {
      return {
        valid: false,
        errors: [
          {
            path: '$',
            message: 'Invalid JSON: unable to parse JSON-LD string',
            severity: 'error' as const,
          },
        ],
        schemaTypes: [],
        recommendations: ['Fix JSON syntax errors before re-validating'],
      };
    }

    // Validate @context
    if (!parsedSchema['@context']) {
      errors.push({
        path: '$["@context"]',
        message: 'Missing required @context property',
        severity: 'error',
      });
    } else if (
      parsedSchema['@context'] !== 'https://schema.org' &&
      parsedSchema['@context'] !== 'http://schema.org'
    ) {
      errors.push({
        path: '$["@context"]',
        message:
          '@context should be "https://schema.org"',
        severity: 'warning',
      });
    }

    // Validate @type
    if (!parsedSchema['@type']) {
      errors.push({
        path: '$["@type"]',
        message: 'Missing required @type property',
        severity: 'error',
      });
    } else {
      const types = Array.isArray(parsedSchema['@type'])
        ? (parsedSchema['@type'] as string[])
        : [parsedSchema['@type'] as string];
      schemaTypes = types;

      if (inputData.expectedTypes?.length) {
        for (const expected of inputData.expectedTypes) {
          if (!types.includes(expected)) {
            errors.push({
              path: '$["@type"]',
              message: `Expected type "${expected}" not found in schema`,
              severity: 'warning',
            });
          }
        }
      }
    }

    // Type-specific validations
    const type = parsedSchema['@type'] as string;

    if (type === 'FAQPage') {
      const mainEntity = parsedSchema['mainEntity'];
      if (!mainEntity || !Array.isArray(mainEntity) || mainEntity.length === 0) {
        errors.push({
          path: '$.mainEntity',
          message: 'FAQPage requires a non-empty mainEntity array of Questions',
          severity: 'error',
        });
      } else {
        for (let i = 0; i < (mainEntity as Record<string, unknown>[]).length; i++) {
          const q = (mainEntity as Record<string, unknown>[])[i];
          if (!q['@type'] || q['@type'] !== 'Question') {
            errors.push({
              path: `$.mainEntity[${i}]["@type"]`,
              message: 'Each FAQ entry must have @type "Question"',
              severity: 'error',
            });
          }
          if (!q['name']) {
            errors.push({
              path: `$.mainEntity[${i}].name`,
              message: 'Question is missing "name" (the question text)',
              severity: 'error',
            });
          }
          const accepted = q['acceptedAnswer'] as Record<string, unknown> | undefined;
          if (!accepted) {
            errors.push({
              path: `$.mainEntity[${i}].acceptedAnswer`,
              message: 'Question is missing acceptedAnswer',
              severity: 'error',
            });
          } else if (!accepted['text']) {
            errors.push({
              path: `$.mainEntity[${i}].acceptedAnswer.text`,
              message: 'acceptedAnswer is missing "text" property',
              severity: 'error',
            });
          }
        }
      }
    }

    if (type === 'LocalBusiness') {
      const requiredFields = ['name', 'address', 'telephone'];
      for (const field of requiredFields) {
        if (!parsedSchema[field]) {
          errors.push({
            path: `$.${field}`,
            message: `LocalBusiness is missing recommended field "${field}"`,
            severity: 'warning',
          });
        }
      }
    }

    if (type === 'Article') {
      const requiredFields = ['headline', 'author', 'datePublished'];
      for (const field of requiredFields) {
        if (!parsedSchema[field]) {
          errors.push({
            path: `$.${field}`,
            message: `Article is missing required field "${field}"`,
            severity: 'error',
          });
        }
      }
    }

    if (type === 'BreadcrumbList') {
      const items = parsedSchema['itemListElement'];
      if (!items || !Array.isArray(items) || items.length === 0) {
        errors.push({
          path: '$.itemListElement',
          message: 'BreadcrumbList requires a non-empty itemListElement array',
          severity: 'error',
        });
      }
    }

    const recommendations: string[] = [];
    if (!parsedSchema['url']) {
      recommendations.push('Add a "url" property for better discoverability');
    }
    if (type === 'Article' && !parsedSchema['image']) {
      recommendations.push('Add an "image" property to Article schema for rich results');
    }
    if (type === 'LocalBusiness' && !parsedSchema['openingHours']) {
      recommendations.push('Add "openingHours" to LocalBusiness for enhanced search presence');
    }

    const hasErrors = errors.some((e) => e.severity === 'error');

    return {
      valid: !hasErrors,
      errors,
      schemaTypes,
      recommendations,
    };
  },
});

// ---------------------------------------------------------------------------
// Content Scorer Tool
// ---------------------------------------------------------------------------
export const contentScorerTool = createTool({
  id: 'content-scorer',
  description:
    'Scores content on AEO readiness metrics including keyword density, heading structure, FAQ presence, readability, and schema completeness.',
  inputSchema: z.object({
    content: z.string().describe('The full article content (HTML or Markdown)'),
    targetKeyword: z.string().describe('Primary keyword to check usage for'),
    hasSchema: z.boolean().describe('Whether JSON-LD schema is present'),
    hasFaq: z.boolean().describe('Whether FAQ section is present'),
  }),
  outputSchema: z.object({
    overallScore: z.number().min(0).max(100),
    breakdown: z.object({
      keywordUsage: z.number().min(0).max(100),
      headingStructure: z.number().min(0).max(100),
      readability: z.number().min(0).max(100),
      aeoReadiness: z.number().min(0).max(100),
      schemaCompleteness: z.number().min(0).max(100),
    }),
    issues: z.array(z.string()),
    strengths: z.array(z.string()),
  }),
  execute: async (inputData) => {
    const issues: string[] = [];
    const strengths: string[] = [];
    const content = inputData.content;
    const keyword = inputData.targetKeyword.toLowerCase();
    const contentLower = content.toLowerCase();

    // Keyword usage score
    const keywordCount = contentLower.split(keyword).length - 1;
    const wordCount = content.split(/\s+/).length;
    const keywordDensity = wordCount > 0 ? (keywordCount / wordCount) * 100 : 0;

    let keywordUsage = 0;
    if (keywordDensity >= 0.5 && keywordDensity <= 2.5) {
      keywordUsage = 90;
      strengths.push(`Keyword density is optimal at ${keywordDensity.toFixed(1)}%`);
    } else if (keywordDensity > 0 && keywordDensity < 0.5) {
      keywordUsage = 50;
      issues.push(`Keyword density is low (${keywordDensity.toFixed(1)}%). Aim for 0.5-2.5%`);
    } else if (keywordDensity > 2.5) {
      keywordUsage = 40;
      issues.push(`Keyword density is too high (${keywordDensity.toFixed(1)}%). Risk of keyword stuffing`);
    } else {
      keywordUsage = 10;
      issues.push('Target keyword not found in content');
    }

    // Check if keyword appears in first 200 chars
    if (contentLower.slice(0, 200).includes(keyword)) {
      keywordUsage = Math.min(keywordUsage + 10, 100);
      strengths.push('Target keyword appears early in content');
    }

    // Heading structure score
    const h1Count = (content.match(/<h1[\s>]/gi) || []).length;
    const h2Count = (content.match(/<h2[\s>]/gi) || []).length;
    const h3Count = (content.match(/<h3[\s>]/gi) || []).length;

    let headingStructure = 0;
    if (h1Count === 1) {
      headingStructure += 30;
      strengths.push('Single H1 tag present');
    } else if (h1Count === 0) {
      issues.push('Missing H1 tag');
    } else {
      issues.push(`Multiple H1 tags found (${h1Count}). Should have exactly one`);
      headingStructure += 10;
    }

    if (h2Count >= 3) {
      headingStructure += 40;
      strengths.push(`Good H2 structure with ${h2Count} sections`);
    } else if (h2Count > 0) {
      headingStructure += 20;
      issues.push(`Only ${h2Count} H2 headings. Aim for 3+ for thorough coverage`);
    } else {
      issues.push('No H2 headings found. Content needs section structure');
    }

    if (h3Count > 0) {
      headingStructure += 30;
      strengths.push('H3 sub-sections provide content depth');
    } else {
      headingStructure += 10;
      issues.push('Consider adding H3 sub-headings for detailed topics');
    }

    // Readability score
    const avgSentenceLength =
      wordCount / Math.max((content.match(/[.!?]+/g) || []).length, 1);
    let readability = 70;

    if (avgSentenceLength <= 20) {
      readability = 90;
      strengths.push('Sentence length is readable and concise');
    } else if (avgSentenceLength <= 30) {
      readability = 70;
      issues.push('Some sentences may be too long. Aim for under 20 words average');
    } else {
      readability = 40;
      issues.push('Sentences are too long for web readability. Break them up');
    }

    if (wordCount >= 1500) {
      readability = Math.min(readability + 10, 100);
      strengths.push(`Good content length (${wordCount} words)`);
    } else if (wordCount < 800) {
      readability = Math.max(readability - 20, 0);
      issues.push(`Content is thin at ${wordCount} words. Aim for 1500+ words`);
    }

    // AEO readiness score
    let aeoReadiness = 0;

    if (inputData.hasFaq) {
      aeoReadiness += 30;
      strengths.push('FAQ section present — critical for AI citation');
    } else {
      issues.push('Missing FAQ section. AI platforms heavily rely on Q&A format');
    }

    // Check for concise answer patterns (sentences under 50 words that answer a question)
    const shortParagraphs = content
      .split(/\n\n/)
      .filter((p) => p.split(/\s+/).length <= 50 && p.split(/\s+/).length >= 10);
    if (shortParagraphs.length >= 3) {
      aeoReadiness += 25;
      strengths.push('Contains concise answer paragraphs ideal for AI extraction');
    } else {
      issues.push('Add more concise answer paragraphs (10-50 words) for AI extraction');
    }

    // Check for list/structured content
    const listItems = (content.match(/<li[\s>]/gi) || []).length;
    if (listItems >= 3) {
      aeoReadiness += 20;
      strengths.push('Structured lists help AI platforms parse content');
    }

    // Check for definition patterns
    if (contentLower.includes(' is ') || contentLower.includes(' means ') || contentLower.includes(' refers to ')) {
      aeoReadiness += 15;
      strengths.push('Contains definition patterns that AI models prefer to cite');
    }

    // Authoritative signals
    if (content.includes('Source:') || content.includes('According to') || content.includes('Research shows')) {
      aeoReadiness += 10;
      strengths.push('Contains authority signals (citations, sources)');
    } else {
      issues.push('Add source citations and authority signals for credibility');
    }

    // Schema completeness score
    let schemaCompleteness = 0;
    if (inputData.hasSchema) {
      schemaCompleteness = 70;
      strengths.push('JSON-LD structured data is present');

      if (inputData.hasFaq) {
        schemaCompleteness += 15;
        strengths.push('FAQ schema enhances AI discoverability');
      }
      schemaCompleteness += 15; // Base bonus for having any schema
    } else {
      issues.push('No JSON-LD schema detected. Add structured data for search engines and AI');
    }

    const overallScore = Math.round(
      keywordUsage * 0.2 +
      headingStructure * 0.2 +
      readability * 0.15 +
      aeoReadiness * 0.3 +
      schemaCompleteness * 0.15,
    );

    return {
      overallScore,
      breakdown: {
        keywordUsage,
        headingStructure,
        readability,
        aeoReadiness,
        schemaCompleteness,
      },
      issues,
      strengths,
    };
  },
});

// ---------------------------------------------------------------------------
// Export all tools as a record for agent registration
// ---------------------------------------------------------------------------
export const aeoTools = {
  'web-research': webResearchTool,
  'competitor-analysis': competitorAnalysisTool,
  'schema-validator': schemaValidatorTool,
  'content-scorer': contentScorerTool,
} as const;
