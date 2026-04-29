'use client';

import { useState } from 'react';
import { Star, ArrowRight, CheckCircle, TrendingUp, MessageSquare } from 'lucide-react';
import LeadModal from '@/components/ui/LeadModal';

const stats = [
  { value: '4.8★', label: 'Average rating boost', icon: Star },
  { value: '3x', label: 'Faster response time', icon: TrendingUp },
  { value: '10k+', label: 'Reviews managed', icon: MessageSquare },
];

const trustBadges = [
  'No credit card required',
  'Setup in 5 minutes',
  'Cancel anytime',
];

export default function Hero() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<'free' | 'pro' | 'business'>('free');

  const handleCTAClick = (plan: 'free' | 'pro' | 'business') => {
    setSelectedPlan(plan);
    setModalOpen(true);
  };

  return (
    <>
      <section
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 pt-24 pb-16"
        style={{ background: '#0a0a0f' }}
      >
        {/* Background glow effects */}
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, #00e5ff 0%, transparent 70%)' }}
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full opacity-5 blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, #00e5ff 0%, transparent 70%)' }}
          aria-hidden="true"
        />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(#00e5ff 1px, transparent 1px), linear-gradient(90deg, #00e5ff 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center gap-8">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium" style={{ borderColor: 'rgba(0,229,255,0.3)', background: 'rgba(0,229,255,0.07)', color: '#00e5ff' }}>
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#00e5ff' }} />
            AI-Powered Review Management for European Businesses
          </div>

          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight text-white">
            Stop Losing Customers
            <br />
            to{' '}
            <span
              className="relative inline-block"
              style={{ color: '#00e5ff' }}
            >
              Unanswered Reviews
              <span
                className="absolute bottom-0 left-0 w-full h-0.5 rounded-full"
                style={{ background: 'linear-gradient(90deg, #00e5ff, transparent)' }}
              />
            </span>
          </h1>

          {/* Sub-headline */}
          <p className="max-w-2xl text-lg sm:text-xl leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
            ReviewAgent uses AI to automatically respond to your Google reviews in seconds — in your brand voice, in any language. Built for restaurants and beauty salons across Europe.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <button
              onClick={() => handleCTAClick('free')}
              className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-base transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg"
              style={{
                background: '#00e5ff',
                color: '#0a0a0f',
                boxShadow: '0 0 32px rgba(0,229,255,0.35)',
              }}
            >
              Start Free — No Card Needed
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>

            <button
              onClick={() => handleCTAClick('pro')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-base border transition-all duration-200 hover:scale-105 active:scale-95"
              style={{
                borderColor: 'rgba(255,255,255,0.15)',
                color: 'rgba(255,255,255,0.85)',
                background: 'rgba(255,255,255,0.04)',
              }}
            >
              See Pro Plan
            </button>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {trustBadges.map((badge) => (
              <span key={badge} className="flex items-center gap-1.5 text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
                <CheckCircle className="w-4 h-4" style={{ color: '#00e5ff' }} />
                {badge}
              </span>
            ))}
          </div>

          {/* Stats bar */}
          <div
            className="mt-4 w-full max-w-3xl grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x rounded-2xl overflow-hidden border"
            style={{
              background: '#111118',
              borderColor: 'rgba(255,255,255,0.08)',
              divideColor: 'rgba(255,255,255,0.08)',
            }}
          >
            {stats.map(({ value, label, icon: Icon }) => (
              <div
                key={label}
                className="flex flex-col items-center justify-center gap-1 px-6 py-6"
              >
                <div className="flex items-center gap-2">
                  <Icon className="w-5 h-5" style={{ color: '#00e5ff' }} />
                  <span className="text-3xl font-bold text-white">{value}</span>
                </div>
                <span className="text-sm text-center" style={{ color: 'rgba(255,255,255,0.45)' }}>
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* Scroll indicator */}
          <div className="flex flex-col items-center gap-2 mt-4 opacity-40">
            <span className="text-xs tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.5)' }}>Scroll to explore</span>
            <div className="w-5 h-8 rounded-full border flex items-start justify-center pt-1.5" style={{ borderColor: 'rgba(255,255,255,0.3)' }}>
              <div
                className="w-1 h-2 rounded-full animate-bounce"
                style={{ background: '#00e5ff' }}
              />
            </div>
          </div>
        </div>
      </section>

      <LeadModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialPlan={selectedPlan}
      />
    </>
  );
}
