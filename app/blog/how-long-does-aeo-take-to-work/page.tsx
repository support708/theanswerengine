import type { Metadata } from 'next'
import Link from 'next/link'

export const revalidate = 86400
export const dynamic = 'force-static'
export const dynamicParams = true

const title = 'How Long Does AEO Take to Work? A Realistic Timeline'
const description = 'Answer Engine Optimization is not an overnight fix. Here is an honest breakdown of what to expect in weeks 1 through 16, what drives faster results, and when most businesses see their first AI citation.'
const slug = 'how-long-does-aeo-take-to-work'
const publishDate = '2026-04-18'

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'how long does AEO take',
    'answer engine optimization timeline',
    'AEO results timeline',
    'how fast does AEO work',
    'AI search visibility timeline',
    'answer engine optimization results',
    'AEO vs SEO timeline',
  ],
  openGraph: {
    title,
    description,
    type: 'article',
    publishedTime: publishDate,
    authors: ['https://theanswerengine.ai/about'],
    url: `https://theanswerengine.ai/blog/${slug}`,
    images: [{ url: `https://theanswerengine.ai/blog/${slug}.webp`, width: 1200, height: 630, alt: title }],
  },
  twitter: { card: 'summary_large_image', title, description, images: [`https://theanswerengine.ai/blog/${slug}.webp`] },
  alternates: { canonical: `https://theanswerengine.ai/blog/${slug}` },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: title,
      description,
      image: {
        '@type': 'ImageObject',
        url: `https://theanswerengine.ai/blog/${slug}.webp`,
        width: 1200,
        height: 630,
      },
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
          name: 'How long before I see my first AI citation from AEO?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most businesses see their first verifiable AI citations within 6 to 10 weeks of starting AEO, assuming content is being published consistently and structured data is properly implemented. Citations appear first on Perplexity, then ChatGPT web browsing mode, then Google AI Overviews.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is AEO faster or slower than traditional SEO?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'AEO produces measurable citation signals in roughly 6 to 16 weeks, which is significantly faster than SEO, where meaningful organic rankings typically take 6 to 12 months. However, AEO and SEO are complementary — a strong domain authority from SEO accelerates AEO results.',
          },
        },
        {
          '@type': 'Question',
          name: 'What slows down AEO results the most?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The biggest timeline killers are inconsistent publishing schedules, missing or broken structured data, thin content that does not answer questions at depth, and a weak backlink profile that signals low authority to AI crawlers.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do I need to wait for Google to reindex before AEO starts working?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For Google AI Overviews, yes — Googlebot needs to crawl and index your new content, which takes 1 to 4 weeks depending on your crawl frequency. Perplexity and Bing Copilot crawl independently and often faster.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I speed up AEO results?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. The three highest-leverage accelerators are: submitting an XML sitemap and requesting indexing through Google Search Console immediately after publishing, earning even one or two backlinks from relevant publications to each new piece of content, and using Q&A structured content formats that match the exact phrasing of queries people ask AI platforms.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I know if AEO is actually working?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Track AI citations directly by querying ChatGPT, Perplexity, and Google AI Overviews with your target questions monthly and recording which sources they cite. Secondary signals include increases in branded search volume in Google Search Console, direct traffic growth, and organic referrals from AI-adjacent content platforms.',
          },
        },
        {
          '@type': 'Question',
          name: 'What happens to AEO results if I stop publishing?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'AI systems have freshness preferences. If you stop publishing, newer competitors who continue publishing will gradually displace your citations. A maintenance publishing schedule of at least 2 pieces per month is enough to protect existing positions.',
          },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://theanswerengine.ai' },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://theanswerengine.ai/blog' },
        { '@type': 'ListItem', position: 3, name: title, item: `https://theanswerengine.ai/blog/${slug}` },
      ],
    },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <header className="ae-hero-section">
        <div className="ae-hero-badge">AEO Strategy</div>
        <h1 className="ae-hero-title">{title}</h1>
        <p className="ae-hero-desc">
          Most businesses ask this question after one month of effort and zero visible results. The honest answer: AEO works on a predictable timeline — but only if you understand what is actually happening under the hood. Here is a week-by-week breakdown of what to expect.
        </p>
        <div className="ae-hero-meta">
          <time dateTime={publishDate}>April 18, 2026</time>
          <span>·</span>
          <span>9 min read</span>
          <span>·</span>
          <span>Justin Borges</span>
        </div>

        {/* Hero SVG */}
        <div className="ae-hero-visual" aria-hidden="true">
          <svg viewBox="0 0 480 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="ae-hero-svg">
            <rect x="40" y="80" width="60" height="160" rx="6" fill="#1e293b" opacity="0.7"/>
            <rect x="120" y="110" width="60" height="130" rx="6" fill="#1e293b" opacity="0.7"/>
            <rect x="200" y="140" width="60" height="100" rx="6" fill="#1e293b" opacity="0.7"/>
            <rect x="280" y="90" width="60" height="150" rx="6" fill="#6366f1" opacity="0.8"/>
            <rect x="360" y="50" width="60" height="190" rx="6" fill="#6366f1"/>
            <text x="70" y="255" textAnchor="middle" fill="#94a3b8" fontSize="10">Wk 1-2</text>
            <text x="150" y="255" textAnchor="middle" fill="#94a3b8" fontSize="10">Wk 3-4</text>
            <text x="230" y="255" textAnchor="middle" fill="#94a3b8" fontSize="10">Wk 5-8</text>
            <text x="310" y="255" textAnchor="middle" fill="#a5b4fc" fontSize="10">Wk 9-12</text>
            <text x="390" y="255" textAnchor="middle" fill="#a5b4fc" fontSize="10">Wk 13+</text>
            <circle cx="340" cy="82" r="16" fill="#22c55e" opacity="0.9"/>
            <text x="340" y="87" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">1st</text>
            <text x="340" y="68" textAnchor="middle" fill="#86efac" fontSize="9">Citation</text>
          </svg>
        </div>

        {/* Stats grid */}
        <div className="ae-stats-grid">
          <div className="ae-stat-card">
            <span className="ae-stat-value">6–10 wks</span>
            <span className="ae-stat-label">Average time to first citation</span>
          </div>
          <div className="ae-stat-card">
            <span className="ae-stat-value">3–4x</span>
            <span className="ae-stat-label">Faster than traditional SEO</span>
          </div>
          <div className="ae-stat-card">
            <span className="ae-stat-value">16 wks</span>
            <span className="ae-stat-label">Full citation velocity established</span>
          </div>
          <div className="ae-stat-card">
            <span className="ae-stat-value">2/mo</span>
            <span className="ae-stat-label">Min. publishing to hold positions</span>
          </div>
        </div>
      </header>

      {/* Article body */}
      <article className="max-w-4xl mx-auto px-6 py-4 prose prose-invert prose-lg max-w-none">

        {/* TOC */}
        <div className="ae-toc not-prose">
          <div className="ae-toc-title">In This Guide</div>
          <ol>
            <li><a href="#why-timeline-varies">Why the Timeline Varies</a></li>
            <li><a href="#weeks-1-4">Weeks 1–4: Foundation Phase</a></li>
            <li><a href="#weeks-5-8">Weeks 5–8: Crawl and Index Phase</a></li>
            <li><a href="#weeks-9-12">Weeks 9–12: First Citations Appear</a></li>
            <li><a href="#weeks-13-16">Weeks 13–16: Velocity Phase</a></li>
            <li><a href="#accelerators">What Accelerates Results</a></li>
            <li><a href="#aeo-vs-seo">AEO vs. SEO Timeline Comparison</a></li>
            <li><a href="#how-to-track">How to Track AEO Progress</a></li>
            <li><a href="#faq">Frequently Asked Questions</a></li>
          </ol>
        </div>

        <div className="ae-cta-inline not-prose">
          <p>Want a custom AEO timeline for your industry? <Link href="/contact" className="text-[#F27D24] hover:underline font-semibold">Talk to the team</Link> — we will give you a realistic forecast based on your domain authority, competition, and content output. Ready to act? <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a free strategy session.</a></p>
        </div>

        <h2 id="why-timeline-varies">Why the Timeline Varies</h2>
        <p>
          There is no universal answer to how long AEO takes — and anyone who gives you a specific number without asking about your situation is guessing. The timeline depends on four variables that interact differently for every business.
         Drop us a line at <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>

        <div className="ae-callout ae-callout-info not-prose">
          <div className="ae-callout-title">The Four Timeline Drivers</div>
          <ul>
            <li><strong>Domain authority:</strong> Older, stronger domains get cited faster. A 10-year-old domain can see citations in weeks; a brand new domain often needs 3 to 4 months minimum.</li>
            <li><strong>Content velocity:</strong> Publishing 2+ AEO-optimized pieces per week compresses the timeline dramatically compared to once a month.</li>
            <li><strong>Query competition:</strong> Broad queries like "best plumber" take longer than niche queries like "plumber for repiping older homes in Pasadena."</li>
            <li><strong>Structured data quality:</strong> Correct schema markup accelerates AI crawlers. Missing or malformed schema delays indexing.</li>
          </ul>
        </div>

        <h2 id="weeks-1-4">Weeks 1–4: Foundation Phase</h2>
        <p>
          The first month of AEO is almost entirely invisible. You are building the infrastructure that AI systems will eventually index — but none of it shows up in citation results yet. This is the phase where most businesses lose faith and stop, right before the work starts paying off.
         Speak to an AEO specialist: <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.</p>

        <div className="ae-timeline not-prose">
          <div className="ae-timeline-item">
            <div className="ae-timeline-step">1</div>
            <div>
              <div className="ae-timeline-title">Week 1 — Technical audit and schema deployment</div>
              <div className="ae-timeline-desc">Add or repair structured data including Article, LocalBusiness, FAQPage, and HowTo schema. Verify crawlability via Search Console. Ensure robots.txt is not blocking AI crawlers.</div>
            </div>
          </div>
          <div className="ae-timeline-item">
            <div className="ae-timeline-step">2</div>
            <div>
              <div className="ae-timeline-title">Week 2 — Target query mapping</div>
              <div className="ae-timeline-desc">Map 50 to 100 questions your customers actually ask AI platforms. These become your content targets. Each piece of content is written to answer one primary question at depth.</div>
            </div>
          </div>
          <div className="ae-timeline-item">
            <div className="ae-timeline-step">3</div>
            <div>
              <div className="ae-timeline-title">Weeks 3–4 — First content batch published</div>
              <div className="ae-timeline-desc">Publish 4 to 8 AEO-optimized articles. Submit sitemap. Request indexing for each URL via Google Search Console. Perplexity and Bing begin crawling within days of publication.</div>
            </div>
          </div>
        </div>

        <p>
          What you will see at the end of week 4: Google Search Console confirms new pages are indexed. Perplexity may already be citing you for very specific, low-competition queries. Google AI Overviews will likely not have updated yet.
         One client per city. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">See if your market is available.</a></p>

        <h2 id="weeks-5-8">Weeks 5–8: Crawl and Index Phase</h2>
        <p>
          This is when Googlebot catches up and AI platforms begin associating your content with specific query patterns. Google AI Overviews typically updates its training references on a rolling basis, and weeks 5 to 8 are when newly published content starts entering that consideration pool.
         Check where you stand: <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free Blind Spot Scan.</a></p>

        <div className="ae-callout ae-callout-warning not-prose">
          <div className="ae-callout-title">Common Mistake in This Phase</div>
          <p>Businesses check ChatGPT in week 6, see no citation, and conclude AEO is not working. ChatGPT&apos;s training data has a cutoff — real-time web citations only appear in ChatGPT when users have web browsing enabled. Perplexity and Google AI Overviews are better early indicators because they pull live web results. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Schedule a free 30-min call.</a></p>
        </div>

        <div className="ae-bar-group not-prose">
          <div style={{fontWeight: 700, color: '#fff', marginBottom: '1rem', fontFamily: 'var(--font-plus-jakarta)'}}>Typical Citation Appearance Order by Platform</div>
          <div className="ae-bar-item">
            <div className="ae-bar-label">Perplexity</div>
            <div className="ae-bar-track"><div className="ae-bar-fill" style={{width:'85%'}}></div></div>
            <div className="ae-bar-value">Wks 4–7</div>
          </div>
          <div className="ae-bar-item">
            <div className="ae-bar-label">Bing Copilot</div>
            <div className="ae-bar-track"><div className="ae-bar-fill" style={{width:'72%'}}></div></div>
            <div className="ae-bar-value">Wks 5–8</div>
          </div>
          <div className="ae-bar-item">
            <div className="ae-bar-label">Google AI Overviews</div>
            <div className="ae-bar-track"><div className="ae-bar-fill" style={{width:'58%'}}></div></div>
            <div className="ae-bar-value">Wks 7–10</div>
          </div>
          <div className="ae-bar-item">
            <div className="ae-bar-label">ChatGPT (web browsing)</div>
            <div className="ae-bar-track"><div className="ae-bar-fill" style={{width:'45%'}}></div></div>
            <div className="ae-bar-value">Wks 8–12</div>
          </div>
          <div className="ae-bar-item">
            <div className="ae-bar-label">Claude (web search)</div>
            <div className="ae-bar-track"><div className="ae-bar-fill" style={{width:'40%'}}></div></div>
            <div className="ae-bar-value">Wks 10–14</div>
          </div>
        </div>
        <p className="text-sm text-gray-500 mb-6">Likelihood of citation appearance within the stated window, assuming 2+ articles/week and correct structured data Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> for a custom strategy.</p>

        <h2 id="weeks-9-12">Weeks 9–12: First Verifiable Citations</h2>
        <p>
          This is when most businesses see their first clear, verifiable AI citations — your business name or content URL appearing as a source in Perplexity, Google AI Overviews, or ChatGPT web mode. More importantly, it is a signal that the content strategy is working.
         Questions? Call <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.</p>

        <div className="ae-comparison-table not-prose">
          <table>
            <thead>
              <tr>
                <th>Indicator</th>
                <th>What It Signals</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>First Perplexity citation</td>
                <td>Content structure is correct, query targeting is working</td>
                <td>Double down on that content format</td>
              </tr>
              <tr>
                <td>Google AI Overview appearance</td>
                <td>Google trusts your domain for this query category</td>
                <td>Expand into related queries immediately</td>
              </tr>
              <tr>
                <td>Branded search spike</td>
                <td>AI users are searching your business name after seeing citations</td>
                <td>Optimize homepage for brand + service queries</td>
              </tr>
              <tr>
                <td>Direct traffic increase</td>
                <td>AI citations are driving navigation intent</td>
                <td>Audit landing pages for conversion readiness</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 id="weeks-13-16">Weeks 13–16: Velocity Phase</h2>
        <p>
          By week 13, businesses with consistent AEO programs start experiencing compounding returns. Each new piece of content is indexed faster because the domain has established a crawl pattern. Citations begin appearing for broader, higher-competition queries. Competitors who have not started AEO are visibly absent from AI recommendations.
         <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Secure your territory before a competitor does.</a></p>

        <div className="ae-callout ae-callout-success not-prose">
          <div className="ae-callout-title">The Compounding Effect</div>
          <p>A business that published 40 articles over 16 weeks does not have 40 isolated pieces of content. AI platforms see the pattern — this domain publishes authoritative answers in this topic area — and begin treating the entire domain as a trusted source. Citation velocity for new content increases dramatically after this threshold. <a href="https://theanswerengine.ai/blindspot" className="cta-inline">See your AI visibility score — free.</a></p>
        </div>

        <h2 id="accelerators">What Accelerates Results</h2>
        <p>
          Most AEO timelines can be compressed by 30 to 50% with the right accelerators applied in the first 4 weeks. These are not shortcuts — they are structural advantages.
         <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book your free consultation here.</a></p>

        <div className="ae-pros-cons not-prose">
          <div className="ae-pros-box">
            <div style={{fontWeight: 700, marginBottom: '0.5rem', color: '#4ade80'}}>What Compresses the Timeline</div>
            <ul>
              <li>Strong existing domain authority cuts early timeline in half</li>
              <li>Publishing 3+ articles per week produces citations 2–3x faster</li>
              <li>Q&A formatted content with FAQPage schema gets cited more than standard posts</li>
              <li>Requesting indexing via Google Search Console accelerates by 1–2 weeks</li>
              <li>Earning backlinks from relevant publications signals authority to AI crawlers</li>
            </ul>
          </div>
          <div className="ae-cons-box">
            <div style={{fontWeight: 700, marginBottom: '0.5rem', color: '#f87171'}}>What Extends the Timeline</div>
            <ul>
              <li>Brand new domains under 1 year old face 3–4 month minimums regardless of content quality</li>
              <li>Publishing once a month produces minimal cumulative effect</li>
              <li>Missing structured data delays indexing and reduces citation probability</li>
              <li>Targeting only broad, high-competition queries extends the timeline significantly</li>
              <li>Pausing AEO after initial results allows competitors to displace citations within 6–8 weeks</li>
            </ul>
          </div>
        </div>

        <h2 id="aeo-vs-seo">AEO vs. SEO Timeline Comparison</h2>
        <p>
          AEO and SEO operate on different timelines for different signals. Understanding the distinction helps you set the right expectations and allocate resources correctly.
         Contact us at <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>

        <div className="ae-comparison-table not-prose">
          <table>
            <thead>
              <tr>
                <th>Milestone</th>
                <th>Traditional SEO</th>
                <th>AEO</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>First indexing</td>
                <td>1–4 weeks</td>
                <td>1–2 weeks</td>
              </tr>
              <tr>
                <td>First visible results</td>
                <td>3–6 months (rankings)</td>
                <td>6–10 weeks (citations)</td>
              </tr>
              <tr>
                <td>Measurable traffic</td>
                <td>6–12 months</td>
                <td>2–4 months</td>
              </tr>
              <tr>
                <td>Competitive positions</td>
                <td>12–24 months</td>
                <td>4–6 months</td>
              </tr>
              <tr>
                <td>Compounding effects</td>
                <td>18–36 months</td>
                <td>3–5 months</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 id="how-to-track">How to Track AEO Progress</h2>
        <p>
          AEO does not have a native analytics dashboard. You track it by building a systematic citation audit process — the same way SEO pioneers tracked rankings before tools existed.
         Reach us at <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.</p>

        <div className="ae-cheat-sheet not-prose">
          <div className="ae-cheat-sheet-title">AEO Citation Tracking Protocol</div>
          <table>
            <tbody>
              <tr><td>Monthly citation audit</td><td>Query your top 20 target questions in ChatGPT (web mode), Perplexity, and Google AI Overviews. Record which sources are cited. Log your appearances and competitors in a spreadsheet.</td></tr>
              <tr><td>Branded search tracking</td><td>Monitor branded search volume in Google Search Console monthly. AEO success shows up as steady branded search growth from AI users finding your name via citations.</td></tr>
              <tr><td>Referral traffic analysis</td><td>Track referrals in Google Analytics from perplexity.ai, bing.com, and other AI platforms. This is direct, measurable AEO traffic.</td></tr>
              <tr><td>Content indexing speed</td><td>Use Google Search Console URL Inspection to verify each new article is indexed within 2 weeks of publishing. Slow indexing indicates a crawl budget or technical issue.</td></tr>
              <tr><td>Quarterly competitive scan</td><td>Query your top 10 competitive questions and note which competitors appear in AI recommendations. Track who gained and who lost positions vs. last quarter.</td></tr>
            </tbody>
          </table>
        </div>

        {/* 3-tier CTA block */}
        <div className="not-prose my-16 p-8 rounded-2xl bg-gradient-to-br from-[#F27D24]/10 to-transparent border border-[#F27D24]/20">
          <h3 className="font-plus-jakarta text-2xl font-bold text-white mb-3">Ready to Start Your AEO Clock?</h3>
          <p className="text-gray-400 mb-6">Every week you wait is a week your competitors are building citations you will have to displace later. Get your custom AEO timeline and start week 1 today. We work with one business per market. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Check if yours is still open.</a></p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F27D24] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#D96416] transition-colors">
            Get My AEO Timeline
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

        {/* Author card */}
        <div className="not-prose ae-author-card">
          <img
                src="/justin-borges.webp"
                alt="Justin Borges, Founder of The Answer Engine"
                style={{ width: 64, height: 64, borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }}
              />
              <div>
                <div className="ae-author-name" style={{ fontWeight: 600 }}>Justin Borges</div>
                <div className="ae-author-role" style={{ fontWeight: 400 }}>Founder, The Answer Engine</div>
                <p style={{ marginTop: 8, fontSize: '0.875rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.6 }}>Justin Borges founded The Answer Engine in 2025 after 13+ years in real estate, $200M+ in production, and discovering that AI search rankings now decide who gets cited as the answer. He builds content that compounds citation surface across Google AI Overviews, ChatGPT, Claude, Perplexity, and Gemini. Find your gaps with a <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free AERO scan.</a></p>
              </div>
              </div>

        {/* FAQ */}
        <div id="faq" className="not-prose mt-12">
          <h2 className="font-plus-jakarta text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>

          <details className="ae-faq-item">
            <summary>How long before I see my first AI citation from AEO?</summary>
            <p>Most businesses see their first verifiable AI citations within 6 to 10 weeks of starting AEO, assuming content is being published consistently and structured data is properly implemented. Citations appear first on Perplexity, then ChatGPT web browsing mode, then Google AI Overviews. The sequence varies by industry. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Schedule a free call</a> to see where you stand.</p>
          </details>

          <details className="ae-faq-item">
            <summary>Is AEO faster or slower than traditional SEO?</summary>
            <p>AEO produces measurable citation signals in roughly 6 to 16 weeks, which is significantly faster than SEO, where meaningful organic rankings typically take 6 to 12 months. However, AEO and SEO are complementary — a strong domain authority from SEO accelerates AEO results. Send your questions to <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>
          </details>

          <details className="ae-faq-item">
            <summary>What slows down AEO results the most?</summary>
            <p>The biggest timeline killers are inconsistent publishing schedules, missing or broken structured data, thin content that does not answer questions at depth, and a weak backlink profile. Businesses that publish 2 or more AEO-optimized articles per week with proper schema consistently outperform those who publish sporadically. Call <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> for a free consultation.</p>
          </details>

          <details className="ae-faq-item">
            <summary>Do I need to wait for Google to reindex before AEO starts working?</summary>
            <p>For Google AI Overviews, yes — Googlebot needs to crawl and index your new content, which takes 1 to 4 weeks depending on your crawl frequency. Perplexity and Bing Copilot crawl independently and often faster. This is why early AEO wins tend to appear on non-Google AI platforms first. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Claim your market territory — one client per area.</a></p>
          </details>

          <details className="ae-faq-item">
            <summary>Can I speed up AEO results?</summary>
            <p>Yes. The three highest-leverage accelerators are: submitting an XML sitemap and requesting indexing through Google Search Console immediately after publishing, earning even one or two backlinks from relevant publications to each new piece of content, and using Q&A structured content formats that match the exact phrasing of queries people ask AI platforms. <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Run your free AI Blind Spot Scan.</a></p>
          </details>

          <details className="ae-faq-item">
            <summary>How do I know if AEO is actually working?</summary>
            <p>Track AI citations directly by querying ChatGPT, Perplexity, and Google AI Overviews with your target questions monthly and recording which sources they cite. Secondary signals include increases in branded search volume in Google Search Console, direct traffic growth, and organic referrals from AI-adjacent content platforms. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a free 30-minute strategy call.</a></p>
          </details>

          <details className="ae-faq-item">
            <summary>What happens to AEO results if I stop publishing?</summary>
            <p>AI systems have freshness preferences. If you stop publishing, newer competitors who continue publishing will gradually displace your citations. A maintenance publishing schedule of at least 2 pieces per month is enough to protect existing citation positions for evergreen content. Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> to get started.</p>
          </details>
        </div>

        {/* Final CTA */}
        <div className="not-prose mt-12 p-8 rounded-2xl border border-white/10 text-center">
          <h3 className="font-plus-jakarta text-2xl font-bold text-white mb-3">Start Your 16-Week AEO Runway Today</h3>
          <p className="text-gray-400 mb-6">The businesses winning AI citations 6 months from now are starting their programs today. Every week of delay is a week of compounding advantage handed to your competitors. <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a></p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F27D24] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#D96416] transition-colors">Start Week 1 Now</Link>
            <Link href="/blog" className="inline-flex items-center gap-2 border border-white/20 text-gray-300 px-8 py-3 rounded-lg font-semibold hover:border-white/40 transition-colors">Read More AEO Guides</Link>
          </div>
        </div>

      </article>
    </>
  )
}
