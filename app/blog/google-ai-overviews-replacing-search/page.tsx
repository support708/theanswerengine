import type { Metadata } from 'next'
import Link from 'next/link'

export const revalidate = 86400
export const dynamic = 'force-static'
export const dynamicParams = true

export const metadata: Metadata = {
  title: 'Google AI Overviews Are Replacing Traditional Search (What to Do) | The Answer Engine',
  description: 'AI Overviews now appear on ~30% of queries and rising. The 4 content changes that put you inside the Overview instead of below it.',
  keywords: [
    'AEO',
    'AI Overviews',
    'Google Search',
    'Generative Engine Optimization',
    'SEO Strategy',
    'AI Citations',
    'Search Visibility',
    'Zero-Click Searches',
    'Digital Marketing',
    'Content Strategy',
  ],
  authors: [{ name: 'Justin Borges', url: 'https://theanswerengine.ai/about' }],
  openGraph: {
    title: 'Google AI Overviews Replacing Search: What You Need to Know',
    description: 'Google AI Overviews now appear in 60% of searches, fundamentally changing how users discover information. Learn why they\'re replacing traditional results and how to adapt.',
    url: 'https://theanswerengine.ai/blog/google-ai-overviews-replacing-search',
    siteName: 'The Answer Engine',
    type: 'article',
    publishedTime: '2026-03-08T00:00:00Z',
    authors: ['https://theanswerengine.ai/about'],
    tags: [
      'AEO',
      'AI Overviews',
      'Google Search',
      'Generative Engine Optimization',
      'SEO Strategy',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Google AI Overviews Replacing Search: What You Need to Know',
    description: 'Google AI Overviews now appear in 60% of searches, fundamentally changing how users discover information. Learn why they\'re replacing traditional results and how to adapt.',
    site: '@theanswerengine',
  },
  alternates: {
    canonical: 'https://theanswerengine.ai/blog/google-ai-overviews-replacing-search',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      '@id': 'https://theanswerengine.ai/blog/google-ai-overviews-replacing-search#article',
      headline: 'Google AI Overviews Replacing Search: What You Need to Know',
      description:
        "Google AI Overviews now appear in 60% of searches, fundamentally changing how users discover information. Learn why they're replacing traditional results and how to adapt.",
      datePublished: '2026-03-08T00:00:00Z',
      dateModified: '2026-03-08T00:00:00Z',
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
        name: 'The Answer Engine',
        url: 'https://theanswerengine.ai',
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://theanswerengine.ai/blog/google-ai-overviews-replacing-search',
      },
      keywords:
        'AEO, AI Overviews, Google Search, Generative Engine Optimization, SEO Strategy, AI Citations, Search Visibility, Zero-Click Searches',
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://theanswerengine.ai/blog/google-ai-overviews-replacing-search#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Are Google AI Overviews actually replacing organic search results?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'AI Overviews do not replace organic results, but they change how information is presented. Organic listings still matter, but they now compete with AI summaries for visibility and attention.',
          },
        },
        {
          '@type': 'Question',
          name: "What's the real impact of AI Overviews on website traffic and click-through rates?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The presence of an AI Overview correlates with a 58% lower average clickthrough rate for the top-ranking page. A Pew Research Center study tracking 68,000 real searches found that users clicked on results 8% of the time when AI summaries appeared, compared to 15% without them, a 46.7% relative reduction.',
          },
        },
        {
          '@type': 'Question',
          name: 'How often do AI Overviews appear in search results?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'According to Advanced Web Ranking data, Google AI Overviews now appear in 60.32% of U.S. queries. Google intentionally does not show them in 100% of queries, stating it triggers only when genuinely helpful.',
          },
        },
        {
          '@type': 'Question',
          name: 'What does it mean if my content is cited in an AI Overview?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Brands cited in AI Overviews earned 35% more organic and 91% more paid clicks than those not cited. Being featured as an AI Overview source appears to boost CTR incrementally, and inclusion enhances overall visibility which leads to higher click-through rates.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why did Google introduce AI Overviews instead of keeping traditional search?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "The introduction of AI Overviews was seen as a strategic move to compete with other generative AI advancements, including OpenAI's ChatGPT. Search is continuing to evolve into an AI-first discovery, interpretation, and decision system.",
          },
        },
        {
          '@type': 'Question',
          name: 'Do I need special optimization to appear in AI Overviews?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'There are no additional requirements to appear in AI Overviews or AI Mode, nor other special optimizations necessary. The foundational SEO best practices like creating helpful, reliable, people-first content remain key.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which industries are most affected by AI Overviews?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Science is the most impacted industry with AI Overviews at 25.96% keyword saturation. Computers and Electronics follows at 17.92%, People and Society at 17.29%. Food and Drink has seen the fastest growth in AI Overviews since March.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is traditional SEO still important if AI Overviews are taking over?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Traditional SEO is still important. Technical SEO, on-page optimization, and authority building remain essential, and they now support both rankings and AI-driven visibility.',
          },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://theanswerengine.ai/blog/google-ai-overviews-replacing-search#breadcrumb',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://theanswerengine.ai',
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
          name: 'Google AI Overviews Replacing Search: What You Need to Know',
          item: 'https://theanswerengine.ai/blog/google-ai-overviews-replacing-search',
        },
      ],
    },
  ],
}

