import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import blogPosts from './blogPosts.json';

// Static Metadata
export const metadata: Metadata = {
  title: 'Answer Engine Optimization Blog - Expert AEO Insights & Strategies | The Answer Engine',
  description: 'Expert insights on Answer Engine Optimization, AI citations, and how to get your business recommended by ChatGPT, Claude, Google AI Overviews, and Perplexity.',
  
  openGraph: {
    title: 'Answer Engine Optimization Blog - Expert AEO Insights',
    description: 'Learn how to get AI platforms to cite your business instead of competitors.',
    type: 'website',
    url: 'https://theanswerengine.ai/blog',
    images: [
      {
        url: 'https://theanswerengine.ai/images/blog-featured.png',
        width: 1200,
        height: 630,
        alt: 'Answer Engine Optimization Blog',
      }
    ],
    siteName: 'The Answer Engine',
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Answer Engine Optimization Blog',
    description: 'Expert insights on AEO and AI citations.',
    images: ['https://theanswerengine.ai/images/blog-featured.png'],
    creator: '@theanswerengine',
  },
  
  alternates: {
    canonical: 'https://theanswerengine.ai/blog',
  },
  
  keywords: [
    'answer engine optimization',
    'AEO blog',
    'AI citations',
    'ChatGPT optimization',
    'Google AI Overviews',
    'AI search optimization',
  ],
};

