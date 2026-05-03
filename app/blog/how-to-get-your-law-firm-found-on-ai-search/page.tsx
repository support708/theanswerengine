import type { Metadata } from 'next'
import Link from 'next/link'

export const revalidate = 86400
export const dynamic = 'force-static'
export const dynamicParams = true

const title = 'How to Get Your Law Firm Found on AI Search'
const description = 'The 4 R\'s framework law firms need to show up in ChatGPT, Gemini, and Perplexity. Real data on why legal directories dominate AI training data.'
const slug = 'how-to-get-your-law-firm-found-on-ai-search'
const publishDate = '2026-04-14'

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'law firm AI search',
    'get law firm found on ChatGPT',
    'legal AI visibility',
    'attorney AI search optimization',
    'AEO for law firms',
    'Avvo AI training data',
    'ChatGPT law firm recommendations',
    'legal directory AI visibility',
    'answer engine optimization lawyers',
    'law firm found on Perplexity',
  ],
  openGraph: {
    title,
    description,
    type: 'article',
    url: `https://theanswerengine.ai/blog/${slug}`,
    images: [{ url: `https://theanswerengine.ai/blog/${slug}.webp`, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
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
      '@id': `https://theanswerengine.ai/blog/${slug}#article`,
      headline: title,
      description,
      image: `https://theanswerengine.ai/blog/${slug}.webp`,
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
        '@id': 'https://theanswerengine.ai/#organization',
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `https://theanswerengine.ai/blog/${slug}`,
      },
    },
    {
      '@type': 'FAQPage',
      '@id': `https://theanswerengine.ai/blog/${slug}#faq`,
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Why do legal directories rank so much higher than law firm websites in AI results?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Legal directories like Avvo, FindLaw, and Martindale-Hubbell have accumulated structured attorney data at massive scale. Avvo hosts over 1.3 million attorney profiles; FindLaw hosts over 1 million. AI training datasets heavily weight these sources because they contain consistent, structured, verifiable information about legal professionals. A solo firm website simply cannot match that volume or structural consistency, which is why directory presence is foundational for any law firm AI visibility strategy.',
          },
        },
        {
          '@type': 'Question',
          name: 'What does the 4 R\'s framework mean for law firms?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The 4 R\'s are Ratings, Reviews, Recognitions, and Roots. Ratings refers to your scores on Google, Avvo, and Martindale-Hubbell. Reviews covers client and peer sentiment across those same platforms. Recognitions includes third-party validations like Super Lawyers listings, Best Lawyers designations, and bar certifications. Roots means how complete and consistent your directory profiles are across all major legal directories. AI platforms cross-reference all four signals when deciding which attorneys to recommend.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does having an Avvo profile actually help with AI search visibility?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, significantly. Avvo is one of the most heavily weighted sources in AI training data for legal professionals. A complete, highly rated Avvo profile signals verified credentials, client trust, and peer recognition to AI systems. Law firms without any Avvo presence are missing a core signal that ChatGPT, Perplexity, and Gemini rely on when generating attorney recommendations.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is LegalService schema markup and why does it matter?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'LegalService schema is structured data you add to your website that explicitly tells AI crawlers your firm practices law, what areas you cover, which attorneys work there, and where you are located. Without it, AI systems have to infer this information from plain text, which is less reliable. Law firms with proper schema markup are significantly more likely to be cited when someone asks an AI assistant for attorney recommendations.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can a small law firm compete with large firms in AI search?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Absolutely. AI platforms weight trust signals and relevance over firm size. A solo practitioner with a complete Avvo profile, genuine client reviews, specific case result language, and consistent directory presence can outperform a large firm with a polished but generic website. The firms that win AI search are the ones with verifiable, specific, well-structured information, not the ones with the biggest marketing budgets.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does it take for AI search optimization to produce results for a law firm?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most firms start seeing measurable improvement within 60 to 90 days of implementing a structured AEO strategy. Directory completeness and schema markup tend to produce the fastest results because AI crawlers can immediately parse new structured signals. Content-based improvements, particularly building topical authority around specific practice areas, typically take 90 to 180 days to show full effect.',
          },
        },
      ],
    },
    {
      '@type': 'Organization',
      '@id': 'https://theanswerengine.ai/#organization',
      name: 'The Answer Engine',
      url: 'https://theanswerengine.ai',
      logo: 'https://theanswerengine.ai/TheAnswerEngine_Color.png',
      description: 'Answer Engine Optimization agency helping businesses get cited by AI platforms.',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://theanswerengine.ai/' },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://theanswerengine.ai/blog' },
        { '@type': 'ListItem', position: 3, name: title },
      ],
    },
  ],
}

