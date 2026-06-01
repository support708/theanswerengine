import type { Metadata } from 'next'
import Link from 'next/link'

export const revalidate = 86400
export const dynamic = 'force-static'
export const dynamicParams = true

const title = 'Does Domain Age Matter for AI Search Visibility'
const description =
  'Domain age is not the gatekeeper it was for Google SEO. Discover what AI search platforms actually evaluate and how newer sites can still win citations.'
const slug = 'does-domain-age-matter-for-ai-search-visibility'
const publishDate = '2026-03-29'

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'domain age AI search visibility',
    'does domain age matter AI',
    'AI search ranking factors',
    'new website AI citations',
    'ChatGPT domain authority',
    'Perplexity domain age',
    'AI search vs SEO domain age',
    'answer engine optimization domain',
    'AI visibility new domain',
    'domain age ChatGPT recommendations',
  ],
  openGraph: {
    title,
    description,
    type: 'article',
    publishedTime: publishDate,
    authors: ['https://theanswerengine.ai/about'],
    url: `https://www.theanswerengine.ai/blog/${slug}`,
    images: [
      {
        url: `https://www.theanswerengine.ai/blog/${slug}.svg`,
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
    images: [`https://www.theanswerengine.ai/blog/${slug}.svg`],
  },
  alternates: {
    canonical: `https://www.theanswerengine.ai/blog/${slug}`,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: title,
      description,
      image: `https://www.theanswerengine.ai/blog/${slug}.svg`,
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
        '@id': `https://www.theanswerengine.ai/blog/${slug}`,
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Does domain age directly affect AI search citations?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Domain age is a weak indirect signal, not a direct ranking factor for AI search. Google AI Overviews do cite older domains more frequently (49% of cited domains are over 15 years old), but this correlation reflects accumulated trust signals like backlinks, mentions, and content depth rather than age itself. A new domain with strong third-party validation can outperform an old domain with thin content.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can a new website get cited by ChatGPT or Perplexity?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. ChatGPT already sources 12% of its citations from domains less than 5 years old, and Bing Copilot sources nearly 19% from newer domains. Fresh, expert, well-structured content with third-party validation can earn citations even from a relatively young domain. The key is building trust signals quickly through directory listings, review platforms, and consistent content publishing.',
          },
        },
        {
          '@type': 'Question',
          name: 'What matters more than domain age for AI search visibility?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Content freshness, topical authority, third-party mentions, structured data, and E-E-A-T signals matter far more than domain age for AI citations. Pages not updated quarterly are 3x more likely to lose citations. Domains with profiles on platforms like Trustpilot, Yelp, and G2 are 3x more likely to be cited by ChatGPT than domains without review presence.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do AI platforms use Domain Authority scores?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "AI platforms like ChatGPT, Perplexity, and Google AI Overviews do not use Moz Domain Authority or any equivalent internal score. They generate answers by drawing on content they have crawled and indexed. However, signals that correlate with high domain authority, including referring domains, brand mentions, and editorial citations, still influence which sources AI systems favor.",
          },
        },
        {
          '@type': 'Question',
          name: 'How long does it take a new domain to gain AI search visibility?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'First AI citations from a new domain can appear within 30 to 60 days if the site publishes high-quality structured content, earns directory listings, and accumulates third-party reviews early. Consistent visibility across multiple AI platforms typically takes 90 to 180 days of sustained optimization effort.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the biggest mistake business owners make about domain age and AI search?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The biggest mistake is assuming a 10-year-old domain automatically outranks competitors in AI search, or that a new domain cannot compete. Both assumptions are wrong. AI platforms reward current relevance, not historical tenure. An old domain with stale content and no third-party presence will lose to a new domain with fresh, authoritative, well-cited content.',
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
          name: 'Does Domain Age Matter for AI Search Visibility',
          item: `https://www.theanswerengine.ai/blog/${slug}`,
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
      <main className="min-h-screen" style={{ background: '#0F1117' }}>
        {/* Hero Section */}
        <section className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0F1117 0%, #1a1025 50%, #0F1117 100%)' }}>
          <svg
            aria-hidden="true"
            className="absolute inset-0 w-full h-full opacity-10 pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern id="hero-grid-94" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#F27D24" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-grid-94)" />
          </svg>
          <div className="relative max-w-4xl mx-auto px-6 py-20">
            {/* Breadcrumbs */}
            <nav className="text-sm text-gray-500 mb-8" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2">&rsaquo;</span>
              <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
              <span className="mx-2">&rsaquo;</span>
              <span className="text-gray-400">Does Domain Age Matter for AI Search</span>
            </nav>
          {/* Championship Cover Image */}
          <div className="ae-article-hero w-full rounded-xl overflow-hidden mb-10" style={{ maxHeight: 420 }}>
            <img
              src="/blog/does-domain-age-matter-for-ai-search-visibility.webp"
              alt="does domain age matter for ai search visibility"
              style={{ width: '100%', height: 420, objectFit: 'cover', display: 'block' }}
              loading="eager"
            />
          </div>

            {/* Category Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl mb-6" style={{ background: 'rgba(255,106,0,0.12)', border: '1px solid rgba(255,106,0,0.3)' }}>
              <span className="w-2 h-2 rounded-full inline-block" style={{ background: '#F27D24' }}></span>
              <span className="text-sm font-semibold tracking-wider uppercase" style={{ color: '#F27D24' }}>Myth Busters</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight font-plus-jakarta">
              Does Domain Age Matter for AI Search Visibility?
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl leading-relaxed">
              The old rule said: older domain equals more Google authority. But AI search platforms don't play by those rules. The truth about domain age and AI citations will surprise most business owners, and it opens a real window for businesses willing to move fast.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-500">
              <span>Published March 29, 2026</span>
              <span className="text-gray-700">|</span>
              <span>12 min read</span>
              <span className="text-gray-700">|</span>
              <span>Justin Borges</span>
            </div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 py-12">

          {/* Stats Grid */}
          <section className="ae-stats-grid grid grid-cols-2 md:grid-cols-4 gap-4 mb-14" aria-label="Key statistics">
            <div className="ae-stat-card rounded-xl p-5 text-center" style={{ background: 'rgba(255,106,0,0.07)', border: '1px solid rgba(255,106,0,0.2)' }}>
              <div className="text-3xl font-bold mb-1 font-plus-jakarta" style={{ color: '#F27D24' }}>49%</div>
              <div className="text-xs text-gray-400 leading-snug">of Google AI Overview citations go to domains over 15 years old</div>
            </div>
            <div className="ae-stat-card rounded-xl p-5 text-center" style={{ background: 'rgba(255,106,0,0.07)', border: '1px solid rgba(255,106,0,0.2)' }}>
              <div className="text-3xl font-bold mb-1 font-plus-jakarta" style={{ color: '#F27D24' }}>12%</div>
              <div className="text-xs text-gray-400 leading-snug">of ChatGPT citations already come from domains less than 5 years old</div>
            </div>
            <div className="ae-stat-card rounded-xl p-5 text-center" style={{ background: 'rgba(255,106,0,0.07)', border: '1px solid rgba(255,106,0,0.2)' }}>
              <div className="text-3xl font-bold mb-1 font-plus-jakarta" style={{ color: '#F27D24' }}>3x</div>
              <div className="text-xs text-gray-400 leading-snug">more likely to be cited by ChatGPT with active review platform profiles</div>
            </div>
            <div className="ae-stat-card rounded-xl p-5 text-center" style={{ background: 'rgba(255,106,0,0.07)', border: '1px solid rgba(255,106,0,0.2)' }}>
              <div className="text-3xl font-bold mb-1 font-plus-jakarta" style={{ color: '#F27D24' }}>3x</div>
              <div className="text-xs text-gray-400 leading-snug">more likely to lose citations if content is not updated quarterly</div>
            </div>
          </section>

          {/* Inline CTA 1 */}
          <div className="ae-cta-inline rounded-xl p-5 mb-10 flex flex-col sm:flex-row items-start sm:items-center gap-4" style={{ background: 'rgba(255,106,0,0.08)', border: '1px solid rgba(255,106,0,0.25)' }}>
            <div className="flex-1">
              <p className="text-white font-semibold mb-1">Not sure where your domain stands with AI search?</p>
              <p className="text-gray-400 text-sm">Get a free AI visibility audit and find out exactly what's holding you back. Markets fill fast. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Check your territory availability.</a></p>
            </div>
            <Link href="/contact" className="shrink-0 px-5 py-3 rounded-lg font-semibold text-sm transition-all hover:scale-105" style={{ background: '#F27D24', color: '#fff' }}>
              Get Free Audit
            </Link>
          </div>

          {/* Table of Contents */}
          <nav className="ae-toc rounded-xl p-6 mb-12" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }} aria-label="Table of contents">
            <h2 className="text-lg font-bold text-white mb-4 font-plus-jakarta">In This Article</h2>
            <ol className="space-y-2 text-sm">
              <li><a href="#myth-vs-reality" className="text-gray-400 hover:text-white transition-colors">1. The Myth vs. The Reality: Domain Age in Traditional SEO</a></li>
              <li><a href="#how-ai-actually-works" className="text-gray-400 hover:text-white transition-colors">2. How AI Search Platforms Actually Evaluate Sources</a></li>
              <li><a href="#platform-breakdown" className="text-gray-400 hover:text-white transition-colors">3. Platform-by-Platform Breakdown: ChatGPT, Perplexity, Google AI</a></li>
              <li><a href="#what-really-drives-citations" className="text-gray-400 hover:text-white transition-colors">4. What Really Drives AI Citations (It's Not Your Registration Date)</a></li>
              <li><a href="#new-vs-established" className="text-gray-400 hover:text-white transition-colors">5. New Websites vs. Established Domains: A Fair Fight?</a></li>
              <li><a href="#decision-matrix" className="text-gray-400 hover:text-white transition-colors">6. Decision Matrix: Should You Invest in a New Domain or Existing One?</a></li>
              <li><a href="#cheat-sheet" className="text-gray-400 hover:text-white transition-colors">7. AI Visibility Cheat Sheet: Domain Age Edition</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-white transition-colors">8. Frequently Asked Questions</a></li>
            </ol>
          </nav>

          {/* Section 1: Myth vs Reality */}
          <section id="myth-vs-reality" className="mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 font-plus-jakarta">The Myth vs. The Reality: Domain Age in Traditional SEO</h2>
            <p className="text-gray-300 mb-5 leading-relaxed">
              For nearly two decades, domain age was treated as a meaningful SEO signal. The logic was simple: a domain registered in 2005 had more time to build backlinks, earn editorial citations, and demonstrate staying power. Google's algorithm rewarded longevity, at least partially, because age acted as a proxy for accumulated trust.
            </p>
            <p className="text-gray-300 mb-5 leading-relaxed">
              That era shaped how an entire generation of marketers thought about websites. "You need a few years before Google really takes you seriously" became conventional wisdom. And for Google Search, that wisdom had at least some basis in data.
             Your first step: <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free AERO Blind Spot Scan.</a></p>
            <p className="text-gray-300 mb-5 leading-relaxed">
              Then AI search arrived and rewrote the playbook.
            </p>

            {/* Callout Warning */}
            <div className="ae-callout-warning rounded-xl p-6 mb-8" style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.25)' }}>
              <div className="flex items-start gap-3">
                <span className="text-xl mt-0.5">&#9888;</span>
                <div>
                  <p className="font-bold text-red-400 mb-2">The Dangerous Assumption <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Claim your free call</a> before your market fills.</p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Many business owners assume their decade-old domain gives them an automatic edge in AI search. It doesn't. An old domain with stale content, thin third-party validation, and no structured data will lose to a newer domain that has done the optimization work correctly. Age without quality is just a registration fee.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-gray-300 mb-5 leading-relaxed">
              AI platforms like ChatGPT, Perplexity, Claude, and Google AI Mode do not maintain a registry of domain registration dates. They do not run a chronological check before deciding which source to cite. What they do, constantly and at scale, is evaluate content quality, external validation, structured data, and topical authority, none of which are locked to a calendar.
             Reach out: <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>
          </section>

          {/* Section 2: How AI Actually Works */}
          <section id="how-ai-actually-works" className="mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 font-plus-jakarta">How AI Search Platforms Actually Evaluate Sources</h2>
            <p className="text-gray-300 mb-5 leading-relaxed">
              To understand domain age's real role, you need to understand how AI search systems decide what to cite. The process is fundamentally different from Google's PageRank-based approach.
            </p>
            <p className="text-gray-300 mb-5 leading-relaxed">
              Large language models are trained on massive datasets of text from across the web. When they generate answers, they draw on patterns in that training data combined with real-time retrieval (in platforms like Perplexity and Google AI Mode). The selection of sources isn't a direct ranking calculation, it's a confidence assessment: which sources appear consistently authoritative across multiple independent signals?
             Call us at <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> today.</p>

            {/* Callout Info */}
            <div className="ae-callout-info rounded-xl p-6 mb-8" style={{ background: 'rgba(59,130,246,0.08)', border: '1px solid rgba(59,130,246,0.25)' }}>
              <div className="flex items-start gap-3">
                <span className="text-xl mt-0.5">&#9432;</span>
                <div>
                  <p className="font-bold text-blue-400 mb-2">What AI Platforms Actually Look For</p>
                  <ul className="text-gray-300 text-sm space-y-2 leading-relaxed">
                    <li><span className="text-blue-400 font-semibold">Content freshness:</span> Pages updated in the past 3 months receive significantly more citations than stale pages.</li>
                    <li><span className="text-blue-400 font-semibold">Third-party consensus:</span> 85% of brand mentions that influence AI recommendations originate from third-party pages, not your own domain.</li>
                    <li><span className="text-blue-400 font-semibold">Structured data:</span> Schema markup helps AI parse what your content means, not just what it says.</li>
                    <li><span className="text-blue-400 font-semibold">E-E-A-T signals:</span> Demonstrated expertise, author credentials, and institutional trust markers all feed AI confidence scores.</li>
                    <li><span className="text-blue-400 font-semibold">Community presence:</span> Reddit, YouTube, and review platforms account for roughly 48% of AI citations.</li>
                  </ul>
                </div>
              </div>
            </div>

            <p className="text-gray-300 mb-5 leading-relaxed">
              Domain Authority, the Moz metric that became shorthand for SEO credibility, has no equivalent internal score in any major AI platform. Research on AI citation patterns shows Domain Authority correlation dropped to just r=0.18 for AI citations, meaning DA explains less than 4% of the variance in whether a domain gets cited. That is statistical noise.
             <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Lock in your exclusive territory now.</a></p>
            <p className="text-gray-300 mb-5 leading-relaxed">
              What does have a strong correlation: referring domain count (sites with over 32,000 referring domains are 3.5x more likely to be cited by ChatGPT), but again, this reflects the accumulated trust signals that big domains carry, not their age per se. A new domain that rapidly earns authoritative mentions can compress what previously took years.
            </p>

            {/* Inline CTA 2 */}
            <div className="ae-cta-inline rounded-xl p-5 mb-4" style={{ background: 'rgba(255,106,0,0.08)', border: '1px solid rgba(255,106,0,0.25)' }}>
              <p className="text-white font-semibold mb-1">Ready to stop guessing what AI thinks of your domain? <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Get your free AI readiness report.</a></p>
              <p className="text-gray-400 text-sm mb-3">Our team audits the exact signals AI platforms use to evaluate your business.</p>
              <Link href="/contact" className="inline-block px-5 py-2.5 rounded-lg font-semibold text-sm transition-all hover:scale-105" style={{ background: '#F27D24', color: '#fff' }}>
                Request an AI Audit
              </Link>
            </div>
          </section>

          {/* Section 3: Platform Breakdown */}
          <section id="platform-breakdown" className="mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 font-plus-jakarta">Platform-by-Platform Breakdown: ChatGPT, Perplexity, and Google AI</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Each major AI search platform has a distinct relationship with domain age. Understanding the differences tells you exactly where your investment will have the most impact.
             Ready to act? <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a free strategy session.</a></p>

            {/* Comparison Table */}
            <div className="ae-comparison-table overflow-x-auto mb-8 rounded-xl" style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: 'rgba(255,106,0,0.1)', borderBottom: '1px solid rgba(255,106,0,0.2)' }}>
                    <th className="text-left px-4 py-3 text-white font-semibold">Platform</th>
                    <th className="text-left px-4 py-3 text-white font-semibold">Domain Age Sensitivity</th>
                    <th className="text-left px-4 py-3 text-white font-semibold">New Domain Share</th>
                    <th className="text-left px-4 py-3 text-white font-semibold">Top Signal Instead</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.02)' }}>
                    <td className="px-4 py-3 text-white font-medium">Google AI Overviews</td>
                    <td className="px-4 py-3 text-gray-300">High (49% cite 15+ yr domains)</td>
                    <td className="px-4 py-3" style={{ color: '#F27D24' }}>Lowest</td>
                    <td className="px-4 py-3 text-gray-300">E-E-A-T, topical depth, freshness</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                    <td className="px-4 py-3 text-white font-medium">ChatGPT</td>
                    <td className="px-4 py-3 text-gray-300">Moderate (46% cite 15+ yr domains)</td>
                    <td className="px-4 py-3" style={{ color: '#4ade80' }}>12% under 5 yrs</td>
                    <td className="px-4 py-3 text-gray-300">Consensus mentions, review profiles</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.02)' }}>
                    <td className="px-4 py-3 text-white font-medium">Perplexity</td>
                    <td className="px-4 py-3 text-gray-300">Moderate (prefers 10-15 yr range)</td>
                    <td className="px-4 py-3" style={{ color: '#4ade80' }}>Competitive</td>
                    <td className="px-4 py-3 text-gray-300">Expert citations, real-time content</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-white font-medium">Bing Copilot</td>
                    <td className="px-4 py-3 text-gray-300">Low sensitivity</td>
                    <td className="px-4 py-3" style={{ color: '#4ade80' }}>19% under 5 yrs</td>
                    <td className="px-4 py-3 text-gray-300">Bing index freshness, Bing Places</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-300 mb-5 leading-relaxed">
              Google AI Overviews show the strongest correlation between citation share and older domains, but even this is a data artifact. Older domains tend to have more content, more backlinks, and better E-E-A-T signals accumulated over time. When researchers control for those variables, domain age alone has minimal predictive power.
            </p>
            <p className="text-gray-300 mb-5 leading-relaxed">
              Perplexity's preference for 10-to-15-year-old domains tells a similar story. That range corresponds to publications that were established in the early-to-mid 2010s and built deep subject-matter authority over time. The age is incidental; the authority is the actual signal.
             Drop us a line at <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>
            <p className="text-gray-300 mb-5 leading-relaxed">
              Bing Copilot is the clearest example of what happens when recency is prioritized. Nearly 1 in 5 of its citations go to domains under 5 years old, because Bing's real-time indexing rewards fresh content regardless of how long the domain has been registered.
            </p>

            {/* Callout Orange */}
            <div className="ae-callout-orange rounded-xl p-6 mb-4" style={{ background: 'rgba(255,106,0,0.08)', border: '1px solid rgba(255,106,0,0.3)' }}>
              <div className="flex items-start gap-3">
                <span className="text-xl mt-0.5" style={{ color: '#F27D24' }}>&#9650;</span>
                <div>
                  <p className="font-bold mb-2" style={{ color: '#F27D24' }}>The Platform Opportunity Speak to an AEO specialist: <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.</p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    If you're a newer domain, Bing Copilot and ChatGPT are your fastest paths to early AI citations. Prioritizing the trust signals those platforms weight most heavily, review profiles, community mentions, structured data, creates traction you can build on across all platforms over time.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: What Really Drives Citations */}
          <section id="what-really-drives-citations" className="mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 font-plus-jakarta">What Really Drives AI Citations (It's Not Your Registration Date)</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Strip away the domain age correlation and you are left with four categories of signals that actually determine whether AI platforms cite your content. Understanding these is the entire game.
             One client per city. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">See if your market is available.</a></p>

            {/* Signal Cards Grid */}
            <div className="grid sm:grid-cols-2 gap-5 mb-8">
              <div className="rounded-xl p-5" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div className="text-2xl mb-3">&#128336;</div>
                <h3 className="text-white font-bold mb-2 font-plus-jakarta">Content Freshness</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Pages updated quarterly receive 2x more average citations than those left untouched for longer. AI platforms treat recency as a proxy for accuracy. Stale content signals an unattended presence, and AI systems respond accordingly.
                </p>
              </div>
              <div className="rounded-xl p-5" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div className="text-2xl mb-3">&#127760;</div>
                <h3 className="text-white font-bold mb-2 font-plus-jakarta">Third-Party Consensus</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  85% of brand mentions influencing AI recommendations come from third-party pages. Review platforms, directory listings, editorial features, and community discussions all contribute. Your own website alone cannot build this layer.
                 Check where you stand: <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free Blind Spot Scan.</a></p>
              </div>
              <div className="rounded-xl p-5" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div className="text-2xl mb-3">&#128202;</div>
                <h3 className="text-white font-bold mb-2 font-plus-jakarta">Structured Data</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Pages combining text, images, and structured schema data see up to 317% more AI citations. Schema markup translates your content into machine-readable signals that AI systems can act on with confidence.
                </p>
              </div>
              <div className="rounded-xl p-5" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div className="text-2xl mb-3">&#127942;</div>
                <h3 className="text-white font-bold mb-2 font-plus-jakarta">Topical Authority</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  AI platforms assess whether you cover a subject comprehensively, not just whether you mention it once. Depth, breadth, and internal content architecture signal expertise in ways that no domain registration date can.
                 <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Schedule a free 30-min call.</a></p>
              </div>
            </div>

            <p className="text-gray-300 mb-5 leading-relaxed">
              The freshness factor deserves emphasis because it directly inverts the old SEO mindset. Traditional SEO rewarded evergreen content that stayed useful for years. AI search rewards content that proves it's being maintained. A post from 2019 about your services, never touched since, is essentially invisible to AI recommendation systems evaluating current relevance.
            </p>

            <p className="text-gray-300 mb-6 leading-relaxed">
              There is also a community dimension that catches many business owners off guard. Approximately 48% of AI citations originate from community platforms, primarily Reddit and YouTube. This means a business with active community presence, even on a young domain, can earn AI visibility that a quiet 15-year-old website never achieves.
             Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> for a custom strategy.</p>

            {/* Related Articles */}
            <div className="rounded-xl p-6 mb-4" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <p className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">Related Reading</p>
              <div className="space-y-2">
                <Link href="/blog/why-fresh-content-key-ai-search-visibility" className="flex items-center gap-2 text-white hover:text-orange-400 transition-colors text-sm font-medium group">
                  <span className="text-gray-600 group-hover:text-orange-400">&#8594;</span>
                  Why Fresh Content Is the Key to AI Search Visibility
                </Link>
                <Link href="/blog/why-new-website-invisible-to-ai" className="flex items-center gap-2 text-white hover:text-orange-400 transition-colors text-sm font-medium group">
                  <span className="text-gray-600 group-hover:text-orange-400">&#8594;</span>
                  Why Your New Website Is Invisible to AI
                </Link>
              </div>
            </div>
          </section>

          {/* Section 5: New vs Established */}
          <section id="new-vs-established" className="mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 font-plus-jakarta">New Websites vs. Established Domains: A Fair Fight?</h2>
            <p className="text-gray-300 mb-5 leading-relaxed">
              The honest answer is no, it's not perfectly fair. But the gap is far smaller than traditional SEO led people to believe, and it's narrowing.
             Questions? Call <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.</p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Established domains carry an inherited advantage: years of accumulated content, backlinks, editorial citations, and review presence that any new domain will take time to replicate. When AI platforms assess trustworthiness through the lens of consensus signals, the domain that has been gathering those signals for 10 years starts with a head start.
            </p>

            {/* Pros/Cons */}
            <div className="ae-pros-cons grid sm:grid-cols-2 gap-5 mb-8">
              <div className="rounded-xl p-5" style={{ background: 'rgba(74,222,128,0.06)', border: '1px solid rgba(74,222,128,0.2)' }}>
                <h3 className="text-green-400 font-bold mb-4 font-plus-jakarta flex items-center gap-2">
                  <span>&#10003;</span> Established Domain Advantages
                </h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start gap-2"><span className="text-green-400 mt-0.5">&#8226;</span> Years of accumulated backlinks and referring domains</li>
                  <li className="flex items-start gap-2"><span className="text-green-400 mt-0.5">&#8226;</span> Existing review and directory footprint across platforms</li>
                  <li className="flex items-start gap-2"><span className="text-green-400 mt-0.5">&#8226;</span> Established brand mentions across the wider web</li>
                  <li className="flex items-start gap-2"><span className="text-green-400 mt-0.5">&#8226;</span> Deeper content archive signaling topical expertise</li>
                  <li className="flex items-start gap-2"><span className="text-green-400 mt-0.5">&#8226;</span> Historical crawl data familiar to AI training sets</li>
                </ul>
              </div>
              <div className="rounded-xl p-5" style={{ background: 'rgba(239,68,68,0.06)', border: '1px solid rgba(239,68,68,0.2)' }}>
                <h3 className="text-red-400 font-bold mb-4 font-plus-jakarta flex items-center gap-2">
                  <span>&#215;</span> Established Domain Disadvantages
                </h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">&#8226;</span> Old content architecture not built for AI-first indexing</li>
                  <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">&#8226;</span> Stale pages dragging down freshness signals</li>
                  <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">&#8226;</span> Legacy technical debt: missing schema, slow pages, JS rendering</li>
                  <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">&#8226;</span> Inconsistent NAP data across old directory listings</li>
                  <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">&#8226;</span> Harder to retrofit AI-first content structure</li>
                </ul>
              </div>
            </div>

            {/* New Domain Pros/Cons */}
            <div className="ae-pros-cons grid sm:grid-cols-2 gap-5 mb-8">
              <div className="rounded-xl p-5" style={{ background: 'rgba(74,222,128,0.06)', border: '1px solid rgba(74,222,128,0.2)' }}>
                <h3 className="text-green-400 font-bold mb-4 font-plus-jakarta flex items-center gap-2">
                  <span>&#10003;</span> New Domain Advantages
                </h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start gap-2"><span className="text-green-400 mt-0.5">&#8226;</span> Built AI-first from day one with clean architecture</li>
                  <li className="flex items-start gap-2"><span className="text-green-400 mt-0.5">&#8226;</span> No legacy technical debt to clean up</li>
                  <li className="flex items-start gap-2"><span className="text-green-400 mt-0.5">&#8226;</span> Fresh content signals across every page from launch</li>
                  <li className="flex items-start gap-2"><span className="text-green-400 mt-0.5">&#8226;</span> Correct schema markup implemented from the start</li>
                  <li className="flex items-start gap-2"><span className="text-green-400 mt-0.5">&#8226;</span> Bing Copilot actively favors newer domains with fresh content</li>
                </ul>
              </div>
              <div className="rounded-xl p-5" style={{ background: 'rgba(239,68,68,0.06)', border: '1px solid rgba(239,68,68,0.2)' }}>
                <h3 className="text-red-400 font-bold mb-4 font-plus-jakarta flex items-center gap-2">
                  <span>&#215;</span> New Domain Disadvantages
                </h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">&#8226;</span> Zero backlink or referring domain history</li>
                  <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">&#8226;</span> No existing review or directory presence to leverage</li>
                  <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">&#8226;</span> Google AI Overviews harder to break into early on</li>
                  <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">&#8226;</span> Trust-building requires sustained effort and time</li>
                  <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">&#8226;</span> Community presence must be built from scratch</li>
                </ul>
              </div>
            </div>

            {/* Callout Success */}
            <div className="ae-callout-success rounded-xl p-6 mb-6" style={{ background: 'rgba(74,222,128,0.07)', border: '1px solid rgba(74,222,128,0.25)' }}>
              <div className="flex items-start gap-3">
                <span className="text-xl mt-0.5 text-green-400">&#10003;</span>
                <div>
                  <p className="font-bold text-green-400 mb-2">The Leveler: Content and Trust Signals Can Be Built Fast <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Secure your territory before a competitor does.</a></p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Domain authority in the AI era is less about time and more about coordinated effort. A new business that simultaneously builds review platform presence, earns directory listings, publishes structured expert content, and creates community presence can compress months of traditional trust-building into weeks. The strategy exists. The question is whether you know how to execute it.
                  </p>
                </div>
              </div>
            </div>

            {/* Inline CTA 3 */}
            <div className="ae-cta-inline rounded-xl p-5" style={{ background: 'rgba(255,106,0,0.08)', border: '1px solid rgba(255,106,0,0.25)' }}>
              <p className="text-white font-semibold mb-1">New domain or old, the optimization strategy differs significantly. <a href="https://theanswerengine.ai/blindspot" className="cta-inline">See your AI visibility score — free.</a></p>
              <p className="text-gray-400 text-sm mb-3">We diagnose exactly where you are and build the right roadmap for your situation.</p>
              <a href="tel:+12134442229" className="inline-block px-5 py-2.5 rounded-lg font-semibold text-sm transition-all hover:scale-105 mr-3" style={{ background: '#F27D24', color: '#fff' }}>
                Call (213) 444-2229
              </a>
              <Link href="/contact" className="inline-block px-5 py-2.5 rounded-lg font-semibold text-sm transition-all hover:scale-105" style={{ background: 'rgba(255,255,255,0.08)', color: '#fff', border: '1px solid rgba(255,255,255,0.15)' }}>
                Or Contact Us Online
              </Link>
            </div>
          </section>

          {/* Section 6: Decision Matrix */}
          <section id="decision-matrix" className="mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 font-plus-jakarta">Decision Matrix: Should You Invest in a New Domain or Existing One?</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              This question comes up frequently for businesses considering a rebrand or a fresh digital start. The AI search calculus is nuanced and depends heavily on the health of your current domain.
             <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book your free consultation here.</a></p>

            <div className="ae-decision-matrix overflow-x-auto rounded-xl mb-8" style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: 'rgba(255,106,0,0.1)', borderBottom: '1px solid rgba(255,106,0,0.2)' }}>
                    <th className="text-left px-4 py-3 text-white font-semibold">Scenario</th>
                    <th className="text-left px-4 py-3 text-white font-semibold">Recommendation</th>
                    <th className="text-left px-4 py-3 text-white font-semibold">Priority Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.02)' }}>
                    <td className="px-4 py-3 text-gray-300">Old domain, good backlink profile, outdated content</td>
                    <td className="px-4 py-3 text-green-400 font-medium">Keep and optimize</td>
                    <td className="px-4 py-3 text-gray-400">Refresh all service pages, add schema, update third-party profiles</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                    <td className="px-4 py-3 text-gray-300">Old domain, thin content, almost no backlinks</td>
                    <td className="px-4 py-3 text-yellow-400 font-medium">Optimize first, measure</td>
                    <td className="px-4 py-3 text-gray-400">Add structured content, build review presence, evaluate after 90 days</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.02)' }}>
                    <td className="px-4 py-3 text-gray-300">Brand new domain, launching a new business</td>
                    <td className="px-4 py-3 text-green-400 font-medium">Build AI-first from day one</td>
                    <td className="px-4 py-3 text-gray-400">Schema on all pages, review platform setup at launch, directory listings within week 1</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                    <td className="px-4 py-3 text-gray-300">Rebranding an established business</td>
                    <td className="px-4 py-3 text-yellow-400 font-medium">Carry over trust signals</td>
                    <td className="px-4 py-3 text-gray-400">301 redirect old domain, update all directory listings to new name simultaneously</td>
                  </tr>
                  <tr style={{ background: 'rgba(255,255,255,0.02)' }}>
                    <td className="px-4 py-3 text-gray-300">Competitor dominating AI on old domain</td>
                    <td className="px-4 py-3" style={{ color: '#F27D24' }}>Outflank on content depth</td>
                    <td className="px-4 py-3 text-gray-400">Identify content gaps, publish more comprehensive answers, build review platform lead</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-300 mb-5 leading-relaxed">
              The rebranding scenario is worth special attention. When you switch domains, you do not automatically carry over your AI visibility. The new domain name needs time to accumulate the same web-wide consensus that the old one had. A rushed rebrand with poor redirect strategy can trigger a visibility cliff across every AI platform simultaneously.
            </p>

            <p className="text-gray-300 leading-relaxed">
              This is one of those decisions where getting a professional assessment before acting is genuinely worth the investment. The cost of getting it wrong far exceeds the cost of getting it right.
             Contact us at <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>
          </section>

          {/* 3-Tier CTA Block */}
          <section className="ae-cta-block rounded-2xl p-8 mb-14" style={{ background: 'linear-gradient(135deg, rgba(255,106,0,0.1) 0%, rgba(255,106,0,0.05) 100%)', border: '1px solid rgba(255,106,0,0.3)' }}>
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 font-plus-jakarta">
                Is Your Domain Leaving AI Citations on the Table?
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Whether your domain is 2 months old or 20 years old, the signals AI platforms evaluate can be built and optimized. Find out exactly what's missing for your domain with a professional AI visibility assessment.
              </p>
            </div>
            <div className="grid sm:grid-cols-3 gap-5">
              {/* Tier 1 */}
              <div className="rounded-xl p-5 text-center" style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div className="text-3xl mb-3">&#128269;</div>
                <h3 className="text-white font-bold mb-2 font-plus-jakarta">Find Your Blind Spots</h3>
                <p className="text-gray-400 text-sm mb-4">Discover which AI visibility signals your domain is missing right now. Reach us at <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.</p>
                <Link href="/blindspot" className="block w-full py-3 rounded-lg font-semibold text-sm transition-all hover:scale-105" style={{ background: '#F27D24', color: '#fff' }}>
                  Get Your Free Blind Spot Report
                </Link>
              </div>
              {/* Tier 2 */}
              <div className="rounded-xl p-5 text-center" style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div className="text-3xl mb-3">&#128222;</div>
                <h3 className="text-white font-bold mb-2 font-plus-jakarta">Talk to an Expert</h3>
                <p className="text-gray-400 text-sm mb-4">Get direct answers about your domain's AI search position in a quick call.</p>
                <a href="tel:+12134442229" className="block w-full py-3 rounded-lg font-semibold text-sm transition-all hover:scale-105" style={{ background: 'rgba(255,106,0,0.15)', color: '#F27D24', border: '1px solid rgba(255,106,0,0.4)' }}>
                  (213) 444-2229
                </a>
              </div>
              {/* Tier 3 */}
              <div className="rounded-xl p-5 text-center" style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div className="text-3xl mb-3">&#128231;</div>
                <h3 className="text-white font-bold mb-2 font-plus-jakarta">Email Us Directly</h3>
                <p className="text-gray-400 text-sm mb-4">Send your domain and we'll send back a preliminary assessment within 24 hours. We work with one business per market. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Check if yours is still open.</a></p>
                <a href="mailto:support@theanswerengine.ai" className="block w-full py-3 rounded-lg font-semibold text-sm transition-all hover:scale-105 truncate" style={{ background: 'rgba(255,106,0,0.15)', color: '#F27D24', border: '1px solid rgba(255,106,0,0.4)' }}>
                  support@theanswerengine.ai
                </a>
              </div>
            </div>
          </section>

          {/* Cheat Sheet */}
          <section id="cheat-sheet" className="mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 font-plus-jakarta">AI Visibility Cheat Sheet: Domain Age Edition</h2>

            <div className="ae-cheat-sheet rounded-2xl p-7" style={{ background: 'rgba(255,106,0,0.05)', border: '2px solid rgba(255,106,0,0.25)' }}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold mb-4 font-plus-jakarta" style={{ color: '#F27D24' }}>What Domain Age Does NOT Determine</h3>
                  <ul className="space-y-2.5 text-sm text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 font-bold mt-0.5">&#215;</span>
                      Whether ChatGPT will cite your content
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 font-bold mt-0.5">&#215;</span>
                      Your Perplexity or Bing Copilot citation rate
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 font-bold mt-0.5">&#215;</span>
                      How AI systems interpret your content accuracy
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 font-bold mt-0.5">&#215;</span>
                      Whether your schema markup is readable
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 font-bold mt-0.5">&#215;</span>
                      How fresh your content appears to AI crawlers
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 font-bold mt-0.5">&#215;</span>
                      Your review platform presence and quality
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 font-bold mt-0.5">&#215;</span>
                      Whether AI crawlers can access your pages at all
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-4 font-plus-jakarta" style={{ color: '#4ade80' }}>What Actually Moves the Needle</h3>
                  <ul className="space-y-2.5 text-sm text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 font-bold mt-0.5">&#10003;</span>
                      Quarterly content updates on key service pages
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 font-bold mt-0.5">&#10003;</span>
                      Active profiles on Trustpilot, Yelp, G2, Capterra
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 font-bold mt-0.5">&#10003;</span>
                      LocalBusiness and FAQ schema on every relevant page
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 font-bold mt-0.5">&#10003;</span>
                      Consistent directory listings across 50+ platforms
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 font-bold mt-0.5">&#10003;</span>
                      Community presence on Reddit and relevant forums
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 font-bold mt-0.5">&#10003;</span>
                      Server-side rendering (no JS-only content)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 font-bold mt-0.5">&#10003;</span>
                      Author credentials and E-E-A-T signals on content
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-5" style={{ borderTop: '1px solid rgba(255,106,0,0.2)' }}>
                <p className="text-sm font-semibold mb-3" style={{ color: '#F27D24' }}>Quick Domain Age Reality Check</p>
                <div className="grid sm:grid-cols-3 gap-3 text-xs text-gray-400">
                  <div className="rounded-lg p-3" style={{ background: 'rgba(0,0,0,0.3)' }}>
                    <p className="font-semibold text-white mb-1">Domain under 1 year Find your gaps with a <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free AERO scan.</a></p>
                    <p>Focus on Bing Copilot and ChatGPT first. Build review presence and directory listings before any other tactic.</p>
                  </div>
                  <div className="rounded-lg p-3" style={{ background: 'rgba(0,0,0,0.3)' }}>
                    <p className="font-semibold text-white mb-1">Domain 1-5 years <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Schedule a free call</a> to see where you stand.</p>
                    <p>Check for stale content and missing schema. Review platforms are likely underbuilt. Structured content audit needed.</p>
                  </div>
                  <div className="rounded-lg p-3" style={{ background: 'rgba(0,0,0,0.3)' }}>
                    <p className="font-semibold text-white mb-1">Domain 5+ years Send your questions to <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>
                    <p>Legacy technical debt is the main risk. Old content needs freshness signals. AI-specific schema likely missing.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Related Reading Block */}
          <section className="rounded-xl p-6 mb-14" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
            <h3 className="text-white font-bold mb-4 font-plus-jakarta">Keep Reading</h3>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link href="/blog/why-new-website-invisible-to-ai" className="block rounded-lg p-4 transition-all hover:scale-[1.02]" style={{ background: 'rgba(255,106,0,0.06)', border: '1px solid rgba(255,106,0,0.2)' }}>
                <p className="text-white text-sm font-semibold leading-snug mb-1">Why Your New Website Is Invisible to AI Call <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> for a free consultation.</p>
                <p className="text-gray-500 text-xs">The technical and trust barriers every new domain faces</p>
              </Link>
              <Link href="/blog/why-fresh-content-key-ai-search-visibility" className="block rounded-lg p-4 transition-all hover:scale-[1.02]" style={{ background: 'rgba(255,106,0,0.06)', border: '1px solid rgba(255,106,0,0.2)' }}>
                <p className="text-white text-sm font-semibold leading-snug mb-1">Why Fresh Content Is the Key to AI Search Visibility <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Claim your market territory — one client per area.</a></p>
                <p className="text-gray-500 text-xs">How content recency directly shapes AI citation rates</p>
              </Link>
              <Link href="/blog/make-your-site-the-one-ai-trusts" className="block rounded-lg p-4 transition-all hover:scale-[1.02]" style={{ background: 'rgba(255,106,0,0.06)', border: '1px solid rgba(255,106,0,0.2)' }}>
                <p className="text-white text-sm font-semibold leading-snug mb-1">Make Your Site the One AI Trusts <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Run your free AI Blind Spot Scan.</a></p>
                <p className="text-gray-500 text-xs">The complete framework for building AI-level domain trust</p>
              </Link>
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq" className="mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 font-plus-jakarta">Frequently Asked Questions</h2>

            <div className="space-y-4">
              <div className="rounded-xl p-6" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <h3 className="text-white font-bold mb-3 font-plus-jakarta">Does domain age directly affect AI search citations?</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Domain age is a weak indirect signal, not a direct ranking factor. Google AI Overviews do cite older domains more frequently, but this correlation reflects accumulated trust signals like backlinks, mentions, and content depth rather than age itself. A new domain with strong third-party validation can outperform an old domain with thin content.
                 <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a free 30-minute strategy call.</a></p>
              </div>

              <div className="rounded-xl p-6" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <h3 className="text-white font-bold mb-3 font-plus-jakarta">Can a new website get cited by ChatGPT or Perplexity?</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Yes. ChatGPT already sources 12% of its citations from domains less than 5 years old, and Bing Copilot sources nearly 19% from newer domains. Fresh, expert, well-structured content with third-party validation can earn citations even from a relatively young domain. Building review platform presence and directory listings early accelerates this significantly.
                </p>
              </div>

              <div className="rounded-xl p-6" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <h3 className="text-white font-bold mb-3 font-plus-jakarta">What matters more than domain age for AI search visibility?</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Content freshness, topical authority, third-party mentions, structured data, and E-E-A-T signals matter far more than domain age. Pages not updated quarterly are 3x more likely to lose citations. Domains with profiles on Trustpilot, Yelp, and G2 are 3x more likely to be cited by ChatGPT than domains without review presence.
                 Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> to get started.</p>
              </div>

              <div className="rounded-xl p-6" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <h3 className="text-white font-bold mb-3 font-plus-jakarta">Do AI platforms use Domain Authority scores?</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  AI platforms do not use Moz Domain Authority or any equivalent internal score. They generate answers by drawing on crawled and indexed content. However, signals that correlate with high domain authority, including referring domains, brand mentions, and editorial citations, still influence which sources AI systems favor when generating responses.
                </p>
              </div>

              <div className="rounded-xl p-6" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <h3 className="text-white font-bold mb-3 font-plus-jakarta">How long does it take a new domain to gain AI search visibility?</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  First AI citations from a new domain can appear within 30 to 60 days if the site publishes high-quality structured content, earns directory listings, and accumulates reviews early. Consistent visibility across multiple AI platforms typically takes 90 to 180 days of sustained optimization effort.
                 <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a></p>
              </div>

              <div className="rounded-xl p-6" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <h3 className="text-white font-bold mb-3 font-plus-jakarta">What is the biggest mistake business owners make about domain age and AI search?</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  The biggest mistake is assuming a 10-year-old domain automatically outranks competitors in AI search, or that a new domain cannot compete. Both assumptions are wrong. AI platforms reward current relevance, not historical tenure. An old domain with stale content and no third-party presence will lose to a new domain with fresh, authoritative, well-cited content.
                </p>
              </div>
            </div>
          </section>

          {/* Author Card */}
          <div className="ae-author-card rounded-xl p-6 mb-14" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-full flex items-center justify-center text-xl shrink-0" style={{ background: 'rgba(255,106,0,0.15)', border: '2px solid rgba(255,106,0,0.3)' }}>
                &#128161;
              </div>
              <div>
                <p className="text-white font-bold font-plus-jakarta mb-1">Justin Borges</p>
                <p className="text-xs mb-3" style={{ color: '#F27D24' }}>AI Search Optimization Specialists</p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  The Answer Engine is a Los Angeles-based AEO agency helping businesses of all sizes achieve consistent visibility across ChatGPT, Perplexity, Google AI Mode, and every other AI search platform shaping how customers find services today.
                </p>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <section className="ae-final-cta rounded-2xl p-10 text-center mb-8" style={{ background: 'linear-gradient(135deg, rgba(255,106,0,0.15) 0%, rgba(255,106,0,0.05) 100%)', border: '2px solid rgba(255,106,0,0.4)', boxShadow: '0 0 40px rgba(255,106,0,0.15), 0 0 80px rgba(255,106,0,0.05)' }}>
            <div className="text-4xl mb-4">&#127919;</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-plus-jakarta">
              Stop Wondering. Start Showing Up.
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Domain age is the myth. Content quality, trust signals, and structured optimization are the reality. Find out exactly where your domain stands and what it will take to earn consistent AI citations, before your competitors figure it out first.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="px-8 py-4 rounded-xl font-bold text-base transition-all hover:scale-105" style={{ background: '#F27D24', color: '#fff', boxShadow: '0 0 20px rgba(255,106,0,0.4)' }}>
                Get My Free AI Visibility Audit
              </Link>
              <a href="tel:+12134442229" className="px-8 py-4 rounded-xl font-bold text-base transition-all hover:scale-105" style={{ background: 'rgba(255,255,255,0.06)', color: '#fff', border: '1px solid rgba(255,255,255,0.15)' }}>
                Call (213) 444-2229
              </a>
            </div>
            <p className="text-gray-600 text-sm mt-6">
              Free assessment. No commitment. Just answers.{' '}
              <a href="mailto:support@theanswerengine.ai" className="hover:text-gray-400 transition-colors" style={{ color: '#F27D24' }}>
                support@theanswerengine.ai
              </a>
            </p>
          </section>

        </article>
      </main>
    </>
  )
}
