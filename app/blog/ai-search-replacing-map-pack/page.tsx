import type { Metadata } from 'next'
import Link from 'next/link'

export const revalidate = 86400
export const dynamic = 'force-static'
export const dynamicParams = true

export const metadata: Metadata = {
  title: 'AI Search Is Replacing the Map Pack: What Local Businesses Must Know | The Answer Engine',
  description: 'AI local packs show 68% fewer businesses than the traditional Map Pack. Learn how AI search is reshaping local discovery and what your business must do to stay visible.',
  keywords: [
    'AI search local businesses',
    'Google Map Pack',
    'AI local pack',
    'local SEO 2026',
    'AI Overviews local search',
    'Google AI Mode',
    'Ask Maps',
    'zero-click searches',
    'local business visibility',
    'answer engine optimization',
  ],
  authors: [{ name: 'The Answer Engine Team' }],
  openGraph: {
    title: 'AI Search Is Replacing the Map Pack: What Local Businesses Must Know',
    description: 'AI local packs show 68% fewer businesses than the traditional Map Pack. Learn how AI search is reshaping local discovery and what your business must do to stay visible.',
    url: 'https://theanswerengine.ai/blog/ai-search-replacing-map-pack',
    siteName: 'The Answer Engine',
    type: 'article',
    publishedTime: '2026-03-17T00:00:00Z',
    authors: ['The Answer Engine Team'],
    tags: [
      'AI Search',
      'Map Pack',
      'Local SEO',
      'AI Overviews',
      'Local Business Visibility',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Search Is Replacing the Map Pack: What Local Businesses Must Know',
    description: 'AI local packs show 68% fewer businesses than the traditional Map Pack. Learn how AI search is reshaping local discovery and what your business must do to stay visible.',
    site: '@theanswerengine',
  },
  alternates: {
    canonical: 'https://theanswerengine.ai/blog/ai-search-replacing-map-pack',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      '@id': 'https://theanswerengine.ai/blog/ai-search-replacing-map-pack#article',
      headline: 'AI Search Is Replacing the Map Pack: What Local Businesses Must Know',
      description:
        'AI local packs show 68% fewer businesses than the traditional Map Pack. Learn how AI search is reshaping local discovery and what your business must do to stay visible.',
      datePublished: '2026-03-17T00:00:00Z',
      dateModified: '2026-03-17T00:00:00Z',
      author: {
        '@type': 'Organization',
        name: 'The Answer Engine Team',
        url: 'https://theanswerengine.ai',
      },
      publisher: {
        '@type': 'Organization',
        name: 'The Answer Engine',
        url: 'https://theanswerengine.ai',
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://theanswerengine.ai/blog/ai-search-replacing-map-pack',
      },
      keywords:
        'AI search local businesses, Google Map Pack, AI local pack, local SEO 2026, AI Overviews local search, Google AI Mode, zero-click searches',
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://theanswerengine.ai/blog/ai-search-replacing-map-pack#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is the Google Map Pack going away completely?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The traditional Map Pack is not disappearing entirely, but it is being replaced in many searches by AI-powered local packs. According to Sterling Sky research, AI local packs surface only 32% as many unique businesses as traditional Map Packs, and in 88% of 322 analyzed markets, total visible businesses declined.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do AI local packs differ from the traditional Map Pack?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Traditional Map Packs display three businesses with map pins, ratings, and basic info. AI local packs use generative AI to recommend fewer businesses (often one or two instead of three) based on synthesized review data, website content, and relevance signals. They prioritize "best answer" over proximity alone.',
          },
        },
        {
          '@type': 'Question',
          name: 'What percentage of local searches now end without a click?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'According to Similarweb mobile trend data, local-intent searches such as "near me" queries produce up to 78% zero-click outcomes. Overall, 58.5% of all U.S. Google searches end without a single click to any website, per Semrush data from 2025.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is Google Ask Maps and how does it affect local businesses?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ask Maps is a conversational AI feature announced by Google in March 2026. It lets users ask natural-language questions about places and receive personalized, AI-generated responses with business listings, review summaries, and actionable options like booking and directions. It shifts discovery from browsing map pins to getting curated AI answers.',
          },
        },
        {
          '@type': 'Question',
          name: 'How hard is it for local businesses to appear in AI search results?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'According to SOCi research reported by Search Engine Land, AI visibility is 3 to 30 times harder to achieve than ranking in traditional local search. Only 1.2% of locations were recommended by ChatGPT, 11% by Gemini, and 7.4% by Perplexity, compared to 35.9% appearing in Google\'s local 3-pack.',
          },
        },
        {
          '@type': 'Question',
          name: 'What should local businesses do to prepare for AI-driven search?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Local businesses should focus on structured data and entity optimization, maintain consistent NAP (name, address, phone) across all directories, actively manage reviews, publish authoritative content that answers common customer questions, and ensure their Google Business Profile is complete with rich media, FAQs, and regular updates.',
          },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://theanswerengine.ai/blog/ai-search-replacing-map-pack#breadcrumb',
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
          name: 'AI Search Is Replacing the Map Pack',
          item: 'https://theanswerengine.ai/blog/ai-search-replacing-map-pack',
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
          AI Search Is Replacing the Map Pack
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
              <circle cx="200" cy="200" r="180" stroke="#FF6A00" strokeWidth="0.5" />
              <circle cx="200" cy="200" r="120" stroke="#FF6A00" strokeWidth="0.5" />
              <circle cx="200" cy="200" r="60" stroke="#FF6A00" strokeWidth="0.5" />
              <rect x="450" y="50" width="120" height="120" stroke="#FF6A00" strokeWidth="0.4" fill="none" />
              <rect x="480" y="80" width="60" height="60" stroke="#FF6A00" strokeWidth="0.4" fill="none" />
              <line x1="0" y1="150" x2="800" y2="150" stroke="#FF6A00" strokeWidth="0.3" />
              <line x1="0" y1="250" x2="800" y2="250" stroke="#FF6A00" strokeWidth="0.3" />
              <line x1="300" y1="0" x2="300" y2="400" stroke="#FF6A00" strokeWidth="0.3" />
              <line x1="600" y1="0" x2="600" y2="400" stroke="#FF6A00" strokeWidth="0.3" />
              <polygon
                points="550,300 650,180 750,300"
                stroke="#FF6A00"
                strokeWidth="0.5"
                fill="none"
              />
              <circle cx="650" cy="320" r="40" stroke="#FF6A00" strokeWidth="0.4" />
            </svg>
            <div className="relative px-8 py-16 sm:px-12 sm:py-20">
              <p className="text-sm font-medium text-orange-400 mb-4">AEO Education</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 font-plus-jakarta">
                AI Search Is Replacing the Map Pack: What Local Businesses Must Know
              </h1>
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span>March 17, 2026</span>
                <span>-</span>
                <span>9 min read</span>
                <span>-</span>
                <span>The Answer Engine Team</span>
              </div>
            </div>
          </div>

          {/* Article Body */}
          <article className="prose prose-invert prose-lg max-w-none">

            {/* Intro */}
            <p className="text-xl text-gray-300 leading-relaxed mb-10">
              For years, the Google Map Pack was the golden ticket for local businesses. If your
              company showed up in those three blue pins at the top of a local search, you were
              getting calls. You were getting clicks. You were winning customers. That era is
              ending. AI-powered search is quietly replacing the Map Pack as the primary way
              people discover local services, and most business owners have no idea it is happening.
            </p>

            {/* Section 1 */}
            <h2 className="text-2xl font-bold text-white mt-12 mb-4 font-plus-jakarta">
              The Map Pack Ruled Local Search for a Decade. That Is Changing.
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              The local 3-pack has been the dominant feature in local search since Google introduced
              it. When someone searched for &quot;plumber near me&quot; or &quot;best dentist in
              Dallas,&quot; the top of the page showed three businesses with their ratings, hours,
              and a map pin. Getting into that 3-pack was the single most important goal for any
              local business doing SEO.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              But Google is now layering AI-generated results on top of everything. AI Overviews
              appear in <strong className="text-white">40.2% of queries related to local
              businesses</strong> as of early 2025. And here is the critical detail: when both an
              AI Overview and a Map Pack appear on the same search results page, the AI Overview
              comes first. The Map Pack gets pushed below the fold.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              According to research published by Search Engine Roundtable, only 1% of queries
              trigger both AI Overviews and Map Packs in the same set of results. In most cases,
              it is one or the other. And increasingly, Google is choosing the AI answer.
            </p>

            {/* Stat Callout 1 */}
            <div className="rounded-xl border border-orange-500/30 bg-orange-500/5 p-6 my-8">
              <p className="text-orange-400 font-semibold text-lg mb-2">The Visibility Crisis in Numbers</p>
              <p className="text-gray-300 text-base leading-relaxed">
                AI local packs surface only <strong className="text-white">32% as many unique
                businesses</strong> as traditional Map Packs. In <strong className="text-white">88%
                of the 322 markets analyzed</strong> by Sterling Sky, the total number of unique
                businesses visible to searchers has declined. Where the old Map Pack showed three
                businesses, AI local packs often show just one or two.
              </p>
            </div>

            {/* Section 2 */}
            <h2 className="text-2xl font-bold text-white mt-12 mb-4 font-plus-jakarta">
              Zero-Click Searches Are Hollowing Out Local Traffic
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              The shift to AI answers is accelerating a trend that was already hurting local
              businesses: zero-click searches. These are searches where the user gets everything
              they need directly from the search results page without clicking through to any
              website.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              According to Semrush data, <strong className="text-white">58.5% of all U.S. Google
              searches</strong> now end without a single click to any website. For local-intent
              searches specifically, the numbers are even worse. Similarweb mobile trend data shows
              that &quot;near me&quot; queries produce up to <strong className="text-white">78%
              zero-click outcomes</strong>.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Think about what that means for a local roofing company, a family dentist, or a
              personal injury attorney. A potential customer searches for your service. Google shows
              them your hours, your reviews, your address, and a summary of what you do. They call
              directly from the search page. Or they just read the AI summary and move on. Your
              website never enters the picture.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              As GMBapi.com documented in their 2026 analysis, many local businesses are
              experiencing steady rankings but vanishing phone calls. The rankings look fine in the
              dashboard. The calls are disappearing because the customer journey no longer requires
              a click.
            </p>

            {/* Section 3 */}
            <h2 className="text-2xl font-bold text-white mt-12 mb-4 font-plus-jakarta">
              Google AI Mode and Ask Maps: The Next Wave
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              If AI Overviews were the opening act, Google AI Mode and Ask Maps are the main event.
              Google AI Mode delivers comprehensive, conversational AI responses to search queries.
              Instead of scanning a list of results, users have a conversation with Google and get
              a curated answer.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Then on March 12, 2026, Google announced what it called the &quot;biggest navigation
              upgrade in over a decade.&quot; The update introduced <strong className="text-white">Ask
              Maps</strong>, a conversational AI feature built directly into Google Maps. Users can
              now ask natural-language questions like &quot;Where can I get my car detailed this
              Saturday morning?&quot; and receive personalized, AI-generated responses complete with
              business listings, review summaries, and booking options.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              This is a fundamental shift in how local discovery works. Instead of scrolling through
              map pins and comparing star ratings, customers are now asking questions and getting
              curated recommendations. The businesses that AI chooses to feature in those answers
              win. Everyone else becomes invisible.
            </p>

            {/* Stat Callout 2 */}
            <div className="rounded-xl border border-orange-500/30 bg-orange-500/5 p-6 my-8">
              <p className="text-orange-400 font-semibold text-lg mb-2">AI Visibility Is Dramatically Harder to Earn</p>
              <p className="text-gray-300 text-base leading-relaxed">
                According to SOCi research reported by Search Engine Land, AI visibility is{' '}
                <strong className="text-white">3 to 30 times harder</strong> to achieve than
                ranking in traditional local search. Only <strong className="text-white">1.2% of
                locations</strong> were recommended by ChatGPT, 11% by Gemini, and 7.4% by
                Perplexity. Compare that to <strong className="text-white">35.9%</strong> appearing
                in Google&apos;s traditional local 3-pack.
              </p>
            </div>

            {/* Section 4 */}
            <h2 className="text-2xl font-bold text-white mt-12 mb-4 font-plus-jakarta">
              Paid Ads Are Eating Into the Map Pack Too
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              The AI transformation is not the only force shrinking organic local visibility. Google
              has been aggressively expanding paid advertising inside local search results. At the
              start of 2025, local pack ads appeared on only about 1% of mobile reports. By January
              2026, that number had jumped to nearly <strong className="text-white">22%</strong>,
              according to Sterling Sky tracking data.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              This means the spots that were once reserved exclusively for organically ranked local
              businesses are now being sold to advertisers. Between AI local packs showing fewer
              businesses and paid ads taking up more of the remaining space, the organic local
              visibility that small businesses depended on is being compressed from both sides.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              For local businesses with tight marketing budgets, this is a double hit. The free
              visibility they relied on from the Map Pack is shrinking, and the cost to maintain
              visibility through ads keeps climbing. The businesses that adapt to this new reality
              early will have a significant advantage. Those who wait will find themselves paying
              more for less.
            </p>

            {/* Section 5 */}
            <h2 className="text-2xl font-bold text-white mt-12 mb-4 font-plus-jakarta">
              What Local Businesses Must Do Now
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              The rules of local visibility have changed. Ranking in the Map Pack is no longer
              enough, because the Map Pack itself is losing its dominant position. Here is what
              local businesses need to focus on instead.
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3 font-plus-jakarta">
              1. Optimize for AI Answers, Not Just Rankings
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              AI systems pull from structured, authoritative content to generate their answers. Your
              website needs to clearly answer the questions your customers are asking. Use FAQ
              sections, detailed service pages, and transparent pricing information. The more
              directly your content answers a question, the more likely an AI system is to cite you
              as a source. As we covered in our guide on{' '}
              <Link href="/blog/google-ai-overviews-replacing-search" className="text-orange-400 hover:text-orange-300 transition-colors">
                how AI Overviews are replacing traditional search
              </Link>, being cited in the AI answer is now more valuable than ranking below it.
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3 font-plus-jakarta">
              2. Make Your Google Business Profile Bulletproof
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Your Google Business Profile has become your most important digital asset. AI systems
              pull heavily from GBP data when generating local recommendations. Make sure every
              field is complete: services, business description, hours, attributes, FAQs, and
              photos. Businesses that regularly post updates and respond to reviews are seen as
              active and trustworthy by AI models.
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3 font-plus-jakarta">
              3. Build Entity Authority Across the Web
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              AI systems do not just look at your website. They look at your entire presence across
              the web. Consistent name, address, and phone number across every directory. Active
              review profiles on Google, Yelp, and industry-specific platforms. Mentions in local
              publications and relevant content hubs. The more consistently your business appears as
              a trusted entity across multiple sources, the more likely AI systems are to recommend
              you. This is the foundation of{' '}
              <Link href="/blog/is-your-business-ready-for-google-ai-mode" className="text-orange-400 hover:text-orange-300 transition-colors">
                being ready for Google AI Mode
              </Link>.
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3 font-plus-jakarta">
              4. Prioritize Reviews as a Ranking Signal
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Reviews have always mattered for local SEO. In AI-powered search, they matter even
              more. AI systems synthesize review content to generate recommendations. They do not
              just count stars. They read what customers say. A business with 200 reviews that
              consistently mention &quot;fast response time&quot; and &quot;fair pricing&quot; will
              be recommended by AI for queries about responsive, affordable service providers.
              Focus on generating detailed, authentic reviews that mention your specific strengths.
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3 font-plus-jakarta">
              5. Create Content That Answers, Not Just Promotes
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              The businesses winning in AI search are the ones creating genuinely helpful content.
              Blog posts that answer real customer questions. Service pages that explain processes
              and pricing transparently. Resource guides that establish your expertise in your
              field. AI models are trained to identify and surface the most helpful, reliable
              content available. If your website reads like a brochure, it will be overlooked. If
              it reads like a trusted resource, it will be cited. We covered this shift in depth
              in our analysis of{' '}
              <Link href="/blog/seo-not-generating-leads" className="text-orange-400 hover:text-orange-300 transition-colors">
                why traditional SEO is no longer generating leads
              </Link>.
            </p>

            {/* Section 6 */}
            <h2 className="text-2xl font-bold text-white mt-12 mb-4 font-plus-jakarta">
              The Window Is Closing
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              The transition from map-based to answer-based local discovery is not a future
              prediction. It is happening right now. Google has already rolled out AI Overviews to
              1.5 billion users. Ask Maps launched this month. AI local packs are already showing
              fewer businesses than the traditional Map Pack in most markets.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              The local businesses that recognize this shift and adapt their digital presence
              accordingly will continue to attract customers. The ones clinging to Map Pack
              rankings as their primary growth strategy will watch their calls and leads slowly
              disappear, even as their &quot;rankings&quot; stay the same.
            </p>
            <p className="text-gray-300 leading-relaxed mb-10">
              The question is not whether AI will replace the Map Pack as the primary local
              discovery tool. It is whether your business will be included in the answers when
              it does.
            </p>
          </article>

          {/* FAQ Section */}
          <section className="mt-16 mb-16">
            <h2 className="text-2xl font-bold text-white mb-8 font-plus-jakarta">
              Frequently Asked Questions
            </h2>
            <div className="grid gap-4">
              {[
                {
                  q: 'Is the Google Map Pack going away completely?',
                  a: 'The traditional Map Pack is not disappearing entirely, but it is being replaced in many searches by AI-powered local packs. According to Sterling Sky research, AI local packs surface only 32% as many unique businesses as traditional Map Packs, and in 88% of 322 analyzed markets, total visible businesses declined.',
                },
                {
                  q: 'How do AI local packs differ from the traditional Map Pack?',
                  a: 'Traditional Map Packs display three businesses with map pins, ratings, and basic info. AI local packs use generative AI to recommend fewer businesses (often one or two instead of three) based on synthesized review data, website content, and relevance signals. They prioritize "best answer" over proximity alone.',
                },
                {
                  q: 'What percentage of local searches now end without a click?',
                  a: 'According to Similarweb mobile trend data, local-intent searches such as "near me" queries produce up to 78% zero-click outcomes. Overall, 58.5% of all U.S. Google searches end without a single click to any website, per Semrush data from 2025.',
                },
                {
                  q: 'What is Google Ask Maps and how does it affect local businesses?',
                  a: 'Ask Maps is a conversational AI feature announced by Google in March 2026. It lets users ask natural-language questions about places and receive personalized, AI-generated responses with business listings, review summaries, and actionable options like booking and directions. It shifts discovery from browsing map pins to getting curated AI answers.',
                },
                {
                  q: 'How hard is it for local businesses to appear in AI search results?',
                  a: 'According to SOCi research reported by Search Engine Land, AI visibility is 3 to 30 times harder to achieve than ranking in traditional local search. Only 1.2% of locations were recommended by ChatGPT, 11% by Gemini, and 7.4% by Perplexity, compared to 35.9% appearing in Google\'s traditional local 3-pack.',
                },
                {
                  q: 'What should local businesses do to prepare for AI-driven search?',
                  a: 'Focus on structured data and entity optimization, maintain consistent NAP (name, address, phone) across all directories, actively manage reviews, publish authoritative content that answers common customer questions, and ensure your Google Business Profile is complete with rich media, FAQs, and regular updates.',
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

          {/* CTA Section */}
          <section className="rounded-2xl border border-orange-500/30 bg-orange-500/5 p-8 sm:p-12 text-center mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-plus-jakarta">
              Is Your Business Visible in AI Search?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              The Map Pack is no longer enough. Find out where your business stands in the
              new AI-driven search landscape with a free, no-obligation analysis.
            </p>
            <Link
              href="/blindspot"
              className="inline-block bg-orange-500 text-white font-semibold px-8 py-4 rounded-lg text-lg hover:bg-orange-600 transition-colors"
            >
              Get Your Free Blind Spot Report
            </Link>
            <p className="text-gray-500 text-sm mt-4">No pitch, just the data.</p>
          </section>

          {/* Author Attribution */}
          <section className="flex items-center gap-4 border-t border-gray-800 pt-8">
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: '#FF6A00' }}
            >
              <span className="text-white font-bold text-lg">AE</span>
            </div>
            <div>
              <p className="text-white font-semibold">The Answer Engine Team</p>
              <p className="text-gray-400 text-sm">
                Research-driven insights on AI search, answer engine optimization, and the
                future of local business visibility.
              </p>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
