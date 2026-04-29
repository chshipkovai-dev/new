'use client';

import { Check, Zap, Star, Building2 } from 'lucide-react';

export type Plan = 'free' | 'pro' | 'business';

export interface PricingProps {
  onSelectPlan: (plan: Plan) => void;
}

interface PlanConfig {
  id: Plan;
  name: string;
  price: string;
  period: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  cta: string;
  highlighted: boolean;
  badge?: string;
}

const plans: PlanConfig[] = [
  {
    id: 'free',
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Perfect for getting started and exploring ReviewAgent capabilities.',
    icon: <Zap size={22} className="text-gray-400" />,
    features: [
      'Up to 20 reviews/month',
      'Google Reviews integration',
      'Basic AI response templates',
      'Email notifications',
      'Dashboard with key metrics',
      '1 business location',
    ],
    cta: 'Get Started Free',
    highlighted: false,
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '$49',
    period: 'per month',
    description: 'For growing restaurants and salons that want full AI-powered automation.',
    icon: <Star size={22} className="text-[#00e5ff]" />,
    features: [
      'Unlimited reviews',
      'Google + TripAdvisor + Yelp',
      'Advanced AI auto-responses',
      'Sentiment analysis & alerts',
      'Weekly performance reports',
      'Up to 3 business locations',
      'Priority email support',
      'Custom response tone settings',
    ],
    cta: 'Start Pro Trial',
    highlighted: true,
    badge: 'Most Popular',
  },
  {
    id: 'business',
    name: 'Business',
    price: '$149',
    period: 'per month',
    description: 'For chains and marketing teams managing multiple venues at scale.',
    icon: <Building2 size={22} className="text-purple-400" />,
    features: [
      'Everything in Pro',
      'Unlimited locations',
      'All major review platforms',
      'Competitor benchmarking',
      'Custom AI persona per brand',
      'Advanced analytics & exports',
      'Dedicated account manager',
      'API access & webhooks',
      'SLA 99.9% uptime guarantee',
    ],
    cta: 'Contact Sales',
    highlighted: false,
  },
];

export default function Pricing({ onSelectPlan }: PricingProps) {
  return (
    <section id="pricing" className="py-24 px-4" style={{ background: '#0a0a0f' }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4"
            style={{ background: 'rgba(0,229,255,0.08)', color: '#00e5ff', border: '1px solid rgba(0,229,255,0.2)' }}
          >
            Pricing
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-gray-400 max-w-xl mx-auto">
            No hidden fees. No contracts. Cancel anytime. Start free and upgrade when you're ready to grow.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className="relative flex flex-col rounded-2xl overflow-hidden transition-transform duration-300 hover:-translate-y-1"
              style={{
                background: plan.highlighted
                  ? 'linear-gradient(160deg, #0d1f2d 0%, #111118 100%)'
                  : '#111118',
                border: plan.highlighted
                  ? '1.5px solid rgba(0,229,255,0.55)'
                  : '1.5px solid rgba(255,255,255,0.07)',
                boxShadow: plan.highlighted
                  ? '0 0 40px rgba(0,229,255,0.12), 0 8px 32px rgba(0,0,0,0.4)'
                  : '0 4px 24px rgba(0,0,0,0.3)',
              }}
            >
              {/* Popular badge */}
              {plan.badge && (
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xs font-bold tracking-wider uppercase px-4 py-1 rounded-full"
                  style={{
                    background: 'linear-gradient(90deg, #00e5ff, #0099bb)',
                    color: '#0a0a0f',
                  }}
                >
                  {plan.badge}
                </div>
              )}

              <div className="p-8 flex flex-col flex-1">
                {/* Icon + Name */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
                  >
                    {plan.icon}
                  </div>
                  <span className="text-lg font-semibold text-white">{plan.name}</span>
                </div>

                {/* Price */}
                <div className="mb-3">
                  <span
                    className="text-5xl font-extrabold"
                    style={{ color: plan.highlighted ? '#00e5ff' : 'white' }}
                  >
                    {plan.price}
                  </span>
                  <span className="text-gray-500 text-sm ml-2">{plan.period}</span>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">{plan.description}</p>

                {/* Divider */}
                <div
                  className="w-full h-px mb-6"
                  style={{ background: 'rgba(255,255,255,0.07)' }}
                />

                {/* Features */}
                <ul className="flex flex-col gap-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span
                        className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                        style={{
                          background: plan.highlighted
                            ? 'rgba(0,229,255,0.15)'
                            : 'rgba(255,255,255,0.06)',
                        }}
                      >
                        <Check
                          size={11}
                          strokeWidth={3}
                          style={{ color: plan.highlighted ? '#00e5ff' : '#9ca3af' }}
                        />
                      </span>
                      <span className="text-sm text-gray-300 leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  onClick={() => onSelectPlan(plan.id)}
                  className="w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2"
                  style={{
                    background: plan.highlighted
                      ? 'linear-gradient(90deg, #00e5ff, #00b8cc)'
                      : 'rgba(255,255,255,0.07)',
                    color: plan.highlighted ? '#0a0a0f' : 'white',
                    border: plan.highlighted ? 'none' : '1px solid rgba(255,255,255,0.1)',
                    focusRingColor: '#00e5ff',
                  }}
                  onMouseEnter={(e) => {
                    if (!plan.highlighted) {
                      (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.12)';
                    } else {
                      (e.currentTarget as HTMLButtonElement).style.opacity = '0.92';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!plan.highlighted) {
                      (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.07)';
                    } else {
                      (e.currentTarget as HTMLButtonElement).style.opacity = '1';
                    }
                  }}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-gray-500 text-sm mt-10">
          All plans include a{' '}
          <span style={{ color: '#00e5ff' }}>14-day free trial</span>
          {' '}on paid tiers. No credit card required to start.
        </p>
      </div>
    </section>
  );
}
