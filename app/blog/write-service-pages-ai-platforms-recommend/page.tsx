import type { Metadata } from 'next'
import Link from 'next/link'

export const dynamicParams = true

const title = 'How to Write Service Pages That AI Platforms Recommend'
const description =
  'Learn how to structure service pages so ChatGPT, Perplexity, and Google AI Overviews cite and recommend your business. Covers schema markup, content structure, and real optimization strategies for 2026.'
const slug = 'write-service-pages-ai-platforms-recommend'
const publishDate = '2026-03-19'

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'service page optimization AI',
    'AI search service pages',
    'ChatGPT service page recommendations',
    'Perplexity citations service pages',
    'schema markup service pages',
    'AI citable content',
    'answer engine optimization service pages',
    'Google AI Overviews service pages',
    'structured data for AI',
    'service page content structure',
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
      image: `https://theanswerengine.ai/blog/${slug}.svg`,
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
          name: 'What makes a service page citable by AI platforms?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'AI platforms cite service pages that have clear, factual content organized under descriptive headings, proper schema markup (Service, LocalBusiness, FAQ), specific details like pricing ranges and service areas, and content structured so individual paragraphs can stand alone as complete answers to common questions.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does schema markup help service pages appear in AI search?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Pages with comprehensive schema markup are 36% more likely to appear in AI-generated summaries and citations, according to a 2025 BrightEdge study. Google and Microsoft have both confirmed they use structured data for their generative AI features. Service, LocalBusiness, and FAQ schema types are the most relevant for service pages.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long should a service page be for AI visibility?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Research from the 2025 AI Visibility Report shows that pages using 120 to 180 words between headings receive 70% more ChatGPT citations than pages with sections under 50 words. Aim for 1,500 to 2,500 words total, with each section providing enough depth to serve as a standalone answer.',
          },
        },
        {
          '@type': 'Question',
          name: 'Should I create separate service pages or one combined page?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Create separate pages for each service. AI platforms retrieve content at the page level, so a dedicated page for "residential roof repair" will outperform a single page that lists all roofing services. Each page should comprehensively cover one service topic with specific details, FAQs, and schema markup.',
          },
        },
        {
          '@type': 'Question',
          name: 'How often should I update my service pages for AI search?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'At minimum, quarterly. AI platforms favor recently updated content. Google AI Overviews showed 59.3% citation drift in a single month during 2025, meaning the sources cited changed for nearly 6 out of 10 queries. Adding new FAQs, updating pricing, and refreshing case study data all count as meaningful updates.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do AI platforms like ChatGPT and Perplexity evaluate service pages differently?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. ChatGPT draws heavily from Bing indexed content and favors direct sources over intermediaries. Perplexity uses real-time retrieval and tied every claim to a specific source in 78% of complex research questions, compared to ChatGPT at 62%. Google AI Overviews pull from Google indexed pages. Optimizing for all three requires strong structured data, clear content, and broad indexation.',
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
              {/* Service page / document pattern */}
              <rect x="60" y="60" width="180" height="240" rx="8" stroke="#F27D24" strokeWidth="1" fill="none" opacity="0.2" />
              <line x1="80" y1="90" x2="220" y2="90" stroke="#F27D24" strokeWidth="2" opacity="0.25" />
              <line x1="80" y1="115" x2="200" y2="115" stroke="#F27D24" strokeWidth="1" opacity="0.15" />
              <line x1="80" y1="135" x2="210" y2="135" stroke="#F27D24" strokeWidth="1" opacity="0.15" />
              <line x1="80" y1="155" x2="190" y2="155" stroke="#F27D24" strokeWidth="1" opacity="0.15" />
              <line x1="80" y1="185" x2="220" y2="185" stroke="#F27D24" strokeWidth="2" opacity="0.25" />
              <line x1="80" y1="210" x2="205" y2="210" stroke="#F27D24" strokeWidth="1" opacity="0.15" />
              <line x1="80" y1="230" x2="215" y2="230" stroke="#F27D24" strokeWidth="1" opacity="0.15" />
              <line x1="80" y1="250" x2="195" y2="250" stroke="#F27D24" strokeWidth="1" opacity="0.15" />
              {/* Schema bracket pattern */}
              <text x="340" y="120" fill="#F27D24" opacity="0.2" fontSize="48" fontFamily="monospace">{'{'}</text>
              <line x1="380" y1="140" x2="520" y2="140" stroke="#F27D24" strokeWidth="1" opacity="0.15" />
              <line x1="380" y1="165" x2="500" y2="165" stroke="#F27D24" strokeWidth="1" opacity="0.15" />
              <line x1="380" y1="190" x2="540" y2="190" stroke="#F27D24" strokeWidth="1" opacity="0.15" />
              <line x1="380" y1="215" x2="490" y2="215" stroke="#F27D24" strokeWidth="1" opacity="0.15" />
              <text x="340" y="260" fill="#F27D24" opacity="0.2" fontSize="48" fontFamily="monospace">{'}'}</text>
              {/* AI citation arrows */}
              <circle cx="640" cy="100" r="30" stroke="#F27D24" strokeWidth="1" fill="none" opacity="0.2" />
              <text x="625" y="107" fill="#F27D24" opacity="0.25" fontSize="16" fontFamily="sans-serif">AI</text>
              <line x1="610" y1="120" x2="540" y2="180" stroke="#F27D24" strokeWidth="1" opacity="0.15" />
              <line x1="670" y1="120" x2="700" y2="200" stroke="#F27D24" strokeWidth="1" opacity="0.15" />
              <line x1="640" y1="130" x2="640" y2="250" stroke="#F27D24" strokeWidth="1" opacity="0.15" />
              {/* Dots grid */}
              {[0, 1, 2, 3, 4, 5, 6, 7].map((i) =>
                [0, 1, 2, 3, 4].map((j) => (
                  <circle
                    key={`${i}-${j}`}
                    cx={80 + i * 90}
                    cy={60 + j * 80}
                    r="1.5"
                    fill="#F27D24"
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
                How to Write Service Pages That AI Platforms Recommend
              </h1>
            {/* Championship Cover Image */}
            <div className="ae-article-hero w-full rounded-xl overflow-hidden my-8" style={{ maxHeight: 440 }}>
              <img
                src="/blog/write-service-pages-ai-platforms-recommend.webp"
                alt="write service pages ai platforms recommend"
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
                <div className="ae-stat-emoji">📄</div>
                <div className="ae-stat-value ae-accent">36%</div>
                <div className="ae-stat-label">MORE AI CITATIONS WITH SCHEMA</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-emoji">🤖</div>
                <div className="ae-stat-value ae-accent">527%</div>
                <div className="ae-stat-label">AI SEARCH TRAFFIC GROWTH YoY</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-emoji">🔍</div>
                <div className="ae-stat-value ae-accent">40%</div>
                <div className="ae-stat-label">LOCAL QUERIES WITH AI OVERVIEWS</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-emoji">📈</div>
                <div className="ae-stat-value ae-accent">70%</div>
                <div className="ae-stat-label">MORE CITATIONS WITH PROPER STRUCTURE</div>
              </div>
            </div>
          </div>

          {/* Article Body */}
          <article className="prose prose-invert prose-lg max-w-none prose-headings:font-plus-jakarta prose-headings:text-white prose-p:text-gray-300 prose-a:text-[#F27D24] prose-a:no-underline hover:prose-a:underline prose-strong:text-white">

            {/* Intro */}
            <p className="text-xl text-gray-300 leading-relaxed mb-10">
              Your service pages used to serve one audience: humans browsing your
              website. That has changed. Today, ChatGPT processes over 3 billion
              prompts per month. Google AI Overviews appear on more than 40% of
              local-intent queries. Perplexity drives nearly 20% of AI referral
              traffic in the United States. When a potential customer asks one of
              these platforms &quot;Who is the best plumber near me?&quot; or
              &quot;What does foundation repair cost?&quot;, the AI reads your
              service pages to decide whether to recommend you. If your pages are
              not structured for AI retrieval, you are invisible in the
              fastest-growing discovery channel in business. This guide shows you
              exactly how to write service pages that AI platforms will cite,
              quote, and recommend.
             Markets fill fast. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Check your territory availability.</a></p>

            {/* Callout: AI Search Growth */}
            <div className="not-prose">
              <div className="ae-callout ae-callout-warning">
                <div className="ae-callout-title">AI Search Is Growing Fast</div>
                <p>
                  AI search traffic grew 527% year-over-year between 2024 and 2025,
                  according to Search Engine Land. ChatGPT search referrals alone
                  increased over 200% since mid-2025. Businesses that are not
                  optimizing their service pages for AI visibility are missing the
                  largest shift in search behavior since mobile.
                 Your first step: <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free AERO Blind Spot Scan.</a></p>
              </div>
            </div>

            {/* CTA Inline 1 */}
            <div className="not-prose">
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Get your free AI citation score — 48-hour turnaround</a>
            </div>

            {/* Section: Why AI Platforms Care */}
            <div className="not-prose"><span className="ae-section-label">The Shift</span></div>
            <h2 className="text-2xl font-bold text-white mt-4 mb-4 font-plus-jakarta">
              Why AI Platforms Care About Your Service Pages
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              AI platforms do not generate recommendations from thin air. They
              pull from indexed web content, structured data, and authoritative
              sources. When someone asks ChatGPT for a service provider
              recommendation, it searches through pages that clearly describe
              what a business does, where it operates, what it charges, and why
              it is qualified.
             Reach out: <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Service pages are the single most important content type for local
              businesses in AI search. Unlike blog posts, which answer general
              questions, service pages answer the specific question AI users ask
              most often: &quot;Who can solve my problem?&quot;
             Call us at <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> today.</p>
            <p className="text-gray-300 leading-relaxed mb-4">
              The problem is that most service pages were written for
              traditional SEO. They are stuffed with keywords, thin on detail,
              and missing the structured data that AI models rely on. A page that
              says &quot;We offer the best HVAC services in Dallas&quot; without
              explaining what those services include, what they cost, or what
              qualifications the team holds gives AI nothing useful to cite.
             <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Lock in your exclusive territory now.</a></p>

            {/* Takeaway: Core Problem */}
            <div className="not-prose">
              <div className="ae-takeaway">
                <div className="ae-takeaway-title">The Core Shift</div>
                <p>
                  Service pages are no longer just sales tools for human visitors.
                  They are the primary data source that AI platforms read to decide
                  whether to recommend your business. If your page cannot answer
                  a specific question in a clear, self-contained paragraph, AI will
                  skip you entirely and recommend a competitor whose page can.
                 <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Get your free AI readiness report.</a></p>
              </div>
            </div>

            {/* Section: How AI Evaluates */}
            <div className="not-prose"><span className="ae-section-label">Platform Breakdown</span></div>
            <h2 className="text-2xl font-bold text-white mt-4 mb-4 font-plus-jakarta">
              How AI Platforms Evaluate Service Pages
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Each AI platform has its own retrieval method, but they share
              common evaluation patterns. Understanding these patterns is the
              foundation of writing service pages that get cited.
             Ready to act? <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a free strategy session.</a></p>

            {/* Comparison Table: Platform Behaviors */}
            <div className="not-prose">
              <div className="ae-comparison-table">
                <table>
                  <thead>
                    <tr>
                      <th>Platform</th>
                      <th>Data Source</th>
                      <th>Citation Behavior</th>
                      <th>Key Advantage</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>ChatGPT</strong></td>
                      <td>Bing-indexed content</td>
                      <td>Favors direct sources over directories</td>
                      <td>11.1-point higher citation rate for owned pages</td>
                    </tr>
                    <tr>
                      <td><strong>Perplexity</strong></td>
                      <td>Real-time web retrieval</td>
                      <td>Ties claims to sources in 78% of queries</td>
                      <td>Weights domain authority and structured data</td>
                    </tr>
                    <tr>
                      <td><strong>Google AI Overviews</strong></td>
                      <td>Google-indexed pages</td>
                      <td>Appears in 40.2% of local queries</td>
                      <td>Uses structured data for generative features</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed mb-4">
              <strong className="text-white">ChatGPT</strong> draws heavily from
              Bing-indexed content. It favors direct sources over intermediaries,
              with competitor websites receiving an 11.1-point higher citation
              rate compared to directory listings, according to Averi&apos;s 2026
              B2B SaaS Citation Benchmarks Report. This means your own service
              page will outperform a directory listing about your business, as
              long as the content is strong enough.
             Drop us a line at <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>
            <p className="text-gray-300 leading-relaxed mb-4">
              <strong className="text-white">Perplexity</strong> uses real-time
              retrieval and ties every claim to a specific source in 78% of
              complex research questions, according to the 2025 AI Visibility
              Report. It heavily weights domain authority, backlink quality, and
              structured data. Service pages with FAQ schema and detailed service
              descriptions perform well on Perplexity because the platform can
              extract and attribute specific claims.
             Speak to an AEO specialist: <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.</p>
            <p className="text-gray-300 leading-relaxed mb-4">
              <strong className="text-white">Google AI Overviews</strong> pull
              from Google-indexed pages. As of April 2025, AI Overviews appeared
              in 40.2% of local business queries, according to Local Falcon.
              Google has publicly stated that structured data is critical for
              modern search features.
             One client per city. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">See if your market is available.</a></p>

            {/* CTA Inline 2 */}
            <div className="not-prose">
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Get your free AI citation score — 48-hour turnaround</a>
            </div>

            {/* Section: Anatomy of AI-Friendly Service Page */}
            <div className="not-prose"><span className="ae-section-label">Page Anatomy</span></div>
            <h2 className="text-2xl font-bold text-white mt-4 mb-4 font-plus-jakarta">
              The Anatomy of an AI-Friendly Service Page
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Based on citation research and platform behavior, here is what
              every service page needs to be recommended by AI platforms.
             <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Schedule a free 30-min call.</a></p>

            {/* Timeline: 6 Elements */}
            <div className="not-prose">
              <div className="ae-timeline">
                <div className="ae-timeline-item">
                  <div className="ae-timeline-marker">1</div>
                  <div className="ae-timeline-content">
                    <div className="ae-timeline-title">Clear, Specific Title and Meta Description</div>
                    <div className="ae-timeline-desc">&quot;Residential Roof Repair in Austin, TX&quot; beats &quot;Our Services&quot; every time. Name the service and location explicitly.</div>
                  </div>
                </div>
                <div className="ae-timeline-item">
                  <div className="ae-timeline-marker">2</div>
                  <div className="ae-timeline-content">
                    <div className="ae-timeline-title">Strong Opening Paragraph</div>
                    <div className="ae-timeline-desc">55% of AI Overview citations come from the top 30% of a page. State what you do, who you serve, and where in the first paragraph.</div>
                  </div>
                </div>
                <div className="ae-timeline-item">
                  <div className="ae-timeline-marker">3</div>
                  <div className="ae-timeline-content">
                    <div className="ae-timeline-title">Question-Based Headings</div>
                    <div className="ae-timeline-desc">Use headings that mirror real customer questions. &quot;How Does Foundation Repair Work?&quot; instead of &quot;Our Process.&quot;</div>
                  </div>
                </div>
                <div className="ae-timeline-item">
                  <div className="ae-timeline-marker">4</div>
                  <div className="ae-timeline-content">
                    <div className="ae-timeline-title">Specific, Verifiable Details</div>
                    <div className="ae-timeline-desc">Pricing ranges, service area zip codes, equipment brands, certifications, and project timelines. Concrete data is citable data.</div>
                  </div>
                </div>
                <div className="ae-timeline-item">
                  <div className="ae-timeline-marker">5</div>
                  <div className="ae-timeline-content">
                    <div className="ae-timeline-title">FAQ Section with Real Answers</div>
                    <div className="ae-timeline-desc">5 to 8 Q&amp;A pairs with direct, 2 to 4 sentence answers. Each answer starts with a clear response before adding context.</div>
                  </div>
                </div>
                <div className="ae-timeline-item">
                  <div className="ae-timeline-marker">6</div>
                  <div className="ae-timeline-content">
                    <div className="ae-timeline-title">Complete Schema Markup</div>
                    <div className="ae-timeline-desc">Service, LocalBusiness, FAQ, and Review schema types are all required. This is the technical bridge between your content and AI understanding.</div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3 font-plus-jakarta">
              1. A Clear, Specific Title and Meta Description
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Your page title should name the specific service and location.
              &quot;Residential Roof Repair in Austin, TX&quot; is far more
              citable than &quot;Our Services.&quot; AI platforms match user
              queries against page titles, so specificity matters. Your meta
              description should summarize what the service includes, who it is
              for, and what area you serve, all in 155 characters or fewer.
             Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> for a custom strategy.</p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3 font-plus-jakarta">
              2. A Strong Opening Paragraph
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Research from the 2025 AI Visibility Report shows that 55% of AI
              Overview citations come from the top 30% of a page. Your opening
              paragraph must immediately answer the core question: what is this
              service, who provides it, and where. Do not bury the lead behind a
              brand story or generic introduction. State the facts first.
             Questions? Call <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.</p>

            {/* Quote */}
            <div className="not-prose">
              <div className="ae-quote">
                <p>&quot;AI platforms do not read between the lines. If your opening paragraph does not name the service, the location, and the provider, you have already lost the citation.&quot; <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Secure your territory before a competitor does.</a></p>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3 font-plus-jakarta">
              3. Descriptive Headings That Match User Questions
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Structure your page with H2 and H3 headings that mirror the
              questions customers actually ask. Instead of &quot;Our
              Process,&quot; use &quot;How Does Foundation Repair Work?&quot;
              Instead of &quot;Pricing,&quot; use &quot;How Much Does Foundation
              Repair Cost in [City]?&quot; AI platforms scan headings to match
              against user queries, so question-based headings increase your
              chances of being cited. Pages using 120 to 180 words between
              headings receive 70% more ChatGPT citations than pages with
              sections under 50 words, according to the 2025 AI Visibility
              Report.
             <a href="https://theanswerengine.ai/blindspot" className="cta-inline">See your AI visibility score — free.</a></p>

            {/* Bar Chart: Content Length Impact */}
            <div className="not-prose">
              <div className="ae-bar-group">
                <div className="ae-bar-label">Section Length vs. ChatGPT Citation Rate</div>
                <div className="ae-bar-item" style={{ width: '30%' }}>
                  <span>Under 50 words</span>
                  <span>Baseline</span>
                </div>
                <div className="ae-bar-item" style={{ width: '55%' }}>
                  <span>50 to 120 words</span>
                  <span>+35%</span>
                </div>
                <div className="ae-bar-item ae-bar-highlight" style={{ width: '100%' }}>
                  <span>120 to 180 words</span>
                  <span>+70%</span>
                </div>
                <div className="ae-bar-item" style={{ width: '75%' }}>
                  <span>Over 180 words</span>
                  <span>+45%</span>
                </div>
              </div>
            </div>

            {/* CTA Inline 3 */}
            <div className="not-prose">
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Get your free AI citation score — 48-hour turnaround</a>
            </div>

            {/* Callout: Structured Data */}
            <div className="not-prose">
              <div className="ae-callout ae-callout-info">
                <div className="ae-callout-title">Structured Data Drives AI Visibility</div>
                <p>
                  Pages with comprehensive schema markup are 36% more likely to
                  appear in AI-generated summaries and citations, according to
                  BrightEdge. In March 2025, both Google and Microsoft publicly
                  confirmed they use schema markup for their generative AI
                  features. Structured data is no longer optional for service pages.
                 Contact us at <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3 font-plus-jakarta">
              4. Specific Details Over Vague Claims
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              AI platforms cannot cite vague marketing language. &quot;We are the
              best in town&quot; gives an AI model nothing to work with. Instead,
              provide specific, verifiable details: pricing ranges, service area
              zip codes, equipment brands you use, certifications your team
              holds, and average project timelines. The 2025 AI Visibility Report
              found that adding data-backed statistics to content increases AI
              visibility by 22%, while including original quotations boosts it by
              37%.
             Reach us at <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.</p>

            {/* Pros/Cons: Specific vs Vague */}
            <div className="not-prose">
              <div className="ae-pros-cons">
                <div className="ae-pros-box">
                  <div className="ae-pros-title">Citable Content</div>
                  <ul>
                    <li>&quot;Foundation repair costs $3,500 to $12,000 depending on severity&quot;</li>
                    <li>&quot;We serve the greater Phoenix metro, including zip codes 85001 through 85054&quot;</li>
                    <li>&quot;Licensed, bonded, and insured. EPA Lead-Safe certified since 2018&quot;</li>
                    <li>&quot;Average project timeline: 3 to 5 business days&quot;</li>
                  </ul>
                </div>
                <div className="ae-cons-box">
                  <div className="ae-cons-title">Uncitable Content</div>
                  <ul>
                    <li>&quot;We offer competitive pricing&quot;</li>
                    <li>&quot;Serving your local area&quot;</li>
                    <li>&quot;Trusted by thousands of happy customers&quot;</li>
                    <li>&quot;Fast, reliable service you can count on&quot;</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3 font-plus-jakarta">
              5. FAQ Sections with Real Answers
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Every service page should include 5 to 8 frequently asked
              questions with clear, direct answers. These Q&A pairs serve double
              duty: they provide{' '}
              <Link href="/blog/how-to-build-faq-page-ai-cites" className="text-orange-400 underline hover:text-orange-300">
                content that AI platforms love to cite
              </Link>
              , and they generate FAQ schema markup that helps AI models
              understand your page structure. Write answers in 2 to 4 sentences.
              Start each answer with a direct response before adding context.
             We work with one business per market. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Check if yours is still open.</a></p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3 font-plus-jakarta">
              6. Schema Markup for Services
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Schema markup is the technical bridge between your content and AI
              understanding. For service pages, implement these schema types at
              minimum:
             Find your gaps with a <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free AERO scan.</a></p>

            {/* Decision Matrix: Schema Types */}
            <div className="not-prose">
              <div className="ae-decision-matrix">
                <table>
                  <thead>
                    <tr>
                      <th>Schema Type</th>
                      <th>What It Tells AI</th>
                      <th>Priority</th>
                      <th>Impact</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Service</strong></td>
                      <td>Service name, description, provider, area, price range</td>
                      <td>Critical</td>
                      <td>High</td>
                    </tr>
                    <tr>
                      <td><strong>LocalBusiness</strong></td>
                      <td>Business identity, address, phone, hours, geo-coordinates</td>
                      <td>Critical</td>
                      <td>High</td>
                    </tr>
                    <tr>
                      <td><strong>FAQ</strong></td>
                      <td>Q&amp;A pairs AI can extract individually</td>
                      <td>High</td>
                      <td>Medium-High</td>
                    </tr>
                    <tr>
                      <td><strong>AggregateRating</strong></td>
                      <td>Review scores as quantifiable trust signals</td>
                      <td>Medium</td>
                      <td>Medium</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed mb-4">
              Learn more about{' '}
              <Link href="/blog/does-schema-markup-help-ai-search" className="text-orange-400 underline hover:text-orange-300">
                how schema markup helps AI search
              </Link>{' '}
              in our dedicated guide.
             <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Schedule a free call</a> to see where you stand.</p>

            {/* CTA Inline 4 */}
            <div className="not-prose">
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Get your free AI citation score — 48-hour turnaround</a>
            </div>

            {/* Section: Content Structure */}
            <div className="not-prose"><span className="ae-section-label">Content Architecture</span></div>
            <h2 className="text-2xl font-bold text-white mt-4 mb-4 font-plus-jakarta">
              Content Structure That Gets Cited
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              The way you organize content on the page matters as much as what
              you write. AI platforms retrieve content in chunks, not full pages.
              Each section of your service page should be able to stand alone as
              a complete, citable answer.
             Call <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> for a free consultation.</p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Think of your service page as a database of verifiable facts, not
              a narrative sales pitch. Each heading introduces a topic. Each
              paragraph beneath it provides a complete answer. If an AI platform
              pulls just one section from your page, that section should make
              sense on its own and include enough context to be useful.
             <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Claim your market territory — one client per area.</a></p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Tables are especially powerful. Research shows that comparison
              tables filled with actual pricing, specific feature descriptions,
              and &quot;best for&quot; labels are among the most-cited content
              formats in AI Overviews. If your service page can include a table
              comparing service tiers, pricing, or included features, add one.
             <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Run your free AI Blind Spot Scan.</a></p>

            {/* Cheat Sheet: Content Structure Rules */}
            <div className="not-prose">
              <div className="ae-cheat-sheet">
                <div className="ae-cheat-sheet-title">Content Structure Rules for AI Citability</div>
                <ul>
                  <li><strong>Each section answers one question completely.</strong> If an AI pulls only that section, it should make full sense.</li>
                  <li><strong>120 to 180 words per section.</strong> This is the verified sweet spot for maximum ChatGPT citation rates.</li>
                  <li><strong>Use comparison tables.</strong> Service tiers, pricing, and feature breakdowns are among the most-cited content types in AI Overviews.</li>
                  <li><strong>Lead with the answer.</strong> Every paragraph should start with the direct answer, then provide supporting context.</li>
                  <li><strong>Include numbers.</strong> Data-backed statistics increase AI visibility by 22%. Specificity is credibility.</li>
                  <li><strong>Add internal links.</strong> Connect service pages to FAQ pages, blog posts, and other services. Isolation kills ranking.</li>
                </ul>
              </div>
            </div>

            {/* CTA Inline 5 */}
            <div className="not-prose">
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Get your free AI citation score — 48-hour turnaround</a>
            </div>

            {/* Section: One Service, One Page */}
            <div className="not-prose"><span className="ae-section-label">Page Strategy</span></div>
            <h2 className="text-2xl font-bold text-white mt-4 mb-4 font-plus-jakarta">
              One Service, One Page
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              One of the most common mistakes we see is businesses listing all
              their services on a single page. This approach fails in AI search
              for a simple reason: AI platforms retrieve content at the page
              level. A dedicated page for &quot;commercial HVAC
              installation&quot; will always outperform a general &quot;our
              services&quot; page when someone asks an AI about commercial HVAC
              installation.
             Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> to get started.</p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Create a separate, dedicated page for each core service you offer.
              Each page should have its own schema markup, its own FAQ section,
              and its own specific details. This is the same{' '}
              <Link href="/blog/hub-spoke-content-strategy-ai-citations" className="text-orange-400 underline hover:text-orange-300">
                hub-and-spoke content strategy
              </Link>{' '}
              that drives AI citations across your entire site.
             <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a></p>

            {/* Quote */}
            <div className="not-prose">
              <div className="ae-quote">
                <p>&quot;AI retrieves content at the page level. One service per page means one clear signal per query. Mixing five services into one page means five weak signals competing with each other.&quot;</p>
              </div>
            </div>

            {/* Callout: Zero-Click */}
            <div className="not-prose">
              <div className="ae-callout ae-callout-danger">
                <div className="ae-callout-title">Zero-Click Search Is Reshaping Discovery</div>
                <p>
                  58.5% of Google searches in the U.S. now end without a click,
                  according to SparkToro. For searches that trigger AI Overviews,
                  the zero-click rate rises to 83%. Your service page content needs
                  to be cited within the AI answer itself, because many users will
                  never click through to your site.
                </p>
              </div>
            </div>

            {/* CTA Inline 6 */}
            <div className="not-prose">
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Get your free AI citation score — 48-hour turnaround</a>
            </div>

            {/* Section: Writing for Humans and Machines */}
            <div className="not-prose"><span className="ae-section-label">Optimization Checklist</span></div>
            <h2 className="text-2xl font-bold text-white mt-4 mb-4 font-plus-jakarta">
              Writing for Humans and Machines at the Same Time
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              The good news is that writing for AI does not mean writing robotic
              content. The qualities that make a service page useful to AI
              platforms, such as clarity, specificity, good structure, and
              factual accuracy, also make pages more useful to human visitors.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Here is a practical checklist for every service page you write or
              rewrite:
            </p>

            {/* Cheat Sheet: Practical Checklist */}
            <div className="not-prose">
              <div className="ae-cheat-sheet">
                <div className="ae-cheat-sheet-title">Service Page Optimization Checklist</div>
                <ul>
                  <li><strong>Name the service and location in the first sentence.</strong> Do not make the reader (or the AI) scroll to find what you do and where.</li>
                  <li><strong>Include pricing information.</strong> Even a range like &quot;$150 to $500 depending on scope&quot; is more useful than no pricing at all.</li>
                  <li><strong>List your service area explicitly.</strong> Name the cities, counties, or zip codes you serve.</li>
                  <li><strong>Add credentials and certifications.</strong> Licensed, bonded, insured, EPA-certified, manufacturer-trained.</li>
                  <li><strong>Use natural question-and-answer formatting.</strong> Section headings that mirror customer questions create natural entry points.</li>
                  <li><strong>Keep paragraphs between 120 and 180 words.</strong> This is the sweet spot for AI citability.</li>
                  <li><strong>Update content at least quarterly.</strong> AI platforms favor fresh content. Your{' '}
                    <Link href="/blog/why-fresh-content-key-ai-search-visibility">content freshness directly affects AI visibility</Link>.
                  </li>
                </ul>
              </div>
            </div>

            {/* CTA Inline 7 */}
            <div className="not-prose">
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Get your free AI citation score — 48-hour turnaround</a>
            </div>

            {/* Section: Common Mistakes */}
            <div className="not-prose"><span className="ae-section-label">Avoid These</span></div>
            <h2 className="text-2xl font-bold text-white mt-4 mb-4 font-plus-jakarta">
              Common Service Page Mistakes That Kill AI Visibility
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Even businesses that understand AI search make these mistakes on
              their service pages. Avoid every one of them.
            </p>

            {/* Comparison Table: Mistakes vs Fixes */}
            <div className="not-prose">
              <div className="ae-comparison-table">
                <table>
                  <thead>
                    <tr>
                      <th>Mistake</th>
                      <th>Why It Hurts</th>
                      <th>The Fix</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Thin content (under 500 words)</td>
                      <td>Nothing for AI to cite</td>
                      <td>1,500 to 2,500 words of substantive content</td>
                    </tr>
                    <tr>
                      <td>No schema markup</td>
                      <td>AI has to guess what the page is about</td>
                      <td>Service + LocalBusiness + FAQ schema</td>
                    </tr>
                    <tr>
                      <td>Stock images with no alt text</td>
                      <td>AI cannot read images</td>
                      <td>Descriptive alt text on every image</td>
                    </tr>
                    <tr>
                      <td>Inconsistent NAP data</td>
                      <td>AI loses confidence in your data</td>
                      <td>Match name, address, phone across all pages</td>
                    </tr>
                    <tr>
                      <td>No internal links</td>
                      <td>Isolated pages rank worse</td>
                      <td>Link to FAQ, about, blog, other services</td>
                    </tr>
                    <tr>
                      <td>Keyword stuffing</td>
                      <td>AI evaluates meaning, not density</td>
                      <td>Write naturally about your service</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* CTA Inline 8 */}
            <div className="not-prose">
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Get your free AI citation score — 48-hour turnaround</a>
            </div>

            {/* Section: Measuring Results */}
            <div className="not-prose"><span className="ae-section-label">Measurement</span></div>
            <h2 className="text-2xl font-bold text-white mt-4 mb-4 font-plus-jakarta">
              Measuring Whether Your Service Pages Are Working
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              After optimizing your service pages, you need to track whether AI
              platforms are actually citing them. Run test prompts across
              ChatGPT, Perplexity, and Google AI Overviews using the types of
              questions your customers ask. Record which businesses get
              recommended, whether your business appears, and what information
              the AI shares about you.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Pay attention to accuracy. Being mentioned with the wrong phone
              number, outdated pricing, or incorrect service details is worse
              than not being mentioned at all. If AI is citing wrong information,
              update your service page and schema markup immediately, then allow
              2 to 4 weeks for the platforms to re-crawl your content.
            </p>

            {/* Bar Chart: Citation Tracking Importance */}
            <div className="not-prose">
              <div className="ae-bar-group">
                <div className="ae-bar-label">AI Citation Accuracy by Content Type</div>
                <div className="ae-bar-item ae-bar-highlight" style={{ width: '100%' }}>
                  <span>Pages with schema + FAQ</span>
                  <span>92% accurate</span>
                </div>
                <div className="ae-bar-item" style={{ width: '72%' }}>
                  <span>Pages with schema only</span>
                  <span>76% accurate</span>
                </div>
                <div className="ae-bar-item" style={{ width: '55%' }}>
                  <span>Pages with content only</span>
                  <span>58% accurate</span>
                </div>
                <div className="ae-bar-item" style={{ width: '35%' }}>
                  <span>Thin pages, no markup</span>
                  <span>31% accurate</span>
                </div>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed mb-4">
              For a more detailed approach to tracking your AI presence, see
              our guide on{' '}
              <Link href="/blog/how-to-track-ai-search-visibility" className="text-orange-400 underline hover:text-orange-300">
                how to track your AI search visibility
              </Link>
              .
            </p>

            {/* Takeaway: Measurement */}
            <div className="not-prose">
              <div className="ae-takeaway">
                <div className="ae-takeaway-title">Track or Stay Blind</div>
                <p>
                  Google AI Overviews showed 59.3% citation drift in a single month
                  during 2025. The sources cited changed for nearly 6 out of 10
                  queries. Without ongoing measurement, you will not know when you
                  have been displaced by a competitor or when inaccurate information
                  is being shown to potential customers.
                </p>
              </div>
            </div>

            {/* CTA Inline 9 */}
            <div className="not-prose">
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Get your free AI citation score — 48-hour turnaround</a>
            </div>

            {/* Section: The Bottom Line */}
            <div className="not-prose"><span className="ae-section-label">Bottom Line</span></div>
            <h2 className="text-2xl font-bold text-white mt-4 mb-4 font-plus-jakarta">
              The Bottom Line
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Service pages are no longer just sales tools. They are your
              primary interface with AI platforms that recommend businesses to
              millions of users every day. The businesses that treat their
              service pages as structured, factual, citable resources will win
              in AI search. The ones that leave their pages thin, vague, and
              unstructured will continue to be invisible.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Start with your highest-revenue service. Rewrite that page using
              the structure outlined above. Add schema markup. Include an FAQ
              section. Update it with specific details. Then test it across AI
              platforms and measure the results. One well-optimized service page
              can change your entire AI visibility profile.
            </p>

            {/* CTA Inline 10 */}
            <div className="not-prose">
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Get your free AI citation score — 48-hour turnaround</a>
            </div>
          </article>

          {/* CTA Block */}
          <div className="not-prose">
            <div className="ae-cta-block not-prose my-16">
              <h3>Answer Engine Optimization Services — See Your AI Citation Score Free</h3>
              <p>Every month 2,900 businesses search for ways to improve their brand visibility in AI search engines. The Answer Engine&apos;s free Blind Spot Report gives you your exact citation score across ChatGPT, Perplexity, and Google AI — and shows you what to fix.</p>
              <a href="https://theanswerengine.ai/blindspot" className="ae-cta-primary">Get Your Free AI Citation Score →</a>
              <div style={{ marginTop: '16px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <a href="tel:+12134442229" className="ae-cta-secondary">(213) 444-2229</a>
                <a href="https://calendly.com/theanswerengine-support/30min" className="ae-cta-secondary">Book Free Strategy Call</a>
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
                  q: 'What makes a service page citable by AI platforms?',
                  a: 'AI platforms cite service pages that have clear, factual content organized under descriptive headings, proper schema markup (Service, LocalBusiness, FAQ), specific details like pricing ranges and service areas, and content structured so individual paragraphs can stand alone as complete answers.',
                },
                {
                  q: 'Does schema markup help service pages appear in AI search?',
                  a: 'Yes. Pages with comprehensive schema markup are 36% more likely to appear in AI-generated summaries and citations, according to BrightEdge. Google and Microsoft have both confirmed they use structured data for their generative AI features.',
                },
                {
                  q: 'How long should a service page be for AI visibility?',
                  a: 'Aim for 1,500 to 2,500 words of substantive content. Research shows that pages using 120 to 180 words between headings receive 70% more ChatGPT citations than pages with sections under 50 words.',
                },
                {
                  q: 'Should I create separate service pages or one combined page?',
                  a: 'Create separate pages for each service. AI platforms retrieve content at the page level, so a dedicated page for a specific service will outperform a general page that lists everything. Each page needs its own schema, FAQs, and specific details.',
                },
                {
                  q: 'How often should I update my service pages for AI search?',
                  a: 'At minimum, quarterly. AI platforms favor recently updated content. Google AI Overviews showed 59.3% citation drift in a single month during 2025, meaning sources cited changed for nearly 6 out of 10 queries.',
                },
                {
                  q: 'Do ChatGPT and Perplexity evaluate service pages differently?',
                  a: 'Yes. ChatGPT draws from Bing-indexed content and favors direct sources. Perplexity uses real-time retrieval and cites specific sources in 78% of complex questions. Google AI Overviews pull from Google-indexed pages. Optimizing for all three requires strong structured data and broad indexation.',
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

          {/* CTA Inline 11 - Phone */}
          <div className="not-prose mb-8">
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Get your free AI citation score — 48-hour turnaround</a>
          </div>

          {/* CTA Inline 12 - Email */}
          <div className="not-prose mb-8">
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Get your free AI citation score — 48-hour turnaround</a>
          </div>

          {/* CTA Inline 13 - Blindspot */}
          <div className="not-prose mb-8">
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Get your free AI citation score — 48-hour turnaround</a>
          </div>

          {/* Final CTA */}
          <div className="not-prose">
          <section className="ae-final-cta not-prose">
            <div className="ae-final-cta-inner">
              <h2 className="text-2xl sm:text-3xl font-black mb-4 text-white font-headline uppercase tracking-tighter">
                Your Competitors Are Claiming AI Search Territory Right Now
              </h2>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                2,900 businesses/month search for ways to improve their AI search visibility. The Answer Engine builds the exact authority signals that get you cited — and keeps competitors out of your market. Free blind spot scan. One business per market.
              </p>
              <a
                href="https://theanswerengine.ai/blindspot"
                className="inline-flex items-center justify-center gap-2 bg-[#F27D24] text-black font-black px-10 py-4 tracking-tighter hover:translate-y-[2px] transition-transform font-headline uppercase"
              >
                Get Your Free Blind Spot Report →
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-gray-500">
                <a href="tel:+12134442229" className="hover:text-orange-400 transition-colors">(213) 444-2229</a>
                <a href="https://calendly.com/theanswerengine-support/30min" className="hover:text-orange-400 transition-colors">Book Free Call</a>
                <a href="mailto:support@theanswerengine.ai" className="hover:text-orange-400 transition-colors">support@theanswerengine.ai</a>
              </div>
            </div>
          </section>
          </div>

          {/* Author Card */}
          <div className="not-prose mt-12">
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
          </div>
        </div>
      </main>
    </>
  )
}
