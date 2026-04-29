import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Connect Your Platforms',
    description:
      'Link your Google Business Profile, TripAdvisor, Yelp, or any other review platform in under 2 minutes. No technical skills required — just authorize access and you are live.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 3C8.477 3 4 7.477 4 13s4.477 10 10 10 10-4.477 10-10S19.523 3 14 3z" stroke="#00e5ff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 13h10M14 8v10" stroke="#00e5ff" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    number: '02',
    title: 'AI Reads Every Review',
    description:
      'ReviewAgent scans all incoming reviews in real time, detects sentiment, identifies recurring issues, and categorises feedback by topic — food quality, service, cleanliness, and more.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="4" width="20" height="20" rx="4" stroke="#00e5ff" strokeWidth="1.8"/>
        <path d="M9 10h10M9 14h7M9 18h5" stroke="#00e5ff" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Smart Replies Are Generated',
    description:
      'For each review, the AI crafts a personalised, on-brand response in the customer\'s language. Positive reviews get warm thank-you messages; negative ones receive empathetic, solution-oriented replies.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 7h18v12a2 2 0 01-2 2H7a2 2 0 01-2-2V7z" stroke="#00e5ff" strokeWidth="1.8"/>
        <path d="M5 7l9 8 9-8" stroke="#00e5ff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    number: '04',
    title: 'You Approve or Auto-Publish',
    description:
      'Choose full autopilot — replies post instantly without your input — or switch to approval mode where you review AI drafts before publishing. Full control, zero stress.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 14l5 5 11-11" stroke="#00e5ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    number: '05',
    title: 'Track Insights & Growth',
    description:
      'Your dashboard shows reply rate, average rating trends, sentiment shifts, and competitor benchmarks. Get weekly digests delivered to your inbox so you always know where you stand.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 22l6-7 5 4 5-6 4 3" stroke="#00e5ff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="4" y="4" width="20" height="18" rx="2" stroke="#00e5ff" strokeWidth="1.8"/>
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 px-4 overflow-hidden" style={{ background: '#0a0a0f' }}>
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(0,229,255,0.05) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full border mb-5"
            style={{
              color: '#00e5ff',
              borderColor: 'rgba(0,229,255,0.3)',
              background: 'rgba(0,229,255,0.07)',
            }}
          >
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
            From First Review to{' '}
            <span style={{ color: '#00e5ff' }}>Loyal Customer</span>
            {' '}in 5 Steps
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            ReviewAgent handles the entire review lifecycle automatically — so you can focus on running your business, not replying to comments.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical connector line (desktop) */}
          <div
            className="hidden lg:block absolute left-[39px] top-10 bottom-10 w-px"
            style={{
              background: 'linear-gradient(to bottom, transparent, rgba(0,229,255,0.25) 10%, rgba(0,229,255,0.25) 90%, transparent)',
            }}
          />

          <div className="flex flex-col gap-8">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative flex flex-col lg:flex-row gap-6 group"
              >
                {/* Step indicator */}
                <div className="flex-shrink-0 flex lg:flex-col items-center lg:items-start gap-4 lg:gap-0">
                  <div
                    className="relative z-10 flex items-center justify-center w-20 h-20 rounded-2xl border transition-all duration-300 group-hover:scale-105"
                    style={{
                      background: 'rgba(0,229,255,0.07)',
                      borderColor: 'rgba(0,229,255,0.2)',
                    }}
                  >
                    <div className="flex flex-col items-center gap-1">
                      {step.icon}
                      <span
                        className="text-xs font-bold tabular-nums"
                        style={{ color: 'rgba(0,229,255,0.6)' }}
                      >
                        {step.number}
                      </span>
                    </div>
                    {/* Glow on hover */}
                    <div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        boxShadow: '0 0 24px rgba(0,229,255,0.15)',
                      }}
                    />
                  </div>
                </div>

                {/* Content */}
                <div
                  className="flex-1 rounded-2xl p-6 border transition-all duration-300 group-hover:border-cyan-500/30"
                  style={{
                    background: '#111118',
                    borderColor: 'rgba(255,255,255,0.06)',
                  }}
                >
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    {step.description}
                  </p>

                  {/* Progress bar accent */}
                  <div className="mt-4 h-0.5 w-12 rounded-full transition-all duration-300 group-hover:w-24" style={{ background: '#00e5ff' }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div
            className="inline-flex flex-col sm:flex-row items-center gap-4 px-8 py-6 rounded-2xl border"
            style={{
              background: 'rgba(0,229,255,0.05)',
              borderColor: 'rgba(0,229,255,0.2)',
            }}
          >
            <div className="text-left">
              <p className="text-white font-semibold text-lg">Ready to automate your reputation?</p>
              <p className="text-gray-400 text-sm mt-0.5">Set up takes less than 5 minutes. No credit card required.</p>
            </div>
            <a
              href="#pricing"
              className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:opacity-90 hover:scale-105 active:scale-95"
              style={{
                background: '#00e5ff',
                color: '#0a0a0f',
              }}
            >
              Get Started Free
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="#0a0a0f" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
