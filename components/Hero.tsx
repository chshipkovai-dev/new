'use client';

import { useState } from 'react';
import { Star, ArrowRight, Zap, Shield, TrendingUp } from 'lucide-react';

interface HeroProps {
  onOpenModal: (plan: string) => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 py-20"
      style={{ background: 'linear-gradient(135deg, #0a0a0f 0%, #0d0d1a 50%, #0a0a0f 100%)' }}>
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #00e5ff 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #00e5ff 0%, transparent 70%)' }} />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(#00e5ff 1px, transparent 1px), linear-gradient(90deg, #00e5ff 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />

      {/* Badge */}
      <div className="relative z-10 flex items-center gap-2 px-4 py-2 rounded-full border mb-8"
        style={{ borderColor: 'rgba(0,229,255,0.3)', background: 'rgba(0,229,255,0.05)' }}>
        <Zap size={14} style={{ color: '#00e5ff' }} />
        <span className="text-sm font-medium" style={{ color: '#00e5ff' }}>AI-Powered Review Management</span>
        <span className="text-xs px-2 py-0.5 rounded-full font-semibold" style={{ background: 'rgba(0,229,255,0.15)', color: '#00e5ff' }}>NEW</span>
      </div>

      {/* Main heading */}
      <div className="relative z-10 text-center max-w-4xl mx-auto mb-6">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
          <span className="text-white">Turn Every Review Into</span>
          <br />
          <span style={{ color: '#00e5ff' }}>More Customers</span>
        </h1>
      </div>

      {/* Subheading */}
      <p className="relative z-10 text-lg md:text-xl text-center max-w-2xl mx-auto mb-10 leading-relaxed"
        style={{ color: 'rgba(255,255,255,0.6)' }}>
        ReviewAgent automatically responds to Google, Tripadvisor and Yelp reviews for your restaurant or salon — 24/7, in any language, with a personal touch that builds real trust.
      </p>

