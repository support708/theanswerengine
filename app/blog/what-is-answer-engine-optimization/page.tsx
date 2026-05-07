import type { Metadata } from 'next'
import Link from 'next/link'

export const revalidate = 86400
export const dynamic = 'force-static'
export const dynamicParams = true

const title = 'What Is Answer Engine Optimization? | The Answer Engine'
const description = 'Answer Engine Optimization (AEO) is how local businesses get cited on ChatGPT, Perplexity, and Google AI Overviews. Here is exactly how it works in 2026.'
const slug = 'what-is-answer-engine-optimization'
const publishDate = '2026-05-07'

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'answer engine optimization',
    'what is AEO',
    'AEO 2026',
    'how to get cited on ChatGPT',
    'AI search optimization',
    'ChatGPT local business citations',
    'Google AI Overview optimization',
    'Perplexity citations local business',
    'AEO vs SEO',
    'answer engine optimization explained',
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
      headline: 'What Is Answer Engine Optimization?',
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
        knowsAbout: [
          'Answer Engine Optimization',
          'AI Search',
          'Content Strategy',
          'Citation Surface',
          'Local Business Visibility',
        ],
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
      wordCount: 2800,
      articleSection: 'AEO Education',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the difference between AEO and SEO?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'SEO optimizes for ranking position in a list of ten search results. AEO optimizes to be the cited source in an AI-generated direct answer. SEO chases clicks from a ranking; AEO earns citations from AI systems that have already read and evaluated your content. Both matter, but they require different content structures and different success metrics.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I get my business cited on ChatGPT?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'ChatGPT cites sources that publish structured, authoritative content addressing specific questions people ask about your service category and geography. The minimum effective approach is 16 articles per month using hub-and-spoke architecture, with FAQ schema markup, direct-answer formatting in the first 50 words of each article, and geographic specificity that proves local expertise. First citations typically appear within 60 to 90 days.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does answer engine optimization take to work?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The first citations appear at 60 to 90 days for most local service businesses. The compounding phase begins at months 4 through 6, when the content volume crosses the threshold where AI systems treat you as a category authority rather than an occasional reference. At 12 months and 192 published articles, the structural moat is in place and competitors face a significant catch-up gap.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does AEO replace SEO?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. AEO extends SEO rather than replacing it. Domain authority, quality backlinks, and technical site performance all carry forward. The shift is in content structure and success metrics: instead of optimizing for keyword rankings, you optimize for citation-worthiness. Content built for AEO typically performs well in traditional search as a secondary benefit.',
          },
        },
        {
          '@type': 'Question',
          name: 'What kinds of businesses benefit most from AEO?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Local service businesses with a defined geography and service category benefit most: plumbers, HVAC companies, real estate agents, law firms, dentists, property managers, and similar. These are exactly the businesses people ask AI systems about by category and city. National brands already have entity authority. The AEO opportunity is largest for local operators who currently have zero editorial content despite strong review profiles.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I know if AEO is working?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The primary signal is direct citation: ask ChatGPT, Perplexity, Claude, and Gemini who the best provider of your service is in your city, and see whether your business name appears. Secondary signals include Google Search Console showing growth in featured snippet wins, referral traffic from AI platforms appearing in analytics, and an increase in inbound leads that arrive pre-qualified with specific questions rather than generic inquiries.',
          },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://theanswerengine.ai' },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://theanswerengine.ai/blog' },
        { '@type': 'ListItem', position: 3, name: 'What Is Answer Engine Optimization?' },
      ],
    },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="bg-[#131313] min-h-screen">

        {/* Hero header */}
        <header className="max-w-4xl mx-auto px-6 pt-16 pb-8">
          <p className="font-mono text-[11px] tracking-widest uppercase text-[#F27D24] mb-4">AEO Education · The Answer Engine</p>
          <h1 className="font-headline font-black text-4xl md:text-5xl uppercase tracking-tighter text-[#e5e2e1] leading-none mb-6">
            What Is Answer Engine Optimization?
          </h1>
          <p className="ae-hero-desc text-lg text-gray-300 leading-relaxed mb-4 max-w-2xl">
            AEO is the discipline of becoming the source AI systems cite when someone asks about your service category. This guide covers how it works, how it differs from SEO, and what it takes to get cited on ChatGPT, Perplexity, Claude, Gemini, and Google AI Overviews in 2026.
          </p>
          <div className="ae-hero-meta flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-8">
            <time dateTime={publishDate}>May 7, 2026</time>
            <span>·</span>
            <span>14 min read</span>
            <span>·</span>
            <span>Justin Borges</span>
          </div>

          <img
            src={`/blog/${slug}.webp`}
            alt="Abstract glowing orange data network nodes on dark background representing AEO citation infrastructure"
            className="w-full h-64 md:h-80 object-cover rounded-lg mb-8"
          />

          {/* 4-cell stats grid */}
          <div className="ae-stats-grid not-prose grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            <div className="ae-stat-card bg-white/[0.04] border border-white/[0.08] rounded-xl p-5 text-center">
              <span className="ae-stat-value ae-accent block text-3xl font-black text-[#F27D24] mb-1">1.14M</span>
              <span className="ae-stat-label text-xs text-gray-400 leading-snug">Monthly impressions, AE-owned property</span>
            </div>
            <div className="ae-stat-card bg-white/[0.04] border border-white/[0.08] rounded-xl p-5 text-center">
              <span className="ae-stat-value ae-accent block text-3xl font-black text-[#F27D24] mb-1">4/4</span>
              <span className="ae-stat-label text-xs text-gray-400 leading-snug">LLM platforms citing AE clients</span>
            </div>
            <div className="ae-stat-card bg-white/[0.04] border border-white/[0.08] rounded-xl p-5 text-center">
              <span className="ae-stat-value ae-accent block text-3xl font-black text-[#F27D24] mb-1">16</span>
              <span className="ae-stat-label text-xs text-gray-400 leading-snug">Articles per month minimum effective dose</span>
            </div>
            <div className="ae-stat-card bg-white/[0.04] border border-white/[0.08] rounded-xl p-5 text-center">
              <span className="ae-stat-value ae-accent block text-3xl font-black text-[#F27D24] mb-1">90</span>
              <span className="ae-stat-label text-xs text-gray-400 leading-snug">Day citation guarantee</span>
            </div>
          </div>
        </header>

        {/* Article body */}
        <article className="max-w-4xl mx-auto px-6 py-4 prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-gray-300 prose-a:text-[#F27D24] prose-a:no-underline hover:prose-a:underline prose-strong:text-white">

          {/* TOC */}
          <div className="ae-toc not-prose bg-white/[0.03] border border-white/[0.08] rounded-xl p-6 mb-10">
            <p className="font-mono text-[10px] tracking-widest uppercase text-[#F27D24] mb-3">In This Article</p>
            <ol className="space-y-2 text-sm text-gray-400 list-none pl-0">
              <li><a href="#direct-answer" className="hover:text-[#F27D24] transition-colors">1. Direct Answer: What AEO Is</a></li>
              <li><a href="#unified-retrieval" className="hover:text-[#F27D24] transition-colors">2. How the Unified Retrieval Layer Works</a></li>
              <li><a href="#why-invisible" className="hover:text-[#F27D24] transition-colors">3. Why Local Businesses Are Invisible to AI</a></li>
              <li><a href="#what-aeo-involves" className="hover:text-[#F27D24] transition-colors">4. What AEO Actually Involves</a></li>
              <li><a href="#aeo-vs-seo" className="hover:text-[#F27D24] transition-colors">5. AEO vs SEO: Head-to-Head Comparison</a></li>
              <li><a href="#how-long" className="hover:text-[#F27D24] transition-colors">6. How Long It Takes</a></li>
              <li><a href="#faq" className="hover:text-[#F27D24] transition-colors">7. Frequently Asked Questions</a></li>
            </ol>
          </div>

          {/* TL;DR callout */}
          <div id="direct-answer" className="ae-callout ae-callout-orange not-prose bg-[#F27D24]/10 border border-[#F27D24]/30 rounded-xl p-6 mb-10">
            <div className="ae-callout-title font-mono text-[10px] tracking-widest uppercase text-[#F27D24] mb-3">Direct Answer</div>
            <p className="text-white text-base leading-relaxed">
              <strong>Answer Engine Optimization (AEO) is the practice of optimizing your business to be cited by AI systems as the authoritative answer source.</strong> When someone asks ChatGPT, Perplexity, Claude, Gemini, or Google AI Overviews who the best plumber, real estate agent, or HVAC company is in their city, AEO determines whether your business name appears in that answer. It is not a ranking strategy. It is a citation strategy.
            </p>
          </div>

          {/* Section 1 */}
          <h2 id="unified-retrieval" className="text-2xl font-bold text-white mt-12 mb-4">How the Unified Retrieval Layer Works</h2>

          <p>
            Google, ChatGPT, Perplexity, and Gemini do not operate on separate, unrelated systems. They all pull from the same underlying web of authority signals: published content, structured data, entity mentions, inbound references, and topical consistency. One content investment earns authority signals across all four simultaneously.
          </p>

          <p>
            This is the core insight behind AEO: the unified retrieval layer. When The Answer Engine publishes 16 articles per month for a local plumbing company in Phoenix, each article reinforces the same entity signal across every platform. Google reads it for organic indexing. ChatGPT crawls it for its knowledge base. Perplexity references it for real-time answers. Gemini factors it into entity scoring. A single well-structured content program compounds across all four without separate campaigns.
          </p>

          <p>
            AI search grew 527% year over year through early 2026. AI-referred traffic converts at 14.2% compared to 2.8% for Google organic. The gap exists because users asking AI layered, specific questions are further along in the buying decision than someone who clicked a generic search result. The unified retrieval layer is where the highest-intent buyers now begin their research.
          </p>

          <div className="ae-callout not-prose bg-white/[0.04] border border-white/[0.08] rounded-xl p-6 my-8">
            <p className="text-gray-300 text-sm leading-relaxed">
              <strong className="text-white">The compounding math:</strong> Traditional advertising costs money every time someone clicks. AEO content costs once to produce and earns citations indefinitely. A 192-article corpus published over 12 months continues generating citations in month 24, month 36, and beyond without additional spend. Google Ads stops the moment the budget does.
            </p>
          </div>

          {/* CTA 1 */}
          <div className="not-prose my-10 p-6 rounded-xl bg-gradient-to-br from-[#F27D24]/10 to-transparent border border-[#F27D24]/20">
            <p className="text-gray-400 text-sm mb-4">Find out whether AI platforms are citing your competitors instead of you.</p>
            <Link href="/blindspot" className="inline-flex items-center gap-2 bg-[#F27D24] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#D96416] transition-colors">
              Get Your Free Blind Spot Report
            </Link>
          </div>

          {/* Section 2 */}
          <h2 id="why-invisible" className="text-2xl font-bold text-white mt-12 mb-4">Why Local Businesses Are Invisible to AI</h2>

          <p>
            A local HVAC company with a 4.8-star rating and 900 Google reviews will be invisible to AI search if it has no editorial content. Meanwhile, a competitor with 50 reviews and 16 articles per month gets cited by name on ChatGPT, Perplexity, and Google AI Overviews. This asymmetry is the core problem AEO solves.
          </p>

          <p>
            AI systems do not read your reviews. They do not parse your Google Business Profile star rating. They read published text: articles, service pages, FAQ sections, and structured data markup. A business with zero published content has zero surface area for AI to reference, regardless of how many people think highly of it.
          </p>

          <p>
            As of March 2026, 48% of all Google queries now trigger AI Overviews. That means roughly half the searches where your potential customers are looking for your service category are answered before they ever scroll to organic results. If your business is not the cited source, that traffic goes to whoever is.
          </p>

          {/* Comparison callout */}
          <div className="not-prose overflow-x-auto my-8">
            <table className="ae-table w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 px-4 text-gray-400 font-semibold">Business Type</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-semibold">Reviews</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-semibold">Articles/Month</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-semibold">AI Visibility</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/[0.05]">
                  <td className="py-3 px-4 text-gray-300">Strong reviews, no content</td>
                  <td className="py-3 px-4 text-[#F27D24]">900 (4.8 stars)</td>
                  <td className="py-3 px-4 text-gray-300">0</td>
                  <td className="py-3 px-4 text-red-400 font-semibold">Invisible</td>
                </tr>
                <tr className="border-b border-white/[0.05]">
                  <td className="py-3 px-4 text-gray-300">Moderate reviews, consistent content</td>
                  <td className="py-3 px-4 text-gray-300">50 (4.2 stars)</td>
                  <td className="py-3 px-4 text-[#F27D24]">16</td>
                  <td className="py-3 px-4 text-green-400 font-semibold">Cited by AI</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-gray-300">Strong reviews, strong content</td>
                  <td className="py-3 px-4 text-[#F27D24]">900 (4.8 stars)</td>
                  <td className="py-3 px-4 text-[#F27D24]">16+</td>
                  <td className="py-3 px-4 text-green-400 font-semibold">Dominant</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            The asymmetry is correctable. The Answer Engine builds the content infrastructure that makes businesses readable to AI systems. Once the corpus reaches critical mass, the 900-review business with content becomes dominant because it combines trust signals with citation surface.
          </p>

          {/* CTA 2 */}
          <div className="not-prose my-10 p-6 rounded-xl bg-gradient-to-br from-[#F27D24]/10 to-transparent border border-[#F27D24]/20">
            <p className="text-gray-400 text-sm mb-4">See exactly where you stand: which AI platforms cite you, which cite your competitors, and what to fix.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/blindspot" className="inline-flex items-center gap-2 bg-[#F27D24] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#D96416] transition-colors">
                Run Your Free AI Visibility Audit
              </Link>
              <a href="tel:+12134442229" className="inline-flex items-center gap-2 border border-white/20 text-gray-300 px-5 py-2.5 rounded-lg text-sm font-semibold hover:border-white/40 transition-colors">
                Call (213) 444-2229
              </a>
            </div>
          </div>

          {/* Section 3 */}
          <h2 id="what-aeo-involves" className="text-2xl font-bold text-white mt-12 mb-4">What AEO Actually Involves</h2>

          <p>
            AEO is not a single tactic. It is a content infrastructure system built around five core components that work together. Miss one, and citations either do not appear or do not hold.
          </p>

          <h3 className="text-xl font-semibold text-white mt-8 mb-3">Hub-and-Spoke Architecture</h3>

          <p>
            Every AEO program starts with a hub-and-spoke content map. The hub is a comprehensive pillar page covering the main service or topic category. Spokes are individual articles, each answering a specific question within that category. A roofing company in Phoenix might have a hub page on roof repair and 20 spoke articles answering questions like "how much does a roof inspection cost in Phoenix," "what are signs of hail damage on a roof," and "when should I repair vs replace my roof."
          </p>

          <p>
            The architecture creates topical density. AI systems evaluate whether a website demonstrates genuine expertise across an entire topic, not just surface-level coverage. A single great article does not establish authority. A cluster of 20 deeply specific articles on the same topic does.
          </p>

          <h3 className="text-xl font-semibold text-white mt-8 mb-3">Direct-Answer Formatting</h3>

          <p>
            Every article must answer its target question within the first 50 words. AI systems extract the most concise, complete answer to surface in their responses. If your article buries the answer in the third paragraph, the AI will find a competitor who answered directly and cite them instead. The structure is: answer first, supporting detail second, context third.
          </p>

          <h3 className="text-xl font-semibold text-white mt-8 mb-3">Geographic Specificity</h3>

          <p>
            Generic content does not earn local citations. AI systems can distinguish between "plumber in Arizona" content and "plumber in Scottsdale who knows the pipe age issues common to pre-1990 homes in the Arcadia neighborhood." Geographic specificity signals genuine local expertise, which is exactly what AI systems are designed to surface when someone asks for a local recommendation.
          </p>

          <h3 className="text-xl font-semibold text-white mt-8 mb-3">Schema Markup</h3>

          <p>
            Structured data markup (schema) tells AI systems exactly what type of content they are reading, who wrote it, and what entity it represents. FAQ schema ensures your question-answer pairs are recognized as explicit Q&A content rather than undifferentiated prose. LocalBusiness schema establishes your geographic service area. Article schema signals authorship and publication date. A single syntax error in schema can silently break all of it, which is why most DIY implementations fail without the business ever knowing.
          </p>

          <h3 className="text-xl font-semibold text-white mt-8 mb-3">The 16 Articles Per Month Threshold</h3>

          <p>
            Sixteen articles per month is the minimum effective dose for local service businesses based on The Answer Engine's data across 50+ client deployments. Below 16, content volume is too sparse to establish topical authority within the 60-to-90-day citation window. At 16 per month over 12 months, the corpus reaches 192 articles: a structural moat that competitors cannot replicate overnight. They would need to publish at the same rate for the same duration and then wait for the citation compounding to take effect.
          </p>

          {/* Info callout */}
          <div className="ae-callout ae-callout-info not-prose bg-white/[0.04] border border-[#F27D24]/20 rounded-xl p-6 my-8">
            <p className="font-mono text-[10px] tracking-widest uppercase text-[#F27D24] mb-2">Why 16 Matters</p>
            <p className="text-gray-300 text-sm leading-relaxed">
              Sixteen articles per month equals one hub-and-spoke cluster every 6 to 8 weeks. Each cluster covers a distinct question set within your service category. At 12 months, the business has answered approximately 300 to 400 distinct questions that potential customers actually ask. AI systems begin treating the site as a category reference rather than an occasional source.
            </p>
          </div>

          {/* CTA 3 */}
          <div className="not-prose my-10 p-6 rounded-xl bg-gradient-to-br from-[#F27D24]/10 to-transparent border border-[#F27D24]/20">
            <h3 className="font-plus-jakarta text-xl font-bold text-white mb-2">Ready to Build Your AEO Infrastructure?</h3>
            <p className="text-gray-400 text-sm mb-4">The Answer Engine builds the full system: hub-and-spoke architecture, schema markup, geographic targeting, and 16 articles per month. First citations in 90 days, guaranteed.</p>
            <Link href="/blindspot" className="inline-flex items-center gap-2 bg-[#F27D24] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#D96416] transition-colors">
              Get Your Free Blind Spot Report
            </Link>
            <div className="flex flex-wrap items-center gap-6 mt-6 pt-6 border-t border-[#F27D24]/10">
              <a href="tel:+12134442229" className="text-gray-400 hover:text-white transition-colors text-sm">(213) 444-2229</a>
              <a href="mailto:support@theanswerengine.ai" className="text-gray-400 hover:text-white transition-colors text-sm">support@theanswerengine.ai</a>
            </div>
          </div>

          {/* Section 4 */}
          <h2 id="aeo-vs-seo" className="text-2xl font-bold text-white mt-12 mb-4">AEO vs SEO: Head-to-Head Comparison</h2>

          <p>
            The most common misunderstanding about AEO is that it replaces SEO. It does not. AEO extends SEO with a different optimization target and different success metrics. Here is the precise breakdown of what changes and what carries forward.
          </p>

          <div className="not-prose overflow-x-auto my-8">
            <table className="ae-table w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 px-4 text-gray-400 font-semibold">Dimension</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-semibold">Traditional SEO</th>
                  <th className="text-left py-3 px-4 text-[#F27D24] font-semibold">AEO</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/[0.05]">
                  <td className="py-3 px-4 text-gray-300 font-medium">Optimization target</td>
                  <td className="py-3 px-4 text-gray-400">Ranking position in a list</td>
                  <td className="py-3 px-4 text-gray-300">Citation in an AI-generated answer</td>
                </tr>
                <tr className="border-b border-white/[0.05]">
                  <td className="py-3 px-4 text-gray-300 font-medium">Content structure</td>
                  <td className="py-3 px-4 text-gray-400">Click-optimized: bury answer, drive scroll</td>
                  <td className="py-3 px-4 text-gray-300">Answer-first: complete response in 50 words</td>
                </tr>
                <tr className="border-b border-white/[0.05]">
                  <td className="py-3 px-4 text-gray-300 font-medium">Geographic depth</td>
                  <td className="py-3 px-4 text-gray-400">City + state keyword placement</td>
                  <td className="py-3 px-4 text-gray-300">Neighborhood-level specificity, local data</td>
                </tr>
                <tr className="border-b border-white/[0.05]">
                  <td className="py-3 px-4 text-gray-300 font-medium">Cost model</td>
                  <td className="py-3 px-4 text-gray-400">Per-click (ads) or per-ranking (ongoing)</td>
                  <td className="py-3 px-4 text-gray-300">Compound: content pays forward indefinitely</td>
                </tr>
                <tr className="border-b border-white/[0.05]">
                  <td className="py-3 px-4 text-gray-300 font-medium">Citation dynamics</td>
                  <td className="py-3 px-4 text-gray-400">10 links shown, all get clicks</td>
                  <td className="py-3 px-4 text-gray-300">2 to 3 sources cited, winner-take-most</td>
                </tr>
                <tr className="border-b border-white/[0.05]">
                  <td className="py-3 px-4 text-gray-300 font-medium">Authority signal</td>
                  <td className="py-3 px-4 text-gray-400">Inbound backlink count and domain rating</td>
                  <td className="py-3 px-4 text-gray-300">Topical depth, schema, verifiable credentials</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-gray-300 font-medium">Traffic quality</td>
                  <td className="py-3 px-4 text-gray-400">Mixed intent, 2.8% conversion average</td>
                  <td className="py-3 px-4 text-gray-300">High intent, 14.2% conversion average</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            The winner-take-most citation dynamic is the critical difference in competitive stakes. In traditional search, 10 businesses shared the first-page visibility. In AI-generated answers, 2 to 3 sources get cited for any given query. Being the second or third cited source still wins business. Being uncited wins nothing.
          </p>

          <p>
            What carries forward from SEO: domain authority, quality backlinks from legitimate sources, technical site performance, and existing high-quality content pages. These are not wasted investments. They become part of the authority signal stack that AEO builds on top of.
          </p>

          {/* CTA 4 */}
          <div className="not-prose my-10 p-6 rounded-xl bg-gradient-to-br from-[#F27D24]/10 to-transparent border border-[#F27D24]/20">
            <p className="text-gray-400 text-sm mb-4">Read the full AEO vs SEO breakdown with data tables and implementation guidance.</p>
            <Link href="/blog/aeo-vs-seo" className="inline-flex items-center gap-2 text-[#F27D24] text-sm font-semibold hover:underline">
              Read: AEO vs SEO: What Is the Difference?
            </Link>
          </div>

          {/* Section 5 */}
          <h2 id="how-long" className="text-2xl font-bold text-white mt-12 mb-4">How Long It Takes</h2>

          <p>
            AEO operates on a predictable timeline for local service businesses with The Answer Engine's system. The 90-day citation guarantee is not a marketing claim; it is a threshold derived from watching 50+ client programs cross from zero citations to consistent citations.
          </p>

          <h3 className="text-xl font-semibold text-white mt-8 mb-3">Days 1 to 30: Foundation</h3>

          <p>
            The first month establishes the content infrastructure: hub article, initial spoke cluster, schema implementation, and entity signal alignment. AI crawlers begin indexing the new content. No citations yet, but the foundation is in place.
          </p>

          <h3 className="text-xl font-semibold text-white mt-8 mb-3">Days 31 to 90: First Citations</h3>

          <p>
            The first AI citations typically appear between day 60 and day 90. They are usually narrow: the business gets cited for specific, long-tail questions that the published content addresses directly. At this stage, Perplexity and Google AI Overviews tend to cite first, followed by ChatGPT, then Claude and Gemini.
          </p>

          <h3 className="text-xl font-semibold text-white mt-8 mb-3">Months 4 to 6: Compounding</h3>

          <p>
            The compounding phase begins when the content corpus is large enough that AI systems treat the site as a category reference. Citation frequency increases. The business begins appearing for broader queries, not just the narrow long-tail questions from the first wave. Inbound inquiry quality visibly improves as pre-qualified leads arrive already knowing the business name.
          </p>

          <h3 className="text-xl font-semibold text-white mt-8 mb-3">Month 12: The Structural Moat</h3>

          <p>
            At 192 published articles, the structural moat is in place. A competitor who starts AEO at month 12 faces two obstacles: they need to publish at the same rate for 12 months, and then wait for their own 60-to-90-day citation window. The first-mover advantage in AEO is real and compounds over time in the same pattern that early SEO adopters experienced in 2005.
          </p>

          <div className="ae-callout not-prose bg-white/[0.04] border border-white/[0.08] rounded-xl p-6 my-8">
            <p className="text-gray-300 text-sm leading-relaxed">
              <strong className="text-white">The compounding advantage in numbers:</strong> At 12 months, a business has published 192 articles covering approximately 300 to 400 distinct customer questions. A competitor starting today needs 12 months of consistent publishing before their citation compounding begins. That is a 24-month total gap from the first-mover's perspective, not a 12-month gap.
            </p>
          </div>

          {/* CTA 5 - inline mid */}
          <div className="not-prose my-10 p-6 rounded-xl bg-gradient-to-br from-[#F27D24]/10 to-transparent border border-[#F27D24]/20">
            <p className="text-gray-400 text-sm mb-4">See what 90-day citations look like in practice.</p>
            <Link href="/blog/how-long-does-aeo-take-to-work" className="inline-flex items-center gap-2 text-[#F27D24] text-sm font-semibold hover:underline">
              Read: How Long Does AEO Take to Work?
            </Link>
          </div>

          {/* Main CTA block */}
          <div className="not-prose my-16 p-8 rounded-2xl bg-gradient-to-br from-[#F27D24]/10 to-transparent border border-[#F27D24]/20">
            <h3 className="font-plus-jakarta text-2xl font-bold text-white mb-3">Find Out If AI Is Recommending Your Competitors Instead of You</h3>
            <p className="text-gray-400 mb-6">
              The Answer Engine runs a 4-platform scan across ChatGPT, Perplexity, Claude, and Gemini to show you exactly who is being cited for your service category in your city. If competitors are showing up and you are not, the free Blind Spot Report shows you the specific gaps and what it takes to close them.
            </p>
            <Link href="/blindspot" className="inline-flex items-center gap-2 bg-[#F27D24] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#D96416] transition-colors">
              Get Your Free Blind Spot Report
            </Link>
            <div className="flex flex-wrap items-center gap-6 mt-6 pt-6 border-t border-[#F27D24]/10">
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

          {/* Author card */}
          <div className="not-prose ae-author-card bg-white/[0.03] border border-white/[0.08] rounded-xl p-6 my-10 flex gap-5">
            <img src="/justin-borges.webp" alt="Justin Borges" style={{ width: 64, height: 64, borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }} />
            <div>
              <div className="ae-author-name text-white font-semibold text-base">Justin Borges</div>
              <div className="ae-author-role text-[#F27D24] text-sm mt-0.5">Founder, The Answer Engine</div>
              <p style={{ marginTop: 8, fontSize: '0.875rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.6 }}>
                Justin Borges founded The Answer Engine in 2025 after 13+ years in real estate and $200M+ in production. He builds citation infrastructure for local businesses across ChatGPT, Perplexity, Claude, Gemini, and Google AI Overviews. The Answer Engine has deployed AEO programs for 50+ local service businesses across the US.
              </p>
            </div>
          </div>

          {/* Related articles */}
          <div className="not-prose my-10">
            <p className="font-mono text-[10px] tracking-widest uppercase text-[#F27D24] mb-4">Keep Reading</p>
            <div className="grid gap-4 sm:grid-cols-2">
              <Link href="/blog/aeo-vs-seo" className="block bg-white/[0.03] border border-white/[0.08] rounded-xl p-5 hover:border-[#F27D24]/30 transition-colors">
                <h4 className="text-base font-semibold text-white mb-2">AEO vs SEO: What Is the Difference?</h4>
                <p className="text-gray-400 text-sm leading-relaxed">A full breakdown of every major difference between Answer Engine Optimization and Search Engine Optimization, including which signals carry forward.</p>
              </Link>
              <Link href="/blog/how-long-does-aeo-take-to-work" className="block bg-white/[0.03] border border-white/[0.08] rounded-xl p-5 hover:border-[#F27D24]/30 transition-colors">
                <h4 className="text-base font-semibold text-white mb-2">How Long Does AEO Take to Work?</h4>
                <p className="text-gray-400 text-sm leading-relaxed">The 60-to-90-day citation window explained: what happens in each phase, when compounding begins, and what the 12-month moat looks like.</p>
              </Link>
              <Link href="/blog/hub-spoke-content-strategy-ai-citations" className="block bg-white/[0.03] border border-white/[0.08] rounded-xl p-5 hover:border-[#F27D24]/30 transition-colors">
                <h4 className="text-base font-semibold text-white mb-2">Hub-and-Spoke Content Strategy for AI Citations</h4>
                <p className="text-gray-400 text-sm leading-relaxed">How to build a hub-and-spoke content architecture that signals topical authority to AI systems and earns consistent citations.</p>
              </Link>
              <Link href="/blog/google-rankings-dont-matter" className="block bg-white/[0.03] border border-white/[0.08] rounded-xl p-5 hover:border-[#F27D24]/30 transition-colors">
                <h4 className="text-base font-semibold text-white mb-2">Why Your Google Rankings Do Not Matter Anymore</h4>
                <p className="text-gray-400 text-sm leading-relaxed">With 48% of queries triggering AI Overviews, even a number-one ranking can receive zero clicks. Here is what replaced it.</p>
              </Link>
            </div>
          </div>

          {/* FAQ */}
          <div id="faq" className="not-prose mt-12">
            <p className="font-mono text-[10px] tracking-widest uppercase text-[#F27D24] mb-4">FAQ</p>
            <h2 className="font-plus-jakarta text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>

            <details className="ae-faq-item bg-white/[0.03] border border-white/[0.08] rounded-xl p-5 mb-3 group">
              <summary className="cursor-pointer text-white font-semibold text-base list-none flex items-center justify-between">
                What is the difference between AEO and SEO?
                <span className="text-[#F27D24] text-lg ml-4 transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="text-gray-400 text-sm leading-relaxed mt-4">
                SEO optimizes for ranking position in a list of ten search results. AEO optimizes to be the cited source in an AI-generated direct answer. SEO chases clicks from a ranking; AEO earns citations from AI systems that have already read and evaluated your content. Both matter, but they require different content structures and different success metrics.
              </p>
            </details>

            <details className="ae-faq-item bg-white/[0.03] border border-white/[0.08] rounded-xl p-5 mb-3 group">
              <summary className="cursor-pointer text-white font-semibold text-base list-none flex items-center justify-between">
                How do I get my business cited on ChatGPT?
                <span className="text-[#F27D24] text-lg ml-4 transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="text-gray-400 text-sm leading-relaxed mt-4">
                ChatGPT cites sources that publish structured, authoritative content addressing specific questions people ask about your service category and geography. The minimum effective approach is 16 articles per month using hub-and-spoke architecture, with FAQ schema markup, direct-answer formatting in the first 50 words of each article, and geographic specificity that proves local expertise. First citations typically appear within 60 to 90 days.
              </p>
            </details>

            <details className="ae-faq-item bg-white/[0.03] border border-white/[0.08] rounded-xl p-5 mb-3 group">
              <summary className="cursor-pointer text-white font-semibold text-base list-none flex items-center justify-between">
                How long does answer engine optimization take to work?
                <span className="text-[#F27D24] text-lg ml-4 transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="text-gray-400 text-sm leading-relaxed mt-4">
                The first citations appear at 60 to 90 days for most local service businesses. The compounding phase begins at months 4 through 6, when the content volume crosses the threshold where AI systems treat you as a category authority rather than an occasional reference. At 12 months and 192 published articles, the structural moat is in place and competitors face a significant catch-up gap.
              </p>
            </details>

            <details className="ae-faq-item bg-white/[0.03] border border-white/[0.08] rounded-xl p-5 mb-3 group">
              <summary className="cursor-pointer text-white font-semibold text-base list-none flex items-center justify-between">
                Does AEO replace SEO?
                <span className="text-[#F27D24] text-lg ml-4 transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="text-gray-400 text-sm leading-relaxed mt-4">
                No. AEO extends SEO rather than replacing it. Domain authority, quality backlinks, and technical site performance all carry forward. The shift is in content structure and success metrics: instead of optimizing for keyword rankings, you optimize for citation-worthiness. Content built for AEO typically performs well in traditional search as a secondary benefit.
              </p>
            </details>

            <details className="ae-faq-item bg-white/[0.03] border border-white/[0.08] rounded-xl p-5 mb-3 group">
              <summary className="cursor-pointer text-white font-semibold text-base list-none flex items-center justify-between">
                What kinds of businesses benefit most from AEO?
                <span className="text-[#F27D24] text-lg ml-4 transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="text-gray-400 text-sm leading-relaxed mt-4">
                Local service businesses with a defined geography and service category benefit most: plumbers, HVAC companies, real estate agents, law firms, dentists, property managers, and similar. These are exactly the businesses people ask AI systems about by category and city. National brands already have entity authority. The AEO opportunity is largest for local operators who currently have zero editorial content despite strong review profiles.
              </p>
            </details>

            <details className="ae-faq-item bg-white/[0.03] border border-white/[0.08] rounded-xl p-5 mb-3 group">
              <summary className="cursor-pointer text-white font-semibold text-base list-none flex items-center justify-between">
                How do I know if AEO is working?
                <span className="text-[#F27D24] text-lg ml-4 transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="text-gray-400 text-sm leading-relaxed mt-4">
                The primary signal is direct citation: ask ChatGPT, Perplexity, Claude, and Gemini who the best provider of your service is in your city, and see whether your business name appears. Secondary signals include Google Search Console showing growth in featured snippet wins, referral traffic from AI platforms appearing in analytics, and an increase in inbound leads that arrive pre-qualified with specific questions rather than generic inquiries.
              </p>
            </details>
          </div>

          {/* Final CTA */}
          <div className="not-prose mt-12 p-8 rounded-2xl border border-white/10 text-center">
            <h3 className="font-plus-jakarta text-2xl font-bold text-white mb-3">Stop Being Invisible to AI</h3>
            <p className="text-gray-400 text-sm mb-6 max-w-lg mx-auto">
              Every day a competitor publishes content and you do not, the citation gap widens. The Blind Spot Report shows you exactly where you stand across ChatGPT, Perplexity, Claude, and Gemini.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/blindspot" className="inline-flex items-center gap-2 bg-[#F27D24] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#D96416] transition-colors">
                Get Your Free Blind Spot Report
              </Link>
              <Link href="/blog" className="inline-flex items-center gap-2 border border-white/20 text-gray-300 px-8 py-3 rounded-lg font-semibold hover:border-white/40 transition-colors">
                Browse All Articles
              </Link>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-6 mt-6 pt-6 border-t border-white/[0.06]">
              <a href="tel:+12134442229" className="text-gray-500 hover:text-white transition-colors text-sm">(213) 444-2229</a>
              <a href="mailto:support@theanswerengine.ai" className="text-gray-500 hover:text-white transition-colors text-sm">support@theanswerengine.ai</a>
            </div>
          </div>

        </article>
      </main>
    </>
  )
}
