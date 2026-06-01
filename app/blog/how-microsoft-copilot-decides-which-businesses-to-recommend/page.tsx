import type { Metadata } from 'next'
import Link from 'next/link'

export const revalidate = 86400
export const dynamic = 'force-static'
export const dynamicParams = true

const title = 'How Microsoft Copilot Decides Which Businesses to Recommend'
const description =
  'Microsoft Copilot uses Bing data, structured listings, and live web signals to recommend local businesses. Learn what factors drive those picks.'
const slug = 'how-microsoft-copilot-decides-which-businesses-to-recommend'
const publishDate = '2026-03-29'

export const metadata: Metadata = {
  title: `${title} | The Answer Engine`,
  description,
  keywords: [
    'Microsoft Copilot business recommendations',
    'Copilot local search',
    'Bing Places for Business',
    'Copilot AI ranking factors',
    'how Copilot picks businesses',
    'Microsoft Copilot SEO',
    'Bing AI recommendations',
    'answer engine optimization',
    'Copilot vs ChatGPT local search',
    'AI business visibility',
    'generative AI local search',
    'Copilot GEO',
  ],
  authors: [{ name: 'Justin Borges', url: 'https://theanswerengine.ai/about' }],
  openGraph: {
    title: `${title} | The Answer Engine`,
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
    title: `${title} | The Answer Engine`,
    description,
    images: [`https://theanswerengine.ai/blog/${slug}.svg`],
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
          name: 'Does Microsoft Copilot use Bing Places data when recommending businesses?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Microsoft Copilot pulls heavily from the Bing index, including Bing Places for Business listings. A complete, verified, and regularly updated Bing Places profile is one of the most direct signals that influences whether Copilot surfaces your business in a local recommendation. Missing hours, categories, or photos can reduce your chances of appearing.',
          },
        },
        {
          '@type': 'Question',
          name: 'How is Copilot different from ChatGPT when recommending local businesses?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Copilot differs from ChatGPT in two key ways for local recommendations. First, Copilot natively integrates Bing Maps, Trustpilot, and OpenTable data into its answers, providing sourced, linkable results. ChatGPT often gives recommendations without live source links. Second, Copilot's answers are grounded in Bing's live index by default, making real-time listing data more directly influential than with ChatGPT.",
          },
        },
        {
          '@type': 'Question',
          name: 'What review sources does Microsoft Copilot draw on for business recommendations?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Copilot aggregates review signals from multiple third-party platforms including Yelp, TripAdvisor, Facebook, and Trustpilot. These are surfaced alongside Bing Places data in its local recommendation panels. A business with strong, consistent reviews across multiple platforms is significantly more likely to be featured.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can a small local business compete in Microsoft Copilot recommendations against large chains?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Yes, and in many cases small local businesses have an advantage for hyper-local queries. Copilot's Bing integration rewards precise geographic relevance, complete listing data, and authentic review depth. A small business with a fully optimized Bing Places profile, consistent citations, and strong local reviews often outperforms a national chain for neighborhood-specific queries.",
          },
        },
        {
          '@type': 'Question',
          name: 'Do social media signals affect Microsoft Copilot business recommendations?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Bing explicitly uses social signals as a ranking factor, and since Copilot is powered by Bing's index, social engagement indirectly influences recommendation likelihood. Active social profiles, particularly on platforms Bing indexes such as Facebook and LinkedIn, contribute to the overall authority signals that Copilot evaluates when forming its answers.",
          },
        },
        {
          '@type': 'Question',
          name: 'How quickly can changes to my Bing Places listing affect Copilot recommendations?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Bing typically re-crawls and re-indexes Bing Places listings within a few days to a week after updates are made. However, Copilot's synthesis of your overall web presence, including third-party review sites and citation consistency, builds over time. Core listing fixes like adding hours or categories can show impact within days, while broader authority signals take weeks to months to consolidate.",
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
        <li className="text-gray-300 truncate max-w-xs">Microsoft Copilot Business Recommendations</li>
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
                id="hero-grid-93"
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
            <rect width="100%" height="100%" fill="url(#hero-grid-93)" />
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
              <span className="text-xs text-gray-500">March 29, 2026</span>
              <span className="text-xs text-gray-500">11 min read</span>
            </div>

            <h1
              className="font-plus-jakarta text-4xl md:text-5xl font-extrabold leading-tight mb-6"
              style={{ color: '#FFFFFF' }}
            >
              How Microsoft Copilot Decides Which{' '}
              <span style={{ color: '#F27D24' }}>Businesses to Recommend</span>
            </h1>
            {/* Championship Cover Image */}
            <div className="ae-article-hero w-full rounded-xl overflow-hidden my-8" style={{ maxHeight: 440 }}>
              <img
                src="/blog/how-microsoft-copilot-decides-which-businesses-to-recommend.webp"
                alt="how microsoft copilot decides which businesses to recommend"
                style={{ width: '100%', height: 440, objectFit: 'cover', display: 'block' }}
                loading="eager"
              />
            </div>

            <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-3xl">
              Microsoft Copilot now reaches over 140 million daily Bing users with AI-generated answers. If your business is not in those answers, you are invisible to a massive and growing audience. Here is exactly what Copilot evaluates before it puts your name in front of a potential customer.
            </p>

            {/* Inline CTA */}
            <div className="ae-cta-inline flex flex-wrap items-center gap-4 mb-4">
              <a
                href="https://theanswerengine.ai/audit"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white transition-all hover:opacity-90"
                style={{ backgroundColor: '#F27D24' }}
              >
                Check Your Copilot Visibility
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

          {/* Stats Grid */}
          <section className="ae-stats-grid grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            <div
              className="ae-stat-card rounded-xl p-5 text-center"
              style={{ backgroundColor: 'rgba(255,106,0,0.08)', border: '1px solid rgba(255,106,0,0.2)' }}
            >
              <div className="font-plus-jakarta text-3xl font-extrabold mb-1" style={{ color: '#F27D24' }}>140M</div>
              <div className="text-xs text-gray-400 leading-snug">Daily Bing users exposed to Copilot AI answers</div>
            </div>
            <div
              className="ae-stat-card rounded-xl p-5 text-center"
              style={{ backgroundColor: 'rgba(255,106,0,0.08)', border: '1px solid rgba(255,106,0,0.2)' }}
            >
              <div className="font-plus-jakarta text-3xl font-extrabold mb-1" style={{ color: '#F27D24' }}>34%</div>
              <div className="text-xs text-gray-400 leading-snug">Of all Bing queries now powered by AI assistant</div>
            </div>
            <div
              className="ae-stat-card rounded-xl p-5 text-center"
              style={{ backgroundColor: 'rgba(255,106,0,0.08)', border: '1px solid rgba(255,106,0,0.2)' }}
            >
              <div className="font-plus-jakarta text-3xl font-extrabold mb-1" style={{ color: '#F27D24' }}>15M</div>
              <div className="text-xs text-gray-400 leading-snug">Paid Microsoft 365 Copilot enterprise seats (Jan 2026)</div>
            </div>
            <div
              className="ae-stat-card rounded-xl p-5 text-center"
              style={{ backgroundColor: 'rgba(255,106,0,0.08)', border: '1px solid rgba(255,106,0,0.2)' }}
            >
              <div className="font-plus-jakarta text-3xl font-extrabold mb-1" style={{ color: '#F27D24' }}>11.5%</div>
              <div className="text-xs text-gray-400 leading-snug">AI assistant market share among paid subscribers (Jan 2026)</div>
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
                <a href="#what-is-copilot-local" className="hover:text-orange-400 transition-colors">What Microsoft Copilot Actually Does for Local Searches</a>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: '#F27D24' }}>02</span>
                <a href="#bing-foundation" className="hover:text-orange-400 transition-colors">The Bing Foundation: Why It Changes Everything</a>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: '#F27D24' }}>03</span>
                <a href="#ranking-signals" className="hover:text-orange-400 transition-colors">The Six Ranking Signals Copilot Weighs</a>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: '#F27D24' }}>04</span>
                <a href="#copilot-vs-chatgpt" className="hover:text-orange-400 transition-colors">Copilot vs ChatGPT: The Local Recommendation Difference</a>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: '#F27D24' }}>05</span>
                <a href="#who-wins" className="hover:text-orange-400 transition-colors">Who Wins in Copilot Recommendations (and Who Disappears)</a>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: '#F27D24' }}>06</span>
                <a href="#decision-matrix" className="hover:text-orange-400 transition-colors">Decision Matrix: Are You Copilot-Ready?</a>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: '#F27D24' }}>07</span>
                <a href="#cheat-sheet" className="hover:text-orange-400 transition-colors">Copilot Visibility Cheat Sheet</a>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: '#F27D24' }}>08</span>
                <a href="#faq" className="hover:text-orange-400 transition-colors">Frequently Asked Questions</a>
              </li>
            </ol>
          </nav>

          {/* Section 1: What Copilot Does */}
          <section id="what-is-copilot-local" className="mb-14">
            <h2 className="font-plus-jakarta text-3xl font-bold mb-6" style={{ color: '#FFFFFF' }}>
              What Microsoft Copilot Actually Does for Local Searches
            </h2>

            <p className="text-gray-300 leading-relaxed mb-5">
              When someone types "best HVAC repair near downtown Seattle" into Bing or opens the Copilot app on Windows 11, they are not getting a list of blue links. They are getting a synthesized, conversational answer assembled from live Bing data, Bing Maps, third-party review aggregators, and structured business listing attributes. Copilot is the AI layer that reads, weighs, and presents all of that information as a direct recommendation.
             Markets fill fast. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Check your territory availability.</a></p>

            <p className="text-gray-300 leading-relaxed mb-5">
              This is categorically different from how local search worked in 2020. The old model: rank on Google Maps, get calls. The new model: get cited by the AI layer or become invisible. Microsoft's Copilot does not just pull a ranked list. It constructs a narrative answer, often naming two to four businesses by name, with sourced links, reviews excerpts, and relevant attributes like "open now," "accepts reservations," or "has free Wi-Fi."
             Your first step: <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free AERO Blind Spot Scan.</a></p>

            {/* Callout: Info */}
            <div
              className="ae-callout-info rounded-xl p-6 my-8"
              style={{ backgroundColor: 'rgba(59,130,246,0.08)', border: '1px solid rgba(59,130,246,0.25)' }}
            >
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#3B82F6' }} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" /></svg>
                <div>
                  <p className="font-semibold mb-1" style={{ color: '#93C5FD' }}>Copilot Is Not Search, It Is a Decision Engine <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Claim your free call</a> before your market fills.</p>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    Copilot does not present options neutrally. It makes a recommendation. When Copilot names your competitor and not you, the user often does not look further. That is the stakes of AI-era local search: cited or invisible, nothing in between.
                   Reach out: <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>
                </div>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed mb-5">
              Microsoft launched a fully redesigned Bing Places for Business in October 2025, redirecting all listing management to bing.com/forbusiness and deepening Bing's integration with Copilot's recommendation layer. The message was direct: if you want to appear in Copilot's answers, your Bing Places listing is the front door.
             Call us at <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> today.</p>

            {/* Inline CTA */}
            <div className="ae-cta-inline my-8 p-5 rounded-xl" style={{ backgroundColor: 'rgba(255,106,0,0.06)', border: '1px solid rgba(255,106,0,0.2)' }}>
              <p className="text-sm text-gray-300 mb-3">Not sure if your business appears in Copilot answers right now? We run a full AI visibility audit across Copilot, ChatGPT, Perplexity, and Google AI. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Lock in your exclusive territory now.</a></p>
              <a
                href="https://theanswerengine.ai/audit"
                className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-80"
                style={{ color: '#F27D24' }}
              >
                Get Your Free AI Visibility Audit
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
            </div>
          </section>

          {/* Section 2: Bing Foundation */}
          <section id="bing-foundation" className="mb-14">
            <h2 className="font-plus-jakarta text-3xl font-bold mb-6" style={{ color: '#FFFFFF' }}>
              The Bing Foundation: Why It Changes Everything
            </h2>

            <p className="text-gray-300 leading-relaxed mb-5">
              Every other major AI assistant has a complicated relationship with live web data. ChatGPT uses Bing's index for its browsing mode, but it is not the default behavior. Perplexity has its own crawl infrastructure. Claude's web search is optional. Copilot, by contrast, is Bing. They share the same indexing infrastructure, the same local knowledge graph, and the same real-time data pipeline.
             <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Get your free AI readiness report.</a></p>

            <p className="text-gray-300 leading-relaxed mb-5">
              This means the levers that move the needle in Copilot are directly tied to Bing's local ranking system. Bing has been explicit about this: Bing Places data feeds into Bing Maps, and both feed into Copilot's local recommendation engine. When Copilot answers "find a pediatric dentist near me," it is assembling its answer from the same structured data that powers Bing's own local pack results.
             Ready to act? <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a free strategy session.</a></p>

            {/* Callout: Warning */}
            <div
              className="ae-callout-warning rounded-xl p-6 my-8"
              style={{ backgroundColor: 'rgba(234,179,8,0.08)', border: '1px solid rgba(234,179,8,0.25)' }}
            >
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#EAB308' }} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
                <div>
                  <p className="font-semibold mb-1" style={{ color: '#FCD34D' }}>The Google Trap Most Businesses Fall Into Drop us a line at <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    Businesses that obsessively optimize for Google and ignore Bing Places are effectively invisible to Microsoft Copilot. With 140 million daily Bing users receiving Copilot-powered answers, that is not a niche gap: it is a significant blind spot in most AI visibility strategies.
                   Speak to an AEO specialist: <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.</p>
                </div>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed mb-5">
              ChatGPT and Copilot both use Bing's index, but they use it differently. ChatGPT treats Bing as a retrieval layer on top of its own trained knowledge. Copilot treats Bing as its primary ground truth. For local searches especially, Copilot's outputs are more tightly coupled to current Bing Places data. This is a structural advantage for businesses that have invested in Bing optimization, and a structural penalty for those who have not.
             One client per city. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">See if your market is available.</a></p>

            <p className="text-gray-300 leading-relaxed mb-5">
              Also worth noting: OpenAI's ChatGPT itself uses Bing's index for its web search feature. That means a strong Bing Places presence does not just help Copilot. It propagates into ChatGPT recommendations as well. The entire Microsoft-OpenAI ecosystem runs on Bing data for local queries.
             Check where you stand: <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free Blind Spot Scan.</a></p>

            <div className="ae-cta-inline my-8 p-5 rounded-xl" style={{ backgroundColor: 'rgba(255,106,0,0.06)', border: '1px solid rgba(255,106,0,0.2)' }}>
              <p className="text-sm text-gray-300 mb-3">Curious how Copilot and ChatGPT compare across the full AI search landscape? Read our breakdown. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Schedule a free 30-min call.</a></p>
              <Link
                href="/blog/chatgpt-vs-perplexity-vs-google-ai-local"
                className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-80"
                style={{ color: '#F27D24' }}
              >
                ChatGPT vs Perplexity vs Google AI: Local Showdown
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </section>

          {/* Section 3: Ranking Signals */}
          <section id="ranking-signals" className="mb-14">
            <h2 className="font-plus-jakarta text-3xl font-bold mb-6" style={{ color: '#FFFFFF' }}>
              The Six Ranking Signals Copilot Weighs
            </h2>

            <p className="text-gray-300 leading-relaxed mb-8">
              Copilot does not use a simple star-rating system. It assembles a composite picture of your business from several distinct data layers. Understanding each layer is the difference between appearing in Copilot's answer and being completely absent.
             Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> for a custom strategy.</p>

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
                  <svg className="w-5 h-5" style={{ color: '#F27D24' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                </div>
                <h3 className="font-plus-jakarta font-bold text-white mb-2">1. Listing Completeness</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Name, address, phone, categories, hours, photos, and attributes. Every empty field is a gap Copilot cannot fill. Incomplete listings are systematically deprioritized because Copilot cannot confidently synthesize information it does not have.
                 Questions? Call <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.</p>
              </div>

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
                <h3 className="font-plus-jakarta font-bold text-white mb-2">2. Multi-Platform Review Signals</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Copilot aggregates from Yelp, TripAdvisor, Facebook, and Trustpilot. A business with strong ratings on only one platform is weaker than one with consistent signals across many. Volume, recency, and cross-platform consistency all matter.
                 <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Secure your territory before a competitor does.</a></p>
              </div>

              <div
                className="rounded-xl p-6"
                style={{ backgroundColor: '#1a1f2e', border: '1px solid rgba(255,106,0,0.15)' }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: 'rgba(255,106,0,0.15)' }}
                >
                  <svg className="w-5 h-5" style={{ color: '#F27D24' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg>
                </div>
                <h3 className="font-plus-jakarta font-bold text-white mb-2">3. Geographic Relevance</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Copilot anchors recommendations to the user's physical location or the location specified in the query. A business with precise geographic data, service area definitions, and neighborhood-level attributes ranks better for hyper-local queries than one with only a city-level address.
                 <a href="https://theanswerengine.ai/blindspot" className="cta-inline">See your AI visibility score — free.</a></p>
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
                <h3 className="font-plus-jakarta font-bold text-white mb-2">4. Structured Attributes</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  When a user asks Copilot for "a coffee shop with Wi-Fi near me," it checks the hasWiFi attribute on your listing. Attributes like outdoor seating, wheelchair accessibility, accepts reservations, and pet-friendly directly map to query intents. Missing attributes mean missing recommendations.
                 <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book your free consultation here.</a></p>
              </div>

              <div
                className="rounded-xl p-6"
                style={{ backgroundColor: '#1a1f2e', border: '1px solid rgba(255,106,0,0.15)' }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: 'rgba(255,106,0,0.15)' }}
                >
                  <svg className="w-5 h-5" style={{ color: '#F27D24' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" /></svg>
                </div>
                <h3 className="font-plus-jakarta font-bold text-white mb-2">5. Social Signals</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Bing explicitly ranks social engagement as a factor. Active Facebook pages, LinkedIn presence, and platform-indexed social content signal to Bing, and therefore to Copilot, that your business is current, legitimate, and community-engaged. Dormant social profiles are a negative signal.
                 Contact us at <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>
              </div>

              <div
                className="rounded-xl p-6"
                style={{ backgroundColor: '#1a1f2e', border: '1px solid rgba(255,106,0,0.15)' }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: 'rgba(255,106,0,0.15)' }}
                >
                  <svg className="w-5 h-5" style={{ color: '#F27D24' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                </div>
                <h3 className="font-plus-jakarta font-bold text-white mb-2">6. Citation Consistency (NAP)</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Name, Address, Phone number consistency across every directory, aggregator, and citation source. Conflicting information across platforms creates confusion in Bing's knowledge graph. Copilot cannot confidently recommend a business when its own data sources disagree on basic facts.
                 Reach us at <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.</p>
              </div>
            </div>

            {/* Callout: Success */}
            <div
              className="ae-callout-success rounded-xl p-6 my-8"
              style={{ backgroundColor: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.25)' }}
            >
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#22C55E' }} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                <div>
                  <p className="font-semibold mb-1" style={{ color: '#86EFAC' }}>The Attribute Advantage Most Businesses Miss We work with one business per market. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Check if yours is still open.</a></p>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    Structured attributes are the highest-leverage, lowest-effort optimization in Copilot visibility. Most businesses never fill them in. The businesses that do are consistently cited for attribute-specific queries that their competitors cannot touch. This is one of the most actionable improvements available right now.
                   Find your gaps with a <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free AERO scan.</a></p>
                </div>
              </div>
            </div>

            <div className="ae-cta-inline my-8 p-5 rounded-xl" style={{ backgroundColor: 'rgba(255,106,0,0.06)', border: '1px solid rgba(255,106,0,0.2)' }}>
              <p className="text-sm text-gray-300 mb-3">Want to understand how these signals compare across different AI platforms? Our team has audited hundreds of businesses across every major AI engine. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Schedule a free call</a> to see where you stand.</p>
              <a
                href="mailto:support@theanswerengine.ai"
                className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-80"
                style={{ color: '#F27D24' }}
              >
                Email Us for a Custom AI Signal Audit
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </a>
            </div>
          </section>

          {/* Section 4: Copilot vs ChatGPT */}
          <section id="copilot-vs-chatgpt" className="mb-14">
            <h2 className="font-plus-jakarta text-3xl font-bold mb-6" style={{ color: '#FFFFFF' }}>
              Copilot vs ChatGPT: The Local Recommendation Difference
            </h2>

            <p className="text-gray-300 leading-relaxed mb-8">
              Both Copilot and ChatGPT are powerful AI assistants, but they behave very differently when someone asks for a local business recommendation. Understanding the gap helps you optimize for the right platform, and not assume that what works for one automatically works for the other.
             Send your questions to <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>

            {/* Comparison Table */}
            <div className="ae-comparison-table overflow-x-auto mb-10 rounded-xl" style={{ border: '1px solid rgba(255,106,0,0.2)' }}>
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ backgroundColor: 'rgba(255,106,0,0.12)' }}>
                    <th className="text-left p-4 font-plus-jakarta font-semibold text-white">Feature</th>
                    <th className="text-left p-4 font-plus-jakarta font-semibold" style={{ color: '#F27D24' }}>Microsoft Copilot</th>
                    <th className="text-left p-4 font-plus-jakarta font-semibold text-gray-300">ChatGPT</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderTop: '1px solid rgba(255,106,0,0.1)' }}>
                    <td className="p-4 text-gray-400 font-medium">Primary Data Source</td>
                    <td className="p-4 text-gray-200">Bing index (live, real-time default)</td>
                    <td className="p-4 text-gray-400">Trained knowledge + optional Bing retrieval</td>
                  </tr>
                  <tr style={{ borderTop: '1px solid rgba(255,106,0,0.1)', backgroundColor: 'rgba(255,255,255,0.02)' }}>
                    <td className="p-4 text-gray-400 font-medium">Local Listing Integration</td>
                    <td className="p-4 text-gray-200">Bing Places, Bing Maps (native)</td>
                    <td className="p-4 text-gray-400">No native listing integration</td>
                  </tr>
                  <tr style={{ borderTop: '1px solid rgba(255,106,0,0.1)' }}>
                    <td className="p-4 text-gray-400 font-medium">Review Sources Shown</td>
                    <td className="p-4 text-gray-200">Trustpilot, Yelp, TripAdvisor, OpenTable (sourced links)</td>
                    <td className="p-4 text-gray-400">Named without links in most responses</td>
                  </tr>
                  <tr style={{ borderTop: '1px solid rgba(255,106,0,0.1)', backgroundColor: 'rgba(255,255,255,0.02)' }}>
                    <td className="p-4 text-gray-400 font-medium">Booking Integration</td>
                    <td className="p-4 text-gray-200">OpenTable, direct booking platforms</td>
                    <td className="p-4 text-gray-400">Limited, text-only in most cases</td>
                  </tr>
                  <tr style={{ borderTop: '1px solid rgba(255,106,0,0.1)' }}>
                    <td className="p-4 text-gray-400 font-medium">Real-Time Hours/Availability</td>
                    <td className="p-4 text-gray-200">Yes, via Bing Maps live data</td>
                    <td className="p-4 text-gray-400">Inconsistent, training data dependent</td>
                  </tr>
                  <tr style={{ borderTop: '1px solid rgba(255,106,0,0.1)', backgroundColor: 'rgba(255,255,255,0.02)' }}>
                    <td className="p-4 text-gray-400 font-medium">Social Signals Used</td>
                    <td className="p-4 text-gray-200">Yes, Bing's social indexing</td>
                    <td className="p-4 text-gray-400">Not directly</td>
                  </tr>
                  <tr style={{ borderTop: '1px solid rgba(255,106,0,0.1)' }}>
                    <td className="p-4 text-gray-400 font-medium">Enterprise Workplace Presence</td>
                    <td className="p-4 text-gray-200">Embedded in Windows 11, Microsoft 365</td>
                    <td className="p-4 text-gray-400">Standalone app or API integration</td>
                  </tr>
                  <tr style={{ borderTop: '1px solid rgba(255,106,0,0.1)', backgroundColor: 'rgba(255,255,255,0.02)' }}>
                    <td className="p-4 text-gray-400 font-medium">Key Optimization Lever</td>
                    <td className="p-4 text-gray-200">Bing Places completeness + citation consistency</td>
                    <td className="p-4 text-gray-400">Web authority + Bing index depth</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-300 leading-relaxed mb-5">
              The structural difference comes down to ground truth. Copilot's answer for a local query is built from Bing's live local knowledge graph first, with the language model synthesizing and presenting that data. ChatGPT's answer is built from the language model's knowledge first, with live web retrieval as an optional augmentation. For businesses trying to be recommended, that distinction matters enormously.
             Call <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> for a free consultation.</p>

            <p className="text-gray-300 leading-relaxed mb-5">
              In real-world testing, Copilot consistently produces more sourced, more linkable, and more attribute-rich local recommendations than ChatGPT. A user asking Copilot for a dinner recommendation in a specific neighborhood gets results with booking links, sourced reviews, and live hours. ChatGPT typically names businesses without verifiable current sources. Copilot's output is more useful, and it is also more dependent on structured data being in place.
             <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Claim your market territory — one client per area.</a></p>

            <div className="ae-cta-inline my-8 p-5 rounded-xl" style={{ backgroundColor: 'rgba(255,106,0,0.06)', border: '1px solid rgba(255,106,0,0.2)' }}>
              <p className="text-sm text-gray-300 mb-3">Are you optimizing for AI platforms in the right order? Many businesses spend effort on the wrong platform. We help map the right sequence. <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Run your free AI Blind Spot Scan.</a></p>
              <a
                href="tel:+12134442229"
                className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-80"
                style={{ color: '#F27D24' }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                Call (213) 444-2229 for a Platform Strategy Session
              </a>
            </div>
          </section>

          {/* Section 5: Who Wins */}
          <section id="who-wins" className="mb-14">
            <h2 className="font-plus-jakarta text-3xl font-bold mb-6" style={{ color: '#FFFFFF' }}>
              Who Wins in Copilot Recommendations (and Who Disappears)
            </h2>

            <p className="text-gray-300 leading-relaxed mb-8">
              After auditing hundreds of businesses across AI recommendation platforms, patterns emerge clearly. The businesses Copilot consistently cites share specific traits. The ones it ignores share equally specific gaps.
             <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a free 30-minute strategy call.</a></p>

            {/* Pros/Cons Section */}
            <div className="ae-pros-cons grid md:grid-cols-2 gap-6 mb-10">
              <div
                className="rounded-xl p-6"
                style={{ backgroundColor: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.2)' }}
              >
                <h3 className="font-plus-jakarta font-bold mb-4 flex items-center gap-2" style={{ color: '#22C55E' }}>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  Businesses Copilot Loves
                </h3>
                <ul className="space-y-3">
                  {[
                    'Fully completed Bing Places profile with all attributes filled in',
                    'Reviews across Yelp, TripAdvisor, Trustpilot, and Facebook',
                    'Consistent NAP data across 20+ citation directories',
                    'Active social profiles indexed by Bing (Facebook, LinkedIn)',
                    'Specific attributes matching common query intents (Wi-Fi, parking, accessibility)',
                    'Recent photos and accurate hours including holiday schedules',
                    'Live booking integrations like OpenTable or direct booking links',
                    'High domain authority website with clear local service pages',
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
                  Businesses Copilot Skips
                </h3>
                <ul className="space-y-3">
                  {[
                    'Unclaimed or incomplete Bing Places listing',
                    'Reviews only on Google, with no presence on Bing-indexed platforms',
                    'NAP inconsistencies across directories (different phone numbers, suite variations)',
                    'No social media presence or dormant profiles',
                    'Zero structured attributes on the listing',
                    'Outdated hours that conflict with website information',
                    'No photos or only stock photos that do not reflect the actual business',
                    'Website with no local schema markup or location signals',
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
              className="ae-callout-orange rounded-xl p-6 my-8"
              style={{ backgroundColor: 'rgba(255,106,0,0.08)', border: '1px solid rgba(255,106,0,0.3)' }}
            >
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#F27D24' }} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" /></svg>
                <div>
                  <p className="font-semibold mb-1" style={{ color: '#F27D24' }}>The Hidden Multiplier: Bing Powers ChatGPT Too Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> to get started.</p>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    Every Bing Places optimization you make propagates into ChatGPT's web browsing results as well. Microsoft and OpenAI share Bing's index. Winning in Bing Places is not just a Copilot strategy. It is the single upstream investment that improves your visibility across the two largest AI platforms simultaneously.
                   <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a></p>
                </div>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed mb-5">
              The pattern that surprises most business owners: a competitor with fewer Google reviews but a more complete Bing Places presence will consistently beat them in Copilot. The platforms are evaluated separately. Your Google Maps dominance does not transfer. This is the blind spot that costs businesses the most in the AI-first era.
            </p>

            <div className="ae-cta-inline my-8 p-5 rounded-xl" style={{ backgroundColor: 'rgba(255,106,0,0.06)', border: '1px solid rgba(255,106,0,0.2)' }}>
              <p className="text-sm text-gray-300 mb-3">See how the same dynamics play out when two similar businesses compete head to head in AI recommendations.</p>
              <Link
                href="/blog/how-ai-picks-between-two-similar-businesses"
                className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-80"
                style={{ color: '#F27D24' }}
              >
                How AI Picks Between Two Similar Businesses
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </section>

          {/* Section 6: Decision Matrix */}
          <section id="decision-matrix" className="mb-14">
            <h2 className="font-plus-jakarta text-3xl font-bold mb-6" style={{ color: '#FFFFFF' }}>
              Decision Matrix: Are You Copilot-Ready?
            </h2>

            <p className="text-gray-300 leading-relaxed mb-8">
              Use this matrix to assess where your business stands across the key dimensions Copilot evaluates. Be honest. This is not about where you want to be: it is about where you actually are today.
            </p>

            <div className="ae-decision-matrix overflow-x-auto rounded-xl" style={{ border: '1px solid rgba(255,106,0,0.2)' }}>
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ backgroundColor: 'rgba(255,106,0,0.12)' }}>
                    <th className="text-left p-4 font-plus-jakarta font-semibold text-white">Signal Area</th>
                    <th className="text-left p-4 font-plus-jakarta font-semibold text-red-400">Not Ready</th>
                    <th className="text-left p-4 font-plus-jakarta font-semibold text-yellow-400">Partial</th>
                    <th className="text-left p-4 font-plus-jakarta font-semibold text-green-400">Copilot-Ready</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      area: 'Bing Places Profile',
                      notReady: 'Unclaimed or blank',
                      partial: 'Claimed, basic info only',
                      ready: 'Complete, verified, all fields filled',
                    },
                    {
                      area: 'Review Coverage',
                      notReady: 'Google only',
                      partial: '2 platforms, mixed recency',
                      ready: '4+ platforms, recent and consistent',
                    },
                    {
                      area: 'Structured Attributes',
                      notReady: 'None set',
                      partial: 'Basic (hours, phone)',
                      ready: 'Full attribute map including amenities',
                    },
                    {
                      area: 'NAP Consistency',
                      notReady: 'Multiple conflicting versions',
                      partial: 'Mostly consistent, a few gaps',
                      ready: 'Identical across all 20+ citations',
                    },
                    {
                      area: 'Social Signals',
                      notReady: 'No active presence',
                      partial: 'Facebook only, infrequent posts',
                      ready: 'Facebook, LinkedIn, active engagement',
                    },
                    {
                      area: 'Website Local Schema',
                      notReady: 'No schema markup',
                      partial: 'Basic LocalBusiness schema',
                      ready: 'Full schema with services, geo, hours',
                    },
                    {
                      area: 'Photos',
                      notReady: 'No photos or stock only',
                      partial: '3-5 photos, some outdated',
                      ready: '10+ real photos, updated quarterly',
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
              <p className="text-sm text-gray-300 mb-3">If you scored "Not Ready" or "Partial" in three or more areas, your Copilot visibility is significantly below where it needs to be. That gap is costing you customers every day.</p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://theanswerengine.ai/audit"
                  className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-lg text-white transition-all hover:opacity-90"
                  style={{ backgroundColor: '#F27D24' }}
                >
                  Get Your Full Copilot Readiness Score
                </a>
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
              <h3 className="font-plus-jakarta font-bold text-white mb-4">Related Reading: AI Platform Deep Dives</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <Link
                  href="/blog/how-claude-ai-evaluates-business-authority"
                  className="block p-4 rounded-lg transition-all hover:border-orange-500"
                  style={{ backgroundColor: 'rgba(255,106,0,0.05)', border: '1px solid rgba(255,106,0,0.1)' }}
                >
                  <p className="text-xs uppercase tracking-wide mb-1" style={{ color: '#F27D24' }}>Platform Deep Dive</p>
                  <p className="text-sm font-semibold text-white leading-snug">How Claude AI Evaluates Business Authority</p>
                </Link>
                <Link
                  href="/blog/chatgpt-vs-perplexity-vs-google-ai-local"
                  className="block p-4 rounded-lg transition-all hover:border-orange-500"
                  style={{ backgroundColor: 'rgba(255,106,0,0.05)', border: '1px solid rgba(255,106,0,0.1)' }}
                >
                  <p className="text-xs uppercase tracking-wide mb-1" style={{ color: '#F27D24' }}>Platform Comparison</p>
                  <p className="text-sm font-semibold text-white leading-snug">ChatGPT vs Perplexity vs Google AI: Local Search</p>
                </Link>
                <Link
                  href="/blog/how-ai-picks-between-two-similar-businesses"
                  className="block p-4 rounded-lg transition-all hover:border-orange-500"
                  style={{ backgroundColor: 'rgba(255,106,0,0.05)', border: '1px solid rgba(255,106,0,0.1)' }}
                >
                  <p className="text-xs uppercase tracking-wide mb-1" style={{ color: '#F27D24' }}>AI Tiebreakers</p>
                  <p className="text-sm font-semibold text-white leading-snug">How AI Picks Between Two Similar Businesses</p>
                </Link>
              </div>
            </div>
          </section>

          {/* Section 7: Cheat Sheet */}
          <section id="cheat-sheet" className="mb-14">
            <h2 className="font-plus-jakarta text-3xl font-bold mb-6" style={{ color: '#FFFFFF' }}>
              Copilot Visibility Cheat Sheet
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
                <h3 className="font-plus-jakarta text-xl font-bold text-white">Microsoft Copilot Optimization Quick Reference</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3" style={{ color: '#F27D24' }}>Foundation Moves (Do These First)</h4>
                  <ul className="space-y-2">
                    {[
                      'Claim and verify Bing Places at bing.com/forbusiness',
                      'Complete every profile field: name, address, phone, website, hours',
                      'Set your primary and secondary business categories accurately',
                      'Add 10+ real photos of your actual business',
                      'Fill in all structured attributes relevant to your category',
                      'Ensure NAP is identical on your website and listing',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-300">
                        <span style={{ color: '#F27D24' }} className="mt-0.5">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3" style={{ color: '#F27D24' }}>Authority Amplifiers (Do These Next)</h4>
                  <ul className="space-y-2">
                    {[
                      'Build reviews on Yelp, TripAdvisor, Facebook, and Trustpilot',
                      'Standardize NAP across all citation directories (20+ minimum)',
                      'Activate Facebook and LinkedIn with regular posts (weekly)',
                      'Add LocalBusiness schema markup to your website',
                      'Create service-specific pages on your website with location context',
                      'Respond to all reviews publicly, especially negative ones',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-300">
                        <span style={{ color: '#F27D24' }} className="mt-0.5">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3" style={{ color: '#F27D24' }}>Advanced Signals (Differentiate)</h4>
                  <ul className="space-y-2">
                    {[
                      'Connect booking platforms (OpenTable, Calendly) to your listing',
                      'Add holiday and special hours proactively',
                      'Use Bing Webmaster Tools to monitor AI performance',
                      'Publish location-specific blog content with schema markup',
                      'Get mentioned in local publications indexed by Bing',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-300">
                        <span style={{ color: '#F27D24' }} className="mt-0.5">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3" style={{ color: '#EF4444' }}>Avoid These at All Costs</h4>
                  <ul className="space-y-2">
                    {[
                      'Multiple listing versions with different phone numbers or addresses',
                      'Keyword stuffing in your business description',
                      'Using a PO Box as your primary address',
                      'Ignoring Bing in favor of Google-only optimization',
                      'Letting your listing go months without an update or new photo',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-300">
                        <span className="text-red-400 mt-0.5">✗</span>
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
                Is Microsoft Copilot Finding Your Business?
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                Most businesses have no idea whether Copilot is recommending them, ignoring them, or actively choosing their competitors. Our AI visibility audit shows you exactly where you stand across every major AI recommendation engine, including Copilot, and what it will take to close the gap.
              </p>

              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div
                  className="rounded-xl p-5"
                  style={{ backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,106,0,0.15)' }}
                >
                  <div className="w-10 h-10 rounded-full mx-auto mb-3 flex items-center justify-center" style={{ backgroundColor: 'rgba(255,106,0,0.2)' }}>
                    <svg className="w-5 h-5" style={{ color: '#F27D24' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                  </div>
                  <h3 className="font-bold text-white text-sm mb-1">Full AI Visibility Audit</h3>
                  <p className="text-xs text-gray-400">Copilot, ChatGPT, Perplexity, Google AI: see exactly where you appear and where you don't</p>
                </div>
                <div
                  className="rounded-xl p-5"
                  style={{ backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,106,0,0.15)' }}
                >
                  <div className="w-10 h-10 rounded-full mx-auto mb-3 flex items-center justify-center" style={{ backgroundColor: 'rgba(255,106,0,0.2)' }}>
                    <svg className="w-5 h-5" style={{ color: '#F27D24' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                  </div>
                  <h3 className="font-bold text-white text-sm mb-1">Competitor Gap Analysis</h3>
                  <p className="text-xs text-gray-400">Find out exactly which signals your top competitors have that you don't, and why Copilot picks them</p>
                </div>
                <div
                  className="rounded-xl p-5"
                  style={{ backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,106,0,0.15)' }}
                >
                  <div className="w-10 h-10 rounded-full mx-auto mb-3 flex items-center justify-center" style={{ backgroundColor: 'rgba(255,106,0,0.2)' }}>
                    <svg className="w-5 h-5" style={{ color: '#F27D24' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </div>
                  <h3 className="font-bold text-white text-sm mb-1">Done-For-You Optimization</h3>
                  <p className="text-xs text-gray-400">We fix every gap identified in the audit so you start appearing in Copilot answers within weeks</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/blindspot"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-base transition-all hover:opacity-90"
                  style={{ backgroundColor: '#F27D24' }}
                >
                  Get Your Free Blind Spot Report
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
                <a
                  href="tel:+12134442229"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-base transition-all hover:opacity-90"
                  style={{ backgroundColor: 'rgba(255,106,0,0.1)', color: '#F27D24', border: '2px solid rgba(255,106,0,0.4)' }}
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
                  q: 'Does Microsoft Copilot use Bing Places data when recommending businesses?',
                  a: "Yes. Microsoft Copilot pulls heavily from the Bing index, including Bing Places for Business listings. A complete, verified, and regularly updated Bing Places profile is one of the most direct signals that influences whether Copilot surfaces your business in a local recommendation. Missing hours, categories, or photos can reduce your chances of appearing.",
                },
                {
                  q: 'How is Copilot different from ChatGPT when recommending local businesses?',
                  a: "Copilot differs from ChatGPT in two key ways for local recommendations. First, Copilot natively integrates Bing Maps, Trustpilot, and OpenTable data into its answers, providing sourced, linkable results. ChatGPT often gives recommendations without live source links. Second, Copilot's answers are grounded in Bing's live index by default, making real-time listing data more directly influential.",
                },
                {
                  q: 'What review sources does Microsoft Copilot draw on for business recommendations?',
                  a: 'Copilot aggregates review signals from multiple third-party platforms including Yelp, TripAdvisor, Facebook, and Trustpilot. These are surfaced alongside Bing Places data in its local recommendation panels. A business with strong, consistent reviews across multiple platforms is significantly more likely to be featured.',
                },
                {
                  q: 'Can a small local business compete in Microsoft Copilot recommendations against large chains?',
                  a: "Yes, and in many cases small local businesses have an advantage for hyper-local queries. Copilot's Bing integration rewards precise geographic relevance, complete listing data, and authentic review depth. A small business with a fully optimized Bing Places profile, consistent citations, and strong local reviews often outperforms a national chain for neighborhood-specific queries.",
                },
                {
                  q: 'Do social media signals affect Microsoft Copilot business recommendations?',
                  a: "Bing explicitly uses social signals as a ranking factor, and since Copilot is powered by Bing's index, social engagement indirectly influences recommendation likelihood. Active social profiles, particularly on platforms Bing indexes such as Facebook and LinkedIn, contribute to the overall authority signals that Copilot evaluates when forming its answers.",
                },
                {
                  q: 'How quickly can changes to my Bing Places listing affect Copilot recommendations?',
                  a: "Bing typically re-crawls and re-indexes Bing Places listings within a few days to a week after updates. Core listing fixes like adding hours or categories can show impact within days, while broader authority signals across citation networks take weeks to months to consolidate fully.",
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
              <p className="text-sm text-gray-300 mb-3">Have a specific question about your business's Copilot visibility? Our team answers these every day.</p>
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
          <div
            className="ae-author-card rounded-xl p-6 mb-14"
            style={{ backgroundColor: '#1a1f2e', border: '1px solid rgba(255,106,0,0.15)' }}
          >
            <div className="flex items-start gap-4">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 font-plus-jakarta font-extrabold text-xl"
                style={{ backgroundColor: 'rgba(255,106,0,0.2)', color: '#F27D24' }}
              >
                AE
              </div>
              <div>
                <p className="font-plus-jakarta font-bold text-white mb-1">Justin Borges</p>
                <p className="text-xs text-gray-500 mb-2">Published March 29, 2026 · Platform Deep Dives</p>
                <p className="text-sm text-gray-400 leading-relaxed">
                  The Answer Engine is a Los Angeles-based AEO and AI visibility agency. We help local businesses get recommended by Microsoft Copilot, ChatGPT, Perplexity, Google AI Overviews, and every other major AI recommendation engine. Our team has audited hundreds of businesses across all AI platforms and built the playbook for winning in the AI-first era of local search.
                </p>
                <div className="flex flex-wrap gap-4 mt-3">
                  <a href="https://theanswerengine.ai" className="text-xs transition-colors hover:opacity-80" style={{ color: '#F27D24' }}>theanswerengine.ai</a>
                  <a href="tel:+12134442229" className="text-xs transition-colors hover:opacity-80" style={{ color: '#F27D24' }}>(213) 444-2229</a>
                  <a href="mailto:support@theanswerengine.ai" className="text-xs transition-colors hover:opacity-80" style={{ color: '#F27D24' }}>support@theanswerengine.ai</a>
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
                style={{ backgroundColor: 'rgba(255,106,0,0.2)', color: '#F27D24', border: '1px solid rgba(255,106,0,0.4)' }}
              >
                <span className="inline-block w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#F27D24' }} />
                Free AI Visibility Assessment Available Now
              </div>

              <h2 className="font-plus-jakarta text-3xl md:text-4xl font-extrabold text-white mb-4">
                Stop Losing Customers to AI You Can&apos;t See
              </h2>

              <p className="text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed text-lg">
                Every day Copilot goes unanswered in your category, a competitor collects the customers you should have. The fix is concrete, measurable, and faster than most businesses expect. Let us show you exactly what it takes to get cited.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
                <Link
                  href="/blindspot"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-white text-lg transition-all hover:opacity-90"
                  style={{
                    backgroundColor: '#F27D24',
                    boxShadow: '0 0 20px rgba(255,106,0,0.4)',
                  }}
                >
                  Get Your Free Blind Spot Report
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
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
                No commitment. We audit your AI visibility across Copilot, ChatGPT, Perplexity, and Google AI and show you where you stand, for free.
              </p>
            </div>
          </div>

        </div>
      </main>
    </>
  )
}
