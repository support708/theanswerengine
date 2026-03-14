/**
 * AEO Content Pipeline Workflow
 *
 * Chains four agents sequentially: Research -> Write -> Schema -> Audit
 * Each step passes its structured output to the next agent.
 * The workflow takes a topic and produces an audited, schema-enriched article.
 */

import { createWorkflow, createStep } from '@mastra/core/workflows';
import { z } from 'zod';
import { researchBriefSchema } from '../agents/researcher';
import { articleOutputSchema } from '../agents/writer';
import { schemaOutputSchema } from '../agents/schema-generator';
import { auditReportSchema } from '../agents/auditor';

// ---------------------------------------------------------------------------
// Workflow input/output schemas
// ---------------------------------------------------------------------------
const pipelineInputSchema = z.object({
  topic: z.string().describe('The topic or keyword to create content about'),
  category: z
    .string()
    .default('AEO Education')
    .describe('Content category/pillar'),
  existingTitles: z
    .array(z.string())
    .default([])
    .describe('List of existing article titles to avoid duplication'),
  existingSlugs: z
    .array(z.string())
    .default([])
    .describe('List of existing slugs to avoid duplication'),
  targetAudience: z
    .string()
    .default('local service business owners')
    .describe('Target audience segment'),
});

const pipelineOutputSchema = z.object({
  success: z.boolean(),
  article: articleOutputSchema.optional(),
  schemas: schemaOutputSchema.optional(),
  audit: auditReportSchema.optional(),
  research: researchBriefSchema.optional(),
  error: z.string().optional(),
});

// ---------------------------------------------------------------------------
// Step 1: Research
// ---------------------------------------------------------------------------
const researchStep = createStep({
  id: 'research',
  description: 'Research the topic and produce a structured brief',
  inputSchema: pipelineInputSchema,
  outputSchema: z.object({
    researchBrief: researchBriefSchema,
  }),
  execute: async ({ inputData, mastra }) => {
    const agent = mastra.getAgent('aeo-researcher');

    const prompt = `Research the following topic for an AEO-optimized blog article:

TOPIC: ${inputData.topic}
CATEGORY: ${inputData.category}
TARGET AUDIENCE: ${inputData.targetAudience}

EXISTING TITLES TO AVOID (do NOT duplicate or closely match):
${inputData.existingTitles.length > 0 ? inputData.existingTitles.map((t: string) => `- ${t}`).join('\n') : '(none)'}

EXISTING SLUGS TO AVOID:
${inputData.existingSlugs.length > 0 ? inputData.existingSlugs.map((s: string) => `- ${s}`).join('\n') : '(none)'}

Produce a comprehensive research brief. Use your tools to research the topic, analyze competitors, and gather current data. Return the structured research brief.`;

    const result = await agent.generate(prompt, {
      structuredOutput: { schema: researchBriefSchema },
    });

    return {
      researchBrief: result.object,
    };
  },
});

// ---------------------------------------------------------------------------
// Step 2: Write — takes research brief, produces article
// ---------------------------------------------------------------------------
const writeStep = createStep({
  id: 'write',
  description: 'Generate an AEO-optimized article from the research brief',
  inputSchema: z.object({
    researchBrief: researchBriefSchema,
  }),
  outputSchema: z.object({
    article: articleOutputSchema,
  }),
  execute: async ({ inputData, mastra }) => {
    const agent = mastra.getAgent('aeo-writer');
    const brief = inputData.researchBrief;

    const prompt = `Write a comprehensive AEO-optimized blog article based on this research brief:

TITLE: ${brief.refinedTitle}
SLUG: ${brief.slug}
TARGET KEYWORD: ${brief.targetKeyword}
SEARCH INTENT: ${brief.searchIntent}
TARGET AUDIENCE: ${brief.targetAudience}
CONTENT ANGLE: ${brief.contentAngle}

OUTLINE:
${brief.outline.map((h: string, i: number) => `${i + 1}. ${h}`).join('\n')}

KEY STATISTICS:
${brief.keyStats.map((s: { stat: string; source: string; sourceUrl: string }) => `- ${s.stat} (Source: ${s.source}, ${s.sourceUrl})`).join('\n')}

COMPETITOR INSIGHTS:
${brief.competitorInsights.map((c: { domain: string; angle: string; gap: string }) => `- ${c.domain}: ${c.angle} | Gap: ${c.gap}`).join('\n')}

FAQ QUESTIONS:
${brief.faqQuestions.map((q: { question: string; answer: string }) => `Q: ${q.question}\nA: ${q.answer}`).join('\n\n')}

EXCERPT: ${brief.excerpt}
TAGS: ${brief.tags.join(', ')}
CATEGORY: ${brief.category}
ESTIMATED READ TIME: ${brief.readTimeMinutes} minutes

Write the full article following AEO best practices. Return the structured article output.`;

    const result = await agent.generate(prompt, {
      structuredOutput: { schema: articleOutputSchema },
    });

    return {
      article: result.object,
    };
  },
});

