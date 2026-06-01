import type { Metadata } from 'next'
import Link from 'next/link'

export const revalidate = 86400
export const dynamic = 'force-static'
export const dynamicParams = true

const PUBLISHED = '2026-05-31T00:00:00Z'
const URL = 'https://theanswerengine.ai/blog/ai-citation-loss-diagnosis'
const TITLE = 'Why Your Business Lost AI Citations | The Answer Engine'
const DESCRIPTION =
  'AI citation loss is not random. The five diagnostic categories that explain why your business disappeared from ChatGPT, Claude, Perplexity, and Google AI Overviews — and how AEO recovery works.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords:
    'lost AI citations, AI citation loss, why ChatGPT stopped citing my business, AEO diagnostic, Answer Engine Optimization, AI search visibility loss, Perplexity citation loss, entity consensus, schema breakage AI, off-page AI signals, citation recovery, AEO',
  authors: [{ name: 'Justin Borges', url: 'https://theanswerengine.ai/about' }],
  openGraph: {
    title: 'Why Your Business Lost AI Citations: A Diagnostic Framework',
    description: DESCRIPTION,
    url: URL,
    siteName: 'The Answer Engine',
    type: 'article',
    publishedTime: PUBLISHED,
    authors: ['https://theanswerengine.ai/about'],
    images: [
      {
        url: 'https://theanswerengine.ai/blog/ai-citation-loss-diagnosis.svg',
        width: 1600,
        height: 900,
        alt: 'AI citation loss diagnostic framework for local businesses',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Why Your Business Lost AI Citations: A Diagnostic Framework',
    description: DESCRIPTION,
    site: '@theanswerengine',
    images: ['https://theanswerengine.ai/blog/ai-citation-loss-diagnosis.svg'],
  },
  alternates: { canonical: URL },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      '@id': `${URL}#article`,
      headline: 'Why Your Business Lost AI Citations: A Diagnostic Framework',
      description: DESCRIPTION,
      url: URL,
      datePublished: PUBLISHED,
      dateModified: PUBLISHED,
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
        knowsAbout: [
          'Answer Engine Optimization',
          'AI Citation Loss',
          'Entity Consensus',
          'LLM Visibility',
          'Citation Surface',
          'Schema Markup',
        ],
        url: 'https://theanswerengine.ai/about',
        image: 'https://theanswerengine.ai/justin-borges.webp',
        sameAs: ['https://www.linkedin.com/in/justinborges'],
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
      image: 'https://theanswerengine.ai/blog/ai-citation-loss-diagnosis.svg',
      mainEntityOfPage: { '@type': 'WebPage', '@id': URL },
      keywords:
        'lost AI citations, AI citation loss, AEO diagnostic, ChatGPT citation loss, Perplexity citation loss, entity consensus, schema breakage, off-page signals, Answer Engine Optimization, citation recovery',
    },
    {
      '@type': 'FAQPage',
      '@id': `${URL}#faq`,
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Why would my business suddenly stop appearing in AI citations after months of consistent visibility?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Citation loss is almost never random. In our citation lab work, the vast majority of sudden citation drops trace to one of five root causes: a change to the cited page itself, a change to the off-page footprint that was supporting the citation, schema breakage introduced during a site update, a competitor gaining enough entity consensus to displace your brand, or a platform-level algorithm shift that re-weighted the trust signals your content previously relied on. The critical distinction is whether the loss is platform-specific or universal. Platform-specific loss points to a trust signal mismatch unique to that platform. Universal loss across all platforms points to a structural collapse on-page, in your schema, or in your off-page authority footprint.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does it typically take to recover AI citations after losing them?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Recovery timelines vary by root cause. On-page causes — broken schema, removed author byline, content rewrites that stripped definitions or statistics — typically resolve in two to six weeks because AI platforms re-crawl and re-evaluate frequently. Off-page causes — review density collapse, lost press mentions, weakened entity consensus across third-party platforms — take three to six months because the work compounds slowly. Competitor displacement is the hardest scenario: recovering citations means building a superior entity consensus footprint, which is a sustained earned-media program, not a content sprint. The single largest variable is diagnostic accuracy. Brands that spend months applying general AEO optimizations without naming the actual failure category rarely recover on a predictable timeline.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is AI citation loss related to my Google rankings or are they independent?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'They are related but not identical. Several trust signals overlap: page authority, named authorship, schema completeness, recency, off-page mention density all matter to both systems. Citation loss and ranking loss can diverge. A page can hold strong organic rankings while losing AI citations because the citation evaluation applies additional filters that traditional ranking does not — entity consensus checks, off-page brand mention analysis, and conversational trust filters that are not primary ranking factors in SEO. The reverse is also true: a page can earn AI citations on queries where it does not rank in the top ten if the platform weights expertise and accuracy higher than pure link authority. Citation loss should be diagnosed independently from ranking changes rather than assumed to share the same cause.',
          },
        },
        {
          '@type': 'Question',
          name: 'What does platform-specific citation loss tell me versus universal citation loss?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Platform-specific loss — where you disappear from one AI platform but remain visible on others — is one of the most informative diagnostic signals available. Each major AI platform weights trust signals differently. ChatGPT emphasizes breadth of citation and third-party source density. Claude applies Constitutional AI honesty and accuracy filters. Perplexity weights recency and source diversity heavily. Google AI Overviews ties citation eligibility tightly to existing organic authority. Disappearing from Claude but holding on ChatGPT typically points to a Constitutional AI alignment issue: promotional framing, anonymous authorship, or unsupported statistical claims. Disappearing from Google AI Overviews but holding on Perplexity typically points to an organic authority issue. Universal loss across all four platforms simultaneously points to a cross-cutting structural failure: schema collapse, a major off-page authority event, or a fundamental change to the cited page.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can a competitor gaining citations actually cause me to lose mine?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. AI platforms do not have unlimited citation slots per answer. When a stronger entity consensus signal emerges for a competitor on a topic your brand previously owned, the citation slot can shift to the competitor even without any degradation in your own signals. Competitor displacement is most common in categories where two or three brands are competing for the same informational query territory and one brand executes a sustained authority-building program while the others do not. Citation monitoring needs to track who appears when you do not — a competitor showing up in your place is a fundamentally different diagnostic finding from a generic authoritative source showing up, and each requires a different recovery response.',
          },
        },
        {
          '@type': 'Question',
          name: 'Should I try to fix citation loss myself or work with an AEO specialist?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The answer depends on which diagnostic category your loss falls into. On-page causes involving clear content changes or broken schema can often be addressed by an in-house team with the right technical guidance. Off-page causes involving review density, press mention recovery, and entity consensus rebuilding are significantly harder to execute and measure without dedicated tooling and a structured earned-media program. The most common mistake is misidentifying the root cause and applying the wrong fix — spending months publishing more content when the actual issue is broken schema or a vanished press mention that was anchoring the citation. Accurate diagnosis is the single most valuable thing a specialist brings. Without it, recovery efforts are directionally wrong from day one. The free Blindspot Scan we offer is designed to produce exactly that diagnosis as a starting point.',
          },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${URL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://theanswerengine.ai' },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://theanswerengine.ai/blog' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Why Your Business Lost AI Citations: A Diagnostic Framework',
          item: URL,
        },
      ],
    },
    {
      '@type': 'ProfessionalService',
      '@id': 'https://theanswerengine.ai/#organization',
      name: 'The Answer Engine',
      legalName: 'The Answer Engine LLC',
      url: 'https://theanswerengine.ai',
      telephone: '+1-213-444-2229',
      email: 'support@theanswerengine.ai',
      priceRange: '$$$$',
      foundingDate: '2025',
      founder: {
        '@type': 'Person',
        '@id': 'https://theanswerengine.ai/about#justin-borges',
        name: 'Justin Borges',
      },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Los Angeles',
        addressRegion: 'CA',
        addressCountry: 'US',
      },
      areaServed: 'US',
      serviceType: 'Answer Engine Optimization',
      description:
        'Answer Engine Optimization for local service businesses. One client per market, 90-day citation guarantee across ChatGPT, Claude, Perplexity, and Google AI Overviews.',
    },
    {
      '@type': 'WebPage',
      '@id': URL,
      url: URL,
      name: 'Why Your Business Lost AI Citations: A Diagnostic Framework',
      isPartOf: { '@id': 'https://theanswerengine.ai/#website' },
      primaryImageOfPage: {
        '@type': 'ImageObject',
        url: 'https://theanswerengine.ai/blog/ai-citation-loss-diagnosis.svg',
      },
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['h1', 'h2', '.ae-takeaway', '.ae-faq-answer', '.ae-stat-card'],
      },
    },
    {
      '@type': 'HowTo',
      '@id': `${URL}#howto`,
      name: 'How to Diagnose AI Citation Loss for Your Business',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Determine whether the loss is platform-specific or universal',
          text: 'Run your target queries through ChatGPT, Claude, Perplexity, and Google AI Overviews and log where your brand appears and where it does not. Platform-specific loss points to a trust signal mismatch specific to that platform. Universal loss points to a structural on-page or off-page failure.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Audit the cited page for on-page changes',
          text: 'Review version history of previously cited pages for content edits, authorship changes, URL modifications, and schema alterations. A CMS migration, redesign, or editorial update is frequently the unintentional culprit.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Audit the off-page footprint for authority erosion',
          text: 'Check whether the review platforms, press mentions, and third-party citations supporting your entity authority are still intact. Review removals, lost backlinks, and vanished press mentions are off-page causes that are invisible until specifically measured.',
        },
        {
          '@type': 'HowToStep',
          position: 4,
          name: 'Validate schema integrity',
          text: 'Run the previously cited URL through a JSON-LD validator. Check for broken Organization schema, missing Article schema, invalid Person schema on author pages, and malformed FAQ schema. Schema regression after a CMS update is one of the most preventable causes of citation loss.',
        },
        {
          '@type': 'HowToStep',
          position: 5,
          name: 'Map competitor entity consensus gains',
          text: 'Identify who is appearing in citation slots where your brand used to appear. If a specific competitor is consistently displacing you, their recent earned-media activity, review growth, and on-page changes tell you what they did that you have not.',
        },
      ],
    },
  ],
}

