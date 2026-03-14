import type { Metadata } from 'next'
import Link from 'next/link'

export const revalidate = 86400
export const dynamic = 'force-static'

const title = 'What Content Does ChatGPT Read on Your Site?'
const description =
  'ChatGPT strips your site down to plain text and reads it in chunks. Learn what it actually sees, what it ignores, and why 35% of top websites are blocking its crawler entirely.'
const slug = 'what-content-does-chatgpt-read-on-my-website'
const publishDate = '2026-03-14'

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'what does ChatGPT read on my website',
    'ChatGPT website content',
    'GPTBot crawler',
    'ChatGPT web browsing',
    'AI reads website',
    'ChatGPT HTML parsing',
    'AEO content optimization',
    'answer engine optimization',
  ],
  openGraph: {
    title,
    description,
    type: 'article',
    publishedTime: publishDate,
    authors: ['The Answer Engine Team'],
    url: `https://theanswerengine.ai/blog/${slug}`,
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
          name: 'Does ChatGPT read my entire website at once?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. ChatGPT uses a sliding window approach, reading your page in chunks of roughly 30 to 50 lines at a time. It jumps between sections, sampling content from different parts of the page rather than processing everything sequentially. This means the structure and placement of your most important information matters significantly.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can ChatGPT see my images, videos, or CSS styling?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. When ChatGPT browses a website, it strips away all visual elements. No images, no CSS, no JavaScript interactions, no videos. It reads only the plain text content extracted from your HTML. If critical information exists only in an image or infographic, ChatGPT will never see it.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does ChatGPT read my schema markup or meta tags?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'When ChatGPT fetches a page directly during a browsing session, it primarily reads visible body text. JSON-LD schema markup and meta tags are not extracted during direct page fetches. However, schema data may still influence ChatGPT indirectly through search indexes that ChatGPT references, particularly via the Bing index.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is GPTBot and should I allow it to crawl my site?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'GPTBot is OpenAI\'s web crawler that collects data to train and improve AI models. As of 2025, roughly 35.7% of the top 1000 websites block GPTBot via robots.txt. Whether you should block it depends on your goals. If you want AI platforms to learn about and potentially recommend your business, blocking GPTBot removes you from the training data entirely.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does ChatGPT respect my robots.txt file?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. ChatGPT and GPTBot both respect robots.txt directives. If your robots.txt blocks GPTBot, the crawler will not access your site. However, there is a distinction between the GPTBot training crawler and ChatGPT\'s live browsing feature. Blocking GPTBot primarily prevents your content from being used in training data, while browsing restrictions depend on your broader bot policies.',
          },
        },
        {
          '@type': 'Question',
          name: 'How can I make my content more visible to ChatGPT?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Focus on clear, well-structured HTML with semantic headings, concise paragraphs, and direct answers to common questions. Avoid burying critical information inside JavaScript-rendered widgets, images, or interactive elements. The businesses that consistently get cited by ChatGPT are the ones whose content is readable as plain text without any visual context.',
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
                'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
            }}
          >
            <svg
              className="absolute inset-0 w-full h-full opacity-10"
              viewBox="0 0 800 400"
              fill="none"
              aria-hidden="true"
            >
              {/* Document/page scanning pattern */}
              <rect x="80" y="60" width="200" height="280" rx="8" stroke="#FF6A00" strokeWidth="0.8" fill="none" opacity="0.3" />
              <line x1="110" y1="110" x2="250" y2="110" stroke="#FF6A00" strokeWidth="0.5" opacity="0.25" />
              <line x1="110" y1="140" x2="230" y2="140" stroke="#FF6A00" strokeWidth="0.5" opacity="0.2" />
              <line x1="110" y1="170" x2="250" y2="170" stroke="#FF6A00" strokeWidth="0.5" opacity="0.25" />
              <line x1="110" y1="200" x2="210" y2="200" stroke="#FF6A00" strokeWidth="0.5" opacity="0.15" />
              <line x1="110" y1="230" x2="240" y2="230" stroke="#FF6A00" strokeWidth="0.5" opacity="0.2" />
              <line x1="110" y1="260" x2="250" y2="260" stroke="#FF6A00" strokeWidth="0.5" opacity="0.15" />
              {/* Eye/scanner icon */}
              <ellipse cx="600" cy="200" rx="120" ry="70" stroke="#FF6A00" strokeWidth="0.6" fill="none" opacity="0.2" />
              <circle cx="600" cy="200" r="35" stroke="#FF6A00" strokeWidth="0.6" fill="none" opacity="0.25" />
              <circle cx="600" cy="200" r="12" fill="#FF6A00" opacity="0.1" />
              {/* Connecting lines */}
              <line x1="280" y1="180" x2="480" y2="180" stroke="#FF6A00" strokeWidth="0.3" opacity="0.15" strokeDasharray="4 4" />
              <line x1="280" y1="220" x2="480" y2="220" stroke="#FF6A00" strokeWidth="0.3" opacity="0.15" strokeDasharray="4 4" />
            </svg>
            <div className="relative px-8 py-16 sm:px-12 sm:py-20">
              <p className="text-sm font-medium text-orange-400 mb-4">How-To Guides</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 font-plus-jakarta">
                What Content Does ChatGPT Actually Read on Your Site?
              </h1>
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span>March 14, 2026</span>
                <span>-</span>
                <span>10 min read</span>
                <span>-</span>
                <span>The Answer Engine Team</span>
              </div>
            </div>
          </div>

          {/* Article Body */}
          <article className="prose prose-invert prose-lg max-w-none">

            {/* Intro */}
            <p className="text-xl text-gray-300 leading-relaxed mb-10">
              You spent months building your website. Custom design, polished copy,
              professional photography, interactive elements. Then a potential customer
              asks ChatGPT for a recommendation in your industry, and your business
              does not come up. The reason might surprise you: ChatGPT never actually
              saw most of what you built. When ChatGPT visits your site, it does not
              experience it the way a human does. It strips away everything visual and
              reads only the raw text. If your most important content lives inside
              images, JavaScript widgets, or dynamically loaded components,{' '}
              <strong className="text-white">ChatGPT has no idea it exists.</strong>
            </p>

            {/* Section 1 */}
            <h2 className="text-2xl font-bold text-white mt-12 mb-4 font-plus-jakarta">
              How ChatGPT Actually Processes Your Website
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              When ChatGPT browses a website (through its built-in browsing feature
              or plugins like Browse with Bing), it sends a standard HTTP GET request
              to your server. What comes back is raw HTML. From there, ChatGPT
              extracts only the plain text content. No CSS. No images. No JavaScript
              interactions. No videos. No animations. Your beautiful hero section
              with the parallax scrolling effect? ChatGPT sees a paragraph of text
              and nothing else.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              More importantly, ChatGPT does not read your entire page in one pass.
              It uses a sliding window approach, processing content in chunks of
              roughly 30 to 50 lines at a time. It might start at line 0, jump to
              line 30, then skip to line 80. Each read operation returns a fixed
              window of text. This means the placement of your most critical
              information on the page is not arbitrary. If your key selling points
              are buried at the bottom of a 3,000-word page, ChatGPT may never
              reach them.
            </p>

            {/* Stat callout */}
            <div className="my-8 p-6 rounded-xl border border-gray-700" style={{ backgroundColor: '#1a1a2e' }}>
              <div className="text-center">
                <span className="text-4xl font-bold text-orange-400">35.7%</span>
                <p className="text-gray-300 mt-2">
                  of the top 1,000 websites now block GPTBot (OpenAI&apos;s crawler)
                  via robots.txt, up from just 5% when it launched in August 2023.
                </p>
              </div>
            </div>

            {/* Section 2 */}
            <h2 className="text-2xl font-bold text-white mt-12 mb-4 font-plus-jakarta">
              What ChatGPT Can See (and What It Cannot)
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Understanding the divide between what ChatGPT reads and what it
              ignores is the first step toward making your content AI-visible. Here
              is the breakdown.
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3 font-plus-jakarta">
              What ChatGPT reads:
            </h3>
            <div className="my-6 p-6 rounded-xl border border-gray-800 bg-gray-900">
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 font-bold mt-0.5">&#8226;</span>
                  <span><strong className="text-white">Plain HTML text content</strong> in headings, paragraphs, lists, and tables</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 font-bold mt-0.5">&#8226;</span>
                  <span><strong className="text-white">Semantic HTML structure</strong> including h1 through h6 hierarchy, section tags, and article tags</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 font-bold mt-0.5">&#8226;</span>
                  <span><strong className="text-white">Anchor text and link destinations</strong> that provide context about related content</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 font-bold mt-0.5">&#8226;</span>
                  <span><strong className="text-white">Alt text on images</strong> (the only part of an image ChatGPT can process)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 font-bold mt-0.5">&#8226;</span>
                  <span><strong className="text-white">Static table data</strong> rendered directly in HTML</span>
                </li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3 font-plus-jakarta">
              What ChatGPT ignores:
            </h3>
            <div className="my-6 p-6 rounded-xl border border-gray-800 bg-gray-900">
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 font-bold mt-0.5">&#8226;</span>
                  <span><strong className="text-white">Images, videos, and audio files</strong> unless they have descriptive alt text or transcripts</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 font-bold mt-0.5">&#8226;</span>
                  <span><strong className="text-white">JavaScript-rendered content</strong> that loads after the initial page request</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 font-bold mt-0.5">&#8226;</span>
                  <span><strong className="text-white">CSS and visual styling</strong> including layout, colors, and typography choices</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 font-bold mt-0.5">&#8226;</span>
                  <span><strong className="text-white">Interactive elements</strong> like accordions, tabs, carousels, and modal windows</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 font-bold mt-0.5">&#8226;</span>
                  <span><strong className="text-white">Login-protected and paywalled content</strong> behind authentication walls</span>
                </li>
              </ul>
            </div>

            <p className="text-gray-300 leading-relaxed mb-4">
              This is why so many visually impressive websites perform poorly in AI
              search. The business invested in design and interactivity, but the
              actual text content that ChatGPT processes is thin, generic, or missing
              entirely. A simple, text-heavy page with clear headings and direct
              answers will outperform a million-dollar website with beautiful
              animations every single time in the AI context.
            </p>

            {/* Section 3 */}
            <h2 className="text-2xl font-bold text-white mt-12 mb-4 font-plus-jakarta">
              The Schema and Meta Tag Question
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              One of the most common misconceptions is that ChatGPT reads your
              JSON-LD schema markup when it visits your page. Testing from multiple
              independent researchers has confirmed this is not the case during
              direct page fetches. When ChatGPT browses a page in real time, it
              extracts visible body content. Hidden metadata and structured data
              embedded in script tags are not part of what it processes.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              That does not mean{' '}
              <Link href="/blog/does-schema-markup-help-ai-search" className="text-orange-400 hover:text-orange-300 transition-colors">
                schema markup is irrelevant to AI visibility
              </Link>. Schema plays a critical role in how search engines index your
              content, and ChatGPT pulls from the Bing search index when generating
              responses. So while ChatGPT does not read your schema directly, your
              schema influences the indexed version of your content that ChatGPT
              references. The distinction matters because it changes how you should
              think about optimization.
            </p>

            {/* Stat callout */}
            <div className="my-8 p-6 rounded-xl border border-gray-700" style={{ backgroundColor: '#1a1a2e' }}>
              <div className="text-center">
                <span className="text-4xl font-bold text-orange-400">49.4%</span>
                <p className="text-gray-300 mt-2">
                  of news websites now block GPTBot outright, making it the
                  most-blocked AI crawler in the publishing industry.
                </p>
              </div>
            </div>

            {/* Section 4 */}
            <h2 className="text-2xl font-bold text-white mt-12 mb-4 font-plus-jakarta">
              The GPTBot Crawler vs. ChatGPT Browsing
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              There is an important distinction most businesses miss: GPTBot and
              ChatGPT&apos;s browsing feature are two different systems with
              different purposes.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              <strong className="text-white">GPTBot</strong> is OpenAI&apos;s web
              crawler. It systematically crawls websites to collect training data for
              AI models. This is the crawler you can block via robots.txt. When you
              block GPTBot, you are preventing your content from being included in
              future model training. As of mid-2025, over a third of the top 1,000
              websites have blocked it.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              <strong className="text-white">ChatGPT browsing</strong> is the
              real-time feature that lets ChatGPT visit specific URLs during a
              conversation. This is what happens when a user pastes a link or
              ChatGPT decides to look something up through Bing. This browsing
              feature respects robots.txt as well, but it operates differently from
              the training crawler.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              The connection between your website and ChatGPT runs deeper than most
              businesses realize. Your content feeds into ChatGPT through multiple
              channels: the{' '}
              <Link href="/blog/bing-places-chatgpt-connection" className="text-orange-400 hover:text-orange-300 transition-colors">
                Bing search index
              </Link>, direct browsing, and training data. Blocking one channel
              does not block them all, and understanding which channels matter for
              your business is essential.
            </p>

            {/* Section 5 */}
            <h2 className="text-2xl font-bold text-white mt-12 mb-4 font-plus-jakarta">
              Why Your Google Business Profile Does Not Help Here
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Many local business owners assume their Google Business Profile (GBP)
              data feeds into ChatGPT. It does not.{' '}
              <Link href="/blog/chatgpt-cant-see-google-business-profile" className="text-orange-400 hover:text-orange-300 transition-colors">
                ChatGPT cannot access Google Business Profiles
              </Link>{' '}
              because Google restricts that data to its own ecosystem. Your GBP
              reviews, hours, photos, and Q&amp;A content are invisible to ChatGPT.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              This means everything ChatGPT knows about your business has to come
              from your actual website and third-party sources that are publicly
              crawlable. If your website is light on content and you have been
              relying on your Google listing to do the heavy lifting, you are
              invisible to an entire category of AI platforms. Your website text is
              the only content you fully control that ChatGPT can read.
            </p>

            {/* Section 6 */}
            <h2 className="text-2xl font-bold text-white mt-12 mb-4 font-plus-jakarta">
              What This Means for Your Business
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              The businesses winning in AI search are not the ones with the most
              beautiful websites. They are the ones whose plain text content
              directly answers the questions people are asking AI platforms. When
              ChatGPT strips your website down to raw text, what remains needs to
              clearly communicate who you are, what you do, where you operate, and
              why you are the best option.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              This is a fundamental shift from traditional web strategy. For two
              decades, businesses optimized for visual impact. Bigger images, smoother
              animations, more interactive features. None of that registers with AI.
              The new competitive advantage is content clarity: structured, direct,
              comprehensive text that reads well even without visual context.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              The specific content strategies that drive AI citations, including
              how to structure pages, where to place key information within the
              sliding window, and how to optimize for the Bing index that ChatGPT
              pulls from, require a level of specificity that goes beyond general
              guidance. Every industry and business type has different patterns that
              trigger AI recommendations. Knowing your specific pattern is what
              separates businesses that get cited from businesses that get ignored.
            </p>

            {/* Stat callout */}
            <div className="my-8 p-6 rounded-xl border border-gray-700" style={{ backgroundColor: '#1a1a2e' }}>
              <div className="text-center">
                <span className="text-4xl font-bold text-orange-400">5.14%</span>
                <p className="text-gray-300 mt-2">
                  of all domains globally now include disallow rules for GPTBot
                  in their robots.txt, per January 2026 crawler traffic data.
                </p>
              </div>
            </div>

          </article>

          {/* FAQ Section */}
          <section className="mt-16" aria-labelledby="faq-heading">
            <h2
              id="faq-heading"
              className="text-2xl font-bold text-white mb-8 font-plus-jakarta"
            >
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">

              <div className="p-6 rounded-xl border border-gray-800 bg-gray-900">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Does ChatGPT read my entire website at once?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  No. ChatGPT uses a sliding window approach, reading your page in
                  chunks of roughly 30 to 50 lines at a time. It jumps between
                  sections, sampling content from different parts of the page rather
                  than processing everything sequentially. This means the structure
                  and placement of your most important information matters
                  significantly.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-gray-800 bg-gray-900">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Can ChatGPT see my images, videos, or CSS styling?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  No. When ChatGPT browses a website, it strips away all visual
                  elements. No images, no CSS, no JavaScript interactions, no
                  videos. It reads only the{' '}
                  <strong className="text-white">plain text content</strong>{' '}
                  extracted from your HTML. If critical information exists only in
                  an image or infographic, ChatGPT will never see it.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-gray-800 bg-gray-900">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Does ChatGPT read my schema markup or meta tags?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Not during direct page fetches. When ChatGPT browses a page in
                  real time, it primarily reads visible body text. JSON-LD schema
                  and meta tags are not extracted. However, schema data may still
                  influence ChatGPT indirectly through search indexes (particularly
                  Bing) that ChatGPT references when generating responses.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-gray-800 bg-gray-900">
                <h3 className="text-lg font-semibold text-white mb-3">
                  What is GPTBot and should I allow it to crawl my site?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  GPTBot is OpenAI&apos;s web crawler that collects data to train
                  and improve AI models. As of 2025, roughly{' '}
                  <strong className="text-white">35.7% of the top 1,000 websites</strong>{' '}
                  block GPTBot via robots.txt. Whether you should block it depends
                  on your goals. If you want AI platforms to learn about and
                  potentially recommend your business, blocking GPTBot removes you
                  from the training data entirely.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-gray-800 bg-gray-900">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Does ChatGPT respect my robots.txt file?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Yes. Both GPTBot and ChatGPT&apos;s browsing feature respect
                  robots.txt directives. If your robots.txt blocks GPTBot, the
                  crawler will not access your site. There is a distinction between
                  the training crawler and the live browsing feature, but both
                  follow your robots.txt rules.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-gray-800 bg-gray-900">
                <h3 className="text-lg font-semibold text-white mb-3">
                  How can I make my content more visible to ChatGPT?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Focus on clear, well-structured HTML with semantic headings,
                  concise paragraphs, and direct answers to common questions. Avoid
                  burying critical information inside JavaScript widgets, images, or
                  interactive elements. The businesses that consistently get cited by
                  ChatGPT are the ones whose content is{' '}
                  <strong className="text-white">readable as plain text</strong>{' '}
                  without any visual context.
                </p>
              </div>

            </div>
          </section>

          {/* CTA Section */}
          <div className="mt-16 p-8 rounded-2xl border border-gray-800 bg-gradient-to-r from-gray-900 to-gray-800">
            <h2 className="text-2xl font-bold text-white mb-4 font-plus-jakarta">
              What Does ChatGPT Actually See When It Visits Your Site?
            </h2>
            <p className="text-gray-300 mb-6">
              Most businesses have no idea what their website looks like to AI. We
              will show you exactly what ChatGPT reads, what it misses, and where
              your content gaps are costing you citations. Free analysis, no
              commitment.
            </p>
            <a
              href="/blindspot"
              className="inline-block bg-[#FF6A00] text-white font-semibold px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors"
            >
              Get Your Free Blind Spot Report
            </a>
          </div>

          {/* Author Attribution */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                AE
              </div>
              <div>
                <p className="text-white font-medium text-sm">The Answer Engine Team</p>
                <p className="text-gray-500 text-sm">
                  Helping local service businesses stay visible in an AI-first world.
                </p>
              </div>
            </div>
          </div>

        </div>
      </main>
    </>
  )
}
