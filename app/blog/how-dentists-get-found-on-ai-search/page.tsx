import type { Metadata } from 'next'
import Link from 'next/link'

export const revalidate = 86400
export const dynamic = 'force-static'
export const dynamicParams = true

const title = 'How Dentists Get Found on AI Search'
const description = 'AI Overviews appear on 75% of dental queries and 47% of patients under 40 use AI to find providers. Here is how dental practices get recommended.'
const slug = 'how-dentists-get-found-on-ai-search'
const publishDate = '2026-04-14'

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'dentist AI search',
    'dental practice AI visibility',
    'how dentists get found AI',
    'ChatGPT dentist recommendations',
    'Google AI Overviews dentist',
    'dental AEO',
    'answer engine optimization dental',
    'dental practice marketing AI',
    'Healthgrades Zocdoc AI',
    'NAP consistency dental',
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
        '@type': 'Organization',
        name: 'The Answer Engine Team',
        url: 'https://theanswerengine.ai/about',
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
          name: 'Do dental practices really show up in AI search results?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. AI Overviews from Google appear on 75% of dental search queries, and ChatGPT, Perplexity, and Gemini all surface dental recommendations when patients ask questions like "best dentist near me" or "who does Invisalign in [city]." Practices that have structured their online presence correctly get cited regularly. Those that have not are invisible to this growing channel.',
          },
        },
        {
          '@type': 'Question',
          name: 'How many reviews does a dental practice need to get recommended by AI?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Research shows AI systems favor practices with 75 or more Google reviews that mention specific procedures. Generic five-star reviews carry far less weight than reviews that name the procedure performed, the provider, and a specific outcome. Quantity matters, but specificity is what makes AI platforms confident enough to cite a practice.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which directories matter most for dental AI visibility?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The four directories with the strongest signal for dental AI visibility are Healthgrades, Zocdoc, WebMD, and the ADA Find-a-Dentist directory. Each of these platforms is indexed and trusted by major AI engines. Being listed accurately on all four, with matching NAP data, is a baseline requirement. Missing or inconsistent listings actively suppress AI recommendations.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is NAP consistency and why does it matter for dentists in AI?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'NAP stands for Name, Address, and Phone number. AI platforms cross-reference your practice information across dozens of sources before recommending you. If your practice name is listed differently on Google Business Profile, Healthgrades, Yelp, and your website, AI systems interpret the inconsistency as a reliability signal against your practice. Even small differences like "Suite 200" vs "Ste 200" can create confusion that suppresses recommendations.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does schema markup actually help dental practices in AI search?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, significantly. Dental practices that implement DentistSchema, LocalBusiness, and MedicalOrganization schema give AI crawlers structured data they can confidently read and cite. Without schema, AI has to interpret your website content probabilistically, which introduces uncertainty and reduces citation likelihood. Schema markup essentially translates your practice information into a language AI platforms prefer.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long before a dental practice starts appearing in AI search results?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most practices that implement a structured AI visibility strategy begin seeing mentions within 60 to 90 days. Building the directory presence, resolving NAP inconsistencies, and publishing procedure-specific content all compound over time. Practices in less competitive markets often see results faster. The key is that the underlying signals need to be consistent before AI platforms build enough confidence to recommend you.',
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
      <span className="text-gray-400">Dentists &amp; AI Search</span>
    </nav>
  )
}

