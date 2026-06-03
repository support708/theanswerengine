import type { Metadata } from 'next'
import Link from 'next/link'

export const dynamicParams = true

const title = 'The 5-Minute AI Visibility Audit You Can Do Right Now'
const description =
  'Run a free 5-minute audit to check if ChatGPT, Perplexity, and Google AI recommend your business. Step-by-step guide with exact prompts to test your AI search presence today.'
const slug = '5-minute-ai-visibility-audit'
const publishDate = '2026-03-17'

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'AI visibility audit',
    'ChatGPT business visibility',
    'AI search audit',
    'Perplexity business check',
    'Google AI Overviews visibility',
    'AI search presence test',
    'AI recommendation check',
    'local business AI visibility',
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
          name: 'How long does an AI visibility audit take?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A basic AI visibility audit takes about 5 minutes. You need to run the same test prompts across ChatGPT, Perplexity, and Google AI Overviews, then score your results. A more thorough audit that includes competitor analysis and source tracking can take 15 to 20 minutes.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do I need a paid ChatGPT account to test my AI visibility?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. The free versions of ChatGPT, Perplexity, and Google (which includes AI Overviews) are sufficient for running a basic visibility audit. Free accounts will show you whether AI platforms mention your business in response to customer-style queries.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why does my business rank on Google but not show up on ChatGPT?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Google rankings and AI recommendations use completely different systems. Google relies on backlinks, keywords, and page authority. AI platforms like ChatGPT pull from training data, web crawls, and structured signals like schema markup. A business can rank number one on Google and still be invisible to AI search engines.',
          },
        },
        {
          '@type': 'Question',
          name: 'How often should I run an AI visibility audit?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'At minimum, once per month. AI models update their knowledge bases regularly, and a brand can lose a third of its AI visibility in just a few weeks. Weekly checks are ideal if you are actively optimizing for AI search.',
          },
        },
        {
          '@type': 'Question',
          name: 'What are the most important signals for AI visibility?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The top signals include structured data (schema markup), consistent NAP information across directories, a claimed Bing Places profile (which feeds ChatGPT), authoritative content that answers common customer questions, and positive reviews on major platforms. Pages with structured data get 30% more clicks and are significantly more likely to be cited by AI.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I improve my AI visibility without hiring an agency?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You can make meaningful improvements on your own. Claiming your Bing Places listing, adding FAQ schema markup, and creating content that directly answers customer questions are all DIY-friendly steps. However, a professional audit provides deeper analysis across all AI platforms and a structured optimization plan that typically delivers faster results.',
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

function Breadcrumb() {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex items-center gap-2 text-sm text-gray-500">
        <li>
          <a href="/" className="hover:text-orange-400 transition-colors">
            Home
          </a>
        </li>
        <li>/</li>
        <li>
          <a href="/blog" className="hover:text-orange-400 transition-colors">
            Blog
          </a>
        </li>
        <li>/</li>
        <li className="text-gray-400 truncate max-w-[250px]">{title}</li>
      </ol>
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
      <main
        className="min-h-screen"
        style={{ backgroundColor: '#0F1117', color: 'white' }}
      >
        <div className="max-w-4xl mx-auto px-6 py-20">
          <Breadcrumb />

          {/* Hero Section */}
          <div
            className="relative overflow-hidden rounded-2xl mb-12"
            style={{
              background:
                'linear-gradient(135deg, #1a0a00 0%, #1a1a2e 50%, #111827 100%)',
            }}
          >
            <svg
              className="absolute inset-0 w-full h-full opacity-10"
              viewBox="0 0 800 400"
              fill="none"
              aria-hidden="true"
            >
              <circle cx="320" cy="180" r="80" stroke="#F27D24" strokeWidth="1.5" fill="none" opacity="0.3" />
              <line x1="377" y1="237" x2="430" y2="290" stroke="#F27D24" strokeWidth="2" opacity="0.3" />
              <text x="290" y="175" fontFamily="monospace" fontSize="18" fill="#F27D24" opacity="0.2">AI?</text>
              <path d="M560 160 L580 185 L620 140" stroke="#F27D24" strokeWidth="2" fill="none" opacity="0.25" />
              <rect x="540" y="120" width="100" height="80" rx="8" stroke="#F27D24" strokeWidth="0.5" fill="none" opacity="0.15" />
              {[0, 1, 2, 3, 4, 5, 6, 7].map((i) =>
                [0, 1, 2, 3, 4].map((j) => (
                  <circle
                    key={`${i}-${j}`}
                    cx={80 + i * 90}
                    cy={60 + j * 80}
                    r="1.5"
                    fill="#F27D24"
                    opacity="0.12"
                  />
                ))
              )}
            </svg>
            <div className="relative px-8 py-16 sm:px-12 sm:py-20">
              <p className="inline-block text-sm font-medium text-orange-400 mb-4 border border-orange-500/30 rounded-full px-4 py-1">
                DIY Guide
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 font-plus-jakarta">
                The 5-Minute AI Visibility Audit You Can Do Right Now
              </h1>
            {/* Championship Cover Image */}
            <div className="ae-article-hero w-full rounded-xl overflow-hidden my-8" style={{ maxHeight: 440 }}>
              <img
                src="/blog/5-minute-ai-visibility-audit.webp"
                alt="5 minute ai visibility audit"
                style={{ width: '100%', height: 440, objectFit: 'cover', display: 'block' }}
                loading="eager"
              />
            </div>
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span>March 17, 2026</span>
                <span>-</span>
                <span>8 min read</span>
                <span>-</span>
                <span>Justin Borges</span>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="not-prose">
            <div className="ae-stats-grid">
              <div className="ae-stat-card">
                <div className="ae-stat-emoji">🔍</div>
                <div className="ae-stat-value ae-accent">5 min</div>
                <div className="ae-stat-label">AUDIT TIME</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-emoji">🤖</div>
                <div className="ae-stat-value ae-accent">3</div>
                <div className="ae-stat-label">AI PLATFORMS TESTED</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-emoji">📊</div>
                <div className="ae-stat-value ae-accent">800M+</div>
                <div className="ae-stat-label">CHATGPT WEEKLY USERS</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-emoji">⚡</div>
                <div className="ae-stat-value ae-accent">$0</div>
                <div className="ae-stat-label">COST TO RUN</div>
              </div>
            </div>
          </div>

          {/* Article Body */}
          <article className="prose prose-invert prose-lg max-w-none prose-headings:font-plus-jakarta prose-headings:text-white prose-p:text-gray-300 prose-a:text-[#F27D24] prose-a:no-underline hover:prose-a:underline prose-strong:text-white">

            {/* Intro */}
            <p className="text-xl text-gray-300 leading-relaxed mb-10">
              You probably know how your business ranks on Google. But do you know what
              happens when a potential customer asks ChatGPT, Perplexity, or Google AI
              for a recommendation in your category? AI search is growing fast. ChatGPT
              now has over 800 million weekly active users, Perplexity handles more than
              435 million search queries every month, and Google AI Overviews appear in
              roughly 25% of all Google searches. If AI platforms are not recommending your
              business, you are losing leads you never even knew existed. The good news:
              you can check your AI visibility right now, for free, in about five minutes.
             Markets fill fast. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Check your territory availability.</a></p>

            {/* Callout: The AI Search Shift */}
            <div className="not-prose">
              <div className="ae-callout ae-callout-warning">
                <div className="ae-callout-title">The AI Search Shift</div>
                <p>
                  AI-powered search engines now account for an estimated 12% to 18% of total
                  referral traffic, up from 5% to 8% in late 2024. Google AI Overviews alone
                  reach 2 billion monthly users globally. Yet most local businesses have never
                  checked whether AI platforms mention them at all.
                 Your first step: <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free AERO Blind Spot Scan.</a></p>
              </div>
            </div>

            {/* CTA Inline 1 */}
            <div className="not-prose">
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Get your free AI Visibility Report — 48-hour turnaround</a>
            </div>

            {/* Why This Audit Matters */}
            <div className="not-prose"><span className="ae-section-label">Why It Matters</span></div>
            <h2 className="text-2xl font-bold text-white mt-4 mb-4 font-plus-jakarta">
              Why This Audit Matters
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Traditional SEO and AI visibility are two different games with different rules.
              You might rank on the first page of Google and still be completely invisible
              to ChatGPT. That is because AI platforms pull recommendations from training
              data, live web crawls, structured data, and third-party directories rather
              than relying on traditional ranking signals like backlinks and keyword density.
             Reach out: <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>
            <p className="text-gray-300 leading-relaxed mb-4">
              A quick audit tells you three critical things: whether AI platforms know your
              business exists, what they say about you when asked, and whether they are
              recommending your competitors instead. Armed with that information, you can
              start fixing gaps before your competitors do.
             Call us at <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> today.</p>

            {/* Takeaway: Why it matters */}
            <div className="not-prose">
              <div className="ae-takeaway">
                <div className="ae-takeaway-title">The Core Problem</div>
                <p>
                  72% of local businesses have never tested their AI visibility. Meanwhile,
                  AI-powered search is capturing a growing share of high-intent commercial
                  queries. If you have not tested, you are flying blind while competitors
                  who have tested are already optimizing.
                 <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Lock in your exclusive territory now.</a></p>
              </div>
            </div>

            {/* Pros/Cons: SEO vs AI */}
            <div className="not-prose">
              <div className="ae-pros-cons">
                <div className="ae-pros-box">
                  <div className="ae-pros-title">Signs You Are Visible</div>
                  <ul>
                    <li>AI mentions your brand by name</li>
                    <li>Your business appears in top 3 recommendations</li>
                    <li>Information shown is accurate and current</li>
                    <li>Your website is cited as a source</li>
                  </ul>
                </div>
                <div className="ae-cons-box">
                  <div className="ae-cons-title">Red Flags</div>
                  <ul>
                    <li>AI recommends competitors instead of you</li>
                    <li>Your business is not mentioned at all</li>
                    <li>Outdated address, phone, or hours displayed</li>
                    <li>AI confuses you with another business</li>
                  </ul>
                </div>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed mb-6">
              If you want to understand the deeper mechanics behind how AI platforms choose
              which businesses to cite, check out our guide on{' '}
              <Link href="/blog/how-ai-platforms-choose-businesses-to-cite" className="text-orange-400 underline hover:text-orange-300">
                how AI platforms choose businesses to cite
              </Link>.
             <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Get your free AI readiness report.</a></p>

            {/* CTA Inline 2 */}
            <div className="not-prose">
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Get your free AI Visibility Report — 48-hour turnaround</a>
            </div>

            {/* The Audit: Step by Step */}
            <div className="not-prose"><span className="ae-section-label">The Audit</span></div>
            <h2 className="text-2xl font-bold text-white mt-4 mb-4 font-plus-jakarta">
              The 5-Minute AI Visibility Audit: Step by Step
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Grab a notepad or open a spreadsheet. You are going to run the same test across
              three platforms and score each one. Here is exactly what to do.
             Drop us a line at <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>

            {/* Timeline: 5 Steps */}
            <div className="not-prose">
              <div className="ae-timeline">
                <div className="ae-timeline-item">
                  <div className="ae-timeline-marker">1</div>
                  <div className="ae-timeline-content">
                    <div className="ae-timeline-title">Write Your Test Prompts (30 seconds)</div>
                    <div className="ae-timeline-desc">Craft 3 unbranded queries that mirror what real customers would ask.</div>
                  </div>
                </div>
                <div className="ae-timeline-item">
                  <div className="ae-timeline-marker">2</div>
                  <div className="ae-timeline-content">
                    <div className="ae-timeline-title">Test ChatGPT (60 seconds)</div>
                    <div className="ae-timeline-desc">Run all 3 prompts on chat.openai.com. Note if you are mentioned.</div>
                  </div>
                </div>
                <div className="ae-timeline-item">
                  <div className="ae-timeline-marker">3</div>
                  <div className="ae-timeline-content">
                    <div className="ae-timeline-title">Test Perplexity (60 seconds)</div>
                    <div className="ae-timeline-desc">Same 3 prompts on perplexity.ai. Check citation sources.</div>
                  </div>
                </div>
                <div className="ae-timeline-item">
                  <div className="ae-timeline-marker">4</div>
                  <div className="ae-timeline-content">
                    <div className="ae-timeline-title">Test Google AI Overviews (60 seconds)</div>
                    <div className="ae-timeline-desc">Search your queries on google.com. Look for the AI Overview box.</div>
                  </div>
                </div>
                <div className="ae-timeline-item">
                  <div className="ae-timeline-marker">5</div>
                  <div className="ae-timeline-content">
                    <div className="ae-timeline-title">Score Your Results (60 seconds)</div>
                    <div className="ae-timeline-desc">Rate each platform 0 to 3. Total your score out of 9.</div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Inline 3 */}
            <div className="not-prose">
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Get your free AI Visibility Report — 48-hour turnaround</a>
            </div>

            {/* Step 1 Detail */}
            <div className="not-prose"><span className="ae-section-label">Audit Step 1</span></div>
            <h3 className="text-xl font-bold text-white mt-4 mb-3 font-plus-jakarta">
              Step 1: Write Your Test Prompts (30 seconds)
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Before you open any AI tool, write down three prompts that mirror what your
              real customers would ask. Use unbranded, generic language. For example:
             One client per city. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">See if your market is available.</a></p>

            {/* Cheat Sheet: Test Prompts */}
            <div className="not-prose">
              <div className="ae-cheat-sheet">
                <div className="ae-cheat-sheet-title">Test Prompt Templates</div>
                <ul>
                  <li>&quot;What are the best [your service] companies in [your city]?&quot;</li>
                  <li>&quot;Who should I hire for [your service] in [your area]?&quot;</li>
                  <li>&quot;What should I look for when choosing a [your service] provider?&quot;</li>
                </ul>
              </div>
            </div>

            <div className="not-prose">
              <div className="ae-callout ae-callout-info">
                <div className="ae-callout-title">Pro Tip</div>
                <p>
                  The key is using unbranded queries. Asking &quot;tell me about [your business
                  name]&quot; tests name recognition. Asking generic questions tests whether AI
                  actually recommends you to new customers who have never heard of you.
                 Check where you stand: <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free Blind Spot Scan.</a></p>
              </div>
            </div>

            {/* Step 2 Detail */}
            <div className="not-prose"><span className="ae-section-label">Audit Step 2</span></div>
            <h3 className="text-xl font-bold text-white mt-4 mb-3 font-plus-jakarta">
              Step 2: Test ChatGPT (60 seconds)
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Go to <strong className="text-white">chat.openai.com</strong> and open a new
              conversation. You do not need a paid account for this. Paste each of your three
              prompts one at a time and note:
             <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Schedule a free 30-min call.</a></p>

            {/* Decision Matrix: What to Check on ChatGPT */}
            <div className="not-prose">
              <div className="ae-decision-matrix">
                <div className="ae-decision-matrix-title">ChatGPT Audit Checklist</div>
                <table>
                  <thead>
                    <tr>
                      <th>Check</th>
                      <th>What to Look For</th>
                      <th>Why It Matters</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Are you mentioned?</td>
                      <td>Your business name in the response</td>
                      <td>Basic visibility confirmation</td>
                    </tr>
                    <tr>
                      <td>Where are you listed?</td>
                      <td>Top 3 vs. position 8+</td>
                      <td>Position 1 to 3 gets the click</td>
                    </tr>
                    <tr>
                      <td>What does it say?</td>
                      <td>Accurate details vs. outdated info</td>
                      <td>Wrong data signals quality problems</td>
                    </tr>
                    <tr>
                      <td>Who else appears?</td>
                      <td>Competitor names and positioning</td>
                      <td>Valuable competitive intelligence</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed mb-6">
              ChatGPT draws heavily from Bing&apos;s index, which is why your{' '}
              <Link href="/blog/bing-places-chatgpt-connection" className="text-orange-400 underline hover:text-orange-300">
                Bing Places listing directly affects your ChatGPT visibility
              </Link>. If you have never claimed your Bing Places profile, that alone could
              explain why ChatGPT does not recommend you.
             Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> for a custom strategy.</p>

            {/* CTA Inline 4 */}
            <div className="not-prose">
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Get your free AI Visibility Report — 48-hour turnaround</a>
            </div>

            {/* Step 3 Detail */}
            <div className="not-prose"><span className="ae-section-label">Audit Step 3</span></div>
            <h3 className="text-xl font-bold text-white mt-4 mb-3 font-plus-jakarta">
              Step 3: Test Perplexity (60 seconds)
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Go to <strong className="text-white">perplexity.ai</strong> and run the same
              three prompts. Perplexity is uniquely valuable for this audit because it shows
              its sources with numbered citations. Look for:
             <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Secure your territory before a competitor does.</a></p>

            {/* Comparison Table: Perplexity Checks */}
            <div className="not-prose">
              <table className="ae-comparison-table">
                <thead>
                  <tr>
                    <th>Signal</th>
                    <th>Weight</th>
                    <th>Check</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Website cited as source</td>
                    <td>High</td>
                    <td>Look for your URL in numbered citations</td>
                  </tr>
                  <tr>
                    <td>Named in response text</td>
                    <td>Very High</td>
                    <td>Business name appears in the answer body</td>
                  </tr>
                  <tr>
                    <td>Competitor sources visible</td>
                    <td>Medium</td>
                    <td>Check citation links to see who Perplexity trusts most</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-300 leading-relaxed mb-6">
              Perplexity processes over 435 million search queries per month and growing.
              Its citation-based format means your content needs to be authoritative enough
              to be used as a source, not just mentioned in passing.
             <a href="https://theanswerengine.ai/blindspot" className="cta-inline">See your AI visibility score — free.</a></p>

            {/* CTA Inline 5 */}
            <div className="not-prose">
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Get your free AI Visibility Report — 48-hour turnaround</a>
            </div>

            {/* Step 4 Detail */}
            <div className="not-prose"><span className="ae-section-label">Audit Step 4</span></div>
            <h3 className="text-xl font-bold text-white mt-4 mb-3 font-plus-jakarta">
              Step 4: Test Google AI Overviews (60 seconds)
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Go to <strong className="text-white">google.com</strong> and search your test
              queries. Look at the top of the results page for the AI Overview box (the
              AI-generated summary that appears before traditional results). Note:
             Contact us at <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>
            <ul className="text-gray-300 mb-4 space-y-2">
              <li><strong className="text-white">Does an AI Overview appear?</strong> Not every query triggers one, but about 25% of searches now show AI Overviews.</li>
              <li><strong className="text-white">Are you mentioned or linked?</strong> AI Overviews pull from pages Google trusts for that topic.</li>
              <li><strong className="text-white">What type of content is cited?</strong> Google AI Overviews favor content with clear structure, FAQ sections, and schema markup.</li>
            </ul>

            <div className="not-prose">
              <div className="ae-callout ae-callout-warning">
                <div className="ae-callout-title">Commercial Queries Are Growing</div>
                <p>
                  AI Overviews have expanded from mostly informational queries to commercial
                  queries as well, jumping from 8% to 18% coverage of commercial searches. If
                  your service category triggers an AI Overview and you are not in it, you are
                  losing clicks to whoever is.
                 Reach us at <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.</p>
              </div>
            </div>

            {/* CTA Inline 6 */}
            <div className="not-prose">
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Get your free AI Visibility Report — 48-hour turnaround</a>
            </div>

            {/* Step 5 Detail */}
            <div className="not-prose"><span className="ae-section-label">Audit Step 5</span></div>
            <h3 className="text-xl font-bold text-white mt-4 mb-3 font-plus-jakarta">
              Step 5: Score Your Results (60 seconds)
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              For each platform, give yourself a score using this simple framework:
             Find your gaps with a <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free AERO scan.</a></p>

            {/* Bar Group: Scoring Framework */}
            <div className="not-prose">
              <div className="ae-bar-group">
                <div className="ae-bar-group-title">Scoring Framework (Per Platform)</div>
                <div className="ae-bar-item">
                  <div className="ae-bar-label">Strong (3 pts): Named, accurate, top 3</div>
                  <div className="ae-bar-track"><div className="ae-bar-fill" style={{ width: '100%' }}></div></div>
                  <div className="ae-bar-value">3/3</div>
                </div>
                <div className="ae-bar-item">
                  <div className="ae-bar-label">Partial (2 pts): Mentioned but not prominent</div>
                  <div className="ae-bar-track"><div className="ae-bar-fill" style={{ width: '66%' }}></div></div>
                  <div className="ae-bar-value">2/3</div>
                </div>
                <div className="ae-bar-item">
                  <div className="ae-bar-label">Weak (1 pt): Sporadic, inconsistent</div>
                  <div className="ae-bar-track"><div className="ae-bar-fill" style={{ width: '33%' }}></div></div>
                  <div className="ae-bar-value">1/3</div>
                </div>
                <div className="ae-bar-item">
                  <div className="ae-bar-label">Invisible (0 pts): No mention at all</div>
                  <div className="ae-bar-track"><div className="ae-bar-fill" style={{ width: '5%' }}></div></div>
                  <div className="ae-bar-value">0/3</div>
                </div>
              </div>
            </div>

            {/* Comparison Table: Score Interpretation */}
            <div className="not-prose">
              <table className="ae-comparison-table">
                <thead>
                  <tr>
                    <th>Total Score</th>
                    <th>Rating</th>
                    <th>What It Means</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>7 to 9</td>
                    <td>Strong</td>
                    <td>Focus on monitoring and maintaining your position</td>
                  </tr>
                  <tr>
                    <td>4 to 6</td>
                    <td>Partial</td>
                    <td>You have a foundation but significant gaps to close</td>
                  </tr>
                  <tr>
                    <td>1 to 3</td>
                    <td>Weak</td>
                    <td>AI platforms barely know you exist. Urgent action needed</td>
                  </tr>
                  <tr>
                    <td>0</td>
                    <td>Invisible</td>
                    <td>Every competitor with any AI presence is ahead of you</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Callout: Visibility Can Disappear */}
            <div className="not-prose">
              <div className="ae-callout ae-callout-warning">
                <div className="ae-callout-title">Visibility Can Disappear Fast</div>
                <p>
                  AI visibility is not a &quot;set it and forget it&quot; metric. Research shows
                  a brand can lose a third of its AI presence in just over a month. That is why
                  running this audit monthly (or weekly, if you are actively optimizing) is
                  essential. The businesses that monitor consistently are the ones that keep
                  showing up.
                 <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Schedule a free call</a> to see where you stand.</p>
              </div>
            </div>

            {/* CTA Inline 7 */}
            <div className="not-prose">
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Get your free AI Visibility Report — 48-hour turnaround</a>
            </div>

            {/* What to Do With Your Results */}
            <div className="not-prose"><span className="ae-section-label">Action Plan</span></div>
            <h2 className="text-2xl font-bold text-white mt-4 mb-4 font-plus-jakarta">
              What to Do With Your Results
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              If your audit revealed gaps, here are the highest-impact fixes you can start
              today, ranked by effort and payoff:
             Call <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> for a free consultation.</p>

            {/* Decision Matrix: Fix Priority */}
            <div className="not-prose">
              <div className="ae-decision-matrix">
                <div className="ae-decision-matrix-title">Fix Priority Matrix</div>
                <table>
                  <thead>
                    <tr>
                      <th>Action</th>
                      <th>Effort</th>
                      <th>Impact</th>
                      <th>Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Claim Bing Places listing</td>
                      <td>Low</td>
                      <td>Very High</td>
                      <td>10 min</td>
                    </tr>
                    <tr>
                      <td>Verify Google Business Profile</td>
                      <td>Low</td>
                      <td>High</td>
                      <td>15 min</td>
                    </tr>
                    <tr>
                      <td>Audit NAP consistency</td>
                      <td>Low</td>
                      <td>High</td>
                      <td>20 min</td>
                    </tr>
                    <tr>
                      <td>Add schema markup</td>
                      <td>Medium</td>
                      <td>Very High</td>
                      <td>1 to 2 hrs</td>
                    </tr>
                    <tr>
                      <td>Create FAQ content</td>
                      <td>Medium</td>
                      <td>High</td>
                      <td>1 to 2 hrs</td>
                    </tr>
                    <tr>
                      <td>Build authoritative content</td>
                      <td>High</td>
                      <td>Very High</td>
                      <td>Ongoing</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* CTA Inline 8 */}
            <div className="not-prose">
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Get your free AI Visibility Report — 48-hour turnaround</a>
            </div>

            <h3 className="text-xl font-bold text-white mt-8 mb-3 font-plus-jakarta">
              Quick Wins (Under 30 Minutes)
            </h3>

            <div className="not-prose">
              <div className="ae-callout ae-callout-success">
                <div className="ae-callout-title">Highest Impact, Lowest Effort</div>
                <p>
                  Claiming your Bing Places listing is the single most impactful step for ChatGPT
                  visibility. ChatGPT relies on Bing&apos;s data. It takes 10 minutes, and it is free.
                 <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Run your free AI Blind Spot Scan.</a></p>
              </div>
            </div>

            <ul className="text-gray-300 mb-6 space-y-2">
              <li><strong className="text-white">Claim your Bing Places listing.</strong> This is the single most impactful step for ChatGPT visibility since ChatGPT relies on Bing&apos;s data. It takes 10 minutes and it is free.</li>
              <li><strong className="text-white">Verify your Google Business Profile.</strong> While your GBP does not directly feed ChatGPT, it influences Google AI Overviews and helps establish your entity across the web. Learn more about{' '}
                <Link href="/blog/chatgpt-cant-see-google-business-profile" className="text-orange-400 underline hover:text-orange-300">
                  why ChatGPT cannot see your Google Business Profile
                </Link> and what to do about it.
              </li>
              <li><strong className="text-white">Audit your NAP consistency.</strong> Make sure your business Name, Address, and Phone number are identical across every directory. AI platforms cross-reference multiple sources, and mismatches reduce trust.</li>
            </ul>

            {/* CTA Inline 9 */}
            <div className="not-prose">
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Get your free AI Visibility Report — 48-hour turnaround</a>
            </div>

            <h3 className="text-xl font-bold text-white mt-8 mb-3 font-plus-jakarta">
              Medium Effort (1 to 2 Hours)
            </h3>
            <ul className="text-gray-300 mb-6 space-y-2">
              <li><strong className="text-white">Add schema markup to your website.</strong> Start with LocalBusiness, FAQPage, and Organization schema. Pages with structured data get 30% more clicks according to BrightEdge research, and Google, Microsoft, and OpenAI have all confirmed they use schema for AI features. Our guide on{' '}
                <Link href="/blog/does-schema-markup-help-ai-search" className="text-orange-400 underline hover:text-orange-300">
                  schema markup and AI search
                </Link> walks you through exactly which types to implement.
              </li>
              <li><strong className="text-white">Create FAQ content on your site.</strong> Write pages that directly answer the questions your customers ask. AI platforms prioritize content that clearly addresses specific questions over generic service descriptions.</li>
            </ul>

            {/* Takeaway: Schema */}
            <div className="not-prose">
              <div className="ae-takeaway">
                <div className="ae-takeaway-title">Schema Markup Is Non-Negotiable</div>
                <p>
                  Structured data is the language AI platforms understand best. Without
                  LocalBusiness, FAQPage, and Organization schema on your website, AI has
                  to guess what your business does, where it operates, and whether it is
                  trustworthy. That guessing game rarely ends in your favor.
                 Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> to get started.</p>
              </div>
            </div>

            <h3 className="text-xl font-bold text-white mt-8 mb-3 font-plus-jakarta">
              Ongoing Strategy
            </h3>
            <ul className="text-gray-300 mb-6 space-y-2">
              <li><strong className="text-white">Build authoritative content.</strong> Publish helpful, factual content about your industry. AI platforms favor sources they can cite with confidence.</li>
              <li><strong className="text-white">Collect and respond to reviews.</strong> Reviews on Google, Yelp, and industry-specific platforms feed into AI training data and influence recommendations.</li>
              <li><strong className="text-white">Monitor monthly.</strong> Re-run this audit on the first of every month. Track your scores over time to see what is working and what needs attention.</li>
            </ul>

            {/* CTA Inline 10 */}
            <div className="not-prose">
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Get your free AI Visibility Report — 48-hour turnaround</a>
            </div>

            {/* Common Mistakes */}
            <div className="not-prose"><span className="ae-section-label">Avoid These</span></div>
            <h2 className="text-2xl font-bold text-white mt-4 mb-4 font-plus-jakarta">
              Common Mistakes That Kill AI Visibility
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              During our research, we see the same patterns over and over with businesses
              that score poorly on AI visibility audits:
            </p>

            {/* Comparison Table: Mistakes */}
            <div className="not-prose">
              <table className="ae-comparison-table">
                <thead>
                  <tr>
                    <th>Mistake</th>
                    <th>Why It Hurts</th>
                    <th>Fix</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Ignoring Bing entirely</td>
                    <td>Bing feeds ChatGPT (800M+ weekly users)</td>
                    <td>Claim Bing Places in 10 min</td>
                  </tr>
                  <tr>
                    <td>No structured data</td>
                    <td>AI guesses what your content means</td>
                    <td>Add LocalBusiness and FAQ schema</td>
                  </tr>
                  <tr>
                    <td>Inconsistent NAP</td>
                    <td>AI loses trust, skips recommending you</td>
                    <td>Audit all directory listings</td>
                  </tr>
                  <tr>
                    <td>Generic website content</td>
                    <td>Nothing specific for AI to cite</td>
                    <td>Answer real customer questions</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="not-prose">
              <div className="ae-callout ae-callout-info">
                <div className="ae-callout-title">The Bing Blind Spot</div>
                <p>
                  Most local businesses optimize only for Google. But Bing&apos;s data feeds ChatGPT,
                  which now has over 800 million weekly active users. Skipping Bing means skipping
                  ChatGPT. That is a massive audience to ignore.
                </p>
              </div>
            </div>

            {/* CTA Inline 11 */}
            <div className="not-prose">
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Get your free AI Visibility Report — 48-hour turnaround</a>
            </div>

            {/* DIY vs Professional */}
            <div className="not-prose"><span className="ae-section-label">DIY vs. Pro</span></div>
            <h2 className="text-2xl font-bold text-white mt-4 mb-4 font-plus-jakarta">
              The DIY Audit vs. a Professional Analysis
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              The 5-minute audit above gives you a solid snapshot of where you stand. It
              covers the essentials: are you visible, what are AI platforms saying, and how
              do you compare to competitors on the surface level.
            </p>

            {/* Comparison Table: DIY vs Pro */}
            <div className="not-prose">
              <table className="ae-comparison-table">
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th>5-Minute DIY Audit</th>
                    <th>Professional Analysis</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Prompt variations tested</td>
                    <td>3</td>
                    <td>Dozens</td>
                  </tr>
                  <tr>
                    <td>Platforms covered</td>
                    <td>3 major</td>
                    <td>All major AI platforms</td>
                  </tr>
                  <tr>
                    <td>Structured data audit</td>
                    <td>No</td>
                    <td>Yes, full analysis</td>
                  </tr>
                  <tr>
                    <td>Competitor mapping</td>
                    <td>Basic</td>
                    <td>Comprehensive landscape</td>
                  </tr>
                  <tr>
                    <td>Action plan</td>
                    <td>Generic tips</td>
                    <td>Prioritized, business-specific</td>
                  </tr>
                  <tr>
                    <td>Cost</td>
                    <td>Free</td>
                    <td>Free (Blind Spot Report)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Quote */}
            <div className="not-prose">
              <div className="ae-quote">
                <p>Think of the DIY audit as checking your own blood pressure at home. It tells you if something needs attention. The professional analysis is the full physical exam that tells you exactly what to fix and in what order.</p>
              </div>
            </div>

            {/* CTA Inline 12 */}
            <div className="not-prose">
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Get your free AI Visibility Report — 48-hour turnaround</a>
            </div>

            {/* Platform-by-Platform Breakdown */}
            <div className="not-prose"><span className="ae-section-label">Platform Breakdown</span></div>
            <h2 className="text-2xl font-bold text-white mt-4 mb-4 font-plus-jakarta">
              How Each AI Platform Sources Its Answers
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Each major AI platform pulls from different data sources. Understanding these
              differences helps you prioritize where to focus your optimization efforts.
            </p>

            {/* Bar Group: Platform Data Sources */}
            <div className="not-prose">
              <div className="ae-bar-group">
                <div className="ae-bar-group-title">Platform Reliance on Key Data Sources</div>
                <div className="ae-bar-item">
                  <div className="ae-bar-label">ChatGPT: Bing Index</div>
                  <div className="ae-bar-track"><div className="ae-bar-fill" style={{ width: '95%' }}></div></div>
                  <div className="ae-bar-value">95%</div>
                </div>
                <div className="ae-bar-item">
                  <div className="ae-bar-label">Perplexity: Web Crawl + Citations</div>
                  <div className="ae-bar-track"><div className="ae-bar-fill" style={{ width: '88%' }}></div></div>
                  <div className="ae-bar-value">88%</div>
                </div>
                <div className="ae-bar-item">
                  <div className="ae-bar-label">Google AI: Search Index + Knowledge Graph</div>
                  <div className="ae-bar-track"><div className="ae-bar-fill" style={{ width: '92%' }}></div></div>
                  <div className="ae-bar-value">92%</div>
                </div>
                <div className="ae-bar-item">
                  <div className="ae-bar-label">All Platforms: Schema Markup</div>
                  <div className="ae-bar-track"><div className="ae-bar-fill" style={{ width: '85%' }}></div></div>
                  <div className="ae-bar-value">85%</div>
                </div>
                <div className="ae-bar-item">
                  <div className="ae-bar-label">All Platforms: Review Signals</div>
                  <div className="ae-bar-track"><div className="ae-bar-fill" style={{ width: '72%' }}></div></div>
                  <div className="ae-bar-value">72%</div>
                </div>
              </div>
            </div>

            {/* CTA Inline 13 */}
            <div className="not-prose">
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Get your free AI Visibility Report — 48-hour turnaround</a>
            </div>

            {/* Key Signals Cheat Sheet */}
            <div className="not-prose"><span className="ae-section-label">Quick Reference</span></div>
            <h2 className="text-2xl font-bold text-white mt-4 mb-4 font-plus-jakarta">
              AI Visibility Signals Cheat Sheet
            </h2>

            <div className="not-prose">
              <div className="ae-cheat-sheet">
                <div className="ae-cheat-sheet-title">Top Signals AI Platforms Use</div>
                <ul>
                  <li>Structured data (schema markup): LocalBusiness, FAQPage, Organization</li>
                  <li>Consistent NAP across all directories and platforms</li>
                  <li>Claimed Bing Places profile (critical for ChatGPT)</li>
                  <li>Authoritative, question-answering content on your website</li>
                  <li>Positive reviews on Google, Yelp, and industry platforms</li>
                  <li>Active, verified Google Business Profile</li>
                </ul>
              </div>
            </div>

            {/* Bar Group: Signal Impact */}
            <div className="not-prose">
              <div className="ae-bar-group">
                <div className="ae-bar-group-title">Signal Impact on AI Visibility</div>
                <div className="ae-bar-item">
                  <div className="ae-bar-label">Schema Markup</div>
                  <div className="ae-bar-track"><div className="ae-bar-fill" style={{ width: '95%' }}></div></div>
                  <div className="ae-bar-value">95%</div>
                </div>
                <div className="ae-bar-item">
                  <div className="ae-bar-label">Bing Places Profile</div>
                  <div className="ae-bar-track"><div className="ae-bar-fill" style={{ width: '90%' }}></div></div>
                  <div className="ae-bar-value">90%</div>
                </div>
                <div className="ae-bar-item">
                  <div className="ae-bar-label">NAP Consistency</div>
                  <div className="ae-bar-track"><div className="ae-bar-fill" style={{ width: '85%' }}></div></div>
                  <div className="ae-bar-value">85%</div>
                </div>
                <div className="ae-bar-item">
                  <div className="ae-bar-label">FAQ Content</div>
                  <div className="ae-bar-track"><div className="ae-bar-fill" style={{ width: '80%' }}></div></div>
                  <div className="ae-bar-value">80%</div>
                </div>
                <div className="ae-bar-item">
                  <div className="ae-bar-label">Review Volume</div>
                  <div className="ae-bar-track"><div className="ae-bar-fill" style={{ width: '70%' }}></div></div>
                  <div className="ae-bar-value">70%</div>
                </div>
                <div className="ae-bar-item">
                  <div className="ae-bar-label">Google Business Profile</div>
                  <div className="ae-bar-track"><div className="ae-bar-fill" style={{ width: '65%' }}></div></div>
                  <div className="ae-bar-value">65%</div>
                </div>
              </div>
            </div>

            {/* CTA Inline 14 */}
            <div className="not-prose">
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Get your free AI Visibility Report — 48-hour turnaround</a>
            </div>

            {/* Monthly Audit Checklist */}
            <div className="not-prose"><span className="ae-section-label">Monthly Protocol</span></div>
            <h2 className="text-2xl font-bold text-white mt-4 mb-4 font-plus-jakarta">
              Your Monthly AI Audit Checklist
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              One audit is a snapshot. Consistent monitoring is what separates businesses
              that maintain AI visibility from those that lose it. Use this checklist on
              the first of every month.
            </p>

            <div className="not-prose">
              <div className="ae-cheat-sheet">
                <div className="ae-cheat-sheet-title">Monthly AI Audit Checklist</div>
                <table>
                  <thead>
                    <tr>
                      <th>Task</th>
                      <th>Time</th>
                      <th>Frequency</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Run 3 test prompts on ChatGPT</td>
                      <td>2 min</td>
                      <td>Monthly</td>
                    </tr>
                    <tr>
                      <td>Run 3 test prompts on Perplexity</td>
                      <td>2 min</td>
                      <td>Monthly</td>
                    </tr>
                    <tr>
                      <td>Check Google AI Overviews</td>
                      <td>2 min</td>
                      <td>Monthly</td>
                    </tr>
                    <tr>
                      <td>Compare scores to last month</td>
                      <td>1 min</td>
                      <td>Monthly</td>
                    </tr>
                    <tr>
                      <td>Check for new competitor entries</td>
                      <td>3 min</td>
                      <td>Monthly</td>
                    </tr>
                    <tr>
                      <td>Verify NAP accuracy</td>
                      <td>5 min</td>
                      <td>Quarterly</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Callout: Tracking over time */}
            <div className="not-prose">
              <div className="ae-callout ae-callout-success">
                <div className="ae-callout-title">Track Your Progress</div>
                <p>
                  Create a simple spreadsheet with columns for date, platform, score, and notes.
                  After three months, you will have a clear trend line showing whether your
                  optimizations are working. If your score drops two months in a row, it is time
                  to investigate what changed.
                </p>
              </div>
            </div>

            {/* CTA Inline 15 */}
            <div className="not-prose">
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Get your free AI Visibility Report — 48-hour turnaround</a>
            </div>

            {/* Takeaway */}
            <div className="not-prose">
              <div className="ae-takeaway">
                <div className="ae-takeaway-title">Key Takeaway</div>
                <p>
                  AI search is not replacing Google. It is adding a new layer on top. Businesses
                  that show up on both traditional search and AI platforms will capture leads
                  from every direction. The 5-minute audit is your starting point. Run it today,
                  score your results, and take action on the gaps. The businesses that move first
                  will own the AI recommendations in their category.
                </p>
              </div>
            </div>

          </article>

          {/* Author Card */}
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

          {/* Full CTA Block */}
          <div className="not-prose">
            <div className="ae-cta-block not-prose my-16">
              <h3>Your Free AI Visibility Tool — See How ChatGPT, Perplexity &amp; Google AI See Your Business</h3>
              <p>2,400 businesses/month search for AI visibility tools. Most discover they&apos;re invisible. Our Blind Spot Report shows exactly which engines cite you, which ignore you, and what to fix — 48-hour turnaround.</p>
              <a href="https://theanswerengine.ai/blindspot" className="ae-cta-primary">Get Free AI Visibility Report →</a>
              <div style={{ marginTop: '16px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <a href="tel:+12134442229" className="ae-cta-secondary">(213) 444-2229</a>
                <a href="https://calendly.com/theanswerengine-support/30min" className="ae-cta-secondary">Book Free Call</a>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <section className="mt-16 mb-16">
            <h2 className="text-2xl font-bold text-white mb-8 font-plus-jakarta">
              Frequently Asked Questions
            </h2>
            <div className="grid gap-4">
              {[
                {
                  q: 'How long does an AI visibility audit take?',
                  a: 'A basic audit takes about 5 minutes. Run the same test prompts across ChatGPT, Perplexity, and Google AI Overviews, then score your results. A more thorough audit with competitor analysis and source tracking can take 15 to 20 minutes.',
                },
                {
                  q: 'Do I need a paid ChatGPT account to test my AI visibility?',
                  a: 'No. The free versions of ChatGPT, Perplexity, and Google are sufficient for a basic visibility audit. Free accounts will show you whether AI platforms mention your business in response to customer-style queries.',
                },
                {
                  q: 'Why does my business rank on Google but not show up on ChatGPT?',
                  a: 'Google rankings and AI recommendations use completely different systems. Google relies on backlinks, keywords, and page authority. AI platforms like ChatGPT pull from training data, web crawls, and structured signals like schema markup. You can rank number one on Google and still be invisible to ChatGPT.',
                },
                {
                  q: 'How often should I run an AI visibility audit?',
                  a: 'At minimum, once per month. AI models update their knowledge bases regularly, and a brand can lose a third of its AI visibility in just a few weeks. Weekly checks are ideal if you are actively optimizing for AI search.',
                },
                {
                  q: 'What are the most important signals for AI visibility?',
                  a: 'The top signals include structured data (schema markup), consistent NAP information across directories, a claimed Bing Places profile, authoritative FAQ content, and positive reviews on major platforms. Pages with structured data get 30% more clicks and are significantly more likely to be cited by AI.',
                },
                {
                  q: 'Can I improve my AI visibility without hiring an agency?',
                  a: 'You can make meaningful improvements on your own. Claiming your Bing Places listing, adding FAQ schema markup, and creating content that directly answers customer questions are all DIY-friendly steps. A professional audit provides deeper analysis and a structured optimization plan for faster results.',
                },
              ].map((faq, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-gray-800 bg-gray-900/50 p-6"
                >
                  <h3 className="text-white font-semibold mb-2">{faq.q}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Final CTA */}
          <div className="not-prose">
          <section className="ae-final-cta not-prose">
            <div className="ae-final-cta-inner">
              <h2 className="text-2xl sm:text-3xl font-black mb-4 text-white font-headline uppercase tracking-tighter">
                How to Improve Brand Visibility in AI Search Engines — Starting Today
              </h2>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                2,900 businesses/month search for exactly this. The Answer Engine improves your citation rate across ChatGPT, Perplexity, Gemini, and Google AI Overviews. One market slot. Free scan to start.
              </p>
              <a
                href="https://theanswerengine.ai/blindspot"
                className="inline-flex items-center justify-center gap-2 bg-[#F27D24] text-black font-black px-10 py-4 tracking-tighter hover:translate-y-[2px] transition-transform font-headline uppercase"
              >
                Improve Your AI Visibility — Free Scan
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
          </div>

        </div>
      </main>
    </>
  )
}
