import type { Metadata } from 'next';
import Link from 'next/link';

// ISR Configuration
export const revalidate = 86400; // 24 hours
export const dynamic = 'force-static';
export const dynamicParams = true;

// Enhanced Metadata
export const metadata: Metadata = {
  title: 'The Complete Guide to Answer Engine Optimization for Local Service Businesses | The Answer Engine',
  description: 'Learn how Answer Engine Optimization gets ChatGPT, Claude, Google AI to cite your local service business instead of competitors. Complete AEO guide with implementation strategy.',

  openGraph: {
    title: 'The Complete Guide to Answer Engine Optimization for Local Service Businesses',
    description: 'Learn how Answer Engine Optimization gets ChatGPT, Claude, Google AI to cite your local service business instead of competitors.',
    type: 'article',
    publishedTime: '2025-11-11',
    modifiedTime: '2025-11-11',
    authors: ['https://theanswerengine.ai/about'],
    url: 'https://theanswerengine.ai/blog/complete-guide-answer-engine-optimization',
    images: [
      {
        url: 'https://theanswerengine.ai/images/aeo-complete-guide.jpg',
        width: 1200,
        height: 630,
        alt: 'Complete Guide to Answer Engine Optimization',
      }
    ],
    siteName: 'The Answer Engine',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'The Complete Guide to Answer Engine Optimization',
    description: 'Get AI platforms to cite your business instead of competitors',
    images: ['https://theanswerengine.ai/images/aeo-complete-guide.jpg'],
    creator: '@theanswerengine',
  },

  alternates: {
    canonical: 'https://theanswerengine.ai/blog/complete-guide-answer-engine-optimization',
  },

  keywords: [
    'Answer Engine Optimization',
    'AEO',
    'AI citations',
    'ChatGPT business recommendations',
    'Google AI Overviews',
    'local business AI optimization',
    'SEO vs AEO',
    'AI search optimization',
  ],
};

