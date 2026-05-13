import { readFileSync } from 'fs';
import { join } from 'path';

const ANTHROPIC_API_URL = 'https://api.anthropic.com/v1/messages';

type AuthHeaders = { 'x-api-key': string } | { Authorization: string };

// System prompt can be a string or an array with cache_control
type SystemPrompt = string | { type: 'text'; text: string; cache_control?: { type: 'ephemeral' } }[];

interface AnthropicMessage {
  role: 'user' | 'assistant';
  content: string;
}

interface AnthropicContentBlock {
  type: string;
  text?: string;
  [key: string]: unknown;
}

interface AnthropicResponse {
  id: string;
  content: AnthropicContentBlock[];
  model: string;
  stop_reason: string;
  usage: { input_tokens: number; output_tokens: number; cache_creation_input_tokens?: number; cache_read_input_tokens?: number };
}

// Simple in-memory rate limiter for report generation
const rateLimiter = {
  requests: [] as number[],
  maxPerHour: 10,
  check(): boolean {
    const oneHourAgo = Date.now() - 60 * 60 * 1000;
    this.requests = this.requests.filter(t => t > oneHourAgo);
    if (this.requests.length >= this.maxPerHour) return false;
    this.requests.push(Date.now());
    return true;
  },
};

/**
 * Resolve auth headers. Priority:
 * 1. ANTHROPIC_API_KEY env var
 * 2. ANTHROPIC_API_KEY in .env.local
 * 3. Local Claude Code OAuth token (~/.claude/.credentials.json)
 */
function getAuthHeaders(): AuthHeaders {
  const envKey = process.env.ANTHROPIC_API_KEY;
  if (envKey) return { 'x-api-key': envKey };

  try {
    const envFile = readFileSync(join(process.cwd(), '.env.local'), 'utf-8');
    const match = envFile.match(/^ANTHROPIC_API_KEY=(.+)$/m);
    if (match?.[1]) return { 'x-api-key': match[1].trim() };
  } catch { /* .env.local not found */ }

  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { homedir } = require('os') as typeof import('os');
    const credPath = join(homedir(), '.claude', '.credentials.json');
    const creds = JSON.parse(readFileSync(credPath, 'utf-8'));
    const token = creds?.claudeAiOauth?.accessToken;
    if (token) return { Authorization: `Bearer ${token}` };
  } catch { /* credentials file not found */ }

  throw new Error('No Anthropic credentials found. Set ANTHROPIC_API_KEY or log in with Claude Code.');
}

export async function callClaude(options: {
  model: string;
  system: SystemPrompt;
  messages: AnthropicMessage[];
  maxTokens?: number;
  tools?: unknown[];
}): Promise<AnthropicResponse> {
  const authHeaders = getAuthHeaders();

  const body: Record<string, unknown> = {
    model: options.model,
    max_tokens: options.maxTokens ?? 8192,
    system: options.system,
    messages: options.messages,
  };

  if (options.tools?.length) {
    body.tools = options.tools;
  }

  const MAX_RETRIES = 3;
  let lastError = '';

  for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
    const res = await fetch(ANTHROPIC_API_URL, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        ...authHeaders,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify(body),
    });

    if (res.ok) {
      return res.json() as Promise<AnthropicResponse>;
    }

    if ((res.status === 429 || res.status === 529) && attempt < MAX_RETRIES) {
      const retryAfter = parseInt(res.headers.get('retry-after') || '60', 10);
      const waitMs = Math.min(retryAfter * 1000, 120_000);
      console.log(`Rate limited (${res.status}), retrying in ${waitMs / 1000}s (attempt ${attempt + 1}/${MAX_RETRIES})`);
      await new Promise(r => setTimeout(r, waitMs));
      continue;
    }

    lastError = await res.text();
    throw new Error(`Anthropic API error (${res.status}): ${lastError}`);
  }

  throw new Error(`Anthropic API failed after ${MAX_RETRIES} retries: ${lastError}`);
}

export async function callClaudeWithWebSearch(options: {
  model: string;
  system: SystemPrompt;
  messages: AnthropicMessage[];
  maxTokens?: number;
}): Promise<AnthropicResponse> {
  return callClaude({
    ...options,
    tools: [{ type: 'web_search_20250305', name: 'web_search' }],
  });
}

/** Extract text content from a Claude response, ignoring tool_use blocks */
export function extractText(response: AnthropicResponse): string {
  return response.content
    .filter(block => block.type === 'text' && block.text)
    .map(block => block.text!)
    .join('\n');
}

export function checkRateLimit(): boolean {
  return rateLimiter.check();
}
