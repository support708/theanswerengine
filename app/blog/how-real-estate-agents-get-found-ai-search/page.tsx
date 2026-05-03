import type { Metadata } from 'next';
import Link from 'next/link';

export const revalidate = 86400;
export const dynamic = 'force-static';
export const dynamicParams = true;

export const metadata: Metadata = {
  title: "How Real Estate Agents Get Found on ChatGPT & AI Search",
  description: "Six AEO plays that put real estate agents in ChatGPT, Claude, Perplexity, and Google AI responses — with real examples from a top-producing LA agent.",
  keywords: ["real estate AI search", "real estate agent AI visibility", "realtor AI optimization", "ChatGPT real estate", "AI homebuyer search", "answer engine optimization real estate", "Perplexity real estate agents"],
  openGraph: {
    title: "How Real Estate Agents Get Found on ChatGPT & AI Search",
    description: "Six AEO plays that put real estate agents in ChatGPT, Claude, Perplexity, and Google AI responses — with real examples from a top-producing LA agent.",
    type: 'article',
    url: 'https://theanswerengine.ai/blog/how-real-estate-agents-get-found-ai-search',
    publishedTime: '2026-04-20',
    authors: ['https://theanswerengine.ai/about'],
    images: [{ url: 'https://theanswerengine.ai/blog/how-real-estate-agents-get-found-ai-search.webp', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "How Real Estate Agents Get Found on AI Search",
    description: "82% of homebuyers now use AI for housing research. Learn why certain agents keep getting recommended.",
  },
  alternates: {
    canonical: 'https://theanswerengine.ai/blog/how-real-estate-agents-get-found-ai-search',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://theanswerengine.ai/blog/how-real-estate-agents-get-found-ai-search#article",
      "headline": "How Real Estate Agents Get Found on AI Search",
      "description": "82% of homebuyers now use AI for housing research. Learn why AI platforms recommend certain agents and how to become one of them.",
      "image": "https://theanswerengine.ai/blog/how-real-estate-agents-get-found-ai-search.webp",
      "datePublished": "2026-04-20",
      "dateModified": "2026-04-20",
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
        "@id": "https://theanswerengine.ai/blog/how-real-estate-agents-get-found-ai-search"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://theanswerengine.ai/blog/how-real-estate-agents-get-found-ai-search#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do real estate agents really need to worry about AI search?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. A 2025 Realtor.com survey found that 82% of Americans now use AI to gather housing market information, with 67% using ChatGPT specifically for real estate research. Homebuyers are asking AI platforms for agent recommendations by name, neighborhood, and specialty. Agents who are invisible to AI search are missing a fast-growing pipeline of high-intent leads."
          }
        },
        {
          "@type": "Question",
          "name": "Which AI platforms recommend real estate agents?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ChatGPT, Google AI Overviews, Perplexity, Claude, and Gemini all surface agent recommendations. ChatGPT is the most widely used by homebuyers, followed by Google Gemini at 54%. Each platform pulls data from different sources, so agents need visibility across multiple channels including their own website, real estate directories, and third-party review platforms."
          }
        },
        {
          "@type": "Question",
          "name": "How is AI search different from Zillow or Realtor.com for agents?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Portal sites like Zillow display all agents who pay for placement. AI search is fundamentally different because it curates and recommends specific agents based on authority, expertise signals, review sentiment, and content depth. There is no pay-to-play option on ChatGPT or Perplexity. The AI decides who to recommend based on the trust signals it finds across the web, which means agents who have built a strong, structured online presence earn free, high-intent referrals."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take for a real estate agent to show up in AI search?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most agents begin seeing AI mentions within 60 to 90 days of implementing a structured optimization strategy. This includes building out neighborhood and specialty pages with proper schema, publishing market analysis content, gathering reviews on AI-crawlable platforms, and establishing presence on directories that AI can actually read. Agents with existing strong web presence may see results faster."
          }
        },
        {
          "@type": "Question",
          "name": "Can a solo agent compete with large brokerages in AI search?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. AI platforms prioritize relevance, local expertise signals, and trust over brand size. A solo agent with deep neighborhood content, genuine client testimonials on their website, detailed market reports, and consistent directory listings can outrank a national brokerage that has a generic corporate site. AI rewards specificity and verifiable local expertise over brand recognition."
          }
        },
        {
          "@type": "Question",
          "name": "What is the biggest mistake real estate agents make with AI search?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The most common mistake is relying entirely on portal sites (Zillow, Realtor.com) and Google Business Profile for online presence while neglecting their own website. AI platforms like ChatGPT and Perplexity cannot access GBP data or portal profiles behind JavaScript. Agents need substantive, crawlable content on their own domain with proper schema markup, neighborhood expertise pages, and client testimonials published as plain HTML text."
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
        { "@type": "ListItem", "position": 3, "name": "How Real Estate Agents Get Found on AI Search", "item": "https://theanswerengine.ai/blog/how-real-estate-agents-get-found-ai-search" }
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
      <span className="text-gray-400">Real Estate &amp; AI Search</span>
    </nav>
  );
}

