import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Connect Your Platforms',
    description:
      'Link your Google Business Profile, TripAdvisor, Yelp, or Booking.com account in under 2 minutes. No technical knowledge required — just authorize and ReviewAgent starts monitoring immediately.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 3C8.477 3 4 7.477 4 13s4.477 10 10 10 10-4.477 10-10S19.523 3 14 3z" stroke="#00e5ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 8v5l3 3" stroke="#00e5ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4 13h2M22 13h2M14 3v2M14 23v2" stroke="#00e5ff" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    number: '02',
    title: 'AI Reads Every Review',
    description:
      'Our AI engine analyzes each incoming review in real time — detecting sentiment, key topics, service mentions, and urgency. It understands context in 12 languages including German, Spanish, French, and Italian.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="5" width="22" height="16" rx="3" stroke="#00e5ff" strokeWidth="1.5"/>
        <path d="M8 10h12M8 14h8" stroke="#00e5ff" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M14 21v3M10 24h8" stroke="#00e5ff" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Smart Reply is Generated',
    description:
      'ReviewAgent crafts a personalized, on-brand reply tailored to the review content — acknowledging specific feedback, addressing complaints professionally, and thanking loyal guests. Every reply sounds human, not robotic.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 6h20v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6z" stroke="#00e5ff" strokeWidth="1.5"/>
        <path d="M4 6l10 9 10-9" stroke="#00e5ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M19 16l3 3-3 3" stroke="#00e5ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    number: '04',
    title: 'You Approve or Auto-Publish',
    description:
      'On Free and Pro plans you review replies before publishing. On Business plan, enable fully automatic mode — replies go live within minutes of receiving a review. Either way, your reputation stays protected 24/7.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 14l6 6L23 8" stroke="#00e5ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 overflow-hidden" style={{ background: '#0a0a0f' }}>
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(#00e5ff 1px, transparent 1px), linear-gradient(90deg, #00e5ff 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glow blob */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full opacity-[0.06] blur-[120px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #00e5ff 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6 border"
            style={{
              background: 'rgba(0,229,255,0.06)',
              borderColor: 'rgba(0,229,255,0.2)',
              color: '#00e5ff',
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ background: '#00e5ff' }}
            />
            Simple Process
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
            From Review to Reply{' '}
            <span style={{ color: '#00e5ff' }}>in Minutes</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#8b8b9a' }}>
            ReviewAgent works quietly in the background so you can focus on running your business.
            Set it up once and let the AI handle your reputation around the clock.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line — desktop */}
          <div
            className="hidden lg:block absolute top-[52px] left-[calc(12.5%+28px)] right-[calc(12.5%+28px)] h-px"
            style={{
              background:
                'linear-gradient(90deg, transparent, rgba(0,229,255,0.3) 20%, rgba(0,229,255,0.3) 80%, transparent)',
            }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative flex flex-col items-center text-center group">
                {/* Step circle */}
                <div
                  className="relative flex items-center justify-center w-[72px] h-[72px] rounded-2xl mb-6 transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: 'rgba(0,229,255,0.08)',
                    border: '1px solid rgba(0,229,255,0.25)',
                    boxShadow: '0 0 24px rgba(0,229,255,0.08)',
                  }}
                >
                  {step.icon}
                  {/* Step number badge */}
                  <div
                    className="absolute -top-2.5 -right-2.5 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold"
                    style={{
                      background: '#00e5ff',
                      color: '#0a0a0f',
                    }}
                  >
                    {index + 1}
                  </div>
                </div>

                {/* Content */}
                <div
                  className="flex-1 p-6 rounded-2xl w-full transition-all duration-300 group-hover:border-opacity-40"
                  style={{
                    background: '#111118',
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}
                >
                  <div
                    className="text-xs font-bold tracking-widest mb-3"
                    style={{ color: 'rgba(0,229,255,0.5)' }}
                  >
                    STEP {step.number}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#8b8b9a' }}>
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom demo block */}
        <div
          className="mt-16 rounded-2xl p-8 sm:p-10"
          style={{
            background: '#111118',
            border: '1px solid rgba(0,229,255,0.12)',
          }}
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
            {/* Review example */}
            <div className="flex-1">
              <div className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: 'rgba(0,229,255,0.6)' }}>
                Incoming Review — Google Maps
              </div>
              <div
                className="rounded-xl p-5"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold"
                    style={{ background: 'rgba(0,229,255,0.15)', color: '#00e5ff' }}
                  >
                    M
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">Maria S.</div>
                    <div className="flex gap-0.5 mt-0.5">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} width="12" height="12" viewBox="0 0 12 12" fill="#f59e0b">
                          <path d="M6 1l1.39 2.82L10.5 4.27l-2.25 2.19.53 3.09L6 8.1 3.22 9.55l.53-3.09L1.5 4.27l3.11-.45L6 1z"/>
                        </svg>
                      ))}
                    </div>
                  </div>
                  <span className="ml-auto text-xs" style={{ color: '#8b8b9a' }}>2 min ago</span>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: '#c8c8d4' }}>
                  "Amazing pasta and great atmosphere! The waiter was very attentive. Only downside was a
                  longer wait time on a Friday evening, but totally worth it."
                </p>
              </div>
            </div>

            {/* Arrow */}
            <div className="flex lg:flex-col items-center gap-2 self-center">
              <div
                className="hidden lg:flex w-10 h-10 rounded-full items-center justify-center"
                style={{ background: 'rgba(0,229,255,0.1)', border: '1px solid rgba(0,229,255,0.25)' }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 3v10M8 13l-4-4M8 13l4-4" stroke="#00e5ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div
                className="flex lg:hidden w-10 h-10 rounded-full items-center justify-center"
                style={{ background: 'rgba(0,229,255,0.1)', border: '1px solid rgba(0,229,255,0.25)' }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M13 8l-4-4M13 8l-4 4" stroke="#00e5ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-xs font-medium" style={{ color: 'rgba(0,229,255,0.5)' }}>AI Reply</span>
            </div>

            {/* Reply example */}
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'rgba(0,229,255,0.6)' }}>
                  AI-Generated Reply
                </div>
                <div
                  className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                  style={{ background: 'rgba(0,229,255,0.15)', color: '#00e5ff' }}
                >
                  Auto-sent in 4 min
                </div>
              </div>
              <div
                className="rounded-xl p-5"
                style={{ background: 'rgba(0,229,255,0.04)', border: '1px solid rgba(0,229,255,0.15)' }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold"
                    style={{ background: 'rgba(0,229,255,0.2)', color: '#00e5ff' }}
                  >
                    R
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">Ristorante Bella Roma</div>
                    <div className="text-xs" style={{ color: '#8b8b9a' }}>Owner response</div>
                  </div>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: '#c8c8d4' }}>
                  "Thank you so much, Maria! We're thrilled you enjoyed the pasta and our team's
                  attentiveness. Friday evenings do get busy — we're actively working to improve wait times.
                  Hope to welcome you back soon! 🍝"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