// ---------------------------------------------------------------------------
// Step 3: Schema Generation — takes article, produces schemas
// ---------------------------------------------------------------------------
const schemaStep = createStep({
  id: 'schema-generation',
  description: 'Generate JSON-LD structured data for the article',
  inputSchema: z.object({
    article: articleOutputSchema,
  }),
  outputSchema: z.object({
    article: articleOutputSchema,
    schemas: schemaOutputSchema,
  }),
  execute: async ({ inputData, mastra }) => {
    const agent = mastra.getAgent('aeo-schema-generator');
    const article = inputData.article;

    const today = new Date().toISOString().split('T')[0];

    const prompt = `Generate JSON-LD structured data for this blog article:

TITLE: ${article.title}
SLUG: ${article.slug}
EXCERPT: ${article.excerpt}
CATEGORY: ${article.category}
TAGS: ${article.tags.join(', ')}
WORD COUNT: ${article.wordCount}
DATE: ${today}

FAQ QUESTIONS:
${article.faqSection.map((q: { question: string; answer: string }) => `Q: ${q.question}\nA: ${q.answer}`).join('\n\n')}

Generate the following schemas:
1. Article schema (required)
2. FAQPage schema (required - use the FAQ questions above)
3. BreadcrumbList schema (required - Home > Blog > [title])
4. LocalBusiness schema (if the article discusses specific business types)
5. Service schema (if the article discusses specific services)

Validate each schema using the schema-validator tool. Return all schemas and validation results.`;

    const result = await agent.generate(prompt, {
      structuredOutput: { schema: schemaOutputSchema },
    });

    // Pass the article through so the audit step has access to both
    return {
      article: inputData.article,
      schemas: result.object,
    };
  },
});

// ---------------------------------------------------------------------------
// Step 4: Audit — takes article + schemas, produces audit report
// ---------------------------------------------------------------------------
const auditStep = createStep({
  id: 'audit',
  description: 'Audit the article for AEO quality and completeness',
  inputSchema: z.object({
    article: articleOutputSchema,
    schemas: schemaOutputSchema,
  }),
  outputSchema: z.object({
    article: articleOutputSchema,
    schemas: schemaOutputSchema,
    audit: auditReportSchema,
  }),
  execute: async ({ inputData, mastra }) => {
    const agent = mastra.getAgent('aeo-auditor');
    const { article, schemas } = inputData;

    const prompt = `Perform a comprehensive AEO audit on this article:

TITLE: ${article.title}
SLUG: ${article.slug}
TARGET KEYWORD: ${article.tags[0] || article.title}
WORD COUNT: ${article.wordCount}
READ TIME: ${article.readTimeMinutes} minutes

ARTICLE CONTENT:
${article.content}

EXCERPT: ${article.excerpt}

FAQ SECTION (${article.faqSection.length} questions):
${article.faqSection.map((q: { question: string; answer: string }) => `Q: ${q.question}\nA: ${q.answer}`).join('\n\n')}

INTERNAL LINKS:
${article.internalLinks.map((l: { text: string; url: string }) => `- "${l.text}" -> ${l.url}`).join('\n')}

SCHEMA DATA:
Article Schema: ${schemas.articleSchema}
FAQ Schema: ${schemas.faqSchema}
Breadcrumb Schema: ${schemas.breadcrumbSchema}
${schemas.localBusinessSchema ? `LocalBusiness Schema: ${schemas.localBusinessSchema}` : ''}
${schemas.serviceSchema ? `Service Schema: ${schemas.serviceSchema}` : ''}

Schema Validation: ${schemas.validationResults.allValid ? 'All schemas valid' : `${schemas.validationResults.errors.length} errors found`}

Use the content-scorer and schema-validator tools to objectively measure quality metrics. Then apply your expert judgment for the final audit score. Be ruthless - this content represents The Answer Engine's brand.`;

    const result = await agent.generate(prompt, {
      structuredOutput: { schema: auditReportSchema },
    });

    return {
      article: inputData.article,
      schemas: inputData.schemas,
      audit: result.object,
    };
  },
});

// ---------------------------------------------------------------------------
// Step 5: Assemble — Combine all outputs into final result
// ---------------------------------------------------------------------------
const assembleStep = createStep({
  id: 'assemble',
  description: 'Combine all pipeline outputs into the final result',
  inputSchema: z.object({
    article: articleOutputSchema,
    schemas: schemaOutputSchema,
    audit: auditReportSchema,
  }),
  outputSchema: pipelineOutputSchema,
  execute: async ({ inputData, getStepResult }) => {
    const researchResult = getStepResult<{ researchBrief: z.infer<typeof researchBriefSchema> }>('research');

    return {
      success: inputData.audit.passed,
      article: inputData.article,
      schemas: inputData.schemas,
      audit: inputData.audit,
      research: researchResult.researchBrief,
    };
  },
});

// ---------------------------------------------------------------------------
// Content Pipeline Workflow
// ---------------------------------------------------------------------------
export const contentPipelineWorkflow = createWorkflow({
  id: 'aeo-content-pipeline',
  description:
    'End-to-end AEO content pipeline: Research -> Write -> Schema -> Audit. Produces a fully optimized, schema-enriched, and audited blog article.',
  inputSchema: pipelineInputSchema,
  outputSchema: pipelineOutputSchema,
  steps: [researchStep, writeStep, schemaStep, auditStep, assembleStep],
})
  .then(researchStep)
  .then(writeStep)
  .then(schemaStep)
  .then(auditStep)
  .then(assembleStep)
  .commit();

export type ContentPipelineInput = z.infer<typeof pipelineInputSchema>;
export type ContentPipelineOutput = z.infer<typeof pipelineOutputSchema>;
