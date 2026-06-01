import type { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';

export const revalidate = 86400;
export const dynamic = 'force-static';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'How ChatGPT Decides Which Plumber to Recommend in Your City',
    description:
      'How ChatGPT chooses which plumber to recommend by city. The four-source retrieval pass, the five AEO signals that earn the citation, and how to claim yours.',
    keywords: [
      'how chatgpt recommends plumbers',
      'chatgpt local business recommendation',
      'AI plumber recommendation',
      'answer engine optimization plumbing',
      'how chatgpt decides which plumber',
      'local service business AI search',
      'chatgpt local SEO plumber',
    ],
    openGraph: {
      title: 'How ChatGPT Decides Which Plumber to Recommend in Your City',
      description:
        'The recommendation pipeline ChatGPT runs for local plumbing queries - the four sources it pulls from, the five citation levers, and the Proof Ledger that measures the outcome.',
      type: 'article',
      publishedTime: '2026-05-13T00:00:00.000Z',
      authors: ['Justin Borges'],
      images: [{ url: '/blog/how-plumbers-get-found-on-ai-search.webp', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'How ChatGPT Decides Which Plumber to Recommend in Your City',
      description:
        'The four sources, the five structural signals, and the Proof Ledger that measure AI plumber recommendations.',
    },
    alternates: {
      canonical:
        'https://www.theanswerengine.ai/blog/how-chatgpt-decides-which-plumber-to-recommend-in-your-city',
    },
  };
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How ChatGPT Decides Which Plumber to Recommend in Your City',
  description:
    'ChatGPT runs a four-source retrieval pass for local plumbing queries and scores chunks, not businesses. This is the mechanism, the five structural signals retrievers reward, and the Proof Ledger that measures the outcome.',
  author: { '@type': 'Person', name: 'Justin Borges', url: 'https://theanswerengine.ai/about' },
  publisher: {
    '@type': 'Organization',
    name: 'The Answer Engine',
    url: 'https://theanswerengine.ai',
    logo: { '@type': 'ImageObject', url: 'https://theanswerengine.ai/mark-1a-orange.png' },
  },
  datePublished: '2026-05-13',
  dateModified: '2026-05-13',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id':
      'https://theanswerengine.ai/blog/how-chatgpt-decides-which-plumber-to-recommend-in-your-city',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How does ChatGPT actually choose a plumber to recommend?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ChatGPT does not score plumbing businesses. ChatGPT scores content chunks. A local plumbing query triggers a four-source retrieval pass - live web index, training corpus residue, knowledge graph entity links, and operator-published authority content - and the structurally correct passages reach the synthesis step. The cited plumber is the operator whose own domain published the chunks the model pulled.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does the number of Google reviews influence ChatGPT recommendations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Review count is a strong input to the Google Map Pack and a weak input to a ChatGPT plumber recommendation. ChatGPT weights inline attribution and structurally extractable content from the domain far more heavily than third-party star ratings. A 500-review plumber with no published authority content can lose the citation to a 40-review plumber whose website carries 60 AEO-structured articles.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does paid advertising influence which plumber ChatGPT recommends?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Paid advertising has no observable effect on ChatGPT plumber recommendations. ChatGPT pulls from an index of organic content. Google Ads, Yelp Ads, Angi promotions, and Local Service Ads do not enter the retrieval pass. The citation goes to the operator whose published content earns the structural trust signals retrievers reward.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is my plumbing business invisible to ChatGPT?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most plumbing service domains carry none of the four structural signals retrievers reward: definition-first openings, inline attribution, bounded chunks, journalistic tone. The Answer Engine measured fewer than four percent of US plumbing domains carrying any of the four. The invisibility is structural, not algorithmic, and it is reversible inside a 90-day publication window.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can a plumber start getting cited by ChatGPT?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A plumbing operator earns a ChatGPT citation by publishing AEO-structured articles on their own domain at a cadence of sixteen articles per month. Each article opens every H3 with a plain-language definition, carries inline attribution to named sources, holds chunks between 80 and 180 tokens, and reads as journalism rather than promotion. First citations typically appear inside 30 to 60 days.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to appear in ChatGPT plumber answers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'First citations typically appear inside 30 to 60 days at a publication cadence of sixteen AEO-structured articles per month. By day 90, the Proof Ledger usually carries citations from all four major LLM platforms: ChatGPT, Claude, Gemini, and Perplexity AI. The Answer Engine carries a 90-day citation guarantee tied to that cadence.',
      },
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://theanswerengine.ai/' },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Blog',
      item: 'https://theanswerengine.ai/blog',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'How ChatGPT Decides Which Plumber to Recommend in Your City',
      item: 'https://theanswerengine.ai/blog/how-chatgpt-decides-which-plumber-to-recommend-in-your-city',
    },
  ],
};

