import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import HowItWorks from '@/components/sections/HowItWorks';
import Demo from '@/components/sections/Demo';
import SocialProof from '@/components/sections/SocialProof';
import Pricing from '@/components/sections/Pricing';
import FAQ from '@/components/sections/FAQ';
import FinalCTA from '@/components/sections/FinalCTA';
import Footer from '@/components/sections/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ReviewAgent — Automated Google Review Replies for Local Businesses',
  description: 'ReviewAgent automatically responds to your Google reviews 24/7. Save hours every week, boost your rating, and never miss a customer feedback. Built for restaurants, cafes, and salons across Europe.',
  keywords: 'google reviews automation, review management, restaurant reviews, automated replies, local business reputation',
  openGraph: {
    title: 'ReviewAgent — Automated Google Review Replies',
    description: 'Save hours every week with AI-powered automated responses to your Google reviews.',
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
    description: 'Save hours every week with AI-powered automated responses to your Google reviews.',
  },
};

export default function HomePage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#0a0a0f', color: '#f0f0f5' }}>
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
