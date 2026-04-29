import type { Metadata } from 'next';
import Link from 'next/link';

export const revalidate = 86400;
export const dynamic = 'force-static';
export const dynamicParams = true;

export const metadata: Metadata = {
  title: 'How Photographers Get Found on AI Search',
  description:
    'AI platforms are now the first place clients search for photographers. Learn why certain photographers keep getting recommended and how to become one of them.',
  keywords: [
    'photographer AI search',
    'AI visibility photography business',
    'ChatGPT photographer recommendations',
    'wedding photographer AI',
    'answer engine optimization photographer',
    'Perplexity photographer',
    'how photographers get found online',
    'AI search photography business',
  ],
  openGraph: {
    title: 'How Photographers Get Found on AI Search',
    description:
      'AI platforms are replacing Google as the first stop for couples searching for photographers. Learn what makes AI recommend a photographer and what keeps most invisible.',
    type: 'article',
    url: 'https://theanswerengine.ai/blog/how-photographers-get-found-on-ai-search',
    images: [
      {
        url: 'https://theanswerengine.ai/blog/how-photographers-get-found-on-ai-search.webp',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How Photographers Get Found on AI Search',
    description:
      'The couples searching for photographers are now asking ChatGPT first. Are you showing up?',
  },
  alternates: {
    canonical:
      'https://theanswerengine.ai/blog/how-photographers-get-found-on-ai-search',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      '@id':
        'https://theanswerengine.ai/blog/how-photographers-get-found-on-ai-search#article',
      headline: 'How Photographers Get Found on AI Search',
      description:
        'AI platforms like ChatGPT and Perplexity are now the first place couples and clients search for photographers. Learn why certain photographers keep getting recommended and how to become one of them.',
      image:
        'https://theanswerengine.ai/blog/how-photographers-get-found-on-ai-search.webp',
      datePublished: '2026-04-08',
      dateModified: '2026-04-08',
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
        knowsAbout: ['Answer Engine Optimization', 'AI Search', 'Content Strategy', 'Real Estate Marketing', 'Citation Surface'],
        url: 'https://theanswerengine.ai/about',
        image: 'https://theanswerengine.ai/justin-borges.webp',
      },
      publisher: {
        '@type': 'Organization',
        '@id': 'https://theanswerengine.ai/#organization',
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id':
          'https://theanswerengine.ai/blog/how-photographers-get-found-on-ai-search',
      },
    },
    {
      '@type': 'FAQPage',
      '@id':
        'https://theanswerengine.ai/blog/how-photographers-get-found-on-ai-search#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Do photographers actually get recommended by ChatGPT and Perplexity?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. AI platforms like ChatGPT, Perplexity, and Google AI Overviews regularly surface specific photographer recommendations when users ask location-based or style-specific questions. The AI pulls signals from review platforms, editorial mentions, directory listings, and website content to decide who to name. Photographers with strong, consistent online authority tend to appear repeatedly. Those with thin or inconsistent digital footprints are simply skipped.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why would someone search for a photographer on ChatGPT instead of Google?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'AI search allows clients to describe exactly what they want in natural language: "a documentary-style wedding photographer in Austin who is great with candid moments and costs under $4,000." Traditional search returns a list of links. AI returns a curated answer. For busy couples planning a wedding, that shortcut is enormously appealing. Over 810 million people use ChatGPT daily, and local service searches are growing fast within that base.',
          },
        },
        {
          '@type': 'Question',
          name: 'What types of photographer searches happen most on AI platforms?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Wedding photography is the highest-volume category, followed by portrait photography, newborn and family sessions, commercial and brand photography, and real estate photography. Clients tend to search by style, location, and price range simultaneously, which is something AI handles naturally but that traditional directory searches handle poorly.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does an AI platform decide which photographer to recommend?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'AI platforms synthesize signals from many sources: review platforms like Google, The Knot, and Yelp; editorial features in wedding blogs or local publications; structured data and schema markup on a photographer\'s website; consistency of business information across directories; depth of content demonstrating subject matter expertise; and the overall volume and sentiment of third-party mentions. No single factor dominates - it is the cumulative weight of authority signals that determines visibility.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can a photographer pay to appear in AI search recommendations?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Unlike Google Ads or The Knot\'s paid placement, there is no sponsored slot in ChatGPT, Perplexity, or Google AI Overviews recommendations. The AI recommends based on perceived expertise and trustworthiness - signals that must be earned through content, reviews, and third-party mentions. This makes early investment in AI visibility especially valuable: photographers who build authority now will hold an organic advantage that money alone cannot buy.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is being on The Knot or WeddingWire enough for AI visibility?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Directory listings help, but they are not sufficient on their own. AI platforms cross-reference directory data with a photographer\'s own website, editorial coverage, review platforms, social proof, and content depth. A photographer who appears only in directories without a strong independent web presence is far less likely to receive AI recommendations than one who has built authority across multiple channels. Think of directory listings as one signal among many - necessary but not sufficient.',
          },
        },
        {
          '@type': 'Question',
          name: 'How is AI visibility different from traditional SEO for photographers?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Traditional SEO optimizes for keyword rankings - getting a page to appear at position one on a search results page. AI visibility optimization (also called Answer Engine Optimization, or AEO) focuses on becoming the entity an AI platform trusts enough to name in a conversational answer. SEO is about pages. AEO is about authority. Both matter, but they require different strategies. AEO places much greater emphasis on third-party trust signals, entity clarity, and structured data than traditional SEO does.',
          },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      '@id':
        'https://theanswerengine.ai/blog/how-photographers-get-found-on-ai-search#breadcrumb',
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
          name: 'How Photographers Get Found on AI Search',
          item: 'https://theanswerengine.ai/blog/how-photographers-get-found-on-ai-search',
        },
      ],
    },
    {
      '@type': 'Organization',
      '@id': 'https://theanswerengine.ai/#organization',
      name: 'The Answer Engine',
      url: 'https://theanswerengine.ai',
      logo: 'https://theanswerengine.ai/logo.png',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-213-444-2229',
        contactType: 'customer service',
        email: 'support@theanswerengine.ai',
      },
    },
  ],
};

