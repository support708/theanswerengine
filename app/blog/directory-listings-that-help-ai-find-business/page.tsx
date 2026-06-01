import type { Metadata } from 'next'
import Link from 'next/link'

export const revalidate = 86400
export const dynamic = 'force-static'
export const dynamicParams = true

const title = 'Directory Listings That Actually Help AI Find Your Business'
const description =
  'Not all directory listings matter for AI search. Learn which directories ChatGPT, Perplexity, and Google AI actually cite, backed by 2025 research from Yext, Semrush, and First Page Sage.'
const slug = 'directory-listings-that-help-ai-find-business'
const publishDate = '2026-03-19'

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'directory listings AI search',
    'AI citations directories',
    'Yelp AI citations',
    'BBB AI search',
    'ChatGPT directory sources',
    'Perplexity directory citations',
    'NAP consistency AI',
    'business directories AI visibility',
    'local SEO AI search',
    'directory listings that help AI',
  ],
  openGraph: {
    title,
    description,
    type: 'article',
    publishedTime: publishDate,
    authors: ['https://theanswerengine.ai/about'],
    url: `https://www.theanswerengine.ai/blog/${slug}`,
    images: [
      {
        url: `https://www.theanswerengine.ai/blog/${slug}.svg`,
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
    images: [`https://www.theanswerengine.ai/blog/${slug}.svg`],
  },
  alternates: {
    canonical: `https://www.theanswerengine.ai/blog/${slug}`,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: title,
      description,
      image: `https://www.theanswerengine.ai/blog/${slug}.svg`,
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
        '@id': `https://www.theanswerengine.ai/blog/${slug}`,
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Which directory listings do AI platforms actually cite?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'According to Yext research analyzing 6.8 million AI citations, listings accounted for 42% of all citations across ChatGPT, Gemini, and Perplexity. The most-cited directories vary by platform. ChatGPT leans heavily on Bing-indexed listings (48.7% of its citations come from listings). Perplexity favors industry-specific directories like TripAdvisor for hospitality and Zocdoc for healthcare. Google AI Overviews pull from Google Business Profile and major review platforms like Yelp.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does having a Yelp profile help with AI search visibility?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Research from First Page Sage found that businesses with profiles on review platforms like Yelp, Trustpilot, and G2 have 3x higher chances of being cited by ChatGPT compared to businesses without those profiles. Yelp also recorded over 246,000 mentions in Google AI Overviews, making it one of the most frequently cited directory platforms in AI search.',
          },
        },
        {
          '@type': 'Question',
          name: 'How many directory listings does a local business need for AI visibility?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Quality matters more than quantity. Focus on the directories that AI platforms actually pull from: your Google Business Profile, Bing Places, Yelp, BBB (if applicable), and two to three industry-specific directories relevant to your field. The critical factor is that your name, address, and phone number (NAP) are identical across every listing. Inconsistent data lowers the confidence score AI systems assign to your business.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why does NAP consistency matter more for AI than for traditional SEO?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'AI platforms cross-reference your business information across multiple sources before generating a recommendation. When they find conflicting addresses, phone numbers, or business names, they assign a lower confidence score to your data. Traditional search engines use NAP as one of many ranking factors. AI systems treat it as a trust signal that determines whether they mention you at all.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do industry-specific directories matter for AI citations?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, significantly. Yext research found that Perplexity in particular leans into industry-specific directories. In healthcare, Zocdoc drives citations. In hospitality, TripAdvisor is the primary directory source. In legal services, Avvo and FindLaw carry weight. These specialized directories carry more authority for AI than general business listing sites because they provide structured, verified, industry-relevant data.',
          },
        },
        {
          '@type': 'Question',
          name: 'How often should I update my directory listings for AI search?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Review and update your directory listings at least quarterly. AI platforms favor recent, consistent data. Any time your business changes its address, phone number, hours, or services, update every listing within the same week. Stale or outdated listings create conflicting data that erodes AI confidence in your business information.',
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
              {/* Directory / listing grid pattern */}
              <rect x="60" y="60" width="160" height="40" rx="6" stroke="#F27D24" strokeWidth="1" fill="none" opacity="0.2" />
              <rect x="60" y="110" width="160" height="40" rx="6" stroke="#F27D24" strokeWidth="1" fill="none" opacity="0.15" />
              <rect x="60" y="160" width="160" height="40" rx="6" stroke="#F27D24" strokeWidth="1" fill="none" opacity="0.2" />
              <rect x="60" y="210" width="160" height="40" rx="6" stroke="#F27D24" strokeWidth="1" fill="none" opacity="0.15" />
              <rect x="60" y="260" width="160" height="40" rx="6" stroke="#F27D24" strokeWidth="1" fill="none" opacity="0.2" />
              {/* Checkmarks in listing rows */}
              <path d="M80 80 L88 88 L100 72" stroke="#F27D24" strokeWidth="1.5" fill="none" opacity="0.3" />
              <path d="M80 180 L88 188 L100 172" stroke="#F27D24" strokeWidth="1.5" fill="none" opacity="0.3" />
              <path d="M80 280 L88 288 L100 272" stroke="#F27D24" strokeWidth="1.5" fill="none" opacity="0.3" />
              {/* Connection lines from listings to AI node */}
              <line x1="220" y1="80" x2="380" y2="180" stroke="#F27D24" strokeWidth="0.8" opacity="0.15" />
              <line x1="220" y1="180" x2="380" y2="180" stroke="#F27D24" strokeWidth="0.8" opacity="0.2" />
              <line x1="220" y1="280" x2="380" y2="180" stroke="#F27D24" strokeWidth="0.8" opacity="0.15" />
              {/* AI brain node */}
              <circle cx="420" cy="180" r="40" stroke="#F27D24" strokeWidth="1.2" fill="none" opacity="0.2" />
              <circle cx="420" cy="180" r="20" stroke="#F27D24" strokeWidth="0.8" fill="none" opacity="0.15" />
              <circle cx="420" cy="180" r="4" fill="#F27D24" opacity="0.3" />
              {/* Output lines from AI to results */}
              <line x1="460" y1="170" x2="580" y2="120" stroke="#F27D24" strokeWidth="0.8" opacity="0.15" />
              <line x1="460" y1="180" x2="580" y2="180" stroke="#F27D24" strokeWidth="0.8" opacity="0.2" />
              <line x1="460" y1="190" x2="580" y2="240" stroke="#F27D24" strokeWidth="0.8" opacity="0.15" />
              {/* Result cards */}
              <rect x="580" y="100" width="140" height="40" rx="6" stroke="#F27D24" strokeWidth="1" fill="none" opacity="0.2" />
              <rect x="580" y="160" width="140" height="40" rx="6" stroke="#F27D24" strokeWidth="1" fill="none" opacity="0.25" />
              <rect x="580" y="220" width="140" height="40" rx="6" stroke="#F27D24" strokeWidth="1" fill="none" opacity="0.2" />
              {/* Dots grid */}
              {[0, 1, 2, 3, 4, 5, 6, 7].map((i) =>
                [0, 1, 2, 3, 4].map((j) => (
                  <circle
                    key={`${i}-${j}`}
                    cx={80 + i * 90}
                    cy={60 + j * 80}
                    r="1.5"
                    fill="#F27D24"
                    opacity="0.08"
                  />
                ))
              )}
            </svg>
            <div className="relative px-8 py-16 sm:px-12 sm:py-20">
              <p className="inline-block text-sm font-medium text-orange-400 mb-4 border border-orange-500/30 rounded-full px-4 py-1">
                AEO Education
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 font-plus-jakarta">
                Directory Listings That Actually Help AI Find Your Business
              </h1>
            {/* Championship Cover Image */}
            <div className="ae-article-hero w-full rounded-xl overflow-hidden my-8" style={{ maxHeight: 440 }}>
              <img
                src="/blog/directory-listings-that-help-ai-find-business.webp"
                alt="directory listings that help ai find business"
                style={{ width: '100%', height: 440, objectFit: 'cover', display: 'block' }}
                loading="eager"
              />
            </div>
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span>March 19, 2026</span>
                <span>-</span>
                <span>14 min read</span>
                <span>-</span>
                <span>Justin Borges</span>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="not-prose">
            <div className="ae-stats-grid">
              <div className="ae-stat-card">
                <div className="ae-stat-emoji">📂</div>
                <div className="ae-stat-value ae-accent">42%</div>
                <div className="ae-stat-label">AI CITATIONS FROM LISTINGS</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-emoji">🔗</div>
                <div className="ae-stat-value ae-accent">6.8M</div>
                <div className="ae-stat-label">CITATIONS ANALYZED</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-emoji">📈</div>
                <div className="ae-stat-value ae-accent">3x</div>
                <div className="ae-stat-label">CITATION LIFT W/ PROFILES</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-emoji">🎯</div>
                <div className="ae-stat-value ae-accent">86%</div>
                <div className="ae-stat-label">FROM BRAND-MANAGED SOURCES</div>
              </div>
            </div>
          </div>

          {/* Article Body */}
          <article className="prose prose-invert prose-lg max-w-none prose-headings:font-plus-jakarta prose-headings:text-white prose-p:text-gray-300 prose-a:text-[#F27D24] prose-a:no-underline hover:prose-a:underline prose-strong:text-white">

            {/* Intro */}
            <p className="text-xl text-gray-300 leading-relaxed mb-10">
              Most businesses have directory listings scattered across the web. A
              Yelp page here, a BBB profile there, maybe a dusty listing on some
              industry site that nobody has touched in three years. The assumption
              has always been that more listings equals better visibility. But AI
              search has changed the equation. ChatGPT, Perplexity, and Google AI
              Overviews do not treat all directories equally. They pull from
              specific sources, favor certain platforms, and ignore the rest. A
              2025 study by Yext analyzing 6.8 million AI citations found that
              listings accounted for 42% of all citations across ChatGPT, Gemini,
              and Perplexity. That puts directory listings on par with first-party
              websites (44%) as a source of AI-generated recommendations. The
              question is no longer whether directories matter for AI. The question
              is which ones actually count.
             Markets fill fast. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Check your territory availability.</a></p>

            {/* Callout: Listings Drive Nearly Half */}
            <div className="not-prose">
              <div className="ae-callout ae-callout-warning">
                <div className="ae-callout-title">Listings Drive Nearly Half of AI Citations</div>
                <p>
                  Yext analyzed 6.8 million AI citations across 1.6 million
                  responses from ChatGPT, Gemini, and Perplexity (July to August
                  2025). First-party websites generated 44% of citations, while
                  listings generated 42%. Reviews and social media accounted for
                  just 8%. Your directory presence is nearly as important as your
                  own website for AI visibility.
                 Your first step: <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free AERO Blind Spot Scan.</a></p>
              </div>
            </div>

            {/* CTA Inline 1 */}
            <div className="not-prose">
              <div className="ae-cta-inline">
                <p>Not sure which directories are helping or hurting your AI visibility? <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Claim your free call</a> before your market fills.</p>
                <Link href="/blindspot">Get Your Free Blind Spot Report →</Link>
              </div>
            </div>

            {/* Section: How AI Platforms Use Directory Data */}
            <div className="not-prose"><span className="ae-section-label">AI + Directories</span></div>
            <h2>How AI Platforms Actually Use Directory Data</h2>
            <p>
              Traditional search engines crawl directories and use them as
              ranking signals. AI platforms do something different. They
              cross-reference your business information across multiple sources,
              verify consistency, and assign confidence scores before generating
              a recommendation. When an AI encounters your business name, address,
              and phone number (NAP) on five different directories and all five
              match, it gains confidence that the information is accurate. When
              two of those five show an old phone number, the AI either picks the
              most common version or avoids mentioning your contact details
              entirely.
             Reach out: <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>
            <p>
              This cross-referencing behavior makes{' '}
              <Link href="/blog/does-schema-markup-help-ai-search">
                structured data and schema markup
              </Link>{' '}
              even more valuable. AI systems treat structured directory listings
              as higher-quality signals because the data is organized in a
              machine-readable format. A well-structured Yelp profile with
              complete business hours, service categories, and verified contact
              information carries more weight than a plain-text mention on a
              generic business directory.
             Call us at <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> today.</p>
            <p>
              Each AI platform also has distinct preferences for where it pulls
              directory data. Understanding these differences is the key to
              building a listing strategy that works across all of them.
             <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Lock in your exclusive territory now.</a></p>

            {/* Quote */}
            <div className="not-prose">
              <div className="ae-quote">
                <p>AI does not care how many directories list you. It cares whether the directories it trusts all tell the same story about your business. <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Get your free AI readiness report.</a></p>
              </div>
            </div>

            {/* CTA Inline 2 */}
            <div className="not-prose">
              <div className="ae-cta-inline">
                <p>Want to see exactly what AI platforms say about you right now? Ready to act? <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a free strategy session.</a></p>
                <Link href="/blindspot">Get Your Free Blind Spot Report →</Link>
              </div>
            </div>

            {/* Section: What Each AI Platform Cites */}
            <div className="not-prose"><span className="ae-section-label">Platform Breakdown</span></div>
            <h2>What Each AI Platform Cites (and Why It Matters)</h2>
            <p>
              The Yext study revealed that AI models show distinct preferences
              when pulling from directory sources. These are not minor
              differences. Each platform has a meaningfully different approach
              to directory data.
             Drop us a line at <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>

            {/* Bar Group: Platform Listing Reliance */}
            <div className="not-prose">
              <div className="ae-bar-group">
                <div className="ae-bar-group-title">Percentage of Citations from Directory Listings</div>
                <div className="ae-bar-item">
                  <div className="ae-bar-label">ChatGPT</div>
                  <div className="ae-bar-track"><div className="ae-bar-fill" style={{ width: '49%' }}></div></div>
                  <div className="ae-bar-value">48.7%</div>
                </div>
                <div className="ae-bar-item">
                  <div className="ae-bar-label">Gemini</div>
                  <div className="ae-bar-track"><div className="ae-bar-fill" style={{ width: '38%' }}></div></div>
                  <div className="ae-bar-value">~38%</div>
                </div>
                <div className="ae-bar-item">
                  <div className="ae-bar-label">Perplexity</div>
                  <div className="ae-bar-track"><div className="ae-bar-fill" style={{ width: '35%' }}></div></div>
                  <div className="ae-bar-value">~35%</div>
                </div>
                <div className="ae-bar-item">
                  <div className="ae-bar-label">Google AI Overviews</div>
                  <div className="ae-bar-track"><div className="ae-bar-fill" style={{ width: '30%' }}></div></div>
                  <div className="ae-bar-value">~30%</div>
                </div>
              </div>
            </div>

            <h3>ChatGPT (OpenAI)</h3>
            <p>
              ChatGPT leans heavily on listings, with 48.7% of its citations
              coming from directory and listing sources according to the Yext
              study. This makes it the most listing-dependent of the three major
              AI platforms. ChatGPT draws from Bing&apos;s data ecosystem, which
              means your{' '}
              <Link href="/blog/bing-places-chatgpt-connection">
                Bing Places profile
              </Link>{' '}
              is particularly important. Businesses with profiles on review
              platforms like Yelp, Trustpilot, G2, and Capterra have 3x higher
              chances of being cited by ChatGPT compared to businesses without
              those profiles, according to First Page Sage research based on
              36,127 buying-intent queries.
             Speak to an AEO specialist: <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.</p>

            <h3>Google AI Overviews</h3>
            <p>
              Google AI Overviews favor first-party websites (52.1% of Gemini
              citations come from websites), but directories still play a
              significant supporting role. Yelp recorded over 246,000 mentions in
              Google AI Overviews, placing it among the most frequently cited
              directory platforms. Google Business Profile data feeds directly
              into AI Overviews, making it the single most important listing for
              any local business targeting Google&apos;s AI features. If you have
              not verified whether{' '}
              <Link href="/blog/is-your-business-ready-for-google-ai-mode">
                your business is ready for Google AI Mode
              </Link>, now is the time.
             One client per city. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">See if your market is available.</a></p>

            <h3>Perplexity</h3>
            <p>
              Perplexity takes a different approach. It diversifies across
              sources and leans into industry-specific directories more than its
              competitors. In healthcare, Zocdoc drives citations. In
              hospitality, TripAdvisor is the primary source, with over 239,000
              citations in the Yext study. Perplexity also favors MapQuest for
              location data, pulling over 364,000 citations from that source
              alone. The takeaway: if Perplexity matters to your audience, your
              industry-specific directory presence is what moves the needle.
             Check where you stand: <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free Blind Spot Scan.</a></p>

            {/* Callout: 3x More Likely */}
            <div className="not-prose">
              <div className="ae-callout ae-callout-success">
                <div className="ae-callout-title">3x More Likely to Be Cited</div>
                <p>
                  First Page Sage analyzed 36,127 buying-intent queries on ChatGPT.
                  Businesses with profiles on platforms like Yelp, Trustpilot, G2,
                  and Capterra had three times higher chances of being chosen as a
                  source compared to businesses without those profiles. Directory
                  presence is not optional for AI visibility.
                 <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Schedule a free 30-min call.</a></p>
              </div>
            </div>

            {/* CTA Inline 3 */}
            <div className="not-prose">
              <div className="ae-cta-inline">
                <p>Wondering if ChatGPT is citing your competitors instead of you? Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> for a custom strategy.</p>
                <Link href="/blindspot">Get Your Free Blind Spot Report →</Link>
              </div>
            </div>

            {/* Section: Directories That Move the Needle */}
            <div className="not-prose"><span className="ae-section-label">Directory Tiers</span></div>
            <h2>The Directories That Actually Move the Needle</h2>
            <p>
              Based on the citation research from Yext, First Page Sage, and
              Semrush, here are the directory categories that AI platforms
              consistently pull from, ranked by impact.
             Questions? Call <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.</p>

            {/* Decision Matrix: Directory Tiers */}
            <div className="not-prose">
              <table className="ae-decision-matrix">
                <thead>
                  <tr>
                    <th>Directory</th>
                    <th>Tier</th>
                    <th>Primary AI Platform</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Google Business Profile</td>
                    <td>Tier 1</td>
                    <td>Google AI Overviews</td>
                    <td>Claim + optimize immediately</td>
                  </tr>
                  <tr>
                    <td>Bing Places</td>
                    <td>Tier 1</td>
                    <td>ChatGPT</td>
                    <td>Claim + optimize immediately</td>
                  </tr>
                  <tr>
                    <td>Yelp</td>
                    <td>Tier 1</td>
                    <td>All platforms</td>
                    <td>Claim + optimize immediately</td>
                  </tr>
                  <tr>
                    <td>Apple Business Connect</td>
                    <td>Tier 1</td>
                    <td>Siri / Apple AI</td>
                    <td>Claim + optimize immediately</td>
                  </tr>
                  <tr>
                    <td>BBB</td>
                    <td>Tier 2</td>
                    <td>All (trust signal)</td>
                    <td>Claim if service business</td>
                  </tr>
                  <tr>
                    <td>Industry directories</td>
                    <td>Tier 2</td>
                    <td>Perplexity</td>
                    <td>Top 2-3 for your vertical</td>
                  </tr>
                  <tr>
                    <td>Trustpilot / G2</td>
                    <td>Tier 2</td>
                    <td>ChatGPT</td>
                    <td>Claim if e-commerce or SaaS</td>
                  </tr>
                  <tr>
                    <td>Data aggregators</td>
                    <td>Tier 3</td>
                    <td>Indirect (feeds others)</td>
                    <td>Verify NAP accuracy</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>Tier 1: Non-Negotiable Listings</h3>
            <ul>
              <li><strong>Google Business Profile.</strong> The foundation of local AI visibility. Google AI Overviews pull directly from GBP data. Complete every field, add photos, respond to reviews, and keep hours updated.</li>
              <li><strong>Bing Places.</strong> ChatGPT relies on Bing&apos;s data ecosystem. If you are not on Bing Places, you are largely invisible to ChatGPT for local queries. Claim and verify your listing.</li>
              <li><strong>Yelp.</strong> With 246,000+ mentions in Google AI Overviews and strong citation presence across all three major AI platforms, Yelp remains essential. Maintain complete business details and respond to reviews.</li>
              <li><strong>Apple Business Connect.</strong> Siri and Apple&apos;s AI features pull from Apple Maps data. As Apple integrates more AI into its products, this listing will only grow in importance.</li>
            </ul>

            {/* CTA Inline 4 */}
            <div className="not-prose">
              <div className="ae-cta-inline">
                <p>Have questions about which directories matter for your industry? <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Secure your territory before a competitor does.</a></p>
                <a href="tel:+12134442229">Call us: (213) 444-2229 →</a>
              </div>
            </div>

            <h3>Tier 2: High-Impact Supporting Listings</h3>
            <ul>
              <li><strong>Better Business Bureau (BBB).</strong> AI platforms use BBB as a trust signal, especially for service businesses. An accredited BBB profile with an A+ rating carries weight in AI recommendations for contractors, financial services, and professional services.</li>
              <li><strong>Industry-specific directories.</strong> These vary by vertical: Zocdoc and Healthgrades for healthcare, TripAdvisor for hospitality, Avvo for legal, Houzz for home services, Clutch and G2 for B2B software. Perplexity in particular favors these specialized sources.</li>
              <li><strong>Trustpilot and G2.</strong> Review-heavy platforms that AI systems reference when evaluating business credibility. Particularly important for e-commerce and SaaS businesses.</li>
            </ul>

            <h3>Tier 3: Helpful but Not Critical</h3>
            <ul>
              <li><strong>Chamber of Commerce listings.</strong> Provide local authority signals and are sometimes cited for location-specific queries.</li>
              <li><strong>Data aggregators (Foursquare, Data Axle).</strong> Feed information to many smaller directories. Ensuring accuracy here prevents errors from cascading across dozens of listings.</li>
              <li><strong>Facebook Business page.</strong> While not a directory in the traditional sense, AI platforms do reference Facebook business data, especially for hours, reviews, and contact information.</li>
            </ul>

            {/* Industry Directory Cheat Sheet */}
            <div className="not-prose">
              <div className="ae-cheat-sheet">
                <div className="ae-cheat-sheet-title">Industry Directory Cheat Sheet</div>
                <table className="ae-comparison-table">
                  <thead>
                    <tr>
                      <th>Industry</th>
                      <th>Must-Have Directories</th>
                      <th>Primary AI Beneficiary</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Healthcare</td>
                      <td>Zocdoc, Healthgrades, WebMD</td>
                      <td>Perplexity, Google AI</td>
                    </tr>
                    <tr>
                      <td>Hospitality</td>
                      <td>TripAdvisor, OpenTable, Booking.com</td>
                      <td>Perplexity (239K+ citations)</td>
                    </tr>
                    <tr>
                      <td>Legal</td>
                      <td>Avvo, FindLaw, Martindale</td>
                      <td>Perplexity, ChatGPT</td>
                    </tr>
                    <tr>
                      <td>Home Services</td>
                      <td>Houzz, Angi, HomeAdvisor</td>
                      <td>Google AI, ChatGPT</td>
                    </tr>
                    <tr>
                      <td>B2B / SaaS</td>
                      <td>G2, Capterra, Clutch</td>
                      <td>ChatGPT (3x citation lift)</td>
                    </tr>
                    <tr>
                      <td>Real Estate</td>
                      <td>Zillow, Realtor.com, Redfin</td>
                      <td>Google AI, Perplexity</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* CTA Inline 5 */}
            <div className="not-prose">
              <div className="ae-cta-inline">
                <p>Not sure which industry directories AI actually pulls from for your business? <a href="https://theanswerengine.ai/blindspot" className="cta-inline">See your AI visibility score — free.</a></p>
                <Link href="/blindspot">Get Your Free Blind Spot Report →</Link>
              </div>
            </div>

            {/* Section: 86% Brand-Managed */}
            <div className="not-prose"><span className="ae-section-label">You Own This</span></div>
            <h2>Why 86% of AI Citations Come from Sources You Already Control</h2>
            <p>
              One of the most important findings from the Yext study is that 86%
              of AI citations come from brand-managed sources. That includes your
              website, your directory listings, and your social profiles. Only 2%
              of citations came from forums like Reddit once location context and
              query intent were applied.
             <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book your free consultation here.</a></p>

            {/* Bar Group: Citation Sources */}
            <div className="not-prose">
              <div className="ae-bar-group">
                <div className="ae-bar-group-title">Where AI Citations Actually Come From</div>
                <div className="ae-bar-item">
                  <div className="ae-bar-label">First-Party Websites</div>
                  <div className="ae-bar-track"><div className="ae-bar-fill" style={{ width: '44%' }}></div></div>
                  <div className="ae-bar-value">44%</div>
                </div>
                <div className="ae-bar-item">
                  <div className="ae-bar-label">Directory Listings</div>
                  <div className="ae-bar-track"><div className="ae-bar-fill" style={{ width: '42%' }}></div></div>
                  <div className="ae-bar-value">42%</div>
                </div>
                <div className="ae-bar-item">
                  <div className="ae-bar-label">Reviews + Social</div>
                  <div className="ae-bar-track"><div className="ae-bar-fill" style={{ width: '8%' }}></div></div>
                  <div className="ae-bar-value">8%</div>
                </div>
                <div className="ae-bar-item">
                  <div className="ae-bar-label">Forums (Reddit, etc.)</div>
                  <div className="ae-bar-track"><div className="ae-bar-fill" style={{ width: '2%' }}></div></div>
                  <div className="ae-bar-value">2%</div>
                </div>
                <div className="ae-bar-item">
                  <div className="ae-bar-label">Other Sources</div>
                  <div className="ae-bar-track"><div className="ae-bar-fill" style={{ width: '4%' }}></div></div>
                  <div className="ae-bar-value">4%</div>
                </div>
              </div>
            </div>

            <p>
              This is good news. It means AI visibility is not about chasing
              viral Reddit threads or hoping someone writes about you on a forum.
              It is about systematically managing the sources you already own:
              your website content, your directory listings, and your review
              profiles. The businesses that win in AI search are the ones that
              treat these assets as living documents, not set-and-forget
              checkboxes.
             Contact us at <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>

            {/* Callout: You Control This */}
            <div className="not-prose">
              <div className="ae-callout ae-callout-info">
                <div className="ae-callout-title">You Control 86% of Your AI Visibility</div>
                <p>
                  Unlike traditional SEO where backlinks from external sites drive rankings,
                  AI citations overwhelmingly come from sources you already manage. Your website
                  and your directory listings together account for 86% of all AI citations.
                  This means improvements are entirely within your control.
                 Reach us at <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.</p>
              </div>
            </div>

            {/* CTA Inline 6 */}
            <div className="not-prose">
              <div className="ae-cta-inline">
                <p>Want to know exactly which brand-managed sources AI is pulling from for your business? We work with one business per market. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Check if yours is still open.</a></p>
                <Link href="/blindspot">Get Your Free Blind Spot Report →</Link>
              </div>
            </div>

            {/* Section: NAP Consistency */}
            <div className="not-prose"><span className="ae-section-label">NAP Consistency</span></div>
            <h2>NAP Consistency: The Trust Signal AI Cannot Ignore</h2>
            <p>
              Your business name, address, and phone number need to be identical
              across every listing. Not similar. Identical. AI systems
              cross-reference this data to verify accuracy. When they find
              conflicts, they lower their confidence in your information and may
              exclude you from recommendations entirely.
             Find your gaps with a <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free AERO scan.</a></p>

            {/* Pros and Cons: NAP */}
            <div className="not-prose">
              <div className="ae-pros-cons">
                <div className="ae-pros-box">
                  <div className="ae-pros-title">Consistent NAP Signals</div>
                  <ul>
                    <li>AI gains high confidence in your data</li>
                    <li>Contact info appears in AI responses</li>
                    <li>Business gets recommended with full details</li>
                    <li>Cross-platform trust score increases</li>
                  </ul>
                </div>
                <div className="ae-cons-box">
                  <div className="ae-cons-title">Inconsistent NAP Signals</div>
                  <ul>
                    <li>AI cannot verify which info is correct</li>
                    <li>Contact details omitted from responses</li>
                    <li>Business may not appear at all</li>
                    <li>Competitors with clean data get cited instead</li>
                  </ul>
                </div>
              </div>
            </div>

            <p>
              Common consistency mistakes that hurt AI visibility:
             <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Schedule a free call</a> to see where you stand.</p>
            <ul>
              <li><strong>Abbreviation mismatches.</strong> &quot;St&quot; versus &quot;Street,&quot; &quot;Ave&quot; versus &quot;Avenue.&quot; Pick one format and use it everywhere.</li>
              <li><strong>Suite number variations.</strong> &quot;Suite 200,&quot; &quot;Ste 200,&quot; &quot;#200.&quot; These look like different locations to an AI system.</li>
              <li><strong>Old phone numbers.</strong> If you changed your number two years ago, every listing needs to reflect the current one. A single outdated listing can create doubt about which number is correct.</li>
              <li><strong>Business name differences.</strong> &quot;Joe&apos;s Plumbing,&quot; &quot;Joe&apos;s Plumbing LLC,&quot; &quot;Joe&apos;s Plumbing &amp; Heating.&quot; AI sees these as potentially different businesses.</li>
            </ul>
            <p>
              Create a master document with your exact NAP information and use it
              as the single source of truth for every listing. This is the
              simplest, highest-impact action you can take to improve your AI
              directory presence. For a deeper look at how AI handles your contact
              data, read our guide on{' '}
              <Link href="/blog/why-chatgpt-isnt-recommending-your-business">
                why ChatGPT is not recommending your business
              </Link>.
             Send your questions to <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>

            {/* CTA Inline 7 */}
            <div className="not-prose">
              <div className="ae-cta-inline">
                <p>NAP issues hiding in your listings? We will find them. Call <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> for a free consultation.</p>
                <Link href="/blindspot">Get Your Free Blind Spot Report →</Link>
              </div>
            </div>

            {/* Callout: 11% Overlap */}
            <div className="not-prose">
              <div className="ae-callout ae-callout-warning">
                <div className="ae-callout-title">Only 11% Overlap Between Platforms</div>
                <p>
                  A Semrush study of over 150,000 LLM citations found that only 11%
                  of domains are cited by both ChatGPT and Perplexity. These
                  platforms use significantly different source selection strategies.
                  Optimizing for one AI platform does not guarantee visibility on
                  the others. You need directory coverage that spans multiple
                  ecosystems.
                 <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Claim your market territory — one client per area.</a></p>
              </div>
            </div>

            {/* Section: Audit Your Directory Presence */}
            <div className="not-prose"><span className="ae-section-label">Audit Process</span></div>
            <h2>How to Audit Your Current Directory Presence</h2>
            <p>
              Before adding new listings, audit what you already have. Many
              businesses have outdated or incomplete profiles on directories they
              signed up for years ago. Here is a practical audit process:
             <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Run your free AI Blind Spot Scan.</a></p>

            {/* Timeline: Audit Steps */}
            <div className="not-prose">
              <div className="ae-timeline">
                <div className="ae-timeline-item">
                  <strong>Step 1: Search Tier 1 Directories</strong>
                  <p>Google Business Profile, Bing Places, Yelp, Apple Business Connect. Verify that each listing exists, is claimed, and has complete information. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a free 30-minute strategy call.</a></p>
                </div>
                <div className="ae-timeline-item">
                  <strong>Step 2: Check NAP Consistency</strong>
                  <p>Compare your name, address, and phone number across every listing. Flag any discrepancies, no matter how small. Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> to get started.</p>
                </div>
                <div className="ae-timeline-item">
                  <strong>Step 3: Review Completeness</strong>
                  <p>Check whether each listing has business hours, service descriptions, photos, categories, and a link to your website. Incomplete listings get less weight from AI systems. <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a></p>
                </div>
                <div className="ae-timeline-item">
                  <strong>Step 4: Test Your AI Visibility</strong>
                  <p>Ask ChatGPT, Perplexity, and Google AI a question that should surface your business. Note whether you appear and what information the AI shares. Our{' '}
                    <Link href="/blog/5-minute-ai-visibility-audit">
                      5-minute AI visibility audit
                    </Link>{' '}
                    walks you through this step by step.</p>
                </div>
                <div className="ae-timeline-item">
                  <strong>Step 5: Identify Industry Gaps</strong>
                  <p>Look up the top directories in your vertical. Are you listed? Is the information current?</p>
                </div>
              </div>
            </div>

            {/* CTA Inline 8 */}
            <div className="not-prose">
              <div className="ae-cta-inline">
                <p>Skip the manual audit. We check all of this for you, free.</p>
                <Link href="/blindspot">Get Your Free Blind Spot Report →</Link>
              </div>
            </div>

            {/* Section: Listing Optimization Checklist */}
            <div className="not-prose"><span className="ae-section-label">Optimization Checklist</span></div>
            <h2>The Listing Optimization Checklist</h2>
            <p>
              Once your listings are claimed and consistent, optimize them for
              maximum AI visibility. Each listing should include:
            </p>

            {/* Cheat Sheet: Optimization Checklist */}
            <div className="not-prose">
              <div className="ae-cheat-sheet">
                <div className="ae-cheat-sheet-title">Listing Optimization Checklist</div>
                <ul>
                  <li><strong>Complete and accurate NAP data</strong> identical across every platform, matching your website contact page exactly</li>
                  <li><strong>Detailed service descriptions</strong> using natural language that matches how customers actually search</li>
                  <li><strong>Business categories</strong> selected on each platform so AI systems can match you to user queries</li>
                  <li><strong>Current business hours</strong> including holiday hours (AI frequently cites hours for &quot;is [business] open now?&quot; queries)</li>
                  <li><strong>High-quality photos</strong> particularly on Yelp and Google Business Profile</li>
                  <li><strong>Review responses</strong> on every platform to signal active engagement</li>
                  <li><strong>Website link</strong> on every listing, reinforcing the connection between your directory presence and your main site</li>
                </ul>
              </div>
            </div>

            {/* CTA Inline 9 */}
            <div className="not-prose">
              <div className="ae-cta-inline">
                <p>Want a personalized checklist for your business? Talk to our team.</p>
                <a href="mailto:support@theanswerengine.ai">Email us: support@theanswerengine.ai →</a>
              </div>
            </div>

            {/* Section: What to Skip */}
            <div className="not-prose"><span className="ae-section-label">Skip These</span></div>
            <h2>What to Skip: Directories That Do Not Help</h2>
            <p>
              Not every directory is worth your time. Some common time-wasters:
            </p>

            {/* Pros/Cons: Worth It vs Not */}
            <div className="not-prose">
              <div className="ae-pros-cons">
                <div className="ae-pros-box">
                  <div className="ae-pros-title">Directories Worth Your Time</div>
                  <ul>
                    <li>Directories AI platforms actually cite</li>
                    <li>Platforms with structured data support</li>
                    <li>Review sites with organic traffic</li>
                    <li>Industry-specific verified directories</li>
                  </ul>
                </div>
                <div className="ae-cons-box">
                  <div className="ae-cons-title">Directories to Avoid</div>
                  <ul>
                    <li>Pay-to-play with no organic visibility</li>
                    <li>Spam directories with no verification</li>
                    <li>Directories with no structured data</li>
                    <li>Duplicate listings on the same platform</li>
                  </ul>
                </div>
              </div>
            </div>

            <p>
              Pay-to-play directories with no organic visibility add no AI value. Spam
              directories that accept any submission without verification can actually
              hurt your credibility. Directories with no structured data make it harder
              for AI to extract and verify your information. And duplicate listings on
              the same platform create confusion for AI and lower confidence in both.
            </p>

            {/* CTA Inline 10 */}
            <div className="not-prose">
              <div className="ae-cta-inline">
                <p>Not sure if a directory is helping or hurting? We will tell you.</p>
                <Link href="/blindspot">Get Your Free Blind Spot Report →</Link>
              </div>
            </div>

            {/* Section: DIY vs Professional */}
            <div className="not-prose"><span className="ae-section-label">DIY vs. Pro</span></div>
            <h2>DIY Directory Audit vs. Professional Analysis</h2>
            <p>
              A manual directory audit gives you a solid foundation. You can claim
              listings, fix NAP issues, and verify completeness on your own. But
              there are limits to what a manual check can catch.
            </p>

            {/* Comparison Table */}
            <div className="not-prose">
              <table className="ae-comparison-table">
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th>DIY Audit</th>
                    <th>Professional Analysis</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Directories checked</td>
                    <td>Tier 1 (4 platforms)</td>
                    <td>All tiers + industry-specific</td>
                  </tr>
                  <tr>
                    <td>NAP consistency scan</td>
                    <td>Manual comparison</td>
                    <td>Automated cross-reference</td>
                  </tr>
                  <tr>
                    <td>AI visibility testing</td>
                    <td>3 prompts</td>
                    <td>Dozens of prompt variations</td>
                  </tr>
                  <tr>
                    <td>Competitor directory mapping</td>
                    <td>No</td>
                    <td>Yes, full landscape</td>
                  </tr>
                  <tr>
                    <td>Structured data audit</td>
                    <td>No</td>
                    <td>Yes, with recommendations</td>
                  </tr>
                  <tr>
                    <td>Prioritized action plan</td>
                    <td>Generic</td>
                    <td>Business-specific, ranked by impact</td>
                  </tr>
                  <tr>
                    <td>Cost</td>
                    <td>Free (your time)</td>
                    <td>Free (Blind Spot Report)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Quote */}
            <div className="not-prose">
              <div className="ae-quote">
                <p>Think of a manual directory audit as checking the oil in your car. It tells you if something is obviously wrong. A professional analysis is the full diagnostic scan that catches the problems you cannot see from the outside.</p>
              </div>
            </div>

            {/* CTA Inline 11 */}
            <div className="not-prose">
              <div className="ae-cta-inline">
                <p>Ready for the full diagnostic? It is free.</p>
                <Link href="/blindspot">Get Your Free Blind Spot Report →</Link>
              </div>
            </div>

            {/* Section: Building a Strategy */}
            <div className="not-prose"><span className="ae-section-label">90-Day Plan</span></div>
            <h2>Building a Directory Strategy That Compounds Over Time</h2>
            <p>
              The best directory strategy is not a one-time project. It is an
              ongoing process that builds authority over time.
            </p>

            {/* Timeline: 90-Day Plan */}
            <div className="not-prose">
              <div className="ae-timeline">
                <div className="ae-timeline-item">
                  <strong>Month 1: Claim and Optimize Tier 1</strong>
                  <p>Claim and optimize all Tier 1 listings. Fix any NAP inconsistencies. This alone can shift your AI visibility significantly.</p>
                </div>
                <div className="ae-timeline-item">
                  <strong>Month 2: Add Tier 2 Listings</strong>
                  <p>Claim your BBB profile, sign up for the top two or three industry-specific directories, and ensure Trustpilot or G2 profiles are complete (if relevant to your industry).</p>
                </div>
                <div className="ae-timeline-item">
                  <strong>Month 3+: Monitor and Maintain</strong>
                  <p>Set a quarterly reminder to review all listings for accuracy. Respond to new reviews. Update photos and service descriptions as your business evolves. Track your{' '}
                    <Link href="/blog/how-to-track-ai-search-visibility">
                      AI search visibility
                    </Link>{' '}
                    to measure progress.</p>
                </div>
              </div>
            </div>

            <p>
              This compounding effect matters because AI platforms reward
              consistency and freshness. A business with active, accurate listings
              across multiple directories signals to AI systems that it is
              established, trustworthy, and currently operating. That signal
              translates directly into more recommendations.
            </p>

            {/* Callout: Compounding Effect */}
            <div className="not-prose">
              <div className="ae-callout ae-callout-success">
                <div className="ae-callout-title">The Compounding Effect</div>
                <p>
                  Each accurate, complete listing reinforces the others. When AI sees consistent
                  data across Google Business Profile, Bing Places, Yelp, and your industry directories,
                  the confidence score for your business increases exponentially. This is why businesses
                  that maintain clean listings across multiple platforms see disproportionate gains in
                  AI recommendations over time.
                </p>
              </div>
            </div>

            {/* CTA Inline 12 */}
            <div className="not-prose">
              <div className="ae-cta-inline">
                <p>Want to accelerate the compounding effect? Start with a baseline audit.</p>
                <Link href="/blindspot">Get Your Free Blind Spot Report →</Link>
              </div>
            </div>

            {/* Section: The Bottom Line */}
            <div className="not-prose"><span className="ae-section-label">Bottom Line</span></div>
            <h2>The Bottom Line</h2>
            <p>
              Directory listings are not a relic of old SEO. They are one of the
              two largest sources of AI citations, accounting for 42% of all
              citations alongside first-party websites at 44%. But the game has
              changed. AI platforms do not care about how many directories you are
              on. They care about consistency, completeness, and whether your
              listings appear on the specific platforms they trust. Focus on the
              Tier 1 and Tier 2 directories outlined above, ensure your NAP data
              is identical everywhere, and treat your directory presence as a
              living asset that requires regular attention. The businesses that
              get this right are the ones AI platforms will confidently recommend
              to their users.
            </p>

            {/* Takeaway */}
            <div className="not-prose">
              <div className="ae-takeaway">
                <div className="ae-takeaway-title">Key Takeaway</div>
                <p>
                  Directory listings account for 42% of all AI citations. Focus on the Tier 1
                  platforms (Google Business Profile, Bing Places, Yelp, Apple Business Connect),
                  add industry-specific Tier 2 directories, and make your NAP data identical
                  everywhere. The businesses that move first on directory optimization will own
                  the AI recommendations in their category.
                </p>
              </div>
            </div>

            {/* CTA Inline 13 */}
            <div className="not-prose">
              <div className="ae-cta-inline">
                <p>Need help prioritizing? Call us directly.</p>
                <a href="tel:+12134442229">Call (213) 444-2229 →</a>
              </div>
            </div>

          </article>

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

          {/* Full CTA Block */}
          <div className="not-prose">
            <div className="ae-cta-block">
              <h2>Are Your Listings Helping or Hurting Your AI Visibility?</h2>
              <p>
                Our free Blind Spot Report audits your business across all major AI
                platforms, checks your directory presence, maps your competitors, and
                delivers a prioritized action plan. No pitch, just the data.
              </p>
              <div style={{display:'flex',flexDirection:'column',alignItems:'center',gap:'16px',marginTop:'24px'}}>
                <Link href="/blindspot" className="ae-cta-primary">Get Your Free Blind Spot Report</Link>
                <div style={{display:'flex',flexWrap:'wrap',gap:'24px',justifyContent:'center',marginTop:'8px'}}>
                  <a href="tel:+12134442229" style={{color:'rgba(255,255,255,0.7)',fontSize:'0.9rem'}}>📞 (213) 444-2229</a>
                  <a href="mailto:support@theanswerengine.ai" style={{color:'rgba(255,255,255,0.7)',fontSize:'0.9rem'}}>✉️ support@theanswerengine.ai</a>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <section className="mt-16 mb-16">
            <h2 className="text-2xl font-bold text-white mb-8 font-plus-jakarta">
              Frequently Asked Questions
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  q: 'Which directory listings do AI platforms actually cite?',
                  a: 'According to Yext research analyzing 6.8 million AI citations, listings accounted for 42% of all citations across ChatGPT, Gemini, and Perplexity. ChatGPT relies most heavily on Bing-indexed listings. Perplexity favors industry-specific directories like TripAdvisor and Zocdoc. Google AI Overviews pull from Google Business Profile and major review platforms like Yelp.',
                },
                {
                  q: 'Does having a Yelp profile help with AI search visibility?',
                  a: 'Yes. First Page Sage research found that businesses with profiles on Yelp, Trustpilot, and G2 have 3x higher chances of being cited by ChatGPT. Yelp also recorded over 246,000 mentions in Google AI Overviews, making it one of the most frequently cited directory platforms in AI search.',
                },
                {
                  q: 'How many directory listings does a local business need?',
                  a: 'Quality matters more than quantity. Focus on Google Business Profile, Bing Places, Yelp, Apple Business Connect, and two to three industry-specific directories relevant to your field. The critical factor is that your NAP data is identical across every listing.',
                },
                {
                  q: 'Why does NAP consistency matter more for AI than for traditional SEO?',
                  a: 'AI platforms cross-reference business information across multiple sources before generating recommendations. Conflicting data lowers the confidence score assigned to your business. Traditional search engines use NAP as one ranking factor. AI systems treat it as a trust signal that determines whether they mention you at all.',
                },
                {
                  q: 'Do industry-specific directories matter for AI citations?',
                  a: 'Yes, significantly. Yext research found that Perplexity leans into industry-specific directories. In healthcare, Zocdoc drives citations. In hospitality, TripAdvisor is the primary source. These specialized directories carry more authority for AI because they provide structured, verified, industry-relevant data.',
                },
                {
                  q: 'How often should I update my directory listings?',
                  a: 'Review and update your listings at least quarterly. Any time your business changes its address, phone number, hours, or services, update every listing within the same week. Stale or outdated listings create conflicting data that erodes AI confidence in your business information.',
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

          {/* Final CTA */}
          <div className="not-prose">
            <div className="ae-final-cta">
              <div className="ae-final-cta-pulse"></div>
              <h2>Stop Guessing. Start Getting Recommended.</h2>
              <p>Your directory listings are either working for you or against you. Our Blind Spot Report checks every major AI platform, audits your directory presence, maps your competitors, and delivers a prioritized action plan. No pitch, just the data.</p>
              <Link href="/blindspot" className="ae-cta-primary">Get Your Free Blind Spot Report</Link>
              <div style={{display:'flex',flexWrap:'wrap',gap:'24px',justifyContent:'center',marginTop:'20px'}}>
                <a href="tel:+12134442229" style={{color:'rgba(255,255,255,0.6)',fontSize:'0.9rem'}}>📞 (213) 444-2229</a>
                <a href="mailto:support@theanswerengine.ai" style={{color:'rgba(255,255,255,0.6)',fontSize:'0.9rem'}}>✉️ support@theanswerengine.ai</a>
              </div>
            </div>
          </div>

        </div>
      </main>
    </>
  )
}
