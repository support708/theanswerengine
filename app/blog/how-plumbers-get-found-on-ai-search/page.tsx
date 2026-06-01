import type { Metadata } from 'next'
import Link from 'next/link'

export const revalidate = 86400
export const dynamic = 'force-static'
export const dynamicParams = true

const title = 'How Plumbers Get Found on AI Search'
const description = 'Plumbing is the most searched home service category on AI platforms, but most plumbers are invisible. Here is what ChatGPT, Perplexity, and Google AI actually look for when recommending a plumber.'
const slug = 'how-plumbers-get-found-on-ai-search'
const publishDate = '2026-04-18'

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'plumber AI search',
    'how plumbers get found on ChatGPT',
    'plumbing business AI visibility',
    'plumber ChatGPT recommendations',
    'plumbing AI marketing',
    'get plumbing business on AI search',
    'plumber Google AI',
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
          name: 'Why does ChatGPT recommend other plumbers in my area but not me?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'ChatGPT builds its understanding of local plumbers from sources it trained on: review sites, directories, local news, and business websites. If your competitors appear more frequently across those sources, or if their content is more structured and authoritative, they appear in AI recommendations while you stay invisible. Frequency and source quality both matter.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does having a 24/7 emergency plumbing service help me get found on AI?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, significantly. Emergency and after-hours availability is one of the most common qualifiers people include when asking AI for a plumber. If your website, Google Business Profile, and service pages explicitly call out 24/7 emergency service, AI platforms are more likely to surface you in those searches. Specific, structured mentions perform far better than vague availability claims.',
          },
        },
        {
          '@type': 'Question',
          name: 'How important are Google reviews for getting recommended by AI?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Reviews matter, but not in the way most plumbers assume. AI platforms read review text looking for service-specific mentions, location specificity, and scenario context. A plumber with 50 reviews that mention "fixed my burst pipe at 2am" will outperform one with 500 generic five-star reviews because the content is citable and specific.',
          },
        },
        {
          '@type': 'Question',
          name: 'Should I create separate pages for each plumbing service I offer?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Dedicated service pages are one of the highest-impact moves for plumbing AI visibility. A single Services page listing everything gives AI very little to work with for specific queries. Separate, in-depth pages for drain cleaning, water heater installation, pipe repair, and emergency services signal genuine specialization and become individual citation assets.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does my service area affect AI recommendations?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. AI platforms calibrate recommendations based on proximity signals. If you serve multiple cities but only claim one location, you are invisible for searches in the other areas. Dedicated location pages for each service area, with specific city mentions and schema markup, help AI understand your full coverage territory.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does it take for a plumber to start appearing in AI recommendations?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Plumbers optimizing for AI visibility typically see initial results from Perplexity and Google AI Overviews within 30 to 60 days of improving structured data and Google Business Profile. ChatGPT base model citations take longer because they depend on retraining cycles, which can run 12 to 18 months.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is a website necessary for a plumber to get found on AI search?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A website dramatically improves AI visibility, but it is not the only factor. Google Business Profile is often the highest-weight data source for local service queries and is free. A website with dedicated service pages and schema markup creates significantly more citable content than a directory listing alone, making it a high-ROI investment.',
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

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="max-w-4xl mx-auto px-6 pt-6">
        <ol className="flex items-center gap-2 text-sm text-gray-500">
          <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
          <li className="text-gray-600">/</li>
          <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
          <li className="text-gray-600">/</li>
          <li className="text-gray-400 truncate">Plumbers on AI Search</li>
        </ol>
      </nav>
          {/* Championship Cover Image */}
          <div className="ae-article-hero w-full rounded-xl overflow-hidden mb-10" style={{ maxHeight: 420 }}>
            <img
              src="/blog/how-plumbers-get-found-on-ai-search.webp"
              alt="how plumbers get found on ai search"
              style={{ width: '100%', height: 420, objectFit: 'cover', display: 'block' }}
              loading="eager"
            />
          </div>

      {/* Hero */}
      <header className="max-w-4xl mx-auto px-6 pt-10 pb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="ae-section-label">Industry Guides</span>
          <span className="text-gray-500 text-sm">11 min read</span>
        </div>
        <h1 className="font-plus-jakarta text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
          How Plumbers Get Found on AI Search
        </h1>
        <p className="text-xl text-gray-300 leading-relaxed mb-8">
          When a pipe bursts at midnight, people do not scroll through Yelp reviews. They ask ChatGPT or Siri for the nearest emergency plumber. The question is whether your business appears in that answer or stays invisible while a competitor gets the call.
        </p>

        {/* Inline hero SVG */}
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#1a1d27] to-[#0F1117] border border-white/5 h-56 flex items-center justify-center mb-8">
          <svg viewBox="0 0 1200 400" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="art185-bg" cx="50%" cy="50%" r="70%">
                <stop offset="0%" stopColor="#1a1d27" />
                <stop offset="100%" stopColor="#0F1117" />
              </radialGradient>
              <radialGradient id="art185-glow" cx="40%" cy="60%" r="45%">
                <stop offset="0%" stopColor="#F27D24" stopOpacity="0.12" />
                <stop offset="100%" stopColor="#F27D24" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="1200" height="400" fill="url(#art185-bg)" />
            <circle cx="480" cy="240" r="280" fill="url(#art185-glow)" />
            {/* Wrench */}
            <rect x="440" y="160" width="80" height="20" rx="4" fill="none" stroke="#F27D24" strokeWidth="2" strokeOpacity="0.5" />
            <rect x="460" y="180" width="40" height="100" rx="4" fill="none" stroke="#F27D24" strokeWidth="2" strokeOpacity="0.5" />
            <circle cx="480" cy="155" r="20" fill="none" stroke="#F27D24" strokeWidth="2" strokeOpacity="0.6" />
            {/* AI response bubble */}
            <rect x="580" y="130" width="320" height="140" rx="16" fill="#1e2235" stroke="#F27D24" strokeWidth="1" strokeOpacity="0.3" />
            <text x="600" y="162" fill="#F27D24" fontSize="13" fontFamily="monospace" opacity="0.9">AI Response</text>
            <line x1="600" y1="172" x2="880" y2="172" stroke="#F27D24" strokeWidth="0.5" strokeOpacity="0.3" />
            <text x="600" y="195" fill="#aaa" fontSize="12" fontFamily="monospace">"Best emergency plumber</text>
            <text x="600" y="214" fill="#aaa" fontSize="12" fontFamily="monospace"> near you..."</text>
            <circle cx="615" cy="235" r="4" fill="#F27D24" opacity="0.8" />
            <text x="625" y="238" fill="#eee" fontSize="11" fontFamily="monospace">Your Business Name</text>
            <circle cx="615" cy="253" r="4" fill="#555" opacity="0.5" />
            <text x="625" y="256" fill="#555" fontSize="11" fontFamily="monospace">Competitor</text>
            {/* Arrow */}
            <path d="M530,200 Q555,200 575,200" stroke="#F27D24" strokeWidth="1.5" strokeDasharray="5,3" fill="none" strokeOpacity="0.5" />
            <polygon points="574,196 582,200 574,204" fill="#F27D24" fillOpacity="0.5" />
          </svg>
        </div>

        {/* Stats grid */}
        <div className="ae-stats-grid">
          <div className="ae-stat-card">
            <span className="ae-stat-emoji">🔧</span>
            <span className="ae-stat-value">78%</span>
            <span className="ae-stat-label">of homeowners use AI to research service providers before calling</span>
          </div>
          <div className="ae-stat-card">
            <span className="ae-stat-emoji">⚡</span>
            <span className="ae-stat-value">62%</span>
            <span className="ae-stat-label">of plumbing AI queries include "emergency" or "near me"</span>
          </div>
          <div className="ae-stat-card">
            <span className="ae-stat-emoji">📄</span>
            <span className="ae-stat-value">3.2x</span>
            <span className="ae-stat-label">more AI citations for businesses with structured service pages</span>
          </div>
          <div className="ae-stat-card">
            <span className="ae-stat-emoji">🏆</span>
            <span className="ae-stat-value">Top 3</span>
            <span className="ae-stat-label">AI positions capture 91% of clicks from recommendation queries</span>
          </div>
        </div>
      </header>

      {/* Article body */}
      <article className="max-w-4xl mx-auto px-6 py-4 prose prose-invert prose-lg max-w-none">

        {/* TOC */}
        <div className="ae-toc not-prose">
          <div className="ae-toc-title">In This Guide</div>
          <ol>
            <li><a href="#how-ai-finds-plumbers">How AI Finds Plumbers in Your Area</a></li>
            <li><a href="#emergency-signal">The Emergency Plumbing Signal AI Prioritizes</a></li>
            <li><a href="#review-signals">Why Your Reviews Are Being Read Wrong</a></li>
            <li><a href="#service-pages">The Service Page Problem</a></li>
            <li><a href="#location-coverage">Location Coverage and AI Proximity</a></li>
            <li><a href="#competitor-profile">What Top Competitors Are Doing Differently</a></li>
            <li><a href="#quick-wins">Quick Wins for Plumbers</a></li>
            <li><a href="#faq">Frequently Asked Questions</a></li>
          </ol>
        </div>

        <div className="ae-cta-inline not-prose">
          <p>Wondering if ChatGPT even knows your plumbing business exists? <Link href="/blindspot" className="text-[#F27D24] hover:underline font-semibold">Get a free Blind Spot Report</Link> and find out in minutes. Markets fill fast. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Check your territory availability.</a></p>
        </div>

        <h2 id="how-ai-finds-plumbers">How AI Finds Plumbers in Your Area</h2>

        <p>When someone types "find me an emergency plumber in Dallas" into ChatGPT or Perplexity, the AI does not run a live Google search. It consults a layered mental model of which plumbing businesses exist in that area, built from everything it absorbed during training: business directories, review sites, local news, community forums, and company websites. Your first step: <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free AERO Blind Spot Scan.</a></p>

        <p>The plumbers who surface in those answers are the ones whose information appeared most frequently and most authoritatively across those sources. That is not a random outcome. It is a direct reflection of how well each business's digital footprint was structured for machine comprehension rather than just human browsing. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Claim your free call</a> before your market fills.</p>

        <div className="ae-callout ae-callout-info not-prose">
          <div className="ae-callout-title">Why Plumbing Is a High-Stakes AI Category</div>
          <p>Plumbing queries skew heavily toward urgent, high-intent situations. A person asking AI for a plumber usually has a problem happening right now. That means the AI recommendation translates almost directly into a phone call. The conversion rate for plumbing AI citations is among the highest of any home service category because the intent is so immediate and the need is so pressing. Reach out: <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>
        </div>

        <div className="ae-bar-group not-prose">
          <div style={{fontWeight: 700, color: '#fff', marginBottom: '1rem', fontFamily: 'var(--font-plus-jakarta)'}}>AI Citation Rate by Plumber Profile Type</div>
          <div className="ae-bar-item">
            <div className="ae-bar-label">Structured service pages + schema markup</div>
            <div className="ae-bar-track"><div className="ae-bar-fill" style={{width:'91%'}}></div></div>
            <div className="ae-bar-value">91%</div>
          </div>
          <div className="ae-bar-item">
            <div className="ae-bar-label">Consistent NAP across 10+ directories</div>
            <div className="ae-bar-track"><div className="ae-bar-fill" style={{width:'83%'}}></div></div>
            <div className="ae-bar-value">83%</div>
          </div>
          <div className="ae-bar-item">
            <div className="ae-bar-label">Specific emergency service pages</div>
            <div className="ae-bar-track"><div className="ae-bar-fill" style={{width:'78%'}}></div></div>
            <div className="ae-bar-value">78%</div>
          </div>
          <div className="ae-bar-item">
            <div className="ae-bar-label">Review base with service-specific text</div>
            <div className="ae-bar-track"><div className="ae-bar-fill" style={{width:'72%'}}></div></div>
            <div className="ae-bar-value">72%</div>
          </div>
          <div className="ae-bar-item">
            <div className="ae-bar-label">Generic website, no schema, no service pages</div>
            <div className="ae-bar-track"><div className="ae-bar-fill" style={{width:'12%'}}></div></div>
            <div className="ae-bar-value">12%</div>
          </div>
        </div>
        <p className="text-sm text-gray-500 mb-6">Estimated AI citation rates by profile type, based on AEO analysis patterns Call us at <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> today.</p>

        <h2 id="emergency-signal">The Emergency Plumbing Signal AI Prioritizes</h2>

        <p>The most common qualifier in plumbing AI queries is urgency: "emergency plumber," "24/7 plumber," "plumber open now," "after-hours plumbing." AI platforms learn to surface businesses that explicitly and specifically address these scenarios, not businesses that might do emergency work but never say so clearly. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Lock in your exclusive territory now.</a></p>

        <p>Most plumbers handle emergencies. But many bury it in a single line on the homepage or in a general About paragraph. That is not enough signal for an AI platform to confidently recommend you for emergency queries. The signal needs to be stronger, more consistent, and structurally separate. <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Get your free AI readiness report.</a></p>

        <div className="ae-comparison-table not-prose">
          <table>
            <thead>
              <tr>
                <th>Signal Type</th>
                <th>Weak Version</th>
                <th>Strong Version for AI</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Emergency availability</td>
                <td>"Available for urgent calls"</td>
                <td>Dedicated page: "24/7 Emergency Plumbing in [City]" with schema hours</td>
              </tr>
              <tr>
                <td>Service specificity</td>
                <td>"We handle all plumbing issues"</td>
                <td>Individual pages for burst pipes, slab leaks, drain clogs, water heater emergencies</td>
              </tr>
              <tr>
                <td>Review quality</td>
                <td>"Great plumber, highly recommend"</td>
                <td>"Called at 2am for a burst pipe, arrived in 45 min, fully resolved"</td>
              </tr>
              <tr>
                <td>Location clarity</td>
                <td>"Serving the greater metro area"</td>
                <td>Named cities, zip codes, neighborhoods in GBP and service pages</td>
              </tr>
              <tr>
                <td>Schema markup</td>
                <td>None or generic website schema</td>
                <td>LocalBusiness and Service schemas with specific service names and hours</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="ae-cta-inline not-prose">
          <p>Is your emergency signal strong enough for AI to notice? <Link href="/blindspot" className="text-[#F27D24] hover:underline font-semibold">Find out free</Link> before a competitor takes that call. Ready to act? <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a free strategy session.</a></p>
        </div>

        <h2 id="review-signals">Why Your Reviews Are Being Read Wrong</h2>

        <p>The plumbing businesses that dominate AI recommendations do not just have more reviews. They have better reviews for AI purposes. AI platforms process review content semantically: they extract patterns about what services were performed, what problems were solved, and the specificity of each situation at a level that star ratings cannot convey. Drop us a line at <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>

        <p>A review that says "5 stars, great job fixing my main line" gives AI almost nothing to work with. A review that says "Called them at 11pm for a sewage backup, they arrived within the hour, diagnosed a root intrusion in our main sewer line, and had it cleared by 2am" gives AI rich, specific evidence that this plumber handles emergency sewer clearing in the area. That review does AI visibility work while sitting on Google. Speak to an AEO specialist: <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.</p>

        <div className="ae-callout ae-callout-warning not-prose">
          <div className="ae-callout-title">The Generic Review Problem</div>
          <p>Most plumbing businesses get reviews that say "great service" and "highly recommend." These are invisible to AI because they contain no service specificity, no urgency signals, and no location context. The businesses winning AI citations encourage customers to describe the specific problem that was fixed. That detail is the citation signal. One client per city. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">See if your market is available.</a></p>
        </div>

        <p>This does not mean scripting long reviews. It means making it easy for customers to share specifics. A post-job follow-up message that asks "What was the main issue we solved for you today?" surfaces the detail organically and produces the kind of content AI platforms learn from. Check where you stand: <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free Blind Spot Scan.</a></p>

        <h2 id="service-pages">The Service Page Problem</h2>

        <p>The single most common missed opportunity for plumbing businesses in AI search is the absence of dedicated service pages. Most plumber websites have a homepage, an about page, a contact page, and one Services page that lists everything in bullet points. That structure made sense for keyword SEO a decade ago. It does almost nothing for AI visibility. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Schedule a free 30-min call.</a></p>

        <div className="ae-pros-cons not-prose">
          <div className="ae-pros-box">
            <div style={{fontWeight: 700, marginBottom: '0.5rem', color: '#4ade80'}}>AI-Visible Service Structure</div>
            <ul>
              <li>Dedicated page per service type</li>
              <li>Each page describes specific problem scenarios</li>
              <li>Explains when to call and what to expect</li>
              <li>Schema markup for the service</li>
              <li>FAQ section per page</li>
              <li>Links between related services</li>
            </ul>
          </div>
          <div className="ae-cons-box">
            <div style={{fontWeight: 700, marginBottom: '0.5rem', color: '#f87171'}}>AI-Invisible Service Structure</div>
            <ul>
              <li>Single Services page with everything listed</li>
              <li>Bullet list of service names only</li>
              <li>No problem-scenario context</li>
              <li>No schema markup</li>
              <li>No FAQ content</li>
              <li>Identical layout to every competitor</li>
            </ul>
          </div>
        </div>

        <p>Each dedicated service page becomes a separate citable asset. When someone asks AI about slab leak detection or water heater replacement, a plumber with a standalone page on that specific topic is dramatically more likely to surface than one with a bullet point in a combined services list. Depth signals expertise; structure signals trustworthiness to machine readers. Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> for a custom strategy.</p>

        <h2 id="location-coverage">Location Coverage and AI Proximity</h2>

        <p>Plumbing AI queries are almost always location-qualified: "near me," "in [city]," "serving [neighborhood]." AI platforms build geographic understanding of businesses from multiple signals: Google Business Profile location, website content, service area pages, and location mentions in reviews. Questions? Call <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.</p>

        <p>Plumbers who serve three or four cities but only appear as being in one create an invisible gap for the other areas. Every city you serve but do not explicitly signal to AI is a pocket of potential customers who will never see your business recommended. Location pages, service area schema, and city-specific content are the mechanism for closing that gap without duplicating your entire site. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Secure your territory before a competitor does.</a></p>

        <div className="ae-callout ae-callout-success not-prose">
          <div className="ae-callout-title">Location Signal Stacking</div>
          <p>The strongest location signals combine: your Google Business Profile service areas, LocalBusiness schema on your website, city-specific mentions on service pages, and reviews that reference specific neighborhoods. When all four align for a given city, AI platforms have high confidence you are a legitimate, relevant option for searches in that area. <a href="https://theanswerengine.ai/blindspot" className="cta-inline">See your AI visibility score — free.</a></p>
        </div>

        <div className="ae-cta-inline not-prose">
          <p>Not sure which cities AI associates with your plumbing business? <Link href="/blindspot" className="text-[#F27D24] hover:underline font-semibold">Get your free Blind Spot Report</Link> and see your full coverage map. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book your free consultation here.</a></p>
        </div>

        <h2 id="competitor-profile">What Top Competitors Are Doing Differently</h2>

        <p>Plumbers who consistently appear at the top of AI recommendations share a recognizable profile. They are not necessarily the largest companies or the ones with the biggest marketing budgets. They are the ones whose digital presence is structured most clearly for AI comprehension across every touchpoint. Contact us at <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>

        <div className="ae-timeline not-prose">
          <div className="ae-timeline-item">
            <div className="ae-timeline-step">1</div>
            <div>
              <div className="ae-timeline-title">Complete, consistent Google Business Profile</div>
              <div className="ae-timeline-desc">Every field filled in: specific service areas, hours including emergency availability, photos, service list with exact service names, and regular Google Posts. GBP is the single highest-weight data source for local plumbing AI queries.</div>
            </div>
          </div>
          <div className="ae-timeline-item">
            <div className="ae-timeline-step">2</div>
            <div>
              <div className="ae-timeline-title">Structured service pages for each major offering</div>
              <div className="ae-timeline-desc">Individual pages for drain cleaning, water heater installation, pipe repair, sewer line work, and emergency services. Each page answers specific questions about that service and includes FAQ schema markup, making it individually citable.</div>
            </div>
          </div>
          <div className="ae-timeline-item">
            <div className="ae-timeline-step">3</div>
            <div>
              <div className="ae-timeline-title">Detailed, scenario-specific review base</div>
              <div className="ae-timeline-desc">Reviews that mention specific services, problems solved, urgency context, and outcomes. These become citation-quality content that AI platforms extract as evidence of expertise and reliability in specific service categories.</div>
            </div>
          </div>
          <div className="ae-timeline-item">
            <div className="ae-timeline-step">4</div>
            <div>
              <div className="ae-timeline-title">Consistent citations across major directories</div>
              <div className="ae-timeline-desc">NAP information identical across Yelp, HomeAdvisor, Angi, Thumbtack, and other directories. Conflicting data confuses AI and reduces recommendation confidence for the business overall.</div>
            </div>
          </div>
          <div className="ae-timeline-item">
            <div className="ae-timeline-step">5</div>
            <div>
              <div className="ae-timeline-title">LocalBusiness and Service schema markup</div>
              <div className="ae-timeline-desc">Machine-readable structured data that explicitly tells AI crawlers who you are, where you operate, what services you offer, and your hours. Pages with schema get cited 2.8x more often than unstructured pages.</div>
            </div>
          </div>
        </div>

        <h2 id="quick-wins">Quick Wins for Plumbers</h2>

        <p>Not every plumber has time to rebuild their entire website immediately. But there are high-leverage moves that create meaningful AI visibility improvement within 30 to 60 days. Reach us at <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.</p>

        <div className="ae-cheat-sheet not-prose">
          <div className="ae-cheat-sheet-title">AI Visibility Quick Wins for Plumbers</div>
          <table>
            <tbody>
              <tr><td>Update GBP service list</td><td>Add specific service names, not generic "plumbing services"</td></tr>
              <tr><td>Enable GBP messaging</td><td>Signals active, responsive business to AI platforms</td></tr>
              <tr><td>Add emergency hours explicitly</td><td>24/7 or emergency hours in GBP and schema markup</td></tr>
              <tr><td>Create one emergency page</td><td>Dedicated "24/7 Emergency Plumbing in [City]" page, linked from nav</td></tr>
              <tr><td>Prompt specific reviews</td><td>"What was the issue we fixed?" message after each job</td></tr>
              <tr><td>Claim all directory listings</td><td>Angi, Thumbtack, HomeAdvisor, Yelp with identical NAP</td></tr>
            </tbody>
          </table>
        </div>

        <p>The pattern across all of these is the same: make it easier for AI to understand exactly who you are, what you do, and where you do it. Every vague claim on your website is a missed signal. Every specific, structured piece of information is a potential citation asset. We work with one business per market. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Check if yours is still open.</a></p>

        <p>The broader visibility gap, what AI knows versus what you need it to know, is what our Blind Spot Report maps for you. It shows exactly which signals you are missing and how visible your plumbing business is across the platforms your potential customers are using right now. Find your gaps with a <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free AERO scan.</a></p>

        <h2 id="competitor-gap">Where the Gap Between You and Competitors Lives</h2>

        <p>When a homeowner asks ChatGPT "who is the best plumber near me," the model compares the available evidence for each business it finds. This is not a popularity contest. It is an evidence evaluation. The plumber who shows up is the one whose digital profile makes the strongest, most consistent, most verifiable case for their expertise and relevance. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Schedule a free call</a> to see where you stand.</p>

        <p>The gap between most local plumbers and the ones earning AI recommendations is structural, not reputational. The winning businesses are not necessarily better at their jobs. They have built their digital presence in a way that AI can read and trust. Send your questions to <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>

        <div className="ae-decision-matrix not-prose">
          <div style={{fontWeight: 700, color: '#fff', marginBottom: '1rem', fontFamily: 'var(--font-plus-jakarta)'}}>Where Is Your AI Visibility Gap?</div>
          <div className="ae-decision-row">
            <span className="ae-decision-if">No schema markup on your site</span>
            <span className="ae-decision-arrow">→</span>
            <span className="ae-decision-then">AI cannot confirm your services or location. First priority.</span>
          </div>
          <div className="ae-decision-row">
            <span className="ae-decision-if">Generic reviews with no service specifics</span>
            <span className="ae-decision-arrow">→</span>
            <span className="ae-decision-then">AI sees reputation but no expertise evidence. Fix review prompting.</span>
          </div>
          <div className="ae-decision-row">
            <span className="ae-decision-if">NAP inconsistent across directories</span>
            <span className="ae-decision-arrow">→</span>
            <span className="ae-decision-then">AI confidence in your entity is reduced. Audit all listings.</span>
          </div>
          <div className="ae-decision-row">
            <span className="ae-decision-if">One generic services page, no dedicated pages</span>
            <span className="ae-decision-arrow">→</span>
            <span className="ae-decision-then">AI cannot match you to specific queries. Create dedicated service pages.</span>
          </div>
          <div className="ae-decision-row">
            <span className="ae-decision-if">No emergency service signals anywhere</span>
            <span className="ae-decision-arrow">→</span>
            <span className="ae-decision-then">You are invisible for the highest-intent queries. Add urgency content.</span>
          </div>
          <div className="ae-decision-row">
            <span className="ae-decision-if">All of the above checked off</span>
            <span className="ae-decision-arrow">→</span>
            <span className="ae-decision-then">Run a Blind Spot Report to find the remaining gaps.</span>
          </div>
        </div>

        <div className="ae-cta-inline not-prose">
          <p>Know exactly where your gaps are. <Link href="/blindspot" className="text-[#F27D24] hover:underline font-semibold">Get your free Blind Spot Report</Link> and see the full picture in minutes. Call <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> for a free consultation.</p>
        </div>

        <div className="ae-callout ae-callout-info not-prose">
          <div className="ae-callout-title">Related Reading</div>
          <p>Plumbing is part of the broader home services category. See <Link href="/blog/how-contractors-and-home-service-companies-win-ai-search" className="text-[#F27D24] hover:underline">how contractors win AI search</Link> for patterns that apply across trades, and <Link href="/blog/how-home-service-companies-dominate-ai-search" className="text-[#F27D24] hover:underline">how home service companies dominate AI search</Link> for the full competitive picture. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Claim your market territory — one client per area.</a></p>
        </div>

        {/* 3-tier CTA block */}
        <div className="not-prose my-16 p-8 rounded-2xl bg-gradient-to-br from-[#F27D24]/10 to-transparent border border-[#F27D24]/20">
          <h3 className="font-plus-jakarta text-2xl font-bold text-white mb-3">Find Out Why AI Is Recommending Other Plumbers Instead of You</h3>
          <p className="text-gray-400 mb-6">Our free Blind Spot Report shows exactly what ChatGPT, Perplexity, and Google AI know about your plumbing business, which signals are missing, and what it would take to appear in more recommendations. <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Run your free AI Blind Spot Scan.</a></p>
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
        <div className="ae-author-card">
              <img
                src="/justin-borges.webp"
                alt="Justin Borges, Founder of The Answer Engine"
                style={{ width: 64, height: 64, borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }}
              />
              <div>
                <div className="ae-author-name" style={{ fontWeight: 600 }}>Justin Borges</div>
                <div className="ae-author-role" style={{ fontWeight: 400 }}>Founder, The Answer Engine</div>
                <p style={{ marginTop: 8, fontSize: '0.875rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.6 }}>Justin Borges founded The Answer Engine in 2025 after 13+ years in real estate, $200M+ in production, and discovering that AI search rankings now decide who gets cited as the answer. He builds content that compounds citation surface across Google AI Overviews, ChatGPT, Claude, Perplexity, and Gemini. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a free 30-minute strategy call.</a></p>
              </div>
            </div>

        {/* FAQ */}
        <h2 id="faq">Frequently Asked Questions</h2>

        <div className="not-prose space-y-6">
          {[
            {
              q: 'Why does ChatGPT recommend other plumbers in my area but not me?',
              a: 'ChatGPT builds its understanding of local plumbers from sources it trained on: review sites, directories, local news, and business websites. If your competitors appear more frequently across those sources, or if their content is more structured and authoritative, they appear in recommendations while you stay invisible. Frequency and source quality both matter.',
            },
            {
              q: 'Does having a 24/7 emergency plumbing service help me get found on AI?',
              a: 'Yes, significantly. Emergency and after-hours availability is one of the most common qualifiers in plumbing AI queries. If your website, Google Business Profile, and service pages explicitly call out 24/7 emergency service, AI platforms are more likely to surface you in those searches. Specific, structured mentions far outperform vague availability claims.',
            },
            {
              q: 'How important are Google reviews for getting recommended by AI?',
              a: 'Reviews matter, but not in the way most plumbers assume. AI platforms read review text looking for service-specific mentions, location specificity, and scenario context. A plumber with 50 reviews mentioning "fixed my burst pipe at 2am" will outperform one with 500 generic five-star reviews because the content is citable and specific.',
            },
            {
              q: 'Should I create separate pages for each plumbing service I offer?',
              a: 'Dedicated service pages are one of the highest-impact moves for plumbing AI visibility. A single Services page listing everything gives AI very little to work with for specific queries. Separate, in-depth pages for drain cleaning, water heater installation, pipe repair, and emergency services each become individual citation assets.',
            },
            {
              q: 'Does my service area affect AI recommendations?',
              a: 'Yes. AI platforms calibrate recommendations based on proximity signals. If you serve multiple cities but only claim one location, you are invisible for searches in the other areas. Dedicated location pages for each service area, with specific city mentions and schema markup, help AI understand your full coverage territory.',
            },
            {
              q: 'How long does it take for a plumber to start appearing in AI recommendations?',
              a: 'Plumbers optimizing for AI visibility typically see initial results from Perplexity and Google AI Overviews within 30 to 60 days of improving structured data and Google Business Profile. ChatGPT base model citations take longer because they depend on retraining cycles, which can run 12 to 18 months.',
            },
            {
              q: 'Is a website necessary for a plumber to get found on AI search?',
              a: 'A website dramatically improves AI visibility, but it is not the only factor. Google Business Profile is often the highest-weight data source for local service queries. A website with dedicated service pages and schema markup creates significantly more citable content than a directory listing alone, making it a high-ROI investment for any plumbing business.',
            },
          ].map((item, i) => (
            <div key={i} className="border border-white/10 rounded-xl p-6 bg-white/[0.02]">
              <h3 className="font-plus-jakarta font-semibold text-white mb-3">{item.q}</h3>
              <p className="text-gray-300 leading-relaxed">{item.a} Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> to get started.</p>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="ae-final-cta not-prose">
          <h2 className="font-plus-jakarta text-3xl font-bold text-white mb-4">The Next Emergency Call Could Be Yours</h2>
          <p className="text-gray-300 mb-8 text-lg">Every AI-referred emergency call that goes to a competitor is a lost job. Our Blind Spot Report shows exactly what AI sees when someone searches for a plumber in your area, and what you need to change to capture that call. <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a></p>
          <Link href="/blindspot" className="inline-flex items-center gap-2 bg-[#F27D24] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#D96416] transition-colors ae-pulse-glow">
            Get Your Free Blind Spot Report
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
          <p className="text-gray-500 mt-4 text-sm">Free. No credit card. Results in minutes.</p>
        </div>

      </article>
    </>
  )
}
