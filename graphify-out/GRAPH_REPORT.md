# Graph Report - C:/Users/Justi/theanswerengine-nextjs  (2026-04-09)

## Corpus Check
- Large corpus: 566 files · ~2,289,520 words. Semantic extraction will be expensive (many Claude tokens). Consider running on a subfolder, or use --no-semantic to run AST-only.

## Summary
- 469 nodes · 716 edges · 51 communities detected
- Extraction: 70% EXTRACTED · 30% INFERRED · 0% AMBIGUOUS · INFERRED: 217 edges (avg confidence: 0.5)
- Token cost: 8,200 input · 2,800 output

## God Nodes (most connected - your core abstractions)
1. `POST()` - 16 edges
2. `sendMessage()` - 15 edges
3. `getFollowUpTemplates()` - 13 edges
4. `The Answer Engine Next.js Project` - 11 edges
5. `githubFetch()` - 10 edges
6. `run()` - 10 edges
7. `htmlWrap()` - 8 edges
8. `generateWeeklyRetrospective()` - 8 edges
9. `readSendLog()` - 7 edges
10. `redditGet()` - 7 edges

## Surprising Connections (you probably didn't know these)
- `POST()` --calls--> `generatePreviewCard()`  [INFERRED]
  app\api\webhook\stripe\route.ts → app\api\generate-report\route.ts
- `POST()` --calls--> `slugify()`  [INFERRED]
  app\api\webhook\stripe\route.ts → app\api\onboarding\route.ts
- `POST()` --calls--> `generateInterviewQuestions()`  [INFERRED]
  app\api\webhook\stripe\route.ts → app\api\onboarding\route.ts
- `POST()` --calls--> `handleHunt()`  [INFERRED]
  app\api\webhook\stripe\route.ts → app\api\telegram\webhook\route.ts
- `POST()` --calls--> `handlePipeline()`  [INFERRED]
  app\api\webhook\stripe\route.ts → app\api\telegram\webhook\route.ts

## Hyperedges (group relationships)
- **AEO Article Quality System** — championship-format, schema-org-markup, cta-strategy, aeo-optimization, seo-optimization [EXTRACTED 1.00]
- **Next.js Platform Stack** — nextjs-app-router, anthropic-api, nextauth-v5, json-file-storage, telegram-bot-notifications [EXTRACTED 1.00]

## Communities

### Community 0 - "Blog UI Components"
Cohesion: 0.05
Nodes (9): AnimatedStat(), fetchLead(), handleApprove(), handleCreateDraft(), handleMarkSent(), handleStatusUpdate(), useCountAnimation(), usePrefersReducedMotion() (+1 more)

### Community 1 - "Auth & Deployment"
Cohesion: 0.09
Nodes (25): authenticateRequest(), formatCurrency(), generateInterviewQuestions(), generatePreviewCard(), GET(), handleFollowup(), handleHelp(), handleHunt() (+17 more)

### Community 2 - "Blog Bot Engine"
Cohesion: 0.11
Nodes (24): auditArticle(), delay(), escapeXml(), generateArticle(), generateBlogHeroImage(), generateBlogSvg(), researchTopic(), runPipeline() (+16 more)

### Community 3 - "Lead Deduplication"
Cohesion: 0.09
Nodes (16): extractDomain(), isDuplicate(), normalizeBusinessName(), checkOutreachReadiness(), appendHuntLog(), ensureDir(), readHuntLog(), writeBacklog() (+8 more)

### Community 4 - "Gmail Email Service"
Cohesion: 0.15
Nodes (18): buildFollowUp1Body(), buildFollowUp1Html(), buildFollowUp1Subject(), buildFollowUp2Body(), buildFollowUp2Html(), buildFollowUp2Subject(), buildFollowUp3Body(), buildFollowUp3Html() (+10 more)

### Community 5 - "AEO Content & Brand"
Cohesion: 0.13
Nodes (23): Admin Pipeline (app/admin/pipeline/), AEO Articles (4 Championship-Format Blogs), The Answer Engine LLC Brand, App Icon/Logo, Anthropic API (lib/anthropic.ts), Article: AI Different Answers, Article: Apple Intelligence Local Business, Article: Local SEO vs AI Search (+15 more)

### Community 6 - "Reddit State Manager"
Cohesion: 0.13
Nodes (12): acquireWriteLock(), currentMonth(), defaultMonthlyStats(), defaultOpportunitiesStore(), defaultState(), flushRedditData(), getClientStats(), readOpportunities() (+4 more)

