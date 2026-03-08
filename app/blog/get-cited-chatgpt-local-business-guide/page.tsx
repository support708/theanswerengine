import type { Metadata } from 'next'
import Link from 'next/link'

export const revalidate = 86400
export const dynamic = 'force-static'
export const dynamicParams = true

export const metadata: Metadata = {
  title: 'Get Cited by ChatGPT: Local Business Owner\'s AEO Guide | The Answer Engine',
  description: 'Learn how to get cited by ChatGPT and boost conversions 4.4x higher than Google. Proven tactics for local service businesses to dominate AI search.',
  keywords: [
    'AI visibility',
    'ChatGPT SEO',
    'local business marketing',
    'generative engine optimization',
    'GEO strategy',
    'answer capsules',
    'AEO marketing',
    'AI citations',
    'local search',
    'content optimization',
    'authority building',
    'AI discoverability'
  ],
  authors: [{ name: 'The Answer Engine Team' }],
  openGraph: {
    title: 'Get Cited by ChatGPT: Local Business Owner\'s AEO Guide',
    description: 'Learn how to get cited by ChatGPT and boost conversions 4.4x higher than Google. Proven tactics for local service businesses to dominate AI search.',
    url: 'https://theanswerengine.ai/blog/get-cited-chatgpt-local-business-guide',
    siteName: 'The Answer Engine',
    type: 'article',
    publishedTime: '2026-03-08',
    authors: ['The Answer Engine Team'],
    images: [
      {
        url: 'https://theanswerengine.ai/og/get-cited-chatgpt-local-business-guide.png',
        width: 1200,
        height: 630,
        alt: 'Get Cited by ChatGPT: Local Business Owner\'s AEO Guide'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Get Cited by ChatGPT: Local Business Owner\'s AEO Guide',
    description: 'Learn how to get cited by ChatGPT and boost conversions 4.4x higher than Google. Proven tactics for local service businesses to dominate AI search.',
    images: ['https://theanswerengine.ai/og/get-cited-chatgpt-local-business-guide.png']
  },
  alternates: {
    canonical: 'https://theanswerengine.ai/blog/get-cited-chatgpt-local-business-guide'
  }
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      '@id': 'https://theanswerengine.ai/blog/get-cited-chatgpt-local-business-guide#article',
      headline: 'Get Cited by ChatGPT: Local Business Owner\'s AEO Guide',
      description: 'Learn how to get cited by ChatGPT and boost conversions 4.4x higher than Google. Proven tactics for local service businesses to dominate AI search.',
      datePublished: '2026-03-08',
      dateModified: '2026-03-08',
      author: {
        '@type': 'Organization',
        name: 'The Answer Engine Team',
        url: 'https://theanswerengine.ai'
      },
      publisher: {
        '@type': 'Organization',
        name: 'The Answer Engine',
        url: 'https://theanswerengine.ai'
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://theanswerengine.ai/blog/get-cited-chatgpt-local-business-guide'
      },
      keywords: 'AI visibility, ChatGPT SEO, local business marketing, generative engine optimization, AEO marketing, AI citations'
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://theanswerengine.ai/blog/get-cited-chatgpt-local-business-guide#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How is getting cited by ChatGPT different from ranking in Google?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'AI visitors convert at 4.4 times the rate of traditional organic search, and when someone asks ChatGPT for recommendations, they\'re ready to make a decision. Unlike Google\'s 10 blue links, LLMs typically cite only 2-7 domains per response. If you\'re not in that tight citation window, you\'re not in the conversation.'
          }
        },
        {
          '@type': 'Question',
          name: 'What\'s the single most important thing I can do to get cited by ChatGPT?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The single strongest commonality among cited pages is the presence of answer capsules: short, definitive statements that directly answer a specific question. Write 40-50 words that answer one question completely with no fluff, placed at the very top of your page. Specific data and original research dramatically increase your chances of being cited.'
          }
        },
        {
          '@type': 'Question',
          name: 'How often should I update my website content to stay visible in ChatGPT?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Update your key pages at least quarterly. ChatGPT\'s recency bias means outdated content gets ignored, even if it\'s otherwise excellent. Add a Last updated date at the top of your pages. Recent and clearly dated content has a better chance of getting cited or extracted.'
          }
        },
        {
          '@type': 'Question',
          name: 'Does local SEO still matter if I want to get cited by ChatGPT?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Your business name, address, and phone number must match exactly across all platforms. Inconsistencies can confuse AI models and data aggregators, potentially leading them to select incorrect information or overlook your business entirely. Domains with strong backlink profiles are also more likely to be cited by AI.'
          }
        },
        {
          '@type': 'Question',
          name: 'Can I just optimize my own website, or do I need mentions from other sites?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Third-party mentions are essential. ChatGPT doesn\'t trust what you say about yourself; it trusts what authoritative third parties say about you. Wikipedia, Wikidata, Google Business Profile, major news outlets, and popular review platforms like Yelp and TripAdvisor are primary sources. If your business appears in these places, your odds of being cited improve significantly.'
          }
        },
        {
          '@type': 'Question',
          name: 'What kind of business information is ChatGPT most likely to cite?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Your website needs to clearly communicate business details using structured formats like headings, bullet points, and tables to present your business name, address, phone number, and services. ChatGPT cites local landing pages, homepages, business listings, Contact Us pages, and other pages with consistent crawlable info and clear local signals with geographic words and structured data.'
          }
        },
        {
          '@type': 'Question',
          name: 'How do I track whether ChatGPT is actually citing my business?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Directly test ChatGPT by asking questions about your business and verifying whether you appear in the responses. Run identical prompts across AI platforms for your core category. Track which brands appear and calculate the percentage of mentions each receives. Aim to appear in 30% or more of AI responses for your core category queries.'
          }
        },
        {
          '@type': 'Question',
          name: 'What\'s more important for ChatGPT citations: traditional SEO ranking or something else?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'ChatGPT and AI Mode tend to draw from a wider range of sources, often citing lower-ranking or even non-ranking pages if they provide contextually relevant information. While organic traffic correlates with AI Overview mentions, there\'s only a weak correlation with ChatGPT inclusion specifically. Content depth, structure, and freshness matter most for securing ChatGPT citations.'
          }
        }
      ]
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://theanswerengine.ai/blog/get-cited-chatgpt-local-business-guide#breadcrumb',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://theanswerengine.ai'
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Blog',
          item: 'https://theanswerengine.ai/blog'
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Get Cited by ChatGPT: Local Business Owner\'s AEO Guide',
          item: 'https://theanswerengine.ai/blog/get-cited-chatgpt-local-business-guide'
        }
      ]
    }
  ]
}

