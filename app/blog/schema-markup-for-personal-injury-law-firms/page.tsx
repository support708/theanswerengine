import type { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';

export const dynamic = 'force-dynamic';


export const metadata: Metadata = {
  title: 'Schema Markup for Personal Injury Law Firms | Answer Engine',
  description:
    'Schema markup is the AEO signal that wins citations for personal injury law firms. Get the Attorney, FAQPage, LegalService stack ChatGPT and Perplexity reward.',
  keywords:
    'schema markup for personal injury law firms, personal injury lawyer schema, Attorney schema, LegalService schema, FAQPage schema, AEO for personal injury attorneys, structured data law firm, ChatGPT citation personal injury, Perplexity personal injury lawyer, JSON-LD personal injury',
  openGraph: {
    title: 'Schema Markup for Personal Injury Law Firms',
    description:
      'The structured data playbook personal injury law firms use to get cited by ChatGPT, Perplexity, and Google AI Overviews — the AEO operator method.',
    type: 'article',
    url: 'https://theanswerengine.ai/blog/schema-markup-for-personal-injury-law-firms',
    publishedTime: '2026-06-03T00:00:00.000Z',
    authors: ['Justin Borges'],
    images: [
      {
        url: 'https://theanswerengine.ai/blog/schema-markup-for-personal-injury-law-firms.svg',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Schema Markup for Personal Injury Law Firms',
    description:
      'The structured data playbook personal injury law firms use to get cited by ChatGPT, Perplexity, and Google AI Overviews.',
  },
  alternates: {
    canonical: 'https://theanswerengine.ai/blog/schema-markup-for-personal-injury-law-firms',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Schema Markup for Personal Injury Law Firms: How to Get Cited by ChatGPT, Perplexity, and AI Search',
  description:
    'A complete schema markup guide for personal injury law firms — the Attorney, FAQPage, LegalService, and Review schema stack that drives ChatGPT recommendations, Perplexity citations, and Google AI Overviews appearances for injury queries.',
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
  datePublished: '2026-06-03T00:00:00.000Z',
  dateModified: '2026-06-03T00:00:00.000Z',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://theanswerengine.ai/blog/schema-markup-for-personal-injury-law-firms',
  },
  image: 'https://theanswerengine.ai/blog/schema-markup-for-personal-injury-law-firms.svg',
  about: [
    { '@type': 'Thing', name: 'Schema Markup' },
    { '@type': 'Thing', name: 'Structured Data' },
    { '@type': 'Thing', name: 'Answer Engine Optimization' },
    { '@type': 'Thing', name: 'Personal Injury Law' },
    { '@type': 'Thing', name: 'AI Citations' },
    { '@type': 'Thing', name: 'ChatGPT' },
    { '@type': 'Thing', name: 'Perplexity' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What schema types should a personal injury law firm use for AEO?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A personal injury law firm should publish a nested schema stack of Attorney, LegalService, ProfessionalService, FAQPage, Review, BreadcrumbList, and WebPage with SpeakableSpecification. The Attorney schema fuses each named attorney to a bar admission jurisdiction and named practice specialization. The LegalService schema declares each injury vertical (auto accident, truck accident, motorcycle accident, premises liability, medical malpractice, wrongful death) as a discrete service with its own offer and area served. FAQPage schema wraps every Q and A on every injury sub-vertical page. Review schema embeds outcome-specific testimonial text rather than star ratings alone. Firms that publish five or more nested schema types per practice page earn a 2.8x ChatGPT citation lift over firms with no structured data (BrightEdge, 2026).',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Attorney schema actually drive ChatGPT citations for PI lawyers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Attorney schema is a primary disambiguation signal for ChatGPT search mode and Google AI Overviews. The Attorney type allows a firm to declare each named attorney as a Person entity with bar admission jurisdiction, named legal specializations, alumni education, professional honors, and same-as links to LinkedIn, the state bar directory, and Avvo. LLM retrievers fuse the attorney entity to the firm entity to the jurisdiction entity through that schema, which is the exact entity-graph structure ChatGPT uses to decide whether to name a specific lawyer when a user asks "best car accident attorney in Los Angeles." Firms without Attorney schema present as undifferentiated entities and lose citation slots to firms whose schema fuses attorney, firm, and jurisdiction explicitly.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many FAQ items should a PI law firm publish per injury sub-vertical?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Eight to twelve FAQ items per injury sub-vertical page, each wrapped in FAQPage schema with a question text under 100 characters and an answer text of 80 to 180 tokens. The chunk size matches the GEO-SFE 2026 retrieval window — passages over 300 words trigger a 31 percent attention degradation in retriever extraction accuracy. Each FAQ answer should open with a plain-language definition of the question subject, cite the controlling statute or doctrine inline, and contain at least one verified statistic or quoted regulatory language. Generic FAQs ("how much does a lawyer cost") suppress citation eligibility. Statute-anchored FAQs ("what is the statute of limitations for a premises liability claim in California under Code of Civil Procedure section 335.1") create it.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I use LegalService or LawFirm schema for a personal injury practice?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Both, nested. The firm itself uses LegalService as the parent type because LegalService is fully supported by Schema.org and inherits the ProfessionalService entity graph that Google AI Overviews uses for local PI queries. LawFirm is a community-extended type and triggers less reliable extraction. Inside the LegalService parent, declare each injury vertical (auto accident representation, truck collision representation, motorcycle injury representation, premises liability claims, medical malpractice claims, wrongful death claims, traumatic brain injury claims, dog bite claims, slip and fall claims, product liability claims) as a discrete Service with its own serviceType, areaServed, and offers properties. The nested structure is what creates the injury sub-vertical citation lift documented in the GEO-SFE 2026 benchmark.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does schema markup help my PI firm rank higher on Perplexity?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Schema markup helps moderately on Perplexity and substantially on ChatGPT search mode and Google AI Overviews. Perplexity weights freshness, content depth, and direct query-intent alignment more heavily than schema density — its retriever reads the page body first and treats schema as a confirmation signal rather than a primary ranking input. ChatGPT search mode reads schema as a primary input through the Bing retrieval layer, where structured data drives a 2.8x citation lift (BrightEdge, 2026). For a PI firm investing in schema, the highest-ROI gains land on ChatGPT and Google AI Overviews first, with Perplexity benefiting from the content depth that schema discipline tends to produce as a side effect.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use schema markup to game AI search the way SEOs used to game Google?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Schema markup is a verification layer, not a manipulation layer. LLM retrievers cross-check schema claims against the visible page content, third-party data (state bar directories, Google Business Profile, court records), and earned-media mentions. A PI firm that publishes Attorney schema declaring a board certification the attorney does not actually hold will be filtered out of the citation pool once the retriever cross-references the state bar directory and detects the mismatch. Schema works by making real signals legible to retrievers — not by inventing signals that do not exist in the underlying entity record. The 2026 LLM citation layer is dramatically more robust to schema manipulation than Google\'s 2010 keyword stuffing was, because the verification surface is multi-source by default.',
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
      name: 'Schema Markup for Personal Injury Law Firms',
      item: 'https://theanswerengine.ai/blog/schema-markup-for-personal-injury-law-firms',
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
  serviceType: ['Answer Engine Optimization', 'AEO Content', 'LLM Citation Building'],
};

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://theanswerengine.ai/blog/schema-markup-for-personal-injury-law-firms',
  url: 'https://theanswerengine.ai/blog/schema-markup-for-personal-injury-law-firms',
  name: 'Schema Markup for Personal Injury Law Firms',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['.article-summary', '.key-insight', 'h2', '.faq-answer', '.stat-block'],
  },
};

export default function SchemaMarkupForPersonalInjuryLawFirmsPage() {
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

      <div className="min-h-screen bg-[#131313] text-[#e5e2e1]">
        <article className="max-w-4xl mx-auto px-6 pt-24 pb-16">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm text-white/40 font-mono">
            <Link href="/" className="hover:text-[#F27D24] transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-[#F27D24] transition-colors">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white/60">Schema Markup for Personal Injury Law Firms</span>
          </nav>

          {/* Hero */}
          <header className="ae-article-hero mb-12 rounded-xl overflow-hidden" style={{ maxHeight: 460 }}>
            <img
              src="/blog/schema-markup-for-personal-injury-law-firms.svg"
              alt="Schema markup for personal injury law firms — structured data playbook for AI search citations"
              style={{ width: '100%', height: 460, objectFit: 'cover', display: 'block' }}
              loading="eager"
            />
          </header>

          <div className="mb-6 inline-block">
            <span className="font-headline text-xs font-black tracking-tighter uppercase bg-[#F27D24]/10 text-[#F27D24] border border-[#F27D24]/30 px-3 py-1">
              Technical AEO
            </span>
          </div>

          <h1 className="font-headline text-4xl md:text-6xl font-black tracking-tighter uppercase mb-6 leading-none">
            Schema Markup for Personal Injury Law Firms:{' '}
            <span className="text-[#F27D24]">How to Get Cited</span> by ChatGPT and AI Search
          </h1>

          <p className="article-summary text-lg md:text-xl text-white/70 max-w-3xl leading-relaxed mb-8">
            Injured claimants are asking ChatGPT, Perplexity, and Google AI Overviews to name a personal injury
            lawyer. Three to five firms make the cut. Schema markup is the signal that decides which firms.
            This is the structured data playbook for PI practices that intend to be one of them.
          </p>

          <div className="flex flex-wrap gap-6 text-sm text-white/50 font-mono mb-16">
            <span>June 3, 2026</span>
            <span>·</span>
            <span>17 min read</span>
            <span>·</span>
            <span>Justin Borges, The Answer Engine</span>
          </div>

          {/* Stats Grid */}
          <div className="ae-stats-grid mb-16">
            <div className="ae-stat-card">
              <div className="ae-stat-emoji">⚖️</div>
              <div className="ae-stat-value ae-accent">2.8x</div>
              <div className="ae-section-label stat-block">ChatGPT citation lift for pages with structured data (BrightEdge, 2026)</div>
            </div>
            <div className="ae-stat-card">
              <div className="ae-stat-emoji">📈</div>
              <div className="ae-stat-value ae-accent">57%</div>
              <div className="ae-section-label stat-block">citation lift for definition-first content openings (Zhang et al., 2026)</div>
            </div>
            <div className="ae-stat-card">
              <div className="ae-stat-emoji">🧱</div>
              <div className="ae-stat-value ae-accent">43%</div>
              <div className="ae-section-label stat-block">citation lift for embedded lists and tables inside passages (GEO-SFE, 2026)</div>
            </div>
            <div className="ae-stat-card">
              <div className="ae-stat-emoji">🎯</div>
              <div className="ae-stat-value ae-accent">3–5</div>
              <div className="ae-section-label stat-block">PI firms cited per AI response — not 10 blue links</div>
            </div>
          </div>

          {/* Cheat Sheet (TOC) */}
          <div className="ae-cheat-sheet mb-16">
            <div className="ae-cheat-sheet-title">The PI Schema Markup Cheat Sheet</div>
            <ol className="list-decimal pl-6 space-y-2 text-white/80">
              <li><a href="#what-is-schema" className="hover:text-[#F27D24] transition-colors">What Is Schema Markup for Personal Injury Law Firms?</a></li>
              <li><a href="#how-llms-read" className="hover:text-[#F27D24] transition-colors">How LLMs Read Schema on Personal Injury Pages</a></li>
              <li><a href="#research" className="hover:text-[#F27D24] transition-colors">What the Research Says About Schema and AI Citations</a></li>
              <li><a href="#tae-method" className="hover:text-[#F27D24] transition-colors">What The Answer Engine Does Differently</a></li>
              <li><a href="#measure" className="hover:text-[#F27D24] transition-colors">How to Measure Schema Impact on PI Citation Share</a></li>
              <li><a href="#faq" className="hover:text-[#F27D24] transition-colors">Frequently Asked Questions</a></li>
            </ol>
          </div>

          <div className="ae-article-body prose prose-invert prose-lg max-w-none">
            {/* Intro */}
            <p className="key-insight">
              <strong className="named-thesis text-[#F27D24]">Schema markup for personal injury law firms</strong> is the structured data layer that converts a PI firm&apos;s web pages into machine-readable entity records the major LLM retrievers parse before they decide which lawyers to cite. Schema markup is not the cosmetic JSON-LD an SEO agency added in 2018 to chase rich snippets. Schema markup in 2026 is the verification surface ChatGPT search mode, Perplexity, and Google AI Overviews use to fuse a named attorney to a jurisdiction, an injury sub-vertical, an outcome history, and a trust signal — and the PI firms whose schema makes those fusions cleanest capture compounding citation territory before competitors realize structured data became the AEO frontier.
              {' '}Want to know which AI platforms cite your PI firm right now and which competitors are eating your share? <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Run a free Blindspot scan.</a>
            </p>

            <p>
              We built The Answer Engine&apos;s schema methodology against our own site before offering it to clients, drawing on the foundational academic literature on Generative Engine Optimization — Aggarwal et al. (KDD 2024), Zhang et al. (2026), the GEO-SFE benchmark (2026), and Chen et al. (2025) on the earned-media bias inside LLM training corpora. That literature is less than two years old, which means the schema-driven citation landscape for personal injury law in 2026 looks like the structured-data landscape did in 2014 — wide open, with a small first-mover advantage that compounds rapidly. AI citation optimization is still an open territory in personal injury law because most firms are still publishing schema as a side effect of SEO rather than as a primary AEO signal stack with its own engineering discipline. This guide is the operator&apos;s playbook for closing that gap.
              {' '}Text us at <a href="sms:+12134442229" className="cta-inline">(213) 444-2229</a> for a schema audit of your firm&apos;s current state.
            </p>

            {/* H2 1: What Is Schema Markup for PI Law Firms */}
            <span className="ae-section-label" id="what-is-schema">The Foundation</span>
            <h2>What Is Schema Markup for Personal Injury Law Firms?</h2>

            <h3>Schema Markup Defined for PI Practice</h3>
            <p>
              Schema markup for personal injury law firms is the JSON-LD structured data block — embedded in the head of every practice page, FAQ page, attorney bio page, and case-result page — that declares the page&apos;s entities, relationships, and verifiable facts in the Schema.org vocabulary that LLM retrievers natively parse. Schema markup is not a meta description, a keyword field, or an alt tag. Structured data is the machine-readable contract between the PI firm and the retrievers that decide which lawyers ChatGPT, Perplexity, and Google AI Overviews cite. The unit of competition is the schema-fused entity record, and the firms whose nested Attorney, LegalService, FAQPage, and Review schema produce the cleanest entity graph capture the citation slots their competitors leave undefended.
              {' '}One PI practice per market. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Check if your territory is still open before a competitor claims it.</a>
            </p>

            <h3>Why PI Pages Need Nested Schema Stacks, Not Single Types</h3>
            <p>
              Personal injury queries trigger citation-heavy AI responses because each query carries an implicit injury type, an implicit jurisdiction, and an implicit recovery expectation. A user asking ChatGPT &ldquo;best truck accident lawyer in Houston&rdquo; receives a recommendation rather than a directory, because the LLM treats the question as a referral request bounded by Texas commercial-vehicle law and U.S. Federal Motor Carrier Safety Regulations. To win that citation slot, a PI firm needs a schema stack that fuses three entities simultaneously — the firm as a LegalService entity, each named attorney as an Attorney entity with bar admission and named specialization, and each injury sub-vertical (auto accident, truck accident, motorcycle accident, premises liability, medical malpractice, wrongful death) as a discrete Service entity with its own serviceType and areaServed. Single-type schema blocks (a lone LawFirm or a lone Attorney) lose to nested stacks because LLM retrievers extract from entity graphs, not from isolated fields.
              {' '}Want the full nested schema template for your jurisdiction? Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> for the JSON-LD pack.
            </p>

            <h3>Where Schema-Driven AEO Diverges From Traditional SEO Schema</h3>
            <p>
              Schema markup for AEO diverges from schema markup for SEO at the verification layer. SEO schema was a one-way declaration to Google&apos;s rich-results renderer — a firm would publish AggregateRating without external corroboration and Google would surface stars. AEO schema is a cross-verified entity claim. LLM retrievers read schema, then cross-check the claims against state bar directories, court records, Google Business Profile, earned-media mentions, and the visible page content. Personal injury firms whose schema declares specializations they cannot substantiate, attorneys not in the active bar roster, or settlement outcomes not verifiable in court records are filtered out of the citation pool. The 2026 schema discipline is to publish only what the retriever can corroborate — and to publish enough of it, in enough nested density, that the retriever fuses the firm to the injury sub-vertical and jurisdiction on every relevant query.
              {' '}One operator per market — <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">claim your PI territory before a competitor does.</a>
            </p>

            {/* H2 2: How LLMs Read Schema */}
            <span className="ae-section-label" id="how-llms-read">The Mechanism</span>
            <h2>How LLMs Read Schema on Personal Injury Pages</h2>

            <h3>The Retrieval Layer for PI Schema Extraction</h3>
            <p>
              The retrieval layer is the system that fetches candidate documents before the language model writes the answer, and it is the layer where schema markup pays for personal injury law firms. Perplexity retrieves on every query through its proprietary 200B+ URL index and reads schema as a confirmation signal on extracted passages. ChatGPT search mode retrieves selectively through Bing&apos;s index, where schema is a primary ranking input — Bing&apos;s LLM-tuned ranker treats structured data as a 2.8x citation-lift signal (BrightEdge, 2026). Google AI Overviews retrieves through Google&apos;s ranking layer with AI-specific freshness and entity-graph signals that lean heavily on the Knowledge Graph fusions schema markup produces. For a PI query, each platform pulls a different candidate pool, and the firms that win retrieval are the firms whose nested schema converts implicit query intent into explicit entity matches.
              {' '}See where your firm stands across all four major platforms with a <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free AERO Blindspot scan.</a>
            </p>

            <h3>Source Weighting Across Perplexity, ChatGPT, and AI Overviews</h3>
            <p>
              Each AI platform weights schema signals differently. Perplexity reads the body content first and treats schema as a tiebreaker on close retrieval candidates — schema accelerates citations but does not initiate them on a thin page. ChatGPT search mode reads schema as a primary input through the Bing pipeline, where nested structured data (Attorney inside LegalService inside ProfessionalService, with FAQPage and Review siblings) compounds extraction confidence. Google AI Overviews fuses schema-declared entities into its Knowledge Graph and prefers sources whose schema explicitly declares jurisdiction, specialization, and outcome data the Knowledge Graph can index. The citation overlap between Perplexity and ChatGPT is only 11 percent (AuthorityTech, 680M citation analysis), so a PI firm that publishes schema for ChatGPT alone leaves Perplexity visibility on the table — and the reverse is equally true.
              {' '}Want a side-by-side audit of your PI firm&apos;s visibility on all three platforms? Text us at <a href="sms:+12134442229" className="cta-inline">(213) 444-2229</a> and we will send the comparison report.
            </p>

            <h3>The Statute-Anchored Entity Graph</h3>
            <p>
              Personal injury law is bounded by jurisdiction-specific statutes of limitation, comparative-negligence rules, damage caps, and standard-of-care doctrines. Schema markup that anchors a PI page to the controlling statute — through an explicit Legislation property, an inline Quotation block, or a serviceType field that names the statutory cause of action — fuses the firm to a verifiable legal entity inside the retriever&apos;s graph. A schema block that declares &ldquo;serviceType: California auto accident representation under CCP 335.1&rdquo; outranks a generic &ldquo;serviceType: car accident representation&rdquo; because the first declaration is corroborable against the California Code of Civil Procedure and the second is not. Statute-anchored schema is the highest-confidence extraction signal LLM retrievers reward on personal injury queries, because the verification surface is the actual statute and the precision signal is unambiguous.
              {' '}One operator per market. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">See if your PI territory is still available.</a>
            </p>

            {/* H2 3: What the Research Says */}
            <span className="ae-section-label" id="research">The Research</span>
            <h2>What the Academic Research Says About Schema and AI Citations</h2>

            <h3>Quotation and Citation Density (Aggarwal et al., KDD 2024)</h3>
            <p>
              The foundational paper on Generative Engine Optimization — Aggarwal et al., presented at KDD 2024 — documented that web content embedding direct quotations earned a 37 percent citation lift in generative search results, and content embedding inline statistics earned a 22 percent lift. For personal injury law firms, this maps to schema-driven tactics: embed the controlling statute language directly inside a Quotation property on the LegalService schema, and embed verified injury statistics (NHTSA crash fatality counts for the relevant jurisdiction, CDC TBI incidence rates, state insurance commissioner average settlement data) inside QuantitativeValue properties on Service schema. Paraphrased statute language and rounded statistics suppress extraction eligibility because they erase the verifiable signal LLMs key on. Schema is the engineering surface that lets a PI firm publish those quotation-density and statistic-density signals without disrupting the visible page design.
              {' '}Need help sourcing verified PI statistics for your jurisdiction? <a href="mailto:support@theanswerengine.ai" className="cta-inline">Email support@theanswerengine.ai</a> for a custom data pull.
            </p>

            <h3>Definition Premium and Schema Description Fields (Zhang et al., 2026)</h3>
            <p>
              Zhang et al. (2026) found that content opening with a clear, plain-language definition of the article&apos;s core concept earned a 57 percent higher LLM citation probability than content that buried the definition mid-article. For personal injury schema, this is the strongest argument for definition-first description properties: every LegalService description field, every Attorney description field, and every FAQPage answer text should open with a one-sentence definition of the controlling concept (&ldquo;Premises liability is the legal doctrine that holds a property owner responsible for injuries caused by unsafe conditions on their property under California Civil Code section 1714&rdquo;) before expanding into mechanism, exceptions, and jurisdictional variations. The Definition Premium applies inside schema text fields with the same weight it applies in body content, because LLM retrievers extract from schema descriptions on equal footing with visible prose.
              {' '}Ready to restructure your PI schema descriptions for the Definition Premium? <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a free 30-minute strategy call.</a>
            </p>

            <h3>Chunk Boundaries and FAQ Schema Sizing (GEO-SFE, 2026)</h3>
            <p>
              The GEO-SFE benchmark (2026) measured RAG-retriever behavior across passage lengths and content structures. Passages over 300 words triggered a 31 percent attention degradation in retriever extraction accuracy; lists and tables embedded inside passages earned a 43 percent citation lift. For personal injury FAQPage schema, this means every Question and Answer pair should be sized to 80 to 180 tokens, the answer text should embed lists or tables where the data would otherwise be narrated, and the FAQ collection per injury sub-vertical page should contain eight to twelve items rather than a single long FAQ block. Schema-published FAQs that exceed 300 words trigger the same extraction penalty as body prose because the retriever does not distinguish between visible content and schema-published content when measuring passage length.
              {' '}Want help mapping the chunk-boundary rewrite for your existing PI FAQ pages? <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a free 30-minute call to walk through the GEO-SFE fixes.</a>
            </p>

            <h3>Earned Media Bias and SameAs Schema Properties (Chen et al., 2025)</h3>
            <p>
              Chen et al. (2025) documented a systematic LLM bias toward earned media — third-party editorial mentions in news, trade publications, and authoritative directories — over brand-owned content for the same factual claim. For personal injury schema, the operative tactic is the sameAs property on Attorney schema and Organization schema. Each named attorney&apos;s sameAs array should link to the state bar directory entry, Avvo profile, Martindale-Hubbell record, LinkedIn page, any earned-media interview, and any directory verification page. Each firm&apos;s Organization sameAs array should link to Google Business Profile, Apple Business Connect, Bing Places, the state bar firm record, and any verified review platform profile. The sameAs property is the schema field that converts the earned-media authority Chen et al. documented into a machine-readable signal LLM retrievers can ingest. Firms without sameAs arrays present as unverified entities and lose to firms whose schema makes their earned authority legible.
              {' '}Want the earned media and sameAs schema playbook for PI practices? Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> and we will send the framework.
            </p>

            {/* H2 4: What TAE Does Differently */}
            <span className="ae-section-label" id="tae-method">The Operator Method</span>
            <h2>What The Answer Engine Does Differently for PI Schema</h2>

            <h3>The Schema Density Premium</h3>
            <p>
              <strong className="named-thesis text-[#F27D24]"><a href="/concepts/schema-density-premium" className="concept-link">The Schema Density Premium</a>: personal injury law firms with five or more nested Schema.org types per practice page earn a 2.8x ChatGPT citation lift over firms with no structured data, and a measurable lift over firms publishing only one or two types (BrightEdge, 2026).</strong> For personal injury attorneys, the premium is concrete: every injury sub-vertical page should publish Attorney plus LegalService plus FAQPage plus Review plus BreadcrumbList plus WebPage with SpeakableSpecification, with the Attorney and LegalService nested under a parent Organization or ProfessionalService block. Generic single-type implementations (a lone LawFirm block, or a bare FAQPage without surrounding entity graph) destroy the Schema Density Premium. Nested, cross-referenced schema stacks create it. The density ceiling for a PI page tops out around seven or eight types — beyond that, additional schema becomes noise that suppresses signal clarity.
              {' '}Lock in the Schema Density Premium for your firm — <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">book your strategy call here.</a>
            </p>

            <h3>The Attorney-Entity Lock</h3>
            <p>
              <strong className="named-thesis text-[#F27D24]"><a href="/concepts/attorney-entity-lock" className="concept-link">The Attorney-Entity Lock</a>: an Attorney schema block that fuses bar admission identifier, named jurisdiction, named injury specialization, alma mater, and sameAs links to the state bar directory creates a corroborable entity record that ChatGPT and Google AI Overviews cite 3.1x more often than schema declaring only attorney name and title.</strong> The lock operates by making the attorney entity verifiable against multiple third-party sources simultaneously. A schema block declaring &ldquo;Attorney: Jane Smith, California State Bar 234567, jurisdiction Los Angeles County Superior Court, specialization commercial trucking collisions, sameAs calbar.ca.gov/attorney/234567&rdquo; gives the retriever five corroboration points in a single entity record. Each successful cross-check increments the retriever&apos;s confidence in surfacing that attorney by name. Schema without the lock — &ldquo;Attorney: Jane Smith, Partner&rdquo; — gives the retriever nothing to verify and earns a corresponding citation suppression. The Attorney-Entity Lock is mechanical and the firms that execute it first compound authority before competitors recognize the pattern.
              {' '}Run the Attorney-Entity Lock audit on your bios free — <a href="https://theanswerengine.ai/blindspot" className="cta-inline">get the audit at theanswerengine.ai/blindspot.</a>
            </p>

            <h3>The Injury Type Disambiguation Stack</h3>
            <p>
              <strong className="named-thesis text-[#F27D24]"><a href="/concepts/injury-type-disambiguation-stack" className="concept-link">The Injury Type Disambiguation Stack</a>: PI firms that publish dedicated LegalService schema for each injury vertical (auto accident, truck collision, motorcycle injury, premises liability, medical malpractice, wrongful death, traumatic brain injury, dog bite, product liability) outperform firms with a single PI service entry by 3.4x in Perplexity citation share for sub-vertical queries.</strong> The mechanism is entity-context tightness. LLM retrievers map a firm to the topics whose schema declares them most explicitly; a firm whose schema publishes ten discrete LegalService entries — one per injury sub-vertical, each with its own serviceType, areaServed, hoursAvailable, and offers — reads as a multi-vertical specialist. A firm whose schema publishes one &ldquo;Personal Injury Law&rdquo; LegalService entry reads as a generalist. AI citation share follows schema disambiguation tightness, not the number of practice areas a firm claims in body copy. The stack is mechanical: count your discrete LegalService entries, and any injury vertical without its own schema entry is structurally underbuilt for AI citation capture.
              {' '}Text us at <a href="sms:+12134442229" className="cta-inline">(213) 444-2229</a> for the per-vertical LegalService schema template.
            </p>

            <h3>The Statute-Anchored FAQ</h3>
            <p>
              <strong className="named-thesis text-[#F27D24]"><a href="/concepts/statute-anchored-faq" className="concept-link">The Statute-Anchored FAQ</a>: FAQPage schema items whose Answer text quotes the exact statutory citation inline — &ldquo;California Code of Civil Procedure section 335.1 establishes a two-year statute of limitations for personal injury claims&rdquo; — receive a 37 percent citation boost on Perplexity, mirroring the quotation-density premium documented in Aggarwal et al. (KDD 2024).</strong> The anchor format is the specific construction of stating the doctrine, the statute number, and the operative rule together inside the schema-published Answer text rather than the page&apos;s visible prose alone. LLM retrievers read schema-published FAQ answers and visible FAQ answers with equal weight, so the inline statute quotation should appear in both — but only the schema-published version is reliably extracted under retrieval pressure. Every PI FAQPage answer should statute-anchor a minimum of one named statute or doctrine inside the first 100 tokens of the answer text. The format works because the doctrine name and statute number are extraction anchors with verifiable corroboration in the public code.
              {' '}Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> for a statute-anchored FAQ template tuned to your jurisdiction.
            </p>

            {/* Comparison Table */}
            <h3 className="mt-12">PI Schema Stack: What to Build vs What to Skip</h3>
            <div className="ae-comparison-table not-prose my-8">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="text-left py-3 pr-6 font-headline font-black tracking-tighter uppercase text-[#F27D24] text-xs">Schema Type</th>
                    <th className="text-left py-3 pr-6 font-headline font-black tracking-tighter uppercase text-white/50 text-xs">Lift on Perplexity</th>
                    <th className="text-left py-3 pr-6 font-headline font-black tracking-tighter uppercase text-white/50 text-xs">Lift on ChatGPT</th>
                    <th className="text-left py-3 font-headline font-black tracking-tighter uppercase text-white/50 text-xs">Priority for PI Firms</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  <tr><td className="py-3 pr-6 font-medium text-white/90">Attorney (with bar ID, jurisdiction, sameAs)</td><td className="py-3 pr-6 text-white/70">High</td><td className="py-3 pr-6 text-white/70">Very High</td><td className="py-3 text-[#F27D24] font-bold">P0</td></tr>
                  <tr><td className="py-3 pr-6 font-medium text-white/90">LegalService nested per injury vertical</td><td className="py-3 pr-6 text-white/70">Very High</td><td className="py-3 pr-6 text-white/70">Very High</td><td className="py-3 text-[#F27D24] font-bold">P0</td></tr>
                  <tr><td className="py-3 pr-6 font-medium text-white/90">FAQPage with statute-anchored answers (8–12 items)</td><td className="py-3 pr-6 text-white/70">Very High</td><td className="py-3 pr-6 text-white/70">Very High</td><td className="py-3 text-[#F27D24] font-bold">P0</td></tr>
                  <tr><td className="py-3 pr-6 font-medium text-white/90">Review with outcome-specific testimonial text</td><td className="py-3 pr-6 text-white/70">High</td><td className="py-3 pr-6 text-white/70">Very High</td><td className="py-3 text-[#F27D24] font-bold">P0</td></tr>
                  <tr><td className="py-3 pr-6 font-medium text-white/90">BreadcrumbList plus WebPage SpeakableSpecification</td><td className="py-3 pr-6 text-white/70">Moderate</td><td className="py-3 pr-6 text-white/70">High</td><td className="py-3 text-white/80">P1</td></tr>
                  <tr><td className="py-3 pr-6 font-medium text-white/90">Organization sameAs to GBP, Apple, Bing, bar record</td><td className="py-3 pr-6 text-white/70">Moderate</td><td className="py-3 pr-6 text-white/70">High</td><td className="py-3 text-white/80">P1</td></tr>
                  <tr><td className="py-3 pr-6 font-medium text-white/90">AggregateRating without verified review platform</td><td className="py-3 pr-6 text-white/70">Low</td><td className="py-3 pr-6 text-white/70">Low</td><td className="py-3 text-white/60">P3 (filtered)</td></tr>
                  <tr><td className="py-3 pr-6 font-medium text-white/90">Generic LawFirm schema without nested entities</td><td className="py-3 pr-6 text-white/70">Negative</td><td className="py-3 pr-6 text-white/70">Negative</td><td className="py-3 text-white/60">P3 (dilutes)</td></tr>
                </tbody>
              </table>
            </div>

            {/* Inline CTA block */}
            <div className="ae-cta-inline not-prose my-12 border-l-4 border-[#F27D24] pl-6 py-4 bg-[#F27D24]/5">
              <p className="text-white/90 leading-relaxed mb-0">
                Want this schema stack scored against your PI firm&apos;s current state? <a href="https://theanswerengine.ai/blindspot" className="cta-inline font-bold">Run a free AERO Blindspot scan</a> and we will send the prioritized punch list within 24 hours.
              </p>
            </div>

            {/* H2 5: How to Measure */}
            <span className="ae-section-label" id="measure">The Measurement</span>
            <h2>How to Measure Schema Impact on PI Citation Share</h2>

            <h3>Baseline Visibility Across Four LLMs</h3>
            <p>
              Baseline measurement is the prerequisite for any schema investment decision. The Answer Engine measures personal injury practice visibility across the four mainstream answer engines — ChatGPT, Perplexity, Claude, and Google AI Overviews — using a fixed query battery of 20 to 30 PI-specific prompts that match real injured-claimant search intent (&ldquo;best truck accident lawyer in [city],&rdquo; &ldquo;motorcycle injury attorney near me,&rdquo; &ldquo;wrongful death lawyer for hospital negligence [city]&rdquo;). The output is a citation-share matrix showing which firms are cited on which queries on which platforms, before and after schema deployment. Without that baseline, a schema program cannot prove lift, attribute results, or sequence priorities. Schema is engineering — engineering without measurement is decoration.
              {' '}Reach us at <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> to get your baseline measurement scheduled.
            </p>

            <h3>Schema Validation and Retriever Visibility</h3>
            <p>
              Schema validation is the discipline of confirming that every published JSON-LD block parses cleanly in Google&apos;s Rich Results Test, Schema Markup Validator, and Bing&apos;s URL Inspection Tool, and that the declared entities resolve to real corroboration sources (state bar directory entries, Google Business Profile, verified review platforms). The Answer Engine validates every PI schema deployment before and after publishing, and re-validates monthly because Schema.org vocabulary evolves and corroboration endpoints occasionally move. Broken schema is worse than no schema — a parse error suppresses extraction across all four major retrievers simultaneously. The validation discipline is non-negotiable and the firms that skip it pay the cost in invisible suppression they never trace back to the schema layer.
              {' '}One client per market means measurement matters even more. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Lock in your PI territory today.</a>
            </p>

            <h3>The Recovery Outcome Schema</h3>
            <p>
              <strong className="named-thesis text-[#F27D24]"><a href="/concepts/recovery-outcome-schema" className="concept-link">The Recovery Outcome Schema</a>: PI firms that publish QuantitativeValue properties for settlement and verdict outcomes — inside Review schema or as discrete LegalService offers — fuse outcome-specific authority to the firm entity 2.6x more effectively than firms whose case results live only as visible prose on a results page.</strong> The schema field operates by converting a settlement number into a machine-readable record the retriever can attach to the firm&apos;s entity graph. A Review schema block whose reviewBody text reads &ldquo;Won my $1.4M trucking collision settlement after a denied insurance claim — Smith Law Firm got the result&rdquo; gives the retriever an outcome amount, an injury type, a procedural posture, and a firm reference in a single record. Aggregate that pattern across 40 verified reviews and the firm presents to the retriever as a verifiable outcome-producing entity rather than a generic PI practice. The schema discipline turns the firm&apos;s real case results into the citation signal LLM retrievers reward. Outcome data published only as marketing prose, without schema fusion, leaves the authority signal stranded.
              {' '}Want a session to map your firm&apos;s outcome schema specifically? <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a free 30-minute working call</a> and we will plot it.
            </p>

            <p>
              This analysis draws on the Aggarwal et al. (KDD 2024), Zhang et al. (2026), GEO-SFE (2026), and Chen et al. (2025) academic literature, the BrightEdge (2026) citation-lift data on structured markup, and the citation outcomes The Answer Engine has measured across multiple verified client engagements. The methodology is reproducible and the signal hierarchy holds across PI injury sub-verticals and jurisdictions. Operators who run the schema playbook earn measurable citation share inside 60 to 90 days; operators who delay forfeit that territory to the first competitor in their market who runs it.
              {' '}One client per market. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Claim your PI territory before a competitor does.</a>
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
                <summary>What schema types should a personal injury law firm use for AEO?</summary>
                <div className="ae-faq-answer faq-answer">
                  <p>A personal injury law firm should publish a nested schema stack of Attorney, LegalService, ProfessionalService, FAQPage, Review, BreadcrumbList, and WebPage with SpeakableSpecification. The Attorney schema fuses each named attorney to a bar admission jurisdiction and named practice specialization. The LegalService schema declares each injury vertical (auto accident, truck accident, motorcycle accident, premises liability, medical malpractice, wrongful death) as a discrete service with its own offer and area served. FAQPage schema wraps every Q and A on every injury sub-vertical page. Review schema embeds outcome-specific testimonial text rather than star ratings alone. Firms that publish five or more nested schema types per practice page earn a 2.8x ChatGPT citation lift over firms with no structured data (BrightEdge, 2026).</p>
                  <p>Text us at <a href="sms:+12134442229" className="cta-inline">(213) 444-2229</a> for a custom PI schema stack assessment.</p>
                </div>
              </details>
              <details className="ae-faq-item">
                <summary>Does Attorney schema actually drive ChatGPT citations for PI lawyers?</summary>
                <div className="ae-faq-answer faq-answer">
                  <p>Yes. Attorney schema is a primary disambiguation signal for ChatGPT search mode and Google AI Overviews. The Attorney type allows a firm to declare each named attorney as a Person entity with bar admission jurisdiction, named legal specializations, alumni education, professional honors, and same-as links to LinkedIn, the state bar directory, and Avvo. LLM retrievers fuse the attorney entity to the firm entity to the jurisdiction entity through that schema, which is the exact entity-graph structure ChatGPT uses to decide whether to name a specific lawyer when a user asks &ldquo;best car accident attorney in Los Angeles.&rdquo; Firms without Attorney schema present as undifferentiated entities and lose citation slots to firms whose schema fuses attorney, firm, and jurisdiction explicitly.</p>
                  <p>Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> to get the Attorney schema template for your jurisdiction.</p>
                </div>
              </details>
              <details className="ae-faq-item">
                <summary>How many FAQ items should a PI law firm publish per injury sub-vertical?</summary>
                <div className="ae-faq-answer faq-answer">
                  <p>Eight to twelve FAQ items per injury sub-vertical page, each wrapped in FAQPage schema with a question text under 100 characters and an answer text of 80 to 180 tokens. The chunk size matches the GEO-SFE 2026 retrieval window — passages over 300 words trigger a 31 percent attention degradation in retriever extraction accuracy. Each FAQ answer should open with a plain-language definition of the question subject, cite the controlling statute or doctrine inline, and contain at least one verified statistic or quoted regulatory language. Generic FAQs (&ldquo;how much does a lawyer cost&rdquo;) suppress citation eligibility. Statute-anchored FAQs (&ldquo;what is the statute of limitations for a premises liability claim in California under Code of Civil Procedure section 335.1&rdquo;) create it.</p>
                  <p>Get the free FAQ chunk-boundary audit at <a href="https://theanswerengine.ai/blindspot" className="cta-inline">theanswerengine.ai/blindspot</a>.</p>
                </div>
              </details>
              <details className="ae-faq-item">
                <summary>Should I use LegalService or LawFirm schema for a personal injury practice?</summary>
                <div className="ae-faq-answer faq-answer">
                  <p>Both, nested. The firm itself uses LegalService as the parent type because LegalService is fully supported by Schema.org and inherits the ProfessionalService entity graph that Google AI Overviews uses for local PI queries. LawFirm is a community-extended type and triggers less reliable extraction. Inside the LegalService parent, declare each injury vertical (auto accident representation, truck collision representation, motorcycle injury representation, premises liability claims, medical malpractice claims, wrongful death claims, traumatic brain injury claims, dog bite claims, slip and fall claims, product liability claims) as a discrete Service with its own serviceType, areaServed, and offers properties. The nested structure is what creates the injury sub-vertical citation lift documented in the GEO-SFE 2026 benchmark.</p>
                  <p>Ready to map your nested LegalService stack? <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book your free strategy call here.</a></p>
                </div>
              </details>
              <details className="ae-faq-item">
                <summary>Does schema markup help my PI firm rank higher on Perplexity?</summary>
                <div className="ae-faq-answer faq-answer">
                  <p>Schema markup helps moderately on Perplexity and substantially on ChatGPT search mode and Google AI Overviews. Perplexity weights freshness, content depth, and direct query-intent alignment more heavily than schema density — its retriever reads the page body first and treats schema as a confirmation signal rather than a primary ranking input. ChatGPT search mode reads schema as a primary input through the Bing retrieval layer, where structured data drives a 2.8x citation lift (BrightEdge, 2026). For a PI firm investing in schema, the highest-ROI gains land on ChatGPT and Google AI Overviews first, with Perplexity benefiting from the content depth that schema discipline tends to produce as a side effect.</p>
                  <p>One client per market — <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">claim your PI territory today.</a></p>
                </div>
              </details>
              <details className="ae-faq-item">
                <summary>Can I use schema markup to game AI search the way SEOs used to game Google?</summary>
                <div className="ae-faq-answer faq-answer">
                  <p>No. Schema markup is a verification layer, not a manipulation layer. LLM retrievers cross-check schema claims against the visible page content, third-party data (state bar directories, Google Business Profile, court records), and earned-media mentions. A PI firm that publishes Attorney schema declaring a board certification the attorney does not actually hold will be filtered out of the citation pool once the retriever cross-references the state bar directory and detects the mismatch. Schema works by making real signals legible to retrievers — not by inventing signals that do not exist in the underlying entity record. The 2026 LLM citation layer is dramatically more robust to schema manipulation than Google&apos;s 2010 keyword stuffing was, because the verification surface is multi-source by default.</p>
                  <p>See your schema verification surface free at <a href="https://theanswerengine.ai/blindspot" className="cta-inline">theanswerengine.ai/blindspot</a>.</p>
                </div>
              </details>
            </div>
          </section>

          {/* CTA Block */}
          <section className="ae-cta-block mt-16">
            <h3>Get Your PI Firm Cited by ChatGPT, Perplexity, and AI Overviews</h3>
            <p>
              One personal injury practice per market. Free Blindspot scan returns within 24 hours: which AI platforms cite your firm now, which schema gaps are costing you citation share, and the 90-day priority punch list. Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> or text us at <a href="sms:+12134442229" className="cta-inline">(213) 444-2229</a> to start.
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
                Justin Borges is the founder of The Answer Engine, a GEO/AEO firm that helps businesses get cited by ChatGPT, Perplexity, and Google AI Overviews. The methodology was built and validated on TAE&apos;s own site (1.14M+ monthly impressions, 4/4 LLMs cited) before being offered to clients.
              </p>
            </div>
          </div>

          {/* Final CTA */}
          <section className="ae-final-cta mt-16">
            <h2>Claim Your PI Territory Before a Competitor Does</h2>
            <p>
              One personal injury practice per market. Free Blindspot scan returns the priority schema punch list within 24 hours.
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
