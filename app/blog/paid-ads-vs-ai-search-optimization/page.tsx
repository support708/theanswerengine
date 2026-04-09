import type { Metadata } from 'next'
import Link from 'next/link'

export const revalidate = 86400
export const dynamic = 'force-static'
export const dynamicParams = true

const title = 'Paid Ads vs AI Search Optimization: Which Gets More Calls'
const description =
  'Google Ads costs are rising. AI search is growing. Which channel actually brings in more local business leads in 2026? A clear-eyed comparison for service businesses.'
const slug = 'paid-ads-vs-ai-search-optimization'
const publishDate = '2026-04-09'

export const metadata: Metadata = {
  title: `${title} | The Answer Engine`,
  description,
  keywords: [
    'paid ads vs AI search',
    'Google Ads vs AI optimization',
    'AI search leads local business',
    'PPC vs answer engine optimization',
    'should I stop Google Ads',
    'AI search ROI local business',
    'paid search vs organic AI',
    'ChatGPT leads local business',
    'Perplexity vs Google Ads',
    'AI search cost per lead',
    'local service business marketing 2026',
    'answer engine optimization ROI',
  ],
  authors: [{ name: 'The Answer Engine Team' }],
  openGraph: {
    title: `${title} | The Answer Engine`,
    description,
    type: 'article',
    publishedTime: publishDate,
    authors: ['The Answer Engine Team'],
    url: `https://theanswerengine.ai/blog/${slug}`,
    images: [
      {
        url: `https://theanswerengine.ai/blog/${slug}.webp`,
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${title} | The Answer Engine`,
    description,
    images: [`https://theanswerengine.ai/blog/${slug}.webp`],
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
      datePublished: publishDate + 'T00:00:00Z',
      dateModified: publishDate + 'T00:00:00Z',
      author: {
        '@type': 'Organization',
        name: 'The Answer Engine',
        url: 'https://theanswerengine.ai',
      },
      publisher: {
        '@type': 'Organization',
        name: 'The Answer Engine',
        url: 'https://theanswerengine.ai',
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
          name: 'Should I stop running paid ads and switch to AI search optimization?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Not entirely, and not yet. Paid ads deliver immediate, measurable results and give you control over when and where you appear. AI search optimization builds durable organic authority that generates leads without per-click costs. The most effective approach is running both in parallel: use paid ads to capture demand today while building AI visibility for compound returns tomorrow. Businesses that abandon paid ads prematurely typically see a short-term revenue dip.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does AI search optimization take to generate leads?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most businesses begin seeing measurable AI citation improvements within 60 to 90 days of implementing foundational changes: directory consistency, schema markup, and authoritative content. Consistent AI recommendations that reliably generate inbound inquiries typically take 4 to 6 months to establish. This is slower than paid ads, which can generate calls on day one, but the leads from AI do not stop when you pause your budget.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are leads from AI search different from leads from paid ads?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, meaningfully so. Leads from AI search typically represent higher-intent buyers because they asked a conversational question and received a recommendation they trust. AI-recommended businesses benefit from an implied endorsement that paid ads cannot replicate. Conversion rates on AI-referred leads tend to be higher than on paid search clicks, though the volume is currently lower for most businesses.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does running Google Ads help my AI search visibility?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Not directly. Paying for Google Ads does not influence how ChatGPT, Perplexity, or Google AI Overviews rank your business in their organic recommendation layer. AI platforms evaluate organic authority signals: structured data, reviews, directory consistency, and content quality. Ad spend may indirectly help by driving traffic that generates reviews and brand mentions, but it is not a substitute for AI-specific optimization.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much does AI search optimization cost compared to paid ads?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Paid ads for local service businesses typically cost between $1,500 and $5,000 per month in ad spend alone, with additional agency or management fees on top. AI search optimization is a one-time build investment with ongoing maintenance rather than a recurring cost per click. Once your business earns consistent AI recommendations, that visibility does not pause when your budget does.',
          },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `https://theanswerengine.ai/blog/${slug}#breadcrumb`,
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

      {/* Breadcrumb */}
      <nav className="max-w-4xl mx-auto px-6 pt-8 pb-2" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 text-sm text-gray-500">
          <li>
            <Link href="/" className="hover:text-[#FF6A00] transition-colors">Home</Link>
          </li>
          <li>/</li>
          <li>
            <Link href="/blog" className="hover:text-[#FF6A00] transition-colors">Blog</Link>
          </li>
          <li>/</li>
          <li className="text-gray-300 truncate max-w-[200px]">{title}</li>
        </ol>
      </nav>

      {/* Hero */}
      <header className="relative max-w-4xl mx-auto px-6 py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid3" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#FF6A00" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid3)" />
          </svg>
        </div>
        <div className="relative">
          <div className="flex items-center gap-3 mb-6">
            <span className="ae-section-label">Comparisons</span>
            <span className="text-gray-500 text-sm">April 9, 2026</span>
            <span className="text-gray-500 text-sm">10 min read</span>
          </div>
          <h1 className="font-plus-jakarta text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Paid Ads vs AI Search Optimization:{' '}
            <span className="text-[#FF6A00]">Which Gets More Calls</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
            Google Ads costs are climbing. Zero-click searches are approaching 70%. AI search is
            capturing the queries that used to drive your calls. Before you decide where to put
            your marketing budget, you need an honest comparison of what each channel actually
            delivers in 2026.
          </p>
        </div>
      </header>

      {/* Stats Grid */}
      <div className="max-w-4xl mx-auto px-6 mb-12">
        <div className="ae-stats-grid">
          <div className="ae-stat-card">
            <div className="ae-stat-emoji">🖱️</div>
            <div className="ae-stat-value">70%</div>
            <div className="ae-stat-label">Of Google searches end with no click in 2025</div>
          </div>
          <div className="ae-stat-card">
            <div className="ae-stat-emoji">📉</div>
            <div className="ae-stat-value">80%</div>
            <div className="ae-stat-label">Drop in traffic to top results when AI Overview appears</div>
          </div>
          <div className="ae-stat-card">
            <div className="ae-stat-emoji">📈</div>
            <div className="ae-stat-value">50%</div>
            <div className="ae-stat-label">ROAS improvement for hybrid AI + paid strategies</div>
          </div>
          <div className="ae-stat-card">
            <div className="ae-stat-emoji">💡</div>
            <div className="ae-stat-value">30%</div>
            <div className="ae-stat-label">Higher conversion rate on AI-driven recommendations</div>
          </div>
        </div>
      </div>

      {/* Article Body */}
      <article className="max-w-4xl mx-auto px-6 pb-20">

        {/* TOC */}
        <div className="ae-toc mb-12">
          <div className="ae-toc-title">In This Article</div>
          <ol>
            <li><a href="#the-shift">The Shift That Is Changing the Math</a></li>
            <li><a href="#paid-ads-today">What Paid Ads Look Like in 2026</a></li>
            <li><a href="#ai-search-channel">AI Search as a Lead Channel</a></li>
            <li><a href="#head-to-head">Head-to-Head Comparison</a></li>
            <li><a href="#lead-quality">Lead Quality: The Hidden Difference</a></li>
            <li><a href="#right-answer">Which Channel Is Right for You</a></li>
            <li><a href="#faq">Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* Section 1 */}
        <section id="the-shift" className="mb-12">
          <h2 className="font-plus-jakarta text-3xl font-bold text-white mb-4">
            The Shift That Is Changing the Math
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            The premise of paid search has always been simple: pay to appear when someone searches
            for what you offer, and collect the call or the form fill. For fifteen years, that
            model worked reliably for local service businesses. Then Google started putting AI
            Overviews at the top of the page.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            When a Google AI Overview appears above the paid ads, traffic to everything below it
            drops by as much as 80%. Users get their answer from the AI summary and never scroll
            to the ads. For paid search advertisers, this is a direct hit to campaign performance
            on the queries that used to be their most valuable.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            Meanwhile, nearly 70% of all Google searches in 2025 ended without any click at all.
            Users asked questions and got answers without visiting any website. That number does
            not include the growing volume of searches happening directly in ChatGPT, Perplexity,
            and other AI platforms where Google ads do not appear at all.
          </p>

          <div className="ae-callout ae-callout-warning mb-6">
            <div className="ae-callout-title">The Invisible Revenue Drain</div>
            <p>
              Every zero-click search is a potential customer who received a recommendation
              without ever seeing your ads. If that recommendation went to a competitor with
              stronger AI visibility, you paid for the infrastructure of the internet economy
              without receiving any of its traffic. This is the structural problem that paid-only
              strategies cannot solve.
            </p>
          </div>

          <div className="ae-cta-inline mb-6">
            <p>
              Wondering how much AI search traffic your competitors are capturing instead of you?{' '}
              <Link href="/blindspot">
                Get your free Blind Spot Report and find out.
              </Link>
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section id="paid-ads-today" className="mb-12">
          <h2 className="font-plus-jakarta text-3xl font-bold text-white mb-4">
            What Paid Ads Look Like in 2026
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Paid search is not dead. It is changing. Google&apos;s AI Max campaigns, launched in
            2025, use AI automation to optimize targeting and creative, achieving 14% higher
            conversions at similar cost per acquisition. For businesses running broad keyword
            campaigns with phrase match, AI Max has delivered up to 27% more conversions.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            Google&apos;s Local Services Ads remain a strong option for home service, legal,
            healthcare, and financial businesses. The pay-per-lead structure is inherently
            lower-risk than traditional cost-per-click, and these ads sit above everything else
            on the page, including AI Overviews in most layouts.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            The fundamental reality of paid ads has not changed: they require continuous spending
            to generate leads. The moment you pause a campaign, the leads stop. For businesses
            with consistent monthly budgets and strong ad creative, paid search remains a
            reliable lead generation channel. For businesses with inconsistent budgets or
            seasonal cash flow, the dependency creates risk.
          </p>

          <div className="ae-dollar-compare mb-8">
            <div className="ae-dollar-item">
              <div className="ae-dollar-label">Google Ads (Local Service)</div>
              <div className="ae-dollar-price">$1,500–$5,000/mo</div>
            </div>
            <div className="ae-dollar-item">
              <div className="ae-dollar-label">Google Local Services Ads</div>
              <div className="ae-dollar-price">$25–$150/lead</div>
            </div>
            <div className="ae-dollar-item">
              <div className="ae-dollar-label">Agency Management Fee</div>
              <div className="ae-dollar-price">$500–$2,000/mo</div>
            </div>
            <div className="ae-dollar-item">
              <div className="ae-dollar-label">AI Search Optimization</div>
              <div className="ae-dollar-price">One-time + maintenance</div>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section id="ai-search-channel" className="mb-12">
          <h2 className="font-plus-jakarta text-3xl font-bold text-white mb-4">
            AI Search as a Lead Channel
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            AI search visibility works differently from paid ads in almost every dimension. You
            cannot buy your way into a ChatGPT or Perplexity recommendation. You earn it by
            building the kind of documented, authoritative web presence that AI platforms trust.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            That distinction has a significant financial implication. AI search visibility is
            infrastructure, not a recurring expense. A business that builds strong AI authority
            in 2026 will benefit from that investment for years without paying per recommendation.
            The cost structure is fundamentally different from paid search.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            The timeline is the tradeoff. Building genuine AI authority takes months, not days.
            Paid ads can start delivering calls in 24 to 48 hours. For businesses that need
            immediate revenue, that timeline difference is real and matters.
          </p>

          <div className="ae-callout ae-callout-success mb-6">
            <div className="ae-callout-title">The Compound Advantage</div>
            <p>
              Unlike paid ads where you pay the same cost per click indefinitely, AI search
              authority compounds. Each new review, each new authoritative citation, each new
              piece of quality content strengthens your recommendation signal. Businesses that
              start building now will have a durable advantage that becomes harder and harder
              for late-movers to close.
            </p>
          </div>
        </section>

        {/* Section 4: Comparison Table */}
        <section id="head-to-head" className="mb-12">
          <h2 className="font-plus-jakarta text-3xl font-bold text-white mb-4">
            Head-to-Head Comparison
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Here is how the two channels compare across the factors that matter most for local
            service businesses.
          </p>

          <div className="overflow-x-auto mb-8">
            <table className="ae-comparison-table">
              <thead>
                <tr>
                  <th>Factor</th>
                  <th>Paid Ads (Google/LSA)</th>
                  <th>AI Search Optimization</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Time to first lead</td>
                  <td>24-48 hours</td>
                  <td>60-180 days</td>
                </tr>
                <tr>
                  <td>Cost structure</td>
                  <td>Recurring per click/lead</td>
                  <td>One-time build + maintenance</td>
                </tr>
                <tr>
                  <td>Visibility when paused</td>
                  <td>Zero (immediate dropoff)</td>
                  <td>Continues indefinitely</td>
                </tr>
                <tr>
                  <td>Conversion rate of leads</td>
                  <td>Baseline</td>
                  <td>~30% higher (implied trust)</td>
                </tr>
                <tr>
                  <td>Impact of AI Overviews</td>
                  <td>Negative (cannibalization)</td>
                  <td>Positive (you are the overview)</td>
                </tr>
                <tr>
                  <td>Scalability</td>
                  <td>Linear (spend more, get more)</td>
                  <td>Compounding over time</td>
                </tr>
                <tr>
                  <td>Geographic control</td>
                  <td>Precise bid-based targeting</td>
                  <td>Requires signal building per area</td>
                </tr>
                <tr>
                  <td>Competition level</td>
                  <td>High, expensive verticals</td>
                  <td>Low, most businesses not optimized</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="ae-cta-inline mb-6">
            <p>
              Want to know your current AI search visibility score before investing further in ads?{' '}
              <Link href="/blindspot">
                Get your free Blind Spot Report first.
              </Link>
            </p>
          </div>
        </section>

        {/* Section 5 */}
        <section id="lead-quality" className="mb-12">
          <h2 className="font-plus-jakarta text-3xl font-bold text-white mb-4">
            Lead Quality: The Hidden Difference
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Volume comparisons between paid ads and AI search miss the most important dimension:
            lead quality. The experience of receiving a recommendation from an AI assistant is
            fundamentally different from clicking an ad.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            When ChatGPT or Perplexity recommends your business, the user experiences that as a
            trusted referral from an intelligent system they already rely on. The implicit message
            is: this platform analyzed the options and thinks this business is right for you.
            That is a very different psychology from a paid ad that the user knows is there
            because someone paid for it.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            The practical result is a higher conversion rate from AI-referred leads. Businesses
            tracking attribution carefully are reporting that AI-referred inquiries close at higher
            rates with less price negotiation. The prospect arrives pre-qualified, pre-trusting,
            and ready to book.
          </p>

          <div className="ae-pros-cons mb-8">
            <div className="ae-pros-box">
              <h3>AI Search Lead Characteristics</h3>
              <ul>
                <li>Higher intent: asked a specific question, received a recommendation</li>
                <li>Pre-qualified by the AI&apos;s evaluation of your authority</li>
                <li>Implied trust from an AI assistant they already rely on</li>
                <li>Less price sensitivity (not comparison shopping on a search results page)</li>
                <li>Zero cost per lead once authority is established</li>
              </ul>
            </div>
            <div className="ae-cons-box">
              <h3>Paid Ad Lead Characteristics</h3>
              <ul>
                <li>Immediate: available from day one of campaign launch</li>
                <li>Controllable: can pause, scale, or target precisely</li>
                <li>Mixed intent: clicking an ad does not equal buying intent</li>
                <li>Price-sensitive: often still comparison shopping</li>
                <li>Stops immediately when budget is paused</li>
              </ul>
            </div>
          </div>

          <p className="text-gray-300 leading-relaxed mb-4">
            This is also why the question "which gets more calls" is slightly the wrong frame.
            The better question is: which gets more revenue per dollar invested over a 24-month
            horizon? When you factor in the compounding nature of AI visibility and the implied
            trust premium on AI-referred leads, the long-term ROI comparison shifts significantly
            in favor of AI search optimization.
          </p>
        </section>

        {/* Section 6 */}
        <section id="right-answer" className="mb-12">
          <h2 className="font-plus-jakarta text-3xl font-bold text-white mb-4">
            Which Channel Is Right for You
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            The right answer for most local service businesses is both, but not equally weighted.
            Use this framework to decide how to allocate.
          </p>

          <div className="ae-decision-matrix mb-8">
            <div className="ae-decision-row">
              <div className="ae-decision-if">Need leads immediately (new business, cash flow gap)</div>
              <div className="ae-decision-arrow">→</div>
              <div className="ae-decision-then">Paid ads first, start AI optimization in parallel</div>
            </div>
            <div className="ae-decision-row">
              <div className="ae-decision-if">Established business with predictable revenue</div>
              <div className="ae-decision-arrow">→</div>
              <div className="ae-decision-then">Shift 20-30% of ad budget to AI optimization</div>
            </div>
            <div className="ae-decision-row">
              <div className="ae-decision-if">High cost-per-click vertical (legal, finance, medical)</div>
              <div className="ae-decision-arrow">→</div>
              <div className="ae-decision-then">AI optimization has exceptional ROI vs. $50+ CPCs</div>
            </div>
            <div className="ae-decision-row">
              <div className="ae-decision-if">Seasonal business with inconsistent ad budget</div>
              <div className="ae-decision-arrow">→</div>
              <div className="ae-decision-then">AI visibility is critical: leads continue when budget pauses</div>
            </div>
            <div className="ae-decision-row">
              <div className="ae-decision-if">Already running Google Local Services Ads</div>
              <div className="ae-decision-arrow">→</div>
              <div className="ae-decision-then">Keep LSA running, add AI optimization as a second channel</div>
            </div>
          </div>

          <div className="ae-callout ae-callout-orange mb-6">
            <div className="ae-callout-title">The Hybrid Advantage</div>
            <p>
              Businesses running paid ads alongside AI optimization see 50% better ROAS on their
              paid campaigns. The reason: when a user sees your ad AND has heard your business
              recommended by an AI assistant, the conversion rate on the ad click increases
              significantly. Brand recognition from AI visibility makes paid ads more effective,
              not redundant.
            </p>
          </div>

          <p className="text-gray-300 leading-relaxed mb-4">
            To understand how this fits into the larger landscape of digital marketing in the AI
            era, our comparison of{' '}
            <Link href="/blog/is-paying-for-seo-a-waste-of-money-in-the-ai-era" className="text-[#FF6A00] hover:underline">
              whether traditional SEO is still worth paying for
            </Link>{' '}
            provides useful context on where each channel fits in a modern marketing mix.
          </p>

          <div className="ae-cheat-sheet mb-8">
            <div className="ae-cheat-sheet-title">Budget Allocation Guide by Business Stage</div>
            <table>
              <thead>
                <tr>
                  <th>Business Stage</th>
                  <th>Paid Ads</th>
                  <th>AI Optimization</th>
                  <th>Traditional SEO</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Launch (0-12 months)</td>
                  <td>60%</td>
                  <td>30%</td>
                  <td>10%</td>
                </tr>
                <tr>
                  <td>Growth (1-3 years)</td>
                  <td>40%</td>
                  <td>40%</td>
                  <td>20%</td>
                </tr>
                <tr>
                  <td>Established (3+ years)</td>
                  <td>30%</td>
                  <td>50%</td>
                  <td>20%</td>
                </tr>
                <tr>
                  <td>High-CPC vertical</td>
                  <td>20%</td>
                  <td>60%</td>
                  <td>20%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="ae-takeaway mb-8">
            <div className="ae-takeaway-title">The Bottom Line</div>
            <p>
              Paid ads win on speed. AI search optimization wins on compounding ROI, lead quality,
              and resilience. The smartest businesses in 2026 are not choosing between them.
              They are running paid ads to fund the business while systematically building AI
              authority that will reduce their dependence on paid channels over time. The question
              is not which channel to use. It is which channel to prioritize building first.
            </p>
          </div>
        </section>

        {/* 3-tier CTA Block */}
        <div className="not-prose my-16 p-8 rounded-2xl bg-gradient-to-br from-[#FF6A00]/10 to-transparent border border-[#FF6A00]/20">
          <h3 className="font-plus-jakarta text-2xl font-bold text-white mb-3">
            See Where Your AI Search Visibility Stands Today
          </h3>
          <p className="text-gray-400 mb-6">
            Before deciding how to allocate your marketing budget, find out what ChatGPT,
            Perplexity, and Google AI Overviews currently say when someone searches for your
            services. Your free Blind Spot Report gives you the baseline.
          </p>
          <Link
            href="/blindspot"
            className="inline-flex items-center gap-2 bg-[#FF6A00] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#e55f00] transition-colors"
          >
            Get Your Free Blind Spot Report
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <div className="flex flex-wrap items-center gap-6 mt-6 pt-6 border-t border-[#FF6A00]/10">
            <a
              href="tel:+12134442229"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (213) 444-2229
            </a>
            <a
              href="mailto:support@theanswerengine.ai"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              support@theanswerengine.ai
            </a>
          </div>
        </div>

        {/* Author Card */}
        <div className="ae-author-card mb-12">
          <div className="ae-author-avatar">AE</div>
          <div>
            <div className="font-semibold text-white">The Answer Engine Team</div>
            <div className="text-gray-400 text-sm">
              AI search optimization specialists helping local businesses get found by ChatGPT,
              Perplexity, and Google AI. Based in Los Angeles.
            </div>
          </div>
        </div>

        {/* FAQ */}
        <section id="faq" className="mb-12">
          <h2 className="font-plus-jakarta text-3xl font-bold text-white mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: 'Should I stop running paid ads and switch to AI search optimization?',
                a: 'Not entirely, and not yet. Paid ads deliver immediate, measurable results and give you control over when and where you appear. AI search optimization builds durable organic authority that generates leads without per-click costs. The most effective approach is running both in parallel: use paid ads to capture demand today while building AI visibility for compound returns tomorrow. Businesses that abandon paid ads prematurely typically see a short-term revenue dip.',
              },
              {
                q: 'How long does AI search optimization take to generate leads?',
                a: 'Most businesses begin seeing measurable AI citation improvements within 60 to 90 days of implementing foundational changes: directory consistency, schema markup, and authoritative content. Consistent AI recommendations that reliably generate inbound inquiries typically take 4 to 6 months to establish. This is slower than paid ads, which can generate calls on day one, but the leads from AI do not stop when you pause your budget.',
              },
              {
                q: 'Are leads from AI search different from leads from paid ads?',
                a: 'Yes, meaningfully so. Leads from AI search typically represent higher-intent buyers because they asked a conversational question and received a recommendation they trust. AI-recommended businesses benefit from an implied endorsement that paid ads cannot replicate. Conversion rates on AI-referred leads tend to be higher than on paid search clicks, though the volume is currently lower for most businesses.',
              },
              {
                q: 'Does running Google Ads help my AI search visibility?',
                a: 'Not directly. Paying for Google Ads does not influence how ChatGPT, Perplexity, or Google AI Overviews rank your business in their organic recommendation layer. AI platforms evaluate organic authority signals: structured data, reviews, directory consistency, and content quality. Ad spend may indirectly help by driving traffic that generates reviews and brand mentions, but it is not a substitute for AI-specific optimization.',
              },
              {
                q: 'How much does AI search optimization cost compared to paid ads?',
                a: 'Paid ads for local service businesses typically cost between $1,500 and $5,000 per month in ad spend alone, with additional agency or management fees on top. AI search optimization is a one-time build investment with ongoing maintenance rather than a recurring cost per click. Once your business earns consistent AI recommendations, that visibility does not pause when your budget does.',
              },
            ].map(({ q, a }) => (
              <div key={q} className="border border-white/10 rounded-xl p-6">
                <h3 className="font-plus-jakarta font-semibold text-white mb-3">{q}</h3>
                <p className="text-gray-400 leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <div className="ae-final-cta">
          <h2 className="font-plus-jakarta text-3xl font-bold text-white mb-4">
            Stop Paying for Traffic You Are Not Getting
          </h2>
          <p className="text-gray-400 mb-8">
            If 70% of searches end without a click, your ad budget is working harder to reach
            fewer people. Find out where AI search is already capturing the customers your ads
            used to reach, and what it takes to show up there instead.
          </p>
          <Link
            href="/blindspot"
            className="ae-cta-primary inline-flex items-center gap-2"
          >
            Get My Free Blind Spot Report
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </article>
    </>
  )
}
