'use client';

import { useState } from 'react';
import PricingCard from '@/components/ui/PricingCard';
import LeadModal from '@/components/ui/LeadModal';

type Plan = 'free' | 'pro' | 'business';

interface PricingPlan {
  id: Plan;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  highlighted: boolean;
  badge?: string;
}

const plans: PricingPlan[] = [
  {
    id: 'free',
    name: 'Free',
    price: '€0',
    period: 'forever',
    description: 'Perfect for testing ReviewAgent and seeing the value before committing.',
    features: [
      '1 business location',
      'Up to 20 AI replies / month',
      'Google Reviews integration',
      'Basic sentiment analysis',
      'Email support',
      'ReviewAgent branding on replies',
    ],
    cta: 'Get Started Free',
    highlighted: false,
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '€49',
    period: 'per month',
    description: 'For growing restaurants and salons ready to automate their reputation fully.',
    features: [
      '1 business location',
      'Unlimited AI replies',
      'Google & Tripadvisor integration',
      'Advanced sentiment & trend analytics',
      'Custom reply tone & brand voice',
      'Auto-reply scheduling',
      'Priority email & chat support',
      'No ReviewAgent branding',
    ],
    cta: 'Start Pro Trial',
    highlighted: true,
    badge: 'Most Popular',
  },
  {
    id: 'business',
    name: 'Business',
    price: '€149',
    period: 'per month',
    description: 'For multi-location chains and agencies managing reputation at scale.',
    features: [
      'Up to 10 business locations',
      'Unlimited AI replies across all locations',
      'Google, Tripadvisor & Yelp integration',
      'Multi-location dashboard',
      'Custom AI model fine-tuning',
      'Dedicated account manager',
      'API access & webhooks',
      'SLA-backed support (24h response)',
      'White-label option available',
    ],
    cta: 'Contact Sales',
    highlighted: false,
  },
];

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSelectPlan = (plan: Plan) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPlan(null);
  };

  return (
    <section
      id="pricing"
      className="relative py-24 px-4 overflow-hidden"
      style={{ backgroundColor: '#0a0a0f' }}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full opacity-10 blur-3xl"
          style={{ background: 'radial-gradient(ellipse, #00e5ff 0%, transparent 70%)' }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-sm font-medium mb-6"
            style={{
              borderColor: 'rgba(0, 229, 255, 0.3)',
              color: '#00e5ff',
              backgroundColor: 'rgba(0, 229, 255, 0.05)',
            }}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Simple, Transparent Pricing
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Choose the plan that{' '}
            <span style={{ color: '#00e5ff' }}>fits your business</span>
          </h2>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Start free, upgrade when you're ready. No hidden fees, no long-term contracts.
            Cancel anytime.
          </p>
        </div>

        {/* Billing toggle note */}
        <div className="flex justify-center mb-12">
          <div
            className="flex items-center gap-2 px-4 py-2 rounded-full text-sm"
            style={{ backgroundColor: '#111118', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            <span className="text-gray-400">All prices in EUR · VAT may apply ·</span>
            <span style={{ color: '#00e5ff' }} className="font-medium">Annual billing saves 20%</span>
          </div>
        </div>

        {/* Pricing cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => (
            <PricingCard
              key={plan.id}
              id={plan.id}
              name={plan.name}
              price={plan.price}
              period={plan.period}
              description={plan.description}
              features={plan.features}
              cta={plan.cta}
              highlighted={plan.highlighted}
              badge={plan.badge}
              onSelect={handleSelectPlan}
            />
          ))}
        </div>

        {/* Bottom guarantee */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <svg className="w-5 h-5 shrink-0" style={{ color: '#00e5ff' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span>14-day money-back guarantee</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <svg className="w-5 h-5 shrink-0" style={{ color: '#00e5ff' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
              <span>No credit card for Free plan</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <svg className="w-5 h-5 shrink-0" style={{ color: '#00e5ff' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
              <span>Upgrade or downgrade anytime</span>
            </div>
          </div>
        </div>

        {/* Enterprise callout */}
        <div
          className="mt-12 p-6 md:p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6"
          style={{
            backgroundColor: '#111118',
            border: '1px solid rgba(0, 229, 255, 0.15)',
          }}
        >
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Need a custom Enterprise solution?
            </h3>
            <p className="text-gray-400 text-sm max-w-lg">
              Managing 10+ locations, need white-label, SSO, or a dedicated infrastructure? Let's
              build a plan that fits your enterprise needs.
            </p>
          </div>
          <button
            onClick={() => handleSelectPlan('business')}
            className="shrink-0 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 hover:opacity-90 active:scale-95"
            style={{
              backgroundColor: 'rgba(0, 229, 255, 0.1)',
              color: '#00e5ff',
              border: '1px solid rgba(0, 229, 255, 0.3)',
            }}
          >
            Talk to Sales →
          </button>
        </div>
      </div>

      {/* Lead Modal */}
      {isModalOpen && selectedPlan && (
        <LeadModal
          plan={selectedPlan}
          onClose={handleCloseModal}
        />
      )}
    </section>
  );
}
