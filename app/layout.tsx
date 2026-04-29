import type { Metadata, Viewport } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#0a0a0f',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://reviewagent.ailnex.com'),
  title: {
    default: 'ReviewAgent — AI-Powered Review Automation for Restaurants & Salons',
    template: '%s | ReviewAgent by ailnex',
  },
  description:
    'ReviewAgent automatically responds to Google, Tripadvisor and Yelp reviews in your brand voice — 24/7. Save 10+ hours per week and boost your rating. Trusted by 500+ European hospitality businesses.',
  keywords: [
    'review management',
    'AI review responses',
    'restaurant review automation',
    'salon review management',
    'Google reviews AI',
    'Tripadvisor automation',
    'hospitality AI',
    'review agent',
    'ailnex',
    'European restaurants',
    'beauty salon software',
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
    locale: 'en_EU',
    url: 'https://reviewagent.ailnex.com',
    siteName: 'ReviewAgent by ailnex',
    title: 'ReviewAgent — AI-Powered Review Automation for Restaurants & Salons',
    description:
      'Stop manually replying to reviews. ReviewAgent handles Google, Tripadvisor and Yelp responses automatically — in your tone, in any language. Start free today.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ReviewAgent — AI review automation dashboard showing automated responses to restaurant reviews',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ReviewAgent — AI Review Automation for Hospitality',
    description:
      'Auto-respond to Google, Tripadvisor & Yelp reviews with AI. Save 10+ hours/week. Trusted by 500+ businesses across Europe.',
    images: ['/og-image.png'],
    creator: '@ailnex',
    site: '@ailnex',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    shortcut: '/favicon.ico',
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: 'https://reviewagent.ailnex.com',
  },
  category: 'technology',
  classification: 'Business Software',
  other: {
    'google-site-verification': 'REPLACE_WITH_GOOGLE_VERIFICATION_TOKEN',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'ReviewAgent',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      description:
        'AI-powered review management platform that automatically responds to Google, Tripadvisor, and Yelp reviews for restaurants and beauty salons across Europe.',
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
          description: 'Up to 30 auto-responses per month. Google Reviews integration.',
        },
        {
          '@type': 'Offer',
          name: 'Pro Plan',
          price: '49',
          priceCurrency: 'EUR',
          description: 'Unlimited responses, 3 platforms, custom tone, analytics dashboard.',
        },
        {
          '@type': 'Offer',
          name: 'Business Plan',
          price: '149',
          priceCurrency: 'EUR',
          description: 'Multi-location, white-label, API access, dedicated account manager.',
        },
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '127',
        bestRating: '5',
        worstRating: '1',
      },
    },
    {
      '@type': 'Organization',
      name: 'ailnex',
      url: 'https://ailnex.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://reviewagent.ailnex.com/logo.png',
      },
      sameAs: [
        'https://twitter.com/ailnex',
        'https://linkedin.com/company/ailnex',
      ],
    },
    {
      '@type': 'WebSite',
      url: 'https://reviewagent.ailnex.com',
      name: 'ReviewAgent by ailnex',
      description: 'AI-powered review automation for European restaurants and salons',
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://reviewagent.ailnex.com/?q={search_term_string}',
        },
        'query-input': 'required name=search_term_string',
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakarta.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="format-detection" content="telephone=no" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      </head>
      <body
        className="bg-[#0a0a0f] text-white antialiased font-sans selection:bg-[#00e5ff]/20 selection:text-[#00e5ff] min-h-screen"
        style={{ fontFamily: 'var(--font-plus-jakarta), var(--font-inter), system-ui, sans-serif' }}
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
