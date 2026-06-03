import type { Metadata } from 'next'
import Link from 'next/link'

export const dynamicParams = true

const title = 'How ChatGPT Search Picks Local Business Results'
const description =
  '900 million people use ChatGPT weekly, and 87% of its local business citations align with Bing results. Here is exactly how ChatGPT Search picks which businesses to recommend.'
const slug = 'how-chatgpt-search-picks-local-business-results'
const publishDate = '2026-04-16'

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'ChatGPT Search local business',
    'how ChatGPT picks businesses to recommend',
    'ChatGPT local search ranking',
    'ChatGPT Search ranking factors',
    'ChatGPT business recommendations',
    'ChatGPT Search vs Perplexity',
    'Bing Places ChatGPT',
    'Foursquare ChatGPT data',
    'ChatGPT Search 2026',
    'how ChatGPT finds businesses',
  ],
  openGraph: {
    title,
    description,
    type: 'article',
    url: `https://theanswerengine.ai/blog/${slug}`,
    images: [
      {
        url: `https://theanswerengine.ai/blog/${slug}.webp`,
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
  alternates: {
    canonical: `https://theanswerengine.ai/blog/${slug}`,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      '@id': `https://theanswerengine.ai/blog/${slug}#article`,
      headline: title,
      description,
      image: `https://theanswerengine.ai/blog/${slug}.webp`,
      datePublished: publishDate,
      dateModified: publishDate,
      author: {
        '@type': 'Person',
        '@id': 'https://theanswerengine.ai/about#justin-borges',
        name: 'Justin Borges',
        jobTitle: 'Founder, The Answer Engine',
        worksFor: {
          '@type': 'Organization',
          name: 'The Answer Engine',
          url: 'https://theanswerengine.ai',
        },
        knowsAbout: ['Answer Engine Optimization', 'AI Search', 'Content Strategy', 'Real Estate Marketing', 'Citation Surface'],
        url: 'https://theanswerengine.ai/about',
        image: 'https://theanswerengine.ai/justin-borges.webp',
      },
      publisher: {
        '@type': 'Organization',
        '@id': 'https://theanswerengine.ai/#organization',
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `https://theanswerengine.ai/blog/${slug}`,
      },
    },
    {
      '@type': 'FAQPage',
      '@id': `https://theanswerengine.ai/blog/${slug}#faq`,
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Does ChatGPT use Google data to recommend local businesses?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. ChatGPT Search queries Bing (not Google) for local business results. Approximately 87% of ChatGPT local business citations align with Bing top results. Google reviews and Google Maps data are walled off from ChatGPT. However, 70% of ChatGPT local results also pull from Foursquare data, and a new 2026 Yelp partnership means Yelp reviews now surface directly in ChatGPT Search responses.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I pay to get my business recommended by ChatGPT Search?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. ChatGPT Search does not offer paid placement for local business recommendations. Results are determined algorithmically based on the five ranking signals: review sentiment and recency, consensus across multiple sources, complete business profile information, trust and authority signals, and attribute match to the query. There is no advertising product that bypasses this algorithm.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the difference between ChatGPT base knowledge and ChatGPT Search?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'ChatGPT base knowledge is frozen at its training cutoff date and relies on what was in the training data. For local business queries, this data is often outdated or absent. ChatGPT Search (with web browsing enabled) retrieves real-time information from Bing and other live sources. For local queries, users who want accurate recommendations should use ChatGPT with web browsing, or use ChatGPT Search directly. Base ChatGPT responses about specific businesses are often unreliable.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why is my business not showing up in ChatGPT Search results?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The most common reasons a business is invisible in ChatGPT Search are: not listed on Bing Places for Business (the primary data source), no presence on Foursquare (70% of local results), missing or incomplete Yelp profile (new 2026 partnership), and low review volume or review recency. Because 87% of ChatGPT citations track Bing, improving your Bing Places profile is the highest-leverage first action for most businesses.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does ChatGPT Search evaluate business authority?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'ChatGPT Search weights business authority according to four signals: authoritative list mentions such as "best of" rankings (41% weight), awards and accreditations (18%), online reviews across verified platforms (16%), website authority including schema markup and FAQ structure (15%), and NAP consistency across sources (10%). Getting mentioned in industry publications or local best-of lists is the highest-leverage action for building ChatGPT Search authority.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is ChatGPT Search different from Perplexity for local business results?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, meaningfully so. ChatGPT Search relies primarily on Bing and Foursquare, with Yelp added in 2026. Perplexity crawls the web more broadly and weights its own indexed content more directly. Perplexity tends to cite more web sources (blog posts, articles, directories) while ChatGPT Search relies more on structured business data. A business visible on Bing, Foursquare, and Yelp will perform better on ChatGPT Search. A business with strong web content and third-party mentions will perform better on Perplexity.',
          },
        },
      ],
    },
    {
      '@type': 'Organization',
      '@id': 'https://theanswerengine.ai/#organization',
      name: 'The Answer Engine',
      url: 'https://theanswerengine.ai',
      logo: 'https://theanswerengine.ai/TheAnswerEngine_Color.png',
      description:
        'Answer Engine Optimization agency helping businesses get cited by AI platforms.',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://theanswerengine.ai/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Blog',
          item: 'https://theanswerengine.ai/blog',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: title,
        },
      ],
    },
  ],
}

