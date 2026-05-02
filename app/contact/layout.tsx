import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact The Answer Engine | Free AEO Strategy Call',
  description: 'Book a free 30-minute AEO strategy call. Find out how to get your business cited by ChatGPT, Claude, and Google AI Overviews.',
  alternates: { canonical: 'https://www.theanswerengine.ai/contact' },
  openGraph: {
    title: 'Contact The Answer Engine',
    description: 'Book a free AEO strategy call. Find out how to get your business cited by ChatGPT, Claude, and Google AI Overviews.',
    url: 'https://www.theanswerengine.ai/contact',
    type: 'website',
    siteName: 'The Answer Engine',
    images: [
      {
        url: 'https://www.theanswerengine.ai/og-default.png',
        width: 1200,
        height: 630,
        alt: 'Contact The Answer Engine — Free AEO Strategy Call',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact The Answer Engine',
    description: 'Book a free AEO strategy call. Get cited by ChatGPT, Claude, and Google AI Overviews.',
    site: '@theanswerengine',
    images: ['https://www.theanswerengine.ai/og-default.png'],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'ContactPage',
                '@id': 'https://www.theanswerengine.ai/contact#webpage',
                name: 'Contact The Answer Engine',
                description: 'Book a free 30-minute AEO strategy call with The Answer Engine.',
                url: 'https://www.theanswerengine.ai/contact',
                inLanguage: 'en-US',
                isPartOf: { '@id': 'https://www.theanswerengine.ai/#website' },
                breadcrumb: { '@id': 'https://www.theanswerengine.ai/contact#breadcrumb' },
              },
              {
                '@type': 'BreadcrumbList',
                '@id': 'https://www.theanswerengine.ai/contact#breadcrumb',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.theanswerengine.ai' },
                  { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://www.theanswerengine.ai/contact' },
                ],
              },
              {
                '@type': 'ContactPoint',
                contactType: 'sales',
                telephone: '+1-213-444-2229',
                email: 'support@theanswerengine.ai',
                availableLanguage: 'English',
                hoursAvailable: 'Mo-Fr 09:00-18:00',
                contactOption: 'TollFree',
              },
            ],
          }),
        }}
      />
      {children}
    </>
  );
}
