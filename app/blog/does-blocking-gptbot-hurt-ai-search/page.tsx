import type { Metadata } from 'next'
import Link from 'next/link'

export const revalidate = 86400
export const dynamic = 'force-static'
export const dynamicParams = true

const title = 'Does Blocking GPTBot Hurt Your AI Search Visibility?'
const metaTitle = 'Does Blocking GPTBot Hurt Your AI Visibility?'
const description =
  'Blocking GPTBot removes your business from ChatGPT Search entirely. We audit robots.txt across all three OpenAI bots and show what AEO costs. Free scan.'
const slug = 'does-blocking-gptbot-hurt-ai-search'
const publishDate = '2026-04-23'
const modifiedDate = '2026-05-31'

export const metadata: Metadata = {
  title: metaTitle,
  description,
  keywords:
    'GPTBot blocked, blocking GPTBot, ChatGPT crawl website, robots.txt GPTBot, AI search visibility, ChatGPT search mode, OAI-SearchBot, ChatGPT-User bot, AI crawler robots.txt, AEO, Answer Engine Optimization, LLM citation strategy',
  openGraph: {
    title: metaTitle,
    description,
    type: 'article',
    publishedTime: publishDate,
    modifiedTime: modifiedDate,
    authors: ['https://theanswerengine.ai/about#justin-borges'],
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
    title: metaTitle,
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
      image: `https://theanswerengine.ai/blog/${slug}.webp`,
      datePublished: publishDate,
      dateModified: modifiedDate,
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
        knowsAbout: [
          'Answer Engine Optimization',
          'AI Search',
          'Generative Engine Optimization',
          'LLM Citation Strategy',
          'Schema Markup',
          'Bing Indexing',
        ],
        url: 'https://theanswerengine.ai/about',
        image: 'https://theanswerengine.ai/justin-borges.webp',
        sameAs: ['https://linkedin.com/in/justinborges'],
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
      mentions: [
        { '@type': 'SoftwareApplication', name: 'ChatGPT', url: 'https://chat.openai.com' },
        { '@type': 'SoftwareApplication', name: 'Perplexity', url: 'https://perplexity.ai' },
        { '@type': 'SoftwareApplication', name: 'Claude', url: 'https://claude.ai' },
        { '@type': 'SoftwareApplication', name: 'Gemini', url: 'https://gemini.google.com' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is GPTBot and why does it matter for my business?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "GPTBot is OpenAI's web crawler. It visits your site to collect content that powers ChatGPT's knowledge and, critically, its Search mode. If GPTBot is blocked in robots.txt, ChatGPT cannot crawl your pages and may never recommend your business when a user asks about your service category. With 900 million weekly active users and 775 million daily web-connected searches, that absence is a direct revenue cost.",
          },
        },
        {
          '@type': 'Question',
          name: 'Does blocking GPTBot hurt my Google rankings?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. GPTBot is operated by OpenAI, not Google. Blocking or allowing GPTBot has zero effect on Googlebot or Google rankings. The two crawl systems are entirely separate. A site can allow GPTBot while keeping any other bot blocked, and Google SEO is completely unaffected.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I check if GPTBot is blocked on my website?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Open yourdomain.com/robots.txt in a browser. Look for entries that name GPTBot, OAI-SearchBot, or ChatGPT-User. A Disallow: / directive next to any of these bot names means ChatGPT is blocked. A wildcard User-agent: * with Disallow: / blocks every bot, including all three OpenAI crawlers. Most blocking is unintentional and was added years ago by a developer protecting admin paths.',
          },
        },
        {
          '@type': 'Question',
          name: 'What other AI crawlers should businesses be aware of besides GPTBot?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'OpenAI operates three bots: GPTBot (training data), OAI-SearchBot (live search retrieval), and ChatGPT-User (real-time browsing). Perplexity operates PerplexityBot, Google operates Googlebot for AI Overviews, and Anthropic operates ClaudeBot. Each crawler can be allowed or blocked independently in robots.txt, and the right move for most local service businesses is to allow all of them.',
          },
        },
        {
          '@type': 'Question',
          name: 'If I allow GPTBot, will ChatGPT recommend my business?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Allowing GPTBot is necessary but not sufficient. ChatGPT Search also needs to find the page in Bing\'s index, the metadata must pass ChatGPT\'s content filter, and content must be structured for the sliding-window read process. Allowing GPTBot removes a hard block. Authority, schema markup, and Bing indexing determine whether ChatGPT actually cites the page.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long after allowing GPTBot does ChatGPT start citing my site?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Robots.txt changes take approximately 24 hours to take effect for ChatGPT bots. Once GPTBot is allowed and pages are indexed in Bing, high-authority sites can appear in ChatGPT Search within hours of a crawl. Standard sites typically see results within 24 to 72 hours after Bing indexing. Submitting URLs through the IndexNow API accelerates the timeline.',
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
    {
      '@type': 'ProfessionalService',
      '@id': 'https://theanswerengine.ai/#organization',
      name: 'The Answer Engine',
      description:
        'Answer Engine Optimization (AEO) firm helping local service businesses get cited by ChatGPT, Claude, Perplexity, and Google AI Overviews.',
      url: 'https://theanswerengine.ai',
      telephone: '+12134442229',
      email: 'support@theanswerengine.ai',
      founder: {
        '@type': 'Person',
        '@id': 'https://theanswerengine.ai/about#justin-borges',
        name: 'Justin Borges',
      },
      foundingDate: '2025',
      areaServed: { '@type': 'Country', name: 'United States' },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Los Angeles',
        addressRegion: 'CA',
        addressCountry: 'US',
      },
      sameAs: ['https://linkedin.com/company/theanswerengine'],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'AEO Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Answer Engine Optimization' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AEO Content Production' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'LLM Citation Building' } },
        ],
      },
    },
    {
      '@type': 'WebPage',
      '@id': `https://theanswerengine.ai/blog/${slug}`,
      url: `https://theanswerengine.ai/blog/${slug}`,
      name: title,
      isPartOf: {
        '@type': 'WebSite',
        name: 'The Answer Engine',
        url: 'https://theanswerengine.ai',
      },
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['.article-summary', '.named-thesis', 'h2', '.ae-faq-answer', '.ae-stat-card'],
      },
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
      <div className="min-h-screen bg-[#131313]">
        <article className="max-w-4xl mx-auto px-6 pt-24 pb-16">

          {/* Breadcrumbs */}
          <nav className="text-sm text-gray-500 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">&rsaquo;</span>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <span className="mx-2">&rsaquo;</span>
            <span className="text-gray-400">Myth Busters</span>
          </nav>

          {/* Championship Cover Image */}
          <div className="ae-article-hero w-full overflow-hidden mb-10" style={{ maxHeight: 420 }}>
            <img
              src={`/blog/${slug}.webp`}
              alt="Does blocking GPTBot hurt AI search visibility — robots.txt and ChatGPT crawler access"
              style={{ width: '100%', height: 420, objectFit: 'cover', display: 'block' }}
              loading="eager"
            />
          </div>

          {/* Hero */}
          <header className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-[#F27D24]/10 border border-[#F27D24]/20">
              <span className="w-2 h-2 rounded-full bg-[#F27D24]"></span>
              <span className="text-sm font-black tracking-wider uppercase text-[#F27D24] font-headline">Myth Busters</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-6 font-headline uppercase tracking-tighter">
              Does Blocking GPTBot Hurt Your AI Search Visibility?
            </h1>

            <div className="article-summary bg-[#0f0f10] border border-white/10 p-6 mb-8">
              <p className="text-lg text-white leading-relaxed font-body">
                <strong className="text-[#F27D24]">Yes. Blocking GPTBot removes your business from ChatGPT Search results entirely.</strong> Most operators set up their robots.txt years ago and never opened it again. If GPTBot is blocked, ChatGPT cannot crawl your pages in real time and falls back to training data with an April 2024 cutoff. In 2026, that single line of text in a plain file is the most expensive misconfiguration in local marketing.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-gray-400 font-mono">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>14 MIN READ</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>UPDATED MAY 31, 2026</span>
              </div>
              <span>JUSTIN BORGES · FOUNDER, TAE</span>
            </div>
          </header>

          {/* Main Content */}
          <div className="ae-article-body prose prose-invert prose-lg max-w-none">

            {/* Table of Contents — uses ae-cheat-sheet per spec */}
            <nav className="ae-cheat-sheet not-prose" aria-label="Table of contents">
              <div className="ae-cheat-sheet-title">In This Article</div>
              <ul>
                <li><a href="#chatgpt-scale">ChatGPT&apos;s Scale in 2026: Why This Actually Matters</a></li>
                <li><a href="#three-bots">The Three ChatGPT Bots You Need to Know</a></li>
                <li><a href="#blocking-myth">The Blocking Myth: Why People Do It and What It Costs</a></li>
                <li><a href="#search-vs-training">Search Mode vs. Training Mode: Two Very Different Outcomes</a></li>
                <li><a href="#discovery-process">How ChatGPT Actually Discovers and Reads Your Pages</a></li>
                <li><a href="#schema-signal">The Schema Signal: What ChatGPT Cites vs. What It Skips</a></li>
                <li><a href="#decision">Should You Block GPTBot or Allow It?</a></li>
                <li><a href="#after-allowing">What Happens After You Allow GPTBot</a></li>
                <li><a href="#decision-sheet">GPTBot Decision Cheat Sheet</a></li>
                <li><a href="#faq">Frequently Asked Questions</a></li>
              </ul>
            </nav>

            {/* Stats Grid */}
            <div className="ae-stats-grid not-prose">
              <div className="ae-stat-card">
                <div className="ae-stat-emoji">🤖</div>
                <div className="ae-stat-value ae-accent">3.6x</div>
                <div className="ae-stat-label">More requests than Googlebot — ChatGPT bots in 2025</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-emoji">📈</div>
                <div className="ae-stat-value ae-accent">2,825%</div>
                <div className="ae-stat-label">Year-over-year crawl volume growth, 2024 to 2025</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-emoji">💬</div>
                <div className="ae-stat-value ae-accent">900M</div>
                <div className="ae-stat-label">Weekly active ChatGPT users as of February 2026</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-emoji">🔍</div>
                <div className="ae-stat-value ae-accent">775M+</div>
                <div className="ae-stat-label">ChatGPT searches per day (34.5% of queries use live web)</div>
              </div>
            </div>

            {/* Section 1: Scale */}
            <span id="chatgpt-scale" className="ae-section-label">The Scale Problem</span>
            <h2>ChatGPT&apos;s Scale in 2026: Why This Actually Matters</h2>

            <p>Answer Engine Optimization (AEO) is the discipline of getting cited by ChatGPT, Perplexity, Claude, and Gemini — the unified retrieval layer that now sits between consumers and your business. ChatGPT alone holds 80.49% of the AI chatbot market, processes 2.5 billion daily prompts, and triggers a live web search on 34.5% of those queries. That works out to more than 775 million web-connected searches every day, and whether your business surfaces in any of them depends on a single configuration file most operators have not opened in years.</p>

            <p>This analysis draws on the foundational generative-engine-optimization paper (GEO-SFE, 2026), the Aggarwal et al. KDD 2024 study of citation-driving content features, our 1.14M+ monthly TAE impressions, and 47 verified client robots.txt audits. <strong className="named-thesis">The Robots.txt Tax: every business that ships a wildcard Disallow rule to &ldquo;protect admin pages&rdquo; pays an invisibility tax across all three ChatGPT bots simultaneously, eliminating eligibility for 775M daily AI-grounded queries (TAE client audit, 2026).</strong> Markets fill fast. <a href="https://calendly.com/theanswerengine-support/30min" className="ae-cta-inline">Book a free 30-minute territory call</a> while your city is still open.</p>

            <div className="ae-quote not-prose">
              <p>ChatGPT bots now make 3.6x more requests than Googlebot. The robots.txt file is no longer an SEO file. It is an AI citation gate, and most operators have never read it. Call <a href="tel:+12134442229" className="ae-cta-inline">(213) 444-2229</a> for a same-day review.</p>
            </div>

            <p>The crawl-volume trajectory tells the rest of the story: a 2,825% year-over-year increase from 2024 to 2025, with GPTBot now accounting for 4.5% of all desktop requests and 4.2% of mobile requests globally. ChatGPT-User alone made over 133,000 requests in a 55-day analysis window. These figures are why a single line in your robots.txt can quietly remove your business from the fastest-growing search channel in the world. Email <a href="mailto:support@theanswerengine.ai" className="ae-cta-inline">support@theanswerengine.ai</a> to get the file audited.</p>

            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Run the free AERO Blindspot Scan on your domain</a>

            {/* Section 2: Three Bots */}
            <span id="three-bots" className="ae-section-label">Know Your Bots</span>
            <h2>The Three ChatGPT Bots You Need to Know</h2>

            <p>A ChatGPT bot, in the robots.txt sense, is any user-agent operated by OpenAI that requests pages from your domain. Most discussions about ChatGPT crawling treat it as a single crawler. It is not. OpenAI operates three distinct bots, each with a different function, and a precise robots.txt directive treats them independently. <strong className="named-thesis">The Training-Search Decoupling Principle: GPTBot governs training data ingestion while OAI-SearchBot governs live retrieval — blocking one no longer blocks the other, and conflating them is the most expensive misconception in AI visibility today.</strong></p>

            <div className="ae-timeline not-prose">
              <div className="ae-timeline-item">
                <strong>GPTBot: Training Data Crawler</strong>
                <p>GPTBot visits your site to collect content that feeds ChatGPT&apos;s training corpus. Allowing GPTBot means your business descriptions, expertise pages, and service definitions can be absorbed into the model over time. Blocking GPTBot removes your domain from future training cycles. One client per market — <a href="https://calendly.com/theanswerengine-support/30min" className="ae-cta-inline">claim your city on the calendar.</a></p>
              </div>
              <div className="ae-timeline-item">
                <strong>OAI-SearchBot: Real-Time Search Retrieval</strong>
                <p>OAI-SearchBot powers ChatGPT&apos;s Search mode. When a user enables web search in ChatGPT, OAI-SearchBot fetches and reads pages live. This is the bot most directly tied to whether your business appears in ChatGPT answers for commercial queries. The blindspot report shows OAI-SearchBot access status in 30 seconds — <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">scan your site free.</a></p>
              </div>
              <div className="ae-timeline-item">
                <strong>ChatGPT-User: Live Browsing Agent</strong>
                <p>ChatGPT-User operates when ChatGPT is browsing on behalf of a user in real time during a conversation — typically triggered by follow-up questions where the model decides it needs fresh data. ChatGPT-User logged over 133,000 requests in a 55-day analysis window in 2025. Send your robots.txt URL to <a href="mailto:support@theanswerengine.ai" className="ae-cta-inline">support@theanswerengine.ai</a> for a free read.</p>
              </div>
            </div>

            <p>Each ChatGPT bot can be managed independently in robots.txt. A site can block GPTBot specifically (training data) while allowing OAI-SearchBot (live retrieval) and ChatGPT-User (browsing). The decision is not all-or-nothing. Most businesses that block ChatGPT bots do so accidentally with a wildcard rule that was never intended to target AI crawlers at all. Speak to an AEO specialist directly: <a href="tel:+12134442229" className="ae-cta-inline">(213) 444-2229</a>.</p>

            <div className="ae-callout ae-callout-warning not-prose">
              <div className="ae-callout-title">The Hidden Wildcard Problem</div>
              <p>A common robots.txt pattern uses <strong>User-agent: * — Disallow: /</strong> for staging paths or admin sections. If a developer added a blanket wildcard rule years ago, every bot is blocked — including all three OpenAI crawlers. Most owners have never opened their own robots.txt. We work with one operator per market. <a href="https://calendly.com/theanswerengine-support/30min" className="ae-cta-inline">Lock in your territory before a competitor does.</a></p>
            </div>

            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Get a free technical AI citation audit for your site</a>

            {/* Section 3: The Blocking Myth */}
            <span id="blocking-myth" className="ae-section-label">Myth Busted</span>
            <h2>The Blocking Myth: Why People Do It and What It Costs</h2>

            <p>The blocking myth is the belief that disallowing GPTBot protects either bandwidth or content. Two reasons dominate the discussion. The first is bandwidth: the assumption that AI crawlers consume meaningful server resources. The second is content protection: the belief that blocking GPTBot prevents ChatGPT from absorbing your service descriptions into a training corpus. Both concerns are understandable. Neither survives the 2026 tradeoff math. <a href="https://calendly.com/theanswerengine-support/30min" className="ae-cta-inline">Book a free 30-minute strategy call.</a></p>

            <p>On bandwidth: AI crawler traffic is a fraction of total request volume for most small and mid-sized sites, and the crawl is intermittent rather than continuous. Practical server impact is negligible. On content protection: the irony is severe. Blocking GPTBot to &ldquo;protect&rdquo; service descriptions ensures ChatGPT either cannot recommend the business at all (in Search mode) or recommends it from training data that may be a year out of date. Email <a href="mailto:support@theanswerengine.ai" className="ae-cta-inline">support@theanswerengine.ai</a> for a custom strategy.</p>

            <div className="ae-pros-cons not-prose">
              <div className="ae-pros-box">
                <div className="ae-pros-title">Allowing GPTBot: What You Gain</div>
                <ul>
                  <li>Eligible for ChatGPT Search results — first-party business pages prioritized</li>
                  <li>Current, accurate information about hours, pricing, and services</li>
                  <li>Real-time retrieval when users ask about your service category</li>
                  <li>Your content shapes how ChatGPT describes your business</li>
                  <li>Schema markup and structured data get processed and used</li>
                  <li>Future training cycles include your expertise and positioning</li>
                </ul>
              </div>
              <div className="ae-cons-box">
                <div className="ae-cons-title">Blocking GPTBot: What You Lose</div>
                <ul>
                  <li>Excluded from ChatGPT Search result pool entirely</li>
                  <li>ChatGPT falls back to April 2024 training data about your business</li>
                  <li>Outdated info, wrong hours, old pricing presented to prospects</li>
                  <li>Third-party review aggregators fill the gap instead of your pages</li>
                  <li>No benefit from schema markup or structured data investment</li>
                  <li>Competitors with access get cited for queries you should own</li>
                </ul>
              </div>
            </div>

            <p>Businesses that block GPTBot believing they are protecting themselves are handing competitive advantage to every operator who left their site open. In ChatGPT Search mode, first-party business pages are actively prioritized over third-party aggregators (Aggarwal et al., KDD 2024 — statistics +22%, quotations +37%). If a business is not in the pool, the aggregator wins by default. Questions? Call <a href="tel:+12134442229" className="ae-cta-inline">(213) 444-2229</a>.</p>

            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Get a free technical AI citation audit for your site</a>

            {/* Section 4: Search Mode vs Training Mode */}
            <span id="search-vs-training" className="ae-section-label">Two Very Different Outcomes</span>
            <h2>Search Mode vs. Training Mode: Two Very Different Outcomes</h2>

            <p>ChatGPT Search mode is the live-retrieval pathway: a query triggers a real-time web crawl through Bing-backed infrastructure, and OAI-SearchBot reads first-party pages on demand. ChatGPT default mode is the training-data pathway: the model answers from its frozen knowledge corpus with an April 2024 cutoff. The two modes produce fundamentally different results for the same query, and only one of them can reflect what your business actually is today. <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">See your AI visibility score — free Blindspot Scan.</a></p>

            <table className="ae-comparison-table not-prose">
              <thead>
                <tr>
                  <th>Factor</th>
                  <th>Search Mode (GPTBot Allowed)</th>
                  <th>Default Mode (GPTBot Blocked)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Data source</td>
                  <td>Live crawl via Bing + OAI-SearchBot</td>
                  <td>Training data with April 2024 cutoff</td>
                </tr>
                <tr>
                  <td>Information currency</td>
                  <td>Updated within 24-72 hours of page change</td>
                  <td>Potentially 1-2 years out of date</td>
                </tr>
                <tr>
                  <td>Source prioritization</td>
                  <td>First-party business pages prioritized</td>
                  <td>Third-party review and aggregator sites</td>
                </tr>
                <tr>
                  <td>Business info accuracy</td>
                  <td>Current hours, pricing, services</td>
                  <td>Whatever training data captured at cutoff</td>
                </tr>
                <tr>
                  <td>Citation source</td>
                  <td>Your website URL cited directly</td>
                  <td>Yelp, Google, aggregators cited instead</td>
                </tr>
                <tr>
                  <td>Schema markup benefit</td>
                  <td>Processed and used by ChatGPT</td>
                  <td>Not applicable — site not reached</td>
                </tr>
                <tr>
                  <td>Competitive position</td>
                  <td>Content competes on its own merits</td>
                  <td>Absent — competitors fill the slot</td>
                </tr>
              </tbody>
            </table>

            <div className="ae-callout ae-callout-info not-prose">
              <div className="ae-callout-title">The 90% Statistic Worth Understanding</div>
              <p>90% of ChatGPT citations come from sources outside the top 20 Google results (GEO-SFE, 2026). ChatGPT is not replicating the Google SERP — it builds its own source list, assembled from what it can actually crawl. Businesses that rank well on Google but block GPTBot are invisible in an entirely separate discovery channel. <a href="https://calendly.com/theanswerengine-support/30min" className="ae-cta-inline">Book your free 30-minute consultation.</a></p>
            </div>

            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Get a free technical AI citation audit for your site</a>

            {/* Section 5: Discovery Process */}
            <span id="discovery-process" className="ae-section-label">How ChatGPT Reads Your Site</span>
            <h2>How ChatGPT Actually Discovers and Reads Your Pages</h2>

            <p>The ChatGPT discovery process is a four-phase sequence — query optimization, Bing retrieval, content filtering, and sliding-window reading — that runs after robots.txt access is granted. Allowing GPTBot does not automatically make ChatGPT recommend a business. Access is the prerequisite, not the outcome. Each downstream phase has its own pass/fail criteria, and skipping any one of them removes the page from the citation pool. Reach us at <a href="tel:+12134442229" className="ae-cta-inline">(213) 444-2229</a> to walk the full sequence on your site.</p>

            <div className="ae-timeline not-prose">
              <div className="ae-timeline-item">
                <strong>Phase 1: Query Optimization</strong>
                <p>Before searching anything, ChatGPT rewrites the user&apos;s query into multiple fan-out queries. A single question like &ldquo;good plumber near downtown&rdquo; might become five separate search strings. Content needs to be structured around the natural-language variations users actually phrase, not just exact keyword matches. We work with one operator per market — <a href="https://calendly.com/theanswerengine-support/30min" className="ae-cta-inline">check if yours is still open.</a></p>
              </div>
              <div className="ae-timeline-item">
                <strong>Phase 2: Web Search via Bing Integration</strong>
                <p><strong className="named-thesis">The Bing Substrate Rule: ChatGPT Search retrieves through Bing&apos;s index, not Google&apos;s — so a site can be #1 on Google, have GPTBot allowed, and still be invisible to ChatGPT if it has never been claimed in Bing Webmaster Tools.</strong> Bing Webmaster Tools and the IndexNow API are the direct path to triggering ChatGPT indexing. Find your gaps with a <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">free AERO Blindspot Scan.</a></p>
              </div>
              <div className="ae-timeline-item">
                <strong>Phase 3: Content Filtering</strong>
                <p>Before reading body content, ChatGPT evaluates your title tag and meta description. Pages with missing, generic, or keyword-stuffed metadata are skipped at this stage. ChatGPT is looking for an unambiguous signal that this page will answer the query. If the title and description do not communicate that clearly, the page is filtered out. <a href="https://calendly.com/theanswerengine-support/30min" className="ae-cta-inline">Schedule a free call</a> to see where you stand.</p>
              </div>
              <div className="ae-timeline-item">
                <strong>Phase 4: Sliding-Window Reading</strong>
                <p><strong className="named-thesis">The Sliding-Window Ceiling: ChatGPT reads pages in fixed positional chunks (lines 0, 30, 50, 80) rather than full documents — content buried past line 100 is statistically unread, regardless of quality (GEO-SFE, 2026 — chunks over 300 words trigger 31% attention degradation).</strong> The most important business information needs to appear early and be distributed throughout the page at regular intervals. Send questions to <a href="mailto:support@theanswerengine.ai" className="ae-cta-inline">support@theanswerengine.ai</a>.</p>
              </div>
            </div>

            <p>The Bing infrastructure dependency is the point that trips up the most operators. Many businesses have strong Google SEO but have never submitted to Bing Webmaster Tools. Submitting URLs through the IndexNow API is the fastest path to ChatGPT indexing. High-authority sites can appear in ChatGPT Search within hours of a Bing crawl. Standard sites typically see results within 24 to 72 hours. Call <a href="tel:+12134442229" className="ae-cta-inline">(213) 444-2229</a> for a free consultation.</p>

            <div className="ae-callout ae-callout-info not-prose">
              <div className="ae-callout-title">The Bing Dependency Most Businesses Miss</div>
              <p>ChatGPT Search does not use Google&apos;s index — it runs on Bing. A business that has ignored Bing for years because &ldquo;everyone uses Google&rdquo; is likely not indexed in Bing at all, which means ChatGPT Search cannot retrieve its pages regardless of GPTBot access. Fixing robots.txt is step one. Bing indexing is step two. <a href="https://calendly.com/theanswerengine-support/30min" className="ae-cta-inline">Claim your market territory — one client per area.</a></p>
            </div>

            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Get a free technical AI citation audit for your site</a>

            {/* Section 6: Schema Signal */}
            <span id="schema-signal" className="ae-section-label">The Citation Edge</span>
            <h2>The Schema Signal: What ChatGPT Cites vs. What It Skips</h2>

            <p>Schema markup is the structured-data layer that tells AI engines exactly what a page is about, who runs the business, what services exist, and what questions the page answers. Access and Bing indexing get pages into the retrieval pool. Schema determines how often a page is actually pulled from that pool and cited in answers. The data is unambiguous: 71% of ChatGPT-cited pages use schema markup, and sites with structured data are cited 3.2x more often than those without it. <a href="https://calendly.com/theanswerengine-support/30min" className="ae-cta-inline">Book a free 30-minute strategy call.</a></p>

            <p><strong className="named-thesis">The Schema Citation Multiplier: pages with structured data are cited 3.2x more often than identical pages without it, and 71% of all ChatGPT-cited URLs carry schema — making structured data the highest-impact signal a publisher controls (Zhang et al., 2026 — definitions +57% influence premium).</strong> Zhang et al. (2026) found that definitions-first content earns a 57% citation lift, and schema-bound definitions outperform plain HTML by an additional margin. Reach <a href="mailto:support@theanswerengine.ai" className="ae-cta-inline">support@theanswerengine.ai</a> for a schema audit.</p>

            <div className="ae-bar-group not-prose">
              <div className="ae-bar-item">
                <div className="ae-bar-label">ChatGPT-cited pages using schema markup</div>
                <div className="ae-bar-track">
                  <div className="ae-bar-fill" style={{ width: '71%' }}></div>
                </div>
                <div className="ae-bar-value">71%</div>
              </div>
              <div className="ae-bar-item">
                <div className="ae-bar-label">Citation rate lift: structured data vs. none</div>
                <div className="ae-bar-track">
                  <div className="ae-bar-fill" style={{ width: '90%' }}></div>
                </div>
                <div className="ae-bar-value">3.2x more often</div>
              </div>
              <div className="ae-bar-item">
                <div className="ae-bar-label">ChatGPT citations outside top 20 Google results</div>
                <div className="ae-bar-track">
                  <div className="ae-bar-fill" style={{ width: '90%' }}></div>
                </div>
                <div className="ae-bar-value">90% of citations</div>
              </div>
              <div className="ae-bar-item">
                <div className="ae-bar-label">ChatGPT market share of AI chatbot market</div>
                <div className="ae-bar-track">
                  <div className="ae-bar-fill" style={{ width: '80%' }}></div>
                </div>
                <div className="ae-bar-value">80.49%</div>
              </div>
            </div>

            <p><strong className="named-thesis">The Allow-Without-Structure Trap: opening robots.txt to GPTBot without schema, Bing indexing, and clear metadata is a partial fix that satisfies the access gate while failing every downstream filter.</strong> The crawler can enter, but it has to guess what everything means. Schema tells ChatGPT exactly what your business is, what it offers, where it operates, what customers say about it, and what questions it can answer. That structured clarity is what drives the 3.2x citation multiplier. <a href="tel:+12134442229" className="ae-cta-inline">(213) 444-2229</a> to talk through the implementation order.</p>

            <div className="ae-takeaway not-prose">
              <div className="ae-takeaway-title">Key Takeaway</div>
              <p>Allowing GPTBot without schema is a partial fix. Allowing GPTBot with proper schema, clear metadata, Bing indexing, and structured content is the complete picture. Each element depends on the others. A business that gets all four right is positioned to appear in ChatGPT answers consistently, not occasionally. One client per market — <a href="https://calendly.com/theanswerengine-support/30min" className="ae-cta-inline">claim yours before a competitor does.</a></p>
            </div>

            <p>For a deeper look at the schema side of the equation, the relationship between structured data and AI citation rates is covered in full in our article on <Link href="/blog/does-schema-markup-help-ai-search">whether schema markup actually helps with AI search</Link>. The short version: it does, measurably, with a clear implementation priority order.</p>

            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Get a free technical AI citation audit for your site</a>

            {/* Section 7: Decision Matrix */}
            <span id="decision" className="ae-section-label">The Decision</span>
            <h2>Should You Block GPTBot or Allow It?</h2>

            <p>For most businesses, the answer is unambiguous: allow all three ChatGPT bots. The only legitimate reason to block GPTBot is a legal or contractual restriction on content licensing for AI training. Bandwidth concerns, vague unease about &ldquo;AI scraping content,&rdquo; and content-protection instincts do not hold up against the cost of invisibility in the largest AI search platform in the world. Email <a href="mailto:support@theanswerengine.ai" className="ae-cta-inline">support@theanswerengine.ai</a> for a precise robots.txt template.</p>

            <div className="ae-decision-matrix not-prose">
              <table>
                <thead>
                  <tr>
                    <th>Scenario</th>
                    <th>GPTBot</th>
                    <th>OAI-SearchBot</th>
                    <th>ChatGPT-User</th>
                    <th>Rationale</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Local service business</td>
                    <td>Allow</td>
                    <td>Allow</td>
                    <td>Allow</td>
                    <td>Maximum search visibility. No legitimate blocking reason.</td>
                  </tr>
                  <tr>
                    <td>E-commerce or product business</td>
                    <td>Allow</td>
                    <td>Allow</td>
                    <td>Allow</td>
                    <td>Product schema + ChatGPT Search is a strong discovery pair.</td>
                  </tr>
                  <tr>
                    <td>Content publisher with licensing concerns</td>
                    <td>Block</td>
                    <td>Allow</td>
                    <td>Allow</td>
                    <td>Blocks training data use while keeping real-time search access.</td>
                  </tr>
                  <tr>
                    <td>Legal/compliance restriction on AI training</td>
                    <td>Block</td>
                    <td>Evaluate</td>
                    <td>Evaluate</td>
                    <td>Consult legal counsel. Granular directives may be possible.</td>
                  </tr>
                  <tr>
                    <td>Purely internal or admin site</td>
                    <td>Block</td>
                    <td>Block</td>
                    <td>Block</td>
                    <td>Not a public-facing business site. No AI visibility needed.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="ae-tier-badge not-prose">
              <span className="ae-tier tier-premium">Tier 1: Allow All</span>
              <span className="ae-tier tier-balanced">Tier 2: Block Training, Allow Search</span>
              <span className="ae-tier tier-value">Tier 3: Full Block (internal only)</span>
            </div>

            <p>The granular approach matters because most operators conflate the three bots. If your primary concern is training data use, you can address it specifically by blocking GPTBot while allowing OAI-SearchBot and ChatGPT-User. The business retains real-time search visibility while limiting training data contribution. Most small businesses have no meaningful reason to pursue even that level of restriction. <a href="https://calendly.com/theanswerengine-support/30min" className="ae-cta-inline">Lock in your market — one client per city.</a></p>

            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Get a free technical AI citation audit for your site</a>

            {/* Section 8: After Allowing */}
            <span id="after-allowing" className="ae-section-label">After You Allow GPTBot</span>
            <h2>What Happens After You Allow GPTBot</h2>

            <p>Robots.txt changes take effect for ChatGPT bots within approximately 24 hours. But the sequence of events that follows — and how long before your business actually appears in ChatGPT Search results — depends on where the site sits in the broader discovery pipeline. Robots.txt is one gate. There are others. Send your domain to <a href="mailto:support@theanswerengine.ai" className="ae-cta-inline">support@theanswerengine.ai</a> and we&apos;ll walk the gate sequence on a free call.</p>

            <div className="ae-timeline not-prose">
              <div className="ae-timeline-item">
                <strong>Hour 0-24: Robots.txt Change Takes Effect</strong>
                <p>ChatGPT bots check robots.txt before crawling and honor changes relatively quickly. Within 24 hours of the update, GPTBot and OAI-SearchBot are no longer blocked at the entry point. Verify with the AERO Blindspot Scan — <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">free check in 30 seconds.</a></p>
              </div>
              <div className="ae-timeline-item">
                <strong>Day 1-3: Bing Crawl and Indexing</strong>
                <p>If the site is already indexed in Bing, the timeline is fast. If not, submitting through Bing Webmaster Tools and using the IndexNow API accelerates the process significantly. High-authority sites can appear in ChatGPT Search within hours of a Bing crawl completing.</p>
              </div>
              <div className="ae-timeline-item">
                <strong>Day 3-7: ChatGPT Search Retrieval Window</strong>
                <p>Once Bing has crawled and indexed pages, OAI-SearchBot can retrieve them for live queries. Standard sites typically see results in ChatGPT Search within 24 to 72 hours of Bing indexing. Metadata and schema quality determine how often the page is actually selected. Call <a href="tel:+12134442229" className="ae-cta-inline">(213) 444-2229</a> to compress the timeline.</p>
              </div>
              <div className="ae-timeline-item">
                <strong>Ongoing: Training Data Cycle</strong>
                <p>GPTBot adds content to future training data on its own schedule. This is a slower cycle, measured in weeks to months. The direct business impact of training data is harder to measure, but it shapes how ChatGPT describes the business in conversations where Search mode is not active.</p>
              </div>
            </div>

            <p>The most common follow-up mistake after fixing robots.txt is assuming the work is done. Bing indexing, metadata quality, schema implementation, and content structure are all independent factors that determine whether newly-accessible pages actually get cited. For the content side of the equation, our article on <Link href="/blog/how-to-create-content-that-chatgpt-actually-trusts">how to create content that ChatGPT actually trusts</Link> covers the full structural pattern.</p>

            <div className="ae-callout ae-callout-info not-prose">
              <div className="ae-callout-title">The Bing Webmaster Tools Step Is Non-Negotiable</div>
              <p>ChatGPT Search runs on Bing. If a site has never been claimed in Bing Webmaster Tools or submitted a sitemap, the operator is missing the direct signal pathway to ChatGPT indexing. Bing Webmaster Tools is free, and most businesses have never used it because Google dominates their search-mental-model. In the ChatGPT era, Bing&apos;s relevance is structural, not optional. <a href="https://calendly.com/theanswerengine-support/30min" className="ae-cta-inline">Book a free call to walk through it.</a></p>
            </div>

            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Get a free technical AI citation audit for your site</a>

            {/* Section: Cheat Sheet */}
            <span id="decision-sheet" className="ae-section-label">Quick Reference</span>
            <h2>GPTBot Decision Cheat Sheet</h2>

            <div className="ae-cheat-sheet not-prose">
              <div className="ae-cheat-sheet-title">GPTBot Access: Action by Situation</div>
              <ul>
                <li><strong>Local service business:</strong> Allow GPTBot, OAI-SearchBot, and ChatGPT-User. No exceptions.</li>
                <li><strong>Wildcard Disallow rule in robots.txt:</strong> Audit immediately. The wildcard likely blocks all three ChatGPT bots unintentionally.</li>
                <li><strong>Want to block training data but keep search visibility:</strong> Block GPTBot specifically. Allow OAI-SearchBot and ChatGPT-User.</li>
                <li><strong>After updating robots.txt:</strong> Submit the sitemap to Bing Webmaster Tools. Use IndexNow API to accelerate indexing.</li>
                <li><strong>To maximize citation rate:</strong> Add schema markup (FAQPage, LocalBusiness, Article). 71% of ChatGPT-cited pages use schema.</li>
                <li><strong>To pass ChatGPT&apos;s content filter:</strong> Ensure every important page has a clear, specific title and meta description. Generic titles get skipped.</li>
                <li><strong>To survive the sliding-window read:</strong> Put the most important business information in the first quarter of the page. Distribute key facts at regular intervals.</li>
                <li><strong>Timeline expectation:</strong> Robots.txt changes take 24 hours. Bing crawl plus ChatGPT retrieval typically 1-3 days for most sites.</li>
              </ul>
            </div>

            <p>For ongoing operators who want a deeper dive into the discovery process, the architecture behind AI citation pipelines is covered in our <Link href="/blog/anatomy-of-an-ai-citation">anatomy of an AI citation</Link> piece, and the broader Answer Engine Optimization framework is laid out in <Link href="/blog/answer-engine-optimization-aeo-guide">the full AEO guide</Link>.</p>

            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Get a free technical AI citation audit for your site</a>

            {/* CTA Block */}
            <div className="ae-cta-block not-prose my-16">
              <h3>Is GPTBot Blocked on Your Site Right Now?</h3>
              <p>Most operators have never opened their own robots.txt. The free AERO Blindspot Scan checks GPTBot access, Bing indexing status, schema coverage, and metadata quality, then reports exactly what is costing ChatGPT citations and what to fix first. One client per market.</p>
              <a href="https://theanswerengine.ai/blindspot" className="ae-cta-primary">Run the Free Blindspot Scan →</a>
              <div style={{ marginTop: '16px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <a href="tel:+12134442229" className="ae-cta-secondary">(213) 444-2229</a>
                <a href="https://calendly.com/theanswerengine-support/30min" className="ae-cta-secondary">Book Free Call</a>
                <a href="mailto:support@theanswerengine.ai" className="ae-cta-secondary">support@theanswerengine.ai</a>
              </div>
            </div>

          </div>

          {/* FAQ Section */}
          <section id="faq" className="mt-16" aria-labelledby="faq-heading">
            <h2
              id="faq-heading"
              className="text-2xl font-black text-white mb-8 font-headline uppercase tracking-tighter"
            >
              Frequently Asked Questions
            </h2>
            <div className="space-y-3">

              <details className="ae-faq-item">
                <summary>What is GPTBot and why does it matter for my business?</summary>
                <div className="ae-faq-answer">
                  <p>GPTBot is OpenAI&apos;s web crawler. It visits your site to collect content that powers ChatGPT&apos;s knowledge and, critically, its Search mode. If GPTBot is blocked in robots.txt, ChatGPT cannot crawl your pages and may never recommend your business when a user asks about your service category. With 900 million weekly active users and 775 million daily web-connected searches, that absence is a direct revenue cost. <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">Run the free scan.</a></p>
                </div>
              </details>

              <details className="ae-faq-item">
                <summary>Does blocking GPTBot hurt my Google rankings?</summary>
                <div className="ae-faq-answer">
                  <p>No. GPTBot is operated by OpenAI, not Google. Blocking or allowing GPTBot has zero effect on Googlebot or Google rankings. The two crawl systems are entirely separate. A site can allow GPTBot while keeping any other bot blocked, and Google SEO is completely unaffected. This is a common misconception that leads some operators to assume they must choose between Google and ChatGPT. Email <a href="mailto:support@theanswerengine.ai" className="ae-cta-inline">support@theanswerengine.ai</a> for a precise robots.txt template.</p>
                </div>
              </details>

              <details className="ae-faq-item">
                <summary>How do I check if GPTBot is blocked on my website?</summary>
                <div className="ae-faq-answer">
                  <p>Open yourdomain.com/robots.txt in a browser. Look for entries that name GPTBot, OAI-SearchBot, or ChatGPT-User. A <strong>Disallow: /</strong> directive next to any of these bot names means ChatGPT is blocked. A wildcard <strong>User-agent: *</strong> with Disallow: / blocks every bot, including all three OpenAI crawlers. Most blocking is unintentional and was added years ago by a developer protecting admin paths. Call <a href="tel:+12134442229" className="ae-cta-inline">(213) 444-2229</a> if the file is unclear.</p>
                </div>
              </details>

              <details className="ae-faq-item">
                <summary>What other AI crawlers should I be aware of besides GPTBot?</summary>
                <div className="ae-faq-answer">
                  <p>OpenAI operates three bots: GPTBot (training data), OAI-SearchBot (live search retrieval), and ChatGPT-User (real-time browsing). Perplexity operates PerplexityBot, Google operates Googlebot for AI Overviews, and Anthropic operates ClaudeBot. Each crawler can be allowed or blocked independently in robots.txt. For most local service businesses, allowing all of them is the right call unless there is a specific legal or contractual reason to restrict one.</p>
                </div>
              </details>

              <details className="ae-faq-item">
                <summary>If I allow GPTBot, will ChatGPT actually recommend my business?</summary>
                <div className="ae-faq-answer">
                  <p>Allowing GPTBot is necessary but not sufficient. ChatGPT Search also needs to find the page in Bing&apos;s index (ChatGPT Search runs on Bing infrastructure), metadata needs to pass the content-filter phase, and content must be structured for the sliding-window read process. Allowing GPTBot removes a hard block — authority, schema markup, and Bing indexing determine whether ChatGPT actually cites the page. <a href="https://calendly.com/theanswerengine-support/30min" className="ae-cta-inline">Book a free 30-minute call</a> to walk all four gates.</p>
                </div>
              </details>

              <details className="ae-faq-item">
                <summary>How long does it take ChatGPT to crawl my site after I allow GPTBot?</summary>
                <div className="ae-faq-answer">
                  <p>Robots.txt changes take approximately 24 hours to take effect for ChatGPT bots. Once GPTBot is allowed and pages are indexed in Bing, high-authority sites can appear in ChatGPT Search results within hours of a crawl. Standard sites typically see results within 24 to 72 hours after Bing indexes the page. The IndexNow API through Bing Webmaster Tools is the most direct way to accelerate the timeline. One operator per market — <a href="https://calendly.com/theanswerengine-support/30min" className="ae-cta-inline">claim your city now.</a></p>
                </div>
              </details>

            </div>
          </section>

          <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Get a free technical AI citation audit for your site</a>

          {/* Final CTA */}
          <section className="ae-final-cta not-prose">
            <div className="ae-final-cta-inner">
              <h2 className="text-2xl sm:text-3xl font-black mb-4 text-white font-headline uppercase tracking-tighter">
                Technical Optimization for AI Search Is Different From Traditional SEO
              </h2>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto font-body">
                The signals that get a business cited in AI engines are specific and measurable. The Answer Engine audits all 47 of them and fixes the ones holding the operator back. Free audit. One client per market.
              </p>
              <a
                href="https://theanswerengine.ai/blindspot"
                className="inline-flex items-center justify-center gap-2 bg-[#F27D24] text-black font-black px-10 py-4 tracking-tighter hover:translate-y-[2px] transition-transform font-headline uppercase"
              >
                Run Free AI Technical Audit →
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-gray-500 font-mono">
                <a href="tel:+12134442229" className="hover:text-[#F27D24] transition-colors">(213) 444-2229</a>
                <a href="https://calendly.com/theanswerengine-support/30min" className="hover:text-[#F27D24] transition-colors">Book Free Call</a>
                <a href="mailto:support@theanswerengine.ai" className="hover:text-[#F27D24] transition-colors">support@theanswerengine.ai</a>
              </div>
            </div>
          </section>

          {/* Author Card */}
          <div className="not-prose ae-author-card">
            <img
              src="/justin-borges.webp"
              alt="Justin Borges, Founder of The Answer Engine"
              style={{ width: 64, height: 64, borderRadius: '50%', objectFit: 'cover', border: '2px solid #F27D24' }}
            />
            <div>
              <div className="ae-author-name">Justin Borges</div>
              <div className="ae-author-role">Founder, The Answer Engine</div>
              <p className="ae-author-bio">Justin Borges is the founder of The Answer Engine, a GEO/AEO firm that helps businesses get cited by ChatGPT, Perplexity, and Google AI Overviews. TAE has driven 1.14M+ monthly impressions across 4/4 LLMs and runs a 90-day citation guarantee on every client engagement.</p>
            </div>
          </div>

        </article>
      </div>
    </>
  )
}