function Breadcrumb() {
  return (
    <nav className="text-sm text-gray-500 mb-8">
      <Link href="/" className="hover:text-white transition-colors">
        Home
      </Link>
      <span className="mx-2">&rsaquo;</span>
      <Link href="/blog" className="hover:text-white transition-colors">
        Blog
      </Link>
      <span className="mx-2">&rsaquo;</span>
      <span className="text-gray-400">ChatGPT Search Deep Dive</span>
    </nav>
  )
}

export default function HowChatGPTSearchPicksLocalBusinessResults() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-[#0F1117]">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-white/5">
          <div className="absolute inset-0 bg-gradient-to-br from-[#F27D24]/10 via-transparent to-transparent" />
          <svg
            className="absolute inset-0 w-full h-full opacity-[0.03]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="hero-grid-chatgpt"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="white"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-grid-chatgpt)" />
          </svg>

          <div className="relative max-w-4xl mx-auto px-6 py-16 sm:py-24">
            <Breadcrumb />
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 bg-[#F27D24]/10 border border-[#F27D24]/30">
              <span className="text-sm font-semibold tracking-wider uppercase text-[#F27D24]">
                Platform Deep Dives
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">
              How ChatGPT Search Picks{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F27D24] to-orange-400">
                Local Business Results
              </span>
            </h1>
            {/* Championship Cover Image */}
            <div className="ae-article-hero w-full rounded-xl overflow-hidden my-8" style={{ maxHeight: 440 }}>
              <img
                src="/blog/how-chatgpt-search-picks-local-business-results.webp"
                alt="how chatgpt search picks local business results"
                style={{ width: '100%', height: 440, objectFit: 'cover', display: 'block' }}
                loading="eager"
              />
            </div>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
              ChatGPT has 900 million weekly users and processes 2 billion
              queries daily. When someone asks it to find a business near them,
              the algorithm that decides who appears is specific, knowable, and
              optimizable. Here is exactly how it works.
            </p>
            <div className="flex flex-wrap gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span>April 16, 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>10 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <span>Justin Borges</span>
              </div>
            </div>
          </div>
        </section>

        {/* Article Body */}
        <article className="max-w-4xl mx-auto px-6 py-12 sm:py-16">
          <div className="prose prose-invert prose-lg max-w-none prose-headings:font-plus-jakarta prose-headings:text-white prose-p:text-gray-300 prose-a:text-[#F27D24] prose-a:no-underline hover:prose-a:underline prose-strong:text-white">

            {/* STATS GRID */}
            <div className="ae-stats-grid not-prose">
              <div className="ae-stat-card">
                <div className="ae-stat-value ae-accent">900M</div>
                <div className="ae-stat-label">
                  weekly active users on ChatGPT as of February 2026
                </div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-value ae-accent">87%</div>
                <div className="ae-stat-label">
                  of ChatGPT local citations align with Bing top results
                </div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-value ae-accent">70%</div>
                <div className="ae-stat-label">
                  of ChatGPT local results pull from Foursquare location data
                </div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-value ae-accent">80%</div>
                <div className="ae-stat-label">
                  AI search market share held by ChatGPT across all platforms
                </div>
              </div>
            </div>

            {/* TABLE OF CONTENTS */}
            <div className="ae-toc not-prose">
              <div className="ae-toc-title">Table of Contents</div>
              <ol>
                <li>
                  <a href="#the-scale">The Scale of ChatGPT Search</a>
                </li>
                <li>
                  <a href="#how-it-works">How ChatGPT Search Actually Works for Local Queries</a>
                </li>
                <li>
                  <a href="#data-sources">The Data Sources ChatGPT Pulls From</a>
                </li>
                <li>
                  <a href="#ranking-signals">The 5 Core Ranking Signals</a>
                </li>
                <li>
                  <a href="#authority">How ChatGPT Evaluates Business Authority</a>
                </li>
                <li>
                  <a href="#base-vs-search">Base ChatGPT vs ChatGPT Search: The Difference</a>
                </li>
                <li>
                  <a href="#vs-perplexity">ChatGPT Search vs Perplexity: Different Engines</a>
                </li>
                <li>
                  <a href="#what-doesnt-work">What Does Not Work for ChatGPT Search</a>
                </li>
                <li>
                  <a href="#action-plan">Your Action Plan for ChatGPT Search Visibility</a>
                </li>
                <li>
                  <a href="#faq">Frequently Asked Questions</a>
                </li>
              </ol>
            </div>

            {/* SECTION 1: SCALE */}
            <span className="ae-section-label" id="the-scale">
              Scale and Context
            </span>
            <h2>The Scale of ChatGPT Search</h2>

            <p>
              ChatGPT is not a niche tool anymore. With 900 million weekly active
              users and 2 billion daily queries as of early 2026, it processes
              more search intent than most traditional search engines outside of
              Google. It holds 80% of the AI search market share across all
              platforms, which means more users are asking ChatGPT to find local
              businesses than all other AI search tools combined.
             Markets fill fast. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Check your territory availability.</a></p>

            <p>
              The breakdown of how people use ChatGPT is telling. Forty-nine
              percent of usage is &quot;asking questions,&quot; a category that includes
              local discovery queries like &quot;find me the best pizza in [city]&quot;
              or &quot;who are the top personal injury lawyers in [area].&quot; These
              are not edge-case searches. They are daily queries happening
              hundreds of millions of times across industries and markets.
             Your first step: <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free AERO Blind Spot Scan.</a></p>

            <div className="ae-callout-info not-prose">
              <strong>Your Business Is Already Being Searched on ChatGPT</strong>
              <p>
                Whether your business appears in those searches is a different
                question. But someone in your market, looking for exactly what
                you sell, asked ChatGPT about it today. The only variable is
                whether your business came up.
               <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Claim your free call</a> before your market fills.</p>
            </div>

            <p>
              The critical insight for local businesses is that ChatGPT Search
              is not a future concern. It is an active channel right now. And
              unlike Google, where the algorithm has been studied and gamed for
              two decades, ChatGPT Search is still early enough that getting
              the basics right creates a meaningful and durable advantage.
             Reach out: <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>

            {/* INLINE CTA 1 */}
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Check if AI search recommends your local business</a>

            {/* SECTION 2: HOW IT WORKS */}
            <span className="ae-section-label" id="how-it-works">
              The Mechanism
            </span>
            <h2>How ChatGPT Search Actually Works for Local Queries</h2>

            <p>
              When someone asks ChatGPT to find a local business, the system
              does not rely on its training data. Training data is frozen at a
              cutoff date and is often inaccurate for local business information
              because business listings change frequently. Instead, ChatGPT
              Search queries Bing in real time, retrieves the top 20 to 30
              results for the relevant query, and synthesizes those results into
              a response.
             <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Lock in your exclusive territory now.</a></p>

            <p>
              This has a profound implication: your standing on Bing is the
              most direct predictor of whether ChatGPT Search mentions your
              business. Research shows 87% of ChatGPT local business citations
              align with Bing&apos;s top results. If you are not on Bing Places for
              Business with a complete, verified profile, your ChatGPT Search
              visibility is limited regardless of how well you rank on Google.
             <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Get your free AI readiness report.</a></p>

            <div className="ae-callout-warning not-prose">
              <strong>The Google Trap</strong>
              <p>
                Most businesses optimize exclusively for Google. Google and
                ChatGPT do not share data. Google reviews are walled off from
                ChatGPT. Google Maps data does not feed into ChatGPT Search.
                A business that is highly visible on Google can be nearly
                invisible to ChatGPT Search if they have not built presence
                on the platforms ChatGPT actually reads.
               Ready to act? <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a free strategy session.</a></p>
            </div>

            <p>
              Beyond Bing, ChatGPT enriches local results with data from
              Foursquare. Approximately 70% of ChatGPT local results include
              Foursquare-sourced location data, hours, and category information.
              A business with a complete Foursquare profile gets more complete
              representation in ChatGPT responses. A business without one gets
              pulled from Bing alone, which is a thinner dataset.
             Drop us a line at <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>

            {/* SECTION 3: DATA SOURCES */}
            <span className="ae-section-label" id="data-sources">
              Data Sources
            </span>
            <h2>The Data Sources ChatGPT Pulls From</h2>

            <p>
              Understanding where ChatGPT gets its local business data is the
              most actionable intelligence for improving your visibility. The
              platform pulls from a hierarchy of sources, with different sources
              carrying different weights and serving different query types.
             Speak to an AEO specialist: <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.</p>

            <div className="not-prose my-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-3 mb-3">
                  <span className="ae-tier-badge ae-tier-premium">Primary</span>
                  <span className="font-semibold text-white">Bing Places for Business</span>
                </div>
                <p className="text-sm text-gray-400">
                  The foundational data source. ChatGPT Search queries Bing for
                  every local query. A verified, complete, and recently updated
                  Bing Places profile is the non-negotiable baseline for ChatGPT
                  visibility. 87% of citations track Bing.
                 One client per city. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">See if your market is available.</a></p>
              </div>
              <div className="p-5 rounded-xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-3 mb-3">
                  <span className="ae-tier-badge ae-tier-premium">Primary</span>
                  <span className="font-semibold text-white">Foursquare Location Data</span>
                </div>
                <p className="text-sm text-gray-400">
                  70% of local ChatGPT results include Foursquare data.
                  Foursquare powers the location information, hours, and
                  category classification. A complete Foursquare presence
                  enriches your representation in ChatGPT responses.
                 Check where you stand: <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free Blind Spot Scan.</a></p>
              </div>
              <div className="p-5 rounded-xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-3 mb-3">
                  <span className="ae-tier-badge ae-tier-high">2026 Addition</span>
                  <span className="font-semibold text-white">Yelp (New 2026 Partnership)</span>
                </div>
                <p className="text-sm text-gray-400">
                  OpenAI announced a Yelp partnership in 2026, meaning Yelp
                  reviews now surface directly in ChatGPT Search responses for
                  local queries. Yelp visibility is now directly tied to
                  ChatGPT Search visibility.
                 <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Schedule a free 30-min call.</a></p>
              </div>
              <div className="p-5 rounded-xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-3 mb-3">
                  <span className="ae-tier-badge ae-tier-medium">Supporting</span>
                  <span className="font-semibold text-white">Website Content + Schema</span>
                </div>
                <p className="text-sm text-gray-400">
                  When ChatGPT Search crawls your website as part of a Bing
                  result, structured data (schema markup) and FAQ content
                  directly influence what gets cited. Well-structured pages
                  appear more completely in responses.
                 Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> for a custom strategy.</p>
              </div>
            </div>

            <div className="ae-callout-orange not-prose">
              <strong>What ChatGPT Cannot Access</strong>
              <ul className="mt-2 space-y-1 text-sm text-gray-300">
                <li>Google Reviews (completely walled off from ChatGPT)</li>
                <li>Google Maps data (separate ecosystem, not shared)</li>
                <li>Private directories that block bots in robots.txt</li>
                <li>Social media posts (Instagram, Facebook, TikTok content)</li>
                <li>Email newsletters and private subscriber content</li>
              </ul>
            </div>

            {/* SECTION 4: RANKING SIGNALS */}
            <span className="ae-section-label" id="ranking-signals">
              Ranking Signals
            </span>
            <h2>The 5 Core Ranking Signals for ChatGPT Search</h2>

            <p>
              Once ChatGPT has retrieved relevant business listings from Bing,
              Foursquare, and Yelp, it synthesizes them according to a scoring
              model. Research into ChatGPT citation patterns has revealed five
              consistent signal categories, weighted as follows.
             Questions? Call <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.</p>

            {/* BAR GROUP */}
            <div className="ae-bar-group not-prose">
              <div className="ae-bar-group-title">
                ChatGPT Search Local Business Ranking Signal Weights
              </div>
              <div className="ae-bar-item">
                <div className="ae-bar-label">Review Sentiment and Recency (30-35%)</div>
                <div className="ae-bar-track">
                  <div className="ae-bar-fill" style={{ width: '93%' }}>
                    93%
                  </div>
                </div>
              </div>
              <div className="ae-bar-item">
                <div className="ae-bar-label">Consensus Across Multiple Sources (25-30%)</div>
                <div className="ae-bar-track">
                  <div className="ae-bar-fill" style={{ width: '86%' }}>
                    86%
                  </div>
                </div>
              </div>
              <div className="ae-bar-item">
                <div className="ae-bar-label">Complete Business Profile / NAP Consistency (20-25%)</div>
                <div className="ae-bar-track">
                  <div className="ae-bar-fill" style={{ width: '79%' }}>
                    79%
                  </div>
                </div>
              </div>
              <div className="ae-bar-item">
                <div className="ae-bar-label">Trust and Authority Signals (10-15%)</div>
                <div className="ae-bar-track">
                  <div className="ae-bar-fill" style={{ width: '66%' }}>
                    66%
                  </div>
                </div>
              </div>
              <div className="ae-bar-item">
                <div className="ae-bar-label">Attribute Match to Query (10%)</div>
                <div className="ae-bar-track">
                  <div className="ae-bar-fill" style={{ width: '55%' }}>
                    55%
                  </div>
                </div>
              </div>
            </div>

            <p>
              The first signal, review sentiment and recency, is the most
              heavily weighted and the most misunderstood. ChatGPT Search does
              not just count your star rating. It reads the sentiment of recent
              reviews and weights more recent reviews more heavily. A business
              with 200 reviews from five years ago performs worse than a business
              with 80 reviews from the last six months, all else being equal.
             <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Secure your territory before a competitor does.</a></p>

            <p>
              The second signal, consensus across sources, is what makes the
              multi-platform approach essential. If Bing shows you, Foursquare
              shows you, and Yelp shows you with similar information, ChatGPT
              treats that as strong corroboration. If you appear on Bing but
              nowhere else, the single-source signal is weaker.
             <a href="https://theanswerengine.ai/blindspot" className="cta-inline">See your AI visibility score — free.</a></p>

            <div className="ae-callout-info not-prose">
              <strong>The Recency Signal Is Underweighted by Most Businesses</strong>
              <p>
                Many businesses accumulate reviews aggressively when they first
                open and then stop actively managing them. ChatGPT Search weights
                recency heavily. A competitor who added 20 reviews in the last
                60 days may outrank you even if you have more total reviews.
                Recent review velocity is a direct ChatGPT Search ranking factor.
               <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book your free consultation here.</a></p>
            </div>

            {/* SECTION 5: AUTHORITY */}
            <span className="ae-section-label" id="authority">
              Business Authority
            </span>
            <h2>How ChatGPT Evaluates Business Authority</h2>

            <p>
              Authority evaluation in ChatGPT Search is distinct from the trust
              signal weighting described above. Authority is about external
              recognition, while trust is about data consistency. Both matter,
              but they require different actions to build.
             Contact us at <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>

            <div className="ae-bar-group not-prose">
              <div className="ae-bar-group-title">
                ChatGPT Search Business Authority Signal Breakdown
              </div>
              <div className="ae-bar-item">
                <div className="ae-bar-label">Authoritative List Mentions (&quot;best of&quot; rankings)</div>
                <div className="ae-bar-track">
                  <div className="ae-bar-fill" style={{ width: '88%' }}>
                    41% weight
                  </div>
                </div>
              </div>
              <div className="ae-bar-item">
                <div className="ae-bar-label">Awards and Accreditations</div>
                <div className="ae-bar-track">
                  <div className="ae-bar-fill" style={{ width: '74%' }}>
                    18% weight
                  </div>
                </div>
              </div>
              <div className="ae-bar-item">
                <div className="ae-bar-label">Online Reviews (Yelp, BBB, industry-specific)</div>
                <div className="ae-bar-track">
                  <div className="ae-bar-fill" style={{ width: '68%' }}>
                    16% weight
                  </div>
                </div>
              </div>
              <div className="ae-bar-item">
                <div className="ae-bar-label">Website Authority (Schema Markup, FAQ Structure)</div>
                <div className="ae-bar-track">
                  <div className="ae-bar-fill" style={{ width: '62%' }}>
                    15% weight
                  </div>
                </div>
              </div>
              <div className="ae-bar-item">
                <div className="ae-bar-label">NAP Consistency</div>
                <div className="ae-bar-track">
                  <div className="ae-bar-fill" style={{ width: '42%' }}>
                    10% weight
                  </div>
                </div>
              </div>
            </div>

            <p>
              The dominant authority signal is &quot;best of&quot; list mentions. When
              a local publication lists &quot;10 Best Auto Detailers in Miami&quot; and
              your business is on it, ChatGPT Search picks up that mention and
              treats it as third-party authority validation. This is a documented
              mechanism: businesses that appear in industry roundup articles get
              cited significantly more often by ChatGPT Search than those that
              rely on their own content alone.
             Reach us at <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.</p>

            <div className="ae-quote not-prose">
              <blockquote>
                &quot;Getting into one &apos;best of&apos; list in your local market
                generates more ChatGPT Search authority than months of
                traditional link building. ChatGPT trusts editorial curation
                in a way that Google has trained away from.&quot;
              </blockquote>
              <cite>Justin Borges</cite>
            </div>

            <p>
              The commercial lending case study is instructive: after a financial
              services firm optimized across 8 directories, ensured Bing Places
              was complete and verified, and earned placement on two local
              business roundup lists, they saw 15% of inbound calls attributable
              to ChatGPT Search within 90 days. This was not from a large
              advertising spend. It was from getting the signal structure right.
             We work with one business per market. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Check if yours is still open.</a></p>

            {/* INLINE CTA 2 */}
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Check if AI search recommends your local business</a>

            {/* SECTION 6: BASE VS SEARCH */}
            <span className="ae-section-label" id="base-vs-search">
              Important Distinction
            </span>
            <h2>Base ChatGPT vs ChatGPT Search: A Critical Difference</h2>

            <p>
              Many business owners ask ChatGPT &quot;can you find me a good plumber
              in [city]&quot; and get a response that says it cannot browse the
              internet or does not have current local listings. This is base
              ChatGPT responding, not ChatGPT Search. The distinction matters
              enormously.
             <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Schedule a free call</a> to see where you stand.</p>

            <div className="ae-comparison-table not-prose">
              <table className="w-full text-sm">
                <thead>
                  <tr>
                    <th className="text-left p-3 text-gray-400 font-semibold border-b border-white/10">
                      Factor
                    </th>
                    <th className="text-left p-3 text-gray-400 font-semibold border-b border-white/10">
                      Base ChatGPT
                    </th>
                    <th className="text-left p-3 text-gray-400 font-semibold border-b border-white/10">
                      ChatGPT Search
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      factor: 'Data source',
                      base: 'Training data (frozen at cutoff)',
                      search: 'Live Bing + Foursquare + Yelp',
                    },
                    {
                      factor: 'Local accuracy',
                      base: 'Often outdated or hallucinated',
                      search: 'Real-time, generally accurate',
                    },
                    {
                      factor: 'Business hours',
                      base: 'Not available or unreliable',
                      search: 'Current, from live business profiles',
                    },
                    {
                      factor: 'Review data',
                      base: 'Not available',
                      search: 'Yelp + other reviewed platforms',
                    },
                    {
                      factor: 'How to trigger',
                      base: 'Default mode, no browsing enabled',
                      search: 'ChatGPT.com Search tab or browse mode',
                    },
                    {
                      factor: 'Optimizable for businesses',
                      base: 'Only through massive media coverage',
                      search: 'Yes, through Bing/Foursquare/Yelp profiles',
                    },
                  ].map((row) => (
                    <tr key={row.factor} className="border-b border-white/5">
                      <td className="p-3 font-medium text-white">{row.factor}</td>
                      <td className="p-3 text-gray-400">{row.base}</td>
                      <td className="p-3 text-[#F27D24]">{row.search}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p>
              As ChatGPT defaults increasingly to web browsing for queries where
              real-time data is needed, including local business searches, the
              distinction between base and search modes is fading. The majority
              of local business queries routed through ChatGPT now use the Search
              mechanism. For business visibility purposes, optimizing for
              ChatGPT Search is the correct target.
             Send your questions to <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>

            {/* SECTION 7: VS PERPLEXITY */}
            <span className="ae-section-label" id="vs-perplexity">
              Platform Comparison
            </span>
            <h2>ChatGPT Search vs Perplexity: Different Engines</h2>

            <p>
              ChatGPT Search and Perplexity are both AI search tools, but they
              work differently enough that a business optimized for one may not
              be well-positioned for the other. Understanding the differences
              helps prioritize where to build your signal profile first.
             Call <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> for a free consultation.</p>

            <div className="ae-pros-cons not-prose">
              <div className="ae-pros">
                <div className="ae-pros-title">ChatGPT Search Strengths</div>
                <ul>
                  <li>Larger user base (900M weekly vs ~100M for Perplexity)</li>
                  <li>Direct Yelp partnership for review integration (2026)</li>
                  <li>Strong Foursquare location data enrichment</li>
                  <li>Better for queries where structured business data wins</li>
                  <li>More predictable: 87% Bing alignment makes it optimizable</li>
                </ul>
              </div>
              <div className="ae-cons">
                <div className="ae-cons-title">Perplexity Strengths</div>
                <ul>
                  <li>Broader web crawl: more content sources beyond Bing</li>
                  <li>Stronger for content-rich, editorial-citation queries</li>
                  <li>Surfaces blog posts, articles, and long-form content more</li>
                  <li>More transparent sourcing (shows citations clearly)</li>
                  <li>Faster index updates for new content and businesses</li>
                </ul>
              </div>
            </div>

            <p>
              The practical implication: businesses should prioritize Bing
              Places, Foursquare, and Yelp for ChatGPT Search visibility. For
              Perplexity visibility, the focus shifts to web content quality,
              third-party mentions, and directory breadth. Our guide on{' '}
              <Link href="/blog/how-perplexity-decides-what-to-cite">
                how Perplexity decides what to cite
              </Link>{' '}
              covers the Perplexity mechanism in detail.
             <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Claim your market territory — one client per area.</a></p>

            {/* SECTION 8: WHAT DOESN'T WORK */}
            <span className="ae-section-label" id="what-doesnt-work">
              Common Misconceptions
            </span>
            <h2>What Does Not Work for ChatGPT Search Visibility</h2>

            <p>
              Several tactics that businesses commonly attempt either have no
              effect on ChatGPT Search visibility or actively create problems.
              Understanding what not to do saves significant time and money.
             <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Run your free AI Blind Spot Scan.</a></p>

            <div className="ae-callout-warning not-prose">
              <strong>Tactics That Do Not Move ChatGPT Search</strong>
              <ul className="mt-2 space-y-1 text-sm text-gray-300">
                <li>Google Ads spending (Google data is not accessible to ChatGPT)</li>
                <li>Paying for ChatGPT placement (no such product exists)</li>
                <li>Accumulating Google reviews only (Yelp is now the review platform that matters)</li>
                <li>Optimizing only for Google Business Profile (ChatGPT does not read it)</li>
                <li>Posting social media content hoping AI picks it up (it does not)</li>
                <li>Adding keywords to your website hoping ChatGPT &quot;ranks&quot; you (wrong model)</li>
              </ul>
            </div>

            <p>
              The fundamental misconception is treating ChatGPT Search like a
              slightly different version of Google. It is not. It has different
              data sources, different ranking signals, and different authority
              mechanisms. A strategy built for Google SEO will not transfer to
              ChatGPT Search without deliberate adaptation.
             <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a free 30-minute strategy call.</a></p>

            {/* INLINE CTA 3 */}
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Check if AI search recommends your local business</a>

            {/* SECTION 9: ACTION PLAN */}
            <span className="ae-section-label" id="action-plan">
              Action Plan
            </span>
            <h2>Your Action Plan for ChatGPT Search Visibility</h2>

            <p>
              Given what we know about how ChatGPT Search picks local businesses,
              the action plan is specific and sequenced. Start with the highest-
              leverage items and work down.
             <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a></p>

            {/* TIMELINE */}
            <div className="ae-timeline not-prose">
              <div className="ae-timeline-item">
                <div className="ae-timeline-marker">1</div>
                <div className="ae-timeline-content">
                  <div className="ae-timeline-title">Claim and Complete Bing Places for Business</div>
                  <div className="ae-timeline-desc">
                    This is the single highest-leverage action. Bing Places
                    drives 87% of ChatGPT local citations. A verified profile
                    with complete information, accurate hours, photos, and
                    service categories is the non-negotiable foundation. If
                    you have not done this, nothing else matters as much.
                  </div>
                </div>
              </div>
              <div className="ae-timeline-item">
                <div className="ae-timeline-marker">2</div>
                <div className="ae-timeline-content">
                  <div className="ae-timeline-title">Claim and Complete Foursquare</div>
                  <div className="ae-timeline-desc">
                    70% of ChatGPT local results pull Foursquare data.
                    Claim your Foursquare listing via Foursquare for Business,
                    add accurate hours, categories, photos, and ensure your
                    address matches Bing Places exactly.
                  </div>
                </div>
              </div>
              <div className="ae-timeline-item">
                <div className="ae-timeline-marker">3</div>
                <div className="ae-timeline-content">
                  <div className="ae-timeline-title">Build Yelp Presence (New Priority Post-2026)</div>
                  <div className="ae-timeline-desc">
                    The OpenAI-Yelp partnership makes Yelp visibility directly
                    tied to ChatGPT Search visibility in ways it was not
                    previously. Claim, complete, and actively manage your
                    Yelp profile. Recent Yelp reviews now surface in ChatGPT
                    responses for local queries.
                  </div>
                </div>
              </div>
              <div className="ae-timeline-item">
                <div className="ae-timeline-marker">4</div>
                <div className="ae-timeline-content">
                  <div className="ae-timeline-title">Get Into &quot;Best Of&quot; Lists</div>
                  <div className="ae-timeline-desc">
                    With 41% of ChatGPT authority weighting going to editorial
                    list mentions, getting into local &quot;best of&quot; roundups is
                    the highest-ROI authority building action. Submit to local
                    business publications, Expertise.com, and industry-specific
                    roundup sites. One solid mention outweighs months of
                    other optimization work for authority signals.
                  </div>
                </div>
              </div>
              <div className="ae-timeline-item">
                <div className="ae-timeline-marker">5</div>
                <div className="ae-timeline-content">
                  <div className="ae-timeline-title">Maintain Review Velocity</div>
                  <div className="ae-timeline-desc">
                    ChatGPT Search weights recent reviews heavily. Implement a
                    systematic review request process that generates consistent
                    new reviews across Yelp and other accessible platforms.
                    Review velocity, not just review count, is what keeps you
                    visible month over month.
                  </div>
                </div>
              </div>
            </div>

            {/* CHEAT SHEET */}
            <div className="ae-cheat-sheet not-prose">
              <div className="ae-cheat-sheet-title">
                ChatGPT Search Visibility Checklist
              </div>
              <div className="ae-cheat-sheet-grid">
                <div className="ae-cheat-section">
                  <div className="ae-cheat-section-title">Data Platforms</div>
                  <ul>
                    <li>Bing Places: verified, complete, recent photos</li>
                    <li>Foursquare: claimed, hours accurate, categories set</li>
                    <li>Yelp: active management, recent reviews present</li>
                    <li>NAP identical across all three platforms</li>
                  </ul>
                </div>
                <div className="ae-cheat-section">
                  <div className="ae-cheat-section-title">Authority Signals</div>
                  <ul>
                    <li>At least one local &quot;best of&quot; list mention</li>
                    <li>Industry accreditation listed publicly</li>
                    <li>BBB accreditation (if applicable to your industry)</li>
                    <li>Press mention or media quote from past 12 months</li>
                  </ul>
                </div>
                <div className="ae-cheat-section">
                  <div className="ae-cheat-section-title">Review Strategy</div>
                  <ul>
                    <li>Yelp reviews from the past 90 days present</li>
                    <li>Review request system generating at least 2/month</li>
                    <li>Review responses active and recent</li>
                  </ul>
                </div>
                <div className="ae-cheat-section">
                  <div className="ae-cheat-section-title">Website Signals</div>
                  <ul>
                    <li>GPTBot not blocked in robots.txt</li>
                    <li>LocalBusiness schema implemented</li>
                    <li>FAQ content on service pages</li>
                    <li>NAP in site footer matches all directories</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 3-TIER CTA BLOCK */}
            <div className="not-prose my-16 p-8 rounded-2xl bg-gradient-to-br from-[#F27D24]/10 to-transparent border border-[#F27D24]/20">
              <h3 className="font-plus-jakarta text-2xl font-bold text-white mb-3">
                Is Your Business Showing Up in ChatGPT Search?
              </h3>
              <p className="text-gray-400 mb-6">
                Find out exactly how your business appears across ChatGPT,
                Perplexity, and Google AI with a free Blind Spot Report from
                The Answer Engine.
              </p>
              <Link
                href="/blindspot"
                className="inline-flex items-center gap-2 bg-[#F27D24] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#D96416] transition-colors"
              >
                Get Your Free Blind Spot Report
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
              <div className="flex flex-wrap items-center gap-6 mt-6 pt-6 border-t border-[#F27D24]/10">
                <a
                  href="tel:+12134442229"
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  (213) 444-2229
                </a>
                <a
                  href="mailto:support@theanswerengine.ai"
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  support@theanswerengine.ai
                </a>
              </div>
            </div>

            {/* AUTHOR CARD */}
            <div className="ae-author-card">
              <img
                src="/justin-borges.webp"
                alt="Justin Borges, Founder of The Answer Engine"
                style={{ width: 64, height: 64, borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }}
              />
              <div>
                <div className="ae-author-name" style={{ fontWeight: 600 }}>Justin Borges</div>
                <div className="ae-author-role" style={{ fontWeight: 400 }}>Founder, The Answer Engine</div>
                <p style={{ marginTop: 8, fontSize: '0.875rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.6 }}>Justin Borges founded The Answer Engine in 2025 after 13+ years in real estate, $200M+ in production, and discovering that AI search rankings now decide who gets cited as the answer. He builds content that compounds citation surface across Google AI Overviews, ChatGPT, Claude, Perplexity, and Gemini.</p>
              </div>
            </div>

            {/* FAQ */}
            <span className="ae-section-label" id="faq">
              FAQ
            </span>
            <h2>Frequently Asked Questions</h2>

            <div className="space-y-8 not-prose">
              {[
                {
                  q: 'Does ChatGPT use Google data to recommend local businesses?',
                  a: 'No. ChatGPT Search queries Bing (not Google) for local business results. Approximately 87% of ChatGPT local business citations align with Bing top results. Google reviews and Google Maps data are walled off from ChatGPT. However, 70% of ChatGPT local results also pull from Foursquare data, and a new 2026 Yelp partnership means Yelp reviews now surface directly in ChatGPT Search responses.',
                },
                {
                  q: 'Can I pay to get my business recommended by ChatGPT Search?',
                  a: 'No. ChatGPT Search does not offer paid placement for local business recommendations. Results are determined algorithmically based on five ranking signals: review sentiment and recency, consensus across multiple sources, complete business profile information, trust and authority signals, and attribute match to the query. There is no advertising product that bypasses this algorithm.',
                },
                {
                  q: 'What is the difference between ChatGPT base knowledge and ChatGPT Search?',
                  a: 'ChatGPT base knowledge is frozen at its training cutoff date and relies on what was in the training data. For local business queries, this data is often outdated or absent. ChatGPT Search retrieves real-time information from Bing and other live sources. For local queries, ChatGPT Search responses are far more accurate and optimizable than base ChatGPT responses.',
                },
                {
                  q: 'Why is my business not showing up in ChatGPT Search results?',
                  a: 'The most common reasons are: not listed on Bing Places for Business, no presence on Foursquare, missing or incomplete Yelp profile, and low review volume or review recency. Because 87% of ChatGPT citations track Bing, improving your Bing Places profile is the highest-leverage first action for most businesses.',
                },
                {
                  q: 'How does ChatGPT Search evaluate business authority?',
                  a: 'ChatGPT Search weights business authority according to: authoritative list mentions such as "best of" rankings (41% weight), awards and accreditations (18%), online reviews across verified platforms (16%), website authority including schema markup and FAQ structure (15%), and NAP consistency across sources (10%). Getting mentioned in industry publications or local best-of lists is the highest-leverage action for building ChatGPT Search authority.',
                },
                {
                  q: 'Is ChatGPT Search different from Perplexity for local business results?',
                  a: 'Yes, meaningfully so. ChatGPT Search relies primarily on Bing and Foursquare, with Yelp added in 2026. Perplexity crawls the web more broadly and weights its own indexed content more directly. A business visible on Bing, Foursquare, and Yelp will perform better on ChatGPT Search. A business with strong web content and third-party mentions will perform better on Perplexity.',
                },
              ].map((item) => (
                <div
                  key={item.q}
                  className="border border-white/10 rounded-xl p-6 bg-white/[0.02]"
                >
                  <h3 className="font-plus-jakarta font-semibold text-white mb-3">
                    {item.q}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>

            {/* RELATED ARTICLES */}
            <div className="not-prose mt-16 pt-10 border-t border-white/10">
              <h3 className="font-plus-jakarta text-xl font-bold text-white mb-6">
                Related Guides
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Link
                  href="/blog/how-perplexity-decides-what-to-cite"
                  className="group p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#F27D24]/30 transition-colors"
                >
                  <div className="text-xs text-[#F27D24] font-semibold uppercase tracking-wide mb-2">
                    Platform Deep Dive
                  </div>
                  <div className="text-sm font-medium text-white group-hover:text-[#F27D24] transition-colors leading-snug">
                    How Perplexity Decides What Sources to Cite
                  </div>
                </Link>
                <Link
                  href="/blog/how-claude-ai-evaluates-business-authority"
                  className="group p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#F27D24]/30 transition-colors"
                >
                  <div className="text-xs text-[#F27D24] font-semibold uppercase tracking-wide mb-2">
                    Platform Deep Dive
                  </div>
                  <div className="text-sm font-medium text-white group-hover:text-[#F27D24] transition-colors leading-snug">
                    How Claude AI Evaluates Business Authority
                  </div>
                </Link>
                <Link
                  href="/blog/your-website-vs-directories-what-ai-trusts"
                  className="group p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#F27D24]/30 transition-colors"
                >
                  <div className="text-xs text-[#F27D24] font-semibold uppercase tracking-wide mb-2">
                    Comparison
                  </div>
                  <div className="text-sm font-medium text-white group-hover:text-[#F27D24] transition-colors leading-snug">
                    Your Website vs Directories: What AI Trusts
                  </div>
                </Link>
              </div>
            </div>

            {/* FINAL CTA */}
          <section className="ae-final-cta not-prose">
            <div className="ae-final-cta-inner">
              <h2 className="text-2xl sm:text-3xl font-black mb-4 text-white font-headline uppercase tracking-tighter">
                Local Search Just Split in Two — Are You Winning Both Halves?
              </h2>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                Google Maps is one game. AI search is a completely different game. You need to win both. The Answer Engine positions local businesses to appear in AI recommendations — not just Google results. Free audit. One business per market.
              </p>
              <a
                href="https://theanswerengine.ai/blindspot"
                className="inline-flex items-center justify-center gap-2 bg-[#F27D24] text-black font-black px-10 py-4 tracking-tighter hover:translate-y-[2px] transition-transform font-headline uppercase"
              >
                Run Free Local AI Audit →
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-gray-500">
                <a href="tel:+12134442229" className="hover:text-orange-400 transition-colors">(213) 444-2229</a>
                <a href="https://calendly.com/theanswerengine-support/30min" className="hover:text-orange-400 transition-colors">Book Free Call</a>
                <a href="mailto:support@theanswerengine.ai" className="hover:text-orange-400 transition-colors">support@theanswerengine.ai</a>
              </div>
            </div>
          </section>

          </div>
        </article>
      </main>
    </>
  )
}
