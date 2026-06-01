import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Why Am I Paying for SEO But Not Getting Any Leads? | The Answer Engine',
  description: 'Nearly 60% of searches now end without a click because AI answers directly. Your SEO rankings look good but leads are down — here is why, and what generates leads now.',
  alternates: { canonical: 'https://www.theanswerengine.ai/blog/seo-not-generating-leads' },
  openGraph: {
    title: 'Why Am I Paying for SEO But Not Getting Any Leads?',
    description: 'Nearly 60% of searches end without a click. AI is answering before your site gets seen. Learn why SEO rankings no longer guarantee leads.',
    type: 'article',
    url: 'https://www.theanswerengine.ai/blog/seo-not-generating-leads',
    siteName: 'The Answer Engine',
    images: [{ url: 'https://www.theanswerengine.ai/blog/seo-not-generating-leads.webp', width: 1200, height: 630, alt: 'Why SEO Is Not Generating Leads' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Why Am I Paying for SEO But Not Getting Any Leads?',
    description: 'Nearly 60% of searches end without a click. Learn why SEO rankings no longer guarantee leads and what to do instead.',
    site: '@theanswerengine',
    images: ['https://www.theanswerengine.ai/blog/seo-not-generating-leads.webp'],
  },
};

export default function BlogPost() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "Why Am I Paying for SEO But Not Getting Any Leads?",
        "description": "Nearly 60% of searches now end without a click because AI answers directly. Learn why your SEO rankings look good but leads are down, and what actually generates leads now.",
        "image": {
          "@type": "ImageObject",
          "url": "https://theanswerengine.ai/blog/seo-not-generating-leads.webp",
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
          "name": "The Answer Engine",
          "logo": {
            "@type": "ImageObject",
            "url": 'https://theanswerengine.ai/blog/seo-not-generating-leads.webp'
          }
        },
        "datePublished": "2026-01-24",
        "dateModified": "2026-01-24",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://theanswerengine.ai/blog/seo-not-generating-leads"
        },
        "keywords": "SEO not generating leads, paying for SEO no results, SEO rankings up but no calls, is SEO worth it, AI visibility, Answer Engine Optimization",
        "articleSection": "SEO & AI Visibility",
        "wordCount": 1800,
        "inLanguage": "en-US"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Why is my SEO not generating leads anymore?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Nearly 60% of searches now end without a click because AI answers questions directly. High-intent buyers get recommendations from AI before they see search results and call whoever AI recommends."
            }
          },
          {
            "@type": "Question",
            "name": "Should I stop paying for SEO?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. SEO still provides value for informational searches and builds topical authority. But SEO alone is no longer enough - you need AI visibility alongside SEO to capture high-intent buyers."
            }
          },
          {
            "@type": "Question",
            "name": "How is AI visibility different from SEO?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "SEO optimizes for search engine rankings using keywords and backlinks. AI visibility optimizes for being recommended when people ask AI assistants for suggestions. Research shows AI uses different signals - brand mentions matter more than domain authority."
            }
          },
          {
            "@type": "Question",
            "name": "Can my SEO agency handle AI visibility?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Some can, most can't. Ask your agency about their strategy for AI-generated answers. If they don't have data on AI platform mentions, you may need specialized help alongside your SEO."
            }
          },
          {
            "@type": "Question",
            "name": "Why can't ChatGPT see my Google reviews?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "ChatGPT uses Bing's web index, not Google's data. To influence AI recommendations, you need reviews on platforms AI can read - Yelp, BBB, and sites indexed by Bing."
            }
          },
          {
            "@type": "Question",
            "name": "How long before I see results from AI visibility optimization?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Most businesses see measurable changes in AI citations within 90-120 days when they establish clear authority signals across the platforms AI reads."
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
            "name": "Why Am I Paying for SEO But Not Getting Leads?",
            "item": "https://theanswerengine.ai/blog/seo-not-generating-leads"
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

      <div className="max-w-4xl mx-auto px-6 pt-20 pb-4">
        <nav className="flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-[#F27D24] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-[#F27D24] transition-colors">Blog</Link>
          <span>/</span>
          <span className="text-gray-400">Why Am I Paying for SEO But Not Getting Leads?</span>
        </nav>
          {/* Championship Cover Image */}
          <div className="ae-article-hero w-full rounded-xl overflow-hidden mb-10" style={{ maxHeight: 420 }}>
            <img
              src="/blog/seo-not-generating-leads.webp"
              alt="seo not generating leads"
              style={{ width: '100%', height: 420, objectFit: 'cover', display: 'block' }}
              loading="eager"
            />
          </div>
      </div>

      <header className="max-w-4xl mx-auto px-6 pb-12">
        <div className="flex items-center gap-3 mb-6">
          <span className="bg-[#F27D24]/10 text-[#F27D24] px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase">SEO &amp; AI Visibility</span>
          <time className="text-gray-500 text-sm">2026-01-24</time>
        </div>
        <h1 className="font-plus-jakarta text-4xl md:text-5xl font-bold text-white leading-tight mb-6">Why Am I Paying for SEO But Not Getting Any Leads?</h1>
        <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">Nearly 60% of searches now end without a click because AI answers directly. Your SEO rankings look good but leads are down. Here is why, and what actually generates leads now.</p>
      </header>

      <article className="max-w-4xl mx-auto px-6 pb-20">
        <div className="prose prose-invert prose-lg max-w-none prose-headings:font-plus-jakarta prose-headings:text-white prose-p:text-gray-300 prose-a:text-[#F27D24] prose-a:no-underline hover:prose-a:underline prose-strong:text-white">

          {/* STATS GRID */}
          <div className="ae-stats-grid not-prose">
            <div className="ae-stat-card">
              <div className="ae-stat-value ae-accent">60%</div>
              <div className="ae-stat-label">ZERO-CLICK SEARCHES</div>
            </div>
            <div className="ae-stat-card">
              <div className="ae-stat-value ae-accent">41%</div>
              <div className="ae-stat-label">AI RECS FROM LISTS</div>
            </div>
            <div className="ae-stat-card">
              <div className="ae-stat-value ae-accent">90 days</div>
              <div className="ae-stat-label">TIME TO AI VISIBILITY</div>
            </div>
            <div className="ae-stat-card">
              <div className="ae-stat-value ae-accent">5,766</div>
              <div className="ae-stat-label">CLIENT CLICKS/MO</div>
            </div>
          </div>

          <p>Your SEO agency sends you a report every month. Rankings are up. Traffic looks healthy. They are hitting their KPIs. But your phone is not ringing. Leads are down. And you are starting to wonder if you are just burning money. Markets fill fast. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Check your territory availability.</a></p>

          <p>Here is the uncomfortable truth: <strong>your SEO agency might be doing everything right, and it still will not work.</strong> Not because they are bad at SEO. Because SEO alone is not enough anymore. Your first step: <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free AERO Blind Spot Scan.</a></p>

          <div className="ae-callout ae-callout-warning not-prose">
            <div className="ae-callout-title">The Core Problem</div>
            <p>Nearly 60% of searches now end without anyone clicking a website. People ask AI for recommendations, AI gives them one answer, and they call that business. Your page 1 ranking does not matter if AI answers the question before anyone sees your listing. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Claim your free call</a> before your market fills.</p>
          </div>

          <div className="ae-takeaway not-prose">
            <div className="ae-takeaway-title">Key Takeaway</div>
            <p>Your SEO agency is probably doing their job. The problem is not your agency. The problem is that SEO alone no longer reaches the people ready to buy. Reach out: <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>
          </div>

          {/* CTA 1 */}
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Find out if your reputation translates to AI citations — free audit</a>

          {/* SECTION: THE REPORT LOOKS GOOD */}
          <span className="ae-section-label">The Disconnect</span>
          <h2>The Report Looks Good. The Results Do Not.</h2>

          <p>Let us look at what your agency is probably showing you: page 1 rankings for dozens of keywords, organic traffic increasing quarter over quarter, domain authority climbing steadily. These metrics were meaningful five years ago. Today, they are vanity numbers. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Lock in your exclusive territory now.</a></p>

          <p>Here is what they do not show you: nearly 60% of Google searches now end without a click, according to SparkToro and Datos (2024). People search, AI gives them an answer, and they never visit any website. Your page 1 ranking does not matter if the searcher never scrolls past the AI-generated answer at the top. <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Get your free AI readiness report.</a></p>

          {/* BAR GROUP */}
          <div className="ae-bar-group not-prose">
            <div className="ae-bar-item">
              <div className="ae-bar-label">Page 1 Keywords</div>
              <div className="ae-bar-track"><div className="ae-bar-fill" style={{width:'90%'}}></div></div>
              <div className="ae-bar-value">Looks Great</div>
            </div>
            <div className="ae-bar-item">
              <div className="ae-bar-label">Organic Traffic</div>
              <div className="ae-bar-track"><div className="ae-bar-fill" style={{width:'75%'}}></div></div>
              <div className="ae-bar-value">Up 23%</div>
            </div>
            <div className="ae-bar-item">
              <div className="ae-bar-label">Domain Authority</div>
              <div className="ae-bar-track"><div className="ae-bar-fill" style={{width:'65%'}}></div></div>
              <div className="ae-bar-value">+4 Points</div>
            </div>
            <div className="ae-bar-item">
              <div className="ae-bar-label">Actual Leads Generated</div>
              <div className="ae-bar-track"><div className="ae-bar-fill" style={{width:'15%'}}></div></div>
              <div className="ae-bar-value">Declining</div>
            </div>
            <div className="ae-bar-item">
              <div className="ae-bar-label">Phone Calls from Search</div>
              <div className="ae-bar-track"><div className="ae-bar-fill" style={{width:'12%'}}></div></div>
              <div className="ae-bar-value">Down</div>
            </div>
          </div>

          <div className="ae-callout ae-callout-info not-prose">
            <div className="ae-callout-title">Insight</div>
            <p>The gap between SEO metrics and actual business results is widening every quarter. High rankings no longer translate to high lead volume the way they used to. Ready to act? <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a free strategy session.</a></p>
          </div>

          {/* CTA 2 */}
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Find out if your reputation translates to AI citations — free audit</a>

          {/* SECTION: WHAT SEO DELIVERS NOW */}
          <span className="ae-section-label">Honest Assessment</span>
          <h2>What Your SEO Investment Actually Delivers Now</h2>

          <table className="ae-comparison-table not-prose">
            <thead>
              <tr>
                <th>SEO Still Works For</th>
                <th>SEO Does Not Work For</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Informational searches ("how to fix a leaky faucet")</td>
                <td>"Who should I hire" searches (AI answers directly)</td>
              </tr>
              <tr>
                <td>Comparison content ("plumber vs handyman")</td>
                <td>Voice searches ("Hey Siri, find me a plumber")</td>
              </tr>
              <tr>
                <td>Research-stage queries ("average cost of kitchen remodel")</td>
                <td>Urgent need searches ("I need a plumber right now")</td>
              </tr>
              <tr>
                <td>Long-form educational content</td>
                <td>High-intent buyer queries</td>
              </tr>
              <tr>
                <td>Building topical authority over time</td>
                <td>Immediate lead generation</td>
              </tr>
            </tbody>
          </table>

          <p>The problem? Those right-column searches are where the money is. Those are the people ready to hire today. And they are increasingly going to whoever AI recommends. Speak to an AEO specialist: <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.</p>

          <p><strong>Your SEO investment is capturing the researchers. Your competitor, the one AI recommends, is capturing the buyers.</strong> One client per city. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">See if your market is available.</a></p>

          <div className="ae-takeaway not-prose">
            <div className="ae-takeaway-title">Key Takeaway</div>
            <p>SEO captures people who are browsing. AI captures people who are buying. The highest-value searches now go through AI, not traditional search results. Check where you stand: <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free Blind Spot Scan.</a></p>
          </div>

          {/* CTA 3 */}
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Find out if your reputation translates to AI citations — free audit</a>

          {/* SECTION: WHAT YOUR AGENCY ISN'T TELLING YOU */}
          <span className="ae-section-label">The Blind Spot</span>
          <h2>What Your Agency Is Not Telling You</h2>

          <p>Most SEO agencies are still running playbooks from five years ago. Keyword optimization. Backlink building. Technical audits. Content calendars. That stuff still matters for the 40% of searches where people actually click through to websites. Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> for a custom strategy.</p>

          <p>But the high-intent searches? The "who should I hire" searches? Those are increasingly answered by AI. And AI evaluates businesses differently than Google does. Questions? Call <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.</p>

          <p>When someone asks ChatGPT "Who is the best plumber in Denver?" it does not check your domain authority score. According to research from Onely and Ahrefs (December 2025), AI systems prioritize completely different signals. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Secure your territory before a competitor does.</a></p>

          {/* DECISION MATRIX */}
          <div className="ae-decision-matrix not-prose">
            <table>
              <thead>
                <tr>
                  <th>What AI Actually Looks For</th>
                  <th>Why It Matters</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Brand mentions across authoritative sources</td>
                  <td>AI cross-references your business across the entire web</td>
                </tr>
                <tr>
                  <td>Authoritative "best of" list appearances</td>
                  <td>Accounts for 41% of ChatGPT brand recommendations (Onely research)</td>
                </tr>
                <tr>
                  <td>Consistent business information everywhere</td>
                  <td>Inconsistent NAP data signals untrustworthiness to AI</td>
                </tr>
                <tr>
                  <td>Content that directly answers questions</td>
                  <td>AI cites expertise, not keyword-stuffed pages</td>
                </tr>
                <tr>
                  <td>Reviews on platforms AI can access</td>
                  <td><Link href="/blog/bing-places-chatgpt-connection">ChatGPT cannot see your Google reviews</Link>. It reads Yelp, BBB, and Bing-indexed sites</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="ae-callout ae-callout-warning not-prose">
            <div className="ae-callout-title">Reality Check</div>
            <p>Traditional SEO metrics like domain authority have a weak correlation with AI recommendations, according to Ahrefs' study of 75,000 brands. Your SEO agency is not optimizing for what AI actually measures. <a href="https://theanswerengine.ai/blindspot" className="cta-inline">See your AI visibility score — free.</a></p>
          </div>

          {/* CTA 4 */}
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Find out if your reputation translates to AI citations — free audit</a>

          {/* SECTION: THE REAL REASON */}
          <span className="ae-section-label">Root Cause</span>
          <h2>The Real Reason Your Leads Dried Up</h2>

          <p>The customer journey changed. Your marketing did not. Here is exactly how it shifted: Contact us at <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>

          {/* TIMELINE */}
          <div className="ae-timeline not-prose">
            <div className="ae-timeline-item">
              <div className="ae-timeline-step">Before</div>
              <div className="ae-timeline-title">Customer searches "emergency plumber Phoenix"</div>
              <div className="ae-timeline-desc">Sees 10 results on Google. Clicks 2 to 3 websites, compares them. Calls the one that looks most professional. Your SEO investment pays off.</div>
            </div>
            <div className="ae-timeline-item">
              <div className="ae-timeline-step">Now</div>
              <div className="ae-timeline-title">Customer asks AI "I need an emergency plumber in Phoenix"</div>
              <div className="ae-timeline-desc">AI recommends one company with a phone number. Customer calls that company. If your site is not structured to be the source AI cites, it is invisible at the moment of decision — even if your SEO rankings look great.</div>
            </div>
          </div>

          <div className="ae-quote not-prose">
            <blockquote>The customer journey changed. Your marketing did not. That is the entire problem in one sentence.</blockquote>
          </div>

          {/* CTA 5 */}
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Find out if your reputation translates to AI citations — free audit</a>

          {/* SECTION: PROOF */}
          <span className="ae-section-label">Real Results</span>
          <h2>What Happens When You Optimize for AI</h2>

          <p>One of our clients, a real estate agent in Los Angeles, had strong SEO rankings but noticed leads declining. After implementing AI visibility optimization alongside their existing SEO: We work with one business per market. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Check if yours is still open.</a></p>

          <div className="ae-stats-grid not-prose">
            <div className="ae-stat-card">
              <div className="ae-stat-value ae-accent">5,766</div>
              <div className="ae-stat-label">MONTHLY ORGANIC CLICKS</div>
            </div>
            <div className="ae-stat-card">
              <div className="ae-stat-value ae-accent">10,654</div>
              <div className="ae-stat-label">AI-OPTIMIZED CLICKS</div>
            </div>
            <div className="ae-stat-card">
              <div className="ae-stat-value ae-accent">3,800+</div>
              <div className="ae-stat-label">SINGLE TOPIC CLUSTER</div>
            </div>
            <div className="ae-stat-card">
              <div className="ae-stat-value ae-accent">3,700+</div>
              <div className="ae-stat-label">PROBATE CONTENT CLICKS</div>
            </div>
          </div>

          <p>Verified from Google Search Console, January 2026. The difference? They stopped creating keyword-optimized pages and started creating answer-optimized content that AI systems recognize as authoritative. Find your gaps with a <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free AERO scan.</a></p>

          <div className="ae-callout ae-callout-success not-prose">
            <div className="ae-callout-title">Proven Result</div>
            <p>Strategic content clusters designed to win AI citations delivered nearly double the clicks compared to traditional SEO pages alone. Same business, same market, different strategy. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Schedule a free call</a> to see where you stand.</p>
          </div>

          {/* CTA 6 */}
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Find out if your reputation translates to AI citations — free audit</a>

          {/* SECTION: BUT MY RANKINGS */}
          <span className="ae-section-label">Hard Truth</span>
          <h2>"But My Rankings Are Great!"</h2>

          <p>I know. That is the frustrating part. You might be ranking #1 for your most important keywords. Your agency might be doing genuinely excellent work. The technical SEO might be flawless. Call <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> for a free consultation.</p>

          <p><strong>And it does not matter</strong> if AI is answering the question before anyone sees your ranking. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Claim your market territory — one client per area.</a></p>

          <p>Think about it: when was the last time you personally scrolled past an AI answer to click on a regular search result? When the AI answer is good enough, most people stop there. Your customers are doing the same thing. <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Run your free AI Blind Spot Scan.</a></p>

          <div className="ae-takeaway not-prose">
            <div className="ae-takeaway-title">Key Takeaway</div>
            <p>Rankings measure where you appear in a list. In 2026, the list is increasingly irrelevant because AI gives a single recommendation, not ten options. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a free 30-minute strategy call.</a></p>
          </div>

          {/* CTA 7 */}
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Find out if your reputation translates to AI citations — free audit</a>

          {/* SECTION: AGENCY CONVERSATION */}
          <span className="ae-section-label">Take Action</span>
          <h2>The Conversation You Need to Have With Your Agency</h2>

          <p>Do not fire your SEO agency. But do have this conversation. Ask them: "What is our strategy for showing up in AI-generated answers?" <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a></p>

          {/* PROS/CONS */}
          <div className="ae-pros-cons not-prose">
            <div className="ae-pros-box">
              <div className="ae-pros-title">Good Agency Answers</div>
              <ul>
                <li>"We are monitoring AI mentions and building a strategy"</li>
                <li>"That is a different discipline and you need both"</li>
                <li>"We can add AI visibility services to our scope"</li>
                <li>"Let us show you where AI is citing your competitors"</li>
              </ul>
            </div>
            <div className="ae-cons-box">
              <div className="ae-cons-title">Red Flag Answers</div>
              <ul>
                <li>"AI pulls from Google, so SEO is enough"</li>
                <li>"AI search is a fad, it will pass"</li>
                <li>"Domain authority is what matters for everything"</li>
                <li>"We do not track AI mentions"</li>
              </ul>
            </div>
          </div>

          <p>SEO and AI visibility are becoming separate disciplines. Your agency might be excellent at one and have no expertise in the other. The agencies that tell you honestly that they need to expand their approach are the ones worth keeping.</p>

          {/* CTA 8 */}
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Find out if your reputation translates to AI citations — free audit</a>

          {/* SECTION: 4-STEP FRAMEWORK */}
          <span className="ae-section-label">The Framework</span>
          <h2>The 4-Step Framework: What Actually Gets You Leads Now</h2>

          {/* CHEAT SHEET */}
          <div className="ae-cheat-sheet not-prose">
            <div className="ae-cheat-sheet-title">Lead Generation Framework for 2026</div>
            <table>
              <thead>
                <tr>
                  <th>Step</th>
                  <th>Action</th>
                  <th>Priority</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>AI Platform Visibility: Claim listings on Bing, Apple Maps, and data aggregators that AI reads. Ensure consistent business info everywhere.</td>
                  <td>Critical</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Answer-First Content: Create content that directly answers questions AI is fielding. Real answers, not keyword-stuffed pages.</td>
                  <td>Critical</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Multi-Platform Authority: Get reviews on Yelp, BBB, and industry directories. Get mentioned in local publications and "best of" lists.</td>
                  <td>High</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Keep Your SEO Foundation: SEO still captures 40% of searches and builds topical authority. SEO is the foundation. AI visibility is the roof.</td>
                  <td>High</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="ae-callout ae-callout-info not-prose">
            <div className="ae-callout-title">Insight</div>
            <p>Step 1 is where most businesses fail. They optimize for Google but ignore Bing, Apple Maps, and the data aggregators that feed AI recommendations. AI does not pull from Google the way most people assume.</p>
          </div>

          <div className="ae-takeaway not-prose">
            <div className="ae-takeaway-title">Key Takeaway</div>
            <p>SEO is still the foundation. AI visibility is now the roof. Without both, you are exposed. The businesses winning right now are running both tracks simultaneously.</p>
          </div>

          {/* CTA 9 */}
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Find out if your reputation translates to AI citations — free audit</a>

          {/* SECTION: FIND OUT WHAT AI SAYS */}
          <span className="ae-section-label">Self-Audit</span>
          <h2>Find Out What AI Says About You</h2>

          <p>Before your next conversation with your SEO agency, find out where you actually stand. Run these four tests yourself:</p>

          {/* TIMELINE as steps */}
          <div className="ae-timeline not-prose">
            <div className="ae-timeline-item">
              <div className="ae-timeline-step">Test 1</div>
              <div className="ae-timeline-title">Ask ChatGPT</div>
              <div className="ae-timeline-desc">"Who is the best [your service] in [your city]?" See if your business appears in the recommendation.</div>
            </div>
            <div className="ae-timeline-item">
              <div className="ae-timeline-step">Test 2</div>
              <div className="ae-timeline-title">Check Google AI Overview</div>
              <div className="ae-timeline-desc">Search your main keyword and look at the AI Overview box at the top, not the regular results below.</div>
            </div>
            <div className="ae-timeline-item">
              <div className="ae-timeline-step">Test 3</div>
              <div className="ae-timeline-title">Ask Perplexity</div>
              <div className="ae-timeline-desc">Same question, different AI. Perplexity cites sources, so you can see exactly which competitors it references.</div>
            </div>
            <div className="ae-timeline-item">
              <div className="ae-timeline-step">Test 4</div>
              <div className="ae-timeline-title">Compare Against Competitors</div>
              <div className="ae-timeline-desc">If your competitor shows up instead of you, that is your lead leak. That is where your customers are going.</div>
            </div>
          </div>

          <p>If AI is not recommending you, that is your leak. That is where your leads are going. And no amount of SEO will fix it.</p>

          {/* CTA 10 */}
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Find out if your reputation translates to AI citations — free audit</a>

          {/* CTA BLOCK */}
            <div className="ae-cta-block not-prose my-16">
              <h3>More Reviews Help Google — But AI Search Uses Completely Different Signals</h3>
              <p>AI engines weigh editorial citations, authority mentions, and structured data alongside reviews. Most businesses with great ratings are still invisible in AI search. Free Blind Spot Report — exactly where you stand in 48 hours.</p>
              <a href="https://theanswerengine.ai/blindspot" className="ae-cta-primary">Run Free AI Reputation Audit →</a>
              <div style={{ marginTop: '16px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <a href="tel:+12134442229" className="ae-cta-secondary">(213) 444-2229</a>
                <a href="https://calendly.com/theanswerengine-support/30min" className="ae-cta-secondary">Book Free Call</a>
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
                <p style={{ marginTop: 8, fontSize: '0.875rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.6 }}>Justin Borges founded The Answer Engine in 2025 after 13+ years in real estate, $200M+ in production, and discovering that AI search rankings now decide who gets cited as the answer. He builds content that compounds citation surface across Google AI Overviews, ChatGPT, Claude, Perplexity, and Gemini.</p>
              </div>
            </div>

          {/* FAQ SECTION */}
          <span className="ae-section-label">FAQ</span>
          <h2>Frequently Asked Questions</h2>

          <h3>Why is my SEO not generating leads anymore?</h3>
          <p>Nearly 60% of searches now end without a click because AI answers questions directly. Your SEO rankings may be strong, but high-intent buyers are getting recommendations from AI before they see search results. They call whoever AI recommends.</p>

          {/* CTA 11 */}
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Find out if your reputation translates to AI citations — free audit</a>

          <h3>Should I stop paying for SEO?</h3>
          <p>No. SEO still provides value for informational and research searches, and it builds topical authority that AI also recognizes. But SEO alone is no longer enough. You need AI visibility alongside your SEO to capture high-intent buyers who ask AI for recommendations.</p>

          <h3>How is AI visibility different from SEO?</h3>
          <p>SEO optimizes for search engine rankings using factors like keywords, backlinks, and technical performance. AI visibility optimizes for being recommended when people ask AI assistants like ChatGPT, Google AI Overview, and Perplexity for suggestions. Research shows AI uses different signals. Brand mentions and authoritative list appearances matter more than domain authority scores.</p>

          {/* CTA 12 */}
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Find out if your reputation translates to AI citations — free audit</a>

          <h3>Can my SEO agency handle AI visibility?</h3>
          <p>Some can, most cannot. Ask your agency specifically about their strategy for AI-generated answers. If they do not have data on which AI platforms mention your business or a strategy for increasing AI citations, you may need specialized help alongside your SEO.</p>

          <h3>Why can not ChatGPT see my Google reviews?</h3>
          <p>ChatGPT uses Bing's web index, not Google's data. This means it cannot directly access Google Business Profile information including reviews. To influence AI recommendations, you need reviews on platforms AI can read: Yelp, BBB, industry directories, and sites indexed by Bing.</p>

          {/* CTA 13 */}
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Find out if your reputation translates to AI citations — free audit</a>

          <h3>How long before I see results from AI visibility optimization?</h3>
          <p>Most businesses see measurable changes in AI citations within 90 to 120 days. Unlike SEO, which compounds slowly over years, AI visibility can shift more quickly when you establish clear authority signals across the right platforms. The key is consistency across all platforms AI reads, not just Google.</p>

          <div className="ae-takeaway not-prose">
            <div className="ae-takeaway-title">Key Takeaway</div>
            <p>SEO is not dead. But SEO alone is no longer a complete lead generation strategy. The businesses that add AI visibility to their marketing mix are the ones capturing the buyers that SEO can no longer reach.</p>
          </div>

          {/* CTA 14 */}
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Find out if your reputation translates to AI citations — free audit</a>

          {/* SOURCES */}
          <span className="ae-section-label">Sources</span>
          <h2>Sources Cited</h2>

          <p>1. SparkToro/Datos 2024 Zero-Click Search Study<br />
          2. Onely: "How ChatGPT Decides Which Brands to Recommend" (December 2025)<br />
          3. Ahrefs: "Top Brand Visibility Factors in ChatGPT, AI Mode, and AI Overviews" (December 2025)<br />
          4. Client GSC Data: lametrohomefinder.com (January 2026)</p>

        </div>

        {/* FINAL CTA */}
          <section className="ae-final-cta not-prose">
            <div className="ae-final-cta-inner">
              <h2 className="text-2xl sm:text-3xl font-black mb-4 text-white font-headline uppercase tracking-tighter">
                A 5-Star Rating Means Nothing if AI Search Has Never Heard of You
              </h2>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                AI engines build recommendations from editorial sources, not review counts. The Answer Engine builds the authority signals that get you cited — free audit shows your current AI reputation score. One business per market.
              </p>
              <a
                href="https://theanswerengine.ai/blindspot"
                className="inline-flex items-center justify-center gap-2 bg-[#F27D24] text-black font-black px-10 py-4 tracking-tighter hover:translate-y-[2px] transition-transform font-headline uppercase"
              >
                Run Free AI Reputation Audit →
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
    </>
  );
}
