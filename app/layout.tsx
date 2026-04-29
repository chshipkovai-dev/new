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
    'ReviewAgent automatically responds to your Google reviews in seconds. Save hours every week, boost your rating, and never miss a customer review. Trusted by restaurants, salons, and cafés across Europe.',
  keywords: [
    'Google reviews automation',
    'automated review responses',
    'restaurant review management',
    'salon review replies',
    'Google Business Profile automation',
    'review management SaaS',
    'local business reviews',
    'AI review responses',
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
      'Stop spending hours replying to Google reviews manually. ReviewAgent handles it automatically — personalized, professional, and instant. Start free today.',
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
    title: 'ReviewAgent — Automated Google Review Replies',
    description:
      'Stop spending hours replying to Google reviews manually. ReviewAgent handles it automatically — personalized, professional, and instant.',
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
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
    shortcut: '/favicon.ico',
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
        <meta name="format-detection" content="telephone=no" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'ReviewAgent',
              description:
                'Automated Google review response platform for restaurants, salons, and cafés.',
              applicationCategory: 'BusinessApplication',
              operatingSystem: 'Web',
              offers: [
                {
                  '@type': 'Offer',
                  name: 'Free',
                  price: '0',
                  priceCurrency: 'USD',
                },
                {
                  '@type': 'Offer',
                  name: 'Pro',
                  price: '49',
                  priceCurrency: 'USD',
                },
                {
                  '@type': 'Offer',
                  name: 'Business',
                  price: '149',
                  priceCurrency: 'USD',
                },
              ],
              publisher: {
                '@type': 'Organization',
                name: 'ailnex',
                url: 'https://ailnex.com',
              },
            }),
          }}
        />
      </head>
      <body
        className={`
          bg-[#0a0a0f]
          text-white
          font-[family-name:var(--font-inter)]
          antialiased
          min-h-screen
          overflow-x-hidden
          selection:bg-[#00e5ff]/20
          selection:text-[#00e5ff]
        `}
      >
        <div className="relative">
          <div
            className="pointer-events-none fixed inset-0 z-0"
            aria-hidden="true"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(0,229,255,0.06),transparent)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_80%,rgba(0,229,255,0.03),transparent)]" />
            <div
              className="absolute inset-0 opacity-[0.015]"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(0,229,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.3) 1px, transparent 1px)',
                backgroundSize: '80px 80px',
              }}
            />
          </div>
          <div className="relative z-10">{children}</div>
        </div>
      </body>
    </html>
  );
}
