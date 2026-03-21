import type { Metadata } from 'next'
import Link from 'next/link'

export const revalidate = 86400
export const dynamic = 'force-static'
export const dynamicParams = true

const title = 'How to Track Your AI Search Visibility (Tools and Metrics That Matter)'
const description =
  'Learn which tools and metrics actually measure your AI search visibility. Compare Otterly, Peec AI, Profound, and free methods for tracking citations across ChatGPT, Perplexity, and Google AI.'
const slug = 'how-to-track-ai-search-visibility'
const publishDate = '2026-03-18'

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'AI search visibility tracking',
    'AI citation tracking tools',
    'AI search metrics',
    'Otterly AI',
    'Peec AI',
    'Profound AI',
    'AI visibility monitoring',
    'share of LLM',
    'AI search analytics',
    'track AI citations',
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
          name: 'What is AI search visibility tracking?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'AI search visibility tracking measures how often and how accurately AI platforms like ChatGPT, Perplexity, and Google AI Overviews mention, cite, or recommend your business when users ask relevant questions. It includes monitoring citation frequency, brand mentions, share of voice, and the accuracy of information AI shares about you.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much do AI visibility tracking tools cost?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Pricing varies widely. Otterly AI starts at $29 per month for 15 search prompts. Peec AI starts at roughly $89 per month for 25 prompts. Enterprise platforms like Profound offer custom pricing for large-scale monitoring. You can also track visibility manually for free by running test prompts across AI platforms and recording results in a spreadsheet.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I track AI visibility for free?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. You can run manual audits by asking test prompts across ChatGPT, Perplexity, and Google AI Overviews, then logging the results in a spreadsheet. This approach works well for small businesses monitoring a few key queries. Paid tools become valuable when you need to track dozens of prompts, monitor competitors, or run automated weekly reports.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is share of LLM and why does it matter?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Share of LLM measures how often your brand is mentioned compared to competitors in AI-generated answers. It is the AI equivalent of share of voice in traditional marketing. A high share of LLM means AI platforms consistently recommend you over competitors when users ask relevant questions.',
          },
        },
        {
          '@type': 'Question',
          name: 'How often should I check my AI search visibility?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'At minimum, once per month. AI citation sources change significantly from month to month. Google AI Overviews showed 59.3% citation drift between June and July 2025, meaning the sources cited changed for nearly 6 out of 10 queries. Weekly monitoring is ideal if you are actively optimizing or competing in a crowded market.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which AI platforms should I track visibility on?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Focus on the three platforms that drive the most AI referral traffic: ChatGPT (the largest by user base with over 800 million weekly active users), Google AI Overviews (which appear in a growing percentage of Google searches), and Perplexity (which shows its citation sources transparently). If your industry is research-heavy, also consider tracking Claude and Gemini.',
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
                'linear-gradient(135deg, #1a0a00 0%, #1a1a2e 50%, #111827 100%)',
            }}
          >
            <svg
              className="absolute inset-0 w-full h-full opacity-10"
              viewBox="0 0 800 400"
              fill="none"
              aria-hidden="true"
            >
              {/* Dashboard / analytics pattern */}
              <rect x="80" y="100" width="200" height="140" rx="8" stroke="#FF6A00" strokeWidth="1" fill="none" opacity="0.2" />
              <line x1="100" y1="200" x2="130" y2="170" stroke="#FF6A00" strokeWidth="1.5" opacity="0.25" />
              <line x1="130" y1="170" x2="160" y2="185" stroke="#FF6A00" strokeWidth="1.5" opacity="0.25" />
              <line x1="160" y1="185" x2="190" y2="150" stroke="#FF6A00" strokeWidth="1.5" opacity="0.25" />
              <line x1="190" y1="150" x2="220" y2="140" stroke="#FF6A00" strokeWidth="1.5" opacity="0.25" />
              <line x1="220" y1="140" x2="250" y2="160" stroke="#FF6A00" strokeWidth="1.5" opacity="0.25" />
              {/* Bar chart */}
              <rect x="500" y="180" width="20" height="60" fill="#FF6A00" opacity="0.15" rx="2" />
              <rect x="530" y="150" width="20" height="90" fill="#FF6A00" opacity="0.2" rx="2" />
              <rect x="560" y="130" width="20" height="110" fill="#FF6A00" opacity="0.25" rx="2" />
              <rect x="590" y="160" width="20" height="80" fill="#FF6A00" opacity="0.18" rx="2" />
              <rect x="620" y="110" width="20" height="130" fill="#FF6A00" opacity="0.22" rx="2" />
              {/* Dots grid */}
              {[0, 1, 2, 3, 4, 5, 6, 7].map((i) =>
                [0, 1, 2, 3, 4].map((j) => (
                  <circle
                    key={`${i}-${j}`}
                    cx={80 + i * 90}
                    cy={60 + j * 80}
                    r="1.5"
                    fill="#FF6A00"
                    opacity="0.12"
                  />
                ))
              )}
            </svg>
            <div className="relative px-8 py-16 sm:px-12 sm:py-20">
              <p className="inline-block text-sm font-medium text-orange-400 mb-4 border border-orange-500/30 rounded-full px-4 py-1">
                AEO Education
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 font-plus-jakarta">
                How to Track Your AI Search Visibility (Tools and Metrics That Matter)
              </h1>
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span>March 18, 2026</span>
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
              You already track your Google rankings. You monitor your paid ad
              performance. But when a potential customer asks ChatGPT for a
              recommendation in your category, do you know whether your business
              shows up? AI-referred traffic grew 527% between January and May
              2025, according to Search Engine Land. That number keeps climbing.
              If you are not tracking your AI search visibility, you are flying
              blind in the fastest-growing discovery channel in years. This guide
              covers the tools, metrics, and methods that actually matter for
              measuring your AI search presence.
            </p>

            {/* Stat Callout 1 */}
            <div className="rounded-xl border border-orange-500/30 bg-orange-500/5 p-6 mb-10">
              <p className="text-orange-400 font-semibold text-lg mb-2">AI Citations Change Fast</p>
              <p className="text-gray-300 text-base leading-relaxed">
                Google AI Overviews recorded 59.3% citation drift between June
                and July 2025. Perplexity showed 40.5% monthly drift.
                ChatGPT landed at 54.1%. That means the sources AI platforms
                cite can change for more than half of all queries in a single
                month. Without ongoing tracking, you will not know if you have
                been dropped.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4 font-plus-jakarta">
              Why AI Visibility Tracking Is Different from SEO Tracking
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Traditional SEO tracking is straightforward. You monitor keyword
              rankings, organic traffic, click-through rates, and backlinks.
              The tools are mature and the metrics are standardized. AI
              visibility tracking is a different challenge entirely.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              AI platforms do not return a list of ten blue links. They generate
              conversational answers, sometimes citing sources and sometimes
              not. The same question can produce different answers depending on
              timing, user location, and conversation history. There is no fixed
              &quot;position 1&quot; to aim for.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              This means the metrics you track and the tools you use need to be
              built specifically for AI search. If you have not run a basic
              check yet, start with our{' '}
              <Link href="/blog/5-minute-ai-visibility-audit" className="text-orange-400 underline hover:text-orange-300">
                5-minute AI visibility audit
              </Link>{' '}
              to see where you stand today.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4 font-plus-jakarta">
              The 5 Metrics That Actually Matter
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Not every number you can measure is worth measuring. These five
              metrics give you a clear, actionable picture of your AI search
              performance.
            </p>

            <h3 className="text-xl font-bold text-white mt-8 mb-3 font-plus-jakarta">
              1. Citation Frequency
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Citation frequency measures how often AI systems reference your
              content or website in their responses. An AI citation occurs when
              a platform explicitly credits your site as a source, often
              including a direct link. This is the clearest signal that AI
              platforms view your content as authoritative. Track it by running
              a consistent set of test prompts across ChatGPT, Perplexity, and
              Google AI Overviews at regular intervals.
            </p>

            <h3 className="text-xl font-bold text-white mt-8 mb-3 font-plus-jakarta">
              2. Share of LLM (AI Share of Voice)
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Share of LLM quantifies how often your brand is mentioned compared
              to competitors in AI-generated answers. Think of it as the AI
              equivalent of traditional share of voice. If a customer asks
              &quot;best plumber in Austin&quot; and your competitor appears in 7
              out of 10 AI responses while you appear in 2, your share of LLM is
              20% compared to their 70%. This metric matters because AI
              recommendations often become the only answer a customer sees.
            </p>

            <h3 className="text-xl font-bold text-white mt-8 mb-3 font-plus-jakarta">
              3. Brand Mention Accuracy
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Being mentioned is only half the equation. What AI says about you
              matters just as much as whether it says anything at all. Track
              whether AI platforms correctly report your services, location,
              contact information, and specialties. Inaccurate information can
              be worse than no mention at all. Most AI visibility tools measure
              popularity, but very few measure accuracy. You may need to check
              this manually, at least for now.
            </p>

            <h3 className="text-xl font-bold text-white mt-8 mb-3 font-plus-jakarta">
              4. Citation Drift Rate
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Citation drift measures how much the sources cited by AI platforms
              change from one period to the next. Research from Maximus Labs
              found that 40% to 60% of AI sources change monthly. A high drift
              rate means you need to monitor frequently because today&apos;s
              citation can vanish by next month. Track the same prompts weekly
              or monthly and note when your citations appear, disappear, or get
              replaced by a competitor.
            </p>

            <h3 className="text-xl font-bold text-white mt-8 mb-3 font-plus-jakarta">
              5. AI Referral Traffic
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              This is the metric that connects AI visibility to actual business
              results. Check your web analytics for traffic coming from
              chat.openai.com, perplexity.ai, and Google AI features. AI
              platforms generated over 1.1 billion referral visits in June 2025
              alone, a 357% year-over-year increase according to Similarweb.
              If your analytics show growing AI referral traffic, your
              optimization efforts are working. If traffic is flat or
              declining, something needs attention.
            </p>

            {/* Stat Callout 2 */}
            <div className="rounded-xl border border-orange-500/30 bg-orange-500/5 p-6 mb-10">
              <p className="text-orange-400 font-semibold text-lg mb-2">AI Referrals Are Growing Fast</p>
              <p className="text-gray-300 text-base leading-relaxed">
                AI-powered search engines now account for an estimated 12% to
                18% of total referral traffic, up from 5% to 8% in late 2024.
                ChatGPT search referrals increased over 200% since mid-2025,
                while Perplexity referrals grew 180% in the same period. This
                traffic source is still small compared to organic search, but
                the growth trajectory is impossible to ignore.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4 font-plus-jakarta">
              AI Visibility Tracking Tools Compared
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              A growing ecosystem of tools now exists specifically for tracking
              AI search visibility. Here are the leading options as of early
              2026, organized by business size and budget.
            </p>

            <h3 className="text-xl font-bold text-white mt-8 mb-3 font-plus-jakarta">
              Otterly AI: Best for Small Businesses
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Otterly focuses exclusively on tracking brand visibility inside
              AI-generated responses. It has grown to over 10,000 users by
              keeping things simple and affordable. The Lite plan starts at $29
              per month for 15 search prompts, while the Standard plan offers
              100 prompts for $189 per month. Otterly is a solid starting point
              if you want automated tracking without the complexity of
              enterprise platforms.
            </p>

            <h3 className="text-xl font-bold text-white mt-8 mb-3 font-plus-jakarta">
              Peec AI: Best for Agencies and Mid-Market
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Peec AI, based in Germany, offers real-time AI visibility
              monitoring with strong competitive benchmarking and
              client-facing exports. Plans start at roughly $89 per month for
              25 prompts, scaling to $199 per month for 100 prompts. The
              platform raised approximately 7 million euros in funding within
              five months, signaling strong market demand. Peec is particularly
              useful for agencies managing AI visibility across multiple
              clients.
            </p>

            <h3 className="text-xl font-bold text-white mt-8 mb-3 font-plus-jakarta">
              Profound: Best for Enterprise
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Profound is the enterprise-grade option, offering comprehensive
              tracking across AI platforms with advanced competitive
              benchmarking, multi-country and multi-language support, and a
              Conversation Explorer for analyzing AI answer share of voice.
              Pricing is custom, typically suited for Fortune 500 companies
              where scale and compliance justify the cost. If you need to track
              AI visibility across dozens of markets and languages, Profound is
              built for that.
            </p>

            <h3 className="text-xl font-bold text-white mt-8 mb-3 font-plus-jakarta">
              Other Notable Tools
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              SE Visible (from SE Ranking) provides cross-platform AI
              monitoring across ChatGPT, Perplexity, AI Mode, and Gemini.
              Conductor offers integrated AI mention and citation tracking as
              part of its broader SEO platform. Several newer entrants like
              Sight AI and AirOps also provide AI visibility features. The space
              is evolving fast, so expect more options in the months ahead.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4 font-plus-jakarta">
              The Free Method: Manual AI Visibility Tracking
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              You do not need to spend money to start tracking your AI
              visibility. A manual approach works well for small businesses
              tracking a limited number of queries. Here is how to set it up.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Create a spreadsheet with columns for the date, platform
              (ChatGPT, Perplexity, Google AI), the prompt you tested, whether
              you were mentioned, your position in the response (top 3 or
              lower), which competitors appeared, and whether your information
              was accurate. Run the same 5 to 10 prompts across all three
              platforms once per week. Over time, this gives you a clear trend
              line.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              If you are not sure which prompts to test, our guide on{' '}
              <Link href="/blog/check-if-ai-recommends-your-business" className="text-orange-400 underline hover:text-orange-300">
                checking if AI recommends your business
              </Link>{' '}
              includes exact prompt templates you can use. The key is
              consistency: the same prompts, the same platforms, the same
              schedule.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4 font-plus-jakarta">
              How to Benchmark Against Competitors
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Tracking your own visibility is only half the picture. You also
              need to know how you compare to competitors. Most paid AI
              visibility tools include competitive benchmarking features, but
              you can do this manually as well.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              When you run your test prompts, record every competitor that
              appears in the AI response. Over several weeks, you will see
              patterns: which competitors consistently show up, which ones
              appear on some platforms but not others, and whose position is
              improving or declining.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              Pay special attention to what differentiates the competitors AI
              platforms favor. Do they have stronger schema markup? More
              authoritative content? Better directory presence? Understanding{' '}
              <Link href="/blog/how-perplexity-decides-what-to-cite" className="text-orange-400 underline hover:text-orange-300">
                how AI platforms decide what to cite
              </Link>{' '}
              will help you identify exactly where you are falling behind.
            </p>

            {/* Stat Callout 3 */}
            <div className="rounded-xl border border-orange-500/30 bg-orange-500/5 p-6 mb-10">
              <p className="text-orange-400 font-semibold text-lg mb-2">AI Overviews Keep Expanding</p>
              <p className="text-gray-300 text-base leading-relaxed">
                Google AI Overviews reached 2 billion monthly users globally by
                late 2025, and recent data from Advanced Web Ranking shows they
                now appear in over 60% of U.S. search queries. That is double
                the coverage from August 2024. If your business category
                triggers AI Overviews and you are not being cited, competitors
                are capturing that attention instead.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4 font-plus-jakarta">
              Building a Tracking Routine That Works
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              The biggest risk with AI visibility tracking is doing it once and
              then forgetting about it. Given how fast AI citations change, you
              need a consistent routine. Here is a practical schedule:
            </p>
            <ul className="text-gray-300 mb-6 space-y-2">
              <li><strong className="text-white">Weekly (15 minutes):</strong> Run your core test prompts across all three platforms. Log citations, mentions, and competitor appearances in your tracking spreadsheet.</li>
              <li><strong className="text-white">Monthly (30 minutes):</strong> Review trends. Calculate your share of LLM for key queries. Note any significant citation drift. Check your web analytics for AI referral traffic changes.</li>
              <li><strong className="text-white">Quarterly (1 hour):</strong> Deep-dive competitor analysis. Update your test prompts based on new customer questions or service offerings. Evaluate whether your tracking tools still meet your needs.</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mb-6">
              Consistency beats intensity. Fifteen minutes every week provides
              more value than a two-hour deep-dive every three months. AI
              visibility shifts happen gradually, and the businesses that catch
              those shifts early are the ones that maintain their position.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4 font-plus-jakarta">
              Common Tracking Mistakes to Avoid
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              As this field matures, we see the same mistakes repeatedly.
              Avoid these pitfalls to get accurate, useful data from your
              tracking efforts.
            </p>
            <ul className="text-gray-300 mb-6 space-y-2">
              <li><strong className="text-white">Using branded prompts only.</strong> Asking &quot;tell me about [your business name]&quot; tests name recognition, not discoverability. Use unbranded, customer-style prompts like &quot;best [service] in [city]&quot; to measure real-world visibility.</li>
              <li><strong className="text-white">Testing once and declaring victory.</strong> AI citations change for 40% to 60% of queries every month. A single snapshot tells you almost nothing about your actual visibility over time.</li>
              <li><strong className="text-white">Ignoring accuracy.</strong> A mention is worthless if AI gets your phone number, address, or services wrong. Always verify what AI says about you, not just whether it mentions you.</li>
              <li><strong className="text-white">Tracking only one platform.</strong> ChatGPT, Perplexity, and Google AI Overviews each use different data sources and ranking signals. Being visible on one does not guarantee visibility on the others.</li>
              <li><strong className="text-white">Forgetting to check mobile.</strong> AI Overviews appear differently on mobile versus desktop. Make sure your tracking includes both.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4 font-plus-jakarta">
              Connecting Tracking to Action
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Data without action is just trivia. Every tracking session
              should end with a clear next step. Here are the most common
              signals and what they mean:
            </p>
            <ul className="text-gray-300 mb-6 space-y-2">
              <li><strong className="text-white">Invisible on all platforms:</strong> Start with the fundamentals. Claim your Bing Places listing, add schema markup, and create FAQ content. Our{' '}
                <Link href="/blog/complete-guide-answer-engine-optimization" className="text-orange-400 underline hover:text-orange-300">
                  complete guide to answer engine optimization
                </Link>{' '}
                walks you through the full process.
              </li>
              <li><strong className="text-white">Visible on Google AI but not ChatGPT:</strong> Your Bing presence is likely weak. Claim and optimize your Bing Places profile. ChatGPT draws heavily from Bing&apos;s data ecosystem.</li>
              <li><strong className="text-white">Mentioned but with wrong information:</strong> Update your NAP data across all directories. Add or fix your schema markup. Consistency across sources is what builds AI trust.</li>
              <li><strong className="text-white">Competitors outranking you:</strong> Analyze what they are doing differently. Usually it comes down to stronger structured data, more authoritative content, or better directory coverage.</li>
              <li><strong className="text-white">Declining visibility over time:</strong> Check for content freshness issues. AI platforms favor recently updated sources. Stale content gradually loses citations.</li>
            </ul>
          </article>

          {/* FAQ Section */}
          <section className="mt-16 mb-16">
            <h2 className="text-2xl font-bold text-white mb-8 font-plus-jakarta">
              Frequently Asked Questions
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  q: 'What is AI search visibility tracking?',
                  a: 'AI search visibility tracking measures how often and how accurately AI platforms like ChatGPT, Perplexity, and Google AI Overviews mention, cite, or recommend your business. It includes monitoring citation frequency, brand mentions, share of voice, and information accuracy.',
                },
                {
                  q: 'How much do AI visibility tracking tools cost?',
                  a: 'Pricing varies widely. Otterly AI starts at $29 per month. Peec AI starts at roughly $89 per month. Enterprise platforms like Profound offer custom pricing. You can also track visibility manually for free using test prompts and a spreadsheet.',
                },
                {
                  q: 'Can I track AI visibility for free?',
                  a: 'Yes. Run manual audits by asking test prompts across ChatGPT, Perplexity, and Google AI Overviews, then log results in a spreadsheet. This works well for small businesses monitoring a few key queries. Paid tools add value when you need scale and automation.',
                },
                {
                  q: 'What is share of LLM and why does it matter?',
                  a: 'Share of LLM measures how often your brand appears compared to competitors in AI-generated answers. It is the AI equivalent of share of voice. A higher share means AI platforms consistently recommend you over competitors for relevant queries.',
                },
                {
                  q: 'How often should I check my AI search visibility?',
                  a: 'At minimum, once per month. AI citation sources can change for 40% to 60% of queries in a single month. Weekly monitoring is ideal if you are actively optimizing or competing in a crowded market.',
                },
                {
                  q: 'Which AI platforms should I track visibility on?',
                  a: 'Focus on ChatGPT (largest user base), Google AI Overviews (growing search integration), and Perplexity (transparent citation model). If your industry is research-heavy, also consider tracking Claude and Gemini.',
                },
              ].map((faq, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-gray-800 bg-gray-900/50 p-6"
                >
                  <h3 className="text-white font-semibold mb-2">{faq.q}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="rounded-2xl border border-orange-500/30 bg-gradient-to-br from-orange-500/10 to-transparent p-8 sm:p-12 text-center mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-plus-jakarta">
              Not Sure Where You Stand in AI Search?
            </h2>
            <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
              Our free Blind Spot Report runs a complete analysis across all
              major AI platforms, maps your competitor landscape, and delivers
              a prioritized action plan. No pitch, just the data.
            </p>
            <Link
              href="/blindspot"
              className="inline-block bg-orange-500 text-white font-semibold px-8 py-4 rounded-xl text-lg hover:bg-orange-600 transition-colors"
            >
              Get Your Free Blind Spot Report
            </Link>
    <div className="flex flex-wrap items-center gap-6 mt-6 pt-6 border-t border-[#FF6A00]/10">
      <a href="tel:+12134442229" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
        (213) 444-2229
      </a>
      <a href="mailto:support@theanswerengine.ai" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
        support@theanswerengine.ai
      </a>
    </div>
          </section>

          {/* Author Attribution */}
          <section className="flex items-center gap-4 border-t border-gray-800 pt-8">
            <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
              AE
            </div>
            <div>
              <p className="text-white font-semibold">The Answer Engine Team</p>
              <p className="text-gray-500 text-sm">
                Helping local businesses get found, recommended, and cited by AI search
                platforms.
              </p>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
