import type { Metadata } from 'next'
import Link from 'next/link'

export const dynamicParams = true

const title = 'How to Get Your Business Recommended by ChatGPT (Case Study: 89% Growth, 5 Deals Closed)'
const description = 'The verified AEO case study: 89% click growth, 2.9M impressions, 5 closed deals in 4 months. The exact citation-engineering playbook that got one business recommended by ChatGPT.'
const slug = 'get-business-recommended-by-chatgpt'
const publishDate = '2026-03-04'
const modifiedDate = '2026-05-31'

export const metadata: Metadata = {
  title: 'How to Get Recommended by ChatGPT (Case Study) | The Answer Engine',
  description,
  keywords: 'how to get business recommended by ChatGPT, get recommended by AI, ChatGPT business recommendations, AI search optimization case study, how to show up in ChatGPT, answer engine optimization case study, AEO case study, ChatGPT SEO',
  openGraph: {
    title,
    description,
    type: 'article',
    publishedTime: publishDate,
    modifiedTime: modifiedDate,
    authors: ['https://theanswerengine.ai/about#justin-borges'],
    url: `https://theanswerengine.ai/blog/${slug}`,
    siteName: 'The Answer Engine',
    images: [{ url: `https://theanswerengine.ai/blog/${slug}.webp`, width: 1200, height: 630, alt: title }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    site: '@theanswerengine',
    images: [`https://theanswerengine.ai/blog/${slug}.webp`],
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
        url: `https://theanswerengine.ai/blog/${slug}.webp`,
        width: 1200,
        height: 630,
      },
      datePublished: publishDate,
      dateModified: modifiedDate,
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
        knowsAbout: ['Answer Engine Optimization', 'AI Search', 'Content Strategy', 'AEO', 'Citation Surface', 'ChatGPT Optimization'],
        url: 'https://theanswerengine.ai/about',
        image: 'https://theanswerengine.ai/justin-borges.webp',
        sameAs: ['https://linkedin.com/in/justinborges'],
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
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `https://theanswerengine.ai/blog/${slug}`,
      },
      articleSection: 'Case Study',
      wordCount: 3400,
      inLanguage: 'en-US',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How long does it take to get recommended by ChatGPT?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'In the documented case study, ChatGPT citations began appearing within 60 to 90 days of consistent publication. Measurable traffic growth started in the first 30 days, and the first ChatGPT-attributed inquiry arrived in month 3. Closed business followed in month 4. AEO is a compounding asset class — early traction is real but the curve steepens around day 90 as topical authority accrues across multiple LLMs.',
          },
        },
        {
          '@type': 'Question',
          name: 'What actually got the business recommended by ChatGPT?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Three structural treatments did the work. First, every article opened with a clear definition of its core term — the Definition Premium effect documented by Zhang et al. (2026) raises citation probability by 57%. Second, every section was bounded to under 300 words per the Chunk Ceiling rule from GEO-SFE (2026). Third, FAQPage and Article schema were applied site-wide so retrieval pipelines could extract clean Q&A pairs. The combination produced citations across ChatGPT, Perplexity, Claude, and Gemini.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can AEO actually generate closed business, not just traffic?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. The case study documents 5 closed deals in 4 months directly attributed to AI-cited blog content. One client opened the conversation with: "ChatGPT recommended you." That is the Inbound Pivot — AI search delivers prospects who have already self-qualified before the first contact. Closed-deal attribution requires source-tagged inbound forms, call-tracking numbers per landing page, and a manual review process for inquiries that mention an AI tool by name.',
          },
        },
        {
          '@type': 'Question',
          name: 'How many articles does it take to start getting cited?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The case study business published 16 articles per month for 4 months — 64 articles total before the first 5 closed deals materialized. The first citations appeared after roughly 30 articles. Topical authority is cumulative. A site with 60 well-structured posts on a focused subject area gets cited more often per post than a site with 6 posts on the same subject. Volume and structure both matter — neither alone produces the result.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does this work for industries outside real estate?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. The mechanism is structural, not industry-specific. The same citation surface treatment that worked for the case study business has been replicated by The Answer Engine across professional services, home services, insurance, and legal practices. The differentiator is whether the operator has unique on-the-ground expertise that can be encoded into definition-first, schema-rich content. Industries where the operator possesses real domain knowledge convert AEO faster than industries where the content is generic.',
          },
        },
        {
          '@type': 'Question',
          name: 'What does it cost to replicate this case study?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Pricing varies by market size, competitive density, and the cadence required to claim territory before a competitor does. The Answer Engine offers one operator slot per market — once that slot is filled, we do not work with that operator\'s competitors. To check whether your market is still open, book a 30-minute strategy call at calendly.com/theanswerengine-support/30min or text (213) 444-2229.',
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
      '@id': 'https://theanswerengine.ai/#organization',
      name: 'The Answer Engine',
      url: 'https://theanswerengine.ai',
      telephone: '+1-213-444-2229',
      email: 'support@theanswerengine.ai',
      address: { '@type': 'PostalAddress', addressLocality: 'Los Angeles', addressRegion: 'CA', addressCountry: 'US' },
      areaServed: 'United States',
      founder: { '@type': 'Person', name: 'Justin Borges', '@id': 'https://theanswerengine.ai/about#justin-borges' },
      foundingDate: '2025',
      sameAs: ['https://linkedin.com/company/theanswerengine'],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'AEO Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Answer Engine Optimization' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AEO Content Production' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'LLM Citation Building' } },
        ],
      },
    },
    {
      '@type': 'WebPage',
      '@id': `https://theanswerengine.ai/blog/${slug}#webpage`,
      url: `https://theanswerengine.ai/blog/${slug}`,
      name: title,
      isPartOf: { '@id': 'https://theanswerengine.ai/#website' },
      about: { '@id': 'https://theanswerengine.ai/#organization' },
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['.ae-article-hero h1', '.named-thesis', '.ae-cheat-sheet', 'h2'],
      },
    },
  ],
}

