import type { Metadata } from 'next'
import Link from 'next/link'

export const revalidate = 86400
export const dynamic = 'force-static'
export const dynamicParams = true

const title = 'Does Being on Angi or Thumbtack Help AI Find You'
const description = 'Thumbtack is embedded in ChatGPT. Angi launched a ChatGPT app. Your directory profile now feeds AI recommendations directly. Here is what that means for your business.'
const slug = 'does-being-on-angi-or-thumbtack-help-ai-find-you'
const publishDate = '2026-04-17'

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'does Angi help AI find your business',
    'Thumbtack ChatGPT integration',
    'Angi AI search visibility',
    'does Thumbtack help ChatGPT recommend you',
    'Angi ChatGPT app 2026',
    'Thumbtack OpenAI integration',
    'directory listings AI search',
    'Angi Alexa Plus integration',
    'does Angi help get found on ChatGPT',
    'home services AI search directories',
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
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [`https://theanswerengine.ai/blog/${slug}.webp`],
  },
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
          name: 'Is Thumbtack integrated with ChatGPT?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Thumbtack integrated with OpenAI Operator in January 2025 and by October 2025 was embedded directly in ChatGPT for home services queries. When a homeowner asks ChatGPT to find a plumber, handyman, landscaper, or other home service pro, ChatGPT can pull from Thumbtack listings and route the booking directly through Thumbtack without the user ever visiting Thumbtack\'s website.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does Angi help my business get found on ChatGPT?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, through the Angi ChatGPT app launched in March 2026. The app allows homeowners to move from an AI conversation directly to hiring a professional on Angi. Additionally, Angi integrates with Amazon Alexa+ for voice-driven booking. An active Angi profile now feeds data into multiple AI recommendation systems simultaneously.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does just being registered on Angi or Thumbtack guarantee AI recommendations?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Registration is the entry fee, not the prize. AI systems that pull from these platforms apply their own ranking signals before surfacing any business. Profile completeness, review count, review recency, listed services, response time history, and availability all factor in. A registered-but-neglected profile may be technically present in the system but effectively invisible because it does not score well enough to surface.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which is better for AI visibility: Angi or Thumbtack?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'They serve different AI channels. Thumbtack feeds ChatGPT directly (via the Operator integration). Angi feeds both ChatGPT (via the Angi app) and Amazon Alexa+ (via the Alexa+ partnership). The highest-leverage move is to maintain strong profiles on both, since they reach different AI pipelines. If you had to prioritize one, Angi\'s broader AI integrations give it a slight edge for total AI-driven visibility.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do I still need my own website if I am on Angi and Thumbtack?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Your website is the foundation that AI platforms like Perplexity and older ChatGPT (non-Operator mode) use when they crawl the web for recommendations. Directory profiles cover the booking-enabled AI flows, but your website covers the research-mode AI flows where users are asking for general recommendations rather than initiating a booking. The most visible businesses have both: strong directory profiles AND a well-structured website.',
          },
        },
        {
          '@type': 'Question',
          name: 'What makes an Angi or Thumbtack profile perform well in AI recommendations?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The signals that move the needle are: explicit service listings (every service named, not grouped as "general contractor"), a review count above 20 with an average above 4.5, current availability calendar, rapid response time to inquiries (under 1 hour historically), accurate business hours, and professional photos. The profile should read like an answer to the questions homeowners actually ask, not a marketing brochure.',
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb */}
      <nav className="max-w-4xl mx-auto px-6 pt-8 pb-0" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 text-sm text-gray-500">
          <li><Link href="/" className="hover:text-[#F27D24] transition-colors">Home</Link></li>
          <li className="text-gray-700">/</li>
          <li><Link href="/blog" className="hover:text-[#F27D24] transition-colors">Blog</Link></li>
          <li className="text-gray-700">/</li>
          <li className="text-gray-400 truncate max-w-[200px]">{title}</li>
        </ol>
      </nav>
          {/* Championship Cover Image */}
          <div className="ae-article-hero w-full rounded-xl overflow-hidden mb-10" style={{ maxHeight: 420 }}>
            <img
              src="/blog/does-being-on-angi-or-thumbtack-help-ai-find-you.webp"
              alt="does being on angi or thumbtack help ai find you"
              style={{ width: '100%', height: 420, objectFit: 'cover', display: 'block' }}
              loading="eager"
            />
          </div>

      {/* Hero */}
      <header className="max-w-4xl mx-auto px-6 pt-10 pb-12">
        <div className="relative rounded-2xl overflow-hidden bg-[#0F1117] border border-gray-800">
          <svg
            className="absolute inset-0 w-full h-full opacity-10"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <defs>
              <pattern id="hero-grid-angi" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#F27D24" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-grid-angi)" />
          </svg>
          <div className="relative z-10 px-8 py-14 md:px-16">
            <div className="flex items-center gap-3 mb-5">
              <span className="ae-section-label">Myth Busters</span>
              <span className="text-gray-500 text-sm">9 min read</span>
            </div>
            <h1 className="font-plus-jakarta text-3xl md:text-5xl font-black text-white leading-tight mb-5">
              Does Being on Angi or Thumbtack Help AI Find You
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl leading-relaxed">
              Not a myth anymore. Thumbtack is embedded inside ChatGPT. Angi launched a ChatGPT app and feeds Amazon Alexa+. Your directory profile is now an AI recommendation feed. Here is what that actually means.
            </p>
            <p className="text-gray-500 text-sm mt-6">
              Published {publishDate} by Justin Borges
             <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Claim your free call</a> before your market fills.</p>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 pb-24">

        {/* Stats Grid */}
        <div className="ae-stats-grid mb-12">
          <div className="ae-stat-card">
            <span className="ae-stat-emoji">🤖</span>
            <span className="ae-stat-value">Oct 2025</span>
            <span className="ae-stat-label">Thumbtack embedded directly inside ChatGPT</span>
          </div>
          <div className="ae-stat-card">
            <span className="ae-stat-emoji">📱</span>
            <span className="ae-stat-value">Mar 2026</span>
            <span className="ae-stat-label">Angi ChatGPT app launched for home services booking</span>
          </div>
          <div className="ae-stat-card">
            <span className="ae-stat-emoji">🔊</span>
            <span className="ae-stat-value">2 AI systems</span>
            <span className="ae-stat-label">Angi feeds both ChatGPT and Amazon Alexa+</span>
          </div>
          <div className="ae-stat-card">
            <span className="ae-stat-emoji">💰</span>
            <span className="ae-stat-value">$400M</span>
            <span className="ae-stat-label">Thumbtack revenue, up 33% YoY (2025)</span>
          </div>
        </div>

        {/* TOC */}
        <div className="ae-toc mb-12">
          <div className="ae-toc-title">What You Will Learn</div>
          <ol className="space-y-1 text-sm text-gray-400 list-decimal list-inside">
            <li><a href="#the-real-answer" className="hover:text-[#F27D24] transition-colors">The real answer: yes, but with conditions</a></li>
            <li><a href="#thumbtack-chatgpt" className="hover:text-[#F27D24] transition-colors">How Thumbtack feeds ChatGPT directly</a></li>
            <li><a href="#angi-chatgpt-alexa" className="hover:text-[#F27D24] transition-colors">Angi's ChatGPT app and Alexa+ integration</a></li>
            <li><a href="#profile-quality" className="hover:text-[#F27D24] transition-colors">Why registration alone does nothing</a></li>
            <li><a href="#optimization" className="hover:text-[#F27D24] transition-colors">What a profile needs to actually surface</a></li>
            <li><a href="#vs-website" className="hover:text-[#F27D24] transition-colors">Directories vs your website: not either/or</a></li>
          </ol>
        </div>

        {/* Section 1 */}
        <section id="the-real-answer" className="mb-12">
          <h2 className="font-plus-jakarta text-2xl md:text-3xl font-bold text-white mb-4">
            The Real Answer: Yes, But With a Critical Condition
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            For years, the answer to "does Angi or Thumbtack help AI find you?" was a qualified maybe. They might be part of the data AI crawls, but there was no direct mechanism. That changed in 2025.
           Reach out: <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>
          <p className="text-gray-300 leading-relaxed mb-4">
            Thumbtack integrated directly into ChatGPT via OpenAI's Operator framework. Angi launched a native ChatGPT app in March 2026 and is integrated with Amazon Alexa+ for voice booking. These are not vague partnerships. They are direct data pipelines from your directory listing into AI recommendation flows.
           Call us at <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> today.</p>
          <p className="text-gray-300 leading-relaxed mb-4">
            But here is the condition: being registered is not enough. These integrations surface specific businesses based on profile signals. A registered-but-neglected profile may technically exist in the system while being functionally invisible.
           <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Lock in your exclusive territory now.</a></p>

          <div className="ae-callout ae-callout-info">
            <div className="ae-callout-title">The Two-Tier System</div>
            <p className="text-gray-300 text-sm leading-relaxed">
              With Angi inside ChatGPT and Thumbtack inside ChatGPT, there is now a two-tier system for home service recommendations. Tier 1: businesses with active, complete directory profiles that surface inside AI booking flows. Tier 2: businesses who are not present, or present but too sparse to surface. Tier 2 is invisible to an increasing share of the market.
             <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Get your free AI readiness report.</a></p>
          </div>

            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Check if AI search recommends your local business</a>
        </section>

        {/* Section 2 */}
        <section id="thumbtack-chatgpt" className="mb-12">
          <h2 className="font-plus-jakarta text-2xl md:text-3xl font-bold text-white mb-4">
            How Thumbtack Feeds ChatGPT Directly
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            In January 2025, Thumbtack became one of the first platforms integrated into OpenAI's Operator, an agentic AI framework that allows ChatGPT to take actions on behalf of users. By October 2025, the integration went deeper: Thumbtack was embedded directly inside ChatGPT for home service queries.
           Drop us a line at <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>
          <p className="text-gray-300 leading-relaxed mb-4">
            What this looks like in practice: a homeowner types "find me a plumber in Denver who can come this week" into ChatGPT. ChatGPT activates the Thumbtack integration, queries available Thumbtack pros in Denver with plumbing listed as a service, applies its ranking logic, and presents options. The homeowner can book without ever leaving ChatGPT.
           Speak to an AEO specialist: <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.</p>

          <div className="ae-timeline mb-6">
            <div className="ae-timeline-item">
              <div className="ae-timeline-step">1</div>
              <div>
                <div className="font-semibold text-white text-sm">Jan 2025: Thumbtack joins OpenAI Operator</div>
                <div className="text-gray-400 text-xs">First major home services platform integrated with agentic ChatGPT</div>
              </div>
            </div>
            <div className="ae-timeline-item">
              <div className="ae-timeline-step">2</div>
              <div>
                <div className="font-semibold text-white text-sm">Oct 2025: Full ChatGPT embedding</div>
                <div className="text-gray-400 text-xs">Thumbtack pros surface inside ChatGPT conversations without users leaving the app</div>
              </div>
            </div>
            <div className="ae-timeline-item">
              <div className="ae-timeline-step">3</div>
              <div>
                <div className="font-semibold text-white text-sm">Mar 2026: Angi launches ChatGPT app</div>
                <div className="text-gray-400 text-xs">Angi creates parallel pipeline, second major directory inside ChatGPT</div>
              </div>
            </div>
            <div className="ae-timeline-item">
              <div className="ae-timeline-step">4</div>
              <div>
                <div className="font-semibold text-white text-sm">2026: Alexa+ adds Angi and Yelp</div>
                <div className="text-gray-400 text-xs">Angi now feeds ChatGPT AND Alexa+ simultaneously</div>
              </div>
            </div>
          </div>

          <p className="text-gray-300 leading-relaxed mb-4">
            Thumbtack itself reported $400 million in revenue in 2025, up 33% year over year, driven in large part by these AI partnerships. The platform's bet that directory data would become AI infrastructure is paying off. For contractors listed on Thumbtack, the question is whether their profiles are strong enough to surface when ChatGPT queries the system.
           One client per city. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">See if your market is available.</a></p>
        </section>

        {/* Section 3 */}
        <section id="angi-chatgpt-alexa" className="mb-12">
          <h2 className="font-plus-jakarta text-2xl md:text-3xl font-bold text-white mb-4">
            Angi's ChatGPT App and Alexa+ Integration
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Angi's integration footprint is actually wider than Thumbtack's because it feeds two separate AI systems: ChatGPT (via the Angi ChatGPT app launched March 2026) and Amazon Alexa+ (via the Alexa+ partner integration launched in late 2025). Each is a distinct recommendation pipeline targeting different user behaviors.
           Check where you stand: <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free Blind Spot Scan.</a></p>

          <table className="ae-comparison-table mb-6">
            <thead>
              <tr>
                <th>AI System</th>
                <th>Angi Integration</th>
                <th>Thumbtack Integration</th>
                <th>Use Case</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-semibold text-white">ChatGPT</td>
                <td className="text-green-400">Angi ChatGPT app (Mar 2026)</td>
                <td className="text-green-400">Direct embed (Oct 2025)</td>
                <td>Text queries, research + booking</td>
              </tr>
              <tr>
                <td className="font-semibold text-white">Amazon Alexa+</td>
                <td className="text-green-400">Native integration (2025)</td>
                <td className="text-gray-500">Not integrated</td>
                <td>Voice queries, instant booking</td>
              </tr>
              <tr>
                <td className="font-semibold text-white">Google AI / Gemini</td>
                <td className="text-yellow-400">Indirect (Angi pages indexed)</td>
                <td className="text-yellow-400">Indirect (Thumbtack pages indexed)</td>
                <td>General local search queries</td>
              </tr>
              <tr>
                <td className="font-semibold text-white">Perplexity</td>
                <td className="text-yellow-400">Indirect (web crawl)</td>
                <td className="text-yellow-400">Indirect (web crawl)</td>
                <td>Research-mode queries</td>
              </tr>
            </tbody>
          </table>

          <div className="ae-callout ae-callout-success">
            <div className="ae-callout-title">Angi Is Now Two AI Channels At Once</div>
            <p className="text-gray-300 text-sm leading-relaxed">
              A well-maintained Angi profile currently feeds: the Angi ChatGPT app for text-based booking queries AND Alexa+ for voice-based booking queries. That is one profile working across two distinct AI recommendation flows. No other single directory has this kind of AI channel breadth for home service businesses right now.
             <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Schedule a free 30-min call.</a></p>
          </div>

            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Check if AI search recommends your local business</a>
        </section>

        {/* Section 4 */}
        <section id="profile-quality" className="mb-12">
          <h2 className="font-plus-jakarta text-2xl md:text-3xl font-bold text-white mb-4">
            Why Registration Alone Does Nothing
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            This is the trap that catches most contractors: they sign up for Angi or Thumbtack, fill out the minimum required fields, and then assume they are covered. They are not.
           Questions? Call <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.</p>
          <p className="text-gray-300 leading-relaxed mb-4">
            When ChatGPT queries Thumbtack for "plumbers in Austin available this weekend," it does not return all plumbers in Austin. It returns plumbers who score above a threshold across relevance, reviews, and availability. A sparse profile with three reviews and no availability calendar set will score below that threshold and will not surface.
           <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Secure your territory before a competitor does.</a></p>

          <div className="ae-pros-cons mb-6">
            <div className="ae-pros-box">
              <h3 className="font-plus-jakarta font-bold text-white mb-3">Profiles That Surface in AI</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>20+ reviews with 4.5+ average rating</li>
                <li>Every service explicitly listed by name</li>
                <li>Current availability calendar updated</li>
                <li>Professional photos uploaded</li>
                <li>Response time under 1 hour (historically)</li>
                <li>Complete service area defined</li>
                <li>Business description answers specific questions</li>
              </ul>
            </div>
            <div className="ae-cons-box">
              <h3 className="font-plus-jakarta font-bold text-white mb-3">Profiles That Get Skipped</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Registered but never fully completed</li>
                <li>Services listed as "general contractor" only</li>
                <li>No availability calendar</li>
                <li>Fewer than 10 reviews</li>
                <li>Last login more than 30 days ago</li>
                <li>No photos uploaded</li>
                <li>Slow historical response time</li>
              </ul>
            </div>
          </div>

          <div className="ae-callout ae-callout-warning">
            <div className="ae-callout-title">The Inactive Profile Problem</div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Both Angi and Thumbtack track engagement signals: how quickly you respond to inquiries, how often you log in, how current your availability is. These signals factor into their ranking logic. A business that signed up two years ago and has not touched their profile since may be technically registered while being functionally ranked at the bottom of the pool. AI recommendation integrations pull from the top of the pool.
             <a href="https://theanswerengine.ai/blindspot" className="cta-inline">See your AI visibility score — free.</a></p>
          </div>
        </section>

        {/* Section 5 */}
        <section id="optimization" className="mb-12">
          <h2 className="font-plus-jakarta text-2xl md:text-3xl font-bold text-white mb-4">
            What a Profile Actually Needs to Surface
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Optimizing for AI-driven recommendations through Angi and Thumbtack is more specific than general profile completion. Here is what moves the needle for the AI ranking logic specifically:
           <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book your free consultation here.</a></p>

          <div className="ae-cheat-sheet mb-6">
            <div className="ae-cheat-sheet-title">Directory Profile Optimization for AI Visibility</div>
            <table>
              <thead>
                <tr>
                  <th>Signal</th>
                  <th>Target</th>
                  <th>Why It Matters to AI</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Review count</td>
                  <td>25+ on each platform</td>
                  <td>AI needs statistical confidence, not just a good average</td>
                </tr>
                <tr>
                  <td>Review rating</td>
                  <td>4.7+ average</td>
                  <td>Lower ratings create friction in recommendation logic</td>
                </tr>
                <tr>
                  <td>Service specificity</td>
                  <td>List every service by name</td>
                  <td>AI matches specific service requests to explicit listings</td>
                </tr>
                <tr>
                  <td>Response time</td>
                  <td>Under 1 hour</td>
                  <td>AI booking flows require reliable availability signals</td>
                </tr>
                <tr>
                  <td>Profile activity</td>
                  <td>Login at least weekly</td>
                  <td>Platforms deprioritize inactive accounts in recommendation pools</td>
                </tr>
                <tr>
                  <td>Review recency</td>
                  <td>5+ reviews in last 90 days</td>
                  <td>AI favors active, current businesses over historical-only data</td>
                </tr>
                <tr>
                  <td>Photos</td>
                  <td>10+ professional images</td>
                  <td>Profile completeness signals legitimacy to platform ranking systems</td>
                </tr>
              </tbody>
            </table>
          </div>

            <div className="ae-cta-block not-prose my-16">
              <h3>AI Search Is Replacing the Map Pack — Is Your Business Listed Where It Counts Now?</h3>
              <p>ChatGPT and Perplexity now recommend local businesses directly, bypassing Google Maps entirely. Most local businesses are invisible in AI search even if they rank #1 in the Map Pack. Free Blind Spot Report — 48-hour turnaround.</p>
              <a href="https://theanswerengine.ai/blindspot" className="ae-cta-primary">Run Free Local AI Visibility Scan →</a>
              <div style={{ marginTop: '16px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <a href="tel:+12134442229" className="ae-cta-secondary">(213) 444-2229</a>
                <a href="https://calendly.com/theanswerengine-support/30min" className="ae-cta-secondary">Book Free Call</a>
              </div>
            </div>
        </section>

        {/* Section 6 */}
        <section id="vs-website" className="mb-12">
          <h2 className="font-plus-jakarta text-2xl md:text-3xl font-bold text-white mb-4">
            Directories vs Your Website: Not Either/Or
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            A common mistake is treating directories and your own website as alternatives. They are not. They are complementary systems that feed different AI channels.
           Reach us at <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.</p>
          <p className="text-gray-300 leading-relaxed mb-4">
            Directory profiles (Angi, Thumbtack, Yelp) feed the booking-enabled AI flows: ChatGPT when it is in action mode, Alexa+ for voice booking. Your website feeds the research-mode AI flows: ChatGPT when it is crawling for general recommendations, Perplexity, Claude, and Google AI Overviews. A business that only has directory profiles and no website is invisible to research-mode AI queries. A business that only has a website and no directory profiles is invisible to booking-mode AI queries.
           We work with one business per market. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Check if yours is still open.</a></p>

          <table className="ae-comparison-table mb-6">
            <thead>
              <tr>
                <th>AI Channel</th>
                <th>Primary Data Source</th>
                <th>What You Need</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-semibold text-white">ChatGPT (booking mode)</td>
                <td>Thumbtack, Angi integrations</td>
                <td className="text-green-400">Active directory profiles</td>
              </tr>
              <tr>
                <td className="font-semibold text-white">Alexa+ (voice booking)</td>
                <td>Angi, Yelp integrations</td>
                <td className="text-green-400">Active directory profiles</td>
              </tr>
              <tr>
                <td className="font-semibold text-white">ChatGPT (research mode)</td>
                <td>Web crawl (GPTBot)</td>
                <td className="text-blue-400">Website with service pages</td>
              </tr>
              <tr>
                <td className="font-semibold text-white">Perplexity</td>
                <td>Web crawl (PerplexityBot)</td>
                <td className="text-blue-400">Website with structured content</td>
              </tr>
              <tr>
                <td className="font-semibold text-white">Google AI Overviews</td>
                <td>Google index + Google Business Profile</td>
                <td className="text-yellow-400">Website + GBP profile</td>
              </tr>
            </tbody>
          </table>

          <div className="ae-callout ae-callout-orange">
            <div className="ae-callout-title">The Full Stack Approach</div>
            <p className="text-gray-300 text-sm leading-relaxed">
              The businesses that win across all AI channels maintain active, complete profiles on Angi, Thumbtack, and Yelp AND have a well-structured website with individual service pages and FAQ content. That combination covers the booking-mode AI flows and the research-mode AI flows simultaneously. It is not about picking the right directory. It is about being present in both ecosystems.
             Find your gaps with a <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free AERO scan.</a></p>
          </div>

            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Check if AI search recommends your local business</a>
        </section>

        {/* Internal links */}
        <section className="mb-12">
          <h2 className="font-plus-jakarta text-2xl font-bold text-white mb-4">Related Reading</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/blog/how-amazon-alexa-plus-recommends-local-businesses" className="block p-4 rounded-xl bg-white/5 border border-gray-800 hover:border-[#F27D24]/40 transition-colors">
              <span className="text-[#F27D24] text-xs font-semibold uppercase tracking-wide">Platform Deep Dives</span>
              <p className="text-white font-semibold text-sm mt-1">How Amazon Alexa+ Recommends Local Businesses Send your questions to <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>
            </Link>
            <Link href="/blog/your-website-vs-directories-what-ai-trusts" className="block p-4 rounded-xl bg-white/5 border border-gray-800 hover:border-[#F27D24]/40 transition-colors">
              <span className="text-[#F27D24] text-xs font-semibold uppercase tracking-wide">Comparisons</span>
              <p className="text-white font-semibold text-sm mt-1">Your Website vs Directories: What AI Trusts Call <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> for a free consultation.</p>
            </Link>
          </div>
        </section>

        {/* 3-tier CTA */}
        <div className="not-prose my-16 p-8 rounded-2xl bg-gradient-to-br from-[#F27D24]/10 to-transparent border border-[#F27D24]/20">
          <h3 className="font-plus-jakarta text-2xl font-bold text-white mb-3">Find Out If Your Directory Profiles Are Feeding AI Recommendations</h3>
          <p className="text-gray-400 mb-6">Our free Blind Spot Report audits your Angi, Thumbtack, and Yelp profiles alongside your website presence to show exactly where ChatGPT and Alexa+ can find you. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Claim your market territory — one client per area.</a></p>
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

        {/* Author card */}
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
                <p style={{ marginTop: 8, fontSize: '0.875rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.6 }}>Justin Borges founded The Answer Engine in 2025 after 13+ years in real estate, $200M+ in production, and discovering that AI search rankings now decide who gets cited as the answer. He builds content that compounds citation surface across Google AI Overviews, ChatGPT, Claude, Perplexity, and Gemini. <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Run your free AI Blind Spot Scan.</a></p>
              </div>
            </div>
          </div>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="font-plus-jakarta text-2xl md:text-3xl font-bold text-white mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: 'Is Thumbtack integrated with ChatGPT?',
                a: "Yes. Thumbtack integrated with OpenAI Operator in January 2025 and by October 2025 was embedded directly in ChatGPT for home services queries. When a homeowner asks ChatGPT to find a plumber, handyman, landscaper, or other home service pro, ChatGPT can pull from Thumbtack listings and route the booking directly through Thumbtack without the user ever visiting Thumbtack's website.",
              },
              {
                q: 'Does Angi help my business get found on ChatGPT?',
                a: 'Yes, through the Angi ChatGPT app launched in March 2026. The app allows homeowners to move from an AI conversation directly to hiring a professional on Angi. Additionally, Angi integrates with Amazon Alexa+ for voice-driven booking. An active Angi profile now feeds data into multiple AI recommendation systems simultaneously.',
              },
              {
                q: 'Does just being registered on Angi or Thumbtack guarantee AI recommendations?',
                a: 'No. Registration is the entry fee, not the prize. AI systems that pull from these platforms apply their own ranking signals before surfacing any business. Profile completeness, review count, review recency, listed services, response time history, and availability all factor in. A registered-but-neglected profile may be technically present in the system but effectively invisible.',
              },
              {
                q: 'Which is better for AI visibility: Angi or Thumbtack?',
                a: "They serve different AI channels. Thumbtack feeds ChatGPT directly. Angi feeds both ChatGPT and Amazon Alexa+. The highest-leverage move is to maintain strong profiles on both. If you had to prioritize one, Angi's broader AI integrations give it a slight edge for total AI-driven visibility.",
              },
              {
                q: 'Do I still need my own website if I am on Angi and Thumbtack?',
                a: 'Yes. Your website is the foundation that AI platforms like Perplexity and research-mode ChatGPT use when they crawl the web for recommendations. Directory profiles cover the booking-enabled AI flows, but your website covers the research-mode flows. The most visible businesses have both.',
              },
              {
                q: 'What makes an Angi or Thumbtack profile perform well in AI recommendations?',
                a: 'The signals that matter most: explicit service listings (every service named, not grouped), a review count above 20 with an average above 4.5, current availability calendar, rapid response time to inquiries (under 1 hour historically), accurate business hours, and professional photos.',
              },
            ].map(({ q, a }) => (
              <div key={q} className="border-b border-gray-800 pb-6">
                <h3 className="font-plus-jakarta font-bold text-white mb-2 text-lg">{q}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{a} <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a free 30-minute strategy call.</a></p>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
          <section className="ae-final-cta not-prose">
            <div className="ae-final-cta-inner">
              <h2 className="text-2xl sm:text-3xl font-black mb-4 text-white font-headline uppercase tracking-tighter">
                Local Search Just Split in Two — Are You Winning Both Halves?
              </h2>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                Google Maps is one game. AI search is a completely different game. You need to win both. The Answer Engine positions local businesses to appear in AI recommendations — not just Google results. Free audit. One business per market.
              </p>
              <a
                href="https://theanswerengine.ai/blindspot"
                className="inline-flex items-center justify-center gap-2 bg-[#F27D24] text-black font-black px-10 py-4 tracking-tighter hover:translate-y-[2px] transition-transform font-headline uppercase"
              >
                Run Free Local AI Audit →
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

      </main>
    </>
  )
}
