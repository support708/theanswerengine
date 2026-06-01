import type { Metadata } from 'next'
import Link from 'next/link'

export const revalidate = 86400
export const dynamic = 'force-static'
export const dynamicParams = true

const title = 'How Therapists Get Found on AI Search'
const description =
  'Patients are asking ChatGPT and Perplexity to find therapists near them. Here is why most mental health practices are invisible to AI, what YMYL standards mean for therapy, and the signals that can help.'
const slug = 'how-therapists-get-found-on-ai-search'
const publishDate = '2026-04-12'

export const metadata: Metadata = {
  title: `${title} | The Answer Engine`,
  description,
  keywords: [
    'therapist AI search',
    'how therapists get found ChatGPT',
    'mental health practice AI visibility',
    'Perplexity therapist recommendation',
    'ChatGPT therapist near me',
    'therapy marketing AI',
    'YMYL mental health AI',
    'answer engine optimization therapy',
    'therapist online visibility 2026',
    'AI recommendations mental health',
    'counselor AI search',
    'how to get therapy clients from AI',
  ],
  authors: [{ name: 'Justin Borges', url: 'https://theanswerengine.ai/about' }],
  openGraph: {
    title: `${title} | The Answer Engine`,
    description,
    type: 'article',
    publishedTime: publishDate,
    authors: ['https://theanswerengine.ai/about'],
    url: `https://theanswerengine.ai/blog/${slug}`,
    images: [
      {
        url: `https://theanswerengine.ai/blog/${slug}.webp`,
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
    siteName: 'The Answer Engine',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${title} | The Answer Engine`,
    description,
    images: [`https://theanswerengine.ai/blog/${slug}.webp`],
    creator: '@theanswerengine',
  },
  alternates: {
    canonical: `https://theanswerengine.ai/blog/${slug}`,
  },
}

const faqItems = [
  {
    '@type': 'Question',
    name: 'Does ChatGPT recommend therapists for local searches?',
    acceptedAnswer: {
      '@type': 'Answer',
      text: 'ChatGPT Search and Perplexity do retrieve therapist recommendations from real-time web data when asked, but they apply extra caution to mental health queries because they fall under YMYL (Your Money or Your Life) standards. This means the platforms require stronger evidence of credibility before naming a specific practice. Therapists who appear in authoritative directories, have consistent verified listings, and maintain a substantive, credential-forward web presence are significantly more likely to be cited than those with thin or inconsistent online documentation.',
    },
  },
  {
    '@type': 'Question',
    name: 'Why are so many therapists invisible to AI platforms?',
    acceptedAnswer: {
      '@type': 'Answer',
      text: 'Several structural factors contribute. First, mental health providers are underrepresented in the structured data formats (schema markup, consistent NAP citations, healthcare directories) that AI platforms rely on. Second, HIPAA restrictions mean therapists cannot display patient testimonials or clinical outcomes the way other service providers can, reducing the social proof layer AI looks for. Third, many therapy practices have minimal web presences by design, reflecting a preference for word-of-mouth referrals. In aggregate, this creates a category-wide visibility deficit in AI search.',
    },
  },
  {
    '@type': 'Question',
    name: 'What directories should therapists list on for AI visibility?',
    acceptedAnswer: {
      '@type': 'Answer',
      text: 'The highest-priority directories for therapist AI visibility include: Psychology Today Provider Directory, Google Business Profile, Zocdoc (if you accept online booking), Healthgrades, TherapyDen, and your state licensing board directory. The National Provider Identifier (NPI) registry is also indexed and carries trust weight with AI platforms because it is a federal regulatory database. Consistency of name, address, phone, and credentials across all of these sources is more important than any single listing.',
    },
  },
  {
    '@type': 'Question',
    name: 'Can HIPAA restrictions prevent therapists from building AI visibility?',
    acceptedAnswer: {
      '@type': 'Answer',
      text: 'HIPAA does restrict what therapists can say publicly about patient outcomes and prohibits using protected health information in marketing. However, HIPAA does not prevent therapists from building a strong web presence through other means: detailed credential documentation, specialty focus pages, therapist bios, FAQ content addressing common presenting concerns (in general terms), and professional directory listings. The gap is real but not absolute. Therapists who understand what they can and cannot do publicly are better positioned to build AI-legible authority within those constraints.',
    },
  },
  {
    '@type': 'Question',
    name: 'How is AI search for therapy different from AI search for other services?',
    acceptedAnswer: {
      '@type': 'Answer',
      text: 'Mental health queries trigger the highest tier of AI caution. Unlike a search for a plumber or a restaurant, asking "find me a therapist for anxiety near me" involves personal wellbeing in a way that AI platforms treat very carefully. Some platforms add crisis resource disclosures automatically. Recommendations are filtered through a lens of: is this a licensed, reputable provider? The practical effect is that therapists need stronger baseline authority signals than comparable service providers in lower-stakes categories to appear in AI recommendations at all.',
    },
  },
  {
    '@type': 'Question',
    name: 'How long does it take for a therapy practice to show up in AI recommendations?',
    acceptedAnswer: {
      '@type': 'Answer',
      text: 'There is no fixed timeline, as AI platforms refresh their data at different rates and weight signals differently. Practices that address fundamental gaps first, such as claiming and completing all major directory listings, ensuring license verification is publicly accessible, and publishing substantive credential and specialty content on their website, typically begin seeing improvements in AI-generated responses within 60 to 90 days. Practices with more complex gaps or regional competition may take longer.',
    },
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      '@id': `https://theanswerengine.ai/blog/${slug}#article`,
      headline: title,
      description,
      image: {
        '@type': 'ImageObject',
        url: `https://theanswerengine.ai/blog/${slug}.webp`,
        width: 1200,
        height: 630,
      },
      datePublished: publishDate + 'T00:00:00Z',
      dateModified: publishDate + 'T00:00:00Z',
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
      '@id': `https://theanswerengine.ai/blog/${slug}#faq`,
      mainEntity: faqItems,
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `https://theanswerengine.ai/blog/${slug}#breadcrumb`,
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

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb */}
      <nav className="max-w-4xl mx-auto px-6 pt-8 pb-2" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 text-sm text-gray-500">
          <li>
            <Link href="/" className="hover:text-[#F27D24] transition-colors">Home</Link>
          </li>
          <li>/</li>
          <li>
            <Link href="/blog" className="hover:text-[#F27D24] transition-colors">Blog</Link>
          </li>
          <li>/</li>
          <li className="text-gray-300 truncate max-w-[220px]">{title}</li>
        </ol>
      </nav>

      {/* Hero */}
      <header className="relative max-w-4xl mx-auto px-6 py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="gridtherapy" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#F27D24" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#gridtherapy)" />
          </svg>
        </div>
        <div className="relative">
          <div className="flex items-center gap-3 mb-6">
            <span className="ae-section-label">Industry Guides</span>
            <span className="text-gray-500 text-sm">April 12, 2026</span>
            <span className="text-gray-500 text-sm">11 min read</span>
          </div>
          <h1 className="font-plus-jakarta text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            How Therapists Get Found{' '}
            <span className="text-[#F27D24]">on AI Search</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
            People in emotional pain are turning to ChatGPT and Perplexity to find a
            therapist before they ever open Google. Most mental health practices are
            completely absent from those answers. Here is why the invisibility is
            structural, what AI looks for in this uniquely high-stakes category, and
            the signals that build AI-legible authority within the constraints therapists
            actually face.
          </p>
        </div>
      </header>

      {/* Stats Grid */}
      <div className="max-w-4xl mx-auto px-6 mb-12">
        <div className="ae-stats-grid">
          <div className="ae-stat-card">
            <div className="ae-stat-emoji">🧠</div>
            <div className="ae-stat-value">59%</div>
            <div className="ae-stat-label">Of therapy seekers now research providers online before making first contact</div>
          </div>
          <div className="ae-stat-card">
            <div className="ae-stat-emoji">🤖</div>
            <div className="ae-stat-value">3x</div>
            <div className="ae-stat-label">Higher YMYL scrutiny AI applies to mental health queries vs general service searches</div>
          </div>
          <div className="ae-stat-card">
            <div className="ae-stat-emoji">🔍</div>
            <div className="ae-stat-value">45%</div>
            <div className="ae-stat-label">Of consumers use AI to find local services, up from 6% just two years ago</div>
          </div>
          <div className="ae-stat-card">
            <div className="ae-stat-emoji">📋</div>
            <div className="ae-stat-value">72%</div>
            <div className="ae-stat-label">Of therapist websites lack the structured data signals AI platforms scan for</div>
          </div>
        </div>
      </div>

      {/* Article Body */}
      <article className="max-w-4xl mx-auto px-6 pb-20">

        {/* Table of Contents */}
        <div className="ae-toc mb-12">
          <div className="ae-toc-title">In This Article</div>
          <ol>
            <li><a href="#how-patients-find-therapists">How People Find Therapists Now</a></li>
            <li><a href="#ymyl-what-it-means">YMYL: Why Mental Health Queries Are Different</a></li>
            <li><a href="#structural-invisibility">Why Therapists Are Structurally Invisible to AI</a></li>
            <li><a href="#hipaa-and-ai">HIPAA, Privacy, and the Social Proof Gap</a></li>
            <li><a href="#what-ai-reads">What AI Actually Evaluates for Therapy Recommendations</a></li>
            <li><a href="#trust-signals">The Trust Signals Therapists Can Build</a></li>
            <li><a href="#comparison">How Therapists Compare to Other Healthcare Providers</a></li>
            <li><a href="#faq">Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* Section 1 */}
        <section id="how-patients-find-therapists" className="mb-14">
          <h2 className="font-plus-jakarta text-3xl font-bold text-white mb-4">
            How People Find Therapists Now
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            The path to finding a therapist has always been quietly difficult. There is no
            emergency room you walk into for a panic attack at 2 a.m. There is no service
            you call for same-day depression treatment. Historically, the path ran through
            primary care referrals, insurance directories, and word of mouth. For better or
            worse, all three of those channels are now increasingly running through AI.
           Markets fill fast. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Check your territory availability.</a></p>
          <p className="text-gray-300 leading-relaxed mb-4">
            Someone who decides they want to see a therapist is often doing it in a
            private moment, on a phone, late at night. They do not want to wade through
            insurance PDFs or scroll through a 200-provider directory sorted by last name.
            They open ChatGPT or Perplexity and type something like: "find me a therapist
            for anxiety near downtown Austin who does evening appointments." They want a
            direct answer, not a list of links.
           Your first step: <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free AERO Blind Spot Scan.</a></p>
          <p className="text-gray-300 leading-relaxed mb-4">
            AI assistants are increasingly capable of giving that direct answer. And the
            practices that appear in those answers are capturing clients before any
            competitor in a traditional search result has been seen. Forty-five percent of
            consumers now use AI to find local services, a figure that was in the single
            digits just two years ago. For mental health specifically, research on digital
            health-seeking behavior consistently shows therapy seekers skew toward private,
            conversational search behavior over public browsing.
           <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Claim your free call</a> before your market fills.</p>

          <div className="ae-callout ae-callout-info mb-6">
            <div className="ae-callout-title">The Referral Network Is Not Enough</div>
            <p>
              Many therapists built their practices entirely on professional referrals and
              never needed an aggressive online presence. That model still works, but it
              no longer captures the full addressable market. The clients who would never
              ask their doctor for a therapist recommendation are searching in AI. If
              your practice is not visible there, you are invisible to an entire segment
              of potential clients who are actively looking for what you offer.
             Reach out: <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>
          </div>

          <div className="ae-cta-inline mb-6">
            <p>
              Not sure if your practice appears when someone asks ChatGPT for a therapist
              near you?{' '}
              <Link href="/blindspot">
                Run a free AI Blind Spot Report and find out in minutes.
              </Link>
             Call us at <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> today.</p>
          </div>
        </section>

        {/* Section 2 */}
        <section id="ymyl-what-it-means" className="mb-14">
          <h2 className="font-plus-jakarta text-3xl font-bold text-white mb-4">
            YMYL: Why Mental Health Queries Are Different
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Not all AI searches are created equal. When someone asks an AI assistant for
            the best coffee shop nearby, the stakes of a wrong answer are low. When someone
            asks for a therapist to help them manage suicidal ideation or recover from
            trauma, the stakes are entirely different. AI platforms understand this
            distinction through a framework originally developed by Google and now applied
            across AI systems: YMYL, which stands for Your Money or Your Life.
           <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Lock in your exclusive territory now.</a></p>
          <p className="text-gray-300 leading-relaxed mb-4">
            YMYL content is defined as information that could significantly impact a
            person's health, financial stability, safety, or wellbeing. Mental health
            care sits at the absolute core of this category. When AI evaluates a mental
            health query, it applies the highest available trust standards before surfacing
            any recommendation. The platform is not just asking: is this business nearby?
            It is asking: is there sufficient public evidence that this is a licensed,
            credentialed, reputable provider whose recommendations can be made without
            risk of harm?
           <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Get your free AI readiness report.</a></p>

          <div className="ae-callout ae-callout-warning mb-6">
            <div className="ae-callout-title">What YMYL Means in Practice</div>
            <p>
              Under YMYL standards, a therapist with fifty Google reviews and a sparse
              website competes very differently against a therapist with twenty reviews but
              a complete Psychology Today profile, verified NPI listing, detailed specialty
              pages, and consistent directory presence. The second therapist has built the
              kind of multi-source credibility that AI treats as trustworthy. The first
              may have more raw social signal but is missing the verification infrastructure
              YMYL queries require.
             Ready to act? <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a free strategy session.</a></p>
          </div>

          <p className="text-gray-300 leading-relaxed mb-4">
            Some AI platforms go further. ChatGPT and Google AI Mode have been documented
            adding crisis resource information automatically to queries about mental health,
            regardless of what the user asked. This reflects a platform-level judgment
            that mental health content requires special handling. The downstream effect
            for therapy practice visibility is that the platforms need to be more certain
            about their recommendations before making them. Uncertainty defaults to a
            generic response rather than a specific practice recommendation.
           Drop us a line at <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>
          <p className="text-gray-300 leading-relaxed mb-4">
            This is the central challenge for therapists in AI search: the category that
            most needs a trusted, personalized recommendation is the same category where
            AI is most cautious about providing one. Building the signals that overcome
            that caution is the entire task.
           Speak to an AEO specialist: <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.</p>
        </section>

        {/* Section 3: Structural Invisibility */}
        <section id="structural-invisibility" className="mb-14">
          <h2 className="font-plus-jakarta text-3xl font-bold text-white mb-4">
            Why Therapists Are Structurally Invisible to AI
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Therapist invisibility in AI search is not a matter of individual practice
            failures. It is a structural condition created by several overlapping factors
            that affect the entire profession.
           One client per city. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">See if your market is available.</a></p>

          <div className="ae-timeline mb-8">
            <div className="ae-timeline-item">
              <div className="font-plus-jakarta font-bold text-white mb-1">Factor 1: Thin Web Presence by Design</div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Many therapists built practices on referral networks and intentionally kept
                their web presence minimal. A simple website, a Psychology Today profile,
                and a phone number was sufficient. That minimalism made sense for the old
                referral model. For AI discovery, it creates a near-total absence of the
                structured, crawlable data AI uses to form recommendations.
               Check where you stand: <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free Blind Spot Scan.</a></p>
            </div>
            <div className="ae-timeline-item">
              <div className="font-plus-jakarta font-bold text-white mb-1">Factor 2: Missing Structured Data</div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Schema markup, the technical vocabulary that helps AI understand what a
                website is about, is severely underdeployed in the mental health sector.
                Approximately 72% of therapy practice websites lack any meaningful schema
                implementation. Without it, AI must infer what a practice does from
                unstructured text, which is far less reliable and results in fewer and
                lower-confidence recommendations.
               <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Schedule a free 30-min call.</a></p>
            </div>
            <div className="ae-timeline-item">
              <div className="font-plus-jakarta font-bold text-white mb-1">Factor 3: Inconsistent Directory Presence</div>
              <p className="text-gray-400 text-sm leading-relaxed">
                AI builds confidence in a business by triangulating consistent information
                across multiple independent sources. A therapist who appears on Psychology
                Today with one address, Google with a slightly different name format, and
                is absent from Healthgrades entirely presents a fragmented signal that AI
                platforms treat with lower confidence than one with a tight, consistent
                presence across all major directories.
               Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> for a custom strategy.</p>
            </div>
            <div className="ae-timeline-item">
              <div className="font-plus-jakarta font-bold text-white mb-1">Factor 4: Privacy-Driven Low Content Volume</div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Unlike restaurants or retail businesses, therapy practices do not post
                high-frequency content updates, announce new offerings publicly, or receive
                event coverage. The low content volume means fewer indexed pages for AI
                to read, fewer external links pointing to the practice, and less evidence
                of ongoing activity that AI associates with a reputable, active business.
               Questions? Call <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.</p>
            </div>
          </div>

          <div className="ae-cta-inline mb-6">
            <p>
              Curious whether your practice has these structural gaps?{' '}
              <Link href="/blindspot">
                The free Blind Spot Report flags exactly which signals are missing.
              </Link>
             <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Secure your territory before a competitor does.</a></p>
          </div>
        </section>

        {/* Section 4: HIPAA */}
        <section id="hipaa-and-ai" className="mb-14">
          <h2 className="font-plus-jakarta text-3xl font-bold text-white mb-4">
            HIPAA, Privacy, and the Social Proof Gap
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            For almost every other service category, the single most powerful signal for
            AI recommendations is the review layer: volume, recency, rating, and the
            content of what reviewers say. A plumber with 200 Google reviews mentioning
            specific services, fast response times, and fair pricing has built an
            AI-readable reputation profile that is difficult to fake and easy to trust.
           <a href="https://theanswerengine.ai/blindspot" className="cta-inline">See your AI visibility score — free.</a></p>
          <p className="text-gray-300 leading-relaxed mb-4">
            Therapists cannot fully replicate this. HIPAA prohibits any disclosure of
            protected health information without explicit patient authorization. Therapy
            is itself a protected health service. This means therapists cannot post
            case studies, cannot publicly thank patients for their feedback, and must
            be careful about acknowledging specific therapeutic outcomes in marketing
            materials. The practical result is that the richest review content, the
            kind that mentions conditions treated, breakthroughs experienced, and
            specific therapist attributes, appears far less frequently for mental health
            providers than for almost any other category.
           <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book your free consultation here.</a></p>

          <div className="ae-callout ae-callout-orange mb-6">
            <div className="ae-callout-title">HIPAA Does Not Prohibit All Public Presence</div>
            <p>
              It is worth being precise here, because the common response to HIPAA
              constraints is to minimize web presence further. That is counterproductive.
              HIPAA restricts what therapists can say about specific patients and their
              protected health information. It does not restrict therapists from publishing
              detailed credential information, describing their therapeutic approach in
              general terms, publishing FAQ content about common presenting concerns
              without referencing specific clients, or maintaining comprehensive professional
              directory listings. The gap is real, but it is narrower than most practices
              treat it.
             Contact us at <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>
          </div>

          <p className="text-gray-300 leading-relaxed mb-4">
            The social proof gap also manifests in a counterintuitive way in AI search.
            When AI cannot find strong review signals for therapists in a region, it
            does not split the difference and recommend everyone equally. It tends to
            over-concentrate its recommendations on the few practices that have built
            exceptional alternative signals: detailed professional bios, verified
            credentials, robust FAQ libraries, and authoritative directory presences.
            The practices that have figured out how to build authority within HIPAA
            constraints capture a disproportionate share of AI-referred clients.
           Reach us at <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.</p>
          <p className="text-gray-300 leading-relaxed mb-4">
            For a deeper exploration of how reviews interact with AI recommendations
            more broadly, see our article on{' '}
            <Link href="/blog/how-online-reviews-shape-ai-recommendations" className="text-[#F27D24] hover:underline">
              How Online Reviews Shape AI Recommendations
            </Link>
            . The mental health case is the clearest illustration of what happens when
            the review layer is structurally constrained.
           We work with one business per market. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Check if yours is still open.</a></p>
        </section>

        {/* Section 5: What AI Reads */}
        <section id="what-ai-reads" className="mb-14">
          <h2 className="font-plus-jakarta text-3xl font-bold text-white mb-4">
            What AI Actually Evaluates for Therapy Recommendations
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Despite the constraints, AI platforms do recommend therapists. Understanding
            exactly what signals they look for is the foundation of any visibility
            strategy.
           Find your gaps with a <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free AERO scan.</a></p>
          <p className="text-gray-300 leading-relaxed mb-4">
            Licensure verification is the first gate. State licensing boards for psychology,
            social work, marriage and family therapy, and counseling maintain public
            registries of licensed practitioners. These registries are crawled and indexed
            by AI platforms as authoritative, government-maintained sources. A therapist
            whose name and address in their state licensing board directory matches their
            website and Google Business Profile has passed the baseline trust check. One
            whose information is inconsistent or who does not appear in the registry raises
            immediate uncertainty.
           <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Schedule a free call</a> to see where you stand.</p>
          <p className="text-gray-300 leading-relaxed mb-4">
            Beyond licensure, the National Provider Identifier (NPI) registry is a federal
            database maintained by the Centers for Medicare and Medicaid Services. Every
            licensed health provider is required to have one. AI platforms treat NPI listings
            as a secondary federal-level credential verification. The NPI registry is
            publicly searchable and widely indexed.
           Send your questions to <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>

          <div className="ae-bar-group mb-8">
            <div className="ae-bar-item">
              <div className="ae-bar-label">State licensing board registry (verified license)</div>
              <div className="ae-bar-track">
                <div className="ae-bar-fill" style={{ width: '95%' }}></div>
              </div>
              <div className="ae-bar-value">Highest</div>
            </div>
            <div className="ae-bar-item">
              <div className="ae-bar-label">NPI federal registry (provider verification)</div>
              <div className="ae-bar-track">
                <div className="ae-bar-fill" style={{ width: '90%' }}></div>
              </div>
              <div className="ae-bar-value">Very High</div>
            </div>
            <div className="ae-bar-item">
              <div className="ae-bar-label">Psychology Today provider profile</div>
              <div className="ae-bar-track">
                <div className="ae-bar-fill" style={{ width: '85%' }}></div>
              </div>
              <div className="ae-bar-value">Very High</div>
            </div>
            <div className="ae-bar-item">
              <div className="ae-bar-label">Google Business Profile (complete + verified)</div>
              <div className="ae-bar-track">
                <div className="ae-bar-fill" style={{ width: '80%' }}></div>
              </div>
              <div className="ae-bar-value">High</div>
            </div>
            <div className="ae-bar-item">
              <div className="ae-bar-label">Healthgrades or Zocdoc profile</div>
              <div className="ae-bar-track">
                <div className="ae-bar-fill" style={{ width: '70%' }}></div>
              </div>
              <div className="ae-bar-value">High</div>
            </div>
            <div className="ae-bar-item">
              <div className="ae-bar-label">Practice website with schema markup</div>
              <div className="ae-bar-track">
                <div className="ae-bar-fill" style={{ width: '65%' }}></div>
              </div>
              <div className="ae-bar-value">Medium-High</div>
            </div>
            <div className="ae-bar-item">
              <div className="ae-bar-label">TherapyDen or TherapyTribe directory listing</div>
              <div className="ae-bar-track">
                <div className="ae-bar-fill" style={{ width: '50%' }}></div>
              </div>
              <div className="ae-bar-value">Medium</div>
            </div>
          </div>

          <p className="text-gray-300 leading-relaxed mb-4">
            After credential verification, AI looks at specialty clarity. When a patient
            asks for "a therapist who specializes in trauma and EMDR near Chicago," the
            AI needs to find a practice where that specialty is clearly documented in
            crawlable, structured text. Not buried in a paragraph, but named in page
            headings, listed in directory specialty fields, and ideally reinforced in
            review content where clients mention the specialty.
           Call <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> for a free consultation.</p>
          <p className="text-gray-300 leading-relaxed mb-4">
            Modality documentation matters too. Therapists who practice specific
            evidence-based modalities like CBT, DBT, ACT, EMDR, or somatic approaches
            should have those modalities clearly named on their website and professional
            profiles. These are the terms patients use when they already know what they
            are looking for, and they are terms AI can match to a specific provider.
           <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Claim your market territory — one client per area.</a></p>
          <p className="text-gray-300 leading-relaxed mb-4">
            For a related perspective on how schema markup factors into this,
            see our guide on{' '}
            <Link href="/blog/does-schema-markup-help-ai-search" className="text-[#F27D24] hover:underline">
              Does Schema Markup Help AI Search
            </Link>
            . The MedicalBusiness and Physician schema types are directly relevant to
            therapy practices.
           <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Run your free AI Blind Spot Scan.</a></p>
        </section>

        {/* Section 6: Trust Signals */}
        <section id="trust-signals" className="mb-14">
          <h2 className="font-plus-jakarta text-3xl font-bold text-white mb-4">
            The Trust Signals Therapists Can Build
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            The structural constraints therapists face are real, but they are not
            insurmountable. The practices that build strong AI visibility within those
            constraints tend to focus on a consistent set of approaches.
           <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a free 30-minute strategy call.</a></p>

          <div className="ae-pros-cons mb-8">
            <div className="ae-pros-box">
              <h3 className="font-plus-jakarta font-bold text-white mb-3">Signals Therapists Can Build</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>Complete, verified state licensing board listing</li>
                <li>NPI registry presence with current address and credentials</li>
                <li>Comprehensive Psychology Today profile with photo, bio, and specialties</li>
                <li>Verified Google Business Profile with full category information</li>
                <li>Schema markup on practice website (MedicalBusiness or Physician type)</li>
                <li>Detailed therapist bio with education, licensure, and approach</li>
                <li>FAQ pages addressing common presenting concerns in general terms</li>
                <li>Specialty pages for each modality and population served</li>
                <li>Consistent NAP (name, address, phone) across all directories</li>
                <li>Healthgrades or Zocdoc listing with credentials complete</li>
              </ul>
            </div>
            <div className="ae-cons-box">
              <h3 className="font-plus-jakarta font-bold text-white mb-3">Where Therapists Face Structural Limits</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>Cannot share specific patient outcomes or case details (HIPAA)</li>
                <li>Cannot publicly acknowledge that specific individuals are clients</li>
                <li>Cannot create the high-volume review layer common in other categories</li>
                <li>Low content publication frequency compared to retail or restaurant categories</li>
                <li>No event listings, product launches, or promotional content to generate citations</li>
                <li>Professional associations often restrict public marketing formats</li>
              </ul>
            </div>
          </div>

          <p className="text-gray-300 leading-relaxed mb-4">
            The FAQ approach deserves special emphasis. A therapist who publishes a
            well-constructed FAQ page answering questions like "What is the difference
            between therapy and counseling?", "How do I know if I need a therapist or
            a psychiatrist?", or "What happens in a first therapy session?" is creating
            exactly the kind of authoritative, helpful content that AI platforms look
            for when forming recommendations. None of these questions require referencing
            specific patients. All of them demonstrate expertise and helpfulness in the
            way YMYL AI standards reward.
           Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> to get started.</p>
          <p className="text-gray-300 leading-relaxed mb-4">
            Similarly, therapists can publish content describing their therapeutic
            approach in general terms: what CBT involves, how EMDR works, what an
            ACT session might look like. This content builds the specialty signal
            AI needs to match a practice to a specific patient query without requiring
            any protected health information.
           <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a></p>

          <div className="ae-callout ae-callout-success mb-6">
            <div className="ae-callout-title">The Compound Effect of Credential Depth</div>
            <p>
              Each layer of credential documentation compounds. A therapist with a
              state license listing, NPI registry presence, Psychology Today profile,
              and a detailed bio on their practice website has created four independent
              sources that agree on who they are and what they are qualified to do.
              AI platforms treat this convergence as high-confidence evidence. The
              therapist without any of those layers, regardless of clinical skill,
              simply does not exist in the AI's model of reputable providers in
              that area.
            </p>
          </div>

          <div className="ae-cta-block mb-8">
            <div className="ae-cta-block-inner">
              <p className="font-plus-jakarta font-semibold text-white mb-2">
                Is your practice building these signals?
              </p>
              <p className="text-gray-400 text-sm mb-4">
                The free Blind Spot Report from The Answer Engine shows which specific
                trust signals your practice has and which are missing, including a
                live test of what AI says when someone searches for therapists near you.
              </p>
              <Link
                href="/blindspot"
                className="ae-cta-primary"
              >
                Get Your Free Blind Spot Report
              </Link>
            </div>
          </div>
        </section>

        {/* Section 7: Comparison Table */}
        <section id="comparison" className="mb-14">
          <h2 className="font-plus-jakarta text-3xl font-bold text-white mb-4">
            How Therapists Compare to Other Healthcare Providers
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Understanding the relative position of mental health practices in the AI
            visibility landscape helps calibrate expectations. Therapists are not the
            only healthcare providers who struggle with AI visibility, but they do face
            a distinct set of constraints compared to other healthcare categories.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            The comparison with medical practices covered in our article on{' '}
            <Link href="/blog/how-medical-practices-get-found-on-ai-search" className="text-[#F27D24] hover:underline">
              How Medical Practices Get Found on AI Search
            </Link>{' '}
            is instructive. Medical practices share the YMYL standard and many of the
            same verification signals, but they have access to a wider review ecosystem
            (patients commonly review visits openly), a richer structured data vocabulary
            for specific procedures, and in many cases higher baseline web presence
            investment from larger practice management systems.
          </p>

          <div className="ae-comparison-table mb-8">
            <table>
              <thead>
                <tr>
                  <th>Signal Type</th>
                  <th>Therapists</th>
                  <th>Medical Practices</th>
                  <th>Chiropractors</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Federal credential registry (NPI)</td>
                  <td className="text-green-400">Available</td>
                  <td className="text-green-400">Available</td>
                  <td className="text-yellow-400">Limited</td>
                </tr>
                <tr>
                  <td>State licensing board listing</td>
                  <td className="text-green-400">Available</td>
                  <td className="text-green-400">Available</td>
                  <td className="text-green-400">Available</td>
                </tr>
                <tr>
                  <td>Detailed patient reviews (conditions)</td>
                  <td className="text-red-400">HIPAA constrained</td>
                  <td className="text-yellow-400">Partially constrained</td>
                  <td className="text-green-400">Generally available</td>
                </tr>
                <tr>
                  <td>Specialty-specific directories</td>
                  <td className="text-green-400">Psychology Today, TherapyDen</td>
                  <td className="text-green-400">Healthgrades, Zocdoc</td>
                  <td className="text-yellow-400">ACA directory</td>
                </tr>
                <tr>
                  <td>FAQ / educational content</td>
                  <td className="text-green-400">Strong opportunity</td>
                  <td className="text-green-400">Strong opportunity</td>
                  <td className="text-green-400">Strong opportunity</td>
                </tr>
                <tr>
                  <td>Outcome documentation</td>
                  <td className="text-red-400">Not permitted publicly</td>
                  <td className="text-yellow-400">Aggregate stats only</td>
                  <td className="text-green-400">Condition-specific content</td>
                </tr>
                <tr>
                  <td>Schema markup adoption rate</td>
                  <td className="text-red-400">Very low (~28%)</td>
                  <td className="text-yellow-400">Moderate (~45%)</td>
                  <td className="text-yellow-400">Low-moderate (~35%)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-300 leading-relaxed mb-4">
            The picture that emerges is not that therapists are uniquely disadvantaged
            in every dimension. The NPI and state licensing channels are equally
            available to mental health providers. The FAQ and educational content
            opportunity is strong. The specific disadvantage is in the social proof
            layer, where HIPAA constraints create a structural ceiling that does not
            apply to chiropractors or most other service categories.
          </p>

          <div className="ae-callout ae-callout-info mb-6">
            <div className="ae-callout-title">What This Means Competitively</div>
            <p>
              In a region where most therapists have thin web presences and constrained
              review profiles, the practice that builds strong credential documentation
              and specialty content captures a disproportionate share of AI recommendations.
              The competitive bar is not set by what is theoretically possible in the
              category. It is set by what competitors in your specific geography have
              actually built. That bar is often lower than therapists expect.
            </p>
          </div>
        </section>

        {/* Cheat Sheet */}
        <div className="ae-cheat-sheet mb-12">
          <div className="ae-cheat-sheet-title">Key Takeaways: Therapist AI Visibility</div>
          <div className="ae-takeaway">
            <div className="ae-takeaway-title">Mental health queries trigger YMYL standards</div>
            AI applies the highest level of scrutiny to therapy recommendations. Practices need
            stronger baseline authority signals than comparable providers in lower-stakes categories.
          </div>
          <div className="ae-takeaway">
            <div className="ae-takeaway-title">Credential verification is the first gate</div>
            State licensing board listing and NPI registry presence are the foundation signals.
            Without them, AI platforms have no trusted anchor for your credibility as a provider.
          </div>
          <div className="ae-takeaway">
            <div className="ae-takeaway-title">HIPAA constrains but does not eliminate visibility</div>
            The social proof gap is real, but detailed credential documentation, specialty pages,
            and FAQ content build authority within HIPAA constraints.
          </div>
          <div className="ae-takeaway">
            <div className="ae-takeaway-title">Specialty and modality clarity drive targeted queries</div>
            Therapists who clearly document their specializations (trauma, anxiety, EMDR, DBT)
            appear for specific searches that generalist or underdocumented practices miss entirely.
          </div>
          <div className="ae-takeaway">
            <div className="ae-takeaway-title">Directory consistency is the multiplier</div>
            Consistent name, address, phone, and credentials across Psychology Today, Google,
            NPI, state licensing board, and Healthgrades compounds all other signals. Inconsistency
            undermines even strong individual listings.
          </div>
          <div className="ae-takeaway">
            <div className="ae-takeaway-title">The competitive bar is often lower than expected</div>
            In most geographies, a practice that builds comprehensive credential documentation
            and specialty content will outperform competitors who have not, simply because so
            few practices in the mental health category have done this work.
          </div>
        </div>

        {/* Quote */}
        <div className="ae-quote mb-12">
          <blockquote>
            "The clients most likely to seek therapy privately and digitally are exactly
            the clients using AI to find providers. A practice that is invisible to AI
            is invisible to its highest-intent potential clients at the moment they decide
            to act."
          </blockquote>
          <cite>Justin Borges</cite>
        </div>

        {/* Inline CTA before final section */}
        <div className="ae-cta-inline mb-10">
          <p>
            Wondering how your practice compares to others in your area on AI visibility?{' '}
            <Link href="/blindspot">
              The free Blind Spot Report gives you a side-by-side picture.
            </Link>
          </p>
        </div>

        {/* 3-Tier CTA Block (MANDATORY) */}
        <div className="not-prose my-16 p-8 rounded-2xl bg-gradient-to-br from-[#F27D24]/10 to-transparent border border-[#F27D24]/20">
          <h3 className="font-plus-jakarta text-2xl font-bold text-white mb-3">
            Is Your Practice Visible to Patients Searching with AI?
          </h3>
          <p className="text-gray-400 mb-6">
            Our free Blind Spot Report shows exactly what ChatGPT and Perplexity say when
            someone asks for therapists near you, and whether your practice is in the answer.
          </p>
          <Link
            href="/blindspot"
            className="inline-flex items-center gap-2 bg-[#F27D24] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#D96416] transition-colors"
          >
            Get Your Free Blind Spot Report
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <div className="flex flex-wrap items-center gap-6 mt-6 pt-6 border-t border-[#F27D24]/10">
            <a
              href="tel:+12134442229"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (213) 444-2229
            </a>
            <a
              href="mailto:support@theanswerengine.ai"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              support@theanswerengine.ai
            </a>
          </div>
        </div>

        {/* Author Card */}
        <div className="not-prose">
            <div className="ae-author-card">
              <img
                src="/justin-borges.webp"
                alt="Justin Borges, Founder of The Answer Engine"
                style={{ width: 64, height: 64, borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }}
              />
              <div>
                <div className="ae-author-name" style={{ fontWeight: 600 }}>Justin Borges</div>
                <div className="ae-author-role" style={{ fontWeight: 400 }}>Founder, The Answer Engine</div>
                <p style={{ marginTop: 8, fontSize: '0.875rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.6 }}>Justin Borges founded The Answer Engine in 2025 after 13+ years in real estate, $200M+ in production, and discovering that AI search rankings now decide who gets cited as the answer. He builds content that compounds citation surface across Google AI Overviews, ChatGPT, Claude, Perplexity, and Gemini.</p>
              </div>
            </div>
          </div>

        {/* FAQ */}
        <section id="faq" className="mb-14">
          <h2 className="font-plus-jakarta text-3xl font-bold text-white mb-8">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {faqItems.map((item, i) => (
              <div key={i} className="border border-white/10 rounded-xl p-6 bg-white/[0.02]">
                <h3 className="font-plus-jakarta font-semibold text-white mb-3">{item.name}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{item.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Articles */}
        <section className="mb-14">
          <h2 className="font-plus-jakarta text-2xl font-bold text-white mb-6">Related Articles</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              href="/blog/how-medical-practices-get-found-on-ai-search"
              className="block p-5 rounded-xl border border-white/10 bg-white/[0.02] hover:border-[#F27D24]/40 transition-colors group"
            >
              <div className="text-xs text-[#F27D24] mb-2 font-semibold uppercase tracking-wide">Industry Guides</div>
              <div className="font-plus-jakarta font-semibold text-white group-hover:text-[#F27D24] transition-colors text-sm leading-snug">
                How Medical Practices Get Found on AI Search
              </div>
            </Link>
            <Link
              href="/blog/how-lawyers-get-found-ai-search"
              className="block p-5 rounded-xl border border-white/10 bg-white/[0.02] hover:border-[#F27D24]/40 transition-colors group"
            >
              <div className="text-xs text-[#F27D24] mb-2 font-semibold uppercase tracking-wide">Industry Guides</div>
              <div className="font-plus-jakarta font-semibold text-white group-hover:text-[#F27D24] transition-colors text-sm leading-snug">
                How Lawyers Can Get Found on AI Search
              </div>
            </Link>
            <Link
              href="/blog/does-schema-markup-help-ai-search"
              className="block p-5 rounded-xl border border-white/10 bg-white/[0.02] hover:border-[#F27D24]/40 transition-colors group"
            >
              <div className="text-xs text-[#F27D24] mb-2 font-semibold uppercase tracking-wide">Technical</div>
              <div className="font-plus-jakarta font-semibold text-white group-hover:text-[#F27D24] transition-colors text-sm leading-snug">
                Does Schema Markup Help AI Search
              </div>
            </Link>
            <Link
              href="/blog/how-online-reviews-shape-ai-recommendations"
              className="block p-5 rounded-xl border border-white/10 bg-white/[0.02] hover:border-[#F27D24]/40 transition-colors group"
            >
              <div className="text-xs text-[#F27D24] mb-2 font-semibold uppercase tracking-wide">Strategy</div>
              <div className="font-plus-jakarta font-semibold text-white group-hover:text-[#F27D24] transition-colors text-sm leading-snug">
                How Online Reviews Shape AI Recommendations
              </div>
            </Link>
          </div>
        </section>

        {/* Final CTA with pulse glow */}
        <div className="ae-final-cta">
          <h2 className="font-plus-jakarta text-2xl md:text-3xl font-bold text-white mb-4">
            Find Out If Your Practice Shows Up for Patients Asking AI
          </h2>
          <p className="text-gray-400 mb-6 max-w-xl mx-auto">
            The free Blind Spot Report tests what ChatGPT and Perplexity say when someone
            near you asks for a therapist. You will see exactly where your practice stands
            and which signals are missing.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <Link
              href="/blindspot"
              className="inline-flex items-center gap-2 bg-[#F27D24] text-white px-7 py-3.5 rounded-lg font-semibold hover:bg-[#D96416] transition-colors"
            >
              Get Your Free Blind Spot Report
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a
              href="tel:+12134442229"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors font-medium"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (213) 444-2229
            </a>
          </div>
          <p className="text-gray-600 text-sm">Free, no obligation. Results in under 5 minutes.</p>
        </div>

      </article>
    </>
  )
}
