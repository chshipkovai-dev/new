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
        <path d="M14 3C7.925 3 3 7.925 3 14s4.925 11 11 11 11-4.925 11-11S20.075 3 14 3zm0 2a9 9 0 110 18A9 9 0 0114 5zm-1 4v5.586l3.707 3.707-1.414 1.414L11 15.414V9h2z" fill="#00e5ff"/>
      </svg>
    ),
    title: 'Real-Time Review Monitoring',
    description: 'ReviewAgent scans Google, TripAdvisor, Yelp and 12 other platforms 24/7. Get instant Slack or email alerts the moment a new review lands — never miss a customer signal again.',
    badge: 'Live'
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 2C7.373 2 2 7.373 2 14c0 2.09.54 4.054 1.487 5.757L2 26l6.457-1.467A11.945 11.945 0 0014 26c6.627 0 12-5.373 12-12S20.627 2 14 2zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.95 9.95 0 01-5.03-1.355l-.36-.214-3.83.87.9-3.717-.23-.374A9.95 9.95 0 014 14c0-5.523 4.477-10 10-10zm-3 6a1 1 0 00-1 1v6a1 1 0 001 1h6a1 1 0 001-1v-6a1 1 0 00-1-1h-6zm1 2h4v4h-4v-4z" fill="#00e5ff"/>
      </svg>
    ),
    title: 'AI-Powered Auto-Replies',
    description: 'Our GPT-4o model drafts personalised, on-brand responses in the language of the reviewer — English, German, Spanish, French and more. Responses are reviewed or published automatically based on your approval settings.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 4a2 2 0 00-2 2v16a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2H6zm0 2h16v16H6V6zm2 2v2h12V8H8zm0 4v2h8v-2H8zm0 4v2h5v-2H8z" fill="#00e5ff"/>
      </svg>
    ),
    title: 'Sentiment & Trend Analytics',
    description: 'Turn raw review data into actionable insights. Track sentiment score over time, identify recurring complaints before they damage your rating, and benchmark against local competitors.',
    badge: 'Pro+'
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 2l3.09 6.26L24 9.27l-5 4.87 1.18 6.88L14 17.77l-6.18 3.25L9 14.14 4 9.27l6.91-1.01L14 2zm0 3.2L11.6 10H6.5l4.26 4.15-.99 5.8L14 17.3l4.23 2.65-.99-5.8L21.5 10h-5.1L14 5.2z" fill="#00e5ff"/>
      </svg>
    ),
    title: 'Review Generation Campaigns',
    description: 'Automatically send post-visit SMS or email prompts asking happy customers to leave a review. Smart timing and personalised copy lift your average star rating within 30 days.',
    badge: 'Pro+'
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 4a1 1 0 00-1 1v18a1 1 0 001 1h18a1 1 0 001-1V5a1 1 0 00-1-1H5zm1 2h16v16H6V6zm3 3v2h8V9H9zm0 4v2h5v-2H9zm6 0v2h2v-2h-2z" fill="#00e5ff"/>
      </svg>
    ),
    title: 'Multi-Location Dashboard',
    description: 'Manage reviews for every branch from a single workspace. Assign staff to locations, set per-location tone of voice, and roll up reporting across your entire portfolio.',
    badge: 'Business'
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 3a11 11 0 100 22A11 11 0 0014 3zm0 2a9 9 0 110 18A9 9 0 0114 5zm-1 2v7.414l4.293 4.293-1.414 1.414L11 15.414V7h2z" fill="#00e5ff"/>
      </svg>
    ),
    title: 'Seamless Integrations',
    description: 'Connect ReviewAgent with your existing stack in minutes. Native integrations with Slack, Zapier, Google Business Profile API, and open Webhooks for custom workflows.',
  },
];

const BadgeChip: React.FC<{ label: string }> = ({ label }) => (
  <span
    className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold tracking-wide uppercase"
    style={{
      background: 'rgba(0,229,255,0.12)',
      color: '#00e5ff',
      border: '1px solid rgba(0,229,255,0.25)',
    }}
  >
    {label}
  </span>
);

const FeatureCard: React.FC<Feature> = ({ icon, title, description, badge }) => (
  <div
    className="group relative flex flex-col gap-4 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
    style={{
      background: '#111118',
      border: '1px solid rgba(255,255,255,0.06)',
      boxShadow: '0 0 0 0 rgba(0,229,255,0)',
    }}
    onMouseEnter={e => {
      (e.currentTarget as HTMLDivElement).style.boxShadow = '0 0 32px 0 rgba(0,229,255,0.08)';
      (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(0,229,255,0.2)';
    }}
    onMouseLeave={e => {
      (e.currentTarget as HTMLDivElement).style.boxShadow = '0 0 0 0 rgba(0,229,255,0)';
      (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.06)';
    }}
  >
    <div
      className="flex h-12 w-12 items-center justify-center rounded-xl flex-shrink-0"
      style={{ background: 'rgba(0,229,255,0.08)' }}
    >
      {icon}
    </div>

    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2 flex-wrap">
        <h3 className="text-base font-semibold text-white leading-snug">{title}</h3>
        {badge && <BadgeChip label={badge} />}
      </div>
      <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
        {description}
      </p>
    </div>

    <div
      className="pointer-events-none absolute inset-x-0 bottom-0 h-px rounded-b-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      style={{ background: 'linear-gradient(90deg, transparent, #00e5ff, transparent)' }}
    />
  </div>
);

const Features: React.FC = () => {
  return (
    <section
      id="features"
      className="relative w-full py-24 md:py-32 overflow-hidden"
      style={{ background: '#0a0a0f' }}
    >
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,229,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.03) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 w-[600px] h-[300px] rounded-full opacity-20 blur-3xl"
        style={{ background: 'radial-gradient(ellipse, #00e5ff 0%, transparent 70%)' }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest uppercase mb-6"
            style={{
              background: 'rgba(0,229,255,0.08)',
              color: '#00e5ff',
              border: '1px solid rgba(0,229,255,0.2)',
            }}
          >
            <span
              className="h-1.5 w-1.5 rounded-full animate-pulse"
              style={{ background: '#00e5ff' }}
            />
            Everything you need
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight">
            One agent.{' '}
            <span style={{ color: '#00e5ff' }}>All your reviews.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
            ReviewAgent handles every step of the review lifecycle — from monitoring and analysis to
            personalised AI replies and proactive generation — so your team can focus on delivering
            great experiences.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>

        {/* Bottom stat strip */}
        <div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden"
          style={{ border: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.04)' }}
        >
          {[
            { value: '14+', label: 'Review platforms' },
            { value: '2 min', label: 'Average setup time' },
            { value: '4.8★', label: 'Avg. rating lift' },
            { value: '98%', label: 'Reply accuracy' },
          ].map(({ value, label }) => (
            <div
              key={label}
              className="flex flex-col items-center justify-center gap-1 py-6 px-4"
              style={{ background: '#111118' }}
            >
              <span
                className="text-2xl sm:text-3xl font-bold"
                style={{ color: '#00e5ff' }}
              >
                {value}
              </span>
              <span className="text-xs sm:text-sm text-center" style={{ color: 'rgba(255,255,255,0.45)' }}>
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
