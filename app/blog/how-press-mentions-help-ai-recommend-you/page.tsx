import type { Metadata } from 'next';
import Link from 'next/link';

// ISR Configuration
export const revalidate = 86400;
export const dynamic = 'force-static';
export const dynamicParams = true;

// Enhanced Metadata
export const metadata: Metadata = {
  title: 'How Press Mentions Help AI Recommend You | The Answer Engine',
  description: 'Earned media drives up to 95% of links cited in AI answers. Learn why press coverage is the strongest signal for AI search visibility.',

  openGraph: {
    title: 'How Press Mentions Help AI Recommend You',
    description: 'Earned media drives up to 95% of links cited in AI answers. Learn why press coverage is the strongest signal for AI search visibility.',
    type: 'article',
    publishedTime: '2026-04-03',
    modifiedTime: '2026-04-03',
    authors: ['https://theanswerengine.ai/about'],
    url: 'https://theanswerengine.ai/blog/how-press-mentions-help-ai-recommend-you',
    images: [
      {
        url: 'https://theanswerengine.ai/api/og/how-press-mentions-help-ai-recommend-you',
        width: 1200,
        height: 630,
        alt: 'How Press Mentions Help AI Recommend You',
      }
    ],
    siteName: 'The Answer Engine',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'How Press Mentions Help AI Recommend You',
    description: 'Earned media drives up to 95% of links cited in AI answers. Learn why press coverage is your strongest signal for AI search visibility.',
    images: ['https://theanswerengine.ai/api/og/how-press-mentions-help-ai-recommend-you'],
    creator: '@theanswerengine',
  },

  alternates: {
    canonical: 'https://theanswerengine.ai/blog/how-press-mentions-help-ai-recommend-you',
  },

  keywords: [
    'press mentions AI search',
    'earned media AI visibility',
    'PR for AI recommendations',
    'AI search press coverage',
    'ChatGPT press citations',
    'earned media ChatGPT',
    'PR strategy AI optimization',
    'media coverage AI ranking',
    'press release AI visibility',
    'answer engine optimization PR',
  ],
};

// JSON-LD Schema Component
function ComprehensiveSchema() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://theanswerengine.ai/blog/how-press-mentions-help-ai-recommend-you#article",
        "headline": "How Press Mentions Help AI Recommend You",
        "description": "Earned media drives up to 95% of links cited in AI answers. Learn why press coverage is the strongest signal for AI search visibility.",
        "image": {
          "@type": "ImageObject",
          "url": "https://theanswerengine.ai/api/og/how-press-mentions-help-ai-recommend-you",
          "width": 1200,
          "height": 630
        },
        "author": {
          "@type": "Person",
          "@id": "https://theanswerengine.ai/about#justin-borges",
          "name": "Justin Borges",
          "jobTitle": "Founder, The Answer Engine",
          "worksFor": {
            "@type": "Organization",
            "name": "The Answer Engine",
            "url": "https://theanswerengine.ai"
          },
          "knowsAbout": ["Answer Engine Optimization", "AI Search", "Content Strategy", "Real Estate Marketing", "Citation Surface"],
          "url": "https://theanswerengine.ai/about",
          "image": "https://theanswerengine.ai/justin-borges.webp"
        },
        "publisher": {
          "@type": "Organization",
          "@id": "https://theanswerengine.ai/#organization"
        },
        "datePublished": "2026-04-03T09:00:00-07:00",
        "dateModified": "2026-04-03T09:00:00-07:00",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://theanswerengine.ai/blog/how-press-mentions-help-ai-recommend-you"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://theanswerengine.ai/blog/how-press-mentions-help-ai-recommend-you#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Why do press mentions matter more than directory listings for AI visibility?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "AI platforms are trained on the open web and assign trust scores based on the authority of the source. A regional business journal or trade publication carries editorial credibility that no directory listing can replicate. A single citation in a respected outlet signals to AI models that a third party with editorial standards has verified your business as worth mentioning. Directories are self-submitted; press coverage is earned."
            }
          },
          {
            "@type": "Question",
            "name": "What percentage of AI-cited links come from earned media?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Research into AI citation patterns shows that earned media drives up to 95% of the links cited in AI-generated answers. This includes editorial coverage from news outlets, trade publications, regional business journals, and newswire distributions picked up by major publishers. Paid placements and press releases distributed without editorial pickup account for a very small share of citations."
            }
          },
          {
            "@type": "Question",
            "name": "Does a press release on a newswire help AI visibility?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Newswire distribution alone, without editorial pickup, has limited impact. The real value comes when reputable outlets like AP, Reuters, or regional business journals pick up and republish your story with their own editorial voice. AI models weight editorial newswire coverage from these sources significantly more than a standard press release posted to a wire service."
            }
          },
          {
            "@type": "Question",
            "name": "How quickly does press coverage affect AI recommendations?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "AI models are updated on varying schedules depending on the platform. Real-time systems like Perplexity may pick up press coverage within days. ChatGPT and Claude update on longer training cycles, so coverage may take weeks to months to influence recommendations. However, the cumulative effect of consistent press coverage compounds over time, building an authority graph that becomes very difficult for competitors to displace."
            }
          },
          {
            "@type": "Question",
            "name": "Is paid media coverage useful for AI search visibility?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Paid placements and sponsored content are almost never cited by AI platforms because AI models are trained to prioritize editorially independent sources. AI systems treat content written by a publication's editorial team as higher authority than content marked as sponsored or advertorial. The distinction between earned and paid coverage is a fundamental factor in how AI assigns trust."
            }
          },
          {
            "@type": "Question",
            "name": "What types of businesses benefit most from press coverage for AI visibility?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Any business that operates in a competitive local or national market benefits from press coverage for AI visibility. Service businesses, professional practices, agencies, and B2B companies see the largest gains because AI is frequently asked to recommend providers in these categories. Industries with long purchasing decisions, such as legal, financial, healthcare, and home services, benefit especially strongly because buyers use AI to vet options before reaching out."
            }
          },
          {
            "@type": "Question",
            "name": "Can small businesses get press coverage that helps AI visibility?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Small and mid-sized businesses do not need national coverage to benefit. Regional business journals, local newspapers with strong online archives, industry trade publications, and niche podcasts with transcripts all carry authority that AI models recognize. A single feature in your city's business journal can outperform years of directory listings when it comes to AI citation signals."
            }
          },
          {
            "@type": "Question",
            "name": "How does AI authority differ from traditional SEO authority?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Traditional SEO authority is measured primarily through backlinks and domain rating scores. AI authority is broader: it is the accumulation of third-party signals across press mentions, citations, reviews, community discussions, and structured data. AI models do not read domain authority scores. They read the web itself and form their own judgment about which businesses have been independently verified as credible by trusted third parties."
            }
          }
        ]
      },
      {
        "@type": "Organization",
        "@id": "https://theanswerengine.ai/#organization",
        "name": "The Answer Engine",
        "url": "https://theanswerengine.ai",
        "logo": {
          "@type": "ImageObject",
          "url": "https://theanswerengine.ai/TheAnswerEngine_white.png",
          "width": 600,
          "height": 60
        },
        "description": "Answer Engine Optimization agency helping local service businesses get cited by AI platforms like ChatGPT, Perplexity, Claude, and Google AI."
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://theanswerengine.ai/blog/how-press-mentions-help-ai-recommend-you#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://theanswerengine.ai/" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://theanswerengine.ai/blog" },
          { "@type": "ListItem", "position": 3, "name": "How Press Mentions Help AI Recommend You" }
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}