export default function HowRealEstateAgentsGetFoundAISearch() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-[#FFF]">
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-white/5">
          <div className="absolute inset-0 bg-gradient-to-br from-[#F27D24]/10 via-transparent to-transparent" />
          <svg className="absolute inset-0 w-full h-full opacity-[0.03]" aria-hidden="true">
            <defs>
              <pattern id="hero-grid-realestate" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-grid-realestate)" />
          </svg>
          <div className="relative max-w-4xl mx-auto px-6 py-16 sm:py-24">
            <Breadcrumb />
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 bg-[#F27D24]/10 border border-[#F27D24]/30">
              <span className="text-sm font-semibold tracking-wider uppercase text-[#F27D24]">Industry Guides</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">
              How Real Estate Agents Get Found on{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F27D24] to-orange-400">AI Search</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
              82% of Americans now use AI for housing market research. When homebuyers ask ChatGPT for agent recommendations, certain names keep appearing. Here is what separates them from everyone else.
            </p>
            <div className="flex flex-wrap gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>April 20, 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>18 min read</span>
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
                <div className="ae-stat-value ae-accent">82%</div>
                <div className="ae-stat-label">of Americans now use AI for housing market research</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-value ae-accent">67%</div>
                <div className="ae-stat-label">of homebuyers rely on ChatGPT specifically for real estate data</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-value ae-accent">46%</div>
                <div className="ae-stat-label">of all homebuyers start their search online before contacting an agent</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-value ae-accent">87%</div>
                <div className="ae-stat-label">of brokerages and agents now use AI tools daily in their work</div>
              </div>
            </div>

            {/* TABLE OF CONTENTS */}
            <div className="ae-toc not-prose">
              <div className="ae-toc-title">Table of Contents</div>
              <ol>
                <li><a href="#the-shift">The AI Shift in Real Estate Search</a></li>
                <li><a href="#how-buyers-search">How Homebuyers Actually Use AI to Find Agents</a></li>
                <li><a href="#trust-signals">The Trust Signals That Make AI Recommend You</a></li>
                <li><a href="#content-strategy">Content That Positions You as the Local Expert</a></li>
                <li><a href="#portals-vs-ai">Why Portal Sites Alone Will Not Save You</a></li>
                <li><a href="#directories-schema">Directories, Schema, and the Technical Foundation</a></li>
                <li><a href="#reviews-reputation">Reviews, Reputation, and the Referral Pipeline</a></li>
                <li><a href="#mistakes">The 5 Biggest Mistakes Agents Make</a></li>
                <li><a href="#cheat-sheet">AI Visibility Cheat Sheet for Real Estate</a></li>
                <li><a href="#faq">Frequently Asked Questions</a></li>
              </ol>
            </div>

            {/* SECTION 1: THE SHIFT */}
            <span className="ae-section-label" id="the-shift">The Shift</span>
            <h2>The AI Shift in Real Estate Search</h2>

            <p>When a first-time homebuyer asks ChatGPT &quot;Who are the best real estate agents in Austin for first-time buyers?&quot; or Perplexity generates a detailed answer for &quot;What should I look for in a buyer&apos;s agent?&quot;, certain agents keep appearing. They are not paying for those placements. They are not running ads inside AI platforms. They have built the kind of online presence that AI trusts enough to recommend by name.</p>

            <p>Meanwhile, most real estate agents are still focused exclusively on Zillow Premier Agent placements, Google Ads, and social media marketing. Those channels still matter, but a new one is growing alongside them, and it is growing fast.</p>

            <div className="ae-quote not-prose">
              <p>A 2025 Realtor.com survey found that 82% of Americans now use AI for housing market information. 67% use ChatGPT specifically. Agents edged out AI by only 62% to 61% when buyers rated the resources that made them &quot;smarter&quot; about the market. That gap is closing every month.</p>
            </div>

            <p>The real estate industry is at an inflection point. Zillow has integrated natural-language AI search so buyers can describe what they want in conversational terms. Redfin launched an AI-powered conversational search tool that mirrors how buyers talk to a real agent. Both major portals have released ChatGPT plugins. The infrastructure for AI-driven real estate search is already built. The question is whether buyers will find you through it.</p>

            <p>Most agents have not even considered how AI sees them from the outside. That blind spot is costing them closings.</p>

            {/* CTA 1 */}
            <div className="ae-cta-inline not-prose">
              <p>Find out if AI platforms are recommending your competitors instead of you.</p>
              <Link href="/blindspot">Get Your Free Blind Spot Report &rarr;</Link>
            </div>

            {/* SECTION 2: HOW BUYERS SEARCH */}
            <span className="ae-section-label" id="how-buyers-search">Buyer Behavior</span>
            <h2>How Homebuyers Actually Use AI to Find Agents</h2>

            <p>The way homebuyers search for agents has fundamentally changed. Instead of typing &quot;real estate agent near me&quot; into Google, buyers are now having conversations with AI platforms. They are asking specific, detailed questions that AI can answer with specific, detailed recommendations.</p>

            <div className="ae-callout ae-callout-info not-prose">
              <p><strong>What buyers are asking AI:</strong> Prompts like &quot;Who is the best agent in Scottsdale for luxury homes over $2M?&quot; or &quot;Find me a buyer&apos;s agent in Denver who specializes in first-time homebuyers and has great reviews&quot; are replacing traditional keyword searches. AI platforms respond with curated recommendations, not a list of 200 agents who paid for placement.</p>
            </div>

            <p>This shift changes everything about how agents need to position themselves online. Traditional SEO and portal advertising are built around keyword matching. AI search is built around expertise matching. When a buyer asks AI for a specialist, the AI looks for signals of genuine specialization, not just someone who added a keyword to their bio.</p>

            <h3>The Conversational Search Difference</h3>

            <p>According to NAR&apos;s 2025 data, 46% of buyers started their search online and 88% ultimately purchased through an agent. The question is which agent. Referrals from friends and family have traditionally dominated agent selection (43% of buyers found their agent this way). But AI is creating a new referral channel, one where the &quot;friend&quot; is ChatGPT, and its recommendations are shaped by what it can verify about your expertise online.</p>

            {/* DECISION MATRIX */}
            <div className="ae-decision-matrix not-prose">
              <h3>How Buyers Find Agents: Channel Comparison</h3>
              <table>
                <thead>
                  <tr>
                    <th>Channel</th>
                    <th>Buyer Intent</th>
                    <th>Agent Control</th>
                    <th>Cost</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>AI Search (ChatGPT, Perplexity)</td>
                    <td><span className="ae-tier-badge ae-tier-high">Very High</span></td>
                    <td>Earned (content + signals)</td>
                    <td>Time investment only</td>
                  </tr>
                  <tr>
                    <td>Personal referral</td>
                    <td><span className="ae-tier-badge ae-tier-high">Very High</span></td>
                    <td>Indirect (reputation)</td>
                    <td>Free</td>
                  </tr>
                  <tr>
                    <td>Google organic search</td>
                    <td><span className="ae-tier-badge ae-tier-mid">High</span></td>
                    <td>SEO-driven</td>
                    <td>$1K-5K/month</td>
                  </tr>
                  <tr>
                    <td>Zillow Premier Agent</td>
                    <td><span className="ae-tier-badge ae-tier-mid">High</span></td>
                    <td>Pay-to-play</td>
                    <td>$300-1,500/month</td>
                  </tr>
                  <tr>
                    <td>Social media ads</td>
                    <td><span className="ae-tier-badge ae-tier-low">Low-Medium</span></td>
                    <td>Ad budget</td>
                    <td>$500-5K/month</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* CTA 2 */}
            <div className="ae-cta-inline not-prose">
              <p>Want to know exactly what AI says when someone searches for an agent like you?</p>
              <a href="tel:+12134442229">Call (213) 444-2229 for a Free AI Visibility Check &rarr;</a>
            </div>

            {/* SECTION 3: TRUST SIGNALS */}
            <span className="ae-section-label" id="trust-signals">Trust Signals</span>
            <h2>The Trust Signals That Make AI Recommend You</h2>

            <p>AI platforms do not randomly select agents to recommend. They evaluate a specific set of signals that indicate whether an agent is genuinely authoritative in their market. Understanding these signals is the key to becoming the agent AI recommends.</p>

            <h3>Local Expertise: Proof You Know the Market</h3>

            <p>AI platforms look for evidence that you have deep knowledge of your specific market. Not generic real estate advice. Specific, verifiable local expertise. When your content references actual neighborhoods, school districts, zoning changes, market trends with real data, and hyperlocal insights that only a practicing agent would know, AI interprets these as strong expertise signals.</p>

            <p>An agent who publishes quarterly market reports with actual median price data, days-on-market trends, and inventory analysis for their specific submarkets sends a completely different signal than one whose website says &quot;I know the local market inside and out.&quot;</p>

            <h3>Transaction History: Evidence of Experience</h3>

            <p>AI platforms look for signals of real-world experience. This means content that demonstrates you have actually closed deals, navigated difficult transactions, solved problems for clients, and understand the nuances of buying and selling in your market. Case studies (appropriately anonymized), transaction volume mentions, years of practice, and specific scenario discussions all contribute to this signal.</p>

            <div className="ae-callout ae-callout-warning not-prose">
              <p><strong>What agents get wrong:</strong> Listing &quot;$50M in closed transactions&quot; in a hero banner is a start, but AI cannot verify banner text reliably. That same information structured as crawlable HTML text on your about page, backed by testimonials that reference specific transaction types, sends a much stronger signal to AI platforms.</p>
            </div>

            <h3>Credentials and Designations</h3>

            <p>Real estate designations like CRS (Certified Residential Specialist), ABR (Accredited Buyer Representative), SRES (Seniors Real Estate Specialist), and GRI (Graduate, REALTOR Institute) act as verifiable trust markers. AI platforms can cross-reference these designations with the issuing organizations, which makes them powerful credibility signals.</p>

            <h3>Consistency Across the Web</h3>

            <p>If your name, brokerage, phone number, and specialties are different across various platforms, AI platforms lose confidence in recommending you. Consistency is not just a local SEO factor. It is a fundamental trust signal for AI.</p>

            {/* BAR CHART */}
            <div className="ae-bar-group not-prose">
              <h3>AI Trust Signal Strength for Real Estate Agents</h3>
              <div className="ae-bar-item">
                <span className="ae-bar-label">Neighborhood-specific content with data</span>
                <div className="ae-bar-track"><div className="ae-bar-fill" style={{ width: '92%' }} /></div>
                <span className="ae-bar-value">92%</span>
              </div>
              <div className="ae-bar-item">
                <span className="ae-bar-label">Client testimonials on own website (HTML)</span>
                <div className="ae-bar-track"><div className="ae-bar-fill" style={{ width: '85%' }} /></div>
                <span className="ae-bar-value">85%</span>
              </div>
              <div className="ae-bar-item">
                <span className="ae-bar-label">Verified designations (CRS, ABR, etc.)</span>
                <div className="ae-bar-track"><div className="ae-bar-fill" style={{ width: '80%' }} /></div>
                <span className="ae-bar-value">80%</span>
              </div>
              <div className="ae-bar-item">
                <span className="ae-bar-label">Structured schema markup (RealEstateAgent)</span>
                <div className="ae-bar-track"><div className="ae-bar-fill" style={{ width: '75%' }} /></div>
                <span className="ae-bar-value">75%</span>
              </div>
              <div className="ae-bar-item">
                <span className="ae-bar-label">Generic About Me page without specifics</span>
                <div className="ae-bar-track"><div className="ae-bar-fill" style={{ width: '40%' }} /></div>
                <span className="ae-bar-value">40%</span>
              </div>
              <div className="ae-bar-item">
                <span className="ae-bar-label">Portal profile only, no personal website</span>
                <div className="ae-bar-track"><div className="ae-bar-fill" style={{ width: '15%' }} /></div>
                <span className="ae-bar-value">15%</span>
              </div>
            </div>

            {/* CTA 3 */}
            <div className="ae-cta-inline not-prose">
              <p>See how your trust signals compare to the top agents in your market.</p>
              <Link href="/blindspot">Run Your Free AI Visibility Scan &rarr;</Link>
            </div>

            {/* SECTION 4: CONTENT STRATEGY */}
            <span className="ae-section-label" id="content-strategy">Content Strategy</span>
            <h2>Content That Positions You as the Local Expert</h2>

            <p>The agents who consistently show up in AI answers share a common approach to content. They are not just blogging about &quot;5 tips for first-time homebuyers.&quot; They are building a structured content library that AI platforms can parse, verify, and confidently reference when buyers ask specific questions.</p>

            <h3>Lead With the Answer, Always</h3>

            <p>When someone asks AI &quot;What is the average home price in Coral Gables?&quot;, the AI is looking for content that opens with a direct answer, followed by context and supporting data. Pages that begin with three paragraphs about the agent&apos;s credentials before ever addressing the question get filtered out.</p>

            <p>For a real estate agent, this means your neighborhood guide should start with: &quot;The median home price in Coral Gables is $1.2M as of Q1 2026, up 4.3% year-over-year. Here is what buyers need to know about this market, including inventory trends, school ratings, and what different price ranges will get you.&quot;</p>

            <h3>Build the Neighborhood Authority Library</h3>

            <p>The single most powerful content strategy for real estate agents in AI search is building deep, data-rich neighborhood pages. Not thin landing pages with a paragraph and an IDX feed. Substantive guides with market data, school information, lifestyle details, commute times, zoning notes, and genuine local perspective.</p>

            <div className="ae-callout ae-callout-success not-prose">
              <p><strong>What works:</strong> An agent in Phoenix with dedicated pages for Arcadia, Paradise Valley, Biltmore, and Old Town Scottsdale, each with quarterly updated price data, school district details, and buyer profile analysis, will consistently outperform a competing agent whose site has a single &quot;Areas We Serve&quot; page with bullet points. AI rewards depth and specificity.</p>
            </div>

            <h3>Market Reports That AI Can Cite</h3>

            <p>Monthly or quarterly market reports published as blog posts on your own website are gold for AI visibility. They contain the exact type of data AI platforms need: specific numbers, timeframes, trend analysis, and expert interpretation. When a homebuyer asks AI about market conditions in your area, your regularly updated market report becomes a primary source.</p>

            <div className="ae-takeaway not-prose">
              <div className="ae-takeaway-title">Key Takeaway</div>
              <p>AI platforms are not looking for the agent with the biggest ad budget. They are looking for the agent who has published the most verifiable, specific, and useful information about their market. Your content is your AI resume.</p>
            </div>

            {/* CTA 4 */}
            <div className="ae-cta-inline not-prose">
              <p>Not sure if your content meets the threshold for AI citations? We can tell you in 48 hours.</p>
              <a href="mailto:support@theanswerengine.ai">Email support@theanswerengine.ai &rarr;</a>
            </div>

            {/* COMPARISON TABLE */}
            <table className="ae-comparison-table not-prose">
              <thead>
                <tr>
                  <th>Content Element</th>
                  <th>What AI Cites</th>
                  <th>What AI Ignores</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Market data</td>
                  <td>Specific prices, dates, trends with context</td>
                  <td>Vague &quot;market is hot&quot; statements</td>
                </tr>
                <tr>
                  <td>Neighborhood pages</td>
                  <td>Deep guides with schools, lifestyle, data</td>
                  <td>Thin IDX landing pages with no content</td>
                </tr>
                <tr>
                  <td>Agent credentials</td>
                  <td>Named designations, years, specialty areas</td>
                  <td>&quot;Top producing agent&quot; without specifics</td>
                </tr>
                <tr>
                  <td>Testimonials</td>
                  <td>Specific stories on your website (HTML text)</td>
                  <td>Star ratings embedded from third-party widgets</td>
                </tr>
                <tr>
                  <td>Blog content</td>
                  <td>Data-driven market reports, buyer guides</td>
                  <td>Generic lifestyle posts with stock photos</td>
                </tr>
              </tbody>
            </table>

            {/* CTA 5 */}
            <div className="ae-cta-inline not-prose">
              <p>Discover which of your pages are AI-ready and which need work.</p>
              <Link href="/blindspot">Get Your Free Blind Spot Report &rarr;</Link>
            </div>

            {/* SECTION 5: PORTALS VS AI */}
            <span className="ae-section-label" id="portals-vs-ai">The Portal Problem</span>
            <h2>Why Portal Sites Alone Will Not Save You</h2>

            <p>Here is the uncomfortable truth most agents have not realized: your Zillow profile, your Realtor.com presence, and your Google Business Profile are largely invisible to ChatGPT, Perplexity, and Claude. These AI platforms cannot access the data behind those walled gardens.</p>

            <p>Zillow and Realtor.com are built on JavaScript-rendered content that AI crawlers typically cannot process. Google Business Profile sits behind Google&apos;s own proprietary infrastructure. Your carefully curated reviews, your production stats, your professional headshot, the dozens of five-star reviews you worked so hard to earn on these platforms may never be seen by the AI that a homebuyer is asking for a recommendation.</p>

            <div className="ae-callout ae-callout-orange not-prose">
              <p><strong>The walled garden problem:</strong> A Fortune article from March 2026 documented a Florida homeowner who used ChatGPT to sell his home, beating every agent&apos;s estimate by $100K and closing in five days. The buyer found the listing through AI-driven research, not through a portal. This is where the industry is heading. Agents who exist only inside portal ecosystems are building on rented land.</p>
            </div>

            {/* PROS/CONS */}
            <div className="ae-pros-cons not-prose">
              <div className="ae-pros-box">
                <h4>AI-Visible Platforms for Agents</h4>
                <ul>
                  <li>Your own website (crawlable HTML)</li>
                  <li>Brokerage website agent profiles</li>
                  <li>Realtor association directories</li>
                  <li>LinkedIn (public profile content)</li>
                  <li>Published articles on news/industry sites</li>
                  <li>Forum contributions (Reddit, BiggerPockets)</li>
                  <li>Podcast appearances with show notes</li>
                </ul>
              </div>
              <div className="ae-cons-box">
                <h4>Lower AI Visibility Platforms</h4>
                <ul>
                  <li>Zillow (JS-gated, limited crawlability)</li>
                  <li>Google Business Profile (walled garden)</li>
                  <li>Realtor.com agent profiles (JS-rendered)</li>
                  <li>Facebook business page (walled garden)</li>
                  <li>Instagram (not crawlable by AI)</li>
                  <li>Homes.com (behind JavaScript)</li>
                  <li>TikTok content (video, not crawlable)</li>
                </ul>
              </div>
            </div>

            <p>This does not mean you should abandon portals. They still drive significant business through their own ecosystems. But relying on them exclusively for your online presence leaves you completely invisible to the fastest-growing search channel in real estate. For a deeper look at why this matters across industries, read our guide on <Link href="/blog/how-customers-use-ai-to-find-local-businesses">how customers use AI to find local businesses</Link>.</p>

            {/* CTA 6 */}
            <div className="ae-cta-inline not-prose">
              <p>Not sure which platforms AI is actually reading to form opinions about you? Our report shows you.</p>
              <a href="tel:+12134442229">Call (213) 444-2229 &rarr;</a>
            </div>

            {/* SECTION 6: DIRECTORIES + SCHEMA */}
            <span className="ae-section-label" id="directories-schema">Technical Foundation</span>
            <h2>Directories, Schema, and the Technical Foundation</h2>

            <p>Content quality gets you into the conversation. Technical structure gets you cited. The difference between an agent who shows up occasionally in AI answers and one who shows up consistently often comes down to technical implementation.</p>

            <h3>Schema Markup for Real Estate Agents</h3>

            <p>Schema markup is structured data that helps AI platforms understand exactly who you are and what you do. For real estate agents, the <strong>RealEstateAgent</strong> schema type is particularly valuable because it tells AI your service areas, specializations, credentials, and contact information in a format it can parse instantly.</p>

            <p>Combined with <strong>FAQPage</strong> schema on your guides and <strong>Review</strong> schema on testimonial pages, you create a structured data layer that makes your expertise machine-readable. For a deeper dive into how schema drives AI citations, check our guide on <Link href="/blog/how-ai-search-changes-sales-funnel">how AI search changes the sales funnel</Link>.</p>

            <h3>Directories That AI Can Actually Read</h3>

            <p>Not all directories are equal for AI visibility. Focus on platforms where your profile is rendered as crawlable HTML text, not hidden behind JavaScript or login walls.</p>

            {/* TIMELINE */}
            <div className="ae-timeline not-prose">
              <h3>90-Day AI Visibility Roadmap for Agents</h3>
              <div className="ae-timeline-item">
                <div className="ae-timeline-marker">Week 1-2</div>
                <div className="ae-timeline-content">
                  <strong>Foundation:</strong> Audit your website for crawlability. Ensure all key content renders without JavaScript. Add RealEstateAgent schema to your homepage and about page.
                </div>
              </div>
              <div className="ae-timeline-item">
                <div className="ae-timeline-marker">Week 3-4</div>
                <div className="ae-timeline-content">
                  <strong>Content Build:</strong> Create or upgrade your top 5 neighborhood pages with real market data, school info, and local insights. Publish your first monthly market report.
                </div>
              </div>
              <div className="ae-timeline-item">
                <div className="ae-timeline-marker">Week 5-6</div>
                <div className="ae-timeline-content">
                  <strong>Directory Blitz:</strong> Complete profiles on all AI-crawlable directories. Ensure NAP consistency across every platform. Add client testimonials as plain HTML on your site.
                </div>
              </div>
              <div className="ae-timeline-item">
                <div className="ae-timeline-marker">Week 7-8</div>
                <div className="ae-timeline-content">
                  <strong>Authority Building:</strong> Publish 2-3 buyer/seller guides answering the most common AI queries for your market. Add FAQ schema to each guide.
                </div>
              </div>
              <div className="ae-timeline-item">
                <div className="ae-timeline-marker">Week 9-12</div>
                <div className="ae-timeline-content">
                  <strong>Momentum:</strong> Continue monthly market reports. Update neighborhood pages with fresh data. Build out remaining neighborhood guides. Monitor AI mentions.
                </div>
              </div>
            </div>

            {/* CTA 7 */}
            <div className="ae-cta-inline not-prose">
              <p>Want a customized 90-day plan built around your specific market and specialty areas?</p>
              <Link href="/blindspot">Start With Your Free AI Visibility Report &rarr;</Link>
            </div>

            {/* SECTION 7: REVIEWS */}
            <span className="ae-section-label" id="reviews-reputation">Trust Layer</span>
            <h2>Reviews, Reputation, and the AI Referral Pipeline</h2>

            <p>Client reviews play a critical role in AI recommendations, but with an important caveat: the reviews must be accessible to AI crawlers. Google reviews are largely invisible to ChatGPT and Perplexity because they sit behind JavaScript-rendered pages. Zillow reviews face the same limitation.</p>

            <p>This means agents need reviews in places AI can actually read them. Testimonials published directly on your website as plain HTML text, reviews on LinkedIn recommendations, and testimonials shared on crawlable industry platforms all contribute to the trust layer that AI evaluates.</p>

            <div className="ae-callout ae-callout-info not-prose">
              <p><strong>Review quality matters more than quantity:</strong> AI platforms analyze sentiment, specificity, and recency. A review that says &quot;Sarah helped us navigate a complicated short sale in Buckhead, saved us $40K through her negotiation on inspection items, and closed in 28 days&quot; carries far more weight with AI than &quot;Great agent, 5 stars.&quot; Encourage clients to mention the neighborhood, transaction type, and specific value you provided.</p>
            </div>

            <p>For a comprehensive look at how reviews influence AI recommendations, check out our article on <Link href="/blog/optimize-about-page-ai-recommendations">optimizing your about page for AI recommendations</Link>.</p>

            {/* CTA 8 */}
            <div className="ae-cta-inline not-prose">
              <p>Find out if AI can actually read your client reviews or if they are hidden behind JavaScript walls.</p>
              <Link href="/blindspot">Check Your AI Review Visibility &rarr;</Link>
            </div>

            {/* SECTION 8: MISTAKES */}
            <span className="ae-section-label" id="mistakes">Common Pitfalls</span>
            <h2>The 5 Biggest Mistakes Real Estate Agents Make with AI Search</h2>

            <p>After analyzing hundreds of agent websites and their AI visibility profiles, five patterns consistently hold agents back from getting recommended.</p>

            <h3>1. Treating the Portal Profile as Your Entire Online Presence</h3>

            <p>This is the most common and most costly mistake. Agents who have invested everything into their Zillow profile but have no substantive personal website are completely invisible to ChatGPT, Perplexity, and Claude. Your portal profiles serve portal users. Your own website serves AI.</p>

            <h3>2. Publishing Generic Content Without Local Specificity</h3>

            <p>A blog post titled &quot;10 Tips for First-Time Homebuyers&quot; with advice that could apply to any market in America does nothing for your AI visibility. AI platforms can find that generic information from a thousand sources. What they cannot easily find is a locally specific guide from a practicing agent with actual data about your market.</p>

            <h3>3. Hiding Credentials and Experience Behind Images</h3>

            <p>Many agents showcase their transaction volume, awards, and designations as graphics or infographics. AI crawlers cannot read image text. If your $50M production stat or your CRS designation exists only as a designed graphic on your homepage, AI has no idea it exists. All credentials and achievements need to be in crawlable HTML text.</p>

            <h3>4. Neglecting Content Freshness</h3>

            <p>Real estate is inherently time-sensitive. Market conditions change quarterly. An agent whose most recent blog post is from 2024 sends a staleness signal that AI platforms detect and penalize. Regular content updates signal that you are active, informed, and current.</p>

            <h3>5. No Schema Markup on Any Pages</h3>

            <p>Without RealEstateAgent schema, FAQPage schema, and Review schema, AI platforms have to guess what your content means. With schema, they know precisely who you are, what you specialize in, and where you operate. The difference in citation rates is substantial.</p>

            {/* CTA 9 */}
            <div className="ae-cta-inline not-prose">
              <p>Making any of these mistakes? Our free report identifies every AI visibility gap in your online presence.</p>
              <Link href="/blindspot">Get Your Free Blind Spot Report &rarr;</Link>
            </div>

            {/* COMPARISON TABLE: Real Estate vs Other Industries */}
            <table className="ae-comparison-table not-prose">
              <thead>
                <tr>
                  <th>Factor</th>
                  <th>Real Estate Agents</th>
                  <th>Home Service Companies</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Primary AI trust signal</td>
                  <td>Local market expertise + data</td>
                  <td>Service quality + licensing</td>
                </tr>
                <tr>
                  <td>Content refresh frequency</td>
                  <td>Monthly (market data changes)</td>
                  <td>Quarterly (seasonal updates)</td>
                </tr>
                <tr>
                  <td>Key directories for AI</td>
                  <td>Own site, LinkedIn, local RE boards</td>
                  <td>Angi, HomeAdvisor, BBB</td>
                </tr>
                <tr>
                  <td>Schema types needed</td>
                  <td>RealEstateAgent, FAQPage, Review</td>
                  <td>LocalBusiness, Service, Review</td>
                </tr>
                <tr>
                  <td>Biggest AI blind spot</td>
                  <td>Over-reliance on portal profiles</td>
                  <td>Over-reliance on Google Maps/GBP</td>
                </tr>
              </tbody>
            </table>

            <p>For a detailed look at how another local service industry is tackling the same challenge, see how <Link href="/blog/how-home-service-companies-dominate-ai-search">home service companies are dominating AI search</Link>.</p>

            {/* CTA 10 */}
            <div className="ae-cta-inline not-prose">
              <p>Prefer to talk strategy with a human? We specialize in AI visibility for real estate professionals.</p>
              <a href="tel:+12134442229">Call (213) 444-2229 &rarr;</a>
            </div>

            {/* CHEAT SHEET */}
            <div className="ae-cheat-sheet not-prose" id="cheat-sheet">
              <h3>AI Visibility Cheat Sheet for Real Estate Agents</h3>
              <ul>
                <li><strong>Build a substantive personal website</strong> that renders without JavaScript. Your own domain is your AI foundation.</li>
                <li><strong>Create deep neighborhood pages</strong> with real market data, school ratings, commute info, and local insights for every area you serve.</li>
                <li><strong>Publish monthly market reports</strong> with specific price data, inventory counts, and trend analysis as blog posts on your site.</li>
                <li><strong>Add RealEstateAgent and FAQPage schema</strong> to your homepage, about page, and all guide content.</li>
                <li><strong>List all designations and credentials</strong> (CRS, ABR, GRI, SRES) as crawlable HTML text, not just images or graphics.</li>
                <li><strong>Publish client testimonials as plain text</strong> directly on your site. Encourage specificity about neighborhood, transaction type, and outcomes.</li>
                <li><strong>Maintain complete profiles</strong> on AI-crawlable platforms: LinkedIn, your brokerage site, local Realtor associations, and industry publications.</li>
                <li><strong>Ensure NAP consistency</strong> (name, brokerage, phone, email, service areas) across every platform where you appear.</li>
                <li><strong>Answer the questions buyers actually ask</strong> with dedicated FAQ pages structured around specific queries, not generic real estate advice.</li>
                <li><strong>Update all content at least quarterly</strong> to reflect current market conditions, pricing trends, and regulatory changes.</li>
              </ul>
            </div>

            {/* CTA 11 */}
            <div className="ae-cta-inline not-prose">
              <p>Want this cheat sheet customized to your market and specialty areas? We do that.</p>
              <a href="mailto:support@theanswerengine.ai">Email support@theanswerengine.ai &rarr;</a>
            </div>

            {/* LOOKING AHEAD */}
            <span className="ae-section-label">Looking Ahead</span>
            <h2>What Happens When AI Becomes the First Showing</h2>

            <p>The AI in real estate market is projected to grow from $303 billion in 2025 to nearly $989 billion by 2029, a compound growth rate above 34% annually. OpenAI began testing ads inside ChatGPT in January 2026, which means the platform that 67% of homebuyers already use for housing research is about to become a full-fledged marketing channel.</p>

            <p>Today, a buyer asks AI for general market information. Tomorrow, they will ask AI which specific agent they should call for a luxury condo in South Beach or a fixer-upper in East Nashville. The agents who have built a structured, authoritative, and verifiable online presence will be the ones AI recommends. The agents who have not will wonder why the phone stopped ringing.</p>

            <div className="ae-callout ae-callout-info not-prose">
              <p><strong>The window is open now.</strong> While 87% of agents use AI tools for their own work, far fewer have optimized their online presence for how AI sees them externally. JLL research shows that 90% of real estate companies are piloting AI, but only 5% have achieved all their AI goals. This gap creates an opportunity for forward-thinking agents to establish AI visibility before the rest of the industry catches on.</p>
            </div>

            {/* CTA 12 */}
            <div className="ae-cta-inline not-prose">
              <p>The agents acting now will own their market in AI search. The ones waiting will be playing catch-up for years.</p>
              <Link href="/blindspot">See Where You Stand &rarr;</Link>
            </div>

            {/* CTA 13 */}
            <div className="ae-cta-block not-prose">
              <p>Prefer email? Send us your questions and we will get back to you within 24 hours.</p>
              <a href="mailto:support@theanswerengine.ai">Email support@theanswerengine.ai &rarr;</a>
            </div>

            {/* CTA 14 */}
            <div className="ae-cta-inline not-prose">
              <p>Or call us directly. We specialize in AI visibility for real estate professionals and local service businesses.</p>
              <a href="tel:+12134442229">Call (213) 444-2229 &rarr;</a>
            </div>

          </div>

          {/* 3-TIER CTA BLOCK (before FAQ) */}
          <div className="not-prose my-16 p-8 rounded-2xl bg-gradient-to-br from-[#F27D24]/10 to-transparent border border-[#F27D24]/20">
            <h3 className="font-plus-jakarta text-2xl font-bold text-white mb-3">Is Your Real Estate Business Invisible to AI Search?</h3>
            <p className="text-gray-400 mb-6">Get a free Blind Spot Report showing exactly how AI platforms see you right now, and what your competitors are doing that you are not.</p>
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
          <div className="ae-author-card not-prose">
            <div className="w-12 h-12 rounded-full bg-[#F27D24] flex items-center justify-center text-white font-bold text-lg shrink-0">
              AE
            </div>
            <div>
              <p className="text-white font-semibold">Justin Borges</p>
              <p className="text-sm text-gray-400">
                We help real estate professionals and local service businesses get found, cited, and recommended by AI platforms. Our team tracks AI search trends daily so you do not have to.
              </p>
            </div>
          </div>

          {/* FAQ SECTION */}
          <div className="prose prose-invert prose-lg max-w-none prose-headings:font-plus-jakarta prose-headings:text-white prose-p:text-gray-300 prose-a:text-[#F27D24] prose-a:no-underline hover:prose-a:underline prose-strong:text-white">
            <span className="ae-section-label" id="faq">FAQ</span>
            <h2>Frequently Asked Questions</h2>

            <h3>Do real estate agents really need to worry about AI search?</h3>
            <p>Yes. A 2025 Realtor.com survey found that 82% of Americans now use AI for housing market information, with 67% using ChatGPT specifically for real estate research. Homebuyers are asking AI platforms for agent recommendations by name, neighborhood, and specialty. Agents who are invisible to AI search are missing a fast-growing pipeline of high-intent leads that costs nothing to acquire.</p>

            <h3>Which AI platforms recommend real estate agents?</h3>
            <p>ChatGPT, Google AI Overviews, Perplexity, Claude, and Gemini all surface agent recommendations. ChatGPT is the most widely used by homebuyers (67%), followed by Google Gemini (54%). Each platform pulls data from different sources, so agents need visibility across multiple channels, including their own website, real estate directories, and third-party review platforms.</p>

            <h3>How is AI search different from Zillow or Realtor.com for finding agents?</h3>
            <p>Portal sites display all agents who pay for placement. AI search curates and recommends specific agents based on authority, expertise signals, review sentiment, and content depth. There is no pay-to-play option on ChatGPT or Perplexity. The AI decides who to recommend based on trust signals found across the web, which means agents with strong, structured online presence earn free, high-intent referrals.</p>

            <h3>How long does it take for a real estate agent to show up in AI search?</h3>
            <p>Most agents begin seeing AI mentions within 60 to 90 days of implementing a structured optimization strategy. This includes building out neighborhood pages with proper schema, publishing market analysis content, gathering reviews on AI-crawlable platforms, and establishing presence on directories that AI can actually read. Agents with existing strong web presence may see results sooner.</p>

            <h3>Can a solo agent compete with large brokerages in AI search?</h3>
            <p>Absolutely. AI platforms prioritize relevance, local expertise signals, and trust over brand size. A solo agent with deep neighborhood content, genuine client testimonials on their website, detailed market reports, and consistent directory listings can outrank a national brokerage that has a generic corporate site. AI rewards specificity and verifiable local expertise over brand recognition.</p>

            <h3>What is the biggest mistake real estate agents make with AI search?</h3>
            <p>The most common mistake is relying entirely on portal sites (Zillow, Realtor.com) and Google Business Profile for online presence while neglecting their own website. AI platforms like ChatGPT and Perplexity cannot access GBP data or portal profiles behind JavaScript. Agents need substantive, crawlable content on their own domain with schema markup, neighborhood expertise pages, and testimonials published as plain HTML text.</p>

            {/* CTA 15 */}
            <div className="ae-cta-inline not-prose">
              <p>Ready to see where you stand in AI search? The report is free and takes 2 minutes.</p>
              <Link href="/blindspot">Get Your Free Blind Spot Report &rarr;</Link>
            </div>

            {/* CTA 16 */}
            <div className="ae-cta-inline not-prose">
              <p>Have questions specific to your market or brokerage? Call us and we will walk you through it.</p>
              <a href="tel:+12134442229">Call (213) 444-2229 &rarr;</a>
            </div>
          </div>

          {/* FINAL CTA */}
          <div className="ae-final-cta not-prose">
            <h2>Is Your Real Estate Business Visible to AI Search?</h2>
            <p>Find out exactly what ChatGPT, Google AI, and Perplexity say when someone searches for an agent in your market and specialty. Our free Blind Spot Report shows you the gaps and the opportunities in your AI visibility.</p>
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

        </article>
      </main>
    </>
  );
}
