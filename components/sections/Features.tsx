import React from 'react';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  badge?: string;
}

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 10L8 14L16 6" stroke="#00e5ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const AutoReplyIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="28" height="28" rx="8" fill="#00e5ff" fillOpacity="0.1" />
    <path d="M7 9h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H9l-3 2V10a1 1 0 0 1 1-1z" stroke="#00e5ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M11 13h6M11 16h4" stroke="#00e5ff" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const SentimentIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="28" height="28" rx="8" fill="#00e5ff" fillOpacity="0.1" />
    <circle cx="14" cy="14" r="6" stroke="#00e5ff" strokeWidth="1.5" />
    <path d="M11 15.5s.8 1.5 3 1.5 3-1.5 3-1.5" stroke="#00e5ff" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="12" cy="13" r="0.75" fill="#00e5ff" />
    <circle cx="16" cy="13" r="0.75" fill="#00e5ff" />
  </svg>
);

const MultiPlatformIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="28" height="28" rx="8" fill="#00e5ff" fillOpacity="0.1" />
    <circle cx="14" cy="10" r="2.5" stroke="#00e5ff" strokeWidth="1.5" />
    <circle cx="8" cy="18" r="2.5" stroke="#00e5ff" strokeWidth="1.5" />
    <circle cx="20" cy="18" r="2.5" stroke="#00e5ff" strokeWidth="1.5" />
    <path d="M11.8 11.8L9.5 15.8M16.2 11.8L18.5 15.8M10.5 18h7" stroke="#00e5ff" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const AnalyticsIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="28" height="28" rx="8" fill="#00e5ff" fillOpacity="0.1" />
    <path d="M7 19l4-4 3 3 4-5 3 3" stroke="#00e5ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M7 8v11h14" stroke="#00e5ff" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const AlertIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="28" height="28" rx="8" fill="#00e5ff" fillOpacity="0.1" />
    <path d="M14 8v6M14 17v1" stroke="#00e5ff" strokeWidth="2" strokeLinecap="round" />
    <path d="M12 6.2L7 16a2 2 0 0 0 1.7 3h10.6A2 2 0 0 0 21 16l-5-9.8a2 2 0 0 0-3.5 0z" stroke="#00e5ff" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);

const PersonalizationIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="28" height="28" rx="8" fill="#00e5ff" fillOpacity="0.1" />
    <circle cx="14" cy="11" r="3" stroke="#00e5ff" strokeWidth="1.5" />
    <path d="M8 21c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="#00e5ff" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M19 8l1.5 1.5L23 7" stroke="#00e5ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IntegrationIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="28" height="28" rx="8" fill="#00e5ff" fillOpacity="0.1" />
    <rect x="7" y="7" width="6" height="6" rx="1.5" stroke="#00e5ff" strokeWidth="1.5" />
    <rect x="15" y="7" width="6" height="6" rx="1.5" stroke="#00e5ff" strokeWidth="1.5" />
    <rect x="7" y="15" width="6" height="6" rx="1.5" stroke="#00e5ff" strokeWidth="1.5" />
    <rect x="15" y="15" width="6" height="6" rx="1.5" stroke="#00e5ff" strokeWidth="1.5" />
  </svg>
);

const features: Feature[] = [
  {
    icon: <AutoReplyIcon />,
    title: 'AI-Powered Auto-Replies',
    description:
      'ReviewAgent reads every incoming review and crafts a personalised, on-brand response in seconds — available in English, German, Spanish, French and more.',
    badge: 'Core',
  },
  {
    icon: <SentimentIcon />,
    title: 'Sentiment Analysis',
    description:
      'Every review is scored and categorised as positive, neutral or negative. Instantly understand guest emotion trends and spot recurring service issues before they escalate.',
  },
  {
    icon: <MultiPlatformIcon />,
    title: 'Multi-Platform Coverage',
    description:
      'Google Business Profile, TripAdvisor, Booking.com and Yelp — all managed from one dashboard. No tab-switching, no missed reviews.',
    badge: 'Popular',
  },
  {
    icon: <AnalyticsIcon />,
    title: 'Review Analytics Dashboard',
    description:
      'Track your average rating over time, response rate, review volume and sentiment breakdown. Export weekly PDF reports and share them with your team in one click.',
  },
  {
    icon: <AlertIcon />,
    title: 'Real-Time Alerts',
    description:
      'Get instant Slack, email or SMS notifications when a 1- or 2-star review arrives so you can intervene personally when it matters most.',
  },
  {
    icon: <PersonalizationIcon />,
    title: 'Brand Voice Customisation',
    description:
      'Train the AI on your tone — formal, friendly or playful. Set custom phrases to avoid, preferred greetings and response length so every reply sounds unmistakably you.',
  },
  {
    icon: <IntegrationIcon />,
    title: 'One-Click Integrations',
    description:
      'Connect your existing POS, CRM or reservation system via Zapier or our native webhooks. ReviewAgent fits into your workflow — not the other way around.',
  },
  {
    icon: <MultiPlatformIcon />,
    title: 'GDPR-Compliant Data Handling',
    description:
      'All review data is processed and stored on EU servers. We never sell guest data and are fully compliant with GDPR, giving your European customers peace of mind.',
  },
];

const stats = [
  { value: '4.2×', label: 'faster response time' },
  { value: '94%', label: 'positive guest satisfaction' },
  { value: '3 hrs', label: 'saved per week on average' },
  { value: '12+', label: 'platforms supported' },
];

export default function Features() {
  return (
    <section
      id="features"
      className="relative w-full py-24 overflow-hidden"
      style={{ background: '#0a0a0f' }}
    >
      {/* Background grid decoration */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(#00e5ff 1px, transparent 1px), linear-gradient(90deg, #00e5ff 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Radial glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full opacity-10 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, #00e5ff 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span
            className="inline-block text-xs font-semibold tracking-[0.2em] uppercase px-3 py-1 rounded-full border mb-4"
            style={{
              color: '#00e5ff',
              borderColor: 'rgba(0,229,255,0.3)',
              background: 'rgba(0,229,255,0.06)',
            }}
          >
            Everything you need
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            Built for hospitality.
            <br />
            <span style={{ color: '#00e5ff' }}>Powered by AI.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            ReviewAgent combines deep AI understanding with industry-specific logic
            to handle every review — so your team can focus on delivering great
            experiences, not writing responses.
          </p>
        </div>

        {/* Stats row */}
        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-px mb-16 rounded-2xl overflow-hidden border"
          style={{
            borderColor: 'rgba(0,229,255,0.12)',
            background: 'rgba(0,229,255,0.08)',
          }}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center py-8 px-4 text-center"
              style={{ background: '#111118' }}
            >
              <span
                className="text-3xl sm:text-4xl font-bold mb-1"
                style={{ color: '#00e5ff' }}
              >
                {stat.value}
              </span>
              <span className="text-sm text-gray-400">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative rounded-2xl p-6 border transition-all duration-300 hover:border-cyan-500/40 hover:-translate-y-1"
              style={{
                background: '#111118',
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

              <div className="relative z-10">
                {/* Icon + badge row */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-shrink-0">{feature.icon}</div>
                  {feature.badge && (
                    <span
                      className="text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full"
                      style={{
                        color: '#00e5ff',
                        background: 'rgba(0,229,255,0.12)',
                        border: '1px solid rgba(0,229,255,0.25)',
                      }}
                    >
                      {feature.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-white font-semibold text-base mb-2 leading-snug">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom proof line */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
          {[
            'No technical setup required',
            'Cancel anytime',
            '14-day free trial on Pro',
          ].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <CheckIcon />
              <span className="text-gray-300 text-sm">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
