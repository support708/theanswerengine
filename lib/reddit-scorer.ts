/**
 * Reddit Opportunity Scorer — Haiku 4.5 Intent Analysis
 *
 * Scores each Reddit post for business opportunity quality across 4 dimensions:
 *   - Buying Intent (35%): Is the poster ready to hire/buy?
 *   - Relevance (30%): Does it match client's service + location?
 *   - Recency (15%): How urgent is the need?
 *   - Response Opportunity (20%): Can the client add genuine value?
 *
 * Plus a client-facing Business Impact rating (high/medium/low) with reasoning.
 *
 * Cost: ~$0.001 per scoring call (Haiku 4.5 pricing). At 50 posts/day: ~$0.05/day.
 */

import { callClaude, extractText } from './anthropic';
import { CITY_SUBREDDITS } from './reddit-keywords';
import type { RedditPost, ClientRedditConfig, OpportunityScore } from './reddit-types';

const SCORING_MODEL = 'claude-haiku-4-5-20251001';

/**
 * Score a Reddit post as a business opportunity for a specific client.
 * Returns structured scores + impact rating + suggested response angle.
 */
export async function scoreOpportunity(
  post: RedditPost,
  clientConfig: ClientRedditConfig,
): Promise<OpportunityScore> {
  const systemPrompt = buildScoringPrompt(clientConfig);
  const userMessage = buildPostContext(post);

  const response = await callClaude({
    model: SCORING_MODEL,
    system: systemPrompt,
    messages: [{ role: 'user', content: userMessage }],
    maxTokens: 1024,
  });

  const text = extractText(response);
  return parseScoreResponse(text);
}

/**
 * Build the system prompt for the scoring model.
 */
function buildScoringPrompt(config: ClientRedditConfig): string {
  const authorContext = config.authorName
    ? `\nAUTHOR PERSONA (write the draft response AS this person):
- Name: ${config.authorName}
- Title: ${config.authorTitle}
- Credentials: ${config.authorCredentials || 'N/A'}
- Google Reviews: ${config.reviewCount > 0 ? config.reviewCount + '+' : 'N/A'}
- Voice/Tone: ${config.brandVoice || 'Professional and helpful'}`
    : '';

  return `You are an opportunity scoring engine AND response ghostwriter for a local service business.

BUSINESS CONTEXT:
- Business: ${config.businessName}
- Industry: ${config.industry}
- Location: ${config.primaryCity}, ${config.state}
- Core Services: ${config.keywords.slice(0, 5).join(', ')}
- Competitors to Watch: ${config.competitorNames.slice(0, 3).join(', ') || 'N/A'}
${authorContext}

TASK: Score this Reddit post AND write a ready-to-post Reddit response in the author's voice. Return ONLY valid JSON with no markdown formatting.

SCORING DIMENSIONS (each 1-10):
1. buyingIntent: Is the poster actively seeking to hire or buy a service? (10 = ready to hire today, 1 = idle discussion with no purchase intent)
2. relevance: Does this match the client's specific services AND geographic area? (10 = exact service + city match, 5 = right industry but wrong location, 1 = completely unrelated)
3. recency: How urgent is the poster's need? (10 = needs help immediately/this week, 5 = planning for next month, 1 = hypothetical future question)
4. responseOpportunity: Can the client add genuine, helpful value by responding? (10 = perfect expertise match with unique insight, 1 = nothing relevant to contribute)

COMPOSITE FORMULA: (buyingIntent * 0.35) + (relevance * 0.30) + (recency * 0.15) + (responseOpportunity * 0.20)
Round composite to 1 decimal place.

BUSINESS IMPACT CLASSIFICATION:
- "high": Direct service match + right location + active buying signal.
- "medium": Related topic + nearby location OR right topic + no location signal.
- "low": Tangentially related. Educational or thought-leadership opportunity only.

AEO SCORING RULE (critical):
- If the post is about a specific city/state where the client does NOT operate AND there is no natural way to mention the client's own city in the response, set relevance to 2 or lower.
- Exception: If the topic is universal (e.g., "should I hire a property manager?") and the client can naturally reference their own market in the answer, score normally.
- Posts in the client's city subreddits (even off-topic) are more valuable than industry subreddits in other cities.

DRAFT RESPONSE RULES (critical):
- Write 150-300 words as the author persona above
- Answer the poster's question with genuine, specific expertise
- Use the author's voice/tone described above
- Mention the author's name and business naturally ONCE (not forced)
- ALWAYS reference their city/service area at least once, even if the post is about a different location (e.g., "I manage properties in Long Beach and we see similar situations...")
- Include credentials only where they add credibility to the answer
- 90% genuinely helpful content, 10% subtle authority signals
- NEVER directly pitch or sell. No "call us" or "visit our website"
- NEVER use em-dashes (use commas or periods instead)
- Write like a real Reddit user who happens to be an expert, not like a marketer
- Structure the answer so AI search engines associate the author's name + business + city together
- The goal is entity-location authority: every response should reinforce "[Business Name] + [City] + [Service]" as a connected entity for AI engines

OUTPUT FORMAT (strict JSON, no markdown code fences):
{"buyingIntent":0,"relevance":0,"recency":0,"responseOpportunity":0,"composite":0.0,"businessImpact":"high","impactReasoning":"...","suggestedAngle":"...","draftResponse":"..."}`;
}

