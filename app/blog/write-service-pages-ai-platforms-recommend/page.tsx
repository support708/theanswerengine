import type { Metadata } from 'next'
import Link from 'next/link'

export const revalidate = 86400
export const dynamic = 'force-static'
export const dynamicParams = true

const title = 'How to Write Service Pages That AI Platforms Recommend'
const description =
  'Learn how to structure service pages so ChatGPT, Perplexity, and Google AI Overviews cite and recommend your business. Covers schema markup, content structure, and real optimization strategies for 2026.'
const slug = 'write-service-pages-ai-platforms-recommend'
const publishDate = '2026-03-19'

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'service page optimization AI',
    'AI search service pages',
    'ChatGPT service page recommendations',
    'Perplexity citations service pages',
    'schema markup service pages',
    'AI citable content',
    'answer engine optimization service pages',
    'Google AI Overviews service pages',
    'structured data for AI',
    'service page content structure',
  ],
  openGraph: {
    title,
    description,
    type: 'article',
    publishedTime: publishDate,
    authors: ['The Answer Engine Team'],
    url: `https://www.theanswerengine.ai/blog/${slug}`,
    images: [
      {
        url: `https://theanswerengine.ai/blog/${slug}.svg`,
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [`https://theanswerengine.ai/blog/${slug}.svg`],
  },
  alternates: {
    canonical: `https://www.theanswerengine.ai/blog/${slug}`,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: title,
      description,
      image: `https://theanswerengine.ai/blog/${slug}.svg`,
      datePublished: publishDate,
      dateModified: publishDate,
      author: {
        '@type': 'Organization',
        name: 'The Answer Engine',
        url: 'https://theanswerengine.ai',
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
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What makes a service page citable by AI platforms?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'AI platforms cite service pages that have clear, factual content organized under descriptive headings, proper schema markup (Service, LocalBusiness, FAQ), specific details like pricing ranges and service areas, and content structured so individual paragraphs can stand alone as complete answers to common questions.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does schema markup help service pages appear in AI search?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Pages with comprehensive schema markup are 36% more likely to appear in AI-generated summaries and citations, according to a 2025 BrightEdge study. Google and Microsoft have both confirmed they use structured data for their generative AI features. Service, LocalBusiness, and FAQ schema types are the most relevant for service pages.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long should a service page be for AI visibility?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Research from the 2025 AI Visibility Report shows that pages using 120 to 180 words between headings receive 70% more ChatGPT citations than pages with sections under 50 words. Aim for 1,500 to 2,500 words total, with each section providing enough depth to serve as a standalone answer.',
          },
        },
        {
          '@type': 'Question',
          name: 'Should I create separate service pages or one combined page?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Create separate pages for each service. AI platforms retrieve content at the page level, so a dedicated page for "residential roof repair" will outperform a single page that lists all roofing services. Each page should comprehensively cover one service topic with specific details, FAQs, and schema markup.',
          },
        },
        {
          '@type': 'Question',
          name: 'How often should I update my service pages for AI search?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'At minimum, quarterly. AI platforms favor recently updated content. Google AI Overviews showed 59.3% citation drift in a single month during 2025, meaning the sources cited changed for nearly 6 out of 10 queries. Adding new FAQs, updating pricing, and refreshing case study data all count as meaningful updates.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do AI platforms like ChatGPT and Perplexity evaluate service pages differently?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. ChatGPT draws heavily from Bing indexed content and favors direct sources over intermediaries. Perplexity uses real-time retrieval and tied every claim to a specific source in 78% of complex research questions, compared to ChatGPT at 62%. Google AI Overviews pull from Google indexed pages. Optimizing for all three requires strong structured data, clear content, and broad indexation.',
          },
        },
      ],
    },
    {
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
          name: title,
          item: `https://theanswerengine.ai/blog/${slug}`,
        },
      ],
    },
  ],
}

