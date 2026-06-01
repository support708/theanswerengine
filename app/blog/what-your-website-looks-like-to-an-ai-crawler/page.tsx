import type { Metadata } from 'next'
import Link from 'next/link'

export const revalidate = 86400
export const dynamic = 'force-static'
export const dynamicParams = true

const title = 'What Your Website Looks Like to an AI Crawler'
const titleWithSuffix = `${title} | The Answer Engine`
const description =
  'AI crawlers like GPTBot and ClaudeBot see a stripped-down version of your site. Learn what gets lost, what gets found, and why it matters for AI visibility.'
const slug = 'what-your-website-looks-like-to-an-ai-crawler'
const publishDate = '2026-04-02'

export const metadata: Metadata = {
  title: titleWithSuffix,
  description,
  keywords: [
    'AI crawler website view',
    'GPTBot what it sees',
    'ClaudeBot crawling',
    'PerplexityBot website',
    'AI crawler vs Googlebot',
    'JavaScript rendering AI crawlers',
    'robots.txt AI bots',
    'structured data AI search',
    'AI crawler HTML parsing',
    'answer engine optimization crawlers',
  ],
  openGraph: {
    title: titleWithSuffix,
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
    title: titleWithSuffix,
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
          name: 'What does my website look like to an AI crawler?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'AI crawlers see only the raw HTML your server returns on the initial request. They do not execute JavaScript, load images, render CSS, or interact with your page. If your content depends on client-side rendering, pop-ups, tabs, or infinite scroll, that content is invisible to AI platforms like ChatGPT, Perplexity, and Claude.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do AI crawlers see JavaScript content on my website?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. AI crawlers like GPTBot, ClaudeBot, and PerplexityBot do not execute JavaScript. They parse only the static HTML from the initial server response. A React or Angular single-page application that loads content after JavaScript execution is effectively blank to these crawlers, even if it ranks well on Google.',
          },
        },
        {
          '@type': 'Question',
          name: 'How is GPTBot different from Googlebot?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Googlebot uses a two-phase rendering pipeline that executes JavaScript using headless Chrome. GPTBot skips JavaScript entirely, processes only raw HTML, and has much shorter timeout windows of 1 to 5 seconds. Googlebot retries failed pages. GPTBot moves on permanently. A site can rank number one on Google while being completely invisible to ChatGPT.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I block AI crawlers with robots.txt?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You can add directives to robots.txt to request that AI crawlers like GPTBot or ClaudeBot not access your site. However, robots.txt is a voluntary protocol. Some crawlers may ignore it. More importantly, blocking AI crawlers also blocks your business from appearing in AI-generated answers and recommendations, which is a growing source of customer discovery.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does structured data help AI crawlers understand my website?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. JSON-LD schema markup gives AI crawlers machine-readable context about your business, services, location, hours, and FAQs. While AI crawlers can parse plain text, structured data removes ambiguity and increases the likelihood that your information appears accurately in AI-generated answers.',
          },
        },
        {
          '@type': 'Question',
          name: 'How many AI crawler bots are there?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'There are dozens of known AI crawlers, but the five that matter most for business visibility are GPTBot (OpenAI/ChatGPT), ClaudeBot (Anthropic/Claude), PerplexityBot (Perplexity AI), Google-Extended (Google Gemini), and Bingbot (Microsoft Copilot). These crawlers account for roughly 95% of all AI crawler traffic on the web.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why is my website invisible to ChatGPT even though it ranks on Google?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Google and ChatGPT use completely different crawling systems. Googlebot renders JavaScript and indexes the fully rendered page. GPTBot reads only raw HTML and has a much shorter timeout window. Your site may also be accidentally blocking GPTBot via robots.txt, returning slow server responses, or relying on JavaScript for critical content.',
          },
        },
        {
          '@type': 'Question',
          name: 'How often do AI crawlers visit my website?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'AI crawlers visit far less frequently than Googlebot. GPTBot may only crawl a page once every few weeks unless it considers the page high-value. ClaudeBot tends to check homepages more frequently to assess brand positioning. PerplexityBot crawls for real-time search results and may visit more often for trending topics.',
          },
        },
      ],
    },
    {
      '@type': 'Organization',
      name: 'The Answer Engine',
      url: 'https://theanswerengine.ai',
      description:
        'AI search visibility agency helping businesses get discovered by ChatGPT, Perplexity, Claude, and Google AI.',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-213-444-2229',
        contactType: 'sales',
        email: 'support@theanswerengine.ai',
      },
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
          item: `https://www.theanswerengine.ai/blog/${slug}`,
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
        {/* SVG Pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none" aria-hidden="true">
          <defs>
            <pattern id="hero-grid-123" width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M0 32V0h32" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid-123)" />
        </svg>

        <article className="max-w-4xl mx-auto px-6 py-12 sm:py-20 relative">
          {/* Breadcrumbs */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">&rsaquo;</span>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <span className="mx-2">&rsaquo;</span>
            <span className="text-gray-400">What Your Website Looks Like to an AI Crawler</span>
          </nav>
          {/* Championship Cover Image */}
          <div className="ae-article-hero w-full rounded-xl overflow-hidden mb-10" style={{ maxHeight: 420 }}>
            <img
              src="/blog/what-your-website-looks-like-to-an-ai-crawler.webp"
              alt="what your website looks like to an ai crawler"
              style={{ width: '100%', height: 420, objectFit: 'cover', display: 'block' }}
              loading="eager"
            />
          </div>

          {/* Header */}
          <header className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl mb-6 bg-white/[0.04] border border-white/[0.08]">
              <span className="text-sm font-semibold tracking-wider uppercase text-white">AEO Education</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-white leading-tight font-plus-jakarta">
              What Your Website Looks Like to an AI Crawler
            </h1>

            <div className="bg-gradient-to-br from-white/[0.02] to-white/[0.02] border border-white/[0.08] rounded-xl p-6 mb-8">
              <p className="text-lg text-white leading-relaxed">
                <strong>Your customers see a polished, interactive website. AI crawlers see something completely different.</strong> GPTBot, ClaudeBot, and PerplexityBot strip away your design, ignore your JavaScript, and parse only the raw HTML your server returns. If your most important content lives behind interactive elements, client-side rendering, or slow-loading scripts, it does not exist in the AI world.
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
                <span>April 2, 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>Justin Borges</span>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <div className="prose prose-invert prose-lg max-w-none prose-headings:font-plus-jakarta prose-headings:text-white prose-p:text-gray-300 prose-a:text-[#F27D24] prose-a:no-underline hover:prose-a:underline prose-strong:text-white">

            {/* Stats Grid */}
            <div className="ae-stats-grid not-prose">
              <div className="ae-stat-card">
                <div className="ae-stat-value ae-accent">6,900%</div>
                <div className="ae-stat-label">Growth in AI crawler traffic year over year (2025)</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-value ae-accent">0%</div>
                <div className="ae-stat-label">JavaScript execution by GPTBot, ClaudeBot, and PerplexityBot</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-value ae-accent">79%</div>
                <div className="ae-stat-label">Major news publishers blocking AI training crawlers</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-value ae-accent">1-5s</div>
                <div className="ae-stat-label">Timeout window before AI crawlers abandon your page</div>
              </div>
            </div>

            {/* Table of Contents */}
            <div className="ae-toc not-prose">
              <h3>In This Article</h3>
              <ul>
                <li><a href="#the-ai-view">What AI Crawlers Actually See on Your Website</a></li>
                <li><a href="#human-vs-ai">Human View vs. AI Crawler View: A Side-by-Side Comparison</a></li>
                <li><a href="#five-crawlers">The Five AI Crawlers That Matter for Your Business</a></li>
                <li><a href="#javascript-gap">The JavaScript Rendering Gap</a></li>
                <li><a href="#robots-txt">The robots.txt Dilemma: Blocking vs. Welcoming AI Bots</a></li>
                <li><a href="#structured-data">How Structured Data Changes What AI Crawlers Understand</a></li>
                <li><a href="#hidden-content">Seven Types of Content AI Crawlers Cannot See</a></li>
                <li><a href="#static-vs-js">Static HTML vs. JavaScript-Heavy Sites for AI</a></li>
                <li><a href="#cheat-sheet">AI Crawler Visibility Cheat Sheet</a></li>
                <li><a href="#faq">Frequently Asked Questions</a></li>
              </ul>
            </div>

            {/* Section 1 */}
            <span className="ae-section-label" id="the-ai-view">The AI View</span>
            <h2>What AI Crawlers Actually See on Your Website</h2>

            <p>When a potential customer visits your website, they see your logo, your hero image, your interactive pricing calculator, your testimonials slider, and your carefully designed call-to-action buttons. They experience the brand you spent thousands of dollars building.</p>

            <p>When GPTBot visits that same page, it sees none of that. It sends an HTTP request, receives the raw HTML your server returns, parses the text content, and moves on. No images render. No CSS loads. No JavaScript executes. The entire experience of your website is reduced to a document of plain text and HTML tags. Markets fill fast. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Check your territory availability.</a></p>

            <p>This is not a limitation. It is by design. AI crawlers like GPTBot (OpenAI), ClaudeBot (Anthropic), and PerplexityBot (Perplexity AI) are built for speed and scale, not for rendering web pages. OpenAI&apos;s GPTBot alone generated <strong>569 million requests</strong> across Vercel&apos;s network in a single month. Anthropic&apos;s ClaudeBot followed with 370 million. Processing that volume with a full rendering engine would be computationally prohibitive.</p>

            <p>The result: there is a massive gap between what your customers see and what AI platforms see. And if your most important business information lives in the gap, you are invisible to the fastest-growing discovery channel on the internet. Your first step: <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free AERO Blind Spot Scan.</a></p>

            <div className="ae-callout not-prose">
              <p>Think of it this way: your website has two audiences now. Human visitors who experience the full interactive version, and AI crawlers who read a stripped-down text document. Most businesses optimize exclusively for the first audience and never consider the second.</p>
            </div>

            {/* CTA 1 */}
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Get your free AI citation score — 48-hour turnaround</a>

            {/* Section 2 */}
            <span className="ae-section-label" id="human-vs-ai">The Comparison</span>
            <h2>Human View vs. AI Crawler View: A Side-by-Side Comparison</h2>

            <p>The easiest way to understand the AI crawler perspective is to compare it directly with the human experience. Here is what happens when a human visitor and an AI crawler visit the same business website.</p>

            {/* Comparison Table */}
            <div className="ae-comparison-table not-prose">
              <table>
                <thead>
                  <tr>
                    <th>Website Element</th>
                    <th>What a Human Sees</th>
                    <th>What an AI Crawler Sees</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Hero Section</td>
                    <td>Full-width image, animated headline, CTA button</td>
                    <td>Raw text of the headline (if server-rendered). Image alt text only.</td>
                  </tr>
                  <tr>
                    <td>Navigation Menu</td>
                    <td>Dropdown menus, hover effects, mobile hamburger</td>
                    <td>A flat list of anchor tags and their href URLs</td>
                  </tr>
                  <tr>
                    <td>Service Descriptions</td>
                    <td>Tabbed interface with click-to-reveal content</td>
                    <td>Only the default tab content. Hidden tabs are invisible.</td>
                  </tr>
                  <tr>
                    <td>Testimonials</td>
                    <td>Animated carousel with photos and star ratings</td>
                    <td>Only the first testimonial if it loads via HTML. None if loaded via JavaScript.</td>
                  </tr>
                  <tr>
                    <td>Pricing</td>
                    <td>Interactive calculator or toggle (monthly/annual)</td>
                    <td>Nothing. Calculator output requires JavaScript execution.</td>
                  </tr>
                  <tr>
                    <td>Contact Info</td>
                    <td>Google Map embed, clickable phone, contact form</td>
                    <td>Phone number and address text (if in HTML). Map embed is invisible.</td>
                  </tr>
                  <tr>
                    <td>FAQ Section</td>
                    <td>Accordion with expand/collapse animations</td>
                    <td>Only visible answers if content is in HTML. Collapsed content is often hidden.</td>
                  </tr>
                  <tr>
                    <td>Reviews Widget</td>
                    <td>Third-party review badge showing rating and count</td>
                    <td>Nothing. Third-party widgets load via JavaScript iframes.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>Every row in that table represents a potential blind spot. Your business might have 50 five-star reviews, an award-winning service page, and competitive pricing. But if those elements load through JavaScript, iframes, or interactive widgets, AI crawlers see none of it. They build their understanding of your business based on whatever plain text exists in the initial HTML response. Reach out: <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>

            <p>This is why businesses that <Link href="/blog/why-new-website-invisible-to-ai">recently rebuilt their websites</Link> with modern JavaScript frameworks often become less visible to AI platforms, not more. The upgrade that improved the human experience simultaneously degraded the AI crawler experience.</p>

            {/* CTA 2 */}
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Get your free AI citation score — 48-hour turnaround</a>

            {/* Section 3 */}
            <span className="ae-section-label" id="five-crawlers">The Crawlers</span>
            <h2>The Five AI Crawlers That Matter for Your Business</h2>

            <p>There are dozens of AI crawlers active on the web today. Verified AI agent traffic grew <strong>over 6,900% year-over-year</strong> in 2025 according to HUMAN Security. But for business visibility, five crawlers account for roughly 95% of all AI crawler traffic that matters.</p>

            {/* Decision Matrix */}
            <div className="ae-decision-matrix not-prose">
              <h3>AI Crawler Comparison: Who Is Visiting Your Website</h3>
              <table>
                <thead>
                  <tr>
                    <th>Crawler</th>
                    <th>Operated By</th>
                    <th>Purpose</th>
                    <th>JavaScript?</th>
                    <th>Respects robots.txt?</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>GPTBot</td>
                    <td>OpenAI</td>
                    <td>Training data + ChatGPT search</td>
                    <td>No</td>
                    <td>Yes</td>
                  </tr>
                  <tr>
                    <td>ClaudeBot</td>
                    <td>Anthropic</td>
                    <td>Training data collection</td>
                    <td>No</td>
                    <td>Yes</td>
                  </tr>
                  <tr>
                    <td>PerplexityBot</td>
                    <td>Perplexity AI</td>
                    <td>Real-time search indexing</td>
                    <td>No</td>
                    <td>Partial (stealth crawlers observed)</td>
                  </tr>
                  <tr>
                    <td>Google-Extended</td>
                    <td>Google</td>
                    <td>Gemini AI training</td>
                    <td>No (separate from Googlebot)</td>
                    <td>Yes</td>
                  </tr>
                  <tr>
                    <td>Bingbot</td>
                    <td>Microsoft</td>
                    <td>Copilot AI integration</td>
                    <td>Limited</td>
                    <td>Yes</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>Each of these crawlers behaves differently. GPTBot is known for thoroughness, often crawling many pages in a single session. ClaudeBot tends to check homepages more frequently to assess brand positioning. PerplexityBot focuses on retrieving content for real-time search results rather than training data. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Lock in your exclusive territory now.</a></p>

            <p>But they all share one critical trait: <strong>none of them execute JavaScript</strong>. While ChatGPT and Claude crawlers do fetch JavaScript files (ChatGPT at 11.5% and Claude at 23.8% of requests), they fetch them without executing them. They cannot read the output of your client-side rendered content.</p>

            <div className="ae-quote not-prose">
              <p>A website built on React, Vue, or Angular can rank number one on Google while being completely invisible to ChatGPT. Google renders your JavaScript. AI crawlers do not. <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Get your free AI readiness report.</a></p>
            </div>

            <p>Understanding how each platform&apos;s crawler works is the foundation of <Link href="/blog/how-ai-platforms-choose-businesses-to-cite">how AI platforms choose which businesses to cite</Link> in their answers.</p>

            {/* CTA 3 */}
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Get your free AI citation score — 48-hour turnaround</a>

            {/* Section 4 */}
            <span className="ae-section-label" id="javascript-gap">The Rendering Gap</span>
            <h2>The JavaScript Rendering Gap: Why Modern Websites Disappear</h2>

            <p>Google invested years building a rendering pipeline that executes JavaScript. Googlebot uses a two-phase system: first, it grabs your HTML and static files. Then, it queues your page for rendering using headless Chrome that actually runs your JavaScript code. Even with this sophisticated system, the median rendering delay is 10 seconds, and at the 99th percentile it reaches 18 hours.</p>

            <p>AI crawlers skip this entire process. When GPTBot visits a single-page application, it sends an HTTP request, downloads whatever HTML the server returns, and moves on. It does not execute JavaScript. It does not wait for components to mount. It does not wait for API calls to resolve. Drop us a line at <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>

            <p>The practical consequence is severe. Every interactive element on your website that requires JavaScript is invisible to AI platforms.</p>

            {/* Timeline */}
            <div className="ae-timeline not-prose">
              <div className="ae-timeline-item">
                <strong>Step 1: HTTP Request</strong>
                <p>AI crawler sends a request to your server. The clock starts immediately. The crawler expects a response within 1 to 5 seconds. Speak to an AEO specialist: <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.</p>
              </div>
              <div className="ae-timeline-item">
                <strong>Step 2: Server Response</strong>
                <p>Your server returns raw HTML. This is the only content the crawler will ever see from this page. If your server takes over 200ms, the crawler begins throttling future requests.</p>
              </div>
              <div className="ae-timeline-item">
                <strong>Step 3: HTML Parsing</strong>
                <p>The crawler reads the HTML document top to bottom. It processes headings, paragraphs, lists, links, and structured data. CSS and JavaScript files are noted but not executed. One client per city. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">See if your market is available.</a></p>
              </div>
              <div className="ae-timeline-item">
                <strong>Step 4: Content Extraction</strong>
                <p>Text content, schema markup, meta tags, and link structures are extracted. This data enters the AI platform&apos;s knowledge base. Everything else is discarded.</p>
              </div>
              <div className="ae-timeline-item">
                <strong>Step 5: Move On</strong>
                <p>The crawler moves to the next URL. There is no retry, no rendering queue, no second pass. If it missed content, that content stays missed until the next crawl cycle, which could be weeks away. Check where you stand: <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free Blind Spot Scan.</a></p>
              </div>
            </div>

            <p>Google needs <strong>9 times more time</strong> to crawl JavaScript-heavy pages than plain HTML, according to rendering research from Onely. AI crawlers are not even willing to attempt the render. This creates a situation where the same website can have excellent Google rankings and zero AI visibility.</p>

            <p>For businesses running on WordPress with heavy page builders, Shopify with custom themes, or custom React/Vue applications, this rendering gap is often the single biggest barrier to AI discovery. Our guide on <Link href="/blog/website-too-slow-for-ai-crawlers">why sites load too slowly for AI crawlers</Link> covers the technical performance side of this problem. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Schedule a free 30-min call.</a></p>

            {/* CTA 4 */}
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Get your free AI citation score — 48-hour turnaround</a>

            {/* Section 5 */}
            <span className="ae-section-label" id="robots-txt">The Gatekeeper</span>
            <h2>The robots.txt Dilemma: Blocking vs. Welcoming AI Bots</h2>

            <p>Your robots.txt file is the first thing every AI crawler checks before accessing your site. It is a simple text file that tells bots which pages they can and cannot visit. But for AI crawlers, the robots.txt decision is more consequential than most businesses realize. Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> for a custom strategy.</p>

            <p>The numbers tell a clear story: <strong>79% of major news publishers</strong> now block AI training bots via robots.txt. PerplexityBot specifically is blocked by 67% of top news sites. Over 80% of Cloudflare customers have chosen to block AI crawlers entirely.</p>

            {/* Warning Callout */}
            <div className="ae-callout ae-callout-warning not-prose">
              <h4>Warning: Your robots.txt May Be Blocking AI Discovery</h4>
              <p>Many web hosting platforms and security plugins add AI crawler blocks by default. If your website uses Cloudflare, Sucuri, Wordfence, or similar tools, check your robots.txt right now. You may be blocking GPTBot, ClaudeBot, and PerplexityBot without knowing it. Every day these crawlers are blocked is a day your business cannot appear in AI-generated answers. Questions? Call <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.</p>
            </div>

            <p>There is a real tension here. Large publishers block AI crawlers because they do not want their content used for training without compensation. But for local businesses and service providers, the calculation is completely different. Being crawled by AI platforms means being eligible to appear in AI-generated recommendations. Blocking these crawlers is equivalent to removing your business from an entire discovery channel.</p>

            <p>Cloudflare reported a particularly concerning finding in early 2026: Perplexity has been observed using stealth, undeclared crawlers that obscure their identity to circumvent robots.txt directives. This means the robots.txt system has limitations even when properly configured. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Secure your territory before a competitor does.</a></p>

            <p>The strategic approach is selective access. Allow the crawlers that contribute to your visibility (GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot, Google-Extended) while blocking crawlers that only scrape data without any discovery benefit. This requires an AI-specific robots.txt strategy, not a blanket allow or block.</p>

            {/* CTA 5 */}
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Get your free AI citation score — 48-hour turnaround</a>

            {/* Section 6 */}
            <span className="ae-section-label" id="structured-data">The Translator</span>
            <h2>How Structured Data Changes What AI Crawlers Understand</h2>

            <p>When an AI crawler reads your raw HTML, it is essentially reading a wall of text. It can parse headings, paragraphs, and links. But it has to infer what your business does, where you are located, what services you offer, and what your customers think of you. That inference process is unreliable.</p>

            <p>Structured data (specifically JSON-LD schema markup) changes this equation. Instead of forcing the crawler to guess, schema markup provides explicit, machine-readable declarations about your business. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book your free consultation here.</a></p>

            {/* Info Callout */}
            <div className="ae-callout not-prose">
              <h4>What Structured Data Tells AI Crawlers</h4>
              <p>Schema markup can declare your business name, type, address, phone number, operating hours, service area, price range, aggregate review rating, FAQ answers, and the specific services you offer. This data is not ambiguous. It is structured, labeled, and designed for machine consumption. AI crawlers prioritize this data because it removes the guesswork from content extraction.</p>
            </div>

            <p>The practical impact is significant. A plumber in Austin with proper LocalBusiness schema, FAQ schema, and Service schema gives AI crawlers a clear, complete picture of their business in machine-readable format. A competitor without schema forces the AI to piece together the same information from scattered paragraphs, and the AI may get it wrong. Contact us at <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>

            <p>Schema.org Action nodes are becoming particularly valuable for the emerging &quot;agentic web.&quot; AI agents use Action schemas to understand what users can do on your site, from searching for inventory to booking appointments. Sites that implement these schemas become queryable by AI agents in ways that plain HTML cannot achieve.</p>

            <p>Our deep dive on <Link href="/blog/does-schema-markup-help-ai-search">whether schema markup helps AI search</Link> covers the specific schema types that drive the most AI visibility for local businesses. Reach us at <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.</p>

            {/* CTA 6 */}
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Get your free AI citation score — 48-hour turnaround</a>

            {/* Section 7 */}
            <span className="ae-section-label" id="hidden-content">The Blind Spots</span>
            <h2>Seven Types of Content AI Crawlers Cannot See</h2>

            <p>Beyond JavaScript rendering and robots.txt blocks, there are specific content patterns that are completely invisible to AI crawlers. Many of these are design choices that improve the human experience while destroying AI discoverability. We work with one business per market. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Check if yours is still open.</a></p>

            {/* Bar Chart */}
            <div className="ae-bar-group not-prose">
              <h3>Content Visibility to AI Crawlers</h3>
              <div className="ae-bar-item" style={{ '--bar-width': '0%' } as React.CSSProperties}>
                <span className="ae-bar-label">1. Content behind login/paywall</span>
                <span className="ae-bar-value">0% visible. Crawlers cannot authenticate.</span>
              </div>
              <div className="ae-bar-item" style={{ '--bar-width': '0%' } as React.CSSProperties}>
                <span className="ae-bar-label">2. Infinite scroll content</span>
                <span className="ae-bar-value">0% visible. Requires JavaScript scroll events.</span>
              </div>
              <div className="ae-bar-item" style={{ '--bar-width': '0%' } as React.CSSProperties}>
                <span className="ae-bar-label">3. Third-party widget content</span>
                <span className="ae-bar-value">0% visible. Loaded via JavaScript iframes.</span>
              </div>
              <div className="ae-bar-item" style={{ '--bar-width': '10%' } as React.CSSProperties}>
                <span className="ae-bar-label">4. Accordion/tab hidden content</span>
                <span className="ae-bar-value">Partial. Depends on HTML implementation.</span>
              </div>
              <div className="ae-bar-item" style={{ '--bar-width': '10%' } as React.CSSProperties}>
                <span className="ae-bar-label">5. Image-only content (no alt text)</span>
                <span className="ae-bar-value">0% visible. No text for crawlers to parse.</span>
              </div>
              <div className="ae-bar-item" style={{ '--bar-width': '5%' } as React.CSSProperties}>
                <span className="ae-bar-label">6. PDF and document content</span>
                <span className="ae-bar-value">Limited. Some crawlers parse PDFs, most skip.</span>
              </div>
              <div className="ae-bar-item" style={{ '--bar-width': '0%' } as React.CSSProperties}>
                <span className="ae-bar-label">7. Dynamic pricing/availability</span>
                <span className="ae-bar-value">0% visible. Requires API calls to populate.</span>
              </div>
            </div>

            <p>Each of these blind spots represents content that your customers can see and interact with, but that AI platforms cannot access, index, or recommend. The most common offenders are third-party review widgets, interactive pricing tools, and FAQ sections built with JavaScript accordions that hide the answer text from the initial HTML.</p>

            <p>The irony is that FAQ content is one of the most valuable content types for AI citation. AI platforms specifically look for question-and-answer formatted content to extract for their responses. But if your FAQs are built with a JavaScript accordion that hides the answer text until a user clicks, that content is invisible to every AI crawler. Find your gaps with a <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free AERO scan.</a></p>

            <div className="ae-takeaway not-prose">
              <div className="ae-takeaway-title">Key Takeaway</div>
              <p>The content that matters most for AI visibility (FAQs, service descriptions, reviews, pricing) is often the content most likely to be hidden behind JavaScript interactions. This is not a coincidence. It is a design pattern that optimized for human experience at the expense of machine readability.</p>
            </div>

            {/* CTA 7 */}
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Get your free AI citation score — 48-hour turnaround</a>

            {/* Section 8 */}
            <span className="ae-section-label" id="static-vs-js">Static vs. Dynamic</span>
            <h2>Static HTML vs. JavaScript-Heavy Sites: The AI Visibility Tradeoff</h2>

            <p>The architecture of your website directly determines how much of it AI crawlers can access. Here is how the two main approaches compare for AI discoverability.</p>

            {/* Pros and Cons */}
            <div className="ae-pros-cons not-prose">
              <div className="ae-pros">
                <h4>Static HTML / Server-Rendered Sites</h4>
                <ul>
                  <li>All content available in initial HTML response</li>
                  <li>AI crawlers can read 100% of page content</li>
                  <li>Faster server response times (lower TTFB)</li>
                  <li>Schema markup loads immediately</li>
                  <li>FAQ content is always visible to crawlers</li>
                  <li>WordPress (without heavy JS page builders) works well</li>
                  <li>Static site generators (Hugo, Jekyll, Astro) are ideal</li>
                </ul>
              </div>
              <div className="ae-cons">
                <h4>JavaScript-Heavy / Client-Side Rendered Sites</h4>
                <ul>
                  <li>Content loads after JavaScript execution</li>
                  <li>AI crawlers see an empty or partial page</li>
                  <li>Higher TTFB due to framework overhead</li>
                  <li>Schema markup may depend on JS rendering</li>
                  <li>Interactive elements (tabs, accordions) hide content</li>
                  <li>React SPAs, Angular, Vue without SSR are invisible</li>
                  <li>Third-party widgets add more invisible content</li>
                </ul>
              </div>
            </div>

            <p>This does not mean you have to abandon modern web development. Frameworks like Next.js, Nuxt, and SvelteKit offer server-side rendering (SSR) and static site generation (SSG) that deliver full HTML to crawlers while maintaining interactive experiences for humans. The key is ensuring your critical business content is present in the initial HTML response, regardless of what happens after JavaScript loads. Send your questions to <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>

            <p>The businesses that perform best in AI search typically use a hybrid approach: server-rendered content for all critical business information (services, locations, FAQs, contact details) with client-side enhancements for interactivity. Our article on <Link href="/blog/5-minute-ai-visibility-audit">the 5-minute AI visibility audit</Link> walks through a simple test you can run right now to see which category your site falls into.</p>

            {/* CTA 8 */}
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Get your free AI citation score — 48-hour turnaround</a>

            {/* Section 9 - Crawl Frequency */}
            <span className="ae-section-label">Crawl Patterns</span>
            <h2>How Often AI Crawlers Visit (and Why It Matters)</h2>

            <p>AI crawlers do not visit your site with the same regularity as Googlebot. Understanding their crawl patterns helps explain why some businesses appear in AI answers while others remain invisible for months.</p>

            <p>GPTBot may only crawl a given page once every few weeks unless it considers that page high-value and authoritative. ClaudeBot tends to check homepages more frequently to assess overall brand positioning. PerplexityBot crawls more aggressively for trending topics since it powers a real-time search engine. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Claim your market territory — one client per area.</a></p>

            {/* Stats Grid 2 */}
            <div className="ae-stats-grid not-prose">
              <div className="ae-stat-card">
                <div className="ae-stat-value ae-accent">569M</div>
                <div className="ae-stat-label">GPTBot requests on Vercel in a single month</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-value ae-accent">370M</div>
                <div className="ae-stat-label">ClaudeBot requests on Vercel in the same period</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-value ae-accent">4.5B</div>
                <div className="ae-stat-label">Googlebot requests in the same period (for comparison)</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-value ae-accent">300%</div>
                <div className="ae-stat-label">Increase in AI crawler bot traffic in 2025 (Akamai)</div>
              </div>
            </div>

            <p>Combined, GPTBot and ClaudeBot represent about 20% of Googlebot&apos;s total request volume. That share is growing rapidly. But because AI crawlers visit individual pages less frequently, every single crawl visit matters. If the crawler arrives and finds your page too slow, your content behind JavaScript, or your robots.txt blocking access, you have lost your window and it may not return for weeks.</p>

            <div className="ae-quote not-prose">
              <p>With Googlebot, a bad crawl is a temporary setback. It will come back tomorrow. With AI crawlers, a bad crawl can mean weeks of invisibility. You get fewer chances to make a first impression. <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Run your free AI Blind Spot Scan.</a></p>
            </div>

            {/* CTA 9 */}
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Get your free AI citation score — 48-hour turnaround</a>

            {/* Section 10 - Cheat Sheet */}
            <span className="ae-section-label" id="cheat-sheet">Quick Reference</span>
            <h2>AI Crawler Visibility Cheat Sheet</h2>

            <p>Here is a condensed reference for understanding what AI crawlers can and cannot process on your website. Use this as a diagnostic checklist. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a free 30-minute strategy call.</a></p>

            {/* Cheat Sheet */}
            <div className="ae-cheat-sheet not-prose">
              <h3>What AI Crawlers Can vs. Cannot Process</h3>
              <table>
                <thead>
                  <tr>
                    <th>Element</th>
                    <th>AI Crawlers Can Process</th>
                    <th>AI Crawlers Cannot Process</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Text Content</td>
                    <td>Server-rendered HTML text</td>
                    <td>JavaScript-loaded text</td>
                  </tr>
                  <tr>
                    <td>Headings</td>
                    <td>H1-H6 tags in raw HTML</td>
                    <td>Headings generated by JS frameworks</td>
                  </tr>
                  <tr>
                    <td>Links</td>
                    <td>Standard anchor tags with href</td>
                    <td>JavaScript-triggered navigation</td>
                  </tr>
                  <tr>
                    <td>Images</td>
                    <td>Alt text attributes</td>
                    <td>Visual content, lazy-loaded images without noscript fallback</td>
                  </tr>
                  <tr>
                    <td>Schema Markup</td>
                    <td>JSON-LD in HTML head</td>
                    <td>Schema injected via JavaScript</td>
                  </tr>
                  <tr>
                    <td>Meta Tags</td>
                    <td>Title, description, canonical</td>
                    <td>Dynamically generated meta tags</td>
                  </tr>
                  <tr>
                    <td>Forms</td>
                    <td>Form structure and labels</td>
                    <td>Form validation, submissions, results</td>
                  </tr>
                  <tr>
                    <td>Videos</td>
                    <td>Video schema markup</td>
                    <td>Video content itself, transcripts loaded via JS</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="ae-takeaway not-prose">
              <div className="ae-takeaway-title">The Simple Test</div>
              <p>Right-click any page on your website and select &quot;View Page Source.&quot; What you see in that raw HTML source is exactly what AI crawlers see. If your business name, services, location, phone number, FAQs, and key selling points are not visible in the source, they are not visible to AI platforms. That is the test. It takes 30 seconds.</p>
            </div>

            {/* CTA 10 */}
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Get your free AI citation score — 48-hour turnaround</a>

            {/* Section 11 - The Bottom Line */}
            <span className="ae-section-label">The Bottom Line</span>
            <h2>Your Website Has Two Audiences Now</h2>

            <p>The shift to AI-powered discovery means every business website now serves two fundamentally different audiences. Human visitors who browse, click, scroll, and interact. And AI crawlers who parse raw HTML, extract structured data, and move on in seconds.</p>

            <p>The businesses winning in AI search are the ones that recognized this dual-audience reality early. They ensure their critical content is server-rendered. They implement comprehensive schema markup. They configure robots.txt to welcome AI crawlers. They keep their server response times under 200 milliseconds. And they audit their sites regularly to catch the blind spots where interactive design hides content from machine readers. <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a></p>

            <p>Only 2.8% of websites were fully protected against bot interactions in 2025, down from 8.4% the year before. That means the vast majority of the web is being crawled, indexed, and interpreted by AI platforms right now. The question is not whether AI crawlers are visiting your site. The question is what they find when they get there.</p>

            <p>If the answer is a stripped-down page with missing content, broken JavaScript dependencies, and no structured data, you are handing your AI visibility to competitors whose sites give crawlers the information they need.</p>

            <div className="ae-quote not-prose">
              <p>The gap between what humans see and what AI crawlers see on your website is the gap between where your business is today and where it could be in AI search. Closing that gap is not optional. It is the next competitive frontier.</p>
            </div>

            {/* CTA 11 */}
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Get your free AI citation score — 48-hour turnaround</a>

          </div>

          {/* FAQ Section */}
          <section className="mt-16 mb-16" id="faq">
            <span className="ae-section-label">FAQ</span>
            <h2 className="text-2xl font-bold text-white mb-8 font-plus-jakarta">
              Frequently Asked Questions
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl border border-gray-800 bg-gray-900/50">
                <h3 className="text-lg font-semibold text-white mb-3 font-plus-jakarta">
                  What does my website look like to an AI crawler?
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  AI crawlers see only the raw HTML your server returns on the initial
                  request. They do not execute JavaScript, load images, render CSS, or
                  interact with your page. If your content depends on client-side rendering,
                  pop-ups, tabs, or infinite scroll, that content is invisible to AI platforms
                  like ChatGPT, Perplexity, and Claude.
                </p>
              </div>
              <div className="p-6 rounded-xl border border-gray-800 bg-gray-900/50">
                <h3 className="text-lg font-semibold text-white mb-3 font-plus-jakarta">
                  Do AI crawlers see JavaScript content on my website?
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  No. AI crawlers like GPTBot, ClaudeBot, and PerplexityBot do not execute
                  JavaScript. They parse only the static HTML from the initial server response.
                  A React or Angular single-page application that loads content after JavaScript
                  execution is effectively blank to these crawlers, even if it ranks well on Google.
                </p>
              </div>
              <div className="p-6 rounded-xl border border-gray-800 bg-gray-900/50">
                <h3 className="text-lg font-semibold text-white mb-3 font-plus-jakarta">
                  How is GPTBot different from Googlebot?
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Googlebot uses a two-phase rendering pipeline that executes JavaScript using
                  headless Chrome. GPTBot skips JavaScript entirely, processes only raw HTML,
                  and has much shorter timeout windows of 1 to 5 seconds. Googlebot retries
                  failed pages. GPTBot moves on permanently. A site can rank number one on
                  Google while being completely invisible to ChatGPT.
                </p>
              </div>
              <div className="p-6 rounded-xl border border-gray-800 bg-gray-900/50">
                <h3 className="text-lg font-semibold text-white mb-3 font-plus-jakarta">
                  Can I block AI crawlers with robots.txt?
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  You can add directives to robots.txt to request that AI crawlers like GPTBot
                  or ClaudeBot not access your site. However, robots.txt is a voluntary protocol.
                  Some crawlers may ignore it. More importantly, blocking AI crawlers also blocks
                  your business from appearing in AI-generated answers and recommendations, which
                  is a growing source of customer discovery.
                </p>
              </div>
              <div className="p-6 rounded-xl border border-gray-800 bg-gray-900/50">
                <h3 className="text-lg font-semibold text-white mb-3 font-plus-jakarta">
                  Does structured data help AI crawlers understand my website?
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Yes. JSON-LD schema markup gives AI crawlers machine-readable context about
                  your business, services, location, hours, and FAQs. While AI crawlers can
                  parse plain text, structured data removes ambiguity and increases the
                  likelihood that your information appears accurately in AI-generated answers.
                </p>
              </div>
              <div className="p-6 rounded-xl border border-gray-800 bg-gray-900/50">
                <h3 className="text-lg font-semibold text-white mb-3 font-plus-jakarta">
                  How many AI crawler bots are there?
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  There are dozens of known AI crawlers, but the five that matter most for
                  business visibility are GPTBot (OpenAI/ChatGPT), ClaudeBot (Anthropic/Claude),
                  PerplexityBot (Perplexity AI), Google-Extended (Google Gemini), and Bingbot
                  (Microsoft Copilot). These crawlers account for roughly 95% of all AI crawler
                  traffic on the web.
                </p>
              </div>
              <div className="p-6 rounded-xl border border-gray-800 bg-gray-900/50">
                <h3 className="text-lg font-semibold text-white mb-3 font-plus-jakarta">
                  Why is my website invisible to ChatGPT even though it ranks on Google?
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Google and ChatGPT use completely different crawling systems. Googlebot renders
                  JavaScript and indexes the fully rendered page. GPTBot reads only raw HTML and
                  has a much shorter timeout window. Your site may also be accidentally blocking
                  GPTBot via robots.txt, returning slow server responses, or relying on JavaScript
                  for critical content.
                </p>
              </div>
              <div className="p-6 rounded-xl border border-gray-800 bg-gray-900/50">
                <h3 className="text-lg font-semibold text-white mb-3 font-plus-jakarta">
                  How often do AI crawlers visit my website?
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  AI crawlers visit far less frequently than Googlebot. GPTBot may only crawl a
                  page once every few weeks unless it considers the page high-value. ClaudeBot
                  tends to check homepages more frequently to assess brand positioning. PerplexityBot
                  crawls more often for trending topics since it powers a real-time search engine.
                </p>
              </div>
            </div>
          </section>

          {/* 3-Tier CTA Block */}
            <div className="ae-cta-block not-prose my-16">
              <h3>Answer Engine Optimization Services — See Your AI Citation Score Free</h3>
              <p>Every month 2,900 businesses search for ways to improve their brand visibility in AI search engines. The Answer Engine&apos;s free Blind Spot Report gives you your exact citation score across ChatGPT, Perplexity, and Google AI — and shows you what to fix.</p>
              <a href="https://theanswerengine.ai/blindspot" className="ae-cta-primary">Get Your Free AI Citation Score →</a>
              <div style={{ marginTop: '16px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <a href="tel:+12134442229" className="ae-cta-secondary">(213) 444-2229</a>
                <a href="https://calendly.com/theanswerengine-support/30min" className="ae-cta-secondary">Book Free Strategy Call</a>
              </div>
            </div>

          {/* Author Card */}
          <div className="ae-author-card not-prose">
            <div className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0" style={{ backgroundColor: '#F27D24' }}>
              AE
            </div>
            <div>
              <p className="text-white font-semibold text-lg">Justin Borges</p>
              <p className="text-gray-400 text-sm mt-1">
                Helping businesses get discovered by AI search platforms. We specialize in making your website visible to ChatGPT, Perplexity, Claude, and Google AI. Our team audits, optimizes, and monitors your AI search presence so customers can find you when they ask AI for recommendations.
              </p>
              <div className="flex flex-wrap gap-4 mt-3">
                <Link href="/blindspot" className="text-[#F27D24] text-sm font-medium hover:underline">Get a Free Report</Link>
                <a href="tel:+12134442229" className="text-gray-400 text-sm hover:text-white transition-colors">(213) 444-2229</a>
                <a href="mailto:support@theanswerengine.ai" className="text-gray-400 text-sm hover:text-white transition-colors">support@theanswerengine.ai</a>
              </div>
            </div>
          </div>

          {/* Final CTA */}
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