export default function HowDentistsGetFoundOnAISearch() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-[#0F1117]">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-white/5">
          <div className="absolute inset-0 bg-gradient-to-br from-[#FF6A00]/10 via-transparent to-transparent" />
          <svg
            className="absolute inset-0 w-full h-full opacity-[0.03]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="hero-grid-dentists"
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
            <rect width="100%" height="100%" fill="url(#hero-grid-dentists)" />
          </svg>

          <div className="relative max-w-4xl mx-auto px-6 py-16 sm:py-24">
            <Breadcrumb />
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 bg-[#FF6A00]/10 border border-[#FF6A00]/30">
              <span className="text-sm font-semibold tracking-wider uppercase text-[#FF6A00]">
                Industry Guides
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">
              How Dentists Get Found on{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6A00] to-orange-400">
                AI Search
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
              AI Overviews appear on 75% of dental queries. Nearly half of
              patients under 40 already use AI to find their next provider. If
              your practice is not showing up, someone else is getting those
              patients.
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
                <span>April 14, 2026</span>
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
                <span>15 min read</span>
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
                <span>The Answer Engine Team</span>
              </div>
            </div>
          </div>
        </section>

        {/* Article Body */}
        <article className="max-w-4xl mx-auto px-6 py-12 sm:py-16">
          <div className="prose prose-invert prose-lg max-w-none prose-headings:font-plus-jakarta prose-headings:text-white prose-p:text-gray-300 prose-a:text-[#FF6A00] prose-a:no-underline hover:prose-a:underline prose-strong:text-white">

            {/* STATS GRID */}
            <div className="ae-stats-grid not-prose">
              <div className="ae-stat-card">
                <div className="ae-stat-value ae-accent">75%</div>
                <div className="ae-stat-label">
                  of dental search queries trigger Google AI Overviews
                </div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-value ae-accent">47%</div>
                <div className="ae-stat-label">
                  of patients under 40 use AI to find their dental provider
                </div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-value ae-accent">32%</div>
                <div className="ae-stat-label">
                  decline in organic click-through rates after AI Overviews rollout
                </div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-value ae-accent">$3.1B</div>
                <div className="ae-stat-label">
                  projected AI in Dentistry market by 2034 (22.3% CAGR)
                </div>
              </div>
            </div>

            {/* TABLE OF CONTENTS */}
            <div className="ae-toc not-prose">
              <div className="ae-toc-title">Table of Contents</div>
              <ol>
                <li>
                  <a href="#the-shift">The AI Takeover of Dental Patient Search</a>
                </li>
                <li>
                  <a href="#how-ai-picks">How AI Platforms Choose Which Dentist to Recommend</a>
                </li>
                <li>
                  <a href="#nap-consistency">NAP Consistency: The Foundation of AI Visibility</a>
                </li>
                <li>
                  <a href="#reviews">Reviews That AI Trusts and What That Looks Like</a>
                </li>
                <li>
                  <a href="#directories">Directories That Feed AI Recommendations</a>
                </li>
                <li>
                  <a href="#service-pages">Service Pages That Get Cited</a>
                </li>
                <li>
                  <a href="#schema">Schema Markup for Dental Practices</a>
                </li>
                <li>
                  <a href="#patient-journey">The AI-Driven Patient Journey</a>
                </li>
                <li>
                  <a href="#mistakes">The 5 Mistakes Keeping Dentists Off AI</a>
                </li>
                <li>
                  <a href="#decision-matrix">Am I Visible on AI? A Self-Assessment</a>
                </li>
                <li>
                  <a href="#cheat-sheet">AI Visibility Cheat Sheet for Dentists</a>
                </li>
                <li>
                  <a href="#faq">Frequently Asked Questions</a>
                </li>
              </ol>
            </div>

            {/* SECTION 1: THE SHIFT */}
            <span className="ae-section-label" id="the-shift">
              The Shift
            </span>
            <h2>The AI Takeover of Dental Patient Search</h2>

            <p>
              A patient in your city opens their phone and types: &quot;best
              dentist for Invisalign near me.&quot; Google does not give them ten
              blue links. It generates an AI Overview at the top of the page,
              summarizing three or four practices with their ratings, locations,
              and what patients say about them. Your practice is either in that
              summary or it is not. If it is not, that patient is unlikely to
              scroll far enough to find you.
            </p>

            <p>
              This is not a future scenario. AI Overviews now appear on 75% of
              dental search queries. Thirty-two percent of all healthcare seekers
              already use AI to find providers, and among patients under 40, that
              number climbs to 47%. The organic position one click-through rate
              dropped from 28% to 19% after Google rolled out AI Overviews, a 32%
              decline in a single platform update.
            </p>

            <div className="ae-callout-info not-prose">
              <strong>Why This Matters for Your Practice</strong>
              <p>
                Traditional dental marketing targeted Google page one. AI search
                targets something different: a single curated answer. Getting into
                that answer is not the same as ranking. It requires a different
                kind of signal, and most practices have not built it yet.
              </p>
            </div>

            <p>
              The dental industry is at an inflection point. The AI in Dentistry
              market was valued at $421 million in 2024 and is projected to reach
              $3.1 billion by 2034, growing at a 22.3% compound annual rate.
              Patients are not just discovering AI tools for health research, they
              are trusting them. Seventy-six percent of healthcare consumers say
              they trust AI-summarized recommendations when the underlying reviews
              come from verified sources.
            </p>

            <p>
              The practices that will dominate the next decade of patient
              acquisition are the ones building AI visibility now, before the
              competition catches on. This guide explains what AI platforms
              actually look for when recommending a dentist, why most practices
              fail to show up, and what the signal structure looks like for the
              ones that consistently get cited.
            </p>

            {/* INLINE CTA 1 */}
            <div className="ae-cta-inline not-prose">
              <p className="text-sm text-gray-400 mb-3">
                Not sure if your practice shows up when patients search AI?
              </p>
              <Link
                href="/blindspot"
                className="inline-flex items-center gap-2 text-[#FF6A00] font-semibold hover:underline"
              >
                Get your free Blind Spot Report
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
            </div>

            {/* SECTION 2: HOW AI PICKS */}
            <span className="ae-section-label" id="how-ai-picks">
              How It Works
            </span>
            <h2>How AI Platforms Choose Which Dentist to Recommend</h2>

            <p>
              AI recommendation engines do not browse the internet the way a
              patient does. They aggregate signals from multiple trusted sources
              and synthesize a confidence score for each practice. When that score
              is high enough, the practice gets cited. When it is not, the
              practice is invisible regardless of how long it has been in business
              or how good the care actually is.
            </p>

            <p>
              The core signals that drive dental AI recommendations fall into five
              categories: data consistency, review quantity and quality,
              credential verification, directory presence, and structured data on
              your website. Each category contributes to AI confidence
              independently, but they compound significantly when all five are
              strong.
            </p>

            {/* BAR CHART GROUP */}
            <div className="ae-bar-group not-prose">
              <div className="ae-bar-group-title">
                AI Trust Signal Weight for Dental Practices
              </div>
              <div className="ae-bar-item">
                <div className="ae-bar-label">NAP Consistency Across Sources</div>
                <div className="ae-bar-track">
                  <div className="ae-bar-fill" style={{ width: '92%' }}>
                    92%
                  </div>
                </div>
              </div>
              <div className="ae-bar-item">
                <div className="ae-bar-label">Review Volume + Procedure Specificity</div>
                <div className="ae-bar-track">
                  <div className="ae-bar-fill" style={{ width: '88%' }}>
                    88%
                  </div>
                </div>
              </div>
              <div className="ae-bar-item">
                <div className="ae-bar-label">Healthcare Directory Presence</div>
                <div className="ae-bar-track">
                  <div className="ae-bar-fill" style={{ width: '82%' }}>
                    82%
                  </div>
                </div>
              </div>
              <div className="ae-bar-item">
                <div className="ae-bar-label">Schema Markup on Website</div>
                <div className="ae-bar-track">
                  <div className="ae-bar-fill" style={{ width: '74%' }}>
                    74%
                  </div>
                </div>
              </div>
              <div className="ae-bar-item">
                <div className="ae-bar-label">Credential and License Visibility</div>
                <div className="ae-bar-track">
                  <div className="ae-bar-fill" style={{ width: '68%' }}>
                    68%
                  </div>
                </div>
              </div>
              <div className="ae-bar-item">
                <div className="ae-bar-label">Service Page Depth</div>
                <div className="ae-bar-track">
                  <div className="ae-bar-fill" style={{ width: '61%' }}>
                    61%
                  </div>
                </div>
              </div>
            </div>

            <p>
              Google AI Overviews pull heavily from Google Business Profile data,
              review content, and indexed web pages. ChatGPT and Perplexity rely
              more on structured directory data and crawled website content.
              Claude tends to weight institutional credibility and named
              credentials more than raw review count. This means a practice needs
              to perform well across all five categories to show up consistently
              across platforms, not just optimize for one.
            </p>

            <div className="ae-callout-warning not-prose">
              <strong>The Trap Most Practices Fall Into</strong>
              <p>
                Many dental practices focus all their digital marketing effort on
                Google Ads or basic SEO while ignoring the underlying data
                infrastructure that AI platforms read. You can spend thousands per
                month on paid search and still be invisible to the AI layer that
                is now sitting above those ads.
              </p>
            </div>

            {/* SECTION 3: NAP CONSISTENCY */}
            <span className="ae-section-label" id="nap-consistency">
              Foundation
            </span>
            <h2>NAP Consistency: The Foundation of AI Visibility</h2>

            <p>
              NAP stands for Name, Address, and Phone number. It is the most
              basic signal AI platforms use to establish that a business is real,
              stable, and trustworthy. For dental practices, NAP inconsistency is
              the single most common reason practices fail to get recommended,
              and it is also the most fixable.
            </p>

            <p>
              When AI systems cross-reference your practice across Google Business
              Profile, Healthgrades, Zocdoc, WebMD, Yelp, Facebook, your own
              website, and a dozen other sources, they are looking for agreement.
              Every mismatch reduces confidence. A practice listed as &quot;Westside
              Family Dental&quot; on Google but &quot;Westside Family Dentistry LLC&quot; on
              Healthgrades and &quot;Dr. Sarah Reeves DDS&quot; on Zocdoc is three
              different entities to an AI parsing data sources. It will not cite
              any of them confidently.
            </p>

            <div className="ae-callout-orange not-prose">
              <strong>Common NAP Problems in Dental Practices</strong>
              <ul className="mt-2 space-y-1 text-sm text-gray-300">
                <li>Suite numbers formatted differently across listings</li>
                <li>Old phone numbers left active on abandoned directory profiles</li>
                <li>Practice name includes &quot;DDS&quot; on some platforms and not others</li>
                <li>Address uses &quot;Street&quot; vs &quot;St&quot; inconsistently</li>
                <li>Multiple locations using the same phone number</li>
                <li>
                  Website footer address not matching Google Business Profile
                </li>
              </ul>
            </div>

            <p>
              The fix is an audit across every directory where your practice
              appears, followed by a systematic correction that makes every
              listing identical in format. This is not glamorous work, but it is
              foundational. Everything else you do to build AI visibility is
              undermined by NAP inconsistency because it introduces noise into
              the signals AI is trying to aggregate.
            </p>

            <p>
              For multi-location practices, this challenge multiplies. Each
              location needs its own distinct NAP set, clearly differentiated, so
              AI platforms can treat them as separate entities rather than
              conflating them. We wrote in detail about how multi-location
              businesses struggle with AI search and what to do about it in our
              guide on{' '}
              <Link href="/blog/why-multi-location-businesses-struggle-ai-search">
                why multi-location businesses struggle with AI search
              </Link>
              .
            </p>

            {/* INLINE CTA 2 */}
            <div className="ae-cta-inline not-prose">
              <p className="text-sm text-gray-400 mb-3">
                Inconsistent listings are the silent killer of AI
                recommendations.
              </p>
              <Link
                href="/blindspot"
                className="inline-flex items-center gap-2 text-[#FF6A00] font-semibold hover:underline"
              >
                Find out where your data breaks down
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
            </div>

            {/* SECTION 4: REVIEWS */}
            <span className="ae-section-label" id="reviews">
              Reviews
            </span>
            <h2>Reviews That AI Trusts: What 75 Reviews Actually Means</h2>

            <p>
              The 75-review threshold is not arbitrary. It represents the volume
              at which AI platforms have enough signal density to form reliable
              patterns about what a practice actually does and who it serves.
              Below that threshold, the data is too thin to support confident
              recommendations, especially for healthcare where the stakes for a
              bad recommendation are high.
            </p>

            <p>
              But volume is only half the equation. The other half is content.
              Seventy-five reviews that say &quot;great experience, highly recommend&quot;
              carry far less weight than forty reviews that mention specific
              procedures, provider names, and outcomes. When a review says &quot;Dr.
              Chen did my Invisalign treatment and my teeth are straighter than
              they have been in twenty years,&quot; that review teaches AI three
              things: the provider name, the procedure offered, and a patient
              outcome. That is a signal-dense review.
            </p>

            <div className="not-prose my-10">
              <div className="ae-comparison-table">
                <table className="w-full text-sm">
                  <thead>
                    <tr>
                      <th className="text-left p-3 text-gray-400 font-semibold border-b border-white/10">
                        Review Type
                      </th>
                      <th className="text-left p-3 text-gray-400 font-semibold border-b border-white/10">
                        AI Signal Value
                      </th>
                      <th className="text-left p-3 text-gray-400 font-semibold border-b border-white/10">
                        Why
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/5">
                      <td className="p-3 text-gray-300">
                        &quot;Great dentist, very professional&quot;
                      </td>
                      <td className="p-3">
                        <span className="ae-tier-badge ae-tier-low">Low</span>
                      </td>
                      <td className="p-3 text-gray-400">
                        No procedure, no provider, no outcome
                      </td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="p-3 text-gray-300">
                        &quot;Had my cavity filled, painless&quot;
                      </td>
                      <td className="p-3">
                        <span className="ae-tier-badge ae-tier-medium">Medium</span>
                      </td>
                      <td className="p-3 text-gray-400">
                        Procedure named but no provider or depth
                      </td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="p-3 text-gray-300">
                        &quot;Dr. Patel did my root canal, explained every step&quot;
                      </td>
                      <td className="p-3">
                        <span className="ae-tier-badge ae-tier-high">High</span>
                      </td>
                      <td className="p-3 text-gray-400">
                        Provider named, procedure named, experience described
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 text-gray-300">
                        &quot;Dr. Patel fixed my cracked molar with a crown, no pain, done in two visits&quot;
                      </td>
                      <td className="p-3">
                        <span className="ae-tier-badge ae-tier-premium">Premium</span>
                      </td>
                      <td className="p-3 text-gray-400">
                        Provider, procedure, outcome, timeline: maximum signal density
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <p>
              Seventy-six percent of healthcare consumers say they trust
              AI-summarized recommendations when they come from verified reviews.
              This trust dynamic is important: AI is not just pulling your star
              rating. It is reading the review text, extracting entities, and
              using that to understand what your practice does well.
            </p>

            <div className="ae-quote not-prose">
              <blockquote>
                &quot;The practices showing up in AI recommendations are not
                necessarily the ones with the most reviews. They are the ones
                whose reviews teach AI the most about what they actually do.&quot;
              </blockquote>
              <cite>The Answer Engine Team</cite>
            </div>

            <p>
              Review responses also matter, though in a secondary way. When a
              practice owner responds to reviews by name, mentions the procedure,
              and expresses specific follow-up, that adds to the review&apos;s signal
              density. It also signals to AI that there is an engaged, accountable
              human behind the practice, which is a trust signal for healthcare
              in particular.
            </p>

            {/* SECTION 5: DIRECTORIES */}
            <span className="ae-section-label" id="directories">
              Directories
            </span>
            <h2>Directories That Feed AI Recommendations</h2>

            <p>
              Not all directories are equal in AI&apos;s eyes. General business
              directories like Yelp and Foursquare have some value, but for
              dental AI visibility, the signal weight belongs to healthcare-specific
              platforms that AI engines have learned to trust for medical
              provider data.
            </p>

            <div className="not-prose my-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-3 mb-3">
                  <span className="ae-tier-badge ae-tier-premium">Tier 1</span>
                  <span className="font-semibold text-white">Healthgrades</span>
                </div>
                <p className="text-sm text-gray-400">
                  The most AI-cited healthcare directory. Claimed, complete
                  profiles with verified credentials are read by Google AI
                  Overviews, Perplexity, and ChatGPT. Missing here means missing
                  almost everywhere.
                </p>
              </div>
              <div className="p-5 rounded-xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-3 mb-3">
                  <span className="ae-tier-badge ae-tier-premium">Tier 1</span>
                  <span className="font-semibold text-white">Zocdoc</span>
                </div>
                <p className="text-sm text-gray-400">
                  Zocdoc&apos;s structured provider data feeds directly into AI
                  recommendations, particularly for queries about appointment
                  availability, insurance acceptance, and new patient openings.
                </p>
              </div>
              <div className="p-5 rounded-xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-3 mb-3">
                  <span className="ae-tier-badge ae-tier-high">Tier 2</span>
                  <span className="font-semibold text-white">WebMD</span>
                </div>
                <p className="text-sm text-gray-400">
                  WebMD&apos;s provider directory is frequently cited by AI when
                  patients ask about specific conditions or procedures. Having a
                  complete profile here amplifies your procedure-level visibility.
                </p>
              </div>
              <div className="p-5 rounded-xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-3 mb-3">
                  <span className="ae-tier-badge ae-tier-high">Tier 2</span>
                  <span className="font-semibold text-white">
                    ADA Find-a-Dentist
                  </span>
                </div>
                <p className="text-sm text-gray-400">
                  The American Dental Association directory is a credentialing
                  signal. AI platforms treat ADA membership as a trust marker for
                  dental providers, similar to how they treat bar association
                  listing for lawyers.
                </p>
              </div>
            </div>

            <p>
              The key is not just being listed on these platforms but having
              complete, verified, and NAP-consistent profiles on all of them. An
              incomplete Healthgrades profile with missing insurance information
              or an unverified credential is worse than not being listed at all in
              some cases, because it signals an unfinished or abandoned presence.
            </p>

            <p>
              For a deeper look at how directories feed AI recommendation engines
              across industries, our guide on{' '}
              <Link href="/blog/directory-listings-that-help-ai-find-business">
                directory listings that help AI find your business
              </Link>{' '}
              covers the mechanics in detail.
            </p>

            {/* INLINE CTA 3 */}
            <div className="ae-cta-inline not-prose">
              <p className="text-sm text-gray-400 mb-3">
                Most dental practices are missing at least two of the four
                critical directories.
              </p>
              <Link
                href="/blindspot"
                className="inline-flex items-center gap-2 text-[#FF6A00] font-semibold hover:underline"
              >
                See which directories you&apos;re missing
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
            </div>

            {/* SECTION 6: SERVICE PAGES */}
            <span className="ae-section-label" id="service-pages">
              Content
            </span>
            <h2>Service Pages That Get Cited by AI</h2>

            <p>
              A dental practice website that lists services in a navigation menu
              is not the same as one that has dedicated, content-rich pages for
              each procedure. AI platforms need depth to cite confidently. A
              single page that mentions Invisalign, teeth whitening, dental
              implants, and pediatric dentistry in passing provides almost no
              citation-worthy content. Individual pages for each service, built
              with the right structure, are what AI can actually read and
              reference.
            </p>

            <p>
              The structure that works best for dental service pages mirrors how
              AI platforms expect healthcare content to be organized: what the
              procedure is, who it is for, what the process involves, what
              patients can expect for recovery or results, and what questions
              patients commonly ask. This is not writing for search engines. It is
              writing for the AI that sits between the search engine and your
              patient.
            </p>

            <div className="ae-callout-success not-prose">
              <strong>What a High-Signal Service Page Includes</strong>
              <ul className="mt-2 space-y-1 text-sm text-gray-300">
                <li>Clear procedure name in the H1 and page title</li>
                <li>Who is a good candidate for this procedure</li>
                <li>What the process involves at your practice specifically</li>
                <li>How long it takes and what recovery looks like</li>
                <li>Provider credentials for this specific service</li>
                <li>Patient outcomes and review quotes relevant to this procedure</li>
                <li>FAQ section addressing common patient questions</li>
                <li>Insurance and payment information</li>
              </ul>
            </div>

            <p>
              The &quot;protect the sauce&quot; principle applies here: we are not giving
              you a content assembly line. The point is that AI platforms are
              looking for depth and specificity, not keyword density. A
              well-written page about dental implants that reads like it was
              written by someone who actually understands the procedure will
              outperform a keyword-stuffed page built for a 2015 SEO strategy
              every time in AI recommendations.
            </p>

            <div className="ae-takeaway not-prose">
              <strong>Key Takeaway:</strong> Dental service pages should be
              written for the patient who wants to understand the procedure before
              calling. When AI reads that content, it gets what it needs to
              recommend you for procedure-specific queries.
            </div>

            {/* SECTION 7: SCHEMA */}
            <span className="ae-section-label" id="schema">
              Technical
            </span>
            <h2>Schema Markup for Dental Practices</h2>

            <p>
              Schema markup is structured data you add to your website that tells
              search engines and AI crawlers exactly what your pages contain,
              without requiring them to interpret your content probabilistically.
              For dental practices, the right schema implementation closes the gap
              between &quot;AI can sort of figure out what this practice does&quot; and
              &quot;AI knows precisely what this practice does, where it is, who the
              providers are, and what they specialize in.&quot;
            </p>

            <p>
              The schema types that matter most for dental practices are
              LocalBusiness (with the Dentist subtype), MedicalOrganization,
              Physician for individual providers, and Service for each procedure
              offered. FAQPage schema on service pages is particularly powerful
              because it directly feeds the question-and-answer format that AI
              platforms use to construct responses.
            </p>

            <p>
              Our detailed guide on{' '}
              <Link href="/blog/does-schema-markup-help-ai-search">
                whether schema markup helps AI search
              </Link>{' '}
              explains the underlying mechanics. The short answer: yes, it does,
              and it is one of the highest-leverage technical changes a dental
              practice can make because it requires no ongoing effort once
              implemented correctly.
            </p>

            <div className="ae-callout-info not-prose">
              <strong>Schema Is Not Optional for Healthcare</strong>
              <p>
                AI platforms apply higher evidence standards to healthcare
                recommendations because the consequences of a bad recommendation
                are more serious than recommending the wrong pizza place. Schema
                markup is one of the clearest ways to reduce AI uncertainty about
                what your practice is and who it serves.
              </p>
            </div>

            {/* SECTION 8: PATIENT JOURNEY */}
            <span className="ae-section-label" id="patient-journey">
              Patient Journey
            </span>
            <h2>The AI-Driven Patient Journey</h2>

            <p>
              Understanding how AI fits into the path from &quot;I need a dentist&quot; to
              &quot;I booked an appointment&quot; helps clarify what your practice needs to
              do at each stage. The journey has shifted significantly in the last
              two years.
            </p>

            {/* TIMELINE */}
            <div className="ae-timeline not-prose">
              <div className="ae-timeline-item">
                <div className="ae-timeline-marker">1</div>
                <div className="ae-timeline-content">
                  <div className="ae-timeline-title">Symptom or Need Recognition</div>
                  <div className="ae-timeline-desc">
                    Patient notices a toothache, wants whiter teeth, or knows
                    they are overdue for a cleaning. The search begins not on
                    Google but increasingly on AI: &quot;What do I do about tooth
                    sensitivity?&quot; or &quot;How much does Invisalign cost?&quot;
                  </div>
                </div>
              </div>
              <div className="ae-timeline-item">
                <div className="ae-timeline-marker">2</div>
                <div className="ae-timeline-content">
                  <div className="ae-timeline-title">AI Overview or Chatbot Research</div>
                  <div className="ae-timeline-desc">
                    Google AI Overview surfaces educational content about the
                    condition or procedure, often citing specific practices nearby.
                    ChatGPT or Perplexity may be asked directly for dentist
                    recommendations. Practices with strong signals appear here.
                  </div>
                </div>
              </div>
              <div className="ae-timeline-item">
                <div className="ae-timeline-marker">3</div>
                <div className="ae-timeline-content">
                  <div className="ae-timeline-title">Provider Comparison</div>
                  <div className="ae-timeline-desc">
                    Patient visits the two or three practices mentioned by AI.
                    They check Healthgrades, read reviews on Google, look at
                    the website. Practices with deep service pages and strong
                    review content convert better at this stage.
                  </div>
                </div>
              </div>
              <div className="ae-timeline-item">
                <div className="ae-timeline-marker">4</div>
                <div className="ae-timeline-content">
                  <div className="ae-timeline-title">Decision and Booking</div>
                  <div className="ae-timeline-desc">
                    Patient books the appointment, often online. If you made
                    it to this stage, you were likely cited by AI in step two
                    or ranked well enough in the directory research in step
                    three. Getting into the AI recommendation is what gets
                    you considered at all.
                  </div>
                </div>
              </div>
            </div>

            <p>
              The critical insight is that AI has inserted itself at step two of
              a journey that used to go straight from need recognition to Google
              search. Practices that are not present at step two are never
              considered. The patient never searches for them directly. They rely
              on what the AI surfaced, and if that list does not include your
              practice, the journey ends without you.
            </p>

            <p>
              For more on how this shift affects the full patient acquisition
              funnel, our piece on{' '}
              <Link href="/blog/how-ai-search-changes-sales-funnel">
                how AI search changes the sales funnel
              </Link>{' '}
              covers the broader mechanics.
            </p>

            {/* INLINE CTA 4 */}
            <div className="ae-cta-inline not-prose">
              <p className="text-sm text-gray-400 mb-3">
                Is your practice in the AI recommendation at step two? Find out.
              </p>
              <Link
                href="/blindspot"
                className="inline-flex items-center gap-2 text-[#FF6A00] font-semibold hover:underline"
              >
                Run your free Blind Spot Report
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
            </div>

            {/* SECTION 9: MISTAKES */}
            <span className="ae-section-label" id="mistakes">
              Common Mistakes
            </span>
            <h2>The 5 Mistakes Keeping Dentists Off AI</h2>

            <p>
              Most dental practices that are invisible to AI are not doing
              anything dramatically wrong. They are doing a collection of smaller
              things incorrectly that compound into a signal profile AI does not
              trust enough to cite. Here are the five most common.
            </p>

            {/* PROS/CONS */}
            <div className="ae-pros-cons not-prose">
              <div className="ae-pros">
                <div className="ae-pros-title">What AI-Visible Practices Do</div>
                <ul>
                  <li>Identical NAP across every listing and the website</li>
                  <li>75+ Google reviews with procedure mentions</li>
                  <li>Claimed and complete profiles on all four key directories</li>
                  <li>Individual service pages for each procedure offered</li>
                  <li>Dentist and MedicalOrganization schema on every relevant page</li>
                  <li>Google Business Profile updated monthly with posts and photos</li>
                  <li>Provider credentials and license numbers visible on site</li>
                </ul>
              </div>
              <div className="ae-cons">
                <div className="ae-cons-title">What Keeps Practices Invisible</div>
                <ul>
                  <li>Business name formatted differently across platforms</li>
                  <li>Generic reviews with no procedure or provider mention</li>
                  <li>Unclaimed or incomplete Healthgrades/Zocdoc profiles</li>
                  <li>One &quot;Services&quot; page listing everything without depth</li>
                  <li>No schema markup or outdated schema from 2019</li>
                  <li>GBP last updated 6+ months ago, no recent photos</li>
                  <li>No credentials listed on provider bio pages</li>
                </ul>
              </div>
            </div>

            <p>
              The fifth mistake, and arguably the most damaging, is treating AI
              visibility as a one-time fix. AI platforms continuously update their
              understanding of your practice. A Healthgrades profile you claimed
              and completed two years ago but never updated looks stale compared
              to a competitor who posts updates regularly. Freshness is a signal,
              particularly for healthcare where circumstances change: new
              providers join, insurance networks shift, new technology is adopted.
            </p>

            <div className="ae-callout-warning not-prose">
              <strong>Weak Google Business Profile Costs More Than You Think</strong>
              <p>
                Google AI Overviews pull directly from Google Business Profile
                data when constructing local dental recommendations. A GBP with
                outdated photos, no recent posts, missing service categories, or
                an unverified address actively suppresses your AI visibility on
                the platform that triggers 75% of dental search AI Overviews. Our
                full guide on{' '}
                <Link href="/blog/how-to-optimize-your-google-business-profile-for-ai">
                  optimizing your Google Business Profile for AI
                </Link>{' '}
                covers exactly what needs to change.
              </p>
            </div>

            {/* SECTION 10: DECISION MATRIX */}
            <span className="ae-section-label" id="decision-matrix">
              Self-Assessment
            </span>
            <h2>Am I Visible on AI Search? A Self-Assessment</h2>

            <p>
              Use this matrix to evaluate where your practice stands. Each row
              represents a signal AI platforms use. The more green columns you
              are in, the stronger your AI visibility.
            </p>

            <div className="ae-decision-matrix not-prose">
              <table className="w-full text-sm">
                <thead>
                  <tr>
                    <th className="text-left p-3 text-gray-400 font-semibold border-b border-white/10 w-1/3">
                      Signal
                    </th>
                    <th className="text-center p-3 text-gray-400 font-semibold border-b border-white/10">
                      Invisible
                    </th>
                    <th className="text-center p-3 text-gray-400 font-semibold border-b border-white/10">
                      Partial
                    </th>
                    <th className="text-center p-3 text-gray-400 font-semibold border-b border-white/10">
                      Visible
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      signal: 'NAP Consistency',
                      invisible: 'Different name/address on 3+ platforms',
                      partial: 'Minor formatting differences',
                      visible: 'Exact match across all listings',
                    },
                    {
                      signal: 'Google Reviews',
                      invisible: 'Under 25 reviews',
                      partial: '25-74 reviews, mostly generic',
                      visible: '75+ reviews with procedure mentions',
                    },
                    {
                      signal: 'Healthcare Directories',
                      invisible: 'Not listed on Healthgrades or Zocdoc',
                      partial: 'Listed but profile incomplete',
                      visible: 'Complete, verified, updated profiles',
                    },
                    {
                      signal: 'Service Pages',
                      invisible: 'Single services page',
                      partial: 'Some individual pages, thin content',
                      visible: 'Deep pages for every procedure',
                    },
                    {
                      signal: 'Schema Markup',
                      invisible: 'No schema on site',
                      partial: 'Basic LocalBusiness schema only',
                      visible: 'Dentist, MedicalOrg, Service, FAQ schema',
                    },
                    {
                      signal: 'Google Business Profile',
                      invisible: 'Unclaimed or unverified',
                      partial: 'Claimed but not regularly updated',
                      visible: 'Verified, complete, active monthly',
                    },
                  ].map((row) => (
                    <tr key={row.signal} className="border-b border-white/5">
                      <td className="p-3 font-medium text-white">{row.signal}</td>
                      <td className="p-3 text-center text-red-400 text-xs">
                        {row.invisible}
                      </td>
                      <td className="p-3 text-center text-yellow-400 text-xs">
                        {row.partial}
                      </td>
                      <td className="p-3 text-center text-green-400 text-xs">
                        {row.visible}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p>
              If you are in the &quot;Invisible&quot; column for two or more signals, your
              practice is almost certainly not appearing in AI recommendations for
              competitive dental queries in your area. If you are &quot;Partial&quot; across
              the board, you may appear occasionally but will not hold a
              consistent presence. The goal is &quot;Visible&quot; across all six.
            </p>

            {/* SECTION 11: CHEAT SHEET */}
            <span className="ae-section-label" id="cheat-sheet">
              Cheat Sheet
            </span>
            <h2>AI Visibility Cheat Sheet for Dental Practices</h2>

            <div className="ae-cheat-sheet not-prose">
              <div className="ae-cheat-sheet-title">
                Dental Practice AI Visibility Checklist
              </div>
              <div className="ae-cheat-sheet-grid">
                <div className="ae-cheat-section">
                  <div className="ae-cheat-section-title">Data Foundation</div>
                  <ul>
                    <li>Audit every directory listing for exact NAP match</li>
                    <li>Standardize practice name format across all platforms</li>
                    <li>Verify and claim Google Business Profile</li>
                    <li>Add all service categories to GBP</li>
                    <li>Upload recent, high-quality photos monthly</li>
                  </ul>
                </div>
                <div className="ae-cheat-section">
                  <div className="ae-cheat-section-title">Reviews</div>
                  <ul>
                    <li>Build toward 75+ Google reviews with procedure mentions</li>
                    <li>Respond to every review by name and procedure</li>
                    <li>Request reviews from patients after specific procedures</li>
                    <li>Avoid generic review language in request templates</li>
                  </ul>
                </div>
                <div className="ae-cheat-section">
                  <div className="ae-cheat-section-title">Directory Presence</div>
                  <ul>
                    <li>Claim and complete Healthgrades provider profile</li>
                    <li>Set up Zocdoc with accurate insurance and availability</li>
                    <li>Complete WebMD provider directory listing</li>
                    <li>Verify ADA Find-a-Dentist listing with current info</li>
                  </ul>
                </div>
                <div className="ae-cheat-section">
                  <div className="ae-cheat-section-title">Website and Schema</div>
                  <ul>
                    <li>Create individual pages for each procedure offered</li>
                    <li>Add FAQ sections to every service page</li>
                    <li>Implement Dentist and MedicalOrganization schema</li>
                    <li>Add Service schema for each procedure page</li>
                    <li>List provider credentials and license numbers on bios</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* INLINE CTA 5 */}
            <div className="ae-cta-inline not-prose">
              <p className="text-sm text-gray-400 mb-3">
                Want to know your current score on each of these signals?
              </p>
              <Link
                href="/blindspot"
                className="inline-flex items-center gap-2 text-[#FF6A00] font-semibold hover:underline"
              >
                Get your free dental practice AI audit
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
            </div>

            {/* THE COMPETITIVE REALITY */}
            <span className="ae-section-label">Competitive Landscape</span>
            <h2>The Competitive Reality: Who Is Already Winning</h2>

            <p>
              In most metro markets, the dental practices consistently appearing
              in AI recommendations share a common profile. They are not
              necessarily the largest practices, the most expensive, or the ones
              with the biggest advertising budgets. They are the ones whose data
              infrastructure AI finds easiest to work with.
            </p>

            <p>
              Practices with 100 or more reviews that mention procedures by name,
              complete and verified profiles on all four key directories, active
              Google Business Profiles with monthly posts, individual service
              pages for at least eight procedures, and basic schema markup
              implemented correctly are capturing a disproportionate share of the
              AI recommendations in their markets.
            </p>

            <p>
              The window for easy gains is closing. As more practices become aware
              of AI visibility and begin building their signal profiles, the
              baseline will rise. Practices that build this infrastructure in 2026
              will be defending a position rather than trying to catch up when the
              threshold rises in 2027 and beyond.
            </p>

            <div className="ae-quote not-prose">
              <blockquote>
                &quot;AI search is not a trend that dental practices can wait to see
                play out. The practices getting found today are building habits
                that compound. The ones waiting are falling behind on a curve that
                gets steeper over time.&quot;
              </blockquote>
              <cite>The Answer Engine Team</cite>
            </div>

            {/* 3-TIER CTA BLOCK */}
            <div className="not-prose my-16 p-8 rounded-2xl bg-gradient-to-br from-[#FF6A00]/10 to-transparent border border-[#FF6A00]/20">
              <h3 className="font-plus-jakarta text-2xl font-bold text-white mb-3">
                Is Your Dental Practice Showing Up on AI?
              </h3>
              <p className="text-gray-400 mb-6">
                Find out exactly where AI platforms stand on your practice with a
                free Blind Spot Report. We show you who&apos;s being recommended and
                why.
              </p>
              <Link
                href="/blindspot"
                className="inline-flex items-center gap-2 bg-[#FF6A00] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#e55f00] transition-colors"
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
              <div className="flex flex-wrap items-center gap-6 mt-6 pt-6 border-t border-[#FF6A00]/10">
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
            <div className="ae-author-card not-prose">
              <div className="ae-author-avatar">AE</div>
              <div>
                <div className="font-semibold text-white">
                  The Answer Engine Team
                </div>
                <div className="text-sm text-gray-400">
                  AI Search Visibility Experts
                </div>
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
                  q: 'Do dental practices really show up in AI search results?',
                  a: 'Yes. AI Overviews from Google appear on 75% of dental search queries, and ChatGPT, Perplexity, and Gemini all surface dental recommendations when patients ask questions like "best dentist near me" or "who does Invisalign in [city]." Practices that have structured their online presence correctly get cited regularly. Those that have not are invisible to this growing channel.',
                },
                {
                  q: 'How many reviews does a dental practice need to get recommended by AI?',
                  a: 'Research shows AI systems favor practices with 75 or more Google reviews that mention specific procedures. Generic five-star reviews carry far less weight than reviews that name the procedure performed, the provider, and a specific outcome. Quantity matters, but specificity is what makes AI platforms confident enough to cite a practice.',
                },
                {
                  q: 'Which directories matter most for dental AI visibility?',
                  a: 'The four directories with the strongest signal for dental AI visibility are Healthgrades, Zocdoc, WebMD, and the ADA Find-a-Dentist directory. Each of these platforms is indexed and trusted by major AI engines. Being listed accurately on all four, with matching NAP data, is a baseline requirement. Missing or inconsistent listings actively suppress AI recommendations.',
                },
                {
                  q: 'What is NAP consistency and why does it matter for dentists in AI?',
                  a: 'NAP stands for Name, Address, and Phone number. AI platforms cross-reference your practice information across dozens of sources before recommending you. If your practice name is listed differently on Google Business Profile, Healthgrades, Yelp, and your website, AI systems interpret the inconsistency as a reliability signal against your practice. Even small differences like "Suite 200" vs "Ste 200" can create confusion that suppresses recommendations.',
                },
                {
                  q: 'Does schema markup actually help dental practices in AI search?',
                  a: 'Yes, significantly. Dental practices that implement DentistSchema, LocalBusiness, and MedicalOrganization schema give AI crawlers structured data they can confidently read and cite. Without schema, AI has to interpret your website content probabilistically, which introduces uncertainty and reduces citation likelihood. Schema markup essentially translates your practice information into a language AI platforms prefer.',
                },
                {
                  q: 'How long before a dental practice starts appearing in AI search results?',
                  a: 'Most practices that implement a structured AI visibility strategy begin seeing mentions within 60 to 90 days. Building the directory presence, resolving NAP inconsistencies, and publishing procedure-specific content all compound over time. Practices in less competitive markets often see results faster. The key is that the underlying signals need to be consistent before AI platforms build enough confidence to recommend you.',
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
                  href="/blog/does-schema-markup-help-ai-search"
                  className="group p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#FF6A00]/30 transition-colors"
                >
                  <div className="text-xs text-[#FF6A00] font-semibold uppercase tracking-wide mb-2">
                    Technical
                  </div>
                  <div className="text-sm font-medium text-white group-hover:text-[#FF6A00] transition-colors leading-snug">
                    Does Schema Markup Help AI Search?
                  </div>
                </Link>
                <Link
                  href="/blog/how-to-optimize-your-google-business-profile-for-ai"
                  className="group p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#FF6A00]/30 transition-colors"
                >
                  <div className="text-xs text-[#FF6A00] font-semibold uppercase tracking-wide mb-2">
                    Google
                  </div>
                  <div className="text-sm font-medium text-white group-hover:text-[#FF6A00] transition-colors leading-snug">
                    How to Optimize Your Google Business Profile for AI
                  </div>
                </Link>
                <Link
                  href="/blog/my-business-disappeared-from-ai-search-results-overnight"
                  className="group p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#FF6A00]/30 transition-colors"
                >
                  <div className="text-xs text-[#FF6A00] font-semibold uppercase tracking-wide mb-2">
                    Troubleshooting
                  </div>
                  <div className="text-sm font-medium text-white group-hover:text-[#FF6A00] transition-colors leading-snug">
                    My Business Disappeared from AI Search Results Overnight
                  </div>
                </Link>
              </div>
            </div>

            {/* FINAL CTA */}
            <div className="ae-final-cta not-prose">
              <h2 className="font-plus-jakarta text-3xl font-bold text-white mb-4">
                Ready to Get Your Dental Practice Found on AI?
              </h2>
              <p className="text-gray-300 mb-8 text-lg">
                Stop losing new patients to AI-invisible competitors. Get your
                free Blind Spot Report and see exactly where you stand.
              </p>
              <Link
                href="/blindspot"
                className="inline-flex items-center gap-3 bg-[#FF6A00] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#e55f00] transition-all duration-200 shadow-[0_0_30px_rgba(255,106,0,0.4)] hover:shadow-[0_0_50px_rgba(255,106,0,0.6)]"
              >
                Get Your Free Blind Spot Report
                <svg
                  className="w-5 h-5"
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
            </div>

          </div>
        </article>
      </main>
    </>
  )
}
