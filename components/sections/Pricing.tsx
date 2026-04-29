'use client';

import { useState } from 'react';
import { Check, X, Zap, Building2, Sparkles } from 'lucide-react';
import Modal from '@/components/ui/Modal';

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingPlan {
  id: 'free' | 'pro' | 'business';
  name: string;
  price: number;
  period: string;
  description: string;
  icon: React.ReactNode;
  badge?: string;
  features: PricingFeature[];
  cta: string;
  highlighted: boolean;
}

const plans: PricingPlan[] = [
  {
    id: 'free',
    name: 'Free',
    price: 0,
    period: '/month',
    description: 'Perfect for getting started and testing the power of automated replies.',
    icon: <Sparkles size={22} />,
    features: [
      { text: 'Up to 20 auto-replies/month', included: true },
      { text: '1 Google Business location', included: true },
      { text: 'Basic AI response templates', included: true },
      { text: 'Email notifications', included: true },
      { text: 'Response tone customization', included: false },
      { text: 'Priority support', included: false },
      { text: 'Analytics dashboard', included: false },
      { text: 'Multi-location management', included: false },
      { text: 'Custom brand voice', included: false },
      { text: 'API access', included: false },
    ],
    cta: 'Start for Free',
    highlighted: false,
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 49,
    period: '/month',
    description: 'Ideal for restaurants, salons, and cafés ready to automate reputation management.',
    icon: <Zap size={22} />,
    badge: 'Most Popular',
    features: [
      { text: 'Unlimited auto-replies', included: true },
      { text: 'Up to 3 Google Business locations', included: true },
      { text: 'Advanced AI response templates', included: true },
      { text: 'Email & Slack notifications', included: true },
      { text: 'Response tone customization', included: true },
      { text: 'Priority email support', included: true },
      { text: 'Analytics dashboard', included: true },
      { text: 'Multi-location management', included: false },
      { text: 'Custom brand voice', included: false },
      { text: 'API access', included: false },
    ],
    cta: 'Get Started with Pro',
    highlighted: true,
  },
  {
    id: 'business',
    name: 'Business',
    price: 149,
    period: '/month',
    description: 'Built for chains and agencies managing multiple locations at scale.',
    icon: <Building2 size={22} />,
    features: [
      { text: 'Unlimited auto-replies', included: true },
      { text: 'Unlimited locations', included: true },
      { text: 'Advanced AI response templates', included: true },
      { text: 'Email, Slack & webhook notifications', included: true },
      { text: 'Response tone customization', included: true },
      { text: 'Dedicated account manager', included: true },
      { text: 'Full analytics & reporting', included: true },
      { text: 'Multi-location management', included: true },
      { text: 'Custom brand voice', included: true },
      { text: 'API access', included: true },
    ],
    cta: 'Contact Sales',
    highlighted: false,
  },
];

export default function Pricing() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<'free' | 'pro' | 'business'>('free');

  const handleSelectPlan = (planId: 'free' | 'pro' | 'business') => {
    setSelectedPlan(planId);
    setModalOpen(true);
  };

  return (
    <section id="pricing" className="relative py-24 px-4 overflow-hidden" style={{ backgroundColor: '#0a0a0f' }}>
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full opacity-10 blur-[120px]"
          style={{ backgroundColor: '#00e5ff' }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full border mb-5"
            style={{ color: '#00e5ff', borderColor: 'rgba(0,229,255,0.3)', backgroundColor: 'rgba(0,229,255,0.07)' }}
          >
            Pricing
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Simple, transparent pricing
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            No hidden fees. No contracts. Cancel anytime. Pick the plan that fits your business.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className="relative flex flex-col rounded-2xl border transition-all duration-300 hover:-translate-y-1"
              style={{
                backgroundColor: plan.highlighted ? 'rgba(0,229,255,0.06)' : '#111118',
                borderColor: plan.highlighted ? '#00e5ff' : 'rgba(255,255,255,0.08)',
                boxShadow: plan.highlighted ? '0 0 40px rgba(0,229,255,0.12)' : 'none',
              }}
            >
              {/* Popular badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span
                    className="inline-block text-xs font-bold uppercase tracking-widest px-5 py-1.5 rounded-full"
                    style={{ backgroundColor: '#00e5ff', color: '#0a0a0f' }}
                  >
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="p-8 flex flex-col flex-1">
                {/* Icon + Plan name */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{
                      backgroundColor: plan.highlighted ? 'rgba(0,229,255,0.15)' : 'rgba(255,255,255,0.06)',
                      color: plan.highlighted ? '#00e5ff' : '#9ca3af',
                    }}
                  >
                    {plan.icon}
                  </div>
                  <span className="text-white font-semibold text-lg">{plan.name}</span>
                </div>

                {/* Price */}
                <div className="mb-4 flex items-end gap-1">
                  {plan.price === 0 ? (
                    <span className="text-5xl font-bold text-white">Free</span>
                  ) : (
                    <>
                      <span className="text-2xl font-semibold text-gray-400 mb-2">$</span>
                      <span className="text-5xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 mb-2">{plan.period}</span>
                    </>
                  )}
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-8">{plan.description}</p>

                {/* CTA Button */}
                <button
                  onClick={() => handleSelectPlan(plan.id)}
                  className="w-full py-3 px-6 rounded-xl font-semibold text-sm transition-all duration-200 mb-8 cursor-pointer"
                  style={
                    plan.highlighted
                      ? {
                          backgroundColor: '#00e5ff',
                          color: '#0a0a0f',
                          boxShadow: '0 0 20px rgba(0,229,255,0.35)',
                        }
                      : {
                          backgroundColor: 'rgba(255,255,255,0.07)',
                          color: '#ffffff',
                          border: '1px solid rgba(255,255,255,0.12)',
                        }
                  }
                  onMouseEnter={(e) => {
                    if (!plan.highlighted) {
                      e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.12)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!plan.highlighted) {
                      e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.07)';
                    }
                  }}
                >
                  {plan.cta}
                </button>

                {/* Divider */}
                <div
                  className="w-full h-px mb-8"
                  style={{ backgroundColor: 'rgba(255,255,255,0.07)' }}
                />

                {/* Features list */}
                <ul className="space-y-3 flex-1">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span
                        className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                        style={
                          feature.included
                            ? { backgroundColor: 'rgba(0,229,255,0.15)', color: '#00e5ff' }
                            : { backgroundColor: 'rgba(255,255,255,0.05)', color: '#4b5563' }
                        }
                      >
                        {feature.included ? <Check size={12} strokeWidth={3} /> : <X size={12} strokeWidth={3} />}
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
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-gray-500 text-sm mt-10">
          All plans include a{' '}
          <span style={{ color: '#00e5ff' }}>14-day free trial</span>. No credit card required for Free plan.
        </p>
      </div>

      {/* Modal */}
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        selectedPlan={selectedPlan}
      />
    </section>
  );
}
