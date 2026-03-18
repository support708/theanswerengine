import type { Metadata } from 'next'
import Link from 'next/link'

export const revalidate = 86400
export const dynamic = 'force-static'
export const dynamicParams = true

const title = 'Why Fresh Content Is the Key to AI Search Visibility'
const description =
  'AI platforms cite fresher content 25.7% more than traditional search results. Learn why updating your website regularly is the single most important factor for getting recommended by ChatGPT, Perplexity, and Google AI Overviews.'
const slug = 'why-fresh-content-key-ai-search-visibility'
const publishDate = '2026-03-17'

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'content freshness AI search',
    'AI search visibility',
    'fresh content ranking signal',
    'content updates AI citations',
    'ChatGPT content freshness',
    'Google AI Overviews freshness',
    'Perplexity citations fresh content',
    'website update frequency AI',
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
          name: 'How often should I update my website content for AI visibility?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Research shows that content updated within the last 30 to 90 days gets cited significantly more often by AI platforms. For competitive topics, aim to review and update your key pages at least once per quarter. Even a monthly refresh of your most important service pages can dramatically improve your chances of being cited.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does changing the publish date on a page count as a content update?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. AI platforms evaluate whether updates change the substance of the page, including intent alignment, examples, data, and context. Simply changing a date or swapping a screenshot is a cosmetic change that AI systems can detect. Google recommends that substantive updates involve changes to 20 to 30 percent of the textual content on a page.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which AI platform cares most about content freshness?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Perplexity shows the strongest freshness preference. According to Ahrefs research, approximately 50 percent of Perplexity citations come from content published or updated in the current year. ChatGPT also favors newer pages, while Google AI Overviews tend to cite content that is slightly older, behaving more like traditional search results.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can a small local business compete with larger websites for AI citations?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. AI platforms do not simply cite the biggest websites. They cite the most authoritative and current source on a specific topic. A local HVAC company that regularly updates its content with seasonal tips, current pricing, and recent project examples can outperform a national directory that has not updated its pages in years.',
          },
        },
        {
          '@type': 'Question',
          name: 'What kind of content updates actually improve AI visibility?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Meaningful updates include adding new data or statistics, updating recommendations based on current best practices, adding recent case studies or examples, refreshing pricing or availability information, and incorporating new industry developments. The update should reflect that your page contains current, relevant knowledge.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does stale content take to lose AI visibility?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Content without freshness signals can begin losing citation priority in as little as 14 days for fast-moving topics. For most service-related content, visibility drops noticeably after three to six months without meaningful updates. Pages not updated quarterly are three times more likely to lose citations in AI-generated answers.',
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
              {/* Calendar/refresh pattern representing content freshness */}
              <rect x="100" y="80" width="120" height="100" rx="8" stroke="#FF6A00" strokeWidth="0.8" />
              <line x1="100" y1="110" x2="220" y2="110" stroke="#FF6A00" strokeWidth="0.5" />
              <line x1="130" y1="80" x2="130" y2="95" stroke="#FF6A00" strokeWidth="1" />
              <line x1="190" y1="80" x2="190" y2="95" stroke="#FF6A00" strokeWidth="1" />
              <circle cx="160" cy="145" r="20" stroke="#FF6A00" strokeWidth="0.5" />
              <path d="M155 145 L165 145 M160 140 L160 150" stroke="#FF6A00" strokeWidth="0.8" />

              {/* Circular arrows representing refresh cycle */}
              <circle cx="400" cy="200" r="60" stroke="#FF6A00" strokeWidth="0.5" strokeDasharray="8 4" />
              <circle cx="400" cy="200" r="40" stroke="#FF6A00" strokeWidth="0.3" strokeDasharray="4 4" />
              <path d="M440 180 L450 170 L455 185" stroke="#FF6A00" strokeWidth="0.8" fill="none" />
              <path d="M360 220 L350 230 L345 215" stroke="#FF6A00" strokeWidth="0.8" fill="none" />

              {/* Timeline dots representing updates */}
              <line x1="550" y1="100" x2="550" y2="300" stroke="#FF6A00" strokeWidth="0.3" />
              <circle cx="550" cy="120" r="4" fill="#FF6A00" opacity="0.3" />
              <circle cx="550" cy="160" r="4" fill="#FF6A00" opacity="0.4" />
              <circle cx="550" cy="200" r="4" fill="#FF6A00" opacity="0.6" />
              <circle cx="550" cy="240" r="4" fill="#FF6A00" opacity="0.8" />
              <circle cx="550" cy="280" r="5" fill="#FF6A00" opacity="1" />
              <line x1="555" y1="120" x2="600" y2="120" stroke="#FF6A00" strokeWidth="0.3" />
              <line x1="555" y1="160" x2="620" y2="160" stroke="#FF6A00" strokeWidth="0.3" />
              <line x1="555" y1="200" x2="640" y2="200" stroke="#FF6A00" strokeWidth="0.3" />
              <line x1="555" y1="240" x2="660" y2="240" stroke="#FF6A00" strokeWidth="0.3" />
              <line x1="555" y1="280" x2="700" y2="280" stroke="#FF6A00" strokeWidth="0.3" />

              {/* Upward trending graph */}
              <polyline points="650,320 680,290 700,300 730,260 760,230" stroke="#FF6A00" strokeWidth="0.8" fill="none" />
            </svg>
            <div className="relative px-8 py-16 sm:px-12 sm:py-20">
              <p className="text-sm font-medium text-orange-400 mb-4">Content Strategy</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 font-plus-jakarta">
                Why Fresh Content Is the Key to AI Search Visibility
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
              Your website might have great content. It might rank well on Google. But if
              you have not updated it recently, AI platforms are probably ignoring it.
              ChatGPT, Perplexity, and Google AI Overviews are all shifting toward
              fresher sources when generating answers. And the data backs this up. An
              Ahrefs study analyzing 17 million citations found that{' '}
              <strong className="text-white">AI-cited content is 25.7% fresher
              than what appears in traditional Google search results</strong>. For local
              service businesses, this means that a static website is no longer just
              outdated. It is invisible.
            </p>

            {/* Section 1 */}
            <h2 className="text-2xl font-bold text-white mt-12 mb-4 font-plus-jakarta">
              The Freshness Shift: Why AI Platforms Prefer Newer Content
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Google has used freshness as a ranking signal for over a decade through
              its Query Deserves Freshness (QDF) algorithm. When a topic is trending
              or rapidly evolving, Google boosts newer content in its results. But AI
              platforms have taken this further. They do not just prefer fresh content
              for trending topics. They prefer fresh content for almost everything.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              The logic is simple. AI platforms generate answers that users trust as
              current and accurate. Citing a page that was last updated three years
              ago creates a credibility risk. If the information is wrong or outdated,
              the AI looks bad. So these platforms build in a preference for sources
              that demonstrate recent attention and maintenance.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              According to research from Ahrefs, the average age of URLs cited by AI
              assistants is 1,064 days, compared to 1,432 days for URLs in organic
              search results. That gap matters. It means AI platforms are actively
              selecting newer sources over older ones, even when the older content
              ranks well in traditional search.
            </p>

            {/* Stat Callout 1 */}
            <div className="my-8 p-6 rounded-xl border border-orange-500/30 bg-orange-500/5">
              <p className="text-orange-400 font-bold text-lg mb-2">The Freshness Gap</p>
              <p className="text-gray-300 leading-relaxed mb-3">
                AI-cited content is <strong className="text-white">25.7% fresher</strong> than
                content appearing in traditional Google organic results. The average AI citation
                is from a page that is roughly 2.9 years old, while organic results average
                3.9 years old.
              </p>
              <p className="text-sm text-gray-500">
                Source: Ahrefs study of 17 million AI citations across 7 platforms
              </p>
            </div>

            <p className="text-gray-300 leading-relaxed mb-4">
              This is not just a technical curiosity. It is a competitive advantage
              hiding in plain sight. While most businesses treat their website as a
              &quot;set it and forget it&quot; asset, the ones updating regularly are
              capturing a growing share of AI recommendations. And with AI Overviews
              now appearing in nearly half of Google searches, the stakes have never
              been higher.
            </p>

            {/* Section 2 */}
            <h2 className="text-2xl font-bold text-white mt-12 mb-4 font-plus-jakarta">
              How Each AI Platform Handles Freshness Differently
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Not all AI platforms weigh freshness equally. Understanding the
              differences helps you prioritize your update strategy. Here is how the
              three major platforms compare.
            </p>
            <div className="my-6 p-6 rounded-xl border border-gray-800 bg-gray-900">
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 font-bold mt-0.5">1.</span>
                  <span>
                    <strong className="text-white">Perplexity</strong> shows the
                    strongest freshness bias. Approximately 50% of Perplexity
                    citations come from content published or updated in the current
                    year. Perplexity also displays publish and update dates
                    prominently in its citations, making recency a visible trust
                    signal for users. Content that maintains 30-day freshness earns
                    3.2x more Perplexity citations than stale pages.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 font-bold mt-0.5">2.</span>
                  <span>
                    <strong className="text-white">ChatGPT</strong> also favors
                    newer content. Research shows that 53% of content cited by
                    ChatGPT had been updated within the last six months. ChatGPT
                    orders its in-text references from newest to oldest,
                    giving priority placement to recently updated sources.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 font-bold mt-0.5">3.</span>
                  <span>
                    <strong className="text-white">Google AI Overviews</strong> behave
                    most like traditional search. They cite content that is slightly
                    older than what ChatGPT prefers, drawing from Google&apos;s existing
                    index. However, with AI Overviews now appearing in up to 48% of
                    tracked queries as of early 2026 (up from around 13% in March
                    2025), even this platform increasingly rewards content that
                    demonstrates current relevance.
                  </span>
                </li>
              </ul>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              The takeaway is clear. If you want to be cited across all three major AI
              platforms, your content needs to show signs of recent, substantive
              updates. For a deeper look at how each platform selects sources, see our
              guide on{' '}
              <Link href="/blog/how-perplexity-decides-what-to-cite" className="text-orange-400 hover:text-orange-300 transition-colors">
                how Perplexity decides what to cite
              </Link>.
            </p>

            {/* Section 3 */}
            <h2 className="text-2xl font-bold text-white mt-12 mb-4 font-plus-jakarta">
              What Counts as a &quot;Real&quot; Content Update
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Before you rush to change every date on your website, understand this:
              AI platforms can tell the difference between a cosmetic refresh and a
              meaningful update. Changing a publish date, swapping a stock photo, or
              rewording a sentence does not count. These cosmetic changes can actually
              trigger quality signals that work against you.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Google has indicated that substantive updates should involve changes to
              20 to 30 percent of the textual content on a page. AI systems evaluate
              whether an update changes the substance of the page, including the data,
              the recommendations, the examples, and the context. A real update
              reflects that the author has revisited the topic and incorporated current
              knowledge.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Here is what qualifies as a meaningful content update:
            </p>
            <div className="my-6 p-6 rounded-xl border border-gray-800 bg-gray-900">
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">&#10003;</span>
                  <span>Adding new statistics, data points, or research findings from the current year</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">&#10003;</span>
                  <span>Updating recommendations based on changes in your industry or service area</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">&#10003;</span>
                  <span>Adding recent case studies, project examples, or customer outcomes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">&#10003;</span>
                  <span>Refreshing pricing, availability, or service details to reflect current offerings</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">&#10003;</span>
                  <span>Incorporating new tools, techniques, or regulations relevant to your field</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">&#10003;</span>
                  <span>Expanding sections that answer questions your customers are currently asking</span>
                </li>
              </ul>
            </div>

            {/* Section 4 */}
            <h2 className="text-2xl font-bold text-white mt-12 mb-4 font-plus-jakarta">
              The Cost of Doing Nothing
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Most local service businesses build a website once and then leave it
              untouched for years. The &quot;About Us&quot; page still references an
              award from 2019. The blog has not been updated since 2022. The service
              pages describe offerings that have evolved significantly. This is
              extremely common, and it is extremely costly.
            </p>

            {/* Stat Callout 2 */}
            <div className="my-8 p-6 rounded-xl border border-orange-500/30 bg-orange-500/5">
              <p className="text-orange-400 font-bold text-lg mb-2">The Visibility Cliff</p>
              <p className="text-gray-300 leading-relaxed mb-3">
                Pages not updated quarterly are{' '}
                <strong className="text-white">3x more likely to lose citations</strong> in
                AI-generated answers. Content without freshness signals can begin losing
                citation priority in as little as 14 days for fast-moving topics, with
                significant drops after three to six months without meaningful updates.
              </p>
              <p className="text-sm text-gray-500">
                Source: Quattr content freshness research, 2025
              </p>
            </div>

            <p className="text-gray-300 leading-relaxed mb-4">
              The impact compounds over time. As AI search grows (with AI Overviews
              reducing organic click-through rates by up to 61% for queries where they
              appear), the businesses that get cited in AI answers capture a larger
              share of remaining clicks. Brands cited in AI Overviews earn 35% more
              organic clicks and 91% more paid clicks compared to those that are not
              cited. Falling out of AI citations means losing ground on two fronts:
              fewer AI recommendations and fewer traditional clicks.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              If your competitors are updating their content regularly and you are not,
              the gap in AI visibility will widen every month. This is especially true
              for service businesses where customers are increasingly asking AI
              platforms questions like &quot;best plumber near me&quot; or &quot;how
              much does roof repair cost in 2026.&quot; For more on how this shift is
              reshaping search, read our analysis of{' '}
              <Link href="/blog/google-ai-overviews-replacing-search" className="text-orange-400 hover:text-orange-300 transition-colors">
                how Google AI Overviews are replacing traditional search
              </Link>.
            </p>

            {/* Section 5 */}
            <h2 className="text-2xl font-bold text-white mt-12 mb-4 font-plus-jakarta">
              A Practical Content Freshness Calendar for Local Businesses
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              You do not need to become a full-time content creator. You need a
              system. Here is a realistic freshness schedule that any local service
              business can follow, even with limited time.
            </p>

            <h3 className="text-xl font-bold text-white mt-8 mb-3 font-plus-jakarta">
              Weekly (15 minutes)
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Review your service pages. Is any information outdated? Update pricing,
              add a recent project mention, or adjust seasonal content. Even small,
              genuine updates signal to AI crawlers that the page is actively
              maintained.
            </p>

            <h3 className="text-xl font-bold text-white mt-8 mb-3 font-plus-jakarta">
              Monthly (1 to 2 hours)
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Publish one new blog post or substantially update an existing one. Focus
              on questions your customers are actually asking. Use the exact language
              they use when they call or email you. This aligns your content with the
              natural language queries that AI platforms process.
            </p>

            <h3 className="text-xl font-bold text-white mt-8 mb-3 font-plus-jakarta">
              Quarterly (half day)
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Do a full content audit. Review every major page on your site. Update
              statistics, refresh examples, and add any new services or capabilities.
              This is also a good time to check whether your content structure supports
              AI discoverability. Our guide on{' '}
              <Link href="/blog/what-content-does-chatgpt-read-on-my-website" className="text-orange-400 hover:text-orange-300 transition-colors">
                what content ChatGPT actually reads on your website
              </Link>{' '}
              can help you identify which pages matter most.
            </p>

            {/* Section 6 */}
            <h2 className="text-2xl font-bold text-white mt-12 mb-4 font-plus-jakarta">
              Freshness Alone Is Not Enough
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Content freshness is a powerful signal, but it works best when combined
              with other factors that AI platforms evaluate. A recently updated page
              with thin, generic content will still underperform compared to a
              well-structured, authoritative page that has been updated with genuine
              expertise.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              The businesses that win in AI search combine freshness with depth. They
              do not just update dates. They add real knowledge. They answer the
              specific questions their customers ask. They demonstrate that they are
              active, knowledgeable, and current in their field.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Building a content structure that supports both freshness and authority
              is the ultimate competitive advantage. To learn how to structure your
              content for maximum AI impact, explore our guide on{' '}
              <Link href="/blog/hub-spoke-content-strategy-ai-citations" className="text-orange-400 hover:text-orange-300 transition-colors">
                how to write blog content that gets cited by AI
              </Link>.
            </p>

            {/* Stat Callout 3 */}
            <div className="my-8 p-6 rounded-xl border border-orange-500/30 bg-orange-500/5">
              <p className="text-orange-400 font-bold text-lg mb-2">AI Search Is Growing Fast</p>
              <p className="text-gray-300 leading-relaxed mb-3">
                Google AI Overviews reached{' '}
                <strong className="text-white">48% of tracked queries</strong> by February
                2026, up from around 13% in March 2025. Meanwhile, 31% of ChatGPT prompts
                now trigger a web search, with local intent queries triggering searches 59%
                of the time.
              </p>
              <p className="text-sm text-gray-500">
                Sources: ALM Corp industry analysis, Position Digital AI SEO statistics
              </p>
            </div>

            {/* Section 7 */}
            <h2 className="text-2xl font-bold text-white mt-12 mb-4 font-plus-jakarta">
              The Bottom Line: Update or Disappear
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              The shift toward AI-powered search is not a future prediction. It is
              happening now. Every week that your website sits untouched, AI platforms
              are moving on to fresher, more current sources. Your competitors who
              update regularly are building an AI visibility advantage that compounds
              over time.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              The good news is that this is one of the most actionable changes you can
              make. You do not need to redesign your website. You do not need to hire
              a full-time content team. You need to commit to regular, meaningful
              updates that keep your content current and your expertise visible.
            </p>
            <p className="text-gray-300 leading-relaxed mb-10">
              Start with your most important service pages. Update them this week.
              Then build a monthly rhythm. In three months, you will have a fresher,
              more AI-visible website than the vast majority of your competitors. And
              in a world where AI platforms are rapidly becoming the primary way
              customers find businesses, that visibility is everything.
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
                  q: 'How often should I update my website content for AI visibility?',
                  a: 'Research shows that content updated within the last 30 to 90 days gets cited significantly more often by AI platforms. For competitive topics, aim to review and update your key pages at least once per quarter. Even a monthly refresh of your most important service pages can dramatically improve your chances of being cited.',
                },
                {
                  q: 'Does changing the publish date on a page count as a content update?',
                  a: 'No. AI platforms evaluate whether updates change the substance of the page, including intent alignment, examples, data, and context. Simply changing a date or swapping a screenshot is a cosmetic change that AI systems can detect. Google recommends that substantive updates involve changes to 20 to 30 percent of the textual content on a page.',
                },
                {
                  q: 'Which AI platform cares most about content freshness?',
                  a: 'Perplexity shows the strongest freshness preference. Approximately 50 percent of Perplexity citations come from content published or updated in the current year. ChatGPT also favors newer pages, while Google AI Overviews tend to cite content that is slightly older, behaving more like traditional search results.',
                },
                {
                  q: 'Can a small local business compete with larger websites for AI citations?',
                  a: 'Yes. AI platforms do not simply cite the biggest websites. They cite the most authoritative and current source on a specific topic. A local HVAC company that regularly updates its content with seasonal tips, current pricing, and recent project examples can outperform a national directory that has not updated its pages in years.',
                },
                {
                  q: 'What kind of content updates actually improve AI visibility?',
                  a: 'Meaningful updates include adding new statistics, data points, or research findings from the current year, updating recommendations based on current best practices, adding recent case studies or examples, refreshing pricing or availability information, and incorporating new industry developments.',
                },
                {
                  q: 'How long does stale content take to lose AI visibility?',
                  a: 'Content without freshness signals can begin losing citation priority in as little as 14 days for fast-moving topics. For most service-related content, visibility drops noticeably after three to six months without meaningful updates. Pages not updated quarterly are three times more likely to lose citations in AI-generated answers.',
                },
              ].map((faq, i) => (
                <div
                  key={i}
                  className="p-6 rounded-xl border border-gray-800 bg-gray-900/50"
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
          <section className="my-16 p-8 sm:p-12 rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/10 to-transparent text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-plus-jakarta">
              Is Your Content Fresh Enough for AI?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Find out exactly where your business stands in AI search results.
              Our free Blind Spot Report reveals which AI platforms can see your
              business and which ones are recommending your competitors instead.
            </p>
            <Link
              href="/blindspot"
              className="inline-block px-8 py-4 rounded-xl font-semibold text-white text-lg transition-all hover:scale-105"
              style={{ backgroundColor: '#FF6A00' }}
            >
              Get Your Free Blind Spot Report
            </Link>
            <p className="text-sm text-gray-500 mt-4">No pitch, just the data.</p>
          </section>

          {/* Author Attribution */}
          <section className="mt-12 pt-8 border-t border-gray-800">
            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm"
                style={{ backgroundColor: '#FF6A00' }}
              >
                AE
              </div>
              <div>
                <p className="text-white font-semibold">The Answer Engine Team</p>
                <p className="text-gray-500 text-sm">
                  Helping local businesses get found, cited, and recommended by AI
                  search platforms.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