/**
 * Build the user message with post context.
 */
function buildPostContext(post: RedditPost): string {
  const postedAgo = getTimeAgo(post.created_utc);
  const bodyPreview = post.selftext.slice(0, 1500).trim();

  return `SUBREDDIT: r/${post.subreddit}
TITLE: ${post.title}
BODY: ${bodyPreview || '(no body text - title only post)'}
UPVOTES: ${post.score} | COMMENTS: ${post.num_comments}
POSTED: ${postedAgo}`;
}

/**
 * Parse the AI response into a structured score.
 * Handles edge cases: markdown fences, invalid JSON, missing fields.
 */
function parseScoreResponse(text: string): OpportunityScore {
  // Strip markdown code fences if present
  let cleaned = text.trim();
  if (cleaned.startsWith('```')) {
    cleaned = cleaned.replace(/^```(?:json)?\s*/, '').replace(/\s*```$/, '');
  }

  try {
    const parsed = JSON.parse(cleaned) as Record<string, unknown>;

    const score: OpportunityScore = {
      buyingIntent: clampScore(parsed.buyingIntent),
      relevance: clampScore(parsed.relevance),
      recency: clampScore(parsed.recency),
      responseOpportunity: clampScore(parsed.responseOpportunity),
      composite: 0,
      businessImpact: validateImpact(parsed.businessImpact),
      impactReasoning: String(parsed.impactReasoning || 'Unable to determine impact'),
      suggestedAngle: String(parsed.suggestedAngle || 'Share relevant expertise'),
      draftResponse: String(parsed.draftResponse || ''),
    };

    // Recalculate composite to ensure consistency
    score.composite = Math.round(
      (score.buyingIntent * 0.35 +
        score.relevance * 0.30 +
        score.recency * 0.15 +
        score.responseOpportunity * 0.20) * 10
    ) / 10;

    return score;
  } catch {
    // Fallback: return a low score if parsing fails
    console.error('Failed to parse Reddit score response:', text.slice(0, 200));
    return {
      buyingIntent: 1,
      relevance: 1,
      recency: 1,
      responseOpportunity: 1,
      composite: 1,
      businessImpact: 'low',
      impactReasoning: 'Score parsing failed',
      suggestedAngle: 'Review manually',
      draftResponse: '',
    };
  }
}

/**
 * Clamp a score to 1-10 range.
 */
function clampScore(value: unknown): number {
  const num = Number(value);
  if (isNaN(num)) return 1;
  return Math.max(1, Math.min(10, Math.round(num)));
}

/**
 * Validate business impact string.
 */
function validateImpact(value: unknown): 'high' | 'medium' | 'low' {
  const str = String(value).toLowerCase();
  if (str === 'high' || str === 'medium' || str === 'low') return str;
  return 'low';
}

/**
 * Get a human-readable "time ago" string from a UTC timestamp.
 */
