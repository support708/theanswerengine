import type { Metadata } from 'next';
import Link from 'next/link';

export const revalidate = 86400;
export const dynamic = 'force-static';
export const dynamicParams = true;

export const metadata: Metadata = {
  title: "How to Get Your Restaurant Found on AI Search",
  description: "Discover why some restaurants keep showing up in ChatGPT, Google AI, and Perplexity recommendations while others stay invisible. Data-backed insights for restaurant owners in 2026.",
  keywords: ["restaurant AI search", "restaurant ChatGPT optimization", "AI search restaurants", "restaurant AI visibility", "answer engine optimization restaurants", "ChatGPT restaurant recommendations", "restaurant local AI search"],
  openGraph: {
    title: "How to Get Your Restaurant Found on AI Search",
    description: "Why some restaurants dominate AI recommendations and others are invisible. The data behind restaurant AI visibility in 2026.",
    type: 'article',
    url: 'https://theanswerengine.ai/blog/how-to-get-your-restaurant-found-on-ai-search',
    images: [{ url: 'https://theanswerengine.ai/api/og/how-to-get-your-restaurant-found-on-ai-search', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "How to Get Your Restaurant Found on AI Search",
    description: "Why some restaurants dominate AI recommendations and others are invisible.",
  },
  alternates: {
    canonical: 'https://theanswerengine.ai/blog/how-to-get-your-restaurant-found-on-ai-search',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://theanswerengine.ai/blog/how-to-get-your-restaurant-found-on-ai-search#article",
      "headline": "How to Get Your Restaurant Found on AI Search",
      "description": "Discover why some restaurants keep showing up in ChatGPT, Google AI, and Perplexity recommendations while others stay invisible.",
      "image": "https://theanswerengine.ai/api/og/how-to-get-your-restaurant-found-on-ai-search",
      "datePublished": "2026-03-28",
      "dateModified": "2026-03-28",
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
        "@id": "https://theanswerengine.ai/blog/how-to-get-your-restaurant-found-on-ai-search"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://theanswerengine.ai/blog/how-to-get-your-restaurant-found-on-ai-search#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do restaurants really need to worry about AI search in 2026?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. 45% of consumers now use AI to find local business recommendations, up from just 6% in 2025 according to BrightLocal. For restaurants specifically, the shift is even more pronounced because dining decisions are conversational by nature. People ask AI things like 'where should I take my wife for our anniversary' or 'best sushi near downtown.' If your restaurant is invisible to these platforms, you are losing covers to competitors who are visible."
          }
        },
        {
          "@type": "Question",
          "name": "Which AI platforms recommend restaurants to diners?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ChatGPT (with OpenTable integration for direct reservations), Google AI Overviews, Perplexity, Claude, and Gemini all surface restaurant recommendations. ChatGPT drives roughly 87% of all AI referral traffic to businesses. Google AI Overviews now appear in over 25% of searches. Each platform pulls from different data sources, so visibility on just one platform is not enough."
          }
        },
        {
          "@type": "Question",
          "name": "Where does ChatGPT get its restaurant recommendation data?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ChatGPT pulls restaurant data from multiple sources including Yelp, Google Maps, TripAdvisor, OpenTable, local food blogs, news articles, and your own website. Research shows that 41.6% of AI citations for restaurants come from third-party listings, 39.8% from the restaurant's own website, and the remainder from reviews and social media. This means both your owned content and your third-party presence matter."
          }
        },
        {
          "@type": "Question",
          "name": "How do online reviews affect whether AI recommends my restaurant?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Reviews are one of the strongest signals AI platforms use when deciding which restaurants to recommend. However, not all reviews are equally visible to AI. Google reviews require JavaScript to load, making them invisible to most AI crawlers. Reviews on Yelp, TripAdvisor, and your own website (as plain text) are far more accessible. Research suggests restaurants with 20 or more fresh reviews in a 3-month period are 2.5 times more likely to appear in AI recommendations."
          }
        },
        {
          "@type": "Question",
          "name": "Can a small independent restaurant compete with chain restaurants in AI search?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, and independent restaurants often have an advantage. AI platforms prioritize specificity, authenticity, and depth over brand recognition. A neighborhood bistro with a detailed website describing its chef's background, sourcing philosophy, and signature dishes will often outperform a chain restaurant with a generic, templated website. AI rewards the qualities that make independent restaurants special."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take for a restaurant to start appearing in AI search results?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most restaurants begin seeing AI mentions within 60 to 90 days of implementing a structured optimization approach. The timeline depends on your starting point. A restaurant with a strong existing web presence may see results faster. A restaurant with minimal online presence will need more foundational work. Consistency matters more than speed. AI platforms build trust over time based on signal consistency."
          }
        },
        {
          "@type": "Question",
          "name": "Does my restaurant's menu need to be on my website for AI visibility?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Having your menu as crawlable text on your website (not just a PDF or image) is one of the most impactful things you can do for AI visibility. When someone asks AI for 'restaurants with great pasta near me' or 'where to find vegan options downtown,' AI can only recommend your restaurant if it can actually read your menu items. PDF menus and image-based menus are essentially invisible to AI platforms."
          }
        },
        {
          "@type": "Question",
          "name": "Is AI search replacing Google for restaurant discovery?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "AI search is not replacing Google, but it is capturing an increasingly large share of restaurant discovery. 76% of diners still search online before choosing where to eat, and Google remains dominant. However, the portion of those searches happening through AI is growing rapidly. The smart approach is to optimize for both. Restaurants that are visible in traditional search and AI search capture the widest possible audience."
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
      "description": "Answer Engine Optimization agency helping local businesses get cited by AI platforms."
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://theanswerengine.ai/" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://theanswerengine.ai/blog" },
        { "@type": "ListItem", "position": 3, "name": "How to Get Your Restaurant Found on AI Search" }
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
      <span className="text-gray-400">Restaurant AI Search</span>
    </nav>
  );
}

