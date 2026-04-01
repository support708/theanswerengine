import type { Metadata } from 'next'
import Link from 'next/link'

export const revalidate = 86400
export const dynamic = 'force-static'
export const dynamicParams = true

const title = 'How Grok Decides Which Businesses to Recommend'
const description =
  'Grok uses real-time X data and web crawling to recommend local businesses. Learn what signals xAI evaluates and why most companies are invisible.'
const slug = 'how-grok-decides-which-businesses-to-recommend'
const publishDate = '2026-04-01'

export const metadata: Metadata = {
  title: `${title} | The Answer Engine`,
  description,
  keywords: [
    'Grok business recommendations',
    'xAI Grok local search',
    'Grok AI ranking factors',
    'how Grok picks businesses',
    'Grok X data signals',
    'Grok real-time recommendations',
    'xAI business visibility',
    'answer engine optimization',
    'Grok vs ChatGPT local search',
    'AI business citations',
    'generative AI local search',
    'Grok GEO',
  ],
  authors: [{ name: 'The Answer Engine Team' }],
  openGraph: {
    title: `${title} | The Answer Engine`,
    description,
    type: 'article',
    publishedTime: publishDate,
    authors: ['The Answer Engine Team'],
    url: `https://theanswerengine.ai/blog/${slug}`,
    images: [
      {
        url: `https://theanswerengine.ai/blog/${slug}.webp`,
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${title} | The Answer Engine`,
    description,
    images: [`https://theanswerengine.ai/blog/${slug}.webp`],
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
      datePublished: publishDate + 'T00:00:00Z',
      dateModified: publishDate + 'T00:00:00Z',
      author: {
        '@type': 'Organization',
        name: 'The Answer Engine',
        url: 'https://theanswerengine.ai',
      },
      publisher: {
        '@type': 'Organization',
        name: 'The Answer Engine',
        url: 'https://theanswerengine.ai',
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
          name: 'Does Grok use X (Twitter) data to recommend businesses?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Grok has direct access to the full X data stream, which is its primary differentiator among AI assistants. When users ask for business recommendations, Grok cross-references real-time X conversations, mentions, and sentiment with web-crawled information to form its answers. Businesses with active, positive X presences have a measurable advantage.',
          },
        },
        {
          '@type': 'Question',
          name: 'How is Grok different from ChatGPT for local business recommendations?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The core difference is data freshness and source diversity. ChatGPT relies primarily on web crawling and Bing data for real-time information. Grok layers the entire X social data stream on top of its web crawling, giving it access to real-time sentiment, trending conversations, and social proof signals that ChatGPT cannot see. This makes Grok uniquely responsive to businesses with strong social engagement.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can a business without an X account appear in Grok recommendations?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, but it is significantly harder. Grok still crawls the open web and can surface businesses based on traditional web signals like structured data, reviews, and directory listings. However, having no X presence means Grok has fewer data points to validate your business, and competitors with active X profiles will consistently outrank you in Grok answers.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is Grok Business and does it affect local recommendations?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Grok Business is an enterprise tier launched by xAI in early 2026 that provides organizations with advanced AI capabilities including Google Drive integration and enhanced search. While Grok Business is primarily an enterprise productivity tool, its launch signals xAI commitment to commercial use cases and the growing role Grok plays in business discovery workflows.',
          },
        },
        {
          '@type': 'Question',
          name: 'How quickly does Grok pick up on new business information?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Grok has the most real-time capabilities of any major AI model. Because it processes the X data stream continuously, positive mentions, trending conversations, and viral posts about your business can influence Grok answers within hours rather than weeks. Web-crawled signals take longer to propagate, but the X layer provides near-instant responsiveness.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does social media activity on platforms other than X help with Grok visibility?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Indirectly. Grok crawls the open web, so content from LinkedIn, Facebook, or Instagram that is publicly accessible and indexed can contribute to your overall web authority signals. However, X data carries disproportionate weight in Grok answers because of its direct data pipeline. Prioritize X if Grok visibility is a strategic goal, but do not abandon other platforms entirely.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is Grok relevant for local businesses or only national brands?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Grok is relevant for both, but its impact on local businesses is growing rapidly. As Grok becomes the default AI assistant across X and xAI products, users increasingly ask it for local recommendations. Businesses with a strong local web presence combined with active X engagement are already appearing in Grok answers for location-specific queries.',
          },
        },
        {
          '@type': 'Question',
          name: 'What happens if someone posts negative things about my business on X?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Grok processes sentiment, not just mentions. A pattern of negative X posts can influence Grok to deprioritize or add caveats to its recommendation of your business. The best defense is proactive reputation management: consistent positive engagement, prompt responses to complaints, and a steady flow of authentic customer advocacy on X.',
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
      description: 'Answer Engine Optimization agency helping businesses get cited by AI platforms.',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `https://theanswerengine.ai/blog/${slug}#breadcrumb`,
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
          name: 'Grok Business Recommendations',
          item: `https://theanswerengine.ai/blog/${slug}`,
        },
      ],
    },
  ],
}

