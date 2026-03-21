import type { Metadata } from 'next';
import Link from 'next/link';

// ISR Configuration
export const revalidate = 86400; // 24 hours
export const dynamic = 'force-static';
export const dynamicParams = true;

// Enhanced Metadata
export async function generateMetadata(): Promise<Metadata> {
  const lastUpdated = new Date().toISOString().split('T')[0];
  const publishDate = '2025-12-01';
  
  return {
    title: 'How to Get in the Answer Engine: Complete Guide to AI Citations | The Answer Engine',
    description: 'Learn how to get your business cited by AI systems like ChatGPT, Claude, and Google AI Overview. Step-by-step guide to answer engine optimization for local service businesses.',
    
    openGraph: {
      title: 'How to Get in the Answer Engine: Complete Guide to AI Citations',
      description: 'Step-by-step guide to getting your business cited by ChatGPT, Claude, Google AI Overview, and Perplexity. Learn the 5-step process to AI visibility.',
      type: 'article',
      publishedTime: publishDate,
      modifiedTime: lastUpdated,
      authors: ['Justin Borges'],
      url: 'https://theanswerengine.ai/blog/how-to-get-in-the-answer-engine',
      images: [
        {
          url: 'https://theanswerengine.ai/images/how-to-get-in-answer-engine-featured.png',
          width: 1200,
          height: 630,
          alt: 'How to Get in the Answer Engine - Complete Guide to AI Citations',
        }
      ],
      siteName: 'The Answer Engine',
    },
    
    twitter: {
      card: 'summary_large_image',
      title: 'How to Get in the Answer Engine: Complete Guide to AI Citations',
      description: 'Learn the 5-step process to getting your business cited by AI platforms.',
      images: ['https://theanswerengine.ai/images/how-to-get-in-answer-engine-featured.png'],
      creator: '@theanswerengine',
    },
    
    alternates: {
      canonical: 'https://theanswerengine.ai/blog/how-to-get-in-the-answer-engine',
    },
    
    other: {
      'article:modified_time': lastUpdated,
      'article:published_time': publishDate,
      'article:author': 'Justin Borges',
      'article:section': 'Answer Engine Optimization',
    },
    
    keywords: [
      'how to get in the answer engine',
      'answer engine optimization',
      'AI citations',
      'ChatGPT citations',
      'Claude citations',
      'Google AI Overview optimization',
      'AEO guide',
      'get cited by AI',
    ],
  };
}