export default function HowToGetYourRestaurantFoundOnAISearch() {
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
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight font-plus-jakarta">
              How to Get Your Restaurant Found on{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F27D24] to-orange-400">AI Search</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
              Every night, diners are asking ChatGPT, Google AI, and Perplexity where to eat. Some restaurants keep showing up. Most are completely invisible. Here is what separates the two.
            </p>
            <div className="flex flex-wrap gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>March 28, 2026</span>
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

            {/* ── STATS GRID ── */}
            <div className="ae-stats-grid not-prose">
              <div className="ae-stat-card">
                <div className="ae-stat-value ae-accent">76%</div>
                <div className="ae-stat-label">of diners search online before choosing where to eat</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-value ae-accent">41.6%</div>
                <div className="ae-stat-label">of AI restaurant citations come from third-party listings</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-value ae-accent">2.5x</div>
                <div className="ae-stat-label">more likely to appear in AI with 20+ fresh reviews in 3 months</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-value ae-accent">45%</div>
                <div className="ae-stat-label">of consumers now use AI for local recommendations (up from 6%)</div>
              </div>
            </div>

            {/* ── TABLE OF CONTENTS ── */}
            <div className="ae-toc not-prose">
              <div className="ae-toc-title">Table of Contents</div>
              <ul>
                <li><a href="#new-discovery">The New Way Diners Find Restaurants</a></li>
                <li><a href="#how-ai-picks">How AI Decides Which Restaurants to Recommend</a></li>
                <li><a href="#citation-sources">Where AI Gets Its Restaurant Data</a></li>
                <li><a href="#website-matters">Why Your Website Is Your Most Valuable AI Asset</a></li>
                <li><a href="#reviews-signal">The Review Signals AI Actually Reads</a></li>
                <li><a href="#menu-visibility">Menu Visibility: The Factor Most Restaurants Miss</a></li>
                <li><a href="#directory-ecosystem">The Directory Ecosystem That Feeds AI</a></li>
                <li><a href="#chain-vs-independent">Chain Restaurants vs. Independent: Who Wins in AI?</a></li>
                <li><a href="#timeline">What a Realistic AI Visibility Timeline Looks Like</a></li>
                <li><a href="#mistakes">The Mistakes That Keep Restaurants Invisible</a></li>
                <li><a href="#faq">Frequently Asked Questions</a></li>
              </ul>
            </div>

            {/* ── INTRODUCTION ── */}
            <span className="ae-section-label">The Shift</span>
            <h2 id="new-discovery">The New Way Diners Find Restaurants</h2>

            <p>A couple is planning a Saturday night out. Instead of scrolling through Google Maps or asking friends, one of them opens ChatGPT and types: &quot;Where is the best Italian restaurant near the Pearl District with outdoor seating?&quot;</p>

            <p>Within seconds, ChatGPT returns three specific recommendations. Names, descriptions, why each one fits the request. One of those restaurants is even linked to OpenTable for instant reservations. Markets fill fast. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Check your territory availability.</a></p>

            <p>This is not a hypothetical scenario. It is happening millions of times per week in 2026. And the restaurants that show up in those AI responses are filling tables while competitors wonder why foot traffic is slowing down.</p>

            <div className="ae-quote not-prose">
              <p>The question is no longer whether diners use AI to find restaurants. They do. The question is whether your restaurant is part of the answer. Your first step: <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free AERO Blind Spot Scan.</a></p>
            </div>

            <p>The shift has been staggering in scale. BrightLocal&apos;s 2026 research found that 45% of consumers now use AI platforms for local business recommendations. In 2025, that number was 6%. That is not a trend. That is a tidal wave. And the restaurant industry, with its inherently conversational discovery process, sits right in the path.</p>

            <p>To understand the broader shift in how customers use AI for local business discovery, our analysis of <Link href="/blog/how-customers-use-ai-to-find-local-businesses">how customers use AI to find local businesses</Link> covers the full picture across industries. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Claim your free call</a> before your market fills.</p>

            {/* ── CTA 1 ── */}
            <div className="ae-cta-inline not-prose">
              <p>Find out if AI platforms are recommending your competitors instead of your restaurant.</p>
              <Link href="/blindspot">Get Your Free Blind Spot Report &rarr;</Link>
            </div>

            {/* ── HOW AI DECIDES ── */}
            <span className="ae-section-label">The Mechanics</span>
            <h2 id="how-ai-picks">How AI Decides Which Restaurants to Recommend</h2>

            <p>Traditional search engines rank web pages. AI does something fundamentally different. When a diner asks an AI assistant for restaurant recommendations, the AI synthesizes information from dozens of sources to build a picture of which restaurants best match the request. It is not ranking pages. It is forming opinions. Reach out: <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>

            <p>This distinction matters because the signals that make a restaurant rank well on Google are not the same signals that make AI recommend it. Keyword stuffing, backlink profiles, and meta tags are less relevant. What matters to AI is clarity, consistency, and credibility across the digital landscape.</p>

            <div className="ae-callout ae-callout-info not-prose">
              <p><strong>How AI &quot;thinks&quot; about restaurants:</strong> AI platforms evaluate your restaurant across multiple dimensions simultaneously. They consider what your website says, what review platforms say, what food bloggers say, what your business listings say, and whether all of those sources tell a consistent story. Contradictions reduce confidence. Consistency builds it. Call us at <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> today.</p>
            </div>

            <p>Think of it this way: when a friend recommends a restaurant, they synthesize everything they know about it. The food, the atmosphere, the service, what they read about it, what others have told them. AI works the same way, except it can process thousands of data points in milliseconds.</p>

            {/* ── BAR CHART: What AI Evaluates ── */}
            <div className="ae-bar-group not-prose">
              <h3>Key Signals AI Platforms Evaluate for Restaurant Recommendations</h3>
              <div className="ae-bar-item" style={{ width: '95%' }}>
                <span>Consistency across all platforms</span>
                <strong>Critical</strong>
              </div>
              <div className="ae-bar-item" style={{ width: '90%' }}>
                <span>Review volume and recency</span>
                <strong>Very High</strong>
              </div>
              <div className="ae-bar-item" style={{ width: '85%' }}>
                <span>Website content depth and structure</span>
                <strong>Very High</strong>
              </div>
              <div className="ae-bar-item" style={{ width: '75%' }}>
                <span>Third-party mentions (blogs, press, guides)</span>
                <strong>High</strong>
              </div>
              <div className="ae-bar-item" style={{ width: '70%' }}>
                <span>Menu availability as crawlable text</span>
                <strong>High</strong>
              </div>
              <div className="ae-bar-item" style={{ width: '60%' }}>
                <span>Social media presence and engagement</span>
                <strong>Moderate</strong>
              </div>
            </div>

            {/* ── CTA 2 ── */}
            <div className="ae-cta-inline not-prose">
              <p>Want to know exactly what AI says when diners ask about restaurants like yours? <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Lock in your exclusive territory now.</a></p>
              <a href="tel:+12134442229">Call (213) 444-2229 for a Free AI Visibility Check &rarr;</a>
            </div>

            {/* ── CITATION SOURCES ── */}
            <span className="ae-section-label">The Data</span>
            <h2 id="citation-sources">Where AI Gets Its Restaurant Data</h2>

            <p>Understanding where AI pulls its information from is the first step to understanding why some restaurants appear and others do not. Recent research on AI citation patterns for local businesses reveals a clear breakdown.</p>

            {/* ── BAR CHART: Citation Sources ── */}
            <div className="ae-bar-group not-prose">
              <h3>Where AI Restaurant Citations Come From</h3>
              <div className="ae-bar-item" style={{ width: '42%' }}>
                <span>Third-party listings (Yelp, Google, DoorDash)</span>
                <strong>41.6%</strong>
              </div>
              <div className="ae-bar-item" style={{ width: '40%' }}>
                <span>Restaurant&apos;s own website</span>
                <strong>39.8%</strong>
              </div>
              <div className="ae-bar-item" style={{ width: '13%', minWidth: '200px' }}>
                <span>Reviews and social media</span>
                <strong>13.2%</strong>
              </div>
              <div className="ae-bar-item" style={{ width: '5%', minWidth: '200px' }}>
                <span>Other sources (news, blogs)</span>
                <strong>5.4%</strong>
              </div>
            </div>

            <p>The split is nearly even between third-party listings and your own website. This means restaurants that focus on only one channel are leaving roughly half of their AI visibility on the table. <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Get your free AI readiness report.</a></p>

            <div className="ae-callout ae-callout-warning not-prose">
              <p><strong>Platform differences matter:</strong> ChatGPT leans more heavily on third-party directories like Yelp and OpenTable. Google&apos;s Gemini tends to favor first-party websites. Perplexity splits more evenly between the two. A restaurant that is only strong on Yelp but has a weak website will show up on ChatGPT but stay invisible on Gemini.</p>
            </div>

            {/* ── COMPARISON TABLE: Platform Data Sources ── */}
            <table className="ae-comparison-table not-prose">
              <thead>
                <tr>
                  <th>AI Platform</th>
                  <th>Primary Data Sources</th>
                  <th>Reservation Integration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>ChatGPT</td>
                  <td>Yelp, OpenTable, Google Maps, TripAdvisor</td>
                  <td>OpenTable (direct booking)</td>
                </tr>
                <tr>
                  <td>Google AI / Gemini</td>
                  <td>Google Business Profile, restaurant websites, Maps data</td>
                  <td>Google Reserve partners</td>
                </tr>
                <tr>
                  <td>Perplexity</td>
                  <td>Balanced mix of directories, websites, review sites</td>
                  <td>Links to reservation pages</td>
                </tr>
                <tr>
                  <td>Claude</td>
                  <td>Web content, review aggregators, food publications</td>
                  <td>Links to restaurant sites</td>
                </tr>
              </tbody>
            </table>

            <div className="ae-takeaway not-prose">
              <div className="ae-takeaway-title">Key Takeaway</div>
              <p>You cannot win AI visibility with a single-channel strategy. Restaurants that dominate AI recommendations have a strong presence across their own website, major review platforms, and booking directories simultaneously. Ready to act? <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a free strategy session.</a></p>
            </div>

            {/* ── CTA 3 ── */}
            <div className="ae-cta-inline not-prose">
              <p>See exactly which AI platforms can find your restaurant and which ones cannot.</p>
              <Link href="/blindspot">Run Your Free AI Visibility Scan &rarr;</Link>
            </div>

            {/* ── WEBSITE AS AI ASSET ── */}
            <span className="ae-section-label">Your Website</span>
            <h2 id="website-matters">Why Your Website Is Your Most Valuable AI Asset</h2>

            <p>Nearly 40% of AI citations for restaurants come from the restaurant&apos;s own website. Yet most restaurant websites are built for human visitors, not for AI comprehension. Beautiful photos, clever animations, and trendy design frameworks look great to diners browsing on their phones. But AI cannot see any of that. Drop us a line at <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>

            <p>AI reads text. It parses structured data. It follows links. It cross-references what your website says with what other sources say. If your website is essentially a collection of images with minimal text, AI has almost nothing to work with.</p>

            <div className="ae-callout ae-callout-orange not-prose">
              <p><strong>The structured data gap:</strong> Research shows AI platforms go from 16% to 54% accuracy when content uses structured data markup. For restaurants, this means adding schema markup for your business type, location, hours, menu items, and price range. Restaurants with proper structured data are essentially speaking AI&apos;s native language. Speak to an AEO specialist: <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.</p>
            </div>

            <p>The restaurants that AI recommends most consistently share certain website characteristics. Their content is detailed, text-based, and organized in ways that make it easy for machines to parse. They describe their cuisine, their atmosphere, their story, their team, and their values in clear, specific language. Nothing is left implied.</p>

            <p>This does not mean your website needs to be ugly or text-heavy for human visitors. It means the information needs to be there, even if design elements present it beautifully. The text still needs to exist in the underlying code. One client per city. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">See if your market is available.</a></p>

            {/* ── CTA 4 ── */}
            <div className="ae-cta-inline not-prose">
              <p>Not sure if AI can actually read your restaurant website? We will check for free.</p>
              <a href="mailto:support@theanswerengine.ai">Email support@theanswerengine.ai &rarr;</a>
            </div>

            {/* ── REVIEWS SIGNAL ── */}
            <span className="ae-section-label">Reviews</span>
            <h2 id="reviews-signal">The Review Signals AI Actually Reads</h2>

            <p>Reviews are the lifeblood of restaurant discovery. That has not changed. What has changed is which reviews AI can see and which ones it cannot. Check where you stand: <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free Blind Spot Scan.</a></p>

            <p>Here is the uncomfortable truth: Google reviews, the ones most restaurants focus on almost exclusively, are largely invisible to AI platforms. Google reviews require JavaScript to render, and most AI crawlers do not execute JavaScript. They see a blank page where your 4.7-star rating and 800 reviews should be.</p>

            <div className="ae-callout ae-callout-warning not-prose">
              <p><strong>The Google reviews blindspot:</strong> Your 500 Google reviews might as well not exist when ChatGPT is deciding which restaurant to recommend. AI platforms primarily read reviews from Yelp, TripAdvisor, and your own website (when they are embedded as plain HTML text). This is one of the biggest disconnects between what restaurant owners think matters and what actually influences AI recommendations. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Schedule a free 30-min call.</a></p>
            </div>

            <p>For a deeper analysis of how reviews across platforms influence AI recommendations, our article on <Link href="/blog/how-online-reviews-shape-ai-recommendations">how online reviews shape AI recommendations</Link> covers the nuances in detail.</p>

            {/* ── PROS/CONS: Review Platforms ── */}
            <div className="ae-pros-cons not-prose">
              <div className="ae-pros-box">
                <div className="ae-pros-title">Reviews AI Can Read</div>
                <ul>
                  <li>Yelp reviews (fully crawlable)</li>
                  <li>TripAdvisor reviews (text accessible)</li>
                  <li>Reviews embedded on your website as HTML</li>
                  <li>Food blog mentions and write-ups</li>
                  <li>OpenTable diner reviews</li>
                </ul>
              </div>
              <div className="ae-cons-box">
                <div className="ae-cons-title">Reviews AI Often Misses</div>
                <ul>
                  <li>Google reviews (JavaScript-rendered)</li>
                  <li>Instagram comments and captions</li>
                  <li>Facebook reviews (limited access)</li>
                  <li>Reviews inside delivery app ecosystems</li>
                  <li>Reviews on platforms with login walls</li>
                </ul>
              </div>
            </div>

            <p>The data is clear: restaurants that gain 20 or more fresh reviews on AI-accessible platforms within a 3-month window are 2.5 times more likely to appear in ChatGPT answers than restaurants with stagnant review profiles. Recency and volume on the right platforms matter enormously. Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> for a custom strategy.</p>

            {/* ── CTA 5 ── */}
            <div className="ae-cta-inline not-prose">
              <p>Find out which of your reviews AI can actually see. The answer might surprise you.</p>
              <Link href="/blindspot">Get Your Free Blind Spot Report &rarr;</Link>
            </div>

            {/* ── MENU VISIBILITY ── */}
            <span className="ae-section-label">Menus</span>
            <h2 id="menu-visibility">Menu Visibility: The Factor Most Restaurants Miss</h2>

            <p>When someone asks AI for &quot;restaurants with great craft cocktails near Midtown&quot; or &quot;where to find authentic pad thai in Austin,&quot; the AI needs to know what your restaurant actually serves. If your menu exists only as a PDF download or a photo of a chalkboard, AI cannot read it. Questions? Call <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.</p>

            <p>This is one of the most common and most fixable gaps in restaurant AI visibility. The menu is the single most searched piece of content on a restaurant website, and yet the majority of restaurants present it in formats that AI cannot parse.</p>

            <div className="ae-callout ae-callout-success not-prose">
              <p><strong>The menu advantage:</strong> Restaurants with full HTML menus on their websites (text-based, crawlable, with dish descriptions and prices) have a significant edge in AI search. When a diner asks for a specific type of cuisine or dish, AI can match your menu items to their request. Restaurants with PDF-only menus cannot be matched this way. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Secure your territory before a competitor does.</a></p>
            </div>

            {/* ── BAR CHART: Menu Format Impact ── */}
            <div className="ae-bar-group not-prose">
              <h3>Menu Format Impact on AI Visibility</h3>
              <div className="ae-bar-item" style={{ width: '95%' }}>
                <span>Full HTML menu with descriptions</span>
                <strong>Highest</strong>
              </div>
              <div className="ae-bar-item" style={{ width: '65%' }}>
                <span>Basic HTML menu (items + prices only)</span>
                <strong>Moderate</strong>
              </div>
              <div className="ae-bar-item" style={{ width: '25%' }}>
                <span>Third-party menu links (Yelp, DoorDash)</span>
                <strong>Limited</strong>
              </div>
              <div className="ae-bar-item" style={{ width: '5%', minWidth: '180px' }}>
                <span>PDF or image-only menu</span>
                <strong>Near Zero</strong>
              </div>
            </div>

            <p>The difference is stark. A restaurant with a detailed HTML menu that describes its &quot;wood-fired margherita with San Marzano tomatoes, fresh mozzarella, and basil from our rooftop garden&quot; gives AI rich, specific language to work with. A PDF that says &quot;Margherita $14&quot; gives AI nothing.</p>

            {/* ── CTA 6 ── */}
            <div className="ae-cta-inline not-prose">
              <p>Wondering if AI can read your restaurant menu? We will tell you in 24 hours. <a href="https://theanswerengine.ai/blindspot" className="cta-inline">See your AI visibility score — free.</a></p>
              <a href="tel:+12134442229">Call (213) 444-2229 &rarr;</a>
            </div>

            {/* ── DIRECTORY ECOSYSTEM ── */}
            <span className="ae-section-label">Listings</span>
            <h2 id="directory-ecosystem">The Directory Ecosystem That Feeds AI</h2>

            <p>With 41.6% of AI citations coming from third-party listings, your presence across the directory ecosystem is not optional. It is foundational. But not all directories carry equal weight with AI platforms.</p>

            <p>The directories that matter most for restaurant AI visibility are the ones that AI platforms can easily crawl and that carry authority signals. Yelp is consistently one of the most-cited sources across all AI platforms. OpenTable&apos;s direct integration with ChatGPT makes it uniquely valuable. TripAdvisor carries strong weight for restaurants in tourist-heavy areas. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book your free consultation here.</a></p>

            <div className="ae-callout ae-callout-info not-prose">
              <p><strong>Consistency is the key:</strong> AI platforms cross-reference your information across multiple directories. If your restaurant&apos;s name, address, phone number, or hours differ between Yelp, Google, your website, and TripAdvisor, that inconsistency signals unreliability to AI. Even small variations (like &quot;St.&quot; vs. &quot;Street&quot; or a missing suite number) can reduce your citation likelihood.</p>
            </div>

            <p>The restaurants dominating AI search tend to have verified, consistent listings across 15 to 20 or more platforms. This includes the obvious ones (Yelp, Google, TripAdvisor) and the less obvious ones (Bing Places, Apple Maps, Foursquare, local food guides, and industry-specific directories). Contact us at <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>

            <p>For a broader look at how other local businesses build this kind of directory presence, our guide on <Link href="/blog/how-home-service-companies-dominate-ai-search">how home service companies dominate AI search</Link> explores similar directory strategies that apply across industries.</p>

            {/* ── CTA 7 ── */}
            <div className="ae-cta-inline not-prose">
              <p>We audit your restaurant&apos;s presence across all the directories that feed AI platforms. Reach us at <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.</p>
              <Link href="/blindspot">See Your Full AI Visibility Profile &rarr;</Link>
            </div>

            {/* ── CHAIN VS INDEPENDENT ── */}
            <span className="ae-section-label">Competition</span>
            <h2 id="chain-vs-independent">Chain Restaurants vs. Independent: Who Wins in AI?</h2>

            <p>Restaurant owners often assume that big chains have an insurmountable advantage in AI search, just as they tend to dominate traditional search through sheer marketing budgets. The reality is more nuanced, and in many cases, it favors independents.</p>

            <p>AI platforms prioritize specificity and authenticity. When someone asks for &quot;the best seafood restaurant in Charleston with a rooftop view,&quot; AI is looking for specific answers, not generic chains. A local restaurant with a detailed website describing its rooftop dining experience, its seafood sourcing from local waters, and its chef&apos;s culinary background gives AI exactly what it needs to make a confident recommendation. We work with one business per market. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Check if yours is still open.</a></p>

            {/* ── COMPARISON TABLE: Chain vs Independent ── */}
            <table className="ae-comparison-table not-prose">
              <thead>
                <tr>
                  <th>Factor</th>
                  <th>Chain Restaurants</th>
                  <th>Independent Restaurants</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Website content depth</td>
                  <td>Often generic, templated per location</td>
                  <td>Can be richly specific and unique</td>
                </tr>
                <tr>
                  <td>Brand recognition</td>
                  <td>High (but AI does not weigh brand size)</td>
                  <td>Lower, but authenticity scores well</td>
                </tr>
                <tr>
                  <td>Review volume</td>
                  <td>High across all platforms</td>
                  <td>Can build strong volume on key platforms</td>
                </tr>
                <tr>
                  <td>Local relevance signals</td>
                  <td>Weak (same menu, same concept everywhere)</td>
                  <td>Strong (unique story, local sourcing, community ties)</td>
                </tr>
                <tr>
                  <td>Structured data implementation</td>
                  <td>Varies, often basic across locations</td>
                  <td>Opportunity to implement deep, specific markup</td>
                </tr>
                <tr>
                  <td>Third-party mentions</td>
                  <td>Generic press mentions</td>
                  <td>Local food blogs, press, awards carry more weight</td>
                </tr>
              </tbody>
            </table>

            <p>The independent restaurant&apos;s greatest strength in AI search is the same quality that makes it special to diners: its uniqueness. AI rewards the restaurants that give it the most specific, detailed, and authentic information to work with. Cookie-cutter chain pages cannot compete with a well-crafted independent restaurant website that tells a genuine story.</p>

            {/* ── CTA 8 ── */}
            <div className="ae-cta-inline not-prose">
              <p>See how your restaurant stacks up against the competition in AI search. Free report, no commitment. Find your gaps with a <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free AERO scan.</a></p>
              <Link href="/blindspot">Get Your Free Blind Spot Report &rarr;</Link>
            </div>

            {/* ── TIMELINE ── */}
            <span className="ae-section-label">Timeline</span>
            <h2 id="timeline">What a Realistic AI Visibility Timeline Looks Like</h2>

            <p>Restaurant owners want to know: how long until this actually works? The honest answer is that AI visibility builds gradually, not overnight. Here is what a typical trajectory looks like for restaurants that take their AI presence seriously.</p>

            <div className="ae-timeline not-prose">
              <div className="ae-timeline-item">
                <div className="ae-timeline-step">Weeks 1 to 2</div>
                <div className="ae-timeline-title">Audit and Baseline</div>
                <div className="ae-timeline-desc">Assess current AI visibility by testing what ChatGPT, Perplexity, and Google AI say about your restaurant. Document gaps, inaccuracies, and competitor advantages. Identify which platforms can find you and which cannot.</div>
              </div>
              <div className="ae-timeline-item">
                <div className="ae-timeline-step">Weeks 3 to 4</div>
                <div className="ae-timeline-title">Foundation Building</div>
                <div className="ae-timeline-desc">Ensure website content is comprehensive and crawlable. Convert PDF menus to HTML. Add structured data markup. Verify and update all directory listings for consistency. Fix any NAP (name, address, phone) discrepancies across platforms.</div>
              </div>
              <div className="ae-timeline-item">
                <div className="ae-timeline-step">Weeks 5 to 8</div>
                <div className="ae-timeline-title">Signal Strengthening</div>
                <div className="ae-timeline-desc">Build review velocity on AI-accessible platforms. Publish content that answers common diner questions. Expand directory presence to secondary and niche platforms. Begin generating the kind of third-party mentions that AI platforms trust.</div>
              </div>
              <div className="ae-timeline-item">
                <div className="ae-timeline-step">Weeks 9 to 12</div>
                <div className="ae-timeline-title">Early Results</div>
                <div className="ae-timeline-desc">Most restaurants begin seeing initial AI mentions during this phase. The mentions may be inconsistent at first. Continue strengthening signals. Monitor which queries trigger your restaurant and which ones still miss. Adjust content and listings based on what AI is and is not picking up.</div>
              </div>
              <div className="ae-timeline-item">
                <div className="ae-timeline-step">Months 4 to 6</div>
                <div className="ae-timeline-title">Compounding Visibility</div>
                <div className="ae-timeline-desc">With consistent signals across websites, directories, and review platforms, AI confidence in your restaurant grows. Recommendations become more frequent and more specific. The gap between you and competitors who are not optimizing widens significantly.</div>
              </div>
            </div>

            <div className="ae-takeaway not-prose">
              <div className="ae-takeaway-title">Timeline Reality Check</div>
              <p>There is no shortcut. Restaurants that try to game AI search with thin content or fake signals get filtered out. The timeline rewards consistency and genuine quality, which is actually good news for restaurants that take pride in what they do. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Schedule a free call</a> to see where you stand.</p>
            </div>

            {/* ── CTA 9 ── */}
            <div className="ae-cta-inline not-prose">
              <p>Ready to start the clock on your restaurant&apos;s AI visibility? The first step is knowing where you stand today.</p>
              <Link href="/blindspot">Run Your Free AI Visibility Scan &rarr;</Link>
            </div>

            {/* ── MISTAKES ── */}
            <span className="ae-section-label">Pitfalls</span>
            <h2 id="mistakes">The Mistakes That Keep Restaurants Invisible</h2>

            <p>After analyzing hundreds of restaurant digital profiles, certain patterns emerge among the businesses that remain invisible to AI. These are the most common mistakes, and understanding them is the fastest path to understanding what needs to change. Send your questions to <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>

            <h3>Relying Entirely on Google Reviews</h3>
            <p>As covered above, Google reviews are not accessible to most AI crawlers. Restaurants that have 500 Google reviews but zero Yelp reviews and no testimonials on their own website are essentially invisible to ChatGPT and Perplexity when it comes to social proof.</p>

            <h3>Treating the Website as a Brochure</h3>
            <p>A restaurant website with a hero image, a few paragraphs, and a link to a PDF menu gives AI almost nothing to work with. AI needs text. Lots of it. Detailed descriptions of your concept, your cuisine, your team, your sourcing, your private dining options, your event capabilities. Every piece of information that exists in the owner&apos;s head but not on the website is invisible to AI. Call <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> for a free consultation.</p>

            <h3>Inconsistent Business Information</h3>
            <p>A different phone number on Yelp versus Google versus the website. Hours that were updated on Google but not on TripAdvisor. An old address on a directory you forgot about. Each inconsistency chips away at AI&apos;s confidence in recommending your restaurant.</p>

            <h3>Ignoring Bing Places</h3>
            <p>Most restaurant owners do not know that Bing Places feeds directly into ChatGPT&apos;s local search capabilities. An unclaimed or inaccurate Bing Places listing is a direct gap in ChatGPT visibility. It takes minutes to set up, yet most restaurants have not done it. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Claim your market territory — one client per area.</a></p>

            <h3>No Structured Data Markup</h3>
            <p>Schema markup is how you translate your restaurant information into a language that AI platforms natively understand. Without it, AI has to guess what your hours are, what your cuisine type is, and what your price range is. With it, there is no guessing. The data is explicit.</p>

            {/* ── CTA 10 ── */}
            <div className="ae-cta-inline not-prose">
              <p>Every one of these mistakes is fixable. We can show you exactly which ones affect your restaurant. <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Run your free AI Blind Spot Scan.</a></p>
              <a href="tel:+12134442229">Call (213) 444-2229 &rarr;</a>
            </div>

            {/* ── CHEAT SHEET ── */}
            <div className="ae-cheat-sheet not-prose">
              <h3>Restaurant AI Visibility Cheat Sheet</h3>
              <ul>
                <li><strong>Website content.</strong> Detailed, text-based descriptions of your concept, cuisine, team, and story. No information left implied.</li>
                <li><strong>HTML menus.</strong> Full menus as crawlable text on your website, not PDFs or images. Include dish descriptions.</li>
                <li><strong>Structured data.</strong> Schema markup for Restaurant type, location, hours, menu, price range, and cuisine.</li>
                <li><strong>Review diversification.</strong> Active review profiles on Yelp, TripAdvisor, and your own website, not just Google.</li>
                <li><strong>Directory consistency.</strong> Identical NAP data across 15+ platforms including Bing Places and Apple Maps.</li>
                <li><strong>Fresh signals.</strong> Regular content updates, new reviews, menu changes, and seasonal offerings keep your profile current.</li>
                <li><strong>Third-party mentions.</strong> Local food blog features, press coverage, and award mentions build external authority.</li>
              </ul>
            </div>

            {/* ── CTA 11 ── */}
            <div className="ae-cta-inline not-prose">
              <p>Want help prioritizing which items on this list matter most for your restaurant?</p>
              <a href="mailto:support@theanswerengine.ai">Email support@theanswerengine.ai &rarr;</a>
            </div>

            {/* ── CTA 12 ── */}
            <div className="ae-cta-inline not-prose">
              <p>Prefer a phone conversation? Our team specializes in restaurant AI visibility. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a free 30-minute strategy call.</a></p>
              <a href="tel:+12134442229">Call (213) 444-2229 &rarr;</a>
            </div>

          </div>

          {/* ── 3-TIER CTA BLOCK ── */}
          <div className="not-prose my-16 p-8 rounded-2xl bg-gradient-to-br from-[#F27D24]/10 to-transparent border border-[#F27D24]/20">
            <h3 className="font-plus-jakarta text-2xl font-bold text-white mb-3">Is AI Sending Diners to Your Competitors?</h3>
            <p className="text-gray-400 mb-6">Our free Blind Spot Report reveals exactly what ChatGPT, Perplexity, and Google AI say when customers search for restaurants like yours.</p>
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

          {/* FAQ Section */}
          <section id="faq" className="mt-16 mb-12">
            <span className="ae-section-label not-prose">FAQ</span>
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-white font-plus-jakarta">Frequently Asked Questions</h2>
            <div className="grid gap-4">
              {[
                {
                  q: "Do restaurants really need to worry about AI search in 2026?",
                  a: "Yes. 45% of consumers now use AI to find local business recommendations, up from just 6% in 2025 according to BrightLocal. For restaurants specifically, the shift is even more pronounced because dining decisions are conversational by nature. People ask AI things like 'where should I take my wife for our anniversary' or 'best sushi near downtown.' If your restaurant is invisible to these platforms, you are losing covers to competitors who are visible."
                },
                {
                  q: "Which AI platforms recommend restaurants to diners?",
                  a: "ChatGPT (with OpenTable integration for direct reservations), Google AI Overviews, Perplexity, Claude, and Gemini all surface restaurant recommendations. ChatGPT drives roughly 87% of all AI referral traffic to businesses. Google AI Overviews now appear in over 25% of searches. Each platform pulls from different data sources, so visibility on just one platform is not enough."
                },
                {
                  q: "Where does ChatGPT get its restaurant recommendation data?",
                  a: "ChatGPT pulls restaurant data from multiple sources including Yelp, Google Maps, TripAdvisor, OpenTable, local food blogs, news articles, and your own website. Research shows that 41.6% of AI citations for restaurants come from third-party listings, 39.8% from the restaurant's own website, and the remainder from reviews and social media. This means both your owned content and your third-party presence matter."
                },
                {
                  q: "How do online reviews affect whether AI recommends my restaurant?",
                  a: "Reviews are one of the strongest signals AI platforms use when deciding which restaurants to recommend. However, not all reviews are equally visible to AI. Google reviews require JavaScript to load, making them invisible to most AI crawlers. Reviews on Yelp, TripAdvisor, and your own website (as plain text) are far more accessible. Restaurants with 20 or more fresh reviews in a 3-month period are 2.5 times more likely to appear in AI recommendations."
                },
                {
                  q: "Can a small independent restaurant compete with chain restaurants in AI search?",
                  a: "Yes, and independent restaurants often have an advantage. AI platforms prioritize specificity, authenticity, and depth over brand recognition. A neighborhood bistro with a detailed website describing its chef's background, sourcing philosophy, and signature dishes will often outperform a chain restaurant with a generic, templated website. AI rewards the qualities that make independent restaurants special."
                },
                {
                  q: "How long does it take for a restaurant to start appearing in AI search results?",
                  a: "Most restaurants begin seeing AI mentions within 60 to 90 days of implementing a structured optimization approach. The timeline depends on your starting point. A restaurant with a strong existing web presence may see results faster. A restaurant with minimal online presence will need more foundational work. Consistency matters more than speed."
                },
                {
                  q: "Does my restaurant's menu need to be on my website for AI visibility?",
                  a: "Having your menu as crawlable text on your website (not just a PDF or image) is one of the most impactful things you can do for AI visibility. When someone asks AI for 'restaurants with great pasta near me' or 'where to find vegan options downtown,' AI can only recommend your restaurant if it can actually read your menu items. PDF menus and image-based menus are essentially invisible to AI platforms."
                },
                {
                  q: "Is AI search replacing Google for restaurant discovery?",
                  a: "AI search is not replacing Google, but it is capturing an increasingly large share of restaurant discovery. 76% of diners still search online before choosing where to eat, and Google remains dominant. However, the portion of those searches happening through AI is growing rapidly. The smart approach is to optimize for both traditional search and AI search simultaneously."
                }
              ].map((faq, i) => (
                <div key={i} className="rounded-xl border border-white/10 bg-white/[0.02] p-6">
                  <h3 className="text-lg font-semibold text-white mb-3 font-plus-jakarta">{faq.q}</h3>
                  <p className="text-gray-300 leading-relaxed">{faq.a} Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> to get started.</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── CTA 13 ── */}
          <div className="ae-cta-inline not-prose my-8">
            <p>Still have questions about AI search for your restaurant? We are happy to help.</p>
            <a href="tel:+12134442229">Call (213) 444-2229 &rarr;</a>
          </div>

          {/* ── CTA 14 ── */}
          <div className="ae-cta-inline not-prose my-8">
            <p>Prefer email? Send us your questions and we will respond within 24 hours. <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a></p>
            <a href="mailto:support@theanswerengine.ai">Email support@theanswerengine.ai &rarr;</a>
          </div>

          {/* ── CTA 15 ── */}
          <div className="ae-cta-inline not-prose my-8">
            <p>Ready to see where your restaurant stands in AI search? The report is free and takes 2 minutes.</p>
            <Link href="/blindspot">Get Your Free Blind Spot Report &rarr;</Link>
          </div>

          {/* ── FINAL CTA ── */}
          <div className="ae-final-cta not-prose">
            <h2>Is Your Restaurant Visible to AI?</h2>
            <p>Find out exactly what ChatGPT, Google AI, and Perplexity say when diners search for restaurants like yours. Our free Blind Spot Report shows you the gaps in your AI visibility and where the opportunities are.</p>
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
            <p className="text-sm text-gray-500 mt-4">No pitch, just the data. See what AI sees about your restaurant.</p>
          </div>

          {/* ── AUTHOR CARD ── */}
          <div className="ae-author-card not-prose">
            <div className="w-12 h-12 rounded-full bg-[#F27D24] flex items-center justify-center text-white font-bold text-lg shrink-0">
              AE
            </div>
            <div>
              <p className="text-white font-semibold">Justin Borges</p>
              <p className="text-sm text-gray-400">
                We help restaurants and local businesses get found, cited, and recommended by AI platforms. Our team tracks AI search trends daily so you do not have to.
              </p>
            </div>
          </div>

        </article>
      </main>
    </>
  );
}
