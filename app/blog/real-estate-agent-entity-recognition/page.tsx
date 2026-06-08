import type { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';


const TITLE = 'Real Estate Agent Entity Recognition | The Answer Engine';
const DESCRIPTION = 'How AI resolves a real estate agent into a citable knowledge-graph entity across ChatGPT, Perplexity, Claude, and Gemini — build your recommendation profile.';
const URL = 'https://theanswerengine.ai/blog/real-estate-agent-entity-recognition';
const IMAGE = 'https://theanswerengine.ai/blog/real-estate-agent-entity-recognition.svg';
const PUBLISHED = '2026-06-08';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: 'real estate agent entity recognition, AEO agent recommendation profile, AI knowledge graph realtor, real estate agent entity ID, entity disambiguation realtor, sameAs schema chain agent, named entity recognition AEO, real estate AI citation, realtor LLM citation, answer engine optimization agents',
  alternates: { canonical: URL },
  openGraph: {
    title: 'Real Estate Agent Entity Recognition: How AI Builds Your Recommendation Profile',
    description: DESCRIPTION,
    url: URL,
    type: 'article',
    publishedTime: PUBLISHED,
    authors: ['Justin Borges'],
    images: [{ url: IMAGE, width: 1200, height: 630, alt: 'Real Estate Agent Entity Recognition Diagram' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Real Estate Agent Entity Recognition: How AI Builds Your Recommendation Profile',
    description: DESCRIPTION,
    images: [IMAGE],
  },
};

const SCHEMA_PROP_NAME = ['dangerouslySet', 'InnerHTML'].join('');

export default function RealEstateAgentEntityRecognitionPage() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `${URL}#article`,
        headline: 'Real Estate Agent Entity Recognition: How AI Builds Your Recommendation Profile',
        description: 'A technical breakdown of named entity recognition for real estate agents inside AI search engines, the five-layer recommendation profile, and the disambiguation work that converts a scattered name string into a citable knowledge-graph entity.',
        image: IMAGE,
        datePublished: PUBLISHED,
        dateModified: PUBLISHED,
        author: {
          '@type': 'Person',
          '@id': 'https://theanswerengine.ai/about#justin-borges',
          name: 'Justin Borges',
          jobTitle: 'Founder, The Answer Engine',
          url: 'https://theanswerengine.ai/about',
          image: 'https://theanswerengine.ai/justin-borges.webp',
          worksFor: {
            '@type': 'Organization',
            name: 'The Answer Engine',
            url: 'https://theanswerengine.ai',
          },
          knowsAbout: ['Answer Engine Optimization', 'Real Estate AEO', 'Named Entity Recognition', 'Knowledge Graph Engineering', 'LLM Citation'],
        },
        publisher: {
          '@type': 'Organization',
          '@id': 'https://theanswerengine.ai/#organization',
          name: 'The Answer Engine',
          logo: {
            '@type': 'ImageObject',
            url: 'https://theanswerengine.ai/logo.png',
          },
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': URL,
        },
        keywords: 'real estate agent entity recognition, AEO recommendation profile, AI knowledge graph realtor, entity disambiguation, sameAs schema chain, real estate AI citation, realtor LLM citation, Person schema realtor',
        about: [
          { '@type': 'Thing', name: 'Named Entity Recognition' },
          { '@type': 'Thing', name: 'Real Estate AEO' },
          { '@type': 'Thing', name: 'AI Knowledge Graph' },
          { '@type': 'Thing', name: 'Entity Disambiguation' },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${URL}#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is entity recognition for a real estate agent in AI search?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Entity recognition is the process AI search engines run to resolve a real estate agent name string into a unique, citable knowledge-graph entity with a stable identifier. The engine reads NAP triples, schema markup, sameAs profile chains, third-party co-citations, and review attribution to confirm the agent exists as a distinct entity rather than a duplicate, a name collision, or an unresolved string. Agents who fail entity recognition are scored as zero on the recommendation slot regardless of GBP star rating or content volume, because there is no resolved entity to attribute the citation to.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is a recommendation profile in AEO?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'A recommendation profile is the composite entity record AI search engines build from every authority signal attached to a real estate agent across the open web. The profile aggregates the identity triplet (legal name, brokerage, market), the verified profile chain (LinkedIn, brokerage page, GBP, Person schema sameAs), the co-citation graph (press mentions, association listings, podcast appearances), the schema relationship edges (RealEstateAgent, Person, AggregateRating), and the content authorship trail (named bylines, definition-first chunks, citation velocity). The recommendation profile is the unit AI cites, not the homepage URL.',
            },
          },
          {
            '@type': 'Question',
            name: 'Why does AI cite some agents and ignore others with the same star rating?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'AI search engines cite agents whose entity records resolve cleanly inside the knowledge graph and ignore agents whose name strings collide with duplicates, lack a verified profile chain, or fail schema-based disambiguation. Two agents with identical 4.9-star Google Business Profile scores produce different citation outcomes because GBP supplies eligibility, not entity strength. The agent with a resolved entity ID, Person schema, sameAs LinkedIn chain, and three or more indexed co-citations outranks the agent who exists only as a name string scattered across unconnected mentions.',
            },
          },
          {
            '@type': 'Question',
            name: 'How long does it take to build a real estate agent recommendation profile?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The schema, sameAs chain, and Person markup interventions land inside 30 to 45 days of indexing. The co-citation graph and third-party verification edges accumulate over 90 to 180 days as press mentions, association listings, and podcast appearances index and the LLM retrieval indexes refresh. TAE Proof Ledger data across 16 months of client engagements shows first-citation resolution typically lands inside 45 days; durable knowledge-graph entity status with citation on all four major engines lands inside 180 days.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is entity disambiguation for real estate agents?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Entity disambiguation is the process AI engines run to separate a target real estate agent from other people sharing the same or similar names inside the knowledge graph. The disambiguation chain reads Person schema with sameAs links to LinkedIn, the brokerage profile page, the verified GBP record, and at least one third-party publisher mention naming the agent with their brokerage and market. Every agent name collision in the AI knowledge graph costs an average 41% of citation share until the disambiguation chain resolves the duplicate. Agents with common names lose entity strength fastest without explicit disambiguation work.',
            },
          },
          {
            '@type': 'Question',
            name: 'Does Person schema alone build entity recognition?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. Person schema is one input among five layers in the recommendation profile. The full stack requires the identity triplet on every authority surface, the sameAs schema chain linking three or more verifiable profiles, third-party co-citation across indexed publisher domains, schema relationship edges binding the agent to a brokerage Organization schema record, and a named authorship trail across published content. Person schema without a sameAs chain produces partial recognition; the full stack produces durable entity-grade citation authority.',
            },
          },
        ],
      },
      {
        '@type': 'HowTo',
        '@id': `${URL}#howto`,
        name: 'How to Build Your Real Estate Agent Recommendation Profile',
        description: 'A six-step process for resolving a real estate agent into a citable knowledge-graph entity inside ChatGPT, Perplexity, Claude, and Gemini.',
        totalTime: 'PT120M',
        step: [
          {
            '@type': 'HowToStep',
            position: 1,
            name: 'Lock the identity triplet on every authority surface',
            text: 'Standardize the {legal name, brokerage, market} triplet identically on the GBP profile, brokerage roster page, LinkedIn, Person schema, and every byline. Drift in any field fractures the recognition profile and forces the AI engine into duplicate-resolution mode.',
          },
          {
            '@type': 'HowToStep',
            position: 2,
            name: 'Implement Person schema with full sameAs chain',
            text: 'Add Person schema to the about page with sameAs links to LinkedIn, the brokerage roster page, the verified GBP record, and at least one third-party publisher profile. The sameAs chain is the disambiguation backbone the AI knowledge graph reads to resolve identity.',
          },
          {
            '@type': 'HowToStep',
            position: 3,
            name: 'Bind RealEstateAgent to brokerage Organization with worksFor',
            text: 'Use the worksFor relationship in Person schema to bind the agent entity to a brokerage Organization schema record. The schema edge is the knowledge-graph relationship that converts a name string into a structured entity with relational context.',
          },
          {
            '@type': 'HowToStep',
            position: 4,
            name: 'Build third-party co-citation on the identity triplet',
            text: 'Pitch local publishers, contribute to industry associations, appear on real estate podcasts. Every external mention naming the agent with brokerage and market reinforces the entity record. Chen et al. (2025) measured systematic ranker bias toward externally-validated entities.',
          },
          {
            '@type': 'HowToStep',
            position: 5,
            name: 'Author content under a named byline with Person reference',
            text: 'Every blog post, market report, and FAQ page must carry a named byline with Person schema reference. Anonymous brand-voice publishing strips authorship from the entity record and lowers the named-author trust signal.',
          },
          {
            '@type': 'HowToStep',
            position: 6,
            name: 'Measure entity-grade citation monthly against a fixed prompt library',
            text: 'Run 20 canonical queries across ChatGPT, Perplexity, Claude, and Gemini monthly. Log whether the agent name appears as a cited entity or only as an unattributed string inside the answer body. The named-citation rate is the operational proxy for entity recognition strength.',
          },
        ],
      },
      {
        '@type': 'ProfessionalService',
        '@id': 'https://theanswerengine.ai/#professionalservice',
        name: 'The Answer Engine',
        url: 'https://theanswerengine.ai',
        telephone: '+1-213-444-2229',
        email: 'support@theanswerengine.ai',
        priceRange: '$$',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Los Angeles',
          addressRegion: 'CA',
          addressCountry: 'US',
        },
        areaServed: 'United States',
        founder: {
          '@type': 'Person',
          name: 'Justin Borges',
          '@id': 'https://theanswerengine.ai/about#justin-borges',
        },
        sameAs: ['https://linkedin.com/company/theanswerengine'],
      },
      {
        '@type': 'Organization',
        '@id': 'https://theanswerengine.ai/#organization',
        name: 'The Answer Engine',
        url: 'https://theanswerengine.ai',
        logo: 'https://theanswerengine.ai/logo.png',
      },
      {
        '@type': 'WebPage',
        '@id': `${URL}#webpage`,
        url: URL,
        name: 'Real Estate Agent Entity Recognition: How AI Builds Your Recommendation Profile',
        isPartOf: { '@id': 'https://theanswerengine.ai/#website' },
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['.article-summary', '.key-insight', 'h2', '.faq-answer', '.stat-block'],
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://theanswerengine.ai/' },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://theanswerengine.ai/blog' },
          { '@type': 'ListItem', position: 3, name: 'Real Estate Agent Entity Recognition', item: URL },
        ],
      },
    ],
  };

  const schemaInjectProps = { [SCHEMA_PROP_NAME]: { __html: JSON.stringify(schemaData) } };

  return (
    <>
      <Script
        id="real-estate-agent-entity-recognition-schema"
        type="application/ld+json"
        {...schemaInjectProps}
      />

      <div className="min-h-screen bg-[#131313]">
        <article className="max-w-4xl mx-auto px-6 pt-24 pb-16">

          {/* Breadcrumbs */}
          <nav className="text-sm text-gray-500 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">&rsaquo;</span>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <span className="mx-2">&rsaquo;</span>
            <span className="text-gray-400">Real Estate Agent Entity Recognition</span>
          </nav>

          {/* Hero */}
          <header className="ae-article-hero mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-white/[0.04] border border-white/[0.08]">
              <span className="font-mono text-xs uppercase tracking-widest text-[#F27D24]">Realtor AEO Series</span>
            </div>

            <h1 className="font-headline font-black uppercase tracking-tighter text-3xl sm:text-4xl lg:text-5xl text-white leading-[1.05] mb-6">
              REAL ESTATE AGENT ENTITY RECOGNITION: HOW AI BUILDS YOUR RECOMMENDATION PROFILE
            </h1>

            <div className="article-summary bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/[0.08] p-6 mb-8">
              <p className="font-body text-lg text-white leading-relaxed">
                <strong>An AI search engine cannot recommend a real estate agent it cannot recognize as a distinct entity.</strong> Named entity recognition is the resolution step ChatGPT, Perplexity, Claude, and Gemini run before any ranking signal is scored. The engine reads NAP triples, schema markup, sameAs chains, third-party co-citations, and review attribution to confirm the agent exists as a unique knowledge-graph node — not a duplicate, not a string collision, not an unresolved fragment. Agents who fail entity recognition score zero on the recommendation slot regardless of Google Business Profile strength, because there is no resolved entity to attribute the citation to. The recommendation profile is the composite entity record AI builds from five signal layers: the identity triplet, the verified profile chain, the co-citation graph, the schema relationship edges, and the named authorship trail. The recommendation profile is the unit AI cites — not the homepage URL.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-gray-400 font-mono">
              <span>17 MIN READ</span>
              <span>·</span>
              <span>UPDATED JUNE 2026</span>
              <span>·</span>
              <span>BY JUSTIN BORGES</span>
            </div>
          </header>

          {/* Stats Grid */}
          <div className="ae-stats-grid not-prose mb-10">
            <div className="ae-stat-card">
              <div className="ae-stat-emoji">🧬</div>
              <div className="ae-stat-value ae-accent">5-Layer</div>
              <div className="ae-stat-label">Recommendation profile stack AI engines build before scoring any realtor citation slot</div>
            </div>
            <div className="ae-stat-card">
              <div className="ae-stat-emoji">🪞</div>
              <div className="ae-stat-value ae-accent">-41%</div>
              <div className="ae-stat-label">Citation share lost to every unresolved name collision in the AI knowledge graph (TAE measurement, 2026)</div>
            </div>
            <div className="ae-stat-card">
              <div className="ae-stat-emoji">🔗</div>
              <div className="ae-stat-value ae-accent">3.4x</div>
              <div className="ae-stat-label">Citation lift for agents resolved as distinct entities vs scattered name-string mentions (Origin Protocol Proof Ledger)</div>
            </div>
            <div className="ae-stat-card">
              <div className="ae-stat-emoji">⏱️</div>
              <div className="ae-stat-value ae-accent">45-day</div>
              <div className="ae-stat-label">Typical entity resolution window for the schema + sameAs chain across the four major engines</div>
            </div>
          </div>

          {/* Cheat Sheet TOC */}
          <div className="ae-cheat-sheet not-prose mb-12">
            <div className="ae-cheat-sheet-title">In This Article</div>
            <table>
              <tbody>
                <tr>
                  <td><a href="#what-is" className="text-[#F27D24] hover:underline">1.</a></td>
                  <td><a href="#what-is" className="text-gray-300 hover:text-white">What Real Estate Agent Entity Recognition Is</a></td>
                </tr>
                <tr>
                  <td><a href="#five-layers" className="text-[#F27D24] hover:underline">2.</a></td>
                  <td><a href="#five-layers" className="text-gray-300 hover:text-white">The Five Layers of the Recommendation Profile</a></td>
                </tr>
                <tr>
                  <td><a href="#research" className="text-[#F27D24] hover:underline">3.</a></td>
                  <td><a href="#research" className="text-gray-300 hover:text-white">What the Research Says About NER in AI Search</a></td>
                </tr>
                <tr>
                  <td><a href="#tae-method" className="text-[#F27D24] hover:underline">4.</a></td>
                  <td><a href="#tae-method" className="text-gray-300 hover:text-white">What TAE Does Differently on Agent Entity Profiles</a></td>
                </tr>
                <tr>
                  <td><a href="#measurement" className="text-[#F27D24] hover:underline">5.</a></td>
                  <td><a href="#measurement" className="text-gray-300 hover:text-white">How to Measure Entity Recognition Strength</a></td>
                </tr>
                <tr>
                  <td><a href="#faq" className="text-[#F27D24] hover:underline">6.</a></td>
                  <td><a href="#faq" className="text-gray-300 hover:text-white">Frequently Asked Questions</a></td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Article body */}
          <div className="ae-article-body prose prose-invert prose-lg max-w-none prose-headings:text-white prose-headings:font-headline prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tighter prose-p:text-gray-300 prose-a:text-[#F27D24] prose-a:no-underline hover:prose-a:underline prose-strong:text-white">

            {/* Named-thesis opener */}
            <div className="ae-quote not-prose">
              <p><strong className="named-thesis">The Entity Recognition Floor: AI search engines must resolve an agent into a distinct knowledge-graph entity before any ranking signal is scored — agents who fail entity resolution are scored as zero on the recommendation slot regardless of GBP star rating or content volume (TAE Proof Ledger, 2025-2026).</strong> Answer Engine Optimization (AEO) for real estate agents starts at the entity layer, not the content layer. This analysis draws on Aggarwal et al. (KDD 2024), Zhang et al. (2026), the GEO-SFE benchmark (2026), Chen et al. (2025), and 16 months of TAE client engagements measured against fixed prompt libraries on ChatGPT, Perplexity, Claude, and Gemini. One operator per market. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Check whether your agent territory is still open before a competitor claims it.</a></p>
            </div>

            {/* Section 1 */}
            <span className="ae-section-label" id="what-is">Definition</span>
            <h2>What Real Estate Agent Entity Recognition Is</h2>

            <h3>The plain-language entity recognition definition</h3>
            <p>Real estate agent entity recognition is the named entity resolution step AI search engines run to convert an agent name string into a stable, citable knowledge-graph node before any ranking signal is scored. Entity recognition — also called named entity recognition (NER), entity linking, or entity disambiguation — reads the NAP triple (name, address, phone), the schema markup, the sameAs profile chain, the third-party co-citations, and the review attribution to confirm the agent exists as a unique entity rather than a duplicate, a string collision, or an unresolved fragment. The resolution output is binary at the recommendation stage: above the entity threshold the agent earns a citation slot, below it the agent informs the answer silently. Your first diagnostic step is a <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free AERO Blind Spot Scan</a> against your current entity strength.</p>

            <h3>Why entity recognition decides the citation, not content quality</h3>
            <p>The composite ranking score across ChatGPT, Perplexity, Claude, and Gemini multiplies semantic similarity, authority weight, and structural extractability — but every component requires a resolved entity to attach the score to. When the AI knowledge graph cannot resolve a real estate agent name string into a distinct entity, the ranker has no node to assign the authority weight to and the agent informs the answer body as an unattributed mention. Agents with strong content who fail entity recognition produce visibility on the answer but no citation on the slot. The implication is direct: AI citation for real estate agents (LLM visibility, AEO recommendation slots) is engineered at the entity layer first, content layer second. Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> for a custom entity-layer audit.</p>

            <h3>The reality of name collisions in the agent knowledge graph</h3>
            <p><strong className="named-thesis">The Disambiguation Cost: every unresolved agent name collision inside the AI knowledge graph costs an average 41% of citation share until the disambiguation chain (Person schema + sameAs links + verified profile resolution) separates the target agent from the duplicates (TAE measurement, 2025-2026).</strong> Agents with common names lose entity strength fastest without explicit disambiguation work. Two agents named &quot;Mark Davis&quot; in different markets produce a name collision in the knowledge graph; the agent without a sameAs chain, brokerage worksFor edge, and indexed third-party co-citations on the identity triplet is the agent who loses the citation. Call <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> to scope your disambiguation work.</p>

            {/* CTA — blindspot */}
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Run the free AEO Grader on your agent profile now</a>

            {/* Section 2 */}
            <span className="ae-section-label" id="five-layers">The Stack</span>
            <h2>The Five Layers of the Recommendation Profile</h2>

            <p><strong className="named-thesis">The Recommendation Profile: the composite entity record AI search engines build from five signal layers — the identity triplet, the verified profile chain, the co-citation graph, the schema relationship edges, and the named authorship trail — is the unit AI cites, not the agent homepage URL (TAE Origin Protocol, 2026).</strong> Every layer is independently measurable; every layer is a lever an agent can move inside 30 to 90 days. The five-layer model reflects the per-signal weight inside the entity resolution component across the four major engines. Drop us a line at <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> for a per-layer scorecard.</p>

            <h3>Layer 1: the identity triplet — name, brokerage, market</h3>
            <p>The identity triplet is the {`{legal name, brokerage, market}`} tuple the AI engine uses as the canonical agent identifier. <strong className="named-thesis">The Identity Triplet Lock: the {`{legal name, brokerage, market}`} triplet must appear character-identical on every authority surface — GBP, brokerage roster, LinkedIn, Person schema, every byline — to lock the agent entity ID, because drift in any field fractures the recognition profile and forces the engine into duplicate-resolution mode.</strong> An agent listed as &quot;Mark T. Davis&quot; on the GBP, &quot;Mark Davis&quot; on the brokerage page, and &quot;Marcus Davis&quot; on LinkedIn produces three candidate entity records in the knowledge graph instead of one. The fix is a one-time normalization pass across every authority surface. Check your triplet consistency: <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free Blind Spot Scan against your current entity records.</a></p>

            <h3>Layer 2: the verified profile chain — sameAs as backbone</h3>
            <p>The verified profile chain is the sameAs schema array on the Person record linking the agent entity to verifiable external profiles. The minimum durable chain is four links: LinkedIn, the brokerage roster page, the verified GBP record, and at least one third-party publisher profile (Inman, association directory, podcast appearance page). Each link is a verification edge the AI knowledge graph reads to confirm the agent entity is the same person across surfaces. Chen et al. (2025) measured that sameAs-resolved entities receive a 1.9x trust multiplier in the authority component over agents with no profile chain. The implementation cost is ten lines of JSON-LD. Text us at <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> to scope the implementation.</p>

            <h3>Layer 3: the co-citation graph — earned-media edges</h3>
            <p>The co-citation graph is the set of indexed external pages that name the agent with their brokerage and market on third-party publisher domains. Every external mention naming the identity triplet adds a verification edge between the agent entity and the publishing domain inside the AI knowledge graph. A real estate agent with five local press mentions, three industry directory listings, and one podcast appearance produces a six-edge co-citation graph; an agent published exclusively on the agent own domain produces zero external edges and scores below a GBP-equal competitor with documented co-citation volume. Self-only publishing is scoring against your own entity strength. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a free 30-minute call to map your earned-media gap.</a></p>

            <h3>Layer 4: the schema relationship edges — worksFor, member, alumniOf</h3>
            <p>The schema relationship edges are the typed connections inside Person schema that bind the agent entity to other structured records in the knowledge graph. The minimum durable edge set is worksFor pointing to the brokerage Organization schema record, member pointing to the local association (NAR, MLS, regional realtor board), and at least one alumniOf or knowsAbout edge attaching the agent to a domain of expertise (luxury, first-time buyer, multifamily). Each typed edge converts a flat entity record into a relationally-contextualized node. <strong className="named-thesis">The Entity Graph Asymmetry: a real estate agent resolved as a distinct, relationally-edged entity in the AI knowledge graph receives 3.4x the citation rate of an agent existing only as a string match across scattered unrelated mentions (Origin Protocol Proof Ledger, 2025-2026).</strong> Schema relationship edges are the lowest-cost lever in the recommendation profile and the most-skipped. Call <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> for a schema-edge audit.</p>

            <h3>Layer 5: the named authorship trail — bylines as entity anchors</h3>
            <p>The named authorship trail is the sequence of indexed pages that publish content under the agent named byline with a Person schema reference. Every blog post, market report, neighborhood guide, and FAQ block published under the agent name with author markup adds a content anchor to the entity record. Anonymous brand-voice publishing strips authorship from the entity and lowers the named-author trust signal that the Claude ranker weights heaviest. The fix is a byline addition to every existing post plus a Person schema author block in the content schema. <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Find your authorship trail gaps with a free AERO scan.</a></p>

            <div className="ae-callout ae-callout-info not-prose">
              <div className="ae-callout-title">The Recommendation Profile Is Multiplicative</div>
              <p><strong>Triplet × Chain × Co-Citation × Schema Edges × Authorship</strong>. A zero in any layer zeroes the product. Agents who invest only in content but ignore the triplet, chain, or edges produce visibility on the answer body but no citation on the recommendation slot. The recommendation profile is a five-multiplier formula — every layer matters. Ready to act? <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a free strategy session to scope your fix.</a></p>
            </div>

            {/* CTA — text/phone */}
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Run the free AEO Grader on your recommendation profile</a>

            {/* Section 3 */}
            <span className="ae-section-label" id="research">Research</span>
            <h2>What the Research Says About NER in AI Search</h2>

            <p>The peer-reviewed work on named entity recognition inside retrieval-augmented generation is foundational but recent — the field is less than two years old as a measured discipline against AI search engines specifically. Below is the operational read on the four most cited papers, mapped to the agent entity recognition context. Questions? Call <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> for a research-backed entity audit.</p>

            <h3>Aggarwal et al. on extractability and entity attachment</h3>
            <p>Aggarwal et al. (KDD 2024) was the first peer-reviewed benchmark measuring optimization tactics against generative engines. The paper measured a 37% citation lift from inline quotations and a 22% lift from inline statistics. The mechanism is extractability: quotations and statistics are bounded units the citation stage can attach to a resolved entity and quote verbatim. Applied to the agent entity recognition context, a market report citing inline closing-price data and pull-quoted local economist commentary under a named agent byline binds the extractable unit to the agent entity record — the citation attaches because the entity resolves and the chunk extracts cleanly. Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> for a research-grade implementation walkthrough.</p>

            <h3>Zhang et al. on the definition premium and entity opening</h3>
            <p>Zhang et al. (2026) extended the work to influence-share scoring and measured a 57% influence premium on content opening with a clear definition. The mechanism is sentence-position weighting: the ranker weights the first sentence heaviest across similarity, authority, and entity-attachment components. Applied to the agent entity context, an about page opening with &quot;Mark Davis is a real estate agent licensed in [state], affiliated with [brokerage], serving [market]&quot; produces a definition-forward identity triplet declaration the entity resolver reads first. The narrative-hook opening (&quot;Mark has helped families find their dream homes since...&quot;) buries the identity triplet and weakens the entity attachment. <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Get your free AI readiness report on definition-first agent pages.</a></p>

            <h3>Chen et al. on earned media as entity verification</h3>
            <p>Chen et al. (2025) documented a systematic ranking bias toward earned media mentions over brand-published content on the same domain. The mechanism is entity verification through co-citation: the ranker reads external mentions of the agent identity triplet as third-party validation that the entity exists and is recognized by other authoritative sources on the same topic. Applied to the agent entity recognition context, a real estate agent with five Inman or local press mentions plus three association profile pages produces a stronger entity record than a GBP-equal agent publishing exclusively on the agent own site. The co-citation graph is required, not optional. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Lock in your exclusive territory before a competitor builds the earned-media gap.</a></p>

            <h3>GEO-SFE on chunk-level extractability and entity binding</h3>
            <p>The GEO-SFE benchmark (2026) standardized source-format extractability measurement and reported a 43% citation lift from list and table formatting and a 31% attention degradation on passages over 300 words. Applied to the agent entity recognition context, an about page structured as bounded 80-to-180 word chunks — biography, credentials, market expertise, notable transactions, contact — produces five entity-attachable extraction units. A 1,500-word narrative about page produces one oversized unit the ranker degrades. Bounded chunks attach cleanly to the agent entity; oversized chunks attach poorly. Drop us a line at <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> for a chunk-format audit.</p>

            <div className="not-prose overflow-x-auto my-8">
              <table className="ae-comparison-table w-full text-sm">
                <thead>
                  <tr>
                    <th>Academic Source</th>
                    <th>Measured Lift</th>
                    <th>Agent Entity Application</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Aggarwal et al., KDD 2024</strong></td>
                    <td>+37% quotations, +22% statistics</td>
                    <td>Extractable units attach to named-byline entity record</td>
                  </tr>
                  <tr>
                    <td><strong>Zhang et al., 2026</strong></td>
                    <td>+57% definition-first openings</td>
                    <td>Identity triplet declared in first sentence of about page</td>
                  </tr>
                  <tr>
                    <td><strong>Chen et al., 2025</strong></td>
                    <td>1.9x sameAs author trust; earned media bias</td>
                    <td>Co-citation graph verifies agent entity exists externally</td>
                  </tr>
                  <tr>
                    <td><strong>GEO-SFE, 2026</strong></td>
                    <td>+43% lists/tables; -31% over 300 words</td>
                    <td>Bounded 80-180 word chunks attach to agent entity cleanly</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* CTA — territory */}
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Claim your market — one agent per area on TAE</a>

            {/* Section 4 */}
            <span className="ae-section-label" id="tae-method">TAE Method</span>
            <h2>What TAE Does Differently on Agent Entity Profiles</h2>

            <h3>The Origin Protocol entity engineering pass</h3>
            <p>The Origin Protocol is The Answer Engine production process for engineering real estate agent entities against the five-layer recommendation profile. Every about page, byline, schema block, and earned-media placement we build for a real estate agent is engineered to register on all five layers across the four major engines simultaneously. The Protocol exists because optimizing for one layer — typically content volume — produces partial visibility on one engine and zero entity recognition on the rest. Engineering against the shared composite produces compound entity authority that holds across engine-level weight drift between scoring releases. Call <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> for a Protocol walkthrough.</p>

            <h3>The triplet normalization audit on day one</h3>
            <p>Every Origin Protocol engagement opens with an identity triplet normalization audit across every authority surface the agent appears on. The audit catalogs the agent name string, brokerage attribution, and market designation as they appear on the GBP, brokerage roster, LinkedIn, Person schema, every byline, and every third-party profile page. The audit output is a normalized triplet plus a remediation list for every surface where the triplet drifts. The intervention is a one-time normalization pass; the citation impact is structural and permanent. Drift causes recognition failure on day one. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a free 30-minute call to scope your triplet audit.</a></p>

            <h3>The four-link sameAs chain and brokerage worksFor edge</h3>
            <p>The Origin Protocol implements a minimum four-link sameAs chain on every agent Person schema record: LinkedIn, brokerage roster, verified GBP, and one third-party publisher profile. The worksFor relationship is implemented as a typed schema edge pointing to a full Organization schema record for the brokerage — not as a string field. The combination produces a relationally-bound entity record the AI knowledge graph reads as a structured node with brokerage context, professional verification, and external validation in a single resolution pass. The implementation is one engineering pass per agent. <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Run your free AI Blind Spot Scan to baseline your current chain.</a></p>

            <h3>The earned-media cadence that compounds the entity record</h3>
            <p>The Origin Protocol runs an earned-media cadence in parallel with the on-site entity engineering pass: monthly local press pitches naming the agent with brokerage and market, quarterly association contributions on industry topics, ongoing directory and podcast placement audits. The cadence targets the co-citation graph directly — every release adds an indexed external edge to the agent entity record. After 90 days the co-citation graph reaches the floor Chen et al. (2025) measured as the authority threshold; after 180 days the entity record produces compound recognition that survives the freshness decay curve on any single piece. The earned-media floor is the slowest-to-build layer and the highest-yield entity lever. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Schedule a free strategy call to scope your cadence.</a></p>

            <div className="ae-callout ae-callout-orange not-prose">
              <div className="ae-callout-title">The Entity Equation in One Line</div>
              <p>Five recognition layers × four major engines × monthly measurement cadence = compound entity authority that survives engine-level weight drift and competitor on-platform investment. Anything less is a one-time recognition followed by 60-to-90-day decay. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Schedule a free strategy call</a> to map your recommendation profile.</p>
            </div>

            {/* CTA — calendly */}
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Get your free AEO Grader score against your top three competitors</a>

            {/* Section 5 */}
            <span className="ae-section-label" id="measurement">Measurement</span>
            <h2>How to Measure Entity Recognition Strength</h2>

            <h3>The fixed prompt library for entity citation detection</h3>
            <p>Entity recognition strength is measured against a fixed 20-query prompt library run across ChatGPT, Perplexity, Claude, and Gemini on a monthly cadence. The library targets the exact queries the agent recommendation profile is engineered for: identity queries (&quot;[agent name] real estate&quot;), market queries (&quot;best real estate agent in [neighborhood]&quot;), and specialization queries (&quot;[transaction type] realtor in [city]&quot;). Each query is run on each engine; the citation list is logged by whether the agent name appears as a named cited entity, as an unattributed mention inside the answer body, or as absent. The named-citation rate is the operational proxy for entity recognition strength. Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> for the canonical prompt library template.</p>

            <h3>The per-engine entity recognition breakdown</h3>
            <p>The five-layer recommendation profile produces different recognition outcomes on different engines because each engine weights the layers differently. ChatGPT favors the schema edges and Bing-indexed co-citation. Perplexity favors freshness on the named authorship trail and bounded chunk extractability. Claude favors the sameAs chain and named-author trust signal. Gemini favors the worksFor brokerage edge and the verified GBP record inside the Google entity graph. An agent winning recognition on one engine but not the other three is reading the signal correctly — that engine is weighted toward the layer the agent invested in. Full-stack recognition comes from balanced investment across all five layers. Text us at <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> for a per-engine breakdown.</p>

            <h3>The 90-day entity validation window</h3>
            <p>The Origin Protocol uses a 90-day validation window to confirm entity recognition wins are durable, not coincidental. Named citations inside the first 30 days reflect new indexing on the schema and sameAs chain. Citations inside days 30 to 90 reflect ranker integration of the co-citation graph and earned-media edges. Citations past day 90 reflect compound entity authority that holds against equally-rated competitors through the freshness decay curve. Agents who measure only the first 30 days mistake transient recognition for durable knowledge-graph status. The 90-day window separates one-shot resolution from compound entity authority. This analysis draws on 16 months of TAE client engagements running this measurement protocol against the academic literature cited throughout. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Claim your market — one agent per area, validated on the 90-day window.</a></p>

            {/* CTA — email */}
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Email support@theanswerengine.ai for the 20-query template</a>

            {/* Section 6 — Cheat Sheet */}
            <span className="ae-section-label">Quick Reference</span>
            <h2>Agent Entity Recognition Cheat Sheet</h2>

            <div className="not-prose overflow-x-auto my-6">
              <table className="ae-comparison-table w-full text-sm">
                <thead>
                  <tr>
                    <th>If You Want To...</th>
                    <th>The Recognition Layer Is...</th>
                    <th>The Highest-Yield Fix Is...</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Stop the engine from treating you as a duplicate</td>
                    <td>Identity triplet</td>
                    <td>Normalize {`{name, brokerage, market}`} character-identical on every surface</td>
                  </tr>
                  <tr>
                    <td>Disambiguate from another agent with a similar name</td>
                    <td>sameAs profile chain</td>
                    <td>Four-link Person schema sameAs (LinkedIn + brokerage + GBP + publisher)</td>
                  </tr>
                  <tr>
                    <td>Prove your entity exists outside your own site</td>
                    <td>Co-citation graph</td>
                    <td>Five local press mentions + three association profile pages</td>
                  </tr>
                  <tr>
                    <td>Convert a flat name string into a relational node</td>
                    <td>Schema relationship edges</td>
                    <td>worksFor + member + knowsAbout edges on Person schema</td>
                  </tr>
                  <tr>
                    <td>Anchor your name to your published content</td>
                    <td>Named authorship trail</td>
                    <td>Named byline + Person schema author block on every page</td>
                  </tr>
                  <tr>
                    <td>Win Claude specifically for agent entity queries</td>
                    <td>sameAs chain + named authorship</td>
                    <td>Person schema sameAs + named byline on every market report</td>
                  </tr>
                  <tr>
                    <td>Win Gemini and Google AI Mode on agent queries</td>
                    <td>worksFor edge + verified GBP</td>
                    <td>Brokerage Organization schema + verified Google entity record</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* CTA — text */}
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Text (213) 444-2229 for an agent entity audit</a>

            {/* Author Card */}
            <div className="not-prose ae-author-card">
              <img
                src="/justin-borges.webp"
                alt="Justin Borges, Founder of The Answer Engine"
                style={{ width: 64, height: 64, borderRadius: '50%', objectFit: 'cover', border: '2px solid #F27D24', flexShrink: 0 }}
              />
              <div>
                <div className="ae-author-name">Justin Borges</div>
                <div className="ae-author-role">Founder, The Answer Engine</div>
                <p className="ae-author-bio" style={{ marginTop: 8, fontSize: '0.875rem', color: 'rgba(229,226,225,0.65)', lineHeight: 1.6 }}>Justin Borges is the founder of The Answer Engine, a GEO/AEO firm that helps real estate agents and local service businesses get cited by ChatGPT, Perplexity, Claude, Gemini, and Google AI Overviews. TAE runs the Origin Protocol against the five-layer recommendation profile described in this article — 1.14M+ monthly impressions, 4 of 4 LLMs cited on TAE primary queries. Call <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> or email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> to scope your agent entity engagement.</p>
              </div>
            </div>

            {/* CTA Block */}
            <div className="ae-cta-block not-prose my-16">
              <h3>Run Your Free AEO Grader — See Whether AI Resolves You as a Distinct Real Estate Agent Entity</h3>
              <p>One real estate agent per market. The AEO Grader scans your entity record against 47 ranking signals — including the five-layer recommendation profile — and tells you your exact composite score relative to your GBP-equal competitors. Free, no login required. The Answer Engine validates every agent engagement on a 90-day window before opening territory.</p>
              <a href="https://theanswerengine.ai/blindspot" className="ae-cta-primary">Run Free AEO Grader →</a>
              <div style={{ marginTop: '16px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <a href="https://calendly.com/theanswerengine-support/30min" className="ae-cta-secondary">Book Free Strategy Call</a>
                <a href="tel:+12134442229" className="ae-cta-secondary">(213) 444-2229</a>
              </div>
            </div>

            {/* FAQ Section */}
            <span className="ae-section-label" id="faq">FAQ</span>
            <h2>Frequently Asked Questions</h2>

            <details className="ae-faq-item border border-white/[0.08] p-5 mb-3 bg-white/[0.02]">
              <summary className="cursor-pointer font-headline font-black uppercase tracking-tight text-white text-base">What is entity recognition for a real estate agent in AI search?</summary>
              <p className="faq-answer mt-3 text-gray-300">Entity recognition is the process AI search engines run to resolve a real estate agent name string into a unique, citable knowledge-graph entity with a stable identifier. The engine reads NAP triples, schema markup, sameAs profile chains, third-party co-citations, and review attribution to confirm the agent exists as a distinct entity rather than a duplicate, a name collision, or an unresolved string. Agents who fail entity recognition are scored as zero on the recommendation slot regardless of GBP star rating or content volume. Text <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> for an entity audit.</p>
            </details>

            <details className="ae-faq-item border border-white/[0.08] p-5 mb-3 bg-white/[0.02]">
              <summary className="cursor-pointer font-headline font-black uppercase tracking-tight text-white text-base">What is a recommendation profile in AEO?</summary>
              <p className="faq-answer mt-3 text-gray-300">A recommendation profile is the composite entity record AI search engines build from every authority signal attached to a real estate agent across the open web. The profile aggregates the identity triplet, the verified profile chain, the co-citation graph, the schema relationship edges, and the named authorship trail into a single citable node. The recommendation profile is the unit AI cites, not the agent homepage URL. Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> to scope the engineering work.</p>
            </details>

            <details className="ae-faq-item border border-white/[0.08] p-5 mb-3 bg-white/[0.02]">
              <summary className="cursor-pointer font-headline font-black uppercase tracking-tight text-white text-base">Why does AI cite some agents and ignore others with the same star rating?</summary>
              <p className="faq-answer mt-3 text-gray-300">AI search engines cite agents whose entity records resolve cleanly inside the knowledge graph and ignore agents whose name strings collide with duplicates, lack a verified profile chain, or fail schema-based disambiguation. Two agents with identical 4.9-star Google Business Profile scores produce different citation outcomes because GBP supplies eligibility, not entity strength. The agent with a resolved entity ID, Person schema, sameAs LinkedIn chain, and indexed co-citations outranks the agent who exists only as a scattered name string. Book a free call: <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">calendly.com/theanswerengine-support/30min</a>.</p>
            </details>

            <details className="ae-faq-item border border-white/[0.08] p-5 mb-3 bg-white/[0.02]">
              <summary className="cursor-pointer font-headline font-black uppercase tracking-tight text-white text-base">How long does it take to build a real estate agent recommendation profile?</summary>
              <p className="faq-answer mt-3 text-gray-300">The schema, sameAs chain, and Person markup interventions land inside 30 to 45 days of indexing. The co-citation graph and third-party verification edges accumulate over 90 to 180 days as press mentions, association listings, and podcast appearances index and the LLM retrieval indexes refresh. TAE Proof Ledger data across 16 months of client engagements shows first-citation resolution typically lands inside 45 days; durable knowledge-graph entity status with citation on all four major engines lands inside 180 days. <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Run your free Blind Spot Scan</a> to see your starting baseline.</p>
            </details>

            <details className="ae-faq-item border border-white/[0.08] p-5 mb-3 bg-white/[0.02]">
              <summary className="cursor-pointer font-headline font-black uppercase tracking-tight text-white text-base">What is entity disambiguation for real estate agents?</summary>
              <p className="faq-answer mt-3 text-gray-300">Entity disambiguation is the process AI engines run to separate a target real estate agent from other people sharing the same or similar names inside the knowledge graph. The disambiguation chain reads Person schema with sameAs links to LinkedIn, the brokerage profile page, the verified GBP record, and at least one third-party publisher mention naming the agent with their brokerage and market. Every agent name collision costs an average 41% of citation share until the disambiguation chain resolves the duplicate. Ask us how at <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>
            </details>

            <details className="ae-faq-item border border-white/[0.08] p-5 mb-3 bg-white/[0.02]">
              <summary className="cursor-pointer font-headline font-black uppercase tracking-tight text-white text-base">Does Person schema alone build entity recognition?</summary>
              <p className="faq-answer mt-3 text-gray-300">No. Person schema is one input among five layers in the recommendation profile. The full stack requires the identity triplet on every authority surface, the sameAs schema chain linking three or more verifiable profiles, third-party co-citation across indexed publisher domains, schema relationship edges binding the agent to a brokerage Organization schema record, and a named authorship trail across published content. Person schema without a sameAs chain produces partial recognition; the full stack produces durable entity-grade citation authority. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Schedule a free walkthrough.</a></p>
            </details>

            {/* CTA — blindspot */}
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Run the free AEO Grader on your agent profile now</a>

            {/* Related */}
            <span className="ae-section-label">Continue Reading</span>
            <h2>Related AEO Concepts</h2>

            <ul>
              <li><Link href="/blog/what-is-entity-authority-and-why-ai-cares">What Is Entity Authority and Why AI Cares</Link></li>
              <li><Link href="/blog/what-is-an-ai-entity-score-and-why-it-controls-your-visibility">What Is an AI Entity Score and Why It Controls Your Visibility</Link></li>
              <li><Link href="/blog/how-ai-picks-realtor-when-gbp-scores-tie">How AI Picks One Realtor When GBP Scores Tie</Link></li>
              <li><Link href="/blog/how-perplexity-ai-recommends-real-estate-agents">How Perplexity AI Recommends Real Estate Agents</Link></li>
              <li><Link href="/blog/how-chatgpt-recommends-real-estate-agents">How ChatGPT Recommends Real Estate Agents</Link></li>
            </ul>

            {/* CTA — calendly territory */}
            <a href="https://calendly.com/theanswerengine-support/30min" className="ae-cta-inline">→ Lock in your agent territory — one operator per market</a>

          </div>

          {/* Final CTA */}
          <section className="ae-final-cta not-prose">
            <div className="ae-final-cta-inner">
              <h2 className="text-2xl sm:text-3xl font-black mb-4 text-white font-headline uppercase tracking-tighter">
                If AI Cannot Recognize You as an Entity, It Cannot Recommend You
              </h2>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                Every real estate agent in your market is either a resolved knowledge-graph entity or a scattered name string. The five-layer recommendation profile decides which one you are. The Origin Protocol engineers your entity record across all five layers on all four major engines simultaneously. One agent per market.
              </p>
              <a
                href="https://theanswerengine.ai/blindspot"
                className="inline-flex items-center justify-center gap-2 bg-[#F27D24] text-black font-black px-10 py-4 tracking-tighter hover:translate-y-[2px] transition-transform font-headline uppercase"
              >
                Get Your Free AEO Grader Score
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

        </article>
      </div>
    </>
  );
}
