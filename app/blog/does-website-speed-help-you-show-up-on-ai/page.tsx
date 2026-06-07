import type { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';

const TITLE = 'Does Site Speed Help AI Search? | The Answer Engine';
const DESCRIPTION = 'A 107,000-page study shows website speed has near-zero correlation with AI citation rates. Run the free AEO Grader to see what actually moves your visibility.';
const URL = 'https://theanswerengine.ai/blog/does-website-speed-help-you-show-up-on-ai';
const IMAGE = 'https://theanswerengine.ai/blog/does-website-speed-help-you-show-up-on-ai.webp';
const PUBLISHED = '2026-04-16';
const MODIFIED = '2026-06-07';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: 'website speed ai search, does page speed affect ai recommendations, core web vitals ai visibility, does site speed matter for chatgpt, ai search ranking factors, what makes ai recommend a business, website speed perplexity, ai crawler technical requirements, page speed vs content quality ai, how to show up on ai search',
  alternates: { canonical: URL },
  openGraph: {
    title: 'Does Website Speed Help You Show Up on AI Search?',
    description: DESCRIPTION,
    url: URL,
    type: 'article',
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
    authors: ['Justin Borges'],
    images: [{ url: IMAGE, width: 1200, height: 630, alt: 'Does Website Speed Help You Show Up on AI Search?' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Does Website Speed Help You Show Up on AI Search?',
    description: DESCRIPTION,
    images: [IMAGE],
  },
};

export default function WebsiteSpeedAISearchPage() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `${URL}#article`,
        headline: 'Does Website Speed Help You Show Up on AI Search?',
        description: 'A technical look at why website speed is almost statistical noise for AI citation outcomes, what AI crawlers actually evaluate, and where to spend engineering hours to move the needle on ChatGPT, Perplexity, Claude, Gemini, and AI Overviews.',
        image: IMAGE,
        datePublished: PUBLISHED,
        dateModified: MODIFIED,
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
          knowsAbout: ['Answer Engine Optimization', 'AI Crawlers', 'Core Web Vitals', 'LLM Visibility', 'Retrieval Augmented Generation'],
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
        keywords: 'website speed ai search, core web vitals ai, does site speed matter for chatgpt, ai crawler technical requirements, gptbot perplexitybot claudebot',
        about: [
          { '@type': 'Thing', name: 'Website Speed' },
          { '@type': 'Thing', name: 'Core Web Vitals' },
          { '@type': 'Thing', name: 'AI Citation' },
          { '@type': 'Thing', name: 'Answer Engine Optimization' },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${URL}#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Does website speed affect whether AI recommends my business?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Barely. A 107,000-page study found Core Web Vitals correlate at just -0.12 to -0.18 with AI citation frequency, statistical noise in practical terms. Content depth and topical authority have 4.2 times more influence on whether ChatGPT, Perplexity, Claude, and Gemini cite a business. Site speed clears a crawl-timeout floor; everything above that floor is unrelated to citation outcomes.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do AI crawlers like GPTBot care about page load time?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. GPTBot, PerplexityBot, and ClaudeBot do not render JavaScript and do not measure user-experience metrics. They extract raw HTML text. As long as the server responds inside the crawl timeout window, page load time is irrelevant to citation eligibility. The crawlers that feed generative engines are text extractors, not browsers.',
            },
          },
          {
            '@type': 'Question',
            name: 'What actually moves AI citation rates if speed does not?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Content depth and topical authority (4.2x more impact than speed), content freshness (pages updated inside 90 days earn 28 percent more citations), structured-data markup, named-author attribution, and inline quotations and statistics. Aggarwal et al. (KDD 2024) measured a 37 percent citation lift from added quotations and a 22 percent lift from added statistics. Zhang et al. (2026) measured a 57 percent influence premium on definition-first openings.',
            },
          },
          {
            '@type': 'Question',
            name: 'My developer said improving Core Web Vitals will help AI. Are they wrong?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Your developer is conflating two pipelines. Core Web Vitals are a Google ranking signal that measures user experience inside a rendered browser. AI crawlers bypass that pipeline entirely because they pull raw HTML without loading scripts, images, or stylesheets. Good Core Web Vitals help Google rankings, and Google-ranked content gets pulled into training and live citations more often, but the direct lever on AI citation is content structure, not page speed.',
            },
          },
          {
            '@type': 'Question',
            name: 'Does a slow website hurt my chances with AI search engines?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Only when server response is extreme, roughly 20 to 30 seconds or more. Crawlers carry a crawl budget and a timeout threshold; pages that exceed the threshold get marked uncrawlable. Below that ceiling, a 2-second page and a 0.5-second page produce identical AI citation outcomes. Site speed is a floor, not a ranking lever.',
            },
          },
          {
            '@type': 'Question',
            name: 'Should I fix my website speed at all?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, for the right reasons. Site speed drives conversion rates, human-visitor experience, and Google SEO rankings, which indirectly feed AI surfaces because Google-ranked pages are over-represented in LLM training data and live retrieval. The mistake is allocating engineering hours to Core Web Vitals when those hours should be going to bounded-chunk content production, schema markup, and named-author attribution.',
            },
          },
          {
            '@type': 'Question',
            name: 'How do I measure whether speed is moving AI citations on my site?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Run a fixed prompt library against ChatGPT, Perplexity, Claude, Gemini, Google AI Overviews, and Bing Copilot monthly, the same way The Answer Engine Proof Ledger does. Log citation appearances per engine, per query, per month. Improve site speed in isolation across one quarter and compare. The 107K-page benchmark has already run that experiment at scale; the result is that speed-only optimization does not move the citation count.',
            },
          },
        ],
      },
      {
        '@type': 'ProfessionalService',
        '@id': 'https://theanswerengine.ai/#service',
        name: 'The Answer Engine',
        url: 'https://theanswerengine.ai',
        telephone: '+1-213-444-2229',
        email: 'support@theanswerengine.ai',
        priceRange: '$$$',
        areaServed: { '@type': 'Country', name: 'United States' },
        address: { '@type': 'PostalAddress', addressLocality: 'Los Angeles', addressRegion: 'CA', addressCountry: 'US' },
        founder: {
          '@type': 'Person',
          name: 'Justin Borges',
          sameAs: ['https://linkedin.com/in/justinborges'],
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
        name: 'Does Website Speed Help You Show Up on AI Search?',
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
          { '@type': 'ListItem', position: 3, name: 'Does Website Speed Help You Show Up on AI Search?', item: URL },
        ],
      },
    ],
  };

  return (
    <>
      <Script
        id="website-speed-ai-search-schema"
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
            <span className="text-gray-400">Website Speed and AI Search</span>
          </nav>

          {/* Hero */}
          <header className="ae-article-hero mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-white/[0.04] border border-white/[0.08]">
              <span className="font-mono text-xs uppercase tracking-widest text-[#F27D24]">AEO Myth Busters Series</span>
            </div>

            <h1 className="font-headline font-black uppercase tracking-tighter text-3xl sm:text-4xl lg:text-5xl text-white leading-[1.05] mb-6">
              DOES WEBSITE SPEED HELP YOU SHOW UP ON AI SEARCH?
            </h1>

            <div className="article-summary bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/[0.08] p-6 mb-8">
              <p className="font-body text-lg text-white leading-relaxed">
                <strong>Website speed has near-zero correlation with AI citation outcomes across a 107,000-page benchmark, because the crawlers that feed ChatGPT, Perplexity, Claude, and Gemini do not render JavaScript, do not load resources, and do not score user-experience metrics.</strong> Core Web Vitals correlate at -0.12 to -0.18 with citation frequency &mdash; statistical noise. Content depth and topical authority outperform speed by 4.2x as a citation lever. Site speed clears a crawl-timeout floor measured around 20 to 30 seconds; above that floor, the citation curve flattens. This analysis applies Aggarwal et al. (KDD 2024), Zhang et al. (2026), the GEO-SFE benchmark (2026), and Chen et al. (2025) against 16 months of Answer Engine client engagements running fixed prompt libraries across four LLMs plus Google AI Overviews.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-gray-400 font-mono">
              <span>11 MIN READ</span>
              <span>&middot;</span>
              <span>UPDATED JUNE 2026</span>
              <span>&middot;</span>
              <span>BY JUSTIN BORGES</span>
            </div>
          </header>

          {/* Stats Grid */}
          <div className="ae-stats-grid not-prose mb-10">
            <div className="ae-stat-card">
              <div className="ae-stat-emoji">&#128202;</div>
              <div className="ae-stat-value ae-accent">&minus;0.15</div>
              <div className="ae-stat-label stat-block">Average correlation between Core Web Vitals and AI citation frequency across a 107,000-page benchmark</div>
            </div>
            <div className="ae-stat-card">
              <div className="ae-stat-emoji">&#9889;</div>
              <div className="ae-stat-value ae-accent">4.2x</div>
              <div className="ae-stat-label stat-block">Content depth and topical authority impact vs site speed on AI citation outcomes</div>
            </div>
            <div className="ae-stat-card">
              <div className="ae-stat-emoji">&#128260;</div>
              <div className="ae-stat-value ae-accent">+28%</div>
              <div className="ae-stat-label stat-block">Citation lift on pages updated inside a 90-day window vs stale content</div>
            </div>
            <div className="ae-stat-card">
              <div className="ae-stat-emoji">&#128683;</div>
              <div className="ae-stat-value ae-accent">0 ms</div>
              <div className="ae-stat-label stat-block">JavaScript rendering time inside GPTBot, PerplexityBot, and ClaudeBot &mdash; they do not run scripts at all</div>
            </div>
          </div>

          {/* Cheat Sheet TOC */}
          <div className="ae-cheat-sheet not-prose mb-12">
            <div className="ae-cheat-sheet-title">In This Article</div>
            <table>
              <tbody>
                <tr>
                  <td><a href="#what-speed-means" className="text-[#F27D24] hover:underline">1.</a></td>
                  <td><a href="#what-speed-means" className="text-gray-300 hover:text-white">What Website Speed Means Inside AI Search</a></td>
                </tr>
                <tr>
                  <td><a href="#how-crawlers-read" className="text-[#F27D24] hover:underline">2.</a></td>
                  <td><a href="#how-crawlers-read" className="text-gray-300 hover:text-white">How AI Crawlers Actually Read Your Page</a></td>
                </tr>
                <tr>
                  <td><a href="#research-says" className="text-[#F27D24] hover:underline">3.</a></td>
                  <td><a href="#research-says" className="text-gray-300 hover:text-white">What the Research Actually Says</a></td>
                </tr>
                <tr>
                  <td><a href="#tae-method" className="text-[#F27D24] hover:underline">4.</a></td>
                  <td><a href="#tae-method" className="text-gray-300 hover:text-white">What TAE Does Instead of Chasing Speed</a></td>
                </tr>
                <tr>
                  <td><a href="#investment-hierarchy" className="text-[#F27D24] hover:underline">5.</a></td>
                  <td><a href="#investment-hierarchy" className="text-gray-300 hover:text-white">Where to Spend Your Engineering Hours</a></td>
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
              <p><strong className="named-thesis">The Speed-Citation Gap: website performance metrics measure rendered user experience, while AI citation eligibility is decided on raw HTML extraction &mdash; which is why Core Web Vitals correlate at -0.12 to -0.18 with citation frequency across a 107,000-page benchmark and why every additional engineering hour spent compressing Largest Contentful Paint produces no measurable AI citation lift.</strong> The implication is operational. Site speed is a floor, not a lever. Once the server clears the crawl-timeout ceiling, additional speed buys conversion and human UX wins but does not buy citation share inside ChatGPT, Perplexity, Claude, Gemini, Google AI Overviews, or Bing Copilot. The actual levers that move AI visibility &mdash; bounded chunks, definition-first openings, named-author attribution, full schema stack &mdash; live inside the content production process, not the front-end performance budget. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Check your territory availability before a competitor claims your market.</a></p>
            </div>

            {/* Section 1 — What speed means */}
            <span className="ae-section-label" id="what-speed-means">Definition</span>
            <h2>What Website Speed Means Inside AI Search</h2>

            <h3>The plain-language definition</h3>
            <p>Website speed is the elapsed time between a user&apos;s page request and the moment that page is usable inside a rendered browser, measured through Google&apos;s Core Web Vitals stack &mdash; Largest Contentful Paint, Cumulative Layout Shift, Interaction to Next Paint &mdash; and supporting signals such as Time to First Byte. Site speed exists to score user experience for human visitors. AI search visibility &mdash; also called AEO, AI citation surface, or LLM visibility &mdash; is decided on a different axis entirely: whether retrieval-augmented generation pipelines inside generative engines extract and cite the page when answering a user query. The two axes touch only at the crawl-timeout floor. Run the free <a href="https://theanswerengine.ai/blindspot" className="cta-inline">AERO Blind Spot Scan</a> to see your current citation score before tuning anything else.</p>

            <h3>Where speed is measured for AI vs Google</h3>
            <p>Google measures site speed inside a rendering engine that loads JavaScript, evaluates layout shifts, and times the first interaction. Generative engines do not. GPTBot, PerplexityBot, and ClaudeBot pull raw HTML and parse the static text inside the source markup. Google AI Overviews shares signal with Googlebot, which means speed reaches that surface indirectly through the Google ranking layer &mdash; but the direct AI surfaces evaluate text extractability, not render performance. The measurement substrate is different, which is the entire reason the citation correlation collapses. Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> to walk through which surfaces are pulling your content today.</p>

            <h3>Why the honest answer is mostly no</h3>
            <p><strong className="named-thesis">The Conflation Cost: every engineering hour reallocated from content production to Core Web Vitals on the theory that speed lifts AI citation produces zero measured lift on the AI surface and forfeits the lift that the same hour would have produced on a bounded-chunk H3 section or a schema stack &mdash; which is why the speed-for-AI conflation is the single most expensive misallocation in operator budgets right now.</strong> The honest answer to the headline question is mostly no, with one exception: a site so slow it triggers crawler timeouts forfeits citation eligibility on the affected URLs. Below that floor, page-speed deltas do not move the citation count. Speak to an AEO specialist at <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> if a developer has quoted a Core Web Vitals project as an AI search lever.</p>

            {/* CTA — blindspot */}
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">&rarr; Run the free AEO Grader on your site now</a>

            {/* Section 2 — How crawlers work */}
            <span className="ae-section-label" id="how-crawlers-read">Mechanism</span>
            <h2>How AI Crawlers Actually Read Your Page</h2>

            <h3>GPTBot, PerplexityBot, ClaudeBot &mdash; no JavaScript rendering</h3>
            <p>AI crawlers pull raw HTML text and parse the static markup into bounded passages for retrieval. GPTBot (OpenAI), PerplexityBot, and ClaudeBot (Anthropic) do not evaluate JavaScript, do not load images or stylesheets, and do not wait for fonts to swap in. The crawlers extract semantic text, evaluate chunk structure, and pass extractable passages to the downstream retrieval index. Render time, layout shift, and interaction latency are invisible inside this pipeline. <strong className="named-thesis">The Crawler Rendering Divide: every AI surface that powers ChatGPT, Perplexity, and Claude operates on a text extractor that ignores client-side rendering entirely, while Google&apos;s pipeline operates on a renderer that evaluates user experience &mdash; which means a single page can score perfectly inside a renderer and citation-blind inside an extractor at the same time.</strong> <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a 30-minute strategy call</a> to see which extractors are reaching your pages today.</p>

            <h3>The crawl timeout ceiling that does matter</h3>
            <p>AI crawlers operate inside a crawl budget and a per-request timeout window. Server response times beyond roughly 20 to 30 seconds get classified as uncrawlable and the URL drops out of the citation candidate set. This is the only speed dimension that affects AI citation eligibility, and it is a binary threshold rather than a gradient. A page that responds in 2 seconds and a page that responds in 0.5 seconds produce identical citation outcomes; a page that hangs for 45 seconds produces zero citations because the crawler abandons the request. Site speed clears a floor; it does not climb a ladder. Reach <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> for a crawl-timeout audit if your server has intermittent latency spikes.</p>

            <h3>Server response time vs page load time</h3>
            <p>The relevant speed signal for AI crawlers is server response time at the HTML level &mdash; the elapsed milliseconds between request and first byte of HTML &mdash; not the human-perceived page load time that Core Web Vitals scores. AI extractors begin parsing the moment the HTML stream arrives. Heavy hero images, deferred JavaScript bundles, and font-loading strategies do not appear inside the extractor&apos;s view. Operators that optimize Time to First Byte at the server layer (caching, CDN, server-side rendering of the meaningful content) get the only speed lift that maps to AI citation eligibility, and even that lift only matters at the timeout threshold. Markets fill fast. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Lock in your exclusive territory before a competitor does.</a></p>

            <div className="not-prose overflow-x-auto my-8">
              <table className="ae-comparison-table w-full text-sm">
                <thead>
                  <tr>
                    <th>Crawler</th>
                    <th>Renders JS?</th>
                    <th>Measures Speed?</th>
                    <th>What It Cares About</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Googlebot</strong></td>
                    <td>Yes (eventually)</td>
                    <td>Yes (Core Web Vitals)</td>
                    <td>User experience, authority, relevance, speed</td>
                  </tr>
                  <tr>
                    <td><strong>GPTBot (OpenAI)</strong></td>
                    <td>No</td>
                    <td>No (timeout floor only)</td>
                    <td>Bounded chunks, named-author attribution, semantic HTML</td>
                  </tr>
                  <tr>
                    <td><strong>PerplexityBot</strong></td>
                    <td>No</td>
                    <td>No (timeout floor only)</td>
                    <td>Content freshness, topical depth, inline citations</td>
                  </tr>
                  <tr>
                    <td><strong>ClaudeBot (Anthropic)</strong></td>
                    <td>No</td>
                    <td>No (timeout floor only)</td>
                    <td>Factual content, clean HTML, definition-first openings</td>
                  </tr>
                  <tr>
                    <td><strong>Google AI Mode</strong></td>
                    <td>Yes (shared Googlebot)</td>
                    <td>Indirect via Google rank</td>
                    <td>Same signals as Google + entity clarity</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* CTA — territory */}
            <a href="https://calendly.com/theanswerengine-support/30min" className="ae-cta-inline">&rarr; One client per market &mdash; claim your territory now</a>

            {/* Section 3 — Research */}
            <span className="ae-section-label" id="research-says">Evidence</span>
            <h2>What the Research Actually Says</h2>

            <h3>The 107K-page correlation benchmark</h3>
            <p>The clearest evidence against the speed-for-AI theory comes from large-scale correlation studies on AI citation behavior. Across 107,000 pages benchmarked for citation appearances inside ChatGPT, Perplexity, Claude, and Gemini, Core Web Vitals correlated with AI citation frequency at -0.12 to -0.18 once domain authority and topic relevance were controlled &mdash; statistical noise in practical terms. Site speed registers below the threshold of every other lever measured: content depth, freshness, schema markup, inline citation, and named-author attribution all outperformed page-speed signals by multiples. Text <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> for a walkthrough of the lift table on your live site.</p>

            <h3>Content depth: 4.2x more impact than speed</h3>
            <p>Content depth and topical authority moved AI citation outcomes 4.2 times more than site speed across the same benchmark. The depth signal is composed of bounded-chunk H3 sections, named-author attribution, inline academic citation, and structural extractability. Aggarwal et al. (KDD 2024) measured the citation impact of nine optimization tactics inside generative engines and found that adding inline quotations produced a 37% citation lift and adding statistics produced a 22% lift. Zhang et al. (2026) measured a 57% influence premium on content opening with a plain-language definition. The GEO-SFE benchmark (2026) standardized the source-format extractability scoring axis and measured a 43% lift on lists and tables alongside a 31% attention degradation on passages over 300 words. <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Get your free AI citation report</a> and see which of these lifts your pages capture today.</p>

            <h3>Freshness, schema, and authority signals</h3>
            <p><strong className="named-thesis">The Freshness Lift: pages updated inside a 90-day window earn 28% more AI citations than stale pages with otherwise identical content, because retrieval pipelines weight recency as a quality proxy when no other authority signal differentiates two candidate passages &mdash; which makes monthly publication cadence a higher-yield investment than any front-end performance budget.</strong> Chen et al. (2025) measured a systematic generative-engine bias toward earned media over self-published brand content and a 1.9x premium on named-author attribution with verifiable external profiles. Schema markup &mdash; Article, FAQPage, BreadcrumbList, ProfessionalService, HowTo &mdash; supplies the entity disambiguation that retrieval pipelines use to bind a passage to a verified business. None of these levers respond to page-speed work. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Schedule a free 30-minute call</a> for a full lift audit on your URLs.</p>

            <div className="ae-callout ae-callout-info not-prose">
              <div className="ae-callout-title">The Only Speed Threshold That Matters</div>
              <p>AI crawlers tolerate server responses up to 20 to 30 seconds before classifying a URL as uncrawlable. Below that ceiling, a 2-second page and a 0.5-second page produce identical citation outcomes. Questions on your crawl logs? Call <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> or email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> for a free crawl-timeout review.</p>
            </div>

            {/* CTA — blindspot */}
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">&rarr; Get a free technical AI citation audit for your site</a>

            {/* Section 4 — TAE Method */}
            <span className="ae-section-label" id="tae-method">TAE Method</span>
            <h2>What TAE Does Instead of Chasing Speed</h2>

            <h3>The Origin Protocol &mdash; bounded chunks first</h3>
            <p>The Origin Protocol is The Answer Engine&apos;s production process for engineering content that clears every AEO surface in a single production pass. The first non-negotiable rule is bounded chunks: every H3 section is engineered to 80 to 180 words, self-contained, with no anaphoric reference to surrounding context. The chunk ceiling exists because the GEO-SFE benchmark (2026) measured a 31% attention degradation on passages over 300 words inside retrieval-augmented generation pipelines &mdash; splitting long passages into bounded units restores full extraction accuracy across ChatGPT, Perplexity, Claude, and Gemini. Bounded chunks load no faster than long-form prose; they simply extract cleaner. Reach <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> for the full Protocol checklist.</p>

            <h3>Definition-first H3 openings (+57% per Zhang 2026)</h3>
            <p>The Origin Protocol requires that at least half of every article&apos;s H3 sections open with a plain-language definition of the section subject before expanding. Zhang et al. (2026) measured a 57% influence premium on definition-first content across generative engines because retrieval pipelines reward extractable opening passages with high semantic density. Definitions are the highest-yield opening structure, ahead of statistic-first openers, anecdote-first openers, and question-first openers. The lift is unrelated to page speed and unrelated to any front-end performance work; it is decided inside the first 40 to 80 words of the H3 passage. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a strategy call</a> for a walkthrough on your existing H3 stack.</p>

            <h3>Full schema stack across every article</h3>
            <p>Every Origin Protocol article ships with a six-type schema stack: Article, FAQPage, BreadcrumbList, ProfessionalService, WebPage, and HowTo where applicable. Schema is the entity-disambiguation layer that retrieval pipelines use to bind a citation to a verified business. The Article schema includes a Person author with verifiable sameAs links to external profiles, which captures the 1.9x AEO citation premium Chen et al. (2025) measured under the GEO benchmark. The FAQPage schema lifts featured-snippet and voice-assistant surfaces. None of these schemas affect page speed, and none of them require front-end performance work to deploy. Markets fill fast. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Claim your territory before a competitor does.</a></p>

            <div className="ae-callout ae-callout-orange not-prose">
              <div className="ae-callout-title">The Operator Equation</div>
              <p>Bounded chunks + definition-first openings + full schema stack + named author + monthly fixed-prompt measurement = content that wins the AEO citation surface across every major engine. A perfect Lighthouse score with none of the above ships zero additional citations. Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> for the full Protocol breakdown.</p>
            </div>

            {/* CTA — email */}
            <a href="mailto:support@theanswerengine.ai" className="ae-cta-inline">&rarr; Email support@theanswerengine.ai for a free protocol walkthrough</a>

            {/* Section 5 — Investment Hierarchy */}
            <span className="ae-section-label" id="investment-hierarchy">Decision</span>
            <h2>Where to Spend Your Engineering Hours</h2>

            <h3>When site speed actually matters (the threshold)</h3>
            <p>Site speed earns engineering investment for three reasons that have nothing to do with AI citation: human-visitor conversion rates, Google SEO ranking factors, and crawl-timeout floors. Inside those three frames, every millisecond shaved from Largest Contentful Paint compounds against business outcomes. The investment becomes counterproductive only when it displaces content production hours under the theory that the speed work will lift AI search. If a developer&apos;s scope statement claims site speed will drive ChatGPT or Perplexity visibility, the scope statement is wrong on the AI dimension &mdash; valid on Google, invalid on direct AI surfaces. Call <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> for a scope review before approving a Core Web Vitals project framed as AI work.</p>

            <h3>The AEO-first investment hierarchy</h3>
            <p><strong className="named-thesis">The Investment Hierarchy: every operator budget that allocates engineering hours to AI search should sequence bounded-chunk content production first, schema stack second, named-author attribution third, monthly publication cadence fourth, and front-end performance fifth &mdash; because the citation lift per engineering hour collapses by an order of magnitude after the fourth lever and the speed lever only repays inside the conversion and Google-SEO frames, not the direct AI citation surface.</strong> The hierarchy is sequenced by measured lift per hour. Bounded chunks and schema stack ship the largest citation deltas inside any 30-day window; cadence ships compounding lift over 90 to 180 days; speed pays out on conversion and Google, neither of which is the AI surface. Operators that invert the hierarchy concede citation share on every major engine to operators that sequence correctly. <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Run the free AEO Grader</a> to see exactly where your hierarchy sits today.</p>

            <h3>How to measure both for a year</h3>
            <p>Set up two measurement streams in parallel. Stream one tracks human-visitor and Google outcomes &mdash; Core Web Vitals dashboards, Google Search Console rank reports, conversion-rate analytics. Stream two tracks the direct AI citation surface &mdash; a fixed prompt library of 20 to 40 queries run monthly against ChatGPT, Perplexity, Claude, Gemini, Google AI Overviews, and Bing Copilot, logged into a Proof Ledger format that records citation appearances per engine, per query, per month. The two streams move independently. Speed-only optimization moves stream one. Bounded-chunk content production moves stream two. The 107K-page benchmark already proves the independence at scale; running it on a single operator&apos;s site over 12 months reproduces the result. One client per city. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">See if your market is still available.</a></p>

            <div className="not-prose overflow-x-auto my-6">
              <table className="ae-comparison-table w-full text-sm">
                <thead>
                  <tr>
                    <th>If You Want To...</th>
                    <th>The Right Lever Is...</th>
                    <th>Highest-Yield Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Lift AI citation rate on ChatGPT, Perplexity, Claude</td>
                    <td>Bounded-chunk content</td>
                    <td>Rewrite H3s to 80&ndash;180 words, definition-first openings</td>
                  </tr>
                  <tr>
                    <td>Capture Google AI Overviews</td>
                    <td>Full schema stack</td>
                    <td>Add Article + HowTo + FAQPage + LocalBusiness schemas</td>
                  </tr>
                  <tr>
                    <td>Lift human-visitor conversion</td>
                    <td>Page speed + UX polish</td>
                    <td>Compress LCP, fix CLS, defer non-critical JS</td>
                  </tr>
                  <tr>
                    <td>Lift Google SEO rank</td>
                    <td>Core Web Vitals + content quality</td>
                    <td>Hit green CWV thresholds, publish depth content</td>
                  </tr>
                  <tr>
                    <td>Clear AI crawl-timeout floor</td>
                    <td>Server response time</td>
                    <td>Cache HTML, use CDN, fix slow server-side rendering</td>
                  </tr>
                  <tr>
                    <td>Measure AI citation progress</td>
                    <td>Fixed prompt library</td>
                    <td>Run 20&ndash;40 prompts monthly across 6 engines, log to Proof Ledger</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* CTA — calendly */}
            <a href="https://calendly.com/theanswerengine-support/30min" className="ae-cta-inline">&rarr; Book your free 30-minute AEO strategy call</a>

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
                <p className="ae-author-bio" style={{ marginTop: 8, fontSize: '0.875rem', color: 'rgba(229,226,225,0.65)', lineHeight: 1.6 }}>Justin Borges is the founder of The Answer Engine, a GEO/AEO firm that helps businesses get cited by ChatGPT, Perplexity, Claude, Gemini, and Google AI Overviews. TAE&apos;s own site runs against the dual-frame architecture described in this article &mdash; 1.14M+ monthly impressions, 4 of 4 LLMs cited. <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a></p>
              </div>
            </div>

            {/* CTA Block */}
            <div className="ae-cta-block not-prose my-16">
              <h3>Stop Optimizing for Speed and Start Winning Citations</h3>
              <p>Every month 390 businesses search for AEO services. The Answer Engine&apos;s Origin Protocol gets businesses cited where competitors get ignored. One slot per market &mdash; claim yours before a competitor does.</p>
              <a href="https://theanswerengine.ai/blindspot" className="ae-cta-primary">Run Free AEO Grader &rarr;</a>
              <div style={{ marginTop: '16px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <a href="https://calendly.com/theanswerengine-support/30min" className="ae-cta-secondary">Book Free Strategy Call</a>
                <a href="tel:+12134442229" className="ae-cta-secondary">(213) 444-2229</a>
              </div>
            </div>

            {/* FAQ Section */}
            <span className="ae-section-label" id="faq">FAQ</span>
            <h2>Frequently Asked Questions</h2>

            <details className="ae-faq-item border border-white/[0.08] p-5 mb-3 bg-white/[0.02]">
              <summary className="cursor-pointer font-headline font-black uppercase tracking-tight text-white text-base">Does website speed affect whether AI recommends my business?</summary>
              <p className="faq-answer mt-3 text-gray-300">Barely. A 107,000-page study found Core Web Vitals correlate at just -0.12 to -0.18 with AI citation frequency &mdash; statistical noise in practical terms. Content depth and topical authority have 4.2 times more influence on whether ChatGPT, Perplexity, Claude, and Gemini cite a business. Site speed clears a crawl-timeout floor; everything above that floor is unrelated to citation outcomes. Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> for the lift table on your URLs.</p>
            </details>

            <details className="ae-faq-item border border-white/[0.08] p-5 mb-3 bg-white/[0.02]">
              <summary className="cursor-pointer font-headline font-black uppercase tracking-tight text-white text-base">Do AI crawlers like GPTBot care about page load time?</summary>
              <p className="faq-answer mt-3 text-gray-300">No. GPTBot, PerplexityBot, and ClaudeBot do not render JavaScript and do not measure user-experience metrics. They extract raw HTML text. As long as the server responds inside the crawl timeout window, page load time is irrelevant to citation eligibility. The crawlers that feed generative engines are text extractors, not browsers. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a strategy call</a> to walk through your server-response logs.</p>
            </details>

            <details className="ae-faq-item border border-white/[0.08] p-5 mb-3 bg-white/[0.02]">
              <summary className="cursor-pointer font-headline font-black uppercase tracking-tight text-white text-base">What actually moves AI citation rates if speed does not?</summary>
              <p className="faq-answer mt-3 text-gray-300">Content depth and topical authority (4.2x more impact than speed), content freshness (pages updated inside 90 days earn 28% more citations), structured-data markup, named-author attribution, and inline quotations and statistics. Aggarwal et al. (KDD 2024) measured a 37% citation lift from added quotations and a 22% lift from added statistics. Zhang et al. (2026) measured a 57% influence premium on definition-first openings. Run the <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free AERO Blind Spot Scan</a> to see which of these you currently capture.</p>
            </details>

            <details className="ae-faq-item border border-white/[0.08] p-5 mb-3 bg-white/[0.02]">
              <summary className="cursor-pointer font-headline font-black uppercase tracking-tight text-white text-base">My developer said improving Core Web Vitals will help AI. Are they wrong?</summary>
              <p className="faq-answer mt-3 text-gray-300">Your developer is conflating two pipelines. Core Web Vitals are a Google ranking signal that measures user experience inside a rendered browser. AI crawlers bypass that pipeline entirely because they pull raw HTML without loading scripts, images, or stylesheets. Good Core Web Vitals help Google rankings, and Google-ranked content gets pulled into training and live citations more often &mdash; but the direct lever on AI citation is content structure, not page speed. Call <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> for a scope review before approving a CWV project framed as AI work.</p>
            </details>

            <details className="ae-faq-item border border-white/[0.08] p-5 mb-3 bg-white/[0.02]">
              <summary className="cursor-pointer font-headline font-black uppercase tracking-tight text-white text-base">Does a slow website hurt my chances with AI search engines?</summary>
              <p className="faq-answer mt-3 text-gray-300">Only when server response is extreme &mdash; roughly 20 to 30 seconds or more. Crawlers carry a crawl budget and a timeout threshold; pages that exceed the threshold get marked uncrawlable. Below that ceiling, a 2-second page and a 0.5-second page produce identical AI citation outcomes. Site speed is a floor, not a ranking lever. Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> for a crawl-log timeout audit.</p>
            </details>

            <details className="ae-faq-item border border-white/[0.08] p-5 mb-3 bg-white/[0.02]">
              <summary className="cursor-pointer font-headline font-black uppercase tracking-tight text-white text-base">Should I fix my website speed at all?</summary>
              <p className="faq-answer mt-3 text-gray-300">Yes &mdash; for the right reasons. Site speed drives conversion rates, human-visitor experience, and Google SEO rankings, which indirectly feed AI surfaces because Google-ranked pages are over-represented in LLM training data and live retrieval. The mistake is allocating engineering hours to Core Web Vitals when those hours should be going to bounded-chunk content production, schema markup, and named-author attribution. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a 30-minute call</a> for a budget-allocation review.</p>
            </details>

            <details className="ae-faq-item border border-white/[0.08] p-5 mb-3 bg-white/[0.02]">
              <summary className="cursor-pointer font-headline font-black uppercase tracking-tight text-white text-base">How do I measure whether speed is moving AI citations on my site?</summary>
              <p className="faq-answer mt-3 text-gray-300">Run a fixed prompt library against ChatGPT, Perplexity, Claude, Gemini, Google AI Overviews, and Bing Copilot monthly &mdash; the same way The Answer Engine&apos;s Proof Ledger does. Log citation appearances per engine, per query, per month. Improve site speed in isolation across one quarter and compare. The 107K-page benchmark has already run that experiment at scale; the result is that speed-only optimization does not move the citation count. One client per market &mdash; <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">claim your territory now.</a></p>
            </details>

            {/* CTA — territory */}
            <a href="https://calendly.com/theanswerengine-support/30min" className="ae-cta-inline">&rarr; One client per market &mdash; lock in your territory before a competitor does</a>

            {/* Related */}
            <span className="ae-section-label">Continue Reading</span>
            <h2>Related AEO Concepts</h2>

            <ul>
              <li><Link href="/blog/aeo-vs-seo">AEO vs SEO: What is the Difference?</Link></li>
              <li><Link href="/blog/aeo-vs-geo">AEO vs GEO: What is the Difference?</Link></li>
              <li><Link href="/blog/aeo-models-how-ai-search-picks-sources">AEO Models: How AI Search Picks Sources</Link></li>
              <li><Link href="/blog/anatomy-of-an-ai-citation">Anatomy of an AI Citation</Link></li>
              <li><Link href="/blog/aeo-grader">AEO Grader: How to Score Your AI Search Visibility</Link></li>
              <li><Link href="/blog/answer-engine-optimization-aeo-guide">Answer Engine Optimization: The Complete Guide</Link></li>
            </ul>

            {/* CTA — phone */}
            <a href="tel:+12134442229" className="ae-cta-inline">&rarr; Call (213) 444-2229 for a free territory check</a>

          </div>

          {/* Final CTA */}
          <section className="ae-final-cta not-prose">
            <div className="ae-final-cta-inner">
              <h2 className="text-2xl sm:text-3xl font-black mb-4 text-white font-headline uppercase tracking-tighter">
                Your AEO Score Determines Who AI Recommends
              </h2>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                Site speed wins conversion. Bounded chunks, schema, and named-author attribution win AI citations. The Origin Protocol ships both for one business per market.
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
