import type { Metadata } from 'next'
import Link from 'next/link'

export const revalidate = 86400
export const dynamic = 'force-static'
export const dynamicParams = true

const title = 'How to Measure If AI Is Sending You Customers'
const description =
  'Discover how to track AI-referred traffic, measure AI search visibility, and find out if ChatGPT and Perplexity are sending customers to your business.'
const slug = 'how-to-measure-if-ai-is-sending-you-customers'
const publishDate = '2026-03-29'

export const metadata: Metadata = {
  title: `${title} | The Answer Engine`,
  description,
  keywords: [
    'AI referral traffic',
    'track AI traffic',
    'ChatGPT referrals',
    'Perplexity referral analytics',
    'AI search measurement',
    'AI citation tracking',
    'AI search ROI',
    'AI visibility metrics',
    'measure AI customers',
    'AI search attribution',
  ],
  openGraph: {
    title: `${title} | The Answer Engine`,
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
    title: `${title} | The Answer Engine`,
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
          name: 'How do I know if ChatGPT is sending traffic to my website?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'In Google Analytics 4, create a custom channel group with a regex filter for chatgpt.com, openai.com, perplexity.ai, and other AI platforms as referral sources. However, up to 70% of AI-referred visits arrive with no referrer header and appear as Direct traffic, so GA4 alone will undercount significantly. Pairing GA4 with a dedicated AI visibility platform gives a much more complete picture.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why does most AI referral traffic show up as Direct in Google Analytics?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'AI platforms often strip or omit the HTTP referrer header when a user clicks through to a site. Studies show that 70.6% of AI-referred visits arrive without a referrer signal, meaning GA4 classifies them as Direct traffic. This creates a major attribution blind spot for businesses relying solely on standard analytics.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does AI search traffic convert better than Google organic traffic?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Early data strongly suggests yes. Analysis of 12 million website visits found AI traffic converts at 4 to 5 times higher than Google organic on average, with some industries reporting rates up to 9x higher. AI users arrive having already researched their need through conversation, so they are further along the buying journey when they click through.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the dark funnel in AI search and why does it matter?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The AI dark funnel refers to the portion of the customer journey that happens entirely inside AI chat interfaces without any website click. Approximately 93% of AI search sessions end without a single click to an external site. This means prospects research, compare, and form opinions about your business inside ChatGPT or Perplexity before they ever visit your website or call you.',
          },
        },
        {
          '@type': 'Question',
          name: 'What tools can I use to measure AI search visibility?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A new category of AI visibility platforms has emerged including Otterly AI, Peec AI, Profound, Brandlight, and AthenaHQ. These tools automatically send queries to ChatGPT, Perplexity, Google AI Overviews, and other platforms, then track whether your brand is mentioned or cited in the responses. They measure brand mention rate, citation frequency, share of voice versus competitors, and sentiment.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much of my business pipeline could be influenced by AI search right now?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'More than most business owners realize. AI traffic grew 700% in 2025, ChatGPT drives 87.4% of all AI referral traffic across major industries, and AI-referred visitors spend 68% more time on site than traditional organic visitors. Even if AI referrals appear small in your analytics, the attribution gap means the real number is likely 4 to 5 times higher.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the difference between a brand mention and a citation in AI search?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A brand mention occurs when an AI platform references your business name in its response text without linking to your site. A citation is when the AI explicitly links to your website as a source. Citations are more valuable because they drive direct referral traffic, but mentions influence purchasing decisions even when no link is included, making both metrics worth tracking.',
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
                'linear-gradient(135deg, #0d0600 0%, #1a1a2e 55%, #0F1117 100%)',
            }}
          >
            <svg
              className="absolute inset-0 w-full h-full opacity-10"
              viewBox="0 0 800 400"
              fill="none"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="hero-grid-96"
                  x="0"
                  y="0"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 40 0 L 0 0 0 40"
                    fill="none"
                    stroke="#F27D24"
                    strokeWidth="0.4"
                    opacity="0.4"
                  />
                </pattern>
              </defs>
              <rect width="800" height="400" fill="url(#hero-grid-96)" />
              {/* Funnel shape */}
              <polygon
                points="120,80 280,80 230,200 170,200"
                stroke="#F27D24"
                strokeWidth="1.5"
                fill="none"
                opacity="0.25"
              />
              <polygon
                points="155,210 245,210 225,270 175,270"
                stroke="#F27D24"
                strokeWidth="1.5"
                fill="none"
                opacity="0.25"
              />
              <circle
                cx="200"
                cy="300"
                r="22"
                stroke="#F27D24"
                strokeWidth="2"
                fill="none"
                opacity="0.3"
              />
              {/* Analytics bars */}
              <rect x="440" y="220" width="18" height="90" fill="#F27D24" opacity="0.15" rx="2" />
              <rect x="468" y="170" width="18" height="140" fill="#F27D24" opacity="0.2" rx="2" />
              <rect x="496" y="130" width="18" height="180" fill="#F27D24" opacity="0.25" rx="2" />
              <rect x="524" y="100" width="18" height="210" fill="#F27D24" opacity="0.3" rx="2" />
              <rect x="552" y="80" width="18" height="230" fill="#F27D24" opacity="0.35" rx="2" />
              <line x1="430" y1="315" x2="580" y2="315" stroke="#F27D24" strokeWidth="1" opacity="0.2" />
              {/* AI chat bubble */}
              <rect x="600" y="100" width="140" height="70" rx="12" stroke="#F27D24" strokeWidth="1" fill="none" opacity="0.2" />
              <line x1="620" y1="122" x2="720" y2="122" stroke="#F27D24" strokeWidth="1" opacity="0.15" />
              <line x1="620" y1="138" x2="700" y2="138" stroke="#F27D24" strokeWidth="1" opacity="0.15" />
              <line x1="620" y1="154" x2="710" y2="154" stroke="#F27D24" strokeWidth="1" opacity="0.15" />
              {/* Arrow from chat to funnel */}
              <path
                d="M600 145 Q520 180 430 200"
                stroke="#F27D24"
                strokeWidth="1.5"
                fill="none"
                strokeDasharray="4 4"
                opacity="0.3"
              />
              <polygon
                points="430,200 440,190 438,204"
                fill="#F27D24"
                opacity="0.3"
              />
              {/* Question mark dots */}
              {[0, 1, 2, 3].map((i) =>
                [0, 1, 2].map((j) => (
                  <circle
                    key={`dot-${i}-${j}`}
                    cx={350 + i * 20}
                    cy={60 + j * 30}
                    r="1.5"
                    fill="#F27D24"
                    opacity="0.1"
                  />
                ))
              )}
            </svg>
            <div className="relative px-8 py-16 sm:px-12 sm:py-20">
              <p className="inline-block text-sm font-medium text-orange-400 mb-4 border border-orange-500/30 rounded-full px-4 py-1">
                How-To Guides
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 font-plus-jakarta">
                How to Measure If AI Is Sending You Customers
              </h1>
            {/* Championship Cover Image */}
            <div className="ae-article-hero w-full rounded-xl overflow-hidden my-8" style={{ maxHeight: 440 }}>
              <img
                src="/blog/how-to-measure-if-ai-is-sending-you-customers.webp"
                alt="how to measure if ai is sending you customers"
                style={{ width: '100%', height: 440, objectFit: 'cover', display: 'block' }}
                loading="eager"
              />
            </div>
              <p className="text-lg text-gray-300 max-w-2xl mb-6">
                Most businesses have no idea whether ChatGPT, Perplexity, or Google AI are driving
                customers their way. Here is what you need to understand about measuring AI-driven demand
                before your competitors figure it out first.
               Markets fill fast. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Check your territory availability.</a></p>
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span>March 29, 2026</span>
                <span>·</span>
                <span>11 min read</span>
                <span>·</span>
                <span>Justin Borges</span>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="not-prose mb-12">
            <div className="ae-stats-grid">
              <div className="ae-stat-card">
                <div className="ae-stat-emoji">📈</div>
                <div className="ae-stat-value ae-accent">700%</div>
                <div className="ae-stat-label">AI TRAFFIC GROWTH IN 2025</div>
                <div className="ae-stat-source">Loamly, 2026</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-emoji">🎯</div>
                <div className="ae-stat-value ae-accent">4-5x</div>
                <div className="ae-stat-label">HIGHER CONVERSION VS GOOGLE</div>
                <div className="ae-stat-source">Superprompt, 12M visits</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-emoji">🕳️</div>
                <div className="ae-stat-value ae-accent">70.6%</div>
                <div className="ae-stat-label">AI VISITS ARRIVE WITH NO REFERRER</div>
                <div className="ae-stat-source">Loamly Attribution Report</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-emoji">💬</div>
                <div className="ae-stat-value ae-accent">93%</div>
                <div className="ae-stat-label">AI SESSIONS END WITHOUT A CLICK</div>
                <div className="ae-stat-source">Medium, Dark Funnel Study</div>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="not-prose mb-12">
            <div className="ae-toc">
              <div className="ae-toc-title">In This Article</div>
              <ol>
                <li><a href="#the-measurement-gap">The Measurement Gap Nobody Talks About</a></li>
                <li><a href="#what-you-can-see">What You Can Actually See in Standard Analytics</a></li>
                <li><a href="#dark-funnel">The AI Dark Funnel: The Part You Cannot See at All</a></li>
                <li><a href="#conversion-quality">Why AI Traffic Quality Changes Everything</a></li>
                <li><a href="#visibility-tools">The New Category of AI Visibility Tools</a></li>
                <li><a href="#what-to-measure">What Metrics Actually Matter</a></li>
                <li><a href="#comparison-table">AI Analytics: What Each Platform Tells You</a></li>
                <li><a href="#decision-matrix">Should You Invest in AI Visibility Measurement?</a></li>
                <li><a href="#cheat-sheet">Quick Reference: AI Measurement Signals</a></li>
                <li><a href="#faq">Frequently Asked Questions</a></li>
              </ol>
            </div>
          </div>

          {/* Article Body */}
          <article className="prose prose-invert prose-lg max-w-none prose-headings:font-plus-jakarta prose-headings:text-white prose-p:text-gray-300 prose-a:text-[#F27D24] prose-a:no-underline hover:prose-a:underline prose-strong:text-white">

            {/* Intro */}
            <p className="text-xl text-gray-300 leading-relaxed mb-10">
              Picture a potential customer sitting at their desk at 8 p.m. They type a question into ChatGPT:
              "What is the best [your service] in [your city]?" ChatGPT responds with three recommendations.
              Your competitor is number one. You are not mentioned at all. The customer calls your competitor
              the next morning. You never knew the conversation happened. This scenario is playing out millions
              of times a day, and most businesses have no system to detect it, measure it, or respond to it.
             Your first step: <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free AERO Blind Spot Scan.</a></p>

            {/* CTA Inline 1 */}
            <div className="not-prose mb-8">
              <div className="ae-cta-inline">
                <p>Find out right now if AI platforms are recommending your competitors instead of you. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Claim your free call</a> before your market fills.</p>
                <Link href="/blindspot">Get Your Free AI Blind Spot Report →</Link>
              </div>
            </div>

            {/* Section 1 */}
            <div className="not-prose mb-4" id="the-measurement-gap">
              <span className="ae-section-label">The Core Problem</span>
            </div>
            <h2 className="text-2xl font-bold text-white mt-4 mb-4 font-plus-jakarta">
              The Measurement Gap Nobody Talks About
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Every business owner who cares about growth checks their Google Analytics dashboard regularly.
              They track organic traffic, referral sources, conversion rates, and session duration. This is
              the right instinct. The problem is that Google Analytics was built for a world where traffic
              sources identify themselves cleanly: Google Organic, Facebook, Email, Direct.
             Reach out: <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>
            <p className="text-gray-300 leading-relaxed mb-4">
              AI platforms broke that model completely.
             Call us at <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> today.</p>
            <p className="text-gray-300 leading-relaxed mb-4">
              When someone clicks a link inside ChatGPT, Perplexity, or Claude, the HTTP referrer header
              that tells analytics tools where the visitor came from is often stripped or omitted entirely.
              The result: that high-intent, AI-referred visitor lands in your "Direct" bucket alongside
              people who typed your URL directly into their browser. You cannot tell them apart with
              standard tools.
             <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Lock in your exclusive territory now.</a></p>

            {/* Callout Warning */}
            <div className="not-prose mb-8">
              <div className="ae-callout ae-callout-warning">
                <div className="ae-callout-title">The Attribution Blind Spot</div>
                <p>
                  Studies show that 70.6% of AI-referred visits arrive without a referrer header.
                  That means for every AI-referred customer you can see in GA4, there are roughly
                  three more hiding inside your "Direct" channel. Your AI traffic is almost certainly
                  much larger than your reports suggest.
                 <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Get your free AI readiness report.</a></p>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed mb-4">
              This gap is not a minor inconvenience. It is a strategic blind spot. Businesses that
              cannot measure AI-driven demand cannot prioritize investment in AI visibility. They
              cannot identify which content is being cited by AI platforms. They cannot track whether
              their optimization efforts are working. They are flying blind in a channel that grew
              700% last year.
             Ready to act? <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a free strategy session.</a></p>

            {/* CTA Inline 2 */}
            <div className="not-prose mb-8">
              <div className="ae-cta-inline">
                <p>Ready to stop flying blind? Get a full AI visibility audit from the experts. Drop us a line at <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>
                <a href="tel:2134442229">Call (213) 444-2229 for a Free Consultation</a>
              </div>
            </div>

            {/* Section 2 */}
            <div className="not-prose mb-4" id="what-you-can-see">
              <span className="ae-section-label">What Analytics Shows</span>
            </div>
            <h2 className="text-2xl font-bold text-white mt-4 mb-4 font-plus-jakarta">
              What You Can Actually See in Standard Analytics
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Not all AI referral traffic is invisible. When AI platforms do pass referrer information,
              a savvy GA4 setup can capture it. The referral domains you can potentially see include
              chatgpt.com, perplexity.ai, claude.ai, gemini.google.com, and copilot.microsoft.com.
             Speak to an AEO specialist: <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.</p>
            <p className="text-gray-300 leading-relaxed mb-4">
              With the right custom channel group configuration in GA4, visits from these domains
              get bucketed into a dedicated "AI Traffic" channel rather than disappearing into the
              generic Referral category. This gives you a partial window: you can see AI traffic
              that chose to identify itself.
             One client per city. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">See if your market is available.</a></p>

            {/* Callout Info */}
            <div className="not-prose mb-8">
              <div className="ae-callout ae-callout-info">
                <div className="ae-callout-title">The Partial Picture Problem</div>
                <p>
                  Even with perfect GA4 configuration, you are only seeing the 29.4% of AI traffic
                  that passes referrer headers. Think of it like measuring rainfall but only counting
                  the drops that hit a single bucket in one corner of your yard. The real volume
                  is far greater. Standard analytics, even perfectly configured, gives you a
                  fraction of the true picture.
                 Check where you stand: <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free Blind Spot Scan.</a></p>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed mb-4">
              Once you have that channel configured, the metrics that matter most for AI traffic
              are engaged sessions, average engagement time, goal completions, and revenue or
              lead value per session. AI-referred visitors behave differently from other traffic
              segments, and these behavioral signals tell you about quality, not just quantity.
             <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Schedule a free 30-min call.</a></p>

            {/* Pros/Cons */}
            <div className="not-prose mb-10">
              <div className="ae-pros-cons">
                <div className="ae-pros-box">
                  <div className="ae-pros-title">GA4 AI Tracking: What Works</div>
                  <ul>
                    <li>Free and already installed for most businesses</li>
                    <li>Custom channel groups can isolate known AI referrers</li>
                    <li>Engagement metrics reveal AI traffic quality</li>
                    <li>Conversion tracking shows actual lead/sale attribution</li>
                    <li>Audience segmentation enables AI visitor behavior analysis</li>
                  </ul>
                </div>
                <div className="ae-cons-box">
                  <div className="ae-cons-title">GA4 AI Tracking: The Gaps</div>
                  <ul>
                    <li>Misses 70%+ of AI traffic hiding in Direct</li>
                    <li>Cannot tell you if AI mentioned you without a click</li>
                    <li>No visibility into competitor citation rates</li>
                    <li>Cannot track which content AI platforms are citing</li>
                    <li>No awareness of what AI says about you at all</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div className="not-prose mb-4" id="dark-funnel">
              <span className="ae-section-label">The Invisible Layer</span>
            </div>
            <h2 className="text-2xl font-bold text-white mt-4 mb-4 font-plus-jakarta">
              The AI Dark Funnel: The Part You Cannot See at All
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Here is the part that should concern every business owner deeply: approximately 93%
              of AI search sessions end without a single click to any external website. The customer
              research happens entirely inside the AI interface. ChatGPT answers their question.
              Perplexity gives them a summary. They form opinions about your business, your
              competitors, and the entire category, all without ever visiting a website.
             Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> for a custom strategy.</p>
            <p className="text-gray-300 leading-relaxed mb-4">
              This is the AI dark funnel, and it is the most significant measurement challenge in
              modern marketing. A prospect can go from unaware to ready-to-buy based entirely on
              what AI platforms told them. If AI described your business accurately and favorably,
              that prospect might call you directly, type your URL into their browser, or walk
              into your store without any "click" ever being registered.
             Questions? Call <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.</p>

            {/* Callout Orange */}
            <div className="not-prose mb-8">
              <div className="ae-callout ae-callout-orange">
                <div className="ae-callout-title">The Dark Funnel in Practice</div>
                <p>
                  A customer asks ChatGPT: "Is [Your Business Name] good for [service]?" ChatGPT
                  summarizes your reviews, describes your specialty, and suggests you might be a
                  good fit. The customer closes ChatGPT and calls you directly. Your CRM logs
                  this as a "direct" or "unknown" lead. You just got a customer from AI and had
                  no idea. This is happening constantly.
                 <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Secure your territory before a competitor does.</a></p>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed mb-4">
              Standard analytics cannot see any of this. The tools that can detect dark funnel
              influence work by monitoring what AI platforms actually say about your brand, not
              by waiting for clicks to register. This is a fundamentally different measurement
              paradigm: listening to AI conversations rather than tracking website sessions.
             <a href="https://theanswerengine.ai/blindspot" className="cta-inline">See your AI visibility score — free.</a></p>

            {/* Internal Link CTA */}
            <div className="not-prose mb-8">
              <div className="ae-cta-inline">
                <p>
                  Want to understand how AI search reshapes the entire customer journey?
                 <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book your free consultation here.</a></p>
                <Link href="/blog/how-ai-search-changes-sales-funnel">
                  Read: How AI Search Changes the Sales Funnel →
                </Link>
              </div>
            </div>

            {/* Section 4 */}
            <div className="not-prose mb-4" id="conversion-quality">
              <span className="ae-section-label">Why Quality Matters More Than Volume</span>
            </div>
            <h2 className="text-2xl font-bold text-white mt-4 mb-4 font-plus-jakarta">
              Why AI Traffic Quality Changes Everything
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Even the slice of AI traffic you can see in GA4 tells a remarkable story about quality.
              Analysis of 12 million website visits found that AI-referred traffic converts at 4 to
              5 times higher rates than traditional Google organic traffic on average. Some industries
              report conversion rate advantages as high as 9x.
             Contact us at <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>
            <p className="text-gray-300 leading-relaxed mb-4">
              The reason is intuitive once you understand AI search behavior. When someone asks
              ChatGPT "who should I hire for [service] in [city]" and clicks through to your
              website, they have already had a conversation with an AI that has summarized your
              business, assessed your fit, and recommended you. They arrive knowing what you do
              and why they should consider you. That is a dramatically warmer prospect than someone
              who found you via a keyword match.
             Reach us at <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.</p>

            {/* Callout Success */}
            <div className="not-prose mb-8">
              <div className="ae-callout ae-callout-success">
                <div className="ae-callout-title">The Quality Signal</div>
                <p>
                  AI-referred visitors also spend 68% more time on websites compared to traditional
                  organic search visitors, and sign-up conversion rates from LLM referrals (1.66%)
                  are more than 10x higher than from direct traffic (0.13%). Even a small stream of
                  AI-referred visitors can have outsized revenue impact.
                 We work with one business per market. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Check if yours is still open.</a></p>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed mb-4">
              This quality premium is why AI visibility deserves dedicated measurement rather than
              being lumped into general marketing analytics. A business receiving 500 AI-referred
              visits per month at a 14% conversion rate outperforms a business with 5,000 organic
              visits converting at 2.8%. Volume alone is a deeply misleading metric in the AI era.
             Find your gaps with a <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free AERO scan.</a></p>

            {/* CTA Inline 3 */}
            <div className="not-prose mb-8">
              <div className="ae-cta-inline">
                <p>Want to know your current AI citation rate and how it compares to competitors? <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Schedule a free call</a> to see where you stand.</p>
                <a href="mailto:support@theanswerengine.ai">
                  Email support@theanswerengine.ai for a Custom AI Metrics Report
                </a>
              </div>
            </div>

            {/* Section 5 */}
            <div className="not-prose mb-4" id="visibility-tools">
              <span className="ae-section-label">Beyond Standard Analytics</span>
            </div>
            <h2 className="text-2xl font-bold text-white mt-4 mb-4 font-plus-jakarta">
              The New Category of AI Visibility Tools
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              In 2024 and 2025, an entirely new software category emerged to address the measurement
              gap: AI visibility platforms. Tools like Otterly AI, Peec AI, Profound, Brandlight,
              and AthenaHQ work differently from traditional analytics. Instead of waiting for
              visitors to arrive at your website, they actively query AI platforms with the questions
              your customers are likely asking, then analyze the responses for mentions of your brand.
             Send your questions to <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>
            <p className="text-gray-300 leading-relaxed mb-4">
              This approach turns passive traffic measurement into active reputation intelligence.
              You learn not just how many AI visitors clicked to your site, but whether you are
              being mentioned at all, what is being said, how your positioning compares to
              competitors, and which of your content is being cited as a source.
             Call <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> for a free consultation.</p>

            {/* Takeaway */}
            <div className="not-prose mb-8">
              <div className="ae-takeaway">
                <div className="ae-takeaway-title">Market Validation</div>
                <p>
                  Peec AI, one of the leading AI visibility platforms, reached EUR 650K ARR within
                  4 months of launch and closed a $21M Series A in November 2025 at a $100M+ valuation.
                  The market is confirming what business data already shows: measuring AI visibility
                  is a genuine business need, not a trend.
                 <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Claim your market territory — one client per area.</a></p>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed mb-4">
              The metrics these platforms surface include brand mention rate (what percentage of
              relevant AI queries include your brand name), citation frequency (how often AI links
              to your website), share of voice versus named competitors, sentiment classification,
              and which source pages AI platforms are pulling from when they discuss your category.
             <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Run your free AI Blind Spot Scan.</a></p>

            {/* Internal Link */}
            <div className="not-prose mb-8">
              <div className="ae-cta-inline">
                <p>Want to see exactly how AI platforms track and surface your brand? <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a free 30-minute strategy call.</a></p>
                <Link href="/blog/how-to-track-ai-search-visibility">
                  Read: How to Track AI Search Visibility →
                </Link>
              </div>
            </div>

            {/* Section 6 */}
            <div className="not-prose mb-4" id="what-to-measure">
              <span className="ae-section-label">The Metrics Framework</span>
            </div>
            <h2 className="text-2xl font-bold text-white mt-4 mb-4 font-plus-jakarta">
              What Metrics Actually Matter
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Not every metric that sounds relevant to AI visibility actually tells you whether AI
              is driving customers to your business. A rigorous measurement framework focuses on
              metrics that are connected to business outcomes: leads, sales, and revenue, not
              just clicks and impressions.
             Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> to get started.</p>
            <p className="text-gray-300 leading-relaxed mb-4">
              The metrics worth tracking divide into two categories. Visibility metrics tell you
              whether AI platforms know about you and are surfacing your brand. Outcome metrics
              tell you whether that visibility is converting into actual business. Both layers
              are required for a complete picture. Visibility without outcomes is vanity.
              Outcomes without visibility data leaves you unable to optimize the source.
             <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a></p>

            <div className="not-prose mb-8">
              <div className="ae-callout ae-callout-info">
                <div className="ae-callout-title">Two Layers of AI Measurement</div>
                <p>
                  <strong style={{ color: 'white' }}>Visibility Layer:</strong> Are AI platforms aware of your brand? Do they mention you in
                  relevant queries? Do they cite your content? How does your share of voice compare
                  to competitors? These are leading indicators.<br /><br />
                  <strong style={{ color: 'white' }}>Outcome Layer:</strong> Is AI-referred traffic converting? Are call volumes increasing
                  from customers who cannot be attributed to any other channel? Is your overall
                  lead pipeline growing in proportion to AI search growth? These are lagging
                  indicators that confirm the visibility investment is working.
                </p>
              </div>
            </div>

            {/* Comparison Table */}
            <div className="not-prose mb-10" id="comparison-table">
              <h3 className="text-xl font-bold text-white mb-6 font-plus-jakarta">
                AI Analytics: What Each Platform Tells You
              </h3>
              <div className="overflow-x-auto">
                <table className="ae-comparison-table">
                  <thead>
                    <tr>
                      <th>Tool / Method</th>
                      <th>What It Measures</th>
                      <th>What It Misses</th>
                      <th>Best For</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>GA4 (standard)</strong></td>
                      <td>Clicks from known AI domains with referrer headers</td>
                      <td>70%+ of AI traffic hidden in Direct</td>
                      <td>Baseline, free starting point</td>
                    </tr>
                    <tr>
                      <td><strong>GA4 (custom channel)</strong></td>
                      <td>AI referrals segmented by platform, engagement, conversions</td>
                      <td>Still blind to stripped referrers and dark funnel</td>
                      <td>Teams with GA4 expertise</td>
                    </tr>
                    <tr>
                      <td><strong>Otterly AI / Peec AI</strong></td>
                      <td>Brand mention rate, citation rate, share of voice</td>
                      <td>Does not track on-site conversions directly</td>
                      <td>Visibility monitoring and competitor benchmarking</td>
                    </tr>
                    <tr>
                      <td><strong>Ahrefs / Semrush</strong></td>
                      <td>AI Overview appearances, featured snippets, backlink sources</td>
                      <td>Limited ChatGPT and Perplexity citation data</td>
                      <td>Content and SEO teams with existing subscriptions</td>
                    </tr>
                    <tr>
                      <td><strong>Dedicated AI Audit</strong></td>
                      <td>Full cross-platform citation analysis, source pages, sentiment, gaps</td>
                      <td>Point-in-time snapshot, not real-time monitoring</td>
                      <td>Businesses establishing baseline before optimization</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* CTA Inline 4 */}
            <div className="not-prose mb-8">
              <div className="ae-cta-inline">
                <p>Not sure which measurement approach fits your business? We can help you decide.</p>
                <a href="tel:2134442229">Call (213) 444-2229 for a Free Strategy Call</a>
              </div>
            </div>

            {/* Section 7 - Signals */}
            <div className="not-prose mb-4">
              <span className="ae-section-label">Signals and Sources</span>
            </div>
            <h2 className="text-2xl font-bold text-white mt-4 mb-4 font-plus-jakarta">
              Understanding What AI Platforms Actually Cite
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Measuring AI visibility goes deeper than just counting clicks. To understand whether AI
              is building or eroding your customer pipeline, you need to know what sources AI platforms
              are drawing on when they discuss your category and your business specifically.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              AI platforms pull from a layered source hierarchy. At the top are high-authority content
              sources: long-form articles, expert guides, and structured FAQ content. Below that, they
              weight business directory listings, review platform data, structured schema markup, and
              consistent NAP (Name, Address, Phone) information across the web. At the bottom, they
              reference general web content and social signals.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              When a citation tracking tool tells you that a competitor is being cited from their
              blog while you are being cited from a Yelp review, that tells you something actionable:
              your content layer is the gap. When you discover that AI platforms are citing outdated
              information about your hours or location, that tells you your structured data layer
              needs work. Measurement without this source-level detail leaves you knowing you have a
              problem but not where to fix it.
            </p>

            {/* Callout Warning 2 */}
            <div className="not-prose mb-8">
              <div className="ae-callout ae-callout-warning">
                <div className="ae-callout-title">Citation Quality vs. Citation Quantity</div>
                <p>
                  Being cited once in a high-quality context ("the leading [service] provider in
                  [city] according to industry experts") is more valuable than being mentioned ten
                  times as a generic option. AI visibility measurement should track sentiment and
                  positioning quality, not just raw mention counts. A negative or vague mention
                  can actively hurt your conversion rate from AI-referred traffic.
                </p>
              </div>
            </div>

            {/* Internal Link */}
            <div className="not-prose mb-8">
              <div className="ae-cta-inline">
                <p>Learn how to run your own initial visibility check in minutes.</p>
                <Link href="/blog/5-minute-ai-visibility-audit">
                  Read: The 5-Minute AI Visibility Audit →
                </Link>
              </div>
            </div>

            {/* Decision Matrix */}
            <div className="not-prose mb-10" id="decision-matrix">
              <h3 className="text-xl font-bold text-white mb-6 font-plus-jakarta">
                Decision Matrix: Should You Invest in AI Visibility Measurement?
              </h3>
              <div className="ae-decision-matrix">
                <div className="ae-decision-matrix-title">Use This to Prioritize Your Next Action</div>
                <div className="overflow-x-auto">
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr>
                        <th style={{ padding: '10px 14px', textAlign: 'left', color: '#F27D24', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid rgba(255,106,0,0.2)' }}>Your Situation</th>
                        <th style={{ padding: '10px 14px', textAlign: 'left', color: '#F27D24', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid rgba(255,106,0,0.2)' }}>Priority Level</th>
                        <th style={{ padding: '10px 14px', textAlign: 'left', color: '#F27D24', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid rgba(255,106,0,0.2)' }}>Recommended First Step</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['You have never checked your AI visibility', 'Critical', 'Free AI audit now, then monthly monitoring'],
                        ['You see AI referrals in GA4 but do not track quality', 'High', 'Add conversion tracking to AI channel segments'],
                        ['Your Direct traffic has grown unexpectedly in the past year', 'High', 'Investigate whether AI dark funnel is driving hidden demand'],
                        ['A competitor is outperforming you and you cannot explain why', 'High', 'Run competitor AI citation comparison immediately'],
                        ['You have strong Google rankings but stagnant lead growth', 'Medium', 'AI visibility audit to detect zero-click search erosion'],
                        ['You already track AI referrals and see good conversions', 'Medium', 'Expand to citation quality and source-level monitoring'],
                        ['You are in a highly local or specialized niche', 'Medium', 'Query your specific service category across all AI platforms'],
                      ].map(([situation, priority, step]) => (
                        <tr key={situation} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                          <td style={{ padding: '10px 14px', color: '#d1d5db', fontSize: '0.9rem' }}>{situation}</td>
                          <td style={{ padding: '10px 14px', fontSize: '0.9rem' }}>
                            <span style={{
                              color: priority === 'Critical' ? '#ef4444' : priority === 'High' ? '#F27D24' : '#facc15',
                              fontWeight: 700
                            }}>{priority}</span>
                          </td>
                          <td style={{ padding: '10px 14px', color: '#d1d5db', fontSize: '0.9rem' }}>{step}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Cheat Sheet */}
            <div className="not-prose mb-10" id="cheat-sheet">
              <div className="ae-cheat-sheet">
                <div className="ae-cheat-sheet-title">Quick Reference: AI Measurement Signals</div>
                <table>
                  <thead>
                    <tr>
                      <th>Signal</th>
                      <th>What It Tells You</th>
                      <th>Where to Find It</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>AI referral sessions in GA4</td>
                      <td>Minimum confirmed AI clicks (undercount by 3-4x)</td>
                      <td>GA4 Acquisition, custom AI channel group</td>
                    </tr>
                    <tr>
                      <td>Direct traffic trend vs. AI growth trend</td>
                      <td>Proxy for dark funnel influence on branded demand</td>
                      <td>GA4 channels report, compared to market AI growth data</td>
                    </tr>
                    <tr>
                      <td>Brand mention rate</td>
                      <td>% of relevant AI queries that include your brand</td>
                      <td>Otterly AI, Peec AI, Profound, Brandlight</td>
                    </tr>
                    <tr>
                      <td>Citation frequency</td>
                      <td>How often AI platforms link to your site as a source</td>
                      <td>AI visibility platforms, Ahrefs AI features</td>
                    </tr>
                    <tr>
                      <td>Share of voice vs. competitors</td>
                      <td>Your relative presence in AI recommendations</td>
                      <td>AI visibility platforms with competitor tracking</td>
                    </tr>
                    <tr>
                      <td>Citation source pages</td>
                      <td>Which of your pages AI is actually citing</td>
                      <td>AI visibility platforms with source-level breakdown</td>
                    </tr>
                    <tr>
                      <td>AI traffic engagement vs. other channels</td>
                      <td>Confirms whether AI visitors are high-quality leads</td>
                      <td>GA4 audience comparisons by channel</td>
                    </tr>
                    <tr>
                      <td>Sentiment classification</td>
                      <td>Whether AI mentions are favorable, neutral, or negative</td>
                      <td>AI visibility platforms with NLP analysis</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* CTA Inline 5 */}
            <div className="not-prose mb-8">
              <div className="ae-cta-inline">
                <p>Want all of these signals pulled together into one clear report for your business?</p>
                <Link href="/blindspot">Request Your Free AI Visibility Assessment →</Link>
              </div>
            </div>

            {/* Bridging section */}
            <div className="not-prose mb-4">
              <span className="ae-section-label">Putting It Together</span>
            </div>
            <h2 className="text-2xl font-bold text-white mt-4 mb-4 font-plus-jakarta">
              What a Complete AI Measurement Picture Looks Like
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              A business that truly understands its AI-driven demand has visibility across three
              layers simultaneously. First, it knows its website-level metrics: how many confirmed
              AI referral sessions it receives, their engagement quality, and their conversion rates.
              Second, it monitors its presence layer: which AI platforms mention it, how often, in
              what context, and how that compares to competitors. Third, it has a proxy for dark
              funnel influence: monitoring branded search volume, direct traffic trends, and
              inbound call attribution as leading indicators of AI-driven demand that never
              shows up as a website click.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Very few businesses have all three layers in place. Most have the first layer
              partially. Almost none have the second or third. The businesses that do are
              operating with a fundamental competitive intelligence advantage: they know what
              AI is saying about them, what it is saying about their competitors, and how the
              market is being shaped by AI recommendation patterns before those patterns
              show up in revenue data.
            </p>

            {/* Callout Success 2 */}
            <div className="not-prose mb-8">
              <div className="ae-callout ae-callout-success">
                <div className="ae-callout-title">The Competitive Edge</div>
                <p>
                  Businesses that have established AI measurement systems are already using
                  that data to outbid competitors for AI citations, identify content gaps,
                  and respond to negative AI mentions before they harden into market perception.
                  The window for first-mover advantage in AI visibility is closing. Every
                  month you wait, a competitor may be using these insights against you.
                </p>
              </div>
            </div>

            {/* CTA Block 1 */}
            <div className="not-prose mb-6">
              <div className="ae-cta-block">
                <h3>Stop Guessing. Start Measuring Your AI Visibility.</h3>
                <p>
                  The Answer Engine builds complete AI measurement systems for local businesses:
                  GA4 configuration, AI visibility monitoring, competitor benchmarking, and
                  monthly reporting so you always know what AI is saying about you.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center', marginTop: '16px' }}>
                  <Link
                    href="/blindspot"
                    style={{
                      background: '#F27D24',
                      color: 'white',
                      padding: '12px 24px',
                      borderRadius: '8px',
                      fontWeight: 700,
                      textDecoration: 'none',
                      display: 'inline-block',
                    }}
                  >
                    Get Your Free Blind Spot Report
                  </Link>
                  <a
                    href="tel:2134442229"
                    style={{
                      border: '1px solid rgba(255,106,0,0.5)',
                      color: '#F27D24',
                      padding: '12px 24px',
                      borderRadius: '8px',
                      fontWeight: 700,
                      textDecoration: 'none',
                      display: 'inline-block',
                    }}
                  >
                    Call (213) 444-2229
                  </a>
                  <a
                    href="mailto:support@theanswerengine.ai"
                    style={{
                      border: '1px solid rgba(255,255,255,0.2)',
                      color: 'rgba(255,255,255,0.7)',
                      padding: '12px 24px',
                      borderRadius: '8px',
                      fontWeight: 700,
                      textDecoration: 'none',
                      display: 'inline-block',
                    }}
                  >
                    support@theanswerengine.ai
                  </a>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="not-prose mb-4" id="faq">
              <span className="ae-section-label">Common Questions</span>
            </div>
            <h2 className="text-2xl font-bold text-white mt-4 mb-8 font-plus-jakarta">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6 mb-12">
              {[
                {
                  q: 'How do I know if ChatGPT is sending traffic to my website?',
                  a: 'In Google Analytics 4, you can create a custom channel group that uses a regex filter to isolate visits from chatgpt.com, openai.com, perplexity.ai, and other AI platforms as referral sources. However, studies show that up to 70.6% of AI-referred visits arrive with no referrer header and appear as Direct traffic. This means GA4 alone will undercount significantly. Pairing GA4 configuration with a dedicated AI visibility platform gives a much more complete picture of your true AI-driven traffic.',
                },
                {
                  q: 'Why does most AI referral traffic show up as Direct in Google Analytics?',
                  a: 'AI platforms often strip or omit the HTTP referrer header when a user clicks through to a site. This is a privacy and technical implementation decision that varies by platform and sometimes by browser or app context. The result is that GA4 classifies that visit as Direct rather than Referral. With 70.6% of AI-referred visits arriving this way, standard analytics tools create a significant attribution blind spot for businesses relying solely on GA4.',
                },
                {
                  q: 'Does AI search traffic convert better than Google organic traffic?',
                  a: 'Early data strongly suggests yes. Analysis of 12 million website visits found AI traffic converts at 4 to 5 times higher rates than Google organic on average, with some industries reporting advantages up to 9x. AI users arrive having already had a research conversation with an AI assistant, so they are further along the buying journey when they click through. AI-referred visitors also spend 68% more time on site than traditional organic search visitors.',
                },
                {
                  q: 'What is the AI dark funnel and why does it matter for my business?',
                  a: 'The AI dark funnel refers to the portion of the customer journey that happens entirely inside AI chat interfaces without any website click. Approximately 93% of AI search sessions end without a single click to an external site. Prospects research, compare, and form opinions about your business inside ChatGPT or Perplexity before they ever visit your website or call you. This means a significant portion of your inbound demand is being shaped by what AI says about you, and none of it appears in standard analytics.',
                },
                {
                  q: 'What tools can I use to measure AI search visibility?',
                  a: 'A new category of AI visibility platforms has emerged including Otterly AI, Peec AI, Profound, Brandlight, and AthenaHQ. These tools automatically send queries to ChatGPT, Perplexity, Google AI Overviews, and other platforms, then analyze responses for brand mentions and citations. They measure mention rate, citation frequency, share of voice versus competitors, and sentiment. The Answer Engine also provides custom AI visibility audits that combine these data sources into a single actionable report.',
                },
                {
                  q: 'How much AI traffic am I really getting if my GA4 shows very little?',
                  a: 'Most businesses are getting 3 to 5 times more AI-influenced visits than GA4 shows. If you see 100 AI referral sessions in GA4, the real number is likely 300 to 500 once you account for stripped referrer headers. And those numbers still exclude dark funnel influence: prospects who researched you in AI interfaces and then called you directly or searched your brand name. The full AI contribution to your pipeline is almost always far larger than standard analytics suggests.',
                },
                {
                  q: 'What is the difference between a brand mention and a citation in AI search?',
                  a: 'A brand mention occurs when an AI platform references your business name in its response text without linking to your site. A citation is when the AI explicitly links to your website as a source. Citations drive direct referral traffic and are the most measurable signal, but mentions influence purchasing decisions even without a link. Both metrics are worth tracking, because a business that is frequently mentioned but rarely cited has a content authority gap to close.',
                },
              ].map(({ q, a }) => (
                <div
                  key={q}
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '12px',
                    padding: '20px 24px',
                  }}
                >
                  <h3
                    className="font-plus-jakarta"
                    style={{
                      color: 'white',
                      fontWeight: 700,
                      fontSize: '1.05rem',
                      marginBottom: '10px',
                    }}
                  >
                    {q}
                  </h3>
                  <p style={{ color: '#d1d5db', lineHeight: 1.7, margin: 0, fontSize: '0.95rem' }}>
                    {a}
                  </p>
                </div>
              ))}
            </div>

            {/* 3-Tier CTA Block */}
            <div className="not-prose mb-10">
              <div
                style={{
                  background: 'linear-gradient(135deg, rgba(255,106,0,0.08) 0%, rgba(255,106,0,0.03) 100%)',
                  border: '1px solid rgba(255,106,0,0.25)',
                  borderRadius: '16px',
                  padding: '36px 32px',
                  textAlign: 'center',
                }}
              >
                <p
                  className="font-plus-jakarta"
                  style={{ color: '#F27D24', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700, marginBottom: '12px' }}
                >
                  Ready to Know Your AI Visibility Score?
                </p>
                <h3
                  className="font-plus-jakarta"
                  style={{ color: 'white', fontSize: '1.5rem', fontWeight: 800, marginBottom: '12px' }}
                >
                  Get Your Full AI Blind Spot Report, Free
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1rem', marginBottom: '28px', maxWidth: '520px', margin: '0 auto 28px' }}>
                  We analyze what ChatGPT, Perplexity, and Google AI are saying about your business
                  versus your top competitors. You get a complete picture: citations, mentions,
                  sentiment, and the exact gaps your competitors are exploiting.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', alignItems: 'center' }}>
                  <Link
                    href="/blindspot"
                    style={{
                      background: 'linear-gradient(90deg, #F27D24, #ff8c00)',
                      color: 'white',
                      padding: '14px 32px',
                      borderRadius: '10px',
                      fontWeight: 800,
                      fontSize: '1rem',
                      textDecoration: 'none',
                      display: 'inline-block',
                      boxShadow: '0 0 24px rgba(255,106,0,0.3)',
                    }}
                  >
                    Get My Free Blind Spot Report
                  </Link>
                  <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <a
                      href="tel:2134442229"
                      style={{
                        color: '#F27D24',
                        fontWeight: 700,
                        textDecoration: 'none',
                        fontSize: '0.95rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                      }}
                    >
                      <span>📞</span> (213) 444-2229
                    </a>
                    <a
                      href="mailto:support@theanswerengine.ai"
                      style={{
                        color: 'rgba(255,255,255,0.6)',
                        fontWeight: 600,
                        textDecoration: 'none',
                        fontSize: '0.95rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                      }}
                    >
                      <span>✉️</span> support@theanswerengine.ai
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Final CTA */}
            <div className="not-prose mb-10">
              <div className="ae-final-cta">
                <h2>Your Competitors Are Already Measuring This</h2>
                <p>
                  The businesses winning in AI search right now are not lucky. They built
                  measurement systems, identified their gaps, and acted on the data. Every month
                  without an AI measurement framework is a month of competitive intelligence
                  your rivals are accumulating and you are not. Start today.
                </p>
                <Link href="/blindspot" className="ae-final-cta-btn">
                  Claim Your Free Blind Spot Report Now
                </Link>
                <div style={{ marginTop: '16px', display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <a
                    href="tel:2134442229"
                    style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', textDecoration: 'none', fontWeight: 600 }}
                  >
                    (213) 444-2229
                  </a>
                  <a
                    href="mailto:support@theanswerengine.ai"
                    style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', textDecoration: 'none', fontWeight: 600 }}
                  >
                    support@theanswerengine.ai
                  </a>
                </div>
              </div>
            </div>

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

            {/* Related Articles */}
            <div className="not-prose mt-12">
              <h3
                className="font-plus-jakarta"
                style={{
                  fontWeight: 700,
                  fontSize: '1.1rem',
                  marginBottom: '16px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  color: '#F27D24',
                }}
              >
                Keep Reading
              </h3>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                  gap: '16px',
                }}
              >
                {[
                  {
                    href: '/blog/how-to-track-ai-search-visibility',
                    label: 'How-To Guide',
                    title: 'How to Track AI Search Visibility',
                  },
                  {
                    href: '/blog/how-ai-search-changes-sales-funnel',
                    label: 'Strategy',
                    title: 'How AI Search Changes the Sales Funnel',
                  },
                  {
                    href: '/blog/5-minute-ai-visibility-audit',
                    label: 'Quick Action',
                    title: 'The 5-Minute AI Visibility Audit',
                  },
                ].map(({ href, label, title: t }) => (
                  <Link
                    key={href}
                    href={href}
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      borderRadius: '12px',
                      padding: '18px 20px',
                      textDecoration: 'none',
                      display: 'block',
                      transition: 'border-color 0.2s',
                    }}
                  >
                    <span
                      style={{
                        display: 'block',
                        color: '#F27D24',
                        fontSize: '0.7rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        fontWeight: 700,
                        marginBottom: '6px',
                      }}
                    >
                      {label}
                    </span>
                    <span
                      style={{
                        display: 'block',
                        color: 'white',
                        fontSize: '0.95rem',
                        fontWeight: 600,
                        lineHeight: 1.4,
                      }}
                    >
                      {t}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

          </article>
        </div>
      </main>
    </>
  )
}
