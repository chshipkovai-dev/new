import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://reviewagent.ailnex.com'),
  title: {
    default: 'ReviewAgent — AI-Powered Review Management for Restaurants & Salons',
    template: '%s | ReviewAgent by ailnex',
  },
  description:
    'Automatically respond to Google reviews with AI. Built for restaurants and beauty salons across Europe. Save time, boost reputation, grow trust — starting free.',
  keywords: [
    'review management',
    'AI review responses',
    'Google reviews automation',
    'restaurant reputation management',
    'salon review tool',
    'review software Europe',
    'automated review replies',
    'ailnex',
    'ReviewAgent',
  ],
  authors: [{ name: 'ailnex', url: 'https://ailnex.com' }],
  creator: 'ailnex',
  publisher: 'ailnex',
  category: 'Technology',
  applicationName: 'ReviewAgent',
  referrer: 'origin-when-cross-origin',
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
    locale: 'en_GB',
    alternateLocale: ['de_DE', 'es_ES', 'pl_PL', 'fr_FR'],
    url: 'https://reviewagent.ailnex.com',
    siteName: 'ReviewAgent',
    title: 'ReviewAgent — AI-Powered Review Management for Restaurants & Salons',
    description:
      'Stop losing customers to unanswered reviews. ReviewAgent responds to every Google review automatically — in your brand voice, 24/7. Free plan available.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ReviewAgent — AI Review Management Dashboard',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ailnex',
    creator: '@ailnex',
    title: 'ReviewAgent — AI-Powered Review Management for Restaurants & Salons',
    description:
      'Automatically respond to Google reviews with AI. Built for restaurants and beauty salons across Europe. Starting free.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: 'https://reviewagent.ailnex.com',
  },
  verification: {
    google: 'google-site-verification-placeholder',
  },
  other: {
    'msapplication-TileColor': '#0a0a0f',
    'theme-color': '#0a0a0f',
  },
};

export const viewport: Viewport = {
  themeColor: '#0a0a0f',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  colorScheme: 'dark',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="format-detection" content="telephone=no, date=no, email=no, address=no" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'ReviewAgent',
              applicationCategory: 'BusinessApplication',
              operatingSystem: 'Web',
              description:
                'AI-powered review management tool for restaurants and beauty salons in Europe. Automatically respond to Google reviews in your brand voice.',
              url: 'https://reviewagent.ailnex.com',
              author: {
                '@type': 'Organization',
                name: 'ailnex',
                url: 'https://ailnex.com',
              },
              offers: [
                {
                  '@type': 'Offer',
                  name: 'Free Plan',
                  price: '0',
                  priceCurrency: 'EUR',
                  description: 'Up to 30 AI review responses per month',
                },
                {
                  '@type': 'Offer',
                  name: 'Pro Plan',
                  price: '49',
                  priceCurrency: 'EUR',
                  description: 'Unlimited AI responses with sentiment analytics',
                },
                {
                  '@type': 'Offer',
                  name: 'Business Plan',
                  price: '149',
                  priceCurrency: 'EUR',
                  description: 'Multi-location management with white-label reports',
                },
              ],
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.8',
                reviewCount: '127',
                bestRating: '5',
                worstRating: '1',
              },
            }),
          }}
        />
      </head>
      <body
        className={`
          ${inter.className}
          bg-[#0a0a0f]
          text-white
          antialiased
          min-h-screen
          overflow-x-hidden
          selection:bg-[#00e5ff]/20
          selection:text-[#00e5ff]
        `}
      >
        {children}
      </body>
    </html>
  );
}