### Community 7 - "Reddit Digest Builder"
Cohesion: 0.16
Nodes (15): buildDigestEmail(), buildHtmlDigest(), buildPlainTextDigest(), buildSingleOpportunityEmail(), checkAndSendDigests(), escapeHtml(), getDateRange(), sendInstantHighImpactEmail() (+7 more)

### Community 8 - "AERO7 Scoring Engine"
Cohesion: 0.19
Nodes (15): notifyAutoClosedNoResponse(), notifyBlogBatchPublished(), notifyBlogPublished(), notifyEmailDrafted(), notifyFollowUpDrafted(), notifyFollowUpFailure(), notifyHuntComplete(), notifyHuntDailySummary() (+7 more)

### Community 9 - "Lead Management"
Cohesion: 0.18
Nodes (14): getLeadById(), readLeads(), updateLead(), writeLeads(), calculateAEROCorrelation(), calculateFollowUpMetrics(), calculateHuntPriorities(), calculateMetroMetrics() (+6 more)

### Community 10 - "GitHub Publisher"
Cohesion: 0.25
Nodes (13): createBlob(), createCommit(), createTree(), getFileContent(), getFileContentSafe(), getHeadSha(), getTreeSha(), githubFetch() (+5 more)

### Community 11 - "Anthropic API Client"
Cohesion: 0.21
Nodes (10): callClaude(), callClaudeWithWebSearch(), getApiKey(), buildPostContext(), buildScoringPrompt(), clampScore(), getTimeAgo(), parseScoreResponse() (+2 more)

### Community 12 - "Page Layouts"
Cohesion: 0.15
Nodes (0): 

### Community 13 - "Email Scheduler"
Cohesion: 0.33
Nodes (11): canSendToday(), getDailyLimit(), getLeadsDueForFollowUp(), getSentDate(), getSentToday(), getWarmupStatus(), logSend(), prepareSendLogFile() (+3 more)

### Community 14 - "Reddit API Client"
Cohesion: 0.36
Nodes (10): getAccessToken(), getNewPosts(), getThrottleMs(), getUserAgent(), hasOAuthCredentials(), parseListing(), redditGet(), searchAll() (+2 more)

### Community 15 - "Reddit Monitor"
Cohesion: 0.3
Nodes (10): isRelevant(), loadClientConfigs(), readOpportunities(), readState(), run(), scorePost(), searchSubreddit(), sendTelegram() (+2 more)

### Community 16 - "Hero Image Backfill"
Cohesion: 0.29
Nodes (6): fileExists(), main(), buildImagePrompt(), generateAndSaveHeroImage(), generateHeroImage(), saveHeroWebp()

### Community 17 - "Gmail API Client"
Cohesion: 0.46
Nodes (6): buildRawEmail(), createGmailDraft(), getGmailClient(), sendGmailDraft(), sendGmailMessage(), sendGmailMessageWithRetry()

### Community 18 - "GSAP Animations"
Cohesion: 0.29
Nodes (0): 

### Community 19 - "Follow-up Templates"
Cohesion: 0.53
Nodes (4): buildFollowUp1(), buildFollowUp2(), buildFollowUp3(), buildFollowUpEmail()

### Community 20 - "Content Pipeline Index"
Cohesion: 0.6
Nodes (0): 

### Community 21 - "Input Sanitization"
Cohesion: 0.5
Nodes (2): sanitizeField(), stripHtml()

### Community 22 - "Scroll Animation Hooks"
Cohesion: 0.5
Nodes (2): usePrefersReducedMotion(), useScrollAnimation()

### Community 23 - "Deploy & Draft"
Cohesion: 0.7
Nodes (4): createDraft(), deployReport(), getAccessToken(), main()

### Community 24 - "Client Digest Sender"
Cohesion: 0.6
Nodes (3): buildEmail(), escapeHtml(), sendAll()

### Community 25 - "Module 25"
Cohesion: 0.67
Nodes (2): buildEmail(), sendAll()

### Community 26 - "Module 26"
Cohesion: 0.83
Nodes (3): callHaiku(), get(), main()

### Community 27 - "Module 27"
Cohesion: 1.0
Nodes (2): getAccessToken(), main()

### Community 28 - "Module 28"
Cohesion: 0.67
Nodes (3): Answer Engine Optimization Strategy, FAQPage Schema (7-8 Qs per article), SEO Optimization

### Community 29 - "Module 29"
Cohesion: 1.0
Nodes (0): 

### Community 30 - "Module 30"
Cohesion: 1.0
Nodes (0): 

### Community 31 - "Module 31"
Cohesion: 1.0
Nodes (0): 

### Community 32 - "Module 32"
Cohesion: 1.0
Nodes (0): 

### Community 33 - "Module 33"
Cohesion: 1.0
Nodes (0): 

