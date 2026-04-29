import type { Metadata } from 'next'
import Link from 'next/link'

export const revalidate = 86400
export const dynamic = 'force-static'
export const dynamicParams = true

const title = 'Why AI Gives Outdated Info About My Business'
const slug = 'why-ai-gives-outdated-information-about-my-business'
const description = 'AI platforms are confidently sharing outdated information about your business. Learn why training data goes stale, how knowledge cutoffs work, and what you can do.'
const url = `https://theanswerengine.ai/blog/${slug}`
const image = `https://theanswerengine.ai/blog/${slug}.webp`

export const metadata: Metadata = {
  title: `${title} | The Answer Engine`,
  description,
  keywords: [
    'AI outdated business information',
    'ChatGPT wrong business hours',
    'AI knowledge cutoff business',
    'AI stale business data',
    'outdated AI search results',
    'AI training data update frequency',
    'fix outdated AI business info',
    'answer engine optimization',
    'AI business accuracy',
    'ChatGPT outdated information',
  ],
  openGraph: {
    title,
    description,
    type: 'article',
    url,
    images: [{ url: image, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description: 'AI is telling your customers information that was accurate months ago. Here is why it happens and what drives the staleness problem.',
  },
  alternates: {
    canonical: url,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      '@id': `${url}#article`,
      headline: title,
      description,
      image,
      datePublished: '2026-03-27',
      dateModified: '2026-03-27',
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
        name: 'The Answer Engine',
        logo: {
          '@type': 'ImageObject',
          url: 'https://theanswerengine.ai/logo.png',
        },
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': url,
      },
      articleSection: 'Business Pain Points',
      wordCount: 2700,
    },
    {
      '@type': 'FAQPage',
      '@id': `${url}#faq`,
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How often do AI models update their training data?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Major AI models retrain on irregular schedules, typically every 3 to 9 months. ChatGPT, for instance, had a knowledge cutoff of August 2025 as of March 2026. Between training cycles, the model has no awareness of any business changes that occurred after the cutoff. Some models supplement with live web search, but that is only triggered in certain contexts and not guaranteed to surface your specific business details.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why does ChatGPT show my old business hours instead of my current ones?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'ChatGPT generates responses from training data that has a fixed cutoff date. If you updated your hours after that cutoff, the model simply does not have the new information. Even when ChatGPT uses web browsing, it may still pull cached or outdated directory pages. The fix requires updating not just your website but every directory, profile, and citation source that AI models reference during training and live retrieval.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is Google AI more accurate than ChatGPT for business information?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For basic business details like hours and addresses, Google AI (Gemini) tends to be more current because it draws directly from Google Business Profile and Maps data, which updates in near real time. Research shows Gemini achieves close to 100% accuracy on business profiles, compared to roughly 68% accuracy for ChatGPT and Perplexity. However, Google AI still makes errors on service descriptions, specialties, and other details that are not structured in your Business Profile.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I force AI to update its information about my business?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You cannot directly force any AI model to retrain or update its knowledge base. There is no submission portal for business corrections on ChatGPT, Claude, or Perplexity. What you can do is saturate the sources that AI models rely on with consistent, current, and well-structured information. When the AI encounters overwhelming agreement across authoritative sources, the correct data is more likely to surface in the next training cycle or live retrieval.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I know which AI platforms have outdated info about my business?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The only reliable method is to audit each platform individually. Query ChatGPT, Perplexity, Google AI Overviews, Claude, and Bing Copilot with questions about your business name, category, and location. Check every claim against your current details: hours, phone number, address, services, pricing, and team members. Document every discrepancy. Many business owners are unaware of errors because they never perform this audit.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does updating my website immediately fix outdated AI answers?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Updating your website is necessary but not sufficient. AI models pull from dozens of sources including directories, forums, news articles, and social media. If your old information persists in those locations, the AI may still reference it. Additionally, models with fixed training cutoffs will not reflect website changes until their next training cycle. A comprehensive approach requires updating all citation sources, not just your own site.',
          },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${url}#breadcrumb`,
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
          item: url,
        },
      ],
    },
  ],
}

export default function WhyAIGivesOutdatedInformationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main
        className="min-h-screen"
        style={{ backgroundColor: '#0F1117', color: 'white' }}
      >
        <div className="max-w-4xl mx-auto px-6 py-20">

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-gray-500">
              <li><Link href="/" className="hover:text-[#F27D24] transition-colors">Home</Link></li>
              <li className="text-gray-700">/</li>
              <li><Link href="/blog" className="hover:text-[#F27D24] transition-colors">Blog</Link></li>
              <li className="text-gray-700">/</li>
              <li className="text-gray-400 truncate max-w-[250px]">{title}</li>
            </ol>
          </nav>

          {/* Hero Section */}
          <div
            className="relative overflow-hidden rounded-2xl mb-12"
            style={{
              background:
                'linear-gradient(135deg, #1a0a00 0%, #2d1200 50%, #1a0a00 100%)',
            }}
          >
            <svg
              className="absolute inset-0 w-full h-full opacity-10"
              viewBox="0 0 800 400"
              fill="none"
              aria-hidden="true"
            >
              {/* Clock with stale hands */}
              <circle cx="200" cy="200" r="80" stroke="#F27D24" strokeWidth="0.8" fill="rgba(255,106,0,0.04)" />
              <circle cx="200" cy="200" r="3" fill="#F27D24" opacity="0.4" />
              <line x1="200" y1="200" x2="200" y2="140" stroke="#F27D24" strokeWidth="0.8" opacity="0.4" />
              <line x1="200" y1="200" x2="240" y2="200" stroke="#F27D24" strokeWidth="0.6" opacity="0.3" />
              {/* Tick marks */}
              <line x1="200" y1="122" x2="200" y2="130" stroke="#F27D24" strokeWidth="0.5" opacity="0.3" />
              <line x1="200" y1="270" x2="200" y2="278" stroke="#F27D24" strokeWidth="0.5" opacity="0.3" />
              <line x1="122" y1="200" x2="130" y2="200" stroke="#F27D24" strokeWidth="0.5" opacity="0.3" />
              <line x1="270" y1="200" x2="278" y2="200" stroke="#F27D24" strokeWidth="0.5" opacity="0.3" />
              <text x="160" y="310" fontFamily="monospace" fontSize="11" fill="#F27D24" opacity="0.2">STALE DATA</text>
              {/* Data flow arrows that break */}
              <path d="M340 140 L440 140" stroke="#F27D24" strokeWidth="0.5" strokeDasharray="6 4" opacity="0.3" />
              <path d="M340 200 L440 200" stroke="#F27D24" strokeWidth="0.5" strokeDasharray="6 4" opacity="0.25" />
              <path d="M340 260 L440 260" stroke="#F27D24" strokeWidth="0.5" strokeDasharray="6 4" opacity="0.2" />
              {/* Broken connection symbol */}
              <line x1="450" y1="130" x2="470" y2="150" stroke="#F27D24" strokeWidth="0.6" opacity="0.3" />
              <line x1="470" y1="130" x2="450" y2="150" stroke="#F27D24" strokeWidth="0.6" opacity="0.3" />
              {/* AI brain with outdated info */}
              <rect x="530" y="130" width="160" height="140" rx="12" stroke="#F27D24" strokeWidth="0.6" fill="rgba(255,106,0,0.03)" />
              <text x="560" y="175" fontFamily="monospace" fontSize="9" fill="#F27D24" opacity="0.25">hrs: 9-5 (OLD)</text>
              <text x="560" y="195" fontFamily="monospace" fontSize="9" fill="#F27D24" opacity="0.25">phone: XXX (OLD)</text>
              <text x="560" y="215" fontFamily="monospace" fontSize="9" fill="#F27D24" opacity="0.25">addr: ??? (OLD)</text>
              <text x="570" y="250" fontFamily="monospace" fontSize="10" fill="#F27D24" opacity="0.2">AI MODEL</text>
            </svg>
            <div className="relative px-8 py-16 sm:px-12 sm:py-20">
              <span
                className="ae-section-label inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4"
                style={{ background: 'rgba(255,106,0,0.15)', color: '#F27D24', border: '1px solid rgba(255,106,0,0.3)' }}
              >
                Business Pain Points
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 font-plus-jakarta">
                Why AI Gives Outdated Information{' '}
                <span style={{ color: '#F27D24' }}>About My Business</span>
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                <span>By Justin Borges</span>
                <span aria-hidden="true">|</span>
                <time dateTime="2026-03-27">March 27, 2026</time>
                <span aria-hidden="true">|</span>
                <span>13 min read</span>
                <span aria-hidden="true">|</span>
                <span style={{ color: '#F27D24' }}>Business Pain Points</span>
              </div>
            </div>
          </div>

          {/* Intro Box */}
          <div className="ae-intro-box p-6 rounded-xl border border-gray-800 bg-gray-900/50 mb-8">
            <p className="text-gray-300 text-lg leading-relaxed">
              You updated your hours three months ago. You changed your phone number last year. You added two new services to your menu. Yet when customers ask ChatGPT, Perplexity, or Google AI about your business, they still get the old information, delivered with complete confidence. This is not a glitch. It is a structural problem with how AI learns about businesses, and it is costing you customers every single day.
            </p>
          </div>

          {/* Inline CTA 1 */}
          <div className="ae-cta-inline my-8 p-5 rounded-xl bg-[#F27D24]/10 border border-[#F27D24]/20 flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex-1">
              <p className="text-white font-semibold mb-1">Wondering what outdated info AI has about you?</p>
              <p className="text-gray-400 text-sm">Our free Blind Spot Report reveals exactly what each AI platform currently says about your business.</p>
            </div>
            <Link
              href="/blindspot"
              className="shrink-0 inline-flex items-center gap-2 bg-[#F27D24] text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-[#D96416] transition-colors"
            >
              Get Free Report
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>

          {/* Article Body */}
          <article className="prose prose-invert prose-lg max-w-none prose-headings:font-plus-jakarta prose-headings:text-white prose-p:text-gray-300 prose-a:text-[#F27D24] prose-a:no-underline hover:prose-a:underline prose-strong:text-white">

            {/* Table of Contents */}
            <div className="ae-toc not-prose my-10 p-6 rounded-xl border border-gray-800 bg-gray-900/60">
              <h2 className="font-plus-jakarta text-lg font-bold text-white mb-4">In This Article</h2>
              <ol className="space-y-2 text-sm">
                {[
                  ['#the-staleness-problem', 'The Staleness Problem in Numbers'],
                  ['#how-ai-learns', 'How AI Actually Learns About Your Business'],
                  ['#knowledge-cutoffs', 'Knowledge Cutoffs: The Core of the Problem'],
                  ['#live-retrieval-gaps', 'Why Live Search Does Not Fully Solve It'],
                  ['#what-goes-stale', 'The Business Details That Go Stale Fastest'],
                  ['#real-cost', 'The Real Cost of Outdated AI Answers'],
                  ['#building-freshness', 'Building a Freshness Signal That AI Actually Reads'],
                  ['#faq', 'Frequently Asked Questions'],
                ].map(([href, label]) => (
                  <li key={href as string}>
                    <a href={href as string} className="text-[#F27D24] hover:underline">
                      {label as string}
                    </a>
                  </li>
                ))}
              </ol>
            </div>

            {/* Stats Grid */}
            <div id="the-staleness-problem" className="not-prose my-12">
              <div className="ae-section-label text-xs font-bold uppercase tracking-widest text-[#F27D24] mb-2">The Staleness Problem</div>
              <h2 className="font-plus-jakarta text-3xl font-bold text-white mb-6">AI Information Staleness in Numbers</h2>
              <p className="text-gray-300 text-lg mb-8">
                The data tells a stark story. AI platforms are making confident claims about businesses using information that is months or even years out of date. And the businesses affected rarely know it is happening.
              </p>
              <div className="ae-stats-grid grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[
                  { value: '68%', label: 'accuracy rate for business profiles on ChatGPT and Perplexity (vs 100% on Gemini)' },
                  { value: '45%', label: 'of consumers now use AI search to find local services, up from 6% one year ago' },
                  { value: '9.2%', label: 'average hallucination rate across all major AI models for general queries' },
                  { value: '53%', label: 'of consumers will not visit a business with incorrect listings' },
                ].map((stat) => (
                  <div key={stat.label} className="ae-stat-card p-5 rounded-xl border border-gray-800 bg-gray-900/60 text-center">
                    <div className="ae-stat-value ae-accent font-plus-jakarta text-2xl font-bold text-[#F27D24] mb-1">{stat.value}</div>
                    <div className="ae-stat-label text-xs text-gray-400 leading-snug">{stat.label}</div>
                  </div>
                ))}
              </div>
              <p className="text-gray-400 text-sm italic">
                Sources: Birdeye LLM vs Traditional Local Search Accuracy Report; Suprmind AI Hallucination Statistics 2026; BusinessWire AI Accuracy and Reputation Study 2025; MarketingCode AI Search Consumer Survey.
              </p>
            </div>

            <p>
              Those numbers represent real revenue being lost every day. When nearly half of consumers are turning to AI for local service recommendations and the AI is delivering stale data, the consequences are not abstract. Customers are calling wrong numbers. They are showing up during old hours. They are choosing competitors because the AI never mentioned your newest services.
            </p>

            <p>
              The frustrating part is that you already fixed this problem on your end. Your website is current. Your Google profile is updated. Yet the AI keeps repeating old information as if nothing changed. To understand why, you need to understand how AI actually learns about businesses in the first place.
            </p>

            {/* Section 2 */}
            <div id="how-ai-learns" className="not-prose mt-14 mb-4">
              <div className="ae-section-label text-xs font-bold uppercase tracking-widest text-[#F27D24] mb-2">Under the Hood</div>
              <h2 className="font-plus-jakarta text-3xl font-bold text-white mb-4">How AI Actually Learns About Your Business</h2>
            </div>

            <p>
              AI models do not have a direct line to your business. They do not check your website every morning. They do not subscribe to your Google Business Profile updates. Instead, they learn about businesses the same way they learn about everything else: through massive, periodic training on internet data.
            </p>

            <p>
              <strong>Training data is a snapshot, not a live feed.</strong> When OpenAI, Google, or Anthropic trains a model, they crawl billions of web pages, directories, forums, news articles, and social media posts. All of that data gets compressed into the model&apos;s parameters. The result is a frozen snapshot of the internet as it existed at a specific point in time.
            </p>

            <p>
              <strong>The snapshot has a hard cutoff date.</strong> Everything published after that date simply does not exist in the model&apos;s core knowledge. For ChatGPT 5.4, released in March 2026, the training data cutoff was August 2025. That means any business change you made after August 2025 is invisible to ChatGPT&apos;s base knowledge.
            </p>

            <p>
              <strong>Training cycles are infrequent and expensive.</strong> Retraining a frontier AI model takes weeks to months and costs tens of millions of dollars in compute. These updates happen on the AI company&apos;s schedule, not yours. Between cycles, your business changes accumulate with no way to reach the model&apos;s core understanding.
            </p>

            <p>
              <strong>Multiple conflicting sources create confusion.</strong> Even within its training data, the model may have encountered ten different versions of your phone number across ten different directories. It cannot determine which is current. It picks the statistically most common one, which may be the oldest because it appeared on the most pages for the longest time. For a deeper look at why this conflation happens, read our guide on <Link href="/blog/why-ai-says-wrong-things-about-business">why AI says wrong things about your business</Link>.
            </p>

            <div className="ae-callout ae-callout-warning not-prose my-8 p-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5">
              <div className="flex gap-3">
                <span className="text-2xl">&#9888;&#65039;</span>
                <div>
                  <p className="font-semibold text-white mb-1">The Confidence Problem</p>
                  <p className="text-gray-300 text-sm">
                    MIT research found that AI models are 34% more likely to use confident language like &ldquo;definitely&rdquo; and &ldquo;certainly&rdquo; when generating incorrect information. Your customers have no way to distinguish an outdated AI answer from a current one. The AI sounds equally sure either way.
                  </p>
                </div>
              </div>
            </div>

            {/* Inline CTA 2 */}
            <div className="ae-cta-inline not-prose my-10 p-5 rounded-xl bg-[#F27D24]/10 border border-[#F27D24]/20 flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex-1">
                <p className="text-white font-semibold mb-1">Not sure how stale your AI presence is?</p>
                <p className="text-gray-400 text-sm">We audit all major AI platforms and tell you exactly what is outdated. No charge for the initial report.</p>
              </div>
              <a
                href="tel:+12134442229"
                className="shrink-0 inline-flex items-center gap-2 border border-[#F27D24] text-[#F27D24] px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-[#F27D24]/10 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                Call (213) 444-2229
              </a>
            </div>

            {/* Section 3 */}
            <div id="knowledge-cutoffs" className="not-prose mt-14 mb-4">
              <div className="ae-section-label text-xs font-bold uppercase tracking-widest text-[#F27D24] mb-2">The Core Issue</div>
              <h2 className="font-plus-jakarta text-3xl font-bold text-white mb-4">Knowledge Cutoffs: The Heart of the Staleness Problem</h2>
            </div>

            <p>
              Every AI model has a knowledge cutoff date, the point in time after which it has no training data. This is the single biggest reason AI gives outdated business information. Understanding these dates helps you grasp the scope of the problem.
            </p>

            {/* Comparison Table */}
            <div className="ae-comparison-table not-prose my-8 overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left py-3 px-4 text-[#F27D24] font-semibold">AI Platform</th>
                    <th className="text-left py-3 px-4 text-[#F27D24] font-semibold">Training Cutoff</th>
                    <th className="text-left py-3 px-4 text-[#F27D24] font-semibold">Live Search?</th>
                    <th className="text-left py-3 px-4 text-[#F27D24] font-semibold">Business Data Source</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                  {[
                    {
                      platform: 'ChatGPT (GPT-5.4)',
                      cutoff: 'Aug 2025',
                      live: 'Yes (browsing mode)',
                      source: 'Training data + Bing web results',
                    },
                    {
                      platform: 'Google Gemini 2.0',
                      cutoff: 'Rolling (near real-time)',
                      live: 'Yes (grounded in Search)',
                      source: 'Google Business Profile + Search index',
                    },
                    {
                      platform: 'Perplexity AI',
                      cutoff: 'Varies by base model',
                      live: 'Always (search-first)',
                      source: 'Live web crawl + indexed sources',
                    },
                    {
                      platform: 'Claude (Anthropic)',
                      cutoff: 'Early 2025',
                      live: 'Limited (tool use)',
                      source: 'Training data + limited retrieval',
                    },
                    {
                      platform: 'Bing Copilot',
                      cutoff: 'Varies',
                      live: 'Yes (Bing Search)',
                      source: 'Bing index + Bing Places',
                    },
                  ].map((row) => (
                    <tr key={row.platform} className="text-gray-300">
                      <td className="py-3 px-4 font-medium text-white">{row.platform}</td>
                      <td className="py-3 px-4">{row.cutoff}</td>
                      <td className="py-3 px-4">{row.live}</td>
                      <td className="py-3 px-4">{row.source}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p>
              Notice the gap. Gemini has an advantage for business data because it connects directly to Google&apos;s own business listings in near real time. ChatGPT and Claude rely primarily on training data that can be months old. Perplexity searches the web live, but the quality of its answers depends entirely on what it finds, and if the top results contain outdated directory pages, it will repeat stale information confidently.
            </p>

            <p>
              The implication for business owners is clear: there is no single fix. Each platform has a different data pipeline, a different refresh cycle, and different sources it trusts. A correction strategy that works for Gemini (updating your Google Business Profile) will not necessarily reach ChatGPT or Claude.
            </p>

            {/* Section 4 */}
            <div id="live-retrieval-gaps" className="not-prose mt-14 mb-4">
              <div className="ae-section-label text-xs font-bold uppercase tracking-widest text-[#F27D24] mb-2">Common Misconception</div>
              <h2 className="font-plus-jakarta text-3xl font-bold text-white mb-4">Why Live Search Does Not Fully Solve the Problem</h2>
            </div>

            <p>
              Many people assume that because ChatGPT can &ldquo;browse the web&rdquo; and Perplexity searches in real time, the knowledge cutoff problem is solved. It is not. Live retrieval helps, but it has significant gaps that still leave your business exposed to stale information.
            </p>

            <p>
              <strong>Live search is not always triggered.</strong> ChatGPT only activates web browsing for certain types of queries. A casual question like &ldquo;tell me about Smith Plumbing in Denver&rdquo; may be answered entirely from training data without any web search. The user has no way to know whether the answer came from live data or a frozen snapshot.
            </p>

            <p>
              <strong>Stale sources poison live results.</strong> When Perplexity or Bing Copilot searches the web, they surface whatever pages rank highest. If your old phone number is listed on 30 directory sites and your new one only appears on your website, the weight of outdated sources overwhelms the single current source.
            </p>

            <p>
              <strong>Caching creates phantom delays.</strong> Search engines and AI platforms cache results aggressively. Even after you update a directory, the cached version may persist for weeks. The AI queries the cache, not the live page, and delivers the stale version to your customer.
            </p>

            <div className="ae-callout ae-callout-info not-prose my-8 p-5 rounded-xl border border-blue-500/30 bg-blue-500/5">
              <div className="flex gap-3">
                <span className="text-2xl">&#128161;</span>
                <div>
                  <p className="font-semibold text-white mb-1">The Source Authority Principle</p>
                  <p className="text-gray-300 text-sm">
                    AI models weight sources by perceived authority. A single update on your website competes against dozens of directory listings, cached pages, forum mentions, and archived versions. Freshness alone is not enough. You need consistency across every source the AI can access. This is why <Link href="/blog/what-happens-when-ai-search-gets-business-wrong" className="text-[#F27D24] hover:underline">understanding what happens when AI gets your business wrong</Link> is so important.
                  </p>
                </div>
              </div>
            </div>

            {/* Inline CTA 3 */}
            <div className="ae-cta-inline not-prose my-10 p-5 rounded-xl bg-[#F27D24]/10 border border-[#F27D24]/20 flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex-1">
                <p className="text-white font-semibold mb-1">How many stale sources are dragging you down?</p>
                <p className="text-gray-400 text-sm">Our audit maps every source AI references for your business and flags the outdated ones.</p>
              </div>
              <a
                href="mailto:support@theanswerengine.ai"
                className="shrink-0 inline-flex items-center gap-2 border border-[#F27D24] text-[#F27D24] px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-[#F27D24]/10 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                Email Us
              </a>
            </div>

            {/* Section 5 */}
            <div id="what-goes-stale" className="not-prose mt-14 mb-4">
              <div className="ae-section-label text-xs font-bold uppercase tracking-widest text-[#F27D24] mb-2">Vulnerability Map</div>
              <h2 className="font-plus-jakarta text-3xl font-bold text-white mb-4">The Business Details That Go Stale Fastest</h2>
            </div>

            <p>
              Not all business information ages at the same rate. Some details are relatively stable (your business name, for example, rarely changes). Others shift frequently and are prime candidates for AI staleness. Knowing which details are most vulnerable helps you prioritize your correction efforts.
            </p>

            {/* Pros/Cons as High-Risk vs Low-Risk */}
            <div className="ae-pros-cons not-prose my-10 grid md:grid-cols-2 gap-6">
              <div className="ae-cons-box p-6 rounded-xl border border-red-500/20 bg-red-500/5">
                <h3 className="font-plus-jakarta font-bold text-red-400 mb-4">High Staleness Risk</h3>
                <ul className="space-y-3 text-sm text-gray-300">
                  {[
                    'Business hours (seasonal, holiday, temporary changes)',
                    'Phone numbers (switches, new lines, VoIP migrations)',
                    'Service menus and pricing (updated quarterly or more)',
                    'Staff and ownership changes',
                    'Temporary closures or relocations',
                    'New locations or expanded service areas',
                    'Promotional offers or seasonal specials',
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-red-400 shrink-0">&#10060;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="ae-pros-box p-6 rounded-xl border border-green-500/20 bg-green-500/5">
                <h3 className="font-plus-jakarta font-bold text-green-400 mb-4">Lower Staleness Risk</h3>
                <ul className="space-y-3 text-sm text-gray-300">
                  {[
                    'Business name (rarely changes)',
                    'Primary business category',
                    'Physical address (if stable)',
                    'Year established',
                    'Core service descriptions (if unchanged)',
                    'Industry certifications and licenses',
                    'Long-standing brand positioning',
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-green-400 shrink-0">&#9989;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p>
              The pattern is predictable: anything that changes more than once per year is almost certainly outdated in at least one AI platform. Businesses that update hours seasonally, rotate service offerings, or adjust pricing regularly are the most vulnerable. And these are exactly the details customers rely on most when making a purchasing decision.
            </p>

            <div className="ae-quote not-prose my-10 pl-6 border-l-4 border-[#F27D24]">
              <blockquote className="text-xl text-white font-plus-jakarta font-semibold leading-relaxed mb-3">
                &ldquo;AI search recommends only 1.2% of local businesses. The rest are invisible. And for those it does recommend, accuracy hovers around 68% on most platforms.&rdquo;
              </blockquote>
              <cite className="text-gray-500 text-sm not-italic">SOCi AI Visibility Study, reported in National Law Review</cite>
            </div>

            {/* Section 6 */}
            <div id="real-cost" className="not-prose mt-14 mb-4">
              <div className="ae-section-label text-xs font-bold uppercase tracking-widest text-[#F27D24] mb-2">Revenue Impact</div>
              <h2 className="font-plus-jakarta text-3xl font-bold text-white mb-4">The Real Cost of Outdated AI Answers</h2>
            </div>

            <p>
              The financial impact of stale AI data is not theoretical. When 45% of consumers are using AI to find local services and 53% of them will not visit a business with incorrect information, the math becomes straightforward: outdated AI answers are a direct revenue leak.
            </p>

            <p>
              <strong>Lost customers who never call.</strong> A customer asks ChatGPT for a good dentist nearby. Your practice is recommended with your old phone number. The customer calls, gets a disconnected line or a different business, and moves on to the next result. You never know the lead existed.
            </p>

            <p>
              <strong>Wrong hours mean wasted trips.</strong> A customer asks Perplexity for your Saturday hours. The AI reports your old schedule (closed Saturdays) even though you started opening on Saturdays six months ago. The customer goes to a competitor without ever checking your website.
            </p>

            <p>
              <strong>Missing services mean missed opportunities.</strong> You added emergency plumbing repair to your offerings. The AI still describes you as a &ldquo;residential plumbing and installation company&rdquo; with no mention of emergency services. Every customer searching for emergency plumbing goes elsewhere.
            </p>

            <p>
              <strong>Reputation erosion through inaccuracy.</strong> When a customer encounters wrong information attributed to AI, the frustration often transfers to the business rather than the platform. Research from the Birdeye study found that business profile accuracy directly impacts whether consumers choose to visit. A wrong detail in an AI answer can cancel out years of reputation building.
            </p>

            {/* Inline CTA 4 */}
            <div className="ae-cta-inline not-prose my-10 p-5 rounded-xl bg-[#F27D24]/10 border border-[#F27D24]/20 flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex-1">
                <p className="text-white font-semibold mb-1">How much revenue is stale AI data costing you?</p>
                <p className="text-gray-400 text-sm">We quantify the gap between what AI says and what is true. The report is free.</p>
              </div>
              <Link
                href="/blindspot"
                className="shrink-0 inline-flex items-center gap-2 bg-[#F27D24] text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-[#D96416] transition-colors"
              >
                Get Free Report
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>

            <div className="ae-callout ae-callout-orange not-prose my-8 p-5 rounded-xl border border-[#F27D24]/30 bg-[#F27D24]/5">
              <div className="flex gap-3">
                <span className="text-2xl">&#128073;</span>
                <div>
                  <p className="font-semibold text-white mb-1">The Compound Effect</p>
                  <p className="text-gray-300 text-sm">
                    Outdated information does not just lose you one customer. AI platforms serve the same wrong answer to every person who asks a similar question. If 50 people per month ask AI about your type of business in your area, and the AI gives stale details for your listing, that is 50 potential customers receiving wrong information every single month until the data is corrected.
                    {' '}Questions? Call us at{' '}
                    <a href="tel:+12134442229" className="text-[#F27D24] hover:underline">(213) 444-2229</a>.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 7 */}
            <div id="building-freshness" className="not-prose mt-14 mb-4">
              <div className="ae-section-label text-xs font-bold uppercase tracking-widest text-[#F27D24] mb-2">The Framework</div>
              <h2 className="font-plus-jakarta text-3xl font-bold text-white mb-4">Building a Freshness Signal That AI Actually Reads</h2>
            </div>

            <p>
              You cannot call OpenAI and ask them to update your business details. You cannot submit a correction to Claude. There is no &ldquo;update my info&rdquo; button on Perplexity. The correction path is indirect, but it is well understood by specialists who work in Answer Engine Optimization.
            </p>

            <p>
              The core principle is this: AI models learn from the web, so you need to make the web consistently reflect your current information across every source the AI might reference. The more sources that agree, the more likely the AI is to surface the correct, current version.
            </p>

            <p>
              <strong>The challenge is scope.</strong> Most business owners update their website and their Google Business Profile. That covers Gemini reasonably well. But ChatGPT, Claude, and Perplexity draw from a much wider set of sources: directory listings, forum posts, news mentions, structured data, social profiles, and more. A comprehensive freshness strategy needs to reach all of them.
            </p>

            <p>
              <strong>Structured data carries outsized weight.</strong> AI models parse schema markup (JSON-LD structured data on your website) more reliably than unstructured text. A properly formatted LocalBusiness schema with current hours, phone, address, and services gives the AI a machine-readable source of truth. Without it, the model has to interpret your information from prose, which increases the error rate.
            </p>

            <p>
              <strong>Citation velocity matters.</strong> When your correct information appears on multiple authoritative sites within a short time window, it creates a freshness signal. AI models that use live retrieval are more likely to pick up synchronized updates than isolated changes on a single source. For a practical guide on building this correction ecosystem, see our article on <Link href="/blog/how-to-fix-wrong-ai-answers-about-your-business">how to fix wrong AI answers about your business</Link>.
            </p>

            <p>
              <strong>Regular publishing creates recency cues.</strong> Businesses that publish blog posts, press releases, and updated service pages give AI models more recent content to reference. Stale websites with no new content for months signal to AI that the business may be inactive, which reduces its likelihood of being recommended at all.
            </p>

            {/* Inline CTA 5 */}
            <div className="ae-cta-inline not-prose my-10 p-5 rounded-xl bg-[#F27D24]/10 border border-[#F27D24]/20 flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex-1">
                <p className="text-white font-semibold mb-1">Want a freshness strategy built for your business?</p>
                <p className="text-gray-400 text-sm">We design AI correction ecosystems for businesses in over 40 industries. Let us show you the plan.</p>
              </div>
              <a
                href="tel:+12134442229"
                className="shrink-0 inline-flex items-center gap-2 border border-[#F27D24] text-[#F27D24] px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-[#F27D24]/10 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                Call (213) 444-2229
              </a>
            </div>

            {/* Takeaway */}
            <div className="ae-takeaway not-prose my-8 p-6 rounded-xl border border-[#F27D24]/30 bg-gradient-to-br from-[#F27D24]/10 to-transparent">
              <h3 className="font-plus-jakarta font-bold text-white mb-3">The Key Takeaway</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Outdated AI answers are not a temporary glitch that fixes itself. They persist because AI models learn from the web on their own schedule, not yours. The only reliable path to freshness is making the correct information so dominant across so many authoritative sources that the AI has no alternative but to use it. That is what Answer Engine Optimization addresses at a systematic level.
              </p>
            </div>

            {/* Cheat Sheet */}
            <div className="ae-cheat-sheet not-prose my-12 p-6 rounded-xl border border-gray-700 bg-gray-900/80">
              <h3 className="font-plus-jakarta text-xl font-bold text-[#F27D24] mb-5">AI Freshness Cheat Sheet: Priority Actions</h3>
              <p className="text-gray-400 text-sm mb-4">Working through this list? <a href="mailto:support@theanswerengine.ai" className="text-orange-500 hover:underline">Email us</a> or <a href="tel:+12134442229" className="text-orange-500 hover:underline">call (213) 444-2229</a> if you need guidance on any step.</p>
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-2">
                {[
                  'Audit all 5 major AI platforms for outdated business details',
                  'Update your website with current hours, phone, address, and services',
                  'Add or update LocalBusiness JSON-LD schema markup',
                  'Claim and correct your Google Business Profile',
                  'Claim and correct your Bing Places listing',
                  'Update the top 20 directory listings (Yelp, Apple Maps, Foursquare, YP)',
                  'Publish a fresh FAQ page with explicit, quotable business facts',
                  'Set up quarterly re-audit reminders (every 90 days)',
                  'Re-audit immediately after any business change',
                  'Publish new content monthly to maintain recency signals',
                  'Monitor which AI platforms include you in category searches',
                  'Track citation consistency across all sources quarterly',
                ].map((item) => (
                  <div key={item} className="flex gap-2 py-1.5 border-b border-gray-800 last:border-0">
                    <span className="text-[#F27D24] shrink-0 mt-0.5 text-sm">&#9744;</span>
                    <span className="text-gray-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Inline CTA 6 */}
            <div className="ae-cta-inline not-prose my-10 p-5 rounded-xl bg-[#F27D24]/10 border border-[#F27D24]/20 flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex-1">
                <p className="text-white font-semibold mb-1">Want someone to handle this checklist for you?</p>
                <p className="text-gray-400 text-sm">We execute the full freshness strategy for businesses like yours. Start with a free audit.</p>
              </div>
              <a
                href="mailto:support@theanswerengine.ai"
                className="shrink-0 inline-flex items-center gap-2 border border-[#F27D24] text-[#F27D24] px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-[#F27D24]/10 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                Email Us
              </a>
            </div>

          </article>{/* end prose */}

          {/* Author Card */}
          <div className="ae-author-card my-12 p-6 rounded-xl border border-gray-800 bg-gray-900/60 flex items-start gap-5">
            <div className="w-14 h-14 rounded-full bg-[#F27D24]/20 border border-[#F27D24]/40 flex items-center justify-center text-2xl shrink-0">
              &#128204;
            </div>
            <div className="flex-1">
              <p className="font-plus-jakarta font-bold text-white">Justin Borges</p>
              <p className="text-[#F27D24] text-sm mb-2">AI Visibility Specialists</p>
              <p className="text-gray-400 text-sm leading-relaxed mb-3">
                We specialize in diagnosing and correcting how AI platforms represent local and regional businesses. Our Blind Spot Reports have uncovered outdated AI data for businesses in over 40 industries across the US.
              </p>
              <div className="flex flex-wrap gap-3 text-sm">
                <a href="tel:+12134442229" className="text-orange-500 hover:underline">Call (213) 444-2229</a>
                <span className="text-gray-700">&bull;</span>
                <a href="mailto:support@theanswerengine.ai" className="text-orange-500 hover:underline">Email us</a>
              </div>
            </div>
          </div>

          {/* 3-Tier CTA Block */}
          <div className="not-prose my-16 p-8 rounded-2xl bg-gradient-to-br from-[#F27D24]/10 to-transparent border border-[#F27D24]/20">
            <h3 className="font-plus-jakarta text-2xl font-bold text-white mb-3">Stop AI From Sharing Outdated Information About Your Business</h3>
            <p className="text-gray-400 mb-6">Our Blind Spot Report reveals exactly what each AI platform currently says about you, what is outdated, and what is completely wrong.</p>
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

          {/* FAQ Section */}
          <section id="faq" className="my-16">
            <div className="ae-section-label text-xs font-bold uppercase tracking-widest text-[#F27D24] mb-2">Common Questions</div>
            <h2 className="font-plus-jakarta text-3xl font-bold text-white mb-8">Frequently Asked Questions</h2>
            <p className="text-gray-400 mb-8">Have questions about fixing outdated AI information? We have answers. Or <a href="tel:+12134442229" className="text-orange-500 hover:underline">call us at (213) 444-2229</a> to discuss your situation.</p>
            <div className="space-y-6">
              {[
                {
                  q: 'How often do AI models update their training data?',
                  a: 'Major AI models retrain on irregular schedules, typically every 3 to 9 months. ChatGPT, for instance, had a knowledge cutoff of August 2025 as of March 2026. Between training cycles, the model has no awareness of any business changes that occurred after the cutoff. Some models supplement with live web search, but that is only triggered in certain contexts and not guaranteed to surface your specific business details.',
                },
                {
                  q: 'Why does ChatGPT show my old business hours instead of my current ones?',
                  a: 'ChatGPT generates responses from training data that has a fixed cutoff date. If you updated your hours after that cutoff, the model simply does not have the new information. Even when ChatGPT uses web browsing, it may still pull cached or outdated directory pages. The fix requires updating not just your website but every directory, profile, and citation source that AI models reference during training and live retrieval.',
                },
                {
                  q: 'Is Google AI more accurate than ChatGPT for business information?',
                  a: 'For basic business details like hours and addresses, Google AI (Gemini) tends to be more current because it draws directly from Google Business Profile and Maps data, which updates in near real time. Research shows Gemini achieves close to 100% accuracy on business profiles, compared to roughly 68% accuracy for ChatGPT and Perplexity. However, Google AI still makes errors on service descriptions, specialties, and other details that are not structured in your Business Profile.',
                },
                {
                  q: 'Can I force AI to update its information about my business?',
                  a: 'You cannot directly force any AI model to retrain or update its knowledge base. There is no submission portal for business corrections on ChatGPT, Claude, or Perplexity. What you can do is saturate the sources that AI models rely on with consistent, current, and well-structured information. When the AI encounters overwhelming agreement across authoritative sources, the correct data is more likely to surface in the next training cycle or live retrieval.',
                },
                {
                  q: 'How do I know which AI platforms have outdated info about my business?',
                  a: 'The only reliable method is to audit each platform individually. Query ChatGPT, Perplexity, Google AI Overviews, Claude, and Bing Copilot with questions about your business name, category, and location. Check every claim against your current details: hours, phone number, address, services, pricing, and team members. Document every discrepancy. Many business owners are unaware of errors because they never perform this audit.',
                },
                {
                  q: 'Does updating my website immediately fix outdated AI answers?',
                  a: 'No. Updating your website is necessary but not sufficient. AI models pull from dozens of sources including directories, forums, news articles, and social media. If your old information persists in those locations, the AI may still reference it. Additionally, models with fixed training cutoffs will not reflect website changes until their next training cycle. A comprehensive approach requires updating all citation sources, not just your own site.',
                },
              ].map((item) => (
                <div key={item.q} className="p-6 rounded-xl border border-gray-800 bg-gray-900/50">
                  <h3 className="font-plus-jakarta font-semibold text-white mb-3">{item.q}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Final CTA */}
          <div className="ae-final-cta my-16 text-center p-10 rounded-2xl border border-[#F27D24]/30 bg-gradient-to-b from-[#F27D24]/10 to-transparent relative overflow-hidden">
            <div
              className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse at 50% 0%, rgba(255,106,0,0.15) 0%, transparent 70%)',
              }}
            />
            <div className="relative z-10">
              <p className="text-[#F27D24] text-sm font-semibold uppercase tracking-widest mb-3">Take Action Today</p>
              <h3 className="font-plus-jakarta text-3xl font-bold text-white mb-4">
                Every Day AI Shares Outdated Info,<br className="hidden md:block" /> You Lose Customers You Never Knew About
              </h3>
              <p className="text-gray-400 max-w-xl mx-auto mb-8 text-lg">
                The Blind Spot Report is free and takes less than 24 hours. You get a complete picture of what every major AI platform currently says about your business and where the staleness lives.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/blindspot"
                  className="inline-flex items-center gap-2 bg-[#F27D24] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#D96416] transition-colors"
                  style={{ animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}
                >
                  Get Your Free Blind Spot Report
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
                <a
                  href="tel:+12134442229"
                  className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  Or call (213) 444-2229
                </a>
              </div>
              <p className="text-gray-600 text-xs mt-6">No credit card. No commitment. Just clarity on what AI is saying about your business.</p>
            </div>
          </div>

        </div>
      </main>
    </>
  )
}
