'use client';

import { useState } from 'react';
import { Check, Zap, Building2, Sparkles } from 'lucide-react';

type Plan = 'free' | 'pro' | 'business';

interface PricingPlan {
  id: Plan;
  name: string;
  price: number | null;
  period: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  cta: string;
  highlighted: boolean;
  badge?: string;
}

interface PricingProps {
  onSelectPlan: (plan: Plan) => void;
}

const plans: PricingPlan[] = [
  {
    id: 'free',
    name: 'Free',
    price: 0,
    period: 'forever',
    description: 'Perfect for getting started with review management.',
    icon: <Sparkles size={22} />,
    features: [
      'Up to 50 reviews/month',
      '1 business location',
      'Google Reviews integration',
      'Basic AI response templates',
      'Email notifications',
      'Dashboard analytics (7-day)',
    ],
    cta: 'Get Started Free',
    highlighted: false,
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 49,
    period: 'per month',
    description: 'For restaurants and salons serious about their reputation.',
    icon: <Zap size={22} />,
    features: [
      'Unlimited reviews',
      'Up to 3 business locations',
      'Google, Yelp & TripAdvisor',
      'Advanced AI auto-responses',
      'Sentiment analysis',
      'Dashboard analytics (90-day)',
      'Priority email support',
      'Weekly digest reports',
    ],
    cta: 'Start Pro Trial',
    highlighted: true,
    badge: 'Most Popular',
  },
  {
    id: 'business',
    name: 'Business',
    price: 149,
    period: 'per month',
    description: 'For multi-location chains and marketing teams.',
    icon: <Building2 size={22} />,
    features: [
      'Unlimited reviews',
      'Unlimited locations',
      'All platforms + custom sources',
      'Custom AI response tone & brand voice',
      'Advanced analytics & exports',
      'API access',
      'Dedicated account manager',
      'Onboarding & training session',
      'SLA 99.9% uptime guarantee',
    ],
    cta: 'Contact Sales',
    highlighted: false,
  },
];

export default function Pricing({ onSelectPlan }: PricingProps) {
  const [hoveredPlan, setHoveredPlan] = useState<Plan | null>(null);

  return (
    <section id="pricing" className="py-24 px-4 relative overflow-hidden" style={{ background: '#0a0a0f' }}>
      {/* Background glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #00e5ff 0%, transparent 70%)' }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6"
            style={{ background: 'rgba(0,229,255,0.08)', color: '#00e5ff', border: '1px solid rgba(0,229,255,0.2)' }}
          >
            <Zap size={12} />
            Simple Pricing
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Transparent plans,{' '}
            <span style={{ color: '#00e5ff' }}>real results</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: '#8888aa' }}>
            No hidden fees. No long-term contracts. Cancel anytime. Start free and upgrade as you grow.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan) => {
            const isHovered = hoveredPlan === plan.id;
            const isHighlighted = plan.highlighted;

            return (
              <div
                key={plan.id}
                onMouseEnter={() => setHoveredPlan(plan.id)}
                onMouseLeave={() => setHoveredPlan(null)}
                className="relative rounded-2xl flex flex-col transition-all duration-300"
                style={{
                  background: isHighlighted ? 'rgba(0,229,255,0.05)' : '#111118',
                  border: isHighlighted
                    ? '1.5px solid rgba(0,229,255,0.5)'
                    : isHovered
                    ? '1.5px solid rgba(0,229,255,0.25)'
                    : '1.5px solid rgba(255,255,255,0.06)',
                  boxShadow: isHighlighted
                    ? '0 0 40px rgba(0,229,255,0.12), 0 8px 32px rgba(0,0,0,0.4)'
                    : isHovered
                    ? '0 8px 32px rgba(0,0,0,0.3)'
                    : '0 4px 16px rgba(0,0,0,0.2)',
                  transform: isHighlighted ? 'scale(1.03)' : isHovered ? 'translateY(-4px)' : 'none',
                }}
              >
                {/* Popular badge */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span
                      className="px-4 py-1 rounded-full text-xs font-bold tracking-wide"
                      style={{
                        background: 'linear-gradient(90deg, #00e5ff, #00b8cc)',
                        color: '#0a0a0f',
                      }}
                    >
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="p-8 flex flex-col flex-1">
                  {/* Plan header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{
                        background: isHighlighted ? 'rgba(0,229,255,0.15)' : 'rgba(255,255,255,0.05)',
                        color: isHighlighted ? '#00e5ff' : '#8888aa',
                      }}
                    >
                      {plan.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                  </div>

                  {/* Price */}
                  <div className="mb-4">
                    {plan.price === 0 ? (
                      <div className="flex items-baseline gap-1">
                        <span className="text-5xl font-extrabold text-white">$0</span>
                        <span className="text-sm ml-1" style={{ color: '#8888aa' }}>{plan.period}</span>
                      </div>
                    ) : (
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-bold" style={{ color: '#8888aa' }}>$</span>
                        <span className="text-5xl font-extrabold text-white">{plan.price}</span>
                        <span className="text-sm ml-1" style={{ color: '#8888aa' }}>{plan.period}</span>
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-sm mb-8 leading-relaxed" style={{ color: '#8888aa' }}>
                    {plan.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div
                          className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{
                            background: isHighlighted ? 'rgba(0,229,255,0.15)' : 'rgba(255,255,255,0.06)',
                          }}
                        >
                          <Check
                            size={11}
                            style={{ color: isHighlighted ? '#00e5ff' : '#8888aa' }}
                            strokeWidth={3}
                          />
                        </div>
                        <span className="text-sm leading-snug" style={{ color: isHighlighted ? '#ccccdd' : '#8888aa' }}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button
                    onClick={() => onSelectPlan(plan.id)}
                    className="w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 cursor-pointer"
                    style={{
                      background: isHighlighted
                        ? 'linear-gradient(135deg, #00e5ff, #00b8cc)'
                        : 'rgba(255,255,255,0.06)',
                      color: isHighlighted ? '#0a0a0f' : '#ffffff',
                      border: isHighlighted ? 'none' : '1px solid rgba(255,255,255,0.1)',
                      boxShadow: isHighlighted ? '0 4px 20px rgba(0,229,255,0.3)' : 'none',
                    }}
                    onMouseEnter={(e) => {
                      if (!isHighlighted) {
                        e.currentTarget.style.background = 'rgba(0,229,255,0.1)';
                        e.currentTarget.style.borderColor = 'rgba(0,229,255,0.3)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isHighlighted) {
                        e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                      }
                    }}
                  >
                    {plan.cta}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer note */}
        <p className="text-center text-sm mt-10" style={{ color: '#555566' }}>
          All plans include GDPR-compliant data handling · Prices in USD · VAT may apply in EU countries
        </p>
      </div>
    </section>
  );
}
