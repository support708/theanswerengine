import type { Metadata } from 'next';
import Link from 'next/link';

// ISR Configuration
export const revalidate = 86400;
export const dynamic = 'force-static';
export const dynamicParams = true;

// Enhanced Metadata
export const metadata: Metadata = {
  title: 'How Event Planners Get Found on AI Search | The Answer Engine',
  description: 'AI platforms now drive event planner discovery. Learn which signals ChatGPT, Perplexity, and Google AI use before recommending event planning businesses.',

  openGraph: {
    title: 'How Event Planners Get Found on AI Search',
    description: 'AI platforms now drive event planner discovery. Learn which signals ChatGPT, Perplexity, and Google AI use before recommending event planning businesses.',
    type: 'article',
    publishedTime: '2026-04-19',
    modifiedTime: '2026-04-19',
    authors: ['https://theanswerengine.ai/about'],
    url: 'https://theanswerengine.ai/blog/how-event-planners-get-found-on-ai-search',
    images: [
      {
        url: 'https://theanswerengine.ai/api/og/how-event-planners-get-found-on-ai-search',
        width: 1200,
        height: 630,
        alt: 'How Event Planners Get Found on AI Search',
      }
    ],
    siteName: 'The Answer Engine',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'How Event Planners Get Found on AI Search',
    description: 'AI platforms now drive event planner discovery. Learn which signals ChatGPT, Perplexity, and Google AI use before recommending event planning businesses.',
    images: ['https://theanswerengine.ai/api/og/how-event-planners-get-found-on-ai-search'],
    creator: '@theanswerengine',
  },

  alternates: {
    canonical: 'https://theanswerengine.ai/blog/how-event-planners-get-found-on-ai-search',
  },

  keywords: [
    'event planner AI search',
    'event planning AI visibility',
    'ChatGPT event planner recommendations',
    'AI search event coordinator',
    'answer engine optimization event planning',
    'event planner digital marketing',
    'how AI recommends event planners',
    'Perplexity event planner',
    'Google AI event planning',
    'AEO event industry',
  ],
};

// JSON-LD Schema Component
function ComprehensiveSchema() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://theanswerengine.ai/blog/how-event-planners-get-found-on-ai-search#article",
        "headline": "How Event Planners Get Found on AI Search",
        "description": "AI platforms now drive event planner discovery. Learn which signals ChatGPT, Perplexity, and Google AI use before recommending event planning businesses.",
        "image": {
          "@type": "ImageObject",
          "url": "https://theanswerengine.ai/api/og/how-event-planners-get-found-on-ai-search",
          "width": 1200,
          "height": 630
        },
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
        "datePublished": "2026-04-19T09:00:00-07:00",
        "dateModified": "2026-04-19T09:00:00-07:00",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://theanswerengine.ai/blog/how-event-planners-get-found-on-ai-search"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://theanswerengine.ai/blog/how-event-planners-get-found-on-ai-search#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How do I find the right event planner for my event type?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "AI platforms recommend event planners based on the specificity of their service pages, the depth of their portfolio, and the breadth of reviews across platforms like The Knot, WeddingWire, Google, and Yelp. When searching, describe your event type precisely: corporate gala, wedding reception, nonprofit fundraiser. AI tools cross-reference your description against planners who have documented experience with that specific event format. Planners who clearly describe which events they specialize in are far more likely to be surfaced than those with generic 'full-service' positioning."
            }
          },
          {
            "@type": "Question",
            "name": "What's included in event planning services and what costs extra?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "AI platforms specifically look for transparent scope documentation when evaluating event planners. Core services typically include venue scouting, vendor coordination, day-of logistics, and timeline management. Common add-ons include floral design, audiovisual production, custom decor, transportation coordination, and post-event breakdown. Planners who clearly separate what is included from what carries additional costs are far more likely to be recommended by AI because that clarity answers the question the buyer is actually asking."
            }
          },
          {
            "@type": "Question",
            "name": "How do event planners and coordinators differ and which do I need?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "An event planner typically handles full-cycle planning from concept through execution, often starting six to eighteen months in advance. An event coordinator or day-of coordinator steps in closer to the event date to manage logistics that are already in place. AI platforms surface this distinction because it is one of the most commonly asked questions in the category. Businesses that clearly explain this difference on their website, with guidance on which option fits different budgets and timelines, signal expertise to AI models and are more likely to be recommended."
            }
          },
          {
            "@type": "Question",
            "name": "How much should I expect to spend on an event coordinator?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "AI platforms consistently recommend businesses that provide pricing transparency. Event coordinator costs vary widely by market, event size, and scope. Day-of coordination typically ranges from $1,000 to $3,500. Full-service wedding planning runs from $3,000 to $10,000 or more in most major markets. Corporate event planning is frequently priced as a percentage of the overall event budget. Planners who publish starting prices or pricing ranges on their websites are significantly more likely to appear in AI-generated recommendations than those who require an inquiry before sharing any cost information."
            }
          },
          {
            "@type": "Question",
            "name": "Can you help with events on a tight timeline or small budget?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "AI platforms surface this question frequently because budget and timeline constraints are among the most common real-world triggers for event planning searches. Event planners who address these scenarios directly on their website, explaining their minimum lead time, their smallest project scope, and how they approach value-focused events, are better positioned to capture AI recommendations for these searches. Businesses that only describe their premium or full-service offering miss a large segment of AI-driven inquiries."
            }
          },
          {
            "@type": "Question",
            "name": "What's the communication process when working with an event planner?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "AI platforms treat communication process documentation as a trust signal. Buyers want to know how often they will hear from their planner, what tools are used (planning portals, shared documents, project management software), how decisions are made, and what happens when something changes. Event planners who describe their communication cadence and client experience on their website provide the kind of verifiable, specific information that AI models use to build trust profiles. Vague descriptions like 'we keep you informed throughout' do not satisfy the query the way structured process descriptions do."
            }
          },
          {
            "@type": "Question",
            "name": "What should I prepare before meeting with an event planner?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "AI frequently surfaces this question at the top of the event planning research funnel. Useful preparation includes your guest count estimate, the event date or a target date range, a venue shortlist or general preference, a preliminary budget range, and a mood board or visual references if the event has an aesthetic direction. Event planners who publish a 'what to bring to our first meeting' guide or intake checklist on their website answer this question in a format AI can directly cite. This type of practical, specific content is a strong AI recommendation signal."
            }
          },
          {
            "@type": "Question",
            "name": "How do I make sure my event planner stays within budget?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "AI platforms recommend planners who demonstrate budget management competency explicitly. This means describing how they track spend against budget, what their process is when a line item exceeds projection, how they present vendor bids for client approval, and what contractual protections exist around cost overruns. Planners who address budget management as a defined part of their service process are more likely to be recommended for cost-conscious buyers, which represents a significant share of AI-driven event planning searches."
            }
          }
        ]
      },
      {
        "@type": "Organization",
        "@id": "https://theanswerengine.ai/#organization",
        "name": "The Answer Engine",
        "url": "https://theanswerengine.ai",
        "logo": {
          "@type": "ImageObject",
          "url": "https://theanswerengine.ai/TheAnswerEngine_white.png",
          "width": 600,
          "height": 60
        },
        "description": "Answer Engine Optimization agency helping local service businesses get cited by AI platforms like ChatGPT, Perplexity, Claude, and Google AI."
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://theanswerengine.ai/blog/how-event-planners-get-found-on-ai-search#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://theanswerengine.ai/" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://theanswerengine.ai/blog" },
          { "@type": "ListItem", "position": 3, "name": "How Event Planners Get Found on AI Search" }
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}

