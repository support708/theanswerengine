import type { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';


export async function generateMetadata(): Promise<Metadata> {
  const title = 'How to Get Cited by AI Search: The Complete Local Business Guide';
  const description =
    'AI search engines like ChatGPT, Perplexity, Claude, and Google AI cite businesses based on specific signals. Here is exactly what drives citations and how to build them systematically.';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      url: 'https://theanswerengine.ai/blog/how-to-get-cited-by-ai-search',
      images: [
        {
          url: 'https://theanswerengine.ai/images/how-to-get-cited-by-ai-search.png',
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: 'https://theanswerengine.ai/blog/how-to-get-cited-by-ai-search',
    },
    keywords: [
      'how to get cited by AI search',
      'get cited by ChatGPT',
      'AI search citation',
      'answer engine optimization',
      'get recommended by AI',
      'local business AI visibility',
      'AI citation signals',
    ],
  };
}

export default function HowToGetCitedByAISearchPage() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': 'https://theanswerengine.ai/blog/how-to-get-cited-by-ai-search#article',
        headline: 'How to Get Cited by AI Search: The Complete Local Business Guide',
        description:
          'AI search engines like ChatGPT, Perplexity, Claude, and Google AI cite businesses based on specific signals. Here is exactly what drives citations and how to build them systematically.',
        datePublished: '2026-05-13',
        dateModified: '2026-05-13',
        author: {
          '@type': 'Organization',
          name: 'The Answer Engine Team',
          url: 'https://theanswerengine.ai',
        },
        publisher: {
          '@type': 'Organization',
          name: 'The Answer Engine',
          logo: {
            '@type': 'ImageObject',
            url: 'https://theanswerengine.ai/TheAnswerEngine_Color.png',
          },
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': 'https://theanswerengine.ai/blog/how-to-get-cited-by-ai-search',
        },
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://theanswerengine.ai/blog/how-to-get-cited-by-ai-search#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How do AI search engines decide which businesses to cite?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'AI platforms cite businesses based on four primary signals: the clarity and authority of your website content, the quantity and quality of third-party mentions across the web, the completeness of your directory and profile listings, and the specificity of your service and location claims. Businesses that answer specific questions clearly and appear consistently across authoritative sources get cited most often.',
            },
          },
          {
            '@type': 'Question',
            name: 'How long does it take to get cited by AI search after making changes?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Most businesses see initial AI citation improvements within 30 to 90 days of implementing structured content changes. Training data cutoffs and crawl schedules vary by platform: Perplexity tends to update faster because it actively browses the web, while ChatGPT and Claude depend more on periodic retraining cycles. Google AI Overviews update as Google crawls your site.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is the difference between getting found on Google and getting cited by AI?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Google ranks pages based on links, keywords, and authority signals. AI search engines cite sources based on the quality of the answer they can extract from your content. A page that ranks well on Google may not get cited by AI if it buries its answers in vague paragraphs. AI citations require clear, specific, directly stated answers to common questions.',
            },
          },
          {
            '@type': 'Question',
            name: 'Does having more reviews help AI cite my business?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, but the mechanism depends on the platform. Google AI Overviews use Google reviews as a trust signal. Meta AI uses Facebook reviews. ChatGPT and Perplexity reference review counts and ratings when they appear in authoritative directories like Yelp, Angi, or Houzz. Reviews are one of five signals that drive AI citations, not the only one.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can I pay to get cited by AI search?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. AI citations are not paid placements. ChatGPT, Perplexity, Claude, and Google AI do not accept payment to include businesses in their answers. Citations are earned by building the right content signals, authority, and presence. This is why Answer Engine Optimization is a professional service rather than an ad buy.',
            },
          },
          {
            '@type': 'Question',
            name: 'Which AI platform is most important to get cited on?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'It depends on your market. ChatGPT has the largest user base in the US and is the first AI tool most consumers try. Google AI Overviews affect the most searches in aggregate. Perplexity is growing fastest among research-intent users. The businesses that win in 2026 are cited across all five major platforms, not just one.',
            },
          },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://theanswerengine.ai/blog/how-to-get-cited-by-ai-search#breadcrumb',
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
            name: 'How to Get Cited by AI Search',
            item: 'https://theanswerengine.ai/blog/how-to-get-cited-by-ai-search',
          },
        ],
      },
    ],
  };

  return (
    <>
      <Script
        id="schema-ai-search-citations"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <main className="min-h-screen bg-[#0A0A0F]">
        <article className="max-w-4xl mx-auto px-6 py-12 sm:py-16">

          {/* Breadcrumbs */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">&rsaquo;</span>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <span className="mx-2">&rsaquo;</span>
            <span className="text-gray-400">AI Search Citations</span>
          </nav>
          {/* Championship Cover Image */}
          <div className="ae-article-hero w-full rounded-xl overflow-hidden mb-10" style={{ maxHeight: 420 }}>
            <img
              src="/blog/how-to-get-cited-by-ai-search.webp"
              alt="how to get cited by ai search"
              style={{ width: '100%', height: 420, objectFit: 'cover', display: 'block' }}
              loading="eager"
            />
          </div>

          {/* Header */}
          <header className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl mb-6 bg-white/[0.04] border border-white/[0.08]">
              <span className="text-sm font-semibold tracking-wider uppercase text-white">How-To Guides</span>
            </div>

            <h1 className="font-headline font-black tracking-tighter text-3xl sm:text-4xl lg:text-5xl text-white uppercase leading-tight mb-6">
              How to Get Cited by AI Search: The Complete Local Business Guide
            </h1>

            {/* Featured Snippet Block */}
            <div className="bg-gradient-to-br from-white/[0.02] to-white/[0.02] border border-white/[0.08] rounded-xl p-6 mb-8">
              <p className="text-lg text-white leading-relaxed">
                <strong>AI search citations are earned, not bought. ChatGPT, Perplexity, Claude, and Google AI cite businesses that answer specific questions clearly, appear consistently across authoritative sources, and have structured content that AI can extract and verify.</strong> This guide covers exactly what those signals are and how to build them.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>9 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>May 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>The Answer Engine Team</span>
              </div>
            </div>
          </header>

          {/* Stats Grid */}
          <div className="ae-stats-grid not-prose mb-12">
            <div className="ae-stat-card">
              <div className="ae-stat-emoji">🤖</div>
              <div className="ae-stat-value ae-accent">5</div>
              <div className="ae-stat-label">major AI platforms actively citing local businesses in 2026: ChatGPT, Perplexity, Claude, Google AI, Meta AI</div>
            </div>
            <div className="ae-stat-card">
              <div className="ae-stat-emoji">📊</div>
              <div className="ae-stat-value ae-accent">1</div>
              <div className="ae-stat-label">business cited per AI query on average. You either get the citation or a competitor does.</div>
            </div>
            <div className="ae-stat-card">
              <div className="ae-stat-emoji">⏱️</div>
              <div className="ae-stat-value ae-accent">30-90</div>
              <div className="ae-stat-label">days for structured content changes to improve AI citation rates across major platforms</div>
            </div>
            <div className="ae-stat-card">
              <div className="ae-stat-emoji">🎯</div>
              <div className="ae-stat-value ae-accent">4</div>
              <div className="ae-stat-label">core citation signals that determine whether AI recommends you: content, authority, presence, specificity</div>
            </div>
          </div>

          {/* Main Content */}
          <div className="prose prose-invert prose-lg max-w-none prose-headings:font-headline prose-headings:text-white prose-p:text-gray-300 prose-a:text-[#F27D24] prose-a:no-underline hover:prose-a:underline prose-strong:text-white">

            <span className="ae-section-label">THE BASICS</span>
            <h2>How AI Search Actually Decides What to Cite</h2>

            <p>When someone asks ChatGPT or Perplexity &ldquo;who is the best plumber in [city]&rdquo;, the AI does not run a Google search and pick the top result. It synthesizes an answer from its training data, real-time web browsing (for platforms that have it), and structured sources it trusts. The business it names is the one that has built the strongest citation signal across those inputs. Markets fill fast. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Check your territory availability.</a></p>

            <p>There are four core signals AI platforms use to determine citations: Your first step: <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free AERO Blind Spot Scan.</a></p>

            <p><strong>1. Content clarity.</strong> Does your website answer the specific question being asked? AI platforms extract answers from content. A page that says &ldquo;we are a leading full-service plumbing company committed to quality&rdquo; gives AI nothing to extract. A page that says &ldquo;we provide emergency drain cleaning, pipe repair, and water heater installation for homeowners in [city] and surrounding areas&rdquo; gives AI a specific, verifiable answer to cite. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Claim your free call</a> before your market fills.</p>

            <p><strong>2. Third-party authority.</strong> Does the web beyond your own site confirm who you are and what you do? AI platforms weigh mentions in directories, press coverage, review platforms, and industry associations. A business mentioned in Yelp, Angi, the local Chamber of Commerce, and three news articles is far more citable than a business that only appears on its own website. Reach out: <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>

            <p><strong>3. Listing completeness and consistency.</strong> Are your name, address, phone number, hours, and service area consistent across every platform where you appear? AI platforms flag inconsistencies as trust signals. A business listed as &ldquo;Joe&apos;s Plumbing&rdquo; in one directory and &ldquo;Joe&apos;s Plumbing Services LLC&rdquo; in another creates ambiguity that AI resolves by not citing you. Call us at <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> today.</p>

            <p><strong>4. Specificity of claims.</strong> AI prefers sources that make specific, falsifiable claims over generic ones. &ldquo;We serve Los Angeles&rdquo; is weak. &ldquo;We serve Glendale, Burbank, Pasadena, and the San Fernando Valley with same-day service&rdquo; is specific enough to cite as an answer to &ldquo;who serves my area.&rdquo; <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Lock in your exclusive territory now.</a></p>

            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Get your free AI Visibility Report — 48-hour turnaround</a>

            <span className="ae-section-label">PLATFORM BY PLATFORM</span>
            <h2>What Each AI Platform Uses to Cite Businesses</h2>

            <p>The five major AI platforms do not all use the same data sources. Understanding this matters because optimizing for one does not automatically optimize for the others. Ready to act? <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a free strategy session.</a></p>

            <p><strong>ChatGPT (OpenAI):</strong> Uses its training corpus plus real-time Bing search for ChatGPT Search users. Cites sources that appear in high-authority web content, structured data, and reviews that have been indexed at scale. Strong Google Business Profile and review presence feeds through Bing into ChatGPT Search responses. Drop us a line at <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>

            <p><strong>Perplexity:</strong> Actively browses the web in real time. Cites sources it can access and verify. Your website needs to be crawlable, load fast, and answer questions directly in body copy. Perplexity is the most responsive to recent content changes, often within days rather than months. Speak to an AEO specialist: <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.</p>

            <p><strong>Claude (Anthropic):</strong> Relies on training data and does not browse the web by default. Businesses cited by Claude tend to appear in published articles, directories, and structured content that was indexed during training windows. Updating your web presence now builds the corpus that informs future Claude training. One client per city. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">See if your market is available.</a></p>

            <p><strong>Google AI Overviews:</strong> Draws from Google&apos;s own index. Strong Google Business Profile, website schema markup, Google reviews, and local pack ranking all feed directly into AI Overview citations. If you rank well for local searches, you are more likely to appear in AI Overviews for those same queries. Check where you stand: <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free Blind Spot Scan.</a></p>

            <p><strong>Meta AI:</strong> Reads Facebook Business pages and Instagram Business profiles. Reviews on Facebook, completeness of your Meta business profile, and posting activity all influence whether Meta AI recommends you on WhatsApp, Instagram, and Messenger. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Schedule a free 30-min call.</a></p>

            <span className="ae-section-label">THE SYSTEM</span>
            <h2>The 7-Step System to Build AI Citation Signals</h2>

            <p>These steps are in order of impact. If you only have time for three of them, do steps 1, 3, and 5. Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> for a custom strategy.</p>

            <p><strong>Step 1: Rewrite your service pages to answer questions directly.</strong> Every service page should open with a direct answer to the most common question about that service. &ldquo;How much does [service] cost in [city]?&rdquo; &ldquo;How long does [service] take?&rdquo; &ldquo;Who should I call for [specific problem]?&rdquo; Write the answer first, then support it. AI extracts the first clear answer it finds. Questions? Call <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.</p>

            <p><strong>Step 2: Add schema markup to your website.</strong> Schema markup is structured data that tells AI and search engines exactly what your business does, who it serves, and where it operates. LocalBusiness schema, Service schema, and FAQPage schema are the three most important for local AI citations. They give AI a machine-readable summary of your business it can cite without guessing. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Secure your territory before a competitor does.</a></p>

            <p><strong>Step 3: Complete and synchronize all directory listings.</strong> Get into every major directory: Google Business Profile, Bing Places, Apple Maps, Yelp, Angi, Houzz (if relevant to your trade), BBB, and your local Chamber of Commerce. Make sure your NAP (name, address, phone) is identical across all of them. Use your exact legal business name, exact address format, and one primary phone number. <a href="https://theanswerengine.ai/blindspot" className="cta-inline">See your AI visibility score — free.</a></p>

            <p><strong>Step 4: Build a review base on multiple platforms.</strong> AI platforms use reviews as a trust proxy. You need reviews on Google, Facebook, and at least one industry-specific directory. Twenty or more reviews at 4.5 stars or above is the threshold where most AI platforms begin treating a business as a confident recommendation. Under ten reviews and AI treats you as unverified. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book your free consultation here.</a></p>

            <p><strong>Step 5: Publish FAQ content targeting your exact service queries.</strong> Build a FAQ section on your website or a dedicated FAQ page that answers the 10 most common questions about your service. Format them as question-and-answer pairs with the question as an H3 header and the answer as 2-4 sentences of direct response. This format is optimized for AI extraction and often gets cited verbatim. Contact us at <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>

            <p><strong>Step 6: Earn third-party mentions.</strong> Get mentioned in local news articles, industry associations, podcast appearances, guest posts, and press releases. Each mention on a separate authoritative domain adds to the third-party authority signal that AI uses to confirm your business exists and matters. A business mentioned in ten different authoritative sources is more citable than one with ten pages on its own website. Reach us at <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.</p>

            <p><strong>Step 7: Build platform-specific profiles.</strong> For Meta AI: complete your Facebook Business page and post weekly. For Google AI: optimize your Google Business Profile monthly. For ChatGPT Search: ensure your site is indexed in Bing. For Perplexity: make your site fast, crawlable, and structured. Each platform has its own data source, and you need to feed all of them. We work with one business per market. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Check if yours is still open.</a></p>

            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Get your free AI Visibility Report — 48-hour turnaround</a>

            <span className="ae-section-label">COMMON MISTAKES</span>
            <h2>Why Most Businesses Are Still Invisible to AI After Making Changes</h2>

            <p>The most common mistake is treating AI optimization like a one-time task. You cannot update your website once and expect AI to start citing you. Building citation signals is a continuous process, and most businesses underestimate how long it takes for AI platforms to incorporate changes. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Schedule a free call</a> to see where you stand.</p>

            <p><strong>Mistake 1: Vague content that no one would cite.</strong> If your website reads like a brochure instead of a knowledge source, AI has nothing to cite. Every page should contain at least one specific, verifiable claim that answers a real question. Vague language like &ldquo;exceptional service&rdquo; and &ldquo;industry-leading quality&rdquo; is invisible to AI citation engines. Send your questions to <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>

            <p><strong>Mistake 2: Inconsistent NAP across directories.</strong> Inconsistencies in your business name, address, or phone number across different platforms create ambiguity. AI platforms resolve ambiguity by choosing the most consistent source, which is usually your competitor who has cleaner listings. Call <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> for a free consultation.</p>

            <p><strong>Mistake 3: Optimizing for one platform and ignoring others.</strong> A business with a perfect Google Business Profile and no Facebook activity will get cited by Google AI but missed by Meta AI. A business with great website content but no directory presence will get cited by Claude but missed by ChatGPT Search. You need all five platforms. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Claim your market territory — one client per area.</a></p>

            <p><strong>Mistake 4: Expecting immediate results.</strong> ChatGPT and Claude update their citation patterns based on training cycles that can take months. Perplexity updates faster. Google AI Overviews update as Google crawls. Set a 90-day baseline before measuring AI citation changes from content updates. <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Run your free AI Blind Spot Scan.</a></p>

            <p><strong>Mistake 5: No review growth strategy.</strong> Reviews are a real-time trust signal that AI platforms continuously reference. A business with 8 reviews that was cited six months ago may stop being cited as competitors accumulate 30 or 50 reviews. Review growth is not a one-time task. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a free 30-minute strategy call.</a></p>

            <span className="ae-section-label">FAQ</span>
            <h2>Frequently Asked Questions</h2>

            <h3>How do AI search engines decide which businesses to cite?</h3>
            <p>AI platforms cite businesses based on four signals: content clarity (does your site answer specific questions directly), third-party authority (are you mentioned across multiple authoritative sources), listing consistency (are your name, address, and phone identical everywhere), and specificity (do you make clear, verifiable claims about who you serve and what you do). Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> to get started.</p>

            <h3>How long does it take to get cited by AI search after making changes?</h3>
            <p>Most businesses see improvement within 30 to 90 days. Perplexity updates fastest because it browses the web in real time. ChatGPT and Claude update based on training cycles that can take longer. Google AI Overviews update as Google crawls your site, typically within weeks of significant content changes. <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a></p>

            <h3>What is the difference between getting found on Google and getting cited by AI?</h3>
            <p>Google ranks pages based on backlinks, keywords, and authority. AI platforms cite sources based on the quality of the answer they can extract from your content. You can rank on Google with vague content. You cannot get cited by AI with vague content. AI requires clear, specific, directly stated answers.</p>

            <h3>Does having more reviews help AI cite my business?</h3>
            <p>Yes. Reviews are a trust proxy that every major AI platform uses, though the source varies. Google AI uses Google reviews. Meta AI uses Facebook reviews. ChatGPT and Perplexity reference reviews that appear in directories they can access. Twenty or more reviews at 4.5 stars is the threshold where AI treats a business as a confident citation.</p>

            <h3>Can I pay to get cited by AI search?</h3>
            <p>No. AI citations are earned, not purchased. ChatGPT, Perplexity, Claude, and Google AI do not accept payment for citations. This is why businesses hire Answer Engine Optimization specialists: the citations are determined by systematic content and authority building, not ad spend.</p>

            <h3>Which AI platform is most important to get cited on?</h3>
            <p>ChatGPT has the largest US user base and should be the primary focus. Google AI Overviews affect the most searches in aggregate. Perplexity is growing fastest. The businesses that dominate AI referrals in 2026 are cited across all five major platforms, not just one.</p>

          </div>

          {/* Final CTA */}
          <section className="ae-final-cta not-prose">
            <div className="ae-final-cta-inner">
              <h2 className="text-2xl sm:text-3xl font-black mb-4 text-white font-headline uppercase tracking-tighter">
                How to Improve Brand Visibility in AI Search Engines — Starting Today
              </h2>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                2,900 businesses/month search for exactly this. The Answer Engine improves your citation rate across ChatGPT, Perplexity, Gemini, and Google AI Overviews. One market slot. Free scan to start.
              </p>
              <a
                href="https://theanswerengine.ai/blindspot"
                className="inline-flex items-center justify-center gap-2 bg-[#F27D24] text-black font-black px-10 py-4 tracking-tighter hover:translate-y-[2px] transition-transform font-headline uppercase"
              >
                Improve Your AI Visibility — Free Scan
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
      </main>
    </>
  );
}
