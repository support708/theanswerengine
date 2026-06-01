import type { Metadata } from 'next'
import Link from 'next/link'

export const revalidate = 86400
export const dynamic = 'force-static'
export const dynamicParams = true

const title = 'How to Get Your Business Cited in Google Gemini'
const description =
  'Google Gemini now holds 18% of the AI chatbot market and over 750 million monthly users. Learn exactly how Gemini decides which businesses to cite and how to earn those citations.'
const slug = 'how-to-get-cited-google-gemini'
const publishDate = '2026-03-19'

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'Google Gemini citations',
    'get cited by Gemini',
    'Gemini AI business visibility',
    'Google AI Overviews citations',
    'Gemini structured data',
    'answer engine optimization Gemini',
    'Google Gemini business recommendations',
    'AI search visibility Google',
    'Gemini citation strategy',
    'how Gemini cites businesses',
  ],
  openGraph: {
    title,
    description,
    type: 'article',
    publishedTime: publishDate,
    authors: ['https://theanswerengine.ai/about'],
    url: `https://theanswerengine.ai/blog/${slug}`,
    images: [
      {
        url: `https://theanswerengine.ai/blog/${slug}.svg`,
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [`https://theanswerengine.ai/blog/${slug}.svg`],
  },
  alternates: {
    canonical: `https://www.theanswerengine.ai/blog/${slug}`,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: title,
      description,
      image: `https://theanswerengine.ai/blog/${slug}.svg`,
      datePublished: publishDate,
      dateModified: publishDate,
      author: {
        '@type': 'Person',
        '@id': 'https://theanswerengine.ai/about#justin-borges',
        name: 'Justin Borges',
        jobTitle: 'Founder, The Answer Engine',
        worksFor: {
          '@type': 'Organization',
          name: 'The Answer Engine',
          url: 'https://theanswerengine.ai',
        },
        knowsAbout: ['Answer Engine Optimization', 'AI Search', 'Content Strategy', 'Real Estate Marketing', 'Citation Surface'],
        url: 'https://theanswerengine.ai/about',
        image: 'https://theanswerengine.ai/justin-borges.webp',
      },
      publisher: {
        '@type': 'Organization',
        name: 'The Answer Engine',
        url: 'https://theanswerengine.ai',
        logo: {
          '@type': 'ImageObject',
          url: 'https://theanswerengine.ai/logo.png',
        },
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `https://theanswerengine.ai/blog/${slug}`,
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Does Google Gemini recommend local businesses?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Google Gemini pulls from Google Search, Google Business Profile, Maps data, and indexed web content to recommend local businesses. Unlike ChatGPT, which relies on Bing, Gemini has direct access to the entire Google ecosystem, making your Google presence the primary factor in whether you get cited.',
          },
        },
        {
          '@type': 'Question',
          name: 'How is Google Gemini different from Google AI Overviews?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Google AI Overviews appear automatically at the top of search results for qualifying queries. Google Gemini is a standalone conversational AI that users interact with directly at gemini.google.com or through the Gemini app. Both are powered by the Gemini model family, but they surface citations differently. AI Overviews cite 3 to 8 sources inline, while Gemini conversations can reference more sources across a longer exchange.',
          },
        },
        {
          '@type': 'Question',
          name: 'What structured data helps you get cited by Google Gemini?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'FAQPage, LocalBusiness, Article, HowTo, and Organization schema all improve your chances of being cited. A BrightEdge analysis found that pages with comprehensive schema markup were 2.7x more likely to be cited in AI answers. JSON-LD is the recommended format because Google processes it most reliably.',
          },
        },
        {
          '@type': 'Question',
          name: 'How many users does Google Gemini have in 2026?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Google Gemini surpassed 750 million monthly active users as reported in Google Q4 2025 earnings. It grew from 450 million users in July 2025 to 650 million by October 2025, representing 44% growth in just three months. Gemini now holds approximately 18% of the AI chatbot market.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does Google Business Profile affect Gemini citations?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Absolutely. Google Gemini has direct access to Google Business Profile data, which is a major advantage over other AI platforms like ChatGPT. A 2025 Moz study found that 73% of sources cited in AI answers had a verified Google Business Profile. Keeping your profile complete, accurate, and regularly updated is one of the most impactful steps you can take.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can small businesses get cited by Google Gemini?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Small businesses can earn Gemini citations by focusing on content quality, structured data, and Google Business Profile completeness. Research shows that lower-authority domains with attribute-rich schema achieve a 54.2% citation rate versus 31.8% for generic schema. You do not need a massive website to get cited. You need a well-structured one.',
          },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://theanswerengine.ai',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Blog',
          item: 'https://theanswerengine.ai/blog',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: title,
          item: `https://theanswerengine.ai/blog/${slug}`,
        },
      ],
    },
  ],
}

