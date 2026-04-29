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
    'ReviewAgent automatically responds to your Google reviews 24/7. Save hours every week, boost your rating, and never miss a customer — perfect for restaurants, salons, and cafés across Europe.',
  keywords: [
    'Google reviews automation',
    'automated review responses',
    'restaurant review management',
    'salon review replies',
    'local business reputation',
    'Google My Business automation',
    'review response software',
    'SaaS review tool Europe',
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
      'Stop spending hours replying to reviews manually. ReviewAgent handles it automatically — professional, personalized responses in seconds. Try free today.',
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
      'Stop spending hours replying to reviews manually. ReviewAgent handles it automatically — professional, personalized responses in seconds.',
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
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
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
                'ReviewAgent automatically responds to your Google reviews 24/7. Perfect for restaurants, salons, and cafés across Europe.',
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
              url: 'https://reviewagent.ailnex.com',
            }),
          }}
        />
      </head>
      <body
        className="bg-[#0a0a0f] text-white font-sans antialiased selection:bg-[#00e5ff]/20 selection:text-[#00e5ff]"
        style={{ fontFamily: 'var(--font-plus-jakarta), var(--font-inter), sans-serif' }}
      >
        <div className="relative min-h-screen overflow-x-hidden">
          {/* Global ambient glow background */}
          <div
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
          >
            <div className="absolute -top-[400px] left-1/2 -translate-x-1/2 w-[900px] h-[700px] rounded-full bg-[#00e5ff]/5 blur-[120px]" />
            <div className="absolute top-[60%] -left-[200px] w-[500px] h-[500px] rounded-full bg-[#00e5ff]/3 blur-[100px]" />
            <div className="absolute top-[40%] -right-[150px] w-[400px] h-[400px] rounded-full bg-purple-500/5 blur-[100px]" />
          </div>
          <div className="relative z-10">{children}</div>
        </div>
      </body>
    </html>
  );
}
