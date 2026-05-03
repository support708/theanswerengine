import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Why Your Website Stopped Getting Calls (The Shift Nobody Told You About)',
  description: 'Nearly 60% of searches now end without a click because AI answers questions directly. Learn why your website traffic looks fine but calls have dropped — and how to fix it.',
  alternates: { canonical: 'https://www.theanswerengine.ai/blog/website-stopped-getting-calls' },
  openGraph: {
    title: 'Why Your Website Stopped Getting Calls',
    description: 'Nearly 60% of searches end without a click. AI answers questions directly and recommends one business — learn why your calls dropped and how to fix it.',
    type: 'article',
    url: 'https://www.theanswerengine.ai/blog/website-stopped-getting-calls',
    siteName: 'The Answer Engine',
    images: [{ url: 'https://www.theanswerengine.ai/og-default.png', width: 1200, height: 630, alt: 'Why Your Website Stopped Getting Calls' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Why Your Website Stopped Getting Calls',
    description: 'Nearly 60% of searches end without a click. Learn why calls dropped and how to fix your AI visibility.',
    site: '@theanswerengine',
    images: ['https://www.theanswerengine.ai/og-default.png'],
  },
};

export default function BlogPost() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "Why Your Website Stopped Getting Calls (The Shift Nobody Told You About)",
        "description": "Nearly 60% of searches now end without a click because AI answers questions directly. Learn why your website traffic looks fine but calls have dropped.",
        "image": {
          "@type": "ImageObject",
          "url": "https://theanswerengine.ai/website-stopped-getting-calls-featured.png",
          "width": 1024,
          "height": 1024
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
          "name": "The Answer Engine",
          "logo": {
            "@type": "ImageObject",
            "url": "https://theanswerengine.ai/TheAnswerEngine_Color_just_logo.png"
          }
        },
        "datePublished": "2026-01-24",
        "dateModified": "2026-01-24",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://theanswerengine.ai/blog/website-stopped-getting-calls"
        },
        "keywords": "website not getting calls, website traffic but no leads, AI search, zero-click searches, Answer Engine Optimization, AEO, local business marketing",
        "articleSection": "Answer Engine Optimization",
        "wordCount": 1800,
        "inLanguage": "en-US"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Why is my website getting traffic but no phone calls?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Nearly 60% of searches now end without a click because AI answers questions directly. High-intent buyers get recommendations from AI and call that business without ever visiting a website."
            }
          },
          {
            "@type": "Question",
            "name": "How do I know if AI is recommending my competitors instead of me?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ask ChatGPT, Google AI Overview, and Perplexity 'Who's the best [your service] in [your city]?' If your competitor shows up consistently and you don't, AI is sending them your potential customers."
            }
          },
          {
            "@type": "Question",
            "name": "Does ChatGPT use my Google Business Profile?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. ChatGPT uses Bing's web index, not Google's data. You need to claim Bing Places and ensure your information is consistent across platforms AI actually reads."
            }
          },
          {
            "@type": "Question",
            "name": "What changed about how people find local businesses?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "AI assistants now answer questions directly instead of showing a list of websites. When someone asks for a recommendation, AI gives one or two answers-not ten."
            }
          },
          {
            "@type": "Question",
            "name": "Can I still get leads if I'm not showing up in AI recommendations?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, but you're competing for a shrinking pool. Only about 40% of searches result in website clicks anymore. Businesses in AI recommendations get access to the other 60%."
            }
          },
          {
            "@type": "Question",
            "name": "How long does it take to start showing up in AI recommendations?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Businesses implementing comprehensive AI visibility strategies typically see changes within 90-120 days through consistent authority signals across multiple platforms."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
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
            "name": "Why Your Website Stopped Getting Calls",
            "item": "https://theanswerengine.ai/blog/website-stopped-getting-calls"
          }
        ]
      }
    ]
  };

  return (
    <>
      {/* Schema Markup - @graph structure */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-[#0A0A0F]">
        <article className="max-w-4xl mx-auto px-6 py-12 sm:py-16">
          {/* Breadcrumbs */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">&rsaquo;</span>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <span className="mx-2">&rsaquo;</span>
            <span className="text-gray-400">Why Your Website Stopped Getting Calls</span>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl mb-6 bg-white/[0.04] border border-white/[0.08]">
              <span className="text-sm font-semibold tracking-wider uppercase text-white">AI Visibility</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-white leading-tight">
              Why Your Website Stopped Getting Calls <span className="text-gray-400">(The Shift Nobody Told You About)</span>
            </h1>

            {/* Featured Image */}
            <div className="mb-8 rounded-xl overflow-hidden border border-white/[0.05]">
              <img
                src="/website-stopped-getting-calls-featured.png"
                alt="Why your website stopped getting calls: Nearly 60% of searches now end without a click as AI answers questions directly"
                className="w-full grayscale brightness-75"
              />
            </div>

            {/* Featured Snippet Block */}
            <div className="bg-gradient-to-br from-white/[0.02] to-white/[0.02] border border-white/[0.08] rounded-xl p-6 mb-8">
              <p className="text-lg text-white leading-relaxed">
                <strong>Your website traffic looks fine, but the phone stopped ringing because nearly 60% of searches now end without anyone clicking a website.</strong> AI answers questions directly, and callers go straight to whoever AI recommends. If AI is not recommending your business, those buyers never see your website at all.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>January 24, 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>8 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>Justin Borges</span>
              </div>
            </div>
          </header>

          {/* ══════════════ PROSE WRAPPER ══════════════ */}
          <div className="prose prose-invert prose-lg max-w-none prose-headings:font-plus-jakarta prose-headings:text-white prose-p:text-gray-300 prose-a:text-[#F27D24] prose-a:no-underline hover:prose-a:underline prose-strong:text-white">

            {/* ── STATS GRID ── */}
            <div className="ae-stats-grid not-prose">
              <div className="ae-stat-card">
                <div className="ae-stat-emoji">📉</div>
                <div className="ae-stat-value ae-accent">58.5%</div>
                <div className="ae-stat-label">of U.S. Google searches end without a single website click</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-emoji">🤖</div>
                <div className="ae-stat-value ae-accent">1-2</div>
                <div className="ae-stat-label">businesses AI recommends per query vs. 10 blue links on Google</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-emoji">📞</div>
                <div className="ae-stat-value ae-accent">0</div>
                <div className="ae-stat-label">calls you get when AI recommends your competitor instead of you</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-emoji">⏳</div>
                <div className="ae-stat-value ae-accent">6-12 mo</div>
                <div className="ae-stat-label">head start early movers get before AI trust signals compound</div>
              </div>
            </div>

            {/* ── INTRODUCTION ── */}
            <span className="ae-section-label">The Problem</span>
            <h2>Your Website Traffic Looks Fine. So Why Did the Phone Stop Ringing?</h2>

            <p>Your website traffic is steady. Maybe it is even up from last year. But the phone stopped ringing. Leads dried up. The inbox is quiet.</p>

            <p>You are not imagining it. Something fundamental changed in how people find and choose local businesses, and most business owners have no idea it happened.</p>

            <p>The culprit: <strong>AI-powered search</strong>. Nearly 60% of Google searches now end without anyone clicking a website. According to <a href="https://sparktoro.com/blog/2024-zero-click-search-study-for-every-1000-us-google-searches-only-374-clicks-go-to-the-open-web/" target="_blank" rel="noopener noreferrer">SparkToro and Datos research (2024)</a>, people get their answers directly from AI and call whoever AI recommends. If AI is not recommending your business, those callers never see your website.</p>

            <div className="ae-quote not-prose">
              <p>Your website did not break. The way people find businesses did. AI now answers questions directly, and the businesses it recommends get the calls.</p>
            </div>

            {/* ── CTA 1 ── */}
            <div className="ae-cta-inline not-prose">
              <p>Find out if AI is recommending your business or sending customers to competitors.</p>
              <Link href="/blindspot">Get Your Free Blind Spot Report &rarr;</Link>
            </div>

            {/* ── THE SHIFT ── */}
            <span className="ae-section-label">The Shift</span>
            <h2>What Changed: The Zero-Click Revolution</h2>

            <p>Here is the core of the problem: <strong>58.5% of U.S. searches and 59.7% of EU searches end without anyone visiting any website.</strong> People get their answer from AI and act on it immediately.</p>

            <p>When someone asks &quot;Who is the best plumber in Phoenix?&quot; or &quot;Find me a home inspector near me,&quot; they are not scrolling through 10 blue links. They are asking ChatGPT. They are using Google&apos;s AI Overview. They are talking to Siri, Alexa, or Claude.</p>

            <p>Those AI systems give one answer. Maybe two. <strong>If you are not that answer, you do not exist to those searchers.</strong></p>

            {/* ── BAR CHART: ZERO-CLICK BREAKDOWN ── */}
            <div className="ae-bar-group not-prose">
              <div className="ae-bar-item">
                <div className="ae-bar-label">Searches ending without a click (zero-click)</div>
                <div className="ae-bar-track"><div className="ae-bar-fill" style={{width:'58%'}}></div></div>
                <div className="ae-bar-value">58.5%</div>
              </div>
              <div className="ae-bar-item">
                <div className="ae-bar-label">Clicks going to the open web</div>
                <div className="ae-bar-track"><div className="ae-bar-fill" style={{width:'37%'}}></div></div>
                <div className="ae-bar-value">37.4%</div>
              </div>
              <div className="ae-bar-item">
                <div className="ae-bar-label">Clicks staying on Google properties</div>
                <div className="ae-bar-track"><div className="ae-bar-fill" style={{width:'4%'}}></div></div>
                <div className="ae-bar-value">4.1%</div>
              </div>
            </div>

            <p>The high-intent buyers, the people ready to hire someone today, are getting their answer from AI before they ever reach your website. You are left with the tire-kickers and price-shoppers.</p>

            {/* ── CALLOUT: COMPETITOR INSIGHT ── */}
            <div className="ae-callout ae-callout-warning not-prose">
              <div className="ae-callout-title">Why Your Competitor Seems Busier Than Ever</div>
              <p>Meanwhile, that competitor (you know the one) seems busier than ever. Same market. Same services. But their phone keeps ringing. They are not running better ads. They do not have a bigger budget. <strong>They are the business AI recommends.</strong> That single difference is worth thousands in monthly revenue.</p>
            </div>

            {/* ── CTA 2 ── */}
            <div className="ae-cta-inline not-prose">
              <p>Curious what AI actually says about your business? Ask us. We will check for free.</p>
              <a href="mailto:support@theanswerengine.ai">Email support@theanswerengine.ai &rarr;</a>
            </div>

            {/* ── COMPARISON TABLE: OLD VS. NEW ── */}
            <span className="ae-section-label">Before &amp; After</span>
            <h2>The Old Way vs. The New Way Customers Find Businesses</h2>

            <p>The customer journey has fundamentally changed. Here is a side-by-side look at what happened.</p>

            <div className="ae-comparison-table not-prose">
              <table>
                <thead>
                  <tr>
                    <th>Before (2020-2023)</th>
                    <th>Now (2025+)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Customer searches Google</td>
                    <td><strong>Customer asks AI for a recommendation</strong></td>
                  </tr>
                  <tr>
                    <td>Sees 10 website results</td>
                    <td><strong>Gets 1-2 business names directly</strong></td>
                  </tr>
                  <tr>
                    <td>Clicks 2-3 websites to compare</td>
                    <td><strong>Calls the recommended business immediately</strong></td>
                  </tr>
                  <tr>
                    <td>Evaluates, then calls</td>
                    <td><strong>Never visits any website</strong></td>
                  </tr>
                  <tr>
                    <td>Your SEO investment pays off</td>
                    <td><strong>Your website is bypassed entirely</strong></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>This is not a gradual change. It is a structural shift. The pipeline that once connected your website to phone calls has been rerouted through AI, and most businesses have not adapted.</p>

            {/* ── CTA 3 (tel) ── */}
            <div className="ae-cta-inline not-prose">
              <p>Want to talk about what this means for your specific business? Call us directly.</p>
              <a href="tel:+12134442229">Call (213) 444-2229 &rarr;</a>
            </div>

            {/* ── THREE REASONS ── */}
            <span className="ae-section-label">Root Causes</span>
            <h2>The Three Reasons AI Is Not Recommending You</h2>

            <p>When AI platforms decide which business to recommend, they are not looking at what you think. Here are the three most common reasons businesses get skipped.</p>

            {/* ── TIMELINE: 3 REASONS ── */}
            <div className="ae-timeline not-prose">
              <div className="ae-timeline-item">
                <strong>Reason 1: You Are Invisible to the Right Platforms</strong>
                <p>ChatGPT does not read your Google Business Profile. It uses Bing&apos;s web index. Most business owners have never claimed their Bing Places listing. They have never thought about whether their business shows up in the data sources AI actually uses. If AI cannot find clear, consistent information about your business, it will not recommend you. Period.</p>
              </div>
              <div className="ae-timeline-item">
                <strong>Reason 2: Your Website Answers the Wrong Questions</strong>
                <p>Traditional SEO taught you to stuff keywords into pages. AI does not work that way. AI is looking for content that directly answers the questions people actually ask: &quot;How do I know if my water heater needs replacing?&quot; or &quot;What should I look for in a home inspector?&quot; If your website reads like a keyword-stuffed brochure, AI will skip right past you.</p>
              </div>
              <div className="ae-timeline-item">
                <strong>Reason 3: You Have No Authority Signals AI Recognizes</strong>
                <p>AI platforms are trying to figure out one thing: Who is the trusted expert in this category? They look for consistent business information across the web, content that demonstrates genuine expertise, reviews on platforms they can access (ChatGPT cannot see Google reviews), and clear signals that a real expert created your content.</p>
              </div>
            </div>

            {/* ── CTA 4 ── */}
            <div className="ae-cta-inline not-prose">
              <p>Not sure which of these three is hurting you? Our free report breaks it down for your business.</p>
              <Link href="/blindspot">Get Your Free Blind Spot Report &rarr;</Link>
            </div>

            {/* ── DECISION MATRIX: WHAT AI CHECKS ── */}
            <span className="ae-section-label">The Signals</span>
            <h2>What AI Actually Looks For (The 4 Authority Signals)</h2>

            <p>Here is what makes AI recommend one business over another. These are the four categories every AI platform evaluates.</p>

            <div className="ae-decision-matrix not-prose">
              <table>
                <thead>
                  <tr>
                    <th>Signal</th>
                    <th>What AI Checks</th>
                    <th>Why It Matters</th>
                    <th>Common Gap</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Platform Presence</strong></td>
                    <td>Bing Places, Apple Maps, data aggregators</td>
                    <td>AI reads these sources, not just Google</td>
                    <td>Only optimized for Google</td>
                  </tr>
                  <tr>
                    <td><strong>Answer-First Content</strong></td>
                    <td>Direct answers to real customer questions</td>
                    <td>AI needs clear answers to cite you</td>
                    <td>Keyword-stuffed service pages</td>
                  </tr>
                  <tr>
                    <td><strong>NAP Consistency</strong></td>
                    <td>Name, address, phone identical everywhere</td>
                    <td>Inconsistencies signal unreliability</td>
                    <td>Outdated listings with old info</td>
                  </tr>
                  <tr>
                    <td><strong>Corroborating Evidence</strong></td>
                    <td>Mentions on industry sites, local media, reviews</td>
                    <td>AI cross-references multiple sources</td>
                    <td>Zero third-party mentions</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>Generic websites with stock photos and copy that could describe any business in your industry? AI ignores them. You need to be specific, consistent, and present across the platforms AI actually reads.</p>

            {/* ── STATS GRID: RESULTS ── */}
            <span className="ae-section-label">Real Results</span>
            <h2>What Happens When You Get This Right</h2>

            <p>One of our clients, a real estate agent in Los Angeles, was invisible to AI 18 months ago. After implementing a hub-and-spoke content strategy optimized for AI visibility, here is what happened.</p>

            <div className="ae-stats-grid not-prose">
              <div className="ae-stat-card">
                <div className="ae-stat-emoji">📈</div>
                <div className="ae-stat-value ae-accent">5,766</div>
                <div className="ae-stat-label">organic clicks in the last 30 days (Google Search Console verified)</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-emoji">🔥</div>
                <div className="ae-stat-value ae-accent">220+</div>
                <div className="ae-stat-label">clicks per day average over the last 7 days</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-emoji">🎯</div>
                <div className="ae-stat-value ae-accent">10,654</div>
                <div className="ae-stat-label">total clicks from strategic content clusters alone</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-emoji">🏆</div>
                <div className="ae-stat-value ae-accent">3,800+</div>
                <div className="ae-stat-label">clicks from a single hub article and its supporting content</div>
              </div>
            </div>

            <p><strong>This is not theory. It is what happens when you become the business AI recommends.</strong> Their top-performing content cluster drives 3,800+ clicks from a single hub article, and a second cluster drives another 3,700+ clicks.</p>

            {/* ── CTA 5 ── */}
            <div className="ae-cta-inline not-prose">
              <p>Ready to see results like these for your business? Start with a free visibility check.</p>
              <Link href="/blindspot">Get Your Free Blind Spot Report &rarr;</Link>
            </div>

            {/* ── PROS/CONS: WHAT TO STOP / WHAT TO START ── */}
            <span className="ae-section-label">Action Plan</span>
            <h2>What Actually Needs to Change</h2>

            <p>This is not about working harder at the marketing you are already doing. It is about shifting your strategy entirely.</p>

            <div className="ae-pros-cons not-prose">
              <div className="ae-cons-box">
                <div className="ae-cons-title">Stop Doing</div>
                <ul>
                  <li>Pouring money into Google Ads (people ask AI before clicking ads)</li>
                  <li>More SEO content (rankings do not matter if AI answers first)</li>
                  <li>More social media posts (not where buying decisions happen)</li>
                  <li>More reviews on Google (ChatGPT cannot see them)</li>
                  <li>Keyword-stuffed service pages that read like brochures</li>
                </ul>
              </div>
              <div className="ae-pros-box">
                <div className="ae-pros-title">Start Doing</div>
                <ul>
                  <li>Claim listings AI actually reads (Bing Places, Apple Maps)</li>
                  <li>Create answer-first content for real customer questions</li>
                  <li>Build authority signals across multiple platforms</li>
                  <li>Get mentioned on industry sites and local publications</li>
                  <li>Show up on ChatGPT, Perplexity, Claude, and Google AI</li>
                </ul>
              </div>
            </div>

            {/* ── CTA 6 (tel) ── */}
            <div className="ae-cta-inline not-prose">
              <p>Not sure where to start? We will walk you through it on a quick call. No pitch, just data.</p>
              <a href="tel:+12134442229">Call (213) 444-2229 &rarr;</a>
            </div>

            {/* ── CHEAT SHEET: 4-STEP FRAMEWORK ── */}
            <div className="ae-cheat-sheet not-prose">
              <div className="ae-cheat-sheet-title">The 4-Step Framework to Become AI&apos;s Recommended Answer</div>
              <ul>
                <li><strong>Step 1: Claim the listings AI reads.</strong> Bing Places. Apple Maps. Data aggregators that feed AI systems. Not just Google.</li>
                <li><strong>Step 2: Create content that answers real questions.</strong> Not keyword pages. Genuine expertise that AI recognizes as authoritative. Structure it so AI can extract clear answers.</li>
                <li><strong>Step 3: Build authority signals AI understands.</strong> Consistent information everywhere. Expert authorship. Schema markup that helps AI understand what you do.</li>
                <li><strong>Step 4: Show up on multiple AI platforms.</strong> ChatGPT, Google AI Overview, Perplexity, Claude. They all pull from different sources. You need visibility on all of them.</li>
              </ul>
            </div>

            {/* ── CTA 7 ── */}
            <div className="ae-cta-inline not-prose">
              <p>Want us to handle all four steps for you? See what we find first.</p>
              <Link href="/blindspot">Get Your Free Blind Spot Report &rarr;</Link>
            </div>

            {/* ── COMPARISON TABLE: PLATFORMS ── */}
            <span className="ae-section-label">Platform Guide</span>
            <h2>Where AI Gets Its Information (And Where You Need to Be)</h2>

            <p>Different AI platforms pull from different data sources. Here is where you need presence to cover all bases.</p>

            <div className="ae-comparison-table not-prose">
              <table>
                <thead>
                  <tr>
                    <th>AI Platform</th>
                    <th>Primary Data Source</th>
                    <th>What It Prioritizes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>ChatGPT</strong></td>
                    <td>Bing web index + training data</td>
                    <td>Content authority, depth, and citations</td>
                  </tr>
                  <tr>
                    <td><strong>Google AI Overview</strong></td>
                    <td>Google index + Knowledge Graph</td>
                    <td>E-E-A-T signals and reviews</td>
                  </tr>
                  <tr>
                    <td><strong>Perplexity</strong></td>
                    <td>Real-time web crawling</td>
                    <td>Source freshness and structured data</td>
                  </tr>
                  <tr>
                    <td><strong>Claude</strong></td>
                    <td>Training data + web search</td>
                    <td>Structured info and citations</td>
                  </tr>
                  <tr>
                    <td><strong>Siri / Alexa</strong></td>
                    <td>Apple Maps / Bing / Yelp</td>
                    <td>Local listings and review volume</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>The takeaway: being great on Google alone is no longer enough. You need comprehensive visibility across every data source these AI platforms use.</p>

            {/* ── CTA 8 (email) ── */}
            <div className="ae-cta-inline not-prose">
              <p>Have a question about which platforms matter for your industry? Send us an email.</p>
              <a href="mailto:support@theanswerengine.ai">Email support@theanswerengine.ai &rarr;</a>
            </div>

            {/* ── THE WINDOW IS CLOSING ── */}
            <span className="ae-section-label">Urgency</span>
            <h2>The Window Is Closing</h2>

            <p>Right now, most of your competitors have not figured this out yet. They are still pouring money into SEO strategies built for 2019. They are still wondering why their rankings look good but calls are down.</p>

            <p><strong>This is your window.</strong></p>

            <p>The businesses that establish themselves as the AI-recommended answer in their market over the next 6-12 months will be nearly impossible to displace. AI systems learn to trust certain sources, and that trust compounds over time.</p>

            {/* ── CALLOUT: URGENCY ── */}
            <div className="ae-callout not-prose">
              <div className="ae-callout-title">First-Mover Advantage Is Real</div>
              <p>The businesses that wait will find themselves invisible to an entire generation of buyers who never learned to scroll through Google results, because they never had to. Early movers who build AI trust signals now will hold those positions for years.</p>
            </div>

            {/* ── CTA 9 ── */}
            <div className="ae-cta-inline not-prose">
              <p>Do not let competitors lock you out of AI recommendations. See where you stand right now.</p>
              <Link href="/blindspot">Get Your Free Blind Spot Report &rarr;</Link>
            </div>

            {/* ── BAR CHART: WHERE YOUR LEADS ARE GOING ── */}
            <span className="ae-section-label">The Numbers</span>
            <h2>Where Your Leads Are Actually Going</h2>

            <p>When AI recommends a competitor instead of you, here is the revenue distribution shift most business owners do not see.</p>

            <div className="ae-bar-group not-prose">
              <div className="ae-bar-item">
                <div className="ae-bar-label">Revenue going to AI-recommended businesses</div>
                <div className="ae-bar-track"><div className="ae-bar-fill" style={{width:'60%'}}></div></div>
                <div className="ae-bar-value">60%</div>
              </div>
              <div className="ae-bar-item">
                <div className="ae-bar-label">Revenue from traditional website clicks</div>
                <div className="ae-bar-track"><div className="ae-bar-fill" style={{width:'30%'}}></div></div>
                <div className="ae-bar-value">30%</div>
              </div>
              <div className="ae-bar-item">
                <div className="ae-bar-label">Revenue from paid ads and social</div>
                <div className="ae-bar-track"><div className="ae-bar-fill" style={{width:'10%'}}></div></div>
                <div className="ae-bar-value">10%</div>
              </div>
            </div>

            <p>The majority of high-intent leads are now flowing through AI recommendations. If you are not the recommended business, you are competing for a smaller and smaller slice of the pie.</p>

            {/* ── TAKEAWAY ── */}
            <div className="ae-takeaway not-prose">
              <strong>Key Takeaway:</strong> Your website did not stop working. The path from &quot;customer has a need&quot; to &quot;customer picks up the phone&quot; now runs through AI. If AI does not recommend you, the call goes to whoever it does recommend.
            </div>

            {/* ── CTA 10 (tel) ── */}
            <div className="ae-cta-inline not-prose">
              <p>Ready to talk strategy? No pitch, just the data on where you stand.</p>
              <a href="tel:+12134442229">Call (213) 444-2229 &rarr;</a>
            </div>

            {/* ── FIND OUT WHERE YOU STAND ── */}
            <span className="ae-section-label">Your Next Move</span>
            <h2>Find Out Where You Stand (Before Your Competitors Do)</h2>

            <p>Before you spend another dollar on marketing, find out what AI actually says about your business. Here is a quick self-test you can run right now.</p>

            {/* ── CHEAT SHEET: SELF-TEST ── */}
            <div className="ae-cheat-sheet not-prose">
              <div className="ae-cheat-sheet-title">Quick Self-Test: Check Your AI Visibility in 2 Minutes</div>
              <ul>
                <li><strong>ChatGPT:</strong> Ask &quot;Who is the best [your service] in [your city]?&quot; and see if your name comes up.</li>
                <li><strong>Google AI Overview:</strong> Search your service + city and look for the AI-generated summary at the top.</li>
                <li><strong>Perplexity:</strong> Ask the same recommendation question and check which businesses get cited.</li>
                <li><strong>Claude:</strong> Ask for a recommendation in your market and see who appears.</li>
                <li><strong>Score yourself:</strong> If you appear on 0-1 platforms but competitors show on 3-4, you have an urgent AI visibility gap.</li>
              </ul>
            </div>

            <p>If you are not being recommended, or worse, if your competitor is, you now know why your phone stopped ringing.</p>

            {/* ── CTA 11 ── */}
            <div className="ae-cta-inline not-prose">
              <p>Skip the manual test. Get a complete AI visibility analysis of your business for free.</p>
              <Link href="/blindspot">Get Your Free Blind Spot Report &rarr;</Link>
            </div>

            {/* ── QUOTE ── */}
            <div className="ae-quote not-prose">
              <p>The question is no longer whether AI will change how customers find businesses. The question is whether you will be the business AI recommends when they ask.</p>
            </div>

            {/* ── CTA 12 (email) ── */}
            <div className="ae-cta-inline not-prose">
              <p>Have questions about AI visibility for your industry? We respond to every email personally.</p>
              <a href="mailto:support@theanswerengine.ai">Email support@theanswerengine.ai &rarr;</a>
            </div>

            {/* ── FAQ ── */}
            <span className="ae-section-label">FAQ</span>
            <h2>Frequently Asked Questions</h2>

            <h3>Why is my website getting traffic but no phone calls?</h3>
            <p>Nearly 60% of searches now end without a click because AI answers questions directly. High-intent buyers, the people ready to hire today, get recommendations from AI and call that business without ever visiting a website. Your traffic may be stable, but you are getting researchers instead of buyers.</p>

            {/* ── CTA 13 ── */}
            <div className="ae-cta-inline not-prose">
              <p>Find out if AI is sending your best leads to competitors.</p>
              <Link href="/blindspot">Get Your Free Blind Spot Report &rarr;</Link>
            </div>

            <h3>How do I know if AI is recommending my competitors instead of me?</h3>
            <p>Test it yourself: ask ChatGPT, Google AI Overview, and Perplexity &quot;Who is the best [your service] in [your city]?&quot; Note which businesses appear. If your competitor shows up consistently and you do not, AI is sending them your potential customers.</p>

            <h3>Does ChatGPT use my Google Business Profile?</h3>
            <p>No. ChatGPT uses Bing&apos;s web index, not Google&apos;s data. This is why many businesses with strong Google presence are invisible to ChatGPT. You need to claim Bing Places and ensure your information is consistent across platforms AI actually reads.</p>

            <h3>What changed about how people find local businesses?</h3>
            <p>AI assistants now answer questions directly instead of showing a list of websites. When someone asks for a recommendation, AI gives one or two answers, not ten. If you are not the recommended business, you are invisible to these searchers who never click through to compare options.</p>

            <h3>Can I still get leads if I am not showing up in AI recommendations?</h3>
            <p>Yes, but you are competing for a shrinking pool. Only about 40% of searches result in website clicks anymore. Businesses that show up in AI recommendations get access to the other 60%, plus they still benefit from traditional search visibility.</p>

            <h3>How long does it take to start showing up in AI recommendations?</h3>
            <p>Results vary, but businesses that implement comprehensive AI visibility strategies typically see changes within 90-120 days. The key is building consistent authority signals across multiple platforms simultaneously, not just optimizing one channel. Learn more about <Link href="/blog/aeo-vs-seo">Answer Engine Optimization vs traditional SEO</Link>.</p>

            {/* ── CTA 14 (tel) ── */}
            <div className="ae-cta-inline not-prose">
              <p>Still have questions? Call us and we will answer them on the spot.</p>
              <a href="tel:+12134442229">Call (213) 444-2229 &rarr;</a>
            </div>

            {/* ── AUTHOR CARD ── */}
            <div className="ae-author-card not-prose">
              <div className="ae-author-info">
                <div className="ae-author-name" style={{ fontWeight: 600 }}>Justin Borges</div>
                <p>We help local service businesses become the answer when customers ask AI for recommendations. Our clients see results like 5,700+ monthly organic clicks and dominant positions across entire topic categories. Every insight in this article comes from real client data and verified AI platform behavior.</p>
                <div className="ae-author-links">
                  <Link href="/blog">Read More Articles</Link>
                  <span>|</span>
                  <a href="mailto:support@theanswerengine.ai">Contact Us</a>
                </div>
              </div>
            </div>

            {/* ── CTA BLOCK ── */}
            <div className="ae-cta-block not-prose">
              <h3>Is AI Sending Customers to Your Competitors?</h3>
              <p>Most businesses have no idea whether AI platforms are sending them customers or routing them to competitors. Our free blind spot report shows you exactly where you stand across ChatGPT, Google AI, Perplexity, Claude, and more.</p>
              <Link href="/blindspot">Get Your Free Blind Spot Report &rarr;</Link>
              <div className="flex flex-wrap items-center gap-6 mt-4 pt-4 border-t border-white/10">
                <a href="tel:+12134442229" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  (213) 444-2229
                </a>
                <a href="mailto:support@theanswerengine.ai" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  support@theanswerengine.ai
                </a>
              </div>
            </div>

            {/* ── FINAL CTA ── */}
            <div className="ae-final-cta not-prose">
              <h2>Your Website Did Not Break. The Rules Changed.</h2>
              <p>AI now decides which businesses get the calls. Find out if you are the answer, or if your competitors are getting every lead AI sends.</p>
              <Link href="/blindspot" className="ae-final-cta-pulse">Get Your Free Blind Spot Report &rarr;</Link>
              <div className="flex flex-wrap justify-center items-center gap-6 mt-6">
                <a href="tel:+12134442229" className="text-gray-400 hover:text-white transition-colors text-sm">(213) 444-2229</a>
                <a href="mailto:support@theanswerengine.ai" className="text-gray-400 hover:text-white transition-colors text-sm">support@theanswerengine.ai</a>
              </div>
            </div>

          </div>
        </article>
      </main>
    </>
  );
}
