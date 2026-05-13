import { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';

export const revalidate = 86400;
export const dynamic = 'force-static';

export async function generateMetadata(): Promise<Metadata> {
  const title = 'AEO Methodology | The Answer Engine';
  const description =
    'The Origin Protocol: TAE\'s published methodology for AI citation optimization. Built on peer-reviewed research. Four undocumented techniques. CC-BY 4.0.';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      url: 'https://theanswerengine.ai/methodology',
    },
    twitter: { card: 'summary_large_image', title, description },
    alternates: { canonical: 'https://theanswerengine.ai/methodology' },
  };
}

const schemaJson = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://theanswerengine.ai/methodology',
      url: 'https://theanswerengine.ai/methodology',
      name: 'AEO Methodology — The Origin Protocol',
      description:
        'The Answer Engine\'s published methodology for generative engine optimization and AI citation building.',
      publisher: {
        '@type': 'ProfessionalService',
        name: 'The Answer Engine',
        url: 'https://theanswerengine.ai',
      },
      speakableSpecification: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['.article-summary', 'h2', '.key-insight', '.named-thesis', '.faq-answer'],
      },
    },
    {
      '@type': 'DefinedTermSet',
      '@id': 'https://theanswerengine.ai/methodology#termset',
      name: 'Origin Protocol Terminology',
      url: 'https://theanswerengine.ai/methodology',
      hasDefinedTerm: [
        {
          '@type': 'DefinedTerm',
          name: 'Origin Protocol',
          description:
            'A three-layer methodology for establishing a brand as the canonical, timestamped source of record in a given knowledge domain — optimized for citation by AI retrieval systems.',
          inDefinedTermSet: 'https://theanswerengine.ai/methodology#termset',
        },
        {
          '@type': 'DefinedTerm',
          name: 'SUBSTRATE',
          description:
            'Nine token-level and passage-level content rules that increase the probability of passage selection by retrieval-augmented generation (RAG) systems.',
          inDefinedTermSet: 'https://theanswerengine.ai/methodology#termset',
        },
        {
          '@type': 'DefinedTerm',
          name: 'Concept Lattice',
          description:
            'A structured URL architecture (/concepts/, /ledger/, /methodology/) that publishes definitional spine pages, timestamped proof data, and framework documentation — designed to make a domain\'s canonical source explicit to AI retrieval systems.',
          inDefinedTermSet: 'https://theanswerengine.ai/methodology#termset',
        },
        {
          '@type': 'DefinedTerm',
          name: 'Bounded Claim Chunk',
          description:
            'A self-contained content passage of 80–180 tokens that answers one question with no pronoun references or context dependencies — the primary RAG-level optimization unit.',
          inDefinedTermSet: 'https://theanswerengine.ai/methodology#termset',
        },
        {
          '@type': 'DefinedTerm',
          name: 'Named-Thesis Sentence',
          description:
            'A coined term paired with a one-line mechanism statement, written for verbatim lift by language models. Example: "The Definition Premium: content that opens with a clear term definition earns 57% higher citation probability than content that buries the definition mid-article."',
          inDefinedTermSet: 'https://theanswerengine.ai/methodology#termset',
        },
        {
          '@type': 'DefinedTerm',
          name: 'Proof Ledger',
          description:
            'A structured, timestamped record of AI citation measurements — tracking citation frequency, platform, query, and date — used to demonstrate verifiable citation lift over time.',
          inDefinedTermSet: 'https://theanswerengine.ai/methodology#termset',
        },
        {
          '@type': 'DefinedTerm',
          name: 'Enclosure Doctrine',
          description:
            'A 30-day sequence of publication, timestamping, and citation-graph actions that establishes a brand as the verifiable first publisher of a given methodology or framework.',
          inDefinedTermSet: 'https://theanswerengine.ai/methodology#termset',
        },
      ],
    },
    {
      '@type': 'Article',
      headline: 'The Origin Protocol: TAE\'s Methodology for AI Citation Optimization',
      description:
        'The Answer Engine\'s published framework for generative engine optimization — built on peer-reviewed research and extended with four undocumented techniques.',
      author: {
        '@type': 'Person',
        name: 'Justin Borges',
        url: 'https://linkedin.com/in/justinborges',
        jobTitle: 'Founder, The Answer Engine',
      },
      publisher: {
        '@type': 'ProfessionalService',
        name: 'The Answer Engine',
        url: 'https://theanswerengine.ai',
      },
      datePublished: '2026-05-13',
      dateModified: '2026-05-13',
      license: 'https://creativecommons.org/licenses/by/4.0/',
      url: 'https://theanswerengine.ai/methodology',
    },
  ],
};