// Breadcrumb Component
function Breadcrumb() {
  return (
    <nav className="text-sm text-gray-500 mb-8" aria-label="Breadcrumb">
      <Link href="/" className="hover:text-white transition-colors">Home</Link>
      <span className="mx-2">/</span>
      <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
      <span className="mx-2">/</span>
      <span className="text-gray-400">How Event Planners Get Found on AI Search</span>
    </nav>
          {/* Championship Cover Image */}
          <div className="ae-article-hero w-full rounded-xl overflow-hidden mb-10" style={{ maxHeight: 420 }}>
            <img
              src="/blog/how-event-planners-get-found-on-ai-search.webp"
              alt="how event planners get found on ai search"
              style={{ width: '100%', height: 420, objectFit: 'cover', display: 'block' }}
              loading="eager"
            />
          </div>
  );
}

export default function HowEventPlannersGetFoundOnAISearch() {
  const publishDate = '2026-04-19';
  const readTime = '14 min read';

  return (
    <>
      <ComprehensiveSchema />

      <main className="min-h-screen bg-[#0F1117] relative">
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-white/[0.06]">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0F1117] via-[#141620] to-[#0F1117]" />

          <div className="absolute inset-0 opacity-[0.03]">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="hero-grid-189" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                  <circle cx="20" cy="20" r="1" fill="white" />
                  <path d="M0 20h40M20 0v40" stroke="white" strokeWidth="0.5" opacity="0.3" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#hero-grid-189)" />
            </svg>
          </div>

          <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-500/[0.04] rounded-full blur-3xl" />

          <div className="relative max-w-4xl mx-auto px-6 py-20 sm:py-28">
            <Breadcrumb />

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 bg-orange-500/10 border border-orange-500/20">
              <span className="text-xs font-semibold tracking-wider uppercase text-orange-400">Industry Guides</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-white leading-tight font-plus-jakarta">
              How Event Planners Get Found{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">on AI Search</span>
            </h1>

            <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-3xl">
              Forty-five percent of consumers now turn to AI tools for local business recommendations. For event planners,
              that shift is not a future problem. It is happening right now, and most planners have no idea whether
              AI is sending them clients or sending them to their competitors.
            </p>

            <div className="flex flex-wrap gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <time dateTime={publishDate}>April 19, 2026</time>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{readTime}</span>
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

        {/* Article Content */}
        <div className="max-w-4xl mx-auto px-6 py-16 sm:py-20">

          {/* Stats Grid */}
          <div className="not-prose ae-stats-grid">
            <div className="ae-stat-card">
              <div className="ae-stat-value ae-accent">45%</div>
              <div className="ae-stat-label">of Consumers Now Use AI Tools for Local Business Recommendations</div>
            </div>
            <div className="ae-stat-card">
              <div className="ae-stat-value ae-accent">5x</div>
              <div className="ae-stat-label">Higher Conversion Rate from AI Search vs. Google (14.2% vs 2.8%)</div>
            </div>
            <div className="ae-stat-card">
              <div className="ae-stat-value ae-accent">68%</div>
              <div className="ae-stat-label">of Local Search Visibility Captured by the Top 20% of Businesses</div>
            </div>
            <div className="ae-stat-card">
              <div className="ae-stat-value ae-accent">72%</div>
              <div className="ae-stat-label">of Event Planners Believe AI Is Valuable but Most Don&apos;t Optimize</div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="not-prose ae-toc my-10">
            <div className="ae-toc-title">Table of Contents</div>
            <ol className="ae-toc-list">
              <li><a href="#discovery-shift" className="ae-toc-link">The Discovery Shift That Is Leaving Planners Behind</a></li>
              <li><a href="#how-ai-discovers" className="ae-toc-link">How AI Discovers Service Businesses</a></li>
              <li><a href="#visibility-gap" className="ae-toc-link">The Event Planning Visibility Gap</a></li>
              <li><a href="#what-gets-recommended" className="ae-toc-link">What Actually Gets Event Planners Recommended</a></li>
              <li><a href="#multi-platform-reviews" className="ae-toc-link">The Multi-Platform Review Advantage</a></li>
              <li><a href="#diy-vs-professional" className="ae-toc-link">DIY Approach vs. Professional AI Optimization</a></li>
              <li><a href="#platform-breakdown" className="ae-toc-link">Platform-by-Platform Breakdown</a></li>
              <li><a href="#winning-looks-like" className="ae-toc-link">What Winning Looks Like</a></li>
              <li><a href="#cheat-sheet" className="ae-toc-link">Key AI Visibility Factors</a></li>
              <li><a href="#faq" className="ae-toc-link">Frequently Asked Questions</a></li>
            </ol>
          </div>

          {/* Section: The Discovery Shift */}
          <div id="discovery-shift" className="scroll-mt-20">
            <div className="not-prose ae-section-label">The New Reality</div>

            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-3 mb-5 font-plus-jakarta">
              The Discovery Shift That Is Leaving Planners Behind
            </h2>

            <p className="text-gray-300 leading-relaxed mb-5">
              A couple planning a wedding used to start with a Google search. They would scan directories, click through
              to vendor websites, and ask friends for referrals. That process has not disappeared, but it has been
              joined by something newer and far more decisive: an AI conversation.
             Markets fill fast. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Check your territory availability.</a></p>

            <p className="text-gray-300 leading-relaxed mb-5">
              Today, a growing share of couples, corporate planners, and event hosts start by asking ChatGPT, Perplexity,
              or Google AI for guidance. They ask questions like "who are the best wedding planners in Austin" or
              "what should I budget for a corporate event coordinator in Chicago." The AI delivers a short list of
              businesses, sometimes with explanation, sometimes with just a name and a link. What it does not deliver is
              a directory of every qualified planner in that market.
             Your first step: <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free AERO Blind Spot Scan.</a></p>

            <p className="text-gray-300 leading-relaxed mb-5">
              Google's share as the dominant recommendation platform has already dropped from 83% to 71% over the past
              year. That gap is being filled almost entirely by AI assistants. The businesses appearing in those AI
              answers are capturing a conversion rate five times higher than organic Google clicks: 14.2% versus 2.8%.
              The clients these planners are picking up from AI are not comparison-shopping. They have already decided
              they want a recommendation. They just need a name.
             <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Claim your free call</a> before your market fills.</p>

            <p className="text-gray-300 leading-relaxed mb-8">
              For event planners, this shift creates an urgent question: when a prospective client asks AI to recommend
              an event planner in your market, does your business come up? For the vast majority of planners operating
              today, the honest answer is no. And most of them do not even know it.
             Reach out: <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>
          </div>

          {/* Inline CTA 1 */}
          <div className="not-prose my-10 p-6 rounded-xl bg-gradient-to-r from-[#F27D24]/10 to-transparent border border-[#F27D24]/20 flex flex-col sm:flex-row items-start sm:items-center gap-4 ae-cta-inline">
            <div className="flex-1">
              <p className="text-white font-semibold mb-1">Is AI recommending your event planning business? Call us at <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> today.</p>
              <p className="text-gray-400 text-sm">Find your blind spots with a free AI visibility audit. Results delivered within 24 hours. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Lock in your exclusive territory now.</a></p>
            </div>
            <Link href="/blindspot" className="shrink-0 inline-flex items-center gap-2 bg-[#F27D24] text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-[#D96416] transition-colors text-sm">
              Get Your Free Report
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>

          {/* Section: How AI Discovers Service Businesses */}
          <div id="how-ai-discovers" className="scroll-mt-20 mt-16">
            <div className="not-prose ae-section-label">The Mechanism</div>

            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-3 mb-5 font-plus-jakarta">
              How AI Discovers Service Businesses
            </h2>

            <p className="text-gray-300 leading-relaxed mb-5">
              AI platforms do not maintain a database of certified event planners. They synthesize information from
              across the web: business websites, review platforms, industry directories, community discussions, editorial
              coverage, and structured data signals. What they are ultimately doing is building a confidence model.
              Which businesses does the web consistently describe as credible, experienced, and worth recommending in
              a given service category?
             <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Get your free AI readiness report.</a></p>

            <p className="text-gray-300 leading-relaxed mb-5">
              The weight assigned to different signals varies by platform and query type, but the underlying logic is
              consistent. AI models are looking for corroboration. Your own website says you are excellent at what you
              do. Third-party sources saying the same thing carry far more weight. Review platforms, editorial mentions,
              social proof, community discussions, and structured business data all contribute to the corroboration
              picture AI constructs about your business.
             Ready to act? <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a free strategy session.</a></p>

            <p className="text-gray-300 leading-relaxed mb-5">
              This is why understanding <Link href="/blog/does-schema-markup-help-ai-search" className="text-[#F27D24] hover:text-orange-400 underline underline-offset-2 transition-colors">schema markup for AI search</Link> matters for event planners specifically. Structured data is one of the few direct signals a business can
              send to AI models without relying entirely on third-party sources. When your website clearly declares
              your service category, location, pricing structure, and service offerings in machine-readable format,
              you are giving AI platforms explicit data to work with rather than making them infer it.
             Drop us a line at <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>

            <p className="text-gray-300 leading-relaxed mb-5">
              The AI discovery process also rewards specificity. A planner who clearly describes their specialization
              in corporate galas, their geographic coverage, and the specific types of events they have executed is
              easier for AI to recommend confidently than one with a generic full-service positioning. Vague is
              invisible. Specific is surfaceable.
             Speak to an AEO specialist: <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.</p>

            <p className="text-gray-300 leading-relaxed mb-8">
              Beyond your own website, the business profiles you maintain on external platforms matter significantly.
              Your <Link href="/blog/how-to-optimize-your-google-business-profile-for-ai" className="text-[#F27D24] hover:text-orange-400 underline underline-offset-2 transition-colors">Google Business Profile for AI</Link> is one of the most important external data sources AI platforms pull from when forming local recommendations. Incomplete or inconsistent profiles create gaps that
              erode AI confidence and push you down in favor of better-documented competitors.
             One client per city. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">See if your market is available.</a></p>
          </div>

          {/* Section: The Event Planning Visibility Gap */}
          <div id="visibility-gap" className="scroll-mt-20 mt-16">
            <div className="not-prose ae-section-label">The Core Problem</div>

            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-3 mb-5 font-plus-jakarta">
              The Event Planning Visibility Gap
            </h2>

            <p className="text-gray-300 leading-relaxed mb-5">
              The event planning industry has a specific visibility problem in AI search that is more acute than in many
              other service categories. AI platforms are very good at recommending national chains, major venue brands,
              and large event production companies that have accumulated extensive press coverage and cross-platform
              documentation. Regional and boutique planners, even those with outstanding reputations, are nearly
              invisible to AI recommendation engines.
             Check where you stand: <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free Blind Spot Scan.</a></p>

            <p className="text-gray-300 leading-relaxed mb-5">
              The data tells the story clearly. AI recommends major events and well-documented planning companies in
              over 90% of recommendation queries. Regional and small planners appear in a small fraction of those
              responses, even when they serve the geography the user specified. The problem is not quality. It is
              documentation. The boutique planner with 200 five-star reviews and a decade of experience is invisible
              to AI because the signals AI relies on are scattered, incomplete, or absent entirely.
             <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Schedule a free 30-min call.</a></p>

            <p className="text-gray-300 leading-relaxed mb-5">
              Consider the typical event planning website. It features a beautiful portfolio, glowing testimonials,
              and a contact form. What it often lacks are the precise signals AI needs to recommend a business with
              confidence: pricing information, service scope definitions, structured data markup, multi-platform review
              presence, and content that directly addresses the questions buyers actually ask. The gap between what
              most planners publish and what AI needs to recommend them is significant.
             Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> for a custom strategy.</p>

            {/* Warning Callout */}
            <div className="not-prose ae-callout ae-callout-warning my-8">
              <div className="ae-callout-icon">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div>
                <div className="ae-callout-title">What Makes Event Planners Invisible to AI</div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  No pricing information on the website. No presence on The Knot, WeddingWire, or Yelp. Reviews concentrated
                  on a single platform. No structured data markup. Service pages that describe outcomes instead of process.
                  Inconsistent business name and address across directories. These are not design failures. They are
                  AI visibility failures, and they are costing planners clients they will never know they lost.
                 Questions? Call <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.</p>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed mb-5">
              This visibility gap is not static. As AI adoption among consumers continues its upward trajectory, the
              planners who address these gaps now are compounding their advantage every month. The top 20% of businesses
              in any local service category already capture 68% of AI-driven visibility. In most markets, that top 20%
              for event planning is still forming. The window to claim a position in it is open, but it will not stay
              that way indefinitely.
             <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Secure your territory before a competitor does.</a></p>

            <p className="text-gray-300 leading-relaxed mb-8">
              AI referrals currently represent only 1.08% of total website traffic across the web, but that number is
              growing at approximately 1% per month. That growth curve is not gradual: it is compounding. Businesses
              that establish AI visibility now will be positioned to capture an outsized share as AI-driven referrals
              become a primary traffic source for service industries over the next 18 to 24 months.
             <a href="https://theanswerengine.ai/blindspot" className="cta-inline">See your AI visibility score — free.</a></p>
          </div>

          {/* Inline CTA 2 */}
          <div className="not-prose my-10 p-6 rounded-xl bg-gradient-to-r from-[#F27D24]/10 to-transparent border border-[#F27D24]/20 flex flex-col sm:flex-row items-start sm:items-center gap-4 ae-cta-inline">
            <div className="flex-1">
              <p className="text-white font-semibold mb-1">How many AI-driven clients are going to your competitors? <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book your free consultation here.</a></p>
              <p className="text-gray-400 text-sm">Your free Blind Spot Report maps exactly where you stand across ChatGPT, Perplexity, and Google AI. Contact us at <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>
            </div>
            <Link href="/blindspot" className="shrink-0 inline-flex items-center gap-2 bg-[#F27D24] text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-[#D96416] transition-colors text-sm">
              Run My Audit
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>

          {/* Section: What Actually Gets Event Planners Recommended */}
          <div id="what-gets-recommended" className="scroll-mt-20 mt-16">
            <div className="not-prose ae-section-label">The Ranking Factors</div>

            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-3 mb-5 font-plus-jakarta">
              What Actually Gets Event Planners Recommended
            </h2>

            <p className="text-gray-300 leading-relaxed mb-5">
              The event planners who consistently appear in AI recommendations share a common characteristic: they have
              made it easy for AI to verify their credibility. They have not just built a beautiful portfolio. They have
              built a documentation layer around their business that AI can read, cross-reference, and cite confidently.
             Reach us at <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.</p>

            <p className="text-gray-300 leading-relaxed mb-5">
              Pricing transparency is the single most impactful signal missing from most event planning businesses.
              AI cannot recommend what it cannot verify, and cost is one of the primary factors buyers use when asking
              for recommendations. Without pricing information, event planners are essentially invisible to the queries
              that carry the highest commercial intent. A planner who publishes starting prices, service tiers, or
              budget guidance outperforms one who requires an inquiry before discussing cost, every single time.
             We work with one business per market. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Check if yours is still open.</a></p>

            <p className="text-gray-300 leading-relaxed mb-5">
              Multi-platform review presence is the second major factor. This is not about having more reviews on
              Google. It is about having reviews distributed across the platforms AI actually crawls: The Knot,
              WeddingWire, Facebook, Yelp, and Google together. A planner with 50 reviews on Google and nothing elsewhere
              has a weaker AI visibility profile than one with 15 reviews spread across four platforms. AI looks for
              corroboration, and platform diversity is a form of corroboration.
             Find your gaps with a <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free AERO scan.</a></p>

            <p className="text-gray-300 leading-relaxed mb-5">
              Structured data and content clarity round out the top three factors. This is where the connection to
              AI recommendation logic becomes technical. The way your website describes your services, the questions
              it answers, and the schema markup it uses all influence how confidently AI can categorize and recommend
              your business. It is also worth understanding <Link href="/blog/why-ai-recommends-businesses-with-worse-reviews" className="text-[#F27D24] hover:text-orange-400 underline underline-offset-2 transition-colors">why AI recommendations are not just about reviews</Link> — the full signal picture matters more than any single metric.
             <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Schedule a free call</a> to see where you stand.</p>

            <p className="text-gray-300 leading-relaxed mb-8">
              AI can verify a business that has documented its expertise. It cannot verify a business that merely claims
              it. That distinction is the entire gap between being recommended and being invisible.
             Send your questions to <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>

            {/* Comparison Table */}
            <div className="not-prose ae-comparison-table my-8 overflow-x-auto">
              <div className="text-white font-semibold mb-4 font-plus-jakarta">What AI Search Needs vs. What Most Planners Provide</div>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 px-4 text-gray-400 font-semibold">AI Needs</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-semibold">Most Planners Provide</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-semibold">AI Visibility Impact</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-3 px-4 text-white font-medium">Pricing information or ranges</td>
                    <td className="py-3 px-4 text-gray-400">"Contact us for pricing"</td>
                    <td className="py-3 px-4 text-red-400 font-semibold">Invisible to cost queries</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-3 px-4 text-white font-medium">Reviews on 4+ platforms</td>
                    <td className="py-3 px-4 text-gray-400">Google reviews only</td>
                    <td className="py-3 px-4 text-yellow-400 font-semibold">Partial corroboration</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-3 px-4 text-white font-medium">Structured data markup</td>
                    <td className="py-3 px-4 text-gray-400">No schema on site</td>
                    <td className="py-3 px-4 text-red-400 font-semibold">Reduced confidence score</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-3 px-4 text-white font-medium">Specific service page per event type</td>
                    <td className="py-3 px-4 text-gray-400">One "Services" page for everything</td>
                    <td className="py-3 px-4 text-yellow-400 font-semibold">Low category specificity</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-3 px-4 text-white font-medium">FAQ content addressing buyer questions</td>
                    <td className="py-3 px-4 text-gray-400">Portfolio photos and testimonials</td>
                    <td className="py-3 px-4 text-red-400 font-semibold">Misses informational queries</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-3 px-4 text-white font-medium">Consistent NAP across directories</td>
                    <td className="py-3 px-4 text-gray-400">Inconsistent listings, missing platforms</td>
                    <td className="py-3 px-4 text-red-400 font-semibold">Entity confusion, lower trust</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-3 px-4 text-white font-medium">Third-party editorial mentions</td>
                    <td className="py-3 px-4 text-gray-400">Self-published blog posts only</td>
                    <td className="py-3 px-4 text-yellow-400 font-semibold">Weak authority signals</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-3 px-4 text-white font-medium">Active, complete GBP profile</td>
                    <td className="py-3 px-4 text-gray-400">Unclaimed or outdated GBP</td>
                    <td className="py-3 px-4 text-red-400 font-semibold">Missing from local AI queries</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Section: Multi-Platform Review Advantage */}
          <div id="multi-platform-reviews" className="scroll-mt-20 mt-16">
            <div className="not-prose ae-section-label">Review Strategy</div>

            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-3 mb-5 font-plus-jakarta">
              The Multi-Platform Review Advantage
            </h2>

            <p className="text-gray-300 leading-relaxed mb-5">
              For event planners, the review ecosystem is unusually rich. Unlike general contractors or medical offices,
              event planners operate in a category with multiple dedicated review platforms: The Knot, WeddingWire,
              Thumbtack, and Zola alongside the general platforms like Google, Yelp, and Facebook. This creates a
              distinct opportunity that most planners leave entirely uncaptured.
             Call <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> for a free consultation.</p>

            <p className="text-gray-300 leading-relaxed mb-5">
              AI platforms crawl all of these sources. When a user asks ChatGPT to recommend a wedding planner in
              their city, the AI draws on the aggregate review signal across all the platforms it has indexed data
              from. A planner with 80 reviews on The Knot, 40 on WeddingWire, 25 on Google, and 15 on Yelp presents
              a fundamentally different corroboration profile than a planner with 160 Google reviews and nothing
              elsewhere. The first planner looks verified by multiple independent platforms. The second looks like
              they concentrated effort on a single channel.
             <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Claim your market territory — one client per area.</a></p>

            <p className="text-gray-300 leading-relaxed mb-5">
              Review content also matters beyond star ratings. AI models analyze review text for specificity, recency,
              and event type references. A review that describes a corporate conference in detail, names the venue,
              mentions the planner's specific contributions, and discusses budget management gives AI far more usable
              information than a five-star review that says "absolutely amazing!" The businesses that actively encourage
              detailed, specific review content from their clients are building AI citation assets with every
              post-event follow-up.
             <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Run your free AI Blind Spot Scan.</a></p>

            {/* Quote */}
            <div className="not-prose ae-quote my-10">
              <blockquote className="border-l-4 border-[#F27D24] pl-6 py-2">
                <p className="text-lg text-gray-200 italic leading-relaxed">
                  "AI can&apos;t recommend what it can&apos;t verify. Event planners who make pricing and service clarity
                  a priority consistently outperform those who rely on their reputation alone."
                 <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a free 30-minute strategy call.</a></p>
                <footer className="mt-3 text-sm text-gray-500">The Answer Engine Research Team</footer>
              </blockquote>
            </div>

            <p className="text-gray-300 leading-relaxed mb-5">
              There is also a recency dimension to the review advantage. AI platforms with real-time web access, like
              Perplexity, weight recent reviews more heavily than older ones. A planner who consistently collects
              reviews after every event maintains a freshness signal that compounds over time. A planner who collected
              strong reviews two years ago and has gone quiet reads as less active and less current to the AI models
              that factor recency into their recommendations.
             Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> to get started.</p>

            <p className="text-gray-300 leading-relaxed mb-8">
              The multi-platform review strategy connects to a broader principle about how <Link href="/blog/how-press-mentions-help-ai-recommend-you" className="text-[#F27D24] hover:text-orange-400 underline underline-offset-2 transition-colors">how press mentions help AI</Link> recommend your business. Reviews on third-party platforms and editorial coverage from publications are
              different types of external validation, but they serve the same function in AI's evaluation model:
              they are third-party evidence that your business is what it claims to be.
             <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a></p>
          </div>

          {/* Section: DIY vs Professional AI Optimization */}
          <div id="diy-vs-professional" className="scroll-mt-20 mt-16">
            <div className="not-prose ae-section-label">Strategic Decision</div>

            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-3 mb-5 font-plus-jakarta">
              DIY Approach vs. Professional AI Optimization
            </h2>

            <p className="text-gray-300 leading-relaxed mb-5">
              Many event planners, upon learning that AI visibility is addressable, assume they can handle it
              themselves with some web research and an afternoon of updates. Some basic improvements are indeed
              achievable independently. But the full picture of AI optimization for a service business involves
              more layers than most business owners realize when they start.
            </p>

            {/* Pros/Cons */}
            <div className="not-prose ae-pros-cons my-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="ae-pros p-5 rounded-xl bg-green-500/5 border border-green-500/20">
                <div className="flex items-center gap-2 mb-4">
                  <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-green-400 font-semibold">DIY Wins: Where You Can Self-Serve</span>
                </div>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start gap-2"><span className="text-green-400 mt-0.5">+</span> Claiming and completing your GBP profile</li>
                  <li className="flex items-start gap-2"><span className="text-green-400 mt-0.5">+</span> Setting up profiles on The Knot and WeddingWire</li>
                  <li className="flex items-start gap-2"><span className="text-green-400 mt-0.5">+</span> Publishing a basic FAQ section on your website</li>
                  <li className="flex items-start gap-2"><span className="text-green-400 mt-0.5">+</span> Asking clients to leave reviews on multiple platforms</li>
                  <li className="flex items-start gap-2"><span className="text-green-400 mt-0.5">+</span> Adding a starting-price range to your services page</li>
                </ul>
              </div>
              <div className="ae-cons p-5 rounded-xl bg-red-500/5 border border-red-500/20">
                <div className="flex items-center gap-2 mb-4">
                  <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-red-400 font-semibold">Where DIY Falls Short</span>
                </div>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">-</span> Implementing and validating structured data markup</li>
                  <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">-</span> Auditing AI citation gaps across multiple platforms</li>
                  <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">-</span> Identifying which queries your competitors appear in that you don&apos;t</li>
                  <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">-</span> Building third-party editorial authority at scale</li>
                  <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">-</span> Monitoring AI mentions and recommendation changes over time</li>
                </ul>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed mb-8">
              The practical threshold is this: basic hygiene improvements are DIY-friendly. Systematic AI visibility
              building across the full signal stack is not. Most event planners who attempt a full DIY approach discover
              they have addressed the visible surface layer but missed the structural signals that determine whether AI
              actually recommends them when the query comes in. Understanding how <Link href="/blog/does-having-a-blog-actually-help-ai-recommend-your-business" className="text-[#F27D24] hover:text-orange-400 underline underline-offset-2 transition-colors">blog content for AI</Link> fits into
              the broader signal picture is one example of the depth that separates surface improvements from
              genuine visibility gains.
            </p>
          </div>

          {/* Inline CTA 3 */}
          <div className="not-prose my-10 p-6 rounded-xl bg-gradient-to-r from-[#F27D24]/10 to-transparent border border-[#F27D24]/20 flex flex-col sm:flex-row items-start sm:items-center gap-4 ae-cta-inline">
            <div className="flex-1">
              <p className="text-white font-semibold mb-1">Want to know exactly where your AI visibility gaps are?</p>
              <p className="text-gray-400 text-sm">We audit every major AI platform and show you what they see about your business right now.</p>
            </div>
            <Link href="/blindspot" className="shrink-0 inline-flex items-center gap-2 bg-[#F27D24] text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-[#D96416] transition-colors text-sm">
              Start Free Audit
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>

          {/* Section: Platform-by-Platform Breakdown */}
          <div id="platform-breakdown" className="scroll-mt-20 mt-16">
            <div className="not-prose ae-section-label">Platform Intelligence</div>

            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-3 mb-5 font-plus-jakarta">
              Platform-by-Platform Breakdown
            </h2>

            <p className="text-gray-300 leading-relaxed mb-5">
              Not all AI platforms behave identically when recommending event planners. Understanding the distinct
              character of each platform helps you prioritize where to focus attention and how to frame your
              business for the queries each platform handles differently.
            </p>

            {/* Bar Group: Platform Priority */}
            <div className="not-prose ae-bar-group my-8 space-y-4">
              <div className="ae-bar-group-title text-white font-semibold mb-4 font-plus-jakarta">AI Platform Recommendation Weight for Local Service Queries</div>
              <div className="space-y-3">
                {[
                  { label: 'Google AI Mode / AI Overviews', value: 91, note: 'Highest volume. Pulls from GBP, Maps, and structured web data.', color: '#F27D24' },
                  { label: 'ChatGPT (with web browsing)', value: 84, note: 'Dominant for research-style queries. Weighs site content and third-party mentions.', color: '#F27D24' },
                  { label: 'Perplexity AI', value: 78, note: 'Real-time web access. Rewards recency and review platform breadth.', color: '#e07b00' },
                  { label: 'Microsoft Copilot', value: 67, note: 'Bing-integrated. Responds well to Bing Places and structured listings.', color: '#e07b00' },
                  { label: 'Claude AI', value: 52, note: 'Context-heavy responses. Values detailed service descriptions.', color: '#b86a00' },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-300">{item.label}</span>
                      <span className="text-gray-400">{item.value}%</span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{ width: `${item.value}%`, backgroundColor: item.color }}
                      />
                    </div>
                    <div className="text-gray-500 text-xs mt-1">{item.note}</div>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 text-xs mt-3">Relative recommendation frequency for local event planning queries. Estimated from observed citation patterns.</p>
            </div>

            <p className="text-gray-300 leading-relaxed mb-5">
              Google AI Mode is where most event planners should focus first, not because it is the most
              sophisticated platform, but because it operates at the highest query volume and is most directly
              tied to local search signals that planners already have some presence in. A well-optimized Google
              Business Profile, consistent directory listings, and structured data on your website form the
              foundation that Google AI Mode pulls from.
            </p>

            <p className="text-gray-300 leading-relaxed mb-5">
              ChatGPT, increasingly used for research-style queries like "what should I look for in a wedding
              planner" and "who are the best event planners in Denver for corporate events," weighs your website
              content and third-party editorial mentions more heavily than Google's local data signals. A planner
              who has been featured in a local business journal or a wedding industry publication has a meaningful
              advantage in ChatGPT recommendations over one with equal Google signals but no editorial footprint.
            </p>

            <p className="text-gray-300 leading-relaxed mb-8">
              Perplexity is particularly relevant for event planners because it actively crawls and cites review
              platforms. Perplexity answers frequently include links to The Knot and WeddingWire profiles when
              recommending event planners. A planner without robust presence on these platforms is simply not
              being surfaced in Perplexity's recommendation stack, regardless of their Google standing.
            </p>
          </div>

          {/* Section: What Winning Looks Like */}
          <div id="winning-looks-like" className="scroll-mt-20 mt-16">
            <div className="not-prose ae-section-label">The Winning Profile</div>

            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-3 mb-5 font-plus-jakarta">
              What Winning Looks Like
            </h2>

            <p className="text-gray-300 leading-relaxed mb-5">
              The event planners who dominate AI recommendations in their markets share a common profile. It is not
              about having the most reviews or the largest portfolio. It is about the completeness and coherence of
              their AI-facing signal stack.
            </p>

            {/* Success Callout */}
            <div className="not-prose ae-callout ae-callout-success my-8">
              <div className="ae-callout-icon">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <div className="ae-callout-title">What an AI-Recommended Event Planner Looks Like</div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Service pages for each event type they handle. Pricing information published openly, even if just
                  ranges. Reviews on Google, The Knot, WeddingWire, Yelp, and Facebook. A complete, verified Google
                  Business Profile with photos, hours, and a service area. An FAQ section that directly answers
                  the questions buyers ask AI. At least one third-party editorial mention. Consistent NAP data
                  across every directory they appear in. This is the profile AI can recommend without hesitation.
                </p>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed mb-5">
              There is also a content dimension to winning. The event planners who appear most consistently in AI
              responses are those whose websites answer the questions buyers are actually asking AI assistants.
              Questions about pricing, process, timeline, the difference between planning and coordination, what
              to bring to a first meeting, how to stay on budget. These are the queries driving commercial intent
              in the event planning category, and the planners whose content addresses them have a substantial
              advantage in AI recommendation frequency.
            </p>

            <p className="text-gray-300 leading-relaxed mb-8">
              This content advantage compounds. An event planner who publishes a detailed article explaining the
              difference between a wedding planner and a day-of coordinator creates a content asset that AI draws
              on when answering that specific question, and that answer will often include the planner's business
              as a relevant citation. The content and the recommendation are not separate strategies. They are
              the same strategy executed at different levels.
            </p>
          </div>

          {/* Cheat Sheet */}
          <div id="cheat-sheet" className="scroll-mt-20">
            <div className="not-prose ae-cheat-sheet my-10 p-6 rounded-2xl bg-gradient-to-br from-white/[0.03] to-transparent border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-[#F27D24]/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-[#F27D24]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <div>
                  <div className="text-white font-bold font-plus-jakarta">Key AI Visibility Factors for Event Planners</div>
                  <div className="text-gray-500 text-xs">The signals AI platforms use to evaluate and recommend your business</div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { label: 'Publish pricing or budget ranges openly', note: 'Invisible to cost queries without this. Highest-impact single change.' },
                  { label: 'Build reviews across 4+ platforms', note: 'The Knot, WeddingWire, Google, Yelp, Facebook at minimum.' },
                  { label: 'Create dedicated pages per event type', note: 'Weddings, corporate, nonprofit, social. Specificity beats generality.' },
                  { label: 'Implement LocalBusiness schema markup', note: 'Structured data lets AI read your business info directly.' },
                  { label: 'Optimize and verify your GBP fully', note: 'Photos, hours, services, service area, Q&A section all completed.' },
                  { label: 'Publish FAQ content addressing buyer questions', note: 'Answer the exact questions buyers ask AI tools before calling you.' },
                  { label: 'Ensure consistent NAP across all directories', note: 'Name, address, phone must match exactly. Inconsistency erodes AI trust.' },
                  { label: 'Earn at least one editorial third-party mention', note: 'A local business journal feature outperforms any number of directory listings.' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/5">
                    <div className="w-5 h-5 rounded-full bg-[#F27D24]/20 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-[#F27D24] text-xs font-bold">{i + 1}</span>
                    </div>
                    <div>
                      <div className="text-white text-sm font-medium">{item.label}</div>
                      <div className="text-gray-500 text-xs mt-0.5">{item.note}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Info Callout */}
          <div className="not-prose ae-callout ae-callout-info my-8">
            <div className="ae-callout-icon">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <div className="ae-callout-title">The Compounding Advantage</div>
              <p className="text-gray-300 text-sm leading-relaxed">
                AI authority builds over time. An event planner who starts building their AI visibility signal
                stack today will have a compounding advantage over planners who wait. Each review collected,
                each FAQ published, each editorial mention earned adds a permanent node to the AI authority
                graph for your business. The businesses starting this work now are building moats their competitors
                will spend years trying to close.
              </p>
            </div>
          </div>

          {/* Inline CTA 4 */}
          <div className="not-prose my-10 p-6 rounded-xl bg-gradient-to-r from-[#F27D24]/10 to-transparent border border-[#F27D24]/20 flex flex-col sm:flex-row items-start sm:items-center gap-4 ae-cta-inline">
            <div className="flex-1">
              <p className="text-white font-semibold mb-1">Ready to build AI visibility for your event planning business?</p>
              <p className="text-gray-400 text-sm">Your free Blind Spot Report shows exactly where AI can and cannot find you right now.</p>
            </div>
            <Link href="/blindspot" className="shrink-0 inline-flex items-center gap-2 bg-[#F27D24] text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-[#D96416] transition-colors text-sm">
              Get Your Free Report
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>

          {/* 3-Tier CTA Block */}
          <div className="not-prose ae-cta-block my-16 p-8 rounded-2xl bg-gradient-to-br from-[#F27D24]/10 to-transparent border border-[#F27D24]/20">
            <h3 className="font-plus-jakarta text-2xl font-bold text-white mb-3">Is AI Sending Clients to You or to Your Competition?</h3>
            <p className="text-gray-400 mb-6">
              Most event planners have no idea what ChatGPT, Perplexity, and Google AI say when a client asks for
              a recommendation in their market. Your free Blind Spot Report maps exactly which AI platforms surface
              your business, which queries you appear in, and where your strongest competitors are outranking you.
            </p>
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

          {/* Author Card */}
          <div className="not-prose ae-author-card my-12 p-6 rounded-2xl bg-white/[0.03] border border-white/10 flex items-start gap-5">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#F27D24]/30 to-[#F27D24]/10 flex items-center justify-center shrink-0">
              <svg className="w-7 h-7 text-[#F27D24]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div>
              <div className="text-white font-bold text-lg font-plus-jakarta mb-1">Justin Borges</div>
              <div className="text-[#F27D24] text-sm font-medium mb-3">Answer Engine Optimization Specialists</div>
              <p className="text-gray-400 text-sm leading-relaxed">
                The Answer Engine is an AEO agency focused exclusively on helping businesses appear in AI-generated
                recommendations. Our team researches AI citation patterns, platform-specific ranking signals, and
                third-party authority building to help clients become the businesses AI recommends across ChatGPT,
                Perplexity, Google AI, and beyond.
              </p>
            </div>
          </div>

          {/* FAQ Section */}
          <div id="faq" className="scroll-mt-20 mt-16">
            <div className="not-prose ae-section-label">Common Questions</div>

            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-3 mb-8 font-plus-jakarta">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              {[
                {
                  q: 'How do I find the right event planner for my event type?',
                  a: 'AI platforms recommend event planners based on the specificity of their service pages, the depth of their portfolio, and the breadth of reviews across platforms like The Knot, WeddingWire, Google, and Yelp. When searching, describe your event type precisely: corporate gala, wedding reception, nonprofit fundraiser. AI tools cross-reference your description against planners who have documented experience with that specific event format. Planners who clearly describe which events they specialize in are far more likely to be surfaced than those with generic full-service positioning.',
                },
                {
                  q: "What's included in event planning services and what costs extra?",
                  a: "AI platforms specifically look for transparent scope documentation when evaluating event planners. Core services typically include venue scouting, vendor coordination, day-of logistics, and timeline management. Common add-ons include floral design, audiovisual production, custom decor, transportation coordination, and post-event breakdown. Planners who clearly separate what is included from what carries additional costs are far more likely to be recommended by AI because that clarity answers the question the buyer is actually asking.",
                },
                {
                  q: 'How do event planners and coordinators differ and which do I need?',
                  a: 'An event planner typically handles full-cycle planning from concept through execution, often starting six to eighteen months in advance. An event coordinator or day-of coordinator steps in closer to the event date to manage logistics that are already in place. AI platforms surface this distinction because it is one of the most commonly asked questions in the category. Businesses that clearly explain this difference on their website, with guidance on which option fits different budgets and timelines, signal expertise to AI models and are more likely to be recommended.',
                },
                {
                  q: 'How much should I expect to spend on an event coordinator?',
                  a: "AI platforms consistently recommend businesses that provide pricing transparency. Event coordinator costs vary widely by market, event size, and scope. Day-of coordination typically ranges from $1,000 to $3,500. Full-service wedding planning runs from $3,000 to $10,000 or more in most major markets. Corporate event planning is frequently priced as a percentage of the overall event budget. Planners who publish starting prices or pricing ranges on their websites are significantly more likely to appear in AI-generated recommendations than those who require an inquiry before sharing any cost information.",
                },
                {
                  q: 'Can you help with events on a tight timeline or small budget?',
                  a: 'AI platforms surface this question frequently because budget and timeline constraints are among the most common real-world triggers for event planning searches. Event planners who address these scenarios directly on their website, explaining their minimum lead time, their smallest project scope, and how they approach value-focused events, are better positioned to capture AI recommendations for these searches. Businesses that only describe their premium or full-service offering miss a large segment of AI-driven inquiries.',
                },
                {
                  q: "What's the communication process when working with an event planner?",
                  a: 'AI platforms treat communication process documentation as a trust signal. Buyers want to know how often they will hear from their planner, what tools are used, how decisions are made, and what happens when something changes. Event planners who describe their communication cadence and client experience on their website provide the kind of verifiable, specific information that AI models use to build trust profiles. Vague descriptions do not satisfy the query the way structured process descriptions do.',
                },
                {
                  q: 'What should I prepare before meeting with an event planner?',
                  a: "AI frequently surfaces this question at the top of the event planning research funnel. Useful preparation includes your guest count estimate, the event date or a target date range, a venue shortlist or general preference, a preliminary budget range, and a mood board or visual references if the event has an aesthetic direction. Event planners who publish a what-to-bring guide or intake checklist on their website answer this question in a format AI can directly cite. This type of practical, specific content is a strong AI recommendation signal.",
                },
                {
                  q: 'How do I make sure my event planner stays within budget?',
                  a: 'AI platforms recommend planners who demonstrate budget management competency explicitly. This means describing how they track spend against budget, what their process is when a line item exceeds projection, how they present vendor bids for client approval, and what contractual protections exist around cost overruns. Planners who address budget management as a defined part of their service process are more likely to be recommended for cost-conscious buyers, which represents a significant share of AI-driven event planning searches.',
                },
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/10 transition-colors">
                  <h3 className="text-white font-semibold mb-3 font-plus-jakarta leading-snug">{item.q}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Final CTA with pulse glow */}
          <div className="not-prose ae-final-cta mt-20 relative">
            <div className="absolute inset-0 rounded-2xl bg-[#F27D24]/20 blur-2xl animate-pulse" />
            <div className="relative p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-[#F27D24]/15 via-[#0F1117] to-[#0F1117] border border-[#F27D24]/30 text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F27D24]/10 border border-[#F27D24]/20 mb-6">
                <span className="text-[#F27D24] text-xs font-semibold uppercase tracking-wider">Free AI Visibility Audit</span>
              </div>
              <h2 className="font-plus-jakarta text-2xl sm:text-3xl font-bold text-white mb-4">
                Find Out If AI Is Recommending You or Ignoring You
              </h2>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto leading-relaxed">
                Your Blind Spot Report shows exactly how ChatGPT, Perplexity, and Google AI evaluate your event
                planning business right now. Know your authority footprint. Know your gaps. Build the visibility
                your competitors are not thinking about yet.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/blindspot" className="inline-flex items-center gap-2 bg-[#F27D24] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#D96416] transition-colors shadow-lg shadow-orange-500/20">
                  Get Your Free Blind Spot Report
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
                <a href="tel:+12134442229" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors px-4 py-4">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  (213) 444-2229
                </a>
              </div>
              <p className="text-gray-600 text-xs mt-6">Free. No credit card. Results delivered within 24 hours.</p>
            </div>
          </div>

        </div>
      </main>
    </>
  );
}
