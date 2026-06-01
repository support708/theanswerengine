import type { Metadata } from 'next'
import Link from 'next/link'

export const revalidate = 86400
export const dynamic = 'force-static'
export const dynamicParams = true

const title = 'Traditional Marketing vs AI Visibility in 2026'
const description =
  'Linear TV is down 11%, print is fading, and 37% of consumers now start searches with AI. Learn what actually drives customers in 2026.'
const slug = 'traditional-marketing-vs-ai-visibility-what-actually-works-in-2026'
const publishDate = '2026-03-29'

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'traditional marketing vs AI visibility',
    'AI search marketing 2026',
    'traditional advertising decline',
    'AI search visibility',
    'marketing spend shift AI',
    'digital marketing vs traditional',
    'answer engine optimization',
    'AI visibility strategy',
    'marketing ROI 2026',
    'AI search vs Google',
  ],
  openGraph: {
    title,
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
    title,
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
      headline: title,
      description,
      image: `https://theanswerengine.ai/blog/${slug}.svg`,
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
        name: 'The Answer Engine',
        url: 'https://theanswerengine.ai',
        logo: {
          '@type': 'ImageObject',
          url: 'https://theanswerengine.ai/logo.png',
        },
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `https://theanswerengine.ai/blog/${slug}`,
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is traditional marketing still effective in 2026?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Traditional marketing channels like billboards, direct mail, and radio still generate awareness and some ROI. However, linear TV ad spend is down more than 11% in 2026 and print continues its long decline. The critical shift is that consumers increasingly ask AI platforms for recommendations before they ever see a traditional ad, which means businesses invisible to AI miss the customer before any ad runs.',
          },
        },
        {
          '@type': 'Question',
          name: 'What percentage of consumers now start searches with AI tools?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '37% of consumers now start their searches with AI tools instead of Google or Bing, according to 2026 research. Among US adults under 30, approximately 58% have used ChatGPT, and AI platforms collectively reach over 1.5 billion monthly users through Google AI Overviews alone.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does AI search visibility differ from traditional SEO?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Traditional SEO targets keyword rankings in Google search results, where users choose from a list of links. AI search visibility is about being the business that AI platforms cite and recommend when a user asks a conversational question. AI delivers one answer, not ten links. If you are not in that answer, you do not exist to that customer at that moment.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do AI search visitors convert better than traditional search visitors?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Current data shows AI-driven visitors convert approximately 4.4x higher than standard organic search visitors. AI visitors also spend 68% more time on websites than traditional search visitors. This higher quality is because AI recommendations arrive after the AI has already determined your business matches the user\'s specific need.',
          },
        },
        {
          '@type': 'Question',
          name: 'What will happen to my business if I only invest in traditional marketing in 2026?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Gartner projects traditional search engine volume will decline 25% by 2026, and that trend accelerates beyond that. Businesses investing exclusively in traditional marketing channels lose ground to competitors that also appear in AI search responses. The gap compounds over time: each month, more customers use AI to find services, and if competitors appear there while you do not, those customers are gone.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much should a business shift budget toward AI visibility?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'McKinsey analysis suggests AI systems will grow to 40% of marketing spend within the next few years. However, the right allocation depends on your industry, customer demographics, and current visibility gaps. A blind spot audit revealing where AI platforms stand on your business is the right starting point before setting any specific budget number.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can a business do both traditional marketing and AI visibility?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Absolutely, and for most businesses that is the right strategy. Traditional marketing builds brand awareness at the top of the funnel. AI visibility captures high-intent customers at the exact moment they are ready to hire or buy. The two reinforce each other: a customer who sees your billboard and then asks an AI assistant about your service category should find your name confirmed by the AI.',
          },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
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
          name: 'Traditional Marketing vs AI Visibility',
          item: `https://theanswerengine.ai/blog/${slug}`,
        },
      ],
    },
  ],
}

