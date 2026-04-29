import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const viewport: Viewport = {
  themeColor: '#0a0a0f',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'ReviewAgent — AI-Powered Review Management for Restaurants & Salons',
  description:
    'Automate Google Reviews responses, collect new reviews, and boost your reputation on autopilot. Trusted by 500+ restaurants and beauty salons across Europe.',
  keywords: [
    'review management',
    'AI reviews',
    'Google Reviews automation',
    'restaurant reputation',
    'beauty salon reviews',
    'automated review responses',
    'review agent',
    'Europe',
    'Germany',
    'Poland',
  ],
  authors: [{ name: 'ailnex', url: 'https://ailnex.com' }],
  creator: 'ailnex',
  publisher: 'ailnex',
  metadataBase: new URL('https://reviewagent.ailnex.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_EU',
    url: 'https://reviewagent.ailnex.com',
    siteName: 'ReviewAgent',
    title: 'ReviewAgent — AI-Powered Review Management for Restaurants & Salons',
    description:
      'Stop losing customers to bad reviews. ReviewAgent automatically responds to Google Reviews 24/7, collects new 5-star reviews, and gives you actionable insights.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ReviewAgent — AI Review Management Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ReviewAgent — AI-Powered Review Management',
    description:
      'Automate Google Reviews responses and boost your reputation on autopilot.',
    images: ['/og-image.png'],
    creator: '@ailnex',
  },
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
  category: 'technology',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="geo.region" content="EU" />
        <meta name="geo.placename" content="Europe" />
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
                'AI-powered review management platform for restaurants and beauty salons in Europe.',
              offers: [
                {
                  '@type': 'Offer',
                  name: 'Free Plan',
                  price: '0',
                  priceCurrency: 'USD',
                },
                {
                  '@type': 'Offer',
                  name: 'Pro Plan',
                  price: '49',
                  priceCurrency: 'USD',
                },
                {
                  '@type': 'Offer',
                  name: 'Business Plan',
                  price: '149',
                  priceCurrency: 'USD',
                },
              ],
              creator: {
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
        className="font-sans antialiased"
        style={{ backgroundColor: '#0a0a0f', color: '#f0f0f5' }}
      >
        {children}
      </body>
    </html>
  );
}
