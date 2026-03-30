import type { Metadata } from 'next'
import Link from 'next/link'

export const revalidate = 86400
export const dynamic = 'force-static'
export const dynamicParams = true

const title = 'Why AI Keeps Recommending the Same 3 Businesses'
const description =
  'The top 10 domains capture 46% of all AI citations in a topic. Learn why AI recommendation engines keep picking the same winners and ignoring everyone else.'
const slug = 'why-ai-keeps-recommending-the-same-3-businesses'
const publishDate = '2026-03-30'

export const metadata: Metadata = {
  title: `${title} | The Answer Engine`,
  description,
  keywords: [
    'AI business recommendations',
    'ChatGPT citation concentration',
    'why AI recommends same businesses',
    'AI winner take all',
    'Perplexity citation bias',
    'AI search visibility gap',
    'answer engine optimization',
    'AI recommendation hierarchy',
    'ChatGPT Wikipedia dominance',
    'AI citation patterns',
    'get recommended by AI',
    'AI search monopoly',
  ],
  authors: [{ name: 'The Answer Engine Team' }],
  openGraph: {
    title: `${title} | The Answer Engine`,
    description,
    type: 'article',
    publishedTime: publishDate,
    modifiedTime: publishDate,
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
          name: 'Why does ChatGPT keep recommending the same businesses?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'ChatGPT draws heavily from a small pool of highly authoritative sources. The top 10 domains in any given topic capture nearly half of all citations. Businesses that appear on these dominant sources, particularly Wikipedia, major directories, and high-authority publications, get recommended repeatedly. Businesses that only exist on their own website or a single platform are effectively invisible to the model.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do all AI platforms recommend the same businesses?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Each AI platform has different citation preferences and source biases. ChatGPT leans heavily on Wikipedia and established web authority. Perplexity draws disproportionately from Reddit and mid-tier directories. Google AI takes a more distributed approach across its own index. A business that dominates ChatGPT recommendations may be completely absent from Perplexity, and vice versa.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is it possible to break into AI recommendations if competitors are already established?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, but it requires a deliberate strategy. The concentration effect means early movers have a compounding advantage, but the window is not closed. Businesses that build presence across the specific sources each AI platform favors can displace incumbents. The key is understanding which platforms matter for your industry and which source signals each one weighs most heavily.',
          },
        },
        {
          '@type': 'Question',
          name: 'How often does ChatGPT change its business recommendations?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'More often than most people assume. Research shows there is less than a 1 in 100 chance that ChatGPT will produce the exact same list of brand recommendations if asked the same question 100 times. The core winners appear frequently, but the rotation around those top slots is constant. This means there are real opportunities to capture recommendation share, even in competitive categories.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does Wikipedia really matter that much for AI recommendations?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For ChatGPT, yes. Wikipedia alone accounts for a significant share of all citations the model produces. It functions as a trust anchor. Businesses and brands that are mentioned, referenced, or linked from Wikipedia pages have a measurable advantage in ChatGPT recommendations. However, Wikipedia is less dominant for other platforms like Perplexity, which relies more heavily on Reddit and forum content.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why does Perplexity recommend different businesses than ChatGPT?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Perplexity and ChatGPT use fundamentally different source hierarchies. Perplexity relies heavily on Reddit discussions, regional directories, and mid-tier review platforms for its citations. ChatGPT draws more from Wikipedia, established publications, and high-domain-authority websites. This means the same business can be highly visible on one platform and completely invisible on another.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the "winner-take-all" dynamic in AI search?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The winner-take-all dynamic refers to the extreme concentration of AI citations among a small number of sources and businesses. When the top 30 domains capture two-thirds of all citations in a topic, most businesses are competing for scraps. The businesses that break into the top tier get recommended repeatedly, building more authority, which leads to more recommendations. It is a self-reinforcing cycle that widens the gap over time.',
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

      <main className="min-h-screen bg-[#0F1117] text-[#E5E7EB]">

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
                id="hero-grid-102"
                x="0"
                y="0"
                width="60"
                height="60"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 60 0 L 0 0 0 60"
                  fill="none"
                  stroke="#FF6A00"
                  strokeWidth="0.5"
                />
                {/* Podium / ranking bars */}
                <rect x="10" y="35" width="10" height="25" fill="#FF6A00" opacity="0.15" rx="1" />
                <rect x="25" y="20" width="10" height="40" fill="#FF6A00" opacity="0.25" rx="1" />
                <rect x="40" y="40" width="10" height="20" fill="#FF6A00" opacity="0.1" rx="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-grid-102)" />
          </svg>

          <div className="relative max-w-4xl mx-auto px-6 py-20">
            <Breadcrumb />

            <div className="flex items-center gap-3 mb-6">
              <span
                className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full"
                style={{ backgroundColor: 'rgba(255,106,0,0.15)', color: '#FF6A00', border: '1px solid rgba(255,106,0,0.3)' }}
              >
                Business Pain Points
              </span>
              <span className="text-xs text-gray-500">March 30, 2026</span>
              <span className="text-xs text-gray-500">12 min read</span>
            </div>

            <h1
              className="font-plus-jakarta text-4xl md:text-5xl font-extrabold leading-tight mb-6"
              style={{ color: '#FFFFFF' }}
            >
              Why AI Keeps Recommending the{' '}
              <span style={{ color: '#FF6A00' }}>Same 3 Businesses</span>
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-3xl">
              You have probably noticed it. Ask ChatGPT, Perplexity, or Google AI for a recommendation in your industry, and the same handful of names appear over and over. Meanwhile, hundreds of qualified businesses never get mentioned. This is not random. It is structural, and the data behind it is more extreme than most business owners realize.
            </p>

            {/* Hero Inline CTA */}
            <div className="ae-cta-inline flex flex-wrap items-center gap-4 mb-4">
              <Link
                href="/blindspot"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white transition-all hover:opacity-90"
                style={{ backgroundColor: '#FF6A00' }}
              >
                Check If AI Recommends You
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
              <div className="ae-stat-emoji text-2xl mb-1">🏆</div>
              <div className="ae-stat-value ae-accent font-plus-jakarta text-3xl font-extrabold mb-1" style={{ color: '#FF6A00' }}>46%</div>
              <div className="ae-stat-label text-xs text-gray-400 leading-snug">Of all ChatGPT citations captured by just 10 domains per topic</div>
              <div className="ae-stat-source text-[10px] text-gray-600 mt-1">AI Citation Research, 2026</div>
            </div>
            <div
              className="ae-stat-card rounded-xl p-5 text-center"
              style={{ backgroundColor: 'rgba(255,106,0,0.08)', border: '1px solid rgba(255,106,0,0.2)' }}
            >
              <div className="ae-stat-emoji text-2xl mb-1">📊</div>
              <div className="ae-stat-value ae-accent font-plus-jakarta text-3xl font-extrabold mb-1" style={{ color: '#FF6A00' }}>67%</div>
              <div className="ae-stat-label text-xs text-gray-400 leading-snug">Of citations controlled by the top 30 domains in any category</div>
              <div className="ae-stat-source text-[10px] text-gray-600 mt-1">AI Citation Research, 2026</div>
            </div>
            <div
              className="ae-stat-card rounded-xl p-5 text-center"
              style={{ backgroundColor: 'rgba(255,106,0,0.08)', border: '1px solid rgba(255,106,0,0.2)' }}
            >
              <div className="ae-stat-emoji text-2xl mb-1">🎲</div>
              <div className="ae-stat-value ae-accent font-plus-jakarta text-3xl font-extrabold mb-1" style={{ color: '#FF6A00' }}>&lt;1%</div>
              <div className="ae-stat-label text-xs text-gray-400 leading-snug">Chance ChatGPT gives the exact same brand list across 100 queries</div>
              <div className="ae-stat-source text-[10px] text-gray-600 mt-1">LLM Consistency Study, 2026</div>
            </div>
            <div
              className="ae-stat-card rounded-xl p-5 text-center"
              style={{ backgroundColor: 'rgba(255,106,0,0.08)', border: '1px solid rgba(255,106,0,0.2)' }}
            >
              <div className="ae-stat-emoji text-2xl mb-1">📖</div>
              <div className="ae-stat-value ae-accent font-plus-jakarta text-3xl font-extrabold mb-1" style={{ color: '#FF6A00' }}>12.1%</div>
              <div className="ae-stat-label text-xs text-gray-400 leading-snug">Of all ChatGPT citations come from Wikipedia alone</div>
              <div className="ae-stat-source text-[10px] text-gray-600 mt-1">AI Source Analysis, 2026</div>
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
                <a href="#concentration-problem" className="hover:text-orange-400 transition-colors">The Concentration Problem: AI&apos;s Winner-Take-All Citations</a>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: '#FF6A00' }}>02</span>
                <a href="#platform-biases" className="hover:text-orange-400 transition-colors">Each AI Platform Has Different Favorites</a>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: '#FF6A00' }}>03</span>
                <a href="#compounding-advantage" className="hover:text-orange-400 transition-colors">The Compounding Advantage: Why the Rich Get Richer</a>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: '#FF6A00' }}>04</span>
                <a href="#comparison-table" className="hover:text-orange-400 transition-colors">Platform Citation Comparison: Who Pulls From Where</a>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: '#FF6A00' }}>05</span>
                <a href="#rotation-myth" className="hover:text-orange-400 transition-colors">The Rotation Myth: Why Inconsistency Is Your Opportunity</a>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: '#FF6A00' }}>06</span>
                <a href="#decision-matrix" className="hover:text-orange-400 transition-colors">Decision Matrix: Where Does Your Business Stand?</a>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: '#FF6A00' }}>07</span>
                <a href="#cheat-sheet" className="hover:text-orange-400 transition-colors">AI Recommendation Cheat Sheet</a>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: '#FF6A00' }}>08</span>
                <a href="#faq" className="hover:text-orange-400 transition-colors">Frequently Asked Questions</a>
              </li>
            </ol>
          </nav>

          {/* Section 1: The Concentration Problem */}
          <section id="concentration-problem" className="mb-14">
            <span className="ae-section-label text-xs font-semibold uppercase tracking-widest mb-4 block" style={{ color: '#FF6A00' }}>The Problem</span>
            <h2 className="font-plus-jakarta text-3xl font-bold mb-6" style={{ color: '#FFFFFF' }}>
              The Concentration Problem: AI&apos;s Winner-Take-All Citations
            </h2>

            <p className="text-gray-300 leading-relaxed mb-5">
              When someone asks an AI assistant for a recommendation in your industry, the model does not survey every business equally. It draws from a tiny pool of sources it has learned to trust. The data on this is striking: in any given topic, the top 10 domains capture 46% of all ChatGPT citations. Expand that to the top 30 domains and you are looking at 67% of all citations locked up by a fraction of the available sources.
            </p>

            <p className="text-gray-300 leading-relaxed mb-5">
              Think about what that means for your business. If you are not present on the sources AI trusts the most, you are fighting over the remaining third of citations with every other business in your category. That is not a level playing field. It is a structural bottleneck, and most business owners do not even know it exists.
            </p>

            {/* Quote Box */}
            <div
              className="ae-quote rounded-xl p-6 my-8 border-l-4"
              style={{ backgroundColor: 'rgba(255,106,0,0.06)', borderColor: '#FF6A00' }}
            >
              <p className="text-gray-200 italic text-lg leading-relaxed mb-2">
                &ldquo;The top 10 domains in a topic take nearly half of all AI citations. Everyone else splits the leftovers.&rdquo;
              </p>
              <p className="text-sm" style={{ color: '#FF6A00' }}>AI Citation Concentration Research, 2026</p>
            </div>

            <p className="text-gray-300 leading-relaxed mb-5">
              Wikipedia alone accounts for 12.1% of all ChatGPT citations. A single encyclopedia is responsible for more than one out of every ten citations the world&apos;s most popular AI assistant produces. If your business or your category has no Wikipedia presence, you are starting with a significant handicap on ChatGPT specifically.
            </p>

            {/* Callout: Warning */}
            <div
              className="ae-callout ae-callout-warning rounded-xl p-6 my-8"
              style={{ backgroundColor: 'rgba(234,179,8,0.08)', border: '1px solid rgba(234,179,8,0.25)' }}
            >
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#EAB308' }} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
                <div>
                  <p className="font-semibold mb-1" style={{ color: '#FCD34D' }}>This Is Not a Google Problem. It Is an AI Problem.</p>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    Ranking on Google does not guarantee AI recommends you. AI platforms build their citation hierarchies from entirely different source pools. A business that dominates Google page one can be completely invisible to ChatGPT if it has no presence on the sources ChatGPT trusts.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Inline */}
            <div className="ae-cta-inline my-8 p-5 rounded-xl" style={{ backgroundColor: 'rgba(255,106,0,0.06)', border: '1px solid rgba(255,106,0,0.2)' }}>
              <p className="text-sm text-gray-300 mb-3">Want to see exactly where your business appears (and where it does not) across every major AI platform?</p>
              <Link
                href="/blindspot"
                className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-80"
                style={{ color: '#FF6A00' }}
              >
                Get Your Free AI Blind Spot Report
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </section>

          {/* Section 2: Platform Biases */}
          <section id="platform-biases" className="mb-14">
            <span className="ae-section-label text-xs font-semibold uppercase tracking-widest mb-4 block" style={{ color: '#FF6A00' }}>Platform Intelligence</span>
            <h2 className="font-plus-jakarta text-3xl font-bold mb-6" style={{ color: '#FFFFFF' }}>
              Each AI Platform Has Different Favorites
            </h2>

            <p className="text-gray-300 leading-relaxed mb-5">
              Here is where it gets more complicated, and more interesting. Not all AI platforms pull from the same sources. The citation preferences of ChatGPT, Perplexity, and Google AI are dramatically different. A strategy that works for one platform can completely fail on another.
            </p>

            <p className="text-gray-300 leading-relaxed mb-5">
              ChatGPT leans on Wikipedia as its dominant trust anchor. Perplexity, on the other hand, draws nearly half of its top citations from Reddit. Google AI takes a more distributed approach, pulling across its own massive index without the same extreme concentration on any single source type.
            </p>

            <p className="text-gray-300 leading-relaxed mb-5">
              Perplexity also taps into regional directories and mid-tier review platforms far more often than ChatGPT does. This means a local business with strong directory presence might show up consistently on Perplexity while being completely absent from ChatGPT. The platforms are not interchangeable, and optimizing for one does not automatically cover the others.
            </p>

            {/* Callout: Info */}
            <div
              className="ae-callout ae-callout-info rounded-xl p-6 my-8"
              style={{ backgroundColor: 'rgba(59,130,246,0.08)', border: '1px solid rgba(59,130,246,0.25)' }}
            >
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#3B82F6' }} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" /></svg>
                <div>
                  <p className="font-semibold mb-1" style={{ color: '#93C5FD' }}>Reddit Is the New SEO for Perplexity</p>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    Reddit accounts for 46.7% of Perplexity&apos;s top citations. If your business is being discussed positively on Reddit, Perplexity is far more likely to recommend you. If you have zero Reddit presence, Perplexity is likely recommending your competitors who do. This is one of the most overlooked signals in AI visibility today.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Inline */}
            <div className="ae-cta-inline my-8 p-5 rounded-xl" style={{ backgroundColor: 'rgba(255,106,0,0.06)', border: '1px solid rgba(255,106,0,0.2)' }}>
              <p className="text-sm text-gray-300 mb-3">Understanding which platforms matter for your specific industry is the first step. Our analysis covers all major AI engines.</p>
              <Link
                href="/blog/how-ai-platforms-choose-businesses-to-cite"
                className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-80"
                style={{ color: '#FF6A00' }}
              >
                How AI Platforms Choose Which Businesses to Cite
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </section>

          {/* Section 3: Compounding Advantage */}
          <section id="compounding-advantage" className="mb-14">
            <span className="ae-section-label text-xs font-semibold uppercase tracking-widest mb-4 block" style={{ color: '#FF6A00' }}>The Flywheel</span>
            <h2 className="font-plus-jakarta text-3xl font-bold mb-6" style={{ color: '#FFFFFF' }}>
              The Compounding Advantage: Why the Rich Get Richer
            </h2>

            <p className="text-gray-300 leading-relaxed mb-5">
              Citation concentration in AI is not static. It compounds. When an AI platform repeatedly cites a business, that business gains more online mentions, more backlinks, more reviews, and more third-party references. All of those signals feed back into the AI model&apos;s next training cycle or retrieval process, making that business even more likely to be cited in the future.
            </p>

            <p className="text-gray-300 leading-relaxed mb-5">
              This creates a flywheel effect that is extremely difficult to break into from the outside. The businesses that got into AI&apos;s recommendation set early are building an ever-widening moat. Every month you wait, the gap gets wider. The cost of inaction is not zero. It is compounding negative returns as competitors accumulate the signals that lock in their advantage.
            </p>

            {/* Takeaway Box */}
            <div
              className="ae-takeaway rounded-xl p-6 my-8"
              style={{ backgroundColor: 'rgba(255,106,0,0.08)', border: '1px solid rgba(255,106,0,0.3)' }}
            >
              <div className="font-plus-jakarta font-bold mb-2" style={{ color: '#FF6A00' }}>Key Takeaway</div>
              <p className="text-gray-200 leading-relaxed">
                AI citation concentration creates a compounding advantage for early movers. The businesses AI recommends today will be even harder to displace six months from now. The window to break into AI&apos;s recommendation hierarchy narrows with every training cycle.
              </p>
            </div>

            <p className="text-gray-300 leading-relaxed mb-5">
              This is not speculation. It is visible in the data. When 67% of citations in a category are controlled by 30 domains, the remaining hundreds or thousands of businesses are fighting over roughly one-third of all recommendation opportunities. And each cycle, that one-third shrinks further as the top players consolidate.
            </p>

            <p className="text-gray-300 leading-relaxed mb-5">
              Consider what this looks like in practice. Starbucks has tens of thousands of Wikipedia mentions, a dedicated Wikipedia entry, hundreds of thousands of Yelp reviews, thousands of Reddit threads, regional news coverage in every city, and directory listings across every major platform. A new local cafe — even one that makes objectively better coffee — might have a Google Business Profile, 40 Google reviews, and a website. When an AI model is asked &ldquo;where should I get coffee near me?&rdquo; it is not comparing the quality of the espresso. It is comparing the weight of evidence across its trusted sources. The citation gap between Starbucks and a new local cafe is not just large — it is structurally insurmountable without a deliberate, multi-platform strategy to build the signals AI actually measures.
            </p>

            {/* CTA Inline */}
            <div className="ae-cta-inline my-8 p-5 rounded-xl" style={{ backgroundColor: 'rgba(255,106,0,0.06)', border: '1px solid rgba(255,106,0,0.2)' }}>
              <p className="text-sm text-gray-300 mb-3">Every day your competitors are building AI authority while you are invisible. The compounding gap is real.</p>
              <a
                href="mailto:support@theanswerengine.ai"
                className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-80"
                style={{ color: '#FF6A00' }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                Email Us to Discuss Your AI Visibility Strategy
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
            </div>
          </section>

          {/* Section 4: Comparison Table */}
          <section id="comparison-table" className="mb-14">
            <span className="ae-section-label text-xs font-semibold uppercase tracking-widest mb-4 block" style={{ color: '#FF6A00' }}>Platform Breakdown</span>
            <h2 className="font-plus-jakarta text-3xl font-bold mb-6" style={{ color: '#FFFFFF' }}>
              Platform Citation Comparison: Who Pulls From Where
            </h2>

            <p className="text-gray-300 leading-relaxed mb-8">
              The following comparison shows the structural differences between how each major AI platform sources its business recommendations. These patterns are consistent across industries and queries.
            </p>

            {/* Comparison Table */}
            <div className="ae-comparison-table overflow-x-auto mb-10 rounded-xl" style={{ border: '1px solid rgba(255,106,0,0.2)' }}>
              <table className="w-full text-sm">
                <caption className="sr-only">Table: AI platform citation source comparison</caption>
                <thead>
                  <tr style={{ backgroundColor: 'rgba(255,106,0,0.12)' }}>
                    <th className="text-left p-4 font-plus-jakarta font-semibold text-white">Signal / Source</th>
                    <th className="text-left p-4 font-plus-jakarta font-semibold" style={{ color: '#FF6A00' }}>ChatGPT</th>
                    <th className="text-left p-4 font-plus-jakarta font-semibold text-blue-400">Perplexity</th>
                    <th className="text-left p-4 font-plus-jakarta font-semibold text-green-400">Google AI</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderTop: '1px solid rgba(255,106,0,0.1)' }}>
                    <td className="p-4 text-gray-400 font-medium">Dominant Source Type</td>
                    <td className="p-4 text-gray-200">Wikipedia, high-authority domains</td>
                    <td className="p-4 text-gray-300">Reddit, forums, mid-tier directories</td>
                    <td className="p-4 text-gray-300">Distributed across Google index</td>
                  </tr>
                  <tr style={{ borderTop: '1px solid rgba(255,106,0,0.1)', backgroundColor: 'rgba(255,255,255,0.02)' }}>
                    <td className="p-4 text-gray-400 font-medium">Wikipedia Dependency</td>
                    <td className="p-4 text-gray-200">Very high (12.1% of all citations)</td>
                    <td className="p-4 text-gray-300">Low</td>
                    <td className="p-4 text-gray-300">Moderate</td>
                  </tr>
                  <tr style={{ borderTop: '1px solid rgba(255,106,0,0.1)' }}>
                    <td className="p-4 text-gray-400 font-medium">Reddit Influence</td>
                    <td className="p-4 text-gray-200">Moderate</td>
                    <td className="p-4 text-gray-300">Very high (46.7% of top citations)</td>
                    <td className="p-4 text-gray-300">Moderate</td>
                  </tr>
                  <tr style={{ borderTop: '1px solid rgba(255,106,0,0.1)', backgroundColor: 'rgba(255,255,255,0.02)' }}>
                    <td className="p-4 text-gray-400 font-medium">Regional Directories</td>
                    <td className="p-4 text-gray-200">Low priority</td>
                    <td className="p-4 text-gray-300">High priority, actively indexed</td>
                    <td className="p-4 text-gray-300">Moderate, via local index</td>
                  </tr>
                  <tr style={{ borderTop: '1px solid rgba(255,106,0,0.1)' }}>
                    <td className="p-4 text-gray-400 font-medium">Citation Concentration</td>
                    <td className="p-4 text-gray-200">Top 10 = 46% of citations</td>
                    <td className="p-4 text-gray-300">Moderate concentration</td>
                    <td className="p-4 text-gray-300">More distributed</td>
                  </tr>
                  <tr style={{ borderTop: '1px solid rgba(255,106,0,0.1)', backgroundColor: 'rgba(255,255,255,0.02)' }}>
                    <td className="p-4 text-gray-400 font-medium">Response Consistency</td>
                    <td className="p-4 text-gray-200">&lt;1% same list across 100 queries</td>
                    <td className="p-4 text-gray-300">Higher consistency per session</td>
                    <td className="p-4 text-gray-300">Tied to live search results</td>
                  </tr>
                  <tr style={{ borderTop: '1px solid rgba(255,106,0,0.1)' }}>
                    <td className="p-4 text-gray-400 font-medium">Best Opportunity For</td>
                    <td className="p-4 text-gray-200">Established brands with web authority</td>
                    <td className="p-4 text-gray-300">Community-active local businesses</td>
                    <td className="p-4 text-gray-300">SEO-strong businesses with fresh content</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Callout: Orange */}
            <div
              className="ae-callout ae-callout-orange rounded-xl p-6 my-8"
              style={{ backgroundColor: 'rgba(255,106,0,0.08)', border: '1px solid rgba(255,106,0,0.3)' }}
            >
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#FF6A00' }} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" /></svg>
                <div>
                  <p className="font-semibold mb-1" style={{ color: '#FF6A00' }}>One Platform Strategy Will Not Cover You</p>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    A business dominating ChatGPT recommendations can be completely invisible on Perplexity, and vice versa. Each platform requires understanding which sources it trusts, and building presence there. This is why generic AI optimization fails. Platform-specific intelligence is what separates visible businesses from invisible ones.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Inline */}
            <div className="ae-cta-inline my-8 p-5 rounded-xl" style={{ backgroundColor: 'rgba(255,106,0,0.06)', border: '1px solid rgba(255,106,0,0.2)' }}>
              <p className="text-sm text-gray-300 mb-3">Curious how these citation patterns play out when two similar businesses compete head to head?</p>
              <Link
                href="/blog/how-ai-picks-between-two-similar-businesses"
                className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-80"
                style={{ color: '#FF6A00' }}
              >
                How AI Picks Between Two Similar Businesses
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </section>

          {/* Section 5: The Rotation Myth */}
          <section id="rotation-myth" className="mb-14">
            <span className="ae-section-label text-xs font-semibold uppercase tracking-widest mb-4 block" style={{ color: '#FF6A00' }}>The Opportunity</span>
            <h2 className="font-plus-jakarta text-3xl font-bold mb-6" style={{ color: '#FFFFFF' }}>
              The Rotation Myth: Why Inconsistency Is Your Opportunity
            </h2>

            <p className="text-gray-300 leading-relaxed mb-5">
              There is a surprising finding buried in the citation data. Despite the extreme concentration at the top, AI recommendations are not as locked-in as they appear. Research shows there is less than a 1 in 100 chance ChatGPT will produce the exact same list of brand recommendations if asked the same question 100 times.
            </p>

            <p className="text-gray-300 leading-relaxed mb-5">
              This means the same core winners rotate in and out of the top spots, and the second and third tier positions shift constantly. For businesses trying to break in, this is significant. You do not need to dethrone the category leader. You need to get into the rotation. Once you are in the rotation, the compounding advantage starts working for you instead of against you.
            </p>

            {/* Pros/Cons Section */}
            <div className="ae-pros-cons grid md:grid-cols-2 gap-6 mb-10">
              <div
                className="rounded-xl p-6"
                style={{ backgroundColor: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.2)' }}
              >
                <h3 className="font-plus-jakarta font-bold mb-4 flex items-center gap-2" style={{ color: '#22C55E' }}>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  Signs You Can Break Into AI Rotation
                </h3>
                <ul className="space-y-3">
                  {[
                    'Your business has third-party mentions across multiple platforms',
                    'Industry-specific directories already list you with accurate information',
                    'You have positive Reddit or forum discussions about your business',
                    'Your website answers common questions in your category clearly',
                    'You have recent, consistent reviews across more than one platform',
                    'Your brand name appears in local news or publications',
                    'You have structured data markup that clearly identifies your business entity to AI crawlers',
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
                  Signs You Are Locked Out
                </h3>
                <ul className="space-y-3">
                  {[
                    'Your business exists only on your own website and Google Business Profile',
                    'No Reddit threads, forum posts, or community mentions of your brand',
                    'Directory listings are outdated, inconsistent, or missing entirely',
                    'No Wikipedia references to your brand or your industry niche',
                    'Your website does not clearly answer category-level questions',
                    'Reviews exist only on Google, with no presence on Yelp, Trustpilot, or niche platforms',
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
            <div
              className="ae-callout ae-callout-success rounded-xl p-6 my-8"
              style={{ backgroundColor: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.25)' }}
            >
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#22C55E' }} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                <div>
                  <p className="font-semibold mb-1" style={{ color: '#86EFAC' }}>The Rotation Gap Is Your Way In</p>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    Because AI does not produce the exact same list every time, there are real slots opening up in every recommendation cycle. The businesses that understand which signals to build, and on which platforms, can capture those rotating spots and start building compounding authority from there.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Inline */}
            <div className="ae-cta-inline my-8 p-5 rounded-xl" style={{ backgroundColor: 'rgba(255,106,0,0.06)', border: '1px solid rgba(255,106,0,0.2)' }}>
              <p className="text-sm text-gray-300 mb-3">Wondering why your competitor appears in AI results and you do not? The answer is almost always in the signals, not the service quality.</p>
              <Link
                href="/blog/why-is-my-competitor-on-ai-search-not-me"
                className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-80"
                style={{ color: '#FF6A00' }}
              >
                Why Is My Competitor on AI Search and Not Me?
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </section>

          {/* Section 6: Decision Matrix */}
          <section id="decision-matrix" className="mb-14">
            <span className="ae-section-label text-xs font-semibold uppercase tracking-widest mb-4 block" style={{ color: '#FF6A00' }}>Assessment</span>
            <h2 className="font-plus-jakarta text-3xl font-bold mb-6" style={{ color: '#FFFFFF' }}>
              Decision Matrix: Where Does Your Business Stand?
            </h2>

            <p className="text-gray-300 leading-relaxed mb-8">
              Use this matrix to get an honest snapshot of your position in AI&apos;s recommendation hierarchy. Most businesses score in the "Invisible" or "Occasionally Mentioned" columns. The gap between those and "Consistently Recommended" is where revenue is being left on the table.
            </p>

            <div className="ae-decision-matrix overflow-x-auto rounded-xl" style={{ border: '1px solid rgba(255,106,0,0.2)' }}>
              <table className="w-full text-sm">
                <caption className="sr-only">Table: AI recommendation readiness evaluation</caption>
                <thead>
                  <tr style={{ backgroundColor: 'rgba(255,106,0,0.12)' }}>
                    <th className="text-left p-4 font-plus-jakarta font-semibold text-white">Signal Area</th>
                    <th className="text-left p-4 font-plus-jakarta font-semibold text-red-400">Invisible</th>
                    <th className="text-left p-4 font-plus-jakarta font-semibold text-yellow-400">Occasionally Mentioned</th>
                    <th className="text-left p-4 font-plus-jakarta font-semibold text-green-400">Consistently Recommended</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      area: 'Cross-Source Presence',
                      invisible: 'Own website only',
                      occasional: '2-3 external sources',
                      consistent: '10+ authoritative sources',
                    },
                    {
                      area: 'Wikipedia / Major Reference',
                      invisible: 'No mention anywhere',
                      occasional: 'Mentioned in related articles',
                      consistent: 'Direct references or dedicated entry',
                    },
                    {
                      area: 'Reddit / Forum Presence',
                      invisible: 'Zero discussions',
                      occasional: 'A few mentions, mixed sentiment',
                      consistent: 'Regular positive mentions in category threads',
                    },
                    {
                      area: 'Directory Coverage',
                      invisible: 'Google-only or unclaimed listings',
                      occasional: 'Major directories claimed',
                      consistent: 'Regional, niche, and major directories, all consistent',
                    },
                    {
                      area: 'Multi-Platform Reviews',
                      invisible: 'Reviews on Google only',
                      occasional: 'Reviews on 2-3 platforms',
                      consistent: '4+ platforms with recent, consistent ratings',
                    },
                    {
                      area: 'Content Authority',
                      invisible: 'No category-level content',
                      occasional: 'Blog posts, some depth',
                      consistent: 'Authoritative content AI models can cite as answers',
                    },
                    {
                      area: 'Brand Entity Clarity',
                      invisible: 'Inconsistent name/info across web',
                      occasional: 'Mostly consistent, minor gaps',
                      consistent: 'Identical entity signals everywhere AI looks',
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
                      <td className="p-4 text-red-400 text-xs">{row.invisible}</td>
                      <td className="p-4 text-yellow-400 text-xs">{row.occasional}</td>
                      <td className="p-4 text-green-400 text-xs">{row.consistent}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* CTA Inline */}
            <div className="ae-cta-inline mt-8 p-5 rounded-xl" style={{ backgroundColor: 'rgba(255,106,0,0.06)', border: '1px solid rgba(255,106,0,0.2)' }}>
              <p className="text-sm text-gray-300 mb-3">If you scored &quot;Invisible&quot; in three or more areas, AI is actively choosing your competitors over you right now. That gap grows wider every week.</p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/blindspot"
                  className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-lg text-white transition-all hover:opacity-90"
                  style={{ backgroundColor: '#FF6A00' }}
                >
                  Get Your Free Blind Spot Report
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
              <h3 className="font-plus-jakarta font-bold text-white mb-4">Related Reading: AI Recommendation Deep Dives</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <Link
                  href="/blog/how-ai-picks-between-two-similar-businesses"
                  className="block p-4 rounded-lg transition-all hover:border-orange-500"
                  style={{ backgroundColor: 'rgba(255,106,0,0.05)', border: '1px solid rgba(255,106,0,0.1)' }}
                >
                  <p className="text-xs uppercase tracking-wide mb-1" style={{ color: '#FF6A00' }}>AI Tiebreakers</p>
                  <p className="text-sm font-semibold text-white leading-snug">How AI Picks Between Two Similar Businesses</p>
                </Link>
                <Link
                  href="/blog/why-is-my-competitor-on-ai-search-not-me"
                  className="block p-4 rounded-lg transition-all hover:border-orange-500"
                  style={{ backgroundColor: 'rgba(255,106,0,0.05)', border: '1px solid rgba(255,106,0,0.1)' }}
                >
                  <p className="text-xs uppercase tracking-wide mb-1" style={{ color: '#FF6A00' }}>Competitor Analysis</p>
                  <p className="text-sm font-semibold text-white leading-snug">Why Is My Competitor on AI Search and Not Me?</p>
                </Link>
                <Link
                  href="/blog/how-ai-platforms-choose-businesses-to-cite"
                  className="block p-4 rounded-lg transition-all hover:border-orange-500"
                  style={{ backgroundColor: 'rgba(255,106,0,0.05)', border: '1px solid rgba(255,106,0,0.1)' }}
                >
                  <p className="text-xs uppercase tracking-wide mb-1" style={{ color: '#FF6A00' }}>Citation Mechanics</p>
                  <p className="text-sm font-semibold text-white leading-snug">How AI Platforms Choose Which Businesses to Cite</p>
                </Link>
              </div>
            </div>
          </section>

          {/* Section 7: Cheat Sheet */}
          <section id="cheat-sheet" className="mb-14">
            <span className="ae-section-label text-xs font-semibold uppercase tracking-widest mb-4 block" style={{ color: '#FF6A00' }}>Quick Reference</span>
            <h2 className="font-plus-jakarta text-3xl font-bold mb-6" style={{ color: '#FFFFFF' }}>
              AI Recommendation Cheat Sheet
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
                <h3 className="font-plus-jakarta text-xl font-bold text-white">Breaking Into AI&apos;s Recommendation Set</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3" style={{ color: '#FF6A00' }}>What AI Rewards</h4>
                  <ul className="space-y-2">
                    {[
                      'Presence across multiple high-authority source types',
                      'Consistent entity information (name, details, services) everywhere',
                      'Active discussions and mentions on platforms AI trusts',
                      'Content that directly answers common category questions',
                      'Reviews distributed across multiple platforms, not just Google',
                      'Third-party validation from publications, directories, and forums',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-300">
                        <span style={{ color: '#FF6A00' }} className="mt-0.5">&#8594;</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3" style={{ color: '#FF6A00' }}>What AI Ignores</h4>
                  <ul className="space-y-2">
                    {[
                      'Google page-one rankings (does not transfer to AI citations)',
                      'Paid advertising spend on any platform',
                      'Beautiful website design without structured, citable content',
                      'High Google review count without presence on other platforms',
                      'Years of SEO investment that only built Google-specific authority',
                      'Social media followers without community engagement',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-300">
                        <span style={{ color: '#FF6A00' }} className="mt-0.5">&#8594;</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3" style={{ color: '#FF6A00' }}>Platform-Specific Priorities</h4>
                  <ul className="space-y-2">
                    {[
                      'ChatGPT: Wikipedia presence and high-domain-authority mentions',
                      'Perplexity: Reddit discussions and mid-tier directory listings',
                      'Google AI: Fresh content, schema markup, and Google index signals',
                      'Each platform requires its own targeted presence strategy',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-300">
                        <span style={{ color: '#FF6A00' }} className="mt-0.5">&#8594;</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3" style={{ color: '#EF4444' }}>Common Mistakes That Keep You Invisible</h4>
                  <ul className="space-y-2">
                    {[
                      'Assuming Google rankings mean AI will also recommend you',
                      'Optimizing for one AI platform and ignoring the others',
                      'Waiting to act while competitors build compounding authority',
                      'Treating AI visibility as a marketing tactic instead of infrastructure',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-300">
                        <span className="text-red-400 mt-0.5">&#10005;</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* 3-Tier CTA Block (MANDATORY before FAQ) */}
          <div className="not-prose my-16 p-8 rounded-2xl bg-gradient-to-br from-[#FF6A00]/10 to-transparent border border-[#FF6A00]/20">
            <h3 className="font-plus-jakarta text-2xl font-bold text-white mb-3">Are You One of the 3 Businesses AI Recommends? Or One of the Hundreds It Ignores?</h3>
            <p className="text-gray-400 mb-6">Our free Blind Spot Report reveals exactly where you stand in AI&apos;s recommendation hierarchy, and what it would take to break in.</p>
            <Link href="/blindspot" className="inline-flex items-center gap-2 bg-[#FF6A00] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#e55f00] transition-colors">
              Get Your Free Blind Spot Report
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
            <div className="flex flex-wrap items-center gap-6 mt-6 pt-6 border-t border-[#FF6A00]/10">
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
            <span className="ae-section-label text-xs font-semibold uppercase tracking-widest mb-4 block" style={{ color: '#FF6A00' }}>FAQ</span>
            <h2 className="font-plus-jakarta text-3xl font-bold mb-8" style={{ color: '#FFFFFF' }}>
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {[
                {
                  q: 'Why does ChatGPT keep recommending the same businesses?',
                  a: 'ChatGPT draws heavily from a small pool of highly authoritative sources. The top 10 domains in any given topic capture nearly half of all citations. Businesses that appear on these dominant sources, particularly Wikipedia, major directories, and high-authority publications, get recommended repeatedly. Businesses that only exist on their own website or a single platform are effectively invisible to the model.',
                },
                {
                  q: 'Do all AI platforms recommend the same businesses?',
                  a: 'No. Each AI platform has different citation preferences and source biases. ChatGPT leans heavily on Wikipedia and established web authority. Perplexity draws disproportionately from Reddit and mid-tier directories. Google AI takes a more distributed approach. A business that dominates one platform may be completely absent from another.',
                },
                {
                  q: 'What specific signals do I need to out-rank an entrenched business in AI search?',
                  a: 'You need to close the citation volume gap on the sources each platform weighs most heavily. For ChatGPT, that means Wikipedia presence and mentions in high-authority publications. For Perplexity, it means active Reddit threads and mid-tier directory coverage. Across all platforms, you need entity consistency (identical name, address, services everywhere AI looks), reviews on 4 or more platforms, and content that directly answers the category questions AI gets asked most. The entrenched competitor likely has all of these — your job is to match or exceed them on the specific signals that matter for your target platform.',
                },
                {
                  q: 'How often does ChatGPT change its business recommendations?',
                  a: 'More often than most people assume. Research shows there is less than a 1 in 100 chance that ChatGPT will produce the exact same list of brand recommendations if asked the same question 100 times. The core winners appear frequently, but the rotation around those top slots is constant, creating real opportunities to capture recommendation share.',
                },
                {
                  q: 'Does Wikipedia really matter that much for AI recommendations?',
                  a: 'For ChatGPT, yes. Wikipedia alone accounts for 12.1% of all citations the model produces. It functions as a trust anchor. However, Wikipedia is less dominant for other platforms like Perplexity, which relies more heavily on Reddit and forum content. The answer depends on which AI platform matters most for your industry.',
                },
                {
                  q: 'Why does Perplexity recommend different businesses than ChatGPT?',
                  a: "Perplexity and ChatGPT use fundamentally different source hierarchies. Perplexity relies heavily on Reddit discussions, regional directories, and mid-tier review platforms. ChatGPT draws more from Wikipedia, established publications, and high-domain-authority websites. The same business can be highly visible on one platform and completely invisible on another.",
                },
                {
                  q: 'What is the "winner-take-all" dynamic in AI search?',
                  a: 'When the top 30 domains capture two-thirds of all citations in a topic, most businesses are competing for scraps. The businesses that break into the top tier get recommended repeatedly, building more authority, which leads to more recommendations. It is a self-reinforcing cycle that widens the gap over time.',
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

            {/* CTA after FAQ */}
            <div className="ae-cta-inline mt-8 p-5 rounded-xl" style={{ backgroundColor: 'rgba(255,106,0,0.06)', border: '1px solid rgba(255,106,0,0.2)' }}>
              <p className="text-sm text-gray-300 mb-3">Have a specific question about your business&apos;s AI recommendation standing? Our team analyzes these patterns every day.</p>
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
                className="ae-author-avatar w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 font-plus-jakarta font-extrabold text-xl"
                style={{ backgroundColor: 'rgba(255,106,0,0.2)', color: '#FF6A00' }}
              >
                AE
              </div>
              <div>
                <p className="font-plus-jakarta font-bold text-white mb-1">The Answer Engine Team</p>
                <p className="text-xs text-gray-500 mb-2">Published March 30, 2026 · Business Pain Points</p>
                <p className="text-sm text-gray-400 leading-relaxed">
                  The Answer Engine is a Los Angeles-based AEO and AI visibility agency. We help local businesses get recommended by ChatGPT, Perplexity, Google AI Overviews, Microsoft Copilot, and every other major AI recommendation engine. Our research into AI citation concentration patterns drives the strategies we use to move businesses from invisible to consistently recommended.
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
                  style={{ backgroundColor: 'rgba(255,106,0,0.2)', color: '#FF6A00', border: '1px solid rgba(255,106,0,0.4)' }}
                >
                  <span className="inline-block w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#FF6A00' }} />
                  Free AI Blind Spot Report Available Now
                </div>

                <h2 className="font-plus-jakarta text-3xl md:text-4xl font-extrabold text-white mb-4">
                  Break Into AI&apos;s Inner Circle
                </h2>

                <p className="text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed text-lg">
                  Get your free AI Blind Spot Report and discover what separates the businesses AI recommends from the ones it ignores. The concentration data is clear. The window is narrowing. The question is whether you act now or watch the gap widen.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
                  <Link
                    href="/blindspot"
                    className="ae-cta-primary inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-white text-lg transition-all hover:opacity-90"
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
                </div>

                <p className="text-xs text-gray-500">
                  No commitment. We audit your AI visibility across ChatGPT, Perplexity, Google AI, and Copilot and show you exactly where you stand, for free.
                </p>
              </div>
            </div>
          </div>

        </div>
      </main>
    </>
  )
}
