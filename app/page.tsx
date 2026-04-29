import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { Demo } from '@/components/sections/Demo';
import { SocialProof } from '@/components/sections/SocialProof';
import { Pricing } from '@/components/sections/Pricing';
import { FAQ } from '@/components/sections/FAQ';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { Footer } from '@/components/sections/Footer';

export const metadata = {
  title: 'ReviewAgent — Automated Google Review Responses for Restaurants & Salons',
  description: 'ReviewAgent automatically responds to your Google reviews using AI. Save time, boost your reputation, and never miss a customer review. Plans from free. Perfect for restaurants, cafes, and salons across Europe.',
  keywords: 'google reviews automation, auto reply reviews, restaurant review management, salon review tool, AI review responses',
  openGraph: {
    title: 'ReviewAgent — Automated Google Review Responses',
    description: 'Save hours every week. Let AI handle your Google reviews automatically.',
    type: 'website',
    url: 'https://reviewagent.ai',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ReviewAgent - Automated Google Review Responses',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ReviewAgent — Automated Google Review Responses',
    description: 'Save hours every week. Let AI handle your Google reviews automatically.',
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
