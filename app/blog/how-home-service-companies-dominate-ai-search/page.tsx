import type { Metadata } from 'next';
import Link from 'next/link';

export const revalidate = 86400;
export const dynamic = 'force-static';
export const dynamicParams = true;

export const metadata: Metadata = {
  title: "How Home Service Companies Are Dominating AI Search Right Now",
  description: "Learn the exact strategies plumbers, HVAC pros, roofers, and electricians are using to get recommended by ChatGPT, Google AI, and Perplexity. Real data, real results.",
  keywords: ["home service AI search", "HVAC AI optimization", "plumber ChatGPT", "home services AI marketing", "answer engine optimization home services", "local service AI visibility", "AI search home contractors"],
  openGraph: {
    title: "How Home Service Companies Are Dominating AI Search Right Now",
    description: "The playbook smart home service companies are using to get recommended by AI platforms. Real strategies, real data.",
    type: 'article',
    url: 'https://theanswerengine.ai/blog/how-home-service-companies-dominate-ai-search',
    images: [{ url: 'https://theanswerengine.ai/api/og/how-home-service-companies-dominate-ai-search', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "How Home Service Companies Are Dominating AI Search Right Now",
    description: "The playbook smart home service companies are using to get recommended by AI platforms.",
  },
  alternates: {
    canonical: 'https://theanswerengine.ai/blog/how-home-service-companies-dominate-ai-search',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://theanswerengine.ai/blog/how-home-service-companies-dominate-ai-search#article",
      "headline": "How Home Service Companies Are Dominating AI Search Right Now",
      "description": "Learn the exact strategies plumbers, HVAC pros, roofers, and electricians are using to get recommended by ChatGPT, Google AI, and Perplexity.",
      "image": "https://theanswerengine.ai/api/og/how-home-service-companies-dominate-ai-search",
      "datePublished": "2026-03-17",
      "dateModified": "2026-03-17",
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
        "@id": "https://theanswerengine.ai/blog/how-home-service-companies-dominate-ai-search"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://theanswerengine.ai/blog/how-home-service-companies-dominate-ai-search#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do home service companies really need to worry about AI search?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. According to BrightLocal's 2026 research, 45% of consumers now use AI to find local business recommendations, up from just 6% in 2025. If your plumbing, HVAC, or roofing company is not visible to AI platforms, you are missing a rapidly growing segment of potential customers."
          }
        },
        {
          "@type": "Question",
          "name": "Which AI platforms recommend home service businesses?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ChatGPT, Google AI Overviews, Perplexity, Claude, and Gemini all surface local service recommendations. ChatGPT drives 87.4% of AI referral traffic, and Google AI Overviews now appear in over 25% of all searches. Each platform pulls data from different sources, so your business needs visibility across multiple channels."
          }
        },
        {
          "@type": "Question",
          "name": "What is the most important thing a home service company can do for AI visibility?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Build a content-rich website with structured data markup. Research shows that AI platforms go from 16% to 54% accuracy when content uses structured data. Your website should clearly state what services you offer, which areas you serve, your hours, and your credentials, with nothing left implied."
          }
        },
        {
          "@type": "Question",
          "name": "How do reviews affect AI recommendations for home service companies?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Reviews matter, but only reviews AI can actually read. Google reviews are invisible to most AI platforms because they require JavaScript to load. You need reviews on your own website (as plain text), Yelp, BBB, and industry directories like Angi or HomeAdvisor for AI platforms to factor them into recommendations."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take for a home service company to show up in AI search?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most businesses start seeing AI mentions within 60 to 90 days of implementing a structured optimization strategy. This includes building out service pages, adding schema markup, getting listed in crawlable directories, and publishing helpful content. Consistency matters more than speed."
          }
        },
        {
          "@type": "Question",
          "name": "Can a small local service company compete with big franchises in AI search?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. AI platforms prioritize relevance and authority over brand size. A local electrician with detailed service pages, genuine customer testimonials on their website, and consistent directory listings can outrank a national franchise that has a generic, templated website. AI rewards specificity and depth."
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
      "description": "Answer Engine Optimization agency helping local service businesses get cited by AI platforms."
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://theanswerengine.ai/" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://theanswerengine.ai/blog" },
        { "@type": "ListItem", "position": 3, "name": "How Home Service Companies Are Dominating AI Search Right Now" }
      ]
    }
  ]
};

