import type { Metadata } from 'next'

export const revalidate = 86400
export const dynamic = 'force-static'

const title = 'How Does Perplexity AI Choose Which Businesses to Cite?'
const description =
  'Perplexity uses RAG to cite real web sources. Learn the 5 ranking factors that determine which businesses get cited, from domain authority to content freshness.'
const slug = 'how-perplexity-decides-what-to-cite'
const publishDate = '2026-03-11'

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'Perplexity AI citations',
    'how Perplexity ranks sources',
    'Perplexity SEO',
    'Perplexity AI optimization',
    'RAG search',
    'AI citation ranking',
    'Perplexity ranking factors',
    'AEO Perplexity',
  ],
  openGraph: {
    title,
    description,
    type: 'article',
    publishedTime: publishDate,
    authors: ['The Answer Engine Team'],
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
        '@type': 'Organization',
        name: 'The Answer Engine',
        url: 'https://theanswerengine.ai',
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
          name: 'How does Perplexity AI find and select sources?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Perplexity uses Retrieval-Augmented Generation (RAG), which means it crawls the web, retrieves relevant pages based on the query, reranks them through multiple quality gates, and then generates an answer grounded in those real web pages. Unlike ChatGPT which draws from training data, Perplexity cites live web sources in real time.',
          },
        },
        {
          '@type': 'Question',
          name: 'What are the main ranking factors for Perplexity citations?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The five main factors are citation frequency (how often your domain is cited across queries, and the single largest ranking signal), content freshness (recently published or updated content gets a significant boost), domain authority (meaningful but not dominant), content structure (clean headings, schema markup, extractable answers), and author entity recognition (consistent authorship across platforms).',
          },
        },
        {
          '@type': 'Question',
          name: 'Does Perplexity prefer certain types of websites?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Perplexity maintains curated authority domains for different categories. For technical content, GitHub and Stack Overflow are preferred. For products, Amazon and major retailers. For discussions, Reddit and LinkedIn. For news, established publications. Local businesses can earn citations by becoming the authoritative source in their specific niche and geography.',
          },
        },
        {
          '@type': 'Question',
          name: 'How important is content freshness for Perplexity rankings?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Extremely important. Perplexity heavily rewards recency, giving newly published or refreshed content a significant ranking boost. This recency effect is one of the most important ranking factors on the platform. Content that has not been updated in months will gradually lose visibility compared to recently published or refreshed sources.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can small businesses get cited by Perplexity?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. While Perplexity does favor authoritative domains, it also values original data and unique expertise. If you publish original statistics, case studies, or deeply specific local content that no one else covers, Perplexity must cite you when it uses that information. Being the only source for a specific fact or dataset is one of the most reliable paths to Perplexity citations.',
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
        <li className="text-gray-400 truncate max-w-[250px]">{title}</li>
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
                'linear-gradient(135deg, #1e1b4b 0%, #172554 50%, #111827 100%)',
            }}
          >
            <svg
              className="absolute inset-0 w-full h-full opacity-10"
              viewBox="0 0 800 400"
              fill="none"
              aria-hidden="true"
            >
              {/* Search/retrieval pattern */}
              <circle cx="400" cy="180" r="80" stroke="#FF6A00" strokeWidth="0.8" fill="none" />
              <line x1="458" y1="238" x2="520" y2="300" stroke="#FF6A00" strokeWidth="1.5" />
              {/* Source nodes */}
              <rect x="100" y="80" width="80" height="50" rx="4" stroke="#FF6A00" strokeWidth="0.4" fill="none" />
              <rect x="100" y="160" width="80" height="50" rx="4" stroke="#FF6A00" strokeWidth="0.4" fill="none" />
              <rect x="100" y="240" width="80" height="50" rx="4" stroke="#FF6A00" strokeWidth="0.4" fill="none" />
              <rect x="620" y="80" width="80" height="50" rx="4" stroke="#FF6A00" strokeWidth="0.4" fill="none" />
              <rect x="620" y="160" width="80" height="50" rx="4" stroke="#FF6A00" strokeWidth="0.4" fill="none" />
              <rect x="620" y="240" width="80" height="50" rx="4" stroke="#FF6A00" strokeWidth="0.4" fill="none" />
              {/* Connection lines */}
              <line x1="180" y1="105" x2="320" y2="170" stroke="#FF6A00" strokeWidth="0.3" />
              <line x1="180" y1="185" x2="320" y2="180" stroke="#FF6A00" strokeWidth="0.3" />
              <line x1="180" y1="265" x2="320" y2="190" stroke="#FF6A00" strokeWidth="0.3" />
              <line x1="480" y1="170" x2="620" y2="105" stroke="#FF6A00" strokeWidth="0.3" />
              <line x1="480" y1="180" x2="620" y2="185" stroke="#FF6A00" strokeWidth="0.3" />
              <line x1="480" y1="190" x2="620" y2="265" stroke="#FF6A00" strokeWidth="0.3" />
              {/* Footnote indicators */}
              <text x="130" y="100" fontFamily="monospace" fontSize="10" fill="#FF6A00" opacity="0.5">[1]</text>
              <text x="130" y="180" fontFamily="monospace" fontSize="10" fill="#FF6A00" opacity="0.5">[2]</text>
              <text x="130" y="260" fontFamily="monospace" fontSize="10" fill="#FF6A00" opacity="0.5">[3]</text>
            </svg>
            <div className="relative px-8 py-16 sm:px-12 sm:py-20">
              <p className="text-sm font-medium text-orange-400 mb-4">Platform Deep Dives</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 font-plus-jakarta">
                How Perplexity AI Decides What Sources to Cite
              </h1>
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span>March 11, 2026</span>
                <span>-</span>
                <span>10 min read</span>
                <span>-</span>
                <span>The Answer Engine Team</span>
              </div>
            </div>
          </div>

          {/* Article Body */}
          <article className="prose prose-invert prose-lg max-w-none">

            {/* Intro */}
            <p className="text-xl text-gray-300 leading-relaxed mb-10">
              Perplexity is different from every other AI platform. While ChatGPT draws
              from training data and Google AI Overviews pull from its search index,{' '}
              <strong className="text-white">Perplexity crawls the live web in real
              time, retrieves relevant pages, and cites them with numbered footnotes
              </strong>. Every answer includes clickable source links. That makes
              Perplexity the most transparent AI platform for understanding how citation
              works, and the most actionable one for businesses trying to get cited.
              Here is exactly how Perplexity decides which sources make the cut.
            </p>

            {/* Section 1 */}
            <h2 className="text-2xl font-bold text-white mt-12 mb-4 font-plus-jakarta">
              How Perplexity&apos;s RAG System Works
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Perplexity&apos;s architecture is built on Retrieval-Augmented Generation
              (RAG). Unlike pure language models that generate text from memorized
              patterns, RAG grounds every answer in real web sources. The process has
              three stages.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              <strong className="text-white">Stage 1: Retrieval.</strong> When you type
              a query, Perplexity searches the web and retrieves the most relevant pages.
              This is similar to what Google does, but Perplexity is specifically looking
              for pages that can directly answer the question, not just pages that match
              keywords.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              <strong className="text-white">Stage 2: Reranking.</strong> The retrieved
              pages go through multiple quality gates. Perplexity uses L3 reranking to
              evaluate each page on relevance, authority, freshness, and how
              extractable the information is. Pages that are hard to parse or contain
              generic content get filtered out at this stage.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              <strong className="text-white">Stage 3: Generation.</strong> Perplexity
              synthesizes the top-ranked sources into a coherent answer and attaches
              numbered footnotes linking back to each source. The key insight: if
              Perplexity uses a fact or statistic from your page, it is required to cite
              you. This is not optional; it is how RAG works.
            </p>

            {/* Section 2 */}
            <h2 className="text-2xl font-bold text-white mt-12 mb-4 font-plus-jakarta">
              The 5 Factors That Determine Perplexity Citations
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Based on observable patterns across thousands of Perplexity queries, here
              are the five factors that most strongly influence which sources get cited.
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3 font-plus-jakarta">
              1. Citation Frequency (The Compounding Factor)
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              <strong className="text-white">Citation frequency is the single largest
              driver of AI answer inclusions for a domain.</strong> This is a compounding effect:
              the more often Perplexity cites your domain across different queries, the
              more it trusts your domain for future queries. This is why building a
              broad content footprint matters. If Perplexity has cited your plumbing
              website for water heater questions, it is more likely to cite you for
              drain cleaning questions too.
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3 font-plus-jakarta">
              2. Content Freshness (Major Ranking Signal)
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Perplexity heavily rewards recency. Newly published or recently updated
              content gets a significant ranking boost. This is one of the most
              important factors on the platform. A blog post published last week about
              AC repair costs will outrank an identical post published two years ago,
              even if the older post has more backlinks.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              The practical implication: update your most important content regularly.
              Refresh stats, add current year references, and republish. Perplexity
              notices the last-modified date and gives recently touched content
              preferential treatment.
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3 font-plus-jakarta">
              3. Domain Authority (A Meaningful But Not Dominant Factor)
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Domain authority plays a meaningful role in Perplexity&apos;s ranking, but
              it is not the dominant factor many assume. Perplexity maintains curated authority domains for
              different categories: GitHub and Stack Overflow for technical content,
              Amazon and Walmart for products, Reddit and LinkedIn for discussions.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              For local businesses, this means you will not outrank the New York Times
              on a general topic. But you can absolutely dominate your specific niche.
              If you are the most authoritative source on plumbing in Dallas, Perplexity
              will cite you for Dallas plumbing queries even though your domain
              authority is a fraction of national publications.
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3 font-plus-jakarta">
              4. Content Structure and Extractability
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Perplexity favors content that is easy to crawl, easy to read, and easy
              to extract as a clear answer. Pages with clean headings, short paragraphs,
              and structured data (schema markup) rank better than walls of text. If your
              content clearly states a fact, Perplexity can grab it. If your answer is
              buried in the fifth paragraph of a rambling section, it may get skipped.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              The rule of thumb: lead with your answer. If someone asks &quot;how much
              does AC repair cost,&quot; the first sentence of your relevant section
              should state the price range directly. Supporting details come after the
              direct answer, not before it.
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3 font-plus-jakarta">
              5. Author Entity Recognition
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Perplexity cross-references author entities across the web. An author who
              publishes consistently about their domain across multiple platforms earns
              more citations than anonymous content. If your company&apos;s founder
              publishes on your blog, contributes to industry publications, and
              maintains an active LinkedIn presence on the same topics, Perplexity
              builds a stronger entity profile and is more likely to trust and cite
              your content.
            </p>

            {/* Section 3 */}
            <h2 className="text-2xl font-bold text-white mt-12 mb-4 font-plus-jakarta">
              What This Means for Your Business
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Understanding these ranking factors is one thing. Actually getting cited
              is another. The businesses we work with that earn consistent Perplexity
              citations have one thing in common: they produce content that Perplexity
              <strong className="text-white"> cannot find anywhere else</strong>.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Original data is the most reliable path to Perplexity citations. If you
              state a specific fact, statistic, or insight that no other source has,
              Perplexity is required to cite you when it uses it. That is how RAG works.
              Case studies, survey results, market-specific pricing data, and local
              insights are the types of content that earn citations consistently.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              The challenge is that knowing which factors matter is not the same as
              knowing how to optimize for them. Each of these five factors has specific
              implementation strategies that vary by industry, geography, and competitive
              landscape. A plumber in Dallas needs a different approach than a
              personal injury attorney in Miami. The ranking factors are the same;
              the execution is not.
            </p>

            {/* Section 4 */}
            <h2 className="text-2xl font-bold text-white mt-12 mb-4 font-plus-jakarta">
              Perplexity vs. ChatGPT vs. Google AI: Key Differences
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Understanding how Perplexity differs from other AI platforms helps you
              prioritize your optimization efforts.
            </p>
            <div className="my-6 overflow-x-auto">
              <table className="w-full text-sm text-gray-300 border border-gray-800 rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-gray-900">
                    <th className="text-left p-4 text-white font-semibold">Factor</th>
                    <th className="text-left p-4 text-white font-semibold">Perplexity</th>
                    <th className="text-left p-4 text-white font-semibold">ChatGPT</th>
                    <th className="text-left p-4 text-white font-semibold">Google AI</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-gray-800">
                    <td className="p-4 font-medium text-white">Source</td>
                    <td className="p-4">Live web (RAG)</td>
                    <td className="p-4">Training data + Bing</td>
                    <td className="p-4">Search index</td>
                  </tr>
                  <tr className="border-t border-gray-800 bg-gray-900/50">
                    <td className="p-4 font-medium text-white">Citations</td>
                    <td className="p-4">Always (footnotes)</td>
                    <td className="p-4">Sometimes</td>
                    <td className="p-4">Linked cards</td>
                  </tr>
                  <tr className="border-t border-gray-800">
                    <td className="p-4 font-medium text-white">Freshness Weight</td>
                    <td className="p-4 text-orange-400 font-medium">Very High</td>
                    <td className="p-4">Medium</td>
                    <td className="p-4">High</td>
                  </tr>
                  <tr className="border-t border-gray-800 bg-gray-900/50">
                    <td className="p-4 font-medium text-white">Schema Impact</td>
                    <td className="p-4">Strong</td>
                    <td className="p-4">Strong</td>
                    <td className="p-4">Critical</td>
                  </tr>
                  <tr className="border-t border-gray-800">
                    <td className="p-4 font-medium text-white">Best For</td>
                    <td className="p-4">Original data / research</td>
                    <td className="p-4">Broad authority</td>
                    <td className="p-4">Local / commercial</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Section 5 */}
            <h2 className="text-2xl font-bold text-white mt-12 mb-4 font-plus-jakarta">
              Why Perplexity Matters for Your Business
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Perplexity is growing rapidly as an alternative to Google search. Its user
              base skews toward professionals and researchers who want sourced,
              verifiable answers. These are high-intent users. When Perplexity cites
              your business as a source, the person reading that answer is significantly
              more likely to click through and engage than someone scrolling past a
              traditional search result.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              The other reason Perplexity matters: it is a leading indicator. The
              optimization strategies that work for Perplexity (original data, fresh
              content, clear structure, strong entity presence) also work for ChatGPT
              and Google AI Overviews. If you can get cited by Perplexity, you are well
              positioned for every AI platform.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              The businesses that will dominate AI search in the next 12 months are the
              ones publishing citable content today: original statistics, specific local
              data, expert analysis that AI platforms cannot generate on their own. If
              Perplexity needs your data to answer a question, it will cite you. That is
              the simplest and most reliable path to AI visibility.
            </p>
          </article>

          {/* FAQ Section */}
          <section className="mt-16" aria-labelledby="faq-heading">
            <h2
              id="faq-heading"
              className="text-2xl font-bold text-white mb-8 font-plus-jakarta"
            >
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">

              <div className="p-6 rounded-xl border border-gray-800 bg-gray-900">
                <h3 className="text-lg font-semibold text-white mb-3">
                  How does Perplexity AI find and select sources?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Perplexity uses Retrieval-Augmented Generation (RAG): it crawls the
                  web, retrieves relevant pages, reranks them through multiple quality
                  gates, and generates an answer grounded in those real web sources.
                  Unlike ChatGPT which draws from training data, Perplexity cites live
                  web sources in real time.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-gray-800 bg-gray-900">
                <h3 className="text-lg font-semibold text-white mb-3">
                  What are the main ranking factors for Perplexity citations?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  The five main factors are{' '}
                  <strong className="text-white">citation frequency</strong> (the
                  single largest signal),{' '}
                  <strong className="text-white">content freshness</strong> (major
                  signal),{' '}
                  <strong className="text-white">domain authority</strong> (meaningful but not dominant),{' '}
                  <strong className="text-white">content structure</strong> (clean
                  headings and schema), and{' '}
                  <strong className="text-white">author entity recognition</strong>{' '}
                  (cross-platform authorship).
                </p>
              </div>

              <div className="p-6 rounded-xl border border-gray-800 bg-gray-900">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Does Perplexity prefer certain types of websites?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Yes. Perplexity maintains curated authority domains: GitHub for
                  technical, Amazon for products, Reddit for discussions, major
                  publications for news. Local businesses can earn citations by
                  becoming the authoritative source in their specific niche and
                  geography.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-gray-800 bg-gray-900">
                <h3 className="text-lg font-semibold text-white mb-3">
                  How important is content freshness for Perplexity rankings?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Extremely important. Perplexity heavily rewards recency, giving newly
                  published or refreshed content a significant ranking boost. Content
                  not updated in months gradually loses visibility compared to recently
                  published or refreshed sources.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-gray-800 bg-gray-900">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Can small businesses get cited by Perplexity?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Yes. While Perplexity favors authoritative domains, it also values
                  original data and unique expertise. If you publish original
                  statistics, case studies, or deeply specific local content, Perplexity
                  must cite you when it uses that information. Being the only source for
                  a specific fact is one of the most reliable paths to citations.
                </p>
              </div>

            </div>
          </section>

          {/* CTA Section */}
          <div className="mt-16 p-8 rounded-2xl border border-gray-800 bg-gradient-to-r from-gray-900 to-gray-800">
            <h2 className="text-2xl font-bold text-white mb-4 font-plus-jakarta">
              Find Out If AI Platforms Are Citing Your Competitors Instead of You
            </h2>
            <p className="text-gray-300 mb-6">
              Perplexity, ChatGPT, and Google AI Overviews are recommending businesses
              in your market right now. Find out if it is you or your competitors
              getting cited. Get a free AI visibility check. No pitch, just the data.
            </p>
            <a
              href="/blindspot"
              className="inline-block bg-[#FF6A00] text-white font-semibold px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors"
            >
              Get Your Free Blind Spot Report
            </a>
          </div>

          {/* Author Attribution */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                AE
              </div>
              <div>
                <p className="text-white font-medium text-sm">The Answer Engine Team</p>
                <p className="text-gray-500 text-sm">
                  Helping local service businesses stay visible in an AI-first world.
                </p>
              </div>
            </div>
          </div>

        </div>
      </main>
    </>
  )
}
