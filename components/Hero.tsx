'use client';

import { ArrowRight, Star, Zap, Shield } from 'lucide-react';

export interface HeroProps {
  onOpenModal: (plan: string) => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ background: '#0a0a0f' }}>
      {/* Background glow effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full opacity-20 blur-3xl"
          style={{ background: 'radial-gradient(ellipse, #00e5ff 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] rounded-full opacity-10 blur-3xl"
          style={{ background: 'radial-gradient(ellipse, #00e5ff 0%, transparent 70%)' }}
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'linear-gradient(#00e5ff 1px, transparent 1px), linear-gradient(90deg, #00e5ff 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 flex flex-col lg:flex-row items-center gap-16">
        {/* Left column — text */}
        <div className="flex-1 text-center lg:text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-8 text-sm font-medium" style={{ borderColor: '#00e5ff33', background: '#00e5ff11', color: '#00e5ff' }}>
            <Zap size={14} />
            <span>AI-Powered Review Management</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white leading-tight mb-6">
            Turn Every Review
            <br />
            <span style={{ color: '#00e5ff' }}>Into Revenue</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-gray-400 leading-relaxed mb-10 max-w-2xl">
            ReviewAgent automatically responds to Google, Tripadvisor and Yelp reviews 24/7 — in the customer's language. Boost your rating, save hours every week, and never miss a feedback signal again.
          </p>

          {/* Social proof strip */}
          <div className="flex flex-wrap items-center gap-6 mb-10 justify-center lg:justify-start">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={16} fill="#f59e0b" className="text-amber-400" />
              ))}
              <span className="text-gray-400 text-sm ml-2">4.9 / 5 from 800+ businesses</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Shield size={14} style={{ color: '#00e5ff' }} />
              <span>GDPR Compliant</span>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button
              onClick={() => onOpenModal('pro')}
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-black transition-all duration-200 hover:scale-105 hover:shadow-2xl"
              style={{ background: '#00e5ff', boxShadow: '0 0 30px #00e5ff44' }}
            >
              Start Free Today
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            <button
              onClick={() => onOpenModal('free')}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white border transition-all duration-200 hover:border-cyan-400 hover:text-cyan-400"
              style={{ borderColor: '#333344', background: 'transparent' }}
            >
              See Live Demo
            </button>
          </div>

          {/* Trust note */}
          <p className="mt-6 text-sm text-gray-500">
            No credit card required · Free plan forever · Setup in 5 minutes
          </p>
        </div>

        {/* Right column — visual card */}
        <div className="flex-1 w-full max-w-lg lg:max-w-none">
          <div
            className="relative rounded-2xl border p-6 shadow-2xl"
            style={{ background: '#111118', borderColor: '#00e5ff22' }}
          >
            {/* Mock header */}
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg" style={{ background: '#00e5ff22' }}>🍽️</div>
                <div>
                  <p className="text-white font-semibold text-sm">Bella Roma Ristorante</p>
                  <p className="text-gray-500 text-xs">Berlin, Germany · Google Reviews</p>
                </div>
              </div>
              <span className="text-xs px-3 py-1 rounded-full font-medium" style={{ background: '#00e5ff22', color: '#00e5ff' }}>AI Active</span>
            </div>

            {/* Review card 1 */}
            <div className="rounded-xl p-4 mb-3" style={{ background: '#0a0a0f', border: '1px solid #1a1a2e' }}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-purple-600 flex items-center justify-center text-xs text-white font-bold">M</div>
                  <span className="text-white text-sm font-medium">Maria S.</span>
                </div>
                <div className="flex">
                  {[1,2,3,4,5].map(i => <Star key={i} size={11} fill="#f59e0b" className="text-amber-400" />)}
                </div>
              </div>
              <p className="text-gray-400 text-xs mb-3 leading-relaxed">"Fantastisches Essen und toller Service! Die Pasta war wirklich authentisch italienisch."</p>
              <div className="rounded-lg p-3" style={{ background: '#00e5ff0d', border: '1px solid #00e5ff22' }}>
                <div className="flex items-center gap-2 mb-1">
                  <Zap size={11} style={{ color: '#00e5ff' }} />
                  <span className="text-xs font-medium" style={{ color: '#00e5ff' }}>AI Response · just now</span>
                </div>
                <p className="text-gray-300 text-xs leading-relaxed">Vielen Dank, Maria! Wir freuen uns sehr über Ihr Feedback und hoffen, Sie bald wiederzusehen! 🙏</p>
              </div>
            </div>

            {/* Review card 2 */}
            <div className="rounded-xl p-4 mb-4" style={{ background: '#0a0a0f', border: '1px solid #1a1a2e' }}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center text-xs text-white font-bold">J</div>
                  <span className="text-white text-sm font-medium">Jan K.</span>
                </div>
                <div className="flex">
                  {[1,2,3,4].map(i => <Star key={i} size={11} fill="#f59e0b" className="text-amber-400" />)}
                  <Star size={11} className="text-gray-600" />
                </div>
              </div>
              <p className="text-gray-400 text-xs mb-3 leading-relaxed">"Good food, but waiting time was a bit long on Friday evening."</p>
              <div className="rounded-lg p-3" style={{ background: '#00e5ff0d', border: '1px solid #00e5ff22' }}>
                <div className="flex items-center gap-2 mb-1">
                  <Zap size={11} style={{ color: '#00e5ff' }} />
                  <span className="text-xs font-medium" style={{ color: '#00e5ff' }}>AI Response · 2 min ago</span>
                </div>
                <p className="text-gray-300 text-xs leading-relaxed">Thank you, Jan! We appreciate your honest feedback. Friday evenings are our busiest — we're working on improving wait times. Hope to see you again soon!</p>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { value: '4.9★', label: 'Avg. Rating' },
                { value: '98%', label: 'Reply Rate' },
                { value: '2 min', label: 'Avg. Response' },
              ].map((stat) => (
                <div key={stat.label} className="text-center rounded-xl py-3" style={{ background: '#0a0a0f', border: '1px solid #1a1a2e' }}>
                  <p className="text-lg font-bold" style={{ color: '#00e5ff' }}>{stat.value}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Glow border effect */}
            <div
              className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{ boxShadow: '0 0 60px #00e5ff0f inset' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
