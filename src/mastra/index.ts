/**
 * Mastra Instance — The Answer Engine AI Agent Framework
 *
 * Central configuration for the multi-agent AEO content pipeline.
 * Registers all agents, tools, and workflows with the Mastra runtime.
 *
 * Environment Variables Required:
 *   ANTHROPIC_API_KEY — API key for Claude models
 */

import { Mastra } from '@mastra/core';
import { researcherAgent } from './agents/researcher';
import { writerAgent } from './agents/writer';
import { schemaGeneratorAgent } from './agents/schema-generator';
import { auditorAgent } from './agents/auditor';
import { contentPipelineWorkflow } from './workflows/content-pipeline';

// ---------------------------------------------------------------------------
// Validate environment on import
// ---------------------------------------------------------------------------
if (!process.env.ANTHROPIC_API_KEY) {
  console.warn(
    '[Mastra] ANTHROPIC_API_KEY is not set. AI agents will not function until this is configured in .env.local',
  );
}

// ---------------------------------------------------------------------------
// Mastra Instance
// ---------------------------------------------------------------------------
export const mastra = new Mastra({
  agents: {
    'aeo-researcher': researcherAgent,
    'aeo-writer': writerAgent,
    'aeo-schema-generator': schemaGeneratorAgent,
    'aeo-auditor': auditorAgent,
  },
  workflows: {
    'aeo-content-pipeline': contentPipelineWorkflow,
  },
});

// ---------------------------------------------------------------------------
// Convenience exports
// ---------------------------------------------------------------------------
export { researcherAgent } from './agents/researcher';
export { writerAgent } from './agents/writer';
export { schemaGeneratorAgent } from './agents/schema-generator';
export { auditorAgent } from './agents/auditor';
export { contentPipelineWorkflow } from './workflows/content-pipeline';
export type { ResearchBrief } from './agents/researcher';
export type { ArticleOutput } from './agents/writer';
export type { SchemaOutput } from './agents/schema-generator';
export type { AuditReport } from './agents/auditor';
export type { ContentPipelineInput, ContentPipelineOutput } from './workflows/content-pipeline';
