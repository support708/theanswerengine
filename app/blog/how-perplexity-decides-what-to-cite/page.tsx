import type { Metadata } from 'next'
import Link from 'next/link'

export const revalidate = 86400
export const dynamic = 'force-static'

const title = 'How Does Perplexity AI Choose Which Businesses to Cite?'
const description =
  'Perplexity uses RAG to cite real web sources. Learn the 5 ranking factors that determine which businesses get cited, from domain authority to content freshness.'
const slug = 'how-perplexity-decides-what-to-cite'
const publishDate = '2026-03-11'

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'Perplexity AI citations',
    'how Perplexity ranks sources',
    'Perplexity SEO',
    'Perplexity AI optimization',
    'RAG search',
    'AI citation ranking',
    'Perplexity ranking factors',
    'AEO Perplexity',
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
    canonical: `https://theanswerengine.ai/blog/${slug}`,
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
          name: 'How does Perplexity AI find and select sources?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Perplexity uses Retrieval-Augmented Generation (RAG), which means it crawls the web, retrieves relevant pages based on the query, reranks them through multiple quality gates, and then generates an answer grounded in those real web pages. Unlike ChatGPT which draws from training data, Perplexity cites live web sources in real time.',
          },
        },
        {
          '@type': 'Question',
          name: 'What are the main ranking factors for Perplexity citations?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The five main factors are citation frequency (how often your domain is cited across queries, and the single largest ranking signal), content freshness (recently published or updated content gets a significant boost), domain authority (meaningful but not dominant), content structure (clean headings, schema markup, extractable answers), and author entity recognition (consistent authorship across platforms).',
          },
        },
        {
          '@type': 'Question',
          name: 'Does Perplexity prefer certain types of websites?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Perplexity maintains curated authority domains for different categories. For technical content, GitHub and Stack Overflow are preferred. For products, Amazon and major retailers. For discussions, Reddit and LinkedIn. For news, established publications. Local businesses can earn citations by becoming the authoritative source in their specific niche and geography.',
          },
        },
        {
          '@type': 'Question',
          name: 'How important is content freshness for Perplexity rankings?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Extremely important. Perplexity heavily rewards recency, giving newly published or refreshed content a significant ranking boost. This recency effect is one of the most important ranking factors on the platform. Content that has not been updated in months will gradually lose visibility compared to recently published or refreshed sources.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can small businesses get cited by Perplexity?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. While Perplexity does favor authoritative domains, it also values original data and unique expertise. If you publish original statistics, case studies, or deeply specific local content that no one else covers, Perplexity must cite you when it uses that information. Being the only source for a specific fact or dataset is one of the most reliable paths to Perplexity citations.',
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
            <span className="text-gray-400">Perplexity Citation Factors</span>
          </nav>
          {/* Championship Cover Image */}
          <div className="ae-article-hero w-full rounded-xl overflow-hidden mb-10" style={{ maxHeight: 420 }}>
            <img
              src="/blog/how-perplexity-decides-what-to-cite.webp"
              alt="how perplexity decides what to cite"
              style={{ width: '100%', height: 420, objectFit: 'cover', display: 'block' }}
              loading="eager"
            />
          </div>

          {/* Hero */}
          <header className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl mb-6 bg-white/[0.04] border border-white/[0.08]">
              <span className="text-sm font-semibold tracking-wider uppercase text-white">Platform Deep Dive</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 font-plus-jakarta">
              How Perplexity AI Decides What Sources to Cite
            </h1>

            <div className="bg-gradient-to-br from-white/[0.02] to-white/[0.02] border border-white/[0.08] rounded-xl p-6 mb-8">
              <p className="text-lg text-white leading-relaxed">
                <strong>Perplexity crawls the live web in real time, retrieves relevant pages, and cites them with numbered footnotes.</strong> Every answer includes clickable source links. That makes Perplexity the most transparent AI platform for understanding how citations work, and the most actionable one for businesses trying to get cited.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>12 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>March 11, 2026</span>
              </div>
              <span>Justin Borges</span>
            </div>
          </header>

          {/* Main Content */}
          <div className="prose prose-invert prose-lg max-w-none prose-headings:font-plus-jakarta prose-headings:text-white prose-p:text-gray-300 prose-a:text-[#F27D24] prose-a:no-underline hover:prose-a:underline prose-strong:text-white">

            {/* Stats Grid */}
            <div className="ae-stats-grid not-prose">
              <div className="ae-stat-card">
                <div className="ae-stat-emoji">&#128270;</div>
                <div className="ae-stat-value ae-accent">RAG</div>
                <div className="ae-stat-label">Retrieval-Augmented Generation powers every Perplexity answer</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-emoji">&#128279;</div>
                <div className="ae-stat-value ae-accent">5-10</div>
                <div className="ae-stat-label">footnoted sources cited per Perplexity response on average</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-emoji">&#9200;</div>
                <div className="ae-stat-value ae-accent">Live</div>
                <div className="ae-stat-label">real-time web crawl, not static training data like ChatGPT</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-emoji">&#128200;</div>
                <div className="ae-stat-value ae-accent">5</div>
                <div className="ae-stat-label">ranking factors determine which businesses get cited</div>
              </div>
            </div>

            {/* Intro */}
            <span className="ae-section-label">The Opportunity</span>
            <h2>Why Perplexity Citations Matter for Your Business</h2>

            <p>While ChatGPT draws from training data and Google AI Overviews pull from the search index, Perplexity is different. It crawls the live web for every single query, retrieves the most relevant pages, and cites them with numbered footnotes that users can click. Markets fill fast. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Check your territory availability.</a></p>

            <p>That transparency creates an opportunity. If you understand how Perplexity selects sources, you can engineer your content to earn those citations consistently. And since Perplexity&apos;s user base skews toward professionals and researchers who want sourced, verifiable answers, those citations drive high-intent traffic. Your first step: <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free AERO Blind Spot Scan.</a></p>

            <div className="ae-quote not-prose">
              <p>If Perplexity uses a fact from your page, it is required to cite you. That is not optional. It is how RAG works. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Claim your free call</a> before your market fills.</p>
            </div>

            <p>Here is exactly how Perplexity decides which sources make the cut, and what you can do to become one of them. Reach out: <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>

            {/* CTA 1 */}
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Find out what ChatGPT says about your business — free scan</a>

            {/* RAG Architecture Timeline */}
            <span className="ae-section-label">Architecture</span>
            <h2>How Perplexity&apos;s RAG System Works</h2>

            <p>Perplexity&apos;s architecture is built on Retrieval-Augmented Generation (RAG). Unlike pure language models that generate text from memorized patterns, RAG grounds every answer in real web sources. The process has three stages. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Lock in your exclusive territory now.</a></p>

            <div className="ae-timeline not-prose">
              <div className="ae-timeline-item">
                <strong>Stage 1: Retrieval</strong>
                <p>When you type a query, Perplexity searches the web and retrieves the most relevant pages. It is specifically looking for pages that can directly answer the question, not just pages that match keywords. <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Get your free AI readiness report.</a></p>
              </div>
              <div className="ae-timeline-item">
                <strong>Stage 2: Reranking</strong>
                <p>Retrieved pages go through multiple quality gates. Perplexity uses L3 reranking to evaluate each page on relevance, authority, freshness, and extractability. Pages that are hard to parse or contain generic content get filtered out. Ready to act? <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a free strategy session.</a></p>
              </div>
              <div className="ae-timeline-item">
                <strong>Stage 3: Generation</strong>
                <p>Perplexity synthesizes the top-ranked sources into a coherent answer and attaches numbered footnotes linking back to each source. If it uses your data, it must cite you. Drop us a line at <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>
              </div>
            </div>

            <div className="ae-callout ae-callout-info not-prose">
              <p><strong>Key insight:</strong> Perplexity does not choose whether to cite sources. The RAG architecture requires it. If your content provides the factual basis for part of the answer, the citation is automatic. Your job is to become the source Perplexity retrieves. Speak to an AEO specialist: <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.</p>
            </div>

            {/* CTA 2 */}
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Find out what ChatGPT says about your business — free scan</a>

            {/* 5 Ranking Factors */}
            <span className="ae-section-label">Ranking Factors</span>
            <h2>The 5 Factors That Determine Perplexity Citations</h2>

            <p>Based on observable patterns across thousands of Perplexity queries, here are the five factors that most strongly influence which sources get cited. Check where you stand: <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free Blind Spot Scan.</a></p>

            {/* Decision Matrix */}
            <div className="ae-decision-matrix not-prose">
              <table>
                <thead>
                  <tr>
                    <th>Factor</th>
                    <th>Impact Level</th>
                    <th>Difficulty</th>
                    <th>Time to Results</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Citation Frequency</td>
                    <td><span className="text-[#F27D24] font-bold">Very High</span></td>
                    <td>Medium</td>
                    <td>3-6 months</td>
                  </tr>
                  <tr>
                    <td>Content Freshness</td>
                    <td><span className="text-[#F27D24] font-bold">High</span></td>
                    <td>Low</td>
                    <td>1-2 weeks</td>
                  </tr>
                  <tr>
                    <td>Domain Authority</td>
                    <td>Medium</td>
                    <td>High</td>
                    <td>6-12 months</td>
                  </tr>
                  <tr>
                    <td>Content Structure</td>
                    <td>Medium</td>
                    <td>Low</td>
                    <td>Immediate</td>
                  </tr>
                  <tr>
                    <td>Author Entity</td>
                    <td>Medium</td>
                    <td>Medium</td>
                    <td>2-4 months</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>1. Citation Frequency (The Compounding Factor)</h3>

            <p><strong>Citation frequency is the single largest driver of AI answer inclusions for a domain.</strong> This is a compounding effect: the more often Perplexity cites your domain across different queries, the more it trusts your domain for future queries. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Schedule a free 30-min call.</a></p>

            <p>This is why building a broad content footprint matters. If Perplexity has cited your plumbing website for water heater questions, it is more likely to cite you for drain cleaning questions too. Every citation reinforces your domain&apos;s authority in Perplexity&apos;s retrieval system. Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> for a custom strategy.</p>

            <div className="ae-callout ae-callout-success not-prose">
              <p><strong>Actionable:</strong> Publish comprehensive content across all your service categories. Each new citation builds compounding trust for your entire domain. One well-cited page lifts everything. Questions? Call <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.</p>
            </div>

            <h3>2. Content Freshness (Major Ranking Signal)</h3>

            <p>Perplexity heavily rewards recency. Newly published or recently updated content gets a significant ranking boost. A blog post published last week about AC repair costs will outrank an identical post published two years ago, even if the older post has more backlinks. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Secure your territory before a competitor does.</a></p>

            <p>The practical implication: update your most important content regularly. Refresh stats, add current year references, and republish. Perplexity notices the last-modified date and gives recently touched content preferential treatment. <a href="https://theanswerengine.ai/blindspot" className="cta-inline">See your AI visibility score — free.</a></p>

            <div className="ae-callout ae-callout-warning not-prose">
              <p><strong>Warning:</strong> Content that has not been updated in months will gradually lose visibility. If your best pages were published more than 90 days ago without updates, they are losing ground to fresher competitors right now. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book your free consultation here.</a></p>
            </div>

            {/* CTA 3 */}
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Find out what ChatGPT says about your business — free scan</a>

            <h3>3. Domain Authority (Meaningful But Not Dominant)</h3>

            <p>Domain authority plays a meaningful role in Perplexity&apos;s ranking, but it is not the dominant factor many assume. Perplexity maintains curated authority domains for different categories: GitHub and Stack Overflow for technical content, Amazon and Walmart for products, Reddit and LinkedIn for discussions. Reach us at <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.</p>

            <p>For local businesses, this means you will not outrank the New York Times on a general topic. But you can absolutely dominate your specific niche. If you are the most authoritative source on plumbing in Dallas, Perplexity will cite you for Dallas plumbing queries even though your domain authority is a fraction of national publications. We work with one business per market. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Check if yours is still open.</a></p>

            <h3>4. Content Structure and Extractability</h3>

            <p>Perplexity favors content that is easy to crawl, easy to read, and easy to extract as a clear answer. Pages with clean headings, short paragraphs, and structured data (schema markup) rank better than walls of text. Find your gaps with a <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free AERO scan.</a></p>

            {/* Cheat Sheet */}
            <div className="ae-cheat-sheet not-prose">
              <h4>Content Structure Cheat Sheet</h4>
              <ul>
                <li><strong>Lead with your answer.</strong> The first sentence of each section should state the fact directly.</li>
                <li><strong>Use clean H2/H3 headings.</strong> Perplexity uses headings to identify relevant sections.</li>
                <li><strong>Keep paragraphs under 3 sentences.</strong> Short paragraphs are easier to extract.</li>
                <li><strong>Add schema markup.</strong> FAQ, HowTo, and LocalBusiness schemas make your content machine-readable.</li>
                <li><strong>Include specific numbers.</strong> Concrete figures (pricing, stats, timeframes) earn more citations.</li>
                <li><strong>Format lists and tables.</strong> Structured data is easier for RAG systems to parse and cite.</li>
              </ul>
            </div>

            <h3>5. Author Entity Recognition</h3>

            <p>Perplexity cross-references author entities across the web. An author who publishes consistently about their domain across multiple platforms earns more citations than anonymous content. If your company&apos;s founder publishes on your blog, contributes to industry publications, and maintains an active LinkedIn presence on the same topics, Perplexity builds a stronger entity profile and is more likely to trust and cite your content. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Schedule a free call</a> to see where you stand.</p>

            <div className="ae-takeaway not-prose">
              <div className="ae-takeaway-title">Key Takeaway</div>
              <p>Citation frequency and content freshness are the two factors you can influence fastest. Domain authority takes months. But publishing fresh, well-structured content that earns citations creates a flywheel that builds authority over time. Send your questions to <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>
            </div>

            {/* CTA 4 */}
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Find out what ChatGPT says about your business — free scan</a>

            {/* Comparison Table */}
            <span className="ae-section-label">Platform Comparison</span>
            <h2>Perplexity vs. ChatGPT vs. Google AI: How They Differ</h2>

            <p>Understanding how Perplexity differs from other AI platforms helps you prioritize your optimization efforts. Each platform has distinct citation mechanics. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Claim your market territory — one client per area.</a></p>

            <table className="ae-comparison-table not-prose">
              <thead>
                <tr>
                  <th>Factor</th>
                  <th>Perplexity</th>
                  <th>ChatGPT</th>
                  <th>Google AI</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Data Source</td>
                  <td>Live web (RAG)</td>
                  <td>Training data + Bing</td>
                  <td>Search index</td>
                </tr>
                <tr>
                  <td>Citation Style</td>
                  <td>Always (numbered footnotes)</td>
                  <td>Sometimes (when browsing)</td>
                  <td>Linked source cards</td>
                </tr>
                <tr>
                  <td>Freshness Weight</td>
                  <td><span className="text-[#F27D24] font-bold">Very High</span></td>
                  <td>Medium</td>
                  <td>High</td>
                </tr>
                <tr>
                  <td>Schema Impact</td>
                  <td>Strong</td>
                  <td>Strong</td>
                  <td>Critical</td>
                </tr>
                <tr>
                  <td>Best Content Type</td>
                  <td>Original data and research</td>
                  <td>Broad authority content</td>
                  <td>Local and commercial</td>
                </tr>
                <tr>
                  <td>User Base</td>
                  <td>Professionals, researchers</td>
                  <td>General consumers</td>
                  <td>All Google users</td>
                </tr>
                <tr>
                  <td>Click-Through Potential</td>
                  <td><span className="text-[#F27D24] font-bold">Highest</span></td>
                  <td>Low</td>
                  <td>Medium</td>
                </tr>
              </tbody>
            </table>

            <div className="ae-callout ae-callout-info not-prose">
              <p><strong>Why this matters:</strong> Perplexity is the only major AI platform where every answer includes clickable source links by default. That means a Perplexity citation drives more direct traffic than a ChatGPT mention. For businesses, this makes Perplexity the highest-ROI AI platform to optimize for first. <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Run your free AI Blind Spot Scan.</a></p>
            </div>

            {/* CTA 5 */}
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Find out what ChatGPT says about your business — free scan</a>

            {/* Pros and Cons */}
            <span className="ae-section-label">Evaluation</span>
            <h2>Perplexity as a Marketing Channel: Strengths and Limitations</h2>

            <div className="ae-pros-cons not-prose">
              <div className="ae-pros">
                <h4>Strengths</h4>
                <ul>
                  <li>Every answer includes clickable source citations</li>
                  <li>High-intent user base (professionals, researchers)</li>
                  <li>Freshness-driven means new content can rank fast</li>
                  <li>Transparent citation mechanics you can reverse-engineer</li>
                  <li>Original data almost guarantees citation</li>
                  <li>Cross-platform benefits (what works here works elsewhere)</li>
                </ul>
              </div>
              <div className="ae-cons">
                <h4>Limitations</h4>
                <ul>
                  <li>Smaller user base than ChatGPT or Google</li>
                  <li>Curated authority domains can limit new players</li>
                  <li>Citation frequency takes months to build</li>
                  <li>Content must be updated regularly to maintain visibility</li>
                  <li>No direct advertising or paid placement option</li>
                </ul>
              </div>
            </div>

            {/* CTA 6 */}
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Find out what ChatGPT says about your business — free scan</a>

            {/* Bar Chart: Ranking Factor Weights */}
            <span className="ae-section-label">Impact Analysis</span>
            <h2>Ranking Factor Weight: Where to Focus First</h2>

            <p>Not all ranking factors deserve equal effort. Here is how we weight each factor based on observable citation patterns and the speed at which you can influence them. <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a></p>

            <div className="ae-bar-group not-prose">
              <div className="ae-bar-item" style={{ ['--bar-width' as string]: '95%' }}>
                <span className="ae-bar-label">Citation Frequency</span>
                <span className="ae-bar-value">95%</span>
              </div>
              <div className="ae-bar-item" style={{ ['--bar-width' as string]: '85%' }}>
                <span className="ae-bar-label">Content Freshness</span>
                <span className="ae-bar-value">85%</span>
              </div>
              <div className="ae-bar-item" style={{ ['--bar-width' as string]: '60%' }}>
                <span className="ae-bar-label">Domain Authority</span>
                <span className="ae-bar-value">60%</span>
              </div>
              <div className="ae-bar-item" style={{ ['--bar-width' as string]: '55%' }}>
                <span className="ae-bar-label">Content Structure</span>
                <span className="ae-bar-value">55%</span>
              </div>
              <div className="ae-bar-item" style={{ ['--bar-width' as string]: '45%' }}>
                <span className="ae-bar-label">Author Entity</span>
                <span className="ae-bar-value">45%</span>
              </div>
            </div>

            <div className="ae-takeaway not-prose">
              <div className="ae-takeaway-title">Priority Order</div>
              <p>Start with content freshness (fastest wins), then build content structure (same-day improvements). Citation frequency compounds over time. Domain authority and author entity are long-game investments that pay off once the foundation is set.</p>
            </div>

            {/* CTA 7 */}
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Find out what ChatGPT says about your business — free scan</a>

            {/* Practical Implementation */}
            <span className="ae-section-label">Implementation</span>
            <h2>How to Start Earning Perplexity Citations This Month</h2>

            <p>Understanding the ranking factors is one thing. Acting on them is another. Here is a concrete action plan for businesses that want to start earning Perplexity citations quickly.</p>

            <div className="ae-timeline not-prose">
              <div className="ae-timeline-item">
                <strong>Week 1: Audit Your Existing Content</strong>
                <p>Search Perplexity for your top 10 service-related queries. Document which competitors get cited and analyze why. Identify content gaps where you have expertise but no published content.</p>
              </div>
              <div className="ae-timeline-item">
                <strong>Week 2: Refresh Your Best Pages</strong>
                <p>Update your highest-traffic pages with current year data, fresh statistics, and improved structure. Add schema markup if missing. Ensure every section leads with a direct answer.</p>
              </div>
              <div className="ae-timeline-item">
                <strong>Week 3: Publish Original Data</strong>
                <p>Create content with proprietary statistics, local market data, or unique case studies. This is your fastest path to mandatory citations because no other source has this data.</p>
              </div>
              <div className="ae-timeline-item">
                <strong>Week 4: Build Cross-Platform Presence</strong>
                <p>Publish or syndicate your expertise on LinkedIn, industry forums, and relevant directories. Perplexity cross-references entities across platforms. More presence means stronger entity recognition.</p>
              </div>
            </div>

            {/* CTA 8 */}
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Find out what ChatGPT says about your business — free scan</a>

            {/* What Kind of Content Gets Cited */}
            <span className="ae-section-label">Content Strategy</span>
            <h2>What Content Perplexity Actually Cites (And What It Ignores)</h2>

            <p>Not all content is created equal in Perplexity&apos;s eyes. Some content types consistently earn citations while others get filtered out during the reranking stage.</p>

            <div className="ae-cheat-sheet not-prose">
              <h4>Content That Earns Citations</h4>
              <ul>
                <li><strong>Original statistics and survey data.</strong> If you are the only source for a specific number, Perplexity must cite you.</li>
                <li><strong>Case studies with specific outcomes.</strong> Real results with numbers beat generic advice every time.</li>
                <li><strong>Local market pricing and availability.</strong> National sites cannot compete with your local expertise.</li>
                <li><strong>Step-by-step guides with clear structure.</strong> Easy to extract means easy to cite.</li>
                <li><strong>Expert analysis with named authors.</strong> Entity recognition amplifies citation frequency.</li>
              </ul>
            </div>

            <div className="ae-callout ae-callout-warning not-prose">
              <p><strong>Content that gets filtered out:</strong> Generic blog posts that restate common knowledge, pages without clear headings, content hidden behind paywalls or login walls, and pages with heavy ad loads that slow crawl speed. If Perplexity can find the same information stated better elsewhere, your page gets skipped.</p>
            </div>

            {/* CTA 9 */}
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Find out what ChatGPT says about your business — free scan</a>

            {/* Why Perplexity Is a Leading Indicator */}
            <span className="ae-section-label">Strategic Value</span>
            <h2>Why Perplexity Is a Leading Indicator for All AI Search</h2>

            <p>Perplexity&apos;s value goes beyond its own platform. The optimization strategies that work for Perplexity also work for ChatGPT and Google AI Overviews. Here is why.</p>

            <div className="ae-stats-grid not-prose">
              <div className="ae-stat-card">
                <div className="ae-stat-emoji">&#127919;</div>
                <div className="ae-stat-value ae-accent">1st</div>
                <div className="ae-stat-label">Perplexity should be your first AI optimization target</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-emoji">&#128176;</div>
                <div className="ae-stat-value ae-accent">3x</div>
                <div className="ae-stat-label">higher click-through vs ChatGPT due to mandatory citations</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-emoji">&#128101;</div>
                <div className="ae-stat-value ae-accent">Pro</div>
                <div className="ae-stat-label">user base skews toward professionals and decision-makers</div>
              </div>
            </div>

            <p>The businesses that will dominate AI search in the next 12 months are the ones publishing citable content today: original statistics, specific local data, expert analysis that AI platforms cannot generate on their own. If Perplexity needs your data to answer a question, it will cite you. That is the simplest and most reliable path to AI visibility.</p>

            <div className="ae-quote not-prose">
              <p>If you can get cited by Perplexity, you are well positioned for every AI platform. The ranking factors overlap significantly.</p>
            </div>

            {/* CTA 10 */}
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Find out what ChatGPT says about your business — free scan</a>

            {/* FAQ Section */}
            <span className="ae-section-label">FAQ</span>
            <h2>Frequently Asked Questions</h2>

            <div className="space-y-6 not-prose">
              <div className="p-6 rounded-xl border border-gray-800 bg-gray-900">
                <h3 className="text-lg font-semibold text-white mb-3 font-plus-jakarta">
                  How does Perplexity AI find and select sources?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Perplexity uses Retrieval-Augmented Generation (RAG): it crawls the
                  web, retrieves relevant pages, reranks them through multiple quality
                  gates, and generates an answer grounded in those real web sources.
                  Unlike ChatGPT which draws from training data, Perplexity cites live
                  web sources in real time.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-gray-800 bg-gray-900">
                <h3 className="text-lg font-semibold text-white mb-3 font-plus-jakarta">
                  What are the main ranking factors for Perplexity citations?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  The five main factors are{' '}
                  <strong className="text-white">citation frequency</strong> (the
                  single largest signal),{' '}
                  <strong className="text-white">content freshness</strong> (major
                  signal),{' '}
                  <strong className="text-white">domain authority</strong> (meaningful but not dominant),{' '}
                  <strong className="text-white">content structure</strong> (clean
                  headings and schema), and{' '}
                  <strong className="text-white">author entity recognition</strong>{' '}
                  (cross-platform authorship).
                </p>
              </div>

              <div className="p-6 rounded-xl border border-gray-800 bg-gray-900">
                <h3 className="text-lg font-semibold text-white mb-3 font-plus-jakarta">
                  Does Perplexity prefer certain types of websites?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Yes. Perplexity maintains curated authority domains: GitHub for
                  technical, Amazon for products, Reddit for discussions, major
                  publications for news. Local businesses can earn citations by
                  becoming the authoritative source in their specific niche and
                  geography.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-gray-800 bg-gray-900">
                <h3 className="text-lg font-semibold text-white mb-3 font-plus-jakarta">
                  How important is content freshness for Perplexity rankings?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Extremely important. Perplexity heavily rewards recency, giving newly
                  published or refreshed content a significant ranking boost. Content
                  not updated in months gradually loses visibility compared to recently
                  published or refreshed sources.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-gray-800 bg-gray-900">
                <h3 className="text-lg font-semibold text-white mb-3 font-plus-jakarta">
                  Can small businesses get cited by Perplexity?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Yes. While Perplexity favors authoritative domains, it also values
                  original data and unique expertise. If you publish original
                  statistics, case studies, or deeply specific local content, Perplexity
                  must cite you when it uses that information. Being the only source for
                  a specific fact is one of the most reliable paths to citations.
                </p>
              </div>

              {/* CTA 11 */}
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Find out what ChatGPT says about your business — free scan</a>
            </div>

            {/* CTA 12 */}
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Find out what ChatGPT says about your business — free scan</a>

          </div>

          {/* Final CTA Block */}
            <div className="ae-cta-block not-prose my-16">
              <h3>ChatGPT Recommends Businesses Every Day — Is Yours One of Them?</h3>
              <p>You can&apos;t pay to be recommended by ChatGPT. You have to earn it — through authoritative content, citations from credible sources, and consistent entity signals. We build all three. Free scan shows your current ChatGPT citation rate.</p>
              <a href="https://theanswerengine.ai/blindspot" className="ae-cta-primary">Run Free ChatGPT Visibility Scan →</a>
              <div style={{ marginTop: '16px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <a href="tel:+12134442229" className="ae-cta-secondary">(213) 444-2229</a>
                <a href="https://calendly.com/theanswerengine-support/30min" className="ae-cta-secondary">Book Free Strategy Call</a>
              </div>
            </div>

          {/* Final Pulse CTA */}
          <section className="ae-final-cta not-prose">
            <div className="ae-final-cta-inner">
              <h2 className="text-2xl sm:text-3xl font-black mb-4 text-white font-headline uppercase tracking-tighter">
                ChatGPT Is Making Business Recommendations in Your Market Right Now
              </h2>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                It's recommending someone. Is it you? The Answer Engine's free Blind Spot Report shows your ChatGPT, Perplexity, and Google AI citation rate in 48 hours. One business per market slot.
              </p>
              <a
                href="https://theanswerengine.ai/blindspot"
                className="inline-flex items-center justify-center gap-2 bg-[#F27D24] text-black font-black px-10 py-4 tracking-tighter hover:translate-y-[2px] transition-transform font-headline uppercase"
              >
                Run Free ChatGPT Visibility Scan →
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

          {/* Author Card */}
          <div className="ae-author-card not-prose mt-12">
            <div className="w-12 h-12 rounded-full bg-[#F27D24] flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
              AE
            </div>
            <div>
              <p className="text-white font-semibold">Justin Borges</p>
              <p className="text-gray-400 text-sm mt-1">
                Helping local service businesses get cited by AI platforms. We track Perplexity, ChatGPT, Claude, and Google AI Overviews so you do not have to.
              </p>
            </div>
          </div>

        </article>
      </main>
    </>
  )
}