export default function Page() {
  return (
    <>
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
            <span className="text-gray-400">Google Gemini Citations</span>
          </nav>
          {/* Championship Cover Image */}
          <div className="ae-article-hero w-full rounded-xl overflow-hidden mb-10" style={{ maxHeight: 420 }}>
            <img
              src="/blog/how-to-get-cited-google-gemini.webp"
              alt="how to get cited google gemini"
              style={{ width: '100%', height: 420, objectFit: 'cover', display: 'block' }}
              loading="eager"
            />
          </div>

          {/* Header */}
          <header className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl mb-6 bg-white/[0.04] border border-white/[0.08]">
              <span className="text-sm font-semibold tracking-wider uppercase text-white">AEO Education</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-white leading-tight font-plus-jakarta">
              How to Get Your Business Cited in Google Gemini
            </h1>

            <div className="bg-gradient-to-br from-white/[0.02] to-white/[0.02] border border-white/[0.08] rounded-xl p-6 mb-8">
              <p className="text-lg text-white leading-relaxed">
                <strong>Google Gemini surpassed 750 million monthly active users in Q4 2025 and now controls 18% of the AI chatbot market.</strong> Unlike ChatGPT and Perplexity, Gemini sits on top of the entire Google ecosystem. Your Google Business Profile, Google Reviews, Maps data, and indexed web content all feed directly into its citation decisions.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>11 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>March 19, 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <span>Justin Borges</span>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <div className="prose prose-invert prose-lg max-w-none prose-headings:font-plus-jakarta prose-headings:text-white prose-p:text-gray-300 prose-a:text-[#F27D24] prose-a:no-underline hover:prose-a:underline prose-strong:text-white">

            {/* ── STATS GRID ── */}
            <div className="ae-stats-grid not-prose">
              <div className="ae-stat-card">
                <div className="ae-stat-value ae-accent">750M+</div>
                <div className="ae-stat-label">monthly active Gemini users as of Q4 2025</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-value ae-accent">18%</div>
                <div className="ae-stat-label">AI chatbot market share, up from 5% one year prior</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-value ae-accent">2.7x</div>
                <div className="ae-stat-label">more likely to be cited with comprehensive schema markup</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-value ae-accent">73%</div>
                <div className="ae-stat-label">of AI-cited sources have a verified Google Business Profile</div>
              </div>
            </div>

            {/* ── INTRODUCTION ── */}
            <span className="ae-section-label">The Opportunity</span>
            <h2>Why Google Gemini Changes Everything for Business Visibility</h2>

            <p>Google Gemini is no longer a secondary player in AI search. As of Q4 2025, Gemini surpassed <strong>750 million monthly active users</strong>, and Similarweb data from January 2026 shows it now controls roughly 18% of the AI chatbot market, up from just 5% a year earlier.</p>

            <p>For business owners, this means a massive and fast-growing audience is asking Gemini questions about products, services, and local providers every single day. The question is whether your business shows up in those answers, or whether your competitors do. Markets fill fast. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Check your territory availability.</a></p>

            <div className="ae-quote not-prose">
              <p>Gemini does not simply copy your search ranking into its answers. Being on page one of Google is no longer enough. You need content that Gemini specifically finds worth citing.</p>
            </div>

            <p>Most AI platforms like ChatGPT and Perplexity rely on their own web crawlers and third-party indexes to find business information. Google Gemini is fundamentally different because it sits on top of the entire Google ecosystem. That means Gemini has direct access to Google Search results, Google Business Profile data, Google Maps, Google Reviews, and the full Google index of the web. Your first step: <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free AERO Blind Spot Scan.</a></p>

            {/* ── CTA 1 ── */}
            <div className="ae-cta-inline not-prose">
              <p>Wondering if Gemini is already recommending your competitors instead of you?</p>
              <Link href="/blindspot">Get Your Free Blind Spot Report &rarr;</Link>
            </div>

            {/* ── CALLOUT: OPPORTUNITY VS CHALLENGE ── */}
            <div className="ae-callout ae-callout-info not-prose">
              <div className="ae-callout-title">The Gemini Advantage</div>
              <p>If your business already has a strong Google presence, you have a head start with Gemini. But Gemini does not simply copy your search ranking. Research from ALM Corp found that the Gemini 3 upgrade increased sources cited by 32% and replaced nearly half of previously cited domains. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Claim your free call</a> before your market fills.</p>
            </div>

            <p>Gemini also has a built-in distribution advantage that no other AI platform can match. Twice as many U.S. Android users interact with Gemini through the operating system itself compared to the standalone app, according to Similarweb data. Gemini is embedded into Android phones, Google Workspace, Chrome, and Google Search. Your potential customers are already using it, whether they realize it or not.</p>

            {/* ── GEMINI GROWTH TIMELINE ── */}
            <span className="ae-section-label">Growth Trajectory</span>
            <h2>Gemini&apos;s Explosive Rise: 2025 to 2026</h2>

            <div className="ae-timeline not-prose">
              <div className="ae-timeline-item">
                <strong>January 2025: 5% Market Share</strong>
                <p>Gemini holds a modest slice of the AI chatbot market. Most businesses focus exclusively on ChatGPT visibility. Reach out: <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>
              </div>
              <div className="ae-timeline-item">
                <strong>July 2025: 450M Monthly Users</strong>
                <p>Google integrates Gemini deeper into Android, Workspace, and Chrome. User adoption accelerates.</p>
              </div>
              <div className="ae-timeline-item">
                <strong>October 2025: 650M Monthly Users</strong>
                <p>44% growth in just three months. Over 120,000 enterprises now use Gemini, including 95% of the top 20 global SaaS companies. Call us at <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> today.</p>
              </div>
              <div className="ae-timeline-item">
                <strong>January 2026: Gemini 3 Launches</strong>
                <p>Sources cited in AI Overviews increase by 32%. The &quot;query fan-out&quot; system replaces 42% of previously cited domains. Depth and specificity matter more than ever.</p>
              </div>
              <div className="ae-timeline-item">
                <strong>Q1 2026: 750M+ Monthly Users, 18% Market Share</strong>
                <p>Gemini is now the second-largest AI chatbot globally. Businesses that optimized early are already reaping citation benefits. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Lock in your exclusive territory now.</a></p>
              </div>
            </div>

            {/* ── CTA 2 ── */}
            <div className="ae-cta-inline not-prose">
              <p>Not sure where your business stands with Gemini? Talk to an AEO specialist.</p>
              <a href="tel:+12134442229">Call (213) 444-2229 for a Free Consultation &rarr;</a>
            </div>

            {/* ── CITATION FACTORS ── */}
            <span className="ae-section-label">How It Works</span>
            <h2>How Gemini Decides Which Businesses to Cite</h2>

            <p>Gemini pulls from the same signals Google Search uses, but layers additional AI reasoning on top. Understanding these signals is the first step to earning citations. Based on citation pattern research from 2025 and early 2026, here are the primary factors Gemini weighs. <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Get your free AI readiness report.</a></p>

            {/* ── DECISION MATRIX ── */}
            <div className="ae-decision-matrix not-prose">
              <table>
                <thead>
                  <tr>
                    <th>Citation Factor</th>
                    <th>Impact Level</th>
                    <th>Evidence</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Domain Authority + Organic Trust</td>
                    <td>Critical</td>
                    <td>92% of AI Overview citations come from top-10 ranking domains (Semrush)</td>
                  </tr>
                  <tr>
                    <td>Content Freshness</td>
                    <td>High</td>
                    <td>Pages updated within 60 days cited at significantly higher rates</td>
                  </tr>
                  <tr>
                    <td>Schema Markup (JSON-LD)</td>
                    <td>High</td>
                    <td>2.7x more likely to be cited with comprehensive schema (BrightEdge)</td>
                  </tr>
                  <tr>
                    <td>Third-Party Mentions</td>
                    <td>High</td>
                    <td>94% of AI citations come from non-paid sources; 82% from earned media</td>
                  </tr>
                  <tr>
                    <td>Google Business Profile</td>
                    <td>Critical</td>
                    <td>73% of cited sources had a verified GBP (Moz, 2025)</td>
                  </tr>
                  <tr>
                    <td>Review Quality + Volume</td>
                    <td>Medium-High</td>
                    <td>AI evaluates review sentiment and specificity, not just star ratings</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>1. Domain Authority and Organic Trust</h3>
            <p>Gemini heavily favors domains that already rank well in Google&apos;s traditional search index. A Semrush study from 2025 found that <strong>over 92% of AI Overview citations come from domains ranking in the top 10</strong> for the relevant query. Your existing SEO foundation matters enormously, but it is not the only factor.</p>

            <h3>2. Content Freshness and Last-Modified Signals</h3>
            <p>Gemini shows a measurable preference for recently updated content, particularly on queries where information changes over time. If your service pages and blog posts have not been touched in over a year, Gemini is more likely to skip them in favor of a competitor whose content was updated last month. This connects directly to why <Link href="/blog/why-fresh-content-key-ai-search-visibility">content freshness is a key AI search signal</Link>. Ready to act? <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a free strategy session.</a></p>

            <h3>3. Structured Data and Schema Markup</h3>
            <p>A BrightEdge analysis found that pages with comprehensive schema markup were <strong>2.7x more likely to be cited in AI answers</strong> compared to similar pages without markup. For Gemini specifically, the most impactful schema types are LocalBusiness, FAQPage, Article, HowTo, and Organization. JSON-LD is the format Google recommends. For a deep dive, see our guide on <Link href="/blog/does-schema-markup-help-ai-search">schema markup and AI search</Link>.</p>

            {/* ── CTA 3 ── */}
            <div className="ae-cta-inline not-prose">
              <p>How visible is your business to Gemini and other AI platforms right now? Most businesses have no idea. Drop us a line at <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>
              <Link href="/blindspot">Check Your AI Visibility Score &rarr;</Link>
            </div>

            <h3>4. Third-Party Mentions and Earned Media</h3>
            <p>One of the most overlooked citation factors is what other websites say about your business. Research shows that <strong>94% of all AI citations come from non-paid sources</strong>, with earned media accounting for 82% of those citations. Directory listings, press mentions, industry association pages, and customer review sites all contribute to whether Gemini trusts your business enough to cite it.</p>

            <h3>5. Google Business Profile Completeness</h3>
            <p>Unlike ChatGPT, which <Link href="/blog/chatgpt-cant-see-google-business-profile">cannot see your Google Business Profile</Link>, Gemini has full access to it. A 2025 study by Moz analyzed 10,000 AI-generated answers and found that <strong>73% of cited sources had a verified Google Business Profile</strong>, compared to just 31% of non-cited sources. Your GBP is not just for Maps rankings anymore. It is a direct input into Gemini&apos;s citation decisions. Speak to an AEO specialist: <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.</p>

            <div className="ae-takeaway not-prose">
              <div className="ae-takeaway-title">Key Takeaway</div>
              <p>Gemini uses the same trust signals as Google Search but layers AI reasoning on top. Businesses that combine strong SEO fundamentals with structured data, fresh content, and a complete Google Business Profile are the ones that get cited.</p>
            </div>

            {/* ── BAR CHART: CITATION SIGNALS ── */}
            <span className="ae-section-label">Data Breakdown</span>
            <h2>Citation Signal Impact: By the Numbers</h2>

            <p>Not all signals carry equal weight. Here is how the most impactful factors stack up based on published research. One client per city. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">See if your market is available.</a></p>

            <div className="ae-bar-group not-prose">
              <div className="ae-bar-item" style={{ '--bar-width': '92%' } as React.CSSProperties}>
                <div className="ae-bar-label">Top-10 Ranking Domains Cited</div>
                <div className="ae-bar-value">92%</div>
              </div>
              <div className="ae-bar-item" style={{ '--bar-width': '82%' } as React.CSSProperties}>
                <div className="ae-bar-label">Citations from Earned Media</div>
                <div className="ae-bar-value">82%</div>
              </div>
              <div className="ae-bar-item" style={{ '--bar-width': '73%' } as React.CSSProperties}>
                <div className="ae-bar-label">Cited Sources with Verified GBP</div>
                <div className="ae-bar-value">73%</div>
              </div>
              <div className="ae-bar-item" style={{ '--bar-width': '54%' } as React.CSSProperties}>
                <div className="ae-bar-label">Rich Schema Citation Rate</div>
                <div className="ae-bar-value">54.2%</div>
              </div>
              <div className="ae-bar-item" style={{ '--bar-width': '35%' } as React.CSSProperties}>
                <div className="ae-bar-label">More Organic Clicks When AI-Cited</div>
                <div className="ae-bar-value">+35%</div>
              </div>
            </div>

            {/* ── CTA 4 ── */}
            <div className="ae-cta-inline not-prose">
              <p>Want to see which of these signals your business is missing? We will tell you for free.</p>
              <a href="mailto:support@theanswerengine.ai">Email Us for a Free AI Visibility Assessment &rarr;</a>
            </div>

            {/* ── COMPARISON: GEMINI VS OTHERS ── */}
            <span className="ae-section-label">Platform Comparison</span>
            <h2>Gemini vs. ChatGPT vs. Perplexity: Where to Focus</h2>

            <p>Each AI platform has different data sources and citation behaviors. Understanding these differences helps you prioritize where to invest your optimization effort. Check where you stand: <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free Blind Spot Scan.</a></p>

            <table className="ae-comparison-table not-prose">
              <thead>
                <tr>
                  <th>Factor</th>
                  <th>Google Gemini</th>
                  <th>ChatGPT</th>
                  <th>Perplexity</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Data Source</td>
                  <td>Full Google ecosystem</td>
                  <td>Bing + web crawling</td>
                  <td>Own crawler + multiple indexes</td>
                </tr>
                <tr>
                  <td>GBP Access</td>
                  <td>Direct access</td>
                  <td>Cannot see GBP</td>
                  <td>Limited</td>
                </tr>
                <tr>
                  <td>Monthly Users</td>
                  <td>750M+</td>
                  <td>400M+ weekly</td>
                  <td>100M+</td>
                </tr>
                <tr>
                  <td>Citation Style</td>
                  <td>Inline + AI Overviews</td>
                  <td>Inline links</td>
                  <td>Numbered source cards</td>
                </tr>
                <tr>
                  <td>Distribution</td>
                  <td>Android, Chrome, Workspace, Search</td>
                  <td>Standalone app + API</td>
                  <td>Standalone app</td>
                </tr>
                <tr>
                  <td>Schema Impact</td>
                  <td>Critical (2.7x lift)</td>
                  <td>Moderate</td>
                  <td>Moderate</td>
                </tr>
                <tr>
                  <td>Best For</td>
                  <td>Local + service businesses</td>
                  <td>National + e-commerce</td>
                  <td>Research-heavy queries</td>
                </tr>
              </tbody>
            </table>

            <div className="ae-callout ae-callout-success not-prose">
              <div className="ae-callout-title">Gemini Advantage for Local Businesses</div>
              <p>Because Gemini has direct access to Google Business Profile, Maps, and Reviews, it is the single most important AI platform for local service businesses. If you serve a specific geographic area, optimizing for Gemini should be your top priority.</p>
            </div>

            {/* ── CTA 5 ── */}
            <div className="ae-cta-inline not-prose">
              <p>See how you rank across Gemini, ChatGPT, Perplexity, and Google AI Overviews in one report. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Schedule a free 30-min call.</a></p>
              <Link href="/blindspot">Get Your Multi-Platform Visibility Report &rarr;</Link>
            </div>

            {/* ── 7-STEP PLAYBOOK ── */}
            <span className="ae-section-label">The Playbook</span>
            <h2>The 7-Step Gemini Citation Playbook</h2>

            <p>Knowing what Gemini looks for is the first half. The second half is building a system that consistently delivers those signals. Here is a practical playbook you can start executing this week.</p>

            {/* ── CHEAT SHEET ── */}
            <div className="ae-cheat-sheet not-prose">
              <h3>Quick-Reference: Gemini Optimization Checklist</h3>
              <ul>
                <li>Complete and optimize your Google Business Profile (every field filled)</li>
                <li>Implement JSON-LD schema on every key page (LocalBusiness, FAQPage, Article, HowTo, Organization)</li>
                <li>Write content that directly answers specific customer questions</li>
                <li>Build third-party authority through directories, press, and industry sites</li>
                <li>Update core content at least quarterly with fresh statistics and pricing</li>
                <li>Cultivate detailed Google Reviews and respond to every one</li>
                <li>Monitor your Gemini visibility by testing real customer queries</li>
              </ul>
            </div>

            <h3>Step 1: Complete and Optimize Your Google Business Profile</h3>
            <p>This is the single highest-impact action for Gemini visibility. Fill out every field: business description, service categories, service areas, hours, photos, products, and Q&amp;A. Add posts at least monthly. Respond to every review. A complete GBP with recent activity sends strong trust signals to Gemini. If your profile is sparse or outdated, Gemini has less data to work with and less reason to cite you. Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> for a custom strategy.</p>

            <h3>Step 2: Implement Comprehensive Schema Markup</h3>
            <p>Add JSON-LD schema to every key page on your site. Your homepage should have Organization and LocalBusiness schema. Each service page needs Service schema with area served, price range, and provider information. Blog posts need Article schema with author, date published, and date modified fields. FAQ sections need FAQPage schema. Pages using three or more schema types show higher AI citation rates. For step-by-step guidance, our article on <Link href="/blog/how-to-build-faq-page-ai-cites">building FAQ pages that AI cites</Link> covers the exact implementation process.</p>

            {/* ── CTA 6 ── */}
            <div className="ae-cta-inline not-prose">
              <p>Not sure if your schema is set up correctly? We will audit it for free. Questions? Call <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.</p>
              <a href="tel:+12134442229">Call (213) 444-2229 &rarr;</a>
            </div>

            <h3>Step 3: Write Content That Answers Specific Questions</h3>
            <p>Gemini generates responses to specific user questions. If your content directly answers common questions in your industry, Gemini has something clear to cite. Write blog posts, FAQ sections, and service descriptions that address the exact queries your potential customers type into search. Use natural language, provide specific details like pricing ranges and timelines, and lead with a direct answer before adding context.</p>

            <h3>Step 4: Build Third-Party Authority</h3>
            <p>Since earned media drives the vast majority of AI citations, you need your business mentioned on sites other than your own. Get listed in industry directories, local business associations, and review platforms. Seek press coverage and guest posts on relevant industry sites. Each third-party mention acts as a validation signal that Gemini factors into its citation decisions. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Secure your territory before a competitor does.</a></p>

            <h3>Step 5: Keep Content Updated Quarterly</h3>
            <p>Content freshness is not optional. Pages updated within 60 days are significantly more likely to appear in AI answers. Set a calendar reminder to review and update your core pages every quarter. Refresh statistics, update pricing, add new FAQ questions based on recent customer inquiries, and change the last-modified date. Gemini notices when content goes stale.</p>

            <h3>Step 6: Cultivate and Respond to Google Reviews</h3>
            <p>Gemini has access to your Google Reviews, and review content shapes how AI characterizes your business. Encourage customers to leave detailed reviews that mention specific services, outcomes, and experiences. Respond to every review, both positive and negative. AI platforms evaluate review sentiment and specificity, not just star ratings. Our guide on <Link href="/blog/how-online-reviews-shape-ai-recommendations">how online reviews shape AI recommendations</Link> covers this in detail. <a href="https://theanswerengine.ai/blindspot" className="cta-inline">See your AI visibility score — free.</a></p>

            <h3>Step 7: Monitor Your AI Visibility</h3>
            <p>You cannot improve what you do not measure. Test your Gemini visibility by asking it questions your potential customers would ask. Search for your services in your area and see if you appear in the response. Track which competitors get cited and study what they are doing differently. Tools like Otterly, Peec AI, and Profound now offer AI citation tracking across multiple platforms including Gemini.</p>

            {/* ── CTA 7 ── */}
            <div className="ae-cta-inline not-prose">
              <p>Skip the manual testing. We check your visibility across every major AI platform. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book your free consultation here.</a></p>
              <Link href="/blindspot">Request Your Free Blind Spot Report &rarr;</Link>
            </div>

            {/* ── GEMINI 3 UPGRADE ── */}
            <span className="ae-section-label">Platform Update</span>
            <h2>What the Gemini 3 Upgrade Changed for Business Citations</h2>

            <p>In January 2026, Google rolled out Gemini 3, and the impact on citation patterns was dramatic. The upgrade increased the number of sources cited in AI Overviews by 32% and replaced 42% of previously cited domains. Businesses that had earned citations under earlier Gemini models suddenly lost them, while new businesses gained visibility for the first time.</p>

            <div className="ae-callout ae-callout-warning not-prose">
              <div className="ae-callout-title">Gemini 3 Disruption Alert</div>
              <p>The Gemini 3 upgrade replaced 42% of previously cited domains. If you earned a citation under an earlier version, you cannot assume it will persist. Continuous optimization is now a requirement, not a one-time project. Contact us at <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>
            </div>

            <p>The key change is that Gemini 3 uses what researchers call &quot;query fan-out,&quot; where a single user query triggers multiple internal searches across different aspects of the question. Previously, if you ranked first for the primary keyword, you were almost guaranteed a citation. Now Gemini cross-references multiple angles and may cite a page that ranks fifth for the main keyword but provides the best answer to a specific sub-question.</p>

            <p>For businesses, this means depth matters more than ever. A single well-optimized page is not enough. You need comprehensive coverage across your topic area, with individual pages that answer specific questions thoroughly. This is exactly the content architecture described in our <Link href="/blog/hub-spoke-content-strategy-ai-citations">hub and spoke content strategy guide</Link>. Reach us at <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.</p>

            {/* ── CTA 8 ── */}
            <div className="ae-cta-inline not-prose">
              <p>Has Gemini 3 affected your visibility? Find out what changed and how to recover.</p>
              <a href="mailto:support@theanswerengine.ai">Email Us for a Post-Gemini 3 Assessment &rarr;</a>
            </div>

            {/* ── AI OVERVIEWS VS GEMINI ── */}
            <span className="ae-section-label">Two Paths</span>
            <h2>Google AI Overviews vs. Gemini Conversations: Two Citation Paths</h2>

            <p>Google now has two AI-powered surfaces where your business can appear: AI Overviews in search results and Gemini as a standalone conversation tool. Both are powered by the Gemini model family, but they behave differently. We work with one business per market. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Check if yours is still open.</a></p>

            {/* ── PROS CONS ── */}
            <div className="ae-pros-cons not-prose">
              <div className="ae-pros">
                <h4>AI Overviews (In Search Results)</h4>
                <ul>
                  <li>Appear in up to 60% of U.S. searches (Xponent21, Nov 2025)</li>
                  <li>Automatic visibility with no user opt-in required</li>
                  <li>Concise format: 3 to 8 sources cited inline</li>
                  <li>Massive reach through existing Google Search traffic</li>
                </ul>
              </div>
              <div className="ae-cons">
                <h4>Gemini Conversations (Standalone)</h4>
                <ul>
                  <li>Longer-form, multi-turn interactions</li>
                  <li>Can cite more sources across a conversation</li>
                  <li>Rewards specificity and depth over breadth</li>
                  <li>Users actively choose to engage (higher intent)</li>
                </ul>
              </div>
            </div>

            <p>AI Overviews now appear in up to 60% of U.S. search results. Seer Interactive found that organic click-through rates dropped 61% for queries where AI Overviews appear, falling from 1.76% to 0.61%. This means the citations inside those AI Overviews carry outsized value because they capture the attention traditional results used to get.</p>

            <p>Gemini conversations, on the other hand, are longer-form interactions where users ask follow-up questions and explore topics in depth. The citation patterns tend to reward specificity and depth over breadth. If a user asks Gemini to compare three plumbing companies in Phoenix, the businesses with the most complete, citable web presence will be the ones that appear. Find your gaps with a <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free AERO scan.</a></p>

            {/* ── CTA 9 ── */}
            <div className="ae-cta-inline not-prose">
              <p>Are you showing up in AI Overviews, Gemini conversations, or neither? Let us check.</p>
              <Link href="/blindspot">Get Your Free Visibility Audit &rarr;</Link>
            </div>

            {/* ── BUSINESS IMPACT BAR CHART ── */}
            <span className="ae-section-label">Impact Data</span>
            <h2>The Business Impact of AI Citations</h2>

            <p>The shift to AI-powered search is not theoretical. Here are the measured impacts on business visibility and traffic. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Schedule a free call</a> to see where you stand.</p>

            <div className="ae-bar-group not-prose">
              <div className="ae-bar-item" style={{ '--bar-width': '61%' } as React.CSSProperties}>
                <div className="ae-bar-label">Organic CTR Drop When AI Overviews Appear</div>
                <div className="ae-bar-value">-61%</div>
              </div>
              <div className="ae-bar-item" style={{ '--bar-width': '60%' } as React.CSSProperties}>
                <div className="ae-bar-label">U.S. Searches Now Showing AI Overviews</div>
                <div className="ae-bar-value">60%</div>
              </div>
              <div className="ae-bar-item" style={{ '--bar-width': '42%' } as React.CSSProperties}>
                <div className="ae-bar-label">Previously Cited Domains Replaced by Gemini 3</div>
                <div className="ae-bar-value">42%</div>
              </div>
              <div className="ae-bar-item" style={{ '--bar-width': '35%' } as React.CSSProperties}>
                <div className="ae-bar-label">More Organic Clicks for AI-Cited Brands</div>
                <div className="ae-bar-value">+35%</div>
              </div>
              <div className="ae-bar-item" style={{ '--bar-width': '32%' } as React.CSSProperties}>
                <div className="ae-bar-label">Increase in Cited Sources After Gemini 3</div>
                <div className="ae-bar-value">+32%</div>
              </div>
            </div>

            <div className="ae-takeaway not-prose">
              <div className="ae-takeaway-title">Key Takeaway</div>
              <p>Brands cited in AI Overviews earn 35% more organic clicks than non-cited competitors. As AI Overviews expand to cover 60%+ of searches, the gap between cited and non-cited businesses will only grow wider.</p>
            </div>

            {/* ── CTA 10 ── */}
            <div className="ae-cta-inline not-prose">
              <p>Questions about your AI citation strategy? Reach out directly. Send your questions to <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>
              <a href="tel:+12134442229">Call (213) 444-2229 &rarr;</a>
            </div>

            {/* ── COMMON MISTAKES ── */}
            <span className="ae-section-label">Pitfalls</span>
            <h2>Common Mistakes That Block Gemini Citations</h2>

            <p>Many businesses inadvertently block themselves from Gemini citations with avoidable mistakes. Here are the most common ones we see.</p>

            <div className="ae-callout ae-callout-warning not-prose">
              <div className="ae-callout-title">Blocking AI Crawlers in robots.txt</div>
              <p>Some businesses block Googlebot or Google-Extended in their robots.txt file, which prevents Gemini from accessing their content. Check your robots.txt file and make sure you are not inadvertently blocking the crawlers that feed into Gemini. Call <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> for a free consultation.</p>
            </div>

            <div className="ae-callout ae-callout-warning not-prose">
              <div className="ae-callout-title">Incomplete Google Business Profile</div>
              <p>A GBP with just a name, address, and phone number gives Gemini very little to work with. Businesses with fully completed profiles, including descriptions, categories, photos, and Q&amp;A, are far more likely to be cited.</p>
            </div>

            <div className="ae-callout ae-callout-warning not-prose">
              <div className="ae-callout-title">Thin, Generic Content</div>
              <p>Pages that say &quot;we offer the best service at competitive prices&quot; give Gemini nothing specific to cite. AI needs concrete details: what you do, how you do it, what it costs, and what outcomes customers can expect. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Claim your market territory — one client per area.</a></p>
            </div>

            <div className="ae-callout ae-callout-warning not-prose">
              <div className="ae-callout-title">No Schema Markup</div>
              <p>Without structured data, Gemini has to infer what your page is about from raw text. With schema, you are telling it directly. Pages with schema markup are 2.7x more likely to be cited. Skipping it means giving your competitors a measurable advantage.</p>
            </div>

            {/* ── SCHEMA IMPACT COMPARISON ── */}
            <span className="ae-section-label">Schema Deep Dive</span>
            <h2>Schema Quality and Citation Rates</h2>

            <p>Not all schema implementations are equal. Research shows a dramatic difference in citation rates based on how detailed your structured data is. <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Run your free AI Blind Spot Scan.</a></p>

            <div className="ae-stats-grid not-prose">
              <div className="ae-stat-card">
                <div className="ae-stat-value ae-accent">54.2%</div>
                <div className="ae-stat-label">Citation rate for pages with attribute-rich schema</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-value ae-accent">31.8%</div>
                <div className="ae-stat-label">Citation rate for pages with generic schema</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-value ae-accent">3+</div>
                <div className="ae-stat-label">Schema types per page for highest citation rates</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-value ae-accent">JSON-LD</div>
                <div className="ae-stat-label">Recommended format (Google processes it most reliably)</div>
              </div>
            </div>

            <div className="ae-callout ae-callout-success not-prose">
              <div className="ae-callout-title">Small Business Advantage</div>
              <p>Lower-authority domains with attribute-rich schema achieve a 54.2% citation rate versus 31.8% for generic schema. You do not need a massive website to get cited. You need a well-structured one.</p>
            </div>

            {/* ── CTA 11 ── */}
            <div className="ae-cta-inline not-prose">
              <p>Want to know if your schema is holding you back or helping you get cited? <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a free 30-minute strategy call.</a></p>
              <Link href="/blindspot">Get a Free Schema and Citation Assessment &rarr;</Link>
            </div>

            {/* ── ACTION PLAN ── */}
            <span className="ae-section-label">Action Plan</span>
            <h2>Your Gemini Citation Action Plan</h2>

            <p>Getting cited by Google Gemini is not about gaming an algorithm. It is about building the clearest, most complete, most trustworthy online presence in your market. Here is a prioritized checklist.</p>

            <div className="ae-cheat-sheet not-prose">
              <h3>Priority Action Checklist</h3>
              <ul>
                <li><strong>Audit your Google Business Profile.</strong> Fill every field. Add photos, posts, and Q&amp;A content. Verify your listing is claimed and active.</li>
                <li><strong>Check your robots.txt.</strong> Make sure Googlebot and Google-Extended are not blocked. Your content must be crawlable to be citable.</li>
                <li><strong>Add JSON-LD schema to every key page.</strong> Start with LocalBusiness, Organization, FAQPage, and Article schema. Validate with Google Rich Results Test.</li>
                <li><strong>Rewrite thin service pages.</strong> Replace generic descriptions with specific details about your process, pricing, timelines, and service areas.</li>
                <li><strong>Build a FAQ section on every service page.</strong> Include 3 to 5 questions real customers ask, with direct 2 to 4 sentence answers.</li>
                <li><strong>Set a quarterly content refresh cycle.</strong> Update statistics, refresh pricing, and add new FAQ questions every three months.</li>
                <li><strong>Test your Gemini visibility.</strong> Ask Gemini the same questions your customers ask. Note whether you appear, and study which competitors do.</li>
              </ul>
            </div>

            <p>The businesses that invest in Gemini visibility now will compound their advantage as the platform continues to grow. With 750 million users and climbing, Gemini is not a future trend. It is a current reality. The only question is whether your business will be part of the answers it delivers, or invisible to every one of those users. Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> to get started.</p>

            {/* ── CTA 12 ── */}
            <div className="ae-cta-inline not-prose">
              <p>The fastest path to Gemini visibility starts with understanding where you stand today.</p>
              <a href="mailto:support@theanswerengine.ai">Email support@theanswerengine.ai for Your Free Assessment &rarr;</a>
            </div>

            {/* ── RELATED READING ── */}
            <span className="ae-section-label">Go Deeper</span>
            <h2>Related Articles</h2>

            <ul>
              <li><Link href="/blog/does-schema-markup-help-ai-search">Does Schema Markup Help AI Search?</Link> (structured data deep dive)</li>
              <li><Link href="/blog/why-fresh-content-key-ai-search-visibility">Why Fresh Content Is Key to AI Search Visibility</Link> (content freshness strategy)</li>
              <li><Link href="/blog/chatgpt-cant-see-google-business-profile">ChatGPT Cannot See Your Google Business Profile</Link> (platform data gaps)</li>
              <li><Link href="/blog/hub-spoke-content-strategy-ai-citations">Hub and Spoke Content Strategy for AI Citations</Link> (content architecture)</li>
              <li><Link href="/blog/how-online-reviews-shape-ai-recommendations">How Online Reviews Shape AI Recommendations</Link> (review optimization)</li>
              <li><Link href="/blog/how-to-build-faq-page-ai-cites">How to Build an FAQ Page That AI Cites</Link> (FAQ optimization)</li>
            </ul>

            {/* ── CTA 13 ── */}
            <div className="ae-cta-inline not-prose">
              <p>Reading is great. Data is better. Get a concrete picture of your Gemini visibility in under 48 hours. <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a></p>
              <Link href="/blindspot">Request Your Free Report &rarr;</Link>
            </div>

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

            {/* ── CTA BLOCK ── */}
            <div className="ae-cta-block not-prose">
              <h3>Ready to Get Cited by Google Gemini?</h3>
              <p>750 million people are asking Gemini for business recommendations every month. Find out whether your business shows up, what your competitors are doing right, and where your biggest visibility gaps are.</p>
              <Link href="/blindspot" className="ae-cta-primary">Claim Your Free Blind Spot Report &rarr;</Link>
              <div className="flex flex-wrap items-center justify-center gap-6 mt-4">
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

            {/* ── FAQ SECTION ── */}
            <span className="ae-section-label">FAQ</span>
            <h2>Frequently Asked Questions</h2>

            <h3>Does Google Gemini recommend local businesses?</h3>
            <p>Yes. Google Gemini pulls from Google Search, Google Business Profile, Maps data, and indexed web content to recommend local businesses. Unlike ChatGPT, which relies on Bing, Gemini has direct access to the entire Google ecosystem, making your Google presence the primary factor in whether you get cited.</p>

            <h3>How is Google Gemini different from Google AI Overviews?</h3>
            <p>Google AI Overviews appear automatically at the top of search results. Google Gemini is a standalone conversational AI at gemini.google.com. Both use the Gemini model family, but AI Overviews cite 3 to 8 sources inline, while Gemini conversations can reference more sources across a longer exchange.</p>

            <h3>What structured data helps you get cited by Gemini?</h3>
            <p>FAQPage, LocalBusiness, Article, HowTo, and Organization schema all improve your chances. Pages with comprehensive schema markup are <strong>2.7x more likely</strong> to be cited in AI answers. JSON-LD is the recommended format.</p>

            <h3>How many users does Google Gemini have in 2026?</h3>
            <p>Google Gemini surpassed <strong>750 million monthly active users</strong> as reported in Google&apos;s Q4 2025 earnings. It grew from 450 million in July 2025 to 650 million by October 2025, representing 44% growth in three months. It now holds about 18% of the AI chatbot market.</p>

            <h3>Does Google Business Profile affect Gemini citations?</h3>
            <p>Absolutely. Gemini has direct access to GBP data, which is a major advantage over other AI platforms. A 2025 Moz study found that <strong>73% of cited sources</strong> had a verified Google Business Profile. Keeping your profile complete and current is one of the most impactful steps you can take.</p>

            <h3>Can small businesses get cited by Google Gemini?</h3>
            <p>Yes. Lower-authority domains with attribute-rich schema achieve a <strong>54.2% citation rate</strong> versus 31.8% for generic schema. You do not need a massive website. You need a well-structured one with complete schema, fresh content, and a verified Google Business Profile.</p>

            {/* ── CTA 14 ── */}
            <div className="ae-cta-inline not-prose">
              <p>Still have questions? The fastest way to get answers is to see exactly how Gemini views your business today.</p>
              <Link href="/blindspot">Get Your Free Blind Spot Report &rarr;</Link>
            </div>

          </div>

          {/* ── FINAL CTA ── */}
          <div className="ae-final-cta">
            <div className="ae-final-cta-pulse"></div>
            <h2>Is Google Gemini Recommending Your Competitors Instead of You?</h2>
            <p>750 million people are asking Gemini for business recommendations every month. Our free Blind Spot Report shows you exactly where you stand across Gemini, ChatGPT, Perplexity, and Google AI Overviews. No pitch, just the data.</p>
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
  )
}
