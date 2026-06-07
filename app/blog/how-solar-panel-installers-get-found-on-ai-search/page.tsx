import type { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

const title = 'How Solar Panel Installers Get Found on AI Search (ChatGPT, Gemini, Claude)';
const description =
  'How residential solar installers get cited by ChatGPT, Gemini, Claude, and Perplexity. NABCEP, NEM 3.0, and AEO. Free Blindspot scan.';
const slug = 'how-solar-panel-installers-get-found-on-ai-search';
const url = `https://theanswerengine.ai/blog/${slug}`;
const publishDate = '2026-06-07';
const heroImage = `https://theanswerengine.ai/blog/${slug}.webp`;

export const metadata: Metadata = {
  title: 'Solar Installer AEO: ChatGPT Citation | The Answer Engine',
  description,
  keywords:
    'solar installer AEO, how solar companies get found on ChatGPT, NABCEP AI citation, solar installer Gemini, solar Perplexity, NEM 3.0 content strategy, solar schema markup, AEO for solar installers, solar battery storage AI search',
  openGraph: {
    title,
    description,
    type: 'article',
    publishedTime: publishDate,
    authors: ['Justin Borges'],
    url,
    images: [{ url: heroImage, width: 1200, height: 630, alt: title }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [heroImage],
  },
  alternates: { canonical: url },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: title,
  description,
  author: {
    '@type': 'Person',
    '@id': 'https://theanswerengine.ai/about#justin-borges',
    name: 'Justin Borges',
    jobTitle: 'Founder, The Answer Engine',
    url: 'https://theanswerengine.ai/about',
    image: 'https://theanswerengine.ai/justin-borges.webp',
    knowsAbout: [
      'Answer Engine Optimization',
      'AI Search',
      'Citation Surface',
      'Solar AEO',
      'Local Business AI Visibility',
    ],
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
  datePublished: publishDate,
  dateModified: publishDate,
  mainEntityOfPage: { '@type': 'WebPage', '@id': url },
  image: { '@type': 'ImageObject', url: heroImage, width: 1200, height: 630 },
  about: [
    { '@type': 'Thing', name: 'Answer Engine Optimization' },
    { '@type': 'Thing', name: 'Solar Panel Installation' },
    { '@type': 'Thing', name: 'NABCEP Certification' },
    { '@type': 'Thing', name: 'NEM 3.0' },
    { '@type': 'Thing', name: 'AI Citation Strategy' },
  ],
  mentions: [
    { '@type': 'SoftwareApplication', name: 'ChatGPT', url: 'https://chat.openai.com' },
    { '@type': 'SoftwareApplication', name: 'Gemini', url: 'https://gemini.google.com' },
    { '@type': 'SoftwareApplication', name: 'Claude', url: 'https://claude.ai' },
    { '@type': 'SoftwareApplication', name: 'Perplexity', url: 'https://perplexity.ai' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Why does ChatGPT recommend other solar installers in my area but not my company?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ChatGPT builds its model of local solar installers from the sources it trained on: review platforms, business directories, utility program databases, solar industry associations, NABCEP registries, and installer websites. If competitors appear more frequently and more authoritatively across those sources, and if their content specifically addresses financing, certifications, and local utility rules, they surface in AI recommendations while a less-structured business stays invisible. NABCEP credentials in schema, NAP consistency across directories, and structured financing content all drive citation probability.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does NABCEP certification help a solar installer get recommended by AI search?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NABCEP (North American Board of Certified Energy Practitioners) certification is one of the clearest trust signals AI platforms use when evaluating solar installer credibility. Installers who express NABCEP credentials in schema hasCredential fields, Google Business Profile descriptions, and visible service page copy create a machine-readable verification signal that uncertified competitors cannot match. AI platforms treat NABCEP the way they treat state contractor licenses for electricians or plumbers in high-investment service categories.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do solar financing questions affect which installers AI recommends?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Financing queries are among the most common solar research questions on AI platforms. Homeowners ask about loans versus leases versus PPAs versus cash purchase, and AI recommends installers who have structured content answering those specific questions. A solar company with a dedicated financing page that compares monthly payment scenarios, addresses ITC eligibility, and explains PACE risks becomes citable for that entire query class. Installers who only handle financing in sales calls are invisible to AI entirely.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why do state-specific rebates and NEM 3.0 matter for solar AI visibility?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI platforms route solar queries geographically, and state-specific program knowledge is a key differentiator. In California, the 2023 NEM 3.0 changes to net metering significantly altered solar economics for SCE, PG&E, and SDGE customers - export rates dropped by roughly 75 percent compared to NEM 2.0. Solar installers who publish accurate, up-to-date NEM 3.0 content become the authoritative source AI cites for those geo-specific queries. Generic national content is nearly invisible for state-level searches.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does adding battery storage help solar installers appear in AI search results?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Battery storage is one of the fastest-growing query categories in residential solar. Installers with dedicated battery storage pages see meaningfully higher AI citation rates for storage-related searches. Questions about Powerwall, Enphase IQ, backup duration during outages, and storage sizing under time-of-use rates are asked on AI platforms at increasing rates. A solar company that addresses battery chemistry, backup load profiles, and NEM 3.0 storage economics in structured content becomes citable for a separate and growing query class beyond panel installation.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take a solar installer to start appearing in AI recommendations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Solar installers who improve structured data, Google Business Profile, and service-page content typically see initial results from Perplexity and Google AI Overviews within 30 to 60 days. ChatGPT base-model citations depend on retraining cycles that can span 12 to 18 months, though ChatGPT with web browsing responds much faster to structural improvements. Real-time AI tools like Perplexity reward consistent, structured, locally specific content within weeks of publication.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why do HomeAdvisor and Angi leads not translate into AI citation visibility?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'HomeAdvisor and Angi generate leads by directing traffic to their own platforms, not to a solar installer website or Google Business Profile. AI systems build citation understanding from an independent web presence: schema, GBP, reviews on Google and Yelp, and authoritative third-party mentions of the business by name. Paying for HomeAdvisor leads does not improve any of those signals. It generates calls while the spend continues, but leaves AI visibility unchanged.',
      },
    },
    {
      '@type': 'Question',
      name: 'What schema markup should solar panel installers use for AI visibility?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The highest-impact schema for solar installers is LocalBusiness with the SolarEnergyContractor sub-type, Service schema for each offering (residential, battery storage, commercial), FAQPage schema on financing and product pages, BreadcrumbList for site structure, and AggregateRating for review signals. NABCEP certification belongs in schema hasCredential fields. Utility interconnection service areas should be named explicitly in the areaServed field, generic city lists underperform named utility territories.',
      },
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://theanswerengine.ai' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://theanswerengine.ai/blog' },
    { '@type': 'ListItem', position: 3, name: title, item: url },
  ],
};

const professionalServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'The Answer Engine',
  url: 'https://theanswerengine.ai',
  telephone: '+1-213-444-2229',
  email: 'support@theanswerengine.ai',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Los Angeles',
    addressRegion: 'CA',
    addressCountry: 'US',
  },
  founder: { '@type': 'Person', name: 'Justin Borges' },
  areaServed: { '@type': 'Country', name: 'United States' },
  serviceType: ['Answer Engine Optimization', 'AEO Content', 'LLM Citation Building'],
  knowsAbout: [
    'Solar AEO',
    'NABCEP Certification Schema',
    'NEM 3.0 Content Strategy',
    'Battery Storage AI Visibility',
    'Local Business Citation Surface',
  ],
};

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': url,
  url,
  name: title,
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['.article-summary', '.key-insight', 'h2', '.faq-answer', '.stat-block'],
  },
};

