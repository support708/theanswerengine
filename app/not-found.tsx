import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#0F1117] flex items-center justify-center px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-950/5 via-transparent to-orange-950/5 pointer-events-none" />

      <div className="text-center max-w-lg relative">
        <Link href="/" className="inline-block mb-8">
          <Image
            src="/TheAnswerEngine_white logo only.png"
            alt="The Answer Engine"
            width={200}
            height={60}
            className="h-16 w-auto mx-auto"
          />
        </Link>

        <h1 className="text-7xl sm:text-8xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#f27d24] to-[#d66d1f] mb-4 font-heading">
          404
        </h1>

        <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4 font-heading">
          Page Not Found
        </h2>

        <p className="text-gray-400 mb-8 text-lg leading-relaxed">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-lg font-semibold text-white bg-[#f27d24] hover:bg-[#d66d1f] transition-all duration-300 shadow-[0_4px_24px_rgba(242,125,36,0.3)] hover:shadow-[0_8px_32px_rgba(242,125,36,0.4)] hover:-translate-y-0.5"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
            Return Home
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-lg font-semibold text-white bg-white/[0.05] hover:bg-white/[0.08] border border-white/[0.1] hover:border-white/[0.15] transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>

        <div className="mt-12 pt-8 border-t border-white/[0.08]">
          <p className="text-gray-500 text-sm mb-4">Looking for something specific?</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/case-studies" className="text-[#f27d24] hover:text-[#d66d1f] transition-colors">
              Case Studies
            </Link>
            <span className="text-gray-600">|</span>
            <Link href="/blog" className="text-[#f27d24] hover:text-[#d66d1f] transition-colors">
              Blog
            </Link>
            <span className="text-gray-600">|</span>
            <Link href="/about" className="text-[#f27d24] hover:text-[#d66d1f] transition-colors">
              About
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
