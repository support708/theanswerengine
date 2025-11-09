import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Answer Engine - Answer Engine Optimization (AEO)",
  description: "Get your business cited by AI platforms like ChatGPT, Claude, and Google AI Overviews. Answer Engine Optimization for local service businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Organization Schema - Appears on all pages */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "The Answer Engine",
              "description": "Answer Engine Optimization specialists helping businesses get cited by AI platforms like ChatGPT, Claude, and Google AI Overviews",
              "url": "https://theanswerengine.ai",
              "logo": "https://theanswerengine.ai/TheAnswerEngine_Color_just_logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-213-444-2229",
                "contactType": "Customer Service",
                "email": "support@theanswerengine.ai",
                "availableLanguage": "English"
              },
              "sameAs": []
            })
          }}
        />

        {/* WebSite Schema - Appears on all pages */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "The Answer Engine",
              "url": "https://theanswerengine.ai",
              "description": "Get your business cited by AI platforms like ChatGPT, Claude, and Google AI Overviews. Answer Engine Optimization for local service businesses.",
              "publisher": {
                "@type": "Organization",
                "name": "The Answer Engine"
              }
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0A0A0F]`}
      >
        {/* Navigation Header */}
        <nav className="bg-[#0A0A0F]/80 backdrop-blur-xl border-b border-white/[0.05] sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              {/* Logo with Premium Text */}
              <a href="/" className="flex items-center gap-4 group">
                <img 
                  src="/TheAnswerEngine_Color_just_logo.png" 
                  alt="The Answer Engine" 
                  className="h-12 transition-opacity group-hover:opacity-80"
                />
                <div className="hidden lg:block">
                  <div className="text-xl font-medium text-white tracking-tight">
                    The Answer Engine
                  </div>
                  <div className="text-xs text-orange-400 font-medium tracking-[0.15em] uppercase">
                    Become the Answer
                  </div>
                </div>
              </a>
              
              {/* Navigation Links */}
              <div className="hidden md:flex items-center space-x-8">
                <a 
                  href="/" 
                  className="text-gray-300 hover:text-white font-medium transition-colors"
                >
                  Home
                </a>
                <a 
                  href="/blog" 
                  className="text-gray-300 hover:text-white font-medium transition-colors"
                >
                  Blog
                </a>
                <a 
                  href="/case-studies" 
                  className="text-gray-300 hover:text-white font-medium transition-colors"
                >
                  Case Studies
                </a>
                <a 
                  href="#contact" 
                  className="text-gray-300 hover:text-white font-medium transition-colors"
                >
                  Contact
                </a>
                <a 
                  href="#contact" 
                  className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-lg font-medium hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg shadow-orange-500/25"
                >
                  Get Started
                </a>
              </div>

              {/* Mobile Menu Button */}
              <button className="md:hidden text-gray-300 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </nav>

        {/* Page Content */}
        {children}

        {/* Contact Section */}
        <section id="contact" className="bg-[#0A0A0F] py-20 sm:py-32 relative">
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-purple-950/10 via-transparent to-orange-950/10 pointer-events-none" />
          
          <div className="max-w-4xl mx-auto px-6 relative">
            {/* Simple pixel divider */}
            <div className="flex justify-center gap-2 mb-12">
              <div className="w-1.5 h-1.5 bg-orange-500" />
              <div className="w-1.5 h-1.5 bg-purple-500" />
              <div className="w-1.5 h-1.5 bg-orange-500" />
            </div>

            {/* Header */}
            <header className="text-center mb-20">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-8 leading-tight tracking-tight text-gray-100">
                Get Started with<br />
                <span className="font-normal text-white">Answer Engine Optimization</span>
              </h2>
              
              <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-light">
                Ready to dominate AI search? Let's discuss how to get your business cited by ChatGPT, Claude, and Google AI Overviews.
              </p>
            </header>

            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-6 mb-20">
              {/* Phone */}
              <div className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.05] rounded-2xl p-10 hover:border-white/[0.08] transition-all group">
                <div className="text-center">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6 bg-gradient-to-br from-orange-500/10 to-orange-600/10 border border-orange-500/20 group-hover:border-orange-500/40 transition-colors">
                    <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  
                  <h3 className="text-2xl font-medium mb-3 text-white">
                    Call Us
                  </h3>
                  
                  <p className="text-gray-500 text-sm mb-8">
                    Speak with an AEO specialist
                  </p>
                  
                  <a 
                    href="tel:+12134442229"
                    className="inline-block text-3xl font-medium text-orange-400 hover:text-orange-300 transition-colors"
                  >
                    (213) 444-2229
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.05] rounded-2xl p-10 hover:border-white/[0.08] transition-all group">
                <div className="text-center">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6 bg-gradient-to-br from-purple-500/10 to-purple-600/10 border border-purple-500/20 group-hover:border-purple-500/40 transition-colors">
                    <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  
                  <h3 className="text-2xl font-medium mb-3 text-white">
                    Email Us
                  </h3>
                  
                  <p className="text-gray-500 text-sm mb-8">
                    Get a response within 24 hours
                  </p>
                  
                  <a 
                    href="mailto:support@theanswerengine.ai"
                    className="inline-block text-lg font-medium text-purple-400 hover:text-purple-300 transition-colors break-all"
                  >
                    support@theanswerengine.ai
                  </a>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-3xl p-12 sm:p-16">
              <div className="text-center mb-12">
                {/* Simple pixel accent */}
                <div className="flex justify-center gap-1.5 mb-8">
                  <div className="w-1 h-1 bg-orange-500/60" />
                  <div className="w-1 h-1 bg-purple-500/60" />
                  <div className="w-1 h-1 bg-orange-500/60" />
                </div>

                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-6 text-gray-100 leading-tight">
                  Schedule Your Free<br />
                  <span className="font-normal text-white">30-Minute AEO Strategy Call</span>
                </h3>
                
                <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
                  We'll analyze where you're losing to competitors in AI citations right now, identify your highest-value opportunities, and map out a 90-day plan to dominate AI recommendations in your market.
                </p>
              </div>

              {/* Benefits */}
              <div className="space-y-4 mb-12 max-w-2xl mx-auto">
                {[
                  "See exactly where you're losing to competitors in AI citations",
                  "Identify your highest-value featured snippet opportunities",
                  "90-day plan to dominate AI recommendations in your market"
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.03] hover:border-white/[0.06] transition-colors">
                    <div className="flex-shrink-0 w-6 h-6 rounded-lg flex items-center justify-center bg-gradient-to-br from-orange-500/20 to-purple-500/20 border border-orange-500/20 mt-0.5">
                      <svg className="w-4 h-4 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-300 text-base leading-relaxed">{text}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+12134442229"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-lg font-medium bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/40"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  Call Now: (213) 444-2229
                </a>
                
                <a 
                  href="mailto:support@theanswerengine.ai"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-lg font-medium bg-white/[0.05] text-gray-300 hover:bg-white/[0.08] border border-white/[0.1] hover:border-white/[0.2] transition-all"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  Email Us
                </a>
              </div>
            </div>

            {/* Footer Info */}
            <div className="mt-16 text-center">
              <div className="inline-flex flex-col sm:flex-row items-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500/50" />
                  <span><span className="text-gray-400 font-medium">Response Time:</span> Within 24 hours on business days</span>
                </div>
                <div className="hidden sm:block w-px h-4 bg-gray-800" />
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500/50" />
                  <span><span className="text-gray-400 font-medium">Hours:</span> Monday - Friday, 9 AM - 6 PM PT</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#0A0A0F] border-t border-white/[0.05] text-white py-16">
          <div className="max-w-6xl mx-auto px-6">
            {/* Subtle pixel accent */}
            <div className="flex justify-center gap-1.5 mb-12">
              <div className="w-1 h-1 bg-orange-500/60" />
              <div className="w-1 h-1 bg-purple-500/60" />
              <div className="w-1 h-1 bg-orange-500/60" />
            </div>

            <div className="grid md:grid-cols-3 gap-12 mb-12">
              {/* Company Info */}
              <div>
                <img 
                  src="/TheAnswerEngine_Color_just_logo.png" 
                  alt="The Answer Engine" 
                  className="h-12 mb-6 opacity-90"
                />
                <p className="text-gray-400 text-sm leading-relaxed font-light">
                  Answer Engine Optimization for local service businesses. Get cited by AI platforms instead of your competitors.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="font-medium text-white mb-4">Quick Links</h3>
                <ul className="space-y-3 text-gray-400 text-sm">
                  <li>
                    <a href="/" className="hover:text-white transition-colors inline-flex items-center gap-2">
                      <span className="w-1 h-1 bg-orange-500/40 rounded-full" />
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="/blog" className="hover:text-white transition-colors inline-flex items-center gap-2">
                      <span className="w-1 h-1 bg-orange-500/40 rounded-full" />
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="/case-studies" className="hover:text-white transition-colors inline-flex items-center gap-2">
                      <span className="w-1 h-1 bg-orange-500/40 rounded-full" />
                      Case Studies
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="hover:text-white transition-colors inline-flex items-center gap-2">
                      <span className="w-1 h-1 bg-orange-500/40 rounded-full" />
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h3 className="font-medium text-white mb-4">Get In Touch</h3>
                <p className="text-gray-400 text-sm mb-6 font-light">
                  Ready to dominate AI search?
                </p>
                <a 
                  href="#contact" 
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg shadow-orange-500/25 text-sm"
                >
                  Schedule Strategy Call
                </a>
              </div>
            </div>

            {/* Divider */}
            <div className="flex justify-center gap-1 mb-8 opacity-20">
              {[...Array(60)].map((_, i) => (
                <div 
                  key={i} 
                  className="w-px h-px bg-gray-600"
                />
              ))}
            </div>

            <div className="text-center">
              <p className="text-gray-500 text-sm font-light">&copy; 2025 The Answer Engine. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}