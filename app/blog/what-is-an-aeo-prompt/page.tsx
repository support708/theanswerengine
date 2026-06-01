import type { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';

export const revalidate = 86400;
export const dynamic = 'force-static';

const TITLE = 'What Is an AEO Prompt? | The Answer Engine';
const DESCRIPTION = 'An AEO prompt is the natural-language query that triggers an AI search citation. The 2026 definition, mechanism, and measurement playbook. Book a call.';
const URL = 'https://theanswerengine.ai/blog/what-is-an-aeo-prompt';
const IMAGE = 'https://theanswerengine.ai/blog/what-is-an-aeo-prompt.webp';
const PUBLISHED = '2026-05-31';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords:
    'what is an AEO prompt, AEO prompt definition, AEO prompt library, AI search prompt, ChatGPT prompt, Perplexity prompt, Claude prompt, Gemini prompt, prompt mediation, answer engine optimization, AEO measurement, LLM citation prompt',
  alternates: { canonical: URL },
  openGraph: {
    title: 'What Is an AEO Prompt?',
    description: DESCRIPTION,
    url: URL,
    siteName: 'The Answer Engine',
    type: 'article',
    publishedTime: PUBLISHED,
    authors: ['Justin Borges'],
    images: [{ url: IMAGE, width: 1200, height: 630, alt: 'What Is an AEO Prompt?' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What Is an AEO Prompt?',
    description: DESCRIPTION,
    images: [IMAGE],
  },
};

export default function WhatIsAnAEOPromptPage() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `${URL}#article`,
        headline: 'What Is an AEO Prompt?',
        description:
          'An AEO prompt is the natural-language query a user types into an AI search engine — ChatGPT, Perplexity, Claude, Gemini, Google AI Overviews — that triggers the retrieval, scoring, and citation pipeline. This article defines the AEO prompt, contrasts it with the SEO keyword, maps the prompt-mediation mechanism documented in Aggarwal et al. (KDD 2024), and lays out the 20-50 prompt measurement library TAE runs against every operator engagement.',
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
          knowsAbout: [
            'Answer Engine Optimization',
            'AEO Prompt Engineering',
            'LLM Citation Strategy',
            'Retrieval Augmented Generation',
            'AI Search Measurement',
          ],
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
        keywords:
          'what is an AEO prompt, AEO prompt definition, AEO prompt library, prompt mediation, AI search prompt, ChatGPT prompt, Perplexity prompt, answer engine optimization',
        articleSection: 'Answer Engine Optimization',
        wordCount: 3600,
        inLanguage: 'en-US',
        citation: [
          'Aggarwal et al., GEO: Generative Engine Optimization, KDD 2024',
          'Zhang et al., 2026 — Definition Premium in LLM Retrieval',
          'GEO-SFE Benchmark, 2026 — Structural Feature Effects on LLM Citations',
          'Chen et al., 2025 — Earned Media Bias in Generative Retrievers',
        ],
        about: [
          { '@type': 'Thing', name: 'AEO Prompt' },
          { '@type': 'Thing', name: 'Answer Engine Optimization' },
          { '@type': 'Thing', name: 'Generative Search' },
          { '@type': 'Thing', name: 'Prompt Mediation' },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${URL}#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is an AEO prompt?',
            acceptedAnswer: {
              '@type': 'Answer',
              text:
                'An AEO prompt is the natural-language query a user types or speaks into an AI search engine — ChatGPT, Perplexity, Claude, Gemini, or Google AI Overviews — that triggers the retrieval, scoring, and citation pipeline. The AEO prompt is the unit of measurement in Answer Engine Optimization: a brand is either cited inside the generated answer for a given prompt or it is not. The AEO prompt replaces the SEO keyword as the operating measurement unit because the user query has shifted from a 2-to-3-word search string to a full natural-language question.',
            },
          },
          {
            '@type': 'Question',
            name: 'How is an AEO prompt different from an SEO keyword?',
            acceptedAnswer: {
              '@type': 'Answer',
              text:
                'An AEO prompt is a full natural-language question that compresses awareness, consideration, and intent into a single retrieval event. An SEO keyword is a 2-to-3-word search string mapped to a ranked list of links. AEO prompts run 3 to 5 times longer than the SEO keyword for the same underlying intent, skew interrogative (who, what, how, why, best, cheapest), and trigger a retrieval pipeline that scores passages on extractability rather than scoring pages on backlinks. Aggarwal et al. (KDD 2024) measured that content optimized for natural-language passage match outperformed keyword-density content across all three generative engines they tested.',
            },
          },
          {
            '@type': 'Question',
            name: 'What types of AEO prompts should I track?',
            acceptedAnswer: {
              '@type': 'Answer',
              text:
                'Six prompt types cover the AEO measurement surface: definitional ("what is X"), comparative ("X vs Y"), recommendation ("best X for Y"), local intent ("X near me" or "X in [city]"), problem-led ("how do I fix X"), and transactional ("X pricing" or "hire an X"). A defensible AEO prompt library covers all six types for the operator\'s category, with 20 to 50 total prompts depending on territory complexity. Each prompt is logged monthly across ChatGPT, Perplexity, Claude, and Gemini.',
            },
          },
          {
            '@type': 'Question',
            name: 'How many AEO prompts should I measure?',
            acceptedAnswer: {
              '@type': 'Answer',
              text:
                'Twenty to fifty AEO prompts is the working range for a single operator engagement. Below 20 prompts the sample is too small to detect citation movement against noise. Above 50 prompts the measurement cadence becomes operationally heavy without proportional signal gain. The Answer Engine runs a fixed 20-prompt minimum library on every operator engagement, expanded to 30 to 50 prompts for complex territories or multi-service operators.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can I influence which AEO prompts include my brand?',
            acceptedAnswer: {
              '@type': 'Answer',
              text:
                'Yes. The AEO model rewrites the user prompt into multiple synonymous retrieval queries before pulling candidate passages. Content that uses two or three natural-language phrasings of the same concept qualifies for more retrieval candidates than content using a single phrasing. The mechanism is documented by Aggarwal et al. (KDD 2024) as prompt mediation: a user query like "best plumber in Austin" is internally expanded to include "top plumbers Austin," "highly rated Austin plumbing," and similar variants. Brands that synonym-bridge their key terms inside SUBSTRATE-engineered chunks compound across more prompts than brands that publish single-phrasing content.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do AEO prompts work the same across ChatGPT, Perplexity, Claude, and Gemini?',
            acceptedAnswer: {
              '@type': 'Answer',
              text:
                'The prompt-mediation architecture is shared across every major engine, but the rewrite patterns and citation thresholds diverge. Perplexity expands prompts most aggressively into sub-questions and pulls 6 to 12 sources per answer. ChatGPT rewrites for Bing-style retrieval and weights structured-data sources. Claude weights attribution-chain content with named authors. Gemini and Google AI Overviews lean on the Google entity graph for prompt resolution. The same underlying AEO prompt may surface a brand on Perplexity and miss on ChatGPT — measurement has to be per engine, not aggregated.',
            },
          },
        ],
      },
      {
        '@type': 'HowTo',
        '@id': `${URL}#howto`,
        name: 'How to Build an AEO Prompt Library',
        description:
          'A six-step process for constructing the fixed 20-to-50 prompt library every operator needs to measure citation movement across ChatGPT, Perplexity, Claude, and Gemini.',
        totalTime: 'PT60M',
        step: [
          {
            '@type': 'HowToStep',
            position: 1,
            name: 'Inventory the operator\'s category vocabulary',
            text: 'List every service the operator delivers and every phrasing a customer uses to describe the problem the service solves. The vocabulary list is the seed corpus the prompt library will be sampled from.',
          },
          {
            '@type': 'HowToStep',
            position: 2,
            name: 'Map vocabulary to the six prompt types',
            text: 'For each service, write at least one prompt in each of the six types — definitional, comparative, recommendation, local intent, problem-led, transactional. A six-service operator with full coverage produces 36 prompts before deduplication.',
          },
          {
            '@type': 'HowToStep',
            position: 3,
            name: 'Add 2 to 3 synonym variants per prompt',
            text: 'Rewrite each prompt in two or three natural-language phrasings to test the prompt-mediation rewrite layer. Variants surface the gap between exact-match phrasing and intent-match coverage.',
          },
          {
            '@type': 'HowToStep',
            position: 4,
            name: 'Run the prompt library across all four engines',
            text: 'Submit each prompt verbatim to ChatGPT, Perplexity, Claude, and Gemini. Log every cited source URL, every cited brand mention, and every prompt that returns no citation candidates the brand belongs in.',
          },
          {
            '@type': 'HowToStep',
            position: 5,
            name: 'Score platform parity per prompt',
            text: 'Score each prompt 0 of 4 to 4 of 4 — the number of major LLMs that cited the brand for that exact prompt. Aggregate parity across the library is the single most decision-grade AEO number an operator can hold.',
          },
          {
            '@type': 'HowToStep',
            position: 6,
            name: 'Re-run the library monthly to measure compounding',
            text: 'AEO citations are sticky once earned and erode if abandoned. A monthly re-run of the same fixed library reveals whether the brand\'s parity score is compounding (the goal) or decaying (a publishing cadence problem).',
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
        priceRange: '$$$$',
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
        foundingDate: '2025',
        sameAs: ['https://linkedin.com/company/theanswerengine'],
        knowsAbout: [
          'Answer Engine Optimization',
          'AEO Prompt Engineering',
          'LLM Citation Strategy',
          'Retrieval Augmented Generation',
          'Schema Markup',
          'Entity Consistency',
        ],
      },
      {
        '@type': 'WebPage',
        '@id': `${URL}#webpage`,
        url: URL,
        name: TITLE,
        description: DESCRIPTION,
        isPartOf: { '@id': 'https://theanswerengine.ai/#website' },
        inLanguage: 'en-US',
        about: {
          '@type': 'Thing',
          name: 'AEO Prompt',
        },
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['.article-summary', '.named-thesis', 'h1', 'h2', '.faq-answer'],
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://theanswerengine.ai/' },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://theanswerengine.ai/blog' },
          { '@type': 'ListItem', position: 3, name: 'What Is an AEO Prompt?', item: URL },
        ],
      },
    ],
  };

  return (
    <>
      <Script
        id="aeo-prompt-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <div className="min-h-screen bg-[#131313]">
        <article className="max-w-4xl mx-auto px-6 pt-24 pb-16">

          {/* Breadcrumbs */}
          <nav className="text-sm text-gray-500 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">&rsaquo;</span>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <span className="mx-2">&rsaquo;</span>
            <span className="text-gray-400">What Is an AEO Prompt?</span>
          </nav>

          {/* Hero */}
          <header className="ae-article-hero mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-white/[0.04] border border-white/[0.08]">
              <span className="font-mono text-xs uppercase tracking-widest text-[#F27D24]">AEO Mechanism Series</span>
            </div>

            <h1 className="font-headline font-black uppercase tracking-tighter text-3xl sm:text-4xl lg:text-5xl text-white leading-[1.05] mb-6">
              WHAT IS AN AEO PROMPT?
            </h1>

            <div className="article-summary bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/[0.08] p-6 mb-8">
              <p className="font-body text-lg text-white leading-relaxed">
                <strong>An AEO prompt is the natural-language query a user types into ChatGPT, Perplexity, Claude, Gemini, or Google AI Overviews that triggers the retrieval, scoring, and citation pipeline.</strong> The AEO prompt is the unit of measurement that replaced the SEO keyword. Where SEO measured rank against a 2-to-3-word search string, Answer Engine Optimization (AEO) measures citation against a full natural-language question that compresses awareness, consideration, and intent into one retrieval event. The brand cited inside the generated answer wins the prompt. The brand absent from the citation list loses it — silently, with no ranking signal to chase.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-gray-400 font-mono">
              <span>13 MIN READ</span>
              <span>&middot;</span>
              <span>UPDATED MAY 2026</span>
              <span>&middot;</span>
              <span>BY JUSTIN BORGES</span>
            </div>
          </header>

          {/* Stats Grid */}
          <div className="ae-stats-grid not-prose mb-10">
            <div className="ae-stat-card">
              <div className="ae-stat-emoji">&#x1F50D;</div>
              <div className="ae-stat-value ae-accent">3&ndash;5x</div>
              <div className="ae-stat-label">Length of an AEO prompt vs the SEO keyword that maps to the same intent (Aggarwal et al., KDD 2024)</div>
            </div>
            <div className="ae-stat-card">
              <div className="ae-stat-emoji">&#x1F4DA;</div>
              <div className="ae-stat-value ae-accent">+57%</div>
              <div className="ae-stat-label">Citation premium on content opening with a clear, bounded definition (Zhang et al., 2026)</div>
            </div>
            <div className="ae-stat-card">
              <div className="ae-stat-emoji">&#x1F9E9;</div>
              <div className="ae-stat-value ae-accent">20&ndash;50</div>
              <div className="ae-stat-label">Fixed prompts in a defensible AEO measurement library per operator</div>
            </div>
            <div className="ae-stat-card">
              <div className="ae-stat-emoji">&#x26D4;</div>
              <div className="ae-stat-value ae-accent">&minus;31%</div>
              <div className="ae-stat-label">Attention degradation on passages over 300 words in RAG retrievers (GEO-SFE, 2026)</div>
            </div>
          </div>

          {/* Cheat Sheet TOC */}
          <div className="ae-cheat-sheet not-prose mb-12">
            <div className="ae-cheat-sheet-title">In This Article</div>
            <table>
              <tbody>
                <tr>
                  <td><a href="#definition" className="text-[#F27D24] hover:underline">1.</a></td>
                  <td><a href="#definition" className="text-gray-300 hover:text-white">What an AEO Prompt Actually Is</a></td>
                </tr>
                <tr>
                  <td><a href="#prompt-vs-keyword" className="text-[#F27D24] hover:underline">2.</a></td>
                  <td><a href="#prompt-vs-keyword" className="text-gray-300 hover:text-white">AEO Prompts vs SEO Keywords: The Mechanism</a></td>
                </tr>
                <tr>
                  <td><a href="#research" className="text-[#F27D24] hover:underline">3.</a></td>
                  <td><a href="#research" className="text-gray-300 hover:text-white">What the Research Says About Prompt Mediation</a></td>
                </tr>
                <tr>
                  <td><a href="#prompt-types" className="text-[#F27D24] hover:underline">4.</a></td>
                  <td><a href="#prompt-types" className="text-gray-300 hover:text-white">The Six AEO Prompt Types Every Operator Tracks</a></td>
                </tr>
                <tr>
                  <td><a href="#prompt-library" className="text-[#F27D24] hover:underline">5.</a></td>
                  <td><a href="#prompt-library" className="text-gray-300 hover:text-white">The AEO Prompt Library: How TAE Measures</a></td>
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

            {/* Named-thesis opener — S8 position-weighted */}
            <div className="ae-quote not-prose">
              <p><strong className="named-thesis">The Prompt-Keyword Gap: AEO prompts run three to five times longer than the SEO keyword that maps to the same intent, and the retrieval pipeline scores them on natural-language passage match rather than keyword density, which is why content optimized for the old keyword discipline systematically underperforms inside the new citation surface (Aggarwal et al., KDD 2024).</strong> This analysis draws on four peer-reviewed sources and on The Answer Engine&rsquo;s production data — 1.14M monthly impressions earned across 4 of 4 major LLMs from a single AEO-engineered footprint, plus 16 months of operator engagements measured against fixed prompt libraries.</p>
            </div>

            {/* === Section 1: What an AEO Prompt Actually Is === */}
            <span className="ae-section-label" id="definition">Definition</span>
            <h2>What an AEO Prompt Actually Is</h2>

            <h3>The plain-language definition</h3>
            <p>An AEO prompt is the natural-language query a user submits to an AI search engine that triggers the retrieval, scoring, and citation pipeline. The AEO prompt is the input. The cited answer is the output. Between the two, the AEO model retrieves candidate passages, scores them on relevance and authority, and decides which passages clear the citation threshold for inline attribution. Answer Engine Optimization (AEO) — also called AI citation optimization or LLM visibility — is the discipline of structuring content so that pipeline scores the brand above the citation threshold for the prompts that matter inside its category. Your first step: <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free AERO Blind Spot Scan.</a></p>

            <h3>Why the prompt replaced the keyword as the unit of measurement</h3>
            <p>The SEO era measured against keywords because Google returned a ranked list of links for a 2-to-3-word search string. The generative search era measures against AEO prompts because ChatGPT, Perplexity, Claude, and Gemini return a synthesized answer to a full natural-language question. The unit of measurement has to match the unit of behavior. AEO prompts are the unit of user behavior on generative engines, so AEO prompts are the unit of measurement on the operator scoreboard. Operators still tracking only keyword rank in 2026 are measuring a shrinking share of the actual conversation.</p>

            <h3>The AEO prompt has three distinct meanings — only one matters for measurement</h3>
            <p>The phrase &ldquo;AEO prompt&rdquo; surfaces in three different contexts. The first is the user prompt — the natural-language query a customer types into ChatGPT or Perplexity. The second is the system prompt — the internal instructions the model itself uses to format an answer. The third is the retrieval query — the rewritten internal query the engine generates after prompt mediation. Only the first is operational for AEO measurement. When this article uses the term AEO prompt without qualification, it means the user-facing prompt — the one the operator&rsquo;s customer would actually submit. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Claim your free call</a> before your market fills.</p>

            {/* CTA — text */}
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Get your free AI citation score — 48-hour turnaround</a>

            <h3>Why the AEO prompt is the only number that decides whether a brand exists in AI search</h3>
            <p>A brand can hold strong SEO rankings, paid impressions, and direct traffic and still be structurally invisible inside ChatGPT or Perplexity. The reason is the AEO prompt is the gate. If the brand is not cited when a customer submits a prompt in its category, the brand was not part of the conversation. There is no &ldquo;page two&rdquo; of a generated answer. There is no ranked alternative the user can scroll to. Either the brand is named inside the AI response or it does not exist for that prompt, that user, that retrieval event. The binary nature of the AEO prompt is what makes it a decision-grade measurement unit and what makes it brutally honest. Reach out: <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>

            {/* CTA — email */}
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Get your free AI citation score — 48-hour turnaround</a>

            <p>See <a href="/concepts/aeo-prompt" className="concept-link">The AEO Prompt</a> for the standalone concept definition the rest of the Concept Lattice links back to. Call us at <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> today.</p>

            {/* === Section 2: AEO Prompts vs SEO Keywords === */}
            <span className="ae-section-label" id="prompt-vs-keyword">Mechanism</span>
            <h2>AEO Prompts vs SEO Keywords: The Mechanism</h2>

            <h3>The length and shape gap</h3>
            <p>An AEO prompt and an SEO keyword can map to the same underlying intent and look almost nothing alike. The SEO keyword &ldquo;plumber Austin&rdquo; maps to the AEO prompt &ldquo;who is the best plumber in Austin for a slab leak under a 1960s foundation.&rdquo; The SEO keyword averages two to three words. The AEO prompt for the same intent averages ten to twenty. <strong className="named-thesis">The Prompt-Keyword Gap: AEO prompts run three to five times longer than the SEO keyword that maps to the same intent, which means content optimized for keyword density underperforms content optimized for full natural-language passage match (Aggarwal et al., KDD 2024).</strong> The gap is structural, not stylistic. The retrievers score on passage match, and a passage written for a 2-word keyword does not align with a 20-word prompt.</p>

            <h3>The intent compression event</h3>
            <p>The classic marketing funnel unfolded across multiple touches: a Google search for awareness, a click into a comparison article for consideration, a second search for intent, then a transaction. Generative search collapses that sequence. <strong className="named-thesis">The Intent Compression: a single AEO prompt collapses awareness, consideration, and recommendation into one retrieval event, so the brand cited inside the answer wins the consideration set before the user clicks anywhere (Zhang et al., 2026).</strong> The implication for operators: by the time the AI answer is generated, the brand is either named or it is not. There is no retargeting flight that recovers a prompt the brand failed to be cited inside. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Lock in your exclusive territory now.</a></p>

            {/* CTA — calendly */}
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Get your free AI citation score — 48-hour turnaround</a>

            <h3>The interrogative skew</h3>
            <p>AEO prompts skew interrogative. SEO keywords skew noun-phrase. <strong className="named-thesis">The Question Surface: AEO prompts open with who, what, how, why, best, or cheapest at substantially higher rates than SEO keywords, which is why content opening with a definitional H3 earns 57% higher citation probability than content opening with a marketing hook (Zhang et al., 2026).</strong> The operational consequence is direct: content built for SEO that opens with a brand introduction, a hero quote, or a campaign tagline loses to content that opens with a definitional answer to the implied question. Definitional openings collide cleanly with the way users actually phrase AEO prompts. <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Get your free AI readiness report.</a></p>

            {/* CTA — blindspot */}
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Get your free AI citation score — 48-hour turnaround</a>

            <h3>The attribution model collapses too</h3>
            <p>A generated answer that names a brand does not carry a UTM tag, a referrer, or a click ID. The user reads the cited brand inside the AI response and either acts on it directly or remembers the name later. Legacy attribution registers the citation as zero — last-click attribution will systematically under-credit every AEO prompt the brand actually wins. Operators that measure AEO performance only through Google Analytics report a shrinking channel. Operators that adopt a prompt-level citation log see the channel clearly. The measurement unit has to be the AEO prompt itself, not the click that may or may not follow it. Ready to act? <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a free strategy session.</a></p>

            <div className="not-prose overflow-x-auto my-8">
              <table className="ae-comparison-table w-full text-sm">
                <thead>
                  <tr>
                    <th>Dimension</th>
                    <th>SEO Keyword</th>
                    <th>AEO Prompt</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Average length</strong></td>
                    <td>2&ndash;3 words</td>
                    <td>10&ndash;20 words, often a full sentence</td>
                  </tr>
                  <tr>
                    <td><strong>Surface form</strong></td>
                    <td>Noun phrase</td>
                    <td>Interrogative or scenario</td>
                  </tr>
                  <tr>
                    <td><strong>Output</strong></td>
                    <td>Ranked list of links</td>
                    <td>Synthesized answer with inline citations</td>
                  </tr>
                  <tr>
                    <td><strong>Scoring target</strong></td>
                    <td>Page authority + on-page signals</td>
                    <td>Passage extractability + schema + co-citation</td>
                  </tr>
                  <tr>
                    <td><strong>Measurement unit</strong></td>
                    <td>Position number + CTR</td>
                    <td>Cited or not cited (binary) per engine</td>
                  </tr>
                  <tr>
                    <td><strong>Attribution</strong></td>
                    <td>UTM, referrer, last click</td>
                    <td>Prompt-level citation log</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* CTA — territory */}
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Get your free AI citation score — 48-hour turnaround</a>

            {/* === Section 3: Research === */}
            <span className="ae-section-label" id="research">Research</span>
            <h2>What the Research Says About Prompt Mediation</h2>

            <h3>The Prompt Mediation Layer (Aggarwal et al., KDD 2024)</h3>
            <p>The foundational AEO paper at KDD 2024 documented that AI search engines do not retrieve directly against the user-submitted prompt. The engine first rewrites the prompt into multiple internal retrieval queries, expanding synonyms and scoping the retrieval window. <strong className="named-thesis">The Prompt Mediation Layer: every AEO model rewrites the user prompt into multiple synonymous retrieval queries before pulling candidates, so content using two or three phrasings of the same concept qualifies for more retrieval candidates than content using one (Aggarwal et al., KDD 2024).</strong> The practical consequence is direct: a service page that names &ldquo;slab leak repair,&rdquo; &ldquo;under-slab leak,&rdquo; and &ldquo;foundation pipe leak&rdquo; in the same passage clears the retrieval bar on more rewritten queries than a page that uses only one phrasing. Synonym coverage is a structural lever, not a rhetorical one. Drop us a line at <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>

            {/* CTA — text */}
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Get your free AI citation score — 48-hour turnaround</a>

            <h3>The Definition Premium (Zhang et al., 2026)</h3>
            <p>Zhang et al. measured where retrievers extract definitional content from inside a document and found that opening position dominates. A passage that opens with a clear, bounded definition of its subject earns a 57% higher citation probability than a passage that buries the definition mid-article. The mechanism is mechanical: the scoring layer weights the first sentence of a passage heaviest, and a definition-first opening collides cleanly with both relevance and authority signals. AEO prompts that begin with &ldquo;what is&rdquo; or &ldquo;define&rdquo; — a substantial share of the question surface — are scored against the first 150 tokens of the most relevant passage in the index. Content engineered to win those prompts has to open with the answer, not the warmup. Speak to an AEO specialist: <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.</p>

            {/* CTA — email */}
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Get your free AI citation score — 48-hour turnaround</a>

            <h3>The Chunk Ceiling (GEO-SFE, 2026)</h3>
            <p>The GEO-SFE benchmark stress-tested passage length across the major retrievers and found a measurable cliff. Passages over 300 words trigger a 31% attention degradation in RAG retrievers. Splitting them into bounded units of 80 to 180 tokens restores full extraction accuracy. The implication for AEO prompts is direct: a 4,000-word thought-leadership article that addresses an AEO prompt in a single 800-word block of prose loses to a 4,000-word article that addresses the same prompt in six 130-word self-contained passages. The retriever pulls the chunk, not the article. Operators who write for human linear flow without chunking for retriever extraction are publishing content that AI cannot use. One client per city. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">See if your market is available.</a></p>

            {/* CTA — blindspot */}
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Get your free AI citation score — 48-hour turnaround</a>

            <h3>The Earned-Trust Premium on prompt mediation (Chen et al., 2025)</h3>
            <p>Chen et al. (2025) documented a systematic bias inside AI search retrievers toward earned-media corroboration over self-published brand content. The bias compounds at the prompt-mediation layer: when the engine rewrites a user prompt and expands synonyms, the candidate pool tilts toward sources that other indexed pages cite. A press placement, a podcast appearance, or a directory mention raises the candidate-pool weight on every rewritten variant of the prompt. The operator with a healthy earned-media footprint clears more AEO prompts than the operator with an identical content footprint and zero third-party mentions. Earned media is an AEO lever, not a PR vanity metric. Check where you stand: <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free Blind Spot Scan.</a></p>

            {/* CTA — calendly */}
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Get your free AI citation score — 48-hour turnaround</a>

            <div className="ae-quote not-prose">
              <p><strong className="named-thesis">The Synonym Multiplier: content that matches two or three natural-language phrasings of the same intent qualifies for more retrieval candidates and is cited across more AEO prompt variants than single-phrasing content, which is why synonym-bridging inside SUBSTRATE chunks is a structural lift and not a style choice (Aggarwal et al., KDD 2024).</strong> <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Schedule a free 30-min call.</a></p>
            </div>

            {/* === Section 4: Prompt Types === */}
            <span className="ae-section-label" id="prompt-types">The Six Types</span>
            <h2>The Six AEO Prompt Types Every Operator Tracks</h2>

            <h3>Type 1: Definitional prompts</h3>
            <p>Definitional prompts open with &ldquo;what is,&rdquo; &ldquo;define,&rdquo; or &ldquo;explain.&rdquo; They produce the highest-leverage citations because the engine extracts the first clean definition it finds and credits the source. Operators that publish a definitional opener on every service page win the definitional prompts in their category. The retrievers reward clarity over creativity at the definitional layer.</p>

            <h3>Type 2: Comparative prompts</h3>
            <p>Comparative prompts take the form &ldquo;X vs Y&rdquo; or &ldquo;is X better than Y.&rdquo; The retrievers favor content that addresses both sides of the comparison with named criteria, side-by-side structure, and inline citations. Comparison tables earn outsized lift because the rendering format maps cleanly to the retriever&rsquo;s extraction pattern. A single comparative article published with a clean comparison table can clear a dozen prompt variants in the same week. Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> for a custom strategy.</p>

            {/* CTA — text */}
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Get your free AI citation score — 48-hour turnaround</a>

            <h3>Type 3: Recommendation prompts</h3>
            <p>Recommendation prompts read &ldquo;best X for Y,&rdquo; &ldquo;top-rated X,&rdquo; or &ldquo;which X should I pick.&rdquo; The retrievers weight earned-media corroboration heavily on recommendation prompts because the engine is being asked to make a judgment call and looks for third-party validation. Recommendation prompts are where Chen et al. (2025) earned-media bias is most visible: a brand with zero third-party mentions almost never clears a recommendation prompt regardless of self-published content quality. Questions? Call <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.</p>

            {/* CTA — email */}
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Get your free AI citation score — 48-hour turnaround</a>

            <h3>Type 4: Local intent prompts</h3>
            <p>Local intent prompts include a geographic modifier: &ldquo;near me,&rdquo; &ldquo;in [city],&rdquo; &ldquo;[city] [service],&rdquo; or scenario-based location phrasing. Gemini and Google AI Overviews handle these most natively because they share the Google entity graph. ChatGPT and Perplexity resolve local intent through indexed sources rather than a live geo-graph, so structural local signals — LocalBusiness schema, NAP consistency, city-named landing pages — carry disproportionate weight. The same physical business can be cited locally on Gemini and invisible locally on ChatGPT if the structural signals diverge between the two surfaces. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Secure your territory before a competitor does.</a></p>

            {/* CTA — calendly */}
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Get your free AI citation score — 48-hour turnaround</a>

            <h3>Type 5: Problem-led prompts</h3>
            <p>Problem-led prompts start with the symptom: &ldquo;how do I fix,&rdquo; &ldquo;why is my X doing Y,&rdquo; &ldquo;what causes Z.&rdquo; These prompts compress consideration the hardest — the user is in active problem-solving mode and the brand cited as the solution wins the next action. Service pages that lead with the problem the customer is searching with, not the service the operator wants to sell, clear problem-led prompts at materially higher rates than service-led copy. <a href="https://theanswerengine.ai/blindspot" className="cta-inline">See your AI visibility score — free.</a></p>

            {/* CTA — blindspot */}
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Get your free AI citation score — 48-hour turnaround</a>

            <h3>Type 6: Transactional prompts</h3>
            <p>Transactional prompts include pricing, hiring, scheduling, and purchase intent: &ldquo;how much does X cost,&rdquo; &ldquo;hire an X,&rdquo; &ldquo;X near me with availability tomorrow.&rdquo; The citation threshold on transactional prompts is the highest of the six types because the engine is making a judgment that maps to user money. Operators who publish transparent pricing, named availability windows, and direct booking links clear transactional prompts at far higher rates than operators that gate that data behind a contact form. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book your free consultation here.</a></p>

            {/* CTA — territory */}
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Get your free AI citation score — 48-hour turnaround</a>

            <div className="not-prose overflow-x-auto my-8">
              <table className="ae-comparison-table w-full text-sm">
                <thead>
                  <tr>
                    <th>Prompt Type</th>
                    <th>Example Surface Form</th>
                    <th>Highest-Yield Lever</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Definitional</strong></td>
                    <td>&ldquo;What is X&rdquo;</td>
                    <td>Definition-first H3 in the first 150 tokens</td>
                  </tr>
                  <tr>
                    <td><strong>Comparative</strong></td>
                    <td>&ldquo;X vs Y&rdquo;</td>
                    <td>Side-by-side comparison table with named criteria</td>
                  </tr>
                  <tr>
                    <td><strong>Recommendation</strong></td>
                    <td>&ldquo;Best X for Y&rdquo;</td>
                    <td>Earned-media corroboration + named expert author</td>
                  </tr>
                  <tr>
                    <td><strong>Local intent</strong></td>
                    <td>&ldquo;X near me / in [city]&rdquo;</td>
                    <td>LocalBusiness schema + city-named landing pages</td>
                  </tr>
                  <tr>
                    <td><strong>Problem-led</strong></td>
                    <td>&ldquo;How do I fix X&rdquo;</td>
                    <td>Problem-first opener + bounded answer chunks</td>
                  </tr>
                  <tr>
                    <td><strong>Transactional</strong></td>
                    <td>&ldquo;Hire X / X pricing&rdquo;</td>
                    <td>Transparent pricing + availability + booking link</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>See <a href="/concepts/six-prompt-types" className="concept-link">The Six Prompt Types</a> for the full taxonomy and the operator template TAE uses to build the library from a category-vocabulary inventory. Contact us at <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>

            {/* === Section 5: Prompt Library === */}
            <span className="ae-section-label" id="prompt-library">Measurement</span>
            <h2>The AEO Prompt Library: How TAE Measures</h2>

            <h3>Why the prompt library is the only credible AEO scoreboard</h3>
            <p><strong className="named-thesis">The Prompt Library: a fixed set of 20 to 50 measured prompts is the only credible AEO scoreboard, because retrievers re-cite winning passages across query variants and decay attribution for sources that stop publishing, so movement is only visible against a stable measurement baseline (GEO-SFE, 2026).</strong> Operators that measure citation against a rotating set of prompts cannot tell whether the brand is gaining ground or losing it — the noise floor is too high. A fixed library is the only way to detect compounding versus drift. The Answer Engine runs every operator engagement against a 20-prompt minimum library that does not change for the duration of the engagement.</p>

            {/* CTA — text */}
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Get your free AI citation score — 48-hour turnaround</a>

            <h3>How to build the library from scratch</h3>
            <p>Start with the operator&rsquo;s category vocabulary — every service offered and every phrasing a customer uses to describe the problem the service solves. Map each service to all six prompt types. Add two or three synonym variants per prompt to test the prompt-mediation rewrite layer. A six-service operator with full coverage produces 36 prompts before deduplication and 20 to 30 prompts after consolidation. The library is then frozen for the engagement. Movement is measured against the frozen baseline, monthly, across all four major engines.</p>

            {/* CTA — email */}
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Get your free AI citation score — 48-hour turnaround</a>

            <h3>Platform parity as the single decision-grade number</h3>
            <p>Each prompt is scored 0 of 4 to 4 of 4 — the number of major LLMs (ChatGPT, Perplexity, Claude, Gemini) that cited the brand for that exact prompt. Aggregated across the library, platform parity is the single most decision-grade AEO number an operator can hold. The Answer Engine&rsquo;s own platform parity score on AEO-related prompts is 4 of 4 across the four major engines. The metric matters because the retrievers diverge: a brand cited only by Perplexity has a brittle position because Perplexity weights earned media heavily and one news cycle can swing the result. Cross-platform parity is what proves the underlying structural quality is sound.</p>

            <h3>Why the library has to run monthly</h3>
            <p>AEO citations are sticky once earned and erode if abandoned. A passage that earns a citation in month two will typically retain that citation through month six — if the cadence of publishing, earned-media corroboration, and schema maintenance continues. Stop publishing and the same passage drops out of the candidate pool within 60 to 90 days. Monthly re-runs of the fixed library reveal compounding (the goal) or decay (a cadence problem) before either gets out of hand. Operators that measure quarterly catch decay too late to recover the lost ground inside the same calendar year. Find your gaps with a <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free AERO scan.</a></p>

            {/* CTA — calendly */}
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Get your free AI citation score — 48-hour turnaround</a>

            <div className="not-prose overflow-x-auto my-8">
              <table className="ae-comparison-table w-full text-sm">
                <thead>
                  <tr>
                    <th>If You Want To...</th>
                    <th>The Prompt Library Step Is...</th>
                    <th>The Output Is...</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Build a starter library</td>
                    <td>Inventory category vocabulary + map to 6 prompt types</td>
                    <td>20&ndash;36 raw prompts before dedup</td>
                  </tr>
                  <tr>
                    <td>Test prompt mediation</td>
                    <td>Add 2&ndash;3 synonym variants per prompt</td>
                    <td>50&ndash;100 variant prompts to cross-check</td>
                  </tr>
                  <tr>
                    <td>Score baseline parity</td>
                    <td>Run library across ChatGPT, Perplexity, Claude, Gemini</td>
                    <td>0-of-4 to 4-of-4 parity score per prompt</td>
                  </tr>
                  <tr>
                    <td>Detect compounding</td>
                    <td>Re-run frozen library monthly</td>
                    <td>Per-prompt citation curve over time</td>
                  </tr>
                  <tr>
                    <td>Catch decay before it lands</td>
                    <td>Flag any prompt that drops 1+ parity in 60 days</td>
                    <td>Refresh queue ranked by lost prompts</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* CTA — blindspot */}
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Get your free AI citation score — 48-hour turnaround</a>

            {/* CTA — territory */}
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Get your free AI citation score — 48-hour turnaround</a>

            <h3>The Origin Protocol mapping</h3>
            <p>Every prompt the library tracks is mapped to a SUBSTRATE-engineered passage on the operator&rsquo;s site — definition-first H3 for definitional prompts, comparison table for comparative prompts, earned-media-corroborated bio for recommendation prompts, LocalBusiness schema and city-named pages for local intent prompts, problem-first opener for problem-led prompts, transparent pricing block for transactional prompts. The mapping is what turns the library from a measurement scoreboard into an action queue. Movement on a prompt traces back to a specific passage. Decay on a prompt traces back to a specific cadence gap. The library is decision-grade because every score has an addressable cause. Send your questions to <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>

            {/* CTA — email */}
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Get your free AI citation score — 48-hour turnaround</a>

            {/* === Cheat sheet section === */}
            <span className="ae-section-label">Quick Reference</span>
            <h2>The AEO Prompt Cheat Sheet</h2>

            <div className="not-prose overflow-x-auto my-6">
              <table className="ae-comparison-table w-full text-sm">
                <thead>
                  <tr>
                    <th>Question</th>
                    <th>One-Sentence Answer</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>What is an AEO prompt?</strong></td>
                    <td>The natural-language query a user submits to an AI engine that triggers retrieval, scoring, and citation.</td>
                  </tr>
                  <tr>
                    <td><strong>How is it different from a keyword?</strong></td>
                    <td>3&ndash;5x longer, interrogative-skewed, scored on passage match rather than keyword density.</td>
                  </tr>
                  <tr>
                    <td><strong>Why does prompt mediation matter?</strong></td>
                    <td>The engine rewrites the prompt into synonymous queries before retrieval; synonym coverage = more candidates.</td>
                  </tr>
                  <tr>
                    <td><strong>How many should I track?</strong></td>
                    <td>20 to 50, fixed, re-run monthly across all four major engines.</td>
                  </tr>
                  <tr>
                    <td><strong>What metric matters most?</strong></td>
                    <td>Platform parity: 0-of-4 to 4-of-4 LLMs citing the brand per prompt.</td>
                  </tr>
                  <tr>
                    <td><strong>What does TAE do with it?</strong></td>
                    <td>Maps every prompt to a SUBSTRATE passage and a cadence schedule via the Origin Protocol.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* CTA — calendly */}
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Get your free AI citation score — 48-hour turnaround</a>

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
                <p className="ae-author-bio" style={{ marginTop: 8, fontSize: '0.875rem', color: 'rgba(229,226,225,0.65)', lineHeight: 1.6 }}>Justin Borges is the founder of The Answer Engine, a GEO/AEO firm that helps businesses get cited by ChatGPT, Perplexity, Claude, Gemini, and Google AI Overviews. TAE&rsquo;s own site runs against the AEO prompt library described in this article &mdash; 1.14M+ monthly impressions, 4 of 4 LLMs cited.</p>
              </div>
            </div>

            {/* CTA Block */}
            <div className="ae-cta-block not-prose my-16">
              <h3>Answer Engine Optimization Services — See Your AI Citation Score Free</h3>
              <p>Every month 2,900 businesses search for ways to improve their brand visibility in AI search engines. The Answer Engine&apos;s free Blind Spot Report gives you your exact citation score across ChatGPT, Perplexity, and Google AI — and shows you what to fix.</p>
              <a href="https://theanswerengine.ai/blindspot" className="ae-cta-primary">Get Your Free AI Citation Score →</a>
              <div style={{ marginTop: '16px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <a href="tel:+12134442229" className="ae-cta-secondary">(213) 444-2229</a>
                <a href="https://calendly.com/theanswerengine-support/30min" className="ae-cta-secondary">Book Free Strategy Call</a>
              </div>
            </div>

            {/* FAQ */}
            <span className="ae-section-label" id="faq">FAQ</span>
            <h2>Frequently Asked Questions</h2>

            <details className="ae-faq-item border border-white/[0.08] p-5 mb-3 bg-white/[0.02]">
              <summary className="cursor-pointer font-headline font-black uppercase tracking-tight text-white text-base">What is an AEO prompt?</summary>
              <p className="faq-answer mt-3 text-gray-300">An AEO prompt is the natural-language query a user types or speaks into an AI search engine &mdash; ChatGPT, Perplexity, Claude, Gemini, or Google AI Overviews &mdash; that triggers the retrieval, scoring, and citation pipeline. The AEO prompt is the unit of measurement in Answer Engine Optimization: a brand is either cited inside the generated answer for a given prompt or it is not. The AEO prompt replaces the SEO keyword as the operating measurement unit because the user query has shifted from a 2-to-3-word search string to a full natural-language question.</p>
            </details>

            <details className="ae-faq-item border border-white/[0.08] p-5 mb-3 bg-white/[0.02]">
              <summary className="cursor-pointer font-headline font-black uppercase tracking-tight text-white text-base">How is an AEO prompt different from an SEO keyword?</summary>
              <p className="faq-answer mt-3 text-gray-300">An AEO prompt is a full natural-language question that compresses awareness, consideration, and intent into a single retrieval event. An SEO keyword is a 2-to-3-word search string mapped to a ranked list of links. AEO prompts run 3 to 5 times longer than the SEO keyword for the same underlying intent, skew interrogative (who, what, how, why, best, cheapest), and trigger a retrieval pipeline that scores passages on extractability rather than scoring pages on backlinks. Aggarwal et al. (KDD 2024) measured that content optimized for natural-language passage match outperformed keyword-density content across all three generative engines they tested. <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Run your free AI Blind Spot Scan.</a></p>
            </details>

            <details className="ae-faq-item border border-white/[0.08] p-5 mb-3 bg-white/[0.02]">
              <summary className="cursor-pointer font-headline font-black uppercase tracking-tight text-white text-base">What types of AEO prompts should I track?</summary>
              <p className="faq-answer mt-3 text-gray-300">Six prompt types cover the AEO measurement surface: definitional (&ldquo;what is X&rdquo;), comparative (&ldquo;X vs Y&rdquo;), recommendation (&ldquo;best X for Y&rdquo;), local intent (&ldquo;X near me&rdquo; or &ldquo;X in [city]&rdquo;), problem-led (&ldquo;how do I fix X&rdquo;), and transactional (&ldquo;X pricing&rdquo; or &ldquo;hire an X&rdquo;). A defensible AEO prompt library covers all six types for the operator&rsquo;s category, with 20 to 50 total prompts depending on territory complexity. Each prompt is logged monthly across ChatGPT, Perplexity, Claude, and Gemini.</p>
            </details>

            <details className="ae-faq-item border border-white/[0.08] p-5 mb-3 bg-white/[0.02]">
              <summary className="cursor-pointer font-headline font-black uppercase tracking-tight text-white text-base">How many AEO prompts should I measure?</summary>
              <p className="faq-answer mt-3 text-gray-300">Twenty to fifty AEO prompts is the working range for a single operator engagement. Below 20 prompts the sample is too small to detect citation movement against noise. Above 50 prompts the measurement cadence becomes operationally heavy without proportional signal gain. The Answer Engine runs a fixed 20-prompt minimum library on every operator engagement, expanded to 30 to 50 prompts for complex territories or multi-service operators. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a free 30-minute strategy call.</a></p>
            </details>

            <details className="ae-faq-item border border-white/[0.08] p-5 mb-3 bg-white/[0.02]">
              <summary className="cursor-pointer font-headline font-black uppercase tracking-tight text-white text-base">Can I influence which AEO prompts include my brand?</summary>
              <p className="faq-answer mt-3 text-gray-300">Yes. The AEO model rewrites the user prompt into multiple synonymous retrieval queries before pulling candidate passages. Content that uses two or three natural-language phrasings of the same concept qualifies for more retrieval candidates than content using a single phrasing. The mechanism is documented by Aggarwal et al. (KDD 2024) as prompt mediation: a user query like &ldquo;best plumber in Austin&rdquo; is internally expanded to include &ldquo;top plumbers Austin,&rdquo; &ldquo;highly rated Austin plumbing,&rdquo; and similar variants. Brands that synonym-bridge their key terms inside SUBSTRATE-engineered chunks compound across more prompts than brands that publish single-phrasing content.</p>
            </details>

            <details className="ae-faq-item border border-white/[0.08] p-5 mb-3 bg-white/[0.02]">
              <summary className="cursor-pointer font-headline font-black uppercase tracking-tight text-white text-base">Do AEO prompts work the same across ChatGPT, Perplexity, Claude, and Gemini?</summary>
              <p className="faq-answer mt-3 text-gray-300">The prompt-mediation architecture is shared across every major engine, but the rewrite patterns and citation thresholds diverge. Perplexity expands prompts most aggressively into sub-questions and pulls 6 to 12 sources per answer. ChatGPT rewrites for Bing-style retrieval and weights structured-data sources. Claude weights attribution-chain content with named authors. Gemini and Google AI Overviews lean on the Google entity graph for prompt resolution. The same underlying AEO prompt may surface a brand on Perplexity and miss on ChatGPT &mdash; measurement has to be per engine, not aggregated. Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> to get started.</p>
            </details>

            {/* CTA — blindspot */}
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Get your free AI citation score — 48-hour turnaround</a>

            {/* Related */}
            <span className="ae-section-label">Continue Reading</span>
            <h2>Related AEO Concepts</h2>

            <ul>
              <li><Link href="/blog/aeo-models-how-ai-search-picks-sources">AEO Models: How AI Search Picks Sources</Link></li>
              <li><Link href="/blog/aeo-grader">AEO Grader: How to Score Your AI Search Visibility</Link></li>
              <li><Link href="/blog/anatomy-of-an-ai-citation">Anatomy of an AI Citation</Link></li>
              <li><Link href="/blog/aeo-vs-seo">AEO vs SEO: What is the Difference?</Link></li>
              <li><Link href="/blog/answer-engine-optimization-aeo-guide">Answer Engine Optimization: The Complete Guide</Link></li>
            </ul>

            {/* CTA — calendly */}
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Get your free AI citation score — 48-hour turnaround</a>

          </div>

          {/* Final CTA */}
          <section className="ae-final-cta not-prose">
            <div className="ae-final-cta-inner">
              <h2 className="text-2xl sm:text-3xl font-black mb-4 text-white font-headline uppercase tracking-tighter">
                Your Competitors Are Claiming AI Search Territory Right Now
              </h2>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                2,900 businesses/month search for ways to improve their AI search visibility. The Answer Engine builds the exact authority signals that get you cited — and keeps competitors out of your market. Free blind spot scan. One business per market.
              </p>
              <a
                href="https://theanswerengine.ai/blindspot"
                className="inline-flex items-center justify-center gap-2 bg-[#F27D24] text-black font-black px-10 py-4 tracking-tighter hover:translate-y-[2px] transition-transform font-headline uppercase"
              >
                Get Your Free Blind Spot Report →
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
