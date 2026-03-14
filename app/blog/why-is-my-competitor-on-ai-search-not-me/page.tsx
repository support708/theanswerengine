import type { Metadata } from 'next'
import Link from 'next/link'

export const revalidate = 86400
export const dynamic = 'force-static'

const title = 'Why Is My Competitor on AI Search but Not Me?'
const description =
  'Your competitor shows up on ChatGPT, Perplexity, and Google AI Overviews while you are invisible. Learn the five authority gaps that determine which businesses AI platforms cite and which they ignore.'
const slug = 'why-is-my-competitor-on-ai-search-not-me'
const publishDate = '2026-03-14'

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'competitor on AI search',
    'AI search visibility gap',
    'why competitor shows up ChatGPT',
    'AI citation gap',
    'business not on AI search',
    'competitor AI visibility',
    'AEO competitive advantage',
    'AI search business recommendations',
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
          name: 'Why does my competitor show up on ChatGPT but I do not?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'AI platforms like ChatGPT cite businesses that demonstrate clear topical authority, structured content, consistent online information, and strong entity signals. If your competitor has deeper expertise content, better structured data, and more consistent citations across the web, AI platforms will treat them as the safer, more authoritative recommendation.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I check if AI platforms are recommending my competitor?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ask ChatGPT, Perplexity, and Google Gemini the same questions your customers ask. Try queries like "best [your service] in [your city]" or "who should I hire for [your specialty]." Document which businesses appear. If your competitor is cited and you are not, that confirms an AI visibility gap you need to close.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can a smaller business outrank a larger competitor on AI search?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. AI platforms do not rank by company size or ad spend. They cite businesses that demonstrate the clearest, most structured expertise for a specific query. A small business with deep niche authority content and proper structured data can appear ahead of larger competitors that rely on brand recognition alone.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does it take to close the AI visibility gap with a competitor?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most businesses begin seeing shifts in AI citations within 60 to 90 days of implementing a targeted authority strategy. The timeline depends on the size of the gap, how much existing content you have to work with, and how quickly your competitor is also adapting. Early movers have a compounding advantage.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is my Google ranking related to my AI search visibility?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Not directly. AI platforms use their own evaluation criteria, which overlap with but are distinct from Google ranking factors. A business can rank well on Google and still be invisible to ChatGPT, Perplexity, or Google AI Overviews. AI visibility requires a separate strategy focused on authority signals, structured data, and entity consistency.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the biggest mistake businesses make when trying to appear on AI search?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The biggest mistake is assuming that traditional SEO tactics will carry over to AI search. Keyword stuffing, link building, and paid ads have no direct influence on whether ChatGPT or Perplexity cites your business. AI platforms evaluate topical depth, content structure, entity recognition, and cross-platform consistency. Without addressing those factors, traditional SEO investments will not translate to AI visibility.',
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
                'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
            }}
          >
            <svg
              className="absolute inset-0 w-full h-full opacity-10"
              viewBox="0 0 800 400"
              fill="none"
              aria-hidden="true"
            >
              {/* Competitive gap visual: two columns, one lit, one dim */}
              <rect x="200" y="80" width="120" height="240" rx="8" stroke="#FF6A00" strokeWidth="0.5" fill="rgba(255,106,0,0.05)" />
              <rect x="480" y="80" width="120" height="240" rx="8" stroke="#FF6A00" strokeWidth="0.3" fill="none" strokeDasharray="4 4" />
              <circle cx="260" cy="160" r="20" fill="rgba(255,106,0,0.15)" />
              <circle cx="260" cy="200" r="14" fill="rgba(255,106,0,0.1)" />
              <circle cx="260" cy="240" r="10" fill="rgba(255,106,0,0.08)" />
              <text x="245" y="290" fontFamily="monospace" fontSize="12" fill="#FF6A00" opacity="0.3">CITED</text>
              <text x="515" y="290" fontFamily="monospace" fontSize="12" fill="#FF6A00" opacity="0.15">INVISIBLE</text>
              <line x1="380" y1="100" x2="420" y2="100" stroke="#FF6A00" strokeWidth="0.5" />
              <line x1="380" y1="200" x2="420" y2="200" stroke="#FF6A00" strokeWidth="0.3" />
              <line x1="380" y1="300" x2="420" y2="300" stroke="#FF6A00" strokeWidth="0.3" />
              <path d="M390 190 L400 180 L410 190" stroke="#FF6A00" strokeWidth="0.5" fill="none" />
            </svg>
            <div className="relative px-8 py-16 sm:px-12 sm:py-20">
              <p className="text-sm font-medium text-orange-400 mb-4">Business Pain Points</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 font-plus-jakarta">
                Why Is My Competitor on AI Search but Not Me?
              </h1>
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span>March 14, 2026</span>
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
              You searched your own service on ChatGPT. Your competitor appeared.
              You did not. You tried Perplexity. Same result. Google AI Overviews?
              They showed up there too. The frustration is real, and you are not
              imagining it. AI platforms are actively choosing which businesses to
              recommend, and right now, they have chosen your competitor over you.
              The question is not whether this matters. It already does.{' '}
              <strong className="text-white">
                Only 1.2% of local businesses get cited by ChatGPT, compared to
                35.9% that appear in Google&apos;s local pack.
              </strong>{' '}
              The selection process is ruthless, and understanding why your competitor
              made the cut is the first step toward closing the gap.
            </p>

            {/* Section 1 */}
            <h2 className="text-2xl font-bold text-white mt-12 mb-4 font-plus-jakarta">
              The AI Visibility Gap Is Real, and It Is Growing
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              This is not a theoretical problem. The data from 2025 and early 2026
              paints a clear picture of how wide the gap has become between businesses
              that AI platforms cite and businesses they ignore.
            </p>
            <div className="my-6 p-6 rounded-xl border border-gray-800 bg-gray-900">
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 font-bold mt-0.5">&#8226;</span>
                  <span>The <strong className="text-white">top 50 brands capture 28.9% of all AI citations</strong> across platforms, leaving thousands of businesses fighting for scraps</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 font-bold mt-0.5">&#8226;</span>
                  <span>Brands in the <strong className="text-white">top 25% for web authority get 10x more AI visibility</strong> than everyone else in their category</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 font-bold mt-0.5">&#8226;</span>
                  <span>AI local visibility is <strong className="text-white">3 to 30x harder to achieve</strong> than ranking in Google&apos;s traditional local results</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 font-bold mt-0.5">&#8226;</span>
                  <span>Organic click-through rates <strong className="text-white">dropped 61% for queries with AI Overviews</strong>, meaning the traffic that does exist is concentrating on the businesses AI chooses to cite</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 font-bold mt-0.5">&#8226;</span>
                  <span><strong className="text-white">58.5% of Google searches</strong> now end without a click, making AI citations one of the last remaining ways to capture attention</span>
                </li>
              </ul>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              These numbers tell a story. AI is not replacing search. It is replacing
              the way customers discover businesses. If your competitor has figured this
              out and you have not, the gap between you will compound every quarter.
            </p>

            {/* Section 2 */}
            <h2 className="text-2xl font-bold text-white mt-12 mb-4 font-plus-jakarta">
              What Your Competitor Has That You Do Not
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              When AI platforms decide which business to cite, they are not looking at
              your ad spend, your logo, or how many years you have been in business.
              They are evaluating a very specific set of signals that determine whether
              your content is trustworthy, relevant, and structured enough to present
              to a user as a direct answer. Your competitor has at least one (and
              likely several) of these advantages over you.
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3 font-plus-jakarta">
              1. Deeper Topical Authority
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Your competitor is not just listing services. They are explaining the
              nuances of what they do, why it matters, and what customers should
              know before making a decision. AI platforms interpret this depth as
              expertise. A business that publishes one service page with bullet
              points cannot compete with a business that has built an entire content
              ecosystem around their specialty. The competitor with twenty pieces
              of interconnected authority content on a specific topic will be cited.
              The one with a single &quot;Services&quot; page will not.
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3 font-plus-jakarta">
              2. Structured Data That AI Can Process
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              AI platforms are machines. They process structured information faster
              and more reliably than unstructured text. If your competitor has
              implemented proper schema markup (LocalBusiness, FAQPage, Article,
              Organization), their content is instantly parseable. Your competitor&apos;s
              site is speaking the language AI understands. Yours might be speaking
              a language it has to guess at. That guessing means your content gets
              deprioritized. As we covered in our piece on{' '}
              <Link href="/blog/how-ai-platforms-choose-businesses-to-cite" className="text-orange-400 hover:text-orange-300 transition-colors">
                how AI platforms choose which businesses to cite
              </Link>
              , structured signals are one of the primary differentiators.
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3 font-plus-jakarta">
              3. Consistent Entity Signals Across the Web
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              AI platforms do not just read your website. They cross-reference your
              business information across dozens of sources: directories, social
              profiles, review platforms, industry publications. If your competitor
              has consistent NAP (name, address, phone) information, matching
              descriptions, and a unified brand presence across the web, AI treats
              them as a verified entity. If your information is inconsistent,
              outdated, or missing from key platforms, AI has less confidence in
              citing you.
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3 font-plus-jakarta">
              4. Content That Answers Real Questions
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              AI platforms exist to answer questions. When someone asks ChatGPT
              &quot;who is the best estate planning attorney in Phoenix,&quot; the
              platform looks for content that directly addresses that type of query.
              Your competitor may have FAQ pages, educational articles, and service
              explanations that map to the exact questions customers ask. Your
              website might talk about how great you are without ever answering
              the questions people actually type into AI. The businesses that
              get cited are the ones that treat their content as answers, not
              advertisements.
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3 font-plus-jakarta">
              5. Niche Clarity Over Generalist Positioning
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              AI platforms prefer specialists. When a user asks for a recommendation,
              the AI is looking for the business that most clearly matches the
              specific need. If your competitor positions themselves as the go-to
              expert in one specialty while you position yourself as a
              &quot;full-service&quot; provider, the AI will choose the specialist
              every time. Generalist messaging creates ambiguity. Ambiguity kills
              AI citations.
            </p>

            {/* Section 3 */}
            <h2 className="text-2xl font-bold text-white mt-12 mb-4 font-plus-jakarta">
              Why Traditional SEO Will Not Fix This
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              If your instinct is to call your SEO agency and ask them to fix your
              AI visibility, pause. Traditional SEO and AI visibility are not the
              same game. They overlap, but they operate on fundamentally different
              logic. SEO is about rankings and clicks. AI visibility is about
              citations and authority.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Your competitor might rank below you on Google and still appear above
              you on ChatGPT. That is because AI platforms evaluate different signals:
              topical depth over keyword density, content structure over backlink
              count, entity consistency over domain authority. A business can have
              perfect SEO and zero AI visibility. We see this pattern constantly.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              This does not mean SEO is dead. It means SEO alone is no longer enough.
              The businesses that dominate in 2026 and beyond are the ones that
              layer AI visibility strategy on top of their existing search presence.
              If you want to understand more about why your current approach might
              be falling short, our analysis of{' '}
              <Link href="/blog/why-chatgpt-recommends-competitors" className="text-orange-400 hover:text-orange-300 transition-colors">
                why ChatGPT recommends your competitors
              </Link>
              {' '}breaks down the specific authority signals AI platforms evaluate.
            </p>

            {/* Section 4 */}
            <h2 className="text-2xl font-bold text-white mt-12 mb-4 font-plus-jakarta">
              The Compounding Problem: Why Waiting Makes It Worse
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              AI visibility is not a switch you flip. It is an asset that compounds
              over time. The longer your competitor has been building authority
              signals, the harder it becomes for you to catch up. Every day they
              are cited, their authority grows. Every day you are not cited, the
              gap widens.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              This compounding effect works in both directions. The GEO (Generative
              Engine Optimization) market was valued at $848 million in 2025 and
              is projected to reach $33.7 billion by 2034. That growth represents
              the flood of businesses that will eventually invest in AI visibility.
              The ones investing now are building moats. The ones waiting will face
              a much more crowded, competitive landscape when they finally start.
            </p>
            <div className="my-6 p-6 rounded-xl border border-gray-800 bg-gray-900">
              <p className="text-white font-semibold mb-2">The Early Mover Reality:</p>
              <p className="text-gray-300 leading-relaxed">
                Over a third of businesses admit they do not yet have the expertise
                to make AI work effectively. That means your window of opportunity
                is still open. But it is closing. Every competitor that figures this
                out before you makes your path harder.
              </p>
            </div>

            {/* Section 5 */}
            <h2 className="text-2xl font-bold text-white mt-12 mb-4 font-plus-jakarta">
              What You Need to Know (Without the Playbook)
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We are not going to give you a checklist and send you on your way.
              AI visibility strategy is not a DIY project you knock out over a
              weekend. The businesses that try to implement it themselves typically
              make one of three mistakes: they optimize for the wrong signals,
              they structure their content in ways AI cannot parse, or they build
              authority in areas that do not match what AI platforms actually
              evaluate.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              What we can tell you is that the gap between your competitor and you
              comes down to measurable, identifiable factors. It is not random. It
              is not luck. It is not about who has the bigger marketing budget. It
              is about who has built the right signals in the right structure with
              the right consistency. Those signals can be audited, gaps can be
              identified, and a strategy can be built to close them.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              The first step is understanding exactly where you stand. Not where you
              think you stand, but where the data says you stand. That means running
              your business through the same evaluation criteria AI platforms use
              and comparing your results to the competitor that keeps appearing
              instead of you. You can start by{' '}
              <Link href="/blog/check-if-ai-recommends-your-business" className="text-orange-400 hover:text-orange-300 transition-colors">
                checking whether AI recommends your business
              </Link>
              {' '}right now.
            </p>

            {/* Section 6 */}
            <h2 className="text-2xl font-bold text-white mt-12 mb-4 font-plus-jakarta">
              The Bottom Line
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Your competitor is not on AI search because they are better than you.
              They are on AI search because they made themselves visible to AI
              platforms in ways you have not. The signals are specific. The gaps
              are identifiable. The strategy to close them exists.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              The only question is whether you close the gap now, while the window
              is still open, or wait until every competitor in your market has
              figured it out and the cost of catching up has multiplied.
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
                  Why does my competitor show up on ChatGPT but I do not?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  AI platforms cite businesses that demonstrate clear topical authority,
                  structured content, consistent online information, and strong entity
                  signals. If your competitor has deeper expertise content, better
                  structured data, and more consistent citations across the web, AI
                  platforms treat them as the safer, more authoritative recommendation.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-gray-800 bg-gray-900">
                <h3 className="text-lg font-semibold text-white mb-3">
                  How do I check if AI platforms are recommending my competitor?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Ask ChatGPT, Perplexity, and Google Gemini the same questions your
                  customers ask. Try queries like &quot;best [your service] in [your
                  city]&quot; or &quot;who should I hire for [your specialty].&quot;
                  Document which businesses appear. If your competitor is cited and
                  you are not, that confirms an AI visibility gap you need to close.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-gray-800 bg-gray-900">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Can a smaller business outrank a larger competitor on AI search?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Yes. AI platforms do not rank by company size or ad spend. They cite
                  businesses that demonstrate the clearest, most structured expertise
                  for a specific query. A small business with deep niche authority
                  content and proper structured data can appear ahead of larger
                  competitors that rely on brand recognition alone.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-gray-800 bg-gray-900">
                <h3 className="text-lg font-semibold text-white mb-3">
                  How long does it take to close the AI visibility gap with a competitor?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Most businesses begin seeing shifts in AI citations within{' '}
                  <strong className="text-white">60 to 90 days</strong> of implementing
                  a targeted authority strategy. The timeline depends on the size of
                  the gap, how much existing content you have, and how quickly your
                  competitor is also adapting.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-gray-800 bg-gray-900">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Is my Google ranking related to my AI search visibility?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Not directly. AI platforms use their own evaluation criteria, which
                  overlap with but are distinct from Google ranking factors. A business
                  can rank well on Google and still be invisible to ChatGPT, Perplexity,
                  or Google AI Overviews. AI visibility requires a separate strategy
                  focused on authority signals, structured data, and entity consistency.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-gray-800 bg-gray-900">
                <h3 className="text-lg font-semibold text-white mb-3">
                  What is the biggest mistake businesses make when trying to appear on AI search?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Assuming that traditional SEO tactics will carry over to AI search.
                  Keyword stuffing, link building, and paid ads have no direct
                  influence on whether ChatGPT or Perplexity cites your business.
                  AI platforms evaluate topical depth, content structure, entity
                  recognition, and cross-platform consistency.
                </p>
              </div>

            </div>
          </section>

          {/* CTA Section */}
          <div className="mt-16 p-8 rounded-2xl border border-gray-800 bg-gradient-to-r from-gray-900 to-gray-800">
            <h2 className="text-2xl font-bold text-white mb-4 font-plus-jakarta">
              Find Out Exactly Why Your Competitor Is Beating You on AI Search
            </h2>
            <p className="text-gray-300 mb-6">
              Our free Blind Spot Report shows you exactly where your competitor
              has an advantage in AI visibility, which authority signals you are
              missing, and what it would take to close the gap. No pitch, just the data.
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
