import type { Metadata } from 'next'

export const revalidate = 86400
export const dynamic = 'force-static'

const title = 'How to Write Blog Content That Gets Cited by AI'
const description =
  'Hub and spoke content builds topical authority so AI platforms cite your business. Learn how to structure pillar pages and supporting content that ChatGPT and Google AI trust.'
const slug = 'hub-spoke-content-strategy-ai-citations'
const publishDate = '2026-03-11'

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'hub and spoke content strategy',
    'topical authority',
    'AI citations',
    'content clusters',
    'pillar pages',
    'AEO content strategy',
    'ChatGPT content',
    'Google AI Overviews',
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
          name: 'What is a hub and spoke content strategy?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A hub and spoke content strategy creates one comprehensive pillar page (the hub) on a broad topic, surrounded by multiple supporting articles (spokes) that cover specific subtopics in depth. All spoke pages link back to the hub, and the hub links out to each spoke. This structure signals to search engines and AI platforms that your site has deep expertise on that topic.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does hub and spoke content help with AI citations?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'AI platforms like ChatGPT, Perplexity, and Google AI Overviews prioritize sources that demonstrate topical authority. When your site has a cluster of interlinked content covering every angle of a topic, AI systems recognize your site as an authoritative source and are more likely to cite it in their responses.',
          },
        },
        {
          '@type': 'Question',
          name: 'How many spoke articles do I need per hub?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most effective content clusters have between 8 and 15 spoke articles per hub. Fewer than 5 spokes usually does not demonstrate sufficient depth. More than 20 can dilute focus unless the topic genuinely warrants that breadth. Start with 8 to 10 spokes targeting the most common questions your customers ask.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is hub and spoke the same as pillar page strategy?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'They are very similar. "Pillar page" and "hub page" refer to the same concept: a comprehensive page on a broad topic. "Cluster content" and "spoke content" also mean the same thing. Hub and spoke is a more descriptive metaphor for how the content connects, but the strategy is identical.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can local service businesses use hub and spoke content?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Absolutely. A plumber could create a hub page on "Water Heater Repair" with spoke articles for specific subtopics like "Tankless vs. Tank Water Heaters," "Water Heater Repair Cost," "Signs Your Water Heater Is Failing," and city-specific pages. This approach builds the topical authority that AI platforms look for when recommending local service providers.',
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
              {/* Hub and spoke pattern */}
              <circle cx="400" cy="200" r="40" stroke="#FF6A00" strokeWidth="1" />
              <circle cx="400" cy="200" r="3" fill="#FF6A00" />
              <line x1="400" y1="200" x2="250" y2="100" stroke="#FF6A00" strokeWidth="0.5" />
              <line x1="400" y1="200" x2="550" y2="100" stroke="#FF6A00" strokeWidth="0.5" />
              <line x1="400" y1="200" x2="250" y2="300" stroke="#FF6A00" strokeWidth="0.5" />
              <line x1="400" y1="200" x2="550" y2="300" stroke="#FF6A00" strokeWidth="0.5" />
              <line x1="400" y1="200" x2="200" y2="200" stroke="#FF6A00" strokeWidth="0.5" />
              <line x1="400" y1="200" x2="600" y2="200" stroke="#FF6A00" strokeWidth="0.5" />
              <circle cx="250" cy="100" r="12" stroke="#FF6A00" strokeWidth="0.5" fill="none" />
              <circle cx="550" cy="100" r="12" stroke="#FF6A00" strokeWidth="0.5" fill="none" />
              <circle cx="250" cy="300" r="12" stroke="#FF6A00" strokeWidth="0.5" fill="none" />
              <circle cx="550" cy="300" r="12" stroke="#FF6A00" strokeWidth="0.5" fill="none" />
              <circle cx="200" cy="200" r="12" stroke="#FF6A00" strokeWidth="0.5" fill="none" />
              <circle cx="600" cy="200" r="12" stroke="#FF6A00" strokeWidth="0.5" fill="none" />
              <line x1="400" y1="200" x2="320" y2="350" stroke="#FF6A00" strokeWidth="0.3" />
              <line x1="400" y1="200" x2="480" y2="350" stroke="#FF6A00" strokeWidth="0.3" />
              <circle cx="320" cy="350" r="8" stroke="#FF6A00" strokeWidth="0.3" fill="none" />
              <circle cx="480" cy="350" r="8" stroke="#FF6A00" strokeWidth="0.3" fill="none" />
            </svg>
            <div className="relative px-8 py-16 sm:px-12 sm:py-20">
              <p className="text-sm font-medium text-orange-400 mb-4">How-To Guides</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 font-plus-jakarta">
                How to Write Blog Content That Gets Cited by AI
              </h1>
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span>March 11, 2026</span>
                <span>-</span>
                <span>10 min read</span>
                <span>-</span>
                <span>The Answer Engine Team</span>
              </div>
            </div>
          </div>

          {/* Article Body */}
          <article className="prose prose-invert prose-lg max-w-none">

            {/* Intro */}
            <p className="text-xl text-gray-300 leading-relaxed mb-10">
              Publishing random blog posts and hoping AI platforms notice is not a
              content strategy. It is a lottery ticket. The businesses that consistently
              get cited by ChatGPT, Google AI Overviews, and Perplexity share one thing
              in common:{' '}
              <strong className="text-white">they build deep clusters of interlinked
              content around the topics they want to own</strong>. That approach has a
              name: the hub and spoke content strategy. And in 2026, it is the single
              most effective way to build the topical authority that AI platforms use to
              decide who gets cited.
            </p>

            {/* Section 1 */}
            <h2 className="text-2xl font-bold text-white mt-12 mb-4 font-plus-jakarta">
              What Is Hub and Spoke Content?
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              The concept is straightforward. You create one comprehensive page (the hub)
              that covers a broad topic at a high level. Then you create multiple
              supporting pages (the spokes) that each dive deep into a specific subtopic.
              Every spoke links back to the hub. The hub links out to every spoke.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              For example, a roofing company might create a hub page titled
              &quot;Complete Guide to Roof Replacement.&quot; The spokes would cover
              specific questions: &quot;How Much Does Roof Replacement Cost?&quot;,
              &quot;Metal vs. Asphalt Shingles,&quot; &quot;Signs You Need a New
              Roof,&quot; &quot;How Long Does Roof Replacement Take?&quot;, and so on.
              Each spoke answers one question thoroughly, then links back to the hub for
              the full picture.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              This is not a new idea for SEO. What is new is how dramatically this
              structure affects your visibility on AI platforms. When Google&apos;s
              evaluation systems now prioritize demonstrated experience over theoretical
              knowledge, having a deep cluster of content on a topic is exactly the signal
              that proves you are an authority.
            </p>

            {/* Section 2 */}
            <h2 className="text-2xl font-bold text-white mt-12 mb-4 font-plus-jakarta">
              Why AI Platforms Reward Topical Authority
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              AI platforms do not just index individual pages. They assess whether a
              source has comprehensive knowledge on a topic. When ChatGPT or Perplexity
              generates an answer about roof replacement costs, it does not just look for
              one page that mentions the price. It looks for sources that also cover
              related topics: materials, timelines, permits, signs of damage, regional
              pricing differences.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              <strong className="text-white">Topical authority grows when entities and
              internal links form clear connections.</strong> When your content framework
              is coherent, both Google and AI systems recognize your site as a trusted
              source for specific topics. This is why scattered blog posts do not work.
              Ten unrelated articles about ten different topics signal that you are a
              generalist. Ten articles that all connect to one core topic signal that you
              are an expert.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              The data supports this: sites implementing robust content clusters paired
              with quality content have seen significant increases in organic traffic by
              becoming eligible for Rich Results and AI citations. The structure itself
              is a ranking signal.
            </p>

            {/* Section 3 */}
            <h2 className="text-2xl font-bold text-white mt-12 mb-4 font-plus-jakarta">
              How to Build Your First Hub and Spoke Cluster
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Building an effective content cluster requires planning before writing.
              Here is the process that works for local service businesses.
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3 font-plus-jakarta">
              Step 1: Choose Your Hub Topic
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Your hub topic should be a broad service or problem that your customers
              search for. It should be wide enough to support 8 to 15 subtopics but
              specific enough to your business. &quot;Plumbing&quot; is too broad.
              &quot;Water Heater Repair&quot; is the right scope. &quot;Bradford White
              Water Heater Pilot Light Troubleshooting&quot; is too narrow for a hub (it
              would be a great spoke).
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3 font-plus-jakarta">
              Step 2: Map Your Spoke Topics
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              List every question your customers ask about the hub topic. Check Google
              autocomplete, People Also Ask boxes, and your own intake calls and emails.
              Each question becomes a potential spoke article. Group similar questions
              together so each spoke covers one distinct subtopic.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              A good cluster for &quot;Water Heater Repair&quot; might include: cost of
              repair vs. replacement, tankless vs. tank comparison, signs of failure,
              how long water heaters last, maintenance tips, city-specific pages for each
              service area, and common problems by brand.
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3 font-plus-jakarta">
              Step 3: Write the Hub Page First
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              The hub page should cover the entire topic at a high level: 2,000 to 3,000
              words, touching on every subtopic without going too deep into any single
              one. Each subtopic section should include a natural link to its
              corresponding spoke page. Think of the hub as a table of contents that
              also provides genuine value on its own.
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3 font-plus-jakarta">
              Step 4: Write Spoke Articles That Go Deep
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Each spoke should be 1,000 to 2,000 words and answer its specific question
              thoroughly. Include real data, practical advice, and FAQ sections. Every
              spoke must link back to the hub and to at least 2 to 3 related spokes.
              This cross-linking is what builds the topical authority signal.
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3 font-plus-jakarta">
              Step 5: Add Schema Markup to Everything
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Every page in your cluster should have Article schema, FAQPage schema for
              its FAQ section, and BreadcrumbList schema showing the relationship between
              hub and spoke. This structured data helps AI platforms understand the
              hierarchy and connections between your content. Content with proper schema
              markup has a 2.5x higher chance of appearing in AI-generated answers.
            </p>

            {/* Section 4 */}
            <h2 className="text-2xl font-bold text-white mt-12 mb-4 font-plus-jakarta">
              Hub and Spoke for Local Service Businesses: Real Examples
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              The hub and spoke model works especially well for local service businesses
              because your customers are asking the same types of questions across every
              service area. Here are two examples.
            </p>

            <div className="my-6 p-6 rounded-xl border border-gray-800 bg-gray-900">
              <h3 className="text-lg font-semibold text-white mb-3 font-plus-jakarta">
                Example: HVAC Company
              </h3>
              <p className="text-gray-300 leading-relaxed mb-3">
                <strong className="text-white">Hub:</strong> &quot;AC Repair: Everything
                Homeowners Need to Know&quot;
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-1">&#8226;</span>
                  <span><strong className="text-white">Spoke 1:</strong> How Much Does AC Repair Cost? (2026 Pricing)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-1">&#8226;</span>
                  <span><strong className="text-white">Spoke 2:</strong> AC Not Cooling? 7 Common Causes and Fixes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-1">&#8226;</span>
                  <span><strong className="text-white">Spoke 3:</strong> When to Repair vs. Replace Your AC Unit</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-1">&#8226;</span>
                  <span><strong className="text-white">Spoke 4:</strong> Central AC vs. Mini-Split: Which Is Right for Your Home?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-1">&#8226;</span>
                  <span><strong className="text-white">Spokes 5 to 10:</strong> City-specific AC repair pages for each service area</span>
                </li>
              </ul>
            </div>

            <div className="my-6 p-6 rounded-xl border border-gray-800 bg-gray-900">
              <h3 className="text-lg font-semibold text-white mb-3 font-plus-jakarta">
                Example: Personal Injury Attorney
              </h3>
              <p className="text-gray-300 leading-relaxed mb-3">
                <strong className="text-white">Hub:</strong> &quot;Car Accident Lawyer:
                Your Complete Guide to Filing a Claim&quot;
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-1">&#8226;</span>
                  <span><strong className="text-white">Spoke 1:</strong> How Much Is My Car Accident Claim Worth?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-1">&#8226;</span>
                  <span><strong className="text-white">Spoke 2:</strong> What to Do After a Car Accident (Step-by-Step)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-1">&#8226;</span>
                  <span><strong className="text-white">Spoke 3:</strong> Rear-End Collision: Who Is at Fault?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-1">&#8226;</span>
                  <span><strong className="text-white">Spoke 4:</strong> How Long Does a Car Accident Lawsuit Take?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-1">&#8226;</span>
                  <span><strong className="text-white">Spokes 5 to 10:</strong> City-specific car accident attorney pages</span>
                </li>
              </ul>
            </div>

            <p className="text-gray-300 leading-relaxed mb-4">
              Notice the pattern: one broad service hub, specific question-based spokes,
              and city-specific spokes for local reach. This structure lets you dominate
              both the informational queries (what, how, why) and the transactional
              queries (near me, in [city]) for your core services.
            </p>

            {/* Section 5 */}
            <h2 className="text-2xl font-bold text-white mt-12 mb-4 font-plus-jakarta">
              Common Mistakes That Kill Content Clusters
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Most businesses that try hub and spoke content fail because of a few
              avoidable mistakes.
            </p>
            <div className="my-6 p-6 rounded-xl border border-gray-800 bg-gray-900">
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 font-bold mt-0.5">1.</span>
                  <span><strong className="text-white">Writing spokes that compete with each other.</strong> If two spoke articles target the same keyword, they cannibalize each other. Each spoke should have a clearly distinct topic and target keyword.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 font-bold mt-0.5">2.</span>
                  <span><strong className="text-white">Forgetting to interlink.</strong> The links between hub and spokes are not optional. Without them, AI platforms cannot see the topical relationship. Every spoke must link to the hub. The hub must link to every spoke.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 font-bold mt-0.5">3.</span>
                  <span><strong className="text-white">Making the hub too thin.</strong> A hub page that is just a list of links with no original content provides no value. The hub should stand on its own as a useful resource while also serving as the entry point to deeper content.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 font-bold mt-0.5">4.</span>
                  <span><strong className="text-white">Ignoring schema markup.</strong> Without Article and FAQPage schema on every page, you are leaving AI visibility on the table. Schema helps AI systems understand your content structure and trust your information.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 font-bold mt-0.5">5.</span>
                  <span><strong className="text-white">Publishing all at once, then never updating.</strong> Content clusters need maintenance. Update stats, refresh examples, and add new spokes as customer questions evolve. Freshness is a ranking signal for both Google and AI platforms.</span>
                </li>
              </ul>
            </div>

            {/* Section 6 */}
            <h2 className="text-2xl font-bold text-white mt-12 mb-4 font-plus-jakarta">
              The Bottom Line: Structure Beats Volume
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              You do not need 200 blog posts to build topical authority. You need 3 to 5
              well-structured content clusters with 8 to 15 spokes each. That is 40 to
              75 total pages of deeply interlinked, schema-marked content covering your
              core services. That level of depth is what AI platforms look for when
              deciding who deserves to be cited.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              The businesses winning AI citations right now are not the ones publishing
              the most content. They are the ones publishing the most structured content.
              Hub and spoke is how you prove to every AI platform that you are the
              definitive source on the topics your customers care about.
            </p>
          </article>

          {/* FAQ Section */}
          <section className="mt-16" aria-labelledby="faq-heading">
            <h2
              id="faq-heading"
              className="text-2xl font-bold text-white mb-8 font-plus-jakarta"
            >
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">

              <div className="p-6 rounded-xl border border-gray-800 bg-gray-900">
                <h3 className="text-lg font-semibold text-white mb-3">
                  What is a hub and spoke content strategy?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  A hub and spoke content strategy creates one comprehensive pillar page
                  (the hub) on a broad topic, surrounded by multiple supporting articles
                  (spokes) that cover specific subtopics in depth. All spoke pages link
                  back to the hub, and the hub links out to each spoke. This structure
                  signals to search engines and AI platforms that your site has deep
                  expertise on that topic.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-gray-800 bg-gray-900">
                <h3 className="text-lg font-semibold text-white mb-3">
                  How does hub and spoke content help with AI citations?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  AI platforms like ChatGPT, Perplexity, and Google AI Overviews
                  prioritize sources that demonstrate topical authority. When your site
                  has a cluster of interlinked content covering every angle of a topic,
                  AI systems recognize your site as an authoritative source and are more
                  likely to cite it in their responses.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-gray-800 bg-gray-900">
                <h3 className="text-lg font-semibold text-white mb-3">
                  How many spoke articles do I need per hub?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Most effective content clusters have between{' '}
                  <strong className="text-white">8 and 15 spoke articles</strong> per
                  hub. Fewer than 5 spokes usually does not demonstrate sufficient depth.
                  Start with 8 to 10 spokes targeting the most common questions your
                  customers ask, then expand over time.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-gray-800 bg-gray-900">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Is hub and spoke the same as pillar page strategy?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  They are very similar. &quot;Pillar page&quot; and &quot;hub page&quot;
                  refer to the same concept: a comprehensive page on a broad topic.
                  &quot;Cluster content&quot; and &quot;spoke content&quot; also mean the
                  same thing. The strategy is identical regardless of which terminology
                  you use.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-gray-800 bg-gray-900">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Can local service businesses use hub and spoke content?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Absolutely. A plumber could create a hub page on &quot;Water Heater
                  Repair&quot; with spoke articles for specific subtopics like cost
                  comparisons, maintenance tips, common problems, and city-specific
                  pages. This approach builds the topical authority that AI platforms
                  look for when recommending local service providers.
                </p>
              </div>

            </div>
          </section>

          {/* CTA Section */}
          <div className="mt-16 p-8 rounded-2xl border border-gray-800 bg-gradient-to-r from-gray-900 to-gray-800">
            <h2 className="text-2xl font-bold text-white mb-4 font-plus-jakarta">
              Want to See How AI Platforms View Your Content?
            </h2>
            <p className="text-gray-300 mb-6">
              Find out if your content structure is helping or hurting your AI
              visibility. Get a free blind spot report with real data on where you
              stand. No pitch, just the data.
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
