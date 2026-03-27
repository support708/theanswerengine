import type { Metadata } from 'next'
import Link from 'next/link'

export const revalidate = 86400
export const dynamic = 'force-static'
export const dynamicParams = true

export const metadata: Metadata = {
  title: 'AI Search vs Google Maps: Which Sends More Customers | The Answer Engine',
  description:
    'Google Maps still dominates local search, but AI platforms like ChatGPT convert at 5x the rate. See the real data on where your next customer is coming from and what to do about it.',
  keywords: [
    'AI search vs Google Maps',
    'ChatGPT local business traffic',
    'Google Maps customer referrals',
    'AI search local business',
    'Perplexity local business',
    'local business discovery AI',
    'answer engine optimization',
    'AI vs maps customer traffic',
    'local SEO 2025',
    'ChatGPT vs Google Maps',
  ],
  authors: [{ name: 'The Answer Engine Team' }],
  openGraph: {
    title: 'AI Search vs Google Maps: Which Sends More Customers',
    description:
      'Google Maps still dominates local search, but AI platforms like ChatGPT convert at 5x the rate. See the real data on where your next customer is coming from.',
    url: 'https://theanswerengine.ai/blog/ai-search-vs-google-maps-which-one-sends-more-customers',
    siteName: 'The Answer Engine',
    type: 'article',
    publishedTime: '2026-03-25T00:00:00Z',
    authors: ['The Answer Engine Team'],
    images: [
      {
        url: 'https://theanswerengine.ai/blog/ai-search-vs-google-maps-which-one-sends-more-customers.webp',
        width: 1200,
        height: 630,
        alt: 'AI Search vs Google Maps: Which Sends More Customers to Local Businesses',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Search vs Google Maps: Which Sends More Customers',
    description:
      'Google Maps still dominates local search, but AI platforms like ChatGPT convert at 5x the rate. See where your customers are actually coming from.',
    site: '@theanswerengine',
  },
  alternates: {
    canonical:
      'https://theanswerengine.ai/blog/ai-search-vs-google-maps-which-one-sends-more-customers',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      '@id':
        'https://theanswerengine.ai/blog/ai-search-vs-google-maps-which-one-sends-more-customers#article',
      headline: 'AI Search vs Google Maps: Which Sends More Customers',
      description:
        'Google Maps still dominates local search volume, but AI platforms like ChatGPT and Perplexity convert at 5 to 15x higher rates. A data-driven comparison of where local businesses get their best customers in 2026.',
      url: 'https://theanswerengine.ai/blog/ai-search-vs-google-maps-which-one-sends-more-customers',
      datePublished: '2026-03-25T00:00:00Z',
      dateModified: '2026-03-25T00:00:00Z',
      author: {
        '@type': 'Organization',
        name: 'The Answer Engine Team',
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
      image:
        'https://theanswerengine.ai/blog/ai-search-vs-google-maps-which-one-sends-more-customers.webp',
      keywords:
        'AI search vs Google Maps, ChatGPT local business traffic, Google Maps customer referrals, AI search local business, answer engine optimization',
      articleSection: 'Competitive Intelligence',
      wordCount: 2800,
    },
    {
      '@type': 'FAQPage',
      '@id':
        'https://theanswerengine.ai/blog/ai-search-vs-google-maps-which-one-sends-more-customers#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Does AI search send more customers than Google Maps?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Not yet in volume, but AI search is closing the gap fast. Google Maps still drives higher raw traffic to local businesses, with 42% of users clicking the local 3-pack. However, AI referral traffic from ChatGPT converts at 15.9% compared to Google organic at 1.76%, making each AI-sourced visitor worth roughly 9x more. The channel you optimize for today determines who finds you in 2027.',
          },
        },
        {
          '@type': 'Question',
          name: 'How fast is AI search growing for local business discovery?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Extremely fast. AI platforms generated 1.13 billion referral visits in June 2025, a 357% increase from June 2024. The share of consumers using AI tools for local business recommendations jumped from 6% to 45% in one year, a 650% increase. AI search traffic to websites grew 527% year-over-year between January and May 2025.',
          },
        },
        {
          '@type': 'Question',
          name: 'What percentage of local searches now use AI vs Google Maps?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Google Maps and Google's local 3-pack still appear for the vast majority of local queries. Brands appear in Google's local 3-pack 35.9% of the time, while only 1.2% of locations are recommended by ChatGPT and 7.4% by Perplexity. However, AI visibility is 3 to 30 times harder to achieve than ranking in traditional local search, which means businesses that crack it face almost no competition.",
          },
        },
        {
          '@type': 'Question',
          name: 'Which converts better: AI search traffic or Google Maps traffic?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'AI search traffic converts significantly better. ChatGPT-referred visitors convert at 15.9%, Perplexity at 10.5%, and Google AI at approximately 3%. Google Maps and organic search convert at 1.76% to 2.8%. A customer arriving from ChatGPT has already had a full AI-assisted research session and is arriving with a decision largely made.',
          },
        },
        {
          '@type': 'Question',
          name: 'Should I stop optimizing Google Maps and focus on AI search instead?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Google Maps still drives the majority of local business traffic. 8 in 10 Americans search for a local business online at least once a week, and most of those searches still touch Google Maps or the local 3-pack. The correct strategy is to maintain your Google Maps presence while building AI search visibility simultaneously, since both channels pull from overlapping data sources.',
          },
        },
        {
          '@type': 'Question',
          name: 'What data do AI platforms use to recommend local businesses?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "AI assistants like ChatGPT and Perplexity pull from multiple sources: Google Business Profiles, Apple Maps, Yelp, online reviews, structured website content, and third-party directories. This means your Google Maps optimization feeds AI search too. A well-maintained Google Business Profile with consistent NAP data, detailed descriptions, and strong reviews increases your chances of appearing in both channels.",
          },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      '@id':
        'https://theanswerengine.ai/blog/ai-search-vs-google-maps-which-one-sends-more-customers#breadcrumb',
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
          name: 'AI Search vs Google Maps: Which Sends More Customers',
          item: 'https://theanswerengine.ai/blog/ai-search-vs-google-maps-which-one-sends-more-customers',
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

      <div style={{ background: '#0F1117', minHeight: '100vh', color: '#fff' }}>

        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          style={{ borderBottom: '1px solid #1E2130' }}
        >
          <div className="max-w-4xl mx-auto px-6 py-3">
            <ol
              className="flex flex-wrap items-center gap-2 text-sm"
              style={{ color: '#9CA3AF' }}
            >
              <li>
                <Link href="/" style={{ color: '#9CA3AF' }} className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/blog" style={{ color: '#9CA3AF' }} className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li style={{ color: '#FF6A00' }} aria-current="page">
                AI Search vs Google Maps
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero Header */}
        <header className="max-w-4xl mx-auto px-6 py-16">
          <div className="mb-4">
            <span
              className="ae-section-label inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
              style={{ background: 'rgba(255,106,0,0.15)', color: '#FF6A00', border: '1px solid rgba(255,106,0,0.3)' }}
            >
              Competitive Intelligence
            </span>
          </div>

          <h1
            className="font-plus-jakarta text-4xl md:text-5xl font-extrabold leading-tight mb-6"
            style={{ color: '#FFFFFF' }}
          >
            AI Search vs Google Maps:{' '}
            <span style={{ color: '#FF6A00' }}>Which One Sends More Customers</span>
          </h1>

          {/* Intro Box */}
          <div
            className="rounded-xl p-6 mb-8"
            style={{
              background: 'rgba(255,106,0,0.08)',
              border: '1px solid rgba(255,106,0,0.25)',
            }}
          >
            <p className="text-lg leading-relaxed" style={{ color: '#E5E7EB' }}>
              Google Maps has been the undisputed king of local business discovery for over a decade.
              Then 2024 happened. AI search adoption for local recommendations jumped from 6% to 45%
              in a single year, a 650% increase. Meanwhile, ChatGPT-referred visitors convert at
              nearly 16%, compared to 1.76% for standard Google organic. The volume story still
              favors Maps. The value story is flipping fast. Here is what the data actually shows,
              and what it means for your business right now.
            </p>
          </div>

          {/* Article Meta */}
          <div className="flex flex-wrap items-center gap-4 text-sm" style={{ color: '#6B7280' }}>
            <span>By The Answer Engine Team</span>
            <span aria-hidden="true">|</span>
            <time dateTime="2026-03-25">March 25, 2026</time>
            <span aria-hidden="true">|</span>
            <span>12 min read</span>
            <span aria-hidden="true">|</span>
            <span style={{ color: '#FF6A00' }}>Competitive Intelligence</span>
          </div>
        </header>

        {/* Prose Body */}
        <main className="max-w-4xl mx-auto px-6 pb-24">

          {/* TOC */}
          <nav
            aria-label="Table of contents"
            className="ae-toc rounded-xl p-6 mb-12"
            style={{ background: '#161923', border: '1px solid #1E2130' }}
          >
            <p
              className="font-plus-jakarta text-xs font-bold uppercase tracking-widest mb-4"
              style={{ color: '#FF6A00' }}
            >
              In This Article
            </p>
            <ol className="space-y-2 text-sm" style={{ color: '#9CA3AF' }}>
              <li>
                <a href="#the-numbers" className="hover:text-white transition-colors">
                  1. The Numbers: Volume vs Value
                </a>
              </li>
              <li>
                <a href="#how-google-maps-works" className="hover:text-white transition-colors">
                  2. How Google Maps Sends Customers
                </a>
              </li>
              <li>
                <a href="#how-ai-search-works" className="hover:text-white transition-colors">
                  3. How AI Search Sends Customers
                </a>
              </li>
              <li>
                <a href="#head-to-head" className="hover:text-white transition-colors">
                  4. Head-to-Head Comparison
                </a>
              </li>
              <li>
                <a href="#the-shift" className="hover:text-white transition-colors">
                  5. The Shift Happening Right Now
                </a>
              </li>
              <li>
                <a href="#pros-cons" className="hover:text-white transition-colors">
                  6. Pros and Cons of Each Channel
                </a>
              </li>
              <li>
                <a href="#decision-matrix" className="hover:text-white transition-colors">
                  7. Which One Matters More for Your Business
                </a>
              </li>
              <li>
                <a href="#cheat-sheet" className="hover:text-white transition-colors">
                  8. Quick-Reference Cheat Sheet
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  9. FAQ
                </a>
              </li>
            </ol>
          </nav>

          {/* Stats Grid */}
          <section id="the-numbers" aria-labelledby="stats-heading" className="mb-16">
            <h2
              id="stats-heading"
              className="font-plus-jakarta text-3xl font-bold mb-4"
              style={{ color: '#FFFFFF' }}
            >
              The Numbers: Volume vs Value
            </h2>
            <p className="mb-8 text-lg leading-relaxed" style={{ color: '#D1D5DB' }}>
              The conversation about which channel is "better" misses the point. Google Maps and AI
              search are competing on different dimensions. Maps wins on raw volume. AI wins on
              conversion quality. The real question is: which dimension matters more to your bottom
              line right now?
            </p>

            <div className="ae-stats-grid grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {[
                {
                  stat: '42%',
                  label: 'of users click the Google local 3-pack when it appears',
                  color: '#60A5FA',
                },
                {
                  stat: '15.9%',
                  label: 'conversion rate for ChatGPT-referred visitors vs 1.76% for Google organic',
                  color: '#FF6A00',
                },
                {
                  stat: '357%',
                  label: 'growth in AI referral visits from June 2024 to June 2025',
                  color: '#34D399',
                },
                {
                  stat: '650%',
                  label: 'jump in consumers using AI tools for local business recommendations in one year',
                  color: '#A78BFA',
                },
              ].map((item) => (
                <div
                  key={item.stat}
                  className="rounded-xl p-5 flex flex-col gap-2"
                  style={{ background: '#161923', border: '1px solid #1E2130' }}
                >
                  <span
                    className="font-plus-jakarta text-3xl font-extrabold"
                    style={{ color: item.color }}
                  >
                    {item.stat}
                  </span>
                  <span className="text-xs leading-tight" style={{ color: '#9CA3AF' }}>
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Bar Chart: Conversion Rates */}
            <div
              className="ae-bar-group rounded-xl p-6 mb-8"
              style={{ background: '#161923', border: '1px solid #1E2130' }}
            >
              <p
                className="font-plus-jakarta text-sm font-bold uppercase tracking-wider mb-6"
                style={{ color: '#FF6A00' }}
              >
                Conversion Rates by Channel
              </p>
              {[
                { label: 'ChatGPT', value: 15.9, max: 16, color: '#FF6A00' },
                { label: 'Perplexity', value: 10.5, max: 16, color: '#F59E0B' },
                { label: 'Google AI Overview', value: 3.0, max: 16, color: '#60A5FA' },
                { label: 'Google Maps / 3-Pack', value: 2.8, max: 16, color: '#34D399' },
                { label: 'Google Organic', value: 1.76, max: 16, color: '#6B7280' },
              ].map((row) => (
                <div key={row.label} className="mb-4">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm" style={{ color: '#D1D5DB' }}>
                      {row.label}
                    </span>
                    <span className="text-sm font-bold" style={{ color: row.color }}>
                      {row.value}%
                    </span>
                  </div>
                  <div
                    className="h-2 rounded-full"
                    style={{ background: '#0F1117', overflow: 'hidden' }}
                  >
                    <div
                      className="h-2 rounded-full"
                      style={{
                        width: `${(row.value / row.max) * 100}%`,
                        background: row.color,
                      }}
                    />
                  </div>
                </div>
              ))}
              <p className="text-xs mt-4" style={{ color: '#6B7280' }}>
                Sources: SE Ranking AI Traffic Study 2025, Digiday AI Referral Report, BrightLocal
              </p>
            </div>
          </section>

          {/* CTA 1 */}
          <div
            className="ae-cta-inline rounded-xl p-6 mb-14"
            style={{
              background: 'linear-gradient(135deg, rgba(255,106,0,0.12) 0%, rgba(255,106,0,0.04) 100%)',
              border: '1px solid rgba(255,106,0,0.3)',
            }}
          >
            <p className="font-plus-jakarta text-lg font-bold mb-2" style={{ color: '#FFFFFF' }}>
              Not sure where your customers are actually finding you?
            </p>
            <p className="text-sm mb-4" style={{ color: '#9CA3AF' }}>
              We audit your AI and Maps visibility in both channels and show you exactly which one
              is sending qualified leads, and what you are missing.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/get-started"
                className="inline-block font-bold text-sm px-5 py-2.5 rounded-lg transition-all"
                style={{ background: '#FF6A00', color: '#fff' }}
              >
                Get Your Free Visibility Audit
              </Link>
              <a
                href="tel:+1-800-555-0199"
                className="inline-block text-sm px-5 py-2.5 rounded-lg transition-all"
                style={{ border: '1px solid rgba(255,106,0,0.4)', color: '#FF6A00' }}
              >
                Call Us Now
              </a>
            </div>
          </div>

          {/* Section 2: How Google Maps Works */}
          <section id="how-google-maps-works" aria-labelledby="maps-heading" className="mb-16">
            <h2
              id="maps-heading"
              className="font-plus-jakarta text-3xl font-bold mb-4"
              style={{ color: '#FFFFFF' }}
            >
              How Google Maps Sends Customers Today
            </h2>
            <p className="mb-6 text-lg leading-relaxed" style={{ color: '#D1D5DB' }}>
              Google Maps and the local 3-pack remain the dominant local business discovery channel
              in 2026. The mechanics are well-understood: a user types "plumber near me" or "best
              sushi downtown," Google surfaces a map with three pinned businesses, and users click
              the one with the best rating, most reviews, or closest location.
            </p>
            <p className="mb-6 leading-relaxed" style={{ color: '#D1D5DB' }}>
              The numbers back this up. When the Google Map Pack appears, 42% of users click it.
              Businesses in the local 3-pack receive 126% more traffic and 93% more
              conversion-oriented actions than businesses in positions 4 through 10. "Near me"
              searches make up 84% of local discovery searches, and 8 in 10 Americans search for a
              local business online at least once a week.
            </p>
            <p className="mb-6 leading-relaxed" style={{ color: '#D1D5DB' }}>
              Google Maps customers tend to be in a specific behavioral mode: they know what they
              want, they want it nearby, and they are comparing options side by side. This produces
              moderate conversion rates, typically 2 to 3%, but enormous volume.
            </p>

            {/* Callout Info */}
            <div
              className="ae-callout ae-callout-info rounded-xl p-5 mb-8"
              style={{ background: 'rgba(96,165,250,0.08)', border: '1px solid rgba(96,165,250,0.25)' }}
            >
              <p className="font-bold text-sm mb-1" style={{ color: '#60A5FA' }}>
                Key Context: The 3-Pack is Getting Compressed
              </p>
              <p className="text-sm leading-relaxed" style={{ color: '#D1D5DB' }}>
                Google&apos;s AI Overviews now appear above the local 3-pack in many queries. This
                means even if you rank in the top 3, an AI-generated summary about your
                competitors may appear first. Google Maps optimization and AI optimization are no
                longer separate disciplines.
              </p>
            </div>
          </section>

          {/* Section 3: How AI Search Works */}
          <section id="how-ai-search-works" aria-labelledby="ai-heading" className="mb-16">
            <h2
              id="ai-heading"
              className="font-plus-jakarta text-3xl font-bold mb-4"
              style={{ color: '#FFFFFF' }}
            >
              How AI Search Sends Customers
            </h2>
            <p className="mb-6 text-lg leading-relaxed" style={{ color: '#D1D5DB' }}>
              AI search operates differently at every stage of the customer journey. When someone
              asks ChatGPT "Who is the best HVAC company in Austin?" they are not browsing a map,
              they are requesting a recommendation. The AI synthesizes information from your website,
              review platforms, directories, and structured data, then names a business as the answer.
            </p>
            <p className="mb-6 leading-relaxed" style={{ color: '#D1D5DB' }}>
              That distinction changes who arrives at your door. A customer from Google Maps was
              comparing options. A customer from ChatGPT received a direct recommendation and arrived
              having already decided. This is why conversion rates from AI-sourced traffic are so
              dramatically higher: ChatGPT at 15.9%, Perplexity at 10.5%, Google AI Overview at 3%.
            </p>
            <p className="mb-6 leading-relaxed" style={{ color: '#D1D5DB' }}>
              The challenge is visibility. Only 1.2% of locations are currently recommended by
              ChatGPT and 7.4% by Perplexity, compared to 35.9% appearing in Google&apos;s local
              3-pack. AI visibility is 3 to 30 times harder to achieve. The businesses that invest
              in it now face almost no competition.
            </p>

            {/* Internal link */}
            <p className="mb-8 leading-relaxed" style={{ color: '#D1D5DB' }}>
              For a detailed breakdown of how each AI platform evaluates businesses, see our guide:{' '}
              <Link
                href="/blog/how-customers-use-ai-to-find-local-businesses"
                style={{ color: '#FF6A00', textDecoration: 'underline' }}
              >
                How Customers Use AI to Find Local Businesses
              </Link>
              .
            </p>

            {/* Callout Warning */}
            <div
              className="ae-callout ae-callout-warning rounded-xl p-5 mb-8"
              style={{ background: 'rgba(251,191,36,0.08)', border: '1px solid rgba(251,191,36,0.25)' }}
            >
              <p className="font-bold text-sm mb-1" style={{ color: '#FBBF24' }}>
                Warning: AI Referral Traffic Is Growing Faster Than Most Businesses Realize
              </p>
              <p className="text-sm leading-relaxed" style={{ color: '#D1D5DB' }}>
                AI search traffic to SMB websites grew 527% year-over-year in early 2025. If your
                analytics are not broken out by referral source, you may be missing a rapidly growing
                channel entirely. Businesses that wait until AI traffic is "significant" will be
                fighting for visibility against competitors who have been building it for two years.
              </p>
            </div>
          </section>

          {/* CTA 2 */}
          <div
            className="ae-cta-inline rounded-xl p-6 mb-14"
            style={{
              background: 'rgba(255,106,0,0.06)',
              border: '1px solid rgba(255,106,0,0.2)',
            }}
          >
            <p className="font-plus-jakarta font-bold mb-1" style={{ color: '#FFFFFF' }}>
              Already ranking on Maps but invisible to AI?
            </p>
            <p className="text-sm mb-4" style={{ color: '#9CA3AF' }}>
              That gap is exactly where we work. Text us your business name and we&apos;ll check
              your AI visibility across ChatGPT, Perplexity, and Google AI in 24 hours.
            </p>
            <a
              href="sms:+1-800-555-0199"
              className="inline-block font-bold text-sm px-5 py-2.5 rounded-lg"
              style={{ background: '#FF6A00', color: '#fff' }}
            >
              Text Us Your Business Name
            </a>
          </div>

          {/* Section 4: Head-to-Head Comparison Table */}
          <section id="head-to-head" aria-labelledby="compare-heading" className="mb-16">
            <h2
              id="compare-heading"
              className="font-plus-jakarta text-3xl font-bold mb-4"
              style={{ color: '#FFFFFF' }}
            >
              Head-to-Head: AI Search vs Google Maps
            </h2>
            <p className="mb-8 leading-relaxed" style={{ color: '#D1D5DB' }}>
              Neither channel is better in every dimension. Here is an honest, data-driven
              comparison across the metrics that matter to local businesses.
            </p>

            <div className="ae-comparison-table overflow-x-auto rounded-xl mb-8" style={{ border: '1px solid #1E2130' }}>
              <table className="w-full text-sm" style={{ borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ background: '#161923' }}>
                    <th
                      className="text-left p-4 font-bold"
                      style={{ color: '#9CA3AF', borderBottom: '1px solid #1E2130' }}
                    >
                      Metric
                    </th>
                    <th
                      className="text-center p-4 font-bold"
                      style={{ color: '#60A5FA', borderBottom: '1px solid #1E2130' }}
                    >
                      Google Maps / 3-Pack
                    </th>
                    <th
                      className="text-center p-4 font-bold"
                      style={{ color: '#FF6A00', borderBottom: '1px solid #1E2130' }}
                    >
                      AI Search (ChatGPT / Perplexity)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Traffic Volume', 'Very High (dominant)', 'Growing Fast (still small)'],
                    ['Conversion Rate', '2.8%', 'ChatGPT 15.9% / Perplexity 10.5%'],
                    ['Customer Intent', 'Browsing, comparing options', 'Decision-ready, seeking recommendation'],
                    ['Visibility Difficulty', 'Moderate (well-understood ranking signals)', '3x to 30x harder than Maps'],
                    ['Competition Level', 'Extremely high', 'Very low (most businesses absent)'],
                    ['Review Impact', 'Direct ranking signal', 'Referenced in AI responses'],
                    ['Speed to Results', '3 to 6 months', '6 to 12 months (less predictable)'],
                    ['Cost to Optimize', '$', '$$ to $$$'],
                    ['Session Duration', 'Short (map click to call)', 'Long (9 to 10 min research)'],
                    ['Year-over-Year Growth', 'Stable', '+357% to +527%'],
                  ].map(([metric, maps, ai], i) => (
                    <tr
                      key={metric}
                      style={{ background: i % 2 === 0 ? '#0F1117' : '#161923' }}
                    >
                      <td
                        className="p-4 font-medium"
                        style={{ color: '#D1D5DB', borderBottom: '1px solid #1E2130' }}
                      >
                        {metric}
                      </td>
                      <td
                        className="p-4 text-center"
                        style={{ color: '#9CA3AF', borderBottom: '1px solid #1E2130' }}
                      >
                        {maps}
                      </td>
                      <td
                        className="p-4 text-center"
                        style={{ color: '#9CA3AF', borderBottom: '1px solid #1E2130' }}
                      >
                        {ai}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 5: The Shift */}
          <section id="the-shift" aria-labelledby="shift-heading" className="mb-16">
            <h2
              id="shift-heading"
              className="font-plus-jakarta text-3xl font-bold mb-4"
              style={{ color: '#FFFFFF' }}
            >
              The Shift Happening Right Now
            </h2>
            <p className="mb-8 leading-relaxed" style={{ color: '#D1D5DB' }}>
              The transition from Maps-first to AI-first local discovery is not a future event. It
              is measurable today, and the timeline is accelerating. Here is how it has unfolded.
            </p>

            {/* Timeline */}
            <div className="ae-timeline relative mb-10 pl-8" style={{ borderLeft: '2px solid #1E2130' }}>
              {[
                {
                  year: '2022',
                  title: 'Google Maps Dominates Completely',
                  body: 'Local search is synonymous with Google Maps. AI chatbots exist but have no local recommendation capability. SEO and GBP optimization are the only games in town.',
                  color: '#6B7280',
                },
                {
                  year: '2023',
                  title: 'ChatGPT Goes Mainstream',
                  body: 'ChatGPT reaches 100 million users. Early adopters start asking it for local business recommendations. AI responses are inconsistent but the behavior is emerging.',
                  color: '#60A5FA',
                },
                {
                  year: '2024',
                  title: 'AI Search Adoption Accelerates',
                  body: 'AI chatbot usage for local recommendations jumps from 6% to early double digits. AI referral traffic grows 7x. Google launches AI Overviews, pushing the 3-pack below the fold on many queries.',
                  color: '#FBBF24',
                },
                {
                  year: '2025',
                  title: 'The Inflection Point',
                  body: 'AI platform visits hit 55.2 billion annually, up 81% year-over-year. Consumer AI adoption for local recommendations reaches 45%, a 650% jump in one year. AI referral traffic surges 527%. Google Maps traffic stable but share of initial research declines.',
                  color: '#FF6A00',
                },
                {
                  year: '2026+',
                  title: 'Dual-Channel Reality',
                  body: 'Businesses must now maintain two distinct visibility strategies. Maps handles high-volume browse behavior. AI handles high-intent recommendation queries. Businesses visible in only one channel are leaving significant revenue on the table.',
                  color: '#34D399',
                },
              ].map((item) => (
                <div key={item.year} className="relative mb-8">
                  <div
                    className="absolute -left-10 w-4 h-4 rounded-full border-2"
                    style={{ background: '#0F1117', borderColor: item.color, top: '4px' }}
                    aria-hidden="true"
                  />
                  <p
                    className="font-plus-jakarta text-xs font-bold uppercase tracking-wider mb-1"
                    style={{ color: item.color }}
                  >
                    {item.year}
                  </p>
                  <p className="font-bold mb-1" style={{ color: '#FFFFFF' }}>
                    {item.title}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: '#9CA3AF' }}>
                    {item.body}
                  </p>
                </div>
              ))}
            </div>

            {/* Quote */}
            <blockquote
              className="ae-quote rounded-xl p-6 mb-8"
              style={{ background: '#161923', borderLeft: '4px solid #FF6A00' }}
            >
              <p className="text-lg italic leading-relaxed mb-3" style={{ color: '#E5E7EB' }}>
                &ldquo;Google Maps still drives the most foot traffic. But ChatGPT drives the most
                decided customers. The gap between those two statements is where the next five years
                of local marketing strategy will be written.&rdquo;
              </p>
              <footer className="text-sm" style={{ color: '#6B7280' }}>
                The Answer Engine Research Team, 2026
              </footer>
            </blockquote>

            {/* Internal link */}
            <p className="mb-6 leading-relaxed" style={{ color: '#D1D5DB' }}>
              To understand how this shift is changing the full buyer journey, read:{' '}
              <Link
                href="/blog/how-ai-search-changes-sales-funnel"
                style={{ color: '#FF6A00', textDecoration: 'underline' }}
              >
                How AI Search Changes the Sales Funnel for Local Businesses
              </Link>
              .
            </p>
          </section>

          {/* CTA 3 */}
          <div
            className="ae-cta-inline rounded-xl p-6 mb-14"
            style={{
              background: 'rgba(255,106,0,0.08)',
              border: '1px solid rgba(255,106,0,0.25)',
            }}
          >
            <p className="font-plus-jakarta font-bold text-lg mb-2" style={{ color: '#FFFFFF' }}>
              The shift is already in your analytics. We just help you read it.
            </p>
            <p className="text-sm mb-4" style={{ color: '#9CA3AF' }}>
              Book a 20-minute visibility call and we&apos;ll walk you through exactly which channel
              is driving your best customers, and which one has a gap that your competitors are
              about to fill.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/blindspot"
                className="inline-block font-bold text-sm px-5 py-2.5 rounded-lg"
                style={{ background: '#FF6A00', color: '#fff' }}
              >
                Book a Free Visibility Call
              </Link>
              <a
                href="mailto:hello@theanswerengine.ai"
                className="inline-block text-sm px-5 py-2.5 rounded-lg"
                style={{ border: '1px solid #1E2130', color: '#9CA3AF' }}
              >
                Email Us Instead
              </a>
            </div>
          </div>

          {/* Section 6: Pros and Cons */}
          <section id="pros-cons" aria-labelledby="proscons-heading" className="mb-16">
            <h2
              id="proscons-heading"
              className="font-plus-jakarta text-3xl font-bold mb-8"
              style={{ color: '#FFFFFF' }}
            >
              Pros and Cons: Each Channel Honestly
            </h2>

            <div className="ae-pros-cons grid md:grid-cols-2 gap-6">
              {/* Google Maps */}
              <div className="rounded-xl p-6" style={{ background: '#161923', border: '1px solid #1E2130' }}>
                <p
                  className="font-plus-jakarta text-base font-bold uppercase tracking-wide mb-4"
                  style={{ color: '#60A5FA' }}
                >
                  Google Maps: Pros
                </p>
                <ul className="space-y-2 text-sm" style={{ color: '#D1D5DB' }}>
                  {[
                    'Massive, consistent traffic volume from billions of searches',
                    'Established optimization playbook with clear ranking signals',
                    'Faster time-to-results: 3 to 6 months with focused effort',
                    'Integrated with paid ads, reviews, and Posts for amplification',
                    'Customers in "ready to visit" mode: low friction to conversion',
                    'Free to list and optimize your Google Business Profile',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span style={{ color: '#34D399', marginTop: '2px' }} aria-hidden="true">+</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl p-6" style={{ background: '#161923', border: '1px solid #1E2130' }}>
                <p
                  className="font-plus-jakarta text-base font-bold uppercase tracking-wide mb-4"
                  style={{ color: '#F87171' }}
                >
                  Google Maps: Cons
                </p>
                <ul className="space-y-2 text-sm" style={{ color: '#D1D5DB' }}>
                  {[
                    'AI Overviews now appear above the 3-pack, stealing clicks',
                    'Extremely competitive: three spots, hundreds of businesses',
                    'Low conversion rate (2.8%) means high volume needed to hit revenue goals',
                    'Algorithm updates can eliminate your ranking overnight',
                    'Customers are comparison-shopping, not arriving with a decision made',
                    "Google's local share fell from 83% to 71% in one year",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span style={{ color: '#F87171', marginTop: '2px' }} aria-hidden="true">-</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* AI Search */}
              <div className="rounded-xl p-6" style={{ background: '#161923', border: '1px solid #1E2130' }}>
                <p
                  className="font-plus-jakarta text-base font-bold uppercase tracking-wide mb-4"
                  style={{ color: '#FF6A00' }}
                >
                  AI Search: Pros
                </p>
                <ul className="space-y-2 text-sm" style={{ color: '#D1D5DB' }}>
                  {[
                    'Conversion rates 5 to 9x higher than Google organic and Maps',
                    'Recommendation-style endorsement, not just a map pin listing',
                    'Low competition: most local businesses are not yet optimized',
                    'Growing 357% to 527% year-over-year, early movers gain lasting advantage',
                    'Visitors arrive with longer sessions (9 to 10 minutes) and stronger intent',
                    'Single optimization effort can span ChatGPT, Perplexity, and Gemini',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span style={{ color: '#34D399', marginTop: '2px' }} aria-hidden="true">+</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl p-6" style={{ background: '#161923', border: '1px solid #1E2130' }}>
                <p
                  className="font-plus-jakarta text-base font-bold uppercase tracking-wide mb-4"
                  style={{ color: '#F87171' }}
                >
                  AI Search: Cons
                </p>
                <ul className="space-y-2 text-sm" style={{ color: '#D1D5DB' }}>
                  {[
                    'Still smaller total volume than Google Maps traffic',
                    'Harder to achieve: 3 to 30x more difficult to appear in AI results',
                    'Less predictable ranking signals compared to Maps',
                    'Only 1.2% of locations currently recommended by ChatGPT',
                    'Longer time-to-results: 6 to 12 months for consistent visibility',
                    'AI can occasionally surface inaccurate or outdated business information',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span style={{ color: '#F87171', marginTop: '2px' }} aria-hidden="true">-</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Dollar Compare */}
          <section className="mb-16">
            <h3
              className="font-plus-jakarta text-xl font-bold mb-6"
              style={{ color: '#FFFFFF' }}
            >
              Cost Comparison: What You Are Actually Spending Per Qualified Lead
            </h3>
            <div className="ae-dollar-compare grid md:grid-cols-2 gap-4">
              {[
                {
                  channel: 'Google Maps Optimization',
                  monthly: '$300 to $800/mo',
                  leads: '20 to 60 leads/mo',
                  costPerLead: '$12 to $25',
                  note: 'Mature market, reliable but highly competitive',
                  color: '#60A5FA',
                },
                {
                  channel: 'AI Search Optimization (AEO)',
                  monthly: '$600 to $1,500/mo',
                  leads: '5 to 20 leads/mo (and growing)',
                  costPerLead: '$40 to $90 today, declining as volume grows',
                  note: 'Early-stage, high quality, compounding returns',
                  color: '#FF6A00',
                },
              ].map((item) => (
                <div
                  key={item.channel}
                  className="rounded-xl p-6"
                  style={{ background: '#161923', border: `1px solid ${item.color}33` }}
                >
                  <p
                    className="font-plus-jakarta font-bold mb-3"
                    style={{ color: item.color }}
                  >
                    {item.channel}
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span style={{ color: '#6B7280' }}>Monthly Investment</span>
                      <span style={{ color: '#D1D5DB' }}>{item.monthly}</span>
                    </div>
                    <div className="flex justify-between">
                      <span style={{ color: '#6B7280' }}>Typical Leads</span>
                      <span style={{ color: '#D1D5DB' }}>{item.leads}</span>
                    </div>
                    <div className="flex justify-between">
                      <span style={{ color: '#6B7280' }}>Est. Cost/Lead</span>
                      <span style={{ color: item.color, fontWeight: 'bold' }}>{item.costPerLead}</span>
                    </div>
                  </div>
                  <p className="text-xs mt-3" style={{ color: '#6B7280' }}>
                    {item.note}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 7: Decision Matrix */}
          <section id="decision-matrix" aria-labelledby="decision-heading" className="mb-16">
            <h2
              id="decision-heading"
              className="font-plus-jakarta text-3xl font-bold mb-4"
              style={{ color: '#FFFFFF' }}
            >
              Which One Matters More for Your Business
            </h2>
            <p className="mb-8 leading-relaxed" style={{ color: '#D1D5DB' }}>
              The right answer depends on your business type, customer acquisition model, and
              where you are in your growth journey. Use this matrix to assess your own situation.
            </p>

            <div className="ae-decision-matrix overflow-x-auto rounded-xl mb-8" style={{ border: '1px solid #1E2130' }}>
              <table className="w-full text-sm" style={{ borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ background: '#161923' }}>
                    {['Business Situation', 'Prioritize Maps If...', 'Prioritize AI Search If...'].map((h) => (
                      <th
                        key={h}
                        className="text-left p-4 font-bold"
                        style={{ color: '#9CA3AF', borderBottom: '1px solid #1E2130' }}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Customer intent', 'They search, compare, and decide on the spot', 'They research before committing to a provider'],
                    ['Business type', 'Walk-in retail, restaurants, quick-service', 'Service businesses, professional services, high-ticket'],
                    ['Ticket size', 'Under $200 average transaction', 'Over $500 average transaction'],
                    ['Competition level', 'You already have a strong Maps presence', "You're invisible in Maps, AI is your opening"],
                    ['Time horizon', 'Need leads in the next 90 days', 'Building a durable pipeline for the next 2 years'],
                    ['Budget', 'Under $500/month for marketing', 'Can invest $800+ monthly for 12 months'],
                    ['Current state', 'New business, need volume fast', 'Established business, want better-quality leads'],
                  ].map(([situation, maps, ai], i) => (
                    <tr
                      key={situation}
                      style={{ background: i % 2 === 0 ? '#0F1117' : '#161923' }}
                    >
                      <td
                        className="p-4 font-medium"
                        style={{ color: '#D1D5DB', borderBottom: '1px solid #1E2130' }}
                      >
                        {situation}
                      </td>
                      <td
                        className="p-4"
                        style={{ color: '#9CA3AF', borderBottom: '1px solid #1E2130' }}
                      >
                        {maps}
                      </td>
                      <td
                        className="p-4"
                        style={{ color: '#9CA3AF', borderBottom: '1px solid #1E2130' }}
                      >
                        {ai}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="leading-relaxed" style={{ color: '#D1D5DB' }}>
              For most established local businesses, the answer is not one or the other. It is
              maintaining your Maps presence while building AI visibility in parallel. The
              infrastructure overlaps significantly: strong Google Business Profile data, consistent
              NAP across directories, fresh review velocity, and structured website content all feed
              both channels simultaneously. For a deeper look at how AI platforms determine which
              businesses to recommend, see:{' '}
              <Link
                href="/blog/ai-search-replacing-map-pack"
                style={{ color: '#FF6A00', textDecoration: 'underline' }}
              >
                Is AI Search Replacing the Google Map Pack?
              </Link>
            </p>
          </section>

          {/* CTA 4 */}
          <div
            className="ae-cta-inline rounded-xl p-6 mb-14"
            style={{
              background: 'rgba(255,106,0,0.08)',
              border: '1px solid rgba(255,106,0,0.25)',
            }}
          >
            <p className="font-plus-jakarta font-bold text-lg mb-2" style={{ color: '#FFFFFF' }}>
              Not sure which channel to prioritize first?
            </p>
            <p className="text-sm mb-4" style={{ color: '#9CA3AF' }}>
              We run a complete dual-channel audit: your Google Maps visibility, your AI search
              presence, and a side-by-side gap analysis. No guesswork, no generic advice.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/get-started"
                className="inline-block font-bold text-sm px-5 py-2.5 rounded-lg"
                style={{ background: '#FF6A00', color: '#fff' }}
              >
                Request Your Dual-Channel Audit
              </Link>
              <a
                href="tel:+1-800-555-0199"
                className="inline-block text-sm px-5 py-2.5 rounded-lg"
                style={{ border: '1px solid rgba(255,106,0,0.4)', color: '#FF6A00' }}
              >
                Call: 1-800-555-0199
              </a>
            </div>
          </div>

          {/* Section 8: Cheat Sheet */}
          <section id="cheat-sheet" aria-labelledby="cheatsheet-heading" className="mb-16">
            <h2
              id="cheatsheet-heading"
              className="font-plus-jakarta text-3xl font-bold mb-6"
              style={{ color: '#FFFFFF' }}
            >
              Quick-Reference: The 2026 Channel Cheat Sheet
            </h2>

            <div
              className="ae-cheat-sheet rounded-xl p-6 mb-8"
              style={{ background: '#161923', border: '1px solid #1E2130' }}
            >
              <p
                className="font-plus-jakarta text-xs font-bold uppercase tracking-widest mb-6"
                style={{ color: '#FF6A00' }}
              >
                At a Glance: What You Need to Know
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="font-bold mb-3 text-sm" style={{ color: '#60A5FA' }}>
                    Google Maps / Local 3-Pack
                  </p>
                  <ul className="space-y-2 text-sm" style={{ color: '#9CA3AF' }}>
                    <li>42% of searchers click the local 3-pack</li>
                    <li>2.8% average conversion rate</li>
                    <li>126% more traffic for 3-pack vs positions 4 to 10</li>
                    <li>84% of discovery searches involve "near me" intent</li>
                    <li>Google&apos;s local recommendation share: down from 83% to 71%</li>
                    <li>AI Overviews now appear above the 3-pack in many queries</li>
                  </ul>
                </div>
                <div>
                  <p className="font-bold mb-3 text-sm" style={{ color: '#FF6A00' }}>
                    AI Search (ChatGPT / Perplexity / Gemini)
                  </p>
                  <ul className="space-y-2 text-sm" style={{ color: '#9CA3AF' }}>
                    <li>ChatGPT converts at 15.9%, Perplexity at 10.5%</li>
                    <li>AI referral visits up 357% year-over-year</li>
                    <li>Only 1.2% of businesses recommended by ChatGPT</li>
                    <li>Consumer adoption for local recs: 6% to 45% in one year</li>
                    <li>Visitors spend 9 to 10 minutes on referred sites</li>
                    <li>AI visibility is 3 to 30x harder than Maps to achieve</li>
                  </ul>
                </div>
              </div>
              <div
                className="mt-6 pt-6 text-sm"
                style={{ borderTop: '1px solid #1E2130', color: '#6B7280' }}
              >
                Bottom line: Maintain Maps, build AI. The overlap in optimization is high. The
                cost of ignoring either channel is increasing every quarter.
              </div>
            </div>
          </section>

          {/* Author Card */}
          <div
            className="ae-author-card rounded-xl p-6 mb-14"
            style={{ background: '#161923', border: '1px solid #1E2130' }}
          >
            <div className="flex items-start gap-4">
              <div
                className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-plus-jakarta font-bold text-lg"
                style={{ background: 'rgba(255,106,0,0.15)', color: '#FF6A00' }}
                aria-hidden="true"
              >
                AE
              </div>
              <div>
                <p className="font-bold text-sm mb-0.5" style={{ color: '#FFFFFF' }}>
                  The Answer Engine Team
                </p>
                <p className="text-xs mb-2" style={{ color: '#6B7280' }}>
                  AEO Specialists | Published March 25, 2026
                </p>
                <p className="text-sm leading-relaxed" style={{ color: '#9CA3AF' }}>
                  We help local businesses get found and recommended by AI search engines including
                  ChatGPT, Perplexity, Google AI, and Siri. Our research team tracks referral data,
                  conversion benchmarks, and platform changes weekly so our clients stay visible as
                  search evolves.
                </p>
              </div>
            </div>
          </div>

          {/* 3-Tier CTA Block */}
          <section
            aria-labelledby="cta-block-heading"
            className="rounded-2xl p-8 mb-14"
            style={{
              background: 'linear-gradient(135deg, #161923 0%, #0F1117 100%)',
              border: '1px solid rgba(255,106,0,0.3)',
            }}
          >
            <h2
              id="cta-block-heading"
              className="font-plus-jakarta text-2xl md:text-3xl font-bold mb-3 text-center"
              style={{ color: '#FFFFFF' }}
            >
              See Where Your Customers Are Actually Finding You
            </h2>
            <p className="text-center mb-8" style={{ color: '#9CA3AF' }}>
              Most businesses assume Google Maps. The data often says something different.
              A 20-minute audit reveals the truth and what to do about it.
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              {[
                {
                  tier: 'Free Audit',
                  description: 'We check your AI and Maps visibility and send you a plain-English report within 24 hours.',
                  cta: 'Get Free Audit',
                  href: '/get-started',
                  style: 'primary',
                },
                {
                  tier: 'Strategy Call',
                  description: 'Book a 20-minute call with our team. We walk through your gaps and tell you exactly what to fix first.',
                  cta: 'Book a Call',
                  href: '/get-started',
                  style: 'secondary',
                },
                {
                  tier: 'Done For You',
                  description: 'We handle your full AI and Maps visibility: content, citations, profiles, and ongoing monitoring.',
                  cta: 'See Pricing',
                  href: '/get-started',
                  style: 'secondary',
                },
              ].map((tier) => (
                <div
                  key={tier.tier}
                  className="rounded-xl p-5 flex flex-col gap-3"
                  style={{
                    background: tier.style === 'primary' ? 'rgba(255,106,0,0.12)' : '#0F1117',
                    border: tier.style === 'primary' ? '1px solid rgba(255,106,0,0.4)' : '1px solid #1E2130',
                  }}
                >
                  <p
                    className="font-plus-jakarta font-bold"
                    style={{ color: tier.style === 'primary' ? '#FF6A00' : '#FFFFFF' }}
                  >
                    {tier.tier}
                  </p>
                  <p className="text-sm flex-1 leading-relaxed" style={{ color: '#9CA3AF' }}>
                    {tier.description}
                  </p>
                  <Link
                    href={tier.href}
                    className="inline-block text-center font-bold text-sm py-2.5 px-4 rounded-lg transition-all"
                    style={
                      tier.style === 'primary'
                        ? { background: '#FF6A00', color: '#fff' }
                        : { border: '1px solid #1E2130', color: '#9CA3AF' }
                    }
                  >
                    {tier.cta}
                  </Link>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a href="tel:+1-800-555-0199" style={{ color: '#FF6A00' }}>
                Call: 1-800-555-0199
              </a>
              <span style={{ color: '#1E2130' }} aria-hidden="true">|</span>
              <a href="sms:+1-800-555-0199" style={{ color: '#9CA3AF' }}>
                Text Us
              </a>
              <span style={{ color: '#1E2130' }} aria-hidden="true">|</span>
              <a href="mailto:hello@theanswerengine.ai" style={{ color: '#9CA3AF' }}>
                hello@theanswerengine.ai
              </a>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" aria-labelledby="faq-heading" className="mb-14">
            <h2
              id="faq-heading"
              className="font-plus-jakarta text-3xl font-bold mb-8"
              style={{ color: '#FFFFFF' }}
            >
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {[
                {
                  q: 'Does AI search send more customers than Google Maps?',
                  a: 'Not yet in total volume, but AI search is closing the gap fast. Google Maps still drives the majority of local search clicks. However, AI referral traffic converts at 5 to 9x higher rates. Each customer who arrives from ChatGPT or Perplexity is worth significantly more in revenue potential than an average Maps visitor.',
                },
                {
                  q: 'How fast is AI search growing for local business discovery?',
                  a: 'Extremely fast. Consumer adoption of AI tools for local business recommendations jumped from 6% to 45% in a single year, a 650% increase. AI referral visits across the web grew 357% from June 2024 to June 2025. AI search traffic to SMB websites grew 527% year-over-year in early 2025.',
                },
                {
                  q: 'What percentage of local searches now use AI vs Google Maps?',
                  a: "Google Maps still handles the vast majority of local search volume. Brands appear in Google's local 3-pack 35.9% of the time, while ChatGPT recommends only 1.2% of locations and Perplexity recommends 7.4%. However, AI visibility is 3 to 30 times harder to achieve, meaning the few businesses visible in AI results face almost no competition.",
                },
                {
                  q: 'Which converts better: AI search traffic or Google Maps traffic?',
                  a: 'AI search traffic converts significantly better. ChatGPT-referred visitors convert at 15.9%, Perplexity at 10.5%, and Google AI Overview at approximately 3%. Google Maps and organic search convert at 1.76% to 2.8%. A customer arriving from ChatGPT has already completed a full research session and is arriving nearly decided.',
                },
                {
                  q: 'Should I stop optimizing Google Maps and focus on AI search instead?',
                  a: "No. Google Maps still drives the majority of local business traffic. 8 in 10 Americans search for a local business online weekly, and most still touch Maps or the 3-pack. The correct strategy is maintaining your Maps presence while building AI visibility in parallel. Both channels share much of the same optimization infrastructure.",
                },
                {
                  q: 'What data do AI platforms use to recommend local businesses?',
                  a: 'AI assistants pull from Google Business Profiles, Apple Maps, Yelp, online reviews, structured website content, and third-party directories. Your Google Maps optimization feeds AI search too. A well-maintained GBP with consistent NAP data, detailed descriptions, and strong review velocity increases your chances in both channels.',
                },
              ].map((item, i) => (
                <details
                  key={i}
                  className="rounded-xl group"
                  style={{ background: '#161923', border: '1px solid #1E2130' }}
                >
                  <summary
                    className="flex items-center justify-between p-5 cursor-pointer list-none font-bold text-sm"
                    style={{ color: '#FFFFFF' }}
                  >
                    <span>{item.q}</span>
                    <span
                      className="flex-shrink-0 ml-4 text-lg"
                      style={{ color: '#FF6A00' }}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </summary>
                  <div className="px-5 pb-5 text-sm leading-relaxed" style={{ color: '#9CA3AF' }}>
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* Final CTA */}
          <section
            aria-labelledby="final-cta-heading"
            className="ae-final-cta rounded-2xl p-10 text-center"
            style={{
              background: 'linear-gradient(135deg, rgba(255,106,0,0.15) 0%, rgba(255,106,0,0.05) 100%)',
              border: '1px solid rgba(255,106,0,0.35)',
            }}
          >
            <h2
              id="final-cta-heading"
              className="font-plus-jakarta text-2xl md:text-3xl font-extrabold mb-4"
              style={{ color: '#FFFFFF' }}
            >
              Your Competitors Are Already Building AI Visibility.
              <br />
              <span style={{ color: '#FF6A00' }}>Are You?</span>
            </h2>
            <p className="text-lg mb-8 max-w-xl mx-auto leading-relaxed" style={{ color: '#D1D5DB' }}>
              AI search adoption grew 650% in one year. The businesses investing in it today will
              own the recommendations your future customers see. The ones waiting will pay more for
              less visibility next year. The audit is free. The gap it reveals is real.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <Link
                href="/get-started"
                className="inline-block font-bold px-8 py-3.5 rounded-xl text-base transition-all"
                style={{ background: '#FF6A00', color: '#fff' }}
              >
                Get My Free AI Visibility Audit
              </Link>
              <a
                href="tel:+1-800-555-0199"
                className="inline-block font-bold px-8 py-3.5 rounded-xl text-base transition-all"
                style={{ border: '1px solid rgba(255,106,0,0.4)', color: '#FF6A00' }}
              >
                Call 1-800-555-0199
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-sm" style={{ color: '#6B7280' }}>
              <a href="sms:+1-800-555-0199" className="hover:text-white transition-colors">
                Text Us
              </a>
              <span aria-hidden="true">|</span>
              <a
                href="mailto:hello@theanswerengine.ai"
                className="hover:text-white transition-colors"
              >
                hello@theanswerengine.ai
              </a>
              <span aria-hidden="true">|</span>
              <span>No commitment required</span>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}
