import type { Metadata } from 'next'
import Link from 'next/link'

export const revalidate = 86400
export const dynamic = 'force-static'
export const dynamicParams = true

const title = 'Why AI Recommends Chains Over Local Businesses'
const description =
  'AI search often surfaces national chains instead of local businesses. Learn why this happens and what signals shift AI recommendations in your favor.'
const slug = 'why-ai-recommends-chains-over-local-businesses'
const publishDate = '2026-04-03'

export const metadata: Metadata = {
  title: `${title} | The Answer Engine`,
  description,
  keywords: [
    'AI recommends chains over local',
    'why AI favors big brands',
    'local business AI visibility',
    'ChatGPT national chain bias',
    'AI search local business gap',
    'answer engine optimization local',
    'AI visibility gap small business',
    'get local business recommended by AI',
    'ChatGPT local recommendations',
    'Perplexity local business',
    'AI search structured data',
    'local vs national AI search',
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
      datePublished: '2026-04-03T09:00:00-07:00',
      dateModified: '2026-04-03T09:00:00-07:00',
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
    },
    {
      '@type': 'FAQPage',
      '@id': `https://theanswerengine.ai/blog/${slug}#faq`,
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Does AI intentionally favor national chains over local businesses?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. AI models do not have a deliberate preference for chains. They favor clear, structured, authoritative information, and national chains happen to have more of it. Chains have dedicated marketing teams producing consistent content, structured data at scale, and presence across hundreds of directories. Local businesses that match that information quality can compete and often win on specificity and niche expertise.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why does ChatGPT recommend big brands instead of local alternatives?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'ChatGPT builds its knowledge from web content. Large brands have more content, more directory listings, more reviews, and more third-party mentions. When an AI model sees a business referenced consistently across dozens of authoritative sources, it treats that business as a safer recommendation. Most local businesses only appear on their own website and a Google Business Profile, which is not enough signal.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can a small local business outrank a national chain in AI search?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. AI models reward relevance and clarity over size. A local business that clearly explains what it does, who it serves, where it operates, and why it is the best choice in that market can outperform a generic chain page that says the same thing in every city. Specificity is a competitive advantage that chains structurally cannot replicate at the local level.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the AI visibility gap for local businesses?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The AI visibility gap describes the difference between how well a business actually serves its market and how visible that business is to AI recommendation engines. A strong local business with great reviews and loyal customers can be completely invisible to AI if its online presence is incomplete, inconsistent, or poorly structured. Closing that gap is the core goal of Answer Engine Optimization.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does consistent NAP data really matter for AI recommendations?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, significantly. NAP stands for name, address, and phone number. When AI models see a business listed with the same name, address, and phone number across dozens of directories and platforms, it reinforces the business as a real, stable entity. Inconsistent NAP data, for example different phone numbers on different platforms, is a trust signal failure that can prevent AI from confidently recommending a business.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are chains actually better than local businesses at serving customers?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Not necessarily. Chains often have broad reach but limited local depth. A local business owner who has served the same neighborhood for a decade typically has niche expertise, community relationships, and service quality that a national chain cannot match. The problem is not service quality, it is that AI cannot see those strengths because they are not reflected in the business\'s online presence.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the single most important thing a local business can do to appear in AI recommendations?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Build a clear, consistent, and structured online presence across multiple platforms. This means consistent NAP data across directories, a website that directly answers the questions your customers are asking, structured data markup that helps AI parse your business details, and a strong presence on the platforms AI models pull from most, including review sites, local directories, and industry-specific resources.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does it take for a local business to start appearing in AI recommendations?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Timelines vary, but most businesses that make meaningful changes to their online presence, including structured data, consistent directory listings, and clear service page content, begin seeing shifts in AI visibility within 60 to 90 days. AI models are updated regularly, and changes to authoritative sources propagate into recommendation patterns over time.',
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
      description:
        'Answer Engine Optimization agency helping local businesses get cited by AI platforms instead of national chains.',
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
                id="hero-grid-126"
                x="0"
                y="0"
                width="60"
                height="60"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 60 0 L 0 0 0 60"
                  fill="none"
                  stroke="#F27D24"
                  strokeWidth="0.5"
                />
                {/* Store vs chain icon hints */}
                <rect x="8" y="30" width="18" height="22" fill="#F27D24" opacity="0.08" rx="1" />
                <rect x="10" y="36" width="6" height="8" fill="#F27D24" opacity="0.15" rx="0.5" />
                <rect x="34" y="22" width="18" height="30" fill="#F27D24" opacity="0.15" rx="1" />
                <rect x="36" y="28" width="14" height="4" fill="#F27D24" opacity="0.2" rx="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-grid-126)" />
          </svg>

          <div className="relative max-w-4xl mx-auto px-6 py-20">
            <Breadcrumb />

            <div className="flex items-center gap-3 mb-6">
              <span
                className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full"
                style={{
                  backgroundColor: 'rgba(255,106,0,0.15)',
                  color: '#F27D24',
                  border: '1px solid rgba(255,106,0,0.3)',
                }}
              >
                Business Pain Points
              </span>
              <span className="text-xs text-gray-500">April 3, 2026</span>
              <span className="text-xs text-gray-500">13 min read</span>
            </div>

            <h1
              className="font-plus-jakarta text-4xl md:text-5xl font-extrabold leading-tight mb-6"
              style={{ color: '#FFFFFF' }}
            >
              Why AI Recommends{' '}
              <span style={{ color: '#F27D24' }}>Chains Over Local Businesses</span>
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-3xl">
              You searched for the best plumber, dentist, or contractor near you on an AI assistant. The response listed a national franchise and two well-known chains. Your neighbor, who has run a five-star local operation for twelve years, never got a mention. This is not a glitch. It is a structural information problem, and most local businesses have no idea it is happening.
            </p>

            {/* Hero Inline CTA */}
            <div className="ae-cta-inline flex flex-wrap items-center gap-4 mb-4">
              <Link
                href="/blindspot"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white transition-all hover:opacity-90"
                style={{ backgroundColor: '#F27D24' }}
              >
                Check If AI Finds Your Business
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a
                href="tel:+12134442229"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all hover:opacity-90"
                style={{
                  backgroundColor: 'rgba(255,106,0,0.1)',
                  color: '#F27D24',
                  border: '1px solid rgba(255,106,0,0.3)',
                }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
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
              <div className="font-plus-jakarta text-3xl font-extrabold mb-1" style={{ color: '#F27D24' }}>
                87%
              </div>
              <div className="text-xs text-gray-400 leading-snug">
                of local businesses have never adapted their online presence for AI
              </div>
            </div>
            <div
              className="ae-stat-card rounded-xl p-5 text-center"
              style={{ backgroundColor: 'rgba(255,106,0,0.08)', border: '1px solid rgba(255,106,0,0.2)' }}
            >
              <div className="font-plus-jakarta text-3xl font-extrabold mb-1" style={{ color: '#F27D24' }}>
                3x
              </div>
              <div className="text-xs text-gray-400 leading-snug">
                more directory listings for average national chain vs. typical local business
              </div>
            </div>
            <div
              className="ae-stat-card rounded-xl p-5 text-center"
              style={{ backgroundColor: 'rgba(255,106,0,0.08)', border: '1px solid rgba(255,106,0,0.2)' }}
            >
              <div className="font-plus-jakarta text-3xl font-extrabold mb-1" style={{ color: '#F27D24' }}>
                60-90
              </div>
              <div className="text-xs text-gray-400 leading-snug">
                days to start shifting AI recommendations with the right visibility signals
              </div>
            </div>
            <div
              className="ae-stat-card rounded-xl p-5 text-center"
              style={{ backgroundColor: 'rgba(255,106,0,0.08)', border: '1px solid rgba(255,106,0,0.2)' }}
            >
              <div className="font-plus-jakarta text-3xl font-extrabold mb-1" style={{ color: '#F27D24' }}>
                1 in 4
              </div>
              <div className="text-xs text-gray-400 leading-snug">
                customers now use AI assistants to find local service providers
              </div>
            </div>
          </section>

          {/* Table of Contents */}
          <nav className="ae-toc rounded-xl p-6 mb-16" style={{ backgroundColor: 'rgba(255,106,0,0.06)', border: '1px solid rgba(255,106,0,0.15)' }}>
            <h2 className="font-plus-jakarta text-base font-bold text-white mb-4 uppercase tracking-widest">
              In This Article
            </h2>
            <ol className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#the-misconception" className="hover:text-orange-400 transition-colors">
                  1. The Misconception: AI Does Not Favor Chains on Purpose
                </a>
              </li>
              <li>
                <a href="#why-chains-have-an-advantage" className="hover:text-orange-400 transition-colors">
                  2. Why Chains Have a Structural Advantage
                </a>
              </li>
              <li>
                <a href="#the-ai-visibility-gap" className="hover:text-orange-400 transition-colors">
                  3. The AI Visibility Gap: Strong Businesses, Invisible Signals
                </a>
              </li>
              <li>
                <a href="#local-advantages" className="hover:text-orange-400 transition-colors">
                  4. The Untapped Advantages Local Businesses Already Have
                </a>
              </li>
              <li>
                <a href="#chain-vs-local-comparison" className="hover:text-orange-400 transition-colors">
                  5. Chain vs. Local: How AI Sees Each One
                </a>
              </li>
              <li>
                <a href="#decision-matrix" className="hover:text-orange-400 transition-colors">
                  6. Decision Matrix: What to Fix First
                </a>
              </li>
              <li>
                <a href="#cheat-sheet" className="hover:text-orange-400 transition-colors">
                  7. AI Visibility Cheat Sheet for Local Businesses
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-orange-400 transition-colors">
                  8. Frequently Asked Questions
                </a>
              </li>
            </ol>
          </nav>

          {/* Article Body */}
          <article className="prose prose-invert prose-lg max-w-none">

            {/* Section 1: The Misconception */}
            <section id="the-misconception" className="mb-16 not-prose">
              <div className="ae-section-label text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#F27D24' }}>
                Section 01
              </div>
              <h2 className="font-plus-jakarta text-3xl font-bold text-white mb-6">
                The Misconception: AI Does Not Favor Chains on Purpose
              </h2>

              <p className="text-gray-300 leading-relaxed mb-6">
                The most important thing to understand about AI and business recommendations is this: AI models do not have a preference for big brands. They do not know or care whether a business has 3 locations or 3,000. What they care about is information quality.
              </p>

              <p className="text-gray-300 leading-relaxed mb-6">
                When a user asks ChatGPT, Perplexity, or Google AI to recommend a business, the model scans everything it has learned from the web and synthesizes an answer. The businesses that appear are the ones whose information was clearest, most consistent, and most widely referenced across authoritative sources. National chains tend to score well on all three of those dimensions, not because they are better businesses, but because they have more resources devoted to structured online presence.
              </p>

              <div
                className="ae-callout ae-callout-info rounded-xl p-6 mb-8"
                style={{ backgroundColor: 'rgba(59,130,246,0.08)', border: '1px solid rgba(59,130,246,0.2)' }}
              >
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#3B82F6' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="text-blue-300 font-semibold mb-1">Key Insight</p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      AI recommendation engines are not biased toward size, they are biased toward signal clarity. A local business with clear, structured, and widely distributed information can absolutely outperform a national chain in AI search results.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed mb-6">
                This distinction matters enormously for local business owners. If the problem were that AI simply preferred chains by design, there would be nothing to do. But the actual problem, an information gap, is solvable. That is what this article breaks down.
              </p>

              <blockquote className="ae-quote border-l-4 pl-6 py-2 my-8" style={{ borderColor: '#F27D24' }}>
                <p className="text-xl text-gray-200 italic leading-relaxed">
                  "AI does not recommend the biggest business in your category. It recommends the one it understands best."
                </p>
                <footer className="text-sm text-gray-500 mt-3">Justin Borges</footer>
              </blockquote>
            </section>

            {/* Section 2: Why Chains Have an Advantage */}
            <section id="why-chains-have-an-advantage" className="mb-16 not-prose">
              <div className="ae-section-label text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#F27D24' }}>
                Section 02
              </div>
              <h2 className="font-plus-jakarta text-3xl font-bold text-white mb-6">
                Why Chains Have a Structural Advantage
              </h2>

              <p className="text-gray-300 leading-relaxed mb-6">
                To understand the gap, you need to understand what national chains are doing that most local businesses are not. It is not magic, and it is not spending enormous budgets on AI-specific strategies. It is the cumulative effect of consistent, well-resourced execution across several dimensions that AI models happen to weight heavily.
              </p>

              <h3 className="font-plus-jakarta text-xl font-bold text-white mb-4">Consistent NAP Data at Scale</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                NAP stands for name, address, and phone number. Chains have entire operations teams whose job is to ensure every location is listed correctly and consistently across every major directory, from Yelp and Google to niche platforms and local chamber of commerce sites. When AI models see a business referenced with identical information across 80 platforms, they build strong confidence in that entity. A local business with three different phone numbers across five listings creates confusion AI models quietly penalize by recommending alternatives.
              </p>

              <h3 className="font-plus-jakarta text-xl font-bold text-white mb-4">Massive Link Profiles Built Over Time</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                National brands accumulate mentions and links from news coverage, industry publications, partner sites, and press releases over years or decades. Every mention on an authoritative source is a trust signal that AI models absorb. A local business that has never been mentioned outside its own website and its Google Business Profile starts with near-zero signal, regardless of how good the actual service is.
              </p>

              <h3 className="font-plus-jakarta text-xl font-bold text-white mb-4">Dedicated Content Teams</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Large brands employ content teams that produce structured, keyword-optimized, FAQ-rich content continuously. That content answers the exact questions AI models are asked, which means it gets pulled into AI-generated answers. Most local business websites have a home page, an about page, a services list, and maybe a contact form. They do not have content that directly answers the questions their potential customers are typing into AI assistants.
              </p>

              <h3 className="font-plus-jakarta text-xl font-bold text-white mb-4">Structured Data at Scale</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Large brands invest in schema markup: machine-readable tags that tell search engines and AI crawlers exactly what type of business this is, what services it offers, where it operates, what its hours are, and how customers have rated it. Local businesses almost universally skip this step, either because they do not know it exists or because they assume their website developer handled it. Most did not.
              </p>

              {/* Inline CTA */}
              <div className="ae-cta-inline my-10 p-6 rounded-xl" style={{ backgroundColor: 'rgba(255,106,0,0.07)', border: '1px solid rgba(255,106,0,0.18)' }}>
                <p className="text-gray-300 mb-4 text-sm">
                  Not sure if your business is making these mistakes? Our free Blind Spot Report shows you exactly where AI cannot see you.
                </p>
                <Link
                  href="/blindspot"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-white text-sm transition-all hover:opacity-90"
                  style={{ backgroundColor: '#F27D24' }}
                >
                  Get Your Free Blind Spot Report
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </section>

            {/* Section 3: AI Visibility Gap */}
            <section id="the-ai-visibility-gap" className="mb-16 not-prose">
              <div className="ae-section-label text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#F27D24' }}>
                Section 03
              </div>
              <h2 className="font-plus-jakarta text-3xl font-bold text-white mb-6">
                The AI Visibility Gap: Strong Businesses, Invisible Signals
              </h2>

              <p className="text-gray-300 leading-relaxed mb-6">
                There is a phenomenon in AI search that we call the AI visibility gap. It describes a business that is genuinely excellent, well-reviewed, and well-regarded in its community, yet completely invisible to AI recommendation engines. The gap is not about quality of service. It is about quality of online signals.
              </p>

              <p className="text-gray-300 leading-relaxed mb-6">
                Consider a family-owned HVAC company that has served the same metro area for eighteen years. They have 200 five-star reviews on Google. Their technicians are licensed and their prices are fair. But their website was built in 2019 and has not been updated since. Their information on Yelp, Angi, and HomeAdvisor is outdated or missing. Their service pages do not answer the specific questions people ask AI assistants. They have never added schema markup to their site.
              </p>

              <p className="text-gray-300 leading-relaxed mb-6">
                When a potential customer asks an AI assistant for the best HVAC company in their area, that company does not appear. A national franchise with mediocre reviews but complete, structured, and widely distributed information does. The customer calls the franchise. The local company loses a lead it never knew existed.
              </p>

              <div
                className="ae-callout ae-callout-warning rounded-xl p-6 mb-8"
                style={{ backgroundColor: 'rgba(234,179,8,0.08)', border: '1px solid rgba(234,179,8,0.2)' }}
              >
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#EAB308' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <div>
                    <p className="text-yellow-400 font-semibold mb-1">The Silent Lead Loss Problem</p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Local businesses that are invisible to AI do not receive rejection notices. They simply never appear in the conversation. You cannot recover a lead you never knew about, which is why the AI visibility gap is so dangerous: it compounds silently, month after month.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed mb-6">
                This is not a small problem. According to multiple studies on AI search behavior, a growing share of purchase-intent queries are now being handled entirely by AI assistants. Users ask for a recommendation, receive a short list of three to five names, and contact one of those businesses. If your business is not on that list, you do not get a second chance. The customer never visits your website. They never see your reviews. They never call you.
              </p>

              <p className="text-gray-300 leading-relaxed">
                For more on how this dynamic plays out when two businesses are nearly identical in quality, see our analysis of{' '}
                <Link href="/blog/how-ai-picks-between-two-similar-businesses" className="text-orange-400 hover:text-orange-300 transition-colors underline underline-offset-2">
                  how AI picks between two similar businesses
                </Link>
                .
              </p>
            </section>

            {/* Section 4: Local Advantages */}
            <section id="local-advantages" className="mb-16 not-prose">
              <div className="ae-section-label text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#F27D24' }}>
                Section 04
              </div>
              <h2 className="font-plus-jakarta text-3xl font-bold text-white mb-6">
                The Untapped Advantages Local Businesses Already Have
              </h2>

              <p className="text-gray-300 leading-relaxed mb-6">
                Here is where the story gets interesting. National chains have structural advantages in information volume, but local businesses have something chains cannot buy: specificity, authenticity, and niche depth. These are precisely the qualities that AI models are increasingly rewarding, because they make for better, more useful answers.
              </p>

              <div className="ae-pros-cons grid md:grid-cols-2 gap-6 my-10">
                <div
                  className="ae-pros-box rounded-xl p-6"
                  style={{ backgroundColor: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.2)' }}
                >
                  <h3 className="font-plus-jakarta text-base font-bold mb-4 flex items-center gap-2" style={{ color: '#22C55E' }}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Local Business Advantages AI Rewards
                  </h3>
                  <ul className="space-y-3 text-sm text-gray-300">
                    <li className="flex items-start gap-2">
                      <span style={{ color: '#22C55E' }} className="mt-0.5 flex-shrink-0">+</span>
                      Deep local specificity: neighborhood knowledge, local landmarks, community relationships
                    </li>
                    <li className="flex items-start gap-2">
                      <span style={{ color: '#22C55E' }} className="mt-0.5 flex-shrink-0">+</span>
                      Authentic niche expertise that chain content teams cannot genuinely replicate
                    </li>
                    <li className="flex items-start gap-2">
                      <span style={{ color: '#22C55E' }} className="mt-0.5 flex-shrink-0">+</span>
                      Community trust signals: local press mentions, neighborhood Facebook group discussions, community forums
                    </li>
                    <li className="flex items-start gap-2">
                      <span style={{ color: '#22C55E' }} className="mt-0.5 flex-shrink-0">+</span>
                      Highly specific service descriptions that match the exact language customers use
                    </li>
                    <li className="flex items-start gap-2">
                      <span style={{ color: '#22C55E' }} className="mt-0.5 flex-shrink-0">+</span>
                      Genuine owner expertise that can generate credible, authoritative content
                    </li>
                    <li className="flex items-start gap-2">
                      <span style={{ color: '#22C55E' }} className="mt-0.5 flex-shrink-0">+</span>
                      Hyper-local service area clarity that broad chains cannot match per location
                    </li>
                  </ul>
                </div>

                <div
                  className="ae-cons-box rounded-xl p-6"
                  style={{ backgroundColor: 'rgba(239,68,68,0.06)', border: '1px solid rgba(239,68,68,0.2)' }}
                >
                  <h3 className="font-plus-jakarta text-base font-bold mb-4 flex items-center gap-2" style={{ color: '#EF4444' }}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Where Local Businesses Fall Short
                  </h3>
                  <ul className="space-y-3 text-sm text-gray-300">
                    <li className="flex items-start gap-2">
                      <span style={{ color: '#EF4444' }} className="mt-0.5 flex-shrink-0">-</span>
                      Inconsistent or incomplete directory listings across major platforms
                    </li>
                    <li className="flex items-start gap-2">
                      <span style={{ color: '#EF4444' }} className="mt-0.5 flex-shrink-0">-</span>
                      No schema markup or structured data on website pages
                    </li>
                    <li className="flex items-start gap-2">
                      <span style={{ color: '#EF4444' }} className="mt-0.5 flex-shrink-0">-</span>
                      Service pages that do not answer the specific questions customers ask AI
                    </li>
                    <li className="flex items-start gap-2">
                      <span style={{ color: '#EF4444' }} className="mt-0.5 flex-shrink-0">-</span>
                      Little to no third-party press coverage or authoritative external mentions
                    </li>
                    <li className="flex items-start gap-2">
                      <span style={{ color: '#EF4444' }} className="mt-0.5 flex-shrink-0">-</span>
                      Reviews concentrated on one platform instead of distributed across multiple
                    </li>
                    <li className="flex items-start gap-2">
                      <span style={{ color: '#EF4444' }} className="mt-0.5 flex-shrink-0">-</span>
                      No dedicated effort to adapt online presence for AI crawlers
                    </li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed mb-6">
                The insight here is that local businesses have genuine competitive advantages, they just have not been translated into the signals AI models look for. A local HVAC expert who knows every quirk of homes built in their area in the 1970s has deeper expertise than any national chain. But if that expertise only lives in their head and not on their website, AI cannot see it.
              </p>

              <p className="text-gray-300 leading-relaxed">
                This is also why the recommendation gaps are rarely about quality. In many cases, the local business is objectively better. It is why we talk about the AI visibility gap as a separate problem from the service quality gap. You can read more about how this dynamic shows up in{' '}
                <Link href="/blog/why-ai-recommends-businesses-with-worse-reviews" className="text-orange-400 hover:text-orange-300 transition-colors underline underline-offset-2">
                  why AI sometimes recommends businesses with worse reviews
                </Link>
                .
              </p>
            </section>

            {/* Section 5: Comparison Table */}
            <section id="chain-vs-local-comparison" className="mb-16 not-prose">
              <div className="ae-section-label text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#F27D24' }}>
                Section 05
              </div>
              <h2 className="font-plus-jakarta text-3xl font-bold text-white mb-6">
                Chain vs. Local: How AI Sees Each One
              </h2>

              <p className="text-gray-300 leading-relaxed mb-8">
                AI models evaluate businesses across a set of trust and relevance signals. Here is how a typical national chain compares to a typical unoptimized local business across the dimensions that matter most.
              </p>

              <div className="ae-comparison-table overflow-x-auto rounded-xl mb-10" style={{ border: '1px solid rgba(255,106,0,0.2)' }}>
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ backgroundColor: 'rgba(255,106,0,0.12)' }}>
                      <th className="text-left p-4 font-plus-jakarta font-bold text-white">AI Signal</th>
                      <th className="text-center p-4 font-plus-jakarta font-bold" style={{ color: '#F27D24' }}>National Chain</th>
                      <th className="text-center p-4 font-plus-jakarta font-bold text-gray-400">Unoptimized Local</th>
                      <th className="text-center p-4 font-plus-jakarta font-bold" style={{ color: '#22C55E' }}>Optimized Local</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        signal: 'NAP Consistency Across Directories',
                        chain: 'Excellent',
                        unoptimized: 'Poor',
                        optimized: 'Excellent',
                        chainColor: '#22C55E',
                        unoptColor: '#EF4444',
                        optColor: '#22C55E',
                      },
                      {
                        signal: 'Structured Data / Schema Markup',
                        chain: 'Strong',
                        unoptimized: 'Absent',
                        optimized: 'Strong',
                        chainColor: '#22C55E',
                        unoptColor: '#EF4444',
                        optColor: '#22C55E',
                      },
                      {
                        signal: 'Service Page Content Depth',
                        chain: 'Generic / Broad',
                        unoptimized: 'Thin',
                        optimized: 'Deep / Specific',
                        chainColor: '#EAB308',
                        unoptColor: '#EF4444',
                        optColor: '#22C55E',
                      },
                      {
                        signal: 'Third-Party Mentions / Links',
                        chain: 'Extensive',
                        unoptimized: 'Minimal',
                        optimized: 'Growing',
                        chainColor: '#22C55E',
                        unoptColor: '#EF4444',
                        optColor: '#EAB308',
                      },
                      {
                        signal: 'Review Distribution',
                        chain: 'Multi-platform',
                        unoptimized: 'Google only',
                        optimized: 'Multi-platform',
                        chainColor: '#22C55E',
                        unoptColor: '#EF4444',
                        optColor: '#22C55E',
                      },
                      {
                        signal: 'FAQ / Q&A Content',
                        chain: 'Robust',
                        unoptimized: 'None',
                        optimized: 'Robust',
                        chainColor: '#22C55E',
                        unoptColor: '#EF4444',
                        optColor: '#22C55E',
                      },
                      {
                        signal: 'Local Specificity',
                        chain: 'Generic',
                        unoptimized: 'Generic',
                        optimized: 'Deep',
                        chainColor: '#EF4444',
                        unoptColor: '#EF4444',
                        optColor: '#22C55E',
                      },
                      {
                        signal: 'Niche Expertise Signals',
                        chain: 'Weak',
                        unoptimized: 'Invisible',
                        optimized: 'Strong',
                        chainColor: '#EF4444',
                        unoptColor: '#EF4444',
                        optColor: '#22C55E',
                      },
                    ].map((row, i) => (
                      <tr
                        key={i}
                        style={{ borderTop: '1px solid rgba(255,255,255,0.06)', backgroundColor: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent' }}
                      >
                        <td className="p-4 text-gray-300 font-medium">{row.signal}</td>
                        <td className="p-4 text-center font-semibold" style={{ color: row.chainColor }}>{row.chain}</td>
                        <td className="p-4 text-center font-semibold" style={{ color: row.unoptColor }}>{row.unoptimized}</td>
                        <td className="p-4 text-center font-semibold" style={{ color: row.optColor }}>{row.optimized}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div
                className="ae-callout ae-callout-success rounded-xl p-6 mb-8"
                style={{ backgroundColor: 'rgba(34,197,94,0.07)', border: '1px solid rgba(34,197,94,0.2)' }}
              >
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#22C55E' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="text-green-400 font-semibold mb-1">The Opportunity</p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Look at the "Optimized Local" column. An optimized local business matches or exceeds the chain on every dimension that AI models weight most heavily, and beats the chain on local specificity and niche expertise, the two dimensions chains can never truly own.
                    </p>
                  </div>
                </div>
              </div>

              {/* Inline CTA */}
              <div className="ae-cta-inline my-10 p-6 rounded-xl" style={{ backgroundColor: 'rgba(255,106,0,0.07)', border: '1px solid rgba(255,106,0,0.18)' }}>
                <p className="text-white font-semibold mb-2">Where does your business fall in this table?</p>
                <p className="text-gray-400 text-sm mb-4">
                  Our Blind Spot Report audits your business across all eight of these AI signal categories and tells you exactly what to fix first.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/blindspot"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-white text-sm transition-all hover:opacity-90"
                    style={{ backgroundColor: '#F27D24' }}
                  >
                    Get Your Free Blind Spot Report
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <a
                    href="tel:+12134442229"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm transition-all hover:opacity-90"
                    style={{ backgroundColor: 'rgba(255,106,0,0.1)', color: '#F27D24', border: '1px solid rgba(255,106,0,0.3)' }}
                  >
                    Call (213) 444-2229
                  </a>
                </div>
              </div>
            </section>

            {/* Section 6: Decision Matrix */}
            <section id="decision-matrix" className="mb-16 not-prose">
              <div className="ae-section-label text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#F27D24' }}>
                Section 06
              </div>
              <h2 className="font-plus-jakarta text-3xl font-bold text-white mb-6">
                Decision Matrix: What to Fix First
              </h2>

              <p className="text-gray-300 leading-relaxed mb-8">
                Not all visibility gaps are equally important. Use this matrix to prioritize your efforts based on what chains do well and what a local business can realistically address first.
              </p>

              <div className="ae-decision-matrix space-y-4 mb-10">
                {[
                  {
                    condition: 'Chain has consistent NAP across 50+ directories',
                    localAction: 'Audit and correct your listings on Google, Yelp, Bing Places, Apple Maps, and top 20 industry directories. This is your highest-leverage starting point.',
                    priority: 'Critical',
                    priorityColor: '#EF4444',
                  },
                  {
                    condition: 'Chain has schema markup on every page',
                    localAction: 'Add LocalBusiness, Service, and FAQPage schema to your homepage and service pages. This is invisible to visitors but critical for AI crawlers.',
                    priority: 'Critical',
                    priorityColor: '#EF4444',
                  },
                  {
                    condition: 'Chain has FAQ-rich content answering category questions',
                    localAction: 'Create a dedicated FAQ page and embed relevant Q&A sections on each service page. Answer the exact questions your customers ask, in plain language.',
                    priority: 'High',
                    priorityColor: '#F27D24',
                  },
                  {
                    condition: 'Chain has reviews on Google, Yelp, Angi, and industry platforms',
                    localAction: 'Build a multi-platform review presence. A business with 40 reviews across 6 platforms signals more trust than 200 reviews on one platform.',
                    priority: 'High',
                    priorityColor: '#F27D24',
                  },
                  {
                    condition: 'Chain has press mentions on authoritative publications',
                    localAction: 'Pursue local press coverage: community papers, neighborhood blogs, local business journals. A mention in a credible local source is worth more than ten generic directories.',
                    priority: 'Medium',
                    priorityColor: '#EAB308',
                  },
                  {
                    condition: 'Chain has generic service descriptions for every market',
                    localAction: 'Write hyper-local service pages that reference your specific service area, local conditions, and community knowledge. This is where local beats chain every time.',
                    priority: 'High',
                    priorityColor: '#F27D24',
                  },
                  {
                    condition: 'Chain content avoids deep niche expertise',
                    localAction: 'Publish authoritative content that demonstrates your specific expertise: case studies, problem-solution articles, before-and-after breakdowns from real local jobs.',
                    priority: 'Medium',
                    priorityColor: '#EAB308',
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="rounded-xl p-5 grid md:grid-cols-[1fr_2fr_auto] gap-4 items-start"
                    style={{ backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
                  >
                    <div>
                      <div className="text-xs text-gray-500 mb-1 uppercase tracking-wider">Chain Does This</div>
                      <p className="text-sm text-gray-300">{item.condition}</p>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 mb-1 uppercase tracking-wider">Your Local Response</div>
                      <p className="text-sm text-gray-300">{item.localAction}</p>
                    </div>
                    <div className="flex items-center md:justify-end">
                      <span
                        className="text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap"
                        style={{ backgroundColor: `${item.priorityColor}18`, color: item.priorityColor, border: `1px solid ${item.priorityColor}40` }}
                      >
                        {item.priority}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="ae-callout ae-callout-orange rounded-xl p-6 mb-8"
                style={{ backgroundColor: 'rgba(255,106,0,0.08)', border: '1px solid rgba(255,106,0,0.25)' }}
              >
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#F27D24' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <div>
                    <p className="font-semibold mb-1" style={{ color: '#F27D24' }}>Start with the Critical items</p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      NAP consistency and schema markup are foundational. Every other signal you build on top of a weak foundation underperforms. Fix these first, then layer in the High and Medium priority items.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed">
                If you want to understand how AI platforms actually process the signals you create, our breakdown of{' '}
                <Link href="/blog/why-ai-keeps-recommending-the-same-3-businesses" className="text-orange-400 hover:text-orange-300 transition-colors underline underline-offset-2">
                  why AI keeps recommending the same three businesses
                </Link>{' '}
                explains the citation concentration dynamics in detail.
              </p>
            </section>

            {/* Section 7: Cheat Sheet */}
            <section id="cheat-sheet" className="mb-16 not-prose">
              <div className="ae-section-label text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#F27D24' }}>
                Section 07
              </div>
              <h2 className="font-plus-jakarta text-3xl font-bold text-white mb-6">
                AI Visibility Cheat Sheet for Local Businesses
              </h2>

              <div
                className="ae-cheat-sheet rounded-2xl p-8"
                style={{ backgroundColor: 'rgba(255,106,0,0.06)', border: '1px solid rgba(255,106,0,0.2)' }}
              >
                <h3 className="font-plus-jakarta text-lg font-bold text-white mb-6 flex items-center gap-2">
                  <svg className="w-5 h-5" style={{ color: '#F27D24' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                  The Local Business AI Visibility Checklist
                </h3>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-white mb-3 text-sm uppercase tracking-wider">Foundational Signals</h4>
                    <ul className="space-y-2">
                      {[
                        'Consistent NAP on Google Business Profile',
                        'Consistent NAP on Yelp, Bing Places, Apple Maps',
                        'Consistent NAP on top 20 industry directories',
                        'LocalBusiness schema on homepage',
                        'Service schema on each service page',
                        'FAQPage schema on FAQ sections',
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                          <svg className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#F27D24' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-3 text-sm uppercase tracking-wider">Content Signals</h4>
                    <ul className="space-y-2">
                      {[
                        'Service pages that directly answer customer questions',
                        'FAQ page addressing top 15+ questions in your category',
                        'About page with clear expertise signals and local context',
                        'Reviews distributed across 3+ platforms',
                        'At least one local press mention or community citation',
                        'Service area page naming specific neighborhoods and cities',
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                          <svg className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#F27D24' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-3 text-sm uppercase tracking-wider">Authority Signals</h4>
                    <ul className="space-y-2">
                      {[
                        'Business mentioned on at least one authoritative external site',
                        'Industry certifications or licenses referenced in content',
                        'Years in business and local history clearly stated',
                        'Owner credentials and expertise explained on About page',
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                          <svg className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#F27D24' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-3 text-sm uppercase tracking-wider">Differentiation Signals</h4>
                    <ul className="space-y-2">
                      {[
                        'Content that demonstrates local and niche-specific expertise',
                        'Service descriptions using hyper-local language and context',
                        'Case studies or examples from real local jobs',
                        'Community involvement or local partnerships referenced',
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                          <svg className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#F27D24' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-6" style={{ borderTop: '1px solid rgba(255,106,0,0.2)' }}>
                  <p className="text-sm text-gray-400 mb-4">
                    Want a personalized version of this checklist scored against your actual business? That is what our Blind Spot Report delivers.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href="/blindspot"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-white text-sm transition-all hover:opacity-90"
                      style={{ backgroundColor: '#F27D24' }}
                    >
                      Get Your Free Blind Spot Report
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                    <a
                      href="mailto:support@theanswerengine.ai"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm transition-all hover:opacity-90"
                      style={{ backgroundColor: 'rgba(255,106,0,0.1)', color: '#F27D24', border: '1px solid rgba(255,106,0,0.3)' }}
                    >
                      Email Us
                    </a>
                  </div>
                </div>
              </div>
            </section>

          </article>

          {/* Author Card */}
          <div className="ae-author-card rounded-2xl p-6 mb-12" style={{ backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
            <div className="flex items-start gap-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 font-plus-jakarta font-bold text-white text-lg"
                style={{ backgroundColor: '#F27D24' }}
              >
                AE
              </div>
              <div>
                <div className="font-plus-jakarta font-bold text-white mb-1">Justin Borges</div>
                <div className="text-xs text-gray-500 mb-3">Answer Engine Optimization Specialists</div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  We help local businesses close the AI visibility gap and compete against national chains on AI platforms including ChatGPT, Perplexity, Google AI, and more. Our Blind Spot Reports have uncovered critical visibility gaps for hundreds of local service businesses across the U.S.
                </p>
              </div>
            </div>
          </div>

          {/* 3-Tier CTA Block */}
          <div className="not-prose my-16 p-8 rounded-2xl bg-gradient-to-br from-[#F27D24]/10 to-transparent border border-[#F27D24]/20">
            <h3 className="font-plus-jakarta text-2xl font-bold text-white mb-3">
              Is a National Chain Stealing Your AI Recommendations?
            </h3>
            <p className="text-gray-400 mb-6">
              Your business may be invisible to AI while a chain with lower ratings takes your leads. Our free Blind Spot Report shows you exactly where the gap is and what to fix first.
            </p>
            <Link
              href="/blindspot"
              className="inline-flex items-center gap-2 bg-[#F27D24] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#D96416] transition-colors"
            >
              Get Your Free Blind Spot Report
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <div className="flex flex-wrap items-center gap-6 mt-6 pt-6 border-t border-[#F27D24]/10">
              <a href="tel:+12134442229" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (213) 444-2229
              </a>
              <a href="mailto:support@theanswerengine.ai" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                support@theanswerengine.ai
              </a>
            </div>
          </div>

          {/* FAQ */}
          <section id="faq" className="mb-16">
            <div className="ae-section-label text-xs font-bold uppercase tracking-widest mb-3 not-prose" style={{ color: '#F27D24' }}>
              FAQ
            </div>
            <h2 className="font-plus-jakarta text-3xl font-bold text-white mb-8 not-prose">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4 not-prose">
              {[
                {
                  q: 'Does AI intentionally favor national chains over local businesses?',
                  a: 'No. AI models do not have a deliberate preference for chains. They favor clear, structured, authoritative information, and national chains happen to have more of it. Chains have dedicated marketing teams producing consistent content, structured data at scale, and presence across hundreds of directories. Local businesses that match that information quality can compete and often win on specificity and niche expertise.',
                },
                {
                  q: 'Why does ChatGPT recommend big brands instead of local alternatives?',
                  a: 'ChatGPT builds its knowledge from web content. Large brands have more content, more directory listings, more reviews, and more third-party mentions. When an AI model sees a business referenced consistently across dozens of authoritative sources, it treats that business as a safer recommendation. Most local businesses only appear on their own website and a Google Business Profile, which is not enough signal.',
                },
                {
                  q: 'Can a small local business outrank a national chain in AI search?',
                  a: 'Yes. AI models reward relevance and clarity over size. A local business that clearly explains what it does, who it serves, where it operates, and why it is the best choice in that market can outperform a generic chain page that says the same thing in every city. Specificity is a competitive advantage that chains structurally cannot replicate at the local level.',
                },
                {
                  q: 'What is the AI visibility gap for local businesses?',
                  a: 'The AI visibility gap describes the difference between how well a business actually serves its market and how visible that business is to AI recommendation engines. A strong local business with great reviews and loyal customers can be completely invisible to AI if its online presence is incomplete, inconsistent, or poorly structured. Closing that gap is the core goal of Answer Engine Optimization.',
                },
                {
                  q: 'Does consistent NAP data really matter for AI recommendations?',
                  a: 'Yes, significantly. NAP stands for name, address, and phone number. When AI models see a business listed with the same name, address, and phone number across dozens of directories and platforms, it reinforces the business as a real, stable entity. Inconsistent NAP data is a trust signal failure that can prevent AI from confidently recommending a business.',
                },
                {
                  q: 'Are chains actually better than local businesses at serving customers?',
                  a: 'Not necessarily. Chains often have broad reach but limited local depth. A local business owner who has served the same neighborhood for a decade typically has niche expertise, community relationships, and service quality that a national chain cannot match. The problem is not service quality, it is that AI cannot see those strengths because they are not reflected in the business\'s online presence.',
                },
                {
                  q: 'What is the single most important thing a local business can do to appear in AI recommendations?',
                  a: 'Build a clear, consistent, and structured online presence across multiple platforms. This means consistent NAP data across directories, a website that directly answers the questions your customers are asking, structured data markup that helps AI parse your business details, and a strong presence on the platforms AI models pull from most, including review sites, local directories, and industry-specific resources.',
                },
                {
                  q: 'How long does it take for a local business to start appearing in AI recommendations?',
                  a: 'Timelines vary, but most businesses that make meaningful changes to their online presence, including structured data, consistent directory listings, and clear service page content, begin seeing shifts in AI visibility within 60 to 90 days. AI models are updated regularly, and changes to authoritative sources propagate into recommendation patterns over time.',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-xl p-6"
                  style={{ backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
                >
                  <h3 className="font-plus-jakarta font-bold text-white mb-3 text-base">{item.q}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Final CTA */}
          <div
            className="ae-final-cta rounded-2xl p-10 text-center mb-8 relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(255,106,0,0.15) 0%, rgba(255,106,0,0.05) 100%)',
              border: '1px solid rgba(255,106,0,0.3)',
              boxShadow: '0 0 60px rgba(255,106,0,0.1)',
            }}
          >
            <div
              className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{
                boxShadow: '0 0 40px rgba(255,106,0,0.15) inset',
              }}
              aria-hidden="true"
            />
            <div className="relative">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6" style={{ backgroundColor: 'rgba(255,106,0,0.15)', color: '#F27D24', border: '1px solid rgba(255,106,0,0.3)' }}>
                Free for qualifying businesses
              </div>
              <h2 className="font-plus-jakarta text-3xl md:text-4xl font-extrabold text-white mb-4">
                Stop Losing Leads to National Chains
              </h2>
              <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
                Get your free AI Blind Spot Report. We will show you exactly where chains are appearing in AI results where your business should be, and what it takes to close the gap.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/blindspot"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-base transition-all hover:opacity-90"
                  style={{ backgroundColor: '#F27D24', boxShadow: '0 0 30px rgba(255,106,0,0.4)' }}
                >
                  Get Your Free Blind Spot Report
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <a
                  href="tel:+12134442229"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-base transition-all hover:opacity-90"
                  style={{ backgroundColor: 'rgba(255,106,0,0.1)', color: '#F27D24', border: '1px solid rgba(255,106,0,0.4)' }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call (213) 444-2229
                </a>
              </div>
              <p className="text-xs text-gray-500 mt-6">
                No commitment required. Free Blind Spot Reports available for qualifying local service businesses.
              </p>
            </div>
          </div>

        </div>
      </main>
    </>
  )
}
