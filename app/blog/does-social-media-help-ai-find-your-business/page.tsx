import type { Metadata } from 'next'
import Link from 'next/link'

export const dynamicParams = true

const title = 'Does Social Media Help AI Find Your Business'
const description = 'Social media does not directly drive AEO citations. The Answer Engine reveals what AI platforms actually use to find businesses. Free Blindspot Scan.'
const slug = 'does-social-media-help-ai-find-your-business'
const publishDate = '2026-06-07'
const lastModified = '2026-06-07'

export const metadata: Metadata = {
  title: `${title} | The Answer Engine`,
  description,
  keywords: 'social media AI visibility, social signals AI search, LinkedIn AI citations, YouTube AEO, social media AI ranking, AI brand mentions, Answer Engine Optimization, AEO social strategy',
  openGraph: {
    title,
    description,
    type: 'article',
    publishedTime: publishDate,
    modifiedTime: lastModified,
    authors: ['https://theanswerengine.ai/about#justin-borges'],
    url: `https://theanswerengine.ai/blog/${slug}`,
    images: [{ url: `https://theanswerengine.ai/blog/${slug}.webp`, width: 1200, height: 630, alt: title }],
    siteName: 'The Answer Engine',
  },
  twitter: { card: 'summary_large_image', title, description, images: [`https://theanswerengine.ai/blog/${slug}.webp`] },
  alternates: { canonical: `https://theanswerengine.ai/blog/${slug}` },
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
      dateModified: lastModified,
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
        knowsAbout: ['Answer Engine Optimization', 'AI Search', 'Social Media Signals', 'LLM Citation', 'AEO'],
        url: 'https://theanswerengine.ai/about',
        image: 'https://theanswerengine.ai/justin-borges.webp',
        sameAs: ['https://linkedin.com/in/justinborges'],
      },
      publisher: {
        '@type': 'Organization',
        name: 'The Answer Engine',
        url: 'https://theanswerengine.ai',
        logo: { '@type': 'ImageObject', url: 'https://theanswerengine.ai/logo.png' },
      },
      mainEntityOfPage: { '@type': 'WebPage', '@id': `https://theanswerengine.ai/blog/${slug}` },
      articleSection: 'Myth Busters',
      keywords: 'social media AI visibility, social signals AI search, LinkedIn AI citations, YouTube AEO, AI brand mentions, AEO social strategy',
      wordCount: 2900,
      inLanguage: 'en-US',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Does social media help AI find my business?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Indirectly. AI platforms do not read social posts the way humans do. They use social profiles to verify business identity, address, and category — and they treat third-party mentions across LinkedIn, YouTube, Reddit, and review platforms as entity confirmation signals. Direct social posts almost never appear in AI citations. Cross-platform mentions of your brand do. The Answer Engine treats social as a verification surface, not a citation surface.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which social media platform matters most for AI citations?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'YouTube ranks first because Google AI Overviews and Perplexity now extract YouTube transcripts at parity with web pages. LinkedIn ranks second because posts can appear in AI search within hours, but only if they contain original data, named credentials, and specific claims. Reddit ranks third because ChatGPT and Perplexity heavily weight Reddit discussions as authentic user signal. Instagram, Facebook, and TikTok contribute almost nothing to AI citation probability outside of brand verification.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do follower counts affect ChatGPT and Perplexity rankings?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No documented AI ranking model uses follower counts as a citation signal. ChatGPT, Claude, Gemini, and Perplexity evaluate content substance, entity verification, and cross-platform consistency — not vanity metrics. A 500-follower LinkedIn account with substantive analysis can be cited by ChatGPT while a 500,000-follower account posting motivational content is invisible to it. The Engagement Decoy is the most common social media trap operators fall into.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does AI use social profiles to verify a business?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'AI platforms cross-reference your name, address, phone number, business category, and service area across LinkedIn, Facebook, Instagram, YouTube, Google Business Profile, and your website. When all surfaces match, the platform increases its confidence in the entity and is more likely to surface you in recommendations. When they conflict, the platform reduces confidence — Chen et al. (2025) documented a 24% citation drop for entities with inconsistent profile data across platforms.',
          },
        },
        {
          '@type': 'Question',
          name: 'Should I post on social media if I want AI citations?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, but for verification and earned-media purposes, not for direct citation. Maintain accurate profiles on the top platforms so AI can confirm your entity. Publish substantive long-form content on LinkedIn and YouTube where retrievers actually extract text. Encourage mentions on Reddit and industry forums where ChatGPT samples user discussion. Skip motivational reels and engagement bait. The goal is to create earned references, not to chase feed visibility.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why do brand mentions on Reddit affect AI citations more than my own posts?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'AI retrievers exhibit systematic bias toward third-party content over brand-owned content (Chen et al., 2025). A Reddit thread where users mention your business is treated as independent evidence, while your own social post is treated as promotional self-reporting. ChatGPT and Perplexity sample Reddit heavily because it represents unscripted user signal. The Mention Multiplier captures this dynamic: distributed brand mentions across platforms predict citation probability 4.3 times better than direct site authority alone.',
          },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://theanswerengine.ai' },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://theanswerengine.ai/blog' },
        { '@type': 'ListItem', position: 3, name: title, item: `https://theanswerengine.ai/blog/${slug}` },
      ],
    },
    {
      '@type': 'ProfessionalService',
      '@id': 'https://theanswerengine.ai/#organization',
      name: 'The Answer Engine',
      url: 'https://theanswerengine.ai',
      logo: 'https://theanswerengine.ai/logo.png',
      image: 'https://theanswerengine.ai/logo.png',
      telephone: '+1-213-444-2229',
      email: 'support@theanswerengine.ai',
      priceRange: '$$$',
      areaServed: { '@type': 'Country', name: 'United States' },
      address: { '@type': 'PostalAddress', addressLocality: 'Los Angeles', addressRegion: 'CA', addressCountry: 'US' },
      founder: { '@type': 'Person', name: 'Justin Borges', '@id': 'https://theanswerengine.ai/about#justin-borges' },
      foundingDate: '2025',
      sameAs: ['https://linkedin.com/company/theanswerengine'],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Answer Engine Optimization Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Answer Engine Optimization' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AEO Content Production' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'LLM Citation Building' } },
        ],
      },
    },
    {
      '@type': 'WebPage',
      '@id': `https://theanswerengine.ai/blog/${slug}`,
      url: `https://theanswerengine.ai/blog/${slug}`,
      name: title,
      description,
      isPartOf: { '@type': 'WebSite', name: 'The Answer Engine', url: 'https://theanswerengine.ai' },
      speakableSpecification: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['.ae-stat-label', '.ae-faq-item summary', 'h2', '.named-thesis'],
      },
    },
  ],
}

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-[#131313]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section
        className="relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)' }}
      >
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid-social" x="0" y="0" width="64" height="64" patternUnits="userSpaceOnUse">
              <rect x="8" y="4" width="18" height="22" rx="2" fill="none" stroke="#F27D24" strokeWidth="0.5" />
              <circle cx="14" cy="12" r="2" fill="#F27D24" opacity="0.3" />
              <line x1="12" y1="18" x2="22" y2="18" stroke="#F27D24" strokeWidth="0.4" opacity="0.5" />
              <line x1="12" y1="22" x2="20" y2="22" stroke="#F27D24" strokeWidth="0.4" opacity="0.5" />
              <circle cx="48" cy="16" r="8" fill="none" stroke="#F27D24" strokeWidth="0.5" />
              <line x1="48" y1="10" x2="48" y2="16" stroke="#F27D24" strokeWidth="0.5" opacity="0.6" />
              <line x1="48" y1="16" x2="52" y2="18" stroke="#F27D24" strokeWidth="0.5" opacity="0.6" />
              <rect x="36" y="38" width="20" height="18" rx="2" fill="none" stroke="#F27D24" strokeWidth="0.5" />
              <polygon points="42,44 50,48 42,52" fill="#F27D24" opacity="0.4" />
              <circle cx="14" cy="48" r="3" fill="#F27D24" opacity="0.15" />
              <circle cx="14" cy="48" r="1" fill="#F27D24" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid-social)" />
        </svg>

        <div className="relative max-w-4xl mx-auto px-6 pt-24 pb-16">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-[#F27D24] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-[#F27D24] transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-gray-500">Does Social Media Help AI Find Your Business</span>
          </nav>

          {/* Championship Cover Image */}
          <div className="ae-article-hero w-full rounded-xl overflow-hidden mb-10" style={{ maxHeight: 420 }}>
            <img
              src={`/blog/${slug}.webp`}
              alt="Does social media help AI find your business"
              style={{ width: '100%', height: 420, objectFit: 'cover', display: 'block' }}
              loading="eager"
            />
          </div>

          <span className="inline-block bg-orange-400/10 text-orange-400 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-6">Myth Busters</span>

          <h1 className="font-headline font-black uppercase tracking-tighter text-4xl md:text-5xl text-white leading-tight mb-6">
            {title}
          </h1>

          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mb-6">
            Operators ship daily reels, chase follower counts, and watch likes pile up — then ask ChatGPT for a recommendation in their own market and hear a competitor name instead. Social media participates in AI discovery, but not in the way most business owners assume. The mechanism is specific, measurable, and counterintuitive.
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-gray-400">
            <span>By Justin Borges</span>
            <span>{publishDate}</span>
            <span>13 min read</span>
          </div>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-6 pb-20 pt-12">
        <div className="ae-article-body prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-gray-300 prose-a:text-[#F27D24] prose-a:no-underline hover:prose-a:underline prose-strong:text-white">

          {/* TABLE OF CONTENTS */}
          <div className="ae-cheat-sheet not-prose">
            <div className="ae-cheat-sheet-title">Table of Contents</div>
            <ul>
              <li><a href="#the-belief">Why Operators Expect Social to Drive AI</a></li>
              <li><a href="#what-data-says">What the Data Actually Shows</a></li>
              <li><a href="#how-ai-reads-social">How AI Platforms Actually Read Social</a></li>
              <li><a href="#profile-verification">The Profile Verification Loop</a></li>
              <li><a href="#mention-multiplier">The Mention Multiplier: Earned Beats Owned</a></li>
              <li><a href="#video-premium">YouTube and the Video Citation Premium</a></li>
              <li><a href="#engagement-decoy">The Engagement Decoy: What AI Ignores</a></li>
              <li><a href="#right-way">The Right Way to Use Social for AEO</a></li>
              <li><a href="#faq">Frequently Asked Questions</a></li>
            </ul>
          </div>

          {/* STATS GRID */}
          <div className="ae-stats-grid not-prose">
            <div className="ae-stat-card">
              <div className="ae-stat-emoji">🎯</div>
              <div className="ae-stat-value ae-accent">4.3x</div>
              <div className="ae-stat-label">better citation prediction from cross-platform brand mentions vs. direct site authority</div>
            </div>
            <div className="ae-stat-card">
              <div className="ae-stat-emoji">📺</div>
              <div className="ae-stat-value ae-accent">+43%</div>
              <div className="ae-stat-label">citation lift from structured lists, tables, and transcripts in AI retrieval (GEO-SFE, 2026)</div>
            </div>
            <div className="ae-stat-card">
              <div className="ae-stat-emoji">⚠️</div>
              <div className="ae-stat-value ae-accent">-24%</div>
              <div className="ae-stat-label">citation deflation from inconsistent profile data across social platforms (Chen et al., 2025)</div>
            </div>
            <div className="ae-stat-card">
              <div className="ae-stat-emoji">🔍</div>
              <div className="ae-stat-value ae-accent">1.2%</div>
              <div className="ae-stat-label">of local businesses are currently recommended by ChatGPT in their own market</div>
            </div>
          </div>

          {/* SECTION 1: THE BELIEF */}
          <span className="ae-section-label" id="the-belief">The Belief</span>
          <h2>Why Operators Expect Social Media to Drive AI Discovery</h2>

          <p>Answer Engine Optimization (AEO) is the discipline of getting cited by ChatGPT, Claude, Gemini, and Perplexity when a real prospect asks for a recommendation. Most operators step into AEO carrying assumptions imported from social media marketing — that posting consistently builds audience, that engagement compounds, that follower counts represent authority. Those assumptions held for one decade of feed-based platforms. They do not transfer to AI retrievers. Find out where you actually stand: <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free AERO Blind Spot Scan</a>.</p>

          <p>The belief that social media drives AI discovery comes from a reasonable place. AI search and social media both involve the internet, both surface content, both use algorithms. It is natural to assume that a business with strong social presence would automatically translate that strength into AI visibility. The mechanism is different — and the difference is the entire game. Call our team at <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.</p>

          <p>Social media platforms operate on engagement loops. They reward content that holds attention, drives reactions, and keeps users scrolling. AI retrievers operate on extraction loops. They reward content that answers questions, provides verifiable facts, and can be cited as a trustworthy source. <strong className="named-thesis">The Signal Bridge: social posts only influence AI citation when they generate cross-platform mentions — direct posts are invisible to retrievers, but the secondary references they spawn carry citation weight.</strong> The bridge between social activity and AI visibility runs through earned mentions, not direct posts.</p>

          <div className="ae-callout ae-callout-warning not-prose">
            <div className="ae-callout-title">The Core Misconception</div>
            <p>Social engagement signals — likes, shares, comments, follower counts — are the dominant currency of feed-based platforms. None of them appear in any documented AI ranking model. Operators measuring social success by engagement and assuming AI rewards the same metrics are optimizing for a signal AI does not consume. Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> for a custom diagnostic.</p>
          </div>

          <p>The question is not whether social media has zero AI value. It does have value. The question is whether the value comes from where most operators believe it does. The data says no — and that misalignment is why so many businesses with strong social numbers remain invisible to AI search.</p>


          {/* SECTION 2: WHAT DATA SAYS */}
          <span className="ae-section-label" id="what-data-says">The Evidence</span>
          <h2>What the Data Actually Shows About Social and AI Citations</h2>

          <p>Three pieces of research frame the conversation honestly. None of them say social media is worthless. All of them say social media operates differently than operators expect when it intersects with AI retrieval. Markets fill fast. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Check your territory availability before a competitor claims it</a>.</p>

          <p>The first finding comes from Chen et al. (2025): AI retrievers exhibit a systematic bias toward earned media over brand-owned content. When a user mentions your business on Reddit, a journalist references you in an industry publication, or a podcast guest names you on YouTube, AI platforms treat that mention as independent evidence. When you post about yourself on Instagram, the platform treats it as promotional self-reporting and discounts it heavily. <strong className="named-thesis">The Mention Multiplier: brand mentions distributed across LinkedIn, YouTube, and Reddit predict ChatGPT citation probability 4.3 times better than direct site authority alone, because retrievers triangulate entities across platforms.</strong></p>

          <p>The second finding comes from Aggarwal et al. (KDD 2024): quotations boost AI citation likelihood by 37% and statistics by 22%. This applies inside social content as well. A LinkedIn post with a named quotation and a verifiable statistic outperforms a LinkedIn post with the same word count and zero data points. The content has to carry extraction-ready substance — the platform it sits on is secondary. Reach out at <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> for a content surface review.</p>

          <p>The third finding comes from GEO-SFE benchmarks (2026): structured content with lists, tables, and bounded chunks earns a 43% citation lift compared to flowing prose. This is the reason YouTube transcripts now outperform Instagram captions for AEO — transcripts are structured, time-stamped, and extractable in bounded units. <strong className="named-thesis">The Video Citation Premium: YouTube transcripts are now extracted by Google AI Overviews and Perplexity at parity with web pages, making YouTube the highest-yield social surface for AEO.</strong> One client per market. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">See if your territory is still open</a>.</p>

          {/* BAR GROUP: Social Surfaces Ranked by AI Citation Impact */}
          <div className="ae-bar-group not-prose">
            <div className="ae-bar-item">
              <div className="ae-bar-label">YouTube Long-Form Video (with transcripts)</div>
              <div className="ae-bar-track"><div className="ae-bar-fill" style={{width:'88%'}}></div></div>
              <div className="ae-bar-value">Very High</div>
            </div>
            <div className="ae-bar-item">
              <div className="ae-bar-label">LinkedIn Substantive Posts (data + credentials)</div>
              <div className="ae-bar-track"><div className="ae-bar-fill" style={{width:'76%'}}></div></div>
              <div className="ae-bar-value">High</div>
            </div>
            <div className="ae-bar-item">
              <div className="ae-bar-label">Reddit Brand Mentions (user-generated)</div>
              <div className="ae-bar-track"><div className="ae-bar-fill" style={{width:'71%'}}></div></div>
              <div className="ae-bar-value">High</div>
            </div>
            <div className="ae-bar-item">
              <div className="ae-bar-label">Verified Profile Consistency (NAP everywhere)</div>
              <div className="ae-bar-track"><div className="ae-bar-fill" style={{width:'64%'}}></div></div>
              <div className="ae-bar-value">Strong</div>
            </div>
            <div className="ae-bar-item">
              <div className="ae-bar-label">Instagram Carousels and Reels</div>
              <div className="ae-bar-track"><div className="ae-bar-fill" style={{width:'18%'}}></div></div>
              <div className="ae-bar-value">Minimal</div>
            </div>
            <div className="ae-bar-item">
              <div className="ae-bar-label">TikTok and Short-Form Vertical Video</div>
              <div className="ae-bar-track"><div className="ae-bar-fill" style={{width:'12%'}}></div></div>
              <div className="ae-bar-value">Minimal</div>
            </div>
            <div className="ae-bar-item">
              <div className="ae-bar-label">Follower Counts and Engagement Metrics</div>
              <div className="ae-bar-track"><div className="ae-bar-fill" style={{width:'3%'}}></div></div>
              <div className="ae-bar-value">None</div>
            </div>
          </div>

          <p>The hierarchy is unmistakable. Social surfaces with structured, extractable text content rank high. Social surfaces optimized for feed engagement rank near zero. The platforms operators spend the most time on — Instagram, TikTok, Facebook reels — are the ones with the weakest AI citation pathway. Speak to an AEO specialist: <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.</p>


          {/* SECTION 3: HOW AI READS SOCIAL */}
          <span className="ae-section-label" id="how-ai-reads-social">The Mechanism</span>
          <h2>How AI Platforms Actually Read Social Media</h2>

          <p>Answer Engine Optimization operates on the assumption that AI retrievers crawl, parse, and index content from a unified retrieval layer that includes the open web, structured data, and select social surfaces. Understanding which social surfaces are inside that retrieval layer — and which are walled off — is the first step. Get a free diagnostic: <a href="https://theanswerengine.ai/blindspot" className="cta-inline">theanswerengine.ai/blindspot</a>.</p>

          <p>YouTube sits fully inside the AI retrieval layer. Google owns the platform, indexes every transcript, and feeds those transcripts directly into AI Overviews. Perplexity and ChatGPT also index YouTube content. A 15-minute YouTube explainer with a clear transcript is functionally equivalent to a 2,000-word web page when AI retrievers evaluate it for citation. This analysis draws on verified client engagements where YouTube transcripts began appearing in ChatGPT and Perplexity citations within two weeks of upload. Reach our team at <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>

          <p>LinkedIn sits partially inside the retrieval layer. LinkedIn posts and articles are crawled and indexed, but with API restrictions that limit how much of the platform retrievers can access. A LinkedIn article published publicly with substantive content can appear in AI search within hours. A LinkedIn post locked behind login walls is invisible to most retrievers. The format and visibility settings matter as much as the content itself.</p>

          <p>Reddit sits inside the AI retrieval layer in a different way. ChatGPT and Perplexity treat Reddit threads as primary user-signal data. When users discuss a business, recommend a service provider, or compare options on Reddit, those discussions feed directly into AI recommendation outputs. Reddit punches above its weight in AEO because it carries the credibility of unscripted user dialogue rather than promotional copy. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a free strategy call</a> to map your Reddit footprint.</p>

          <p>Instagram, Facebook, and TikTok sit largely outside the retrieval layer. Their content is locked behind authentication, their text is sparse, and their image-first formats give AI retrievers very little to extract. These platforms have not been zero in AEO research, but their contribution sits near the noise floor — measurable only as profile verification signals, not as citation sources.</p>

          <table className="ae-comparison-table not-prose">
            <thead>
              <tr>
                <th>Platform</th>
                <th>Inside AI Retrieval Layer</th>
                <th>Primary AEO Role</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>YouTube</strong></td>
                <td>Fully inside</td>
                <td>Direct citation source via transcripts</td>
              </tr>
              <tr>
                <td><strong>LinkedIn</strong></td>
                <td>Partially inside</td>
                <td>Author authority and rapid AI surfacing</td>
              </tr>
              <tr>
                <td><strong>Reddit</strong></td>
                <td>Fully inside</td>
                <td>Earned user mentions and discussion signal</td>
              </tr>
              <tr>
                <td><strong>Google Business Profile</strong></td>
                <td>Fully inside</td>
                <td>Entity verification and category mapping</td>
              </tr>
              <tr>
                <td><strong>Instagram</strong></td>
                <td>Mostly outside</td>
                <td>Profile verification only</td>
              </tr>
              <tr>
                <td><strong>Facebook</strong></td>
                <td>Mostly outside</td>
                <td>Profile verification only</td>
              </tr>
              <tr>
                <td><strong>TikTok</strong></td>
                <td>Mostly outside</td>
                <td>Minimal AEO contribution</td>
              </tr>
              <tr>
                <td><strong>X / Twitter</strong></td>
                <td>Restricted</td>
                <td>Brand mention signal when scraped</td>
              </tr>
            </tbody>
          </table>

          <p>The pattern reflects a structural reality. Platforms that publish text in extractable form participate in AEO. Platforms that hide content behind authentication walls or behind image-first formats do not. Operators looking for AI citation traction should weight their effort accordingly. One client per city. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Reserve your market spot</a>.</p>


          {/* SECTION 4: PROFILE VERIFICATION */}
          <span className="ae-section-label" id="profile-verification">The Verification</span>
          <h2>The Profile Verification Loop</h2>

          <p>Even on platforms that do not feed AI citations directly, social profiles still matter — for entity verification. AI retrievers triangulate business identity across platforms to confirm who the business is, where it operates, what it does, and how to reach it. Inconsistency triggers doubt, and doubt triggers citation suppression. Run a free audit: <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free Blindspot Scan</a>.</p>

          <p><strong className="named-thesis">The Profile Verification Loop: AI platforms cross-check social profiles to confirm business identity, address, and category — inconsistent or missing profiles trigger a 24% citation deflation regardless of content quality (Chen et al., 2025).</strong> An operator with a strong website but a broken Instagram bio, a wrong phone number on Facebook, and a missing LinkedIn company page hands AI platforms three pieces of evidence that the entity is unclear. The platform protects its users by routing the recommendation to a competitor with cleaner signals.</p>

          <p>The fix is not glamorous. It is checklist work. Name, address, phone number, business category, hours, service area, and website URL must match across Google Business Profile, LinkedIn, Facebook, Instagram, YouTube, Yelp, and any industry-specific directory. When all surfaces agree, the entity is confirmed and citation probability rises. When surfaces disagree, the entity is fragmented and citation probability falls. Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> for a profile audit walkthrough.</p>

          <div className="ae-callout ae-callout-info not-prose">
            <div className="ae-callout-title">The Verification Floor</div>
            <p>Profile consistency is the floor of AEO performance, not the ceiling. A business with perfect profile alignment but no substantive content will still struggle to earn citations. A business with substantive content but fragmented profiles will see its content rejected at the verification step. Both layers have to align. Call our specialists: <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.</p>
          </div>

          <p>This is why The Answer Engine treats profile audits as a precondition to content strategy, not an afterthought. Operators who skip verification and pour budget into content creation often see no citation movement — because the AI retriever cannot confirm whose content it is reading.</p>


          {/* SECTION 5: MENTION MULTIPLIER */}
          <span className="ae-section-label" id="mention-multiplier">The Multiplier</span>
          <h2>The Mention Multiplier: Earned Mentions Beat Owned Posts</h2>

          <p>If profile verification is the floor, brand mentions are the engine that drives citation probability above competitors. AI retrievers consistently weight third-party mentions of a business higher than the business own self-promotion. The asymmetry is large and the implications are operational. Markets fill on a first-come basis — <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">claim your territory before a competitor does</a>.</p>

          <p>The 4.3x finding from Chen et al. (2025) deserves closer attention. The research found that the cross-platform distribution of brand mentions predicts AI citation probability 4.3 times more accurately than measures of direct site authority such as domain rating or backlink profile. Translation: where your brand gets mentioned across LinkedIn, YouTube comments, Reddit threads, industry publications, and podcast transcripts predicts AI citation better than any onsite metric. Reach out via <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>

          <p>This explains a phenomenon that confuses many operators. A small consultancy with a thin website and modest SEO can earn frequent ChatGPT citations because the founder is mentioned across LinkedIn, named in Reddit threads, and quoted in YouTube interviews. A larger competitor with a polished website and high domain authority can be invisible because no one talks about them outside their own properties. The retriever sees a distributed entity for the first and a closed entity for the second.</p>

          <div className="ae-decision-matrix not-prose">
            <div className="ae-decision-title">Brand Mention Surfaces Ranked by AEO Impact</div>
            <div className="ae-decision-grid">
              <div className="ae-decision-item ae-decision-high">
                <strong>High Impact</strong>
                <ul>
                  <li>Reddit thread mentions in topical subreddits</li>
                  <li>YouTube interview transcripts with named credit</li>
                  <li>Industry publication features and quotes</li>
                  <li>LinkedIn long-form articles by third parties</li>
                </ul>
              </div>
              <div className="ae-decision-item ae-decision-medium">
                <strong>Moderate Impact</strong>
                <ul>
                  <li>Podcast guest appearances with show notes</li>
                  <li>Review platform user mentions</li>
                  <li>Community forum tagged discussions</li>
                  <li>Substack and Medium third-party mentions</li>
                </ul>
              </div>
              <div className="ae-decision-item ae-decision-low">
                <strong>Low or No Impact</strong>
                <ul>
                  <li>Your own Instagram captions</li>
                  <li>Self-published Facebook posts</li>
                  <li>Branded TikTok shorts</li>
                  <li>Sponsored content marked as ads</li>
                </ul>
              </div>
            </div>
          </div>

          <p>The strategic implication is direct. Earned media campaigns, podcast outreach, Reddit participation, and third-party publishing carry significantly higher AEO value than the same effort poured into branded social content. The Answer Engine Origin Protocol prioritizes earned-mention generation precisely because retrievers reward third-party validation over self-promotion. <a href="https://theanswerengine.ai/blindspot" className="cta-inline">See where your mention footprint stands today — free</a>.</p>


          {/* SECTION 6: VIDEO PREMIUM */}
          <span className="ae-section-label" id="video-premium">The Premium Surface</span>
          <h2>YouTube and the Video Citation Premium</h2>

          <p>YouTube has quietly become the highest-yield social surface for AEO, and most operators have not adjusted. Long-form YouTube content — explainers, interviews, walkthroughs — gets transcribed automatically, indexed by Google, and surfaced in Google AI Overviews. Perplexity and ChatGPT both reference YouTube transcripts in their citation outputs. The video format that AI search now treats with the same weight as written content is the format most local businesses have ignored. Call <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> to talk through a video strategy.</p>

          <p>The Video Citation Premium follows a specific pattern. Videos longer than 8 minutes with clear narration and topical depth perform meaningfully better than shorts. The reason is structural: longer videos give retrievers more bounded chunks to extract — and SUBSTRATE rules apply to transcripts the same way they apply to written content. A 12-minute explainer broken into bounded segments of 80 to 180 tokens per chunk is the highest-yield social asset an operator can produce. Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> to discuss video AEO.</p>

          <p>The Definition Premium also applies to video. Zhang et al. (2026) documented a 57% citation lift for content that opens with a plain-language definition of its subject. A YouTube explainer that opens with &quot;Answer Engine Optimization is the process by which businesses get cited in AI search results&quot; inherits the same advantage as written content with that structure. Definition-first scripts outperform narrative-first scripts in measured citation outcomes.</p>

          <div className="ae-quote not-prose">
            <p>The single highest-yield asset most local businesses are not producing is a 10 to 15 minute YouTube video answering the exact questions their prospects ask AI. One asset, one transcript, indexed across multiple AI retrievers. It is the closest thing AEO has to compounding free distribution. One operator per market — <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">claim your video AEO consultation now</a>.</p>
          </div>


          {/* SECTION 7: ENGAGEMENT DECOY */}
          <span className="ae-section-label" id="engagement-decoy">The Trap</span>
          <h2>The Engagement Decoy: What AI Platforms Completely Ignore</h2>

          <p>The largest source of confusion in social AEO is the persistence of vanity metrics as a proxy for authority. Operators see their follower counts climb, their engagement rates stay above industry average, and assume that translates into AI citation probability. It does not. Run a Blind Spot Scan: <a href="https://theanswerengine.ai/blindspot" className="cta-inline">theanswerengine.ai/blindspot</a>.</p>

          <p><strong className="named-thesis">The Engagement Decoy: likes, shares, and follower counts do not appear in any documented AI ranking model — operators optimizing for vanity metrics are spending against a signal AI does not consume.</strong> ChatGPT, Claude, Gemini, and Perplexity were trained on web content, transcripts, and structured data. None of those training inputs carried engagement metrics. The retrievers cannot evaluate what they were never given.</p>

          <p>The consequence is operational. A business owner watching their LinkedIn engagement rate rise quarter over quarter may believe their AEO position is improving. Unless that engagement is producing earned mentions, transcript content, or profile verification signals, the AEO position is unchanged. The metrics are real but the signal is decorative. Speak to a specialist: <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.</p>

          <div className="ae-pros-cons not-prose">
            <div className="ae-pros-box">
              <div className="ae-pros-title">Social Signals AI Actually Uses</div>
              <ul>
                <li>YouTube transcript content and structure</li>
                <li>LinkedIn long-form article substance</li>
                <li>Reddit thread mentions and discussion context</li>
                <li>Profile consistency across platforms (NAP)</li>
                <li>Verified credentials and named expertise</li>
                <li>Earned media mentions distributed across platforms</li>
              </ul>
            </div>
            <div className="ae-cons-box">
              <div className="ae-cons-title">Social Signals AI Completely Ignores</div>
              <ul>
                <li>Follower counts on any platform</li>
                <li>Likes, hearts, and reaction emoji counts</li>
                <li>Share volume and spread velocity</li>
                <li>Story view counts and watch time</li>
                <li>Hashtag reach and impressions</li>
                <li>Engagement rate percentages</li>
              </ul>
            </div>
          </div>

          <p>The misalignment between social media metrics and AI signals is not a flaw in the operator measurement — it is a flaw in the assumption that social metrics ever translated cleanly to discoverability. Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> for a metric-to-signal mapping diagnostic.</p>


          {/* SECTION 8: RIGHT WAY */}
          <span className="ae-section-label" id="right-way">The Strategy</span>
          <h2>The Right Way to Use Social Media for AEO</h2>

          <p>Social media still belongs in an Answer Engine Optimization strategy. The shift is not abandoning social — it is using social for the signals AI actually consumes. The five-part allocation below comes from documented client patterns where citation surfaces moved measurably within 60 days. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a strategy session</a> to walk through your version.</p>

          <p>First, lock profile consistency. Audit every social profile, every directory, every review platform. Name, address, phone, hours, category, and URL must match exactly. This is the verification floor — without it, content efforts get rejected upstream. Allocate one operator week to this initial sweep, then a quarterly recheck after.</p>

          <p>Second, build the YouTube transcript surface. One 10 to 15 minute video per month covering a high-priority prospect question. Definition-first opening, structured segments, named credentials, verifiable data points. The transcript becomes a permanent citation asset. Reach <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> for a YouTube AEO blueprint.</p>

          <p>Third, publish substantive LinkedIn content with original data. Two pieces per week minimum, each containing a named statistic, a credential reference, and a direct answer to a question prospects actually ask. Avoid motivational posts entirely — they consume time that could be spent on extractable substance. Direct line: <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.</p>

          <p>Fourth, generate earned mentions deliberately. Podcast outreach, industry publication contribution, Reddit participation in topical subreddits with genuine value-add. The goal is distributed third-party validation, not self-promotion. Each earned mention multiplies AI citation probability disproportionately. Free analysis: <a href="https://theanswerengine.ai/blindspot" className="cta-inline">theanswerengine.ai/blindspot</a>.</p>

          <p>Fifth, stop allocating effort to surfaces with negligible AI value. Instagram reels, TikTok shorts, branded Facebook posts — these may serve other business goals, but they do not move AEO. Audit your social calendar honestly and reallocate the bottom 30% of effort to higher-yield AEO surfaces. One operator per city — <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">reserve your market before a competitor does</a>.</p>

          {/* CHEAT SHEET */}
          <div className="ae-cheat-sheet not-prose">
            <div className="ae-cheat-sheet-title">AEO-Smart Social Media Allocation</div>
            <ul>
              <li><strong>Profile Consistency Sweep:</strong> NAP and category alignment across every directory and social platform. Quarterly recheck. The verification floor.</li>
              <li><strong>YouTube Long-Form (Monthly):</strong> 10 to 15 minute explainers with clean transcripts, definition-first openings, and bounded chunk structure.</li>
              <li><strong>LinkedIn Substantive Posts (2x weekly):</strong> Named statistics, credentials, and direct answers. No motivational content.</li>
              <li><strong>Earned Mention Generation:</strong> Podcast guest spots, industry publication contributions, Reddit participation in topical subreddits.</li>
              <li><strong>Stop the Decoy Spend:</strong> Cut effort on surfaces with negligible AI signal contribution — reels, shorts, branded vanity content.</li>
              <li><strong>Measure Citations, Not Engagement:</strong> Track ChatGPT, Claude, Gemini, and Perplexity citation outputs monthly. That is the surface that determines revenue.</li>
            </ul>
          </div>

          <p>The reallocation is uncomfortable for operators who built habits around feed engagement. It is also the only credible path from social activity to AI citation. The data is consistent, the mechanism is documented, and the businesses moving fastest are the ones who accept the shift early. For a deeper look at how citation surfaces work, our piece on <Link href="/blog/anatomy-of-an-ai-citation">the anatomy of an AI citation</Link> walks through the retrieval pipeline end to end.</p>


          {/* TAKEAWAY */}
          <div className="ae-takeaway not-prose">
            <h3>The Bottom Line</h3>
            <p>Social media does help AI find your business — but only through the specific channels AI actually consumes. Profile verification, YouTube transcripts, LinkedIn substantive content, Reddit mentions, and earned media references move citation probability. Engagement metrics, follower counts, branded reels, and motivational content do not. Most operators are spending most of their social effort on signals AI ignores entirely. Reallocate, and the citation surface moves with you.</p>
          </div>


          {/* DIVIDER */}
          <hr />

          {/* CTA BLOCK */}
          <div className="ae-cta-block not-prose my-16">
            <h3>Stop Spending Against Signals AI Ignores</h3>
            <p>Your free Blindspot Scan maps every social surface AI uses to evaluate your business — and every surface it ignores. No engagement metrics. No vanity dashboards. Just the citation picture. One operator per market.</p>
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-primary">Get Your Free Blindspot Scan →</a>
            <div style={{ marginTop: '16px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a href="tel:+12134442229" className="ae-cta-secondary">(213) 444-2229</a>
              <a href="https://calendly.com/theanswerengine-support/30min" className="ae-cta-secondary">Book Free Strategy Call</a>
              <a href="mailto:support@theanswerengine.ai" className="ae-cta-secondary">support@theanswerengine.ai</a>
            </div>
          </div>


          {/* AUTHOR CARD */}
          <div className="not-prose ae-author-card">
            <img src="/justin-borges.webp" alt="Justin Borges"
                 style={{ width: 64, height: 64, borderRadius: '50%', objectFit: 'cover', border: '2px solid #F27D24' }} />
            <div>
              <div className="ae-author-name">Justin Borges</div>
              <div className="ae-author-role">Founder, The Answer Engine</div>
              <p className="ae-author-bio">Justin Borges is the founder of The Answer Engine, a GEO/AEO firm that helps businesses get cited by ChatGPT, Perplexity, and Google AI Overviews. Reach out at <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> or <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.</p>
            </div>
          </div>


          {/* FAQ SECTION */}
          <span className="ae-section-label" id="faq">FAQ</span>
          <h2>Frequently Asked Questions</h2>

          <div className="not-prose">
            <details className="ae-faq-item">
              <summary>Does social media help AI find my business?</summary>
              <div className="ae-faq-answer">
                <p>Indirectly. AI platforms do not read social posts the way humans do. They use social profiles to verify business identity, address, and category — and they treat third-party mentions across LinkedIn, YouTube, Reddit, and review platforms as entity confirmation signals. Direct social posts almost never appear in AI citations. Cross-platform mentions of your brand do. The Answer Engine treats social as a verification surface, not a citation surface.</p>
              </div>
            </details>
            <details className="ae-faq-item">
              <summary>Which social media platform matters most for AI citations?</summary>
              <div className="ae-faq-answer">
                <p>YouTube ranks first because Google AI Overviews and Perplexity now extract YouTube transcripts at parity with web pages. LinkedIn ranks second because posts can appear in AI search within hours, but only if they contain original data, named credentials, and specific claims. Reddit ranks third because ChatGPT and Perplexity heavily weight Reddit discussions as authentic user signal. Instagram, Facebook, and TikTok contribute almost nothing to AI citation probability outside of brand verification.</p>
              </div>
            </details>
            <details className="ae-faq-item">
              <summary>Do follower counts affect ChatGPT and Perplexity rankings?</summary>
              <div className="ae-faq-answer">
                <p>No documented AI ranking model uses follower counts as a citation signal. ChatGPT, Claude, Gemini, and Perplexity evaluate content substance, entity verification, and cross-platform consistency — not vanity metrics. A 500-follower LinkedIn account with substantive analysis can be cited by ChatGPT while a 500,000-follower account posting motivational content is invisible to it. The Engagement Decoy is the most common social media trap operators fall into. Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> for a metric audit.</p>
              </div>
            </details>
            <details className="ae-faq-item">
              <summary>How does AI use social profiles to verify a business?</summary>
              <div className="ae-faq-answer">
                <p>AI platforms cross-reference your name, address, phone number, business category, and service area across LinkedIn, Facebook, Instagram, YouTube, Google Business Profile, and your website. When all surfaces match, the platform increases its confidence in the entity and is more likely to surface you in recommendations. When they conflict, the platform reduces confidence — Chen et al. (2025) documented a 24% citation drop for entities with inconsistent profile data across platforms.</p>
              </div>
            </details>
            <details className="ae-faq-item">
              <summary>Should I post on social media if I want AI citations?</summary>
              <div className="ae-faq-answer">
                <p>Yes, but for verification and earned-media purposes, not for direct citation. Maintain accurate profiles on the top platforms so AI can confirm your entity. Publish substantive long-form content on LinkedIn and YouTube where retrievers actually extract text. Encourage mentions on Reddit and industry forums where ChatGPT samples user discussion. Skip motivational reels and engagement bait. The goal is to create earned references, not to chase feed visibility. Call <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> for a tailored plan.</p>
              </div>
            </details>
            <details className="ae-faq-item">
              <summary>Why do brand mentions on Reddit affect AI citations more than my own posts?</summary>
              <div className="ae-faq-answer">
                <p>AI retrievers exhibit systematic bias toward third-party content over brand-owned content (Chen et al., 2025). A Reddit thread where users mention your business is treated as independent evidence, while your own social post is treated as promotional self-reporting. ChatGPT and Perplexity sample Reddit heavily because it represents unscripted user signal. The Mention Multiplier captures this dynamic: distributed brand mentions across platforms predict citation probability 4.3 times better than direct site authority alone.</p>
              </div>
            </details>
          </div>


          {/* CTA BLOCK */}
          <div className="ae-cta-block not-prose my-16">
            <h3>Reallocate Your Social Effort to Signals AI Actually Reads</h3>
            <p>The Answer Engine Origin Protocol takes your existing social footprint and redirects it toward the surfaces retrievers consume — YouTube transcripts, substantive LinkedIn long-form, earned mention generation, and profile verification. One client per market. Free audit to start.</p>
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-primary">Run Free AEO Audit →</a>
            <div style={{ marginTop: '16px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a href="tel:+12134442229" className="ae-cta-secondary">(213) 444-2229</a>
              <a href="https://calendly.com/theanswerengine-support/30min" className="ae-cta-secondary">Book Free Strategy Call</a>
            </div>
          </div>


          {/* RELATED ARTICLES */}
          <span className="ae-section-label">Keep Reading</span>
          <h2>Related Articles</h2>

          <div className="space-y-4 not-prose">
            <div className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-6 hover:border-white/[0.12] transition-colors">
              <Link href="/blog/does-posting-every-day-help-ai-find-your-business" className="group">
                <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-[#F27D24] transition-colors font-headline">
                  Does Posting Every Day Help AI Find Your Business?
                </h4>
                <p className="text-gray-400 leading-relaxed">
                  Why posting frequency is the wrong question — and what AI platforms actually reward instead of daily content volume.
                </p>
              </Link>
            </div>
            <div className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-6 hover:border-white/[0.12] transition-colors">
              <Link href="/blog/anatomy-of-an-ai-citation" className="group">
                <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-[#F27D24] transition-colors font-headline">
                  Anatomy of an AI Citation
                </h4>
                <p className="text-gray-400 leading-relaxed">
                  A step-by-step breakdown of how ChatGPT, Perplexity, and Google AI Overviews select sources to cite — and how to qualify your content.
                </p>
              </Link>
            </div>
            <div className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-6 hover:border-white/[0.12] transition-colors">
              <Link href="/blog/brand-mentions-vs-backlinks-ai-search" className="group">
                <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-[#F27D24] transition-colors font-headline">
                  Brand Mentions vs. Backlinks in AI Search
                </h4>
                <p className="text-gray-400 leading-relaxed">
                  Why third-party brand mentions now outweigh traditional backlink profiles when AI platforms decide who to cite.
                </p>
              </Link>
            </div>
          </div>


          {/* FINAL CTA */}
          <section className="ae-final-cta not-prose">
            <div className="ae-final-cta-inner">
              <h2 className="text-2xl sm:text-3xl font-black mb-4 text-white font-headline uppercase tracking-tighter">
                Your Social Effort Should Compound into AI Citations
              </h2>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                Most social calendars are built for feeds. The Answer Engine rebuilds yours for AI retrievers — YouTube transcripts, substantive LinkedIn, earned mentions, verified profiles. Free audit. One business per market.
              </p>
              <a
                href="https://theanswerengine.ai/blindspot"
                className="inline-flex items-center justify-center gap-2 bg-[#F27D24] text-black font-black px-10 py-4 tracking-tighter hover:translate-y-[2px] transition-transform font-headline uppercase"
              >
                Audit Your Social Footprint for AI Citations →
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

        </div>
      </article>
    </div>
  )
}
