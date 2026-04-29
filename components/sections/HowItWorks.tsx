import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Connect Your Locations',
    description:
      'Link your Google Business Profile in minutes. No technical setup required — just authenticate and ReviewAgent instantly syncs all your reviews across every location.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'AI Reads Every Review',
    description:
      'Our AI engine analyses tone, sentiment, and context of each incoming review — whether it is a glowing 5-star compliment or a frustrated 1-star complaint — in real time, 24 / 7.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15m-6.75-12.896c.251.023.501.05.75.082M19.8 15l-1.572 1.572A4.5 4.5 0 0116.5 18H7.5a4.5 4.5 0 01-1.728-.428L4.2 16.2m15.6-1.2l1.5 1.5M4.2 16.2l-1.5 1.5m0 0A2.25 2.25 0 004.5 21h15a2.25 2.25 0 001.8-3.6" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Get a Personalised Draft',
    description:
      'ReviewAgent generates a brand-aligned, human-sounding reply tailored to the specific review. Each response matches your business tone — warm and professional for a salon, or casual and friendly for a café.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Approve or Auto-Publish',
    description:
      'On the Pro and Business plans, responses are published automatically the moment a review comes in. On Free, review every draft in your dashboard before it goes live — full control, zero stress.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    number: '05',
    title: 'Track Your Reputation Growth',
    description:
      'Monitor your average rating, response rate, and sentiment trends from a single dashboard. Export reports, spot problem areas early, and watch your star rating climb month after month.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 overflow-hidden" style={{ background: '#0a0a0f' }}>
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-5"
          style={{ background: 'radial-gradient(circle, #00e5ff 0%, transparent 70%)' }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4 border"
            style={{ color: '#00e5ff', borderColor: 'rgba(0,229,255,0.25)', background: 'rgba(0,229,255,0.06)' }}
          >
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            From first review to published reply{' '}
            <span style={{ color: '#00e5ff' }}>in seconds</span>
          </h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto" style={{ color: '#8b8b9a' }}>
            ReviewAgent handles the full cycle automatically. Set it up once and let the AI do the work — while you focus on running your business.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical connector line (desktop) */}
          <div
            className="hidden lg:block absolute left-[3.25rem] top-8 bottom-8 w-px"
            style={{ background: 'linear-gradient(to bottom, transparent, rgba(0,229,255,0.2) 15%, rgba(0,229,255,0.2) 85%, transparent)' }}
            aria-hidden="true"
          />

          <div className="flex flex-col gap-8">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative flex flex-col lg:flex-row gap-6 lg:gap-8 group"
              >
                {/* Step indicator */}
                <div className="flex-shrink-0 flex items-start">
                  <div
                    className="relative z-10 w-[3.25rem] h-[3.25rem] rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: 'rgba(0,229,255,0.1)',
                      border: '1px solid rgba(0,229,255,0.25)',
                      color: '#00e5ff',
                    }}
                  >
                    {step.icon}
                  </div>
                </div>

                {/* Content card */}
                <div
                  className="flex-1 rounded-2xl p-6 transition-all duration-300 group-hover:border-opacity-60"
                  style={{
                    background: '#111118',
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className="text-xs font-bold tracking-widest"
                      style={{ color: 'rgba(0,229,255,0.5)' }}
                    >
                      STEP {step.number}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#8b8b9a' }}>
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA strip */}
        <div
          className="mt-16 rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
          style={{
            background: 'linear-gradient(135deg, rgba(0,229,255,0.07) 0%, rgba(0,229,255,0.02) 100%)',
            border: '1px solid rgba(0,229,255,0.15)',
          }}
        >
          <div>
            <p className="text-white font-semibold text-lg">Ready to automate your reputation?</p>
            <p className="text-sm mt-1" style={{ color: '#8b8b9a' }}>
              Join 500+ European businesses already using ReviewAgent.
            </p>
          </div>
          <a
            href="#pricing"
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:brightness-110 hover:scale-105 active:scale-95"
            style={{ background: '#00e5ff', color: '#0a0a0f' }}
          >
            See Pricing Plans
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
