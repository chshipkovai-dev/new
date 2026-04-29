'use client';

import { useState } from 'react';
import { Star, ArrowRight, CheckCircle, TrendingUp, MessageSquare } from 'lucide-react';
import LeadModal from '@/components/ui/LeadModal';

const stats = [
  { value: '4.8★', label: 'Average rating boost', icon: Star },
  { value: '3x', label: 'Faster reply time', icon: MessageSquare },
  { value: '+38%', label: 'More positive reviews', icon: TrendingUp },
];

const trustBadges = [
  'No credit card required',
  'Setup in 2 minutes',
  'Cancel anytime',
];

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<'free' | 'pro' | 'business'>('free');

  const handleCTAClick = (plan: 'free' | 'pro' | 'business') => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 pt-24 pb-16"
      style={{ background: '#0a0a0f' }}
    >
      {/* Ambient glow background */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full opacity-10 blur-[120px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #00e5ff 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full opacity-5 blur-[100px] pointer-events-none"
        style={{ background: '#00e5ff' }}
      />

      {/* Announcement badge */}
      <div className="relative z-10 mb-6 flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-sm text-cyan-400 backdrop-blur-sm">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
        </span>
        Now live across Europe — 500+ restaurants & salons trust ReviewAgent
      </div>

      {/* Headline */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-6">
          Stop Losing Customers
          <br />
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: 'linear-gradient(90deg, #00e5ff, #0090ff)' }}
          >
            to Unanswered Reviews
          </span>
        </h1>

        <p className="mx-auto max-w-2xl text-lg sm:text-xl text-gray-400 leading-relaxed mb-10">
          ReviewAgent uses AI to automatically respond to your Google reviews in seconds — in any language, 24/7. Protect your reputation and win more local customers without lifting a finger.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <button
            onClick={() => handleCTAClick('free')}
            className="group inline-flex items-center gap-2 rounded-xl px-8 py-4 text-base font-semibold text-black transition-all duration-200 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-cyan-500/25"
            style={{ background: 'linear-gradient(135deg, #00e5ff, #0090ff)' }}
          >
            Start Free — No Card Needed
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
          <button
            onClick={() => handleCTAClick('pro')}
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:border-cyan-500/40 hover:bg-white/10"
          >
            See Pro Plan
            <ArrowRight className="w-5 h-5 text-cyan-400" />
          </button>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          {trustBadges.map((badge) => (
            <div key={badge} className="flex items-center gap-1.5 text-sm text-gray-400">
              <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
              <span>{badge}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative z-10 w-full max-w-3xl mx-auto">
        <div
          className="grid grid-cols-1 sm:grid-cols-3 gap-px rounded-2xl overflow-hidden border border-white/8"
          style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))' }}
        >
          {stats.map(({ value, label, icon: Icon }, index) => (
            <div
              key={label}
              className={`flex flex-col items-center justify-center gap-1 py-6 px-4 backdrop-blur-sm ${
                index < stats.length - 1 ? 'sm:border-r border-b sm:border-b-0 border-white/8' : ''
              }`}
              style={{ background: '#111118' }}
            >
              <Icon className="w-5 h-5 mb-1" style={{ color: '#00e5ff' }} />
              <span className="text-2xl sm:text-3xl font-extrabold text-white">{value}</span>
              <span className="text-xs sm:text-sm text-gray-400 text-center">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Mock review card — visual proof */}
      <div className="relative z-10 mt-16 w-full max-w-lg mx-auto">
        <div
          className="rounded-2xl border border-white/8 p-5 backdrop-blur-sm"
          style={{ background: '#111118' }}
        >
          <div className="flex items-start gap-3 mb-3">
            <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0" style={{ background: 'linear-gradient(135deg, #00e5ff, #0090ff)' }}>M</div>
            <div>
              <p className="text-white font-semibold text-sm">Maria García</p>
              <div className="flex gap-0.5 mt-0.5">
                {[1,2,3,4,5].map((s) => (
                  <Star key={s} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
            <span className="ml-auto text-xs text-gray-500">2 min ago</span>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed mb-4">"Amazing food and great service! Came here for my birthday dinner and it was absolutely perfect. Will definitely come back!"</p>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#00e5ff' }} />
            <p className="text-sm" style={{ color: '#00e5ff' }}>AI is generating a reply…</p>
          </div>
          <div
            className="mt-3 rounded-xl p-3 text-sm text-gray-300 border border-cyan-500/20"
            style={{ background: 'rgba(0, 229, 255, 0.05)' }}
          >
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#00e5ff' }}>ReviewAgent reply</span>
            <p className="mt-1 leading-relaxed">"Thank you so much, Maria! 🎉 We're thrilled your birthday dinner was special. Our team works hard to create memorable moments. We can't wait to welcome you back — next celebration is on us! 🥂"</p>
          </div>
        </div>
      </div>

      {/* Lead Modal */}
      <LeadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultPlan={selectedPlan}
      />
    </section>
  );
}