import type { Metadata } from 'next'
import Link from 'next/link'

export const revalidate = 86400
export const dynamic = 'force-static'
export const dynamicParams = true

const title = 'How Plumbers Get Found on AI Search'
const description =
  'More than 50% of homeowners now ask AI for plumber recommendations. Learn exactly how plumbing businesses get recommended by ChatGPT, Gemini, and Perplexity.'
const slug = 'how-plumbers-get-found-on-ai-search'
const publishDate = '2026-04-10'

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'how plumbers get found on AI search',
    'plumber ChatGPT recommendations',
    'plumbing business AI visibility',
    'plumber AI search strategy',
    'get plumbing company found on AI',
    'ChatGPT plumber near me',
    'AI local search plumbing',
    'plumber Google Gemini visibility',
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
          name: 'How do customers find plumbers on ChatGPT?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Customers typically ask ChatGPT questions like "Who is a reliable plumber in [city]?" or "Can you recommend a plumber that handles emergency leaks near me?" ChatGPT then synthesizes information from its Bing search integration, pulling from business websites, review platforms like Yelp, and local directories. Plumbing companies with strong web presence, consistent directory listings, and active reviews are most likely to be recommended.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the most important thing a plumber can do to get recommended by AI?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A complete, verified Google Business Profile is the single most important investment. Google Gemini reads GBP directly for local recommendations. Beyond that, consistent NAP (Name, Address, Phone) across all major directories, active review collection, and a website that clearly describes the services offered and the geographic area served are the key factors AI platforms use to make plumber recommendations.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does it take for a plumbing company to appear in AI recommendations?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most plumbing businesses begin appearing in AI search recommendations within 30 to 45 days of completing their core optimization: verified GBP, consistent directories, and active review collection. Strong positioning across multiple AI search platforms typically develops within 60 to 90 days of sustained effort.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does emergency plumbing get different AI recommendations than general plumbing?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. For emergency plumbing queries, AI platforms weight response time signals, availability signals (hours of operation in GBP), and review language about urgency and speed more heavily. Plumbers who explicitly indicate 24-hour availability in their GBP and have reviews mentioning "quick response," "emergency fix," or "came out fast" are much more likely to appear in emergency plumbing AI recommendations.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do I need a website to get recommended by AI as a plumber?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A website significantly strengthens your AI recommendation chances but is not an absolute requirement for every AI platform. Google Gemini can recommend a business based primarily on a strong GBP. However, ChatGPT and Perplexity rely more heavily on website content for their recommendations. A simple, clear website describing your services and service area substantially increases your AI visibility across all major platforms.',
          },
        },
        {
          '@type': 'Question',
          name: 'How can I beat a larger plumbing company in AI recommendations?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Larger companies have brand awareness advantages but are often slow to optimize the specific signals AI platforms use for local recommendations. A smaller plumbing company with a complete GBP, 4.7-star rating with 100 recent reviews, detailed service pages, and consistent directory listings can outperform a larger competitor with weaker AI visibility signals. Recency and consistency beat size in AI recommendation systems.',
          },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://theanswerengine.ai' },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://theanswerengine.ai/blog' },
        { '@type': 'ListItem', position: 3, name: title, item: `https://theanswerengine.ai/blog/${slug}` },
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
          <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
          <li className="text-gray-700">/</li>
          <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
          <li className="text-gray-700">/</li>
          <li className="text-gray-400 truncate max-w-xs">{title}</li>
        </ol>
      </nav>

      {/* Hero */}
      <header className="max-w-4xl mx-auto px-6 py-14">
        <div className="flex items-center gap-3 mb-6">
          <span className="ae-section-label">Industry Guides</span>
          <span className="text-gray-600 text-sm">April 10, 2026</span>
        </div>
        <h1 className="font-plus-jakarta text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
          How Plumbers Get Found on AI Search
        </h1>
        <p className="text-xl text-gray-300 leading-relaxed mb-8">
          A homeowner discovers a leak at 10 PM. They do not search Google. They open ChatGPT and
          ask: "Who is a reliable plumber in [my city] that handles emergencies?" The AI gives them
          a name. Is it yours? More than half of homeowners are now using AI to find service
          professionals. Here is exactly how plumbing companies get into those recommendations,
          and how to make sure your business is the one the AI names.
        </p>

        {/* Inline CTA 1 */}
        <div className="ae-cta-inline">
          <p>
            Not showing up when homeowners ask AI for a plumber?{' '}
            <Link href="/blindspot">Get your free AI Blind Spot Report</Link> to see exactly where
            your plumbing business is invisible to AI platforms.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="ae-stats-grid mt-10">
          <div className="ae-stat-card">
            <div className="ae-stat-emoji">🔧</div>
            <div className="ae-stat-value">50%+</div>
            <div className="ae-stat-label">Of consumers now use AI models to find service providers like plumbers</div>
          </div>
          <div className="ae-stat-card">
            <div className="ae-stat-emoji">⚡</div>
            <div className="ae-stat-value">30-45</div>
            <div className="ae-stat-label">Days to begin appearing in AI search results with proper optimization</div>
          </div>
          <div className="ae-stat-card">
            <div className="ae-stat-emoji">📋</div>
            <div className="ae-stat-value">5 Platforms</div>
            <div className="ae-stat-label">ChatGPT, Gemini, Perplexity, Copilot, and AI Overviews all recommend plumbers</div>
          </div>
          <div className="ae-stat-card">
            <div className="ae-stat-emoji">🏆</div>
            <div className="ae-stat-value">60-90</div>
            <div className="ae-stat-label">Days to strong multi-platform AI visibility with active strategy</div>
          </div>
        </div>
      </header>

      {/* TOC */}
      <div className="max-w-4xl mx-auto px-6 mb-12">
        <div className="ae-toc">
          <div className="ae-toc-title">What You Will Learn</div>
          <ol>
            <li><a href="#how-customers-find-plumbers">How Homeowners Are Finding Plumbers on AI</a></li>
            <li><a href="#how-ai-picks-plumbers">How AI Decides Which Plumber to Recommend</a></li>
            <li><a href="#gbp">Google Business Profile: Your Biggest Lever</a></li>
            <li><a href="#reviews">Building the Review Profile AI Platforms Trust</a></li>
            <li><a href="#website">What Your Plumbing Website Must Tell AI</a></li>
            <li><a href="#emergency">Emergency Plumbing: Special AI Signals</a></li>
            <li><a href="#platforms">Platform by Platform: ChatGPT, Gemini, Perplexity</a></li>
            <li><a href="#vs-competition">How to Beat Larger Competitors in AI Results</a></li>
            <li><a href="#faq">Frequently Asked Questions</a></li>
          </ol>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-6 pb-20">

        {/* Section 1 */}
        <section id="how-customers-find-plumbers" className="mb-14">
          <h2 className="font-plus-jakarta text-3xl font-bold text-white mb-5">
            How Homeowners Are Finding Plumbers on AI
          </h2>
          <p className="text-gray-300 leading-relaxed mb-5">
            The customer journey for plumbing services has changed faster than most plumbers realize.
            Five years ago, the path was simple: something breaks, homeowner searches Google, homeowner
            calls whoever ranks at the top. That path still exists, but a second path has emerged that
            is capturing an increasing share of high-intent customers: the AI conversation.
          </p>
          <p className="text-gray-300 leading-relaxed mb-5">
            The AI conversation looks different because customers treat AI differently than search
            engines. They ask AI platforms direct questions in natural language. They describe their
            problem. They ask for a recommendation, not just a list. And when the AI gives them a
            name, they tend to trust it and call. The conversion rate from an AI recommendation is
            typically higher than from a mid-page search result because the customer has already
            received a personalized endorsement.
          </p>

          <div className="ae-callout ae-callout-info">
            <div className="ae-callout-title">The New Customer Journey for Plumbing</div>
            <p>
              A homeowner discovers a problem and opens ChatGPT instead of Google. They describe the
              issue and ask who can fix it. The AI gives them one or two names with a brief explanation
              of why those businesses are trusted. The homeowner calls the first name. This is happening
              right now with more than 50% of service-related AI searches converting to a direct contact
              without the customer visiting another website.
            </p>
          </div>

          <p className="text-gray-300 leading-relaxed mt-5">
            What makes this shift especially important for plumbing companies is the emergency factor.
            Plumbing emergencies create high-urgency, high-value customer moments. When someone has a
            burst pipe or a sewage backup, they want a trusted recommendation immediately. AI delivers
            that trusted recommendation faster than any other channel. Being the plumber AI recommends
            in those moments is worth more than any ad campaign.
          </p>

          {/* Inline CTA 2 */}
          <div className="ae-cta-inline mt-6">
            <p>
              See which plumber AI is recommending in your city right now.{' '}
              <a href="tel:+12134442229" className="text-[#FF6A00] hover:text-[#e55f00] transition-colors font-semibold">
                Call (213) 444-2229
              </a>{' '}
              and we will show you.
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section id="how-ai-picks-plumbers" className="mb-14">
          <h2 className="font-plus-jakarta text-3xl font-bold text-white mb-5">
            How AI Decides Which Plumber to Recommend
          </h2>
          <p className="text-gray-300 leading-relaxed mb-5">
            AI platforms do not have an inside track or a paid slot for plumber recommendations. They
            synthesize available information and make the most confident recommendation they can. The
            "available information" they use comes from four main sources: your Google Business Profile,
            your website, your review presence across platforms, and third-party mentions in directories
            and local publications.
          </p>
          <p className="text-gray-300 leading-relaxed mb-5">
            The AI evaluates all of this simultaneously and looks for the signal pattern that indicates
            a trustworthy, actively operating plumbing business serving the relevant geographic area.
            The plumber that wins the recommendation is not necessarily the biggest or the oldest. It
            is the one whose information is most complete, most consistent, and most recently validated
            by real customer activity.
          </p>

          {/* Comparison Table */}
          <div className="overflow-x-auto my-8">
            <table className="ae-comparison-table">
              <thead>
                <tr>
                  <th>Signal Category</th>
                  <th>What AI Reads</th>
                  <th>Impact on Recommendation</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Google Business Profile</td>
                  <td>Category, services, hours, verified address, attributes</td>
                  <td className="text-green-400">Very High</td>
                </tr>
                <tr>
                  <td>Google Reviews</td>
                  <td>Star rating, volume, recency, sentiment, response rate</td>
                  <td className="text-green-400">Very High</td>
                </tr>
                <tr>
                  <td>Website Content</td>
                  <td>Service descriptions, service area, FAQs, contact info</td>
                  <td className="text-green-400">High</td>
                </tr>
                <tr>
                  <td>Yelp Presence</td>
                  <td>Rating, reviews, service categories listed</td>
                  <td className="text-green-400">High (especially for ChatGPT)</td>
                </tr>
                <tr>
                  <td>Directory Consistency</td>
                  <td>NAP matching across all directories</td>
                  <td className="text-orange-400">Medium-High</td>
                </tr>
                <tr>
                  <td>Angi / HomeAdvisor / Thumbtack</td>
                  <td>Rating, reviews, verified badges</td>
                  <td className="text-orange-400">Medium (home service specific)</td>
                </tr>
                <tr>
                  <td>Local Press Mentions</td>
                  <td>News or blog articles mentioning the company</td>
                  <td className="text-yellow-400">Supporting signal</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-300 leading-relaxed">
            For a broader view of how contractors and home service companies win AI search, read our
            guide on{' '}
            <Link
              href="/blog/how-contractors-and-home-service-companies-win-ai-search"
              className="text-[#FF6A00] hover:text-[#e55f00] transition-colors"
            >
              how contractors and home service companies win AI search
            </Link>
            .
          </p>
        </section>

        {/* Section 3 */}
        <section id="gbp" className="mb-14">
          <h2 className="font-plus-jakarta text-3xl font-bold text-white mb-5">
            Google Business Profile: Your Biggest Lever
          </h2>
          <p className="text-gray-300 leading-relaxed mb-5">
            For plumbing companies specifically, the Google Business Profile is the highest-leverage
            single investment for AI search visibility. This is because Google Gemini, the AI
            platform with the largest local search user base, reads GBP directly and gives it
            significant weight in its recommendations.
          </p>
          <p className="text-gray-300 leading-relaxed mb-5">
            Beyond Gemini, GBP data flows into Google AI Overviews (the AI summaries that appear at
            the top of Google search results), and Bing's data (which ChatGPT uses) also picks up
            GBP information through data partnerships. A well-optimized GBP has downstream effects
            across multiple AI platforms, not just Google's own products.
          </p>

          {/* Timeline: GBP optimization for plumbers */}
          <div className="ae-timeline mt-6 mb-10">
            <div className="ae-timeline-item">
              <div className="font-plus-jakarta font-bold text-white">Step 1</div>
              <div className="font-semibold text-[#FF6A00]">Claim and verify your GBP (if not done)</div>
              <div className="text-gray-400 text-sm">Google sends a verification postcard or offers phone verification. Non-verified profiles get much lower AI recommendation weight.</div>
            </div>
            <div className="ae-timeline-item">
              <div className="font-plus-jakarta font-bold text-white">Step 2</div>
              <div className="font-semibold text-[#FF6A00]">Set primary category to "Plumber" and add relevant secondaries</div>
              <div className="text-gray-400 text-sm">Secondaries like "Water Heater Installation Service," "Drain Cleaning Service," and "Emergency Plumber" unlock category-specific query visibility.</div>
            </div>
            <div className="ae-timeline-item">
              <div className="font-plus-jakarta font-bold text-white">Step 3</div>
              <div className="font-semibold text-[#FF6A00]">Write detailed service descriptions for each service</div>
              <div className="text-gray-400 text-sm">AI reads these directly. "We fix leaks" is weak. "Emergency leak detection and repair for residential properties in [city]" is strong.</div>
            </div>
            <div className="ae-timeline-item">
              <div className="font-plus-jakarta font-bold text-white">Step 4</div>
              <div className="font-semibold text-[#FF6A00]">Set all service areas and confirm your hours</div>
              <div className="text-gray-400 text-sm">If you offer 24/7 emergency service, your hours must reflect this. AI uses hours to filter recommendations for emergency queries.</div>
            </div>
            <div className="ae-timeline-item">
              <div className="font-plus-jakarta font-bold text-white">Step 5</div>
              <div className="font-semibold text-[#FF6A00]">Complete all applicable attributes</div>
              <div className="text-gray-400 text-sm">Attributes like "24-hour emergency service," "licensed and insured," and "free estimates" are query-specific signals.</div>
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section id="reviews" className="mb-14">
          <h2 className="font-plus-jakarta text-3xl font-bold text-white mb-5">
            Building the Review Profile AI Platforms Trust
          </h2>
          <p className="text-gray-300 leading-relaxed mb-5">
            For plumbing companies, reviews are among the most powerful AI visibility signals available
            because they validate the two things customers care most about: trustworthiness and speed.
            A plumbing company with 150 reviews averaging 4.8 stars that consistently mention "arrived
            on time," "fixed the problem quickly," and "fair pricing" has a review corpus that AI
            platforms can quote and cite with confidence.
          </p>
          <p className="text-gray-300 leading-relaxed mb-5">
            The key metric for AI recommendation eligibility is not just your star rating. It is
            your review velocity: how many new reviews you are collecting per month. A plumbing company
            with 50 total reviews from two years ago is treated very differently than one with 50 reviews
            where 15 came in the last 60 days. The latter signals an actively operating, currently
            trusted business. The former raises a question mark about whether the company is still
            serving customers.
          </p>

          {/* Pros/Cons */}
          <div className="ae-pros-cons">
            <div className="ae-pros-box">
              <h4>Review Signals That Get Plumbers Recommended</h4>
              <ul>
                <li>4.5+ stars with 50 or more total reviews</li>
                <li>New reviews consistently added each month</li>
                <li>Reviews mentioning specific services ("fixed our water heater")</li>
                <li>Reviews mentioning city or neighborhood served</li>
                <li>Reviews using trust keywords: "licensed," "on time," "fair price"</li>
                <li>Owner responses that show engagement and professionalism</li>
              </ul>
            </div>
            <div className="ae-cons-box">
              <h4>Review Issues That Block Plumber AI Recommendations</h4>
              <ul>
                <li>Zero new reviews in the past 3 months</li>
                <li>Star rating below 4.0 with recent complaints</li>
                <li>Generic reviews with no service-specific language</li>
                <li>Negative reviews mentioning "didn't show up" or "overcharged"</li>
                <li>Reviews only on Google, nothing on Yelp or other platforms</li>
              </ul>
            </div>
          </div>

          <p className="text-gray-300 leading-relaxed mt-6">
            The most effective review strategy for plumbers is a post-service text message that thanks
            the customer and provides a direct link to your Google review page. The timing (within 24
            hours of service completion, while the experience is still fresh) and the directness of the
            ask (a link, not a vague "please leave us a review") are the two factors that most strongly
            predict review completion.
          </p>

          {/* Inline CTA 3 */}
          <div className="ae-cta-inline mt-6">
            <p>
              Want to know how your plumbing company's review profile compares to who AI is recommending?{' '}
              <Link href="/blindspot">Get your free Blind Spot Report</Link> for a full review analysis.
            </p>
          </div>
        </section>

        {/* Section 5 */}
        <section id="website" className="mb-14">
          <h2 className="font-plus-jakarta text-3xl font-bold text-white mb-5">
            What Your Plumbing Website Must Tell AI
          </h2>
          <p className="text-gray-300 leading-relaxed mb-5">
            For ChatGPT and Perplexity recommendations specifically, your website is the primary
            source of truth. These platforms cannot rely on GBP the way Gemini does. They need to
            read your site and determine from its content whether your plumbing company is the right
            recommendation for a given query.
          </p>
          <p className="text-gray-300 leading-relaxed mb-5">
            The website elements that most directly influence ChatGPT and Perplexity plumber
            recommendations are your service pages (do they describe specific plumbing services
            in clear language?), your service area coverage (do they make it unambiguous what
            cities and neighborhoods you serve?), and your FAQ content (do they answer the questions
            homeowners actually ask about plumbing?).
          </p>

          <div className="ae-callout ae-callout-orange">
            <div className="ae-callout-title">The Service Page Standard for Plumbing AI Visibility</div>
            <p>
              Each major plumbing service you offer, such as drain cleaning, water heater installation,
              pipe repair, or sewer line service, should have its own dedicated service page that
              describes what the service includes, who it is for, how long it takes, and which areas
              you serve for that service. AI platforms cite specific service pages when recommending
              plumbers for specific needs. A single generic "services" page leaves money on the table.
            </p>
          </div>

          <p className="text-gray-300 leading-relaxed mt-5">
            For more guidance on writing service pages that AI platforms actively cite, read our
            dedicated guide on{' '}
            <Link
              href="/blog/how-to-write-a-service-page-that-ai-platforms-actually-cite"
              className="text-[#FF6A00] hover:text-[#e55f00] transition-colors"
            >
              how to write a service page that AI platforms actually cite
            </Link>
            .
          </p>
        </section>

        {/* Section 6 */}
        <section id="emergency" className="mb-14">
          <h2 className="font-plus-jakarta text-3xl font-bold text-white mb-5">
            Emergency Plumbing: The Highest-Value AI Recommendation Category
          </h2>
          <p className="text-gray-300 leading-relaxed mb-5">
            Emergency plumbing queries are the holy grail for plumbing AI visibility. When someone
            has a burst pipe or an overflowing toilet at midnight, they are highly motivated, willing
            to pay premium rates, and ready to call whoever the AI recommends immediately. These are
            the highest-converting, highest-ticket customer moments in the industry.
          </p>
          <p className="text-gray-300 leading-relaxed mb-5">
            AI platforms handle emergency plumbing queries differently from general plumbing queries
            because urgency changes the filtering criteria. For a general query about drain cleaning,
            AI looks for the most trusted overall plumber. For an emergency query, AI filters first
            for availability (24-hour service) and then applies the standard trust criteria within
            that filtered set.
          </p>

          {/* Decision Matrix: Emergency query filtering */}
          <div className="ae-decision-matrix my-8">
            <div className="ae-decision-row">
              <div className="ae-decision-if">Query: "emergency plumber near me"</div>
              <div className="ae-decision-arrow">→</div>
              <div className="ae-decision-then">AI first filters for 24-hour availability, then ranks by trust signals</div>
            </div>
            <div className="ae-decision-row">
              <div className="ae-decision-if">Your GBP shows 24-hour hours</div>
              <div className="ae-decision-arrow">→</div>
              <div className="ae-decision-then">You enter the eligible set for emergency recommendations</div>
            </div>
            <div className="ae-decision-row">
              <div className="ae-decision-if">Your GBP shows 8 AM to 5 PM only</div>
              <div className="ae-decision-arrow">→</div>
              <div className="ae-decision-then">You are filtered OUT of emergency plumber recommendations</div>
            </div>
            <div className="ae-decision-row">
              <div className="ae-decision-if">Reviews mention "fast response," "same day"</div>
              <div className="ae-decision-arrow">→</div>
              <div className="ae-decision-then">AI uses this as urgency-specific trust validation</div>
            </div>
          </div>

          <p className="text-gray-300 leading-relaxed mb-5">
            If you offer 24-hour emergency service, this must be visible in three places: your GBP
            hours, your GBP service description, and your website homepage or emergency service page.
            If any of these three are missing, you may be getting filtered out of emergency
            recommendations even when you would be the right answer.
          </p>
        </section>

        {/* Section 7 */}
        <section id="platforms" className="mb-14">
          <h2 className="font-plus-jakarta text-3xl font-bold text-white mb-5">
            Platform by Platform: ChatGPT, Gemini, and Perplexity
          </h2>
          <p className="text-gray-300 leading-relaxed mb-5">
            Each major AI platform has different sources and recommendation logic for plumbing
            companies. Understanding these differences helps you prioritize where to focus.
          </p>

          {/* Dollar Compare - Platform investment priority */}
          <div className="ae-dollar-compare my-8">
            <div className="ae-dollar-item">
              <div className="ae-dollar-label">Google Gemini</div>
              <div className="ae-dollar-price">GBP first. Reviews second. Website third.</div>
            </div>
            <div className="ae-dollar-item">
              <div className="ae-dollar-label">ChatGPT (with search)</div>
              <div className="ae-dollar-price">Website authority first. Yelp second. Bing Places third.</div>
            </div>
            <div className="ae-dollar-item">
              <div className="ae-dollar-label">Perplexity</div>
              <div className="ae-dollar-price">Multi-source: Yelp, website, directories all weighted equally.</div>
            </div>
            <div className="ae-dollar-item">
              <div className="ae-dollar-label">Microsoft Copilot</div>
              <div className="ae-dollar-price">Bing Places primary. Website secondary. Maps integration.</div>
            </div>
            <div className="ae-dollar-item">
              <div className="ae-dollar-label">Google AI Overviews</div>
              <div className="ae-dollar-price">GBP and Maps data. Strong organic ranking helps but not required.</div>
            </div>
          </div>

          <p className="text-gray-300 leading-relaxed">
            The common thread across all five platforms is this: a plumbing company that invests in
            GBP completion, Yelp optimization, website service pages, and consistent directory listings
            will appear across all major AI platforms. Neglecting any single platform-specific signal
            creates a gap in your overall AI recommendation coverage.
          </p>
        </section>

        {/* Section 8 */}
        <section id="vs-competition" className="mb-14">
          <h2 className="font-plus-jakarta text-3xl font-bold text-white mb-5">
            How to Beat Larger Competitors in AI Recommendations
          </h2>
          <p className="text-gray-300 leading-relaxed mb-5">
            Large plumbing companies with big marketing budgets have one structural advantage in AI
            search: they often have higher brand recognition scores, which is a proxy for the branded
            search volume that AI platforms treat as a prominence signal. A franchise brand that
            everyone has heard of will have higher inherent AI visibility than an unknown local company.
          </p>
          <p className="text-gray-300 leading-relaxed mb-5">
            However, large companies have systematic weaknesses that independent plumbers can exploit.
            Franchise locations often have inconsistent GBP management. Their reviews are split across
            multiple locations. Their website content is generic corporate copy that does not reflect
            the specific local service area. And because large companies manage dozens or hundreds of
            locations centrally, individual location optimization is often neglected.
          </p>

          {/* Pros/Cons */}
          <div className="ae-pros-cons">
            <div className="ae-pros-box">
              <h4>Independent Plumber Advantages Over Franchises</h4>
              <ul>
                <li>Single GBP location, easier to fully optimize</li>
                <li>Reviews all in one place, building faster</li>
                <li>Local community mentions and press coverage</li>
                <li>Service pages tailored to your exact coverage area</li>
                <li>Owner responsiveness that feels personal to AI review analysis</li>
              </ul>
            </div>
            <div className="ae-cons-box">
              <h4>Franchise Advantages You Need to Overcome</h4>
              <ul>
                <li>National brand recognition signals</li>
                <li>Established domain authority</li>
                <li>Systematic review collection at scale</li>
                <li>Multiple directory verifications</li>
                <li>Marketing budget for citation building</li>
              </ul>
            </div>
          </div>

          <p className="text-gray-300 leading-relaxed mt-6">
            The most effective way for an independent plumber to beat a franchise in AI recommendations
            is to win the local trust contest: more recent reviews, a more complete GBP, more specific
            service pages, and more consistent directory information than the franchise's often
            underoptimized local location. Recency and specificity beat size and scale in AI
            recommendation systems more often than most plumbers realize.
          </p>
        </section>

        {/* Cheat Sheet */}
        <div className="ae-cheat-sheet mb-14">
          <div className="ae-cheat-sheet-title">Plumber AI Visibility Quick-Start Checklist</div>
          <table>
            <tbody>
              <tr>
                <td className="font-semibold text-white">GBP Verified</td>
                <td>Claimed, verified, all fields complete including emergency hours if applicable</td>
              </tr>
              <tr>
                <td className="font-semibold text-white">GBP Categories</td>
                <td>Primary "Plumber" set, relevant secondaries added for specific services</td>
              </tr>
              <tr>
                <td className="font-semibold text-white">Reviews Active</td>
                <td>Systematic post-service review request in place, collecting new reviews monthly</td>
              </tr>
              <tr>
                <td className="font-semibold text-white">Yelp Profile</td>
                <td>Complete, verified, same NAP as GBP, responding to all reviews</td>
              </tr>
              <tr>
                <td className="font-semibold text-white">Service Pages</td>
                <td>Dedicated page per major service with service area and specific descriptions</td>
              </tr>
              <tr>
                <td className="font-semibold text-white">Emergency Signals</td>
                <td>24/7 availability reflected in GBP hours, website, and service descriptions</td>
              </tr>
              <tr>
                <td className="font-semibold text-white">NAP Consistent</td>
                <td>Exact same name, address, phone across all directories</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Takeaway */}
        <div className="ae-takeaway mb-14">
          <div className="ae-takeaway-title">The Plumber's AI Opportunity</div>
          <p>
            Plumbing is one of the highest-value categories for AI recommendation marketing because
            the customer urgency is real, the jobs are high-ticket, and the decision window is short.
            When a homeowner asks AI for a plumber, they are calling within minutes. The plumber
            that AI names in that moment does not win a click. They win a call. Invest in the signals
            that get you named, and you win the customer.
          </p>
        </div>

        {/* CTA Block */}
        <div className="not-prose my-16 p-8 rounded-2xl bg-gradient-to-br from-[#FF6A00]/10 to-transparent border border-[#FF6A00]/20">
          <h3 className="font-plus-jakarta text-2xl font-bold text-white mb-3">
            Is Your Plumbing Business Showing Up When Homeowners Ask AI?
          </h3>
          <p className="text-gray-400 mb-6">
            Our free Blind Spot Report analyzes your plumbing company's AI visibility across ChatGPT,
            Gemini, and Perplexity, identifies exactly what is missing, and gives you a clear
            action plan to start getting recommended.
          </p>
          <Link
            href="/blindspot"
            className="inline-flex items-center gap-2 bg-[#FF6A00] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#e55f00] transition-colors"
          >
            Get Your Free Blind Spot Report
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <div className="flex flex-wrap items-center gap-6 mt-6 pt-6 border-t border-[#FF6A00]/10">
            <a href="tel:+12134442229" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (213) 444-2229
            </a>
            <a href="mailto:support@theanswerengine.ai" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              support@theanswerengine.ai
            </a>
          </div>
        </div>

        {/* Author Card */}
        <div className="ae-author-card mb-14">
          <div className="ae-author-avatar">AE</div>
          <div>
            <div className="font-plus-jakarta font-bold text-white">The Answer Engine Team</div>
            <div className="text-gray-400 text-sm">
              We specialize in AI visibility for local service businesses including plumbers, HVAC
              companies, electricians, and contractors. We help local professionals get recommended
              by AI before their competitors figure out it matters.
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
                How do customers find plumbers on ChatGPT?
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Customers ask ChatGPT questions like "Who is a reliable plumber in [city]?" or "Can you
                recommend a plumber that handles emergencies near me?" ChatGPT then synthesizes information
                from its Bing integration, pulling from business websites, Yelp, and local directories.
                Plumbing companies with strong web presence, consistent directory listings, and active
                reviews are most likely to be recommended.
              </p>
            </div>

            <div className="border border-gray-800 rounded-xl p-6">
              <h3 className="font-plus-jakarta font-bold text-white mb-3">
                What is the most important thing a plumber can do to get recommended by AI?
              </h3>
              <p className="text-gray-300 leading-relaxed">
                A complete, verified Google Business Profile is the single most important investment.
                Google Gemini reads GBP directly for local recommendations. Beyond that, consistent NAP
                across all directories, active review collection, and a website that clearly describes
                services and service area are the key factors AI platforms use.
              </p>
            </div>

            <div className="border border-gray-800 rounded-xl p-6">
              <h3 className="font-plus-jakarta font-bold text-white mb-3">
                How long does it take for a plumbing company to appear in AI recommendations?
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Most plumbing businesses begin appearing in AI recommendations within 30 to 45 days of
                completing core optimization: verified GBP, consistent directories, and active review
                collection. Strong positioning across multiple AI platforms typically develops within 60
                to 90 days of sustained effort.
              </p>
            </div>

            <div className="border border-gray-800 rounded-xl p-6">
              <h3 className="font-plus-jakarta font-bold text-white mb-3">
                Does emergency plumbing get different AI recommendations than general plumbing?
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Yes. For emergency plumbing queries, AI platforms weight availability signals (24-hour
                hours in GBP) and review language about urgency and speed more heavily. Plumbers who
                indicate 24-hour availability and have reviews mentioning "quick response" are much more
                likely to appear in emergency plumbing AI recommendations.
              </p>
            </div>

            <div className="border border-gray-800 rounded-xl p-6">
              <h3 className="font-plus-jakarta font-bold text-white mb-3">
                Do I need a website to get recommended by AI as a plumber?
              </h3>
              <p className="text-gray-300 leading-relaxed">
                A website significantly strengthens your AI recommendation chances but is not an absolute
                requirement for every platform. Google Gemini can recommend a business based primarily on
                a strong GBP. However, ChatGPT and Perplexity rely more heavily on website content.
                A simple, clear website describing your services and service area substantially increases
                your AI visibility across all major platforms.
              </p>
            </div>

            <div className="border border-gray-800 rounded-xl p-6">
              <h3 className="font-plus-jakarta font-bold text-white mb-3">
                How can I beat a larger plumbing company in AI recommendations?
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Larger companies have brand awareness advantages but are often slow to optimize the
                specific signals AI platforms use for local recommendations. A smaller company with a
                complete GBP, 4.7-star rating with 100 recent reviews, detailed service pages, and
                consistent directory listings can outperform a larger competitor with weaker AI visibility
                signals. Recency and consistency beat size in AI recommendation systems.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <div className="ae-final-cta">
          <h2 className="font-plus-jakarta text-3xl font-bold text-white mb-4">
            Start Getting the AI Recommendation Your Competitors Are Missing
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Every homeowner who asks AI for a plumber and gets your competitor's name is a job you
            could have had. Our free Blind Spot Report tells you exactly what is standing between you
            and that recommendation. Takes 60 seconds.
          </p>
          <Link href="/blindspot" className="ae-cta-primary">
            Get My Free Blind Spot Report
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <p className="text-gray-500 text-sm mt-4">
            Or reach us at{' '}
            <a href="mailto:support@theanswerengine.ai" className="text-gray-400 hover:text-white transition-colors">
              support@theanswerengine.ai
            </a>
          </p>
        </div>

      </article>
    </>
  )
}
