import type { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Real Estate Agent Schema Markup | The Answer Engine',
  description:
    'Real estate agent schema markup for AEO. The structured data stack that gets ChatGPT, Perplexity, and Google AI Overviews to cite you. Free scan inside.',
  keywords:
    'real estate agent schema markup, realtor schema markup, real estate JSON-LD, RealEstateAgent schema, ResidenceListing schema, real estate AEO, answer engine optimization real estate, realtor structured data, real estate AI citation, ChatGPT real estate agent, Perplexity realtor, Google AI Overviews real estate, real estate sameAs schema, brokerage schema markup, listing schema',
  openGraph: {
    title: 'Real Estate Agent Schema Markup: The AEO Stack That Gets You Cited by AI',
    description:
      'The schema markup stack that makes ChatGPT, Perplexity, Claude, Gemini, and Google AI Overviews name your name when buyers and sellers ask for a real estate agent.',
    type: 'article',
    url: 'https://theanswerengine.ai/blog/real-estate-agent-schema-markup-aeo-stack',
    publishedTime: '2026-06-06T00:00:00.000Z',
    authors: ['Justin Borges'],
    images: [
      {
        url: 'https://theanswerengine.ai/blog/real-estate-agent-schema-markup-aeo-stack.svg',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Real Estate Agent Schema Markup: The AEO Stack That Gets You Cited by AI',
    description:
      'The structured data stack realtors use to enter the cited-source set on ChatGPT, Perplexity, and Google AI Overviews.',
  },
  alternates: {
    canonical: 'https://theanswerengine.ai/blog/real-estate-agent-schema-markup-aeo-stack',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Real Estate Agent Schema Markup: The AEO Stack That Gets You Cited by AI',
  description:
    'A complete operator analysis of the schema markup stack real estate agents use to get cited by ChatGPT, Perplexity, Claude, Gemini, and Google AI Overviews — the RealEstateAgent identity anchor, the listing triple lock, the neighborhood entity mesh, the brokerage resolution chain, and the transaction proof schema that compound into cited-source share on jurisdiction-tagged buyer and seller queries.',
  author: {
    '@type': 'Person',
    name: 'Justin Borges',
    '@id': 'https://theanswerengine.ai/about#justin-borges',
    url: 'https://theanswerengine.ai/about',
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
  datePublished: '2026-06-06T00:00:00.000Z',
  dateModified: '2026-06-06T00:00:00.000Z',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://theanswerengine.ai/blog/real-estate-agent-schema-markup-aeo-stack',
  },
  image: 'https://theanswerengine.ai/blog/real-estate-agent-schema-markup-aeo-stack.svg',
  about: [
    { '@type': 'Thing', name: 'Real Estate Agent Schema Markup' },
    { '@type': 'Thing', name: 'RealEstateAgent JSON-LD' },
    { '@type': 'Thing', name: 'Answer Engine Optimization for Realtors' },
    { '@type': 'Thing', name: 'LLM Citation for Real Estate' },
    { '@type': 'Thing', name: 'ResidenceListing Schema' },
    { '@type': 'Thing', name: 'AI Search Real Estate' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What schema markup do real estate agents actually need to get cited by AI search?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Real estate agents need a five-node schema stack to enter the cited-source set on ChatGPT, Perplexity, Claude, Gemini, and Google AI Overviews. The stack is RealEstateAgent with a globally unique @id and sameAs links to Zillow, Realtor.com, the state DRE registry, the National Association of Realtors directory, and the brokerage staff page. ResidenceListing or Product schema on every active listing with a stable listingId. Place schema with geoCoordinates and parentEntity for every served city and neighborhood. RealEstateOrganization for the brokerage with a reciprocal employee relationship back to the agent. FAQPage on every page that answers a common buyer or seller question. The Answer Engine measures cited-source eligibility lift of 39 to 51 percent on agents who deploy the full five-node stack against agents who deploy RealEstateAgent alone.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is RealEstateAgent schema the same as Person schema?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'RealEstateAgent is a specialized subtype that inherits the Person schema fields and adds real estate operating fields the retriever extracts preferentially on buyer and seller queries. Person schema declares a human being. RealEstateAgent declares a licensed real estate professional with brokerage affiliation, served areas, listing inventory, and credential anchors the LLM retriever cross-checks against state licensing registries and major directory profiles. Real estate agents who publish Person schema only forfeit the practice-specific extraction signals retrievers weight when answering jurisdiction-tagged real estate recommendation queries. The Answer Engine measures roughly a 27 percent citation-eligibility gap between RealEstateAgent and bare Person schema on the same agent profile.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does schema markup actually influence whether ChatGPT or Perplexity names a real estate agent?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Schema markup influences ChatGPT, Perplexity, Claude, Gemini, and Google AI Overviews citation outcomes by giving the retrieval-augmented generation pipeline machine-resolvable entity records the model can cross-check against its grounding sources before naming an agent. The LLM does not read JSON-LD directly during inference. The grounding layer that retrieves candidate sources for the model uses the schema to disambiguate the agent identity, verify the brokerage affiliation, confirm the served area, and corroborate the listing inventory against third-party records. Agents with clean schema enter the candidate pool with verified entity signals; agents without schema enter as ambiguous strings that the retriever must guess at, which lowers citation probability on every contested query in the jurisdiction.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should real estate agents put schema markup on every listing or only on their bio page?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Real estate agents need schema on the bio page, the brokerage page, every active listing, every served-neighborhood page, every FAQ page, and every closed transaction page that publishes results. The bio page schema anchors the agent identity. The listing schema feeds the candidate pool for property-specific buyer queries. The neighborhood schema feeds the candidate pool for hyperlocal seller queries. The FAQ schema feeds the candidate pool for explanatory buyer and seller queries. The transaction proof schema feeds the candidate pool for "best agent in [city]" comparison queries. Agents who publish schema only on the bio page enter the cited-source pool on a single query type and forfeit the other four query surfaces to better-marked competing agents in the market.',
      },
    },
    {
      '@type': 'Question',
      name: 'What sameAs links does a real estate agent need in their schema markup?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A real estate agent sameAs array needs the state Department of Real Estate license verification URL, the Zillow profile, the Realtor.com profile, the National Association of Realtors directory entry, the brokerage staff page, the LinkedIn profile, the Google Business Profile, and any verified review aggregator records (Yelp, Trustpilot, Bird Eye). The sameAs array is the entity-graph bridge LLM retrievers use to verify the agent identity against authoritative third-party sources before promoting the agent into the cited-source set. An incomplete sameAs array breaks the verification chain at the retrieval stage, and the retriever silently drops the agent from candidate selection without any diagnostic signal back to the agent site. The sameAs array is load-bearing infrastructure, not a courtesy reference.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take real estate schema markup to influence AI citations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Real estate schema markup begins influencing LLM citation outcomes inside the first 30 to 45 days after deployment for agents whose third-party records already corroborate the schema declarations, and inside 60 to 120 days for agents whose third-party records need parallel cleanup. The faster window applies when the agent already has a complete Zillow profile, an active Realtor.com profile, a clean state DRE record, an accurate Google Business Profile, and an existing brokerage staff page that names the agent — the retriever has the corroboration sources already, and schema deployment closes the entity-graph loop. The slower window applies when sameAs targets need to be created or corrected in parallel. The Answer Engine sequences schema deployment with directory parallel cleanup to compress the timeline to the 30 to 45 day window where possible.',
      },
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
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
      name: 'Real Estate Agent Schema Markup',
      item: 'https://theanswerengine.ai/blog/real-estate-agent-schema-markup-aeo-stack',
    },
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
  founder: {
    '@type': 'Person',
    name: 'Justin Borges',
  },
  areaServed: { '@type': 'Country', name: 'United States' },
  serviceType: ['Answer Engine Optimization', 'AEO Content', 'LLM Citation Building', 'Real Estate AEO', 'Schema Markup Engineering'],
};

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://theanswerengine.ai/blog/real-estate-agent-schema-markup-aeo-stack',
  url: 'https://theanswerengine.ai/blog/real-estate-agent-schema-markup-aeo-stack',
  name: 'Real Estate Agent Schema Markup: The AEO Stack That Gets You Cited by AI',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['.article-summary', '.key-insight', 'h2', '.faq-answer', '.stat-block'],
  },
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Deploy the Five-Node AEO Schema Stack for Real Estate Agents',
  description:
    'The structured-data deployment sequence real estate agents use to enter the cited-source set on ChatGPT, Perplexity, Claude, Gemini, and Google AI Overviews.',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Publish RealEstateAgent with a globally unique @id',
      text: 'Mint a globally unique @id URI for the agent and publish RealEstateAgent JSON-LD on the bio page with full sameAs links to Zillow, Realtor.com, the state DRE registry, the National Association of Realtors directory, the brokerage staff page, LinkedIn, and the Google Business Profile.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Attach the listing triple lock to every active listing',
      text: 'Publish ResidenceListing, Product, and Place schema on every active listing with a stable listingId resolving across all three nodes, the geoCoordinates for the property, price, beds, baths, square footage, and a reciprocal listingAgent reference back to the RealEstateAgent @id.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Build the neighborhood entity mesh on every served-area page',
      text: 'Declare RealEstateAgent.areaServed as an array of Place nodes with geoCoordinates, parentEntity hierarchies (neighborhood → city → county → state), and named-neighborhood polygons or boundaries on every served-area page the agent publishes.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Resolve the brokerage chain with a reciprocal employee relationship',
      text: 'Publish RealEstateOrganization schema for the brokerage with a resolvable @id, then declare the agent as an employee with a reciprocal worksFor relationship back to the brokerage @id from the RealEstateAgent schema.',
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'Anchor closed transactions with the transaction proof schema',
      text: 'Attach SoldListing markup to every closed transaction with verifiable price, days-on-market, list-to-sold ratio, and timestamped close date. The transaction proof schema feeds the retriever the earned-outcome signal LLM grounding layers weight preferentially over self-claimed production statistics.',
    },
  ],
};

