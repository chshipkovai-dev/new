import React from 'react';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  highlight?: boolean;
}

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#00e5ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const features: Feature[] = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 2L17.09 8.26L24 9.27L19 14.14L20.18 21.02L14 17.77L7.82 21.02L9 14.14L4 9.27L10.91 8.26L14 2Z" stroke="#00e5ff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    ),
    title: 'AI-Powered Reply Generation',
    description: 'Our AI analyzes the sentiment and context of every review and generates personalised, on-brand responses in seconds — in English, German, Spanish, Polish and more.',
    highlight: true,
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="14" cy="14" r="10" stroke="#00e5ff" strokeWidth="1.8" />
        <path d="M14 9v5l3 3" stroke="#00e5ff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Automated 24/7 Monitoring',
    description: 'ReviewAgent continuously monitors your Google Business Profile for new reviews so you never miss a single piece of customer feedback, even while you sleep.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="5" width="22" height="18" rx="3" stroke="#00e5ff" strokeWidth="1.8" />
        <path d="M3 10h22" stroke="#00e5ff" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M8 15h5M8 19h8" stroke="#00e5ff" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    title: 'Multi-Location Dashboard',
    description: 'Manage reviews for all your branches from one unified dashboard. Perfect for restaurant chains and beauty salon networks operating across multiple cities or countries.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 20l6-6 4 4 8-10" stroke="#00e5ff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Reputation Analytics',
    description: 'Track your average rating trends, response rate, and sentiment score over time. Actionable insights help you identify what delights customers — and what needs improvement.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 6H6a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V8a2 2 0 00-2-2z" stroke="#00e5ff" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M4 8l10 8 10-8" stroke="#00e5ff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Smart Alert Notifications',
    description: 'Receive instant email or Slack alerts for negative reviews so you can respond before damage spreads. Priority alerts ensure critical feedback is never ignored.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 3C8.477 3 4 7.477 4 13c0 2.136.67 4.116 1.81 5.74L4 25l6.26-1.81A10 10 0 1014 3z" stroke="#00e5ff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Tone & Brand Customisation',
    description: 'Set your business voice — formal, friendly or casual — and train ReviewAgent on your specific FAQs, offers and policies so every reply sounds authentically yours.',
  },
];

const benefitPoints = [
  'Save 5–10 hours per week on manual review management',
  'Increase your average Google rating within 60 days',
  'Respond to 100% of reviews, not just the ones you notice',
  'GDPR-compliant data handling for European businesses',
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 bg-[#0a0a0f] overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-[#00e5ff22] to-transparent" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 left-10 w-72 h-72 bg-[#00e5ff] opacity-[0.03] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#00e5ff] opacity-[0.03] rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00e5ff33] bg-[#00e5ff0d] mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00e5ff] animate-pulse" />
            <span className="text-xs font-semibold tracking-widest text-[#00e5ff] uppercase">Everything you need</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
            Built for restaurants &amp; salons{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-[#0099bb]">across Europe</span>
          </h2>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-400 leading-relaxed">
            ReviewAgent combines AI intelligence with deep local business understanding to turn your Google reviews into a competitive advantage — without adding to your workload.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`relative group rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1 ${
                feature.highlight
                  ? 'bg-gradient-to-br from-[#00e5ff0d] to-[#111118] border-[#00e5ff33] shadow-[0_0_30px_#00e5ff0d]'
                  : 'bg-[#111118] border-[#1e1e2e] hover:border-[#00e5ff22]'
              }`}
            >
              {feature.highlight && (
                <div className="absolute top-4 right-4">
                  <span className="text-[10px] font-bold tracking-widest text-[#00e5ff] bg-[#00e5ff1a] border border-[#00e5ff33] px-2 py-0.5 rounded-full uppercase">Core</span>
                </div>
              )}
              <div className="w-12 h-12 rounded-xl bg-[#00e5ff0d] border border-[#00e5ff1a] flex items-center justify-center mb-5 group-hover:bg-[#00e5ff15] transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-3 leading-snug">{feature.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom benefit strip */}
        <div className="rounded-2xl border border-[#1e1e2e] bg-[#111118] p-8 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">
                The ROI that speaks for itself
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Local businesses that actively respond to reviews see up to 35% more clicks on their Google listing. ReviewAgent makes that effortless — for every review, every time.
              </p>
            </div>
            <ul className="space-y-3">
              {benefitPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-0.5">
                    <CheckIcon />
                  </span>
                  <span className="text-sm text-gray-300">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
