/**
 * Reddit Opportunity Monitor — Type Definitions
 *
 * Monitors Reddit for business opportunities relevant to Answer Engine clients.
 * Posts are scored by AI for buying intent, relevance, and response opportunity,
 * then surfaced via Telegram alerts + client email digests.
 */

// ===== Reddit API Types =====

export interface RedditTokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
  scope: string;
}

export interface RedditPost {
  id: string;
  fullname: string;
  subreddit: string;
  title: string;
  selftext: string;
  author: string;
  permalink: string;
  url: string;
  created_utc: number;
  score: number;
  num_comments: number;
  link_flair_text: string | null;
}

// ===== Client Reddit Config (auto-derived from profile.json) =====

export interface ClientRedditConfig {
  clientSlug: string;
  businessName: string;
  contactEmail: string;
  industry: string;
  primaryCity: string;
  state: string;
  keywords: string[];
  subreddits: string[];
  competitorNames: string[];
  authorName: string;
  authorTitle: string;
  authorCredentials: string;
  brandVoice: string;
  reviewCount: number;
}

// ===== AI Scoring =====

export interface OpportunityScore {
  buyingIntent: number;
  relevance: number;
  recency: number;
  responseOpportunity: number;
  composite: number;
  businessImpact: 'high' | 'medium' | 'low';
  impactReasoning: string;
  suggestedAngle: string;
  draftResponse: string;
}

// ===== Opportunity Record =====

export interface RedditOpportunity {
  id: string;
  postId: string;
  clientSlug: string;
  businessName: string;
  subreddit: string;
  title: string;
  selftext: string;
  author: string;
  postUrl: string;
  postCreatedUtc: number;
  score: OpportunityScore;
  discoveredAt: string;
  digestSentAt: string | null;
  telegramSentAt: string | null;
  status: 'pending' | 'digest_sent' | 'responded' | 'expired';
}

// ===== State Tracking =====

export interface RedditState {
  seenPostIds: Record<string, number>;
  lastPollBySubreddit: Record<string, string>;
  lastDigestByClient: Record<string, string>;
  monthlyStats: MonthlyStats;
}

export interface MonthlyStats {
  month: string;
  totalScanned: number;
  totalQualified: number;
  byClient: Record<string, ClientMonthlyStats>;
}

export interface ClientMonthlyStats {
  opportunities: number;
  digestsSent: number;
  highImpact: number;
  mediumImpact: number;
  lowImpact: number;
}

export interface RedditOpportunitiesStore {
  opportunities: RedditOpportunity[];
}

// ===== Client Profile (subset of fields we read from profile.json) =====

export interface ClientProfile {
  _meta: {
    client_slug: string;
    account_status: string;
  };
  business: {
    legal_name: string;
    dba: string;
    industry: string;
  };
  contact: {
    email: string;
  };
  author: {
    full_name: string;
    knows_about: string[];
  };
  services: Array<{
    name: string;
    description: string;
    is_primary: boolean;
  }>;
  service_area: {
    primary_city: string;
    primary_state: string;
    cities: string[];
  };
  competitors: Array<{
    name: string;
    website: string;
  }>;
  citation_monitoring: {
    target_queries: Array<{
      query: string;
      priority: string;
    }>;
  };
  engagement: {
    contact_email: string;
    contact_name: string;
  };
  reviews?: {
    google?: { rating: number; count: number };
  };
}

// ===== Cron Response =====

export interface RedditCronResult {
  success: boolean;
  scanned: number;
  qualified: number;
  byClient: Record<string, { scanned: number; qualified: number }>;
  errors: string[];
  durationMs: number;
}

export interface DigestCronResult {
  success: boolean;
  sent: Array<{ clientSlug: string; count: number }>;
  skipped: string[];
  errors: string[];
}
