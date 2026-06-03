import type { Metadata } from 'next';
import Link from 'next/link';

// ISR Configuration
export const dynamicParams = true;

// Enhanced Metadata
export const metadata: Metadata = {
  title: 'Why Your Google Rankings Don\'t Matter Anymore | The Answer Engine',
  description: 'Google AI Overviews, ChatGPT, Claude, and Perplexity are answering questions directly. Learn why even #1 rankings get 0 clicks and how to get cited by AI instead.',

  openGraph: {
    title: 'The Real Reason Your Google Rankings Don\'t Matter Anymore',
    description: 'Google AI Overviews, ChatGPT, Claude answer questions directly. Even #1 rankings get 0 clicks. Here\'s how to get cited instead.',
    type: 'article',
    publishedTime: '2025-11-09',
    modifiedTime: '2025-11-09',
    authors: ['https://theanswerengine.ai/about'],
    url: 'https://theanswerengine.ai/blog/google-rankings-dont-matter',
    images: [
      {
        url: 'https://theanswerengine.ai/images/google-rankings-featured.png',
        width: 1200,
        height: 630,
        alt: 'Why Google Rankings Don\'t Matter Anymore in 2025',
      }
    ],
    siteName: 'The Answer Engine',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Why Your Google Rankings Don\'t Matter Anymore',
    description: 'Even #1 rankings get 0 clicks now. Here\'s how to get cited by AI instead.',
    images: ['https://theanswerengine.ai/images/google-rankings-featured.png'],
    creator: '@theanswerengine',
  },

  alternates: {
    canonical: 'https://theanswerengine.ai/blog/google-rankings-dont-matter',
  },

  keywords: [
    'Answer Engine Optimization',
    'Google AI Overviews',
    'ChatGPT optimization',
    'AI citations',
    'SEO vs AEO',
    'featured snippets',
    'local SEO',
    'schema markup',
  ],
};

