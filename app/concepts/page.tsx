import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'TAE Homepage Concepts | The Answer Engine',
  description: 'Three distinct design directions for The Answer Engine homepage'
};

export default function ConceptsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#0f0f0f] text-white">
      {/* Header */}
      <header className="border-b border-gray-800 px-6 sm:px-12 py-8">
        <div className="max-w-6xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8">
            ← Back to TAE
          </Link>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold mb-4">
            Three Directions for AEO Authority
          </h1>
          <p className="text-xl text-gray-400">
            Each design commits to a distinct aesthetic vision. Pick the one that feels right, or combine elements.
          </p>
        </div>
      </header>

      {/* Concepts Grid */}
      <section className="px-6 sm:px-12 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Concept A */}
            <ConceptCard
              title="Command Center Authority"
              subtitle="Bloomberg Terminal meets AI"
              description="Dark luxury, data-forward. Hero section animated with live metrics. Orange accents pop against dark. Minimal, high contrast, technical aesthetic. Visitors feel like they're inside an AI control room."
              vibe="Authoritative • Technical • Premium"
              cta="View Concept A"
              href="/concepts/a"
              features={[
                'Animated metric counters',
                'Glowing accent design',
                'Minimal, high-contrast',
                'Data visualization focus',
                'Command-center aesthetic'
              ]}
              color="orange"
            />

            {/* Concept B */}
            <ConceptCard
              title="Proof-First Narrative"
              subtitle="Real results, real people"
              description="Dark but warm. Visual journey from problem to solution. Heavy testimonials and case studies. Emotional, human-focused. Users see themselves in real business success stories."
              vibe="Trustworthy • Human • Warm"
              cta="View Concept B"
              href="/concepts/b"
              features={[
                'Real testimonials',
                'Before/after journey',
                'Case study cards',
                'Emotional storytelling',
                'Warm color palette'
              ]}
              color="amber"
            />

            {/* Concept C */}
            <ConceptCard
              title="Asymmetric Premium"
              subtitle="Cutting-edge architectural design"
              description="Dark with sophisticated layout breaks. Split-screen hero. Oversized typography, unexpected whitespace. Strong angular design language. Feels different from every SaaS site."
              vibe="Innovative • Bold • Sophisticated"
              cta="View Concept C"
              href="/concepts/c"
              features={[
                'Split-screen layouts',
                'Diagonal sections',
                'Oversized typography',
                'Strategic accent usage',
                'Architectural breaks'
              ]}
              color="red"
            />
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="px-6 sm:px-12 py-24 bg-gray-950/50 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-3xl font-bold mb-12">Detailed Comparison</h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left py-4 px-4 font-semibold">Aspect</th>
                  <th className="text-left py-4 px-4 font-semibold text-orange-300">A: Command Center</th>
                  <th className="text-left py-4 px-4 font-semibold text-amber-300">B: Proof-First</th>
                  <th className="text-left py-4 px-4 font-semibold text-red-300">C: Asymmetric</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-800 hover:bg-gray-900/50">
                  <td className="py-4 px-4 font-semibold">Primary Vibe</td>
                  <td className="py-4 px-4 text-gray-400">Technical authority</td>
                  <td className="py-4 px-4 text-gray-400">Human-centric trust</td>
                  <td className="py-4 px-4 text-gray-400">Premium innovation</td>
                </tr>
                <tr className="border-b border-gray-800 hover:bg-gray-900/50">
                  <td className="py-4 px-4 font-semibold">Hero Approach</td>
                  <td className="py-4 px-4 text-gray-400">Animated metrics</td>
                  <td className="py-4 px-4 text-gray-400">Journey visualization</td>
                  <td className="py-4 px-4 text-gray-400">Split-screen problem/solution</td>
                </tr>
                <tr className="border-b border-gray-800 hover:bg-gray-900/50">
                  <td className="py-4 px-4 font-semibold">Social Proof</td>
                  <td className="py-4 px-4 text-gray-400">Stats & metrics</td>
                  <td className="py-4 px-4 text-gray-400">Client testimonials</td>
                  <td className="py-4 px-4 text-gray-400">Data-driven stats</td>
                </tr>
                <tr className="border-b border-gray-800 hover:bg-gray-900/50">
                  <td className="py-4 px-4 font-semibold">Best For</td>
                  <td className="py-4 px-4 text-gray-400">Enterprise, tech-forward</td>
                  <td className="py-4 px-4 text-gray-400">All service businesses</td>
                  <td className="py-4 px-4 text-gray-400">Premium positioning</td>
                </tr>
                <tr className="border-b border-gray-800 hover:bg-gray-900/50">
                  <td className="py-4 px-4 font-semibold">Animation Level</td>
                  <td className="py-4 px-4 text-gray-400">High (data animations)</td>
                  <td className="py-4 px-4 text-gray-400">Medium (scroll reveals)</td>
                  <td className="py-4 px-4 text-gray-400">Low (geometric)</td>
                </tr>
                <tr className="border-b border-gray-800 hover:bg-gray-900/50">
                  <td className="py-4 px-4 font-semibold">Typography Emphasis</td>
                  <td className="py-4 px-4 text-gray-400">Metric numbers</td>
                  <td className="py-4 px-4 text-gray-400">Testimonials, stories</td>
                  <td className="py-4 px-4 text-gray-400">Large headlines</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Recommendation */}
      <section className="px-6 sm:px-12 py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl font-bold mb-8">Which One to Choose?</h2>

          <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
            <p>
              <strong className="text-white">Choose A (Command Center)</strong> if you want to position TAE as the
              technical authority. This works for enterprise clients, agencies, and businesses that value data and precision.
            </p>
            <p>
              <strong className="text-white">Choose B (Proof-First)</strong> if you want maximum conversion from local
              service business owners. Real stories and testimonials build trust faster than metrics alone.
            </p>
            <p>
              <strong className="text-white">Choose C (Asymmetric)</strong> if you want to stand out visually and create
              a memorable first impression. Premium positioning that says "we're not like every other SaaS."
            </p>
            <p>
              <strong className="text-white">Or combine them:</strong> Use C's visual framework (asymmetry, architectural),
              B's content strategy (testimonials, warmth), and A's data visualization (metrics, charts).
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 sm:px-12 py-24 bg-gradient-to-r from-orange-950/20 to-transparent border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-3xl font-bold mb-6">Ready to Ship?</h2>
          <p className="text-gray-400 text-lg mb-8">
            Pick your concept or request modifications. These are production-ready React components ready to deploy.
          </p>
          <button className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg text-lg transition-colors duration-300 flex items-center gap-2 mx-auto">
            Let's Build This
            <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
}

