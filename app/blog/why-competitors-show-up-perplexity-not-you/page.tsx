import type { Metadata } from 'next'
import Link from 'next/link'

export const revalidate = 86400
export const dynamic = 'force-static'
export const dynamicParams = true

const title = 'Why Your Competitors Show Up on Perplexity and You Don\'t'
const description =
  'Perplexity AI cites your competitors because they publish citable content, structured data, and fresh updates. Learn the 5 reasons you are invisible and how to fix it.'
const slug = 'why-competitors-show-up-perplexity-not-you'
const publishDate = '2026-03-18'

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'Perplexity AI visibility',
    'why competitors on Perplexity',
    'Perplexity citations',
    'AI search visibility',
    'Perplexity SEO',
    'get cited Perplexity',
    'Perplexity vs ChatGPT',
    'AI search optimization',
    'answer engine optimization',
    'local business AI visibility',
  ],
  openGraph: {
    title,
    description,
    type: 'article',
    publishedTime: publishDate,
    authors: ['The Answer Engine Team'],
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
        '@type': 'Organization',
        name: 'The Answer Engine',
        url: 'https://theanswerengine.ai',
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
          name: 'Why does Perplexity cite my competitors but not my business?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Perplexity uses Retrieval-Augmented Generation (RAG) to find and cite live web sources. If your competitors publish structured, data-rich content with clear answers and proper schema markup while your site has generic service pages, Perplexity will retrieve and cite their pages instead of yours. The platform prioritizes content freshness, direct relevance, and extractable facts.',
          },
        },
        {
          '@type': 'Question',
          name: 'How many sources does Perplexity actually cite per answer?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Perplexity retrieves roughly 10 relevant pages per query but only cites 3 to 4 of them in its final answer. Each citation appears as a numbered footnote linking to the original source. Perplexity averages about 21.87 citations per question, which is nearly three times more than ChatGPT at 7.92 citations per question.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does Perplexity prefer newer content over older content?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Perplexity has a strong recency bias. Recently published or updated content receives a significant ranking boost during the retrieval and reranking stages. Sites that publish regularly, even just 2 to 4 posts per month, signal to PerplexityBot that they are active and current sources worth citing.',
          },
        },
        {
          '@type': 'Question',
          name: 'What type of content does Perplexity skip over?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Perplexity skips generic introductions, vague claims without data, content that says a lot without asserting anything specific, and pages that are difficult to parse. It favors content that leads with concrete data, specific statistics, and clear factual statements that can be directly extracted and attributed.',
          },
        },
        {
          '@type': 'Question',
          name: 'How is Perplexity different from ChatGPT when it comes to citations?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Perplexity is retrieval-first, meaning it searches the live web for every query and always provides numbered citations. ChatGPT is generation-first, drawing primarily from training data and only sometimes providing source links when web search is enabled. Perplexity averages 21.87 citations per answer compared to ChatGPT at 7.92. Perplexity also favors discussion platforms like Reddit (6.6% of citations) while ChatGPT relies more on Wikipedia (7.8% of citations).',
          },
        },
        {
          '@type': 'Question',
          name: 'Can a small local business get cited by Perplexity AI?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Perplexity values original data and unique local expertise. If you publish specific pricing data, local market statistics, case studies, or detailed service guides that no one else covers for your area, Perplexity will cite you when it needs that information. Being the only credible source for a specific local topic is one of the most reliable paths to earning Perplexity citations.',
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
            <span className="text-gray-400">Perplexity Competitor Visibility</span>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl mb-6 bg-white/[0.04] border border-white/[0.08]">
              <span className="text-sm font-semibold tracking-wider uppercase text-white">AI Visibility</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-white leading-tight font-plus-jakarta">
              Why Your Competitors Show Up on Perplexity and You Don&apos;t
            </h1>

            {/* Featured Snippet */}
            <div className="bg-gradient-to-br from-white/[0.02] to-white/[0.02] border border-white/[0.08] rounded-xl p-6 mb-8">
              <p className="text-lg text-white leading-relaxed">
                <strong>Perplexity AI cites your competitors because they publish data-rich, structured content that its retrieval engine can extract and attribute.</strong> Your generic service pages contain nothing worth citing. The gap comes down to five measurable factors, and every single one is fixable.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>14 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>March 18, 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>The Answer Engine Team</span>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <div className="prose prose-invert prose-lg max-w-none prose-headings:font-plus-jakarta prose-headings:text-white prose-p:text-gray-300 prose-a:text-[#FF6A00] prose-a:no-underline hover:prose-a:underline prose-strong:text-white">

            {/* ── STATS GRID ── */}
            <div className="ae-stats-grid not-prose">
              <div className="ae-stat-card">
                <div className="ae-stat-emoji">&#x1F50D;</div>
                <div className="ae-stat-value ae-accent">45M+</div>
                <div className="ae-stat-label">monthly active Perplexity users in early 2026</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-emoji">&#x1F4CA;</div>
                <div className="ae-stat-value ae-accent">21.87</div>
                <div className="ae-stat-label">avg citations per Perplexity answer vs 7.92 for ChatGPT</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-emoji">&#x26A1;</div>
                <div className="ae-stat-value ae-accent">3-4</div>
                <div className="ae-stat-label">sources cited from ~10 retrieved pages per query</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-emoji">&#x1F4C8;</div>
                <div className="ae-stat-value ae-accent">800%</div>
                <div className="ae-stat-label">year-over-year user growth for Perplexity AI</div>
              </div>
            </div>

            {/* ── INTRODUCTION ── */}
            <span className="ae-section-label">The Problem</span>
            <h2>You Searched for Yourself on Perplexity. You Were Not There.</h2>

            <p>You typed your own service into Perplexity AI. Your competitor appeared with a numbered citation. You did not. You ran the query three different ways. Same result every time: they are cited, you are invisible.</p>

            <p>This is not random. Perplexity uses a specific retrieval process to decide which sources earn citations. The gap between being cited and being skipped comes down to <strong>five measurable factors</strong>. Every one of them is within your control.</p>

            <div className="ae-quote not-prose">
              <p>Perplexity is not ignoring you on purpose. It simply cannot find anything on your site worth citing.</p>
            </div>

            <p>Here is why your competitors are winning on Perplexity and exactly what you need to change to close the gap.</p>

            {/* ── CTA 1 ── */}
            <div className="ae-cta-inline not-prose">
              <p>Find out if Perplexity is citing your competitors instead of you.</p>
              <Link href="/blindspot">Get Your Free Blind Spot Report &rarr;</Link>
            </div>

            {/* ── HOW RAG WORKS ── */}
            <span className="ae-section-label">The Engine</span>
            <h2>How Perplexity Decides Who Gets Cited (and Who Gets Skipped)</h2>

            <p>Perplexity runs on <Link href="/blog/how-perplexity-decides-what-to-cite">Retrieval-Augmented Generation (RAG)</Link>. Unlike ChatGPT, which primarily generates answers from training data, Perplexity searches the live web for every single query. It retrieves roughly 10 relevant pages, runs them through multiple quality gates, and then selects only 3 to 4 sources to actually cite in its response.</p>

            <p>That selection process is where you either win or lose. Perplexity does not cite every page it visits. It evaluates each one on direct relevance, content quality, domain authority, freshness, and technical accessibility.</p>

            {/* ── TIMELINE: RAG PIPELINE ── */}
            <div className="ae-timeline not-prose">
              <div className="ae-timeline-item">
                <div className="ae-timeline-marker">1</div>
                <div className="ae-timeline-content">
                  <strong>Query Decomposition</strong>
                  <p>Perplexity breaks your question into 3 to 5 sub-queries to search independently</p>
                </div>
              </div>
              <div className="ae-timeline-item">
                <div className="ae-timeline-marker">2</div>
                <div className="ae-timeline-content">
                  <strong>Retrieval</strong>
                  <p>PerplexityBot crawls the live web and pulls roughly 10 candidate pages</p>
                </div>
              </div>
              <div className="ae-timeline-item">
                <div className="ae-timeline-marker">3</div>
                <div className="ae-timeline-content">
                  <strong>Reranking</strong>
                  <p>AI evaluates relevance, freshness, authority, and extractability of each page</p>
                </div>
              </div>
              <div className="ae-timeline-item">
                <div className="ae-timeline-marker">4</div>
                <div className="ae-timeline-content">
                  <strong>Citation Selection</strong>
                  <p>Only 3 to 4 sources survive. These earn numbered footnotes in the final answer</p>
                </div>
              </div>
            </div>

            <p>Research from a Q3 2025 citation study found that <strong>Perplexity averages 21.87 citations per question, nearly three times the 7.92 citations per question that ChatGPT provides</strong>. Perplexity is actively looking for more sources to cite. There is real opportunity here, but only if your content is built to be found and extracted.</p>

            {/* ── COMPARISON TABLE ── */}
            <div className="ae-comparison-table not-prose">
              <div className="ae-comparison-header">
                <div className="ae-comparison-col">Factor</div>
                <div className="ae-comparison-col ae-positive">Perplexity</div>
                <div className="ae-comparison-col ae-negative">ChatGPT</div>
              </div>
              <div className="ae-comparison-row">
                <div className="ae-comparison-col">Architecture</div>
                <div className="ae-comparison-col ae-positive">Retrieval-first (live web)</div>
                <div className="ae-comparison-col ae-negative">Generation-first (training data)</div>
              </div>
              <div className="ae-comparison-row">
                <div className="ae-comparison-col">Avg Citations/Answer</div>
                <div className="ae-comparison-col ae-positive">21.87</div>
                <div className="ae-comparison-col ae-negative">7.92</div>
              </div>
              <div className="ae-comparison-row">
                <div className="ae-comparison-col">Top Source Type</div>
                <div className="ae-comparison-col ae-positive">Reddit (6.6%)</div>
                <div className="ae-comparison-col ae-negative">Wikipedia (7.8%)</div>
              </div>
              <div className="ae-comparison-row">
                <div className="ae-comparison-col">Domain Age Bias</div>
                <div className="ae-comparison-col ae-positive">Lower (values fresh expertise)</div>
                <div className="ae-comparison-col ae-negative">Higher (45.8% domains 15+ years old)</div>
              </div>
              <div className="ae-comparison-row">
                <div className="ae-comparison-col">Recency Bias</div>
                <div className="ae-comparison-col ae-positive">Strong (ranking boost)</div>
                <div className="ae-comparison-col ae-negative">Moderate</div>
              </div>
            </div>

            {/* ── CTA 2 ── */}
            <div className="ae-cta-inline not-prose">
              <p>Want to know exactly where you stand on Perplexity, ChatGPT, and Google AI?</p>
              <Link href="/blindspot">Run a Free AI Visibility Check &rarr;</Link>
            </div>

            {/* ── REASON 1 ── */}
            <span className="ae-section-label">Reason 1</span>
            <h2>Their Content Leads with Data. Yours Leads with Fluff.</h2>

            <p>Perplexity&apos;s AI is looking for specific, extractable facts it can attribute to a source. Content that leads with concrete data gets cited. Content that opens with generic introductions, vague claims, or obvious statements gets skipped entirely.</p>

            <p>Think about the difference between two plumbing websites. One publishes a page that says &quot;We are the best plumber in Austin with years of experience.&quot; The other publishes a page that says &quot;The average cost of a water heater replacement in Austin ranges from $1,200 to $3,800 depending on the unit type, with tankless installations averaging 40% higher than traditional tank models.&quot;</p>

            <div className="ae-callout not-prose">
              <p><strong>Content in callout boxes or highlighted sections has a 2.3x higher chance of being cited by AI engines.</strong> Visual formatting cues signal importance to extraction algorithms. If your competitors format their key data in ways that stand out, Perplexity finds and uses it first.</p>
            </div>

            <p>When someone asks Perplexity &quot;How much does a water heater replacement cost in Austin?&quot;, the data-rich page gets cited because it contains the exact information Perplexity needs. The &quot;best plumber&quot; page has nothing worth extracting.</p>

            {/* ── PROS CONS: Data vs Fluff ── */}
            <div className="ae-pros-cons not-prose">
              <div className="ae-pros">
                <h4>Content That Gets Cited</h4>
                <ul>
                  <li>Opens with a specific statistic or price range</li>
                  <li>Includes local market data with exact numbers</li>
                  <li>Uses structured headings that match user queries</li>
                  <li>Presents comparisons with measurable differences</li>
                  <li>Contains original research or proprietary data</li>
                </ul>
              </div>
              <div className="ae-cons">
                <h4>Content That Gets Skipped</h4>
                <ul>
                  <li>Opens with &quot;Welcome to our company&quot;</li>
                  <li>Claims &quot;years of experience&quot; with no specifics</li>
                  <li>Uses vague phrases like &quot;top-quality service&quot;</li>
                  <li>Buries pricing info deep in the page</li>
                  <li>Copies competitor content without original data</li>
                </ul>
              </div>
            </div>

            {/* ── CTA 3 ── */}
            <div className="ae-cta-inline not-prose">
              <p>Not sure if your content has citable data? We will audit it for free.</p>
              <Link href="/blindspot">Request Your Content Audit &rarr;</Link>
            </div>

            {/* ── REASON 2 ── */}
            <span className="ae-section-label">Reason 2</span>
            <h2>They Publish Fresh Content Regularly. You Published Once and Stopped.</h2>

            <p>Perplexity has a strong recency bias. Recently published or updated content gets a measurable ranking boost during the retrieval stage. A blog post published last month about HVAC repair costs will outrank an identical post published two years ago, even if the older post has more backlinks and higher domain authority.</p>

            <p>Sites that publish regularly on their core topics appear in Perplexity results more consistently. Even <strong>2 to 4 posts per month</strong> is enough to signal to PerplexityBot that you are an active, current source. If your competitor publishes a monthly pricing update or seasonal service guide and you have not touched your blog in six months, Perplexity will treat their content as more trustworthy.</p>

            {/* ── BAR CHART: Freshness Impact ── */}
            <div className="ae-bar-group not-prose">
              <h4>Content Freshness Impact on Perplexity Citation Rates</h4>
              <div className="ae-bar-item">
                <span className="ae-bar-label">Published this month</span>
                <div className="ae-bar-track"><div className="ae-bar-fill" style={{ width: '92%' }}>92%</div></div>
              </div>
              <div className="ae-bar-item">
                <span className="ae-bar-label">Updated in last 90 days</span>
                <div className="ae-bar-track"><div className="ae-bar-fill" style={{ width: '74%' }}>74%</div></div>
              </div>
              <div className="ae-bar-item">
                <span className="ae-bar-label">Published 6-12 months ago</span>
                <div className="ae-bar-track"><div className="ae-bar-fill" style={{ width: '41%' }}>41%</div></div>
              </div>
              <div className="ae-bar-item">
                <span className="ae-bar-label">Published 1-2 years ago</span>
                <div className="ae-bar-track"><div className="ae-bar-fill" style={{ width: '18%' }}>18%</div></div>
              </div>
              <div className="ae-bar-item">
                <span className="ae-bar-label">Published 2+ years ago</span>
                <div className="ae-bar-track"><div className="ae-bar-fill" style={{ width: '7%' }}>7%</div></div>
              </div>
            </div>

            <p>This is not about churning out low-quality posts. <Link href="/blog/why-fresh-content-key-ai-search-visibility">Content freshness for AI search</Link> means updating existing pages with current data, publishing new service guides that reflect actual market conditions, and adding recent case studies. Perplexity rewards substance that happens to be recent, not recency without substance.</p>

            <div className="ae-takeaway not-prose">
              <strong>Key Takeaway:</strong> You do not need daily posts. Two to four quality articles per month, each containing original data, is enough to outpace competitors who publish nothing.
            </div>

            {/* ── CTA 4 ── */}
            <div className="ae-cta-inline not-prose">
              <p>Questions about content freshness strategies? Talk to our team.</p>
              <a href="tel:+12134442229">(213) 444-2229 &rarr;</a>
            </div>

            {/* ── REASON 3 ── */}
            <span className="ae-section-label">Reason 3</span>
            <h2>Their Site Structure Helps AI Extract Answers. Yours Buries Them.</h2>

            <p>Perplexity does not read your website the way a human does. It scans for structured, extractable information. Pages with clean heading hierarchies, FAQ sections, schema markup, and direct question-and-answer formatting are significantly easier for Perplexity to parse and cite.</p>

            <p>If your competitor has <Link href="/blog/does-schema-markup-help-ai-search">proper schema markup</Link> (FAQPage, LocalBusiness, Service schemas) and your site has none, Perplexity can extract their answers in a structured format while it struggles to parse yours.</p>

            {/* ── DECISION MATRIX ── */}
            <div className="ae-decision-matrix not-prose">
              <h4>Schema Markup Decision Matrix</h4>
              <table>
                <thead>
                  <tr>
                    <th>Page Type</th>
                    <th>Required Schema</th>
                    <th>Impact on AI Citations</th>
                    <th>Priority</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Service Pages</td>
                    <td>Service, LocalBusiness</td>
                    <td>High</td>
                    <td>Do first</td>
                  </tr>
                  <tr>
                    <td>FAQ Pages</td>
                    <td>FAQPage</td>
                    <td>Very High</td>
                    <td>Do first</td>
                  </tr>
                  <tr>
                    <td>Pricing Pages</td>
                    <td>Product, Offer</td>
                    <td>High</td>
                    <td>Do second</td>
                  </tr>
                  <tr>
                    <td>Blog Posts</td>
                    <td>Article, HowTo</td>
                    <td>Medium-High</td>
                    <td>Do second</td>
                  </tr>
                  <tr>
                    <td>About Page</td>
                    <td>Organization, Person</td>
                    <td>Medium</td>
                    <td>Do third</td>
                  </tr>
                  <tr>
                    <td>Contact Page</td>
                    <td>LocalBusiness, ContactPoint</td>
                    <td>Medium</td>
                    <td>Do third</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>A page with a clear H2 that says &quot;How Much Does Roof Replacement Cost in Denver?&quot; followed by a direct answer paragraph is far more citable than a page where the pricing information is buried in the fourth paragraph of a generic service description. Perplexity matches queries to content, and if your content does not structurally match the way people ask questions, it will not be retrieved.</p>

            <div className="ae-quote not-prose">
              <p>Schema does not guarantee a citation. But it makes the extraction process dramatically easier for every AI platform.</p>
            </div>

            {/* ── CTA 5 ── */}
            <div className="ae-cta-inline not-prose">
              <p>Not sure if your site has the right schema markup? Let us check.</p>
              <a href="mailto:support@theanswerengine.ai">Email Our Team &rarr;</a>
            </div>

            {/* ── REASON 4 ── */}
            <span className="ae-section-label">Reason 4</span>
            <h2>They Have Built Domain Authority Through Citations. You Have Not Started.</h2>

            <p>Citation frequency is a compounding factor. <Link href="/blog/how-ai-platforms-choose-businesses-to-cite">The more often Perplexity cites a domain</Link> across different queries, the more it trusts that domain for future queries. If your competitor has already been cited for water heater questions, they are more likely to be cited for drain cleaning questions too.</p>

            {/* ── BAR CHART: Source Preferences ── */}
            <div className="ae-bar-group not-prose">
              <h4>Where AI Platforms Pull Their Citations From</h4>
              <div className="ae-bar-item">
                <span className="ae-bar-label">Reddit (Perplexity)</span>
                <div className="ae-bar-track"><div className="ae-bar-fill" style={{ width: '66%' }}>6.6%</div></div>
              </div>
              <div className="ae-bar-item">
                <span className="ae-bar-label">Wikipedia (ChatGPT)</span>
                <div className="ae-bar-track"><div className="ae-bar-fill" style={{ width: '78%' }}>7.8%</div></div>
              </div>
              <div className="ae-bar-item">
                <span className="ae-bar-label">Domains 15+ yrs (ChatGPT)</span>
                <div className="ae-bar-track"><div className="ae-bar-fill" style={{ width: '45%' }}>45.8%</div></div>
              </div>
              <div className="ae-bar-item">
                <span className="ae-bar-label">Domains 15+ yrs (Perplexity)</span>
                <div className="ae-bar-track"><div className="ae-bar-fill" style={{ width: '28%' }}>~28%</div></div>
              </div>
            </div>

            <p>What this means for local businesses: you do not need a 15-year-old domain to get cited by Perplexity. You need content that demonstrates genuine expertise in your specific market. Original data, local pricing guides, and real case studies carry more weight on Perplexity than they do on ChatGPT.</p>

            <div className="ae-callout not-prose">
              <p><strong>The compounding effect means the gap between you and your competitor grows wider over time unless you take action.</strong> Every citation they earn makes the next citation easier. Every month you wait makes catching up harder.</p>
            </div>

            {/* ── CTA 6 ── */}
            <div className="ae-cta-inline not-prose">
              <p>See exactly how far behind your competitors you are in AI search.</p>
              <Link href="/blindspot">Get Your Competitive Gap Analysis &rarr;</Link>
            </div>

            {/* ── REASON 5 ── */}
            <span className="ae-section-label">Reason 5</span>
            <h2>They Answer the Questions Perplexity Users Actually Ask</h2>

            <p>Perplexity users ask different types of questions than Google users. They tend to ask longer, more specific, conversational questions: &quot;What is the best roofing material for homes in Houston that can handle hurricane-force winds?&quot; rather than &quot;best roofing Houston.&quot;</p>

            <p>Your competitor may be publishing content that directly matches these conversational queries. A <Link href="/blog/hub-spoke-content-strategy-ai-citations">hub-and-spoke content strategy</Link> built around specific customer questions creates dozens of pages that each target a different query. If your competitor has 30 detailed FAQ pages and you have one generic services page, they have 30 chances to get cited while you have almost none.</p>

            {/* ── STATS GRID: Query Opportunity ── */}
            <div className="ae-stats-grid not-prose">
              <div className="ae-stat-card">
                <div className="ae-stat-emoji">&#x1F4AC;</div>
                <div className="ae-stat-value ae-accent">3-5</div>
                <div className="ae-stat-label">sub-queries Perplexity creates per complex question</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-emoji">&#x1F4C4;</div>
                <div className="ae-stat-value ae-accent">30x</div>
                <div className="ae-stat-label">more citation chances with FAQ pages vs one service page</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-emoji">&#x1F3AF;</div>
                <div className="ae-stat-value ae-accent">1B+</div>
                <div className="ae-stat-label">monthly search queries processed by Perplexity</div>
              </div>
            </div>

            <p>Perplexity breaks complex questions into 3 to 5 sub-queries during its retrieval process. Each sub-query is a separate opportunity for your content to be retrieved. The more specific, question-focused pages you publish, the more entry points you create for Perplexity to find you.</p>

            {/* ── CTA 7 ── */}
            <div className="ae-cta-inline not-prose">
              <p>Not sure which questions matter most for your business? We will find them.</p>
              <Link href="/blindspot">Start with a Free Blind Spot Report &rarr;</Link>
            </div>

            {/* ── CHEAT SHEET ── */}
            <span className="ae-section-label">Action Plan</span>
            <h2>What You Can Do About It Starting Today</h2>

            <p>The gap between you and your competitors on Perplexity is not permanent. Every factor that determines Perplexity citations is within your control.</p>

            <div className="ae-cheat-sheet not-prose">
              <h4>Perplexity Visibility Cheat Sheet</h4>
              <ul>
                <li><strong>Audit your content for citable facts.</strong> Go through your top service pages. Does each page contain a specific statistic, price range, timeline, or data point? If not, add them. Include local pricing data, project timelines, material comparisons, and specific outcomes from past projects.</li>
                <li><strong>Start publishing 2 to 4 articles per month.</strong> Focus on seasonal updates, pricing guides, and answering specific questions your customers actually ask. Each article should lead with data, not fluff.</li>
                <li><strong>Add structured data to every key page.</strong> Implement FAQPage, LocalBusiness, and Service schema markup. This makes your content dramatically easier for Perplexity to parse and extract.</li>
                <li><strong>Build question-focused pages.</strong> Create individual pages that each answer a specific customer question. Use the question as your H1 and provide a direct, data-backed answer in the first paragraph.</li>
                <li><strong>Check your current AI visibility.</strong> Search for your core services on Perplexity, ChatGPT, and Google AI. See whether you or your competitors are getting cited. That baseline tells you exactly how large the gap is.</li>
              </ul>
            </div>

            {/* ── CTA 8 ── */}
            <div className="ae-cta-inline not-prose">
              <p>Need help implementing these changes? Call us directly.</p>
              <a href="tel:+12134442229">(213) 444-2229 &rarr;</a>
            </div>

            {/* ── WHY IT MATTERS BEYOND PERPLEXITY ── */}
            <span className="ae-section-label">The Bigger Picture</span>
            <h2>Why Perplexity Visibility Matters Beyond Perplexity</h2>

            <p>Perplexity currently holds between 6% and 8% of the AI chatbot market, behind ChatGPT and Microsoft Copilot. But its user base is growing rapidly, and the platform&apos;s users skew toward professionals and researchers who want sourced, verifiable answers. These are high-intent users. When they find your business through a Perplexity citation, they are significantly more likely to convert than someone scrolling through traditional search results.</p>

            <p>More importantly, the strategies that earn Perplexity citations also work for <Link href="/blog/why-is-my-competitor-on-ai-search-not-me">every other AI search platform</Link>. Original data, fresh content, clean structure, and strong entity presence are the same signals that ChatGPT, Google AI Overviews, and Claude use to decide which businesses to cite.</p>

            <div className="ae-takeaway not-prose">
              <strong>Key Takeaway:</strong> Optimizing for Perplexity is not a niche play. It is the most efficient way to improve your visibility across all AI platforms simultaneously.
            </div>

            {/* ── CTA 9 ── */}
            <div className="ae-cta-inline not-prose">
              <p>See your visibility across Perplexity, ChatGPT, and Google AI in one report.</p>
              <Link href="/blindspot">Get Your Free AI Visibility Report &rarr;</Link>
            </div>

            {/* ── SELECTION FUNNEL VISUAL ── */}
            <span className="ae-section-label">The Funnel</span>
            <h2>Understanding the Perplexity Selection Funnel</h2>

            <p>Not every page Perplexity finds makes it into the answer. Understanding the funnel helps you see where your content is failing and where your competitors are succeeding.</p>

            <div className="ae-timeline not-prose">
              <div className="ae-timeline-item">
                <div className="ae-timeline-marker">&#x1F310;</div>
                <div className="ae-timeline-content">
                  <strong>1 billion+ queries per month</strong>
                  <p>The total volume of searches hitting Perplexity every month</p>
                </div>
              </div>
              <div className="ae-timeline-item">
                <div className="ae-timeline-marker">&#x1F4E5;</div>
                <div className="ae-timeline-content">
                  <strong>~10 pages retrieved per query</strong>
                  <p>PerplexityBot crawls the live web and selects candidate sources</p>
                </div>
              </div>
              <div className="ae-timeline-item">
                <div className="ae-timeline-marker">&#x2696;</div>
                <div className="ae-timeline-content">
                  <strong>Quality gates applied</strong>
                  <p>Relevance, freshness, authority, and extractability are scored</p>
                </div>
              </div>
              <div className="ae-timeline-item">
                <div className="ae-timeline-marker">&#x2705;</div>
                <div className="ae-timeline-content">
                  <strong>3 to 4 sources survive</strong>
                  <p>Only the top-scoring pages earn numbered citations in the answer</p>
                </div>
              </div>
              <div className="ae-timeline-item">
                <div className="ae-timeline-marker">&#x274C;</div>
                <div className="ae-timeline-content">
                  <strong>60-70% of pages get cut</strong>
                  <p>Being retrieved is not enough. Your content must survive reranking.</p>
                </div>
              </div>
            </div>

            {/* ── CTA 10 ── */}
            <div className="ae-cta-inline not-prose">
              <p>Where does your content fall in the funnel? Let us show you.</p>
              <a href="mailto:support@theanswerengine.ai">Email Us for a Free Analysis &rarr;</a>
            </div>

          </div>

          {/* ── FAQ SECTION ── */}
          <section className="mt-16" aria-labelledby="faq-heading">
            <span className="ae-section-label">FAQ</span>
            <h2
              id="faq-heading"
              className="text-2xl font-bold text-white mb-8 font-plus-jakarta"
            >
              Frequently Asked Questions
            </h2>
            <div className="grid gap-6 md:grid-cols-2 not-prose">

              <div className="p-6 rounded-xl border border-gray-800 bg-gray-900">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Why does Perplexity cite my competitors but not my business?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Perplexity uses RAG to find and cite live web sources. If your competitors
                  publish structured, data-rich content with proper schema markup while your
                  site has generic service pages, Perplexity will retrieve and cite their
                  pages instead. The platform prioritizes freshness, direct relevance, and
                  extractable facts.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-gray-800 bg-gray-900">
                <h3 className="text-lg font-semibold text-white mb-3">
                  How many sources does Perplexity cite per answer?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Perplexity retrieves roughly 10 relevant pages per query but only cites 3
                  to 4 of them. It averages about 21.87 citations per question, nearly three
                  times more than ChatGPT at 7.92 citations per question.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-gray-800 bg-gray-900">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Does Perplexity prefer newer content over older content?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Yes. Perplexity has a strong recency bias. Recently published or updated
                  content receives a significant ranking boost. Even 2 to 4 posts per month
                  signals to PerplexityBot that you are an active, current source worth
                  citing.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-gray-800 bg-gray-900">
                <h3 className="text-lg font-semibold text-white mb-3">
                  What type of content does Perplexity skip over?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Perplexity skips generic introductions, vague claims without data, and
                  content that says a lot without asserting anything specific. It favors
                  content that leads with concrete data, specific statistics, and clear
                  factual statements that can be directly extracted.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-gray-800 bg-gray-900">
                <h3 className="text-lg font-semibold text-white mb-3">
                  How is Perplexity different from ChatGPT for citations?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Perplexity is retrieval-first, searching the live web and always providing
                  numbered citations. ChatGPT is generation-first, drawing from training
                  data. Perplexity also favors discussion platforms like Reddit (6.6% of
                  citations) while ChatGPT relies more on Wikipedia (7.8% of citations).
                </p>
              </div>

              <div className="p-6 rounded-xl border border-gray-800 bg-gray-900">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Can a small local business get cited by Perplexity AI?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Yes. Perplexity values original data and unique local expertise. If you
                  publish specific pricing data, local market statistics, or detailed
                  service guides that no one else covers for your area, Perplexity will cite
                  you when it needs that information.
                </p>
              </div>

            </div>
          </section>

          {/* ── CTA 11 ── */}
          <div className="ae-cta-inline not-prose mt-10">
            <p>Have more questions about Perplexity visibility? Reach out directly.</p>
            <a href="mailto:support@theanswerengine.ai">support@theanswerengine.ai &rarr;</a>
          </div>

          {/* ── CTA 12 ── */}
          <div className="ae-cta-inline not-prose mt-6">
            <p>Prefer to talk on the phone? We are available during business hours.</p>
            <a href="tel:+12134442229">(213) 444-2229 &rarr;</a>
          </div>

          {/* ── CTA 13 ── */}
          <div className="ae-cta-inline not-prose mt-6">
            <p>Ready to stop being invisible on AI search? Start here.</p>
            <Link href="/blindspot">Free Blind Spot Report &rarr;</Link>
          </div>

          {/* ── CTA BLOCK ── */}
          <div className="ae-cta-block not-prose mt-12">
            <h3>Your Competitors Are Already Showing Up. You Are Not.</h3>
            <p>Perplexity, ChatGPT, and Google AI are recommending businesses in your market right now. Every day you wait, the gap gets wider. Find out exactly where you stand.</p>
            <Link href="/blindspot">Get Your Free Blind Spot Report &rarr;</Link>
          </div>

          {/* ── CTA 14 (tel) ── */}
          <div className="ae-cta-inline not-prose mt-8">
            <p>Want to discuss your AI visibility strategy with a real person?</p>
            <a href="tel:+12134442229">Call (213) 444-2229 &rarr;</a>
          </div>

          {/* ── FINAL CTA ── */}
          <div className="ae-final-cta not-prose mt-12">
            <h3>Stop Watching Your Competitors Get Cited. Start Getting Cited Yourself.</h3>
            <p>We analyze your business across Perplexity, ChatGPT, Google AI, and Claude. You get a clear report showing who AI recommends in your market, and whether it is you or your competitors. No pitch, just the data.</p>
            <Link href="/blindspot" className="ae-final-cta-pulse">Get Your Free Blind Spot Report &rarr;</Link>
            <div className="flex flex-wrap items-center justify-center gap-6 mt-6 pt-6 border-t border-[#FF6A00]/10">
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

          {/* ── AUTHOR CARD ── */}
          <div className="ae-author-card not-prose mt-12">
            <div className="w-12 h-12 rounded-full bg-[#FF6A00] flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
              AE
            </div>
            <div>
              <p className="text-white font-semibold">The Answer Engine Team</p>
              <p className="text-gray-400 text-sm">Helping local service businesses stay visible in an AI-first world. We track how AI platforms like Perplexity, ChatGPT, and Google AI recommend businesses, and we help you become the one they cite.</p>
            </div>
          </div>

        </article>
      </main>
    </>
  )
}
