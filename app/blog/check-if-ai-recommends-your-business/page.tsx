import { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';

export const revalidate = 86400;
export const dynamic = 'force-static';

export async function generateMetadata(): Promise<Metadata> {
  const title = "How to Check If AI Is Recommending Your Business (5-Minute Test)";
  const description = "Test whether ChatGPT, Claude, and Google AI recommend your business or your competitors. Free 5-minute audit you can do right now to check your AI visibility.";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      url: 'https://theanswerengine.ai/blog/check-if-ai-recommends-your-business',
      images: [{ url: '/images/ai-recommendation-test-5-minute-audit.png', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: 'https://theanswerengine.ai/blog/check-if-ai-recommends-your-business',
    },
  };
}

export default function CheckAIRecommendation() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://theanswerengine.ai/blog/check-if-ai-recommends-your-business#article",
        "headline": "How to Check If AI Is Recommending Your Business (5-Minute Test)",
        "description": "Test whether ChatGPT, Claude, and Google AI recommend your business or your competitors. Free 5-minute audit you can do right now.",
        "image": "https://theanswerengine.ai/images/ai-recommendation-test-5-minute-audit.png",
        "datePublished": "2025-12-16",
        "dateModified": "2025-12-16",
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
            "url": "https://theanswerengine.ai/TheAnswerEngine_Color.png"
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://theanswerengine.ai/blog/check-if-ai-recommends-your-business"
        }
      },
      {
        "@type": "HowTo",
        "@id": "https://theanswerengine.ai/blog/check-if-ai-recommends-your-business#howto",
        "name": "How to Check If AI Is Recommending Your Business",
        "description": "A 5-minute test to determine whether AI platforms like ChatGPT, Claude, and Google AI Overview are recommending your business to potential customers.",
        "totalTime": "PT5M",
        "estimatedCost": {
          "@type": "MonetaryAmount",
          "currency": "USD",
          "value": "0"
        },
        "step": [
          {
            "@type": "HowToStep",
            "position": 1,
            "name": "Open ChatGPT",
            "text": "Go to chat.openai.com and start a new conversation. You don't need a paid account. The free version works for this test."
          },
          {
            "@type": "HowToStep",
            "position": 2,
            "name": "Ask for a recommendation",
            "text": "Type: 'Who is the best [your service] in [your city]?' or 'Can you recommend a [your service] in [your area]?' Use the exact words your customers would use."
          },
          {
            "@type": "HowToStep",
            "position": 3,
            "name": "Check the response",
            "text": "Look for your business name in the response. Note whether competitors are mentioned. Save or screenshot the results."
          },
          {
            "@type": "HowToStep",
            "position": 4,
            "name": "Repeat on other platforms",
            "text": "Run the same test on Claude (claude.ai), Perplexity (perplexity.ai), and Google (look for AI Overview at the top of results)."
          },
          {
            "@type": "HowToStep",
            "position": 5,
            "name": "Score your results",
            "text": "Count how many platforms mention you vs. competitors. If you're mentioned on 0-1 platforms but competitors appear on 3-4, you have an AI visibility gap."
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://theanswerengine.ai/blog/check-if-ai-recommends-your-business#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Why doesn't ChatGPT recommend my business?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "ChatGPT recommends businesses based on the information available in its training data and web searches. If your business lacks authoritative content, proper schema markup, or clear expertise signals, AI platforms may not have enough information to confidently recommend you."
            }
          },
          {
            "@type": "Question",
            "name": "How often should I test my AI visibility?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Test monthly at minimum. AI platforms update their knowledge and algorithms regularly. What works today may change, and competitors may improve their AI visibility over time."
            }
          },
          {
            "@type": "Question",
            "name": "Does being recommended by AI actually bring in customers?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. When AI recommends your business by name, it acts as a trusted referral. These leads often convert at higher rates because the AI has essentially pre-qualified you as a credible option."
            }
          },
          {
            "@type": "Question",
            "name": "What if AI recommends my competitors but not me?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "This is a competitive gap you can close. Your competitors likely have better-structured content, more comprehensive schema markup, or stronger authority signals. Answer Engine Optimization can help you become the recommended choice instead."
            }
          },
          {
            "@type": "Question",
            "name": "Can I improve my AI recommendations myself?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Basic improvements like adding schema markup and creating direct-answer content can help. However, comprehensive AI visibility requires systematic optimization across multiple platforms, which typically requires specialized expertise and tools."
            }
          },
          {
            "@type": "Question",
            "name": "How long does it take to start getting AI recommendations?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "With proper optimization, initial AI citations can appear within 30-60 days. Significant, consistent recommendations typically develop over 2-4 months as AI platforms index and trust your content."
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
        "@type": "LocalBusiness",
        "@id": "https://theanswerengine.ai/#localbusiness",
        "name": "The Answer Engine",
        "description": "Answer Engine Optimization agency for local service businesses",
        "url": "https://theanswerengine.ai",
        "telephone": "+1-213-444-2229",
        "email": "support@theanswerengine.ai",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Los Angeles",
          "addressRegion": "CA",
          "addressCountry": "US"
        },
        "priceRange": "$",
        "openingHours": "Mo-Fr 09:00-18:00"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://theanswerengine.ai/" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://theanswerengine.ai/blog" },
          { "@type": "ListItem", "position": 3, "name": "Check If AI Recommends Your Business" }
        ]
      }
    ]
  };

  return (
    <>
      <Script
        id="check-ai-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <main className="min-h-screen bg-[#0A0A0F]">
        <article className="max-w-4xl mx-auto px-6 py-12 sm:py-16">
          {/* Breadcrumbs */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">&rsaquo;</span>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <span className="mx-2">&rsaquo;</span>
            <span className="text-gray-400">Check If AI Recommends You</span>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl mb-6 bg-white/[0.04] border border-white/[0.08]">
              <span className="text-sm font-semibold tracking-wider uppercase text-white">DIY Guide</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-white leading-tight">
              How to Check If AI Is <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white">Recommending Your Business</span>
            </h1>

            {/* Featured Image */}
            <div className="mb-8 rounded-xl overflow-hidden border border-white/[0.05]">
              <img
                src="/images/ai-recommendation-test-5-minute-audit.png"
                alt="5-minute test to check if AI platforms like ChatGPT are recommending your business"
                className="w-full grayscale brightness-75"
              />
            </div>

            {/* Featured Snippet Block */}
            <div className="bg-gradient-to-br from-white/[0.02] to-white/[0.02] border border-white/[0.08] rounded-xl p-6 mb-8">
              <p className="text-lg text-white leading-relaxed">
                <strong>To check if AI recommends your business: Open ChatGPT, type &quot;Who is the best [your service] in [your city]?&quot; and see if you&apos;re mentioned.</strong> Repeat on Claude, Perplexity, and Google. If competitors appear but you don&apos;t, you have an AI visibility gap that&apos;s costing you customers.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>5 min test</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>Updated December 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Free</span>
              </div>
            </div>
          </header>

          {/* ══════════════ PROSE WRAPPER ══════════════ */}
          <div className="prose prose-invert prose-lg max-w-none prose-headings:font-plus-jakarta prose-headings:text-white prose-p:text-gray-300 prose-a:text-[#F27D24] prose-a:no-underline hover:prose-a:underline prose-strong:text-white">

            {/* ── STATS GRID ── */}
            <div className="ae-stats-grid not-prose">
              <div className="ae-stat-card">
                <div className="ae-stat-emoji">🤖</div>
                <div className="ae-stat-value ae-accent">400M+</div>
                <div className="ae-stat-label">weekly ChatGPT users asking for business recommendations</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-emoji">👻</div>
                <div className="ae-stat-value ae-accent">58%</div>
                <div className="ae-stat-label">of local businesses are invisible to AI platforms entirely</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-emoji">📊</div>
                <div className="ae-stat-value ae-accent">2-3</div>
                <div className="ae-stat-label">businesses cited per AI answer vs 10 blue links in Google</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-emoji">💰</div>
                <div className="ae-stat-value ae-accent">5x</div>
                <div className="ae-stat-label">higher conversion rate from AI referrals vs organic search</div>
              </div>
            </div>

            {/* ── INTRODUCTION ── */}
            <span className="ae-section-label">The Wake-Up Call</span>
            <h2>Someone Just Asked AI About Your Business. Were You the Answer?</h2>

            <p>Right now, someone in your city is asking ChatGPT: &quot;Who&apos;s the best [your service] around here?&quot; Markets fill fast. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Check your territory availability.</a></p>

            <p>The question is: <strong>Are you the answer?</strong> Your first step: <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free AERO Blind Spot Scan.</a></p>

            <p>Most business owners have no idea whether AI platforms recommend them or their competitors. They are flying blind while potential customers get sent elsewhere. Every day they delay checking is another day of lost revenue flowing to competitors who already figured this out. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Claim your free call</a> before your market fills.</p>

            <p>This 5-minute test will show you exactly where you stand and whether you are losing business to competitors who have already cracked <Link href="/blog/aeo-vs-seo">Answer Engine Optimization</Link>. Reach out: <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>

            <div className="ae-quote not-prose">
              <p>You would not ignore a negative Google review for months. So why are you ignoring whether AI sends customers to your competitors? Call us at <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> today.</p>
            </div>

            {/* ── CTA 1 ── */}
            <div className="ae-cta-inline not-prose">
              <p>Skip the DIY test. See exactly where AI ranks you vs. competitors right now. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Lock in your exclusive territory now.</a></p>
              <Link href="/blindspot">Get Your Free Blind Spot Report &rarr;</Link>
            </div>

            {/* ── WHY THIS MATTERS: CALLOUT ── */}
            <div className="ae-callout ae-callout-warning not-prose">
              <div className="ae-callout-title">Why This Test Matters More Than Your Google Ranking</div>
              <p>Google AI Overviews now appear on over 80% of informational searches. ChatGPT processes hundreds of millions of business-related queries per week. When AI skips your business, it is not just a missed impression. It is a direct referral to your competitor, complete with their name, phone number, and a glowing recommendation. <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Get your free AI readiness report.</a></p>
            </div>

            {/* ── BAR CHART: WHERE CUSTOMERS FIND BUSINESSES ── */}
            <span className="ae-section-label">The Data</span>
            <h2>Where Customers Are Finding Businesses in 2025</h2>

            <p>Search behavior has shifted dramatically. Here is where your potential customers are actually looking for service providers today. Ready to act? <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a free strategy session.</a></p>

            <div className="ae-bar-group not-prose">
              <div className="ae-bar-item">
                <div className="ae-bar-label">Google (traditional search)</div>
                <div className="ae-bar-track"><div className="ae-bar-fill" style={{width:'72%'}}></div></div>
                <div className="ae-bar-value">72%</div>
              </div>
              <div className="ae-bar-item">
                <div className="ae-bar-label">ChatGPT / AI assistants</div>
                <div className="ae-bar-track"><div className="ae-bar-fill" style={{width:'41%'}}></div></div>
                <div className="ae-bar-value">41%</div>
              </div>
              <div className="ae-bar-item">
                <div className="ae-bar-label">Google AI Overviews</div>
                <div className="ae-bar-track"><div className="ae-bar-fill" style={{width:'38%'}}></div></div>
                <div className="ae-bar-value">38%</div>
              </div>
              <div className="ae-bar-item">
                <div className="ae-bar-label">Social media recs</div>
                <div className="ae-bar-track"><div className="ae-bar-fill" style={{width:'29%'}}></div></div>
                <div className="ae-bar-value">29%</div>
              </div>
              <div className="ae-bar-item">
                <div className="ae-bar-label">Perplexity / other AI search</div>
                <div className="ae-bar-track"><div className="ae-bar-fill" style={{width:'18%'}}></div></div>
                <div className="ae-bar-value">18%</div>
              </div>
            </div>

            <p>The AI channel is growing faster than any other discovery method. Businesses that are invisible to AI today will be left behind within 12 months. Drop us a line at <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>

            {/* ── CTA 2 ── */}
            <div className="ae-cta-inline not-prose">
              <p>Want to know exactly how you score on every platform? We test all five for you. Speak to an AEO specialist: <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.</p>
              <Link href="/blindspot">Get Your Free AI Visibility Report &rarr;</Link>
            </div>

            {/* ── THE 5-MINUTE TEST ── */}
            <span className="ae-section-label">The 5-Minute Test</span>
            <h2>Step-by-Step: Check Your AI Visibility Right Now</h2>

            <p>Grab your phone or laptop. This takes five minutes and costs nothing. You will have a clear picture of your AI visibility by the time you finish reading this section. One client per city. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">See if your market is available.</a></p>

            {/* ── TIMELINE: 5 STEPS ── */}
            <div className="ae-timeline not-prose">
              <div className="ae-timeline-item">
                <strong>Step 1: Open ChatGPT</strong>
                <p>Go to chat.openai.com and start a new conversation. The free version works fine. Use an incognito/private browser window to avoid personalization affecting results. Check where you stand: <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free Blind Spot Scan.</a></p>
              </div>
              <div className="ae-timeline-item">
                <strong>Step 2: Ask for a Recommendation</strong>
                <p>Type a question your ideal customer would ask using natural language. Try: &quot;Who is the best [your service] in [your city]?&quot; or &quot;Can you recommend a [your service] in [your area]?&quot; or &quot;I need a [your service] in [your city]. Who should I call?&quot; <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Schedule a free 30-min call.</a></p>
              </div>
              <div className="ae-timeline-item">
                <strong>Step 3: Analyze the Response</strong>
                <p>Check if your business is mentioned by name. Note which competitors appear. Record your position (first, middle, last, or absent). Screenshot the results for comparison later. Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> for a custom strategy.</p>
              </div>
              <div className="ae-timeline-item">
                <strong>Step 4: Test Other Platforms</strong>
                <p>Repeat the same question on Claude (claude.ai), Perplexity (perplexity.ai), Google (look for AI Overview at top), and Bing Copilot (bing.com). Questions? Call <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.</p>
              </div>
              <div className="ae-timeline-item">
                <strong>Step 5: Score Your Results</strong>
                <p>Count how many platforms mention you vs. competitors. If you appear on 0-1 platforms but competitors show up on 3-4, you have an urgent AI visibility gap costing you leads right now. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Secure your territory before a competitor does.</a></p>
              </div>
            </div>

            {/* ── CHEAT SHEET: PROMPTS TO TRY ── */}
            <div className="ae-cheat-sheet not-prose">
              <div className="ae-cheat-sheet-title">Cheat Sheet: Exact Prompts to Test</div>
              <ul>
                <li><strong>Direct recommendation:</strong> &quot;Who is the best [service] in [city]?&quot;</li>
                <li><strong>General request:</strong> &quot;Can you recommend a [service] in [area]?&quot;</li>
                <li><strong>Urgent need:</strong> &quot;I need a [service] in [city] right now. Who should I call?&quot;</li>
                <li><strong>Comparison ask:</strong> &quot;What [service type] do you recommend in [city]?&quot;</li>
                <li><strong>Problem-based:</strong> &quot;I have [problem]. Who can help me in [city]?&quot;</li>
                <li><strong>Review-based:</strong> &quot;Who has the best reviews for [service] in [city]?&quot;</li>
              </ul>
            </div>

            {/* ── SCORECARD TABLE ── */}
            <span className="ae-section-label">Your Scorecard</span>
            <h2>Track Your Results Across Every Platform</h2>

            <p>Use this scorecard to record your results. Fill it in as you test each platform. <a href="https://theanswerengine.ai/blindspot" className="cta-inline">See your AI visibility score — free.</a></p>

            <div className="ae-comparison-table not-prose">
              <table>
                <thead>
                  <tr>
                    <th>Platform</th>
                    <th>You Mentioned?</th>
                    <th>Competitors?</th>
                    <th>Your Position</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>ChatGPT</strong></td>
                    <td>Yes / No</td>
                    <td>Yes / No</td>
                    <td>1st / 2nd / 3rd / Absent</td>
                  </tr>
                  <tr>
                    <td><strong>Claude</strong></td>
                    <td>Yes / No</td>
                    <td>Yes / No</td>
                    <td>1st / 2nd / 3rd / Absent</td>
                  </tr>
                  <tr>
                    <td><strong>Perplexity</strong></td>
                    <td>Yes / No</td>
                    <td>Yes / No</td>
                    <td>1st / 2nd / 3rd / Absent</td>
                  </tr>
                  <tr>
                    <td><strong>Google AI Overview</strong></td>
                    <td>Yes / No</td>
                    <td>Yes / No</td>
                    <td>1st / 2nd / 3rd / Absent</td>
                  </tr>
                  <tr>
                    <td><strong>Bing Copilot</strong></td>
                    <td>Yes / No</td>
                    <td>Yes / No</td>
                    <td>1st / 2nd / 3rd / Absent</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* ── CTA 3 ── */}
            <div className="ae-cta-inline not-prose">
              <p>Tired of checking manually? We monitor all five platforms and send you alerts when things change. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book your free consultation here.</a></p>
              <Link href="/blindspot">Get Your Free Blind Spot Report &rarr;</Link>
            </div>

            {/* ── INTERPRETING RESULTS ── */}
            <span className="ae-section-label">What It Means</span>
            <h2>How to Read Your AI Visibility Score</h2>

            <p>Your results fall into one of three categories. Each one requires a different response. Contact us at <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>

            {/* ── DECISION MATRIX ── */}
            <div className="ae-decision-matrix not-prose">
              <table>
                <thead>
                  <tr>
                    <th>Your Score</th>
                    <th>What It Means</th>
                    <th>Urgency</th>
                    <th>Next Step</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>4-5 platforms</strong></td>
                    <td>Strong AI visibility</td>
                    <td>Maintain</td>
                    <td>Monitor monthly, expand queries</td>
                  </tr>
                  <tr>
                    <td><strong>2-3 platforms</strong></td>
                    <td>Partial visibility, gaps exist</td>
                    <td>Moderate</td>
                    <td>Targeted optimization needed</td>
                  </tr>
                  <tr>
                    <td><strong>0-1 platforms</strong></td>
                    <td>Invisible to AI</td>
                    <td>Urgent</td>
                    <td>Full AEO strategy required</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* ── CALLOUT: RED FLAG ── */}
            <div className="ae-callout ae-callout-warning not-prose">
              <div className="ae-callout-title">The Real Warning Sign</div>
              <p>The most concerning result is not being mentioned on zero platforms. It is when <strong>competitors are mentioned but you are not</strong>. That means AI platforms have enough information about your market to make recommendations and they are actively choosing others over you. Reach us at <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.</p>
            </div>

            {/* ── CTA 4 (tel) ── */}
            <div className="ae-cta-inline not-prose">
              <p>Scored 0-1? Talk to someone who can fix it today. We work with one business per market. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Check if yours is still open.</a></p>
              <a href="tel:+12134442229">Call (213) 444-2229 &rarr;</a>
            </div>

            {/* ── WHY AI MIGHT NOT RECOMMEND YOU ── */}
            <span className="ae-section-label">Root Causes</span>
            <h2>Why AI Might Not Be Recommending You</h2>

            <p>If you are invisible to AI platforms, it is usually one (or more) of these issues. The good news: every single one is fixable. Find your gaps with a <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free AERO scan.</a></p>

            {/* ── STATS GRID: REASONS ── */}
            <div className="ae-stats-grid not-prose">
              <div className="ae-stat-card">
                <div className="ae-stat-emoji">🏗️</div>
                <div className="ae-stat-value ae-accent">Schema</div>
                <div className="ae-stat-label">Missing structured data that helps AI understand your business</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-emoji">❓</div>
                <div className="ae-stat-value ae-accent">Content</div>
                <div className="ae-stat-label">No direct-answer content matching how people ask AI</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-emoji">🛡️</div>
                <div className="ae-stat-value ae-accent">Authority</div>
                <div className="ae-stat-label">Weak trust signals like missing reviews and credentials</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-emoji">📄</div>
                <div className="ae-stat-value ae-accent">Depth</div>
                <div className="ae-stat-label">Thin content that does not demonstrate real expertise</div>
              </div>
            </div>

            {/* ── PROS/CONS: DIY VS PRO ── */}
            <span className="ae-section-label">Your Options</span>
            <h2>DIY Fix vs. Professional AEO: What Actually Works</h2>

            <p>You have two paths forward. Here is the honest breakdown of each approach. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Schedule a free call</a> to see where you stand.</p>

            <div className="ae-pros-cons not-prose">
              <div className="ae-pros-box">
                <div className="ae-pros-title">DIY Approach</div>
                <ul>
                  <li>Free to start</li>
                  <li>Learn the fundamentals yourself</li>
                  <li>Add basic schema markup</li>
                  <li>Create direct-answer content</li>
                  <li>Claim all directory listings</li>
                </ul>
              </div>
              <div className="ae-cons-box">
                <div className="ae-cons-title">DIY Limitations</div>
                <ul>
                  <li>Takes 6-12 months of consistent effort</li>
                  <li>No multi-platform monitoring tools</li>
                  <li>Hard to track competitor movements</li>
                  <li>Technical schema errors are common</li>
                  <li>AI algorithms change frequently</li>
                </ul>
              </div>
            </div>

            {/* ── CTA 5 ── */}
            <div className="ae-cta-inline not-prose">
              <p>Want the professional path? We handle schema, content, and monitoring across all platforms. Send your questions to <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>
              <Link href="/blindspot">See What We Find in Your Blind Spot Report &rarr;</Link>
            </div>

            {/* ── COMPARISON TABLE: PLATFORMS ── */}
            <span className="ae-section-label">Platform Breakdown</span>
            <h2>How Each AI Platform Discovers and Recommends Businesses</h2>

            <p>Not all AI platforms work the same way. Understanding how each one finds businesses helps you optimize for all of them. Call <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> for a free consultation.</p>

            <div className="ae-comparison-table not-prose">
              <table>
                <thead>
                  <tr>
                    <th>Platform</th>
                    <th>How It Finds You</th>
                    <th>Key Ranking Factor</th>
                    <th>Update Frequency</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>ChatGPT</strong></td>
                    <td>Training data + web search</td>
                    <td>Content authority &amp; depth</td>
                    <td>Periodic + real-time search</td>
                  </tr>
                  <tr>
                    <td><strong>Claude</strong></td>
                    <td>Training data + web search</td>
                    <td>Structured info &amp; citations</td>
                    <td>Periodic + real-time search</td>
                  </tr>
                  <tr>
                    <td><strong>Perplexity</strong></td>
                    <td>Real-time web crawling</td>
                    <td>Source freshness &amp; citations</td>
                    <td>Real-time</td>
                  </tr>
                  <tr>
                    <td><strong>Google AI Overview</strong></td>
                    <td>Google index + knowledge graph</td>
                    <td>E-E-A-T signals &amp; reviews</td>
                    <td>Continuous</td>
                  </tr>
                  <tr>
                    <td><strong>Bing Copilot</strong></td>
                    <td>Bing index + OpenAI models</td>
                    <td>Bing Places &amp; schema</td>
                    <td>Continuous</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>The takeaway: you need strong authority signals, proper schema, and fresh content to appear across all platforms. A strategy that only targets one platform leaves gaps everywhere else. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Claim your market territory — one client per area.</a></p>

            {/* ── CTA 6 (email) ── */}
            <div className="ae-cta-inline not-prose">
              <p>Not sure which platforms to prioritize? Email us your scorecard and we will advise for free. <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Run your free AI Blind Spot Scan.</a></p>
              <a href="mailto:support@theanswerengine.ai">Email Your Scorecard to support@theanswerengine.ai &rarr;</a>
            </div>

            {/* ── WHAT TO DO NEXT ── */}
            <span className="ae-section-label">Action Plan</span>
            <h2>What to Do With Your Results</h2>

            {/* ── CALLOUT: SUCCESS ── */}
            <div className="ae-callout ae-callout-success not-prose">
              <div className="ae-callout-title">If You Are Being Recommended (4-5 Platforms)</div>
              <p>Document your current position with screenshots. Set up monthly monitoring to catch changes. Test additional query variations to find remaining gaps. Watch for competitors improving their AI presence. Your job is defense: protect what you have. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a free 30-minute strategy call.</a></p>
            </div>

            {/* ── CALLOUT: INFO ── */}
            <div className="ae-callout ae-callout-info not-prose">
              <div className="ae-callout-title">If You Have Partial Visibility (2-3 Platforms)</div>
              <p>Identify which platforms are missing you and investigate why. Audit your schema markup for errors. Create content that directly answers the questions you tested. Focus optimization on the platforms where competitors appear but you do not. Targeted fixes can close these gaps in 30-60 days. Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> to get started.</p>
            </div>

            {/* ── CALLOUT: WARNING ── */}
            <div className="ae-callout ae-callout-warning not-prose">
              <div className="ae-callout-title">If You Are Invisible (0-1 Platforms)</div>
              <p>This is urgent. Every day you wait is another day of leads flowing to competitors. You need a comprehensive AEO strategy covering schema markup, authority building, direct-answer content, and multi-platform optimization. This is not a weekend project. Get professional help or commit to 6+ months of consistent work. <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a></p>
            </div>

            {/* ── CTA 7 ── */}
            <div className="ae-cta-inline not-prose">
              <p>Scored 0-1 on the test? We built the Blind Spot Report specifically for businesses in your situation.</p>
              <Link href="/blindspot">Get Your Free Blind Spot Report &rarr;</Link>
            </div>

            {/* ── CHEAT SHEET: QUICK WINS ── */}
            <span className="ae-section-label">Quick Wins</span>
            <h2>7 Things You Can Do Today to Improve AI Visibility</h2>

            <p>While a full AEO strategy takes time, these quick wins can start moving the needle immediately.</p>

            <div className="ae-cheat-sheet not-prose">
              <div className="ae-cheat-sheet-title">Quick Win Checklist</div>
              <ul>
                <li><strong>Add LocalBusiness schema:</strong> Tell AI exactly what your business does, where you are, and how to reach you</li>
                <li><strong>Claim all directory listings:</strong> Google Business, Bing Places, Yelp, and industry-specific directories</li>
                <li><strong>Write FAQ pages:</strong> Answer the exact questions customers ask AI, in full sentences</li>
                <li><strong>Get more reviews:</strong> AI trusts businesses with consistent, recent, positive reviews across platforms</li>
                <li><strong>Create service area pages:</strong> Dedicated pages for each city/neighborhood you serve with detailed local content</li>
                <li><strong>Build topical authority:</strong> Publish comprehensive guides related to your services (like this one)</li>
                <li><strong>Monitor monthly:</strong> Re-run this test every month to track progress and catch competitor changes</li>
              </ul>
            </div>

            {/* ── BAR CHART: IMPACT ── */}
            <h3>Estimated Impact of Each Quick Win on AI Visibility</h3>

            <div className="ae-bar-group not-prose">
              <div className="ae-bar-item">
                <div className="ae-bar-label">LocalBusiness schema</div>
                <div className="ae-bar-track"><div className="ae-bar-fill" style={{width:'85%'}}></div></div>
                <div className="ae-bar-value">High</div>
              </div>
              <div className="ae-bar-item">
                <div className="ae-bar-label">Directory listings</div>
                <div className="ae-bar-track"><div className="ae-bar-fill" style={{width:'75%'}}></div></div>
                <div className="ae-bar-value">High</div>
              </div>
              <div className="ae-bar-item">
                <div className="ae-bar-label">FAQ content</div>
                <div className="ae-bar-track"><div className="ae-bar-fill" style={{width:'70%'}}></div></div>
                <div className="ae-bar-value">High</div>
              </div>
              <div className="ae-bar-item">
                <div className="ae-bar-label">Review generation</div>
                <div className="ae-bar-track"><div className="ae-bar-fill" style={{width:'65%'}}></div></div>
                <div className="ae-bar-value">Med-High</div>
              </div>
              <div className="ae-bar-item">
                <div className="ae-bar-label">Service area pages</div>
                <div className="ae-bar-track"><div className="ae-bar-fill" style={{width:'55%'}}></div></div>
                <div className="ae-bar-value">Medium</div>
              </div>
              <div className="ae-bar-item">
                <div className="ae-bar-label">Topical authority</div>
                <div className="ae-bar-track"><div className="ae-bar-fill" style={{width:'50%'}}></div></div>
                <div className="ae-bar-value">Medium</div>
              </div>
              <div className="ae-bar-item">
                <div className="ae-bar-label">Monthly monitoring</div>
                <div className="ae-bar-track"><div className="ae-bar-fill" style={{width:'40%'}}></div></div>
                <div className="ae-bar-value">Ongoing</div>
              </div>
            </div>

            {/* ── CTA 8 (tel) ── */}
            <div className="ae-cta-inline not-prose">
              <p>Need help implementing these? Talk to our team about which wins matter most for your industry.</p>
              <a href="tel:+12134442229">Call (213) 444-2229 for a Free Consultation &rarr;</a>
            </div>

            {/* ── TAKEAWAY ── */}
            <div className="ae-takeaway not-prose">
              <strong>Key Takeaway:</strong> Running this 5-minute test is the first step. But the businesses winning in AI search are not just checking their visibility. They are systematically optimizing for it across every platform, every month.
            </div>

            {/* ── HOW CHATGPT DECIDES ── */}
            <span className="ae-section-label">Behind the Scenes</span>
            <h2>How ChatGPT Actually Decides Who to Recommend</h2>

            <p>Understanding the ranking factors helps you optimize strategically instead of guessing. AI platforms weigh several factors when choosing which businesses to recommend.</p>

            {/* ── DECISION MATRIX: RANKING FACTORS ── */}
            <div className="ae-decision-matrix not-prose">
              <table>
                <thead>
                  <tr>
                    <th>Factor</th>
                    <th>Weight</th>
                    <th>What AI Looks For</th>
                    <th>How to Improve</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Content Authority</strong></td>
                    <td>Very High</td>
                    <td>Comprehensive, original expertise</td>
                    <td>Publish detailed guides, case studies</td>
                  </tr>
                  <tr>
                    <td><strong>Schema Markup</strong></td>
                    <td>High</td>
                    <td>Structured data AI can parse</td>
                    <td>Add LocalBusiness, FAQ, HowTo schema</td>
                  </tr>
                  <tr>
                    <td><strong>Review Quality</strong></td>
                    <td>High</td>
                    <td>Consistent positive reviews</td>
                    <td>Systematic review generation</td>
                  </tr>
                  <tr>
                    <td><strong>Citation Consistency</strong></td>
                    <td>Medium</td>
                    <td>Same NAP across all directories</td>
                    <td>Audit and fix all listings</td>
                  </tr>
                  <tr>
                    <td><strong>Freshness</strong></td>
                    <td>Medium</td>
                    <td>Recently updated content</td>
                    <td>Regular content updates</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>Learn more about <Link href="/blog/how-chatgpt-chooses-businesses-to-recommend">how ChatGPT chooses which businesses to recommend</Link> in our detailed breakdown.</p>

            {/* ── CTA 9 ── */}
            <div className="ae-cta-inline not-prose">
              <p>We analyze all five ranking factors for your business and show you where you are falling short.</p>
              <Link href="/blindspot">Get Your Free Blind Spot Report &rarr;</Link>
            </div>

            {/* ── COMPETITOR GAP ANALYSIS ── */}
            <span className="ae-section-label">Competitive Intel</span>
            <h2>What to Do When AI Recommends Your Competitors Instead</h2>

            <p>If your test revealed competitors getting recommended while you are invisible, here is the playbook to close the gap.</p>

            <div className="ae-timeline not-prose">
              <div className="ae-timeline-item">
                <strong>Week 1-2: Audit and Fix Foundations</strong>
                <p>Add complete LocalBusiness schema. Fix NAP inconsistencies across all directories. Claim or update Google Business Profile, Bing Places, and Yelp. These are table stakes.</p>
              </div>
              <div className="ae-timeline-item">
                <strong>Week 3-4: Content That Answers Questions</strong>
                <p>Write FAQ pages that directly answer the questions customers ask AI. Create service pages with comprehensive detail. Each page should be the definitive answer on its topic.</p>
              </div>
              <div className="ae-timeline-item">
                <strong>Month 2-3: Build Authority Signals</strong>
                <p>Launch a review generation campaign. Publish case studies and success stories. Get mentioned in local publications and industry directories. AI needs proof you are legitimate.</p>
              </div>
              <div className="ae-timeline-item">
                <strong>Month 3-4: Monitor and Optimize</strong>
                <p>Re-run the 5-minute test monthly. Track which platforms start mentioning you. Adjust strategy based on what is working. Expect initial AI citations within 30-60 days.</p>
              </div>
            </div>

            {/* ── QUOTE ── */}
            <div className="ae-quote not-prose">
              <p>The businesses winning in AI search did not get there by accident. They built the foundation that AI trusts, then they kept building.</p>
            </div>

            {/* ── CTA 10 ── */}
            <div className="ae-cta-inline not-prose">
              <p>Skip the 4-month learning curve. We have the tools and strategy ready to deploy.</p>
              <Link href="/blindspot">Get Your Free Blind Spot Report &rarr;</Link>
            </div>

            {/* ── FAQ SECTION ── */}
            <span className="ae-section-label">FAQ</span>
            <h2>Frequently Asked Questions</h2>

            <h3>Why does not ChatGPT recommend my business?</h3>
            <p>ChatGPT recommends businesses based on the information available in its training data and web searches. If your business lacks authoritative content, proper schema markup, or clear expertise signals, AI platforms may not have enough information to confidently recommend you.</p>

            <h3>How often should I test my AI visibility?</h3>
            <p>Test monthly at minimum. AI platforms update their knowledge and algorithms regularly. What works today may change, and competitors may improve their AI visibility over time.</p>

            <h3>Does being recommended by AI actually bring in customers?</h3>
            <p>Yes. When AI recommends your business by name, it acts as a trusted referral. These leads often convert at higher rates because the AI has essentially pre-qualified you as a credible option.</p>

            {/* ── CTA 11 (email) ── */}
            <div className="ae-cta-inline not-prose">
              <p>Have a specific question about your results? We respond to every email personally.</p>
              <a href="mailto:support@theanswerengine.ai">Email support@theanswerengine.ai &rarr;</a>
            </div>

            <h3>What if AI recommends my competitors but not me?</h3>
            <p>This is a competitive gap you can close. Your competitors likely have better-structured content, more comprehensive schema markup, or stronger authority signals. Answer Engine Optimization can help you become the recommended choice instead.</p>

            <h3>Can I improve my AI recommendations myself?</h3>
            <p>Basic improvements like adding schema markup and creating direct-answer content can help. However, comprehensive AI visibility requires systematic optimization across multiple platforms, which typically requires specialized expertise and tools.</p>

            <h3>How long does it take to start getting AI recommendations?</h3>
            <p>With proper optimization, initial AI citations can appear within 30-60 days. Significant, consistent recommendations typically develop over 2-4 months as AI platforms index and trust your content.</p>

            {/* ── CTA 12 (tel) ── */}
            <div className="ae-cta-inline not-prose">
              <p>Ready to stop guessing and start appearing in AI results? Let us show you the path.</p>
              <a href="tel:+12134442229">Call (213) 444-2229 &rarr;</a>
            </div>

            {/* ── RELATED ARTICLES ── */}
            <span className="ae-section-label">Keep Learning</span>
            <h2>Related Articles</h2>

            <div className="ae-stats-grid not-prose">
              <Link href="/blog/aeo-vs-seo" className="ae-stat-card" style={{textDecoration:'none'}}>
                <div className="ae-stat-emoji">⚔️</div>
                <div className="ae-stat-value ae-accent" style={{fontSize:'1rem'}}>AEO vs SEO</div>
                <div className="ae-stat-label">What is the difference and why it matters for your business</div>
              </Link>
              <Link href="/blog/how-chatgpt-chooses-businesses-to-recommend" className="ae-stat-card" style={{textDecoration:'none'}}>
                <div className="ae-stat-emoji">🧠</div>
                <div className="ae-stat-value ae-accent" style={{fontSize:'1rem'}}>How ChatGPT Chooses</div>
                <div className="ae-stat-label">The factors AI uses to decide which businesses to recommend</div>
              </Link>
              <Link href="/blog/why-chatgpt-recommends-your-competitors" className="ae-stat-card" style={{textDecoration:'none'}}>
                <div className="ae-stat-emoji">🎯</div>
                <div className="ae-stat-value ae-accent" style={{fontSize:'1rem'}}>Why Competitors Win</div>
                <div className="ae-stat-label">What they are doing differently and how to catch up</div>
              </Link>
              <Link href="/case-studies/justin-borges" className="ae-stat-card" style={{textDecoration:'none'}}>
                <div className="ae-stat-emoji">📈</div>
                <div className="ae-stat-value ae-accent" style={{fontSize:'1rem'}}>Case Study</div>
                <div className="ae-stat-label">From invisible to thousands of monthly clicks with AEO</div>
              </Link>
            </div>

            {/* ── CTA 13 ── */}
            <div className="ae-cta-inline not-prose">
              <p>Still reading? You clearly care about your AI visibility. Take the next step.</p>
              <Link href="/blindspot">Get Your Free Blind Spot Report &rarr;</Link>
            </div>

            {/* ── AUTHOR CARD ── */}
            <div className="ae-author-card not-prose">
              <div>
                <strong>Written by JB</strong>
                <p>Founder of The Answer Engine. Helping local service businesses become the answer AI recommends. Based in Los Angeles.</p>
              </div>
            </div>

          </div>{/* end prose */}

          {/* ── CTA BLOCK ── */}
          <div className="ae-cta-block not-prose my-16">
            <h2>Find Out If AI Is Recommending Your Business</h2>
            <p>Most businesses have no idea whether AI platforms are sending them customers or sending them to competitors. Our free blind spot report shows you exactly where you stand across ChatGPT, Claude, Perplexity, Google AI, and Bing Copilot.</p>
            <Link href="/blindspot">Get Your Free Blind Spot Report &rarr;</Link>
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

          {/* ── FINAL CTA ── */}
          <section className="ae-final-cta not-prose text-center py-12 border-t border-white/[0.05]">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-white font-plus-jakarta">Want a Deeper Analysis?</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              The 5-minute test shows you the surface. A professional AEO audit reveals exactly why competitors are winning and what it would take to replace them.
            </p>
            <Link
              href="/blindspot"
              className="ae-final-cta-pulse inline-flex items-center gap-2 font-semibold px-8 py-4 rounded-xl"
            >
              Get Your Free Blind Spot Report
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <p className="text-gray-500 text-sm mt-4">No pitch, just the data. See exactly where you are losing to competitors.</p>
            <div className="flex flex-wrap items-center justify-center gap-6 mt-6">
              <a href="tel:+12134442229" className="text-gray-400 hover:text-white transition-colors text-sm">(213) 444-2229</a>
              <a href="mailto:support@theanswerengine.ai" className="text-gray-400 hover:text-white transition-colors text-sm">support@theanswerengine.ai</a>
            </div>
          </section>
        </article>
      </main>
    </>
  );
}
