import type { Metadata } from 'next'
import Link from 'next/link'

export const revalidate = 86400
export const dynamic = 'force-static'
export const dynamicParams = true

const title = 'How Landscapers Get Found on AI Search'
const description = 'AI is now how homeowners find landscapers. Here is what signals ChatGPT, Perplexity, and Alexa+ use to recommend lawn care and landscaping businesses in 2026.'
const slug = 'how-landscapers-get-found-on-ai-search'
const publishDate = '2026-04-17'

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'landscapers AI search',
    'how landscaping businesses get found on ChatGPT',
    'lawn care AI recommendations',
    'landscaping business ChatGPT visibility',
    'get found on AI search landscaping',
    'landscaping local AI search',
    'lawn care ChatGPT citations',
    'how to get landscaping business on AI',
    'AI search for home services landscaping',
    'landscaping Perplexity recommendations',
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
          name: 'How do I get my landscaping business on ChatGPT?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'ChatGPT recommends landscapers based on the authority signals it finds crawling publicly available sources. That means your website needs clearly structured service pages (lawn mowing, irrigation, landscape design listed separately), consistent business information across directories, and evidence of real customer satisfaction like reviews on Yelp, Google, and Angi. Being listed on Thumbtack is particularly valuable because Thumbtack now has a direct ChatGPT integration that routes booking queries directly to their platform.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does Angi or Thumbtack help AI find my landscaping company?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, significantly. Thumbtack is directly integrated into ChatGPT, meaning when someone asks ChatGPT to find a landscaper in their area, it can pull from Thumbtack listings. Angi launched a similar ChatGPT app in early 2026. Amazon Alexa+ (powered by Claude) also pulls from Angi and Yelp for local home service bookings. An active, well-maintained profile on these platforms is not just about direct leads anymore: it is about feeding data to the AI systems that control recommendations.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why does AI recommend other landscapers but not mine?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'AI platforms favor landscapers who have structured, specific content about their services (not generic pages), consistent name, address, and phone number across all directories, recent and substantial customer reviews, and visible presence on the directories AI systems use as data sources. If your competitors appear and you do not, they likely have stronger signals in one or more of these areas. The gap is usually fixable.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do I need a website to get found on AI search as a landscaper?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A website remains the most powerful single asset for AI visibility. AI crawlers like GPTBot and PerplexityBot index publicly accessible web pages. Your website is the only place where you fully control the narrative about your services, service area, credentials, and customer proof. Without a website, you are entirely dependent on what third-party directories say about you, which is a fragile position. Landscapers with no website appear significantly less often in AI recommendations even when their directory listings are strong.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does it take for AI to start recommending my landscaping business?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'There is no fixed timeline because each AI platform has its own crawl and indexing schedule. Generally, businesses that make meaningful improvements to their web presence, directory listings, and review signals see changes in AI recommendation patterns within 60 to 90 days. Some businesses see faster results. The key is consistency: AI platforms are pattern-matching systems that favor signals that appear across multiple sources, so the more aligned your presence, the faster the signals accumulate.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is Alexa worth optimizing for if I run a landscaping business?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'More than ever. Alexa+ launched in 2025 with Claude AI powering its recommendations and integrated Angi, Yelp, Square, and Expedia for booking. This means voice queries like "Alexa, find a landscaper near me" can now pull from Angi listings and initiate booking through Yelp. If you are active on both platforms with complete profiles, you are eligible for Alexa+ recommendations. If your profile is incomplete or inactive, you will be skipped.',
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

      {/* Hero */}
      <header className="max-w-4xl mx-auto px-6 pt-10 pb-12">
        <div className="relative rounded-2xl overflow-hidden bg-[#0F1117] border border-gray-800">
          <svg
            className="absolute inset-0 w-full h-full opacity-10"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <defs>
              <pattern id="hero-grid-landscapers" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#F27D24" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-grid-landscapers)" />
          </svg>
          <div className="relative z-10 px-8 py-14 md:px-16">
            <div className="flex items-center gap-3 mb-5">
              <span className="ae-section-label">Industry Guides</span>
              <span className="text-gray-500 text-sm">10 min read</span>
            </div>
            <h1 className="font-plus-jakarta text-3xl md:text-5xl font-black text-white leading-tight mb-5">
              How Landscapers Get Found on AI Search
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl leading-relaxed">
              Homeowners used to call the number on a yard sign. Now they ask ChatGPT, Perplexity, or Alexa. Here is what those AI platforms look for before recommending a landscaping or lawn care business.
            </p>
            <p className="text-gray-500 text-sm mt-6">
              Published {publishDate} by Justin Borges
             Markets fill fast. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Check your territory availability.</a></p>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 pb-24">

        {/* Stats Grid */}
        <div className="ae-stats-grid mb-12">
          <div className="ae-stat-card">
            <span className="ae-stat-emoji">🏡</span>
            <span className="ae-stat-value">45%</span>
            <span className="ae-stat-label">of consumers now use AI to find local home services</span>
          </div>
          <div className="ae-stat-card">
            <span className="ae-stat-emoji">🤖</span>
            <span className="ae-stat-value">1.2%</span>
            <span className="ae-stat-label">of local businesses get recommended by ChatGPT (SOCi 2026)</span>
          </div>
          <div className="ae-stat-card">
            <span className="ae-stat-emoji">🌿</span>
            <span className="ae-stat-value">17%</span>
            <span className="ae-stat-label">of landscaping companies have tried any AI optimization</span>
          </div>
          <div className="ae-stat-card">
            <span className="ae-stat-emoji">📱</span>
            <span className="ae-stat-value">65%</span>
            <span className="ae-stat-label">of all searches projected to be AI-driven by end of 2026</span>
          </div>
        </div>

        {/* TOC */}
        <div className="ae-toc mb-12">
          <div className="ae-toc-title">What You Will Learn</div>
          <ol className="space-y-1 text-sm text-gray-400 list-decimal list-inside">
            <li><a href="#why-ai-matters" className="hover:text-[#F27D24] transition-colors">Why AI search now controls landscaping leads</a></li>
            <li><a href="#how-ai-picks" className="hover:text-[#F27D24] transition-colors">How AI decides which landscapers to recommend</a></li>
            <li><a href="#directory-power" className="hover:text-[#F27D24] transition-colors">The directory platforms feeding AI recommendations</a></li>
            <li><a href="#website-signals" className="hover:text-[#F27D24] transition-colors">What your website needs to say</a></li>
            <li><a href="#review-strategy" className="hover:text-[#F27D24] transition-colors">How reviews factor into AI citations</a></li>
            <li><a href="#alexa-plus" className="hover:text-[#F27D24] transition-colors">Alexa+ and voice-driven landscaping leads</a></li>
            <li><a href="#common-mistakes" className="hover:text-[#F27D24] transition-colors">Why most landscapers are invisible to AI</a></li>
          </ol>
        </div>

        {/* Section 1 */}
        <section id="why-ai-matters" className="mb-12">
          <h2 className="font-plus-jakarta text-2xl md:text-3xl font-bold text-white mb-4">
            The Way Homeowners Find Landscapers Has Changed
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Word of mouth still matters. Yard signs still get calls. But a growing slice of the market, one that is expanding fast, now starts with a different question: "Hey ChatGPT, who are the best landscapers near me?"
           Your first step: <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free AERO Blind Spot Scan.</a></p>
          <p className="text-gray-300 leading-relaxed mb-4">
            According to recent industry data, 45% of consumers now use AI tools to find local contractors and home service providers, up from just 6% twelve months earlier. That is not a trend. That is a structural shift in how customers discover and choose landscaping businesses.
           <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Claim your free call</a> before your market fills.</p>
          <p className="text-gray-300 leading-relaxed mb-4">
            The problem is that most landscaping businesses have not adapted. Only 17% of landscaping companies have tried any form of AI optimization, according to the 2025 Landscape Industry Report. That means the businesses who move now have an enormous window before the rest of the industry catches on.
           Reach out: <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>

          <div className="ae-cta-inline my-6">
            <p className="text-gray-400 text-sm">Not sure if AI can find your landscaping business? Call us at <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> today.</p>
            <Link href="/blindspot" className="text-[#F27D24] hover:text-[#D96416] font-semibold text-sm transition-colors">
              Get your free AI Blind Spot Report and find out in minutes
            </Link>
          </div>

          <div className="ae-callout ae-callout-info">
            <div className="ae-callout-title">The Window Is Open, But Not Forever</div>
            <p className="text-gray-300 text-sm leading-relaxed">
              When Google Maps launched, early adopters who claimed and optimized their listings dominated local search for years. AI search is at that same early inflection point. The landscapers who establish AI visibility now will be extremely difficult to displace later.
             <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Lock in your exclusive territory now.</a></p>
          </div>
        </section>

        {/* Section 2 */}
        <section id="how-ai-picks" className="mb-12">
          <h2 className="font-plus-jakarta text-2xl md:text-3xl font-bold text-white mb-4">
            How AI Decides Which Landscapers to Recommend
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            AI platforms are not mystery boxes. They have a method: crawl publicly available sources, assess authority signals, cross-validate against multiple data points, and surface the businesses that look most trustworthy and relevant. The criteria differ slightly by platform, but the core signals are consistent.
           <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Get your free AI readiness report.</a></p>

          <div className="ae-decision-matrix mb-6">
            <div className="ae-decision-row">
              <div className="ae-decision-if">Homeowner asks about lawn mowing</div>
              <div className="ae-decision-arrow">→</div>
              <div className="ae-decision-then">AI looks for landscapers with a dedicated mowing service page</div>
            </div>
            <div className="ae-decision-row">
              <div className="ae-decision-if">Homeowner asks about landscape design</div>
              <div className="ae-decision-arrow">→</div>
              <div className="ae-decision-then">AI looks for portfolio content, design credentials, and project descriptions</div>
            </div>
            <div className="ae-decision-row">
              <div className="ae-decision-if">Homeowner asks for irrigation repair</div>
              <div className="ae-decision-arrow">→</div>
              <div className="ae-decision-then">AI looks for a service page on irrigation and mentions of certifications</div>
            </div>
            <div className="ae-decision-row">
              <div className="ae-decision-if">AI finds conflicting business info</div>
              <div className="ae-decision-arrow">→</div>
              <div className="ae-decision-then">Business gets skipped or mentioned with low confidence</div>
            </div>
          </div>

          <p className="text-gray-300 leading-relaxed mb-4">
            This is why generic landscaping websites, one-page brochures, or sites with a single "Services" tab listing everything together perform so poorly in AI search. AI platforms are looking for specificity. The more clearly your website answers a specific question about a specific service, the more likely AI is to cite you when that question gets asked.
           Ready to act? <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a free strategy session.</a></p>

          <div className="ae-callout ae-callout-warning">
            <div className="ae-callout-title">The Specificity Problem</div>
            <p className="text-gray-300 text-sm leading-relaxed">
              "We do lawn care, landscaping, and more!" is the kind of copy AI ignores. "We provide weekly residential lawn mowing in [City], including edging, blowing, and disposal, for lots up to 1/4 acre" is the kind of content AI can actually use to answer a homeowner's question. Specificity is not just better marketing. It is the language of AI.
             Drop us a line at <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>
          </div>

          <div className="ae-cta-inline my-6">
            <p className="text-gray-400 text-sm">Wondering how your landscaping website reads to AI? Speak to an AEO specialist: <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.</p>
            <Link href="/blindspot" className="text-[#F27D24] hover:text-[#D96416] font-semibold text-sm transition-colors">
              Run your free Blind Spot Report to see exactly what AI sees
            </Link>
          </div>
        </section>

        {/* Section 3 */}
        <section id="directory-power" className="mb-12">
          <h2 className="font-plus-jakarta text-2xl md:text-3xl font-bold text-white mb-4">
            The Directory Platforms Feeding AI Recommendations
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Here is something most landscapers do not know: Thumbtack is directly embedded inside ChatGPT. When a homeowner asks ChatGPT to find a landscaper, ChatGPT can pull from Thumbtack listings and route the booking directly there. Angi launched a similar integration in early 2026. Amazon Alexa+ pulls from both Angi and Yelp.
           One client per city. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">See if your market is available.</a></p>
          <p className="text-gray-300 leading-relaxed mb-4">
            This changes the math on directory listings dramatically. Being on these platforms is no longer just about the leads the platform itself sends you. It is about being visible inside the AI systems that are rapidly becoming the primary discovery channel for home services.
           Check where you stand: <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free Blind Spot Scan.</a></p>

          <table className="ae-comparison-table mb-6">
            <thead>
              <tr>
                <th>Platform</th>
                <th>AI Integration</th>
                <th>Landscaping Visibility</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-semibold text-white">Thumbtack</td>
                <td>Direct ChatGPT integration (embedded)</td>
                <td className="text-green-400">High: booking routed through ChatGPT</td>
              </tr>
              <tr>
                <td className="font-semibold text-white">Angi</td>
                <td>ChatGPT app (launched March 2026) + Alexa+</td>
                <td className="text-green-400">High: both ChatGPT and Alexa+</td>
              </tr>
              <tr>
                <td className="font-semibold text-white">Yelp</td>
                <td>Alexa+ integration for local search</td>
                <td className="text-yellow-400">Medium: Alexa+ voice queries</td>
              </tr>
              <tr>
                <td className="font-semibold text-white">Google Business Profile</td>
                <td>Gemini AI + Google AI Overviews</td>
                <td className="text-yellow-400">Medium: Google AI ecosystem only</td>
              </tr>
              <tr>
                <td className="font-semibold text-white">Your Website</td>
                <td>GPTBot, PerplexityBot, ClaudeBot</td>
                <td className="text-blue-400">Foundation: all AI crawlers</td>
              </tr>
            </tbody>
          </table>

          <p className="text-gray-300 leading-relaxed mb-4">
            The smart move is not to pick one. It is to maintain accurate, complete profiles across all of these platforms simultaneously because each platform feeds a different AI system. A homeowner who uses ChatGPT for discovery and a homeowner who uses Alexa for booking may be routing through entirely different data pipelines.
           <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Schedule a free 30-min call.</a></p>

          <div className="ae-cta-block my-8">
            <h3 className="font-plus-jakarta text-xl font-bold text-white mb-3">Is Your Landscaping Business AI-Ready?</h3>
            <p className="text-gray-400 mb-6">Our Blind Spot Report shows exactly which AI platforms can find you, which cannot, and what is blocking your visibility. Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> for a custom strategy.</p>
            <Link href="/blindspot" className="ae-cta-primary inline-flex items-center gap-2">
              Get Your Free Blind Spot Report
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </section>

        {/* Section 4 */}
        <section id="website-signals" className="mb-12">
          <h2 className="font-plus-jakarta text-2xl md:text-3xl font-bold text-white mb-4">
            What Your Website Needs to Say
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Your website is the foundation. It is the one place where you fully control the information AI crawlers read about your business. Directory listings are important, but they are shallow data points. Your website is where you can build depth, and depth is what separates the landscapers AI cites from the ones it ignores.
           Questions? Call <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.</p>

          <div className="ae-pros-cons mb-6">
            <div className="ae-pros-box">
              <h3 className="font-plus-jakarta font-bold text-white mb-3">What AI Wants to See</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Individual service pages (mowing, design, irrigation, hardscaping each get their own page)</li>
                <li>Service area spelled out clearly by city and neighborhood</li>
                <li>Business history: how long you have been operating</li>
                <li>Credentials, licenses, and insurance mentioned</li>
                <li>Real customer reviews or testimonials embedded on-site</li>
                <li>Consistent NAP: name, address, phone matching every directory</li>
                <li>FAQ sections that answer homeowner questions directly</li>
              </ul>
            </div>
            <div className="ae-cons-box">
              <h3 className="font-plus-jakarta font-bold text-white mb-3">What Hurts Your AI Visibility</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>One-page websites with no service depth</li>
                <li>Vague descriptions like "full service landscaping"</li>
                <li>Phone numbers that differ across platforms</li>
                <li>No indication of service area</li>
                <li>Missing or outdated business hours</li>
                <li>JavaScript-heavy websites that crawlers struggle to read</li>
                <li>No structured data or schema markup</li>
              </ul>
            </div>
          </div>

          <div className="ae-callout ae-callout-success">
            <div className="ae-callout-title">The Service Page Rule</div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Every service you offer deserves its own page. Not a tab. Not a bullet point on a list. A full page with a descriptive title, what the service includes, who it is for, your pricing approach, and what the process looks like. This is not just good SEO. It is how AI systems map your capabilities.
             <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Secure your territory before a competitor does.</a></p>
          </div>
        </section>

        {/* Bar chart: signals that matter */}
        <section className="mb-12">
          <h2 className="font-plus-jakarta text-2xl md:text-3xl font-bold text-white mb-6">
            Signals That Drive AI Citations for Landscapers
          </h2>
          <div className="space-y-4">
            <div className="ae-bar-item">
              <span className="ae-bar-label">Service-specific pages</span>
              <div className="ae-bar-track">
                <div className="ae-bar-fill" style={{ width: '92%' }}></div>
              </div>
              <span className="ae-bar-value">92</span>
            </div>
            <div className="ae-bar-item">
              <span className="ae-bar-label">Consistent NAP data</span>
              <div className="ae-bar-track">
                <div className="ae-bar-fill" style={{ width: '88%' }}></div>
              </div>
              <span className="ae-bar-value">88</span>
            </div>
            <div className="ae-bar-item">
              <span className="ae-bar-label">Directory presence (Angi, Thumbtack, Yelp)</span>
              <div className="ae-bar-track">
                <div className="ae-bar-fill" style={{ width: '84%' }}></div>
              </div>
              <span className="ae-bar-value">84</span>
            </div>
            <div className="ae-bar-item">
              <span className="ae-bar-label">Review volume and recency</span>
              <div className="ae-bar-track">
                <div className="ae-bar-fill" style={{ width: '79%' }}></div>
              </div>
              <span className="ae-bar-value">79</span>
            </div>
            <div className="ae-bar-item">
              <span className="ae-bar-label">Service area content</span>
              <div className="ae-bar-track">
                <div className="ae-bar-fill" style={{ width: '74%' }}></div>
              </div>
              <span className="ae-bar-value">74</span>
            </div>
            <div className="ae-bar-item">
              <span className="ae-bar-label">Business age / years in operation</span>
              <div className="ae-bar-track">
                <div className="ae-bar-fill" style={{ width: '61%' }}></div>
              </div>
              <span className="ae-bar-value">61</span>
            </div>
          </div>
        </section>

        {/* Section 5 */}
        <section id="review-strategy" className="mb-12">
          <h2 className="font-plus-jakarta text-2xl md:text-3xl font-bold text-white mb-4">
            How Reviews Factor Into AI Citations
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            AI platforms care about reviews, but not in the way most landscapers think. It is not just about having a high star rating. It is about where your reviews live, how many you have, and what they say.
           <a href="https://theanswerengine.ai/blindspot" className="cta-inline">See your AI visibility score — free.</a></p>
          <p className="text-gray-300 leading-relaxed mb-4">
            Google reviews matter for Google Gemini and Google AI Overviews. Yelp reviews matter for Alexa+. Angi reviews matter for ChatGPT via the Angi integration. Thumbtack reviews matter for ChatGPT via the Thumbtack integration. There is no single review platform that covers all AI systems. A landscaper with 200 Google reviews and zero Yelp presence is invisible to Alexa+ regardless of how good their service is.
           <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book your free consultation here.</a></p>

          <div className="ae-callout ae-callout-orange">
            <div className="ae-callout-title">What AI Reads in Reviews</div>
            <p className="text-gray-300 text-sm leading-relaxed">
              AI models parse review text for patterns. A business with dozens of reviews mentioning "on time," "professional," "showed up when they said they would" builds a different authority profile than one with the same star rating but reviews that just say "great job." Specific, detailed reviews carry more weight than brief ones. Encourage customers to describe the work, not just rate it.
             Contact us at <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>
          </div>

          <div className="ae-cta-inline my-6">
            <p className="text-gray-400 text-sm">Want to know which review platforms are helping your AI visibility? Reach us at <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.</p>
            <Link href="/blindspot" className="text-[#F27D24] hover:text-[#D96416] font-semibold text-sm transition-colors">
              Get your free Blind Spot Report and see the full picture
            </Link>
          </div>
        </section>

        {/* Section 6 */}
        <section id="alexa-plus" className="mb-12">
          <h2 className="font-plus-jakarta text-2xl md:text-3xl font-bold text-white mb-4">
            Alexa+ and Voice-Driven Landscaping Leads
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Amazon launched Alexa+ in 2025 powered by Claude AI (from Anthropic) and integrated four major partner platforms: Yelp, Angi, Square, and Expedia. The result is a voice assistant that can now do what the old Alexa could not: actually book a landscaper, not just google one.
           We work with one business per market. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Check if yours is still open.</a></p>
          <p className="text-gray-300 leading-relaxed mb-4">
            A homeowner can say "Alexa, I need someone to mow my lawn on Saturday," and Alexa+ can search Angi and Yelp listings, match available pros, and initiate a booking, all without the homeowner touching a phone. This is a fundamentally new lead generation channel, and it runs through platforms you may already be listed on.
           Find your gaps with a <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free AERO scan.</a></p>

          <div className="ae-timeline mb-6">
            <div className="ae-timeline-item">
              <div className="ae-timeline-step">1</div>
              <div>
                <div className="font-semibold text-white text-sm">Homeowner asks Alexa+</div>
                <div className="text-gray-400 text-xs">"Find a landscaper near me for this weekend"</div>
              </div>
            </div>
            <div className="ae-timeline-item">
              <div className="ae-timeline-step">2</div>
              <div>
                <div className="font-semibold text-white text-sm">Alexa+ queries Angi and Yelp</div>
                <div className="text-gray-400 text-xs">Pulls listings that match service, location, and availability</div>
              </div>
            </div>
            <div className="ae-timeline-item">
              <div className="ae-timeline-step">3</div>
              <div>
                <div className="font-semibold text-white text-sm">Alexa+ surfaces a recommendation</div>
                <div className="text-gray-400 text-xs">Based on profile completeness, reviews, and service match</div>
              </div>
            </div>
            <div className="ae-timeline-item">
              <div className="ae-timeline-step">4</div>
              <div>
                <div className="font-semibold text-white text-sm">Homeowner confirms the booking</div>
                <div className="text-gray-400 text-xs">Payment processed through Square. No website visit required.</div>
              </div>
            </div>
          </div>

          <p className="text-gray-300 leading-relaxed mb-4">
            The landscapers who benefit from this are the ones with active Angi and Yelp profiles, current availability, and competitive response times. If your Angi profile has not been updated in a year, you will not surface in this flow.
           <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Schedule a free call</a> to see where you stand.</p>
        </section>

        {/* Section 7 */}
        <section id="common-mistakes" className="mb-12">
          <h2 className="font-plus-jakarta text-2xl md:text-3xl font-bold text-white mb-4">
            Why Most Landscapers Are Invisible to AI
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Only 1.2% of local businesses appear in ChatGPT recommendations, according to SOCi's 2026 Local Visibility Index. For landscapers, the number is even lower because the industry has been slower to adapt than sectors like restaurants, salons, or legal services. The most common reasons landscapers stay invisible:
           Send your questions to <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>

          <div className="ae-cheat-sheet mb-6">
            <div className="ae-cheat-sheet-title">Why Landscapers Get Skipped by AI</div>
            <table>
              <thead>
                <tr>
                  <th>Problem</th>
                  <th>Why It Hurts</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Generic website with no service depth</td>
                  <td>AI cannot match you to specific queries</td>
                </tr>
                <tr>
                  <td>Inconsistent phone number across platforms</td>
                  <td>AI treats conflicting info as low trust</td>
                </tr>
                <tr>
                  <td>No Thumbtack profile</td>
                  <td>Invisible to ChatGPT booking queries</td>
                </tr>
                <tr>
                  <td>Outdated Angi listing</td>
                  <td>Missed by Alexa+ and ChatGPT Angi integration</td>
                </tr>
                <tr>
                  <td>Reviews only on Google</td>
                  <td>Not visible to non-Google AI platforms</td>
                </tr>
                <tr>
                  <td>No FAQ content on site</td>
                  <td>AI has no questions to answer using your content</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="ae-callout ae-callout-warning">
            <div className="ae-callout-title">The Competitor Window</div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Right now, only a handful of landscapers in any given market have invested in AI visibility. That is a significant advantage for the first movers. In 12 to 18 months, the window will close as more businesses catch on. The landscapers who get recommended consistently by AI today will have accumulated the review signals, indexed content, and directory authority that makes them very hard to displace.
             Call <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> for a free consultation.</p>
          </div>
        </section>

        {/* Internal link section */}
        <section className="mb-12">
          <h2 className="font-plus-jakarta text-2xl font-bold text-white mb-4">Related Reading for Home Service Businesses</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/blog/how-contractors-and-home-service-companies-win-ai-search" className="block p-4 rounded-xl bg-white/5 border border-gray-800 hover:border-[#F27D24]/40 transition-colors">
              <span className="text-[#F27D24] text-xs font-semibold uppercase tracking-wide">How-To Guide</span>
              <p className="text-white font-semibold text-sm mt-1">How Contractors and Home Service Companies Win AI Search <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Claim your market territory — one client per area.</a></p>
            </Link>
            <Link href="/blog/does-being-on-angi-or-thumbtack-help-ai-find-you" className="block p-4 rounded-xl bg-white/5 border border-gray-800 hover:border-[#F27D24]/40 transition-colors">
              <span className="text-[#F27D24] text-xs font-semibold uppercase tracking-wide">Myth Busters</span>
              <p className="text-white font-semibold text-sm mt-1">Does Being on Angi or Thumbtack Help AI Find You <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Run your free AI Blind Spot Scan.</a></p>
            </Link>
          </div>
        </section>

        {/* 3-tier CTA block */}
        <div className="not-prose my-16 p-8 rounded-2xl bg-gradient-to-br from-[#F27D24]/10 to-transparent border border-[#F27D24]/20">
          <h3 className="font-plus-jakarta text-2xl font-bold text-white mb-3">Find Out If AI Can Actually Recommend Your Landscaping Business</h3>
          <p className="text-gray-400 mb-6">Our free Blind Spot Report audits your AI visibility across ChatGPT, Perplexity, Alexa+, and Google AI. You will see exactly where you appear, where you do not, and what is standing in the way. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a free 30-minute strategy call.</a></p>
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
                <p style={{ marginTop: 8, fontSize: '0.875rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.6 }}>Justin Borges founded The Answer Engine in 2025 after 13+ years in real estate, $200M+ in production, and discovering that AI search rankings now decide who gets cited as the answer. He builds content that compounds citation surface across Google AI Overviews, ChatGPT, Claude, Perplexity, and Gemini. Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> to get started.</p>
              </div>
            </div>
          </div>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="font-plus-jakarta text-2xl md:text-3xl font-bold text-white mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: 'How do I get my landscaping business on ChatGPT?',
                a: 'ChatGPT recommends landscapers based on the authority signals it finds crawling publicly available sources. That means your website needs clearly structured service pages (lawn mowing, irrigation, landscape design listed separately), consistent business information across directories, and evidence of real customer satisfaction like reviews on Yelp, Google, and Angi. Being listed on Thumbtack is particularly valuable because Thumbtack now has a direct ChatGPT integration that routes booking queries directly to their platform.',
              },
              {
                q: 'Does Angi or Thumbtack help AI find my landscaping company?',
                a: 'Yes, significantly. Thumbtack is directly integrated into ChatGPT, meaning when someone asks ChatGPT to find a landscaper in their area, it can pull from Thumbtack listings. Angi launched a similar integration in early 2026. Amazon Alexa+ (powered by Claude) also pulls from Angi and Yelp for local home service bookings. An active, well-maintained profile on these platforms is not just about the leads the platform itself sends you. It is about feeding data to the AI systems that control recommendations.',
              },
              {
                q: 'Why does AI recommend other landscapers but not mine?',
                a: 'AI platforms favor landscapers who have structured, specific content about their services (not generic pages), consistent name, address, and phone number across all directories, recent and substantial customer reviews, and visible presence on the directories AI systems use as data sources. If your competitors appear and you do not, they likely have stronger signals in one or more of these areas. The gap is usually fixable.',
              },
              {
                q: 'Do I need a website to get found on AI search as a landscaper?',
                a: 'A website remains the most powerful single asset for AI visibility. AI crawlers like GPTBot and PerplexityBot index publicly accessible web pages. Your website is the only place where you fully control the narrative about your services, service area, credentials, and customer proof. Without a website, you are entirely dependent on what third-party directories say about you, which is a fragile position.',
              },
              {
                q: 'How long does it take for AI to start recommending my landscaping business?',
                a: 'There is no fixed timeline because each AI platform has its own crawl and indexing schedule. Generally, businesses that make meaningful improvements to their web presence, directory listings, and review signals see changes in AI recommendation patterns within 60 to 90 days. The key is consistency: AI platforms are pattern-matching systems that favor signals that appear across multiple sources, so the more aligned your presence, the faster the signals accumulate.',
              },
              {
                q: 'Is Alexa worth optimizing for if I run a landscaping business?',
                a: 'More than ever. Alexa+ launched in 2025 with Claude AI powering its recommendations and integrated Angi, Yelp, Square, and Expedia for booking. This means voice queries like "Alexa, find a landscaper near me" can now pull from Angi listings and initiate booking through Yelp. If you are active on both platforms with complete profiles, you are eligible for Alexa+ recommendations. If your profile is incomplete or inactive, you will be skipped.',
              },
            ].map(({ q, a }) => (
              <div key={q} className="border-b border-gray-800 pb-6">
                <h3 className="font-plus-jakarta font-bold text-white mb-2 text-lg">{q}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{a} <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a></p>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <div className="ae-final-cta">
          <h2 className="font-plus-jakarta text-3xl font-black text-white mb-4">
            Stop Being Invisible to the Customers Looking for You
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            AI is already recommending landscapers in your area. Get your free Blind Spot Report to see exactly where you stand and what it takes to get recommended.
          </p>
          <Link href="/blindspot" className="inline-flex items-center gap-2 bg-[#F27D24] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#D96416] transition-colors ae-pulse-glow">
            Get Your Free Blind Spot Report
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
          <p className="text-gray-600 text-sm mt-4">Free. No credit card. Results in minutes.</p>
        </div>

      </main>
    </>
  )
}
