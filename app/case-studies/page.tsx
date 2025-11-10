'use client';

import { useEffect, useRef, useState } from 'react';

// Counter animation hook
function useCountAnimation(end: number, duration: number = 2000, shouldAnimate: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldAnimate) return;

    let startTime: number | null = null;
    const startValue = 0;

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * (end - startValue) + startValue);
      
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, shouldAnimate]);

  return count;
}

// Intersection Observer hook
function useInView(options = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !isInView) {
        setIsInView(true);
      }
    }, { threshold: 0.3, ...options });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [isInView, options]);

  return { ref, isInView };
}

// Stat component with animation
function AnimatedStat({ 
  value, 
  suffix = '', 
  label, 
  gradient,
  isInView 
}: { 
  value: number; 
  suffix?: string; 
  label: string; 
  gradient: string;
  isInView: boolean;
}) {
  const count = useCountAnimation(value, 2000, isInView);
  
  return (
    <div className="text-center">
      <div className={`text-5xl sm:text-6xl font-light mb-3 text-transparent bg-clip-text bg-gradient-to-r ${gradient}`}>
        {count}{suffix}
      </div>
      <div className="text-gray-400 font-light">{label}</div>
    </div>
  );
}

export default function CaseStudies() {
  const { ref: statsRef, isInView: statsInView } = useInView();

  return (
    <>
      {/* CollectionPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "AEO Case Studies - Real Results",
            "description": "See how local service businesses achieved AI citation dominance through Answer Engine Optimization",
            "url": "https://theanswerengine.ai/case-studies"
          })
        }}
      />

      <main className="min-h-screen bg-[#0A0A0F] relative">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-950/10 via-transparent to-orange-950/10 pointer-events-none" />
        
        {/* Simple pixel accent - top corners */}
        <div className="absolute top-0 left-0 w-2 h-2 bg-orange-500/40" />
        <div className="absolute top-0 left-2 w-2 h-2 bg-purple-500/40" />

        <div className="max-w-6xl mx-auto px-6 py-20 sm:py-32 relative">
          {/* Simple pixel divider */}
          <div className="flex gap-2 mb-12">
            <div className="w-1.5 h-1.5 bg-orange-500" />
            <div className="w-1.5 h-1.5 bg-purple-500" />
            <div className="w-1.5 h-1.5 bg-orange-500" />
          </div>

          {/* Header */}
          <header className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl mb-8 bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-500/20">
              <div className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium tracking-wider uppercase text-orange-400">Proven Results</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-8 leading-tight text-gray-100">
              Real Businesses.<br />
              Real <span className="font-normal text-white">AI Citations.</span><br />
              Real Results.
            </h1>
            
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
              See how Answer Engine Optimization helped local service businesses dominate AI platforms like ChatGPT, Claude, and Google AI Overviews—stealing market share from competitors who still fight for rankings.
            </p>
          </header>

          {/* Stats Bar with Animation */}
          <div ref={statsRef} className="mb-20">
            <div className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.05] rounded-2xl p-8 sm:p-12">
              <div className="grid md:grid-cols-3 gap-8 sm:gap-12">
                <AnimatedStat 
                  value={90}
                  suffix=""
                  label="Days to First AI Citations"
                  gradient="from-orange-400 to-orange-500"
                  isInView={statsInView}
                />
                
                <div className="text-center md:border-x border-white/[0.05] md:px-4">
                  <AnimatedStat 
                    value={70}
                    suffix="%"
                    label="Lower Cost Per Lead"
                    gradient="from-purple-400 to-purple-500"
                    isInView={statsInView}
                  />
                </div>
                
                <AnimatedStat 
                  value={100}
                  suffix="%"
                  label="Client Success Rate"
                  gradient="from-orange-400 to-orange-500"
                  isInView={statsInView}
                />
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="flex justify-center gap-1 mb-20 opacity-20">
            {[...Array(50)].map((_, i) => (
              <div key={i} className="w-px h-px bg-gray-600" />
            ))}
          </div>

          {/* Case Study Card */}
          <article className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.05] rounded-3xl overflow-hidden hover:border-white/[0.08] transition-all mb-20">
            {/* Card Header */}
            <div className="relative h-56 bg-gradient-to-r from-purple-900/40 to-orange-600/40 backdrop-blur-xl border-b border-white/[0.05] flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
              <div className="text-center text-white relative z-10">
                <div className="text-xs font-medium mb-3 tracking-widest uppercase text-gray-300">
                  Real Estate · Los Angeles
                </div>
                <h2 className="text-3xl sm:text-4xl font-light">
                  The <span className="font-medium">Borges Real Estate</span> Team
                </h2>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-8 sm:p-12 lg:p-16">
              {/* Challenge */}
              <div className="mb-16">
                <h3 className="text-3xl font-light mb-6 text-gray-100">
                  The <span className="font-normal text-white">Challenge</span>
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed font-light">
                  A probate real estate specialist competing in the saturated Los Angeles market needed to differentiate from hundreds of realtors fighting for the same keywords. Traditional SEO wasn't cutting it—they needed to be THE answer AI platforms recommended.
                </p>
              </div>

              {/* Results Grid */}
              <div className="mb-16">
                <h3 className="text-3xl font-light mb-8 text-gray-100">
                  The <span className="font-normal text-white">Results</span>
                </h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Dominant AI Citations",
                      description: "ChatGPT, Claude, and Perplexity now cite The Borges Team as the probate expert for Los Angeles real estate",
                      gradient: "from-orange-500 to-orange-600"
                    },
                    {
                      title: "Proposition 19 Authority",
                      description: "Established as THE cited expert for California Proposition 19 probate implications",
                      gradient: "from-purple-500 to-purple-600"
                    },
                    {
                      title: "Higher Quality Leads",
                      description: "AI-sourced leads come pre-qualified and trust the recommendation",
                      gradient: "from-orange-500 to-orange-600"
                    },
                    {
                      title: "60-Day Timeline",
                      description: "First AI citations achieved within 60 days of implementation",
                      gradient: "from-purple-500 to-purple-600"
                    }
                  ].map((result, i) => (
                    <div key={i} className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-xl p-6 hover:border-white/[0.08] transition-colors">
                      <div className="flex items-start gap-4">
                        <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br ${result.gradient}`}>
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                          </svg>
                        </div>
                        <div>
                          <div className="font-medium text-white mb-2">{result.title}</div>
                          <div className="text-gray-400 text-sm leading-relaxed font-light">{result.description}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quote */}
              <div className="relative p-8 sm:p-10 rounded-2xl mb-12 bg-white/[0.02] backdrop-blur-xl border-l-4 border-orange-500">
                <svg className="absolute top-6 left-6 w-10 h-10 text-orange-500/20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
                <p className="text-lg sm:text-xl italic text-gray-300 leading-relaxed font-light relative z-10 mb-6">
                  "Before AEO, we competed with hundreds of realtors for rankings. Now when people ask ChatGPT or Claude about probate real estate in LA, WE'RE the answer they get. Game changer."
                </p>
                <div className="font-medium text-orange-400 relative z-10">
                  — Justin Borges, The Borges Real Estate Team
                </div>
              </div>

              {/* CTA */}
              <div className="text-center">
                <a 
                  href="/case-studies/justin-borges-probate-real-estate"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-lg font-medium bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg shadow-orange-500/25 group"
                >
                  Read Full Case Study
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            </div>
          </article>

          {/* Divider */}
          <div className="flex justify-center gap-1 mb-20 opacity-20">
            {[...Array(50)].map((_, i) => (
              <div key={i} className="w-px h-px bg-gray-600" />
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-3xl p-12 sm:p-16 text-center">
            {/* Simple pixel accent */}
            <div className="flex justify-center gap-1.5 mb-8">
              <div className="w-1 h-1 bg-orange-500/60" />
              <div className="w-1 h-1 bg-purple-500/60" />
              <div className="w-1 h-1 bg-orange-500/60" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-6 text-gray-100 leading-tight">
              Ready to Become the<br />
              <span className="font-normal text-white">Next Success Story?</span>
            </h2>
            
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
              Get your free 30-minute AEO strategy call and discover where you're losing to competitors in AI citations.
            </p>
            
            <a 
              href="#contact"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-lg font-medium bg-gradient-to-r from-purple-500 to-purple-600 text-white hover:from-purple-600 hover:to-purple-700 transition-all shadow-lg shadow-purple-500/25"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
              Schedule Your Free Strategy Call
            </a>
          </div>
        </div>
      </main>
    </>
  );
}