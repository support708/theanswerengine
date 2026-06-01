import type { Metadata } from 'next';
import Link from 'next/link';

export const revalidate = 86400;
export const dynamic = 'force-static';
export const dynamicParams = true;

export const metadata: Metadata = {
  title: 'Why Does AI Recommend Other Roofers But Not Me? (Fix It Now)',
  description: 'Roofing companies are invisible to ChatGPT and Google AI for specific, fixable reasons. Learn the citation gap analysis and 4 tactics to get AI recommending your roofing business.',
  keywords: [
    'ai recommend roofers',
    'roofing company ai search',
    'chatgpt recommend roofing',
    'roofer ai visibility',
    'roofing ai optimization',
    'how to get roofing company on chatgpt',
    'ai search roofing business',
    'roofing company chatgpt',
    'answer engine optimization roofing',
    'local roofing ai recommendations',
  ],
  openGraph: {
    title: 'Why Does AI Recommend Other Roofers But Not Me?',
    description: 'Roofing companies get skipped by AI for specific, fixable reasons. Here is the citation gap analysis and the 4 moves that change the outcome.',
    type: 'article',
    url: 'https://theanswerengine.ai/blog/why-does-ai-recommend-other-roofers-but-not-me',
    images: [{ url: 'https://theanswerengine.ai/blog/why-does-ai-recommend-other-roofers-but-not-me.webp', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Why Does AI Recommend Other Roofers But Not Me?',
    description: 'The citation gap analysis every roofing company owner needs to read before losing more leads to AI-invisible status.',
  },
  alternates: {
    canonical: 'https://theanswerengine.ai/blog/why-does-ai-recommend-other-roofers-but-not-me',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      '@id': 'https://theanswerengine.ai/blog/why-does-ai-recommend-other-roofers-but-not-me#article',
      'headline': 'Why Does AI Recommend Other Roofers But Not Me?',
      'description': 'Roofing companies are invisible to ChatGPT and Google AI for specific, fixable reasons. A citation gap analysis and 4 tactics to get AI recommending your roofing business.',
      'image': 'https://theanswerengine.ai/api/og/why-does-ai-recommend-other-roofers-but-not-me',
      'datePublished': '2026-04-18',
      'dateModified': '2026-04-18',
      'author': {
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
      'publisher': {
        '@type': 'Organization',
        '@id': 'https://theanswerengine.ai/#organization',
      },
      'mainEntityOfPage': {
        '@type': 'WebPage',
        '@id': 'https://theanswerengine.ai/blog/why-does-ai-recommend-other-roofers-but-not-me',
      },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://theanswerengine.ai/blog/why-does-ai-recommend-other-roofers-but-not-me#faq',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Why does ChatGPT recommend other roofers in my area but not my company?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'ChatGPT builds recommendations from crawlable, structured text sources: your website, directory listings, review platforms, and third-party mentions. If your site lacks dedicated service pages, schema markup, or consistent citations across directories, AI platforms have no reliable data to pull from. The roofers showing up have more structured, verifiable information available in plain HTML that AI can actually read.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Do my Google reviews count toward AI recommendations for my roofing business?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Not directly. Google reviews require JavaScript to load, and most AI crawlers read raw HTML. This means your star ratings and review text on Google are effectively invisible to ChatGPT, Perplexity, and Claude. To get your reviews into the AI evidence pool, you need plain-text testimonials on your own website, Yelp reviews, BBB ratings, and industry directory profiles on platforms like Angi and HomeAdvisor.',
          },
        },
        {
          '@type': 'Question',
          'name': 'What schema markup should a roofing company use to get found by AI?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'At minimum, every roofing website needs LocalBusiness schema (with your name, address, phone, hours, and service area), Service schema on each individual service page (roof replacement, roof repair, storm damage, etc.), and FAQPage schema on pages that answer common customer questions. Adding Review schema for on-site testimonials and BreadcrumbList for site navigation rounds out a solid foundation. Structured data helps AI go from guessing about your business to knowing exactly what you offer and where.',
          },
        },
        {
          '@type': 'Question',
          'name': 'How long does it take for a roofing company to start showing up in AI recommendations?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Most roofing businesses that implement a structured AI visibility strategy start seeing AI mentions within 60 to 90 days. This timeline assumes you are building out individual service pages, adding schema markup, getting listed in crawlable directories, and publishing FAQ content. Speed is less important than consistency. AI platforms re-evaluate sources over time, so a site that improves steadily will build authority faster than one that gets a one-time update.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Can a small local roofing company compete with large franchises in AI search?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Yes, and smaller roofers often have a structural advantage here. AI platforms value specificity and local relevance over brand recognition. A locally owned roofing company with detailed pages about specific neighborhoods, honest cost ranges, before-and-after project photos with written descriptions, and real customer testimonials on the site can outrank a national franchise running a generic template website. Depth beats brand size in AI recommendations.',
          },
        },
      ],
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://theanswerengine.ai/#organization',
      'name': 'The Answer Engine',
      'url': 'https://theanswerengine.ai',
      'logo': 'https://theanswerengine.ai/TheAnswerEngine_Color.png',
      'description': 'Answer Engine Optimization agency helping local service businesses get cited and recommended by AI platforms.',
      'telephone': '+12134442229',
      'email': 'support@theanswerengine.ai',
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'Los Angeles',
        'addressRegion': 'CA',
        'addressCountry': 'US',
      },
    },
    {
      '@type': 'BreadcrumbList',
      'itemListElement': [
        { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://theanswerengine.ai/' },
        { '@type': 'ListItem', 'position': 2, 'name': 'Blog', 'item': 'https://theanswerengine.ai/blog' },
        { '@type': 'ListItem', 'position': 3, 'name': 'Why Does AI Recommend Other Roofers But Not Me' },
      ],
    },
  ],
};

