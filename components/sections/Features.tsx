import { MessageSquareReply, Star, BarChart3, Globe2, Zap, ShieldCheck } from 'lucide-react';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  highlight?: boolean;
}

const features: Feature[] = [
  {
    icon: <MessageSquareReply className="w-6 h-6" />,
    title: 'AI-Powered Reply Generation',
    description: 'Automatically generate personalized, brand-consistent responses to every Google review in seconds. Our AI understands context, tone, and sentiment — so your replies always feel human.',
    highlight: true,
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: 'Sentiment Analysis',
    description: 'Instantly classify incoming reviews as positive, neutral, or negative. Prioritize critical feedback and respond to unhappy customers before it hurts your rating.',
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'One-Click Publishing',
    description: 'Review, edit if needed, and publish AI-drafted replies directly to Google Business Profile — all from a single dashboard. No copy-pasting, no switching tabs.',
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: 'Reputation Analytics',
    description: 'Track your average rating, response rate, and review volume over time. Identify trends, spot recurring issues, and measure how your reputation improves week over week.',
  },
  {
    icon: <Globe2 className="w-6 h-6" />,
    title: 'Multi-Location Support',
    description: 'Manage reviews across all your branches from one unified inbox. Perfect for restaurant chains, salon franchises, and any multi-location business operating across Europe.',
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: 'GDPR-Compliant & Secure',
    description: 'Built for European businesses with data residency in the EU, full GDPR compliance, and role-based access controls. Your customer data never leaves Europe.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 px-4 overflow-hidden" style={{ background: '#0a0a0f' }}>
      {/* Background decorative blur */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #00e5ff 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase mb-4 px-4 py-1.5 rounded-full border"
            style={{ color: '#00e5ff', borderColor: 'rgba(0,229,255,0.25)', background: 'rgba(0,229,255,0.07)' }}
          >
            Features
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
            Everything you need to own{' '}
            <span style={{ color: '#00e5ff' }}>your reputation</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            ReviewAgent combines AI automation with actionable insights — so restaurant and salon owners across Europe can respond faster, look more professional, and grow their ratings effortlessly.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1"
              style={{
                background: feature.highlight
                  ? 'linear-gradient(135deg, rgba(0,229,255,0.10) 0%, rgba(17,17,24,1) 60%)'
                  : '#111118',
                border: feature.highlight
                  ? '1px solid rgba(0,229,255,0.35)'
                  : '1px solid rgba(255,255,255,0.07)',
                boxShadow: feature.highlight
                  ? '0 0 32px rgba(0,229,255,0.08)'
                  : 'none',
              }}
            >
              {/* Hover glow border */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ border: '1px solid rgba(0,229,255,0.25)' }}
              />

              {/* Icon */}
              <div
                className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-5"
                style={{
                  background: 'rgba(0,229,255,0.10)',
                  color: '#00e5ff',
                }}
              >
                {feature.icon}
              </div>

              {/* Highlight badge */}
              {feature.highlight && (
                <span
                  className="absolute top-5 right-5 text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full"
                  style={{ background: 'rgba(0,229,255,0.15)', color: '#00e5ff' }}
                >
                  Core
                </span>
              )}

              <h3 className="text-white font-semibold text-lg mb-3 leading-snug">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA hint */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm">
            All features are available starting from day one.{' '}
            <a
              href="#pricing"
              className="font-medium transition-colors duration-200 hover:underline"
              style={{ color: '#00e5ff' }}
            >
              Compare plans →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
