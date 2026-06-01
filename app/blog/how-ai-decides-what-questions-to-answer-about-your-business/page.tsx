import type { Metadata } from 'next';
import Link from 'next/link';

// ISR Configuration
export const revalidate = 86400;
export const dynamic = 'force-static';
export const dynamicParams = true;

// Enhanced Metadata
export const metadata: Metadata = {
  title: 'How AI Decides What Questions to Answer About Your Business',
  description: 'AI uses entity recognition and knowledge graph data to decide which businesses it answers questions about. Learn the signals that determine visibility.',

  openGraph: {
    title: 'How AI Decides What Questions to Answer About Your Business',
    description: 'AI uses entity recognition and knowledge graph data to decide which businesses it answers questions about. Learn the signals that matter.',
    type: 'article',
    publishedTime: '2026-04-14',
    modifiedTime: '2026-04-14',
    authors: ['https://theanswerengine.ai/about'],
    url: 'https://theanswerengine.ai/blog/how-ai-decides-what-questions-to-answer-about-your-business',
    images: [
      {
        url: 'https://theanswerengine.ai/blog/how-ai-decides-what-questions-to-answer-about-your-business.webp',
        width: 1200,
        height: 630,
        alt: 'How AI Decides What Questions to Answer About Your Business',
      }
    ],
    siteName: 'The Answer Engine',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'How AI Decides What Questions to Answer About Your Business',
    description: 'The entity signals and knowledge graph triggers that determine whether AI answers questions about your business.',
    images: ['https://theanswerengine.ai/blog/how-ai-decides-what-questions-to-answer-about-your-business.webp'],
    creator: '@theanswerengine',
  },

  alternates: {
    canonical: 'https://theanswerengine.ai/blog/how-ai-decides-what-questions-to-answer-about-your-business',
  },

  keywords: [
    'AI entity recognition business',
    'how AI decides what to answer',
    'AI knowledge graph local business',
    'AI entity completeness',
    'ChatGPT business visibility signals',
    'answer engine optimization',
    'AI citation threshold',
    'NER named entity recognition business',
    'AEO entity signals',
  ],
};

// JSON-LD Schema
function ComprehensiveSchema() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://theanswerengine.ai/blog/how-ai-decides-what-questions-to-answer-about-your-business#article",
        "headline": "How AI Decides What Questions to Answer About Your Business",
        "description": "AI uses entity recognition and knowledge graph data to decide which businesses it answers questions about. Learn the signals that determine visibility.",
        "image": {
          "@type": "ImageObject",
          "url": "https://theanswerengine.ai/blog/how-ai-decides-what-questions-to-answer-about-your-business.webp",
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
        "datePublished": "2026-04-14T09:00:00-07:00",
        "dateModified": "2026-04-14T09:00:00-07:00",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://theanswerengine.ai/blog/how-ai-decides-what-questions-to-answer-about-your-business"
        },
        "articleSection": "AEO Education",
        "keywords": "AI entity recognition, knowledge graph, entity completeness, answer engine optimization, AI citation signals",
        "wordCount": 3100
      },
      {
        "@type": "FAQPage",
        "@id": "https://theanswerengine.ai/blog/how-ai-decides-what-questions-to-answer-about-your-business#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is entity recognition and why does it matter for AI search?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Named Entity Recognition (NER) is the process AI systems use to identify and classify real-world objects in text, including businesses, people, and locations. For local businesses, it matters because if AI cannot reliably identify your business as a distinct, verified entity, it will not include you in answers even when your services are directly relevant to a user's question."
            }
          },
          {
            "@type": "Question",
            "name": "How many mentions does my business need to appear in AI answers?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Research indicates that the minimum threshold to register as a recognized entity in AI knowledge graphs is approximately 5 mentions from different authoritative sources. Businesses with fewer than this threshold are effectively invisible, even if they have a website and a Google Business Profile."
            }
          },
          {
            "@type": "Question",
            "name": "Does schema markup actually help AI systems find and cite my business?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, significantly. Pages with complete Schema.org markup appear in AI citations at 3 to 5 times the rate of pages with incomplete or absent schema. Schema markup gives AI systems a structured, machine-readable description of your business, which reduces the ambiguity that prevents citation."
            }
          },
          {
            "@type": "Question",
            "name": "What does entity completeness mean for a local business?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Entity completeness means your business is fully defined across all relevant attributes: consistent name, address, and phone across platforms; verified hours; clearly listed services with geographic scope; active reviews; and associations with related entities like industry certifications, neighborhoods, and professional networks. An incomplete entity is one the AI cannot confidently describe, and therefore will not recommend."
            }
          },
          {
            "@type": "Question",
            "name": "Why does AI give answers about my competitors but not about my business?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Your competitors likely have stronger entity signals: more cross-source mentions, consistent NAP data, better structured data implementation, or more complete knowledge graph entries. AI does not dislike your business. It simply has more confidence in businesses it can verify through multiple independent data points. Closing that gap is a matter of systematic entity building, not luck."
            }
          },
          {
            "@type": "Question",
            "name": "How quickly do knowledge graphs update with new business information?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Knowledge graphs used by AI systems like Google's and Bing's update significantly faster than AI model training data. This means changes to your structured listings, Google Business Profile, and schema markup can influence how AI systems perceive your business within weeks, rather than waiting months for a model retrain."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://theanswerengine.ai/blog/how-ai-decides-what-questions-to-answer-about-your-business#breadcrumb",
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
            "name": "How AI Decides What Questions to Answer About Your Business"
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
        "description": "We specialize in Answer Engine Optimization (AEO) for local service businesses, positioning companies to be cited by Google AI Overviews, ChatGPT, Claude, and Perplexity."
      },
      {
        "@type": "WebPage",
        "@id": "https://theanswerengine.ai/blog/how-ai-decides-what-questions-to-answer-about-your-business",
        "url": "https://theanswerengine.ai/blog/how-ai-decides-what-questions-to-answer-about-your-business",
        "name": "How AI Decides What Questions to Answer About Your Business",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://theanswerengine.ai/#website",
          "url": "https://theanswerengine.ai",
          "name": "The Answer Engine"
        },
        "breadcrumb": {
          "@id": "https://theanswerengine.ai/blog/how-ai-decides-what-questions-to-answer-about-your-business#breadcrumb"
        }
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