function Breadcrumb() {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex items-center gap-2 text-sm text-gray-400">
        <li>
          <Link href="/" className="hover:text-orange-400 transition-colors">
            Home
          </Link>
        </li>
        <li className="text-gray-600">/</li>
        <li>
          <Link href="/blog" className="hover:text-orange-400 transition-colors">
            Blog
          </Link>
        </li>
        <li className="text-gray-600">/</li>
        <li className="text-gray-300 truncate max-w-[200px] sm:max-w-none">
          Get Cited by ChatGPT
        </li>
      </ol>
    </nav>
  )
}

export default function Page() {
  return (
    <div style={{ background: '#0F1117', minHeight: '100vh' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="max-w-4xl mx-auto px-6 py-20">
        <Breadcrumb />

        {/* Hero */}
        <div className="relative overflow-hidden rounded-2xl mb-12" style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)' }}>
          <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 800 400" fill="none" aria-hidden="true">
            <circle cx="650" cy="80" r="200" stroke="#FF6A00" strokeWidth="0.5" />
            <circle cx="650" cy="80" r="140" stroke="#FF6A00" strokeWidth="0.5" />
            <circle cx="650" cy="80" r="80" stroke="#FF6A00" strokeWidth="0.5" />
            <circle cx="150" cy="320" r="120" stroke="#FF6A00" strokeWidth="0.4" />
            <circle cx="150" cy="320" r="70" stroke="#FF6A00" strokeWidth="0.4" />
            <line x1="0" y1="0" x2="800" y2="400" stroke="#FF6A00" strokeWidth="0.3" />
            <line x1="800" y1="0" x2="0" y2="400" stroke="#FF6A00" strokeWidth="0.3" />
            <line x1="400" y1="0" x2="400" y2="400" stroke="#FF6A00" strokeWidth="0.2" />
            <line x1="0" y1="200" x2="800" y2="200" stroke="#FF6A00" strokeWidth="0.2" />
            <rect x="300" y="100" width="200" height="200" stroke="#FF6A00" strokeWidth="0.3" />
            <polygon points="400,50 500,200 300,200" stroke="#FF6A00" strokeWidth="0.3" fill="none" />
          </svg>
          <div className="relative px-8 py-16 sm:px-12 sm:py-20">
            <p className="text-sm font-medium text-orange-400 mb-4">How-To Guides</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 font-plus-jakarta">
              Get Cited by ChatGPT: Local Business Owner's AEO Guide
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span>March 8, 2026</span>
              <span>-</span>
              <span>9 min read</span>
              <span>-</span>
              <span>The Answer Engine Team</span>
            </div>
          </div>
        </div>

        {/* Article Body */}
        <article className="prose-custom">

          {/* Intro */}
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            ChatGPT now has 800 million weekly active users and 5.7 billion monthly visits, making it the 4th most visited website on the planet. Your potential customers are asking it which plumber to call, which dentist to book, and which contractor to trust. The question is: does your business show up in the answer?
          </p>
          <p className="text-gray-300 mb-10 leading-relaxed">
            Right now, only 1.2% of local business locations get recommended by ChatGPT, compared to 35.9% that appear in Google's local 3-pack. That gap is your opportunity, if you act before your competitors figure this out. This guide walks you through exactly what it takes to get your local service business cited by ChatGPT, with no fluff and no theory.
          </p>

          {/* Section 1 */}
          <h2 className="text-2xl font-bold text-white mb-4 mt-12 font-plus-jakarta">
            Why ChatGPT Citations Matter More Than Google Rankings
          </h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
            If you've been pouring budget into Google SEO, that foundation still matters. But the business case for ChatGPT visibility is compelling on its own terms: AI visitors convert at 4.4 times the rate of traditional organic search, and AI-referred users from ChatGPT are 7 times more likely to convert than Google users.
          </p>
          <p className="text-gray-300 mb-4 leading-relaxed">
            Why the conversion difference? When someone types a question into ChatGPT, they're not browsing. They want an answer and they're ready to act on it. If ChatGPT tells them your HVAC company is the best option in their city, they're not clicking through to compare five other results. They're calling you.
          </p>
          <p className="text-gray-300 mb-8 leading-relaxed">
            The catch: LLMs typically cite only 2 to 7 domains per response, compared to Google's 10 blue links. The citation window is tight. If you're not in it, you don't exist in that conversation.
          </p>

          {/* Section 2 */}
          <h2 className="text-2xl font-bold text-white mb-4 mt-12 font-plus-jakarta">
            How ChatGPT Actually Selects Sources to Cite
          </h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
            Before you optimize anything, you need to understand what ChatGPT is looking for. It's not simply rewarding the highest-ranked Google pages. Research shows a weak correlation between high organic traffic and ChatGPT inclusion specifically. ChatGPT draws from a wider range of sources, often citing lower-ranking or even non-ranking pages if they provide contextually relevant information.
          </p>
          <p className="text-gray-300 mb-4 leading-relaxed">
            Three factors dominate the selection process:
          </p>
          <ul className="list-none mb-8 space-y-4">
            <li className="flex gap-3 text-gray-300">
              <span className="text-orange-400 font-bold mt-0.5">1.</span>
              <span><strong className="text-white">Authority signals from third parties.</strong> Wikipedia accounts for 12.1% of all ChatGPT citations, making it the single most referenced source. Domains with 32,000 or more referring domains are 3.5 times more likely to be cited by ChatGPT than sites with fewer than 200. External credibility is weighted heavily.</span>
            </li>
            <li className="flex gap-3 text-gray-300">
              <span className="text-orange-400 font-bold mt-0.5">2.</span>
              <span><strong className="text-white">Content structure and answer quality.</strong> Answer capsules are the strongest structural commonality among cited pages. Original data ranks as the second-strongest differentiator. Content depth, structure, and freshness matter most for securing citations.</span>
            </li>
            <li className="flex gap-3 text-gray-300">
              <span className="text-orange-400 font-bold mt-0.5">3.</span>
              <span><strong className="text-white">Recency.</strong> A full 60.5% of cited pages were published within the last two years, showing ChatGPT's strong recency bias. Outdated content gets ignored even if it was once excellent.</span>
            </li>
          </ul>

          {/* Section 3 */}
          <h2 className="text-2xl font-bold text-white mb-4 mt-12 font-plus-jakarta">
            7 Content Tactics That Get Local Businesses Cited
          </h2>

          <h3 className="text-xl font-semibold text-white mb-3 mt-8">1. Lead With an Answer Capsule</h3>
          <p className="text-gray-300 mb-4 leading-relaxed">
            The single strongest commonality among cited pages is the presence of answer capsules: short, definitive statements that directly answer a specific question. The format is straightforward. Write 40 to 50 words that answer one question completely, with no fluff, placed at the very top of your page.
          </p>
          <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 mb-6">
            <p className="text-sm text-orange-400 font-medium mb-2">Example: Instead of this...</p>
            <p className="text-gray-400 italic mb-4">"Our plumbing company has been serving homeowners in Austin for over 20 years with quality work and great customer service."</p>
            <p className="text-sm text-orange-400 font-medium mb-2">Write this...</p>
            <p className="text-gray-300">"Austin homeowners dealing with a burst pipe need emergency repair within 2 hours to avoid structural damage. Our licensed plumbers respond to Austin emergency calls in under 45 minutes, 24 hours a day, 7 days a week, with no after-hours upcharge."</p>
          </div>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Notice what the second version does: it answers a real question, includes specific information, uses local signals, and gives ChatGPT something concrete to extract and cite.
          </p>

          <h3 className="text-xl font-semibold text-white mb-3 mt-8">2. Front-Load Your Best Content</h3>
          <p className="text-gray-300 mb-6 leading-relaxed">
            44.2% of all LLM citations come from the first 30% of text, making your opening section critical. Don't bury your most important claims, local credentials, or service specifics halfway down the page. Put your most citable content first.
          </p>

          <h3 className="text-xl font-semibold text-white mb-3 mt-8">3. Optimize for Questions, Not Keywords</h3>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Question-optimized content receives 200 to 300% more ChatGPT citations than generic content. For every service page, identify the three to five questions a real customer would ask before booking. Then answer those questions directly on the page, using the actual question as a heading. "How much does a roof replacement cost in Denver?" outperforms "Denver Roof Replacement Services" as a heading for AI visibility.
          </p>

          <h3 className="text-xl font-semibold text-white mb-3 mt-8">4. Include Original Data or Specific Numbers</h3>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Original data ranks as the second-strongest differentiator for cited pages after answer capsules. You don't need a research team. Track your own business numbers: average response time, number of jobs completed in your area, customer satisfaction rates from reviews. Specific claims are citable. Vague marketing language is not.
          </p>

          <h3 className="text-xl font-semibold text-white mb-3 mt-8">5. Structure Your Pages for Extraction</h3>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Use clear headings, bullet points, and short paragraphs. ChatGPT needs to extract information efficiently. Dense walls of text are harder to parse and cite. Your service pages should clearly list: service area with specific cities or neighborhoods, services offered with descriptions, pricing ranges where possible, license numbers and certifications, and typical timeline or availability.
          </p>

          <h3 className="text-xl font-semibold text-white mb-3 mt-8">6. Add Schema Markup</h3>
          <p className="text-gray-300 mb-6 leading-relaxed">
            LocalBusiness schema, FAQ schema, and Service schema give AI models structured signals about what your page contains. ChatGPT cites local landing pages, homepages, business listings, Contact Us pages, and other pages with consistent crawlable information: name, address, phone, hours, website, and clear local signals with geographic words and structured data.
          </p>

          <h3 className="text-xl font-semibold text-white mb-3 mt-8">7. Update Content on a Regular Cadence</h3>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Given that 60.5% of cited pages were published within the last two years, you should update your key pages at least quarterly. Add a "Last updated" date at the top of your pages. Even small updates, such as adding a recent project, updating pricing ranges, or refreshing stats, signal recency to AI crawlers. In fast-moving service categories, recent and clearly dated content has a measurably better chance of getting cited.
          </p>

          {/* Section 4 */}
          <h2 className="text-2xl font-bold text-white mb-4 mt-12 font-plus-jakarta">
            Build Authority: Getting Mentioned by Third Parties
          </h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
            This is the hardest part and the most important. ChatGPT doesn't trust what you say about yourself. It trusts what authoritative third parties say about you.
          </p>
          <p className="text-gray-300 mb-4 leading-relaxed">
            Start with these foundational platforms where ChatGPT regularly pulls information:
          </p>
          <ul className="space-y-3 mb-6">
            {[
              'Google Business Profile: Keep it complete, accurate, and regularly updated with posts and photos.',
              'Yelp and TripAdvisor: Claim your listing and actively manage reviews. ChatGPT cites these platforms directly.',
              'Better Business Bureau: A BBB listing adds institutional credibility that AI models recognize.',
              'Industry-specific directories: Angi, HomeAdvisor, Houzz for contractors; Avvo or FindLaw for lawyers; Healthgrades for medical.',
              'Local news and community sites: A mention in your local newspaper or city blog carries significant authority weight.',
              'Reddit: Reddit is one of the most cited websites by ChatGPT and AI Overviews, appearing in 2.2% of AI Overview citations. Participating helpfully in local subreddits puts your business name in a high-authority context.'
            ].map((item, i) => (
              <li key={i} className="flex gap-3 text-gray-300">
                <span className="text-orange-400 mt-1 shrink-0">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0l1.8 5.4H16l-4.9 3.6 1.8 5.4L8 11l-4.9 3.4 1.8-5.4L0 5.4h6.2z"/></svg>
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-300 mb-8 leading-relaxed">
            ChatGPT also strongly favors businesses with ratings above 4.2 stars. Locations cited by ChatGPT averaged 4.3 stars versus 3.9 on other platforms. A systematic review request process after every completed job isn't optional. It's infrastructure.
          </p>

          {/* Section 5 */}
          <h2 className="text-2xl font-bold text-white mb-4 mt-12 font-plus-jakarta">
            Local SEO Fundamentals That Feed ChatGPT
          </h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
            Traditional local SEO still matters because it feeds the data ecosystem ChatGPT draws from. The most critical foundation: NAP consistency. Your business name, address, and phone number must match exactly across all platforms. Inconsistencies can confuse AI models and data aggregators, potentially leading them to select incorrect information or overlook your business entirely.
          </p>
          <p className="text-gray-300 mb-4 leading-relaxed">
            Consistent business information across platforms increases citation reliability by 40 to 60%. That's not a minor improvement. Run a citation audit using a tool like BrightLocal or Whitespark, fix every mismatch you find, and maintain consistency going forward.
          </p>
          <p className="text-gray-300 mb-8 leading-relaxed">
            Domain authority still plays a role. Domains with 32,000 or more referring domains are 3.5 times more likely to be cited by ChatGPT than sites with fewer than 200. You won't close that gap overnight, but every quality local link from a chamber of commerce, a local business association, or a community organization moves you in the right direction.
          </p>

          {/* Section 6 */}
          <h2 className="text-2xl font-bold text-white mb-4 mt-12 font-plus-jakarta">
            Measuring Your ChatGPT Citation Success
          </h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
            You can't manage what you don't measure. Here's a simple framework built around what's actually trackable:
          </p>
          <div className="space-y-4 mb-8">
            {[
              {
                step: 'Step 1',
                title: 'Build your query list',
                desc: 'Write down the 10 to 15 questions a customer would ask ChatGPT before hiring a business like yours. Include your service type plus your city, your service plus "near me," and comparison queries like "best [service] in [city]."'
              },
              {
                step: 'Step 2',
                title: 'Run weekly tests',
                desc: 'Ask those exact questions in ChatGPT and document which businesses appear in the responses. Note whether your business is cited, whether a competitor is cited instead, and what sources ChatGPT references.'
              },
              {
                step: 'Step 3',
                title: 'Track your citation rate',
                desc: 'Aim to appear in 30% or more of AI responses for your core category queries. Calculate this by dividing the number of queries where you appear by the total queries tested.'
              },
              {
                step: 'Step 4',
                title: 'Monitor across platforms',
                desc: 'Run identical prompts across ChatGPT, Perplexity, and Google AI Mode. Track which brands appear and calculate the percentage of mentions each receives. Different platforms draw from different sources.'
              }
            ].map((item, i) => (
              <div key={i} className="bg-gray-900 border border-gray-800 rounded-xl p-5">
                <p className="text-orange-400 text-xs font-semibold uppercase tracking-wide mb-1">{item.step}</p>
                <p className="text-white font-semibold mb-2">{item.title}</p>
                <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Section 7 */}
          <h2 className="text-2xl font-bold text-white mb-4 mt-12 font-plus-jakarta">
            Common Mistakes Local Businesses Make
          </h2>
          <ul className="space-y-4 mb-8">
            {[
              {
                mistake: 'Focusing only on on-page optimization.',
                fix: 'On-page optimization is necessary but not sufficient. ChatGPT heavily weights external mentions. If your only strategy is tweaking your own website, you\'re missing the bigger picture.'
              },
              {
                mistake: 'Writing generic service descriptions.',
                fix: 'Vague content is not citable content. "We provide excellent plumbing services" gives ChatGPT nothing to extract. Specific claims, local details, and concrete information are what get cited.'
              },
              {
                mistake: 'Ignoring review volume and rating.',
                fix: 'A 3.8-star average with 12 reviews will not get you recommended by ChatGPT. Build a systematic process for requesting reviews after every completed job.'
              },
              {
                mistake: 'Setting it and forgetting it.',
                fix: 'ChatGPT\'s recency bias means content that was optimized a year ago is losing ground to freshly updated pages. Set a quarterly content review on your calendar.'
              },
              {
                mistake: 'Treating AI visibility as separate from local SEO.',
                fix: 'NAP consistency, citation building, and review management all feed AI systems. A unified approach is more efficient and more effective than treating them as separate disciplines.'
              }
            ].map((item, i) => (
              <li key={i} className="border border-gray-800 rounded-xl p-5 bg-gray-900">
                <p className="text-red-400 font-semibold mb-1">Mistake: {item.mistake}</p>
                <p className="text-gray-300 text-sm leading-relaxed"><span className="text-green-400 font-medium">Fix:</span> {item.fix}</p>
              </li>
            ))}
          </ul>

          {/* Section 8 */}
          <h2 className="text-2xl font-bold text-white mb-4 mt-12 font-plus-jakarta">
            Your 90-Day Action Plan for AI Visibility
          </h2>

          <div className="space-y-6 mb-10">
            <div className="relative pl-6 border-l-2 border-orange-400">
              <h3 className="text-lg font-semibold text-white mb-2">Days 1 to 30: Foundation</h3>
              <ul className="space-y-2 text-gray-300 text-sm leading-relaxed">
                <li>Run a NAP audit and fix every inconsistency across Google Business Profile, Yelp, and your top 20 directory listings.</li>
                <li>Rewrite your homepage and top service pages to lead with answer capsules. Put your most important, specific, locally relevant information in the first 30% of each page.</li>
                <li>Add "Last updated" dates to your key pages.</li>
                <li>Add LocalBusiness and FAQ schema markup to your site.</li>
                <li>Build your 15-query test list and run your first ChatGPT baseline audit.</li>
              </ul>
            </div>
            <div className="relative pl-6 border-l-2 border-orange-400">
              <h3 className="text-lg font-semibold text-white mb-2">Days 31 to 60: Authority Building</h3>
              <ul className="space-y-2 text-gray-300 text-sm leading-relaxed">
                <li>Claim and fully complete your listings on Yelp, BBB, Angi, and any industry-specific directories relevant to your service type.</li>
                <li>Launch a systematic review request process. Text or email every customer within 24 hours of job completion.</li>
                <li>Write one question-optimized blog post or FAQ page targeting a high-intent local query.</li>
                <li>Identify one local media outlet or community site where you could earn a mention, and reach out with a relevant story angle.</li>
              </ul>
            </div>
            <div className="relative pl-6 border-l-2 border-orange-400">
              <h3 className="text-lg font-semibold text-white mb-2">Days 61 to 90: Measurement and Iteration</h3>
              <ul className="space-y-2 text-gray-300 text-sm leading-relaxed">
                <li>Run your 15-query ChatGPT test again and compare results to your baseline.</li>
                <li>Identify which queries show competitors being cited and analyze their pages for structural differences.</li>
                <li>Update any service pages that haven't been refreshed in the last 90 days.</li>
                <li>Write a second question-optimized piece targeting a different high-intent query.</li>
                <li>Document your citation rate and set a 90-day target of appearing in at least 30% of your core category queries.</li>
              </ul>
            </div>
          </div>

          <p className="text-gray-300 mb-10 leading-relaxed">
            The local businesses that establish ChatGPT visibility now are building a durable competitive advantage. The gap between appearing in 1.2% of AI recommendations versus becoming a consistently cited source in your market is almost entirely determined by whether you take a structured approach to this before your competitors do.
          </p>

          {/* FAQ Section */}
          <h2 className="text-2xl font-bold text-white mb-8 mt-16 font-plus-jakarta">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6 mb-12">
            {[
              {
                q: 'How is getting cited by ChatGPT different from ranking in Google?',
                a: 'AI visitors convert at 4.4 times the rate of traditional organic search, and when someone asks ChatGPT for recommendations, they\'re ready to make a decision. Unlike Google\'s 10 blue links, LLMs typically cite only 2 to 7 domains per response. If you\'re not in that tight citation window, you\'re not in the conversation.'
              },
              {
                q: "What's the single most important thing I can do to get cited by ChatGPT?",
                a: "The single strongest commonality among cited pages is the presence of answer capsules: short, definitive statements that directly answer a specific question. The format is 40 to 50 words that answer one question completely with no fluff, placed at the very top of your page. Specific data and original research dramatically increase your chances of being cited."
              },
              {
                q: 'How often should I update my website content to stay visible in ChatGPT?',
                a: "Update your key pages at least quarterly. ChatGPT's recency bias means outdated content gets ignored, even if it's otherwise excellent. Add a 'Last updated' date at the top of your pages. Recent and clearly dated content has a better chance of getting cited or extracted, especially in fast-moving service categories."
              },
              {
                q: 'Does local SEO still matter if I want to get cited by ChatGPT?',
                a: "Yes, significantly. Your business name, address, and phone number must match exactly across all platforms. Inconsistencies can confuse AI models and data aggregators, potentially leading them to select incorrect information or overlook your business entirely. Domains with strong backlink profiles are also more likely to be cited by AI."
              },
              {
                q: 'Can I just optimize my own website, or do I need mentions from other sites?',
                a: "Third-party mentions are essential. ChatGPT doesn't trust what you say about yourself; it trusts what authoritative third parties say about you. Wikipedia, Wikidata, Google Business Profile, major news outlets, and popular review platforms like Yelp and TripAdvisor are primary sources. If your business appears in these places, your odds of being cited improve significantly."
              },
              {
                q: 'What kind of business information is ChatGPT most likely to cite?',
                a: "Your website needs to clearly communicate your business details using structured formats like headings, bullet points, and tables to present your business name, address, phone number, and services. ChatGPT cites local landing pages, homepages, business listings, Contact Us pages, and other pages with consistent crawlable information and clear local signals with geographic words and structured data."
              },
              {
                q: "How do I track whether ChatGPT is actually citing my business?",
                a: "Directly test ChatGPT by asking questions about your business and verifying whether you appear in the responses. Run identical prompts across AI platforms for your core category, such as 'best HVAC company in [city]'. Track which brands appear and calculate the percentage of mentions each receives. Aim to appear in 30% or more of AI responses for your core category queries."
              },
              {
                q: "What's more important for ChatGPT citations: traditional SEO ranking or something else?",
                a: "ChatGPT and AI Mode tend to draw from a wider range of sources, often citing lower-ranking or even non-ranking pages if they provide contextually relevant information. While websites with more organic traffic tend to get more mentions in AI Overviews, there's a weak correlation between high organic traffic and ChatGPT inclusion specifically. Content depth, structure, and freshness matter most for securing ChatGPT citations."
              }
            ].map((item, i) => (
              <div key={i} className="border border-gray-800 rounded-xl p-6 bg-gray-900">
                <h3 className="text-white font-semibold mb-3 leading-snug">{item.q}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 p-8 rounded-2xl border border-gray-800 bg-gradient-to-r from-gray-900 to-gray-800">
            <h2 className="text-2xl font-bold text-white mb-4 font-plus-jakarta">Find Out If AI Platforms Can See Your Business</h2>
            <p className="text-gray-300 mb-6">Run 5 high-intent queries in your service area on ChatGPT right now and see if your business appears. If it doesn't, you have a blind spot. Get a free AI visibility check and find out exactly where you stand.</p>
            <a
              href="/blindspot"
              className="inline-block bg-[#FF6A00] text-white font-semibold px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors"
            >
              Get Your Free Blind Spot Report
            </a>
          </div>

        </article>
      </main>
    </div>
  )
}