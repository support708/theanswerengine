import type { Metadata } from 'next'
import Link from 'next/link'

export const revalidate = 86400
export const dynamic = 'force-static'
export const dynamicParams = true

const title = 'What Happens When You Ask Alexa to Find a Business'
const description =
  'Amazon Alexa controls 70% of US smart speakers. Learn how Alexa finds and recommends local businesses, and why most companies never get mentioned.'
const slug = 'what-happens-when-you-ask-alexa-to-find-a-business'
const publishDate = '2026-03-30'

export const metadata: Metadata = {
  title: `${title} | The Answer Engine`,
  description,
  keywords: [
    'Alexa business recommendations',
    'Amazon Alexa local search',
    'voice search business optimization',
    'smart speaker business visibility',
    'Alexa Yelp business data',
    'how Alexa finds businesses',
    'voice assistant local business',
    'Amazon Echo business search',
    'Alexa answer engine',
    'AI voice search optimization',
    'smart speaker market 2026',
    'answer engine optimization',
  ],
  authors: [{ name: 'Justin Borges', url: 'https://theanswerengine.ai/about' }],
  openGraph: {
    title: `${title} | The Answer Engine`,
    description,
    type: 'article',
    publishedTime: publishDate,
    modifiedTime: publishDate,
    authors: ['https://theanswerengine.ai/about'],
    url: `https://theanswerengine.ai/blog/${slug}`,
    images: [
      {
        url: `https://theanswerengine.ai/blog/${slug}.webp`,
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
    siteName: 'The Answer Engine',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${title} | The Answer Engine`,
    description,
    images: [`https://theanswerengine.ai/blog/${slug}.webp`],
    creator: '@theanswerengine',
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
      image: {
        '@type': 'ImageObject',
        url: `https://theanswerengine.ai/blog/${slug}.webp`,
        width: 1200,
        height: 630,
      },
      datePublished: '2026-03-30T09:00:00-07:00',
      dateModified: '2026-03-30T09:00:00-07:00',
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
          name: 'How does Alexa decide which business to recommend?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Alexa pulls local business data primarily from Yelp and other trusted third-party directories. It evaluates factors like review ratings, review volume, business category accuracy, and data consistency across directories to decide which business to name in a voice response. You cannot directly submit your business to Alexa.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I list my business directly on Amazon Alexa?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Unlike Google or Bing, Amazon Alexa does not offer a direct business listing portal. Alexa aggregates data from trusted third-party sources, primarily Yelp, along with other directory and data aggregator platforms. The way to influence Alexa is to optimize your presence on the directories it trusts.',
          },
        },
        {
          '@type': 'Question',
          name: 'What percentage of the smart speaker market does Amazon Echo have?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Amazon Echo holds approximately 70.6% of the US smart speaker market by installed base. This dominant penetration means Alexa is the most common voice assistant used in American homes for local business queries. The smart speaker market overall is valued at roughly $17.78 billion in 2026.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does Alexa use Google reviews when recommending businesses?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Alexa primarily pulls review data from Yelp, not Google. A business with hundreds of Google reviews but no Yelp presence may be invisible to Alexa entirely. This is why a multi-platform review strategy matters for voice search visibility.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do customer reviews affect Alexa business recommendations?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Customer reviews and ratings are among the most influential factors in Alexa recommendations. Since Alexa can only give one or two spoken answers, it heavily favors businesses with high ratings, recent review activity, and strong review volume on the platforms it trusts, especially Yelp.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does structured data on my website help Alexa find my business?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Structured data (schema markup) helps all AI and voice platforms understand your business information more clearly. While Alexa pulls primarily from directories rather than crawling websites directly, the directories themselves use structured data to verify and enrich listings. Consistent structured data across your web presence reinforces the trust signals Alexa relies on.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is Alexa losing ground to Google Assistant for local search?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Not in the US home speaker market. While Google Assistant holds roughly 38% of the global voice assistant market share by category, Amazon Echo maintains over 70% of US smart speaker penetration. The Alexa segment is growing at approximately 15% annually. Both platforms matter, but Alexa remains the dominant in-home voice search device in America.',
          },
        },
      ],
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
          name: title,
          item: `https://theanswerengine.ai/blog/${slug}`,
        },
      ],
    },
    {
      '@type': 'Organization',
      '@id': 'https://theanswerengine.ai/#organization',
      name: 'The Answer Engine',
      url: 'https://theanswerengine.ai',
      logo: {
        '@type': 'ImageObject',
        url: 'https://theanswerengine.ai/TheAnswerEngine_white.png',
        width: 600,
        height: 60,
      },
      description: 'Answer Engine Optimization agency helping businesses get cited by AI platforms.',
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
        <li className="text-gray-300 truncate max-w-xs">{title}</li>
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

      <main className="min-h-screen bg-[#FFF] text-[#E5E7EB]">

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
            viewBox="0 0 800 400"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="hero-grid-100"
                x="0"
                y="0"
                width="48"
                height="48"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 48 0 L 0 0 0 48"
                  fill="none"
                  stroke="#F27D24"
                  strokeWidth="0.5"
                />
                {/* Voice wave shapes */}
                <circle cx="24" cy="24" r="6" fill="none" stroke="#F27D24" strokeWidth="0.3" opacity="0.5" />
                <circle cx="24" cy="24" r="12" fill="none" stroke="#F27D24" strokeWidth="0.2" opacity="0.3" />
                <circle cx="24" cy="24" r="18" fill="none" stroke="#F27D24" strokeWidth="0.15" opacity="0.2" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-grid-100)" />
          </svg>

          <div className="relative max-w-4xl mx-auto px-6 py-20">
            <Breadcrumb />

            <div className="flex items-center gap-3 mb-6">
              <span
                className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full"
                style={{ backgroundColor: 'rgba(255,106,0,0.15)', color: '#F27D24', border: '1px solid rgba(255,106,0,0.3)' }}
              >
                Platform Deep Dives
              </span>
              <span className="text-xs text-gray-500">March 30, 2026</span>
              <span className="text-xs text-gray-500">12 min read</span>
            </div>

            <h1
              className="font-plus-jakarta text-4xl md:text-5xl font-extrabold leading-tight mb-6"
              style={{ color: '#FFFFFF' }}
            >
              What Happens When You Ask Alexa to{' '}
              <span style={{ color: '#F27D24' }}>Find a Business</span>
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-3xl">
              Over 70% of US smart speakers are Amazon Echos. When someone in your city says &quot;Alexa, find a plumber near me,&quot; Alexa gives one answer. Maybe two. If that answer is not your business, you never existed in that customer&apos;s world. Here is what actually happens behind the scenes, and why most businesses never get named.
            </p>

            {/* Inline CTA */}
            <div className="ae-cta-inline flex flex-wrap items-center gap-4 mb-4">
              <Link
                href="/blindspot"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white transition-all hover:opacity-90"
                style={{ backgroundColor: '#F27D24' }}
              >
                Check Your Voice Search Visibility
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
              <a
                href="tel:+12134442229"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all hover:opacity-90"
                style={{ backgroundColor: 'rgba(255,106,0,0.1)', color: '#F27D24', border: '1px solid rgba(255,106,0,0.3)' }}
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
              <div className="ae-stat-emoji text-2xl mb-2">🔊</div>
              <div className="ae-stat-value ae-accent font-plus-jakarta text-3xl font-extrabold mb-1" style={{ color: '#F27D24' }}>70.6%</div>
              <div className="ae-stat-label text-xs text-gray-400 leading-snug">US smart speaker market held by Amazon Echo</div>
              <div className="ae-stat-source text-[10px] text-gray-600 mt-1">eMarketer 2026</div>
            </div>
            <div
              className="ae-stat-card rounded-xl p-5 text-center"
              style={{ backgroundColor: 'rgba(255,106,0,0.08)', border: '1px solid rgba(255,106,0,0.2)' }}
            >
              <div className="ae-stat-emoji text-2xl mb-2">💰</div>
              <div className="ae-stat-value ae-accent font-plus-jakarta text-3xl font-extrabold mb-1" style={{ color: '#F27D24' }}>$17.8B</div>
              <div className="ae-stat-label text-xs text-gray-400 leading-snug">Global smart speaker market value in 2026</div>
              <div className="ae-stat-source text-[10px] text-gray-600 mt-1">Grand View Research</div>
            </div>
            <div
              className="ae-stat-card rounded-xl p-5 text-center"
              style={{ backgroundColor: 'rgba(255,106,0,0.08)', border: '1px solid rgba(255,106,0,0.2)' }}
            >
              <div className="ae-stat-emoji text-2xl mb-2">📈</div>
              <div className="ae-stat-value ae-accent font-plus-jakarta text-3xl font-extrabold mb-1" style={{ color: '#F27D24' }}>14.9%</div>
              <div className="ae-stat-label text-xs text-gray-400 leading-snug">Alexa segment annual growth rate (CAGR)</div>
              <div className="ae-stat-source text-[10px] text-gray-600 mt-1">Mordor Intelligence</div>
            </div>
            <div
              className="ae-stat-card rounded-xl p-5 text-center"
              style={{ backgroundColor: 'rgba(255,106,0,0.08)', border: '1px solid rgba(255,106,0,0.2)' }}
            >
              <div className="ae-stat-emoji text-2xl mb-2">🏢</div>
              <div className="ae-stat-value ae-accent font-plus-jakarta text-3xl font-extrabold mb-1" style={{ color: '#F27D24' }}>~300</div>
              <div className="ae-stat-label text-xs text-gray-400 leading-snug">Directories that feed voice assistant data pipelines</div>
              <div className="ae-stat-source text-[10px] text-gray-600 mt-1">BrightLocal 2026</div>
            </div>
          </section>

          {/* Table of Contents */}
          <nav
            className="ae-toc rounded-xl p-6 mb-12"
            style={{ backgroundColor: '#1a1f2e', border: '1px solid rgba(255,106,0,0.15)' }}
            aria-label="Table of Contents"
          >
            <h2 className="font-plus-jakarta text-lg font-bold mb-4" style={{ color: '#F27D24' }}>
              In This Article
            </h2>
            <ol className="space-y-2 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <span style={{ color: '#F27D24' }}>01</span>
                <a href="#what-alexa-does" className="hover:text-orange-400 transition-colors">What Actually Happens When You Ask Alexa for a Business</a>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: '#F27D24' }}>02</span>
                <a href="#where-alexa-pulls-data" className="hover:text-orange-400 transition-colors">Where Alexa Pulls Its Business Data</a>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: '#F27D24' }}>03</span>
                <a href="#trust-signals" className="hover:text-orange-400 transition-colors">The Trust Signals That Determine Who Gets Named</a>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: '#F27D24' }}>04</span>
                <a href="#alexa-vs-others" className="hover:text-orange-400 transition-colors">Alexa vs Siri vs Google Assistant: How They Differ</a>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: '#F27D24' }}>05</span>
                <a href="#who-wins" className="hover:text-orange-400 transition-colors">Who Wins in Alexa Recommendations (and Who Disappears)</a>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: '#F27D24' }}>06</span>
                <a href="#decision-matrix" className="hover:text-orange-400 transition-colors">Decision Matrix: Is Alexa Finding Your Business?</a>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: '#F27D24' }}>07</span>
                <a href="#cheat-sheet" className="hover:text-orange-400 transition-colors">Alexa Visibility Cheat Sheet</a>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: '#F27D24' }}>08</span>
                <a href="#faq" className="hover:text-orange-400 transition-colors">Frequently Asked Questions</a>
              </li>
            </ol>
          </nav>

          {/* Section 1: What Alexa Does */}
          <section id="what-alexa-does" className="mb-14">
            <div className="ae-section-label text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#F27D24' }}>Section 01</div>
            <h2 className="font-plus-jakarta text-3xl font-bold mb-6" style={{ color: '#FFFFFF' }}>
              What Actually Happens When You Ask Alexa for a Business
            </h2>

            <p className="text-gray-300 leading-relaxed mb-5">
              Someone stands in their kitchen and says, &quot;Alexa, find a locksmith near me.&quot; What follows is not a web search. There is no screen full of blue links. No map pack. No scrolling. Alexa processes the request, evaluates data from multiple sources, selects the single best match, and speaks one name out loud. Maybe two. That is it.
            </p>

            <p className="text-gray-300 leading-relaxed mb-5">
              This is the fundamental difference between voice search and traditional search. On Google, ten businesses share page one. On Alexa, one business gets the recommendation. The economics are brutal: if you are that one business, you get the call. If you are not, the customer never knew you existed. There is no &quot;second page&quot; to scroll to, no ad to buy, no alternative result to click.
            </p>

            {/* Callout: Info */}
            <div
              className="ae-callout ae-callout-info rounded-xl p-6 my-8"
              style={{ backgroundColor: 'rgba(59,130,246,0.08)', border: '1px solid rgba(59,130,246,0.25)' }}
            >
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#3B82F6' }} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" /></svg>
                <div>
                  <p className="font-semibold mb-1" style={{ color: '#93C5FD' }}>Voice Search Is Winner-Take-All</p>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    With screen-based search, businesses compete for attention across a results page. With voice search through Alexa, there is exactly one winner per query. The stakes are binary: named or invisible. This makes the signals Alexa evaluates disproportionately important compared to traditional SEO.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed mb-5">
              With Amazon Echo controlling over 70% of US smart speaker penetration and the broader smart speaker market valued at roughly $17.78 billion in 2026, this is not a niche channel. Millions of Americans ask Alexa for local business recommendations daily. The Alexa segment alone is growing at nearly 15% annually. If your business is not in Alexa&apos;s data pipeline, you are losing customers you will never know about.
            </p>

            {/* Quote */}
            <div
              className="ae-quote rounded-xl p-6 my-8 border-l-4"
              style={{ backgroundColor: 'rgba(255,106,0,0.06)', borderLeftColor: '#F27D24' }}
            >
              <p className="text-gray-200 italic leading-relaxed mb-2">
                &quot;The businesses that win in voice search are the ones that control what the algorithm sees. Not what the customer searches for.&quot;
              </p>
              <p className="text-xs text-gray-500">Justin Borges</p>
            </div>

            {/* Inline CTA */}
            <div className="ae-cta-inline my-8 p-5 rounded-xl" style={{ backgroundColor: 'rgba(255,106,0,0.06)', border: '1px solid rgba(255,106,0,0.2)' }}>
              <p className="text-sm text-gray-300 mb-3">Not sure if Alexa can even find your business right now? We audit your visibility across every major voice and AI platform.</p>
              <Link
                href="/blindspot"
                className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-80"
                style={{ color: '#F27D24' }}
              >
                Get Your Free AI Visibility Audit
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </section>

          {/* Section 2: Where Alexa Pulls Data */}
          <section id="where-alexa-pulls-data" className="mb-14">
            <div className="ae-section-label text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#F27D24' }}>Section 02</div>
            <h2 className="font-plus-jakarta text-3xl font-bold mb-6" style={{ color: '#FFFFFF' }}>
              Where Alexa Pulls Its Business Data
            </h2>

            <p className="text-gray-300 leading-relaxed mb-5">
              Here is the critical insight most businesses miss: you cannot list your business on Alexa directly. There is no &quot;Amazon Alexa Business Profile&quot; to claim. No dashboard to log into. No listing to manage. Alexa does not work like Google Business Profile or Bing Places. It pulls its local business data from trusted third-party sources, and the primary one is Yelp.
            </p>

            <p className="text-gray-300 leading-relaxed mb-5">
              When someone asks Alexa for a recommendation, the system queries its knowledge layer, which is built from aggregated directory data. Yelp is the backbone, but Alexa also cross-references information from other major data aggregators and directories. The exact mix is proprietary, but what we know from testing is clear: if your business does not exist on Yelp with accurate, complete, well-reviewed data, your chances of being named by Alexa are close to zero.
            </p>

            {/* Callout: Warning */}
            <div
              className="ae-callout ae-callout-warning rounded-xl p-6 my-8"
              style={{ backgroundColor: 'rgba(234,179,8,0.08)', border: '1px solid rgba(234,179,8,0.25)' }}
            >
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#EAB308' }} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
                <div>
                  <p className="font-semibold mb-1" style={{ color: '#FCD34D' }}>The Yelp Blind Spot That Costs You Voice Customers</p>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    Many businesses have abandoned Yelp in favor of Google reviews. Understandable, given Google&apos;s dominance in traditional search. But Alexa does not care about your Google reviews. It relies on Yelp. If your Yelp profile is unclaimed, outdated, or poorly reviewed, Alexa will recommend your competitor every single time someone asks.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed mb-5">
              Beyond Yelp, Alexa&apos;s data pipeline touches roughly 300 directories and data aggregators that feed information into voice assistant ecosystems. These include the major data aggregators, industry-specific directories, and local business data platforms. Consistency across all of them matters. When your business name, address, or phone number varies across these sources, Alexa&apos;s confidence in your data drops. Low confidence means low priority in recommendations.
            </p>

            {/* Takeaway */}
            <div
              className="ae-takeaway rounded-xl p-6 my-8"
              style={{ backgroundColor: 'rgba(255,106,0,0.06)', border: '1px solid rgba(255,106,0,0.2)' }}
            >
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#F27D24' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <div>
                  <p className="font-semibold mb-1" style={{ color: '#F27D24' }}>Key Takeaway</p>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    Alexa&apos;s data pipeline is indirect. You influence it by controlling the sources it trusts. The businesses that dominate Alexa recommendations are the ones that have solved the upstream data consistency problem across hundreds of directories. This is not something most businesses can brute-force alone.
                  </p>
                </div>
              </div>
            </div>

            <div className="ae-cta-inline my-8 p-5 rounded-xl" style={{ backgroundColor: 'rgba(255,106,0,0.06)', border: '1px solid rgba(255,106,0,0.2)' }}>
              <p className="text-sm text-gray-300 mb-3">Want to understand which directories actually matter for AI and voice search? Read our deep dive.</p>
              <Link
                href="/blog/directory-listings-that-help-ai-find-business"
                className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-80"
                style={{ color: '#F27D24' }}
              >
                Directory Listings That Help AI Find Your Business
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>

            <p className="text-gray-300 leading-relaxed mb-5">
              To understand why data consistency matters so much, it helps to think about how Alexa&apos;s knowledge layer is actually structured. At the outermost layer sits the real-time query interpreter — this is where your spoken request gets parsed into a business category, intent, and location. That parsed intent then passes to the local resolution layer, which matches the query against its cached business index. The businesses in that index were not placed there by their owners. They were promoted into it by the aggregated weight of signals Alexa collected from its data sources over weeks and months. Getting into that index requires sustained, consistent signal pressure from multiple trusted sources simultaneously.
            </p>

            <p className="text-gray-300 leading-relaxed mb-5">
              Beneath the local resolution layer sits what Amazon internally refers to as the entity confidence model. This is the scoring system that decides how certain Alexa is that a business record is accurate, active, and trustworthy. Each time a directory source confirms your business name, address, phone number, and category, that confirmation raises your entity confidence score. Each time a source contradicts another — a different phone number on Yelp versus a data aggregator, for example — that contradiction lowers the score. Alexa will not surface a business with a low entity confidence score in a spoken recommendation, even if that business has strong ratings on Yelp. Confidence in the data comes before confidence in the quality of the business.
            </p>

            <p className="text-gray-300 leading-relaxed mb-5">
              The deepest layer is the recency and activity signal. Alexa&apos;s index is not static. It continuously re-evaluates business records as new data flows in from its source network. A business that was well-represented six months ago but has gone quiet — no new reviews, no updated hours, no activity on the directories that feed Alexa&apos;s pipeline — will gradually lose priority to competitors who are maintaining active data signals. This is why one-time optimization rarely holds. The businesses that remain visible in Alexa recommendations are the ones treating their data presence as an ongoing infrastructure problem, not a one-time setup task.
            </p>
          </section>

          {/* Section 3: Trust Signals */}
          <section id="trust-signals" className="mb-14">
            <div className="ae-section-label text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#F27D24' }}>Section 03</div>
            <h2 className="font-plus-jakarta text-3xl font-bold mb-6" style={{ color: '#FFFFFF' }}>
              The Trust Signals That Determine Who Gets Named
            </h2>

            <p className="text-gray-300 leading-relaxed mb-8">
              Alexa cannot show ten results and let the user decide. It has to pick one. That means its selection criteria are strict. Through extensive testing across hundreds of business categories, we have identified the signal layers Alexa evaluates before it speaks a business name.
            </p>

            {/* Signal Cards */}
            <div className="grid md:grid-cols-2 gap-5 mb-8">
              <div
                className="rounded-xl p-6"
                style={{ backgroundColor: '#1a1f2e', border: '1px solid rgba(255,106,0,0.15)' }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: 'rgba(255,106,0,0.15)' }}
                >
                  <svg className="w-5 h-5" style={{ color: '#F27D24' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
                </div>
                <h3 className="font-plus-jakarta font-bold text-white mb-2">1. Review Quality and Volume</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Ratings and review count on Yelp are the heaviest signals. A business with 4.5 stars and 200 reviews on Yelp will be named over a business with 5 stars and 3 reviews. Recency matters too. Stale review profiles signal a potentially closed or declining business.
                </p>
              </div>

              <div
                className="rounded-xl p-6"
                style={{ backgroundColor: '#1a1f2e', border: '1px solid rgba(255,106,0,0.15)' }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: 'rgba(255,106,0,0.15)' }}
                >
                  <svg className="w-5 h-5" style={{ color: '#F27D24' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                </div>
                <h3 className="font-plus-jakarta font-bold text-white mb-2">2. Data Consistency (Trust)</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  When your name, address, and phone number are identical across Yelp, YellowPages, BBB, and dozens of other directories, Alexa&apos;s confidence score is high. Mismatches create distrust. Even small differences (suite number variations, abbreviations) can reduce your reliability score in the data pipeline.
                </p>
              </div>

              <div
                className="rounded-xl p-6"
                style={{ backgroundColor: '#1a1f2e', border: '1px solid rgba(255,106,0,0.15)' }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: 'rgba(255,106,0,0.15)' }}
                >
                  <svg className="w-5 h-5" style={{ color: '#F27D24' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                </div>
                <h3 className="font-plus-jakarta font-bold text-white mb-2">3. Category Authority</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Alexa needs to match your business to the query category. If someone asks for &quot;an Italian restaurant,&quot; your primary category on Yelp and other directories must clearly signal that. Vague or incorrect categories mean Alexa will not consider you for category-specific queries, even if your food is excellent.
                </p>
              </div>

              <div
                className="rounded-xl p-6"
                style={{ backgroundColor: '#1a1f2e', border: '1px solid rgba(255,106,0,0.15)' }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: 'rgba(255,106,0,0.15)' }}
                >
                  <svg className="w-5 h-5" style={{ color: '#F27D24' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" /></svg>
                </div>
                <h3 className="font-plus-jakarta font-bold text-white mb-2">4. Structured Data Signals</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Schema markup on your website helps the entire ecosystem of AI and voice platforms understand your business. While Alexa does not crawl your site directly, the directories it trusts do reference structured data. Clean, complete schema markup reinforces the accuracy signals Alexa relies on.
                </p>
              </div>
            </div>

            {/* Callout: Success */}
            <div
              className="ae-callout ae-callout-success rounded-xl p-6 my-8"
              style={{ backgroundColor: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.25)' }}
            >
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#22C55E' }} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                <div>
                  <p className="font-semibold mb-1" style={{ color: '#86EFAC' }}>The Review Multiplier Effect</p>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    Reviews on Yelp do double duty. They influence Alexa directly, and they also show up in Bing search results (which power both Copilot and ChatGPT). A strong Yelp review profile does not just win voice search. It strengthens your entire AI visibility footprint. Most businesses underinvest here because they are focused solely on Google reviews.
                  </p>
                </div>
              </div>
            </div>

            <div className="ae-cta-inline my-8 p-5 rounded-xl" style={{ backgroundColor: 'rgba(255,106,0,0.06)', border: '1px solid rgba(255,106,0,0.2)' }}>
              <p className="text-sm text-gray-300 mb-3">Our team has mapped exactly which signals each voice assistant prioritizes. The overlap is real, but so are the gaps.</p>
              <a
                href="mailto:support@theanswerengine.ai"
                className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-80"
                style={{ color: '#F27D24' }}
              >
                Email Us for a Full Voice Search Signal Audit
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </a>
            </div>
          </section>

          {/* Section 4: Alexa vs Others */}
          <section id="alexa-vs-others" className="mb-14">
            <div className="ae-section-label text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#F27D24' }}>Section 04</div>
            <h2 className="font-plus-jakarta text-3xl font-bold mb-6" style={{ color: '#FFFFFF' }}>
              Alexa vs Siri vs Google Assistant: How They Differ
            </h2>

            <p className="text-gray-300 leading-relaxed mb-8">
              All three major voice assistants answer local business queries. But they pull data from fundamentally different sources and weigh different signals. Assuming what works for Google Assistant works for Alexa is one of the most expensive mistakes a local business can make.
            </p>

            {/* Comparison Table */}
            <div className="ae-comparison-table overflow-x-auto mb-10 rounded-xl" style={{ border: '1px solid rgba(255,106,0,0.2)' }}>
              <table className="w-full text-sm">
                <caption className="sr-only">Table: Alexa, Siri, and Google Assistant comparison</caption>
                <thead>
                  <tr style={{ backgroundColor: 'rgba(255,106,0,0.12)' }}>
                    <th className="text-left p-4 font-plus-jakarta font-semibold text-white">Feature</th>
                    <th className="text-left p-4 font-plus-jakarta font-semibold" style={{ color: '#F27D24' }}>Amazon Alexa</th>
                    <th className="text-left p-4 font-plus-jakarta font-semibold text-gray-300">Apple Siri</th>
                    <th className="text-left p-4 font-plus-jakarta font-semibold text-gray-300">Google Assistant</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderTop: '1px solid rgba(255,106,0,0.1)' }}>
                    <td className="p-4 text-gray-400 font-medium">Primary Data Source</td>
                    <td className="p-4 text-gray-200">Yelp + directory aggregators</td>
                    <td className="p-4 text-gray-400">Apple Maps + Apple Business Connect</td>
                    <td className="p-4 text-gray-400">Google Business Profile + Google Maps</td>
                  </tr>
                  <tr style={{ borderTop: '1px solid rgba(255,106,0,0.1)', backgroundColor: 'rgba(255,255,255,0.02)' }}>
                    <td className="p-4 text-gray-400 font-medium">Direct Listing Available?</td>
                    <td className="p-4 text-gray-200">No (indirect only)</td>
                    <td className="p-4 text-gray-400">Yes (Apple Business Connect)</td>
                    <td className="p-4 text-gray-400">Yes (Google Business Profile)</td>
                  </tr>
                  <tr style={{ borderTop: '1px solid rgba(255,106,0,0.1)' }}>
                    <td className="p-4 text-gray-400 font-medium">US Speaker Market Share</td>
                    <td className="p-4 text-gray-200">~70.6% (dominant)</td>
                    <td className="p-4 text-gray-400">~5% (HomePod)</td>
                    <td className="p-4 text-gray-400">~24% (Nest speakers)</td>
                  </tr>
                  <tr style={{ borderTop: '1px solid rgba(255,106,0,0.1)', backgroundColor: 'rgba(255,255,255,0.02)' }}>
                    <td className="p-4 text-gray-400 font-medium">Review Platform Weight</td>
                    <td className="p-4 text-gray-200">Yelp (heavy), others secondary</td>
                    <td className="p-4 text-gray-400">Apple Maps reviews, Yelp</td>
                    <td className="p-4 text-gray-400">Google Reviews (dominant)</td>
                  </tr>
                  <tr style={{ borderTop: '1px solid rgba(255,106,0,0.1)' }}>
                    <td className="p-4 text-gray-400 font-medium">Global Assistant Category Share</td>
                    <td className="p-4 text-gray-200">Growing at 14.9% CAGR</td>
                    <td className="p-4 text-gray-400">~25% (Apple ecosystem)</td>
                    <td className="p-4 text-gray-400">~38.5% (global leader)</td>
                  </tr>
                  <tr style={{ borderTop: '1px solid rgba(255,106,0,0.1)', backgroundColor: 'rgba(255,255,255,0.02)' }}>
                    <td className="p-4 text-gray-400 font-medium">Key Optimization Lever</td>
                    <td className="p-4 text-gray-200">Yelp profile + citation consistency</td>
                    <td className="p-4 text-gray-400">Apple Business Connect + Apple Maps</td>
                    <td className="p-4 text-gray-400">GBP completeness + Google Reviews</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-300 leading-relaxed mb-5">
              The pattern is clear: each voice assistant has a different &quot;front door.&quot; Google Assistant trusts Google data. Siri trusts Apple data. Alexa trusts Yelp and directory data. A business that only optimizes for Google is invisible to two out of three major voice assistants, including the one that owns the majority of smart speakers in American homes.
            </p>

            <div className="ae-cta-inline my-8 p-5 rounded-xl" style={{ backgroundColor: 'rgba(255,106,0,0.06)', border: '1px solid rgba(255,106,0,0.2)' }}>
              <p className="text-sm text-gray-300 mb-3">See our full breakdown of how Siri evaluates businesses differently from Alexa and Google Assistant.</p>
              <Link
                href="/blog/how-siri-decides-which-businesses-to-suggest"
                className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-80"
                style={{ color: '#F27D24' }}
              >
                How Siri Decides Which Businesses to Suggest
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </section>

          {/* Section 5: Who Wins */}
          <section id="who-wins" className="mb-14">
            <div className="ae-section-label text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#F27D24' }}>Section 05</div>
            <h2 className="font-plus-jakarta text-3xl font-bold mb-6" style={{ color: '#FFFFFF' }}>
              Who Wins in Alexa Recommendations (and Who Disappears)
            </h2>

            <p className="text-gray-300 leading-relaxed mb-8">
              After testing voice queries across dozens of business categories in multiple US markets, the pattern is consistent. The businesses Alexa names share specific characteristics. The ones it ignores share equally clear gaps.
            </p>

            {/* Pros/Cons Section */}
            <div className="ae-pros-cons grid md:grid-cols-2 gap-6 mb-10">
              <div
                className="rounded-xl p-6"
                style={{ backgroundColor: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.2)' }}
              >
                <h3 className="font-plus-jakarta font-bold mb-4 flex items-center gap-2" style={{ color: '#22C55E' }}>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  Businesses Alexa Names
                </h3>
                <ul className="space-y-3">
                  {[
                    'Claimed and complete Yelp profile with accurate categories',
                    'High ratings (4.0+) with substantial review volume on Yelp',
                    'Consistent NAP data across 50+ citation directories',
                    'Recent review activity within the last 90 days',
                    'Clear, specific business categories on all directory listings',
                    'Structured data on their website reinforcing business details',
                    'Presence on major data aggregators that feed voice ecosystems',
                    'Owner-responded reviews showing active business engagement',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-300">
                      <svg className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#22C55E' }} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className="rounded-xl p-6"
                style={{ backgroundColor: 'rgba(239,68,68,0.06)', border: '1px solid rgba(239,68,68,0.2)' }}
              >
                <h3 className="font-plus-jakarta font-bold mb-4 flex items-center gap-2" style={{ color: '#EF4444' }}>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" /></svg>
                  Businesses Alexa Ignores
                </h3>
                <ul className="space-y-3">
                  {[
                    'No Yelp profile or unclaimed Yelp listing with outdated info',
                    'Strong Google reviews but zero presence on Yelp',
                    'Inconsistent business name or phone number across directories',
                    'No reviews in the last 6 months on directory platforms',
                    'Vague or miscategorized business listings',
                    'No presence on major data aggregators',
                    'Website with no structured data or schema markup',
                    'Duplicate listings creating data conflicts',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-300">
                      <svg className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#EF4444' }} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Callout: Orange */}
            <div
              className="ae-callout ae-callout-orange rounded-xl p-6 my-8"
              style={{ backgroundColor: 'rgba(255,106,0,0.08)', border: '1px solid rgba(255,106,0,0.3)' }}
            >
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#F27D24' }} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" /></svg>
                <div>
                  <p className="font-semibold mb-1" style={{ color: '#F27D24' }}>The Upstream Data Problem Nobody Talks About</p>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    The businesses that win with Alexa are not doing one thing well. They have solved the data consistency problem across hundreds of sources simultaneously. That is the real competitive moat. It is not about being on Yelp. It is about having clean, consistent, authoritative data everywhere Alexa looks. Fixing this at scale is what separates businesses that get named from those that get skipped.
                  </p>
                </div>
              </div>
            </div>

            <div className="ae-cta-inline my-8 p-5 rounded-xl" style={{ backgroundColor: 'rgba(255,106,0,0.06)', border: '1px solid rgba(255,106,0,0.2)' }}>
              <p className="text-sm text-gray-300 mb-3">Want to know how voice assistants and AI platforms like ChatGPT choose between you and your competitors?</p>
              <Link
                href="/blog/how-do-i-get-my-business-found-voice-search-ai"
                className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-80"
                style={{ color: '#F27D24' }}
              >
                How Do I Get My Business Found in Voice Search and AI?
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </section>

          {/* Section 6: Decision Matrix */}
          <section id="decision-matrix" className="mb-14">
            <div className="ae-section-label text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#F27D24' }}>Section 06</div>
            <h2 className="font-plus-jakarta text-3xl font-bold mb-6" style={{ color: '#FFFFFF' }}>
              Decision Matrix: Is Alexa Finding Your Business?
            </h2>

            <p className="text-gray-300 leading-relaxed mb-8">
              Use this matrix to gauge where you stand on the signals that matter most for Alexa recommendations. Be honest with yourself. This is about where you are today, not where you intend to be.
            </p>

            <div className="ae-decision-matrix overflow-x-auto rounded-xl" style={{ border: '1px solid rgba(255,106,0,0.2)' }}>
              <table className="w-full text-sm">
                <caption className="sr-only">Table: Alexa readiness signal evaluation</caption>
                <thead>
                  <tr style={{ backgroundColor: 'rgba(255,106,0,0.12)' }}>
                    <th className="text-left p-4 font-plus-jakarta font-semibold text-white">Signal Area</th>
                    <th className="text-left p-4 font-plus-jakarta font-semibold text-red-400">Invisible to Alexa</th>
                    <th className="text-left p-4 font-plus-jakarta font-semibold text-yellow-400">Partial Visibility</th>
                    <th className="text-left p-4 font-plus-jakarta font-semibold text-green-400">Alexa-Ready</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      area: 'Yelp Presence',
                      notReady: 'No profile or unclaimed',
                      partial: 'Claimed, basic info, few reviews',
                      ready: 'Complete profile, 50+ recent reviews, 4.0+ stars',
                    },
                    {
                      area: 'Directory Coverage',
                      notReady: 'Only on Google',
                      partial: '5-10 directories, some mismatches',
                      ready: '50+ directories, consistent NAP everywhere',
                    },
                    {
                      area: 'Review Recency',
                      notReady: 'No reviews in 6+ months',
                      partial: 'Some recent reviews on 1-2 platforms',
                      ready: 'Fresh reviews monthly across multiple platforms',
                    },
                    {
                      area: 'Business Categories',
                      notReady: 'Miscategorized or vague',
                      partial: 'Correct primary, missing secondary',
                      ready: 'Accurate primary + secondary on all listings',
                    },
                    {
                      area: 'NAP Consistency',
                      notReady: 'Multiple conflicting versions',
                      partial: 'Mostly consistent, a few old listings off',
                      ready: 'Identical across all 50+ citations',
                    },
                    {
                      area: 'Structured Data',
                      notReady: 'No schema markup',
                      partial: 'Basic LocalBusiness schema only',
                      ready: 'Full schema with services, geo, hours, reviews',
                    },
                    {
                      area: 'Data Aggregator Presence',
                      notReady: 'Not on any aggregators',
                      partial: '1-2 aggregators submitted',
                      ready: 'All major aggregators synced and verified',
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
              <p className="text-sm text-gray-300 mb-3">If you scored &quot;Invisible&quot; or &quot;Partial&quot; in three or more areas, Alexa is almost certainly not recommending your business. That gap is sending customers to your competitors every day.</p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/blindspot"
                  className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-lg text-white transition-all hover:opacity-90"
                  style={{ backgroundColor: '#F27D24' }}
                >
                  Get Your Full Alexa Readiness Score
                </Link>
                <a
                  href="tel:+12134442229"
                  className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-80"
                  style={{ color: '#F27D24' }}
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
              <h3 className="font-plus-jakarta font-bold text-white mb-4">Related Reading: Voice and AI Platform Deep Dives</h3>
              <div className="grid md:grid-cols-4 gap-4">
                <Link
                  href="/blog/how-siri-decides-which-businesses-to-suggest"
                  className="block p-4 rounded-lg transition-all hover:border-orange-500"
                  style={{ backgroundColor: 'rgba(255,106,0,0.05)', border: '1px solid rgba(255,106,0,0.1)' }}
                >
                  <p className="text-xs uppercase tracking-wide mb-1" style={{ color: '#F27D24' }}>Platform Deep Dive</p>
                  <p className="text-sm font-semibold text-white leading-snug">How Siri Decides Which Businesses to Suggest</p>
                </Link>
                <Link
                  href="/blog/directory-listings-that-help-ai-find-business"
                  className="block p-4 rounded-lg transition-all hover:border-orange-500"
                  style={{ backgroundColor: 'rgba(255,106,0,0.05)', border: '1px solid rgba(255,106,0,0.1)' }}
                >
                  <p className="text-xs uppercase tracking-wide mb-1" style={{ color: '#F27D24' }}>Directory Strategy</p>
                  <p className="text-sm font-semibold text-white leading-snug">Directory Listings That Help AI Find Your Business</p>
                </Link>
                <Link
                  href="/blog/how-do-i-get-my-business-found-voice-search-ai"
                  className="block p-4 rounded-lg transition-all hover:border-orange-500"
                  style={{ backgroundColor: 'rgba(255,106,0,0.05)', border: '1px solid rgba(255,106,0,0.1)' }}
                >
                  <p className="text-xs uppercase tracking-wide mb-1" style={{ color: '#F27D24' }}>Voice Search Guide</p>
                  <p className="text-sm font-semibold text-white leading-snug">How Do I Get My Business Found in Voice Search and AI?</p>
                </Link>
                <Link
                  href="/blog/how-ai-platforms-choose-businesses-to-cite"
                  className="block p-4 rounded-lg transition-all hover:border-orange-500"
                  style={{ backgroundColor: 'rgba(255,106,0,0.05)', border: '1px solid rgba(255,106,0,0.1)' }}
                >
                  <p className="text-xs uppercase tracking-wide mb-1" style={{ color: '#F27D24' }}>AI Platform Signals</p>
                  <p className="text-sm font-semibold text-white leading-snug">How AI Platforms Choose Which Businesses to Cite</p>
                </Link>
              </div>
            </div>
          </section>

          {/* Section 7: Cheat Sheet */}
          <section id="cheat-sheet" className="mb-14">
            <div className="ae-section-label text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#F27D24' }}>Section 07</div>
            <h2 className="font-plus-jakarta text-3xl font-bold mb-6" style={{ color: '#FFFFFF' }}>
              Alexa Visibility Cheat Sheet
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
                  <svg className="w-5 h-5" style={{ color: '#F27D24' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
                </div>
                <h3 className="font-plus-jakarta text-xl font-bold text-white">Amazon Alexa Optimization Quick Reference</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3" style={{ color: '#F27D24' }}>Foundation (Do These First)</h4>
                  <ul className="space-y-2">
                    {[
                      'Claim and fully complete your Yelp Business profile',
                      'Ensure your Yelp categories match your actual services exactly',
                      'Add professional photos, hours, and all business details to Yelp',
                      'Verify your NAP is identical on your website and Yelp listing',
                      'Claim listings on the top 10 directories in your industry',
                      'Add LocalBusiness schema markup to your website',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-300">
                        <span style={{ color: '#F27D24' }} className="mt-0.5">&#8594;</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3" style={{ color: '#F27D24' }}>Authority Amplifiers (Do These Next)</h4>
                  <ul className="space-y-2">
                    {[
                      'Build a steady flow of Yelp reviews (respond to every one)',
                      'Submit your business to all four major data aggregators',
                      'Audit and clean up NAP inconsistencies across 50+ directories',
                      'Expand to secondary directories in your vertical',
                      'Ensure your website has clear, crawlable service and location pages',
                      'Monitor your Yelp ratings and address negative reviews promptly',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-300">
                        <span style={{ color: '#F27D24' }} className="mt-0.5">&#8594;</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3" style={{ color: '#F27D24' }}>Advanced Signals (Differentiate)</h4>
                  <ul className="space-y-2">
                    {[
                      'Get mentioned in local publications and authoritative websites',
                      'Build cross-platform review presence (BBB, industry-specific sites)',
                      'Create FAQ content that mirrors common voice query patterns',
                      'Earn backlinks from local business associations and chambers',
                      'Maintain quarterly audit cycles across all directory listings',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-300">
                        <span style={{ color: '#F27D24' }} className="mt-0.5">&#8594;</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3" style={{ color: '#EF4444' }}>Avoid These at All Costs</h4>
                  <ul className="space-y-2">
                    {[
                      'Ignoring Yelp because you focus exclusively on Google reviews',
                      'Leaving duplicate or conflicting directory listings unresolved',
                      'Using different phone numbers or addresses across platforms',
                      'Letting your Yelp profile go months without a new review or update',
                      'Assuming Google Business Profile optimization covers voice search',
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

            <div className="ae-cta-inline mt-8 p-5 rounded-xl" style={{ backgroundColor: 'rgba(255,106,0,0.06)', border: '1px solid rgba(255,106,0,0.2)' }}>
              <p className="text-sm text-gray-300 mb-3">This cheat sheet covers the signals. Implementing them at scale across 300+ directories is the hard part. That is exactly what we do.</p>
              <a
                href="tel:+12134442229"
                className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-80"
                style={{ color: '#F27D24' }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                Call (213) 444-2229 for a Voice Search Strategy Session
              </a>
            </div>
          </section>

          {/* 3-Tier CTA Block (MANDATORY before FAQ) */}
          <div className="not-prose my-16 p-8 rounded-2xl bg-gradient-to-br from-[#F27D24]/10 to-transparent border border-[#F27D24]/20">
            <h3 className="font-plus-jakarta text-2xl font-bold text-white mb-3">Alexa, Siri, and ChatGPT All Check the Same Signals. Are Yours Ready?</h3>
            <p className="text-gray-400 mb-6">Our free Blind Spot Report shows exactly how voice assistants and AI platforms see your business right now.</p>
            <Link href="/blindspot" className="inline-flex items-center gap-2 bg-[#F27D24] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#D96416] transition-colors">
              Get Your Free Blind Spot Report
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
            <div className="flex flex-wrap items-center gap-6 mt-6 pt-6 border-t border-[#F27D24]/10">
              <a href="tel:+12134442229" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                (213) 444-2229
              </a>
              <a href="mailto:support@theanswerengine.ai" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                support@theanswerengine.ai
              </a>
            </div>
          </div>

          {/* FAQ Section */}
          <section id="faq" className="mb-14">
            <div className="ae-section-label text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#F27D24' }}>Section 08</div>
            <h2 className="font-plus-jakarta text-3xl font-bold mb-8" style={{ color: '#FFFFFF' }}>
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {[
                {
                  q: 'How does Alexa decide which business to recommend?',
                  a: 'Alexa pulls local business data primarily from Yelp and other trusted third-party directories. It evaluates factors like review ratings, review volume, business category accuracy, and data consistency across directories to decide which business to name in a voice response. You cannot directly submit your business to Alexa.',
                },
                {
                  q: 'Can I list my business directly on Amazon Alexa?',
                  a: 'No. Unlike Google or Bing, Amazon Alexa does not offer a direct business listing portal. Alexa aggregates data from trusted third-party sources, primarily Yelp, along with other directory and data aggregator platforms. The way to influence Alexa is to optimize your presence on the directories it trusts.',
                },
                {
                  q: 'What percentage of the smart speaker market does Amazon Echo have?',
                  a: 'Amazon Echo holds approximately 70.6% of the US smart speaker market by installed base. This dominant penetration means Alexa is the most common voice assistant used in American homes for local business queries. The smart speaker market overall is valued at roughly $17.78 billion in 2026.',
                },
                {
                  q: 'Does Alexa use Google reviews when recommending businesses?',
                  a: 'No. Alexa primarily pulls review data from Yelp, not Google. A business with hundreds of Google reviews but no Yelp presence may be invisible to Alexa entirely. This is why a multi-platform review strategy matters for voice search visibility.',
                },
                {
                  q: 'How do customer reviews affect Alexa business recommendations?',
                  a: "Customer reviews and ratings are among the most influential factors in Alexa recommendations. Since Alexa can only give one or two spoken answers, it heavily favors businesses with high ratings, recent review activity, and strong review volume on the platforms it trusts, especially Yelp.",
                },
                {
                  q: 'Does structured data on my website help Alexa find my business?',
                  a: "Yes. Structured data (schema markup) helps all AI and voice platforms understand your business information more clearly. While Alexa pulls primarily from directories rather than crawling websites directly, the directories themselves use structured data to verify and enrich listings. Consistent structured data across your web presence reinforces the trust signals Alexa relies on.",
                },
                {
                  q: 'Is Alexa losing ground to Google Assistant for local search?',
                  a: "Not in the US home speaker market. While Google Assistant holds roughly 38% of the global voice assistant market share by category, Amazon Echo maintains over 70% of US smart speaker penetration. The Alexa segment is growing at approximately 15% annually. Both platforms matter, but Alexa remains the dominant in-home voice search device in America.",
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
              <p className="text-sm text-gray-300 mb-3">Have a specific question about your business and voice search? Our team answers these every day.</p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:support@theanswerengine.ai"
                  className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-80"
                  style={{ color: '#F27D24' }}
                >
                  Email support@theanswerengine.ai
                </a>
                <span className="text-gray-600 text-sm">or</span>
                <a
                  href="tel:+12134442229"
                  className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-80"
                  style={{ color: '#F27D24' }}
                >
                  Call (213) 444-2229
                </a>
              </div>
            </div>
          </section>

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

          {/* Final CTA */}
          <div className="ae-final-cta">
            <div
              className="rounded-2xl p-10 text-center relative overflow-hidden"
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
                  style={{ backgroundColor: 'rgba(255,106,0,0.2)', color: '#F27D24', border: '1px solid rgba(255,106,0,0.4)' }}
                >
                  <span className="inline-block w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#F27D24' }} />
                  Free AI Visibility Assessment Available Now
                </div>

                <h2 className="font-plus-jakarta text-3xl md:text-4xl font-extrabold text-white mb-4">
                  Be the Business Alexa Recommends
                </h2>

                <p className="text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed text-lg">
                  Get your free AI Blind Spot Report and find out if voice assistants can even find your business. Every day Alexa answers a question in your category, a competitor gets the customer you should have. The fix is concrete, measurable, and faster than most businesses expect.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
                  <Link
                    href="/blindspot"
                    className="ae-cta-primary inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-white text-lg transition-all hover:opacity-90"
                    style={{
                      backgroundColor: '#F27D24',
                      boxShadow: '0 0 20px rgba(255,106,0,0.4)',
                    }}
                  >
                    Get Your Free Blind Spot Report &#8594;
                  </Link>
                  <a
                    href="tel:+12134442229"
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-base transition-all hover:opacity-80"
                    style={{ color: '#F27D24', border: '2px solid rgba(255,106,0,0.4)', backgroundColor: 'rgba(255,106,0,0.08)' }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    (213) 444-2229
                  </a>
                </div>

                <p className="text-xs text-gray-500">
                  No commitment. We audit your AI visibility across Alexa, Siri, ChatGPT, Perplexity, and Google AI and show you where you stand, for free.
                </p>
              </div>
            </div>
          </div>

        </div>
      </main>
    </>
  )
}
