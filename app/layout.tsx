import type { Metadata } from "next";
import { Geist, Geist_Mono, Plus_Jakarta_Sans, Inter } from "next/font/google";
import Image from 'next/image';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Nav from './components/Nav';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>The Answer Engine - Answer Engine Optimization (AEO)</title>
        <meta name="description" content="Get your business cited by AI platforms like ChatGPT, Claude, Google AI Overviews, and Perplexity. Answer Engine Optimization for local service businesses." />

        {/* Favicon links for all platforms */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0F1117" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "The Answer Engine",
              "description": "Answer Engine Optimization specialists helping businesses get cited by AI platforms like ChatGPT, Claude, Google AI Overviews, and Perplexity",
              "url": "https://theanswerengine.ai",
              "logo": "https://theanswerengine.ai/TheAnswerEngine_white%20logo%20only.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-213-444-2229",
                "contactType": "Sales",
                "email": "support@theanswerengine.ai",
                "availableLanguage": "English"
              },
              "sameAs": [
                "https://www.linkedin.com/company/theanswerengine",
                "https://instagram.com/theanswerengine"
              ]
            })
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "The Answer Engine",
              "url": "https://theanswerengine.ai",
              "description": "Get your business cited by AI platforms like ChatGPT, Claude, Google AI Overviews, and Perplexity. Answer Engine Optimization for local service businesses.",
              "publisher": {
                "@type": "Organization",
                "name": "The Answer Engine",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://theanswerengine.ai/TheAnswerEngine_white%20logo%20only.png",
                  "width": 400,
                  "height": 400
                }
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://theanswerengine.ai/blog?q={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${plusJakarta.variable} ${inter.variable} antialiased bg-[#0F1117]`}
      >
        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-white focus:text-[#0F1117] focus:rounded-lg focus:outline-none"
        >
          Skip to main content
        </a>

        <Nav />

        <main id="main-content">
          {children}
        </main>

        <section id="contact" className="bg-[#0F1117] py-20 sm:py-32 relative">
          
          <div className="max-w-4xl mx-auto px-6 relative">
            <header className="text-center mb-20">
              <p className="text-sm text-white/30 uppercase tracking-widest mb-6">Contact</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 leading-tight tracking-tight text-white font-heading">
                Get started
              </h2>
              <p className="text-lg text-white/40 max-w-lg mx-auto leading-relaxed">
                Let&apos;s discuss how to get your business cited by AI platforms.
              </p>
            </header>

            <div className="grid sm:grid-cols-2 gap-6 mb-20">
              <div className="border border-white/[0.06] rounded-2xl p-10 hover:border-white/[0.10] transition-all">
                <div className="text-center">
                  <h3 className="text-lg font-medium mb-2 text-white font-heading">Call</h3>
                  <p className="text-white/30 text-sm mb-6">Speak with an AEO specialist</p>
                  <a
                    href="tel:+12134442229"
                    className="inline-block text-2xl font-medium text-white hover:text-white/80 transition-colors"
                  >
                    (213) 444-2229
                  </a>
                </div>
              </div>

              <div className="border border-white/[0.06] rounded-2xl p-10 hover:border-white/[0.10] transition-all">
                <div className="text-center">
                  <h3 className="text-lg font-medium mb-2 text-white font-heading">Email</h3>
                  <p className="text-white/30 text-sm mb-6">Response within 24 hours</p>
                  <a
                    href="mailto:support@theanswerengine.ai"
                    className="inline-block text-lg font-medium text-white/60 hover:text-white transition-colors break-all"
                  >
                    support@theanswerengine.ai
                  </a>
                </div>
              </div>
            </div>

            <div className="border border-white/[0.06] rounded-2xl p-12 sm:p-16">
              <div className="text-center mb-10">
                <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-white font-heading tracking-tight">
                  Free 30-minute strategy call
                </h3>
                <p className="text-white/40 max-w-lg mx-auto leading-relaxed">
                  We&apos;ll map where you&apos;re losing to competitors in AI citations and build your 90-day plan.
                </p>
              </div>

              <div className="space-y-3 mb-10 max-w-md mx-auto">
                {[
                  "See where competitors outrank you in AI citations",
                  "Identify your highest-value opportunities",
                  "Get a concrete 90-day implementation plan"
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-1 h-1 rounded-full bg-white/30 mt-2.5 flex-shrink-0" />
                    <span className="text-white/50 text-[15px]">{text}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+12134442229"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-[15px] font-semibold bg-white text-[#0F1117] hover:bg-white/90 transition-all"
                >
                  Call: (213) 444-2229
                </a>
                <a
                  href="mailto:support@theanswerengine.ai"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-[15px] font-medium text-white/60 hover:text-white border border-white/[0.08] hover:border-white/[0.15] transition-all"
                >
                  Email Us
                </a>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-sm text-white/20">
                Mon-Fri, 9 AM - 6 PM PT. Response within 24 hours.
              </p>
            </div>
          </div>
        </section>

        <footer className="border-t border-white/[0.06] text-white py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
              <div className="max-w-sm">
                <Image
                  src="/TheAnswerEngine_white logo only.png"
                  alt="The Answer Engine"
                  width={120}
                  height={40}
                  className="h-8 w-auto mb-4 opacity-60"
                />
                <p className="text-white/30 text-sm">
                  Answer Engine Optimization for local service businesses.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
                <div>
                  <h3 className="text-sm font-medium text-white/50 mb-4">Company</h3>
                  <ul className="space-y-3">
                    <li><a href="/about" className="text-sm text-white/30 hover:text-white/60 transition-colors">About</a></li>
                    <li><a href="/case-studies" className="text-sm text-white/30 hover:text-white/60 transition-colors">Case Studies</a></li>
                    <li><a href="/blog" className="text-sm text-white/30 hover:text-white/60 transition-colors">Blog</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-white/50 mb-4">Services</h3>
                  <ul className="space-y-3">
                    <li><a href="#territory-check" className="text-sm text-white/30 hover:text-white/60 transition-colors">Territory Check</a></li>
                    <li><a href="/contact" className="text-sm text-white/30 hover:text-white/60 transition-colors">Contact</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-white/50 mb-4">Connect</h3>
                  <ul className="space-y-3">
                    <li><a href="https://www.linkedin.com/company/theanswerengine" target="_blank" rel="noopener noreferrer" className="text-sm text-white/30 hover:text-white/60 transition-colors">LinkedIn</a></li>
                    <li><a href="https://instagram.com/theanswerengine" target="_blank" rel="noopener noreferrer" className="text-sm text-white/30 hover:text-white/60 transition-colors">Instagram</a></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="h-px bg-white/[0.04] mb-8" />
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-sm text-white/20">&copy; {new Date().getFullYear()} The Answer Engine</p>
              <div className="flex items-center gap-6">
                <a href="/privacy" className="text-sm text-white/20 hover:text-white/40 transition-colors">Privacy</a>
                <a href="/terms" className="text-sm text-white/20 hover:text-white/40 transition-colors">Terms</a>
              </div>
            </div>
          </div>
        </footer>
        
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}