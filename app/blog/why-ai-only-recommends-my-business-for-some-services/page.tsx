import type { Metadata } from 'next'
import Link from 'next/link'

export const revalidate = 86400
export const dynamic = 'force-static'
export const dynamicParams = true

const title = 'Why AI Only Recommends My Business for Some Services'
const description = 'AI cites your business for one service but ignores you for others you offer. Here is why service-level visibility works the way it does and what changes it.'
const slug = 'why-ai-only-recommends-my-business-for-some-services'
const publishDate = '2026-04-17'

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'why AI recommends business for some services not others',
    'AI only mentions one service my business',
    'ChatGPT recommends one service not all',
    'service-specific AI citations',
    'how to get AI to recommend all your services',
    'AI search missing services business',
    'ChatGPT missing service recommendations',
    'why AI ignores some of my services',
    'local business AI service visibility',
    'get all services found on AI search',
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
          name: 'Why does ChatGPT recommend my business for one service but not others?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'AI platforms match recommendations to specific queries using the content signals they find. If your website has a well-developed page about service A but only mentions services B and C in a bullet list, AI will cite you for service A and skip you for B and C when those are asked about. Service-level visibility is directly tied to service-level content depth. Each service you offer needs its own signal strength, which usually means its own dedicated page.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does each service need its own web page to get recommended by AI?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Not always, but in practice, separate pages significantly outperform consolidated services lists for AI visibility. A dedicated service page allows you to build depth: what the service includes, who it is for, what the process looks like, what customers say about that specific service, and what makes your approach different. A bullet point on a general services page gives AI almost nothing to work with for a specific query.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I find out which services AI recommends me for?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The most direct way is to ask. Open ChatGPT, Perplexity, or Claude and ask: "Who offers [service] in [city]?" for each service you provide. If your business appears for some services and not others, you have identified your visibility gaps. Compare those gaps against your website content and directory listings to understand which services lack sufficient signal depth.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why does AI know I do plumbing but not that I also do water heater installation?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Because plumbing is a broad category with enough content signals on your site or in directories to be matched, while water heater installation is a specific sub-service that requires specific content to be cited for. AI is not making a business decision about which of your services to recommend. It is responding to the strength of signals it finds for each specific query. Where the signals are strong, you appear. Where they are weak or absent, you do not.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I fix service-level AI visibility gaps without rebuilding my website?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Partially. You can add service-specific pages to your existing website without a full rebuild. You can also update your directory profiles on Angi, Thumbtack, and Yelp to explicitly list every service you offer. These directory updates can improve AI-driven recommendation visibility for those platforms specifically. But for general AI search visibility across ChatGPT, Perplexity, and Claude, your website content depth is the primary lever.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does having too many services listed hurt AI visibility?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Not inherently, but lack of depth across many services does. A business claiming to do 20 different services with a one-sentence description for each will underperform compared to a business offering 5 services with deep, specific content for each. AI platforms are assessing whether you are a credible, specialized provider for each specific query. Breadth without depth reads as generalism, which does not score well for specific service queries.',
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
        <div className="relative rounded-2xl overflow-hidden bg-[#FFF] border border-gray-800">
          <svg
            className="absolute inset-0 w-full h-full opacity-10"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <defs>
              <pattern id="hero-grid-services" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#F27D24" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-grid-services)" />
          </svg>
          <div className="relative z-10 px-8 py-14 md:px-16">
            <div className="flex items-center gap-3 mb-5">
              <span className="ae-section-label">Business Pain Points</span>
              <span className="text-gray-500 text-sm">9 min read</span>
            </div>
            <h1 className="font-plus-jakarta text-3xl md:text-5xl font-black text-white leading-tight mb-5">
              Why AI Only Recommends My Business for Some Services
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl leading-relaxed">
              You offer six services. AI cites you for one. This is not a glitch. It is how AI recommendation logic works at the service level, and there is a specific reason it happens and a specific way to fix it.
            </p>
            <p className="text-gray-500 text-sm mt-6">
              Published {publishDate} by Justin Borges
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 pb-24">

        {/* Stats Grid */}
        <div className="ae-stats-grid mb-12">
          <div className="ae-stat-card">
            <span className="ae-stat-emoji">🎯</span>
            <span className="ae-stat-value">Service-level</span>
            <span className="ae-stat-label">AI citations are matched to specific queries, not business profiles</span>
          </div>
          <div className="ae-stat-card">
            <span className="ae-stat-emoji">📄</span>
            <span className="ae-stat-value">3x</span>
            <span className="ae-stat-label">More citations for services with dedicated pages vs bullet-point mentions</span>
          </div>
          <div className="ae-stat-card">
            <span className="ae-stat-emoji">🔍</span>
            <span className="ae-stat-value">89%</span>
            <span className="ae-stat-label">of ChatGPT and Perplexity citations come from different domains per query</span>
          </div>
          <div className="ae-stat-card">
            <span className="ae-stat-emoji">⚡</span>
            <span className="ae-stat-value">Signal gap</span>
            <span className="ae-stat-label">The reason AI skips a service you offer: not enough content signal for that query</span>
          </div>
        </div>

        {/* TOC */}
        <div className="ae-toc mb-12">
          <div className="ae-toc-title">What You Will Learn</div>
          <ol className="space-y-1 text-sm text-gray-400 list-decimal list-inside">
            <li><a href="#how-service-matching-works" className="hover:text-[#F27D24] transition-colors">How AI matches service queries to businesses</a></li>
            <li><a href="#why-one-service" className="hover:text-[#F27D24] transition-colors">Why one service appears and others do not</a></li>
            <li><a href="#signal-depth" className="hover:text-[#F27D24] transition-colors">The content depth problem</a></li>
            <li><a href="#directory-gaps" className="hover:text-[#F27D24] transition-colors">How directory listings create service gaps</a></li>
            <li><a href="#how-to-fix" className="hover:text-[#F27D24] transition-colors">How to fix service-level visibility gaps</a></li>
            <li><a href="#audit-yourself" className="hover:text-[#F27D24] transition-colors">How to audit your own service visibility</a></li>
          </ol>
        </div>

        {/* Section 1 */}
        <section id="how-service-matching-works" className="mb-12">
          <h2 className="font-plus-jakarta text-2xl md:text-3xl font-bold text-white mb-4">
            How AI Matches Service Queries to Businesses
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            AI platforms do not recommend businesses. They recommend businesses for specific things. When someone asks "who does water heater installation in Phoenix," the AI is not thinking about all the plumbers it knows and picking the best one. It is looking for which businesses have strong enough signals specifically around water heater installation in Phoenix.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            This is why your business can appear for "plumbing repair" queries and be completely absent from "water heater installation" queries, even if you do both. The AI is not making a judgment about your capabilities. It is responding to the signals it found during its last crawl of your web presence.
          </p>

          <div className="ae-callout ae-callout-info">
            <div className="ae-callout-title">AI Thinks in Queries, Not Businesses</div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Traditional advertising is about putting your business in front of an audience. AI recommendations work the opposite way: a user has a specific need, the AI scans its knowledge for signals matching that need, and surfaces the businesses where signals are strongest. If your signals for a specific service are weak, you are invisible for that service, regardless of how strong your overall business profile is.
            </p>
          </div>

          <div className="ae-cta-inline my-6">
            <p className="text-gray-400 text-sm">Want to know which services AI can find you for right now?</p>
            <Link href="/blindspot" className="text-[#F27D24] hover:text-[#D96416] font-semibold text-sm transition-colors">
              Get your free Blind Spot Report and see your service-level AI visibility
            </Link>
          </div>
        </section>

        {/* Section 2 */}
        <section id="why-one-service" className="mb-12">
          <h2 className="font-plus-jakarta text-2xl md:text-3xl font-bold text-white mb-4">
            Why One Service Appears and the Others Do Not
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            The service AI recommends you for is almost always the one with the most developed content presence. That might be your core service, or it might be the one you happened to write a full page about, or the one your customers mention most in their reviews, or the one most prominently listed on your directory profiles.
          </p>

          <div className="ae-decision-matrix mb-6">
            <div className="ae-decision-row">
              <div className="ae-decision-if">Service has a dedicated page with 800+ words</div>
              <div className="ae-decision-arrow">→</div>
              <div className="ae-decision-then">AI has enough signal to cite for that service query</div>
            </div>
            <div className="ae-decision-row">
              <div className="ae-decision-if">Service is listed as a bullet point on a general page</div>
              <div className="ae-decision-arrow">→</div>
              <div className="ae-decision-then">AI may not have enough signal to cite confidently</div>
            </div>
            <div className="ae-decision-row">
              <div className="ae-decision-if">Service explicitly named on Angi and Thumbtack</div>
              <div className="ae-decision-arrow">→</div>
              <div className="ae-decision-then">AI booking flows can recommend for that service</div>
            </div>
            <div className="ae-decision-row">
              <div className="ae-decision-if">Service mentioned nowhere but business website header</div>
              <div className="ae-decision-arrow">→</div>
              <div className="ae-decision-then">Near-invisible for that service across all AI platforms</div>
            </div>
          </div>

          <p className="text-gray-300 leading-relaxed mb-4">
            One pattern we see repeatedly: a plumbing company has a detailed page about emergency drain cleaning (because that is their most-called service) and gets cited for drain queries constantly, while their equally good water heater work goes unmentioned because they never built out that content. The AI is not biased against water heaters. It just never found enough to say about it.
          </p>

          <div className="ae-callout ae-callout-warning">
            <div className="ae-callout-title">The Revenue Implication</div>
            <p className="text-gray-300 text-sm leading-relaxed">
              If AI is only citing you for your least-profitable service while your high-margin specialty goes unmentioned, you are leaving money on the table with every AI recommendation that comes in. Service-level visibility is not just about coverage, it is about whether you are getting recommended for the work you most want to do.
            </p>
          </div>
        </section>

        {/* Section 3 */}
        <section id="signal-depth" className="mb-12">
          <h2 className="font-plus-jakarta text-2xl md:text-3xl font-bold text-white mb-4">
            The Content Depth Problem
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Content depth is the primary driver of service-level AI visibility. The difference between a service that AI cites you for and one it ignores is almost always the depth of information available about that service in your web presence.
          </p>

          <div className="ae-pros-cons mb-6">
            <div className="ae-pros-box">
              <h3 className="font-plus-jakarta font-bold text-white mb-3">What "Depth" Looks Like for a Service</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>A dedicated page with the service name in the H1</li>
                <li>What the service includes, step by step</li>
                <li>What types of customers or properties it is for</li>
                <li>Common questions answered in FAQ format</li>
                <li>Customer reviews mentioning that specific service</li>
                <li>Pricing approach or range (even a ballpark)</li>
                <li>Before/after examples or case descriptions</li>
                <li>Why your approach to that service is different</li>
              </ul>
            </div>
            <div className="ae-cons-box">
              <h3 className="font-plus-jakarta font-bold text-white mb-3">What "Thin Signal" Looks Like</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>"Water Heater Installation" as a bullet point</li>
                <li>One sentence description of the service</li>
                <li>No reviews mentioning that specific service</li>
                <li>Service listed on Angi as part of a group</li>
                <li>No FAQ content about that service</li>
                <li>No mention of service area for that specific service</li>
                <li>No photos of that type of work</li>
              </ul>
            </div>
          </div>

          <p className="text-gray-300 leading-relaxed mb-4">
            The AI platforms that recommend local businesses, including ChatGPT, Perplexity, and Claude, are pattern-matching systems. A service with thin signal is not matched confidently to queries. A service with deep signal is matched reliably. The relationship between content depth and AI citation rate is not subtle: businesses with dedicated service pages see roughly three times more AI citations for that service than businesses that only list it on a general services page.
          </p>

          <div className="ae-cta-inline my-6">
            <p className="text-gray-400 text-sm">Want to see which of your services have strong AI signals vs weak ones?</p>
            <Link href="/blindspot" className="text-[#F27D24] hover:text-[#D96416] font-semibold text-sm transition-colors">
              Run your free Blind Spot Report for a service-level visibility breakdown
            </Link>
          </div>
        </section>

        {/* Section 4 */}
        <section id="directory-gaps" className="mb-12">
          <h2 className="font-plus-jakarta text-2xl md:text-3xl font-bold text-white mb-4">
            How Directory Listings Create Service Gaps
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Directory platforms like Angi, Thumbtack, and Yelp now directly feed AI recommendations (see our article on <Link href="/blog/does-being-on-angi-or-thumbtack-help-ai-find-you" className="text-[#F27D24] hover:text-[#D96416] transition-colors">how Thumbtack feeds ChatGPT directly</Link>). This creates a second layer of service-level visibility gaps beyond your website.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            When ChatGPT queries Thumbtack for "HVAC installation in Dallas," it looks for pros who have HVAC installation explicitly listed as a service in their Thumbtack profile. If you are an HVAC company with only "HVAC" listed as a general category, you may be skipped for this specific query in favor of a competitor who has "HVAC installation," "AC installation," and "heat pump installation" listed as separate explicit services.
          </p>

          <table className="ae-comparison-table mb-6">
            <thead>
              <tr>
                <th>Service Listing Approach</th>
                <th>AI Booking Visibility</th>
                <th>General AI Visibility</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-white font-semibold">"HVAC" (general category)</td>
                <td className="text-yellow-400">Partial: broad queries only</td>
                <td className="text-yellow-400">Partial: low confidence on specifics</td>
              </tr>
              <tr>
                <td className="text-white font-semibold">"HVAC Installation" (explicit service)</td>
                <td className="text-green-400">Strong: matched on installation queries</td>
                <td className="text-green-400">Strong: clear service signal</td>
              </tr>
              <tr>
                <td className="text-white font-semibold">"AC Installation, Heat Pump Install, Furnace Replacement" (all explicit)</td>
                <td className="text-green-400">Strongest: matched on every sub-service</td>
                <td className="text-green-400">Strongest: deep service coverage</td>
              </tr>
              <tr>
                <td className="text-white font-semibold">No directory listing at all</td>
                <td className="text-red-400">None: invisible to booking-mode AI</td>
                <td className="text-yellow-400">Website-only visibility</td>
              </tr>
            </tbody>
          </table>

          <div className="ae-callout ae-callout-orange">
            <div className="ae-callout-title">The Specificity Rule Applies Everywhere</div>
            <p className="text-gray-300 text-sm leading-relaxed">
              The same principle that makes dedicated website pages outperform bullet points applies to directories: explicit, specific service names outperform general categories. "Emergency plumbing" gets matched to emergency plumbing queries. "Plumbing" alone may not. The businesses who list every service by its specific name, everywhere they appear online, consistently outperform those who group services into vague categories.
            </p>
          </div>
        </section>

        {/* Section 5 */}
        <section id="how-to-fix" className="mb-12">
          <h2 className="font-plus-jakarta text-2xl md:text-3xl font-bold text-white mb-4">
            How to Fix Service-Level Visibility Gaps
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Once you know which services are under-visible, the fix is straightforward in concept: build the signal depth that AI is looking for. The execution takes work, but the direction is clear.
          </p>

          <div className="ae-cheat-sheet mb-6">
            <div className="ae-cheat-sheet-title">Service Visibility Gap Fix Checklist</div>
            <table>
              <thead>
                <tr>
                  <th>Channel</th>
                  <th>Action</th>
                  <th>Impact</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-semibold text-white">Website</td>
                  <td>Create a dedicated page for each under-visible service</td>
                  <td className="text-green-400">High: primary signal for general AI crawlers</td>
                </tr>
                <tr>
                  <td className="font-semibold text-white">Website</td>
                  <td>Add FAQ section to each service page answering specific questions</td>
                  <td className="text-green-400">High: FAQs match conversational AI queries directly</td>
                </tr>
                <tr>
                  <td className="font-semibold text-white">Angi</td>
                  <td>List every service by explicit name (not grouped)</td>
                  <td className="text-green-400">High: feeds Angi ChatGPT app and Alexa+</td>
                </tr>
                <tr>
                  <td className="font-semibold text-white">Thumbtack</td>
                  <td>List every service by explicit name</td>
                  <td className="text-green-400">High: feeds Thumbtack ChatGPT integration</td>
                </tr>
                <tr>
                  <td className="font-semibold text-white">Reviews</td>
                  <td>Ask customers to mention the specific service in their review</td>
                  <td className="text-yellow-400">Medium: reinforces service signal across platforms</td>
                </tr>
                <tr>
                  <td className="font-semibold text-white">Google Business Profile</td>
                  <td>Add each service individually in the Services section</td>
                  <td className="text-yellow-400">Medium: feeds Google AI Overviews</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="ae-cta-block my-8">
            <h3 className="font-plus-jakarta text-xl font-bold text-white mb-3">See Exactly Which Services AI Is Missing</h3>
            <p className="text-gray-400 mb-6">Our Blind Spot Report identifies which of your services have strong AI visibility and which have gaps, so you know exactly where to focus.</p>
            <Link href="/blindspot" className="ae-cta-primary inline-flex items-center gap-2">
              Get Your Free Blind Spot Report
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </section>

        {/* Section 6 */}
        <section id="audit-yourself" className="mb-12">
          <h2 className="font-plus-jakarta text-2xl md:text-3xl font-bold text-white mb-4">
            How to Audit Your Own Service-Level Visibility
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Before investing in fixes, it is worth knowing exactly what the current state is. Here is a simple audit you can run yourself to see which services AI recommends you for and which it misses.
          </p>

          <div className="ae-timeline mb-6">
            <div className="ae-timeline-item">
              <div className="ae-timeline-step">1</div>
              <div>
                <div className="font-semibold text-white text-sm">List every service you offer</div>
                <div className="text-gray-400 text-xs">Be specific: "water heater installation," not "plumbing"</div>
              </div>
            </div>
            <div className="ae-timeline-item">
              <div className="ae-timeline-step">2</div>
              <div>
                <div className="font-semibold text-white text-sm">Ask ChatGPT for each service in your city</div>
                <div className="text-gray-400 text-xs">Example: "Who does water heater installation in [city]?" Note if your business appears</div>
              </div>
            </div>
            <div className="ae-timeline-item">
              <div className="ae-timeline-step">3</div>
              <div>
                <div className="font-semibold text-white text-sm">Repeat on Perplexity</div>
                <div className="text-gray-400 text-xs">Different AI, different source signals. Your results may differ significantly</div>
              </div>
            </div>
            <div className="ae-timeline-item">
              <div className="ae-timeline-step">4</div>
              <div>
                <div className="font-semibold text-white text-sm">Map visibility to content</div>
                <div className="text-gray-400 text-xs">Services where you appear: what content exists? Services where you are absent: what is missing?</div>
              </div>
            </div>
            <div className="ae-timeline-item">
              <div className="ae-timeline-step">5</div>
              <div>
                <div className="font-semibold text-white text-sm">Prioritize by revenue impact</div>
                <div className="text-gray-400 text-xs">Fix visibility gaps for your highest-margin services first</div>
              </div>
            </div>
          </div>

          <div className="ae-callout ae-callout-success">
            <div className="ae-callout-title">The One-Question Self-Test</div>
            <p className="text-gray-300 text-sm leading-relaxed">
              For any service you offer, ask yourself: "If someone asked ChatGPT exactly what I do, would my website give ChatGPT enough information to confidently cite me?" If the honest answer is no, that is your visibility gap. The services where the answer is yes are the ones AI recommends you for.
            </p>
          </div>

          <div className="ae-cta-inline my-6">
            <p className="text-gray-400 text-sm">Want a professional audit instead of doing it yourself?</p>
            <Link href="/blindspot" className="text-[#F27D24] hover:text-[#D96416] font-semibold text-sm transition-colors">
              Get your free Blind Spot Report for a service-by-service AI visibility analysis
            </Link>
          </div>
        </section>

        {/* Internal links */}
        <section className="mb-12">
          <h2 className="font-plus-jakarta text-2xl font-bold text-white mb-4">Related Reading</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/blog/how-to-write-a-service-page-that-ai-platforms-actually-cite" className="block p-4 rounded-xl bg-white/5 border border-gray-800 hover:border-[#F27D24]/40 transition-colors">
              <span className="text-[#F27D24] text-xs font-semibold uppercase tracking-wide">How-To Guides</span>
              <p className="text-white font-semibold text-sm mt-1">How to Write a Service Page That AI Platforms Actually Cite</p>
            </Link>
            <Link href="/blog/why-ai-never-mentions-your-business-by-name" className="block p-4 rounded-xl bg-white/5 border border-gray-800 hover:border-[#F27D24]/40 transition-colors">
              <span className="text-[#F27D24] text-xs font-semibold uppercase tracking-wide">Business Pain Points</span>
              <p className="text-white font-semibold text-sm mt-1">Why AI Never Mentions Your Business by Name</p>
            </Link>
          </div>
        </section>

        {/* 3-tier CTA */}
        <div className="not-prose my-16 p-8 rounded-2xl bg-gradient-to-br from-[#F27D24]/10 to-transparent border border-[#F27D24]/20">
          <h3 className="font-plus-jakarta text-2xl font-bold text-white mb-3">Find Out Which Services AI Is Skipping For Your Business</h3>
          <p className="text-gray-400 mb-6">Our free Blind Spot Report breaks down your AI visibility by service, so you can see exactly where the gaps are and prioritize what to fix first.</p>
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
                <p style={{ marginTop: 8, fontSize: '0.875rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.6 }}>Justin Borges founded The Answer Engine in 2025 after 13+ years in real estate, $200M+ in production, and discovering that AI search rankings now decide who gets cited as the answer. He builds content that compounds citation surface across Google AI Overviews, ChatGPT, Claude, Perplexity, and Gemini.</p>
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
                q: 'Why does ChatGPT recommend my business for one service but not others?',
                a: 'AI platforms match recommendations to specific queries using the content signals they find. If your website has a well-developed page about service A but only mentions services B and C in a bullet list, AI will cite you for service A and skip you for B and C when those are asked about. Service-level visibility is directly tied to service-level content depth.',
              },
              {
                q: 'Does each service need its own web page to get recommended by AI?',
                a: 'Not always, but in practice, separate pages significantly outperform consolidated services lists for AI visibility. A dedicated service page allows you to build depth: what the service includes, who it is for, what the process looks like, what customers say about that specific service, and what makes your approach different.',
              },
              {
                q: 'How do I find out which services AI recommends me for?',
                a: 'The most direct way is to ask. Open ChatGPT, Perplexity, or Claude and ask: "Who offers [service] in [city]?" for each service you provide. If your business appears for some services and not others, you have identified your visibility gaps.',
              },
              {
                q: 'Why does AI know I do plumbing but not that I also do water heater installation?',
                a: 'Because plumbing is a broad category with enough content signals to be matched, while water heater installation is a specific sub-service that requires specific content to be cited for. Where the signals are strong, you appear. Where they are weak or absent, you do not.',
              },
              {
                q: 'Can I fix service-level AI visibility gaps without rebuilding my website?',
                a: 'Partially. You can add service-specific pages to your existing website without a full rebuild. You can also update your directory profiles on Angi, Thumbtack, and Yelp to explicitly list every service you offer. For general AI search visibility across ChatGPT, Perplexity, and Claude, your website content depth is the primary lever.',
              },
              {
                q: 'Does having too many services listed hurt AI visibility?',
                a: 'Not inherently, but lack of depth across many services does. A business claiming to do 20 different services with a one-sentence description for each will underperform compared to a business offering 5 services with deep, specific content for each. Breadth without depth reads as generalism, which does not score well for specific service queries.',
              },
            ].map(({ q, a }) => (
              <div key={q} className="border-b border-gray-800 pb-6">
                <h3 className="font-plus-jakarta font-bold text-white mb-2 text-lg">{q}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <div className="ae-final-cta">
          <h2 className="font-plus-jakarta text-3xl font-black text-white mb-4">
            Get Found for Every Service You Offer
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Stop letting AI ignore half your business. Get your free Blind Spot Report and see exactly which services have strong AI visibility and which ones need work.
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
