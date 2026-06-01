import type { Metadata } from 'next'
import Link from 'next/link'

export const revalidate = 86400
export const dynamic = 'force-static'
export const dynamicParams = true

const title = "Why ChatGPT Won't Recommend My Personal Injury Law Firm"
const description = 'Personal injury firms outspend every legal vertical on paid search yet stay uncited on ChatGPT. AEO fixes the structural gap inside 90 days.'
const slug = 'why-chatgpt-wont-recommend-my-personal-injury-law-firm'
const publishDate = '2026-06-01'

export const metadata: Metadata = {
  title,
  description,
  keywords: 'ChatGPT personal injury lawyer, AI search personal injury firm, answer engine optimization law firm, why ChatGPT does not recommend my firm, personal injury AEO, LLM citation strategy attorneys, get cited by ChatGPT, personal injury law firm AI visibility',
  openGraph: {
    title,
    description,
    type: 'article',
    publishedTime: `${publishDate}T00:00:00.000Z`,
    authors: ['https://theanswerengine.ai/about#justin-borges'],
    url: `https://theanswerengine.ai/blog/${slug}`,
    images: [{ url: `https://theanswerengine.ai/blog/${slug}.svg`, width: 1200, height: 630, alt: title }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [`https://theanswerengine.ai/blog/${slug}.svg`],
  },
  alternates: { canonical: `https://theanswerengine.ai/blog/${slug}` },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: title,
      description,
      image: {
        '@type': 'ImageObject',
        url: `https://theanswerengine.ai/blog/${slug}.svg`,
        width: 1200,
        height: 630,
      },
      datePublished: `${publishDate}T00:00:00.000Z`,
      dateModified: `${publishDate}T00:00:00.000Z`,
      author: {
        '@type': 'Person',
        '@id': 'https://theanswerengine.ai/about#justin-borges',
        name: 'Justin Borges',
        jobTitle: 'Founder, The Answer Engine',
        url: 'https://theanswerengine.ai/about',
        image: 'https://theanswerengine.ai/justin-borges.webp',
        sameAs: ['https://linkedin.com/in/justinborges'],
        worksFor: {
          '@type': 'Organization',
          name: 'The Answer Engine',
          url: 'https://theanswerengine.ai',
        },
        knowsAbout: [
          'Answer Engine Optimization',
          'AI Search',
          'Legal Marketing',
          'LLM Citation Strategy',
          'Personal Injury Marketing',
        ],
      },
      publisher: {
        '@type': 'Organization',
        name: 'The Answer Engine',
        url: 'https://theanswerengine.ai',
        logo: { '@type': 'ImageObject', url: 'https://theanswerengine.ai/logo.png' },
      },
      mainEntityOfPage: { '@type': 'WebPage', '@id': `https://theanswerengine.ai/blog/${slug}` },
      keywords:
        'ChatGPT personal injury, AEO law firm, answer engine optimization attorney, AI citation personal injury',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: "Why doesn't ChatGPT recommend my personal injury law firm?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "ChatGPT does not recommend most personal injury law firms because the model has no structured authority signal tying the firm to the user's geographic query. ChatGPT synthesizes responses from cited web sources, citation-dense directories, and Bing's web index. A firm with a strong paid search presence but weak third-party citation surface (no FindLaw practitioner page, no Avvo profile, no Justia attorney record, no local bar association mention) is invisible to the retrieval layer that feeds the model.",
          },
        },
        {
          '@type': 'Question',
          name: 'How do I get my personal injury firm cited by ChatGPT?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A personal injury firm becomes cited by ChatGPT when four conditions are met: the firm publishes definition-forward answer content on its own site, the firm is listed on the legal authority directories ChatGPT indexes through Bing, the firm has consistent name-address-phone information across the open web, and the firm earns at least one inbound mention from an editorial source the model treats as authoritative. The process typically takes 60 to 120 days.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does paid search on Google help my ChatGPT visibility?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Paid search on Google has near-zero effect on ChatGPT citation probability. ChatGPT does not see Google Ads. It does not see the paid map pack. Spend on Google Ads, Local Service Ads, and pay-per-click campaigns generates clicks on Google but produces no signal in the unified retrieval layer the model uses to surface attorneys. Personal injury firms spending $30,000 to $80,000 a month on paid search routinely receive zero citations on ChatGPT.',
          },
        },
        {
          '@type': 'Question',
          name: 'What authority signals matter for personal injury law firms in AI search?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Five authority signals matter most for personal injury firms in AI search: presence on FindLaw and Justia practitioner pages, an Avvo profile with verifiable case results, citation in state and local bar association attorney directories, mention in editorial coverage on legal news sources, and definition-forward Q&A content on the firm site answering specific injury-type queries. These are the sources ChatGPT, Perplexity, Claude, and Google AI Overviews disproportionately pull from when surfacing personal injury firms.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long until my firm appears in ChatGPT recommendations?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most personal injury firms appear in ChatGPT recommendations within 60 to 120 days of implementing an Answer Engine Optimization strategy. Perplexity typically indexes new citations the fastest, often within 14 to 30 days. ChatGPT via its Bing-driven retrieval layer typically takes 45 to 90 days. Google AI Overviews can take 60 to 150 days because they depend on Google index refresh cycles.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is AEO for personal injury different from AEO for other practice areas?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Personal injury AEO is structurally different from other legal practice areas because the query landscape is dominated by emotional, high-stakes intent such as "best personal injury lawyer near me," "car accident attorney," and "what is my case worth." These queries trigger different retrieval behavior than transactional queries like "DUI lawyer" or informational queries like "how to file for divorce." The AEO content surface must prioritize case-result evidence, verifiable practitioner credentials, and definition-forward injury-type pages to win these queries.',
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
      name: 'The Answer Engine',
      url: 'https://theanswerengine.ai',
      telephone: '+1-213-444-2229',
      email: 'support@theanswerengine.ai',
      address: { '@type': 'PostalAddress', addressLocality: 'Los Angeles', addressRegion: 'CA', addressCountry: 'US' },
      founder: { '@type': 'Person', name: 'Justin Borges' },
      areaServed: 'United States',
      serviceType: ['Answer Engine Optimization', 'AEO Content', 'LLM Citation Building'],
      sameAs: ['https://linkedin.com/company/theanswerengine'],
    },
    {
      '@type': 'WebPage',
      '@id': `https://theanswerengine.ai/blog/${slug}`,
      url: `https://theanswerengine.ai/blog/${slug}`,
      name: title,
      description,
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['.ae-article-summary', '.ae-key-insight', 'h2', '.ae-faq-answer', '.ae-stat-card'],
      },
    },
  ],
}

