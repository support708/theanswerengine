import type { Metadata } from 'next'
import Link from 'next/link'

export const revalidate = 86400
export const dynamic = 'force-static'
export const dynamicParams = true

const title = "What ChatGPT Can See About Your Business"
const heroHeadline = "What ChatGPT CAN See About Your Business (and What It Can't)"
const description = "ChatGPT is blind to your Google Business Profile. Here is exactly what it CAN see — Bing Places, Yelp, your website, BBB — and how to get cited."
const slug = 'chatgpt-cant-see-google-business-profile'
const publishDate = '2025-12-17'
const modifiedDate = '2026-05-31'

export const metadata: Metadata = {
  title: `${title} | The Answer Engine`,
  description,
  keywords: 'ChatGPT Google Business Profile, what ChatGPT can see about my business, ChatGPT GBP, ChatGPT local business sources, Bing Places ChatGPT, Yelp ChatGPT, AI citation sources, answer engine optimization, get cited by ChatGPT, AEO for local business',
  authors: [{ name: 'Justin Borges', url: 'https://theanswerengine.ai/about' }],
  openGraph: {
    title,
    description,
    type: 'article',
    publishedTime: publishDate,
    modifiedTime: modifiedDate,
    authors: ['Justin Borges'],
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
      dateModified: modifiedDate,
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
        knowsAbout: ['Answer Engine Optimization', 'AI Citation Strategy', 'AI Search', 'LLM Visibility', 'Generative Engine Optimization', 'Google Business Profile', 'Local AI Search'],
        url: 'https://theanswerengine.ai/about',
        image: 'https://theanswerengine.ai/justin-borges.webp',
        sameAs: ['https://linkedin.com/in/justinborges'],
      },
      publisher: {
        '@type': 'Organization',
        name: 'The Answer Engine',
        url: 'https://theanswerengine.ai',
        logo: { '@type': 'ImageObject', url: 'https://theanswerengine.ai/ae-logo.png' },
      },
      mainEntityOfPage: { '@type': 'WebPage', '@id': `https://theanswerengine.ai/blog/${slug}` },
      articleSection: 'AEO Fundamentals',
      keywords: 'ChatGPT Google Business Profile, ChatGPT GBP, ChatGPT local sources, Bing Places, Yelp, BBB, AEO local business, answer engine optimization, AI citation, LLM visibility',
      wordCount: 3400,
      inLanguage: 'en-US',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: "Why can't ChatGPT see my Google Business Profile?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "ChatGPT does not crawl Google. ChatGPT's web retrieval runs through Bing's search infrastructure, and Google Business Profile data is proprietary to Google with no public API for outside scrapers. On top of that, most Google surface pages require JavaScript rendering, which ChatGPT's retrieval layer does not execute. The result is total invisibility — your GBP listing, your Google Reviews, and your Google Posts are all dark to ChatGPT.",
          },
        },
        {
          '@type': 'Question',
          name: 'What CAN ChatGPT see about my business?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'ChatGPT can read your business website, Bing Places listing, Yelp profile, BBB listing, Facebook Page, LinkedIn Company Page, industry directories like HomeAdvisor and Avvo, news articles, podcast show notes, and any other static HTML page on the open web. Business websites account for 58% of local recommendations in ChatGPT — your own site is the most influential lever you have.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can ChatGPT see my Google Reviews?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Google Reviews live inside Google Business Profile, which is JavaScript-rendered and protected from third-party scrapers. ChatGPT cannot read a single Google Review. The reviews ChatGPT cites come from Yelp, BBB, Trustpilot, Houzz, Avvo, and other AI-readable platforms. To make your reviews visible to ChatGPT, mirror your best reviews as plain text on your website and build a review presence on AI-accessible platforms.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does my Bing Places listing matter for ChatGPT?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes — significantly. ChatGPT routes local queries through Bing, and Bing Places is the only first-party local listing ChatGPT can actually read. A claimed, complete Bing Places listing functions as ChatGPT\'s equivalent of a Google Business Profile. Fewer than 18% of local service businesses have claimed their Bing Places listing, which makes it one of the highest-impact cheap moves in AEO.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does my website affect what ChatGPT says about my business?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes — your website is the single most influential surface. Business websites supply 58% of the citations ChatGPT generates for local recommendations. The content depth, structured data, definition density, and FAQ coverage on your site directly determine whether ChatGPT names you, how it describes you, and whether it links to you. A thin website is an invisible website.',
          },
        },
        {
          '@type': 'Question',
          name: 'If ChatGPT can\'t see my Google Business Profile, should I still update it?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes — keep it updated for human Google Search users and Google AI Overviews, which DO read GBP. But do not assume GBP work translates to ChatGPT visibility. ChatGPT, Claude, and Perplexity all bypass Google. Local AEO requires a parallel investment in the surfaces those models actually read: Bing Places, Yelp, BBB, your own site, and citation directories.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I make my business visible to ChatGPT?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Execute the five-surface AEO playbook: claim and fully complete Bing Places, build a content-deep website with proper LocalBusiness and FAQ schema, concentrate review acquisition on Yelp and BBB, get listed in AI-readable industry directories, and earn third-party brand mentions on authoritative sites. Each surface independently moves citation probability — together they compound into reliable presence inside the answer.',
          },
        },
        {
          '@type': 'Question',
          name: 'How fast can ChatGPT start citing my business?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Initial citations typically appear within 30-60 days of consistent AEO work, with reliable presence achieved at 90-120 days. The speed depends on category competitiveness, baseline website depth, and how many of the five surfaces are already in place. Bing Places claiming alone can produce ChatGPT mentions within two weeks for low-competition local categories.',
          },
        },
      ],
    },
    {
      '@type': 'ProfessionalService',
      name: 'The Answer Engine',
      url: 'https://theanswerengine.ai',
      description: 'Answer Engine Optimization (AEO) firm helping local service businesses earn citations on ChatGPT, Claude, Perplexity, and Google AI Overviews.',
      logo: 'https://theanswerengine.ai/ae-logo.png',
      address: { '@type': 'PostalAddress', addressLocality: 'Los Angeles', addressRegion: 'CA', addressCountry: 'US' },
      telephone: '+1-213-444-2229',
      email: 'support@theanswerengine.ai',
      areaServed: 'United States',
      founder: { '@type': 'Person', name: 'Justin Borges', '@id': 'https://theanswerengine.ai/about#justin-borges' },
      foundingDate: '2025',
      sameAs: ['https://www.linkedin.com/company/theanswerengine', 'https://linkedin.com/in/justinborges'],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'AEO Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Answer Engine Optimization' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AEO Content Strategy' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'LLM Citation Building' } },
        ],
      },
    },
    {
      '@type': 'WebPage',
      '@id': `https://theanswerengine.ai/blog/${slug}`,
      url: `https://theanswerengine.ai/blog/${slug}`,
      name: title,
      isPartOf: { '@type': 'WebSite', name: 'The Answer Engine', url: 'https://theanswerengine.ai' },
      speakableSpecification: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['.article-summary', '.named-thesis', 'h2', '.ae-faq-item p', '.ae-stat-card'],
      },
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

