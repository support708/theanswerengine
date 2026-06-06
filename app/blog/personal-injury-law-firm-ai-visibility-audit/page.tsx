import type { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';

export const dynamic = 'force-dynamic';


export const metadata: Metadata = {
  title: 'Personal Injury Law Firm AI Visibility Audit | The Answer Engine',
  description:
    'The AEO audit framework personal injury firms use to measure citation share on ChatGPT, Perplexity, Claude, and Google AI Overviews. Diagnose the blindspots in 90 days.',
  keywords:
    'personal injury law firm ai visibility audit, pi law firm aeo audit, citation share audit, chatgpt visibility audit, perplexity audit for lawyers, ai search visibility for pi firms, llm citation diagnostic, aeo audit framework, personal injury aeo, law firm ai search audit',
  openGraph: {
    title: 'Personal Injury Law Firm AI Visibility Audit',
    description:
      'The 90-day citation share diagnostic for PI firms. Measure your visibility on ChatGPT, Perplexity, Claude, and Google AI Overviews — and fix the blindspots.',
    type: 'article',
    url: 'https://theanswerengine.ai/blog/personal-injury-law-firm-ai-visibility-audit',
    publishedTime: '2026-06-06T00:00:00.000Z',
    authors: ['Justin Borges'],
    images: [
      {
        url: 'https://theanswerengine.ai/blog/personal-injury-law-firm-ai-visibility-audit.svg',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Personal Injury Law Firm AI Visibility Audit',
    description:
      'The 90-day citation share diagnostic for PI firms. Measure visibility on ChatGPT, Perplexity, Claude, and Google AI Overviews.',
  },
  alternates: {
    canonical: 'https://theanswerengine.ai/blog/personal-injury-law-firm-ai-visibility-audit',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Personal Injury Law Firm AI Visibility Audit: The 90-Day Citation Share Diagnostic',
  description:
    'The complete audit framework personal injury law firms use to measure citation share across ChatGPT, Perplexity, Claude, and Google AI Overviews — the Citation Share Index, the Blindspot Quotient, the Schema Diagnostic Score, and the operator method for closing the gap inside 90 days.',
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
    '@id': 'https://theanswerengine.ai/blog/personal-injury-law-firm-ai-visibility-audit',
  },
  image: 'https://theanswerengine.ai/blog/personal-injury-law-firm-ai-visibility-audit.svg',
  about: [
    { '@type': 'Thing', name: 'AI Visibility Audit' },
    { '@type': 'Thing', name: 'Answer Engine Optimization' },
    { '@type': 'Thing', name: 'Personal Injury Law' },
    { '@type': 'Thing', name: 'Citation Share' },
    { '@type': 'Thing', name: 'ChatGPT' },
    { '@type': 'Thing', name: 'Perplexity' },
    { '@type': 'Thing', name: 'Google AI Overviews' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a personal injury law firm AI visibility audit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A personal injury law firm AI visibility audit is the structured diagnostic that measures how often, where, and on which queries a PI firm gets cited across ChatGPT, Perplexity, Claude, and Google AI Overviews. The audit runs a fixed query battery of 20 to 30 PI-specific prompts that mirror real injured-claimant intent (best truck accident lawyer in [city], motorcycle injury attorney near me, wrongful death lawyer for hospital negligence). The output is a citation-share matrix showing which firms are named on which platforms for which queries, a schema diagnostic score, a competitor citation map, and a 90-day priority punch list. The audit converts AI search visibility from a guess into a measurement, and from a measurement into a fix-ordering decision.',
      },
    },
    {
      '@type': 'Question',
      name: 'How often should a personal injury firm audit AI visibility?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A baseline audit runs once before any AEO work begins, then quarterly through year one, then biannually thereafter. The quarterly cadence catches retriever-index updates (Bing reindexes for ChatGPT every six to eight weeks, Perplexity refreshes its 200B+ URL index continuously), schema validation drift, and competitor citation moves. Firms operating in saturated PI markets (Los Angeles, Houston, Chicago, Atlanta, Miami, Phoenix) benefit from a tighter 60-day cycle because citation share shifts faster when more firms are running AEO programs simultaneously. The audit itself takes 24 to 48 hours of measurement plus a brief implementation review.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which AI platforms matter most for personal injury visibility?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'All four mainstream answer engines matter, but the citation overlap between them is only 11 percent (AuthorityTech, 680M citation analysis), so a PI firm cannot win on one platform and assume the others follow. ChatGPT search mode is the highest-volume citation surface for PI queries and reads through Bing\'s index with structured data as a primary ranking input. Perplexity is the highest-intent surface, with users sending follow-up questions that resolve into actual claimant inquiries at a higher rate. Google AI Overviews owns the largest organic surface but cites fewer sources per response. Claude cites less frequently but the citations it does produce skew toward higher-authority sources and convert disproportionately well. A complete audit measures all four because each platform reveals a different blindspot.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does an AI visibility audit measure that Google Analytics does not?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Google Analytics measures traffic the firm received. An AI visibility audit measures citation events the firm did or did not receive across LLM responses — a distinct, leading indicator that traffic does not capture. The audit measures Citation Share Index across four platforms, Schema Diagnostic Score against the LLM verification surface, Blindspot Quotient (queries on which the firm is invisible while a competitor is cited), Verification Surface Test (which sameAs and corroboration links resolve), Citation Overlap Index (which queries cite the firm on multiple platforms versus one), and Sub-Vertical Audit Lens (per-injury-type breakdown of citation strength). None of these signals appear in Google Analytics, GA4, or any traditional SEO platform, because the underlying event happens inside an LLM response rather than as an HTTP request.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to fix an AI visibility audit\'s findings?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A PI firm with no prior AEO work typically closes the highest-priority audit findings inside 60 to 90 days. The first 30 days handle schema deployment (Attorney plus LegalService plus FAQPage plus Review plus BreadcrumbList plus WebPage with SpeakableSpecification), sameAs verification across bar directories and review platforms, and the foundational content audit that aligns body content with the schema-declared entity graph. Days 31 to 60 produce the sub-vertical content layer — one page per injury vertical with statute-anchored FAQ stacks and outcome-specific Review schema. Days 61 to 90 run the re-audit, measure lift across all four platforms, and identify the next priority layer. Firms in less competitive markets see citation lift inside 30 to 45 days. Saturated markets take the full 90-day window.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I run a personal injury AI visibility audit myself?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Partially. A firm can run the citation-share measurement layer by issuing 20 to 30 PI-specific queries to ChatGPT, Perplexity, Claude, and Google AI Overviews and recording which firms are cited. The data is real and the methodology is reproducible. The diagnostic layer (Schema Diagnostic Score, Verification Surface Test, Sub-Vertical Audit Lens) requires familiarity with Schema.org validation, the GEO-SFE chunk-boundary thresholds, the Aggarwal et al. quotation-density premium, and the cross-platform retrieval pipelines. Most firms run the measurement layer in-house and outsource the diagnostic and fix-ordering layers. The Answer Engine\'s free Blindspot scan delivers both layers as a single output and returns within 24 hours.',
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
      name: 'Personal Injury Law Firm AI Visibility Audit',
      item: 'https://theanswerengine.ai/blog/personal-injury-law-firm-ai-visibility-audit',
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
  serviceType: ['Answer Engine Optimization', 'AEO Content', 'LLM Citation Building', 'AI Visibility Audit'],
};

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://theanswerengine.ai/blog/personal-injury-law-firm-ai-visibility-audit',
  url: 'https://theanswerengine.ai/blog/personal-injury-law-firm-ai-visibility-audit',
  name: 'Personal Injury Law Firm AI Visibility Audit',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['.article-summary', '.key-insight', 'h2', '.faq-answer', '.stat-block'],
  },
};

export default function PersonalInjuryLawFirmAiVisibilityAuditPage() {
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
            <span className="text-white/60">Personal Injury Law Firm AI Visibility Audit</span>
          </nav>

          {/* Hero */}
          <header className="ae-article-hero mb-12 rounded-xl overflow-hidden" style={{ maxHeight: 460 }}>
            <img
              src="/blog/personal-injury-law-firm-ai-visibility-audit.svg"
              alt="Personal injury law firm AI visibility audit — the 90-day citation share diagnostic for PI practices"
              style={{ width: '100%', height: 460, objectFit: 'cover', display: 'block' }}
              loading="eager"
            />
          </header>

          <div className="mb-6 inline-block">
            <span className="font-headline text-xs font-black tracking-tighter uppercase bg-[#F27D24]/10 text-[#F27D24] border border-[#F27D24]/30 px-3 py-1">
              AI Visibility Audit
            </span>
          </div>

          <h1 className="font-headline text-4xl md:text-6xl font-black tracking-tighter uppercase mb-6 leading-none">
            Personal Injury Law Firm{' '}
            <span className="text-[#F27D24]">AI Visibility Audit</span>: The 90-Day Citation Share Diagnostic
          </h1>

          <p className="article-summary text-lg md:text-xl text-white/70 max-w-3xl leading-relaxed mb-8">
            Injured claimants are asking ChatGPT, Perplexity, Claude, and Google AI Overviews to name a personal
            injury lawyer. Three to five firms make the cut on each platform. This is the audit framework PI
            practices use to find out whether they are one of them — and to engineer the fix when they are not.
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
              <div className="ae-stat-emoji">🔍</div>
              <div className="ae-stat-value ae-accent">3–5</div>
              <div className="ae-section-label stat-block">PI firms cited per AI answer — not 10 blue links</div>
            </div>
            <div className="ae-stat-card">
              <div className="ae-stat-emoji">📊</div>
              <div className="ae-stat-value ae-accent">11%</div>
              <div className="ae-section-label stat-block">citation overlap between Perplexity and ChatGPT (AuthorityTech, 680M citations)</div>
            </div>
            <div className="ae-stat-card">
              <div className="ae-stat-emoji">⚖️</div>
              <div className="ae-stat-value ae-accent">2.8x</div>
              <div className="ae-section-label stat-block">ChatGPT citation lift for pages with nested schema stacks (BrightEdge, 2026)</div>
            </div>
            <div className="ae-stat-card">
              <div className="ae-stat-emoji">⏱️</div>
              <div className="ae-stat-value ae-accent">90</div>
              <div className="ae-section-label stat-block">days to close most audit findings on a PI practice</div>
            </div>
          </div>

          {/* Cheat Sheet (TOC) */}
          <div className="ae-cheat-sheet mb-16">
            <div className="ae-cheat-sheet-title">The PI Visibility Audit Cheat Sheet</div>
            <ol className="list-decimal pl-6 space-y-2 text-white/80">
              <li><a href="#what-is-audit" className="hover:text-[#F27D24] transition-colors">What an AI Visibility Audit Is for Personal Injury Law Firms</a></li>
              <li><a href="#four-platform" className="hover:text-[#F27D24] transition-colors">The Four-Platform Citation Diagnostic</a></li>
              <li><a href="#research" className="hover:text-[#F27D24] transition-colors">What the Research Says About PI Audit Methodology</a></li>
              <li><a href="#tae-method" className="hover:text-[#F27D24] transition-colors">The TAE Audit Method: The AERO Framework</a></li>
              <li><a href="#measure" className="hover:text-[#F27D24] transition-colors">How to Read and Act on Your Audit Results</a></li>
              <li><a href="#faq" className="hover:text-[#F27D24] transition-colors">Frequently Asked Questions</a></li>
            </ol>
          </div>

          <div className="ae-article-body prose prose-invert prose-lg max-w-none">
            {/* Intro */}
            <p className="key-insight">
              <strong className="named-thesis text-[#F27D24]">A personal injury law firm AI visibility audit</strong> is the structured diagnostic that measures how a PI practice is cited — or invisible — across ChatGPT, Perplexity, Claude, and Google AI Overviews on the specific injured-claimant queries that drive case intake. The audit is not a Google ranking report, an Ahrefs export, or a Lighthouse scan. The audit is a citation-event measurement layered over a schema diagnostic and a verification surface test, producing a 90-day priority punch list that converts AI search visibility from a guess into an engineered outcome. Personal injury firms whose audit data is current and acted on capture compounding citation territory; firms whose audit data does not exist forfeit that territory to the first competitor in market who runs the diagnostic.
              {' '}Want to know which AI platforms cite your PI firm right now and which competitors are eating your share? <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Run a free Blindspot scan.</a>
            </p>

            <p>
              We built The Answer Engine&apos;s audit methodology against our own site before offering it to clients, drawing on the foundational academic literature on Generative Engine Optimization — Aggarwal et al. (KDD 2024), Zhang et al. (2026), the GEO-SFE benchmark (2026), and Chen et al. (2025) on the earned-media bias inside LLM training corpora. That literature is less than two years old, which means the audit landscape for personal injury law in 2026 looks like the SEO landscape did in 2010 — wide open, with a small first-mover advantage that compounds rapidly. AI citation optimization is still an open territory in personal injury law because most firms still treat AI visibility as a side effect of SEO rather than as a discrete signal stack with its own measurement discipline. This guide is the operator&apos;s playbook for closing that gap.
              {' '}Text us at <a href="sms:+12134442229" className="cta-inline">(213) 444-2229</a> to schedule a visibility audit for your firm.
            </p>

            {/* H2 1: What an AI Visibility Audit Is */}
            <span className="ae-section-label" id="what-is-audit">The Foundation</span>
            <h2>What an AI Visibility Audit Is for Personal Injury Law Firms</h2>

            <h3>The Audit Defined for PI Practice</h3>
            <p>
              An AI visibility audit for a personal injury law firm is the structured measurement and diagnostic process that records which AI platforms cite the firm on which injured-claimant queries, scores the schema and content signals the LLM retrievers consume, and ranks the highest-leverage fixes the firm can deploy inside the next 90 days. The audit runs a fixed query battery — typically 20 to 30 PI-specific prompts that mirror real claimant intent — against ChatGPT search mode, Perplexity, Claude, and Google AI Overviews simultaneously. The output is a citation-share matrix, a schema diagnostic score, a verification surface report, a competitor citation map, and a priority punch list. Each element of the audit measures a discrete LLM input that traditional analytics platforms do not capture, and each measurement maps to a specific schema, content, or earned-media intervention the firm can execute.
              {' '}One personal injury practice per market. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Check if your territory is still open before a competitor claims it.</a>
            </p>

            <h3>Why Traditional SEO Audits Miss the PI Citation Layer</h3>
            <p>
              Traditional SEO audits measure traffic, backlinks, keyword rankings, and Core Web Vitals. Those signals describe the Google ranking layer, which still drives a meaningful share of PI case intake but no longer drives the conversion-weighted majority. A SEMrush or Ahrefs export cannot tell a PI firm whether ChatGPT named them on the query &ldquo;best truck accident attorney in Houston,&rdquo; whether Perplexity cited a competitor on &ldquo;hospital negligence lawyer near me,&rdquo; or whether Google AI Overviews surfaced the firm&apos;s premises liability page above the organic results. The citation events happen inside LLM responses, not as HTTP requests, so the traditional audit instruments are structurally blind to them. The visibility audit is the instrument category that measures the layer SEO does not. Both layers matter — but auditing only one of them leaves the firm operating with half the data its competitors increasingly have.
              {' '}Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> for the full audit framework comparison.
            </p>

            <h3>The Four Audit Layers a PI Firm Needs</h3>
            <p>
              A complete personal injury AI visibility audit operates across four discrete layers, each measuring a distinct signal: the measurement layer (citation share across four platforms), the schema diagnostic layer (Schema.org type density, validation status, sameAs corroboration), the content layer (chunk-boundary discipline, definition density, statute anchoring, quotation density), and the earned-media layer (third-party mentions, directory presence, verified review platform records). Each layer maps to a specific fix surface. Firms that audit only the measurement layer end up with a citation-share spreadsheet and no idea why the citations are missing. Firms that audit only the schema layer end up with valid JSON-LD and no understanding of which queries the schema is failing to win. The four-layer audit is the minimum viable instrument for an operator-grade decision.
              {' '}Run all four layers free — <a href="https://theanswerengine.ai/blindspot" className="cta-inline">get the audit at theanswerengine.ai/blindspot.</a>
            </p>

            {/* H2 2: Four-Platform Citation Diagnostic */}
            <span className="ae-section-label" id="four-platform">The Mechanism</span>
            <h2>The Four-Platform Citation Diagnostic</h2>

            <h3>How the Query Battery Is Designed</h3>
            <p>
              The query battery is the fixed list of 20 to 30 PI-specific prompts the audit issues against each of the four mainstream answer engines. Battery design follows three rules. First, every query mirrors real injured-claimant intent — natural language phrasing, jurisdiction-bound, injury-specific (&ldquo;best motorcycle accident lawyer in Phoenix,&rdquo; &ldquo;truck collision attorney for commercial vehicle injury Texas,&rdquo; &ldquo;wrongful death lawyer for hospital negligence Los Angeles&rdquo;). Second, the battery covers each of the firm&apos;s declared sub-verticals (auto, truck, motorcycle, premises, medical malpractice, wrongful death, traumatic brain injury, dog bite, product liability, slip and fall) with at least two queries each. Third, the battery includes both branded queries (&ldquo;[firm name] reviews,&rdquo; &ldquo;is [firm name] a good personal injury lawyer&rdquo;) and unbranded queries, because the citation strength on branded queries reveals trust-signal posture while unbranded queries reveal territory capture.
              {' '}Want a battery built for your jurisdiction and injury mix? <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a free 30-minute scoping call.</a>
            </p>

            <h3>The Per-Platform Retrieval Pipeline</h3>
            <p>
              Each AI platform retrieves through a distinct pipeline and rewards a distinct signal stack. ChatGPT search mode retrieves through Bing&apos;s index, where structured data is a primary ranking input and drives a 2.8x citation lift (BrightEdge, 2026). Perplexity retrieves through its proprietary 200B+ URL index and weights freshness, content depth, and direct query-intent alignment more heavily than schema density, reading schema as a confirmation signal. Google AI Overviews retrieves through Google&apos;s ranking layer with AI-specific freshness and Knowledge Graph fusion signals that lean heavily on schema-declared entities. Claude retrieves more selectively and cites higher-authority sources at lower volume. The four pipelines produce only 11 percent citation overlap (AuthorityTech, 680M citation analysis), which means a PI firm cannot infer its visibility on one platform from its visibility on another — and an audit that measures only one platform leaves three blindspots unaddressed.
              {' '}Reach us at <a href="sms:+12134442229" className="cta-inline">(213) 444-2229</a> to walk through your per-platform audit data.
            </p>

            <h3>The Competitor Citation Map</h3>
            <p>
              The competitor citation map is the audit output that records which competing PI firms are cited on each query the firm is not. The map is built by tagging every cited firm in every audit response across all four platforms, deduplicating, and ranking by total citation count per query category. A PI firm whose audit reveals a single rival captured 9 of 30 queries on Perplexity while the firm itself captured 0 has a specific, actionable competitor problem — not a generic visibility problem. The map identifies which firms are running AEO programs, which schema or content patterns those firms execute, and which queries are still open territory neither the firm nor a leading competitor has captured. Open queries are the highest-leverage capture targets because the first firm whose schema and content win retrieval claims that slot for the duration of the index cycle.
              {' '}One client per market — <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">claim your PI territory before a competitor does.</a>
            </p>

            {/* H2 3: Research */}
            <span className="ae-section-label" id="research">The Research</span>
            <h2>What the Research Says About PI Audit Methodology</h2>

            <h3>Quotation Density and Citation Lift (Aggarwal et al., KDD 2024)</h3>
            <p>
              Aggarwal et al., presented at KDD 2024, documented that web content embedding direct quotations earned a 37 percent citation lift in generative search results and content embedding inline statistics earned a 22 percent lift. For a personal injury audit, this maps to two specific diagnostic checks. First, the audit measures whether the firm&apos;s practice-area pages embed quoted statutory language inline (California Code of Civil Procedure section 335.1, Texas Civil Practice and Remedies Code section 16.003, the relevant Federal Motor Carrier Safety Regulation). Second, the audit measures whether outcome and claim pages embed verified statistics from NHTSA, CDC, the state insurance commissioner, or court records inline rather than as paraphrase. Practice pages that fail both checks structurally underweight against the documented Aggarwal lift and surface in the audit as immediate high-leverage fixes.
              {' '}Need help sourcing verified PI statistics and statute language? <a href="mailto:support@theanswerengine.ai" className="cta-inline">Email support@theanswerengine.ai</a> for a jurisdiction-specific data pull.
            </p>

            <h3>The Definition Premium and Audit Scoring (Zhang et al., 2026)</h3>
            <p>
              Zhang et al. (2026) found that content opening with a clear, plain-language definition of the article&apos;s core concept earned a 57 percent higher LLM citation probability than content burying the definition mid-article. The visibility audit scores every practice-area page, FAQ block, and bio page against the Definition Premium by reading the first 100 tokens of each section. A premises liability page that opens with &ldquo;Premises liability is the legal doctrine that holds a property owner responsible for injuries caused by unsafe conditions on their property&rdquo; scores a Definition Premium pass. A page that opens with &ldquo;Our experienced premises liability attorneys have over 30 years of combined experience helping injured Californians&rdquo; scores a fail and surfaces as a high-leverage rewrite candidate. The audit converts the academic finding into a per-section rubric a content team can execute against the same week.
              {' '}Want the Definition Premium rubric scored against your existing PI pages? <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book your free strategy call here.</a>
            </p>

            <h3>The Chunk Ceiling and FAQ Audit (GEO-SFE, 2026)</h3>
            <p>
              The GEO-SFE benchmark (2026) measured RAG-retriever behavior across passage lengths and content structures. Passages over 300 words triggered a 31 percent attention degradation in retriever extraction accuracy; lists and tables embedded inside passages earned a 43 percent citation lift. The audit applies the Chunk Ceiling to every visible passage and every schema-published FAQ answer. Personal injury FAQ pages that publish single-block 600-word answers fail the audit on extraction efficiency. PI practice descriptions that narrate every injury vertical as a single 1,200-word block fail the audit on attention budget. The fix is mechanical: split into 80-to-180-token chunks, embed lists or tables where data is otherwise narrated, restate the subject in each new chunk (no anaphora). The audit flags every overweight chunk by token count and produces a rewrite spec the content team can implement chunk by chunk.
              {' '}Run the chunk-boundary scan on your existing PI pages free at <a href="https://theanswerengine.ai/blindspot" className="cta-inline">theanswerengine.ai/blindspot.</a>
            </p>

            <h3>The Earned-Media Bias and SameAs Audit (Chen et al., 2025)</h3>
            <p>
              Chen et al. (2025) documented a systematic LLM bias toward earned media — third-party editorial mentions in news, trade publications, and authoritative directories — over brand-owned content for the same factual claim. The visibility audit measures every named attorney&apos;s sameAs array against five corroboration endpoints (state bar directory, Avvo, Martindale-Hubbell, LinkedIn, any earned-media interview) and every firm&apos;s Organization sameAs against five more (Google Business Profile, Apple Business Connect, Bing Places, the state bar firm record, verified review platforms). The audit reports which endpoints are missing, which are broken, and which exist but are not linked from the firm&apos;s schema. Personal injury firms with sparse sameAs arrays present to the retriever as unverified entities, which suppresses citation regardless of how thorough the on-page schema is otherwise. The fix is to populate the sameAs arrays and verify every endpoint resolves.
              {' '}Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> for the earned-media and sameAs audit checklist.
            </p>

            {/* H2 4: TAE Audit Method */}
            <span className="ae-section-label" id="tae-method">The Operator Method</span>
            <h2>The TAE Audit Method: The AERO Framework</h2>

            <h3>The Citation Share Index (CSI)</h3>
            <p>
              <strong className="named-thesis text-[#F27D24]"><a href="/concepts/citation-share-index" className="concept-link">The Citation Share Index</a>: a single percentage value that expresses how often a personal injury firm is named across the audit&apos;s full query battery on all four major answer engines combined, normalized against the citable pool size of each platform.</strong> A PI firm with CSI of 22 percent is cited on 22 of every 100 query-platform pairs in the battery. The index is the single most useful audit number because it collapses four-platform variability into one tracking metric the firm can monitor quarterly. CSI under 5 percent signals a firm that has not yet entered the AI citation pool — usually a schema and content discipline gap. CSI between 5 and 20 percent signals a firm with foundational presence but undeveloped sub-vertical and earned-media depth. CSI above 30 percent signals a firm that has captured the high-value queries in its market and is now defending territory. The index updates as platforms reindex; the audit recomputes it each cycle.
              {' '}Want your firm&apos;s CSI measured this quarter? <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a free 30-minute strategy call.</a>
            </p>

            <h3>The Blindspot Quotient (BQ)</h3>
            <p>
              <strong className="named-thesis text-[#F27D24]"><a href="/concepts/blindspot-quotient" className="concept-link">The Blindspot Quotient</a>: the share of audit queries on which a personal injury firm is invisible while at least one competitor is cited — the precise measure of how much citation territory the firm has surrendered to a competing operator in its market.</strong> BQ isolates the queries the firm loses while a rival wins, which is a more actionable signal than raw invisibility. A query no firm wins is open territory; a query a single rival wins on three of four platforms is captured territory, and the firm has a defined competitive surface to engineer against. The audit reports BQ both as an aggregate percentage and as a per-competitor breakdown, naming which rivals captured which query slots on which platforms. Personal injury markets typically have one to three rivals running active AEO programs even in mid-tier metros; the BQ output identifies them by citation footprint rather than by guess.
              {' '}Reach us at <a href="sms:+12134442229" className="cta-inline">(213) 444-2229</a> to walk through your firm&apos;s Blindspot Quotient.
            </p>

            <h3>The Schema Diagnostic Score (SDS)</h3>
            <p>
              <strong className="named-thesis text-[#F27D24]"><a href="/concepts/schema-diagnostic-score" className="concept-link">The Schema Diagnostic Score</a>: a 0-to-100 score that weights schema type density, validation status, sameAs corroboration depth, statute anchoring in FAQPage answers, and Review schema outcome specificity against the LLM verification surface, producing a single number that predicts retriever extraction confidence.</strong> SDS over 80 correlates with strong citation share on ChatGPT search mode and Google AI Overviews and supports defensible Perplexity visibility. SDS between 60 and 79 signals a firm publishing foundational schema but missing the nested density and corroboration depth that drives the BrightEdge 2.8x lift. SDS under 60 signals a firm whose schema layer is structurally underbuilt for the 2026 retrieval pipeline. The score is mechanical to compute and the audit reports the discrete deductions per signal — exactly which Schema.org types are missing, which sameAs links broke, which FAQ answers exceed the GEO-SFE Chunk Ceiling, and which Review schema blocks lack outcome specificity. The deductions become the priority punch list.
              {' '}Want your SDS scored and the punch list returned within 24 hours? <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Run a free Blindspot scan.</a>
            </p>

            <h3>The Verification Surface Test (VST)</h3>
            <p>
              <strong className="named-thesis text-[#F27D24]"><a href="/concepts/verification-surface-test" className="concept-link">The Verification Surface Test</a>: a pass-fail audit check that confirms every entity claim a personal injury firm publishes — bar admission, jurisdictional authority, alma mater, board certification, settlement outcome — resolves to at least one corroborating third-party endpoint the LLM retriever can independently verify.</strong> The test is the operational form of the multi-source verification surface Chen et al. (2025) documented. A schema block declaring &ldquo;Attorney Jane Smith, California State Bar 234567&rdquo; passes VST if the bar number resolves to a live entry on calbar.ca.gov; fails if the number is invalid, the attorney is inactive, or the schema sameAs link does not exist. A Review schema block declaring &ldquo;Won a $1.4M trucking collision settlement&rdquo; passes VST if there is a corroborable case record, public verdict report, or third-party confirmation; fails if the only source is the firm&apos;s marketing prose. VST failures are non-recoverable from a schema perspective — the retriever filters unverifiable claims out of the citation pool regardless of schema discipline.
              {' '}One operator per market. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Lock your territory before a rival runs the VST first.</a>
            </p>

            <h3>The Sub-Vertical Audit Lens</h3>
            <p>
              <strong className="named-thesis text-[#F27D24]"><a href="/concepts/sub-vertical-audit-lens" className="concept-link">The Sub-Vertical Audit Lens</a>: the audit instrument that disaggregates a personal injury firm&apos;s CSI, BQ, and SDS by injury vertical — auto accident, truck collision, motorcycle injury, premises liability, medical malpractice, wrongful death, traumatic brain injury, dog bite, product liability, slip and fall — producing a per-vertical scorecard rather than a single firm-level number.</strong> The lens matters because a PI firm&apos;s citation share is almost never uniform across verticals. A firm that captures 35 percent CSI on auto accident queries may sit at 4 percent on truck collision and 0 percent on medical malpractice. The lens converts the firm-level audit into a per-vertical engineering plan, prioritizing the verticals with the largest gap between current citation share and intake demand. Most firms run the lens and discover that the verticals they generate the most revenue from are the verticals they have the weakest schema and content posture in — because the easiest wins happened first and the harder ones were deferred.
              {' '}Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> for the sub-vertical audit scorecard template.
            </p>

            {/* Comparison Table */}
            <h3 className="mt-12">PI Visibility Audit: What to Measure vs What to Skip</h3>
            <div className="ae-comparison-table not-prose my-8">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="text-left py-3 pr-6 font-headline font-black tracking-tighter uppercase text-[#F27D24] text-xs">Audit Signal</th>
                    <th className="text-left py-3 pr-6 font-headline font-black tracking-tighter uppercase text-white/50 text-xs">What It Measures</th>
                    <th className="text-left py-3 pr-6 font-headline font-black tracking-tighter uppercase text-white/50 text-xs">Frequency</th>
                    <th className="text-left py-3 font-headline font-black tracking-tighter uppercase text-white/50 text-xs">Priority for PI Firms</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  <tr><td className="py-3 pr-6 font-medium text-white/90">Citation Share Index (CSI)</td><td className="py-3 pr-6 text-white/70">Total citation rate across 4 platforms</td><td className="py-3 pr-6 text-white/70">Quarterly</td><td className="py-3 text-[#F27D24] font-bold">P0</td></tr>
                  <tr><td className="py-3 pr-6 font-medium text-white/90">Blindspot Quotient (BQ)</td><td className="py-3 pr-6 text-white/70">Queries lost to a named competitor</td><td className="py-3 pr-6 text-white/70">Quarterly</td><td className="py-3 text-[#F27D24] font-bold">P0</td></tr>
                  <tr><td className="py-3 pr-6 font-medium text-white/90">Schema Diagnostic Score (SDS)</td><td className="py-3 pr-6 text-white/70">Schema density, validation, sameAs depth</td><td className="py-3 pr-6 text-white/70">Monthly</td><td className="py-3 text-[#F27D24] font-bold">P0</td></tr>
                  <tr><td className="py-3 pr-6 font-medium text-white/90">Verification Surface Test (VST)</td><td className="py-3 pr-6 text-white/70">Entity claim corroboration pass/fail</td><td className="py-3 pr-6 text-white/70">Monthly</td><td className="py-3 text-[#F27D24] font-bold">P0</td></tr>
                  <tr><td className="py-3 pr-6 font-medium text-white/90">Sub-Vertical Audit Lens</td><td className="py-3 pr-6 text-white/70">Per-injury-type breakdown of CSI and BQ</td><td className="py-3 pr-6 text-white/70">Quarterly</td><td className="py-3 text-white/80">P1</td></tr>
                  <tr><td className="py-3 pr-6 font-medium text-white/90">Chunk Boundary Scan</td><td className="py-3 pr-6 text-white/70">Passage length against GEO-SFE ceiling</td><td className="py-3 pr-6 text-white/70">Per content release</td><td className="py-3 text-white/80">P1</td></tr>
                  <tr><td className="py-3 pr-6 font-medium text-white/90">Google ranking position only</td><td className="py-3 pr-6 text-white/70">SERP placement on PI keywords</td><td className="py-3 pr-6 text-white/70">As supplement</td><td className="py-3 text-white/60">P3 (incomplete)</td></tr>
                  <tr><td className="py-3 pr-6 font-medium text-white/90">Backlink count only</td><td className="py-3 pr-6 text-white/70">Inbound link totals</td><td className="py-3 pr-6 text-white/70">As supplement</td><td className="py-3 text-white/60">P3 (lagging)</td></tr>
                </tbody>
              </table>
            </div>

            {/* Inline CTA block */}
            <div className="ae-cta-inline not-prose my-12 border-l-4 border-[#F27D24] pl-6 py-4 bg-[#F27D24]/5">
              <p className="text-white/90 leading-relaxed mb-0">
                Want every audit signal in the table scored against your PI firm in one report? <a href="https://theanswerengine.ai/blindspot" className="cta-inline font-bold">Run a free AERO Blindspot scan</a> and we will send the full audit and prioritized punch list within 24 hours.
              </p>
            </div>

            {/* H2 5: How to Read and Act */}
            <span className="ae-section-label" id="measure">The Measurement</span>
            <h2>How to Read and Act on Your Audit Results</h2>

            <h3>The 90-Day Priority Punch List</h3>
            <p>
              The audit converts measurement into action through a 90-day priority punch list that sequences fixes by leverage. Days 1 to 30 handle the schema floor — Attorney, LegalService, FAQPage, Review, BreadcrumbList, and WebPage with SpeakableSpecification deployed and validated across every practice-area page and every attorney bio. Days 31 to 60 build the sub-vertical content layer — one page per injury vertical with statute-anchored FAQ stacks sized to the GEO-SFE Chunk Ceiling and outcome-specific Review schema. Days 61 to 90 close the earned-media gap through sameAs population, directory verification, and the third-party mention strategy Chen et al. (2025) documented. The 90-day window is structural: most AI retrievers complete a full reindex cycle inside that window, so the audit&apos;s post-fix re-measurement falls inside the same retriever cycle the fix was implemented against.
              {' '}One client per market — <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">claim your PI territory today.</a>
            </p>

            <h3>How to Re-Audit and Track Lift Quarterly</h3>
            <p>
              Quarterly re-audits compare the new CSI, BQ, SDS, VST pass rate, and Sub-Vertical Audit Lens scorecard against the prior quarter&apos;s baseline. The discipline produces three outputs. First, a citation lift number — the firm gained or lost X percent CSI across the battery, with per-platform attribution. Second, a competitive movement number — which rivals moved up, which moved down, which new entrants appeared in the cited pool. Third, an investment-routing decision — where the next 90 days of schema and content work should focus given which signals moved and which did not. The re-audit cadence converts AEO from a one-time project into an operational program, which is the only posture that holds citation share in a market with active rival operators.
              {' '}Want quarterly re-audit cadence built into your AEO program? <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book your free strategy call here.</a>
            </p>

            <h3>The Outcome Decision: Lock Territory Before a Rival Does</h3>
            <p>
              <strong className="named-thesis text-[#F27D24]"><a href="/concepts/territory-lock" className="concept-link">The Territory Lock</a>: the first personal injury firm in a market to execute the audit findings — schema deployment, sub-vertical content, sameAs verification, statute-anchored FAQs — captures the citation slots competitors will spend two to three quarters trying to dislodge, because LLM retrievers reward consistency and corroboration depth over recency once an entity record is established.</strong> The lock is the strategic reason the audit-to-action cycle has to run fast. A PI firm that audits in Q1, plans in Q2, and implements in Q3 surrenders three quarters of citation territory to a rival who audited and implemented in Q1. The mechanical incentive is to compress the cycle and the operator incentive is to be the first in market — because once the slot is captured, the retriever&apos;s preference for the established entity record makes displacement harder than initial capture. One operator per market is not a marketing claim; it is the structural fact of the AEO competitive surface.
              {' '}Text us at <a href="sms:+12134442229" className="cta-inline">(213) 444-2229</a> to confirm whether your market is still open before a competitor locks it.
            </p>

            <p>
              This analysis draws on the Aggarwal et al. (KDD 2024), Zhang et al. (2026), GEO-SFE (2026), and Chen et al. (2025) academic literature, the BrightEdge (2026) citation-lift benchmark, the AuthorityTech 680M-citation cross-platform overlap analysis, and the citation outcomes The Answer Engine has measured across multiple verified client engagements. The audit methodology is reproducible and the AERO Framework signal hierarchy holds across PI injury sub-verticals and jurisdictions. Operators who run the visibility audit, sequence the fixes, and re-audit quarterly earn measurable citation share inside 60 to 90 days; operators who delay the diagnostic forfeit that territory to the first competitor in their market who runs it.
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
                <summary>What is a personal injury law firm AI visibility audit?</summary>
                <div className="ae-faq-answer faq-answer">
                  <p>A personal injury law firm AI visibility audit is the structured diagnostic that measures how often, where, and on which queries a PI firm gets cited across ChatGPT, Perplexity, Claude, and Google AI Overviews. The audit runs a fixed query battery of 20 to 30 PI-specific prompts that mirror real injured-claimant intent (&ldquo;best truck accident lawyer in [city],&rdquo; &ldquo;motorcycle injury attorney near me,&rdquo; &ldquo;wrongful death lawyer for hospital negligence&rdquo;). The output is a citation-share matrix showing which firms are named on which platforms for which queries, a schema diagnostic score, a competitor citation map, and a 90-day priority punch list. The audit converts AI search visibility from a guess into a measurement, and from a measurement into a fix-ordering decision.</p>
                  <p>Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> for a custom PI audit scoped to your jurisdiction.</p>
                </div>
              </details>
              <details className="ae-faq-item">
                <summary>How often should a personal injury firm audit AI visibility?</summary>
                <div className="ae-faq-answer faq-answer">
                  <p>A baseline audit runs once before any AEO work begins, then quarterly through year one, then biannually thereafter. The quarterly cadence catches retriever-index updates (Bing reindexes for ChatGPT every six to eight weeks, Perplexity refreshes its 200B+ URL index continuously), schema validation drift, and competitor citation moves. Firms operating in saturated PI markets (Los Angeles, Houston, Chicago, Atlanta, Miami, Phoenix) benefit from a tighter 60-day cycle because citation share shifts faster when more firms are running AEO programs simultaneously. The audit itself takes 24 to 48 hours of measurement plus a brief implementation review.</p>
                  <p>Text us at <a href="sms:+12134442229" className="cta-inline">(213) 444-2229</a> to schedule your baseline audit.</p>
                </div>
              </details>
              <details className="ae-faq-item">
                <summary>Which AI platforms matter most for personal injury visibility?</summary>
                <div className="ae-faq-answer faq-answer">
                  <p>All four mainstream answer engines matter, but the citation overlap between them is only 11 percent (AuthorityTech, 680M citation analysis), so a PI firm cannot win on one platform and assume the others follow. ChatGPT search mode is the highest-volume citation surface for PI queries and reads through Bing&apos;s index with structured data as a primary ranking input. Perplexity is the highest-intent surface, with users sending follow-up questions that resolve into actual claimant inquiries at a higher rate. Google AI Overviews owns the largest organic surface but cites fewer sources per response. Claude cites less frequently but the citations it does produce skew toward higher-authority sources and convert disproportionately well. A complete audit measures all four because each platform reveals a different blindspot.</p>
                  <p>See your firm&apos;s standing on all four platforms free at <a href="https://theanswerengine.ai/blindspot" className="cta-inline">theanswerengine.ai/blindspot</a>.</p>
                </div>
              </details>
              <details className="ae-faq-item">
                <summary>What does an AI visibility audit measure that Google Analytics does not?</summary>
                <div className="ae-faq-answer faq-answer">
                  <p>Google Analytics measures traffic the firm received. An AI visibility audit measures citation events the firm did or did not receive across LLM responses — a distinct, leading indicator that traffic does not capture. The audit measures Citation Share Index across four platforms, Schema Diagnostic Score against the LLM verification surface, Blindspot Quotient (queries on which the firm is invisible while a competitor is cited), Verification Surface Test (which sameAs and corroboration links resolve), Citation Overlap Index (which queries cite the firm on multiple platforms versus one), and Sub-Vertical Audit Lens (per-injury-type breakdown of citation strength). None of these signals appear in Google Analytics, GA4, or any traditional SEO platform, because the underlying event happens inside an LLM response rather than as an HTTP request.</p>
                  <p>One operator per market — <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">claim your PI territory before a rival does.</a></p>
                </div>
              </details>
              <details className="ae-faq-item">
                <summary>How long does it take to fix an AI visibility audit&apos;s findings?</summary>
                <div className="ae-faq-answer faq-answer">
                  <p>A PI firm with no prior AEO work typically closes the highest-priority audit findings inside 60 to 90 days. The first 30 days handle schema deployment (Attorney plus LegalService plus FAQPage plus Review plus BreadcrumbList plus WebPage with SpeakableSpecification), sameAs verification across bar directories and review platforms, and the foundational content audit that aligns body content with the schema-declared entity graph. Days 31 to 60 produce the sub-vertical content layer — one page per injury vertical with statute-anchored FAQ stacks and outcome-specific Review schema. Days 61 to 90 run the re-audit, measure lift across all four platforms, and identify the next priority layer. Firms in less competitive markets see citation lift inside 30 to 45 days. Saturated markets take the full 90-day window.</p>
                  <p>Book a free 30-minute scoping call at <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">calendly.com/theanswerengine-support/30min</a> to walk through your timeline.</p>
                </div>
              </details>
              <details className="ae-faq-item">
                <summary>Can I run a personal injury AI visibility audit myself?</summary>
                <div className="ae-faq-answer faq-answer">
                  <p>Partially. A firm can run the citation-share measurement layer by issuing 20 to 30 PI-specific queries to ChatGPT, Perplexity, Claude, and Google AI Overviews and recording which firms are cited. The data is real and the methodology is reproducible. The diagnostic layer (Schema Diagnostic Score, Verification Surface Test, Sub-Vertical Audit Lens) requires familiarity with Schema.org validation, the GEO-SFE chunk-boundary thresholds, the Aggarwal et al. quotation-density premium, and the cross-platform retrieval pipelines. Most firms run the measurement layer in-house and outsource the diagnostic and fix-ordering layers. The Answer Engine&apos;s free Blindspot scan delivers both layers as a single output and returns within 24 hours.</p>
                  <p>Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> to start your audit.</p>
                </div>
              </details>
            </div>
          </section>

          {/* CTA Block */}
          <section className="ae-cta-block mt-16">
            <h3>Get Your PI Firm Audited Across ChatGPT, Perplexity, Claude, and AI Overviews</h3>
            <p>
              One personal injury practice per market. Free Blindspot scan returns within 24 hours: which AI platforms cite your firm now, which competitors captured the queries you lost, the Schema Diagnostic Score, and the 90-day priority punch list. Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> or text us at <a href="sms:+12134442229" className="cta-inline">(213) 444-2229</a> to start.
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
              One personal injury practice per market. Free Blindspot scan returns the audit and priority punch list within 24 hours.
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
