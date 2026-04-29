'use client';

import { useRef } from 'react';

const steps = [
  {
    number: '01',
    title: 'Connect Your Platforms',
    description:
      'Link your Google Business, Tripadvisor, Yelp, and Booking.com accounts in under 5 minutes. No technical skills required — just authenticate and ReviewAgent starts monitoring immediately.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 3C8.477 3 4 7.477 4 13s4.477 10 10 10 10-4.477 10-10S19.523 3 14 3z" stroke="#00e5ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 8v5l3 3" stroke="#00e5ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4.5 9.5h4m-4 4h3" stroke="#00e5ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
      </svg>
    ),
    detail: 'Supports 12+ review platforms',
    color: 'from-cyan-500/10 to-cyan-500/0',
    borderColor: 'border-cyan-500/20',
  },
  {
    number: '02',
    title: 'AI Learns Your Brand Voice',
    description:
      'ReviewAgent analyzes your existing responses, menu, services, and tone of voice. It builds a custom communication profile tailored to your business — formal, friendly, or anything in between.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="4" width="20" height="20" rx="4" stroke="#00e5ff" strokeWidth="1.5" />
        <path d="M9 14h10M9 10h6M9 18h8" stroke="#00e5ff" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="21" cy="7" r="3" fill="#00e5ff" />
      </svg>
    ),
    detail: 'Custom tone & language settings',
    color: 'from-violet-500/10 to-violet-500/0',
    borderColor: 'border-violet-500/20',
  },
  {
    number: '03',
    title: 'Auto-Reply & Smart Alerts',
    description:
      'Every new review triggers an instant AI-crafted response — published automatically or sent for your approval first. Negative reviews with rating 1–2 stars always escalate to you with context and suggested action.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 7h18v13a1 1 0 01-1 1H6a1 1 0 01-1-1V7z" stroke="#00e5ff" strokeWidth="1.5" />
        <path d="M5 7l9 8 9-8" stroke="#00e5ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="21" cy="7" r="3" fill="#00e5ff" />
      </svg>
    ),
    detail: 'Reply within 3 minutes on average',
    color: 'from-emerald-500/10 to-emerald-500/0',
    borderColor: 'border-emerald-500/20',
  },
  {
    number: '04',
    title: 'Track Growth & Insights',
    description:
      'Your dashboard shows rating trends, sentiment analysis, top complaint topics, and response rate metrics. Export weekly PDF reports to share with your team or investors — all in one click.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 22V14M10 22V10M16 22V6M22 22V2" stroke="#00e5ff" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M4 10l6-4 6 4 6-6" stroke="#00e5ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
      </svg>
    ),
    detail: 'Real-time analytics dashboard',
    color: 'from-amber-500/10 to-amber-500/0',
    borderColor: 'border-amber-500/20',
  },
];

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: '#0a0a0f' }}
    >
      {/* Background decoration */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-5"
          style={{
            background:
              'radial-gradient(circle, #00e5ff 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute top-0 left-0 w-full h-px"
          style={{
            background:
              'linear-gradient(90deg, transparent, #00e5ff22, transparent)',
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-full h-px"
          style={{
            background:
              'linear-gradient(90deg, transparent, #00e5ff22, transparent)',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/5 mb-6">
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ background: '#00e5ff' }}
            />
            <span
              className="text-xs font-semibold tracking-widest uppercase"
              style={{ color: '#00e5ff' }}
            >
              Simple Setup
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Live in{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #00e5ff, #7c3aed)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              5 Minutes
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            From signup to your first automated reply in four straightforward
            steps. No developers, no complex integrations — just results.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line — desktop */}
          <div
            className="hidden lg:block absolute top-[72px] left-0 right-0 h-px mx-auto"
            style={{
              width: 'calc(100% - 200px)',
              left: '100px',
              background:
                'linear-gradient(90deg, transparent, #00e5ff33, #00e5ff55, #00e5ff33, transparent)',
            }}
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="group relative flex flex-col"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Card */}
                <div
                  className={`relative flex flex-col h-full rounded-2xl border ${step.borderColor} p-6 transition-all duration-300 hover:border-opacity-60 hover:-translate-y-1`}
                  style={{ background: '#111118' }}
                >
                  {/* Gradient overlay on hover */}
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-b ${step.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    aria-hidden="true"
                  />

                  {/* Step number + icon row */}
                  <div className="relative flex items-center justify-between mb-5">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background:
                          'linear-gradient(135deg, #00e5ff0d, #00e5ff05)',
                        border: '1px solid #00e5ff20',
                      }}
                    >
                      {step.icon}
                    </div>
                    <span
                      className="text-5xl font-black leading-none select-none"
                      style={{
                        color: 'transparent',
                        WebkitTextStroke: '1px #ffffff10',
                      }}
                    >
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="relative flex-1 flex flex-col">
                    <h3 className="text-white font-semibold text-lg mb-3 leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed flex-1">
                      {step.description}
                    </p>

                    {/* Detail badge */}
                    <div className="mt-5 pt-4 border-t border-white/5">
                      <span
                        className="inline-flex items-center gap-1.5 text-xs font-medium"
                        style={{ color: '#00e5ff' }}
                      >
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                        >
                          <path
                            d="M2 6l3 3 5-5"
                            stroke="#00e5ff"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        {step.detail}
                      </span>
                    </div>
                  </div>

                  {/* Arrow connector for mobile/tablet */}
                  {index < steps.length - 1 && (
                    <div
                      className="lg:hidden absolute -bottom-4 left-1/2 -translate-x-1/2 z-10 w-8 h-8 rounded-full flex items-center justify-center"
                      style={{
                        background: '#0a0a0f',
                        border: '1px solid #00e5ff30',
                      }}
                      aria-hidden="true"
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                      >
                        <path
                          d="M7 3v8M4 8l3 3 3-3"
                          stroke="#00e5ff"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA strip */}
        <div
          className="mt-16 md:mt-20 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6"
          style={{
            background: 'linear-gradient(135deg, #111118, #0d0d16)',
            border: '1px solid #00e5ff15',
          }}
        >
          <div className="text-center md:text-left">
            <h3 className="text-white text-xl md:text-2xl font-bold mb-2">
              Ready to automate your review management?
            </h3>
            <p className="text-gray-400 text-sm md:text-base">
              Join 500+ restaurants and salons already saving 10+ hours per
              week.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 active:translate-y-0"
              style={{
                background: 'linear-gradient(135deg, #00e5ff, #00b8cc)',
                color: '#0a0a0f',
                boxShadow: '0 0 24px #00e5ff30',
              }}
            >
              See Pricing
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-gray-300 transition-all duration-200 hover:text-white hover:bg-white/5"
              style={{
                border: '1px solid #ffffff15',
              }}
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