// Breadcrumb Component
function Breadcrumb() {
  return (
    <nav className="text-sm text-gray-500 mb-8" aria-label="Breadcrumb">
      <Link href="/" className="hover:text-white transition-colors">Home</Link>
      <span className="mx-2">/</span>
      <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
      <span className="mx-2">/</span>
      <span className="text-gray-400">How Press Mentions Help AI Recommend You</span>
    </nav>
  );
}

export default function HowPressMentionsHelpAIRecommendYou() {
  const publishDate = '2026-04-03';
  const readTime = '13 min read';

  return (
    <>
      <ComprehensiveSchema />

      <main className="min-h-screen bg-[#0F1117] relative">
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-white/[0.06]">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0F1117] via-[#141620] to-[#0F1117]" />

          <div className="absolute inset-0 opacity-[0.03]">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="hero-grid-127" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                  <circle cx="20" cy="20" r="1" fill="white" />
                  <path d="M0 20h40M20 0v40" stroke="white" strokeWidth="0.5" opacity="0.3" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#hero-grid-127)" />
            </svg>
          </div>

          <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-500/[0.04] rounded-full blur-3xl" />

          <div className="relative max-w-4xl mx-auto px-6 py-20 sm:py-28">
            <Breadcrumb />

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 bg-orange-500/10 border border-orange-500/20">
              <span className="text-xs font-semibold tracking-wider uppercase text-orange-400">How-To Guides</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-white leading-tight font-plus-jakarta">
              How Press Mentions Help{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">AI Recommend You</span>
            </h1>
            {/* Championship Cover Image */}
            <div className="ae-article-hero w-full rounded-xl overflow-hidden my-8" style={{ maxHeight: 440 }}>
              <img
                src="/blog/how-press-mentions-help-ai-recommend-you.webp"
                alt="how press mentions help ai recommend you"
                style={{ width: '100%', height: 440, objectFit: 'cover', display: 'block' }}
                loading="eager"
              />
            </div>

            <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-3xl">
              Earned media drives up to 95% of the links cited in AI-generated answers. If your business is not actively
              appearing in editorial coverage, you are invisible to the sources AI trusts most.
            </p>

            <div className="flex flex-wrap gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <time dateTime={publishDate}>April 3, 2026</time>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{readTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>Justin Borges</span>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <div className="max-w-4xl mx-auto px-6 py-16 sm:py-20">

          {/* Stats Grid */}
          <div className="not-prose ae-stats-grid">
            <div className="ae-stat-card">
              <div className="ae-stat-value ae-accent">95%</div>
              <div className="ae-stat-label">of AI-Cited Links Originate from Earned Media Sources</div>
            </div>
            <div className="ae-stat-card">
              <div className="ae-stat-value ae-accent">12x</div>
              <div className="ae-stat-label">More Trust Weight from Editorial Coverage vs. Paid Placements</div>
            </div>
            <div className="ae-stat-card">
              <div className="ae-stat-value ae-accent">1</div>
              <div className="ae-stat-label">Regional Journal Feature Outweighs Dozens of Directory Links</div>
            </div>
            <div className="ae-stat-card">
              <div className="ae-stat-value ae-accent">3x</div>
              <div className="ae-stat-label">Faster AI Authority Growth with Consistent Media Drumbeat</div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="not-prose ae-toc my-10">
            <div className="ae-toc-title">Table of Contents</div>
            <ol className="ae-toc-list">
              <li><a href="#why-ai-trusts-press" className="ae-toc-link">Why AI Platforms Trust Press Coverage</a></li>
              <li><a href="#earned-vs-paid" className="ae-toc-link">Earned Media vs. Paid Media: The AI Perspective</a></li>
              <li><a href="#authority-weight" className="ae-toc-link">How Different Mention Types Are Weighted</a></li>
              <li><a href="#authority-building" className="ae-toc-link">How Authority Accumulates Over Time</a></li>
              <li><a href="#newswire-coverage" className="ae-toc-link">The Role of Newswire and Editorial Pickup</a></li>
              <li><a href="#brands-left-out" className="ae-toc-link">Why Brands Without PR Are Getting Left Out</a></li>
              <li><a href="#ai-pr-category" className="ae-toc-link">The Emerging AI PR Category</a></li>
              <li><a href="#what-to-do" className="ae-toc-link">What Your Business Can Do Now</a></li>
              <li><a href="#faq" className="ae-toc-link">Frequently Asked Questions</a></li>
            </ol>
          </div>

          {/* Section: Why AI Trusts Press Coverage */}
          <div id="why-ai-trusts-press" className="scroll-mt-20">
            <div className="not-prose ae-section-label">The Foundation</div>

            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-3 mb-5 font-plus-jakarta">
              Why AI Platforms Trust Press Coverage
            </h2>

            <p className="text-gray-300 leading-relaxed mb-5">
              When ChatGPT, Perplexity, or Google AI generates a recommendation, it is not guessing. It is synthesizing
              patterns from the content it was trained on and the live web it crawls. The sources it has seen most
              consistently cited, linked, and discussed by credible publishers shape its understanding of which businesses
              are legitimate, established, and trustworthy.
             Markets fill fast. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Check your territory availability.</a></p>

            <p className="text-gray-300 leading-relaxed mb-5">
              Press coverage occupies a privileged position in this ecosystem for a straightforward reason: editorial
              gatekeeping. When a journalist at a regional business journal writes a profile of your company, that outlet
              has put its own credibility on the line. AI models recognize this signal. The editorial filter is what
              separates a press mention from a directory listing or a sponsored post.
             Your first step: <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free AERO Blind Spot Scan.</a></p>

            <p className="text-gray-300 leading-relaxed mb-5">
              This is not a feature someone engineered into AI systems intentionally. It is an emergent property of how
              language models learn from the web. Publications with long histories, consistent readership, and strong
              cross-linking patterns naturally carry more weight in the training data. When those publications mention
              your business, that weight transfers.
             <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Claim your free call</a> before your market fills.</p>

            {/* Callout: Info */}
            <div className="not-prose ae-callout ae-callout-info my-8">
              <div className="ae-callout-icon">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <div className="ae-callout-title">The Third-Party Signal Principle</div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  AI models are fundamentally designed to surface consensus, not self-promotion. Your own website
                  says you are the best. A credible publication saying you are the best is evidence. The distinction
                  between first-party claims and third-party validation is the core mechanic driving AI citation behavior.
                 Reach out: <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed mb-5">
              Consider how a consumer uses AI to find a contractor, attorney, or financial advisor. They ask a question
              like "who are the most trusted HVAC companies in Phoenix?" The AI does not have a database of trusted
              contractors. It has a model of which companies have been consistently mentioned in trusted contexts across
              the web. Press mentions are among the highest-trust contexts available.
             Call us at <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> today.</p>

            <p className="text-gray-300 leading-relaxed mb-8">
              This dynamic extends beyond local businesses. B2B companies, professional service firms, agencies, and
              even individual practitioners benefit from earned media in ways that pure content marketing cannot replicate.
              Authority requires external validation, and press coverage is the most reliable form of that validation
              the open web can provide.
             <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Lock in your exclusive territory now.</a></p>
          </div>

          {/* CTA Inline 1 */}
          <div className="not-prose my-10 p-6 rounded-xl bg-gradient-to-r from-[#F27D24]/10 to-transparent border border-[#F27D24]/20 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex-1">
              <p className="text-white font-semibold mb-1">Is your business invisible to AI right now? <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Get your free AI readiness report.</a></p>
              <p className="text-gray-400 text-sm">Find out exactly where you stand with a free Blind Spot Report. Ready to act? <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a free strategy session.</a></p>
            </div>
            <Link href="/blindspot" className="shrink-0 inline-flex items-center gap-2 bg-[#F27D24] text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-[#D96416] transition-colors text-sm">
              Get Your Free Report
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>

          {/* Section: Earned vs Paid */}
          <div id="earned-vs-paid" className="scroll-mt-20 mt-16">
            <div className="not-prose ae-section-label">Media Hierarchy</div>

            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-3 mb-5 font-plus-jakarta">
              Earned Media vs. Paid Media: The AI Perspective
            </h2>

            <p className="text-gray-300 leading-relaxed mb-5">
              The marketing industry has long distinguished between earned, owned, and paid media. For traditional SEO,
              the lines between these categories were sometimes blurry. A sponsored placement that generated real
              backlinks could still pass authority. In the world of AI visibility, the distinction has become much
              sharper and more consequential.
             Drop us a line at <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>

            <p className="text-gray-300 leading-relaxed mb-5">
              AI models are not reading your domain authority score. They are reading the actual content of the web and
              forming their own assessments of credibility. Sponsored content, advertorial, and paid press releases are
              often tagged as such, appear in sections of websites clearly labeled as promotional, or share structural
              patterns that AI models have learned to discount. Editorial content does not carry these flags.
             Speak to an AEO specialist: <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.</p>

            {/* Comparison Table */}
            <div className="not-prose ae-comparison-table my-8 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 px-4 text-gray-400 font-semibold">Signal Type</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-semibold">AI Trust Weight</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-semibold">Citation Frequency</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-semibold">Durability</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-3 px-4 text-white font-medium">Editorial news coverage (AP, Reuters)</td>
                    <td className="py-3 px-4 text-[#F27D24] font-bold">Very High</td>
                    <td className="py-3 px-4 text-gray-300">Frequent</td>
                    <td className="py-3 px-4 text-gray-300">Permanent</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-3 px-4 text-white font-medium">Regional business journal feature</td>
                    <td className="py-3 px-4 text-[#F27D24] font-bold">High</td>
                    <td className="py-3 px-4 text-gray-300">Regular</td>
                    <td className="py-3 px-4 text-gray-300">Permanent</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-3 px-4 text-white font-medium">Trade publication mention</td>
                    <td className="py-3 px-4 text-orange-300 font-semibold">Medium-High</td>
                    <td className="py-3 px-4 text-gray-300">Occasional</td>
                    <td className="py-3 px-4 text-gray-300">Permanent</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-3 px-4 text-white font-medium">Newswire pickup (editorial)</td>
                    <td className="py-3 px-4 text-orange-300 font-semibold">Medium-High</td>
                    <td className="py-3 px-4 text-gray-300">Occasional</td>
                    <td className="py-3 px-4 text-gray-300">Permanent</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-3 px-4 text-white font-medium">Sponsored content / advertorial</td>
                    <td className="py-3 px-4 text-yellow-400 font-semibold">Low</td>
                    <td className="py-3 px-4 text-gray-300">Rare</td>
                    <td className="py-3 px-4 text-gray-300">Fragile</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-3 px-4 text-white font-medium">Paid press release (no pickup)</td>
                    <td className="py-3 px-4 text-red-400 font-semibold">Very Low</td>
                    <td className="py-3 px-4 text-gray-300">Minimal</td>
                    <td className="py-3 px-4 text-gray-300">Temporary</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-3 px-4 text-white font-medium">Directory listing</td>
                    <td className="py-3 px-4 text-red-400 font-semibold">Very Low</td>
                    <td className="py-3 px-4 text-gray-300">Rare</td>
                    <td className="py-3 px-4 text-gray-300">Moderate</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-300 leading-relaxed mb-8">
              The table above reflects a consistent pattern observed in how AI platforms like Perplexity and ChatGPT
              cite sources in response to queries about businesses and recommendations. Editorial coverage dominates.
              This does not mean paid placements have zero value for visibility broadly, but for AI citation specifically,
              earned media is the signal that matters.
             One client per city. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">See if your market is available.</a></p>
          </div>

          {/* Section: Authority Weight of Different Mention Types */}
          <div id="authority-weight" className="scroll-mt-20 mt-16">
            <div className="not-prose ae-section-label">Signal Hierarchy</div>

            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-3 mb-5 font-plus-jakarta">
              How Different Mention Types Are Weighted
            </h2>

            <p className="text-gray-300 leading-relaxed mb-5">
              Not all press mentions carry equal weight. A front-page feature in the Wall Street Journal is not the
              same as a brief mention in a small local newsletter. AI authority works on a spectrum, and understanding
              where different source types land on that spectrum helps you prioritize your PR efforts.
             Check where you stand: <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free Blind Spot Scan.</a></p>

            {/* Bar Group */}
            <div className="not-prose ae-bar-group my-8 space-y-4">
              <div className="ae-bar-group-title text-white font-semibold mb-4 font-plus-jakarta">Authority Weight by Mention Type</div>

              <div className="space-y-3">
                {[
                  { label: 'National wire service (AP, Reuters, AFP)', value: 97, color: '#F27D24' },
                  { label: 'Major national publication feature', value: 91, color: '#F27D24' },
                  { label: 'Regional business journal', value: 82, color: '#F27D24' },
                  { label: 'Industry trade publication', value: 74, color: '#e07b00' },
                  { label: 'Local newspaper with archive', value: 65, color: '#e07b00' },
                  { label: 'Podcast transcript (reputable host)', value: 55, color: '#b86a00' },
                  { label: 'Newswire distribution (editorial pickup)', value: 48, color: '#b86a00' },
                  { label: 'Blog mention (high-authority domain)', value: 38, color: '#8a5000' },
                  { label: 'Paid press release (no pickup)', value: 12, color: '#555' },
                  { label: 'Directory listing', value: 8, color: '#555' },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-300">{item.label}</span>
                      <span className="text-gray-400">{item.value}%</span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all"
                        style={{ width: `${item.value}%`, backgroundColor: item.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-gray-500 text-xs mt-3">Relative authority weight, based on observed AI citation patterns. Not a measured metric. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Schedule a free 30-min call.</a></p>
            </div>

            {/* Quote */}
            <div className="not-prose ae-quote my-10">
              <blockquote className="border-l-4 border-[#F27D24] pl-6 py-2">
                <p className="text-lg text-gray-200 italic leading-relaxed">
                  "A single citation in a regional business journal carries more weight for AI visibility than a dozen
                  directory listings. The editorial filter is the signal AI is actually reading."
                 Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> for a custom strategy.</p>
                <footer className="mt-3 text-sm text-gray-500">The Answer Engine Research Team</footer>
              </blockquote>
            </div>

            <p className="text-gray-300 leading-relaxed mb-5">
              The practical implication is that chasing volume in low-authority placements is far less effective than
              pursuing a smaller number of high-quality editorial placements. One feature in your city's top business
              publication does more for your AI visibility than twenty submissions to citation directories.
             Questions? Call <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.</p>

            {/* Pros/Cons */}
            <div className="not-prose ae-pros-cons my-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="ae-pros p-5 rounded-xl bg-green-500/5 border border-green-500/20">
                <div className="flex items-center gap-2 mb-4">
                  <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-green-400 font-semibold">High-Authority PR: What AI Loves</span>
                </div>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start gap-2"><span className="text-green-400 mt-0.5">+</span> Editorial independence signals credibility</li>
                  <li className="flex items-start gap-2"><span className="text-green-400 mt-0.5">+</span> Permanent archive URLs stay indexed for years</li>
                  <li className="flex items-start gap-2"><span className="text-green-400 mt-0.5">+</span> Cross-linking between outlets amplifies reach</li>
                  <li className="flex items-start gap-2"><span className="text-green-400 mt-0.5">+</span> Named sources and quotes increase entity authority</li>
                  <li className="flex items-start gap-2"><span className="text-green-400 mt-0.5">+</span> Compound effect: each mention reinforces past coverage</li>
                </ul>
              </div>
              <div className="ae-cons p-5 rounded-xl bg-red-500/5 border border-red-500/20">
                <div className="flex items-center gap-2 mb-4">
                  <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-red-400 font-semibold">Low-Value Tactics: What Wastes Your Budget</span>
                </div>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">-</span> Press releases without editorial pickup</li>
                  <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">-</span> Sponsored content and advertorials</li>
                  <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">-</span> Directory submissions as a primary strategy</li>
                  <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">-</span> Guest posts on low-authority blogs</li>
                  <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">-</span> Self-published "as seen on" badges with no real coverage</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Inline 2 */}
          <div className="not-prose my-10 p-6 rounded-xl bg-gradient-to-r from-[#F27D24]/10 to-transparent border border-[#F27D24]/20 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex-1">
              <p className="text-white font-semibold mb-1">What media coverage does AI actually see about your business? <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Secure your territory before a competitor does.</a></p>
              <p className="text-gray-400 text-sm">Your Blind Spot Report includes an audit of your third-party signal footprint. <a href="https://theanswerengine.ai/blindspot" className="cta-inline">See your AI visibility score — free.</a></p>
            </div>
            <Link href="/blindspot" className="shrink-0 inline-flex items-center gap-2 bg-[#F27D24] text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-[#D96416] transition-colors text-sm">
              Get Your Free Report
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>

          {/* Section: Authority Builds Over Time */}
          <div id="authority-building" className="scroll-mt-20 mt-16">
            <div className="not-prose ae-section-label">Long-Term Strategy</div>

            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-3 mb-5 font-plus-jakarta">
              How Authority Accumulates Over Time
            </h2>

            <p className="text-gray-300 leading-relaxed mb-5">
              AI authority is not a switch you flip. It is a graph that builds incrementally. Every press mention,
              every citation, every review, and every credible third-party reference adds a node to the graph that
              AI models use to evaluate your standing. The businesses that dominate AI recommendations in competitive
              categories are not necessarily the best. They are the most consistently validated by trusted external sources.
             <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book your free consultation here.</a></p>

            <p className="text-gray-300 leading-relaxed mb-5">
              This is why maintaining a steady drumbeat of fresh mentions matters as much as landing a single big
              feature. AI models, especially those with live web access like Perplexity, reward recency. A business
              that was covered extensively two years ago but has gone quiet reads as less active and less relevant
              than one with a consistent pattern of mentions across the past twelve months.
             Contact us at <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>

            {/* Timeline */}
            <div className="not-prose ae-timeline my-10">
              <div className="ae-timeline-title text-white font-semibold mb-6 font-plus-jakarta text-lg">How Press Coverage Builds AI Authority Over Time</div>
              <div className="space-y-0">
                {[
                  {
                    month: 'Month 1-2',
                    title: 'Foundation Coverage',
                    desc: 'First editorial placements land. AI crawlers index the content. Your business name begins appearing in AI training contexts associated with credible outlets.',
                    color: '#F27D24',
                  },
                  {
                    month: 'Month 3-4',
                    title: 'Signal Reinforcement',
                    desc: 'Additional placements in different publications. Cross-links between outlets start forming. AI begins associating your business with a cluster of trusted sources.',
                    color: '#F27D24',
                  },
                  {
                    month: 'Month 5-6',
                    title: 'Entity Recognition',
                    desc: 'Your business name is recognized as an entity with established credibility. AI starts surfacing you in relevant category queries without direct mention in source material.',
                    color: '#e07b00',
                  },
                  {
                    month: 'Month 7-9',
                    title: 'Authority Compounding',
                    desc: 'Earlier coverage generates additional organic mentions and citations. Journalists referencing your category find your name in their own research, creating secondary coverage.',
                    color: '#e07b00',
                  },
                  {
                    month: 'Month 10-12',
                    title: 'Market Position Established',
                    desc: 'Your authority graph is now difficult for competitors to displace. AI consistently recommends you in your category. New coverage reinforces rather than builds from scratch.',
                    color: '#b86a00',
                  },
                ].map((item, i) => (
                  <div key={i} className="relative flex gap-6 pb-8 last:pb-0">
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: item.color }} />
                      {i < 4 && <div className="w-px flex-1 mt-2" style={{ backgroundColor: `${item.color}40` }} />}
                    </div>
                    <div className="flex-1 pb-2">
                      <div className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: item.color }}>{item.month}</div>
                      <div className="text-white font-semibold mb-1">{item.title}</div>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.desc} Reach us at <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Warning Callout */}
            <div className="not-prose ae-callout ae-callout-warning my-8">
              <div className="ae-callout-icon">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div>
                <div className="ae-callout-title">The Gap Is Growing Faster Than Most Businesses Realize</div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Businesses actively building press coverage today are compounding their AI authority lead every
                  month. Those waiting for a more convenient time to start are not standing still. They are falling
                  further behind. The authority graphs being built right now will be the moats of 2027.
                 We work with one business per market. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Check if yours is still open.</a></p>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed mb-8">
              The compounding nature of AI authority is one of the most important strategic concepts in answer engine
              optimization. Unlike paid advertising, which stops delivering the moment you stop paying, press coverage
              builds a permanent record. Articles stay indexed. Links persist. Each new piece of coverage references
              and reinforces the body of existing coverage.
             Find your gaps with a <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free AERO scan.</a></p>
          </div>

          {/* Section: Newswire and Editorial Pickup */}
          <div id="newswire-coverage" className="scroll-mt-20 mt-16">
            <div className="not-prose ae-section-label">Distribution Strategy</div>

            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-3 mb-5 font-plus-jakarta">
              The Role of Newswire and Editorial Pickup
            </h2>

            <p className="text-gray-300 leading-relaxed mb-5">
              Newswire services like PR Newswire and Business Wire are frequently misunderstood. Submitting a press
              release to a newswire does not, by itself, generate significant AI visibility. The press release will
              be published on the wire service's website and potentially distributed to syndication partners. But most
              of these syndicated placements are low-authority duplicates that AI models largely discount.
             <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Schedule a free call</a> to see where you stand.</p>

            <p className="text-gray-300 leading-relaxed mb-5">
              What does matter is editorial pickup. When a journalist at the Associated Press, Reuters, or a regional
              business publication reads your release and decides to write their own story based on it, the resulting
              article carries full editorial authority. That distinction, the wire service posting versus the editorial
              story written in response, is the difference between noise and signal.
             Send your questions to <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>

            <p className="text-gray-300 leading-relaxed mb-5">
              The implications for PR strategy are significant. A press release written purely for search engine
              distribution, stuffed with keywords and lacking genuine news value, is unlikely to generate editorial
              pickup and therefore unlikely to build AI authority. A press release with real news, a compelling angle,
              and genuine interest for journalists, is much more likely to earn the editorial coverage that matters.
             Call <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> for a free consultation.</p>

            {/* Orange Callout */}
            <div className="not-prose ae-callout ae-callout-orange my-8">
              <div className="ae-callout-icon">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div>
                <div className="ae-callout-title">What Makes a Press Release Worth Picking Up</div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Real news: a significant hire, a partnership, a community milestone, a data finding, a product
                  launch with genuine market impact. Local angle: journalists at regional publications care about
                  stories that affect their readers specifically. Expert positioning: releases that offer a
                  spokesperson as a source for ongoing coverage compound over time as that person becomes the
                  go-to quote in their category.
                 <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Claim your market territory — one client per area.</a></p>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed mb-5">
              AI models recognize patterns of authority from consistent press release distributions precisely because
              consistent distributions create consistent editorial coverage. A business that issues well-crafted
              releases quarterly, earns pickup from regional business media, and maintains a steady relationship with
              journalists in their category builds a very different authority profile than one that sends a single
              release and expects results.
             <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Run your free AI Blind Spot Scan.</a></p>

            <p className="text-gray-300 leading-relaxed mb-8">
              The brands winning in AI search visibility have figured out that PR is no longer a vanity channel.
              It is infrastructure. The press coverage they are earning today is directly funding the AI recommendations
              they will receive for the next three to five years.
             <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a free 30-minute strategy call.</a></p>
          </div>

          {/* CTA Inline 3 */}
          <div className="not-prose my-10 p-6 rounded-xl bg-gradient-to-r from-[#F27D24]/10 to-transparent border border-[#F27D24]/20 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex-1">
              <p className="text-white font-semibold mb-1">Want to know if AI platforms are finding your coverage? Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> to get started.</p>
              <p className="text-gray-400 text-sm">We map your full media footprint in your free Blind Spot Report. <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a></p>
            </div>
            <Link href="/blindspot" className="shrink-0 inline-flex items-center gap-2 bg-[#F27D24] text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-[#D96416] transition-colors text-sm">
              Run My Audit
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>

          {/* Section: Brands Left Out */}
          <div id="brands-left-out" className="scroll-mt-20 mt-16">
            <div className="not-prose ae-section-label">The Risk of Inaction</div>

            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-3 mb-5 font-plus-jakarta">
              Why Brands Without PR Are Getting Left Out
            </h2>

            <p className="text-gray-300 leading-relaxed mb-5">
              AI-generated answers are not a neutral list of options. They are curated recommendations. When someone
              asks an AI assistant "who should I hire for estate planning in my city," the AI returns two or three
              names, not a directory. The businesses that appear are the ones with the strongest authority signals.
              The ones that do not appear simply do not exist in that query context.
            </p>

            <p className="text-gray-300 leading-relaxed mb-5">
              Brands not actively engaging media risk being completely omitted from AI-generated results in their
              category. This is not a minor visibility penalty. It is binary exclusion. A potential client asks
              an AI for a recommendation and your business is not mentioned. That client calls your competitor.
            </p>

            <p className="text-gray-300 leading-relaxed mb-5">
              The challenge is that most businesses do not know this is happening. They are not tracking AI
              recommendations in their category. They are not asking the question "what does ChatGPT recommend when
              someone asks for my service?" They are focused on Google rankings, which are increasingly irrelevant
              to buyers who have already moved to AI-first search behavior.
            </p>

            {/* Success Callout */}
            <div className="not-prose ae-callout ae-callout-success my-8">
              <div className="ae-callout-icon">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <div className="ae-callout-title">The Opportunity Window Is Still Open</div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Most businesses in most local and regional markets have not yet begun building AI authority
                  through earned media. The businesses that start now, even modestly, will establish a lead that
                  compounds over the next 18 to 24 months. The window for first-mover advantage in AI visibility
                  is real but it will not remain open indefinitely.
                </p>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed mb-5">
              This is directly related to the broader shift in how consumers research purchases. AI search is
              not replacing Google for all use cases simultaneously. It is replacing it fastest for high-consideration
              decisions: who to hire, who to trust with a major purchase, which professional to use for a significant
              service. These are exactly the queries where business owners most want to appear.
            </p>

            <p className="text-gray-300 leading-relaxed mb-8">
              Understanding this pattern connects to why earned media specifically matters. See how platforms evaluate
              businesses for recommendations in our article on{' '}
              <Link href="/blog/how-online-reviews-shape-ai-recommendations" className="text-[#F27D24] hover:text-orange-400 underline underline-offset-2 transition-colors">
                how online reviews shape AI recommendations
              </Link>
              . The signals work together, but press coverage provides the foundational layer that reviews and
              citations build upon.
            </p>
          </div>

          {/* Section: The AI PR Category */}
          <div id="ai-pr-category" className="scroll-mt-20 mt-16">
            <div className="not-prose ae-section-label">Industry Shift</div>

            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-3 mb-5 font-plus-jakarta">
              The Emerging AI PR Category
            </h2>

            <p className="text-gray-300 leading-relaxed mb-5">
              A new category of agency is emerging that specifically focuses on AI visibility through earned media.
              These AI PR agencies are distinct from traditional PR firms in both their objectives and their methods.
              Traditional PR measures success in impressions, tier-1 placements, and share of voice in trade media.
              AI PR measures success in citation rates: how often does a business appear when a relevant AI query
              is asked?
            </p>

            <p className="text-gray-300 leading-relaxed mb-5">
              The tools available to PR professionals are also evolving rapidly. AI visibility monitoring platforms
              that track which businesses are cited across ChatGPT, Perplexity, Claude, and Google AI are becoming
              standard infrastructure for agencies and in-house marketing teams that take AI visibility seriously.
              These platforms allow PR strategies to be directly tied to AI citation outcomes rather than vanity metrics.
            </p>

            <p className="text-gray-300 leading-relaxed mb-5">
              The integration of PR strategy with answer engine optimization represents the most significant shift in
              how brand authority is built since the rise of content marketing. Content marketing created the insight
              that owned media could build authority at scale. AI visibility strategy adds the recognition that
              earned media is the signal that translates most reliably into AI recommendations.
            </p>

            <p className="text-gray-300 leading-relaxed mb-5">
              This is related to, but distinct from, community-driven signals. In our analysis of{' '}
              <Link href="/blog/reddit-mentions-boost-ai-search-visibility" className="text-[#F27D24] hover:text-orange-400 underline underline-offset-2 transition-colors">
                how Reddit mentions boost AI search visibility
              </Link>
              , we explored how community discussion creates a different type of trust signal. Press coverage
              and community signals work together, with editorial media providing the formal authority layer and
              community discussion providing the social proof layer.
            </p>

            <p className="text-gray-300 leading-relaxed mb-8">
              The businesses best positioned for AI search visibility over the next three to five years will be
              those that treat earned media as a continuous operational priority rather than an occasional campaign.
              Monthly press activity, not quarterly blitzes, is the pattern that builds the most durable AI authority.
            </p>
          </div>

          {/* CTA Inline 4 */}
          <div className="not-prose my-10 p-6 rounded-xl bg-gradient-to-r from-[#F27D24]/10 to-transparent border border-[#F27D24]/20 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex-1">
              <p className="text-white font-semibold mb-1">Wondering where your business stands in AI search today?</p>
              <p className="text-gray-400 text-sm">See which AI platforms recommend you, and which don't, with a free Blind Spot Report.</p>
            </div>
            <Link href="/blindspot" className="shrink-0 inline-flex items-center gap-2 bg-[#F27D24] text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-[#D96416] transition-colors text-sm">
              Get Your Free Report
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>

          {/* Section: What Your Business Can Do Now */}
          <div id="what-to-do" className="scroll-mt-20 mt-16">
            <div className="not-prose ae-section-label">Strategic Direction</div>

            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-3 mb-5 font-plus-jakarta">
              What Your Business Can Do Now
            </h2>

            <p className="text-gray-300 leading-relaxed mb-5">
              The strategic question is not whether press coverage matters for AI visibility. The research is
              consistent on that point. The question is how to generate editorial coverage that builds AI authority
              without a national PR budget or a household-name brand.
            </p>

            <p className="text-gray-300 leading-relaxed mb-5">
              The answer is to think locally and editorially. Most cities and regions have business publications,
              local newspapers with active online archives, chambers of commerce that produce media, and industry
              associations with newsletters and publications. These are all legitimate editorial outlets with
              genuine authority in the AI content graph for local queries.
            </p>

            <p className="text-gray-300 leading-relaxed mb-5">
              Expert positioning is one of the most effective approaches for service businesses. When a journalist
              needs a quote from a CPA, a contractor, a physician, or a financial advisor in your market, your
              goal is to be the name they call. This requires proactive outreach, press kit development, and
              willingness to comment on industry trends. But each resulting quote or mention adds a permanent
              node to your authority graph.
            </p>

            <p className="text-gray-300 leading-relaxed mb-5">
              Content-driven PR is another high-leverage approach. Publishing original research, survey data,
              or analyses that journalists can cite gives publications a reason to reference your business
              without requiring them to write a profile piece. A local plumbing company that publishes the
              average cost of emergency plumbing repairs in their metro area, based on their own job data,
              will earn citations from consumer finance publications, local news, and home improvement media
              for years after the initial release.
            </p>

            <p className="text-gray-300 leading-relaxed mb-5">
              The content-authority connection extends to your blog as well. Understanding how{' '}
              <Link href="/blog/does-having-a-blog-actually-help-ai-recommend-your-business" className="text-[#F27D24] hover:text-orange-400 underline underline-offset-2 transition-colors">
                a blog helps AI recommend your business
              </Link>{' '}
              is part of the same authority-building picture. Owned content and earned media amplify each other:
              journalists reference your blog content, your blog content references your press coverage, and
              AI models see a coherent, multi-source authority signal.
            </p>

            {/* Cheat Sheet */}
            <div className="not-prose ae-cheat-sheet my-10 p-6 rounded-2xl bg-gradient-to-br from-white/[0.03] to-transparent border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-[#F27D24]/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-[#F27D24]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <div>
                  <div className="text-white font-bold font-plus-jakarta">AI-Driven PR: Quick Reference</div>
                  <div className="text-gray-500 text-xs">Actions that build AI authority through earned media</div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { label: 'Target regional business journals first', note: 'Highest authority-to-effort ratio for local businesses' },
                  { label: 'Build an expert spokesperson profile', note: 'Position one person as the go-to quote source in your category' },
                  { label: 'Publish original data', note: 'Survey or job data gives journalists a citation reason beyond profiles' },
                  { label: 'Pitch news value, not promotions', note: 'Hires, partnerships, milestones, community involvement' },
                  { label: 'Maintain quarterly press cadence', note: 'Consistency signals an active, ongoing business presence' },
                  { label: 'Track AI citation rates', note: 'Monitor which platforms mention you and for which queries' },
                  { label: 'Amplify coverage on owned channels', note: 'Your site should reference and link to press coverage' },
                  { label: 'Build journalist relationships proactively', note: 'Introduce yourself before you need coverage, not during' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/5">
                    <div className="w-5 h-5 rounded-full bg-[#F27D24]/20 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-[#F27D24] text-xs font-bold">{i + 1}</span>
                    </div>
                    <div>
                      <div className="text-white text-sm font-medium">{item.label}</div>
                      <div className="text-gray-500 text-xs mt-0.5">{item.note}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed mb-8">
              The businesses that treat PR as an AI visibility investment, rather than a brand awareness exercise,
              are the ones building the authority graphs that will drive recommendations for the next decade. The
              tactical shift is modest. The strategic payoff is significant.
            </p>
          </div>

          {/* CTA Inline 5 */}
          <div className="not-prose my-10 p-6 rounded-xl bg-gradient-to-r from-[#F27D24]/10 to-transparent border border-[#F27D24]/20 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex-1">
              <p className="text-white font-semibold mb-1">Ready to build AI authority through earned media?</p>
              <p className="text-gray-400 text-sm">Start with your free Blind Spot Report to see your current authority footprint.</p>
            </div>
            <Link href="/blindspot" className="shrink-0 inline-flex items-center gap-2 bg-[#F27D24] text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-[#D96416] transition-colors text-sm">
              Start Free Audit
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>

          {/* Author Card */}
          <div className="not-prose ae-author-card my-12 p-6 rounded-2xl bg-white/[0.03] border border-white/10 flex items-start gap-5">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#F27D24]/30 to-[#F27D24]/10 flex items-center justify-center shrink-0">
              <svg className="w-7 h-7 text-[#F27D24]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div>
              <div className="text-white font-bold text-lg font-plus-jakarta mb-1">Justin Borges</div>
              <div className="text-[#F27D24] text-sm font-medium mb-3">Answer Engine Optimization Specialists</div>
              <p className="text-gray-400 text-sm leading-relaxed">
                The Answer Engine is an AEO agency focused exclusively on helping businesses appear in AI-generated
                recommendations. Our team researches AI citation patterns, third-party signal hierarchies, and
                earned media authority to help clients become the businesses AI recommends.
              </p>
            </div>
          </div>

          {/* 3-Tier CTA Block */}
          <div className="not-prose my-16 p-8 rounded-2xl bg-gradient-to-br from-[#F27D24]/10 to-transparent border border-[#F27D24]/20">
            <h3 className="font-plus-jakarta text-2xl font-bold text-white mb-3">Is AI Recommending You or Your Competitors?</h3>
            <p className="text-gray-400 mb-6">
              Most businesses have no idea what AI platforms say about them when a customer asks for a recommendation.
              Your free Blind Spot Report shows exactly where you appear, where you are missing, and what earned media
              signals AI is finding about your business right now.
            </p>
            <Link href="/blindspot" className="inline-flex items-center gap-2 bg-[#F27D24] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#D96416] transition-colors">
              Get Your Free Blind Spot Report
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
            <div className="flex flex-wrap items-center gap-6 mt-6 pt-6 border-t border-[#F27D24]/10">
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

          {/* FAQ Section */}
          <div id="faq" className="scroll-mt-20 mt-16">
            <div className="not-prose ae-section-label">Common Questions</div>

            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-3 mb-8 font-plus-jakarta">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              {[
                {
                  q: 'Why do press mentions matter more than directory listings for AI visibility?',
                  a: 'AI platforms assign trust based on the editorial authority of the source. A regional business journal or trade publication carries credibility that no directory listing can replicate. A single citation in a respected outlet signals to AI models that a third party with editorial standards has verified your business as worth mentioning. Directories are self-submitted. Press coverage is earned.',
                },
                {
                  q: 'What percentage of AI-cited links come from earned media?',
                  a: 'Research into AI citation patterns shows that earned media drives up to 95% of the links cited in AI-generated answers. This includes editorial coverage from news outlets, trade publications, regional business journals, and newswire distributions picked up by major publishers. Paid placements and press releases without editorial pickup account for a very small share of citations.',
                },
                {
                  q: 'Does a press release on a newswire help AI visibility?',
                  a: 'Newswire distribution alone, without editorial pickup, has limited impact. The real value comes when reputable outlets like AP, Reuters, or regional business journals pick up and republish your story with their own editorial voice. AI models weight editorial coverage from these sources significantly more than a standard press release posted to a wire service.',
                },
                {
                  q: 'How quickly does press coverage affect AI recommendations?',
                  a: 'AI models update on varying schedules. Real-time systems like Perplexity may pick up press coverage within days. ChatGPT and Claude update on longer cycles, so coverage may take weeks to months to influence recommendations. The cumulative effect of consistent coverage compounds over time, building an authority graph that becomes difficult for competitors to displace.',
                },
                {
                  q: 'Is paid media coverage useful for AI search visibility?',
                  a: 'Paid placements and sponsored content are almost never cited by AI platforms. AI models are trained to prioritize editorially independent sources. Content written by a publication\'s editorial team carries higher authority than content marked as sponsored or advertorial. The distinction between earned and paid coverage is fundamental to how AI assigns trust.',
                },
                {
                  q: 'Can small businesses get press coverage that helps AI visibility?',
                  a: 'Yes. Small and mid-sized businesses do not need national coverage to benefit. Regional business journals, local newspapers with strong online archives, industry trade publications, and niche podcasts with transcripts all carry authority that AI models recognize. A single feature in your city\'s business journal can outperform years of directory listings for AI citation signals.',
                },
                {
                  q: 'How does AI authority differ from traditional SEO authority?',
                  a: 'Traditional SEO authority is measured primarily through backlinks and domain rating scores. AI authority is broader: it is the accumulation of third-party signals across press mentions, citations, reviews, community discussions, and structured data. AI models do not read domain authority scores. They read the web itself and form their own judgment about which businesses have been independently verified as credible.',
                },
                {
                  q: 'How often should a business be generating press coverage for AI visibility?',
                  a: 'Consistency matters more than volume. A business generating one or two meaningful editorial placements per month builds authority far more effectively than one that runs a PR campaign once a year. Monthly press activity, even if modest, creates the pattern of ongoing validation that AI models associate with active, credible businesses.',
                },
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/10 transition-colors">
                  <h3 className="text-white font-semibold mb-3 font-plus-jakarta leading-snug">{item.q}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Final CTA with pulse glow */}
          <div className="not-prose ae-final-cta mt-20 relative">
            <div className="absolute inset-0 rounded-2xl bg-[#F27D24]/20 blur-2xl animate-pulse" />
            <div className="relative p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-[#F27D24]/15 via-[#0F1117] to-[#0F1117] border border-[#F27D24]/30 text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F27D24]/10 border border-[#F27D24]/20 mb-6">
                <span className="text-[#F27D24] text-xs font-semibold uppercase tracking-wider">Free AI Visibility Audit</span>
              </div>
              <h2 className="font-plus-jakarta text-2xl sm:text-3xl font-bold text-white mb-4">
                Find Out If AI Is Recommending You or Ignoring You
              </h2>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto leading-relaxed">
                Your Blind Spot Report shows exactly how AI platforms like ChatGPT, Perplexity, and Google AI
                evaluate your business right now. Know your authority footprint. Know your gaps. Fix them before
                your competitors do.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/blindspot" className="inline-flex items-center gap-2 bg-[#F27D24] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#D96416] transition-colors shadow-lg shadow-orange-500/20">
                  Get Your Free Blind Spot Report
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
                <a href="tel:+12134442229" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors px-4 py-4">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  (213) 444-2229
                </a>
              </div>
              <p className="text-gray-600 text-xs mt-6">Free. No credit card. Results delivered within 24 hours.</p>
            </div>
          </div>

        </div>
      </main>
    </>
  );
}
