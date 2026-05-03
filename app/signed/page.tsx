import Link from 'next/link'

export default function SignedPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="mb-8 flex justify-center">
            <svg className="w-16 h-16 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
            Agreement Received
          </h1>
          <p className="text-lg text-slate-400">
            Thanks for signing. We're excited to get started.
          </p>
        </div>

        {/* Logo */}
        <div className="mb-12 flex justify-center">
          <div className="relative">
            <svg className="w-24 h-auto" viewBox="0 0 200 60" fill="none">
              {/* "THE" */}
              <text x="10" y="45" fontSize="28" fontWeight="900" fontFamily="Space Grotesk, sans-serif" fill="white">
                THE
              </text>
              {/* Orange bracket on ANSWER */}
              <rect x="55" y="20" width="4" height="32" fill="#F27D24" />
              <text x="65" y="45" fontSize="28" fontWeight="900" fontFamily="Space Grotesk, sans-serif" fill="white">
                ANSWER
              </text>
              {/* Orange bracket close */}
              <rect x="142" y="20" width="4" height="32" fill="#F27D24" />
              {/* ENGINE */}
              <text x="152" y="45" fontSize="28" fontWeight="900" fontFamily="Space Grotesk, sans-serif" fill="white">
                ENGINE
              </text>
            </svg>
          </div>
        </div>

        {/* 3-Step Timeline */}
        <div className="mb-12 space-y-6">
          <h2 className="text-xl font-semibold text-white text-center mb-8">What Happens Next</h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-12 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 to-slate-700"></div>

            {/* Step 1 */}
            <div className="relative pl-20 pb-8">
              <div className="absolute left-2 top-1 w-12 h-12 rounded-full bg-orange-500 border-4 border-slate-950 flex items-center justify-center">
                <span className="text-white font-bold text-lg">1</span>
              </div>
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                <h3 className="font-semibold text-white mb-1">Voice Capture Session</h3>
                <p className="text-slate-400 text-sm">
                  Schedule a 60-75 minute strategic conversation. We'll dig into your goals, your market, and your voice—exactly how you talk about your business.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative pl-20 pb-8">
              <div className="absolute left-2 top-1 w-12 h-12 rounded-full bg-orange-500 border-4 border-slate-950 flex items-center justify-center">
                <span className="text-white font-bold text-lg">2</span>
              </div>
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                <h3 className="font-semibold text-white mb-1">Content Map & Calendar</h3>
                <p className="text-slate-400 text-sm">
                  We'll build your content strategy—what to write, when, and how it connects to your business goals. Everything's custom to your market and your voice.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative pl-20">
              <div className="absolute left-2 top-1 w-12 h-12 rounded-full bg-orange-500 border-4 border-slate-950 flex items-center justify-center">
                <span className="text-white font-bold text-lg">3</span>
              </div>
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                <h3 className="font-semibold text-white mb-1">Articles Go Live</h3>
                <p className="text-slate-400 text-sm">
                  We start shipping articles to your site on schedule. Every piece is optimized for AI discovery, search, and your unique market positioning.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-6 mb-8 text-center">
          <p className="text-slate-300 mb-4">
            Ready to get started? We'll reach out within 24 hours with next steps and scheduling options.
          </p>
          <div className="space-y-2">
            <p className="text-white font-semibold">Justin Borges</p>
            <p className="text-slate-400 text-sm">Founder, The Answer Engine</p>
            <p className="text-orange-400 font-mono text-sm mt-3">(213) 262-5092</p>
          </div>
        </div>

        {/* Footer Link */}
        <div className="text-center">
          <Link href="/" className="text-slate-400 hover:text-white transition-colors text-sm">
            Back to theanswerengine.ai
          </Link>
        </div>
      </div>
    </div>
  )
}
