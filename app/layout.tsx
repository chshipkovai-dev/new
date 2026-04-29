import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'ReviewAgent — AI-Powered Review Management for Restaurants & Salons',
  description:
    'Automatically respond to Google reviews, boost your reputation, and attract more customers. ReviewAgent uses AI to manage your online reviews 24/7. Trusted by businesses across Europe.',
  keywords: [
    'review management',
    'AI reviews',
    'Google reviews automation',
    'restaurant reputation management',
    'salon review tool',
    'review response AI',
    'online reputation Europe',
    'ReviewAgent',
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
    locale: 'en_GB',
    url: 'https://reviewagent.ailnex.com',
    siteName: 'ReviewAgent by ailnex',
    title: 'ReviewAgent — AI-Powered Review Management for Restaurants & Salons',
    description:
      'Stop losing customers to bad reviews. ReviewAgent automatically responds to Google reviews using AI — saving hours of manual work while boosting your star rating.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ReviewAgent — AI Review Management Dashboard',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ReviewAgent — AI-Powered Review Management',
    description:
      'Automatically respond to Google reviews with AI. Boost your reputation 24/7. Trusted by restaurants and salons across Europe.',
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
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon-32x32.png',
  },
  manifest: '/site.webmanifest',
  category: 'technology',
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
              description:
                'AI-powered review management tool for restaurants and beauty salons. Automatically respond to Google reviews, monitor your reputation, and attract more customers across Europe.',
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
                  description: 'Up to 20 AI responses per month, 1 location',
                },
                {
                  '@type': 'Offer',
                  name: 'Pro Plan',
                  price: '49',
                  priceCurrency: 'EUR',
                  description:
                    'Unlimited AI responses, 1 location, analytics dashboard',
                },
                {
                  '@type': 'Offer',
                  name: 'Business Plan',
                  price: '149',
                  priceCurrency: 'EUR',
                  description:
                    'Unlimited responses, up to 10 locations, priority support',
                },
              ],
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
        className={`${inter.className} bg-[#0a0a0f] text-white antialiased min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
