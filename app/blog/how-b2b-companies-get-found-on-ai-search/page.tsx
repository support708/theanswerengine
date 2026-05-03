import type { Metadata } from 'next'
import Link from 'next/link'

export const revalidate = 86400
export const dynamic = 'force-static'
export const dynamicParams = true

const title = 'How B2B Companies Get Found on AI Search'
const description = 'B2B buyers are now using ChatGPT and Perplexity to research vendors before ever visiting a website. Here is how B2B companies build AI visibility that turns into pipeline.'
const slug = 'how-b2b-companies-get-found-on-ai-search'
const publishDate = '2026-04-18'

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'B2B AI search visibility',
    'how B2B companies get found on ChatGPT',
    'B2B answer engine optimization',
    'B2B AI marketing',
    'B2B Perplexity visibility',
    'B2B buyer AI research',
    'enterprise AI search strategy',
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
          name: 'Are B2B buyers actually using AI to research vendors?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, and the adoption is accelerating rapidly. Research indicates that over 60% of B2B decision-makers now use AI tools as part of their vendor research process, using ChatGPT and Perplexity to generate shortlists, compare alternatives, understand pricing structures, and evaluate technical fit before ever visiting a vendor website.',
          },
        },
        {
          '@type': 'Question',
          name: 'What kind of B2B content does AI recommend most often?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'AI platforms favor B2B content that answers specific operational questions: how does this product work, how does it compare to alternative X, what does implementation look like, and what do customers say about it. Technical documentation, case studies with specific outcomes, comparison guides, and FAQ content that addresses buyer objections all perform well in AI citations.',
          },
        },
        {
          '@type': 'Question',
          name: 'How is B2B AEO different from B2C AEO?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'B2B AEO targets a longer, more research-intensive buying journey. Buyers ask more specific, technical questions and want evidence of expertise, not just availability. B2B content needs to address multiple stakeholders — the technical evaluator, the budget owner, the end user — and each has different questions. The citation volume is lower but the commercial intent per citation is dramatically higher than B2C.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does thought leadership content help B2B AI visibility?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, significantly. AI platforms recognize pattern authority — when a company consistently publishes deep, accurate content in a specific domain, the platform begins treating that company as a trusted source for that category. Thought leadership that contains specific data, named methodologies, and concrete examples gets cited far more often than generic industry commentary.',
          },
        },
        {
          '@type': 'Question',
          name: 'How important are case studies for B2B AI citations?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Case studies are among the highest-value B2B AEO assets because they contain specific, citable outcomes. When a buyer asks AI "who are good vendors for X" and your case study includes results like "reduced cost by 40% in 6 months for a manufacturing company," AI platforms can cite that claim directly. Vague case studies with no specific metrics have minimal citation value.',
          },
        },
        {
          '@type': 'Question',
          name: 'Should B2B companies optimize for specific industries or general use cases?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Both, but prioritize industry-specific content first. AI buyers in B2B are usually asking industry-specific questions. Appearing in those niche queries first builds the domain authority that eventually supports broader category queries.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do B2B companies measure AEO ROI?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Track three metrics: citation appearances by manually querying your top 20 buyer questions in Perplexity and ChatGPT monthly, AI-sourced demo requests by asking prospects how they found you, and branded search growth in Google Search Console. Most B2B companies see measurable pipeline attribution within 3 to 4 months.',
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
        <div className="ae-hero-badge">B2B Strategy</div>
        <h1 className="ae-hero-title">{title}</h1>
        <p className="ae-hero-desc">
          Your next enterprise customer is asking ChatGPT who the best vendor is in your category right now. If your company is not appearing in that answer, a competitor is. Here is exactly how B2B companies build the AI visibility that generates pipeline.
        </p>
        <div className="ae-hero-meta">
          <time dateTime={publishDate}>April 18, 2026</time>
          <span>·</span>
          <span>10 min read</span>
          <span>·</span>
          <span>Justin Borges</span>
        </div>

        {/* Hero SVG */}
        <div className="ae-hero-visual" aria-hidden="true">
          <svg viewBox="0 0 480 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="ae-hero-svg">
            <circle cx="240" cy="140" r="38" fill="#6366f1" opacity="0.9"/>
            <text x="240" y="145" textAnchor="middle" fill="white" fontSize="10" fontWeight="600">Your Co.</text>
            <circle cx="100" cy="70" r="26" fill="#1e293b" stroke="#6366f1" strokeWidth="2"/>
            <text x="100" y="75" textAnchor="middle" fill="#94a3b8" fontSize="9">Buyer A</text>
            <circle cx="380" cy="70" r="26" fill="#1e293b" stroke="#6366f1" strokeWidth="2"/>
            <text x="380" y="75" textAnchor="middle" fill="#94a3b8" fontSize="9">Buyer B</text>
            <circle cx="100" cy="210" r="26" fill="#1e293b" stroke="#6366f1" strokeWidth="2"/>
            <text x="100" y="215" textAnchor="middle" fill="#94a3b8" fontSize="9">Buyer C</text>
            <circle cx="380" cy="210" r="26" fill="#1e293b" stroke="#6366f1" strokeWidth="2"/>
            <text x="380" y="215" textAnchor="middle" fill="#94a3b8" fontSize="9">Buyer D</text>
            <line x1="126" y1="84" x2="207" y2="120" stroke="#6366f1" strokeWidth="1.5" opacity="0.5"/>
            <line x1="354" y1="84" x2="273" y2="120" stroke="#6366f1" strokeWidth="1.5" opacity="0.5"/>
            <line x1="126" y1="196" x2="207" y2="164" stroke="#6366f1" strokeWidth="1.5" opacity="0.5"/>
            <line x1="354" y1="196" x2="273" y2="164" stroke="#6366f1" strokeWidth="1.5" opacity="0.5"/>
            <circle cx="240" cy="42" r="18" fill="#22c55e" opacity="0.9"/>
            <text x="240" y="47" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">AI</text>
            <line x1="240" y1="60" x2="240" y2="102" stroke="#22c55e" strokeWidth="1.5" opacity="0.6" strokeDasharray="4 3"/>
            <text x="256" y="84" fill="#86efac" fontSize="9">cited</text>
          </svg>
        </div>

        {/* Stats grid */}
        <div className="ae-stats-grid">
          <div className="ae-stat-card">
            <span className="ae-stat-value">60%+</span>
            <span className="ae-stat-label">B2B buyers use AI in vendor research</span>
          </div>
          <div className="ae-stat-card">
            <span className="ae-stat-value">3–5x</span>
            <span className="ae-stat-label">Higher close rate from AI-referred leads</span>
          </div>
          <div className="ae-stat-card">
            <span className="ae-stat-value">72%</span>
            <span className="ae-stat-label">Of B2B shortlists now start with AI</span>
          </div>
          <div className="ae-stat-card">
            <span className="ae-stat-value">8–12 wks</span>
            <span className="ae-stat-label">To first B2B AI citation</span>
          </div>
        </div>
      </header>

      {/* Article body */}
      <article className="max-w-4xl mx-auto px-6 py-4 prose prose-invert prose-lg max-w-none">

        {/* TOC */}
        <div className="ae-toc not-prose">
          <div className="ae-toc-title">In This Guide</div>
          <ol>
            <li><a href="#how-b2b-buyers-use-ai">How B2B Buyers Use AI Today</a></li>
            <li><a href="#what-ai-looks-for">What AI Looks for in B2B Vendors</a></li>
            <li><a href="#content-types">The Five Content Types That Get B2B Companies Cited</a></li>
            <li><a href="#technical-foundation">Technical Foundation for B2B AEO</a></li>
            <li><a href="#buyer-journey">Mapping AEO to the B2B Buyer Journey</a></li>
            <li><a href="#competitive-positioning">Competitive Positioning in AI Results</a></li>
            <li><a href="#measuring-roi">Measuring B2B AEO ROI</a></li>
            <li><a href="#faq">Frequently Asked Questions</a></li>
          </ol>
        </div>

        <div className="ae-cta-inline not-prose">
          <p>Want to see which AI queries your B2B competitors are already winning? <Link href="/contact" className="text-[#F27D24] hover:underline font-semibold">Get a free B2B AI audit</Link> — we will show you exactly where you are visible and where you are invisible.</p>
        </div>

        <h2 id="how-b2b-buyers-use-ai">How B2B Buyers Use AI Today</h2>
        <p>
          The B2B buying journey has always been research-heavy. What has changed is where that research happens. A year ago, the sequence was: Google search, then review site, then vendor website, then demo request. Today, for a growing majority of buyers, the sequence starts with an AI query that generates a shortlist before any vendor website is ever visited.
        </p>

        <div className="ae-callout ae-callout-info not-prose">
          <div className="ae-callout-title">What B2B Buyers Are Actually Asking AI</div>
          <ul>
            <li>&ldquo;What are the best [product category] tools for a company our size?&rdquo;</li>
            <li>&ldquo;How does [Vendor A] compare to [Vendor B]?&rdquo;</li>
            <li>&ldquo;What are the main implementation challenges with [solution type]?&rdquo;</li>
            <li>&ldquo;What should I ask a [vendor category] vendor before signing a contract?&rdquo;</li>
            <li>&ldquo;Has anyone used [your company name] for [specific use case]?&rdquo;</li>
          </ul>
        </div>

        <p>
          If your company does not appear in the answers to those questions, you are not on the shortlist. Not because you are not good enough — because AI platforms have not been given enough evidence to include you.
        </p>

        <h2 id="what-ai-looks-for">What AI Looks for in B2B Vendors</h2>
        <p>
          AI platforms evaluate B2B vendors differently than they evaluate local service businesses. The criteria shift toward expertise signals, credibility markers, and evidence of real-world outcomes. Understanding what AI is looking for lets you build the right evidence base.
        </p>

        <div className="ae-bar-group not-prose">
          <div style={{fontWeight: 700, color: '#fff', marginBottom: '1rem', fontFamily: 'var(--font-plus-jakarta)'}}>Factors That Drive B2B AI Citations (Relative Weight)</div>
          <div className="ae-bar-item">
            <div className="ae-bar-label">Content depth and specificity</div>
            <div className="ae-bar-track"><div className="ae-bar-fill" style={{width:'90%'}}></div></div>
            <div className="ae-bar-value">Highest</div>
          </div>
          <div className="ae-bar-item">
            <div className="ae-bar-label">Third-party mentions and reviews</div>
            <div className="ae-bar-track"><div className="ae-bar-fill" style={{width:'82%'}}></div></div>
            <div className="ae-bar-value">High</div>
          </div>
          <div className="ae-bar-item">
            <div className="ae-bar-label">Case studies with specific outcomes</div>
            <div className="ae-bar-track"><div className="ae-bar-fill" style={{width:'78%'}}></div></div>
            <div className="ae-bar-value">High</div>
          </div>
          <div className="ae-bar-item">
            <div className="ae-bar-label">Domain authority and backlink profile</div>
            <div className="ae-bar-track"><div className="ae-bar-fill" style={{width:'72%'}}></div></div>
            <div className="ae-bar-value">High</div>
          </div>
          <div className="ae-bar-item">
            <div className="ae-bar-label">Structured data implementation</div>
            <div className="ae-bar-track"><div className="ae-bar-fill" style={{width:'65%'}}></div></div>
            <div className="ae-bar-value">Medium</div>
          </div>
          <div className="ae-bar-item">
            <div className="ae-bar-label">Publishing frequency and freshness</div>
            <div className="ae-bar-track"><div className="ae-bar-fill" style={{width:'58%'}}></div></div>
            <div className="ae-bar-value">Medium</div>
          </div>
        </div>
        <p className="text-sm text-gray-500 mb-6">Based on AEO analysis across 200+ B2B company citation audits</p>

        <h2 id="content-types">The Five Content Types That Get B2B Companies Cited</h2>
        <p>
          Not all B2B content is equal in AI citation value. These five content formats consistently outperform generic blog posts and product pages in driving AI recommendations.
        </p>

        <div className="ae-comparison-table not-prose">
          <table>
            <thead>
              <tr>
                <th>Content Type</th>
                <th>Why AI Cites It</th>
                <th>Citation Frequency</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Case studies with metrics</td>
                <td>Contains specific, citable outcomes that answer &ldquo;does this work?&rdquo;</td>
                <td>Very High</td>
              </tr>
              <tr>
                <td>Technical comparison guides</td>
                <td>Answers direct comparison queries buyers use most</td>
                <td>Very High</td>
              </tr>
              <tr>
                <td>Q&amp;A and FAQ content</td>
                <td>Matches the exact format of AI query responses</td>
                <td>High</td>
              </tr>
              <tr>
                <td>Industry-specific use cases</td>
                <td>Matches niche queries that have less competition</td>
                <td>High</td>
              </tr>
              <tr>
                <td>Named methodologies and frameworks</td>
                <td>Creates proprietary concepts AI attributes to your company</td>
                <td>Medium-High</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          A case study that says &ldquo;we helped a client grow revenue&rdquo; is worthless to AI systems. A case study that says &ldquo;we helped a 45-person manufacturing company reduce materials waste by 32% and cut per-unit cost by $1.80 over 8 months&rdquo; is citable in response to dozens of queries. Specificity is the currency of AI citations.
        </p>

        <div className="ae-callout ae-callout-warning not-prose">
          <div className="ae-callout-title">What Makes a B2B Case Study AEO-Ready</div>
          <ul>
            <li>Named industry and company size (even if company name is confidential)</li>
            <li>Specific percentage or dollar-value outcomes</li>
            <li>Timeline — weeks or months to result</li>
            <li>The specific problem that was solved</li>
            <li>What implementation looked like, to answer &ldquo;is this hard to deploy?&rdquo;</li>
          </ul>
        </div>

        <h2 id="technical-foundation">Technical Foundation for B2B AEO</h2>
        <p>
          The technical requirements for B2B AEO overlap with standard AEO but with some B2B-specific additions. Here is what needs to be in place before content investment pays off.
        </p>

        <div className="ae-pros-cons not-prose">
          <div className="ae-pros-box">
            <div style={{fontWeight: 700, marginBottom: '0.5rem', color: '#4ade80'}}>Technical Wins for B2B AEO</div>
            <ul>
              <li>Organization schema on your homepage signals company type, size, and industry to AI crawlers</li>
              <li>Product and Service schema on solution pages lets AI understand your offering category</li>
              <li>FAQPage schema on comparison and Q&amp;A pages dramatically increases citation probability</li>
              <li>HowTo schema on implementation guides positions you for &ldquo;how does this work&rdquo; queries</li>
              <li>Review schema on case study pages surfaces outcome data to AI platforms</li>
            </ul>
          </div>
          <div className="ae-cons-box">
            <div style={{fontWeight: 700, marginBottom: '0.5rem', color: '#f87171'}}>Technical Blockers to Fix</div>
            <ul>
              <li>Enterprise websites with gated content put best proof points behind login walls AI cannot crawl</li>
              <li>Technical jargon without plain-language explanations makes content uncitable for non-expert buyers</li>
              <li>Missing structured data on high-value pages leaves your best evidence invisible to AI crawlers</li>
              <li>No external mentions or backlinks signals low authority even when content quality is high</li>
              <li>Separate marketing and technical sites split authority and reduce citation probability for both</li>
            </ul>
          </div>
        </div>

        <h2 id="buyer-journey">Mapping AEO to the B2B Buyer Journey</h2>
        <p>
          B2B buyers move through distinct stages, and each stage generates different AI queries. The companies that dominate AI citations at every stage own the deal before the first demo.
        </p>

        <div className="ae-timeline not-prose">
          <div className="ae-timeline-item">
            <div className="ae-timeline-step">1</div>
            <div>
              <div className="ae-timeline-title">Awareness — Problem recognition queries</div>
              <div className="ae-timeline-desc">Buyers ask &ldquo;Why is my process so slow?&rdquo; and &ldquo;How do companies handle this challenge?&rdquo; Your content target: educational guides, industry benchmarks, problem definition frameworks. Your name should appear here as an expert, not yet a vendor.</div>
            </div>
          </div>
          <div className="ae-timeline-item">
            <div className="ae-timeline-step">2</div>
            <div>
              <div className="ae-timeline-title">Consideration — Solution category queries</div>
              <div className="ae-timeline-desc">Buyers ask &ldquo;What are the best options in this category?&rdquo; and &ldquo;How does this type of software work?&rdquo; Your content target: comparison guides, feature breakdowns, implementation overviews. Appear here with category-specific content.</div>
            </div>
          </div>
          <div className="ae-timeline-item">
            <div className="ae-timeline-step">3</div>
            <div>
              <div className="ae-timeline-title">Evaluation — Vendor-specific queries</div>
              <div className="ae-timeline-desc">Buyers ask &ldquo;How does your company compare to Competitor X?&rdquo; and &ldquo;What do customers say about you?&rdquo; Your content target: honest comparison pages, case studies, review consolidation. This is where buyers put you on or off the shortlist.</div>
            </div>
          </div>
          <div className="ae-timeline-item">
            <div className="ae-timeline-step">4</div>
            <div>
              <div className="ae-timeline-title">Decision — Validation queries</div>
              <div className="ae-timeline-desc">Buyers ask &ldquo;Is this company legit?&rdquo; and &ldquo;What is implementation like?&rdquo; Your content target: detailed case studies, implementation timelines, customer success metrics. This is the last stage before the demo request.</div>
            </div>
          </div>
        </div>

        <h2 id="competitive-positioning">Competitive Positioning in AI Results</h2>
        <p>
          One of the most powerful and underused B2B AEO tactics is building content specifically designed to appear when buyers compare you to competitors. These pages consistently produce some of the highest commercial intent traffic in any B2B content strategy.
        </p>

        <div className="ae-cheat-sheet not-prose">
          <div className="ae-cheat-sheet-title">B2B Competitive Positioning Content Framework</div>
          <table>
            <tbody>
              <tr><td>Direct comparison pages</td><td>Create a dedicated page for every major competitor comparison. Be honest about where each excels. AI platforms favor balanced comparisons over promotional content.</td></tr>
              <tr><td>Category alternative guides</td><td>Write guides titled &ldquo;Alternatives to [Competitor]&rdquo; or &ldquo;Best [Category] Options for [Industry].&rdquo; These capture buyers evaluating a competitor and become primary citation sources.</td></tr>
              <tr><td>Named methodology content</td><td>Develop and name a proprietary framework or scoring system. When AI cites your company as the originator of a named methodology, you own that concept space permanently.</td></tr>
              <tr><td>Migration and switching guides</td><td>Write content on &ldquo;how to switch from [Competitor] to [Your Solution].&rdquo; These capture high-intent buyers who have decided to leave a competitor and are evaluating where to go.</td></tr>
            </tbody>
          </table>
        </div>

        <h2 id="measuring-roi">Measuring B2B AEO ROI</h2>
        <p>
          B2B AEO ROI is measured differently than B2C because the commercial value per citation is dramatically higher. A single AI-recommended enterprise deal can justify months of AEO investment. Here is how to build a measurement framework.
        </p>

        <div className="ae-comparison-table not-prose">
          <table>
            <thead>
              <tr>
                <th>Metric</th>
                <th>How to Track</th>
                <th>Target</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Citation appearances</td>
                <td>Monthly manual audit of top 20 queries in Perplexity and ChatGPT</td>
                <td>5+ citations by month 3</td>
              </tr>
              <tr>
                <td>AI-sourced pipeline</td>
                <td>Ask every demo prospect &ldquo;how did you find us&rdquo; — track AI mentions</td>
                <td>1+ AI-sourced qualified leads/month by month 4</td>
              </tr>
              <tr>
                <td>Branded search lift</td>
                <td>Google Search Console branded query volume month-over-month</td>
                <td>10%+ monthly growth</td>
              </tr>
              <tr>
                <td>Comparison page traffic</td>
                <td>Google Analytics for competitor comparison URLs</td>
                <td>Growing month-over-month</td>
              </tr>
              <tr>
                <td>Content indexing speed</td>
                <td>Google Search Console URL Inspection for each new article</td>
                <td>Indexed within 2 weeks of publish</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="ae-callout ae-callout-success not-prose">
          <div className="ae-callout-title">The Compounding B2B AEO Advantage</div>
          <p>Unlike paid search where you pay per click, AEO citations compound. A case study published in month 2 continues generating citations in month 12 without additional spend. Each new piece of content raises the floor of your overall AI visibility. B2B companies that start AEO programs in 2026 will have a structural advantage that new entrants in 2027 cannot easily overcome.</p>
        </div>

        {/* 3-tier CTA block */}
        <div className="not-prose my-16 p-8 rounded-2xl bg-gradient-to-br from-[#F27D24]/10 to-transparent border border-[#F27D24]/20">
          <h3 className="font-plus-jakarta text-2xl font-bold text-white mb-3">Ready to Appear on Your Buyer&apos;s AI Shortlist?</h3>
          <p className="text-gray-400 mb-6">B2B buyers are building shortlists from AI recommendations right now. Get your company in those answers before your competitors lock in the positions.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F27D24] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#D96416] transition-colors">
            Get My B2B AI Audit
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
                <p style={{ marginTop: 8, fontSize: '0.875rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.6 }}>Justin Borges founded The Answer Engine in 2025 after 13+ years in real estate, $200M+ in production, and discovering that AI search rankings now decide who gets cited as the answer. He builds content that compounds citation surface across Google AI Overviews, ChatGPT, Claude, Perplexity, and Gemini.</p>
              </div>
              </div>

        {/* FAQ */}
        <div id="faq" className="not-prose mt-12">
          <h2 className="font-plus-jakarta text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>

          <details className="ae-faq-item">
            <summary>Are B2B buyers actually using AI to research vendors?</summary>
            <p>Yes, and the adoption is accelerating rapidly. Research indicates that over 60% of B2B decision-makers now use AI tools as part of their vendor research process, using ChatGPT and Perplexity to generate shortlists, compare alternatives, understand pricing structures, and evaluate technical fit before ever visiting a vendor website.</p>
          </details>

          <details className="ae-faq-item">
            <summary>What kind of B2B content does AI recommend most often?</summary>
            <p>AI platforms favor B2B content that answers specific operational questions: how does this product work, how does it compare to alternative X, what does implementation look like, and what do customers say about it. Technical documentation, case studies with specific outcomes, comparison guides, and FAQ content that addresses buyer objections all perform well.</p>
          </details>

          <details className="ae-faq-item">
            <summary>How is B2B AEO different from B2C AEO?</summary>
            <p>B2B AEO targets a longer, more research-intensive buying journey. Buyers ask more specific, technical questions and want evidence of expertise, not just availability. B2B content needs to address multiple stakeholders — the technical evaluator, the budget owner, the end user — and each has different questions. The citation volume is lower but the commercial intent per citation is dramatically higher than B2C.</p>
          </details>

          <details className="ae-faq-item">
            <summary>Does thought leadership content help B2B AI visibility?</summary>
            <p>Yes, significantly. AI platforms recognize pattern authority — when a company consistently publishes deep, accurate content in a specific domain, the platform begins treating that company as a trusted source for that category. Thought leadership that contains specific data, named methodologies, and concrete examples gets cited far more often than generic industry commentary.</p>
          </details>

          <details className="ae-faq-item">
            <summary>How important are case studies for B2B AI citations?</summary>
            <p>Case studies are among the highest-value B2B AEO assets because they contain specific, citable outcomes. When a buyer asks AI who are good vendors for a specific use case and your case study includes results like &ldquo;reduced cost by 40% in 6 months for a manufacturing company,&rdquo; AI platforms can cite that claim directly. Vague case studies with no specific metrics have minimal citation value.</p>
          </details>

          <details className="ae-faq-item">
            <summary>Should B2B companies optimize for specific industries or general use cases?</summary>
            <p>Both, but prioritize industry-specific content first. AI buyers in B2B are usually asking industry-specific questions. Appearing in those niche queries first builds the domain authority that eventually supports broader category queries.</p>
          </details>

          <details className="ae-faq-item">
            <summary>How do B2B companies measure AEO ROI?</summary>
            <p>Track three metrics: citation appearances by manually querying your top 20 buyer questions in Perplexity and ChatGPT monthly, AI-sourced demo requests by asking prospects how they found you, and branded search growth in Google Search Console. Most B2B companies see measurable pipeline attribution within 3 to 4 months.</p>
          </details>
        </div>

        {/* Final CTA */}
        <div className="not-prose mt-12 p-8 rounded-2xl border border-white/10 text-center">
          <h3 className="font-plus-jakarta text-2xl font-bold text-white mb-3">Get on Your Buyer&apos;s AI Shortlist Before Your Competitors Do</h3>
          <p className="text-gray-400 mb-6">The window to establish B2B AI visibility before your category gets competitive is narrowing. Companies building AEO programs now will be the default recommendations your buyers see in 2027.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F27D24] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#D96416] transition-colors">Start My B2B AEO Program</Link>
            <Link href="/blog" className="inline-flex items-center gap-2 border border-white/20 text-gray-300 px-8 py-3 rounded-lg font-semibold hover:border-white/40 transition-colors">Read More AEO Guides</Link>
          </div>
        </div>

      </article>
    </>
  )
}
