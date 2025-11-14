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
                "url": "https://theanswerengine.ai/TheAnswerEngine_Color.png",
                "width": 600,
                "height": 60
              }
            },
            "author": {
              "@type": "Organization",
              "name": "The Answer Engine Team",
              "url": "https://theanswerengine.ai"
            },
            "mainEntity": {
              "@type": "ItemList",
              "itemListElement": [
                {
                  "@type": "Article",
                  "position": 1,
                  "headline": "How The Borges Real Estate Team Achieved Page 1 Authority in 90 Days",
                  "description": "A local real estate specialist went from page 2-3 invisibility to page 1 authority on 12+ high-value queries through strategic Answer Engine Optimization.",
                  "url": "https://theanswerengine.ai/case-studies/justin-borges-probate-real-estate",
                  "author": {
                    "@type": "Organization",
                    "name": "The Answer Engine Team"
                  },
                  "publisher": {
                    "@type": "Organization",
                    "name": "The Answer Engine"
                  }
                }
              ]
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

      <script
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "AEO Case Studies - Real Results from Answer Engine Optimization",
            "description": "See how local service businesses achieved AI citation dominance through Answer Engine Optimization.",
            "url": "https://theanswerengine.ai/case-studies",
            "inLanguage": "en-US",
            "isPartOf": {
              "@type": "WebSite",
              "name": "The Answer Engine",
              "url": "https://theanswerengine.ai"
            },
            "about": {
              "@type": "Thing",
              "name": "Answer Engine Optimization Case Studies"
            }
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "How The Borges Real Estate Team Achieved Page 1 Authority in 90 Days",
            "description": "A local real estate specialist went from page 2-3 invisibility to page 1 authority on 12+ high-value queries through strategic Answer Engine Optimization.",
            "author": {
              "@type": "Organization",
              "name": "The Answer Engine Team"
            },
            "publisher": {
              "@type": "Organization",
              "name": "The Answer Engine",
              "logo": {
                "@type": "ImageObject",
                "url": "https://theanswerengine.ai/TheAnswerEngine_Color.png"
              }
            },
            "datePublished": "2025-11-09",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://theanswerengine.ai/case-studies"
            }
          })
        }}
      />

      <main className="min-h-screen bg-[#0A0A0F] relative">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-950/10 via-transparent to-orange-950/10 pointer-events-none" />
        
        <div className="absolute top-0 left-0 w-2 h-2 bg-orange-500/40" />
        <div className="absolute top-0 left-2 w-2 h-2 bg-purple-500/40" />

        <div className="max-w-6xl mx-auto px-6 py-20 sm:py-32 relative">
          <div className="flex gap-2 mb-12">
            <div className="w-1.5 h-1.5 bg-orange-500" />
            <div className="w-1.5 h-1.5 bg-purple-500" />
            <div className="w-1.5 h-1.5 bg-orange-500" />
          </div>

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
              See how Answer Engine Optimization helped local service businesses dominate AI search generating qualified leads from ChatGPT, Claude, and Google AI Overviews while competitors still fight for page rankings.
            </p>
          </header>

          <div ref={statsRef} className="mb-20">
            <div className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.05] rounded-2xl p-8 sm:p-12">
              <div className="grid md:grid-cols-3 gap-8 sm:gap-12">
                <AnimatedStat 
                  value={680}
                  suffix=""
                  label="Weekly Clicks Without Ad Spend"
                  gradient="from-orange-400 to-orange-500"
                  isInView={statsInView}
                />
                
                <div className="text-center md:border-x border-white/[0.05] md:px-4">
                  <AnimatedStat 
                    value={12}
                    suffix="+"
                    label="Position 1-5 Rankings Achieved"
                    gradient="from-purple-400 to-purple-500"
                    isInView={statsInView}
                  />
                </div>
                
                <AnimatedStat 
                  value={90}
                  suffix=" Days"
                  label="From Invisible to Authority"
                  gradient="from-orange-400 to-orange-500"
                  isInView={statsInView}
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-1 mb-20 opacity-20">
            {[...Array(50)].map((_, i) => (
              <div key={i} className="w-px h-px bg-gray-600" />
            ))}
          </div>

          <article className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.05] rounded-3xl overflow-hidden hover:border-white/[0.08] transition-all mb-20">
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

            <div className="p-8 sm:p-12 lg:p-16">
              <div className="mb-16">
                <h3 className="text-3xl font-light mb-6 text-gray-100">
                  The <span className="font-normal text-white">Challenge</span>
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed font-light mb-6">
                  Justin Borges had what most local service businesses have: genuine expertise built over 15 years in Los Angeles real estate. He was the go-to agent for complex transactions that most competitors avoid or don't understand.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed font-light">
                  But when potential clients searched online? They found Zillow. Not Justin.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed font-light mt-6">
                  He was ranking on page 2-3 for valuable queries—completely invisible. His expertise existed, but his online authority didn't. And in the age of AI search, being invisible to Google means being invisible to ChatGPT, Claude, and Perplexity too.
                </p>
              </div>

              <div className="mb-16">
                <h3 className="text-3xl font-light mb-6 text-gray-100">
                  The <span className="font-normal text-white">Approach</span>
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed font-light mb-6">
                  We didn't try to beat Zillow at their game. We played a different game entirely.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed font-light mb-6">
                  Instead of chasing impossible generic searches where Zillow dominates, we positioned Justin's actual expertise in specific areas where he has genuine authority—and where potential clients are desperately searching for trustworthy guidance.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed font-light">
                  The approach: Strategic positioning that transforms expertise into authority content AI engines cite.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed font-light mt-6">
                  90 days later, Justin went from page 2-3 invisibility to page 1 visibility on 12+ high-value queries—without spending a dollar on ads.
                </p>
              </div>

              <div className="mb-16">
                <h3 className="text-3xl font-light mb-8 text-gray-100">
                  The <span className="font-normal text-white">Results</span>
                </h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    {
                      metric: "Position 1",
                      title: "The Question Your Clients Always Ask",
                      description: "Ranked #1 for the investment/ROI question in Justin's niche. What's the ROI question YOUR clients ask before hiring you?",
                      gradient: "from-orange-500 to-orange-600"
                    },
                    {
                      metric: "63 Clicks",
                      title: "The Regulation That Confuses Everyone",
                      description: "One article explaining complex local rules generated 15,752 impressions. What regulation confuses YOUR clients?",
                      gradient: "from-purple-500 to-purple-600"
                    },
                    {
                      metric: "34 Clicks",
                      title: "The Urgent Opportunity You Captured Fast",
                      description: "Published expert content on time-sensitive market situation within 2 weeks. What urgent needs arise in YOUR market?",
                      gradient: "from-orange-500 to-orange-600"
                    },
                    {
                      metric: "Position 3.48",
                      title: "The Specialized Service Few Offer",
                      description: "Ranked top 5 for complex service only 5% of competitors handle. What specialized service do YOU offer that others don't?",
                      gradient: "from-purple-500 to-purple-600"
                    },
                    {
                      metric: "$17,000",
                      title: "Weekly Ad Value Generated Organically",
                      description: "680 clicks without ad spend. In your industry with your average CPC, what would that be worth?",
                      gradient: "from-orange-500 to-orange-600"
                    },
                    {
                      metric: "90 Days",
                      title: "From Invisible to Authority",
                      description: "Timeline from strategy to 12+ page 1 rankings. How much is 90 days worth to establish YOUR authority online?",
                      gradient: "from-purple-500 to-purple-600"
                    }
                  ].map((result, i) => (
                    <div key={i} className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-xl p-6 hover:border-white/[0.08] transition-colors">
                      <div className="flex items-start gap-4">
                        <div className={`flex-shrink-0 text-3xl font-light text-transparent bg-clip-text bg-gradient-to-r ${result.gradient}`}>
                          {result.metric}
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

              <div className="mb-16">
                <h3 className="text-3xl font-light mb-6 text-gray-100">
                  The <span className="font-normal text-white">Pattern</span>
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed font-light mb-8">
                  Every local service business has three types of expertise opportunities:
                </p>
                
                <div className="space-y-6">
                  <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-xl p-6">
                    <h4 className="text-xl text-white mb-3">1. The Complex Problem Most Competitors Avoid</h4>
                    <p className="text-gray-300 mb-3">
                      For Justin: confusing local regulations his competitors won't touch
                    </p>
                    <p className="text-sm text-gray-400 italic">
                      For you: licensing, permits, compliance, technical certifications, specialized methods...
                    </p>
                  </div>

                  <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-xl p-6">
                    <h4 className="text-xl text-white mb-3">2. The Specialized Service Only You (and 2-3 Others) Offer</h4>
                    <p className="text-gray-300 mb-3">
                      For Justin: complex estate transactions requiring specific expertise
                    </p>
                    <p className="text-sm text-gray-400 italic">
                      For you: niche certifications, unique methodologies, specialized equipment, industry sub-specializations...
                    </p>
                  </div>

                  <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-xl p-6">
                    <h4 className="text-xl text-white mb-3">3. The Local/Timely Knowledge National Brands Can't Match</h4>
                    <p className="text-gray-300 mb-3">
                      For Justin: neighborhood-specific market dynamics and urgent local issues
                    </p>
                    <p className="text-sm text-gray-400 italic">
                      For you: local regulations, regional variations, community-specific needs, timely opportunities...
                    </p>
                  </div>
                </div>

                <p className="text-lg text-gray-300 leading-relaxed font-light mt-8">
                  We positioned Justin's expertise in all three categories.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed font-light mt-4">
                  Result: 12+ position 1-5 rankings where his ideal clients search for guidance.
                </p>
                <p className="text-lg font-medium text-orange-400 mt-6">
                  The question: What are YOUR three categories?
                </p>
              </div>

              <div className="mb-16">
                <h3 className="text-3xl font-light mb-8 text-gray-100">
                  Strategic Content <span className="font-normal text-white">Performance</span>
                </h3>
                
                <div className="space-y-6">
                  <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-xl p-6">
                    <h4 className="text-xl text-white mb-4">Content Type 1: The Regulation Nobody Else Explains Clearly</h4>
                    <div className="grid sm:grid-cols-3 gap-4 mb-4">
                      <div>
                        <div className="text-sm text-gray-500">Performance</div>
                        <div className="text-orange-400 font-medium">63 clicks in 7 days</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Visibility</div>
                        <div className="text-orange-400 font-medium">15,752 impressions</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Result</div>
                        <div className="text-orange-400 font-medium">Authority positioning</div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-400 italic">
                      Translation for your business: What regulation, compliance requirement, or technical standard confuses your customers? That's your opportunity.
                    </p>
                  </div>

                  <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-xl p-6">
                    <h4 className="text-xl text-white mb-4">Content Type 2: The Urgent Situation Requiring Fast Expert Guidance</h4>
                    <div className="grid sm:grid-cols-3 gap-4 mb-4">
                      <div>
                        <div className="text-sm text-gray-500">Speed</div>
                        <div className="text-purple-400 font-medium">Published in 2 weeks</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Early Traction</div>
                        <div className="text-purple-400 font-medium">34 clicks in 3 weeks</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Position</div>
                        <div className="text-purple-400 font-medium">4.76 and climbing</div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-400 italic">
                      Translation for your business: What time-sensitive situations create immediate need in your market? Be the first expert voice when it happens.
                    </p>
                  </div>

                  <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-xl p-6">
                    <h4 className="text-xl text-white mb-4">Content Type 3: The Specialized Process Your Competitors Don't Understand</h4>
                    <div className="grid sm:grid-cols-3 gap-4 mb-4">
                      <div>
                        <div className="text-sm text-gray-500">Performance</div>
                        <div className="text-orange-400 font-medium">21 clicks in 7 days</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Position</div>
                        <div className="text-orange-400 font-medium">3.48 (AI citation range)</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Lead Type</div>
                        <div className="text-orange-400 font-medium">High-value, complex</div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-400 italic">
                      Translation for your business: What specialized service or process separates you from 95% of competitors? That's your positioning advantage.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-16">
                <h3 className="text-3xl font-light mb-8 text-gray-100">
                  How This Translates to <span className="font-normal text-white">Your Business</span>
                </h3>
                
                <p className="text-lg text-gray-300 leading-relaxed font-light mb-8">
                  Justin's in real estate. You're not. But the principles are identical:
                </p>

                <div className="space-y-6">
                  <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-xl p-6">
                    <h4 className="text-lg font-medium text-orange-400 mb-3">IF YOU'RE A CONTRACTOR:</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li>• The complex problem: Permit requirements, code compliance, specialized techniques</li>
                      <li>• The specialized service: Certifications only 5% of contractors have</li>
                      <li>• The local knowledge: Regional building codes, climate-specific solutions</li>
                    </ul>
                  </div>

                  <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-xl p-6">
                    <h4 className="text-lg font-medium text-purple-400 mb-3">IF YOU'RE AN ATTORNEY:</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li>• The complex problem: Legal issues most attorneys won't touch</li>
                      <li>• The specialized service: Your niche practice area (only 3 firms in the region)</li>
                      <li>• The local knowledge: State-specific regulations, local court procedures</li>
                    </ul>
                  </div>

                  <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-xl p-6">
                    <h4 className="text-lg font-medium text-orange-400 mb-3">IF YOU'RE A CPA:</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li>• The complex problem: Complex tax situations (real estate, crypto, international)</li>
                      <li>• The specialized service: Industry specialization (construction, medical, etc.)</li>
                      <li>• The local knowledge: State/local tax nuances most CPAs miss</li>
                    </ul>
                  </div>

                  <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-xl p-6">
                    <h4 className="text-lg font-medium text-purple-400 mb-3">IF YOU'RE IN HOME SERVICES:</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li>• The complex problem: Technical issues most companies can't diagnose</li>
                      <li>• The specialized service: Equipment/methods competitors don't offer</li>
                      <li>• The local knowledge: Local codes, climate issues, regional factors</li>
                    </ul>
                  </div>
                </div>

                <p className="text-lg text-gray-300 leading-relaxed font-light mt-8">
                  The strategy is the same. Only the specifics change.
                </p>
                <p className="text-lg font-medium text-orange-400 mt-6">
                  The question: What are YOUR three expertise areas where you have unfair advantage?
                </p>
              </div>

              <div className="relative p-8 sm:p-10 rounded-2xl mb-12 bg-white/[0.02] backdrop-blur-xl border-l-4 border-orange-500">
                <svg className="absolute top-6 left-6 w-10 h-10 text-orange-500/20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
                <p className="text-lg sm:text-xl italic text-gray-300 leading-relaxed font-light relative z-10 mb-6">
                  "I've been in LA real estate for 15 years, but online I was invisible. Page 2-3 for everything that mattered.
                  <br/><br/>
                  Here's what changed: Instead of competing for generic searches against companies with unlimited budgets, we identified the specific problems where I have genuine expertise—the complex situations most of my competitors avoid or don't understand.
                  <br/><br/>
                  90 days later, I'm ranking #1 and page 1 for those searches.
                  <br/><br/>
                  But the real transformation wasn't the rankings—it was the lead QUALITY.
                  <br/><br/>
                  Before: Price shoppers comparing five options, focused on cost<br/>
                  After: People who already trust my expertise, focused on getting their problem solved
                  <br/><br/>
                  When someone finds my content, reads it, and calls—they're not asking 'how much do you charge?' They're saying 'I need YOUR help specifically with this complex situation.'
                  <br/><br/>
                  That's a completely different sales conversation. And those deals close way faster."
                </p>
                <div className="font-medium text-orange-400 relative z-10">
                  — Justin Borges, The Borges Real Estate Team
                </div>
              </div>

              <div className="mb-12">
                <h3 className="text-3xl font-light mb-8 text-gray-100">
                  Why This Matters for <span className="font-normal text-white">Every Local Service Business</span>
                </h3>
                
                <p className="text-lg text-gray-300 leading-relaxed font-light mb-6">
                  Your potential clients are asking AI platforms specific questions:
                </p>

                <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-xl p-8 mb-6">
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-3">
                      <span className="text-orange-400 mt-1">•</span>
                      <span>"How do I handle [complex regulatory situation]?"</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-orange-400 mt-1">•</span>
                      <span>"What should I know about [specialized service I need]?"</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-orange-400 mt-1">•</span>
                      <span>"Who can help with [urgent technical problem]?"</span>
                    </li>
                  </ul>
                </div>

                <p className="text-lg text-gray-300 leading-relaxed font-light mb-6">
                  When they ask ChatGPT, Claude, or Google AI these questions, who gets cited?
                </p>

                <p className="text-lg text-gray-300 leading-relaxed font-light mb-6">
                  Right now? Probably a national brand with no local expertise. Or a generic industry site with surface-level information.
                </p>

                <p className="text-lg text-gray-300 leading-relaxed font-light mb-6">
                  But it SHOULD be you—the local expert who actually understands the nuances, the regional factors, the specific complications.
                </p>

                <p className="text-lg text-gray-300 leading-relaxed font-light mb-6">
                  Answer Engine Optimization positions your genuine expertise where AI platforms look for authoritative sources.
                </p>

                <p className="text-lg font-medium text-white">
                  So when someone in your market asks the complex question only you can answer properly—YOUR name comes up. Not your competitor's. Not a generic national brand.
                </p>

                <p className="text-xl font-medium text-orange-400 mt-8">
                  You.
                </p>

                <p className="text-lg text-gray-300 leading-relaxed font-light mt-6">
                  That's what we do.
                </p>
              </div>

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

          <div className="flex justify-center gap-1 mb-20 opacity-20">
            {[...Array(50)].map((_, i) => (
              <div key={i} className="w-px h-px bg-gray-600" />
            ))}
          </div>

          <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-3xl p-12 sm:p-16 text-center">
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
              Get your free 30-minute AEO strategy call and discover where you're losing to competitors in AI search results.
            </p>
            
            <a 
              href="/#contact"
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