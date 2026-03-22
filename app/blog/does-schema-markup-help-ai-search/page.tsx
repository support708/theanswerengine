import type { Metadata } from 'next'
import Link from 'next/link'

export const revalidate = 86400
export const dynamic = 'force-static'

const title = 'Does Schema Markup Help You Show Up on AI Search?'
const description =
  'Schema markup gives your content a 2.5x higher chance of appearing in AI answers. Learn which schema types ChatGPT, Perplexity, and Google AI Overviews actually use.'
const slug = 'does-schema-markup-help-ai-search'
const publishDate = '2026-03-11'

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'schema markup AI search',
    'structured data AI',
    'schema markup ChatGPT',
    'FAQPage schema',
    'Article schema',
    'Google AI Overviews schema',
    'AEO structured data',
    'schema markup local business',
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
          name: 'Does schema markup directly affect AI search results?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. In March 2025, Google, Microsoft, and ChatGPT all confirmed they use schema markup for their generative AI features. Content with proper schema markup has a 2.5x higher chance of appearing in AI-generated answers compared to unstructured content.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which schema types matter most for AI visibility?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The most impactful schema types for AI search visibility are FAQPage (maps directly to ChatGPT question-response format), Article (signals authoritative editorial content), LocalBusiness (critical for local service providers), Organization (establishes entity identity), and Product (used by ChatGPT for product recommendations). Start with FAQPage and Article as they have the most direct impact on AI citations.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I add schema markup without a developer?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. If your site is on WordPress, plugins like Rank Math, Yoast SEO, or Schema Pro can add schema markup without code. For Shopify and Wix, there are built-in schema options and apps. For custom websites, you will need basic HTML knowledge to add JSON-LD script tags, or a developer can implement it in a few hours.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I test if my schema markup is working?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Use Google Rich Results Test (search.google.com/test/rich-results) to validate your schema. It shows which schema types are detected, any errors, and whether your page is eligible for rich results. You can also use Schema.org Validator for a broader check that covers types beyond Google-supported ones.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does schema markup help with Perplexity AI citations?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Perplexity citation system favors pages with clear schema-defined entities. Organization, Product, and FAQPage schema are especially valuable because they make it easier for Perplexity to extract structured information and attribute it to your source in its footnoted answers.',
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
          <nav className="text-sm text-gray-500 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">&rsaquo;</span>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <span className="mx-2">&rsaquo;</span>
            <span className="text-gray-400">Schema Markup &amp; AI Search</span>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl mb-6 bg-white/[0.04] border border-white/[0.08]">
              <span className="text-sm font-semibold tracking-wider uppercase text-white">How-To Guide</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 font-plus-jakarta">
              Does Schema Markup Help You Show Up on AI Search?
            </h1>

            <div className="bg-gradient-to-br from-white/[0.02] to-white/[0.02] border border-white/[0.08] rounded-xl p-6 mb-8">
              <p className="text-lg text-white leading-relaxed">
                <strong>Schema markup is the data layer AI platforms use to understand, trust, and cite your content.</strong> Content with proper schema has a 2.5x higher chance of appearing in AI-generated answers. In 2026, schema is not just an SEO tactic. It is the structured language AI actually reads.
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
              <span>The Answer Engine Team</span>
            </div>
          </header>

          {/* Main Content */}
          <div className="prose prose-invert prose-lg max-w-none prose-headings:font-plus-jakarta prose-headings:text-white prose-p:text-gray-300 prose-a:text-[#FF6A00] prose-a:no-underline hover:prose-a:underline prose-strong:text-white">

            {/* ── STATS GRID ── */}
            <div className="ae-stats-grid not-prose">
              <div className="ae-stat-card">
                <div className="ae-stat-emoji">📊</div>
                <div className="ae-stat-value ae-accent">2.5x</div>
                <div className="ae-stat-label">higher chance of appearing in AI answers with schema</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-emoji">📈</div>
                <div className="ae-stat-value ae-accent">2.8x</div>
                <div className="ae-stat-label">higher AI citation rates for well-structured pages</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-emoji">🖱️</div>
                <div className="ae-stat-value ae-accent">20-40%</div>
                <div className="ae-stat-label">higher click-through rates from rich snippets</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-emoji">🤖</div>
                <div className="ae-stat-value ae-accent">3</div>
                <div className="ae-stat-label">major AI platforms confirmed they use schema in 2025</div>
              </div>
            </div>

            {/* ── SECTION 1: WHAT SCHEMA DOES ── */}
            <span className="ae-section-label">The Fundamentals</span>
            <h2>What Schema Markup Actually Does for AI</h2>

            <p>Schema markup is structured code (usually JSON-LD) that you add to your web pages to tell search engines and AI systems exactly what your content is about. Without schema, AI platforms have to guess what your page contains by reading the text. With schema, you are explicitly stating: this is a FAQ, this is a local business, this is a service with this price range, these are our reviews.</p>

            <div className="ae-quote not-prose">
              <p>Your website content is a conversation. Schema markup is the structured summary that AI can process instantly.</p>
            </div>

            <p>When ChatGPT needs to answer &quot;who is the best plumber in Dallas,&quot; it does not read every plumbing website word by word. It looks for structured signals: LocalBusiness schema with a service area, FAQPage schema with relevant answers, Review schema with ratings. The businesses that provide these signals get cited. The ones that do not get skipped.</p>

            {/* ── CTA 1 ── */}
            <div className="ae-cta-inline not-prose">
              <p>Not sure if AI platforms can read your business data? Find out in 60 seconds.</p>
              <Link href="/blindspot">Get Your Free Blind Spot Report &rarr;</Link>
            </div>

            {/* ── CALLOUT: WHY IT MATTERS NOW ── */}
            <div className="ae-callout ae-callout-warning not-prose">
              <div className="ae-callout-title">Why This Matters in 2026</div>
              <p>In March 2025, Google, Microsoft, and OpenAI all publicly confirmed they use structured data for their generative AI features. Schema markup is no longer optional for businesses that want AI visibility. It is infrastructure.</p>
            </div>

            {/* ── SECTION 2: THE NUMBERS ── */}
            <span className="ae-section-label">The Data</span>
            <h2>How Schema Impacts AI Visibility: The Numbers</h2>

            <p>The impact of schema on AI visibility is now quantifiable. Here is what the data shows in 2026.</p>

            {/* ── BAR CHART ── */}
            <div className="ae-bar-group not-prose">
              <div className="ae-bar-item">
                <div className="ae-bar-label">AI answer inclusion (with schema)</div>
                <div className="ae-bar-track">
                  <div className="ae-bar-fill" style={{ width: '85%' }}></div>
                </div>
                <div className="ae-bar-value">2.5x more likely</div>
              </div>
              <div className="ae-bar-item">
                <div className="ae-bar-label">AI citation rate (structured pages)</div>
                <div className="ae-bar-track">
                  <div className="ae-bar-fill" style={{ width: '90%' }}></div>
                </div>
                <div className="ae-bar-value">2.8x higher</div>
              </div>
              <div className="ae-bar-item">
                <div className="ae-bar-label">Click-through rate (rich snippets)</div>
                <div className="ae-bar-track">
                  <div className="ae-bar-fill" style={{ width: '65%' }}></div>
                </div>
                <div className="ae-bar-value">20-40% higher</div>
              </div>
              <div className="ae-bar-item">
                <div className="ae-bar-label">AI Overview inclusion (with schema)</div>
                <div className="ae-bar-track">
                  <div className="ae-bar-fill" style={{ width: '75%' }}></div>
                </div>
                <div className="ae-bar-value">Significantly more likely</div>
              </div>
            </div>

            <p>These are not theoretical projections. These are observable patterns from sites that implemented schema versus those that did not. The gap is only growing as AI platforms become more sophisticated at processing structured data.</p>

            {/* ── CTA 2 ── */}
            <div className="ae-cta-inline not-prose">
              <p>Want to know exactly how your schema stacks up against competitors?</p>
              <a href="tel:+12134442229">Call (213) 444-2229 for a Free Schema Audit &rarr;</a>
            </div>

            {/* ── SECTION 3: PLATFORM BREAKDOWN ── */}
            <span className="ae-section-label">Platform Breakdown</span>
            <h2>Which Schema Types Matter Most for Each AI Platform</h2>

            <p>Not all schema types are equally valuable. Each AI platform has preferences based on how it generates answers.</p>

            {/* ── DECISION MATRIX ── */}
            <table className="ae-decision-matrix not-prose">
              <thead>
                <tr>
                  <th>Schema Type</th>
                  <th>ChatGPT</th>
                  <th>Google AI Overviews</th>
                  <th>Perplexity</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>FAQPage</td>
                  <td>Critical</td>
                  <td>High</td>
                  <td>High</td>
                </tr>
                <tr>
                  <td>Article</td>
                  <td>Critical</td>
                  <td>High</td>
                  <td>Medium</td>
                </tr>
                <tr>
                  <td>LocalBusiness</td>
                  <td>High</td>
                  <td>Critical</td>
                  <td>Medium</td>
                </tr>
                <tr>
                  <td>Organization</td>
                  <td>Medium</td>
                  <td>High</td>
                  <td>High</td>
                </tr>
                <tr>
                  <td>Product</td>
                  <td>Critical</td>
                  <td>High</td>
                  <td>Medium</td>
                </tr>
                <tr>
                  <td>Review</td>
                  <td>Medium</td>
                  <td>Critical</td>
                  <td>Low</td>
                </tr>
                <tr>
                  <td>HowTo</td>
                  <td>Medium</td>
                  <td>High</td>
                  <td>Medium</td>
                </tr>
                <tr>
                  <td>Service</td>
                  <td>Medium</td>
                  <td>Critical</td>
                  <td>Low</td>
                </tr>
              </tbody>
            </table>

            <h3>ChatGPT</h3>
            <p>ChatGPT particularly values <strong>FAQPage and Article schema</strong> when generating conversational answers. These types map cleanly to its question-response format. When you structure your FAQ content with proper schema, ChatGPT can directly extract your answers and present them as its own response, with attribution to your source. Product schema is also critical for businesses selling goods, as ChatGPT uses it to determine which products appear in its recommendations.</p>

            <h3>Google AI Overviews</h3>
            <p>Google has the deepest integration with schema because it built the structured data ecosystem. For AI Overviews, Google uses <strong>LocalBusiness, Service, FAQPage, HowTo, and Review schema</strong> to construct its generated answers. Businesses with complete schema implementation are significantly more likely to appear in AI Overviews, especially for local service queries.</p>

            <h3>Perplexity</h3>
            <p>Perplexity&apos;s citation system favors pages with <strong>clear schema-defined entities</strong>. Organization, Product, and FAQPage schema are especially valuable because they make it easier for Perplexity to extract structured information and attribute it in its footnoted answers. Content with well-structured schema is more likely to appear as a cited source.</p>

            {/* ── CTA 3 ── */}
            <div className="ae-cta-inline not-prose">
              <p>Want a custom schema strategy built for your specific AI visibility goals?</p>
              <Link href="/blindspot">Start With a Free Blind Spot Report &rarr;</Link>
            </div>

            {/* ── SECTION 4: SCHEMA TYPES RANKED ── */}
            <span className="ae-section-label">Priority Ranking</span>
            <h2>Schema Types That AI Platforms Care About</h2>

            <p>There are dozens of schema types available, but AI platforms do not weight them equally. Some types have a direct, measurable impact on AI citations. Others have minimal effect.</p>

            {/* ── TIMELINE: IMPLEMENTATION ORDER ── */}
            <div className="ae-timeline not-prose">
              <div className="ae-timeline-item">
                <strong>Priority 1: FAQPage Schema</strong>
                <p>Maps directly to how AI platforms structure question-and-answer responses. The single highest-impact schema type for conversational AI visibility.</p>
              </div>
              <div className="ae-timeline-item">
                <strong>Priority 2: LocalBusiness Schema</strong>
                <p>Tells AI platforms your business name, location, service area, hours, and contact info. Critical for any &quot;near me&quot; or location-based AI query.</p>
              </div>
              <div className="ae-timeline-item">
                <strong>Priority 3: Article Schema</strong>
                <p>Signals authoritative editorial content. Helps AI platforms understand your expertise and cite your content in informational queries.</p>
              </div>
              <div className="ae-timeline-item">
                <strong>Priority 4: Organization Schema</strong>
                <p>Establishes your entity identity across the web. AI platforms use this to connect your brand across multiple data sources.</p>
              </div>
              <div className="ae-timeline-item">
                <strong>Priority 5: Review + Product Schema</strong>
                <p>Social proof and product data that AI uses for recommendation queries. Especially valuable for e-commerce and service businesses with ratings.</p>
              </div>
            </div>

            <div className="ae-takeaway not-prose">
              <div className="ae-takeaway-title">Key Takeaway</div>
              <p>The schema types that matter most are the ones that help AI platforms identify what your business is, what you offer, and what questions you can answer. If your schema does not communicate those three things, AI platforms will default to sources that do.</p>
            </div>

            {/* ── CTA 4 ── */}
            <div className="ae-cta-inline not-prose">
              <p>Questions about which schema types your business needs? We can help.</p>
              <a href="mailto:support@theanswerengine.ai">Email support@theanswerengine.ai &rarr;</a>
            </div>

            {/* ── SECTION 5: WHY MOST FAIL ── */}
            <span className="ae-section-label">Common Mistakes</span>
            <h2>Why Most Schema Implementations Fail</h2>

            <p>Here is the uncomfortable truth: most businesses that have schema markup on their site are not getting any AI visibility benefit from it. The schema is technically valid. It passes Google&apos;s Rich Results Test. But it is not doing anything meaningful for AI citations.</p>

            {/* ── PROS AND CONS ── */}
            <div className="ae-pros-cons not-prose">
              <div className="ae-pros-box">
                <div className="ae-pros-title">Effective Schema (Gets AI Citations)</div>
                <ul>
                  <li>Layered schema types working together</li>
                  <li>Schema content matches on-page content exactly</li>
                  <li>FAQPage schema with real customer questions</li>
                  <li>LocalBusiness with complete NAP + service area</li>
                  <li>Regular updates when business info changes</li>
                  <li>Schema strategy tailored to target AI platforms</li>
                </ul>
              </div>
              <div className="ae-cons-box">
                <div className="ae-cons-title">Ineffective Schema (Passes Tests, Gets Nothing)</div>
                <ul>
                  <li>Single schema type added by a plugin</li>
                  <li>Schema content mismatches page content</li>
                  <li>Generic FAQ questions nobody actually asks</li>
                  <li>Incomplete business information</li>
                  <li>Set-and-forget implementation from years ago</li>
                  <li>Same schema template across every page</li>
                </ul>
              </div>
            </div>

            <div className="ae-callout ae-callout-info not-prose">
              <div className="ae-callout-title">The Real Difference</div>
              <p>Adding schema is easy. Adding schema that actually influences AI platform behavior requires understanding how each platform processes structured data, which types they prioritize, and how schema interacts with your content quality and site authority. A valid schema implementation and an effective schema implementation are two very different things.</p>
            </div>

            {/* ── CTA 5 ── */}
            <div className="ae-cta-inline not-prose">
              <p>Is your schema markup actually working or just passing validation tests?</p>
              <Link href="/blindspot">Get a Free AI Visibility Assessment &rarr;</Link>
            </div>

            {/* ── SECTION 6: CHEAT SHEET ── */}
            <span className="ae-section-label">Quick Reference</span>
            <h2>Schema Markup Implementation Checklist</h2>

            <div className="ae-cheat-sheet not-prose">
              <div className="ae-cheat-sheet-title">Schema Markup Cheat Sheet for AI Visibility</div>
              <ul>
                <li><strong>Step 1:</strong> Add LocalBusiness schema with complete NAP, service area, hours, and phone number</li>
                <li><strong>Step 2:</strong> Add FAQPage schema to your top 5 service pages using real customer questions</li>
                <li><strong>Step 3:</strong> Add Article schema to every blog post and content page</li>
                <li><strong>Step 4:</strong> Add Organization schema to your homepage and About page</li>
                <li><strong>Step 5:</strong> Add Review schema if you have Google Reviews or testimonials</li>
                <li><strong>Step 6:</strong> Validate everything with Google Rich Results Test</li>
                <li><strong>Step 7:</strong> Test with Schema.org Validator for non-Google schema types</li>
                <li><strong>Step 8:</strong> Audit quarterly to ensure schema matches current business info</li>
              </ul>
            </div>

            {/* ── CTA 6 ── */}
            <div className="ae-cta-inline not-prose">
              <p>Need help implementing schema the right way the first time?</p>
              <a href="tel:+12134442229">Call (213) 444-2229 &rarr;</a>
            </div>

            {/* ── SECTION 7: COMPARISON TABLE ── */}
            <span className="ae-section-label">Tool Comparison</span>
            <h2>Schema Implementation: DIY vs Professional</h2>

            <p>You can add basic schema yourself, but the quality of implementation matters enormously for AI visibility. Here is how the approaches compare.</p>

            <table className="ae-comparison-table not-prose">
              <thead>
                <tr>
                  <th>Factor</th>
                  <th>DIY (Plugin/Manual)</th>
                  <th>Professional Implementation</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Cost</td>
                  <td>Free to $99/year</td>
                  <td>Varies by scope</td>
                </tr>
                <tr>
                  <td>Schema Types</td>
                  <td>1-2 basic types</td>
                  <td>5-8 layered types</td>
                </tr>
                <tr>
                  <td>AI Citation Impact</td>
                  <td>Minimal improvement</td>
                  <td>Measurable citation gains</td>
                </tr>
                <tr>
                  <td>Platform Coverage</td>
                  <td>Google only</td>
                  <td>ChatGPT, Google, Perplexity</td>
                </tr>
                <tr>
                  <td>Maintenance</td>
                  <td>Often forgotten</td>
                  <td>Quarterly audits included</td>
                </tr>
                <tr>
                  <td>Content Alignment</td>
                  <td>Generic templates</td>
                  <td>Custom to your business</td>
                </tr>
              </tbody>
            </table>

            {/* ── CTA 7 ── */}
            <div className="ae-cta-inline not-prose">
              <p>Not sure which approach is right for your business? Let us show you the data.</p>
              <Link href="/blindspot">Get Your Free Blind Spot Report &rarr;</Link>
            </div>

            {/* ── SECTION 8: SCHEMA IS NOT OPTIONAL ── */}
            <span className="ae-section-label">The Bottom Line</span>
            <h2>Schema Is No Longer Optional</h2>

            <p>In 2026, schema markup is not an advanced SEO tactic reserved for enterprise sites. It is a baseline requirement for any business that wants to be visible in AI search. The consensus among experts is clear: structured data is one of the strongest signals AI systems use to interpret your content and decide whether to show it to users.</p>

            <div className="ae-callout ae-callout-success not-prose">
              <div className="ae-callout-title">The Competitive Advantage</div>
              <p>The businesses that have implemented schema are already seeing the results in higher AI citation rates, more rich results appearances, and better visibility across ChatGPT, Google AI Overviews, and Perplexity. The businesses that have not implemented it are competing with one hand tied behind their back.</p>
            </div>

            <p>Adding schema to your website is one of the highest-impact, lowest-effort changes you can make for AI visibility. It does not require rewriting your content or redesigning your site. It requires adding structured data that tells AI platforms what your content already says. Start with LocalBusiness and FAQPage schema on your most important pages. Then expand from there.</p>

            {/* ── CTA 8 ── */}
            <div className="ae-cta-inline not-prose">
              <p>Ready to make AI platforms actually understand your business?</p>
              <a href="mailto:support@theanswerengine.ai">Email us at support@theanswerengine.ai &rarr;</a>
            </div>

            {/* ── SECTION 9: COMMON TOOLS ── */}
            <span className="ae-section-label">Tools</span>
            <h2>Tools for Adding Schema Without a Developer</h2>

            <p>If your site runs on a popular CMS, you likely do not need a developer to add basic schema. Here are the options by platform.</p>

            <div className="ae-stats-grid not-prose">
              <div className="ae-stat-card">
                <div className="ae-stat-emoji">🔧</div>
                <div className="ae-stat-value ae-accent">WordPress</div>
                <div className="ae-stat-label">Rank Math, Yoast SEO, or Schema Pro plugins</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-emoji">🛒</div>
                <div className="ae-stat-value ae-accent">Shopify</div>
                <div className="ae-stat-label">Built-in Product schema + apps for FAQ/Local</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-emoji">🌐</div>
                <div className="ae-stat-value ae-accent">Wix</div>
                <div className="ae-stat-label">Built-in schema options in SEO settings</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-emoji">💻</div>
                <div className="ae-stat-value ae-accent">Custom</div>
                <div className="ae-stat-label">JSON-LD script tags added manually to HTML</div>
              </div>
            </div>

            {/* ── CTA 9 ── */}
            <div className="ae-cta-inline not-prose">
              <p>Using a custom platform and need schema help? Talk to our team.</p>
              <a href="tel:+12134442229">Call (213) 444-2229 &rarr;</a>
            </div>

            {/* ── SECTION 10: TESTING ── */}
            <span className="ae-section-label">Validation</span>
            <h2>How to Test If Your Schema Is Working</h2>

            <p>Implementing schema without testing it is like running ads without tracking conversions. You need to validate that your schema is error-free and recognized by AI platforms.</p>

            <div className="ae-cheat-sheet not-prose">
              <div className="ae-cheat-sheet-title">Schema Testing Toolkit</div>
              <ul>
                <li><strong>Google Rich Results Test:</strong> Validates schema types Google supports, shows errors and rich result eligibility</li>
                <li><strong>Schema.org Validator:</strong> Broader check covering all schema types, not just Google-supported ones</li>
                <li><strong>Chrome DevTools:</strong> Inspect page source to verify JSON-LD is rendering correctly</li>
                <li><strong>Ask ChatGPT:</strong> Query your business name and see if AI can find your structured data</li>
                <li><strong>Google Search Console:</strong> Check the Enhancements section for schema errors on indexed pages</li>
              </ul>
            </div>

            {/* ── CTA 10 ── */}
            <div className="ae-cta-inline not-prose">
              <p>We run schema audits as part of every AI visibility assessment. Want one?</p>
              <Link href="/blindspot">Get Your Free Blind Spot Report &rarr;</Link>
            </div>

          </div>

          {/* ── FAQ SECTION ── */}
          <section className="mt-16" aria-labelledby="faq-heading">
            <h2
              id="faq-heading"
              className="text-2xl font-bold text-white mb-8 font-plus-jakarta"
            >
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">

              <div className="p-6 rounded-xl border border-gray-800 bg-gray-900">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Does schema markup directly affect AI search results?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Yes. In March 2025, Google, Microsoft, and ChatGPT all confirmed they
                  use schema markup for their generative AI features. Content with
                  proper schema markup has a{' '}
                  <strong className="text-white">2.5x higher chance</strong> of
                  appearing in AI-generated answers compared to unstructured content.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-gray-800 bg-gray-900">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Which schema types matter most for AI visibility?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  The most impactful types are{' '}
                  <strong className="text-white">FAQPage</strong> (maps to ChatGPT
                  question-response format),{' '}
                  <strong className="text-white">Article</strong> (signals editorial
                  authority),{' '}
                  <strong className="text-white">LocalBusiness</strong> (critical for
                  local providers), and{' '}
                  <strong className="text-white">Organization</strong> (establishes
                  entity identity). Start with FAQPage and Article for the most direct
                  impact on AI citations.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-gray-800 bg-gray-900">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Can I add schema markup without a developer?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Yes. WordPress plugins like Rank Math and Yoast SEO add schema through
                  a visual interface. Shopify and Wix have built-in options and app
                  marketplace solutions. For custom websites, Google&apos;s Structured
                  Data Markup Helper can generate the code for you.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-gray-800 bg-gray-900">
                <h3 className="text-lg font-semibold text-white mb-3">
                  How do I test if my schema markup is working?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Use{' '}
                  <strong className="text-white">Google Rich Results Test</strong>{' '}
                  (search.google.com/test/rich-results) to validate your schema. It
                  shows which types are detected, any errors, and whether your page is
                  eligible for rich results and AI features.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-gray-800 bg-gray-900">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Does schema markup help with Perplexity AI citations?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Yes. Perplexity&apos;s citation system favors pages with clear
                  schema-defined entities. Organization, Product, and FAQPage schema
                  are especially valuable because they make it easier for Perplexity
                  to extract and attribute information in its footnoted answers.
                </p>
              </div>

              {/* ── CTA 11 ── */}
              <div className="ae-cta-inline not-prose">
                <p>Still have questions about schema and AI visibility?</p>
                <a href="mailto:support@theanswerengine.ai">Email support@theanswerengine.ai &rarr;</a>
              </div>

            </div>
          </section>

          {/* ── CTA BLOCK ── */}
          <div className="ae-cta-block not-prose mt-16">
            <h2>Is Your Schema Markup Helping or Hurting Your AI Visibility?</h2>
            <p>Most businesses have incomplete or missing schema. Find out exactly where you stand with a free AI visibility check. We analyze your structured data, content authority, and citation potential. No pitch, just the data.</p>
            <Link href="/blindspot">Get Your Free Blind Spot Report &rarr;</Link>
          </div>

          {/* ── CTA 13 ── */}
          <div className="ae-cta-inline not-prose mt-8">
            <p>Prefer to talk through your situation? Our team is ready.</p>
            <a href="tel:+12134442229">Call (213) 444-2229 &rarr;</a>
          </div>

          {/* ── CTA 14 ── */}
          <div className="ae-cta-inline not-prose mt-4">
            <p>Or reach us by email any time.</p>
            <a href="mailto:support@theanswerengine.ai">Email support@theanswerengine.ai &rarr;</a>
          </div>

          {/* ── FINAL CTA ── */}
          <div className="ae-final-cta not-prose mt-16">
            <h2>Your Competitors Are Already Using Schema to Win AI Citations</h2>
            <p>Every day without proper schema markup is a day AI platforms recommend someone else instead of you. The businesses that act now are building an advantage that compounds over time.</p>
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
              <p className="text-gray-400 text-sm">Helping local service businesses get found, cited, and recommended by AI platforms. No pitch, just the data.</p>
            </div>
          </div>

        </article>
      </main>
    </>
  )
}