function Breadcrumb() {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex items-center gap-2 text-sm text-gray-500">
        <li>
          <a href="/" className="hover:text-orange-400 transition-colors">
            Home
          </a>
        </li>
        <li>/</li>
        <li>
          <a href="/blog" className="hover:text-orange-400 transition-colors">
            Blog
          </a>
        </li>
        <li>/</li>
        <li className="text-gray-400 truncate max-w-[250px]">{title}</li>
      </ol>
    </nav>
  )
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main
        className="min-h-screen"
        style={{ backgroundColor: '#0F1117', color: 'white' }}
      >
        <div className="max-w-4xl mx-auto px-6 py-20">
          <Breadcrumb />

          {/* Hero Section */}
          <div
            className="relative overflow-hidden rounded-2xl mb-12"
            style={{
              background:
                'linear-gradient(135deg, #1a0a00 0%, #1a1a2e 50%, #111827 100%)',
            }}
          >
            <svg
              className="absolute inset-0 w-full h-full opacity-10"
              viewBox="0 0 800 400"
              fill="none"
              aria-hidden="true"
            >
              {/* Service page / document pattern */}
              <rect x="60" y="60" width="180" height="240" rx="8" stroke="#FF6A00" strokeWidth="1" fill="none" opacity="0.2" />
              <line x1="80" y1="90" x2="220" y2="90" stroke="#FF6A00" strokeWidth="2" opacity="0.25" />
              <line x1="80" y1="115" x2="200" y2="115" stroke="#FF6A00" strokeWidth="1" opacity="0.15" />
              <line x1="80" y1="135" x2="210" y2="135" stroke="#FF6A00" strokeWidth="1" opacity="0.15" />
              <line x1="80" y1="155" x2="190" y2="155" stroke="#FF6A00" strokeWidth="1" opacity="0.15" />
              <line x1="80" y1="185" x2="220" y2="185" stroke="#FF6A00" strokeWidth="2" opacity="0.25" />
              <line x1="80" y1="210" x2="205" y2="210" stroke="#FF6A00" strokeWidth="1" opacity="0.15" />
              <line x1="80" y1="230" x2="215" y2="230" stroke="#FF6A00" strokeWidth="1" opacity="0.15" />
              <line x1="80" y1="250" x2="195" y2="250" stroke="#FF6A00" strokeWidth="1" opacity="0.15" />
              {/* Schema bracket pattern */}
              <text x="340" y="120" fill="#FF6A00" opacity="0.2" fontSize="48" fontFamily="monospace">{'{'}</text>
              <line x1="380" y1="140" x2="520" y2="140" stroke="#FF6A00" strokeWidth="1" opacity="0.15" />
              <line x1="380" y1="165" x2="500" y2="165" stroke="#FF6A00" strokeWidth="1" opacity="0.15" />
              <line x1="380" y1="190" x2="540" y2="190" stroke="#FF6A00" strokeWidth="1" opacity="0.15" />
              <line x1="380" y1="215" x2="490" y2="215" stroke="#FF6A00" strokeWidth="1" opacity="0.15" />
              <text x="340" y="260" fill="#FF6A00" opacity="0.2" fontSize="48" fontFamily="monospace">{'}'}</text>
              {/* AI citation arrows */}
              <circle cx="640" cy="100" r="30" stroke="#FF6A00" strokeWidth="1" fill="none" opacity="0.2" />
              <text x="625" y="107" fill="#FF6A00" opacity="0.25" fontSize="16" fontFamily="sans-serif">AI</text>
              <line x1="610" y1="120" x2="540" y2="180" stroke="#FF6A00" strokeWidth="1" opacity="0.15" />
              <line x1="670" y1="120" x2="700" y2="200" stroke="#FF6A00" strokeWidth="1" opacity="0.15" />
              <line x1="640" y1="130" x2="640" y2="250" stroke="#FF6A00" strokeWidth="1" opacity="0.15" />
              {/* Dots grid */}
              {[0, 1, 2, 3, 4, 5, 6, 7].map((i) =>
                [0, 1, 2, 3, 4].map((j) => (
                  <circle
                    key={`${i}-${j}`}
                    cx={80 + i * 90}
                    cy={60 + j * 80}
                    r="1.5"
                    fill="#FF6A00"
                    opacity="0.12"
                  />
                ))
              )}
            </svg>
            <div className="relative px-8 py-16 sm:px-12 sm:py-20">
              <p className="inline-block text-sm font-medium text-orange-400 mb-4 border border-orange-500/30 rounded-full px-4 py-1">
                AEO Education
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 font-plus-jakarta">
                How to Write Service Pages That AI Platforms Recommend
              </h1>
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span>March 19, 2026</span>
                <span>-</span>
                <span>12 min read</span>
                <span>-</span>
                <span>The Answer Engine Team</span>
              </div>
            </div>
          </div>

          {/* Article Body */}
          <article className="prose prose-invert prose-lg max-w-none">

            {/* Intro */}
            <p className="text-xl text-gray-300 leading-relaxed mb-10">
              Your service pages used to serve one audience: humans browsing your
              website. That has changed. Today, ChatGPT processes over 3 billion
              prompts per month. Google AI Overviews appear on more than 40% of
              local-intent queries. Perplexity drives nearly 20% of AI referral
              traffic in the United States. When a potential customer asks one of
              these platforms &quot;Who is the best plumber near me?&quot; or
              &quot;What does foundation repair cost?&quot;, the AI reads your
              service pages to decide whether to recommend you. If your pages are
              not structured for AI retrieval, you are invisible in the
              fastest-growing discovery channel in business. This guide shows you
              exactly how to write service pages that AI platforms will cite,
              quote, and recommend.
            </p>

            {/* Stat Callout 1 */}
            <div className="rounded-xl border border-orange-500/30 bg-orange-500/5 p-6 mb-10">
              <p className="text-orange-400 font-semibold text-lg mb-2">AI Search Is Growing Fast</p>
              <p className="text-gray-300 text-base leading-relaxed">
                AI search traffic grew 527% year-over-year between 2024 and 2025,
                according to Search Engine Land. ChatGPT search referrals alone
                increased over 200% since mid-2025. Businesses that are not
                optimizing their service pages for AI visibility are missing the
                largest shift in search behavior since mobile.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4 font-plus-jakarta">
              Why AI Platforms Care About Your Service Pages
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              AI platforms do not generate recommendations from thin air. They
              pull from indexed web content, structured data, and authoritative
              sources. When someone asks ChatGPT for a service provider
              recommendation, it searches through pages that clearly describe
              what a business does, where it operates, what it charges, and why
              it is qualified.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Service pages are the single most important content type for local
              businesses in AI search. Unlike blog posts, which answer general
              questions, service pages answer the specific question AI users ask
              most often: &quot;Who can solve my problem?&quot;
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              The problem is that most service pages were written for
              traditional SEO. They are stuffed with keywords, thin on detail,
              and missing the structured data that AI models rely on. A page that
              says &quot;We offer the best HVAC services in Dallas&quot; without
              explaining what those services include, what they cost, or what
              qualifications the team holds gives AI nothing useful to cite.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4 font-plus-jakarta">
              How AI Platforms Evaluate Service Pages
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Each AI platform has its own retrieval method, but they share
              common evaluation patterns. Understanding these patterns is the
              foundation of writing service pages that get cited.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              <strong className="text-white">ChatGPT</strong> draws heavily from
              Bing-indexed content. It favors direct sources over intermediaries,
              with competitor websites receiving an 11.1-point higher citation
              rate compared to directory listings, according to Averi&apos;s 2026
              B2B SaaS Citation Benchmarks Report. This means your own service
              page will outperform a directory listing about your business, as
              long as the content is strong enough.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              <strong className="text-white">Perplexity</strong> uses real-time
              retrieval and ties every claim to a specific source in 78% of
              complex research questions, according to the 2025 AI Visibility
              Report. It heavily weights domain authority, backlink quality, and
              structured data. Service pages with FAQ schema and detailed service
              descriptions perform well on Perplexity because the platform can
              extract and attribute specific claims.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              <strong className="text-white">Google AI Overviews</strong> pull
              from Google-indexed pages. As of April 2025, AI Overviews appeared
              in 40.2% of local business queries, according to Local Falcon.
              Google has publicly stated that structured data is critical for
              modern search features because it is &quot;efficient, precise, and
              easy for machines to process.&quot;
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4 font-plus-jakarta">
              The Anatomy of an AI-Friendly Service Page
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Based on citation research and platform behavior, here is what
              every service page needs to be recommended by AI platforms.
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3 font-plus-jakarta">
              1. A Clear, Specific Title and Meta Description
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Your page title should name the specific service and location.
              &quot;Residential Roof Repair in Austin, TX&quot; is far more
              citable than &quot;Our Services.&quot; AI platforms match user
              queries against page titles, so specificity matters. Your meta
              description should summarize what the service includes, who it is
              for, and what area you serve, all in 155 characters or fewer.
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3 font-plus-jakarta">
              2. A Strong Opening Paragraph
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Research from the 2025 AI Visibility Report shows that 55% of AI
              Overview citations come from the top 30% of a page. Your opening
              paragraph must immediately answer the core question: what is this
              service, who provides it, and where. Do not bury the lead behind a
              brand story or generic introduction. State the facts first.
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3 font-plus-jakarta">
              3. Descriptive Headings That Match User Questions
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Structure your page with H2 and H3 headings that mirror the
              questions customers actually ask. Instead of &quot;Our
              Process,&quot; use &quot;How Does Foundation Repair Work?&quot;
              Instead of &quot;Pricing,&quot; use &quot;How Much Does Foundation
              Repair Cost in [City]?&quot; AI platforms scan headings to match
              against user queries, so question-based headings increase your
              chances of being cited. Pages using 120 to 180 words between
              headings receive 70% more ChatGPT citations than pages with
              sections under 50 words, according to the 2025 AI Visibility
              Report.
            </p>

            {/* Stat Callout 2 */}
            <div className="rounded-xl border border-orange-500/30 bg-orange-500/5 p-6 mb-10">
              <p className="text-orange-400 font-semibold text-lg mb-2">Structured Data Drives AI Visibility</p>
              <p className="text-gray-300 text-base leading-relaxed">
                Pages with comprehensive schema markup are 36% more likely to
                appear in AI-generated summaries and citations, according to
                BrightEdge. In March 2025, both Google and Microsoft publicly
                confirmed they use schema markup for their generative AI
                features. Structured data is no longer optional for service pages.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3 font-plus-jakarta">
              4. Specific Details Over Vague Claims
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              AI platforms cannot cite vague marketing language. &quot;We are the
              best in town&quot; gives an AI model nothing to work with. Instead,
              provide specific, verifiable details: pricing ranges, service area
              zip codes, equipment brands you use, certifications your team
              holds, and average project timelines. The 2025 AI Visibility Report
              found that adding data-backed statistics to content increases AI
              visibility by 22%, while including original quotations boosts it by
              37%.
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3 font-plus-jakarta">
              5. FAQ Sections with Real Answers
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Every service page should include 5 to 8 frequently asked
              questions with clear, direct answers. These Q&A pairs serve double
              duty: they provide{' '}
              <Link href="/blog/how-to-build-faq-page-ai-cites" className="text-orange-400 underline hover:text-orange-300">
                content that AI platforms love to cite
              </Link>
              , and they generate FAQ schema markup that helps AI models
              understand your page structure. Write answers in 2 to 4 sentences.
              Start each answer with a direct response before adding context.
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3 font-plus-jakarta">
              6. Schema Markup for Services
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Schema markup is the technical bridge between your content and AI
              understanding. For service pages, implement these schema types at
              minimum:
            </p>
            <ul className="text-gray-300 mb-6 space-y-2">
              <li><strong className="text-white">Service schema:</strong> Defines the service name, description, provider, area served, and price range. This is the most important schema type for service pages and one of the most underused.</li>
              <li><strong className="text-white">LocalBusiness schema:</strong> Establishes your business identity, address, phone number, hours, and geo-coordinates. AI platforms use this to match your business against location-specific queries.</li>
              <li><strong className="text-white">FAQ schema:</strong> Marks up your Q&A pairs so AI can extract individual answers. Learn more about{' '}
                <Link href="/blog/does-schema-markup-help-ai-search" className="text-orange-400 underline hover:text-orange-300">
                  how schema markup helps AI search
                </Link>
                .
              </li>
              <li><strong className="text-white">Review/AggregateRating schema:</strong> Surfaces your review scores in AI results. Businesses with review markup give AI platforms quantifiable trust signals.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4 font-plus-jakarta">
              Content Structure That Gets Cited
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              The way you organize content on the page matters as much as what
              you write. AI platforms retrieve content in chunks, not full pages.
              Each section of your service page should be able to stand alone as
              a complete, citable answer.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Think of your service page as a database of verifiable facts, not
              a narrative sales pitch. Each heading introduces a topic. Each
              paragraph beneath it provides a complete answer. If an AI platform
              pulls just one section from your page, that section should make
              sense on its own and include enough context to be useful.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Tables are especially powerful. Research shows that comparison
              tables filled with actual pricing, specific feature descriptions,
              and &quot;best for&quot; labels are among the most-cited content
              formats in AI Overviews. If your service page can include a table
              comparing service tiers, pricing, or included features, add one.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4 font-plus-jakarta">
              One Service, One Page
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              One of the most common mistakes we see is businesses listing all
              their services on a single page. This approach fails in AI search
              for a simple reason: AI platforms retrieve content at the page
              level. A dedicated page for &quot;commercial HVAC
              installation&quot; will always outperform a general &quot;our
              services&quot; page when someone asks an AI about commercial HVAC
              installation.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Create a separate, dedicated page for each core service you offer.
              Each page should have its own schema markup, its own FAQ section,
              and its own specific details. This is the same{' '}
              <Link href="/blog/hub-spoke-content-strategy-ai-citations" className="text-orange-400 underline hover:text-orange-300">
                hub-and-spoke content strategy
              </Link>{' '}
              that drives AI citations across your entire site.
            </p>

            {/* Stat Callout 3 */}
            <div className="rounded-xl border border-orange-500/30 bg-orange-500/5 p-6 mb-10">
              <p className="text-orange-400 font-semibold text-lg mb-2">Zero-Click Search Is Reshaping Discovery</p>
              <p className="text-gray-300 text-base leading-relaxed">
                58.5% of Google searches in the U.S. now end without a click,
                according to SparkToro. For searches that trigger AI Overviews,
                the zero-click rate rises to 83%. Your service page content needs
                to be cited within the AI answer itself, because many users will
                never click through to your site.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4 font-plus-jakarta">
              Writing for Humans and Machines at the Same Time
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              The good news is that writing for AI does not mean writing robotic
              content. The qualities that make a service page useful to AI
              platforms, such as clarity, specificity, good structure, and
              factual accuracy, also make pages more useful to human visitors.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Here is a practical checklist for every service page you write or
              rewrite:
            </p>
            <ul className="text-gray-300 mb-6 space-y-2">
              <li><strong className="text-white">Name the service and location in the first sentence.</strong> Do not make the reader (or the AI) scroll to find what you do and where.</li>
              <li><strong className="text-white">Include pricing information.</strong> Even a range like &quot;$150 to $500 depending on scope&quot; is more useful than no pricing at all. AI platforms frequently cite pages that include cost details.</li>
              <li><strong className="text-white">List your service area explicitly.</strong> Name the cities, counties, or zip codes you serve. AI platforms match these against location-based queries.</li>
              <li><strong className="text-white">Add credentials and certifications.</strong> Licensed, bonded, insured, EPA-certified, manufacturer-trained. These are trust signals for both AI and humans.</li>
              <li><strong className="text-white">Use natural question-and-answer formatting.</strong> Section headings that mirror customer questions create natural entry points for AI retrieval.</li>
              <li><strong className="text-white">Keep paragraphs between 120 and 180 words.</strong> This is the sweet spot for AI citability based on current research.</li>
              <li><strong className="text-white">Update content at least quarterly.</strong> AI platforms favor fresh content. Your{' '}
                <Link href="/blog/why-fresh-content-key-ai-search-visibility" className="text-orange-400 underline hover:text-orange-300">
                  content freshness directly affects AI visibility
                </Link>
                .
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4 font-plus-jakarta">
              Common Service Page Mistakes That Kill AI Visibility
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Even businesses that understand AI search make these mistakes on
              their service pages. Avoid every one of them.
            </p>
            <ul className="text-gray-300 mb-6 space-y-2">
              <li><strong className="text-white">Thin content.</strong> A service page with 200 words and no details gives AI nothing to cite. Aim for 1,500 to 2,500 words of substantive content per service.</li>
              <li><strong className="text-white">No schema markup.</strong> Without structured data, AI platforms have to guess what your page is about. With it, they know exactly what service you offer, where, and for how much.</li>
              <li><strong className="text-white">Stock images with no alt text.</strong> AI cannot read images, but it reads alt text. Describe what is in each image with specific, relevant details.</li>
              <li><strong className="text-white">Missing NAP consistency.</strong> If your name, address, and phone number differ between your service page, your Google Business Profile, and your directory listings, AI platforms lose confidence in your data.</li>
              <li><strong className="text-white">No internal links.</strong> Service pages that exist in isolation rank worse than pages connected to related content through internal links. Link to your FAQ page, your about page, your blog posts, and your other service pages.</li>
              <li><strong className="text-white">Keyword stuffing.</strong> AI platforms evaluate semantic meaning, not keyword density. Writing naturally about your service is more effective than repeating the same phrase 15 times.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4 font-plus-jakarta">
              Measuring Whether Your Service Pages Are Working
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              After optimizing your service pages, you need to track whether AI
              platforms are actually citing them. Run test prompts across
              ChatGPT, Perplexity, and Google AI Overviews using the types of
              questions your customers ask. Record which businesses get
              recommended, whether your business appears, and what information
              the AI shares about you.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Pay attention to accuracy. Being mentioned with the wrong phone
              number, outdated pricing, or incorrect service details is worse
              than not being mentioned at all. If AI is citing wrong information,
              update your service page and schema markup immediately, then allow
              2 to 4 weeks for the platforms to re-crawl your content.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              For a more detailed approach to tracking your AI presence, see
              our guide on{' '}
              <Link href="/blog/how-to-track-ai-search-visibility" className="text-orange-400 underline hover:text-orange-300">
                how to track your AI search visibility
              </Link>
              .
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4 font-plus-jakarta">
              The Bottom Line
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Service pages are no longer just sales tools. They are your
              primary interface with AI platforms that recommend businesses to
              millions of users every day. The businesses that treat their
              service pages as structured, factual, citable resources will win
              in AI search. The ones that leave their pages thin, vague, and
              unstructured will continue to be invisible.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Start with your highest-revenue service. Rewrite that page using
              the structure outlined above. Add schema markup. Include an FAQ
              section. Update it with specific details. Then test it across AI
              platforms and measure the results. One well-optimized service page
              can change your entire AI visibility profile.
            </p>
          </article>

          {/* FAQ Section */}
          <section className="mt-16 mb-16">
            <h2 className="text-2xl font-bold text-white mb-8 font-plus-jakarta">
              Frequently Asked Questions
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  q: 'What makes a service page citable by AI platforms?',
                  a: 'AI platforms cite service pages that have clear, factual content organized under descriptive headings, proper schema markup (Service, LocalBusiness, FAQ), specific details like pricing ranges and service areas, and content structured so individual paragraphs can stand alone as complete answers.',
                },
                {
                  q: 'Does schema markup help service pages appear in AI search?',
                  a: 'Yes. Pages with comprehensive schema markup are 36% more likely to appear in AI-generated summaries and citations, according to BrightEdge. Google and Microsoft have both confirmed they use structured data for their generative AI features.',
                },
                {
                  q: 'How long should a service page be for AI visibility?',
                  a: 'Aim for 1,500 to 2,500 words of substantive content. Research shows that pages using 120 to 180 words between headings receive 70% more ChatGPT citations than pages with sections under 50 words.',
                },
                {
                  q: 'Should I create separate service pages or one combined page?',
                  a: 'Create separate pages for each service. AI platforms retrieve content at the page level, so a dedicated page for a specific service will outperform a general page that lists everything. Each page needs its own schema, FAQs, and specific details.',
                },
                {
                  q: 'How often should I update my service pages for AI search?',
                  a: 'At minimum, quarterly. AI platforms favor recently updated content. Google AI Overviews showed 59.3% citation drift in a single month during 2025, meaning sources cited changed for nearly 6 out of 10 queries.',
                },
                {
                  q: 'Do ChatGPT and Perplexity evaluate service pages differently?',
                  a: 'Yes. ChatGPT draws from Bing-indexed content and favors direct sources. Perplexity uses real-time retrieval and cites specific sources in 78% of complex questions. Google AI Overviews pull from Google-indexed pages. Optimizing for all three requires strong structured data and broad indexation.',
                },
              ].map((faq, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-gray-800 bg-gray-900/50 p-6"
                >
                  <h3 className="text-white font-semibold mb-2">{faq.q}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="rounded-2xl border border-orange-500/30 bg-gradient-to-br from-orange-500/10 to-transparent p-8 sm:p-12 text-center mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-plus-jakarta">
              Are Your Service Pages AI-Ready?
            </h2>
            <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
              Our free Blind Spot Report analyzes your service pages across
              ChatGPT, Perplexity, and Google AI Overviews. See exactly where
              you stand, where competitors are beating you, and what to fix
              first. No pitch, just the data.
            </p>
            <Link
              href="/blindspot"
              className="inline-block bg-orange-500 text-white font-semibold px-8 py-4 rounded-xl text-lg hover:bg-orange-600 transition-colors"
            >
              Get Your Free Blind Spot Report
            </Link>
    <div className="flex flex-wrap items-center gap-6 mt-6 pt-6 border-t border-[#FF6A00]/10">
      <a href="tel:+12134442229" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
        (213) 444-2229
      </a>
      <a href="mailto:support@theanswerengine.ai" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
        support@theanswerengine.ai
      </a>
    </div>
          </section>

          {/* Author Attribution */}
          <section className="flex items-center gap-4 border-t border-gray-800 pt-8">
            <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
              AE
            </div>
            <div>
              <p className="text-white font-semibold">The Answer Engine Team</p>
              <p className="text-gray-500 text-sm">
                Helping local businesses get found, recommended, and cited by AI search
                platforms.
              </p>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
