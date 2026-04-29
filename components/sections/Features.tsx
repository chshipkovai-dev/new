import React from 'react';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  badge?: string;
}

const features: Feature[] = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 3L17.5 10.5L26 11.5L20 17.5L21.5 26L14 22L6.5 26L8 17.5L2 11.5L10.5 10.5L14 3Z" stroke="#00e5ff" strokeWidth="1.8" strokeLinejoin="round" fill="none"/>
      </svg>
    ),
    title: 'Instant AI Replies',
    description: 'ReviewAgent reads every new review on Google, Yelp, TripAdvisor and Booking.com within seconds and crafts a personalised, on-brand response — no templates, no copy-paste.',
    badge: 'Core',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="5" width="22" height="18" rx="3" stroke="#00e5ff" strokeWidth="1.8"/>
        <path d="M3 11H25" stroke="#00e5ff" strokeWidth="1.8"/>
        <path d="M9 17H12" stroke="#00e5ff" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M16 17H19" stroke="#00e5ff" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Multi-Platform Dashboard',
    description: 'Manage reviews from all major platforms in one unified inbox. Filter by rating, date, platform or sentiment. Never miss a negative review again.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="14" cy="14" r="10" stroke="#00e5ff" strokeWidth="1.8"/>
        <path d="M14 8V14L18 17" stroke="#00e5ff" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Smart Escalation Alerts',
    description: 'When a review signals a serious complaint or legal risk, ReviewAgent pauses auto-reply and pings your team via email or Slack so a human can step in immediately.',
    badge: 'Safety',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 20L10 14L14 18L20 10L24 14" stroke="#00e5ff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4 24H24" stroke="#00e5ff" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Reputation Analytics',
    description: 'Track your average rating trends, response rate, sentiment score and competitor benchmarks over time. Weekly PDF reports delivered straight to your inbox.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="10" cy="10" r="4" stroke="#00e5ff" strokeWidth="1.8"/>
        <circle cx="20" cy="18" r="4" stroke="#00e5ff" strokeWidth="1.8"/>
        <path d="M14 10H20V14" stroke="#00e5ff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Multi-Location Support',
    description: 'Running a chain of restaurants or a group of beauty salons? Connect unlimited locations under one account. Each branch gets its own tone, language and escalation rules.',
    badge: 'Business',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 14C6 9.58 9.58 6 14 6C18.42 6 22 9.58 22 14" stroke="#00e5ff" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M4 16C4 12 8.69 9 14 9" stroke="#00e5ff" strokeWidth="1.8" strokeLinecap="round" opacity="0.4"/>
        <rect x="10" y="17" width="8" height="5" rx="1.5" stroke="#00e5ff" strokeWidth="1.8"/>
        <path d="M14 17V14" stroke="#00e5ff" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    title: 'GDPR-Ready & Secure',
    description: 'All data processed on EU servers. ReviewAgent is fully compliant with GDPR regulations. No personal review data is stored beyond what is strictly required for response generation.',
  },
];

function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <div className="group relative flex flex-col gap-4 rounded-2xl border border-white/[0.06] bg-[#111118] p-6 transition-all duration-300 hover:border-[#00e5ff]/30 hover:shadow-[0_0_32px_rgba(0,229,255,0.06)]">
      {/* Subtle top gradient line on hover */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px rounded-t-2xl bg-gradient-to-r from-transparent via-[#00e5ff]/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="flex items-start justify-between gap-3">
        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-white/[0.06] bg-[#0a0a0f]">
          {feature.icon}
        </div>
        {feature.badge && (
          <span className="mt-1 rounded-full border border-[#00e5ff]/30 bg-[#00e5ff]/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-[#00e5ff]">
            {feature.badge}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-[17px] font-semibold leading-snug text-white">{feature.title}</h3>
        <p className="text-[14px] leading-relaxed text-white/50">{feature.description}</p>
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <section
      id="features"
      className="relative w-full overflow-hidden bg-[#0a0a0f] py-24 lg:py-32"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-[#00e5ff] opacity-[0.03] blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#00e5ff]/20 bg-[#00e5ff]/10 px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#00e5ff]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#00e5ff]">
              Everything you need
            </span>
          </div>
          <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
            Built for hospitality,
            <br />
            <span className="bg-gradient-to-r from-[#00e5ff] to-[#00b8d4] bg-clip-text text-transparent">
              not for enterprise IT
            </span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/50">
            ReviewAgent handles the entire review lifecycle — from detection to reply to reporting — so your team focuses on delivering great experiences, not managing feedback.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </div>

        {/* Bottom stats row */}
        <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.04] sm:grid-cols-4">
          {[
            { value: '< 90s', label: 'Average reply time' },
            { value: '4.8★', label: 'Avg. rating lift in 90 days' },
            { value: '12+', label: 'Platforms supported' },
            { value: '99.9%', label: 'Uptime SLA' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-1 bg-[#111118] px-6 py-8 text-center"
            >
              <span className="text-3xl font-bold tracking-tight text-white">{stat.value}</span>
              <span className="text-xs font-medium text-white/40">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