      {/* CTA Buttons */}
      <div className="relative z-10 flex flex-col sm:flex-row gap-4 mb-16">
        <button
          onClick={() => onOpenModal('free')}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base transition-all duration-200"
          style={{
            background: isHovered
              ? 'linear-gradient(135deg, #00e5ff, #00b8cc)'
              : 'linear-gradient(135deg, #00e5ff, #0099aa)',
            color: '#0a0a0f',
            boxShadow: isHovered ? '0 0 32px rgba(0,229,255,0.5)' : '0 0 16px rgba(0,229,255,0.25)',
            transform: isHovered ? 'translateY(-2px)' : 'translateY(0)'
          }}
        >
          Start Free — No Credit Card
          <ArrowRight size={18} />
        </button>
        <button
          onClick={() => onOpenModal('pro')}
          className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-base border transition-all duration-200"
          style={{
            borderColor: 'rgba(255,255,255,0.15)',
            color: 'rgba(255,255,255,0.85)',
            background: 'rgba(255,255,255,0.04)'
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(0,229,255,0.4)';
            (e.currentTarget as HTMLButtonElement).style.background = 'rgba(0,229,255,0.06)';
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.15)';
            (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.04)';
          }}
        >
          Book a Demo Call
        </button>
      </div>

      {/* Social proof row */}
      <div className="relative z-10 flex flex-col sm:flex-row items-center gap-6 mb-16">
        <div className="flex items-center gap-1">
          {[1,2,3,4,5].map(i => (
            <Star key={i} size={16} fill="#fbbf24" stroke="none" />
          ))}
          <span className="ml-2 text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>4.9 / 5 from 280+ businesses</span>
        </div>
        <div className="hidden sm:block w-px h-5" style={{ background: 'rgba(255,255,255,0.15)' }} />
        <div className="flex -space-x-3">
          {['🧑‍🍳','👩‍💼','👨‍💼','💇‍♀️','🍽️'].map((emoji, i) => (
            <div key={i}
              className="w-9 h-9 rounded-full flex items-center justify-center text-base border-2"
              style={{ background: '#111118', borderColor: '#0a0a0f' }}>
              {emoji}
            </div>
          ))}
        </div>
        <span className="text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>Trusted by restaurants & salons across Europe</span>
      </div>

      {/* Dashboard preview card */}
      <div className="relative z-10 w-full max-w-3xl mx-auto rounded-2xl border overflow-hidden"
        style={{
          borderColor: 'rgba(0,229,255,0.15)',
          background: '#111118',
          boxShadow: '0 32px 80px rgba(0,0,0,0.6), 0 0 60px rgba(0,229,255,0.06)'
        }}>
        {/* Window bar */}
        <div className="flex items-center gap-2 px-5 py-3 border-b" style={{ borderColor: 'rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.02)' }}>
          <div className="w-3 h-3 rounded-full" style={{ background: '#ff5f57' }} />
          <div className="w-3 h-3 rounded-full" style={{ background: '#ffbd2e' }} />
          <div className="w-3 h-3 rounded-full" style={{ background: '#28ca41' }} />
          <div className="ml-4 flex-1 rounded px-3 py-1 text-xs text-center" style={{ background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.3)' }}>app.reviewagent.ai/dashboard</div>
        </div>

        {/* Dashboard content */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {[
            { icon: <TrendingUp size={18} style={{ color: '#00e5ff' }} />, label: 'Rating Improvement', value: '+0.8★', sub: 'Last 30 days' },
            { icon: <Zap size={18} style={{ color: '#a78bfa' }} />, label: 'Auto-Responses Sent', value: '1,240', sub: 'This month' },
            { icon: <Shield size={18} style={{ color: '#34d399' }} />, label: 'Response Rate', value: '98.4%', sub: 'Avg reply time 4 min' }
          ].map((stat, i) => (
            <div key={i} className="rounded-xl p-4" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
              <div className="flex items-center gap-2 mb-2">
                {stat.icon}
                <span className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>{stat.label}</span>
              </div>
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>{stat.sub}</div>
            </div>
          ))}
        </div>

        {/* Review item mockup */}
        <div className="px-6 pb-6 space-y-3">
          {[
            {
              platform: '🇩🇪 Google',
              reviewer: 'Markus H.',
              stars: 5,
              review: 'Fantastic food and amazing atmosphere. Will definitely come back!',
              reply: 'Thank you so much, Markus! We are thrilled you enjoyed your evening with us. We look forward to welcoming you back soon! 🍽️',
              time: '2 min ago',
              auto: true
            },
            {
              platform: '🇵🇱 Tripadvisor',
              reviewer: 'Zofia K.',
              stars: 4,
              review: 'Great haircut, very professional staff. Highly recommend.',
              reply: 'Thank you, Zofia! We are so glad you had a wonderful experience. Our team works hard to make every visit special. See you next time! ✂️',
              time: '18 min ago',
              auto: true
            }
          ].map((item, i) => (
            <div key={i} className="rounded-xl p-4" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-white">{item.reviewer}</span>
                  <span className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>{item.platform}</span>
                  <div className="flex">
                    {[1,2,3,4,5].map(s => <Star key={s} size={11} fill={s <= item.stars ? '#fbbf24' : 'rgba(255,255,255,0.1)'} stroke="none" />)}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {item.auto && (
                    <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ background: 'rgba(0,229,255,0.1)', color: '#00e5ff' }}>AI Reply</span>
                  )}
                  <span className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>{item.time}</span>
                </div>
              </div>
              <p className="text-sm mb-2" style={{ color: 'rgba(255,255,255,0.6)' }}>"{item.review}"</p>
              <div className="rounded-lg p-3" style={{ background: 'rgba(0,229,255,0.04)', borderLeft: '2px solid rgba(0,229,255,0.3)' }}>
                <p className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>{item.reply}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="relative z-10 mt-12 flex flex-col items-center gap-2" style={{ color: 'rgba(255,255,255,0.3)' }}>
        <span className="text-xs tracking-widest uppercase">Scroll to explore</span>
        <div className="w-px h-12 animate-bounce" style={{ background: 'linear-gradient(to bottom, rgba(0,229,255,0.5), transparent)' }} />
      </div>
    </section>
  );
}