function Breadcrumb() {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex items-center gap-2 text-sm text-gray-500">
        <li>
          <a href="/" className="hover:text-orange-400 transition-colors">
            Home
          </a>
        </li>
        <li>/</li>
        <li>
          <a href="/blog" className="hover:text-orange-400 transition-colors">
            Blog
          </a>
        </li>
        <li>/</li>
        <li className="text-gray-400 truncate max-w-[280px]">Traditional Marketing vs AI Visibility</li>
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
        style={{ backgroundColor: '#0F1117', color: '#E5E7EB', minHeight: '100vh' }}
        className="font-sans"
      >
        {/* ── HERO ─────────────────────────────────────────────── */}
        <section
          style={{
            background: 'linear-gradient(135deg, #0F1117 0%, #1a1025 50%, #0F1117 100%)',
            position: 'relative',
            overflow: 'hidden',
          }}
          className="pt-20 pb-16"
        >
          {/* SVG background pattern */}
          <svg
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              opacity: 0.07,
            }}
          >
            <defs>
              <pattern
                id="hero-grid-97"
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
            <rect width="100%" height="100%" fill="url(#hero-grid-97)" />
          </svg>

          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <Breadcrumb />

            {/* Category badge */}
            <div className="mb-4">
              <span
                style={{
                  backgroundColor: 'rgba(255, 106, 0, 0.15)',
                  color: '#F27D24',
                  border: '1px solid rgba(255, 106, 0, 0.3)',
                }}
                className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full"
              >
                Competitive Intelligence
              </span>
            </div>

            <h1
              className="font-plus-jakarta text-4xl md:text-5xl font-extrabold leading-tight mb-6"
              style={{ color: '#FFFFFF' }}
            >
              Traditional Marketing vs{' '}
              <span style={{ color: '#F27D24' }}>AI Visibility</span>
              <br />
              What Actually Works in 2026
            </h1>

            <p className="text-xl text-gray-300 max-w-3xl mb-8 leading-relaxed">
              Linear TV ad spend is down over 11%. Traditional search volume is forecast to drop
              25%. Meanwhile, 37% of consumers now start their search with an AI tool. The
              marketing playbook that built your business is no longer enough on its own. Here is
              what the data actually says, and what to do about it.
            </p>

            {/* Author + date row */}
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <div
                style={{ backgroundColor: '#F27D24' }}
                className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-white text-sm"
              >
                AE
              </div>
              <div>
                <span className="text-gray-300 font-medium">Justin Borges</span>
                <span className="mx-2">·</span>
                <time dateTime={publishDate} className="text-gray-500">
                  March 29, 2026
                </time>
                <span className="mx-2">·</span>
                <span className="text-gray-500">14 min read</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── MAIN CONTENT ─────────────────────────────────────── */}
        <div className="max-w-4xl mx-auto px-6 py-20">

          {/* ── STATS GRID ───────────────────────────────────────── */}
          <section className="ae-stats-grid grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            <div
              className="ae-stat-card rounded-xl p-5 text-center"
              style={{
                backgroundColor: 'rgba(255,106,0,0.08)',
                border: '1px solid rgba(255,106,0,0.25)',
              }}
            >
              <div
                className="font-plus-jakarta text-4xl font-extrabold mb-1"
                style={{ color: '#F27D24' }}
              >
                37%
              </div>
              <div className="text-xs text-gray-400 leading-snug">
                of consumers now start searches with AI tools instead of Google
              </div>
              <div className="text-xs text-gray-600 mt-2">Eight Oh Two, 2026</div>
            </div>

            <div
              className="ae-stat-card rounded-xl p-5 text-center"
              style={{
                backgroundColor: 'rgba(255,106,0,0.08)',
                border: '1px solid rgba(255,106,0,0.25)',
              }}
            >
              <div
                className="font-plus-jakarta text-4xl font-extrabold mb-1"
                style={{ color: '#F27D24' }}
              >
                4.4x
              </div>
              <div className="text-xs text-gray-400 leading-snug">
                higher conversion rate for AI-referred visitors vs organic search
              </div>
              <div className="text-xs text-gray-600 mt-2">Superlines, 2026</div>
            </div>

            <div
              className="ae-stat-card rounded-xl p-5 text-center"
              style={{
                backgroundColor: 'rgba(255,106,0,0.08)',
                border: '1px solid rgba(255,106,0,0.25)',
              }}
            >
              <div
                className="font-plus-jakarta text-4xl font-extrabold mb-1"
                style={{ color: '#F27D24' }}
              >
                25%
              </div>
              <div className="text-xs text-gray-400 leading-snug">
                projected drop in traditional search engine volume by end of 2026
              </div>
              <div className="text-xs text-gray-600 mt-2">Gartner, 2025</div>
            </div>

            <div
              className="ae-stat-card rounded-xl p-5 text-center"
              style={{
                backgroundColor: 'rgba(255,106,0,0.08)',
                border: '1px solid rgba(255,106,0,0.25)',
              }}
            >
              <div
                className="font-plus-jakarta text-4xl font-extrabold mb-1"
                style={{ color: '#F27D24' }}
              >
                11%+
              </div>
              <div className="text-xs text-gray-400 leading-snug">
                decline in linear TV ad spend in 2026 as audiences fragment
              </div>
              <div className="text-xs text-gray-600 mt-2">Upmetrics, 2026</div>
            </div>
          </section>

          {/* ── TABLE OF CONTENTS ──────────────────────────────────── */}
          <nav
            className="ae-toc rounded-xl p-6 mb-16"
            style={{
              backgroundColor: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
            aria-label="Table of contents"
          >
            <h2
              className="font-plus-jakarta text-lg font-bold mb-4"
              style={{ color: '#F27D24' }}
            >
              In This Article
            </h2>
            <ol className="space-y-2 text-sm text-gray-400 list-decimal list-inside">
              <li>
                <a href="#state-of-traditional" className="hover:text-orange-400 transition-colors">
                  The State of Traditional Marketing in 2026
                </a>
              </li>
              <li>
                <a href="#ai-search-rise" className="hover:text-orange-400 transition-colors">
                  The Rise of AI Search: Numbers That Cannot Be Ignored
                </a>
              </li>
              <li>
                <a href="#where-each-wins" className="hover:text-orange-400 transition-colors">
                  Where Each Channel Actually Wins
                </a>
              </li>
              <li>
                <a href="#comparison-table" className="hover:text-orange-400 transition-colors">
                  Head-to-Head Comparison
                </a>
              </li>
              <li>
                <a href="#the-invisible-problem" className="hover:text-orange-400 transition-colors">
                  The Invisible Problem Most Businesses Have Right Now
                </a>
              </li>
              <li>
                <a href="#decision-matrix" className="hover:text-orange-400 transition-colors">
                  Decision Matrix: What to Prioritize
                </a>
              </li>
              <li>
                <a href="#cheat-sheet" className="hover:text-orange-400 transition-colors">
                  2026 Marketing Channel Cheat Sheet
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-orange-400 transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
            </ol>
          </nav>

          {/* ── SECTION 1: STATE OF TRADITIONAL ───────────────────── */}
          <section id="state-of-traditional" className="mb-16">
            <h2
              className="font-plus-jakarta text-3xl font-bold mb-6"
              style={{ color: '#FFFFFF' }}
            >
              The State of Traditional Marketing in 2026
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Traditional marketing has not died. That is the nuanced truth that gets lost in
              breathless headlines. Billboards still generate awareness. Direct mail still converts
              certain audiences. Radio still reaches 71% of adults aged 25 to 54 weekly. But the
              trajectory of each major traditional channel is unmistakable: shrinking budgets,
              fragmenting audiences, and diminishing returns at the top end.
             Markets fill fast. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Check your territory availability.</a></p>
            <p className="text-gray-300 leading-relaxed mb-6">
              Linear television, the king of brand building for three decades, is absorbing the
              sharpest blow. Global linear TV ad spend is dropping over 11% in 2026 alone. A
              channel that held 41.3% of global ad spending in 2013 now commands just 12.4%. Every
              year, a larger share of the audience is streaming, and streaming inventory behaves
              more like digital than traditional: targetable, measurable, and increasingly
              competitive.
             Your first step: <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free AERO Blind Spot Scan.</a></p>

            <div
              className="ae-callout-warning rounded-xl p-6 mb-8"
              style={{
                backgroundColor: 'rgba(234, 179, 8, 0.08)',
                border: '1px solid rgba(234, 179, 8, 0.3)',
              }}
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl mt-0.5">⚠️</span>
                <div>
                  <h3
                    className="font-plus-jakarta font-bold text-lg mb-2"
                    style={{ color: '#EAB308' }}
                  >
                    The Awareness Gap Traditional Marketing Cannot Fill
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    A billboard creates awareness. A radio spot creates familiarity. But neither
                    answers the question a customer is actively asking at 11pm on their phone: "Who
                    is the best plumber near me?" That question goes to ChatGPT, Google AI Mode, or
                    Perplexity. If your business is not in that AI answer, the billboard you paid
                    for does not close the loop.
                   <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Claim your free call</a> before your market fills.</p>
                </div>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed mb-6">
              Print advertising tells a similar story. Digital newspaper ads crossed $5 billion in
              2025, overtaking print for the first time in the US, with print falling to $4.9
              billion. Magazine advertising continues to consolidate. The exception is direct mail,
              which recorded a remarkable 161% ROI in 2025, the highest of any paid marketing
              channel. But direct mail is increasingly a retention and upsell tool for existing
              customer lists, not a customer acquisition engine for cold audiences.
             Reach out: <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>

            <p className="text-gray-300 leading-relaxed mb-6">
              Out-of-home advertising, including billboards, is the outlier performing reasonably
              well, with $6.98 billion in US OOH revenue through Q3 2025. Digital OOH formats
              grew 14.5% while static formats barely moved at 1.5%. Even billboards are going
              digital and programmatic, which says something important: the channels that survive
              are the ones borrowing principles from digital.
             Call us at <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> today.</p>

            {/* Pros/cons: Traditional */}
            <div
              className="ae-pros-cons grid md:grid-cols-2 gap-6 mb-8"
            >
              <div
                className="rounded-xl p-6"
                style={{
                  backgroundColor: 'rgba(34, 197, 94, 0.06)',
                  border: '1px solid rgba(34, 197, 94, 0.2)',
                }}
              >
                <h3
                  className="font-plus-jakarta font-bold text-base mb-4"
                  style={{ color: '#22C55E' }}
                >
                  Where Traditional Marketing Still Wins
                </h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <span style={{ color: '#22C55E' }} className="mt-0.5 flex-shrink-0">✓</span>
                    Top-of-funnel brand awareness at scale (TV, OOH)
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: '#22C55E' }} className="mt-0.5 flex-shrink-0">✓</span>
                    Retention and upsell via direct mail to warm lists
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: '#22C55E' }} className="mt-0.5 flex-shrink-0">✓</span>
                    Local community presence and physical trust signals
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: '#22C55E' }} className="mt-0.5 flex-shrink-0">✓</span>
                    Radio for drive-time, local and regional audiences
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: '#22C55E' }} className="mt-0.5 flex-shrink-0">✓</span>
                    Demographic targeting for older audiences less on AI
                  </li>
                </ul>
              </div>
              <div
                className="rounded-xl p-6"
                style={{
                  backgroundColor: 'rgba(239, 68, 68, 0.06)',
                  border: '1px solid rgba(239, 68, 68, 0.2)',
                }}
              >
                <h3
                  className="font-plus-jakarta font-bold text-base mb-4"
                  style={{ color: '#EF4444' }}
                >
                  Where Traditional Marketing Falls Short
                </h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <span style={{ color: '#EF4444' }} className="mt-0.5 flex-shrink-0">✗</span>
                    Cannot answer a customer's active question in the moment
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: '#EF4444' }} className="mt-0.5 flex-shrink-0">✗</span>
                    No presence in AI search responses where intent is highest
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: '#EF4444' }} className="mt-0.5 flex-shrink-0">✗</span>
                    Attribution is difficult, especially for multi-touch journeys
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: '#EF4444' }} className="mt-0.5 flex-shrink-0">✗</span>
                    Audiences shrinking in linear TV and print year over year
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: '#EF4444' }} className="mt-0.5 flex-shrink-0">✗</span>
                    CPMs rising as competition for shrinking inventory intensifies
                  </li>
                </ul>
              </div>
            </div>

            {/* Inline CTA 1 */}
            <div
              className="ae-cta-inline rounded-lg p-4 mb-4 flex flex-col sm:flex-row items-start sm:items-center gap-4"
              style={{
                backgroundColor: 'rgba(255, 106, 0, 0.08)',
                border: '1px solid rgba(255, 106, 0, 0.25)',
              }}
            >
              <div className="flex-1">
                <p className="text-sm text-gray-300">
                  <span style={{ color: '#F27D24' }} className="font-semibold">
                    Is your business invisible to AI?
                  </span>{' '}
                  Find out in 5 minutes with a free AI Blind Spot Audit.
                 <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Lock in your exclusive territory now.</a></p>
              </div>
              <a
                href="/blindspot"
                style={{
                  backgroundColor: '#F27D24',
                  color: '#FFFFFF',
                }}
                className="text-sm font-semibold px-4 py-2 rounded-lg whitespace-nowrap hover:opacity-90 transition-opacity"
              >
                Get Free Audit
              </a>
            </div>
          </section>

          {/* ── SECTION 2: AI SEARCH RISE ──────────────────────────── */}
          <section id="ai-search-rise" className="mb-16">
            <h2
              className="font-plus-jakarta text-3xl font-bold mb-6"
              style={{ color: '#FFFFFF' }}
            >
              The Rise of AI Search: Numbers That Cannot Be Ignored
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Every quarter produces a new batch of AI search adoption numbers, and every quarter
              they are larger than forecasters predicted. The AI search engine market, valued at
              $43.6 billion in 2024, is on a trajectory to capture 62.2% of total search volume
              by 2030. But 2030 feels abstract. What is happening right now is already material
              for businesses.
             <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Get your free AI readiness report.</a></p>
            <p className="text-gray-300 leading-relaxed mb-6">
              Google AI Overviews alone reach 1.5 billion monthly users. ChatGPT has 810 million
              daily active users. Perplexity, Claude, Grok, Copilot, and Gemini collectively
              handle hundreds of millions more queries every day. These are not niche tools used
              by tech enthusiasts. They are the new front door through which a rapidly growing
              share of your potential customers first encounter your category.
             Ready to act? <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a free strategy session.</a></p>

            <div
              className="ae-callout-info rounded-xl p-6 mb-8"
              style={{
                backgroundColor: 'rgba(59, 130, 246, 0.08)',
                border: '1px solid rgba(59, 130, 246, 0.25)',
              }}
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl mt-0.5">💡</span>
                <div>
                  <h3
                    className="font-plus-jakarta font-bold text-lg mb-2"
                    style={{ color: '#60A5FA' }}
                  >
                    How AI Search Actually Works for Local Businesses
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    When a potential customer types "best estate attorney in Phoenix" into
                    ChatGPT, the AI does not return ten blue links. It synthesizes information
                    from trusted sources and surfaces one to three business names with context.
                    The business it names is not necessarily the one with the highest Google
                    ranking. It is the one whose authority, reviews, descriptions, and structured
                    data gave the AI enough confidence to recommend. That is a fundamentally
                    different game.
                   Drop us a line at <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>
                </div>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed mb-6">
              The quality of AI-referred traffic compounds the urgency. Traditional organic
              search visitors convert at roughly 5%. AI-referred visitors convert at
              approximately 4.4x that rate, and they spend 68% more time on a website before
              deciding. The reason is clear: AI does the qualification work before the visit.
              By the time a user clicks through, they already received a specific recommendation
              that matched their stated need.
             Speak to an AEO specialist: <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.</p>
            <p className="text-gray-300 leading-relaxed mb-6">
              The zero-click reality also reshapes the calculation. 93% of AI search sessions
              end without any website click at all. This means that AI visibility is not only
              about driving traffic. It is about being named, described accurately, and
              recommended even when the user never visits your site. For service businesses,
              having your phone number and location confirmed by an AI recommendation carries
              brand value that no billboard can replicate at that moment of intent.
             One client per city. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">See if your market is available.</a></p>

            {/* Internal link CTA */}
            <div
              className="ae-cta-block rounded-xl p-6 mb-8"
              style={{
                backgroundColor: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              <p className="text-sm text-gray-400 mb-3">Related reading on this topic: Check where you stand: <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free Blind Spot Scan.</a></p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/blog/hidden-cost-ignoring-ai-search"
                  style={{ color: '#F27D24' }}
                  className="text-sm font-medium hover:underline"
                >
                  The Hidden Cost of Ignoring AI Search →
                </Link>
                <Link
                  href="/blog/ai-search-vs-google-maps-which-one-sends-more-customers"
                  style={{ color: '#F27D24' }}
                  className="text-sm font-medium hover:underline"
                >
                  AI Search vs Google Maps: Who Sends More Customers →
                </Link>
              </div>
            </div>

            {/* Inline CTA 2 */}
            <div
              className="ae-cta-inline rounded-lg p-4 mb-4 flex flex-col sm:flex-row items-start sm:items-center gap-4"
              style={{
                backgroundColor: 'rgba(255, 106, 0, 0.08)',
                border: '1px solid rgba(255, 106, 0, 0.25)',
              }}
            >
              <div className="flex-1">
                <p className="text-sm text-gray-300">
                  <span style={{ color: '#F27D24' }} className="font-semibold">
                    Curious what AI says about your business right now?
                  </span>{' '}
                  Talk to a visibility specialist.
                 <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Schedule a free 30-min call.</a></p>
              </div>
              <a
                href="tel:+12134442229"
                style={{ color: '#F27D24' }}
                className="text-sm font-semibold whitespace-nowrap hover:underline"
              >
                Call (213) 444-2229
              </a>
            </div>
          </section>

          {/* ── SECTION 3: WHERE EACH WINS ─────────────────────────── */}
          <section id="where-each-wins" className="mb-16">
            <h2
              className="font-plus-jakarta text-3xl font-bold mb-6"
              style={{ color: '#FFFFFF' }}
            >
              Where Each Channel Actually Wins
            </h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              The marketing conversation is too often framed as "traditional vs digital." A more
              useful frame is: which channel owns which stage of the customer journey, and which
              stage is growing fastest? The answer shapes where additional investment creates the
              most leverage.
             Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> for a custom strategy.</p>

            {/* Journey stage cards */}
            <div className="grid md:grid-cols-3 gap-5 mb-10">
              <div
                className="rounded-xl p-5"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <div
                  className="text-xs font-semibold uppercase tracking-widest mb-3"
                  style={{ color: '#9CA3AF' }}
                >
                  Stage 1
                </div>
                <h3
                  className="font-plus-jakarta font-bold text-base mb-2"
                  style={{ color: '#FFFFFF' }}
                >
                  Awareness
                </h3>
                <p className="text-sm text-gray-400 mb-3 leading-relaxed">
                  Customer learns your brand exists. TV, radio, and OOH still own much of this
                  stage, particularly for broad local audiences.
                 Questions? Call <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.</p>
                <div
                  className="text-xs font-medium px-2 py-1 rounded"
                  style={{
                    backgroundColor: 'rgba(34,197,94,0.1)',
                    color: '#22C55E',
                    display: 'inline-block',
                  }}
                >
                  Traditional: Strong
                </div>
              </div>

              <div
                className="rounded-xl p-5"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <div
                  className="text-xs font-semibold uppercase tracking-widest mb-3"
                  style={{ color: '#9CA3AF' }}
                >
                  Stage 2
                </div>
                <h3
                  className="font-plus-jakarta font-bold text-base mb-2"
                  style={{ color: '#FFFFFF' }}
                >
                  Active Search
                </h3>
                <p className="text-sm text-gray-400 mb-3 leading-relaxed">
                  Customer asks "who should I hire for X near me?" This stage is rapidly
                  migrating from Google to AI platforms. Whoever wins here wins the lead.
                 <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Secure your territory before a competitor does.</a></p>
                <div
                  className="text-xs font-medium px-2 py-1 rounded"
                  style={{
                    backgroundColor: 'rgba(255,106,0,0.1)',
                    color: '#F27D24',
                    display: 'inline-block',
                  }}
                >
                  AI Visibility: Critical
                </div>
              </div>

              <div
                className="rounded-xl p-5"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <div
                  className="text-xs font-semibold uppercase tracking-widest mb-3"
                  style={{ color: '#9CA3AF' }}
                >
                  Stage 3
                </div>
                <h3
                  className="font-plus-jakarta font-bold text-base mb-2"
                  style={{ color: '#FFFFFF' }}
                >
                  Consideration and Close
                </h3>
                <p className="text-sm text-gray-400 mb-3 leading-relaxed">
                  Customer evaluates options. Reviews, website, and AI confirmation all play a
                  role. AI-referred visitors convert 4.4x higher because the AI pre-qualifies them.
                 <a href="https://theanswerengine.ai/blindspot" className="cta-inline">See your AI visibility score — free.</a></p>
                <div
                  className="text-xs font-medium px-2 py-1 rounded"
                  style={{
                    backgroundColor: 'rgba(59,130,246,0.1)',
                    color: '#60A5FA',
                    display: 'inline-block',
                  }}
                >
                  Hybrid: Both Matter
                </div>
              </div>
            </div>

            <div
              className="ae-callout-orange rounded-xl p-6 mb-8"
              style={{
                backgroundColor: 'rgba(255, 106, 0, 0.1)',
                border: '1px solid rgba(255, 106, 0, 0.3)',
              }}
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl mt-0.5">🔥</span>
                <div>
                  <h3
                    className="font-plus-jakarta font-bold text-lg mb-2"
                    style={{ color: '#F27D24' }}
                  >
                    The Stage That Determines Whether You Win or Lose
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Stage 2, active search, is the decisive battleground. It is where a customer
                    has moved from passive awareness to active intent. In 2020, this stage lived
                    almost entirely in Google. In 2026, it is splitting rapidly between Google and
                    AI platforms. A business that owns Stage 1 through traditional advertising but
                    is invisible in Stage 2 is paying to generate demand that competitors capture.
                   <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book your free consultation here.</a></p>
                </div>
              </div>
            </div>

            {/* Inline CTA 3 */}
            <div
              className="ae-cta-inline rounded-lg p-4 mb-4 flex flex-col sm:flex-row items-start sm:items-center gap-4"
              style={{
                backgroundColor: 'rgba(255, 106, 0, 0.08)',
                border: '1px solid rgba(255, 106, 0, 0.25)',
              }}
            >
              <div className="flex-1">
                <p className="text-sm text-gray-300">
                  <span style={{ color: '#F27D24' }} className="font-semibold">
                    See exactly where your business stands in Stage 2.
                  </span>{' '}
                  We audit ChatGPT, Perplexity, Gemini, and more.
                 Contact us at <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>
              </div>
              <a
                href="mailto:support@theanswerengine.ai"
                style={{ color: '#F27D24' }}
                className="text-sm font-semibold whitespace-nowrap hover:underline"
              >
                Email Us
              </a>
            </div>
          </section>

          {/* ── COMPARISON TABLE ───────────────────────────────────── */}
          <section id="comparison-table" className="mb-16">
            <h2
              className="font-plus-jakarta text-3xl font-bold mb-6"
              style={{ color: '#FFFFFF' }}
            >
              Head-to-Head Comparison
            </h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              This table does not declare a winner. It maps each channel to the dimensions that
              matter most for businesses making real budget decisions in 2026.
             Reach us at <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.</p>

            <div className="ae-comparison-table overflow-x-auto rounded-xl mb-8">
              <table
                className="w-full text-sm"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderCollapse: 'collapse',
                }}
              >
                <thead>
                  <tr
                    style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}
                  >
                    <th
                      className="text-left p-4 font-plus-jakarta font-semibold"
                      style={{ color: '#F27D24' }}
                    >
                      Dimension
                    </th>
                    <th
                      className="text-left p-4 font-plus-jakarta font-semibold"
                      style={{ color: '#9CA3AF' }}
                    >
                      TV / Radio / Print
                    </th>
                    <th
                      className="text-left p-4 font-plus-jakarta font-semibold"
                      style={{ color: '#9CA3AF' }}
                    >
                      Billboards / OOH
                    </th>
                    <th
                      className="text-left p-4 font-plus-jakarta font-semibold"
                      style={{ color: '#F27D24' }}
                    >
                      AI Search Visibility
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      dimension: 'Audience trend',
                      tv: 'Declining, fragmenting',
                      ooh: 'Stable to slight growth',
                      ai: 'Rapid growth, +1% MoM',
                    },
                    {
                      dimension: 'Intent quality',
                      tv: 'Low: passive exposure',
                      ooh: 'Low-medium: passive',
                      ai: 'Very high: active query',
                    },
                    {
                      dimension: 'Conversion rate',
                      tv: '0.5 to 2% typical',
                      ooh: 'Hard to measure directly',
                      ai: '4.4x organic search avg',
                    },
                    {
                      dimension: 'Attribution',
                      tv: 'Difficult, multi-touch',
                      ooh: 'Limited',
                      ai: 'Improving rapidly',
                    },
                    {
                      dimension: 'Cost trajectory',
                      tv: 'Rising CPMs on shrinking inventory',
                      ooh: 'Stable, digital OOH rising',
                      ai: 'Early mover advantage now',
                    },
                    {
                      dimension: 'Best use case',
                      tv: 'Brand awareness, retention',
                      ooh: 'Local presence, recall',
                      ai: 'Active intent capture',
                    },
                    {
                      dimension: '2026 momentum',
                      tv: 'Down 11%+ globally',
                      ooh: 'Digital OOH +14.5%',
                      ai: 'Market growing to $64.6B',
                    },
                  ].map((row, i) => (
                    <tr
                      key={i}
                      style={{
                        borderBottom: '1px solid rgba(255,255,255,0.05)',
                        backgroundColor: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.01)',
                      }}
                    >
                      <td
                        className="p-4 font-medium"
                        style={{ color: '#E5E7EB' }}
                      >
                        {row.dimension}
                      </td>
                      <td className="p-4 text-gray-400">{row.tv}</td>
                      <td className="p-4 text-gray-400">{row.ooh}</td>
                      <td
                        className="p-4 font-medium"
                        style={{ color: '#F27D24' }}
                      >
                        {row.ai}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Inline CTA 4 */}
            <div
              className="ae-cta-inline rounded-lg p-4 flex flex-col sm:flex-row items-start sm:items-center gap-4"
              style={{
                backgroundColor: 'rgba(255, 106, 0, 0.08)',
                border: '1px solid rgba(255, 106, 0, 0.25)',
              }}
            >
              <div className="flex-1">
                <p className="text-sm text-gray-300">
                  <span style={{ color: '#F27D24' }} className="font-semibold">
                    Not sure how to read this for your specific industry?
                  </span>{' '}
                  We build channel-specific visibility strategies every week.
                 We work with one business per market. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Check if yours is still open.</a></p>
              </div>
              <a
                href="/blindspot"
                style={{
                  backgroundColor: '#F27D24',
                  color: '#FFFFFF',
                }}
                className="text-sm font-semibold px-4 py-2 rounded-lg whitespace-nowrap hover:opacity-90 transition-opacity"
              >
                Get Your Strategy
              </a>
            </div>
          </section>

          {/* ── SECTION 4: THE INVISIBLE PROBLEM ──────────────────── */}
          <section id="the-invisible-problem" className="mb-16">
            <h2
              className="font-plus-jakarta text-3xl font-bold mb-6"
              style={{ color: '#FFFFFF' }}
            >
              The Invisible Problem Most Businesses Have Right Now
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              The majority of small and mid-sized businesses we speak with have no idea what AI
              platforms say about them. Some have never checked. Others assume that good Google
              rankings automatically translate to AI visibility. They do not.
             Find your gaps with a <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free AERO scan.</a></p>
            <p className="text-gray-300 leading-relaxed mb-6">
              AI platforms build their understanding of a business from an entirely different set
              of signals than Google uses for rankings. Entity recognition, structured data,
              citation consistency across the web, the quality and recency of third-party mentions,
              and the clarity of the business's own website content all feed the AI's confidence
              level. A business can rank on page one of Google and still be completely absent from
              ChatGPT, Perplexity, and Gemini responses.
             <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Schedule a free call</a> to see where you stand.</p>

            <div
              className="ae-callout-success rounded-xl p-6 mb-8"
              style={{
                backgroundColor: 'rgba(34, 197, 94, 0.08)',
                border: '1px solid rgba(34, 197, 94, 0.25)',
              }}
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl mt-0.5">✅</span>
                <div>
                  <h3
                    className="font-plus-jakarta font-bold text-lg mb-2"
                    style={{ color: '#22C55E' }}
                  >
                    What Businesses That Appear in AI Responses Have in Common
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-3">
                    After analyzing hundreds of AI citation patterns, a few consistent themes
                    emerge among businesses that reliably appear in AI answers:
                   Send your questions to <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li className="flex items-start gap-2">
                      <span style={{ color: '#22C55E' }} className="flex-shrink-0">•</span>
                      Clear, consistent entity information across every major directory and platform
                    </li>
                    <li className="flex items-start gap-2">
                      <span style={{ color: '#22C55E' }} className="flex-shrink-0">•</span>
                      Website content that answers the specific questions AI users are asking
                    </li>
                    <li className="flex items-start gap-2">
                      <span style={{ color: '#22C55E' }} className="flex-shrink-0">•</span>
                      High volume of authentic, specific reviews describing actual experiences
                    </li>
                    <li className="flex items-start gap-2">
                      <span style={{ color: '#22C55E' }} className="flex-shrink-0">•</span>
                      Third-party sources that mention the business in context (not just listings)
                    </li>
                    <li className="flex items-start gap-2">
                      <span style={{ color: '#22C55E' }} className="flex-shrink-0">•</span>
                      Content updated within the past 60 days, earning 28% more AI citations
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed mb-6">
              The businesses that have worked on these signals are pulling ahead quietly. They
              are not running more TV ads. They are not bidding more on Google. They are being
              named by AI platforms to high-intent customers every hour of every day, with no
              cost-per-click.
             Call <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> for a free consultation.</p>
            <p className="text-gray-300 leading-relaxed mb-6">
              The businesses that have not done this work are spending more on traditional
              channels to capture a shrinking share of an audience that is increasingly finding
              alternatives before the traditional ad even has a chance to work.
             <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Claim your market territory — one client per area.</a></p>

            <Link
              href="/blog/seo-agency-vs-ai-optimization-which-one"
              className="block mb-8"
              style={{
                backgroundColor: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '12px',
                padding: '20px',
                textDecoration: 'none',
              }}
            >
              <p className="text-xs text-gray-500 mb-1 uppercase tracking-widest">Related Article <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Run your free AI Blind Spot Scan.</a></p>
              <p className="font-plus-jakarta font-semibold text-white hover:text-orange-400 transition-colors">
                SEO Agency vs AI Optimization: Which One Does Your Business Actually Need? →
               <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a free 30-minute strategy call.</a></p>
            </Link>

            {/* Inline CTA 5 */}
            <div
              className="ae-cta-inline rounded-lg p-4 flex flex-col sm:flex-row items-start sm:items-center gap-4"
              style={{
                backgroundColor: 'rgba(255, 106, 0, 0.08)',
                border: '1px solid rgba(255, 106, 0, 0.25)',
              }}
            >
              <div className="flex-1">
                <p className="text-sm text-gray-300">
                  <span style={{ color: '#F27D24' }} className="font-semibold">
                    Want to know exactly what ChatGPT says about your business today?
                  </span>{' '}
                  We run the audit and show you the exact gap.
                 Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> to get started.</p>
              </div>
              <a
                href="tel:+12134442229"
                style={{ color: '#F27D24' }}
                className="text-sm font-semibold whitespace-nowrap hover:underline"
              >
                Call (213) 444-2229
              </a>
            </div>
          </section>

          {/* ── DECISION MATRIX ────────────────────────────────────── */}
          <section id="decision-matrix" className="mb-16">
            <h2
              className="font-plus-jakarta text-3xl font-bold mb-6"
              style={{ color: '#FFFFFF' }}
            >
              Decision Matrix: What to Prioritize
            </h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              Your ideal channel mix depends on your business type, customer demographics, and
              current visibility gaps. Use this matrix as a starting framework, not a final answer.
             <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a></p>

            <div className="ae-decision-matrix overflow-x-auto rounded-xl mb-8">
              <table
                className="w-full text-sm"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderCollapse: 'collapse',
                }}
              >
                <thead>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                    <th
                      className="text-left p-4 font-plus-jakarta font-semibold"
                      style={{ color: '#F27D24' }}
                    >
                      Business Situation
                    </th>
                    <th
                      className="text-left p-4 font-plus-jakarta font-semibold"
                      style={{ color: '#9CA3AF' }}
                    >
                      Traditional Priority
                    </th>
                    <th
                      className="text-left p-4 font-plus-jakarta font-semibold"
                      style={{ color: '#F27D24' }}
                    >
                      AI Visibility Priority
                    </th>
                    <th
                      className="text-left p-4 font-plus-jakarta font-semibold"
                      style={{ color: '#9CA3AF' }}
                    >
                      Recommended Mix
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      situation: 'Local service (plumber, HVAC, law)',
                      traditional: 'Low to medium',
                      ai: 'Critical: start now',
                      mix: '20% traditional, 50% AI, 30% Google',
                    },
                    {
                      situation: 'Retail with physical location',
                      traditional: 'Medium: OOH, local radio',
                      ai: 'High: voice + local AI queries',
                      mix: '35% traditional, 40% AI, 25% social',
                    },
                    {
                      situation: 'Professional services (B2B)',
                      traditional: 'Low unless event sponsorship',
                      ai: 'Very high: research-mode queries',
                      mix: '15% traditional, 55% AI, 30% LinkedIn',
                    },
                    {
                      situation: 'Restaurant / hospitality',
                      traditional: 'Medium: local print, OOH',
                      ai: 'High: "best X near me" queries',
                      mix: '30% traditional, 45% AI, 25% reviews',
                    },
                    {
                      situation: 'Healthcare / dental',
                      traditional: 'Medium: community trust',
                      ai: 'Critical: symptom and provider queries',
                      mix: '25% traditional, 50% AI, 25% Google',
                    },
                    {
                      situation: 'E-commerce (national)',
                      traditional: 'Low: small efficiency',
                      ai: 'High: product comparison queries',
                      mix: '10% traditional, 40% AI, 50% paid/SEO',
                    },
                  ].map((row, i) => (
                    <tr
                      key={i}
                      style={{
                        borderBottom: '1px solid rgba(255,255,255,0.05)',
                        backgroundColor: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.01)',
                      }}
                    >
                      <td className="p-4 text-white font-medium">{row.situation}</td>
                      <td className="p-4 text-gray-400">{row.traditional}</td>
                      <td className="p-4 font-medium" style={{ color: '#F27D24' }}>{row.ai}</td>
                      <td className="p-4 text-gray-400">{row.mix}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div
              className="ae-callout-info rounded-xl p-6 mb-8"
              style={{
                backgroundColor: 'rgba(59, 130, 246, 0.08)',
                border: '1px solid rgba(59, 130, 246, 0.25)',
              }}
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl mt-0.5">📊</span>
                <div>
                  <h3
                    className="font-plus-jakarta font-bold text-lg mb-2"
                    style={{ color: '#60A5FA' }}
                  >
                    Budget Shift Intelligence from McKinsey
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    McKinsey's analysis projects AI systems will grow to represent 40% of
                    marketing spend within the coming years, while human-led creative and
                    traditional channel budgets shrink from 40% to 25%. More immediately:
                    across all company sizes, AI already represents 9% of total marketing
                    budgets in 2026, up from 7% in 2024. Early movers who established AI
                    visibility at lower competitive cost are pulling ahead of late movers who
                    will pay more to catch up.
                  </p>
                </div>
              </div>
            </div>

            {/* Inline CTA 6 */}
            <div
              className="ae-cta-inline rounded-lg p-4 flex flex-col sm:flex-row items-start sm:items-center gap-4"
              style={{
                backgroundColor: 'rgba(255, 106, 0, 0.08)',
                border: '1px solid rgba(255, 106, 0, 0.25)',
              }}
            >
              <div className="flex-1">
                <p className="text-sm text-gray-300">
                  <span style={{ color: '#F27D24' }} className="font-semibold">
                    Not sure which row describes your business?
                  </span>{' '}
                  We'll map it out in a free consultation.
                </p>
              </div>
              <a
                href="mailto:support@theanswerengine.ai"
                style={{
                  backgroundColor: '#F27D24',
                  color: '#FFFFFF',
                }}
                className="text-sm font-semibold px-4 py-2 rounded-lg whitespace-nowrap hover:opacity-90 transition-opacity"
              >
                Email Us
              </a>
            </div>
          </section>

          {/* ── WHAT AI VISIBILITY ACTUALLY INVOLVES ──────────────── */}
          <section className="mb-16">
            <h2
              className="font-plus-jakarta text-3xl font-bold mb-6"
              style={{ color: '#FFFFFF' }}
            >
              What AI Visibility Actually Involves (Without the Fluff)
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              The answer to "how do I get my business to appear in AI search results" is not a
              single action. It is a compounding set of signals that collectively give AI
              platforms confidence in your business's legitimacy, authority, and relevance to
              specific queries. The mechanisms are knowable, but they require systematic
              execution across multiple fronts simultaneously.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              The important distinction between AI visibility and traditional SEO is the unit of
              optimization. SEO optimizes pages for keywords. AI visibility optimizes a business
              entity for topics. AI platforms do not think in keywords. They think in entities,
              authorities, and confidence levels. The work is different in kind, not just degree.
            </p>

            {/* Feature grid */}
            <div className="grid md:grid-cols-2 gap-5 mb-10">
              {[
                {
                  icon: '🏛️',
                  title: 'Entity Establishment',
                  desc: 'AI platforms need to understand what your business is, where it operates, and what it does before they can recommend it. Inconsistent name, address, or phone data across the web creates uncertainty. Certainty earns citations.',
                },
                {
                  icon: '📝',
                  title: 'Answer-Formatted Content',
                  desc: 'Content that directly answers the questions AI users ask, written in clear declarative language, earns 30 to 40% higher visibility in AI responses than content optimized for keyword density.',
                },
                {
                  icon: '⭐',
                  title: 'Review Signal Quality',
                  desc: 'Not just the star rating. The specificity, volume, recency, and topical relevance of reviews determines how much an AI platform trusts your business for a given category of query.',
                },
                {
                  icon: '🔗',
                  title: 'Third-Party Authority',
                  desc: 'Being mentioned in context by publications, industry sites, local news, and reputable directories is how AI platforms verify that your business is real and respected. Listing data alone is not enough.',
                },
                {
                  icon: '🗂️',
                  title: 'Structured Data Clarity',
                  desc: 'Schema markup, FAQ pages, and clearly labeled service information give AI parsers a machine-readable map of your business. Pages without it force AI to guess, and AI recommends what it knows.',
                },
                {
                  icon: '🔄',
                  title: 'Content Freshness',
                  desc: 'Pages updated within the last 60 days earn 28% more AI citations than stale pages. AI platforms weight recency as a proxy for relevance, especially in local service categories.',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-xl p-5 flex gap-4"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  <span className="text-2xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <h3
                      className="font-plus-jakarta font-bold text-sm mb-2"
                      style={{ color: '#FFFFFF' }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Inline CTA 7 */}
            <div
              className="ae-cta-inline rounded-lg p-4 flex flex-col sm:flex-row items-start sm:items-center gap-4"
              style={{
                backgroundColor: 'rgba(255, 106, 0, 0.08)',
                border: '1px solid rgba(255, 106, 0, 0.25)',
              }}
            >
              <div className="flex-1">
                <p className="text-sm text-gray-300">
                  <span style={{ color: '#F27D24' }} className="font-semibold">
                    We handle all six of these signal categories.
                  </span>{' '}
                  See which ones your business is missing.
                </p>
              </div>
              <a
                href="/blindspot"
                style={{
                  backgroundColor: '#F27D24',
                  color: '#FFFFFF',
                }}
                className="text-sm font-semibold px-4 py-2 rounded-lg whitespace-nowrap hover:opacity-90 transition-opacity"
              >
                Free Gap Analysis
              </a>
            </div>
          </section>

          {/* ── THE REINFORCEMENT EFFECT ───────────────────────────── */}
          <section className="mb-16">
            <h2
              className="font-plus-jakarta text-3xl font-bold mb-6"
              style={{ color: '#FFFFFF' }}
            >
              The Reinforcement Effect: When Both Work Together
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              The most effective marketing strategy in 2026 is not "replace traditional with AI."
              It is "close the loop." Traditional marketing plants the seed. AI visibility
              confirms the recommendation at the moment of intent. The customer who heard your
              radio spot and then asks Alexa "what's that plumber I heard about" gets either
              your business confirmed or your competitor recommended instead.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              Businesses running traditional advertising that also have strong AI visibility see
              compounding effects. The traditional ad creates recall. The AI recommendation
              converts that recall into action. The customer who was going to search anyway
              encounters your name from two directions, which accelerates trust and decision speed.
            </p>

            <div
              className="rounded-xl p-6 mb-8"
              style={{
                backgroundColor: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <h3
                className="font-plus-jakarta font-bold text-lg mb-5"
                style={{ color: '#FFFFFF' }}
              >
                The Customer Journey in 2026: A Realistic Example
              </h3>
              <div className="space-y-4">
                {[
                  {
                    step: '1',
                    label: 'Awareness',
                    action: 'Customer hears a radio ad for a local HVAC company during morning drive.',
                    channel: 'Traditional',
                  },
                  {
                    step: '2',
                    label: 'Trigger Event',
                    action: 'Three weeks later, the AC breaks down. Customer needs a technician today.',
                    channel: 'Life Event',
                  },
                  {
                    step: '3',
                    label: 'AI Query',
                    action: `Customer says "Hey, who's the best AC repair near me?" to their AI assistant.`,
                    channel: 'AI Search',
                  },
                  {
                    step: '4',
                    label: 'AI Decision',
                    action: 'AI either names the company the customer heard on the radio, or names a competitor that invested in AI visibility.',
                    channel: 'AI Recommendation',
                  },
                  {
                    step: '5',
                    label: 'Conversion',
                    action: 'Customer calls or texts the business the AI recommended. The radio investment either pays off or wasted.',
                    channel: 'Revenue',
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                      style={{
                        backgroundColor: i === 3 ? 'rgba(255,106,0,0.2)' : 'rgba(255,255,255,0.05)',
                        border: i === 3 ? '1px solid #F27D24' : '1px solid rgba(255,255,255,0.1)',
                        color: i === 3 ? '#F27D24' : '#9CA3AF',
                      }}
                    >
                      {item.step}
                    </div>
                    <div>
                      <span
                        className="text-xs font-semibold uppercase tracking-widest"
                        style={{ color: i === 3 ? '#F27D24' : '#6B7280' }}
                      >
                        {item.label}
                      </span>
                      <p className="text-sm text-gray-300 mt-0.5">{item.action}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Inline CTA 8 */}
            <div
              className="ae-cta-inline rounded-lg p-4 flex flex-col sm:flex-row items-start sm:items-center gap-4"
              style={{
                backgroundColor: 'rgba(255, 106, 0, 0.08)',
                border: '1px solid rgba(255, 106, 0, 0.25)',
              }}
            >
              <div className="flex-1">
                <p className="text-sm text-gray-300">
                  <span style={{ color: '#F27D24' }} className="font-semibold">
                    Step 4 in the example above is where most businesses lose.
                  </span>{' '}
                  We can make sure it works for you.
                </p>
              </div>
              <a
                href="tel:+12134442229"
                style={{ color: '#F27D24' }}
                className="text-sm font-semibold whitespace-nowrap hover:underline"
              >
                Call (213) 444-2229
              </a>
            </div>
          </section>

          {/* ── CHEAT SHEET ────────────────────────────────────────── */}
          <section id="cheat-sheet" className="mb-16">
            <div
              className="ae-cheat-sheet rounded-xl p-8"
              style={{
                background: 'linear-gradient(135deg, rgba(255,106,0,0.12) 0%, rgba(255,106,0,0.04) 100%)',
                border: '1px solid rgba(255,106,0,0.3)',
              }}
            >
              <h2
                className="font-plus-jakarta text-2xl font-bold mb-2"
                style={{ color: '#F27D24' }}
              >
                2026 Marketing Channel Cheat Sheet
              </h2>
              <p className="text-sm text-gray-400 mb-8">
                Quick reference for budget allocation decisions.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3
                    className="font-plus-jakarta font-bold text-sm uppercase tracking-widest mb-4"
                    style={{ color: '#9CA3AF' }}
                  >
                    Traditional Marketing
                  </h3>
                  <div className="space-y-3">
                    {[
                      { channel: 'Linear TV', verdict: 'Reduce', note: 'Down 11%+ in 2026; streaming better ROI' },
                      { channel: 'Print (newspaper / mag)', verdict: 'Reduce', note: 'Digital overtook print spend in 2025' },
                      { channel: 'Radio', verdict: 'Selective', note: 'Strong local reach, flat ROI trend' },
                      { channel: 'Direct Mail', verdict: 'Retain', note: '161% ROI for warm audiences' },
                      { channel: 'Billboards / Digital OOH', verdict: 'Retain', note: 'Digital OOH +14.5%; local presence value' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <span
                          className="text-xs font-bold px-2 py-0.5 rounded flex-shrink-0"
                          style={{
                            backgroundColor:
                              item.verdict === 'Reduce'
                                ? 'rgba(239,68,68,0.15)'
                                : item.verdict === 'Selective'
                                ? 'rgba(234,179,8,0.15)'
                                : 'rgba(34,197,94,0.15)',
                            color:
                              item.verdict === 'Reduce'
                                ? '#EF4444'
                                : item.verdict === 'Selective'
                                ? '#EAB308'
                                : '#22C55E',
                          }}
                        >
                          {item.verdict}
                        </span>
                        <div>
                          <span className="text-sm text-white font-medium">{item.channel}: </span>
                          <span className="text-xs text-gray-400">{item.note}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3
                    className="font-plus-jakarta font-bold text-sm uppercase tracking-widest mb-4"
                    style={{ color: '#F27D24' }}
                  >
                    AI and Digital Channels
                  </h3>
                  <div className="space-y-3">
                    {[
                      { channel: 'AI Visibility (AEO)', verdict: 'Invest Now', note: '4.4x conversion, early mover advantage' },
                      { channel: 'Google AI Mode', verdict: 'Invest Now', note: '1.5B monthly users; critical local queries' },
                      { channel: 'Traditional SEO', verdict: 'Maintain', note: 'Still valuable, but declining click share' },
                      { channel: 'Paid Search (PPC)', verdict: 'Selective', note: 'AI Overviews reduce organic CTR; gap fills' },
                      { channel: 'Social Media Organic', verdict: 'Maintain', note: 'Feeds AI context signals, reputation' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <span
                          className="text-xs font-bold px-2 py-0.5 rounded flex-shrink-0"
                          style={{
                            backgroundColor:
                              item.verdict === 'Invest Now'
                                ? 'rgba(255,106,0,0.2)'
                                : item.verdict === 'Maintain'
                                ? 'rgba(34,197,94,0.15)'
                                : 'rgba(234,179,8,0.15)',
                            color:
                              item.verdict === 'Invest Now'
                                ? '#F27D24'
                                : item.verdict === 'Maintain'
                                ? '#22C55E'
                                : '#EAB308',
                          }}
                        >
                          {item.verdict}
                        </span>
                        <div>
                          <span className="text-sm text-white font-medium">{item.channel}: </span>
                          <span className="text-xs text-gray-400">{item.note}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div
                className="mt-8 pt-6"
                style={{ borderTop: '1px solid rgba(255,106,0,0.2)' }}
              >
                <p className="text-sm text-gray-400 mb-4">
                  Not sure how to apply this cheat sheet to your specific budget? Start with an
                  AI Blind Spot Audit. It tells you exactly where your business stands in AI
                  search before any investment decision.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="/blindspot"
                    style={{
                      backgroundColor: '#F27D24',
                      color: '#FFFFFF',
                    }}
                    className="text-sm font-bold px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity"
                  >
                    Get AI Blind Spot Audit
                  </a>
                  <a
                    href="tel:+12134442229"
                    style={{
                      border: '1px solid rgba(255,106,0,0.4)',
                      color: '#F27D24',
                    }}
                    className="text-sm font-bold px-5 py-2.5 rounded-lg hover:opacity-80 transition-opacity"
                  >
                    Call (213) 444-2229
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* ── 3-TIER CTA BLOCK ───────────────────────────────────── */}
          <section className="mb-16">
            <div
              className="ae-cta-block rounded-2xl p-8 md:p-10 text-center"
              style={{
                background: 'linear-gradient(135deg, #1a1025 0%, #0F1117 100%)',
                border: '1px solid rgba(255,106,0,0.2)',
              }}
            >
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ color: '#F27D24' }}
              >
                Free for Business Owners
              </p>
              <h2
                className="font-plus-jakarta text-3xl md:text-4xl font-extrabold mb-4"
                style={{ color: '#FFFFFF' }}
              >
                Find Your AI Blind Spots
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
                Before deciding how to balance your traditional and AI marketing budgets, you
                need to know what AI platforms currently say about your business. Our free audit
                checks ChatGPT, Perplexity, Google AI Mode, Gemini, and more. No obligation.
                Just the truth about where you stand.
              </p>

              {/* Tier 1: Primary CTA button */}
              <div className="mb-6">
                <a
                  href="/blindspot"
                  style={{
                    background: 'linear-gradient(90deg, #F27D24, #FF8C00)',
                    color: '#FFFFFF',
                    boxShadow: '0 0 30px rgba(255,106,0,0.4)',
                  }}
                  className="inline-block text-base font-bold px-8 py-4 rounded-xl hover:opacity-90 transition-opacity"
                >
                  Claim Your Free AI Blind Spot Audit
                </a>
              </div>

              {/* Tier 2: Phone */}
              <div className="mb-4">
                <p className="text-gray-500 text-sm mb-2">Prefer to talk? Call now:</p>
                <a
                  href="tel:+12134442229"
                  className="font-plus-jakarta text-2xl font-bold hover:opacity-80 transition-opacity"
                  style={{ color: '#F27D24' }}
                >
                  (213) 444-2229
                </a>
              </div>

              {/* Tier 3: Email */}
              <div>
                <p className="text-gray-500 text-sm mb-1">Or send us a message:</p>
                <a
                  href="mailto:support@theanswerengine.ai"
                  className="text-gray-400 text-sm hover:text-orange-400 transition-colors"
                >
                  support@theanswerengine.ai
                </a>
              </div>
            </div>
          </section>

          {/* ── FAQ ────────────────────────────────────────────────── */}
          <section id="faq" className="mb-16">
            <h2
              className="font-plus-jakarta text-3xl font-bold mb-8"
              style={{ color: '#FFFFFF' }}
            >
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {[
                {
                  q: 'Is traditional marketing still effective in 2026?',
                  a: 'Traditional marketing channels like billboards, direct mail, and radio still generate awareness and some ROI. However, linear TV ad spend is down more than 11% in 2026 and print continues its long decline. The critical shift is that consumers increasingly ask AI platforms for recommendations before they ever see a traditional ad, which means businesses invisible to AI miss the customer before any ad runs.',
                },
                {
                  q: 'What percentage of consumers now start searches with AI tools?',
                  a: '37% of consumers now start their searches with AI tools instead of Google or Bing, according to 2026 research. Among US adults under 30, approximately 58% have used ChatGPT. AI platforms collectively reach over 1.5 billion monthly users through Google AI Overviews alone, and that number continues to climb.',
                },
                {
                  q: 'How does AI search visibility differ from traditional SEO?',
                  a: 'Traditional SEO targets keyword rankings in Google search results, where users choose from a list of links. AI search visibility is about being the business that AI platforms cite and recommend when a user asks a conversational question. AI delivers one answer, not ten links. If you are not in that answer, you do not exist to that customer at that moment.',
                },
                {
                  q: 'Do AI search visitors convert better than traditional search visitors?',
                  a: 'Yes. Current data shows AI-driven visitors convert approximately 4.4x higher than standard organic search visitors, and they spend 68% more time on websites before deciding. This higher quality reflects the fact that AI recommendations arrive after the AI has already determined your business matches the user\'s specific need.',
                },
                {
                  q: 'What will happen if I only invest in traditional marketing in 2026?',
                  a: 'Gartner projects traditional search engine volume will decline 25% by 2026, and that trend accelerates beyond that. Businesses investing exclusively in traditional marketing channels lose ground to competitors that also appear in AI search responses. The gap compounds over time: each month, more customers use AI to find services, and if competitors appear there while you do not, those customers are gone.',
                },
                {
                  q: 'How much should a business shift budget toward AI visibility?',
                  a: 'McKinsey analysis suggests AI systems will grow to 40% of marketing spend within the next few years. However, the right allocation depends on your industry, customer demographics, and current visibility gaps. A blind spot audit revealing where AI platforms currently stand on your business is the right starting point before setting any specific budget number.',
                },
                {
                  q: 'Can a business do both traditional marketing and AI visibility?',
                  a: 'Absolutely, and for most businesses that is the right strategy. Traditional marketing builds brand awareness at the top of the funnel. AI visibility captures high-intent customers at the exact moment they are ready to hire or buy. The two reinforce each other: a customer who sees your billboard and then asks an AI assistant about your service category should find your name confirmed by the AI.',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-xl p-6"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  <h3
                    className="font-plus-jakarta font-bold text-base mb-3"
                    style={{ color: '#FFFFFF' }}
                  >
                    {item.q}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>

            {/* Inline CTA 9 */}
            <div
              className="ae-cta-inline rounded-lg p-4 mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4"
              style={{
                backgroundColor: 'rgba(255, 106, 0, 0.08)',
                border: '1px solid rgba(255, 106, 0, 0.25)',
              }}
            >
              <div className="flex-1">
                <p className="text-sm text-gray-300">
                  <span style={{ color: '#F27D24' }} className="font-semibold">
                    Have a question not answered above?
                  </span>{' '}
                  Our team responds within one business day.
                </p>
              </div>
              <a
                href="mailto:support@theanswerengine.ai"
                style={{ color: '#F27D24' }}
                className="text-sm font-semibold whitespace-nowrap hover:underline"
              >
                Ask Us Directly
              </a>
            </div>
          </section>

          {/* ── AUTHOR CARD ────────────────────────────────────────── */}
          <section className="mb-16">
            <div
              className="ae-author-card rounded-xl p-6 flex flex-col sm:flex-row gap-5 items-start"
              style={{
                backgroundColor: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0"
                style={{ backgroundColor: '#F27D24' }}
                aria-hidden="true"
              >
                AE
              </div>
              <div>
                <div
                  className="font-plus-jakarta font-bold text-base mb-1"
                  style={{ color: '#FFFFFF' }}
                >
                  Justin Borges
                </div>
                <div className="text-xs text-gray-500 mb-3">
                  Published March 29, 2026 · Competitive Intelligence
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  The Answer Engine is a Los Angeles-based AI visibility agency helping local and
                  national businesses appear in ChatGPT, Perplexity, Google AI Mode, and every
                  major AI platform. We audit, optimize, and monitor AI visibility so businesses
                  capture the growing share of customers who search with AI first.
                </p>
                <div className="flex flex-wrap gap-4 mt-4">
                  <a
                    href="tel:+12134442229"
                    style={{ color: '#F27D24' }}
                    className="text-sm font-semibold hover:underline"
                  >
                    (213) 444-2229
                  </a>
                  <a
                    href="mailto:support@theanswerengine.ai"
                    style={{ color: '#F27D24' }}
                    className="text-sm font-semibold hover:underline"
                  >
                    support@theanswerengine.ai
                  </a>
                  <a
                    href="https://theanswerengine.ai"
                    style={{ color: '#F27D24' }}
                    className="text-sm font-semibold hover:underline"
                  >
                    theanswerengine.ai
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* ── FINAL CTA ──────────────────────────────────────────── */}
          <section className="mb-8">
            <div
              className="ae-final-cta rounded-2xl p-10 text-center relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(255,106,0,0.15) 0%, rgba(255,60,0,0.08) 100%)',
                border: '2px solid rgba(255,106,0,0.4)',
                boxShadow: '0 0 60px rgba(255,106,0,0.15)',
              }}
            >
              {/* Pulse ring effect */}
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: 'inherit',
                  border: '2px solid rgba(255,106,0,0.2)',
                  animation: 'pulse 2s infinite',
                }}
              />

              <div
                className="text-5xl mb-4"
                aria-hidden="true"
              >
                🎯
              </div>
              <h2
                className="font-plus-jakarta text-3xl md:text-4xl font-extrabold mb-4"
                style={{ color: '#FFFFFF' }}
              >
                Your Competitors Are Already There
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
                Right now, customers in your city are asking AI assistants for the exact service
                you provide. Some of your competitors appear in those answers. If your business
                does not, you are funding their growth with every traditional ad you run. Find out
                where you stand today with a free AI Blind Spot Audit, no obligation, no guesswork.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <a
                  href="/blindspot"
                  style={{
                    background: 'linear-gradient(90deg, #F27D24, #FF8C00)',
                    color: '#FFFFFF',
                    boxShadow: '0 0 40px rgba(255,106,0,0.5)',
                  }}
                  className="inline-block text-base font-extrabold px-8 py-4 rounded-xl hover:opacity-90 transition-all"
                >
                  Get Your Free AI Blind Spot Audit
                </a>
                <a
                  href="tel:+12134442229"
                  style={{
                    border: '2px solid rgba(255,106,0,0.5)',
                    color: '#F27D24',
                  }}
                  className="inline-block text-base font-bold px-8 py-4 rounded-xl hover:border-orange-400 transition-colors"
                >
                  Call (213) 444-2229
                </a>
              </div>

              <p className="text-xs text-gray-600">
                Free. No credit card. No commitment. Just the facts about your AI visibility.
              </p>
            </div>
          </section>

          {/* ── RELATED ARTICLES ───────────────────────────────────── */}
          <section className="mb-8">
            <h2
              className="font-plus-jakarta text-xl font-bold mb-6"
              style={{ color: '#FFFFFF' }}
            >
              Continue Reading
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                {
                  href: '/blog/hidden-cost-ignoring-ai-search',
                  title: 'The Hidden Cost of Ignoring AI Search',
                  desc: 'What it actually costs your business every month you are invisible to AI platforms.',
                },
                {
                  href: '/blog/seo-agency-vs-ai-optimization-which-one',
                  title: 'SEO Agency vs AI Optimization',
                  desc: 'Different goals, different methods, different results. Which does your business need?',
                },
                {
                  href: '/blog/ai-search-vs-google-maps-which-one-sends-more-customers',
                  title: 'AI Search vs Google Maps',
                  desc: 'The data on which platform actually drives more customers to local businesses in 2026.',
                },
              ].map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  className="block rounded-xl p-5 hover:border-orange-400 transition-colors"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    textDecoration: 'none',
                  }}
                >
                  <h3
                    className="font-plus-jakarta font-bold text-sm mb-2 hover:text-orange-400 transition-colors"
                    style={{ color: '#FFFFFF' }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