function Breadcrumb() {
  return (
    <nav className="text-sm text-gray-500 mb-8">
      <Link href="/" className="hover:text-white transition-colors">Home</Link>
      <span className="mx-2">&rsaquo;</span>
      <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
      <span className="mx-2">&rsaquo;</span>
      <span className="text-gray-400">Home Service Companies &amp; AI Search</span>
    </nav>
          {/* Championship Cover Image */}
          <div className="ae-article-hero w-full rounded-xl overflow-hidden mb-10" style={{ maxHeight: 420 }}>
            <img
              src="/blog/how-home-service-companies-dominate-ai-search.webp"
              alt="how home service companies dominate ai search"
              style={{ width: '100%', height: 420, objectFit: 'cover', display: 'block' }}
              loading="eager"
            />
          </div>
  );
}

export default function HowHomeServiceCompaniesDominateAISearch() {
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
              <pattern id="hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-grid)" />
          </svg>
          <div className="relative max-w-4xl mx-auto px-6 py-16 sm:py-24">
            <Breadcrumb />
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 bg-[#F27D24]/10 border border-[#F27D24]/30">
              <span className="text-sm font-semibold tracking-wider uppercase text-[#F27D24]">Industry Guides</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">
              How Home Service Companies Are Dominating AI Search{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F27D24] to-orange-400">Right Now</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
              The contractors getting calls from ChatGPT and Google AI are not lucky. They are doing specific things that most competitors are not. Here is the playbook.
            </p>
            <div className="flex flex-wrap gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>March 17, 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>14 min read</span>
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

            {/* ── STATS GRID ── */}
            <div className="ae-stats-grid not-prose">
              <div className="ae-stat-card">
                <div className="ae-stat-value ae-accent">45%</div>
                <div className="ae-stat-label">of consumers now use AI to find local services (up from 6% in 2025)</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-value ae-accent">87.4%</div>
                <div className="ae-stat-label">of AI referral traffic comes from ChatGPT alone</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-value ae-accent">25%+</div>
                <div className="ae-stat-label">of Google searches now include AI Overviews</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-value ae-accent">12%</div>
                <div className="ae-stat-label">of contractors have embedded AI into their actual processes</div>
              </div>
            </div>

            {/* ── INTRODUCTION ── */}
            <span className="ae-section-label">The Shift</span>
            <h2>Something Big Is Happening and Most Contractors Are Missing It</h2>

            <p>When a homeowner asks ChatGPT &quot;Who is the best plumber near me?&quot; or Google AI serves up a recommendation for an HVAC company, certain businesses keep showing up. Not by accident. Not by luck. These companies have figured out how AI search works, and they are capturing leads that their competitors never even see.</p>

            <p>Meanwhile, the rest of the industry is still pouring money into the same old strategies: pay-per-click ads, SEO tactics from 2019, and Angi leads that cost $80 each. Those channels still work, but a new one is growing faster than anything we have seen in local marketing since Google Maps launched. Markets fill fast. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Check your territory availability.</a></p>

            <div className="ae-quote not-prose">
              <p>The contractors who show up in AI answers are getting calls. The ones who do not are invisible to a growing slice of their market.</p>
            </div>

            <p>Here is what the winning companies are doing differently, backed by real data from 2025 and 2026. Your first step: <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free AERO Blind Spot Scan.</a></p>

            {/* ── CTA 1 ── */}
            <div className="ae-cta-inline not-prose">
              <p>Find out if AI platforms are recommending your competitors instead of you.</p>
              <Link href="/blindspot">Get Your Free Blind Spot Report &rarr;</Link>
            </div>

            {/* ── THE AI SEARCH SHIFT ── */}
            <span className="ae-section-label">The Data</span>
            <h2>The AI Search Shift Is Not Coming. It Is Already Here.</h2>

            <p>Let us start with the numbers, because they tell a story that is impossible to ignore. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Claim your free call</a> before your market fills.</p>

            <div className="ae-callout ae-callout-warning not-prose">
              <p><strong>Critical stat:</strong> BrightLocal&apos;s 2026 Local Consumer Review Survey found that 45% of consumers now use AI to find local business recommendations. In 2025, that number was just 6%. That is not gradual growth. That is an explosion.</p>
            </div>

            <p>And it is not just ChatGPT. Google AI Overviews now appear in over a quarter of all searches. According to WebFX&apos;s analysis of 237,000+ home service queries, AI Overviews show up in 8.2% of home service searches overall, and that number jumps to 40.78% for longer, more specific questions like &quot;how much does it cost to replace a furnace in Denver.&quot; Reach out: <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>

            <p>Those longer questions are exactly the type that lead to booked jobs. When someone types a detailed query, they are not browsing. They are ready to hire.</p>

            {/* ── BAR CHART: AI Overview Appearance Rates ── */}
            <div className="ae-bar-group not-prose">
              <h3>AI Overview Appearance Rate by Query Type</h3>
              <div className="ae-bar-item" style={{ width: '41%' }}>
                <span>Long-tail home service queries</span>
                <strong>40.78%</strong>
              </div>
              <div className="ae-bar-item" style={{ width: '25%' }}>
                <span>All Google searches (average)</span>
                <strong>25%</strong>
              </div>
              <div className="ae-bar-item" style={{ width: '8%', minWidth: '180px' }}>
                <span>General home service queries</span>
                <strong>8.2%</strong>
              </div>
            </div>

            <div className="ae-takeaway not-prose">
              <div className="ae-takeaway-title">Key Takeaway</div>
              <p>The more specific and purchase-ready the question, the more likely AI will answer it directly. Home service companies that optimize for these detailed queries capture the highest-intent leads. Call us at <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> today.</p>
            </div>

            {/* ── CTA 2 ── */}
            <div className="ae-cta-inline not-prose">
              <p>Want to know exactly what AI says about your business? We will show you for free.</p>
              <a href="tel:+12134442229">Call (213) 444-2229 for a Free AI Visibility Check &rarr;</a>
            </div>

            {/* ── WHY HOME SERVICES IS PERFECT ── */}
            <span className="ae-section-label">The Opportunity</span>
            <h2>Why Home Services Is the Perfect Industry for AI Search</h2>

            <p>Here is something most marketers will not tell you: local home services is actually one of the best-positioned industries for AI search, even though it currently has lower AI traffic share (3 to 7%) compared to tech or finance (18 to 25%), according to upGrowth&apos;s 2026 AI Traffic Share Report. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Lock in your exclusive territory now.</a></p>

            <p>Why? Because the gap is the opportunity.</p>

            <div className="ae-callout ae-callout-success not-prose">
              <p><strong>Wide-open field:</strong> ServiceTitan&apos;s 2026 State of AI in the Trades report surveyed over 1,000 contractors and found that only 12% have embedded AI into their processes. Another 35% have not used AI in their business at all. That means fewer than 1 in 8 contractors in your market are working on AI visibility right now. <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Get your free AI readiness report.</a></p>
            </div>

            {/* ── COMPARISON TABLE: Home Services vs Other Industries ── */}
            <table className="ae-comparison-table not-prose">
              <thead>
                <tr>
                  <th>Factor</th>
                  <th>Home Services</th>
                  <th>Tech / Finance</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Current AI traffic share</td>
                  <td>3 to 7%</td>
                  <td>18 to 25%</td>
                </tr>
                <tr>
                  <td>Competitors optimizing for AI</td>
                  <td>Very few (12% adoption)</td>
                  <td>Thousands already doing it</td>
                </tr>
                <tr>
                  <td>Barrier to entry</td>
                  <td>Low (basic content + schema)</td>
                  <td>High (saturated market)</td>
                </tr>
                <tr>
                  <td>Early-mover advantage</td>
                  <td>Massive</td>
                  <td>Mostly gone</td>
                </tr>
                <tr>
                  <td>Local market dynamics</td>
                  <td>Geography-based, limited competitors</td>
                  <td>Global, unlimited competitors</td>
                </tr>
              </tbody>
            </table>

            <p>Think about it this way: remember when Google Maps and local SEO first became important? The companies that got on board early dominated their markets for years. AI search is following the same pattern, but the window is closing faster.</p>

            {/* ── CTA 3 ── */}
            <div className="ae-cta-inline not-prose">
              <p>See where your home service company stands in AI search before your competitors figure it out. Ready to act? <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a free strategy session.</a></p>
              <Link href="/blindspot">Run Your Free AI Visibility Scan &rarr;</Link>
            </div>

            {/* ── THE 5 STRATEGIES ── */}
            <span className="ae-section-label">The Playbook</span>
            <h2>5 Things Home Service Companies Dominating AI Search Actually Do</h2>

            <p>After analyzing what separates the businesses that AI recommends from those it ignores, we have identified five consistent patterns. None of them require a massive budget. All of them require intentional effort.</p>

            {/* ── STRATEGY 1 ── */}
            <h3>1. They Build Content That AI Can Parse and Trust</h3>

            <p>The single biggest difference between home service companies that get AI recommendations and those that do not is the quality of their website content. Drop us a line at <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>

            <div className="ae-callout ae-callout-info not-prose">
              <p><strong>3x accuracy jump:</strong> A study highlighted by Digidop found that GPT-4&apos;s accuracy jumped from 16% to 54% when content was backed by structured data. That is a 3x improvement in how well AI understands and trusts your content.</p>
            </div>

            <p>What does this look like in practice? The winning companies have: Speak to an AEO specialist: <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.</p>

            <ul>
              <li>Dedicated pages for every service they offer (not one generic &quot;Services&quot; page)</li>
              <li>City and neighborhood-specific landing pages with real local details</li>
              <li>Clear pricing ranges and transparent explanations of their process</li>
              <li>FAQ sections that directly answer the questions homeowners actually ask</li>
              <li>Schema markup (LocalBusiness, Service, FAQPage) that helps AI parse the content correctly</li>
            </ul>

            {/* ── CHEAT SHEET: Content That AI Loves ── */}
            <div className="ae-cheat-sheet not-prose">
              <h3>Content Checklist for AI Visibility</h3>
              <ul>
                <li>Individual service pages (not one generic page)</li>
                <li>City and neighborhood landing pages with real local details</li>
                <li>Transparent pricing ranges (AI loves specificity)</li>
                <li>FAQ sections answering real customer questions</li>
                <li>LocalBusiness + Service + FAQPage schema markup</li>
                <li>Plain-text customer testimonials on your site</li>
                <li>Hours, credentials, and service areas stated explicitly</li>
                <li>Before/after project galleries with descriptions</li>
              </ul>
            </div>

            <p>If you want to learn more about how AI decides what to cite, check out our guide on <Link href="/blog/how-ai-platforms-choose-businesses-to-cite">how AI platforms choose businesses to cite</Link>.</p>

            {/* ── CTA 4 ── */}
            <div className="ae-cta-inline not-prose">
              <p>Not sure if your website passes the AI readability test? We will check for you. One client per city. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">See if your market is available.</a></p>
              <a href="mailto:support@theanswerengine.ai">Email Us for a Free Content Audit &rarr;</a>
            </div>

            {/* ── STRATEGY 2 ── */}
            <h3>2. They Diversify Reviews Beyond Google</h3>

            <p>This is the one that surprises most contractors. Your Google reviews, no matter how many you have, are invisible to ChatGPT and most AI platforms. Google reviews require JavaScript to load, and AI crawlers read raw HTML.</p>

            <div className="ae-callout ae-callout-warning not-prose">
              <p><strong>Google reviews are invisible to AI.</strong> Google&apos;s share as a review platform has dipped from 83% in 2025 to 71% in 2026, while Apple Maps usage nearly doubled from 14% to 27%. Video review platforms like YouTube, Instagram, and TikTok are also gaining traction. (BrightLocal 2026) Check where you stand: <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free Blind Spot Scan.</a></p>
            </div>

            {/* ── PROS/CONS: Review Platforms ── */}
            <div className="ae-pros-cons not-prose">
              <div className="ae-pros">
                <h4>AI-Readable Review Platforms</h4>
                <ul>
                  <li>Your own website (plain-text testimonials)</li>
                  <li>Yelp (fully crawlable)</li>
                  <li>BBB (trusted authority signal)</li>
                  <li>HomeAdvisor / Angi profiles</li>
                  <li>Facebook reviews</li>
                  <li>Industry-specific directories</li>
                </ul>
              </div>
              <div className="ae-cons">
                <h4>Not Readable by Most AI</h4>
                <ul>
                  <li>Google reviews (JavaScript-dependent)</li>
                  <li>Embedded review widgets</li>
                  <li>Screenshot-only testimonials</li>
                  <li>Video-only reviews (no transcript)</li>
                  <li>Reviews behind login walls</li>
                  <li>Aggregator iframes</li>
                </ul>
              </div>
            </div>

            <p>The smart play? Display your best customer testimonials directly on your website as plain text (not embedded widgets). Add Review schema markup. And actively encourage customers to leave reviews on at least two platforms beyond Google.</p>

            <p>We cover this in detail in our article about <Link href="/blog/do-google-reviews-affect-ai-recommendations">whether Google reviews affect AI recommendations</Link>. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Schedule a free 30-min call.</a></p>

            {/* ── CTA 5 ── */}
            <div className="ae-cta-inline not-prose">
              <p>Want to see which review platforms AI actually reads for your industry?</p>
              <Link href="/blindspot">Get Your Free Blind Spot Report &rarr;</Link>
            </div>

            {/* ── STRATEGY 3 ── */}
            <h3>3. They Claim and Optimize Every Directory Listing</h3>

            <p>AI platforms build what researchers call &quot;entity authority.&quot; The more places AI finds consistent information about your business, the more confident it becomes in recommending you. Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> for a custom strategy.</p>

            <p>According to Revved Digital&apos;s research on AI search ranking factors for 2026, citations from BBB, HomeAdvisor, Angi, your local Chamber of Commerce, and local news outlets all build this entity authority. When AI sees your business name, address, phone number, and services listed consistently across 20+ directories, it treats you as a verified, established business worth recommending.</p>

            {/* ── TIMELINE: Directory Optimization Process ── */}
            <div className="ae-timeline not-prose">
              <div className="ae-timeline-item">
                <strong>Week 1: Audit existing listings</strong>
                <p>Search your business name across the top 30 directories. Document inconsistencies in name, address, phone, hours, and service descriptions. Questions? Call <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.</p>
              </div>
              <div className="ae-timeline-item">
                <strong>Week 2: Fix and claim</strong>
                <p>Correct all inconsistencies. Claim unclaimed profiles on Yelp, BBB, HomeAdvisor, Angi, Facebook, Apple Maps, and your local Chamber of Commerce.</p>
              </div>
              <div className="ae-timeline-item">
                <strong>Week 3-4: Enrich profiles</strong>
                <p>Add detailed service descriptions, photos, hours, service areas, and credentials to every listing. The more detail, the more AI trusts you. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Secure your territory before a competitor does.</a></p>
              </div>
              <div className="ae-timeline-item">
                <strong>Monthly: Monitor and expand</strong>
                <p>Set a quarterly audit schedule. Expand to new directories as they emerge. Consistency over time is what builds lasting entity authority.</p>
              </div>
            </div>

            {/* ── CTA 6 ── */}
            <div className="ae-cta-inline not-prose">
              <p>We will show you every directory where your business is missing or inconsistent. <a href="https://theanswerengine.ai/blindspot" className="cta-inline">See your AI visibility score — free.</a></p>
              <a href="tel:+12134442229">Call (213) 444-2229 for a Free Directory Audit &rarr;</a>
            </div>

            {/* ── STRATEGY 4 ── */}
            <h3>4. They Create Genuinely Helpful Content (Not Keyword Stuffing)</h3>

            <p>According to Taradel&apos;s 2026 Home Services Marketing Trends report, the top-performing content in home services right now is authentic, educational material. Think day-in-the-life footage of technicians on the job, time-lapses of repairs, and honest explanations of why certain parts fail.</p>

            <div className="ae-quote not-prose">
              <p>AI platforms are far more likely to cite content that provides unique, verifiable insights. A roofing company that publishes a detailed guide with real photos and specific cost ranges is exactly the type of content AI loves to reference. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book your free consultation here.</a></p>
            </div>

            <p>This is not about writing for robots. It is about writing genuinely useful content that happens to be exactly what AI looks for: clear, factual, specific, and trustworthy.</p>

            {/* ── DECISION MATRIX: Content Types ── */}
            <div className="ae-decision-matrix not-prose">
              <h3>Content Types Ranked by AI Impact</h3>
              <table>
                <thead>
                  <tr>
                    <th>Content Type</th>
                    <th>AI Citation Potential</th>
                    <th>Effort Level</th>
                    <th>Best For</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Service-specific pages with schema</td>
                    <td>Very High</td>
                    <td>Medium</td>
                    <td>All trades</td>
                  </tr>
                  <tr>
                    <td>Local cost guides with ranges</td>
                    <td>Very High</td>
                    <td>Medium</td>
                    <td>HVAC, plumbing, roofing</td>
                  </tr>
                  <tr>
                    <td>How-to troubleshooting guides</td>
                    <td>High</td>
                    <td>Low</td>
                    <td>Electricians, HVAC</td>
                  </tr>
                  <tr>
                    <td>Before/after project case studies</td>
                    <td>High</td>
                    <td>Low</td>
                    <td>Roofers, landscapers</td>
                  </tr>
                  <tr>
                    <td>FAQ pages with real questions</td>
                    <td>High</td>
                    <td>Low</td>
                    <td>All trades</td>
                  </tr>
                  <tr>
                    <td>Generic blog posts</td>
                    <td>Low</td>
                    <td>Low</td>
                    <td>None (avoid these)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* ── CTA 7 ── */}
            <div className="ae-cta-inline not-prose">
              <p>Not sure what content to create first? Let us build you a roadmap. Contact us at <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>
              <a href="mailto:support@theanswerengine.ai">Email Us for a Free Content Strategy Session &rarr;</a>
            </div>

            {/* ── STRATEGY 5 ── */}
            <h3>5. They Treat AI Visibility as a Separate Channel</h3>

            <p>The most successful home service companies do not treat AI search as an add-on to their SEO strategy. They treat it as its own channel with its own requirements.</p>

            <p>Traditional SEO is about ranking on a results page. AI optimization is about being the answer. Different goal, different tactics. Reach us at <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.</p>

            <div className="ae-callout ae-callout-info not-prose">
              <p><strong>Growth trajectory:</strong> AI search traffic is growing at 130 to 150% year over year according to upGrowth&apos;s Q1 2026 data. ChatGPT alone drives 87.4% of all AI referral traffic. These are not small numbers, and they are growing every month.</p>
            </div>

            <p>The winning contractors have someone (whether in-house or through an agency) who specifically monitors their AI visibility, tracks which platforms mention them, and adjusts their strategy based on what is working. We work with one business per market. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Check if yours is still open.</a></p>

            <p>For a complete walkthrough of how this works, see our <Link href="/blog/complete-guide-answer-engine-optimization">complete guide to Answer Engine Optimization</Link>.</p>

            {/* ── CTA 8 ── */}
            <div className="ae-cta-inline not-prose">
              <p>Ready to make AI search a real channel for your business? Start with the data. Find your gaps with a <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free AERO scan.</a></p>
              <Link href="/blindspot">Get Your Free Blind Spot Report &rarr;</Link>
            </div>

            {/* ── RESULTS SECTION ── */}
            <span className="ae-section-label">The Evidence</span>
            <h2>The Numbers Do Not Lie: What Early Movers Are Seeing</h2>

            {/* ── STATS GRID 2 ── */}
            <div className="ae-stats-grid not-prose">
              <div className="ae-stat-card">
                <div className="ae-stat-value ae-accent">74%</div>
                <div className="ae-stat-label">of contractors who adopted AI report increased efficiency</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-value ae-accent">30%</div>
                <div className="ae-stat-label">higher conversion rate from AI-driven recommendations</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-value ae-accent">31%</div>
                <div className="ae-stat-label">of consumers only use businesses with 4.5+ stars</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-value ae-accent">54%</div>
                <div className="ae-stat-label">of contractors willing to invest in AI within 3 years</div>
              </div>
            </div>

            <p>ServiceTitan&apos;s survey of 1,000+ contractors shows something interesting: 54% are very or somewhat willing to invest in AI in the next one to three years, with another 18% on the fence. But only 12% have actually done it.</p>

            <div className="ae-takeaway not-prose">
              <div className="ae-takeaway-title">Key Takeaway</div>
              <p>Right now, fewer than 1 in 8 contractors in your market are actively working on AI visibility. The other 7 are either unaware, undecided, or waiting. When you combine that with AI recommendations converting 30% better than traditional search, the math becomes very clear: the contractors who act first win disproportionately. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Schedule a free call</a> to see where you stand.</p>
            </div>

            {/* ── BAR CHART: Contractor AI Adoption ── */}
            <div className="ae-bar-group not-prose">
              <h3>Contractor AI Adoption Breakdown (ServiceTitan 2026)</h3>
              <div className="ae-bar-item" style={{ width: '54%' }}>
                <span>Willing to invest in AI (next 1-3 years)</span>
                <strong>54%</strong>
              </div>
              <div className="ae-bar-item" style={{ width: '35%' }}>
                <span>Have not used AI at all</span>
                <strong>35%</strong>
              </div>
              <div className="ae-bar-item" style={{ width: '18%', minWidth: '180px' }}>
                <span>On the fence</span>
                <strong>18%</strong>
              </div>
              <div className="ae-bar-item" style={{ width: '12%', minWidth: '180px' }}>
                <span>Actively using AI in processes</span>
                <strong>12%</strong>
              </div>
            </div>

            {/* ── CTA 9 ── */}
            <div className="ae-cta-inline not-prose">
              <p>Be part of the 12% leading the charge. See what AI sees about your business today.</p>
              <Link href="/blindspot">Run Your Free AI Visibility Scan &rarr;</Link>
            </div>

            {/* ── THE OPPORTUNITY WINDOW ── */}
            <span className="ae-section-label">Act Now</span>
            <h2>The Window Is Open, But It Will Not Stay Open Forever</h2>

            <p>Here is the reality of AI search in home services right now: the map pack still dominates. WebFX&apos;s data shows it appears in 31.7% of home service searches. Google is not going anywhere. Send your questions to <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>

            <p>But every month, more consumers are asking AI for recommendations before they ever open Google Maps. Every month, AI Overviews appear on more searches. Every month, the companies that invested early become harder to displace.</p>

            <div className="ae-callout ae-callout-warning not-prose">
              <p><strong>The window is closing.</strong> If you are a plumber, HVAC tech, roofer, electrician, or landscaper, the question is not whether AI search will affect your business. The question is whether you will be positioned to benefit from it or whether you will be the one wondering where all the leads went. Call <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> for a free consultation.</p>
            </div>

            {/* ── CHEAT SHEET: Getting Started ── */}
            <div className="ae-cheat-sheet not-prose">
              <h3>Your 5-Step AI Visibility Quick Start</h3>
              <ul>
                <li><strong>Audit your website.</strong> Does every service have its own page? Is your NAP consistent? Do you have schema markup?</li>
                <li><strong>Check your AI visibility.</strong> Ask ChatGPT and Perplexity to recommend a business like yours in your area. See if you show up.</li>
                <li><strong>Diversify your reviews.</strong> Get testimonials on your website, Yelp, and BBB. Do not rely solely on Google.</li>
                <li><strong>Claim your directories.</strong> Consistent listings across 20+ platforms build the entity authority AI needs to trust your business.</li>
                <li><strong>Publish helpful content.</strong> Answer the questions your customers actually ask, with real details and real expertise.</li>
              </ul>
            </div>

            {/* ── CTA 10 ── */}
            <div className="ae-cta-inline not-prose">
              <p>Want to skip the guesswork and see exactly where you stand right now?</p>
              <a href="tel:+12134442229">Call (213) 444-2229 and We Will Walk You Through It &rarr;</a>
            </div>

            <p>To learn more about how ChatGPT specifically decides which businesses to recommend, read our deep dive on <Link href="/blog/how-chatgpt-chooses-businesses-to-recommend">how ChatGPT chooses businesses to recommend</Link>. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Claim your market territory — one client per area.</a></p>

            {/* ── CTA 11 ── */}
            <div className="ae-cta-inline not-prose">
              <p>Have questions about AI search for your specific trade? Reach out directly.</p>
              <a href="mailto:support@theanswerengine.ai">Email support@theanswerengine.ai &rarr;</a>
            </div>

          </div>

          {/* FAQ Section */}
          <section className="mt-16 mb-12">
            <span className="ae-section-label not-prose">FAQ</span>
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-white">Frequently Asked Questions</h2>
            <div className="grid gap-4">
              {[
                {
                  q: "Do home service companies really need to worry about AI search?",
                  a: "Yes. According to BrightLocal's 2026 research, 45% of consumers now use AI to find local business recommendations, up from just 6% in 2025. If your plumbing, HVAC, or roofing company is not visible to AI platforms, you are missing a rapidly growing segment of potential customers."
                },
                {
                  q: "Which AI platforms recommend home service businesses?",
                  a: "ChatGPT, Google AI Overviews, Perplexity, Claude, and Gemini all surface local service recommendations. ChatGPT drives 87.4% of AI referral traffic, and Google AI Overviews now appear in over 25% of all searches. Each platform pulls data from different sources, so your business needs visibility across multiple channels."
                },
                {
                  q: "What is the most important thing a home service company can do for AI visibility?",
                  a: "Build a content-rich website with structured data markup. Research shows that AI platforms go from 16% to 54% accuracy when content uses structured data. Your website should clearly state what services you offer, which areas you serve, your hours, and your credentials, with nothing left implied."
                },
                {
                  q: "How do reviews affect AI recommendations for home service companies?",
                  a: "Reviews matter, but only reviews AI can actually read. Google reviews are invisible to most AI platforms because they require JavaScript to load. You need reviews on your own website (as plain text), Yelp, BBB, and industry directories like Angi or HomeAdvisor for AI platforms to factor them into recommendations."
                },
                {
                  q: "How long does it take for a home service company to show up in AI search?",
                  a: "Most businesses start seeing AI mentions within 60 to 90 days of implementing a structured optimization strategy. This includes building out service pages, adding schema markup, getting listed in crawlable directories, and publishing helpful content. Consistency matters more than speed."
                },
                {
                  q: "Can a small local service company compete with big franchises in AI search?",
                  a: "Absolutely. AI platforms prioritize relevance and authority over brand size. A local electrician with detailed service pages, genuine customer testimonials on their website, and consistent directory listings can outrank a national franchise that has a generic, templated website. AI rewards specificity and depth."
                }
              ].map((faq, i) => (
                <div key={i} className="rounded-xl border border-white/10 bg-white/[0.02] p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">{faq.q}</h3>
                  <p className="text-gray-300 leading-relaxed">{faq.a} <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Run your free AI Blind Spot Scan.</a></p>
                </div>
              ))}
            </div>
          </section>

          {/* ── CTA 12 ── */}
          <div className="ae-cta-inline not-prose my-8">
            <p>Still have questions about AI search for home services? We are happy to help.</p>
            <a href="tel:+12134442229">Call (213) 444-2229 &rarr;</a>
          </div>

          {/* ── CTA 13 ── */}
          <div className="ae-cta-inline not-prose my-8">
            <p>Prefer email? Send us your questions and we will get back to you within 24 hours. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a free 30-minute strategy call.</a></p>
            <a href="mailto:support@theanswerengine.ai">Email support@theanswerengine.ai &rarr;</a>
          </div>

          {/* ── CTA 14 ── */}
          <div className="ae-cta-inline not-prose my-8">
            <p>Ready to see where your business stands in AI search? The report is free and takes 2 minutes.</p>
            <Link href="/blindspot">Get Your Free Blind Spot Report &rarr;</Link>
          </div>

          {/* ── FINAL CTA ── */}
          <div className="ae-final-cta not-prose">
            <h2>Is Your Home Service Company Visible to AI?</h2>
            <p>Find out exactly what ChatGPT, Google AI, and Perplexity say when someone asks about businesses like yours. Our free Blind Spot Report shows you the gaps and the opportunities in your AI visibility. Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> to get started.</p>
            <Link href="/blindspot" className="ae-final-cta-pulse">Get Your Free Blind Spot Report &rarr;</Link>
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

          {/* ── AUTHOR CARD ── */}
          <div className="ae-author-card not-prose">
            <div className="w-12 h-12 rounded-full bg-[#F27D24] flex items-center justify-center text-white font-bold text-lg shrink-0">
              AE
            </div>
            <div>
              <p className="text-white font-semibold">Justin Borges <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a></p>
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
