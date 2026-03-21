import type { Metadata } from 'next'
import Link from 'next/link'

export const revalidate = 86400
export const dynamic = 'force-static'
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
              {/* Magnifying glass / audit pattern */}
              <circle cx="320" cy="180" r="80" stroke="#FF6A00" strokeWidth="1.5" fill="none" opacity="0.3" />
              <line x1="377" y1="237" x2="430" y2="290" stroke="#FF6A00" strokeWidth="2" opacity="0.3" />
              <text x="290" y="175" fontFamily="monospace" fontSize="18" fill="#FF6A00" opacity="0.2">AI?</text>
              {/* Checkmark pattern */}
              <path d="M560 160 L580 185 L620 140" stroke="#FF6A00" strokeWidth="2" fill="none" opacity="0.25" />
              <rect x="540" y="120" width="100" height="80" rx="8" stroke="#FF6A00" strokeWidth="0.5" fill="none" opacity="0.15" />
              {/* Dots grid */}
              {[0, 1, 2, 3, 4, 5, 6, 7].map((i) =>
                [0, 1, 2, 3, 4].map((j) => (
                  <circle
                    key={`${i}-${j}`}
                    cx={80 + i * 90}
                    cy={60 + j * 80}
                    r="1.5"
                    fill="#FF6A00"
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
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span>March 17, 2026</span>
                <span>-</span>
                <span>8 min read</span>
                <span>-</span>
                <span>The Answer Engine Team</span>
              </div>
            </div>
          </div>

          {/* Article Body */}
          <article className="prose prose-invert prose-lg max-w-none">

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
            </p>

            {/* Stat Callout 1 */}
            <div className="rounded-xl border border-orange-500/30 bg-orange-500/5 p-6 mb-10">
              <p className="text-orange-400 font-semibold text-lg mb-2">The AI Search Shift</p>
              <p className="text-gray-300 text-base leading-relaxed">
                AI-powered search engines now account for an estimated 12% to 18% of total
                referral traffic, up from 5% to 8% in late 2024. Google AI Overviews alone
                reach 2 billion monthly users globally. Yet most local businesses have never
                checked whether AI platforms mention them at all.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4 font-plus-jakarta">
              Why This Audit Matters
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Traditional SEO and AI visibility are two different games with different rules.
              You might rank on the first page of Google and still be completely invisible
              to ChatGPT. That is because AI platforms pull recommendations from training
              data, live web crawls, structured data, and third-party directories rather
              than relying on traditional ranking signals like backlinks and keyword density.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              A quick audit tells you three critical things: whether AI platforms know your
              business exists, what they say about you when asked, and whether they are
              recommending your competitors instead. Armed with that information, you can
              start fixing gaps before your competitors do.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              If you want to understand the deeper mechanics behind how AI platforms choose
              which businesses to cite, check out our guide on{' '}
              <Link href="/blog/how-ai-platforms-choose-businesses-to-cite" className="text-orange-400 underline hover:text-orange-300">
                how AI platforms choose businesses to cite
              </Link>.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4 font-plus-jakarta">
              The 5-Minute AI Visibility Audit: Step by Step
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Grab a notepad or open a spreadsheet. You are going to run the same test across
              three platforms and score each one. Here is exactly what to do.
            </p>

            {/* Step 1 */}
            <h3 className="text-xl font-bold text-white mt-8 mb-3 font-plus-jakarta">
              Step 1: Write Your Test Prompts (30 seconds)
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Before you open any AI tool, write down three prompts that mirror what your
              real customers would ask. Use unbranded, generic language. For example:
            </p>
            <ul className="text-gray-300 mb-4 space-y-2">
              <li>&quot;What are the best [your service] companies in [your city]?&quot;</li>
              <li>&quot;Who should I hire for [your service] in [your area]?&quot;</li>
              <li>&quot;What should I look for when choosing a [your service] provider?&quot;</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mb-6">
              The key is using unbranded queries. Asking &quot;tell me about [your business
              name]&quot; tests name recognition. Asking generic questions tests whether AI
              actually recommends you to new customers who have never heard of you.
            </p>

            {/* Step 2 */}
            <h3 className="text-xl font-bold text-white mt-8 mb-3 font-plus-jakarta">
              Step 2: Test ChatGPT (60 seconds)
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Go to <strong className="text-white">chat.openai.com</strong> and open a new
              conversation. You do not need a paid account for this. Paste each of your three
              prompts one at a time and note:
            </p>
            <ul className="text-gray-300 mb-4 space-y-2">
              <li><strong className="text-white">Are you mentioned?</strong> Look for your business name in the response.</li>
              <li><strong className="text-white">Where are you listed?</strong> Being in the top 3 suggestions matters more than being listed at position 8.</li>
              <li><strong className="text-white">What does it say?</strong> Is the information accurate? Outdated details or wrong addresses signal a data quality problem.</li>
              <li><strong className="text-white">Who else appears?</strong> Write down which competitors are recommended. This is valuable competitive intelligence.</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mb-6">
              ChatGPT draws heavily from Bing&apos;s index, which is why your{' '}
              <Link href="/blog/bing-places-chatgpt-connection" className="text-orange-400 underline hover:text-orange-300">
                Bing Places listing directly affects your ChatGPT visibility
              </Link>. If you have never claimed your Bing Places profile, that alone could
              explain why ChatGPT does not recommend you.
            </p>

            {/* Step 3 */}
            <h3 className="text-xl font-bold text-white mt-8 mb-3 font-plus-jakarta">
              Step 3: Test Perplexity (60 seconds)
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Go to <strong className="text-white">perplexity.ai</strong> and run the same
              three prompts. Perplexity is uniquely valuable for this audit because it shows
              its sources with numbered citations. Look for:
            </p>
            <ul className="text-gray-300 mb-4 space-y-2">
              <li><strong className="text-white">Is your website cited as a source?</strong> If Perplexity links to your site, it means AI is actively pulling data from your pages.</li>
              <li><strong className="text-white">Are you named in the response text?</strong> Being cited as a source is good. Being named in the answer is better.</li>
              <li><strong className="text-white">Which competitor sources appear?</strong> Check the citation links to see whose content Perplexity trusts most in your category.</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mb-6">
              Perplexity processes over 435 million search queries per month and growing.
              Its citation-based format means your content needs to be authoritative enough
              to be used as a source, not just mentioned in passing.
            </p>

            {/* Step 4 */}
            <h3 className="text-xl font-bold text-white mt-8 mb-3 font-plus-jakarta">
              Step 4: Test Google AI Overviews (60 seconds)
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Go to <strong className="text-white">google.com</strong> and search your test
              queries. Look at the top of the results page for the AI Overview box (the
              AI-generated summary that appears before traditional results). Note:
            </p>
            <ul className="text-gray-300 mb-4 space-y-2">
              <li><strong className="text-white">Does an AI Overview appear?</strong> Not every query triggers one, but about 25% of searches now show AI Overviews.</li>
              <li><strong className="text-white">Are you mentioned or linked?</strong> AI Overviews pull from pages Google trusts for that topic.</li>
              <li><strong className="text-white">What type of content is cited?</strong> Google AI Overviews favor content with clear structure, FAQ sections, and schema markup.</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mb-6">
              AI Overviews have expanded from mostly informational queries to commercial
              queries as well, jumping from 8% to 18% coverage of commercial searches. If
              your service category triggers an AI Overview and you are not in it, you are
              losing clicks to whoever is.
            </p>

            {/* Step 5 */}
            <h3 className="text-xl font-bold text-white mt-8 mb-3 font-plus-jakarta">
              Step 5: Score Your Results (60 seconds)
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              For each platform, give yourself a score using this simple framework:
            </p>
            <div className="bg-gray-800/50 rounded-xl p-6 mb-6">
              <ul className="text-gray-300 space-y-3">
                <li><strong className="text-green-400">Strong (3 points):</strong> Your business is named, information is accurate, and you appear in the top 3 recommendations.</li>
                <li><strong className="text-yellow-400">Partial (2 points):</strong> You are mentioned but not prominently, or information is outdated or partially inaccurate.</li>
                <li><strong className="text-orange-400">Weak (1 point):</strong> You appear in some queries but not others, or only on one platform out of three.</li>
                <li><strong className="text-red-400">Invisible (0 points):</strong> No mention at all. The AI does not know your business exists.</li>
              </ul>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              <strong className="text-white">Maximum score: 9 points</strong> (3 points on each
              of 3 platforms). Here is how to interpret your total:
            </p>
            <ul className="text-gray-300 mb-6 space-y-2">
              <li><strong className="text-white">7 to 9:</strong> Strong AI presence. Focus on monitoring and maintaining your position.</li>
              <li><strong className="text-white">4 to 6:</strong> Partial visibility. You have a foundation but significant gaps to close.</li>
              <li><strong className="text-white">1 to 3:</strong> Weak presence. AI platforms barely know you exist. Urgent optimization needed.</li>
              <li><strong className="text-white">0:</strong> Completely invisible. Every competitor with any AI presence is ahead of you.</li>
            </ul>

            {/* Stat Callout 2 */}
            <div className="rounded-xl border border-orange-500/30 bg-orange-500/5 p-6 mb-10">
              <p className="text-orange-400 font-semibold text-lg mb-2">Visibility Can Disappear Fast</p>
              <p className="text-gray-300 text-base leading-relaxed">
                AI visibility is not a &quot;set it and forget it&quot; metric. Research shows
                a brand can lose a third of its AI presence in just over a month. That is why
                running this audit monthly (or weekly, if you are actively optimizing) is
                essential. The businesses that monitor consistently are the ones that keep
                showing up.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4 font-plus-jakarta">
              What to Do With Your Results
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              If your audit revealed gaps, here are the highest-impact fixes you can start
              today, ranked by effort and payoff:
            </p>

            <h3 className="text-xl font-bold text-white mt-8 mb-3 font-plus-jakarta">
              Quick Wins (Under 30 Minutes)
            </h3>
            <ul className="text-gray-300 mb-6 space-y-2">
              <li><strong className="text-white">Claim your Bing Places listing.</strong> This is the single most impactful step for ChatGPT visibility since ChatGPT relies on Bing&apos;s data. It takes 10 minutes and it is free.</li>
              <li><strong className="text-white">Verify your Google Business Profile.</strong> While your GBP does not directly feed ChatGPT, it influences Google AI Overviews and helps establish your entity across the web. Learn more about{' '}
                <Link href="/blog/chatgpt-cant-see-google-business-profile" className="text-orange-400 underline hover:text-orange-300">
                  why ChatGPT cannot see your Google Business Profile
                </Link> and what to do about it.
              </li>
              <li><strong className="text-white">Audit your NAP consistency.</strong> Make sure your business Name, Address, and Phone number are identical across every directory. AI platforms cross-reference multiple sources, and mismatches reduce trust.</li>
            </ul>

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

            <h3 className="text-xl font-bold text-white mt-8 mb-3 font-plus-jakarta">
              Ongoing Strategy
            </h3>
            <ul className="text-gray-300 mb-6 space-y-2">
              <li><strong className="text-white">Build authoritative content.</strong> Publish helpful, factual content about your industry. AI platforms favor sources they can cite with confidence.</li>
              <li><strong className="text-white">Collect and respond to reviews.</strong> Reviews on Google, Yelp, and industry-specific platforms feed into AI training data and influence recommendations.</li>
              <li><strong className="text-white">Monitor monthly.</strong> Re-run this audit on the first of every month. Track your scores over time to see what is working and what needs attention.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4 font-plus-jakarta">
              Common Mistakes That Kill AI Visibility
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              During our research, we see the same patterns over and over with businesses
              that score poorly on AI visibility audits:
            </p>
            <ul className="text-gray-300 mb-6 space-y-2">
              <li><strong className="text-white">Ignoring Bing entirely.</strong> Most local businesses optimize only for Google. But Bing&apos;s data feeds ChatGPT, which now has over 800 million weekly active users. Skipping Bing means skipping ChatGPT.</li>
              <li><strong className="text-white">No structured data.</strong> Without schema markup, AI has to guess what your content means. That guessing game usually ends with your competitors getting the citation instead.</li>
              <li><strong className="text-white">Inconsistent business information.</strong> If your phone number is different on Yelp, Google, and your website, AI platforms lose confidence in your data and may skip recommending you entirely.</li>
              <li><strong className="text-white">Generic website content.</strong> Pages that say &quot;we provide quality service&quot; give AI nothing specific to cite. Pages that answer &quot;how much does [service] cost in [city]&quot; give AI exactly what it needs.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4 font-plus-jakarta">
              The DIY Audit vs. a Professional Analysis
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              The 5-minute audit above gives you a solid snapshot of where you stand. It
              covers the essentials: are you visible, what are AI platforms saying, and how
              do you compare to competitors on the surface level.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              A professional AI visibility analysis goes deeper. It tests dozens of prompt
              variations across all major AI platforms, analyzes your structured data
              implementation, audits your citation sources, maps your competitor landscape,
              and delivers a prioritized action plan tailored to your specific business and
              market.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              Think of the DIY audit as checking your own blood pressure at home. It tells
              you if something needs attention. The professional analysis is the full
              physical exam that tells you exactly what to fix and in what order.
            </p>
          </article>

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

          {/* CTA Section */}
          <section className="rounded-2xl border border-orange-500/30 bg-gradient-to-br from-orange-500/10 to-transparent p-8 sm:p-12 text-center mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-plus-jakarta">
              Want the Full Professional Version?
            </h2>
            <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
              You just ran the 5-minute version. Our free Blind Spot Report runs the
              complete analysis: dozens of prompt variations, all major AI platforms,
              competitor mapping, structured data audit, and a prioritized action plan.
              No pitch, just the data.
            </p>
            <Link
              href="/blindspot"
              className="inline-block bg-orange-500 text-white font-semibold px-8 py-4 rounded-xl text-lg hover:bg-orange-600 transition-colors"
            >
              Get Your Free Blind Spot Report
            </Link>
    <div className="flex flex-wrap items-center gap-6 mt-6 pt-6 border-t border-[#FF6A00]/10">
      <a href="tel:+12134442229" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
        (213) 444-2229
      </a>
      <a href="mailto:support@theanswerengine.ai" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
        support@theanswerengine.ai
      </a>
    </div>
          </section>

          {/* Author Attribution */}
          <section className="flex items-center gap-4 border-t border-gray-800 pt-8">
            <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
              AE
            </div>
            <div>
              <p className="text-white font-semibold">The Answer Engine Team</p>
              <p className="text-gray-500 text-sm">
                Helping local businesses get found, recommended, and cited by AI search
                platforms.
              </p>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
