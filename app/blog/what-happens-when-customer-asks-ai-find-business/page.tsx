import type { Metadata } from 'next';
import Link from 'next/link';

// ISR Configuration
export const revalidate = 86400; // 24 hours
export const dynamic = 'force-static';
export const dynamicParams = true;

// Enhanced Metadata
export const metadata: Metadata = {
  title: 'What Happens When a Customer Asks AI to Find a Business Like Yours | The Answer Engine',
  description: 'Walk through the step-by-step journey of how ChatGPT, Perplexity, and Google AI actually process a query to find and recommend local businesses. Learn what happens behind the scenes and why your business might be invisible.',

  openGraph: {
    title: 'What Happens When a Customer Asks AI to Find a Business Like Yours',
    description: 'The step-by-step journey of how AI search platforms find, evaluate, and recommend local businesses to your potential customers.',
    type: 'article',
    publishedTime: '2026-03-17',
    modifiedTime: '2026-03-17',
    authors: ['The Answer Engine Team'],
    url: 'https://theanswerengine.ai/blog/what-happens-when-customer-asks-ai-find-business',
    images: [
      {
        url: 'https://theanswerengine.ai/api/og/what-happens-when-customer-asks-ai-find-business',
        width: 1200,
        height: 630,
        alt: 'What Happens When a Customer Asks AI to Find a Business Like Yours',
      }
    ],
    siteName: 'The Answer Engine',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'What Happens When a Customer Asks AI to Find a Business Like Yours',
    description: 'The step-by-step journey of how AI finds and recommends local businesses.',
    images: ['https://theanswerengine.ai/api/og/what-happens-when-customer-asks-ai-find-business'],
    creator: '@theanswerengine',
  },

  alternates: {
    canonical: 'https://theanswerengine.ai/blog/what-happens-when-customer-asks-ai-find-business',
  },

  keywords: [
    'how AI finds businesses',
    'AI search process',
    'ChatGPT local business recommendations',
    'AI business discovery',
    'how AI recommends businesses',
    'answer engine optimization',
    'AI search local services',
    'Perplexity business citations',
    'Google AI Mode local search',
  ],
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://theanswerengine.ai/blog/what-happens-when-customer-asks-ai-find-business#article",
      "headline": "What Happens When a Customer Asks AI to Find a Business Like Yours",
      "description": "Walk through the step-by-step journey of how AI search platforms find, evaluate, and recommend local businesses to potential customers.",
      "image": {
        "@type": "ImageObject",
        "url": "https://theanswerengine.ai/api/og/what-happens-when-customer-asks-ai-find-business",
        "width": 1200,
        "height": 630
      },
      "author": {
        "@type": "Organization",
        "@id": "https://theanswerengine.ai/#organization"
      },
      "publisher": {
        "@type": "Organization",
        "@id": "https://theanswerengine.ai/#organization"
      },
      "datePublished": "2026-03-17T09:00:00-04:00",
      "dateModified": "2026-03-17T09:00:00-04:00",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://theanswerengine.ai/blog/what-happens-when-customer-asks-ai-find-business"
      },
      "articleSection": "AEO Education",
      "keywords": "AI search process, how AI finds businesses, ChatGPT recommendations, AI local search, answer engine optimization",
      "wordCount": 2200
    },
    {
      "@type": "FAQPage",
      "@id": "https://theanswerengine.ai/blog/what-happens-when-customer-asks-ai-find-business#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What data sources does ChatGPT use to find local businesses?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ChatGPT pulls from a combination of web search results, business directories like Yelp and Bing Places, review platforms, industry publications, and business websites. It does not directly access Google Business Profiles, so businesses relying solely on GBP may be invisible to ChatGPT."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take for AI to process a local business query?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The entire process, from receiving the query to delivering a recommendation, happens in seconds. The AI interprets the question, searches the web for relevant sources, evaluates what it finds, and generates a response all within a single interaction."
          }
        },
        {
          "@type": "Question",
          "name": "Why does AI recommend my competitor but not me?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "AI platforms recommend businesses they can verify through multiple independent sources. If your competitor has a well-structured website, consistent directory listings, strong reviews across platforms, and content that directly answers common questions, the AI has more evidence to work with when forming its recommendation."
          }
        },
        {
          "@type": "Question",
          "name": "Does Google ranking affect whether AI recommends my business?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It depends on the platform. Perplexity cites top-10 Google results about 91% of the time. ChatGPT, however, only overlaps with Google top-10 results about 14% of the time. Each AI platform has its own evaluation criteria beyond traditional search rankings."
          }
        },
        {
          "@type": "Question",
          "name": "Can I pay to appear in AI search results?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Currently, there is no way to pay for placement in most AI search responses. AI platforms evaluate businesses based on the quality, consistency, and authority of publicly available information. The only way to improve visibility is by strengthening your digital footprint across the sources AI actually reads."
          }
        },
        {
          "@type": "Question",
          "name": "What percentage of consumers now use AI instead of Google to search?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "According to a 2025 survey by Eight Oh Two Marketing, 37% of consumers now start new information searches with AI tools rather than traditional search engines. Additionally, 43% of consumers use AI search tools daily, and three-quarters report using them more often than a year ago."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://theanswerengine.ai/blog/what-happens-when-customer-asks-ai-find-business#breadcrumb",
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
          "name": "What Happens When a Customer Asks AI to Find a Business Like Yours"
        }
      ]
    }
  ]
};