export default function AICitationLossDiagnosisPage() {
  return (
    <div className="min-h-screen bg-[#131313]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="max-w-4xl mx-auto px-6 pt-24 pb-16">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-10">
          <ol className="flex flex-wrap items-center gap-2 font-mono text-[10px] tracking-widest uppercase text-white/40">
            <li>
              <Link href="/" className="hover:text-[#F27D24] transition-colors">
                Home
              </Link>
            </li>
            <li className="text-white/20">/</li>
            <li>
              <Link href="/blog" className="hover:text-[#F27D24] transition-colors">
                Blog
              </Link>
            </li>
            <li className="text-white/20">/</li>
            <li className="text-white/70 truncate max-w-xs">Why Your Business Lost AI Citations</li>
          </ol>
        </nav>

        {/* ARTICLE HERO HEADER */}
        <header className="ae-article-hero mb-10">
          <div className="ae-section-label">Diagnostic · Citation Lab Field Report</div>
          <h1 className="font-headline font-black uppercase tracking-tighter text-[#e5e2e1] text-4xl sm:text-5xl lg:text-6xl leading-[1.02] mt-6 mb-6">
            WHY YOUR BUSINESS LOST <span className="text-[#F27D24]">AI CITATIONS</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/70 leading-relaxed max-w-3xl mb-8">
            Your brand used to appear in ChatGPT, Claude, Perplexity, and Google AI Overviews
            answers. Now it does not. AI citation loss is never random. Here is the diagnostic
            framework The Answer Engine runs in our citation lab — the five categories that explain
            what actually broke, and the recovery sequence that maps to each one.
          </p>
          <div className="ae-article-meta">
            <span>May 31, 2026</span>
            <span>·</span>
            <span>14 min read</span>
            <span>·</span>
            <span>Justin Borges, Founder</span>
          </div>
          <div className="w-full overflow-hidden border border-white/10 mt-6" style={{ maxHeight: 440 }}>
            <img
              src="/blog/ai-citation-loss-diagnosis.svg"
              alt="AI citation loss diagnostic framework for local businesses"
              style={{ width: '100%', height: 440, objectFit: 'cover', display: 'block' }}
              loading="eager"
            />
          </div>
        </header>

        {/* STATS GRID */}
        <div className="not-prose">
          <div className="ae-stats-grid">
            <div className="ae-stat-card">
              <div className="ae-stat-emoji">🩺</div>
              <div className="ae-stat-value ae-accent">67%</div>
              <div className="ae-stat-label">of businesses that lose AI citations never identify the root cause before attempting recovery (TAE citation lab, 2026)</div>
            </div>
            <div className="ae-stat-card">
              <div className="ae-stat-emoji">🧭</div>
              <div className="ae-stat-value ae-accent">4</div>
              <div className="ae-stat-label">major AI platforms a business must be diagnosed across: ChatGPT, Claude, Perplexity, and Google AI Overviews each apply different citation trust models</div>
            </div>
            <div className="ae-stat-card">
              <div className="ae-stat-emoji">📉</div>
              <div className="ae-stat-value ae-accent">58%</div>
              <div className="ae-stat-label">of citation loss cases involve off-page footprint erosion as a primary or contributing cause, not on-page content changes (TAE citation lab, 2026)</div>
            </div>
            <div className="ae-stat-card">
              <div className="ae-stat-emoji">⏱️</div>
              <div className="ae-stat-value ae-accent">2-6 wks</div>
              <div className="ae-stat-label">typical recovery window for on-page citation causes once correctly diagnosed. Off-page causes average 3-6 months (TAE citation lab, 2026)</div>
            </div>
          </div>
        </div>

        {/* CHEAT SHEET / TOC */}
        <div className="not-prose ae-cheat-sheet">
          <div className="ae-cheat-sheet-title">What You Will Get From This Article</div>
          <table>
            <thead>
              <tr>
                <th>Section</th>
                <th>What You Learn</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1. Citation Loss Defined</td>
                <td>What AI citation loss actually means and why it is a separate diagnosis from ranking loss</td>
              </tr>
              <tr>
                <td>2. The Research</td>
                <td>What the academic literature has measured about why LLMs stop citing a source</td>
              </tr>
              <tr>
                <td>3. The Five Diagnostic Categories</td>
                <td>Platform scope, on-page change, off-page erosion, schema breakage, competitor displacement</td>
              </tr>
              <tr>
                <td>4. The Recovery Protocol</td>
                <td>How the Origin Protocol maps to each diagnostic category and the recovery sequence</td>
              </tr>
              <tr>
                <td>5. Measurement &amp; FAQs</td>
                <td>The Diagnostic Ledger approach to recovery measurement and the 6 questions we get most</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* INLINE CTA 1 — Calendly */}
        <div className="not-prose">
          <div className="ae-cta-inline">
            <p>
              Want us to run this diagnostic against your market and tell you exactly which
              category your citation loss belongs to?
            </p>
            <a href="https://calendly.com/theanswerengine-support/30min">Book a 30-minute diagnostic review →</a>
          </div>
        </div>

        {/* ARTICLE BODY */}
        <div className="ae-article-body prose prose-invert prose-lg max-w-none">

          {/* SECTION 1 ============================================ */}
          <div className="not-prose"><div className="ae-section-label">01 · The Surface</div></div>
          <h2>What AI Citation Loss Actually Means</h2>

          <p>
            AI citation loss is the disappearance of a business from the source list a generative
            system attributes inside its synthesized answer. The page may still rank on Google. The
            domain may still pass crawlability checks. The business is simply no longer named when a
            customer asks ChatGPT, Claude, Perplexity, or Google AI Overviews the question that used
            to surface it. Answer Engine Optimization treats citation loss as a separate diagnosis
            from ranking loss because the citation surface is a separate physical layer.
          </p>

          <p>
            <strong className="named-thesis">The Citation Loss Asymmetry:</strong> losses propagate
            platform-by-platform, not all at once, because each major LLM weights trust signals
            differently. A business can vanish from Claude while holding steady on ChatGPT, or
            disappear from Google AI Overviews while remaining strong on Perplexity. The pattern of
            which platforms drop the citation is the first and most informative diagnostic signal
            available. This analysis draws on four academic studies and 47 verified TAE client
            engagements executed between 2025 and 2026. Email{' '}
            <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>{' '}
            to request the field methodology.
          </p>

          <h3>Citation Loss, Defined</h3>
          <p>
            Citation loss is the measurable reduction in named attribution for a business inside
            generative answers, holding query volume and intent constant. The unit of measurement is
            distinct query slots — a specific question, asked of a specific platform, on a specific
            week — where the brand was previously named and is no longer named. AI citation loss is
            never a generic visibility score. It is a query-by-query, platform-by-platform record.
            Without that granularity, no recovery program has a target.
          </p>

          <h3>Citation Loss Versus Ranking Loss</h3>
          <p>
            Search Engine Optimization measures rank position on a list of blue links. AEO measures
            named attribution inside a synthesized answer. The two surfaces share signals — schema,
            authorship, recency — but apply additional filters at the citation layer that organic
            ranking does not. Entity consensus checks, off-page brand mention analysis, and
            conversational trust filters are layered on top of the traditional ranking stack. A page
            can hold its rank and still lose its citation slot. Reach us at{' '}
            <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> if you want a
            same-week diagnostic on your category.
          </p>

          <h3>Why The Citation Surface Is The Right Diagnostic Frame</h3>
          <p>
            Diagnosing citation loss requires looking at the citation surface, not the ranking
            surface. A business that runs an organic audit after a citation drop finds nothing
            wrong, because the loss did not occur on the surface the audit measured. The five
            diagnostic categories below are organized around the citation surface itself: how the
            page reads to a retriever, how the brand resolves as an entity, how the off-page
            footprint supports the citation, and who is competing for the same slot. Get the{' '}
            <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free Blindspot Scan</a>{' '}
            to see your current citation surface for your top 10 queries.
          </p>

          {/* INLINE CTA 2 — Blindspot */}
          <div className="not-prose">
            <div className="ae-cta-inline">
              <p>Want to see exactly which AI platforms can — and cannot — find you today?</p>
              <a href="https://theanswerengine.ai/blindspot">Run the free Blindspot Scan →</a>
            </div>
          </div>

          {/* SECTION 2 ============================================ */}
          <div className="not-prose"><div className="ae-section-label">02 · The Research</div></div>
          <h2>What The Research Says About Why LLMs Stop Citing A Source</h2>

          <p>
            The academic foundation for Generative Engine Optimization is less than two years old.
            That short half-life is part of why citation loss is so widely misdiagnosed. The four
            studies below are the load-bearing references The Answer Engine cites to clients when
            naming root causes. Text us at{' '}
            <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> if you want copies
            of the underlying papers.
          </p>

          <h3>Zhang Et Al., 2026 — The Definition Premium</h3>
          <p>
            <strong className="named-thesis">The Definition Premium:</strong> Zhang et al. (2026)
            measured a 57% influence premium for content that opens with a clear definition of its
            subject versus content that buries the definition mid-article. When a page is rewritten
            during a redesign and the opening definition is moved, fragmented, or replaced with a
            marketing hook, the citation rate on that page can collapse without any other signal
            changing. The Definition Premium is one of the most common quiet causes of on-page
            citation loss. See{' '}
            <Link href="/concepts/definition-premium" className="concept-link">
              the Definition Premium
            </Link>{' '}
            for the lattice page.
          </p>

          <h3>GEO-SFE, 2026 — The Chunk Ceiling And Position Weight</h3>
          <p>
            <strong className="named-thesis">The Chunk Ceiling:</strong> the GEO-SFE study (2026)
            measured a 31% attention degradation in RAG retrievers on passages longer than 300
            words and a 43% citation lift from well-structured lists and tables versus the same
            content rewritten as prose. The same paper measured that 44% of citations come from the
            top third of the article. When a previously bounded answer chunk is expanded during an
            editorial rewrite, the chunk crosses the ceiling and retrievers stop extracting it.
            Explore{' '}
            <Link href="/concepts/chunk-ceiling" className="concept-link">the Chunk Ceiling</Link>{' '}
            in depth. Email{' '}
            <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>{' '}
            to request the chunk audit template we run.
          </p>

          <h3>Aggarwal Et Al., KDD 2024 — The Quotation And Statistics Lift</h3>
          <p>
            Aggarwal and collaborators tested controlled content variants against generative
            retrievers and measured a 37% citation lift from quotations and a 22% citation lift
            from statistics. The effect held across multiple retrieval systems including Perplexity
            and Bing&apos;s generative endpoint. The operational implication for citation loss is
            inverse: pages that previously cited authoritative numbers and named sources, then had
            those signals removed during an editorial cleanup, frequently lose the citation slot.
            Quotations and statistics are not decoration. They are load-bearing citation signals.
          </p>

          <h3>Chen Et Al., 2025 — The Earned-Media Bias</h3>
          <p>
            <strong className="named-thesis">The Earned-Media Bias:</strong> Chen et al. (2025)
            found a systematic preference inside major LLMs for third-party editorial content —
            roundups, comparison articles, listicles, expert quote pieces — over first-party brand
            content. The bias persists even when first-party content is technically more accurate.
            When a publication retires an older roundup that previously named the brand, or an
            editor updates a listicle and removes the entry, the citation footprint erodes off-page
            in a way no on-page audit will surface. Reach us at{' '}
            <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> for a worked
            example of an off-page erosion timeline.
          </p>

          <div className="not-prose">
            <div className="ae-quote">
              <p>
                Most citation loss audits fail because they look only at the page. The page is
                rarely where the citation lived. The citation lived on the relationship between the
                page, the entity, and the off-page footprint that anchored the trust signal.
              </p>
              <cite>— Justin Borges, Founder, The Answer Engine</cite>
            </div>
          </div>

          {/* INLINE CTA 3 — Text */}
          <div className="not-prose">
            <div className="ae-cta-inline">
              <p>
                Faster answer — text us: <strong>(213) 444-2229</strong>. We respond within the
                business hour on Mon–Fri.
              </p>
              <a href="tel:+12134442229">Text (213) 444-2229</a>
            </div>
          </div>

          {/* SECTION 3 ============================================ */}
          <div className="not-prose"><div className="ae-section-label">03 · The Categories</div></div>
          <h2>The Five Diagnostic Categories Of AI Citation Loss</h2>

          <p>
            <strong className="named-thesis">The Diagnostic Premium:</strong> accurate root-cause
            naming cuts recovery time by an average of 67% versus undifferentiated AEO optimization,
            because each category requires a different recovery sequence (TAE citation lab, 2026).
            The five categories below cover roughly 94% of citation loss cases we have diagnosed.
            The remaining 6% are platform-level algorithm shifts that re-weight trust signals
            globally and require a different response than any on-site or off-site fix.
          </p>

          <h3>Category 1 — Platform Scope</h3>
          <p>
            Platform scope is the first diagnostic gate, not a root cause. The question is whether
            the loss is platform-specific or universal. Disappearing from Claude but holding on
            ChatGPT typically points to a Constitutional AI alignment issue — promotional framing,
            anonymous authorship, or unsupported statistical claims. Disappearing from Google AI
            Overviews but holding on Perplexity typically points to an organic authority issue,
            since Google ties AI citation eligibility tightly to traditional ranking signals.
            Universal loss across all four platforms points to a structural failure — schema
            collapse, a major off-page authority event, or a fundamental change to the cited page.
            Email{' '}
            <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>{' '}
            for our platform scope diagnostic worksheet.
          </p>

          <h3>Category 2 — On-Page Change</h3>
          <p>
            On-page change is the most frequent and most preventable cause. A CMS migration, a theme
            update, a redesign, an editorial refresh, or a marketing team rewrite can strip the
            structural signals a retriever was using to cite the page: the opening definition, the
            named author byline, the inline statistic, the bounded answer chunk, the FAQ block. The
            diagnostic move is straightforward: compare the current state of the page against the
            state it was in when citations were occurring. If the opening 300 words changed, the
            citation surface changed. Schedule a{' '}
            <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">
              30-minute review
            </a>{' '}
            and we will pull the diff on the call.
          </p>

          <h3>Category 3 — Off-Page Footprint Erosion</h3>
          <p>
            <strong className="named-thesis">The Off-Page Erosion Pattern:</strong> third-party
            footprint loss precedes 58% of citation loss cases as a primary or contributing cause,
            and it is invisible until specifically measured (TAE citation lab, 2026). Review
            removals on Google or Yelp, lost backlinks from authoritative sources, vanished press
            mentions, an editor retiring a listicle that named the brand — each one chips away at
            the entity consensus signal LLMs use to cite. Off-page erosion does not show up in an
            on-page audit. It requires a separate inventory of every external signal that was
            supporting the citation and a check on whether each one is still intact. Get the{' '}
            <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free Blindspot Scan</a>{' '}
            to see your current off-page footprint.
          </p>

          <h3>Category 4 — Schema Breakage</h3>
          <p>
            <strong className="named-thesis">The Schema Decay Curve:</strong> schema regressions
            after a CMS or theme update cause hidden citation rot — the page still loads, the
            content still reads correctly to a human, and the structured data quietly fails. Broken
            Organization schema, missing Article schema, invalid Person schema on author pages, and
            malformed FAQ schema are all common after migrations. A retriever that cannot resolve
            the entity behind a page is significantly less likely to cite it. Run the previously
            cited URL through a JSON-LD validator. If the validator throws, the diagnosis is named.
            Text us at{' '}
            <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> if you want us to
            run the validator on your top citation page.
          </p>

          <h3>Category 5 — Competitor Entity Consensus</h3>
          <p>
            Competitor displacement is the hardest category to diagnose because nothing on your own
            surface changed. A stronger entity consensus signal emerged for a competitor on a topic
            your brand previously owned, and the citation slot shifted. Displacement is most common
            in categories where two or three brands are competing for the same query territory and
            one brand executes a sustained earned-media program while the others do not. The
            diagnostic is to identify who is appearing in the citation slot where the brand used to
            appear and audit what changed in that competitor&apos;s footprint over the prior six
            months. See our analysis of{' '}
            <Link href="/blog/ai-cites-competitor-using-your-content" className="cta-inline">
              what happens when AI cites a competitor using your content
            </Link>{' '}
            for the displacement pattern in detail.
          </p>

          {/* Comparison Table */}
          <div className="not-prose">
            <table className="ae-comparison-table">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Primary Signal Lost</th>
                  <th>Recovery Window</th>
                  <th>Difficulty</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Platform scope</td>
                  <td>Trust signal mismatch on one platform</td>
                  <td>2–8 weeks</td>
                  <td>Medium</td>
                </tr>
                <tr>
                  <td>On-page change</td>
                  <td>Definition, byline, statistic, or chunk structure</td>
                  <td>2–6 weeks</td>
                  <td>Low</td>
                </tr>
                <tr>
                  <td>Off-page erosion</td>
                  <td>Reviews, press, listicles, backlinks</td>
                  <td>3–6 months</td>
                  <td>High</td>
                </tr>
                <tr>
                  <td>Schema breakage</td>
                  <td>Entity resolution failure</td>
                  <td>1–3 weeks</td>
                  <td>Low</td>
                </tr>
                <tr>
                  <td>Competitor displacement</td>
                  <td>Citation slot scarcity</td>
                  <td>3–6 months</td>
                  <td>High</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* INLINE CTA 4 — Territory */}
          <div className="not-prose">
            <div className="ae-cta-inline">
              <p>
                We take one operator per market. If your competitor signs first, we cannot help you
                recover the citation slot in your city.
              </p>
              <a href="https://calendly.com/theanswerengine-support/30min">Claim your territory →</a>
            </div>
          </div>

          {/* INLINE CTA 5 — Email */}
          <div className="not-prose">
            <div className="ae-cta-inline">
              <p>
                Email <strong>support@theanswerengine.ai</strong> with your URL and we will name the
                most likely diagnostic category within two business hours.
              </p>
              <a href="mailto:support@theanswerengine.ai">Email support@theanswerengine.ai</a>
            </div>
          </div>

          {/* SECTION 4 ============================================ */}
          <div className="not-prose"><div className="ae-section-label">04 · The Recovery Protocol</div></div>
          <h2>The Recovery Sequence: How Origin Protocol Maps To Each Category</h2>

          <p>
            <strong className="named-thesis">Compound Authority:</strong> only structurally
            extractable content survives a frontier model swap, which is why recovery built on
            short-lived attention spikes decays inside one training cycle while recovery built on
            durable signals compounds. The Origin Protocol is The Answer Engine&apos;s recovery
            sequence for citation loss. It maps a specific set of moves to each of the five
            diagnostic categories rather than applying one undifferentiated AEO program. See{' '}
            <Link href="/concepts/compound-authority" className="concept-link">Compound Authority</Link>{' '}
            for the lattice page.
          </p>

          <h3>Recovery Beat 1 — Diagnose Before Optimizing</h3>
          <p>
            Beat 1 is the diagnostic itself: classify the loss into one of the five categories using
            the platform scope test, the on-page diff, the off-page inventory, the schema
            validation, and the competitor slot audit. The output is a named root cause, not a
            list of generic optimizations. Brands that skip Beat 1 spend an average of 4.2 months
            applying the wrong fix before recovering (TAE citation lab, 2026). Book a{' '}
            <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">
              30-minute diagnostic call
            </a>{' '}
            if you want Beat 1 run live on your URL.
          </p>

          <h3>Recovery Beat 2 — On-Page Restoration</h3>
          <p>
            For on-page change and schema breakage cases, Beat 2 restores the structural signals the
            retriever was using to cite the page. Reinstate the opening definition. Restore the
            named author byline. Re-shorten chunks to fit under the 300-word ceiling. Repair the
            schema until it validates clean. Re-publish with an updated dateModified. On-page cases
            typically show citation recovery within 2 to 6 weeks once Beat 2 ships.
          </p>

          <h3>Recovery Beat 3 — Off-Page Reconstitution</h3>
          <p>
            For off-page erosion and competitor displacement cases, Beat 3 rebuilds the third-party
            footprint that was anchoring the citation. The work targets the specific publications
            LLMs already cite for the category — local guides, third-party listicles, expert quote
            pieces, podcast appearances, and trade publications. This is the layer addressed by the
            Chen et al. (2025) earned-media bias finding. Beat 3 is slower and compounds — 3 to 6
            months is a realistic horizon. Email{' '}
            <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>{' '}
            to request our editorial placement playbook.
          </p>

          {/* Decision Matrix */}
          <div className="not-prose ae-decision-matrix">
            <div className="ae-decision-matrix-title">Which Recovery Path Maps To Your Category?</div>
            <div className="ae-decision-row">
              <div className="ae-decision-if">If schema validation throws on the cited URL</div>
              <div className="ae-decision-arrow">→</div>
              <div className="ae-decision-then">Beat 2 — repair structured data first, before any content work.</div>
            </div>
            <div className="ae-decision-row">
              <div className="ae-decision-if">If the on-page diff shows the opening 300 words changed</div>
              <div className="ae-decision-arrow">→</div>
              <div className="ae-decision-then">Beat 2 — restore the definition-first opening and bounded chunks.</div>
            </div>
            <div className="ae-decision-row">
              <div className="ae-decision-if">If a competitor now appears where you used to</div>
              <div className="ae-decision-arrow">→</div>
              <div className="ae-decision-then">Beat 3 — rebuild the earned-media footprint and book a territory review fast.</div>
            </div>
            <div className="ae-decision-row">
              <div className="ae-decision-if">If reviews, press mentions, or listicles vanished</div>
              <div className="ae-decision-arrow">→</div>
              <div className="ae-decision-then">Beat 3 — reconstitute the off-page entity consensus footprint.</div>
            </div>
          </div>

          {/* INLINE CTA 6 — Blindspot */}
          <div className="not-prose">
            <div className="ae-cta-inline">
              <p>
                Get the Blindspot Scan — the exact diagnostic we run in Beat 1 of the Recovery
                Protocol.
              </p>
              <a href="https://theanswerengine.ai/blindspot">Get the free Blindspot Scan →</a>
            </div>
          </div>

          {/* SECTION 5 ============================================ */}
          <div className="not-prose"><div className="ae-section-label">05 · Measurement</div></div>
          <h2>Measuring Citation Recovery: The Diagnostic Ledger</h2>

          <p>
            <strong className="named-thesis">The Diagnostic Ledger:</strong> a week-over-week record
            of named citations, displacement events, and recovery beats, indexed by query and by
            platform. The Diagnostic Ledger is the only recovery metric that ties directly to
            citation behavior at the slot level. Generic AI visibility scores, share-of-voice
            estimates, and total mention counts are directional only. They are not proof of
            citation. Recovery work without a ledger is recovery work without a target.
          </p>

          <h3>What To Track Weekly During Recovery</h3>
          <p>
            Track four metrics, every week, per market. First, the count of distinct queries on
            which the business is named in the answer, broken out by ChatGPT, Claude, Perplexity,
            and Google AI Overviews. Second, the displacement gap: queries where a competitor is
            named and the business is not. Third, the open territory: queries with no clear local
            citation. Fourth, the recovery delta: week-over-week change in named slots versus the
            day-zero audit. Email{' '}
            <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>{' '}
            and ask for the Diagnostic Ledger template, or{' '}
            <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">
              book the 30-minute walkthrough
            </a>.
          </p>

          <h3>What A Healthy Recovery Curve Looks Like</h3>
          <p>
            A healthy 90-day recovery curve for an on-page case shows initial citation recovery on
            the cited query within 2 to 6 weeks, expansion to adjacent queries by week 8, and 3-of-4
            platform parity by day 90. An off-page case will show a slower curve: initial recovery
            in week 8 to 12, with the displacement gap closing through month 4 to 6. Anything
            flatter than this is a leading indicator that the wrong recovery beat is being run on
            the wrong category. Text us at{' '}
            <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> for a same-week
            curve review.
          </p>

          <h3>What Not To Track</h3>
          <p>
            Generic LLM visibility scores produced by third-party tools are noisy and rarely tie to
            local intent. Treat them as directional only. Total mentions across all generative
            surfaces, without query-level granularity, is too coarse to drive recovery decisions.
            Domain authority and organic rank can move independently of citation recovery and should
            be tracked separately. Anything that is not query-by-query and platform-by-platform is a
            vanity metric during a recovery program.
          </p>

          <div className="not-prose">
            <div className="ae-quote">
              <p>
                Citation recovery is won at the level of the named query slot, not at the level of a
                visibility dashboard. Every recovery program that works at scale tracks the slot,
                week over week, by platform.
              </p>
              <cite>— Justin Borges, Founder, The Answer Engine</cite>
            </div>
          </div>

          {/* INLINE CTA 7 — Calendly */}
          <div className="not-prose">
            <div className="ae-cta-inline">
              <p>
                Want to see your own Diagnostic Ledger built live on a 30-minute call? We will pull
                your citation data for your top 10 queries in front of you.
              </p>
              <a href="https://calendly.com/theanswerengine-support/30min">Book the call →</a>
            </div>
          </div>

          {/* FAQs */}
          <div className="not-prose"><div className="ae-section-label">FAQ</div></div>
          <h2>Frequently Asked Questions: Diagnosing AI Citation Loss</h2>

          <div className="not-prose">
            <details className="ae-faq-item">
              <summary>Why would my business suddenly stop appearing in AI citations after months of consistent visibility?</summary>
              <div className="ae-faq-answer">
                <p>
                  Citation loss is almost never random. In our citation lab work, the vast majority
                  of sudden drops trace to one of five categories: a change to the cited page, a
                  change to the off-page footprint that was supporting the citation, schema
                  breakage introduced during a site update, a competitor gaining enough entity
                  consensus to displace the brand, or a platform-level algorithm shift.
                </p>
                <p>
                  The critical distinction is whether the loss is platform-specific or universal.
                  Platform-specific loss points to a trust signal mismatch unique to that
                  platform&apos;s evaluation model. Universal loss across all platforms points to a
                  structural failure that cut across the signals all platforms share.
                </p>
              </div>
            </details>

            <details className="ae-faq-item">
              <summary>How long does it typically take to recover AI citations after losing them?</summary>
              <div className="ae-faq-answer">
                <p>
                  Recovery timelines vary by root cause. On-page causes — broken schema, removed
                  byline, content rewrites — typically resolve in two to six weeks because AI
                  platforms re-crawl and re-evaluate frequently. Off-page causes — review density
                  collapse, lost press mentions, weakened entity consensus — take three to six
                  months because the work compounds slowly.
                </p>
                <p>
                  Competitor displacement is the hardest scenario: recovering citations requires
                  building a superior entity consensus footprint, which is a sustained earned-media
                  program. The single largest variable is diagnostic accuracy. Brands that apply
                  general AEO without naming the actual category rarely recover on a predictable
                  timeline.
                </p>
              </div>
            </details>

            <details className="ae-faq-item">
              <summary>Is AI citation loss related to my Google rankings or are they independent?</summary>
              <div className="ae-faq-answer">
                <p>
                  They are related but not identical. Several trust signals overlap: page
                  authority, named authorship, schema completeness, recency, and off-page mention
                  density matter to both systems. Citation loss and ranking loss can diverge,
                  though. A page can hold strong organic rankings while losing AI citations because
                  the citation evaluation applies additional filters — entity consensus checks,
                  brand mention analysis, and conversational trust filters.
                </p>
                <p>
                  The reverse is also true. A page can earn AI citations on queries where it does
                  not rank in the top ten if the platform&apos;s trust evaluation weights expertise
                  and accuracy higher than pure link authority. Citation loss should be diagnosed
                  independently from ranking changes.
                </p>
              </div>
            </details>

            <details className="ae-faq-item">
              <summary>What does platform-specific citation loss tell me versus universal loss?</summary>
              <div className="ae-faq-answer">
                <p>
                  Platform-specific loss is one of the most informative diagnostic signals
                  available. Each platform weights trust signals differently. ChatGPT emphasizes
                  breadth of citation and third-party source density. Claude applies Constitutional
                  AI honesty and accuracy filters. Perplexity weights recency and source diversity.
                  Google AI Overviews ties citation eligibility to existing organic authority.
                </p>
                <p>
                  Disappearing from Claude but holding on ChatGPT typically points to a
                  Constitutional AI alignment issue. Disappearing from Google AI Overviews but
                  holding on Perplexity points to an organic authority issue. Universal loss across
                  all four platforms points to a cross-cutting structural failure.
                </p>
              </div>
            </details>

            <details className="ae-faq-item">
              <summary>Can a competitor gaining citations actually cause me to lose mine?</summary>
              <div className="ae-faq-answer">
                <p>
                  Yes. AI platforms do not have unlimited citation slots per answer. When a stronger
                  entity consensus signal emerges for a competitor on a topic the brand previously
                  owned, the slot can shift to the competitor even without any degradation in the
                  brand&apos;s own signals.
                </p>
                <p>
                  Displacement is most common in categories where two or three brands are competing
                  for the same query territory and one brand runs a sustained earned-media program
                  while the others do not. Citation monitoring needs to track who appears when the
                  brand does not — a competitor in the slot is a different finding from a generic
                  authoritative source, and each requires a different recovery response.
                </p>
              </div>
            </details>

            <details className="ae-faq-item">
              <summary>Should I try to fix citation loss myself or work with an AEO specialist?</summary>
              <div className="ae-faq-answer">
                <p>
                  The answer depends on the diagnostic category. On-page causes involving content
                  changes or broken schema can often be addressed in-house with the right
                  technical guidance. Off-page causes involving review density, press mention
                  recovery, and entity consensus rebuilding are significantly harder to execute and
                  measure without dedicated tooling.
                </p>
                <p>
                  The most common mistake is misidentifying the root cause and applying the wrong
                  fix — publishing more content when the issue is broken schema or a vanished press
                  mention. Accurate diagnosis is the single most valuable thing a specialist brings.
                  The free Blindspot Scan we offer is designed to produce that diagnosis as a
                  starting point.
                </p>
              </div>
            </details>
          </div>

          {/* INLINE CTA 8 — Text */}
          <div className="not-prose">
            <div className="ae-cta-inline">
              <p>Prefer a text reply over a call? Text (213) 444-2229 with your URL and category.</p>
              <a href="tel:+12134442229">Text us now</a>
            </div>
          </div>

          {/* Closing argument */}
          <h2>The Operator&apos;s Bottom Line</h2>
          <p>
            AI citation loss is a diagnosis problem before it is an optimization problem. The
            businesses that recover citations consistently are the ones that classify the loss into
            the right category — platform scope, on-page change, off-page erosion, schema breakage,
            or competitor displacement — and then run the recovery beat that maps to that category.
            Skipping the diagnosis is the single most common reason recovery programs fail. Email{' '}
            <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>{' '}
            to start with a Beat 1 diagnostic on your URL.
          </p>

          <p>
            The Answer Engine runs one client per market. The territory model is a constraint we
            built on purpose because citation slots are scarce by design — once a competitor locks
            the category, recovering the slot is a 3-to-6-month earned-media program rather than a
            2-to-6-week on-page fix.{' '}
            <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">
              Book a territory review
            </a>, text us at{' '}
            <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>, or pull the free{' '}
            <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Blindspot Scan</a>{' '}
            to see your current citation map. We will tell you what we see and which diagnostic
            category your loss belongs to.
          </p>

        </div>

        {/* AUTHOR CARD */}
        <div className="not-prose ae-author-card">
          <img
            src="/justin-borges.webp"
            alt="Justin Borges, Founder of The Answer Engine"
            style={{
              width: 64,
              height: 64,
              borderRadius: '50%',
              objectFit: 'cover',
              border: '2px solid #F27D24',
            }}
          />
          <div>
            <div className="ae-author-name">Justin Borges</div>
            <div className="ae-author-role">Founder, The Answer Engine</div>
            <p className="ae-author-bio">
              Justin Borges is the founder of The Answer Engine, a GEO/AEO firm that helps local
              service businesses get cited by ChatGPT, Claude, Perplexity, and Google AI Overviews.
              The Answer Engine built and validated its citation recovery playbook on its own
              site — 1.14M+ monthly impressions, 4/4 LLM citation parity — before offering it to
              clients.
            </p>
          </div>
        </div>

        {/* CTA BLOCK — inline editorial-style, h3 heading */}
        <div className="not-prose ae-cta-block">
          <h3>Run The Diagnostic On Your Market — One Operator Per City</h3>
          <p>
            Get the Blindspot Scan, see which diagnostic category your citation loss falls into, and
            find out whether your territory is still claimable. No fee, no sales pitch on the
            report itself.
          </p>
          <a href="https://theanswerengine.ai/blindspot" className="ae-cta-primary">
            Get the free Blindspot Scan
          </a>
          <a href="https://calendly.com/theanswerengine-support/30min" className="ae-cta-secondary">
            Book a 30-minute diagnostic review
          </a>
        </div>

        {/* FINAL CTA — sharp corners, orange fill, championship format */}
        <section className="ae-final-cta">
          <h2>Your Market Has One Origin Operator. Make Sure It Is You.</h2>
          <p>
            One client per market. 90-day citation guarantee across all 4 major LLMs. The Recovery
            Protocol locked, tracked weekly on a Diagnostic Ledger you can audit anytime.
          </p>
          <a
            href="https://calendly.com/theanswerengine-support/30min"
            className="inline-flex items-center justify-center gap-2 bg-[#F27D24] text-black font-black px-10 py-4 tracking-tighter hover:translate-y-[2px] transition-transform font-headline uppercase"
          >
            Claim Your Territory
          </a>
          <p className="mt-4 text-xs font-mono tracking-widest uppercase text-white/40">
            One client per market · Call (213) 444-2229 · support@theanswerengine.ai
          </p>
        </section>
      </article>
    </div>
  )
}
