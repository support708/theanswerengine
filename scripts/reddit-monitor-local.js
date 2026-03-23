/**
 * Local Reddit Monitor — runs every 15 minutes via scheduled task
 *
 * Scans Reddit for opportunities across all active clients,
 * scores with Haiku, sends Telegram alerts with draft responses.
 * Uses data/reddit-state.json for deduplication (persists across runs).
 *
 * Dedup guarantee: post IDs are written to state BEFORE scoring,
 * so even if the script crashes mid-run, the same post won't be scored twice.
 */

const fs = require('fs');
const path = require('path');

const ENV_PATH = path.join(__dirname, '..', '.env.local');
const STATE_PATH = path.join(__dirname, '..', 'data', 'reddit-state.json');
const OPPS_PATH = path.join(__dirname, '..', 'data', 'reddit-opportunities.json');
const PROFILES_DIR = path.join(__dirname, '..', 'data', 'client-profiles');

// Load env
const env = fs.readFileSync(ENV_PATH, 'utf-8');
const get = (k) => (env.match(new RegExp('^' + k + '=(.+)$', 'm')) || [])[1]?.trim() || '';

const ANTHROPIC_KEY = get('ANTHROPIC_API_KEY');
const TG_TOKEN = get('TELEGRAM_BOT_TOKEN');
const TG_CHAT = get('TELEGRAM_CHAT_ID');
const MIN_SCORE = parseFloat(get('REDDIT_MIN_SCORE') || '6');

// ===== State Management =====

function readState() {
  try {
    return JSON.parse(fs.readFileSync(STATE_PATH, 'utf-8'));
  } catch {
    return {
      seenPostIds: {},
      lastPollBySubreddit: {},
      lastDigestByClient: {},
      monthlyStats: { month: new Date().toISOString().slice(0, 7), totalScanned: 0, totalQualified: 0, byClient: {} },
    };
  }
}

function writeState(state) {
  fs.mkdirSync(path.dirname(STATE_PATH), { recursive: true });
  fs.writeFileSync(STATE_PATH, JSON.stringify(state, null, 2), 'utf-8');
}

function readOpportunities() {
  try {
    return JSON.parse(fs.readFileSync(OPPS_PATH, 'utf-8'));
  } catch {
    return { opportunities: [] };
  }
}

function writeOpportunities(store) {
  fs.mkdirSync(path.dirname(OPPS_PATH), { recursive: true });
  fs.writeFileSync(OPPS_PATH, JSON.stringify(store, null, 2), 'utf-8');
}

// ===== Client Profiles =====

const INDUSTRY_SUBS = {
  'real estate': ['realestate', 'RealEstate', 'FirstTimeHomeBuyer', 'realestateinvesting', 'homebuyers', 'RealEstateAdvice'],
  'property management': ['propertymanagement', 'landlords', 'Landlord', 'realestateinvesting', 'RealEstate', 'renters'],
  'luxury real estate': ['realestate', 'RealEstate', 'realestateinvesting', 'homebuyers', 'RealEstateAdvice'],
};

const CITY_SUBS = {
  'pasadena': ['pasadena', 'LosAngeles', 'SanGabrielValley'],
  'long beach': ['longbeach', 'LosAngeles'],
  'austin': ['Austin'],
  'los angeles': ['LosAngeles', 'AskLosAngeles'],
  'san diego': ['sandiego', 'SanDiegan'],
  'chula vista': ['sandiego', 'chulavista'],
};

