import type { Metadata } from 'next'
import Link from 'next/link'

export const revalidate = 86400
export const dynamic = 'force-static'
export const dynamicParams = true

export const metadata: Metadata = {
  title: "I Spent Thousands on SEO and AI Still Can't Find Me | The Answer Engine",
  description:
    '71% of businesses are invisible to AI search despite heavy SEO spend. Learn why Google rankings no longer equal AI citations and what the gap means for your revenue.',
  keywords: [
    'SEO invisible to AI',
    'AI search visibility',
    'ChatGPT not finding my business',
    'SEO not working anymore',
    'AI search optimization',
    'Answer Engine Optimization',
    'AEO vs SEO',
    'Perplexity visibility',
    'Google ranking vs AI citation',
    'business invisible to AI',
    'SEO waste of money AI era',
    'AI search marketing 2026',
  ],
  authors: [{ name: 'The Answer Engine Team' }],
  openGraph: {
    title: "I Spent Thousands on SEO and AI Still Can't Find Me",
    description:
      '71% of businesses are invisible to AI search despite heavy SEO spend. Learn why Google rankings no longer equal AI citations.',
    url: 'https://theanswerengine.ai/blog/i-spent-thousands-on-seo-and-ai-still-cant-find-me',
    siteName: 'The Answer Engine',
    type: 'article',
    publishedTime: '2026-03-29T00:00:00Z',
    authors: ['The Answer Engine Team'],
    images: [
      {
        url: 'https://theanswerengine.ai/blog/i-spent-thousands-on-seo-and-ai-still-cant-find-me.webp',
        width: 1200,
        height: 630,
        alt: "I Spent Thousands on SEO and AI Still Can't Find Me",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "I Spent Thousands on SEO and AI Still Can't Find Me",
    description:
      '71% of businesses are invisible to AI search despite heavy SEO spend. Find out why and what to do about it.',
    images: [
      'https://theanswerengine.ai/blog/i-spent-thousands-on-seo-and-ai-still-cant-find-me.webp',
    ],
    site: '@theanswerengine',
  },
  alternates: {
    canonical:
      'https://theanswerengine.ai/blog/i-spent-thousands-on-seo-and-ai-still-cant-find-me',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      '@id':
        'https://theanswerengine.ai/blog/i-spent-thousands-on-seo-and-ai-still-cant-find-me#article',
      headline: "I Spent Thousands on SEO and AI Still Can't Find Me",
      description:
        '71% of businesses are invisible to AI search despite heavy SEO spend. Learn why Google rankings no longer equal AI citations and what the gap means for your revenue.',
      image: {
        '@type': 'ImageObject',
        url: 'https://theanswerengine.ai/blog/i-spent-thousands-on-seo-and-ai-still-cant-find-me.webp',
        width: 1200,
        height: 630,
      },
      author: {
        '@type': 'Organization',
        name: 'The Answer Engine',
        url: 'https://theanswerengine.ai',
      },
      publisher: {
        '@type': 'Organization',
        name: 'The Answer Engine',
        logo: {
          '@type': 'ImageObject',
          url: 'https://theanswerengine.ai/TheAnswerEngine_Color_just_logo.png',
        },
      },
      datePublished: '2026-03-29T00:00:00Z',
      dateModified: '2026-03-29T00:00:00Z',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id':
          'https://theanswerengine.ai/blog/i-spent-thousands-on-seo-and-ai-still-cant-find-me',
      },
      keywords:
        'SEO invisible to AI, AI search visibility, ChatGPT not finding my business, Answer Engine Optimization, AEO vs SEO',
      articleSection: 'Business Pain Points',
      wordCount: 2800,
      inLanguage: 'en-US',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: "Why can't AI find my business even though I rank on Google?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Google rankings and AI citations are governed by completely different signals. Google rewards backlinks, keyword density, and domain authority. AI platforms like ChatGPT and Perplexity reward structured factual content, clear entity definitions, authoritative citations, and conversational clarity. A page that ranks #1 on Google can be entirely absent from AI responses because it was never built to be machine-readable or citation-worthy.",
          },
        },
        {
          '@type': 'Question',
          name: 'How much do businesses typically spend on SEO?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Small businesses typically spend between $1,500 and $5,000 per month on SEO services, which adds up to $18,000 to $60,000 per year. Competitive industries often push that figure higher. Despite this investment, 71% of businesses remain completely invisible to AI search platforms like ChatGPT and Perplexity, meaning a large share of that budget delivers no protection against the AI search shift.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does traditional SEO help with AI search visibility?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Partially. Technical SEO basics like fast load times, clean HTML, and proper indexing help AI crawlers access your content. But the signals that drive Google rankings, such as backlink counts, keyword repetition, and meta tags, have little to no impact on whether an AI platform cites your business. AI favors depth, clarity, structured answers, and third-party corroboration, not raw link equity.',
          },
        },
        {
          '@type': 'Question',
          name: 'What percentage of searches end without a click now?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Approximately 60% of Google searches now end without a click because AI Overviews answer the question directly on the results page. This means the buyer never reaches your website even if you rank well. For businesses that depend on organic traffic to generate leads, this zero-click shift is quietly draining ROI from SEO investments.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is Answer Engine Optimization and how is it different from SEO?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Answer Engine Optimization (AEO) is the practice of structuring your business's content, data, and online presence so that AI platforms cite you as a trusted source when buyers ask questions. Unlike SEO, which targets keyword rankings in Google, AEO targets citations in ChatGPT, Perplexity, Google AI Overviews, and other AI-powered search surfaces. The goal is to become the business AI recommends, not just the business Google lists.",
          },
        },
        {
          '@type': 'Question',
          name: 'How fast is AI search traffic growing compared to organic search?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'AI-driven search visibility is growing 165 times faster than traditional organic search. Web traffic from AI referrals increased more than tenfold in the United States between July 2024 and February 2025 alone. By mid-2025, AI platforms like ChatGPT and Perplexity accounted for over 5.6% of U.S. desktop search traffic, more than double their share from a year earlier.',
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
          name: "I Spent Thousands on SEO and AI Still Can't Find Me",
          item: 'https://theanswerengine.ai/blog/i-spent-thousands-on-seo-and-ai-still-cant-find-me',
        },
      ],
    },
  ],
}

