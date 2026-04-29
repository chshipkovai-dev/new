import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'ReviewAgent — AI-Powered Review Management for Restaurants & Salons',
  description:
    'Automate Google Reviews responses, collect more 5-star ratings, and grow your business with ReviewAgent. Trusted by restaurants and beauty salons across Europe.',
  keywords: [
    'review management',
    'AI reviews',
    'Google Reviews automation',
    'restaurant reviews',
    'beauty salon reviews',
    'reputation management Europe',
    'automated review responses',
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
      'Automate Google Reviews responses, collect more 5-star ratings, and grow your business with ReviewAgent. Trusted by restaurants and beauty salons across Europe.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ReviewAgent — AI Review Management',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ReviewAgent — AI-Powered Review Management',
    description:
      'Automate Google Reviews responses and collect more 5-star ratings with AI. Built for restaurants and salons in Europe.',
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
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  other: {
    'theme-color': '#0a0a0f',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0a0a0f" />
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
              description:
                'AI-powered review management platform for restaurants and beauty salons in Europe. Automate responses, collect more reviews, and protect your online reputation.',
              operatingSystem: 'Web',
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
              provider: {
                '@type': 'Organization',
                name: 'ailnex',
                url: 'https://ailnex.com',
              },
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} font-sans bg-[#0a0a0f] text-white antialiased min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
