import type { Metadata, Viewport } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'ReviewAgent — Automated Google Review Replies for Local Businesses',
  description:
    'ReviewAgent automatically responds to your Google reviews 24/7. Save hours every week, boost your rating, and never miss a customer feedback. Trusted by restaurants, salons, and cafés across Europe.',
  keywords: [
    'google reviews automation',
    'automated review replies',
    'restaurant review management',
    'salon review software',
    'cafe reputation management',
    'google my business automation',
    'review response tool',
    'local business SaaS',
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
    locale: 'en_US',
    url: 'https://reviewagent.ailnex.com',
    siteName: 'ReviewAgent',
    title: 'ReviewAgent — Automated Google Review Replies for Local Businesses',
    description:
      'Stop spending hours on Google review responses. ReviewAgent AI replies instantly, 24/7 — in your brand voice. Trusted by 500+ local businesses across Europe.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ReviewAgent — Automated Google Review Replies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ReviewAgent — Automated Google Review Replies for Local Businesses',
    description:
      'Stop spending hours on Google review responses. ReviewAgent AI replies instantly, 24/7 — in your brand voice.',
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
  themeColor: '#0a0a0f',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakarta.variable} scroll-smooth`}
      suppressHydrationWarning
    >
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
                'ReviewAgent automatically responds to your Google reviews 24/7 using AI. Designed for restaurants, salons, and cafés across Europe.',
              offers: [
                {
                  '@type': 'Offer',
                  name: 'Free Plan',
                  price: '0',
                  priceCurrency: 'USD',
                  description: 'Up to 10 automated replies per month',
                },
                {
                  '@type': 'Offer',
                  name: 'Pro Plan',
                  price: '49',
                  priceCurrency: 'USD',
                  billingIncrement: 'month',
                  description: 'Unlimited replies for a single location',
                },
                {
                  '@type': 'Offer',
                  name: 'Business Plan',
                  price: '149',
                  priceCurrency: 'USD',
                  billingIncrement: 'month',
                  description: 'Up to 10 locations with advanced analytics',
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
        className="bg-[#0a0a0f] text-white font-sans antialiased min-h-screen overflow-x-hidden"
        style={{ fontFamily: 'var(--font-plus-jakarta), var(--font-inter), sans-serif' }}
      >
        <div className="relative">
          <div
            className="pointer-events-none fixed inset-0 z-0"
            aria-hidden="true"
            style={{
              background:
                'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(0,229,255,0.08) 0%, transparent 60%)',
            }}
          />
          {children}
        </div>
      </body>
    </html>
  );
}
