import type { Metadata } from 'next'
import Link from 'next/link'

export const revalidate = 86400
export const dynamic = 'force-static'
export const dynamicParams = true

const title = 'Why Your Competitors Show Up on Perplexity and You Don\'t'
const description =
  'Perplexity AI cites your competitors because they publish citable content, structured data, and fresh updates. Learn the 5 reasons you are invisible and how to fix it.'
const slug = 'why-competitors-show-up-perplexity-not-you'
const publishDate = '2026-03-18'

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'Perplexity AI visibility',
    'why competitors on Perplexity',
    'Perplexity citations',
    'AI search visibility',
    'Perplexity SEO',
    'get cited Perplexity',
    'Perplexity vs ChatGPT',
    'AI search optimization',
    'answer engine optimization',
    'local business AI visibility',
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
          name: 'Why does Perplexity cite my competitors but not my business?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Perplexity uses Retrieval-Augmented Generation (RAG) to find and cite live web sources. If your competitors publish structured, data-rich content with clear answers and proper schema markup while your site has generic service pages, Perplexity will retrieve and cite their pages instead of yours. The platform prioritizes content freshness, direct relevance, and extractable facts.',
          },
        },
        {
          '@type': 'Question',
          name: 'How many sources does Perplexity actually cite per answer?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Perplexity retrieves roughly 10 relevant pages per query but only cites 3 to 4 of them in its final answer. Each citation appears as a numbered footnote linking to the original source. Perplexity averages about 21.87 citations per question, which is nearly three times more than ChatGPT at 7.92 citations per question.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does Perplexity prefer newer content over older content?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Perplexity has a strong recency bias. Recently published or updated content receives a significant ranking boost during the retrieval and reranking stages. Sites that publish regularly, even just 2 to 4 posts per month, signal to PerplexityBot that they are active and current sources worth citing.',
          },
        },
        {
          '@type': 'Question',
          name: 'What type of content does Perplexity skip over?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Perplexity skips generic introductions, vague claims without data, content that says a lot without asserting anything specific, and pages that are difficult to parse. It favors content that leads with concrete data, specific statistics, and clear factual statements that can be directly extracted and attributed.',
          },
        },
        {
          '@type': 'Question',
          name: 'How is Perplexity different from ChatGPT when it comes to citations?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Perplexity is retrieval-first, meaning it searches the live web for every query and always provides numbered citations. ChatGPT is generation-first, drawing primarily from training data and only sometimes providing source links when web search is enabled. Perplexity averages 21.87 citations per answer compared to ChatGPT at 7.92. Perplexity also favors discussion platforms like Reddit (6.6% of citations) while ChatGPT relies more on Wikipedia (7.8% of citations).',
          },
        },
        {
          '@type': 'Question',
          name: 'Can a small local business get cited by Perplexity AI?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Perplexity values original data and unique local expertise. If you publish specific pricing data, local market statistics, case studies, or detailed service guides that no one else covers for your area, Perplexity will cite you when it needs that information. Being the only credible source for a specific local topic is one of the most reliable paths to earning Perplexity citations.',
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
              {/* Competitor vs You visualization */}
              <circle cx="250" cy="200" r="70" stroke="#FF6A00" strokeWidth="0.8" fill="none" />
              <circle cx="550" cy="200" r="70" stroke="#FF6A00" strokeWidth="0.3" fill="none" strokeDasharray="4 4" />
              <text x="225" y="195" fontFamily="monospace" fontSize="10" fill="#FF6A00" opacity="0.6">CITED</text>
              <text x="225" y="210" fontFamily="monospace" fontSize="8" fill="#FF6A00" opacity="0.4">[1] [2] [3]</text>
              <text x="525" y="205" fontFamily="monospace" fontSize="10" fill="#FF6A00" opacity="0.3">INVISIBLE</text>
              {/* Connection lines from sources to cited */}
              <line x1="100" y1="100" x2="190" y2="170" stroke="#FF6A00" strokeWidth="0.4" />
              <line x1="80" y1="200" x2="180" y2="200" stroke="#FF6A00" strokeWidth="0.4" />
              <line x1="100" y1="300" x2="190" y2="230" stroke="#FF6A00" strokeWidth="0.4" />
              {/* No connections to uncited */}
              <rect x="60" y="85" width="50" height="30" rx="3" stroke="#FF6A00" strokeWidth="0.3" fill="none" />
              <rect x="40" y="185" width="50" height="30" rx="3" stroke="#FF6A00" strokeWidth="0.3" fill="none" />
              <rect x="60" y="285" width="50" height="30" rx="3" stroke="#FF6A00" strokeWidth="0.3" fill="none" />
              {/* Arrow from Perplexity logo area */}
              <circle cx="400" cy="60" r="25" stroke="#FF6A00" strokeWidth="0.5" fill="none" />
              <text x="388" y="65" fontFamily="monospace" fontSize="9" fill="#FF6A00" opacity="0.5">RAG</text>
              <line x1="380" y1="82" x2="290" y2="145" stroke="#FF6A00" strokeWidth="0.3" />
              <line x1="420" y1="82" x2="510" y2="145" stroke="#FF6A00" strokeWidth="0.15" strokeDasharray="3 3" />
            </svg>
            <div className="relative px-8 py-16 sm:px-12 sm:py-20">
              <p className="inline-block text-sm font-medium text-orange-400 mb-4 border border-orange-500/30 rounded-full px-4 py-1">
                AI Visibility
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 font-plus-jakarta">
                Why Your Competitors Show Up on Perplexity and You Don&apos;t
              </h1>
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span>March 18, 2026</span>
                <span>-</span>
                <span>11 min read</span>
                <span>-</span>
                <span>The Answer Engine Team</span>
              </div>
            </div>
          </div>

          {/* Article Body */}
          <article className="prose prose-invert prose-lg max-w-none">

            {/* Intro */}
            <p className="text-xl text-gray-300 leading-relaxed mb-10">
              You search for your own service on Perplexity AI. Your competitor
              shows up with a numbered citation. You do not. You run the same
              query three different ways. Same result every time: they are cited,
              you are invisible. This is not random. Perplexity uses a specific
              retrieval process to decide which sources earn citations, and{' '}
              <strong className="text-white">the gap between being cited
              and being skipped comes down to five measurable factors</strong>.
              Here is why your competitors are winning on Perplexity and exactly
              what you need to change.
            </p>

            {/* Stat Callout 1 */}
            <div className="rounded-xl border border-orange-500/30 bg-orange-500/5 p-6 mb-10">
              <p className="text-orange-400 font-semibold text-lg mb-2">Perplexity&apos;s Rapid Growth</p>
              <p className="text-gray-300 text-base leading-relaxed">
                Perplexity AI now has over <strong className="text-white">45 million monthly
                active users</strong> and processes more than{' '}
                <strong className="text-white">1 billion search queries per month</strong> as
                of early 2026. The platform has seen 800% year-over-year growth. That means
                millions of potential customers are asking Perplexity to recommend businesses
                every day, and your competitors may already be the ones getting cited.
              </p>
            </div>

            {/* Section 1 */}
            <h2 className="text-2xl font-bold text-white mt-12 mb-4 font-plus-jakarta">
              How Perplexity Decides Who Gets Cited (and Who Gets Skipped)
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Perplexity runs on{' '}
              <Link href="/blog/how-perplexity-decides-what-to-cite" className="text-orange-400 hover:text-orange-300 underline">
                Retrieval-Augmented Generation (RAG)
              </Link>. Unlike ChatGPT, which primarily generates answers from training data,
              Perplexity searches the live web for every single query. It retrieves roughly
              10 relevant pages, runs them through multiple quality gates, and then selects
              only 3 to 4 sources to actually cite in its response.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              That selection process is where you either win or lose. Perplexity does not
              cite every page it visits. It evaluates each one on direct relevance, content
              quality, domain authority, freshness, and technical accessibility. If your
              competitor checks those boxes and you do not, they earn the citation and you
              remain invisible.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Research from a Q3 2025 citation study found that{' '}
              <strong className="text-white">Perplexity averages 21.87 citations per
              question, nearly three times the 7.92 citations per question that ChatGPT
              provides</strong>. That means Perplexity is actively looking for more sources
              to cite. There is real opportunity here, but only if your content is built to
              be found and extracted.
            </p>

            {/* Section 2 */}
            <h2 className="text-2xl font-bold text-white mt-12 mb-4 font-plus-jakarta">
              Reason 1: Their Content Leads with Data, Yours Leads with Fluff
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Perplexity&apos;s AI is looking for specific, extractable facts it can
              attribute to a source. Content that leads with concrete data gets cited.
              Content that opens with generic introductions, vague claims, or obvious
              statements gets skipped entirely.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Think about the difference between two plumbing websites. One publishes a
              page that says &quot;We are the best plumber in Austin with years of
              experience.&quot; The other publishes a page that says &quot;The average cost
              of a water heater replacement in Austin ranges from $1,200 to $3,800 depending
              on the unit type, with tankless installations averaging 40% higher than
              traditional tank models.&quot;
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              When someone asks Perplexity &quot;How much does a water heater replacement
              cost in Austin?&quot;, the second page gets cited because it contains the
              exact data Perplexity needs to construct its answer. The first page has nothing
              worth extracting.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Content that appears in callout boxes or highlighted sections has a{' '}
              <strong className="text-white">2.3x higher chance of being cited by AI
              engines</strong>, because these visual cues signal importance to extraction
              algorithms. Your competitors may be formatting their key data in ways that
              make it easier for Perplexity to find and use.
            </p>

            {/* Section 3 */}
            <h2 className="text-2xl font-bold text-white mt-12 mb-4 font-plus-jakarta">
              Reason 2: They Publish Fresh Content Regularly, You Published Once and Stopped
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Perplexity has a strong recency bias. Recently published or updated content
              gets a measurable ranking boost during the retrieval stage. A blog post
              published last month about HVAC repair costs will outrank an identical post
              published two years ago, even if the older post has more backlinks and higher
              domain authority.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Sites that publish regularly on their core topics appear in Perplexity results
              more consistently. Even <strong className="text-white">2 to 4 posts per month
              </strong> is enough to signal to PerplexityBot that you are an active, current
              source. If your competitor publishes a monthly pricing update or seasonal
              service guide and you have not touched your blog in six months, Perplexity
              will treat their content as more trustworthy and current.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              This is not about churning out low-quality posts.{' '}
              <Link href="/blog/why-fresh-content-key-ai-search-visibility" className="text-orange-400 hover:text-orange-300 underline">
                Content freshness for AI search
              </Link>{' '}
              means updating existing pages with current data, publishing new service guides
              that reflect actual market conditions, and adding recent case studies or
              project examples. Perplexity rewards substance that happens to be recent, not
              recency without substance.
            </p>

            {/* Stat Callout 2 */}
            <div className="rounded-xl border border-orange-500/30 bg-orange-500/5 p-6 mb-10">
              <p className="text-orange-400 font-semibold text-lg mb-2">Citation Density: Perplexity vs. ChatGPT</p>
              <p className="text-gray-300 text-base leading-relaxed">
                An analysis of over 118,000 AI-generated answers found that{' '}
                <strong className="text-white">Perplexity averages 21.87 citations per
                question while ChatGPT averages just 7.92</strong>. Perplexity is
                retrieval-first, designed to ground every response in external sources.
                ChatGPT is generation-first, optimized for creating original content. This
                makes Perplexity the single best AI platform for earning citations, if your
                content is structured to be found.
              </p>
            </div>

            {/* Section 4 */}
            <h2 className="text-2xl font-bold text-white mt-12 mb-4 font-plus-jakarta">
              Reason 3: Their Site Structure Helps AI Extract Answers, Yours Buries Them
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Perplexity does not read your website the way a human does. It scans for
              structured, extractable information. Pages with clean heading hierarchies,
              FAQ sections, schema markup, and direct question-and-answer formatting are
              significantly easier for Perplexity to parse and cite.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              If your competitor has{' '}
              <Link href="/blog/does-schema-markup-help-ai-search" className="text-orange-400 hover:text-orange-300 underline">
                proper schema markup
              </Link>{' '}
              (FAQPage, LocalBusiness, Service schemas) and your site has none, Perplexity
              can extract their answers in a structured format while it struggles to parse
              yours. Schema does not guarantee a citation, but it makes the extraction
              process dramatically easier.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              The same applies to page structure. A page with a clear H2 that says &quot;How
              Much Does Roof Replacement Cost in Denver?&quot; followed by a direct answer
              paragraph is far more citable than a page where the pricing information is
              buried in the fourth paragraph of a generic service description. Perplexity
              matches queries to content, and if your content does not structurally match
              the way people ask questions, it will not be retrieved.
            </p>

            {/* Section 5 */}
            <h2 className="text-2xl font-bold text-white mt-12 mb-4 font-plus-jakarta">
              Reason 4: They Have Built Domain Authority Through Citations, You Have Not Started
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Citation frequency is a compounding factor.{' '}
              <Link href="/blog/how-ai-platforms-choose-businesses-to-cite" className="text-orange-400 hover:text-orange-300 underline">
                The more often Perplexity cites a domain
              </Link>{' '}
              across different queries, the more it trusts that domain for future queries.
              If your competitor has already been cited for water heater questions, they are
              more likely to be cited for drain cleaning questions too. This compounding
              effect means the gap between you and your competitor grows wider over time
              unless you take action.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Perplexity also evaluates source preferences differently from other AI
              platforms. While ChatGPT relies heavily on Wikipedia (7.8% of total citations)
              and older domains (45.8% of ChatGPT citations go to domains over 15 years
              old), Perplexity favors discussion platforms like Reddit (6.6% of its
              citations) and values real-world expertise over encyclopedic authority.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              What this means for local businesses: you do not need a 15-year-old domain to
              get cited by Perplexity. You need content that demonstrates genuine expertise
              in your specific market. Original data, local pricing guides, and real case
              studies carry more weight on Perplexity than they do on ChatGPT.
            </p>

            {/* Section 6 */}
            <h2 className="text-2xl font-bold text-white mt-12 mb-4 font-plus-jakarta">
              Reason 5: They Answer the Questions Perplexity Users Actually Ask
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Perplexity users ask different types of questions than Google users. They tend
              to ask longer, more specific, conversational questions: &quot;What is the best
              roofing material for homes in Houston that can handle hurricane-force
              winds?&quot; rather than &quot;best roofing Houston.&quot;
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Your competitor may be publishing content that directly matches these
              conversational queries. A{' '}
              <Link href="/blog/hub-spoke-content-strategy-ai-citations" className="text-orange-400 hover:text-orange-300 underline">
                hub-and-spoke content strategy
              </Link>{' '}
              built around specific customer questions creates dozens of pages that each
              target a different query Perplexity users might ask. If your competitor has 30
              detailed FAQ pages and you have one generic services page, they have 30 chances
              to get cited while you have almost none.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Perplexity breaks complex questions into 3 to 5 sub-queries during its
              retrieval process. Each sub-query is a separate opportunity for your content to
              be retrieved. The more specific, question-focused pages you publish, the more
              entry points you create for Perplexity to find you.
            </p>

            {/* Stat Callout 3 */}
            <div className="rounded-xl border border-orange-500/30 bg-orange-500/5 p-6 mb-10">
              <p className="text-orange-400 font-semibold text-lg mb-2">The Selection Funnel</p>
              <p className="text-gray-300 text-base leading-relaxed">
                For every query, Perplexity retrieves approximately{' '}
                <strong className="text-white">10 relevant pages</strong> but only cites{' '}
                <strong className="text-white">3 to 4 of them</strong> in the final answer.
                That means roughly 60% to 70% of retrieved pages do not make the cut. The
                pages that get selected are the ones with the most relevant, extractable,
                and authoritative content. Being retrieved is not enough. Your content must
                survive the reranking stage to earn a visible citation.
              </p>
            </div>

            {/* Section 7 */}
            <h2 className="text-2xl font-bold text-white mt-12 mb-4 font-plus-jakarta">
              What You Can Do About It Starting Today
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              The gap between you and your competitors on Perplexity is not permanent. Every
              factor that determines Perplexity citations is within your control. Here are
              the highest-impact actions you can take right now.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              <strong className="text-white">Audit your content for citable facts.</strong>{' '}
              Go through your top service pages and ask: does this page contain any specific
              statistic, price range, timeline, or data point that Perplexity could extract
              and cite? If not, add them. Include local pricing data, project timelines,
              material comparisons, and specific outcomes from past projects.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              <strong className="text-white">Start publishing regularly.</strong> You do not
              need daily posts. Two to four quality articles per month is enough to signal
              freshness to PerplexityBot. Focus on seasonal updates, pricing guides, and
              answering specific questions your customers actually ask.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              <strong className="text-white">Add structured data.</strong> Implement
              FAQPage, LocalBusiness, and Service schema markup on your key pages. This
              makes your content easier for Perplexity to parse and extract during the
              retrieval stage.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              <strong className="text-white">Build question-focused pages.</strong> Create
              individual pages that each answer a specific question your customers ask. Use
              the question as your H1 and provide a direct, data-backed answer in the first
              paragraph. This structure matches how Perplexity retrieves and ranks content.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              <strong className="text-white">Check your current AI visibility.</strong>{' '}
              Before you invest time in optimization, find out where you stand. Search for
              your core services on Perplexity, ChatGPT, and Google AI and see whether you
              or your competitors are getting cited. That baseline tells you exactly how
              large the gap is and where to focus first.
            </p>

            {/* Section 8 */}
            <h2 className="text-2xl font-bold text-white mt-12 mb-4 font-plus-jakarta">
              Why Perplexity Visibility Matters Beyond Perplexity
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Perplexity currently holds between 6% and 8% of the AI chatbot market, behind
              ChatGPT and Microsoft Copilot. But its user base is growing rapidly,
              and the platform&apos;s users skew toward professionals and researchers who
              want sourced, verifiable answers. These are high-intent users. When they find
              your business through a Perplexity citation, they are significantly more likely
              to convert than someone scrolling through traditional search results.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              More importantly, the strategies that earn Perplexity citations also work for{' '}
              <Link href="/blog/why-is-my-competitor-on-ai-search-not-me" className="text-orange-400 hover:text-orange-300 underline">
                every other AI search platform
              </Link>. Original data, fresh content, clean structure, and strong entity
              presence are the same signals that ChatGPT, Google AI Overviews, and Claude
              use to decide which businesses to cite. Optimizing for Perplexity is not a
              niche play. It is the most efficient way to improve your visibility across
              all AI platforms simultaneously.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Your competitors are already showing up on Perplexity because they are doing
              the work. They publish citable content, keep it updated, structure it for AI
              extraction, and answer the questions that real customers ask. The good news is
              that none of this requires a massive budget or years of effort. It requires
              knowing what Perplexity is looking for and building your content to match.
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
            <div className="grid gap-6 md:grid-cols-2">

              <div className="p-6 rounded-xl border border-gray-800 bg-gray-900">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Why does Perplexity cite my competitors but not my business?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Perplexity uses RAG to find and cite live web sources. If your competitors
                  publish structured, data-rich content with proper schema markup while your
                  site has generic service pages, Perplexity will retrieve and cite their
                  pages instead. The platform prioritizes freshness, direct relevance, and
                  extractable facts.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-gray-800 bg-gray-900">
                <h3 className="text-lg font-semibold text-white mb-3">
                  How many sources does Perplexity cite per answer?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Perplexity retrieves roughly 10 relevant pages per query but only cites 3
                  to 4 of them. It averages about 21.87 citations per question, nearly three
                  times more than ChatGPT at 7.92 citations per question.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-gray-800 bg-gray-900">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Does Perplexity prefer newer content over older content?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Yes. Perplexity has a strong recency bias. Recently published or updated
                  content receives a significant ranking boost. Even 2 to 4 posts per month
                  signals to PerplexityBot that you are an active, current source worth
                  citing.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-gray-800 bg-gray-900">
                <h3 className="text-lg font-semibold text-white mb-3">
                  What type of content does Perplexity skip over?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Perplexity skips generic introductions, vague claims without data, and
                  content that says a lot without asserting anything specific. It favors
                  content that leads with concrete data, specific statistics, and clear
                  factual statements that can be directly extracted.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-gray-800 bg-gray-900">
                <h3 className="text-lg font-semibold text-white mb-3">
                  How is Perplexity different from ChatGPT for citations?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Perplexity is retrieval-first, searching the live web and always providing
                  numbered citations. ChatGPT is generation-first, drawing from training
                  data. Perplexity also favors discussion platforms like Reddit (6.6% of
                  citations) while ChatGPT relies more on Wikipedia (7.8% of citations).
                </p>
              </div>

              <div className="p-6 rounded-xl border border-gray-800 bg-gray-900">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Can a small local business get cited by Perplexity AI?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Yes. Perplexity values original data and unique local expertise. If you
                  publish specific pricing data, local market statistics, or detailed
                  service guides that no one else covers for your area, Perplexity will cite
                  you when it needs that information.
                </p>
              </div>

            </div>
          </section>

          {/* CTA Section */}
          <div className="mt-16 p-8 rounded-2xl border border-gray-800 bg-gradient-to-r from-gray-900 to-gray-800">
            <h2 className="text-2xl font-bold text-white mb-4 font-plus-jakarta">
              Find Out If AI Is Citing Your Competitors Instead of You
            </h2>
            <p className="text-gray-300 mb-6">
              Perplexity, ChatGPT, and Google AI are recommending businesses in
              your market right now. Find out if it is you or your competitors
              getting the citations. No pitch, just the data.
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