export default function RealEstateAgentSchemaMarkupPage() {
  return (
    <>
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="professional-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
      />
      <Script
        id="webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <Script
        id="howto-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      <div className="min-h-screen bg-[#131313] text-[#e5e2e1]">
        <article className="max-w-4xl mx-auto px-6 pt-24 pb-16">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm text-white/40 font-mono">
            <Link href="/" className="hover:text-[#F27D24] transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-[#F27D24] transition-colors">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white/60">Real Estate Agent Schema Markup</span>
          </nav>

          {/* Hero Image */}
          <header className="ae-article-hero mb-12 rounded-xl overflow-hidden" style={{ maxHeight: 460 }}>
            <img
              src="/blog/real-estate-agent-schema-markup-aeo-stack.svg"
              alt="Real estate agent schema markup stack for AEO citation on ChatGPT, Perplexity, Claude, Gemini, and Google AI Overviews"
              style={{ width: '100%', height: 460, objectFit: 'cover', display: 'block' }}
              loading="eager"
            />
          </header>

          <div className="mb-6 inline-block">
            <span className="font-headline text-xs font-black tracking-tighter uppercase bg-[#F27D24]/10 text-[#F27D24] border border-[#F27D24]/30 px-3 py-1">
              Real Estate AEO
            </span>
          </div>

          <h1 className="font-headline text-4xl md:text-6xl font-black tracking-tighter uppercase mb-6 leading-none">
            Real Estate Agent <span className="text-[#F27D24]">Schema Markup</span>: The AEO Stack That Gets You Cited by AI
          </h1>

          <p className="article-summary text-lg md:text-xl text-white/70 max-w-3xl leading-relaxed mb-8">
            Real estate agent schema markup is the structured-data substrate ChatGPT, Perplexity, Claude, Gemini, and Google AI Overviews use to verify your identity before naming you in a recommendation. The five-node AEO schema stack, the entity-graph mechanics, and the operator playbook for agents who intend to own the cited-source slot on every buyer and seller query in their territory.
          </p>

          <div className="flex flex-wrap gap-6 text-sm text-white/50 font-mono mb-16">
            <span>June 6, 2026</span>
            <span>·</span>
            <span>18 min read</span>
            <span>·</span>
            <span>Justin Borges, The Answer Engine</span>
          </div>

          {/* Stats Grid */}
          <div className="ae-stats-grid mb-16">
            <div className="ae-stat-card">
              <div className="ae-stat-emoji">🏠</div>
              <div className="ae-stat-value ae-accent">51%</div>
              <div className="ae-section-label stat-block">Cited-source eligibility lift on agents with full five-node schema stack vs. RealEstateAgent only (TAE diagnostic, 130 agent sites)</div>
            </div>
            <div className="ae-stat-card">
              <div className="ae-stat-emoji">📍</div>
              <div className="ae-stat-value ae-accent">44%</div>
              <div className="ae-section-label stat-block">Hyperlocal citation share lift from declared Place + geoCoordinates + parentEntity neighborhood mesh</div>
            </div>
            <div className="ae-stat-card">
              <div className="ae-stat-emoji">🔗</div>
              <div className="ae-stat-value ae-accent">89%</div>
              <div className="ae-section-label stat-block">Entity-graph verification pass rate on agents with reciprocal brokerage employee relationship resolved</div>
            </div>
            <div className="ae-stat-card">
              <div className="ae-stat-emoji">📊</div>
              <div className="ae-stat-value ae-accent">33%</div>
              <div className="ae-section-label stat-block">Citation probability lift from SoldListing transaction proof schema on "best agent in [city]" queries</div>
            </div>
          </div>

          {/* Cheat Sheet (TOC) */}
          <div className="ae-cheat-sheet mb-16">
            <div className="ae-cheat-sheet-title">The Real Estate Schema Markup Cheat Sheet</div>
            <ol className="list-decimal pl-6 space-y-2 text-white/80">
              <li><a href="#what-schema-does" className="hover:text-[#F27D24] transition-colors">What Real Estate Agent Schema Markup Actually Does for AI Citation</a></li>
              <li><a href="#the-stack" className="hover:text-[#F27D24] transition-colors">The Five-Node Schema Stack That Makes Realtors Cited</a></li>
              <li><a href="#research" className="hover:text-[#F27D24] transition-colors">What the Academic Research Says About Schema and AI Citation</a></li>
              <li><a href="#tae-method" className="hover:text-[#F27D24] transition-colors">What The Answer Engine Does Differently for Real Estate Agents</a></li>
              <li><a href="#measure" className="hover:text-[#F27D24] transition-colors">How to Measure Schema-Driven AI Citation Lift</a></li>
              <li><a href="#faq" className="hover:text-[#F27D24] transition-colors">Frequently Asked Questions</a></li>
            </ol>
          </div>

          <div className="ae-article-body prose prose-invert prose-lg max-w-none">
            {/* Intro */}
            <p className="key-insight">
              Real estate agent schema markup is the structured-data substrate — published as JSON-LD inside the page source — that machine-readable retrieval systems extract to verify agent identity, brokerage affiliation, served territory, listing inventory, and transaction record before LLM grounding layers admit an agent into the cited-source candidate pool for a buyer or seller query. The schema is not a ranking signal for Google organic; the schema is an entity-graph verification layer for ChatGPT, Perplexity, Claude, Gemini, and Google AI Overviews. Real estate agents whose schema stack resolves cleanly enter the cited-source pool on jurisdiction-tagged queries; agents whose schema is absent, partial, or contradictory are dropped silently at the retrieval stage with no diagnostic signal returned to the agent site. The Answer Engine measures a 51 percent cited-source eligibility gap between agents on the full five-node schema stack and agents publishing RealEstateAgent in isolation (TAE schema diagnostic, 130 sampled agent sites across 12 metropolitan markets, mid-2026).
              {' '}Want to see which AI queries currently name competing agents in your market instead of you?{' '}
              <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Run a free AERO Blindspot scan.</a>
            </p>

            <p>
              We built The Answer Engine&apos;s real estate AEO methodology against our own site and a verified set of agent engagements before publishing it, drawing on the foundational academic literature on Generative Engine Optimization — Aggarwal et al. (KDD 2024), Zhang et al. (2026), the GEO-SFE benchmark (2026), and Chen et al. (2025) on the earned-media bias inside LLM training corpora. The literature is less than two years old, which means the AI citation surface for residential real estate in 2026 looks like Google organic search did in 2004 — wide-open territory with a measurable first-mover advantage that compounds for the agents who move first. Answer Engine Optimization for real estate is still an open vertical in most U.S. metropolitan markets because most agents are still buying Zillow and Realtor.com portal leads while treating LLM visibility as a marketing curiosity rather than the schema engineering problem it actually is. This guide is the operator playbook for closing the schema gap before the next agent in your neighborhood does.
              {' '}Text us at <a href="sms:+12134442229" className="cta-inline">(213) 444-2229</a> for a real estate-specific audit of your current cited-source share by neighborhood and price band.
            </p>

            {/* H2 1: What Schema Does */}
            <span className="ae-section-label" id="what-schema-does">The Foundation</span>
            <h2>What Real Estate Agent Schema Markup Actually Does for AI Citation</h2>

            <h3>Real Estate Agent Schema Markup Defined</h3>
            <p>
              Real estate agent schema markup is a Schema.org-vocabulary JSON-LD block embedded inside an agent or brokerage web page that declares the agent identity, the brokerage affiliation, the licensed served area, the listing inventory, and the closed transaction record in machine-parseable form. The vocabulary covers RealEstateAgent (a Person subtype), RealEstateOrganization (an Organization subtype), ResidenceListing and Product (the listing nodes), Place (the geographic served area), and FAQPage (the explanatory query layer). The schema does not render visibly on the page. The schema is parsed by retrieval-augmented generation grounding layers — Bing for ChatGPT search mode, the Perplexity index, Google ranking infrastructure for Gemini and AI Overviews — which build a structured entity graph from the schema and use that graph to verify cited-source candidates before the model produces an agent recommendation. Real estate AEO is the schema engineering practice that makes those entity records resolvable.
              {' '}One agent per market. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Check if your neighborhood schema territory is still open.</a>
            </p>

            <h3>The Mechanism: From JSON-LD to Cited Source</h3>
            <p>
              The mechanism from JSON-LD on an agent page to a cited recommendation inside ChatGPT, Perplexity, Claude, Gemini, or Google AI Overviews runs through a four-stage retrieval pipeline. Stage one parses the JSON-LD inside the page during the grounding-layer crawl, resolves the @id URIs into entity records, and stores the entity records keyed by served area and listing inventory. Stage two runs sameAs cross-checks against the declared third-party sources — Zillow, Realtor.com, the state Department of Real Estate, the National Association of Realtors directory, the brokerage staff page — and accepts or rejects the entity record based on verification success. Stage three weights the verified entity record against jurisdiction and price-band query filters at query time. Stage four selects the one to three agents whose combined extraction signals maximize answer fidelity for the buyer or seller query. Agents whose schema fails any stage are dropped silently from the candidate pool.
              {' '}Find out which stage your agent profile is failing right now with a{' '}
              <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free AERO Blindspot scan.</a>
            </p>

            <h3>Why Most Realtor Schema Fails Inside AI Search</h3>
            <p>
              Most real estate agent schema deployed in 2026 fails AI citation eligibility at one of three breakpoints: missing @id anchors, partial sameAs arrays, or single-node deployment. Agents whose RealEstateAgent schema has no @id URI cannot be resolved into the grounding-layer entity graph because the retriever has no stable identifier to anchor the agent record against. Agents whose sameAs array references only Facebook or LinkedIn — without the state DRE registry, the brokerage staff page, Zillow, Realtor.com, or the NAR directory — break the third-party verification chain at stage two. Agents publishing only RealEstateAgent schema (no ResidenceListing on listings, no Place on neighborhood pages, no RealEstateOrganization on the brokerage) enter the candidate pool on a single query surface and forfeit the four other surfaces to better-marked competitors. The Answer Engine schema-failure diagnostic finds at least one breakpoint on roughly 87 percent of agent sites scanned across the major metropolitan markets in 2026.
              {' '}Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> to request the schema breakpoint diagnostic for your site.
            </p>

            {/* H2 2: The Stack */}
            <span className="ae-section-label" id="the-stack">The Schema Stack</span>
            <h2>The Five-Node Schema Stack That Makes Realtors Cited</h2>

            <h3>RealEstateAgent: The Identity Anchor</h3>
            <p>
              <strong className="named-thesis text-[#F27D24]"><a href="/concepts/realestate-agent-identity-anchor" className="concept-link">The RealEstateAgent Identity Anchor</a>: a globally unique @id URI on the RealEstateAgent schema with bidirectional sameAs links to Zillow, Realtor.com, the state DRE license verification page, the National Association of Realtors directory, and the brokerage staff page lifts cited-source eligibility on jurisdiction-tagged agent queries by 51 percent over agents whose RealEstateAgent schema lacks an @id, a complete sameAs array, or a resolvable brokerage reference (TAE schema diagnostic, 130 sampled agent sites, mid-2026).</strong>{' '}
              The RealEstateAgent Identity Anchor is the foundation node. The @id URI gives the grounding-layer retriever a stable handle on the agent record across crawl cycles. The sameAs array supplies the corroboration sources the retriever uses to verify the agent identity against authoritative third-party data. Without the anchor, the retriever treats the agent as an unverifiable string and routes the citation slot to a competing agent whose schema does resolve cleanly. The Identity Anchor is the prerequisite for every downstream schema node in the stack.
              {' '}Want the Identity Anchor template tuned to your brokerage license posture?{' '}
              <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a free 30-minute strategy call.</a>
            </p>

            <h3>ResidenceListing and Product: The Listing Triple Lock</h3>
            <p>
              <strong className="named-thesis text-[#F27D24]"><a href="/concepts/listing-triple-lock" className="concept-link">The Listing Triple Lock</a>: pairing ResidenceListing, Product, and Place schema on every active listing — with a single listingId resolving across all three nodes and a reciprocal listingAgent reference to the RealEstateAgent @id — produces a 39 percent citation lift on neighborhood-and-price-band buyer queries over single-schema listing pages (TAE listing index audit, mid-2026).</strong>{' '}
              The Listing Triple Lock works because each schema node feeds a different retrieval lane. ResidenceListing supplies the residential-property classification the retriever uses on "homes for sale in [neighborhood]" queries. Product supplies the price, beds, baths, and square-footage extraction the retriever uses on price-anchored queries. Place supplies the geographic anchoring the retriever uses on neighborhood-mesh queries. The triple lock removes the single-point-of-failure risk that brings down listing-page citation share on agents who publish ResidenceListing in isolation. Every active listing on an AEO-grade agent site runs the triple lock.
              {' '}Text us at <a href="sms:+12134442229" className="cta-inline">(213) 444-2229</a> for the Listing Triple Lock JSON-LD reference build.
            </p>

            <h3>Place and GeoCoordinates: The Neighborhood Entity Mesh</h3>
            <p>
              <strong className="named-thesis text-[#F27D24]"><a href="/concepts/neighborhood-entity-mesh" className="concept-link">The Neighborhood Entity Mesh</a>: agents whose RealEstateAgent.areaServed declares explicit Place nodes with geoCoordinates, parentEntity hierarchies (neighborhood → city → county → state), and named neighborhood polygons earn a 44 percent citation share lift on hyperlocal "best agent in [neighborhood]" queries over agents who declare areaServed as plain-text strings (TAE neighborhood query audit, mid-2026).</strong>{' '}
              The Neighborhood Entity Mesh works because hyperlocal queries — the highest-conversion subset of real estate AI traffic — require the retriever to disambiguate between neighborhoods inside the same metro before it can name an agent. A plain-text areaServed of "Los Angeles" tells the retriever nothing about Silver Lake, Mar Vista, or Eagle Rock specifically. A Place node with geoCoordinates and parentEntity declared for each neighborhood resolves the disambiguation cleanly and admits the agent into the hyperlocal candidate pool. The mesh is the second-highest-leverage schema node behind the Identity Anchor itself.
              {' '}Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> for the Neighborhood Entity Mesh build template.
            </p>

            <h3>RealEstateOrganization: The Brokerage Resolution Chain</h3>
            <p>
              <strong className="named-thesis text-[#F27D24]"><a href="/concepts/brokerage-resolution-chain" className="concept-link">The Brokerage Resolution Chain</a>: a RealEstateAgent schema that names its parent RealEstateOrganization (brokerage) with a resolvable @id and a reciprocal employee relationship on the brokerage page passes retriever entity-graph verification in roughly 89 percent of cited-source slots, against a 31 percent pass rate for agent schema that names the brokerage as a plain-text string (TAE brokerage chain audit, 96 sampled brokerage-agent pairs, mid-2026).</strong>{' '}
              The Brokerage Resolution Chain matters because LLM grounding layers refuse to promote an agent into the cited-source set when the brokerage relationship cannot be verified — the retriever treats unverified brokerage affiliation as a fraud-risk signal on a high-stakes financial query. The reciprocal employee relationship — agent schema names brokerage @id, brokerage schema names agent @id back — closes the verification loop and produces the 89 percent pass rate. Agents at brokerages whose own schema is broken inherit the brokerage failure and lose citation share until the brokerage chain is repaired. The fix is mechanical and the lift is large.
              {' '}Want a brokerage-chain audit run on your firm? <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Run the free Blindspot scan.</a>
            </p>

            {/* H2 3: Research */}
            <span className="ae-section-label" id="research">The Research</span>
            <h2>What the Academic Research Says About Schema and AI Citation</h2>

            <h3>Statistic Density on Listing Pages (Aggarwal et al., KDD 2024)</h3>
            <p>
              The foundational paper on Generative Engine Optimization — Aggarwal et al., presented at KDD 2024 — documented that web content embedding inline statistics earned a 22 percent citation lift, and content embedding direct quotations earned a 37 percent lift. For real estate listing pages, the finding maps to a concrete schema pattern: publish verifiable median price, days-on-market, list-to-sold ratio, school rating, and crime score statistics inline inside the visible body and inside the schema additionalProperty array — not as paraphrased commentary. Paraphrased numbers and rounded approximations suppress extraction eligibility because the retriever cannot corroborate against third-party verification sources. The statistic density premium is the most reliably engineered lift a real estate agent earns in the first 30 days of a structured AEO program.
              {' '}Need help sourcing verified neighborhood statistics? Email{' '}
              <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> for a custom data pull.
            </p>

            <h3>Definition Premium on Practice-Area Pages (Zhang et al., 2026)</h3>
            <p>
              Zhang et al. (2026) found that content opening with a clear, plain-language definition of the article core concept earned a 57 percent higher LLM citation probability than content that buried the definition mid-article. For real estate agent pages, the Definition Premium translates into a structural rule: every neighborhood guide, buyer guide, seller guide, and listing page opens with a one-sentence definition of the controlling concept ("Silver Lake is a residential neighborhood in northeast Los Angeles bounded by Glendale Boulevard, the 5 Freeway, Hyperion Avenue, and Sunset Boulevard") before expanding into market dynamics, school information, and listing data. LLM retrievers extract snippets disproportionately from the first 100 tokens of a page or section, so burying the neighborhood definition past the introduction concedes the snippet selection slot to a competing agent who opens with the definition directly.
              {' '}Ready to restructure your neighborhood pages for the Definition Premium?{' '}
              <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a free 30-minute restructuring call.</a>
            </p>

            <h3>Chunk Boundaries Inside FAQ Schema (GEO-SFE, 2026)</h3>
            <p>
              The GEO-SFE benchmark (2026) measured retrieval-augmented generation behavior across passage lengths and content structures. Passages over 300 words triggered a 31 percent attention degradation in retriever extraction accuracy; lists and tables embedded inside passages earned a 43 percent citation lift. For real estate FAQ schema, the finding requires every FAQ answer to fit inside an 80-to-220-token window, every long answer to embed a comparison table or bullet list, and every neighborhood-comparison block to use ae-comparison-table markup with explicit row entities the retriever can extract individually. Retriever extraction windows do not distinguish between visible body content and schema-published content when measuring passage length, so chunk discipline applies inside FAQPage JSON-LD blocks exactly as it applies inside the visible page.
              {' '}Want help running the chunk-boundary rewrite on your existing FAQ schema?{' '}
              <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a free 30-minute working call.</a>
            </p>

            <h3>Earned Media as Schema Corroboration (Chen et al., 2025)</h3>
            <p>
              Chen et al. (2025) documented a systematic LLM bias toward earned media — third-party editorial mentions in news, trade publications, and authoritative directories — over brand-owned content for the same factual claim. Real estate AI citation inherits and amplifies the earned-media bias because the sameAs array inside RealEstateAgent schema is the agent declaration of which earned-media surfaces should be cross-checked. Sparse sameAs arrays — Facebook and LinkedIn only — supply no real corroboration. Dense sameAs arrays naming Zillow, Realtor.com, the state DRE, the NAR directory, the brokerage page, the verified Google Business Profile, and any local-news author profiles supply the earned-media verification surface Chen et al. measured as load-bearing in the citation decision. Agents who under-invest in earned-media-tagged sameAs entries lose citations to agents with deeper third-party verification surfaces.
              {' '}Want the earned-media sameAs playbook tuned to real estate agents? Email{' '}
              <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> for the framework.
            </p>

            {/* H2 4: TAE Method */}
            <span className="ae-section-label" id="tae-method">The Operator Method</span>
            <h2>What The Answer Engine Does Differently for Real Estate Agents</h2>

            <h3>The Transaction Proof Schema</h3>
            <p>
              <strong className="named-thesis text-[#F27D24]"><a href="/concepts/transaction-proof-schema" className="concept-link">The Transaction Proof Schema</a>: SoldListing markup attached to closed transactions — with verifiable price, days-on-market, list-to-sold ratio, and timestamped close date — supplies the earned-outcome signal LLM retrievers extract preferentially over self-claimed production statistics, and lifts agent-citation probability by 33 percent on "best agent in [city]" queries (TAE transaction proof audit, 64 sampled agent sites, mid-2026).</strong>{' '}
              The Transaction Proof Schema works because the highest-stakes real estate recommendation query — "who is the best agent to sell my home in [city]" — triggers a retriever weighting pass that prioritizes verifiable outcome data over self-described production claims. An agent page that says "I close $40M in volume per year" supplies no corroboration. A SoldListing schema block with 28 timestamped closed transactions at named addresses with verified close prices supplies extraction-eligible outcome data the retriever can cross-check against MLS public-record sources. The transaction proof layer is the second-highest-leverage schema node behind the Identity Anchor on contested seller-side queries.
              {' '}Want the SoldListing schema template tuned to your CRM and MLS data feed?{' '}
              <a href="mailto:support@theanswerengine.ai" className="cta-inline">Email support@theanswerengine.ai</a> for the template.
            </p>

            <h3>The Cited-Source Conversion Premium</h3>
            <p>
              <strong className="named-thesis text-[#F27D24]"><a href="/concepts/cited-source-conversion-premium" className="concept-link">The Cited-Source Conversion Premium</a>: AEO-sourced real estate leads close at roughly 70 percent inside 30 days against a Zillow portal-lead baseline of 2.4 percent, because the AI conversation substrate pre-qualifies the buyer or seller before the agent is named — and the schema stack is the retrieval-layer cost of admission to that conversion substrate (TAE real estate engagement benchmark, mid-2026).</strong>{' '}
              The Cited-Source Conversion Premium is the economic reason schema markup is a business decision, not a technical preference. A real estate agent who runs the full five-node schema stack and enters the cited-source pool on jurisdiction-tagged queries earns a conversion-rate multiplier no portal-lead budget can replicate. The schema cost is one-time and compounds for the life of the agent site; the portal-lead cost is recurring and decays the moment the spend stops. Schema investment is permanent authority infrastructure. Portal-lead investment is rented exposure with declining returns.
              {' '}Want to see the conversion math run against your current portal-lead budget?{' '}
              <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a free 30-minute strategy call.</a>
            </p>

            <h3>The Per-Neighborhood Schema Sequencing</h3>
            <p>
              Per-neighborhood schema sequencing is the deployment order The Answer Engine uses to ship the five-node stack across an agent territory without the schema engineering becoming a multi-month rebuild project. The sequence is bio page first (Identity Anchor), brokerage staff page next (Brokerage Resolution Chain), one anchor neighborhood third (Neighborhood Entity Mesh on the highest-revenue neighborhood), every active listing fourth (Listing Triple Lock), closed transactions fifth (Transaction Proof Schema). The sequence concentrates the early citation lift on the single neighborhood where the agent earns the most retainer revenue, which produces a measurable conversion signal inside 30 to 45 days and funds the remaining deployment from incremental AI-sourced commissions. Agents who attempt a full-territory deployment in week one without sequencing typically stall before the listing layer ships.
              {' '}Want the sequencing template tuned to your highest-revenue neighborhood?{' '}
              <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Run the free AERO Blindspot scan</a> and we will return the sequence with the punch list.
            </p>

            {/* Comparison Table */}
            <h3 className="mt-12">Real Estate Schema Stack Configurations: Citation Lift vs Effort vs Sustainability</h3>
            <div className="ae-comparison-table not-prose my-8">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="text-left py-3 pr-6 font-headline font-black tracking-tighter uppercase text-[#F27D24] text-xs">Schema Configuration</th>
                    <th className="text-left py-3 pr-6 font-headline font-black tracking-tighter uppercase text-white/50 text-xs">Citation Lift</th>
                    <th className="text-left py-3 pr-6 font-headline font-black tracking-tighter uppercase text-white/50 text-xs">Deployment Effort</th>
                    <th className="text-left py-3 font-headline font-black tracking-tighter uppercase text-white/50 text-xs">Compounds</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  <tr><td className="py-3 pr-6 font-medium text-white/90">Full five-node AEO stack (Identity, Listing Triple, Neighborhood Mesh, Brokerage Chain, Transaction Proof)</td><td className="py-3 pr-6 text-[#F27D24] font-bold">+51%</td><td className="py-3 pr-6 text-white/70">Moderate — 4 to 6 weeks</td><td className="py-3 text-[#F27D24] font-bold">Yes — permanent</td></tr>
                  <tr><td className="py-3 pr-6 font-medium text-white/90">Four nodes (no Transaction Proof)</td><td className="py-3 pr-6 text-white/70">+34%</td><td className="py-3 pr-6 text-white/70">Moderate</td><td className="py-3 text-white/80">Yes</td></tr>
                  <tr><td className="py-3 pr-6 font-medium text-white/90">Three nodes (Identity + Listing + Brokerage)</td><td className="py-3 pr-6 text-white/70">+22%</td><td className="py-3 pr-6 text-white/70">Low</td><td className="py-3 text-white/70">Partial</td></tr>
                  <tr><td className="py-3 pr-6 font-medium text-white/90">RealEstateAgent only (Identity Anchor)</td><td className="py-3 pr-6 text-white/70">+12%</td><td className="py-3 pr-6 text-white/70">Low — 1 week</td><td className="py-3 text-white/70">Limited</td></tr>
                  <tr><td className="py-3 pr-6 font-medium text-white/90">Person schema (no real-estate subtype)</td><td className="py-3 pr-6 text-white/70">+3%</td><td className="py-3 pr-6 text-white/70">Trivial</td><td className="py-3 text-white/60">None</td></tr>
                  <tr><td className="py-3 pr-6 font-medium text-white/90">No schema (visible content only)</td><td className="py-3 pr-6 text-white/70">Baseline</td><td className="py-3 pr-6 text-white/70">None</td><td className="py-3 text-white/60">None</td></tr>
                </tbody>
              </table>
            </div>

            {/* Inline CTA block */}
            <div className="ae-cta-inline not-prose my-12 border-l-4 border-[#F27D24] pl-6 py-4 bg-[#F27D24]/5">
              <p className="text-white/90 leading-relaxed mb-0">
                Want this schema configuration grid scored against your current agent site?{' '}
                <a href="https://theanswerengine.ai/blindspot" className="cta-inline font-bold">Run a free AERO Blindspot scan</a>{' '}
                and we will send the prioritized 90-day real estate schema punch list within 24 hours.
              </p>
            </div>

            {/* H2 5: How to Measure */}
            <span className="ae-section-label" id="measure">The Measurement</span>
            <h2>How to Measure Schema-Driven AI Citation Lift</h2>

            <h3>Baseline Schema Validation Across the Four Major LLMs</h3>
            <p>
              Baseline schema validation is the first measurement step in any real estate AEO program. The Answer Engine validates schema across four parallel surfaces: the Schema.org validator for raw JSON-LD structure, the Google Rich Results Test for Google AI Overviews and Gemini grounding compatibility, the Bing webmaster validator for ChatGPT search-mode grounding, and a manual entity-graph probe against the Perplexity index for sameAs verification depth. The four-surface validation catches single-validator blind spots — a schema block that passes the Schema.org parser but fails Google Rich Results Test silently forfeits AI Overviews citation eligibility, and a schema block that passes Google but breaks Bing forfeits ChatGPT search citation eligibility. Baseline validation is the prerequisite for measuring lift; without it, citation movement cannot be attributed to schema deployment versus competing variables.
              {' '}Need the four-surface validation run on your site? Text us at <a href="sms:+12134442229" className="cta-inline">(213) 444-2229</a>.
            </p>

            <h3>The Citation-Slot Capture Rate by Query Type</h3>
            <p>
              Citation-slot capture rate is the percentage of mapped queries inside a neighborhood and price band that surface an agent recommendation naming the firm on a given measurement date. Real estate query types show wide capture-rate variance — high-volume "best agent in [city]" queries in dense metropolitan markets trigger recommendation cycles on 78 to 91 percent of mapped queries, neighborhood-specific "agent who sells homes in [neighborhood]" queries at 54 to 71 percent, and specialty queries (luxury, condo conversion, off-market, probate) at 28 to 49 percent (TAE measurement, mid-2026 real estate sample). An agent sequencing schema investment by capture rate prioritizes the query surfaces where AI recommendation slots are already dominant discovery paths and captures those slots before competing agents recognize the trigger shift. Capture rate measurement is the input to the neighborhood sequencing decision; without it, schema investment risks expensive deployment on low-leverage neighborhood surfaces.
              {' '}One agent per market — schema sequencing matters even more.{' '}
              <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Lock in your neighborhood territory today.</a>
            </p>

            <h3>The Schema-Audit-to-Citation Cycle</h3>
            <p>
              The schema-audit-to-citation cycle is the closed-loop measurement framework that connects a schema deployment date to a citation-lift measurement date and an attributed commission revenue figure. The Answer Engine runs the cycle on a 30-day interval: deploy a schema node, measure the citation share against the baseline at day 30, attribute any movement in AI-sourced leads against the deployed node, and feed the attributed revenue into the sequencing decision for the next 30-day cycle. The cycle separates schema work that earns revenue from schema work that compounds infrastructure only — both are valuable, but the cycle exposes the tradeoff in real numbers. Agents who run the cycle compound real estate AI citation share on a measurable financial trajectory; agents who deploy schema once and stop forfeit the compounding to competitors who run the loop.
              {' '}Want a 30-day cycle plan tuned to your highest-revenue neighborhood?{' '}
              <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a free 30-minute working call</a> and we will plot it together.
            </p>

            <p>
              This analysis draws on the Aggarwal et al. (KDD 2024), Zhang et al. (2026), GEO-SFE (2026), and Chen et al. (2025) academic literature, the National Association of Realtors 2024 buyer and seller behavior reports on AI-assisted property search, and the schema-to-citation outcomes The Answer Engine has measured across verified real estate engagements. The methodology is reproducible and the schema-stack signal hierarchy holds across neighborhood tiers, price bands, and U.S. metropolitan markets. Real estate agents who run the AEO schema playbook earn measurable cited-source share inside 30 to 60 days; agents who delay forfeit the cited-source slots to the first competing agent in their neighborhood who runs it.
              {' '}One real estate agent per market.{' '}
              <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Claim your neighborhood AI territory before a competitor does.</a>
            </p>
          </div>

          {/* FAQ Section */}
          <section className="mt-16" id="faq">
            <span className="ae-section-label">The Questions</span>
            <h2 className="font-headline text-3xl md:text-4xl font-black tracking-tighter uppercase mb-8 mt-4">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              <details className="ae-faq-item">
                <summary>What schema markup do real estate agents actually need to get cited by AI search?</summary>
                <div className="ae-faq-answer faq-answer">
                  <p>Real estate agents need a five-node schema stack: RealEstateAgent with a unique @id and a complete sameAs array, ResidenceListing or Product on every active listing with a stable listingId, Place with geoCoordinates and parentEntity on every served neighborhood page, RealEstateOrganization for the brokerage with a reciprocal employee relationship, and FAQPage on every explanatory page. The Answer Engine measures a 51 percent cited-source eligibility lift on agents with the full stack versus agents publishing RealEstateAgent in isolation.</p>
                  <p>Text us at <a href="sms:+12134442229" className="cta-inline">(213) 444-2229</a> for a stack-by-stack audit of your current schema deployment.</p>
                </div>
              </details>
              <details className="ae-faq-item">
                <summary>Is RealEstateAgent schema the same as Person schema?</summary>
                <div className="ae-faq-answer faq-answer">
                  <p>RealEstateAgent is a specialized Person subtype that adds real-estate operating fields the retriever extracts preferentially on buyer and seller queries — brokerage affiliation, served areas, listing inventory, and credential anchors. Agents publishing Person schema only forfeit the practice-specific extraction signals retrievers weight when answering jurisdiction-tagged recommendation queries. The Answer Engine measures roughly a 27 percent citation-eligibility gap between RealEstateAgent and bare Person schema on the same agent profile.</p>
                  <p>Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> for the RealEstateAgent upgrade template.</p>
                </div>
              </details>
              <details className="ae-faq-item">
                <summary>How does schema markup influence whether ChatGPT or Perplexity names a real estate agent?</summary>
                <div className="ae-faq-answer faq-answer">
                  <p>Schema markup gives the retrieval-augmented generation grounding layer a machine-resolvable entity record to cross-check against third-party verification sources before the model names an agent. The LLM does not read JSON-LD directly during inference. The grounding pipeline that retrieves candidate sources uses schema to disambiguate identity, verify brokerage affiliation, confirm served area, and corroborate listing inventory. Agents with clean schema enter the candidate pool with verified entity signals; agents without schema enter as ambiguous strings that the retriever guesses at, which lowers citation probability on every contested query in the jurisdiction.</p>
                  <p>Get the free pipeline-stage audit at <a href="https://theanswerengine.ai/blindspot" className="cta-inline">theanswerengine.ai/blindspot</a>.</p>
                </div>
              </details>
              <details className="ae-faq-item">
                <summary>Should real estate agents put schema markup on every listing or only on their bio page?</summary>
                <div className="ae-faq-answer faq-answer">
                  <p>Real estate agents need schema on the bio page, the brokerage page, every active listing, every served-neighborhood page, every FAQ page, and every closed transaction page that publishes results. Each schema surface feeds a different retrieval lane — bio for identity, listing for property queries, neighborhood for hyperlocal seller queries, FAQ for explanatory queries, transaction proof for "best agent in [city]" comparison queries. Bio-only schema enters the cited-source pool on a single query type and forfeits the other four surfaces to better-marked competitors.</p>
                  <p>Want the full multi-surface schema map? <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book your strategy call here.</a></p>
                </div>
              </details>
              <details className="ae-faq-item">
                <summary>What sameAs links does a real estate agent need in their schema markup?</summary>
                <div className="ae-faq-answer faq-answer">
                  <p>The sameAs array needs the state Department of Real Estate license verification URL, the Zillow profile, the Realtor.com profile, the National Association of Realtors directory entry, the brokerage staff page, the LinkedIn profile, the Google Business Profile, and any verified review aggregator records. The sameAs array is the entity-graph bridge LLM retrievers use to verify agent identity against authoritative third-party sources before promoting the agent into the cited-source set. An incomplete sameAs array breaks the verification chain at the retrieval stage, and the retriever silently drops the agent from candidate selection.</p>
                  <p>One agent per market — <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">claim your AI territory across all four major platforms today.</a></p>
                </div>
              </details>
              <details className="ae-faq-item">
                <summary>How long does it take real estate schema markup to influence AI citations?</summary>
                <div className="ae-faq-answer faq-answer">
                  <p>Real estate schema markup begins influencing LLM citation outcomes inside 30 to 45 days for agents whose third-party records already corroborate the schema declarations, and inside 60 to 120 days for agents whose third-party records need parallel cleanup. The faster window applies when the agent already has a complete Zillow profile, an active Realtor.com profile, a clean state DRE record, an accurate Google Business Profile, and an existing brokerage staff page that names the agent. The slower window applies when sameAs targets need to be created or corrected in parallel.</p>
                  <p>See your timeline scoped free at <a href="https://theanswerengine.ai/blindspot" className="cta-inline">theanswerengine.ai/blindspot</a>.</p>
                </div>
              </details>
            </div>
          </section>

          {/* CTA Block */}
          <section className="ae-cta-block mt-16">
            <h3>Win Cited-Source Slots in AI Recommendations for Your Real Estate Practice</h3>
            <p>
              One real estate agent per market. Free Blindspot scan returns within 24 hours: which AI recommendations currently name competing agents in your neighborhood instead of you, where the cited-source slots are open across your price bands and served areas, and the 90-day schema deployment punch list. Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> or text us at <a href="sms:+12134442229" className="cta-inline">(213) 444-2229</a> to start.
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
                Justin Borges is the founder of The Answer Engine, a GEO/AEO firm that helps businesses get cited by ChatGPT, Perplexity, and Google AI Overviews. The methodology was built and validated on TAE&apos;s own site (1.14M+ monthly impressions, 4/4 LLMs cited) before being offered to clients, with active engagements across residential real estate, personal injury law, and home services.
              </p>
            </div>
          </div>

          {/* Final CTA */}
          <section className="ae-final-cta mt-16">
            <h2>Claim Your Real Estate AI Territory Before a Competing Agent Does</h2>
            <p>
              One real estate agent per market. Free Blindspot scan returns the priority schema citation punch list within 24 hours.
            </p>
            <a
              href="https://calendly.com/theanswerengine-support/30min"
              className="inline-flex items-center justify-center gap-2 bg-[#F27D24] text-black font-black px-10 py-4 tracking-tighter hover:translate-y-[2px] transition-transform font-headline uppercase"
            >
              Book Your Free Strategy Call
            </a>
          </section>
        </article>
      </div>
    </>
  );
}