export default function Blog() {
  // Sort posts by date (newest first)
  const sortedPosts = [...blogPosts].sort((a, b) => 
    new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );

  // Featured posts (top 3 featured)
  const featuredPosts = sortedPosts.filter(post => post.featured).slice(0, 3);
  const allPosts = sortedPosts;

  return (
    <>
      {/* Enhanced CollectionPage Schema */}
      <Script
        id="collection-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Answer Engine Optimization Blog - AEO Insights & Strategies",
            "description": "Expert insights on Answer Engine Optimization, AI citations, and how to get your business recommended by ChatGPT, Claude, and Google AI Overviews.",
            "url": "https://theanswerengine.ai/blog",
            "inLanguage": "en-US",
            "publisher": {
              "@type": "Organization",
              "name": "The Answer Engine",
              "url": "https://theanswerengine.ai",
              "logo": {
                "@type": "ImageObject",
                "url": "https://theanswerengine.ai/TheAnswerEngine_Color.png",
                "width": 600,
                "height": 60
              }
            },
            "author": {
              "@type": "Organization",
              "name": "The Answer Engine Team",
              "url": "https://theanswerengine.ai"
            }
          })
        }}
      />

      {/* ItemList Schema for Blog Posts */}
      <Script
        id="itemlist-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": sortedPosts.map((post, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "url": `https://theanswerengine.ai/blog/${post.slug}`,
              "name": post.title
            }))
          })
        }}
      />

      {/* Breadcrumb Schema */}
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
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
              }
            ]
          })
        }}
      />

      {/* Organization Schema */}
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "The Answer Engine",
            "url": "https://theanswerengine.ai",
            "logo": "https://theanswerengine.ai/TheAnswerEngine_Color.png",
            "description": "We specialize in Answer Engine Optimization (AEO) for local service businesses, positioning companies to be cited by Google AI Overviews, ChatGPT, Claude, and Perplexity.",
            "sameAs": [
              "https://www.linkedin.com/company/theanswerengine",
              "https://twitter.com/theanswerengine"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "Sales",
              "url": "https://theanswerengine.ai/#contact"
            }
          })
        }}
      />

      {/* WebSite Schema */}
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "The Answer Engine",
            "url": "https://theanswerengine.ai",
            "potentialAction": {
              "@type": "SearchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://theanswerengine.ai/blog?q={search_term_string}"
              },
              "query-input": "required name=search_term_string"
            }
          })
        }}
      />

      <main className="min-h-screen bg-[#0A0A0F] relative">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-950/10 via-transparent to-orange-950/10 pointer-events-none" />
        
        {/* Pixel accents */}
        <div className="absolute top-0 left-0 w-2 h-2 bg-orange-500/40" />
        <div className="absolute top-0 left-2 w-2 h-2 bg-purple-500/40" />

        <div className="max-w-6xl mx-auto px-6 py-20 sm:py-32 relative">
          {/* Pixel divider */}
          <div className="flex gap-2 mb-12">
            <div className="w-1.5 h-1.5 bg-orange-500" />
            <div className="w-1.5 h-1.5 bg-purple-500" />
            <div className="w-1.5 h-1.5 bg-orange-500" />
          </div>

          {/* Header */}
          <header className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl mb-8 bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-500/20">
              <div className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium tracking-wider uppercase text-orange-400">AEO Insights</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-8 leading-tight text-gray-100">
              Answer Engine<br />
              <span className="font-normal text-white">Optimization Blog</span>
            </h1>
            
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
              Expert insights on getting your business cited by AI platforms like ChatGPT, Claude, Google AI Overviews, and Perplexity.
            </p>
          </header>

          {/* Divider */}
          <div className="flex justify-center gap-1 mb-20 opacity-20">
            {[...Array(50)].map((_, i) => (
              <div key={i} className="w-px h-px bg-gray-600" />
            ))}
          </div>

          {/* Featured Posts Section */}
          {featuredPosts.length > 0 && (
            <>
              <div className="mb-12">
                <h2 className="text-2xl font-light text-white mb-2">
                  <span className="font-normal">Featured</span> Articles
                </h2>
                <p className="text-gray-400 font-light">Essential reading for Answer Engine Optimization</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-20">
                {featuredPosts.map((post) => (
                  <article 
                    key={post.id}
                    className="bg-white/[0.03] backdrop-blur-xl border border-orange-500/20 rounded-2xl overflow-hidden hover:border-orange-500/40 transition-all group"
                  >
                    <Link href={`/blog/${post.slug}`} className="block">
                      <div className="relative h-48 bg-gradient-to-br from-purple-900/40 to-orange-600/40 flex items-center justify-center">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
                        <img 
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover opacity-80"
                        />
                        <div className="absolute top-4 right-4 px-3 py-1 bg-orange-500 text-white text-xs font-medium rounded-full">
                          Featured
                        </div>
                      </div>
                      
                      <div className="p-8">
                        <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                          <span>{post.category}</span>
                          <span>•</span>
                          <span>{post.readTime}</span>
                        </div>
                        
                        <h3 className="text-xl font-light text-white mb-3 group-hover:text-orange-400 transition-colors">
                          {post.title}
                        </h3>
                        
                        <p className="text-gray-400 leading-relaxed font-light mb-4 text-sm">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center gap-2 text-orange-400 font-medium text-sm">
                          Read Article
                          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                          </svg>
                        </div>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>

              {/* Divider */}
              <div className="flex justify-center gap-1 mb-20 opacity-20">
                {[...Array(50)].map((_, i) => (
                  <div key={i} className="w-px h-px bg-gray-600" />
                ))}
              </div>
            </>
          )}

          {/* All Posts Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-light text-white mb-2">
              <span className="font-normal">All</span> Articles
            </h2>
            <p className="text-gray-400 font-light">Complete library of AEO insights and strategies</p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {allPosts.map((post) => (
              <article 
                key={post.id}
                className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.05] rounded-2xl overflow-hidden hover:border-white/[0.08] transition-all group"
              >
                <Link href={`/blog/${post.slug}`} className="block">
                  <div className="relative h-48 bg-gradient-to-br from-purple-900/40 to-orange-600/40 flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
                    <img 
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover opacity-80"
                    />
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                      <span>{post.category}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-2xl font-light text-white mb-3 group-hover:text-orange-400 transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-400 leading-relaxed font-light mb-4">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center gap-2 text-orange-400 font-medium">
                      Read Article
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          {/* Divider */}
          <div className="flex justify-center gap-1 mb-20 opacity-20">
            {[...Array(50)].map((_, i) => (
              <div key={i} className="w-px h-px bg-gray-600" />
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-3xl p-12 sm:p-16 text-center">
            <div className="flex justify-center gap-1.5 mb-8">
              <div className="w-1 h-1 bg-orange-500/60" />
              <div className="w-1 h-1 bg-purple-500/60" />
              <div className="w-1 h-1 bg-orange-500/60" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-6 text-gray-100 leading-tight">
              Ready to Get<br />
              <span className="font-normal text-white">Cited by AI?</span>
            </h2>
            
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
              Schedule your free 30-minute AEO strategy call and discover where you're losing to competitors in AI citations.
            </p>
            
            <a 
              href="/#contact"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-lg font-medium bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg shadow-orange-500/25"
            >
              Schedule Free Strategy Call
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </div>
      </main>
    </>
  );
}