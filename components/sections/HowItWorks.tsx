'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface Step {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  detail: string;
}

const steps: Step[] = [
  {
    number: '01',
    title: 'Connect Your Google Business Profile',
    description:
      'Link your Google Business account in under 2 minutes. No technical skills required — just authorize access and ReviewAgent starts monitoring your reviews instantly.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 2C7.373 2 2 7.373 2 14s5.373 12 12 12 12-5.373 12-12S20.627 2 14 2z" stroke="#00e5ff" strokeWidth="1.5" fill="none"/>
        <path d="M9 14l3.5 3.5L19 10" stroke="#00e5ff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    detail: 'OAuth 2.0 secure connection — we never store your password',
  },
  {
    number: '02',
    title: 'AI Learns Your Brand Voice',
    description:
      'Our AI analyzes your business type, existing responses, and tone preferences. It crafts personalized replies that sound like you — professional, warm, and on-brand every time.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="6" width="22" height="16" rx="3" stroke="#00e5ff" strokeWidth="1.5" fill="none"/>
        <path d="M9 12h10M9 16h6" stroke="#00e5ff" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="21" cy="7" r="3" fill="#00e5ff"/>
      </svg>
    ),
    detail: 'Supports 12 languages including English, German, French, and Spanish',
  },
  {
    number: '03',
    title: 'Replies Go Live Automatically',
    description:
      'The moment a new review appears, ReviewAgent composes and posts a tailored response within minutes. Your reputation stays active and responsive — 24/7, even while you sleep.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 4v6M14 18v6M4 14h6M18 14h6" stroke="#00e5ff" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="14" cy="14" r="4" stroke="#00e5ff" strokeWidth="1.5" fill="none"/>
      </svg>
    ),
    detail: 'Average response time: under 4 minutes after review is posted',
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
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const lineVariants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: {
      duration: 0.8,
      ease: 'easeInOut',
      delay: 0.3,
    },
  },
};

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: '#0a0a0f' }}
    >
      {/* Background decoration */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-10 blur-3xl"
          style={{
            background:
              'radial-gradient(ellipse at center, #00e5ff 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-[400px] h-[400px] opacity-5 blur-3xl"
          style={{
            background:
              'radial-gradient(ellipse at center, #00e5ff 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 md:mb-20"
        >
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
            style={{
              background: 'rgba(0, 229, 255, 0.08)',
              border: '1px solid rgba(0, 229, 255, 0.2)',
              color: '#00e5ff',
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ background: '#00e5ff' }}
            />
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mt-3">
            Set up once.{' '}
            <span
              className=""
              style={{
                background: 'linear-gradient(90deg, #00e5ff, #00b8d4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Reply forever.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            ReviewAgent handles your entire review response workflow in three
            simple steps — from connection to fully automated replies.
          </p>
        </motion.div>

        {/* Steps grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative"
        >
          {/* Connector lines (desktop) */}
          <div
            className="hidden md:block absolute top-[52px] left-[calc(33.33%+0px)] right-[calc(33.33%+0px)] z-0"
            aria-hidden="true"
          >
            <motion.div
              variants={lineVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              style={{ transformOrigin: 'left center' }}
              className="h-px"
            >
              <svg
                width="100%"
                height="2"
                className="overflow-visible"
              >
                <line
                  x1="0"
                  y1="1"
                  x2="100%"
                  y2="1"
                  stroke="rgba(0, 229, 255, 0.25)"
                  strokeWidth="1"
                  strokeDasharray="6 4"
                />
              </svg>
            </motion.div>
          </div>

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              variants={itemVariants}
              className="relative group"
            >
              <div
                className="relative h-full rounded-2xl p-6 lg:p-8 flex flex-col transition-all duration-300 group-hover:translate-y-[-4px]"
                style={{
                  background: '#111118',
                  border: '1px solid rgba(255,255,255,0.07)',
                  boxShadow: '0 0 0 0 rgba(0, 229, 255, 0)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.border =
                    '1px solid rgba(0, 229, 255, 0.25)';
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    '0 0 32px rgba(0, 229, 255, 0.08)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.border =
                    '1px solid rgba(255,255,255,0.07)';
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    '0 0 0 0 rgba(0, 229, 255, 0)';
                }}
              >
                {/* Step number badge */}
                <div className="flex items-center justify-between mb-6">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      background: 'rgba(0, 229, 255, 0.08)',
                      border: '1px solid rgba(0, 229, 255, 0.2)',
                    }}
                  >
                    {step.icon}
                  </div>
                  <span
                    className="text-4xl font-black leading-none select-none"
                    style={{
                      color: 'rgba(0, 229, 255, 0.12)',
                      fontVariantNumeric: 'tabular-nums',
                    }}
                  >
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-white mb-3 leading-snug">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed flex-1">
                  {step.description}
                </p>

                {/* Detail pill */}
                <div
                  className="mt-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium"
                  style={{
                    background: 'rgba(0, 229, 255, 0.06)',
                    color: 'rgba(0, 229, 255, 0.8)',
                    border: '1px solid rgba(0, 229, 255, 0.12)',
                  }}
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    className="shrink-0"
                  >
                    <circle cx="6" cy="6" r="5" stroke="#00e5ff" strokeWidth="1" fill="none"/>
                    <path d="M6 4v3M6 8.5v.5" stroke="#00e5ff" strokeWidth="1" strokeLinecap="round"/>
                  </svg>
                  {step.detail}
                </div>

                {/* Progress indicator */}
                {index < steps.length - 1 && (
                  <div
                    className="md:hidden absolute -bottom-3 left-1/2 -translate-x-1/2 w-px h-6"
                    style={{
                      background:
                        'linear-gradient(to bottom, rgba(0,229,255,0.3), transparent)',
                    }}
                    aria-hidden="true"
                  />
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom stats row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          {[
            { value: '2 min', label: 'Average setup time' },
            { value: '< 4 min', label: 'Response time per review' },
            { value: '97%', label: 'Customer satisfaction rate' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center py-5 px-4 rounded-xl text-center"
              style={{
                background: 'rgba(0, 229, 255, 0.04)',
                border: '1px solid rgba(0, 229, 255, 0.1)',
              }}
            >
              <span
                className="text-2xl font-bold mb-1"
                style={{ color: '#00e5ff' }}
              >
                {stat.value}
              </span>
              <span className="text-xs text-gray-500 uppercase tracking-wider">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
