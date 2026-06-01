import type { Metadata } from 'next'
import Link from 'next/link'

export const revalidate = 86400
export const dynamic = 'force-static'
export const dynamicParams = true

const title = 'How Contractors Win AI Search'
const titleWithSuffix = `${title} | The Answer Engine`
const description = 'Home service companies are invisible to AI search. Learn why plumbers, electricians, and HVAC pros lose leads to AI platforms and what signals actually matter.'
const slug = 'how-contractors-and-home-service-companies-win-ai-search'
const publishDate = '2026-03-31'

export const metadata: Metadata = {
  title: titleWithSuffix,
  description,
  keywords: ['contractor AI search', 'home service AI visibility', 'plumber ChatGPT', 'HVAC AI search', 'electrician AI recommendations', 'answer engine optimization contractors', 'home services AI marketing', 'local service AI discovery'],
  openGraph: {
    title,
    description: 'Home service companies are invisible to AI search. Learn which signals plumbers, electricians, and HVAC pros need to get recommended by ChatGPT, Perplexity, and Google AI.',
    type: 'article',
    url: `https://theanswerengine.ai/blog/${slug}`,
    images: [{ url: `https://theanswerengine.ai/blog/${slug}.svg`, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description: 'Home service companies are invisible to AI search. Learn which signals actually drive contractor visibility on AI platforms.',
  },
  alternates: {
    canonical: `https://theanswerengine.ai/blog/${slug}`,
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `https://theanswerengine.ai/blog/${slug}#article`,
      "headline": "How Contractors and Home Service Companies Win AI Search",
      "description": description,
      "image": `https://theanswerengine.ai/blog/${slug}.svg`,
      "datePublished": publishDate,
      "dateModified": publishDate,
      "author": {
          "@type": "Person",
          "@id": "https://theanswerengine.ai/about#justin-borges",
          "name": "Justin Borges",
          "jobTitle": "Founder, The Answer Engine",
          "worksFor": {
            "@type": "Organization",
            "name": "The Answer Engine",
            "url": "https://theanswerengine.ai"
          },
          "knowsAbout": ["Answer Engine Optimization", "AI Search", "Content Strategy", "Real Estate Marketing", "Citation Surface"],
          "url": "https://theanswerengine.ai/about",
          "image": "https://theanswerengine.ai/justin-borges.webp"
        },
      "publisher": {
        "@type": "Organization",
        "@id": "https://theanswerengine.ai/#organization"
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://theanswerengine.ai/blog/${slug}`
      }
    },
    {
      "@type": "FAQPage",
      "@id": `https://theanswerengine.ai/blog/${slug}#faq`,
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Are home service companies really losing leads to AI search?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. 45% of consumers now use AI tools like ChatGPT and Google AI to find local services, up from just 6% one year ago. Home service queries are among the highest-intent local searches, and AI platforms only recommend businesses they can verify across multiple data sources. Companies that are not optimized for AI discovery are invisible to this rapidly growing channel."
          }
        },
        {
          "@type": "Question",
          "name": "Which AI platforms recommend contractors and home service companies?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ChatGPT, Google AI Overviews, Perplexity, Claude, Apple Intelligence, and Microsoft Copilot all surface contractor recommendations. Each platform evaluates different data sources. ChatGPT relies on crawlable web content and directories, Google AI references Business Profiles and reviews, and Perplexity cross-references multiple sources for verification. Contractors need visibility across all of them to capture the full discovery channel."
          }
        },
        {
          "@type": "Question",
          "name": "Why do contractors struggle more than other industries with AI search?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Contractors face a unique combination of challenges. Most rely on directory platforms like HomeAdvisor and Angi that AI crawlers cannot fully access. Their websites are often single-page or template-based with minimal content. They rarely publish educational material that AI can evaluate for expertise. And their customer base searches with high-intent, urgent queries that AI platforms prioritize answering with verified, trusted sources."
          }
        },
        {
          "@type": "Question",
          "name": "Do Google reviews help contractors show up on ChatGPT?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Google reviews help with Google AI Overviews, but ChatGPT and most other AI platforms cannot access Google reviews because they are rendered via JavaScript. For broader AI visibility, contractors need reviews on crawlable platforms like Yelp, BBB, and industry-specific directories, plus customer testimonials published directly on their own website as plain HTML text that AI crawlers can read."
          }
        },
        {
          "@type": "Question",
          "name": "Can a small local contractor compete with large franchise operations in AI search?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. AI platforms prioritize relevance, content depth, and trust signals over company size. A solo plumber with well-structured service area pages, genuine customer testimonials, verifiable licensing information, and consistent directory listings can outperform a national franchise that relies on a generic template website. AI rewards specificity and verifiable local expertise over brand recognition alone."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take for a contractor to start appearing in AI results?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most home service companies begin seeing AI mentions within 60 to 90 days after implementing a structured optimization approach. This involves building service-specific and area-specific pages with proper schema markup, ensuring consistent NAP data across directories, publishing customer-focused educational content, and maintaining reviews on AI-readable platforms. Emergency and high-intent queries tend to see results faster."
          }
        },
        {
          "@type": "Question",
          "name": "Is traditional SEO enough for contractors in the AI search era?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Traditional SEO is no longer sufficient on its own. While ranking on Google still matters, AI platforms use different evaluation criteria than Google's algorithm. AI cross-references multiple data sources, evaluates content depth differently, and prioritizes structured information that answers specific questions. Contractors who only focus on Google rankings miss the growing segment of customers who start their search with AI platforms."
          }
        },
        {
          "@type": "Question",
          "name": "What is the biggest mistake contractors make with their online presence for AI?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The biggest mistake is relying entirely on third-party lead generation platforms like HomeAdvisor, Angi, and Thumbtack as their primary digital presence. These platforms keep the customer relationship and the data. AI crawlers often cannot access the contractor profiles on these platforms. When a homeowner asks AI for a plumber recommendation, the AI has no information about contractors who exist only on lead-gen platforms."
          }
        }
      ]
    },
    {
      "@type": "Organization",
      "@id": "https://theanswerengine.ai/#organization",
      "name": "The Answer Engine",
      "url": "https://theanswerengine.ai",
      "logo": "https://theanswerengine.ai/TheAnswerEngine_Color.png",
      "description": "Answer Engine Optimization agency helping businesses get cited by AI platforms."
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://theanswerengine.ai/" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://theanswerengine.ai/blog" },
        { "@type": "ListItem", "position": 3, "name": "Contractors & AI Search" }
      ]
    }
  ]
}