// JSON-LD Schema Component
function ComprehensiveSchema() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://theanswerengine.ai/blog/complete-guide-answer-engine-optimization#article",
        "headline": "The Complete Guide to Answer Engine Optimization for Local Service Businesses",
        "alternativeHeadline": "Everything Local Service Businesses Need to Know About Getting AI Platforms to Cite You",
        "description": "Learn how Answer Engine Optimization gets ChatGPT, Claude, Google AI to cite your local service business instead of competitors.",
        "image": {
          "@type": "ImageObject",
          "url": "https://theanswerengine.ai/images/aeo-complete-guide.jpg",
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
        "datePublished": "2025-11-11T09:00:00-08:00",
        "dateModified": "2025-11-11T09:00:00-08:00",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://theanswerengine.ai/blog/complete-guide-answer-engine-optimization"
        },
        "articleSection": "Answer Engine Optimization",
        "keywords": "Answer Engine Optimization, AEO, AI citations, ChatGPT business recommendations, Google AI Overviews, local business AI optimization",
        "wordCount": 3247
      },
      {
        "@type": "FAQPage",
        "@id": "https://theanswerengine.ai/blog/complete-guide-answer-engine-optimization#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How long does it take to see results from AEO?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Most local service businesses see first AI citations within 60-90 days of implementing comprehensive authority optimization. Some low-competition queries produce faster results (30-45 days), while highly competitive local markets may require 120 days or more."
            }
          },
          {
            "@type": "Question",
            "name": "Can I do Answer Engine Optimization myself?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Technically possible but practically difficult for most local service business owners. Effective AEO requires expertise in content strategy, technical SEO, schema markup, entity optimization, and AI platform evaluation. Professional implementation costs $2,997+ for foundational setup."
            }
          },
          {
            "@type": "Question",
            "name": "Will Answer Engine Optimization hurt my traditional SEO rankings?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. AEO is complementary to SEO, not competitive. Proper implementation actually improves traditional rankings through better content quality, technical optimization, and authority signals."
            }
          },
          {
            "@type": "Question",
            "name": "How much does Answer Engine Optimization cost?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Foundational implementation (Answer Authority Foundation Package) starts at $2,997 including voice capture, hub-and-spoke content creation, technical schema implementation, entity optimization, and 90-day performance guarantee."
            }
          }
        ]
      },
      {
        "@type": "HowTo",
        "@id": "https://theanswerengine.ai/blog/complete-guide-answer-engine-optimization#howto",
        "name": "How to Get AI Platforms to Recommend Your Business",
        "description": "Step-by-step process for getting ChatGPT, Claude, Perplexity, and Google AI to cite your business",
        "totalTime": "P90D",
        "step": [
          {
            "@type": "HowToStep",
            "position": 1,
            "name": "Create Comprehensive Authoritative Content",
            "text": "Build hub-and-spoke content architecture with comprehensive guides supported by detailed spoke articles."
          },
          {
            "@type": "HowToStep",
            "position": 2,
            "name": "Implement Technical Schema Markup",
            "text": "Add LocalBusiness, FAQ, Article, and Organization schema to help AI systems interpret your content."
          },
          {
            "@type": "HowToStep",
            "position": 3,
            "name": "Optimize Entity Recognition",
            "text": "Ensure consistent business information across all platforms for cross-platform validation."
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://theanswerengine.ai/blog/complete-guide-answer-engine-optimization#breadcrumb",
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
            "name": "Complete Guide to Answer Engine Optimization"
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
        "description": "The Answer Engine specializes in helping local service businesses become the trusted authority AI platforms cite instead of competitors through Answer Engine Optimization (AEO).",
        "foundingDate": "2025"
      },
      {
        "@type": "WebPage",
        "@id": "https://theanswerengine.ai/blog/complete-guide-answer-engine-optimization",
        "url": "https://theanswerengine.ai/blog/complete-guide-answer-engine-optimization",
        "name": "The Complete Guide to Answer Engine Optimization",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://theanswerengine.ai/#website",
          "url": "https://theanswerengine.ai",
          "name": "The Answer Engine"
        },
        "breadcrumb": {
          "@id": "https://theanswerengine.ai/blog/complete-guide-answer-engine-optimization#breadcrumb"
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

export default function CompleteGuideAEO() {
  const publishDate = '2025-11-11';
  const lastUpdated = '2025-11-11';

  return (
    <>
      <ComprehensiveSchema />

      <main className="min-h-screen bg-[#0F1117]">
        <article className="mx-auto max-w-4xl px-6 py-20">

          {/* Breadcrumbs */}
          <nav className="mb-8 flex items-center gap-2 text-sm text-gray-400">
            <Link href="/" className="hover:text-[#F27D24] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-[#F27D24] transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-gray-300">Complete Guide to AEO</span>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl mb-6 bg-white/[0.04] border border-white/[0.08]">
              <span className="text-sm font-semibold tracking-wider uppercase text-white">Complete AEO Guide</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-white leading-tight">
              The Complete Guide to Answer Engine Optimization for Local Service Businesses
            </h1>

            {/* Featured Snippet */}
            <div className="bg-gradient-to-br from-white/[0.02] to-white/[0.02] border border-white/[0.08] rounded-xl p-6 mb-8">
              <p className="text-lg text-white leading-relaxed">
                <strong>Answer Engine Optimization (AEO)</strong> is the practice of making your business the trusted authority that AI platforms like ChatGPT, Claude, Perplexity, and Google AI Overviews cite when people ask questions. Unlike traditional SEO that focuses on rankings, AEO focuses on becoming the answer. Whoever AI cites becomes the authority, and whoever becomes the authority gets the business.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>15 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <time dateTime={publishDate}>November 11, 2025</time>
              </div>
            </div>
          </header>

          {/* Main Content with prose */}
          <div className="prose prose-invert prose-lg max-w-none prose-headings:font-plus-jakarta prose-headings:text-white prose-p:text-gray-300 prose-a:text-[#F27D24] prose-a:no-underline hover:prose-a:underline prose-strong:text-white">

            {/* ── STATS GRID ── */}
            <div className="ae-stats-grid not-prose">
              <div className="ae-stat-card">
                <div className="ae-stat-emoji">🔍</div>
                <div className="ae-stat-value ae-accent">65%</div>
                <div className="ae-stat-label">of Google searches now end without a single click</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-emoji">🤖</div>
                <div className="ae-stat-value ae-accent">400M+</div>
                <div className="ae-stat-label">weekly ChatGPT users asking AI for business recommendations</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-emoji">📉</div>
                <div className="ae-stat-value ae-accent">2-3</div>
                <div className="ae-stat-label">businesses cited per AI answer vs 10 blue links in Google</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-emoji">⏱️</div>
                <div className="ae-stat-value ae-accent">60-90</div>
                <div className="ae-stat-label">days for most businesses to achieve first AI citations</div>
              </div>
            </div>

            {/* ── INTRODUCTION ── */}
            <span className="ae-section-label">The Shift</span>
            <h2>Something Fundamental Has Changed</h2>

            <p>People do not scroll through ten blue links anymore. They ask AI one question and trust the first answer they receive.</p>

            <p>When someone asks ChatGPT &quot;who&apos;s the best probate realtor in Los Angeles&quot; or tells Google &quot;find me a reliable HVAC company near me,&quot; the platforms cite 2-3 businesses maximum. If you are not one of those citations, you are invisible.</p>

            <div className="ae-quote not-prose">
              <p>Traditional SEO was built for a world where people scrolled. Answer Engine Optimization is built for a world where people ask, get one answer, and make a decision.</p>
            </div>

            <p>The businesses that adapt to this reality now will dominate their local markets for the next decade. The ones that do not will keep wondering why their phones stopped ringing even though their &quot;SEO is fine.&quot;</p>

            <p>This guide covers everything you need to understand about this shift. Why your rankings stopped generating leads, how AI platforms actually choose which businesses to recommend, what separates cited businesses from invisible ones, and exactly what it takes to become the AI-recommended expert in your market.</p>

            {/* ── CTA 1 ── */}
            <div className="ae-cta-inline not-prose">
              <p>Find out if AI platforms are recommending your competitors instead of you.</p>
              <Link href="/blindspot">Get Your Free Blind Spot Report &rarr;</Link>
            </div>

            {/* ── TABLE OF CONTENTS ── */}
            <span className="ae-section-label">What You&apos;ll Learn</span>
            <h2>Inside This Guide</h2>

            <div className="ae-cheat-sheet not-prose">
              <div className="ae-cheat-sheet-title">Guide Contents</div>
              <ul>
                <li><strong>Section 1:</strong> Why your Google rankings no longer generate leads</li>
                <li><strong>Section 2:</strong> How AI platforms decide which businesses to cite</li>
                <li><strong>Section 3:</strong> Why your Google traffic dropped in 2025</li>
                <li><strong>Section 4:</strong> SEO vs AEO: the critical differences</li>
                <li><strong>Section 5:</strong> How to get AI platforms to recommend your business</li>
                <li><strong>Section 6:</strong> Is AEO worth the investment for your business?</li>
                <li><strong>FAQ:</strong> 8 common questions about Answer Engine Optimization</li>
              </ul>
            </div>

            {/* ══════════════════════════════════════════ */}
            {/* SECTION 1: Rankings Don't Matter */}
            {/* ══════════════════════════════════════════ */}
            <span className="ae-section-label">Section 1</span>
            <h2>The Real Reason Your Google Rankings Do Not Matter Anymore</h2>

            <p>Google AI Overviews now appear above organic results for millions of local service queries. ChatGPT processes billions of queries monthly with zero links to traditional search results.</p>

            <p>Your business might rank #3 for &quot;best HVAC company in Phoenix.&quot; That ranking used to mean guaranteed phone calls. Now it means nothing. Google&apos;s AI Overview appears above you, cites two different companies, and most searchers never scroll past it. The click never happens. Your ranking is invisible.</p>

            {/* ── BAR CHART: Click-Through Rate Decline ── */}
            <div className="ae-bar-group not-prose">
              <h3>Click-Through Rate by Search Position (AI Overview Present)</h3>
              <div className="ae-bar-item">
                <span className="ae-bar-label">Position #1 (no AI Overview)</span>
                <div className="ae-bar-track"><div className="ae-bar-fill" style={{width:'39%'}}></div></div>
                <span className="ae-bar-value">39%</span>
              </div>
              <div className="ae-bar-item">
                <span className="ae-bar-label">Position #1 (AI Overview above)</span>
                <div className="ae-bar-track"><div className="ae-bar-fill" style={{width:'12%'}}></div></div>
                <span className="ae-bar-value">12%</span>
              </div>
              <div className="ae-bar-item">
                <span className="ae-bar-label">Position #3 (AI Overview above)</span>
                <div className="ae-bar-track"><div className="ae-bar-fill" style={{width:'4%'}}></div></div>
                <span className="ae-bar-value">4%</span>
              </div>
              <div className="ae-bar-item">
                <span className="ae-bar-label">AI Overview citation</span>
                <div className="ae-bar-track"><div className="ae-bar-fill" style={{width:'65%'}}></div></div>
                <span className="ae-bar-value">65%</span>
              </div>
            </div>

            <p>This is not about some future trend. This is happening right now across every local service category. Plumbers, realtors, tax advisors, home inspectors, electricians: businesses that built their entire lead generation strategy around Google rankings are watching their traffic collapse while their rankings stay stable or even improve.</p>

            <div className="ae-callout ae-callout-warning not-prose">
              <div className="ae-callout-title">The Winner-Take-All Dynamic</div>
              <p>When someone opens ChatGPT and asks for a local business recommendation, the platform does not say &quot;here are 10 results.&quot; It says &quot;contact Sarah Mitchell at Mitchell Financial Advisory. Here is why she is the best choice.&quot; One recommendation. One business gets the lead. Everyone else gets nothing.</p>
            </div>

            <p>Voice search accelerates this dynamic even further. When people ask Siri or Alexa for recommendations, they receive exactly one answer. Rankings do not exist in voice search. Either AI cites your business, or you do not exist for that query.</p>

            <div className="ae-takeaway not-prose">
              <div className="ae-takeaway-title">Key Takeaway</div>
              <p>Traditional SEO focused on competition for rankings. AEO focuses on competition for AI citations. The citation war is fundamentally different from the ranking war, and most local businesses do not realize they are already losing it.</p>
            </div>

            {/* ── CTA 2 ── */}
            <div className="ae-cta-inline not-prose">
              <p>Not sure if AI Overviews are capturing your traffic? We can show you the data.</p>
              <a href="tel:+12134442229">Call (213) 444-2229 for a Free Consultation &rarr;</a>
            </div>

            {/* ══════════════════════════════════════════ */}
            {/* SECTION 2: AI Invisibility */}
            {/* ══════════════════════════════════════════ */}
            <span className="ae-section-label">Section 2</span>
            <h2>Why Local Businesses Are Invisible to AI Search</h2>

            <p>AI platforms use weighted authority assessment and cross-validation to determine which businesses to cite. This is a three-layer evaluation process analyzing content quality, entity recognition, and competitive positioning simultaneously.</p>

            <p>Most local service businesses are completely invisible to AI platforms. Not because their websites are terrible. They are invisible because they fail the authority evaluation process that AI systems use before making any recommendation.</p>

            {/* ── TIMELINE: How AI Evaluates ── */}
            <div className="ae-timeline not-prose">
              <div className="ae-timeline-item">
                <strong>Layer 1: Content Authority Scan</strong>
                <p>AI examines your website content structure, depth, and expertise signals. Thin service pages with 200 words fail immediately.</p>
              </div>
              <div className="ae-timeline-item">
                <strong>Layer 2: Entity Recognition</strong>
                <p>AI checks whether your business exists consistently across the web: Google Business Profile, directories, review platforms, and social profiles.</p>
              </div>
              <div className="ae-timeline-item">
                <strong>Layer 3: Cross-Validation</strong>
                <p>AI looks for consistent authority signals across multiple independent sources. Reviews, mentions, backlinks, and citations from other trusted sources all contribute.</p>
              </div>
              <div className="ae-timeline-item">
                <strong>Layer 4: Competitive Comparison</strong>
                <p>AI ranks you against direct competitors on every metric above. The business that scores highest gets cited. Everyone else gets nothing.</p>
              </div>
            </div>

            <p>Think of it like a hiring process. AI does not just check if you can do the job (basic competence). It evaluates whether you are the best candidate (comparative authority). Your competitor might have more detailed content, stronger credentials, or clearer expertise positioning. If they score higher, AI cites them instead of you.</p>

            <div className="ae-callout ae-callout-info not-prose">
              <div className="ae-callout-title">Why Cross-Validation Matters</div>
              <p>AI platforms do not trust single sources. They look for consistent authority signals across multiple independent sources: your own content, third-party reviews, directory listings, news mentions, and other businesses linking to you. One strong signal is not enough. You need coordinated authority across the entire ecosystem.</p>
            </div>

            <div className="ae-quote not-prose">
              <p>AI citation is binary. Either you pass the authority evaluation and get recommended, or you do not exist for that query. There is no second page of results, no runner-up position.</p>
            </div>

            {/* ── CTA 3 ── */}
            <div className="ae-cta-inline not-prose">
              <p>Discover which layer of AI evaluation your business is failing.</p>
              <Link href="/blindspot">Get Your Free Blind Spot Report &rarr;</Link>
            </div>

            {/* ══════════════════════════════════════════ */}
            {/* SECTION 3: Traffic Drop */}
            {/* ══════════════════════════════════════════ */}
            <span className="ae-section-label">Section 3</span>
            <h2>Why Your Google Traffic Dropped in 2025</h2>

            <p>Google AI Overviews now dominate 45% of search results for local service queries, creating a zero-click experience where users never visit your website even when you rank #1 in traditional organic results.</p>

            {/* ── STATS GRID: Traffic Impact ── */}
            <div className="ae-stats-grid not-prose">
              <div className="ae-stat-card">
                <div className="ae-stat-emoji">📊</div>
                <div className="ae-stat-value ae-accent">45%</div>
                <div className="ae-stat-label">of local service queries now show AI Overviews above organic results</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-emoji">📱</div>
                <div className="ae-stat-value ae-accent">60%</div>
                <div className="ae-stat-label">drop in contact form submissions reported by businesses with stable rankings</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-emoji">🚫</div>
                <div className="ae-stat-value ae-accent">0</div>
                <div className="ae-stat-label">clicks from AI Overviews that go to non-cited businesses</div>
              </div>
            </div>

            <p>You are tracking rankings religiously. Position #2 for your main keyword. Position #3 for your location-based term. Everything looks fine in your SEO dashboard. But your phone stopped ringing and your contact form submissions fell off a cliff compared to last year.</p>

            <p>The problem: Google AI Overviews appear above your ranking for most valuable local service queries. Someone searches &quot;how to choose a home inspector in Seattle,&quot; and Google&apos;s AI generates a comprehensive answer with citations to two specific businesses. The answer is good enough that the searcher never scrolls. Your #2 ranking? Never seen.</p>

            <div className="ae-callout ae-callout-warning not-prose">
              <div className="ae-callout-title">Permanent Decline Without Adaptation</div>
              <p>The traffic decline is permanent unless you adapt. Traditional SEO tactics like building backlinks, optimizing metadata, and improving page speed will not recover traffic that AI Overviews captured. You need to optimize for citation within the AI answer itself.</p>
            </div>

            <p>This is not hitting every query equally. Google deploys AI Overviews strategically for high-commercial-intent searches where they can capture the transaction. Searches like &quot;best plumber near me,&quot; &quot;reliable HVAC company in Denver,&quot; and &quot;top-rated realtor in Austin&quot; are exactly the searches that used to drive your business.</p>

            {/* ── CTA 4 ── */}
            <div className="ae-cta-inline not-prose">
              <p>See exactly which queries AI Overviews are stealing from your business.</p>
              <Link href="/blindspot">Request Your Free Blind Spot Report &rarr;</Link>
            </div>

            {/* ══════════════════════════════════════════ */}
            {/* SECTION 4: SEO vs AEO */}
            {/* ══════════════════════════════════════════ */}
            <span className="ae-section-label">Section 4</span>
            <h2>The Difference Between SEO and Answer Engine Optimization</h2>

            <p>SEO optimizes for rankings in search results. AEO optimizes for citations within AI-generated answers. This is a fundamentally different objective that requires different content structure, authority positioning, and technical implementation.</p>

            {/* ── COMPARISON TABLE ── */}
            <table className="ae-comparison-table not-prose">
              <thead>
                <tr>
                  <th>Factor</th>
                  <th>Traditional SEO</th>
                  <th>Answer Engine Optimization</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Primary Goal</td>
                  <td>Rank on page one of Google</td>
                  <td>Get cited as the answer by AI</td>
                </tr>
                <tr>
                  <td>Target Platforms</td>
                  <td>Google, Bing search results</td>
                  <td>ChatGPT, Claude, Perplexity, Google AI Overviews</td>
                </tr>
                <tr>
                  <td>Content Strategy</td>
                  <td>Keyword-optimized pages targeting search intent</td>
                  <td>Hub-and-spoke authority architecture with direct answers</td>
                </tr>
                <tr>
                  <td>Authority Signal</td>
                  <td>Backlink volume and domain authority</td>
                  <td>Cross-platform entity validation and expertise depth</td>
                </tr>
                <tr>
                  <td>Competition Model</td>
                  <td>Rank higher than competitors (relative)</td>
                  <td>Pass the authority threshold or get nothing (absolute)</td>
                </tr>
                <tr>
                  <td>User Behavior</td>
                  <td>User scrolls through 10 results and clicks</td>
                  <td>User receives one answer and acts on it</td>
                </tr>
                <tr>
                  <td>Results Per Query</td>
                  <td>10 organic results on page one</td>
                  <td>2-3 businesses cited maximum</td>
                </tr>
                <tr>
                  <td>Technical Focus</td>
                  <td>Page speed, mobile-first, meta tags</td>
                  <td>Schema markup, entity optimization, content structuring</td>
                </tr>
              </tbody>
            </table>

            <p>Understanding this distinction is critical because most local businesses are still playing the wrong game. Traditional SEO asks: &quot;How do I rank on page one?&quot; Answer Engine Optimization asks: &quot;How do I become the answer AI trusts most?&quot; These are completely different questions requiring completely different strategies.</p>

            {/* ── PROS/CONS ── */}
            <div className="ae-pros-cons not-prose">
              <div className="ae-pros-box">
                <div className="ae-pros-title">What SEO Still Does Well</div>
                <ul>
                  <li>Drives traffic from traditional search queries</li>
                  <li>Establishes baseline web presence</li>
                  <li>Supports local map pack visibility</li>
                  <li>Provides measurable ranking data</li>
                  <li>Works for non-AI-covered queries</li>
                </ul>
              </div>
              <div className="ae-cons-box">
                <div className="ae-cons-title">Where SEO Alone Falls Short</div>
                <ul>
                  <li>Rankings mean nothing when AI Overviews appear above them</li>
                  <li>Zero-click searches bypass organic results entirely</li>
                  <li>Backlink-focused authority does not translate to AI trust</li>
                  <li>No strategy for ChatGPT, Claude, or Perplexity visibility</li>
                  <li>Cannot compete for voice search recommendations</li>
                </ul>
              </div>
            </div>

            <div className="ae-takeaway not-prose">
              <div className="ae-takeaway-title">Key Takeaway</div>
              <p>SEO was competitive (rank higher than competitors). AEO is absolute (pass the authority threshold or do not get cited at all). Traditional SEO let mediocre businesses win through brute-force link building. AEO requires actual demonstrable expertise.</p>
            </div>

            {/* ── CTA 5 ── */}
            <div className="ae-cta-inline not-prose">
              <p>Still relying on SEO alone? Find out what you are missing.</p>
              <a href="mailto:support@theanswerengine.ai">Email Us for a Strategy Review &rarr;</a>
            </div>

            {/* ══════════════════════════════════════════ */}
            {/* SECTION 5: How to Get Recommended */}
            {/* ══════════════════════════════════════════ */}
            <span className="ae-section-label">Section 5</span>
            <h2>How to Get AI Platforms to Recommend Your Business</h2>

            <p>Multi-platform AI citation requires building layered authority through hub-and-spoke content architecture, comprehensive schema implementation, entity optimization, and consistent cross-platform presence. This is a systematic approach that typically takes 90 days to achieve measurable results.</p>

            {/* ── DECISION MATRIX ── */}
            <div className="ae-decision-matrix not-prose">
              <div className="ae-decision-matrix-title">The 6-Layer Authority Framework</div>
              <table>
                <thead>
                  <tr>
                    <th>Layer</th>
                    <th>What AI Evaluates</th>
                    <th>What You Need</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Answer Quality</td>
                    <td>Does your content directly answer queries with real expertise?</td>
                    <td>Comprehensive guides, specific examples, unique insights</td>
                  </tr>
                  <tr>
                    <td>Entity Optimization</td>
                    <td>Is your business information consistent everywhere?</td>
                    <td>Google Business Profile, directories, social profiles aligned</td>
                  </tr>
                  <tr>
                    <td>Content Depth</td>
                    <td>Do you have comprehensive topical coverage?</td>
                    <td>Hub-and-spoke architecture with 4-6 spoke articles per hub</td>
                  </tr>
                  <tr>
                    <td>Technical Structure</td>
                    <td>Can AI extract and interpret your content?</td>
                    <td>Schema markup: LocalBusiness, FAQ, Article, Organization</td>
                  </tr>
                  <tr>
                    <td>Voice Authenticity</td>
                    <td>Does your content sound like a real expert?</td>
                    <td>Authentic examples, specific data, genuine methodology</td>
                  </tr>
                  <tr>
                    <td>Authority Signals</td>
                    <td>Do third parties validate your expertise?</td>
                    <td>Reviews, mentions, backlinks, industry recognition</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>Getting AI platforms to recommend your business is not simple, but it follows a predictable pattern when you understand what AI systems actually evaluate.</p>

            {/* ── CHEAT SHEET ── */}
            <div className="ae-cheat-sheet not-prose">
              <div className="ae-cheat-sheet-title">Implementation Roadmap (90-Day Plan)</div>
              <ul>
                <li><strong>Days 1-15:</strong> Audit current AI visibility across ChatGPT, Claude, Perplexity, and Google AI Overviews</li>
                <li><strong>Days 15-30:</strong> Build hub-and-spoke content architecture with comprehensive guides and spoke articles</li>
                <li><strong>Days 30-45:</strong> Implement technical schema markup across all pages (LocalBusiness, FAQ, Article, HowTo)</li>
                <li><strong>Days 45-60:</strong> Optimize entity recognition with consistent NAP across 30+ directories</li>
                <li><strong>Days 60-75:</strong> Launch review acquisition campaign to build third-party validation signals</li>
                <li><strong>Days 75-90:</strong> Monitor AI citations, refine content gaps, and optimize underperforming authority layers</li>
              </ul>
            </div>

            <p>Hub-and-spoke content architecture drives the strongest citation results. You create one comprehensive guide (the hub) covering your core expertise area, supported by 4-6 detailed articles (spokes) covering specific sub-topics. The hub establishes broad authority. The spokes prove depth. AI systems preferentially cite businesses with this documented depth rather than businesses with scattered blog posts.</p>

            <div className="ae-callout ae-callout-success not-prose">
              <div className="ae-callout-title">What Makes Schema Markup Critical</div>
              <p>Schema markup tells AI systems what your information means, not just what it says. LocalBusiness schema establishes your entity. FAQ schema makes answers extractable. Organization schema proves legitimacy. Platforms that cannot interpret your schema will not cite you, even if your content is excellent.</p>
            </div>

            {/* ── CTA 6 ── */}
            <div className="ae-cta-inline not-prose">
              <p>Need help building your authority foundation? Talk to our team.</p>
              <a href="tel:+12134442229">Call (213) 444-2229 &rarr;</a>
            </div>

            {/* ── BAR CHART: Platform Citation Priorities ── */}
            <h3>What Each AI Platform Prioritizes</h3>

            <div className="ae-bar-group not-prose">
              <h3>Google AI Overview Priorities</h3>
              <div className="ae-bar-item">
                <span className="ae-bar-label">Structured Data/Schema</span>
                <div className="ae-bar-track"><div className="ae-bar-fill" style={{width:'95%'}}></div></div>
                <span className="ae-bar-value">95%</span>
              </div>
              <div className="ae-bar-item">
                <span className="ae-bar-label">Featured Snippet Optimization</span>
                <div className="ae-bar-track"><div className="ae-bar-fill" style={{width:'88%'}}></div></div>
                <span className="ae-bar-value">88%</span>
              </div>
              <div className="ae-bar-item">
                <span className="ae-bar-label">Entity Recognition</span>
                <div className="ae-bar-track"><div className="ae-bar-fill" style={{width:'82%'}}></div></div>
                <span className="ae-bar-value">82%</span>
              </div>
              <div className="ae-bar-item">
                <span className="ae-bar-label">Content Depth</span>
                <div className="ae-bar-track"><div className="ae-bar-fill" style={{width:'75%'}}></div></div>
                <span className="ae-bar-value">75%</span>
              </div>
            </div>

            <div className="ae-bar-group not-prose">
              <h3>ChatGPT Citation Priorities</h3>
              <div className="ae-bar-item">
                <span className="ae-bar-label">Authentic Voice &amp; Expertise</span>
                <div className="ae-bar-track"><div className="ae-bar-fill" style={{width:'92%'}}></div></div>
                <span className="ae-bar-value">92%</span>
              </div>
              <div className="ae-bar-item">
                <span className="ae-bar-label">Comprehensive Explanations</span>
                <div className="ae-bar-track"><div className="ae-bar-fill" style={{width:'88%'}}></div></div>
                <span className="ae-bar-value">88%</span>
              </div>
              <div className="ae-bar-item">
                <span className="ae-bar-label">Cross-Platform Validation</span>
                <div className="ae-bar-track"><div className="ae-bar-fill" style={{width:'80%'}}></div></div>
                <span className="ae-bar-value">80%</span>
              </div>
              <div className="ae-bar-item">
                <span className="ae-bar-label">Review Quality &amp; Volume</span>
                <div className="ae-bar-track"><div className="ae-bar-fill" style={{width:'75%'}}></div></div>
                <span className="ae-bar-value">75%</span>
              </div>
            </div>

            {/* ── CTA 7 ── */}
            <div className="ae-cta-inline not-prose">
              <p>Get optimized across all AI platforms with a single strategy.</p>
              <Link href="/blindspot">Start With Your Free Blind Spot Report &rarr;</Link>
            </div>

            {/* ══════════════════════════════════════════ */}
            {/* SECTION 6: Is It Worth It? */}
            {/* ══════════════════════════════════════════ */}
            <span className="ae-section-label">Section 6</span>
            <h2>Is Answer Engine Optimization Worth It for Your Business?</h2>

            <p>AEO delivers ROI for local service businesses when average customer lifetime value exceeds $2,000, deal cycles are short, and expertise differentiation is your primary competitive advantage. However, it requires a 90+ day commitment and systematic implementation most businesses cannot execute alone.</p>

            {/* ── DECISION MATRIX: Is AEO Right for You? ── */}
            <div className="ae-decision-matrix not-prose">
              <div className="ae-decision-matrix-title">Is AEO Right for Your Business?</div>
              <table>
                <thead>
                  <tr>
                    <th>Factor</th>
                    <th>AEO is a Great Fit</th>
                    <th>AEO May Not Be Right</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Customer LTV</td>
                    <td>Above $2,000 per customer</td>
                    <td>Below $500 per transaction</td>
                  </tr>
                  <tr>
                    <td>Competitive Edge</td>
                    <td>Expertise and trust differentiation</td>
                    <td>Compete purely on lowest price</td>
                  </tr>
                  <tr>
                    <td>Business Model</td>
                    <td>Service-based with ongoing relationships</td>
                    <td>Commodity/transactional one-time sales</td>
                  </tr>
                  <tr>
                    <td>Revenue</td>
                    <td>$100K-$2M annual revenue</td>
                    <td>Pre-revenue or startup phase</td>
                  </tr>
                  <tr>
                    <td>Timeline Patience</td>
                    <td>Willing to commit 90+ days</td>
                    <td>Need results within 30 days</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>The businesses that benefit most from AEO share specific characteristics. They have customer lifetime values above $2,000 (real estate, financial services, skilled trades with ongoing relationships). They operate in markets where trust and expertise matter more than price. They have genuine expertise or a unique methodology they can demonstrate through content.</p>

            {/* ── STATS GRID: ROI Numbers ── */}
            <div className="ae-stats-grid not-prose">
              <div className="ae-stat-card">
                <div className="ae-stat-emoji">💰</div>
                <div className="ae-stat-value ae-accent">50-70%</div>
                <div className="ae-stat-label">lower cost per lead from AI citations vs paid advertising</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-emoji">🎯</div>
                <div className="ae-stat-value ae-accent">Higher</div>
                <div className="ae-stat-label">close rates from AI-referred leads vs cold outreach</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-emoji">📈</div>
                <div className="ae-stat-value ae-accent">Premium</div>
                <div className="ae-stat-label">pricing power when AI positions you as the expert</div>
              </div>
            </div>

            <div className="ae-callout ae-callout-warning not-prose">
              <div className="ae-callout-title">The Cost of Doing Nothing</div>
              <p>If you choose not to optimize for AI citation, understand what you are choosing: declining organic traffic as AI Overviews capture more queries, increasing dependence on expensive paid advertising, and loss of market authority to competitors who do optimize. The alternative to AEO is not the status quo. The alternative is permanent decline.</p>
            </div>

            {/* ── CTA 8 ── */}
            <div className="ae-cta-inline not-prose">
              <p>Ready to find out where you stand? It takes less than 48 hours.</p>
              <Link href="/blindspot">Get Your Free Blind Spot Report &rarr;</Link>
            </div>

            {/* ══════════════════════════════════════════ */}
            {/* RELATED DEEP DIVES */}
            {/* ══════════════════════════════════════════ */}
            <span className="ae-section-label">Go Deeper</span>
            <h2>Explore Each Topic in Detail</h2>

            <p>Each section of this guide has a dedicated deep-dive article with expanded data, examples, and implementation steps:</p>

            <div className="ae-cheat-sheet not-prose">
              <div className="ae-cheat-sheet-title">Related Deep-Dive Articles</div>
              <ul>
                <li><Link href="/blog/google-rankings-dont-matter">Why Your Google Rankings No Longer Generate Leads</Link></li>
                <li><Link href="/blog/how-ai-platforms-choose-businesses-to-cite">How AI Platforms Decide Which Businesses to Cite</Link></li>
                <li><Link href="/blog/why-businesses-fail-answer-engine-optimization">Why Your Google Traffic Dropped in 2025</Link></li>
                <li><Link href="/blog/what-is-answer-engine-optimization">What Is Answer Engine Optimization?</Link></li>
                <li><Link href="/blog/how-to-get-google-ai-chatgpt-recommend-business">How to Get Google AI and ChatGPT to Recommend Your Business</Link></li>
                <li><Link href="/blog/is-answer-engine-optimization-worth-it">Is Answer Engine Optimization Worth It?</Link></li>
              </ul>
            </div>

            {/* ── CTA 9 ── */}
            <div className="ae-cta-inline not-prose">
              <p>Have questions about any of these topics? Our team is here to help.</p>
              <a href="mailto:support@theanswerengine.ai">Email support@theanswerengine.ai &rarr;</a>
            </div>

            {/* ══════════════════════════════════════════ */}
            {/* FAQ SECTION */}
            {/* ══════════════════════════════════════════ */}
            <span className="ae-section-label">FAQ</span>
            <h2>Frequently Asked Questions About Answer Engine Optimization</h2>

            <h3>How long does it take to see results from AEO?</h3>
            <p>Most local service businesses see first AI citations within 60-90 days of implementing comprehensive authority optimization. Some low-competition queries produce faster results (30-45 days), while highly competitive local markets may require 120 days or more. The timeline depends on your current authority baseline, competitive intensity, and implementation quality. Anyone promising instant or guaranteed AI citations is misleading you.</p>

            <h3>Can I do Answer Engine Optimization myself, or do I need to hire someone?</h3>
            <p>Technically possible but practically difficult for most local service business owners. Effective AEO requires expertise in content strategy, technical SEO, schema markup, entity optimization, and AI platform evaluation. Most owners lack both the expertise and time to execute properly. DIY attempts usually produce mediocre content that does not achieve citations. Professional implementation dramatically increases citation probability compared to DIY approaches.</p>

            {/* ── CTA 10 ── */}
            <div className="ae-cta-inline not-prose">
              <p>Considering DIY vs professional AEO? Let us show you what&apos;s involved.</p>
              <a href="tel:+12134442229">Call (213) 444-2229 &rarr;</a>
            </div>

            <h3>What is the difference between getting cited by Google vs. ChatGPT vs. Perplexity?</h3>
            <p>Each platform uses different authority evaluation priorities. Google AI Overviews weight structured data and featured snippet optimization highest. ChatGPT prioritizes authentic voice and comprehensive explanations. Perplexity focuses on citation diversity and source quality. Claude evaluates expertise depth and logical structure. Comprehensive AEO strategy addresses all platforms, but optimization emphasis varies based on where your target customers actually search.</p>

            <h3>Will Answer Engine Optimization hurt my traditional SEO rankings?</h3>
            <p>No. AEO is complementary to SEO, not competitive. Proper implementation actually improves traditional rankings through better content quality, technical optimization, and authority signals. The difference: SEO alone no longer drives sufficient leads because AI Overviews appear above organic results. You need both ranking AND citation to capture modern search traffic. Think of AEO as the next evolution of SEO rather than a replacement.</p>

            {/* ── CTA 11 ── */}
            <div className="ae-cta-inline not-prose">
              <p>Want to see how AEO and SEO work together for your business?</p>
              <Link href="/blindspot">Get Your Free Blind Spot Report &rarr;</Link>
            </div>

            <h3>How much does Answer Engine Optimization cost for a local service business?</h3>
            <p>Foundational implementation includes voice capture, hub-and-spoke content creation, technical schema implementation, entity optimization, and a 90-day performance guarantee. Ongoing content updates and maintenance add to the investment depending on competitive intensity and content velocity required. ROI calculation: if one AI-sourced client per quarter covers the annual investment, AEO is profitable. For most service businesses with $2,000+ customer lifetime values, the math works out within the first quarter.</p>

            <h3>What makes some local businesses get AI citations while competitors do not?</h3>
            <p>AI platforms evaluate layered authority across six dimensions: answer quality that directly addresses queries with expertise, entity optimization ensuring consistent business information everywhere, relevance through comprehensive and fresh content, optimization structure with proper technical implementation, voice authenticity demonstrating genuine expertise through specific examples, and authority signals from reviews and third-party validation. Businesses that systematically address all six dimensions get citations. Businesses that address only one or two do not.</p>

            {/* ── CTA 12 ── */}
            <div className="ae-cta-inline not-prose">
              <p>Not sure which authority dimensions your business is missing?</p>
              <a href="mailto:support@theanswerengine.ai">Email Us for a Free Assessment &rarr;</a>
            </div>

            <h3>Can paid advertising help me get AI citations faster?</h3>
            <p>No. AI citations are editorial, not paid placement. Running Google Ads or social media ads does not influence whether AI platforms cite your business. You cannot buy AI citations. The only path to citation is earning authority through comprehensive content, technical optimization, and cross-platform validation. Some businesses run paid advertising while building AEO authority to maintain lead flow during the 90-day ramp period, but advertising does not accelerate the citation timeline.</p>

            <h3>What industries benefit most from Answer Engine Optimization?</h3>
            <p>Local service businesses with high customer lifetime value and expertise differentiation see strongest ROI: real estate agents and teams, financial advisors and tax strategists, home inspectors and specialized contractors, legal professionals and consultants, healthcare practitioners, and B2B service providers. Industries competing primarily on price (commodity services, low-margin work, transactional relationships) see limited AEO benefit because AI platforms do not cite based on lowest price. They cite based on highest expertise.</p>

            {/* ── CTA 13 ── */}
            <div className="ae-cta-inline not-prose">
              <p>Is your industry a good fit for AEO? Find out in 48 hours.</p>
              <Link href="/blindspot">Get Your Free Blind Spot Report &rarr;</Link>
            </div>

            {/* ══════════════════════════════════════════ */}
            {/* CTA BLOCK */}
            {/* ══════════════════════════════════════════ */}
            <div className="ae-cta-block not-prose">
              <h3>Ready to Stop Competing on Price and Become the AI-Recommended Expert?</h3>
              <p>The businesses dominating AI citations right now are not the biggest companies or the ones with the most marketing budget. They are the ones that recognized this shift early and systematically built the authority that AI platforms trust. If you are a local service business with genuine expertise, the window to establish AI dominance in your market is open right now.</p>
              <Link href="/blindspot">Get Your Free Blind Spot Report &rarr;</Link>
            </div>

            {/* ── CTA 14 ── */}
            <div className="ae-cta-inline not-prose">
              <p>Prefer to talk through your options? Our team is available by phone.</p>
              <a href="tel:+12134442229">Call (213) 444-2229 for a Free Consultation &rarr;</a>
            </div>

            {/* ══════════════════════════════════════════ */}
            {/* ABOUT SECTION */}
            {/* ══════════════════════════════════════════ */}
            <span className="ae-section-label">About</span>
            <h2>About The Answer Engine</h2>

            <p>The Answer Engine specializes in helping local service businesses become the trusted authority AI platforms cite instead of competitors. Founded in 2025, we recognized that traditional SEO no longer drives sufficient leads for local businesses because AI Overviews and AI search platforms capture queries before users ever click organic results.</p>

            <p>Our approach systematically builds the layered authority AI platforms require for citation through voice-captured expertise, hub-and-spoke content architecture, comprehensive technical optimization, and cross-platform entity validation. Unlike traditional SEO agencies that focus on rankings, we focus on citations. Whoever AI cites becomes the authority, and whoever becomes the authority gets the business.</p>

            <p>We work exclusively with local service businesses earning $100K-$2M annually who compete on expertise rather than price. Our clients include real estate professionals, financial advisors, home inspectors, specialized contractors, legal and healthcare practitioners, and B2B service providers across the United States.</p>

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
                <p style={{ marginTop: 8, fontSize: '0.875rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.6 }}>Justin Borges founded The Answer Engine in 2025 after 13+ years in real estate, $200M+ in production, and discovering that AI search rankings now decide who gets cited as the answer. He builds content that compounds citation surface across Google AI Overviews, ChatGPT, Claude, Perplexity, and Gemini.</p>
              </div>
            </div>

            {/* ── CTA 15 ── */}
            <div className="ae-cta-inline not-prose">
              <p>Questions about anything in this guide? Reach out directly.</p>
              <a href="mailto:support@theanswerengine.ai">Email support@theanswerengine.ai &rarr;</a>
            </div>

          </div>

          {/* ── FINAL CTA ── */}
          <div className="ae-final-cta">
            <div className="ae-final-cta-pulse"></div>
            <h2>Is AI Recommending Your Competitors Instead of You?</h2>
            <p>Most businesses have no idea whether AI platforms are sending them customers or sending customers to their competitors. Our free blind spot report shows you exactly where you stand, which competitors AI is citing, and what it would take to become the recommended answer in your market.</p>
            <Link href="/blindspot" className="ae-cta-primary">Get Your Free Blind Spot Report</Link>
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
          </div>

        </article>
      </main>
    </>
  );
}