// JSON-LD Schema Component
function ComprehensiveSchema() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://theanswerengine.ai/blog/google-rankings-dont-matter#article",
        "headline": "Why Your Google Rankings Don't Matter Anymore",
        "description": "Google AI Overviews, ChatGPT, Claude, and Perplexity are answering questions directly. Even #1 rankings get 0 clicks now.",
        "image": {
          "@type": "ImageObject",
          "url": "https://theanswerengine.ai/images/google-rankings-featured.png",
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
        "datePublished": "2025-11-09T09:00:00-08:00",
        "dateModified": "2025-11-09T09:00:00-08:00",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://theanswerengine.ai/blog/google-rankings-dont-matter"
        },
        "articleSection": "Answer Engine Optimization",
        "keywords": "Google rankings, SEO vs AEO, Google AI Overviews, ChatGPT, AI citations",
        "wordCount": 4500
      },
      {
        "@type": "FAQPage",
        "@id": "https://theanswerengine.ai/blog/google-rankings-dont-matter#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Why don't my Google rankings matter as much anymore?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Google AI Overviews now answer most queries directly above traditional search results, meaning users get their information without clicking through to websites. Even with a #1 ranking, you may lose significant traffic."
            }
          },
          {
            "@type": "Question",
            "name": "What's the difference between SEO and Answer Engine Optimization?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Traditional SEO optimized to rank in search results (top 10 positions). Answer Engine Optimization (AEO) optimizes to be cited by AI as the authoritative answer—whether that's Google AI Overviews, ChatGPT, Claude, or Perplexity."
            }
          },
          {
            "@type": "Question",
            "name": "How long does it take to start getting AI citations?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "With proper Answer Engine Optimization, most businesses see their first featured snippet wins within 60-90 days. Full AI citation across multiple platforms typically takes 3-6 months of consistent, structured content creation."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://theanswerengine.ai/blog/google-rankings-dont-matter#breadcrumb",
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
            "name": "Why Google Rankings Don't Matter Anymore"
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
        "description": "The Answer Engine specializes in Answer Engine Optimization (AEO) for local service businesses.",
        "foundingDate": "2025"
      },
      {
        "@type": "WebPage",
        "@id": "https://theanswerengine.ai/blog/google-rankings-dont-matter",
        "url": "https://theanswerengine.ai/blog/google-rankings-dont-matter",
        "name": "Why Google Rankings Don't Matter Anymore",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://theanswerengine.ai/#website",
          "url": "https://theanswerengine.ai",
          "name": "The Answer Engine"
        },
        "breadcrumb": {
          "@id": "https://theanswerengine.ai/blog/google-rankings-dont-matter#breadcrumb"
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

export default function GoogleRankingsDontMatter() {
  const publishDate = '2025-11-09';
  const lastUpdated = '2025-11-09';

  return (
    <>
      <ComprehensiveSchema />

      <main className="min-h-screen bg-[#0F1117] relative">
        <div className="absolute top-0 left-0 w-2 h-2 bg-white/20" />
        <div className="absolute top-0 left-2 w-2 h-2 bg-white/15" />

        <article className="max-w-4xl mx-auto px-6 py-20 sm:py-32 relative">
          {/* Championship Cover Image */}
          <div className="ae-article-hero w-full rounded-xl overflow-hidden mb-10" style={{ maxHeight: 420 }}>
            <img
              src="/blog/google-rankings-dont-matter.webp"
              alt="google rankings dont matter"
              style={{ width: '100%', height: 420, objectFit: 'cover', display: 'block' }}
              loading="eager"
            />
          </div>
          {/* Featured Image */}
          <div className="mb-12 rounded-2xl overflow-hidden border border-white/[0.08] max-w-3xl mx-auto">
            <img
              src="/google-rankings-featured.png"
              alt="Why Google rankings don't matter as much in 2025: Google AI Overviews and AI chatbots like ChatGPT now answer user questions directly"
              className="w-full grayscale brightness-75"
            />
          </div>

          {/* Article Header */}
          <header className="mb-16">
            <div className="flex gap-2 mb-8">
              <div className="w-1.5 h-1.5 bg-white/40" />
              <div className="w-1.5 h-1.5 bg-white/30" />
              <div className="w-1.5 h-1.5 bg-white/40" />
            </div>

            <p className="ae-section-label not-prose">THE SHIFT NO ONE SAW COMING</p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-6 leading-tight text-gray-100">
              The Real Reason Your <span className="font-normal text-white">Google Rankings</span> Don&#39;t Matter Anymore
            </h1>
            <p className="text-xl sm:text-2xl text-gray-400 leading-relaxed mb-6 font-light">
              Google AI Overviews, ChatGPT, Claude, and Perplexity are answering questions directly. Even a #1 ranking can get 0 clicks. Here is how to get cited instead of ignored.
            </p>
            <div className="flex items-center gap-3 text-sm text-gray-500 font-light">
              <span className="w-1.5 h-1.5 bg-white/25 rounded-full" />
              <span>Published January 8, 2025</span>
              <span className="text-gray-700">|</span>
              <span>Updated {new Date(lastUpdated).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
              <span className="text-gray-700">|</span>
              <span>By Justin Borges</span>
            </div>
          </header>

          {/* Main Content */}
          <div className="prose prose-invert prose-lg max-w-none prose-headings:font-plus-jakarta prose-headings:text-white prose-p:text-gray-300 prose-a:text-[#F27D24] prose-a:no-underline hover:prose-a:underline prose-strong:text-white">

            {/* Opening Stats Grid */}
            <div className="ae-stats-grid not-prose">
              <div className="ae-stat-card">
                <div className="ae-stat-emoji">📉</div>
                <div className="ae-stat-value ae-accent">-40%</div>
                <div className="ae-stat-label">Click-through rate drop on queries with AI Overviews</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-emoji">🤖</div>
                <div className="ae-stat-value ae-accent">1B+</div>
                <div className="ae-stat-label">Monthly ChatGPT users bypassing Google entirely</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-emoji">🎯</div>
                <div className="ae-stat-value ae-accent">2-3</div>
                <div className="ae-stat-label">Sources cited per AI answer (down from 10 blue links)</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-emoji">⏱️</div>
                <div className="ae-stat-value ae-accent">60-90</div>
                <div className="ae-stat-label">Days to first AI citation with proper AEO</div>
              </div>
            </div>

            {/* CTA 1 */}
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Get your free AI citation score — 48-hour turnaround</a>

            <p>If your business is not the source AI platforms cite in those answers, you are invisible. This article breaks down exactly what changed, why traditional SEO is failing, and what local businesses must do to stay competitive.</p>

            {/* Section: What Are Google AI Overviews */}
            <p className="ae-section-label not-prose">THE NEW SEARCH LANDSCAPE Your first step: <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free AERO Blind Spot Scan.</a></p>
            <h2>What Are Google AI Overviews? (And Why They Matter More Than Rankings)</h2>

            <p>Google AI Overviews appear at the very top of search results, above all traditional rankings, and use generative AI to answer user questions in a few sentences. Think of them as featured snippets on steroids.</p>

            <p>When someone searches "best plumber near me," Google AI Overviews might generate an answer like: <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Claim your free call</a> before your market fills.</p>

            <div className="ae-quote not-prose">
              <p>"Based on customer reviews and licensing verification, ABC Plumbing offers 24/7 emergency service with licensed technicians. They specialize in leak detection and water heater replacement, with same-day service available in most areas."</p>
            </div>

            <p>Notice what happened? The user got their answer. They might not click anything else. Reach out: <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>

            {/* Callout: Critical Shift */}
            <div className="ae-callout ae-callout-warning not-prose">
              <p className="ae-callout-title">The Critical Shift</p>
              <p>Google AI Overviews cite sources, but most users never visit those cited websites. If your business is not cited, you do not exist in that search. Rankings without citations equal zero traffic. Call us at <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> today.</p>
            </div>

            {/* Bar Chart: Traffic Impact */}
            <p className="ae-section-label not-prose">TRAFFIC IMPACT BY QUERY TYPE</p>
            <div className="ae-bar-group not-prose">
              <div className="ae-bar-item">
                <span className="ae-bar-label">Informational queries (how-to, what-is)</span>
                <div className="ae-bar-track">
                  <div className="ae-bar-fill" style={{ width: '75%' }} />
                </div>
                <span className="ae-bar-value">-75% CTR</span>
              </div>
              <div className="ae-bar-item">
                <span className="ae-bar-label">Local service queries (best near me)</span>
                <div className="ae-bar-track">
                  <div className="ae-bar-fill" style={{ width: '55%' }} />
                </div>
                <span className="ae-bar-value">-55% CTR</span>
              </div>
              <div className="ae-bar-item">
                <span className="ae-bar-label">Product comparison queries</span>
                <div className="ae-bar-track">
                  <div className="ae-bar-fill" style={{ width: '60%' }} />
                </div>
                <span className="ae-bar-value">-60% CTR</span>
              </div>
              <div className="ae-bar-item">
                <span className="ae-bar-label">Brand name searches</span>
                <div className="ae-bar-track">
                  <div className="ae-bar-fill" style={{ width: '15%' }} />
                </div>
                <span className="ae-bar-value">-15% CTR</span>
              </div>
            </div>

            {/* CTA 2 */}
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Get your free AI citation score — 48-hour turnaround</a>

            {/* Section: ChatGPT, Claude, Perplexity */}
            <p className="ae-section-label not-prose">BEYOND GOOGLE</p>
            <h2>How ChatGPT, Claude, and Perplexity Are Changing Search Behavior</h2>

            <p>Google is not the only problem. A massive portion of search traffic has moved off Google entirely. Millions of people now use ChatGPT instead of Google for many queries. They ask conversational questions like: <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Get your free AI readiness report.</a></p>

            <ul>
              <li>I need a real estate agent who specializes in flood recovery properties in Houston. Who is best?</li>
              <li>What HVAC company in Phoenix offers the best warranty on new AC systems?</li>
              <li>Which local contractor in Denver knows the most about energy-efficient home renovations?</li>
            </ul>

            <p>These platforms provide detailed answers, often with specific business recommendations. If your business is not mentioned, you lose that customer to whoever is mentioned.</p>

            {/* Callout: Key Difference */}
            <div className="ae-callout ae-callout-info not-prose">
              <p className="ae-callout-title">The Key Difference from Google Ready to act? <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a free strategy session.</a></p>
              <p>ChatGPT and similar platforms do not show ten blue links. They provide one answer, citing 2-3 sources maximum. You are either in that answer or you are out. There is no page two. There is no second chance.</p>
            </div>

            {/* Timeline: The Evolution of Search */}
            <p className="ae-section-label not-prose">THE EVOLUTION Drop us a line at <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>
            <h3>How Search Has Changed</h3>
            <div className="ae-timeline not-prose">
              <div className="ae-timeline-item">
                <strong>2000-2010: The Blue Link Era</strong>
                <p>10 organic links per page. Ranking #1 meant guaranteed traffic. SEO = keywords + backlinks.</p>
              </div>
              <div className="ae-timeline-item">
                <strong>2011-2018: The Feature Era</strong>
                <p>Featured snippets, knowledge panels, and local packs started stealing clicks from organic results. Speak to an AEO specialist: <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.</p>
              </div>
              <div className="ae-timeline-item">
                <strong>2019-2023: The Zero-Click Era</strong>
                <p>Over 50% of Google searches ended without a click. Answers appeared directly in search results.</p>
              </div>
              <div className="ae-timeline-item">
                <strong>2024-Present: The AI Answer Era</strong>
                <p>AI Overviews + ChatGPT + Claude + Perplexity answer questions directly. Being ranked is not enough. Being cited is everything. One client per city. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">See if your market is available.</a></p>
              </div>
            </div>

            {/* CTA 3 - Phone */}
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Get your free AI citation score — 48-hour turnaround</a>

            {/* Section: Why Traditional SEO Fails */}
            <p className="ae-section-label not-prose">THE DISCONNECT Check where you stand: <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free Blind Spot Scan.</a></p>
            <h2>Why Traditional SEO Does Not Work for AI Platforms</h2>

            <p>Here is where most businesses get stuck: they keep optimizing for 2015 Google.</p>

            {/* Comparison Table */}
            <div className="ae-comparison-table not-prose">
              <table>
                <thead>
                  <tr>
                    <th>Signal</th>
                    <th>Traditional SEO Value</th>
                    <th>AI Citation Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Meta tags &amp; keywords</td>
                    <td>High priority</td>
                    <td>Nearly irrelevant</td>
                  </tr>
                  <tr>
                    <td>Backlink quantity</td>
                    <td>Core ranking factor</td>
                    <td>Minimal weight</td>
                  </tr>
                  <tr>
                    <td>Keyword density</td>
                    <td>Important metric</td>
                    <td>AI detects stuffing</td>
                  </tr>
                  <tr>
                    <td>Page load speed</td>
                    <td>Significant factor</td>
                    <td>Relevant but not decisive</td>
                  </tr>
                  <tr>
                    <td>Structured FAQ schema</td>
                    <td>Nice to have</td>
                    <td>Critical for citations</td>
                  </tr>
                  <tr>
                    <td>Direct question-answer format</td>
                    <td>Optional</td>
                    <td>Required for inclusion</td>
                  </tr>
                  <tr>
                    <td>Author credentials</td>
                    <td>E-E-A-T signal</td>
                    <td>Verification prerequisite</td>
                  </tr>
                  <tr>
                    <td>Specific factual claims</td>
                    <td>Helpful</td>
                    <td>AI validates and cites these</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Pros/Cons: SEO vs AEO */}
            <div className="ae-pros-cons not-prose">
              <div className="ae-pros-box">
                <p className="ae-pros-title">What AI Platforms Want <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Schedule a free 30-min call.</a></p>
                <ul>
                  <li>Direct answers to specific questions</li>
                  <li>Structured data (FAQ, HowTo, Article schema)</li>
                  <li>Real human expertise and credentials</li>
                  <li>Specific, factual claims with evidence</li>
                  <li>Local relevance signals and case studies</li>
                  <li>Natural language, not keyword stuffing</li>
                </ul>
              </div>
              <div className="ae-cons-box">
                <p className="ae-cons-title">What AI Platforms Ignore</p>
                <ul>
                  <li>Meta description optimization</li>
                  <li>Backlink farming and PBNs</li>
                  <li>Keyword density targets</li>
                  <li>Thin content with high word count</li>
                  <li>Duplicate content across pages</li>
                  <li>Generic stock content without expertise</li>
                </ul>
              </div>
            </div>

            {/* CTA 4 */}
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Get your free AI citation score — 48-hour turnaround</a>

            {/* Section: Real-World Impact */}
            <p className="ae-section-label not-prose">REAL-WORLD SCENARIO</p>
            <h2>The Real-World Impact: What This Means for Your Business</h2>

            <p>Let us make this concrete with a realistic scenario. Questions? Call <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.</p>

            {/* Decision Matrix */}
            <div className="ae-decision-matrix not-prose">
              <table>
                <thead>
                  <tr>
                    <th>Factor</th>
                    <th>Company A (SEO Only)</th>
                    <th>Company B (AEO Optimized)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Google Page 1 Ranking</td>
                    <td>Yes</td>
                    <td>Yes</td>
                  </tr>
                  <tr>
                    <td>Meta Tags Optimized</td>
                    <td>Yes</td>
                    <td>Yes</td>
                  </tr>
                  <tr>
                    <td>Structured FAQ Schema</td>
                    <td>No</td>
                    <td>Yes</td>
                  </tr>
                  <tr>
                    <td>Author Credentials Markup</td>
                    <td>No</td>
                    <td>Yes</td>
                  </tr>
                  <tr>
                    <td>Detailed Case Studies</td>
                    <td>No</td>
                    <td>Yes</td>
                  </tr>
                  <tr>
                    <td>Cited by ChatGPT</td>
                    <td>Never</td>
                    <td>Consistently</td>
                  </tr>
                  <tr>
                    <td>Cited in AI Overviews</td>
                    <td>Rarely</td>
                    <td>Frequently</td>
                  </tr>
                  <tr>
                    <td>Lead Generation Trend</td>
                    <td>Declining</td>
                    <td>Growing</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>When someone asks ChatGPT "Who is the best HVAC company for AC repair in Phoenix?", ChatGPT cites Company B with specific reasons: certified technicians, same-day service, and specialization in high-efficiency systems for extreme climates.</p>

            <p>Company A? Never mentioned. Despite identical Google rankings. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Secure your territory before a competitor does.</a></p>

            {/* Takeaway */}
            <div className="ae-takeaway not-prose">
              <strong>Key Takeaway:</strong> Identical Google rankings now produce wildly different business outcomes. The company optimized for AI citations wins the customer. The company optimized only for rankings watches traffic decline month after month.
            </div>

            {/* CTA 5 - Email */}
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Get your free AI citation score — 48-hour turnaround</a>

            {/* Section: What It Takes */}
            <p className="ae-section-label not-prose">THE IMPLEMENTATION <a href="https://theanswerengine.ai/blindspot" className="cta-inline">See your AI visibility score — free.</a></p>
            <h2>What It Actually Takes to Win AI Citations</h2>

            <p>Understanding what needs to happen and successfully executing it are two very different things. Here is what is actually involved in Answer Engine Optimization:</p>

            {/* Cheat Sheet: AEO Implementation */}
            <div className="ae-cheat-sheet not-prose">
              <p className="ae-cheat-sheet-title">The AEO Implementation Checklist <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book your free consultation here.</a></p>
              <ul>
                <li><strong>Structured Data Layer:</strong> FAQ, HowTo, Article, LocalBusiness, and Review schema markup deployed without conflicts</li>
                <li><strong>Question-Answer Mapping:</strong> Every service page answers the top 10 questions customers ask, in natural language</li>
                <li><strong>Credential Documentation:</strong> Certifications, years of experience, and specializations marked up in machine-readable format</li>
                <li><strong>Case Study Library:</strong> Real customer outcomes with specific metrics (not vague testimonials)</li>
                <li><strong>Content Architecture:</strong> Pages structured for both Google E-E-A-T and conversational AI parsing simultaneously</li>
                <li><strong>Local Signal Reinforcement:</strong> Service areas, NAP consistency, and local authority signals embedded in schema</li>
                <li><strong>Multi-Platform Testing:</strong> Regular verification across Google AI Overviews, ChatGPT, Claude, and Perplexity</li>
                <li><strong>Citation Monitoring:</strong> Tracking which platforms cite your business and which cite competitors</li>
              </ul>
            </div>

            <h3>The Technical Infrastructure Challenge</h3>
            <p>AI platforms require multiple layers of structured data markup working together without conflicts. A single syntax error in your schema markup breaks the entire implementation. Most business owners do not discover the error for months.</p>

            {/* Callout: Schema Error */}
            <div className="ae-callout ae-callout-warning not-prose">
              <p className="ae-callout-title">Common Schema Mistakes Contact us at <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>
              <p>We audit dozens of websites every month. Over 80% have schema markup errors that prevent AI platforms from parsing their content. The most frequent: conflicting schema types, missing required fields, and improperly nested objects.</p>
            </div>

            <h3>The Content Architecture Problem</h3>
            <p>Every piece of content needs explicit question-answer mapping. But here is the challenge: the same article must simultaneously satisfy Google E-E-A-T requirements AND conversational AI parsing. Reach us at <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.</p>

            <h3>The Authority Documentation Gap</h3>
            <p>AI platforms verify credentials before citing sources. This is not about claiming expertise. It is about structuring your credentials in machine-readable formats that AI can validate.</p>

            {/* CTA 6 */}
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Get your free AI citation score — 48-hour turnaround</a>

            {/* Stats: Citation Impact */}
            <div className="ae-stats-grid not-prose">
              <div className="ae-stat-card">
                <div className="ae-stat-emoji">📊</div>
                <div className="ae-stat-value ae-accent">80%</div>
                <div className="ae-stat-label">Of sites we audit have schema markup errors</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-emoji">🔍</div>
                <div className="ae-stat-value ae-accent">3-6 mo</div>
                <div className="ae-stat-label">To full AI citation across multiple platforms</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-emoji">💰</div>
                <div className="ae-stat-value ae-accent">10x</div>
                <div className="ae-stat-label">Higher conversion rate from AI referral traffic</div>
              </div>
            </div>

            {/* Section: The 5-Step Framework */}
            <p className="ae-section-label not-prose">THE FRAMEWORK</p>
            <h2>The 5-Step Answer Engine Optimization Framework</h2>

            <p>We have distilled everything we know about AI citations into a repeatable framework. Here is the high-level view: Find your gaps with a <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free AERO scan.</a></p>

            <div className="ae-timeline not-prose">
              <div className="ae-timeline-item">
                <strong>Step 1: AI Visibility Audit</strong>
                <p>Test your business across ChatGPT, Claude, Perplexity, and Google AI Overviews. Document where you are cited, where competitors are cited, and where nobody is cited (your opportunity gaps).</p>
              </div>
              <div className="ae-timeline-item">
                <strong>Step 2: Schema Infrastructure</strong>
                <p>Deploy comprehensive structured data: FAQ, HowTo, Article, LocalBusiness, Review, and Person schema. Every page gets the right markup for its content type. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Schedule a free call</a> to see where you stand.</p>
              </div>
              <div className="ae-timeline-item">
                <strong>Step 3: Content Architecture</strong>
                <p>Restructure existing content into question-answer format. Add specific factual claims, case studies with metrics, and credential documentation in every piece.</p>
              </div>
              <div className="ae-timeline-item">
                <strong>Step 4: Authority Building</strong>
                <p>Document credentials, certifications, and expertise in machine-readable formats. Build topical authority through consistent, structured content creation. Send your questions to <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>
              </div>
              <div className="ae-timeline-item">
                <strong>Step 5: Monitor and Iterate</strong>
                <p>Track citations across all AI platforms weekly. Identify what is working, double down on winning patterns, and fix content that is not getting cited.</p>
              </div>
            </div>

            {/* CTA 7 - Phone */}
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Get your free AI citation score — 48-hour turnaround</a>

            {/* Section: Common Objections */}
            <p className="ae-section-label not-prose">ADDRESSING CONCERNS</p>
            <h2>But What About My Existing SEO Investment?</h2>

            <p>This is the question we hear most. Here is the honest answer: <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Claim your market territory — one client per area.</a></p>

            {/* Callout: Good News */}
            <div className="ae-callout ae-callout-success not-prose">
              <p className="ae-callout-title">Good News: Nothing Is Wasted</p>
              <p>Your domain authority, existing backlinks, and quality content remain valuable assets. AEO builds on that foundation rather than replacing it. Think of it as upgrading your engine, not buying a new car. <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Run your free AI Blind Spot Scan.</a></p>
            </div>

            <p>Basic SEO hygiene remains important. However, the focus must shift from "ranking higher" to "providing better answers." The content that wins AI citations often ranks well in traditional search anyway, because Google rewards the same signals AI platforms look for: expertise, clarity, and structured information.</p>

            {/* Pros/Cons: Making the Transition */}
            <div className="ae-pros-cons not-prose">
              <div className="ae-pros-box">
                <p className="ae-pros-title">What You Keep from SEO <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a free 30-minute strategy call.</a></p>
                <ul>
                  <li>Domain authority and backlink profile</li>
                  <li>Quality content library</li>
                  <li>Technical site health (speed, mobile, security)</li>
                  <li>Local search presence and GBP</li>
                </ul>
              </div>
              <div className="ae-cons-box">
                <p className="ae-cons-title">What Must Change</p>
                <ul>
                  <li>Keyword-first content strategy</li>
                  <li>Backlink quantity over content quality</li>
                  <li>Generic page templates</li>
                  <li>Ignoring structured data</li>
                </ul>
              </div>
            </div>

            {/* CTA 8 */}
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Get your free AI citation score — 48-hour turnaround</a>

            {/* Section: Local Businesses Benefit Most */}
            <p className="ae-section-label not-prose">LOCAL ADVANTAGE</p>
            <h2>Why Local Service Businesses Benefit Most from AEO</h2>

            <p>Local service businesses may benefit more from AEO than any other category. Here is why: <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a></p>

            <p>When someone asks "Who is the best plumber near me?" they want a specific recommendation, not ten links to explore. AI platforms deliver exactly that: one recommendation with reasons.</p>

            {/* Bar Chart: Local Impact */}
            <div className="ae-bar-group not-prose">
              <div className="ae-bar-item">
                <span className="ae-bar-label">HVAC / Plumbing / Electrical</span>
                <div className="ae-bar-track">
                  <div className="ae-bar-fill" style={{ width: '92%' }} />
                </div>
                <span className="ae-bar-value">92% AI Potential</span>
              </div>
              <div className="ae-bar-item">
                <span className="ae-bar-label">Real Estate</span>
                <div className="ae-bar-track">
                  <div className="ae-bar-fill" style={{ width: '88%' }} />
                </div>
                <span className="ae-bar-value">88% AI Potential</span>
              </div>
              <div className="ae-bar-item">
                <span className="ae-bar-label">Legal Services</span>
                <div className="ae-bar-track">
                  <div className="ae-bar-fill" style={{ width: '85%' }} />
                </div>
                <span className="ae-bar-value">85% AI Potential</span>
              </div>
              <div className="ae-bar-item">
                <span className="ae-bar-label">Medical / Dental</span>
                <div className="ae-bar-track">
                  <div className="ae-bar-fill" style={{ width: '82%' }} />
                </div>
                <span className="ae-bar-value">82% AI Potential</span>
              </div>
              <div className="ae-bar-item">
                <span className="ae-bar-label">Financial Services</span>
                <div className="ae-bar-track">
                  <div className="ae-bar-fill" style={{ width: '78%' }} />
                </div>
                <span className="ae-bar-value">78% AI Potential</span>
              </div>
            </div>

            {/* CTA 9 - Email */}
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Get your free AI citation score — 48-hour turnaround</a>

            {/* Section: The Window Is Closing */}
            <p className="ae-section-label not-prose">TIMING MATTERS</p>
            <h2>The First-Mover Advantage Window Is Closing</h2>

            <p>Right now, most local businesses have zero AI optimization. That means the first business in any market that implements proper AEO captures the citation advantage by default.</p>

            <p>But this window will not stay open forever. As more businesses catch on, the competition for AI citations will intensify. The businesses that move first will have months of citation history, authority signals, and structured data advantages that latecomers will struggle to overcome.</p>

            {/* Callout: Urgency */}
            <div className="ae-callout ae-callout-warning not-prose">
              <p className="ae-callout-title">The Math Is Simple</p>
              <p>In most local markets, fewer than 5% of businesses have any AEO optimization. The first to implement it captures the vast majority of AI-driven leads. Waiting six months means competing against businesses that already have six months of citation history.</p>
            </div>

            {/* CTA 10 */}
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Get your free AI citation score — 48-hour turnaround</a>

            {/* CTA Block */}
            <div className="ae-cta-block not-prose my-16">
              <h3>Answer Engine Optimization Services — See Your AI Citation Score Free</h3>
              <p>Every month 2,900 businesses search for ways to improve their brand visibility in AI search engines. The Answer Engine&apos;s free Blind Spot Report gives you your exact citation score across ChatGPT, Perplexity, and Google AI — and shows you what to fix.</p>
              <a href="https://theanswerengine.ai/blindspot" className="ae-cta-primary">Get Your Free AI Citation Score →</a>
              <div style={{ marginTop: '16px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <a href="tel:+12134442229" className="ae-cta-secondary">(213) 444-2229</a>
                <a href="https://calendly.com/theanswerengine-support/30min" className="ae-cta-secondary">Book Free Strategy Call</a>
              </div>
            </div>

            {/* FAQ Section */}
            <p className="ae-section-label not-prose">YOUR QUESTIONS ANSWERED</p>
            <h2>Frequently Asked Questions</h2>

            <div className="space-y-6 not-prose">
              {[
                {
                  q: "Why don't my Google rankings matter as much anymore?",
                  a: "Google AI Overviews now answer most queries directly above traditional search results, meaning users get their information without clicking through to websites. Even with a #1 ranking, you may lose significant traffic if Google's AI provides the answer first."
                },
                {
                  q: "What's the difference between SEO and Answer Engine Optimization?",
                  a: "Traditional SEO optimized to rank in search results (top 10 positions). Answer Engine Optimization (AEO) optimizes to be cited by AI as the authoritative answer, whether that is Google AI Overviews, ChatGPT, Claude, or Perplexity."
                },
                {
                  q: "How do I know if AI platforms are citing my competitors instead of me?",
                  a: "Test it yourself. Ask ChatGPT, Claude, or Perplexity questions your customers would ask about your services in your area. If your competitors are mentioned and you are not, you have an AEO visibility problem."
                },
                {
                  q: "Do I still need traditional SEO if I do Answer Engine Optimization?",
                  a: "Yes, but the priorities shift. Basic SEO hygiene remains important. However, focus should move from ranking higher to providing better answers. The content that wins AI citations often ranks well anyway."
                },
                {
                  q: "How long does it take to start getting AI citations?",
                  a: "With proper Answer Engine Optimization, most businesses see their first featured snippet wins within 60-90 days. Full AI citation across multiple platforms typically takes 3-6 months of consistent, structured content creation."
                },
                {
                  q: "What happens to my existing SEO investment?",
                  a: "Nothing is wasted. Your domain authority, existing backlinks, and quality content remain valuable assets. AEO builds on that foundation rather than replacing it."
                },
                {
                  q: "Can AI citations work for local service businesses?",
                  a: "Absolutely. Local service businesses may benefit most from AEO. When someone asks who the best plumber near them is, they want a specific recommendation, not ten links to explore."
                }
              ].map((faq, i) => (
                <div key={i} className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-xl p-6 hover:border-white/[0.12] transition-colors">
                  <h3 className="text-xl font-semibold mb-3 text-white font-plus-jakarta">
                    {faq.q}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA 11 */}
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Get your free AI citation score — 48-hour turnaround</a>

            {/* CTA 12 - Phone */}
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Get your free AI citation score — 48-hour turnaround</a>

            {/* Takeaway */}
            <div className="ae-takeaway not-prose">
              <strong>Bottom Line:</strong> Google rankings are no longer the finish line. They are just the starting line. The businesses that win in 2025 and beyond are the ones that AI platforms trust enough to cite as the answer. Everything else is noise.
            </div>

            {/* CTA 13 */}
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Get your free AI citation score — 48-hour turnaround</a>

            {/* Author Card */}
            <div className="ae-author-card not-prose">
              <div>
                <p><strong>Written by: Justin Borges</strong></p>
                <p>The Answer Engine specializes in Answer Engine Optimization (AEO) for local service businesses. We help companies get cited by Google AI Overviews, ChatGPT, Claude, Perplexity, and other AI platforms, positioning them as the trusted expert in their market.</p>
                <p><strong>Credentials:</strong> 2+ years specialized AEO experience, 10+ years combined traditional SEO, 500+ schema implementations deployed, 100+ featured snippet wins for clients.</p>
                <p><Link href="/">Learn more at TheAnswerEngine.ai</Link></p>
              </div>
            </div>

            {/* CTA 14 */}
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Get your free AI citation score — 48-hour turnaround</a>

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

            {/* CTA 15 */}
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Get your free AI citation score — 48-hour turnaround</a>

          </div>
        </article>
      </main>
    </>
  );
}
