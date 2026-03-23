/**
 * Vercel Cron endpoint for Reddit Opportunity Monitor.
 * Protected by CRON_SECRET (not NextAuth).
 *
 * Processes ONE client per invocation (rotating), to stay within
 * the 5-minute Vercel function timeout. With 4 clients and a 15-min
 * cron, each client gets scanned roughly once per hour.
 *
 * Schedule: every 15 minutes (configured in vercel.json)
 * Kill switch: REDDIT_ENABLED env var
 */

import { NextRequest, NextResponse } from 'next/server';
import { searchSubreddit, isRedditConfigured } from '@/lib/reddit-api';
import { getAllClientConfigs } from '@/lib/reddit-keywords';
import { scoreOpportunity, quickRelevanceCheck } from '@/lib/reddit-scorer';
import {
  readRedditState,
  readOpportunities,
  flushRedditData,
  isPostSeen,
  markPostSeen,
  pruneSeenPosts,
  recordOpportunity,
  recordScanned,
  addOpportunity,
  pruneOldOpportunities,
} from '@/lib/reddit-state';
import { sendMessage } from '@/lib/telegram';
import { buildMonthlySummary, sendInstantHighImpactEmail } from '@/lib/reddit-digest';
import { loadClientProfile } from '@/lib/reddit-keywords';
import type { RedditPost, RedditOpportunity, ClientRedditConfig, RedditCronResult } from '@/lib/reddit-types';

export const maxDuration = 300; // 5 minutes

const MIN_SCORE = parseFloat(process.env.REDDIT_MIN_SCORE || '6');
const MAX_POSTS_TO_SCORE_PER_RUN = 15; // Keep low to fit in timeout
const MAX_SUBREDDITS_PER_RUN = 4; // Limit subreddits per client per run
const MAX_QUERIES_PER_SUB = 2; // Limit queries per subreddit

