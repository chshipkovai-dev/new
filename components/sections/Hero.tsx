'use client';

import { useState } from 'react';
import { Star, Zap, TrendingUp, Shield } from 'lucide-react';
import Modal from '@/components/ui/Modal';
import LeadForm from '@/components/ui/LeadForm';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';

const stats = [
  { value: '4.8x', label: 'More reviews collected' },
  { value: '94%', label: 'Response rate' },
  { value: '2 min', label: 'Average setup time' },
  { value: '500+', label: 'Businesses in Europe' },
];

const trustLogos = [
  'Gastro Berlin',
  'Bella Vita Roma',
  'Studio Glam Madrid',
  'Le Petit Paris',
  'Salon Vienna',
];

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<'free' | 'pro' | 'business'>('free');

  const handleOpenModal = (plan: 'free' | 'pro' | 'business' = 'free') => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 pb-16 px-4" style={{ background: '#0a0a0f' }}>
      {/* Background glow effects */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, #00e5ff 0%, transparent 70%)' }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, #00e5ff 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      {/* Animated grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(#00e5ff 1px, transparent 1px), linear-gradient(90deg, #00e5ff 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <Badge>
            <Zap className="w-3 h-3 mr-1" style={{ color: '#00e5ff' }} />
            AI-Powered Review Automation for European Businesses
          </Badge>
        </div>

        {/* Headline */}
        <h1 className="text-center font-extrabold tracking-tight text-white mb-6" style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', lineHeight: 1.1 }}>
          Turn Every Guest Into a{' '}
          <span
            className="relative inline-block"
            style={{
              background: 'linear-gradient(90deg, #00e5ff, #00b8cc)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            5-Star Review
          </span>
          <br />
          — Automatically
        </h1>

        {/* Subheadline */}
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed" style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)' }}>
          ReviewAgent sends personalised review requests, responds to feedback in your brand voice,
          and gives you actionable insights — so you can focus on running your restaurant or salon,
          not chasing reviews.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <Button
            variant="primary"
            size="lg"
            onClick={() => handleOpenModal('free')}
          >
            Start Free — No Credit Card
          </Button>
          <Button
            variant="ghost"
            size="lg"
            onClick={() => {
              const el = document.getElementById('pricing');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            View Pricing
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-14">
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <Shield className="w-4 h-4" style={{ color: '#00e5ff' }} />
            GDPR Compliant
          </div>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <TrendingUp className="w-4 h-4" style={{ color: '#00e5ff' }} />
            Works with Google & TripAdvisor
          </div>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <Star className="w-4 h-4 fill-current" style={{ color: '#00e5ff' }} />
            Rated 4.9 / 5 by 200+ owners
          </div>
        </div>

        {/* Stats */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden mb-16"
          style={{ background: '#1a1a2e' }}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center py-8 px-4"
              style={{ background: '#111118' }}
            >
              <span
                className="text-3xl font-extrabold mb-1"
                style={{ color: '#00e5ff' }}
              >
                {stat.value}
              </span>
              <span className="text-gray-400 text-sm text-center">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Dashboard preview */}
        <div className="relative mx-auto max-w-4xl">
          <div
            className="rounded-2xl p-1"
            style={{
              background: 'linear-gradient(135deg, #00e5ff22, #00e5ff05, #00e5ff22)',
            }}
          >
            <div
              className="rounded-xl overflow-hidden"
              style={{ background: '#111118' }}
            >
              {/* Fake browser bar */}
              <div
                className="flex items-center gap-2 px-4 py-3 border-b"
                style={{ background: '#0d0d14', borderColor: '#1e1e2e' }}
              >
                <div className="w-3 h-3 rounded-full bg-red-500 opacity-70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500 opacity-70" />
                <div className="w-3 h-3 rounded-full bg-green-500 opacity-70" />
                <div
                  className="ml-4 flex-1 max-w-xs rounded px-3 py-1 text-xs text-gray-500"
                  style={{ background: '#1a1a2e' }}
                >
                  app.reviewagent.io/dashboard
                </div>
              </div>

              {/* Dashboard content */}
              <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Reviews sent */}
                <div
                  className="rounded-xl p-4"
                  style={{ background: '#0d0d14', border: '1px solid #1e1e2e' }}
                >
                  <div className="text-xs text-gray-500 mb-1 uppercase tracking-wider">Reviews Sent This Week</div>
                  <div className="text-3xl font-bold text-white mb-1">248</div>
                  <div className="text-xs flex items-center gap-1" style={{ color: '#00e5ff' }}>
                    <TrendingUp className="w-3 h-3" />
                    +18% vs last week
                  </div>
                </div>

                {/* Avg rating */}
                <div
                  className="rounded-xl p-4"
                  style={{ background: '#0d0d14', border: '1px solid #1e1e2e' }}
                >
                  <div className="text-xs text-gray-500 mb-1 uppercase tracking-wider">Average Rating</div>
                  <div className="flex items-end gap-2">
                    <div className="text-3xl font-bold text-white">4.8</div>
                    <div className="flex gap-0.5 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-current"
                          style={{ color: i < 5 ? '#fbbf24' : '#374151' }}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="text-xs text-gray-500">Google & TripAdvisor</div>
                </div>

                {/* Response rate */}
                <div
                  className="rounded-xl p-4"
                  style={{ background: '#0d0d14', border: '1px solid #1e1e2e' }}
                >
                  <div className="text-xs text-gray-500 mb-1 uppercase tracking-wider">Auto-Response Rate</div>
                  <div className="text-3xl font-bold text-white mb-1">94%</div>
                  <div className="w-full rounded-full h-1.5 mt-2" style={{ background: '#1e1e2e' }}>
                    <div
                      className="h-1.5 rounded-full"
                      style={{ width: '94%', background: 'linear-gradient(90deg, #00e5ff, #00b8cc)' }}
                    />
                  </div>
                </div>

                {/* Recent activity */}
                <div
                  className="md:col-span-3 rounded-xl p-4"
                  style={{ background: '#0d0d14', border: '1px solid #1e1e2e' }}
                >
                  <div className="text-xs text-gray-500 mb-3 uppercase tracking-wider">Recent AI Responses</div>
                  <div className="space-y-3">
                    {[
                      {
                        name: 'Maria S.',
                        platform: 'Google',
                        rating: 5,
                        review: 'Absolutely amazing experience! The food was perfect.',
                        response: 'Thank you so much, Maria! We\'re thrilled you enjoyed your visit. We look forward to welcoming you back soon! 🌟',
                        time: '2m ago',
                      },
                      {
                        name: 'Klaus B.',
                        platform: 'TripAdvisor',
                        rating: 4,
                        review: 'Great service, slightly long wait but worth it.',
                        response: 'Hi Klaus, thank you for your kind words! We\'re working on improving our wait times — see you again soon!',
                        time: '14m ago',
                      },
                    ].map((item) => (
                      <div key={item.name} className="flex gap-3 items-start">
                        <div
                          className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                          style={{ background: '#1a1a2e', color: '#00e5ff' }}
                        >
                          {item.name[0]}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-0.5">
                            <span className="text-xs font-semibold text-white">{item.name}</span>
                            <span
                              className="text-xs px-1.5 py-0.5 rounded"
                              style={{ background: '#1a1a2e', color: '#00e5ff' }}
                            >
                              {item.platform}
                            </span>
                            <div className="flex gap-0.5">
                              {[...Array(item.rating)].map((_, i) => (
                                <Star key={i} className="w-2.5 h-2.5 fill-current" style={{ color: '#fbbf24' }} />
                              ))}
                            </div>
                            <span className="text-xs text-gray-600 ml-auto">{item.time}</span>
                          </div>
                          <p className="text-xs text-gray-400 mb-1 truncate">{item.review}</p>
                          <p
                            className="text-xs px-2 py-1 rounded"
                            style={{ background: '#00e5ff0d', color: '#00e5ff', border: '1px solid #00e5ff22' }}
                          >
                            🤖 AI: {item.response}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Glow under dashboard */}
          <div
            className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-16 opacity-20 blur-2xl pointer-events-none"
            style={{ background: '#00e5ff' }}
            aria-hidden="true"
          />
        </div>

        {/* Social proof logos */}
        <div className="mt-16 text-center">
          <p className="text-xs text-gray-600 uppercase tracking-widest mb-6">Trusted by restaurants & salons across Europe</p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {trustLogos.map((logo) => (
              <div
                key={logo}
                className="text-sm font-semibold px-4 py-2 rounded-lg"
                style={{ color: '#4a4a6a', background: '#111118', border: '1px solid #1e1e2e' }}
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lead form modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Get Started for Free">
        <LeadForm
          defaultPlan={selectedPlan}
          onSuccess={() => setIsModalOpen(false)}
        />
      </Modal>
    </section>
  );
}