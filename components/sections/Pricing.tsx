'use client';

import { useState } from 'react';
import PricingCard from '@/components/ui/PricingCard';

const plans = [
  {
    id: 'free',
    name: 'Free',
    price: { monthly: 0, annual: 0 },
    description: 'Perfect for single-location businesses just getting started with review automation.',
    badge: null,
    features: [
      { text: 'Up to 50 reviews monitored/month', included: true },
      { text: '1 platform (Google or Tripadvisor)', included: true },
      { text: 'AI-generated reply suggestions', included: true },
      { text: 'Basic sentiment analysis', included: true },
      { text: 'Email digest (weekly)', included: true },
      { text: 'Multi-platform monitoring', included: false },
      { text: 'Auto-publish replies', included: false },
      { text: 'Review analytics dashboard', included: false },
      { text: 'CRM integrations', included: false },
      { text: 'Priority support', included: false },
    ],
    cta: 'Start for Free',
    ctaVariant: 'outline' as const,
    highlighted: false,
  },
  {
    id: 'pro',
    name: 'Pro',
    price: { monthly: 49, annual: 39 },
    description: 'Ideal for growing restaurants and salons that want to automate review management end-to-end.',
    badge: 'Most Popular',
    features: [
      { text: 'Unlimited reviews monitored', included: true },
      { text: '5 platforms (Google, Tripadvisor, Yelp, Booking, Facebook)', included: true },
      { text: 'AI-generated reply suggestions', included: true },
      { text: 'Advanced sentiment & keyword analysis', included: true },
      { text: 'Email digest (daily)', included: true },
      { text: 'Multi-platform monitoring', included: true },
      { text: 'Auto-publish replies', included: true },
      { text: 'Review analytics dashboard', included: true },
      { text: 'CRM integrations', included: false },
      { text: 'Priority support', included: false },
    ],
    cta: 'Get Started',
    ctaVariant: 'primary' as const,
    highlighted: true,
  },
  {
    id: 'business',
    name: 'Business',
    price: { monthly: 149, annual: 119 },
    description: 'Built for multi-location chains, hospitality groups, and agencies managing multiple brands.',
    badge: null,
    features: [
      { text: 'Unlimited reviews monitored', included: true },
      { text: 'All platforms + custom integrations', included: true },
      { text: 'AI-generated reply suggestions', included: true },
      { text: 'Advanced sentiment & competitor benchmarking', included: true },
      { text: 'Real-time alerts & digest', included: true },
      { text: 'Multi-platform monitoring', included: true },
      { text: 'Auto-publish replies', included: true },
      { text: 'Review analytics dashboard', included: true },
      { text: 'CRM integrations (HubSpot, Salesforce)', included: true },
      { text: 'Priority support + dedicated CSM', included: true },
    ],
    cta: 'Contact Sales',
    ctaVariant: 'outline' as const,
    highlighted: false,
  },
];

interface PricingSectionProps {
  onSelectPlan?: (planId: string) => void;
}

export default function Pricing({ onSelectPlan }: PricingSectionProps) {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section
      id="pricing"
      className="relative py-24 px-4 overflow-hidden"
      style={{ background: '#0a0a0f' }}
    >
      {/* Background decorations */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full opacity-5 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #00e5ff 0%, transparent 70%)' }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4 border"
            style={{ color: '#00e5ff', borderColor: 'rgba(0,229,255,0.3)', background: 'rgba(0,229,255,0.05)' }}
          >
            Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Simple, transparent pricing
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            No hidden fees. No long-term contracts. Cancel anytime.
            All plans include a{' '}
            <span style={{ color: '#00e5ff' }}>14-day free trial</span>.
          </p>

          {/* Billing toggle */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-white' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual((prev) => !prev)}
              className="relative w-14 h-7 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black"
              style={{
                background: isAnnual ? '#00e5ff' : 'rgba(255,255,255,0.1)',
                focusRingColor: '#00e5ff',
              }}
              aria-label="Toggle billing period"
            >
              <span
                className="absolute top-1 left-1 w-5 h-5 bg-white rounded-full shadow transition-transform duration-300"
                style={{ transform: isAnnual ? 'translateX(28px)' : 'translateX(0)' }}
              />
            </button>
            <span className={`text-sm font-medium flex items-center gap-2 ${isAnnual ? 'text-white' : 'text-gray-500'}`}>
              Annual
              <span
                className="text-xs font-bold px-2 py-0.5 rounded-full"
                style={{ background: 'rgba(0,229,255,0.15)', color: '#00e5ff' }}
              >
                Save 20%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {plans.map((plan) => (
            <PricingCard
              key={plan.id}
              plan={plan}
              isAnnual={isAnnual}
              onSelectPlan={onSelectPlan}
            />
          ))}
        </div>

        {/* Enterprise note */}
        <div
          className="mt-12 rounded-2xl border p-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderColor: 'rgba(255,255,255,0.07)', background: '#111118' }}
        >
          <div>
            <p className="text-white font-semibold text-lg mb-1">
              Need a custom Enterprise plan?
            </p>
            <p className="text-gray-400 text-sm">
              For large hospitality groups with 20+ locations, white-label options, or custom AI training on your brand voice.
            </p>
          </div>
          <button
            onClick={() => onSelectPlan?.('business')}
            className="shrink-0 px-6 py-3 rounded-xl text-sm font-semibold border transition-all duration-200 hover:bg-white/5"
            style={{ borderColor: 'rgba(0,229,255,0.4)', color: '#00e5ff' }}
          >
            Talk to Sales
          </button>
        </div>

        {/* Trust signals */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" style={{ color: '#00e5ff' }} fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            No credit card required
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" style={{ color: '#00e5ff' }} fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Cancel anytime
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" style={{ color: '#00e5ff' }} fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            GDPR compliant
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" style={{ color: '#00e5ff' }} fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Prices in EUR
          </div>
        </div>
      </div>
    </section>
  );
}