import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const revalidate = 86400
export const dynamic = 'force-static'
export const dynamicParams = true

const title = 'Does Video Content Help AI Find Your Business'
const titleWithSuffix = title
const description =
  'Video content can help AI platforms find your business, but the relationship is more nuanced than most marketers realize. Here is what the data actually says.'
const slug = 'does-video-content-help-ai-find-your-business'
const publishDate = '2026-04-08'

export const metadata: Metadata = {
  title: titleWithSuffix,
  description,
  keywords: [
    'video content AI search',
    'does video help AI find business',
    'YouTube AI visibility',
    'video vs text AI search',
    'AI search video content',
    'video SEO AI platforms',
    'ChatGPT video content',
    'Perplexity video citations',
    'video content answer engine optimization',
    'AI search business discovery video',
  ],
  openGraph: {
    title: titleWithSuffix,
    description,
    type: 'article',
    publishedTime: publishDate,
    authors: ['The Answer Engine Team'],
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
      articleSection: 'Myth Busters',
      keywords:
        'video content AI search, YouTube AI visibility, video SEO AI platforms, answer engine optimization',
      wordCount: 2900,
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Does video content directly help AI platforms find my business?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Not directly. AI platforms like ChatGPT, Perplexity, and Google AI Overviews cannot watch video files. They read the text layers around videos: transcripts, descriptions, titles, and captions. Video helps indirectly when it generates readable text content that AI can index and cite.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which video platform do AI search engines prefer?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'YouTube dominates by an enormous margin. Research shows YouTube earns over 200 times more AI citations than any other video platform, including Vimeo and Wistia. This is because YouTube produces multiple machine-readable text layers that AI platforms can process.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do YouTube views or subscriber counts affect AI search visibility?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Views, likes, and subscriber counts have near-zero correlation with AI citation frequency. AI platforms evaluate structural signals like transcript quality, description depth, chapter markers, and keyword-to-topic alignment rather than popularity metrics.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is video content better or worse than blog posts for AI visibility?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Blog posts consistently outperform standalone video for AI visibility because text is natively crawlable. However, video embedded in blog posts with transcripts, structured markup, and topical descriptions can amplify both. The combination is more powerful than either alone.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can short-form video like Reels or TikToks help with AI search?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Rarely. Short-form video on Instagram, TikTok, or YouTube Shorts produces very little machine-readable text and sits on platforms AI crawlers cannot fully access. These formats are effective for audience growth but contribute almost nothing to AI search visibility on their own.',
          },
        },
        {
          '@type': 'Question',
          name: 'What makes a YouTube video likely to be cited by AI?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Cited videos share several structural traits: accurate uploaded transcripts rather than auto-generated captions, descriptions that function as written summaries, chapter timestamps that divide content into identifiable topics, and long-form content in the 8 to 20 minute range. Structural depth matters more than production quality.',
          },
        },
        {
          '@type': 'Question',
          name: 'Should I create video content for AI search or focus on written content?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For most local businesses, written content should be the foundation. Video is a multiplier, not a replacement. Focus first on FAQ pages, service descriptions, and blog content optimized for AI. Then use video to reinforce those topics, embed transcripts, and create corroborating content that strengthens your overall authority signal.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do AI platforms like ChatGPT have access to YouTube video content?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'ChatGPT has a partnership with YouTube that allows it to process video transcripts in certain contexts. Perplexity accesses YouTube metadata and transcripts through web crawling. Google AI Overviews has the deepest integration since Google owns YouTube. Each platform processes video content differently, making optimization complex without a unified strategy.',
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
    {
      '@type': 'Organization',
      name: 'The Answer Engine',
      url: 'https://theanswerengine.ai',
      logo: {
        '@type': 'ImageObject',
        url: 'https://theanswerengine.ai/logo.png',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-213-444-2229',
        contactType: 'customer service',
        email: 'support@theanswerengine.ai',
      },
    },
  ],
}