// Breadcrumb Component
function Breadcrumb() {
  return (
    <nav aria-label="Breadcrumb" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
      <ol className="flex items-center space-x-2 text-sm text-gray-400">
        <li>
          <Link href="/" className="hover:text-[#FF6A00] transition-colors">Home</Link>
        </li>
        <li><span className="mx-1">/</span></li>
        <li>
          <Link href="/blog" className="hover:text-[#FF6A00] transition-colors">Blog</Link>
        </li>
        <li><span className="mx-1">/</span></li>
        <li className="text-gray-300 truncate max-w-[250px] sm:max-w-none">
          What Happens When a Customer Asks AI to Find a Business Like Yours
        </li>
      </ol>
    </nav>
  );
}

export default function WhatHappensWhenCustomerAsksAIPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen" style={{ backgroundColor: '#0F1117' }}>
        <Breadcrumb />

        {/* Hero Section */}
        <header className="relative overflow-hidden py-16 sm:py-24">
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="heroPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                  <circle cx="20" cy="20" r="1.5" fill="#FF6A00" />
                  <path d="M0 20h40M20 0v40" stroke="#FF6A00" strokeWidth="0.3" opacity="0.4" />
                </pattern>
                <linearGradient id="heroFade" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="white" stopOpacity="0" />
                  <stop offset="30%" stopColor="white" stopOpacity="1" />
                  <stop offset="70%" stopColor="white" stopOpacity="1" />
                  <stop offset="100%" stopColor="white" stopOpacity="0" />
                </linearGradient>
                <mask id="heroMask">
                  <rect width="100%" height="100%" fill="url(#heroFade)" />
                </mask>
              </defs>
              <rect width="100%" height="100%" fill="url(#heroPattern)" mask="url(#heroMask)" />
            </svg>
          </div>

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-[#FF6A00]/10 text-[#FF6A00] border border-[#FF6A00]/20 mb-6">
              AEO Education
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              What Happens When a Customer Asks AI to Find a Business Like Yours
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
              The behind-the-scenes journey of how ChatGPT, Perplexity, and Google AI actually find, evaluate, and recommend local businesses. And why yours might not make the cut.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
              <time dateTime="2026-03-17">March 17, 2026</time>
              <span className="w-1 h-1 rounded-full bg-gray-600" />
              <span>10 min read</span>
            </div>
          </div>
        </header>

        {/* Article Body */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-a:text-[#FF6A00] hover:prose-a:text-[#FF6A00]/80 prose-strong:text-white">

            <p>
              Picture this. A potential customer picks up their phone and types into ChatGPT: &quot;Who is the best plumber near me?&quot; or &quot;Find me a reliable accountant in Denver.&quot; What happens next will determine whether your business gets recommended or gets skipped entirely. And most business owners have no idea how this process actually works.
            </p>

            <p>
              This is not a hypothetical scenario. According to a 2025 survey by Eight Oh Two Marketing, 37% of consumers now start new information searches with AI tools rather than traditional search engines like Google. Around 43% of consumers use AI search tools daily, and three-quarters say they use them more often than they did a year ago. The shift is happening right now, and it is accelerating fast.
            </p>

            <p>
              Let us walk through, step by step, exactly what happens from the moment a customer types that question to the moment AI decides which businesses to name.
            </p>

            <h2>Step 1: The Customer Asks a Question</h2>

            <p>
              It starts with a simple, conversational question. Not the robotic keywords we have been trained to think about for years. Nobody types &quot;plumber Denver CO emergency&quot; into ChatGPT. Instead, they write something like: &quot;I have a leaking pipe under my kitchen sink and I need someone who can come out today. Who is good in the Denver area?&quot;
            </p>

            <p>
              This is fundamentally different from how traditional search works. The customer is having a conversation. They are providing context: the problem, the urgency, the location. And the AI platform processes all of that context to shape its response. It is not just matching keywords. It is understanding intent, specificity, and urgency.
            </p>

            <p>
              Research from Birdeye confirms that prompts with local intent trigger a web search in 59% of all ChatGPT instances. This means the AI recognizes the local nature of the request and actively goes looking for current, relevant information to answer it.
            </p>

            <h2>Step 2: The AI Decides Where to Look</h2>

            <p>
              Here is where things get interesting, and where most business owners are caught off guard. When ChatGPT receives a local business query, it does not open Google Maps. It does not check your Google Business Profile directly. Instead, it uses a process called Retrieval Augmented Generation (RAG) to search the open web for relevant information.
            </p>

            <p>
              The AI converts your customer&apos;s question into what is called a vector, which is essentially a mathematical representation of the meaning behind the words. It then compares that vector against a massive index of web content, looking for the most semantically relevant matches. This is not keyword matching. It is meaning matching.
            </p>

            {/* Stat Callout Box 1 */}
            <div className="not-prose my-10 rounded-xl border border-orange-500/30 bg-orange-500/5 p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#FF6A00]/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#FF6A00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#FF6A00] mb-1">59%</p>
                  <p className="text-gray-300">of ChatGPT prompts with local intent trigger a live web search, meaning the AI actively looks for current business information rather than relying on training data alone.</p>
                  <p className="text-sm text-gray-500 mt-2">Source: Birdeye, 2026</p>
                </div>
              </div>
            </div>

            <p>
              The sources the AI checks include business directories like Yelp and Bing Places, review platforms, industry-specific websites, local news and publications, business websites themselves, and sometimes social media. Notice what is not on that list for ChatGPT specifically: Google Business Profile. That detail alone explains why so many businesses that rank well on Google are completely invisible to ChatGPT. We have written about this in depth in our guide on <Link href="/blog/chatgpt-cant-see-google-business-profile">why ChatGPT cannot see your Google Business Profile</Link>.
            </p>

            <h2>Step 3: The AI Gathers Evidence</h2>

            <p>
              Once the AI identifies potentially relevant sources, it pulls in chunks of text from those pages. Think of it like a researcher scanning through dozens of articles, pulling out the most relevant paragraphs from each one. The AI is building a file on each potential business it might recommend.
            </p>

            <p>
              What does it look for in those sources? Consistent business information across multiple sites, including name, address, phone number, and services. Customer reviews and sentiment patterns. Specific content that answers the customer&apos;s exact question. Evidence of expertise, such as detailed service pages, case studies, or educational content. Third-party mentions and endorsements from trusted publications.
            </p>

            <p>
              This is where the concept of &quot;digital authority&quot; becomes critical. The AI is not just finding businesses. It is evaluating whether there is enough trustworthy evidence to confidently recommend them. For a deeper look at this evaluation process, see our article on <Link href="/blog/how-ai-platforms-choose-businesses-to-cite">how AI platforms choose which businesses to cite</Link>.
            </p>

            <h2>Step 4: The AI Cross-References and Validates</h2>

            <p>
              This step is what separates AI recommendations from a simple web search. After gathering evidence, the AI cross-references everything it found. It looks for consistency. Does the business name match across different directories? Are the services described the same way on Yelp as they are on the business website? Do the reviews tell a consistent story?
            </p>

            <p>
              The different AI platforms handle this validation differently, and the numbers tell an important story. According to research from Superlines and Averi AI, Perplexity cites businesses that appear in Google&apos;s top-10 search results about 91% of the time. ChatGPT, however, only overlaps with traditional top-10 Google results about 14% of the time. This means ChatGPT often discovers and recommends businesses that would not appear at the top of a traditional Google search.
            </p>

            {/* Stat Callout Box 2 */}
            <div className="not-prose my-10 rounded-xl border border-orange-500/30 bg-orange-500/5 p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#FF6A00]/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#FF6A00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#FF6A00] mb-1">14% vs. 91%</p>
                  <p className="text-gray-300">ChatGPT overlaps with Google&apos;s top-10 results only 14% of the time, while Perplexity overlaps 91% of the time. Each AI platform evaluates and selects businesses using its own distinct criteria.</p>
                  <p className="text-sm text-gray-500 mt-2">Source: Superlines / Averi AI, 2026</p>
                </div>
              </div>
            </div>

            <h2>Step 5: The AI Generates Its Recommendation</h2>

            <p>
              Now comes the moment of truth. The AI takes everything it has gathered, validated, and cross-referenced, and writes a response. This is not a list of ten blue links. It is a curated, conversational recommendation. The AI might name two or three businesses, explain why each one could be a good fit, mention relevant details like specializations or customer sentiment, and give the customer enough information to make a decision.
            </p>

            <p>
              The businesses that get named in this response are the ones that passed every filter along the way. They had a strong presence across the sources the AI checked. They had consistent information. Their content directly addressed the type of question being asked. And they had enough third-party validation through reviews and mentions to give the AI confidence in recommending them.
            </p>

            <p>
              Businesses that fail at any point in this chain simply do not appear. There is no &quot;page two&quot; of AI results. You are either in the answer or you are not.
            </p>

            <h2>Step 6: The Customer Acts (and They Act Fast)</h2>

            <p>
              Here is why this matters even more than you might think. When a customer receives a recommendation from AI, they are far more likely to act on it than they would on a traditional search result. Data from Superlines shows that AI search traffic converts at 14.2%, compared to Google&apos;s 2.8%. That is a 5x higher conversion rate.
            </p>

            <p>
              Why? Because the customer asked a specific question and received a specific, trusted answer. They did not have to scroll through ads, compare ten different options, or read through marketing copy. The AI did the filtering for them. By the time they reach your business, they are already primed to buy.
            </p>

            {/* Stat Callout Box 3 */}
            <div className="not-prose my-10 rounded-xl border border-orange-500/30 bg-orange-500/5 p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#FF6A00]/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#FF6A00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#FF6A00] mb-1">14.2% Conversion Rate</p>
                  <p className="text-gray-300">AI search traffic converts at 14.2% compared to Google&apos;s 2.8%. Customers who find your business through AI recommendations are 5x more likely to take action.</p>
                  <p className="text-sm text-gray-500 mt-2">Source: Superlines, 2026</p>
                </div>
              </div>
            </div>

            <h2>What This Means for Your Business</h2>

            <p>
              The entire journey we just walked through happens in seconds. From question to recommendation, the AI processes dozens of sources, evaluates multiple businesses, and delivers a curated answer before your customer even finishes their coffee. And this is happening billions of times. Between April 2024 and March 2025, the ten most-used AI chatbots recorded 55.2 billion visits, an 80.92% jump year over year, according to research from All About AI.
            </p>

            <p>
              The question is not whether your customers are using AI to find businesses like yours. They already are. The question is whether your business is set up to be found, evaluated, and recommended through this process. If your digital presence is built only for traditional Google search, you are likely invisible to a growing share of potential customers. To understand the connection between platforms your business may already be on, read our breakdown of <Link href="/blog/bing-places-chatgpt-connection">how Bing Places connects to ChatGPT</Link>.
            </p>

            <p>
              Optimizing for AI recommendations requires a different approach than traditional SEO. It is about building a consistent, verifiable digital footprint across the sources AI platforms actually read. It is about creating content that directly answers the specific questions your customers ask. And it is about earning the kind of third-party validation that gives AI systems the confidence to put your name in front of a customer.
            </p>

            <p>
              The businesses that understand this process today will be the ones AI recommends tomorrow. The rest will keep wondering why their phone has stopped ringing.
            </p>
          </div>
        </article>

        {/* FAQ Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                q: 'What data sources does ChatGPT use to find local businesses?',
                a: 'ChatGPT pulls from a combination of web search results, business directories like Yelp and Bing Places, review platforms, industry publications, and business websites. It does not directly access Google Business Profiles, so businesses relying solely on GBP may be invisible to ChatGPT.'
              },
              {
                q: 'How long does it take for AI to process a local business query?',
                a: 'The entire process, from receiving the query to delivering a recommendation, happens in seconds. The AI interprets the question, searches the web for relevant sources, evaluates what it finds, and generates a response all within a single interaction.'
              },
              {
                q: 'Why does AI recommend my competitor but not me?',
                a: 'AI platforms recommend businesses they can verify through multiple independent sources. If your competitor has a well-structured website, consistent directory listings, strong reviews across platforms, and content that directly answers common questions, the AI has more evidence to work with when forming its recommendation.'
              },
              {
                q: 'Does Google ranking affect whether AI recommends my business?',
                a: 'It depends on the platform. Perplexity cites top-10 Google results about 91% of the time. ChatGPT, however, only overlaps with Google top-10 results about 14% of the time. Each AI platform has its own evaluation criteria beyond traditional search rankings.'
              },
              {
                q: 'Can I pay to appear in AI search results?',
                a: 'Currently, there is no way to pay for placement in most AI search responses. AI platforms evaluate businesses based on the quality, consistency, and authority of publicly available information. The only way to improve visibility is by strengthening your digital footprint across the sources AI actually reads.'
              },
              {
                q: 'What percentage of consumers now use AI instead of Google to search?',
                a: 'According to a 2025 survey by Eight Oh Two Marketing, 37% of consumers now start new information searches with AI tools rather than traditional search engines. Additionally, 43% of consumers use AI search tools daily, and three-quarters report using them more often than a year ago.'
              }
            ].map((faq, i) => (
              <div
                key={i}
                className="rounded-xl border border-white/10 bg-white/5 p-6 hover:border-[#FF6A00]/30 transition-colors"
              >
                <h3 className="text-white font-semibold text-base mb-3">{faq.q}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="relative rounded-2xl border border-[#FF6A00]/20 bg-gradient-to-br from-[#FF6A00]/10 to-transparent p-8 sm:p-12 text-center overflow-hidden">
            <div className="absolute inset-0 opacity-5">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="ctaPattern" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
                    <circle cx="12" cy="12" r="1" fill="#FF6A00" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#ctaPattern)" />
              </svg>
            </div>
            <div className="relative">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Is AI Recommending Your Business?
              </h2>
              <p className="text-gray-300 mb-8 max-w-xl mx-auto">
                Most businesses are invisible to AI search. Find out exactly where you stand with a free Blind Spot Report that shows what AI platforms actually say when customers ask about your industry.
              </p>
              <Link
                href="/blindspot"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#FF6A00] text-white font-semibold text-lg hover:bg-[#FF6A00]/90 transition-colors no-underline"
              >
                Get Your Free Blind Spot Report
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <p className="text-sm text-gray-500 mt-4">No pitch, just the data.</p>
            </div>
          </div>
        </section>

        {/* Author Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-6">
            <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#FF6A00] flex items-center justify-center">
              <span className="text-white font-bold text-lg">AE</span>
            </div>
            <div>
              <p className="text-white font-semibold">The Answer Engine Team</p>
              <p className="text-gray-400 text-sm">
                We help local businesses get found, cited, and recommended by AI search platforms. Our research tracks how ChatGPT, Perplexity, Google AI, and Claude evaluate and surface businesses in real time.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}