function Breadcrumb() {
  return (
    <nav className="text-sm text-gray-500 mb-8">
      <Link href="/" className="hover:text-white transition-colors">Home</Link>
      <span className="mx-2">&rsaquo;</span>
      <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
      <span className="mx-2">&rsaquo;</span>
      <span className="text-gray-400">AI Visibility for Roofers</span>
    </nav>
  );
}

export default function WhyDoesAIRecommendOtherRoofers() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-[#0F1117]">
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-white/5">
          <div className="absolute inset-0 bg-gradient-to-br from-[#F27D24]/10 via-transparent to-transparent" />
          {/* Geometric SVG: roof/triangle motifs */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.04]" aria-hidden="true" viewBox="0 0 1200 500" fill="none" preserveAspectRatio="xMidYMid slice">
            <polygon points="900,80 1100,280 700,280" stroke="#F27D24" strokeWidth="0.8" fill="none" />
            <polygon points="920,120 1080,280 760,280" stroke="#F27D24" strokeWidth="0.4" fill="none" />
            <polygon points="200,160 320,300 80,300" stroke="#F27D24" strokeWidth="0.6" fill="none" />
            <polygon points="500,40 600,160 400,160" stroke="#F27D24" strokeWidth="0.5" fill="none" />
            <line x1="0" y1="300" x2="1200" y2="300" stroke="#F27D24" strokeWidth="0.3" />
            <circle cx="600" cy="400" r="2" fill="#F27D24" />
            <circle cx="300" cy="400" r="1.5" fill="#F27D24" />
            <circle cx="900" cy="400" r="1.5" fill="#F27D24" />
          </svg>

          <div className="relative max-w-4xl mx-auto px-6 py-16 sm:py-24">
            <Breadcrumb />
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 bg-[#F27D24]/10 border border-[#F27D24]/30">
              <span className="text-sm font-semibold tracking-wider uppercase text-[#F27D24]">Industry Guides</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">
              Why Does AI Recommend{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F27D24] to-orange-400">Other Roofers</span>{' '}
              But Not Me?
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
              Your competitor shows up when a homeowner asks ChatGPT for a roofer. You do not. It is not luck, and it is not your fault yet. But it will cost you if you do not understand what is actually happening.
            </p>
            <div className="flex flex-wrap gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>April 18, 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>10 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>Justin Borges</span>
              </div>
            </div>
          </div>
        </section>

        {/* Article Body */}
        <article className="max-w-4xl mx-auto px-6 py-12 sm:py-16">
          <div className="prose prose-invert prose-lg max-w-none prose-headings:font-plus-jakarta prose-headings:text-white prose-p:text-gray-300 prose-a:text-[#F27D24] prose-a:no-underline hover:prose-a:underline prose-strong:text-white">

            {/* STATS GRID */}
            <div className="ae-stats-grid not-prose">
              <div className="ae-stat-card">
                <div className="ae-stat-value ae-accent">45%</div>
                <div className="ae-stat-label">of consumers now use AI to find local business recommendations (BrightLocal 2026)</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-value ae-accent">3x</div>
                <div className="ae-stat-label">accuracy improvement when business content uses structured data markup</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-value ae-accent">87%</div>
                <div className="ae-stat-label">of AI referral traffic comes through ChatGPT alone</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-value ae-accent">&lt;12%</div>
                <div className="ae-stat-label">of home service contractors are actively optimizing for AI visibility</div>
              </div>
            </div>

            {/* INTRODUCTION */}
            <span className="ae-section-label">The Problem</span>
            <h2>You Are Not Being Ignored. You Are Being Skipped for a Specific Reason.</h2>

            <p>A homeowner&apos;s roof is leaking. They open ChatGPT and type: &quot;Who is a reliable roofer near me in [your city]?&quot; Three names come back. Yours is not one of them. Markets fill fast. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Check your territory availability.</a></p>

            <p>That is not a random outcome. AI platforms do not pick businesses by lottery. They pull from structured, crawlable, verifiable data sources. The roofers that keep showing up have built a specific kind of digital footprint that AI can read, trust, and cite. Most roofing companies have not. Your first step: <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free AERO Blind Spot Scan.</a></p>

            <p>This guide breaks down exactly why roofers get excluded, how AI actually evaluates roofing company credibility, and the four moves that shift the outcome in your favor. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Claim your free call</a> before your market fills.</p>

            <div className="ae-cta-inline not-prose">
              <p>Want to see what AI currently says about your roofing business? We will show you for free. Reach out: <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>
              <Link href="/blindspot">Get an AI Visibility Audit &rarr;</Link>
            </div>

            {/* SECTION 1 */}
            <span className="ae-section-label">Citation Gap Analysis</span>
            <h2>Why Roofers Get Excluded from AI Recommendations</h2>

            <p>Roofing is one of the most transactional, high-value home service categories, but it is consistently underrepresented in AI recommendations. The reason is not that AI dislikes roofers. It is that the roofing industry has a structural citation gap. Call us at <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> today.</p>

            <p>AI platforms build their answers from sources they can crawl and verify. For a local business, that means: your website, directory listings, review platforms with plain-HTML content, third-party mentions in articles or blogs, and structured data signals like schema markup. Most roofing websites fail on nearly all of these dimensions. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Lock in your exclusive territory now.</a></p>

            <div className="ae-callout ae-callout-warning not-prose">
              <p><strong>The core problem:</strong> The typical roofing company website has one &quot;Services&quot; page listing everything from repairs to gutters in a single paragraph, no schema markup, no FAQ content, and reviews that only exist on Google (which AI cannot read because they load via JavaScript, not raw HTML). From an AI&apos;s perspective, that website might as well be blank. <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Get your free AI readiness report.</a></p>
            </div>

            <p>Here is how the citation gap breaks down in roofing specifically: Ready to act? <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a free strategy session.</a></p>

            <div className="ae-comparison-table not-prose">
              <table>
                <thead>
                  <tr>
                    <th>Citation Source</th>
                    <th>What Most Roofers Have</th>
                    <th>What AI Needs to Cite You</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Website service pages</td>
                    <td>One generic &quot;Services&quot; page</td>
                    <td>Individual pages per service with scope, process, and pricing ranges</td>
                  </tr>
                  <tr>
                    <td>Reviews AI can read</td>
                    <td>Google reviews only (invisible to AI)</td>
                    <td>Plain-text testimonials on site, Yelp, BBB, Angi profiles</td>
                  </tr>
                  <tr>
                    <td>Schema markup</td>
                    <td>None, or only basic meta tags</td>
                    <td>LocalBusiness, Service, FAQPage, and Review schema</td>
                  </tr>
                  <tr>
                    <td>Directory presence</td>
                    <td>Inconsistent or unclaimed listings</td>
                    <td>Consistent NAP across 15 to 20 crawlable directories</td>
                  </tr>
                  <tr>
                    <td>FAQ content</td>
                    <td>None or buried on a contact page</td>
                    <td>Dedicated FAQ pages answering real customer questions with specifics</td>
                  </tr>
                  <tr>
                    <td>Third-party mentions</td>
                    <td>Rare or nonexistent</td>
                    <td>Local news, supplier partner pages, Chamber of Commerce listings</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>The roofer showing up in AI results has filled in enough of those columns that AI platforms feel confident citing them. That confidence threshold is what you are trying to cross. Drop us a line at <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>

            <div className="ae-takeaway not-prose">
              <div className="ae-takeaway-title">Key Takeaway</div>
              <p>AI exclusion is not about your reputation or your quality of work. It is about the absence of structured, machine-readable evidence that your business exists, is credible, and serves a specific area. That is a fixable problem. Speak to an AEO specialist: <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.</p>
            </div>

            {/* SECTION 2 */}
            <span className="ae-section-label">How AI Thinks</span>
            <h2>How AI Models Evaluate Roofing Company Credibility</h2>

            <p>When someone asks an AI platform to recommend a roofer, the model does not &quot;search Google.&quot; It retrieves from a knowledge base built during training and, in some platforms, through live web crawls. Either way, what it finds about your business has to meet a credibility threshold before it will surface your name. One client per city. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">See if your market is available.</a></p>

            <p>That evaluation happens across a few dimensions. Check where you stand: <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free Blind Spot Scan.</a></p>

            <h3>Entity Clarity</h3>

            <p>AI platforms think in terms of &quot;entities&quot;: clearly defined objects with consistent attributes. Your roofing business is an entity. For AI to confidently cite you, it needs to find the same name, address, phone number, and service description in multiple independent places. When those details conflict across listings or are sparse in general, your entity is ambiguous. Ambiguous entities do not get recommended. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Schedule a free 30-min call.</a></p>

            <div className="ae-callout ae-callout-info not-prose">
              <p><strong>Consistency matters more than volume.</strong> A roofer with 8 consistent, complete directory listings will rank better with AI than a roofer with 40 inconsistent ones. Every time AI finds conflicting information about your business, it reduces its confidence in citing you. Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> for a custom strategy.</p>
            </div>

            <h3>Content Depth and Specificity</h3>

            <p>Generic content is a trust killer for AI. A page that says &quot;We offer roofing services in the greater metro area&quot; gives AI nothing to work with. A page that explains the difference between an architectural shingle and a 3-tab shingle, lists what a typical roof replacement includes, provides a realistic cost range for your region, and names the specific neighborhoods you serve gives AI a rich, verifiable reference it can pull from. Questions? Call <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.</p>

            <p>Research highlighted by Digidop found that AI accuracy jumps from 16% to 54% when content is backed by structured data. That 3x difference in AI comprehension is the gap between being cited and being invisible. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Secure your territory before a competitor does.</a></p>

            <h3>Social Proof That AI Can Actually See</h3>

            <p>This is the one that surprises most roofing owners. Your Google reviews, no matter how many you have, are not visible to most AI platforms. Google reviews load through JavaScript, and AI crawlers read raw HTML. The reviews simply do not exist in the data AI has access to. <a href="https://theanswerengine.ai/blindspot" className="cta-inline">See your AI visibility score — free.</a></p>

            <p>AI builds its trust assessment from reviews it can actually read: plain-text testimonials on your own website, Yelp reviews, BBB ratings, Angi and HomeAdvisor profiles, and any reviews quoted in third-party articles about your company. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book your free consultation here.</a></p>

            <div className="ae-pros-cons not-prose">
              <div className="ae-pros">
                <h4>Review Sources AI Can Read</h4>
                <ul>
                  <li>Plain-text testimonials on your website</li>
                  <li>Yelp (fully crawlable HTML)</li>
                  <li>BBB rating and reviews</li>
                  <li>Angi and HomeAdvisor profiles</li>
                  <li>Facebook reviews</li>
                  <li>Houzz (for premium residential roofing)</li>
                  <li>Industry association pages (NRCA, local contractor associations)</li>
                </ul>
              </div>
              <div className="ae-cons">
                <h4>Review Sources AI Cannot Read</h4>
                <ul>
                  <li>Google reviews (JavaScript-dependent)</li>
                  <li>Embedded review widgets (third-party iframes)</li>
                  <li>Screenshot testimonials (image only)</li>
                  <li>Video reviews without written transcripts</li>
                  <li>Reviews behind login walls</li>
                </ul>
              </div>
            </div>

            <h3>Licensing and Credential Signals</h3>

            <p>Roofing is a licensed trade in most states. AI platforms pull credential signals from your website, state contractor license lookup pages, and supplier partner directories. If your license number, insurance information, and manufacturer certifications are not stated explicitly on your website in plain text, AI cannot factor them into its credibility assessment. An unlicensed-seeming roofer (from AI&apos;s perspective) does not get recommended for a $15,000 roof replacement. Contact us at <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>

            <div className="ae-cta-inline not-prose">
              <p>Not sure how AI currently evaluates your roofing business? Let us check it for you. Reach us at <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.</p>
              <Link href="/blindspot">Get an AI Visibility Audit &rarr;</Link>
            </div>

            {/* SECTION 3 */}
            <span className="ae-section-label">The Fix</span>
            <h2>4 Tactical Moves to Increase AI Recommendation Chances</h2>

            <p>These are not theory. They are the specific actions that move the needle for roofing companies in AI search, ordered from highest immediate impact to longer-term authority building. We work with one business per market. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Check if yours is still open.</a></p>

            <h3>Move 1: Break Your Services Into Individual Pages</h3>

            <p>If your website has one &quot;Roofing Services&quot; page that lists everything, that is your single biggest AI visibility problem and the fastest fix available to you. Find your gaps with a <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free AERO scan.</a></p>

            <p>Create separate pages for each service you actively offer: <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Schedule a free call</a> to see where you stand.</p>

            <div className="ae-cheat-sheet not-prose">
              <h3>Roofing Service Pages That AI Cites</h3>
              <ul>
                <li><strong>Roof Replacement</strong> (shingle type options, process, timeline, cost ranges)</li>
                <li><strong>Roof Repair</strong> (leak diagnosis, flashing, missing shingles, typical repair costs)</li>
                <li><strong>Storm Damage Roofing</strong> (insurance claim process, emergency tarping, hail damage)</li>
                <li><strong>Roof Inspection</strong> (what is included, how often needed, what you check for)</li>
                <li><strong>Gutter Services</strong> if offered (installation, cleaning, guards)</li>
                <li><strong>Commercial Roofing</strong> if applicable (flat roofs, TPO, EPDM specifics)</li>
                <li><strong>Service Area Pages</strong> (one page per city or neighborhood you actively serve)</li>
              </ul>
            </div>

            <p>Each page needs a clear title, a description of what the service involves, what a customer can expect from the process, realistic cost ranges, and your service area called out explicitly. AI platforms cite specificity. Generic pages are ignored. Send your questions to <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>

            <h3>Move 2: Add Schema Markup to Every Page</h3>

            <p>Schema markup is structured data code that tells AI and search engines exactly what your content means. Most roofing websites have none. Adding it is a low-effort, high-impact task that immediately improves how AI interprets your site. Call <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> for a free consultation.</p>

            <div className="ae-timeline not-prose">
              <div className="ae-timeline-item">
                <strong>LocalBusiness Schema (homepage and contact page)</strong>
                <p>Include your business name, address, phone, hours, service area, license number, and the services you offer. This is the foundation AI uses to identify your entity. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Claim your market territory — one client per area.</a></p>
              </div>
              <div className="ae-timeline-item">
                <strong>Service Schema (each service page)</strong>
                <p>Name the service, describe it, list the area covered, and include a price range if possible. This tells AI exactly what you do and where. <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Run your free AI Blind Spot Scan.</a></p>
              </div>
              <div className="ae-timeline-item">
                <strong>FAQPage Schema (FAQ sections)</strong>
                <p>Mark up every question-and-answer pair on your site. FAQ schema is one of the highest-citation schema types because AI platforms frequently pull directly from it to answer user questions. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a free 30-minute strategy call.</a></p>
              </div>
              <div className="ae-timeline-item">
                <strong>Review Schema (testimonials section)</strong>
                <p>Add Review or AggregateRating schema to your on-site testimonials. This makes your social proof readable and credible to AI in a way Google reviews never will be. Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> to get started.</p>
              </div>
            </div>

            <div className="ae-callout ae-callout-success not-prose">
              <p><strong>Quick win:</strong> If you use WordPress, the Yoast SEO or RankMath plugins add LocalBusiness schema with minimal technical knowledge required. For custom sites, Google&apos;s Structured Data Markup Helper walks you through tagging your content manually. Either approach takes a few hours and the impact compounds over weeks as AI platforms re-crawl your pages. <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a></p>
            </div>

            <h3>Move 3: Build Crawlable Review Presence Beyond Google</h3>

            <p>Because Google reviews are invisible to most AI, roofing companies that rely exclusively on Google for social proof have a structural disadvantage in AI citations. You need to build out review presence on platforms AI can actually read.</p>

            <div className="ae-cheat-sheet not-prose">
              <h3>90-Day Review Diversification Plan for Roofers</h3>
              <ul>
                <li><strong>Weeks 1 to 2:</strong> Claim and complete your Yelp, BBB, and Angi profiles. Add photos, your service list, and a detailed business description.</li>
                <li><strong>Weeks 3 to 4:</strong> Add a testimonials section to your website. Take your 10 best Google reviews, ask those customers for permission to repost, and publish them as plain text with the customer&apos;s first name and city.</li>
                <li><strong>Weeks 5 to 8:</strong> After each completed job, send a simple follow-up asking for a review on one platform other than Google. Rotate through Yelp, BBB, and Angi to build presence across all three.</li>
                <li><strong>Ongoing:</strong> Keep your on-site testimonials section fresh. Aim for at least 2 new additions per month. Recency matters to AI platforms evaluating whether a business is actively operating.</li>
              </ul>
            </div>

            <h3>Move 4: Fix and Expand Your Directory Listings</h3>

            <p>AI platforms build what researchers call &quot;entity authority&quot; by cross-referencing your business information across multiple independent sources. The more consistent and complete your listings, the more confident AI becomes in citing you.</p>

            <p>For roofing companies, the priority directories are:</p>

            <div className="ae-bar-group not-prose">
              <h3>Priority Directory Listings for Roofing AI Visibility</h3>
              <div className="ae-bar-item" style={{ width: '95%' }}>
                <span>Google Business Profile (owned and complete)</span>
                <strong>Critical</strong>
              </div>
              <div className="ae-bar-item" style={{ width: '90%' }}>
                <span>Yelp (claimed, photos, services listed)</span>
                <strong>Critical</strong>
              </div>
              <div className="ae-bar-item" style={{ width: '88%' }}>
                <span>BBB (accredited if eligible)</span>
                <strong>Critical</strong>
              </div>
              <div className="ae-bar-item" style={{ width: '80%' }}>
                <span>Angi and HomeAdvisor (full profile)</span>
                <strong>High</strong>
              </div>
              <div className="ae-bar-item" style={{ width: '70%' }}>
                <span>Facebook Business Page</span>
                <strong>High</strong>
              </div>
              <div className="ae-bar-item" style={{ width: '65%' }}>
                <span>Apple Maps (via Apple Business Connect)</span>
                <strong>High</strong>
              </div>
              <div className="ae-bar-item" style={{ width: '58%' }}>
                <span>Local Chamber of Commerce listing</span>
                <strong>Medium</strong>
              </div>
              <div className="ae-bar-item" style={{ width: '50%' }}>
                <span>NRCA or state roofing association directory</span>
                <strong>Medium</strong>
              </div>
            </div>

            <p>The single most important thing to check: your business name, address, and phone number must be identical across every listing. Not close. Identical. A listing that says &quot;123 Main St&quot; on one platform and &quot;123 Main Street, Suite A&quot; on another creates ambiguity that reduces AI confidence. Audit every listing before you add new ones.</p>

            <div className="ae-cta-inline not-prose">
              <p>Want a complete picture of where your roofing business stands across all the directories AI actually checks?</p>
              <Link href="/blindspot">Get an AI Visibility Audit &rarr;</Link>
            </div>

            {/* SECTION 4 */}
            <span className="ae-section-label">The Timeline</span>
            <h2>What to Expect: A Realistic 90-Day Outlook</h2>

            <p>AI visibility does not happen overnight, but it builds faster than most business owners expect once the structural pieces are in place. Here is what a realistic timeline looks like for a roofing company starting from scratch.</p>

            <div className="ae-timeline not-prose">
              <div className="ae-timeline-item">
                <strong>Days 1 to 14: Foundation</strong>
                <p>Audit your current directory listings for consistency. Claim and complete your Yelp, BBB, and Angi profiles. Add a plain-text testimonials section to your website. Start the conversation with your developer or CMS about adding schema markup.</p>
              </div>
              <div className="ae-timeline-item">
                <strong>Days 15 to 30: Content</strong>
                <p>Create individual service pages for your top 3 to 5 services. Add LocalBusiness and Service schema to each. Build one FAQ page targeting the questions homeowners actually ask before hiring a roofer (cost ranges, timeline, what to expect during a replacement).</p>
              </div>
              <div className="ae-timeline-item">
                <strong>Days 31 to 60: Authority</strong>
                <p>Expand to your remaining service pages and city-specific landing pages. Add FAQPage schema. Begin the review diversification process. Reach out to local supplier partners and your Chamber of Commerce about getting listed on their websites.</p>
              </div>
              <div className="ae-timeline-item">
                <strong>Days 61 to 90: Monitoring</strong>
                <p>Start testing your AI visibility directly. Ask ChatGPT, Perplexity, and Google AI Overviews to recommend roofers in your service area. Note what comes up and what is missing. Use those gaps to inform the next round of improvements.</p>
              </div>
            </div>

            <div className="ae-callout ae-callout-info not-prose">
              <p><strong>Why 60 to 90 days?</strong> AI platforms do not re-index your website in real time. Changes you make today will be reflected in AI recommendations after the platform&apos;s next crawl cycle, which typically runs every few weeks for established sites. Consistency is what builds lasting AI authority, not a one-time sprint.</p>
            </div>

            <div className="ae-quote not-prose">
              <p>The window to build AI authority in the roofing space is still wide open. Fewer than 1 in 8 contractors are doing this. The companies that build their AI footprint now will be the ones owning their markets when everyone else catches up.</p>
            </div>

            <p>To learn more about how AI platforms evaluate and rank local businesses, read our deep dive on <Link href="/blog/how-ai-platforms-choose-businesses-to-cite">how AI platforms choose businesses to cite</Link>.</p>

            <div className="ae-cta-inline not-prose">
              <p>Ready to see exactly where your roofing business stands in AI search? It takes two minutes.</p>
              <Link href="/blindspot">Get an AI Visibility Audit &rarr;</Link>
            </div>

          </div>

          {/* FAQ Section */}
          <section className="mt-16 mb-12">
            <span className="ae-section-label not-prose">FAQ</span>
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-white">Frequently Asked Questions</h2>
            <div className="grid gap-4">
              {[
                {
                  q: 'Why does ChatGPT recommend other roofers in my area but not my company?',
                  a: 'ChatGPT builds recommendations from crawlable, structured text sources: your website, directory listings, review platforms, and third-party mentions. If your site lacks dedicated service pages, schema markup, or consistent citations across directories, AI platforms have no reliable data to pull from. The roofers showing up have more structured, verifiable information available in plain HTML that AI can actually read.',
                },
                {
                  q: 'Do my Google reviews count toward AI recommendations for my roofing business?',
                  a: 'Not directly. Google reviews require JavaScript to load, and most AI crawlers read raw HTML. This means your star ratings and review text on Google are effectively invisible to ChatGPT, Perplexity, and Claude. To get your reviews into the AI evidence pool, you need plain-text testimonials on your own website, Yelp reviews, BBB ratings, and industry directory profiles on platforms like Angi and HomeAdvisor.',
                },
                {
                  q: 'What schema markup should a roofing company use to get found by AI?',
                  a: 'At minimum, every roofing website needs LocalBusiness schema (with your name, address, phone, hours, and service area), Service schema on each individual service page (roof replacement, roof repair, storm damage, etc.), and FAQPage schema on pages that answer common customer questions. Adding Review schema for on-site testimonials and BreadcrumbList for site navigation rounds out a solid foundation. Structured data helps AI go from guessing about your business to knowing exactly what you offer and where.',
                },
                {
                  q: 'How long does it take for a roofing company to start showing up in AI recommendations?',
                  a: 'Most roofing businesses that implement a structured AI visibility strategy start seeing AI mentions within 60 to 90 days. This timeline assumes you are building out individual service pages, adding schema markup, getting listed in crawlable directories, and publishing FAQ content. Speed is less important than consistency. AI platforms re-evaluate sources over time, so a site that improves steadily will build authority faster than one that gets a one-time update.',
                },
                {
                  q: 'Can a small local roofing company compete with large franchises in AI search?',
                  a: 'Yes, and smaller roofers often have a structural advantage here. AI platforms value specificity and local relevance over brand recognition. A locally owned roofing company with detailed pages about specific neighborhoods, honest cost ranges, before-and-after project photos with written descriptions, and real customer testimonials on the site can outrank a national franchise running a generic template website. Depth beats brand size in AI recommendations.',
                },
              ].map((faq, i) => (
                <div key={i} className="rounded-xl border border-white/10 bg-white/[0.02] p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">{faq.q}</h3>
                  <p className="text-gray-300 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Final CTA */}
          <div className="ae-final-cta not-prose">
            <h2>Find Out If AI Can Actually See Your Roofing Business</h2>
            <p>Get a free AI visibility audit. We will show you exactly what ChatGPT, Google AI, and Perplexity see when a homeowner asks for a roofer in your area. No pitch, just the data.</p>
            <Link href="/blindspot" className="ae-final-cta-pulse">Get an AI Visibility Audit &rarr;</Link>
            <div className="flex flex-wrap items-center justify-center gap-6 mt-6 pt-6 border-t border-[#F27D24]/10">
              <a href="tel:+12134442229" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                (213) 444-2229
              </a>
              <a href="mailto:support@theanswerengine.ai" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                support@theanswerengine.ai
              </a>
            </div>
            <p className="text-sm text-gray-500 mt-4">No pitch, just the data. See what AI sees.</p>
          </div>

          {/* Author Card */}
          <div className="ae-author-card not-prose">
            <div className="w-12 h-12 rounded-full bg-[#F27D24] flex items-center justify-center text-white font-bold text-lg shrink-0">
              AE
            </div>
            <div>
              <p className="text-white font-semibold">Justin Borges</p>
              <p className="text-sm text-gray-400">
                We help local service businesses get found, cited, and recommended by AI platforms. Our team tracks AI search trends daily so you do not have to.
              </p>
            </div>
          </div>

        </article>
      </main>
    </>
  );
}
