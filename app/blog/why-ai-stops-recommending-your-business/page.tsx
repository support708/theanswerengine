import type { Metadata } from 'next'
import Link from 'next/link'

export const revalidate = 86400
export const dynamic = 'force-static'
export const dynamicParams = true

const title = 'Why AI Stops Recommending Your Business'
const description =
  'Your business was in AI answers, now it is not. Learn the real reasons AI stops recommending businesses and the signals that trigger a drop.'
const slug = 'why-ai-stops-recommending-your-business'
const publishDate = '2026-04-10'

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'why AI stopped recommending my business',
    'business dropped from AI search',
    'AI visibility drop',
    'ChatGPT stopped mentioning my business',
    'why AI ignores my company',
    'AI search ranking drop',
    'answer engine optimization',
    'AI recommendation loss',
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
        url: `https://theanswerengine.ai/blog/${slug}.webp`,
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
    images: [`https://theanswerengine.ai/blog/${slug}.webp`],
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
      image: {
        '@type': 'ImageObject',
        url: `https://theanswerengine.ai/blog/${slug}.webp`,
        width: 1200,
        height: 630,
      },
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
          name: 'How do I know if AI stopped recommending my business?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Test it yourself. Open ChatGPT, Perplexity, and Google AI and type queries your ideal customer would use, such as "best [your service] in [your city]." If your business name does not appear in the answers, you have dropped out. Do this weekly to catch drops early.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does it take to get back into AI recommendations after a drop?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Research shows more than 50% of businesses that drop from AI answers resurface within two to four weeks when the right signals are refreshed. Businesses with deeper citation footprints and fresher content tend to recover faster. Some drops tied to model updates can take 60 to 90 days to fully recover.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can one bad review cause AI to stop recommending my business?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A single bad review rarely causes a drop by itself. What matters more is the pattern: if reviews slow down, your average star rating falls significantly, or recent reviews are negative, AI platforms collectively deprioritize you. It is review velocity and sentiment trend, not individual reviews, that AI watches.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can a competitor cause AI to stop recommending me?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Not directly. Competitors cannot submit takedown requests to AI platforms. But if a competitor earns significantly more citations, press coverage, and review activity than you, AI models shift their confidence toward that competitor. Your drop is relative, not absolute. You did not necessarily get worse. They got better.',
          },
        },
        {
          '@type': 'Question',
          name: 'Should I panic if I disappear from AI search results overnight?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Do not panic, but do investigate immediately. Overnight drops are almost always tied to a model update, a major inconsistency discovered in your business data, or a technical issue with your website. Run a diagnostic across your citations, reviews, and site health before assuming the worst.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does a slow website cause AI to stop recommending my business?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, indirectly. AI crawlers need to read your website to index your content. A slow or down website means crawlers cannot reliably access your pages. If your content cannot be read, it cannot be cited. Page speed and uptime are foundational AI visibility requirements, not optional optimizations.',
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

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb */}
      <nav className="max-w-4xl mx-auto px-6 pt-8 pb-0" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 text-sm text-gray-500">
          <li>
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
          </li>
          <li className="text-gray-700">/</li>
          <li>
            <Link href="/blog" className="hover:text-white transition-colors">
              Blog
            </Link>
          </li>
          <li className="text-gray-700">/</li>
          <li className="text-gray-400 truncate max-w-xs">{title}</li>
        </ol>
      </nav>

      {/* Hero */}
      <header className="max-w-4xl mx-auto px-6 py-14">
        <div className="flex items-center gap-3 mb-6">
          <span className="ae-section-label">Business Pain Points</span>
          <span className="text-gray-600 text-sm">April 10, 2026</span>
        </div>
        <h1 className="font-plus-jakarta text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
          Why AI Stops Recommending Your Business
        </h1>
        <p className="text-xl text-gray-300 leading-relaxed mb-8">
          You tested it a few months ago and your business name came up in ChatGPT. You tested it
          again last week and nothing. That silence is costing you customers right now. Here is what
          actually causes the drop, and what you need to know to fix it.
        </p>

        {/* Inline CTA 1 */}
        <div className="ae-cta-inline">
          <p>
            Not sure if your business dropped from AI? Find out in 60 seconds.{' '}
            <Link href="/blindspot">Get your free AI Blind Spot Report</Link>
           Markets fill fast. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Check your territory availability.</a></p>
        </div>

        {/* Stats Grid */}
        <div className="ae-stats-grid mt-10">
          <div className="ae-stat-card">
            <div className="ae-stat-emoji">📉</div>
            <div className="ae-stat-value">20%</div>
            <div className="ae-stat-label">Drop in ChatGPT citations after GPT-5.3 model update</div>
          </div>
          <div className="ae-stat-card">
            <div className="ae-stat-emoji">🔁</div>
            <div className="ae-stat-value">50%+</div>
            <div className="ae-stat-label">Of dropped businesses resurface within 2-4 weeks with action</div>
          </div>
          <div className="ae-stat-card">
            <div className="ae-stat-emoji">🏆</div>
            <div className="ae-stat-value">4x</div>
            <div className="ae-stat-label">Higher citation chance for brands with strong community mentions</div>
          </div>
          <div className="ae-stat-card">
            <div className="ae-stat-emoji">⚡</div>
            <div className="ae-stat-value">43%</div>
            <div className="ae-stat-label">Of pages ranked #1 in Google get cited by ChatGPT</div>
          </div>
        </div>
      </header>

      {/* TOC */}
      <div className="max-w-4xl mx-auto px-6 mb-12">
        <div className="ae-toc">
          <div className="ae-toc-title">What You Will Learn</div>
          <ol>
            <li><a href="#why-it-happens">The Core Reason AI Drops Businesses</a></li>
            <li><a href="#freshness-cliff">The Freshness Cliff: When Stale Content Gets You Dropped</a></li>
            <li><a href="#inconsistent-signals">Conflicting Signals Across the Web</a></li>
            <li><a href="#competitor-surge">When Competitors Outpace You</a></li>
            <li><a href="#review-velocity">Review Velocity and Sentiment Drops</a></li>
            <li><a href="#model-updates">Model Updates That Reshuffle Everything</a></li>
            <li><a href="#technical-issues">Technical Issues That Block AI Crawlers</a></li>
            <li><a href="#recovery">How to Get Back Into AI Recommendations</a></li>
            <li><a href="#faq">Frequently Asked Questions</a></li>
          </ol>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-6 pb-20">

        {/* Section 1 */}
        <section id="why-it-happens" className="mb-14">
          <h2 className="font-plus-jakarta text-3xl font-bold text-white mb-5">
            The Core Reason AI Drops Businesses
          </h2>
          <p className="text-gray-300 leading-relaxed mb-5">
            AI platforms like ChatGPT, Perplexity, and Google Gemini do not maintain a fixed list of
            approved businesses. Every time someone asks a question, the AI synthesizes an answer from
            whatever signals it has access to at that moment. Your inclusion is not a contract. It is a
            continuous vote of confidence, and that vote can be lost.
           Your first step: <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free AERO Blind Spot Scan.</a></p>
          <p className="text-gray-300 leading-relaxed mb-5">
            The vote is cast based on authority signals: how widely you are cited across the web, how
            consistent your business information is, how active your review presence is, and whether your
            content is fresh enough for the AI to trust it as current. When any of these signals weaken,
            your name gets replaced by a competitor whose signals are stronger.
           <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Claim your free call</a> before your market fills.</p>

          <div className="ae-callout ae-callout-warning">
            <div className="ae-callout-title">The Disappearing Business Problem</div>
            <p>
              Most business owners only notice they have dropped from AI recommendations weeks or months
              after the fall happens. By then, dozens or hundreds of potential customers have asked the
              question and gotten someone else as the answer. This is invisible revenue loss.
             Reach out: <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>
          </div>

          <p className="text-gray-300 leading-relaxed mt-5">
            The good news: drops are usually diagnosable and fixable. Unlike a Google penalty that can
            take months of appeals, AI visibility can often recover within weeks once the right signals
            are restored. But you have to know which signal broke first.
           Call us at <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> today.</p>

          {/* Inline CTA 2 */}
          <div className="ae-cta-inline mt-6">
            <p>
              Wondering which signal is hurting your AI visibility?{' '}
              <Link href="/blindspot">Run a free Blind Spot analysis</Link> and we will tell you exactly
              what to fix.
             <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Lock in your exclusive territory now.</a></p>
          </div>
        </section>

        {/* Section 2 */}
        <section id="freshness-cliff" className="mb-14">
          <h2 className="font-plus-jakarta text-3xl font-bold text-white mb-5">
            The Freshness Cliff: When Stale Content Gets You Dropped
          </h2>
          <p className="text-gray-300 leading-relaxed mb-5">
            AI models have an implicit freshness preference. Content published or updated recently
            signals that a business is active, relevant, and still operating. Content that has not changed
            in 12 or 18 months sends the opposite signal: this business may be stale, closed, or no longer
            worth recommending.
           <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Get your free AI readiness report.</a></p>
          <p className="text-gray-300 leading-relaxed mb-5">
            This does not mean you need to publish new articles every single day. It means the content
            that speaks to your core services needs to stay current. If your service pages reference old
            pricing, outdated procedures, or team members who left, AI models pick up on these
            discrepancies and reduce their confidence in your accuracy.
           Ready to act? <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a free strategy session.</a></p>

          <div className="ae-callout ae-callout-info">
            <div className="ae-callout-title">What Fresh Content Actually Means to AI</div>
            <p>
              Freshness is not just publish dates. AI models look at whether your cited sources are recent,
              whether your reviews have recent activity, and whether third-party sites referencing your
              business have been updated. A freshly built website with no recent citations is still stale
              from an AI perspective.
             Drop us a line at <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>
          </div>

          <p className="text-gray-300 leading-relaxed mt-5 mb-5">
            The freshness cliff is particularly brutal for seasonal businesses. If you are a landscaper
            who goes quiet over winter, or a tax firm that stops publishing after April, you may find your
            AI visibility has eroded significantly by the time you need it most.
           Speak to an AEO specialist: <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.</p>

          {/* Bar chart of content signals */}
          <div className="mt-8 mb-8">
            <h3 className="font-plus-jakarta text-lg font-semibold text-white mb-4">
              How Freshness Signals Stack Up
            </h3>
            <div className="ae-bar-group">
              <div className="ae-bar-item">
                <div className="ae-bar-label">Recent 3rd-party citations</div>
                <div className="ae-bar-track">
                  <div className="ae-bar-fill" style={{ width: '92%' }}></div>
                </div>
                <div className="ae-bar-value">High Impact</div>
              </div>
              <div className="ae-bar-item">
                <div className="ae-bar-label">Recent reviews (last 90 days)</div>
                <div className="ae-bar-track">
                  <div className="ae-bar-fill" style={{ width: '87%' }}></div>
                </div>
                <div className="ae-bar-value">High Impact</div>
              </div>
              <div className="ae-bar-item">
                <div className="ae-bar-label">Updated service page content</div>
                <div className="ae-bar-track">
                  <div className="ae-bar-fill" style={{ width: '74%' }}></div>
                </div>
                <div className="ae-bar-value">Medium-High</div>
              </div>
              <div className="ae-bar-item">
                <div className="ae-bar-label">Recent blog posts</div>
                <div className="ae-bar-track">
                  <div className="ae-bar-fill" style={{ width: '58%' }}></div>
                </div>
                <div className="ae-bar-value">Medium</div>
              </div>
              <div className="ae-bar-item">
                <div className="ae-bar-label">Social media activity</div>
                <div className="ae-bar-track">
                  <div className="ae-bar-fill" style={{ width: '41%' }}></div>
                </div>
                <div className="ae-bar-value">Supporting Signal</div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section id="inconsistent-signals" className="mb-14">
          <h2 className="font-plus-jakarta text-3xl font-bold text-white mb-5">
            Conflicting Signals Across the Web
          </h2>
          <p className="text-gray-300 leading-relaxed mb-5">
            AI platforms build their understanding of your business by aggregating information from dozens
            of sources: your website, Google Business Profile, Yelp, Bing Places, industry directories,
            news articles, and social media. When these sources disagree, the AI faces a trust problem.
           One client per city. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">See if your market is available.</a></p>
          <p className="text-gray-300 leading-relaxed mb-5">
            Imagine your website says you are open Monday through Friday, but your Yelp listing says
            Monday through Saturday, and a directory lists you as open on Sundays. From the AI's
            perspective, none of these sources can be fully trusted because they contradict each other.
            The AI does not pick the most accurate one. It often picks someone else entirely.
           Check where you stand: <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free Blind Spot Scan.</a></p>

          {/* Comparison Table */}
          <div className="overflow-x-auto my-8">
            <table className="ae-comparison-table">
              <thead>
                <tr>
                  <th>Signal Type</th>
                  <th>Consistent</th>
                  <th>Inconsistent</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Business Name</td>
                  <td className="text-green-400">Builds authority trust</td>
                  <td className="text-red-400">Creates entity confusion</td>
                </tr>
                <tr>
                  <td>Address / Service Area</td>
                  <td className="text-green-400">Confirms local relevance</td>
                  <td className="text-red-400">Confuses location signals</td>
                </tr>
                <tr>
                  <td>Phone Number</td>
                  <td className="text-green-400">Verifies business identity</td>
                  <td className="text-red-400">Reduces citation confidence</td>
                </tr>
                <tr>
                  <td>Service Descriptions</td>
                  <td className="text-green-400">Reinforces topical authority</td>
                  <td className="text-red-400">Dilutes what AI thinks you do</td>
                </tr>
                <tr>
                  <td>Hours of Operation</td>
                  <td className="text-green-400">Operationally trustworthy</td>
                  <td className="text-red-400">Makes AI hedge or skip you</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-300 leading-relaxed mb-5">
            NAP consistency, which stands for Name, Address, and Phone, is a concept that originated in
            local SEO but carries even more weight in AI search. Where traditional search engines could
            use PageRank to override minor inconsistencies, AI models use consistency itself as a proxy
            for trustworthiness. Inconsistency is a red flag, not a minor annoyance.
           <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Schedule a free 30-min call.</a></p>

          <p className="text-gray-300 leading-relaxed">
            If you have moved, rebranded, changed your phone number, or expanded your service area in
            the last two years, there is a good chance some of your directory listings never got updated.
            Those outdated entries are actively working against you in AI search right now.
           Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> for a custom strategy.</p>
        </section>

        {/* Section 4 */}
        <section id="competitor-surge" className="mb-14">
          <h2 className="font-plus-jakarta text-3xl font-bold text-white mb-5">
            When Competitors Outpace You
          </h2>
          <p className="text-gray-300 leading-relaxed mb-5">
            AI recommendations are not graded on an absolute scale. They are relative. The AI asks
            itself: given what I know about all the businesses in this category and location, which one
            should I recommend? If your competitor suddenly earns significantly more citations, press
            coverage, and reviews than you, they do not just rise. You effectively fall.
           Questions? Call <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.</p>
          <p className="text-gray-300 leading-relaxed mb-5">
            This is the competitive surge problem, and it is particularly frustrating because you did
            nothing wrong. You did not lose any directory listings. Your reviews did not drop. Your
            content did not go stale. But your competitor hired an AI visibility specialist, got
            featured in three local news articles, and accelerated their review collection, and now they
            own the AI recommendation slot you used to occupy.
           <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Secure your territory before a competitor does.</a></p>

          <div className="ae-callout ae-callout-orange">
            <div className="ae-callout-title">The Silent Competitive Threat</div>
            <p>
              Most businesses do not monitor their AI rankings the way they monitor their Google rankings.
              That means a competitor can quietly overtake you in ChatGPT and Perplexity recommendations
              for months before you notice the drop in inbound calls.
             <a href="https://theanswerengine.ai/blindspot" className="cta-inline">See your AI visibility score — free.</a></p>
          </div>

          {/* Decision Matrix */}
          <div className="ae-decision-matrix mt-8">
            <div className="ae-decision-row">
              <div className="ae-decision-if">Your authority signals are strong, competitor is average</div>
              <div className="ae-decision-arrow">→</div>
              <div className="ae-decision-then">You hold the AI recommendation slot</div>
            </div>
            <div className="ae-decision-row">
              <div className="ae-decision-if">Both strong, competitor slightly stronger recently</div>
              <div className="ae-decision-arrow">→</div>
              <div className="ae-decision-then">AI alternates or gives competitor the edge</div>
            </div>
            <div className="ae-decision-row">
              <div className="ae-decision-if">Your signals stale, competitor aggressively building</div>
              <div className="ae-decision-arrow">→</div>
              <div className="ae-decision-then">You drop. Competitor takes the slot consistently.</div>
            </div>
            <div className="ae-decision-row">
              <div className="ae-decision-if">Both stale, no one investing in AI visibility</div>
              <div className="ae-decision-arrow">→</div>
              <div className="ae-decision-then">AI gives vague answers or cites large chains instead</div>
            </div>
          </div>

          {/* Inline CTA 3 */}
          <div className="ae-cta-inline mt-8">
            <p>
              Want to see how you stack up against your top competitors in AI?{' '}
              <Link href="/blindspot">Get your free Blind Spot Report</Link> and see exactly where they
              are outranking you.
             <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book your free consultation here.</a></p>
          </div>
        </section>

        {/* Section 5 */}
        <section id="review-velocity" className="mb-14">
          <h2 className="font-plus-jakarta text-3xl font-bold text-white mb-5">
            Review Velocity and Sentiment Drops
          </h2>
          <p className="text-gray-300 leading-relaxed mb-5">
            AI platforms read reviews. Not just your star rating, but the recency, frequency, and
            language of your reviews. A business with 200 reviews from three years ago and no new reviews
            is treated differently than a business with 80 reviews where 15 came in the last 60 days.
           Contact us at <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>
          <p className="text-gray-300 leading-relaxed mb-5">
            The problem for many businesses is that review collection is not automated. When the person
            who was manually asking for reviews leaves, or when a business gets busy and stops following
            up, review velocity drops to zero. And when review velocity drops, AI models start to wonder
            if the business is still actively serving customers.
           Reach us at <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.</p>

          {/* Pros/Cons */}
          <div className="ae-pros-cons">
            <div className="ae-pros-box">
              <h4>Review Signals That Strengthen AI Visibility</h4>
              <ul>
                <li>Reviews collected consistently over the past 90 days</li>
                <li>Reviews that mention specific services by name</li>
                <li>Reviews on multiple platforms (Google, Yelp, industry sites)</li>
                <li>Responses from the business owner to reviews</li>
                <li>Reviews that mention your city or neighborhood</li>
              </ul>
            </div>
            <div className="ae-cons-box">
              <h4>Review Signals That Weaken AI Visibility</h4>
              <ul>
                <li>No new reviews in the past 3 to 6 months</li>
                <li>A cluster of generic 5-star reviews with no detail</li>
                <li>Reviews that contradict each other on key facts</li>
                <li>Unanswered negative reviews left unaddressed</li>
                <li>Reviews only on one platform with nothing elsewhere</li>
              </ul>
            </div>
          </div>

          <p className="text-gray-300 leading-relaxed mt-5">
            The sentiment within reviews matters too. AI platforms perform basic sentiment analysis on your
            review text. If the language in your recent reviews has shifted from enthusiastic to lukewarm,
            the AI detects that shift even if your star rating has not changed significantly. It is not
            just the score. It is the story the reviews are telling.
           We work with one business per market. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Check if yours is still open.</a></p>

          <p className="text-gray-300 leading-relaxed mt-4">
            Read more about how reviews feed into AI recommendations in our guide on{' '}
            <Link
              href="/blog/why-my-5star-google-reviews-dont-show-up-in-ai-answers"
              className="text-[#F27D24] hover:text-[#D96416] transition-colors"
            >
              why 5-star Google reviews do not always show up in AI answers
            </Link>
            .
           Find your gaps with a <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free AERO scan.</a></p>
        </section>

        {/* Section 6 */}
        <section id="model-updates" className="mb-14">
          <h2 className="font-plus-jakarta text-3xl font-bold text-white mb-5">
            Model Updates That Reshuffle Everything
          </h2>
          <p className="text-gray-300 leading-relaxed mb-5">
            Sometimes you did everything right and still dropped. The culprit in those cases is often a
            model update. When AI platforms release new versions of their models, the way they weight
            different signals can change significantly.
           <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Schedule a free call</a> to see where you stand.</p>
          <p className="text-gray-300 leading-relaxed mb-5">
            A real example: when ChatGPT transitioned to GPT-5.3 Instant in early 2026, analysis of 27,000
            AI responses showed the average number of unique domains cited per response dropped from 19 to
            15. That is a 20% reduction in citation breadth. Businesses that previously appeared in the
            middle of citation lists got pushed out entirely. Only the strongest authority signals survived
            the transition.
           Send your questions to <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>

          <div className="ae-callout ae-callout-info">
            <div className="ae-callout-title">What Model Updates Mean for You</div>
            <p>
              Model updates do not target specific businesses. They change the threshold for inclusion. If
              your authority signals were sitting just above the old threshold, a new model might place that
              threshold higher and suddenly you are below it. The solution is not to complain about
              fairness. It is to build authority signals strong enough to survive any threshold change.
             Call <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> for a free consultation.</p>
          </div>

          <p className="text-gray-300 leading-relaxed mt-5">
            Google Gemini updates tend to follow Google's core algorithm update schedule. Perplexity
            updates its retrieval logic regularly and without much public announcement. Claude shifts its
            weighting when Anthropic releases new model versions. Each of these changes can affect your
            visibility independently.
           <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Claim your market territory — one client per area.</a></p>

          <p className="text-gray-300 leading-relaxed mt-4">
            Understanding how AI disappearances work is closely related to understanding{' '}
            <Link
              href="/blog/my-business-disappeared-from-ai-search-results-overnight"
              className="text-[#F27D24] hover:text-[#D96416] transition-colors"
            >
              why businesses disappear from AI search results overnight
            </Link>
            . Model updates are one of the most common causes.
           <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Run your free AI Blind Spot Scan.</a></p>
        </section>

        {/* Section 7 */}
        <section id="technical-issues" className="mb-14">
          <h2 className="font-plus-jakarta text-3xl font-bold text-white mb-5">
            Technical Issues That Block AI Crawlers
          </h2>
          <p className="text-gray-300 leading-relaxed mb-5">
            This is the most overlooked cause of AI visibility drops. If AI crawlers cannot read your
            website, they cannot cite it. And if they cannot cite it, you disappear from recommendations
            regardless of how good your reviews are or how many directories list you.
           <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a free 30-minute strategy call.</a></p>
          <p className="text-gray-300 leading-relaxed mb-5">
            Common technical issues that block AI crawlers include: a website that loads in more than
            4 seconds, a robots.txt file that accidentally blocks crawlers, an SSL certificate that expired
            or is showing errors, pages that require JavaScript to render with no static fallback, or
            server downtime during peak crawl hours.
           Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> to get started.</p>

          {/* Timeline */}
          <div className="ae-timeline mt-6 mb-8">
            <div className="ae-timeline-item">
              <div className="font-plus-jakarta font-bold text-white">Step 1</div>
              <div className="font-semibold text-[#F27D24]">AI crawler attempts to visit your website</div>
              <div className="text-gray-400 text-sm">Automated bots from OpenAI, Google, Anthropic, and Perplexity index your content periodically</div>
            </div>
            <div className="ae-timeline-item">
              <div className="font-plus-jakarta font-bold text-white">Step 2</div>
              <div className="font-semibold text-[#F27D24]">Crawler hits a blocker</div>
              <div className="text-gray-400 text-sm">Slow load, robots.txt block, expired SSL, or JavaScript rendering wall stops the crawl</div>
            </div>
            <div className="ae-timeline-item">
              <div className="font-plus-jakarta font-bold text-white">Step 3</div>
              <div className="font-semibold text-[#F27D24]">Your content goes unread</div>
              <div className="text-gray-400 text-sm">The AI has no fresh data from your site to include in citations or recommendations</div>
            </div>
            <div className="ae-timeline-item">
              <div className="font-plus-jakarta font-bold text-white">Step 4</div>
              <div className="font-semibold text-[#F27D24]">AI confidence in your business drops</div>
              <div className="text-gray-400 text-sm">Stale cached data ages out, your name appears less frequently or not at all</div>
            </div>
            <div className="ae-timeline-item">
              <div className="font-plus-jakarta font-bold text-white">Step 5</div>
              <div className="font-semibold text-[#F27D24]">Competitor takes your slot</div>
              <div className="text-gray-400 text-sm">The AI fills the recommendation gap with a competitor whose site is fully accessible</div>
            </div>
          </div>

          <p className="text-gray-300 leading-relaxed">
            This problem is more common than most business owners realize. A hosting migration gone
            slightly wrong, a WordPress plugin conflict, a caching configuration error: any of these can
            silently block crawlers while your site looks completely normal to human visitors. You see a
            working website. The AI sees a door that will not open.
           <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a></p>

          <p className="text-gray-300 leading-relaxed mt-4">
            For more on what AI actually sees when it visits your site, read our guide on{' '}
            <Link
              href="/blog/why-ai-gives-outdated-information-about-my-business"
              className="text-[#F27D24] hover:text-[#D96416] transition-colors"
            >
              why AI gives outdated information about your business
            </Link>
            .
          </p>
        </section>

        {/* Section 8 */}
        <section id="recovery" className="mb-14">
          <h2 className="font-plus-jakarta text-3xl font-bold text-white mb-5">
            How to Get Back Into AI Recommendations
          </h2>
          <p className="text-gray-300 leading-relaxed mb-5">
            Recovery starts with diagnosis. Before you invest time and money into a fix, you need to
            know which signal actually broke. The most common recovery paths look like this:
          </p>

          {/* Dollar Compare - Recovery Investment View */}
          <div className="ae-dollar-compare my-8">
            <div className="ae-dollar-item">
              <div className="ae-dollar-label">Inconsistent citations cleaned up</div>
              <div className="ae-dollar-price">2-4 weeks to see improvement</div>
            </div>
            <div className="ae-dollar-item">
              <div className="ae-dollar-label">Review velocity program launched</div>
              <div className="ae-dollar-price">4-8 weeks for AI to detect shift</div>
            </div>
            <div className="ae-dollar-item">
              <div className="ae-dollar-label">Technical crawl issues fixed</div>
              <div className="ae-dollar-price">1-3 weeks once resolved</div>
            </div>
            <div className="ae-dollar-item">
              <div className="ae-dollar-label">Content refreshed and published</div>
              <div className="ae-dollar-price">3-6 weeks for re-indexing</div>
            </div>
            <div className="ae-dollar-item">
              <div className="ae-dollar-label">Post model update recovery</div>
              <div className="ae-dollar-price">60-90 days in worst cases</div>
            </div>
          </div>

          <p className="text-gray-300 leading-relaxed mb-5">
            The most important thing to understand about recovery: you cannot shortcut it. AI visibility
            is built on accumulated trust signals. Fixing one signal overnight does not instantly restore
            your ranking. But fixing the right signals systematically does move the needle within weeks,
            not months, in most cases.
          </p>

          <p className="text-gray-300 leading-relaxed">
            Research confirms that more than 50% of businesses that drop from AI answers resurface within
            two to four weeks when the right signals are refreshed. The key phrase is "the right signals."
            Spraying and praying does not work. A targeted diagnostic does.
          </p>
        </section>

        {/* Cheat Sheet */}
        <div className="ae-cheat-sheet mb-14">
          <div className="ae-cheat-sheet-title">AI Drop Diagnostic: 6 Checks to Run Right Now</div>
          <table>
            <tbody>
              <tr>
                <td className="font-semibold text-white">Check 1</td>
                <td>Search your business name in ChatGPT, Perplexity, and Google AI. Is it there?</td>
              </tr>
              <tr>
                <td className="font-semibold text-white">Check 2</td>
                <td>Audit your top 10 directory listings. Is your name, address, and phone consistent everywhere?</td>
              </tr>
              <tr>
                <td className="font-semibold text-white">Check 3</td>
                <td>Count your reviews in the last 90 days. Has velocity slowed significantly?</td>
              </tr>
              <tr>
                <td className="font-semibold text-white">Check 4</td>
                <td>Test your website load speed. Does it load in under 3 seconds on mobile?</td>
              </tr>
              <tr>
                <td className="font-semibold text-white">Check 5</td>
                <td>Check when your key service pages were last updated. Over 12 months ago?</td>
              </tr>
              <tr>
                <td className="font-semibold text-white">Check 6</td>
                <td>Count your third-party citations (press, directories, partner sites). Growing or shrinking?</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Takeaway */}
        <div className="ae-takeaway mb-14">
          <div className="ae-takeaway-title">The Bottom Line</div>
          <p>
            AI platforms do not owe you a recommendation. Every time someone asks a question, you are
            competing for that answer slot in real time. The businesses that hold those slots consistently
            are the ones investing in the signals AI uses to make its decisions: citation breadth,
            content freshness, review velocity, information consistency, and crawlability. Drops happen.
            But they are rarely permanent when you know what to look for.
          </p>
        </div>

        {/* CTA Block */}
        <div className="not-prose my-16 p-8 rounded-2xl bg-gradient-to-br from-[#F27D24]/10 to-transparent border border-[#F27D24]/20">
          <h3 className="font-plus-jakarta text-2xl font-bold text-white mb-3">
            Find Out Why AI Dropped Your Business
          </h3>
          <p className="text-gray-400 mb-6">
            Our free Blind Spot Report analyzes your AI visibility across ChatGPT, Perplexity, and
            Google AI, identifies the signals that caused your drop, and gives you a clear recovery
            roadmap.
          </p>
          <Link
            href="/blindspot"
            className="inline-flex items-center gap-2 bg-[#F27D24] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#D96416] transition-colors"
          >
            Get Your Free Blind Spot Report
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <div className="flex flex-wrap items-center gap-6 mt-6 pt-6 border-t border-[#F27D24]/10">
            <a
              href="tel:+12134442229"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (213) 444-2229
            </a>
            <a
              href="mailto:support@theanswerengine.ai"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              support@theanswerengine.ai
            </a>
          </div>
        </div>

        {/* Author Card */}
        <div className="not-prose">
            <div className="ae-author-card">
              <img
                src="/justin-borges.webp"
                alt="Justin Borges, Founder of The Answer Engine"
                style={{ width: 64, height: 64, borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }}
              />
              <div>
                <div className="ae-author-name" style={{ fontWeight: 600 }}>Justin Borges</div>
                <div className="ae-author-role" style={{ fontWeight: 400 }}>Founder, The Answer Engine</div>
                <p style={{ marginTop: 8, fontSize: '0.875rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.6 }}>Justin Borges founded The Answer Engine in 2025 after 13+ years in real estate, $200M+ in production, and discovering that AI search rankings now decide who gets cited as the answer. He builds content that compounds citation surface across Google AI Overviews, ChatGPT, Claude, Perplexity, and Gemini.</p>
              </div>
            </div>
          </div>

        {/* FAQ */}
        <section id="faq" className="mb-14">
          <h2 className="font-plus-jakarta text-3xl font-bold text-white mb-8">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="border border-gray-800 rounded-xl p-6">
              <h3 className="font-plus-jakarta font-bold text-white mb-3">
                How do I know if AI stopped recommending my business?
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Test it yourself. Open ChatGPT, Perplexity, and Google AI and type queries your ideal
                customer would use, such as "best [your service] in [your city]." If your business name
                does not appear, you have dropped out. Do this weekly to catch drops early. You can also
                use tools like Mangools AI Search Grader or Semrush AI Visibility for automated monitoring.
              </p>
            </div>

            <div className="border border-gray-800 rounded-xl p-6">
              <h3 className="font-plus-jakarta font-bold text-white mb-3">
                How long does it take to get back into AI recommendations after a drop?
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Research shows more than 50% of businesses that drop from AI answers resurface within
                two to four weeks when the right signals are refreshed. Businesses with deeper citation
                footprints and fresher content tend to recover faster. Drops tied to model updates can
                take 60 to 90 days to fully recover in some cases.
              </p>
            </div>

            <div className="border border-gray-800 rounded-xl p-6">
              <h3 className="font-plus-jakarta font-bold text-white mb-3">
                Can one bad review cause AI to stop recommending my business?
              </h3>
              <p className="text-gray-300 leading-relaxed">
                A single bad review rarely causes a drop by itself. What matters more is the pattern:
                if reviews slow down, your average rating falls significantly, or recent reviews are
                negative, AI platforms collectively deprioritize you. It is review velocity and sentiment
                trend, not individual reviews, that AI watches most closely.
              </p>
            </div>

            <div className="border border-gray-800 rounded-xl p-6">
              <h3 className="font-plus-jakarta font-bold text-white mb-3">
                Can a competitor cause AI to stop recommending me?
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Not directly. Competitors cannot submit takedown requests to AI platforms. But if a
                competitor earns significantly more citations, press coverage, and review activity than
                you, AI models shift their confidence toward that competitor. Your drop is relative, not
                absolute. You did not necessarily get worse. They got better at the signals AI values most.
              </p>
            </div>

            <div className="border border-gray-800 rounded-xl p-6">
              <h3 className="font-plus-jakarta font-bold text-white mb-3">
                Should I panic if I disappear from AI search results overnight?
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Do not panic, but do investigate immediately. Overnight drops are almost always tied to
                a model update, a major inconsistency discovered in your business data, or a technical
                issue with your website. Run a diagnostic across your citations, reviews, and site health
                before assuming the worst or making random changes.
              </p>
            </div>

            <div className="border border-gray-800 rounded-xl p-6">
              <h3 className="font-plus-jakarta font-bold text-white mb-3">
                Does a slow website cause AI to stop recommending my business?
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Yes, indirectly. AI crawlers need to read your website to index your content. A slow
                or down website means crawlers cannot reliably access your pages. If your content cannot
                be read, it cannot be cited. Page speed and uptime are foundational AI visibility
                requirements, not optional performance optimizations.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <div className="ae-final-cta">
          <h2 className="font-plus-jakarta text-3xl font-bold text-white mb-4">
            Ready to Reclaim Your AI Recommendation Slot?
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Every day your business is missing from AI recommendations is a day your competitors are
            getting those customers. Our Blind Spot Report tells you exactly what is wrong and exactly
            what to fix. It is free. It takes 60 seconds.
          </p>
          <Link
            href="/blindspot"
            className="ae-cta-primary"
          >
            Get My Free Blind Spot Report
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <p className="text-gray-500 text-sm mt-4">
            Or call us at{' '}
            <a href="tel:+12134442229" className="text-gray-400 hover:text-white transition-colors">
              (213) 444-2229
            </a>{' '}
            for a live consultation.
          </p>
        </div>

      </article>
    </>
  )
}
