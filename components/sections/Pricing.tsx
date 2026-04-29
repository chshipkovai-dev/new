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
    description: 'Perfect for testing ReviewAgent and seeing how AI-powered responses work for your business.',
    features: [
      '1 business location',
      'Up to 20 AI responses/month',
      'Google Reviews integration',
      'Basic response templates',
      'Email support',
      'Review dashboard',
    ],
    cta: 'Start for Free',
    highlighted: false,
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '€49',
    period: 'per month',
    description: 'The complete toolkit for restaurants and salons that want to dominate their local reputation.',
    features: [
      '1 business location',
      'Unlimited AI responses',
      'Google + TripAdvisor + Yelp',
      'Sentiment analysis & alerts',
      'Custom brand tone & voice',
      'Response approval workflow',
      'Monthly analytics report',
      'Priority email & chat support',
    ],
    cta: 'Get Pro Access',
    highlighted: true,
    badge: 'Most Popular',
  },
  {
    id: 'business',
    name: 'Business',
    price: '€149',
    period: 'per month',
    description: 'Built for multi-location chains and agencies managing reputation at scale across Europe.',
    features: [
      'Up to 10 locations',
      'Unlimited AI responses',
      'All review platforms',
      'Multi-location dashboard',
      'Team roles & permissions',
      'White-label reports',
      'API access',
      'Dedicated account manager',
      'Custom onboarding',
    ],
    cta: 'Contact Sales',
    highlighted: false,
  },
];

export default function Pricing() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<Plan>('free');

  const handleSelectPlan = (plan: Plan) => {
    setSelectedPlan(plan);
    setModalOpen(true);
  };

  return (
    <section
      id="pricing"
      className="relative py-24 px-4 overflow-hidden"
      style={{ backgroundColor: '#0a0a0f' }}
    >
      {/* Background glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, #00e5ff 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase mb-4 px-3 py-1 rounded-full border"
            style={{ color: '#00e5ff', borderColor: 'rgba(0,229,255,0.3)', backgroundColor: 'rgba(0,229,255,0.05)' }}
          >
            Pricing
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Simple, Transparent{' '}
            <span style={{ color: '#00e5ff' }}>Pricing</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            No hidden fees. No contracts. Start free and upgrade when you see the results — most businesses do within the first week.
          </p>
        </div>

        {/* Billing toggle hint */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <span className="text-sm text-gray-500">All prices in EUR. Cancel anytime.</span>
          <span
            className="text-xs font-medium px-2.5 py-1 rounded-full"
            style={{ backgroundColor: 'rgba(0,229,255,0.1)', color: '#00e5ff' }}
          >
            🇪🇺 EU VAT may apply
          </span>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-center">
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

        {/* Bottom trust note */}
        <div className="mt-14 text-center">
          <p className="text-sm text-gray-500 mb-4">
            Trusted by 500+ local businesses across Germany, Spain, Poland, and beyond.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {[
              { icon: '🔒', text: 'GDPR compliant' },
              { icon: '💳', text: 'No credit card for Free' },
              { icon: '⚡', text: 'Setup in under 5 minutes' },
              { icon: '🔄', text: 'Cancel anytime' },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2">
                <span className="text-base">{item.icon}</span>
                <span className="text-sm text-gray-400">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lead Modal */}
      <LeadModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        selectedPlan={selectedPlan}
      />
    </section>
  );
}
