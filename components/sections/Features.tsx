import { Star, Zap, Globe, BarChart3, Shield, Clock, MessageSquare, TrendingUp } from 'lucide-react';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  highlight?: boolean;
}

const features: Feature[] = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Instant AI Responses",
    description: "Generate professional, personalized replies to every Google review in seconds. Our AI understands context, tone, and your brand voice to craft responses that feel human.",
    highlight: true,
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Multi-Language Support",
    description: "Respond to reviews in 20+ languages automatically. Perfect for European businesses serving diverse customers across Germany, Spain, Poland, France, and beyond.",
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Reputation Analytics",
    description: "Track your rating trends, response rates, and sentiment scores over time. Identify patterns in customer feedback and act before small issues become big problems.",
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: "Review Request Automation",
    description: "Automatically send follow-up messages to satisfied customers encouraging them to leave a review. Grow your review count on autopilot with smart timing logic.",
    highlight: true,
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Negative Review Alerts",
    description: "Get instant notifications when a negative review lands. Respond within minutes to show potential customers you take feedback seriously and protect your reputation.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Brand Voice Consistency",
    description: "Train the AI on your brand tone — professional, friendly, or premium. Every response reflects your business identity across all locations and team members.",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "24/7 Auto-Response Mode",
    description: "Never let a review go unanswered again. Enable fully automated responses for common review types while keeping manual control for complex situations.",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Competitor Benchmarking",
    description: "See how your ratings and response rate compare to competitors in your area. Understand where you stand and discover opportunities to pull ahead in local search.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-[#0a0a0f] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00e5ff] opacity-[0.03] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00e5ff] opacity-[0.03] rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00e5ff]/20 bg-[#00e5ff]/5 mb-6">
            <Zap className="w-4 h-4 text-[#00e5ff]" />
            <span className="text-sm font-medium text-[#00e5ff] tracking-wide uppercase">Everything You Need</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Powerful features built for
            <span className="block mt-1">
              <span className="text-[#00e5ff]">local business</span> growth
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            ReviewAgent combines cutting-edge AI with deep review platform integrations to give your restaurant or salon a competitive edge in local search and customer trust.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`relative group p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                feature.highlight
                  ? 'bg-[#111118] border-[#00e5ff]/30 hover:border-[#00e5ff]/60 hover:shadow-[0_0_30px_rgba(0,229,255,0.08)]'
                  : 'bg-[#111118] border-white/5 hover:border-[#00e5ff]/20 hover:shadow-[0_0_20px_rgba(0,229,255,0.04)]'
              }`}
            >
              {/* Highlight glow */}
              {feature.highlight && (
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00e5ff]/5 to-transparent pointer-events-none" />
              )}

              {/* Icon */}
              <div
                className={`relative z-10 inline-flex items-center justify-center w-12 h-12 rounded-xl mb-5 ${
                  feature.highlight
                    ? 'bg-[#00e5ff]/15 text-[#00e5ff]'
                    : 'bg-white/5 text-gray-400 group-hover:bg-[#00e5ff]/10 group-hover:text-[#00e5ff]'
                } transition-all duration-300`}
              >
                {feature.icon}
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-base font-semibold text-white mb-3 leading-snug">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Highlight badge */}
              {feature.highlight && (
                <div className="relative z-10 mt-4 pt-4 border-t border-[#00e5ff]/10">
                  <span className="text-xs font-medium text-[#00e5ff] flex items-center gap-1">
                    <Star className="w-3 h-3 fill-[#00e5ff]" />
                    Most used feature
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA banner */}
        <div className="mt-16 p-8 md:p-10 rounded-2xl bg-[#111118] border border-[#00e5ff]/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#00e5ff]/5 via-transparent to-[#00e5ff]/5 pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                Integrates with Google Business Profile in under 2 minutes
              </h3>
              <p className="text-gray-400 text-sm md:text-base">
                No technical knowledge required. Connect your account, set your preferences, and let ReviewAgent handle the rest.
              </p>
            </div>
            <div className="flex items-center gap-4 shrink-0">
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm text-gray-300 font-medium">Live integration</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10">
                <Shield className="w-4 h-4 text-[#00e5ff]" />
                <span className="text-sm text-gray-300 font-medium">GDPR compliant</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