export default function HowPhotographersGetFoundOnAISearch() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen" style={{ backgroundColor: '#0F1117' }}>

        {/* ── HERO ── */}
        <section className="relative overflow-hidden border-b border-white/5">
          <div className="absolute inset-0 bg-gradient-to-br from-[#F27D24]/10 via-transparent to-transparent" />
          <svg className="absolute inset-0 w-full h-full opacity-[0.03]" aria-hidden="true">
            <defs>
              <pattern id="hero-grid-143" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-grid-143)" />
          </svg>

          <div className="relative max-w-4xl mx-auto px-6 py-16 sm:py-24">
            <nav className="text-sm text-gray-500 mb-8">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2">&rsaquo;</span>
              <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
              <span className="mx-2">&rsaquo;</span>
              <span className="text-gray-400">How Photographers Get Found on AI Search</span>
            </nav>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 bg-[#F27D24]/10 border border-[#F27D24]/30">
              <span className="text-sm font-semibold tracking-wider uppercase text-[#F27D24]">Industry Guides</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight font-plus-jakarta">
              How Photographers Get Found on{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F27D24] to-orange-400">
                AI Search
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
              The couple planning their wedding is not scrolling The Knot. They are asking ChatGPT.
              With 267,000 photography businesses competing for bookings, the photographers who appear
              in AI answers are capturing clients before the search even starts. Here is what separates
              the ones who get named from the ones who get skipped.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#F27D24]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                April 8, 2026
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#F27D24]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                11 min read
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#F27D24]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Justin Borges
              </span>
            </div>
          </div>
        </section>

        {/* ── MAIN CONTENT ── */}
        <div className="max-w-4xl mx-auto px-6 py-12">

          {/* ── STATS GRID ── */}
          <div className="ae-stats-grid grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
            <div className="ae-stat-card bg-white/5 border border-white/10 rounded-xl p-5 text-center">
              <div className="text-3xl font-bold text-[#F27D24] font-plus-jakarta mb-1">$15.8B</div>
              <div className="text-sm text-gray-400 leading-tight">U.S. photography industry revenue in 2025</div>
            </div>
            <div className="ae-stat-card bg-white/5 border border-white/10 rounded-xl p-5 text-center">
              <div className="text-3xl font-bold text-[#F27D24] font-plus-jakarta mb-1">267K</div>
              <div className="text-sm text-gray-400 leading-tight">photography businesses competing for bookings</div>
            </div>
            <div className="ae-stat-card bg-white/5 border border-white/10 rounded-xl p-5 text-center">
              <div className="text-3xl font-bold text-[#F27D24] font-plus-jakarta mb-1">810M</div>
              <div className="text-sm text-gray-400 leading-tight">daily ChatGPT users - many searching for local services</div>
            </div>
            <div className="ae-stat-card bg-white/5 border border-white/10 rounded-xl p-5 text-center">
              <div className="text-3xl font-bold text-[#F27D24] font-plus-jakarta mb-1">93%</div>
              <div className="text-sm text-gray-400 leading-tight">of AI search sessions end without a website click</div>
            </div>
          </div>

          {/* ── CALLOUT: THE SHIFT ── */}
          <div className="ae-callout ae-callout-warning border border-yellow-500/30 bg-yellow-500/5 rounded-xl p-6 mb-10">
            <div className="flex gap-4">
              <svg className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.538-1.333-3.308 0L3.732 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <div>
                <p className="font-semibold text-yellow-300 mb-1">The Shift Most Photographers Are Missing</p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  93% of AI search sessions end without a website click. The AI gives the answer directly.
                  If a client asks &quot;who is the best wedding photographer in Denver&quot; and your name is not in that answer,
                  you have already lost the booking, before they ever visit any website.
                </p>
              </div>
            </div>
          </div>

          {/* ── TABLE OF CONTENTS ── */}
          <nav className="ae-toc bg-white/5 border border-white/10 rounded-xl p-6 mb-12">
            <p className="text-sm font-semibold text-[#F27D24] uppercase tracking-wider mb-4">In This Guide</p>
            <ol className="space-y-2 text-sm">
              {[
                ['#why-ai-search-matters', 'Why AI Search Is Now a Photography Business Problem'],
                ['#how-ai-discovers-photographers', 'How AI Platforms Discover and Evaluate Photographers'],
                ['#signals-that-drive-recommendations', 'The Signals That Drive AI Recommendations'],
                ['#photography-niches-and-ai', 'Photography Niches: Who Has the Most to Win'],
                ['#what-most-photographers-do-wrong', 'What Most Photographers Are Getting Wrong'],
                ['#comparison', 'AI Search vs. Traditional Discovery Channels'],
                ['#decision-matrix', 'Is Your Photography Business AI-Ready?'],
                ['#faq', 'Frequently Asked Questions'],
              ].map(([href, label]) => (
                <li key={href as string}>
                  <a href={href as string} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F27D24]/50 group-hover:bg-[#F27D24] transition-colors flex-shrink-0" />
                    {label as string}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* ── SECTION 1: WHY AI SEARCH MATTERS ── */}
          <section id="why-ai-search-matters" className="mb-14">
            <div className="ae-section-label text-xs font-semibold tracking-widest uppercase text-[#F27D24] mb-3">Section 01</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-plus-jakarta mb-6">
              Why AI Search Is Now a Photography Business Problem
            </h2>

            <p className="text-gray-300 leading-relaxed mb-5">
              Photography is a $15.8 billion industry in the United States. With 267,000 businesses
              competing for clients, discovery has always been the core challenge. For the past decade,
              the answer was a combination of The Knot listings, Instagram presence, Google search rankings,
              and word-of-mouth referrals. That formula still works, but a new channel has emerged that most
              photographers are completely ignoring: AI search.
            </p>

            <p className="text-gray-300 leading-relaxed mb-5">
              When a couple in Portland opens ChatGPT and types &quot;who are the best documentary wedding
              photographers in Portland under $4,000&quot;, the AI does not return a list of links. It returns
              names. Specific photographers, chosen based on signals the AI has gathered from across the web.
              Those photographers receive an implicit endorsement from the most trusted information source
              in the client&apos;s life right now. The photographers not mentioned? They effectively do not exist
              for that query.
            </p>

            <p className="text-gray-300 leading-relaxed mb-6">
              With 810 million daily ChatGPT users and Google AI Overviews reaching 1.5 billion monthly users,
              the scale of this shift is not theoretical. Clients are already searching this way. The question
              is whether your photography business is positioned to appear in those answers.
            </p>

            {/* Inline CTA 1 */}
            <div className="ae-cta-inline my-8 p-5 rounded-xl bg-[#F27D24]/8 border border-[#F27D24]/20 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex-1">
                <p className="text-white font-semibold text-sm mb-1">Is your photography business showing up?</p>
                <p className="text-gray-400 text-xs">Find out what AI platforms actually say when someone searches for a photographer in your city.</p>
              </div>
              <Link
                href="/blindspot"
                className="flex-shrink-0 bg-[#F27D24] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#D96416] transition-colors whitespace-nowrap"
              >
                Get Free Blind Spot Report
              </Link>
            </div>

            <div className="ae-quote border-l-4 border-[#F27D24] pl-6 py-2 my-8">
              <p className="text-lg text-gray-200 italic leading-relaxed">
                &quot;The vendors mentioned by AI receive immediate credibility and consideration.
                Those not mentioned might as well not exist for a growing segment of engaged couples.&quot;
              </p>
              <p className="text-sm text-gray-500 mt-3">AdsX, AI Visibility for Wedding Vendors Report, 2026</p>
            </div>
          </section>

          {/* ── SECTION 2: HOW AI DISCOVERS PHOTOGRAPHERS ── */}
          <section id="how-ai-discovers-photographers" className="mb-14">
            <div className="ae-section-label text-xs font-semibold tracking-widest uppercase text-[#F27D24] mb-3">Section 02</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-plus-jakarta mb-6">
              How AI Platforms Discover and Evaluate Photographers
            </h2>

            <p className="text-gray-300 leading-relaxed mb-5">
              AI platforms do not have a dedicated photographer database. They synthesize information
              from the open web, weighting sources based on their perceived authority and relevance.
              Understanding how this synthesis works is the first step to influencing it.
            </p>

            <p className="text-gray-300 leading-relaxed mb-5">
              When someone asks an AI for a photographer recommendation, the platform cross-references
              multiple data layers simultaneously: the content on your own website, what third-party
              platforms say about you, the sentiment and volume of your reviews, mentions in editorial
              content like wedding blogs or local publications, and the structural clarity of your
              business information across directories. No single source determines the result.
              The AI builds a composite picture of who you are and how trustworthy you appear.
            </p>

            <p className="text-gray-300 leading-relaxed mb-6">
              This is meaningfully different from how Google has historically worked. Google&apos;s
              traditional algorithm rewarded keyword optimization heavily. AI platforms reward
              what we call <strong className="text-white">entity clarity</strong>: how clearly and consistently
              the web as a whole communicates what you do, where you do it, who you serve, and
              how good you are at it. Photographers who have invested in building a rich,
              consistent, cross-platform presence are naturally positioned to earn AI recommendations.
              Those who have optimized only for Google keywords are often invisible to AI.
            </p>

            <div className="ae-callout ae-callout-info border border-blue-500/30 bg-blue-500/5 rounded-xl p-6 mb-6">
              <div className="flex gap-4">
                <svg className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="font-semibold text-blue-300 mb-1">The Entity Clarity Principle</p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    AI platforms reason about businesses as entities, not just web pages. If ChatGPT cannot
                    clearly answer the question &quot;what does this photographer specialize in, and where do they
                    work?&quot; from the information available, it will simply recommend someone whose entity is clearer.
                    Ambiguity is the silent killer of AI visibility.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed mb-4">
              The good news: most photographers have not started thinking about this yet.
              The market is wide open. Photographers who move early on AI visibility will
              establish an authority position that competitors will struggle to displace - similar
              to how early movers on Instagram or The Knot built lasting advantages in the 2010s.
            </p>

            <p className="text-gray-300 leading-relaxed">
              For a broader look at how this same dynamic plays out across other creative industries,
              the principles in our guide on{' '}
              <Link href="/blog/does-having-a-blog-actually-help-ai-recommend-your-business" className="text-[#F27D24] hover:text-orange-400 underline underline-offset-2 transition-colors">
                whether content depth helps AI recommend your business
              </Link>{' '}
              apply directly to photography studios.
            </p>
          </section>

          {/* ── SECTION 3: SIGNALS THAT DRIVE RECOMMENDATIONS ── */}
          <section id="signals-that-drive-recommendations" className="mb-14">
            <div className="ae-section-label text-xs font-semibold tracking-widest uppercase text-[#F27D24] mb-3">Section 03</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-plus-jakarta mb-6">
              The Signals That Drive AI Recommendations
            </h2>

            <p className="text-gray-300 leading-relaxed mb-8">
              AI visibility for photographers comes down to a cluster of interconnected signals.
              Each one individually moves the needle modestly. Together, they create the kind of
              authoritative online presence that AI platforms consistently recommend. Here is how
              the major signal categories break down:
            </p>

            {/* Pros/Cons: Strong vs. Weak Signal Profiles */}
            <div className="ae-pros-cons grid sm:grid-cols-2 gap-6 mb-10">
              <div className="ae-pros-box bg-green-500/5 border border-green-500/20 rounded-xl p-6">
                <h3 className="font-semibold text-green-400 font-plus-jakarta mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Strong AI Signal Profile
                </h3>
                <ul className="space-y-3 text-sm text-gray-300">
                  {[
                    'Website clearly states specialty, city, and client type',
                    'Consistent business name, address, and phone across all directories',
                    '50+ reviews on Google with recent, keyword-rich responses',
                    'Featured in local wedding blogs, editorial roundups, or press',
                    'Structured data (schema) on website identifying business type',
                    'Active presence on niche directories: The Knot, Junebug, Style Me Pretty',
                    'Video content on YouTube explaining your process and style',
                    'Blog content addressing questions clients actually ask',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5 flex-shrink-0">&#10003;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="ae-cons-box bg-red-500/5 border border-red-500/20 rounded-xl p-6">
                <h3 className="font-semibold text-red-400 font-plus-jakarta mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Weak AI Signal Profile
                </h3>
                <ul className="space-y-3 text-sm text-gray-300">
                  {[
                    'Website portfolio-heavy with minimal descriptive text',
                    'Business name differs between Instagram, Google, and directories',
                    'Fewer than 20 reviews, or reviews without keyword context',
                    'No editorial or third-party mentions outside paid directories',
                    'No structured data or schema markup on website',
                    'Missing from niche wedding or photography directories',
                    'No YouTube presence or video content explaining your work',
                    'No blog or FAQ content addressing client questions',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5 flex-shrink-0">&#10007;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed mb-5">
              The pattern is consistent across industries. Photographers who have built what we call
              a &quot;layered authority presence&quot; get named. Those who rely on a single channel - even a
              strong Instagram following - tend to remain invisible to AI platforms, because Instagram
              alone does not give AI enough cross-referenced data to trust a recommendation.
            </p>

            <p className="text-gray-300 leading-relaxed mb-6">
              This mirrors exactly what our research found in the real estate industry. In our guide
              on{' '}
              <Link href="/blog/how-real-estate-agents-get-found-ai-search" className="text-[#F27D24] hover:text-orange-400 underline underline-offset-2 transition-colors">
                how real estate agents get found on AI search
              </Link>
              , the agents with the most AI visibility were not necessarily the ones with the most
              followers or the highest Google rankings. They were the ones whose authority was corroborated
              from the most independent sources.
            </p>

            {/* Inline CTA 2 */}
            <div className="ae-cta-inline my-8 p-5 rounded-xl bg-[#F27D24]/8 border border-[#F27D24]/20 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex-1">
                <p className="text-white font-semibold text-sm mb-1">How many of these signals does your studio have?</p>
                <p className="text-gray-400 text-xs">Our Blind Spot Report shows you exactly where your AI visibility gaps are - and what to fix first.</p>
              </div>
              <Link
                href="/blindspot"
                className="flex-shrink-0 bg-[#F27D24] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#D96416] transition-colors whitespace-nowrap"
              >
                Get My Free Report
              </Link>
            </div>
          </section>

          {/* ── SECTION 4: PHOTOGRAPHY NICHES AND AI ── */}
          <section id="photography-niches-and-ai" className="mb-14">
            <div className="ae-section-label text-xs font-semibold tracking-widest uppercase text-[#F27D24] mb-3">Section 04</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-plus-jakarta mb-6">
              Photography Niches: Who Has the Most to Win
            </h2>

            <p className="text-gray-300 leading-relaxed mb-8">
              Not all photography niches face equal AI visibility pressure. Wedding photographers operate
              in the highest-stakes category, where the global market is valued at over $25 billion and
              couples routinely make $2,900 to $3,500+ decisions based on a handful of recommendations.
              But every photography niche has a version of this problem.
            </p>

            {/* Comparison Table */}
            <div className="ae-comparison-table overflow-x-auto mb-10">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-4 px-4 text-gray-400 font-semibold">Photography Niche</th>
                    <th className="text-left py-4 px-4 text-gray-400 font-semibold">AI Search Volume</th>
                    <th className="text-left py-4 px-4 text-gray-400 font-semibold">Avg. Booking Value</th>
                    <th className="text-left py-4 px-4 text-gray-400 font-semibold">AI Competition Level</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Wedding Photography', 'Very High', '$2,900 - $3,500+', 'Medium (growing fast)'],
                    ['Portrait / Family', 'High', '$300 - $800', 'Low (early opportunity)'],
                    ['Newborn / Maternity', 'High', '$400 - $1,200', 'Low (early opportunity)'],
                    ['Commercial / Brand', 'Medium', '$1,500 - $10,000+', 'Low (underserved)'],
                    ['Real Estate Photography', 'High', '$150 - $500/shoot', 'Low (early opportunity)'],
                    ['Headshots / Corporate', 'Medium', '$250 - $800', 'Low (early opportunity)'],
                    ['Event Photography', 'Medium', '$500 - $2,500', 'Low (early opportunity)'],
                  ].map(([niche, volume, value, competition], i) => (
                    <tr key={niche as string} className={i % 2 === 0 ? 'bg-white/[0.02]' : ''}>
                      <td className="py-3 px-4 text-white font-medium">{niche as string}</td>
                      <td className="py-3 px-4 text-gray-300">{volume as string}</td>
                      <td className="py-3 px-4 text-gray-300">{value as string}</td>
                      <td className={`py-3 px-4 font-medium ${(competition as string).includes('growing') ? 'text-yellow-400' : 'text-green-400'}`}>
                        {competition as string}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-gray-300 leading-relaxed mb-5">
              The low AI competition ratings across most niches represent a genuine window. Photographers
              who move on AI visibility now are not fighting an entrenched competition. They are staking
              a claim in territory that their competitors have not even noticed yet. This window will not
              stay open indefinitely. As AI search literacy grows among business owners, early movers will
              have compounding advantages.
            </p>

            <div className="ae-takeaway bg-white/5 border border-white/10 rounded-xl p-6 mb-6">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#F27D24] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.347.347a3.5 3.5 0 01-4.95 0l-.347-.347z" />
                </svg>
                <div>
                  <p className="font-semibold text-white mb-1">Key Takeaway</p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Wedding photographers face the most immediate pressure because that market is where
                    AI adoption among searchers is highest. But portrait, commercial, and newborn photographers
                    are sitting in a rare moment where they can build AI authority with almost no competition.
                    The photographers who act now in those niches will own those AI recommendation slots for years.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ── SECTION 5: WHAT MOST PHOTOGRAPHERS DO WRONG ── */}
          <section id="what-most-photographers-do-wrong" className="mb-14">
            <div className="ae-section-label text-xs font-semibold tracking-widest uppercase text-[#F27D24] mb-3">Section 05</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-plus-jakarta mb-6">
              What Most Photographers Are Getting Wrong
            </h2>

            <p className="text-gray-300 leading-relaxed mb-6">
              The photography industry has always been visually driven. That strength becomes a
              vulnerability in the age of AI search. Here are the specific patterns that keep
              most photographers invisible to AI platforms.
            </p>

            <div className="space-y-5 mb-8">
              {[
                {
                  number: '01',
                  title: 'Portfolio-Only Websites',
                  body: 'A gallery of beautiful images communicates almost nothing to an AI. AI reads text, structured data, and cross-referenced signals. A website that is 90% images and 10% text leaves the AI with almost nothing to evaluate. The photographers who get recommended have websites that clearly describe their specialty, service area, client experience, and process in text the AI can read and understand.',
                },
                {
                  number: '02',
                  title: 'Ignoring Review Strategy',
                  body: 'Reviews are among the most trusted signals an AI uses to evaluate a local business. The volume, recency, sentiment, and keyword content of your reviews all factor into AI recommendations. Most photographers accumulate reviews passively, if at all. Photographers who appear in AI recommendations tend to have systematic approaches to earning and responding to reviews that build a rich, keyword-contextualized review profile over time.',
                },
                {
                  number: '03',
                  title: 'Identity Fragmentation Across Platforms',
                  body: 'If your business is listed as &quot;Sarah Smith Photography&quot; on Google, &quot;Sarah Smith Photo&quot; on The Knot, and &quot;@sarahsmithphoto&quot; on Instagram, the AI sees three separate entities and struggles to build a unified authority picture. Consistent entity identity across every platform is foundational. It sounds simple. Most photographers have never audited it.',
                },
                {
                  number: '04',
                  title: 'No Third-Party Mentions or Press',
                  body: 'AI platforms weight independent, third-party corroboration heavily. A mention in a real wedding feature on a respected wedding blog carries far more AI authority than a hundred posts on your own Instagram. Most photographers have never been featured editorially, or have been featured but never made sure that coverage was easily discoverable and linked. Our guide on how press mentions help AI recommend you explains exactly why this signal category is so powerful.',
                },
                {
                  number: '05',
                  title: 'Social Media Substituting for Web Presence',
                  body: 'Instagram followers do not translate into AI visibility. AI platforms have limited access to Instagram data, and the platform&apos;s closed ecosystem means that even a photographer with 50,000 followers may be essentially invisible to ChatGPT. Social media is a valuable client-facing channel, but it is not a substitute for the open-web authority signals that actually drive AI recommendations.',
                },
              ].map((item) => (
                <div key={item.number} className="flex gap-5 p-5 rounded-xl bg-white/[0.03] border border-white/8">
                  <div className="text-2xl font-bold text-[#F27D24]/30 font-plus-jakarta flex-shrink-0 w-8">{item.number}</div>
                  <div>
                    <h3 className="font-semibold text-white mb-2 font-plus-jakarta">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-gray-300 leading-relaxed mb-4">
              This connects directly to a broader pattern we documented in our article on{' '}
              <Link href="/blog/does-social-media-help-ai-find-business" className="text-[#F27D24] hover:text-orange-400 underline underline-offset-2 transition-colors">
                whether social media actually helps AI find your business
              </Link>
              . The short answer: it helps at the margins, but it is not the core driver most photographers
              assume it to be.
            </p>

            {/* Inline CTA 3 */}
            <div className="ae-cta-inline my-8 p-5 rounded-xl bg-[#F27D24]/8 border border-[#F27D24]/20 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex-1">
                <p className="text-white font-semibold text-sm mb-1">Which of these gaps does your studio have?</p>
                <p className="text-gray-400 text-xs">Our free Blind Spot Report audits your AI presence across ChatGPT, Perplexity, and Google AI - no tech knowledge required.</p>
              </div>
              <Link
                href="/blindspot"
                className="flex-shrink-0 bg-[#F27D24] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#D96416] transition-colors whitespace-nowrap"
              >
                Run My Free Audit
              </Link>
            </div>
          </section>

          {/* ── SECTION 6: COMPARISON TABLE ── */}
          <section id="comparison" className="mb-14">
            <div className="ae-section-label text-xs font-semibold tracking-widest uppercase text-[#F27D24] mb-3">Section 06</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-plus-jakarta mb-6">
              AI Search vs. Traditional Discovery Channels
            </h2>

            <p className="text-gray-300 leading-relaxed mb-8">
              Photographers have more options than ever for getting discovered. Understanding how AI search
              compares to traditional channels helps clarify where to invest attention and resources.
            </p>

            <div className="ae-comparison-table overflow-x-auto mb-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-4 px-4 text-gray-400 font-semibold">Channel</th>
                    <th className="text-left py-4 px-4 text-gray-400 font-semibold">Cost</th>
                    <th className="text-left py-4 px-4 text-gray-400 font-semibold">Lead Quality</th>
                    <th className="text-left py-4 px-4 text-gray-400 font-semibold">AI Contribution</th>
                    <th className="text-left py-4 px-4 text-gray-400 font-semibold">Future Trend</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['ChatGPT / Perplexity Mentions', 'Free (earned)', 'Very High', 'Direct', 'Growing fast'],
                    ['Google AI Overviews', 'Free (earned)', 'Very High', 'Direct', 'Growing fast'],
                    ['Google Organic SEO', 'Low-Medium', 'High', 'Partial', 'Declining share'],
                    ['The Knot / WeddingWire', 'High subscription', 'Medium', 'Feeds AI signals', 'Stable'],
                    ['Instagram / Social', 'Time-intensive', 'Medium', 'Minimal', 'Flat'],
                    ['Paid Google Ads', 'High ongoing', 'Medium', 'None', 'Declining'],
                    ['Word of Mouth / Referrals', 'Free', 'Very High', 'Indirect', 'Stable'],
                    ['Wedding Blog Features', 'Free (earned)', 'High', 'Strong signal', 'Growing'],
                  ].map(([channel, cost, quality, ai, trend], i) => (
                    <tr key={channel as string} className={i % 2 === 0 ? 'bg-white/[0.02]' : ''}>
                      <td className="py-3 px-4 text-white font-medium">{channel as string}</td>
                      <td className="py-3 px-4 text-gray-300">{cost as string}</td>
                      <td className={`py-3 px-4 font-medium ${(quality as string).includes('Very') ? 'text-green-400' : (quality as string).includes('High') ? 'text-blue-400' : 'text-gray-300'}`}>
                        {quality as string}
                      </td>
                      <td className={`py-3 px-4 ${(ai as string).includes('Direct') ? 'text-[#F27D24]' : (ai as string).includes('Strong') ? 'text-yellow-400' : 'text-gray-400'}`}>
                        {ai as string}
                      </td>
                      <td className={`py-3 px-4 ${(trend as string).includes('Growing') ? 'text-green-400' : (trend as string).includes('Declining') ? 'text-red-400' : 'text-gray-400'}`}>
                        {trend as string}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="ae-callout ae-callout-orange border border-[#F27D24]/30 bg-[#F27D24]/5 rounded-xl p-6 mb-6">
              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[#F27D24] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <div>
                  <p className="font-semibold text-[#F27D24] mb-1">The Compounding Advantage</p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    AI visibility and SEO are not either/or. The actions that build AI authority - structured
                    data, editorial mentions, consistent entity identity, review depth - simultaneously strengthen
                    traditional search performance. Investing in AI visibility is not a trade-off. It is a
                    multiplier on your existing marketing efforts.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ── SECTION 7: DECISION MATRIX ── */}
          <section id="decision-matrix" className="mb-14">
            <div className="ae-section-label text-xs font-semibold tracking-widest uppercase text-[#F27D24] mb-3">Section 07</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-plus-jakarta mb-6">
              Is Your Photography Business AI-Ready?
            </h2>

            <p className="text-gray-300 leading-relaxed mb-8">
              Use this decision matrix to quickly assess where your studio stands. Each row represents
              a critical AI visibility factor. The more &quot;Yes&quot; answers you have, the stronger your
              current AI presence. Each &quot;No&quot; is a gap that a competitor could fill before you do.
            </p>

            <div className="ae-decision-matrix space-y-3 mb-10">
              {[
                {
                  question: 'Does your website clearly state your specialty, city, and client type in plain text?',
                  yes: 'AI can identify your entity',
                  no: 'AI cannot reliably categorize you',
                },
                {
                  question: 'Is your business name identical across Google, The Knot, Yelp, and your website?',
                  yes: 'Entity signals are consolidated',
                  no: 'Authority is fragmented across multiple entities',
                },
                {
                  question: 'Do you have 50+ Google reviews with keyword-rich responses from you?',
                  yes: 'Strong social proof signal',
                  no: 'Weak or absent trust corroboration',
                },
                {
                  question: 'Have you been featured in any wedding blog, local press, or editorial roundup?',
                  yes: 'Third-party authority established',
                  no: 'No independent corroboration for AI to cite',
                },
                {
                  question: 'Does your website have structured schema markup identifying you as a photographer?',
                  yes: 'Machine-readable entity definition',
                  no: 'AI must guess your business category',
                },
                {
                  question: 'Do you have content on your website that answers questions clients ask before booking?',
                  yes: 'Expertise signals present',
                  no: 'AI cannot verify subject matter expertise',
                },
                {
                  question: 'Are you listed on niche photography directories (Junebug, Style Me Pretty, etc.)?',
                  yes: 'Niche authority signals present',
                  no: 'Missing category-specific trust layer',
                },
              ].map((row, i) => (
                <div key={i} className="grid grid-cols-[1fr,auto,auto] gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/8 items-start">
                  <p className="text-sm text-gray-300">{row.question}</p>
                  <div className="text-right">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-green-500/10 text-green-400 border border-green-500/20">
                      Yes: {row.yes}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-red-500/10 text-red-400 border border-red-500/20">
                      No: {row.no}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Inline CTA 4 */}
            <div className="ae-cta-inline my-8 p-5 rounded-xl bg-[#F27D24]/8 border border-[#F27D24]/20 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex-1">
                <p className="text-white font-semibold text-sm mb-1">Stop guessing. Get the real data.</p>
                <p className="text-gray-400 text-xs">Our Blind Spot Report shows you exactly what ChatGPT and Perplexity say about your studio right now.</p>
              </div>
              <Link
                href="/blindspot"
                className="flex-shrink-0 bg-[#F27D24] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#D96416] transition-colors whitespace-nowrap"
              >
                Get My Blind Spot Report
              </Link>
            </div>
          </section>

          {/* ── CHEAT SHEET ── */}
          <section className="mb-14">
            <div className="ae-cheat-sheet bg-gradient-to-br from-[#F27D24]/10 to-white/[0.02] border border-[#F27D24]/20 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-[#F27D24]/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-[#F27D24]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-white font-plus-jakarta">Photographer AI Visibility: Quick Reference</h2>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-sm font-semibold text-[#F27D24] uppercase tracking-wider mb-3">Foundation Layer</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    {[
                      'Consistent business name across all platforms',
                      'Website with clear specialty and location text',
                      'Google Business Profile: complete and verified',
                      'Structured data markup on website',
                      'Listed on The Knot, WeddingWire, and niche directories',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-[#F27D24] font-bold flex-shrink-0">&#8250;</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#F27D24] uppercase tracking-wider mb-3">Authority Layer</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    {[
                      '50+ reviews with keyword-rich recent responses',
                      'Editorial features in wedding or local publications',
                      'FAQ or blog content answering pre-booking questions',
                      'YouTube content demonstrating process and expertise',
                      'Press mentions that are web-discoverable and linked',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-[#F27D24] font-bold flex-shrink-0">&#8250;</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#F27D24] uppercase tracking-wider mb-3">What NOT to Over-Invest In</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    {[
                      'Instagram follower count (low AI signal value)',
                      'Paid directory placement alone (not sufficient)',
                      'Google Ads (zero AI recommendation contribution)',
                      'Pinterest (minimal AI data access)',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-red-400 flex-shrink-0">&#10007;</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#F27D24] uppercase tracking-wider mb-3">Timing Advantage</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    {[
                      'Most photographers have not started on AI visibility',
                      'Early movers will hold positions for 2-4+ years',
                      'AI authority builds compounding - it accelerates over time',
                      'The window is open now - it will not stay open',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-green-400 flex-shrink-0">&#10003;</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* ── CALLOUT: PRESS MENTIONS ── */}
          <div className="ae-callout ae-callout-success border border-green-500/30 bg-green-500/5 rounded-xl p-6 mb-10">
            <div className="flex gap-4">
              <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
              <div>
                <p className="font-semibold text-green-300 mb-1">Why Press Coverage Is the Highest-Leverage Action</p>
                <p className="text-gray-300 text-sm leading-relaxed mb-2">
                  A single feature in a respected wedding publication can generate AI authority signals
                  that persist for years. It creates a linkable, indexable, third-party endorsement that
                  AI platforms treat as strong corroboration of your expertise. Read our full breakdown of
                </p>
                <Link
                  href="/blog/how-press-mentions-help-ai-recommend-you"
                  className="text-green-400 hover:text-green-300 text-sm underline underline-offset-2 transition-colors"
                >
                  how press mentions help AI recommend you
                </Link>
                <span className="text-gray-400 text-sm"> to understand exactly why this signal category outweighs almost everything else.</span>
              </div>
            </div>
          </div>

          {/* ── 3-TIER CTA BLOCK ── */}
          <div className="not-prose my-16 p-8 rounded-2xl bg-gradient-to-br from-[#F27D24]/10 to-transparent border border-[#F27D24]/20">
            <h3 className="font-plus-jakarta text-2xl font-bold text-white mb-3">
              See How AI Platforms View Your Photography Business
            </h3>
            <p className="text-gray-400 mb-6">
              Our free Blind Spot Report reveals exactly what ChatGPT, Perplexity, and Google AI say
              when someone searches for a photographer in your area. You will see which platforms mention
              you, which ignore you, and what the gap is costing you in bookings.
            </p>
            <Link
              href="/blindspot"
              className="inline-flex items-center gap-2 bg-[#F27D24] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#D96416] transition-colors"
            >
              Get Your Free Blind Spot Report
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <div className="flex flex-wrap items-center gap-6 mt-6 pt-6 border-t border-[#F27D24]/10">
              <a href="tel:+12134442229" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (213) 444-2229
              </a>
              <a href="mailto:support@theanswerengine.ai" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                support@theanswerengine.ai
              </a>
            </div>
          </div>

          {/* ── AUTHOR CARD ── */}
          <div className="ae-author-card flex items-start gap-5 p-6 rounded-xl bg-white/5 border border-white/10 mb-12">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#F27D24] to-orange-400 flex items-center justify-center flex-shrink-0">
              <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-white font-plus-jakarta mb-1">The Answer Engine Research Team</p>
              <p className="text-sm text-gray-400 leading-relaxed">
                We study how AI platforms discover, evaluate, and recommend local businesses. Our Blind Spot Reports
                have helped hundreds of service businesses understand and improve their AI visibility across
                ChatGPT, Perplexity, Claude, and Google AI Overviews.
              </p>
              <div className="flex items-center gap-4 mt-3">
                <Link href="/about" className="text-xs text-[#F27D24] hover:text-orange-400 transition-colors">About Us</Link>
                <Link href="/blog" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">More Articles</Link>
              </div>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <div className="ae-section-label text-xs font-semibold tracking-widest uppercase text-[#F27D24] mb-3">FAQ</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-plus-jakarta mb-8">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {[
                {
                  q: 'Do photographers actually get recommended by ChatGPT and Perplexity?',
                  a: 'Yes. AI platforms like ChatGPT, Perplexity, and Google AI Overviews regularly surface specific photographer recommendations when users ask location-based or style-specific questions. The AI pulls signals from review platforms, editorial mentions, directory listings, and website content to decide who to name. Photographers with strong, consistent online authority tend to appear repeatedly. Those with thin or inconsistent digital footprints are simply skipped.',
                },
                {
                  q: 'Why would someone search for a photographer on ChatGPT instead of Google?',
                  a: 'AI search allows clients to describe exactly what they want in natural language: "a documentary-style wedding photographer in Austin who is great with candid moments and costs under $4,000." Traditional search returns a list of links. AI returns a curated answer. For busy couples planning a wedding, that shortcut is enormously appealing. Over 810 million people use ChatGPT daily, and local service searches are growing fast within that base.',
                },
                {
                  q: 'What types of photographer searches happen most on AI platforms?',
                  a: 'Wedding photography is the highest-volume category, followed by portrait photography, newborn and family sessions, commercial and brand photography, and real estate photography. Clients tend to search by style, location, and price range simultaneously, which is something AI handles naturally but that traditional directory searches handle poorly.',
                },
                {
                  q: 'How does an AI platform decide which photographer to recommend?',
                  a: 'AI platforms synthesize signals from many sources: review platforms like Google, The Knot, and Yelp; editorial features in wedding blogs or local publications; structured data and schema markup on a photographer\'s website; consistency of business information across directories; depth of content demonstrating subject matter expertise; and the overall volume and sentiment of third-party mentions. No single factor dominates - it is the cumulative weight of authority signals that determines visibility.',
                },
                {
                  q: 'Can a photographer pay to appear in AI search recommendations?',
                  a: 'No. Unlike Google Ads or The Knot\'s paid placement, there is no sponsored slot in ChatGPT, Perplexity, or Google AI Overviews recommendations. The AI recommends based on perceived expertise and trustworthiness - signals that must be earned through content, reviews, and third-party mentions. This makes early investment in AI visibility especially valuable: photographers who build authority now will hold an organic advantage that money alone cannot buy.',
                },
                {
                  q: 'Is being on The Knot or WeddingWire enough for AI visibility?',
                  a: 'Directory listings help, but they are not sufficient on their own. AI platforms cross-reference directory data with a photographer\'s own website, editorial coverage, review platforms, social proof, and content depth. A photographer who appears only in directories without a strong independent web presence is far less likely to receive AI recommendations than one who has built authority across multiple channels.',
                },
                {
                  q: 'How is AI visibility different from traditional SEO for photographers?',
                  a: 'Traditional SEO optimizes for keyword rankings - getting a page to appear at position one on a search results page. AI visibility optimization (also called Answer Engine Optimization, or AEO) focuses on becoming the entity an AI platform trusts enough to name in a conversational answer. SEO is about pages. AEO is about authority. Both matter, but they require different strategies. AEO places much greater emphasis on third-party trust signals, entity clarity, and structured data than traditional SEO does.',
                },
              ].map((item, i) => (
                <details
                  key={i}
                  className="group bg-white/5 border border-white/10 rounded-xl overflow-hidden"
                >
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <h3 className="text-white font-semibold pr-4 text-sm sm:text-base leading-snug">{item.q}</h3>
                    <svg
                      className="w-5 h-5 text-[#F27D24] flex-shrink-0 transition-transform group-open:rotate-180"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6 text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* ── FINAL CTA ── */}
          <div className="ae-final-cta relative overflow-hidden rounded-2xl p-8 sm:p-12 text-center mb-12"
            style={{
              background: 'linear-gradient(135deg, rgba(255,106,0,0.15) 0%, rgba(255,106,0,0.05) 50%, rgba(255,255,255,0.02) 100%)',
              border: '1px solid rgba(255,106,0,0.3)',
              boxShadow: '0 0 60px rgba(255,106,0,0.1), 0 0 120px rgba(255,106,0,0.05)',
            }}
          >
            <div
              className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{
                boxShadow: '0 0 40px rgba(255,106,0,0.15) inset',
                animation: 'pulse 3s ease-in-out infinite',
              }}
              aria-hidden="true"
            />
            <div className="relative">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 bg-[#F27D24]/15 border border-[#F27D24]/30">
                <span className="w-2 h-2 rounded-full bg-[#F27D24] animate-pulse" />
                <span className="text-sm font-semibold text-[#F27D24]">Free Report Available</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-plus-jakarta mb-4 leading-tight">
                Your Competitors Are Invisible to AI.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F27D24] to-orange-400">
                  You Do Not Have to Be.
                </span>
              </h2>

              <p className="text-gray-300 mb-8 max-w-xl mx-auto leading-relaxed">
                The Blind Spot Report shows you exactly what ChatGPT, Perplexity, and Google AI say
                when someone searches for a photographer like you - right now, in your city.
                No fluff. No guessing. Real AI output, with a clear picture of your gaps and opportunities.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <Link
                  href="/blindspot"
                  className="inline-flex items-center gap-2 bg-[#F27D24] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#D96416] transition-colors"
                >
                  Get Your Free Blind Spot Report
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <a
                  href="tel:+12134442229"
                  className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors font-semibold"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call (213) 444-2229
                </a>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  100% Free
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  No tech knowledge required
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Results in 48 hours
                </span>
              </div>
            </div>
          </div>

          {/* ── RELATED ARTICLES ── */}
          <section className="mb-12">
            <h2 className="text-xl font-bold text-white font-plus-jakarta mb-6">Related Guides</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                {
                  href: '/blog/does-having-a-blog-actually-help-ai-recommend-your-business',
                  label: 'Industry Guides',
                  title: 'Does Having a Blog Actually Help AI Recommend Your Business?',
                },
                {
                  href: '/blog/how-press-mentions-help-ai-recommend-you',
                  label: 'Authority Building',
                  title: 'How Press Mentions Help AI Recommend You',
                },
                {
                  href: '/blog/does-social-media-help-ai-find-business',
                  label: 'Social Media',
                  title: 'Does Social Media Help AI Find Your Business?',
                },
              ].map((article) => (
                <Link
                  key={article.href}
                  href={article.href}
                  className="group block p-5 rounded-xl bg-white/5 border border-white/10 hover:border-[#F27D24]/30 hover:bg-white/8 transition-all"
                >
                  <div className="text-xs font-semibold text-[#F27D24] uppercase tracking-wider mb-2">{article.label}</div>
                  <p className="text-sm text-gray-300 group-hover:text-white transition-colors leading-snug font-medium">
                    {article.title}
                  </p>
                  <div className="mt-3 flex items-center gap-1 text-xs text-[#F27D24]">
                    Read more
                    <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </section>

        </div>
      </div>
    </>
  );
}