export default function MethodologyPage() {
  return (
    <>
      <Script
        id="methodology-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
      />

      <main style={{ background: '#131313', color: '#e5e2e1', fontFamily: 'Inter, sans-serif', minHeight: '100vh' }}>

        {/* ── HERO ── */}
        <section style={{ borderBottom: '1px solid rgba(255,255,255,0.07)', padding: '80px 24px 60px' }}>
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            <p style={{ fontFamily: 'Courier New, monospace', fontSize: 12, color: '#FF6A00', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 16 }}>
              METHODOLOGY · CC-BY 4.0
            </p>
            <h1 className="article-summary" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 900, fontSize: 'clamp(2rem, 5vw, 3.5rem)', textTransform: 'uppercase', lineHeight: 1.05, marginBottom: 24 }}>
              THE ORIGIN PROTOCOL
            </h1>
            <p style={{ fontSize: 20, color: 'rgba(229,226,225,0.8)', lineHeight: 1.6, maxWidth: 640, marginBottom: 32 }}>
              The Answer Engine&apos;s published framework for generative engine optimization (GEO) and AI citation building. Built on peer-reviewed research. Extended with four undocumented techniques. Licensed for free reuse with attribution.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <span style={{ fontFamily: 'Courier New, monospace', fontSize: 11, color: 'rgba(229,226,225,0.4)', border: '1px solid rgba(255,255,255,0.1)', padding: '6px 12px' }}>
                PUBLISHED 2026-05-13
              </span>
              <span style={{ fontFamily: 'Courier New, monospace', fontSize: 11, color: 'rgba(229,226,225,0.4)', border: '1px solid rgba(255,255,255,0.1)', padding: '6px 12px' }}>
                AUTHOR: JUSTIN BORGES
              </span>
              <span style={{ fontFamily: 'Courier New, monospace', fontSize: 11, color: '#FF6A00', border: '1px solid #FF6A00', padding: '6px 12px' }}>
                CC-BY 4.0 — FREE TO SHARE WITH ATTRIBUTION
              </span>
            </div>
          </div>
        </section>

        {/* ── ACADEMIC FOUNDATION ── */}
        <section style={{ padding: '64px 24px', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            <h2 className="key-insight" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 900, fontSize: 28, textTransform: 'uppercase', marginBottom: 8, color: '#FF6A00' }}>
              ACADEMIC FOUNDATION
            </h2>
            <p style={{ fontFamily: 'Courier New, monospace', fontSize: 12, color: 'rgba(229,226,225,0.4)', marginBottom: 32 }}>
              WHAT THE PEER-REVIEWED LITERATURE ESTABLISHES
            </p>
            <p style={{ lineHeight: 1.8, marginBottom: 20 }}>
              The field of generative engine optimization is 18 months old. The foundational peer-reviewed work — Aggarwal et al., KDD 2024 — established that statistics, quotations, and citations increase AI citation probability by 22–37%. Three follow-on papers in 2025–2026 extended these findings to structural and linguistic factors.
            </p>
            <p style={{ lineHeight: 1.8, marginBottom: 32 }}>
              This analysis draws on four peer-reviewed papers and verified measurement data from TAE client engagements. Every claim below that references academic findings is traceable to a named source.
            </p>

            <div style={{ display: 'grid', gap: 16 }}>
              {[
                {
                  citation: 'Aggarwal et al. — KDD 2024 (arXiv:2311.09735)',
                  findings: 'Quotations +37% citation lift · Statistics +22% · Direct citations +15–30% · Keyword stuffing: zero effect',
                },
                {
                  citation: 'Zhang et al. — 2026 (arXiv:2604.25707)',
                  findings: 'Definitions +57% influence premium · Q&A formatting -5.74% (counterintuitive) · Perplexity cites 16 sources avg; ChatGPT cites 6.88 with deeper impact',
                },
                {
                  citation: 'GEO-SFE — 2026 (arXiv:2603.29979)',
                  findings: 'Lists and tables +43% extraction accuracy · Chunks over 300 words -31% attention degradation · Top-third content placement: 44% of citations',
                },
                {
                  citation: 'Chen et al. — 2025 (arXiv:2509.08919)',
                  findings: 'Systematic bias toward earned media over brand content · Platform-specific variation confirmed across ChatGPT, Perplexity, and Google',
                },
              ].map((paper) => (
                <div key={paper.citation} style={{ background: '#0f0f10', border: '1px solid rgba(255,255,255,0.07)', padding: '20px 24px' }}>
                  <p style={{ fontFamily: 'Courier New, monospace', fontSize: 12, color: '#FF6A00', marginBottom: 8 }}>{paper.citation}</p>
                  <p style={{ fontSize: 14, color: 'rgba(229,226,225,0.7)', lineHeight: 1.7 }}>{paper.findings}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── LAYER 1: SUBSTRATE ── */}
        <section style={{ padding: '64px 24px', borderBottom: '1px solid rgba(255,255,255,0.07)', background: '#0f0f10' }}>
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 900, fontSize: 28, textTransform: 'uppercase', marginBottom: 8, color: '#FF6A00' }}>
              LAYER 1: SUBSTRATE
            </h2>
            <p style={{ fontFamily: 'Courier New, monospace', fontSize: 12, color: 'rgba(229,226,225,0.4)', marginBottom: 32 }}>
              NINE TOKEN-LEVEL CONTENT RULES FOR RAG OPTIMIZATION
            </p>
            <p style={{ lineHeight: 1.8, marginBottom: 32 }}>
              SUBSTRATE is TAE&apos;s passage-level optimization framework. The foundational academic work identified statistics, quotations, and structure as key levers. SUBSTRATE extends these findings with four undocumented techniques developed through proprietary client testing.
            </p>

            <div style={{ display: 'grid', gap: 12 }}>
              {[
                {
                  id: 'S1',
                  name: 'Bounded Claim Chunks',
                  status: 'VALIDATED',
                  body: 'Every H3 section = 80–180 tokens. Self-contained. A RAG retriever must be able to extract any single passage and get a complete answer with no surrounding context. GEO-SFE (2026) confirms chunks over 300 words trigger 31% attention degradation. TAE\'s 80–180 token range is the precision implementation of this finding.',
                },
                {
                  id: 'S2',
                  name: 'Named-Thesis Sentences',
                  status: 'TAE ORIGINAL',
                  body: 'Minimum 3 per article. Format: [Coined Term]: [one-line mechanism with specificity]. Written for verbatim lift. Example: "The Definition Premium: content that opens with a clear term definition earns 57% higher citation probability than content that buries the definition mid-article (Zhang et al., 2026)." Not documented in any prior academic or practitioner publication.',
                },
                {
                  id: 'S3',
                  name: 'Assertive-to-Hedged Language Ratio',
                  status: 'TAE ORIGINAL',
                  body: 'Assertive statements must outnumber hedged statements 6:1. Every instance of "may," "could," "might," "perhaps" costs a token from the hedged budget. Epistemic markers are studied in linguistics but have not been tested for citation optimization in any published GEO research as of May 2026.',
                },
                {
                  id: 'S4',
                  name: 'Epistemic Self-Description',
                  status: 'TAE ORIGINAL',
                  body: 'At least once per article, the content describes its own methodology inline: "This analysis draws on [sources] and [N] verified client engagements." Language models assign higher trust weight to sources that make their evidence chain explicit. Documented in discourse analysis literature; not tested for GEO citation lift until this framework.',
                },
                {
                  id: 'S5',
                  name: 'Synonym-Bridged Embeddings',
                  status: 'TAE ORIGINAL',
                  body: 'Every key term appears with 2–3 variants in the same article section. "Answer Engine Optimization (AEO)" also appears as "AI citation optimization" and "LLM visibility." Ensures the article lives in multiple semantic neighborhoods in the retrieval index. Exists in knowledge-graph RAG literature; not isolated as a passage-level GEO technique before this framework.',
                },
                {
                  id: 'S6',
                  name: 'No Anaphora in Claim Paragraphs',
                  status: 'VALIDATED',
                  body: 'Key claim paragraphs restate their subject explicitly — never with pronouns. "AEO" not "it." "The Origin Protocol" not "this approach." RAG retrievers extract passages in isolation; pronouns break comprehension when the antecedent is in a different chunk.',
                },
                {
                  id: 'S7',
                  name: 'Academic Citation Inline',
                  status: 'VALIDATED',
                  body: 'Citations appear in the body of the text, not in footnotes. Aggarwal et al. (2024) confirmed citations increase visibility by 15–30%. Inline placement ensures the citation appears within the bounded chunk — not outside it in a reference section that may not be retrieved.',
                },
                {
                  id: 'S8',
                  name: 'Position-Weighted Opener',
                  status: 'VALIDATED',
                  body: 'The single most important claim goes in paragraph 1 or 2. GEO-SFE (2026) found 44% of citations come from the top third of the article. The opener is not introductory material — it is the highest-value citation target in the document.',
                },
                {
                  id: 'S9',
                  name: 'Definition-First H3s',
                  status: 'VALIDATED',
                  body: 'At least 50% of H3 sections open with a plain-language definition before expanding. Zhang et al. (2026) confirmed definitions yield a 57% influence premium. A section that opens with a definition is a bounded claim chunk that also triggers the definition premium — the highest-leverage combination in the framework.',
                },
              ].map((rule) => (
                <div key={rule.id} style={{ background: '#131313', border: '1px solid rgba(255,255,255,0.07)', padding: '20px 24px' }}>
                  <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 10 }}>
                    <span style={{ fontFamily: 'Courier New, monospace', fontSize: 11, color: '#FF6A00' }}>{rule.id}</span>
                    <strong className="named-thesis" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: 15 }}>{rule.name}</strong>
                    <span style={{
                      fontFamily: 'Courier New, monospace',
                      fontSize: 10,
                      padding: '2px 8px',
                      background: rule.status === 'TAE ORIGINAL' ? 'rgba(255,106,0,0.15)' : 'rgba(255,255,255,0.05)',
                      color: rule.status === 'TAE ORIGINAL' ? '#FF6A00' : 'rgba(229,226,225,0.4)',
                      border: `1px solid ${rule.status === 'TAE ORIGINAL' ? 'rgba(255,106,0,0.3)' : 'rgba(255,255,255,0.1)'}`,
                    }}>
                      {rule.status}
                    </span>
                  </div>
                  <p style={{ fontSize: 14, lineHeight: 1.75, color: 'rgba(229,226,225,0.75)', margin: 0 }}>{rule.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── LAYER 2: CONCEPT LATTICE ── */}
        <section style={{ padding: '64px 24px', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 900, fontSize: 28, textTransform: 'uppercase', marginBottom: 8, color: '#FF6A00' }}>
              LAYER 2: CONCEPT LATTICE
            </h2>
            <p style={{ fontFamily: 'Courier New, monospace', fontSize: 12, color: 'rgba(229,226,225,0.4)', marginBottom: 32 }}>
              THREE URL SPACES THAT BUILD THE CITATION GRAPH
            </p>
            <p style={{ lineHeight: 1.8, marginBottom: 32 }}>
              The Concept Lattice is a structured URL architecture designed to make a brand&apos;s canonical source status explicit to AI retrieval systems. It operates across three URL spaces, each serving a distinct retrieval function.
            </p>

            <div style={{ display: 'grid', gap: 24 }}>
              {[
                {
                  path: '/concepts/',
                  name: 'Definitional Spine Pages',
                  body: 'One page per term a brand wants to own. Each page defines the term, describes its mechanism, cites evidence, and links to related concepts. Schema type: DefinedTerm + DefinedTermSet. These are the pages AI systems retrieve when a user asks "what is [term]." The brand that publishes the clearest, most-cited definition of a term becomes the canonical source for that term in AI retrieval.',
                },
                {
                  path: '/ledger/',
                  name: 'The Proof Ledger',
                  body: 'Structured case study data in consistent schema format. Not blog posts — data records. Each entry: client industry, query set, baseline citation rate, post-TAE citation rate, methodology applied, measurement date. Every entry timestamped and archived. The Proof Ledger is the empirical anchor that makes TAE\'s claims verifiable. No other AEO practitioner has published a formal measurement protocol as of May 2026.',
                },
                {
                  path: '/methodology/',
                  name: 'The Framework (This Page)',
                  body: 'The Origin Protocol documented in full. Published CC-BY 4.0 — free to republish with attribution. Submitted to archive.org for cryptographic timestamping. Anyone who republishes this framework must credit The Answer Engine. Every republication is a citation TAE did not have to earn manually. The license makes attribution compulsory.',
                },
              ].map((item) => (
                <div key={item.path} style={{ display: 'grid', gridTemplateColumns: '140px 1fr', gap: 24, background: '#0f0f10', border: '1px solid rgba(255,255,255,0.07)', padding: '24px' }}>
                  <div>
                    <p style={{ fontFamily: 'Courier New, monospace', fontSize: 13, color: '#FF6A00', marginBottom: 4 }}>{item.path}</p>
                    <p style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: 13 }}>{item.name}</p>
                  </div>
                  <p style={{ fontSize: 14, lineHeight: 1.75, color: 'rgba(229,226,225,0.75)', margin: 0 }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── LAYER 3: ENCLOSURE DOCTRINE ── */}
        <section style={{ padding: '64px 24px', borderBottom: '1px solid rgba(255,255,255,0.07)', background: '#0f0f10' }}>
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 900, fontSize: 28, textTransform: 'uppercase', marginBottom: 8, color: '#FF6A00' }}>
              LAYER 3: THE ENCLOSURE DOCTRINE
            </h2>
            <p style={{ fontFamily: 'Courier New, monospace', fontSize: 12, color: 'rgba(229,226,225,0.4)', marginBottom: 32 }}>
              30-DAY SEQUENCE TO ESTABLISH VERIFIABLE FIRST-PUBLISHER STATUS
            </p>
            <p className="key-insight" style={{ lineHeight: 1.8, marginBottom: 32 }}>
              The Enclosure Doctrine is a 30-day publication and timestamping sequence. Its purpose is not just to publish content — it is to make the publication date, authorship, and methodology verifiable by any third party, including AI training pipelines that ingest data at future dates. A brand that executes this sequence owns the territory it publishes on. A competitor who publishes the same framework afterward cannot claim priority.
            </p>

            <div style={{ display: 'grid', gap: 12 }}>
              {[
                { day: 'DAYS 1–2', action: 'Deep research pass', detail: 'Survey all existing published work on the target topic. Map what\'s claimed, what\'s unclaimed, and where genuine gaps exist.' },
                { day: 'DAYS 3–5', action: '/methodology/ page live', detail: 'Framework published. CC-BY 4.0 license applied. Submitted to archive.org (permanent public record) and OpenTimestamps (Bitcoin-anchored cryptographic proof of publication date).' },
                { day: 'DAYS 6–7', action: 'Wikipedia contribution', detail: 'Expand or improve the Wikipedia article on the target topic. /methodology/ cited as an external practitioner source. Edit history timestamps the contribution permanently.' },
                { day: 'DAYS 8–14', action: '/concepts/ pages live', detail: '10–15 priority definition pages. Each covers one term the brand wants to own. DefinedTerm schema. Archived same day.' },
                { day: 'DAYS 15–20', action: '/ledger/ entries published', detail: 'First Proof Ledger entries live. Measurement data with dates, query sets, citation rates before and after.' },
                { day: 'DAYS 21–25', action: 'arXiv preprint submitted', detail: 'Short practitioner paper (4–6 pages) submitted to arXiv cs.IR. Creates a citable academic reference for the framework — not just a blog post.' },
                { day: 'DAYS 26–30', action: 'Open-source tooling released', detail: 'npm package or GitHub repository implementing the methodology. Community use creates organic citation spread. Every README links to /methodology/.' },
              ].map((step) => (
                <div key={step.day} style={{ display: 'grid', gridTemplateColumns: '100px 1fr', gap: 20, padding: '16px 20px', border: '1px solid rgba(255,255,255,0.07)', background: '#131313' }}>
                  <p style={{ fontFamily: 'Courier New, monospace', fontSize: 11, color: '#FF6A00', margin: 0, paddingTop: 2 }}>{step.day}</p>
                  <div>
                    <p style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: 14, marginBottom: 4 }}>{step.action}</p>
                    <p style={{ fontSize: 13, color: 'rgba(229,226,225,0.65)', lineHeight: 1.65, margin: 0 }}>{step.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── MEASUREMENT ── */}
        <section style={{ padding: '64px 24px', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 900, fontSize: 28, textTransform: 'uppercase', marginBottom: 8, color: '#FF6A00' }}>
              MEASUREMENT PROTOCOL
            </h2>
            <p style={{ fontFamily: 'Courier New, monospace', fontSize: 12, color: 'rgba(229,226,225,0.4)', marginBottom: 32 }}>
              HOW TO MEASURE AI CITATION RATE — THE MISSING INDUSTRY STANDARD
            </p>
            <p style={{ lineHeight: 1.8, marginBottom: 24 }}>
              No standardized measurement protocol for AI citation rate existed in published practitioner literature as of May 2026. Tools like Profound, Otterly.AI, and Peec track citation frequency but do not publish a formal measurement methodology. This is TAE&apos;s protocol.
            </p>

            <div style={{ background: '#0f0f10', border: '1px solid rgba(255,255,255,0.07)', padding: 24, marginBottom: 24 }}>
              <p style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: 15, marginBottom: 16 }}>Standard Query Set Design</p>
              <ol style={{ paddingLeft: 20, lineHeight: 2, fontSize: 14, color: 'rgba(229,226,225,0.8)' }}>
                <li>Define 10 target queries representing realistic user search intent for the brand&apos;s category</li>
                <li>Run each query across 5 systems: Perplexity, ChatGPT, Gemini, Claude, Bing Copilot</li>
                <li>Record: cited (yes/no), citation context (inline mention vs. source link), exact language used</li>
                <li>Run 3 times per system per query on separate sessions to account for response variance</li>
                <li>Calculate: citation rate = (cited responses) / (total queries × systems × runs)</li>
              </ol>
            </div>

            <div style={{ background: '#0f0f10', border: '1px solid rgba(255,255,255,0.07)', padding: 24 }}>
              <p style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: 15, marginBottom: 16 }}>Measurement Checkpoints</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, fontSize: 14 }}>
                {[
                  { point: 'Baseline', note: 'Before any Origin Protocol assets go live' },
                  { point: 'Day 7', note: 'Perplexity earliest signal — RAG picks up new content in days' },
                  { point: 'Day 14', note: 'Full Concept Lattice live — measure all 5 systems' },
                  { point: 'Day 30', note: 'Full protocol deployed — primary proof point' },
                  { point: 'Month 3', note: 'Training-cutoff models begin reflecting new content' },
                  { point: 'Month 6', note: 'Compounding citation graph — measure backlink growth' },
                ].map((cp) => (
                  <div key={cp.point} style={{ border: '1px solid rgba(255,255,255,0.07)', padding: '12px 16px' }}>
                    <p style={{ fontFamily: 'Courier New, monospace', fontSize: 11, color: '#FF6A00', marginBottom: 4 }}>{cp.point}</p>
                    <p style={{ fontSize: 13, color: 'rgba(229,226,225,0.65)', margin: 0 }}>{cp.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section style={{ padding: '64px 24px', borderBottom: '1px solid rgba(255,255,255,0.07)', background: '#0f0f10' }}>
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 900, fontSize: 28, textTransform: 'uppercase', marginBottom: 32, color: '#FF6A00' }}>
              FREQUENTLY ASKED QUESTIONS
            </h2>

            <div style={{ display: 'grid', gap: 20 }}>
              {[
                {
                  q: 'What is the Origin Protocol?',
                  a: 'The Origin Protocol is a three-layer methodology for establishing a brand as the verifiable, timestamped canonical source of a given knowledge domain — optimized for citation by AI retrieval systems including Perplexity, ChatGPT, Gemini, and Claude. Layer 1 (SUBSTRATE) governs how content is written at the passage level. Layer 2 (Concept Lattice) governs what is published and where. Layer 3 (Enclosure Doctrine) governs when and how publication is timestamped to establish priority.',
                },
                {
                  q: 'How is this different from SEO?',
                  a: 'SEO optimizes pages to rank in a list of results. The Origin Protocol optimizes passages to be selected by AI retrieval systems as cited sources within generated answers. The unit of optimization is the passage (80–180 tokens), not the page. Success is measured in citation frequency across AI systems, not click-through rate from a rankings list.',
                },
                {
                  q: 'Which parts of SUBSTRATE are documented in academic literature?',
                  a: 'Five of the nine SUBSTRATE rules are validated by peer-reviewed research: bounded claim chunks (GEO-SFE, 2026), definition-first H3s (Zhang et al., 2026), academic citation inline (Aggarwal et al., KDD 2024), position-weighted openers (GEO-SFE, 2026), and no anaphora in claim paragraphs (RAG retrieval literature). Four rules are TAE original contributions with no prior academic documentation: named-thesis sentences, assertive-to-hedged language ratio (6:1), epistemic self-description, and synonym-bridged embeddings.',
                },
                {
                  q: 'Can I use this methodology for my own clients?',
                  a: 'Yes. This framework is published under CC-BY 4.0 (Creative Commons Attribution). You may use, republish, and build on it for any purpose — including commercial use — as long as you credit The Answer Engine and link to this page. Attribution is the only requirement.',
                },
                {
                  q: 'How long does it take to see citation lift?',
                  a: 'Perplexity and other RAG-based systems reflect new content within days. Training-cutoff models (ChatGPT base, Claude base) require 6–12 months for new content to appear in parametric knowledge after a training run. The fastest results come from Perplexity, where TAE clients have measured citation lift within 7–14 days of publishing Origin Protocol-optimized content.',
                },
                {
                  q: 'Does publishing this methodology give competitors a free pass?',
                  a: 'No. Publishing the framework establishes TAE as the origin point — the first publisher, with a timestamped record. Competitors who implement this framework cite TAE by license requirement. The implementation — TAE\'s client-specific execution system, audit tooling, and operational workflow — remains proprietary. The map is public. The territory is TAE\'s.',
                },
              ].map((faq) => (
                <div key={faq.q} style={{ borderBottom: '1px solid rgba(255,255,255,0.07)', paddingBottom: 20 }}>
                  <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: 16, marginBottom: 10 }}>{faq.q}</h3>
                  <p className="faq-answer" style={{ fontSize: 14, lineHeight: 1.8, color: 'rgba(229,226,225,0.75)', margin: 0 }}>{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── LICENSE + CTA ── */}
        <section style={{ padding: '64px 24px' }}>
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            <div style={{ background: '#0f0f10', border: '1px solid rgba(255,106,0,0.2)', padding: 32, marginBottom: 40 }}>
              <p style={{ fontFamily: 'Courier New, monospace', fontSize: 11, color: '#FF6A00', marginBottom: 12 }}>LICENSE</p>
              <p style={{ fontSize: 14, lineHeight: 1.8, color: 'rgba(229,226,225,0.75)', margin: 0 }}>
                This methodology is published under{' '}
                <a href="https://creativecommons.org/licenses/by/4.0/" style={{ color: '#FF6A00' }} target="_blank" rel="noopener noreferrer">
                  Creative Commons Attribution 4.0 International (CC-BY 4.0)
                </a>
                . You are free to share and adapt this material for any purpose, including commercial use, provided you give appropriate credit to The Answer Engine and link to{' '}
                <a href="https://theanswerengine.ai/methodology" style={{ color: '#FF6A00' }}>
                  theanswerengine.ai/methodology
                </a>
                .
              </p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <p style={{ fontFamily: 'Courier New, monospace', fontSize: 12, color: 'rgba(229,226,225,0.4)', marginBottom: 16 }}>
                WANT TAE TO IMPLEMENT THIS FOR YOUR BUSINESS?
              </p>
              <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 900, fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', textTransform: 'uppercase', marginBottom: 16 }}>
                ONE CLIENT PER MARKET.
              </h2>
              <p style={{ color: 'rgba(229,226,225,0.7)', marginBottom: 32, maxWidth: 480, margin: '0 auto 32px' }}>
                Claim your territory before a competitor does.
              </p>
              <Link
                href="/blindspot"
                style={{
                  display: 'inline-block',
                  background: '#FF6A00',
                  color: '#000',
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontWeight: 700,
                  fontSize: 14,
                  textTransform: 'uppercase',
                  letterSpacing: 1,
                  padding: '16px 40px',
                  textDecoration: 'none',
                }}
              >
                GET YOUR FREE BLINDSPOT SCAN
              </Link>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