function Breadcrumb() {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-400">
        <li>
          <Link href="/" className="hover:text-orange-400 transition-colors">
            Home
          </Link>
        </li>
        <li className="text-gray-600">/</li>
        <li>
          <Link href="/blog" className="hover:text-orange-400 transition-colors">
            Blog
          </Link>
        </li>
        <li className="text-gray-600">/</li>
        <li className="text-gray-300 truncate max-w-xs sm:max-w-none">
          Google AI Overviews Replacing Search
        </li>
      </ol>
    </nav>
  )
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main
        className="min-h-screen"
        style={{ backgroundColor: '#0F1117', color: 'white' }}
      >
        <div className="max-w-4xl mx-auto px-6 py-20">
          <Breadcrumb />

          {/* Hero Section */}
          <div
            className="relative overflow-hidden rounded-2xl mb-12"
            style={{
              background:
                'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
            }}
          >
            <svg
              className="absolute inset-0 w-full h-full opacity-10"
              viewBox="0 0 800 400"
              fill="none"
              aria-hidden="true"
            >
              <circle cx="600" cy="100" r="200" stroke="#F27D24" strokeWidth="0.5" />
              <circle cx="600" cy="100" r="140" stroke="#F27D24" strokeWidth="0.5" />
              <circle cx="600" cy="100" r="80" stroke="#F27D24" strokeWidth="0.5" />
              <line x1="0" y1="100" x2="800" y2="100" stroke="#F27D24" strokeWidth="0.3" />
              <line x1="0" y1="200" x2="800" y2="200" stroke="#F27D24" strokeWidth="0.3" />
              <line x1="0" y1="300" x2="800" y2="300" stroke="#F27D24" strokeWidth="0.3" />
              <line x1="100" y1="0" x2="100" y2="400" stroke="#F27D24" strokeWidth="0.3" />
              <line x1="400" y1="0" x2="400" y2="400" stroke="#F27D24" strokeWidth="0.3" />
              <polygon
                points="50,350 150,200 250,350"
                stroke="#F27D24"
                strokeWidth="0.5"
                fill="none"
              />
              <polygon
                points="200,380 320,220 440,380"
                stroke="#F27D24"
                strokeWidth="0.4"
                fill="none"
              />
            </svg>
            <div className="relative px-8 py-16 sm:px-12 sm:py-20">
              <p className="text-sm font-medium text-orange-400 mb-4">AEO Education</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 font-plus-jakarta">
                Google AI Overviews Replacing Search: What You Need to Know
              </h1>
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span>March 8, 2026</span>
                <span>-</span>
                <span>8 min read</span>
                <span>-</span>
                <span>Justin Borges</span>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="not-prose ae-stats-grid">
            <div className="ae-stat-card">
              <div className="ae-stat-emoji">&#x1F50D;</div>
              <div className="ae-stat-value ae-accent">60.32%</div>
              <div className="ae-stat-label">U.S. Queries Showing AI Overviews</div>
            </div>
            <div className="ae-stat-card">
              <div className="ae-stat-emoji">&#x1F4C9;</div>
              <div className="ae-stat-value ae-accent">58%</div>
              <div className="ae-stat-label">Lower CTR When AI Overview Appears</div>
            </div>
            <div className="ae-stat-card">
              <div className="ae-stat-emoji">&#x1F680;</div>
              <div className="ae-stat-value ae-accent">1.5B</div>
              <div className="ae-stat-label">Monthly Users Seeing AI Overviews</div>
            </div>
            <div className="ae-stat-card">
              <div className="ae-stat-emoji">&#x1F4C8;</div>
              <div className="ae-stat-value ae-accent">+35%</div>
              <div className="ae-stat-label">More Organic Clicks When Cited in AIO</div>
            </div>
          </div>

          {/* Article Body */}
          <article className="prose prose-invert prose-lg max-w-none prose-headings:font-plus-jakarta prose-headings:text-white prose-p:text-gray-300 prose-a:text-[#F27D24] prose-a:no-underline hover:prose-a:underline prose-strong:text-white">

            {/* Intro */}
            <p className="text-xl text-gray-300 leading-relaxed mb-10">
              If you run a local service business and you have noticed your website traffic quietly
              slipping despite ranking well on Google, you are not imagining things. Something
              fundamental has shifted. Google AI Overviews now appear in{' '}
              <strong className="text-white">60.32% of U.S. queries</strong>, and they are
              changing not just what people see when they search, but whether they click on
              anything at all.
            </p>

            <div className="not-prose ae-callout ae-callout-warning">
              <div className="ae-callout-title">The Search Landscape Has Changed</div>
              <p>
                AI Overviews went from 6.49% of searches in January 2025 to over 60% today.
                If you are still relying on traditional blue-link rankings for leads, the
                ground has already shifted underneath you. This is not a future prediction.
                It is happening right now.
              </p>
            </div>

            <div className="not-prose ae-cta-inline">
              <p>Want to know if AI Overviews are already affecting your traffic?</p>
              <Link href="/blindspot">Get Your Free Blind Spot Report</Link>
            </div>

            {/* Section 1 */}
            <span className="not-prose ae-section-label">The Basics</span>
            <h2 className="text-2xl font-bold text-white mt-4 mb-4 font-plus-jakarta">
              What Google AI Overviews Are and How They Work
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Google AI Overviews are AI-generated summaries that appear at the very top of
              search results, above all organic listings. When you type a question into Google,
              instead of seeing a list of blue links first, you now often see a paragraph or two
              of text that Google&apos;s AI has composed by pulling from multiple sources across the
              web.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              These summaries cite their sources. On average, an AI Overview references{' '}
              <strong className="text-white">13.34 sources per response</strong>, with some
              responses pulling from as many as 95 different links. That means Google is reading
              your content and potentially summarizing it without requiring the user to ever visit
              your site.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              The AI model behind these overviews is trained to recognize the most reliable,
              clearly written, and authoritative content on any given topic. It then synthesizes
              that content into a direct answer and presents it to the user at the top of the
              page.
            </p>

            {/* Bar Chart: AI Overview Source Depth */}
            <div className="not-prose ae-bar-group">
              <div className="ae-bar-item">
                <div className="ae-bar-label">Avg. Sources Per AI Overview</div>
                <div className="ae-bar-track">
                  <div className="ae-bar-fill" style={{ width: '14%' }}></div>
                </div>
                <div className="ae-bar-value">13.34</div>
              </div>
              <div className="ae-bar-item">
                <div className="ae-bar-label">Max Sources Observed (Single Response)</div>
                <div className="ae-bar-track">
                  <div className="ae-bar-fill" style={{ width: '95%' }}></div>
                </div>
                <div className="ae-bar-value">95</div>
              </div>
            </div>

            <div className="not-prose ae-callout ae-callout-info">
              <div className="ae-callout-title">What This Means for Your Business</div>
              <p>
                Google is not just linking to your content anymore. It is reading it, summarizing it,
                and delivering the answer directly to the user. If your content is the source, you
                get a citation. If it is not, you get nothing. The click never happens.
              </p>
            </div>

            <div className="not-prose ae-cta-inline">
              <p>Is Google citing your business in AI Overviews? Or ignoring it?</p>
              <a href="tel:+12134442229">Call (213) 444-2229 to Find Out</a>
            </div>

            {/* Section 2 */}
            <span className="not-prose ae-section-label">The Growth Curve</span>
            <h2 className="text-2xl font-bold text-white mt-4 mb-4 font-plus-jakarta">
              The Growth of AI Overviews: From Experiment to Mainstream
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              The rollout of AI Overviews has been rapid. In January 2025, they appeared in just
              6.49% of searches. By October 2025, that number had surged past 50%. Today, they
              appear in more than 60% of all U.S. queries, reaching{' '}
              <strong className="text-white">1.5 billion monthly users</strong> globally.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Google has been clear that it does not intend to show AI Overviews on every single
              search. The feature is designed to trigger when AI-generated context is genuinely
              helpful, particularly for informational, research, and comparison queries. But 60%
              is already a majority of searches, and that number continues to climb.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              One signal of how seriously Google is treating this feature: ads appearing alongside
              AI Overviews grew from about 3% of AI Overview appearances in January 2025 to
              roughly 40% by November 2025. Google is not just testing this format. It is
              monetizing it at scale.
            </p>

            {/* Timeline: AI Overview Growth */}
            <div className="not-prose ae-timeline">
              <div className="ae-timeline-item">
                <div className="ae-timeline-step">Jan 2025</div>
                <div className="ae-timeline-title">Early Rollout</div>
                <div className="ae-timeline-desc">AI Overviews appear in just 6.49% of U.S. searches. Most businesses do not notice any impact.</div>
              </div>
              <div className="ae-timeline-item">
                <div className="ae-timeline-step">May 2025</div>
                <div className="ae-timeline-title">Public Launch</div>
                <div className="ae-timeline-desc">Google officially launches AI Overviews to all U.S. users. Adoption begins to accelerate rapidly.</div>
              </div>
              <div className="ae-timeline-item">
                <div className="ae-timeline-step">Oct 2025</div>
                <div className="ae-timeline-title">Majority Threshold</div>
                <div className="ae-timeline-desc">AI Overviews surpass 50% of U.S. queries. Businesses report measurable traffic declines.</div>
              </div>
              <div className="ae-timeline-item">
                <div className="ae-timeline-step">Mar 2026</div>
                <div className="ae-timeline-title">Dominant Format</div>
                <div className="ae-timeline-desc">60.32% of U.S. queries show AI Overviews. 1.5 billion monthly users globally. Ads in 40% of AI Overviews.</div>
              </div>
            </div>

            {/* Bar Chart: Growth Over Time */}
            <div className="not-prose ae-bar-group">
              <div className="ae-bar-item">
                <div className="ae-bar-label">Jan 2025</div>
                <div className="ae-bar-track">
                  <div className="ae-bar-fill" style={{ width: '6.5%' }}></div>
                </div>
                <div className="ae-bar-value">6.49%</div>
              </div>
              <div className="ae-bar-item">
                <div className="ae-bar-label">Oct 2025</div>
                <div className="ae-bar-track">
                  <div className="ae-bar-fill" style={{ width: '50%' }}></div>
                </div>
                <div className="ae-bar-value">~50%</div>
              </div>
              <div className="ae-bar-item">
                <div className="ae-bar-label">Mar 2026</div>
                <div className="ae-bar-track">
                  <div className="ae-bar-fill" style={{ width: '60%' }}></div>
                </div>
                <div className="ae-bar-value">60.32%</div>
              </div>
              <div className="ae-bar-item">
                <div className="ae-bar-label">Ads Alongside AI Overviews (Nov 2025)</div>
                <div className="ae-bar-track">
                  <div className="ae-bar-fill" style={{ width: '40%' }}></div>
                </div>
                <div className="ae-bar-value">~40%</div>
              </div>
            </div>

            <div className="not-prose ae-cta-inline">
              <p>60% of searches now show AI answers. Is your business part of those answers?</p>
              <Link href="/blindspot">Check Your AI Visibility Free</Link>
            </div>

            {/* Section 3 */}
            <span className="not-prose ae-section-label">Behavior Shift</span>
            <h2 className="text-2xl font-bold text-white mt-4 mb-4 font-plus-jakarta">
              How AI Overviews Are Changing Search Behavior
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              The way people interact with search results has changed significantly. When a user
              gets a well-written AI summary at the top of the page, many of them simply read it
              and move on. They get their answer. They do not need to click anything.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Zero-click searches tell this story clearly. Without an AI Overview, roughly 34% of
              searches result in no click at all. With an AI Overview present, that rises to 43%.
              In Google&apos;s dedicated &quot;AI Mode,&quot; which delivers an even more comprehensive AI
              response, zero-click rates jump to 93%.
            </p>

            {/* Bar Chart: Zero-Click Rates */}
            <div className="not-prose ae-bar-group">
              <div className="ae-bar-item">
                <div className="ae-bar-label">Zero-Click Without AI Overview</div>
                <div className="ae-bar-track">
                  <div className="ae-bar-fill" style={{ width: '34%' }}></div>
                </div>
                <div className="ae-bar-value">34%</div>
              </div>
              <div className="ae-bar-item">
                <div className="ae-bar-label">Zero-Click With AI Overview</div>
                <div className="ae-bar-track">
                  <div className="ae-bar-fill" style={{ width: '43%' }}></div>
                </div>
                <div className="ae-bar-value">43%</div>
              </div>
              <div className="ae-bar-item">
                <div className="ae-bar-label">Zero-Click in AI Mode</div>
                <div className="ae-bar-track">
                  <div className="ae-bar-fill" style={{ width: '93%' }}></div>
                </div>
                <div className="ae-bar-value">93%</div>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed mb-4">
              For local service businesses, this is a meaningful shift. Someone searching &quot;best
              plumber near me&quot; or &quot;how much does a roof repair cost&quot; may now receive a detailed
              AI summary and never scroll down to the business listings at all.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              When AI Overviews and Featured Snippets appear together on the same page, they
              collectively occupy{' '}
              <strong className="text-white">67.1% of the desktop screen</strong> and an even
              larger 75.7% on mobile. The traditional organic results are being pushed further
              and further out of the user&apos;s immediate view.
            </p>

            <div className="not-prose ae-callout ae-callout-warning">
              <div className="ae-callout-title">Your Rankings Look Fine. Your Traffic Does Not.</div>
              <p>
                This is the most dangerous part of the shift. Your SEO dashboard shows you ranking #1.
                But AI Overviews are answering the question before anyone scrolls down to your link.
                You can rank first and still get zero clicks.
              </p>
            </div>

            <div className="not-prose ae-quote">
              <p>In AI Mode, 93% of searches end without a single click. Your business is invisible if it is not part of the answer itself.</p>
            </div>

            <div className="not-prose ae-cta-inline">
              <p>Rankings look great but calls are dropping? This is probably why.</p>
              <Link href="/blindspot">Run a Free Visibility Audit</Link>
            </div>

            {/* Section 4 */}
            <span className="not-prose ae-section-label">The Data</span>
            <h2 className="text-2xl font-bold text-white mt-4 mb-4 font-plus-jakarta">
              The Traffic Impact: What the Data Shows
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              The traffic numbers are hard to ignore. The presence of an AI Overview correlates
              with a{' '}
              <strong className="text-white">58% lower average clickthrough rate</strong> for the
              page that ranks at the top of organic results. That is not a small dip. That is more
              than half of the traffic you might have expected from a number-one ranking, gone.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              A Pew Research Center study that tracked 68,000 real searches added more detail.
              When AI summaries appeared, users clicked on a result only 8% of the time. Without
              AI summaries, the click rate was 15%. That is a 46.7% relative reduction in clicks
              just from the presence of an AI Overview.
            </p>

            {/* Comparison: With vs Without AI Overview */}
            <div className="not-prose ae-pros-cons">
              <div className="ae-pros-box">
                <div className="ae-pros-title">When Your Business IS Cited in AIO</div>
                <ul>
                  <li>35% more organic clicks than uncited competitors</li>
                  <li>91% more paid clicks when also running ads</li>
                  <li>Increased brand trust from AI endorsement</li>
                  <li>Higher overall visibility across all channels</li>
                  <li>Compounding advantage over time</li>
                </ul>
              </div>
              <div className="ae-cons-box">
                <div className="ae-cons-title">When Your Business Is NOT Cited</div>
                <ul>
                  <li>58% lower CTR even if you rank #1</li>
                  <li>46.7% fewer total clicks on your listing</li>
                  <li>Competitors absorb your lost traffic</li>
                  <li>Invisible on 60%+ of searches</li>
                  <li>Declining leads with no obvious cause</li>
                </ul>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed mb-4">
              But here is the flip side: brands that are actually cited as sources inside an AI
              Overview see the opposite effect. Those brands earned{' '}
              <strong className="text-white">35% more organic clicks</strong> and{' '}
              <strong className="text-white">91% more paid clicks</strong> than businesses that
              were not cited. Being in the answer is now more valuable than ranking below it.
            </p>

            <div className="not-prose ae-takeaway">
              <div className="ae-takeaway-title">Key Takeaway</div>
              <p>
                The new dividing line is not who ranks highest. It is who gets cited by AI.
                Businesses cited in AI Overviews earn dramatically more clicks. Those left
                out lose more than half their expected traffic. The gap will only widen.
              </p>
            </div>

            <div className="not-prose ae-cta-inline">
              <p>Are you on the winning side or the losing side of this divide?</p>
              <Link href="/blindspot">Find Out in 60 Seconds</Link>
            </div>

            <div className="not-prose ae-cta-inline">
              <p>Have questions about your traffic trends? We can walk you through the data.</p>
              <a href="mailto:support@theanswerengine.ai">support@theanswerengine.ai</a>
            </div>

            {/* Section 5 */}
            <span className="not-prose ae-section-label">The Why</span>
            <h2 className="text-2xl font-bold text-white mt-4 mb-4 font-plus-jakarta">
              Why Google Is Replacing Traditional Results with AI Summaries
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Google did not make this change for fun. The shift to AI Overviews was, in large
              part, a competitive response. When OpenAI launched ChatGPT and people started using
              it to get direct answers instead of searching Google, Google faced the most serious
              challenge to its core business in decades.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              The strategic logic was straightforward: if users are going to start getting answers
              from AI tools, Google needed to become the AI tool that delivers those answers. AI
              Overviews are Google&apos;s way of keeping users inside its ecosystem rather than sending
              them to a competitor.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              The longer-term vision is also clear. Google has described search as evolving into
              an &quot;AI-first discovery, interpretation, and decision system.&quot; Traditional blue-link
              results are not disappearing overnight, but they are increasingly the secondary
              layer of a search experience that starts with AI.
            </p>

            {/* Comparison Table: Old Search vs AI Search */}
            <div className="not-prose">
              <table className="ae-comparison-table">
                <thead>
                  <tr>
                    <th>Factor</th>
                    <th>Traditional Google Search</th>
                    <th>AI-Powered Search</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Result Format</td>
                    <td>10 blue links</td>
                    <td>AI-generated summary + cited sources</td>
                  </tr>
                  <tr>
                    <td>User Behavior</td>
                    <td>Scan, click, read on website</td>
                    <td>Read AI answer, may never click</td>
                  </tr>
                  <tr>
                    <td>What Wins</td>
                    <td>Backlinks, keyword density, domain authority</td>
                    <td>Clarity, direct answers, structured data</td>
                  </tr>
                  <tr>
                    <td>Click-Through Rate</td>
                    <td>15% average for top result</td>
                    <td>8% when AI Overview present</td>
                  </tr>
                  <tr>
                    <td>Monetization</td>
                    <td>Ads beside results</td>
                    <td>Ads inside AI Overviews (40% already)</td>
                  </tr>
                  <tr>
                    <td>Sources Per Query</td>
                    <td>10 links shown</td>
                    <td>13.34 sources averaged, 1-2 prominently cited</td>
                  </tr>
                  <tr>
                    <td>Screen Real Estate</td>
                    <td>Shared across all results</td>
                    <td>67.1% desktop / 75.7% mobile for AI answer</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="not-prose ae-cta-inline">
              <p>Still optimizing for the old search playbook? That playbook is expiring.</p>
              <Link href="/blindspot">See What AI Actually Sees About Your Business</Link>
            </div>

            {/* Section 6 */}
            <span className="not-prose ae-section-label">Industry Impact</span>
            <h2 className="text-2xl font-bold text-white mt-4 mb-4 font-plus-jakarta">
              Which Industries Are Most Affected by AI Overviews
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Not all industries are seeing the same level of impact. Some niches are far more
              saturated with AI Overviews than others, which means the competitive stakes vary
              depending on what kind of business you run.
            </p>

            {/* Industry Saturation Bar Chart */}
            <div className="not-prose ae-bar-group">
              <div className="ae-bar-item">
                <div className="ae-bar-label">Science</div>
                <div className="ae-bar-track">
                  <div className="ae-bar-fill" style={{ width: '26%' }}></div>
                </div>
                <div className="ae-bar-value">25.96%</div>
              </div>
              <div className="ae-bar-item">
                <div className="ae-bar-label">Computers &amp; Electronics</div>
                <div className="ae-bar-track">
                  <div className="ae-bar-fill" style={{ width: '18%' }}></div>
                </div>
                <div className="ae-bar-value">17.92%</div>
              </div>
              <div className="ae-bar-item">
                <div className="ae-bar-label">People &amp; Society</div>
                <div className="ae-bar-track">
                  <div className="ae-bar-fill" style={{ width: '17%' }}></div>
                </div>
                <div className="ae-bar-value">17.29%</div>
              </div>
              <div className="ae-bar-item">
                <div className="ae-bar-label">Food &amp; Drink (Fastest Growth)</div>
                <div className="ae-bar-track">
                  <div className="ae-bar-fill" style={{ width: '14%' }}></div>
                </div>
                <div className="ae-bar-value">Rising Fast</div>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed mb-4">
              For local service businesses, the Food and Drink category has seen the fastest
              growth in AI Overview appearances since March. If you are in restaurants, catering,
              food service, or related trades, this is a category to watch closely. Home services,
              legal, and health-adjacent businesses are also seeing increasing AI Overview
              presence on informational and how-to queries related to their industries.
            </p>

            <div className="not-prose ae-callout ae-callout-info">
              <div className="ae-callout-title">No Industry Is Safe</div>
              <p>
                Even if your industry is not at the top of the saturation list today, AI Overviews
                are expanding every month. From January to March 2026 alone, overall coverage jumped
                from ~50% to 60%. The question is not if your industry will be affected. It is when.
              </p>
            </div>

            <div className="not-prose ae-cta-inline">
              <p>What is the AI Overview saturation in your specific industry? We can tell you.</p>
              <a href="tel:+12134442229">Call (213) 444-2229</a>
            </div>

            {/* Section 7 */}
            <span className="not-prose ae-section-label">The New SEO</span>
            <h2 className="text-2xl font-bold text-white mt-4 mb-4 font-plus-jakarta">
              Generative Engine Optimization: The New SEO Landscape
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              The phrase &quot;Generative Engine Optimization&quot; (GEO) is now being used alongside
              traditional SEO to describe the practice of optimizing content to be selected and
              cited by AI systems. It is not a replacement for SEO. It is an extension of it.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Traditional SEO, technical optimization, on-page content quality, and authority
              building are still foundational. They remain essential for both traditional rankings
              and AI-driven visibility. What changes is how you think about the goal.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              In traditional SEO, the goal was to rank high enough that users would click your
              link. In GEO, the goal is to have your content be the source that the AI model
              trusts enough to cite. This requires a different emphasis: clarity over cleverness,
              direct answers over vague introductions, structured information over walls of text.
            </p>

            {/* SEO vs GEO Decision Matrix */}
            <div className="not-prose ae-decision-matrix">
              <div className="ae-decision-matrix-title">SEO vs. GEO: When to Shift Your Strategy</div>
              <div className="ae-decision-row">
                <div className="ae-decision-if">Your content ranks well but AI never cites it</div>
                <div className="ae-decision-arrow">then</div>
                <div className="ae-decision-then">Your content answers questions indirectly. Restructure with direct, concise answers and FAQ format.</div>
              </div>
              <div className="ae-decision-row">
                <div className="ae-decision-if">Your traffic is declining despite stable rankings</div>
                <div className="ae-decision-arrow">then</div>
                <div className="ae-decision-then">AI Overviews are absorbing your clicks. Optimize for citation, not just ranking.</div>
              </div>
              <div className="ae-decision-row">
                <div className="ae-decision-if">Your competitors appear in AI answers and you do not</div>
                <div className="ae-decision-arrow">then</div>
                <div className="ae-decision-then">They are building authority signals you are missing. Audit entity presence and structured data.</div>
              </div>
              <div className="ae-decision-row">
                <div className="ae-decision-if">You rely on long-form content that buries the answer</div>
                <div className="ae-decision-arrow">then</div>
                <div className="ae-decision-then">AI skips your page entirely. Lead with the answer, then provide depth.</div>
              </div>
              <div className="ae-decision-row">
                <div className="ae-decision-if">Your website has no structured data or FAQ schema</div>
                <div className="ae-decision-arrow">then</div>
                <div className="ae-decision-then">AI cannot easily parse your content. Add schema markup as a baseline requirement.</div>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed mb-4">
              The sources currently dominating AI citations also tell an important story.
              Wikipedia, YouTube, Google&apos;s own properties, Reddit, and Amazon together account for
              38% of all AI citations. These are platforms with deep trust signals, high domain
              authority, and content that directly answers specific questions. Independent
              businesses need to aim for those same qualities within their own content.
            </p>

            {/* Top Citation Sources Bar */}
            <div className="not-prose ae-bar-group">
              <div className="ae-bar-item">
                <div className="ae-bar-label">Wikipedia + YouTube + Google Properties</div>
                <div className="ae-bar-track">
                  <div className="ae-bar-fill" style={{ width: '25%' }}></div>
                </div>
                <div className="ae-bar-value">~25%</div>
              </div>
              <div className="ae-bar-item">
                <div className="ae-bar-label">Reddit + Amazon</div>
                <div className="ae-bar-track">
                  <div className="ae-bar-fill" style={{ width: '13%' }}></div>
                </div>
                <div className="ae-bar-value">~13%</div>
              </div>
              <div className="ae-bar-item">
                <div className="ae-bar-label">All Other Sources Combined</div>
                <div className="ae-bar-track">
                  <div className="ae-bar-fill" style={{ width: '62%' }}></div>
                </div>
                <div className="ae-bar-value">62%</div>
              </div>
            </div>

            <div className="not-prose ae-cta-inline">
              <p>Does your content meet the same standard as Wikipedia and Reddit? Let us check.</p>
              <Link href="/blindspot">Get Your Free Blind Spot Report</Link>
            </div>

            {/* Section 8 */}
            <span className="not-prose ae-section-label">The Playbook</span>
            <h2 className="text-2xl font-bold text-white mt-4 mb-4 font-plus-jakarta">
              Getting Your Content Cited in AI Overviews
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Google has stated clearly that there are no special requirements to be included in
              AI Overviews. No hidden technical checklist. No paid placement. The same principles
              that have always made content rank well are the ones that make content get cited:
              helpfulness, reliability, and relevance.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              That said, there are practical things you can do to improve your chances. Writing
              content that directly answers questions is more likely to be cited than content that
              buries the answer in long introductions. Structuring your pages with clear headings,
              concise paragraphs, and specific details helps AI models parse and trust your
              content.
            </p>

            {/* Cheat Sheet */}
            <div className="not-prose ae-cheat-sheet">
              <div className="ae-cheat-sheet-title">AI Overview Citation Cheat Sheet</div>
              <table>
                <thead>
                  <tr>
                    <th>Action</th>
                    <th>Priority</th>
                    <th>Impact</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Answer questions directly in the first paragraph</td>
                    <td>Critical</td>
                    <td>Very High</td>
                  </tr>
                  <tr>
                    <td>Add FAQ schema with structured answers</td>
                    <td>Critical</td>
                    <td>High</td>
                  </tr>
                  <tr>
                    <td>Use clear headings that match search queries</td>
                    <td>High</td>
                    <td>High</td>
                  </tr>
                  <tr>
                    <td>Include specific data, numbers, and facts</td>
                    <td>High</td>
                    <td>Very High</td>
                  </tr>
                  <tr>
                    <td>Build citations from credible external sources</td>
                    <td>High</td>
                    <td>High</td>
                  </tr>
                  <tr>
                    <td>Maintain a complete Google Business Profile</td>
                    <td>High</td>
                    <td>High</td>
                  </tr>
                  <tr>
                    <td>Write concise paragraphs (avoid walls of text)</td>
                    <td>Medium</td>
                    <td>Medium</td>
                  </tr>
                  <tr>
                    <td>Earn mentions in local news and industry publications</td>
                    <td>Medium</td>
                    <td>High</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-300 leading-relaxed mb-4">
              For a local business, this might look like: a detailed FAQ page that answers the
              exact questions your customers ask before calling you, service pages that explain
              process and pricing in plain language, and blog posts that address common problems
              your customers search for by name. We covered this approach in depth in our guide
              on{' '}
              <Link href="/blog/how-to-build-faq-page-ai-cites" className="text-orange-400 hover:text-orange-300 transition-colors">
                how to build an FAQ page that AI actually cites
              </Link>.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Earning citations from credible external sources matters too. Your Google Business
              Profile, industry directories, local news mentions, and community platforms all
              contribute to the kind of trust signals that make AI models more likely to consider
              your content reliable enough to cite. Learn more about which directories matter most
              in our guide to{' '}
              <Link href="/blog/directory-listings-that-help-ai-find-business" className="text-orange-400 hover:text-orange-300 transition-colors">
                directory listings that help AI find your business
              </Link>.
            </p>

            <div className="not-prose ae-callout ae-callout-success">
              <div className="ae-callout-title">The Good News</div>
              <p>
                Google has confirmed there is no paid placement or secret formula for AI Overview
                citations. The same foundational principles that make content rank well are what get
                it cited. If you are already creating helpful, reliable content, you are closer
                than you think. You just need to structure it for AI consumption.
              </p>
            </div>

            <div className="not-prose ae-cta-inline">
              <p>Not sure where your content stands? We will audit it for free.</p>
              <Link href="/blindspot">Get Your Free Blind Spot Report</Link>
            </div>

            <div className="not-prose ae-cta-inline">
              <p>Prefer a walkthrough? Email us your website and we will take a look.</p>
              <a href="mailto:support@theanswerengine.ai">support@theanswerengine.ai</a>
            </div>

            {/* Section 9 */}
            <span className="not-prose ae-section-label">The Future</span>
            <h2 className="text-2xl font-bold text-white mt-4 mb-4 font-plus-jakarta">
              The Future of Search: AI-First Discovery
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              What comes next is not hard to see. Search is becoming less about navigating to
              websites and more about getting answers. The tools that provide those answers,
              whether it is Google&apos;s AI Overviews, ChatGPT, Perplexity, or something not yet
              launched, will control how billions of people discover businesses, make decisions,
              and spend money.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              For local service businesses, this creates a real and present risk. If the AI tools
              that people are using to find services in your area do not know you exist, or do not
              trust your content enough to cite it, you are effectively invisible to a growing
              share of potential customers.
            </p>

            <div className="not-prose ae-quote">
              <p>The question for your business is not whether AI search matters. The question is whether you are ready for it. And every month you wait, the gap between you and your competitors grows wider.</p>
            </div>

            <p className="text-gray-300 leading-relaxed mb-4">
              The businesses that will win in this environment are the ones that understand AI
              visibility as a distinct goal, not just a side effect of traditional SEO. Your
              website, your listings, your reviews, and your content all need to be optimized not
              just for human readers clicking links, but for AI systems deciding whose answer is
              worth surfacing. This is the core principle behind{' '}
              <Link href="/blog/what-is-answer-engine-optimization" className="text-orange-400 hover:text-orange-300 transition-colors">
                answer engine optimization
              </Link>.
            </p>

            <div className="not-prose ae-takeaway">
              <div className="ae-takeaway-title">Bottom Line</div>
              <p>
                AI Overviews are not coming. They are here. They dominate 60%+ of searches, they
                absorb 58% of the clicks that used to go to your website, and they reward the
                businesses that AI trusts enough to cite. The shift is irreversible. Adapting is
                not optional.
              </p>
            </div>

            <div className="not-prose ae-cta-inline">
              <p>Do not wait for the shift to finish. Find out where you stand right now.</p>
              <Link href="/blindspot">Get Your Free Blind Spot Report</Link>
            </div>
          </article>

          {/* Author Card */}
          <div className="not-prose">
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
          </div>

          {/* CTA Block */}
          <div className="not-prose ae-cta-block">
            <h3>Ready to See If AI Is Costing You Leads?</h3>
            <p>Get a free, no-obligation analysis of your business visibility across Google AI Overviews, ChatGPT, Gemini, and Perplexity.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
              <Link href="/blindspot" className="ae-cta-primary">
                Get Your Free Blind Spot Report
              </Link>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 mt-6">
              <a href="tel:+12134442229" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                (213) 444-2229
              </a>
              <a href="mailto:support@theanswerengine.ai" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                support@theanswerengine.ai
              </a>
            </div>
            <p className="text-gray-500 text-sm mt-4">No pitch, just the data.</p>
          </div>

          {/* FAQ Section */}
          <section className="mt-16 mb-16">
            <h2 className="text-2xl font-bold text-white mb-8 font-plus-jakarta">
              Frequently Asked Questions
            </h2>
            <div className="grid gap-4">
              {[
                {
                  q: 'Are Google AI Overviews actually replacing organic search results?',
                  a: 'AI Overviews do not replace organic results outright, but they change how information is presented. Organic listings still appear on the page, but they now compete with AI summaries for the user\'s attention. Being in the AI summary is increasingly more valuable than ranking just below it.',
                },
                {
                  q: 'What\'s the real impact of AI Overviews on website traffic and click-through rates?',
                  a: 'The presence of an AI Overview correlates with a 58% lower average clickthrough rate for the top-ranking page. A Pew Research Center study tracking 68,000 real searches found that users clicked on results 8% of the time when AI summaries appeared, compared to 15% without them. That is a 46.7% relative reduction in clicks.',
                },
                {
                  q: 'How often do AI Overviews appear in search results?',
                  a: 'According to Advanced Web Ranking data, Google AI Overviews now appear in 60.32% of U.S. queries. Google intentionally does not trigger them in every search, only when it determines an AI-generated overview would be genuinely helpful to the user.',
                },
                {
                  q: 'What does it mean if my content is cited in an AI Overview?',
                  a: 'Being cited is a significant advantage. Brands cited in AI Overviews earned 35% more organic clicks and 91% more paid clicks than those not cited. Inclusion as a source enhances overall visibility and drives measurably higher click-through rates across both organic and paid channels.',
                },
                {
                  q: 'Why did Google introduce AI Overviews instead of keeping traditional search?',
                  a: 'The introduction of AI Overviews was a strategic response to competition from generative AI tools like OpenAI\'s ChatGPT. Google needed to evolve its product to keep users in its ecosystem. The longer-term vision is for search to become an AI-first discovery, interpretation, and decision system, not just a list of links.',
                },
                {
                  q: 'Do I need special optimization to appear in AI Overviews?',
                  a: 'No. Google has stated there are no additional technical requirements or special optimizations needed to appear in AI Overviews or AI Mode. The same foundational SEO principles apply: create helpful, reliable, people-first content that directly and clearly answers the questions your audience is searching for.',
                },
                {
                  q: 'Which industries are most affected by AI Overviews?',
                  a: 'Science is the most impacted industry with AI Overviews appearing in 25.96% of keyword searches in that category. Computers and Electronics follows at 17.92%, and People and Society at 17.29%. Food and Drink has seen the fastest growth in AI Overview appearances since March, making it a category businesses in that space need to monitor closely.',
                },
                {
                  q: 'Is traditional SEO still important if AI Overviews are taking over?',
                  a: 'Yes. Technical SEO, on-page optimization, and authority building remain essential. They are not being replaced by AI optimization, they are being extended by it. Strong traditional SEO now supports both conventional rankings and AI-driven visibility. The two goals reinforce each other.',
                },
              ].map((faq, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-gray-800 bg-gray-900/50 p-6"
                >
                  <h3 className="text-lg font-semibold text-white mb-3 font-plus-jakarta">
                    {faq.q}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Final CTA */}
          <div className="not-prose ae-final-cta">
            <div className="ae-final-cta-pulse"></div>
            <h2>Is AI Search Stealing Your Traffic?</h2>
            <p>
              AI Overviews appear in 60%+ of searches and absorb 58% of the clicks that used to
              go to your website. Find out exactly where your business stands with a free,
              no-obligation analysis.
            </p>
            <Link href="/blindspot" className="ae-cta-primary">
              Get Your Free Blind Spot Report
            </Link>
            <div className="flex flex-wrap items-center justify-center gap-6 mt-6">
              <a href="tel:+12134442229" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                (213) 444-2229
              </a>
              <a href="mailto:support@theanswerengine.ai" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                support@theanswerengine.ai
              </a>
            </div>
            <p className="text-gray-500 text-sm mt-4">No pitch, just the data.</p>
          </div>

        </div>
      </main>
    </>
  )
}