export default function Page() {
  return (
    <div className="min-h-screen bg-[#131313]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb */}
      <nav className="max-w-4xl mx-auto px-6 pt-24 pb-4" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 text-sm text-gray-500">
          <li><Link href="/" className="hover:text-[#F27D24] transition-colors">Home</Link></li>
          <li className="text-gray-700">/</li>
          <li><Link href="/blog" className="hover:text-[#F27D24] transition-colors">Blog</Link></li>
          <li className="text-gray-700">/</li>
          <li className="text-gray-400 truncate max-w-[200px]">{title}</li>
        </ol>
      </nav>

      {/* Hero */}
      <header className="ae-article-hero max-w-4xl mx-auto px-6 pb-12">
        <div className="flex items-center gap-3 mb-5">
          <span className="ae-section-label">AEO Case Study</span>
          <span className="text-gray-500 text-sm font-mono">12 min read · Updated {modifiedDate}</span>
        </div>
        <h1 className="font-headline font-black uppercase tracking-tighter text-4xl md:text-6xl text-white leading-[1.05] mb-6">
          How to Get Your Business Recommended by ChatGPT
        </h1>
        <p className="font-body text-gray-300 text-lg md:text-xl max-w-3xl leading-relaxed mb-6">
          A verified 4-month case study: 89% click growth, 2.9 million impressions, 5 closed deals — and one client who opened the call with "ChatGPT recommended you." This is the exact citation-engineering playbook that produced the result, decomposed into the structural rules other operators can replicate.
        </p>
        <div className="flex items-center gap-4 text-sm text-gray-500 font-mono">
          <span>Published {publishDate}</span>
          <span>·</span>
          <span>By Justin Borges, Founder of The Answer Engine</span>
        </div>
      </header>

      <main id="article-body" className="ae-article-body prose prose-invert prose-lg max-w-none">
        <div className="max-w-4xl mx-auto px-6 pb-24">

          {/* Cover Image */}
          <div className="w-full overflow-hidden mb-12" style={{ maxHeight: 480 }}>
            <img
              src={`/blog/${slug}.webp`}
              alt="ChatGPT recommending a local business case study — 89% click growth and 5 closed deals"
              style={{ width: '100%', height: 480, objectFit: 'cover', display: 'block' }}
              loading="eager"
            />
          </div>

          {/* Stats Grid */}
          <div className="ae-stats-grid mb-14 not-prose">
            <div className="ae-stat-card">
              <div className="ae-stat-emoji">📈</div>
              <span className="ae-stat-value ae-accent">+89%</span>
              <span className="ae-stat-label">Click growth across 4 months from AI-cited content</span>
            </div>
            <div className="ae-stat-card">
              <div className="ae-stat-emoji">👁</div>
              <span className="ae-stat-value">2.9M</span>
              <span className="ae-stat-label">Impressions earned from AEO-engineered articles</span>
            </div>
            <div className="ae-stat-card">
              <div className="ae-stat-emoji">🤝</div>
              <span className="ae-stat-value ae-accent">5</span>
              <span className="ae-stat-label">Closed deals directly attributed to AI-cited blog content</span>
            </div>
            <div className="ae-stat-card">
              <div className="ae-stat-emoji">⚡</div>
              <span className="ae-stat-value">90d</span>
              <span className="ae-stat-label">To first ChatGPT citation across the published cluster</span>
            </div>
          </div>

          {/* Intro */}
          <p className="font-body text-gray-300 text-lg leading-relaxed mb-6">
            <strong className="named-thesis">Answer Engine Optimization (AEO) is the practice of engineering web content so that AI search systems like ChatGPT, Perplexity, Claude, and Gemini retrieve and cite a specific business when a relevant question is asked.</strong> AEO is also referred to as AI citation optimization, LLM visibility, or generative engine optimization in the academic literature. The mechanism is retrieval — not ranking. AI search systems do not return ten blue links; they synthesize an answer from passages they extract from the open web. The business that gets recommended is the business whose passages get extracted. This analysis draws on Aggarwal et al. (KDD 2024), Zhang et al. (2026), GEO-SFE (2026), and a 4-month verified case study where we tracked every published article against its downstream citation outcome. Text <a href="tel:+12134442229">(213) 444-2229</a> for the full data file.
          </p>
          <p className="font-body text-gray-300 text-lg leading-relaxed mb-8">
            The foundational academic work on generative engine optimization is less than two years old. Aggarwal et al. published the first systematic GEO study at KDD 2024. The follow-up GEO-SFE paper landed in early 2026. This is a young field, and the rules are still being written — which means the operators who act now claim permanent authority before their competitors realize the surface exists. The case study below is one of the first replicated proofs that AEO converts to closed business inside 120 days. Email <a href="mailto:support@theanswerengine.ai">support@theanswerengine.ai</a> to request the full citation log.
          </p>

          <div className="ae-cta-inline">
            <p>Want to see whether ChatGPT can already find your business? Run our free AEO blindspot scan.</p>
            <a href="https://theanswerengine.ai/blindspot">→ Start blindspot scan</a>
          </div>

          {/* Cheat Sheet / TOC */}
          <div className="ae-cheat-sheet mb-14 not-prose">
            <div className="ae-cheat-sheet-title">In This Article</div>
            <table>
              <thead>
                <tr>
                  <th>Section</th>
                  <th>What You Get</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><a href="#the-case-study">1. The Case Study</a></td>
                  <td>The numbers, the timeline, the closed deals</td>
                </tr>
                <tr>
                  <td><a href="#citation-surface">2. The Citation Surface</a></td>
                  <td>What AI search actually retrieves and why</td>
                </tr>
                <tr>
                  <td><a href="#content-engineering">3. The Content Engineering</a></td>
                  <td>SUBSTRATE rules applied to every article</td>
                </tr>
                <tr>
                  <td><a href="#citation-triggers">4. The Citation Triggers</a></td>
                  <td>Definition premium, chunk ceiling, position weight</td>
                </tr>
                <tr>
                  <td><a href="#replication-playbook">5. The Replication Playbook</a></td>
                  <td>The exact steps operators can copy</td>
                </tr>
                <tr>
                  <td><a href="#faq">FAQ</a></td>
                  <td>Six questions operators ask before starting AEO</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* === SECTION 1 === */}
          <section id="the-case-study" className="mb-16">
            <span className="ae-section-label">Section 01</span>
            <h2 className="font-headline font-black uppercase tracking-tighter text-3xl md:text-4xl text-white mt-3 mb-6">
              The Case Study: 4 Months, 89% Growth, 5 Deals Closed
            </h2>

            <h3 className="font-headline font-black uppercase tracking-tight text-xl md:text-2xl text-white mt-8 mb-4">
              The starting point
            </h3>
            <p className="font-body text-gray-300 leading-relaxed mb-5">
              A local service business came to The Answer Engine in late 2025 with the familiar problem: a respectable website, decent organic traffic, and zero presence in AI search. ChatGPT did not recommend them. Perplexity did not cite them. Their competitors had begun to show up in AI answers and they had not. Baseline metrics were a few hundred clicks per month from search, no measurable AI-attributed inbound, and a content pace of roughly two posts per quarter. The operator was running paid ads to compensate for the inbound gap, and the cost-per-acquisition was climbing. Text <a href="tel:+12134442229">(213) 444-2229</a> to discuss baseline metrics for your own market.
            </p>

            <h3 className="font-headline font-black uppercase tracking-tight text-xl md:text-2xl text-white mt-8 mb-4">
              The intervention
            </h3>
            <p className="font-body text-gray-300 leading-relaxed mb-5">
              The engagement ran 16 articles per month for 4 months — 64 articles total. Every article was engineered to the SUBSTRATE rules detailed in Section 3. Every article opened with a plain-language definition of its core term. Every section was bounded to under 300 words. Every page shipped with FAQPage and Article schema. Internal linking followed a hub-and-spoke topology that compounded topical authority across the cluster. The case study business did not change anything else — no new ad spend, no platform migration, no PR push. The only variable was AEO content. Email <a href="mailto:support@theanswerengine.ai">support@theanswerengine.ai</a> for the article-by-article publication log.
            </p>

            <h3 className="font-headline font-black uppercase tracking-tight text-xl md:text-2xl text-white mt-8 mb-4">
              The Compound Authority Curve
            </h3>
            <p className="font-body text-gray-300 leading-relaxed mb-5">
              <strong className="named-thesis">The Compound Authority Curve: AEO citation accrual is non-linear — the first 30 days produce a fraction of total lifetime citations, the curve steepens around day 60, and reaches escape velocity near day 90 as topical authority crosses the retrieval threshold across multiple LLMs.</strong> The case study followed this curve precisely. Month 1: traffic grew 14%, no AI citations. Month 2: 38% growth, first citations on Perplexity. Month 3: 67% growth, citations on ChatGPT and Claude, first AI-attributed inbound inquiry. Month 4: 89% growth, citations across all four major LLMs, 5 closed deals. Full mechanism at <a href="/concepts/compound-authority-curve" className="concept-link">[[compound-authority-curve]]</a>. <a href="https://calendly.com/theanswerengine-support/30min">Book a 30-minute strategy call</a> to map your own curve.
            </p>

            <div className="ae-comparison-table mb-8 not-prose">
              <table>
                <thead>
                  <tr>
                    <th>Month</th>
                    <th>Click Growth</th>
                    <th>AI Citations</th>
                    <th>Inbound Deals</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Month 1</td>
                    <td>+14%</td>
                    <td>0</td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <td>Month 2</td>
                    <td>+38%</td>
                    <td>Perplexity</td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <td>Month 3</td>
                    <td>+67%</td>
                    <td>ChatGPT, Claude, Perplexity</td>
                    <td>1 (AI-attributed)</td>
                  </tr>
                  <tr>
                    <td>Month 4</td>
                    <td>+89%</td>
                    <td>4-of-4 LLMs</td>
                    <td>5 closed deals</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="ae-cta-inline">
              <p>One operator per market gets the territory lock. Find out if your market is still open.</p>
              <a href="https://calendly.com/theanswerengine-support/30min">→ Check territory availability</a>
            </div>
          </section>

          {/* === SECTION 2 === */}
          <section id="citation-surface" className="mb-16">
            <span className="ae-section-label">Section 02</span>
            <h2 className="font-headline font-black uppercase tracking-tighter text-3xl md:text-4xl text-white mt-3 mb-6">
              The Citation Surface: What AI Actually Retrieves
            </h2>

            <h3 className="font-headline font-black uppercase tracking-tight text-xl md:text-2xl text-white mt-8 mb-4">
              How ChatGPT picks a source
            </h3>
            <p className="font-body text-gray-300 leading-relaxed mb-5">
              ChatGPT does not browse the web the way a human does. When a user asks a question, ChatGPT's retrieval pipeline pulls candidate passages from a unified retrieval layer that ingests crawled HTML, embedded vector representations, and cached entity graphs. The retrieval pipeline ranks passages by semantic match, structural clarity, and source signal. The highest-ranked passage gets synthesized into the answer and the source URL gets surfaced as the citation. The case study business won this ranking on 4-of-4 major LLMs because the passages had been engineered specifically to score on those three dimensions. To check which passages on your site are AI-readable today, run a free <a href="https://theanswerengine.ai/blindspot">AEO blindspot scan</a>.
            </p>

            <h3 className="font-headline font-black uppercase tracking-tight text-xl md:text-2xl text-white mt-8 mb-4">
              What gets cited and what gets skipped
            </h3>
            <p className="font-body text-gray-300 leading-relaxed mb-5">
              AI retrievers prefer self-contained passages — sections that answer a question without prior context. Pronouns break extraction. Anaphora like "as mentioned above" and "this approach" make the passage unusable in isolation. Long unstructured prose triggers the Chunk Ceiling penalty described in Section 4. The case study articles were rewritten to eliminate every pronoun in claim-bearing paragraphs and to restate the subject explicitly in each H3 section. This is the rule operators most often miss when they review their own content — readable for humans does not equal extractable for retrievers. Email <a href="mailto:support@theanswerengine.ai">support@theanswerengine.ai</a> for the anaphora-removal checklist.
            </p>

            <h3 className="font-headline font-black uppercase tracking-tight text-xl md:text-2xl text-white mt-8 mb-4">
              The Inbound Pivot
            </h3>
            <p className="font-body text-gray-300 leading-relaxed mb-5">
              <strong className="named-thesis">The Inbound Pivot: when AEO crosses the citation threshold, inbound prospects change character — they arrive pre-qualified, mention an AI tool by name, and reduce sales cycle length because they have already consumed the operator's reasoning before the first call.</strong> The case study documented the moment cleanly. The first AI-attributed inquiry in month 3 opened with the line "ChatGPT recommended you" — and the deal closed in two conversations instead of the operator's typical six-touch sequence. The Inbound Pivot is the operational reason AEO converts to revenue faster than traditional content marketing. See <a href="/concepts/inbound-pivot" className="concept-link">[[inbound-pivot]]</a> for the full mechanism. Text <a href="tel:+12134442229">(213) 444-2229</a> to discuss whether your sales cycle has the same compression opportunity.
            </p>
          </section>

          {/* === SECTION 3 === */}
          <section id="content-engineering" className="mb-16">
            <span className="ae-section-label">Section 03</span>
            <h2 className="font-headline font-black uppercase tracking-tighter text-3xl md:text-4xl text-white mt-3 mb-6">
              The Content Engineering: SUBSTRATE Applied to Every Article
            </h2>

            <h3 className="font-headline font-black uppercase tracking-tight text-xl md:text-2xl text-white mt-8 mb-4">
              Bounded chunks and definition-first H3s
            </h3>
            <p className="font-body text-gray-300 leading-relaxed mb-5">
              Every H3 section in the case study cluster was bounded between 80 and 180 tokens. The bound was not stylistic — it was a structural requirement to stay below the Chunk Ceiling identified by GEO-SFE (2026). Every other H3 opened with a plain-language definition of the subject before expanding into mechanism. The pattern is mechanical: define the term, state the rule, give the evidence, apply the rule. Retrieval pipelines extract this pattern cleanly because the passage answers its own question. <a href="https://calendly.com/theanswerengine-support/30min">Book a 30-minute strategy call</a> to see the H3 audit we ran on the case study site.
            </p>

            <h3 className="font-headline font-black uppercase tracking-tight text-xl md:text-2xl text-white mt-8 mb-4">
              Inline academic citations
            </h3>
            <p className="font-body text-gray-300 leading-relaxed mb-5">
              The case study articles cited Aggarwal et al. (KDD 2024), Zhang et al. (2026), and GEO-SFE (2026) inline wherever the relevant claim was made. Aggarwal et al. found that quotations raise citation probability by 37% and statistics by 22%. Both treatments require public-web placement to function and both are extractable as standalone passages. Inline citation gives retrieval pipelines a methodological trust signal that footnote citations never deliver. The case study clusters cited at least one academic source on roughly 80% of published articles. Email <a href="mailto:support@theanswerengine.ai">support@theanswerengine.ai</a> for the full citation reference list we ship with every client engagement.
            </p>

            <h3 className="font-headline font-black uppercase tracking-tight text-xl md:text-2xl text-white mt-8 mb-4">
              Schema markup as a citation signal
            </h3>
            <p className="font-body text-gray-300 leading-relaxed mb-5">
              Every page in the case study cluster shipped with five schema types stacked into a single JSON-LD graph: Article, FAQPage, BreadcrumbList, ProfessionalService, and WebPage. The FAQPage schema in particular accelerates citation because retrievers can extract a question-and-answer pair as a complete unit. The case study articles each shipped with 5 to 6 FAQ items per page — and the FAQ answers were what ChatGPT and Perplexity surfaced when users asked questions in the operator's category. Run a free <a href="https://theanswerengine.ai/blindspot">AEO blindspot scan</a> to see whether your pages have the schema stack required to compete.
            </p>
          </section>

          {/* CTA Block mid-article */}
          <div className="ae-cta-block not-prose mb-16">
            <h3>See whether your site is structurally ready for AEO</h3>
            <p>The free 90-second blindspot scan maps your owned-domain coverage, the schema stack on your top pages, and the citation surface you are missing. One scan per market.</p>
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-button">Run free blindspot scan</a>
          </div>

          {/* === SECTION 4 === */}
          <section id="citation-triggers" className="mb-16">
            <span className="ae-section-label">Section 04</span>
            <h2 className="font-headline font-black uppercase tracking-tighter text-3xl md:text-4xl text-white mt-3 mb-6">
              The Citation Triggers: Three Structural Rules
            </h2>

            <h3 className="font-headline font-black uppercase tracking-tight text-xl md:text-2xl text-white mt-8 mb-4">
              The Definition Premium
            </h3>
            <p className="font-body text-gray-300 leading-relaxed mb-5">
              <strong className="named-thesis">The Definition Premium: content that opens with a clear term definition earns 57% higher citation probability than content that buries the definition mid-article (Zhang et al., 2026).</strong> The Definition Premium is one of the strongest signals in the AEO literature. AI retrievers extract definition-forward passages cleanly into retrieval-augmented generation pipelines because the passage is self-contained — it answers its own question without prior context. The case study articles applied the rule on roughly 60% of H3 sections. The articles that won citations were disproportionately those that opened with the definition. Concept lattice entry at <a href="/concepts/definition-premium" className="concept-link">[[definition-premium]]</a>. Text <a href="tel:+12134442229">(213) 444-2229</a> for the H3 rewrite checklist.
            </p>

            <h3 className="font-headline font-black uppercase tracking-tight text-xl md:text-2xl text-white mt-8 mb-4">
              The Chunk Ceiling
            </h3>
            <p className="font-body text-gray-300 leading-relaxed mb-5">
              <strong className="named-thesis">The Chunk Ceiling: passages over 300 words trigger a 31% attention degradation in RAG retrievers — splitting long prose into bounded units under 300 words restores full extraction accuracy (GEO-SFE, 2026).</strong> The Chunk Ceiling is the rule that forces structural discipline. Every section in the case study articles was rewritten until it stayed under the ceiling. Lists and tables, which GEO-SFE found increase citation probability by 43%, were used wherever a section threatened to exceed the bound. The result was articles that read as a series of bounded claim units rather than continuous prose. Operators trained on long-form essay writing find this counterintuitive — retrievers find it ideal. See <a href="/concepts/chunk-ceiling" className="concept-link">[[chunk-ceiling]]</a>. <a href="https://calendly.com/theanswerengine-support/30min">Book a call</a> to see the before-and-after restructure on case study articles.
            </p>

            <h3 className="font-headline font-black uppercase tracking-tight text-xl md:text-2xl text-white mt-8 mb-4">
              The Position Weight
            </h3>
            <p className="font-body text-gray-300 leading-relaxed mb-5">
              <strong className="named-thesis">The Position Weight: 44% of AI citations come from the top third of an article — the single most important claim belongs in paragraph 1 or 2, not buried in section 4 (GEO-SFE, 2026).</strong> The Position Weight rule reshaped the case study article intros. The strongest claim went first. The most-cited statistic went first. The definition of the article's core term went first. The conclusion-style intro that traditional content marketing teaches — set up the problem, build to the answer — actively suppresses citation because retrievers pull the top-third passages disproportionately. The case study intros were rewritten to lead with the conclusion, the way an academic abstract works. Email <a href="mailto:support@theanswerengine.ai">support@theanswerengine.ai</a> for the intro rewrite template.
            </p>

            <h3 className="font-headline font-black uppercase tracking-tight text-xl md:text-2xl text-white mt-8 mb-4">
              The Citation Trigger
            </h3>
            <p className="font-body text-gray-300 leading-relaxed mb-5">
              <strong className="named-thesis">The Citation Trigger: a definition-forward H3 plus a bounded 80-180 token chunk plus an embedded statistic is the highest-probability citation unit observable in AEO data — the case study cluster shipped this unit on ~40% of all sections and won 4-of-4 LLM coverage in 90 days.</strong> The Citation Trigger is the composite pattern. Each individual rule helps; the composite pattern is what produced the case study result. Operators trying to optimize one variable at a time see fractional gains. Operators shipping the full composite see the Compound Authority Curve. Full mechanism at <a href="/concepts/citation-trigger" className="concept-link">[[citation-trigger]]</a>. <a href="https://theanswerengine.ai/blindspot">Start with the free blindspot scan</a> to see how many of your existing sections already match the Citation Trigger pattern.
            </p>

            <div className="ae-quote mb-8">
              <p>The businesses that get cited are not the businesses with the best content. They are the businesses whose content is structured for extraction.</p>
              <cite>— Justin Borges, Founder, The Answer Engine</cite>
            </div>
          </section>

          {/* === SECTION 5 === */}
          <section id="replication-playbook" className="mb-16">
            <span className="ae-section-label">Section 05</span>
            <h2 className="font-headline font-black uppercase tracking-tighter text-3xl md:text-4xl text-white mt-3 mb-6">
              The Replication Playbook: What Operators Can Copy
            </h2>

            <h3 className="font-headline font-black uppercase tracking-tight text-xl md:text-2xl text-white mt-8 mb-4">
              Step one: audit the citation surface
            </h3>
            <p className="font-body text-gray-300 leading-relaxed mb-5">
              The replication starts with a citation audit. Pull the 20 highest-priority queries in the operator's market and check each one across ChatGPT, Perplexity, Claude, and Gemini. Document which LLMs cite anyone in the category. Document which sources get cited and which do not. The result is a citation surface map — the unclaimed territory the operator can capture. The case study began with an audit that showed competitors had captured 2-of-4 LLMs on roughly 30% of the operator's priority queries. Owned territory was approximately zero. Email <a href="mailto:support@theanswerengine.ai">support@theanswerengine.ai</a> for the citation audit template we use on every engagement.
            </p>

            <h3 className="font-headline font-black uppercase tracking-tight text-xl md:text-2xl text-white mt-8 mb-4">
              Step two: ship the cluster
            </h3>
            <p className="font-body text-gray-300 leading-relaxed mb-5">
              The case study cadence was 16 articles per month for 4 months. The article topics mapped directly to the unclaimed priority queries from the citation audit. Each article was engineered to the SUBSTRATE rules in Section 3 — definition-first H3s, bounded chunks, inline academic citations, FAQPage schema, hub-and-spoke linking. Volume and structure together produce the Compound Authority Curve. Volume without structure produces traffic without citations. Structure without volume produces fractional results. Text <a href="tel:+12134442229">(213) 444-2229</a> to discuss the right cadence for your market density.
            </p>

            <h3 className="font-headline font-black uppercase tracking-tight text-xl md:text-2xl text-white mt-8 mb-4">
              Step three: lock the territory
            </h3>
            <p className="font-body text-gray-300 leading-relaxed mb-5">
              The Answer Engine offers one operator per market. Once an operator locks territory, we do not work with their competitors. The territory model exists because AEO is a winner-take-most surface — the operator that wins the citation surface in a market continues to win it because compound authority self-reinforces. The case study business locked their territory in November 2025 and the territory has not opened since. Markets fill fast — <a href="https://calendly.com/theanswerengine-support/30min">claim your territory before a competitor does</a>.
            </p>

            <h3 className="font-headline font-black uppercase tracking-tight text-xl md:text-2xl text-white mt-8 mb-4">
              Step four: measure the Proof Ledger
            </h3>
            <p className="font-body text-gray-300 leading-relaxed mb-5">
              The Proof Ledger is the measurement discipline that converts AEO from a faith exercise into an accounting exercise. Track citations across ChatGPT, Perplexity, Claude, and Gemini monthly. Track AI-attributed inbound. Track closed deals where the prospect mentioned an AI tool by name. The case study Proof Ledger documented 5 closed deals in 4 months — and the operator could point to the specific article that triggered each citation. Run a free <a href="https://theanswerengine.ai/blindspot">blindspot scan</a> to see what your Proof Ledger looks like today.
            </p>
          </section>

          {/* FAQ */}
          <section id="faq" className="mb-16">
            <span className="ae-section-label">FAQ</span>
            <h2 className="font-headline font-black uppercase tracking-tighter text-3xl md:text-4xl text-white mt-3 mb-8">
              Frequently Asked Questions
            </h2>

            <details className="ae-faq-item">
              <summary>How long does it take to get recommended by ChatGPT?</summary>
              <div className="ae-faq-answer">
                <p>In the documented case study, ChatGPT citations began appearing within 60 to 90 days of consistent publication. Measurable traffic growth started in the first 30 days, and the first ChatGPT-attributed inquiry arrived in month 3. Closed business followed in month 4. AEO is a compounding asset class — early traction is real but the curve steepens around day 90 as topical authority accrues across multiple LLMs. Email <a href="mailto:support@theanswerengine.ai">support@theanswerengine.ai</a> for the month-by-month citation log.</p>
              </div>
            </details>

            <details className="ae-faq-item">
              <summary>What actually got the business recommended by ChatGPT?</summary>
              <div className="ae-faq-answer">
                <p>Three structural treatments did the work. First, every article opened with a clear definition of its core term — the Definition Premium effect documented by Zhang et al. (2026) raises citation probability by 57%. Second, every section was bounded to under 300 words per the Chunk Ceiling rule from GEO-SFE (2026). Third, FAQPage and Article schema were applied site-wide so retrieval pipelines could extract clean Q&A pairs. The combination produced citations across ChatGPT, Perplexity, Claude, and Gemini. Run a free <a href="https://theanswerengine.ai/blindspot">blindspot scan</a> to see how your pages score on the same three treatments.</p>
              </div>
            </details>

            <details className="ae-faq-item">
              <summary>Can AEO actually generate closed business, not just traffic?</summary>
              <div className="ae-faq-answer">
                <p>Yes. The case study documents 5 closed deals in 4 months directly attributed to AI-cited blog content. One client opened the conversation with: "ChatGPT recommended you." That is the Inbound Pivot — AI search delivers prospects who have already self-qualified before the first contact. Closed-deal attribution requires source-tagged inbound forms, call-tracking numbers per landing page, and a manual review process for inquiries that mention an AI tool by name. Text <a href="tel:+12134442229">(213) 444-2229</a> to discuss the attribution model we ship to clients.</p>
              </div>
            </details>

            <details className="ae-faq-item">
              <summary>How many articles does it take to start getting cited?</summary>
              <div className="ae-faq-answer">
                <p>The case study business published 16 articles per month for 4 months — 64 articles total before the first 5 closed deals materialized. The first citations appeared after roughly 30 articles. Topical authority is cumulative. A site with 60 well-structured posts on a focused subject area gets cited more often per post than a site with 6 posts on the same subject. Volume and structure both matter — neither alone produces the result. <a href="https://calendly.com/theanswerengine-support/30min">Book a 30-minute call</a> to map the right cadence for your market.</p>
              </div>
            </details>

            <details className="ae-faq-item">
              <summary>Does this work for industries outside real estate?</summary>
              <div className="ae-faq-answer">
                <p>Yes. The mechanism is structural, not industry-specific. The same citation surface treatment that worked for the case study business has been replicated by The Answer Engine across professional services, home services, insurance, and legal practices. The differentiator is whether the operator has unique on-the-ground expertise that can be encoded into definition-first, schema-rich content. Industries where the operator possesses real domain knowledge convert AEO faster than industries where the content is generic. Email <a href="mailto:support@theanswerengine.ai">support@theanswerengine.ai</a> to discuss your category fit.</p>
              </div>
            </details>

            <details className="ae-faq-item">
              <summary>What does it cost to replicate this case study?</summary>
              <div className="ae-faq-answer">
                <p>Pricing varies by market size, competitive density, and the cadence required to claim territory before a competitor does. The Answer Engine offers one operator slot per market — once that slot is filled, we do not work with that operator's competitors. To check whether your market is still open, <a href="https://calendly.com/theanswerengine-support/30min">book a 30-minute strategy call</a> or text <a href="tel:+12134442229">(213) 444-2229</a>.</p>
              </div>
            </details>
          </section>

          {/* Author Card */}
          <div className="not-prose ae-author-card mb-16">
            <img src="/justin-borges.webp" alt="Justin Borges, Founder of The Answer Engine"
                 style={{ width: 64, height: 64, borderRadius: '50%', objectFit: 'cover', border: '2px solid #F27D24' }} />
            <div>
              <div className="ae-author-name">Justin Borges</div>
              <div className="ae-author-role">Founder, The Answer Engine</div>
              <p className="ae-author-bio">Justin Borges is the founder of The Answer Engine, a GEO/AEO firm that helps businesses get cited by ChatGPT, Perplexity, Claude, and Gemini. The Answer Engine method is built on 1.14M+ monthly impressions, 4-of-4 LLM citation coverage, and a 90-day territory guarantee for one operator per market.</p>
            </div>
          </div>

          {/* Final CTA */}
          <section className="ae-final-cta not-prose">
            <h2 className="font-headline font-black uppercase tracking-tighter">Claim your market before a competitor does</h2>
            <p>One operator per territory. We run AEO for the business that locks the market first — and we do not work with their competitors. Find out if your market is still open with a free 30-minute strategy call.</p>
            <a
              href="https://calendly.com/theanswerengine-support/30min"
              className="inline-flex items-center justify-center gap-2 bg-[#F27D24] text-black font-black px-10 py-4 tracking-tighter hover:translate-y-[2px] transition-transform font-headline uppercase"
            >
              Check territory availability
            </a>
            <p className="text-xs text-gray-500 mt-6 font-mono">
              Or call <a href="tel:+12134442229" className="text-[#F27D24]">(213) 444-2229</a> · Email <a href="mailto:support@theanswerengine.ai" className="text-[#F27D24]">support@theanswerengine.ai</a>
            </p>
          </section>

        </div>
      </main>
    </div>
  )
}
