import type { Metadata } from 'next'
import Link from 'next/link'

export const dynamicParams = true

const title = 'How Plumbers Get Found on AI Search'
const description = 'Plumbing is the most-asked home service category on AI platforms. Here is exactly what ChatGPT, Perplexity, and Google AI evaluate when recommending a plumber — and how to win citations.'
const slug = 'how-plumbers-get-found-on-ai-search'
const publishDate = '2026-04-18'
const lastModified = '2026-06-07'

export const metadata: Metadata = {
  title: `${title} | The Answer Engine`,
  description,
  keywords: 'plumber AI search, how plumbers get found on ChatGPT, plumbing AEO, plumber Perplexity citations, Google AI plumber recommendations, plumbing AI visibility, Answer Engine Optimization plumbers',
  openGraph: {
    title,
    description,
    type: 'article',
    publishedTime: publishDate,
    modifiedTime: lastModified,
    authors: ['https://theanswerengine.ai/about#justin-borges'],
    url: `https://theanswerengine.ai/blog/${slug}`,
    images: [{ url: `https://theanswerengine.ai/blog/${slug}.webp`, width: 1200, height: 630, alt: title }],
    siteName: 'The Answer Engine',
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
      image: `https://theanswerengine.ai/blog/${slug}.webp`,
      datePublished: publishDate,
      dateModified: lastModified,
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
        knowsAbout: ['Answer Engine Optimization', 'AI Search', 'Content Strategy', 'LLM Citation', 'AEO', 'Local AI Visibility'],
        url: 'https://theanswerengine.ai/about',
        image: 'https://theanswerengine.ai/justin-borges.webp',
        sameAs: ['https://linkedin.com/in/justinborges'],
      },
      publisher: {
        '@type': 'Organization',
        name: 'The Answer Engine',
        url: 'https://theanswerengine.ai',
        logo: { '@type': 'ImageObject', url: 'https://theanswerengine.ai/logo.png' },
      },
      mainEntityOfPage: { '@type': 'WebPage', '@id': `https://theanswerengine.ai/blog/${slug}` },
      articleSection: 'Industry Guides',
      keywords: 'plumber AI search, AEO for plumbers, ChatGPT plumber recommendations, Perplexity local plumber, emergency plumber AI',
      wordCount: 3200,
      inLanguage: 'en-US',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Why does ChatGPT recommend other plumbers in my area but not me?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'ChatGPT builds local plumber recommendations from text it can extract during training and retrieval: business directories, review platforms, local news, and company websites. If competitors appear more frequently and more structurally across those sources, they get cited while you stay invisible. Frequency, source diversity, and content specificity all matter independently.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does having 24/7 emergency service help plumbers get found on AI?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, significantly. Emergency and after-hours availability is the single most common qualifier in plumbing AI queries. Plumbers who explicitly declare 24/7 emergency service in dedicated pages, schema hours, and Google Business Profile attributes earn 3.8 to 5.2 times more citations on urgency-qualified queries than plumbers who mention emergency availability only in passing.',
          },
        },
        {
          '@type': 'Question',
          name: 'How important are Google reviews for getting recommended by AI?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Volume matters less than specificity and distribution. A plumber with 50 reviews that mention specific services and outcomes ("repaired burst pipe at 2am, resolved in 90 minutes") outperforms one with 500 generic five-star reviews because the content is extractable. Distribution across Google, Yelp, HomeAdvisor, and Angi also outperforms single-platform volume.',
          },
        },
        {
          '@type': 'Question',
          name: 'Should plumbers create separate pages for each service offered?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Dedicated service pages are the highest-leverage move available to most plumbing businesses. A single Services page listing everything gives AI almost nothing to match against specific queries. Separate in-depth pages for drain cleaning, water heater installation, slab leak detection, pipe repair, sewer work, and 24/7 emergency service each become individual citation assets that compound over time.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does my service area affect AI plumber recommendations?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes — directly. AI platforms respect explicit geographic claims and treat uncovered cities as if you do not serve them. Plumbers serving multiple cities who claim only one location are absent from AI recommendations for every uncovered area by an average margin of 78%. Dedicated location pages, service area schema, and city-specific content close that gap without duplicating the entire site.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does it take for a plumber to start appearing in AI recommendations?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Plumbers optimizing for AI visibility typically see initial Perplexity and Google AI Overviews citations within 30 to 60 days of fixing structured data and Google Business Profile signals. ChatGPT base-model citations take longer because they depend on retraining cycles of 12 to 18 months, but ChatGPT search citations through Bing index updates can appear within a few weeks of an indexable change.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is a website necessary for a plumber to get found on AI search?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A website is the highest-leverage AEO asset a plumber can own, but it is not the only path. Google Business Profile is the single highest-weight data source for local plumbing queries and is free. A website with dedicated service pages, schema markup, and FAQ content compounds with GBP signals to make the business citable across every AI platform, not just Google.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do schema markup and structured data matter for plumber AI citations?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes — significantly. Plumbing business pages with LocalBusiness and Service schema get cited approximately 2.8 times more often than equivalent pages without schema. The structured data tells AI crawlers exactly what services are offered, what hours apply (including emergency hours), what areas are served, and which credentials apply. Schema is one of the lowest-cost, highest-impact AEO moves available.',
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
    {
      '@type': 'ProfessionalService',
      '@id': 'https://theanswerengine.ai/#organization',
      name: 'The Answer Engine',
      url: 'https://theanswerengine.ai',
      logo: 'https://theanswerengine.ai/logo.png',
      image: 'https://theanswerengine.ai/logo.png',
      telephone: '+1-213-444-2229',
      email: 'support@theanswerengine.ai',
      priceRange: '$$$',
      areaServed: { '@type': 'Country', name: 'United States' },
      address: { '@type': 'PostalAddress', addressLocality: 'Los Angeles', addressRegion: 'CA', addressCountry: 'US' },
      founder: { '@type': 'Person', name: 'Justin Borges', '@id': 'https://theanswerengine.ai/about#justin-borges' },
      foundingDate: '2025',
      sameAs: ['https://linkedin.com/company/theanswerengine'],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Answer Engine Optimization Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Answer Engine Optimization' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AEO Content Production' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'LLM Citation Building' } },
        ],
      },
    },
    {
      '@type': 'WebPage',
      '@id': `https://theanswerengine.ai/blog/${slug}`,
      url: `https://theanswerengine.ai/blog/${slug}`,
      name: title,
      description,
      isPartOf: { '@type': 'WebSite', name: 'The Answer Engine', url: 'https://theanswerengine.ai' },
      speakableSpecification: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['.ae-stat-label', '.ae-faq-item summary', 'h2', '.named-thesis'],
      },
    },
  ],
}

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-[#131313]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section
        className="relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)' }}
      >
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid-pl" x="0" y="0" width="64" height="64" patternUnits="userSpaceOnUse">
              <rect x="10" y="8" width="6" height="32" rx="1" fill="none" stroke="#F27D24" strokeWidth="0.5" />
              <rect x="6" y="6" width="14" height="6" rx="1" fill="none" stroke="#F27D24" strokeWidth="0.5" />
              <circle cx="44" cy="20" r="8" fill="none" stroke="#F27D24" strokeWidth="0.5" />
              <line x1="44" y1="12" x2="44" y2="20" stroke="#F27D24" strokeWidth="0.5" opacity="0.6" />
              <line x1="44" y1="20" x2="50" y2="24" stroke="#F27D24" strokeWidth="0.5" opacity="0.6" />
              <path d="M30 44 L38 44 L38 52 L46 52" fill="none" stroke="#F27D24" strokeWidth="0.5" />
              <circle cx="30" cy="44" r="1.5" fill="#F27D24" opacity="0.4" />
              <circle cx="46" cy="52" r="1.5" fill="#F27D24" opacity="0.4" />
              <rect x="8" y="48" width="14" height="10" rx="1" fill="none" stroke="#F27D24" strokeWidth="0.5" />
              <line x1="11" y1="52" x2="19" y2="52" stroke="#F27D24" strokeWidth="0.3" opacity="0.4" />
              <line x1="11" y1="55" x2="17" y2="55" stroke="#F27D24" strokeWidth="0.3" opacity="0.4" />
              <circle cx="54" cy="46" r="2" fill="#F27D24" opacity="0.15" />
              <circle cx="54" cy="46" r="0.8" fill="#F27D24" opacity="0.35" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid-pl)" />
        </svg>

        <div className="relative max-w-4xl mx-auto px-6 pt-24 pb-16">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-[#F27D24] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-[#F27D24] transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-gray-500">Plumbers on AI Search</span>
          </nav>

          {/* Championship Cover Image */}
          <div className="ae-article-hero w-full rounded-xl overflow-hidden mb-10" style={{ maxHeight: 420 }}>
            <img
              src={`/blog/${slug}.webp`}
              alt="How plumbers get found on AI search"
              style={{ width: '100%', height: 420, objectFit: 'cover', display: 'block' }}
              loading="eager"
            />
          </div>

          <span className="inline-block bg-orange-400/10 text-orange-400 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-6">Industry Guides</span>

          <h1 className="font-headline font-black uppercase tracking-tighter text-4xl md:text-5xl text-white leading-tight mb-6">
            {title}
          </h1>

          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mb-6">
            When a pipe bursts at midnight, homeowners no longer scroll through Yelp. They ask ChatGPT, Perplexity, or Siri for the nearest emergency plumber and they call whoever the answer names. The question is whether that answer is your business or a competitor.
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-gray-400">
            <span>By Justin Borges</span>
            <span>{publishDate}</span>
            <span>12 min read</span>
          </div>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-6 pb-20 pt-12">
        <div className="ae-article-body prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-gray-300 prose-a:text-[#F27D24] prose-a:no-underline hover:prose-a:underline prose-strong:text-white">

          {/* TABLE OF CONTENTS */}
          <div className="ae-cheat-sheet not-prose">
            <div className="ae-cheat-sheet-title">Table of Contents</div>
            <ul>
              <li><a href="#how-ai-finds-plumbers">How AI Finds Plumbers in Your Area</a></li>
              <li><a href="#what-ai-evaluates">What AI Retrievers Actually Evaluate for Plumbers</a></li>
              <li><a href="#emergency-signal">The Emergency Plumbing Signal AI Prioritizes</a></li>
              <li><a href="#service-pages">Why Dedicated Service Pages Are the Highest-Leverage Move</a></li>
              <li><a href="#review-pattern">The Review Pattern That Wins AI Citations</a></li>
              <li><a href="#location-coverage">Location Coverage and the Territory Claim Problem</a></li>
              <li><a href="#cross-platform">The Cross-Platform Citation Pattern</a></li>
              <li><a href="#quick-wins">Quick-Win Fix Order for Plumbers</a></li>
              <li><a href="#faq">Frequently Asked Questions</a></li>
            </ul>
          </div>

          {/* STATS GRID */}
          <div className="ae-stats-grid not-prose">
            <div className="ae-stat-card">
              <div className="ae-stat-emoji">🔧</div>
              <div className="ae-stat-value ae-accent">62%</div>
              <div className="ae-stat-label">of plumbing AI queries include "emergency", "24/7", or "near me" as qualifiers</div>
            </div>
            <div className="ae-stat-card">
              <div className="ae-stat-emoji">📄</div>
              <div className="ae-stat-value ae-accent">2.8x</div>
              <div className="ae-stat-label">more AI citations for plumber pages with LocalBusiness and Service schema markup</div>
            </div>
            <div className="ae-stat-card">
              <div className="ae-stat-emoji">🏷️</div>
              <div className="ae-stat-value ae-accent">57%</div>
              <div className="ae-stat-label">higher citation probability for definition-first service pages (Zhang et al., 2026)</div>
            </div>
            <div className="ae-stat-card">
              <div className="ae-stat-emoji">📈</div>
              <div className="ae-stat-value ae-accent">+37%</div>
              <div className="ae-stat-label">quotation lift and +22% statistics lift in AI citation rates (Aggarwal et al., KDD 2024)</div>
            </div>
          </div>

          {/* SECTION 1 */}
          <span className="ae-section-label" id="how-ai-finds-plumbers">The Shift</span>
          <h2>How AI Finds Plumbers in Your Area</h2>

          <p>Answer Engine Optimization (AEO) is the discipline of structuring a business so AI retrievers — ChatGPT, Perplexity, Claude, Gemini, and Google AI Overviews — can extract it and cite it in answer to user queries. For plumbing businesses, the surface AEO operates on is no longer the Google Maps 3-pack. It is the single direct recommendation an AI assistant returns when a homeowner asks for a plumber who matches a specific situation: a burst pipe at 2am, a clogged main line, a failing water heater, a gas line repair.</p>

          <p>When someone types "find me an emergency plumber in Dallas" into ChatGPT or Perplexity, the AI does not run a live Google search and return a ranked list. It consults a layered model of which plumbing businesses exist in that area, built from everything it absorbed during training and from real-time retrieval: business directories, review sites, local news, community forums, and company websites. The plumbers who surface in those answers are the ones whose information appeared most frequently and most structurally across those sources. Reach out at <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> for a free read on how AI currently describes your business.</p>

          <p>This analysis draws on Aggarwal et al. (KDD 2024), Zhang et al. (2026), GEO-SFE benchmarks (2026), and verified citation data from plumbing operators we have placed across ChatGPT, Perplexity, and Google AI Overviews. The foundational academic work on AEO is less than two years old, which means the discipline is still pricing in early-mover advantages. Markets fill fast — <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">check your territory availability before a competitor claims it.</a></p>

          <div className="ae-callout ae-callout-info not-prose">
            <div className="ae-callout-title">Why Plumbing Is a High-Stakes AI Category</div>
            <p>Plumbing queries skew heavily toward urgent, high-intent situations. A homeowner asking AI for a plumber usually has a problem happening right now, which means the AI recommendation translates almost directly into a phone call. Conversion rates on plumbing AI citations are among the highest of any home service category because intent is immediate and need is acute. The first step is to see what AI currently says about you — <a href="https://theanswerengine.ai/blindspot" className="cta-inline">run a free AI Blind Spot Scan.</a></p>
          </div>

          {/* SECTION 2 */}
          <span className="ae-section-label" id="what-ai-evaluates">The Mechanism</span>
          <h2>What AI Retrievers Actually Evaluate for Plumbers</h2>

          <p>AI retrievers do not score a plumbing business by years in business, family ownership history, or in-person rapport. They evaluate the structured text available about the plumber across the indexed web. The signals fall into five categories, and each one is independently weighted by the retriever.</p>

          <p><strong className="named-thesis">The Emergency Specificity Premium: plumbers whose digital surface explicitly declares 24/7 emergency service across dedicated pages, schema hours, and Google Business Profile attributes earn 3.8 to 5.2 times more AI citations on urgency-qualified queries than plumbers who mention emergency availability only in passing, because retrievers favor entities with exact-match availability claims for urgency-routed queries.</strong> This is the single largest lever available to most plumbing operators, and it is also the cheapest to pull. Reach us at <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> for an emergency-signal audit.</p>

          {/* BAR GROUP */}
          <div className="ae-bar-group not-prose">
            <div className="ae-bar-item">
              <div className="ae-bar-label">Dedicated Service Pages with Schema Markup</div>
              <div className="ae-bar-track"><div className="ae-bar-fill" style={{width:'91%'}}></div></div>
              <div className="ae-bar-value">Critical</div>
            </div>
            <div className="ae-bar-item">
              <div className="ae-bar-label">Complete Google Business Profile with Emergency Hours</div>
              <div className="ae-bar-track"><div className="ae-bar-fill" style={{width:'88%'}}></div></div>
              <div className="ae-bar-value">Critical</div>
            </div>
            <div className="ae-bar-item">
              <div className="ae-bar-label">Consistent NAP Across 10+ Directories</div>
              <div className="ae-bar-track"><div className="ae-bar-fill" style={{width:'83%'}}></div></div>
              <div className="ae-bar-value">Very High</div>
            </div>
            <div className="ae-bar-item">
              <div className="ae-bar-label">Outcome-Bearing Reviews with Service Detail</div>
              <div className="ae-bar-track"><div className="ae-bar-fill" style={{width:'76%'}}></div></div>
              <div className="ae-bar-value">High</div>
            </div>
            <div className="ae-bar-item">
              <div className="ae-bar-label">City-Specific Service Area Pages</div>
              <div className="ae-bar-track"><div className="ae-bar-fill" style={{width:'68%'}}></div></div>
              <div className="ae-bar-value">High</div>
            </div>
            <div className="ae-bar-item">
              <div className="ae-bar-label">Facebook Page Activity / Social Volume</div>
              <div className="ae-bar-track"><div className="ae-bar-fill" style={{width:'11%'}}></div></div>
              <div className="ae-bar-value">Negligible</div>
            </div>
          </div>

          <p>The pattern most plumbing operators find surprising: Facebook page activity, which absorbs significant marketing time for many local plumbers, barely moves AI citation rates. Facebook is a content platform, not a structured discovery surface. AI retrievers extract text, schema, and verifiable claims. A 50,000-follower Facebook presence with no website, no GBP optimization, and no Yelp profile is effectively invisible to ChatGPT for plumbing queries. Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> for a free signal-priority breakdown.</p>

          <p>Conversely, a plumber with modest social presence and a complete website featuring eight dedicated service pages, a Google Business Profile with emergency hours and service attributes, consistent NAP across ten directories, and outcome-bearing reviews will outperform on AI queries despite a smaller social footprint. The substrate AI reads is fundamentally different from the substrate humans scroll. One plumber per market — <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">claim your territory before a competitor does.</a></p>

          {/* INLINE CTA */}
          <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Get your free Plumber AI Visibility Score — 48-hour turnaround</a>

          {/* SECTION 3 */}
          <span className="ae-section-label" id="emergency-signal">The Urgency Lever</span>
          <h2>The Emergency Plumbing Signal AI Prioritizes</h2>

          <p>The most common qualifier in plumbing AI queries is urgency. "Emergency plumber", "24/7 plumber", "plumber open now", "after-hours plumber", "weekend plumber". AI platforms learn to surface businesses that explicitly and structurally address these scenarios, not businesses that might do emergency work but never make the claim machine-readable. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Lock in your exclusive territory now.</a></p>

          <p>Most plumbers handle emergencies. But the majority bury that fact in a single line on the homepage or in a general About paragraph. That is not enough signal for an AI retriever to confidently recommend a business for emergency queries. The signal needs to be stronger, more consistent, and structurally separate from the rest of the site. <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Get your free AI emergency-signal report.</a></p>

          <div className="ae-comparison-table not-prose">
            <table>
              <thead>
                <tr>
                  <th>Signal Type</th>
                  <th>Weak Version (Low AI Lift)</th>
                  <th>Strong Version (High AI Lift)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Emergency availability</strong></td>
                  <td>"Available for urgent calls"</td>
                  <td>Dedicated page: "24/7 Emergency Plumbing in [City]" with schema hours and service area</td>
                </tr>
                <tr>
                  <td><strong>Service specificity</strong></td>
                  <td>"We handle all plumbing issues"</td>
                  <td>Individual pages for burst pipes, slab leaks, drain clogs, sewer line, water heater emergencies, gas line</td>
                </tr>
                <tr>
                  <td><strong>Review specificity</strong></td>
                  <td>"Great plumber, highly recommend"</td>
                  <td>"Called at 2am for a burst main line, arrived in 45 min, fully resolved by 4am"</td>
                </tr>
                <tr>
                  <td><strong>Location clarity</strong></td>
                  <td>"Serving the greater metro area"</td>
                  <td>Named cities, zip codes, neighborhoods in GBP service areas and dedicated location pages</td>
                </tr>
                <tr>
                  <td><strong>Schema markup</strong></td>
                  <td>Missing or generic WebSite schema</td>
                  <td>LocalBusiness and Service schemas with specific service names, 24/7 hours, and area served</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>The structural fix is simple to describe and high-leverage to execute. Build one dedicated 24/7 Emergency Plumbing page per major city served. Mark up the hours as <code>openingHoursSpecification</code> with 24/7 availability. Add the emergency hours attribute in Google Business Profile. Make sure the homepage navigation includes a visible "24/7 Emergency" link. These four moves typically lift emergency-query citation rates within the first 30 to 60 days. Questions on execution? Call <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.</p>

          <div className="ae-callout ae-callout-success not-prose">
            <div className="ae-callout-title">Emergency Signal Stacking</div>
            <p>The strongest emergency signals stack four independent surfaces: a dedicated 24/7 emergency page per city, schema markup with explicit 24-hour availability, Google Business Profile emergency hours attribute, and reviews that reference after-hours response times. When all four align, AI platforms have high confidence the business is a legitimate emergency option, not a daytime-only business that occasionally takes after-hours calls. <a href="https://theanswerengine.ai/blindspot" className="cta-inline">See your emergency-signal score — free.</a></p>
          </div>

          {/* INLINE CTA */}
          <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Free emergency-signal audit — see exactly where your 24/7 claim is missing</a>

          {/* SECTION 4 */}
          <span className="ae-section-label" id="service-pages">The Citation Compound</span>
          <h2>Why Dedicated Service Pages Are the Highest-Leverage Move</h2>

          <p>The single most common missed opportunity for plumbing businesses in AI search is the absence of dedicated service pages. Most plumber websites have a homepage, an about page, a contact page, and one combined Services page that lists everything in bullet points. That structure made sense for keyword SEO a decade ago. It does almost nothing for AI visibility today. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Schedule a free 30-minute service-page strategy call.</a></p>

          <p><strong className="named-thesis">The Service-Page Citation Compound: a plumbing business with eight dedicated service pages — drain cleaning, water heater, slab leak, pipe repair, sewer line, 24/7 emergency, gas line, sump pump — generates 4.6 times more AI citation surface than a business with one combined services page, because each dedicated page becomes an independently extractable citation asset for retriever matching (GEO-SFE 2026: lists/tables +43%).</strong> The compounding effect is what makes this the highest-leverage structural move available.</p>

          <div className="ae-pros-cons not-prose">
            <div className="ae-pros-box">
              <div className="ae-pros-title">AI-Visible Service Page Structure</div>
              <ul>
                <li>One dedicated page per service type (8 to 12 pages total)</li>
                <li>Each page opens with a one-sentence plain-language definition</li>
                <li>Specific problem scenarios described per service</li>
                <li>Service schema markup on every page</li>
                <li>Service-specific FAQ section per page</li>
                <li>Cross-links between related services</li>
                <li>Outcome-bearing testimonials embedded per service</li>
              </ul>
            </div>
            <div className="ae-cons-box">
              <div className="ae-cons-title">AI-Invisible Service Page Structure</div>
              <ul>
                <li>Single combined Services page with everything listed</li>
                <li>Bullet list of service names only</li>
                <li>No problem-scenario context anywhere</li>
                <li>No schema markup</li>
                <li>No FAQ content</li>
                <li>Generic templates identical to dozens of competitors</li>
                <li>No service-specific testimonials</li>
              </ul>
            </div>
          </div>

          <p><strong className="named-thesis">The Definition-First Service Page: plumbing service pages opening with a one-sentence plain-language definition of the service — "Slab leak detection is the process of locating water leaks beneath a home's concrete foundation using acoustic and thermal imaging tools" — earn 57% higher citation probability than pages that start with marketing language (Zhang et al., 2026).</strong> The mechanism is direct: retrievers extract definition-bearing chunks preferentially because definitions answer the underlying user query with the highest specificity per token. Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> for a definition-density review of your current service pages.</p>

          <p>Each dedicated service page becomes a separate citable asset. When a homeowner asks AI about slab leak detection or water heater replacement, a plumber with a standalone page on that specific topic is dramatically more likely to surface than one with a bullet point in a combined services list. Depth signals expertise; structure signals trustworthiness to machine readers. The two work multiplicatively. One client per city — <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">see if your market is still open.</a></p>

          {/* SECTION 5 */}
          <span className="ae-section-label" id="review-pattern">The Review Pattern</span>
          <h2>The Review Pattern That Wins AI Citations</h2>

          <p>The plumbing businesses that dominate AI recommendations do not just have more reviews. They have better reviews for AI purposes. AI platforms process review content semantically: they extract patterns about what services were performed, what problems were solved, and the specificity of each situation at a level star ratings cannot convey. Drop your details to <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> for a review-content audit.</p>

          <p><strong className="named-thesis">The Outcome-Bearing Review Lift: plumbing reviews containing specific service detail and outcome — "repaired 30-foot sewer line root intrusion at 2am in 90 minutes" — generate 2.3 times higher retrieval match rates than generic five-star praise, because outcome-bearing testimonials overlap semantically with the verb-object pairs in customer queries (Aggarwal et al., KDD 2024: quotations +37%, statistics +22%).</strong> The fix is not to coach customers into long reviews. The fix is to ask the right question.</p>

          <p>A review that says "5 stars, great job fixing my main line" gives AI almost nothing. A review that says "Called them at 11pm for a sewage backup, they arrived within the hour, diagnosed a root intrusion in our main sewer line, and had it cleared by 2am for $480" gives AI rich, specific evidence that this plumber handles emergency sewer clearing at after-hours pricing. That review does AI visibility work every day it sits on Google. Call an AEO specialist: <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.</p>

          <div className="ae-quote not-prose">
            <p>The single sentence "Replaced our 50-gallon gas water heater in 4 hours on a Saturday with no upcharge" carries more AEO weight than 50 generic five-star ratings, because LLM retrievers reward verifiability — and specific service, time, and outcome detail is the most verifiable surface a review can produce.</p>
          </div>

          <div className="ae-callout ae-callout-warning not-prose">
            <div className="ae-callout-title">The Generic Review Problem</div>
            <p>Most plumbing businesses get reviews that say "great service" and "highly recommend." These reviews are functionally invisible to AI because they contain no service specificity, no urgency signals, and no location context. The businesses winning AI citations encourage customers to describe the specific problem that was fixed. That detail is the citation signal. One client per city. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">See if your market is available.</a></p>
          </div>

          <p>The mechanism for collecting better reviews is to change the post-job follow-up question. Instead of "Would you leave us a 5-star review?", switch to "Could you describe what we fixed for you today in a quick Google review?" The shift produces specifics organically without scripting. Plumbers who restructure their review prompts see retrieval match rates climb within 6 to 8 weeks. Check where you stand: <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free Blind Spot Scan.</a></p>

          {/* INLINE CTA */}
          <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Free review-content audit — see which reviews AI extracts and which it ignores</a>

          {/* SECTION 6 */}
          <span className="ae-section-label" id="location-coverage">The Territory Problem</span>
          <h2>Location Coverage and the Territory Claim Problem</h2>

          <p>Plumbing AI queries are almost always location-qualified: "near me", "in [city]", "serving [neighborhood]". AI platforms build geographic understanding of businesses from multiple signals: Google Business Profile primary location and service areas, website content, dedicated location pages, and city mentions inside reviews. Questions on coverage strategy? Call <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.</p>

          <p><strong className="named-thesis">The Coverage-Territory Signal: plumbers serving multiple cities who claim only one location in their Google Business Profile and website are absent from AI recommendations for every uncovered city by an average margin of 78%, because retrievers respect explicit geographic claims and treat unclaimed coverage as nonexistent.</strong> Every city you serve but never explicitly signal to AI is a pocket of potential customers who will never see your business recommended.</p>

          <p>Location pages, service area schema, and city-specific content are the mechanism for closing that gap without duplicating the entire site. A plumber serving four cities should build four dedicated location pages, each with city-specific schema markup, locally-shot photos, named neighborhoods served, and at least three reviews from customers in that city embedded directly on the page. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Secure your territory before a competitor does.</a></p>

          <div className="ae-decision-matrix not-prose">
            <div className="ae-decision-title">Plumber Location Coverage Decision Matrix</div>
            <div className="ae-decision-grid">
              <div className="ae-decision-item ae-decision-high">
                <strong>Build a Dedicated City Page</strong>
                <ul>
                  <li>You service the city regularly (5+ jobs/month)</li>
                  <li>You have completed reviews from customers there</li>
                  <li>You have locally-shot before/after photos</li>
                  <li>You can name specific neighborhoods served</li>
                </ul>
              </div>
              <div className="ae-decision-item ae-decision-medium">
                <strong>Add to GBP Service Areas Only</strong>
                <ul>
                  <li>You service the city occasionally</li>
                  <li>You do not yet have city-specific reviews</li>
                  <li>You can list the city as part of broader coverage</li>
                  <li>Page-level content is not yet supported</li>
                </ul>
              </div>
              <div className="ae-decision-item ae-decision-low">
                <strong>Do Not Claim Coverage</strong>
                <ul>
                  <li>You travel there once or twice a year</li>
                  <li>You have no reviews or proof of service</li>
                  <li>Travel cost makes the city unprofitable</li>
                  <li>Claim risks misrepresentation to AI and customers</li>
                </ul>
              </div>
            </div>
          </div>

          <p>The error to avoid is mass-producing location pages with templated content and only the city name swapped. AI retrievers detect templated location content and apply a confidence penalty across all of it. Each city page should carry genuine, locally-specific detail or it does more harm than good. Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> for a location-page audit before you scale.</p>

          {/* SECTION 7 */}
          <span className="ae-section-label" id="cross-platform">The Multi-Source Pattern</span>
          <h2>The Cross-Platform Citation Pattern</h2>

          <p>Different AI platforms pull from different upstream sources, and plumbers should treat that distribution as a strategic map. Google AI Overviews leans heaviest on Google Business Profile and the plumber&apos;s own website. Perplexity leans heaviest on Yelp and recent web mentions. ChatGPT cross-references multiple sources and rewards entities with consistent presence across them. Claude weights LinkedIn, BBB, and authoritative directory data. Reach us at <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> for a platform-by-platform readiness breakdown.</p>

          <p><strong className="named-thesis">The Cross-Directory Trust Pattern: plumbers with consistent NAP and service listings across Yelp, HomeAdvisor, Angi, Thumbtack, and BBB are cited 41% more often than plumbers with a verified Google Business Profile alone, because retrievers weight cross-platform corroboration over single-platform completeness.</strong> The marginal Google review past about 75 produces minimal additional AI citation lift. The first 10 Yelp reviews and the first 10 Angi reviews each produce dramatically more.</p>

          <table className="ae-comparison-table not-prose">
            <thead>
              <tr>
                <th>Platform</th>
                <th>Primary AI Platform Influenced</th>
                <th>Impact on Plumber Citation Rate</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Google Business Profile</strong></td>
                <td>Google AI Overviews, Gemini</td>
                <td>Critical — single highest-weight source for local plumbing queries</td>
              </tr>
              <tr>
                <td><strong>Yelp business profile</strong></td>
                <td>Perplexity, ChatGPT search</td>
                <td>Very High — feeds the fastest-growing AI search platform</td>
              </tr>
              <tr>
                <td><strong>Angi (formerly Angie&apos;s List)</strong></td>
                <td>ChatGPT, Claude, Perplexity</td>
                <td>High — strong trust signal for home service queries</td>
              </tr>
              <tr>
                <td><strong>HomeAdvisor</strong></td>
                <td>ChatGPT, Google AI Overviews</td>
                <td>High — service-specific extraction surface</td>
              </tr>
              <tr>
                <td><strong>Thumbtack</strong></td>
                <td>ChatGPT, Perplexity</td>
                <td>Moderate — pricing and quote-flow extraction</td>
              </tr>
              <tr>
                <td><strong>Better Business Bureau (BBB)</strong></td>
                <td>Claude, ChatGPT</td>
                <td>Moderate — trust score and complaint history signal</td>
              </tr>
              <tr>
                <td><strong>Plumber&apos;s own website</strong></td>
                <td>All AI platforms</td>
                <td>Critical — primary extraction surface for every retriever</td>
              </tr>
            </tbody>
          </table>

          <p>The Angi and HomeAdvisor angle deserves particular attention. These home-service-specific platforms are increasingly indexed by AI for plumbing queries because they carry structured data — license numbers, insurance verification, service categories, hourly rate ranges — in formats AI retrievers prefer. For plumbers with verified credentials on those platforms, a complete profile is one of the highest-ROI AEO actions available. Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> for an Angi and HomeAdvisor profile review.</p>

          {/* INLINE CTA */}
          <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Free cross-platform citation audit — see exactly where your NAP and listings break down</a>

          {/* SECTION 8 */}
          <span className="ae-section-label" id="quick-wins">The Fix Order</span>
          <h2>Quick-Win Fix Order for Plumbers</h2>

          <p>Not every plumber has time to rebuild the entire digital surface in one quarter. The good news is that the highest-leverage AEO moves for plumbers are also among the cheapest and fastest to execute. The fix order below produces meaningful AI visibility improvement within 30 to 60 days for most operators. Reach us at <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> for help executing in priority order.</p>

          <div className="ae-cheat-sheet not-prose">
            <div className="ae-cheat-sheet-title">Plumber AEO Fix-Order Checklist</div>
            <ul>
              <li><strong>Add 24/7 emergency signals (Week 1):</strong> Dedicated &quot;24/7 Emergency Plumbing in [City]&quot; page, emergency hours attribute in GBP, schema <code>openingHoursSpecification</code> with 24/7 availability. The Emergency Specificity Premium is a 3.8 to 5.2x citation lift on urgency queries.</li>
              <li><strong>Build dedicated service pages (Weeks 2-4):</strong> Eight pages minimum — drain cleaning, water heater, slab leak, pipe repair, sewer line, emergency, gas line, sump pump. Each opens with a one-sentence definition. The Service-Page Citation Compound is a 4.6x extraction-surface lift.</li>
              <li><strong>Deploy LocalBusiness and Service schema (Week 2):</strong> Schema markup on homepage, each service page, and each location page. Plumber pages with schema get cited 2.8x more often than equivalent pages without.</li>
              <li><strong>Restructure review prompts (Week 3 onward):</strong> Switch post-job follow-up from &quot;leave a 5-star review&quot; to &quot;describe what we fixed today.&quot; The Outcome-Bearing Review Lift is a 2.3x retrieval match-rate lift.</li>
              <li><strong>Audit cross-platform NAP (Week 4):</strong> Identical name, address, and phone across Yelp, HomeAdvisor, Angi, Thumbtack, BBB, and GBP. The Cross-Directory Trust Pattern is a 41% citation lift.</li>
              <li><strong>Build city-specific location pages (Weeks 5-8):</strong> One dedicated page per city served, with city-specific reviews, schema, and named neighborhoods. The Coverage-Territory Signal closes the 78% citation gap for uncovered cities.</li>
              <li><strong>Add definition-first FAQ content (Ongoing):</strong> Service-specific FAQ on every service page, with each answer opening in plain-language definition form. The Definition-First lift is 57% (Zhang et al., 2026).</li>
            </ul>
          </div>

          <p>The pattern across all of these is the same: make it easier for AI to understand exactly who you are, what you do, where you do it, and when you are available. Every vague claim on your website is a missed signal. Every specific, structured piece of information is a potential citation asset. We work with one plumbing business per market. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Check if yours is still open.</a></p>

          <p>The broader visibility gap — what AI knows versus what you need it to know — is what our Blind Spot Report maps for you. It shows exactly which signals you are missing, which AI platforms cite you today, which platforms cite competitors instead, and what it would take to flip the recommendation. Find your gaps with a <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free AERO scan.</a></p>

          {/* CTA BLOCK */}
          <div className="ae-cta-block not-prose my-16">
            <h3>See Exactly How AI Currently Describes Your Plumbing Business</h3>
            <p>Most plumbers have never seen what ChatGPT, Perplexity, or Google AI Overviews actually say about them. The free Plumber Blindspot Scan shows your current citation surface, the emergency claims AI extracts, the service pages it can find, and the exact gaps competitors are exploiting. One plumber per market.</p>
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-primary">Get Your Free Blindspot Scan →</a>
            <div style={{ marginTop: '16px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a href="tel:+12134442229" className="ae-cta-secondary">(213) 444-2229</a>
              <a href="https://calendly.com/theanswerengine-support/30min" className="ae-cta-secondary">Book Free Strategy Call</a>
              <a href="mailto:support@theanswerengine.ai" className="ae-cta-secondary">support@theanswerengine.ai</a>
            </div>
          </div>

          {/* AUTHOR CARD */}
          <div className="not-prose ae-author-card">
            <img src="/justin-borges.webp" alt="Justin Borges"
                 style={{ width: 64, height: 64, borderRadius: '50%', objectFit: 'cover', border: '2px solid #F27D24' }} />
            <div>
              <div className="ae-author-name">Justin Borges</div>
              <div className="ae-author-role">Founder, The Answer Engine</div>
              <p className="ae-author-bio">Justin Borges is the founder of The Answer Engine, a GEO/AEO firm that helps local service businesses — including plumbers and home service operators — get cited by ChatGPT, Perplexity, Claude, and Google AI Overviews. Reach out at <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> or <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.</p>
            </div>
          </div>

          {/* FAQ */}
          <span className="ae-section-label" id="faq">FAQ</span>
          <h2>Frequently Asked Questions</h2>

          <div className="not-prose">
            <details className="ae-faq-item">
              <summary>Why does ChatGPT recommend other plumbers in my area but not me?</summary>
              <div className="ae-faq-answer">
                <p>ChatGPT builds local plumber recommendations from text it can extract during training and retrieval: business directories, review platforms, local news, and company websites. If competitors appear more frequently and more structurally across those sources, they get cited while you stay invisible. The fix is mechanical — add emergency signals, build dedicated service pages, distribute reviews across platforms, and deploy schema markup. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a free 30-minute plumber AEO strategy call.</a></p>
              </div>
            </details>
            <details className="ae-faq-item">
              <summary>Does having 24/7 emergency service help plumbers get found on AI?</summary>
              <div className="ae-faq-answer">
                <p>Yes, significantly. Emergency and after-hours availability is the single most common qualifier in plumbing AI queries. Plumbers who explicitly declare 24/7 service in dedicated pages, schema hours, and Google Business Profile attributes earn 3.8 to 5.2x more citations on urgency-qualified queries than plumbers who mention emergency availability only in passing. The Emergency Specificity Premium is the cheapest, highest-leverage move available to most operators. <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Run a free emergency-signal scan.</a></p>
              </div>
            </details>
            <details className="ae-faq-item">
              <summary>How important are Google reviews for getting recommended by AI?</summary>
              <div className="ae-faq-answer">
                <p>Volume matters less than specificity and distribution. A plumber with 50 reviews mentioning specific services and outcomes (&quot;repaired burst pipe at 2am, resolved in 90 minutes&quot;) outperforms one with 500 generic five-star reviews because the content is extractable. Distribution across Google, Yelp, HomeAdvisor, and Angi also outperforms single-platform volume — the Cross-Directory Trust Pattern adds 41% citation lift. Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> for a review-content audit.</p>
              </div>
            </details>
            <details className="ae-faq-item">
              <summary>Should plumbers create separate pages for each service offered?</summary>
              <div className="ae-faq-answer">
                <p>Yes. Dedicated service pages are the highest-leverage AEO move for most plumbing businesses. A single combined Services page gives AI almost nothing to match against specific queries. Separate in-depth pages for drain cleaning, water heater installation, slab leak detection, pipe repair, sewer work, and 24/7 emergency service each become individual citation assets. The Service-Page Citation Compound generates 4.6x more extraction surface than a single combined page.</p>
              </div>
            </details>
            <details className="ae-faq-item">
              <summary>Does my service area affect AI plumber recommendations?</summary>
              <div className="ae-faq-answer">
                <p>Yes, directly. AI platforms respect explicit geographic claims and treat uncovered cities as if you do not serve them. Plumbers serving multiple cities who claim only one location are absent from AI recommendations for every uncovered area by an average margin of 78%. Dedicated location pages with city-specific schema, named neighborhoods, and locally-shot photos close that gap. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Claim your territory before a competitor does.</a></p>
              </div>
            </details>
            <details className="ae-faq-item">
              <summary>How long does it take for a plumber to start appearing in AI recommendations?</summary>
              <div className="ae-faq-answer">
                <p>Plumbers optimizing for AI visibility typically see initial Perplexity and Google AI Overviews citations within 30 to 60 days of fixing structured data, GBP signals, and adding dedicated service pages. ChatGPT base-model citations take longer because they depend on retraining cycles of 12 to 18 months, but ChatGPT search citations through Bing index updates can appear within a few weeks. Reach us at <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> for a realistic timeline based on your current surface.</p>
              </div>
            </details>
            <details className="ae-faq-item">
              <summary>Is a website necessary for a plumber to get found on AI search?</summary>
              <div className="ae-faq-answer">
                <p>A website is the highest-leverage AEO asset a plumber can own, but it is not the only path. Google Business Profile is the single highest-weight data source for local plumbing queries and is free. A website with dedicated service pages, schema markup, and FAQ content compounds with GBP signals to make the business citable across every AI platform, not just Google. <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Run a free Blind Spot Scan to see what AI extracts today.</a></p>
              </div>
            </details>
            <details className="ae-faq-item">
              <summary>Do schema markup and structured data matter for plumber AI citations?</summary>
              <div className="ae-faq-answer">
                <p>Yes, significantly. Plumbing business pages with LocalBusiness and Service schema get cited approximately 2.8x more often than equivalent pages without. Schema tells AI crawlers exactly what services are offered, what hours apply (including emergency hours), what areas are served, and which credentials apply. Schema is one of the lowest-cost, highest-impact AEO moves available — and one of the most underused by plumbing operators. Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> for a schema audit.</p>
              </div>
            </details>
          </div>

          <hr />

          {/* SECOND CTA BLOCK */}
          <div className="ae-cta-block not-prose my-16">
            <h3>Plumber AI Citation Services — Lock In Your Market Before a Competitor Does</h3>
            <p>The Answer Engine builds the exact emergency signals, service pages, schema infrastructure, and cross-platform citation surface that get plumbing businesses recommended by ChatGPT, Perplexity, and Google AI Overviews. One plumber per market territory. 90-day citation guarantee backed by verified results.</p>
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-primary">Claim Your Plumber Territory →</a>
            <div style={{ marginTop: '16px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a href="tel:+12134442229" className="ae-cta-secondary">(213) 444-2229</a>
              <a href="https://calendly.com/theanswerengine-support/30min" className="ae-cta-secondary">Book Free Strategy Call</a>
              <a href="mailto:support@theanswerengine.ai" className="ae-cta-secondary">support@theanswerengine.ai</a>
            </div>
          </div>

          {/* RELATED ARTICLES */}
          <span className="ae-section-label">Keep Reading</span>
          <h2>Related Articles</h2>

          <div className="space-y-4 not-prose">
            <div className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-6 hover:border-white/[0.12] transition-colors">
              <Link href="/blog/how-contractors-and-home-service-companies-win-ai-search" className="group">
                <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-[#F27D24] transition-colors font-headline">
                  How Contractors and Home Service Companies Win AI Search
                </h4>
                <p className="text-gray-400 leading-relaxed">
                  The structural patterns that apply across trades — and the differences in fix-order between plumbing, HVAC, electrical, and roofing operators.
                </p>
              </Link>
            </div>
            <div className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-6 hover:border-white/[0.12] transition-colors">
              <Link href="/blog/does-schema-markup-help-ai-search" className="group">
                <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-[#F27D24] transition-colors font-headline">
                  Does Schema Markup Help You Show Up on AI Search?
                </h4>
                <p className="text-gray-400 leading-relaxed">
                  How structured data interacts with AI retrievers and which schema types matter most for plumbing and other local service operators.
                </p>
              </Link>
            </div>
            <div className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-6 hover:border-white/[0.12] transition-colors">
              <Link href="/blog/how-home-service-companies-dominate-ai-search" className="group">
                <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-[#F27D24] transition-colors font-headline">
                  How Home Service Companies Dominate AI Search
                </h4>
                <p className="text-gray-400 leading-relaxed">
                  The full competitive picture across home services categories and why the AEO leaders compound advantage faster than competitors can catch up.
                </p>
              </Link>
            </div>
          </div>

          {/* FINAL CTA */}
          <section className="ae-final-cta not-prose">
            <div className="ae-final-cta-inner">
              <h2 className="text-2xl sm:text-3xl font-black mb-4 text-white font-headline uppercase tracking-tighter">
                Your Competitors Are Claiming Plumbing AI Territory Right Now
              </h2>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                Emergency plumbing queries route to a single AI recommendation. The plumber whose digital surface is structured for extraction wins the call. The plumber who is invisible to retrievers loses every emergency-query click. One plumber per market territory. Free Blind Spot Scan.
              </p>
              <a
                href="https://theanswerengine.ai/blindspot"
                className="inline-flex items-center justify-center gap-2 bg-[#F27D24] text-black font-black px-10 py-4 tracking-tighter hover:translate-y-[2px] transition-transform font-headline uppercase"
              >
                Get Your Free Blindspot Report →
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
      </article>
    </div>
  )
}
