import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Agreement Signed — The Answer Engine',
  description: 'Your service agreement has been received. Welcome to The Answer Engine.',
  robots: { index: false, follow: false },
}

export default function SignedPage() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] flex flex-col items-center justify-center px-6 py-24">
      {/* Logo */}
      <div className="mb-10">
        <Image
          src="/TheAnswerEngine_Color.png"
          alt="The Answer Engine"
          width={200}
          height={48}
          className="h-10 w-auto"
          priority
        />
      </div>

      {/* Checkmark */}
      <div className="w-20 h-20 rounded-full bg-[#FF6B35] flex items-center justify-center mb-8 shadow-[0_0_60px_rgba(255,107,53,0.4)]">
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
          <path
            d="M8 18L15 25L28 11"
            stroke="white"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Headline */}
      <h1 className="text-white text-3xl sm:text-4xl font-bold tracking-tight text-center mb-4">
        Agreement received.
      </h1>
      <p className="text-[#888] text-lg text-center max-w-md leading-relaxed mb-12">
        Welcome to The Answer Engine. Justin will be in touch within one business day to kick off your content program.
      </p>

      {/* Divider */}
      <div className="w-16 h-px bg-[#FF6B35] mb-12 opacity-60" />

      {/* What happens next */}
      <div className="max-w-sm w-full space-y-6 mb-14">
        {[
          { step: '01', label: 'Voice capture', detail: 'Short call to lock your tone, angles, and positioning' },
          { step: '02', label: 'Content map', detail: '16 articles across your 3 strategic branches' },
          { step: '03', label: 'First articles live', detail: 'Within 5 business days of your voice session' },
        ].map(({ step, label, detail }) => (
          <div key={step} className="flex items-start gap-4">
            <span className="text-[#FF6B35] font-mono text-sm font-bold mt-0.5 shrink-0">{step}</span>
            <div>
              <p className="text-white font-semibold text-sm">{label}</p>
              <p className="text-[#666] text-sm mt-0.5">{detail}</p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-[#FF6B35] text-sm font-medium hover:text-white transition-colors"
      >
        theanswerengine.ai
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>

      {/* Contact */}
      <p className="text-[#444] text-xs mt-8 text-center">
        Questions? Call or text Justin at{' '}
        <a href="tel:+13236844421" className="text-[#666] hover:text-[#FF6B35] transition-colors">
          323-684-4421
        </a>
      </p>
    </main>
  )
}
