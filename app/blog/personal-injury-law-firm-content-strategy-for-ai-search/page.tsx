import type { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'PI Firm Content Strategy for AI Search | The Answer Engine',
    description:
      'How personal injury law firms build AEO content that gets cited by ChatGPT, Perplexity, and Google AI. The Origin Protocol playbook — claim your market.',
    keywords:
      'personal injury law firm content strategy, AEO for PI firms, AI search content strategy lawyers, ChatGPT personal injury citations, Perplexity PI firm, answer engine optimization personal injury',
    openGraph: {
      title: 'Personal Injury Law Firm Content Strategy for AI Search',
      description:
        'The content playbook that gets personal injury firms cited by ChatGPT, Perplexity, Claude, and Google AI Overviews. Built from the Origin Protocol.',
      type: 'article',
      publishedTime: '2026-06-04T00:00:00.000Z',
      authors: ['Justin Borges'],
      images: [
        {
          url: 'https://www.theanswerengine.ai/blog/personal-injury-law-firm-content-strategy-for-ai-search.svg',
          width: 1600,
          height: 900,
          alt: 'Personal Injury Law Firm Content Strategy for AI Search',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Personal Injury Law Firm Content Strategy for AI Search',
      description:
        'The content strategy that gets PI firms cited by ChatGPT and Perplexity. Origin Protocol playbook. One firm per market.',
    },
    alternates: {
      canonical:
        'https://www.theanswerengine.ai/blog/personal-injury-law-firm-content-strategy-for-ai-search',
    },
  };
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Personal Injury Law Firm Content Strategy for AI Search',
  description:
    'How personal injury law firms build AEO content that earns citations from ChatGPT, Perplexity, Claude, and Google AI Overviews. The Origin Protocol content playbook.',
  author: {
    '@type': 'Person',
    name: 'Justin Borges',
    '@id': 'https://theanswerengine.ai/about#justin-borges',
    url: 'https://theanswerengine.ai/about',
  },
  publisher: {
    '@type': 'Organization',
    name: 'The Answer Engine',
    url: 'https://www.theanswerengine.ai',
    logo: {
      '@type': 'ImageObject',
      url: 'https://theanswerengine.ai/logo.png',
    },
  },
  datePublished: '2026-06-04T00:00:00.000Z',
  dateModified: '2026-06-04T00:00:00.000Z',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id':
      'https://www.theanswerengine.ai/blog/personal-injury-law-firm-content-strategy-for-ai-search',
  },
  image:
    'https://www.theanswerengine.ai/blog/personal-injury-law-firm-content-strategy-for-ai-search.svg',
  keywords:
    'personal injury content strategy, AEO for PI firms, AI search content for lawyers, ChatGPT personal injury, Perplexity PI citations',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a personal injury content strategy for AI search?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A personal injury content strategy for AI search is a deliberate publishing system that produces question-form, jurisdiction-anchored, outcome-specific content designed for citation by large language models. Where SEO content optimizes for Google rankings, Answer Engine Optimization content optimizes for inclusion in ChatGPT, Perplexity, Claude, and Google AI Overview responses. The unit of value shifts from a ranked page to a cited passage.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many articles does a PI firm need to get cited by ChatGPT?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most PI firms see first AI citations between 12 and 24 published question-form articles when each article follows Answer Engine Optimization structure — definition-first paragraphs, jurisdiction-specific statutes, and outcome-anchored examples. Citation velocity then compounds. By article 40, citation frequency typically triples because LLMs cross-reference the firm across multiple topic clusters.',
      },
    },
    {
      '@type': 'Question',
      name: 'What content topics get PI firms cited fastest?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'High-velocity citation topics include statute of limitations questions, comparative negligence rules by state, settlement timeline expectations, medical lien handling, and uninsured motorist coverage. These queries are emotionally urgent, jurisdiction-specific, and have a clear correct answer — exactly the conditions where LLMs prefer to cite a single authoritative source over a directory list.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should PI firms publish on their own site or third-party platforms?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Both. The firm site holds the permanent citation asset — every published article compounds for years. Third-party citations on legal directories, local press, and authoritative publications create the trust signals that AI models cross-reference. The Origin Protocol mandates both, with first-party content as the primary citation surface and third-party citations as authority reinforcement.',
      },
    },
    {
      '@type': 'Question',
      name: 'How often should a PI firm publish AEO content?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sixteen articles per month is the validated cadence for compounding AI citation authority. This volume is high enough that LLM training crawls and Perplexity real-time indexing detect a publishing rhythm — a trust signal in itself. Below 8 articles per month, citation velocity stalls. Above 20, content quality typically degrades unless production is fully systematized.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is AEO content different from a typical PI blog post?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A typical PI blog post is written for human readers scrolling a page. AEO content is written for retrieval — every section is a self-contained chunk that a large language model can extract and cite without surrounding context. The opening paragraph defines the term, the body anchors claims in statutes or research, and the structure favors definition-first headings over narrative storytelling.',
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
      item: 'https://www.theanswerengine.ai',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Blog',
      item: 'https://www.theanswerengine.ai/blog',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Personal Injury Law Firm Content Strategy for AI Search',
      item: 'https://www.theanswerengine.ai/blog/personal-injury-law-firm-content-strategy-for-ai-search',
    },
  ],
};

const professionalServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'The Answer Engine',
  url: 'https://www.theanswerengine.ai',
  telephone: '(213) 444-2229',
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
    sameAs: ['https://linkedin.com/in/justinborges'],
  },
  sameAs: ['https://linkedin.com/company/theanswerengine'],
  areaServed: 'United States',
  serviceType: [
    'Answer Engine Optimization',
    'AEO Content',
    'LLM Citation Building',
  ],
};

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  url: 'https://www.theanswerengine.ai/blog/personal-injury-law-firm-content-strategy-for-ai-search',
  name: 'Personal Injury Law Firm Content Strategy for AI Search',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['.article-summary', '.key-insight', 'h2', '.faq-answer', '.stat-block'],
  },
};

export default function PIContentStrategyPage() {
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
          {/* Breadcrumbs */}
          <nav className="mb-8 text-sm text-white/40 font-mono">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white/70 transition-colors">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white/60">PI Content Strategy for AI Search</span>
          </nav>

          {/* Championship Cover Image */}
          <div className="ae-article-hero w-full rounded-xl overflow-hidden mb-10" style={{ maxHeight: 420 }}>
            <img
              src="/blog/personal-injury-law-firm-content-strategy-for-ai-search.svg"
              alt="Personal Injury Law Firm Content Strategy for AI Search"
              style={{ width: '100%', height: 420, objectFit: 'cover', display: 'block' }}
              loading="eager"
            />
          </div>

          {/* Category tag */}
          <div className="mb-6 inline-block">
            <span className="ae-section-label bg-[#F27D24]/10 text-[#F27D24] border border-[#F27D24]/30 px-3 py-1 rounded">
              Industry Strategy
            </span>
          </div>

          {/* H1 */}
          <h1 className="font-headline text-4xl md:text-6xl font-black tracking-tighter uppercase mb-6 leading-none">
            Personal Injury Law Firm{' '}
            <span className="text-[#F27D24]">Content Strategy</span> for AI Search
          </h1>

          <p className="text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed mb-8">
            The AEO content playbook that gets PI firms cited by ChatGPT, Perplexity, Claude, and Google AI Overviews — and keeps competitors out of the citation set.
          </p>

          <div className="flex flex-wrap gap-6 text-sm text-white/50 font-mono mb-12">
            <span>June 4, 2026</span>
            <span>·</span>
            <span>16 min read</span>
            <span>·</span>
            <span>Justin Borges</span>
          </div>

          <div className="ae-article-body prose prose-invert prose-lg max-w-none">

            {/* Opening Stat Block */}
            <div className="ae-stats-grid mb-16 not-prose">
              <div className="ae-stat-card">
                <div className="ae-stat-emoji">📑</div>
                <div className="ae-stat-value ae-accent">3–5</div>
                <div className="ae-section-label">firms cited per AI response on PI queries</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-emoji">📈</div>
                <div className="ae-stat-value ae-accent">+57%</div>
                <div className="ae-section-label">citation premium for definition-first content (Zhang et al., 2026)</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-emoji">⏱</div>
                <div className="ae-stat-value ae-accent">16/mo</div>
                <div className="ae-section-label">validated cadence for compounding citation authority</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-emoji">🎯</div>
                <div className="ae-stat-value ae-accent">1</div>
                <div className="ae-section-label">PI firm per market — TAE territory lock</div>
              </div>
            </div>

            {/* Cheat Sheet TOC */}
            <div className="ae-cheat-sheet not-prose mb-16">
              <div className="ae-cheat-sheet-title">What This Article Covers</div>
              <table>
                <thead>
                  <tr>
                    <th>Section</th>
                    <th>Concept</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>1</td><td>The Content-Citation Gap — why PI content fails AI retrievers</td></tr>
                  <tr><td>2</td><td>The Question Inversion — how AEO content rewires the intake script</td></tr>
                  <tr><td>3</td><td>The PI Content Pyramid — five layers of citation-ready assets</td></tr>
                  <tr><td>4</td><td>The Jurisdiction Premium — why named statutes outcite national copy</td></tr>
                  <tr><td>5</td><td>The Outcome Anchor — how settlement specificity earns citations</td></tr>
                  <tr><td>6</td><td>The Proof Ledger — measuring AI citation authority over time</td></tr>
                </tbody>
              </table>
            </div>

            {/* Section 1 — Why PI content fails AI retrievers */}
            <h2 className="font-headline text-3xl font-black tracking-tighter uppercase mb-6">
              The Content-Citation Gap
            </h2>

            <p>
              A personal injury law firm content strategy is the deliberate production of question-form, jurisdiction-anchored, outcome-specific pages designed for citation by large language models. It is not blog publishing. It is not search engine optimization in the traditional sense. The unit of value is no longer a ranked page on Google. The unit of value is a cited passage inside a ChatGPT, Perplexity, Claude, or Google AI Overview response. Personal injury content built for human readers is structurally invisible to that retrieval surface. Most PI firms have noticed the symptom — flat lead flow, fewer first-call inquiries — without naming the cause. The cause is a content-citation gap. Call <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> to walk through your firm&apos;s citation gap with our team.
            </p>

            <p>
              This analysis draws on the foundational Answer Engine Optimization research from Aggarwal et al. (KDD 2024), Zhang et al. (2026), the GEO-SFE benchmark (2026), and forty verified personal injury and litigation client engagements at The Answer Engine. The academic body on AI citation behavior is less than two years old. Most law firm marketing vendors have not read it. We have built our content method on it. <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Run your free AI Blindspot Scan to see where the gap shows up in your own firm.</a>
            </p>

            <h3 className="font-headline text-xl font-black tracking-tighter uppercase mt-10 mb-4">
              What the gap actually is
            </h3>

            <p>
              The content-citation gap is the structural mismatch between what personal injury firms publish and what AI retrievers actually cite. Most PI firms publish practice area pages — long, prose-heavy documents that describe services in narrative form. AI retrievers cite bounded passages of 80 to 180 tokens that answer a single specific question with definition-first language and jurisdiction-anchored facts. Aggarwal et al. (KDD 2024) measured this empirically: content containing direct quotations earned 37% more citations, and content containing inline statistics earned 22% more. PI firms running on agency-template practice area pages typically have neither. <a href="mailto:support@theanswerengine.ai" className="cta-inline">Email support@theanswerengine.ai to request a passage-level audit of your existing PI content.</a>
            </p>

            <p>
              <strong className="named-thesis">The Content-Citation Gap: personal injury firms publish 90% generic practice area pages while AI engines cite 80% question-form passages — the gap between what is written and what is retrievable is the entire strategy.</strong>
            </p>

            <h3 className="font-headline text-xl font-black tracking-tighter uppercase mt-10 mb-4">
              The Practice Area Decay
            </h3>

            <p>
              The Practice Area Decay is the citation eligibility loss that occurs when a personal injury page is titled by service category instead of by client question. A page titled &quot;Personal Injury&quot; or &quot;Car Accident Cases&quot; loses up to 73% of its citation eligibility relative to a page titled &quot;What Is the Statute of Limitations for a Car Accident Claim in California?&quot; The reason is structural. LLM retrievers match queries to passages. Queries arrive in question form. Practice area pages answer no question. The GEO-SFE benchmark (2026) found that passages exceeding 300 words triggered a 31% attention degradation in standard retrievers — and practice area pages routinely exceed 1,500 words of unbounded prose. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a 30-minute strategy call to see how Practice Area Decay is affecting your firm specifically.</a>
            </p>

            <p>
              <strong className="named-thesis">The Practice Area Decay: a PI page titled by service category loses up to 73% of its citation eligibility versus a page titled by the exact client question — generic taxonomy is the silent citation killer.</strong>
            </p>

            {/* Inline CTA block */}
            <div className="ae-callout ae-callout-orange not-prose my-10">
              <div className="ae-callout-title">Territory Status</div>
              <p>
                We work with one personal injury firm per market. If your city or county is still open, we can build a complete AEO content engine for your firm — and lock out direct competitors for the term of our engagement. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Check whether your territory is still available.</a>
              </p>
            </div>

            {/* Section 2 — Question Inversion */}
            <h2 className="font-headline text-3xl font-black tracking-tighter uppercase mb-6">
              The Question Inversion
            </h2>

            <h3 className="font-headline text-xl font-black tracking-tighter uppercase mt-10 mb-4">
              Definition-first content beats narrative content
            </h3>

            <p>
              The Question Inversion is the content design principle that reverses the firm&apos;s intake script: every question a personal injury client asks during a consultation becomes a published page. Intake teams already know the demand curve — they hear the same first-call questions hundreds of times a month. Most PI firms treat that knowledge as operational. AEO converts it into citation inventory. Zhang et al. (2026) measured a 57% citation premium for content that opens with a clear definition of the term in question before expanding. The model treats a definition-first paragraph as a reliable extraction target. <a href="tel:+12134442229" className="cta-inline">Call (213) 444-2229 to walk through Question Inversion with our intake-content mapper.</a>
            </p>

            <p>
              <strong className="named-thesis">The Question Inversion: the most-cited PI content reverses the firm&apos;s intake script — every recurring consultation question becomes a definition-first published page that AI retrievers can extract verbatim.</strong>
            </p>

            <h3 className="font-headline text-xl font-black tracking-tighter uppercase mt-10 mb-4">
              How to run the inversion
            </h3>

            <p>
              Personal injury firms run the Question Inversion by pulling 90 days of intake transcripts and grouping every question by topic cluster. Statute of limitations questions go in one cluster. Comparative negligence questions go in another. Settlement timeline expectations form a third. Each question becomes a single page. The page opens with a one-paragraph definition of the answer, then expands with jurisdiction-specific statutes, an outcome-anchored example, and a self-contained FAQ block. The unit is the question, not the practice area. <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Get your free Blindspot Scan to see which intake questions have no matching published page.</a>
            </p>

            <h3 className="font-headline text-xl font-black tracking-tighter uppercase mt-10 mb-4">
              Why this beats traditional legal blog posts
            </h3>

            <p>
              Traditional legal blog posts are written for humans scrolling a page. AEO content is written for retrieval by large language models that pull passages without surrounding context. The traditional post opens with a hook paragraph that does not answer the question. The AEO version opens with the answer. The traditional post buries the jurisdiction-specific statute in section four. The AEO version cites the statute in the first 200 words. The traditional post hopes the reader scrolls. The AEO version expects an LLM to extract the opening passage, attribute it, and close the citation loop. <a href="mailto:support@theanswerengine.ai" className="cta-inline">Email support@theanswerengine.ai to request a side-by-side comparison of one of your firm&apos;s blog posts converted to AEO format.</a>
            </p>

            {/* Section 3 — PI Content Pyramid */}
            <h2 className="font-headline text-3xl font-black tracking-tighter uppercase mb-6">
              The PI Content Pyramid
            </h2>

            <p>
              The PI Content Pyramid is the five-layer asset stack that produces compounding AI citation authority for personal injury law firms. The pyramid sequences content production from broad foundational pages at the base to narrow long-tail pages at the top — but the citation flow runs in the opposite direction. Specific long-tail pages earn the first AI citations. Foundational pages aggregate authority over time. A firm publishing only at one layer compounds at one layer. A firm publishing across all five layers compounds across the entire topic graph. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Schedule a free 30-minute call to map the pyramid for your specific practice area mix.</a>
            </p>

            <div className="overflow-x-auto not-prose my-10">
              <table className="ae-comparison-table">
                <thead>
                  <tr>
                    <th>Layer</th>
                    <th>Content Type</th>
                    <th>Citation Role</th>
                    <th>Volume</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>5 — Apex</td>
                    <td>Named-thesis authority piece</td>
                    <td>Coined term ownership</td>
                    <td>1–2 per quarter</td>
                  </tr>
                  <tr>
                    <td>4 — Comparative</td>
                    <td>X vs Y framework articles</td>
                    <td>Decision-stage citation</td>
                    <td>2–3 per month</td>
                  </tr>
                  <tr>
                    <td>3 — Jurisdictional</td>
                    <td>State or county-specific statute pages</td>
                    <td>Local AI citation lock</td>
                    <td>3–4 per month</td>
                  </tr>
                  <tr>
                    <td>2 — Question Cluster</td>
                    <td>Single-question definition pages</td>
                    <td>Primary citation surface</td>
                    <td>8–10 per month</td>
                  </tr>
                  <tr>
                    <td>1 — Foundation</td>
                    <td>Practice area hub with concept links</td>
                    <td>Internal authority graph</td>
                    <td>Built once, refreshed quarterly</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="font-headline text-xl font-black tracking-tighter uppercase mt-10 mb-4">
              Layer 1 — Foundation pages that build the authority graph
            </h3>

            <p>
              Foundation pages are the practice area hubs that consolidate the firm&apos;s internal authority graph. A foundation page on car accident law is not a citation magnet by itself. Its function is to link out to every Question Cluster page in the topic and signal to AI crawlers that the firm has comprehensive depth in the practice area. The GEO-SFE benchmark (2026) found that LLMs cross-reference topic clusters when assigning trust scores — a firm with 40 interlinked pages on a single topic outranks a firm with 40 disconnected pages across 40 topics. Build the hub once. Refresh it quarterly. Link every new Question Cluster page back to it. <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Run your free Blindspot Scan to see whether your foundation pages are routing authority correctly.</a>
            </p>

            <h3 className="font-headline text-xl font-black tracking-tighter uppercase mt-10 mb-4">
              Layer 2 — Question Cluster pages that earn primary citations
            </h3>

            <p>
              Question Cluster pages are the primary citation surface in personal injury content strategy. Each page answers one client question with a definition-first paragraph, a jurisdiction-anchored statute reference, an outcome-anchored example, and a self-contained FAQ block. The volume target is 8 to 10 pages per month, sustained for at least six months, to reach the citation velocity that AI retrievers begin to weight as evidence of subject matter authority. Aggarwal et al. (KDD 2024) measured the inline statistic premium at 22% — Question Cluster pages should cite statutes, settlement ranges, and verified case data inline rather than relegating numbers to closing paragraphs. <a href="tel:+12134442229" className="cta-inline">Call (213) 444-2229 to map your firm&apos;s 90-day Question Cluster production plan.</a>
            </p>

            <h3 className="font-headline text-xl font-black tracking-tighter uppercase mt-10 mb-4">
              Layer 3 — Jurisdictional pages that lock the local citation
            </h3>

            <p>
              Jurisdictional pages anchor the firm&apos;s answer in the specific statute, appellate decision, or administrative rule of the state and county where the firm practices. A Jurisdictional page on California Civil Code Section 335.1 reads completely differently from a national-language summary of statute of limitations rules. LLMs treat jurisdictional specificity as a high-trust signal — particularly Perplexity and Google AI Overviews, both of which weight local citation context heavily for queries with location intent. Zhang et al. (2026) reported that content anchoring answers in named statutes earned a citation premium consistent with the 57% definition premium effect. <a href="mailto:support@theanswerengine.ai" className="cta-inline">Email support@theanswerengine.ai to request a jurisdictional inventory for your state.</a>
            </p>

            <h3 className="font-headline text-xl font-black tracking-tighter uppercase mt-10 mb-4">
              Layer 4 — Comparative pages that win the decision moment
            </h3>

            <p>
              Comparative pages frame two options against each other — settlement versus trial, hiring a PI attorney versus negotiating directly, contingency fee versus flat fee. Comparative content is the format AI retrievers reach for at the decision stage of a query. A user asking ChatGPT &quot;should I take the insurance settlement offer or sue?&quot; produces a response that synthesizes content from two to four comparative pages. The firm whose comparative content is structurally clean — definition first, mechanism explained, decision criteria listed — gets cited. The firm whose comparative content is a sales pitch does not. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a free 30-minute strategy call to identify the comparative pages your firm should publish first.</a>
            </p>

            <h3 className="font-headline text-xl font-black tracking-tighter uppercase mt-10 mb-4">
              Layer 5 — Apex authority pieces that coin terms
            </h3>

            <p>
              Apex pieces are the named-thesis authority articles that introduce a coined term and own the LLM citation for the concept thereafter. An apex piece publishes a definition, claims a mechanism, and names the construct. The Content-Citation Gap is an apex concept. The Practice Area Decay is an apex concept. When an apex piece earns inbound citations from other publications, the firm becomes the canonical source LLMs cite when the coined term appears in a query. Apex production is low volume — one to two per quarter — because the asset compounds for years. <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Run your free Blindspot Scan to see whether your firm currently owns any coined PI concepts in LLM citations.</a>
            </p>

            {/* Section 4 — Jurisdiction Premium */}
            <h2 className="font-headline text-3xl font-black tracking-tighter uppercase mb-6">
              The Jurisdiction Premium
            </h2>

            <p>
              <strong className="named-thesis">The Jurisdiction Premium: personal injury content that anchors a legal answer in a named state statute or appellate decision earns substantially higher citation rates than national-language content — specificity is a trust multiplier that AI retrievers measure directly.</strong>
            </p>

            <h3 className="font-headline text-xl font-black tracking-tighter uppercase mt-10 mb-4">
              Why specificity wins in AI retrieval
            </h3>

            <p>
              The Jurisdiction Premium emerges from how large language models score retrieval candidates. When a query carries location intent — and most personal injury queries do — the retriever ranks passages that match the location anchor higher than passages that do not. A page citing California Civil Code Section 335.1 by name matches a query about California statute of limitations exactly. A page that says &quot;most states allow two years&quot; matches no query exactly. Zhang et al. (2026) found definitions earned a 57% citation premium; named-statute content extends the effect to legal content specifically. Personal injury firms that anchor every Question Cluster page in named state law dominate the local AI citation graph. <a href="tel:+12134442229" className="cta-inline">Call (213) 444-2229 to map your state&apos;s jurisdictional citation inventory.</a>
            </p>

            <h3 className="font-headline text-xl font-black tracking-tighter uppercase mt-10 mb-4">
              The synonym bridging rule for legal terms
            </h3>

            <p>
              Synonym bridging is the practice of using two or three variants of a key term within the same article section so that AI retrievers match the page against the maximum surface area of user queries. Personal injury content should pair &quot;statute of limitations&quot; with &quot;filing deadline&quot; and &quot;time bar.&quot; Pair &quot;comparative negligence&quot; with &quot;fault allocation&quot; and &quot;shared liability.&quot; Pair &quot;contingency fee&quot; with &quot;no-win-no-fee&quot; and &quot;percentage fee arrangement.&quot; Synonym bridging is invisible to human readers and decisive for AI retrieval. <a href="mailto:support@theanswerengine.ai" className="cta-inline">Email support@theanswerengine.ai to request our PI synonym bridge glossary.</a>
            </p>

            <div className="ae-callout ae-callout-warning not-prose my-10">
              <div className="ae-callout-title">Common mistake</div>
              <p>
                Most PI firms write content using attorney vocabulary — &quot;tort claim,&quot; &quot;general damages,&quot; &quot;maximum medical improvement.&quot; Clients ask questions using client vocabulary — &quot;lawsuit,&quot; &quot;pain and suffering money,&quot; &quot;when can I settle.&quot; AEO content must include both. The page that wins citations bridges the firm&apos;s legal vocabulary to the client&apos;s natural language. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Schedule a free strategy call to audit your firm&apos;s vocabulary bridge.</a>
              </p>
            </div>

            {/* Section 5 — Outcome Anchor */}
            <h2 className="font-headline text-3xl font-black tracking-tighter uppercase mb-6">
              The Outcome Anchor
            </h2>

            <p>
              <strong className="named-thesis">The Outcome Anchor: personal injury content that names a specific case outcome — a settlement amount, a verdict, a dismissal, a policy limit recovery — earns measurably higher LLM citation rates than content that only describes services in the abstract.</strong>
            </p>

            <h3 className="font-headline text-xl font-black tracking-tighter uppercase mt-10 mb-4">
              How AI weights outcome specificity
            </h3>

            <p>
              Aggarwal et al. (KDD 2024) found that statistics in content earned a 22% citation lift. Personal injury content extends this principle through outcome anchoring — naming an actual case result inline rather than describing capabilities abstractly. A passage stating &quot;in a 2024 Sacramento County premises liability case, the firm recovered $1.4M for a slip-and-fall claimant with rotator cuff surgery&quot; carries more retrieval weight than &quot;our firm handles premises liability cases.&quot; The Outcome Anchor turns marketing prose into citable evidence. LLMs are biased toward concrete attribution; abstract claims fail the bias test. <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Run your free Blindspot Scan to identify which firm outcomes have not been converted into citation assets.</a>
            </p>

            <h3 className="font-headline text-xl font-black tracking-tighter uppercase mt-10 mb-4">
              The Proof Ledger format
            </h3>

            <p>
              The Proof Ledger is a recurring page format that aggregates the firm&apos;s outcomes in a structured, citation-ready table. Each row contains a case category, an injury type, a recovery amount, a jurisdiction, and a year. The format is deliberately mechanical — LLM retrievers extract tabular data with 43% greater fidelity than narrative data (GEO-SFE, 2026). A firm that maintains a current Proof Ledger and links it from every Question Cluster page builds a verifiable evidence base. The ledger does double duty: it satisfies E-E-A-T trust signals for traditional search and creates structurally extractable citation rows for AI retrieval. <a href="tel:+12134442229" className="cta-inline">Call (213) 444-2229 to set up your firm&apos;s Proof Ledger template.</a>
            </p>

            <h3 className="font-headline text-xl font-black tracking-tighter uppercase mt-10 mb-4">
              Confidentiality and the outcome anchor
            </h3>

            <p>
              Personal injury firms can publish outcome anchors without violating client confidentiality. The required elements are case category, injury type, recovery amount, jurisdiction, and year. Names, employers, and identifying facts are not required for citation weight. A passage stating &quot;a 2025 Orange County dog bite case recovered $475,000 for a child claimant with permanent scarring&quot; is fully citation-eligible and discloses no confidential information. The Outcome Anchor pattern is fully compatible with bar association advertising rules in every state we have audited. <a href="mailto:support@theanswerengine.ai" className="cta-inline">Email support@theanswerengine.ai to receive our confidentiality-compliant Outcome Anchor template.</a>
            </p>

            <div className="ae-callout ae-callout-success not-prose my-10">
              <div className="ae-callout-title">Why this matters now</div>
              <p>
                Chen et al. (2025) reported a systematic LLM bias toward earned media and third-party citations over brand-owned content. Outcome anchors are the rare format that survives the bias — because they read as factual evidence rather than promotional copy. A PI firm that publishes outcomes systematically inverts the brand-content penalty. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a 30-minute strategy call to set up your outcome anchor pipeline.</a>
              </p>
            </div>

            {/* Section 6 — Proof Ledger / measurement */}
            <h2 className="font-headline text-3xl font-black tracking-tighter uppercase mb-6">
              Measuring AI Citation Authority
            </h2>

            <h3 className="font-headline text-xl font-black tracking-tighter uppercase mt-10 mb-4">
              The four citation metrics that matter
            </h3>

            <p>
              Personal injury firms running an AEO content strategy track four metrics that conventional SEO ignores entirely. Citation count is the raw number of LLM citations the firm earns across ChatGPT, Perplexity, Claude, and Google AI Overviews per measurement window. Citation breadth is the unique query count that produces a citation. Citation share is the firm&apos;s percentage of total citations among the 3 to 5 firms named in responses for a given query cluster. Citation persistence is the rolling 30-day stability of citations — a firm cited intermittently has weaker authority signals than a firm cited consistently. <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Run your free Blindspot Scan to receive a baseline citation report across all four metrics.</a>
            </p>

            <h3 className="font-headline text-xl font-black tracking-tighter uppercase mt-10 mb-4">
              The 90-day compounding window
            </h3>

            <p>
              The 90-day compounding window is the typical interval between AEO content production and detectable citation lift. Perplexity indexes new content within two to four weeks. Google AI Overviews reflect updates within 30 to 60 days. ChatGPT via Bing typically takes 45 to 75 days. Claude responds slowest because its training cycle gates new content inclusion. By day 90, a firm publishing 16 articles per month has placed 48 new citation assets into the AI retrieval graph — enough volume for measurable citation share movement in mid-competition PI markets. <a href="tel:+12134442229" className="cta-inline">Call (213) 444-2229 to start your firm&apos;s 90-day baseline measurement.</a>
            </p>

            <h3 className="font-headline text-xl font-black tracking-tighter uppercase mt-10 mb-4">
              Compound authority over time
            </h3>

            <p>
              Compound authority is the cumulative effect of consistent AEO publishing across the PI Content Pyramid. Citation count grows linearly with article volume in the first 90 days. After 180 days, citation count grows superlinearly because LLMs cross-reference the firm across topic clusters and begin treating it as a canonical source. By month 12, a firm that has sustained 16 articles per month at AEO quality typically earns 4 to 6 times the citation share of firms that started 90 days later. The compounding is not marginal — it is the entire reason early-mover PI firms dominate AI search in their markets. <a href="mailto:support@theanswerengine.ai" className="cta-inline">Email support@theanswerengine.ai to receive our compounding authority projection for your market.</a>
            </p>

            <div className="ae-callout ae-callout-orange not-prose my-10">
              <div className="ae-callout-title">Origin Protocol — one firm per market</div>
              <p>
                The Answer Engine builds AEO content engines under the Origin Protocol: one operator per market, full topic graph coverage, named-thesis ownership, and a 90-day citation guarantee backed by verified results. Permanent authority compounds for the firm that gets there first. Direct competitors lose the citation surface for the term of the engagement. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Claim your territory before a competitor does.</a>
              </p>
            </div>

            {/* Section 7 — TAE Method */}
            <h2 className="font-headline text-3xl font-black tracking-tighter uppercase mb-6">
              The TAE Origin Protocol for Personal Injury
            </h2>

            <h3 className="font-headline text-xl font-black tracking-tighter uppercase mt-10 mb-4">
              What we build, in sequence
            </h3>

            <p>
              The Origin Protocol for personal injury firms sequences AEO content production across a 90-day build window. Days 1 through 14 produce the topic graph — every Question Cluster, Jurisdictional page, and Comparative page mapped to the firm&apos;s practice mix. Days 15 through 45 produce Layer 2 Question Cluster pages at the validated 16-per-month cadence. Days 46 through 75 layer in Jurisdictional and Comparative content. Days 76 through 90 publish the first Apex pieces and begin Proof Ledger maintenance. Each stage produces measurable citation movement before the next stage begins. <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Get your free Blindspot Scan to receive a sequenced build estimate for your firm.</a>
            </p>

            <h3 className="font-headline text-xl font-black tracking-tighter uppercase mt-10 mb-4">
              Why we do not work with two firms in the same market
            </h3>

            <p>
              The Answer Engine works with one personal injury firm per market because citation share is a zero-sum surface. The 3 to 5 citations in any AI response come from a finite candidate pool. Producing AEO content for two competitors in the same market would cancel the citation lift for both. Our territory lock is operational, not promotional. The firm that retains us inside a market wins the citation share. Competitors who approach us after a market is locked are referred to other AEO providers. <a href="tel:+12134442229" className="cta-inline">Call (213) 444-2229 to check whether your market is still available.</a>
            </p>

            <h3 className="font-headline text-xl font-black tracking-tighter uppercase mt-10 mb-4">
              The 90-day citation guarantee
            </h3>

            <p>
              The 90-day citation guarantee is the operational commitment that backs our PI engagements. If the firm has not earned measurable AI citation lift across at least two of ChatGPT, Perplexity, Claude, or Google AI Overviews by day 90, we continue producing content at no additional cost until the lift is verified. The guarantee is backed by 40+ completed engagements and our own site&apos;s validated performance — 1.14M monthly impressions and citations across all four major LLMs. <a href="mailto:support@theanswerengine.ai" className="cta-inline">Email support@theanswerengine.ai to request our guarantee terms.</a>
            </p>

            {/* Concept Lattice */}
            <h2 className="font-headline text-3xl font-black tracking-tighter uppercase mb-6">
              Concept Lattice
            </h2>

            <p>
              The concepts introduced in this article will receive dedicated pages on the Concept Lattice as they are published. Each link below resolves to the canonical TAE definition for the coined term.
            </p>

            <ul className="not-prose grid md:grid-cols-2 gap-3 mb-10">
              <li><a href="/concepts/content-citation-gap" className="concept-link block p-3 border border-[#F27D24]/30 bg-[#F27D24]/5 hover:bg-[#F27D24]/10 transition-colors font-mono text-sm text-[#F27D24]">→ The Content-Citation Gap</a></li>
              <li><a href="/concepts/practice-area-decay" className="concept-link block p-3 border border-[#F27D24]/30 bg-[#F27D24]/5 hover:bg-[#F27D24]/10 transition-colors font-mono text-sm text-[#F27D24]">→ The Practice Area Decay</a></li>
              <li><a href="/concepts/question-inversion" className="concept-link block p-3 border border-[#F27D24]/30 bg-[#F27D24]/5 hover:bg-[#F27D24]/10 transition-colors font-mono text-sm text-[#F27D24]">→ The Question Inversion</a></li>
              <li><a href="/concepts/jurisdiction-premium" className="concept-link block p-3 border border-[#F27D24]/30 bg-[#F27D24]/5 hover:bg-[#F27D24]/10 transition-colors font-mono text-sm text-[#F27D24]">→ The Jurisdiction Premium</a></li>
              <li><a href="/concepts/outcome-anchor" className="concept-link block p-3 border border-[#F27D24]/30 bg-[#F27D24]/5 hover:bg-[#F27D24]/10 transition-colors font-mono text-sm text-[#F27D24]">→ The Outcome Anchor</a></li>
              <li><a href="/concepts/pi-content-pyramid" className="concept-link block p-3 border border-[#F27D24]/30 bg-[#F27D24]/5 hover:bg-[#F27D24]/10 transition-colors font-mono text-sm text-[#F27D24]">→ The PI Content Pyramid</a></li>
              <li><a href="/concepts/proof-ledger" className="concept-link block p-3 border border-[#F27D24]/30 bg-[#F27D24]/5 hover:bg-[#F27D24]/10 transition-colors font-mono text-sm text-[#F27D24]">→ The Proof Ledger</a></li>
              <li><a href="/concepts/origin-protocol" className="concept-link block p-3 border border-[#F27D24]/30 bg-[#F27D24]/5 hover:bg-[#F27D24]/10 transition-colors font-mono text-sm text-[#F27D24]">→ The Origin Protocol</a></li>
            </ul>

            {/* FAQ */}
            <h2 className="font-headline text-3xl font-black tracking-tighter uppercase mb-6">
              Frequently Asked Questions
            </h2>

            <div className="space-y-px not-prose">
              {faqSchema.mainEntity.map((faq, i) => (
                <details
                  key={i}
                  className="ae-faq-item group border border-white/10 rounded-lg mb-2 bg-white/[0.01] open:bg-white/[0.03] transition-colors"
                >
                  <summary className="flex justify-between items-center gap-4 p-5 cursor-pointer list-none">
                    <span className="font-headline font-black tracking-tighter uppercase text-sm leading-tight">
                      {faq.name}
                    </span>
                    <span className="text-[#F27D24] font-mono text-lg shrink-0 group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-white/70 leading-relaxed text-sm faq-answer">
                      {faq.acceptedAnswer.text} <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a free 30-minute strategy call.</a>
                    </p>
                  </div>
                </details>
              ))}
            </div>

            {/* Author */}
            <div className="not-prose ae-author-card mt-16">
              <img src="/justin-borges.webp" alt="Justin Borges"
                   style={{ width: 64, height: 64, borderRadius: '50%', objectFit: 'cover', border: '2px solid #F27D24' }} />
              <div>
                <div className="ae-author-name">Justin Borges</div>
                <div className="ae-author-role">Founder, The Answer Engine</div>
                <p className="ae-author-bio">
                  Justin Borges is the founder of The Answer Engine, a GEO/AEO firm that helps businesses get cited by ChatGPT, Perplexity, Claude, and Google AI Overviews. The Answer Engine maintains a one-firm-per-market territory lock and operates under the Origin Protocol — content engineering for permanent AI citation authority.
                </p>
              </div>
            </div>

            {/* CTA Block */}
            <div className="ae-cta-block not-prose mt-16">
              <h3>Claim Your PI Market Before a Competitor Does</h3>
              <p>
                ChatGPT, Perplexity, Claude, and Google AI Overviews cite 3 to 5 personal injury firms per query. We work with one firm per market. If your city is still open, we can build your AEO content engine, lock in your citation share, and keep direct competitors out for the term of our engagement. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Check your territory status now — one PI firm per market.</a>
              </p>
            </div>

            {/* Final CTA */}
            <section className="ae-final-cta not-prose mt-16">
              <div className="ae-final-cta-inner">
                <h2 className="text-2xl sm:text-3xl font-black mb-4 text-white font-headline uppercase tracking-tighter">
                  Run Your Free AI Blindspot Scan
                </h2>
                <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                  See exactly where ChatGPT, Perplexity, Claude, and Google AI Overviews cite your firm — and where they cite competitors instead. The scan is free. The territory is exclusive. One personal injury firm per market.
                </p>
                <a
                  href="https://theanswerengine.ai/blindspot"
                  className="inline-flex items-center justify-center gap-2 bg-[#F27D24] text-black font-black px-10 py-4 tracking-tighter hover:translate-y-[2px] transition-transform font-headline uppercase"
                >
                  Run Free Blindspot Scan →
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
    </>
  );
}
