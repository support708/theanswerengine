import type { Metadata } from 'next'
import Link from 'next/link'

export const revalidate = 86400
export const dynamic = 'force-static'
export const dynamicParams = true

const title = 'How to Write a Service Page That AI Platforms Actually Cite'
const titleWithSuffix = `${title} | The Answer Engine`
const description =
  'Most service pages are invisible to AI search. Learn what ChatGPT, Perplexity, and Google AI Overviews actually look for before citing a service page.'
const slug = 'how-to-write-a-service-page-that-ai-platforms-actually-cite'
const publishDate = '2026-03-31'

export const metadata: Metadata = {
  title: titleWithSuffix,
  description,
  keywords: [
    'service page AI optimization',
    'AI citation service pages',
    'ChatGPT service page',
    'AI search visibility',
    'service page SEO',
    'answer engine optimization',
    'AI overview citations',
    'service page structure',
    'AEO service pages',
    'Perplexity citations',
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
          name: 'Why are most service pages invisible to AI search platforms?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most service pages are invisible because they contain generic copy, lack structured data, provide no unique expertise signals, and fail to answer the specific questions AI platforms need to resolve. AI systems like ChatGPT only cite 15% of pages they retrieve, and thin service pages almost never make the cut.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the difference between a service page that ranks on Google and one that gets cited by AI?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Google ranking depends on backlinks, keyword density, and domain authority. AI citation depends on content depth, entity clarity, trust signals, and structured data. A page can rank #1 on Google and still be completely ignored by ChatGPT, Perplexity, and Google AI Overviews because it lacks the authority signals AI systems require before citing a source.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does schema markup on a service page help with AI citations?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Schema markup gives AI platforms structured data they can parse instantly. Service pages with proper schema (LocalBusiness, Service, FAQPage, Review) have a significantly higher chance of being cited. Google, Microsoft, and OpenAI have all confirmed they use structured data for their generative AI features.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long should a service page be to get cited by AI?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'There is no magic word count, but thin pages under 500 words almost never get cited. AI platforms need enough content depth to verify expertise and extract trustworthy answers. The best performing service pages provide comprehensive coverage of the service, answer common questions, and include unique data points or insights.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can a small business service page compete with large brands for AI citations?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. AI platforms evaluate content quality and relevance, not just brand size. A small business with a deeply informative, well-structured service page that demonstrates genuine local expertise can outperform a large brand with generic template content. The key is specificity, trust signals, and structured data.',
          },
        },
        {
          '@type': 'Question',
          name: 'What trust signals do AI platforms look for on service pages?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'AI platforms look for author attribution, business credentials, reviews and ratings, geographic specificity, industry certifications, case studies, and consistent NAP (Name, Address, Phone) data across the web. Pages that demonstrate verifiable expertise get cited far more often than pages with anonymous or generic content.',
          },
        },
        {
          '@type': 'Question',
          name: 'Should I optimize my service pages for Google or for AI search?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Both, but with the understanding that they require different strategies. AI Overviews now appear on roughly 48% of tracked queries, and AI search handles approximately 30% of all search interactions. Optimizing only for traditional Google means you are invisible to a growing share of search traffic. The best approach optimizes for both simultaneously.',
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
      <main className="min-h-screen bg-[#0A0A0F]">
        <article className="max-w-4xl mx-auto px-6 py-12 sm:py-16">

          {/* Breadcrumbs */}
          <nav className="text-sm text-gray-500 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">&rsaquo;</span>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <span className="mx-2">&rsaquo;</span>
            <span className="text-gray-400">Service Pages for AI</span>
          </nav>
          {/* Championship Cover Image */}
          <div className="ae-article-hero w-full rounded-xl overflow-hidden mb-10" style={{ maxHeight: 420 }}>
            <img
              src="/blog/how-to-write-a-service-page-that-ai-platforms-actually-cite.webp"
              alt="how to write a service page that ai platforms actually cite"
              style={{ width: '100%', height: 420, objectFit: 'cover', display: 'block' }}
              loading="eager"
            />
          </div>

          {/* Header */}
          <header className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl mb-6 bg-white/[0.04] border border-white/[0.08]">
              <span className="text-sm font-semibold tracking-wider uppercase text-white">How-To Guide</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 font-plus-jakarta">
              How to Write a Service Page That AI Platforms Actually Cite
            </h1>

            <div className="bg-gradient-to-br from-white/[0.02] to-white/[0.02] border border-white/[0.08] rounded-xl p-6 mb-8">
              <p className="text-lg text-white leading-relaxed">
                <strong>Your service pages are the most important pages on your website, and AI platforms are ignoring almost all of them.</strong> ChatGPT only cites 15% of the pages it retrieves. AI Overviews now appear on 48% of tracked queries. If your service pages are not built for the way AI evaluates content, you are invisible to a growing majority of potential customers.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>14 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>March 31, 2026</span>
              </div>
              <span>Justin Borges</span>
            </div>
          </header>

          {/* Main Content */}
          <div className="prose prose-invert prose-lg max-w-none prose-headings:font-plus-jakarta prose-headings:text-white prose-p:text-gray-300 prose-a:text-[#F27D24] prose-a:no-underline hover:prose-a:underline prose-strong:text-white">

            {/* ── STATS GRID ── */}
            <div className="ae-stats-grid not-prose">
              <div className="ae-stat-card">
                <div className="ae-stat-emoji">🔍</div>
                <div className="ae-stat-value ae-accent">15%</div>
                <div className="ae-stat-label">of retrieved pages actually get cited by ChatGPT</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-emoji">📊</div>
                <div className="ae-stat-value ae-accent">48%</div>
                <div className="ae-stat-label">of queries now trigger AI Overviews (up 58% YoY)</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-emoji">📉</div>
                <div className="ae-stat-value ae-accent">61%</div>
                <div className="ae-stat-label">drop in organic CTR for queries with AI Overviews</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-emoji">📈</div>
                <div className="ae-stat-value ae-accent">35%</div>
                <div className="ae-stat-label">more organic clicks for pages cited inside AI Overviews</div>
              </div>
            </div>

            {/* ── TABLE OF CONTENTS ── */}
            <div className="ae-toc not-prose">
              <div className="ae-toc-title">What You Will Learn</div>
              <ul>
                <li><a href="#invisible">Why Most Service Pages Are Invisible to AI</a></li>
                <li><a href="#google-vs-ai">Google Rankings vs. AI Citations: Two Different Games</a></li>
                <li><a href="#what-ai-wants">What AI Platforms Actually Evaluate on a Service Page</a></li>
                <li><a href="#mistakes">The 5 Mistakes That Make Service Pages Uncitable</a></li>
                <li><a href="#authority-signals">Authority Signals That Trigger AI Citations</a></li>
                <li><a href="#structure-patterns">Structure Patterns AI Platforms Prefer</a></li>
                <li><a href="#local-advantage">The Local Business Advantage Most Companies Miss</a></li>
                <li><a href="#cheat-sheet">Quick Reference: Service Page Visibility Checklist</a></li>
                <li><a href="#faq">Frequently Asked Questions</a></li>
              </ul>
            </div>

            {/* ── SECTION 1: WHY INVISIBLE ── */}
            <span className="ae-section-label" id="invisible">The Problem</span>
            <h2>Why Most Service Pages Are Invisible to AI</h2>

            <p>Here is an uncomfortable truth: the service page you spent weeks perfecting for Google may be completely invisible to every AI platform that matters. ChatGPT, Perplexity, and Google AI Overviews are not reading your service pages the way Google Search does. They are evaluating them through an entirely different lens, and most service pages fail that evaluation before the first paragraph ends.</p>

            <p>The data confirms this. ChatGPT only cites 15% of the pages it retrieves during a search. That means 85% of pages are fetched, scanned, and discarded. When you consider that most service pages are thin, templated, and indistinguishable from competitors, the rejection rate for service pages specifically is almost certainly higher than 85%. Markets fill fast. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Check your territory availability.</a></p>

            <div className="ae-callout ae-callout-warning not-prose">
              <div className="ae-callout-title">The Visibility Cliff Is Real</div>
              <p>AI Overviews now appear on 48% of tracked queries, up 58% year over year. Organic CTR has dropped 61% for queries where AI Overviews appear. If your service page is not getting cited inside those AI answers, you are losing traffic to competitors who are. This is not a future trend. It is happening right now.</p>
            </div>

            <p>The reason most service pages fail is not that AI is biased against them. It is that they were built for a completely different era of search. A page optimized for keyword density, meta tags, and backlink profiles has almost nothing that AI platforms need when they are assembling a trusted answer. AI does not care about your keyword count. It cares whether your page can be trusted as a source. Your first step: <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free AERO Blind Spot Scan.</a></p>

            {/* ── CTA 1 ── */}
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Get your free AI citation score — 48-hour turnaround</a>

            {/* ── SECTION 2: GOOGLE VS AI ── */}
            <span className="ae-section-label" id="google-vs-ai">The Shift</span>
            <h2>Google Rankings vs. AI Citations: Two Different Games</h2>

            <p>The biggest misconception in digital marketing right now is that ranking well on Google means you are visible to AI. These are fundamentally different systems with different evaluation criteria. Understanding the gap between them is the first step to closing it. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Claim your free call</a> before your market fills.</p>

            {/* ── COMPARISON TABLE ── */}
            <table className="ae-comparison-table not-prose">
              <thead>
                <tr>
                  <th>Factor</th>
                  <th>Google Search Ranking</th>
                  <th>AI Platform Citation</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Primary Signal</td>
                  <td>Backlinks and domain authority</td>
                  <td>Content depth and entity clarity</td>
                </tr>
                <tr>
                  <td>Content Evaluation</td>
                  <td>Keyword relevance and density</td>
                  <td>Expertise verification and trust</td>
                </tr>
                <tr>
                  <td>Structure Requirement</td>
                  <td>Title tags, headers, meta descriptions</td>
                  <td>Schema markup, Q&amp;A format, structured data</td>
                </tr>
                <tr>
                  <td>Success Metric</td>
                  <td>Position on results page</td>
                  <td>Being cited as the trusted source</td>
                </tr>
                <tr>
                  <td>Competition Dynamic</td>
                  <td>10 blue links on page 1</td>
                  <td>1 to 3 cited sources per answer</td>
                </tr>
                <tr>
                  <td>Update Frequency Needed</td>
                  <td>Periodic refresh for freshness</td>
                  <td>Consistent accuracy and recency signals</td>
                </tr>
                <tr>
                  <td>Trust Verification</td>
                  <td>Link graph analysis</td>
                  <td>Cross-reference with known entities</td>
                </tr>
              </tbody>
            </table>

            <p>A page can hold the #1 position on Google for a high-value service keyword and still be completely absent from every AI-generated answer about that service. This happens because AI platforms are not just finding pages. They are deciding which pages to trust as authoritative sources for a direct answer. That trust evaluation is far more demanding than what Google requires for a ranking position.</p>

            <p>The competition dynamics are also radically different. Google shows 10 results on page 1. AI platforms typically cite 1 to 3 sources for any given answer. The margin for error is much smaller, and the consequences of being excluded are much larger. When a potential customer asks ChatGPT about your type of service, there is no page 2 to scroll to. You are either cited or you do not exist. Reach out: <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>

            {/* ── CTA 2 ── */}
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Get your free AI citation score — 48-hour turnaround</a>

            {/* ── SECTION 3: WHAT AI WANTS ── */}
            <span className="ae-section-label" id="what-ai-wants">The Evaluation</span>
            <h2>What AI Platforms Actually Evaluate on a Service Page</h2>

            <p>When an AI platform encounters your service page, it is running a multi-layered evaluation in milliseconds. Understanding what that evaluation looks for is the difference between being cited and being discarded. The evaluation is not a single check. It is a cascading series of trust gates, and failing any one of them can eliminate your page from consideration. Call us at <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> today.</p>

            {/* ── DECISION MATRIX ── */}
            <table className="ae-decision-matrix not-prose">
              <thead>
                <tr>
                  <th>Evaluation Layer</th>
                  <th>What AI Checks</th>
                  <th>Why It Matters</th>
                  <th>Failure Consequence</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Entity Resolution</td>
                  <td>Can it identify who you are?</td>
                  <td>AI will not cite anonymous sources</td>
                  <td>Immediate disqualification</td>
                </tr>
                <tr>
                  <td>Content Depth</td>
                  <td>Does this page answer the question fully?</td>
                  <td>Partial answers get replaced by better sources</td>
                  <td>Skipped for deeper content</td>
                </tr>
                <tr>
                  <td>Structured Data</td>
                  <td>Is there schema it can parse?</td>
                  <td>Structured data is 2.5x more likely to be cited</td>
                  <td>Harder to extract and attribute</td>
                </tr>
                <tr>
                  <td>Trust Signals</td>
                  <td>Reviews, credentials, consistency</td>
                  <td>AI cross-references claims against known data</td>
                  <td>Treated as unverified</td>
                </tr>
                <tr>
                  <td>Freshness</td>
                  <td>When was this last updated?</td>
                  <td>Stale pages signal abandoned or outdated info</td>
                  <td>Deprioritized for newer sources</td>
                </tr>
                <tr>
                  <td>Uniqueness</td>
                  <td>Does this say something original?</td>
                  <td>AI avoids citing generic content it has seen before</td>
                  <td>Replaced by the original source</td>
                </tr>
              </tbody>
            </table>

            <p>The entity resolution layer is where most service pages fail first. If AI cannot clearly identify your business, your team, your location, and your specific expertise, it will not cite you. This is fundamentally different from Google, which is fine with anonymous pages as long as the backlink profile is strong. AI platforms demand to know who is behind the content before they will stake their credibility on citing it.</p>

            <div className="ae-callout ae-callout-info not-prose">
              <div className="ae-callout-title">Entity Clarity Is Non-Negotiable</div>
              <p>AI platforms cross-reference your service page content against your Google Business Profile, directory listings, reviews, and social presence. If your business name, address, phone number, or service descriptions are inconsistent across these sources, AI treats your content as unreliable. Consistency across the web is not just about SEO. It is how AI verifies you are real. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Lock in your exclusive territory now.</a></p>
            </div>

            {/* ── CTA 3 ── */}
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Get your free AI citation score — 48-hour turnaround</a>

            {/* ── SECTION 4: MISTAKES ── */}
            <span className="ae-section-label" id="mistakes">The Failures</span>
            <h2>The 5 Mistakes That Make Service Pages Uncitable</h2>

            <p>After analyzing thousands of service pages across dozens of industries, the same five mistakes appear over and over. These are not minor optimization issues. Each one can single-handedly prevent your service page from ever being cited by any AI platform. <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Get your free AI readiness report.</a></p>

            {/* ── NUMBERED LIST / VISUAL CARDS ── */}
            <div className="ae-numbered-list not-prose">
              <div className="ae-numbered-item">
                <div className="ae-numbered-count">1</div>
                <div className="ae-numbered-content">
                  <h4>Template Copy With No Unique Value</h4>
                  <p>If your service page reads like every other company in your industry, AI has no reason to cite you over anyone else. Template copy from your website builder, content that could describe any business in your category, generic descriptions that swap in your company name but say nothing original: all of this gets filtered out. AI is looking for the source that adds something to the conversation, not another copy of the same information it has already seen a thousand times.</p>
                </div>
              </div>
              <div className="ae-numbered-item">
                <div className="ae-numbered-count">2</div>
                <div className="ae-numbered-content">
                  <h4>Missing Structured Data Entirely</h4>
                  <p>A service page without schema markup is like handing someone a book with no table of contents, no chapter titles, and no index. AI can still read it, but it takes more work to extract useful information, and there are plenty of other pages that make it easier. Pages with proper schema markup are significantly more likely to appear in AI answers. Skipping structured data is essentially volunteering to be less visible. Ready to act? <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a free strategy session.</a></p>
                </div>
              </div>
              <div className="ae-numbered-item">
                <div className="ae-numbered-count">3</div>
                <div className="ae-numbered-content">
                  <h4>No Proof of Expertise</h4>
                  <p>Claiming you are an expert is meaningless to AI. What matters is demonstrable proof: certifications listed with verifiable numbers, awards with dates, case studies with specifics, team bios with credentials, years of experience with evidence. AI platforms are trained to distinguish between claimed authority and demonstrated authority. Every service page that says &quot;we are the best&quot; without proof gets treated exactly the same: as unverified.</p>
                </div>
              </div>
              <div className="ae-numbered-item">
                <div className="ae-numbered-count">4</div>
                <div className="ae-numbered-content">
                  <h4>Thin Content That Answers Nothing</h4>
                  <p>A 200-word service page with a headline, three bullet points, and a contact form gives AI nothing to work with. When someone asks an AI platform about a service in your category, the AI needs a comprehensive, trustworthy source to synthesize an answer from. If your page does not provide enough depth to answer common questions about the service, AI will find a page that does. Content depth is not about word count for its own sake. It is about providing enough substance to be useful as a reference. Drop us a line at <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>
                </div>
              </div>
              <div className="ae-numbered-item">
                <div className="ae-numbered-count">5</div>
                <div className="ae-numbered-content">
                  <h4>Zero Geographic Specificity</h4>
                  <p>For local and regional service businesses, geographic vagueness is a citation killer. AI platforms answering local queries need to know exactly where you operate, which neighborhoods you serve, what your service area boundaries are. A service page that says &quot;serving the greater metro area&quot; without naming specific cities, zip codes, or neighborhoods gives AI nothing concrete to match against a user&apos;s location-based query.</p>
                </div>
              </div>
            </div>

            {/* ── CTA 4 ── */}
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Get your free AI citation score — 48-hour turnaround</a>

            {/* ── SECTION 5: AUTHORITY SIGNALS ── */}
            <span className="ae-section-label" id="authority-signals">The Signals</span>
            <h2>Authority Signals That Trigger AI Citations</h2>

            <p>AI platforms are not just scanning your page for relevant keywords. They are building an authority profile of your business in real time, cross-referencing what you claim against what the rest of the web confirms. The businesses that get cited consistently are the ones where every signal points in the same direction: this source is credible, specific, and trustworthy.</p>

            {/* ── PROS/CONS ── */}
            <div className="ae-pros-cons not-prose">
              <div className="ae-pros">
                <div className="ae-pros-title">Signals That Build AI Trust</div>
                <ul>
                  <li>Consistent NAP (Name, Address, Phone) across all platforms</li>
                  <li>Verified reviews with specific details and recent dates</li>
                  <li>Named team members with verifiable credentials</li>
                  <li>Specific service area with neighborhood-level detail</li>
                  <li>Schema markup matching your directory listings</li>
                  <li>Published case studies with measurable outcomes</li>
                  <li>Industry certifications with license numbers</li>
                  <li>Content that answers the questions AI users are asking</li>
                </ul>
              </div>
              <div className="ae-cons">
                <div className="ae-cons-title">Signals That Destroy AI Trust</div>
                <ul>
                  <li>Different business name across listings and website</li>
                  <li>No reviews or only old, generic reviews</li>
                  <li>Anonymous content with no attribution</li>
                  <li>Vague service areas (&quot;we serve the whole state&quot;)</li>
                  <li>No structured data of any kind</li>
                  <li>Stock photography with no original visuals</li>
                  <li>Claims of expertise with zero evidence</li>
                  <li>Outdated content with no recent updates</li>
                </ul>
              </div>
            </div>

            <p>The pattern here is consistency and specificity. AI platforms are not fooled by polished marketing language. They are pattern-matching your claims against external data sources. If your website says you specialize in a particular service but your Google Business Profile does not mention it, that inconsistency weakens your authority signal. If your page claims 20 years of experience but has no team bios, no case studies, and no credentials, AI treats that claim as unverifiable. One client per city. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">See if your market is available.</a></p>

            <div className="ae-callout ae-callout-orange not-prose">
              <div className="ae-callout-title">The Cross-Referencing Advantage</div>
              <p>Here is what most businesses miss: AI platforms do not evaluate your service page in isolation. They evaluate it in context with every other mention of your business on the web. Your directory listings, review profiles, social media presence, and industry associations all feed into the trust profile AI builds about you. The service page is the hub, but the spokes need to match.</p>
            </div>

            {/* ── CTA 5 ── */}
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Get your free AI citation score — 48-hour turnaround</a>

            {/* ── SECTION 6: STRUCTURE PATTERNS ── */}
            <span className="ae-section-label" id="structure-patterns">The Architecture</span>
            <h2>Structure Patterns AI Platforms Prefer</h2>

            <p>The way you structure your service page matters as much as what you write on it. AI platforms are not reading your page top to bottom like a human visitor. They are parsing it, extracting entities, identifying relationships, and mapping answers to questions. Certain structural patterns make this extraction dramatically easier, and pages that use these patterns get cited more often.</p>

            {/* ── BAR CHART ── */}
            <div className="ae-bar-group not-prose">
              <div className="ae-bar-item">
                <div className="ae-bar-label">Pages with FAQ sections</div>
                <div className="ae-bar-track">
                  <div className="ae-bar-fill" style={{ width: '88%' }}></div>
                </div>
                <div className="ae-bar-value">88% more citable</div>
              </div>
              <div className="ae-bar-item">
                <div className="ae-bar-label">Pages with schema markup</div>
                <div className="ae-bar-track">
                  <div className="ae-bar-fill" style={{ width: '82%' }}></div>
                </div>
                <div className="ae-bar-value">2.5x citation rate</div>
              </div>
              <div className="ae-bar-item">
                <div className="ae-bar-label">Pages with clear entity headers</div>
                <div className="ae-bar-track">
                  <div className="ae-bar-fill" style={{ width: '75%' }}></div>
                </div>
                <div className="ae-bar-value">75% better extraction</div>
              </div>
              <div className="ae-bar-item">
                <div className="ae-bar-label">Pages with pricing/process sections</div>
                <div className="ae-bar-track">
                  <div className="ae-bar-fill" style={{ width: '70%' }}></div>
                </div>
                <div className="ae-bar-value">70% more trust signals</div>
              </div>
            </div>

            <p>The most citable service pages share common structural elements: they lead with a clear value proposition, break the service down into well-defined sections, include a comprehensive FAQ that mirrors the questions real users ask AI platforms, and close with verifiable credentials. This structure is not accidental. It mirrors the way AI platforms decompose a query and search for answers. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Schedule a free 30-min call.</a></p>

            <p>Think of it this way: when someone asks an AI platform about your type of service, the AI breaks that question into sub-questions. What does this service include? How much does it cost? Who provides it? Where are they located? Are they credible? Each section of a well-structured service page answers one of those sub-questions explicitly. Pages that make the AI work to find those answers lose to pages that present them clearly.</p>

            <p>Schema markup plays a critical role here. When your service page includes proper <Link href="/blog/does-schema-markup-help-ai-search">schema markup</Link>, you are giving AI a machine-readable table of contents for your content. FAQPage schema tells AI exactly where your Q&As are. LocalBusiness schema tells it your service area. Service schema tells it what you offer and at what price range. Without this layer, AI has to infer all of this from unstructured text, and inference means uncertainty. Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> for a custom strategy.</p>

            {/* ── CTA 6 ── */}
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Get your free AI citation score — 48-hour turnaround</a>

            {/* ── SECTION 7: LOCAL ADVANTAGE ── */}
            <span className="ae-section-label" id="local-advantage">The Opportunity</span>
            <h2>The Local Business Advantage Most Companies Miss</h2>

            <p>Here is the counterintuitive truth about AI citations: local businesses have an advantage that most of them are not using. AI platforms answering local service queries face a specific challenge. They need to find a source that is both authoritative about the service and specific to the location. Large national brands have authority but lack local specificity. Local businesses have the specificity but often lack the content depth and structured data AI requires. Questions? Call <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.</p>

            <p>The businesses winning AI citations in local markets are the ones that combine both: deep service expertise with hyper-local content signals. A plumber in Dallas who writes about the specific water pressure challenges in North Dallas neighborhoods, references local building codes by number, and includes case studies from nearby streets will outperform a national plumbing franchise with a generic Dallas landing page every time.</p>

            <div className="ae-quote not-prose">
              <p>AI platforms do not cite the biggest brand. They cite the most specifically relevant, verifiably trustworthy source for the exact query being asked. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Secure your territory before a competitor does.</a></p>
            </div>

            <p>This is where the opportunity lives for small and mid-size service businesses. You know your local market better than any national competitor. You know the neighborhoods, the common problems, the local regulations, the pricing dynamics. When that knowledge is properly structured and presented on your service pages, AI platforms prefer it over generic national content because it is a better answer to the user&apos;s actual question.</p>

            <p>The challenge is that most local businesses do not know how to translate their deep local expertise into the structured, schema-rich, entity-clear format that AI platforms need. They have the knowledge but not the technical execution. This is precisely where <Link href="/blog/how-to-get-cited-by-chatgpt-local-business">local AI optimization</Link> becomes critical, and why businesses that invest in it now are building a moat that will be very hard for competitors to cross later. <a href="https://theanswerengine.ai/blindspot" className="cta-inline">See your AI visibility score — free.</a></p>

            {/* ── CTA 7 ── */}
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Get your free AI citation score — 48-hour turnaround</a>

            {/* ── TIMELINE/PROCESS ── */}
            <div className="ae-timeline not-prose">
              <div className="ae-timeline-title">How AI Evaluates a Local Service Page</div>
              <div className="ae-timeline-item">
                <div className="ae-timeline-marker">1</div>
                <div className="ae-timeline-content">
                  <h4>Entity Resolution</h4>
                  <p>AI identifies who you are by cross-referencing your page with GBP, directories, and review sites <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book your free consultation here.</a></p>
                </div>
              </div>
              <div className="ae-timeline-item">
                <div className="ae-timeline-marker">2</div>
                <div className="ae-timeline-content">
                  <h4>Location Matching</h4>
                  <p>AI verifies your service area against the user&apos;s query location using structured geo data</p>
                </div>
              </div>
              <div className="ae-timeline-item">
                <div className="ae-timeline-marker">3</div>
                <div className="ae-timeline-content">
                  <h4>Content Depth Scan</h4>
                  <p>AI checks if your page has enough substance to answer the query comprehensively Contact us at <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>
                </div>
              </div>
              <div className="ae-timeline-item">
                <div className="ae-timeline-marker">4</div>
                <div className="ae-timeline-content">
                  <h4>Trust Scoring</h4>
                  <p>AI scores your page based on reviews, credentials, consistency, and recency</p>
                </div>
              </div>
              <div className="ae-timeline-item">
                <div className="ae-timeline-marker">5</div>
                <div className="ae-timeline-content">
                  <h4>Citation Decision</h4>
                  <p>AI either cites your page as the authoritative source or moves to the next candidate Reach us at <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.</p>
                </div>
              </div>
            </div>

            {/* ── SECTION 8: CONTENT DEPTH ── */}
            <span className="ae-section-label">The Depth Factor</span>
            <h2>Why Content Depth Separates Winners From Losers</h2>

            <p>AI platforms are engaged in something fundamentally different from keyword matching. They are synthesizing answers, and synthesis requires raw material. A thin service page gives AI nothing to synthesize from. A deep, comprehensive service page gives AI exactly what it needs: specific claims, verifiable data points, clear expertise signals, and structured information it can extract and reformulate into a direct answer.</p>

            <p>Consider what happens when someone asks Perplexity about a service in your category. Perplexity ties every claim to a specific source in 78% of complex research questions. That means your service page needs to contain citable claims, not just marketing copy. Data points, process explanations, pricing frameworks, geographic details, and expertise demonstrations are all elements that give AI something specific to cite. Vague marketing language gives it nothing. We work with one business per market. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Check if yours is still open.</a></p>

            <p>This does not mean you should publish a 10,000-word wall of text. Content depth is about substance per paragraph, not total volume. Every section of your service page should add a discrete, citable piece of information that AI could potentially extract and use in an answer. If a section does not add new information, it is diluting the page rather than strengthening it.</p>

            {/* ── CALLOUT ── */}
            <div className="ae-callout ae-callout-info not-prose">
              <div className="ae-callout-title">The Content Depth Paradox</div>
              <p>Most businesses think their service pages are comprehensive. Most AI platforms disagree. The gap between what a business owner considers thorough and what AI requires for citation confidence is almost always larger than expected. This is not a critique of the business. It is a reflection of how demanding AI evaluation has become. Find your gaps with a <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free AERO scan.</a></p>
            </div>

            {/* ── CTA 8 ── */}
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Get your free AI citation score — 48-hour turnaround</a>

            {/* ── SECTION 9: TRUST AND CONTENT RELATIONSHIP ── */}
            <span className="ae-section-label">The Trust Layer</span>
            <h2>How AI Builds (or Breaks) Trust in Your Content</h2>

            <p>Trust is the invisible layer that determines whether AI cites your page or skips it. And AI trust works differently than human trust. A human visitor might trust your service page because it looks professional and has testimonials. AI trust is built through verifiable consistency across multiple data sources, not visual design. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Schedule a free call</a> to see where you stand.</p>

            <p>When ChatGPT or Perplexity encounters your service page, the trust evaluation includes checking whether your claims match your Google Business Profile, whether your reviews support your expertise claims, whether other authoritative sites mention your business, and whether your content demonstrates knowledge that only a genuine practitioner would have. Every inconsistency weakens the trust score. Every verified signal strengthens it.</p>

            <p>This is why <Link href="/blog/how-to-create-content-that-chatgpt-actually-trusts">building content that AI trusts</Link> requires a fundamentally different approach than traditional marketing. You are not persuading a human. You are providing evidence to a system that is trained to be skeptical. The businesses that understand this distinction and build their service pages accordingly are the ones getting cited. Send your questions to <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>

            {/* ── MINI STATS ── */}
            <div className="ae-stats-grid not-prose">
              <div className="ae-stat-card">
                <div className="ae-stat-emoji">🏢</div>
                <div className="ae-stat-value ae-accent">30%</div>
                <div className="ae-stat-label">of search interactions now handled by AI (up from under 10% in 2023)</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-emoji">🌐</div>
                <div className="ae-stat-value ae-accent">50%</div>
                <div className="ae-stat-label">of consumers now use AI search intentionally</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-emoji">💬</div>
                <div className="ae-stat-value ae-accent">2B</div>
                <div className="ae-stat-label">queries per day processed by ChatGPT alone</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-emoji">🔗</div>
                <div className="ae-stat-value ae-accent">78%</div>
                <div className="ae-stat-label">of Perplexity answers tie claims to specific sources</div>
              </div>
            </div>

            {/* ── CTA 9 ── */}
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Get your free AI citation score — 48-hour turnaround</a>

            {/* ── SECTION 10: WHAT TO DO (WITHOUT GIVING AWAY THE HOW) ── */}
            <span className="ae-section-label">The Path Forward</span>
            <h2>What Winning Service Pages Get Right</h2>

            <p>The businesses getting consistent AI citations share a set of characteristics that separate their service pages from the 85% that get discarded. These are not secret tactics. They are fundamental content architecture decisions that require deep expertise to execute properly. Call <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> for a free consultation.</p>

            <p>Winning service pages are built on entity clarity: AI can instantly identify who the business is, where it operates, and what specific expertise it brings. They include comprehensive structured data that maps every element of the page to a format AI can parse without guessing. They demonstrate expertise through specific, verifiable claims rather than generic marketing assertions. And they answer the actual questions potential customers are asking AI platforms, not just the keywords they are targeting.</p>

            <p>The challenge is that executing all of this simultaneously requires a specific skill set that combines technical SEO knowledge, content strategy expertise, schema markup implementation, and an understanding of how different AI platforms evaluate and cite content. It is not a single task. It is an integrated optimization that touches every layer of the page. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Claim your market territory — one client per area.</a></p>

            {/* ── CTA 10 ── */}
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Get your free AI citation score — 48-hour turnaround</a>

            {/* ── CHEAT SHEET ── */}
            <div className="ae-cheat-sheet not-prose" id="cheat-sheet">
              <div className="ae-cheat-title">Quick Reference: Service Page AI Visibility Signals</div>
              <div className="ae-cheat-grid">
                <div className="ae-cheat-item">
                  <div className="ae-cheat-icon">🏷️</div>
                  <div className="ae-cheat-text"><strong>Entity Identity:</strong> Business name, team, credentials clearly stated and verifiable</div>
                </div>
                <div className="ae-cheat-item">
                  <div className="ae-cheat-icon">📋</div>
                  <div className="ae-cheat-text"><strong>Schema Markup:</strong> LocalBusiness, Service, FAQPage, and Review schema implemented</div>
                </div>
                <div className="ae-cheat-item">
                  <div className="ae-cheat-icon">📍</div>
                  <div className="ae-cheat-text"><strong>Geographic Specificity:</strong> Named cities, neighborhoods, zip codes in service area</div>
                </div>
                <div className="ae-cheat-item">
                  <div className="ae-cheat-icon">❓</div>
                  <div className="ae-cheat-text"><strong>FAQ Section:</strong> Real customer questions answered with depth and specificity</div>
                </div>
                <div className="ae-cheat-item">
                  <div className="ae-cheat-icon">⭐</div>
                  <div className="ae-cheat-text"><strong>Trust Proof:</strong> Reviews, case studies, certifications with verifiable details</div>
                </div>
                <div className="ae-cheat-item">
                  <div className="ae-cheat-icon">🔄</div>
                  <div className="ae-cheat-text"><strong>Cross-Platform Consistency:</strong> NAP and service descriptions match across all listings</div>
                </div>
                <div className="ae-cheat-item">
                  <div className="ae-cheat-icon">📊</div>
                  <div className="ae-cheat-text"><strong>Content Depth:</strong> Enough substance for AI to extract multiple citable data points</div>
                </div>
                <div className="ae-cheat-item">
                  <div className="ae-cheat-icon">🕐</div>
                  <div className="ae-cheat-text"><strong>Freshness:</strong> Recent update dates, current information, active maintenance signals</div>
                </div>
              </div>
            </div>

            {/* ── CTA 11 ── */}
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Get your free AI citation score — 48-hour turnaround</a>

            {/* ── CTA BLOCK (3-tier with phone/email) ── */}
            <div className="not-prose my-16 p-8 rounded-2xl bg-gradient-to-br from-[#F27D24]/10 to-transparent border border-[#F27D24]/20">
              <h3 className="font-plus-jakarta text-2xl font-bold text-white mb-3">Your Service Pages Are Invisible to AI</h3>
              <p className="text-gray-400 mb-6">Get a free Blind Spot Report and see exactly what AI platforms think about your business.</p>
              <Link href="/blindspot" className="inline-flex items-center gap-2 bg-[#F27D24] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#D96416] transition-colors">
                Get Your Free Blind Spot Report
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
              <div className="flex flex-wrap items-center gap-6 mt-6 pt-6 border-t border-[#F27D24]/10">
                <a href="tel:+12134442229" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  (213) 444-2229
                </a>
                <a href="mailto:support@theanswerengine.ai" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  support@theanswerengine.ai
                </a>
              </div>
            </div>

            {/* ── AUTHOR CARD ── */}
            <div className="ae-author-card">
              <img
                src="/justin-borges.webp"
                alt="Justin Borges, Founder of The Answer Engine"
                style={{ width: 64, height: 64, borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }}
              />
              <div>
                <div className="ae-author-name" style={{ fontWeight: 600 }}>Justin Borges</div>
                <div className="ae-author-role" style={{ fontWeight: 400 }}>Founder, The Answer Engine</div>
                <p style={{ marginTop: 8, fontSize: '0.875rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.6 }}>Justin Borges founded The Answer Engine in 2025 after 13+ years in real estate, $200M+ in production, and discovering that AI search rankings now decide who gets cited as the answer. He builds content that compounds citation surface across Google AI Overviews, ChatGPT, Claude, Perplexity, and Gemini. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a free 30-minute strategy call.</a></p>
              </div>
            </div>

            {/* ── FAQ SECTION ── */}
            <span className="ae-section-label" id="faq">Common Questions</span>
            <h2>Frequently Asked Questions</h2>

            <div className="ae-faq-list not-prose">
              <div className="ae-faq-item">
                <h3 className="ae-faq-question">Why are most service pages invisible to AI search platforms?</h3>
                <p className="ae-faq-answer">Most service pages are invisible because they contain generic copy, lack structured data, provide no unique expertise signals, and fail to answer the specific questions AI platforms need to resolve. AI systems like ChatGPT only cite 15% of pages they retrieve, and thin service pages almost never make the cut.</p>
              </div>
              <div className="ae-faq-item">
                <h3 className="ae-faq-question">What is the difference between a service page that ranks on Google and one that gets cited by AI?</h3>
                <p className="ae-faq-answer">Google ranking depends on backlinks, keyword density, and domain authority. AI citation depends on content depth, entity clarity, trust signals, and structured data. A page can rank #1 on Google and still be completely ignored by ChatGPT, Perplexity, and Google AI Overviews because it lacks the authority signals AI systems require before citing a source. Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> to get started.</p>
              </div>
              <div className="ae-faq-item">
                <h3 className="ae-faq-question">Does schema markup on a service page help with AI citations?</h3>
                <p className="ae-faq-answer">Yes. Schema markup gives AI platforms structured data they can parse instantly. Service pages with proper schema (LocalBusiness, Service, FAQPage, Review) have a significantly higher chance of being cited. Google, Microsoft, and OpenAI have all confirmed they use structured data for their generative AI features.</p>
              </div>
              <div className="ae-faq-item">
                <h3 className="ae-faq-question">How long should a service page be to get cited by AI?</h3>
                <p className="ae-faq-answer">There is no magic word count, but thin pages under 500 words almost never get cited. AI platforms need enough content depth to verify expertise and extract trustworthy answers. The best performing service pages provide comprehensive coverage of the service, answer common questions, and include unique data points or insights. <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a></p>
              </div>
              <div className="ae-faq-item">
                <h3 className="ae-faq-question">Can a small business service page compete with large brands for AI citations?</h3>
                <p className="ae-faq-answer">Yes. AI platforms evaluate content quality and relevance, not just brand size. A small business with a deeply informative, well-structured service page that demonstrates genuine local expertise can outperform a large brand with generic template content. The key is specificity, trust signals, and structured data.</p>
              </div>
              <div className="ae-faq-item">
                <h3 className="ae-faq-question">What trust signals do AI platforms look for on service pages?</h3>
                <p className="ae-faq-answer">AI platforms look for author attribution, business credentials, reviews and ratings, geographic specificity, industry certifications, case studies, and consistent NAP (Name, Address, Phone) data across the web. Pages that demonstrate verifiable expertise get cited far more often than pages with anonymous or generic content.</p>
              </div>
              <div className="ae-faq-item">
                <h3 className="ae-faq-question">Should I optimize my service pages for Google or for AI search?</h3>
                <p className="ae-faq-answer">Both, but with the understanding that they require different strategies. AI Overviews now appear on roughly 48% of tracked queries, and AI search handles approximately 30% of all search interactions. Optimizing only for traditional Google means you are invisible to a growing share of search traffic. The best approach optimizes for both simultaneously.</p>
              </div>
            </div>

            {/* ── CTA 12 ── */}
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Get your free AI citation score — 48-hour turnaround</a>

            {/* ── RELATED ARTICLES ── */}
            <div className="ae-related not-prose">
              <div className="ae-related-title">Related Reading</div>
              <ul>
                <li><Link href="/blog/does-schema-markup-help-ai-search">Does Schema Markup Help You Show Up on AI Search?</Link></li>
                <li><Link href="/blog/how-to-get-cited-by-chatgpt-local-business">How to Get Cited by ChatGPT as a Local Business</Link></li>
                <li><Link href="/blog/how-to-create-content-that-chatgpt-actually-trusts">How to Create Content That ChatGPT Actually Trusts</Link></li>
              </ul>
            </div>

          </div>

          {/* ── FINAL CTA ── */}
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

        </article>
      </main>
    </>
  )
}