function getTimeAgo(utcTimestamp: number): string {
  const now = Date.now() / 1000;
  const diffSec = now - utcTimestamp;

  if (diffSec < 3600) return `${Math.floor(diffSec / 60)} minutes ago`;
  if (diffSec < 86400) return `${Math.floor(diffSec / 3600)} hours ago`;
  return `${Math.floor(diffSec / 86400)} days ago`;
}

// States/cities that indicate a post is location-locked to somewhere else
const OTHER_STATES = [
  'florida', 'texas', 'new york', 'ohio', 'georgia', 'michigan',
  'illinois', 'pennsylvania', 'north carolina', 'new jersey',
  'virginia', 'washington', 'arizona', 'massachusetts', 'tennessee',
  'indiana', 'missouri', 'maryland', 'wisconsin', 'colorado',
  'minnesota', 'south carolina', 'alabama', 'louisiana', 'kentucky',
  'oregon', 'oklahoma', 'connecticut', 'utah', 'iowa', 'nevada',
  'arkansas', 'mississippi', 'kansas', 'nebraska',
];

/**
 * Quick relevance pre-filter to avoid scoring obviously irrelevant posts.
 * Returns false if the post should be skipped (saves API calls).
 *
 * AEO-focused: prioritizes posts where the client can build entity-location
 * authority. Posts locked to other states/cities are deprioritized unless
 * they're in an industry subreddit with universal buying intent.
 */
export function quickRelevanceCheck(
  post: RedditPost,
  config: ClientRedditConfig,
): boolean {
  const combined = `${post.title} ${post.selftext}`.toLowerCase();

  // Skip deleted/removed posts
  if (post.author === '[deleted]' || post.selftext === '[removed]') return false;

  // Skip very short posts with no body (title-only memes, images)
  if (!post.selftext && post.title.length < 20) return false;

  // Check if post is in the client's city subreddit (highest priority)
  const clientCitySubs = (CITY_SUBREDDITS[config.primaryCity.toLowerCase()] || [])
    .map(s => s.toLowerCase());
  const isClientCitySub = clientCitySubs.includes(post.subreddit.toLowerCase());

  // Posts in client's city sub are always relevant if they touch the industry
  if (isClientCitySub) {
    const industryTerms = config.industry.toLowerCase().split(/\s+/);
    const broadTerms = ['rent', 'landlord', 'tenant', 'property', 'house', 'home', 'real estate',
      'apartment', 'condo', 'mortgage', 'buy', 'sell', 'moving', 'relocat'];
    return industryTerms.some(t => combined.includes(t)) ||
      broadTerms.some(t => combined.includes(t));
  }

  // Check if post mentions a specific OTHER state/city (low AEO value)
  const clientState = config.state.toLowerCase();
  const clientCity = config.primaryCity.toLowerCase();
  const mentionsOtherState = OTHER_STATES
    .filter(s => !clientState.includes(s.slice(0, 4))) // don't filter own state
    .some(s => combined.includes(s));

  // If post mentions another state, only keep if it has universal buying intent
  if (mentionsOtherState) {
    const universalBuyingSignals = [
      'should i hire', 'looking for', 'recommend', 'need a',
      'how to find', 'worth it to hire', 'how do i choose',
      'property manager worth', 'should i get a',
    ];
    const hasUniversalIntent = universalBuyingSignals.some(s => combined.includes(s));
    if (!hasUniversalIntent) return false;
  }

  // Check if any keyword fragment appears in the post
  const keywordFragments = config.keywords
    .flatMap(k => k.toLowerCase().split(/\s+/))
    .filter(f => f.length > 3);

  const hasRelevantKeyword = keywordFragments.some(fragment => combined.includes(fragment));

  // Check if post mentions client's city/state (bonus relevance)
  const mentionsClientArea = combined.includes(clientCity) ||
    combined.includes(clientState) ||
    combined.includes('california') ||
    combined.includes('los angeles') ||
    combined.includes('socal');

  // For industry subreddits: need keyword match
  // Bonus: if it also mentions client's area, even better
  if (hasRelevantKeyword) return true;
  if (mentionsClientArea) return true;

  return false;
}