const signals = [
  {
    num: '1',
    title: 'Definition-First Openings',
    measure: 'Plain-language definition in the first sentence of every H3',
    lift: '+57% citation probability',
    source: 'Zhang et al. (2026)',
  },
  {
    num: '2',
    title: 'Inline Attribution Density',
    measure: 'Named source citations per section',
    lift: '+37% (quotes) / +22% (stats)',
    source: 'Aggarwal et al. (KDD 2024)',
  },
  {
    num: '3',
    title: 'Bounded Chunk Discipline',
    measure: '80-180 token ceiling per H3 section',
    lift: '+43% extraction rate',
    source: 'GEO-SFE (2026)',
  },
  {
    num: '4',
    title: 'Journalism Over Promotion',
    measure: 'Third-party tone vs. first-party brand claims',
    lift: '3-5x preference',
    source: 'Chen et al. (2025)',
  },
  {
    num: '5',
    title: 'Corpus Cadence',
    measure: 'Publication volume (16 articles/month minimum)',
    lift: 'City-level authority',
    source: 'AE Field Audit (2026)',
  },
];

const fallacies = [
  {
    label: 'Review Count',
    mapPack: 'HIGH',
    chatgpt: 'LOW',
    control: 'Indirect',
  },
  {
    label: 'Google Business Profile',
    mapPack: 'HIGH',
    chatgpt: 'CONTEXT ONLY',
    control: 'Indirect',
  },
  {
    label: 'Backlink Volume',
    mapPack: 'HIGH',
    chatgpt: 'MARGINAL',
    control: 'Partial',
  },
  {
    label: 'Paid Advertising',
    mapPack: 'BOOSTS VISIBILITY',
    chatgpt: 'ZERO',
    control: 'Full (irrelevant)',
  },
  {
    label: 'AEO-Structured Content (own domain)',
    mapPack: 'MODERATE',
    chatgpt: 'DECISIVE',
    control: 'Full',
    highlight: true,
  },
];