function Breadcrumb() {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex items-center gap-2 text-sm text-gray-400">
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
        <li className="text-gray-300 truncate max-w-xs">Grok Business Recommendations</li>
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

      <main className="min-h-screen" style={{ backgroundColor: '#0F1117', color: '#E5E7EB' }}>

        {/* Hero Section */}
        <section
          className="relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #0F1117 0%, #1a1f2e 50%, #0F1117 100%)',
            borderBottom: '1px solid rgba(255,106,0,0.2)',
          }}
        >
          <svg
            className="absolute inset-0 w-full h-full opacity-10"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="hero-grid-grok"
                x="0"
                y="0"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="#FF6A00"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-grid-grok)" />
          </svg>

          <div className="relative max-w-4xl mx-auto px-6 py-20">
            <Breadcrumb />

            <div className="flex items-center gap-3 mb-6">
              <span
                className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full"
                style={{ backgroundColor: 'rgba(255,106,0,0.15)', color: '#FF6A00', border: '1px solid rgba(255,106,0,0.3)' }}
              >
                Platform Deep Dives
              </span>
              <span className="text-xs text-gray-500">April 1, 2026</span>
              <span className="text-xs text-gray-500">12 min read</span>
            </div>

            <h1
              className="font-plus-jakarta text-4xl md:text-5xl font-extrabold leading-tight mb-6"
              style={{ color: '#FFFFFF' }}
            >
              How Grok Decides Which Businesses to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6A00] to-orange-400">Recommend</span>
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-3xl">
              Grok is the only major AI assistant with direct access to the X data stream. That gives it a recommendation engine unlike anything else on the market. If your business is invisible to Grok, you are missing the fastest-growing AI discovery channel in 2026.
            </p>

            {/* Inline CTA */}
            <div className="ae-cta-inline flex flex-wrap items-center gap-4 mb-4">
              <Link
                href="/blindspot"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white transition-all hover:opacity-90"
                style={{ backgroundColor: '#FF6A00' }}
              >
                Check Your Grok Visibility
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
              <a
                href="tel:+12134442229"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all hover:opacity-90"
                style={{ backgroundColor: 'rgba(255,106,0,0.1)', color: '#FF6A00', border: '1px solid rgba(255,106,0,0.3)' }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                (213) 444-2229
              </a>
            </div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-6 py-16">

          {/* Stats Grid */}
          <section className="ae-stats-grid grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            <div
              className="ae-stat-card rounded-xl p-5 text-center"
              style={{ backgroundColor: 'rgba(255,106,0,0.08)', border: '1px solid rgba(255,106,0,0.2)' }}
            >
              <div className="font-plus-jakarta text-3xl font-extrabold mb-1" style={{ color: '#FF6A00' }}>500M+</div>
              <div className="text-xs text-gray-400 leading-snug">Monthly active X users feeding Grok data</div>
            </div>
            <div
              className="ae-stat-card rounded-xl p-5 text-center"
              style={{ backgroundColor: 'rgba(255,106,0,0.08)', border: '1px solid rgba(255,106,0,0.2)' }}
            >
              <div className="font-plus-jakarta text-3xl font-extrabold mb-1" style={{ color: '#FF6A00' }}>Real-Time</div>
              <div className="text-xs text-gray-400 leading-snug">X data stream processed continuously by Grok</div>
            </div>
            <div
              className="ae-stat-card rounded-xl p-5 text-center"
              style={{ backgroundColor: 'rgba(255,106,0,0.08)', border: '1px solid rgba(255,106,0,0.2)' }}
            >
              <div className="font-plus-jakarta text-3xl font-extrabold mb-1" style={{ color: '#FF6A00' }}>2 Tiers</div>
              <div className="text-xs text-gray-400 leading-snug">Grok Business and Enterprise plans launched 2026</div>
            </div>
            <div
              className="ae-stat-card rounded-xl p-5 text-center"
              style={{ backgroundColor: 'rgba(255,106,0,0.08)', border: '1px solid rgba(255,106,0,0.2)' }}
            >
              <div className="font-plus-jakarta text-3xl font-extrabold mb-1" style={{ color: '#FF6A00' }}>Fastest</div>
              <div className="text-xs text-gray-400 leading-snug">Most real-time search capabilities of any AI model</div>
            </div>
          </section>

          {/* Table of Contents */}
          <nav
            className="ae-toc rounded-xl p-6 mb-12"
            style={{ backgroundColor: '#1a1f2e', border: '1px solid rgba(255,106,0,0.15)' }}
            aria-label="Table of Contents"
          >
            <h2 className="font-plus-jakarta text-lg font-bold mb-4" style={{ color: '#FF6A00' }}>
              In This Article
            </h2>
            <ol className="space-y-2 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <span style={{ color: '#FF6A00' }}>01</span>
                <a href="#what-makes-grok-different" className="hover:text-orange-400 transition-colors">What Makes Grok Different from Every Other AI</a>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: '#FF6A00' }}>02</span>
                <a href="#x-data-advantage" className="hover:text-orange-400 transition-colors">The X Data Advantage: Real-Time Social Intelligence</a>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: '#FF6A00' }}>03</span>
                <a href="#ranking-signals" className="hover:text-orange-400 transition-colors">The Five Signals Grok Weighs for Business Recommendations</a>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: '#FF6A00' }}>04</span>
                <a href="#grok-vs-chatgpt" className="hover:text-orange-400 transition-colors">Grok vs ChatGPT: Why Recommendations Differ</a>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: '#FF6A00' }}>05</span>
                <a href="#who-wins" className="hover:text-orange-400 transition-colors">Who Wins in Grok Recommendations (and Who Disappears)</a>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: '#FF6A00' }}>06</span>
                <a href="#decision-matrix" className="hover:text-orange-400 transition-colors">Decision Matrix: Is Your Business Grok-Ready?</a>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: '#FF6A00' }}>07</span>
                <a href="#cheat-sheet" className="hover:text-orange-400 transition-colors">Grok Visibility Cheat Sheet</a>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: '#FF6A00' }}>08</span>
                <a href="#faq" className="hover:text-orange-400 transition-colors">Frequently Asked Questions</a>
              </li>
            </ol>
          </nav>

          {/* Section 1: What Makes Grok Different */}
          <section id="what-makes-grok-different" className="mb-14">
            <h2 className="font-plus-jakarta text-3xl font-bold mb-6" style={{ color: '#FFFFFF' }}>
              What Makes Grok Different from Every Other AI
            </h2>

            <p className="text-gray-300 leading-relaxed mb-5">
              Every major AI assistant can crawl the web. ChatGPT uses Bing. Perplexity has its own index. Google Gemini taps the entire Google search infrastructure. But Grok has something none of them can replicate: a direct, unfiltered pipeline into the X (formerly Twitter) data stream. That single advantage changes the entire recommendation equation.
            </p>

            <p className="text-gray-300 leading-relaxed mb-5">
              When a user asks Grok &quot;What is the best coffee shop near downtown Austin?&quot; the answer is not built solely from web pages and directory listings. Grok simultaneously processes what people are saying about Austin coffee shops right now on X. It sees trending mentions, recent reviews posted as tweets, customer complaints, viral recommendations, and real-time sentiment shifts. No other AI assistant has access to this layer of social intelligence.
            </p>

            {/* Callout: Info */}
            <div className="ae-callout ae-callout-info not-prose">
              <div className="ae-callout-title">Grok Is Not Just Another Chatbot</div>
              <p>Grok processes events as they unfold, making it ideal for monitoring news, market trends, and public sentiment. For business recommendations, this means Grok can factor in information that is hours old, not weeks or months old. A viral customer experience post on X this morning can influence Grok&apos;s answer this afternoon.</p>
            </div>

            <p className="text-gray-300 leading-relaxed mb-5">
              xAI launched Grok Business and Grok Enterprise plans in early 2026, signaling a clear move toward commercial adoption. As Grok becomes embedded in more business workflows and consumer devices, its role as a recommendation engine is only accelerating. The businesses that understand how Grok evaluates them now will have a compounding advantage over those that wait.
            </p>

            {/* Inline CTA */}
            <div className="ae-cta-inline my-8 p-5 rounded-xl" style={{ backgroundColor: 'rgba(255,106,0,0.06)', border: '1px solid rgba(255,106,0,0.2)' }}>
              <p className="text-sm text-gray-300 mb-3">Not sure how Grok currently perceives your business? We audit your visibility across every major AI platform, including Grok.</p>
              <Link
                href="/blindspot"
                className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-80"
                style={{ color: '#FF6A00' }}
              >
                Get Your Free Blind Spot Report
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </section>

          {/* Section 2: The X Data Advantage */}
          <section id="x-data-advantage" className="mb-14">
            <h2 className="font-plus-jakarta text-3xl font-bold mb-6" style={{ color: '#FFFFFF' }}>
              The X Data Advantage: Real-Time Social Intelligence
            </h2>

            <p className="text-gray-300 leading-relaxed mb-5">
              The X data stream is the single largest source of real-time public conversation on the internet. Over 500 million monthly active users generate billions of posts, replies, and engagements. Grok does not just search this data. It has privileged, native access to the full firehose, a capability xAI built directly into Grok&apos;s architecture.
            </p>

            <p className="text-gray-300 leading-relaxed mb-5">
              For business recommendations, this creates a fundamentally different evaluation model. Traditional AI assistants build their understanding of a business from static web pages: your website, your directory listings, your Google reviews. Grok layers a dynamic, real-time social signal on top of all of that. It can see whether customers are talking about you today, what they are saying, and how the public sentiment around your brand is trending.
            </p>

            {/* Bar Chart: Data Sources */}
            <div className="ae-bar-group my-8 space-y-4">
              <p className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-4">Grok Data Source Weight (Estimated)</p>
              {[
                { label: 'X Social Signals', value: 40, color: '#FF6A00' },
                { label: 'Web Crawl Data', value: 30, color: '#FB923C' },
                { label: 'Structured Listings', value: 15, color: '#FDBA74' },
                { label: 'Review Platforms', value: 15, color: '#FED7AA' },
              ].map((bar) => (
                <div key={bar.label} className="ae-bar-item">
                  <div className="flex justify-between items-center mb-1">
                    <span className="ae-bar-label text-sm text-gray-300">{bar.label}</span>
                    <span className="ae-bar-value text-sm font-bold" style={{ color: bar.color }}>{bar.value}%</span>
                  </div>
                  <div className="ae-bar-track h-3 rounded-full" style={{ backgroundColor: 'rgba(255,255,255,0.06)' }}>
                    <div
                      className="ae-bar-fill h-full rounded-full"
                      style={{ width: `${bar.value}%`, backgroundColor: bar.color }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <p className="text-gray-300 leading-relaxed mb-5">
              This is why a business with a modest website but a thriving X presence can outrank a competitor with a polished website but zero social engagement. Grok is cross-referencing what it reads on your website with what the world is saying about you on X. When those signals align, confidence goes up. When your web presence says one thing and X says another, or says nothing at all, Grok downgrades its confidence and looks elsewhere.
            </p>

            {/* Callout: Warning */}
            <div className="ae-callout ae-callout-warning not-prose">
              <div className="ae-callout-title">The X Silence Problem</div>
              <p>If your business has no X presence and nobody is talking about you on X, Grok has a massive blind spot. It cannot validate your authority through its strongest data channel. This is not a minor disadvantage. It is the equivalent of having no Google Business Profile in 2018: technically your business exists, but the primary discovery engine cannot find you.</p>
            </div>

            <div className="ae-cta-inline my-8 p-5 rounded-xl" style={{ backgroundColor: 'rgba(255,106,0,0.06)', border: '1px solid rgba(255,106,0,0.2)' }}>
              <p className="text-sm text-gray-300 mb-3">Learn how social signals influence AI recommendations across all platforms, not just Grok.</p>
              <Link
                href="/blog/does-social-media-help-ai-recommend-you"
                className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-80"
                style={{ color: '#FF6A00' }}
              >
                Does Social Media Help AI Recommend You?
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </section>

          {/* Section 3: The Five Ranking Signals */}
          <section id="ranking-signals" className="mb-14">
            <h2 className="font-plus-jakarta text-3xl font-bold mb-6" style={{ color: '#FFFFFF' }}>
              The Five Signals Grok Weighs for Business Recommendations
            </h2>

            <p className="text-gray-300 leading-relaxed mb-5">
              Based on our analysis of hundreds of Grok responses across industries and locations, five distinct signal categories drive whether Grok recommends a business. The weight of each signal varies by query type, but the pattern is consistent.
            </p>

            {/* Timeline: 5 Signals */}
            <div className="ae-timeline my-8 space-y-6">
              {[
                {
                  num: '01',
                  title: 'X Social Proof and Sentiment',
                  desc: 'Active X presence, customer mentions, positive sentiment ratio, engagement on posts about your business. Grok weighs recency heavily: a post from today matters more than one from six months ago.',
                },
                {
                  num: '02',
                  title: 'Real-Time Web Authority',
                  desc: 'Your website quality, structured data, domain authority, and how recently your content was updated. Grok crawls the web in real time, so stale pages get deprioritized fast.',
                },
                {
                  num: '03',
                  title: 'Cross-Source Consistency',
                  desc: 'Whether your business name, services, and key details match across X, your website, directories, and review platforms. Contradictions kill confidence.',
                },
                {
                  num: '04',
                  title: 'Review Volume and Freshness',
                  desc: 'Grok processes reviews from platforms it can crawl, including Google, Yelp, and industry-specific sites. Recent reviews carry more weight than aggregate scores alone.',
                },
                {
                  num: '05',
                  title: 'Topical Relevance and Specificity',
                  desc: 'Grok evaluates whether your content directly addresses the user query. Generic service pages lose to detailed, specific content that matches the exact question being asked.',
                },
              ].map((item) => (
                <div key={item.num} className="ae-timeline-item flex gap-4">
                  <div className="flex-shrink-0">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center font-plus-jakarta font-bold text-sm"
                      style={{ backgroundColor: 'rgba(255,106,0,0.15)', color: '#FF6A00', border: '1px solid rgba(255,106,0,0.3)' }}
                    >
                      {item.num}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-plus-jakarta font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-300 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-gray-300 leading-relaxed mb-5">
              The critical takeaway is that signals one and two are uniquely weighted in Grok compared to other AI assistants. ChatGPT and Perplexity lean heavier on web authority and citations. Grok layers social intelligence as a first-class signal. This is not speculation. You can test it: ask Grok about a business with a strong X presence versus one without, and the difference in recommendation confidence is visible in the answer.
            </p>

            {/* Inline CTA */}
            <div className="ae-cta-inline my-8 p-5 rounded-xl" style={{ backgroundColor: 'rgba(255,106,0,0.06)', border: '1px solid rgba(255,106,0,0.2)' }}>
              <p className="text-sm text-gray-300 mb-3">Wondering how other AI platforms evaluate authority differently? Compare the approaches.</p>
              <Link
                href="/blog/how-claude-ai-evaluates-business-authority"
                className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-80"
                style={{ color: '#FF6A00' }}
              >
                How Claude AI Evaluates Business Authority
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </section>

          {/* Section 4: Grok vs ChatGPT */}
          <section id="grok-vs-chatgpt" className="mb-14">
            <h2 className="font-plus-jakarta text-3xl font-bold mb-6" style={{ color: '#FFFFFF' }}>
              Grok vs ChatGPT: Why Recommendations Differ
            </h2>

            <p className="text-gray-300 leading-relaxed mb-5">
              The most common question business owners ask: &quot;If I already show up in ChatGPT, do I need to worry about Grok?&quot; The answer is an unqualified yes. The two AI assistants use fundamentally different data pipelines, and a business that dominates ChatGPT can be completely invisible in Grok.
            </p>

            {/* Comparison Table */}
            <div className="ae-comparison-table overflow-x-auto rounded-xl my-8" style={{ border: '1px solid rgba(255,106,0,0.2)' }}>
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ backgroundColor: 'rgba(255,106,0,0.12)' }}>
                    <th className="text-left p-4 font-plus-jakarta font-semibold text-white">Factor</th>
                    <th className="text-left p-4 font-plus-jakarta font-semibold" style={{ color: '#FF6A00' }}>Grok</th>
                    <th className="text-left p-4 font-plus-jakarta font-semibold text-gray-400">ChatGPT</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { factor: 'Primary Data Source', grok: 'X data stream + web crawl', chatgpt: 'Bing index + web crawl' },
                    { factor: 'Real-Time Speed', grok: 'Near-instant (hours)', chatgpt: 'Days to weeks' },
                    { factor: 'Social Signal Weight', grok: 'Very high (X native)', chatgpt: 'Low to moderate' },
                    { factor: 'Sentiment Analysis', grok: 'Real-time X sentiment', chatgpt: 'Review aggregation' },
                    { factor: 'Source Citation', grok: 'X posts + web pages', chatgpt: 'Web pages + Bing results' },
                    { factor: 'Local Business Data', grok: 'Web + X location context', chatgpt: 'Bing Places + web' },
                    { factor: 'Enterprise Tier', grok: 'Grok Business (2026)', chatgpt: 'ChatGPT Enterprise' },
                    { factor: 'Unique Advantage', grok: 'Unmatched real-time social data', chatgpt: 'Deepest web crawl coverage' },
                  ].map((row, i) => (
                    <tr
                      key={row.factor}
                      style={{
                        borderTop: '1px solid rgba(255,106,0,0.1)',
                        backgroundColor: i % 2 === 1 ? 'rgba(255,255,255,0.02)' : 'transparent',
                      }}
                    >
                      <td className="p-4 font-medium text-gray-200">{row.factor}</td>
                      <td className="p-4 text-gray-300 text-xs">{row.grok}</td>
                      <td className="p-4 text-gray-500 text-xs">{row.chatgpt}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-gray-300 leading-relaxed mb-5">
              The difference is stark. ChatGPT builds its recommendation picture primarily from what it can find on the indexed web, pulling from Bing, web pages, and structured data. Grok builds its picture from the intersection of web content and live social conversation. A business that has optimized its website and Bing presence but neglected X is well-positioned for ChatGPT but exposed on Grok.
            </p>

            {/* Callout: Orange */}
            <div className="ae-callout ae-callout-orange not-prose">
              <div className="ae-callout-title">The Multi-Platform Imperative</div>
              <p>Optimizing for one AI assistant and ignoring the rest is the 2026 equivalent of optimizing only for Google and ignoring Bing in 2015. Each platform has distinct data sources and ranking signals. Grok&apos;s X-first architecture means your AI visibility strategy must include social engagement, not just web optimization. The businesses winning across all AI platforms are the ones investing in cross-platform authority.</p>
            </div>

            <div className="ae-cta-inline my-8 p-5 rounded-xl" style={{ backgroundColor: 'rgba(255,106,0,0.06)', border: '1px solid rgba(255,106,0,0.2)' }}>
              <p className="text-sm text-gray-300 mb-3">See how the other major AI platforms compare for local business recommendations.</p>
              <Link
                href="/blog/chatgpt-vs-perplexity-vs-google-ai-local"
                className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-80"
                style={{ color: '#FF6A00' }}
              >
                ChatGPT vs Perplexity vs Google AI: Local Search
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </section>

          {/* Section 5: Who Wins */}
          <section id="who-wins" className="mb-14">
            <h2 className="font-plus-jakarta text-3xl font-bold mb-6" style={{ color: '#FFFFFF' }}>
              Who Wins in Grok Recommendations (and Who Disappears)
            </h2>

            <p className="text-gray-300 leading-relaxed mb-5">
              After analyzing Grok responses across dozens of industries and local markets, the pattern is clear. Certain business profiles consistently surface in Grok answers, while others are systematically overlooked. The dividing line is not budget or size. It is signal coverage.
            </p>

            {/* Pros/Cons */}
            <div className="ae-pros-cons grid md:grid-cols-2 gap-6 my-8">
              <div
                className="ae-pros-box rounded-xl p-6"
                style={{ backgroundColor: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.2)' }}
              >
                <h3 className="font-plus-jakarta font-bold mb-4 flex items-center gap-2" style={{ color: '#22C55E' }}>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  Businesses Grok Recommends
                </h3>
                <ul className="space-y-3">
                  {[
                    'Active X account with regular posts and customer engagement',
                    'Customers mentioning the business positively on X',
                    'Consistent NAP and service details across web and social',
                    'Fresh, specific content on the website matching common queries',
                    'Reviews on multiple platforms with recent activity',
                    'Structured data markup on the website (LocalBusiness schema)',
                    'Active responses to customer posts and mentions on X',
                    'Industry-relevant content shared and discussed on X',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-300">
                      <svg className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#22C55E' }} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className="ae-cons-box rounded-xl p-6"
                style={{ backgroundColor: 'rgba(239,68,68,0.06)', border: '1px solid rgba(239,68,68,0.2)' }}
              >
                <h3 className="font-plus-jakarta font-bold mb-4 flex items-center gap-2" style={{ color: '#EF4444' }}>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" /></svg>
                  Businesses Grok Ignores
                </h3>
                <ul className="space-y-3">
                  {[
                    'No X account or dormant account with no recent posts',
                    'Zero customer mentions on X',
                    'Inconsistent business information across platforms',
                    'Generic or outdated website content',
                    'Reviews only on one platform or no recent reviews',
                    'No structured data on the website',
                    'Negative sentiment pattern on X without brand response',
                    'No topical authority content in the business niche',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-300">
                      <svg className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#EF4444' }} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Callout: Success */}
            <div className="ae-callout ae-callout-success not-prose">
              <div className="ae-callout-title">The Speed Advantage Is Real</div>
              <p>Because Grok processes X data in near real-time, businesses that actively engage on X can see results faster than on any other AI platform. A consistent two-week push of quality X content and customer engagement can begin shifting Grok&apos;s recommendation patterns within days. No other AI platform offers this kind of responsiveness.</p>
            </div>

            <div className="ae-cta-inline my-8 p-5 rounded-xl" style={{ backgroundColor: 'rgba(255,106,0,0.06)', border: '1px solid rgba(255,106,0,0.2)' }}>
              <p className="text-sm text-gray-300 mb-3">Curious how citation mechanics work on other AI platforms?</p>
              <Link
                href="/blog/how-perplexity-decides-what-to-cite"
                className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-80"
                style={{ color: '#FF6A00' }}
              >
                How Perplexity Decides What to Cite
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </section>

          {/* Section 6: Decision Matrix */}
          <section id="decision-matrix" className="mb-14">
            <h2 className="font-plus-jakarta text-3xl font-bold mb-6" style={{ color: '#FFFFFF' }}>
              Decision Matrix: Is Your Business Grok-Ready?
            </h2>

            <p className="text-gray-300 leading-relaxed mb-8">
              Use this matrix to assess where your business stands across the key dimensions Grok evaluates. Be honest. This is not about aspirations. It is about where you actually are today.
            </p>

            <div className="ae-decision-matrix overflow-x-auto rounded-xl" style={{ border: '1px solid rgba(255,106,0,0.2)' }}>
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ backgroundColor: 'rgba(255,106,0,0.12)' }}>
                    <th className="text-left p-4 font-plus-jakarta font-semibold text-white">Signal Area</th>
                    <th className="text-left p-4 font-plus-jakarta font-semibold text-red-400">Not Ready</th>
                    <th className="text-left p-4 font-plus-jakarta font-semibold text-yellow-400">Partial</th>
                    <th className="text-left p-4 font-plus-jakarta font-semibold text-green-400">Grok-Ready</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      area: 'X Presence',
                      notReady: 'No account or inactive',
                      partial: 'Account exists, posts monthly',
                      ready: 'Active daily, customer engagement',
                    },
                    {
                      area: 'X Social Proof',
                      notReady: 'Zero customer mentions',
                      partial: 'Occasional mentions, no strategy',
                      ready: 'Regular positive mentions, brand advocates',
                    },
                    {
                      area: 'Website Freshness',
                      notReady: 'Unchanged for 6+ months',
                      partial: 'Updated quarterly',
                      ready: 'Fresh content weekly, blog active',
                    },
                    {
                      area: 'Cross-Platform Consistency',
                      notReady: 'Conflicting info everywhere',
                      partial: 'Mostly consistent, a few gaps',
                      ready: 'Identical NAP and details everywhere',
                    },
                    {
                      area: 'Review Coverage',
                      notReady: 'One platform only',
                      partial: '2-3 platforms, older reviews',
                      ready: '4+ platforms, recent and consistent',
                    },
                    {
                      area: 'Structured Data',
                      notReady: 'No schema markup',
                      partial: 'Basic LocalBusiness schema',
                      ready: 'Full schema with services, hours, geo',
                    },
                    {
                      area: 'Content Specificity',
                      notReady: 'Generic service pages',
                      partial: 'Some specific content',
                      ready: 'Detailed pages matching query intent',
                    },
                  ].map((row, i) => (
                    <tr
                      key={row.area}
                      style={{
                        borderTop: '1px solid rgba(255,106,0,0.1)',
                        backgroundColor: i % 2 === 1 ? 'rgba(255,255,255,0.02)' : 'transparent',
                      }}
                    >
                      <td className="p-4 font-medium text-gray-200">{row.area}</td>
                      <td className="p-4 text-red-400 text-xs">{row.notReady}</td>
                      <td className="p-4 text-yellow-400 text-xs">{row.partial}</td>
                      <td className="p-4 text-green-400 text-xs">{row.ready}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="ae-cta-inline mt-8 p-5 rounded-xl" style={{ backgroundColor: 'rgba(255,106,0,0.06)', border: '1px solid rgba(255,106,0,0.2)' }}>
              <p className="text-sm text-gray-300 mb-3">If you scored &quot;Not Ready&quot; or &quot;Partial&quot; in three or more areas, your Grok visibility is significantly below where it needs to be. That gap is costing you customers every day.</p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/blindspot"
                  className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-lg text-white transition-all hover:opacity-90"
                  style={{ backgroundColor: '#FF6A00' }}
                >
                  Get Your Full Grok Readiness Score
                </Link>
                <a
                  href="tel:+12134442229"
                  className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-80"
                  style={{ color: '#FF6A00' }}
                >
                  Or call (213) 444-2229
                </a>
              </div>
            </div>
          </section>

          {/* Internal Link Block */}
          <section className="mb-14">
            <div
              className="rounded-xl p-6"
              style={{ backgroundColor: '#1a1f2e', border: '1px solid rgba(255,106,0,0.15)' }}
            >
              <h3 className="font-plus-jakarta font-bold text-white mb-4">Related Reading: AI Platform Deep Dives</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <Link
                  href="/blog/how-microsoft-copilot-decides-which-businesses-to-recommend"
                  className="block p-4 rounded-lg transition-all hover:border-orange-500"
                  style={{ backgroundColor: 'rgba(255,106,0,0.05)', border: '1px solid rgba(255,106,0,0.1)' }}
                >
                  <p className="text-xs uppercase tracking-wide mb-1" style={{ color: '#FF6A00' }}>Platform Deep Dive</p>
                  <p className="text-sm font-semibold text-white leading-snug">How Microsoft Copilot Decides Which Businesses to Recommend</p>
                </Link>
                <Link
                  href="/blog/how-apple-intelligence-finds-and-recommends-local-businesses"
                  className="block p-4 rounded-lg transition-all hover:border-orange-500"
                  style={{ backgroundColor: 'rgba(255,106,0,0.05)', border: '1px solid rgba(255,106,0,0.1)' }}
                >
                  <p className="text-xs uppercase tracking-wide mb-1" style={{ color: '#FF6A00' }}>Platform Deep Dive</p>
                  <p className="text-sm font-semibold text-white leading-snug">How Apple Intelligence Finds and Recommends Local Businesses</p>
                </Link>
                <Link
                  href="/blog/chatgpt-vs-perplexity-vs-google-ai-local"
                  className="block p-4 rounded-lg transition-all hover:border-orange-500"
                  style={{ backgroundColor: 'rgba(255,106,0,0.05)', border: '1px solid rgba(255,106,0,0.1)' }}
                >
                  <p className="text-xs uppercase tracking-wide mb-1" style={{ color: '#FF6A00' }}>Platform Comparison</p>
                  <p className="text-sm font-semibold text-white leading-snug">ChatGPT vs Perplexity vs Google AI: Local Search</p>
                </Link>
              </div>
            </div>
          </section>

          {/* Section 7: Cheat Sheet */}
          <section id="cheat-sheet" className="mb-14">
            <h2 className="font-plus-jakarta text-3xl font-bold mb-6" style={{ color: '#FFFFFF' }}>
              Grok Visibility Cheat Sheet
            </h2>

            <div
              className="ae-cheat-sheet rounded-xl p-8"
              style={{ backgroundColor: '#1a1f2e', border: '1px solid rgba(255,106,0,0.2)' }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(255,106,0,0.2)' }}
                >
                  <svg className="w-5 h-5" style={{ color: '#FF6A00' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
                </div>
                <h3 className="font-plus-jakarta text-xl font-bold text-white">Grok Optimization Quick Reference</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3" style={{ color: '#FF6A00' }}>Foundation Moves (Do These First)</h4>
                  <ul className="space-y-2">
                    {[
                      'Create or reactivate your business X account',
                      'Post 3-5 times per week with genuine value, not just promotions',
                      'Engage with customer mentions and industry conversations',
                      'Ensure your X bio matches your website and directory listings exactly',
                      'Add your website URL and location to your X profile',
                      'Verify your website has LocalBusiness structured data',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-300">
                        <span style={{ color: '#FF6A00' }} className="mt-0.5">&#8594;</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3" style={{ color: '#FF6A00' }}>Authority Amplifiers (Do These Next)</h4>
                  <ul className="space-y-2">
                    {[
                      'Encourage satisfied customers to mention you on X',
                      'Share industry expertise as X threads (builds topical authority)',
                      'Cross-post review highlights from Google and Yelp to X',
                      'Build reviews on multiple platforms, not just Google',
                      'Create service-specific pages on your website with location context',
                      'Standardize NAP across all directories and social profiles',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-300">
                        <span style={{ color: '#FF6A00' }} className="mt-0.5">&#8594;</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3" style={{ color: '#FF6A00' }}>Advanced Signals (Differentiate)</h4>
                  <ul className="space-y-2">
                    {[
                      'Monitor X mentions with alerts to respond within hours',
                      'Create X-native content (polls, spaces, threads) about your industry',
                      'Build relationships with local X influencers and micro-creators',
                      'Publish data-driven insights that get shared and discussed on X',
                      'Use X Lists to engage with your local business community',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-300">
                        <span style={{ color: '#FF6A00' }} className="mt-0.5">&#8594;</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3" style={{ color: '#EF4444' }}>Avoid These at All Costs</h4>
                  <ul className="space-y-2">
                    {[
                      'Buying fake X followers or engagement (Grok detects inauthenticity)',
                      'Ignoring negative X mentions (silence amplifies negative sentiment)',
                      'Posting only promotional content with no genuine engagement',
                      'Having conflicting business details across X and your website',
                      'Letting your X account go dormant for weeks at a time',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-300">
                        <span className="text-red-400 mt-0.5">&#10007;</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* 3-Tier CTA Block */}
          <section className="ae-cta-block mb-14">
            <div
              className="rounded-2xl p-8 text-center"
              style={{ background: 'linear-gradient(135deg, rgba(255,106,0,0.1) 0%, rgba(255,106,0,0.05) 100%)', border: '1px solid rgba(255,106,0,0.25)' }}
            >
              <h2 className="font-plus-jakarta text-3xl font-extrabold text-white mb-3">
                Is Grok Finding Your Business?
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                Most businesses have no idea whether Grok is recommending them, ignoring them, or actively choosing their competitors. Our Blind Spot Report shows you exactly where you stand across every major AI recommendation engine, including Grok, and what it will take to close the gap.
              </p>

              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div
                  className="rounded-xl p-5"
                  style={{ backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,106,0,0.15)' }}
                >
                  <div className="w-10 h-10 rounded-full mx-auto mb-3 flex items-center justify-center" style={{ backgroundColor: 'rgba(255,106,0,0.2)' }}>
                    <svg className="w-5 h-5" style={{ color: '#FF6A00' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                  </div>
                  <h3 className="font-bold text-white text-sm mb-1">Full AI Visibility Audit</h3>
                  <p className="text-xs text-gray-400">Grok, ChatGPT, Perplexity, Copilot, Google AI: see exactly where you appear and where you do not</p>
                </div>
                <div
                  className="rounded-xl p-5"
                  style={{ backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,106,0,0.15)' }}
                >
                  <div className="w-10 h-10 rounded-full mx-auto mb-3 flex items-center justify-center" style={{ backgroundColor: 'rgba(255,106,0,0.2)' }}>
                    <svg className="w-5 h-5" style={{ color: '#FF6A00' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                  </div>
                  <h3 className="font-bold text-white text-sm mb-1">Competitor Gap Analysis</h3>
                  <p className="text-xs text-gray-400">Find out exactly which signals your top competitors have that you lack, and why Grok picks them</p>
                </div>
                <div
                  className="rounded-xl p-5"
                  style={{ backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,106,0,0.15)' }}
                >
                  <div className="w-10 h-10 rounded-full mx-auto mb-3 flex items-center justify-center" style={{ backgroundColor: 'rgba(255,106,0,0.2)' }}>
                    <svg className="w-5 h-5" style={{ color: '#FF6A00' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </div>
                  <h3 className="font-bold text-white text-sm mb-1">Done-For-You Optimization</h3>
                  <p className="text-xs text-gray-400">We fix every gap identified in the audit so you start appearing in Grok answers within weeks</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/blindspot"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-base transition-all hover:opacity-90"
                  style={{ backgroundColor: '#FF6A00' }}
                >
                  Get Your Free Blind Spot Report
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
                <a
                  href="tel:+12134442229"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-base transition-all hover:opacity-90"
                  style={{ backgroundColor: 'rgba(255,106,0,0.1)', color: '#FF6A00', border: '2px solid rgba(255,106,0,0.4)' }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  (213) 444-2229
                </a>
                <a
                  href="mailto:support@theanswerengine.ai"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-base transition-all hover:opacity-90"
                  style={{ backgroundColor: 'rgba(255,255,255,0.05)', color: '#E5E7EB', border: '1px solid rgba(255,255,255,0.1)' }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  support@theanswerengine.ai
                </a>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq" className="mb-14">
            <h2 className="font-plus-jakarta text-3xl font-bold mb-8" style={{ color: '#FFFFFF' }}>
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {[
                {
                  q: 'Does Grok use X (Twitter) data to recommend businesses?',
                  a: 'Yes. Grok has direct access to the full X data stream, which is its primary differentiator among AI assistants. When users ask for business recommendations, Grok cross-references real-time X conversations, mentions, and sentiment with web-crawled information to form its answers. Businesses with active, positive X presences have a measurable advantage.',
                },
                {
                  q: 'How is Grok different from ChatGPT for local business recommendations?',
                  a: "The core difference is data freshness and source diversity. ChatGPT relies primarily on web crawling and Bing data for real-time information. Grok layers the entire X social data stream on top of its web crawling, giving it access to real-time sentiment, trending conversations, and social proof signals that ChatGPT cannot see. This makes Grok uniquely responsive to businesses with strong social engagement.",
                },
                {
                  q: 'Can a business without an X account appear in Grok recommendations?',
                  a: 'Yes, but it is significantly harder. Grok still crawls the open web and can surface businesses based on traditional web signals like structured data, reviews, and directory listings. However, having no X presence means Grok has fewer data points to validate your business, and competitors with active X profiles will consistently outrank you in Grok answers.',
                },
                {
                  q: 'What is Grok Business and does it affect local recommendations?',
                  a: "Grok Business is an enterprise tier launched by xAI in early 2026 that provides organizations with advanced AI capabilities including Google Drive integration and enhanced search. While primarily an enterprise productivity tool, its launch signals xAI's commitment to commercial use cases and the growing role Grok plays in business discovery workflows.",
                },
                {
                  q: 'How quickly does Grok pick up on new business information?',
                  a: 'Grok has the most real-time capabilities of any major AI model. Because it processes the X data stream continuously, positive mentions, trending conversations, and viral posts about your business can influence Grok answers within hours rather than weeks. Web-crawled signals take longer to propagate, but the X layer provides near-instant responsiveness.',
                },
                {
                  q: 'Does social media activity on platforms other than X help with Grok visibility?',
                  a: 'Indirectly. Grok crawls the open web, so content from LinkedIn, Facebook, or Instagram that is publicly accessible and indexed can contribute to your overall web authority signals. However, X data carries disproportionate weight in Grok answers because of its direct data pipeline. Prioritize X if Grok visibility is a strategic goal, but maintain other platforms for broader AI coverage.',
                },
                {
                  q: 'Is Grok relevant for local businesses or only national brands?',
                  a: 'Grok is relevant for both, but its impact on local businesses is growing rapidly. As Grok becomes the default AI assistant across X and xAI products, users increasingly ask it for local recommendations. Businesses with a strong local web presence combined with active X engagement are already appearing in Grok answers for location-specific queries.',
                },
                {
                  q: 'What happens if someone posts negative things about my business on X?',
                  a: 'Grok processes sentiment, not just mentions. A pattern of negative X posts can influence Grok to deprioritize or add caveats to its recommendation of your business. The best defense is proactive reputation management: consistent positive engagement, prompt responses to complaints, and a steady flow of authentic customer advocacy on X.',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-xl p-6"
                  style={{ backgroundColor: '#1a1f2e', border: '1px solid rgba(255,106,0,0.12)' }}
                >
                  <h3 className="font-plus-jakarta font-bold text-white mb-3 pr-4">{item.q}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>

            <div className="ae-cta-inline mt-8 p-5 rounded-xl" style={{ backgroundColor: 'rgba(255,106,0,0.06)', border: '1px solid rgba(255,106,0,0.2)' }}>
              <p className="text-sm text-gray-300 mb-3">Have a specific question about your business&apos;s Grok visibility? Our team answers these every day.</p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:support@theanswerengine.ai"
                  className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-80"
                  style={{ color: '#FF6A00' }}
                >
                  Email support@theanswerengine.ai
                </a>
                <span className="text-gray-600 text-sm">or</span>
                <a
                  href="tel:+12134442229"
                  className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-80"
                  style={{ color: '#FF6A00' }}
                >
                  Call (213) 444-2229
                </a>
              </div>
            </div>
          </section>

          {/* Author Card */}
          <div
            className="ae-author-card rounded-xl p-6 mb-14"
            style={{ backgroundColor: '#1a1f2e', border: '1px solid rgba(255,106,0,0.15)' }}
          >
            <div className="flex items-start gap-4">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 font-plus-jakarta font-extrabold text-xl"
                style={{ backgroundColor: 'rgba(255,106,0,0.2)', color: '#FF6A00' }}
              >
                AE
              </div>
              <div>
                <p className="font-plus-jakarta font-bold text-white mb-1">The Answer Engine Team</p>
                <p className="text-xs text-gray-500 mb-2">Published April 1, 2026 · Platform Deep Dives</p>
                <p className="text-sm text-gray-400 leading-relaxed">
                  The Answer Engine is a Los Angeles-based AEO and AI visibility agency. We help local businesses get recommended by Grok, ChatGPT, Perplexity, Microsoft Copilot, Google AI Overviews, and every other major AI recommendation engine. Our team has audited hundreds of businesses across all AI platforms and built the playbook for winning in the AI-first era of local search.
                </p>
                <div className="flex flex-wrap gap-4 mt-3">
                  <a href="https://theanswerengine.ai" className="text-xs transition-colors hover:opacity-80" style={{ color: '#FF6A00' }}>theanswerengine.ai</a>
                  <a href="tel:+12134442229" className="text-xs transition-colors hover:opacity-80" style={{ color: '#FF6A00' }}>(213) 444-2229</a>
                  <a href="mailto:support@theanswerengine.ai" className="text-xs transition-colors hover:opacity-80" style={{ color: '#FF6A00' }}>support@theanswerengine.ai</a>
                </div>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div
            className="ae-final-cta rounded-2xl p-10 text-center relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(255,106,0,0.15) 0%, rgba(255,106,0,0.05) 50%, rgba(255,106,0,0.15) 100%)',
              border: '2px solid rgba(255,106,0,0.4)',
              boxShadow: '0 0 40px rgba(255,106,0,0.15), 0 0 80px rgba(255,106,0,0.05)',
            }}
          >
            <div
              className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse at center, rgba(255,106,0,0.08) 0%, transparent 70%)',
              }}
            />
            <div className="relative">
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6"
                style={{ backgroundColor: 'rgba(255,106,0,0.2)', color: '#FF6A00', border: '1px solid rgba(255,106,0,0.4)' }}
              >
                <span className="inline-block w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#FF6A00' }} />
                Free AI Visibility Assessment Available Now
              </div>

              <h2 className="font-plus-jakarta text-3xl md:text-4xl font-extrabold text-white mb-4">
                Stop Losing Customers to AI You Can&apos;t See
              </h2>

              <p className="text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed text-lg">
                Every day Grok goes unanswered in your category, a competitor collects the customers you should have. The fix is concrete, measurable, and faster than most businesses expect. Let us show you exactly what it takes to get cited.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
                <Link
                  href="/blindspot"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-white text-lg transition-all hover:opacity-90"
                  style={{
                    backgroundColor: '#FF6A00',
                    boxShadow: '0 0 20px rgba(255,106,0,0.4)',
                  }}
                >
                  Get Your Free Blind Spot Report
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
                <a
                  href="tel:+12134442229"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-base transition-all hover:opacity-80"
                  style={{ color: '#FF6A00', border: '2px solid rgba(255,106,0,0.4)', backgroundColor: 'rgba(255,106,0,0.08)' }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  (213) 444-2229
                </a>
                <a
                  href="mailto:support@theanswerengine.ai"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-base transition-all hover:opacity-80"
                  style={{ color: '#FF6A00', border: '2px solid rgba(255,106,0,0.4)', backgroundColor: 'rgba(255,106,0,0.08)' }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  support@theanswerengine.ai
                </a>
              </div>

              <p className="text-xs text-gray-500">
                No commitment. We audit your AI visibility across Grok, ChatGPT, Perplexity, Copilot, and Google AI and show you where you stand, for free.
              </p>
            </div>
          </div>

        </div>
      </main>
    </>
  )
}
