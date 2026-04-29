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
      '1 location',
      'Up to 20 AI replies/month',
      'Google Reviews integration',
      'Basic response templates',
      'Email support',
      'ReviewAgent branding',
    ],
    cta: 'Start for Free',
    highlighted: false,
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '€49',
    period: 'per month',
    description: 'Ideal for single-location restaurants and salons ready to automate their reputation.',
    features: [
      '1 location',
      'Unlimited AI replies',
      'Google & Tripadvisor integration',
      'Custom brand voice & tone',
      'Review analytics dashboard',
      'Negative review alerts',
      'Priority email support',
      'Remove ReviewAgent branding',
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
    description: 'Built for multi-location chains and agencies managing multiple brands.',
    features: [
      'Up to 10 locations',
      'Unlimited AI replies',
      'All integrations incl. Yelp & Booking.com',
      'Custom brand voice per location',
      'Advanced analytics & reports',
      'Negative review escalation',
      'Dedicated account manager',
      'API access',
      'SLA guarantee',
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
    <section id="pricing" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0a0f] overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-[#00e5ff] opacity-[0.03] rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00e5ff]/20 bg-[#00e5ff]/5 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#00e5ff] animate-pulse" />
            <span className="text-[#00e5ff] text-sm font-medium tracking-wide">Simple Pricing</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
            Choose the plan that fits
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-[#0099aa]">
              your business size
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Start free and upgrade as you grow. No hidden fees, no long-term contracts.
            Cancel anytime.
          </p>
        </div>

        {/* Billing toggle label */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <span className="text-gray-400 text-sm">All prices in EUR, billed monthly</span>
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#00e5ff]/10 border border-[#00e5ff]/20 text-[#00e5ff] text-xs font-semibold">
            14-day free trial on paid plans
          </span>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
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
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-[#00e5ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span>No credit card required for Free</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-gray-700" />
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-[#00e5ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
            <span>Secure payment via Stripe</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-gray-700" />
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-[#00e5ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>Cancel anytime, no questions asked</span>
          </div>
        </div>

        {/* Enterprise callout */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl border border-gray-800 bg-[#111118] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-white font-semibold text-lg mb-1">Need a custom enterprise plan?</h3>
            <p className="text-gray-400 text-sm">
              More than 10 locations, custom integrations, white-label, or dedicated infrastructure?
              Let&apos;s talk.
            </p>
          </div>
          <a
            href="mailto:enterprise@ailnex.com"
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[#00e5ff]/30 text-[#00e5ff] text-sm font-semibold hover:bg-[#00e5ff]/10 transition-colors duration-200 whitespace-nowrap"
          >
            Contact Enterprise Team
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Lead capture modal */}
      {isModalOpen && selectedPlan && (
        <LeadModal
          plan={selectedPlan}
          onClose={handleCloseModal}
        />
      )}
    </section>
  );
}