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
  title: 'ReviewAgent — AI-Powered Review Automation for Restaurants & Salons',
  description:
    'ReviewAgent automatically responds to Google, Yelp, and TripAdvisor reviews in your brand voice. Save hours every week and boost your rating. Built for restaurants and salons across Europe.',
  keywords: [
    'review automation',
    'AI review responses',
    'restaurant reviews',
    'salon reviews',
    'Google reviews automation',
    'hospitality AI',
    'review management Europe',
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
    locale: 'en_EU',
    url: 'https://reviewagent.ailnex.com',
    siteName: 'ReviewAgent by ailnex',
    title: 'ReviewAgent — AI Review Automation for Restaurants & Salons',
    description:
      'Stop spending hours replying to reviews. ReviewAgent uses AI to craft personalised, on-brand responses 24/7. Free plan available. No credit card required.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ReviewAgent — AI-Powered Review Automation',
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
      'Stop spending hours replying to reviews. ReviewAgent uses AI to craft personalised, on-brand responses 24/7.',
    images: ['/og-image.png'],
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
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0f' },
    { media: '(prefers-color-scheme: light)', color: '#0a0a0f' },
  ],
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
                'AI-powered review response automation for restaurants and salons across Europe.',
              url: 'https://reviewagent.ailnex.com',
              publisher: {
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
                  description: 'Up to 30 AI-generated review responses per month',
                },
                {
                  '@type': 'Offer',
                  name: 'Pro Plan',
                  price: '49',
                  priceCurrency: 'EUR',
                  description: 'Unlimited responses, sentiment analytics, multi-platform',
                },
                {
                  '@type': 'Offer',
                  name: 'Business Plan',
                  price: '129',
                  priceCurrency: 'EUR',
                  description:
                    'Everything in Pro plus multi-location, white-label, priority support',
                },
              ],
            }),
          }}
        />
      </head>
      <body
        className="bg-[#0a0a0f] text-white font-sans antialiased min-h-screen selection:bg-[#00e5ff]/20 selection:text-[#00e5ff]"
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
