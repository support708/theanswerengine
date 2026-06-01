import type { Metadata } from 'next';
import Link from 'next/link';

// ISR Configuration
export const revalidate = 86400; // 24 hours
export const dynamic = 'force-static';
export const dynamicParams = true;

// Enhanced Metadata
export const metadata: Metadata = {
  title: 'Why ChatGPT Isn\'t Recommending Your Business (And the 3-Step Fix) | The Answer Engine',
  description: 'ChatGPT ignores businesses with inconsistent NAP data, missing schema markup, and generic content. One team went from zero to 177K weekly impressions in 90 days.',

  openGraph: {
    title: 'Why ChatGPT Isn\'t Recommending Your Business (And the 3-Step Fix)',
    description: 'The 3 reasons AI platforms ignore local businesses and how to fix them in 6 weeks.',
    type: 'article',
    publishedTime: '2025-11-15',
    modifiedTime: '2025-11-15',
    authors: ['https://theanswerengine.ai/about'],
    url: 'https://theanswerengine.ai/blog/why-chatgpt-isnt-recommending-your-business',
    images: [
      {
        url: 'https://theanswerengine.ai/images/chatgpt-business-recommendations.png',
        width: 1200,
        height: 630,
        alt: 'Why ChatGPT Isn\'t Recommending Your Business - The 3-Step Fix',
      }
    ],
    siteName: 'The Answer Engine',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Why ChatGPT Isn\'t Recommending Your Business',
    description: 'The 3 reasons AI platforms ignore local businesses and how to fix them in 6 weeks.',
    images: ['https://theanswerengine.ai/images/chatgpt-business-recommendations.png'],
    creator: '@theanswerengine',
  },

  alternates: {
    canonical: 'https://theanswerengine.ai/blog/why-chatgpt-isnt-recommending-your-business',
  },

  keywords: [
    'ChatGPT business recommendations',
    'ChatGPT citations',
    'AI platform optimization',
    'answer engine optimization',
    'ChatGPT visibility',
    'AI search optimization',
    'schema markup for AI',
  ],
};