export default function HowAIDecideswhatQuestionsToAnswer() {
  const publishDate = '2026-04-14';

  return (
    <>
      <ComprehensiveSchema />

      <main className="min-h-screen bg-[#0F1117]">
        <article className="max-w-4xl mx-auto px-6 py-20">

          {/* Breadcrumbs */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">&rsaquo;</span>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <span className="mx-2">&rsaquo;</span>
            <span className="text-gray-400">How AI Decides What Questions to Answer About Your Business</span>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl mb-6 bg-white/[0.04] border border-white/[0.08]">
              <span className="text-sm font-semibold tracking-wider uppercase text-[#F27D24]">AEO Education</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-white leading-tight font-plus-jakarta">
              How AI Decides What Questions to Answer About Your Business
            </h1>

            {/* Featured Image */}
            <div className="mb-8 rounded-xl overflow-hidden border border-white/[0.05]">
              <img
                src="/blog/how-ai-decides-what-questions-to-answer-about-your-business.webp"
                alt="Diagram showing how AI systems use entity recognition and knowledge graphs to decide which businesses to answer questions about"
                className="w-full"
              />
            </div>

            {/* Featured Snippet Block */}
            <div className="bg-gradient-to-br from-white/[0.02] to-white/[0.02] border border-white/[0.08] rounded-xl p-6 mb-8">
              <p className="text-lg text-white leading-relaxed">
                <strong>AI systems do not answer questions about every business that exists. They answer questions about businesses they have recognized, verified, and indexed as trusted entities.</strong> That process relies on Named Entity Recognition, knowledge graph integration, and a minimum threshold of cross-source signals that most small businesses have never heard of, let alone optimized for.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>13 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <time dateTime={publishDate}>Published April 2026</time>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>By Justin Borges</span>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <div className="prose prose-invert prose-lg max-w-none prose-headings:font-plus-jakarta prose-headings:text-white prose-p:text-gray-300 prose-a:text-[#F27D24] prose-a:no-underline hover:prose-a:underline prose-strong:text-white">

            {/* STATS GRID */}
            <div className="ae-stats-grid not-prose">
              <div className="ae-stat-card">
                <div className="ae-stat-emoji">&#x1F4CA;</div>
                <div className="ae-stat-value ae-accent">86%</div>
                <div className="ae-stat-label">of AI citations come from brand-managed sources like websites, listings, and profiles</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-emoji">&#x1F50D;</div>
                <div className="ae-stat-value ae-accent">3-5x</div>
                <div className="ae-stat-label">higher citation rate for businesses with complete Schema.org markup vs. incomplete entities</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-emoji">&#x1F4CD;</div>
                <div className="ae-stat-value ae-accent">5+</div>
                <div className="ae-stat-label">authoritative cross-source mentions required as the minimum AI visibility threshold</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-emoji">&#x1F916;</div>
                <div className="ae-stat-value ae-accent">77%</div>
                <div className="ae-stat-label">of consumers use AI platforms, but only 33% realize they are using AI</div>
              </div>
            </div>

            {/* TABLE OF CONTENTS */}
            <div className="ae-toc not-prose">
              <div className="ae-toc-title">In This Article</div>
              <ul>
                <li><a href="#the-invisible-threshold">The Invisible Threshold</a></li>
                <li><a href="#how-ner-works">How Named Entity Recognition Works</a></li>
                <li><a href="#knowledge-graph-integration">Knowledge Graph Integration</a></li>
                <li><a href="#entity-completeness">What Entity Completeness Actually Means</a></li>
                <li><a href="#minimum-threshold">The Minimum Threshold Checklist</a></li>
                <li><a href="#four-dimensions">The Four Dimensions AI Uses to Evaluate Your Business</a></li>
                <li><a href="#geaf-format">How AI Structures Answers Using GEAF</a></li>
                <li><a href="#visibility-vs-invisible">Visible vs. Invisible: The Comparison</a></li>
                <li><a href="#knowledge-graph-speed">Why Knowledge Graphs Update Faster Than Training Data</a></li>
                <li><a href="#faq">Frequently Asked Questions</a></li>
              </ul>
            </div>

            {/* INTRODUCTION */}
            <span className="ae-section-label" id="the-invisible-threshold">The Core Problem</span>
            <h2>The Invisible Threshold Most Businesses Never Cross</h2>

            <p>When someone asks ChatGPT, Perplexity, or Google AI Mode a question about a service in their area, the AI does not search the internet in real time and pick from whoever shows up. It draws from a pre-built understanding of which businesses exist, what they do, and how trustworthy they are.</p>

            <p>Businesses that have not been properly indexed into that understanding simply do not appear in answers. Not because they lack quality. Not because the AI dislikes them. Because to the AI, they do not yet exist as a recognized entity. Markets fill fast. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Check your territory availability.</a></p>

            <div className="ae-quote not-prose">
              <p>There is a meaningful difference between having a website and being a known entity. Most businesses have the former. Far fewer have achieved the latter. And only entities get cited.</p>
            </div>

            <p>This distinction between &quot;has a website&quot; and &quot;is a recognized entity&quot; is the most important concept in Answer Engine Optimization. Understanding how AI systems decide what counts as a real, trustworthy business is the first step toward becoming one they will confidently recommend. Your first step: <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free AERO Blind Spot Scan.</a></p>

            <p>The mechanics behind this process involve two interlocking systems: Named Entity Recognition (NER) and Knowledge Graph integration. Together, they function as the AI&apos;s gatekeeping layer. Every question about a local business passes through both before an answer is generated.</p>

            {/* CTA 1 */}
            <div className="ae-cta-inline not-prose">
              <p>Not sure whether AI systems recognize your business as a trusted entity? <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Claim your free call</a> before your market fills.</p>
              <Link href="/blindspot">Get Your Free Blind Spot Report &rarr;</Link>
            </div>

            {/* CALLOUT: WARNING */}
            <div className="ae-callout ae-callout-warning not-prose">
              <div className="ae-callout-title">The Stakes: AI Search Is Not Like Google</div>
              <p>Google once showed ten blue links. A business on position 8 still got clicks. AI answers show one or two businesses, sometimes none. Falling below the entity recognition threshold does not mean ranking lower. It means being completely absent from the answer, regardless of how relevant your service actually is.</p>
            </div>

            {/* HOW NER WORKS */}
            <span className="ae-section-label" id="how-ner-works">Layer 1</span>
            <h2>How Named Entity Recognition Works for Local Businesses</h2>

            <p>Named Entity Recognition is the AI process of identifying and classifying real-world objects mentioned in text. When you read the sentence &quot;Joe&apos;s Plumbing on Main Street fixed my leak,&quot; a human instantly understands that Joe&apos;s Plumbing is a business, Main Street is a location, and the speaker is a customer. NER teaches AI systems to make the same distinctions automatically. Reach out: <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>

            <p>For local businesses, NER performs a specific function: it determines whether your business name, when mentioned across the web, consistently maps to a single, clearly defined entity. A business called &quot;Sunrise Dental&quot; might appear in dozens of reviews, listings, and articles. NER&apos;s job is to recognize that all those mentions refer to the same practice, located at a specific address, offering specific services.</p>

            {/* DECISION MATRIX */}
            <table className="ae-decision-matrix not-prose">
              <thead>
                <tr>
                  <th>NER Signal</th>
                  <th>Strong Recognition</th>
                  <th>Weak Recognition</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Business Name Consistency</strong></td>
                  <td>Identical across all sources</td>
                  <td>Variations: &quot;ABC HVAC&quot; vs &quot;ABC Heating &amp; Cooling&quot; vs &quot;ABC H&amp;C LLC&quot;</td>
                </tr>
                <tr>
                  <td><strong>Address Standardization</strong></td>
                  <td>USPS format, identical everywhere</td>
                  <td>&quot;Suite 4&quot; vs &quot;Ste. 4&quot; vs &quot;#4&quot; across listings</td>
                </tr>
                <tr>
                  <td><strong>Phone Number</strong></td>
                  <td>One number, universally consistent</td>
                  <td>Old number still live on directories, tracking numbers creating variations</td>
                </tr>
                <tr>
                  <td><strong>Cross-Source Volume</strong></td>
                  <td>5+ independent mentions from authoritative sources</td>
                  <td>2-3 mentions, all self-published</td>
                </tr>
                <tr>
                  <td><strong>Service Category Clarity</strong></td>
                  <td>Specific services named and categorized</td>
                  <td>Generic &quot;we do everything&quot; language</td>
                </tr>
              </tbody>
            </table>

            <p>When NER confidence is low, AI systems face a choice: recommend a business they are uncertain about and risk a wrong answer, or skip that entity entirely. They almost always skip. The risk to the AI platform&apos;s credibility is too high to recommend a business it cannot confidently verify. Call us at <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> today.</p>

            {/* CTA 2 */}
            <div className="ae-cta-inline not-prose">
              <p>Inconsistent listings could be suppressing your entity recognition score right now.</p>
              <Link href="/blindspot">Check Your Entity Consistency &rarr;</Link>
            </div>

            {/* KNOWLEDGE GRAPH INTEGRATION */}
            <span className="ae-section-label" id="knowledge-graph-integration">Layer 2</span>
            <h2>Knowledge Graph Integration: The AI&apos;s Internal Business Directory</h2>

            <p>Once Named Entity Recognition has identified your business as a coherent entity, the second layer takes over: knowledge graph integration. Knowledge graphs are structured databases that store facts about entities and their relationships. Google&apos;s Knowledge Graph, for example, contains information about millions of businesses, organizations, people, and places. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Lock in your exclusive territory now.</a></p>

            <p>AI systems like ChatGPT, Perplexity, and Google AI Mode do not just read your website and draw conclusions. They cross-reference what they find against knowledge graphs that have already been built, validated, and structured. A business with a strong knowledge graph entry gets cited. A business that is absent from knowledge graphs gets ignored.</p>

            <div className="ae-callout ae-callout-info not-prose">
              <div className="ae-callout-title">What Lives Inside a Knowledge Graph Entry</div>
              <p>A well-built knowledge graph entry for a local business contains: the canonical business name, primary address, phone number, hours of operation, service categories, geographic service area, founding date, key personnel, professional certifications, review aggregate scores, and relationships to related entities (industry associations, neighborhoods, competitor categories). Every attribute you leave blank is a gap the AI cannot fill, reducing confidence in every answer it might give about you. <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Get your free AI readiness report.</a></p>
            </div>

            <p>For local businesses, the most actionable knowledge graph insight is this: knowledge graphs update faster than AI training data. When you update your Google Business Profile, add schema markup to your website, or claim listings on authoritative directories, those changes flow into knowledge graphs within weeks, not months. That makes entity building one of the fastest levers available for improving AI visibility.</p>

            <p>Platforms like Google, Bing, Apple Maps, and Yelp all feed into the broader web of structured data that AI systems draw from. Each platform where your business is completely and accurately represented is another node in your knowledge graph presence. Ready to act? <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a free strategy session.</a></p>

            {/* CTA 3 */}
            <div className="ae-cta-inline not-prose">
              <p>Wondering what your knowledge graph entry actually looks like to AI? We can show you.</p>
              <Link href="/blindspot">Run Your Free Blind Spot Report &rarr;</Link>
            </div>

            {/* INTERNAL LINK */}
            <div className="ae-cta-inline not-prose">
              <p>Want to understand how AI crawlers read your website in the first place? Drop us a line at <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>
              <Link href="/blog/what-your-website-looks-like-to-an-ai-crawler">What Your Website Looks Like to an AI Crawler &rarr;</Link>
            </div>

            {/* ENTITY COMPLETENESS */}
            <span className="ae-section-label" id="entity-completeness">The Standard</span>
            <h2>What Entity Completeness Actually Means</h2>

            <p>The term &quot;entity completeness&quot; sounds technical, but the concept is straightforward: a complete entity is one the AI can fully describe from multiple independent sources. If someone asks an AI to explain what your business does, where it operates, how long it has been around, what customers say about it, and who runs it, can the AI answer all of those questions with confidence?</p>

            <p>Most businesses score well on one or two dimensions and poorly on the rest. A restaurant might have hundreds of Yelp reviews but no schema markup and inconsistent hours across platforms. A law firm might have excellent website content but zero third-party mentions outside self-published directories. Speak to an AEO specialist: <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.</p>

            {/* PROS/CONS */}
            <div className="not-prose grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-white/[0.03] border border-green-500/20 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-green-400 text-lg">&#x2713;</span>
                  <h3 className="font-plus-jakarta font-bold text-white text-base">Entity Complete Business</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start gap-2"><span className="text-green-400 mt-0.5">&#x2713;</span> Name, address, phone identical across 10+ platforms</li>
                  <li className="flex items-start gap-2"><span className="text-green-400 mt-0.5">&#x2713;</span> Schema markup covering business type, services, and location</li>
                  <li className="flex items-start gap-2"><span className="text-green-400 mt-0.5">&#x2713;</span> Active reviews on Google, Yelp, and industry platforms</li>
                  <li className="flex items-start gap-2"><span className="text-green-400 mt-0.5">&#x2713;</span> 5+ independent mentions from news, associations, or directories</li>
                  <li className="flex items-start gap-2"><span className="text-green-400 mt-0.5">&#x2713;</span> Google Business Profile fully complete and active</li>
                  <li className="flex items-start gap-2"><span className="text-green-400 mt-0.5">&#x2713;</span> FAQ content answering common service questions</li>
                  <li className="flex items-start gap-2"><span className="text-green-400 mt-0.5">&#x2713;</span> Named personnel with verifiable credentials</li>
                </ul>
              </div>
              <div className="bg-white/[0.03] border border-red-500/20 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-red-400 text-lg">&#x2717;</span>
                  <h3 className="font-plus-jakarta font-bold text-white text-base">Entity Incomplete Business</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">&#x2717;</span> Different business name formats across directories</li>
                  <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">&#x2717;</span> Schema markup absent or only basic Organization type</li>
                  <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">&#x2717;</span> Reviews concentrated on one platform only</li>
                  <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">&#x2717;</span> Mentions only from self-published sources</li>
                  <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">&#x2717;</span> Google Business Profile with missing hours or categories</li>
                  <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">&#x2717;</span> Service pages with vague, marketing-style descriptions</li>
                  <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">&#x2717;</span> Anonymous &quot;About Us&quot; page with no named people</li>
                </ul>
              </div>
            </div>

            <p>The difference between these two profiles is not the quality of the business. It is the quality of the data structure surrounding the business. An entity-complete business gives AI systems everything they need to answer confidently. An entity-incomplete business forces the AI to guess, and AI systems do not guess when they can simply cite someone else.</p>

            {/* CTA 4 */}
            <div className="ae-cta-inline not-prose">
              <p>Find out which column your business falls into today. One client per city. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">See if your market is available.</a></p>
              <Link href="/blindspot">Get Your Free AI Visibility Assessment &rarr;</Link>
            </div>

            {/* MINIMUM THRESHOLD CHECKLIST */}
            <span className="ae-section-label" id="minimum-threshold">The Floor</span>
            <h2>The Minimum Threshold: What You Need Just to Be Considered</h2>

            <p>Before optimization, there is qualification. AI systems have an implicit minimum threshold below which a business simply does not get considered for citations, regardless of what questions are being asked. Understanding this floor is critical before investing in any higher-level AEO work.</p>

            {/* CHEAT SHEET */}
            <div className="ae-cheat-sheet not-prose">
              <div className="ae-cheat-sheet-title">Minimum Entity Threshold Checklist</div>
              <div className="ae-cheat-sheet-grid">
                <div className="ae-cheat-sheet-item">
                  <div className="ae-cheat-sheet-label">5+ Cross-Source Mentions</div>
                  <div className="ae-cheat-sheet-desc">Your business must appear on at least 5 independent, authoritative sources. Self-published content does not count toward this threshold.</div>
                </div>
                <div className="ae-cheat-sheet-item">
                  <div className="ae-cheat-sheet-label">NAP Consistency on 3+ Platforms</div>
                  <div className="ae-cheat-sheet-desc">Name, Address, Phone must be identical on Google Business Profile, your website, and at least one major directory such as Yelp or Bing Places.</div>
                </div>
                <div className="ae-cheat-sheet-item">
                  <div className="ae-cheat-sheet-label">Basic Schema.org Markup</div>
                  <div className="ae-cheat-sheet-desc">At minimum, LocalBusiness schema with name, address, telephone, and openingHours deployed on your website.</div>
                </div>
                <div className="ae-cheat-sheet-item">
                  <div className="ae-cheat-sheet-label">Google Business Profile Mostly Complete</div>
                  <div className="ae-cheat-sheet-desc">Business category, hours, services, photos, and a recent post all present. An incomplete GBP weakens your knowledge graph entry significantly.</div>
                </div>
                <div className="ae-cheat-sheet-item">
                  <div className="ae-cheat-sheet-label">Active Review Presence</div>
                  <div className="ae-cheat-sheet-desc">At least 10 reviews with a rating above 4.0, and at least one review received in the last 60 days to signal the business is currently operating.</div>
                </div>
                <div className="ae-cheat-sheet-item">
                  <div className="ae-cheat-sheet-label">Crawlable, Readable Website</div>
                  <div className="ae-cheat-sheet-desc">Your site must load under 3 seconds, have no crawl-blocking errors, and present service information in plain HTML text, not locked in JavaScript or images.</div>
                </div>
              </div>
            </div>

            <p>Businesses that do not meet this minimum threshold are operating in a pre-citation state. They may have great content, excellent reviews, and a beautiful website, but until these foundational signals are in place, AI systems will not have enough confidence to include them in answers. Check where you stand: <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free Blind Spot Scan.</a></p>

            {/* CTA 5 */}
            <div className="ae-cta-inline not-prose">
              <p>Unsure whether your business passes the minimum threshold? We will audit it for free.</p>
              <Link href="/blindspot">Get Your Free Blind Spot Report &rarr;</Link>
            </div>

            {/* INTERNAL LINK */}
            <div className="ae-cta-inline not-prose">
              <p>See exactly what schema markup does for your AI citation rate. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Schedule a free 30-min call.</a></p>
              <Link href="/blog/does-schema-markup-help-ai-search">Does Schema Markup Help AI Search? &rarr;</Link>
            </div>

            {/* FOUR DIMENSIONS */}
            <span className="ae-section-label" id="four-dimensions">The Framework</span>
            <h2>The Four Dimensions AI Uses to Evaluate Your Business</h2>

            <p>Beyond the minimum threshold, AI systems evaluate businesses across four interconnected dimensions when deciding whether to answer questions about them. These dimensions are not independent. A high score on one partially compensates for gaps in another, but a very low score on any single dimension can suppress citations even when the others are strong.</p>

            {/* BAR CHART VISUAL */}
            <div className="not-prose my-8 bg-white/[0.03] border border-white/[0.08] rounded-xl p-6">
              <h3 className="font-plus-jakarta font-bold text-white text-lg mb-6">Citation Sources by Authority Level</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm text-gray-400 mb-1">
                    <span>Brand-Managed Sources (website, listings, profiles)</span>
                    <span className="text-[#F27D24] font-semibold">86%</span>
                  </div>
                  <div className="h-3 bg-white/[0.06] rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#F27D24] to-[#FF8C38] rounded-full" style={{ width: '86%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm text-gray-400 mb-1">
                    <span>Third-Party Directories (Yelp, BBB, industry directories)</span>
                    <span className="text-[#F27D24] font-semibold">72%</span>
                  </div>
                  <div className="h-3 bg-white/[0.06] rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#F27D24] to-[#FF8C38] rounded-full" style={{ width: '72%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm text-gray-400 mb-1">
                    <span>Review Platforms (Google, Yelp, Trustpilot)</span>
                    <span className="text-[#F27D24] font-semibold">61%</span>
                  </div>
                  <div className="h-3 bg-white/[0.06] rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#F27D24] to-[#FF8C38] rounded-full" style={{ width: '61%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm text-gray-400 mb-1">
                    <span>Editorial / News Coverage</span>
                    <span className="text-[#F27D24] font-semibold">48%</span>
                  </div>
                  <div className="h-3 bg-white/[0.06] rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#F27D24] to-[#FF8C38] rounded-full" style={{ width: '48%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm text-gray-400 mb-1">
                    <span>Social Media Profiles (Facebook, LinkedIn)</span>
                    <span className="text-[#F27D24] font-semibold">34%</span>
                  </div>
                  <div className="h-3 bg-white/[0.06] rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#F27D24] to-[#FF8C38] rounded-full" style={{ width: '34%' }}></div>
                  </div>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-4">Citation frequency by source type based on Yext research 2026. Businesses appear across multiple source categories. Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> for a custom strategy.</p>
            </div>

            <p>Understanding why brand-managed sources dominate is important: it means the single biggest lever for AI visibility is what you control directly. Your website, your Google Business Profile, your Bing Places listing, your schema markup. The AI is telling you exactly where to focus.</p>

            <p>The four dimensions that determine whether those sources translate into citations are as follows. Questions? Call <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.</p>

            <p><strong>Content Clarity</strong> is how directly and specifically your content answers the questions users are likely to ask. A plumbing company whose website answers &quot;How much does it cost to replace a water heater in Phoenix?&quot; will consistently outperform one that only describes services in general terms. AI systems prefer content that mirrors the structure of a real question and answer.</p>

            <p><strong>Trust and Authority</strong> measures the number and quality of external validations. This includes review volume and recency, mentions in authoritative third-party sources, professional certifications displayed and verifiable, and association with recognized industry organizations. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Secure your territory before a competitor does.</a></p>

            <p><strong>Topical Depth</strong> reflects how comprehensively your content covers the subject matter relevant to your business category. A single &quot;services&quot; page does not signal topical depth. A business with service pages, FAQ content, location pages, and educational articles covering the full range of questions in its category signals to AI that it is a genuine authority.</p>

            <p><strong>Technical Implementation</strong> covers schema markup completeness, website crawlability, page speed, and structured data accuracy. Even the best content can be suppressed by technical barriers that prevent AI systems from reading and indexing it correctly. <a href="https://theanswerengine.ai/blindspot" className="cta-inline">See your AI visibility score — free.</a></p>

            {/* CTA 6 */}
            <div className="ae-cta-inline not-prose">
              <p>Which of these four dimensions is your weakest link? Our audit identifies it.</p>
              <Link href="/blindspot">Get Your Free Visibility Audit &rarr;</Link>
            </div>

            {/* CALLOUT: SUCCESS */}
            <div className="ae-callout ae-callout-success not-prose">
              <div className="ae-callout-title">The Good News for Small Businesses</div>
              <p>AI systems do not weight business size, ad spend, or years in operation as primary signals. A local business that is two years old but entity-complete, technically sound, and topically comprehensive can outperform a twenty-year-old competitor that has never optimized for these signals. The playing field is genuinely more level than it was in traditional search. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book your free consultation here.</a></p>
            </div>

            {/* GEAF FORMAT */}
            <span className="ae-section-label" id="geaf-format">Answer Structure</span>
            <h2>How AI Structures Answers About Local Businesses: The GEAF Format</h2>

            <p>Understanding how AI decides <em>whether</em> to answer a question about your business is important. Understanding how it <em>structures</em> that answer tells you exactly what content to create to be included. AI systems generally follow what we call the GEAF format when answering business-related questions.</p>

            {/* TIMELINE */}
            <div className="ae-timeline not-prose">
              <div className="ae-timeline-item">
                <div className="ae-timeline-marker"></div>
                <div className="ae-timeline-content">
                  <div className="ae-timeline-title">Q: Question Acknowledgment</div>
                  <p>The AI restates or acknowledges the user&apos;s question to establish context. &quot;You are looking for a reliable HVAC company in the Denver area...&quot; Businesses whose content directly mirrors common question phrasings are more likely to be surfaced here. Contact us at <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>
                </div>
              </div>
              <div className="ae-timeline-item">
                <div className="ae-timeline-marker"></div>
                <div className="ae-timeline-content">
                  <div className="ae-timeline-title">D: Definition and Context</div>
                  <p>The AI provides background context that establishes what makes a good answer to this type of question. This is where entity authority matters: businesses that have been mentioned in educational content, not just promotional listings, score higher.</p>
                </div>
              </div>
              <div className="ae-timeline-item">
                <div className="ae-timeline-marker"></div>
                <div className="ae-timeline-content">
                  <div className="ae-timeline-title">R: Relevance Criteria</div>
                  <p>The AI identifies which businesses are relevant to the specific query. This is where geographic signals, service category clarity, and knowledge graph presence all converge. Businesses with strong entity recognition get past this filter. Others do not. Reach us at <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.</p>
                </div>
              </div>
              <div className="ae-timeline-item">
                <div className="ae-timeline-marker"></div>
                <div className="ae-timeline-content">
                  <div className="ae-timeline-title">S: Specific Recommendations</div>
                  <p>The AI selects which businesses to name. At this stage, the decision is essentially made by the data quality of each candidate entity. The most complete, consistent, and validated businesses get recommended. The rest get nothing.</p>
                </div>
              </div>
              <div className="ae-timeline-item">
                <div className="ae-timeline-marker"></div>
                <div className="ae-timeline-content">
                  <div className="ae-timeline-title">L: Local Context</div>
                  <p>The AI adds geographic specificity: neighborhood mentions, proximity signals, service area clarity. Businesses with explicit local content, such as area-specific pages or location-based FAQ answers, score higher in this dimension. We work with one business per market. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Check if yours is still open.</a></p>
                </div>
              </div>
              <div className="ae-timeline-item">
                <div className="ae-timeline-marker"></div>
                <div className="ae-timeline-content">
                  <div className="ae-timeline-title">D: Data Points</div>
                  <p>The AI often cites specific supporting data: star ratings, review counts, years in business, certifications. Businesses that make this data easily accessible and structured, rather than buried in paragraphs, are cited more consistently.</p>
                </div>
              </div>
            </div>

            <p>Every stage of the GEAF format maps to a specific type of content or data signal. A business optimized for all six stages will appear more frequently and more prominently than one that only addresses two or three. Find your gaps with a <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free AERO scan.</a></p>

            {/* CTA 7 */}
            <div className="ae-cta-inline not-prose">
              <p>Learn how to structure content so AI cites your business at every stage.</p>
              <Link href="/blog/why-ai-never-mentions-your-business-by-name">Why AI Never Mentions Your Business by Name &rarr;</Link>
            </div>

            {/* VISIBLE VS INVISIBLE */}
            <span className="ae-section-label" id="visibility-vs-invisible">Side by Side</span>
            <h2>Visible Business vs. Invisible Business: What AI Actually Sees</h2>

            <p>The following comparison uses a realistic scenario: two HVAC companies operating in the same metro area. Both have been in business for over eight years. Both maintain professional websites. A potential customer asks an AI assistant for a recommendation. One business gets cited. One does not. Here is the data the AI sees. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Schedule a free call</a> to see where you stand.</p>

            <table className="ae-comparison-table not-prose">
              <thead>
                <tr>
                  <th>AI Evaluation Point</th>
                  <th>Visible Business (Cited)</th>
                  <th>Invisible Business (Skipped)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>NAP Consistency</strong></td>
                  <td className="text-green-400">Identical across 35+ platforms and directories</td>
                  <td className="text-red-400">Old address on 12 directories, tracking number on website differs from GBP</td>
                </tr>
                <tr>
                  <td><strong>Schema Markup</strong></td>
                  <td className="text-green-400">LocalBusiness + Service + FAQ + Review + OpeningHours</td>
                  <td className="text-red-400">No schema markup deployed</td>
                </tr>
                <tr>
                  <td><strong>Cross-Source Mentions</strong></td>
                  <td className="text-green-400">14 independent mentions across news, associations, and directories</td>
                  <td className="text-red-400">3 mentions, all self-created directory submissions</td>
                </tr>
                <tr>
                  <td><strong>Review Profile</strong></td>
                  <td className="text-green-400">312 Google reviews, 4.9 avg, 8 reviews last 30 days</td>
                  <td className="text-red-400">67 reviews, 4.7 avg, last review 4 months ago</td>
                </tr>
                <tr>
                  <td><strong>Content Depth</strong></td>
                  <td className="text-green-400">18 service pages, 40+ FAQ answers, local area guides</td>
                  <td className="text-red-400">1 services page, no FAQ, generic &quot;about&quot; copy</td>
                </tr>
                <tr>
                  <td><strong>Google Business Profile</strong></td>
                  <td className="text-green-400">All fields complete, 60 photos, weekly posts, Q&amp;A active</td>
                  <td className="text-red-400">Basic fields only, 4 photos, last post 7 months ago</td>
                </tr>
                <tr>
                  <td><strong>Technical Health</strong></td>
                  <td className="text-green-400">1.4s load time, full crawl access, no errors</td>
                  <td className="text-red-400">4.2s load time, 14 crawl errors, key pages blocked in robots.txt</td>
                </tr>
                <tr>
                  <td><strong>AI Verdict</strong></td>
                  <td className="text-green-400 font-semibold">Recognized entity: cited confidently</td>
                  <td className="text-red-400 font-semibold">Entity below confidence threshold: omitted from answer</td>
                </tr>
              </tbody>
            </table>

            <p>The invisible business is not a bad business. Its 4.7-star rating is excellent. Its eight years of operation reflects genuine experience. But none of that matters once it falls below the AI&apos;s confidence threshold. The AI cannot verify enough about it to risk citing it.</p>

            {/* CTA 8 */}
            <div className="ae-cta-inline not-prose">
              <p>Which column describes your business right now? We can tell you in 48 hours. Send your questions to <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>
              <Link href="/blindspot">Get Your Free Blind Spot Report &rarr;</Link>
            </div>

            {/* CALLOUT: ORANGE */}
            <div className="ae-callout ae-callout-orange not-prose">
              <div className="ae-callout-title">The 68% Problem</div>
              <p>68% of U.S. small businesses now use AI tools regularly. But using AI is not the same as being found by AI. Most of those businesses are using ChatGPT to write emails while being completely invisible when customers use that same ChatGPT to find services. Visibility requires a different kind of work than usage.</p>
            </div>

            {/* KNOWLEDGE GRAPH SPEED */}
            <span className="ae-section-label" id="knowledge-graph-speed">The Opportunity</span>
            <h2>Why Knowledge Graphs Update Faster Than Training Data</h2>

            <p>One of the most actionable insights in AI search optimization is the speed differential between knowledge graph updates and model training cycles. Many business owners assume that AI answers are baked into a model and cannot be changed until that model is retrained, which can take months or years. This is partially true but misses an important exception. Call <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> for a free consultation.</p>

            <p>AI systems like Google AI Mode and Bing AI do not rely exclusively on their training data for local business information. They integrate in real time, or near real time, with live knowledge graphs, including Google&apos;s own Knowledge Graph, which is updated continuously. This means changes you make to your entity signals can influence AI answers far faster than traditional SEO changes influenced search rankings.</p>

            <div className="ae-callout ae-callout-info not-prose">
              <div className="ae-callout-title">What Updates Fastest in Knowledge Graphs</div>
              <p>Google Business Profile data flows into Google&apos;s Knowledge Graph within days. Schema markup changes are typically crawled and processed within one to two weeks. New directory listings on authoritative platforms begin influencing cross-source mention counts within four to six weeks. Review platform updates, including new ratings and responses, are among the fastest-updating entity signals available. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Claim your market territory — one client per area.</a></p>
            </div>

            <p>This creates a genuine window of opportunity. While AI model training data from two years ago may underrepresent your business, the live knowledge graph layer is writable right now. Businesses that act on entity completeness today will appear in AI answers before competitors who are waiting for the next model cycle.</p>

            <p>The window is not permanent. As more businesses become entity-aware and begin optimizing these signals, the average entity quality in every local market will rise. The businesses that optimize first will have compounding citation histories that make them progressively harder to displace. <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Run your free AI Blind Spot Scan.</a></p>

            {/* CTA 9 */}
            <div className="ae-cta-inline not-prose">
              <p>The knowledge graph window is open now. Find out where to start.</p>
              <Link href="/blindspot">Get Your Free Blind Spot Report &rarr;</Link>
            </div>

            {/* INTERNAL LINK */}
            <div className="ae-cta-inline not-prose">
              <p>See why your AI answers may be based on outdated training data. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a free 30-minute strategy call.</a></p>
              <Link href="/blog/why-ai-never-mentions-your-business-by-name">Why AI Never Mentions Your Business by Name &rarr;</Link>
            </div>

            {/* CALLOUT: SUCCESS */}
            <div className="ae-callout ae-callout-success not-prose">
              <div className="ae-callout-title">The Core Takeaway</div>
              <p>AI does not decide what questions to answer based on who paid the most or who has been around the longest. It decides based on which businesses it can identify, verify, and trust through cross-source data. Named Entity Recognition, knowledge graph presence, and entity completeness are the actual ranking factors for AI search. Every one of them is within your control.</p>
            </div>

            {/* CTA 10 */}
            <div className="ae-cta-inline not-prose">
              <p>Understand the full picture of how AI evaluates your business credibility. Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> to get started.</p>
              <Link href="/blog/does-schema-markup-help-ai-search">Does Schema Markup Help AI Search? &rarr;</Link>
            </div>

            {/* CTA 11 */}
            <div className="ae-cta-inline not-prose">
              <p>See exactly what an AI crawler reads when it visits your website.</p>
              <Link href="/blog/what-your-website-looks-like-to-an-ai-crawler">What Your Website Looks Like to an AI Crawler &rarr;</Link>
            </div>

            {/* AUTHOR CARD */}
            <div className="ae-author-card">
              <img
                src="/justin-borges.webp"
                alt="Justin Borges, Founder of The Answer Engine"
                style={{ width: 64, height: 64, borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }}
              />
              <div>
                <div className="ae-author-name" style={{ fontWeight: 600 }}>Justin Borges</div>
                <div className="ae-author-role" style={{ fontWeight: 400 }}>Founder, The Answer Engine</div>
                <p style={{ marginTop: 8, fontSize: '0.875rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.6 }}>Justin Borges founded The Answer Engine in 2025 after 13+ years in real estate, $200M+ in production, and discovering that AI search rankings now decide who gets cited as the answer. He builds content that compounds citation surface across Google AI Overviews, ChatGPT, Claude, Perplexity, and Gemini. <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a></p>
              </div>
            </div>

            {/* CTA 12 */}
            <div className="ae-cta-inline not-prose">
              <p>Want to see how we build entity completeness for businesses like yours?</p>
              <Link href="/blindspot">Explore Our Approach &rarr;</Link>
            </div>

            {/* 3-TIER CTA BLOCK */}
            <div className="not-prose my-16 p-8 rounded-2xl bg-gradient-to-br from-[#F27D24]/10 to-transparent border border-[#F27D24]/20">
              <h3 className="font-plus-jakarta text-2xl font-bold text-white mb-3">Is Your Business Passing AI&apos;s Entity Check?</h3>
              <p className="text-gray-400 mb-6">Most businesses are invisible to AI not because their service is bad, but because their data structure is incomplete. Find out where you stand with a free Blind Spot Report.</p>
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

            {/* CTA 13 */}
            <div className="ae-cta-inline not-prose">
              <p>Still have questions? Email us and we will respond with real answers, no pitch.</p>
              <a href="mailto:support@theanswerengine.ai">Ask Us Anything at support@theanswerengine.ai &rarr;</a>
            </div>

            {/* FINAL CTA */}
            <div className="ae-final-cta not-prose">
              <h3>AI Is Answering Questions About Your Market Right Now</h3>
              <p>Every hour someone asks an AI assistant about a service in your area, that AI is deciding whether to mention you or your competitor. The decision is based on entity signals you can control. The question is whether you are going to control them.</p>
              <Link href="/blindspot" className="ae-final-cta-pulse">Get Your Free Blind Spot Report &rarr;</Link>
              <div className="flex flex-wrap items-center justify-center gap-6 mt-6 pt-6 border-t border-[#F27D24]/10">
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

            {/* CTA 14 */}
            <div className="ae-cta-inline not-prose">
              <p>Learn what your website actually looks like to AI right now.</p>
              <Link href="/blog/what-your-website-looks-like-to-an-ai-crawler">See What AI Sees on Your Website &rarr;</Link>
            </div>

            {/* CTA 15 */}
            <div className="ae-cta-inline not-prose">
              <p>Curious why AI gives wrong or missing information about your business?</p>
              <Link href="/blog/why-ai-never-mentions-your-business-by-name">Why AI Never Mentions Your Business by Name &rarr;</Link>
            </div>

            {/* FAQ SECTION */}
            <span className="ae-section-label" id="faq">FAQ</span>
            <h2>Frequently Asked Questions</h2>

            <div className="space-y-6 not-prose">
              <div className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3 font-plus-jakarta">What is entity recognition and why does it matter for AI search?</h3>
                <p className="text-gray-300 leading-relaxed">Named Entity Recognition (NER) is the process AI systems use to identify and classify real-world objects in text, including businesses, people, and locations. For local businesses, it matters because if AI cannot reliably identify your business as a distinct, verified entity, it will not include you in answers even when your services are directly relevant to what a user is asking.</p>
              </div>

              <div className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3 font-plus-jakarta">How many mentions does my business need to appear in AI answers?</h3>
                <p className="text-gray-300 leading-relaxed">Research indicates the minimum threshold to register as a recognized entity in AI knowledge graphs is approximately 5 mentions from different authoritative sources. Businesses with fewer than this threshold are effectively invisible, even if they have a website and a Google Business Profile. Those mentions need to come from independent sources, not directories you submitted yourself.</p>
              </div>

              <div className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3 font-plus-jakarta">Does schema markup actually help AI systems find and cite my business?</h3>
                <p className="text-gray-300 leading-relaxed">Yes, significantly. Pages with complete Schema.org markup appear in AI citations at 3 to 5 times the rate of pages with incomplete or absent schema. Schema markup gives AI systems a structured, machine-readable description of your business, which reduces the ambiguity that prevents citation. LocalBusiness schema with services, hours, and location data is the minimum starting point.</p>
              </div>

              <div className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3 font-plus-jakarta">What does entity completeness mean for a local business?</h3>
                <p className="text-gray-300 leading-relaxed">Entity completeness means your business is fully defined across all relevant attributes: consistent name, address, and phone across platforms; verified hours; clearly listed services with geographic scope; active reviews; and associations with related entities like industry certifications, neighborhoods, and professional networks. An incomplete entity is one the AI cannot confidently describe, and it will not recommend a business it cannot describe.</p>
              </div>

              <div className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3 font-plus-jakarta">Why does AI give answers about my competitors but not my business?</h3>
                <p className="text-gray-300 leading-relaxed">Your competitors likely have stronger entity signals: more cross-source mentions, consistent NAP data, better structured data implementation, or more complete knowledge graph entries. AI does not dislike your business. It simply has more confidence in businesses it can verify through multiple independent data points. Closing that gap is a matter of systematic entity building, not luck or ad spend.</p>
              </div>

              <div className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3 font-plus-jakarta">How quickly do knowledge graphs update with new business information?</h3>
                <p className="text-gray-300 leading-relaxed">Knowledge graphs used by AI systems like Google&apos;s and Bing&apos;s update significantly faster than AI model training data. Google Business Profile changes typically flow into the knowledge graph within days. Schema markup updates are processed within one to two weeks. This means changes you make now can influence how AI systems cite your business far sooner than most business owners expect.</p>
              </div>
            </div>

          </div>
        </article>
      </main>
    </>
  );
}