export default function HowToGetInTheAnswerEngine() {
  const publishDate = '2025-12-01';
  const lastUpdated = new Date().toISOString().split('T')[0];
  const articleUrl = 'https://theanswerengine.ai/blog/how-to-get-in-the-answer-engine';
  
  return (
    <>
      {/* Schema Markup - @graph structure */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Article",
                "headline": "How to Get in the Answer Engine: A Complete Guide to Getting Your Business Cited by AI in 2025",
                "description": "Learn how to get your business cited by AI systems like ChatGPT, Claude, and Google AI Overview. Step-by-step guide to answer engine optimization for local service businesses.",
                "image": {
                  "@type": "ImageObject",
                  "url": "https://theanswerengine.ai/images/how-to-get-in-answer-engine-featured.png",
                  "width": 1200,
                  "height": 630
                },
                "author": {
                  "@type": "Organization",
                  "name": "The Answer Engine",
                  "url": "https://theanswerengine.ai"
                },
                "publisher": {
                  "@type": "Organization",
                  "name": "The Answer Engine",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://theanswerengine.ai/TheAnswerEngine_white.png",
                    "width": 600,
                    "height": 60
                  }
                },
                "datePublished": publishDate,
                "dateModified": lastUpdated,
                "mainEntityOfPage": {
                  "@type": "WebPage",
                  "@id": articleUrl
                },
                "articleSection": "Answer Engine Optimization",
                "keywords": ["how to get in the answer engine", "answer engine optimization", "AI citations", "ChatGPT citations", "AEO", "get cited by AI"],
                "wordCount": 1650,
                "inLanguage": "en-US"
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "How long does it take to get cited by AI systems?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Most businesses see initial AI citations within 60-90 days of implementing answer engine optimization. Building strong topical authority typically takes 4-6 months of consistent content creation. Our fastest client achieved AI citations in 47 days."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can small businesses compete with large companies for AI citations?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. AI systems prioritize relevance and expertise over brand size. A local plumber with comprehensive content about plumbing in their city can outrank national brands for local queries. The key is specificity and demonstrated local expertise."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do I need to optimize for every AI platform separately?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "No. ChatGPT, Claude, Perplexity, and Google AI Overviews all draw from web content. Content optimized for answer engines generally performs across all platforms. Focus on creating authoritative content rather than platform-specific tricks."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Is answer engine optimization different from SEO?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "AEO builds on traditional SEO but prioritizes being cited as the definitive answer over simply ranking. This means more emphasis on direct answer formatting, FAQ structure, and authoritative depth. Good AEO typically improves traditional rankings too."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What industries benefit most from answer engine optimization?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Any service business where customers research before buying: real estate, legal, medical, home services (HVAC, plumbing, electrical), financial advisors, and professional services. The more complex the decision, the more likely customers ask AI for guidance."
                    }
                  }
                ]
              },
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://theanswerengine.ai"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Blog",
                    "item": "https://theanswerengine.ai/blog"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "How to Get in the Answer Engine",
                    "item": articleUrl
                  }
                ]
              }
            ]
          })
        }}
      />

      <main className="min-h-screen bg-[#0F1117] relative">
        {/* Subtle gradient overlay */}
        
        {/* Simple pixel accent - top corners */}
        <div className="absolute top-0 left-0 w-2 h-2 bg-white/20" />
        <div className="absolute top-0 left-2 w-2 h-2 bg-white/15" />

        <article className="max-w-4xl mx-auto px-6 py-20 sm:py-32 relative">
          {/* Featured Image */}
          <div className="mb-12 rounded-2xl overflow-hidden border border-white/[0.08]">
            <img 
              src="/images/how-to-get-in-answer-engine-featured.png" 
              alt="How to Get in the Answer Engine - Complete Guide to AI Citations" 
              className="w-full grayscale brightness-75"
            />
          </div>

          {/* Article Header */}
          <header className="mb-16">
            {/* Simple pixel divider */}
            <div className="flex gap-2 mb-8">
              <div className="w-1.5 h-1.5 bg-white/40" />
              <div className="w-1.5 h-1.5 bg-white/30" />
              <div className="w-1.5 h-1.5 bg-white/40" />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-6 leading-tight text-gray-100">
              How to Get in the <span className="font-normal text-white">Answer Engine</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-400 leading-relaxed mb-6 font-light article-intro">
              To get in the answer engine, structure your content to directly answer questions in the first 60 words, implement FAQ schema markup, build topical authority through hub-and-spoke content clusters, and establish verifiable business credentials. At The Answer Engine, we've helped clients achieve 40+ first-page rankings and AI citations within 90 days using this approach.
            </p>
            <div className="flex items-center gap-3 text-sm text-gray-500 font-light">
              <span className="w-1.5 h-1.5 bg-white/25 rounded-full" />
              <span>Published December 1, 2025</span>
              <span className="text-gray-700">•</span>
              <span>Updated {new Date(lastUpdated).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
              <span className="text-gray-700">•</span>
              <span>By Justin Borges, Founder</span>
            </div>
          </header>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none">
            
            <h2 className="text-3xl sm:text-4xl font-light mt-16 mb-6 text-gray-100">
              What Is an <span className="font-normal text-white">Answer Engine?</span>
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light">
              An answer engine is any AI-powered system that provides direct answers instead of a list of links. This includes ChatGPT, Claude, Perplexity, Google AI Overviews, and Microsoft Copilot.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light">
              Unlike traditional search engines that rank websites by relevance, answer engines synthesize information from multiple sources to provide a single response. When someone asks "who's the best plumber in Denver," these systems don't show 10 blue links—they give one answer.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light">
              The business implications are significant: if your company isn't the answer AI provides, you're invisible to a growing percentage of customers who prefer asking AI over traditional search.
            </p>

            <h2 className="text-3xl sm:text-4xl font-light mt-16 mb-6 text-gray-100">
              Why Getting in the Answer Engine <span className="font-normal text-white">Matters</span>
            </h2>

            <h3 className="text-2xl font-light mt-12 mb-4 text-white/60">
              The Zero-Click Reality
            </h3>

            <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light">
              When AI provides a complete answer, users don't click through to websites. If your business isn't included in that answer, you don't get the call. There's no second place—either you're the recommendation or you're invisible.
            </p>

            <h3 className="text-2xl font-light mt-12 mb-4 text-white/60">
              Trust Transfer
            </h3>

            <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light">
              Users trust AI recommendations because they believe the AI has evaluated all options. Being cited by ChatGPT or Claude carries implicit endorsement that advertising can't buy. We've seen these leads convert at significantly higher rates than traditional sources.
            </p>

            <h3 className="text-2xl font-light mt-12 mb-4 text-white/60">
              Compounding Authority
            </h3>

            <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light">
              Unlike paid advertising that stops generating leads the moment you stop paying, answer engine presence compounds. Once AI systems recognize your content as authoritative, they continue citing you without additional spend. Businesses that establish authority first gain significant advantages over later competitors.
            </p>

            <h2 className="text-3xl sm:text-4xl font-light mt-16 mb-6 text-gray-100">
              How AI Systems Choose <span className="font-normal text-white">Which Businesses to Cite</span>
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light">
              AI systems don't randomly select sources. After auditing thousands of AI responses for our clients, we've identified five criteria that determine citation:
            </p>

            <div className="space-y-8 mb-8">
              <div className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-xl p-6">
                <h4 className="text-xl font-medium text-white mb-3">1. Direct Answer Quality</h4>
                <p className="text-gray-300 font-light leading-relaxed">
                  AI prioritizes content that directly answers the question in the first paragraph. If someone asks about plumber pricing, content with a specific price range upfront gets cited over content that buries the answer after 500 words of introduction.
                </p>
              </div>

              <div className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-xl p-6">
                <h4 className="text-xl font-medium text-white mb-3">2. Entity Recognition</h4>
                <p className="text-gray-300 font-light leading-relaxed">
                  AI needs to identify your business as a real entity with verifiable credentials. Schema markup tells AI your business name, location, services, and credentials. Without proper entity markup, AI can't verify you're legitimate.
                </p>
              </div>

              <div className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-xl p-6">
                <h4 className="text-xl font-medium text-white mb-3">3. Topical Authority</h4>
                <p className="text-gray-300 font-light leading-relaxed">
                  A single blog post won't establish expertise. AI looks for depth—multiple interconnected pieces demonstrating comprehensive knowledge. We build hub-and-spoke content clusters for this reason: one comprehensive guide supported by 4-6 detailed spoke articles.
                </p>
              </div>

              <div className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-xl p-6">
                <h4 className="text-xl font-medium text-white mb-3">4. Freshness & Accuracy</h4>
                <p className="text-gray-300 font-light leading-relaxed">
                  AI favors current content. Articles with 2025 pricing, current regulations, and recent updates signal reliability. Outdated content gets deprioritized.
                </p>
              </div>

              <div className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-xl p-6">
                <h4 className="text-xl font-medium text-white mb-3">5. Source Credibility</h4>
                <p className="text-gray-300 font-light leading-relaxed">
                  Does the content come from someone with verifiable expertise? AI evaluates author credentials, business credentials, and external authority signals—mentions on reputable sites, consistent NAP data, positive reviews on established platforms.
                </p>
              </div>
            </div>

            <h2 className="text-3xl sm:text-4xl font-light mt-16 mb-6 text-gray-100">
              The 5-Step Process to <span className="font-normal text-white">Get in the Answer Engine</span>
            </h2>

            <h3 className="text-2xl font-light mt-12 mb-4 text-white/60">
              Step 1: Identify Your Target Questions
            </h3>

            <p className="text-gray-300 text-lg leading-relaxed mb-4 font-light">
              List the questions your ideal customers actually ask—not what you think they should ask. Sources include:
            </p>

            <ul className="space-y-3 mb-8 text-gray-300 text-lg">
              {[
                "Your sales team's most common prospect questions",
                "Google Search Console queries bringing traffic",
                "\"People Also Ask\" boxes for your keywords",
                "Questions in relevant subreddits and forums",
                "What AI currently answers about your service"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 bg-white/30 rounded-full mt-3" />
                  <span className="font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-2xl font-light mt-12 mb-4 text-white/60">
              Step 2: Audit Your Current AI Visibility
            </h3>

            <p className="text-gray-300 text-lg leading-relaxed mb-4 font-light">
              Before creating content, understand where you stand. Ask ChatGPT, Claude, and Perplexity your target questions and document:
            </p>

            <ul className="space-y-3 mb-8 text-gray-300 text-lg">
              {[
                "Are you mentioned at all?",
                "Which competitors are being cited?",
                "What sources do AI systems reference?",
                "What information is missing from current answers?"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 bg-white/30 rounded-full mt-3" />
                  <span className="font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-2xl font-light mt-12 mb-4 text-white/60">
              Step 3: Create Answer-Optimized Content
            </h3>

            <p className="text-gray-300 text-lg leading-relaxed mb-4 font-light">
              Structure every piece for AI citation:
            </p>

            <div className="space-y-4 mb-8">
              <div className="bg-white/[0.03] backdrop-blur-xl border-l-4 border-white/[0.15] rounded-r-xl p-4">
                <p className="text-gray-300 font-light">
                  <strong className="text-white font-medium">Featured Snippet Block:</strong> Open with 40-60 words directly answering the target question
                </p>
              </div>
              <div className="bg-white/[0.03] backdrop-blur-xl border-l-4 border-white/[0.15] rounded-r-xl p-4">
                <p className="text-gray-300 font-light">
                  <strong className="text-white font-medium">Comprehensive FAQ:</strong> Include 5-10 related questions with FAQ schema markup
                </p>
              </div>
              <div className="bg-white/[0.03] backdrop-blur-xl border-l-4 border-white/[0.15] rounded-r-xl p-4">
                <p className="text-gray-300 font-light">
                  <strong className="text-white font-medium">Authoritative Depth:</strong> Cover the topic completely, not superficially
                </p>
              </div>
              <div className="bg-white/[0.03] backdrop-blur-xl border-l-4 border-white/[0.15] rounded-r-xl p-4">
                <p className="text-gray-300 font-light">
                  <strong className="text-white font-medium">Local Specificity:</strong> City-specific content outranks generic national content
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-light mt-12 mb-4 text-white/60">
              Step 4: Implement Technical Optimization
            </h3>

            <p className="text-gray-300 text-lg leading-relaxed mb-4 font-light">
              Content quality alone isn't enough. Technical signals help AI verify and trust your content:
            </p>

            <ul className="space-y-3 mb-8 text-gray-300 text-lg">
              {[
                "Schema Markup: Article, FAQ, LocalBusiness, and Person schemas",
                "Internal Linking: Hub-and-spoke structures connecting related content",
                "Site Speed & Mobile: Fast, mobile-friendly sites signal quality"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 bg-white/30 rounded-full mt-3" />
                  <span className="font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-2xl font-light mt-12 mb-4 text-white/60">
              Step 5: Monitor and Iterate
            </h3>

            <p className="text-gray-300 text-lg leading-relaxed mb-4 font-light">
              Answer engine optimization isn't one-time. Set up ongoing monitoring:
            </p>

            <ul className="space-y-3 mb-8 text-gray-300 text-lg">
              {[
                "Weekly AI citation checks for target queries",
                "Monthly Google Search Console analysis",
                "Quarterly content updates for freshness",
                "Competitive monitoring for new opportunities"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 bg-white/30 rounded-full mt-3" />
                  <span className="font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-3xl sm:text-4xl font-light mt-16 mb-6 text-gray-100">
              Common Mistakes That <span className="font-normal text-white">Prevent AI Citations</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                <h4 className="text-red-400 font-medium mb-3">Generic Content</h4>
                <p className="text-gray-300 font-light text-sm">
                  AI-generated articles that could apply to any business won't establish authority. AI systems detect generic content and prefer sources with specific, verifiable expertise.
                </p>
              </div>

              <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                <h4 className="text-red-400 font-medium mb-3">Burying the Answer</h4>
                <p className="text-gray-300 font-light text-sm">
                  Long introductions before getting to the point hurt citation chances. If the answer isn't in the first paragraph, AI finds a source that provides it faster.
                </p>
              </div>

              <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                <h4 className="text-red-400 font-medium mb-3">Ignoring Technical SEO</h4>
                <p className="text-gray-300 font-light text-sm">
                  Great content with poor technical implementation won't get indexed properly. Without schema markup, AI can't verify credentials or parse FAQ sections.
                </p>
              </div>

              <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                <h4 className="text-red-400 font-medium mb-3">Thin Topic Coverage</h4>
                <p className="text-gray-300 font-light text-sm">
                  A single article won't establish authority. You need comprehensive coverage across related subtopics to signal expertise.
                </p>
              </div>
            </div>

            <h2 className="text-3xl sm:text-4xl font-light mt-16 mb-6 text-gray-100">
              Real Results: From Zero to <span className="font-normal text-white">AI Authority in 4 Months</span>
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              One of our clients—a Los Angeles real estate team—implemented this exact strategy. Starting from zero AI citations, they achieved:
            </p>

            <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-6 mb-8">
              <ul className="space-y-3 text-gray-300 font-light">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 text-green-400 mt-1">✓</span>
                  <span><strong className="text-white">40+ first-page Google rankings</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 text-green-400 mt-1">✓</span>
                  <span><strong className="text-white">15,000+ monthly search impressions</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 text-green-400 mt-1">✓</span>
                  <span><strong className="text-white">Multiple #1 positions</strong> for high-intent queries in their specialty</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 text-green-400 mt-1">✓</span>
                  <span><strong className="text-white">47% brand search CTR</strong> (nearly double industry benchmark)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 text-green-400 mt-1">✓</span>
                  <span><strong className="text-white">AI citations across ChatGPT, Claude, and Perplexity</strong></span>
                </li>
              </ul>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              The key was building topical authority through hub-and-spoke architecture: comprehensive guides on their specialty areas, each supported by detailed spoke articles. Combined with proper schema markup and regular updates, this created the authority signals AI systems need.
            </p>

            <p className="text-gray-400 text-lg leading-relaxed mb-8 font-light italic">
              We don't share the specific keyword strategy—that's our client's competitive advantage. But the methodology works across industries.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light">
              <a href="/blog/aeo-case-study-real-estate" className="text-white/60 hover:text-white/70 transition-colors">
                Read the full case study: How a Real Estate Team Dominates AI Search →
              </a>
            </p>

            {/* CTA Section */}
            <div className="my-16 p-10 rounded-2xl bg-white/[0.03] backdrop-blur-xl border-l-4 border-white/[0.15]">
              <h3 className="text-2xl sm:text-3xl font-light mb-4 text-gray-100">
                Get Your Free <span className="font-normal text-white">AI Citation Audit</span>
              </h3>
              <p className="text-gray-300 text-lg mb-8 font-light leading-relaxed">
                See where your business stands across ChatGPT, Claude, Google AI Overview, and Perplexity. We'll show you exactly what content you need to become the answer.
              </p>
              <a 
                href="/#contact" 
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-lg font-medium bg-gradient-to-r from-white/40 to-white/50 text-white hover:from-white/50 hover:to-white/50 transition-all shadow-lg shadow-white/12"
              >
                Schedule Your Free Audit
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>

            {/* CTA Section */}
            <div className="rounded-2xl p-8 sm:p-10 text-center my-16" style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)' }}>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-plus-jakarta">Find Out If AI Is Recommending Your Business</h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">Most businesses have no idea whether AI platforms are sending them customers or sending them to competitors. Our free blind spot report shows you exactly where you stand.</p>
              <Link href="/blindspot" className="inline-block px-8 py-4 rounded-lg font-semibold text-white transition-all duration-200 hover:brightness-110" style={{ backgroundColor: '#FF6A00' }}>Get Your Free Blind Spot Report</Link>
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
            </div>

            {/* Divider */}
            <div className="flex justify-center gap-1 my-16 opacity-20">
              {[...Array(50)].map((_, i) => (
                <div
                  key={i}
                  className="w-px h-px bg-gray-600"
                />
              ))}
            </div>

            <h2 className="text-3xl sm:text-4xl font-light mt-16 mb-8 text-gray-100">
              <span className="font-normal text-white">Frequently Asked Questions</span>
            </h2>

            <div className="space-y-6">
              {[
                {
                  q: "How long does it take to get cited by AI systems?",
                  a: "Most businesses see initial AI citations within 60-90 days of implementing answer engine optimization. Building strong topical authority typically takes 4-6 months of consistent content creation. Our fastest client achieved AI citations in 47 days."
                },
                {
                  q: "Can small businesses compete with large companies for AI citations?",
                  a: "Yes. AI systems prioritize relevance and expertise over brand size. A local plumber with comprehensive content about plumbing in their city can outrank national brands for local queries. The key is specificity and demonstrated local expertise."
                },
                {
                  q: "Do I need to optimize for every AI platform separately?",
                  a: "No. ChatGPT, Claude, Perplexity, and Google AI Overviews all draw from web content. Content optimized for answer engines generally performs across all platforms. Focus on creating authoritative content rather than platform-specific tricks."
                },
                {
                  q: "Is answer engine optimization different from SEO?",
                  a: "AEO builds on traditional SEO but prioritizes being cited as the definitive answer over simply ranking. This means more emphasis on direct answer formatting, FAQ structure, and authoritative depth. Good AEO typically improves traditional rankings too."
                },
                {
                  q: "What industries benefit most from answer engine optimization?",
                  a: "Any service business where customers research before buying: real estate, legal, medical, home services (HVAC, plumbing, electrical), financial advisors, and professional services. The more complex the decision, the more likely customers ask AI for guidance."
                }
              ].map((faq, i) => (
                <div key={i} className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-xl p-6 hover:border-white/[0.08] transition-colors">
                  <h3 className="text-xl font-light mb-3 text-white">
                    {faq.q}
                  </h3>
                  <p className="text-gray-400 leading-relaxed font-light">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>

            {/* Author Section */}
            <div className="mt-16 pt-12 border-t border-white/[0.08]">
              <h3 className="text-2xl font-light mb-6 text-gray-100">
                <span className="font-normal text-white">About the Author</span>
              </h3>
              <p className="text-gray-300 mb-4 font-light">
                <strong className="text-white font-medium">Written by:</strong> Justin Borges, Founder of The Answer Engine
              </p>
              <p className="text-gray-300 leading-relaxed mb-6 font-light">
                Justin Borges founded The Answer Engine to help local service businesses get cited by AI platforms like ChatGPT, Claude, Perplexity, and Google AI Overview. With a background in both real estate and digital marketing, Justin developed the Answer Engine Optimization methodology after achieving 100% AI citation rates for his own real estate team in Los Angeles.
              </p>
              <p>
                <a href="/" className="inline-flex items-center gap-2 text-white/60 font-medium hover:text-white/70 transition-colors group">
                  Learn more at TheAnswerEngine.ai
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </p>
            </div>

            {/* Related Articles */}
            <div className="mt-16 pt-12 border-t border-white/[0.08]">
              <h3 className="text-2xl font-light mb-6 text-gray-100">
                <span className="font-normal text-white">Related Articles</span>
              </h3>
              <div className="space-y-4">
                <div className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-xl p-6 hover:border-white/[0.08] transition-colors">
                  <a href="/blog/aeo-case-study-real-estate" className="group">
                    <h4 className="text-xl font-light text-white mb-2 group-hover:text-white/60 transition-colors">
                      AEO Case Study: How a Real Estate Team Dominates AI Search
                    </h4>
                    <p className="text-gray-400 font-light leading-relaxed">
                      See how a Los Angeles real estate team achieved 40+ first-page rankings and AI citations in just 4 months.
                    </p>
                  </a>
                </div>
                <div className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-xl p-6 hover:border-white/[0.08] transition-colors">
                  <a href="/blog/why-businesses-fail-answer-engine-optimization" className="group">
                    <h4 className="text-xl font-light text-white mb-2 group-hover:text-white/60 transition-colors">
                      Why Most Businesses Fail at Answer Engine Optimization
                    </h4>
                    <p className="text-gray-400 font-light leading-relaxed">
                      Discover the 8 critical mistakes causing AEO implementations to fail and why businesses waste months on broken optimization.
                    </p>
                  </a>
                </div>
                <div className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-xl p-6 hover:border-white/[0.08] transition-colors">
                  <a href="/blog/what-is-answer-engine-optimization" className="group">
                    <h4 className="text-xl font-light text-white mb-2 group-hover:text-white/60 transition-colors">
                      What is Answer Engine Optimization (AEO)? Complete Guide
                    </h4>
                    <p className="text-gray-400 font-light leading-relaxed">
                      Learn what Answer Engine Optimization is, how it differs from traditional SEO, and why local businesses need it to dominate AI-powered search.
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}