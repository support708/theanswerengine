'use client';

import { useEffect, useRef, useState } from 'react';
import { PersonSchema, BreadcrumbSchema } from './components/schema';

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

// Animated Stat Component
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
      <div className={`text-6xl sm:text-7xl font-extralight mb-4 text-transparent bg-clip-text bg-gradient-to-r ${gradient} tracking-tight`}>
        {count}{suffix}
      </div>
      <div className="text-gray-400 font-light text-sm tracking-wide uppercase">{label}</div>
    </div>
  );
}

export default function Home() {
  const { ref: statsRef, isInView: statsInView } = useInView();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    website: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      const response = await fetch('https://formspree.io/f/xqagkqwl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          company: formData.company,
          website: formData.website,
          _subject: 'New Answer Audit Request'
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', company: '', website: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <>
      {/* Custom styles with EXACT BRAND COLORS */}
      <style jsx global>{`
        @keyframes pixel-glow {
          0%, 100% { 
            box-shadow: 0 0 10px currentColor, 0 0 20px currentColor, inset 0 0 10px currentColor;
            opacity: 1;
          }
          50% { 
            box-shadow: 0 0 15px currentColor, 0 0 30px currentColor, inset 0 0 15px currentColor;
            opacity: 0.9;
          }
        }

        .luxury-pixel {
          position: relative;
          animation: pixel-glow 3s ease-in-out infinite;
        }

        .luxury-pixel::before {
          content: '';
          position: absolute;
          inset: 2px;
          background: linear-gradient(135deg, rgba(255,255,255,0.3), transparent);
        }

        /* BRAND ORANGE: #f27d24 */
        .brand-orange {
          background: linear-gradient(135deg, #f27d24, #d66d1f);
          color: #f27d24;
        }

        /* BRAND PURPLE: #362478 */
        .brand-purple {
          background: linear-gradient(135deg, #362478, #2a1a5f);
          color: #362478;
        }

        /* BRAND RED: #bf172e */
        .brand-red {
          background: linear-gradient(135deg, #bf172e, #9f1326);
          color: #bf172e;
        }

        @keyframes google-shimmer {
          0%, 100% { opacity: 1; transform: translateX(0); }
          50% { opacity: 0.8; transform: translateX(2px); }
        }

        .google-accent {
          animation: google-shimmer 4s ease-in-out infinite;
        }
      `}</style>

      {/* Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "The Answer Engine",
            "description": "Answer Engine Optimization specialists helping local service businesses get cited by AI platforms like Google AI Overviews, ChatGPT, Claude, and Perplexity",
            "url": "https://theanswerengine.ai",
            "telephone": "+1-213-444-2229",
            "email": "support@theanswerengine.ai",
            "priceRange": "$$",
            "areaServed": "United States",
            "logo": "https://theanswerengine.ai/TheAnswerEngine_Color_just_logo.png"
          })
        }}
      />

      {/* WebPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "The Answer Engine - Answer Engine Optimization (AEO)",
            "description": "Get your business cited by Google AI Overviews, ChatGPT, Claude, and Perplexity. Stop competing for rankings. Start being THE answer.",
            "url": "https://theanswerengine.ai",
            "inLanguage": "en-US"
          })
        }}
      />

      {/* Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Answer Engine Optimization",
            "description": "Professional Answer Engine Optimization service that gets local businesses cited by Google AI Overviews and other AI platforms instead of their competitors",
            "provider": {
              "@type": "Organization",
              "name": "The Answer Engine"
            },
            "serviceType": "Answer Engine Optimization",
            "areaServed": "United States"
          })
        }}
      />

      {/* FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is Answer Engine Optimization?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Answer Engine Optimization (AEO) is the practice of optimizing content to be cited by AI platforms like Google AI Overviews, ChatGPT, Claude, and Perplexity as the authoritative answer, rather than just ranking in traditional search results."
                }
              },
              {
                "@type": "Question",
                "name": "How long does it take to see results?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Most businesses see their first AI citations within 60-90 days of implementation. Full AI citation dominance across multiple platforms typically takes 3-6 months."
                }
              },
              {
                "@type": "Question",
                "name": "What's included in the Answer Authority Foundation Package?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The package includes comprehensive content optimization, technical implementation, multi-platform AI citation testing, and a 90-day performance guarantee."
                }
              }
            ]
          })
        }}
      />

      <PersonSchema />
      <BreadcrumbSchema 
        items={[
          { name: "Home", url: "https://theanswerengine.ai" }
        ]}
      />

      <main className="min-h-screen bg-[#0A0A0F] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-950/10 via-transparent to-orange-950/10 pointer-events-none" />
        
        {/* BRAND COLOR LUXURY PIXELS - Top Left */}
        <div className="absolute top-0 left-0 flex gap-1 p-2">
          <div className="luxury-pixel w-3 h-3 brand-orange rounded-sm" style={{animationDelay: '0s'}} />
          <div className="luxury-pixel w-3 h-3 brand-purple rounded-sm" style={{animationDelay: '0.5s'}} />
          <div className="luxury-pixel w-3 h-3 brand-orange rounded-sm" style={{animationDelay: '1s'}} />
        </div>

        {/* BRAND COLOR LUXURY PIXELS - Top Right */}
        <div className="absolute top-0 right-0 flex gap-1 p-2">
          <div className="luxury-pixel w-3 h-3 brand-purple rounded-sm" style={{animationDelay: '0.3s'}} />
          <div className="luxury-pixel w-3 h-3 brand-orange rounded-sm" style={{animationDelay: '0.8s'}} />
        </div>

        <section className="relative max-w-6xl mx-auto px-6 pt-20 sm:pt-32 pb-32 sm:pb-40">
          <div className="flex justify-center mb-16">
            <video 
              autoPlay 
              muted 
              loop 
              playsInline
              className="h-32 sm:h-40 w-auto opacity-90"
              poster="/TheAnswerEngine_Color_just_logo.png"
            >
              <source src="/Logo_Animation_Generation.mp4" type="video/mp4" />
              <img 
                src="/TheAnswerEngine_Color_just_logo.png" 
                alt="The Answer Engine" 
                className="h-32 sm:h-40 opacity-90"
              />
            </video>
          </div>

          {/* BRAND COLOR PIXEL DIVIDER */}
          <div className="flex justify-center gap-3 mb-12">
            <div className="luxury-pixel w-4 h-4 brand-orange rounded-sm" style={{animationDelay: '0s'}} />
            <div className="luxury-pixel w-4 h-4 brand-purple rounded-sm" style={{animationDelay: '0.4s'}} />
            <div className="luxury-pixel w-4 h-4 brand-orange rounded-sm" style={{animationDelay: '0.8s'}} />
          </div>

          <div className="text-center mb-16">
            {/* Google AI Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl mb-8 bg-gradient-to-r from-blue-500/10 via-red-500/10 via-yellow-500/10 to-green-500/10 border border-white/[0.1] google-accent">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span className="text-sm font-medium text-white tracking-wide">Featured in Google AI Overviews</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light mb-8 leading-tight text-gray-100">
              Get Your Business<br />
              <span className="font-normal text-white">Cited by AI</span>
            </h1>
            
            <p className="text-2xl sm:text-3xl mb-8 font-light" style={{color: '#f27d24'}}>
              Stop Competing for Rankings. Start Being THE Answer.
            </p>

            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light mb-6">
              While your competitors fight for page 1 rankings, you become the authoritative answer that <span className="text-white font-medium">Google AI Overviews</span>, ChatGPT, Claude, and Perplexity recommend.
            </p>

            {/* Google Emphasis Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl mb-12 bg-blue-500/5 border border-blue-500/20">
              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
              <span className="text-sm text-blue-300">Optimized for Google's Gemini AI + Other Platforms</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#audit-form"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-lg font-medium text-white transition-all shadow-lg hover:shadow-xl"
                style={{background: 'linear-gradient(to right, #f27d24, #d66d1f)', boxShadow: '0 10px 40px rgba(242, 125, 36, 0.25)'}}
              >
                Get Your Free Answer Audit
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
              
              <a 
                href="/case-studies"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-lg font-medium bg-white/[0.05] text-gray-300 hover:bg-white/[0.08] border border-white/[0.1] hover:border-white/[0.2] transition-all"
              >
                View Case Studies
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        <section ref={statsRef} className="max-w-6xl mx-auto px-6 pb-32">
          <div className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.05] rounded-2xl p-12 sm:p-16 relative overflow-hidden">
            <div className="absolute top-4 left-4 flex gap-2">
              <div className="luxury-pixel w-2.5 h-2.5 brand-orange rounded-sm" />
              <div className="luxury-pixel w-2.5 h-2.5 brand-purple rounded-sm" style={{animationDelay: '0.5s'}} />
            </div>

            <div className="grid md:grid-cols-3 gap-12 sm:gap-16">
              <AnimatedStat 
                value={85}
                suffix="%"
                label="Google AI Overview Citations"
                gradient="from-blue-400 to-blue-500"
                isInView={statsInView}
              />
              
              <div className="text-center md:border-x border-white/[0.05] md:px-8">
                <AnimatedStat 
                  value={70}
                  suffix="%"
                  label="Lower Cost Per Lead"
                  gradient="from-[#362478] to-[#2a1a5f]"
                  isInView={statsInView}
                />
              </div>
              
              <AnimatedStat 
                value={90}
                suffix=""
                label="Days to First AI Citations"
                gradient="from-[#f27d24] to-[#d66d1f]"
                isInView={statsInView}
              />
            </div>

            <div className="absolute bottom-4 right-4 flex gap-2">
              <div className="luxury-pixel w-2.5 h-2.5 brand-purple rounded-sm" style={{animationDelay: '0.3s'}} />
              <div className="luxury-pixel w-2.5 h-2.5 brand-orange rounded-sm" style={{animationDelay: '0.7s'}} />
            </div>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-center gap-2 mb-32 opacity-60">
            <div className="luxury-pixel w-3 h-3 brand-orange rounded-sm" />
            <div className="w-px h-3 bg-gradient-to-b from-[#f27d24]/20 via-[#362478]/20 to-[#f27d24]/20" />
            <div className="luxury-pixel w-3 h-3 brand-purple rounded-sm" style={{animationDelay: '0.3s'}} />
            <div className="w-px h-3 bg-gradient-to-b from-[#362478]/20 via-[#f27d24]/20 to-[#362478]/20" />
            <div className="luxury-pixel w-3 h-3 brand-orange rounded-sm" style={{animationDelay: '0.6s'}} />
          </div>
        </div>

        <section className="max-w-6xl mx-auto px-6 pb-32">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl mb-8 border" style={{background: 'linear-gradient(to right, rgba(54, 36, 120, 0.1), rgba(54, 36, 120, 0.15))', borderColor: 'rgba(54, 36, 120, 0.2)'}}>
              <div className="luxury-pixel w-2 h-2 brand-purple rounded-sm" />
              <span className="text-sm font-medium tracking-wider uppercase" style={{color: '#a89bd9'}}>The Problem</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-8 leading-tight text-gray-100">
              The Search Landscape Has<br />
              <span className="font-normal text-white">Fundamentally Changed</span>
            </h2>

            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
              <span className="text-white font-medium">Google AI Overviews (powered by Gemini)</span>, ChatGPT, Claude, and Perplexity now answer questions directly—above all traditional rankings.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "Google AI Overviews Dominate",
                description: "Google's AI-powered answers appear above traditional results, capturing attention before users even see rankings.",
                icon: (
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="currentColor"/>
                  </svg>
                ),
                bgStyle: {background: 'linear-gradient(to bottom right, rgba(66, 133, 244, 0.1), rgba(66, 133, 244, 0.15))'}
              },
              {
                title: "AI Citations Win",
                description: "AI platforms cite 2-3 sources maximum. You're either the recommended answer or you're invisible.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                bgStyle: {background: 'linear-gradient(to bottom right, rgba(242, 125, 36, 0.1), rgba(214, 109, 31, 0.15))'}
              },
              {
                title: "Early Advantage",
                description: "Most competitors haven't adapted yet. The businesses that move now dominate their markets.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                bgStyle: {background: 'linear-gradient(to bottom right, rgba(54, 36, 120, 0.1), rgba(42, 26, 95, 0.15))'}
              }
            ].map((item, i) => (
              <div key={i} className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-2xl p-8 hover:border-white/[0.08] transition-colors">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 mx-auto text-white" style={item.bgStyle}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-medium text-white mb-3 text-center">{item.title}</h3>
                <p className="text-gray-400 text-center leading-relaxed font-light">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-center gap-2 mb-32 opacity-60">
            <div className="luxury-pixel w-3 h-3 brand-orange rounded-sm" />
            <div className="w-px h-3 bg-gradient-to-b from-[#f27d24]/20 via-[#362478]/20 to-[#f27d24]/20" />
            <div className="luxury-pixel w-3 h-3 brand-purple rounded-sm" style={{animationDelay: '0.3s'}} />
            <div className="w-px h-3 bg-gradient-to-b from-[#362478]/20 via-[#f27d24]/20 to-[#362478]/20" />
            <div className="luxury-pixel w-3 h-3 brand-orange rounded-sm" style={{animationDelay: '0.6s'}} />
          </div>
        </div>

        <section className="max-w-6xl mx-auto px-6 pb-32">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl mb-8 border" style={{background: 'linear-gradient(to right, rgba(242, 125, 36, 0.1), rgba(214, 109, 31, 0.15))', borderColor: 'rgba(242, 125, 36, 0.2)'}}>
              <div className="luxury-pixel w-2 h-2 brand-orange rounded-sm animate-pulse" />
              <span className="text-sm font-medium tracking-wider uppercase" style={{color: '#f27d24'}}>The Solution</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-8 leading-tight text-gray-100">
              We Make AI Platforms<br />
              <span className="font-normal text-white">Trust You</span>
            </h2>

            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
              Through proven methodologies developed over two years of testing, we position your business as the authority that Google AI Overviews and other platforms cite—not your competitors.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "Expertise Extraction",
                description: "We capture and structure your authentic expertise in formats Google's Gemini AI and other platforms recognize and trust.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                ),
                bgStyle: {background: 'linear-gradient(to bottom right, rgba(242, 125, 36, 0.1), rgba(214, 109, 31, 0.15))'}
              },
              {
                title: "Technical Implementation",
                description: "Specialized technical infrastructure that makes your content parseable and verifiable by AI systems.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                ),
                bgStyle: {background: 'linear-gradient(to bottom right, rgba(54, 36, 120, 0.1), rgba(42, 26, 95, 0.15))'}
              },
              {
                title: "Multi-Platform Verification",
                description: "Systematic testing across Google AI Overviews, ChatGPT, Claude, and Perplexity until you dominate.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                ),
                bgStyle: {background: 'linear-gradient(to bottom right, rgba(242, 125, 36, 0.1), rgba(214, 109, 31, 0.15))'}
              }
            ].map((item, i) => (
              <div key={i} className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-2xl p-8 hover:border-white/[0.08] transition-colors">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 mx-auto text-white" style={item.bgStyle}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-medium text-white mb-3 text-center">{item.title}</h3>
                <p className="text-gray-400 text-center leading-relaxed font-light">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-center gap-2 mb-32 opacity-60">
            <div className="luxury-pixel w-3 h-3 brand-orange rounded-sm" />
            <div className="w-px h-3 bg-gradient-to-b from-[#f27d24]/20 via-[#362478]/20 to-[#f27d24]/20" />
            <div className="luxury-pixel w-3 h-3 brand-purple rounded-sm" style={{animationDelay: '0.3s'}} />
            <div className="w-px h-3 bg-gradient-to-b from-[#362478]/20 via-[#f27d24]/20 to-[#362478]/20" />
            <div className="luxury-pixel w-3 h-3 brand-orange rounded-sm" style={{animationDelay: '0.6s'}} />
          </div>
        </div>

        <section className="max-w-4xl mx-auto px-6 pb-32">
          <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-3xl p-12 sm:p-16 relative overflow-hidden">
            <div className="absolute top-6 left-6 flex gap-2">
              <div className="luxury-pixel w-2.5 h-2.5 brand-orange rounded-sm" />
              <div className="luxury-pixel w-2.5 h-2.5 brand-purple rounded-sm" style={{animationDelay: '0.5s'}} />
            </div>

            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl mb-8 border" style={{background: 'linear-gradient(to right, rgba(242, 125, 36, 0.1), rgba(214, 109, 31, 0.15))', borderColor: 'rgba(242, 125, 36, 0.2)'}}>
                <div className="luxury-pixel w-2 h-2 brand-orange rounded-sm" />
                <span className="text-sm font-medium tracking-wider uppercase" style={{color: '#f27d24'}}>Our Package</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-6 text-gray-100 leading-tight">
                The <span className="font-normal text-white">Answer Authority Foundation</span>
              </h2>
              
              <p className="text-xl text-gray-400 mb-12 leading-relaxed font-light">
                Everything you need to dominate Google AI Overviews and other AI platforms in your market.
              </p>
            </div>

            <div className="space-y-4 mb-12">
              {[
                "Complete content optimization for Google AI Overviews and other AI platforms",
                "Technical implementation and schema markup",
                "Multi-platform AI citation verification",
                "90-day performance guarantee"
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.03] hover:border-white/[0.06] transition-colors">
                  <div className="flex-shrink-0 w-6 h-6 rounded-lg flex items-center justify-center mt-0.5" style={{background: 'linear-gradient(to bottom right, rgba(242, 125, 36, 0.2), rgba(214, 109, 31, 0.2))', borderColor: 'rgba(242, 125, 36, 0.2)', borderWidth: '1px'}}>
                    <svg className="w-4 h-4" style={{color: '#f27d24'}} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-300 text-base leading-relaxed">{text}</span>
                </div>
              ))}
            </div>

            <div className="text-center">
              <a 
                href="#audit-form"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-lg font-medium text-white transition-all shadow-lg hover:shadow-xl"
                style={{background: 'linear-gradient(to right, #f27d24, #d66d1f)', boxShadow: '0 10px 40px rgba(242, 125, 36, 0.25)'}}
              >
                Get Your Free Answer Audit
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>

            <div className="absolute bottom-6 right-6 flex gap-2">
              <div className="luxury-pixel w-2.5 h-2.5 brand-purple rounded-sm" style={{animationDelay: '0.3s'}} />
              <div className="luxury-pixel w-2.5 h-2.5 brand-orange rounded-sm" style={{animationDelay: '0.7s'}} />
            </div>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-center gap-2 mb-32 opacity-60">
            <div className="luxury-pixel w-3 h-3 brand-orange rounded-sm" />
            <div className="w-px h-3 bg-gradient-to-b from-[#f27d24]/20 via-[#362478]/20 to-[#f27d24]/20" />
            <div className="luxury-pixel w-3 h-3 brand-purple rounded-sm" style={{animationDelay: '0.3s'}} />
            <div className="w-px h-3 bg-gradient-to-b from-[#362478]/20 via-[#f27d24]/20 to-[#362478]/20" />
            <div className="luxury-pixel w-3 h-3 brand-orange rounded-sm" style={{animationDelay: '0.6s'}} />
          </div>
        </div>

        <section id="audit-form" className="max-w-4xl mx-auto px-6 pb-32">
          <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-3xl p-12 sm:p-16 relative overflow-hidden">
            <div className="absolute top-6 left-6 flex gap-2">
              <div className="luxury-pixel w-2.5 h-2.5 brand-orange rounded-sm" />
            </div>
            
            <div className="text-center mb-12">
              <div className="flex justify-center gap-2 mb-8">
                <div className="luxury-pixel w-3 h-3 brand-orange rounded-sm" />
                <div className="luxury-pixel w-3 h-3 brand-purple rounded-sm" style={{animationDelay: '0.4s'}} />
                <div className="luxury-pixel w-3 h-3 brand-orange rounded-sm" style={{animationDelay: '0.8s'}} />
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-6 text-gray-100 leading-tight">
                Get Your Free<br />
                <span className="font-normal text-white">Answer Audit</span>
              </h2>
              
              <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed mb-4">
                Discover exactly where you rank in <span className="text-white font-medium">Google AI Overviews</span> and other AI platforms when they answer questions about your services.
              </p>
              
              <p className="text-base text-gray-500 max-w-2xl mx-auto">
                See which competitors are getting cited instead of you across Google, ChatGPT, Claude, and Perplexity.
              </p>
            </div>

            {submitStatus === 'success' ? (
              <div className="border rounded-2xl p-8 text-center" style={{background: 'linear-gradient(to right, rgba(52, 168, 83, 0.1), rgba(52, 168, 83, 0.15))', borderColor: 'rgba(52, 168, 83, 0.2)'}}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{background: 'linear-gradient(to bottom right, #34a853, #2d9348)'}}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-medium text-white mb-3">Thank You!</h3>
                <p className="text-gray-300 leading-relaxed">
                  We've received your request. Our team will analyze your AI citation performance and send you a detailed Answer Audit within 24-48 hours.
                </p>
              </div>
            ) : (
              <>
                {submitStatus === 'error' && (
                  <div className="border rounded-2xl p-4 mb-6 text-center" style={{background: 'linear-gradient(to right, rgba(234, 67, 53, 0.1), rgba(234, 67, 53, 0.15))', borderColor: 'rgba(234, 67, 53, 0.2)'}}>
                    <p style={{color: '#ea4335'}}>There was an error submitting your form. Please try again.</p>
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Your Name *
                    </label>
                    <div>
  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
  </label>
  <input
    type="text"
    id="name"
    name="name"
    required
    value={formData.name}
    onChange={handleChange}
    className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/[0.1] text-white placeholder-gray-500 focus:outline-none focus:border-[#f27d24]/50 focus:bg-white/[0.08] transition-all"
    placeholder="John Smith"
  />
</div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/[0.1] text-white placeholder-gray-500 focus:outline-none focus:bg-white/[0.08] transition-all"
                      placeholder="Acme Corporation"
                    />
                  </div>

                  <div>
                    <label htmlFor="website" className="block text-sm font-medium text-gray-300 mb-2">
                      Website URL *
                    </label>
                    <input
                      type="url"
                      id="website"
                      name="website"
                      required
                      value={formData.website}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/[0.1] text-white placeholder-gray-500 focus:outline-none focus:bg-white/[0.08] transition-all"
                      placeholder="https://www.example.com"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-lg font-medium text-white transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-xl"
                    style={{background: 'linear-gradient(to right, #f27d24, #d66d1f)', boxShadow: '0 10px 40px rgba(242, 125, 36, 0.25)'}}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      <>
                        Get My Free Answer Audit
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </>
                    )}
                  </button>

                  <p className="text-center text-sm text-gray-500 mt-4">
                    We'll analyze your performance in Google AI Overviews and show you exactly where competitors are winning.
                  </p>
                </form>
              </>
            )}

            <div className="absolute bottom-6 right-6">
              <div className="luxury-pixel w-2.5 h-2.5 brand-purple rounded-sm" style={{animationDelay: '0.5s'}} />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}