import type { Metadata } from 'next'
import Link from 'next/link'

export const revalidate = 86400
export const dynamic = 'force-static'
export const dynamicParams = true

const title = 'How Law Firms Get Found on AI Search'
const titleWithSuffix = `${title} | The Answer Engine`
const description = '60% of legal searches end without a click. Law firms face the strictest AI scrutiny. Here is what separates firms AI recommends from those it ignores.'
const slug = 'how-law-firms-get-found-on-ai-search'
const publishDate = '2026-04-01'

export const metadata: Metadata = {
  title: titleWithSuffix,
  description,
  keywords: ['law firm AI search', 'attorney AI visibility', 'legal AI marketing', 'YMYL legal content', 'E-E-A-T lawyers', 'answer engine optimization law firms', 'ChatGPT lawyer recommendations', 'AI search law firm', 'legal AI optimization', 'law firm ChatGPT visibility'],
  authors: [{ name: 'Justin Borges', url: 'https://theanswerengine.ai/about' }],
  openGraph: {
    title: titleWithSuffix,
    description,
    type: 'article',
    publishedTime: publishDate,
    modifiedTime: publishDate,
    authors: ['https://theanswerengine.ai/about'],
    url: `https://theanswerengine.ai/blog/${slug}`,
    images: [{ url: `https://theanswerengine.ai/blog/${slug}.webp`, width: 1200, height: 630, alt: title }],
    siteName: 'The Answer Engine',
  },
  twitter: {
    card: 'summary_large_image',
    title: titleWithSuffix,
    description,
    images: [`https://theanswerengine.ai/blog/${slug}.webp`],
    creator: '@theanswerengine',
  },
  alternates: {
    canonical: `https://theanswerengine.ai/blog/${slug}`,
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `https://theanswerengine.ai/blog/${slug}#article`,
      "headline": title,
      "description": description,
      "image": `https://theanswerengine.ai/blog/${slug}.webp`,
      "datePublished": publishDate,
      "dateModified": publishDate,
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
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://theanswerengine.ai/blog/${slug}`
      }
    },
    {
      "@type": "FAQPage",
      "@id": `https://theanswerengine.ai/blog/${slug}#faq`,
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Why do law firms face stricter AI scrutiny than other businesses?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Legal content falls under YMYL (Your Money or Your Life) classification because incorrect legal information can cause direct, measurable harm to a person's freedom, finances, or family. AI platforms apply the strictest quality filters to legal queries, requiring verifiable bar admissions, jurisdictional specificity, practice area depth, and third-party authority signals before recommending any firm. This is the same tier as medical content and higher than most other business categories."
          }
        },
        {
          "@type": "Question",
          "name": "Does ranking on Google mean my law firm will appear in AI search?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Traditional Google rankings and AI visibility are fundamentally different systems. A firm can rank on the first page of Google and still be completely invisible to ChatGPT, Perplexity, and Claude. AI platforms evaluate content differently: they check for crawlable text, structured data, cross-platform consistency, and E-E-A-T signals that many high-ranking law firm websites lack. A JavaScript-rendered site that ranks well on Google may appear as a blank page to AI crawlers."
          }
        },
        {
          "@type": "Question",
          "name": "What does AI look for before recommending a law firm?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "AI platforms cross-reference multiple signals: verified bar admissions and jurisdictional licensing, dedicated practice area pages with substantive legal content, consistent firm information across legal directories like Avvo, Martindale-Hubbell, and Justia, client testimonials published as crawlable HTML text, structured data markup, and content freshness. Firms missing any of these signals are filtered out before AI generates a recommendation."
          }
        },
        {
          "@type": "Question",
          "name": "Why does ChatGPT recommend so few law firms?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Research shows ChatGPT recommends only 1.2% of local businesses. For law firms, that number is even smaller because legal queries trigger YMYL scrutiny. AI requires verifiable attorney credentials, jurisdictional authority, practice area depth, and consistent directory presence before it will cite a firm. Most law firm websites fail multiple criteria simultaneously: thin practice area pages, JavaScript-rendered content invisible to crawlers, reviews trapped behind widgets, and missing structured data."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take for a law firm to become visible in AI search?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most law firms begin appearing in AI recommendations within 60 to 90 days after implementing a structured optimization approach. This involves building dedicated practice area pages with substantive legal content, ensuring consistent NAP data across legal directories, publishing client testimonials as crawlable text, and implementing proper schema markup. Content updated within the last 2 months receives significantly more AI citations, making regular updates a key accelerator."
          }
        },
        {
          "@type": "Question",
          "name": "Can a solo attorney or small firm compete with large firms in AI search?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. AI platforms prioritize relevance, content depth, and trust signals over firm size. A solo practitioner with deep, well-structured practice area pages, verified bar credentials, genuine client testimonials in plain HTML, and consistent directory listings can outperform a large firm relying on a generic corporate website. AI rewards demonstrated expertise in specific practice areas over brand recognition or headcount."
          }
        },
        {
          "@type": "Question",
          "name": "What is the biggest mistake law firms make with AI visibility?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The most common mistake is relying on a template website that looks professional to humans but is invisible to AI. Many law firm website builders produce JavaScript-heavy sites that AI crawlers cannot read. The firm may have detailed practice area descriptions, attorney bios, and client reviews, but none of it registers with AI because the content only renders in a browser. The second biggest mistake is treating all practice areas as a single bullet-point list instead of building dedicated, substantive pages for each area of law."
          }
        },
        {
          "@type": "Question",
          "name": "Does having a blog help law firms get recommended by AI?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A blog helps only if it publishes original legal analysis attributed to a named, bar-admitted attorney. Generic legal articles without author attribution are treated as unverified legal information under YMYL guidelines. AI platforms look for content that demonstrates genuine legal experience, references specific jurisdictional nuances, and addresses the questions potential clients actually ask. A blog full of thin, template content can actually hurt by diluting your site's overall authority signals."
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
      "description": "Answer Engine Optimization agency helping businesses get cited by AI platforms."
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://theanswerengine.ai/" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://theanswerengine.ai/blog" },
        { "@type": "ListItem", "position": 3, "name": title }
      ]
    }
  ]
}