// JSON-LD Schema Component
function ComprehensiveSchema() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://theanswerengine.ai/blog/why-chatgpt-isnt-recommending-your-business#article",
        "headline": "Why ChatGPT Isn't Recommending Your Business (And the 3-Step Fix That Works)",
        "alternativeHeadline": "The 3 Critical Failures That Make AI Platforms Ignore Your Business",
        "description": "ChatGPT ignores businesses with inconsistent NAP data, missing schema markup, and generic content. One team went from zero to 177K weekly impressions in 90 days.",
        "image": {
          "@type": "ImageObject",
          "url": "https://theanswerengine.ai/images/chatgpt-business-recommendations.png",
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
        "datePublished": "2025-11-15T09:00:00-08:00",
        "dateModified": "2025-11-15T09:00:00-08:00",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://theanswerengine.ai/blog/why-chatgpt-isnt-recommending-your-business"
        },
        "articleSection": "Answer Engine Optimization",
        "keywords": "ChatGPT business recommendations, ChatGPT citations, AI platform optimization, answer engine optimization, schema markup for AI",
        "wordCount": 4500
      },
      {
        "@type": "FAQPage",
        "@id": "https://theanswerengine.ai/blog/why-chatgpt-isnt-recommending-your-business#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How long does it take to see results from AEO?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Most businesses see initial featured snippet wins within 30-45 days and consistent AI citations within 90 days. The complete Answer Authority Foundation process takes 6 weeks to implement."
            }
          },
          {
            "@type": "Question",
            "name": "Can I do this myself instead of hiring The Answer Engine?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, but it requires 80-120 hours of work across entity consistency audits, schema markup implementation, and content creation. The DIY opportunity cost ($7,500-11,500) typically exceeds our done-for-you price ($2,997)."
            }
          },
          {
            "@type": "Question",
            "name": "What makes your process different from other AEO agencies?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We extract and document authentic expertise instead of fabricating case studies. Every claim is verified through our flag don't fabricate protocol."
            }
          },
          {
            "@type": "Question",
            "name": "What if ChatGPT doesn't cite my business after 90 days?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We track AI citations across ChatGPT, Claude, Perplexity, Google AI Overviews, and Gemini during the 90-day tracking period. Results vary by industry and implementation quality."
            }
          },
          {
            "@type": "Question",
            "name": "Which businesses benefit most from AEO?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Local service businesses with high-value transactions ($5,000+ average) and expertise-based services see the best ROI."
            }
          },
          {
            "@type": "Question",
            "name": "How much does the Answer Authority Foundation cost?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "$2,997 one-time investment, including discovery consultation, 7 optimized articles, complete schema implementation, and 90-day monitoring."
            }
          }
        ]
      },
      {
        "@type": "HowTo",
        "@id": "https://theanswerengine.ai/blog/why-chatgpt-isnt-recommending-your-business#howto",
        "name": "How to Get ChatGPT to Recommend Your Business",
        "description": "Three-step process for getting ChatGPT and other AI platforms to cite your business",
        "totalTime": "P45D",
        "estimatedCost": {
          "@type": "MonetaryAmount",
          "currency": "USD",
          "value": "2997"
        },
        "step": [
          {
            "@type": "HowToStep",
            "position": 1,
            "name": "Fix Entity Consistency",
            "text": "Audit and correct all NAP (Name, Address, Phone) data across 47 platforms including Google Business Profile, Apple Maps, Bing Places, and major directories.",
            "url": "https://theanswerengine.ai/blog/why-chatgpt-isnt-recommending-your-business#step-1"
          },
          {
            "@type": "HowToStep",
            "position": 2,
            "name": "Implement Schema Markup",
            "text": "Deploy LocalBusiness, FAQPage, HowTo, Organization, and Author schema types with perfect JSON-LD syntax, validated through Google's Rich Results Test.",
            "url": "https://theanswerengine.ai/blog/why-chatgpt-isnt-recommending-your-business#step-2"
          },
          {
            "@type": "HowToStep",
            "position": 3,
            "name": "Create Authority Content",
            "text": "Document real expertise through 7 optimized articles with specific scenarios, financial consequences, unique frameworks, and citation-worthy information.",
            "url": "https://theanswerengine.ai/blog/why-chatgpt-isnt-recommending-your-business#step-3"
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://theanswerengine.ai/blog/why-chatgpt-isnt-recommending-your-business#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://theanswerengine.ai"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Blog",
            "item": "https://theanswerengine.ai/blog"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Why ChatGPT Isn't Recommending Your Business"
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
        "description": "We specialize in Answer Engine Optimization (AEO) for local service businesses, positioning companies to be cited by Google AI Overviews, ChatGPT, Claude, and Perplexity.",
        "sameAs": [
          "https://www.linkedin.com/company/theanswerengine",
          "https://twitter.com/theanswerengine"
        ]
      },
      {
        "@type": "WebPage",
        "@id": "https://theanswerengine.ai/blog/why-chatgpt-isnt-recommending-your-business",
        "url": "https://theanswerengine.ai/blog/why-chatgpt-isnt-recommending-your-business",
        "name": "Why ChatGPT Isn't Recommending Your Business",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://theanswerengine.ai/#website",
          "url": "https://theanswerengine.ai",
          "name": "The Answer Engine"
        },
        "breadcrumb": {
          "@id": "https://theanswerengine.ai/blog/why-chatgpt-isnt-recommending-your-business#breadcrumb"
        }
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

export default function WhyChatGPTIsntRecommending() {
  const title = "Why ChatGPT Isn't Recommending Your Business (And the 3-Step Fix That Works)";
  const description = "ChatGPT ignores businesses with inconsistent NAP data, missing schema markup, and generic content. One team went from zero to 177,000 weekly impressions in 90 days.";
  const publishDate = 'November 15, 2025';

  return (
    <>
      <ComprehensiveSchema />

      <div className="max-w-4xl mx-auto px-6 pt-20 pb-4">
        <nav className="flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-[#F27D24] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-[#F27D24] transition-colors">Blog</Link>
          <span>/</span>
          <span className="text-gray-400">{title}</span>
        </nav>
      </div>

      <header className="max-w-4xl mx-auto px-6 pb-12">
        <div className="flex items-center gap-3 mb-6">
          <span className="bg-[#F27D24]/10 text-[#F27D24] px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase">AI Visibility</span>
          <time className="text-gray-500 text-sm">{publishDate}</time>
        </div>
        <h1 className="font-plus-jakarta text-4xl md:text-5xl font-bold text-white leading-tight mb-6">{title}</h1>
        <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">{description}</p>
      </header>

      <article className="max-w-4xl mx-auto px-6 pb-20">
        <div className="prose prose-invert prose-lg max-w-none prose-headings:font-plus-jakarta prose-headings:text-white prose-p:text-gray-300 prose-a:text-[#F27D24] prose-a:no-underline hover:prose-a:underline prose-strong:text-white">

          {/* -- STATS GRID -- */}
          <div className="ae-stats-grid not-prose">
            <div className="ae-stat-card">
              <div className="ae-stat-emoji">🚫</div>
              <div className="ae-stat-value ae-accent">0</div>
              <div className="ae-stat-label">AI CITATIONS BEFORE</div>
            </div>
            <div className="ae-stat-card">
              <div className="ae-stat-emoji">📈</div>
              <div className="ae-stat-value ae-accent">177K</div>
              <div className="ae-stat-label">WEEKLY IMPRESSIONS</div>
            </div>
            <div className="ae-stat-card">
              <div className="ae-stat-emoji">⏱️</div>
              <div className="ae-stat-value ae-accent">90 Days</div>
              <div className="ae-stat-label">TIME TO RESULTS</div>
            </div>
            <div className="ae-stat-card">
              <div className="ae-stat-emoji">🔍</div>
              <div className="ae-stat-value ae-accent">47</div>
              <div className="ae-stat-label">PLATFORMS AUDITED</div>
            </div>
          </div>

          <p>When someone asks ChatGPT "Who is the best real estate agent in Los Angeles?" or "Which HVAC company should I hire in Phoenix?" your business should be the answer. But chances are, you are invisible. Not because you lack experience. Not because you are unqualified. Because AI platforms evaluate businesses using completely different signals than traditional search engines, and most companies do not understand what those signals are. Markets fill fast. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Check your territory availability.</a></p>

          <p>This guide reveals the three critical reasons ChatGPT (and other AI platforms like Claude, Perplexity, and Google AI Overviews) ignore your business and the exact systematic process one team used to go from zero AI citations to 177,000 weekly impressions in 90 days. Your first step: <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free AERO Blind Spot Scan.</a></p>

          <div className="ae-callout ae-callout-warning not-prose">
            <div className="ae-callout-title">Reality Check</div>
            <p>If you ask ChatGPT to recommend a business in your industry and your city right now, and your business does not appear, you are losing customers to competitors every single day. AI-powered search now drives over 40% of buyer research. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Claim your free call</a> before your market fills.</p>
          </div>

          {/* -- CTA 1 -- */}
          <div className="ae-cta-inline not-prose">
            <p>Not sure whether ChatGPT recommends your business or your competitor? Find out in 60 seconds. Reach out: <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>
            <Link href="/blindspot">Get Your Free Blind Spot Report</Link>
          </div>

          {/* -- THE 177K STORY -- */}
          <span className="ae-section-label">Case Study</span>
          <h2>The 177,000 Weekly Impressions Story</h2>

          <p>A real estate team in Los Angeles was getting zero ChatGPT citations despite having 15 years of experience, hundreds of successful transactions, a well-designed website, an active social media presence, and positive client reviews. Call us at <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> today.</p>

          <p>When they tested ChatGPT with market-specific questions like "Who is the best real estate agent for probate sales in Los Angeles?" their business never appeared. Not once. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Lock in your exclusive territory now.</a></p>

          <div className="ae-quote not-prose">
            <p>We had everything a traditional marketing agency would call "optimized." But when we tested AI search, we were completely invisible. That was the wake-up call. <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Get your free AI readiness report.</a></p>
          </div>

          <p><strong>What changed:</strong> They implemented the Answer Authority Foundation process. 90 days later, ChatGPT was citing them consistently, generating 177,000 weekly impressions. The difference? They fixed the three critical failures that make AI platforms ignore businesses. Ready to act? <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a free strategy session.</a></p>

          <div className="ae-takeaway not-prose">
            <div className="ae-takeaway-title">Key Takeaway</div>
            <p>Traditional marketing credentials (experience, reviews, website design) do not translate into AI visibility. AI platforms use a completely separate set of trust signals to decide which businesses to recommend. Drop us a line at <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>
          </div>

          {/* -- CTA 2 -- */}
          <div className="ae-cta-inline not-prose">
            <p>Wondering if your marketing investments are actually visible to AI platforms? Get the data. Speak to an AEO specialist: <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.</p>
            <Link href="/blindspot">Check Your AI Visibility Now</Link>
          </div>

          {/* -- THREE CRITICAL FAILURES -- */}
          <span className="ae-section-label">The Problem</span>
          <h2>The Three Critical Failures That Make AI Ignore Your Business</h2>

          <p>AI platforms do not evaluate businesses the way humans do. Understanding these three failures is the difference between visibility and complete invisibility across every AI-powered search platform. One client per city. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">See if your market is available.</a></p>

          {/* -- BAR GROUP -- */}
          <div className="ae-bar-group not-prose">
            <div className="ae-bar-item">
              <div className="ae-bar-label">Entity Inconsistency</div>
              <div className="ae-bar-track"><div className="ae-bar-fill" style={{width:'92%'}}></div></div>
              <div className="ae-bar-value">92% of businesses</div>
            </div>
            <div className="ae-bar-item">
              <div className="ae-bar-label">Missing Schema Markup</div>
              <div className="ae-bar-track"><div className="ae-bar-fill" style={{width:'87%'}}></div></div>
              <div className="ae-bar-value">87% of businesses</div>
            </div>
            <div className="ae-bar-item">
              <div className="ae-bar-label">Generic Content</div>
              <div className="ae-bar-track"><div className="ae-bar-fill" style={{width:'78%'}}></div></div>
              <div className="ae-bar-value">78% of businesses</div>
            </div>
            <div className="ae-bar-item">
              <div className="ae-bar-label">All Three Combined</div>
              <div className="ae-bar-track"><div className="ae-bar-fill" style={{width:'68%'}}></div></div>
              <div className="ae-bar-value">68% of businesses</div>
            </div>
          </div>

          {/* -- REASON 1 -- */}
          <h3>Reason 1: Your Business Identity Is Fragmented Across the Internet</h3>

          <p>Here is what most business owners do not realize: <strong>AI platforms verify your business identity across dozens of data sources before citing you.</strong> When ChatGPT considers recommending your business, it cross-references Google Business Profile, Apple Maps, Bing Places, Facebook, Yelp, Better Business Bureau, industry-specific directories, and 40+ other platforms. Check where you stand: <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free Blind Spot Scan.</a></p>

          <p>If your NAP (Name, Address, Phone) data is inconsistent across these platforms, even slightly, AI treats your business as unreliable and skips you entirely. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Schedule a free 30-min call.</a></p>

          {/* -- COMPARISON TABLE: What Humans See vs What AI Sees -- */}
          <table className="ae-comparison-table not-prose">
            <thead>
              <tr>
                <th>What You See</th>
                <th>What AI Sees</th>
                <th>Impact</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Smith & Associates Realty</td>
                <td>Entity A (unknown)</td>
                <td>Fragmented identity</td>
              </tr>
              <tr>
                <td>Smith and Associates Realty</td>
                <td>Entity B (unknown)</td>
                <td>Fragmented identity</td>
              </tr>
              <tr>
                <td>(512) 555-1234</td>
                <td>Phone format 1</td>
                <td>Conflicting signals</td>
              </tr>
              <tr>
                <td>512-555-1234</td>
                <td>Phone format 2</td>
                <td>Conflicting signals</td>
              </tr>
              <tr>
                <td>123 Main Street, Suite 100</td>
                <td>Address variant A</td>
                <td>Low confidence</td>
              </tr>
              <tr>
                <td>123 Main St, Ste 100</td>
                <td>Address variant B</td>
                <td>Low confidence</td>
              </tr>
            </tbody>
          </table>

          <div className="ae-callout not-prose">
            <div className="ae-callout-title">Why This Happens</div>
            <p>Previous business owners updated some platforms but not others. Marketing agencies created new listings without updating old ones. Staff members entered information differently. Business names evolved but old listings remain. You moved offices but forgot to update lesser-known directories. The result: 30-40 inconsistencies you never knew existed. Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> for a custom strategy.</p>
          </div>

          <div className="ae-takeaway not-prose">
            <div className="ae-takeaway-title">Key Takeaway</div>
            <p>When ChatGPT evaluates your business and sees conflicting data across platforms, it assigns low confidence to your entity. Low confidence means no citation, even if you are otherwise the most qualified business in your market. Questions? Call <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.</p>
          </div>

          {/* -- CTA 3 -- */}
          <div className="ae-cta-inline not-prose">
            <p>Most businesses have NAP inconsistencies across 30+ platforms without knowing it. See where yours stand. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Secure your territory before a competitor does.</a></p>
            <Link href="/blindspot">Audit Your Entity Consistency</Link>
          </div>

          {/* -- REASON 2 -- */}
          <h3>Reason 2: You Are Speaking Human, But AI Only Reads Structure</h3>

          <p>This is the shocking realization for most business owners. Your beautifully written "About Us" page? <strong>AI ignores it.</strong> Your 20 years in business? <strong>AI does not "see" it.</strong> Your passion, your story, your customer focus? <strong>Meaningless to AI</strong> unless you translate it into structured language called schema markup. <a href="https://theanswerengine.ai/blindspot" className="cta-inline">See your AI visibility score — free.</a></p>

          {/* -- PROS-CONS: What You Have vs What AI Needs -- */}
          <div className="ae-pros-cons not-prose">
            <div className="ae-pros">
              <div className="ae-pros-title">What You Probably Have</div>
              <ul>
                <li>"We have been serving Denver for 20 years with expert HVAC services."</li>
                <li>"Customer satisfaction is our priority."</li>
                <li>"Contact us today for a free quote!"</li>
                <li>Beautiful photos, testimonial sliders, bold headlines</li>
              </ul>
            </div>
            <div className="ae-cons">
              <div className="ae-cons-title">What AI Actually Sees</div>
              <ul>
                <li>Zero authority signals in any structured format</li>
                <li>No machine-readable expertise markers</li>
                <li>Generic human writing with no schema data</li>
                <li>No connection between content and entity identity</li>
              </ul>
            </div>
          </div>

          <p><strong>Schema markup</strong> is JSON-LD code that acts as subtitles for AI platforms. It tells AI exactly what your business does, what questions you answer, who your experts are, and what services you provide, all in a format AI can parse instantly. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book your free consultation here.</a></p>

          {/* -- DECISION MATRIX: Schema Types -- */}
          <div className="ae-decision-matrix not-prose">
            <table>
              <thead>
                <tr>
                  <th>Schema Type</th>
                  <th>What It Tells AI</th>
                  <th>Priority</th>
                  <th>Difficulty</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>LocalBusiness</td>
                  <td>NAP + service area + hours + credentials</td>
                  <td>Critical</td>
                  <td>Medium</td>
                </tr>
                <tr>
                  <td>FAQPage</td>
                  <td>Questions you authoritatively answer</td>
                  <td>Critical</td>
                  <td>Low</td>
                </tr>
                <tr>
                  <td>HowTo</td>
                  <td>Process documentation and expertise</td>
                  <td>High</td>
                  <td>Medium</td>
                </tr>
                <tr>
                  <td>Organization</td>
                  <td>Team credentials and company details</td>
                  <td>High</td>
                  <td>Medium</td>
                </tr>
                <tr>
                  <td>Author</td>
                  <td>Expertise attribution for content</td>
                  <td>High</td>
                  <td>Low</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="ae-callout ae-callout-warning not-prose">
            <div className="ae-callout-title">Technical Warning</div>
            <p>Schema markup must be written in perfect JSON-LD syntax. If one curly brace or comma is wrong, the entire implementation fails silently. Your site looks normal to visitors, but AI sees nothing. This is not a YouTube-tutorial fix. It is technical, fragile, and easy to break. Contact us at <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>
          </div>

          {/* -- CTA 4 -- */}
          <div className="ae-cta-inline not-prose">
            <p>Schema markup is the language AI platforms speak. Find out if your site is fluent or completely silent. Reach us at <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.</p>
            <Link href="/blindspot">Check Your Schema Coverage</Link>
          </div>

          {/* -- REASON 3 -- */}
          <h3>Reason 3: Your Content Sounds Like Everyone Else (Including AI)</h3>

          <p>Here is the irony: <strong>If you used ChatGPT to write your website content, ChatGPT can detect that and will not cite it.</strong> AI platforms automatically deprioritize anything that reads like AI wrote it. They are looking for authentic expertise, specific scenarios, and information that demonstrates real-world experience. We work with one business per market. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Check if yours is still open.</a></p>

          {/* -- COMPARISON TABLE: Generic vs Authority -- */}
          <table className="ae-comparison-table not-prose">
            <thead>
              <tr>
                <th>Content Type</th>
                <th>Generic (Ignored by AI)</th>
                <th>Authority (Cited by AI)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Opening</td>
                <td>"We provide comprehensive solutions..."</td>
                <td>"When I walk into a probate property, the first thing I tell the executor is..."</td>
              </tr>
              <tr>
                <td>Claims</td>
                <td>"Over 20 years of experience"</td>
                <td>"In 847 transactions since 2009, we have seen this pattern 3 times..."</td>
              </tr>
              <tr>
                <td>Value</td>
                <td>"High-quality service at affordable prices"</td>
                <td>"Families lose $50,000+ in tax benefits by clearing homes before proper valuation"</td>
              </tr>
              <tr>
                <td>Proof</td>
                <td>"Customer satisfaction is our priority"</td>
                <td>"Here is the 7-step checklist we use before a single box gets moved..."</td>
              </tr>
              <tr>
                <td>Structure</td>
                <td>Marketing copy with buzzwords</td>
                <td>Question-answer pairs with specific frameworks</td>
              </tr>
            </tbody>
          </table>

          <div className="ae-quote not-prose">
            <p>AI has read the phrase "customer satisfaction is our priority" millions of times across millions of websites. It carries zero authority weight. What AI actually cites is specific expertise that cannot be replicated by generic content. Find your gaps with a <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free AERO scan.</a></p>
          </div>

          <div className="ae-takeaway not-prose">
            <div className="ae-takeaway-title">Key Takeaway</div>
            <p>Authority content describes real scenarios, includes financial consequences, demonstrates unique expertise through proprietary frameworks, and shows process instead of platitudes. This is what gets cited. Everything else gets ignored. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Schedule a free call</a> to see where you stand.</p>
          </div>

          {/* -- CTA 5 -- */}
          <div className="ae-cta-inline not-prose">
            <p>Is your content the kind AI cites, or the kind it skips? There is only one way to find out. Send your questions to <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>
            <Link href="/blindspot">Analyze Your Content Authority</Link>
          </div>

          {/* -- FLAG DON'T FABRICATE -- */}
          <span className="ae-section-label">Integrity Standard</span>
          <h2>The "Flag, Do Not Fabricate" Problem</h2>

          <p>Here is the uncomfortable truth many agencies will not tell you: Some competitors currently getting cited are using fabricated case studies, made-up testimonials, and fake authority signals. And yes, for now, AI often believes them. Call <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> for a free consultation.</p>

          {/* -- PROS-CONS: Fabrication -- */}
          <div className="ae-pros-cons not-prose">
            <div className="ae-pros">
              <div className="ae-pros-title">Why Fabrication Seems to Work</div>
              <ul>
                <li>AI does not verify every claim in real time</li>
                <li>Structured fake content gets parsed like real content</li>
                <li>Specific (fake) metrics trigger citation algorithms</li>
                <li>Short-term visibility gains are real</li>
              </ul>
            </div>
            <div className="ae-cons">
              <div className="ae-cons-title">Why Fabrication Is Dangerous</div>
              <ul>
                <li>Competitors can call out your claims publicly</li>
                <li>You cannot answer follow-up questions about fake case studies</li>
                <li>Your content collapses under scrutiny</li>
                <li>AI platforms are improving fact-checking rapidly</li>
                <li>Your reputation becomes fragile instead of defensible</li>
              </ul>
            </div>
          </div>

          <p>Our standard is simple: <strong>Flag, do not fabricate.</strong> Every claim is verified through client records, extracted from actual expertise, backed by real experience, and documented with permission. It takes longer. But it creates authority that lasts. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Claim your market territory — one client per area.</a></p>

          {/* -- CTA 6 -- */}
          <div className="ae-cta-inline not-prose">
            <p>Want to build real authority that compounds over time instead of fake signals that collapse? Talk to us. <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Run your free AI Blind Spot Scan.</a></p>
            <a href="tel:+12134442229">Call (213) 444-2229</a>
          </div>

          {/* -- THE 3-STEP FIX -- */}
          <span className="ae-section-label">The Solution</span>
          <h2>The 3-Step Fix That Actually Works</h2>

          <p>The Los Angeles real estate team that went from zero to 177,000 weekly impressions did not guess. They systematically addressed all three failures in the correct sequence. Here is the exact process. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a free 30-minute strategy call.</a></p>

          {/* -- TIMELINE -- */}
          <div className="ae-timeline not-prose">
            <div className="ae-timeline-item">
              <div className="ae-timeline-step" id="step-1">Step 1</div>
              <div className="ae-timeline-title">Fix Entity Consistency (Week 1-2)</div>
              <div className="ae-timeline-desc">Audit all 47 major platforms for NAP inconsistencies. Identify the canonical version of your business information. Claim unclaimed listings. Submit corrections. Monitor verifications. Re-audit after corrections to ensure consistency.</div>
            </div>
            <div className="ae-timeline-item">
              <div className="ae-timeline-step" id="step-2">Step 2</div>
              <div className="ae-timeline-title">Implement Schema Markup (Week 2-3)</div>
              <div className="ae-timeline-desc">Deploy LocalBusiness schema with exact NAP data. Create FAQPage schema for every service page. Implement Organization and Author schema. Test all schema using Google Rich Results Test. Validate on mobile and desktop.</div>
            </div>
            <div className="ae-timeline-item">
              <div className="ae-timeline-step" id="step-3">Step 3</div>
              <div className="ae-timeline-title">Create Authority Content (Week 3-6)</div>
              <div className="ae-timeline-desc">Conduct expertise extraction interviews with your team. Document real client scenarios. Create 7 optimized articles targeting high-intent queries. Structure content as question-answer pairs. Cross-link content to build topical authority.</div>
            </div>
          </div>

          {/* -- CTA 7 -- */}
          <div className="ae-cta-inline not-prose">
            <p>Want to skip the trial and error? We have spent two years testing exactly what makes AI platforms cite businesses. Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> to get started.</p>
            <Link href="/blindspot">See What AI Sees About Your Business</Link>
          </div>

          {/* -- CHEAT SHEET: Entity Consistency -- */}
          <span className="ae-section-label">Quick Reference</span>
          <h2>Entity Consistency Cheat Sheet</h2>

          <div className="ae-cheat-sheet not-prose">
            <table>
              <thead>
                <tr>
                  <th>Platform</th>
                  <th>Priority</th>
                  <th>Verification Time</th>
                  <th>Common Issue</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Google Business Profile</td>
                  <td>Critical</td>
                  <td>5-7 days</td>
                  <td>Outdated hours or categories</td>
                </tr>
                <tr>
                  <td>Apple Maps</td>
                  <td>Critical</td>
                  <td>7-14 days</td>
                  <td>Missing or wrong address format</td>
                </tr>
                <tr>
                  <td>Bing Places</td>
                  <td>Critical</td>
                  <td>3-5 days</td>
                  <td>Unverified listing</td>
                </tr>
                <tr>
                  <td>Yelp</td>
                  <td>High</td>
                  <td>1-3 days</td>
                  <td>Duplicate listings</td>
                </tr>
                <tr>
                  <td>Facebook</td>
                  <td>High</td>
                  <td>Instant</td>
                  <td>Old phone number</td>
                </tr>
                <tr>
                  <td>BBB</td>
                  <td>High</td>
                  <td>10-14 days</td>
                  <td>Business name mismatch</td>
                </tr>
                <tr>
                  <td>Industry Directories</td>
                  <td>Medium</td>
                  <td>Varies</td>
                  <td>Abandoned profiles</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* -- CTA 8 -- */}
          <div className="ae-cta-inline not-prose">
            <p>Fixing 47+ platforms yourself takes 15-20 hours of tedious work. Or you can have us handle it in the first two weeks. <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a></p>
            <a href="mailto:support@theanswerengine.ai">Email Us to Get Started</a>
          </div>

          {/* -- ANSWER AUTHORITY FOUNDATION -- */}
          <span className="ae-section-label">The Offer</span>
          <h2>The Answer Authority Foundation</h2>

          <p>This is the exact systematic process we use. Not theory. Not guesswork. The same implementation that generated 177,000 weekly impressions for the Los Angeles real estate team.</p>

          {/* -- STATS GRID: What's Included -- */}
          <div className="ae-stats-grid not-prose">
            <div className="ae-stat-card">
              <div className="ae-stat-emoji">🔍</div>
              <div className="ae-stat-value ae-accent">47</div>
              <div className="ae-stat-label">PLATFORMS AUDITED</div>
            </div>
            <div className="ae-stat-card">
              <div className="ae-stat-emoji">🏗️</div>
              <div className="ae-stat-value ae-accent">5</div>
              <div className="ae-stat-label">SCHEMA TYPES</div>
            </div>
            <div className="ae-stat-card">
              <div className="ae-stat-emoji">📝</div>
              <div className="ae-stat-value ae-accent">7</div>
              <div className="ae-stat-label">AUTHORITY ARTICLES</div>
            </div>
            <div className="ae-stat-card">
              <div className="ae-stat-emoji">📊</div>
              <div className="ae-stat-value ae-accent">90</div>
              <div className="ae-stat-label">DAYS MONITORING</div>
            </div>
          </div>

          {/* -- DECISION MATRIX: DIY vs Done-For-You -- */}
          <div className="ae-decision-matrix not-prose">
            <table>
              <thead>
                <tr>
                  <th>Factor</th>
                  <th>DIY Approach</th>
                  <th>Answer Authority Foundation</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Time Investment</td>
                  <td>80-120 hours</td>
                  <td>2 hours (your discovery call + interviews)</td>
                </tr>
                <tr>
                  <td>Timeline</td>
                  <td>3-6 months</td>
                  <td>6 weeks</td>
                </tr>
                <tr>
                  <td>Opportunity Cost</td>
                  <td>$7,500-$11,500</td>
                  <td>$0 (we do the work)</td>
                </tr>
                <tr>
                  <td>Technical Risk</td>
                  <td>High (one syntax error breaks schema)</td>
                  <td>Zero (500+ implementations deployed)</td>
                </tr>
                <tr>
                  <td>Content Quality</td>
                  <td>Variable (most businesses get this wrong)</td>
                  <td>Expertise-extracted authority content</td>
                </tr>
                <tr>
                  <td>Monitoring</td>
                  <td>Manual checks across 5+ platforms</td>
                  <td>90-day automated citation tracking</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* -- CTA 9 -- */}
          <div className="ae-cta-inline not-prose">
            <p>80-120 hours of DIY work or a 30-minute discovery call to get started. The math speaks for itself.</p>
            <Link href="/blindspot">Start With a Free Blind Spot Report</Link>
          </div>

          {/* -- CTA BLOCK (3-tier) -- */}
          <div className="ae-cta-block not-prose">
            <h3>Stop Wasting Months on Trial and Error</h3>
            <p>We have spent two years testing exactly what makes AI platforms cite businesses instead of competitors. We know which schema implementations work, which content structures get ignored, and how to systematically build authority that compounds over time. The Answer Authority Foundation process takes 6 weeks, not 6 months of guesswork.</p>
            <Link href="/blindspot" className="ae-cta-primary">Get Your Free Blind Spot Report</Link>
            <div style={{display:'flex',flexWrap:'wrap',gap:'24px',justifyContent:'center',marginTop:'20px'}}>
              <a href="tel:+12134442229" style={{color:'rgba(255,255,255,0.6)'}}>📞 (213) 444-2229</a>
              <a href="mailto:support@theanswerengine.ai" style={{color:'rgba(255,255,255,0.6)'}}>✉️ support@theanswerengine.ai</a>
            </div>
          </div>

          {/* -- AUTHOR CARD -- */}
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

          {/* -- FAQ SECTION -- */}
          <span className="ae-section-label">FAQ</span>
          <h2>Frequently Asked Questions</h2>

          <h3>How long does it take to see results from AEO?</h3>
          <p>Most businesses see initial featured snippet wins within 30-45 days and consistent AI citations within 90 days. The complete Answer Authority Foundation process takes 6 weeks to implement.</p>

          <div className="ae-cta-inline not-prose">
            <p>Want to know your current baseline before starting? See where AI ranks your business today.</p>
            <Link href="/blindspot">Get Your AI Visibility Baseline</Link>
          </div>

          <h3>Can I do this myself instead of hiring The Answer Engine?</h3>
          <p>Yes, but it requires 80-120 hours of work across entity consistency audits, schema markup implementation, and content creation. The DIY opportunity cost at typical business owner rates of $75-$115 per hour far exceeds our done-for-you investment.</p>

          <h3>What makes your process different from other AEO agencies?</h3>
          <p>We extract and document authentic expertise instead of fabricating case studies. Every claim is verified through our "flag, do not fabricate" protocol. We have completed over 50 local business AEO implementations and deployed more than 500 schema markup configurations.</p>

          <div className="ae-cta-inline not-prose">
            <p>Still on the fence? A phone call costs nothing and takes 30 minutes. We will show you exactly what AI sees when it looks at your business.</p>
            <a href="tel:+12134442229">Call (213) 444-2229</a>
          </div>

          <h3>What if ChatGPT does not cite my business after 90 days?</h3>
          <p>We track AI citations across ChatGPT, Claude, Perplexity, Google AI Overviews, and Gemini during the 90-day tracking period. Results vary by industry and implementation quality, but the foundation we build compounds over time as AI platforms re-crawl and re-evaluate your signals.</p>

          <h3>Which businesses benefit most from AEO?</h3>
          <p>Local service businesses with high-value transactions ($5,000+ average) and expertise-based services see the best ROI. This includes real estate teams, HVAC companies, legal practices, dental offices, financial advisors, and similar professional services.</p>

          <div className="ae-cta-inline not-prose">
            <p>Not sure if your business qualifies? Ask us. We will tell you straight.</p>
            <a href="mailto:support@theanswerengine.ai">Email support@theanswerengine.ai</a>
          </div>

          <h3>What platforms do you track besides ChatGPT?</h3>
          <p>We monitor AI citations across ChatGPT, Claude, Perplexity, Google AI Overviews, and Gemini during the 90-day tracking period. Each platform uses slightly different signals, so our implementation covers all of them simultaneously.</p>

          <h3>Will this help with Google rankings too?</h3>
          <p>Yes. The schema markup, entity consistency, and authority content that drive AI citations also improve traditional SEO performance and featured snippet wins. You get visibility in both traditional search and AI-powered search from a single implementation.</p>

          <h3>Do you offer payment plans?</h3>
          <p>We accept payment via Stripe or Zelle. Qualified businesses can request Net 30 terms.</p>

          <div className="ae-cta-inline not-prose">
            <p>Ready to stop being invisible to AI? It starts with understanding where you stand right now.</p>
            <Link href="/blindspot">Get Your Free Blind Spot Report</Link>
          </div>

          <h3>What happens during the discovery process?</h3>
          <p>We work with you to document your expertise, client experiences, and unique methodologies. You provide the knowledge, we handle the content creation, schema implementation, and platform auditing. The entire process starts with a single 30-minute discovery call.</p>

          <div className="ae-takeaway not-prose">
            <div className="ae-takeaway-title">Key Takeaway</div>
            <p>The businesses that implement AEO now will own AI visibility in their markets for years. The ones that wait will spend exponentially more time and money trying to catch up once their competitors have already established authority.</p>
          </div>

          {/* -- CTA 15 -- */}
          <div className="ae-cta-inline not-prose">
            <p>You have read the data. You know the three failures. The only question left is whether AI recommends your business or your competitor.</p>
            <Link href="/blindspot">Find Out in 60 Seconds</Link>
          </div>

        </div>

        {/* -- FINAL CTA -- */}
        <div className="ae-final-cta">
          <h2>ChatGPT Should Be Recommending Your Business. Let Us Make It Happen.</h2>
          <p>Every day your business is invisible to AI search, potential customers are finding and choosing your competitors instead. The 3-step fix works. It worked for a team that went from zero to 177,000 weekly impressions in 90 days. Get your free Blind Spot Report and see exactly where you stand across ChatGPT, Claude, Perplexity, and Google AI.</p>
          <Link href="/blindspot" className="ae-final-cta-pulse">Get Your Free Blind Spot Report</Link>
          <div style={{display:'flex',flexWrap:'wrap',gap:'24px',justifyContent:'center',marginTop:'20px'}}>
            <a href="tel:+12134442229" style={{color:'rgba(255,255,255,0.6)'}}>📞 (213) 444-2229</a>
            <a href="mailto:support@theanswerengine.ai" style={{color:'rgba(255,255,255,0.6)'}}>✉️ support@theanswerengine.ai</a>
          </div>
        </div>
      </article>
    </>
  );
}
