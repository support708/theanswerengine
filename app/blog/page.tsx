'use client';

import { useState } from 'react';
import { PersonSchema, BreadcrumbSchema } from '../components/schema';
import blogPosts from './blogPosts.json';

const POSTS_PER_PAGE = 9;

export default function Blog() {
  const [currentPage, setCurrentPage] = useState(1);

  // Sort posts by date (newest first)
  const sortedPosts = [...blogPosts].sort((a, b) => 
    new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );

  // Calculate pagination
  const totalPages = Math.ceil(sortedPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const currentPosts = sortedPosts.slice(startIndex, endIndex);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Blog CollectionPage Schema */}
      <script
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
              "logo": {
                "@type": "ImageObject",
                "url": "https://theanswerengine.ai/TheAnswerEngine_Color_just_logo.png"
              }
            },
            "author": {
              "@type": "Person",
              "name": "Justin Borges",
              "url": "https://theanswerengine.ai/about"
            }
          })
        }}
      />

      {/* Person Schema */}
      <PersonSchema />

      {/* Breadcrumb Schema */}
      <BreadcrumbSchema 
        items={[
          { name: "Home", url: "https://theanswerengine.ai" },
          { name: "Blog", url: "https://theanswerengine.ai/blog" }
        ]}
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
              Expert insights on getting your business cited by AI platforms like ChatGPT, Claude, and Google AI Overviews.
            </p>
          </header>

          {/* Divider */}
          <div className="flex justify-center gap-1 mb-20 opacity-20">
            {[...Array(50)].map((_, i) => (
              <div key={i} className="w-px h-px bg-gray-600" />
            ))}
          </div>

          {/* Blog Posts Grid - DYNAMIC */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {currentPosts.map((post) => (
              <article 
                key={post.id}
                className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.05] rounded-2xl overflow-hidden hover:border-white/[0.08] transition-all group"
              >
                <a href={`/blog/${post.slug}`} className="block">
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
                    
                    <h2 className="text-2xl font-light text-white mb-3 group-hover:text-orange-400 transition-colors">
                      {post.title}
                    </h2>
                    
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
                </a>
              </article>
            ))}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-4 mb-20">
              {/* Previous Button */}
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
                  currentPage === 1
                    ? 'bg-white/[0.02] text-gray-600 cursor-not-allowed'
                    : 'bg-white/[0.05] text-white hover:bg-white/[0.08] border border-white/[0.1]'
                }`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
                Previous
              </button>

              {/* Page Numbers */}
              <div className="flex items-center gap-2">
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => handlePageChange(i + 1)}
                    className={`w-10 h-10 rounded-lg font-medium transition-all ${
                      currentPage === i + 1
                        ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white'
                        : 'bg-white/[0.05] text-gray-400 hover:bg-white/[0.08]'
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>

              {/* Next Button */}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
                  currentPage === totalPages
                    ? 'bg-white/[0.02] text-gray-600 cursor-not-allowed'
                    : 'bg-white/[0.05] text-white hover:bg-white/[0.08] border border-white/[0.1]'
                }`}
              >
                Next
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>
          )}

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
              href="/contact"
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