export default function SolarInstallerAEOPage() {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="professional-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }} />
      <Script id="webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />

      <div className="min-h-screen bg-[#131313] text-[#e5e2e1]">
        <article className="max-w-4xl mx-auto px-6 pt-24 pb-16">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm text-white/40 font-mono">
            <Link href="/" className="hover:text-[#F27D24] transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-[#F27D24] transition-colors">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white/60">Solar Installer AEO</span>
          </nav>

          {/* Hero Image */}
          <header className="ae-article-hero mb-12 rounded-xl overflow-hidden" style={{ maxHeight: 460 }}>
            <img
              src={`/blog/${slug}.webp`}
              alt="Solar panel installer AEO - how solar companies get cited by ChatGPT, Gemini, and Claude"
              style={{ width: '100%', height: 460, objectFit: 'cover', display: 'block' }}
              loading="eager"
            />
          </header>

          <div className="mb-6 inline-block">
            <span className="font-headline text-xs font-black tracking-tighter uppercase bg-[#F27D24]/10 text-[#F27D24] border border-[#F27D24]/30 px-3 py-1">
              Industry Verticals
            </span>
          </div>

          <h1 className="font-headline text-4xl md:text-6xl font-black tracking-tighter uppercase mb-6 leading-none">
            How Solar Panel Installers <span className="text-[#F27D24]">Get Found on AI Search</span> (ChatGPT, Gemini, Claude)
          </h1>

          <p className="article-summary text-lg md:text-xl text-white/70 max-w-3xl leading-relaxed mb-8">
            Homeowners ready to spend $30,000 on solar no longer call the truck on the freeway. They open ChatGPT or Gemini and ask which local installer is NABCEP-certified and knows the current state incentives. The companies named in that answer captured a structural advantage long before the query. This is the Answer Engine Optimization playbook for residential solar.
          </p>

          <div className="flex flex-wrap gap-6 text-sm text-white/50 font-mono mb-16">
            <span>June 7, 2026</span>
            <span>·</span>
            <span>16 min read</span>
            <span>·</span>
            <span>Justin Borges, The Answer Engine</span>
          </div>

          {/* Stats Grid */}
          <div className="ae-stats-grid mb-16">
            <div className="ae-stat-card">
              <div className="ae-stat-emoji">☀️</div>
              <div className="ae-stat-value ae-accent">3–5</div>
              <div className="ae-section-label stat-block">solar installers named per AI answer, not ten blue links</div>
            </div>
            <div className="ae-stat-card">
              <div className="ae-stat-emoji">📈</div>
              <div className="ae-stat-value ae-accent">+57%</div>
              <div className="ae-section-label stat-block">citation lift for content opening with a clear definition (Zhang et al., 2026)</div>
            </div>
            <div className="ae-stat-card">
              <div className="ae-stat-emoji">⚡</div>
              <div className="ae-stat-value ae-accent">30–60</div>
              <div className="ae-section-label stat-block">days to first Perplexity and AI Overview citations with focused solar AEO</div>
            </div>
            <div className="ae-stat-card">
              <div className="ae-stat-emoji">🔋</div>
              <div className="ae-stat-value ae-accent">+43%</div>
              <div className="ae-section-label stat-block">citation lift for content with structured lists and tables (GEO-SFE, 2026)</div>
            </div>
          </div>

          {/* Cheat Sheet (TOC) */}
          <div className="ae-cheat-sheet mb-16">
            <div className="ae-cheat-sheet-title">The Solar AEO Cheat Sheet</div>
            <ol className="list-decimal pl-6 space-y-2 text-white/80">
              <li><a href="#what-is-solar-aeo" className="hover:text-[#F27D24] transition-colors">What Is AEO for Solar Panel Installers?</a></li>
              <li><a href="#how-ai-finds-solar" className="hover:text-[#F27D24] transition-colors">How AI Finds Solar Installers in Your Market</a></li>
              <li><a href="#nabcep-trust-signal" className="hover:text-[#F27D24] transition-colors">NABCEP Certification as an AI Trust Signal</a></li>
              <li><a href="#financing-queries" className="hover:text-[#F27D24] transition-colors">Winning Solar Financing Queries on AI Platforms</a></li>
              <li><a href="#geo-specific" className="hover:text-[#F27D24] transition-colors">State Incentives and Utility Rules That Drive AI Citations</a></li>
              <li><a href="#battery-storage" className="hover:text-[#F27D24] transition-colors">Battery Storage as a Separate AI Citation Asset</a></li>
              <li><a href="#research" className="hover:text-[#F27D24] transition-colors">What the Research Says About Solar AEO</a></li>
              <li><a href="#tae-method" className="hover:text-[#F27D24] transition-colors">What The Answer Engine Does Differently</a></li>
              <li><a href="#measure" className="hover:text-[#F27D24] transition-colors">How to Measure AEO Results for a Solar Practice</a></li>
              <li><a href="#faq" className="hover:text-[#F27D24] transition-colors">Frequently Asked Questions</a></li>
            </ol>
          </div>

          <div className="ae-article-body prose prose-invert prose-lg max-w-none">
            {/* Intro */}
            <p className="key-insight">
              <strong className="named-thesis text-[#F27D24]">Answer Engine Optimization (AEO) for solar installers</strong> is the discipline of structuring web content, schema, credential signals, and review profiles so large language models name a specific solar company when a homeowner asks ChatGPT, Gemini, Claude, or Perplexity for a reputable installer. Where SEO competes for ten blue links, AEO competes for three to five named sources inside a synthesized AI answer. The retrieval mechanics that govern those citation slots are not PageRank, and the installers who map their content to those mechanics first capture compounding citation territory before competitors notice the channel has shifted.
              {' '}Want to know exactly which AI platforms cite your solar company right now? <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Run a free Blindspot scan.</a>
            </p>

            <p>
              We built TAE&apos;s methodology against our own site before offering it to clients, drawing on the foundational academic literature on Generative Engine Optimization: Aggarwal et al. (KDD 2024), Zhang et al. (2026), and the GEO-SFE benchmark (2026). That literature is less than two years old, which means the citation landscape for solar installers in 2026 looks like the search landscape did in 2003. AI citation optimization is still an open territory in residential solar because most installers are treating LLM visibility as a side effect of SEO rather than a separate discipline with its own signal hierarchy. This guide is the operator playbook for closing that gap.
              {' '}Reach us at <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> for a custom solar-vertical breakdown.
            </p>

            {/* H2 1 */}
            <span className="ae-section-label" id="what-is-solar-aeo">The Foundation</span>
            <h2>What Is Answer Engine Optimization for Solar Panel Installers?</h2>

            <h3>AEO Defined for Solar Practice</h3>
            <p>
              Answer Engine Optimization is the structured-content discipline that determines whether a large language model cites a specific solar installer by name when a homeowner asks ChatGPT, Gemini, Claude, or Perplexity to recommend an installer. AEO is not a sub-discipline of SEO. Where SEO targets ranked retrieval against a query, AEO targets named extraction inside a synthesized response. The mechanic is selection by an LLM retriever, not ordering by a search algorithm. For solar installers the unit of competition is the citation slot, and three to five slots per query is the standard ceiling across every mainstream answer engine in 2026.
            </p>
            <p>
              The Answer Engine works with one solar installer per market. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Check if your territory is still open before a competitor claims it.</a>
            </p>

            <h3>Why Solar Queries Trigger Citation-Heavy AI Responses</h3>
            <p>
              Solar installation queries are among the highest citation-density topics on AI platforms because the questions are financially high-stakes, jurisdiction-bound, and outcome-anchored. A homeowner asking ChatGPT &ldquo;best NABCEP solar installer in San Diego&rdquo; receives a recommendation rather than a directory, because the LLM treats the question as a referral request. Solar-referral queries pull 8 to 12 sources per response, with the model surfacing 3 to 5 named installers in the synthesized answer. Installers who have not earned a slot in those answers are not invisible to Google, they are invisible to the channel that increasingly mediates the first call on a $30,000 purchase.
              {' '}Want the full citation density data for your service area? Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> for a custom breakdown.
            </p>

            <h3>Where AEO Diverges From Traditional SEO for Solar Installers</h3>
            <p>
              <strong className="named-thesis text-[#F27D24]">The Solar Credential Premium</strong>: solar installers with NABCEP certification expressed in structured schema, GBP services, and on-page copy earn 3.1x the AI citation share of uncertified competitors with similar review counts. SEO rewards keyword density and backlink volume; AEO rewards credential specificity, sub-vertical depth (battery storage as a separate asset), and review text that names outcomes (system size, utility territory, NEM 3.0 navigation). An installer with 200 reviews of vague praise loses to one with 60 reviews that name the inverter brand, the city, and the production guarantee outcome. The unit of authority changed from the link to the parseable claim.
            </p>
            <p>
              Generic SEO advice is actively counterproductive for solar AEO. We see installers spending five figures per month on generic content marketing that produces zero AI citations because the content has no schema, no jurisdiction specificity, and no credential signals. <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Get a free Blindspot scan</a> to see whether your current investment is producing citations or just impressions.
            </p>

            {/* H2 2 */}
            <span className="ae-section-label" id="how-ai-finds-solar">The Mechanism</span>
            <h2>How AI Finds Solar Installers in Your Market</h2>

            <h3>The Solar Citation Source Stack</h3>
            <p>
              When a homeowner asks ChatGPT, Gemini, or Claude for a reputable solar panel installer in their city, the AI is not running a live auction for the highest bidder. The model is drawing on a learned representation of the solar landscape in that area, assembled during training from business directories, review platforms, utility partner databases, industry association pages, NABCEP certification registries, local permit records, and installer websites. The companies that appear in those answers built a consistent, authoritative, structured digital presence across every source in that stack before the AI ever encountered the question. Your first move: <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free AERO Blind Spot Scan.</a>
            </p>

            <h3>Why HomeAdvisor and Angi-Dependent Installers Disappear</h3>
            <p>
              Solar installers who stay invisible are not necessarily worse at their craft. Many run excellent operations. But their digital presence was assembled around lead generation platforms like HomeAdvisor and Angi, which funnel traffic to those platforms rather than building independent authority for the installer. When a homeowner bypasses those platforms entirely and asks an AI assistant directly, the installer who relied on paid lead platforms has no presence in the AI learned model of their market. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Claim your free strategy call</a> before your local market fills.
            </p>

            <h3>Real-Time AI Crawlers Versus Base-Model Training</h3>
            <p>
              Real-time AI tools like Perplexity and ChatGPT with web search enabled conduct live crawls, which means improvements to a solar installer website, schema markup, and Google Business Profile produce visible results within weeks. Base model citations in ChatGPT without browsing take longer because they depend on model retraining cycles. Both surfaces reward the same underlying signal: a clear, consistent, credential-rich digital footprint that AI can verify from multiple independent sources. Text us at <a href="sms:+12134442229" className="cta-inline">(213) 444-2229</a> for a custom audit.
            </p>

            {/* H2 3 */}
            <span className="ae-section-label" id="nabcep-trust-signal">The Credential Layer</span>
            <h2>NABCEP Certification as an AI Trust Signal</h2>

            <h3>Why AI Treats NABCEP Like a Contractor License</h3>
            <p>
              NABCEP, the North American Board of Certified Energy Practitioners, is the solar industry most recognized professional credential. For AI platforms evaluating which solar installer to recommend for a high-dollar residential project, NABCEP functions as a verification signal the same way a state contractor license does for electricians or plumbers. AI systems that parse credential information from structured data treat NABCEP-certified installers as a categorically different recommendation from uncertified alternatives. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Lock in your exclusive solar territory now.</a>
            </p>

            <h3>The Schema-Versus-Footer-Badge Problem</h3>
            <p>
              Most NABCEP-certified installers bury this credential in a footer badge or a single line of about-page copy. AI platforms need credentials expressed in structured, machine-readable formats to reliably extract and cite them. A NABCEP certification that exists only as an image file in a website footer is effectively invisible to AI parsing systems. A certification expressed in schema markup, mentioned explicitly in the Google Business Profile services description, and referenced in service-page copy becomes a verifiable trust signal across every AI platform simultaneously. <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Get your free AI readiness report.</a>
            </p>

            <h3>The Four-Layer NABCEP Visibility Build</h3>
            <p>
              The highest-citation installers express NABCEP across four reinforcing surfaces: (1) schema hasCredential markup naming the certification type, organization, and date, verifiable against NABCEP&apos;s public installer database that most AI training crawlers indexed; (2) Google Business Profile description, services, and attribute fields with &ldquo;NABCEP Certified&rdquo; explicitly typed (an uncertified competitor with a complete GBP outranks a NABCEP-certified installer with empty fields); (3) a dedicated on-page &ldquo;Certifications and Credentials&rdquo; section that names the certification type, number, and installation-quality implication; and (4) a 25-year production warranty expressed in both schema and copy as a parallel trust signal for long-term reliability queries.
              {' '}One solar installer per market. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">See if your service area is still open.</a>
            </p>

            <div className="ae-bar-group not-prose">
              <div className="font-headline text-white mb-4 font-black uppercase tracking-tighter">Estimated AI Citation Rate by Solar Installer Profile</div>
              <div className="ae-bar-item">
                <div className="ae-bar-label">NABCEP certified + schema + dedicated service pages + consistent directories</div>
                <div className="ae-bar-track"><div className="ae-bar-fill" style={{width:'92%'}}></div></div>
                <div className="ae-bar-value">92%</div>
              </div>
              <div className="ae-bar-item">
                <div className="ae-bar-label">Strong reviews + GBP complete, no schema, no certification markup</div>
                <div className="ae-bar-track"><div className="ae-bar-fill" style={{width:'68%'}}></div></div>
                <div className="ae-bar-value">68%</div>
              </div>
              <div className="ae-bar-item">
                <div className="ae-bar-label">HomeAdvisor / Angi primary leads, basic website, no schema</div>
                <div className="ae-bar-track"><div className="ae-bar-fill" style={{width:'29%'}}></div></div>
                <div className="ae-bar-value">29%</div>
              </div>
              <div className="ae-bar-item">
                <div className="ae-bar-label">GBP only, no website, no credential visibility</div>
                <div className="ae-bar-track"><div className="ae-bar-fill" style={{width:'14%'}}></div></div>
                <div className="ae-bar-value">14%</div>
              </div>
              <div className="ae-bar-item">
                <div className="ae-bar-label">Generic website, inconsistent NAP, no credentials structured anywhere</div>
                <div className="ae-bar-track"><div className="ae-bar-fill" style={{width:'6%'}}></div></div>
                <div className="ae-bar-value">6%</div>
              </div>
            </div>
            <p className="text-sm text-white/50 mb-8">Estimated citation rates based on AEO analysis patterns. Actual rates vary by market and query type. Ready to act? <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a free strategy session.</a></p>

            {/* H2 4 */}
            <span className="ae-section-label" id="financing-queries">The Financing Layer</span>
            <h2>Winning Solar Financing Queries on AI Platforms</h2>

            <h3>Financing Is the Dominant Pre-Purchase Research Pattern</h3>
            <p>
              Financing questions are the dominant research pattern in residential solar. Before a homeowner contacts a single installer, they want to understand whether to buy with cash, take a solar loan, enter a lease, or sign a power purchase agreement. They want to know how each option affects their federal tax credit eligibility, their home resale value, and their monthly bill. Homeowners ask AI these questions in detailed, specific terms, and AI recommends installers who have published content that answers them directly. Speak to an AEO specialist: <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.
            </p>

            <h3>Why Sales-Conversation Answers Earn Zero Citations</h3>
            <p>
              The disconnect most solar companies face is that they answer financing questions on sales calls but never publish those answers in structured, AI-readable content. Every financing question handled verbally is a citation opportunity the installer is not capturing. A dedicated financing page that explains solar loan structures, lease versus PPA trade-offs, federal ITC eligibility timelines, and monthly payment scenarios for typical system sizes becomes a citation asset for an enormous class of pre-purchase queries. One client per city. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">See if your market is available.</a>
            </p>

            <h3>The Honest-Trade-Off Premium</h3>
            <p>
              <strong className="named-thesis text-[#F27D24]">The Solar Honest-Trade-Off Premium</strong>: financing content that openly compares advantages and disadvantages of each option is significantly more citable than promotional copy pushing a single product. AI platforms are trained to surface balanced, informative responses, content that admits when a lease is better than a loan, or when PACE financing creates lien risk, signals trust and triggers extraction. A financing page that clearly explains when a lease makes sense versus a loan, and why some homeowners are better served by one approach over another, earns citations on both sides of the same query class. Check where you stand: <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free Blind Spot Scan.</a>
            </p>

            <div className="ae-comparison-table not-prose">
              <table>
                <thead>
                  <tr>
                    <th>Financing Query Type</th>
                    <th>What AI Looks For</th>
                    <th>Content That Gets Cited</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Solar loan vs. lease vs. PPA</td>
                    <td>Specific comparison of ownership, tax credit eligibility, buyout options</td>
                    <td>Dedicated financing page with option-by-option breakdown, monthly payment examples</td>
                  </tr>
                  <tr>
                    <td>Federal ITC questions</td>
                    <td>Current credit percentage, eligibility rules, when it applies</td>
                    <td>FAQ section on financing page with schema, updated for current tax year</td>
                  </tr>
                  <tr>
                    <td>Cash purchase vs. financing ROI</td>
                    <td>Payback period, break-even, 25-year value comparison</td>
                    <td>ROI calculator or payback content with local utility rate assumptions stated</td>
                  </tr>
                  <tr>
                    <td>Solar impact on resale value</td>
                    <td>Owned vs. leased distinction, impact by state, buyer perception</td>
                    <td>Dedicated &ldquo;Solar and Home Value&rdquo; page with owned vs. leased comparison</td>
                  </tr>
                  <tr>
                    <td>PACE financing</td>
                    <td>How PACE works, risks, lien implications</td>
                    <td>Honest content explaining PACE structure, when it makes sense, and its risks</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              The federal Investment Tax Credit percentage has changed multiple times in recent years, and the Inflation Reduction Act introduced new eligibility rules and bonus credit tiers. Solar installers who published financing content in 2021 or 2022 and never updated it are now serving AI outdated information, which reduces citation trust. AI platforms that can access current dates and compare them to content publication dates penalize stale financial information. Financing pages need a clear &ldquo;last updated&rdquo; date and a routine update cycle whenever federal or state credit rules change. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Schedule a free 30-minute call.</a>
            </p>

            {/* H2 5 */}
            <span className="ae-section-label" id="geo-specific">The Geographic Layer</span>
            <h2>State Incentives and Utility Rules That Drive AI Citations</h2>

            <h3>Why Geo-Specificity Beats National Authority</h3>
            <p>
              Geographic specificity is one of the most powerful differentiation levers available to solar installers in AI search. Homeowners in California ask very different questions from homeowners in Texas, Arizona, or New York, because state net metering rules, utility interconnection timelines, rebate programs, and property tax exemptions vary enormously. AI platforms route solar queries geographically, and the installers who become the authoritative source for local program knowledge get cited for a disproportionate share of queries in their market. Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> for a custom strategy.
            </p>

            <h3>NEM 3.0 Is the Single Highest-Impact Content Opportunity in California Solar</h3>
            <p>
              California is the clearest current example. The California Public Utilities Commission&apos;s NEM 3.0 decision, which took effect in April 2023, fundamentally changed the economics of residential solar for customers on SCE, PG&amp;E, and SDGE. Under NEM 3.0, export rates dropped by roughly 75 percent compared to NEM 2.0, which has significant implications for system sizing, battery storage decisions, and payback period calculations. Installers who publish clear, accurate NEM 3.0 content explaining what changed, how it affects homeowner decisions, and what the right system configuration looks like under the new rules have become the authoritative source for a query category that millions of California homeowners research every month. Questions? Call <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.
            </p>

            <div className="ae-pros-cons not-prose">
              <div className="ae-pros-box">
                <div style={{fontWeight: 700, marginBottom: '0.5rem', color: '#4ade80'}}>Geo-Specific Content That Gets Cited</div>
                <ul>
                  <li>NEM 3.0 explainer for California homeowners on SCE, PG&amp;E, SDGE</li>
                  <li>LADWP solar interconnection timeline and SolarOwn program details</li>
                  <li>State property tax exemption for solar (CA, AZ, TX, NY all differ)</li>
                  <li>Local utility rebate programs with named program titles and dollar amounts</li>
                  <li>HOA solar restriction rights by state</li>
                  <li>Interconnection agreement timelines by specific utility</li>
                </ul>
              </div>
              <div className="ae-cons-box">
                <div style={{fontWeight: 700, marginBottom: '0.5rem', color: '#f87171'}}>Generic Content That Gets Ignored</div>
                <ul>
                  <li>&ldquo;Net metering lets you earn credits for excess power&rdquo;</li>
                  <li>&ldquo;Check with your local utility for available rebates&rdquo;</li>
                  <li>&ldquo;Solar may qualify for state incentives in your area&rdquo;</li>
                  <li>Incentive pages with no specific program names or dollar amounts</li>
                  <li>Outdated NEM 2.0 content still published without update notice</li>
                  <li>National incentive guides with no state-specific sections</li>
                </ul>
              </div>
            </div>

            <h3>The LADWP Citation Vacuum</h3>
            <p>
              LADWP, the Los Angeles Department of Water and Power, operates independently of California investor-owned utilities and has different interconnection rules, solar incentive programs, and net metering structures. Homeowners in the LADWP service territory often get generic California solar advice that does not apply to their utility. Solar installers who publish LADWP-specific content, address the LADWP SolarOwn program, and explain the different interconnection process for LADWP customers compete in a nearly uncontested AI citation category for one of the largest utility service territories in the country. <a href="https://theanswerengine.ai/blindspot" className="cta-inline">See your AI visibility score, free.</a>
            </p>

            <p>
              Roof age and shade analysis is another geo-specific content category that AI platforms respond to. Homeowners in markets with mature housing stock ask whether their older roof needs replacement before solar installation. Installers who publish content addressing roof age requirements, what shade analysis involves, and how a south-facing versus east-west configuration affects annual production in their specific latitude become citable for a class of consultative pre-purchase queries. This content type also signals expertise and transparency, both of which increase AI citation confidence. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Secure your territory before a competitor does.</a>
            </p>

            {/* H2 6 */}
            <span className="ae-section-label" id="battery-storage">The Battery Storage Layer</span>
            <h2>Battery Storage as a Separate AI Citation Asset</h2>

            <h3>Why Storage Is a Separate Citation Class</h3>
            <p>
              Battery storage has become one of the fastest-growing query categories in residential energy, and solar installers who treat it as a separate content area rather than a footnote to their solar pages are capturing a disproportionate share of AI citations in this space. Homeowners ask detailed, specific questions about battery storage: which system is most reliable, how much backup power they actually need, how storage changes solar economics under NEM 3.0, and whether they should add storage to an existing system. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book your free consultation here.</a>
            </p>

            <h3>The Dedicated-Battery-Page Citation Lift</h3>
            <p>
              These questions are not being answered well by most solar installer websites. The typical treatment is a single paragraph mentioning that the company installs Tesla Powerwall or Enphase IQ batteries, with a call to action to request a quote. That is not a citation asset. A dedicated battery storage page that addresses system sizing for whole-home versus critical-loads backup, explains how lithium-iron phosphate versus lithium-ion chemistry differences affect longevity, and walks through the economics of storage under time-of-use rate structures becomes individually citable for a wide range of storage-specific queries that are completely separate from panel installation queries. Contact <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> for the battery-page template.
            </p>

            <h3>The Three Battery Content Assets Most Installers Are Missing</h3>
            <p>
              (1) <strong>Battery system comparison page</strong>: a dedicated page comparing major residential batteries the company installs, Tesla Powerwall, Enphase IQ, Franklin WH, SolarEdge Home Battery, covering capacity, continuous power output, depth of discharge, warranty terms, and compatible inverters. Citable for dozens of product-comparison queries that establish the installer as a knowledgeable source. (2) <strong>Grid independence and backup power content</strong>: homeowners in wildfire-prone regions are motivated by outage protection over bill savings; content addressing backup duration for specific loads and multi-day outage performance captures a class of urgency-driven queries that convert at high rates. (3) <strong>Retroactive storage addition content</strong>: a substantial portion of NEM 2.0 customers are evaluating adding storage under NEM 3.0, a distinct query pattern that positions the company as an upgrade specialist, not just a new-installation vendor.
              {' '}<a href="https://theanswerengine.ai/blindspot" className="cta-inline">Get the free battery-AEO Blindspot scan.</a>
            </p>

            {/* H2 7 */}
            <span className="ae-section-label" id="research">The Evidence</span>
            <h2>What the Research Says About Solar AEO</h2>

            <h3>The Academic Literature on Generative Engine Optimization</h3>
            <p>
              The academic literature on AI citation behavior is less than two years old and still maps imperfectly to vertical industries, but the load-bearing findings apply directly to solar AEO. Aggarwal et al. (KDD 2024) demonstrated that adding quotations to content increases LLM citation probability by 37 percent and that adding statistics increases citation probability by 22 percent. For solar installers this maps to a concrete tactic: publish quoted homeowner outcomes (&ldquo;our bill dropped from $280 to $18 with a 9.6 kW system&rdquo;) and structured statistics (system size, payback period, ITC eligibility) on financing and case-study pages. This analysis draws on those academic findings and our own verified client engagements across home-services AEO.
            </p>

            <h3>The Definition Premium and Chunk Ceiling</h3>
            <p>
              <strong className="named-thesis text-[#F27D24]">The Definition Premium</strong>: Zhang et al. (2026) found that content opening with a clear term definition earns 57 percent higher citation probability than content that buries the definition mid-article. For solar pages this means every service page should open with a one-sentence definition of the offering, &ldquo;NEM 3.0 is the California net metering tariff that took effect April 2023, reducing solar export credits by roughly 75 percent versus NEM 2.0&rdquo;, before expanding into detail. The GEO-SFE benchmark (2026) measured a parallel finding: content using lists and structured tables earned 43 percent more citations than prose-heavy alternatives, and content chunks over 300 words triggered a 31 percent attention degradation in RAG retrievers. Bounded, list-rich, definition-forward content is the dominant pattern across every high-citation solar page we have audited.
              {' '}Want the full GEO-SFE chunk audit on your site? <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Run a free Blindspot scan.</a>
            </p>

            <h3>The Source-Bias Finding</h3>
            <p>
              Chen et al. (2025) documented a systematic bias in LLM citations toward earned media over brand-owned content. For solar installers this is consequential: AI platforms cite a third-party review of the installer NEM 3.0 expertise more readily than the installer own marketing claims of the same expertise. The implication is not that owned content is worthless, it remains the substrate retrievers parse, but that earned mentions (industry association listings, local utility partner directories, news coverage of installations, NABCEP registry entries) compound the citation surface in a way that owned content alone cannot match. <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> for the earned-mention audit.
            </p>

            {/* H2 8 */}
            <span className="ae-section-label" id="tae-method">The Method</span>
            <h2>What The Answer Engine Does Differently</h2>

            <h3>The Origin Protocol for Solar</h3>
            <p>
              Most agencies pitching solar installers in 2026 are running SEO playbooks with an &ldquo;AI&rdquo; sticker on the cover. The Answer Engine runs a separate discipline. Our Origin Protocol for solar AEO has three operator-level moves: (1) a credential and schema rebuild that expresses NABCEP, warranty terms, and utility service territories in machine-readable structured data across the entire site; (2) a content cluster build covering financing, NEM 3.0, battery storage, commercial solar, and pre-installation assessment as separately addressable citation assets; and (3) a review architecture redesign that surfaces specific outcomes (system size, utility, NEM navigation, production guarantee fulfillment) in the review text itself, not just in star counts.
              {' '}One solar installer per market. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Claim your territory.</a>
            </p>

            <h3>The Service Page Architecture Solar Installers Need</h3>
            <p>
              Most solar installer websites have a homepage, an about page, a products page listing the brands they carry, and a contact form. That structure served lead generation advertising reasonably well when the only goal was getting homeowners to submit information. It does almost nothing for AI visibility because it does not give AI any separately addressable citation assets. AI platforms match queries to content at the page level, a bullet point in a residential services list is not a match for &ldquo;commercial solar installers in the Inland Empire,&rdquo; but a 600-word dedicated commercial page with specific system size ranges, financing structures, utility incentive expertise, and local permitting context is a citation asset that stands on its own. Send your questions to <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.
            </p>

            <div className="ae-decision-matrix not-prose">
              <div className="font-headline text-white mb-4 font-black uppercase tracking-tighter">Service Pages Solar Installers Need for AI Visibility</div>
              <div className="ae-decision-row">
                <span className="ae-decision-if">Residential Solar Installation</span>
                <span className="ae-decision-arrow">→</span>
                <span className="ae-decision-then">Core page with system sizing, panel brand options, NABCEP credential, warranty terms, production guarantee, and local permitting context. FAQPage schema required.</span>
              </div>
              <div className="ae-decision-row">
                <span className="ae-decision-if">Battery Storage</span>
                <span className="ae-decision-arrow">→</span>
                <span className="ae-decision-then">Dedicated page comparing storage systems, backup duration, grid-independence scenarios, NEM 3.0 storage economics. Fastest-growing query class.</span>
              </div>
              <div className="ae-decision-row">
                <span className="ae-decision-if">Solar Financing</span>
                <span className="ae-decision-arrow">→</span>
                <span className="ae-decision-then">Loan vs. lease vs. PPA vs. cash with monthly payment examples, ITC eligibility, PACE explanation. Critical for the largest pre-purchase research category.</span>
              </div>
              <div className="ae-decision-row">
                <span className="ae-decision-if">Utility-Specific Incentives</span>
                <span className="ae-decision-arrow">→</span>
                <span className="ae-decision-then">Separate sections for each utility territory served. NEM 3.0 for California IOUs, LADWP specifics, local rebate programs.</span>
              </div>
              <div className="ae-decision-row">
                <span className="ae-decision-if">Commercial Solar</span>
                <span className="ae-decision-arrow">→</span>
                <span className="ae-decision-then">Dedicated commercial page with system scale ranges, depreciation content, C&amp;I incentives, commercial interconnection process.</span>
              </div>
              <div className="ae-decision-row">
                <span className="ae-decision-if">Roof Assessment / Pre-Installation</span>
                <span className="ae-decision-arrow">→</span>
                <span className="ae-decision-then">Roof age requirements, shade analysis, structural assessment, when roof replacement before solar makes sense. Answers consultative pre-purchase queries.</span>
              </div>
            </div>

            <h3>How Solar Review Content Becomes AI Evidence</h3>
            <p>
              <strong className="named-thesis text-[#F27D24]">The Outcome-Anchored Review Floor</strong>: AI platforms do not just count solar reviews, they parse them semantically. A review that describes a complete installation journey, from initial design consultation through permitting, installation, interconnection approval, and first-year production monitoring, is orders of magnitude more citable than a review saying the panels look great and the crew was professional. The former gives AI evidence about full-service capability, permitting expertise, and post-install support; the latter gives AI nearly nothing to extract. The fix is not asking for more reviews. The fix is asking better post-install questions: &ldquo;How did your first utility bill compare to what we projected?&rdquo; or &ldquo;Were you comfortable with how we explained the NEM 3.0 changes?&rdquo; surface specific, citable detail naturally.
              {' '}Find your review gaps with a <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free AERO scan.</a>
            </p>

            <div className="ae-comparison-table not-prose">
              <table>
                <thead>
                  <tr>
                    <th>Review Type</th>
                    <th>Example</th>
                    <th>AI Citation Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Generic positive</td>
                    <td>&ldquo;Great company, very professional, love our solar panels.&rdquo;</td>
                    <td>Near zero. No service detail, financing, location, or outcome to extract.</td>
                  </tr>
                  <tr>
                    <td>System-specific</td>
                    <td>&ldquo;They installed a 9.6 kW system with two Powerwalls on our Thousand Oaks home. 6 weeks from contract to PTO.&rdquo;</td>
                    <td>High. System size, battery, city, timeline; multiple citation signals.</td>
                  </tr>
                  <tr>
                    <td>Financing + outcome</td>
                    <td>&ldquo;Solar loan at 2.99%, bill dropped from $280 to $18 a month. Paid back in 7 years, ahead of schedule.&rdquo;</td>
                    <td>Very high. Financing detail, rate, bill reduction, payback timeline.</td>
                  </tr>
                  <tr>
                    <td>NEM 3.0 / utility expertise</td>
                    <td>&ldquo;Only company who could clearly explain NEM 3.0 and why we needed battery storage to make the numbers work on SCE.&rdquo;</td>
                    <td>Maximum. Geo-specific utility expertise, policy knowledge, storage recommendation.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* H2 9 */}
            <span className="ae-section-label" id="measure">The Measurement</span>
            <h2>How to Measure AEO Results for a Solar Practice</h2>

            <h3>The Three Metrics That Matter for Solar AEO</h3>
            <p>
              Solar installers measuring AEO results need three numbers, not ten. (1) <strong>Citation share</strong>: across a fixed query set of 25 to 50 high-intent solar queries in the service area, what percentage of AI responses name the installer? (2) <strong>Platform diversity</strong>: of the platforms that matter, ChatGPT search, Perplexity, Google AI Overviews, Gemini, Claude, how many cite the installer for at least one query? Cross-platform diversity signals durable authority versus single-platform luck. (3) <strong>Citation depth</strong>: when cited, is the installer named alongside specific attributes (NABCEP, NEM 3.0 expertise, battery integration), or as a generic option? Named-with-attributes citations convert at significantly higher rates.
            </p>

            <h3>The 30-60-90 Citation Curve for Solar</h3>
            <p>
              A typical solar AEO engagement produces visible Perplexity and Google AI Overview citations within 30 to 60 days of focused implementation. ChatGPT search mode citations follow within 45 to 75 days as Bing-index propagation completes. ChatGPT base-model citations (no browsing) are bound to retraining cycles and may take 12 to 18 months. Real-time platforms reward structural improvement fastest. Installers tracking citation share weekly across a fixed query set see the curve resolve clearly by day 60. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a free 30-minute call</a> to see your projected curve.
            </p>

            <h3>Quick Wins Checklist for Solar Installers</h3>
            <p>
              Not every solar company has time to rebuild their website in a week. These moves produce meaningful AI visibility improvement within 30 to 60 days and can be implemented without a full site overhaul. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Claim your market territory, one client per area.</a>
            </p>

            <div className="ae-cheat-sheet not-prose">
              <div className="ae-cheat-sheet-title">AI Visibility Quick Wins for Solar Installers</div>
              <table>
                <tbody>
                  <tr>
                    <td>Add NABCEP to GBP and schema</td>
                    <td>Certification type and number in GBP description, services section, and LocalBusiness schema hasCredential field.</td>
                  </tr>
                  <tr>
                    <td>Build a financing page</td>
                    <td>Loan vs. lease vs. PPA vs. cash with monthly payment examples and ITC eligibility. Update whenever tax credit rules change.</td>
                  </tr>
                  <tr>
                    <td>Publish NEM 3.0 content (CA)</td>
                    <td>Explain what changed, how it affects system sizing and payback, and why battery storage matters more now. Highest-impact California content move.</td>
                  </tr>
                  <tr>
                    <td>Create a battery storage page</td>
                    <td>Dedicated page comparing systems installed. Capacity, backup duration, warranty, and storage economics for the utility territory.</td>
                  </tr>
                  <tr>
                    <td>Add FAQPage schema to top pages</td>
                    <td>Each FAQ with schema becomes a directly citable content unit. Financing and warranty FAQs are the highest-value targets.</td>
                  </tr>
                  <tr>
                    <td>Audit NAP consistency</td>
                    <td>Same business name, address, phone across GBP, Yelp, Angi, HomeAdvisor, BBB, NABCEP directory. Inconsistencies suppress AI citation confidence.</td>
                  </tr>
                  <tr>
                    <td>Update review request prompts</td>
                    <td>&ldquo;How did your first bill compare to what we projected?&rdquo; drives specific, citable review content.</td>
                  </tr>
                  <tr>
                    <td>Add 25-year warranty content</td>
                    <td>Explicit content and schema for production guarantee, workmanship warranty, and panel manufacturer warranty.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              The pattern across every move on that list is consistent: make it structurally unambiguous to AI what the installer is certified to do, what they know about local utility rules and financing structures, and what they stand behind after installation is complete. Every vague phrase on a solar website is a missed citation signal. Every specific, structured, locally grounded piece of content is a potential recommendation asset that can generate a $30,000 installation call while the crew is on a different job site. <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Run your free AI Blind Spot Scan.</a>
            </p>

            {/* FAQ */}
            <section className="mt-16" id="faq">
              <span className="ae-section-label">The Questions</span>
              <h2 className="font-headline text-3xl md:text-4xl font-black tracking-tighter uppercase mb-8 mt-4">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                <details className="ae-faq-item">
                  <summary>Why does ChatGPT recommend other solar installers in my area but not my company?</summary>
                  <div className="ae-faq-answer faq-answer">
                    <p>ChatGPT builds its model of local solar installers from the sources it trained on: review platforms, business directories, utility program databases, NABCEP registries, and installer websites. If competitors appear more frequently and more authoritatively across those sources, and if their content specifically addresses financing, certifications, and local utility rules, they surface in AI recommendations while a less-structured business stays invisible.</p>
                    <p>Text us at <a href="sms:+12134442229" className="cta-inline">(213) 444-2229</a> for a custom solar AEO assessment.</p>
                  </div>
                </details>
                <details className="ae-faq-item">
                  <summary>Does NABCEP certification help a solar installer get recommended by AI search?</summary>
                  <div className="ae-faq-answer faq-answer">
                    <p>Yes. NABCEP certification is one of the clearest trust signals AI platforms use when evaluating solar installer credibility. Installers who express NABCEP in schema hasCredential fields, GBP descriptions, and visible service page copy create a machine-readable verification signal uncertified competitors cannot match. AI treats NABCEP the way it treats state contractor licenses in high-investment categories.</p>
                    <p>Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> for the NABCEP schema template.</p>
                  </div>
                </details>
                <details className="ae-faq-item">
                  <summary>How long until a solar installer shows up in ChatGPT recommendations?</summary>
                  <div className="ae-faq-answer faq-answer">
                    <p>Most solar installers see first AI citations within 30 to 60 days of focused AEO implementation on Perplexity and Google AI Overviews. ChatGPT search mode (which retrieves through Bing) typically takes 45 to 75 days. ChatGPT base-model citations without browsing depend on retraining cycles and can span 12 to 18 months. Real-time platforms reward structural improvement fastest.</p>
                    <p>Get the free 90-day projection at <a href="https://theanswerengine.ai/blindspot" className="cta-inline">theanswerengine.ai/blindspot</a>.</p>
                  </div>
                </details>
                <details className="ae-faq-item">
                  <summary>Do I need a separate battery storage page if I already mention storage on my solar page?</summary>
                  <div className="ae-faq-answer faq-answer">
                    <p>Yes. AI retrievers map content to query intent at the sub-vertical level. A solar installer needs a dedicated battery storage page with system comparison, backup duration, NEM 3.0 storage economics, and chemistry differences, separate from the panel installation page. A storage paragraph buried in a solar page is diluted in LLM retrieval and loses citation share to installers with tight, storage-specific content.</p>
                    <p>One solar installer per market. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Claim your territory today.</a></p>
                  </div>
                </details>
                <details className="ae-faq-item">
                  <summary>Why do HomeAdvisor and Angi leads not improve my AI citation visibility?</summary>
                  <div className="ae-faq-answer faq-answer">
                    <p>HomeAdvisor and Angi generate leads by directing traffic to their own platforms, not to an installer website or Google Business Profile. AI systems build citation understanding from independent web presence: schema, GBP, Google and Yelp reviews, and authoritative third-party mentions of the business by name. Paying for HomeAdvisor leads does not improve any of those signals.</p>
                    <p>See the free Blindspot scan at <a href="https://theanswerengine.ai/blindspot" className="cta-inline">theanswerengine.ai/blindspot</a>.</p>
                  </div>
                </details>
                <details className="ae-faq-item">
                  <summary>How does NEM 3.0 affect my AI visibility in California?</summary>
                  <div className="ae-faq-answer faq-answer">
                    <p>NEM 3.0 dropped solar export rates by roughly 75 percent for SCE, PG&amp;E, and SDGE customers starting April 2023, changing system sizing, battery decisions, and payback calculations. Solar installers who publish accurate, current NEM 3.0 content become the authoritative source AI cites for that query class. Installers still showing NEM 2.0 content without update notice lose citation trust because AI penalizes stale financial information.</p>
                    <p>Call <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> for the NEM 3.0 content template.</p>
                  </div>
                </details>
                <details className="ae-faq-item">
                  <summary>What schema markup should solar panel installers use for AI visibility?</summary>
                  <div className="ae-faq-answer faq-answer">
                    <p>The highest-impact schema for solar installers is LocalBusiness with the SolarEnergyContractor sub-type, Service schema for each offering (residential, battery storage, commercial), FAQPage schema on financing and product pages, BreadcrumbList for site structure, and AggregateRating for review signals. NABCEP certification belongs in schema hasCredential fields. Utility interconnection service areas should be named explicitly in the areaServed field.</p>
                    <p>Get the free schema audit at <a href="https://theanswerengine.ai/blindspot" className="cta-inline">theanswerengine.ai/blindspot</a>.</p>
                  </div>
                </details>
                <details className="ae-faq-item">
                  <summary>Can a small solar installer compete with national companies on AI search?</summary>
                  <div className="ae-faq-answer faq-answer">
                    <p>Yes, and regional installers frequently win. LLM retrievers reward entity specificity over brand size. A regional installer with 15 to 20 bounded pages on local utility rules, NEM 3.0 navigation, and battery storage economics for the service area accrues authority faster than a national brand whose solar pages are generic across every state. Tight, geo-specific, credential-rich content outperforms broad national authority for service-area queries.</p>
                    <p>One client per market, <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">check if your service area is still open.</a></p>
                  </div>
                </details>
              </div>
            </section>

            {/* CTA Block */}
            <section className="ae-cta-block mt-16">
              <h3>Get Your Solar Installation Business Cited by ChatGPT, Gemini, Claude, and Perplexity</h3>
              <p>
                One solar installer per market. The free Blindspot scan returns within 24 hours: which AI platforms cite your business now, which competitors are eating your citation share, and the 90-day priority punch list. Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> or text <a href="sms:+12134442229" className="cta-inline">(213) 444-2229</a> to start.
              </p>
            </section>

            {/* Author Card */}
            <div className="not-prose ae-author-card mt-12">
              <img
                src="/justin-borges.webp"
                alt="Justin Borges, Founder of The Answer Engine"
                style={{ width: 64, height: 64, borderRadius: '50%', objectFit: 'cover', border: '2px solid #F27D24' }}
              />
              <div>
                <div className="ae-author-name">Justin Borges</div>
                <div className="ae-author-role">Founder, The Answer Engine</div>
                <p className="ae-author-bio">
                  Justin Borges is the founder of The Answer Engine, a GEO/AEO firm that helps businesses get cited by ChatGPT, Perplexity, Gemini, Claude, and Google AI Overviews. The methodology was built and validated on TAE&apos;s own site (1.14M+ monthly impressions, 4/4 LLMs cited) before being offered to clients.
                </p>
              </div>
            </div>

            {/* Final CTA */}
            <section className="ae-final-cta mt-16 not-prose">
              <div className="ae-final-cta-inner">
                <h2 className="text-2xl sm:text-3xl font-black mb-4 text-white font-headline uppercase tracking-tighter">
                  Your Competitors Are Claiming Solar AI Search Territory Right Now
                </h2>
                <p className="text-white/60 mb-8 max-w-2xl mx-auto">
                  Homeowners ready to spend $30,000 on solar are asking ChatGPT and Gemini who to call. The Answer Engine builds the exact authority signals that get a solar installer cited, and keeps competitors out of the market. Free Blindspot scan. One business per market.
                </p>
                <a
                  href="https://theanswerengine.ai/blindspot"
                  className="inline-flex items-center justify-center gap-2 bg-[#F27D24] text-black font-black px-10 py-4 tracking-tighter hover:translate-y-[2px] transition-transform font-headline uppercase"
                >
                  Get Your Free Blind Spot Report →
                </a>
                <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-white/50">
                  <a href="tel:+12134442229" className="hover:text-[#F27D24] transition-colors">(213) 444-2229</a>
                  <a href="https://calendly.com/theanswerengine-support/30min" className="hover:text-[#F27D24] transition-colors">Book Free Call</a>
                  <a href="mailto:support@theanswerengine.ai" className="hover:text-[#F27D24] transition-colors">support@theanswerengine.ai</a>
                </div>
              </div>
            </section>
          </div>
        </article>
      </div>
    </>
  );
}