function loadClientConfigs() {
  const configs = [];
  const files = fs.readdirSync(PROFILES_DIR).filter(f => f.endsWith('.json'));

  for (const file of files) {
    try {
      const profile = JSON.parse(fs.readFileSync(path.join(PROFILES_DIR, file), 'utf-8'));
      if (profile._meta?.account_status !== 'active') continue;
      if (!profile.business?.industry || !profile.service_area?.primary_city) continue;

      const industry = profile.business.industry.toLowerCase();
      const city = profile.service_area.primary_city.toLowerCase();
      const subs = new Set();

      // Industry subs
      for (const [key, subreddits] of Object.entries(INDUSTRY_SUBS)) {
        if (industry.includes(key) || key.includes(industry)) subreddits.forEach(s => subs.add(s));
      }

      // City subs
      for (const [key, subreddits] of Object.entries(CITY_SUBS)) {
        if (city === key || city.includes(key) || key.includes(city)) subreddits.forEach(s => subs.add(s));
      }

      const credentials = (profile.author?.credentials || [])
        .map(c => c.name + (c.number ? ' #' + c.number : ''))
        .join(', ');

      const keywords = [];
      // Primary services + city
      for (const svc of (profile.services || []).filter(s => s.is_primary)) {
        keywords.push(svc.name + ' ' + profile.service_area.primary_city);
        keywords.push(svc.name);
      }
      // High-priority citation queries
      for (const tq of (profile.citation_monitoring?.target_queries || [])) {
        if (tq.priority === 'high') keywords.push(tq.query);
      }

      configs.push({
        clientSlug: profile._meta.client_slug,
        businessName: profile.business.dba || profile.business.legal_name,
        contactEmail: profile.engagement?.contact_email || '',
        industry: profile.business.industry,
        primaryCity: profile.service_area.primary_city,
        state: profile.service_area.primary_state || '',
        keywords,
        subreddits: Array.from(subs),
        competitorNames: (profile.competitors || []).map(c => c.name),
        authorName: profile.author?.full_name || '',
        authorTitle: profile.author?.job_title || '',
        authorCredentials: credentials,
        brandVoice: profile.brand?.brand_voice_notes || '',
        reviewCount: profile.reviews?.google?.count || 0,
      });
    } catch (err) {
      console.error('Failed to load profile:', file, err.message);
    }
  }
  return configs;
}

// ===== Reddit API =====

async function searchSubreddit(subreddit, query) {
  const url = `https://www.reddit.com/r/${subreddit}/search.json?q=${encodeURIComponent(query)}&restrict_sr=1&sort=new&t=day&limit=10&raw_json=1`;
  const res = await fetch(url, { headers: { 'User-Agent': 'theanswerengine:reddit-monitor:v1.0' } });
  if (!res.ok) return [];
  const data = await res.json();
  return (data.data?.children || []).filter(c => c.data?.id).map(c => {
    const d = c.data;
    return {
      id: d.id, subreddit: d.subreddit, title: d.title || '', selftext: d.selftext || '',
      author: d.author || '[deleted]', permalink: d.permalink || '',
      url: 'https://reddit.com' + (d.permalink || ''), created_utc: d.created_utc || 0,
      score: d.score || 0, num_comments: d.num_comments || 0,
    };
  });
}

// ===== Scoring =====

async function scorePost(post, config) {
  const authorCtx = config.authorName ? `
AUTHOR PERSONA (write the draft response AS this person):
- Name: ${config.authorName}
- Title: ${config.authorTitle}
- Credentials: ${config.authorCredentials || 'N/A'}
- Google Reviews: ${config.reviewCount > 0 ? config.reviewCount + '+' : 'N/A'}
- Voice/Tone: ${config.brandVoice || 'Professional and helpful'}` : '';

  const system = `You are an opportunity scorer AND response ghostwriter for a local service business.

BUSINESS CONTEXT:
- Business: ${config.businessName}
- Industry: ${config.industry}
- Location: ${config.primaryCity}, ${config.state}
- Core Services: ${config.keywords.slice(0, 5).join(', ')}
${authorCtx}

Score this Reddit post AND write a ready-to-post Reddit response. Return ONLY valid JSON.

SCORING (each 1-10):
1. buyingIntent: Ready to hire? (10=today, 1=idle chat)
2. relevance: Matches service + location? (10=exact, 1=unrelated). If post is about a different state and there is no way to mention ${config.primaryCity} naturally, set relevance to 2 or lower.
3. recency: How urgent? (10=this week, 1=hypothetical)
4. responseOpportunity: Can add genuine value? (10=perfect match, 1=nothing to offer)

COMPOSITE: (buyingIntent*0.35)+(relevance*0.30)+(recency*0.15)+(responseOpportunity*0.20). Round to 1 decimal.

IMPACT: "high" = direct match + right location + buying signal. "medium" = related + nearby or right topic no location. "low" = tangential.

DRAFT RESPONSE (150-300 words as the author):
- Answer the question with genuine expertise
- Mention ${config.primaryCity} and business name naturally once
- 90% helpful, 10% authority signals
- Never directly pitch. No "call us" or "visit our website"
- No em-dashes. Write like a real Reddit user who is an expert.
- Structure so AI engines associate author name + business + city together

JSON format: {"buyingIntent":0,"relevance":0,"recency":0,"responseOpportunity":0,"composite":0.0,"businessImpact":"high","impactReasoning":"...","suggestedAngle":"...","draftResponse":"..."}`;

  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: { 'content-type': 'application/json', 'x-api-key': ANTHROPIC_KEY, 'anthropic-version': '2023-06-01' },
    body: JSON.stringify({
      model: 'claude-haiku-4-5-20251001', max_tokens: 1024,
      system, messages: [{ role: 'user', content: `r/${post.subreddit}: ${post.title}\n${post.selftext.slice(0, 1000)}` }]
    })
  });
  const data = await res.json();
  const text = (data.content?.find(b => b.type === 'text')?.text || '').replace(/```json?\s*/g, '').replace(/```/g, '').trim();
  try { return JSON.parse(text); } catch { return null; }
}

