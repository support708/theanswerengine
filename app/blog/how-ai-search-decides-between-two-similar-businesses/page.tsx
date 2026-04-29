import type { Metadata } from 'next'
import Link from 'next/link'

export const revalidate = 86400
export const dynamic = 'force-static'
export const dynamicParams = true

const title = 'How AI Search Decides Between Two Similar Businesses'
const titleWithSuffix = `${title} | The Answer Engine`
const description =
  'When two businesses offer the same service in the same area, AI still picks one. Learn the tiebreaker signals that determine which business gets cited.'
const slug = 'how-ai-search-decides-between-two-similar-businesses'
const publishDate = '2026-04-01'

export const metadata: Metadata = {
  title: titleWithSuffix,
  description,
  keywords: [
    'AI search tiebreaker signals',
    'how AI decides between businesses',
    'AI citation momentum',
    'AI business recommendation factors',
    'ChatGPT business selection',
    'Perplexity citation signals',
    'AI search entity recognition',
    'answer engine optimization',
    'AI visibility for local businesses',
    'AI review pattern analysis',
    'content depth AI ranking',
    'cross-platform consistency AI',
  ],
  authors: [{ name: 'Justin Borges', url: 'https://theanswerengine.ai/about' }],
  openGraph: {
    title: titleWithSuffix,
    description,
    type: 'article',
    publishedTime: publishDate,
    authors: ['https://theanswerengine.ai/about'],
    url: `https://theanswerengine.ai/blog/${slug}`,
    images: [
      {
        url: `https://theanswerengine.ai/blog/${slug}.svg`,
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: titleWithSuffix,
    description,
    images: [`https://theanswerengine.ai/blog/${slug}.svg`],
  },
  alternates: {
    canonical: `https://theanswerengine.ai/blog/${slug}`,
  },
}

const faqItems = [
  {
    question: 'Do AI platforms actually compare two businesses side by side before recommending one?',
    answer:
      'No. AI platforms do not run a head-to-head comparison. They evaluate each business independently against a composite trust score built from entity clarity, content depth, review signals, freshness, and cross-source consistency. The business that scores higher on those dimensions surfaces in the response. The other one never appears at all.',
  },
  {
    question: 'What is citation momentum and why does it matter for AI visibility?',
    answer:
      'Citation momentum is the compounding effect where businesses that get cited by AI platforms early tend to get cited more often over time. Each citation reinforces the entity signals that AI models rely on, creating a feedback loop. Businesses with strong citation momentum become the default answer, while competitors without it fall further behind with every model update.',
  },
  {
    question: 'Can a newer business outrank an established competitor in AI search?',
    answer:
      'Yes, and it happens more often than most people expect. AI platforms do not weight business age as a direct ranking factor. A newer business with superior content depth, consistent structured data, active review generation, and strong entity recognition across platforms can overtake an established competitor that has neglected its digital presence.',
  },
  {
    question: 'How much do Google reviews actually influence AI recommendations?',
    answer:
      'Reviews are one of the strongest trust signals AI platforms evaluate. Volume, recency, sentiment, and the specificity of review content all contribute. A business with 300 recent, detailed reviews will consistently outperform a competitor with 50 older, generic reviews. AI models treat detailed review content as a secondary source of entity validation.',
  },
  {
    question: 'Does having more web pages or blog posts help with AI citations?',
    answer:
      'Volume alone does not help. What matters is content depth and topical authority. A business with 20 comprehensive, well-structured pages covering its core service areas will outperform one with 200 thin pages. AI platforms evaluate semantic completeness, not page count. Shallow content can actually dilute your authority signals.',
  },
  {
    question: 'How quickly can citation momentum shift between two competing businesses?',
    answer:
      'Citation patterns can shift within weeks after a major content or authority update. Research shows citation rates can decline by 34% in just five weeks when a competitor publishes stronger content or when a model update changes the weighting of trust signals. The businesses that maintain consistent optimization hold their position. Those that stop lose ground rapidly.',
  },
  {
    question: 'What role does freshness play when AI chooses between similar businesses?',
    answer:
      'Freshness is a critical tiebreaker. Data shows that 65% of AI bot crawl activity targets content less than one year old, and pages not updated quarterly are three times more likely to lose their citations. When two businesses are otherwise equal, the one publishing and updating content more recently will consistently win the recommendation.',
  },
  {
    question: 'Do different AI platforms pick different winners when comparing the same two businesses?',
    answer:
      'Yes. Research indicates that over 86% of the citation landscape varies across ChatGPT, Perplexity, Google AI, and other platforms. Each platform weights trust signals differently. A business might dominate in Perplexity citations but be invisible in ChatGPT. Comprehensive AI visibility requires optimization across all major platforms, not just one.',
  },
]

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
        '@id': `https://theanswerengine.ai/blog/${slug}`,
      },
      articleSection: 'Platform Deep Dives',
      wordCount: 4200,
    },
    {
      '@type': 'FAQPage',
      '@id': `https://theanswerengine.ai/blog/${slug}#faq`,
      mainEntity: faqItems.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
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
        <li className="text-gray-300 truncate max-w-xs">AI Search Tiebreaker Signals</li>
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

        {/* ════════════ HERO ════════════ */}
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
                id="hero-grid-118"
                x="0"
                y="0"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="#F27D24"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-grid-118)" />
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
              <span className="text-xs text-gray-500">April 1, 2026</span>
              <span className="text-xs text-gray-500">14 min read</span>
            </div>

            <h1
              className="font-plus-jakarta text-4xl md:text-5xl font-extrabold leading-tight mb-6"
              style={{ color: '#FFFFFF' }}
            >
              How AI Search Decides Between{' '}
              <span style={{ color: '#F27D24' }}>Two Similar Businesses</span>
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-3xl">
              Two plumbers. Same city. Same services. Same star rating. But when a customer asks ChatGPT, Perplexity, or Google AI for a recommendation, only one of them gets named. The other does not exist. Here is what separates the business that gets cited from the one that gets skipped.
            </p>

            {/* CTA 1: Hero */}
            <div className="ae-cta-inline flex flex-wrap items-center gap-4 mb-4">
              <a
                href="https://theanswerengine.ai/blindspot"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white transition-all hover:opacity-90"
                style={{ backgroundColor: '#F27D24' }}
              >
                Find Your AI Blind Spots
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
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

          {/* ════════════ STATS GRID ════════════ */}
          <section className="ae-stats-grid grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            <div
              className="ae-stat-card rounded-xl p-5 text-center"
              style={{ backgroundColor: 'rgba(255,106,0,0.08)', border: '1px solid rgba(255,106,0,0.2)' }}
            >
              <div className="font-plus-jakarta text-3xl font-extrabold mb-1" style={{ color: '#F27D24' }}>4.2x</div>
              <div className="text-xs text-gray-400 leading-snug">Higher citation rate for content scoring 8.5+ on semantic completeness</div>
            </div>
            <div
              className="ae-stat-card rounded-xl p-5 text-center"
              style={{ backgroundColor: 'rgba(255,106,0,0.08)', border: '1px solid rgba(255,106,0,0.2)' }}
            >
              <div className="font-plus-jakarta text-3xl font-extrabold mb-1" style={{ color: '#F27D24' }}>34%</div>
              <div className="text-xs text-gray-400 leading-snug">Citation rate decline possible in just five weeks without updates</div>
            </div>
            <div
              className="ae-stat-card rounded-xl p-5 text-center"
              style={{ backgroundColor: 'rgba(255,106,0,0.08)', border: '1px solid rgba(255,106,0,0.2)' }}
            >
              <div className="font-plus-jakarta text-3xl font-extrabold mb-1" style={{ color: '#F27D24' }}>86%</div>
              <div className="text-xs text-gray-400 leading-snug">Of the citation landscape varies across different AI platforms</div>
            </div>
            <div
              className="ae-stat-card rounded-xl p-5 text-center"
              style={{ backgroundColor: 'rgba(255,106,0,0.08)', border: '1px solid rgba(255,106,0,0.2)' }}
            >
              <div className="font-plus-jakarta text-3xl font-extrabold mb-1" style={{ color: '#F27D24' }}>65%</div>
              <div className="text-xs text-gray-400 leading-snug">Of AI bot hits target content less than one year old</div>
            </div>
          </section>

          {/* ════════════ TABLE OF CONTENTS ════════════ */}
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
                <a href="#identical-problem" className="hover:text-orange-400 transition-colors">The Identical Business Problem</a>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: '#F27D24' }}>02</span>
                <a href="#tiebreaker-signals" className="hover:text-orange-400 transition-colors">The Seven Tiebreaker Signals AI Actually Weighs</a>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: '#F27D24' }}>03</span>
                <a href="#citation-momentum" className="hover:text-orange-400 transition-colors">Citation Momentum: The Compounding Advantage</a>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: '#F27D24' }}>04</span>
                <a href="#platform-differences" className="hover:text-orange-400 transition-colors">How Each Platform Breaks Ties Differently</a>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: '#F27D24' }}>05</span>
                <a href="#entity-recognition" className="hover:text-orange-400 transition-colors">Entity Recognition: The Signal Most Businesses Ignore</a>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: '#F27D24' }}>06</span>
                <a href="#decision-matrix" className="hover:text-orange-400 transition-colors">Decision Matrix: Which Business Would AI Pick?</a>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: '#F27D24' }}>07</span>
                <a href="#cheat-sheet" className="hover:text-orange-400 transition-colors">AI Tiebreaker Cheat Sheet</a>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: '#F27D24' }}>08</span>
                <a href="#faq" className="hover:text-orange-400 transition-colors">Frequently Asked Questions</a>
              </li>
            </ol>
          </nav>

          {/* ════════════ SECTION 1: THE IDENTICAL BUSINESS PROBLEM ════════════ */}
          <section id="identical-problem" className="mb-14">
            <h2 className="font-plus-jakarta text-3xl font-bold mb-6" style={{ color: '#FFFFFF' }}>
              The Identical Business Problem
            </h2>

            <p className="text-gray-300 leading-relaxed mb-5">
              Imagine two electricians in Phoenix. Both licensed. Both insured. Both have 4.7 stars on Google. Both serve the same zip codes. Both have been in business for over a decade. On paper, they are interchangeable.
            </p>

            <p className="text-gray-300 leading-relaxed mb-5">
              Now a homeowner opens ChatGPT and types: "Who is the best electrician near me in Phoenix?" ChatGPT does not return both. It names one. The other electrician does not get a mention, a footnote, or even an honorable mention. That business simply does not exist in the AI's answer.
            </p>

            <p className="text-gray-300 leading-relaxed mb-5">
              This is the new reality of local business discovery. AI platforms do not present ten blue links. They do not show a map pack with three pins. They give one answer, sometimes two or three, and the rest of the market is invisible. The question every business owner needs to ask is not "am I good at what I do?" but "does the AI know I am good at what I do?"
            </p>

            {/* Callout: Warning */}
            <div
              className="ae-callout rounded-xl p-6 my-8"
              style={{ backgroundColor: 'rgba(234,179,8,0.08)', border: '1px solid rgba(234,179,8,0.25)' }}
            >
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#EAB308' }} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
                <div>
                  <p className="font-semibold mb-1" style={{ color: '#FCD34D' }}>The "Good Enough" Trap</p>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    Being a great business is necessary but no longer sufficient. AI platforms are not evaluating whether you are good at your job. They are evaluating whether the internet proves you are good at your job. The gap between those two things is where most businesses lose the tiebreaker.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed mb-5">
              AI Overviews now appear on roughly 48% of tracked search queries, up 58% year over year. Every month that passes, more customers are getting their answers from AI instead of scrolling through traditional results. The tiebreaker between two similar businesses is not a marginal concern. It is the entire game.
            </p>

            {/* CTA 2: Section End */}
            <div className="ae-cta-inline my-8 p-5 rounded-xl" style={{ backgroundColor: 'rgba(255,106,0,0.06)', border: '1px solid rgba(255,106,0,0.2)' }}>
              <p className="text-sm text-gray-300 mb-3">Not sure where you stand against your closest competitor in AI search? We will show you exactly what AI platforms see when they compare you.</p>
              <a
                href="https://theanswerengine.ai/blindspot"
                className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-80"
                style={{ color: '#F27D24' }}
              >
                Run Your Free AI Blind Spot Report
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
            </div>
          </section>

          {/* ════════════ SECTION 2: THE SEVEN TIEBREAKER SIGNALS ════════════ */}
          <section id="tiebreaker-signals" className="mb-14">
            <h2 className="font-plus-jakarta text-3xl font-bold mb-6" style={{ color: '#FFFFFF' }}>
              The Seven Tiebreaker Signals AI Actually Weighs
            </h2>

            <p className="text-gray-300 leading-relaxed mb-8">
              When two businesses look identical on the surface, AI platforms dig deeper into a set of signals that most business owners never think about. These are the dimensions that break the tie.
            </p>

            {/* Signal Cards Grid */}
            <div className="grid md:grid-cols-2 gap-5 mb-8">

              {/* Signal 1 */}
              <div
                className="rounded-xl p-6"
                style={{ backgroundColor: '#1a1f2e', border: '1px solid rgba(255,106,0,0.15)' }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: 'rgba(255,106,0,0.15)' }}
                >
                  <svg className="w-5 h-5" style={{ color: '#F27D24' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                </div>
                <h3 className="font-plus-jakarta font-bold text-white mb-2">1. Content Depth and Semantic Completeness</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  AI models measure how thoroughly your content covers a topic, not how many words you have. Semantic completeness (scoring 8.5+ out of 10) correlates with a 4.2x higher citation rate. Thin service pages with three bullet points lose to competitors whose pages answer every related question a customer might ask.
                </p>
              </div>

              {/* Signal 2 */}
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
                <h3 className="font-plus-jakarta font-bold text-white mb-2">2. Authority Signals Across the Web</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Domain authority remains the top predictor of AI citations. High-traffic sites earn 3x more AI citations than low-traffic ones. But it is not just your own site. Mentions on third-party publications, industry directories, and community platforms build the authority footprint that AI models evaluate during retrieval.
                </p>
              </div>

              {/* Signal 3 */}
              <div
                className="rounded-xl p-6"
                style={{ backgroundColor: '#1a1f2e', border: '1px solid rgba(255,106,0,0.15)' }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: 'rgba(255,106,0,0.15)' }}
                >
                  <svg className="w-5 h-5" style={{ color: '#F27D24' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h3 className="font-plus-jakarta font-bold text-white mb-2">3. Content Freshness</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  AI crawlers disproportionately target recent content: 65% of crawl activity hits pages less than a year old. Pages not updated quarterly are 3x more likely to lose citations. When two businesses have similar authority, the one that published or updated content more recently wins the tiebreaker.
                </p>
              </div>

              {/* Signal 4 */}
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
                <h3 className="font-plus-jakarta font-bold text-white mb-2">4. Entity Recognition and Structured Data</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  AI models build an internal representation of your business as an "entity" in a knowledge graph. Clean schema markup, consistent NAP data (name, address, phone), and structured attributes help the AI confidently identify what your business is, what it does, and where it operates. Ambiguity is a disqualifier.
                </p>
              </div>

              {/* Signal 5 */}
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
                <h3 className="font-plus-jakarta font-bold text-white mb-2">5. Review Patterns, Not Just Ratings</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  AI does not just read your star rating. It analyzes review velocity (how often new reviews arrive), review depth (detailed vs. generic), sentiment consistency, and cross-platform distribution. A business with steady, detailed reviews across Google, Yelp, and industry-specific platforms sends a stronger signal than one with a high rating but stale review history.
                </p>
              </div>

              {/* Signal 6 */}
              <div
                className="rounded-xl p-6"
                style={{ backgroundColor: '#1a1f2e', border: '1px solid rgba(255,106,0,0.15)' }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: 'rgba(255,106,0,0.15)' }}
                >
                  <svg className="w-5 h-5" style={{ color: '#F27D24' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                </div>
                <h3 className="font-plus-jakarta font-bold text-white mb-2">6. Response Consistency Across Platforms</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  When the information about your business is consistent across your website, directories, social profiles, and review sites, AI models gain confidence. When your phone number differs on Yelp vs. your website, or your service list varies between directories, the AI discounts your reliability. Consistency is a trust multiplier.
                </p>
              </div>

              {/* Signal 7 */}
              <div
                className="md:col-span-2 rounded-xl p-6"
                style={{ backgroundColor: '#1a1f2e', border: '1px solid rgba(255,106,0,0.15)' }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: 'rgba(255,106,0,0.15)' }}
                >
                  <svg className="w-5 h-5" style={{ color: '#F27D24' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                </div>
                <h3 className="font-plus-jakarta font-bold text-white mb-2">7. Multi-Modal Content Integration</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Businesses that combine text, images, video, and structured data see 156% higher selection rates compared to text-only content. AI platforms increasingly evaluate whether your content includes embedded media, video transcripts, original images, and data visualizations. The richer your content ecosystem, the more confidently AI can cite you as the authoritative source.
                </p>
              </div>
            </div>

            {/* CTA 3: After signals */}
            <div className="ae-cta-inline my-8 p-5 rounded-xl" style={{ backgroundColor: 'rgba(255,106,0,0.06)', border: '1px solid rgba(255,106,0,0.2)' }}>
              <p className="text-sm text-gray-300 mb-3">Want to know which of these seven signals your business is weakest on? Our AI Blind Spot Report scores you on every dimension.</p>
              <a
                href="https://theanswerengine.ai/blindspot"
                className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-80"
                style={{ color: '#F27D24' }}
              >
                Get Your Signal Breakdown
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
            </div>
          </section>

          {/* ════════════ SECTION 3: CITATION MOMENTUM ════════════ */}
          <section id="citation-momentum" className="mb-14">
            <h2 className="font-plus-jakarta text-3xl font-bold mb-6" style={{ color: '#FFFFFF' }}>
              Citation Momentum: The Compounding Advantage
            </h2>

            <p className="text-gray-300 leading-relaxed mb-5">
              Here is the concept most businesses miss entirely: citation momentum. Once a business starts getting cited by AI platforms, it tends to get cited more. And the business that is not getting cited? It falls further behind with every passing week.
            </p>

            <p className="text-gray-300 leading-relaxed mb-5">
              This happens because AI platforms reinforce their own patterns. When ChatGPT cites a business and the user engages positively (clicks the link, does not ask a follow-up correction), that signals the model made a good recommendation. Over time, the businesses that get early citation traction build a reinforcement loop that makes them increasingly difficult to displace.
            </p>

            {/* Comparison Table */}
            <div className="ae-comparison-table overflow-x-auto my-8">
              <table className="w-full text-sm" style={{ borderCollapse: 'separate', borderSpacing: 0 }}>
                <thead>
                  <tr>
                    <th className="text-left p-4 font-plus-jakarta font-bold rounded-tl-xl" style={{ backgroundColor: 'rgba(255,106,0,0.15)', color: '#F27D24' }}>Signal Dimension</th>
                    <th className="text-center p-4 font-plus-jakarta font-bold" style={{ backgroundColor: 'rgba(255,106,0,0.15)', color: '#F27D24' }}>Business With Momentum</th>
                    <th className="text-center p-4 font-plus-jakarta font-bold rounded-tr-xl" style={{ backgroundColor: 'rgba(255,106,0,0.15)', color: '#F27D24' }}>Business Without Momentum</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <td className="p-4 text-gray-300" style={{ backgroundColor: '#1a1f2e' }}>Citation frequency</td>
                    <td className="p-4 text-center text-green-400" style={{ backgroundColor: '#1a1f2e' }}>Increasing weekly</td>
                    <td className="p-4 text-center text-red-400" style={{ backgroundColor: '#1a1f2e' }}>Flat or declining</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <td className="p-4 text-gray-300" style={{ backgroundColor: '#151922' }}>Entity confidence score</td>
                    <td className="p-4 text-center text-green-400" style={{ backgroundColor: '#151922' }}>Strengthening with each citation</td>
                    <td className="p-4 text-center text-red-400" style={{ backgroundColor: '#151922' }}>Stagnant or eroding</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <td className="p-4 text-gray-300" style={{ backgroundColor: '#1a1f2e' }}>Cross-platform presence</td>
                    <td className="p-4 text-center text-green-400" style={{ backgroundColor: '#1a1f2e' }}>Expanding (cited on ChatGPT, Perplexity, Google AI)</td>
                    <td className="p-4 text-center text-red-400" style={{ backgroundColor: '#1a1f2e' }}>Limited to one platform or none</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <td className="p-4 text-gray-300" style={{ backgroundColor: '#151922' }}>Content freshness signals</td>
                    <td className="p-4 text-center text-green-400" style={{ backgroundColor: '#151922' }}>Updated monthly, signals recency</td>
                    <td className="p-4 text-center text-red-400" style={{ backgroundColor: '#151922' }}>Last updated 6+ months ago</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-gray-300 rounded-bl-xl" style={{ backgroundColor: '#1a1f2e' }}>Recovery difficulty</td>
                    <td className="p-4 text-center text-green-400" style={{ backgroundColor: '#1a1f2e' }}>N/A (already leading)</td>
                    <td className="p-4 text-center text-red-400 rounded-br-xl" style={{ backgroundColor: '#1a1f2e' }}>2 to 4 months of sustained effort</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Callout: Info */}
            <div
              className="ae-callout rounded-xl p-6 my-8"
              style={{ backgroundColor: 'rgba(59,130,246,0.08)', border: '1px solid rgba(59,130,246,0.25)' }}
            >
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#3B82F6' }} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" /></svg>
                <div>
                  <p className="font-semibold mb-1" style={{ color: '#93C5FD' }}>Why First-Mover Advantage Matters More Than Ever</p>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    Distributing content across multiple platforms can increase AI citations by up to 325% compared to publishing only on your own site. The businesses that build citation momentum first are not just winning today. They are making it structurally harder for competitors to catch up tomorrow.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed mb-5">
              Think of citation momentum like compound interest. Small, consistent investments in content quality, entity signals, and cross-platform presence accumulate over time. The business that starts today has an advantage over the one that starts next month. And the one that started last year? They may already be uncatchable in your market.
            </p>

            {/* CTA 4: Internal link */}
            <div className="ae-cta-inline my-8 p-5 rounded-xl" style={{ backgroundColor: 'rgba(255,106,0,0.06)', border: '1px solid rgba(255,106,0,0.2)' }}>
              <p className="text-sm text-gray-300 mb-3">Want to understand how Perplexity specifically evaluates citation-worthiness? Read our deep dive.</p>
              <Link
                href="/blog/how-perplexity-decides-what-to-cite"
                className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-80"
                style={{ color: '#F27D24' }}
              >
                How Perplexity Decides What to Cite
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </section>

          {/* ════════════ SECTION 4: PLATFORM DIFFERENCES ════════════ */}
          <section id="platform-differences" className="mb-14">
            <h2 className="font-plus-jakarta text-3xl font-bold mb-6" style={{ color: '#FFFFFF' }}>
              How Each Platform Breaks Ties Differently
            </h2>

            <p className="text-gray-300 leading-relaxed mb-5">
              One of the most dangerous assumptions businesses make is that "AI search" is a monolith. It is not. Each platform has its own retrieval pipeline, its own trust model, and its own way of deciding which business to name. The winner on one platform can easily be the loser on another.
            </p>

            {/* Platform Cards */}
            <div className="space-y-5 mb-8">
              <div
                className="rounded-xl p-6"
                style={{ backgroundColor: '#1a1f2e', border: '1px solid rgba(255,106,0,0.15)' }}
              >
                <h3 className="font-plus-jakarta font-bold text-white mb-3">ChatGPT: Trained Knowledge + Live Retrieval</h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-3">
                  ChatGPT combines its training data with live Bing web searches. For local queries, it heavily weights branded web mentions, YouTube presence, and review aggregator data. Businesses with strong content on third-party platforms (not just their own website) perform significantly better in ChatGPT recommendations.
                </p>
                <p className="text-sm text-gray-400 leading-relaxed">
                  The tiebreaker in ChatGPT often comes down to which business has more diverse, corroborating mentions across the web. A single strong website is not enough. ChatGPT wants to see your name in multiple trusted contexts.
                </p>
              </div>

              <div
                className="rounded-xl p-6"
                style={{ backgroundColor: '#1a1f2e', border: '1px solid rgba(255,106,0,0.15)' }}
              >
                <h3 className="font-plus-jakarta font-bold text-white mb-3">Perplexity: Source Quality and Recency</h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-3">
                  Perplexity operates more like a research engine. It pulls from its own index and ranks sources by freshness, citation density, and source authority. Perplexity is especially sensitive to how recently content was published or updated. A competitor who published a comprehensive guide last week can overtake you even if your content has been ranking for years.
                </p>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Perplexity also surfaces inline citations, which means the quality and structure of your content directly impacts whether you get named or merely linked in a footnote.
                </p>
              </div>

              <div
                className="rounded-xl p-6"
                style={{ backgroundColor: '#1a1f2e', border: '1px solid rgba(255,106,0,0.15)' }}
              >
                <h3 className="font-plus-jakarta font-bold text-white mb-3">Google AI (AI Mode and AI Overviews)</h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-3">
                  Google's AI features draw from its own search index, and there is a strong correlation between traditional organic rankings and AI citation selection. Data from early 2026 shows that roughly 76% of AI Overview citations used to come from top-10 ranked pages, but that figure has dropped to as low as one in six. Google is increasingly pulling from authoritative sources regardless of traditional ranking position.
                </p>
                <p className="text-sm text-gray-400 leading-relaxed">
                  For tiebreakers, Google AI weighs structured data, schema markup, and E-E-A-T signals (Experience, Expertise, Authoritativeness, Trustworthiness) more heavily than other platforms.
                </p>
              </div>

              <div
                className="rounded-xl p-6"
                style={{ backgroundColor: '#1a1f2e', border: '1px solid rgba(255,106,0,0.15)' }}
              >
                <h3 className="font-plus-jakarta font-bold text-white mb-3">Claude: Authority Depth and Content Structure</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Claude evaluates business authority through the depth and structure of available content. It places significant weight on how well-organized and logically structured your information is. Businesses with comprehensive, hierarchically structured service pages, clear FAQ sections, and well-attributed claims consistently outperform competitors with equivalent but poorly structured content.
                </p>
              </div>
            </div>

            {/* CTA 5: Internal links */}
            <div className="ae-cta-inline my-8 p-5 rounded-xl" style={{ backgroundColor: 'rgba(255,106,0,0.06)', border: '1px solid rgba(255,106,0,0.2)' }}>
              <p className="text-sm text-gray-300 mb-3">Dive deeper into how individual platforms evaluate business authority:</p>
              <div className="flex flex-col gap-2">
                <Link
                  href="/blog/how-claude-ai-evaluates-business-authority"
                  className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-80"
                  style={{ color: '#F27D24' }}
                >
                  How Claude AI Evaluates Business Authority
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
                <Link
                  href="/blog/which-ai-assistant-is-best-for-finding-local-businesses"
                  className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-80"
                  style={{ color: '#F27D24' }}
                >
                  Which AI Assistant Is Best for Finding Local Businesses
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
              </div>
            </div>
          </section>

          {/* ════════════ SECTION 5: ENTITY RECOGNITION ════════════ */}
          <section id="entity-recognition" className="mb-14">
            <h2 className="font-plus-jakarta text-3xl font-bold mb-6" style={{ color: '#FFFFFF' }}>
              Entity Recognition: The Signal Most Businesses Ignore
            </h2>

            <p className="text-gray-300 leading-relaxed mb-5">
              AI platforms do not think in terms of websites. They think in terms of entities. An entity is the AI's internal representation of your business: what it is, what it does, where it operates, and how confident the model is in that identification. When the AI cannot confidently identify your entity, it will not recommend you, period.
            </p>

            <p className="text-gray-300 leading-relaxed mb-5">
              Entity recognition is where most tiebreakers are won and lost. Two businesses might have equally good websites, but if one has a clean, unambiguous entity footprint across the web and the other has conflicting information, inconsistent naming, or fragmented digital presence, the AI will always choose the one it can identify with higher confidence.
            </p>

            {/* Pros/Cons */}
            <div className="ae-pros-cons grid md:grid-cols-2 gap-5 my-8">
              <div
                className="rounded-xl p-6"
                style={{ backgroundColor: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.2)' }}
              >
                <h3 className="font-plus-jakarta font-bold mb-4" style={{ color: '#22C55E' }}>
                  <span className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    Strong Entity Signals
                  </span>
                </h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start gap-2"><span style={{ color: '#22C55E' }}>+</span> Identical business name across all directories</li>
                  <li className="flex items-start gap-2"><span style={{ color: '#22C55E' }}>+</span> Consistent phone number and address everywhere</li>
                  <li className="flex items-start gap-2"><span style={{ color: '#22C55E' }}>+</span> Schema markup on every page of your site</li>
                  <li className="flex items-start gap-2"><span style={{ color: '#22C55E' }}>+</span> Wikipedia or Wikidata presence (if applicable)</li>
                  <li className="flex items-start gap-2"><span style={{ color: '#22C55E' }}>+</span> Third-party articles that name and describe your business</li>
                  <li className="flex items-start gap-2"><span style={{ color: '#22C55E' }}>+</span> Clear service area definitions in structured data</li>
                </ul>
              </div>

              <div
                className="rounded-xl p-6"
                style={{ backgroundColor: 'rgba(239,68,68,0.06)', border: '1px solid rgba(239,68,68,0.2)' }}
              >
                <h3 className="font-plus-jakarta font-bold mb-4" style={{ color: '#EF4444' }}>
                  <span className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" /></svg>
                    Weak Entity Signals
                  </span>
                </h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start gap-2"><span style={{ color: '#EF4444' }}>-</span> Business name varies across platforms</li>
                  <li className="flex items-start gap-2"><span style={{ color: '#EF4444' }}>-</span> Old phone numbers or addresses still listed</li>
                  <li className="flex items-start gap-2"><span style={{ color: '#EF4444' }}>-</span> No schema markup or generic schema only</li>
                  <li className="flex items-start gap-2"><span style={{ color: '#EF4444' }}>-</span> No mentions outside your own website</li>
                  <li className="flex items-start gap-2"><span style={{ color: '#EF4444' }}>-</span> Duplicate or conflicting directory listings</li>
                  <li className="flex items-start gap-2"><span style={{ color: '#EF4444' }}>-</span> Service areas undefined or overly broad</li>
                </ul>
              </div>
            </div>

            {/* Callout: Success */}
            <div
              className="ae-callout rounded-xl p-6 my-8"
              style={{ backgroundColor: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.25)' }}
            >
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#22C55E' }} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                <div>
                  <p className="font-semibold mb-1" style={{ color: '#86EFAC' }}>The 85% Factor</p>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    Research shows that 85% of brand mentions in AI responses originate from third-party pages, not from the business's own website. This means the entity signals that matter most are the ones you do not directly control. Building your presence on external platforms is not optional for AI visibility.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA 6: Email */}
            <div className="ae-cta-inline my-8 p-5 rounded-xl" style={{ backgroundColor: 'rgba(255,106,0,0.06)', border: '1px solid rgba(255,106,0,0.2)' }}>
              <p className="text-sm text-gray-300 mb-3">Our team audits entity recognition across every major AI platform. If your competitor is getting cited and you are not, entity signals are usually why.</p>
              <a
                href="mailto:support@theanswerengine.ai"
                className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-80"
                style={{ color: '#F27D24' }}
              >
                Email Us for an Entity Audit
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </a>
            </div>
          </section>

          {/* ════════════ SECTION 6: DECISION MATRIX ════════════ */}
          <section id="decision-matrix" className="mb-14">
            <h2 className="font-plus-jakarta text-3xl font-bold mb-6" style={{ color: '#FFFFFF' }}>
              Decision Matrix: Which Business Would AI Pick?
            </h2>

            <p className="text-gray-300 leading-relaxed mb-8">
              Below is a head-to-head comparison showing how AI platforms evaluate two hypothetical businesses in the same market. This is the exact type of evaluation that determines who gets cited and who gets ignored.
            </p>

            <div className="ae-decision-matrix overflow-x-auto my-8">
              <table className="w-full text-sm" style={{ borderCollapse: 'separate', borderSpacing: 0 }}>
                <thead>
                  <tr>
                    <th className="text-left p-4 font-plus-jakarta font-bold rounded-tl-xl" style={{ backgroundColor: 'rgba(255,106,0,0.15)', color: '#F27D24' }}>Evaluation Criteria</th>
                    <th className="text-center p-4 font-plus-jakarta font-bold" style={{ backgroundColor: 'rgba(34,197,94,0.15)', color: '#22C55E' }}>Business A (Cited)</th>
                    <th className="text-center p-4 font-plus-jakarta font-bold rounded-tr-xl" style={{ backgroundColor: 'rgba(239,68,68,0.15)', color: '#EF4444' }}>Business B (Invisible)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <td className="p-4 text-gray-300 font-medium" style={{ backgroundColor: '#1a1f2e' }}>Website content depth</td>
                    <td className="p-4 text-center text-gray-300" style={{ backgroundColor: '#1a1f2e' }}>22 detailed service pages with FAQ sections</td>
                    <td className="p-4 text-center text-gray-300" style={{ backgroundColor: '#1a1f2e' }}>5 generic service pages, no FAQs</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <td className="p-4 text-gray-300 font-medium" style={{ backgroundColor: '#151922' }}>Review velocity</td>
                    <td className="p-4 text-center text-gray-300" style={{ backgroundColor: '#151922' }}>8 to 12 new reviews per month</td>
                    <td className="p-4 text-center text-gray-300" style={{ backgroundColor: '#151922' }}>1 to 2 new reviews per month</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <td className="p-4 text-gray-300 font-medium" style={{ backgroundColor: '#1a1f2e' }}>Directory consistency</td>
                    <td className="p-4 text-center text-gray-300" style={{ backgroundColor: '#1a1f2e' }}>100% NAP match across 40+ directories</td>
                    <td className="p-4 text-center text-gray-300" style={{ backgroundColor: '#1a1f2e' }}>3 conflicting phone numbers found</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <td className="p-4 text-gray-300 font-medium" style={{ backgroundColor: '#151922' }}>Schema markup</td>
                    <td className="p-4 text-center text-gray-300" style={{ backgroundColor: '#151922' }}>LocalBusiness, Service, FAQ, Review schemas</td>
                    <td className="p-4 text-center text-gray-300" style={{ backgroundColor: '#151922' }}>No schema markup at all</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <td className="p-4 text-gray-300 font-medium" style={{ backgroundColor: '#1a1f2e' }}>Last content update</td>
                    <td className="p-4 text-center text-gray-300" style={{ backgroundColor: '#1a1f2e' }}>2 weeks ago</td>
                    <td className="p-4 text-center text-gray-300" style={{ backgroundColor: '#1a1f2e' }}>14 months ago</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <td className="p-4 text-gray-300 font-medium" style={{ backgroundColor: '#151922' }}>Third-party mentions</td>
                    <td className="p-4 text-center text-gray-300" style={{ backgroundColor: '#151922' }}>Featured in 3 local publications, active on YouTube</td>
                    <td className="p-4 text-center text-gray-300" style={{ backgroundColor: '#151922' }}>No external mentions found</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-gray-300 font-medium rounded-bl-xl" style={{ backgroundColor: '#1a1f2e' }}>Multi-modal content</td>
                    <td className="p-4 text-center text-gray-300" style={{ backgroundColor: '#1a1f2e' }}>Video, images, infographics on key pages</td>
                    <td className="p-4 text-center text-gray-300 rounded-br-xl" style={{ backgroundColor: '#1a1f2e' }}>Text only, stock photos</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Callout: Warning */}
            <div
              className="ae-callout rounded-xl p-6 my-8"
              style={{ backgroundColor: 'rgba(234,179,8,0.08)', border: '1px solid rgba(234,179,8,0.25)' }}
            >
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#EAB308' }} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
                <div>
                  <p className="font-semibold mb-1" style={{ color: '#FCD34D' }}>Both Businesses Have 4.7 Stars</p>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    Notice that both businesses in this scenario could have identical star ratings. The difference is not quality of service. It is quality of digital presence. Business B might actually be the better electrician, but the AI will never know that because the signals are not there. AI cannot evaluate what it cannot see.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA 7: Phone */}
            <div className="ae-cta-inline my-8 p-5 rounded-xl" style={{ backgroundColor: 'rgba(255,106,0,0.06)', border: '1px solid rgba(255,106,0,0.2)' }}>
              <p className="text-sm text-gray-300 mb-3">Want to see your own head-to-head comparison against your top competitor? We build these reports for businesses every day.</p>
              <a
                href="tel:+12134442229"
                className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-80"
                style={{ color: '#F27D24' }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                Call (213) 444-2229 for a Competitor Comparison
              </a>
            </div>
          </section>

          {/* ════════════ SECTION 7: CHEAT SHEET ════════════ */}
          <section id="cheat-sheet" className="mb-14">
            <h2 className="font-plus-jakarta text-3xl font-bold mb-6" style={{ color: '#FFFFFF' }}>
              AI Tiebreaker Cheat Sheet
            </h2>

            <p className="text-gray-300 leading-relaxed mb-8">
              If you remember nothing else from this article, remember this. When AI is choosing between your business and your competitor, these are the factors that break the tie, listed in approximate order of impact.
            </p>

            <div className="ae-cheat-sheet rounded-xl p-6 mb-8" style={{ backgroundColor: '#1a1f2e', border: '1px solid rgba(255,106,0,0.15)' }}>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-lg" style={{ backgroundColor: 'rgba(255,106,0,0.06)' }}>
                  <span className="font-plus-jakarta text-2xl font-extrabold flex-shrink-0" style={{ color: '#F27D24' }}>1</span>
                  <div>
                    <p className="font-semibold text-white mb-1">Content Depth Wins Over Content Volume</p>
                    <p className="text-sm text-gray-400">20 comprehensive pages outperform 200 thin pages. Semantic completeness is the single highest-correlation factor for AI citations.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg" style={{ backgroundColor: 'rgba(255,106,0,0.06)' }}>
                  <span className="font-plus-jakarta text-2xl font-extrabold flex-shrink-0" style={{ color: '#F27D24' }}>2</span>
                  <div>
                    <p className="font-semibold text-white mb-1">Entity Clarity Is Non-Negotiable</p>
                    <p className="text-sm text-gray-400">Consistent NAP data, clean schema markup, and unambiguous entity identification across all platforms. Any conflicting signal is a penalty.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg" style={{ backgroundColor: 'rgba(255,106,0,0.06)' }}>
                  <span className="font-plus-jakarta text-2xl font-extrabold flex-shrink-0" style={{ color: '#F27D24' }}>3</span>
                  <div>
                    <p className="font-semibold text-white mb-1">Third-Party Mentions Trump Self-Promotion</p>
                    <p className="text-sm text-gray-400">85% of AI brand mentions come from third-party pages. Your own website is the starting point, not the finish line.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg" style={{ backgroundColor: 'rgba(255,106,0,0.06)' }}>
                  <span className="font-plus-jakarta text-2xl font-extrabold flex-shrink-0" style={{ color: '#F27D24' }}>4</span>
                  <div>
                    <p className="font-semibold text-white mb-1">Freshness Is a Tiebreaker, Not a Bonus</p>
                    <p className="text-sm text-gray-400">When all else is equal, the business with more recent content wins. Quarterly updates are the minimum. Monthly is the standard for competitive markets.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg" style={{ backgroundColor: 'rgba(255,106,0,0.06)' }}>
                  <span className="font-plus-jakarta text-2xl font-extrabold flex-shrink-0" style={{ color: '#F27D24' }}>5</span>
                  <div>
                    <p className="font-semibold text-white mb-1">Review Velocity Matters More Than Review Count</p>
                    <p className="text-sm text-gray-400">A steady stream of recent, detailed reviews across multiple platforms signals active customer engagement. 500 reviews from 2022 are worth less than 50 from this month.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg" style={{ backgroundColor: 'rgba(255,106,0,0.06)' }}>
                  <span className="font-plus-jakarta text-2xl font-extrabold flex-shrink-0" style={{ color: '#F27D24' }}>6</span>
                  <div>
                    <p className="font-semibold text-white mb-1">Multi-Platform Optimization Is Required</p>
                    <p className="text-sm text-gray-400">86% of the citation landscape varies across AI platforms. Winning on ChatGPT does not mean winning on Perplexity. You need a strategy for each.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg" style={{ backgroundColor: 'rgba(255,106,0,0.06)' }}>
                  <span className="font-plus-jakarta text-2xl font-extrabold flex-shrink-0" style={{ color: '#F27D24' }}>7</span>
                  <div>
                    <p className="font-semibold text-white mb-1">Citation Momentum Compounds</p>
                    <p className="text-sm text-gray-400">The first business to build citation momentum in a market creates a structural advantage that becomes harder to overcome with every passing month. Starting today is the best move available.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA 8: Blindspot */}
            <div className="ae-cta-inline my-8 p-5 rounded-xl" style={{ backgroundColor: 'rgba(255,106,0,0.06)', border: '1px solid rgba(255,106,0,0.2)' }}>
              <p className="text-sm text-gray-300 mb-3">This cheat sheet is the starting point. The specific priorities for your business depend on your market, your competitors, and your current signal profile.</p>
              <a
                href="https://theanswerengine.ai/blindspot"
                className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-80"
                style={{ color: '#F27D24' }}
              >
                Get Your Personalized Priority List
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
            </div>
          </section>

          {/* ════════════ 3-TIER CTA BLOCK ════════════ */}
          <section className="mb-14">
            <div
              className="ae-cta-block rounded-2xl p-8 md:p-12"
              style={{
                background: 'linear-gradient(135deg, rgba(255,106,0,0.12) 0%, rgba(255,106,0,0.04) 100%)',
                border: '2px solid rgba(255,106,0,0.3)',
              }}
            >
              <h2 className="font-plus-jakarta text-3xl md:text-4xl font-extrabold text-center mb-4" style={{ color: '#FFFFFF' }}>
                Find Out Which Business AI Is{' '}
                <span style={{ color: '#F27D24' }}>Actually Recommending</span>
              </h2>

              <p className="text-gray-300 text-center leading-relaxed mb-8 max-w-2xl mx-auto">
                Your competitor might be getting every AI citation in your market right now. Our AI Blind Spot Report shows you exactly where you stand, which signals are weak, and what it takes to become the business AI recommends first.
              </p>

              {/* CTA 9: Primary Button */}
              <div className="flex flex-col items-center gap-4">
                <a
                  href="https://theanswerengine.ai/blindspot"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-lg text-white transition-all hover:opacity-90 hover:scale-105"
                  style={{ backgroundColor: '#F27D24', boxShadow: '0 0 30px rgba(255,106,0,0.3)' }}
                >
                  Run Your AI Blind Spot Report
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </a>

                {/* CTA 10: Phone */}
                <a
                  href="tel:+12134442229"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all hover:opacity-90"
                  style={{ backgroundColor: 'rgba(255,106,0,0.1)', color: '#F27D24', border: '1px solid rgba(255,106,0,0.3)' }}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  Call (213) 444-2229
                </a>

                {/* CTA 11: Email */}
                <a
                  href="mailto:support@theanswerengine.ai"
                  className="inline-flex items-center gap-2 text-sm transition-colors hover:opacity-80"
                  style={{ color: '#F27D24' }}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  support@theanswerengine.ai
                </a>
              </div>
            </div>
          </section>

          {/* ════════════ AUTHOR CARD ════════════ */}
          <section className="mb-14">
            <div
              className="ae-author-card rounded-xl p-6 flex flex-col md:flex-row items-start gap-6"
              style={{ backgroundColor: '#1a1f2e', border: '1px solid rgba(255,106,0,0.1)' }}
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: 'rgba(255,106,0,0.15)' }}
              >
                <svg className="w-8 h-8" style={{ color: '#F27D24' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <p className="font-plus-jakarta font-bold text-white mb-1">Justin Borges</p>
                <p className="text-sm text-gray-400 leading-relaxed mb-3">
                  We help businesses become the answer AI gives. Our team audits, optimizes, and monitors AI visibility across every major platform so that when a customer asks AI for a recommendation, your business is the one that gets named.
                </p>
                <a
                  href="https://theanswerengine.ai/blindspot"
                  className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-80"
                  style={{ color: '#F27D24' }}
                >
                  Learn What We Do
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </a>
              </div>
            </div>
          </section>

          {/* ════════════ FAQ SECTION ════════════ */}
          <section id="faq" className="mb-14">
            <h2 className="font-plus-jakarta text-3xl font-bold mb-8" style={{ color: '#FFFFFF' }}>
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <div
                  key={index}
                  className="rounded-xl overflow-hidden"
                  style={{ backgroundColor: '#1a1f2e', border: '1px solid rgba(255,106,0,0.1)' }}
                >
                  <div className="p-5">
                    <h3 className="font-plus-jakarta font-bold text-white mb-3 flex items-start gap-3">
                      <span
                        className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold mt-0.5"
                        style={{ backgroundColor: 'rgba(255,106,0,0.15)', color: '#F27D24' }}
                      >
                        {index + 1}
                      </span>
                      {item.question}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed pl-10">
                      {item.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA 12: After FAQ */}
            <div className="ae-cta-inline my-8 p-5 rounded-xl" style={{ backgroundColor: 'rgba(255,106,0,0.06)', border: '1px solid rgba(255,106,0,0.2)' }}>
              <p className="text-sm text-gray-300 mb-3">Still have questions about how AI platforms choose between businesses in your market? We are happy to walk you through it.</p>
              <a
                href="mailto:support@theanswerengine.ai"
                className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-80"
                style={{ color: '#F27D24' }}
              >
                Ask Us Anything
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
            </div>
          </section>

          {/* ════════════ RELATED READING ════════════ */}
          <section className="mb-14">
            <h2 className="font-plus-jakarta text-2xl font-bold mb-6" style={{ color: '#FFFFFF' }}>
              Related Reading
            </h2>

            <div className="grid md:grid-cols-3 gap-4">
              <Link
                href="/blog/how-perplexity-decides-what-to-cite"
                className="group rounded-xl p-5 transition-all hover:scale-[1.02]"
                style={{ backgroundColor: '#1a1f2e', border: '1px solid rgba(255,106,0,0.1)' }}
              >
                <span className="text-xs uppercase tracking-widest mb-2 block" style={{ color: '#F27D24' }}>Platform Deep Dive</span>
                <span className="font-plus-jakarta font-bold text-white group-hover:text-orange-400 transition-colors block text-sm">How Perplexity Decides What to Cite</span>
              </Link>

              <Link
                href="/blog/how-claude-ai-evaluates-business-authority"
                className="group rounded-xl p-5 transition-all hover:scale-[1.02]"
                style={{ backgroundColor: '#1a1f2e', border: '1px solid rgba(255,106,0,0.1)' }}
              >
                <span className="text-xs uppercase tracking-widest mb-2 block" style={{ color: '#F27D24' }}>Platform Deep Dive</span>
                <span className="font-plus-jakarta font-bold text-white group-hover:text-orange-400 transition-colors block text-sm">How Claude AI Evaluates Business Authority</span>
              </Link>

              <Link
                href="/blog/which-ai-assistant-is-best-for-finding-local-businesses"
                className="group rounded-xl p-5 transition-all hover:scale-[1.02]"
                style={{ backgroundColor: '#1a1f2e', border: '1px solid rgba(255,106,0,0.1)' }}
              >
                <span className="text-xs uppercase tracking-widest mb-2 block" style={{ color: '#F27D24' }}>Comparison Guide</span>
                <span className="font-plus-jakarta font-bold text-white group-hover:text-orange-400 transition-colors block text-sm">Which AI Assistant Is Best for Finding Local Businesses</span>
              </Link>
            </div>
          </section>

          {/* ════════════ FINAL CTA ════════════ */}
          <section className="mb-14">
            <div
              className="ae-final-cta rounded-2xl p-8 text-center"
              style={{
                background: 'linear-gradient(180deg, #1a1f2e 0%, #0F1117 100%)',
                border: '1px solid rgba(255,106,0,0.2)',
              }}
            >
              <h2 className="font-plus-jakarta text-2xl font-bold mb-4" style={{ color: '#FFFFFF' }}>
                Your Competitor Is Getting Cited. Are You?
              </h2>
              <p className="text-gray-400 mb-6 max-w-lg mx-auto text-sm leading-relaxed">
                Every day you wait is another day your competitor builds citation momentum that becomes harder to overcome. The businesses that act first in AI search are the ones that stay on top.
              </p>
              {/* CTA 13: Final blindspot */}
              <a
                href="https://theanswerengine.ai/blindspot"
                className="ae-final-cta-pulse inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white transition-all hover:opacity-90"
                style={{ backgroundColor: '#F27D24' }}
              >
                See Where You Stand in AI Search
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
              <p className="text-xs text-gray-500 mt-4">Free report. No obligation. Takes 60 seconds.</p>
            </div>
          </section>

          {/* ════════════ BREADCRUMB BOTTOM + CTA 15 ════════════ */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            <nav aria-label="Breadcrumb (bottom)" className="text-sm text-gray-500">
              <Link href="/" className="hover:text-orange-400 transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/blog" className="hover:text-orange-400 transition-colors">Blog</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-400">AI Search Tiebreaker Signals</span>
            </nav>
            {/* CTA 15: Bottom nav */}
            <a
              href="https://theanswerengine.ai/blindspot"
              className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-80"
              style={{ color: '#F27D24' }}
            >
              Get Your AI Blind Spot Report
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
          </div>

        </div>
      </main>
    </>
  )
}
