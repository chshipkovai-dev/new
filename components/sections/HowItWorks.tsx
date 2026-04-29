'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface Step {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  detail: string;
}

const steps: Step[] = [
  {
    number: '01',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    title: 'Connect Your Google Business',
    description: 'Link your Google Business Profile in under 60 seconds. No technical skills required — just sign in with Google and grant access.',
    detail: 'Works with single locations and multi-branch chains alike.',
  },
  {
    number: '02',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18" />
        <path d="M9 21V9" />
      </svg>
    ),
    title: 'Set Your Response Style',
    description: 'Choose your tone — friendly, professional, or brand-specific. Upload a few sentences about your business and our AI learns your voice.',
    detail: 'Supports English, German, French, Spanish, Italian and more.',
  },
  {
    number: '03',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    title: 'Auto-Reply Runs 24 / 7',
    description: 'ReviewAgent monitors every new review and posts a personalised, context-aware reply within minutes — whether it is 3 pm or 3 am.',
    detail: 'You stay in control: approve before posting or let it run fully automatic.',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: '#0a0a0f' }}
    >
      {/* Subtle grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,229,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.6) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glow blob */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full blur-[120px] opacity-10"
        style={{ background: 'radial-gradient(ellipse, #00e5ff 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16 md:mb-20"
        >
          <span
            className="inline-block text-xs font-semibold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full mb-4 border"
            style={{
              color: '#00e5ff',
              borderColor: 'rgba(0,229,255,0.25)',
              backgroundColor: 'rgba(0,229,255,0.06)',
            }}
          >
            Simple Setup
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            Up and running in{' '}
            <span style={{ color: '#00e5ff' }}>three steps</span>
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            No developers, no complicated integrations. ReviewAgent plugs directly into Google Business Profile and starts working the same day.
          </p>
        </motion.div>

        {/* Steps grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {steps.map((step, index) => (
            <motion.div key={step.number} variants={itemVariants}>
              <div
                className="relative h-full rounded-2xl border p-8 flex flex-col group hover:border-cyan-400/40 transition-all duration-300"
                style={{
                  backgroundColor: '#111118',
                  borderColor: 'rgba(255,255,255,0.07)',
                }}
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background:
                      'radial-gradient(ellipse at top left, rgba(0,229,255,0.06) 0%, transparent 60%)',
                  }}
                />

                {/* Step number + connector line */}
                <div className="flex items-center gap-3 mb-6">
                  <span
                    className="text-5xl font-black leading-none select-none"
                    style={{ color: 'rgba(0,229,255,0.12)' }}
                  >
                    {step.number}
                  </span>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute -right-4 top-10 w-8 z-20">
                      <svg width="32" height="12" viewBox="0 0 32 12" fill="none">
                        <path
                          d="M0 6h28M22 1l6 5-6 5"
                          stroke="rgba(0,229,255,0.25)"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  )}
                </div>

                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 flex-shrink-0"
                  style={{
                    backgroundColor: 'rgba(0,229,255,0.08)',
                    color: '#00e5ff',
                    border: '1px solid rgba(0,229,255,0.18)',
                  }}
                >
                  {step.icon}
                </div>

                {/* Text */}
                <h3 className="text-xl font-semibold text-white mb-3 leading-snug">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                  {step.description}
                </p>

                {/* Detail pill */}
                <div
                  className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-lg self-start mt-auto"
                  style={{
                    backgroundColor: 'rgba(0,229,255,0.05)',
                    color: 'rgba(0,229,255,0.7)',
                    border: '1px solid rgba(0,229,255,0.12)',
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: '#00e5ff' }}
                  />
                  {step.detail}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom stat bar */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-14 md:mt-16 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x rounded-2xl overflow-hidden border"
          style={{
            backgroundColor: '#111118',
            borderColor: 'rgba(255,255,255,0.07)',
            divideColor: 'rgba(255,255,255,0.07)',
          }}
        >
          {[
            { value: '< 60s', label: 'Average setup time' },
            { value: '5 min', label: 'First auto-reply posted' },
            { value: '100%', label: 'Reviews covered — zero missed' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center py-8 px-6 text-center"
              style={{ borderColor: 'rgba(255,255,255,0.07)' }}
            >
              <span
                className="text-3xl md:text-4xl font-black tracking-tight"
                style={{ color: '#00e5ff' }}
              >
                {stat.value}
              </span>
              <span className="mt-1 text-sm text-gray-500">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
