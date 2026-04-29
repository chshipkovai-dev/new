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
    'Automatically respond to Google reviews, boost your reputation, and attract more customers. Trusted by restaurants and beauty salons across Europe. Start free today.',
  keywords: [
    'review management',
    'AI reviews',
    'Google reviews automation',
    'restaurant reputation',
    'salon reviews',
    'review response AI',
    'online reputation management',
    'Europe',
    'Germany',
    'Spain',
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
    siteName: 'ReviewAgent by ailnex',
    title: 'ReviewAgent — AI-Powered Review Management for Restaurants & Salons',
    description:
      'Stop losing customers to unanswered reviews. ReviewAgent auto-replies to Google reviews in seconds — personalized, on-brand, and always professional.',
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
    title: 'ReviewAgent — AI-Powered Review Management for Restaurants & Salons',
    description:
      'Auto-respond to Google reviews with AI. Boost reputation. Attract more customers. Free plan available.',
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
    shortcut: '/favicon-16x16.png',
  },
  manifest: '/site.webmanifest',
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
              description:
                'AI-powered review management tool for restaurants and beauty salons in Europe. Automatically respond to Google reviews, monitor reputation, and attract more customers.',
              offers: [
                {
                  '@type': 'Offer',
                  name: 'Free Plan',
                  price: '0',
                  priceCurrency: 'EUR',
                },
                {
                  '@type': 'Offer',
                  name: 'Pro Plan',
                  price: '49',
                  priceCurrency: 'EUR',
                },
                {
                  '@type': 'Offer',
                  name: 'Business Plan',
                  price: '149',
                  priceCurrency: 'EUR',
                },
              ],
              provider: {
                '@type': 'Organization',
                name: 'ailnex',
                url: 'https://ailnex.com',
              },
              audience: {
                '@type': 'BusinessAudience',
                audienceType: 'Restaurant owners and beauty salon managers in Europe',
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
          selection:bg-[#00e5ff]/20
          selection:text-[#00e5ff]
        `}
      >
        {children}
      </body>
    </html>
  );
}
