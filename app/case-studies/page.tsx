'use client';

import { useEffect, useRef, useState } from 'react';

function useCountAnimation(end: number, duration: number = 2000, shouldAnimate: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldAnimate) return;

    let startTime: number | null = null;
    const startValue = 0;

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
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

function AnimatedStat({ 
  value, 
  suffix = '', 
  label,
  sublabel,
  isInView,
  gradient = "from-[#f27d24] to-[#d66d1f]"
}: { 
  value: number; 
  suffix?: string; 
  label: string;
  sublabel?: string;
  isInView: boolean;
  gradient?: string;
}) {
  const count = useCountAnimation(value, 2000, isInView);
  
  return (
    <div className="text-center">
      <div className={`text-5xl sm:text-6xl font-semibold mb-3 text-transparent bg-clip-text bg-gradient-to-r ${gradient}`}>
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-white font-medium text-base mb-1">{label}</div>
      {sublabel && <div className="text-gray-500 text-sm">{sublabel}</div>}
    </div>
  );
}

export default function CaseStudies() {
  const { ref: statsRef, isInView: statsInView } = useInView();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "AEO Case Studies - Real Results from Answer Engine Optimization",
            "description": "See how local service businesses achieved AI citation dominance through Answer Engine Optimization. Real case studies showing ChatGPT, Claude, and Google AI Overviews citations.",
            "url": "https://theanswerengine.ai/case-studies",
            "inLanguage": "en-US",
            "publisher": {
              "@type": "Organization",
              "name": "The Answer Engine",
              "url": "https://theanswerengine.ai",
              "logo": {
                "@type": "ImageObject",
                "url": "https://theanswerengine.ai/TheAnswerEngine_white%20logo%20only.png"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5.0",
                "reviewCount": "1",
                "bestRating": "5",
                "worstRating": "1"
              }
            }
          })
        }}
      />

      <script
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
                "name": "Case Studies",
                "item": "https://theanswerengine.ai/case-studies"
              }
            ]
          })
        }}
      />

      <main className="min-h-screen bg-[#0F1117] relative">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-950/5 via-transparent to-orange-950/5 pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 py-20 sm:py-32 relative">
          <header className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl mb-8 bg-[#f27d24]/10 border border-[#f27d24]/20">
              <div className="w-2 h-2 bg-[#f27d24] rounded-full" />
              <span className="text-sm font-semibold tracking-wider uppercase text-[#f27d24]">Proven Results</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-8 leading-tight text-white font-heading">
              Real Businesses. Real AI Citations.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f27d24] to-[#d66d1f]">Real Results.</span>
            </h1>
            
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              See how Answer Engine Optimization helped local service businesses dominate AI search—generating qualified leads from ChatGPT, Claude, and Google AI Overviews while competitors fight for rankings.
            </p>
          </header>

          {/* Updated Stats Section - CORRECTED NUMBERS */}
          <div ref={statsRef} className="mb-20">
            <div className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-8 sm:p-12">
              <div className="text-center mb-8">
                <p className="text-gray-400 text-sm uppercase tracking-wider mb-2">Current Performance</p>
                <h2 className="text-2xl font-semibold text-white font-heading">Verified Results</h2>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 sm:gap-12">
                <AnimatedStat 
                  value={3362}
                  suffix=""
                  label="Monthly Clicks"
                  sublabel="From organic search alone"
                  isInView={statsInView}
                />
                
                <div className="md:border-x border-white/[0.08] md:px-4">
                  <AnimatedStat 
                    value={1000}
                    suffix="+"
                    label="Search Queries Captured"
                    sublabel="High-intent local searches"
                    isInView={statsInView}
                    gradient="from-[#362478] to-[#2a1a5f]"
                  />
                </div>
                
                <AnimatedStat 
                  value={694}
                  suffix=""
                  label="Page 1 Rankings"
                  sublabel="247 in positions 1-3"
                  isInView={statsInView}
                />
              </div>
              
              <div className="text-center mt-8 pt-8 border-t border-white/[0.08]">
                <p className="text-gray-400 text-sm">
                  Source: Google Search Console, November 2025 | LA County: 70,000+ competing agents
                </p>
              </div>
            </div>
          </div>

          {/* Separator */}
          <div className="max-w-xs mx-auto h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-20" />

          {/* Case Study Card - METHODOLOGY PROTECTED */}
          <article className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-3xl overflow-hidden hover:border-white/[0.08] transition-all mb-20">
            <div className="relative h-56 bg-gradient-to-r from-[#362478]/40 to-[#f27d24]/40 backdrop-blur-xl border-b border-white/[0.08] flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
              <div className="text-center text-white relative z-10">
                <div className="text-xs font-semibold mb-3 tracking-widest uppercase text-gray-300">
                  Real Estate · Los Angeles County
                </div>
                <h2 className="text-3xl sm:text-4xl font-semibold font-heading">
                  The Borges Real Estate Team
                </h2>
              </div>
            </div>

            <div className="p-8 sm:p-12 lg:p-16">
              {/* The Challenge */}
              <div className="mb-16">
                <h3 className="text-3xl font-semibold mb-6 text-white font-heading">
                  The Challenge
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  Justin Borges: 13+ years experience, $200M+ in career sales, genuine expertise in complex transactions most agents avoid.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  The problem? <span className="text-white font-semibold">70,000 competing agents</span> in LA County. National brands with unlimited budgets. When prospects searched online, they found Zillow—not Justin.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Page 2-3 rankings = invisible. Expertise existed, but online authority didn't. And when prospects asked ChatGPT or Claude for recommendations? Justin wasn't mentioned.
                </p>
              </div>

              {/* The Approach - ABSTRACTED */}
              <div className="mb-16">
                <h3 className="text-3xl font-semibold mb-6 text-white font-heading">
                  The Approach
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  We didn't try to beat Zillow at their game. We played a different game entirely.
                </p>

                <div className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-xl p-8 mb-8">
                  <h4 className="text-xl font-semibold text-white mb-6">The Strategic Shift</h4>
                  
                  <div className="space-y-6">
                    <div>
                      <div className="text-sm text-gray-500 mb-2 uppercase tracking-wide">Instead Of:</div>
                      <div className="text-gray-300 p-4 bg-white/[0.03] rounded-lg border border-red-500/20">
                        Competing for "real estate agent near me" (impossible to win against Zillow's $2B budget)
                      </div>
                    </div>
                    
                    <div className="flex justify-center">
                      <svg className="w-6 h-6 text-[#f27d24]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </div>
                    
                    <div>
                      <div className="text-sm text-[#f27d24] mb-2 uppercase tracking-wide font-semibold">We Focused On:</div>
                      <div className="text-white p-4 bg-[#f27d24]/10 rounded-lg border border-[#f27d24]/30 font-medium">
                        Owning specific expertise areas where Justin has genuine authority and prospects desperately need guidance
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-[#f27d24]/10 border-l-4 border-[#f27d24] p-6 rounded-r-xl mb-8">
                  <h4 className="text-lg font-semibold text-white mb-3">The Strategy</h4>
                  <p className="text-gray-300 mb-4">
                    We identified the complex problems Justin solves every day—the situations where his 13+ years of expertise actually matters:
                  </p>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-3">
                      <span className="text-[#f27d24] font-bold">→</span>
                      <span><strong className="text-white">Complex local regulations</strong> that confuse homeowners and investors</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#f27d24] font-bold">→</span>
                      <span><strong className="text-white">Specialized transaction types</strong> most agents avoid or handle poorly</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#f27d24] font-bold">→</span>
                      <span><strong className="text-white">Timely local knowledge</strong> that national brands can't match</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#f27d24] font-bold">→</span>
                      <span><strong className="text-white">Investment opportunities</strong> requiring deep market expertise</span>
                    </li>
                  </ul>
                </div>

                <p className="text-xl font-semibold text-[#f27d24]">
                  Result: From invisible to 3,300+ monthly clicks and 694 page-one rankings.
                </p>
              </div>

              {/* The Results - UPDATED NUMBERS */}
              <div className="mb-16">
                <h3 className="text-3xl font-semibold mb-8 text-white font-heading">
                  The Results
                </h3>

                <div className="grid sm:grid-cols-2 gap-6 mb-8">
                  <div className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-xl p-6">
                    <div className="text-4xl font-semibold text-[#f27d24] mb-3">3,362</div>
                    <div className="text-white font-medium mb-2">Monthly Clicks</div>
                    <div className="text-gray-400 text-sm">~146 clicks per day, 100% organic</div>
                  </div>

                  <div className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-xl p-6">
                    <div className="text-4xl font-semibold text-[#362478] mb-3">1,000+</div>
                    <div className="text-white font-medium mb-2">Search Queries Captured</div>
                    <div className="text-gray-400 text-sm">High-intent problem searches</div>
                  </div>

                  <div className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-xl p-6">
                    <div className="text-4xl font-semibold text-[#f27d24] mb-3">694</div>
                    <div className="text-white font-medium mb-2">Page 1 Rankings</div>
                    <div className="text-gray-400 text-sm">247 in positions 1-3 (prime AI citation range)</div>
                  </div>

                  <div className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-xl p-6">
                    <div className="text-4xl font-semibold text-[#362478] mb-3">648</div>
                    <div className="text-white font-medium mb-2">Pages Indexed</div>
                    <div className="text-gray-400 text-sm">Content moat competitors can't replicate</div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[#f27d24]/10 to-[#d66d1f]/10 border border-[#f27d24]/20 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <svg className="w-6 h-6 text-[#f27d24]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-white mb-2">What These Numbers Mean</div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Justin isn't competing for generic searches against Zillow's $2B marketing budget. He owns specific expertise areas where he has genuine authority. That's where AI platforms look for sources to cite. That's where qualified leads come from. That's a game he can win.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* The Pattern - ABSTRACTED */}
              <div className="mb-16">
                <h3 className="text-3xl font-semibold mb-6 text-white font-heading">
                  The Pattern
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed mb-8">
                  Every local service business has three types of expertise opportunities:
                </p>
                
                <div className="space-y-6">
                  <div className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-xl p-6">
                    <h4 className="text-xl font-semibold text-white mb-3">1. Complex Problems Competitors Avoid</h4>
                    <p className="text-gray-300 mb-3">
                      Regulations, compliance, technical processes that require real expertise to navigate
                    </p>
                    <p className="text-sm text-gray-400 italic">
                      For you: Permits, certifications, industry regulations, technical requirements...
                    </p>
                  </div>

                  <div className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-xl p-6">
                    <h4 className="text-xl font-semibold text-white mb-3">2. Specialized Services Only You Offer</h4>
                    <p className="text-gray-300 mb-3">
                      Niche expertise that differentiates you from generalist competitors
                    </p>
                    <p className="text-sm text-gray-400 italic">
                      For you: Unique certifications, specialized methods, specific client types...
                    </p>
                  </div>

                  <div className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-xl p-6">
                    <h4 className="text-xl font-semibold text-white mb-3">3. Timely Local Knowledge Nationals Can't Match</h4>
                    <p className="text-gray-300 mb-3">
                      Market conditions, regional regulations, community needs that require boots on the ground
                    </p>
                    <p className="text-sm text-gray-400 italic">
                      For you: Local regulations, community events, regional market conditions...
                    </p>
                  </div>
                </div>

                <p className="text-xl font-semibold text-[#f27d24] mt-8">
                  The question: What are YOUR expertise areas where you have unfair advantage?
                </p>
              </div>

              {/* Testimonial - UPDATED */}
              <div className="relative p-8 sm:p-10 rounded-2xl mb-12 bg-white/[0.03] backdrop-blur-xl border-l-4 border-[#f27d24]">
                <svg className="absolute top-6 left-6 w-10 h-10 text-[#f27d24]/20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
                <p className="text-lg sm:text-xl italic text-gray-300 leading-relaxed relative z-10 mb-6">
                  "15 years in LA real estate, but online I was invisible. Buried on page 2-3 for everything.
                  <br/><br/>
                  We identified specific problems where I have genuine expertise—complex situations most competitors avoid. Now I'm getting over 3,000 clicks a month without spending a dime on ads.
                  <br/><br/>
                  But the real change? Lead quality.
                  <br/><br/>
                  Before: Price shoppers comparing five options.<br/>
                  After: People who trust my expertise and need MY help specifically.
                  <br/><br/>
                  That's a completely different sales conversation. Those deals close way faster."
                </p>
                <div className="font-semibold text-[#f27d24] relative z-10">
                  — Justin Borges, The Borges Real Estate Team
                </div>
              </div>

              {/* What This Means */}
              <div className="mb-12">
                <h3 className="text-3xl font-semibold mb-6 text-white font-heading">
                  What This Means for Your Business
                </h3>
                
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  Justin's in real estate with 70,000 competitors. Your market probably has 50-200. <span className="text-white font-semibold">The opportunity is 10x bigger.</span>
                </p>

                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  When prospects ask AI platforms specific questions in your field, AI looks for authoritative sources—not whoever spent the most on ads.
                </p>

                <p className="text-xl font-semibold text-white">
                  Answer Engine Optimization positions YOUR expertise where AI platforms cite sources.
                </p>
              </div>

              <div className="text-center">
                <a 
                  href="/case-studies/justin-borges"
                  className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-xl text-lg font-semibold text-white transition-all shadow-[0_4px_24px_rgba(242,125,36,0.3)] hover:shadow-[0_8px_32px_rgba(242,125,36,0.4)] hover:-translate-y-0.5 bg-[#f27d24] hover:bg-[#d66d1f]"
                >
                  Read Full Case Study
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            </div>
          </article>

          {/* Separator */}
          <div className="max-w-xs mx-auto h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-20" />

          {/* CTA */}
          <div className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-3xl p-12 sm:p-16 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-white leading-tight font-heading">
              Ready to Become the Next Success Story?
            </h2>
            
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              If it works in the most competitive market in America (70,000 agents), it works for your industry with 10x less competition.
            </p>
            
            <a 
              href="/#audit-form"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-xl text-lg font-semibold text-white transition-all shadow-[0_4px_24px_rgba(54,36,120,0.3)] hover:shadow-[0_8px_32px_rgba(54,36,120,0.4)] hover:-translate-y-0.5 bg-[#362478] hover:bg-[#2a1a5f]"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
              Get Your Free Lead Analysis
            </a>
          </div>
        </div>
      </main>
    </>
  );
}