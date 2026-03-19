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
    authors: ['The Answer Engine Team'],
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
            text: 'Yes. Individual team bios with real names, credentials, and professional backgrounds are among the strongest E-E-A-T signals you can provide. AI platforms cross-reference these details against LinkedIn profiles, industry directories, and other public sources to verify authenticity. Generic bios without verifiable details provide little AI trust value.',
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
          <a href="/" className="hover:text-orange-400 transition-colors">
            Home
          </a>
        </li>
        <li>/</li>
        <li>
          <a href="/blog" className="hover:text-orange-400 transition-colors">
            Blog
          </a>
        </li>
        <li>/</li>
        <li className="text-gray-400 truncate max-w-[250px]">{title}</li>
      </ol>
    </nav>
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
          <div
            className="relative overflow-hidden rounded-2xl mb-12"
            style={{
              background:
                'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
            }}
          >
            <svg
              className="absolute inset-0 w-full h-full opacity-10"
              viewBox="0 0 800 400"
              fill="none"
              aria-hidden="true"
            >
              {/* Person/profile silhouette */}
              <circle cx="200" cy="140" r="40" stroke="#FF6A00" strokeWidth="0.8" fill="none" opacity="0.3" />
              <path d="M140 280 Q140 220 200 200 Q260 220 260 280" stroke="#FF6A00" strokeWidth="0.8" fill="none" opacity="0.25" />
              {/* Document lines beside profile */}
              <line x1="320" y1="120" x2="500" y2="120" stroke="#FF6A00" strokeWidth="0.5" opacity="0.25" />
              <line x1="320" y1="150" x2="480" y2="150" stroke="#FF6A00" strokeWidth="0.5" opacity="0.2" />
              <line x1="320" y1="180" x2="500" y2="180" stroke="#FF6A00" strokeWidth="0.5" opacity="0.25" />
              <line x1="320" y1="210" x2="460" y2="210" stroke="#FF6A00" strokeWidth="0.5" opacity="0.15" />
              <line x1="320" y1="240" x2="490" y2="240" stroke="#FF6A00" strokeWidth="0.5" opacity="0.2" />
              {/* Trust shield icon */}
              <path d="M650 120 L690 140 L690 200 Q690 240 650 260 Q610 240 610 200 L610 140 Z" stroke="#FF6A00" strokeWidth="0.6" fill="none" opacity="0.2" />
              <path d="M635 180 L650 195 L675 165" stroke="#FF6A00" strokeWidth="0.8" fill="none" opacity="0.25" />
              {/* Connecting dots */}
              <circle cx="280" cy="180" r="3" fill="#FF6A00" opacity="0.15" />
              <circle cx="560" cy="180" r="3" fill="#FF6A00" opacity="0.15" />
              <line x1="283" y1="180" x2="557" y2="180" stroke="#FF6A00" strokeWidth="0.3" opacity="0.12" strokeDasharray="4 4" />
            </svg>
            <div className="relative px-8 py-16 sm:px-12 sm:py-20">
              <p className="text-sm font-medium text-orange-400 mb-4">AEO Education</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 font-plus-jakarta">
                How to Optimize Your About Page for AI Recommendations
              </h1>
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span>March 18, 2026</span>
                <span>-</span>
                <span>11 min read</span>
                <span>-</span>
                <span>The Answer Engine Team</span>
              </div>
            </div>
          </div>

          {/* Article Body */}
          <article className="prose prose-invert prose-lg max-w-none">

            {/* Intro */}
            <p className="text-xl text-gray-300 leading-relaxed mb-10">
              Your About page is probably the most underrated page on your entire
              website. Most businesses treat it as an afterthought: a few
              paragraphs about the company history, maybe a stock photo of the
              team, and a mission statement nobody reads. But AI platforms do
              read it. When ChatGPT, Perplexity, or Google AI evaluate whether
              to recommend your business, your About page is one of the first
              places they look to verify who you are and whether you can be
              trusted. A weak About page does not just lose you human visitors.
              It actively prevents AI from recommending you.
            </p>

            {/* Section 1 */}
            <h2 className="text-2xl font-bold text-white mt-12 mb-4 font-plus-jakarta">
              Why AI Platforms Care About Your About Page
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              AI platforms do not recommend businesses at random. They follow a
              verification process that checks multiple trust signals before
              deciding which businesses deserve a citation. According to
              research from Semrush and other industry analysts, these trust
              signals fall into three categories: entity identity, evidence and
              citations, and technical quality. Your About page sits at the
              center of entity identity, the foundation everything else builds
              on.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              When{' '}
              <Link href="/blog/how-chatgpt-chooses-businesses-to-recommend" className="text-orange-400 hover:text-orange-300 transition-colors">
                ChatGPT evaluates which businesses to recommend
              </Link>, it looks for clear, verifiable information about who runs
              the business, where it operates, and what credentials back up its
              claims. Your About page is the single best place to consolidate
              all of that information in one crawlable location.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              This is not speculation. The shift from keyword-based ranking to
              entity-based authority is one of the defining changes of 2026. AI
              platforms do not just crawl your website in isolation. They
              cross-reference your identity across the web, checking whether
              your business name, address, team members, and credentials match
              across multiple sources. Your About page is where that
              cross-referencing begins.
            </p>

            {/* Stat callout 1 */}
            <div className="my-8 p-6 rounded-xl border border-orange-500/30 bg-orange-500/5">
              <div className="text-center">
                <span className="text-4xl font-bold text-orange-400">96%</span>
                <p className="text-gray-300 mt-2">
                  of AI Overview citations come from sources with strong E-E-A-T
                  signals, according to a 2025 analysis of Google AI Overviews
                  ranking factors by Wellows.
                </p>
              </div>
            </div>

            {/* Section 2 */}
            <h2 className="text-2xl font-bold text-white mt-12 mb-4 font-plus-jakarta">
              The E-E-A-T Framework: What AI Actually Looks For
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Google&apos;s E-E-A-T framework (Experience, Expertise,
              Authoritativeness, Trustworthiness) was originally designed as a
              quality guideline for human search evaluators. In 2026, it
              functions more like a ranking filter for AI visibility. AI
              platforms use these same signals to decide which sources deserve
              citations. Your About page is where you demonstrate all four.
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3 font-plus-jakarta">
              Experience
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              AI platforms look for evidence that your business has real-world
              experience in your field. This means specific details: how many
              years you have been operating, how many projects you have
              completed, which types of clients you serve. Vague statements like
              &quot;we have years of experience&quot; carry almost no weight. A
              line like &quot;founded in 2012, with over 1,400 residential
              plumbing projects completed across the Dallas-Fort Worth
              area&quot; gives AI something concrete to verify and cite.
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3 font-plus-jakarta">
              Expertise
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Credentials matter more than ever.{' '}
              <Link href="/blog/how-claude-ai-evaluates-business-authority" className="text-orange-400 hover:text-orange-300 transition-colors">
                AI models evaluate business authority
              </Link>{' '}
              by looking for certifications, licenses, specialized training, and
              industry affiliations. List them on your About page with full
              names, not abbreviations. &quot;Licensed by the Texas Department
              of Licensing and Regulation, TDLR License #12345&quot; is
              verifiable. &quot;Fully licensed and insured&quot; is not.
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3 font-plus-jakarta">
              Authoritativeness
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Authority comes from external validation. Mention industry awards,
              media features, partnerships with recognized organizations, and
              professional memberships. AI platforms cross-reference these
              claims. If you say you won a &quot;Best of Denver 2025&quot; award,
              AI can check whether that award exists and whether your business
              actually received it. Only include claims that hold up to
              verification.
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3 font-plus-jakarta">
              Trustworthiness
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Trust is the foundation of everything else. For local service
              businesses, trustworthiness signals include a physical address,
              a direct phone number, an email address, business registration
              details, and insurance information. The more verifiable contact
              information you provide, the more confident AI platforms become
              that your business is legitimate. A business with no address, no
              phone number, and a generic contact form raises red flags for both
              humans and AI.
            </p>

            {/* Section 3 */}
            <h2 className="text-2xl font-bold text-white mt-12 mb-4 font-plus-jakarta">
              Seven Elements Every AI-Optimized About Page Needs
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Based on how AI platforms currently evaluate business authority,
              here are the seven elements your About page should include. Each
              one feeds directly into the trust signals that AI models use to
              decide whether to cite you.
            </p>

            <div className="my-6 p-6 rounded-xl border border-gray-800 bg-gray-900">
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 font-bold mt-0.5">1.</span>
                  <span><strong className="text-white">Complete business identity.</strong> Your full legal business name, founding year, and the specific services you provide. Avoid marketing fluff. State exactly what you do and who you do it for.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 font-bold mt-0.5">2.</span>
                  <span><strong className="text-white">Service area with geographic specifics.</strong> List every city, county, or region you serve. AI platforms need geographic context to match your business with location-specific queries. &quot;We serve the greater Phoenix metro area including Scottsdale, Tempe, Mesa, Chandler, and Gilbert&quot; is far more useful to AI than &quot;we serve the local area.&quot;</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 font-bold mt-0.5">3.</span>
                  <span><strong className="text-white">Team member bios with verifiable credentials.</strong> Real names, job titles, certifications, years of experience, and professional backgrounds. AI platforms cross-reference these against LinkedIn, industry directories, and licensing databases.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 font-bold mt-0.5">4.</span>
                  <span><strong className="text-white">NAP consistency (Name, Address, Phone).</strong> Your business name, physical address, and phone number must match exactly across your About page, footer, Google Business Profile, and every directory listing. Inconsistent NAP data is one of the fastest ways to lose AI trust.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 font-bold mt-0.5">5.</span>
                  <span><strong className="text-white">Quantifiable achievements.</strong> Number of projects completed, years in business, customer satisfaction rates from verified review platforms. AI favors specific, verifiable numbers over vague claims.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 font-bold mt-0.5">6.</span>
                  <span><strong className="text-white">Licensing and insurance details.</strong> License numbers, issuing authorities, and insurance providers. This level of transparency signals trustworthiness in ways that AI can independently verify.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 font-bold mt-0.5">7.</span>
                  <span><strong className="text-white">Organization schema markup.</strong> Structured data that tells AI exactly what your business is, where it is located, and how to categorize it. Schema markup delivers up to a 73% selection boost for AI Overview inclusion, according to research on Google AI Overviews ranking factors.</span>
                </li>
              </ul>
            </div>

            {/* Stat callout 2 */}
            <div className="my-8 p-6 rounded-xl border border-orange-500/30 bg-orange-500/5">
              <div className="text-center">
                <span className="text-4xl font-bold text-orange-400">45%</span>
                <p className="text-gray-300 mt-2">
                  of consumers now use AI tools for local business
                  recommendations, up from just 6% a year earlier, according
                  to BrightLocal&apos;s 2026 survey data.
                </p>
              </div>
            </div>

            {/* Section 4 */}
            <h2 className="text-2xl font-bold text-white mt-12 mb-4 font-plus-jakarta">
              How AI Reads Your About Page Differently Than Humans
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              When a human visits your About page, they scan the layout, look at
              photos, and form an impression in a few seconds. When{' '}
              <Link href="/blog/what-content-does-chatgpt-read-on-my-website" className="text-orange-400 hover:text-orange-300 transition-colors">
                ChatGPT reads your website
              </Link>, it strips away every visual element and processes only
              the plain text. No images, no CSS, no JavaScript interactions. If
              your About page relies on a beautiful team photo grid with names
              embedded in the images rather than in HTML text, AI platforms will
              never know who works at your company.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              This creates a real problem for businesses that invested heavily in
              visual design. A stunning About page with minimal text content is
              functionally invisible to AI. Meanwhile, a text-rich About page
              with clear headings, detailed bios, and structured content will
              outperform a design-heavy page every time in the AI context.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              The good news is that optimizing for AI does not mean sacrificing
              design. It means making sure the information AI needs is present
              in the HTML text, not locked inside images or interactive elements.
              You can still have a visually appealing page. You just need to
              ensure the text layer is comprehensive enough to stand on its own.
            </p>

            {/* Section 5 */}
            <h2 className="text-2xl font-bold text-white mt-12 mb-4 font-plus-jakarta">
              The Cross-Referencing Problem Most Businesses Miss
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              AI platforms do not take your About page at face value. They
              cross-reference every claim against other sources on the web.
              This is where most businesses fail without realizing it. Your
              About page says you were founded in 2015, but your Yelp profile
              says 2017. Your website says you serve five cities, but your
              Google Business Profile only lists three. These inconsistencies
              erode AI trust in subtle but measurable ways.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              According to analysis from local SEO researchers, directory
              listing accuracy accounts for roughly 13% of AI visibility
              scoring. That figure nearly doubled compared to traditional
              Google local ranking weight. The listings that most businesses
              set up once and forgot about are now playing a real role in
              whether AI recommends them.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Before you optimize your About page, audit your entire web
              presence for consistency. Every directory, every social profile,
              every mention of your business should align with what your About
              page says. AI platforms are remarkably good at spotting
              discrepancies, and discrepancies reduce their confidence in
              recommending you.
            </p>

            {/* Stat callout 3 */}
            <div className="my-8 p-6 rounded-xl border border-orange-500/30 bg-orange-500/5">
              <div className="text-center">
                <span className="text-4xl font-bold text-orange-400">73%</span>
                <p className="text-gray-300 mt-2">
                  selection boost for AI Overview inclusion when pages include
                  proper schema markup, the single highest-impact quick win
                  for AI visibility according to ranking factor research.
                </p>
              </div>
            </div>

            {/* Section 6 */}
            <h2 className="text-2xl font-bold text-white mt-12 mb-4 font-plus-jakarta">
              Schema Markup: The Hidden Multiplier
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Adding Organization schema to your About page is one of the
              highest-impact changes you can make. Schema markup tells AI
              platforms exactly what your business is, in a structured format
              they can parse instantly. While ChatGPT does not read JSON-LD
              schema directly during browsing sessions, schema data feeds into
              the Bing search index that ChatGPT references when generating
              responses.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Your About page schema should include your business name, type
              (LocalBusiness or a more specific subtype), address, phone number,
              founding date, number of employees, service area, and links to
              your social media profiles. For team members, add Person schema
              with their name, job title, and professional credentials.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Content with structured data, citations, and verifiable
              statistics achieves 30% to 40% higher visibility in AI responses.
              This makes schema markup not just a technical nicety but a
              competitive requirement. If your competitors have schema on their
              About pages and you do not, AI platforms will have an easier time
              understanding and citing them instead of you.
            </p>

            {/* Section 7 */}
            <h2 className="text-2xl font-bold text-white mt-12 mb-4 font-plus-jakarta">
              Common About Page Mistakes That Kill AI Trust
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Beyond missing elements, there are active mistakes that damage
              your About page&apos;s AI performance. Avoid these if you want AI
              platforms to take your business seriously.
            </p>
            <div className="my-6 p-6 rounded-xl border border-gray-800 bg-gray-900">
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 font-bold mt-0.5">&#8226;</span>
                  <span><strong className="text-white">Generic mission statements</strong> that could apply to any business in your industry. &quot;We are committed to excellence and customer satisfaction&quot; tells AI nothing about who you are.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 font-bold mt-0.5">&#8226;</span>
                  <span><strong className="text-white">Stock photos without real team names.</strong> AI cannot process images, so stock photos add zero authority value. Worse, they suggest your team might not be real.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 font-bold mt-0.5">&#8226;</span>
                  <span><strong className="text-white">Hiding contact information behind forms.</strong> If your only contact option is a form with no address or phone number, AI has no verifiable identity to cross-reference.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 font-bold mt-0.5">&#8226;</span>
                  <span><strong className="text-white">Outdated information.</strong> An About page that still references a service area you left three years ago or a team member who departed in 2023 creates trust gaps.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 font-bold mt-0.5">&#8226;</span>
                  <span><strong className="text-white">Unverifiable claims.</strong> Saying you are the &quot;#1 rated plumber in Denver&quot; without linking to the source is a trust signal that works against you when AI tries to verify it and cannot.</span>
                </li>
              </ul>
            </div>

            {/* Section 8 */}
            <h2 className="text-2xl font-bold text-white mt-12 mb-4 font-plus-jakarta">
              Your About Page Optimization Checklist
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Here is a practical checklist you can work through today. Each
              item directly feeds the trust signals AI platforms evaluate when
              deciding whether to{' '}
              <Link href="/blog/get-cited-chatgpt-local-business-guide" className="text-orange-400 hover:text-orange-300 transition-colors">
                cite your business in AI responses
              </Link>.
            </p>
            <div className="my-6 p-6 rounded-xl border border-gray-800 bg-gray-900">
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 font-bold mt-0.5">&#10003;</span>
                  <span>Full legal business name matching all directory listings</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 font-bold mt-0.5">&#10003;</span>
                  <span>Physical address with city, state, and ZIP code</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 font-bold mt-0.5">&#10003;</span>
                  <span>Direct phone number (not just a contact form)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 font-bold mt-0.5">&#10003;</span>
                  <span>Founding year and brief company history</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 font-bold mt-0.5">&#10003;</span>
                  <span>Complete service area with specific cities or regions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 font-bold mt-0.5">&#10003;</span>
                  <span>Team member names, titles, and verifiable credentials</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 font-bold mt-0.5">&#10003;</span>
                  <span>License numbers and issuing authorities</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 font-bold mt-0.5">&#10003;</span>
                  <span>Quantifiable achievements (projects, years, client count)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 font-bold mt-0.5">&#10003;</span>
                  <span>Organization and Person schema markup</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 font-bold mt-0.5">&#10003;</span>
                  <span>NAP consistency audit across all online profiles</span>
                </li>
              </ul>
            </div>

          </article>

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

          {/* CTA Section */}
          <div className="mt-16 p-8 rounded-2xl border border-gray-800 bg-gradient-to-r from-gray-900 to-gray-800">
            <h2 className="text-2xl font-bold text-white mb-4 font-plus-jakarta">
              Is Your About Page Helping or Hurting Your AI Visibility?
            </h2>
            <p className="text-gray-300 mb-6">
              Most businesses have no idea what AI platforms actually see when
              they visit their website. We will show you exactly how your About
              page reads to ChatGPT, where your trust signals are strong, and
              where the gaps are costing you recommendations. Free analysis, no
              commitment.
            </p>
            <a
              href="/blindspot"
              className="inline-block bg-[#FF6A00] text-white font-semibold px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors"
            >
              Get Your Free Blind Spot Report
            </a>
          </div>

          {/* Author Attribution */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                AE
              </div>
              <div>
                <p className="text-white font-medium text-sm">The Answer Engine Team</p>
                <p className="text-gray-500 text-sm">
                  Helping local service businesses stay visible in an AI-first world.
                </p>
              </div>
            </div>
          </div>

        </div>
      </main>
    </>
  )
}
