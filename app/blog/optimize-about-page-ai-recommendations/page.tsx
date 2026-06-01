import type { Metadata } from 'next'
import Link from 'next/link'

export const revalidate = 86400
export const dynamic = 'force-static'
export const dynamicParams = true

const title = 'How to Optimize Your About Page for AI Recommendations'
const description =
  'Your About page is one of the first pages AI platforms read when evaluating your business. Learn how to structure it so ChatGPT, Perplexity, and Google AI actually recommend you.'
const slug = 'optimize-about-page-ai-recommendations'
const publishDate = '2026-03-18'

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'about page optimization',
    'AI recommendations',
    'about page for ChatGPT',
    'E-E-A-T signals',
    'AI trust signals',
    'about page SEO',
    'answer engine optimization',
    'AI authority signals',
    'about us page best practices',
  ],
  openGraph: {
    title,
    description,
    type: 'article',
    publishedTime: publishDate,
    authors: ['https://theanswerengine.ai/about'],
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
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Why does my About page matter for AI recommendations?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'AI platforms like ChatGPT, Perplexity, and Google AI evaluate your About page to verify your business identity, credentials, and authority. A well-structured About page with clear entity information, team credentials, and location details gives AI models the trust signals they need to confidently recommend your business over competitors.',
          },
        },
        {
          '@type': 'Question',
          name: 'What E-E-A-T signals should my About page include?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Your About page should demonstrate Experience (years in business, projects completed), Expertise (certifications, specialized training), Authoritativeness (industry awards, media mentions, partnerships), and Trustworthiness (physical address, phone number, licensing information). These signals help AI platforms verify that your business is a credible source worth citing.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does ChatGPT actually read my About page?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. When ChatGPT browses your website or pulls from the Bing search index, your About page is one of the primary pages it uses to understand who you are and what you do. The plain text content on your About page directly influences whether ChatGPT considers your business authoritative enough to recommend.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long should my About page be for AI optimization?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Aim for 800 to 1,500 words of substantive content. Too short and AI platforms will not find enough information to build confidence in your authority. Too long and your key signals get diluted. Focus on density of verifiable claims rather than word count alone.',
          },
        },
        {
          '@type': 'Question',
          name: 'Should I include team member bios on my About page?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Individual team bios with real names, credentials, and professional backgrounds are among the strongest E-E-A-T signals you can provide. AI platforms cross-reference these details against LinkedIn profiles, industry directories, and other public sources to verify authenticity. Generic bios without verifiable details provide little AI trust value.',
          },
        },
        {
          '@type': 'Question',
          name: 'What schema markup should I add to my About page?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Add Organization schema with your business name, address, phone, founding date, and social profiles. Include Person schema for key team members with their job titles and credentials. Schema markup delivers up to a 73% selection boost for AI Overview inclusion, making it one of the highest-impact optimizations available for any business page.',
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
          <Link href="/" className="hover:text-orange-400 transition-colors">
            Home
          </Link>
        </li>
        <li>/</li>
        <li>
          <Link href="/blog" className="hover:text-orange-400 transition-colors">
            Blog
          </Link>
        </li>
        <li>/</li>
        <li className="text-gray-400 truncate max-w-[250px]">{title}</li>
      </ol>
    </nav>
          {/* Championship Cover Image */}
          <div className="ae-article-hero w-full rounded-xl overflow-hidden mb-10" style={{ maxHeight: 420 }}>
            <img
              src="/blog/optimize-about-page-ai-recommendations.webp"
              alt="optimize about page ai recommendations"
              style={{ width: '100%', height: 420, objectFit: 'cover', display: 'block' }}
              loading="eager"
            />
          </div>
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
          <header className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl mb-6 bg-white/[0.04] border border-white/[0.08]">
              <span className="text-sm font-semibold tracking-wider uppercase text-white">AEO Education</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-white leading-tight font-plus-jakarta">
              How to Optimize Your About Page for AI Recommendations
            </h1>

            <div className="bg-gradient-to-br from-white/[0.02] to-white/[0.02] border border-white/[0.08] rounded-xl p-6 mb-8">
              <p className="text-lg text-white leading-relaxed">
                <strong>Your About page is one of the first pages AI platforms read when deciding whether to recommend your business.</strong> Most companies treat it as an afterthought. AI does not. Here is how to structure it so ChatGPT, Perplexity, and Google AI actually cite you.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>11 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>March 18, 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <span>Justin Borges</span>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <div className="prose prose-invert prose-lg max-w-none prose-headings:font-plus-jakarta prose-headings:text-white prose-p:text-gray-300 prose-a:text-[#F27D24] prose-a:no-underline hover:prose-a:underline prose-strong:text-white">

            {/* ── STATS GRID ── */}
            <div className="ae-stats-grid not-prose">
              <div className="ae-stat-card">
                <div className="ae-stat-value ae-accent">96%</div>
                <div className="ae-stat-label">of AI Overview citations come from sources with strong E-E-A-T signals</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-value ae-accent">73%</div>
                <div className="ae-stat-label">selection boost for AI Overview inclusion with proper schema markup</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-value ae-accent">45%</div>
                <div className="ae-stat-label">of consumers now use AI tools for local business recommendations</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-value ae-accent">13%</div>
                <div className="ae-stat-label">of AI visibility scoring tied to directory listing accuracy alone</div>
              </div>
            </div>

            {/* ── SECTION 1: WHY AI CARES ── */}
            <span className="ae-section-label">The Foundation</span>
            <h2>Why AI Platforms Care About Your About Page</h2>

            <p>AI platforms do not recommend businesses at random. They follow a verification process that checks multiple trust signals before deciding which businesses deserve a citation. Those trust signals fall into three categories: entity identity, evidence and citations, and technical quality. Your About page sits at the center of entity identity, the foundation everything else builds on. Markets fill fast. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Check your territory availability.</a></p>

            <p>When <Link href="/blog/how-chatgpt-chooses-businesses-to-recommend">ChatGPT evaluates which businesses to recommend</Link>, it looks for clear, verifiable information about who runs the business, where it operates, and what credentials back up its claims. Your About page is the single best place to consolidate all of that information in one crawlable location. Your first step: <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free AERO Blind Spot Scan.</a></p>

            <div className="ae-quote not-prose">
              <p>The shift from keyword-based ranking to entity-based authority is one of the defining changes of 2026. AI platforms do not just crawl your website in isolation. They cross-reference your identity across the entire web. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Claim your free call</a> before your market fills.</p>
            </div>

            <p>This is not speculation. AI platforms cross-reference your business name, address, team members, and credentials against multiple sources. Your About page is where that cross-referencing begins. A weak About page does not just lose you human visitors. It actively prevents AI from recommending you. Reach out: <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>

            {/* ── CTA 1 ── */}
            <div className="ae-cta-inline not-prose">
              <p>Find out what AI platforms actually see when they visit your website. Call us at <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> today.</p>
              <Link href="/blindspot">Get Your Free Blind Spot Report &rarr;</Link>
            </div>

            {/* ── SECTION 2: E-E-A-T FRAMEWORK ── */}
            <span className="ae-section-label">The Framework</span>
            <h2>The E-E-A-T Framework: What AI Actually Looks For</h2>

            <p>Google&apos;s E-E-A-T framework (Experience, Expertise, Authoritativeness, Trustworthiness) was originally designed as a quality guideline for human search evaluators. In 2026, it functions more like a ranking filter for AI visibility. AI platforms use these same signals to decide which sources deserve citations. Your About page is where you demonstrate all four. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Lock in your exclusive territory now.</a></p>

            {/* ── DECISION MATRIX: E-E-A-T ── */}
            <div className="ae-decision-matrix not-prose">
              <h3>E-E-A-T Signal Strength Matrix</h3>
              <table>
                <thead>
                  <tr>
                    <th>Signal</th>
                    <th>Weak (Low AI Trust)</th>
                    <th>Strong (High AI Trust)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Experience</strong></td>
                    <td>&quot;We have years of experience&quot;</td>
                    <td>&quot;Founded in 2012, 1,400+ residential plumbing projects in DFW&quot;</td>
                  </tr>
                  <tr>
                    <td><strong>Expertise</strong></td>
                    <td>&quot;Fully licensed and insured&quot;</td>
                    <td>&quot;TDLR License #12345, EPA Lead-Safe Certified&quot;</td>
                  </tr>
                  <tr>
                    <td><strong>Authoritativeness</strong></td>
                    <td>&quot;We are the best in the area&quot;</td>
                    <td>&quot;2025 Best of Denver Award, BBB A+ Rating&quot;</td>
                  </tr>
                  <tr>
                    <td><strong>Trustworthiness</strong></td>
                    <td>Contact form only, no address</td>
                    <td>Full address, direct phone, license numbers, insurance details</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p><Link href="/blog/how-claude-ai-evaluates-business-authority">AI models evaluate business authority</Link> by looking for certifications, licenses, specialized training, and industry affiliations. List them on your About page with full names, not abbreviations. Verifiable details carry weight. Vague claims do not. <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Get your free AI readiness report.</a></p>

            {/* ── CALLOUT ── */}
            <div className="ae-callout not-prose">
              <strong>Key Insight:</strong> AI platforms cross-reference your credentials against external sources. If you claim an award, AI will check whether that award exists and whether your business actually received it. Only include claims that hold up to verification.
            </div>

            {/* ── CTA 2 ── */}
            <div className="ae-cta-inline not-prose">
              <p>Not sure if your credentials are visible to AI? We will check for free. Ready to act? <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a free strategy session.</a></p>
              <Link href="/blindspot">Run Your Free AI Visibility Audit &rarr;</Link>
            </div>

            {/* ── SECTION 3: SEVEN ELEMENTS ── */}
            <span className="ae-section-label">The Checklist</span>
            <h2>Seven Elements Every AI-Optimized About Page Needs</h2>

            <p>Based on how AI platforms currently evaluate business authority, here are the seven elements your About page must include. Each one feeds directly into the trust signals that AI models use to decide whether to cite you. Drop us a line at <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>

            {/* ── CHEAT SHEET ── */}
            <div className="ae-cheat-sheet not-prose">
              <h3>The AI-Ready About Page Cheat Sheet</h3>
              <ul>
                <li><strong>1. Complete business identity.</strong> Full legal business name, founding year, and the specific services you provide. Avoid marketing fluff. State exactly what you do and who you do it for.</li>
                <li><strong>2. Service area with geographic specifics.</strong> List every city, county, or region you serve. &quot;We serve the greater Phoenix metro area including Scottsdale, Tempe, Mesa, Chandler, and Gilbert&quot; beats &quot;we serve the local area.&quot;</li>
                <li><strong>3. Team member bios with verifiable credentials.</strong> Real names, job titles, certifications, years of experience, and professional backgrounds. AI cross-references these against LinkedIn, industry directories, and licensing databases.</li>
                <li><strong>4. NAP consistency (Name, Address, Phone).</strong> Your business name, physical address, and phone number must match exactly across your About page, footer, Google Business Profile, and every directory listing.</li>
                <li><strong>5. Quantifiable achievements.</strong> Number of projects completed, years in business, customer satisfaction rates from verified review platforms. AI favors specific, verifiable numbers over vague claims.</li>
                <li><strong>6. Licensing and insurance details.</strong> License numbers, issuing authorities, and insurance providers. This transparency signals trustworthiness in ways that AI can independently verify.</li>
                <li><strong>7. Organization schema markup.</strong> Structured data that tells AI exactly what your business is, where it is located, and how to categorize it. Up to a 73% selection boost for AI Overview inclusion.</li>
              </ul>
            </div>

            {/* ── BAR CHART: IMPACT ── */}
            <div className="ae-bar-group not-prose">
              <h3>Relative Impact on AI Trust Score</h3>
              <div className="ae-bar-item" style={{ ['--bar-width' as string]: '95%' }}>
                <span className="ae-bar-label">Schema Markup</span>
                <span className="ae-bar-value">73% boost</span>
              </div>
              <div className="ae-bar-item" style={{ ['--bar-width' as string]: '85%' }}>
                <span className="ae-bar-label">NAP Consistency</span>
                <span className="ae-bar-value">High</span>
              </div>
              <div className="ae-bar-item" style={{ ['--bar-width' as string]: '80%' }}>
                <span className="ae-bar-label">Verifiable Credentials</span>
                <span className="ae-bar-value">High</span>
              </div>
              <div className="ae-bar-item" style={{ ['--bar-width' as string]: '70%' }}>
                <span className="ae-bar-label">Team Bios</span>
                <span className="ae-bar-value">Medium-High</span>
              </div>
              <div className="ae-bar-item" style={{ ['--bar-width' as string]: '60%' }}>
                <span className="ae-bar-label">Quantifiable Achievements</span>
                <span className="ae-bar-value">Medium</span>
              </div>
              <div className="ae-bar-item" style={{ ['--bar-width' as string]: '55%' }}>
                <span className="ae-bar-label">Geographic Specifics</span>
                <span className="ae-bar-value">Medium</span>
              </div>
              <div className="ae-bar-item" style={{ ['--bar-width' as string]: '45%' }}>
                <span className="ae-bar-label">Business Identity</span>
                <span className="ae-bar-value">Baseline</span>
              </div>
            </div>

            {/* ── CTA 3 ── */}
            <div className="ae-cta-inline not-prose">
              <p>Want to know which of these seven elements your About page is missing? Speak to an AEO specialist: <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.</p>
              <Link href="/blindspot">Get Your Free Analysis &rarr;</Link>
            </div>

            {/* ── SECTION 4: AI vs HUMAN READING ── */}
            <span className="ae-section-label">The Difference</span>
            <h2>How AI Reads Your About Page Differently Than Humans</h2>

            <p>When a human visits your About page, they scan the layout, look at photos, and form an impression in a few seconds. When <Link href="/blog/what-content-does-chatgpt-read-on-my-website">ChatGPT reads your website</Link>, it strips away every visual element and processes only the plain text. No images, no CSS, no JavaScript interactions. One client per city. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">See if your market is available.</a></p>

            {/* ── COMPARISON TABLE ── */}
            <div className="ae-comparison-table not-prose">
              <h3>Human Visitor vs AI Platform: What Gets Processed</h3>
              <table>
                <thead>
                  <tr>
                    <th>Element</th>
                    <th>Human Sees</th>
                    <th>AI Processes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Team photos</td>
                    <td>Faces, expressions, professionalism</td>
                    <td>Nothing (invisible to AI)</td>
                  </tr>
                  <tr>
                    <td>Names in image overlays</td>
                    <td>Team member names</td>
                    <td>Nothing (text locked in images)</td>
                  </tr>
                  <tr>
                    <td>HTML text bios</td>
                    <td>Team member details</td>
                    <td>Full text, cross-referenced against LinkedIn</td>
                  </tr>
                  <tr>
                    <td>Interactive animations</td>
                    <td>Engagement, visual appeal</td>
                    <td>Nothing (JavaScript ignored)</td>
                  </tr>
                  <tr>
                    <td>Schema markup</td>
                    <td>Nothing (invisible to humans)</td>
                    <td>Structured entity data, verified and indexed</td>
                  </tr>
                  <tr>
                    <td>Page headings (H1-H6)</td>
                    <td>Visual hierarchy</td>
                    <td>Content structure, topic mapping</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>This creates a real problem for businesses that invested heavily in visual design. A stunning About page with minimal text content is functionally invisible to AI. Meanwhile, a text-rich About page with clear headings, detailed bios, and structured content will outperform a design-heavy page every time in the AI context. Check where you stand: <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free Blind Spot Scan.</a></p>

            <div className="ae-takeaway not-prose">
              <strong>Takeaway:</strong> Optimizing for AI does not mean sacrificing design. It means making sure the information AI needs is present in the HTML text, not locked inside images or interactive elements. You can still have a visually appealing page. You just need to ensure the text layer is comprehensive enough to stand on its own.
            </div>

            {/* ── CTA 4 ── */}
            <div className="ae-cta-inline not-prose">
              <p>See exactly how AI reads your About page right now, text-only view included. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Schedule a free 30-min call.</a></p>
              <Link href="/blindspot">Get Your Free AI Readability Report &rarr;</Link>
            </div>

            {/* ── SECTION 5: CROSS-REFERENCING ── */}
            <span className="ae-section-label">The Trap</span>
            <h2>The Cross-Referencing Problem Most Businesses Miss</h2>

            <p>AI platforms do not take your About page at face value. They cross-reference every claim against other sources on the web. This is where most businesses fail without realizing it. Your About page says you were founded in 2015, but your Yelp profile says 2017. Your website says you serve five cities, but your Google Business Profile only lists three. Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> for a custom strategy.</p>

            <div className="ae-quote not-prose">
              <p>Directory listing accuracy accounts for roughly 13% of AI visibility scoring. That figure nearly doubled compared to traditional Google local ranking weight. The listings most businesses set up once and forgot about are now playing a real role in whether AI recommends them. Questions? Call <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.</p>
            </div>

            {/* ── TIMELINE: CROSS-REFERENCING FLOW ── */}
            <div className="ae-timeline not-prose">
              <h3>How AI Cross-References Your About Page</h3>
              <div className="ae-timeline-item">
                <div className="ae-timeline-marker">1</div>
                <div className="ae-timeline-content">
                  <strong>Initial Crawl</strong>
                  <p>AI reads your About page and extracts entity data: business name, address, phone, team, credentials. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Secure your territory before a competitor does.</a></p>
                </div>
              </div>
              <div className="ae-timeline-item">
                <div className="ae-timeline-marker">2</div>
                <div className="ae-timeline-content">
                  <strong>Directory Check</strong>
                  <p>AI compares your claims against Google Business Profile, Yelp, BBB, LinkedIn, and industry directories. <a href="https://theanswerengine.ai/blindspot" className="cta-inline">See your AI visibility score — free.</a></p>
                </div>
              </div>
              <div className="ae-timeline-item">
                <div className="ae-timeline-marker">3</div>
                <div className="ae-timeline-content">
                  <strong>Consistency Scoring</strong>
                  <p>Matching data across sources increases trust. Discrepancies reduce confidence in recommending you. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book your free consultation here.</a></p>
                </div>
              </div>
              <div className="ae-timeline-item">
                <div className="ae-timeline-marker">4</div>
                <div className="ae-timeline-content">
                  <strong>Citation Decision</strong>
                  <p>AI decides whether your business is trustworthy enough to recommend by name or whether to cite a competitor instead. Contact us at <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>
                </div>
              </div>
            </div>

            <p>Before you optimize your About page, audit your entire web presence for consistency. Every directory, every social profile, every mention of your business should align with what your About page says. AI platforms are remarkably good at spotting discrepancies, and discrepancies reduce their confidence in recommending you. Reach us at <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.</p>

            {/* ── CTA 5 ── */}
            <div className="ae-cta-inline not-prose">
              <p>We will audit your listings and About page for inconsistencies AI is penalizing. We work with one business per market. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Check if yours is still open.</a></p>
              <Link href="/blindspot">Get Your Free Consistency Audit &rarr;</Link>
            </div>

            {/* ── SECTION 6: SCHEMA MARKUP ── */}
            <span className="ae-section-label">The Multiplier</span>
            <h2>Schema Markup: The Hidden Multiplier</h2>

            <p>Adding Organization schema to your About page is one of the highest-impact changes you can make. Schema markup tells AI platforms exactly what your business is, in a structured format they can parse instantly. While ChatGPT does not read JSON-LD schema directly during browsing sessions, schema data feeds into the Bing search index that ChatGPT references when generating responses. Find your gaps with a <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free AERO scan.</a></p>

            {/* ── CHEAT SHEET: SCHEMA ── */}
            <div className="ae-cheat-sheet not-prose">
              <h3>Essential Schema Properties for Your About Page</h3>
              <ul>
                <li><strong>@type:</strong> LocalBusiness (or specific subtype like Plumber, Dentist, RealEstateAgent)</li>
                <li><strong>name:</strong> Your full legal business name</li>
                <li><strong>address:</strong> Complete physical address with street, city, state, ZIP</li>
                <li><strong>telephone:</strong> Direct phone number in E.164 format</li>
                <li><strong>foundingDate:</strong> Year your business was established</li>
                <li><strong>numberOfEmployees:</strong> Team size range</li>
                <li><strong>areaServed:</strong> Cities, counties, or regions you serve</li>
                <li><strong>sameAs:</strong> Links to all verified social profiles</li>
                <li><strong>Person schema:</strong> Name, jobTitle, and credentials for key team members</li>
              </ul>
            </div>

            <p>Content with structured data, citations, and verifiable statistics achieves 30% to 40% higher visibility in AI responses. This makes schema markup not just a technical nicety but a competitive requirement. If your competitors have schema on their About pages and you do not, AI platforms will have an easier time understanding and citing them instead of you. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Schedule a free call</a> to see where you stand.</p>

            {/* ── CTA 6 ── */}
            <div className="ae-cta-inline not-prose">
              <p>Questions about schema markup? Talk to our team directly. Send your questions to <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>
              <a href="tel:+12134442229">Call (213) 444-2229 &rarr;</a>
            </div>

            {/* ── SECTION 7: MISTAKES ── */}
            <span className="ae-section-label">The Pitfalls</span>
            <h2>Common About Page Mistakes That Kill AI Trust</h2>

            <p>Beyond missing elements, there are active mistakes that damage your About page&apos;s AI performance. Avoid these if you want AI platforms to take your business seriously. Call <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> for a free consultation.</p>

            {/* ── PROS/CONS ── */}
            <div className="ae-pros-cons not-prose">
              <div className="ae-pros">
                <h4>AI Trust Builders</h4>
                <ul>
                  <li>Specific founding year and project counts</li>
                  <li>Full license numbers with issuing authority</li>
                  <li>Named team bios with verifiable credentials</li>
                  <li>Physical address and direct phone number</li>
                  <li>Awards linked to verifiable sources</li>
                  <li>Consistent NAP across all platforms</li>
                </ul>
              </div>
              <div className="ae-cons">
                <h4>AI Trust Killers</h4>
                <ul>
                  <li>Generic mission statements any competitor could use</li>
                  <li>Stock photos with no real team names in text</li>
                  <li>Contact forms with no address or phone</li>
                  <li>Outdated information from years ago</li>
                  <li>Unverifiable claims like &quot;#1 rated&quot; with no source</li>
                  <li>Inconsistent data across directories</li>
                </ul>
              </div>
            </div>

            <div className="ae-callout not-prose">
              <strong>Warning:</strong> Every unverifiable claim on your About page is a trust signal working against you. When AI tries to confirm &quot;#1 rated plumber in Denver&quot; and cannot find the source, it reduces its confidence in your entire page, not just that one claim.
            </div>

            {/* ── CTA 7 ── */}
            <div className="ae-cta-inline not-prose">
              <p>We will flag every trust killer on your About page. Free, no strings attached. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Claim your market territory — one client per area.</a></p>
              <Link href="/blindspot">Get Your Free Trust Audit &rarr;</Link>
            </div>

            {/* ── SECTION 8: OPTIMIZATION CHECKLIST ── */}
            <span className="ae-section-label">Action Plan</span>
            <h2>Your About Page Optimization Checklist</h2>

            <p>Here is a practical checklist you can work through today. Each item directly feeds the trust signals AI platforms evaluate when deciding whether to <Link href="/blog/get-cited-chatgpt-local-business-guide">cite your business in AI responses</Link>. <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Run your free AI Blind Spot Scan.</a></p>

            {/* ── COMPARISON TABLE: CHECKLIST ── */}
            <div className="ae-comparison-table not-prose">
              <h3>About Page Optimization Checklist</h3>
              <table>
                <thead>
                  <tr>
                    <th>Element</th>
                    <th>Status Check</th>
                    <th>Impact Level</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Full legal business name matching all directories</td>
                    <td>Matches everywhere?</td>
                    <td>Critical</td>
                  </tr>
                  <tr>
                    <td>Physical address with city, state, ZIP</td>
                    <td>In HTML text, not just images?</td>
                    <td>Critical</td>
                  </tr>
                  <tr>
                    <td>Direct phone number</td>
                    <td>Clickable tel: link?</td>
                    <td>Critical</td>
                  </tr>
                  <tr>
                    <td>Founding year and company history</td>
                    <td>Specific year, not vague?</td>
                    <td>High</td>
                  </tr>
                  <tr>
                    <td>Complete service area</td>
                    <td>Specific cities listed?</td>
                    <td>High</td>
                  </tr>
                  <tr>
                    <td>Team bios with credentials</td>
                    <td>Real names, verifiable titles?</td>
                    <td>High</td>
                  </tr>
                  <tr>
                    <td>License numbers and authorities</td>
                    <td>Full numbers, not just &quot;licensed&quot;?</td>
                    <td>High</td>
                  </tr>
                  <tr>
                    <td>Quantifiable achievements</td>
                    <td>Specific numbers, not &quot;many&quot;?</td>
                    <td>Medium</td>
                  </tr>
                  <tr>
                    <td>Organization and Person schema</td>
                    <td>Valid JSON-LD in page source?</td>
                    <td>Critical</td>
                  </tr>
                  <tr>
                    <td>NAP consistency audit</td>
                    <td>Checked across all profiles?</td>
                    <td>Critical</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* ── CTA 8 ── */}
            <div className="ae-cta-inline not-prose">
              <p>Need help running through this checklist? Email us and we will walk you through it. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a free 30-minute strategy call.</a></p>
              <a href="mailto:support@theanswerengine.ai">Email support@theanswerengine.ai &rarr;</a>
            </div>

            {/* ── SECTION 9: BEFORE AND AFTER ── */}
            <span className="ae-section-label">Real Examples</span>
            <h2>Before and After: What AI-Optimized About Pages Look Like</h2>

            <p>The difference between a generic About page and an AI-optimized one is not about length or design. It is about the density of verifiable, structured information that AI can extract and cross-reference. Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> to get started.</p>

            {/* ── COMPARISON TABLE: BEFORE/AFTER ── */}
            <div className="ae-comparison-table not-prose">
              <h3>About Page Text: Before vs After Optimization</h3>
              <table>
                <thead>
                  <tr>
                    <th>Section</th>
                    <th>Before (Generic)</th>
                    <th>After (AI-Optimized)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Opening</td>
                    <td>&quot;We are a family-owned business committed to excellence&quot;</td>
                    <td>&quot;Smith Plumbing Inc., founded in 2012, serving 14 cities across the DFW metro&quot;</td>
                  </tr>
                  <tr>
                    <td>Team</td>
                    <td>Stock photo grid, no names in HTML</td>
                    <td>Named bios with license numbers, years of experience, specializations</td>
                  </tr>
                  <tr>
                    <td>Credentials</td>
                    <td>&quot;Fully licensed and insured&quot;</td>
                    <td>&quot;TDLR License #M-42891, EPA Lead-Safe RRP Certified, $2M liability coverage&quot;</td>
                  </tr>
                  <tr>
                    <td>Contact</td>
                    <td>Contact form only</td>
                    <td>Address, phone, email, hours, all matching Google Business Profile</td>
                  </tr>
                  <tr>
                    <td>Schema</td>
                    <td>None</td>
                    <td>LocalBusiness + Person schema with sameAs links to 6 profiles</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* ── CTA 9 ── */}
            <div className="ae-cta-inline not-prose">
              <p>Want to see what your About page looks like to AI right now? We will show you. <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a></p>
              <Link href="/blindspot">Get Your Free Before/After Analysis &rarr;</Link>
            </div>

            {/* ── SECTION 10: WORD COUNT ── */}
            <span className="ae-section-label">The Sweet Spot</span>
            <h2>How Long Should Your About Page Be?</h2>

            <p>Aim for 800 to 1,500 words of substantive content. Too short and AI platforms will not find enough information to build confidence in your authority. Too long and your key signals get diluted. The goal is density of verifiable claims, not raw word count.</p>

            {/* ── BAR CHART: WORD COUNT ── */}
            <div className="ae-bar-group not-prose">
              <h3>About Page Length vs AI Trust Signal Density</h3>
              <div className="ae-bar-item" style={{ ['--bar-width' as string]: '30%' }}>
                <span className="ae-bar-label">Under 300 words</span>
                <span className="ae-bar-value">Too thin</span>
              </div>
              <div className="ae-bar-item" style={{ ['--bar-width' as string]: '60%' }}>
                <span className="ae-bar-label">300-800 words</span>
                <span className="ae-bar-value">Minimum viable</span>
              </div>
              <div className="ae-bar-item" style={{ ['--bar-width' as string]: '95%' }}>
                <span className="ae-bar-label">800-1,500 words</span>
                <span className="ae-bar-value">Optimal range</span>
              </div>
              <div className="ae-bar-item" style={{ ['--bar-width' as string]: '65%' }}>
                <span className="ae-bar-label">1,500-3,000 words</span>
                <span className="ae-bar-value">Signal dilution</span>
              </div>
              <div className="ae-bar-item" style={{ ['--bar-width' as string]: '35%' }}>
                <span className="ae-bar-label">3,000+ words</span>
                <span className="ae-bar-value">Diminishing returns</span>
              </div>
            </div>

            <div className="ae-takeaway not-prose">
              <strong>Takeaway:</strong> Every sentence on your About page should either establish a verifiable fact about your business or provide context that helps AI categorize and recommend you. If a sentence could appear on any competitor&apos;s page without changing, cut it.
            </div>

            {/* ── CTA 10 ── */}
            <div className="ae-cta-inline not-prose">
              <p>Not sure if your About page hits the right length? Let us analyze it.</p>
              <Link href="/blindspot">Get Your Free Content Analysis &rarr;</Link>
            </div>

            {/* ── CTA BLOCK ── */}
            <div className="ae-cta-block not-prose">
              <h3>Your About Page Is Either Helping or Hurting You</h3>
              <p>There is no neutral ground. AI platforms are reading your About page right now and making decisions about whether to recommend you. Every missing signal is a missed recommendation. Every inconsistency is a reason to cite your competitor instead.</p>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Link href="/blindspot" className="inline-block bg-[#F27D24] text-white font-semibold px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors text-center">
                  Get Your Free Blind Spot Report
                </Link>
                <a href="tel:+12134442229" className="inline-block border border-[#F27D24] text-[#F27D24] font-semibold px-6 py-3 rounded-lg hover:bg-[#F27D24]/10 transition-colors text-center">
                  Call (213) 444-2229
                </a>
              </div>
            </div>

          </div>

          {/* FAQ Section */}
          <section className="mt-16" aria-labelledby="faq-heading">
            <h2
              id="faq-heading"
              className="text-2xl font-bold text-white mb-8 font-plus-jakarta"
            >
              Frequently Asked Questions
            </h2>
            <div className="grid gap-6 md:grid-cols-2">

              <div className="p-6 rounded-xl border border-gray-800 bg-gray-900">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Why does my About page matter for AI recommendations?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  AI platforms like ChatGPT, Perplexity, and Google AI evaluate
                  your About page to verify your business identity, credentials,
                  and authority. A well-structured About page with clear entity
                  information gives AI the trust signals it needs to confidently
                  recommend your business over competitors.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-gray-800 bg-gray-900">
                <h3 className="text-lg font-semibold text-white mb-3">
                  What E-E-A-T signals should my About page include?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Your About page should demonstrate Experience (years in
                  business, projects completed), Expertise (certifications,
                  training), Authoritativeness (awards, media mentions), and
                  Trustworthiness (physical address, phone number, licensing
                  information). These signals help AI verify your credibility.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-gray-800 bg-gray-900">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Does ChatGPT actually read my About page?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Yes. When ChatGPT browses your website or pulls from the Bing
                  search index, your About page is one of the primary pages it
                  uses to understand who you are. The plain text content directly
                  influences whether ChatGPT considers your business
                  authoritative enough to recommend.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-gray-800 bg-gray-900">
                <h3 className="text-lg font-semibold text-white mb-3">
                  How long should my About page be for AI optimization?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Aim for 800 to 1,500 words of substantive content. Too short
                  and AI will not find enough information to build confidence in
                  your authority. Too long and key signals get diluted. Focus on
                  the density of verifiable claims rather than word count alone.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-gray-800 bg-gray-900">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Should I include team member bios on my About page?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Yes. Individual team bios with real names, credentials, and
                  professional backgrounds are among the strongest E-E-A-T
                  signals you can provide. AI platforms cross-reference these
                  details against LinkedIn, industry directories, and other
                  public sources to verify authenticity.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-gray-800 bg-gray-900">
                <h3 className="text-lg font-semibold text-white mb-3">
                  What schema markup should I add to my About page?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Add Organization schema with your business name, address,
                  phone, founding date, and social profiles. Include Person
                  schema for key team members. Schema markup delivers up to a
                  73% selection boost for AI Overview inclusion, making it one of
                  the highest-impact optimizations available.
                </p>
              </div>

            </div>
          </section>

          {/* ── CTA 11 ── */}
          <div className="ae-cta-inline not-prose mt-12">
            <p>Still have questions about optimizing your About page for AI?</p>
            <a href="mailto:support@theanswerengine.ai">Email us at support@theanswerengine.ai &rarr;</a>
          </div>

          {/* ── CTA 12 ── */}
          <div className="ae-cta-inline not-prose mt-6">
            <p>Prefer a quick phone call? We are happy to talk through your specific situation.</p>
            <a href="tel:+12134442229">Call (213) 444-2229 &rarr;</a>
          </div>

          {/* ── FINAL CTA ── */}
          <div className="ae-final-cta not-prose mt-16">
            <h2>Is Your About Page Helping or Hurting Your AI Visibility?</h2>
            <p>Most businesses have no idea what AI platforms actually see when they visit their website. We will show you exactly how your About page reads to ChatGPT, where your trust signals are strong, and where the gaps are costing you recommendations. Free analysis, no commitment.</p>
            <Link href="/blindspot" className="ae-final-cta-pulse">
              Get Your Free Blind Spot Report &rarr;
            </Link>
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

          {/* ── AUTHOR CARD ── */}
          <div className="ae-author-card not-prose mt-12">
            <div className="w-12 h-12 rounded-full bg-[#F27D24] flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
              AE
            </div>
            <div>
              <p className="text-white font-semibold">Justin Borges</p>
              <p className="text-gray-400 text-sm mt-1">
                Helping local service businesses stay visible in an AI-first world. We research how AI platforms evaluate and recommend businesses, then turn those insights into actionable strategies.
              </p>
              <div className="flex flex-wrap gap-4 mt-3 text-sm">
                <Link href="/blindspot" className="text-[#F27D24] hover:underline">Free AI Visibility Audit</Link>
                <a href="tel:+12134442229" className="text-gray-400 hover:text-white transition-colors">(213) 444-2229</a>
                <a href="mailto:support@theanswerengine.ai" className="text-gray-400 hover:text-white transition-colors">support@theanswerengine.ai</a>
              </div>
            </div>
          </div>

        </div>
      </main>
    </>
  )
}