function ConceptCard({
  title,
  subtitle,
  description,
  vibe,
  cta,
  href,
  features,
  color
}: {
  title: string;
  subtitle: string;
  description: string;
  vibe: string;
  cta: string;
  href: string;
  features: string[];
  color: 'orange' | 'amber' | 'red';
}) {
  const colorClasses = {
    orange: 'border-orange-500/30 hover:border-orange-500/50 hover:bg-orange-500/5',
    amber: 'border-amber-500/30 hover:border-amber-500/50 hover:bg-amber-500/5',
    red: 'border-red-500/30 hover:border-red-500/50 hover:bg-red-500/5'
  };

  const accentClasses = {
    orange: 'text-orange-400',
    amber: 'text-amber-400',
    red: 'text-red-400'
  };

  return (
    <Link href={href}>
      <div
        className={`p-8 rounded-lg border-2 transition-all duration-300 cursor-pointer h-full flex flex-col ${colorClasses[color]}`}
      >
        <h3 className={`font-heading text-2xl font-bold mb-2 ${accentClasses[color]}`}>{title}</h3>
        <p className="text-sm text-gray-500 mb-6">{subtitle}</p>

        <p className="text-gray-400 mb-8 flex-1">{description}</p>

        <div className="space-y-4 mb-8">
          <p className="text-xs text-gray-600 uppercase tracking-widest">Vibe</p>
          <p className="text-sm text-gray-300">{vibe}</p>

          <p className="text-xs text-gray-600 uppercase tracking-widest pt-4">Features</p>
          <ul className="space-y-2">
            {features.map((feature, i) => (
              <li key={i} className="text-sm text-gray-400 flex items-center gap-2">
                <span className={`w-1 h-1 rounded-full ${accentClasses[color]}`} />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <button
          className={`w-full py-3 rounded border transition-all duration-300 font-semibold flex items-center justify-center gap-2 ${accentClasses[color]} border-current hover:bg-current/10`}
        >
          {cta}
          <ArrowRight size={16} />
        </button>
      </div>
    </Link>
  );
}
