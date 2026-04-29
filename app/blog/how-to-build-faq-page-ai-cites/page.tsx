import type { Metadata } from 'next'
import Link from 'next/link'

export const revalidate = 86400
export const dynamic = 'force-static'
export const dynamicParams = true

const title = 'How to Build an FAQ Page That AI Platforms Actually Cite'
const description =
  'A step-by-step structure for FAQ pages that ChatGPT, Claude, and Google AI treat as answer sources — including the schema pattern they look for.'
const slug = 'how-to-build-faq-page-ai-cites'
const publishDate = '2026-03-18'

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'FAQ page AI search',
    'FAQ schema markup',
    'FAQPage structured data',
    'AI citations FAQ',
    'ChatGPT FAQ optimization',
    'Google AI Overviews FAQ',
    'Perplexity FAQ citations',
    'answer engine optimization FAQ',
    'FAQ page best practices',
    'structured Q&A content',
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
          name: 'How many questions should a FAQ page have for AI visibility?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Aim for 10 to 25 questions that cover the most common queries in your service area. Each answer should be 2 to 4 sentences so AI platforms can extract a clean citation. Pages with fewer than 5 questions rarely earn AI citations because they lack the topical depth AI systems look for.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does FAQ schema markup help with ChatGPT citations?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Pages with FAQPage schema are 3.2x more likely to appear in Google AI Overviews, and BrightEdge research found a 44% increase in AI citations for sites using structured data with FAQ blocks. ChatGPT, Perplexity, and Google AI all process FAQPage schema when crawling content.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the best format for FAQ answers that AI can cite?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Use the Question, Short Answer, Deeper Explanation structure. Start with a direct 1 to 2 sentence answer, then provide 2 to 3 sentences of supporting detail. This lets AI platforms extract a compact citation while having enough context to verify accuracy.',
          },
        },
        {
          '@type': 'Question',
          name: 'Should I put FAQ content on a separate page or embed it in service pages?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Do both. Create a dedicated FAQ page for broad questions about your business and industry. Then embed 3 to 5 relevant FAQs on each service page for topic-specific questions. This gives AI platforms multiple entry points to discover and cite your content.',
          },
        },
        {
          '@type': 'Question',
          name: 'How often should I update my FAQ page for AI search?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Update your FAQ page at least once per quarter. Research shows pages updated within 60 days are 1.9x more likely to appear in AI answers, and pages not updated quarterly are 3x more likely to lose existing citations. Add new questions based on actual customer inquiries and remove outdated information.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can FAQ pages help small businesses compete with larger companies in AI search?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. For lower-authority domains (DR 60 or below), attribute-rich schema achieves a 54.2% citation rate versus 31.8% for generic schema. A well-structured FAQ page with complete schema markup can help smaller businesses earn AI citations that would otherwise go to larger competitors with higher domain authority.',
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
            <span className="text-gray-400">FAQ Pages for AI</span>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl mb-6 bg-white/[0.04] border border-white/[0.08]">
              <span className="text-sm font-semibold tracking-wider uppercase text-white">AEO Education</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-white leading-tight font-plus-jakarta">
              How to Build a FAQ Page That AI Actually Cites
            </h1>

            {/* Featured Snippet Block */}
            <div className="bg-gradient-to-br from-white/[0.02] to-white/[0.02] border border-white/[0.08] rounded-xl p-6 mb-8">
              <p className="text-lg text-white leading-relaxed">
                <strong>Most FAQ pages are invisible to AI platforms. Pages with FAQPage schema are 3.2x more likely to appear in Google AI Overviews.</strong> The difference is not what questions you answer. It is how you structure, format, and mark up those answers so ChatGPT, Perplexity, and Google AI cite your business instead of your competitors.
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
                <span>March 18, 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>Justin Borges</span>
              </div>
            </div>
          </header>

          {/* Main Content with prose */}
          <div className="prose prose-invert prose-lg max-w-none prose-headings:font-plus-jakarta prose-headings:text-white prose-p:text-gray-300 prose-a:text-[#F27D24] prose-a:no-underline hover:prose-a:underline prose-strong:text-white">

            {/* ── STATS GRID ── */}
            <div className="ae-stats-grid not-prose">
              <div className="ae-stat-card">
                <div className="ae-stat-value ae-accent">3.2x</div>
                <div className="ae-stat-label">More likely to appear in Google AI Overviews with FAQPage schema</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-value ae-accent">44%</div>
                <div className="ae-stat-label">Increase in AI citations for sites using structured data with FAQ blocks</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-value ae-accent">527%</div>
                <div className="ae-stat-label">Jump in AI-referred sessions between January and May 2025</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-value ae-accent">54.2%</div>
                <div className="ae-stat-label">Citation rate for lower-authority sites with attribute-rich schema</div>
              </div>
            </div>

            {/* ── INTRODUCTION ── */}
            <span className="ae-section-label">The Problem</span>
            <h2>Most FAQ Pages Are Dead Weight</h2>

            <p>Most FAQ pages sit on websites answering questions nobody asked, formatted in a way no AI platform can parse. They were built for humans who scroll, not for AI systems that extract.</p>

            <p>Meanwhile, businesses with properly structured FAQ pages are earning citations from ChatGPT, Perplexity, and Google AI Overviews on autopilot. The businesses winning AI visibility are not creating better content. They are structuring the same content in a way AI can actually consume.</p>

            <div className="ae-quote not-prose">
              <p>The difference between a FAQ page that earns AI citations and one that collects dust is not content quality. It is structure, schema, and freshness.</p>
            </div>

            <p>BrightEdge found that sites implementing structured data and FAQ blocks saw a <strong>44% increase in AI search citations</strong>. That is not a marginal improvement. That is the difference between being invisible to AI and being cited regularly.</p>

            {/* ── CTA 1 ── */}
            <div className="ae-cta-inline not-prose">
              <p>Is your FAQ page earning AI citations or collecting dust? Find out in 60 seconds.</p>
              <Link href="/blindspot">Get Your Free Blind Spot Report &rarr;</Link>
            </div>

            {/* ── WHY AI LOVES FAQ PAGES ── */}
            <span className="ae-section-label">The Opportunity</span>
            <h2>Why AI Platforms Love FAQ Pages (When Built Right)</h2>

            <p>AI platforms like ChatGPT, Perplexity, and Google AI Overviews are constantly looking for content they can extract clean, citable answers from. FAQ pages are the ideal format because they already follow the exact pattern AI needs: a specific question followed by a direct answer.</p>

            <p>When someone asks ChatGPT &quot;how much does a roof replacement cost in Phoenix,&quot; the AI needs a source that answers that exact question in a compact, verifiable format. A well-built FAQ page with that question and a clear 2 to 3 sentence answer is exactly what AI systems look for. A buried paragraph on page six of your services section is not.</p>

            <p>This is why FAQ content gives AI platforms pre-formatted citation units. Each question-answer pair is a self-contained piece of information that can stand alone in an AI-generated response. That is precisely what makes FAQ pages so valuable for <Link href="/blog/does-schema-markup-help-ai-search">schema-driven AI visibility</Link>.</p>

            {/* ── BAR GROUP: Citation Impact ── */}
            <div className="ae-bar-group not-prose">
              <div className="ae-bar-item">
                <div className="ae-bar-label">FAQPage schema citation lift</div>
                <div className="ae-bar-track"><div className="ae-bar-fill" style={{width:'80%'}}></div></div>
                <div className="ae-bar-value">3.2x</div>
              </div>
              <div className="ae-bar-item">
                <div className="ae-bar-label">AI citation increase with structured FAQ blocks</div>
                <div className="ae-bar-track"><div className="ae-bar-fill" style={{width:'44%'}}></div></div>
                <div className="ae-bar-value">44%</div>
              </div>
              <div className="ae-bar-item">
                <div className="ae-bar-label">Higher citation rate with sequential headings + rich schema</div>
                <div className="ae-bar-track"><div className="ae-bar-fill" style={{width:'70%'}}></div></div>
                <div className="ae-bar-value">2.8x</div>
              </div>
              <div className="ae-bar-item">
                <div className="ae-bar-label">Perplexity ranking weight from structured data</div>
                <div className="ae-bar-track"><div className="ae-bar-fill" style={{width:'10%'}}></div></div>
                <div className="ae-bar-value">10%</div>
              </div>
            </div>

            <div className="ae-callout ae-callout-info not-prose">
              <div className="ae-callout-title">Why This Matters</div>
              <p>AI-referred sessions jumped 527% between January and May 2025. The businesses with properly structured FAQ pages are capturing this wave. The businesses without them are missing it entirely.</p>
            </div>

            {/* ── CTA 2 ── */}
            <div className="ae-cta-inline not-prose">
              <p>Not sure if AI platforms can even read your FAQ content? We will check for free.</p>
              <a href="tel:+12134442229">Call (213) 444-2229 for a Free Consultation &rarr;</a>
            </div>

            {/* ── THE THREE LAYERS ── */}
            <span className="ae-section-label">The Blueprint</span>
            <h2>The Three Layers of a FAQ Page AI Can Actually Read</h2>

            <p>Building a FAQ page that earns AI citations comes down to three layers: the questions you choose, the way you format your answers, and the schema markup you add behind the scenes. Most businesses get one of these right and miss the other two. You need all three working together.</p>

            {/* ── TIMELINE: Three Layers ── */}
            <div className="ae-timeline not-prose">
              <div className="ae-timeline-item">
                <strong>Layer 1: Ask the Right Questions</strong>
                <p>Pull from Google Search Console, customer calls, GBP Q&amp;A, and support inbox. Target 10 to 25 questions grouped by topic: pricing, process, timelines, qualifications, service area.</p>
              </div>
              <div className="ae-timeline-item">
                <strong>Layer 2: Format Answers for AI Extraction</strong>
                <p>Use the &quot;Question, Short Answer, Deeper Explanation&quot; structure. Direct 1 to 2 sentence answer first, then 2 to 3 sentences of supporting context. AI needs extractable citation units.</p>
              </div>
              <div className="ae-timeline-item">
                <strong>Layer 3: Add FAQPage Schema Markup</strong>
                <p>JSON-LD code block declaring structured Q&amp;A to AI platforms. Without it, AI guesses. With it, you declare in machine-readable format every major AI platform processes.</p>
              </div>
            </div>

            <div className="ae-takeaway not-prose">
              <div className="ae-takeaway-title">Key Takeaway</div>
              <p>Missing any one of these three layers reduces your citation potential dramatically. Real questions, extractable answers, and validated schema working together is what separates FAQ pages that earn citations from ones that get ignored.</p>
            </div>

            {/* ── CTA 3 ── */}
            <div className="ae-cta-inline not-prose">
              <p>Want us to audit your FAQ page structure against all three layers? It takes less than a minute to start.</p>
              <Link href="/blindspot">Run Your Free AI Visibility Audit &rarr;</Link>
            </div>

            {/* ── LAYER 1 DEEP DIVE ── */}
            <span className="ae-section-label">Layer 1</span>
            <h2>Ask the Right Questions (Not the Ones You Think)</h2>

            <p>The biggest mistake businesses make is writing FAQ questions they think customers should ask, rather than questions customers actually ask. Your FAQ page should reflect real queries from real people in your market.</p>

            <p>Pull questions from your Google Search Console data, your customer intake calls, your Google Business Profile Q&amp;A section, and your support inbox. These are the exact queries people type into AI platforms.</p>

            <p>Group them by topic: pricing, process, timelines, qualifications, and service area. This topical grouping helps AI platforms understand that your page is a comprehensive resource on the subject, not a random collection of answers. If you want to understand how AI evaluates this kind of topical depth, read our guide on <Link href="/blog/how-ai-platforms-choose-businesses-to-cite">how AI platforms choose businesses to cite</Link>.</p>

            <div className="ae-callout ae-callout-warning not-prose">
              <div className="ae-callout-title">Common Mistake</div>
              <p>Writing FAQs you wish customers would ask (like &quot;Why are you better than competitors?&quot;) instead of the questions they actually type into ChatGPT and Google. If it is not a real query, AI will never surface it as a citation.</p>
            </div>

            {/* ── CTA 4 ── */}
            <div className="ae-cta-inline not-prose">
              <p>Need help identifying the questions your customers are actually asking AI? We pull real query data.</p>
              <a href="mailto:support@theanswerengine.ai">Email support@theanswerengine.ai &rarr;</a>
            </div>

            {/* ── LAYER 2 DEEP DIVE ── */}
            <span className="ae-section-label">Layer 2</span>
            <h2>Format Answers for AI Extraction</h2>

            <p>AI platforms do not read your FAQ the way a human does. They scan for extractable units of information. The ideal answer structure is what researchers call &quot;Question, Short Answer, Deeper Explanation.&quot;</p>

            {/* ── COMPARISON TABLE: Weak vs Strong ── */}
            <table className="ae-comparison-table not-prose">
              <thead>
                <tr>
                  <th>Element</th>
                  <th>Weak Answer</th>
                  <th>Strong Answer</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Opening</td>
                  <td>&quot;It depends on the project&quot;</td>
                  <td>&quot;A full kitchen remodel typically takes 8 to 12 weeks&quot;</td>
                </tr>
                <tr>
                  <td>Specificity</td>
                  <td>No numbers, no ranges</td>
                  <td>Concrete timeframes, price ranges, geographic details</td>
                </tr>
                <tr>
                  <td>Length</td>
                  <td>1 vague sentence</td>
                  <td>2 to 4 sentences with supporting context</td>
                </tr>
                <tr>
                  <td>Standalone Value</td>
                  <td>Useless without visiting the page</td>
                  <td>Complete citation unit AI can extract directly</td>
                </tr>
                <tr>
                  <td>AI Citability</td>
                  <td>Zero. AI skips it entirely.</td>
                  <td>High. Clean first sentence for direct citation.</td>
                </tr>
              </tbody>
            </table>

            <p>That second approach gives AI a clean first sentence it can cite directly, plus enough detail to verify the answer is comprehensive. This is exactly the kind of content structure that <Link href="/blog/what-content-does-chatgpt-read-on-my-website">ChatGPT prioritizes when reading your website</Link>.</p>

            <div className="ae-callout ae-callout-success not-prose">
              <div className="ae-callout-title">The Citation Test</div>
              <p>Read your FAQ answer out loud, completely removed from your website. Does it make sense on its own? Does it include at least one specific, verifiable detail? If yes, it passes. If no, rewrite it until it does.</p>
            </div>

            {/* ── CTA 5 ── */}
            <div className="ae-cta-inline not-prose">
              <p>How do your FAQ answers stack up against the citation test? We will score every answer on your page.</p>
              <Link href="/blindspot">Get Your Free AI Content Audit &rarr;</Link>
            </div>

            {/* ── LAYER 3 DEEP DIVE ── */}
            <span className="ae-section-label">Layer 3</span>
            <h2>Add FAQPage Schema Markup (The Technical Edge)</h2>

            <p>FAQPage schema is a JSON-LD code block you add to your page that explicitly tells AI platforms: this page contains structured questions and answers. Without it, AI has to guess that your content is a FAQ. With it, you are declaring it in a machine-readable format that every major AI platform processes.</p>

            <p>ChatGPT, Claude, Perplexity, and Gemini all actively process Schema Markup when directly accessing content. Structured data contributes approximately 10% to Perplexity&apos;s ranking factors alone. For a deeper look at how schema powers AI visibility, see our breakdown of <Link href="/blog/does-schema-markup-help-ai-search">schema markup and AI search</Link>.</p>

            {/* ── CHEAT SHEET: Schema Implementation ── */}
            <div className="ae-cheat-sheet not-prose">
              <div className="ae-cheat-sheet-title">FAQPage Schema Implementation Checklist</div>
              <table>
                <thead>
                  <tr>
                    <th>Step</th>
                    <th>What To Do</th>
                    <th>Why It Matters</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Use JSON-LD format</td>
                    <td>Google recommends it and AI platforms parse it most reliably</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Set @type to FAQPage</td>
                    <td>Declares structured FAQ to AI, not just a page with questions</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Include each Q as a Question entity</td>
                    <td>Each question gets its own @type: Question block with name field</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Provide acceptedAnswer for each</td>
                    <td>Schema text must match visible page content exactly</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Validate with Google Rich Results Test</td>
                    <td>Confirms schema is detected, error-free, and eligible for rich results</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="ae-callout ae-callout-warning not-prose">
              <div className="ae-callout-title">Critical Rule</div>
              <p>Your schema content must match your visible page content exactly. If the schema says one thing and the page says something different, AI platforms flag the inconsistency and may ignore both. Keep them in sync at all times.</p>
            </div>

            {/* ── CTA 6 ── */}
            <div className="ae-cta-inline not-prose">
              <p>Not sure if your schema is valid or if AI can even see it? We check every line.</p>
              <a href="tel:+12134442229">Call (213) 444-2229 to Schedule a Schema Review &rarr;</a>
            </div>

            {/* ── SCHEMA QUALITY VS DOMAIN AUTHORITY ── */}
            <span className="ae-section-label">The Equalizer</span>
            <h2>Schema Quality Beats Domain Authority</h2>

            <p>This is the most important data point for small and mid-size businesses: schema quality matters more than domain authority for AI citations. Research shows that for lower-authority domains (DR 60 or below), attribute-rich schema achieves a 54.2% citation rate versus 31.8% for generic schema.</p>

            {/* ── DECISION MATRIX ── */}
            <div className="ae-decision-matrix not-prose">
              <div className="ae-decision-matrix-title">Schema Quality Impact by Domain Authority</div>
              <div className="ae-decision-row">
                <div className="ae-decision-if">High DR (60+) with attribute-rich schema</div>
                <div className="ae-decision-arrow">&rarr;</div>
                <div className="ae-decision-then">Dominant AI citation presence across all platforms</div>
              </div>
              <div className="ae-decision-row">
                <div className="ae-decision-if">Low DR (below 60) with attribute-rich schema</div>
                <div className="ae-decision-arrow">&rarr;</div>
                <div className="ae-decision-then">54.2% citation rate. Competitive with much larger sites.</div>
              </div>
              <div className="ae-decision-row">
                <div className="ae-decision-if">High DR (60+) with generic or no schema</div>
                <div className="ae-decision-arrow">&rarr;</div>
                <div className="ae-decision-then">Still earns some citations from raw authority alone</div>
              </div>
              <div className="ae-decision-row">
                <div className="ae-decision-if">Low DR (below 60) with generic or no schema</div>
                <div className="ae-decision-arrow">&rarr;</div>
                <div className="ae-decision-then">31.8% citation rate. Losing to competitors with better markup.</div>
              </div>
            </div>

            <p>A well-structured FAQ page with complete schema markup can help smaller businesses earn AI citations that would otherwise go to larger competitors with higher domain authority. This is the equalizer that makes AEO accessible to businesses of every size.</p>

            {/* ── CTA 7 ── */}
            <div className="ae-cta-inline not-prose">
              <p>Competing against bigger companies in AI search? Schema quality is your advantage. Let us show you where you stand.</p>
              <Link href="/blindspot">Check Your Schema vs Competitors &rarr;</Link>
            </div>

            {/* ── EMBED FAQS EVERYWHERE ── */}
            <span className="ae-section-label">Multiply Your Reach</span>
            <h2>Embed FAQs Everywhere, Not Just One Page</h2>

            <p>A single FAQ page is a good start, but the businesses earning the most AI citations embed FAQ sections across their entire site. Your homepage, each service page, your about page, and your location pages should all include 3 to 5 relevant questions with FAQPage schema.</p>

            <p>This strategy works because it gives AI platforms multiple entry points to discover your expertise. When Perplexity crawls your HVAC repair page and finds 4 well-structured FAQs about common repair issues, it associates that expertise with your business entity. When it later needs to recommend an HVAC company, your business has more authority signals than a competitor whose FAQ content lives on a single page.</p>

            {/* ── PROS CONS ── */}
            <div className="ae-pros-cons not-prose">
              <div className="ae-pros-box">
                <div className="ae-pros-title">Single FAQ Page</div>
                <ul>
                  <li>Centralized, easy to maintain</li>
                  <li>Covers broad business questions</li>
                  <li>One URL for AI to discover</li>
                </ul>
              </div>
              <div className="ae-cons-box">
                <div className="ae-cons-title">Embedded FAQ Sections (Across Site)</div>
                <ul>
                  <li>Multiple AI entry points per topic</li>
                  <li>Builds deeper topical authority per service</li>
                  <li>Higher total citation surface area</li>
                  <li>Supports hub-and-spoke content architecture</li>
                </ul>
              </div>
            </div>

            <p>This approach connects directly to the <Link href="/blog/hub-spoke-content-strategy-ai-citations">hub and spoke content strategy</Link> that drives AI citations. Your main FAQ page acts as the hub, and the FAQ sections embedded across service pages act as spokes. Together, they build the topical authority that AI platforms need to confidently cite your business.</p>

            {/* ── CTA 8 ── */}
            <div className="ae-cta-inline not-prose">
              <p>Want a hub-and-spoke FAQ strategy built for your specific service area? We map it out for free.</p>
              <a href="mailto:support@theanswerengine.ai">Email support@theanswerengine.ai &rarr;</a>
            </div>

            {/* ── FRESHNESS ── */}
            <span className="ae-section-label">Stay Current</span>
            <h2>Keep Your FAQ Page Fresh (Or Lose Your Citations)</h2>

            <p>Building a great FAQ page is not a one-time project. AI platforms prioritize fresh content, and your FAQ page is no exception. Pages updated within 60 days are 1.9x more likely to appear in AI answers. Pages not updated quarterly are 3x more likely to lose citations they have already earned.</p>

            {/* ── BAR GROUP: Freshness Impact ── */}
            <div className="ae-bar-group not-prose">
              <div className="ae-bar-item">
                <div className="ae-bar-label">Citation boost from updates within 60 days</div>
                <div className="ae-bar-track"><div className="ae-bar-fill" style={{width:'63%'}}></div></div>
                <div className="ae-bar-value">1.9x</div>
              </div>
              <div className="ae-bar-item">
                <div className="ae-bar-label">Citation loss risk without quarterly updates</div>
                <div className="ae-bar-track"><div className="ae-bar-fill" style={{width:'75%'}}></div></div>
                <div className="ae-bar-value">3x</div>
              </div>
              <div className="ae-bar-item">
                <div className="ae-bar-label">AI-referred session growth (Jan-May 2025)</div>
                <div className="ae-bar-track"><div className="ae-bar-fill" style={{width:'95%'}}></div></div>
                <div className="ae-bar-value">527%</div>
              </div>
            </div>

            <p>Set a quarterly review cycle for your FAQ content. Add new questions based on customer inquiries you have received since the last update. Update pricing, timelines, or process details that have changed. Remove questions that are no longer relevant. Each update signals to AI platforms that your content is current and trustworthy.</p>

            <p>Also review what your competitors are doing. If a competitor adds a FAQ page that answers questions yours does not cover, you risk losing citations to them. AI platforms compare sources. The most complete, most current source wins.</p>

            <div className="ae-takeaway not-prose">
              <div className="ae-takeaway-title">Key Takeaway</div>
              <p>Treat your FAQ page like a living document, not a checkbox exercise. In a world where AI-referred sessions have jumped 527% in a single year, your FAQ page is one of the most valuable assets on your entire website. Stale content equals lost citations.</p>
            </div>

            {/* ── CTA 9 ── */}
            <div className="ae-cta-inline not-prose">
              <p>When was your FAQ page last updated? If you cannot remember, your AI citations are slipping.</p>
              <Link href="/blindspot">Check Your AI Visibility Now &rarr;</Link>
            </div>

            {/* ── COMMON MISTAKES ── */}
            <span className="ae-section-label">Avoid These</span>
            <h2>Common FAQ Page Mistakes That Kill AI Visibility</h2>

            <p>Even businesses that build FAQ pages often sabotage their AI visibility with avoidable mistakes. Here are the most damaging ones and how to fix them.</p>

            {/* ── COMPARISON TABLE: Mistakes ── */}
            <table className="ae-comparison-table not-prose">
              <thead>
                <tr>
                  <th>Mistake</th>
                  <th>Why It Hurts</th>
                  <th>The Fix</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Accordion-only FAQs</td>
                  <td>Many AI crawlers cannot render JavaScript. Hidden content never gets indexed.</td>
                  <td>Render all answer text in the initial HTML. Use accordions for UX only.</td>
                </tr>
                <tr>
                  <td>Vague one-sentence answers</td>
                  <td>AI has nothing to cite. &quot;Costs vary&quot; gives zero extractable value.</td>
                  <td>Include at least one specific detail: price range, timeframe, or process step.</td>
                </tr>
                <tr>
                  <td>Schema/content mismatch</td>
                  <td>AI platforms flag inconsistencies and may ignore both schema and visible content.</td>
                  <td>Keep schema text and visible page content synchronized at all times.</td>
                </tr>
                <tr>
                  <td>Generic industry questions</td>
                  <td>AI wants to recommend specific businesses, not generic industry knowledge.</td>
                  <td>Make questions local and service-specific: your area, your process, your pricing.</td>
                </tr>
                <tr>
                  <td>No update schedule</td>
                  <td>Stale pages lose citations 3x faster than regularly updated ones.</td>
                  <td>Set quarterly review cycle. Add new questions, update details, remove outdated content.</td>
                </tr>
              </tbody>
            </table>

            <div className="ae-callout ae-callout-warning not-prose">
              <div className="ae-callout-title">The Invisible Problem</div>
              <p>Most businesses never know their FAQ page is invisible to AI because they are not tracking AI citations. Traditional SEO tools do not measure AI visibility. You need a different kind of audit to see what AI platforms actually see when they visit your site.</p>
            </div>

            {/* ── CTA 10 ── */}
            <div className="ae-cta-inline not-prose">
              <p>Making any of these mistakes? Our audit catches all five and shows you exactly how to fix them.</p>
              <a href="tel:+12134442229">Call (213) 444-2229 for a Free FAQ Audit &rarr;</a>
            </div>

            {/* ── ACTION PLAN ── */}
            <span className="ae-section-label">Your Action Plan</span>
            <h2>The 7-Step FAQ Page Blueprint (Do This Week)</h2>

            <p>Here is what to do this week to start earning AI citations from your FAQ content. Each step builds on the previous one.</p>

            {/* ── TIMELINE: Action Steps ── */}
            <div className="ae-timeline not-prose">
              <div className="ae-timeline-item">
                <strong>Step 1: Audit your current FAQ page</strong>
                <p>Count your questions. Check if answers are specific or vague. If you do not have a FAQ page, create one.</p>
              </div>
              <div className="ae-timeline-item">
                <strong>Step 2: Collect 15 to 20 real customer questions</strong>
                <p>Pull from inbox, intake calls, Google Business Profile, and Search Console query data.</p>
              </div>
              <div className="ae-timeline-item">
                <strong>Step 3: Write answers using the Q-SA-DE format</strong>
                <p>Question, Short Answer (1 to 2 sentences), Deeper Explanation (2 to 3 sentences). Each answer should stand alone.</p>
              </div>
              <div className="ae-timeline-item">
                <strong>Step 4: Add FAQPage schema markup</strong>
                <p>JSON-LD format. Match schema text to visible page content exactly. No mismatches.</p>
              </div>
              <div className="ae-timeline-item">
                <strong>Step 5: Validate with Google Rich Results Test</strong>
                <p>Run your page through search.google.com/test/rich-results. Fix any errors before publishing.</p>
              </div>
              <div className="ae-timeline-item">
                <strong>Step 6: Embed 3 to 5 relevant FAQs on each service page</strong>
                <p>Each embedded section gets its own FAQPage schema. Build the hub-and-spoke architecture.</p>
              </div>
              <div className="ae-timeline-item">
                <strong>Step 7: Set a quarterly reminder</strong>
                <p>Update questions, refresh answers, add new content. Stale FAQs lose citations 3x faster.</p>
              </div>
            </div>

            {/* ── CTA 11 ── */}
            <div className="ae-cta-inline not-prose">
              <p>Want us to build your FAQ blueprint for you? We handle every step from research to schema validation.</p>
              <Link href="/blindspot">Start With Your Free AI Audit &rarr;</Link>
            </div>

            {/* ── CTA BLOCK ── */}
            <div className="ae-cta-block not-prose">
              <h3>Your FAQ Page Is Either Working For You Or Against You</h3>
              <p>Every day your FAQ page sits without proper schema, formatted answers, and real customer questions, you are handing AI citations to your competitors. The businesses that treat their FAQ page as a living, AI-optimized asset are the ones AI platforms consistently recommend.</p>
              <Link href="/blindspot">Get Your Free Blind Spot Report &rarr;</Link>
            </div>

            {/* ── FAQ SECTION ── */}
            <span className="ae-section-label">FAQ</span>
            <h2>Frequently Asked Questions</h2>

          </div>

          {/* FAQ Cards - Outside prose for visual formatting */}
          <div className="grid gap-6 sm:grid-cols-2 mt-8 mb-12">
            <div className="p-6 rounded-xl border border-gray-800 bg-gray-900">
              <h3 className="text-lg font-semibold text-white mb-3 font-plus-jakarta">
                How many questions should a FAQ page have for AI visibility?
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Aim for 10 to 25 questions that cover the most common queries in
                your service area. Each answer should be 2 to 4 sentences so AI
                platforms can extract a clean citation. Pages with fewer than 5
                questions rarely earn AI citations because they lack topical depth.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-gray-800 bg-gray-900">
              <h3 className="text-lg font-semibold text-white mb-3 font-plus-jakarta">
                Does FAQ schema markup help with ChatGPT citations?
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Yes. Pages with FAQPage schema are{' '}
                <strong className="text-white">3.2x more likely</strong> to appear
                in Google AI Overviews. BrightEdge research found a 44% increase in
                AI citations for sites using structured data with FAQ blocks.
                ChatGPT, Perplexity, and Google AI all process FAQPage schema.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-gray-800 bg-gray-900">
              <h3 className="text-lg font-semibold text-white mb-3 font-plus-jakarta">
                What is the best format for FAQ answers that AI can cite?
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Use the &quot;Question, Short Answer, Deeper Explanation&quot;
                structure. Start with a direct 1 to 2 sentence answer, then provide
                2 to 3 sentences of supporting detail. This lets AI platforms extract
                a compact citation with enough context to verify accuracy.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-gray-800 bg-gray-900">
              <h3 className="text-lg font-semibold text-white mb-3 font-plus-jakarta">
                Should I put FAQs on a separate page or on service pages?
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Do both. Create a dedicated FAQ page for broad questions about your
                business. Then embed 3 to 5 relevant FAQs on each service page for
                topic-specific questions. This gives AI platforms multiple entry
                points to discover and cite your content.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-gray-800 bg-gray-900">
              <h3 className="text-lg font-semibold text-white mb-3 font-plus-jakarta">
                How often should I update my FAQ page for AI search?
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Update at least once per quarter. Pages updated within 60 days are{' '}
                <strong className="text-white">1.9x more likely</strong> to appear in
                AI answers. Pages not updated quarterly are 3x more likely to lose
                existing citations. Add new questions from actual customer inquiries.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-gray-800 bg-gray-900">
              <h3 className="text-lg font-semibold text-white mb-3 font-plus-jakarta">
                Can FAQ pages help small businesses compete in AI search?
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Yes. For lower-authority domains, attribute-rich schema achieves a{' '}
                <strong className="text-white">54.2% citation rate</strong> versus
                31.8% for generic schema. A well-structured FAQ page with complete
                markup can help smaller businesses earn citations that would otherwise
                go to larger competitors.
              </p>
            </div>
          </div>

          {/* ── CTA 12 ── */}
          <div className="prose prose-invert prose-lg max-w-none prose-headings:font-plus-jakarta prose-headings:text-white prose-p:text-gray-300 prose-a:text-[#F27D24] prose-a:no-underline hover:prose-a:underline prose-strong:text-white">
            <div className="ae-cta-inline not-prose">
              <p>Have more questions about FAQ pages and AI visibility? We answer them all in your free report.</p>
              <Link href="/blindspot">Get Your Custom Blind Spot Report &rarr;</Link>
            </div>

            {/* ── CTA 13 ── */}
            <div className="ae-cta-inline not-prose">
              <p>Prefer to talk through your FAQ strategy with an AEO specialist? We are happy to help.</p>
              <a href="tel:+12134442229">Call (213) 444-2229 &rarr;</a>
            </div>

            {/* ── CTA 14 ── */}
            <div className="ae-cta-inline not-prose">
              <p>Want the full breakdown emailed to you? Send us a note and we will share our complete FAQ optimization guide.</p>
              <a href="mailto:support@theanswerengine.ai">Email support@theanswerengine.ai &rarr;</a>
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
          </div>

          {/* ── FINAL CTA ── */}
          <div className="ae-final-cta">
            <div className="ae-final-cta-pulse"></div>
            <h2>Is Your FAQ Page Earning AI Citations or Collecting Dust?</h2>
            <p>Most businesses have FAQ pages that AI platforms completely ignore. Our free blind spot report checks your schema markup, content structure, and citation potential across ChatGPT, Perplexity, and Google AI. No pitch, just the data on where you stand and what to fix first.</p>
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
