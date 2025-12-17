import { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';

export const revalidate = 86400;
export const dynamic = 'force-static';

export async function generateMetadata(): Promise<Metadata> {
  const title = "How to Check If AI Is Recommending Your Business (5-Minute Test)";
  const description = "Test whether ChatGPT, Claude, and Google AI recommend your business or your competitors. Free 5-minute audit you can do right now to check your AI visibility.";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      url: 'https://theanswerengine.ai/blog/check-if-ai-recommends-your-business',
      images: [{ url: '/images/ai-recommendation-test-5-minute-audit.png', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: 'https://theanswerengine.ai/blog/check-if-ai-recommends-your-business',
    },
  };
}

export default function CheckAIRecommendation() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://theanswerengine.ai/blog/check-if-ai-recommends-your-business#article",
        "headline": "How to Check If AI Is Recommending Your Business (5-Minute Test)",
        "description": "Test whether ChatGPT, Claude, and Google AI recommend your business or your competitors. Free 5-minute audit you can do right now.",
        "image": "https://theanswerengine.ai/images/ai-recommendation-test-5-minute-audit.png",
        "datePublished": "2025-12-16",
        "dateModified": "2025-12-16",
        "author": {
          "@type": "Person",
          "name": "JB",
          "url": "https://theanswerengine.ai/about"
        },
        "publisher": {
          "@type": "Organization",
          "name": "The Answer Engine",
          "logo": {
            "@type": "ImageObject",
            "url": "https://theanswerengine.ai/TheAnswerEngine_Color.png"
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://theanswerengine.ai/blog/check-if-ai-recommends-your-business"
        }
      },
      {
        "@type": "HowTo",
        "@id": "https://theanswerengine.ai/blog/check-if-ai-recommends-your-business#howto",
        "name": "How to Check If AI Is Recommending Your Business",
        "description": "A 5-minute test to determine whether AI platforms like ChatGPT, Claude, and Google AI Overview are recommending your business to potential customers.",
        "totalTime": "PT5M",
        "estimatedCost": {
          "@type": "MonetaryAmount",
          "currency": "USD",
          "value": "0"
        },
        "step": [
          {
            "@type": "HowToStep",
            "position": 1,
            "name": "Open ChatGPT",
            "text": "Go to chat.openai.com and start a new conversation. You don't need a paid account—the free version works for this test."
          },
          {
            "@type": "HowToStep",
            "position": 2,
            "name": "Ask for a recommendation",
            "text": "Type: 'Who is the best [your service] in [your city]?' or 'Can you recommend a [your service] in [your area]?' Use the exact words your customers would use."
          },
          {
            "@type": "HowToStep",
            "position": 3,
            "name": "Check the response",
            "text": "Look for your business name in the response. Note whether competitors are mentioned. Save or screenshot the results."
          },
          {
            "@type": "HowToStep",
            "position": 4,
            "name": "Repeat on other platforms",
            "text": "Run the same test on Claude (claude.ai), Perplexity (perplexity.ai), and Google (look for AI Overview at the top of results)."
          },
          {
            "@type": "HowToStep",
            "position": 5,
            "name": "Score your results",
            "text": "Count how many platforms mention you vs. competitors. If you're mentioned on 0-1 platforms but competitors appear on 3-4, you have an AI visibility gap."
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://theanswerengine.ai/blog/check-if-ai-recommends-your-business#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Why doesn't ChatGPT recommend my business?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "ChatGPT recommends businesses based on the information available in its training data and web searches. If your business lacks authoritative content, proper schema markup, or clear expertise signals, AI platforms may not have enough information to confidently recommend you."
            }
          },
          {
            "@type": "Question",
            "name": "How often should I test my AI visibility?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Test monthly at minimum. AI platforms update their knowledge and algorithms regularly. What works today may change, and competitors may improve their AI visibility over time."
            }
          },
          {
            "@type": "Question",
            "name": "Does being recommended by AI actually bring in customers?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. When AI recommends your business by name, it acts as a trusted referral. These leads often convert at higher rates because the AI has essentially pre-qualified you as a credible option."
            }
          },
          {
            "@type": "Question",
            "name": "What if AI recommends my competitors but not me?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "This is a competitive gap you can close. Your competitors likely have better-structured content, more comprehensive schema markup, or stronger authority signals. Answer Engine Optimization can help you become the recommended choice instead."
            }
          },
          {
            "@type": "Question",
            "name": "Can I improve my AI recommendations myself?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Basic improvements like adding schema markup and creating direct-answer content can help. However, comprehensive AI visibility requires systematic optimization across multiple platforms, which typically requires specialized expertise and tools."
            }
          },
          {
            "@type": "Question",
            "name": "How long does it take to start getting AI recommendations?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "With proper optimization, initial AI citations can appear within 30-60 days. Significant, consistent recommendations typically develop over 2-4 months as AI platforms index and trust your content."
            }
          }
        ]
      },
      {
        "@type": "Organization",
        "@id": "https://theanswerengine.ai/#organization",
        "name": "The Answer Engine",
        "url": "https://theanswerengine.ai",
        "logo": "https://theanswerengine.ai/TheAnswerEngine_Color.png",
        "description": "Answer Engine Optimization agency helping local service businesses get cited by AI platforms."
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://theanswerengine.ai/#localbusiness",
        "name": "The Answer Engine",
        "description": "Answer Engine Optimization agency for local service businesses",
        "url": "https://theanswerengine.ai",
        "telephone": "+1-213-444-2229",
        "email": "support@theanswerengine.ai",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Los Angeles",
          "addressRegion": "CA",
          "addressCountry": "US"
        },
        "priceRange": "$",
        "openingHours": "Mo-Fr 09:00-18:00"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://theanswerengine.ai/" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://theanswerengine.ai/blog" },
          { "@type": "ListItem", "position": 3, "name": "Check If AI Recommends Your Business" }
        ]
      }
    ]
  };

  return (
    <>
      <Script
        id="check-ai-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <main className="min-h-screen bg-[#0A0A0F]">
        <article className="max-w-4xl mx-auto px-6 py-12 sm:py-16">
          {/* Breadcrumbs */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-[#f27d24] transition-colors">Home</Link>
            <span className="mx-2">&rsaquo;</span>
            <Link href="/blog" className="hover:text-[#f27d24] transition-colors">Blog</Link>
            <span className="mx-2">&rsaquo;</span>
            <span className="text-gray-400">Check If AI Recommends You</span>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl mb-6 bg-[#f27d24]/10 border border-[#f27d24]/20">
              <span className="text-sm font-semibold tracking-wider uppercase text-[#f27d24]">DIY Guide</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-white leading-tight">
              How to Check If AI Is <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f27d24] to-[#d66d1f]">Recommending Your Business</span>
            </h1>

            {/* Featured Image */}
            <div className="mb-8 rounded-xl overflow-hidden border border-white/[0.05]">
              <img
                src="/images/ai-recommendation-test-5-minute-audit.png"
                alt="5-minute test to check if AI platforms like ChatGPT are recommending your business"
                className="w-full"
              />
            </div>

            {/* Featured Snippet Block */}
            <div className="bg-gradient-to-br from-[#f27d24]/5 to-[#d66d1f]/5 border border-[#f27d24]/20 rounded-xl p-6 mb-8">
              <p className="text-lg text-white leading-relaxed">
                <strong>To check if AI recommends your business: Open ChatGPT, type &quot;Who is the best [your service] in [your city]?&quot; and see if you&apos;re mentioned.</strong> Repeat on Claude, Perplexity, and Google. If competitors appear but you don&apos;t, you have an AI visibility gap that&apos;s costing you customers.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>5 min test</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>Updated December 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Free</span>
              </div>
            </div>
          </header>

          {/* Introduction */}
          <section className="mb-12">
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                Right now, someone in your city is asking ChatGPT: &quot;Who&apos;s the best [your service] around here?&quot;
              </p>
              <p>
                The question is: <span className="text-white font-medium">Are you the answer?</span>
              </p>
              <p>
                Most business owners have no idea whether AI platforms recommend them or their competitors. They&apos;re flying blind while potential customers get sent elsewhere.
              </p>
              <p>
                This 5-minute test will show you exactly where you stand—and whether you&apos;re losing business to competitors who&apos;ve figured out <Link href="/blog/aeo-vs-seo" className="text-[#f27d24] hover:underline">Answer Engine Optimization</Link>.
              </p>
            </div>
          </section>

          {/* The 5-Minute Test */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-white">The 5-Minute AI Visibility Test</h2>

            <div className="space-y-6">
              {/* Step 1 */}
              <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#f27d24] rounded-full flex items-center justify-center text-white font-bold text-lg">1</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-3">Open ChatGPT</h3>
                    <p className="text-gray-300 mb-4">
                      Go to <span className="text-[#f27d24]">chat.openai.com</span> and start a new conversation. The free version works fine for this test—you don&apos;t need a paid account.
                    </p>
                    <div className="bg-black/30 rounded-lg p-4 border border-white/10">
                      <p className="text-gray-400 text-sm">💡 <strong className="text-gray-300">Tip:</strong> Use an incognito/private browser window to avoid any personalization affecting results.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#f27d24] rounded-full flex items-center justify-center text-white font-bold text-lg">2</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-3">Ask for a Recommendation</h3>
                    <p className="text-gray-300 mb-4">
                      Type a question your ideal customer would ask. Use natural language—the way a real person would phrase it.
                    </p>
                    <div className="bg-black/30 rounded-lg p-4 border border-white/10 space-y-3">
                      <p className="text-gray-300 font-medium">Example prompts to try:</p>
                      <ul className="space-y-2 text-gray-400">
                        <li>&quot;Who is the best [your service] in [your city]?&quot;</li>
                        <li>&quot;Can you recommend a [your service] in [your area]?&quot;</li>
                        <li>&quot;I need a [your service] in [your city]. Who should I call?&quot;</li>
                        <li>&quot;What [your service type] do you recommend in [your city]?&quot;</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#f27d24] rounded-full flex items-center justify-center text-white font-bold text-lg">3</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-3">Analyze the Response</h3>
                    <p className="text-gray-300 mb-4">
                      Look carefully at what ChatGPT returns. Check for:
                    </p>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start gap-3">
                        <span className="text-[#f27d24] mt-1">•</span>
                        <span><strong className="text-white">Your business name</strong> — Are you mentioned by name?</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#f27d24] mt-1">•</span>
                        <span><strong className="text-white">Competitor names</strong> — Who else is mentioned?</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#f27d24] mt-1">•</span>
                        <span><strong className="text-white">Position</strong> — If you are mentioned, are you first, last, or buried?</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#f27d24] mt-1">•</span>
                        <span><strong className="text-white">Context</strong> — Does it mention your specialties or just your name?</span>
                      </li>
                    </ul>
                    <div className="bg-black/30 rounded-lg p-4 border border-white/10 mt-4">
                      <p className="text-gray-400 text-sm">📸 <strong className="text-gray-300">Screenshot the results.</strong> You&apos;ll want to compare over time.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#f27d24] rounded-full flex items-center justify-center text-white font-bold text-lg">4</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-3">Test Other Platforms</h3>
                    <p className="text-gray-300 mb-4">
                      Repeat the same question on these platforms:
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="bg-black/30 rounded-lg p-4 border border-white/10">
                        <div className="font-semibold text-white mb-1">Claude</div>
                        <p className="text-gray-400 text-sm">claude.ai — Anthropic&apos;s AI assistant</p>
                      </div>
                      <div className="bg-black/30 rounded-lg p-4 border border-white/10">
                        <div className="font-semibold text-white mb-1">Perplexity</div>
                        <p className="text-gray-400 text-sm">perplexity.ai — AI-powered search</p>
                      </div>
                      <div className="bg-black/30 rounded-lg p-4 border border-white/10">
                        <div className="font-semibold text-white mb-1">Google AI Overview</div>
                        <p className="text-gray-400 text-sm">google.com — Look for AI box at top</p>
                      </div>
                      <div className="bg-black/30 rounded-lg p-4 border border-white/10">
                        <div className="font-semibold text-white mb-1">Bing Copilot</div>
                        <p className="text-gray-400 text-sm">bing.com — Microsoft&apos;s AI search</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 5 */}
              <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#f27d24] rounded-full flex items-center justify-center text-white font-bold text-lg">5</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-3">Score Your Results</h3>
                    <p className="text-gray-300 mb-4">
                      Use this simple scorecard to assess your AI visibility:
                    </p>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse text-sm">
                        <thead>
                          <tr className="border-b border-white/10">
                            <th className="text-left py-3 px-4 text-gray-400 font-medium">Platform</th>
                            <th className="text-center py-3 px-4 text-gray-400 font-medium">You Mentioned?</th>
                            <th className="text-center py-3 px-4 text-gray-400 font-medium">Competitors?</th>
                          </tr>
                        </thead>
                        <tbody className="text-gray-300">
                          <tr className="border-b border-white/5">
                            <td className="py-3 px-4">ChatGPT</td>
                            <td className="py-3 px-4 text-center">Yes / No</td>
                            <td className="py-3 px-4 text-center">Yes / No</td>
                          </tr>
                          <tr className="border-b border-white/5">
                            <td className="py-3 px-4">Claude</td>
                            <td className="py-3 px-4 text-center">Yes / No</td>
                            <td className="py-3 px-4 text-center">Yes / No</td>
                          </tr>
                          <tr className="border-b border-white/5">
                            <td className="py-3 px-4">Perplexity</td>
                            <td className="py-3 px-4 text-center">Yes / No</td>
                            <td className="py-3 px-4 text-center">Yes / No</td>
                          </tr>
                          <tr className="border-b border-white/5">
                            <td className="py-3 px-4">Google AI Overview</td>
                            <td className="py-3 px-4 text-center">Yes / No</td>
                            <td className="py-3 px-4 text-center">Yes / No</td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4">Bing Copilot</td>
                            <td className="py-3 px-4 text-center">Yes / No</td>
                            <td className="py-3 px-4 text-center">Yes / No</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Interpreting Results */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-white">What Your Results Mean</h2>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-green-500/10 to-green-600/5 border border-green-500/20 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Mentioned on 4-5 Platforms</h3>
                    <p className="text-gray-300">You have strong AI visibility. Focus on maintaining your position and expanding to new query types. Consider monitoring competitors to stay ahead.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 border border-yellow-500/20 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-yellow-500/20 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Mentioned on 2-3 Platforms</h3>
                    <p className="text-gray-300">You have partial visibility but gaps exist. Some platforms recognize you, others don&apos;t. Targeted optimization could significantly expand your reach.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-red-500/10 to-red-600/5 border border-red-500/20 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Mentioned on 0-1 Platforms</h3>
                    <p className="text-gray-300">You&apos;re largely invisible to AI. If competitors are being mentioned, they&apos;re capturing leads that should be going to you. This is an urgent competitive gap.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-white/[0.02] border border-white/[0.05] rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-[#f27d24]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">The Real Warning Sign</h4>
                  <p className="text-gray-300">
                    The most concerning result isn&apos;t being mentioned on zero platforms—it&apos;s when <span className="text-white font-medium">competitors are mentioned but you&apos;re not</span>. That means AI platforms have enough information about your market to make recommendations, and they&apos;re actively choosing others over you.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Why You Might Be Missing */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-white">Why AI Might Not Be Recommending You</h2>

            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                If you&apos;re invisible to AI platforms, it&apos;s usually one (or more) of these issues:
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-5">
                  <h3 className="font-semibold text-white mb-2">Missing Schema Markup</h3>
                  <p className="text-gray-400 text-base">AI needs structured data to understand your business. Without proper schema, you&apos;re just unstructured text.</p>
                </div>
                <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-5">
                  <h3 className="font-semibold text-white mb-2">No Direct-Answer Content</h3>
                  <p className="text-gray-400 text-base">Your content doesn&apos;t directly answer the questions people ask AI. It talks about you instead of helping them.</p>
                </div>
                <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-5">
                  <h3 className="font-semibold text-white mb-2">Weak Authority Signals</h3>
                  <p className="text-gray-400 text-base">AI can&apos;t verify your expertise. No reviews, credentials, or proof that you know what you&apos;re talking about.</p>
                </div>
                <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-5">
                  <h3 className="font-semibold text-white mb-2">Thin Content</h3>
                  <p className="text-gray-400 text-base">A few pages with basic info doesn&apos;t demonstrate expertise. AI favors comprehensive, authoritative sources.</p>
                </div>
              </div>

              <p>
                The good news: all of these are fixable. Learn more about <Link href="/blog/how-chatgpt-chooses-businesses-to-recommend" className="text-[#f27d24] hover:underline">how ChatGPT chooses which businesses to recommend</Link>.
              </p>
            </div>
          </section>

          {/* What To Do Next */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-white">What To Do With Your Results</h2>

            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-4">If you&apos;re being recommended:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Document your current position (screenshot everything)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Set up monthly monitoring to catch any changes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Test additional query variations to find gaps</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Watch for competitor improvements</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-4">If you&apos;re NOT being recommended:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-[#f27d24] mt-1">&rarr;</span>
                    <span>Understand what competitors are doing differently</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#f27d24] mt-1">&rarr;</span>
                    <span>Audit your schema markup and structured data</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#f27d24] mt-1">&rarr;</span>
                    <span>Create content that directly answers customer questions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#f27d24] mt-1">&rarr;</span>
                    <span>Consider a professional <Link href="/blog/what-is-answer-engine-optimization" className="text-[#f27d24] hover:underline">AEO strategy</Link></span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-white">Frequently Asked Questions</h2>

            <div className="space-y-6">
              <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Why doesn&apos;t ChatGPT recommend my business?</h3>
                <p className="text-gray-300 leading-relaxed">
                  ChatGPT recommends businesses based on the information available in its training data and web searches. If your business lacks authoritative content, proper schema markup, or clear expertise signals, AI platforms may not have enough information to confidently recommend you.
                </p>
              </div>

              <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3">How often should I test my AI visibility?</h3>
                <p className="text-gray-300 leading-relaxed">
                  Test monthly at minimum. AI platforms update their knowledge and algorithms regularly. What works today may change, and competitors may improve their AI visibility over time.
                </p>
              </div>

              <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Does being recommended by AI actually bring in customers?</h3>
                <p className="text-gray-300 leading-relaxed">
                  Yes. When AI recommends your business by name, it acts as a trusted referral. These leads often convert at higher rates because the AI has essentially pre-qualified you as a credible option.
                </p>
              </div>

              <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3">What if AI recommends my competitors but not me?</h3>
                <p className="text-gray-300 leading-relaxed">
                  This is a competitive gap you can close. Your competitors likely have better-structured content, more comprehensive schema markup, or stronger authority signals. Answer Engine Optimization can help you become the recommended choice instead.
                </p>
              </div>

              <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Can I improve my AI recommendations myself?</h3>
                <p className="text-gray-300 leading-relaxed">
                  Basic improvements like adding schema markup and creating direct-answer content can help. However, comprehensive AI visibility requires systematic optimization across multiple platforms, which typically requires specialized expertise and tools.
                </p>
              </div>

              <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3">How long does it take to start getting AI recommendations?</h3>
                <p className="text-gray-300 leading-relaxed">
                  With proper optimization, initial AI citations can appear within 30-60 days. Significant, consistent recommendations typically develop over 2-4 months as AI platforms index and trust your content.
                </p>
              </div>
            </div>
          </section>

          {/* Related Content */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-white">Related Articles</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link href="/blog/aeo-vs-seo" className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-6 hover:border-[#f27d24]/30 transition-colors group">
                <div className="text-[#f27d24] text-sm font-medium mb-2">Comparison</div>
                <div className="text-white font-semibold group-hover:text-[#f27d24] transition-colors">AEO vs SEO: What&apos;s the Difference?</div>
              </Link>
              <Link href="/blog/how-chatgpt-chooses-businesses-to-recommend" className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-6 hover:border-[#f27d24]/30 transition-colors group">
                <div className="text-[#f27d24] text-sm font-medium mb-2">AI Algorithm</div>
                <div className="text-white font-semibold group-hover:text-[#f27d24] transition-colors">How ChatGPT Chooses Businesses</div>
              </Link>
              <Link href="/blog/why-chatgpt-recommends-your-competitors" className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-6 hover:border-[#f27d24]/30 transition-colors group">
                <div className="text-[#f27d24] text-sm font-medium mb-2">Competitive Analysis</div>
                <div className="text-white font-semibold group-hover:text-[#f27d24] transition-colors">Why ChatGPT Recommends Competitors</div>
              </Link>
              <Link href="/case-studies/justin-borges" className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-6 hover:border-[#f27d24]/30 transition-colors group">
                <div className="text-[#f27d24] text-sm font-medium mb-2">Case Study</div>
                <div className="text-white font-semibold group-hover:text-[#f27d24] transition-colors">From Invisible to 4,100+ Monthly Clicks</div>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center py-12 border-t border-white/[0.05]">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-white">Want a Deeper Analysis?</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              The 5-minute test shows you the surface. A professional AEO audit reveals exactly why competitors are winning and what it would take to replace them.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#f27d24] to-[#d66d1f] text-white font-semibold px-8 py-4 rounded-xl hover:opacity-90 transition-opacity"
            >
              Get Your Free AEO Audit
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <p className="text-gray-500 text-sm mt-4">See exactly where you&apos;re losing to competitors—and what to do about it.</p>
          </section>
        </article>
      </main>
    </>
  );
}
