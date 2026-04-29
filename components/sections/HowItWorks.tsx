import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Connect Your Business Profiles',
    description:
      'Link your Google Business Profile, Yelp, TripAdvisor, or any other review platform in under 2 minutes. No technical skills required — just authenticate and ReviewAgent handles the rest.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 2C7.373 2 2 7.373 2 14s5.373 12 12 12 12-5.373 12-12S20.627 2 14 2zm0 2c5.523 0 10 4.477 10 10S19.523 24 14 24 4 19.523 4 14 8.477 4 14 4zm-1 5v4H9l5 5 5-5h-4V9h-2z" fill="#00e5ff"/>
      </svg>
    ),
    highlight: 'Supports 10+ platforms',
  },
  {
    number: '02',
    title: 'AI Reads Every New Review',
    description:
      'Our AI engine monitors your connected profiles 24/7. The moment a new review appears — positive, neutral, or negative — ReviewAgent analyses the sentiment, tone, and key topics mentioned by the customer.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 3a11 11 0 100 22A11 11 0 0014 3zm0 2a9 9 0 110 18A9 9 0 0114 5zm-1 4v5.586l-3.707 3.707 1.414 1.414L15 16.414V9h-2z" fill="#00e5ff"/>
      </svg>
    ),
    highlight: 'Real-time monitoring',
  },
  {
    number: '03',
    title: 'Personalised Reply Is Generated',
    description:
      'ReviewAgent crafts a unique, human-sounding response tailored to each review. It matches your brand voice, addresses the specific feedback, and — for negative reviews — includes a professional de-escalation strategy to protect your reputation.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 4a2 2 0 00-2 2v12a2 2 0 002 2h2v3l4-3h12a2 2 0 002-2V6a2 2 0 00-2-2H5zm0 2h18v12H12.5L9 20.5V18H5V6zm3 3v2h12V9H8zm0 4v2h8v-2H8z" fill="#00e5ff"/>
      </svg>
    ),
    highlight: 'Matches your brand voice',
  },
  {
    number: '04',
    title: 'You Approve or Auto-Publish',
    description:
      'On the Free and Pro plans you review each AI-generated reply before it goes live. On the Business plan, enable full autopilot mode — responses are published automatically within minutes, so your customers always feel heard even while you sleep.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 3C7.925 3 3 7.925 3 14s4.925 11 11 11 11-4.925 11-11S20.075 3 14 3zm0 2c4.971 0 9 4.029 9 9s-4.029 9-9 9-9-4.029-9-9 4.029-9 9-9zm4.293 5.293l-5.543 5.543-2.543-2.543-1.414 1.414 3.957 3.957 6.957-6.957-1.414-1.414z" fill="#00e5ff"/>
      </svg>
    ),
    highlight: 'Full autopilot on Business',
  },
  {
    number: '05',
    title: 'Track Results & Improve Over Time',
    description:
      'Your dashboard shows response rates, average reply time, sentiment trends, and star-rating evolution across all locations. Use these insights to spot recurring issues, reward your best-performing venues, and prove ROI to stakeholders.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 22v-2h2v-6h4v6h2v-10h4v10h2v-14h4v14h2v2H4zm4-2h2v-4H8v4zm6 0h2v-8h-2v8zm6 0h2v-12h-2v12z" fill="#00e5ff"/>
      </svg>
    ),
    highlight: 'Analytics across all locations',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 overflow-hidden" style={{ background: '#0a0a0f' }}>
      {/* Background accent */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(0,229,255,0.04) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-5"
            style={{
              background: 'rgba(0,229,255,0.08)',
              border: '1px solid rgba(0,229,255,0.2)',
              color: '#00e5ff',
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: '#00e5ff' }}
            />
            How It Works
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
            From New Review to Perfect Reply
            <br />
            <span style={{ color: '#00e5ff' }}>in Under 5 Minutes</span>
          </h2>
          <p className="text-base sm:text-lg max-w-2xl mx-auto" style={{ color: '#8b8ba7' }}>
            ReviewAgent removes the manual work of reputation management. Here is exactly how it works
            — from the moment a customer posts a review to your polished, on-brand response going live.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical connector line (desktop) */}
          <div
            className="hidden lg:block absolute left-[calc(50%-1px)] top-0 bottom-0 w-px"
            style={{
              background:
                'linear-gradient(to bottom, transparent, rgba(0,229,255,0.3) 15%, rgba(0,229,255,0.3) 85%, transparent)',
            }}
            aria-hidden="true"
          />

          <div className="flex flex-col gap-12 lg:gap-0">
            {steps.map((step, index) => {
              const isEven = index % 2 === 1;
              return (
                <div
                  key={step.number}
                  className={`relative flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-0 ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Content card */}
                  <div className={`lg:w-5/12 ${isEven ? 'lg:pl-16' : 'lg:pr-16'} ${isEven ? 'lg:ml-auto' : ''}`}>
                    <div
                      className="group rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1"
                      style={{
                        background: '#111118',
                        border: '1px solid rgba(255,255,255,0.07)',
                        boxShadow: '0 4px 32px rgba(0,0,0,0.3)',
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLDivElement).style.border =
                          '1px solid rgba(0,229,255,0.25)';
                        (e.currentTarget as HTMLDivElement).style.boxShadow =
                          '0 8px 48px rgba(0,229,255,0.08)';
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLDivElement).style.border =
                          '1px solid rgba(255,255,255,0.07)';
                        (e.currentTarget as HTMLDivElement).style.boxShadow =
                          '0 4px 32px rgba(0,0,0,0.3)';
                      }}
                    >
                      {/* Card top row */}
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div
                          className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                          style={{
                            background: 'rgba(0,229,255,0.08)',
                            border: '1px solid rgba(0,229,255,0.18)',
                          }}
                        >
                          {step.icon}
                        </div>
                        <span
                          className="text-xs font-semibold px-3 py-1 rounded-full"
                          style={{
                            background: 'rgba(0,229,255,0.06)',
                            color: '#00e5ff',
                            border: '1px solid rgba(0,229,255,0.15)',
                          }}
                        >
                          {step.highlight}
                        </span>
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold text-white mb-3 leading-snug">
                        {step.title}
                      </h3>
                      <p className="text-sm sm:text-base leading-relaxed" style={{ color: '#8b8ba7' }}>
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Center node (desktop) */}
                  <div className="hidden lg:flex lg:w-2/12 items-center justify-center relative z-10">
                    <div
                      className="flex items-center justify-center w-14 h-14 rounded-full font-bold text-sm"
                      style={{
                        background: '#0a0a0f',
                        border: '2px solid rgba(0,229,255,0.5)',
                        color: '#00e5ff',
                        boxShadow: '0 0 20px rgba(0,229,255,0.2)',
                      }}
                    >
                      {step.number}
                    </div>
                  </div>

                  {/* Spacer for the other side (desktop) */}
                  <div className="hidden lg:block lg:w-5/12" />

                  {/* Step number pill (mobile only) */}
                  <div
                    className="lg:hidden inline-flex items-center gap-2 text-xs font-bold"
                    style={{ color: '#00e5ff' }}
                  >
                    <span
                      className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
                      style={{
                        background: 'rgba(0,229,255,0.1)',
                        border: '1px solid rgba(0,229,255,0.3)',
                      }}
                    >
                      {step.number}
                    </span>
                    Step {index + 1} of {steps.length}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA banner */}
        <div
          className="mt-20 rounded-2xl p-8 sm:p-10 text-center"
          style={{
            background:
              'linear-gradient(135deg, rgba(0,229,255,0.06) 0%, rgba(0,229,255,0.02) 100%)',
            border: '1px solid rgba(0,229,255,0.15)',
          }}
        >
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: '#00e5ff' }}>
            Total setup time
          </p>
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Be Up and Running in{' '}
            <span style={{ color: '#00e5ff' }}>Less Than 10 Minutes</span>
          </h3>
          <p className="text-sm sm:text-base max-w-xl mx-auto" style={{ color: '#8b8ba7' }}>
            No developer needed. No long onboarding. Connect your profile, set your brand voice once,
            and ReviewAgent takes over from there — so you can focus on running your business.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
            {[
              { value: '< 10 min', label: 'Setup time' },
              { value: '24 / 7', label: 'Review monitoring' },
              { value: '< 5 min', label: 'Avg. reply time' },
              { value: '99.9%', label: 'Platform uptime' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold" style={{ color: '#00e5ff' }}>
                  {stat.value}
                </div>
                <div className="text-xs mt-1" style={{ color: '#8b8ba7' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