export async function GET(request: NextRequest) {
  // Auth
  const authHeader = request.headers.get('authorization');
  const cronSecret = process.env.CRON_SECRET;

  if (!cronSecret) {
    return NextResponse.json({ error: 'CRON_SECRET not configured' }, { status: 500 });
  }

  if (authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  // Kill switch
  if (process.env.REDDIT_ENABLED !== 'true') {
    return NextResponse.json({ status: 'disabled', hint: 'Set REDDIT_ENABLED=true' });
  }

  if (!isRedditConfigured()) {
    return NextResponse.json({ error: 'Reddit API not configured' }, { status: 500 });
  }

  const startTime = Date.now();
  const result: RedditCronResult = {
    success: true,
    scanned: 0,
    qualified: 0,
    byClient: {},
    errors: [],
    durationMs: 0,
  };

  try {
    // Load state and opportunities
    const state = await readRedditState();
    const store = await readOpportunities();

    // Load all active client configs
    const configs = await getAllClientConfigs();

    if (configs.length === 0) {
      return NextResponse.json({ status: 'no_active_clients' });
    }

    // Rotate: pick one client per invocation based on current time
    // With 15-min cron and 4 clients, each client scanned ~once per hour
    const clientIndex = request.nextUrl.searchParams.has('client')
      ? configs.findIndex(c => c.clientSlug === request.nextUrl.searchParams.get('client'))
      : Math.floor(Date.now() / (15 * 60 * 1000)) % configs.length;

    const safeIndex = clientIndex >= 0 && clientIndex < configs.length ? clientIndex : 0;
    const config = configs[safeIndex];

    let totalScored = 0;
    result.byClient[config.clientSlug] = { scanned: 0, qualified: 0 };

    try {
      // Pick top queries for this client
      const searchQueries = config.keywords.slice(0, MAX_QUERIES_PER_SUB);

      // Limit subreddits per run
      const subreddits = [...new Set(config.subreddits)].slice(0, MAX_SUBREDDITS_PER_RUN);

      // Search each subreddit with each query
      const allPosts: RedditPost[] = [];
      const seenInRun = new Set<string>();

      for (const subreddit of subreddits) {
        for (const query of searchQueries) {
          if (totalScored >= MAX_POSTS_TO_SCORE_PER_RUN) break;

          // Check time budget: leave 60s for scoring + flushing
          if (Date.now() - startTime > 180_000) break; // 3 min max for fetching

          try {
            const posts = await searchSubreddit(subreddit, query, {
              sort: 'new',
              timeFilter: 'day',
              limit: 10,
            });

            for (const post of posts) {
              if (!seenInRun.has(post.id)) {
                seenInRun.add(post.id);
                allPosts.push(post);
              }
            }
          } catch (err) {
            const errMsg = err instanceof Error ? err.message : 'Unknown';
            console.error(`Reddit search failed: r/${subreddit} "${query}": ${errMsg}`);
          }
        }

        if (totalScored >= MAX_POSTS_TO_SCORE_PER_RUN) break;
        if (Date.now() - startTime > 180_000) break;
      }

      result.byClient[config.clientSlug].scanned = allPosts.length;
      result.scanned += allPosts.length;

      // Process each post
      for (const post of allPosts) {
        if (totalScored >= MAX_POSTS_TO_SCORE_PER_RUN) break;
        if (Date.now() - startTime > 240_000) break; // 4 min hard cap

        // Skip already-seen posts
        if (isPostSeen(state, post.id)) continue;

        // Mark as seen immediately
        markPostSeen(state, post.id);

        // Quick relevance pre-filter
        if (!quickRelevanceCheck(post, config)) continue;

        // Score with AI
        totalScored++;
        const score = await scoreOpportunity(post, config);

        // Check threshold
        if (score.composite >= MIN_SCORE) {
          const opportunity: RedditOpportunity = {
            id: `reddit_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
            postId: post.id,
            clientSlug: config.clientSlug,
            businessName: config.businessName,
            subreddit: post.subreddit,
            title: post.title,
            selftext: post.selftext.slice(0, 500),
            author: post.author,
            postUrl: post.url,
            postCreatedUtc: post.created_utc,
            score,
            discoveredAt: new Date().toISOString(),
            digestSentAt: null,
            telegramSentAt: null,
            status: 'pending',
          };

          addOpportunity(store, opportunity);
          recordOpportunity(state, config.clientSlug, score.businessImpact);
          result.byClient[config.clientSlug].qualified++;
          result.qualified++;

          // Send Telegram alert to Justin
          try {
            await sendTelegramAlert(opportunity, config);
            opportunity.telegramSentAt = new Date().toISOString();
          } catch {
            // Non-blocking
          }

          // High impact (score >= 7): send instant email to client
          if (score.composite >= 7 && process.env.REDDIT_DIGEST_ENABLED === 'true') {
            try {
              const clientProfile = await loadClientProfile(config.clientSlug);
              if (clientProfile) {
                const sent = await sendInstantHighImpactEmail(opportunity, clientProfile);
                if (sent) {
                  opportunity.digestSentAt = new Date().toISOString();
                  opportunity.status = 'digest_sent';
                }
              }
            } catch {
              // Non-blocking -- will be caught by digest cron later
            }
          }
        }
      }
    } catch (err) {
      const errMsg = err instanceof Error ? err.message : 'Unknown';
      result.errors.push(`${config.clientSlug}: ${errMsg}`);
    }

    // Update scanned count in monthly stats
    recordScanned(state, result.scanned);

    // Prune old data (only on first client of rotation to avoid repeated work)
    if (safeIndex === 0) {
      pruneSeenPosts(state);
      pruneOldOpportunities(store);
    }

    // Monthly summary check (only on 1st of month, first client rotation)
    const today = new Date();
    if (today.getDate() === 1 && today.getHours() < 1 && safeIndex === 0) {
      try {
        const summary = buildMonthlySummary(
          state.monthlyStats.month,
          state.monthlyStats.totalScanned,
          state.monthlyStats.totalQualified,
          state.monthlyStats.byClient,
        );
        await sendMessage(summary);
      } catch {
        // Non-blocking
      }
    }

    // Atomic flush (skip commit if no new opportunities to avoid empty-commit deploy loops)
    await flushRedditData(state, store, result.qualified > 0);

    result.durationMs = Date.now() - startTime;

    return NextResponse.json({
      ...result,
      clientProcessed: config.clientSlug,
      clientIndex: safeIndex,
      totalClients: configs.length,
      nextClient: configs[(safeIndex + 1) % configs.length]?.clientSlug,
    });
  } catch (err) {
    result.success = false;
    result.errors.push(err instanceof Error ? err.message : 'Unknown error');
    result.durationMs = Date.now() - startTime;

    try {
      await sendMessage(
        `<b>Reddit Monitor FAILED</b>\n` +
        `Error: ${result.errors.join(', ')}\n` +
        `Duration: ${(result.durationMs / 1000).toFixed(1)}s`,
      );
    } catch {
      // Can't even send telegram
    }

    return NextResponse.json(result, { status: 500 });
  }
}

/**
 * Send an instant Telegram alert for a qualified opportunity.
 */
async function sendTelegramAlert(
  opp: RedditOpportunity,
  config: ClientRedditConfig,
): Promise<void> {
  const impactEmoji = opp.score.businessImpact === 'high' ? '🔴'
    : opp.score.businessImpact === 'medium' ? '🟡'
    : '⚪';

  const impactLabel = opp.score.businessImpact.charAt(0).toUpperCase() + opp.score.businessImpact.slice(1);

  let msg = `<b>Reddit Opportunity</b> | ${config.businessName}\n` +
    `${impactEmoji} Score: ${opp.score.composite}/10 (${impactLabel} Impact)\n\n` +
    `<b>r/${opp.subreddit}</b>: "${truncate(opp.title, 100)}"\n\n` +
    `Intent: ${opp.score.buyingIntent} | Relevance: ${opp.score.relevance} | ` +
    `Urgency: ${opp.score.recency} | Response: ${opp.score.responseOpportunity}\n\n` +
    `<b>Impact:</b> ${opp.score.impactReasoning}\n` +
    `<b>Angle:</b> ${opp.score.suggestedAngle}\n\n` +
    `${opp.postUrl}`;

  // Add draft response if available
  if (opp.score.draftResponse) {
    msg += `\n\n<b>--- Draft Response (copy/paste) ---</b>\n\n${opp.score.draftResponse}`;
  }

  await sendMessage(msg);
}

function truncate(str: string, maxLen: number): string {
  if (str.length <= maxLen) return str;
  return str.slice(0, maxLen - 3) + '...';
}
