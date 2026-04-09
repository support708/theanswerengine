'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Star, CheckCircle } from 'lucide-react';

export default function ConceptB() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const prefersReducedMotion = typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    if (prefersReducedMotion) {
      setVisibleCards([0, 1, 2, 3, 4]);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1) {
              setVisibleCards((prev) => [...new Set([...prev, index])]);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [prefersReducedMotion]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a1410] via-[#0a0a0a] to-[#0a0a0a] text-white">
      {/* Warm gradient overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-40">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-900/20 via-transparent to-transparent" />
      </div>

      {/* Hero: The Journey Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-12 sm:px-12">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-600/50 bg-orange-900/20 mb-8 text-sm text-orange-200">
            <Star size={16} />
            <span>Real Results from Real Businesses</span>
          </div>

          {/* Main headline */}
          <h1 className="font-heading text-5xl sm:text-7xl font-bold tracking-tight mb-6 leading-tight text-white">
            From Local to <span className="text-orange-300">AI Authority</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 mb-12 max-w-2xl leading-relaxed">
            Watch how a plumber in LA went from invisible to being cited by ChatGPT, Claude, and Google's AI. The same playbook works for your business.
          </p>

          {/* Visual Journey: Before → After */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <JourneyStep
              phase="Before AEO"
              metric="0"
              description="Invisible to AI platforms"
              color="from-red-600/20"
              visible={visibleCards.includes(0)}
            />
            <div className="hidden md:flex items-center justify-center">
              <ArrowRight size={32} className="text-orange-400" />
            </div>
            <JourneyStep
              phase="90 Days Later"
              metric="312"
              description="Citations across AI platforms"
              color="from-green-600/20"
              visible={visibleCards.includes(1)}
            />
          </div>

          {/* The Result */}
          <div className="p-8 rounded-lg border-2 border-orange-500/50 bg-orange-500/5 backdrop-blur">
            <div className="text-center">
              <p className="text-gray-400 mb-3">Monthly Revenue Impact</p>
              <div className="text-5xl font-bold text-orange-300 mb-3">+$48K</div>
              <p className="text-gray-400">New leads from AI citation sources</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="relative py-24 px-6 sm:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-4xl font-bold text-center mb-4">Businesses Like Yours</h2>
          <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16">
            Real revenue impact from real business owners
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: 'Marcus Johnson',
                business: 'Johnson Plumbing, Los Angeles',
                image: '👨‍🔧',
                quote: 'Within 60 days, Google AI was recommending us. Our service calls increased 45%.',
                revenue: '+$38K/month'
              },
              {
                name: 'Sarah Chen',
                business: 'Elite Real Estate, Austin',
                image: '👩‍💼',
                quote: 'Being cited in AI overviews put us in front of serious buyers we wouldn\'t have found otherwise.',
                revenue: '+$65K/month'
              },
              {
                name: 'David Rodriguez',
                business: 'Rodriguez HVAC, Phoenix',
                image: '👨‍🔧',
                quote: 'The ROI was immediate. Within 90 days, 30% of new customers mentioned finding us through AI.',
                revenue: '+$42K/month'
              },
              {
                name: 'Jessica Park',
                business: 'Park Digital Marketing, Chicago',
                image: '👩‍💻',
                quote: 'AEO completely changed how our clients think about visibility. We now offer it to all our clients.',
                revenue: '+$120K/month (agency)'
              }
            ].map((testimonial, idx) => (
              <div
                key={idx}
                ref={(el) => { cardRefs.current[idx] = el; }}
                className={`p-8 rounded-lg border border-gray-800 hover:border-orange-500/50 transition-all duration-500 ${
                  visibleCards.includes(idx)
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-4'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="text-3xl mb-2">{testimonial.image}</div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.business}</p>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="fill-orange-400 text-orange-400" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.quote}"</p>
                <div className="pt-4 border-t border-gray-700">
                  <p className="text-orange-300 font-semibold">{testimonial.revenue}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Process Section */}
      <section className="relative py-24 px-6 sm:px-12 bg-gradient-to-r from-orange-950/20 to-transparent">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-4xl font-bold text-center mb-16">How We Do It</h2>

          <div className="space-y-8">
            {[
              {
                step: '1',
                title: 'Discovery Audit',
                description: 'We analyze your current visibility in ChatGPT, Claude, Google AI, and Perplexity. Most local businesses? Zero citations.',
                metrics: ['✓ Competitive audit', '✓ Platform analysis', '✓ Authority gaps identified']
              },
              {
                step: '2',
                title: 'Strategic Optimization',
                description: 'Content, schema markup, and authority-building gets you indexed and cited by AI platforms.',
                metrics: ['✓ AI-optimized content', '✓ Schema implementation', '✓ Citation tracking']
              },
              {
                step: '3',
                title: 'Monitor & Scale',
                description: 'Real-time dashboard shows citations, visibility, and revenue impact. We continuously optimize.',
                metrics: ['✓ Live citation tracking', '✓ ROI reporting', '✓ Ongoing optimization']
              }
            ].map((section, idx) => (
              <div
                key={idx}
                className="p-8 rounded-lg border border-gray-800 hover:border-orange-500/30 transition-colors"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white font-bold text-lg">
                      {section.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-2xl font-bold mb-3">{section.title}</h3>
                    <p className="text-gray-400 mb-4">{section.description}</p>
                    <div className="flex flex-wrap gap-4">
                      {section.metrics.map((metric, i) => (
                        <span key={i} className="text-sm text-gray-400">
                          {metric}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-24 px-6 sm:px-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-4xl font-bold text-center mb-16">Common Questions</h2>

          <div className="space-y-6">
            {[
              {
                q: 'How long until I see results?',
                a: 'Most clients see their first citations within 30-45 days. Significant revenue impact typically arrives by day 90.'
              },
              {
                q: 'Will this work for my service area?',
                a: 'AEO works for any local service business: plumbing, HVAC, real estate, digital services, and more. If customers search for you on Google, AI citation visibility will help.'
              },
              {
                q: 'What if AEO doesn\'t work for us?',
                a: 'We guarantee measurable progress within 90 days or we adjust the strategy at no cost. Most clients see revenue impact before then.'
              }
            ].map((faq, idx) => (
              <details
                key={idx}
                className="group p-6 rounded-lg border border-gray-800 hover:border-orange-500/30 transition-colors cursor-pointer"
              >
                <summary className="font-semibold text-lg flex items-center justify-between">
                  {faq.q}
                  <span className="text-orange-400 group-open:rotate-180 transition-transform">↓</span>
                </summary>
                <p className="text-gray-400 mt-4">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24 px-6 sm:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-4xl font-bold mb-6">Ready to Get Cited by AI?</h2>
          <p className="text-gray-400 text-lg mb-12">
            Schedule a 20-minute strategy call. We'll show you exactly where your competitors are getting cited—and how to beat them.
          </p>
          <button className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg text-lg transition-colors duration-300 flex items-center gap-2 mx-auto">
            Book Your Free Strategy Call
            <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
}

function JourneyStep({
  phase,
  metric,
  description,
  color,
  visible
}: {
  phase: string;
  metric: string;
  description: string;
  color: string;
  visible: boolean;
}) {
  return (
    <div
      className={`p-8 rounded-lg border-2 border-gray-700 bg-gradient-to-br ${color} to-transparent transition-all duration-500 ${
        visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      }`}
    >
      <p className="text-sm text-gray-500 mb-2">{phase}</p>
      <div className="text-4xl font-bold mb-2">{metric}</div>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}