### Community 34 - "Module 34"
Cohesion: 1.0
Nodes (0): 

### Community 35 - "Module 35"
Cohesion: 1.0
Nodes (0): 

### Community 36 - "Module 36"
Cohesion: 1.0
Nodes (0): 

### Community 37 - "Module 37"
Cohesion: 1.0
Nodes (0): 

### Community 38 - "Module 38"
Cohesion: 1.0
Nodes (0): 

### Community 39 - "Module 39"
Cohesion: 1.0
Nodes (0): 

### Community 40 - "Module 40"
Cohesion: 1.0
Nodes (0): 

### Community 41 - "Module 41"
Cohesion: 1.0
Nodes (0): 

### Community 42 - "Module 42"
Cohesion: 1.0
Nodes (0): 

### Community 43 - "Module 43"
Cohesion: 1.0
Nodes (0): 

### Community 44 - "Module 44"
Cohesion: 1.0
Nodes (0): 

### Community 45 - "Module 45"
Cohesion: 1.0
Nodes (0): 

### Community 46 - "Module 46"
Cohesion: 1.0
Nodes (0): 

### Community 47 - "Module 47"
Cohesion: 1.0
Nodes (0): 

### Community 48 - "Module 48"
Cohesion: 1.0
Nodes (0): 

### Community 49 - "Module 49"
Cohesion: 1.0
Nodes (0): 

### Community 50 - "Module 50"
Cohesion: 1.0
Nodes (0): 

## Knowledge Gaps
- **15 isolated node(s):** `Next.js 16 App Router + React 19`, `SEO Optimization`, `CTA Strategy (18 per article)`, `Anthropic API (lib/anthropic.ts)`, `NextAuth v5 (JWT sessions)` (+10 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Module 29`** (2 nodes): `sitemap.ts`, `sitemap()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Module 30`** (2 nodes): `ArticleSchema.tsx`, `ArticleSchema()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Module 31`** (2 nodes): `BreadcrumbSchema.tsx`, `BreadcrumbSchema()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Module 32`** (2 nodes): `FAQSchema.tsx`, `FAQSchema()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Module 33`** (2 nodes): `HowToSchema.tsx`, `HowToSchema()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Module 34`** (2 nodes): `PersonSchema.tsx`, `PersonSchema()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Module 35`** (2 nodes): `Badge.tsx`, `Badge()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Module 36`** (2 nodes): `Card.tsx`, `Card()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Module 37`** (2 nodes): `Divider.tsx`, `Divider()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Module 38`** (2 nodes): `useMouseGlow.ts`, `useMouseGlow()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Module 39`** (2 nodes): `daily-content-engine.ps1`, `Log()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Module 40`** (2 nodes): `test-onboarding-email.js`, `get()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Module 41`** (2 nodes): `update-article-images.ts`, `main()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Module 42`** (1 nodes): `middleware.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Module 43`** (1 nodes): `next-env.d.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Module 44`** (1 nodes): `next.config.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Module 45`** (1 nodes): `not-found.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Module 46`** (1 nodes): `Button.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Module 47`** (1 nodes): `GlowContainer.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Module 48`** (1 nodes): `SectionHeader.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Module 49`** (1 nodes): `constants.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Module 50`** (1 nodes): `test-gmail.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Are the 15 inferred relationships involving `POST()` (e.g. with `handleRequest()` and `generatePreviewCard()`) actually correct?**
  _`POST()` has 15 INFERRED edges - model-reasoned connections that need verification._
- **Are the 14 inferred relationships involving `sendMessage()` (e.g. with `notifyLeadCreated()` and `notifyResearchComplete()`) actually correct?**
  _`sendMessage()` has 14 INFERRED edges - model-reasoned connections that need verification._
- **Are the 12 inferred relationships involving `getFollowUpTemplates()` (e.g. with `buildFollowUp1Subject()` and `buildFollowUp1Body()`) actually correct?**
  _`getFollowUpTemplates()` has 12 INFERRED edges - model-reasoned connections that need verification._
- **Are the 9 inferred relationships involving `githubFetch()` (e.g. with `getHeadSha()` and `getTreeSha()`) actually correct?**
  _`githubFetch()` has 9 INFERRED edges - model-reasoned connections that need verification._
- **What connects `Next.js 16 App Router + React 19`, `SEO Optimization`, `CTA Strategy (18 per article)` to the rest of the system?**
  _15 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Blog UI Components` be split into smaller, more focused modules?**
  _Cohesion score 0.05 - nodes in this community are weakly interconnected._
- **Should `Auth & Deployment` be split into smaller, more focused modules?**
  _Cohesion score 0.09 - nodes in this community are weakly interconnected._