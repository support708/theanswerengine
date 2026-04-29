import type { Metadata } from 'next'
import Link from 'next/link'

export const revalidate = 86400
export const dynamic = 'force-static'
export const dynamicParams = true

const title = 'Google Ads vs AI Visibility: Which Wins in 2026'
const description = 'AI search traffic converts 4-5x higher than Google Ads, but Google still dominates volume. Here is the data-driven breakdown CMOs and business owners need to allocate budget wisely in 2026.'
const slug = 'google-ads-vs-ai-visibility-2026'
const publishDate = '2026-04-23'

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'Google Ads vs AI visibility',
    'AI search conversion rates 2026',
    'Google Ads ROI 2026',
    'AI search traffic growth',
    'ChatGPT vs Google Ads',
    'AI Overviews impact on Google Ads',
    'marketing budget allocation 2026',
    'answer engine optimization vs PPC',
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
          name: 'Is Google Ads or AI visibility a better investment in 2026?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'It depends on your business goals. Google Ads delivers immediate, scalable volume with a proven $2 return per $1 spent. AI visibility delivers 4-5x higher conversion rates but at significantly lower volume. Most businesses in 2026 need both: Google Ads for predictable pipeline today, and AI optimization to capture the fastest-growing traffic source before competitors lock in positions.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much does AI search traffic actually convert compared to Google Ads?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'AI-referred traffic converts at 14.2% on average, compared to 2.8% for Google organic and similar ranges for paid search. ChatGPT referrals specifically convert at 15.9%. The higher conversion rate comes from intent clarity — users asking AI layered, specific questions are further along in the buying journey than someone clicking a search ad.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are AI Overviews hurting Google Ads performance?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, measurably. Queries that trigger AI Overviews see a 68% drop in paid ad click-through rates, from 19.7% to 6.34%. As of March 2026, 48% of all search queries now show AI Overviews, up 58% from December 2025. This means nearly half of the queries you are bidding on may be delivering significantly fewer clicks than they did a year ago.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much traffic does AI search actually send compared to Google?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'AI search currently represents about 2.96% of traditional search engine volume, and AI-referred traffic accounts for roughly 1.08% of total website sessions. However, AI search traffic is growing at 527% year over year. While Google still dominates in raw volume, the trajectory suggests AI search will be a material traffic source within 2-3 years for most industries.',
          },
        },
        {
          '@type': 'Question',
          name: 'Should I reduce my Google Ads budget to invest in AI visibility?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Not yet for most businesses. Google Ads still works — 76% of small businesses report satisfaction, and the average return is $2 per $1 spent. The smarter move is to reallocate 10-15% of your marketing budget toward AI visibility while maintaining your core paid search campaigns. Think of AI optimization as the growth investment and Google Ads as the performance baseline.',
          },
        },
        {
          '@type': 'Question',
          name: 'What does it cost to optimize for AI search visibility?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Unlike Google Ads, there is no per-click cost for AI search visibility. The investment is in content optimization — structuring your website content so AI platforms cite you when users ask relevant questions. There are no auction-based pricing spikes and no bidding wars. Once you earn a citation position, it compounds over time without incremental spend per visitor.',
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
        <div className="ae-hero-badge">Comparisons</div>
        <h1 className="ae-hero-title">{title}</h1>
        <p className="ae-hero-desc">
          Google Ads still dominates volume. AI search converts 4-5x higher. The real question is not which one wins — it is which one your customers are using right now, and whether your budget reflects that reality.
        </p>
        <div className="ae-hero-meta">
          <time dateTime={publishDate}>April 23, 2026</time>
          <span>·</span>
          <span>12 min read</span>
          <span>·</span>
          <span>Justin Borges</span>
        </div>

        {/* Hero SVG — fork/split decision */}
        <div className="ae-hero-visual" aria-hidden="true">
          <svg viewBox="0 0 480 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="ae-hero-svg">
            {/* Center decision node */}
            <circle cx="240" cy="50" r="30" fill="#6366f1" opacity="0.9"/>
            <text x="240" y="46" textAnchor="middle" fill="white" fontSize="9" fontWeight="600">Your</text>
            <text x="240" y="58" textAnchor="middle" fill="white" fontSize="9" fontWeight="600">Budget</text>

            {/* Fork lines */}
            <line x1="215" y1="70" x2="120" y2="130" stroke="#6366f1" strokeWidth="2" opacity="0.6"/>
            <line x1="265" y1="70" x2="360" y2="130" stroke="#22c55e" strokeWidth="2" opacity="0.6"/>

            {/* Google Ads side */}
            <rect x="50" y="130" width="140" height="60" rx="12" fill="#1e293b" stroke="#6366f1" strokeWidth="2"/>
            <text x="120" y="153" textAnchor="middle" fill="#818cf8" fontSize="11" fontWeight="700">Google Ads</text>
            <text x="120" y="170" textAnchor="middle" fill="#94a3b8" fontSize="9">97% volume</text>
            <text x="120" y="182" textAnchor="middle" fill="#94a3b8" fontSize="9">2.8% conversion</text>

            {/* AI Visibility side */}
            <rect x="290" y="130" width="140" height="60" rx="12" fill="#1e293b" stroke="#22c55e" strokeWidth="2"/>
            <text x="360" y="153" textAnchor="middle" fill="#86efac" fontSize="11" fontWeight="700">AI Visibility</text>
            <text x="360" y="170" textAnchor="middle" fill="#94a3b8" fontSize="9">527% YoY growth</text>
            <text x="360" y="182" textAnchor="middle" fill="#94a3b8" fontSize="9">14.2% conversion</text>

            {/* Bottom convergence — hybrid */}
            <line x1="120" y1="190" x2="240" y2="240" stroke="#6366f1" strokeWidth="1.5" opacity="0.4" strokeDasharray="4 3"/>
            <line x1="360" y1="190" x2="240" y2="240" stroke="#22c55e" strokeWidth="1.5" opacity="0.4" strokeDasharray="4 3"/>
            <rect x="180" y="230" width="120" height="36" rx="8" fill="#F27D24" opacity="0.15" stroke="#F27D24" strokeWidth="1.5"/>
            <text x="240" y="253" textAnchor="middle" fill="#F27D24" fontSize="10" fontWeight="700">Hybrid Strategy</text>
          </svg>
        </div>

        {/* Stats grid */}
        <div className="ae-stats-grid">
          <div className="ae-stat-card">
            <span className="ae-stat-value">14.2%</span>
            <span className="ae-stat-label">AI traffic conversion rate vs 2.8% Google</span>
          </div>
          <div className="ae-stat-card">
            <span className="ae-stat-value">527%</span>
            <span className="ae-stat-label">AI search traffic growth year over year</span>
          </div>
          <div className="ae-stat-card">
            <span className="ae-stat-value">-68%</span>
            <span className="ae-stat-label">Google Ads CTR drop from AI Overviews</span>
          </div>
          <div className="ae-stat-card">
            <span className="ae-stat-value">$2:$1</span>
            <span className="ae-stat-label">Google Ads average return on spend</span>
          </div>
        </div>
      </header>

      {/* Article body */}
      <article className="max-w-4xl mx-auto px-6 py-4 prose prose-invert prose-lg max-w-none">

        {/* TOC */}
        <div className="ae-toc not-prose">
          <div className="ae-toc-title">In This Guide</div>
          <ol>
            <li><a href="#tldr">The Bottom Line Up Front</a></li>
            <li><a href="#traffic-comparison">Traffic Volume: Google Still Dominates</a></li>
            <li><a href="#cost-comparison">Cost: Rising CPCs vs Zero-Click Investment</a></li>
            <li><a href="#conversion-rates">Conversion Rates: Where AI Wins Decisively</a></li>
            <li><a href="#ctr-impact">The AI Overviews Problem Nobody Talks About</a></li>
            <li><a href="#business-sentiment">What Business Owners Actually Think</a></li>
            <li><a href="#behavior-shifts">How Search Behavior Has Fractured</a></li>
            <li><a href="#real-question">The Real Question for Your Business</a></li>
            <li><a href="#faq">Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* TL;DR */}
        <h2 id="tldr">The Bottom Line Up Front</h2>
        <div className="ae-callout ae-callout-info not-prose">
          <div className="ae-callout-title">TL;DR — Both Channels Win. The Question Is Allocation.</div>
          <ul>
            <li><strong>Google Ads</strong> still delivers 97%+ of paid search volume with a proven $2 return per $1 spent. It is not dying.</li>
            <li><strong>AI visibility</strong> converts at 14.2% — roughly 4-5x higher than Google organic — but currently represents only 2.96% of total search volume.</li>
            <li><strong>AI search grew 527% year over year</strong>, and 50%+ of users now start their search journey in an AI app.</li>
            <li><strong>AI Overviews are eroding Google Ads performance</strong>: paid CTR dropped 68% on affected queries, and 48% of all queries now trigger AI Overviews.</li>
            <li>The businesses winning in 2026 are running <strong>hybrid strategies</strong>: Google Ads for predictable volume, AI optimization for compounding high-intent conversions.</li>
          </ul>
        </div>

        <p>
          If you are a CMO, agency media buyer, or business owner staring at a marketing budget spreadsheet right now, you are facing a question that did not exist two years ago: should you keep pouring money into Google Ads, or start diverting budget toward AI search visibility?
        </p>
        <p>
          The honest answer — backed by every data point we could find — is that framing it as an either/or decision is already the wrong approach. But the data tells a nuanced story that should change how you allocate spend. Here is what the numbers actually say.
        </p>

        {/* Traffic Comparison */}
        <h2 id="traffic-comparison">Traffic Volume: Google Still Dominates — But the Trendlines Should Worry You</h2>
        <p>
          Let us start with the uncomfortable reality for AI optimists: Google is still massive. Traditional search engines processed 1.86 trillion visits over the past year. The top 10 AI chatbots combined? 55.2 billion. That makes AI traffic roughly 2.96% of traditional search volume.
        </p>
        <p>
          But the growth trajectory tells a different story. AI search traffic grew 527% year over year from January through May 2025 compared to the same period in 2024. Referral visits from AI platforms surged 357% to 1.13 billion. Meanwhile, traditional search volume declined 0.51%.
        </p>
        <p>
          Here is what that looks like in context: ChatGPT alone commands 80.49% of the AI chatbot market, sending roughly 4 out of every 5 AI-driven clicks. Google Gemini quadrupled its share from 5.7% to 21.5% in six months. Perplexity holds 15-20% depending on geography. These are not fringe tools anymore — they are mainstream research platforms.
        </p>

        <div className="ae-callout ae-callout-warning not-prose">
          <div className="ae-callout-title">The Math That Should Concern Google Ads Buyers</div>
          <p>AI search grew 527% in one year. Traditional search declined 0.51%. If even a fraction of that growth trajectory continues, AI search will represent 10-15% of total search volume within 2-3 years. Every percentage point it gains represents billions of queries your Google Ads will never reach.</p>
        </div>

        {/* Cost Comparison */}
        <h2 id="cost-comparison">Cost: Rising CPCs vs a Zero-Click Investment Model</h2>
        <p>
          Google Ads costs are climbing and they are not slowing down. The average cost per click across all industries sits between $2.10 and $5.26 in 2026, with CPCs increasing 10-15% annually since 2023. Legal advertisers pay $8.58 per click on average. Personal injury lawyers? North of $100 per click.
        </p>
        <p>
          The driver is straightforward: more advertisers are entering auctions, automated bidding systems are optimizing against each other, and competition is compressing margins. If you are running Google Ads profitably today, you are spending more for each click than you were 12 months ago, and you will spend more again next year.
        </p>
        <p>
          AI visibility operates on a fundamentally different cost model. There is no cost per click to ChatGPT, Perplexity, Gemini, or Claude. You do not bid in an auction. You do not pay when someone clicks through from an AI citation. The investment is in content optimization — structuring your website so AI platforms recognize you as a credible source and cite you in relevant answers.
        </p>
        <p>
          That does not mean AI visibility is free. It requires investment in content strategy, technical optimization, and ongoing authority building. But once you earn a citation position, it compounds. A piece of content optimized in month two still generates AI referrals in month twelve without incremental spend. Google Ads stops the moment you stop paying.
        </p>

        <div className="not-prose overflow-x-auto my-8">
          <table className="ae-table">
            <thead>
              <tr>
                <th>Factor</th>
                <th>Google Ads</th>
                <th>AI Visibility</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Cost model</td>
                <td>Pay per click ($2.10–$5.26 avg)</td>
                <td>Content investment, no per-click fee</td>
              </tr>
              <tr>
                <td>Cost trend</td>
                <td>Rising 10-15% annually</td>
                <td>Stable (content production costs)</td>
              </tr>
              <tr>
                <td>Scalability</td>
                <td>Linear — more spend = more clicks</td>
                <td>Compounding — citations grow over time</td>
              </tr>
              <tr>
                <td>Time to results</td>
                <td>Immediate (hours)</td>
                <td>8-16 weeks for first citations</td>
              </tr>
              <tr>
                <td>When you stop paying</td>
                <td>Traffic stops immediately</td>
                <td>Citations persist</td>
              </tr>
              <tr>
                <td>Competitive pressure</td>
                <td>Auction-based — costs rise with competitors</td>
                <td>Authority-based — early movers hold advantage</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Conversion Rates */}
        <h2 id="conversion-rates">Conversion Rates: Where AI Visibility Wins Decisively</h2>
        <p>
          This is where the conversation gets interesting for anyone focused on ROI rather than raw traffic numbers.
        </p>
        <p>
          AI-referred visitors convert at 14.2% on average. Google organic converts at 2.8%. That is a 5x conversion advantage. Broken down by platform: ChatGPT referrals convert at 15.9%, Perplexity at 10.5%, Claude at 5.0%, and Gemini at 3.0%.
        </p>
        <p>
          Why the dramatic difference? Intent clarity. When someone clicks a Google Ad for &ldquo;roofing company near me,&rdquo; they might be comparing prices, looking at reviews, or just browsing. When someone arrives at your site from a ChatGPT citation that answered &ldquo;who is the most reliable roofer in [city] for tile roof repairs,&rdquo; they have already been pre-qualified by the AI. They know what they want. You were recommended.
        </p>
        <p>
          The engagement data reinforces this: AI visitors spend 67.7% more time on sites — an average of 9 minutes 19 seconds compared to 5 minutes 33 seconds for Google organic. They are reading deeper, exploring more pages, and converting at higher rates because they arrived with more context and higher intent.
        </p>

        <div className="ae-callout ae-callout-success not-prose">
          <div className="ae-callout-title">The Pipeline Math</div>
          <p>AI traffic currently accounts for just 1.08% of total website sessions. But it generates 19% of qualified pipeline. That disparity — 1% of traffic producing 19% of qualified leads — is why CFOs should be paying attention. Dollar for dollar, AI-sourced visitors are producing outsized business outcomes.</p>
        </div>

        {/* CTR Impact */}
        <h2 id="ctr-impact">The AI Overviews Problem Nobody Talks About</h2>
        <p>
          Here is the factor that should genuinely concern every Google Ads buyer: Google&apos;s own AI features are cannibalizing your ad performance.
        </p>
        <p>
          As of March 2026, 48% of all search queries trigger AI Overviews — up 58% from December 2025. When AI Overviews appear, organic click-through rates drop 61%. Paid ad CTR drops 68%, from 19.7% down to 6.34%. You are paying the same CPC for dramatically fewer clicks.
        </p>
        <p>
          The zero-click problem is even more severe. Traditional queries without AI Overviews already had a 60% zero-click rate. Queries with AI Overviews? 83% zero-click. Google&apos;s AI Mode specifically generates zero outbound clicks on 93% of queries.
        </p>
        <p>
          Google is responding by embedding ads within AI results — 25.5% of AI Overview results now include ads, up 394% from early 2025. But the ad formats are different, the CTRs are lower, and the bidding dynamics are still evolving. Projected AI search ad spend for 2026 is $2.08 billion, just 1.3% of total search ad spend, growing to $25.93 billion by 2029.
        </p>
        <p>
          The practical implication: if you are running Google Ads campaigns targeting informational or comparison queries, nearly half of your impressions may be generating significantly fewer clicks than your historical data suggests. Your cost-per-acquisition is quietly rising even if your CPC stays flat.
        </p>

        {/* Business Sentiment */}
        <h2 id="business-sentiment">What Business Owners Actually Think</h2>
        <p>
          Despite everything above, business owners remain committed to Google Ads. 76% of small businesses report satisfaction with search advertising. 70% cite it as their highest-ROI channel. 46% of SMBs are planning to increase ad budgets in 2025-2026.
        </p>
        <p>
          This is not irrational. Google Ads still works. The average return is $2 revenue per $1 spent. 65% of industries saw conversion rate improvements in 2025. For businesses that need leads today — not in 8-16 weeks — paid search delivers immediate, measurable results.
        </p>
        <p>
          But there is an underlying tension in the data. CPCs are rising at 12.88% annually while conversion rates are only improving at 6.84%. That means margins are compressing about 6% every year. The businesses thriving on Google Ads are the ones optimizing continuously. &ldquo;Set it and forget it&rdquo; campaigns are losing money faster than ever.
        </p>

        <div className="ae-callout ae-callout-info not-prose">
          <div className="ae-callout-title">Why Most Business Owners Have Not Shifted Yet</div>
          <ul>
            <li>Google Ads provides immediate, trackable results — AI visibility takes weeks to months</li>
            <li>Most business owners do not yet understand AI visibility as a channel they can influence</li>
            <li>The tools for measuring AI citation performance are still emerging</li>
            <li>Agencies are incentivized to recommend ad spend (they get a percentage) over content optimization</li>
          </ul>
        </div>

        {/* Behavior Shifts */}
        <h2 id="behavior-shifts">How Search Behavior Has Fractured</h2>
        <p>
          The most important data point in this entire analysis: more than 50% of respondents now start their search journey in an AI app. Not Google. An AI app.
        </p>
        <p>
          But here is the nuance that makes this a hybrid story, not a replacement story: 85% of those users verify AI answers on Google afterward. The search journey has become AI-first for research, Google for validation and purchase. Users ask ChatGPT &ldquo;what are the best options for X,&rdquo; then Google the specific recommendations to check reviews, pricing, and availability.
        </p>
        <p>
          The query types shifting fastest toward AI are factual lookups (AI preference grew from 23% to 29%), definitions, comparisons, and how-to guides. Purchase-intent queries remain Google-dominant — for now.
        </p>
        <p>
          What this means for budget allocation: if your Google Ads strategy targets top-of-funnel informational queries, AI is already eating your lunch. If you target bottom-of-funnel purchase-intent queries, Google Ads remains strong but the pool of clicks is shrinking as AI Overviews absorb more SERP real estate.
        </p>
        <p>
          One more data point worth noting: 60% of users say AI answers are clearer and more useful than traditional search results. But 85% still verify on Google. There is a trust gap between utility and action. That gap will close — the only question is how fast.
        </p>

        <div className="ae-callout ae-callout-warning not-prose">
          <div className="ae-callout-title">The Citation Multiplier Effect</div>
          <p>Brands cited in AI Overviews see 35% more organic clicks and 91% more paid clicks on Google. Being visible in AI does not just drive direct AI traffic — it lifts your Google performance too. AI visibility and Google Ads are not competing channels. They are amplifying each other.</p>
        </div>

        {/* The Real Question */}
        <h2 id="real-question">The Real Question for Your Business</h2>
        <p>
          Stop asking &ldquo;which one is better.&rdquo; Start asking: &ldquo;which one is my customer using right now, and am I visible there?&rdquo;
        </p>
        <p>
          If your customer is a homeowner searching &ldquo;emergency plumber near me&rdquo; at 11 PM, Google Ads wins. That is a purchase-intent query where immediacy matters and AI has not changed the behavior.
        </p>
        <p>
          If your customer is a CMO researching &ldquo;best marketing automation platforms for mid-market SaaS&rdquo; before building a vendor shortlist, AI is where that research starts. If you are not cited in ChatGPT&apos;s answer, you are not on the shortlist.
        </p>
        <p>
          If your customer is a homeowner asking &ldquo;what type of roof lasts longest in Florida&rdquo; before deciding to replace their roof, AI answers that question and potentially recommends your competitor. Then the homeowner Googles the recommended company to verify. Your Google Ad for &ldquo;roof replacement Florida&rdquo; competes against a business that already has a recommendation advantage.
        </p>
        <p>
          The winning allocation in 2026 is not 100% Google Ads or 100% AI optimization. It is a hybrid strategy where Google Ads handles predictable volume and immediate-intent conversions, while AI visibility captures the high-converting research traffic that feeds the entire funnel.
        </p>

        <p>
          The businesses that figure out the right ratio for their specific market — and adjust it quarterly as AI adoption accelerates — will outperform competitors stuck in a single-channel mindset.
        </p>

        {/* CTA block */}
        <div className="not-prose my-16 p-8 rounded-2xl bg-gradient-to-br from-[#F27D24]/10 to-transparent border border-[#F27D24]/20">
          <h3 className="font-plus-jakarta text-2xl font-bold text-white mb-3">Find Out Where Your Customers Actually Are</h3>
          <p className="text-gray-400 mb-6">Your competitors might already be appearing in AI answers for your most valuable queries — while your Google Ads CPC climbs higher every quarter. Our free Blindspot Report shows you exactly where you are visible, where you are invisible, and what to fix first.</p>
          <Link href="/blindspot" className="inline-flex items-center gap-2 bg-[#F27D24] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#D96416] transition-colors">
            Get My Free Blindspot Report
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
            <summary>Is Google Ads or AI visibility a better investment in 2026?</summary>
            <p>It depends on your business goals. Google Ads delivers immediate, scalable volume with a proven $2 return per $1 spent. AI visibility delivers 4-5x higher conversion rates but at significantly lower volume. Most businesses in 2026 need both: Google Ads for predictable pipeline today, and AI optimization to capture the fastest-growing traffic source before competitors lock in positions.</p>
          </details>

          <details className="ae-faq-item">
            <summary>How much does AI search traffic actually convert compared to Google Ads?</summary>
            <p>AI-referred traffic converts at 14.2% on average, compared to 2.8% for Google organic and similar ranges for paid search. ChatGPT referrals specifically convert at 15.9%. The higher conversion rate comes from intent clarity — users asking AI layered, specific questions are further along in the buying journey than someone clicking a search ad.</p>
          </details>

          <details className="ae-faq-item">
            <summary>Are AI Overviews hurting Google Ads performance?</summary>
            <p>Yes, measurably. Queries that trigger AI Overviews see a 68% drop in paid ad click-through rates, from 19.7% to 6.34%. As of March 2026, 48% of all search queries now show AI Overviews, up 58% from December 2025. Nearly half of the queries you are bidding on may be delivering significantly fewer clicks than they did a year ago.</p>
          </details>

          <details className="ae-faq-item">
            <summary>How much traffic does AI search actually send compared to Google?</summary>
            <p>AI search currently represents about 2.96% of traditional search engine volume, and AI-referred traffic accounts for roughly 1.08% of total website sessions. However, AI search traffic is growing at 527% year over year. While Google still dominates in raw volume, the trajectory suggests AI search will be a material traffic source within 2-3 years for most industries.</p>
          </details>

          <details className="ae-faq-item">
            <summary>Should I reduce my Google Ads budget to invest in AI visibility?</summary>
            <p>Not yet for most businesses. Google Ads still works — 76% of small businesses report satisfaction, and the average return is $2 per $1 spent. The smarter move is to reallocate 10-15% of your marketing budget toward AI visibility while maintaining your core paid search campaigns. Think of AI optimization as the growth investment and Google Ads as the performance baseline.</p>
          </details>

          <details className="ae-faq-item">
            <summary>What does it cost to optimize for AI search visibility?</summary>
            <p>Unlike Google Ads, there is no per-click cost for AI search visibility. The investment is in content optimization — structuring your website content so AI platforms cite you when users ask relevant questions. There are no auction-based pricing spikes and no bidding wars. Once you earn a citation position, it compounds over time without incremental spend per visitor.</p>
          </details>
        </div>

        {/* Final CTA */}
        <div className="not-prose mt-12 p-8 rounded-2xl border border-white/10 text-center">
          <h3 className="font-plus-jakarta text-2xl font-bold text-white mb-3">Stop Guessing. See Your Actual AI Visibility.</h3>
          <p className="text-gray-400 mb-6">Your Google Ads dashboard shows you clicks and conversions. But it cannot show you the customers who asked AI for a recommendation and never saw your name. Our Blindspot Report fills that gap.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/blindspot" className="inline-flex items-center gap-2 bg-[#F27D24] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#D96416] transition-colors">Get My Blindspot Report</Link>
            <Link href="/blog" className="inline-flex items-center gap-2 border border-white/20 text-gray-300 px-8 py-3 rounded-lg font-semibold hover:border-white/40 transition-colors">Read More Comparisons</Link>
          </div>
        </div>

      </article>
    </>
  )
}
