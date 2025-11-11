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
    email: '',
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
          email: formData.email,
          company: formData.company,
          website: formData.website,
          _subject: 'New Answer Audit Request'
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', company: '', website: '' });
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
      `}</style>

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "The Answer Engine",
            "description": "Answer Engine Optimization specialists helping local service businesses get cited by AI platforms like Gemini, ChatGPT, Claude, and Perplexity. 90-day citation guarantee. Exclusive territory protection.",
            "url": "https://theanswerengine.ai",
            "telephone": "+1-213-444-2229",
            "email": "support@theanswerengine.ai",
            "priceRange": "$$",
            "areaServed": "United States",
            "logo": "https://theanswerengine.ai/TheAnswerEngine_Color_just_logo.png"
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "The Answer Engine - Answer Engine Optimization (AEO)",
            "description": "Get your business cited by Gemini, ChatGPT, Claude, and Perplexity. 90-day guarantee. Exclusive territory protection. Stop competing for rankings, start being THE answer.",
            "url": "https://theanswerengine.ai",
            "inLanguage": "en-US"
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Answer Engine Optimization",
            "description": "Professional Answer Engine Optimization service with 90-day citation guarantee. We get local businesses cited by Gemini, ChatGPT, Claude, and Perplexity. Exclusive territory - only one business per category per area.",
            "provider": {
              "@type": "Organization",
              "name": "The Answer Engine"
            },
            "serviceType": "Answer Engine Optimization",
            "areaServed": "United States"
          })
        }}
      />

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
                  "text": "Answer Engine Optimization (AEO) is the practice of optimizing content to be cited by AI platforms like Gemini, ChatGPT, Claude, and Perplexity as the authoritative answer, rather than just ranking in traditional search results."
                }
              },
              {
                "@type": "Question",
                "name": "Do you guarantee results?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. We offer a 90-day citation guarantee. If you don't get cited by at least 2 AI engines within 90 days, we'll continue working for free until you do, or provide a full refund. Your choice."
                }
              },
              {
                "@type": "Question",
                "name": "Do you work with competing businesses in the same area?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No. We only work with one business per category per geographic area. Once you secure your spot, we will not work with any competing business in your service area. Your authority position is protected."
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

        {/* 1. HERO SECTION */}
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

          <div className="flex justify-center gap-3 mb-12">
            <div className="luxury-pixel w-4 h-4 brand-orange rounded-sm" style={{animationDelay: '0s'}} />
            <div className="luxury-pixel w-4 h-4 brand-purple rounded-sm" style={{animationDelay: '0.4s'}} />
            <div className="luxury-pixel w-4 h-4 brand-orange rounded-sm" style={{animationDelay: '0.8s'}} />
          </div>

          <div className="text-center mb-16">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light mb-8 leading-tight text-gray-100">
              Your Competitors Are Being<br />
              <span className="font-normal text-white">Cited By ChatGPT. Are You?</span>
            </h1>
            
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light mb-12">
              Right now, when someone asks AI for the best plumber in Phoenix, HVAC contractor in Los Angeles, real estate agent in Chicago, or electrician in Charlotte, AI recommends your competitors.
              <br /><br />
              <span className="text-white font-medium">We make AI cite you instead across Gemini, ChatGPT, Claude & Perplexity.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#audit-form"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-lg font-medium text-white transition-all shadow-lg hover:shadow-xl"
                style={{background: 'linear-gradient(to right, #f27d24, #d66d1f)', boxShadow: '0 10px 40px rgba(242, 125, 36, 0.25)'}}
              >
                Get My Free Lead Analysis
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
              
              <a 
                href="tel:2134442229"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-lg font-medium bg-white/[0.05] text-gray-300 hover:bg-white/[0.08] border border-white/[0.1] hover:border-white/[0.2] transition-all"
              >
                📱 Text Me: (213) 444-2229
              </a>
            </div>
          </div>
        </section>

        {/* 2. PROTECTED TERRITORY BANNER */}
        <section className="max-w-6xl mx-auto px-6 pb-32">
          <div className="bg-gradient-to-r from-[#362478]/10 to-[#f27d24]/10 border border-white/[0.1] rounded-2xl p-8 text-center relative overflow-hidden">
            <div className="absolute top-4 left-4">
              <div className="luxury-pixel w-2 h-2 brand-purple rounded-sm" />
            </div>
            <div className="absolute bottom-4 right-4">
              <div className="luxury-pixel w-2 h-2 brand-orange rounded-sm" />
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-light mb-3 text-gray-100">
              ⚡ <span className="font-normal text-white">Protected Territory:</span> Only One Business Per Category, Per Area
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              First come, first served. Your competitors are locked out once you claim your spot.
            </p>
          </div>
        </section>

        {/* 3. CASE STUDY SECTION */}
        <section className="max-w-6xl mx-auto px-6 pb-32">
          <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-3xl p-12 sm:p-16 relative overflow-hidden">
            <div className="absolute top-6 left-6 flex gap-2">
              <div className="luxury-pixel w-2.5 h-2.5 brand-orange rounded-sm" />
              <div className="luxury-pixel w-2.5 h-2.5 brand-purple rounded-sm" style={{animationDelay: '0.5s'}} />
            </div>

            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl mb-8 border" style={{background: 'linear-gradient(to right, rgba(54, 36, 120, 0.1), rgba(54, 36, 120, 0.15))', borderColor: 'rgba(54, 36, 120, 0.2)'}}>
                <div className="luxury-pixel w-2 h-2 brand-purple rounded-sm" />
                <span className="text-sm font-medium tracking-wider uppercase" style={{color: '#a89bd9'}}>Case Study</span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-8 leading-tight text-gray-100">
                If It Works In <span className="font-normal text-white">Real Estate</span>,<br />
                It Works Anywhere
              </h2>
              
              <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light mb-12">
                We tested this on LA County real estate: 70,000+ agents competing for the same prospects.
                <br /><br />
                <span className="text-white font-medium">Justin Borges</span> (13+ years, $200M+ in sales) became the ONE agent AI recommends in his area. No ads. No algorithm chasing. Just authority.
                <br /><br />
                If it works in the most competitive market, it works for plumbers, HVAC, dentists, attorneys, and any local business with far less competition.
              </p>

              <p className="text-2xl font-light" style={{color: '#f27d24'}}>
                We proved it in LA. Now we're bringing it to Phoenix, Chicago, Charlotte, and cities nationwide.
              </p>
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

        {/* 4. STATS SECTION */}
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

        {/* 5. HOW IT WORKS SECTION */}
        <section className="max-w-6xl mx-auto px-6 pb-32">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl mb-8 border" style={{background: 'linear-gradient(to right, rgba(242, 125, 36, 0.1), rgba(214, 109, 31, 0.15))', borderColor: 'rgba(242, 125, 36, 0.2)'}}>
              <div className="luxury-pixel w-2 h-2 brand-orange rounded-sm" />
              <span className="text-sm font-medium tracking-wider uppercase" style={{color: '#f27d24'}}>How It Works</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-8 leading-tight text-gray-100">
              We Make AI Platforms<br />
              <span className="font-normal text-white">Trust You</span>
            </h2>

            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
              Traditional SEO is dead. AI engines decide who gets recommended, not search rankings.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: "Who's Getting Your Leads Report",
                description: "We test 50+ customer queries across Gemini, ChatGPT, Claude & Perplexity to see which businesses AI recommends in your area.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                ),
                bgStyle: {background: 'linear-gradient(to bottom right, rgba(242, 125, 36, 0.1), rgba(214, 109, 31, 0.15))'}
              },
              {
                title: "Gap Analysis",
                description: "We identify the exact content, structure, and signals AI engines need to cite your business over competitors.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                ),
                bgStyle: {background: 'linear-gradient(to bottom right, rgba(54, 36, 120, 0.1), rgba(42, 26, 95, 0.15))'}
              },
              {
                title: "Answer Authority Foundation",
                description: "We create 6 research-backed articles in your authentic voice, structured specifically for AI citation.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                ),
                bgStyle: {background: 'linear-gradient(to bottom right, rgba(242, 125, 36, 0.1), rgba(214, 109, 31, 0.15))'}
              },
              {
                title: "Citation Monitoring",
                description: "Track your monthly citation rate. Watch AI engines start recommending you to prospects asking buying questions.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
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
                <p className="text-gray-400 text-center leading-relaxed font-light text-sm">{item.description}</p>
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

        {/* 6. GUARANTEE SECTION (NO PRICING) */}
        <section className="max-w-4xl mx-auto px-6 pb-32">
          <div className="bg-gradient-to-r from-green-500/10 to-green-600/10 border border-green-500/20 rounded-2xl p-12 sm:p-16 relative overflow-hidden">
            <div className="absolute top-6 left-6">
              <div className="luxury-pixel w-2.5 h-2.5 brand-orange rounded-sm" />
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{background: 'linear-gradient(to bottom right, #10b981, #059669)'}}>
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              
              <h2 className="text-4xl sm:text-5xl font-light mb-4 text-gray-100">
                <span className="font-normal text-white">Zero-Risk Guarantee</span>
              </h2>
              
              <p className="text-2xl font-light mb-6" style={{color: '#f27d24'}}>
                Get cited within 90 days, or we work for free until you do.
              </p>
              
              <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8">
                Don't want to wait? Get a full refund instead. <span className="text-white font-medium">Your choice.</span>
                <br /><br />
                We've never had to give a refund. When you follow our process, AI engines cite you.
              </p>
              
              <div className="bg-white/[0.03] border border-white/[0.05] rounded-xl p-6 max-w-xl mx-auto">
                <p className="text-gray-400 leading-relaxed">
                  Plus, your territory is protected. Once you secure your spot, we won't work with any competing business in your category and area.
                </p>
              </div>
            </div>
            
            <div className="absolute bottom-6 right-6">
              <div className="luxury-pixel w-2.5 h-2.5 brand-purple rounded-sm" style={{animationDelay: '0.5s'}} />
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

        {/* 7. TEXT ME CALLOUT */}
        <section className="max-w-4xl mx-auto px-6 pb-32">
          <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute top-6 left-6">
              <div className="luxury-pixel w-2.5 h-2.5 brand-orange rounded-sm" />
            </div>
            <div className="absolute bottom-6 right-6">
              <div className="luxury-pixel w-2.5 h-2.5 brand-purple rounded-sm" style={{animationDelay: '0.5s'}} />
            </div>

            <div className="text-center">
              <h3 className="text-3xl font-light mb-4 text-gray-100">
                <span className="font-normal text-white">Not Sure If This Is Right For You?</span>
              </h3>
              
              <p className="text-xl text-gray-400 mb-6 leading-relaxed">
                Text me your industry, city, and biggest lead headache.
              </p>

              <p className="text-base text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
                If you're not a fit, I'll tell you. If your competitor claimed your territory, I'll tell you. If this won't work, I'll say so. No pitch, just honest answers.
              </p>

              <a 
                href="tel:2134442229"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-2xl font-medium text-white transition-all shadow-lg hover:shadow-xl mb-4"
                style={{background: 'linear-gradient(to right, #f27d24, #d66d1f)', boxShadow: '0 10px 40px rgba(242, 125, 36, 0.25)'}}
              >
                📱 (213) 444-2229
              </a>

              <p className="text-sm text-gray-500 mb-8">
                Usually respond within 2 hours during business hours.
              </p>

              <div className="border-t border-white/[0.05] pt-8">
                <p className="text-gray-400 mb-4">Or prefer the formal route?</p>
                <a 
                  href="#audit-form"
                  className="inline-flex items-center gap-2 text-[#f27d24] hover:text-[#d66d1f] transition-colors text-lg"
                >
                  Get My Free Lead Analysis
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
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

        {/* 8. FORM SECTION */}
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
                <span className="font-normal text-white">Lead Analysis</span>
              </h2>
              
              <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed mb-4">
                See exactly where AI engines are recommending your competitors and how to position your business as the trusted answer instead.
              </p>
              
              <p className="text-base font-medium text-white max-w-2xl mx-auto mb-4">
                Plus: Find out if your territory is still available.
              </p>

              <p className="text-base text-gray-500 max-w-2xl mx-auto">
                We only work with one business per category, per area. Whether you're in Los Angeles, Phoenix, Chicago, Charlotte, or anywhere else, if a competitor in your area claimed their spot, we'll let you know.
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
                  We've received your request. Our team will analyze your AI citation performance and send you a detailed Lead Analysis within 48 hours.
                </p>
              </div>
            ) : (
              <>
                {submitStatus === 'error' && (
                  <div className="border rounded-2xl p-4 mb-6 text-center" style={{background: 'linear-gradient(to right, rgba(234, 67, 53, 0.1), rgba(234, 67, 53, 0.15))', borderColor: 'rgba(234, 67, 53, 0.2)'}}>
                    <p style={{color: '#ea4335'}}>There was an error submitting your form. Please try again or text us at (213) 444-2229.</p>
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Your Name *
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

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/[0.1] text-white placeholder-gray-500 focus:outline-none focus:border-[#f27d24]/50 focus:bg-white/[0.08] transition-all"
                      placeholder="john@example.com"
                    />
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
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/[0.1] text-white placeholder-gray-500 focus:outline-none focus:border-[#f27d24]/50 focus:bg-white/[0.08] transition-all"
                      placeholder="Acme Corporation"
                    />
                  </div>

                  <div>
                    <label htmlFor="website" className="block text-sm font-medium text-gray-300 mb-2">
                      Website URL <span className="text-gray-500 font-normal">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      id="website"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/[0.1] text-white placeholder-gray-500 focus:outline-none focus:border-[#f27d24]/50 focus:bg-white/[0.08] transition-all"
                      placeholder="www.example.com or leave blank"
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
                        Get My Free Lead Analysis
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </>
                    )}
                  </button>

                  <div className="text-center pt-6 border-t border-white/[0.05]">
                    <p className="text-sm text-gray-500 mb-4">
                      Covered by our guarantee: Get cited within 90 days, or we work for free until you do. Or full refund. Your choice.
                    </p>
                    <p className="text-sm text-gray-400">
                      Or skip the form and text JB directly: <a href="tel:2134442229" className="text-[#f27d24] hover:text-[#d66d1f]">(213) 444-2229</a>
                    </p>
                  </div>
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