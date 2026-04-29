'use client';

import { useState } from 'react';

interface PlanFeature {
  text: string;
  included: boolean;
}

interface Plan {
  id: string;
  name: string;
  price: { monthly: number; annual: number };
  description: string;
  badge: string | null;
  features: PlanFeature[];
  cta: string;
  ctaVariant: 'primary' | 'outline';
  highlighted: boolean;
}

function PricingCard({
  plan,
  isAnnual,
  onSelectPlan,
}: {
  plan: Plan;
  isAnnual: boolean;
  onSelectPlan?: (planId: string) => void;
}) {
  const price = isAnnual ? plan.price.annual : plan.price.monthly;

  return (
    <div
      className="relative flex flex-col rounded-2xl p-6 transition-all duration-200"
      style={{
        background: plan.highlighted ? '#111118' : '#0d0d14',
        border: plan.highlighted
          ? '1px solid rgba(0,229,255,0.4)'
          : '1px solid rgba(255,255,255,0.07)',
        boxShadow: plan.highlighted ? '0 0 40px rgba(0,229,255,0.08)' : 'none',
      }}
    >
      {plan.badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span
            className="px-3 py-1 rounded-full text-xs font-bold"
            style={{ background: '#00e5ff', color: '#0a0a0f' }}
          >
            {plan.badge}
          </span>
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-lg font-bold text-white mb-1">{plan.name}</h3>
        <p className="text-sm text-gray-400 leading-relaxed">{plan.description}</p>
      </div>

      <div className="mb-6">
        {price === 0 ? (
          <div className="text-4xl font-extrabold text-white">Free</div>
        ) : (
          <div className="flex items-end gap-1">
            <span className="text-4xl font-extrabold text-white">€{price}</span>
            <span className="text-gray-400 text-sm mb-1">/mo</span>
          </div>
        )}
        {isAnnual && price > 0 && (
          <p className="text-xs text-gray-500 mt-1">billed annually</p>
        )}
      </div>

      <button
        onClick={() => onSelectPlan?.(plan.id)}
        className="w-full py-3 rounded-xl text-sm font-semibold mb-6 transition-all duration-200"
        style={
          plan.ctaVariant === 'primary'
            ? { background: '#00e5ff', color: '#0a0a0f' }
            : { border: '1px solid rgba(0,229,255,0.4)', color: '#00e5ff' }
        }
      >
        {plan.cta}
      </button>

      <ul className="flex flex-col gap-3">
        {plan.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3">
            <span
              className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-[10px]"
              style={{
                background: feature.included ? 'rgba(0,229,255,0.15)' : 'rgba(255,255,255,0.05)',
                color: feature.included ? '#00e5ff' : '#4b5563',
              }}
            >
              {feature.included ? '✓' : '×'}
            </span>
            <span
              className="text-sm leading-snug"
              style={{ color: feature.included ? '#d1d5db' : '#4b5563' }}
            >
              {feature.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

const plans: Plan[] = [
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
    ctaVariant: 'outline',
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
    ctaVariant: 'primary',
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
    ctaVariant: 'outline',
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
            No hidden fees. No long-term contracts. Cancel anytime. All plans include a{' '}
            <span style={{ color: '#00e5ff' }}>14-day free trial</span>.
          </p>

          {/* Billing toggle */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-white' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual((prev) => !prev)}
              className="relative w-14 h-7 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#00e5ff] focus:ring-offset-2 focus:ring-offset-black"
              style={{ background: isAnnual ? '#00e5ff' : 'rgba(255,255,255,0.1)' }}
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
            <p className="text-white font-semibold text-lg mb-1">Need a custom Enterprise plan?</p>
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
          {['No credit card required', 'Cancel anytime', 'GDPR compliant', 'Prices in EUR'].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <svg className="w-4 h-4" style={{ color: '#00e5ff' }} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