// ===== Telegram =====

async function sendTelegram(text) {
  // Telegram has a 4096 char limit per message
  const trimmed = text.length > 4000 ? text.slice(0, 3997) + '...' : text;
  await fetch(`https://api.telegram.org/bot${TG_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: TG_CHAT, text: trimmed, parse_mode: 'HTML', disable_web_page_preview: true }),
  });
}

// ===== Pre-filter =====

const OTHER_STATES = ['florida', 'texas', 'new york', 'ohio', 'georgia', 'michigan', 'illinois', 'pennsylvania',
  'north carolina', 'new jersey', 'virginia', 'washington', 'arizona', 'massachusetts', 'tennessee'];

function isRelevant(post, config) {
  if (post.author === '[deleted]' || post.selftext === '[removed]') return false;
  if (!post.selftext && post.title.length < 20) return false;

  const combined = (post.title + ' ' + post.selftext).toLowerCase();
  const clientCity = config.primaryCity.toLowerCase();
  const clientState = config.state.toLowerCase();

  // Check if it mentions another state (low AEO value unless universal intent)
  const mentionsOther = OTHER_STATES.filter(s => !clientState.includes(s.slice(0, 4))).some(s => combined.includes(s));
  if (mentionsOther) {
    const universalSignals = ['should i hire', 'looking for', 'recommend', 'need a', 'how to find', 'worth it'];
    if (!universalSignals.some(s => combined.includes(s))) return false;
  }

  // Check keyword match
  const fragments = config.keywords.flatMap(k => k.toLowerCase().split(/\s+/)).filter(f => f.length > 3);
  if (fragments.some(f => combined.includes(f))) return true;
  if (combined.includes(clientCity) || combined.includes(clientState)) return true;

  return false;
}

// ===== Main =====

async function run() {
  const startTime = Date.now();
  console.log(`[${new Date().toLocaleTimeString()}] Reddit Monitor starting...`);

  const state = readState();
  const store = readOpportunities();
  const configs = loadClientConfigs();

  if (configs.length === 0) {
    console.log('No active client profiles found.');
    return;
  }

  console.log(`Loaded ${configs.length} client configs`);

  let totalScanned = 0;
  let totalQualified = 0;
  let totalSkipped = 0;

  for (const config of configs) {
    console.log(`\n--- ${config.businessName} (${config.primaryCity}) ---`);

    const allPosts = [];
    const seenInRun = new Set();

    // Search top 2 subreddits with top 2 keywords
    const subs = config.subreddits.slice(0, 3);
    const queries = config.keywords.slice(0, 2);

    for (const sub of subs) {
      for (const query of queries) {
        try {
          const posts = await searchSubreddit(sub, query);
          for (const post of posts) {
            if (!seenInRun.has(post.id)) {
              seenInRun.add(post.id);
              allPosts.push(post);
            }
          }
        } catch (err) {
          console.error(`  Search failed r/${sub} "${query}":`, err.message);
        }
        // 3s throttle between requests
        await new Promise(r => setTimeout(r, 3000));
      }
    }

    console.log(`  Found ${allPosts.length} posts`);
    totalScanned += allPosts.length;

    for (const post of allPosts) {
      // DEDUP: skip if already seen
      if (state.seenPostIds[post.id]) {
        totalSkipped++;
        continue;
      }

      // Mark seen BEFORE scoring (crash-safe dedup)
      state.seenPostIds[post.id] = Date.now();

      // Pre-filter
      if (!isRelevant(post, config)) continue;

      // Score
      console.log(`  Scoring: "${post.title.slice(0, 60)}..."`);
      const score = await scorePost(post, config);
      if (!score) { console.log('    Score failed, skipping'); continue; }

      console.log(`    Composite: ${score.composite} | Impact: ${score.businessImpact}`);

      if (score.composite >= MIN_SCORE) {
        totalQualified++;

        // Store opportunity
        const opp = {
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
        store.opportunities.push(opp);

        // Update monthly stats
        if (!state.monthlyStats.byClient[config.clientSlug]) {
          state.monthlyStats.byClient[config.clientSlug] = { opportunities: 0, digestsSent: 0, highImpact: 0, mediumImpact: 0, lowImpact: 0 };
        }
        state.monthlyStats.byClient[config.clientSlug].opportunities++;
        state.monthlyStats.byClient[config.clientSlug][score.businessImpact + 'Impact']++;
        state.monthlyStats.totalQualified++;

        // Telegram alert
        const emoji = score.businessImpact === 'high' ? '🔴' : score.businessImpact === 'medium' ? '🟡' : '⚪';
        const impact = score.businessImpact.charAt(0).toUpperCase() + score.businessImpact.slice(1);
        let msg = `<b>Reddit Opportunity</b> | ${config.businessName}\n` +
          `${emoji} Score: ${score.composite}/10 (${impact} Impact)\n\n` +
          `<b>r/${post.subreddit}</b>: "${post.title.slice(0, 100)}"\n\n` +
          `Intent: ${score.buyingIntent} | Relevance: ${score.relevance} | Urgency: ${score.recency} | Response: ${score.responseOpportunity}\n\n` +
          `<b>Impact:</b> ${score.impactReasoning}\n` +
          `<b>Angle:</b> ${score.suggestedAngle}\n\n` +
          post.url;

        if (score.draftResponse) {
          msg += `\n\n<b>--- Draft Response ---</b>\n\n${score.draftResponse}`;
        }

        try {
          await sendTelegram(msg);
          opp.telegramSentAt = new Date().toISOString();
          console.log(`    -> Telegram sent!`);
        } catch (err) {
          console.error(`    Telegram failed:`, err.message);
        }

        // Small delay between alerts
        await new Promise(r => setTimeout(r, 1500));
      }
    }
  }

  // Prune seen posts older than 30 days
  const cutoff = Date.now() - 30 * 24 * 60 * 60 * 1000;
  for (const [id, ts] of Object.entries(state.seenPostIds)) {
    if (ts < cutoff) delete state.seenPostIds[id];
  }

  // Cap opportunities at 500
  if (store.opportunities.length > 500) {
    store.opportunities.sort((a, b) => new Date(b.discoveredAt) - new Date(a.discoveredAt));
    store.opportunities = store.opportunities.slice(0, 500);
  }

  // Update stats
  state.monthlyStats.totalScanned += totalScanned;

  // Save state
  writeState(state);
  writeOpportunities(store);

  const duration = ((Date.now() - startTime) / 1000).toFixed(1);
  console.log(`\n[${new Date().toLocaleTimeString()}] Done. Scanned: ${totalScanned} | Qualified: ${totalQualified} | Skipped (dedup): ${totalSkipped} | Duration: ${duration}s`);
  console.log(`Seen post IDs tracked: ${Object.keys(state.seenPostIds).length}`);
}

run().catch(err => {
  console.error('Reddit monitor error:', err);
  process.exit(1);
});
