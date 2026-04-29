import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://reviewagent.ailnex.com'),
  title: {
    default: 'ReviewAgent — AI-Powered Review Automation for Restaurants & Salons',
    template: '%s | ReviewAgent by ailnex',
  },
  description:
    'ReviewAgent automatically responds to Google, Tripadvisor and Yelp reviews in seconds. Save 10+ hours per week and boost your rating. Trusted by 500+ restaurants and salons across Europe.',
  keywords: [
    'review automation',
    'AI review responses',
    'restaurant review management',
    'salon review management',
    'Google reviews AI',
    'automated review replies',
    'hospitality AI',
    'ailnex',
    'ReviewAgent',
  ],
  authors: [{ name: 'ailnex', url: 'https://ailnex.com' }],
  creator: 'ailnex',
  publisher: 'ailnex',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://reviewagent.ailnex.com',
    siteName: 'ReviewAgent by ailnex',
    title: 'ReviewAgent — AI-Powered Review Automation for Restaurants & Salons',
    description:
      'Stop spending hours on review replies. ReviewAgent handles Google, Tripadvisor and Yelp reviews automatically — personalized, on-brand, in any language. Start free today.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ReviewAgent — AI Review Automation by ailnex',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ailnex',
    creator: '@ailnex',
    title: 'ReviewAgent — AI Review Automation for Restaurants & Salons',
    description:
      'Automatically respond to every review in seconds. Boost ratings, save time, grow your business. Free plan available.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
    shortcut: '/favicon-32x32.png',
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: 'https://reviewagent.ailnex.com',
  },
  category: 'technology',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0a0a0f',
  colorScheme: 'dark',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'ReviewAgent',
              applicationCategory: 'BusinessApplication',
              operatingSystem: 'Web',
              offers: [
                {
                  '@type': 'Offer',
                  name: 'Free',
                  price: '0',
                  priceCurrency: 'EUR',
                },
                {
                  '@type': 'Offer',
                  name: 'Pro',
                  price: '49',
                  priceCurrency: 'EUR',
                },
                {
                  '@type': 'Offer',
                  name: 'Business',
                  price: '149',
                  priceCurrency: 'EUR',
                },
              ],
              description:
                'AI-powered review automation for restaurants and salons across Europe.',
              url: 'https://reviewagent.ailnex.com',
              author: {
                '@type': 'Organization',
                name: 'ailnex',
                url: 'https://ailnex.com',
              },
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.9',
                reviewCount: '127',
              },
            }),
          }}
        />
      </head>
      <body
        className="bg-[#0a0a0f] text-white font-sans antialiased min-h-screen overflow-x-hidden"
        style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
      >
        <div className="relative flex flex-col min-h-screen">
          {children}
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