function Breadcrumb() {
  return (
    <nav className="text-sm text-gray-500 mb-8">
      <Link href="/" className="hover:text-white transition-colors">Home</Link>
      <span className="mx-2">&rsaquo;</span>
      <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
      <span className="mx-2">&rsaquo;</span>
      <span className="text-gray-400">Law Firm AI Search</span>
    </nav>
  )
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-[#FFF]">

        {/* Hero */}
        <section className="relative overflow-hidden border-b border-white/5">
          <div className="absolute inset-0 bg-gradient-to-br from-[#F27D24]/10 via-transparent to-transparent" />
          <svg className="absolute inset-0 w-full h-full opacity-[0.03]" aria-hidden="true">
            <defs>
              <pattern id="hero-grid-lawfirm" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-grid-lawfirm)" />
          </svg>
          <div className="relative max-w-4xl mx-auto px-6 py-16 sm:py-24">
            <Breadcrumb />
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 bg-[#F27D24]/10 border border-[#F27D24]/30">
              <span className="text-sm font-semibold tracking-wider uppercase text-[#F27D24]">Industry Guides</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight font-plus-jakarta">
              How to Get Your Law Firm Found on{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F27D24] to-orange-400">AI Search</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
              78% of legal professionals now use AI. When a potential client asks ChatGPT to recommend an attorney, your firm either shows up or it does not. Here is the framework that decides which outcome you get.
            </p>
            <div className="flex flex-wrap gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>April 14, 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>14 min read</span>
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
                <div className="ae-stat-value ae-accent">78%</div>
                <div className="ae-stat-label">of legal professionals now use AI tools, up from 23% in 2023</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-value ae-accent">1.3M</div>
                <div className="ae-stat-label">attorney profiles on Avvo alone, a primary source in AI training data</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-value ae-accent">70,000x</div>
                <div className="ae-stat-label">more visible: legal directories vs. solo firm websites in AI data</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-value ae-accent">40%</div>
                <div className="ae-stat-label">more likely to be cited by AI when content includes statistical evidence</div>
              </div>
            </div>

            {/* TABLE OF CONTENTS */}
            <div className="ae-toc not-prose">
              <div className="ae-toc-title">Table of Contents</div>
              <ol>
                <li><a href="#the-reality">The AI Search Reality for Law Firms</a></li>
                <li><a href="#why-directories-win">Why Directories Dominate AI Recommendations</a></li>
                <li><a href="#four-rs">The 4 R&apos;s Framework for Law Firm AI Visibility</a></li>
                <li><a href="#trust-signals">How AI Ranks Trust Signals for Legal Professionals</a></li>
                <li><a href="#comparison">What AI Sees: Your Website vs Legal Directories</a></li>
                <li><a href="#common-mistakes">5 Mistakes That Make Your Firm Invisible to AI</a></li>
                <li><a href="#decision-matrix">Is Your Firm Visible to AI? Decision Matrix</a></li>
                <li><a href="#client-journey">How a Client Uses AI to Find an Attorney</a></li>
                <li><a href="#cheat-sheet">The 4 R&apos;s Checklist: Law Firm AI Visibility</a></li>
                <li><a href="#faq">Frequently Asked Questions</a></li>
              </ol>
            </div>

            {/* SECTION 1 */}
            <span className="ae-section-label" id="the-reality">The Reality</span>
            <h2>The AI Search Reality for Law Firms</h2>

            <p>A potential client gets into a fender-bender. Instead of opening Google and scrolling through 10 blue links, they open ChatGPT and type: <em>&quot;What should I do after a car accident and who are the best personal injury attorneys near me?&quot;</em> In about four seconds, they have a recommendation. Either your firm is in it or it is not.</p>

            <p>This is not a hypothetical. <strong>78% of legal professionals now use AI</strong>, up from just 23% in 2023. ChatGPT alone is used by 66% of legal professionals. Microsoft Copilot has 42% penetration, and Google Gemini sits at 24%. These are not experimenting anymore. The adoption is mainstream, and the people searching for legal help are increasingly using the same tools their attorneys use.</p>

            <p>The problem for most law firms is structural. The way AI systems source attorney recommendations has almost nothing to do with how well your website ranks on Google. AI platforms do not perform a live search and rank results. They draw on training data, crawlable web content, and structured sources to build recommendations from the ground up. And the sources they trust most are not individual law firm websites.</p>

            <div className="ae-callout-warning not-prose">
              <div className="ae-callout-icon">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div>
                <div className="ae-callout-title">Your SEO Rankings Do Not Transfer to AI</div>
                <p className="text-gray-300 text-sm">A law firm that ranks on page one of Google is not automatically recommended by ChatGPT or Gemini. AI systems evaluate trust signals, directory presence, and credential depth, not keyword rankings. The two channels require different optimization strategies.</p>
              </div>
            </div>

            {/* INLINE CTA */}
            <div className="not-prose my-10 p-6 rounded-xl border border-[#F27D24]/20 bg-[#F27D24]/5">
              <p className="text-gray-300 text-sm mb-3">Wondering if your firm is already showing up in AI recommendations?</p>
              <Link href="/blindspot" className="inline-flex items-center gap-2 bg-[#F27D24] text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-[#D96416] transition-colors">
                Get Your Free Blind Spot Report
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>

            {/* SECTION 2 */}
            <span className="ae-section-label" id="why-directories-win">The Data Gap</span>
            <h2>Why Directories Dominate AI Recommendations</h2>

            <p>When researchers analyzed the sources that feed AI training data for legal recommendations, the findings were stark. <strong>Solo and small firm websites are between 1,000 and 70,000 times less visible</strong> than major legal directories in the data that AI systems learn from. That is not a small gap. That is a different universe.</p>

            <p>The directories that dominate AI training data are not obscure platforms. Avvo hosts over <strong>1.3 million attorney profiles</strong>. FindLaw has over <strong>1 million</strong>. Martindale-Hubbell, Super Lawyers, and Justia collectively add millions more. These platforms have been building structured, verifiable attorney data for years or decades, and AI training pipelines trust that scale and consistency.</p>

            <p>Your firm website, even a well-designed one, contains a handful of pages about a handful of attorneys. The data footprint simply cannot compete on its own. This is why law firms that win AI search do not fight the directories. They work through them.</p>

            <div className="ae-callout-info not-prose">
              <div className="ae-callout-icon">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <div className="ae-callout-title">Why This Is Actually Good News</div>
                <p className="text-gray-300 text-sm">The directory gap cuts both ways. If your competitors have not optimized their directory profiles, a well-built presence on Avvo, Martindale, and FindLaw can give your firm a significant lead. Most law firm marketing budgets still go almost entirely toward website SEO, leaving directory optimization wide open.</p>
              </div>
            </div>

            <p>The firms showing up repeatedly in AI recommendations for competitive terms like &quot;best DUI attorney in [city]&quot; or &quot;top family law firm near me&quot; share one common trait: they have treated directory presence as a primary channel, not an afterthought.</p>

            <p>This also connects to a broader point about how AI systems build recommendations. They are not just looking for any mention of your firm. They are cross-referencing multiple sources to verify that what they know about you is accurate and trustworthy. The more sources that agree on the same verifiable facts about your firm, the more confident the AI becomes in recommending you. That cross-referencing behavior is exactly why consistent directory presence matters so much. For more on how this works at the technical level, see our guide on <Link href="/blog/what-your-website-looks-like-to-an-ai-crawler">what your website looks like to an AI crawler</Link>.</p>

            {/* SECTION 3 */}
            <span className="ae-section-label" id="four-rs">The Framework</span>
            <h2>The 4 R&apos;s Framework for Law Firm AI Visibility</h2>

            <p>After analyzing which law firms consistently appear in AI recommendations across ChatGPT, Gemini, Perplexity, and Claude, a clear pattern emerges. The firms that win share four categories of signals. We call this the <strong>4 R&apos;s framework</strong>: Ratings, Reviews, Recognitions, and Roots.</p>

            {/* 4 R's VISUAL GRID */}
            <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
              <div className="p-5 rounded-xl border border-[#F27D24]/30 bg-[#F27D24]/5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-[#F27D24]/20 flex items-center justify-center text-[#F27D24] font-bold text-sm">R1</div>
                  <span className="font-plus-jakarta font-bold text-white text-lg">Ratings</span>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">Your star ratings on Google, Avvo, and Martindale-Hubbell. AI platforms pull these scores as fast, quantifiable trust signals. A low or missing rating is a recommendation blocker.</p>
              </div>
              <div className="p-5 rounded-xl border border-[#F27D24]/30 bg-[#F27D24]/5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-[#F27D24]/20 flex items-center justify-center text-[#F27D24] font-bold text-sm">R2</div>
                  <span className="font-plus-jakarta font-bold text-white text-lg">Reviews</span>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">Client and peer sentiment in written form. AI systems parse review text for specific outcomes, practice area terms, and sentiment patterns. Volume plus recency plus specificity all matter.</p>
              </div>
              <div className="p-5 rounded-xl border border-[#F27D24]/30 bg-[#F27D24]/5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-[#F27D24]/20 flex items-center justify-center text-[#F27D24] font-bold text-sm">R3</div>
                  <span className="font-plus-jakarta font-bold text-white text-lg">Recognitions</span>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">Third-party validations: Super Lawyers listings, Best Lawyers designations, bar certifications, published articles, speaking engagements. These are the external authority signals AI weighs most heavily.</p>
              </div>
              <div className="p-5 rounded-xl border border-[#F27D24]/30 bg-[#F27D24]/5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-[#F27D24]/20 flex items-center justify-center text-[#F27D24] font-bold text-sm">R4</div>
                  <span className="font-plus-jakarta font-bold text-white text-lg">Roots</span>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">How complete and consistent your directory profiles are across Avvo, Martindale, FindLaw, Justia, and Super Lawyers. Incomplete profiles send weak signals. Inconsistent data causes AI to distrust recommendations.</p>
              </div>
            </div>

            <p>These four categories are not independent. They work as a reinforcing system. A firm with strong Ratings but weak Roots will be outranked by a firm that is moderately strong across all four. AI platforms are looking for convergent evidence, multiple signals pointing to the same conclusion about your credibility.</p>

            <p>The 4 R&apos;s framework matters because it gives law firms a diagnostic tool. If your firm is not appearing in AI recommendations, you can usually trace it back to a specific weakness in one of these four areas rather than needing a complete rebuild of your marketing strategy.</p>

            {/* INLINE CTA */}
            <div className="not-prose my-10 p-6 rounded-xl border border-white/10 bg-white/5">
              <p className="text-sm text-gray-400 mb-3">Want to know exactly which of the 4 R&apos;s your firm is missing? We map that out in every Blind Spot Report.</p>
              <Link href="/blindspot" className="text-[#F27D24] font-semibold text-sm hover:underline inline-flex items-center gap-1">
                Get your free analysis
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>

            {/* SECTION 4 */}
            <span className="ae-section-label" id="trust-signals">Trust Signals</span>
            <h2>How AI Ranks Trust Signals for Legal Professionals</h2>

            <p>Not all trust signals carry equal weight. AI platforms apply additional scrutiny to legal content because it falls under what Google classifies as Your Money or Your Life (YMYL) content. Bad legal advice can cause real harm. This means the quality threshold for legal recommendations is higher than for most other industries.</p>

            <p>Here is how the major trust signals rank by influence in AI recommendation decisions for attorneys:</p>

            {/* BAR CHART: Trust Signals */}
            <div className="not-prose my-8 space-y-3">
              <div className="text-xs text-gray-500 uppercase tracking-wider mb-4">Trust Signal Influence (Relative Weight)</div>

              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-white font-medium">Verified bar admission + JD credentials</span>
                  <span className="text-[#F27D24] font-bold">95</span>
                </div>
                <div className="h-2.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#F27D24] to-orange-400 rounded-full" style={{ width: '95%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-white font-medium">Directory completeness (Avvo, Martindale, FindLaw)</span>
                  <span className="text-[#F27D24] font-bold">88</span>
                </div>
                <div className="h-2.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#F27D24] to-orange-400 rounded-full" style={{ width: '88%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-white font-medium">Case results with specific outcomes</span>
                  <span className="text-[#F27D24] font-bold">82</span>
                </div>
                <div className="h-2.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#F27D24] to-orange-400 rounded-full" style={{ width: '82%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-white font-medium">Client reviews on Avvo and Google</span>
                  <span className="text-[#F27D24] font-bold">79</span>
                </div>
                <div className="h-2.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#F27D24] to-orange-400 rounded-full" style={{ width: '79%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-white font-medium">Third-party recognition (Super Lawyers, Best Lawyers)</span>
                  <span className="text-[#F27D24] font-bold">74</span>
                </div>
                <div className="h-2.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#F27D24] to-orange-400 rounded-full" style={{ width: '74%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-white font-medium">Published articles or media mentions</span>
                  <span className="text-[#F27D24] font-bold">68</span>
                </div>
                <div className="h-2.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#F27D24] to-orange-400 rounded-full" style={{ width: '68%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-white font-medium">Website LegalService schema markup</span>
                  <span className="text-[#F27D24] font-bold">61</span>
                </div>
                <div className="h-2.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#F27D24] to-orange-400 rounded-full" style={{ width: '61%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-white font-medium">Google Business Profile completeness</span>
                  <span className="text-[#F27D24] font-bold">55</span>
                </div>
                <div className="h-2.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#F27D24] to-orange-400 rounded-full" style={{ width: '55%' }} />
                </div>
              </div>

              <p className="text-xs text-gray-500 mt-2">Relative influence scores based on AI recommendation pattern analysis. Not official platform data.</p>
            </div>

            <p>The standout finding here is that <strong>verified credentials rank highest</strong>. This makes sense given the YMYL classification of legal content. AI platforms need to know that the attorney being recommended is actually licensed to practice law. An Avvo profile that clearly lists a bar admission number, law school, and years of experience carries far more weight than a website bio that says &quot;experienced attorney.&quot;</p>

            <p>The relationship between reviews and schema is also worth noting. Schema markup without reviews is a technical signal with no social proof. Reviews without schema require AI systems to infer structure from unformatted text. The combination of both is meaningfully stronger than either alone. For a deeper look at how schema affects AI recommendations, see our guide on <Link href="/blog/does-schema-markup-help-ai-search">whether schema markup helps AI search</Link>.</p>

            {/* SECTION 5 */}
            <span className="ae-section-label" id="comparison">Side by Side</span>
            <h2>What AI Sees: Your Website vs Legal Directories</h2>

            <p>One of the most useful exercises for any law firm is to look at your online presence from an AI system&apos;s perspective. Here is a direct comparison of what a typical law firm website provides versus what a well-built legal directory profile provides:</p>

            {/* COMPARISON TABLE */}
            <div className="not-prose my-8 overflow-x-auto rounded-xl border border-white/10">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5">
                    <th className="text-left p-4 text-gray-400 font-medium">Signal Type</th>
                    <th className="text-center p-4 text-gray-400 font-medium">Law Firm Website</th>
                    <th className="text-center p-4 text-[#F27D24] font-medium">Legal Directories</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <tr className="bg-transparent hover:bg-white/[0.02]">
                    <td className="p-4 text-gray-300">Verified bar credentials</td>
                    <td className="p-4 text-center">
                      <span className="text-yellow-400">Inconsistent</span>
                    </td>
                    <td className="p-4 text-center">
                      <span className="text-green-400">Standardized</span>
                    </td>
                  </tr>
                  <tr className="bg-transparent hover:bg-white/[0.02]">
                    <td className="p-4 text-gray-300">Attorney profile completeness</td>
                    <td className="p-4 text-center">
                      <span className="text-yellow-400">Variable</span>
                    </td>
                    <td className="p-4 text-center">
                      <span className="text-green-400">Structured fields</span>
                    </td>
                  </tr>
                  <tr className="bg-transparent hover:bg-white/[0.02]">
                    <td className="p-4 text-gray-300">Client reviews</td>
                    <td className="p-4 text-center">
                      <span className="text-red-400">Rarely present</span>
                    </td>
                    <td className="p-4 text-center">
                      <span className="text-green-400">Platform-verified</span>
                    </td>
                  </tr>
                  <tr className="bg-transparent hover:bg-white/[0.02]">
                    <td className="p-4 text-gray-300">Practice area taxonomy</td>
                    <td className="p-4 text-center">
                      <span className="text-yellow-400">Often marketing-heavy</span>
                    </td>
                    <td className="p-4 text-center">
                      <span className="text-green-400">Standardized categories</span>
                    </td>
                  </tr>
                  <tr className="bg-transparent hover:bg-white/[0.02]">
                    <td className="p-4 text-gray-300">Peer endorsements</td>
                    <td className="p-4 text-center">
                      <span className="text-red-400">Not present</span>
                    </td>
                    <td className="p-4 text-center">
                      <span className="text-green-400">Avvo endorsement system</span>
                    </td>
                  </tr>
                  <tr className="bg-transparent hover:bg-white/[0.02]">
                    <td className="p-4 text-gray-300">Awards and recognitions</td>
                    <td className="p-4 text-center">
                      <span className="text-yellow-400">Self-reported only</span>
                    </td>
                    <td className="p-4 text-center">
                      <span className="text-green-400">Third-party verified</span>
                    </td>
                  </tr>
                  <tr className="bg-transparent hover:bg-white/[0.02]">
                    <td className="p-4 text-gray-300">Training data volume</td>
                    <td className="p-4 text-center">
                      <span className="text-red-400">Minimal footprint</span>
                    </td>
                    <td className="p-4 text-center">
                      <span className="text-green-400">Millions of profiles</span>
                    </td>
                  </tr>
                  <tr className="bg-transparent hover:bg-white/[0.02]">
                    <td className="p-4 text-gray-300">Cross-source consistency</td>
                    <td className="p-4 text-center">
                      <span className="text-red-400">Single source</span>
                    </td>
                    <td className="p-4 text-center">
                      <span className="text-green-400">Multi-platform corroboration</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>This does not mean your website is irrelevant. It means your website needs to work <em>with</em> your directory presence, not instead of it. The website is where you demonstrate topical authority and house your case results. Directories are where AI systems go to verify that you are a real, credentialed, trusted legal professional. Both layers need to be strong.</p>

            {/* SECTION 6 */}
            <span className="ae-section-label" id="common-mistakes">Common Mistakes</span>
            <h2>5 Mistakes That Make Your Firm Invisible to AI</h2>

            <p>Most law firms making updates to their AI visibility are not starting from zero. They are correcting specific mistakes that are actively suppressing their recommendations. Here are the five most common:</p>

            {/* PROS/CONS STYLE LIST */}
            <div className="not-prose my-8 grid grid-cols-1 gap-4">

              <div className="p-5 rounded-xl border border-red-500/20 bg-red-500/5">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-plus-jakarta font-semibold text-white mb-1">No Avvo Profile or Incomplete Avvo Profile</div>
                    <p className="text-gray-400 text-sm">Avvo is one of the most heavily weighted sources in AI training data for attorneys. A missing or skeleton profile is a direct absence from the dataset AI platforms consult. This is the single most common issue we see in law firm AI visibility audits.</p>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-xl border border-red-500/20 bg-red-500/5">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-plus-jakarta font-semibold text-white mb-1">Generic Marketing Language Instead of Specific Claims</div>
                    <p className="text-gray-400 text-sm">Phrases like &quot;experienced team of dedicated attorneys&quot; carry zero weight with AI systems. AI platforms look for specific, verifiable claims: years of practice, bar admission year, number of cases handled in a practice area, specific outcomes. Vague marketing language is filtered out as low-signal content.</p>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-xl border border-red-500/20 bg-red-500/5">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-plus-jakarta font-semibold text-white mb-1">Missing LegalService Schema Markup</div>
                    <p className="text-gray-400 text-sm">Without schema markup, AI crawlers must infer your firm&apos;s practice areas, service locations, and attorney credentials from unstructured text. That introduces uncertainty into the recommendation. Schema is how you tell AI systems exactly what you do and who you are in language they parse reliably.</p>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-xl border border-red-500/20 bg-red-500/5">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-plus-jakarta font-semibold text-white mb-1">No Quantifiable Case Results</div>
                    <p className="text-gray-400 text-sm">AI systems weight case results very highly for law firms because they represent real-world evidence of competence. But case results listed as &quot;successful outcomes across multiple practice areas&quot; are useless. Results with specifics, like settlement amounts, case types, and outcomes, are the kind of verifiable evidence AI systems can cite with confidence.</p>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-xl border border-red-500/20 bg-red-500/5">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-plus-jakarta font-semibold text-white mb-1">Using AI-Generated Content Without Expert Review</div>
                    <p className="text-gray-400 text-sm">Legal content that reads as generic, AI-generated text is increasingly recognized and deprioritized by AI recommendation systems. Content needs a genuine attorney perspective, specific citations to statutes or case law, and a clearly identified author with verifiable credentials. AI platforms can detect and downrank generic AI-generated legal content at scale.</p>
                  </div>
                </div>
              </div>

            </div>

            <div className="ae-callout-success not-prose">
              <div className="ae-callout-icon">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <div className="ae-callout-title">The Flip Side: What Actually Works</div>
                <p className="text-gray-300 text-sm">Content with statistical citations and clear factual claims is up to 40% more likely to be cited by AI. Specific case results, peer endorsements on Avvo, Super Lawyers listings, and published legal commentary all drive measurable lifts in AI recommendation frequency. These are not expensive interventions. They require discipline, not budget.</p>
              </div>
            </div>

            {/* SECTION 7 */}
            <span className="ae-section-label" id="decision-matrix">Self-Assessment</span>
            <h2>Is Your Firm Visible to AI? Decision Matrix</h2>

            <p>Use this matrix to get a quick read on where your firm stands across the key dimensions of AI visibility:</p>

            {/* DECISION MATRIX */}
            <div className="not-prose my-8 overflow-x-auto rounded-xl border border-white/10">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5">
                    <th className="text-left p-4 text-gray-400 font-medium">Check</th>
                    <th className="text-center p-4 text-green-400 font-medium">Strong</th>
                    <th className="text-center p-4 text-yellow-400 font-medium">Weak</th>
                    <th className="text-center p-4 text-red-400 font-medium">Missing</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[
                    ['Avvo profile is complete and rated', 'Score 8+ / all fields filled', 'Partial profile, some reviews', 'No profile at all'],
                    ['Martindale-Hubbell listing', 'AV Preeminent rated, full bio', 'Listed but minimal info', 'Not listed'],
                    ['Google Business Profile', 'Fully optimized, 50+ reviews', 'Listed, few reviews', 'Not claimed'],
                    ['Website LegalService schema', 'Full schema with all attorneys', 'Basic schema only', 'No schema'],
                    ['Case results on website', 'Specific outcomes with details', 'General mentions only', 'None published'],
                    ['Super Lawyers or Best Lawyers', 'Listed, profile linked', 'Nominated, not yet listed', 'Never applied'],
                    ['Practice area pages', 'Deep, specific content per area', 'Generic overview pages', 'Single services page'],
                    ['Attorney bio credibility', 'Bar number, JD, years, cases', 'Name and photo only', 'No bio page'],
                  ].map(([check, strong, weak, missing]) => (
                    <tr key={check} className="hover:bg-white/[0.02]">
                      <td className="p-4 text-white font-medium">{check}</td>
                      <td className="p-4 text-center text-green-400 text-xs">{strong}</td>
                      <td className="p-4 text-center text-yellow-400 text-xs">{weak}</td>
                      <td className="p-4 text-center text-red-400 text-xs">{missing}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p>If you have three or more items in the &quot;Missing&quot; column, your firm almost certainly has a significant AI visibility gap. If most items are &quot;Weak,&quot; you are partially visible but losing recommendations to better-optimized competitors. The &quot;Strong&quot; column is the target state.</p>

            <p>It is also worth understanding how AI recommendations interact with review signals. Our analysis of why certain businesses with seemingly weaker profiles still get recommended has some counterintuitive implications for law firms. Read more in our piece on <Link href="/blog/why-ai-recommends-businesses-with-worse-reviews">why AI recommends businesses with worse reviews</Link>.</p>

            {/* INLINE CTA */}
            <div className="not-prose my-10 p-6 rounded-xl border border-[#F27D24]/20 bg-[#F27D24]/5">
              <p className="text-gray-300 text-sm mb-3">Not sure where your firm falls on this matrix? We do the analysis for you in a free Blind Spot Report.</p>
              <Link href="/blindspot" className="inline-flex items-center gap-2 bg-[#F27D24] text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-[#D96416] transition-colors">
                Get the Free Report
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>

            {/* SECTION 8 */}
            <span className="ae-section-label" id="client-journey">Client Journey</span>
            <h2>How a Client Uses AI to Find an Attorney</h2>

            <p>Understanding the path a potential client takes from problem to retained attorney helps clarify where your firm needs to be visible. Here is a realistic timeline of how this plays out in 2026:</p>

            {/* TIMELINE */}
            <div className="not-prose my-8 space-y-0">
              {[
                {
                  step: '01',
                  label: 'The Trigger Event',
                  desc: 'A car accident, a served divorce petition, an employer termination. The client has an immediate legal problem and does not know where to start.',
                  timing: 'Day 0',
                },
                {
                  step: '02',
                  label: 'First AI Query',
                  desc: 'They open ChatGPT, Gemini, or Perplexity and ask a broad question: "What should I do after a car accident?" or "Do I need an attorney for a wrongful termination?" They want information, not a firm recommendation yet.',
                  timing: 'Day 0-1',
                },
                {
                  step: '03',
                  label: 'Practice Area Education',
                  desc: 'The AI answers their question and, in most cases, includes context about what type of attorney handles this. Firms with strong topical authority content on their practice area pages start appearing here as cited sources.',
                  timing: 'Day 1-2',
                },
                {
                  step: '04',
                  label: 'Attorney Search Query',
                  desc: 'Now they ask directly: "Who are the best personal injury attorneys in [city]?" This is where your 4 R\'s profile is evaluated. AI pulls from Avvo ratings, Google reviews, directory presence, and recognition signals.',
                  timing: 'Day 2-3',
                },
                {
                  step: '05',
                  label: 'Verification Phase',
                  desc: 'The client takes the AI recommendation and does follow-up research. They visit the firm website, read reviews, check the attorney bio. Weak website credibility kills conversions even after a positive AI mention.',
                  timing: 'Day 3-5',
                },
                {
                  step: '06',
                  label: 'Contact Decision',
                  desc: 'The client calls, emails, or fills out a form. Firms that appeared in the AI recommendation and then reinforced trust in the verification phase win the conversion.',
                  timing: 'Day 5-7',
                },
              ].map((item, i, arr) => (
                <div key={item.step} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-[#F27D24]/20 border border-[#F27D24]/40 flex items-center justify-center text-[#F27D24] font-bold text-xs flex-shrink-0">
                      {item.step}
                    </div>
                    {i < arr.length - 1 && <div className="w-px flex-1 bg-[#F27D24]/20 my-1" />}
                  </div>
                  <div className="pb-6">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="font-plus-jakarta font-semibold text-white">{item.label}</span>
                      <span className="text-xs text-[#F27D24] bg-[#F27D24]/10 px-2 py-0.5 rounded-full">{item.timing}</span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p>The implication is that law firm AI visibility is not just about appearing in one recommendation. It is about being present at multiple touchpoints in this journey, from the initial informational query to the final decision verification. A firm that shows up in step four but has a weak website fails in step five.</p>

            {/* SECTION 9 */}
            <span className="ae-section-label" id="cheat-sheet">Checklist</span>
            <h2>The 4 R&apos;s Checklist: Law Firm AI Visibility</h2>

            <p>Use this cheat sheet to evaluate and prioritize your AI visibility work. Items are organized by the 4 R&apos;s framework and sorted by impact:</p>

            {/* CHEAT SHEET */}
            <div className="not-prose my-8 space-y-5">

              <div className="p-5 rounded-xl border border-white/10 bg-white/[0.02]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-[#F27D24]/20 flex items-center justify-center text-[#F27D24] font-bold text-xs">R1</div>
                  <span className="font-plus-jakarta font-bold text-white text-base">Ratings Checklist</span>
                </div>
                <div className="space-y-2">
                  {[
                    'Avvo rating of 8.0 or higher (complete your profile to improve it)',
                    'Google Business Profile with 4.5+ average across 25+ reviews',
                    'Martindale-Hubbell rating requested and profile claimed',
                    'Rating consistency across all platforms (no major discrepancies)',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="w-4 h-4 rounded border border-[#F27D24]/40 bg-[#F27D24]/10 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-5 rounded-xl border border-white/10 bg-white/[0.02]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-[#F27D24]/20 flex items-center justify-center text-[#F27D24] font-bold text-xs">R2</div>
                  <span className="font-plus-jakarta font-bold text-white text-base">Reviews Checklist</span>
                </div>
                <div className="space-y-2">
                  {[
                    'Client reviews on Avvo that mention specific practice areas',
                    'Google reviews that include outcome language (not just stars)',
                    'Peer endorsements on Avvo from other attorneys in your field',
                    'Review recency: at least one new review per quarter',
                    'Reviews that use the kinds of terms clients actually search for',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="w-4 h-4 rounded border border-[#F27D24]/40 bg-[#F27D24]/10 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-5 rounded-xl border border-white/10 bg-white/[0.02]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-[#F27D24]/20 flex items-center justify-center text-[#F27D24] font-bold text-xs">R3</div>
                  <span className="font-plus-jakarta font-bold text-white text-base">Recognitions Checklist</span>
                </div>
                <div className="space-y-2">
                  {[
                    'Super Lawyers listing applied for and linked to your directory profiles',
                    'Best Lawyers in America designation pursued if eligible',
                    'Bar certifications listed explicitly (not just implied)',
                    'Published articles, legal commentary, or media quotes with your byline',
                    'Speaking engagements or CLE teaching credits listed in directory profiles',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="w-4 h-4 rounded border border-[#F27D24]/40 bg-[#F27D24]/10 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-5 rounded-xl border border-white/10 bg-white/[0.02]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-[#F27D24]/20 flex items-center justify-center text-[#F27D24] font-bold text-xs">R4</div>
                  <span className="font-plus-jakarta font-bold text-white text-base">Roots Checklist</span>
                </div>
                <div className="space-y-2">
                  {[
                    'Avvo profile 100% complete with bar number, education, experience, and photo',
                    'FindLaw and Martindale-Hubbell profiles claimed and fully built out',
                    'Justia profile created or claimed and attorney info verified',
                    'NAP consistency: name, address, phone identical across all directories',
                    'Website LegalService schema markup implemented for the firm and each attorney',
                    'Case results published with enough specificity to be cited as evidence',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="w-4 h-4 rounded border border-[#F27D24]/40 bg-[#F27D24]/10 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="ae-callout-orange not-prose">
              <div className="ae-callout-icon">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div>
                <div className="ae-callout-title">The Teach, Not Game Rule</div>
                <p className="text-gray-300 text-sm">The firms that win AI search long-term are the ones that genuinely deserve to be recommended. AI systems are increasingly good at detecting manufactured signals. The checklist above works because it aligns your online presence with what AI systems are actually trying to measure: real expertise, real credentials, and real client outcomes.</p>
              </div>
            </div>

            {/* AUTHOR CARD */}
            <div className="not-prose">
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

            {/* 3-TIER CTA BLOCK */}
            <div className="not-prose my-16 p-8 rounded-2xl bg-gradient-to-br from-[#F27D24]/10 to-transparent border border-[#F27D24]/20">
              <h3 className="font-plus-jakarta text-2xl font-bold text-white mb-3">Is Your Law Firm Showing Up When Clients Ask AI?</h3>
              <p className="text-gray-400 mb-6">Find out exactly where your firm stands in AI recommendations with a free Blind Spot Report. We show you which competitors AI is recommending and why.</p>
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

            {/* FAQ */}
            <span className="ae-section-label" id="faq">FAQ</span>
            <h2>Frequently Asked Questions</h2>

            <div className="not-prose space-y-4 my-8">
              {[
                {
                  q: 'Why do legal directories rank so much higher than law firm websites in AI results?',
                  a: 'Legal directories like Avvo, FindLaw, and Martindale-Hubbell have accumulated structured attorney data at massive scale. Avvo hosts over 1.3 million attorney profiles; FindLaw hosts over 1 million. AI training datasets heavily weight these sources because they contain consistent, structured, verifiable information about legal professionals. A solo firm website simply cannot match that volume or structural consistency, which is why directory presence is foundational for any law firm AI visibility strategy.',
                },
                {
                  q: "What does the 4 R's framework mean for law firms?",
                  a: "The 4 R's are Ratings, Reviews, Recognitions, and Roots. Ratings refers to your scores on Google, Avvo, and Martindale-Hubbell. Reviews covers client and peer sentiment across those platforms. Recognitions includes third-party validations like Super Lawyers listings, Best Lawyers designations, and bar certifications. Roots means how complete and consistent your directory profiles are across all major legal directories. AI platforms cross-reference all four signals when deciding which attorneys to recommend.",
                },
                {
                  q: 'Does having an Avvo profile actually help with AI search visibility?',
                  a: 'Yes, significantly. Avvo is one of the most heavily weighted sources in AI training data for attorneys. A complete, highly rated Avvo profile signals verified credentials, client trust, and peer recognition to AI systems. Law firms without any Avvo presence are missing a core signal that ChatGPT, Perplexity, and Gemini rely on when generating attorney recommendations.',
                },
                {
                  q: 'What is LegalService schema markup and why does it matter?',
                  a: 'LegalService schema is structured data you add to your website that explicitly tells AI crawlers your firm practices law, what areas you cover, which attorneys work there, and where you are located. Without it, AI systems have to infer this information from plain text, which is less reliable. Law firms with proper schema markup are significantly more likely to be cited when someone asks an AI assistant for attorney recommendations.',
                },
                {
                  q: 'Can a small law firm compete with large firms in AI search?',
                  a: 'Absolutely. AI platforms weight trust signals and relevance over firm size. A solo practitioner with a complete Avvo profile, genuine client reviews, specific case result language, and consistent directory presence can outperform a large firm with a polished but generic website. The firms that win AI search are the ones with verifiable, specific, well-structured information, not the ones with the biggest marketing budgets.',
                },
                {
                  q: 'How long does it take for AI search optimization to produce results for a law firm?',
                  a: 'Most firms start seeing measurable improvement within 60 to 90 days of implementing a structured AEO strategy. Directory completeness and schema markup tend to produce the fastest results because AI crawlers can immediately parse new structured signals. Content-based improvements, particularly building topical authority around specific practice areas, typically take 90 to 180 days to show full effect.',
                },
              ].map((item) => (
                <details key={item.q} className="group border border-white/10 rounded-xl overflow-hidden">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
                    <span className="font-plus-jakarta font-semibold text-white pr-4">{item.q}</span>
                    <svg className="w-5 h-5 text-[#F27D24] flex-shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-5 pb-5 pt-3 text-gray-300 text-sm leading-relaxed border-t border-white/5">
                    {item.a}
                  </div>
                </details>
              ))}
            </div>

            {/* RELATED ARTICLES */}
            <div className="not-prose mt-12 pt-8 border-t border-white/10">
              <h3 className="font-plus-jakarta text-lg font-bold text-white mb-4">Related Reading</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Link href="/blog/does-schema-markup-help-ai-search" className="p-4 rounded-xl border border-white/10 bg-white/[0.02] hover:border-[#F27D24]/30 hover:bg-[#F27D24]/5 transition-all group">
                  <div className="text-xs text-[#F27D24] mb-2 font-medium uppercase tracking-wide">Schema</div>
                  <div className="text-sm text-white font-medium group-hover:text-[#F27D24] transition-colors leading-snug">Does Schema Markup Help AI Search?</div>
                </Link>
                <Link href="/blog/why-ai-recommends-businesses-with-worse-reviews" className="p-4 rounded-xl border border-white/10 bg-white/[0.02] hover:border-[#F27D24]/30 hover:bg-[#F27D24]/5 transition-all group">
                  <div className="text-xs text-[#F27D24] mb-2 font-medium uppercase tracking-wide">AI Behavior</div>
                  <div className="text-sm text-white font-medium group-hover:text-[#F27D24] transition-colors leading-snug">Why AI Recommends Businesses With Worse Reviews</div>
                </Link>
                <Link href="/blog/what-your-website-looks-like-to-an-ai-crawler" className="p-4 rounded-xl border border-white/10 bg-white/[0.02] hover:border-[#F27D24]/30 hover:bg-[#F27D24]/5 transition-all group">
                  <div className="text-xs text-[#F27D24] mb-2 font-medium uppercase tracking-wide">Crawling</div>
                  <div className="text-sm text-white font-medium group-hover:text-[#F27D24] transition-colors leading-snug">What Your Website Looks Like to an AI Crawler</div>
                </Link>
              </div>
            </div>

            {/* FINAL CTA */}
            <div className="ae-final-cta not-prose mt-16">
              <h2 className="font-plus-jakarta text-3xl font-bold text-white mb-4">Ready to Get Your Law Firm Found on AI?</h2>
              <p className="text-gray-300 mb-8 text-lg">Stop losing clients to AI-invisible competitors. Get your free Blind Spot Report and see exactly where you stand.</p>
              <Link href="/blindspot" className="inline-flex items-center gap-3 bg-[#F27D24] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#D96416] transition-all duration-200 shadow-[0_0_30px_rgba(255,106,0,0.4)] hover:shadow-[0_0_50px_rgba(255,106,0,0.6)]">
                Get Your Free Blind Spot Report
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>

          </div>
        </article>
      </main>
    </>
  )
}