function Breadcrumb() {
  return (
    <nav className="text-sm text-gray-500 mb-8">
      <Link href="/" className="hover:text-white transition-colors">Home</Link>
      <span className="mx-2">&rsaquo;</span>
      <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
      <span className="mx-2">&rsaquo;</span>
      <span className="text-gray-400">Contractors &amp; AI Search</span>
    </nav>
          {/* Championship Cover Image */}
          <div className="ae-article-hero w-full rounded-xl overflow-hidden mb-10" style={{ maxHeight: 420 }}>
            <img
              src="/blog/how-contractors-and-home-service-companies-win-ai-search.webp"
              alt="how contractors and home service companies win ai search"
              style={{ width: '100%', height: 420, objectFit: 'cover', display: 'block' }}
              loading="eager"
            />
          </div>
  )
}

export default function HowContractorsWinAISearch() {
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
          <svg className="absolute inset-0 w-full h-full opacity-[0.03]" aria-hidden="true">
            <defs>
              <pattern id="hero-grid-contractors" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-grid-contractors)" />
          </svg>
          <div className="relative max-w-4xl mx-auto px-6 py-16 sm:py-24">
            <Breadcrumb />
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 bg-[#F27D24]/10 border border-[#F27D24]/30">
              <span className="text-sm font-semibold tracking-wider uppercase text-[#F27D24]">How-To Guides</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight font-plus-jakarta">
              How Contractors and Home Service Companies Win{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F27D24] to-orange-400">AI Search</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
              Homeowners no longer scroll through ten blue links to find a plumber. They ask AI. If your company is not in the answer, the phone does not ring.
            </p>
            <div className="flex flex-wrap gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>March 31, 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>16 min read</span>
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
                <div className="ae-stat-label">of consumers now use AI to find local services, up from 6% last year</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-value ae-accent">1.2%</div>
                <div className="ae-stat-label">of local businesses are currently recommended by ChatGPT</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-value ae-accent">$650B+</div>
                <div className="ae-stat-label">U.S. home services market size, with AI reshaping how customers find providers</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-value ae-accent">10-15x</div>
                <div className="ae-stat-label">more revenue from phone calls vs. web leads in home services</div>
              </div>
            </div>

            {/* TABLE OF CONTENTS */}
            <div className="ae-toc not-prose">
              <div className="ae-toc-title">Table of Contents</div>
              <ol>
                <li><a href="#homeowner-shift">The Homeowner Discovery Shift</a></li>
                <li><a href="#lead-gen-gap">The Lead Gen Platform Trap</a></li>
                <li><a href="#ai-evaluation">What AI Evaluates Before Recommending a Contractor</a></li>
                <li><a href="#content-depth">Why Content Depth Beats Paid Ads in AI Search</a></li>
                <li><a href="#reviews-signals">Reviews and Response Patterns AI Actually Reads</a></li>
                <li><a href="#emergency-voice">Emergency Queries, Voice Search, and the Urgency Factor</a></li>
                <li><a href="#common-mistakes">The 6 Mistakes Making Contractors Invisible to AI</a></li>
                <li><a href="#decision-matrix">AI Visibility Decision Matrix by Trade</a></li>
                <li><a href="#cheat-sheet">AI Visibility Cheat Sheet for Contractors</a></li>
                <li><a href="#faq">Frequently Asked Questions</a></li>
              </ol>
            </div>

            {/* SECTION 1: THE HOMEOWNER SHIFT */}
            <span className="ae-section-label" id="homeowner-shift">The Shift</span>
            <h2>The Homeowner Discovery Shift</h2>

            <p>A homeowner with a burst pipe at 11 PM used to open Google, type &quot;emergency plumber near me,&quot; and call the first number in the map pack. That behavior is evolving. Today, a growing percentage of homeowners open ChatGPT, Google AI, or Perplexity and ask something far more specific: &quot;Who is the best licensed plumber for a slab leak in [city]?&quot; or &quot;Which HVAC company near me has the fastest response time for AC repair?&quot;</p>

            <p>The AI does not return a list of ten links. It names specific companies. It explains why it chose them. It often includes details about licensing, service areas, average review scores, and specialties. The homeowner reads the recommendation, checks the website, and calls. What used to be a multi-day research process now collapses into minutes. Markets fill fast. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Check your territory availability.</a></p>

            <p>This compression matters enormously for home service companies because phone calls convert to 10 to 15 times more revenue than web leads, and callers convert 30% faster. The companies AI recommends get those calls. Everyone else gets silence.</p>

            <div className="ae-quote not-prose">
              <p>AI search is now the third most-used discovery channel for local businesses, behind only Google and Facebook. For home services, where urgency drives decision-making, this shift is accelerating faster than any other industry. Your first step: <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free AERO Blind Spot Scan.</a></p>
            </div>

            <p>The critical question is not whether AI search matters for contractors. It does. The question is whether AI platforms can find your company, verify your information, and trust you enough to put your name in front of a homeowner who needs help right now.</p>

            <p>For a broader look at how this shift affects all local businesses, see our guide on <Link href="/blog/how-customers-use-ai-to-find-local-businesses">how customers use AI to find local businesses</Link>. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Claim your free call</a> before your market fills.</p>

            {/* CTA 1 */}
            <div className="ae-cta-inline not-prose">
              <p>Find out if AI platforms are recommending your competitors instead of your company.</p>
              <Link href="/blindspot">Get Your Free Blind Spot Report &rarr;</Link>
            </div>

            {/* SECTION 2: THE LEAD GEN TRAP */}
            <span className="ae-section-label" id="lead-gen-gap">The Trap</span>
            <h2>The Lead Gen Platform Trap</h2>

            <p>Most home service companies built their entire customer acquisition strategy around platforms like HomeAdvisor, Angi, Thumbtack, and Bark. These platforms worked well for a decade. You paid for leads, you called fast, you closed jobs. But these platforms created a dependency that is now becoming a liability in the AI era. Reach out: <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>

            <p>Here is the problem: AI crawlers cannot fully access your profile on most lead generation platforms. Your reviews, your service descriptions, your response times, your customer history: all of it is locked behind JavaScript rendering, login walls, or proprietary data structures that AI platforms cannot read. When a homeowner asks ChatGPT for a plumber recommendation, ChatGPT has zero data about contractors who only exist on HomeAdvisor.</p>

            {/* COMPARISON TABLE */}
            <div className="ae-comparison-table not-prose">
              <table>
                <thead>
                  <tr>
                    <th>Factor</th>
                    <th>Lead Gen Platforms</th>
                    <th>AI Search Discovery</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Customer relationship</td>
                    <td>Platform owns it</td>
                    <td>You own it</td>
                  </tr>
                  <tr>
                    <td>Cost structure</td>
                    <td>Pay per lead ($50 to $200+)</td>
                    <td>Organic, no per-lead cost</td>
                  </tr>
                  <tr>
                    <td>Lead quality</td>
                    <td>Shared with 3 to 5 competitors</td>
                    <td>Direct recommendation, exclusive</td>
                  </tr>
                  <tr>
                    <td>AI crawler access</td>
                    <td>Mostly blocked</td>
                    <td>Fully crawlable (if built right)</td>
                  </tr>
                  <tr>
                    <td>Data portability</td>
                    <td>Locked in the platform</td>
                    <td>Lives on your website</td>
                  </tr>
                  <tr>
                    <td>Brand building</td>
                    <td>Commoditized listing</td>
                    <td>Named recommendation with context</td>
                  </tr>
                  <tr>
                    <td>Long-term value</td>
                    <td>Stops when you stop paying</td>
                    <td>Compounds over time</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>The shift does not mean lead gen platforms are useless. They still drive volume. But relying on them as your only digital presence means you are invisible to the fastest-growing discovery channel in home services. The companies that win in 2026 and beyond are the ones building their own AI-visible digital presence alongside their existing lead sources. Call us at <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> today.</p>

            <div className="ae-callout ae-callout-warning not-prose">
              <p><strong>The dependency trap:</strong> If your only online presence is a HomeAdvisor profile and a basic Google Business Profile, AI platforms have almost nothing to evaluate. You are competing against contractors who have structured websites, educational content, and verified information across multiple sources. In AI search, the company with the most verifiable, crawlable information wins.</p>
            </div>

            {/* CTA 2 */}
            <div className="ae-cta-inline not-prose">
              <p>Wondering if AI can even find your company right now? Most contractors are shocked by the answer. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Lock in your exclusive territory now.</a></p>
              <a href="tel:+12134442229">Call (213) 444-2229 for a Free AI Visibility Check &rarr;</a>
            </div>

            {/* SECTION 3: AI EVALUATION */}
            <span className="ae-section-label" id="ai-evaluation">AI Evaluation</span>
            <h2>What AI Evaluates Before Recommending a Contractor</h2>

            <p>AI platforms do not guess which contractor to recommend. They cross-reference your information across dozens of data sources before deciding whether you are trustworthy enough to put in front of a homeowner. Understanding these evaluation criteria is the difference between getting recommended and getting ignored.</p>

            <h3>Cross-Platform Verification</h3>

            <p>When a homeowner asks AI for a plumber, electrician, or HVAC technician, the platform checks your information across Google Business Profile, Yelp, BBB, Facebook, Nextdoor, and industry-specific directories. It looks for consistency: does your company name match everywhere? Is the phone number identical? Are your service areas aligned? Do the hours match? <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Get your free AI readiness report.</a></p>

            <p>Inconsistencies in basic NAP (Name, Address, Phone) data signal unreliability. If your BBB listing says you serve a 30-mile radius and your Google profile says 15 miles, AI has less confidence recommending you because it cannot determine which is accurate.</p>

            <h3>Licensing and Credential Verification</h3>

            <p>Home services carry inherent risk. A bad plumber can flood a house. A bad electrician can cause a fire. AI platforms take this seriously. They look for verifiable credentials: state contractor licenses, bonding and insurance information, trade certifications, and professional association memberships. Contractors who display this information prominently in crawlable HTML text give AI the trust signals it needs. Ready to act? <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a free strategy session.</a></p>

            <div className="ae-callout ae-callout-info not-prose">
              <p><strong>What AI looks for on contractor websites:</strong> State license numbers in plain text (not images), bonding and insurance verification, BBB accreditation status, trade-specific certifications (EPA 608, NATE, master plumber designation), and years in business. Every verifiable credential increases AI confidence in recommending your company.</p>
            </div>

            <h3>Service Area Depth</h3>

            <p>A contractor website that says &quot;We serve the greater metro area&quot; gives AI almost nothing to work with. When a homeowner asks &quot;Who is the best electrician in [specific neighborhood]?&quot; AI needs content that specifically addresses that area. Contractors with individual service area pages that mention neighborhoods, zip codes, and local landmarks give AI the geographic specificity it needs to match queries with confidence. Drop us a line at <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>

            <h3>Response Pattern Signals</h3>

            <p>AI platforms evaluate response patterns as a proxy for reliability. How quickly does the company respond to inquiries? Do they have 24/7 availability for emergency services? Is there a clear call-to-action on every page? These behavioral signals, combined with review sentiment about responsiveness, influence whether AI trusts a contractor enough to recommend them for urgent queries.</p>

            {/* CTA 3 */}
            <div className="ae-cta-inline not-prose">
              <p>See exactly what AI platforms say (or do not say) about your contracting company. Speak to an AEO specialist: <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.</p>
              <Link href="/blindspot">Run Your Free AI Visibility Scan &rarr;</Link>
            </div>

            {/* SECTION 4: CONTENT DEPTH */}
            <span className="ae-section-label" id="content-depth">Content Depth</span>
            <h2>Why Content Depth Beats Paid Ads in AI Search</h2>

            <p>Google Ads still work. They put your name at the top of search results when someone types a keyword. But AI search operates on a fundamentally different model. When a homeowner asks ChatGPT for a recommendation, there are no ad slots. There is no pay-to-play. AI evaluates your actual content, your actual expertise, and your actual reputation, then makes a judgment call.</p>

            <p>This means the contractor with the deepest, most informative content on their website has a structural advantage that money cannot buy. A plumbing company that publishes detailed pages explaining the difference between trenchless and traditional sewer repair, including when each approach makes sense, what homeowners should expect, and what questions to ask, gives AI far more material to evaluate than a competitor whose entire website says &quot;We fix pipes. Call now.&quot; One client per city. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">See if your market is available.</a></p>

            <p>Research from a 237,000-query analysis of AI overviews in home services revealed that content depth is the single strongest predictor of AI citation. Not domain authority. Not backlink count. Not ad spend. Content that thoroughly addresses the questions homeowners actually ask is what earns the recommendation.</p>

            <div className="ae-callout ae-callout-orange not-prose">
              <p><strong>The content gap is your opportunity:</strong> Most contractors have websites with five pages: Home, About, Services, Reviews, Contact. AI needs 10 to 20 times that amount of structured, service-specific, area-specific content to build confidence in a recommendation. The contractors who close this gap first capture a disproportionate share of AI-driven leads in their market. Check where you stand: <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free Blind Spot Scan.</a></p>
            </div>

            <p>To understand why publishing educational content matters for AI citations, read our guide on <Link href="/blog/does-having-a-blog-actually-help-ai-recommend-your-business">whether a blog actually helps AI recommend your business</Link>.</p>

            {/* CTA 4 */}
            <div className="ae-cta-inline not-prose">
              <p>Your competitors are publishing content that AI reads. Are you? <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Schedule a free 30-min call.</a></p>
              <Link href="/blindspot">Check Your AI Content Gap &rarr;</Link>
            </div>

            {/* SECTION 5: REVIEWS AND RESPONSE PATTERNS */}
            <span className="ae-section-label" id="reviews-signals">Reviews</span>
            <h2>Reviews and Response Patterns AI Actually Reads</h2>

            <p>Reviews are the lifeblood of home service marketing. A 4.8-star rating on Google with 500 reviews is powerful social proof. But there is a problem: most AI platforms cannot read Google reviews. Google reviews are rendered via JavaScript, which ChatGPT, Perplexity, and most other AI crawlers cannot access. That 4.8-star rating you worked years to build is invisible to a large and growing segment of your potential customers.</p>

            <p>AI platforms can read reviews on certain platforms: Yelp, BBB, and some industry-specific directories publish reviews in crawlable HTML. But the most powerful review signal for AI visibility is something most contractors overlook entirely: customer testimonials published directly on your own website as plain HTML text. Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> for a custom strategy.</p>

            <h3>What makes a review AI-readable?</h3>

            <p>For AI to process a review, the text must be in crawlable HTML on a page that AI crawlers can access. Reviews embedded via JavaScript widgets, loaded through iframes, or displayed through third-party review aggregator scripts are invisible to most AI crawlers. The reviews that matter for AI search are the ones published as actual text on your website, on your Yelp profile, and on your BBB page.</p>

            {/* PROS/CONS */}
            <div className="ae-pros-cons not-prose">
              <div className="ae-pros-box">
                <h4>AI-Readable Review Sources</h4>
                <ul>
                  <li>Yelp business profiles (crawlable HTML)</li>
                  <li>BBB reviews and complaints (structured data)</li>
                  <li>Nextdoor recommendations (partially crawlable)</li>
                  <li>Website testimonials in plain HTML text</li>
                  <li>Facebook reviews (partially accessible)</li>
                  <li>Industry directories (Houzz, Porch)</li>
                </ul>
              </div>
              <div className="ae-cons-box">
                <h4>AI-Invisible Review Sources</h4>
                <ul>
                  <li>Google reviews (JavaScript rendered)</li>
                  <li>HomeAdvisor/Angi reviews (login walls)</li>
                  <li>Thumbtack reviews (proprietary rendering)</li>
                  <li>Widget-embedded review feeds on websites</li>
                  <li>Screenshot-based testimonial images</li>
                  <li>Video-only testimonials without transcripts</li>
                </ul>
              </div>
            </div>

            <p>Review response patterns also matter. AI evaluates whether a business responds to reviews, how quickly, and with what level of professionalism. A contractor who responds to every review (positive and negative) within 24 hours with thoughtful, specific responses signals a level of engagement and reliability that AI factors into its confidence score. Questions? Call <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.</p>

            <p>For more on how reviews influence AI recommendations across industries, see our deep dive on <Link href="/blog/how-to-optimize-your-google-business-profile-for-ai">optimizing your Google Business Profile for AI</Link>.</p>

            {/* CTA 5 */}
            <div className="ae-cta-inline not-prose">
              <p>Your 5-star reviews might be invisible to AI. Find out which ones actually count. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Secure your territory before a competitor does.</a></p>
              <a href="tel:+12134442229">Call (213) 444-2229 &rarr;</a>
            </div>

            {/* SECTION 6: EMERGENCY AND VOICE */}
            <span className="ae-section-label" id="emergency-voice">Emergency + Voice</span>
            <h2>Emergency Queries, Voice Search, and the Urgency Factor</h2>

            <p>Home services have a characteristic that most other industries do not: a significant percentage of customer searches happen during emergencies. A flooded basement at 2 AM. An AC failure during a July heat wave. A gas smell in the kitchen. These are not casual research queries. These are high-urgency, high-intent moments where the homeowner needs an answer immediately.</p>

            <p>AI platforms handle emergency queries differently than informational ones. When urgency is detected in the query, AI prioritizes contractors who signal 24/7 availability, emergency service capabilities, and fast response times. The specific signals that matter include published emergency phone numbers, explicit 24/7 or after-hours availability statements, and content that addresses emergency scenarios directly. <a href="https://theanswerengine.ai/blindspot" className="cta-inline">See your AI visibility score — free.</a></p>

            <p>Voice search amplifies this dynamic. 42% of consumers now trust AI recommendations as much as traditional online reviews, and voice-activated AI assistants like Siri, Alexa, and Google Assistant handle a growing share of emergency home service queries. A homeowner with water pouring through the ceiling does not sit down at a computer. They say, &quot;Hey Siri, find me an emergency plumber nearby.&quot;</p>

            <div className="ae-callout ae-callout-info not-prose">
              <p><strong>The voice search pattern:</strong> Voice queries are conversational and specific. Instead of typing &quot;plumber near me,&quot; homeowners ask &quot;Who is the best plumber for a water heater replacement in [city] that can come today?&quot; AI platforms answer these queries by pulling from the most structured, detailed, and locally relevant content available. Generic websites with no service-specific pages cannot compete. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book your free consultation here.</a></p>
            </div>

            {/* CTA 6 */}
            <div className="ae-cta-inline not-prose">
              <p>Emergency queries are the highest-value leads in home services. Is AI sending them to you or your competitor?</p>
              <Link href="/blindspot">Get Your Free Blind Spot Report &rarr;</Link>
            </div>

            {/* SECTION 7: COMMON MISTAKES */}
            <span className="ae-section-label" id="common-mistakes">Common Mistakes</span>
            <h2>The 6 Mistakes Making Contractors Invisible to AI</h2>

            <p>After analyzing thousands of contractor websites and their AI visibility scores, the same patterns emerge repeatedly. These are not minor oversights. Each one is a structural gap that prevents AI from recommending your company. Contact us at <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>

            {/* MISTAKE GRID */}
            <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
              <div className="p-5 rounded-xl bg-white/[0.03] border border-white/10">
                <div className="text-[#F27D24] font-bold text-lg mb-2 font-plus-jakarta">1. The Single-Page Website</div>
                <p className="text-gray-400 text-sm leading-relaxed">A one-page website with a hero image, phone number, and &quot;About Us&quot; blurb gives AI nothing to evaluate. No service detail, no area coverage, no expertise signals. AI skips these entirely.</p>
              </div>
              <div className="p-5 rounded-xl bg-white/[0.03] border border-white/10">
                <div className="text-[#F27D24] font-bold text-lg mb-2 font-plus-jakarta">2. Directory-Only Presence</div>
                <p className="text-gray-400 text-sm leading-relaxed">If your digital footprint is HomeAdvisor + Google Business Profile and nothing else, most AI platforms cannot access your information. You are invisible to the fastest-growing discovery channel. Reach us at <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.</p>
              </div>
              <div className="p-5 rounded-xl bg-white/[0.03] border border-white/10">
                <div className="text-[#F27D24] font-bold text-lg mb-2 font-plus-jakarta">3. No Service-Specific Pages</div>
                <p className="text-gray-400 text-sm leading-relaxed">Listing 15 services on one page tells AI you do everything but explains nothing. AI needs dedicated pages for each core service with depth, context, and specificity.</p>
              </div>
              <div className="p-5 rounded-xl bg-white/[0.03] border border-white/10">
                <div className="text-[#F27D24] font-bold text-lg mb-2 font-plus-jakarta">4. Missing Credentials</div>
                <p className="text-gray-400 text-sm leading-relaxed">License numbers in image format, no mention of bonding or insurance, and no trade certifications. AI cannot read images. Credentials must be in crawlable text to count. We work with one business per market. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Check if yours is still open.</a></p>
              </div>
              <div className="p-5 rounded-xl bg-white/[0.03] border border-white/10">
                <div className="text-[#F27D24] font-bold text-lg mb-2 font-plus-jakarta">5. JavaScript-Rendered Content</div>
                <p className="text-gray-400 text-sm leading-relaxed">Reviews loaded via widgets, service details rendered by JavaScript frameworks, and dynamic pricing calculators. All invisible to AI crawlers. If the HTML source is empty, AI sees nothing.</p>
              </div>
              <div className="p-5 rounded-xl bg-white/[0.03] border border-white/10">
                <div className="text-[#F27D24] font-bold text-lg mb-2 font-plus-jakarta">6. Zero Educational Content</div>
                <p className="text-gray-400 text-sm leading-relaxed">No blog, no guides, no FAQ pages. Just &quot;We fix it. Call us.&quot; AI evaluates expertise through content depth. No content means no expertise signal, which means no recommendation. Find your gaps with a <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free AERO scan.</a></p>
              </div>
            </div>

            <p>Each of these mistakes is fixable. But fixing them requires understanding not just what AI looks for, but how to structure the solution so AI platforms can actually process it. This is where most contractors get stuck: they know they need a better website, but they do not know what &quot;better&quot; means in the context of AI search.</p>

            {/* CTA 7 */}
            <div className="ae-cta-inline not-prose">
              <p>How many of these 6 mistakes is your company making? Most contractors score 4 out of 6. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Schedule a free call</a> to see where you stand.</p>
              <Link href="/blindspot">Find Out With a Free Blind Spot Report &rarr;</Link>
            </div>

            {/* SECTION 8: DECISION MATRIX */}
            <span className="ae-section-label" id="decision-matrix">By Trade</span>
            <h2>AI Visibility Decision Matrix by Trade</h2>

            <p>Not all home service trades face the same AI search landscape. The signals that matter most, the competitive dynamics, and the content requirements vary significantly by trade. Here is how the landscape breaks down.</p>

            {/* DECISION MATRIX TABLE */}
            <div className="ae-decision-matrix not-prose">
              <table>
                <thead>
                  <tr>
                    <th>Trade</th>
                    <th>Emergency Query Volume</th>
                    <th>Content Depth Needed</th>
                    <th>Licensing Scrutiny</th>
                    <th>AI Competition Level</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Plumbing</td>
                    <td>Very High</td>
                    <td>High</td>
                    <td>High</td>
                    <td>Medium (most are invisible)</td>
                  </tr>
                  <tr>
                    <td>HVAC</td>
                    <td>High (seasonal)</td>
                    <td>Very High</td>
                    <td>High</td>
                    <td>Medium-High</td>
                  </tr>
                  <tr>
                    <td>Electrical</td>
                    <td>Medium-High</td>
                    <td>High</td>
                    <td>Very High</td>
                    <td>Low (wide open)</td>
                  </tr>
                  <tr>
                    <td>Roofing</td>
                    <td>Medium (storm-driven)</td>
                    <td>Medium</td>
                    <td>High</td>
                    <td>Low</td>
                  </tr>
                  <tr>
                    <td>Landscaping</td>
                    <td>Low</td>
                    <td>Medium</td>
                    <td>Low</td>
                    <td>Very Low</td>
                  </tr>
                  <tr>
                    <td>Pest Control</td>
                    <td>Medium</td>
                    <td>Medium-High</td>
                    <td>Medium</td>
                    <td>Low</td>
                  </tr>
                  <tr>
                    <td>General Contracting</td>
                    <td>Low</td>
                    <td>Very High</td>
                    <td>Very High</td>
                    <td>Low</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>The key insight from this matrix: AI competition is low across nearly every home service trade because so few contractors have optimized for it. The early movers in each trade and each local market will capture a dominant position that becomes increasingly difficult for competitors to displace once established. Send your questions to <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>

            {/* CTA 8 */}
            <div className="ae-cta-inline not-prose">
              <p>The AI search landscape for your trade is wide open. The first mover in your market wins.</p>
              <a href="mailto:support@theanswerengine.ai">Email support@theanswerengine.ai to Claim Your Market &rarr;</a>
            </div>

            {/* SECTION 9: CHEAT SHEET */}
            <span className="ae-section-label" id="cheat-sheet">Quick Reference</span>
            <h2>AI Visibility Cheat Sheet for Contractors</h2>

            <div className="ae-cheat-sheet not-prose">
              <div className="ae-cheat-header">AI Visibility Signals for Home Service Companies</div>
              <div className="ae-cheat-grid">
                <div className="ae-cheat-item">
                  <div className="ae-cheat-category">Foundation</div>
                  <ul>
                    <li>Consistent NAP data across all directories</li>
                    <li>License numbers in crawlable HTML text</li>
                    <li>Bonding and insurance verification on website</li>
                    <li>Professional association memberships displayed</li>
                    <li>HTTPS with clear privacy policy and terms</li>
                  </ul>
                </div>
                <div className="ae-cheat-item">
                  <div className="ae-cheat-category">Content</div>
                  <ul>
                    <li>Individual pages per core service offered</li>
                    <li>Service area pages with local specificity</li>
                    <li>Educational content answering homeowner questions</li>
                    <li>Emergency service availability clearly stated</li>
                    <li>FAQ pages addressing common concerns by service</li>
                  </ul>
                </div>
                <div className="ae-cheat-item">
                  <div className="ae-cheat-category">Reviews</div>
                  <ul>
                    <li>Testimonials published as plain HTML on website</li>
                    <li>Active Yelp and BBB review profiles</li>
                    <li>Responses to every review within 24 hours</li>
                    <li>Specific project details in review responses</li>
                    <li>Review diversity across multiple platforms</li>
                  </ul>
                </div>
                <div className="ae-cheat-item">
                  <div className="ae-cheat-category">Technical</div>
                  <ul>
                    <li>Server-rendered HTML (not JavaScript dependent)</li>
                    <li>Schema markup for LocalBusiness and Service</li>
                    <li>Mobile-optimized with fast load times</li>
                    <li>Crawlable by AI bots (check robots.txt)</li>
                    <li>Structured data for service areas and hours</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA 9 */}
            <div className="ae-cta-inline not-prose">
              <p>This cheat sheet shows what matters. Getting it right takes expertise. We handle it for you. Call <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> for a free consultation.</p>
              <Link href="/blindspot">Start With a Free Blind Spot Report &rarr;</Link>
            </div>

            {/* THE BOTTOM LINE */}
            <span className="ae-section-label">The Bottom Line</span>
            <h2>The Window Is Open. It Will Not Stay Open.</h2>

            <p>Right now, only 1.2% of local businesses are recommended by ChatGPT. In the home services industry, that number is even lower. Most contractors have no AI-visible digital presence beyond a Google Business Profile and a listing on a lead gen platform that AI crawlers cannot access.</p>

            <p>This creates an extraordinary window of opportunity. The first contractor in each local market who builds a comprehensive, AI-optimized digital presence will capture a dominant position in AI recommendations. As AI search adoption grows (it jumped from 6% to 45% in a single year), that dominant position becomes increasingly valuable and increasingly difficult for competitors to displace. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Claim your market territory — one client per area.</a></p>

            <p>The contractors who move now are not just adapting to a trend. They are building a moat. AI platforms develop preferences based on the data they accumulate over time. The longer your company is visible, the more data AI collects about you, and the stronger your recommendation position becomes. Waiting six months means giving your competitors a six-month head start in a race where early position matters enormously.</p>

            <p>For a detailed look at how to measure whether your efforts are working, see our guide on <Link href="/blog/how-to-get-cited-by-chatgpt-local-business">getting cited by ChatGPT as a local business</Link>. <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Run your free AI Blind Spot Scan.</a></p>

            {/* CTA BLOCK */}
            <div className="not-prose my-16 p-8 rounded-2xl bg-gradient-to-br from-[#F27D24]/10 to-transparent border border-[#F27D24]/20">
              <h3 className="font-plus-jakarta text-2xl font-bold text-white mb-3">Stop Losing Leads to AI-Invisible Service Pages</h3>
              <p className="text-gray-400 mb-6">Get a free Blind Spot Report and find out if AI is recommending your competitors instead of you.</p>
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

            {/* AUTHOR CARD */}
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

            {/* FAQ SECTION */}
            <span className="ae-section-label" id="faq">FAQ</span>
            <h2>Frequently Asked Questions</h2>

            <div className="ae-faq not-prose">
              <div className="ae-faq-item">
                <h3>Are home service companies really losing leads to AI search?</h3>
                <p>Yes. 45% of consumers now use AI tools like ChatGPT and Google AI to find local services, up from just 6% one year ago. Home service queries are among the highest-intent local searches, and AI platforms only recommend businesses they can verify across multiple data sources. Companies that are not optimized for AI discovery are invisible to this rapidly growing channel.</p>
              </div>

              <div className="ae-faq-item">
                <h3>Which AI platforms recommend contractors and home service companies?</h3>
                <p>ChatGPT, Google AI Overviews, Perplexity, Claude, Apple Intelligence, and Microsoft Copilot all surface contractor recommendations. Each platform evaluates different data sources. ChatGPT relies on crawlable web content and directories, Google AI references Business Profiles and reviews, and Perplexity cross-references multiple sources for verification. Contractors need visibility across all of them to capture the full discovery channel. Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> to get started.</p>
              </div>

              <div className="ae-faq-item">
                <h3>Why do contractors struggle more than other industries with AI search?</h3>
                <p>Contractors face a unique combination of challenges. Most rely on directory platforms like HomeAdvisor and Angi that AI crawlers cannot fully access. Their websites are often single-page or template-based with minimal content. They rarely publish educational material that AI can evaluate for expertise. And their customer base searches with high-intent, urgent queries that AI platforms prioritize answering with verified, trusted sources.</p>
              </div>

              <div className="ae-faq-item">
                <h3>Do Google reviews help contractors show up on ChatGPT?</h3>
                <p>Google reviews help with Google AI Overviews, but ChatGPT and most other AI platforms cannot access Google reviews because they are rendered via JavaScript. For broader AI visibility, contractors need reviews on crawlable platforms like Yelp, BBB, and industry-specific directories, plus customer testimonials published directly on their own website as plain HTML text that AI crawlers can read. <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a></p>
              </div>

              <div className="ae-faq-item">
                <h3>Can a small local contractor compete with large franchise operations in AI search?</h3>
                <p>Absolutely. AI platforms prioritize relevance, content depth, and trust signals over company size. A solo plumber with well-structured service area pages, genuine customer testimonials, verifiable licensing information, and consistent directory listings can outperform a national franchise that relies on a generic template website. AI rewards specificity and verifiable local expertise over brand recognition alone.</p>
              </div>

              <div className="ae-faq-item">
                <h3>How long does it take for a contractor to start appearing in AI results?</h3>
                <p>Most home service companies begin seeing AI mentions within 60 to 90 days after implementing a structured optimization approach. This involves building service-specific and area-specific pages with proper schema markup, ensuring consistent NAP data across directories, publishing customer-focused educational content, and maintaining reviews on AI-readable platforms. Emergency and high-intent queries tend to see results faster.</p>
              </div>

              <div className="ae-faq-item">
                <h3>Is traditional SEO enough for contractors in the AI search era?</h3>
                <p>Traditional SEO is no longer sufficient on its own. While ranking on Google still matters, AI platforms use different evaluation criteria than Google&apos;s algorithm. AI cross-references multiple data sources, evaluates content depth differently, and prioritizes structured information that answers specific questions. Contractors who only focus on Google rankings miss the growing segment of customers who start their search with AI platforms.</p>
              </div>

              <div className="ae-faq-item">
                <h3>What is the biggest mistake contractors make with their online presence for AI?</h3>
                <p>The biggest mistake is relying entirely on third-party lead generation platforms like HomeAdvisor, Angi, and Thumbtack as their primary digital presence. These platforms keep the customer relationship and the data. AI crawlers often cannot access the contractor profiles on these platforms. When a homeowner asks AI for a plumber recommendation, the AI has no information about contractors who exist only on lead-gen platforms.</p>
              </div>
            </div>

            {/* CTA 10 */}
            <div className="ae-cta-inline not-prose">
              <p>Still have questions? We answer them for free. No pitch, no pressure.</p>
              <a href="tel:+12134442229">Call (213) 444-2229 &rarr;</a>
            </div>

          </div>
        </article>

        {/* FINAL CTA */}
        <section className="ae-final-cta">
          <div className="max-w-4xl mx-auto px-6 py-20 text-center">
            <div className="ae-pulse-glow" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white font-plus-jakarta">
              Your Competitors Are Already Invisible to AI.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F27D24] to-orange-400">Do Not Join Them.</span>
            </h2>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              Get a free Blind Spot Report showing exactly what AI platforms say (and do not say) when homeowners search for a contractor like you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/blindspot" className="inline-flex items-center gap-2 bg-[#F27D24] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#D96416] transition-colors">
                Get Your Free Blind Spot Report
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
              <a href="tel:+12134442229" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-lg">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                (213) 444-2229
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
