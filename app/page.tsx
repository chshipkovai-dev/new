import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { Demo } from '@/components/sections/Demo';
import { SocialProof } from '@/components/sections/SocialProof';
import { Pricing } from '@/components/sections/Pricing';
import { FAQ } from '@/components/sections/FAQ';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { Footer } from '@/components/sections/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ReviewAgent — Automated Google Review Replies for Restaurants & Salons',
  description: 'ReviewAgent automatically responds to your Google reviews using AI. Save hours every week, improve your rating, and never miss a customer review again. Trusted by 500+ businesses across Europe.',
  keywords: 'google reviews automation, auto reply reviews, restaurant review management, salon review software, AI review responses',
  openGraph: {
    title: 'ReviewAgent — Automated Google Review Replies',
    description: 'AI-powered automatic responses to your Google reviews. Start free, upgrade anytime.',
    type: 'website',
    url: 'https://reviewagent.ai',
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
    description: 'AI-powered automatic responses to your Google reviews. Start free, upgrade anytime.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://reviewagent.ai',
  },
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Demo />
      <SocialProof />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
