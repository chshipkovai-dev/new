'use client';

import { useState } from 'react';
import { Star, TrendingUp, Shield, Zap } from 'lucide-react';
import LeadModal from '@/components/ui/LeadModal';

const stats = [
  { value: '2,400+', label: 'Businesses trust us' },
  { value: '94%', label: 'Faster response time' },
  { value: '4.8★', label: 'Average rating boost' },
  { value: '€0', label: 'To get started' },
];

const trustBadges = [
  { icon: Star, text: 'Google Reviews' },
  { icon: Shield, text: 'GDPR Compliant' },
  { icon: Zap, text: 'Setup in 5 min' },
  { icon: TrendingUp, text: 'AI-Powered' },
];

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<'free' | 'pro' | 'business'>('free');

  const handleCTAClick = (plan: 'free' | 'pro' | 'business') => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-24 pb-16 overflow-hidden bg-[#0a0a0f]">
      {/* Background glow effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full opacity-10" style={{ background: 'radial-gradient(ellipse at center, #00e5ff 0%, transparent 70%)' }} />
        <div className="absolute bottom-0 left-[-10%] w-[400px] h-[400px] rounded-full opacity-5" style={{ background: 'radial-gradient(ellipse at center, #00e5ff 0%, transparent 70%)' }} />
        <div className="absolute top-[30%] right-[-5%] w-[300px] h-[300px] rounded-full opacity-5" style={{ background: 'radial-gradient(ellipse at center, #7c3aed 0%, transparent 70%)' }} />
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(0,229,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.5) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Top badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00e5ff]/20 bg-[#00e5ff]/5 text-[#00e5ff] text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-[#00e5ff] animate-pulse" />
          AI Review Management for European Businesses
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-6">
          Stop Losing Customers{' '}
          <br className="hidden sm:block" />
          to{' '}
          <span className="relative inline-block">
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #00e5ff 0%, #7c3aed 100%)' }}>
              Ignored Reviews
            </span>
            <span className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full" style={{ background: 'linear-gradient(90deg, #00e5ff, #7c3aed)' }} />
          </span>
        </h1>

        {/* Sub-headline / Pain */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-4 leading-relaxed">
          Every unanswered Google review costs you a new customer.
        </p>
        <p className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          ReviewAgent uses AI to automatically respond to every review — in your brand voice, in seconds. Restaurants and salons across Europe use it to protect and grow their reputation on autopilot.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button
            onClick={() => handleCTAClick('free')}
            className="group relative w-full sm:w-auto px-8 py-4 rounded-xl text-base font-semibold text-[#0a0a0f] transition-all duration-200 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-[#00e5ff] focus:ring-offset-2 focus:ring-offset-[#0a0a0f]"
            style={{ background: 'linear-gradient(135deg, #00e5ff 0%, #00b8d4 100%)', boxShadow: '0 0 30px rgba(0,229,255,0.25)' }}
          >
            <span className="relative z-10">Start Free — No Credit Card</span>
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200" style={{ background: 'linear-gradient(135deg, #33ecff 0%, #00d4f0 100%)' }} />
          </button>

          <button
            onClick={() => handleCTAClick('pro')}
            className="group w-full sm:w-auto px-8 py-4 rounded-xl text-base font-semibold text-white border border-white/10 bg-white/5 transition-all duration-200 hover:border-[#00e5ff]/40 hover:bg-white/10 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-[#0a0a0f]"
          >
            See Pro Plan →
          </button>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-14">
          {trustBadges.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2 text-gray-500 text-sm">
              <Icon className="w-4 h-4 text-[#00e5ff]" />
              <span>{text}</span>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {stats.map(({ value, label }) => (
            <div
              key={label}
              className="flex flex-col items-center p-4 rounded-xl border border-white/5 bg-[#111118]/80 backdrop-blur-sm"
            >
              <span className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #00e5ff, #ffffff)' }}>
                {value}
              </span>
              <span className="text-xs sm:text-sm text-gray-500 mt-1 text-center">{label}</span>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="mt-14 flex flex-col items-center gap-2 text-gray-600 text-xs">
          <span>Scroll to explore</span>
          <div className="w-5 h-8 rounded-full border border-gray-700 flex items-start justify-center p-1">
            <div className="w-1 h-2 rounded-full bg-[#00e5ff] animate-bounce" />
          </div>
        </div>
      </div>

      {/* Lead Modal */}
      <LeadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedPlan={selectedPlan}
      />
    </section>
  );
}