export default function ISpentThousandsOnSEOPage() {
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
        {/* HERO */}
        <section
          style={{
            background:
              'linear-gradient(135deg, #0F1117 0%, #1a0a00 50%, #0F1117 100%)',
            position: 'relative',
            overflow: 'hidden',
          }}
          className="py-20 px-6"
        >
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
                id="hero-grid-95"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="#FF6A00"
                  strokeWidth="0.8"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-grid-95)" />
          </svg>

          <div style={{ position: 'relative', zIndex: 1 }} className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav className="mb-6 flex items-center gap-2 text-sm" style={{ color: '#9CA3AF' }}>
              <Link href="/" style={{ color: '#9CA3AF' }} className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" style={{ color: '#9CA3AF' }} className="hover:text-white transition-colors">Blog</Link>
              <span>/</span>
              <span style={{ color: '#FF6A00' }}>Business Pain Points</span>
            </nav>

            {/* Category badge */}
            <div className="mb-4">
              <span
                className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full"
                style={{ backgroundColor: 'rgba(255,106,0,0.15)', color: '#FF6A00', border: '1px solid rgba(255,106,0,0.3)' }}
              >
                Business Pain Points
              </span>
            </div>

            <h1
              className="font-plus-jakarta text-3xl md:text-5xl font-extrabold leading-tight mb-6"
              style={{ color: '#FFFFFF' }}
            >
              I Spent Thousands on SEO and{' '}
              <span style={{ color: '#FF6A00' }}>AI Still Can&apos;t Find Me</span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed mb-8" style={{ color: '#D1D5DB', maxWidth: '720px' }}>
              Your Google rankings look fine. Your agency sends monthly reports full of green arrows. But when a potential customer asks ChatGPT, Perplexity, or Google&apos;s AI Overview to recommend a business like yours, your name never comes up. You&apos;re not alone, and you&apos;re not imagining it.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-sm" style={{ color: '#6B7280' }}>
              <span>By The Answer Engine Team</span>
              <span>|</span>
              <time dateTime="2026-03-29">March 29, 2026</time>
              <span>|</span>
              <span>12 min read</span>
            </div>

            {/* Hero CTA */}
            <div className="mt-8">
              <a
                href="https://theanswerengine.ai/#audit"
                className="ae-cta-inline inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-lg transition-all"
                style={{ backgroundColor: '#FF6A00', color: '#FFFFFF' }}
              >
                Find Your AI Blind Spots Free
                <span aria-hidden="true">&#8594;</span>
              </a>
            </div>
          </div>
        </section>

        {/* STATS GRID */}
        <section className="max-w-4xl mx-auto px-6 py-12">
          <div className="ae-stats-grid grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                stat: '71%',
                label: 'of businesses are invisible to AI search platforms',
                source: 'HackerNoon, 2025',
              },
              {
                stat: '165x',
                label: 'faster growth in AI search vs. traditional organic',
                source: 'SEO Clarity, 2025',
              },
              {
                stat: '60%',
                label: 'of searches now end with zero clicks due to AI answers',
                source: 'SEMrush, 2025',
              },
              {
                stat: '$2,500',
                label: 'average monthly SEO spend for small businesses',
                source: 'WebFX, 2024',
              },
            ].map((item) => (
              <div
                key={item.stat}
                className="ae-stat-card rounded-xl p-5 text-center"
                style={{
                  backgroundColor: 'rgba(255,106,0,0.07)',
                  border: '1px solid rgba(255,106,0,0.25)',
                }}
              >
                <div
                  className="text-3xl md:text-4xl font-extrabold font-plus-jakarta mb-2"
                  style={{ color: '#FF6A00' }}
                >
                  {item.stat}
                </div>
                <div className="text-sm leading-snug mb-2" style={{ color: '#D1D5DB' }}>
                  {item.label}
                </div>
                <div className="text-xs" style={{ color: '#6B7280' }}>
                  {item.source}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TABLE OF CONTENTS */}
        <section className="max-w-4xl mx-auto px-6 pb-10">
          <nav
            className="ae-toc rounded-xl p-6"
            style={{
              backgroundColor: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.1)',
            }}
            aria-label="Table of contents"
          >
            <h2
              className="font-plus-jakarta text-base font-bold mb-4 uppercase tracking-wider"
              style={{ color: '#FF6A00' }}
            >
              In This Article
            </h2>
            <ol className="space-y-2 text-sm" style={{ color: '#9CA3AF' }}>
              {[
                ['#the-problem', 'The SEO Paradox Nobody Warns You About'],
                ['#why-rankings-dont-translate', 'Why Google Rankings Do Not Equal AI Citations'],
                ['#how-ai-picks-sources', 'How AI Platforms Actually Choose Who to Mention'],
                ['#comparison', 'Traditional SEO vs. AI Visibility: Side by Side'],
                ['#real-cost', 'The Real Cost of Being AI-Invisible'],
                ['#warning-signs', 'Warning Signs Your Business Has an AI Blind Spot'],
                ['#what-matters', 'What Actually Moves the Needle for AI Visibility'],
                ['#pros-cons', 'SEO-Only Strategy: Pros and Cons in the AI Era'],
                ['#decision-matrix', 'Decision Matrix: Should You Pivot Your Strategy?'],
                ['#cheat-sheet', 'AI Visibility Audit Cheat Sheet'],
                ['#faq', 'Frequently Asked Questions'],
              ].map(([href, label]) => (
                <li key={href}>
                  <a
                    href={href}
                    style={{ color: '#9CA3AF' }}
                    className="hover:text-white transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </section>

        {/* MAIN CONTENT */}
        <article className="max-w-4xl mx-auto px-6">

          {/* SECTION 1 */}
          <section id="the-problem" className="mb-14">
            <h2
              className="font-plus-jakarta text-2xl md:text-3xl font-bold mb-5"
              style={{ color: '#FFFFFF' }}
            >
              The SEO Paradox Nobody Warns You About
            </h2>
            <p className="mb-4 leading-relaxed" style={{ color: '#D1D5DB' }}>
              Imagine paying your SEO agency every month for two years. Keyword rankings climb. Your domain authority rises. The monthly PDF reports show green arrows everywhere. On paper, things look healthy.
            </p>
            <p className="mb-4 leading-relaxed" style={{ color: '#D1D5DB' }}>
              Then a friend asks ChatGPT to recommend the best HVAC company in Dallas. Or a potential client types &quot;who does the best tax planning for real estate investors in Phoenix&quot; into Perplexity. Or a buyer asks Google for a recommendation and sees an AI Overview at the top of the page.
            </p>
            <p className="mb-4 leading-relaxed" style={{ color: '#D1D5DB' }}>
              Your name is nowhere. Three competitors are cited with full explanations. One of them has a website that looks like it was built in 2019, but AI knows exactly what they do, who they serve, and why they&apos;re trustworthy.
            </p>

            <div
              className="ae-callout-warning rounded-xl p-6 my-8"
              style={{
                backgroundColor: 'rgba(234,179,8,0.08)',
                border: '1px solid rgba(234,179,8,0.3)',
              }}
            >
              <div className="flex items-start gap-3">
                <span style={{ fontSize: '1.5rem' }} aria-hidden="true">&#9888;</span>
                <div>
                  <p className="font-bold mb-1" style={{ color: '#FBBF24' }}>
                    The SEO Paradox
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: '#D1D5DB' }}>
                    You can rank on page one of Google and be completely absent from every AI platform simultaneously. These are separate visibility systems with different rules, different signals, and increasingly different audiences. Winning one does not mean you win the other.
                  </p>
                </div>
              </div>
            </div>

            <p className="mb-4 leading-relaxed" style={{ color: '#D1D5DB' }}>
              This is the SEO paradox that agencies are not telling you about, either because they don&apos;t fully understand it yet, or because admitting it means admitting your existing investment has a blind spot the size of a freight train.
            </p>

            {/* Inline CTA */}
            <div className="ae-cta-block rounded-xl p-6 my-8" style={{ backgroundColor: 'rgba(255,106,0,0.08)', border: '1px solid rgba(255,106,0,0.2)' }}>
              <p className="font-semibold mb-3" style={{ color: '#FF6A00' }}>
                Wondering if AI can find your business right now?
              </p>
              <p className="text-sm mb-4" style={{ color: '#D1D5DB' }}>
                Most business owners have never checked. A quick audit reveals exactly where you stand across ChatGPT, Perplexity, and Google AI Overviews.
              </p>
              <a
                href="https://theanswerengine.ai/#audit"
                className="ae-cta-inline inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-lg transition-all"
                style={{ backgroundColor: '#FF6A00', color: '#FFFFFF' }}
              >
                Get My Free AI Visibility Audit &#8594;
              </a>
            </div>
          </section>

          {/* SECTION 2 */}
          <section id="why-rankings-dont-translate" className="mb-14">
            <h2
              className="font-plus-jakarta text-2xl md:text-3xl font-bold mb-5"
              style={{ color: '#FFFFFF' }}
            >
              Why Google Rankings Do Not Equal AI Citations
            </h2>
            <p className="mb-4 leading-relaxed" style={{ color: '#D1D5DB' }}>
              This is the core misconception that costs businesses thousands of dollars in misdirected budget. Google and AI search platforms are not the same system. They were not built the same way, they do not evaluate content the same way, and they do not produce the same results.
            </p>
            <p className="mb-4 leading-relaxed" style={{ color: '#D1D5DB' }}>
              Google&apos;s algorithm has, for decades, been trained to reward backlinks, keyword relevance, and domain authority. Build enough links from reputable sites, hit the right keyword densities, make sure your technical setup is clean, and Google will rank you. It&apos;s a well-understood game with well-understood rules.
            </p>
            <p className="mb-4 leading-relaxed" style={{ color: '#D1D5DB' }}>
              AI platforms work on an entirely different logic. ChatGPT, Perplexity, Claude, and Google&apos;s AI Overviews are trained on vast corpora of text and then fine-tuned to produce trustworthy, well-sourced answers to conversational questions. When someone asks one of these systems to recommend a business, it draws on a completely different set of signals:
            </p>

            <ul className="space-y-3 mb-6" style={{ color: '#D1D5DB' }}>
              {[
                'How clearly your business defines what it does and who it serves',
                'Whether your content answers real buyer questions in plain, structured language',
                'How many credible third-party sources mention or validate your business',
                'Whether your entity data, such as business name, location, and category, is consistent across the web',
                'How much topical depth exists in your content ecosystem',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <span style={{ color: '#FF6A00', marginTop: '2px' }} aria-hidden="true">&#10003;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="mb-4 leading-relaxed" style={{ color: '#D1D5DB' }}>
              Notice that none of those items are &quot;have 500 backlinks&quot; or &quot;use the keyword phrase 12 times per page.&quot; Research from multiple sources confirms that traditional SEO metrics like backlink counts and traffic volume have little to no measurable impact on whether an AI platform cites a business. Content depth, readability, and structured clarity are what matter most.
            </p>

            <div
              className="ae-callout-info rounded-xl p-6 my-8"
              style={{
                backgroundColor: 'rgba(59,130,246,0.08)',
                border: '1px solid rgba(59,130,246,0.3)',
              }}
            >
              <div className="flex items-start gap-3">
                <span style={{ fontSize: '1.5rem' }} aria-hidden="true">&#128161;</span>
                <div>
                  <p className="font-bold mb-1" style={{ color: '#60A5FA' }}>
                    The Decoupling That&apos;s Draining Your ROI
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: '#D1D5DB' }}>
                    Since Google launched AI Overviews in May 2024, nearly 4 in 10 marketers report traffic losses even when their rankings stayed strong. Impressions stay up. Clicks fall. The buyer got the answer from AI and never visited your site. This is called &quot;The Great Decoupling&quot; and it is accelerating.
                  </p>
                </div>
              </div>
            </div>

            <p className="mb-4 leading-relaxed" style={{ color: '#D1D5DB' }}>
              For more context on how this shift is affecting businesses that depend on Google traffic, see our deep dive on{' '}
              <Link href="/blog/seo-not-generating-leads" style={{ color: '#FF6A00' }} className="underline hover:opacity-80">
                why SEO is no longer generating leads the way it used to
              </Link>
              .
            </p>
          </section>

          {/* SECTION 3 */}
          <section id="how-ai-picks-sources" className="mb-14">
            <h2
              className="font-plus-jakarta text-2xl md:text-3xl font-bold mb-5"
              style={{ color: '#FFFFFF' }}
            >
              How AI Platforms Actually Choose Who to Mention
            </h2>
            <p className="mb-4 leading-relaxed" style={{ color: '#D1D5DB' }}>
              Understanding the mechanics behind AI citations is the first step toward closing the gap. These systems are not running keyword searches against a database. They are generating responses based on patterns learned during training and retrieval augmentation at query time.
            </p>
            <p className="mb-4 leading-relaxed" style={{ color: '#D1D5DB' }}>
              When a retrieval-augmented system like Perplexity searches the web to construct an answer, it is looking for sources that are authoritative, clearly structured, and directly responsive to the question at hand. When a model like ChatGPT draws on training data, it surfaces businesses and entities it encountered frequently in trustworthy contexts.
            </p>

            <div className="grid md:grid-cols-3 gap-4 my-8">
              {[
                {
                  icon: '&#128203;',
                  title: 'Structured Clarity',
                  desc: 'AI systems favor content that answers specific questions directly, uses headers logically, and avoids marketing fluff. Vague brand language confuses the model.',
                },
                {
                  icon: '&#128279;',
                  title: 'Third-Party Corroboration',
                  desc: "Mentions in trade publications, directories, review platforms, and news sources tell AI that your business exists and is real. Without this, you're invisible.",
                },
                {
                  icon: '&#128101;',
                  title: 'Entity Consistency',
                  desc: 'Your business name, address, category, and description must be identical everywhere AI might encounter it. Inconsistency creates ambiguity and AI avoids ambiguity.',
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="rounded-xl p-5"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.1)',
                  }}
                >
                  <div className="text-3xl mb-3" aria-hidden="true" dangerouslySetInnerHTML={{ __html: card.icon }} />
                  <h3
                    className="font-plus-jakarta font-bold mb-2"
                    style={{ color: '#FFFFFF' }}
                  >
                    {card.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#9CA3AF' }}>
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>

            <p className="mb-4 leading-relaxed" style={{ color: '#D1D5DB' }}>
              The businesses that consistently show up in AI responses have something in common: they&apos;ve built a content presence that reads like a reference document, not a sales pitch. They answer questions. They define their niche. They appear in the places that AI systems trust.
            </p>

            {/* Inline CTA */}
            <p className="mb-2 leading-relaxed" style={{ color: '#D1D5DB' }}>
              The good news is that this is a solvable problem. The bad news is that your current SEO agency almost certainly isn&apos;t solving it.{' '}
              <a
                href="https://theanswerengine.ai/#audit"
                className="ae-cta-inline font-semibold underline"
                style={{ color: '#FF6A00' }}
              >
                See where your AI visibility stands right now.
              </a>
            </p>
          </section>

          {/* COMPARISON TABLE */}
          <section id="comparison" className="mb-14">
            <h2
              className="font-plus-jakarta text-2xl md:text-3xl font-bold mb-5"
              style={{ color: '#FFFFFF' }}
            >
              Traditional SEO vs. AI Visibility: Side by Side
            </h2>
            <p className="mb-6 leading-relaxed" style={{ color: '#D1D5DB' }}>
              The table below captures the fundamental differences between what it takes to rank on Google and what it takes to be cited by AI. These are not the same game.
            </p>

            <div className="ae-comparison-table overflow-x-auto rounded-xl mb-6" style={{ border: '1px solid rgba(255,255,255,0.1)' }}>
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ backgroundColor: 'rgba(255,106,0,0.12)' }}>
                    <th className="text-left px-5 py-4 font-semibold" style={{ color: '#FF6A00' }}>Factor</th>
                    <th className="text-left px-5 py-4 font-semibold" style={{ color: '#9CA3AF' }}>Traditional SEO</th>
                    <th className="text-left px-5 py-4 font-semibold" style={{ color: '#34D399' }}>AI Search Visibility</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Primary signal', 'Backlinks and domain authority', 'Content depth and entity clarity'],
                    ['Content format', 'Keyword-optimized pages', 'Conversational, question-answering content'],
                    ['Technical focus', 'Core Web Vitals, crawlability', 'Structured data, entity consistency'],
                    ['Citation driver', 'Anchor text and link profile', 'Third-party mentions and corroboration'],
                    ['Ranking metric', 'SERP position 1-10', 'Cited or not cited by AI'],
                    ['Traffic model', 'Click-through from results page', 'AI recommends you directly to buyer'],
                    ['Update cycle', 'Months to see ranking changes', 'Model training + real-time retrieval'],
                    ['Who controls it', 'Google algorithm', 'Distributed across ChatGPT, Perplexity, Gemini, Claude'],
                    ['Age of approach', '30 years of known rules', 'Emerging, rapidly evolving signals'],
                    ['Current ROI trend', 'Declining due to zero-click', 'Rising as AI traffic grows 165x faster'],
                  ].map(([factor, seo, ai], i) => (
                    <tr
                      key={factor}
                      style={{
                        backgroundColor: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent',
                        borderTop: '1px solid rgba(255,255,255,0.06)',
                      }}
                    >
                      <td className="px-5 py-3 font-medium" style={{ color: '#FFFFFF' }}>{factor}</td>
                      <td className="px-5 py-3" style={{ color: '#9CA3AF' }}>{seo}</td>
                      <td className="px-5 py-3" style={{ color: '#34D399' }}>{ai}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm leading-relaxed" style={{ color: '#9CA3AF' }}>
              The gap between these two columns explains why businesses with strong SEO are routinely invisible to AI. They optimized for a game that is being replaced in real time.
            </p>
          </section>

          {/* SECTION 4 - REAL COST */}
          <section id="real-cost" className="mb-14">
            <h2
              className="font-plus-jakarta text-2xl md:text-3xl font-bold mb-5"
              style={{ color: '#FFFFFF' }}
            >
              The Real Cost of Being AI-Invisible
            </h2>
            <p className="mb-4 leading-relaxed" style={{ color: '#D1D5DB' }}>
              Let&apos;s put numbers to this. A typical small business paying for SEO spends between $1,500 and $5,000 per month, roughly $18,000 to $60,000 per year. That investment buys Google rankings. It does nothing for AI visibility.
            </p>
            <p className="mb-4 leading-relaxed" style={{ color: '#D1D5DB' }}>
              Meanwhile, AI-driven referral traffic converts at six times the rate of standard organic search traffic. Buyers who get a recommendation from ChatGPT or Perplexity are not browsing options. They are ready to act. They were told to call you.
            </p>

            <div className="grid md:grid-cols-2 gap-5 my-8">
              <div
                className="rounded-xl p-6"
                style={{
                  backgroundColor: 'rgba(239,68,68,0.08)',
                  border: '1px solid rgba(239,68,68,0.25)',
                }}
              >
                <h3 className="font-plus-jakarta font-bold mb-3 text-base" style={{ color: '#F87171' }}>
                  What You&apos;re Paying For
                </h3>
                <ul className="space-y-2 text-sm" style={{ color: '#D1D5DB' }}>
                  {[
                    'Rankings in a channel where 60% of queries now end with no clicks',
                    'Traffic to a site that AI-informed buyers may never visit',
                    'Monthly reports showing metrics that exclude AI entirely',
                    'Optimization for an algorithm that increasingly defers to AI answers',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span style={{ color: '#F87171' }} aria-hidden="true">&#10007;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className="rounded-xl p-6"
                style={{
                  backgroundColor: 'rgba(52,211,153,0.08)',
                  border: '1px solid rgba(52,211,153,0.25)',
                }}
              >
                <h3 className="font-plus-jakarta font-bold mb-3 text-base" style={{ color: '#34D399' }}>
                  What You&apos;re Missing
                </h3>
                <ul className="space-y-2 text-sm" style={{ color: '#D1D5DB' }}>
                  {[
                    'Citations in AI responses where buyers with purchase intent ask for recommendations',
                    'Traffic that converts 6x higher than standard organic',
                    'AI-driven referrals growing 10x year over year',
                    'Visibility across ChatGPT, Perplexity, Gemini, and Claude simultaneously',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span style={{ color: '#34D399' }} aria-hidden="true">&#10003;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div
              className="ae-callout-orange rounded-xl p-6 my-8"
              style={{
                backgroundColor: 'rgba(255,106,0,0.08)',
                border: '1px solid rgba(255,106,0,0.3)',
              }}
            >
              <p className="font-bold mb-2" style={{ color: '#FF6A00' }}>
                The Compounding Cost
              </p>
              <p className="text-sm leading-relaxed" style={{ color: '#D1D5DB' }}>
                Every month you spend optimizing only for Google, a competitor who understands AI visibility gets mentioned in AI responses instead of you. That competitor gets the high-intent buyer. You get the invoice from your SEO agency. The gap compounds every single month.
              </p>
            </div>

            <p className="mb-4 leading-relaxed" style={{ color: '#D1D5DB' }}>
              For a broader look at whether your SEO budget is delivering returns in the AI era, our analysis of{' '}
              <Link href="/blog/is-paying-for-seo-a-waste-of-money-in-the-ai-era" style={{ color: '#FF6A00' }} className="underline hover:opacity-80">
                whether paying for SEO is a waste of money
              </Link>{' '}
              covers the full financial picture.
            </p>
          </section>

          {/* SECTION 5 - WARNING SIGNS */}
          <section id="warning-signs" className="mb-14">
            <h2
              className="font-plus-jakarta text-2xl md:text-3xl font-bold mb-5"
              style={{ color: '#FFFFFF' }}
            >
              Warning Signs Your Business Has an AI Blind Spot
            </h2>
            <p className="mb-6 leading-relaxed" style={{ color: '#D1D5DB' }}>
              Most business owners don&apos;t know they&apos;re invisible to AI because nobody has told them to check. Here are the signs that the problem is already costing you money:
            </p>

            <div className="space-y-4 mb-8">
              {[
                {
                  num: '01',
                  title: 'Your organic traffic is declining despite stable rankings',
                  desc: 'If impressions are holding but clicks are falling, AI Overviews are intercepting your traffic before users reach your link. You&apos;re still ranking. You&apos;re just not getting the visit.',
                },
                {
                  num: '02',
                  title: 'Your leads are down but your agency says performance is fine',
                  desc: 'SEO agencies measure what SEO affects: rankings, impressions, domain authority. They are not measuring AI citation rate, AI referral traffic, or whether ChatGPT recommends you. Their metrics can look healthy while your pipeline is drying up.',
                },
                {
                  num: '03',
                  title: "You've never tested what AI says about your business",
                  desc: "Open ChatGPT right now and type: 'Recommend a [your category] in [your city].' If your business doesn&apos;t come up, you have an AI blind spot. Most business owners have never done this test.",
                },
                {
                  num: '04',
                  title: 'Your competitors are appearing in AI responses and you are not',
                  desc: 'This is the most urgent version of the problem. AI is actively routing high-intent buyers to your competitors. The referrals that should be yours are going elsewhere.',
                },
                {
                  num: '05',
                  title: 'Your website has no structured data, schema markup, or entity definitions',
                  desc: 'Schema markup helps AI systems understand what your business is, what it does, and who it serves. Without it, even excellent content may be misinterpreted or ignored.',
                },
              ].map((item) => (
                <div
                  key={item.num}
                  className="rounded-xl p-5 flex gap-4"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  <div
                    className="text-2xl font-extrabold font-plus-jakarta shrink-0"
                    style={{ color: 'rgba(255,106,0,0.4)', minWidth: '2.5rem' }}
                  >
                    {item.num}
                  </div>
                  <div>
                    <h3 className="font-plus-jakarta font-bold mb-1" style={{ color: '#FFFFFF' }}>
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: '#9CA3AF' }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Inline CTA */}
            <div
              className="ae-cta-block rounded-xl p-5"
              style={{
                backgroundColor: 'rgba(255,106,0,0.08)',
                border: '1px solid rgba(255,106,0,0.2)',
              }}
            >
              <p className="text-sm font-semibold mb-2" style={{ color: '#FF6A00' }}>
                Recognize any of these signs?
              </p>
              <p className="text-sm mb-3" style={{ color: '#D1D5DB' }}>
                Call us at{' '}
                <a href="tel:+12134442229" style={{ color: '#FF6A00' }} className="font-semibold">
                  (213) 444-2229
                </a>{' '}
                or email{' '}
                <a href="mailto:support@theanswerengine.ai" style={{ color: '#FF6A00' }} className="font-semibold">
                  support@theanswerengine.ai
                </a>{' '}
                and we&apos;ll run a free AI visibility audit and tell you exactly where your blind spots are.
              </p>
            </div>
          </section>

          {/* SECTION 6 - WHAT MATTERS */}
          <section id="what-matters" className="mb-14">
            <h2
              className="font-plus-jakarta text-2xl md:text-3xl font-bold mb-5"
              style={{ color: '#FFFFFF' }}
            >
              What Actually Moves the Needle for AI Visibility
            </h2>
            <p className="mb-4 leading-relaxed" style={{ color: '#D1D5DB' }}>
              This section exists to give you direction, not a complete blueprint. The specifics of what it takes to become AI-visible are nuanced, depend heavily on your industry and competitive landscape, and require a methodical audit of your entire digital presence. That said, there are recognizable categories of work that distinguish AI-visible businesses from AI-invisible ones.
            </p>

            <div className="grid md:grid-cols-2 gap-5 my-8">
              {[
                {
                  title: 'Content Architecture',
                  icon: '&#128196;',
                  desc: "The businesses AI cites consistently have content that's structured to answer real questions. Not keyword-stuffed landing pages. Not vague brand statements. Specific, helpful, well-organized answers to the questions buyers actually ask.",
                },
                {
                  title: 'Entity Definition',
                  icon: '&#127981;',
                  desc: 'AI systems need to know what your business is, not just that it exists. Your entity definition, the clear, consistent description of who you are, what you do, and who you serve, has to be explicit and consistent everywhere AI might encounter it.',
                },
                {
                  title: 'Third-Party Signals',
                  icon: '&#128241;',
                  desc: 'AI platforms are skeptical of self-reported information. Mentions in external publications, directories, review sites, and industry resources signal credibility. This is not about buying links. It is about building a presence that third parties can corroborate.',
                },
                {
                  title: 'Structured Data',
                  icon: '&#128736;',
                  desc: "Schema markup and structured data help AI crawlers classify your business correctly. Without it, even well-written content may be miscategorized or bypassed entirely. It's a technical foundation that most businesses haven't invested in.",
                },
                {
                  title: 'Topical Authority',
                  icon: '&#127942;',
                  desc: "AI platforms favor sources that demonstrate deep expertise in a specific domain. Broad, surface-level content across many topics signals a generalist. Deep content on your core service area signals an authority. AI recommends authorities.",
                },
                {
                  title: 'Conversational Accessibility',
                  icon: '&#128172;',
                  desc: "AI generates answers for humans having conversations. Content written in dense, formal, or jargon-heavy language doesn't translate well into AI responses. Plain, clear, conversational writing performs significantly better in AI citation.",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="rounded-xl p-5"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  <div className="text-2xl mb-2" aria-hidden="true" dangerouslySetInnerHTML={{ __html: card.icon }} />
                  <h3 className="font-plus-jakarta font-bold mb-2 text-base" style={{ color: '#FFFFFF' }}>
                    {card.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#9CA3AF' }}>
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>

            <div
              className="ae-callout-success rounded-xl p-6 my-8"
              style={{
                backgroundColor: 'rgba(52,211,153,0.07)',
                border: '1px solid rgba(52,211,153,0.25)',
              }}
            >
              <p className="font-bold mb-2" style={{ color: '#34D399' }}>
                The Opportunity Hidden in Plain Sight
              </p>
              <p className="text-sm leading-relaxed" style={{ color: '#D1D5DB' }}>
                Because 71% of businesses are still invisible to AI, the competitive window for early movers is extraordinary. Businesses that close this gap now will be the ones AI recommends for years. The work required is not trivial, but the compounding advantage for those who do it early is immense.
              </p>
            </div>

            <p className="mb-4 leading-relaxed" style={{ color: '#D1D5DB' }}>
              If you&apos;re wondering how long you have before AI invisibility becomes a crisis-level problem, our piece on{' '}
              <Link href="/blog/will-business-vanish-stop-doing-seo" style={{ color: '#FF6A00' }} className="underline hover:opacity-80">
                whether your business will vanish if you stop doing SEO
              </Link>{' '}
              addresses that timeline directly.
            </p>
          </section>

          {/* PROS CONS */}
          <section id="pros-cons" className="mb-14">
            <h2
              className="font-plus-jakarta text-2xl md:text-3xl font-bold mb-5"
              style={{ color: '#FFFFFF' }}
            >
              SEO-Only Strategy: Pros and Cons in the AI Era
            </h2>
            <p className="mb-6 leading-relaxed" style={{ color: '#D1D5DB' }}>
              SEO is not dead. Let&apos;s be clear about that. But an SEO-only strategy in 2026 is like advertising exclusively in the Yellow Pages in 2010. It still reaches some people. Just not the people who are moving on.
            </p>

            <div className="ae-pros-cons grid md:grid-cols-2 gap-5 mb-6">
              <div
                className="rounded-xl p-6"
                style={{
                  backgroundColor: 'rgba(52,211,153,0.06)',
                  border: '1px solid rgba(52,211,153,0.2)',
                }}
              >
                <h3 className="font-plus-jakarta font-bold mb-4 flex items-center gap-2" style={{ color: '#34D399' }}>
                  <span aria-hidden="true">&#9989;</span> Still Works
                </h3>
                <ul className="space-y-3 text-sm" style={{ color: '#D1D5DB' }}>
                  {[
                    'Informational queries where users want to browse multiple sources',
                    'Local SEO for map-pack visibility on near-me searches',
                    'Building the technical foundation that AI crawlers also need',
                    'Establishing topical authority that benefits both Google and AI',
                    'Long-tail queries not yet intercepted by AI Overviews',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span style={{ color: '#34D399' }} aria-hidden="true">&#43;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className="rounded-xl p-6"
                style={{
                  backgroundColor: 'rgba(239,68,68,0.06)',
                  border: '1px solid rgba(239,68,68,0.2)',
                }}
              >
                <h3 className="font-plus-jakarta font-bold mb-4 flex items-center gap-2" style={{ color: '#F87171' }}>
                  <span aria-hidden="true">&#10060;</span> No Longer Sufficient
                </h3>
                <ul className="space-y-3 text-sm" style={{ color: '#D1D5DB' }}>
                  {[
                    'High-intent recommendation queries routed through AI before Google',
                    'Voice and conversational search where AI generates the answer',
                    'B2B research journeys where 78% of buyers now use AI tools',
                    'Any query where Google serves an AI Overview instead of links',
                    'Brand visibility in AI-generated comparison and recommendation content',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span style={{ color: '#F87171' }} aria-hidden="true">&#8722;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* DECISION MATRIX */}
          <section id="decision-matrix" className="mb-14">
            <h2
              className="font-plus-jakarta text-2xl md:text-3xl font-bold mb-5"
              style={{ color: '#FFFFFF' }}
            >
              Decision Matrix: Should You Pivot Your Strategy?
            </h2>
            <p className="mb-6 leading-relaxed" style={{ color: '#D1D5DB' }}>
              Use this matrix to assess how urgently your business needs to address AI visibility. The more boxes you check on the right, the more your current SEO investment is working against your growth.
            </p>

            <div className="ae-decision-matrix overflow-x-auto rounded-xl" style={{ border: '1px solid rgba(255,255,255,0.1)' }}>
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ backgroundColor: 'rgba(255,106,0,0.1)' }}>
                    <th className="text-left px-5 py-4 font-semibold" style={{ color: '#FF6A00' }}>Your Situation</th>
                    <th className="text-left px-5 py-4 font-semibold" style={{ color: '#9CA3AF' }}>SEO-Only Risk</th>
                    <th className="text-left px-5 py-4 font-semibold" style={{ color: '#34D399' }}>Recommended Action</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    [
                      'Leads are declining despite stable rankings',
                      'Critical',
                      'Immediate AI visibility audit required',
                    ],
                    [
                      'B2B service business with 6+ month sales cycles',
                      'High',
                      'AI visibility investment should match SEO spend',
                    ],
                    [
                      'Local service business in competitive market',
                      'High',
                      'AI citation strategy needed alongside local SEO',
                    ],
                    [
                      'E-commerce with transactional content',
                      'Medium',
                      'Monitor AI Overview intercept rate, expand content depth',
                    ],
                    [
                      'Informational content publisher',
                      'Medium',
                      'Restructure for AI citation while maintaining SEO',
                    ],
                    [
                      'Strong rankings, healthy lead volume, testing new channels',
                      'Low-Medium',
                      'Start with audit, build AI strategy before urgency hits',
                    ],
                  ].map(([situation, risk, action], i) => (
                    <tr
                      key={situation}
                      style={{
                        backgroundColor: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent',
                        borderTop: '1px solid rgba(255,255,255,0.06)',
                      }}
                    >
                      <td className="px-5 py-3" style={{ color: '#FFFFFF' }}>{situation}</td>
                      <td
                        className="px-5 py-3 font-semibold"
                        style={{
                          color:
                            risk === 'Critical'
                              ? '#F87171'
                              : risk === 'High'
                              ? '#FBBF24'
                              : '#34D399',
                        }}
                      >
                        {risk}
                      </td>
                      <td className="px-5 py-3" style={{ color: '#9CA3AF' }}>{action}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* CHEAT SHEET */}
          <section id="cheat-sheet" className="mb-14">
            <div
              className="ae-cheat-sheet rounded-xl p-8"
              style={{
                background: 'linear-gradient(135deg, rgba(255,106,0,0.1) 0%, rgba(255,106,0,0.04) 100%)',
                border: '1px solid rgba(255,106,0,0.3)',
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl" aria-hidden="true">&#128203;</span>
                <h2
                  className="font-plus-jakarta text-xl md:text-2xl font-bold"
                  style={{ color: '#FF6A00' }}
                >
                  AI Visibility Audit Cheat Sheet
                </h2>
              </div>
              <p className="text-sm mb-6" style={{ color: '#D1D5DB' }}>
                Use this as a starting point to diagnose where your AI visibility gaps are. This is a directional checklist, not a complete strategy. Real gap analysis requires a full audit of your content, entity data, and competitive landscape.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    category: 'Test Your Current AI Visibility',
                    items: [
                      "Ask ChatGPT: 'Best [your service] in [your city]' and note if you appear",
                      "Ask Perplexity: 'Who should I hire for [your service]?' in your market",
                      "Check Google for a relevant query and look for an AI Overview above the results",
                      'Note which competitors appear and what language AI uses to describe them',
                    ],
                  },
                  {
                    category: 'Check Your Content Foundation',
                    items: [
                      "Does your site have a clear, concise answer to 'what do you do and who do you serve'?",
                      'Do your key pages use structured headers that answer specific questions?',
                      'Is your content written in plain language a non-expert can follow?',
                      'Do your pages have schema markup for your business type?',
                    ],
                  },
                  {
                    category: 'Audit Your Entity Consistency',
                    items: [
                      'Is your business name identical across Google Business Profile, Yelp, LinkedIn, and your site?',
                      "Is your business category and description consistent everywhere it appears?",
                      'Are your NAP (name, address, phone) details identical on all major directories?',
                      'Does your site clearly state your geographic service area?',
                    ],
                  },
                  {
                    category: 'Evaluate Third-Party Signals',
                    items: [
                      'Has your business been mentioned in any industry publications or news?',
                      'Do you have reviews on multiple platforms beyond Google?',
                      'Are there any external sites that link to or describe your business as an authority?',
                      'Does your content get shared or referenced by others in your space?',
                    ],
                  },
                ].map((section) => (
                  <div key={section.category}>
                    <h3 className="font-plus-jakarta font-bold text-sm mb-3" style={{ color: '#FF6A00' }}>
                      {section.category}
                    </h3>
                    <ul className="space-y-2">
                      {section.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm" style={{ color: '#D1D5DB' }}>
                          <span style={{ color: '#FF6A00', marginTop: '2px', flexShrink: 0 }} aria-hidden="true">&#9744;</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6" style={{ borderTop: '1px solid rgba(255,106,0,0.2)' }}>
                <p className="text-sm font-semibold mb-3" style={{ color: '#FFFFFF' }}>
                  Struggling with what you find? That&apos;s exactly what we solve.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://theanswerengine.ai/#audit"
                    className="ae-cta-inline inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-lg"
                    style={{ backgroundColor: '#FF6A00', color: '#FFFFFF' }}
                  >
                    Get a Full AI Audit &#8594;
                  </a>
                  <a
                    href="tel:+12134442229"
                    className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-lg"
                    style={{
                      backgroundColor: 'transparent',
                      color: '#FF6A00',
                      border: '1px solid rgba(255,106,0,0.5)',
                    }}
                  >
                    &#128222; (213) 444-2229
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* 3-TIER CTA BLOCK */}
          <section className="mb-14">
            <div
              className="ae-cta-block rounded-2xl p-8 text-center"
              style={{
                background:
                  'linear-gradient(135deg, rgba(255,106,0,0.12) 0%, rgba(255,106,0,0.04) 100%)',
                border: '1px solid rgba(255,106,0,0.3)',
              }}
            >
              <h2
                className="font-plus-jakarta text-2xl md:text-3xl font-bold mb-3"
                style={{ color: '#FFFFFF' }}
              >
                Find Out Where AI Blind Spots Are Costing You
              </h2>
              <p className="text-base mb-8 mx-auto" style={{ color: '#D1D5DB', maxWidth: '540px' }}>
                Most businesses have never checked their AI visibility. We&apos;ll show you exactly where you&apos;re invisible, which competitors are being cited instead, and what it would take to close the gap.
              </p>

              <div className="flex flex-col md:flex-row items-center justify-center gap-4 flex-wrap">
                <a
                  href="https://theanswerengine.ai/#audit"
                  className="ae-cta-inline inline-flex items-center gap-2 font-bold px-7 py-4 rounded-xl text-base transition-all"
                  style={{ backgroundColor: '#FF6A00', color: '#FFFFFF' }}
                >
                  Find My AI Blind Spots Free &#8594;
                </a>

                <a
                  href="tel:+12134442229"
                  className="inline-flex items-center gap-2 font-semibold px-7 py-4 rounded-xl text-base"
                  style={{
                    backgroundColor: 'transparent',
                    color: '#FFFFFF',
                    border: '1px solid rgba(255,255,255,0.25)',
                  }}
                >
                  &#128222; (213) 444-2229
                </a>

                <a
                  href="mailto:support@theanswerengine.ai"
                  className="inline-flex items-center gap-2 font-semibold px-7 py-4 rounded-xl text-base"
                  style={{
                    backgroundColor: 'transparent',
                    color: '#9CA3AF',
                    border: '1px solid rgba(255,255,255,0.1)',
                  }}
                >
                  &#9993; support@theanswerengine.ai
                </a>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="mb-14">
            <h2
              className="font-plus-jakarta text-2xl md:text-3xl font-bold mb-8"
              style={{ color: '#FFFFFF' }}
            >
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {[
                {
                  q: "Why can't AI find my business even though I rank on Google?",
                  a: "Google rankings and AI citations are governed by completely different signals. Google rewards backlinks, keyword density, and domain authority. AI platforms like ChatGPT and Perplexity reward structured factual content, clear entity definitions, authoritative citations, and conversational clarity. A page that ranks #1 on Google can be entirely absent from AI responses because it was never built to be machine-readable or citation-worthy.",
                },
                {
                  q: 'How much do businesses typically spend on SEO?',
                  a: 'Small businesses typically spend between $1,500 and $5,000 per month on SEO services, adding up to $18,000 to $60,000 per year. Competitive industries often push that higher. Despite this investment, 71% of businesses remain completely invisible to AI search platforms, meaning a large share of that budget delivers no protection against the AI search shift.',
                },
                {
                  q: 'Does traditional SEO help with AI search visibility?',
                  a: 'Partially. Technical SEO basics like fast load times, clean HTML, and proper indexing help AI crawlers access your content. But the signals that drive Google rankings, such as backlink counts and keyword repetition, have little to no impact on whether an AI platform cites your business. AI favors depth, clarity, structured answers, and third-party corroboration, not raw link equity.',
                },
                {
                  q: 'What percentage of searches end without a click now?',
                  a: 'Approximately 60% of Google searches now end without a click because AI Overviews answer the question directly on the results page. This means the buyer never reaches your website even if you rank well. For businesses that depend on organic traffic to generate leads, this zero-click shift is quietly draining ROI from SEO investments.',
                },
                {
                  q: 'What is Answer Engine Optimization and how is it different from SEO?',
                  a: "Answer Engine Optimization (AEO) is the practice of structuring your business's content, data, and online presence so that AI platforms cite you as a trusted source when buyers ask questions. Unlike SEO, which targets keyword rankings in Google, AEO targets citations in ChatGPT, Perplexity, Google AI Overviews, and other AI-powered search surfaces. The goal is to become the business AI recommends, not just the business Google lists.",
                },
                {
                  q: 'How fast is AI search traffic growing compared to organic search?',
                  a: 'AI-driven search visibility is growing 165 times faster than traditional organic search. Web traffic from AI referrals increased more than tenfold in the United States between July 2024 and February 2025 alone. By mid-2025, AI platforms like ChatGPT and Perplexity accounted for over 5.6% of U.S. desktop search traffic, more than double their share from a year earlier.',
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
                    className="font-plus-jakarta font-bold mb-3 flex items-start gap-3"
                    style={{ color: '#FFFFFF' }}
                  >
                    <span style={{ color: '#FF6A00', flexShrink: 0 }} aria-hidden="true">Q.</span>
                    {item.q}
                  </h3>
                  <p className="text-sm leading-relaxed pl-6" style={{ color: '#9CA3AF' }}>
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* AUTHOR CARD */}
          <section className="mb-14">
            <div
              className="ae-author-card rounded-xl p-6 flex flex-col md:flex-row items-start gap-5"
              style={{
                backgroundColor: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <div
                className="shrink-0 w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold"
                style={{ backgroundColor: 'rgba(255,106,0,0.2)', color: '#FF6A00' }}
                aria-hidden="true"
              >
                AE
              </div>
              <div>
                <p className="font-plus-jakarta font-bold mb-1" style={{ color: '#FFFFFF' }}>
                  The Answer Engine Team
                </p>
                <p className="text-xs mb-2" style={{ color: '#6B7280' }}>
                  Published March 29, 2026 &bull; Business Pain Points
                </p>
                <p className="text-sm leading-relaxed" style={{ color: '#9CA3AF' }}>
                  The Answer Engine team helps businesses close the gap between Google visibility and AI citation. We specialize in Answer Engine Optimization, the discipline of making your business the one AI platforms recommend when buyers ask for help.
                </p>
              </div>
            </div>
          </section>

          {/* RELATED ARTICLES */}
          <section className="mb-14">
            <h2
              className="font-plus-jakarta text-xl font-bold mb-5"
              style={{ color: '#FFFFFF' }}
            >
              Related Reading
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                {
                  href: '/blog/seo-not-generating-leads',
                  title: 'Why Am I Paying for SEO But Not Getting Any Leads?',
                  desc: 'The zero-click shift is draining organic leads. Here is what is happening and what to do.',
                },
                {
                  href: '/blog/is-paying-for-seo-a-waste-of-money-in-the-ai-era',
                  title: 'Is Paying for SEO a Waste of Money in the AI Era?',
                  desc: "A clear-eyed look at where SEO still delivers ROI and where it doesn't anymore.",
                },
                {
                  href: '/blog/will-business-vanish-stop-doing-seo',
                  title: 'Will Your Business Vanish If You Stop Doing SEO?',
                  desc: 'The real risk timeline for businesses navigating the AI search transition.',
                },
              ].map((article) => (
                <Link
                  key={article.href}
                  href={article.href}
                  className="block rounded-xl p-5 transition-all hover:border-orange-500"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  <h3
                    className="font-plus-jakarta font-bold text-sm mb-2"
                    style={{ color: '#FFFFFF' }}
                  >
                    {article.title}
                  </h3>
                  <p className="text-xs" style={{ color: '#6B7280' }}>
                    {article.desc}
                  </p>
                </Link>
              ))}
            </div>
          </section>

          {/* FINAL CTA */}
          <section className="mb-14">
            <div
              className="ae-final-cta rounded-2xl p-10 text-center"
              style={{
                background:
                  'linear-gradient(135deg, #1a0800 0%, #0F1117 50%, #1a0800 100%)',
                border: '2px solid rgba(255,106,0,0.4)',
                boxShadow: '0 0 40px rgba(255,106,0,0.15)',
              }}
            >
              <div
                className="inline-block text-4xl mb-4"
                aria-hidden="true"
                style={{
                  animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                }}
              >
                &#128269;
              </div>
              <h2
                className="font-plus-jakarta text-2xl md:text-3xl font-extrabold mb-4"
                style={{ color: '#FFFFFF' }}
              >
                Stop Paying for Visibility That AI Buyers Never See
              </h2>
              <p className="text-base mb-8 mx-auto" style={{ color: '#D1D5DB', maxWidth: '500px' }}>
                Your SEO investment deserves to be working in the channel where high-intent buyers are actually searching. Let&apos;s find your AI blind spots and close them before your competitors do.
              </p>

              <div className="flex flex-col md:flex-row items-center justify-center gap-4 flex-wrap mb-6">
                <a
                  href="https://theanswerengine.ai/#audit"
                  className="ae-cta-inline inline-flex items-center gap-2 font-extrabold text-lg px-8 py-4 rounded-xl transition-all"
                  style={{
                    backgroundColor: '#FF6A00',
                    color: '#FFFFFF',
                    boxShadow: '0 0 24px rgba(255,106,0,0.5)',
                  }}
                >
                  Find My AI Blind Spots Free &#8594;
                </a>
              </div>

              <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-sm" style={{ color: '#9CA3AF' }}>
                <a
                  href="tel:+12134442229"
                  className="flex items-center gap-2 font-semibold"
                  style={{ color: '#FF6A00' }}
                >
                  &#128222; (213) 444-2229
                </a>
                <span className="hidden md:block" aria-hidden="true">&bull;</span>
                <a
                  href="mailto:support@theanswerengine.ai"
                  className="flex items-center gap-2"
                  style={{ color: '#9CA3AF' }}
                >
                  &#9993; support@theanswerengine.ai
                </a>
                <span className="hidden md:block" aria-hidden="true">&bull;</span>
                <span>Free audit &bull; No commitment</span>
              </div>
            </div>
          </section>

        </article>
      </main>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </>
  )
}