function Breadcrumb() {
  return (
    <nav className="text-sm text-gray-500 mb-8">
      <Link href="/" className="hover:text-white transition-colors">Home</Link>
      <span className="mx-2">&rsaquo;</span>
      <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
      <span className="mx-2">&rsaquo;</span>
      <span className="text-gray-400">Law Firms &amp; AI Search</span>
    </nav>
  )
}

export default function HowLawFirmsGetFoundOnAISearch() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-[#FFF]">
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-white/5">
          <div className="absolute inset-0 bg-gradient-to-br from-[#F27D24]/10 via-transparent to-transparent" />
          <svg className="absolute inset-0 w-full h-full opacity-[0.03]" aria-hidden="true">
            <defs>
              <pattern id="hero-grid-116" width="48" height="48" patternUnits="userSpaceOnUse">
                <path d="M 24 8 L 24 18 M 19 13 L 29 13" fill="none" stroke="white" strokeWidth="0.7" />
                <path d="M 48 0 L 0 0 0 48" fill="none" stroke="white" strokeWidth="0.3" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-grid-116)" />
          </svg>
          <div className="relative max-w-4xl mx-auto px-6 py-16 sm:py-24">
            <Breadcrumb />
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 bg-[#F27D24]/10 border border-[#F27D24]/30">
              <span className="text-sm font-semibold tracking-wider uppercase text-[#F27D24]">Industry Guides</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight font-plus-jakarta">
              How Law Firms Get Found on{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F27D24] to-orange-400">AI Search</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
              60% of legal searches now end without a click. AI is answering the questions that used to send clients to your website. The firms that understand what AI evaluates are capturing clients their competitors never even see.
            </p>
            <div className="flex flex-wrap gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>April 1, 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>18 min read</span>
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

        {/* Article Body */}
        <article className="max-w-4xl mx-auto px-6 py-12 sm:py-16">
          <div className="prose prose-invert prose-lg max-w-none prose-headings:font-plus-jakarta prose-headings:text-white prose-p:text-gray-300 prose-a:text-[#F27D24] prose-a:no-underline hover:prose-a:underline prose-strong:text-white">

            {/* STATS GRID */}
            <div className="ae-stats-grid not-prose">
              <div className="ae-stat-card">
                <div className="ae-stat-value ae-accent">60%</div>
                <div className="ae-stat-label">of legal searches now end without a click (zero-click)</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-value ae-accent">42%</div>
                <div className="ae-stat-label">median drop in search impressions for law firms after AI Overviews expanded</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-value ae-accent">1.2%</div>
                <div className="ae-stat-label">of local businesses are recommended by ChatGPT</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-value ae-accent">79%</div>
                <div className="ae-stat-label">traffic loss for sites pushed below AI Overviews</div>
              </div>
            </div>

            {/* TABLE OF CONTENTS */}
            <div className="ae-toc not-prose">
              <div className="ae-toc-title">Table of Contents</div>
              <ol>
                <li><a href="#client-discovery">The New Client Discovery Channel for Law Firms</a></li>
                <li><a href="#ymyl-legal">Why Legal Content Gets the Highest AI Scrutiny</a></li>
                <li><a href="#template-trap">The Template Trap: Why Most Law Firm Websites Fail AI</a></li>
                <li><a href="#trust-signals">The Trust Signals AI Evaluates Before Recommending a Lawyer</a></li>
                <li><a href="#practice-area-depth">Practice Area Authority: Depth Over Breadth</a></li>
                <li><a href="#directory-ecosystem">The Legal Directory Ecosystem AI Actually Reads</a></li>
                <li><a href="#reviews-layer">The Review Layer AI Checks for Lawyers</a></li>
                <li><a href="#technical-barriers">Technical Barriers Hiding Law Firms From AI</a></li>
                <li><a href="#content-freshness">Why Stale Legal Content Destroys AI Visibility</a></li>
                <li><a href="#cheat-sheet">AI Visibility Cheat Sheet for Law Firms</a></li>
                <li><a href="#faq">Frequently Asked Questions</a></li>
              </ol>
            </div>

            {/* SECTION 1: CLIENT DISCOVERY */}
            <span className="ae-section-label" id="client-discovery">The Shift</span>
            <h2>The New Client Discovery Channel for Law Firms</h2>

            <p>A person facing a DUI charge, a custody dispute, or a workplace injury used to open Google and scan through ten blue links or click on a paid ad. That behavior is changing at a pace most managing partners have not yet grasped. Today, that same person opens ChatGPT and asks: &quot;What kind of lawyer do I need for a wrongful termination case in Dallas, and who is reputable?&quot;</p>

            <p>The AI responds with a direct, conversational answer. It explains the difference between employment law and general civil litigation, outlines what the person should look for in an attorney, and often names specific firms with reasoning. The potential client reads the answer, visits one website, and calls. The discovery process that once took days of research, referral calls, and comparison shopping now takes minutes.</p>

            <div className="ae-quote not-prose">
              <p>60% of legal searches now end without a click. The prospective client gets their answer from AI and either acts on it or moves on. If your firm is not part of that answer, you are not in the running.</p>
            </div>

            <p>Gartner projects that search engine volume could decline 25% by 2026 as chat-based discovery tools gain traction. For law firms, the impact is already measurable. Authoritas Analytics found that a site previously ranked first could lose about 79% of its traffic when results appear below an AI Overview. This is not a theoretical future concern. It is happening now, in every practice area, in every market.</p>

            <p>The firms that understand how AI selects which lawyers to recommend are capturing cases their competitors never even know existed. The firms relying solely on Google rankings and paid ads are watching their intake numbers erode without understanding why.</p>

            {/* CTA 1 */}
            <div className="ae-cta-inline not-prose">
              <p>Find out if AI platforms are recommending your competitors instead of your firm.</p>
              <Link href="/blindspot">Get Your Free Blind Spot Report &rarr;</Link>
            </div>

            {/* SECTION 2: YMYL LEGAL */}
            <span className="ae-section-label" id="ymyl-legal">YMYL Standards</span>
            <h2>Why Legal Content Gets the Highest AI Scrutiny</h2>

            <p>Legal information sits at the top of the YMYL (Your Money or Your Life) classification alongside medical content. Incorrect legal information can directly affect a person&apos;s freedom, financial stability, custody of their children, or immigration status. AI platforms understand this, and they treat legal queries with the strictest quality filters available.</p>

            <p>When a potential client asks AI about a legal matter or requests a lawyer recommendation, the platform runs the query through multiple quality gates before generating a response. These gates check for attorney credentials, jurisdictional authority, content accuracy, source reliability, and content freshness. Law firms that do not satisfy these gates are excluded from AI responses entirely, regardless of their Google ranking or advertising spend.</p>

            <h3>E-E-A-T at Maximum Scrutiny for Legal Content</h3>

            <p>Google&apos;s E-E-A-T framework (Experience, Expertise, Authoritativeness, Trustworthiness) was built for exactly this category. AI platforms apply it with maximum intensity for legal queries, and each component carries specific requirements for law firms.</p>

            <div className="ae-callout ae-callout-info not-prose">
              <p><strong>Experience</strong> means demonstrated legal practice: case results, years handling specific matter types, courtroom presence, and content that reflects hands-on work with real clients. <strong>Expertise</strong> requires verifiable credentials: bar admissions, practice area certifications, law school, clerkships, and professional recognitions. <strong>Authoritativeness</strong> is measured by the firm&apos;s presence across legal directories, bar association memberships, published articles, speaking engagements, and citations from other authoritative legal sources. <strong>Trustworthiness</strong> is the foundation: HTTPS, verifiable contact information, transparent fee structures, and content that cites statutes and case law rather than making unsupported claims.</p>
            </div>

            <p>The December 2025 Google core update enforced these YMYL requirements with a precision the legal market had not previously experienced. Thin attorney bios, vague &quot;Our Team&quot; pages, and generic practice area descriptions that once passed muster are now actively penalizing firms in both traditional and AI search results.</p>

            <p>For a deeper look at how AI platforms evaluate business authority across industries, see our guide on <Link href="/blog/how-claude-ai-evaluates-business-authority">how Claude AI evaluates business authority</Link>.</p>

            {/* CTA 2 */}
            <div className="ae-cta-inline not-prose">
              <p>See how your firm scores on E-E-A-T signals compared to competitors in your market.</p>
              <Link href="/blindspot">Run Your Free AI Visibility Scan &rarr;</Link>
            </div>

            {/* SECTION 3: TEMPLATE TRAP */}
            <span className="ae-section-label" id="template-trap">The Template Problem</span>
            <h2>The Template Trap: Why Most Law Firm Websites Fail AI</h2>

            <p>The legal industry has a unique problem that most firms do not realize exists. The majority of law firm websites are built on industry-specific website platforms that produce visually polished, professionally designed sites. They look authoritative to a human visitor. They are often invisible to AI.</p>

            <p>These platforms generate JavaScript-heavy pages that render beautifully in a web browser but deliver a blank page to AI crawlers. Your firm could have detailed practice area descriptions, partner biographies with decades of experience, and hundreds of client testimonials. None of it matters if the site relies on client-side JavaScript to render that content. AI crawlers do not execute JavaScript the way a browser does.</p>

            <div className="ae-callout ae-callout-orange not-prose">
              <p><strong>The template trap goes deeper than rendering.</strong> Law firm website templates produce structurally identical sites across competing firms. When AI encounters dozens of firms with the same page layout, the same section headers, and the same content structure, it has no basis for distinguishing one firm from another. Template uniformity actively works against differentiation in AI search.</p>
            </div>

            <p>The content problem is equally severe. Template law firm sites encourage thin content: a paragraph or two per practice area, a headshot with three bullet points per attorney, and a contact form. This gives AI almost nothing to work with. When a potential client asks &quot;Who is the best personal injury attorney in Phoenix for a trucking accident case?&quot;, AI needs substantive content that demonstrates deep expertise in trucking litigation, not a bullet point that says &quot;Personal Injury.&quot;</p>

            {/* DECISION MATRIX */}
            <table className="ae-comparison-table not-prose">
              <thead>
                <tr>
                  <th>Website Factor</th>
                  <th>Template Law Firm Site</th>
                  <th>AI-Optimized Law Firm Site</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Content rendering</td>
                  <td>JavaScript-rendered, blank to AI crawlers</td>
                  <td>Server-side HTML, fully visible to AI</td>
                </tr>
                <tr>
                  <td>Practice area pages</td>
                  <td>One page listing all areas in bullets</td>
                  <td>Dedicated page per practice area (1,500+ words)</td>
                </tr>
                <tr>
                  <td>Attorney bios</td>
                  <td>Photo, title, 3 bullet points</td>
                  <td>Bar admissions, case types, education, detailed experience</td>
                </tr>
                <tr>
                  <td>Client reviews</td>
                  <td>Embedded widget (JS-gated, invisible to AI)</td>
                  <td>Plain HTML testimonials on site</td>
                </tr>
                <tr>
                  <td>Site differentiation</td>
                  <td>Identical to dozens of competitors</td>
                  <td>Unique content structure and depth</td>
                </tr>
                <tr>
                  <td>Schema markup</td>
                  <td>None or minimal</td>
                  <td>Attorney, LegalService, FAQPage schema</td>
                </tr>
              </tbody>
            </table>

            {/* CTA 3 */}
            <div className="ae-cta-inline not-prose">
              <p>Want to know if your law firm website is falling into the template trap? Our report reveals it.</p>
              <Link href="/blindspot">Get Your Free Blind Spot Report &rarr;</Link>
            </div>

            {/* SECTION 4: TRUST SIGNALS */}
            <span className="ae-section-label" id="trust-signals">AI Evaluation</span>
            <h2>The Trust Signals AI Evaluates Before Recommending a Lawyer</h2>

            <p>AI platforms do not guess when recommending a law firm. They cross-reference your firm&apos;s information across multiple data sources and apply YMYL quality gates before generating any recommendation. Understanding what they evaluate reveals why most firms are invisible.</p>

            <h3>Credential Verification</h3>

            <p>When a potential client asks AI about a lawyer, the platform looks for verifiable credentials. Bar admissions with state-specific licensing, practice area certifications from recognized bodies, law school education, and professional associations are the baseline. AI cross-checks this information across your website, state bar records, legal directories, and professional networks.</p>

            <p>A firm that lists &quot;John Smith, Attorney&quot; without bar numbers, jurisdictions, education, or specific practice area certifications gives AI almost nothing to verify. Compare that to a bio that includes bar admissions in two states, a board certification in family law, membership in the American Academy of Matrimonial Lawyers, and specific case types handled. The second profile gives AI the confidence it needs to recommend that attorney for relevant queries.</p>

            <h3>Jurisdictional Specificity</h3>

            <p>Legal practice is inherently jurisdictional. AI understands this. When a user asks for a lawyer in a specific city or state, AI looks for firms with demonstrated jurisdictional authority: content that references local courts, state-specific statutes, county procedures, and regional legal nuances. A firm that writes generic legal content applicable anywhere signals to AI that it lacks genuine local expertise.</p>

            <div className="ae-callout ae-callout-orange not-prose">
              <p><strong>Jurisdictional authority is a differentiator AI heavily weights.</strong> A firm in Houston that references Harris County courthouse procedures, Texas Family Code sections, and local mediation requirements carries more weight for Houston-area queries than a nationally focused firm with generic content. AI rewards the specificity that clients actually need.</p>
            </div>

            <h3>Cross-Platform Consistency</h3>

            <p>AI measures your firm&apos;s reliability by checking consistency across platforms. Does your firm name match on Avvo, Martindale-Hubbell, Justia, Super Lawyers, and your website? Is the phone number identical? Are the practice areas listed accurately? Do the office addresses align?</p>

            <p>Inconsistencies signal unreliability. If Avvo lists you as a family law firm and your website emphasizes criminal defense, AI has lower confidence in your data. If your firm moved offices two years ago and three directories still show the old address, AI treats your entire profile as potentially outdated.</p>

            {/* CTA 4 */}
            <div className="ae-cta-inline not-prose">
              <p>Not sure which signals are helping or hurting your AI visibility? Our report maps every one.</p>
              <Link href="/blindspot">Get Your Free Blind Spot Report &rarr;</Link>
            </div>

            {/* SECTION 5: PRACTICE AREA DEPTH */}
            <span className="ae-section-label" id="practice-area-depth">Content Authority</span>
            <h2>Practice Area Authority: Depth Over Breadth</h2>

            <p>The single most impactful content decision a law firm can make for AI visibility is to stop treating practice areas as bullet points and start treating them as pillars of authority. AI needs depth. It needs dedicated pages for each practice area you serve, written with enough substantive legal knowledge to demonstrate genuine expertise.</p>

            <p>When a potential client asks &quot;Who is the best divorce attorney in Atlanta for a high-asset case?&quot;, AI needs a dedicated high-asset divorce page from your firm that addresses property division for complex estates, business valuation in divorce proceedings, retirement account division, and prenuptial agreement enforcement. A bullet point that says &quot;Divorce and Family Law&quot; does not compete with a firm that has built out this level of content.</p>

            <div className="ae-callout ae-callout-info not-prose">
              <p><strong>The hub-and-spoke model works powerfully for law firms.</strong> A central &quot;Family Law&quot; hub page links to dedicated spoke pages for divorce, child custody, child support, alimony, adoption, prenuptial agreements, and domestic violence protective orders. Each spoke page contains 1,500+ words of substantive content addressing the specific questions clients ask about that topic. This structure tells AI exactly what your firm handles and gives it the content depth to cite you for specific queries.</p>
            </div>

            <p>This is the same content architecture that works across industries. For more on this approach, see our guide on <Link href="/blog/does-having-a-blog-actually-help-ai-recommend-your-business">whether having a blog helps AI recommend your business</Link>.</p>

            {/* COMPARISON TABLE: CONTENT DEPTH */}
            <table className="ae-comparison-table not-prose">
              <thead>
                <tr>
                  <th>Content Approach</th>
                  <th>AI Impact</th>
                  <th>Client Impact</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Single page listing 12 practice areas</td>
                  <td>AI cannot cite for specific queries</td>
                  <td>Potential clients leave, unconvinced</td>
                </tr>
                <tr>
                  <td>Dedicated page per practice area (300 words)</td>
                  <td>AI registers the page but lacks confidence to cite</td>
                  <td>Surface-level trust, high bounce rate</td>
                </tr>
                <tr>
                  <td>Hub-and-spoke with 1,500+ words per spoke</td>
                  <td>AI cites for specific, high-intent queries</td>
                  <td>Deep trust, higher conversion rate</td>
                </tr>
              </tbody>
            </table>

            {/* CTA 5 */}
            <div className="ae-cta-inline not-prose">
              <p>Want to know how your practice area content compares to firms AI is already recommending?</p>
              <a href="tel:+12134442229">Call (213) 444-2229 for a Free AI Content Assessment &rarr;</a>
            </div>

            {/* SECTION 6: DIRECTORY ECOSYSTEM */}
            <span className="ae-section-label" id="directory-ecosystem">Directory Signals</span>
            <h2>The Legal Directory Ecosystem AI Actually Reads</h2>

            <p>Law firms have access to a directory ecosystem that is richer and more specialized than almost any other industry. This is a significant advantage for AI visibility, but only if those directories are properly maintained. AI platforms cross-reference multiple legal directories when evaluating whether to recommend a firm.</p>

            <p>The critical directories for legal AI visibility include Avvo, Martindale-Hubbell, Justia, FindLaw, Super Lawyers, Lawyers.com, the state bar association directory, and local bar association listings. Each platform serves a different function in AI&apos;s evaluation process. Avvo provides peer endorsements and client reviews. Martindale-Hubbell offers peer review ratings. State bar directories provide the credential verification AI needs for YMYL confidence.</p>

            {/* DECISION MATRIX */}
            <table className="ae-decision-matrix not-prose">
              <thead>
                <tr>
                  <th>Legal Directory</th>
                  <th>What AI Extracts</th>
                  <th>Priority</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>State Bar Directory</td>
                  <td>License verification, disciplinary record, admission date</td>
                  <td>Critical (YMYL verification)</td>
                </tr>
                <tr>
                  <td>Avvo</td>
                  <td>Peer endorsements, client reviews, practice areas, experience</td>
                  <td>Very High</td>
                </tr>
                <tr>
                  <td>Martindale-Hubbell</td>
                  <td>Peer review ratings, AV Preeminent designation</td>
                  <td>Very High</td>
                </tr>
                <tr>
                  <td>Justia</td>
                  <td>Practice areas, publications, case results</td>
                  <td>High</td>
                </tr>
                <tr>
                  <td>Super Lawyers</td>
                  <td>Selection status, practice area recognition</td>
                  <td>High</td>
                </tr>
                <tr>
                  <td>Google Business Profile</td>
                  <td>Reviews, hours, location (Google AI only)</td>
                  <td>High (Google AI Overviews)</td>
                </tr>
                <tr>
                  <td>Yelp</td>
                  <td>Client reviews in crawlable HTML</td>
                  <td>Medium-High</td>
                </tr>
              </tbody>
            </table>

            <p>The power of this ecosystem is in consistency. When AI sees the same firm name, the same phone number, the same practice areas, and the same attorney credentials across seven or eight legal directories plus your own website, it builds high confidence in your data. When it finds inconsistencies, that confidence drops rapidly.</p>

            {/* CTA 6 */}
            <div className="ae-cta-inline not-prose">
              <p>Discover which of your directory listings are helping and which are hurting your AI visibility.</p>
              <Link href="/blindspot">Check Your Directory Consistency &rarr;</Link>
            </div>

            {/* SECTION 7: REVIEWS */}
            <span className="ae-section-label" id="reviews-layer">Trust Layer</span>
            <h2>The Review Layer AI Checks for Lawyers</h2>

            <p>Client reviews are one of the strongest trust signals AI uses when deciding which lawyer to recommend. But here is the critical distinction most firms miss: not all reviews are visible to all AI platforms. The platform where reviews live determines which AI can access them.</p>

            <p>Google reviews power Google AI Overviews, but ChatGPT, Perplexity, and Claude cannot access them directly. Google renders reviews via JavaScript within its own ecosystem. Your firm&apos;s 4.9-star Google rating with 200 reviews might be completely invisible to every AI platform except Google&apos;s own products. That is a significant blind spot when clients are increasingly turning to non-Google AI for legal recommendations.</p>

            <div className="ae-callout ae-callout-info not-prose">
              <p><strong>Where AI actually reads law firm reviews:</strong> Avvo client reviews, Martindale-Hubbell client reviews, Yelp, and client testimonials published directly on your website as plain HTML text. Embedded review widgets from third-party platforms are typically JavaScript-rendered and invisible to AI crawlers. Client testimonials hard-coded into your website HTML are the single most reliable way to surface review sentiment to every AI platform simultaneously.</p>
            </div>

            <p>AI does not just count stars. It analyzes sentiment, specificity, and recency. A review that says &quot;Attorney Rodriguez handled our commercial lease dispute expertly, negotiated a settlement that saved our company six figures, and kept us informed at every stage&quot; carries far more weight than &quot;Great lawyer, highly recommend.&quot; Specific reviews that mention practice areas, outcomes, communication style, and case complexity give AI the information it needs to recommend your firm for those specific legal queries.</p>

            {/* CTA 7 */}
            <div className="ae-cta-inline not-prose">
              <p>Find out if AI can actually read your client reviews or if they are trapped behind JavaScript.</p>
              <Link href="/blindspot">Check Your AI Review Visibility &rarr;</Link>
            </div>

            {/* SECTION 8: TECHNICAL BARRIERS */}
            <span className="ae-section-label" id="technical-barriers">Technical Gaps</span>
            <h2>Technical Barriers Hiding Law Firms From AI</h2>

            <p>Beyond the template trap discussed earlier, law firm websites face several specific technical barriers that block AI visibility. These are the most fixable problems in legal AI optimization, and they are also the most overlooked.</p>

            <p>Page speed is a gating factor. AI crawlers operate on time budgets. If your practice area pages take more than a few seconds to load because of hero videos, animated backgrounds, or uncompressed images of the courthouse, the crawler moves on to the next firm. The polished visual experience that impresses human visitors is actively working against AI discovery.</p>

            <p>The robots.txt file and crawl permissions play a critical role. Some legal website platforms block AI crawlers by default. If your site tells GPTBot it is not welcome, ChatGPT will never read your practice area content, and it will never recommend your firm to anyone who asks.</p>

            {/* PROS/CONS */}
            <div className="ae-pros-cons not-prose">
              <div className="ae-pros-box">
                <h4>Signs Your Law Firm Site is AI-Visible</h4>
                <ul>
                  <li>Practice area content visible in page source (View Source shows text)</li>
                  <li>Pages load in under 2 seconds</li>
                  <li>Attorney schema and LegalService schema implemented</li>
                  <li>Robots.txt allows GPTBot, ClaudeBot, PerplexityBot</li>
                  <li>Client testimonials in plain HTML text</li>
                  <li>HTTPS active, no mixed content warnings</li>
                  <li>Clean URL structure (/practice-areas/family-law/)</li>
                </ul>
              </div>
              <div className="ae-cons-box">
                <h4>Signs Your Law Firm Site is AI-Invisible</h4>
                <ul>
                  <li>Content loads dynamically after page render</li>
                  <li>Pages take 5+ seconds with hero video and animations</li>
                  <li>No structured data or schema markup at all</li>
                  <li>Robots.txt blocks AI crawlers (or you are unsure)</li>
                  <li>Reviews displayed via embedded widget</li>
                  <li>Chat popup covers content on page load</li>
                  <li>Practice areas are PDF downloads, not HTML pages</li>
                </ul>
              </div>
            </div>

            {/* CTA 8 */}
            <div className="ae-cta-inline not-prose">
              <p>Discover whether AI crawlers can actually read your law firm website.</p>
              <Link href="/blindspot">Check Your AI Crawlability &rarr;</Link>
            </div>

            {/* SECTION 9: CONTENT FRESHNESS */}
            <span className="ae-section-label" id="content-freshness">Content Freshness</span>
            <h2>Why Stale Legal Content Destroys AI Visibility</h2>

            <p>Legal information has a shelf life that AI platforms are acutely aware of. Statutes change. Case law evolves. Sentencing guidelines shift. Regulatory requirements update. A page about California employment law that references 2023 standards when 2026 regulations exist signals to AI that the content may not reflect current law. For a YMYL category where outdated information can cause direct harm, stale content is treated as a liability.</p>

            <p>Research shows that content updated within 2 months receives significantly more AI citations than older content. For law firms, this freshness signal is amplified because AI platforms understand that legal advice based on outdated law is potentially harmful. A firm that regularly updates its practice area pages with current-year statute references, recent case developments, and evolving regulatory requirements builds a track record of currency that AI learns to trust over time.</p>

            <div className="ae-takeaway not-prose">
              <p><strong>The freshness advantage compounds.</strong> Firms that regularly update their legal content build a track record that AI platforms learn to favor. AI develops a preference for sources it has seen consistently updated. Starting now creates an advantage that grows with each update cycle, making it progressively harder for competitors to catch up.</p>
            </div>

            <p>This does not mean rewriting your entire website every month. It means maintaining a content calendar that ensures your highest-value practice area pages are reviewed and updated with current-year statute references, new case law developments, and evolving regulatory requirements on a regular basis. Even small updates signal to AI that your content is actively maintained by practicing attorneys.</p>

            <p>The medical industry faces a similar challenge with clinical content freshness. For a parallel look at how another YMYL-classified industry navigates this, see our guide on <Link href="/blog/how-medical-practices-get-found-on-ai-search">how medical practices get found on AI search</Link>.</p>

            {/* CTA 9 */}
            <div className="ae-cta-inline not-prose">
              <p>How fresh is your legal content in AI&apos;s eyes? Our report shows when AI last crawled your pages.</p>
              <Link href="/blindspot">Get Your Free Blind Spot Report &rarr;</Link>
            </div>

            {/* CTA 10 */}
            <div className="ae-cta-inline not-prose">
              <p>Prefer to talk through your firm&apos;s AI visibility strategy with a specialist? We work with law firms across every practice area.</p>
              <a href="tel:+12134442229">Call (213) 444-2229 &rarr;</a>
            </div>

            {/* CHEAT SHEET */}
            <div className="ae-cheat-sheet not-prose" id="cheat-sheet">
              <h3>AI Visibility Cheat Sheet for Law Firms</h3>
              <ul>
                <li><strong>Every attorney bio needs verifiable credentials:</strong> bar admissions with jurisdictions, practice area certifications, law school, and professional memberships</li>
                <li><strong>Build dedicated pages for each practice area</strong> (at least 1,500 words each) that address the specific questions potential clients ask</li>
                <li><strong>Lead with the answer</strong> in the first 1-2 sentences of every practice area page, then expand with depth and jurisdictional detail</li>
                <li><strong>Publish client testimonials as plain HTML text</strong> directly on your site, not via embedded review widgets</li>
                <li><strong>Implement Attorney, LegalService, and FAQPage schema</strong> across your entire site</li>
                <li><strong>Maintain identical NAP data</strong> across Avvo, Martindale-Hubbell, Justia, Super Lawyers, Yelp, and your state bar directory</li>
                <li><strong>Ensure your site renders without JavaScript</strong> so AI crawlers can access all practice area content</li>
                <li><strong>Reference specific statutes, case law, and local court procedures</strong> to demonstrate jurisdictional authority</li>
                <li><strong>Add FAQ sections to every practice area page</strong> with the questions clients actually ask about that legal issue</li>
                <li><strong>Update practice area content at least every 2 months</strong> with current-year statute references and case law developments</li>
                <li><strong>Include bar association memberships and professional recognitions</strong> on attorney bio pages as crawlable text</li>
                <li><strong>Allow AI crawlers in robots.txt</strong> and verify GPTBot, ClaudeBot, and PerplexityBot are not blocked</li>
              </ul>
            </div>

            {/* CTA 11 */}
            <div className="ae-cta-inline not-prose">
              <p>Want this cheat sheet customized to your practice area and market? We do that.</p>
              <a href="mailto:support@theanswerengine.ai">Email support@theanswerengine.ai &rarr;</a>
            </div>

            {/* SECTION: LOOKING AHEAD */}
            <span className="ae-section-label">Looking Ahead</span>
            <h2>The Firms That Move Now Will Own Their Market</h2>

            <p>Client discovery is shifting permanently. AI search is not a trend that will reverse. It is a new channel that will grow alongside traditional search, and the growth trajectory is accelerating. The firms that build AI visibility now will develop a structural advantage that compounds over time, because AI platforms develop confidence in sources they have cited repeatedly.</p>

            <p>Today, a potential client might ask AI for a general lawyer recommendation. Within the next year, clients will ask AI to compare specific firms by practice area, check consultation availability, and pre-screen based on case complexity and attorney specialization. The firms with deep, structured, credentialed content will be the ones AI trusts enough to surface in those increasingly specific queries.</p>

            <div className="ae-callout ae-callout-orange not-prose">
              <p><strong>The competitive window is open.</strong> Most law firms have not optimized for AI search. That means early movers face less competition and can establish trust with AI platforms before the market catches up. Firms mentioned within AI-generated responses experience 35% more organic clicks and 91% more paid clicks compared to those omitted. The firms acting in 2026 will be the ones AI has learned to trust by 2027. Waiting means competing against an entrenched advantage that only grows stronger.</p>
            </div>

            {/* CTA 12 */}
            <div className="ae-cta-inline not-prose">
              <p>The firms acting now will own their market in AI search. The ones waiting will be playing catch-up.</p>
              <Link href="/blindspot">See Where Your Firm Stands &rarr;</Link>
            </div>

            {/* CTA 13 */}
            <div className="ae-cta-block not-prose">
              <p>Prefer email? Send us your questions and we will get back to you within 24 hours.</p>
              <a href="mailto:support@theanswerengine.ai">Email support@theanswerengine.ai &rarr;</a>
            </div>

            {/* CTA 14 */}
            <div className="ae-cta-inline not-prose">
              <p>Or call us directly. We specialize in AI visibility for law firms and professional service businesses.</p>
              <a href="tel:+12134442229">Call (213) 444-2229 &rarr;</a>
            </div>

          </div>

          {/* AUTHOR CARD */}
          <div className="ae-author-card not-prose">
            <div className="w-12 h-12 rounded-full bg-[#F27D24] flex items-center justify-center text-white font-bold text-lg shrink-0">
              AE
            </div>
            <div>
              <p className="text-white font-semibold">Justin Borges</p>
              <p className="text-sm text-gray-400">
                We help law firms and professional service businesses get found, cited, and recommended by AI platforms. Our team tracks AI search trends daily and works with firms across every practice area to build sustainable AI visibility.
              </p>
            </div>
          </div>

          {/* MANDATORY 3-TIER CTA BLOCK (before FAQ) */}
          <div className="not-prose my-16 p-8 rounded-2xl bg-gradient-to-br from-[#F27D24]/10 to-transparent border border-[#F27D24]/20">
            <h3 className="font-plus-jakarta text-2xl font-bold text-white mb-3">Is AI Recommending Your Competitors Over Your Firm?</h3>
            <p className="text-gray-400 mb-6">Most law firms have no idea what AI says when someone asks for a lawyer. Get your free Blind Spot Report.</p>
            <Link href="/blindspot" className="inline-flex items-center gap-2 bg-[#F27D24] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#D96416] transition-colors">Get Your Free Blind Spot Report<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></Link>
            <div className="flex flex-wrap items-center gap-6 mt-6 pt-6 border-t border-[#F27D24]/10">
              <a href="tel:+12134442229" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>(213) 444-2229</a>
              <a href="mailto:support@theanswerengine.ai" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>support@theanswerengine.ai</a>
            </div>
          </div>

          {/* FAQ SECTION */}
          <div className="prose prose-invert prose-lg max-w-none prose-headings:font-plus-jakarta prose-headings:text-white prose-p:text-gray-300 prose-a:text-[#F27D24] prose-a:no-underline hover:prose-a:underline prose-strong:text-white">
            <span className="ae-section-label" id="faq">FAQ</span>
            <h2>Frequently Asked Questions</h2>

            <h3>Why do law firms face stricter AI scrutiny than other businesses?</h3>
            <p>Legal content falls under YMYL (Your Money or Your Life) classification because incorrect legal information can cause direct, measurable harm to a person&apos;s freedom, finances, or family. AI platforms apply the strictest quality filters to legal queries, requiring verifiable bar admissions, jurisdictional specificity, practice area depth, and third-party authority signals before recommending any firm. This is the same tier as medical content and higher than most other business categories.</p>

            <h3>Does ranking on Google mean my law firm will appear in AI search?</h3>
            <p>No. Traditional Google rankings and AI visibility are fundamentally different systems. A firm can rank on the first page of Google and still be completely invisible to ChatGPT, Perplexity, and Claude. AI platforms evaluate content differently: they check for crawlable text, structured data, cross-platform consistency, and E-E-A-T signals that many high-ranking law firm websites lack. A JavaScript-rendered site that ranks well on Google may appear as a blank page to AI crawlers.</p>

            <h3>What does AI look for before recommending a law firm?</h3>
            <p>AI platforms cross-reference multiple signals: verified bar admissions and jurisdictional licensing, dedicated practice area pages with substantive legal content, consistent firm information across legal directories like Avvo, Martindale-Hubbell, and Justia, client testimonials published as crawlable HTML text, structured data markup, and content freshness. Firms missing any of these signals are filtered out before AI generates a recommendation.</p>

            <h3>Why does ChatGPT recommend so few law firms?</h3>
            <p>Research shows ChatGPT recommends only 1.2% of local businesses. For law firms, that number is even smaller because legal queries trigger YMYL scrutiny. AI requires verifiable attorney credentials, jurisdictional authority, practice area depth, and consistent directory presence before it will cite a firm. Most law firm websites fail multiple criteria simultaneously: thin practice area pages, JavaScript-rendered content invisible to crawlers, reviews trapped behind widgets, and missing structured data.</p>

            <h3>How long does it take for a law firm to become visible in AI search?</h3>
            <p>Most law firms begin appearing in AI recommendations within 60 to 90 days after implementing a structured optimization approach. This involves building dedicated practice area pages with substantive legal content, ensuring consistent NAP data across legal directories, publishing client testimonials as crawlable text, and implementing proper schema markup. Content updated within the last 2 months receives significantly more AI citations, making regular updates a key accelerator.</p>

            <h3>Can a solo attorney or small firm compete with large firms in AI search?</h3>
            <p>Yes. AI platforms prioritize relevance, content depth, and trust signals over firm size. A solo practitioner with deep, well-structured practice area pages, verified bar credentials, genuine client testimonials in plain HTML, and consistent directory listings can outperform a large firm relying on a generic corporate website. AI rewards demonstrated expertise in specific practice areas over brand recognition or headcount.</p>

            <h3>What is the biggest mistake law firms make with AI visibility?</h3>
            <p>The most common mistake is relying on a template website that looks professional to humans but is invisible to AI. Many law firm website builders produce JavaScript-heavy sites that AI crawlers cannot read. The firm may have detailed practice area descriptions, attorney bios, and client reviews, but none of it registers with AI because the content only renders in a browser. The second biggest mistake is treating all practice areas as a single bullet-point list instead of building dedicated, substantive pages for each area of law.</p>

            <h3>Does having a blog help law firms get recommended by AI?</h3>
            <p>A blog helps only if it publishes original legal analysis attributed to a named, bar-admitted attorney. Generic legal articles without author attribution are treated as unverified legal information under YMYL guidelines. AI platforms look for content that demonstrates genuine legal experience, references specific jurisdictional nuances, and addresses the questions potential clients actually ask. A blog full of thin, template content can actually hurt by diluting your site&apos;s overall authority signals.</p>

            {/* CTA 15 */}
            <div className="ae-cta-inline not-prose">
              <p>Ready to see where your law firm stands in AI search? The report is free and takes 2 minutes.</p>
              <Link href="/blindspot">Get Your Free Blind Spot Report &rarr;</Link>
            </div>

            {/* CTA 16 */}
            <div className="ae-cta-inline not-prose">
              <p>Have questions specific to your practice area? Call us and we will walk you through it.</p>
              <a href="tel:+12134442229">Call (213) 444-2229 &rarr;</a>
            </div>
          </div>

          {/* FINAL CTA */}
          <div className="ae-final-cta not-prose">
            <h2>Is Your Law Firm Visible to AI Search?</h2>
            <p>Find out exactly what ChatGPT, Google AI, and Perplexity say when a potential client searches for your practice area in your market. Our free Blind Spot Report shows you the gaps, the opportunities, and the specific signals keeping your competitors ahead of you in AI recommendations.</p>
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
            <p className="text-sm text-gray-500 mt-4">No pitch, just the data. See what AI sees.</p>
          </div>

        </article>
      </main>
    </>
  )
}