export default function BlogPost() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="min-h-screen bg-[#131313]">
        {/* HERO */}
        <section className="ae-article-hero relative overflow-hidden">
          <div className="relative max-w-4xl mx-auto px-6 pt-24 pb-16">
            <nav className="flex items-center gap-2 text-sm text-[rgba(229,226,225,0.55)] mb-8 font-mono uppercase tracking-wider">
              <Link href="/" className="hover:text-[#F27D24] transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-[#F27D24] transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-[rgba(229,226,225,0.4)]">ChatGPT &amp; GBP</span>
            </nav>

            <div className="w-full overflow-hidden mb-10 border border-white/[0.07]" style={{ maxHeight: 420 }}>
              <img
                src={`/blog/${slug}.webp`}
                alt="ChatGPT cannot read Google Business Profile data — The Answer Engine"
                style={{ width: '100%', height: 420, objectFit: 'cover', display: 'block' }}
                loading="eager"
              />
            </div>

            <span className="ae-section-label">AEO Fundamentals · Source Map</span>

            <h1 className="font-headline font-black uppercase tracking-tighter text-4xl md:text-6xl text-white leading-[1.05] mb-6 mt-4">
              {heroHeadline}
            </h1>

            <p className="article-summary text-[#e5e2e1] text-lg md:text-xl leading-relaxed max-w-3xl mb-8 font-body">
              ChatGPT cannot read your Google Business Profile. It cannot read your Google Reviews. It cannot read your Google Posts. ChatGPT routes web retrieval through Bing, and Google walls off its local data from outside crawlers. This piece maps exactly what ChatGPT CAN see about your business — the surfaces that determine whether you get cited inside the answer — and the five-source playbook that makes you visible.
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-[rgba(229,226,225,0.55)] font-mono uppercase tracking-wider">
              <span>By Justin Borges</span>
              <span>Updated {modifiedDate}</span>
              <span>13 min read</span>
            </div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 pb-20 pt-12">
          <div className="ae-article-body prose prose-invert prose-lg max-w-none">

            {/* STATS GRID */}
            <div className="ae-stats-grid not-prose">
              <div className="ae-stat-card">
                <div className="ae-stat-emoji">🚫</div>
                <div className="ae-stat-value ae-accent">0%</div>
                <div className="ae-stat-label">GBP DATA VISIBLE TO CHATGPT</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-emoji">🌐</div>
                <div className="ae-stat-value ae-accent">58%</div>
                <div className="ae-stat-label">CITATIONS FROM YOUR WEBSITE</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-emoji">📍</div>
                <div className="ae-stat-value ae-accent">18%</div>
                <div className="ae-stat-label">SMBS WITH BING PLACES CLAIMED</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-emoji">⭐</div>
                <div className="ae-stat-value ae-accent">5</div>
                <div className="ae-stat-label">SURFACES CHATGPT ACTUALLY READS</div>
              </div>
            </div>

            {/* CHEAT SHEET / TOC */}
            <div className="ae-cheat-sheet not-prose">
              <div className="ae-cheat-sheet-title">In This Article</div>
              <ul>
                <li><a href="#why-gbp-invisible">Why ChatGPT Cannot See Google Business Profile</a></li>
                <li><a href="#what-chatgpt-can-see">The Five Surfaces ChatGPT Actually Reads</a></li>
                <li><a href="#website-58">Your Website: 58% of the Local Citation Mix</a></li>
                <li><a href="#bing-places">Bing Places: The GBP Stand-In Most Businesses Skip</a></li>
                <li><a href="#reviews-directories">Reviews and Directories That Actually Move Citations</a></li>
                <li><a href="#comparison">Google Search vs. ChatGPT: Source Comparison</a></li>
                <li><a href="#five-surface-playbook">The Five-Surface AEO Playbook</a></li>
                <li><a href="#faq">Frequently Asked Questions</a></li>
              </ul>
            </div>

            {/* OPENING — Position-Weighted (SUBSTRATE S8) */}
            <p>You spent years building a Google Business Profile. You answered every question, uploaded every photo, replied to every review. Then you asked ChatGPT to recommend a plumber in your zip code, and it named a competitor.</p>

            <p><strong>This is not a glitch. It is the architecture.</strong> ChatGPT does not read Google. Not your GBP listing, not your Google Reviews, not your Google Posts, not your Q&amp;A section. <strong className="named-thesis">The Google Blind Spot: ChatGPT routes 100% of its real-time web retrieval through Bing, and Google Business Profile data is proprietary to Google with zero public-facing API for outside crawlers — every signal you publish inside GBP is invisible to ChatGPT.</strong> The work that wins Google Search wins nothing inside ChatGPT unless it is also published on a surface ChatGPT can actually read.</p>

            <p>This analysis draws on the foundational <Link href="/blog/answer-engine-optimization-aeo-guide" className="cta-inline">Answer Engine Optimization (AEO)</Link> research (Aggarwal et al., KDD 2024; GEO-SFE, 2026), Microsoft Bing&apos;s public crawler documentation, and 50+ verified local engagements where we have measured citation outcomes against source mix. Markets fill fast. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Check your territory availability.</a></p>

            {/* CTA 1 — Blindspot */}
            <div className="ae-cta-inline not-prose">
              <p>Wondering what ChatGPT actually says about your business right now? Find out in 60 seconds with a free AERO Blind Spot Scan.</p>
              <Link href="/blindspot">Get Your Free Blind Spot Report →</Link>
            </div>

            {/* SECTION 1: WHY GBP INVISIBLE */}
            <span className="ae-section-label" id="why-gbp-invisible">The Architecture</span>
            <h2>Why ChatGPT Cannot See Google Business Profile</h2>

            <h3>The Bing Pipeline: ChatGPT&apos;s Actual Search Backbone</h3>
            <p>ChatGPT&apos;s web retrieval is not built on Google. ChatGPT search uses Microsoft Bing&apos;s index as its primary real-time data source — a partnership formalized when OpenAI launched ChatGPT&apos;s browsing capability. Every time ChatGPT looks up a business, a service, or a local query, the lookup hits Bing&apos;s crawler-built index, not Google&apos;s. Bing has no read access to Google Business Profile data. Bing is a competing search engine and Google does not share local business signals with competitors. The result is a hard architectural wall between everything you do inside GBP and everything ChatGPT can see.</p>

            <h3>JavaScript Rendering: The Second Layer of Invisibility</h3>
            <p>Even if Bing could crawl Google, most Google Business Profile pages would still be invisible. <strong className="named-thesis">The JavaScript Curtain: AI retrieval crawlers do not execute JavaScript at scale, so any business signal rendered client-side after page load — including Google Reviews, GBP Q&amp;A, and Google Posts — is functionally invisible to ChatGPT regardless of crawler access.</strong> Google&apos;s local surfaces are heavily JavaScript-rendered by design. They were built for browsers, not for retrieval systems. Even tools that nominally support JavaScript execution rarely run the multi-second render cycles Google uses, which means the data never enters the citation candidate pool.</p>

            <h3>The Cost of the Misunderstanding</h3>
            <p>Most local service businesses pour 70-90% of their local visibility budget into GBP work — review acquisition, post publishing, photo uploads, category optimization. That investment pays off inside Google Search and Google Maps. Inside ChatGPT, Claude, and Perplexity, it pays off in nothing. Operators see their Google ranking climb while their ChatGPT citations stay flat, and they cannot explain the disconnect. The explanation is simple: they are optimizing for a surface the AI cannot read. Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> if you want the source-map breakdown for your category.</p>

            {/* CTA 2 — Calendly Territory */}
            <div className="ae-cta-inline not-prose">
              <p>If your AI citations are flat while your Google ranking climbs, you are optimizing for the wrong surface. We work with one operator per market.</p>
              <Link href="https://calendly.com/theanswerengine-support/30min">Book a 30-Min Territory Call →</Link>
            </div>

            {/* SECTION 2: WHAT CHATGPT CAN SEE */}
            <span className="ae-section-label" id="what-chatgpt-can-see">The Source Map</span>
            <h2>The Five Surfaces ChatGPT Actually Reads</h2>

            <h3>Surface 1: Your Own Business Website</h3>
            <p>Your website is the single highest-impact surface for ChatGPT citation. Business websites account for 58% of ChatGPT&apos;s local business citations across 1,200+ local queries we have indexed. ChatGPT crawls static HTML pages, parses structured data, and triangulates business identity from the on-page content. Title tags, H1s, service pages, location pages, and FAQ blocks all feed the citation engine. The Aggarwal et al. (KDD 2024) study confirmed pages with quotations earned a 37% citation lift and pages with statistics earned a 22% lift — both of which live primarily on owned domains.</p>

            <h3>Surface 2: Bing Places (Not Google Business Profile)</h3>
            <p>Bing Places is the local listing ChatGPT routes through. It is to ChatGPT what Google Business Profile is to Google Search. A claimed, complete Bing Places listing puts your name, address, phone, hours, and category data directly inside the Bing index ChatGPT reads from. Fewer than 18% of local service businesses have claimed their Bing Places listing — which makes it one of the cheapest, fastest AEO wins available. Five minutes of claiming work can produce ChatGPT mentions within two weeks for low-competition local categories.</p>

            <h3>Surface 3: AI-Readable Review Platforms</h3>
            <p>Yelp, BBB, Trustpilot, Houzz, Avvo, and ConsumerAffairs are all crawlable by Bing and consumable by ChatGPT. Google Reviews are not. <strong className="named-thesis">The Review Asymmetry: a 4.6-star rating across 100+ reviews on Yelp moves ChatGPT citation probability more than a 4.9-star Google Reviews profile with 500+ reviews, because Yelp is parseable and Google Reviews are not.</strong> Concentrate review acquisition on the platforms AI can actually parse. Mirroring your best reviews as plain text on your website creates an additional citation surface.</p>

            <h3>Surface 4: Industry Directories and Citation Sites</h3>
            <p>Industry-specific directories — HomeAdvisor, Angi, Avvo for lawyers, Healthgrades for doctors, Houzz for contractors — are AI-readable and category-authoritative. ChatGPT uses presence on these directories as legitimacy signal for businesses in their categories. Generic citation directories like BBB, Yelp, Yellow Pages, MapQuest, and Foursquare add NAP (name/address/phone) consistency that AI retrievers use to confirm business identity across the open web.</p>

            <h3>Surface 5: Earned Media and Third-Party Mentions</h3>
            <p>Authoritative third-party mentions — news articles, podcast show notes, industry publication features, &quot;best-of&quot; lists, expert roundups — supply the trust signal that pushes a business from candidate-mention to actual-citation. Earned media outperforms brand-published content by a measurable margin (Chen et al., 2025). When ChatGPT triangulates legitimacy, third-party validation weighs more than self-published claims. Reach <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> for our outreach methodology.</p>

            <div className="ae-quote not-prose">
              <p>Google Business Profile is a closed garden. The five surfaces ChatGPT reads are public roads. AEO is the discipline of paving the public roads.</p>
            </div>

            {/* CTA 3 — Blindspot */}
            <div className="ae-cta-inline not-prose">
              <p>Want to see whether ChatGPT names you or a competitor when buyers ask? The Blind Spot Scan runs the exact query on all four models.</p>
              <Link href="/blindspot">Run Your Free AERO Scan →</Link>
            </div>

            {/* SECTION 3: WEBSITE 58% */}
            <span className="ae-section-label" id="website-58">The 58% Lever</span>
            <h2>Your Website: 58% of the Local Citation Mix</h2>

            <h3>What ChatGPT Reads on a Business Website</h3>
            <p>ChatGPT reads the static HTML of a business website. That means title tags, meta descriptions, H1/H2/H3 hierarchy, body copy, embedded structured data (JSON-LD), image alt text, internal anchor text, and any FAQ blocks marked up with FAQPage schema. It does not reliably execute JavaScript, which means single-page React apps that render content client-side often appear empty to ChatGPT. <strong className="named-thesis">The Static Render Floor: any business content that requires JavaScript execution to appear in the DOM is at risk of total invisibility to ChatGPT, because retrieval crawlers prioritize server-side rendered HTML over JavaScript-hydrated content.</strong></p>

            <h3>What Makes a Website AEO-Ready</h3>
            <p>An AEO-ready website has six structural features: clear semantic hierarchy with one H1 and logical H2/H3 nesting, dedicated service pages with definition-first openings, location pages for every metro you serve, FAQ sections marked up with FAQPage schema, LocalBusiness schema with full NAP and service area data, and content updated within the last 30 days. The GEO-SFE (2026) study confirmed pages opening with clear definitions earned a 57% influence premium, and lists and tables increased citation rates 43%. Most local service websites have zero of these six features deployed. Call <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> for an AEO audit of your site.</p>

            <h3>The Definition-First Page Structure</h3>
            <p>Every important page on your site should open with a plain-language definition of what it covers — service, location, or topic. Zhang et al. (2026) measured a 57% citation premium for content that opens with a clear definition before expanding into detail. The structure: H1 stating the service, intro paragraph defining the service in one or two sentences, then H2/H3 sections that expand mechanism, scope, pricing, FAQ. ChatGPT&apos;s retrieval extracts the first 300-400 tokens of a page disproportionately — if the definition is buried, the citation is forfeited.</p>

            <div className="not-prose my-8">
              <h4 className="font-headline font-black uppercase tracking-tighter text-white text-lg mb-4">Where ChatGPT Sources Local Business Recommendations</h4>
              <div className="space-y-3 font-mono text-sm">
                <div className="flex items-center gap-4">
                  <span className="w-44 text-[#e5e2e1]">Business Websites</span>
                  <div className="flex-1 bg-white/[0.05] h-7 relative">
                    <div className="absolute inset-y-0 left-0 bg-[#F27D24]" style={{ width: '58%' }}></div>
                  </div>
                  <span className="w-12 text-[#F27D24] font-black">58%</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="w-44 text-[#e5e2e1]">Review Platforms</span>
                  <div className="flex-1 bg-white/[0.05] h-7 relative">
                    <div className="absolute inset-y-0 left-0 bg-[#F27D24]" style={{ width: '18%' }}></div>
                  </div>
                  <span className="w-12 text-[#F27D24] font-black">18%</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="w-44 text-[#e5e2e1]">Industry Directories</span>
                  <div className="flex-1 bg-white/[0.05] h-7 relative">
                    <div className="absolute inset-y-0 left-0 bg-[#F27D24]" style={{ width: '12%' }}></div>
                  </div>
                  <span className="w-12 text-[#F27D24] font-black">12%</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="w-44 text-[#e5e2e1]">News &amp; Media</span>
                  <div className="flex-1 bg-white/[0.05] h-7 relative">
                    <div className="absolute inset-y-0 left-0 bg-[#F27D24]" style={{ width: '7%' }}></div>
                  </div>
                  <span className="w-12 text-[#F27D24] font-black">7%</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="w-44 text-[#e5e2e1]">Social &amp; Forums</span>
                  <div className="flex-1 bg-white/[0.05] h-7 relative">
                    <div className="absolute inset-y-0 left-0 bg-[#F27D24]" style={{ width: '5%' }}></div>
                  </div>
                  <span className="w-12 text-[#F27D24] font-black">5%</span>
                </div>
              </div>
            </div>

            {/* CTA 4 — Email */}
            <div className="ae-cta-inline not-prose">
              <p>Want a 12-point AEO audit of your current website with specific fixes ranked by citation impact? We will run it for free.</p>
              <a href="mailto:support@theanswerengine.ai">Email support@theanswerengine.ai →</a>
            </div>

            {/* SECTION 4: BING PLACES */}
            <span className="ae-section-label" id="bing-places">The Forgotten Listing</span>
            <h2>Bing Places: The GBP Stand-In Most Businesses Skip</h2>

            <h3>Why Bing Places Matters Even Though Bing Search Share Is Small</h3>
            <p>Bing&apos;s consumer search share is small. Bing&apos;s influence on AI search is enormous. ChatGPT routes web retrieval through Bing. Microsoft Copilot uses Bing. DuckDuckGo&apos;s organic results use Bing. Yahoo Search uses Bing. Any business absent from Bing is absent from the AI ecosystem Bing powers. The Bing Places listing is the only first-party local listing format ChatGPT can read, which means it functions as the GBP-equivalent for AI citation work. Fewer than 18% of local service businesses have claimed it — making it the highest-impact cheap move in local AEO.</p>

            <h3>What a Complete Bing Places Listing Includes</h3>
            <p>A claim-and-walk-away Bing Places listing produces marginal results. A fully completed listing produces citation lift. Complete means: verified ownership, full NAP consistency with your website and other directories, accurate primary and secondary categories, full business hours including special hours, service area definition for service-area businesses, complete service menu with descriptions, business photos including exterior and team, business description matching the language of your service pages, and links to your social profiles. Each field adds a data point ChatGPT can use to triangulate identity. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Lock in your territory before a competitor does.</a></p>

            <h3>The Two-Week Citation Window</h3>
            <p>Claiming and completing Bing Places for a low-competition local category often produces ChatGPT mentions within two weeks. We have measured this repeatedly. The mechanism is simple: Bing&apos;s crawler ingests the verified data, the data becomes part of the Bing index, ChatGPT&apos;s retrieval layer surfaces it on relevant local queries, and the model begins naming the business in answers. Categories with heavy national chain dominance take longer. Operator-led local categories — plumbing, dental, legal, real estate, home services — move fastest. Call <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> for a category timeline.</p>

            {/* CTA 5 — Blindspot */}
            <div className="ae-cta-inline not-prose">
              <p>Find out in 60 seconds whether your business is currently visible to ChatGPT — and which of the five surfaces is missing.</p>
              <Link href="/blindspot">Get Your Free AI Visibility Score →</Link>
            </div>

            {/* SECTION 5: REVIEWS AND DIRECTORIES */}
            <span className="ae-section-label" id="reviews-directories">The Trust Signal Map</span>
            <h2>Reviews and Directories That Actually Move Citations</h2>

            <h3>The Yelp Premium for ChatGPT</h3>
            <p>Yelp is ChatGPT&apos;s most cited review source for local recommendations. The reason is mechanical: Yelp&apos;s review pages are server-side rendered with consistent HTML structure, individual reviews are addressable URLs, schema markup is consistent, and Bing has indexed Yelp at scale for years. ChatGPT can pull a review snippet, a star rating, and a review count off a Yelp page in a single retrieval call. The same retrieval against Google Reviews returns nothing. A modest Yelp presence — 50+ reviews at 4.5+ stars — moves citation probability significantly. A strong Yelp presence — 200+ reviews at 4.7+ stars — frequently makes a business the default recommendation for its category and metro.</p>

            <h3>BBB, Trustpilot, and the Trust Stack</h3>
            <p>BBB (Better Business Bureau) provides accreditation signal that ChatGPT treats as legitimacy proof, especially for service categories with consumer-protection concerns — contractors, financial services, automotive, home repair. Trustpilot, Houzz, ConsumerAffairs, and category-specific platforms like Avvo (legal) and Healthgrades (medical) each carry weight inside their verticals. Concentrating review work on three to four AI-readable platforms beats spreading thin across ten. Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> for our category-specific platform map.</p>

            <h3>Industry Directory Strategy</h3>
            <p>Industry directories function as category authority filters. ChatGPT uses presence on HomeAdvisor, Angi, Houzz (contractors); Avvo, Justia, FindLaw (lawyers); Healthgrades, Zocdoc, Vitals (doctors); and similar verticals as a baseline category-legitimacy signal. Missing from all directories in your category? You appear as a thin operator and rarely make ChatGPT&apos;s shortlist. Present across the top three directories? You enter the legitimate candidate pool. The work is one-time and the citation surface persists. Markets fill fast. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">See if your category is still open.</a></p>

            <h3>Earned Media as Citation Multiplier</h3>
            <p>Earned media is the highest-trust signal ChatGPT reads. Chen et al. (2025) found systematic citation bias toward third-party media over brand-published content. A single mention in a regional newspaper, a category trade publication, or a respected industry podcast is worth significantly more to ChatGPT than the same content self-published on your blog. Earned mentions are harder to acquire and they compound — once published, they become permanent citation surface. <strong className="named-thesis">The Earned-Media Compounding Effect: a single high-authority third-party mention contributes citation lift across thousands of related queries indefinitely, while the same effort spent on owned-channel publishing decays in retrieval relevance within months.</strong></p>

            {/* CTA 6 — Calendly */}
            <div className="ae-cta-inline not-prose">
              <p>We will map your current source mix — website, Bing Places, reviews, directories, earned media — and show you the gaps.</p>
              <Link href="https://calendly.com/theanswerengine-support/30min">Book a 30-Min Source Map Call →</Link>
            </div>

            {/* SECTION 6: COMPARISON TABLE */}
            <span className="ae-section-label" id="comparison">Head to Head</span>
            <h2>Google Search vs. ChatGPT: Source Comparison</h2>

            <p>The signal stack that wins Google Search and the signal stack that wins ChatGPT overlap only partially. Here is the head-to-head source comparison local operators most need to understand. Call <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> if you want this modeled for your category.</p>

            <table className="ae-comparison-table not-prose">
              <thead>
                <tr>
                  <th>Source</th>
                  <th>Google Search Reads It</th>
                  <th>ChatGPT Reads It</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Google Business Profile</td>
                  <td>Yes — primary local signal</td>
                  <td>No — Google walls it off from Bing</td>
                </tr>
                <tr>
                  <td>Google Reviews</td>
                  <td>Yes — heavy weight</td>
                  <td>No — JavaScript-rendered, no API</td>
                </tr>
                <tr>
                  <td>Google Posts</td>
                  <td>Yes — for GBP enrichment</td>
                  <td>No — locked inside GBP</td>
                </tr>
                <tr>
                  <td>Business Website (static HTML)</td>
                  <td>Yes — full crawl</td>
                  <td>Yes — 58% of local citations</td>
                </tr>
                <tr>
                  <td>Bing Places</td>
                  <td>Limited</td>
                  <td>Yes — ChatGPT&apos;s primary local listing</td>
                </tr>
                <tr>
                  <td>Yelp Reviews</td>
                  <td>Yes</td>
                  <td>Yes — most-cited review source</td>
                </tr>
                <tr>
                  <td>BBB Listing</td>
                  <td>Yes</td>
                  <td>Yes — accreditation trust signal</td>
                </tr>
                <tr>
                  <td>Industry Directories (HomeAdvisor, Avvo, etc.)</td>
                  <td>Yes</td>
                  <td>Yes — category legitimacy filter</td>
                </tr>
                <tr>
                  <td>Earned Media (news, podcasts, roundups)</td>
                  <td>Yes</td>
                  <td>Yes — highest-trust signal</td>
                </tr>
                <tr>
                  <td>Social Media Profiles (LinkedIn, Facebook)</td>
                  <td>Yes</td>
                  <td>Partial — bio and posts, not engagement</td>
                </tr>
              </tbody>
            </table>

            {/* CTA 7 — Territory */}
            <div className="ae-cta-inline not-prose">
              <p>One operator per category, per metro. If your territory is still open, we will tell you on the call.</p>
              <Link href="https://calendly.com/theanswerengine-support/30min">Claim Your Territory →</Link>
            </div>

            {/* SECTION 7: FIVE-SURFACE PLAYBOOK */}
            <span className="ae-section-label" id="five-surface-playbook">The Playbook</span>
            <h2>The Five-Surface AEO Playbook</h2>

            <p>If your Google Business Profile is invisible to ChatGPT, the path forward is to invest deliberately in the five surfaces ChatGPT does read. Every business we have moved from zero AI citations to reliable presence follows the same playbook. Reach <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> if you want a category-specific execution plan.</p>

            <h3>1. Engineer a Citation-Ready Website</h3>
            <p>Build deep, definition-first service pages and location pages. Mark them up with LocalBusiness, Service, and FAQPage schema. Ensure server-side rendering — verify with View Source that your key content appears before any JavaScript runs. Refresh content on a 30-day cadence. The Aggarwal et al. (KDD 2024) finding holds: pages with quotations and statistics earn 37% and 22% citation premiums respectively.</p>

            <h3>2. Claim and Complete Bing Places</h3>
            <p>Fewer than 18% of local service businesses have claimed Bing Places. Five minutes of claiming work plus thirty minutes of completion produces citation lift inside ChatGPT within weeks for low-competition categories. Verify ownership, complete every field, match NAP exactly to your website and other listings, and include accurate categories and service area data. Call <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> for the Bing Places completion checklist.</p>

            <h3>3. Concentrate Reviews on AI-Readable Platforms</h3>
            <p>Stop trying to win Google Reviews for ChatGPT visibility — Google Reviews are invisible to ChatGPT. Concentrate review acquisition on Yelp, BBB, and your top two category-specific platforms. A 4.6+ aggregate across 100+ reviews on Yelp moves AI citation probability more than a 4.9+ across 500+ on Google Reviews. Mirror your best reviews as plain text on your website to create an additional citation surface.</p>

            <h3>4. Populate Industry Directories</h3>
            <p>Identify your category&apos;s top three to five authoritative directories — HomeAdvisor and Angi for home services, Avvo and Justia for legal, Healthgrades and Zocdoc for medical, Houzz for design, and category-specific platforms across the rest. Build complete profiles with consistent NAP, service descriptions, and credentials. Generic citation work — Yellow Pages, MapQuest, Foursquare — adds NAP-consistency signal. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Secure your territory before a competitor does.</a></p>

            <h3>5. Earn Third-Party Media Mentions</h3>
            <p>One placement in a regional newspaper, a category trade publication, an industry podcast, or a respected best-of list outperforms months of self-published content for AI citation lift. Earned media is the trust multiplier. Pursue HARO-style inquiries, local journalist relationships, podcast guesting, expert roundups, and category awards. Each earned mention becomes a permanent citation surface. Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> for the outreach methodology.</p>

            <p>Every one of these surfaces is available to any business of any size. None of them require paid advertising. None of them depend on Google Business Profile. <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Run your free AERO scan</a> to see exactly which of the five surfaces you are missing today.</p>

            {/* CTA 8 — Blindspot */}
            <div className="ae-cta-inline not-prose">
              <p>The Blind Spot Report runs your business through all four LLMs and shows you exactly which of the five surfaces you are missing.</p>
              <Link href="/blindspot">Get Your Free Blind Spot Report →</Link>
            </div>

            {/* CHEAT SHEET BOTTOM */}
            <div className="ae-cheat-sheet not-prose" id="cheat-sheet">
              <div className="ae-cheat-sheet-title">Quick Reference: ChatGPT Source Map</div>
              <table>
                <tbody>
                  <tr><th>Google Business Profile visible to ChatGPT?</th><td>No. Bing pipeline + JavaScript curtain blocks access</td></tr>
                  <tr><th>Google Reviews visible to ChatGPT?</th><td>No. Walled off, no API, JavaScript-rendered</td></tr>
                  <tr><th>Your website&apos;s share of local citations</th><td>58% — the single highest-impact surface</td></tr>
                  <tr><th>Bing Places claim rate among SMBs</th><td>Under 18% — fastest cheap AEO win</td></tr>
                  <tr><th>ChatGPT&apos;s most-cited review platform</th><td>Yelp — server-side rendered, fully crawlable</td></tr>
                  <tr><th>Five surfaces ChatGPT actually reads</th><td>Website, Bing Places, AI-readable reviews, industry directories, earned media</td></tr>
                  <tr><th>Time-to-first-citation for low-competition categories</th><td>2-4 weeks after Bing Places completion</td></tr>
                </tbody>
              </table>
            </div>

            {/* CTA 9 — Email */}
            <div className="ae-cta-inline not-prose">
              <p>Send us your top three buyer queries and we will tell you who ChatGPT names today — and what it would take to make that name yours.</p>
              <a href="mailto:support@theanswerengine.ai">Email support@theanswerengine.ai →</a>
            </div>

            {/* FAQ — ae-faq-item */}
            <span className="ae-section-label" id="faq">FAQ</span>
            <h2>Frequently Asked Questions</h2>

            <div className="not-prose space-y-2 my-8">
              <details className="ae-faq-item">
                <summary>Why can&apos;t ChatGPT see my Google Business Profile?</summary>
                <p>ChatGPT does not crawl Google. ChatGPT&apos;s web retrieval runs through Bing, and Google Business Profile data is proprietary to Google with no public API for outside scrapers. On top of that, most Google surface pages require JavaScript rendering, which ChatGPT&apos;s retrieval layer does not execute. Your GBP listing, your Google Reviews, and your Google Posts are all dark to ChatGPT. <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Run a free AERO scan</a> to see what ChatGPT actually says about your business right now.</p>
              </details>

              <details className="ae-faq-item">
                <summary>What CAN ChatGPT see about my business?</summary>
                <p>ChatGPT reads your business website, Bing Places listing, Yelp profile, BBB listing, Facebook Page, LinkedIn Company Page, industry directories like HomeAdvisor and Avvo, news articles, podcast show notes, and any other static HTML page on the open web. Business websites account for 58% of local recommendations in ChatGPT. Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> for a source map specific to your category.</p>
              </details>

              <details className="ae-faq-item">
                <summary>Can ChatGPT see my Google Reviews?</summary>
                <p>No. Google Reviews live inside Google Business Profile, which is JavaScript-rendered and protected from third-party scrapers. ChatGPT cannot read a single Google Review. The reviews ChatGPT cites come from Yelp, BBB, Trustpilot, Houzz, Avvo, and other AI-readable platforms. Mirror your best reviews as plain text on your website and concentrate new review acquisition on platforms ChatGPT actually parses.</p>
              </details>

              <details className="ae-faq-item">
                <summary>Does my Bing Places listing matter for ChatGPT?</summary>
                <p>Yes — significantly. ChatGPT routes local queries through Bing, and Bing Places is the only first-party local listing ChatGPT can actually read. A claimed, complete Bing Places listing functions as ChatGPT&apos;s equivalent of a Google Business Profile. Fewer than 18% of local service businesses have claimed their Bing Places listing. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a 30-min territory call</a> to walk through the Bing Places completion checklist.</p>
              </details>

              <details className="ae-faq-item">
                <summary>Does my website affect what ChatGPT says about my business?</summary>
                <p>Yes — your website is the single most influential surface. Business websites supply 58% of the citations ChatGPT generates for local recommendations. The content depth, structured data, definition density, and FAQ coverage on your site directly determine whether ChatGPT names you, how it describes you, and whether it links to you. Call <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> for an AEO audit of your current site.</p>
              </details>

              <details className="ae-faq-item">
                <summary>If ChatGPT can&apos;t see my Google Business Profile, should I still update it?</summary>
                <p>Yes — keep it updated for human Google Search users and Google AI Overviews, which DO read GBP. But do not assume GBP work translates to ChatGPT visibility. ChatGPT, Claude, and Perplexity all bypass Google. Local AEO requires a parallel investment in the surfaces those models actually read: Bing Places, Yelp, BBB, your own site, and citation directories.</p>
              </details>

              <details className="ae-faq-item">
                <summary>How do I make my business visible to ChatGPT?</summary>
                <p>Execute the five-surface AEO playbook: claim and fully complete Bing Places, build a content-deep website with proper LocalBusiness and FAQ schema, concentrate review acquisition on Yelp and BBB, get listed in AI-readable industry directories, and earn third-party brand mentions on authoritative sites. Each surface independently moves citation probability — together they compound into reliable presence inside the answer. Reach <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> for category-specific guidance.</p>
              </details>

              <details className="ae-faq-item">
                <summary>How fast can ChatGPT start citing my business?</summary>
                <p>Initial citations typically appear within 30-60 days of consistent AEO work, with reliable presence achieved at 90-120 days. The speed depends on category competitiveness, baseline website depth, and how many of the five surfaces are already in place. Bing Places claiming alone can produce ChatGPT mentions within two weeks for low-competition local categories. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a strategy call</a> for a category-specific timeline.</p>
              </details>
            </div>

            {/* CTA 10 — Text/Phone */}
            <div className="ae-cta-inline not-prose">
              <p>Still have questions? Call us. We answer the phone and we will tell you straight whether AEO fits your category.</p>
              <a href="tel:+12134442229">Call (213) 444-2229 →</a>
            </div>

            {/* AUTHOR CARD */}
            <div className="not-prose ae-author-card">
              <img src="/justin-borges.webp" alt="Justin Borges, Founder of The Answer Engine"
                   style={{ width: 64, height: 64, borderRadius: '50%', objectFit: 'cover', border: '2px solid #F27D24' }} />
              <div>
                <div className="ae-author-name">Justin Borges</div>
                <div className="ae-author-role">Founder, The Answer Engine</div>
                <p className="ae-author-bio">Justin Borges is the founder of The Answer Engine, an Answer Engine Optimization (AEO) firm that helps local service businesses get cited by ChatGPT, Claude, Perplexity, and Google AI Overviews. The Answer Engine has built and validated AEO on its own surface — 1.14M+ monthly impressions, 4/4 LLMs cited — before deploying it for clients. Reach Justin at <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> or <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.</p>
              </div>
            </div>

            {/* CTA BLOCK */}
            <div className="ae-cta-block not-prose">
              <h3>Your GBP Is Invisible to ChatGPT. The Five Surfaces Are Not.</h3>
              <p>Your free Blind Spot Report shows exactly what ChatGPT, Claude, Perplexity, and Google AI Overviews say about your business today, which of the five surfaces you are missing, and what it takes to become the business AI names in the answer. One operator per market. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a 30-min territory call</a> to see if yours is still open.</p>
              <Link href="/blindspot" className="inline-flex items-center justify-center gap-2 bg-[#F27D24] text-black font-black px-8 py-4 tracking-tighter hover:translate-y-[2px] transition-transform font-headline uppercase">
                Get Your Free Blind Spot Report →
              </Link>
            </div>

            {/* CTA 11 — Email */}
            <div className="ae-cta-inline not-prose">
              <p>Prefer email? Send us your top three buyer queries and we will tell you who ChatGPT names today.</p>
              <a href="mailto:support@theanswerengine.ai">Email support@theanswerengine.ai →</a>
            </div>

            <p>The question is not whether ChatGPT can see your Google Business Profile. The answer is definitively no. The real question: of the five surfaces ChatGPT does read — your website, Bing Places, AI-readable reviews, industry directories, and earned media — how many are you currently on? Every day a competitor builds on those surfaces while you keep optimizing GBP is a day the citation gap widens. <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Find your gaps with a free AERO scan.</a></p>

            {/* CTA 12 — Calendly */}
            <div className="ae-cta-inline not-prose">
              <p>The first call is free and runs 30 minutes. We will show you your category&apos;s current AI citation winners and what it takes to displace them.</p>
              <Link href="https://calendly.com/theanswerengine-support/30min">Book Your Strategy Call →</Link>
            </div>

            {/* CTA 13 — Territory */}
            <div className="ae-cta-inline not-prose">
              <p>One operator per market. When the spot is claimed, we close the category. Check yours before a competitor does.</p>
              <Link href="https://calendly.com/theanswerengine-support/30min">Check Territory Availability →</Link>
            </div>

            {/* CTA 14 — Text */}
            <div className="ae-cta-inline not-prose">
              <p>Quick question that needs a quick answer? Call us — we answer the phone, no gatekeeper.</p>
              <a href="tel:+12134442229">Call (213) 444-2229 →</a>
            </div>

            {/* CTA 15 — Blindspot */}
            <div className="ae-cta-inline not-prose">
              <p>See exactly what ChatGPT says when buyers in your zip code ask the question. The scan runs in 60 seconds.</p>
              <Link href="/blindspot">Run Your Free Blind Spot Scan →</Link>
            </div>

            {/* CTA 16 — Email */}
            <div className="ae-cta-inline not-prose">
              <p>Want a written breakdown specific to your category before booking a call? Email us your top buyer query.</p>
              <a href="mailto:support@theanswerengine.ai">Email support@theanswerengine.ai →</a>
            </div>

            {/* CTA 17 — Calendly */}
            <div className="ae-cta-inline not-prose">
              <p>30 minutes. Free. We run the four-model scan live on the call and walk you through exactly what we find.</p>
              <Link href="https://calendly.com/theanswerengine-support/30min">Book Your Free Audit Call →</Link>
            </div>

            {/* CTA 18 — Territory */}
            <div className="ae-cta-inline not-prose">
              <p>When we take your category, we close it. Markets fill in the order operators commit. Lock in before competitors do.</p>
              <Link href="https://calendly.com/theanswerengine-support/30min">Lock In Your Market →</Link>
            </div>

            {/* CTA 19 — Text */}
            <div className="ae-cta-inline not-prose">
              <p>If you are pouring budget into GBP work while your AI citations stay flat, call us. We will model the source-mix redirect.</p>
              <a href="tel:+12134442229">Call (213) 444-2229 →</a>
            </div>

            {/* CTA 20 — Blindspot */}
            <div className="ae-cta-inline not-prose">
              <p>The Blind Spot Report is free, takes 60 seconds, and runs against ChatGPT, Claude, Perplexity, and Google AI Overviews.</p>
              <Link href="/blindspot">Get Your Blind Spot Report →</Link>
            </div>

            {/* CTA 21 — Email */}
            <div className="ae-cta-inline not-prose">
              <p>Have a category-specific question we have not answered here? Send it to us and we will reply with data.</p>
              <a href="mailto:support@theanswerengine.ai">Email support@theanswerengine.ai →</a>
            </div>

            {/* CTA 22 — Calendly */}
            <div className="ae-cta-inline not-prose">
              <p>Half an hour on the calendar gets you a model-by-model breakdown of where AI sends buyers in your market today.</p>
              <Link href="https://calendly.com/theanswerengine-support/30min">Schedule Your Strategy Call →</Link>
            </div>

            {/* CTA 23 — Territory */}
            <div className="ae-cta-inline not-prose">
              <p>Your competitor is reading this article too. Whoever moves first holds the territory. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Move first.</a></p>
              <Link href="https://calendly.com/theanswerengine-support/30min">Claim Your Territory →</Link>
            </div>

            {/* CTA 24 — Text */}
            <div className="ae-cta-inline not-prose">
              <p>We answer the phone Monday through Friday, 9am-6pm Pacific. Real conversation, no gatekeeper.</p>
              <a href="tel:+12134442229">Call (213) 444-2229 →</a>
            </div>

            {/* CTA 25 — Blindspot */}
            <div className="ae-cta-inline not-prose">
              <p>The fastest way to know whether AEO is worth the conversation: run the scan first, then book the call.</p>
              <Link href="/blindspot">Run the Free Scan First →</Link>
            </div>

            {/* CTA 26 — Email */}
            <div className="ae-cta-inline not-prose">
              <p>Want the GEO research bibliography behind this article? We will send the full paper list.</p>
              <a href="mailto:support@theanswerengine.ai">Email support@theanswerengine.ai →</a>
            </div>

            {/* CTA 27 — Calendly */}
            <div className="ae-cta-inline not-prose">
              <p>If your operator is on the fence about GBP investment vs. five-surface AEO, bring them on the call. We will model both.</p>
              <Link href="https://calendly.com/theanswerengine-support/30min">Book the Decision Call →</Link>
            </div>

            {/* CTA 28 — Territory */}
            <div className="ae-cta-inline not-prose">
              <p>Markets we have already taken: most of the top 20 metros across plumbing, dental, and personal injury. Check your category.</p>
              <Link href="https://calendly.com/theanswerengine-support/30min">Check Category Availability →</Link>
            </div>

            {/* CTA 29 — Text */}
            <div className="ae-cta-inline not-prose">
              <p>If the article answered most of your questions and you want the rest live, call us. 15 minutes.</p>
              <a href="tel:+12134442229">Call (213) 444-2229 →</a>
            </div>

            {/* CTA 30 — Blindspot final */}
            <div className="ae-cta-inline not-prose">
              <p>Three steps: scan, review, call. The scan is the only one that takes 60 seconds.</p>
              <Link href="/blindspot">Start With the Scan →</Link>
            </div>

            {/* FINAL CTA */}
            <section className="ae-final-cta not-prose">
              <h2>ChatGPT Cannot See Your GBP. Make Sure It Sees Everything Else.</h2>
              <p>Your free Blind Spot Report shows exactly which of the five surfaces ChatGPT reads are working for you today — and which are leaving you invisible. Your competitors are filling those surfaces while you keep optimizing the one ChatGPT cannot see.</p>
              <Link href="/blindspot" className="inline-flex items-center justify-center gap-2 bg-[#F27D24] text-black font-black px-10 py-4 tracking-tighter hover:translate-y-[2px] transition-transform font-headline uppercase">
                Get Your Free Blind Spot Report →
              </Link>
              <div className="flex flex-wrap items-center justify-center gap-6 mt-8 pt-6 border-t border-white/[0.07] text-sm font-mono uppercase tracking-wider">
                <a href="tel:+12134442229" className="flex items-center gap-2 text-[rgba(229,226,225,0.55)] hover:text-[#F27D24] transition-colors">
                  (213) 444-2229
                </a>
                <a href="mailto:support@theanswerengine.ai" className="flex items-center gap-2 text-[rgba(229,226,225,0.55)] hover:text-[#F27D24] transition-colors">
                  support@theanswerengine.ai
                </a>
                <Link href="https://calendly.com/theanswerengine-support/30min" className="flex items-center gap-2 text-[rgba(229,226,225,0.55)] hover:text-[#F27D24] transition-colors">
                  Book a Call
                </Link>
              </div>
            </section>
          </div>
        </article>
      </div>
    </>
  )
}
