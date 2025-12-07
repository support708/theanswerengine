import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 bg-[#0F1117]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(242,125,36,0.1),transparent_70%)]" />
      </div>
      <div className="relative text-center">
        <Link href="/" className="inline-block mb-8">
          <Image
            src="/TheAnswerEngine_white logo only.png"
            alt="The Answer Engine"
            width={120}
            height={40}
            className="h-10 w-auto mx-auto opacity-60"
          />
        </Link>

        <h1 className="text-[150px] sm:text-[200px] font-bold font-heading leading-none text-transparent bg-clip-text bg-gradient-to-r from-[#f27d24] to-[#d66d1f] opacity-20">404</h1>
        <div className="-mt-16 sm:-mt-20 relative">
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white mb-4">Page Not Found</h2>
          <p className="text-white/60 mb-8 max-w-md mx-auto">This page got lost in the AI recommendations. Let&apos;s get you back on track.</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#f27d24] to-[#d66d1f] rounded-xl font-semibold text-white shadow-[0_0_30px_rgba(242,125,36,0.3)] hover:shadow-[0_0_50px_rgba(242,125,36,0.5)] transition-all duration-500 hover:scale-[1.02] active:scale-[0.98]"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/[0.05] border border-white/[0.1] rounded-xl font-medium text-white hover:bg-white/[0.1] hover:border-white/[0.15] transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/[0.08]">
          <p className="text-sm text-white/40 mb-4">Looking for something specific?</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/case-studies" className="text-white/50 hover:text-white transition-colors">
              Case Studies
            </Link>
            <span className="text-white/20">|</span>
            <Link href="/blog" className="text-white/50 hover:text-white transition-colors">
              Blog
            </Link>
            <span className="text-white/20">|</span>
            <Link href="/about" className="text-white/50 hover:text-white transition-colors">
              About
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
