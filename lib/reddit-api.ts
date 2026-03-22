/**
 * Reddit API Client — Public JSON Endpoints (No Auth Required)
 *
 * Uses Reddit's public .json endpoints for read-only access.
 * No API key or OAuth2 needed. Rate limit: ~10 requests/minute.
 * We throttle to 6s between requests to stay safe.
 *
 * If OAuth2 credentials are available (REDDIT_CLIENT_ID + REDDIT_CLIENT_SECRET),
 * we upgrade to authenticated mode for higher rate limits (100 req/min).
 */

import type { RedditPost, RedditTokenResponse } from './reddit-types';

const REDDIT_PUBLIC_BASE = 'https://www.reddit.com';
const REDDIT_OAUTH_BASE = 'https://oauth.reddit.com';
const REDDIT_TOKEN_URL = 'https://www.reddit.com/api/v1/access_token';

// In-memory OAuth token cache
let tokenCache: { token: string; expiresAt: number } | null = null;

// Rate limiting: 6s for public (10/min), 600ms for authenticated (100/min)
let lastRequestTime = 0;

function getThrottleMs(): number {
  return hasOAuthCredentials() ? 600 : 6000;
}

async function throttle(): Promise<void> {
  const now = Date.now();
  const interval = getThrottleMs();
  const wait = Math.max(0, interval - (now - lastRequestTime));
  if (wait > 0) await new Promise(r => setTimeout(r, wait));
  lastRequestTime = Date.now();
}

function getUserAgent(): string {
  return process.env.REDDIT_USER_AGENT || 'theanswerengine:reddit-monitor:v1.0';
}

function hasOAuthCredentials(): boolean {
  return !!(process.env.REDDIT_CLIENT_ID && process.env.REDDIT_CLIENT_SECRET);
}

// ===== OAuth2 (optional upgrade) =====

async function getAccessToken(): Promise<string | null> {
  if (!hasOAuthCredentials()) return null;

  if (tokenCache && Date.now() < tokenCache.expiresAt - 60_000) {
    return tokenCache.token;
  }

  const clientId = process.env.REDDIT_CLIENT_ID!;
  const clientSecret = process.env.REDDIT_CLIENT_SECRET!;
  const credentials = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

  try {
    const res = await fetch(REDDIT_TOKEN_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${credentials}`,
        'Content-Type': 'application/x-www-form-urlencoded',
        'User-Agent': getUserAgent(),
      },
      body: 'grant_type=client_credentials',
    });

    if (!res.ok) return null;

    const data = (await res.json()) as RedditTokenResponse;
    tokenCache = {
      token: data.access_token,
      expiresAt: Date.now() + data.expires_in * 1000,
    };
    return tokenCache.token;
  } catch {
    return null;
  }
}

// ===== Core Request =====

/**
 * Make a GET request to Reddit. Uses OAuth if credentials available,
 * falls back to public .json endpoints.
 */
async function redditGet(endpoint: string, params?: Record<string, string>): Promise<unknown> {
  await throttle();

  const token = await getAccessToken();
  const useOAuth = !!token;

  const baseUrl = useOAuth ? REDDIT_OAUTH_BASE : REDDIT_PUBLIC_BASE;
  const jsonSuffix = useOAuth ? '' : '.json';

  const url = new URL(`${baseUrl}${endpoint}${jsonSuffix}`);

  if (params) {
    for (const [key, value] of Object.entries(params)) {
      url.searchParams.set(key, value);
    }
  }

  // Always add raw_json=1 to avoid HTML-encoded entities
  url.searchParams.set('raw_json', '1');

  const headers: Record<string, string> = {
    'User-Agent': getUserAgent(),
  };

  if (useOAuth) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const res = await fetch(url.toString(), { headers });

  if (!res.ok) {
    // On 429 (rate limited), wait and retry once
    if (res.status === 429) {
      const retryAfter = parseInt(res.headers.get('retry-after') || '10', 10);
      await new Promise(r => setTimeout(r, retryAfter * 1000));
      const retryRes = await fetch(url.toString(), { headers });
      if (!retryRes.ok) {
        throw new Error(`Reddit API error (${retryRes.status}) ${endpoint}`);
      }
      return retryRes.json();
    }
    throw new Error(`Reddit API error (${res.status}) ${endpoint}`);
  }

  return res.json();
}

// ===== Parsing =====

/**
 * Parse a Reddit listing response into RedditPost objects.
 */
function parseListing(data: unknown): RedditPost[] {
  const listing = data as { data?: { children?: Array<{ data: Record<string, unknown> }> } };
  if (!listing?.data?.children) return [];

  return listing.data.children
    .filter(child => child.data && typeof child.data.id === 'string')
    .map(child => {
      const d = child.data;
      return {
        id: d.id as string,
        fullname: d.name as string,
        subreddit: d.subreddit as string,
        title: (d.title as string) || '',
        selftext: (d.selftext as string) || '',
        author: (d.author as string) || '[deleted]',
        permalink: (d.permalink as string) || '',
        url: `https://reddit.com${d.permalink || ''}`,
        created_utc: (d.created_utc as number) || 0,
        score: (d.score as number) || 0,
        num_comments: (d.num_comments as number) || 0,
        link_flair_text: (d.link_flair_text as string) || null,
      };
    });
}

// ===== Public API =====

/**
 * Search a subreddit for posts matching a query.
 * Returns posts from the last 24 hours by default.
 */
export async function searchSubreddit(
  subreddit: string,
  query: string,
  options?: { sort?: 'new' | 'relevance'; limit?: number; timeFilter?: 'hour' | 'day' | 'week' },
): Promise<RedditPost[]> {
  const data = await redditGet(`/r/${subreddit}/search`, {
    q: query,
    restrict_sr: '1',
    sort: options?.sort || 'new',
    t: options?.timeFilter || 'day',
    limit: String(options?.limit || 25),
    type: 'link',
  });

  return parseListing(data);
}

/**
 * Get the newest posts from a subreddit (no keyword filter).
 * Useful for broad monitoring of city/local subreddits.
 */
export async function getNewPosts(
  subreddit: string,
  limit: number = 25,
): Promise<RedditPost[]> {
  const data = await redditGet(`/r/${subreddit}/new`, {
    limit: String(limit),
  });

  return parseListing(data);
}

/**
 * Search across all of Reddit (not restricted to a subreddit).
 */
export async function searchAll(
  query: string,
  options?: { sort?: 'new' | 'relevance'; limit?: number; timeFilter?: 'hour' | 'day' | 'week' },
): Promise<RedditPost[]> {
  const data = await redditGet('/search', {
    q: query,
    sort: options?.sort || 'new',
    t: options?.timeFilter || 'day',
    limit: String(options?.limit || 25),
    type: 'link',
  });

  return parseListing(data);
}

/**
 * Check if Reddit monitoring can run.
 * Now always returns true since public endpoints need no auth.
 * OAuth credentials are optional (upgrades rate limits).
 */
export function isRedditConfigured(): boolean {
  return true; // Public .json endpoints always available
}