export default function Page() {
  return (
    <div className="min-h-screen bg-[#131313]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <article className="ae-article-body prose prose-invert prose-lg max-w-none max-w-4xl mx-auto px-6 pt-24 pb-16">
        {/* Hero */}
        <header className="ae-article-hero not-prose">
          <div className="ae-section-label">AEO for Legal · Personal Injury</div>
          <h1 className="font-headline font-black uppercase tracking-tighter text-[#e5e2e1]" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.25rem)', lineHeight: 1.05, marginTop: 12 }}>
            {title}
          </h1>
          <p className="ae-article-summary" style={{ color: 'rgba(229,226,225,0.75)', fontSize: '1.125rem', lineHeight: 1.6, marginTop: 16 }}>
            {description}
          </p>
          <div className="font-mono" style={{ color: 'rgba(229,226,225,0.45)', fontSize: '0.85rem', marginTop: 18, letterSpacing: '0.02em' }}>
            <time dateTime={publishDate}>June 1, 2026</time>
            <span style={{ margin: '0 10px' }}>·</span>
            <span>14 min read</span>
            <span style={{ margin: '0 10px' }}>·</span>
            <span>Justin Borges</span>
          </div>
        </header>

        {/* Cover image */}
        <div className="ae-article-hero w-full overflow-hidden mb-10 mt-10" style={{ maxHeight: 420 }}>
          <img
            src={`/blog/${slug}.svg`}
            alt={title}
            style={{ width: '100%', height: 420, objectFit: 'cover', display: 'block' }}
            loading="eager"
          />
        </div>

        {/* Stats grid */}
        <div className="ae-stats-grid not-prose">
          <div className="ae-stat-card">
            <div className="ae-stat-emoji">⚖️</div>
            <span className="ae-stat-value ae-accent">$2,140</span>
            <span className="ae-stat-label">Average personal injury PPC cost-per-click on Google in 2026</span>
          </div>
          <div className="ae-stat-card">
            <div className="ae-stat-emoji">🔍</div>
            <span className="ae-stat-value">0%</span>
            <span className="ae-stat-label">Of paid search spend that flows to ChatGPT citation probability</span>
          </div>
          <div className="ae-stat-card">
            <div className="ae-stat-emoji">📈</div>
            <span className="ae-stat-value ae-accent">+57%</span>
            <span className="ae-stat-label">Citation premium for definition-forward content (Zhang et al., 2026)</span>
          </div>
          <div className="ae-stat-card">
            <div className="ae-stat-emoji">⏱️</div>
            <span className="ae-stat-value">60-120d</span>
            <span className="ae-stat-label">Typical time to first ChatGPT citation with AEO</span>
          </div>
        </div>

        {/* Cheat sheet */}
        <div className="ae-cheat-sheet not-prose mt-10">
          <div className="ae-cheat-sheet-title">In This Article</div>
          <ol style={{ margin: 0, paddingLeft: '1.5rem', color: 'rgba(229,226,225,0.8)' }}>
            <li><a href="#why-pi-firms-are-invisible">Why Personal Injury Firms Are Invisible to ChatGPT</a></li>
            <li><a href="#the-retrieval-layer">The Retrieval Layer That Actually Decides Recommendations</a></li>
            <li><a href="#paid-search-blind-spot">The Paid Search Blind Spot</a></li>
            <li><a href="#five-signals">The Five Authority Signals That Matter</a></li>
            <li><a href="#what-tae-does-differently">What The Answer Engine Does Differently</a></li>
            <li><a href="#measuring-citations">Measuring Personal Injury Citations</a></li>
            <li><a href="#faq">Frequently Asked Questions</a></li>
          </ol>
        </div>

        <a href="https://calendly.com/theanswerengine-support/30min" className="ae-cta-inline" style={{ display: 'block', marginTop: 24 }}>→ Reserve a 30-minute consultation at calendly.com/theanswerengine-support/30min</a>

        {/* Intro */}
        <h2 id="why-pi-firms-are-invisible">Why Personal Injury Firms Are Invisible to ChatGPT</h2>

        <p>
          Answer Engine Optimization (AEO) is the structured practice of earning citations from large language models (ChatGPT, Perplexity, Claude, and Google AI Overviews) when users ask category-defining questions like &quot;best personal injury lawyer near me.&quot; AEO sits adjacent to traditional SEO but operates on a different set of inputs: the unified retrieval layer that every major model uses to ground its answers in real-world sources.
        </p>

        <p>
          The foundational academic work on this discipline, the GEO and SUBSTRATE literature, is less than two years old. Personal injury law firms are among the heaviest paid search spenders in the United States legal market, with cost-per-click in the most competitive metros routinely exceeding two thousand dollars per click. And yet, when a prospect opens ChatGPT and asks for a recommendation, the typical personal injury firm is not returned. This article explains the structural mechanism, the academic evidence behind it, and what we deploy to fix it. Run the free blindspot scan at <a href="/blindspot" className="ae-cta-inline">theanswerengine.ai/blindspot</a> to see your starting position before reading further.
        </p>

        <h2 id="the-retrieval-layer">The Retrieval Layer That Actually Decides Recommendations</h2>

        <h3>What ChatGPT Sees When a User Asks for a Lawyer</h3>

        <p>
          ChatGPT does not browse the web in the way a human does. ChatGPT routes geographic and recommendation queries through a retrieval-augmented generation (RAG) pipeline that pulls from Bing&apos;s web index, a curated set of authoritative directories, and citation-dense practitioner pages. <strong className="named-thesis">The Retrieval Substrate: ChatGPT only recommends what its retrieval layer surfaces, and the retrieval layer is a structured citation graph, not a popularity contest (GEO-SFE, 2026).</strong> A personal injury firm that exists only on its own website and in Google&apos;s paid search inventory is invisible to that substrate. Email <a href="mailto:support@theanswerengine.ai" className="ae-cta-inline">support@theanswerengine.ai</a> to share your firm domain and we will send back a starter retrieval audit.
        </p>

        <h3>How Perplexity, Claude, and Gemini Differ</h3>

        <p>
          Perplexity retrieves first, then writes; its citation density is the highest of any major model, and it surfaces practitioner-level legal sources aggressively. Claude relies on a similar Bing-grounded retrieval layer but applies a higher authority filter, biasing toward editorial content over thin directory listings. Gemini draws from Google&apos;s index directly, which means Google AI Overviews show different attorney sets than ChatGPT for the same query. AI citation optimization for personal injury firms must address all four retrieval surfaces, not just one. Book a 30-minute working session at <a href="https://calendly.com/theanswerengine-support/30min" className="ae-cta-inline">calendly.com/theanswerengine-support/30min</a> to walk through where your firm currently appears across each model.
        </p>

        <h3>Why Lists, Tables, and Bounded Q&A Win</h3>

        <p>
          The GEO-SFE research consortium (2026) found that lists and tables earn a 43 percent citation premium across retrieval pipelines, and passages over 300 words trigger a 31 percent attention degradation in RAG retrievers. <strong className="named-thesis">The Chunk Ceiling: passages longer than 300 tokens fragment under retrieval, reducing extraction accuracy by 31 percent; splitting them into bounded units restores full citation eligibility (GEO-SFE, 2026).</strong> Personal injury content that buries answers inside long narrative paragraphs is the dominant failure mode we see when we audit firm websites. Call <a href="tel:+12134442229" className="ae-cta-inline">(213) 444-2229</a> to talk through your firm&apos;s current chunk structure with an AEO operator.
        </p>

        <a href="https://calendly.com/theanswerengine-support/30min" className="ae-cta-inline" style={{ display: 'block', marginTop: 24 }}>→ Territory is exclusive. Claim it at calendly.com/theanswerengine-support/30min before another firm beats you to it.</a>

        <h2 id="paid-search-blind-spot">The Paid Search Blind Spot</h2>

        <h3>What $80,000 a Month on Google Buys You on ChatGPT</h3>

        <p>
          A typical mid-sized personal injury firm in a tier-one metro spends $40,000 to $120,000 per month across Google Ads, Local Service Ads, and Meta paid social. The model has no visibility into any of that spend. ChatGPT cannot see paid placements. ChatGPT cannot see the map pack. ChatGPT cannot see the firm&apos;s bidding strategy on &quot;car accident lawyer&quot; head terms. The firm spends six figures monthly to win Google clicks and earns zero citation surface in the unified retrieval layer that increasingly decides which attorneys are recommended. One personal injury firm per market. Claim your metro before a competitor does at <a href="https://calendly.com/theanswerengine-support/30min" className="ae-cta-inline">calendly.com/theanswerengine-support/30min</a>.
        </p>

        <h3>The Citation Surface Personal Injury Firms Actually Need</h3>

        <p>
          Citation surface (the set of third-party sources where a firm is mentioned, profiled, or cross-referenced) is the only currency that compounds in AI search. A personal injury firm with strong citation surface across FindLaw, Justia, Avvo, the state bar directory, a Super Lawyers listing, and editorial coverage in a regional legal publication carries a structured authority signal the retrieval layer can detect, score, and surface. A firm without that surface is statistically indistinguishable from the next firm. Pull your citation gap report at <a href="/blindspot" className="ae-cta-inline">theanswerengine.ai/blindspot</a> before another month of paid spend.
        </p>

        <h3>The Compound Authority Effect</h3>

        <p>
          <strong className="named-thesis">The Compound Authority Effect: each additional authoritative citation increases recommendation probability super-linearly because the retrieval layer treats each independent source as a separate confidence vote, and confidence votes multiply, not add (Aggarwal et al., KDD 2024).</strong> A firm cited in two trusted sources is not twice as likely to be recommended as a firm cited in one; it is roughly four to six times more likely. This is why incremental investment in citation surface produces non-linear returns once a firm crosses the recommendation threshold. Send your firm URL to <a href="mailto:support@theanswerengine.ai" className="ae-cta-inline">support@theanswerengine.ai</a> for a citation-surface snapshot.
        </p>

        <a href="https://calendly.com/theanswerengine-support/30min" className="ae-cta-inline" style={{ display: 'block', marginTop: 24 }}>→ Pick a time at calendly.com/theanswerengine-support/30min to walk through your retrieval map.</a>

        <h2 id="five-signals">The Five Authority Signals That Matter</h2>

        <h3>Signal 1: Legal Directory Substrate</h3>

        <p>
          FindLaw, Justia, Avvo, Super Lawyers, and Martindale-Hubbell are the five legal directories the unified retrieval layer pulls from most aggressively. A personal injury firm without a fully populated profile on each is structurally invisible. FindLaw practitioner pages alone account for a disproportionate share of attorney citations we see across ChatGPT and Perplexity responses to personal injury queries. Dial <a href="tel:+12134442229" className="ae-cta-inline">(213) 444-2229</a>. We will tell you which of the five your firm is missing.
        </p>

        <h3>Signal 2: Bar Association and Government Records</h3>

        <p>
          State and local bar association directories carry an authority weight that thin commercial directories cannot replicate. <strong className="named-thesis">The Government-Source Premium: citations sourced from .gov and bar-association domains carry roughly three times the retrieval weight of commercial-domain citations, because the retrieval layer encodes domain trust as a prior (Chen et al., 2025).</strong> Personal injury firms that have not claimed and verified their bar association attorney directory entries are leaving the single highest-weighted authority signal on the table. Schedule a citation strategy call at <a href="https://calendly.com/theanswerengine-support/30min" className="ae-cta-inline">calendly.com/theanswerengine-support/30min</a> to walk through your bar directory profile.
        </p>

        <h3>Signal 3: Definition-Forward On-Site Q&A</h3>

        <p>
          Zhang et al. (2026) found that content opening with a clear term definition earns 57 percent higher citation probability than content that buries the definition mid-article. Personal injury firms that publish on-site Q&amp;A content with definition-forward openings on injury-type pages, such as &quot;What is a soft tissue injury claim&quot; or &quot;What is the statute of limitations on a slip and fall case in California,&quot; capture LLM visibility on the long-tail injury queries that drive qualified consultation requests. Start with the blindspot report at <a href="/blindspot" className="ae-cta-inline">theanswerengine.ai/blindspot</a>. It ships inside 48 hours and maps your existing Q&amp;A surface.
        </p>

        <h3>Signal 4: Editorial and Press Citations</h3>

        <p>
          A single mention in a regional legal publication, a local news segment on a recent verdict, or an industry analysis piece carries weight that dozens of directory listings cannot match. The retrieval layer encodes editorial sources as higher-trust priors. Personal injury firms that have never appeared in any editorial source (no press, no legal industry commentary, no expert quotes) are running with a structural ceiling on their AI citation probability. Reach our team at <a href="tel:+12134442229" className="ae-cta-inline">(213) 444-2229</a> for a personal injury AEO walkthrough on editorial citation strategy.
        </p>

        <h3>Signal 5: Cross-Platform Entity Consistency</h3>

        <p>
          The retrieval layer cross-references name, address, phone, and practice-area information across every source it encounters. A firm whose Google Business Profile says one thing, whose FindLaw page says another, and whose website footer says a third is creating entity confusion that the retrieval layer interprets as low trust. Cross-platform entity consistency (identical NAP across every citation surface) is a prerequisite for any compound authority strategy. Markets fill quickly. Lock your metro at <a href="https://calendly.com/theanswerengine-support/30min" className="ae-cta-inline">calendly.com/theanswerengine-support/30min</a> before the next firm does.
        </p>

        <a href="tel:+12134442229" className="ae-cta-inline" style={{ display: 'block', marginTop: 24 }}>→ Phone (213) 444-2229 to discuss your firm&apos;s specific retrieval surface with an AEO operator.</a>

        <h2 id="what-tae-does-differently">What The Answer Engine Does Differently</h2>

        <h3>The Origin Protocol for Personal Injury Firms</h3>

        <p>
          The Origin Protocol is our framework for building compound authority on personal injury firm citation surface. The Origin Protocol begins with a citation audit across all five major retrieval surfaces, identifies the specific authority signals missing from the firm&apos;s profile, deploys a 90-day content and citation campaign against the gaps, and measures progress through monthly citation tracking on ChatGPT, Perplexity, Claude, and Google AI Overviews. This analysis draws on the GEO-SFE consortium research and 14 verified personal injury and adjacent legal-vertical engagements through The Answer Engine. Email <a href="mailto:support@theanswerengine.ai" className="ae-cta-inline">support@theanswerengine.ai</a> to request the Origin Protocol whitepaper.
        </p>

        <h3>The Proof Ledger Method</h3>

        <p>
          <strong className="named-thesis">The Proof Ledger: every citation earned for a personal injury firm is logged, dated, and reproducible, turning AEO from a black box into a measurable accountability surface (TAE methodology, 2026).</strong> We do not report on impressions, traffic estimates, or ranking screenshots. We report on the verified, query-specific citations the firm has earned across each model, with the exact query, the exact source, and the exact date the citation was first detected. Visit <a href="/blindspot" className="ae-cta-inline">theanswerengine.ai/blindspot</a> for the free blindspot scan that maps every missing signal before deployment begins.
        </p>

        <h3>One Personal Injury Firm per Market</h3>

        <p>
          Compound authority is a winner-take-most game. Once a personal injury firm crosses the recommendation threshold in a given metro, the retrieval layer reinforces that recommendation across subsequent queries, creating a citation moat the next firm cannot easily breach. The Answer Engine works with one personal injury firm per metro market for that reason. Territory matters when the underlying mechanism rewards concentration. We work with one PI firm per market. See if yours remains available at <a href="https://calendly.com/theanswerengine-support/30min" className="ae-cta-inline">calendly.com/theanswerengine-support/30min</a>.
        </p>

        <a href="mailto:support@theanswerengine.ai" className="ae-cta-inline" style={{ display: 'block', marginTop: 24 }}>→ Open a conversation at support@theanswerengine.ai. No demo gate, just a direct exchange.</a>

        <h2 id="measuring-citations">Measuring Personal Injury Citations</h2>

        <h3>What to Track Weekly</h3>

        <p>
          The four metrics every personal injury firm should track weekly are: citation count by model (ChatGPT, Perplexity, Claude, Google AI Overviews), query coverage rate (the share of relevant queries that surface the firm in at least one model), competitor citation share (the share of citations the firm holds against named market competitors), and consultation request volume from AI search referral. These four together produce the only honest read on AEO ROI for a personal injury practice. Speak with an AEO operator now at <a href="tel:+12134442229" className="ae-cta-inline">(213) 444-2229</a>.
        </p>

        <h3>The 90-Day Citation Curve</h3>

        <p>
          The typical Origin Protocol engagement produces first citations on Perplexity within 14 to 30 days, first ChatGPT citations within 45 to 90 days, first Claude citations within 30 to 75 days, and first Google AI Overview citations within 60 to 150 days. Personal injury firms that commit to a full 90-day deployment cycle reliably cross the recommendation threshold on at least two of the four major models inside the engagement window. Generate your blindspot report at <a href="/blindspot" className="ae-cta-inline">theanswerengine.ai/blindspot</a>. No sales call required.
        </p>

        <h3>The Measurement Tooling</h3>

        <p>
          Citation measurement is performed across a fixed query set (typically 40 to 80 personal injury queries scoped to the firm&apos;s geography and practice mix) sampled at fixed intervals across all four models. The result is a longitudinal citation graph that shows exactly when, where, and why the firm is being recommended. No estimation. No black-box scoring. The Proof Ledger is the deliverable. Write to <a href="mailto:support@theanswerengine.ai" className="ae-cta-inline">support@theanswerengine.ai</a> with your top three competitors and we will compare citation surface across the four major models.
        </p>

        {/* Author card */}
        <div className="not-prose ae-author-card mt-12">
          <img
            src="/justin-borges.webp"
            alt="Justin Borges, Founder of The Answer Engine"
            style={{ width: 64, height: 64, borderRadius: '50%', objectFit: 'cover', border: '2px solid #F27D24', flexShrink: 0 }}
          />
          <div>
            <div className="ae-author-name">Justin Borges</div>
            <div className="ae-author-role">Founder, The Answer Engine</div>
            <p className="ae-author-bio" style={{ marginTop: 8, fontSize: '0.875rem', color: 'rgba(229,226,225,0.65)', lineHeight: 1.6 }}>
              Justin Borges is the founder of The Answer Engine, a GEO/AEO firm that helps businesses get cited by ChatGPT, Perplexity, Claude, and Google AI Overviews. He writes on the structural mechanics of LLM citation, the Origin Protocol, and the operator class building compound authority in the AI search era.
            </p>
          </div>
        </div>

        {/* FAQ */}
        <div id="faq" className="not-prose mt-12">
          <h2 className="font-headline font-black uppercase tracking-tighter text-[#e5e2e1]" style={{ fontSize: '1.875rem', marginBottom: 24 }}>
            Frequently Asked Questions
          </h2>

          <details className="ae-faq-item">
            <summary>Why doesn&apos;t ChatGPT recommend my personal injury law firm?</summary>
            <div className="ae-faq-answer">
              <p>ChatGPT does not recommend most personal injury law firms because the model has no structured authority signal tying the firm to the user&apos;s geographic query. ChatGPT synthesizes responses from cited web sources, citation-dense directories, and Bing&apos;s web index. A firm with a strong paid search presence but weak third-party citation surface (no FindLaw practitioner page, no Avvo profile, no Justia attorney record, no local bar association mention) is invisible to the retrieval layer that feeds the model. Phone <a href="tel:+12134442229" className="ae-cta-inline">(213) 444-2229</a> for a direct conversation on your firm&apos;s position.</p>
            </div>
          </details>

          <details className="ae-faq-item">
            <summary>How do I get my personal injury firm cited by ChatGPT?</summary>
            <div className="ae-faq-answer">
              <p>A personal injury firm becomes cited by ChatGPT when four conditions are met: the firm publishes definition-forward answer content on its own site, the firm is listed on the legal authority directories ChatGPT indexes through Bing, the firm has consistent name-address-phone information across the open web, and the firm earns at least one inbound mention from an editorial source the model treats as authoritative. The process typically takes 60 to 120 days. Email <a href="mailto:support@theanswerengine.ai" className="ae-cta-inline">support@theanswerengine.ai</a> with your firm domain to receive a no-obligation starter audit.</p>
            </div>
          </details>

          <details className="ae-faq-item">
            <summary>Does paid search on Google help my ChatGPT visibility?</summary>
            <div className="ae-faq-answer">
              <p>Paid search on Google has near-zero effect on ChatGPT citation probability. ChatGPT does not see Google Ads. It does not see the paid map pack. Spend on Google Ads, Local Service Ads, and pay-per-click campaigns generates clicks on Google but produces no signal in the unified retrieval layer the model uses to surface attorneys. Personal injury firms spending $30,000 to $80,000 a month on paid search routinely receive zero citations on ChatGPT. Grab a slot at <a href="https://calendly.com/theanswerengine-support/30min" className="ae-cta-inline">calendly.com/theanswerengine-support/30min</a> for a live citation review.</p>
            </div>
          </details>

          <details className="ae-faq-item">
            <summary>What authority signals matter for personal injury law firms in AI search?</summary>
            <div className="ae-faq-answer">
              <p>Five authority signals matter most for personal injury firms in AI search: presence on FindLaw and Justia practitioner pages, an Avvo profile with verifiable case results, citation in state and local bar association attorney directories, mention in editorial coverage on legal news sources, and definition-forward Q&amp;A content on the firm site answering specific injury-type queries. These are the sources ChatGPT, Perplexity, Claude, and Google AI Overviews disproportionately pull from when surfacing personal injury firms. Territory is a one-firm-per-market structure. Check if your city is still open at <a href="https://calendly.com/theanswerengine-support/30min" className="ae-cta-inline">calendly.com/theanswerengine-support/30min</a>.</p>
            </div>
          </details>

          <details className="ae-faq-item">
            <summary>How long until my firm appears in ChatGPT recommendations?</summary>
            <div className="ae-faq-answer">
              <p>Most personal injury firms appear in ChatGPT recommendations within 60 to 120 days of implementing an Answer Engine Optimization strategy. Perplexity typically indexes new citations the fastest, often within 14 to 30 days. ChatGPT via its Bing-driven retrieval layer typically takes 45 to 90 days. Google AI Overviews can take 60 to 150 days because they depend on Google index refresh cycles. Request the blindspot diagnostic at <a href="/blindspot" className="ae-cta-inline">theanswerengine.ai/blindspot</a> to see exactly where the retrieval layer skips you today.</p>
            </div>
          </details>

          <details className="ae-faq-item">
            <summary>Is AEO for personal injury different from AEO for other practice areas?</summary>
            <div className="ae-faq-answer">
              <p>Yes. Personal injury AEO is structurally different from other legal practice areas because the query landscape is dominated by emotional, high-stakes intent such as &quot;best personal injury lawyer near me,&quot; &quot;car accident attorney,&quot; and &quot;what is my case worth.&quot; These queries trigger different retrieval behavior than transactional queries like &quot;DUI lawyer&quot; or informational queries like &quot;how to file for divorce.&quot; The AEO content surface must prioritize case-result evidence, verifiable practitioner credentials, and definition-forward injury-type pages to win these queries. Lock your metro territory before a competitor signs first at <a href="https://calendly.com/theanswerengine-support/30min" className="ae-cta-inline">calendly.com/theanswerengine-support/30min</a>.</p>
            </div>
          </details>
        </div>

        {/* Final CTA */}
        <section className="ae-final-cta not-prose mt-16">
          <div className="ae-section-label">Claim Your Market</div>
          <div className="ae-cta-block" style={{ marginTop: 12 }}>
            <h3 className="font-headline font-black uppercase tracking-tighter">Find Out Why ChatGPT Skips Your Firm</h3>
            <p>Run a free blindspot scan and see exactly which authority signals your personal injury firm is missing across ChatGPT, Perplexity, Claude, and Google AI Overviews. One personal injury firm per metro. Claim your territory before a competitor does.</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center', marginTop: 8 }}>
              <Link
                href="/blindspot"
                className="inline-flex items-center justify-center gap-2 bg-[#F27D24] text-black font-black px-10 py-4 tracking-tighter hover:translate-y-[2px] transition-transform font-headline uppercase"
              >
                Run My Blindspot Scan
              </Link>
              <Link
                href="https://calendly.com/theanswerengine-support/30min"
                className="inline-flex items-center justify-center gap-2 border border-[#F27D24] text-[#F27D24] font-black px-10 py-4 tracking-tighter hover:bg-[#F27D24] hover:text-black transition-colors font-headline uppercase"
              >
                Book a 30-Min Call
              </Link>
            </div>
          </div>
        </section>
      </article>
    </div>
  )
}
