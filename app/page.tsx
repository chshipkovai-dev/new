import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import HowItWorks from '@/components/sections/HowItWorks';
import SocialProof from '@/components/sections/SocialProof';
import Pricing from '@/components/sections/Pricing';
import FAQ from '@/components/sections/FAQ';
import Footer from '@/components/sections/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ReviewAgent — AI-Powered Review Automation for Restaurants & Salons',
  description: 'Automate your Google, Yelp and TripAdvisor review responses with AI. Save 10+ hours per week, boost your rating and win more customers. Trusted by 500+ European businesses.',
  openGraph: {
    title: 'ReviewAgent — AI-Powered Review Automation',
    description: 'Automate your review responses with AI. Save 10+ hours per week and boost your rating.',
    url: 'https://reviewagent.ailnex.com',
    siteName: 'ReviewAgent by ailnex',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ReviewAgent — AI Review Automation',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ReviewAgent — AI-Powered Review Automation',
    description: 'Automate your review responses with AI. Save 10+ hours per week and boost your rating.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://reviewagent.ailnex.com',
  },
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <SocialProof />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}
