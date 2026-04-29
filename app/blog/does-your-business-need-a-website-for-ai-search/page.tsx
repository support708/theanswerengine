import type { Metadata } from 'next'
import Link from 'next/link'

export const revalidate = 86400
export const dynamic = 'force-static'
export const dynamicParams = true

const title = 'Does Your Business Need a Website for AI Search in 2026?'
const titleWithSuffix = `${title} | The Answer Engine`
const description =
  '27% of small businesses still have no website. With 45% of consumers using AI to find local services, here is what AI search actually requires to recommend your business.'
const slug = 'does-your-business-need-a-website-for-ai-search'
const publishDate = '2026-03-28'

export const metadata: Metadata = {
  title: titleWithSuffix,
  description,
  keywords: [
    'does my business need a website 2026',
    'AI search website requirements',
    'local business website AI',
    'Google Business Profile vs website AI',
    'ChatGPT website requirements',
    'AI search visibility website',
    'small business website 2026',
    'structured data AI search',
    'schema markup local business',
    'AI recommendations website',
  ],
  openGraph: {
    title: titleWithSuffix,
    description,
    type: 'article',
    publishedTime: publishDate,
    authors: ['https://theanswerengine.ai/about'],
    url: `https://theanswerengine.ai/blog/${slug}`,
    images: [
      {
        url: `https://theanswerengine.ai/blog/${slug}.webp`,
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: titleWithSuffix,
    description,
    images: [`https://theanswerengine.ai/blog/${slug}.webp`],
    site: '@theanswerengine',
  },
  alternates: {
    canonical: `https://theanswerengine.ai/blog/${slug}`,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: title,
      description,
      image: `https://theanswerengine.ai/blog/${slug}.webp`,
      datePublished: publishDate,
      dateModified: publishDate,
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
      articleSection: 'AI Search Strategy',
      keywords: 'business website AI search, local business website 2026, structured data AI, schema markup local business',
      wordCount: 2200,
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Can I rely on just a Google Business Profile without a website for AI search?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. AI platforms like ChatGPT, Perplexity, and Google AI Overviews primarily crawl websites with structured data to generate recommendations. A Google Business Profile provides basic information, but without a website containing schema markup, service pages, and original content, AI platforms lack the depth of information needed to cite your business confidently.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the minimum a local business website needs for AI search visibility?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'At minimum, your website needs LocalBusiness schema markup with accurate NAP (Name, Address, Phone), individual service pages with detailed descriptions, an FAQ page with structured data, fast load times under 3 seconds, and mobile responsiveness. These elements give AI platforms the structured signals they need to recommend you.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does social media help AI platforms find my business?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Social media has limited direct impact on AI search citations. Business and service websites account for 50% of all sources ChatGPT cites, while social media platforms contribute a much smaller share. Social profiles can support your authority, but they cannot replace a website as your primary AI-discoverable asset.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much does structured data actually help with AI citations?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Websites with properly implemented structured data schema get cited in AI responses 3.2 times more often than those without it. Over 72% of websites appearing on Google first page results use schema markup. For local businesses, LocalBusiness schema with accurate service area, hours, and contact details is the most impactful type to implement.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is a one-page website enough for AI search?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A one-page site is significantly better than no site, but multi-page websites with individual service pages, location pages, and FAQ content give AI platforms more structured information to work with. Each page is a potential entry point for AI citations. Businesses with 10 or more indexed pages covering specific services tend to receive more AI recommendations.',
          },
        },
        {
          '@type': 'Question',
          name: 'What percentage of small businesses still don\'t have a website?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'As of 2026, approximately 27% of small businesses still operate without a website. Among home service trades specifically, the number without websites can reach as high as 60%. This represents a significant competitive gap, especially as 45% of consumers now use AI tools like ChatGPT and Perplexity to find local services.',
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

export default function Page() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Breadcrumb */}
      <div className="max-w-4xl mx-auto px-6 pt-20 pb-4">
        <nav className="flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-[#F27D24] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-[#F27D24] transition-colors">Blog</Link>
          <span>/</span>
          <span className="text-gray-400">Does Your Business Need a Website for AI Search?</span>
        </nav>
      </div>

      {/* Hero */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-2xl mb-12" style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)' }}>
          <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 800 400" fill="none">
            <circle cx="120" cy="80" r="60" stroke="#F27D24" strokeWidth="1.5" />
            <circle cx="120" cy="80" r="40" stroke="#F27D24" strokeWidth="0.8" />
            <rect x="300" y="60" width="180" height="120" rx="8" stroke="#F27D24" strokeWidth="1.2" strokeDasharray="8 4" />
            <line x1="390" y1="60" x2="390" y2="180" stroke="#F27D24" strokeWidth="0.8" />
            <line x1="300" y1="120" x2="480" y2="120" stroke="#F27D24" strokeWidth="0.8" />
            <path d="M580 200 L640 160 L700 200 L700 280 L580 280 Z" stroke="#F27D24" strokeWidth="1.2" />
            <rect x="620" y="230" width="40" height="50" stroke="#F27D24" strokeWidth="0.8" />
            <circle cx="680" cy="320" r="45" stroke="#F27D24" strokeWidth="1" strokeDasharray="6 3" />
            <path d="M50 300 Q200 250 350 300 Q500 350 650 300" stroke="#F27D24" strokeWidth="0.8" />
            <polygon points="720,60 750,30 780,60 770,60 770,100 730,100 730,60" stroke="#F27D24" strokeWidth="0.8" />
          </svg>
          <div className="relative px-8 py-16 sm:px-12 sm:py-20">
            <p className="text-sm font-medium text-orange-400 mb-4">AI Search Strategy</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Does Your Business Need a Website for AI Search in 2026?
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span>March 28, 2026</span>
              <span>-</span>
              <span>9 min read</span>
            </div>
          </div>
        </div>
      </div>

      {/* Article Body */}
      <article className="max-w-4xl mx-auto px-6">
        <div className="prose prose-invert prose-lg max-w-none">

          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            27% of small businesses still operate without a website. A year ago, that was a missed opportunity. Today, it is an invisibility cloak. With 45% of consumers now using AI tools to find local services (up from 6% just twelve months ago), the businesses without websites are not just hard to find on Google. They do not exist in the AI search ecosystem at all.
          </p>

          <p className="text-gray-300 leading-relaxed mb-8">
            The question is no longer whether you need a website. It is whether the website you have (or do not have) gives AI platforms enough information to recommend you. Here is what AI search actually requires, what it ignores, and what local businesses need to do right now.
          </p>

          <h2 className="text-2xl font-bold text-white mt-16 mb-6">Why AI Platforms Cannot Recommend You Without a Website</h2>

          <p className="text-gray-300 leading-relaxed mb-6">
            When someone asks ChatGPT, Perplexity, or Google AI Overviews to recommend a plumber, dentist, or real estate agent, those platforms do not pick up the phone and ask around. They scan the internet for structured, crawlable information they can verify across multiple sources.
          </p>

          <p className="text-gray-300 leading-relaxed mb-6">
            Your Google Business Profile helps. Your Yelp listing helps. But neither one provides the depth of information AI platforms need to confidently cite you. Business and service websites account for 50% of all sources ChatGPT cites when making recommendations. Social media profiles, directory listings, and review platforms split the remaining half.
          </p>

          <p className="text-gray-300 leading-relaxed mb-6">
            Without a website, you are competing for AI visibility using only the smaller half of the equation. And you are leaving the most influential source of AI citations completely blank.
          </p>

          <h2 className="text-2xl font-bold text-white mt-16 mb-6">The 27% Problem: Who Is Missing and Why It Matters Now</h2>

          <p className="text-gray-300 leading-relaxed mb-6">
            Roughly 27% of small businesses operate without a website in 2026. For home service trades specifically, that number climbs as high as 60%. Plumbers, electricians, HVAC technicians, roofers: the industries where customers are increasingly turning to AI for recommendations are the same industries with the weakest web presence.
          </p>

          <p className="text-gray-300 leading-relaxed mb-6">
            This creates a massive competitive gap. AI Overviews now appear in 68% of local searches. ChatGPT recommends only about 1.2% of all local business locations. The businesses earning those citations overwhelmingly have one thing in common: a website with structured data that AI platforms can read, verify, and reference.
          </p>

          <p className="text-gray-300 leading-relaxed mb-6">
            If your competitors have websites with schema markup and you do not have a site at all, you are not even in the candidate pool when AI decides who to recommend.
          </p>

          <h2 className="text-2xl font-bold text-white mt-16 mb-6">What AI Search Actually Reads on Your Website</h2>

          <p className="text-gray-300 leading-relaxed mb-6">
            AI platforms do not browse your website the way a customer does. They do not admire your hero image or appreciate your color palette. They parse structured data, read content blocks, and cross-reference what they find against directory listings, reviews, and other sources.
          </p>

          <p className="text-gray-300 leading-relaxed mb-4">
            Here is what matters most:
          </p>

          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-semibold text-white mb-4">The AI Search Checklist</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-[#F27D24] font-bold mt-0.5">1.</span>
                <span><strong className="text-white">LocalBusiness schema markup</strong> with your exact name, address, phone number, service area, and hours. Inconsistencies between your schema and your Google Business Profile confuse AI and reduce citation confidence.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#F27D24] font-bold mt-0.5">2.</span>
                <span><strong className="text-white">Individual service pages</strong> that describe each service in detail. A single "Services" page listing everything in bullet points gives AI less to work with than dedicated pages for each offering.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#F27D24] font-bold mt-0.5">3.</span>
                <span><strong className="text-white">FAQ content with FAQPage schema</strong> that directly answers the questions your customers ask. AI platforms pull from FAQ sections when generating conversational answers.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#F27D24] font-bold mt-0.5">4.</span>
                <span><strong className="text-white">Fast load times</strong> under 3 seconds. AI crawlers have resource limits. If your site is slow, the crawler may not finish indexing your content.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#F27D24] font-bold mt-0.5">5.</span>
                <span><strong className="text-white">Consistent NAP data</strong> that matches every directory listing, review platform, and social profile connected to your business.</span>
              </li>
            </ul>
          </div>

          <p className="text-gray-300 leading-relaxed mb-6">
            Websites with properly implemented structured data get cited in AI responses 3.2 times more often than those without it. That is not a marginal difference. It is the difference between showing up and being invisible.
          </p>

          <h2 className="text-2xl font-bold text-white mt-16 mb-6">Google Business Profile Alone Is Not Enough</h2>

          <p className="text-gray-300 leading-relaxed mb-6">
            A Google Business Profile is essential. No argument there. But relying on it exclusively for AI visibility has serious limitations.
          </p>

          <p className="text-gray-300 leading-relaxed mb-6">
            Your GBP data lives inside Google&apos;s ecosystem. ChatGPT does not read it. Perplexity does not read it. Apple Intelligence does not read it. When a customer asks one of those platforms for a recommendation, the platform crawls the open web. If the only thing it finds is a Yelp listing with your phone number and a few reviews, it has very little to base a recommendation on.
          </p>

          <p className="text-gray-300 leading-relaxed mb-6">
            A website is the one asset that every AI platform can access and evaluate. It is your universal entry point into AI search. Without it, you are visible on Google and invisible everywhere else.
          </p>

          <h2 className="text-2xl font-bold text-white mt-16 mb-6">Social Media Cannot Replace a Website for AI Search</h2>

          <p className="text-gray-300 leading-relaxed mb-6">
            Some business owners believe a strong Instagram or Facebook presence is enough. For customer engagement and brand awareness, social media absolutely has value. For AI search citations, it falls short.
          </p>

          <p className="text-gray-300 leading-relaxed mb-6">
            AI platforms prioritize sources they can parse reliably. Social media posts are ephemeral, unstructured, and often locked behind authentication walls. AI crawlers struggle to extract consistent, verifiable business information from social feeds. Your Instagram bio does not contain schema markup. Your Facebook "About" section does not include FAQPage structured data.
          </p>

          <p className="text-gray-300 leading-relaxed mb-6">
            The platforms that AI cites most are websites with structured content and consistent metadata. Social media supports your brand. A website feeds the algorithm.
          </p>

          <h2 className="text-2xl font-bold text-white mt-16 mb-6">The Structured Data Advantage</h2>

          <p className="text-gray-300 leading-relaxed mb-6">
            Structured data (schema markup) is the language AI platforms speak. It is not a nice-to-have feature anymore. It is the single most impactful technical investment a local business can make for AI visibility.
          </p>

          <p className="text-gray-300 leading-relaxed mb-6">
            Over 72% of websites appearing on Google&apos;s first page use schema markup. Research shows GPT-4 improves its information extraction accuracy from 16% to 54% when processing structured content. That means AI is literally three times better at understanding and recommending your business when your site has proper schema.
          </p>

          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-semibold text-white mb-4">Schema Types Every Local Business Needs</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-[#F27D24]">&#x2022;</span>
                <span><strong className="text-white">LocalBusiness</strong> (or a more specific type like Plumber, Dentist, RealEstateAgent)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#F27D24]">&#x2022;</span>
                <span><strong className="text-white">Service</strong> schema for each service you offer</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#F27D24]">&#x2022;</span>
                <span><strong className="text-white">FAQPage</strong> with real customer questions and detailed answers</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#F27D24]">&#x2022;</span>
                <span><strong className="text-white">Review / AggregateRating</strong> to surface your reputation in structured format</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#F27D24]">&#x2022;</span>
                <span><strong className="text-white">GeoCoordinates</strong> and <strong className="text-white">ServiceArea</strong> to define exactly where you operate</span>
              </li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-white mt-16 mb-6">What a Minimum Viable AI-Ready Website Looks Like</h2>

          <p className="text-gray-300 leading-relaxed mb-6">
            You do not need a 50-page enterprise site. A focused, well-structured website with the right elements can outperform a bloated one that lacks structured data. Here is what the minimum looks like:
          </p>

          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 mb-8">
            <div className="space-y-4 text-gray-300">
              <div>
                <p className="text-white font-semibold">Homepage</p>
                <p>Clear description of who you are, what you do, and where you do it. LocalBusiness schema in the head.</p>
              </div>
              <div>
                <p className="text-white font-semibold">Service Pages (3-5 minimum)</p>
                <p>One page per core service. 500+ words each. Include pricing ranges if possible, process descriptions, and what makes your approach different.</p>
              </div>
              <div>
                <p className="text-white font-semibold">About Page</p>
                <p>Your story, credentials, service area, and team. AI platforms use this to assess authority and expertise.</p>
              </div>
              <div>
                <p className="text-white font-semibold">FAQ Page</p>
                <p>6-10 real questions your customers ask, with detailed answers. FAQPage schema markup on every Q&A pair.</p>
              </div>
              <div>
                <p className="text-white font-semibold">Contact Page</p>
                <p>NAP data that exactly matches your Google Business Profile, Yelp, and every other listing.</p>
              </div>
            </div>
          </div>

          <p className="text-gray-300 leading-relaxed mb-6">
            That is five pages plus schema markup. It is not complicated. It is not expensive. But it puts you miles ahead of the 27% of businesses with no site at all and the majority of businesses whose websites lack any structured data.
          </p>

          <h2 className="text-2xl font-bold text-white mt-16 mb-6">The Clock Is Ticking</h2>

          <p className="text-gray-300 leading-relaxed mb-6">
            AI search adoption is accelerating faster than any channel shift in marketing history. The jump from 6% to 45% of consumers using AI for local services happened in a single year. AI Overviews now appear in 68% of local searches. ChatGPT holds 81% market share among AI chatbots. Perplexity accounts for 15% of all AI referral traffic and is growing.
          </p>

          <p className="text-gray-300 leading-relaxed mb-6">
            Every month you operate without a structured, AI-readable website is another month of compounding invisibility. The businesses building their web presence now are establishing the authority signals that AI platforms will reference for years. The ones waiting are hoping the world stops changing. It will not.
          </p>

          <p className="text-gray-300 leading-relaxed mb-6">
            58% of small businesses without websites plan to build one in 2026. That means competition for AI visibility is about to get harder, not easier. The advantage goes to whoever moves first.
          </p>

          {/* FAQ Section */}
          <h2 className="text-2xl font-bold text-white mt-16 mb-8">Frequently Asked Questions</h2>

          <div className="space-y-6 mb-16">
            <div className="border border-gray-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">Can I rely on just a Google Business Profile without a website for AI search?</h3>
              <p className="text-gray-300">No. AI platforms like ChatGPT, Perplexity, and Google AI Overviews primarily crawl websites with structured data to generate recommendations. A Google Business Profile provides basic information, but without a website containing schema markup, service pages, and original content, AI platforms lack the depth of information needed to cite your business confidently.</p>
            </div>

            <div className="border border-gray-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">What is the minimum a local business website needs for AI search visibility?</h3>
              <p className="text-gray-300">At minimum, your website needs LocalBusiness schema markup with accurate NAP (Name, Address, Phone), individual service pages with detailed descriptions, an FAQ page with structured data, fast load times under 3 seconds, and mobile responsiveness. These elements give AI platforms the structured signals they need to recommend you.</p>
            </div>

            <div className="border border-gray-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">Does social media help AI platforms find my business?</h3>
              <p className="text-gray-300">Social media has limited direct impact on AI search citations. Business and service websites account for 50% of all sources ChatGPT cites, while social media platforms contribute a much smaller share. Social profiles can support your authority, but they cannot replace a website as your primary AI-discoverable asset.</p>
            </div>

            <div className="border border-gray-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">How much does structured data actually help with AI citations?</h3>
              <p className="text-gray-300">Websites with properly implemented structured data get cited in AI responses 3.2 times more often than those without it. Over 72% of websites appearing on Google&apos;s first page use schema markup. For local businesses, LocalBusiness schema with accurate service area, hours, and contact details is the most impactful type to implement.</p>
            </div>

            <div className="border border-gray-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">Is a one-page website enough for AI search?</h3>
              <p className="text-gray-300">A one-page site is significantly better than no site, but multi-page websites with individual service pages, location pages, and FAQ content give AI platforms more structured information to work with. Each page is a potential entry point for AI citations. Businesses with 10 or more indexed pages covering specific services tend to receive more AI recommendations.</p>
            </div>

            <div className="border border-gray-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">What percentage of small businesses still don&apos;t have a website?</h3>
              <p className="text-gray-300">As of 2026, approximately 27% of small businesses still operate without a website. Among home service trades specifically, the number without websites can reach as high as 60%. This represents a significant competitive gap, especially as 45% of consumers now use AI tools like ChatGPT and Perplexity to find local services.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 mb-20 p-8 rounded-2xl border border-gray-800 bg-gradient-to-r from-gray-900 to-gray-800">
          <h2 className="text-2xl font-bold text-white mb-4">Find Out If AI Platforms Can See Your Business</h2>
          <p className="text-gray-300 mb-6">Get a free AI visibility check. No pitch, just the data.</p>
          <Link
            href="/blindspot"
            className="inline-block bg-[#F27D24] text-white font-semibold px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors"
          >
            Get Your Free Blind Spot Report
          </Link>
        </div>
      </article>
    </main>
  )
}