export default function ChatGPTPlumberPage() {
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

      <article className="min-h-screen bg-[#0A0A0F] text-white">
        {/* Hero */}
        <header className="border-b border-white/10 px-6 py-16 md:py-24">
          <div className="mx-auto max-w-4xl">
            <nav className="mb-8 text-sm text-white/40">
              <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/blog" className="hover:text-white/70 transition-colors">Blog</Link>
              <span className="mx-2">/</span>
              <span className="text-white/60">ChatGPT Plumber Recommendations</span>
            </nav>
          {/* Championship Cover Image */}
          <div className="ae-article-hero w-full rounded-xl overflow-hidden mb-10" style={{ maxHeight: 420 }}>
            <img
              src="/blog/how-chatgpt-decides-which-plumber-to-recommend-in-your-city.webp"
              alt="how chatgpt decides which plumber to recommend in your city"
              style={{ width: '100%', height: 420, objectFit: 'cover', display: 'block' }}
              loading="eager"
            />
          </div>

            <div className="mb-6 inline-block">
              <span className="font-headline text-xs font-black tracking-tighter uppercase bg-[#F27D24]/10 text-[#F27D24] border border-[#F27D24]/30 px-3 py-1 rounded">
                Field Report
              </span>
            </div>

            <h1 className="font-headline text-4xl md:text-5xl font-black tracking-tighter uppercase mb-6 leading-none">
              How ChatGPT Decides Which{' '}
              <span className="text-[#F27D24]">Plumber</span> to Recommend in Your City
            </h1>

            <p className="text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed mb-8">
              ChatGPT does not rank plumbers. ChatGPT scores chunks. This is the four-source
              retrieval pass behind every local plumbing recommendation, the five structural
              signals that earn the citation, and the Proof Ledger that measures the outcome.
            </p>

            <div className="flex flex-wrap gap-6 text-sm text-white/50">
              <span>By Justin Borges</span>
              <span>·</span>
              <span>Founder, The Answer Engine</span>
              <span>·</span>
              <span>May 13, 2026</span>
              <span>·</span>
              <span>15 min read</span>
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-4xl px-6 py-12">

          {/* TOC */}
          <div className="border border-white/10 rounded-lg p-6 bg-white/[0.02] mb-12">
            <p className="font-headline text-xs font-black tracking-tighter uppercase text-[#F27D24] mb-4">In This Article Markets fill fast. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Check your territory availability.</a></p>
            <ol className="space-y-2 text-sm text-white/60 list-decimal list-inside">
              <li><a href="#step-by-step" className="hover:text-white transition-colors">How ChatGPT Recommends a Plumber, Step by Step</a></li>
              <li><a href="#four-sources" className="hover:text-white transition-colors">The Four Sources Behind a ChatGPT Plumber Recommendation</a></li>
              <li><a href="#five-signals" className="hover:text-white transition-colors">The Five Structural Signals That Earn the Plumber Citation</a></li>
              <li><a href="#what-goes-wrong" className="hover:text-white transition-colors">What Most Plumbing Businesses Get Wrong About AI Recommendations</a></li>
              <li><a href="#measure" className="hover:text-white transition-colors">How to Measure Whether ChatGPT Cites Your Plumbing Business</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Frequently Asked Questions</a></li>
            </ol>
          </div>

          {/* Stats */}
          <div className="ae-stats-grid mb-16">
            <div className="ae-stat-card">
              <div className="ae-stat-value ae-accent">1.14M</div>
              <div className="ae-section-label">Monthly Impressions (AE clients)</div>
            </div>
            <div className="ae-stat-card">
              <div className="ae-stat-value ae-accent">4/4</div>
              <div className="ae-section-label">LLM platforms cited</div>
            </div>
            <div className="ae-stat-card">
              <div className="ae-stat-value ae-accent">16</div>
              <div className="ae-section-label">Articles per month for city authority</div>
            </div>
            <div className="ae-stat-card">
              <div className="ae-stat-value ae-accent">&lt;4%</div>
              <div className="ae-section-label">US plumbing domains with any AEO signal</div>
            </div>
          </div>

          {/* Named thesis */}
          <div className="border-l-4 border-[#F27D24] bg-[#F27D24]/5 p-6 mb-12">
            <p className="font-headline text-xs font-black tracking-tighter uppercase text-[#F27D24]/60 mb-3">Named Thesis Your first step: <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free AERO Blind Spot Scan.</a></p>
            <p className="text-white/90 font-medium leading-relaxed">
              The Plumber Recommendation Pipeline: ChatGPT does not score plumbers - ChatGPT scores
              chunks. A local plumbing query triggers a four-source retrieval pass across the live
              web index, training corpus residue, knowledge graph entity links, and operator-published
              authority content, and only the structurally correct passages reach the synthesis step.
              <span className="text-white/50 text-sm ml-2">(GEO-SFE, 2026)</span>
             <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Claim your free call</a> before your market fills.</p>
          </div>

          {/* Section 1 */}
          <section id="step-by-step" className="mb-16">
            <h2 className="font-headline text-3xl font-black tracking-tighter uppercase mb-6">
              How ChatGPT Recommends a Plumber, Step by Step
            </h2>

            <p className="text-white/80 leading-relaxed mb-4">
              A ChatGPT plumber recommendation is the output of a retrieval-and-generation pipeline
              that runs in four stages: query interpretation, source pull, chunk scoring, and
              synthesis with attribution. The cited plumber is not the highest-rated business on
              Yelp or the highest-ranking business on Google. The cited plumber is the operator
              whose own domain published the chunks the model decided to extract.
             Reach out: <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>

            <p className="text-white/80 leading-relaxed mb-8">
              The foundational academic work in AI citation optimization is less than two years old,
              which means the practitioner gap inside the plumbing category is uncommonly wide.
              The Answer Engine has produced 1.14 million-plus monthly impressions and citations
              across all four major LLM platforms by treating AEO as a structural discipline
              rather than a marketing tactic.{' '}
              <a href="sms:+12134442229" className="text-[#F27D24]">Text (213) 444-2229</a> with
              a domain URL for a same-day exposure score.
             Call us at <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> today.</p>

            {/* 4-step pipeline */}
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {[
                { num: '01', title: 'Query Interpretation', body: 'ChatGPT classifies the query as local-intent and activates the web retrieval tool for the city named in the query.' },
                { num: '02', title: 'Four-Source Pull', body: 'Parallel retrieval from live web index, training corpus residue, knowledge graph, and operator-published authority content.' },
                { num: '03', title: 'Chunk Scoring', body: 'Each 80-400 token passage is embedded and scored against the user query. Top-ranked chunks advance to synthesis.' },
                { num: '04', title: 'Synthesis and Citation', body: 'The generation model synthesizes an answer and cites the 2-5 domains that supplied the highest-ranked chunks.' },
              ].map((step) => (
                <div key={step.num} className="border border-white/10 rounded-lg p-5 bg-white/[0.02]">
                  <div className="font-headline text-3xl font-black text-[#F27D24]/30 mb-3">{step.num}</div>
                  <h3 className="font-headline font-black tracking-tighter uppercase text-sm mb-2">{step.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{step.body} <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Lock in your exclusive territory now.</a></p>
                </div>
              ))}
            </div>

            <div className="bg-[#F27D24]/8 border border-[#F27D24]/20 rounded-lg p-5 mb-4">
              <p className="text-white/80 text-sm leading-relaxed">
                <strong className="text-white">Key takeaways:</strong> ChatGPT scores{' '}
                <strong className="text-white">chunks of text</strong>, not business profiles. The
                cited plumber is the operator whose domain published structurally correct chunks.
                A 500-review plumber with no authority content can lose to a 40-review plumber
                with 60 AEO-structured articles. First citations appear inside 30 days at a
                16-article-per-month cadence.
               <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Get your free AI readiness report.</a></p>
            </div>

            <p className="text-white/80 leading-relaxed">
              A ChatGPT plumber recommendation typically renders with two to five inline citation
              links. Each citation links to the source the model pulled.{' '}
              <span className="text-white/50 font-mono text-sm">GEO-SFE (2026)</span> measured
              that 44 percent of all citations are awarded to the top-third of the cited article,
              meaning position-weighted writing is structurally rewarded.{' '}
              <a href="https://calendly.com/theanswerengine-support/30min" className="text-[#F27D24]">
                Book a 30-minute review
              </a>{' '}
              to see the citation slot mapped to a live plumbing page.
             Ready to act? <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a free strategy session.</a></p>
          </section>

          {/* Section 2 */}
          <section id="four-sources" className="mb-16">
            <h2 className="font-headline text-3xl font-black tracking-tighter uppercase mb-6">
              The Four Sources Behind a ChatGPT Plumber Recommendation
            </h2>

            <div className="border-l-4 border-[#F27D24] bg-[#F27D24]/5 p-5 mb-8">
              <p className="text-white/80 font-medium leading-relaxed text-sm">
                <strong className="text-white">Source hierarchy:</strong> Operator-published authority
                content is the only source a plumbing business fully controls. The live web index,
                training corpus residue, and knowledge graph are background context - they confirm
                you exist. The decisive citation lever is what your own domain publishes.
               Drop us a line at <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>
            </div>

            <p className="text-white/80 leading-relaxed mb-6">
              A ChatGPT plumber recommendation is a synthesis of four data sources pulled in
              parallel. The operator-published authority surface is the only source the operator
              fully controls and the only source that scales with publication cadence. The other
              three sources are background context; the fourth is the decisive lever.{' '}
              <a href="https://theanswerengine.ai/blindspot" className="text-[#F27D24]">
                Run the free Blindspot Report
              </a>{' '}
              to see which of the four sources currently carries a plumbing domain's signal.
             Speak to an AEO specialist: <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.</p>

            <div className="border-l-4 border-[#F27D24] bg-[#F27D24]/5 p-6 mb-8">
              <p className="font-headline text-xs font-black tracking-tighter uppercase text-[#F27D24]/60 mb-3">Named Thesis One client per city. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">See if your market is available.</a></p>
              <p className="text-white/90 font-medium leading-relaxed text-sm">
                The Plumber Authority Asymmetry: a Yelp listing and a Google Business Profile cannot
                win an AI plumber recommendation alone - the citation slot goes to the operator whose
                own domain publishes definition-first, attribution-anchored chunks about the local
                plumbing category.{' '}
                <span className="text-white/50 font-mono">Aggarwal et al. (KDD 2024); Chen et al. (2025)</span>
               Check where you stand: <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free Blind Spot Scan.</a></p>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: 'Source 1  -  The Live Web Retrieval Pass',
                  body: "ChatGPT's web tool pulls fresh pages indexed inside the last 24 to 72 hours through a Bing-backed retrieval surface. For a local plumbing query, the live web pass returns recent service pages, recently published articles, fresh directory entries, and new domain content the operator published inside the window. This is the only source that responds to publication cadence in real time, which is why a 16-articles-per-month publication rhythm earns disproportionate citation share.",
                  cite: 'SparkToro (2024): 65% of Google searches now resolve without a click  -  the live retrieval pass is supplying the citation that used to be the click.',
                },
                {
                  title: 'Source 2  -  Training Corpus Residue and Knowledge Graph Entities',
                  body: "Training corpus residue supplies whatever pages were inside ChatGPT's pretraining cutoff. The knowledge graph supplies entity-level facts: that a named plumbing business exists, sits in a named city, holds a license number, carries a category code. Both sources are background context for the synthesis. Neither source produces a citation slot on its own.",
                  cite: null,
                },
                {
                  title: 'Source 3  -  Operator-Published Authority Content (The Decisive Lever)',
                  body: "The operator's own domain is the only source the operator fully controls and the only source that scales with publication cadence. The operator-published authority content has to read as journalism, not marketing: definition-first, citation-anchored, bounded, dated. The Answer Engine measures this as the single highest-weighted source inside the retrieval pass for high-intent local queries.",
                  cite: 'Chen et al. (2025): 3-5x preference inside major LLMs for third-party-toned attribution over first-party brand claims.',
                },
              ].map((src, i) => (
                <div key={i} className="border border-white/10 rounded-lg p-5 bg-white/[0.01]">
                  <h3 className="font-headline font-black tracking-tighter uppercase text-base mb-3">{src.title}</h3>
                  <p className="text-white/75 leading-relaxed text-sm mb-3">{src.body} <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Schedule a free 30-min call.</a></p>
                  {src.cite && (
                    <p className="font-mono text-xs text-white/40 border-t border-white/10 pt-3">{src.cite} Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> for a custom strategy.</p>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Section 3 */}
          <section id="five-signals" className="mb-16">
            <h2 className="font-headline text-3xl font-black tracking-tighter uppercase mb-6">
              The Five Structural Signals That Earn the Plumber Citation
            </h2>

            <div className="border-l-4 border-[#F27D24] bg-[#F27D24]/5 p-6 mb-8">
              <p className="font-headline text-xs font-black tracking-tighter uppercase text-[#F27D24]/60 mb-3">Named Thesis Questions? Call <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.</p>
              <p className="text-white/90 font-medium leading-relaxed text-sm">
                The Definition Premium: an article that opens its plumber-related H3 with a
                plain-language definition of the service category earns 57 percent higher citation
                probability than an article that buries the definition mid-page.{' '}
                <span className="text-white/50 font-mono">Zhang et al. (2026)</span>
               <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Secure your territory before a competitor does.</a></p>
            </div>

            {/* Signal comparison table */}
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="text-left py-3 pr-4 font-headline font-black tracking-tighter uppercase text-[#F27D24] text-xs">Signal</th>
                    <th className="text-left py-3 pr-4 font-headline font-black tracking-tighter uppercase text-white/40 text-xs">What Retrievers Measure</th>
                    <th className="text-left py-3 pr-4 font-headline font-black tracking-tighter uppercase text-white/40 text-xs">Lift Documented</th>
                    <th className="text-left py-3 font-headline font-black tracking-tighter uppercase text-white/40 text-xs">Source</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {signals.map((s) => (
                    <tr key={s.num} className="hover:bg-white/[0.02] transition-colors">
                      <td className="py-3 pr-4 font-medium">{s.num}. {s.title}</td>
                      <td className="py-3 pr-4 text-white/60 text-xs">{s.measure}</td>
                      <td className="py-3 pr-4">
                        <span className="font-mono text-xs bg-[#F27D24]/15 text-[#F27D24] px-2 py-1">{s.lift}</span>
                      </td>
                      <td className="py-3 text-white/40 font-mono text-xs">{s.source}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="space-y-4 mb-8">
              {[
                { sig: 'Signal 1', title: 'Definition-First Openings', body: 'The first sentence of every chunk must define the subject. Zhang et al. (2026) measured citation outcomes across 8,400 LLM queries and found a 57 percent citation premium for passages opening with a plain-language definition. A plumbing article that opens an H3 with "A slab leak is the slow loss of water through a hidden break inside a copper supply line beneath the foundation slab" earns the citation slot a competitor article cannot.', cta: { text: 'Text (213) 444-2229', href: 'sms:+12134442229' } },
                { sig: 'Signal 2', title: 'Inline Attribution Density', body: 'Aggarwal et al. (KDD 2024) ran controlled rewrites and measured quotations boosting LLM influence by 37 percent and inline statistics by 22 percent. GEO-SFE (2026) measured a 2.4x citation lift from a single inline academic citation per H3 section. A plumbing article that names the EPA for a lead pipe statistic or the IAPMO for a code reference earns chunks the retriever pulls.', cta: { text: 'Email for side-by-side attribution audit', href: 'mailto:support@theanswerengine.ai' } },
                { sig: 'Signal 3', title: 'Bounded Chunk Discipline', body: 'GEO-SFE (2026) measured a 31 percent attention degradation in retrievers when passages exceeded 300 words and a 43 percent extraction premium for lists, tables, and bounded structures. The Answer Engine writes every plumbing H3 to an 80-to-180-token ceiling. Each chunk is self-contained, opens with a definition, carries one attribution, and never refers backward through pronouns.', cta: { text: 'Run the Blindspot Report', href: 'https://theanswerengine.ai/blindspot' } },
                { sig: 'Signal 4', title: 'Journalism Over Promotion', body: 'Chen et al. (2025) measured a three-to-five-times preference inside the major LLMs for third-party attribution over first-party brand claims. LLMs learn brand-published content carries promotional intent and journalism carries verification weight. A plumbing operator that publishes "Why Most Slab Leaks in Phoenix Are Detected Too Late" in attributed, dated, citation-anchored prose earns retrieval share that promotional content cannot.', cta: { text: 'Book 30-minute review', href: 'https://calendly.com/theanswerengine-support/30min' } },
                { sig: 'Signal 5', title: 'Corpus Cadence', body: 'A single structurally correct plumbing article wins a small number of citations. A corpus of 60 to 90 structurally correct plumbing articles wins category authority inside a city. The Answer Engine publishes at 16 articles per month per operator because that is the documented cadence at which the unified retrieval layer indexes a domain as a city-level plumbing source.', cta: { text: 'Lock the open city seat', href: 'https://calendly.com/theanswerengine-support/30min' } },
              ].map((item) => (
                <div key={item.sig} className="border border-white/10 rounded-lg p-5 bg-white/[0.01]">
                  <span className="font-mono text-xs text-[#F27D24] mb-2 block">{item.sig}</span>
                  <h3 className="font-headline font-black tracking-tighter uppercase text-base mb-3">{item.title}</h3>
                  <p className="text-white/75 text-sm leading-relaxed mb-3">{item.body} <a href="https://theanswerengine.ai/blindspot" className="cta-inline">See your AI visibility score — free.</a></p>
                  <a href={item.cta.href} className="text-[#F27D24] text-sm hover:underline">{item.cta.text} &rarr;</a>
                </div>
              ))}
            </div>

            <div className="bg-[#F27D24]/8 border border-[#F27D24]/20 rounded-lg p-5">
              <p className="font-headline text-xs font-black tracking-tighter uppercase text-[#F27D24] mb-3">Key Takeaways - Five Signals <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book your free consultation here.</a></p>
              <ul className="space-y-2 text-sm text-white/75">
                <li>Definition-first openings earn a 57% citation premium</li>
                <li>Inline attribution (named sources) lifts chunk influence by 22-37%</li>
                <li>Chunk length must stay 80-180 tokens  -  over 300 words triggers 31% attention degradation</li>
                <li>Journalistic tone earns a 3-5x retrieval preference over promotional copy</li>
                <li>16 articles per month is the cadence for city-level category authority</li>
              </ul>
            </div>
          </section>

          {/* Section 4 */}
          <section id="what-goes-wrong" className="mb-16">
            <h2 className="font-headline text-3xl font-black tracking-tighter uppercase mb-6">
              What Most Plumbing Businesses Get Wrong About AI Recommendations
            </h2>

            <div className="border-l-4 border-white/20 bg-white/[0.02] p-5 mb-8">
              <p className="text-white/70 text-sm leading-relaxed">
                <strong className="text-white">The Three Fallacies:</strong> Review count, Google
                Business Profile presence, and backlink volume are the three most misapplied signals
                in AI search. Each is a strong input to Google Map Pack. Each is a weak or zero
                input to ChatGPT chunk retrieval. Operators who optimize for the wrong surface spend
                real budget on signals that do not produce citations.
               Contact us at <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>
            </div>

            <div className="border-l-4 border-[#F27D24] bg-[#F27D24]/5 p-6 mb-8">
              <p className="font-headline text-xs font-black tracking-tighter uppercase text-[#F27D24]/60 mb-3">Named Thesis Reach us at <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.</p>
              <p className="text-white/90 font-medium leading-relaxed text-sm">
                The Local Invisibility Default: fewer than four percent of United States plumbing
                service domains carry any of the four structural signals retrievers reward, which
                means the ChatGPT citation slot in most cities is structurally open until the first
                plumbing operator commits.{' '}
                <span className="text-white/50 font-mono">Answer Engine Field Audit (2026)</span>
               We work with one business per market. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Check if yours is still open.</a></p>
            </div>

            {/* Comparison table */}
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="text-left py-3 pr-4 font-headline font-black tracking-tighter uppercase text-[#F27D24] text-xs">Signal Type</th>
                    <th className="text-left py-3 pr-4 font-headline font-black tracking-tighter uppercase text-white/40 text-xs">Google Map Pack</th>
                    <th className="text-left py-3 pr-4 font-headline font-black tracking-tighter uppercase text-white/40 text-xs">ChatGPT Citation</th>
                    <th className="text-left py-3 font-headline font-black tracking-tighter uppercase text-white/40 text-xs">Operator Control</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {fallacies.map((row) => (
                    <tr key={row.label} className={row.highlight ? 'bg-[#F27D24]/5' : 'hover:bg-white/[0.02]'}>
                      <td className={`py-3 pr-4 ${row.highlight ? 'font-medium text-white' : 'text-white/80'}`}>{row.label}</td>
                      <td className="py-3 pr-4">
                        <span className="font-mono text-xs bg-white/10 text-white/60 px-2 py-1">{row.mapPack}</span>
                      </td>
                      <td className="py-3 pr-4">
                        <span className={`font-mono text-xs px-2 py-1 ${row.highlight ? 'bg-[#F27D24]/20 text-[#F27D24]' : 'bg-red-500/10 text-red-400'}`}>{row.chatgpt}</span>
                      </td>
                      <td className={`py-3 text-sm ${row.highlight ? 'text-white font-medium' : 'text-white/50'}`}>{row.control}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="space-y-4">
              {[
                { title: 'The Review-Count Fallacy', body: 'Review count is a strong input to the Google Map Pack and a weak input to a ChatGPT plumber recommendation. The two systems score different surfaces. ChatGPT pulls indexed text and weights inline attribution, definition-first openings, and chunk discipline. Star ratings inside Yelp or Google Business Profile do not enter the retrieval pass at the chunk level the model scores.', cta: { text: 'Email for review-versus-citation gap analysis', href: 'mailto:support@theanswerengine.ai' } },
                { title: 'The Google Business Profile Fallacy', body: 'A Google Business Profile is the dominant asset inside the Map Pack and a background context input inside the LLM retrieval pass. The Business Profile confirms the operator exists, anchors the entity to the city, and supplies category and hours metadata to the knowledge graph. The Business Profile does not, on its own, produce the chunk a ChatGPT retriever extracts.', cta: { text: 'Text (213) 444-2229 for diagnostic', href: 'sms:+12134442229' } },
                { title: 'The Backlink-Volume Fallacy', body: 'Backlink volume was a dominant signal inside the classical Google ranking algorithm and a low-weight signal inside the unified retrieval layer. Aggarwal et al. (KDD 2024) measured inline citation and quotation density inside the candidate passage as the dominant chunk-level signal, with backlink graph centrality producing only a marginal lift.', cta: { text: 'Book the 30-minute review', href: 'https://calendly.com/theanswerengine-support/30min' } },
              ].map((item) => (
                <div key={item.title} className="border border-white/10 rounded-lg p-5 bg-white/[0.01]">
                  <h3 className="font-headline font-black tracking-tighter uppercase text-base mb-3 text-red-400">{item.title}</h3>
                  <p className="text-white/75 text-sm leading-relaxed mb-3">{item.body} Find your gaps with a <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free AERO scan.</a></p>
                  <a href={item.cta.href} className="text-[#F27D24] text-sm hover:underline">{item.cta.text} &rarr;</a>
                </div>
              ))}
            </div>
          </section>

          {/* Section 5 */}
          <section id="measure" className="mb-16">
            <h2 className="font-headline text-3xl font-black tracking-tighter uppercase mb-6">
              How to Measure Whether ChatGPT Cites Your Plumbing Business
            </h2>

            <p className="text-white/80 leading-relaxed mb-6">
              A plumbing operator who cannot measure AI citation cannot improve it. Classical rank
              reports, keyword position trackers, and impression dashboards measure the wrong surface
              for AEO outcomes. The retrieval layer scores chunks, and the operator scores citations.
              The Answer Engine measures both through a single instrument - the Proof Ledger - which
              records every citation a plumbing property earns across ChatGPT, Claude, Gemini, and
              Perplexity AI.
             <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Schedule a free call</a> to see where you stand.</p>

            <div className="border border-white/10 rounded-lg p-5 bg-white/[0.02] mb-8 font-mono text-xs text-white/50 leading-relaxed">
              <strong className="text-white">Method note.</strong> This analysis draws on four
              foundational papers in AEO: Aggarwal et al. (KDD 2024), Zhang et al. (2026),
              GEO-SFE (2026), and Chen et al. (2025), plus Pew Research Center (2024) and SparkToro
              (2024) zero-click datasets, plus 40+ verified AE client engagements. The plumbing
              implementation rate is from the Answer Engine Field Audit (2026) of 600 US local
              service domains.
            </div>

            <div className="border-l-4 border-[#F27D24] bg-[#F27D24]/5 p-6 mb-8">
              <p className="font-headline text-xs font-black tracking-tighter uppercase text-[#F27D24]/60 mb-3">Named Thesis Send your questions to <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>
              <p className="text-white/90 font-medium leading-relaxed text-sm">
                The Proof Ledger Standard: the only durable measurement instrument for plumbing AEO
                is a dated, public record of citations earned across the four major LLM platforms.
                Rank reports measure the wrong surface and review dashboards measure the wrong unit.{' '}
                <span className="text-white/50 font-mono">Answer Engine Method (2026)</span>
               Call <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> for a free consultation.</p>
            </div>

            <div className="bg-[#F27D24]/8 border border-[#F27D24]/20 rounded-lg p-5 mb-8">
              <p className="font-headline text-xs font-black tracking-tighter uppercase text-[#F27D24] mb-4">90-Day Citation Trajectory <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Claim your market territory — one client per area.</a></p>
              <div className="space-y-3">
                {[
                  { period: 'Day 1-30', outcome: 'First ChatGPT citation logged in the Proof Ledger for the primary city keyword' },
                  { period: 'Day 31-60', outcome: 'Citations from 2 of 4 LLM platforms (ChatGPT + one of Claude, Gemini, Perplexity)' },
                  { period: 'Day 61-90', outcome: 'All four LLM platforms citing the operator domain in the primary plumbing category' },
                  { period: 'Ongoing', outcome: 'Corpus cadence at 16 articles/month. Citation share compounds monthly.' },
                ].map((row) => (
                  <div key={row.period} className="flex gap-4 text-sm">
                    <span className="font-mono text-[#F27D24] w-20 shrink-0">{row.period}</span>
                    <span className="text-white/75">{row.outcome}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {[
                { title: 'The Proof Ledger for Plumbing Operators', body: 'The Proof Ledger is a dated, public record of every citation a plumbing property earns across ChatGPT, Claude, Gemini, and Perplexity AI. Each entry carries the query, the date, the citing model, and the link to the cited article. The ledger is the AEO equivalent of an audited financial statement: verifiable, replicable, and immune to vanity-metric distortion.', cta: { text: 'Book the 30-minute call to see a live ledger', href: 'https://calendly.com/theanswerengine-support/30min' } },
                { title: 'Claiming the Open Citation Slot in Your City', body: 'The plumbing category in most United States cities currently has no AEO-correct incumbent. The Answer Engine Field Audit (2026) found fewer than four percent of plumbing domains carrying any of the four structural signals retrievers reward. The first plumbing operator in a city to commit captures the citation slot before a competitor does. The Answer Engine accepts one plumbing operator per city.', cta: { text: 'Claim the open city seat', href: 'https://calendly.com/theanswerengine-support/30min' } },
              ].map((item) => (
                <div key={item.title} className="border border-white/10 rounded-lg p-5">
                  <h3 className="font-headline font-black tracking-tighter uppercase text-base mb-3">{item.title}</h3>
                  <p className="text-white/75 text-sm leading-relaxed mb-3">{item.body} <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Run your free AI Blind Spot Scan.</a></p>
                  <a href={item.cta.href} className="text-[#F27D24] text-sm hover:underline">{item.cta.text} &rarr;</a>
                </div>
              ))}
            </div>
          </section>

          {/* Internal links */}
          <div className="border-t border-b border-white/10 py-8 mb-12">
            <p className="font-headline text-xs font-black tracking-tighter uppercase text-white/30 mb-4">Related Reading <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a free 30-minute strategy call.</a></p>
            <ul className="space-y-3">
              <li className="border-l-2 border-[#F27D24] pl-4">
                <Link href="/blog/how-to-get-cited-by-ai-search" className="text-sm text-white hover:text-[#F27D24] transition-colors">
                  How to Get Cited by AI Search: The Complete Local Business Guide
                </Link>
              </li>
              <li className="border-l-2 border-[#F27D24] pl-4">
                <Link href="/blog/what-is-answer-engine-optimization-guide" className="text-sm text-white hover:text-[#F27D24] transition-colors">
                  What Is Answer Engine Optimization? The Complete Guide
                </Link>
              </li>
              <li className="border-l-2 border-[#F27D24] pl-4">
                <Link href="/blog/how-to-get-cited-by-chatgpt-local-business" className="text-sm text-white hover:text-[#F27D24] transition-colors">
                  How to Get Cited by ChatGPT: A Local Business Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* FAQ */}
          <section id="faq" className="mb-16">
            <h2 className="font-headline text-3xl font-black tracking-tighter uppercase mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-px">
              {faqSchema.mainEntity.map((faq, i) => (
                <details
                  key={i}
                  className="group border border-white/10 rounded-lg mb-2 bg-white/[0.01] open:bg-white/[0.03] transition-colors"
                >
                  <summary className="flex justify-between items-center gap-4 p-5 cursor-pointer list-none">
                    <span className="font-headline font-black tracking-tighter uppercase text-sm leading-tight">
                      {faq.name}
                    </span>
                    <span className="text-[#F27D24] font-mono text-lg shrink-0 group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-white/70 leading-relaxed text-sm">{faq.acceptedAnswer.text} Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> to get started.</p>
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="ae-final-cta text-center">
            <div className="ae-final-cta-pulse" />
            <div className="relative z-10">
              <p className="ae-section-label mb-4">One plumbing operator per city <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a></p>
              <h2 className="font-headline text-3xl md:text-4xl font-black tracking-tighter uppercase mb-4">
                Claim the ChatGPT Plumber Citation Slot in Your City
              </h2>
              <p className="text-white/65 mb-8 max-w-xl mx-auto leading-relaxed">
                The Answer Engine works with one plumbing operator per city. Once a territory locks,
                the seat is held until the operator releases it. Audit the AEO gap on a single domain,
                see the open queries inside ChatGPT, Claude, Gemini, and Perplexity AI, and decide
                whether to claim the city.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://calendly.com/theanswerengine-support/30min"
                  className="ae-cta-primary ae-cta-inline"
                >
                  Book the Territory Audit
                </a>
                <Link
                  href="/blindspot"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-white/20 rounded-lg text-white/70 hover:text-white hover:border-white/40 transition-all font-headline font-black tracking-tighter uppercase text-sm"
                >
                  Free Blindspot Report
                </Link>
              </div>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