export default function Page() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb */}
      <div className="max-w-4xl mx-auto px-6 pt-20 pb-4">
        <nav className="flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-[#FF6A00] transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-[#FF6A00] transition-colors">
            Blog
          </Link>
          <span>/</span>
          <span className="text-gray-400">{title}</span>
        </nav>
      </div>

      {/* Hero */}
      <header className="relative max-w-4xl mx-auto px-6 pb-12 overflow-hidden">
        {/* Inline SVG Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" aria-hidden="true">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="hero-grid-145"
                x="0"
                y="0"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path d="M40 0L0 0 0 40" fill="none" stroke="#FF6A00" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-grid-145)" />
          </svg>
        </div>
        {/* Gradient Overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#FF6A00]/[0.04] to-transparent pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-[#FF6A00]/10 text-[#FF6A00] px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase">
              Myth Busters
            </span>
            <time className="text-gray-500 text-sm">{publishDate}</time>
          </div>
          <h1 className="font-plus-jakarta text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            {title}
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
            The verdict is more nuanced than you think. Video content can boost your AI
            visibility, but only under specific conditions most businesses miss entirely.
          </p>

          {/* Featured Image */}
          <div className="mt-8 rounded-xl overflow-hidden border border-white/[0.05]">
            <Image
              src={`/blog/${slug}.webp`}
              alt="Visualization showing how AI platforms process video content versus text content for business discovery"
              width={1200}
              height={630}
              priority
              className="w-full"
            />
          </div>
        </div>
      </header>

      {/* Article Body */}
      <article className="max-w-4xl mx-auto px-6 pb-20">
        <div className="prose prose-invert prose-lg max-w-none prose-headings:font-plus-jakarta prose-headings:text-white prose-p:text-gray-300 prose-a:text-[#FF6A00] prose-a:no-underline hover:prose-a:underline prose-strong:text-white">

          {/* Table of Contents */}
          <div className="ae-toc">
            <div className="ae-toc-title">What You Will Learn</div>
            <ul>
              <li>
                <a href="#the-myth">The Popular Myth About Video and AI Search</a>
              </li>
              <li>
                <a href="#how-ai-reads-video">How AI Platforms Actually Process Video Content</a>
              </li>
              <li>
                <a href="#youtube-advantage">Why YouTube Is the Only Video Platform That Matters for AI</a>
              </li>
              <li>
                <a href="#video-vs-text">Video vs. Text: Which Earns More AI Citations</a>
              </li>
              <li>
                <a href="#when-video-helps">When Video Content Actually Does Help AI Find You</a>
              </li>
              <li>
                <a href="#platform-differences">How ChatGPT, Perplexity, and Google AI Handle Video Differently</a>
              </li>
              <li>
                <a href="#short-form-video">The Short-Form Video Trap Most Businesses Fall Into</a>
              </li>
              <li>
                <a href="#decision-matrix">Should Your Business Invest in Video for AI Visibility</a>
              </li>
              <li>
                <a href="#faq">Frequently Asked Questions</a>
              </li>
            </ul>
          </div>

          {/* Stats Grid */}
          <div className="ae-stats-grid">
            <div className="ae-stat-card">
              <div className="ae-stat-value ae-accent">200x</div>
              <div className="ae-stat-label">YOUTUBE&apos;S AI CITATION ADVANTAGE OVER VIMEO</div>
            </div>
            <div className="ae-stat-card">
              <div className="ae-stat-value ae-accent">94%</div>
              <div className="ae-stat-label">OF VIDEO AI CITATIONS COME FROM LONG-FORM</div>
            </div>
            <div className="ae-stat-card">
              <div className="ae-stat-value ae-accent">3.2x</div>
              <div className="ae-stat-label">MORE CITATIONS FOR TEXT VS. VIDEO ALONE</div>
            </div>
            <div className="ae-stat-card">
              <div className="ae-stat-value ae-accent">5.7%</div>
              <div className="ae-stat-label">SHORT-FORM VIDEO CITATION RATE</div>
            </div>
          </div>

          <p>
            If you have invested in video marketing, you have probably heard some version of this
            claim: &quot;Video content helps you get found on AI search engines.&quot; It sounds
            reasonable. Video is everywhere. AI is everywhere. Surely they overlap.
          </p>

          <p>
            The reality is far more complicated. AI platforms like ChatGPT, Perplexity, and Google
            AI Overviews process the world in text. They cannot watch a video. They cannot hear
            your voice. What they can do is read the text layers surrounding your video content:
            transcripts, descriptions, titles, and metadata. And that distinction changes
            everything about how businesses should think about video and AI visibility.
          </p>

          <p>
            This is not a reason to abandon video. It is a reason to understand exactly how video
            contributes to AI discovery, and under what conditions it helps versus when it
            contributes nothing at all.
          </p>

          {/* CTA Inline 1 */}
          <div className="ae-cta-inline">
            <p>
              Not sure how AI platforms currently see your business? Get a free snapshot in under
              two minutes.
            </p>
            <Link href="/blindspot">Run Your Free AI Blind Spot Report</Link>
          </div>

          {/* Section 1 */}
          <span className="ae-section-label" id="the-myth">
            The Myth
          </span>
          <h2>The Popular Myth About Video and AI Search</h2>

          <p>
            The myth goes like this: video content signals authority, authority signals trust, and
            trust means AI recommends you. It is an appealing chain of logic. But it skips a
            critical step: how AI platforms actually gather information about your business.
          </p>

          <p>
            AI search engines are not browsing the internet the way a human does. They do not
            stumble across your YouTube channel and think &quot;impressive content, let&apos;s
            recommend this business.&quot; They crawl machine-readable text. They index
            structured data. They weigh signals from directories, review platforms, and text-based
            web content. Video files are, in their raw form, invisible to this process.
          </p>

          <div className="ae-callout ae-callout-warning">
            <div className="ae-callout-title">The Myth vs. The Mechanism</div>
            <p>
              Posting a video does not tell AI anything about your business. Uploading a video to
              YouTube with a keyword-rich title, a detailed description, and an accurate uploaded
              transcript creates text layers that AI can process. Those are very different actions
              with very different outcomes. Most businesses do the first and wonder why the second
              never happens.
            </p>
          </div>

          <p>
            As we cover in our guide to{' '}
            <Link href="/blog/does-having-a-blog-actually-help-ai-recommend-your-business">
              whether blogs help AI recommend your business
            </Link>
            , the pattern is consistent: structured, machine-readable text is the currency of AI
            visibility. Video is only valuable to the extent it generates that currency.
          </p>

          {/* Section 2 */}
          <span className="ae-section-label" id="how-ai-reads-video">
            How AI Reads Video
          </span>
          <h2>How AI Platforms Actually Process Video Content</h2>

          <p>
            Understanding the mechanism removes the mystery. Here is what happens when an AI
            platform encounters video content.
          </p>

          <p>
            AI search engines do not have video players. When they crawl a YouTube page, they
            read the page source: the title tag, the meta description, the transcript data, the
            structured metadata in the page&apos;s JSON-LD, and the description text in the
            video&apos;s description field. That is the totality of what they process. The video
            file itself, the audio, the visual content, is inaccessible to standard crawlers.
          </p>

          <p>
            Transcripts change this significantly. When a creator uploads an accurate manual
            transcript, that text becomes crawlable. AI platforms can read every word spoken in
            the video as text. This means a 15-minute video that covers a technical topic in depth
            creates thousands of words of indexable content. A 15-minute video with no transcript
            creates almost none.
          </p>

          <div className="ae-callout ae-callout-info">
            <div className="ae-callout-title">The Transcript Gap</div>
            <p>
              Research into AI citation patterns shows that manually uploaded transcripts
              dramatically outperform auto-generated captions for citation rates. Auto-generated
              captions contain errors, lack punctuation, and produce text quality that AI platforms
              weight less heavily. The difference between uploading your own transcript versus
              relying on YouTube&apos;s auto-captions can determine whether your content is cited
              at all.
            </p>
          </div>

          {/* CTA Inline 2 */}
          <div className="ae-cta-inline">
            <p>
              Wondering how much of your existing video content is readable to AI? Our Blind Spot
              Report shows you the gaps.
            </p>
            <Link href="/blindspot">Analyze Your Video AI Visibility</Link>
          </div>

          {/* Section 3 */}
          <span className="ae-section-label" id="youtube-advantage">
            The YouTube Advantage
          </span>
          <h2>Why YouTube Is the Only Video Platform That Matters for AI</h2>

          <p>
            Not all video platforms are equal in the eyes of AI search engines. The data is
            striking: YouTube earns more than 200 times the AI citations of any competing video
            platform. Vimeo, Wistia, Loom, Dailymotion, and every other hosting option are
            functionally invisible compared to YouTube&apos;s AI visibility.
          </p>

          <p>
            This gap exists for structural reasons. YouTube is the only video platform that
            produces all of the text layers AI platforms need: transcripts at scale, rich
            metadata, chapter markers, community engagement signals, and deep integration with
            Google&apos;s own crawling and indexing infrastructure. Every other platform produces
            a subset of those signals, if any.
          </p>

          <p>
            For a more detailed analysis of how this advantage plays out across specific AI
            platforms, read our dedicated guide on{' '}
            <Link href="/blog/how-to-get-your-youtube-videos-cited-by-ai-platforms">
              how to get your YouTube videos cited by AI platforms
            </Link>
            . The short version: if your video content is not on YouTube, it is contributing
            almost nothing to your AI search visibility.
          </p>

          <div className="ae-quote">
            <blockquote>
              &quot;YouTube does not just lead the video category for AI citations. It is the only
              video platform that meaningfully exists in AI search results. Everything else is
              statistical noise.&quot;
            </blockquote>
            <cite>OtterlyAI Video Citation Research, 2025</cite>
          </div>

          {/* Section 4 */}
          <span className="ae-section-label" id="video-vs-text">
            Video vs. Text
          </span>
          <h2>Video vs. Text: Which Earns More AI Citations</h2>

          <p>
            This is the comparison most video marketers avoid asking. The answer is clear:
            standalone text content, specifically well-structured blog posts, FAQ pages, and
            service page copy, consistently outperforms standalone video for AI search citations.
            The reason goes back to the crawlability principle.
          </p>

          <p>
            Text content is natively machine-readable. An AI platform can parse a 1,500-word blog
            post entirely in one crawl. It can extract specific sentences to cite as answers. It
            can map the content to specific questions and build confidence signals from the
            structure. None of that work requires an intermediate translation step.
          </p>

          <p>
            Video content requires the transcript layer to become equivalent. And even then, the
            text extracted from a video transcript tends to be less precise than purposefully
            written content because spoken language is structured differently from written
            language. Sentences are longer, context depends on what came before, and the density
            of citable claims per paragraph is lower.
          </p>

          {/* Comparison Table */}
          <div className="ae-comparison-table not-prose my-10 overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>Content Type</th>
                  <th>AI Crawlability</th>
                  <th>Citation Frequency</th>
                  <th>Setup Effort</th>
                  <th>Best Platform</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Blog Post / Article</td>
                  <td className="text-green-400 font-semibold">Native</td>
                  <td className="text-green-400 font-semibold">High</td>
                  <td>Low</td>
                  <td>Any CMS</td>
                </tr>
                <tr>
                  <td>YouTube + Transcript</td>
                  <td className="text-yellow-400 font-semibold">Translated</td>
                  <td className="text-yellow-400 font-semibold">Medium-High</td>
                  <td>Medium</td>
                  <td>YouTube Only</td>
                </tr>
                <tr>
                  <td>YouTube Auto-Captions</td>
                  <td className="text-yellow-400 font-semibold">Translated</td>
                  <td className="text-yellow-400 font-semibold">Low-Medium</td>
                  <td>Low</td>
                  <td>YouTube Only</td>
                </tr>
                <tr>
                  <td>YouTube Shorts</td>
                  <td className="text-red-400 font-semibold">Limited</td>
                  <td className="text-red-400 font-semibold">Very Low</td>
                  <td>Low</td>
                  <td>YouTube Only</td>
                </tr>
                <tr>
                  <td>Instagram / TikTok Video</td>
                  <td className="text-red-400 font-semibold">Near Zero</td>
                  <td className="text-red-400 font-semibold">Negligible</td>
                  <td>Low</td>
                  <td>N/A for AI</td>
                </tr>
                <tr>
                  <td>Vimeo / Wistia</td>
                  <td className="text-red-400 font-semibold">Very Limited</td>
                  <td className="text-red-400 font-semibold">Negligible</td>
                  <td>Medium</td>
                  <td>N/A for AI</td>
                </tr>
                <tr>
                  <td>Blog + Embedded YouTube</td>
                  <td className="text-green-400 font-semibold">Combined</td>
                  <td className="text-green-400 font-semibold">Highest</td>
                  <td>High</td>
                  <td>Any CMS + YouTube</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            The pattern that produces the strongest AI visibility is a combination: a written blog
            post covering a topic in depth, with a YouTube video embedded that covers the same
            topic. The blog provides the native text layer. The YouTube embed creates a second
            corroborating source on the same URL. AI platforms reward topical depth and
            corroboration. Two formats saying the same thing, clearly, on the same page is
            structurally better than either format alone.
          </p>

          <p>
            This is consistent with the findings in our analysis of{' '}
            <Link href="/blog/content-marketing-vs-ai-optimization">
              content marketing vs. AI optimization
            </Link>
            . The businesses winning AI citations are not those producing the most content, but
            those producing the most machine-readable, topically coherent content across multiple
            formats.
          </p>

          {/* CTA Inline 3 */}
          <div className="ae-cta-inline">
            <p>
              Want to know exactly which content formats are working for your AI visibility and
              which are wasting your budget?
            </p>
            <Link href="/blindspot">Get Your Content Visibility Audit</Link>
          </div>

          {/* Section 5 */}
          <span className="ae-section-label" id="when-video-helps">
            When Video Helps
          </span>
          <h2>When Video Content Actually Does Help AI Find You</h2>

          <p>
            Video content contributes positively to AI search visibility under a specific and
            narrow set of conditions. Knowing these conditions is the difference between video
            that builds AI authority and video that serves other purposes but does nothing for
            search discovery.
          </p>

          {/* Pros Cons */}
          <div className="ae-pros-cons not-prose my-10">
            <div className="ae-pros-box">
              <h3 className="font-plus-jakarta text-lg font-bold text-white mb-4">
                Video Conditions That Help AI Visibility
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="text-green-400 mt-0.5 shrink-0">&#10003;</span>
                  <span>Hosted on YouTube with a manually uploaded transcript</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="text-green-400 mt-0.5 shrink-0">&#10003;</span>
                  <span>Long-form content (8 to 20 minutes), covering a topic with depth</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="text-green-400 mt-0.5 shrink-0">&#10003;</span>
                  <span>Chapters and timestamps dividing content into identifiable subtopics</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="text-green-400 mt-0.5 shrink-0">&#10003;</span>
                  <span>Keyword-aligned title and first 150 characters of description</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="text-green-400 mt-0.5 shrink-0">&#10003;</span>
                  <span>Embedded in a blog post on the same topic with supporting text</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="text-green-400 mt-0.5 shrink-0">&#10003;</span>
                  <span>Answers a specific question clearly early in the video</span>
                </li>
              </ul>
            </div>
            <div className="ae-cons-box">
              <h3 className="font-plus-jakarta text-lg font-bold text-white mb-4">
                Video Conditions That Do NOT Help AI Visibility
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="text-red-400 mt-0.5 shrink-0">&#10007;</span>
                  <span>Hosted on Vimeo, Wistia, or any non-YouTube platform</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="text-red-400 mt-0.5 shrink-0">&#10007;</span>
                  <span>Short-form video (Shorts, Reels, TikToks under 2 minutes)</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="text-red-400 mt-0.5 shrink-0">&#10007;</span>
                  <span>Relying on auto-generated captions without review or correction</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="text-red-400 mt-0.5 shrink-0">&#10007;</span>
                  <span>Generic titles that do not signal the specific topic clearly</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="text-red-400 mt-0.5 shrink-0">&#10007;</span>
                  <span>Brand videos, testimonials, or &quot;about us&quot; content without informational value</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="text-red-400 mt-0.5 shrink-0">&#10007;</span>
                  <span>Video posted only on social media with no text-based web presence</span>
                </li>
              </ul>
            </div>
          </div>

          <p>
            The unifying theme: video helps AI find your business when it is structured as a
            reference document, not as entertainment. AI platforms are looking for content that
            answers questions reliably. A how-to video with chapters, an accurate transcript, and
            a detailed description is a reference document in video form. A brand highlight reel
            with music and no transcript is not.
          </p>

          <div className="ae-callout ae-callout-orange">
            <div className="ae-callout-title">The Right Frame for Video Strategy</div>
            <p>
              Stop thinking about video as content marketing and start thinking about it as
              documentation. The businesses earning AI citations from YouTube are treating video
              like they treat their FAQ pages: topically precise, structurally clear, and designed
              to be read rather than watched. That shift in intent changes every production
              decision that follows.
            </p>
          </div>

          {/* Section 6 */}
          <span className="ae-section-label" id="platform-differences">
            Platform Differences
          </span>
          <h2>How ChatGPT, Perplexity, and Google AI Handle Video Differently</h2>

          <p>
            There is no uniform &quot;AI&quot; when it comes to video. Each major AI platform
            processes video through a different mechanism, with different access levels and
            different evaluation criteria. Treating them as interchangeable leads to strategies
            that work for one platform and fail on the others.
          </p>

          {/* Timeline / Decision Matrix as a platform breakdown */}
          <div className="ae-timeline not-prose my-10">
            <h3 className="font-plus-jakarta text-xl font-bold text-white mb-6">
              How Each AI Platform Accesses Video Content
            </h3>
            <div className="ae-timeline-item">
              <div className="ae-timeline-marker" />
              <div className="ae-timeline-content">
                <div className="ae-timeline-title">Google AI Overviews</div>
                <p className="text-gray-400 text-sm mt-1">
                  Deepest YouTube integration of any platform. Google owns YouTube, so its
                  AI has privileged access to transcript data, engagement signals, and
                  structured metadata. YouTube videos appear in AI Overviews at 36.6% citation
                  rates. This is the highest citation volume and the lowest barrier to inclusion.
                </p>
              </div>
            </div>
            <div className="ae-timeline-item">
              <div className="ae-timeline-marker" />
              <div className="ae-timeline-content">
                <div className="ae-timeline-title">Perplexity AI</div>
                <p className="text-gray-400 text-sm mt-1">
                  Perplexity accounts for 38.7% of total YouTube citations across AI platforms
                  in observed research. It crawls YouTube page metadata and transcript content
                  directly. Perplexity favors videos with detailed descriptions that function as
                  standalone summaries, since these give its retrieval system the most to work
                  with without relying on transcript processing.
                </p>
              </div>
            </div>
            <div className="ae-timeline-item">
              <div className="ae-timeline-marker" />
              <div className="ae-timeline-content">
                <div className="ae-timeline-title">ChatGPT</div>
                <p className="text-gray-400 text-sm mt-1">
                  OpenAI announced a YouTube data partnership in 2024 that allows ChatGPT to
                  process video transcripts in certain contexts. However, this access is limited
                  and inconsistent. ChatGPT contributes only 4.4% of observed YouTube citations,
                  making it the least effective platform for video-driven AI visibility currently.
                  Written content indexed by Bing significantly outperforms video for ChatGPT
                  citation purposes.
                </p>
              </div>
            </div>
            <div className="ae-timeline-item">
              <div className="ae-timeline-marker" />
              <div className="ae-timeline-content">
                <div className="ae-timeline-title">Claude / Anthropic</div>
                <p className="text-gray-400 text-sm mt-1">
                  Claude does not have direct YouTube integration. Citations from Claude come
                  almost entirely from web-crawled text sources. A YouTube video can earn Claude
                  citations only if its transcript or description is indexed via a third-party
                  site or embedded blog post that Claude&apos;s training or retrieval system
                  accesses. Text on your own website remains the primary lever for Claude
                  visibility.
                </p>
              </div>
            </div>
          </div>

          <p>
            The practical implication: a video strategy designed purely for Google AI Overviews
            (maximize YouTube text layers) will underperform for ChatGPT (where Bing-indexed
            written content matters more). An integrated approach, video supported by written
            content indexed on your own website, covers more platform surface area.
          </p>

          <p>
            This is exactly what we cover in our resource on{' '}
            <Link href="/blog/how-to-create-content-that-chatgpt-actually-trusts">
              how to create content that ChatGPT actually trusts
            </Link>
            . The short answer: written, crawlable, authoritative text on your own domain is
            the universal language of AI trust. Video reinforces but does not replace it.
          </p>

          {/* CTA Inline 4 */}
          <div className="ae-cta-inline">
            <p>
              Not sure which AI platforms are finding your business and which are ignoring you
              entirely? We map it all for free.
            </p>
            <Link href="/blindspot">Get Your Platform-by-Platform AI Visibility Report</Link>
          </div>

          {/* Section 7 */}
          <span className="ae-section-label" id="short-form-video">
            The Short-Form Trap
          </span>
          <h2>The Short-Form Video Trap Most Businesses Fall Into</h2>

          <p>
            Short-form video has captured enormous marketing attention. Reels, TikToks, YouTube
            Shorts, and LinkedIn video posts routinely earn more views than long-form content on
            the same channels. For audience building and brand awareness, this makes short-form
            a powerful tool. For AI search visibility, it is close to useless.
          </p>

          <p>
            The problem is structural. Short-form video produces almost no crawlable text content.
            Reels on Instagram exist on a platform AI crawlers have highly limited access to.
            TikTok operates behind a wall that most AI search systems cannot penetrate for
            citation purposes. YouTube Shorts accounts for only 5.7% of all YouTube AI citations,
            despite Shorts representing a significant fraction of total YouTube viewership.
          </p>

          <div className="ae-callout ae-callout-warning">
            <div className="ae-callout-title">The Engagement Mirage</div>
            <p>
              A short-form video with 50,000 views looks like success. If that video lives on
              TikTok or Instagram, it has contributed zero to your AI search visibility. The
              engagement is real. The AI impact is not. Businesses confusing social media
              engagement with AI search authority are allocating budget based on a category error.
            </p>
          </div>

          <p>
            This does not mean short-form video is bad strategy overall. It means that if your
            goal is AI search visibility specifically, short-form content must be treated as a
            separate investment with different success metrics. Every business has a budget. The
            question is: what are you actually buying when you produce short-form content? Reach
            and brand awareness, yes. AI search citations, no.
          </p>

          <p>
            See our analysis of{' '}
            <Link href="/blog/does-social-media-help-ai-find-business">
              whether social media helps AI find your business
            </Link>{' '}
            for the full picture on how social platforms factor into AI discovery, including the
            narrow situations where social content does matter.
          </p>

          {/* Takeaway */}
          <div className="ae-takeaway not-prose my-10 p-6 rounded-xl border border-[#FF6A00]/30 bg-[#FF6A00]/5">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#FF6A00]/20 flex items-center justify-center shrink-0 mt-0.5">
                <svg className="w-5 h-5 text-[#FF6A00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <div className="font-plus-jakarta font-bold text-white text-lg mb-2">Key Takeaway</div>
                <p className="text-gray-300">
                  Video content is a multiplier for AI visibility, not a foundation. The
                  businesses winning AI citations from video are those who have already built
                  strong text-based AI authority and use video to reinforce and extend it.
                  Businesses starting with video and hoping it builds AI visibility are working
                  backwards.
                </p>
              </div>
            </div>
          </div>

          {/* Section 8 */}
          <span className="ae-section-label" id="decision-matrix">
            Decision Matrix
          </span>
          <h2>Should Your Business Invest in Video for AI Visibility</h2>

          <p>
            The answer depends on where you are in your AI visibility journey and what resources
            you have to allocate. Use this decision matrix to assess whether video investment
            makes sense for your AI goals specifically.
          </p>

          {/* Decision Matrix */}
          <div className="ae-decision-matrix not-prose my-10">
            <h3 className="font-plus-jakarta text-xl font-bold text-white mb-6">
              Video for AI Visibility: Decision Matrix
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 px-4 text-gray-400 font-semibold text-sm">Your Situation</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-semibold text-sm">Video Investment Level</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-semibold text-sm">Priority</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4 text-gray-300 text-sm">No blog, no FAQ page, no optimized service pages</td>
                    <td className="py-3 px-4 text-red-400 font-semibold text-sm">None yet</td>
                    <td className="py-3 px-4 text-gray-400 text-sm">Fix text content first</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4 text-gray-300 text-sm">Strong website, some blog, no video presence</td>
                    <td className="py-3 px-4 text-yellow-400 font-semibold text-sm">Low to Medium</td>
                    <td className="py-3 px-4 text-gray-400 text-sm">Start YouTube, focus on transcripts</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4 text-gray-300 text-sm">Active YouTube channel, no transcript uploads</td>
                    <td className="py-3 px-4 text-yellow-400 font-semibold text-sm">Medium (existing content)</td>
                    <td className="py-3 px-4 text-gray-400 text-sm">Upload transcripts to existing videos immediately</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4 text-gray-300 text-sm">Strong blog + YouTube with transcripts</td>
                    <td className="py-3 px-4 text-green-400 font-semibold text-sm">High</td>
                    <td className="py-3 px-4 text-gray-400 text-sm">Embed videos in related posts, add chapters</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4 text-gray-300 text-sm">Only short-form video on social platforms</td>
                    <td className="py-3 px-4 text-red-400 font-semibold text-sm">Zero impact on AI</td>
                    <td className="py-3 px-4 text-gray-400 text-sm">Redirect budget to text content or long-form YouTube</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Cheat Sheet */}
          <div className="ae-cheat-sheet not-prose my-12 p-8 rounded-2xl bg-gradient-to-br from-[#FF6A00]/10 to-[#0F1117] border border-[#FF6A00]/25">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-[#FF6A00]/20 flex items-center justify-center">
                <svg className="w-4 h-4 text-[#FF6A00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="font-plus-jakarta text-xl font-bold text-white">
                Video and AI Visibility: The Quick Reference
              </h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="text-[#FF6A00] font-semibold text-sm uppercase tracking-wide mb-3">
                  What AI Can Read From Video
                </div>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start gap-2"><span className="text-[#FF6A00] shrink-0 mt-0.5">&#8226;</span>Video title and meta description</li>
                  <li className="flex items-start gap-2"><span className="text-[#FF6A00] shrink-0 mt-0.5">&#8226;</span>Uploaded transcript text (manually reviewed)</li>
                  <li className="flex items-start gap-2"><span className="text-[#FF6A00] shrink-0 mt-0.5">&#8226;</span>Description field (first 150 chars weighted highest)</li>
                  <li className="flex items-start gap-2"><span className="text-[#FF6A00] shrink-0 mt-0.5">&#8226;</span>Chapter timestamps and labels</li>
                  <li className="flex items-start gap-2"><span className="text-[#FF6A00] shrink-0 mt-0.5">&#8226;</span>Tags and category metadata</li>
                  <li className="flex items-start gap-2"><span className="text-[#FF6A00] shrink-0 mt-0.5">&#8226;</span>Linked website in channel and description</li>
                </ul>
              </div>
              <div>
                <div className="text-[#FF6A00] font-semibold text-sm uppercase tracking-wide mb-3">
                  What AI Cannot Read From Video
                </div>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start gap-2"><span className="text-red-400 shrink-0 mt-0.5">&#8226;</span>The actual video file or audio stream</li>
                  <li className="flex items-start gap-2"><span className="text-red-400 shrink-0 mt-0.5">&#8226;</span>On-screen text overlays or graphics</li>
                  <li className="flex items-start gap-2"><span className="text-red-400 shrink-0 mt-0.5">&#8226;</span>Comments section (inconsistently crawled)</li>
                  <li className="flex items-start gap-2"><span className="text-red-400 shrink-0 mt-0.5">&#8226;</span>Likes, views, subscriber count (ignored for citations)</li>
                  <li className="flex items-start gap-2"><span className="text-red-400 shrink-0 mt-0.5">&#8226;</span>Spoken content without an uploaded transcript</li>
                  <li className="flex items-start gap-2"><span className="text-red-400 shrink-0 mt-0.5">&#8226;</span>Video content on TikTok, Instagram, Vimeo</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-[#FF6A00]/15">
              <div className="text-[#FF6A00] font-semibold text-sm uppercase tracking-wide mb-3">
                The One Rule That Changes Everything
              </div>
              <p className="text-gray-300 text-sm">
                Build your AI visibility on text first. Use YouTube video to reinforce, extend, and
                add depth to topics you have already established in writing. Every video should have
                a companion blog post. Every blog post covering a topic you can explain visually
                should have a companion video. That integration is what the businesses dominating
                AI citations have figured out.
              </p>
            </div>
          </div>

          {/* CTA Inline 5 */}
          <div className="ae-cta-inline">
            <p>
              Ready to audit exactly how AI platforms see your current content, both video and
              text? Start with a free Blind Spot Report.
            </p>
            <Link href="/blindspot">Claim Your Free Blind Spot Report</Link>
          </div>

          {/* 3-TIER CTA BLOCK */}
          <div className="not-prose my-16 p-8 rounded-2xl bg-gradient-to-br from-[#FF6A00]/10 to-transparent border border-[#FF6A00]/20">
            <h3 className="font-plus-jakarta text-2xl font-bold text-white mb-3">
              Is Your Content Strategy Working for AI Search?
            </h3>
            <p className="text-gray-400 mb-6">
              Our free Blind Spot Report analyzes how AI platforms see your business across all
              content types, including video, blog, and web content.
            </p>
            <Link
              href="/blindspot"
              className="inline-flex items-center gap-2 bg-[#FF6A00] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#e55f00] transition-colors"
            >
              Get Your Free Blind Spot Report
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <div className="flex flex-wrap items-center gap-6 mt-6 pt-6 border-t border-[#FF6A00]/10">
              <a
                href="tel:+12134442229"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (213) 444-2229
              </a>
              <a
                href="mailto:support@theanswerengine.ai"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                support@theanswerengine.ai
              </a>
            </div>
          </div>

          {/* Author Card */}
          <div className="ae-author-card not-prose my-12 p-6 rounded-2xl bg-white/[0.03] border border-white/[0.07] flex items-start gap-5">
            <div className="w-14 h-14 rounded-full bg-[#FF6A00]/20 flex items-center justify-center shrink-0">
              <svg className="w-7 h-7 text-[#FF6A00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1 1 .03 2.698-1.382 2.698H4.18c-1.412 0-2.382-1.698-1.382-2.698L4.6 15.3" />
              </svg>
            </div>
            <div>
              <div className="font-plus-jakarta font-bold text-white text-lg">The Answer Engine Research Team</div>
              <div className="text-[#FF6A00] text-sm mb-2">AI Search Visibility Specialists</div>
              <p className="text-gray-400 text-sm leading-relaxed">
                The Answer Engine team analyzes AI search citation patterns across ChatGPT,
                Perplexity, Google AI Overviews, and Claude. We publish findings on what actually
                drives business visibility in the AI era, cutting through the marketing noise with
                data-backed analysis.
              </p>
            </div>
          </div>

          {/* FAQ Section */}
          <span className="ae-section-label" id="faq">
            FAQ
          </span>
          <h2>Frequently Asked Questions</h2>

          <h3>Does video content directly help AI platforms find my business?</h3>
          <p>
            Not directly. AI platforms like ChatGPT, Perplexity, and Google AI Overviews cannot
            watch video files. They read the text layers around videos: transcripts, descriptions,
            titles, and captions. Video helps indirectly when it generates readable text content
            that AI can index and cite. A video with no transcript and a vague description
            contributes almost nothing to AI discovery.
          </p>

          <h3>Which video platform do AI search engines prefer?</h3>
          <p>
            YouTube dominates by an enormous margin. Research shows YouTube earns over 200 times
            more AI citations than any other video platform, including Vimeo and Wistia. This is
            because YouTube produces multiple machine-readable text layers that AI platforms can
            process, while other platforms produce very few. If your video is not on YouTube,
            assume it is invisible to AI search.
          </p>

          <h3>Do YouTube views or subscriber counts affect AI search visibility?</h3>
          <p>
            No. Views, likes, and subscriber counts have near-zero correlation with AI citation
            frequency. AI platforms evaluate structural signals: transcript quality, description
            depth, chapter markers, and how clearly the content answers a specific question. A
            video with 200 views and an accurate transcript will consistently outperform a video
            with 200,000 views and no transcript in terms of AI citations.
          </p>

          <h3>Is video content better or worse than blog posts for AI visibility?</h3>
          <p>
            Blog posts consistently outperform standalone video for AI visibility because text is
            natively crawlable. However, video embedded in blog posts with transcripts, structured
            markup, and topical descriptions can amplify both. The most effective approach
            combines long-form written content with an embedded YouTube video on the same topic.
            That combination creates multiple corroborating signals that AI platforms reward.
          </p>

          <h3>Can short-form video like Reels or TikToks help with AI search?</h3>
          <p>
            Rarely. Short-form video on Instagram, TikTok, or YouTube Shorts produces very little
            machine-readable text and sits on platforms AI crawlers cannot fully access. These
            formats are effective for audience growth and brand awareness, but they contribute
            almost nothing to AI search visibility on their own. YouTube Shorts accounts for only
            5.7% of all YouTube AI citations despite representing a large share of YouTube
            viewership.
          </p>

          <h3>What makes a YouTube video likely to be cited by AI?</h3>
          <p>
            Cited videos share several structural traits: accurate manually uploaded transcripts,
            descriptions that function as written summaries of the content, chapter timestamps
            that divide the video into identifiable topics, long-form content in the 8 to 20
            minute range, and alignment between the video title and specific search questions. The
            common thread is structural depth, not production quality or popularity.
          </p>

          <h3>Should I create video content for AI search or focus on written content?</h3>
          <p>
            For most local businesses, written content should be the foundation. Focus first on
            FAQ pages, service descriptions, and blog content optimized for AI. Then use video to
            reinforce those topics on YouTube. Embed videos in blog posts, upload accurate
            transcripts, and add chapters. That integration is what converts video from a
            brand-building tool into an AI visibility amplifier.
          </p>

          <h3>Do AI platforms like ChatGPT have access to YouTube video content?</h3>
          <p>
            ChatGPT has a partnership with YouTube that allows it to process video transcripts in
            certain contexts, but this access is limited and contributes only 4.4% of observed
            YouTube citations. Perplexity crawls YouTube metadata and transcripts more actively.
            Google AI Overviews has the deepest integration since Google owns YouTube. Each
            platform processes video differently, which means a truly effective video strategy
            requires understanding the specific access model of each AI platform rather than
            treating them as one uniform audience.
          </p>

          {/* CTA Inline 6 */}
          <div className="ae-cta-inline">
            <p>
              Still have questions about how your specific content strategy maps to AI visibility?
              Talk to our team.
            </p>
            <a href="tel:+12134442229">Call (213) 444-2229 Now</a>
          </div>

          {/* Final CTA */}
          <div className="ae-final-cta not-prose my-16 p-10 rounded-2xl bg-gradient-to-br from-[#FF6A00]/15 via-[#FF6A00]/5 to-transparent border border-[#FF6A00]/30 relative overflow-hidden text-center">
            <div
              className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{
                boxShadow: '0 0 60px rgba(255,106,0,0.12), 0 0 120px rgba(255,106,0,0.06)',
              }}
              aria-hidden="true"
            />
            <div className="relative">
              <div className="inline-flex items-center gap-2 bg-[#FF6A00]/15 text-[#FF6A00] px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A00] animate-pulse inline-block" />
                Free for a Limited Time
              </div>
              <h3 className="font-plus-jakarta text-3xl md:text-4xl font-bold text-white mb-4">
                Find Out If AI Can Actually Find Your Business
              </h3>
              <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                Get your free Blind Spot Report: a complete picture of how ChatGPT, Perplexity,
                Google AI, and Claude currently see your business, and exactly what is blocking
                them from recommending you.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <Link
                  href="/blindspot"
                  className="inline-flex items-center gap-2 bg-[#FF6A00] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#e55f00] transition-all hover:scale-105"
                >
                  Get My Free Blind Spot Report
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <a
                  href="tel:+12134442229"
                  className="inline-flex items-center gap-2 border border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:border-[#FF6A00]/50 hover:text-[#FF6A00] transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (213) 444-2229
                </a>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  No credit card required
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Results in 2 minutes
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Covers all major AI platforms
                </span>
              </div>
            </div>
          </div>
        </div>
      </article>
    </main>
  )
}
