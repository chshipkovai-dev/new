'use client';

import { Star, Zap, BarChart3, Globe, Shield, Clock, MessageSquare, ChevronRight } from 'lucide-react';

interface SectionsProps {
  onOpenModal: (plan: string) => void;
}

const features = [
  {
    icon: <Zap size={28} color="#00e5ff" />,
    title: 'AI-Powered Responses',
    description: 'Our AI agent automatically crafts personalized, on-brand replies to every review — in seconds, 24/7, without any manual effort.'
  },
  {
    icon: <Globe size={28} color="#00e5ff" />,
    title: 'Multi-Platform Coverage',
    description: 'Manage Google, TripAdvisor, Yelp, and Facebook reviews from a single dashboard. Never miss a mention across any platform.'
  },
  {
    icon: <BarChart3 size={28} color="#00e5ff" />,
    title: 'Reputation Analytics',
    description: 'Track your average rating trends, response rate, sentiment analysis, and competitor benchmarking with real-time visual reports.'
  },
  {
    icon: <MessageSquare size={28} color="#00e5ff" />,
    title: 'Review Request Automation',
    description: 'Send automated SMS and email review requests to happy customers right after their visit — increasing your 5-star count effortlessly.'
  },
  {
    icon: <Shield size={28} color="#00e5ff" />,
    title: 'Negative Review Alerts',
    description: 'Get instant notifications for 1–2 star reviews so you can personally intervene, resolve issues, and protect your reputation before damage spreads.'
  },
  {
    icon: <Clock size={28} color="#00e5ff" />,
    title: 'Save 10+ Hours Weekly',
    description: 'Stop spending evenings manually replying to reviews. ReviewAgent handles it all, giving you time to focus on running your business.'
  }
];

const testimonials = [
  {
    name: 'Markus Hoffmann',
    role: 'Owner, Gasthaus Zur Linde · Berlin, Germany',
    avatar: 'MH',
    rating: 5,
    text: 'ReviewAgent transformed how we handle guest feedback. Our Google rating went from 4.1 to 4.7 in just three months. The AI replies are so natural that guests think I wrote them personally. Worth every euro.'
  },
  {
    name: 'Ania Kowalska',
    role: 'Manager, Glamour Beauty Studio · Warsaw, Poland',
    avatar: 'AK',
    rating: 5,
    text: 'As a salon owner, I never had time to respond to reviews. ReviewAgent now handles 100% of our responses automatically. Bookings increased by 30% after our rating climbed to 4.9 stars on Google.'
  },
  {
    name: 'Sophie Laurent',
    role: 'Co-Founder, Bistro Lumière · Lyon, France',
    avatar: 'SL',
    rating: 5,
    text: 'We manage three restaurant locations and ReviewAgent covers all of them on one dashboard. The analytics helped us discover which location needed the most attention. Absolute game-changer for multi-location owners.'
  }
];

function FeaturesSection() {
  return (
    <section id="features" className="py-24 px-6" style={{ background: '#0a0a0f' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-4"
            style={{ background: 'rgba(0,229,255,0.1)', color: '#00e5ff' }}
          >
            Features
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Everything you need to dominate
            <span style={{ color: '#00e5ff' }}> your reputation</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#8888aa' }}>
            ReviewAgent gives restaurants and beauty salons across Europe the tools to collect more reviews, respond instantly, and convert reputation into revenue.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-2xl p-6 transition-all duration-300 hover:scale-105"
              style={{
                background: '#111118',
                border: '1px solid rgba(255,255,255,0.06)',
                boxShadow: '0 4px 24px rgba(0,0,0,0.3)'
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ background: 'rgba(0,229,255,0.1)' }}
              >
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#8888aa' }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 px-6" style={{ background: '#0d0d14' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-4"
            style={{ background: 'rgba(0,229,255,0.1)', color: '#00e5ff' }}
          >
            Social Proof
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Trusted by businesses
            <span style={{ color: '#00e5ff' }}> across Europe</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#8888aa' }}>
            See how restaurants and salons are growing their ratings and saving hours every week with ReviewAgent.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-2xl p-6 flex flex-col"
              style={{
                background: '#111118',
                border: '1px solid rgba(255,255,255,0.06)',
                boxShadow: '0 4px 24px rgba(0,0,0,0.3)'
              }}
            >
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={16} fill="#fbbf24" color="#fbbf24" />
                ))}
              </div>
              <p className="text-sm leading-relaxed mb-6 flex-1" style={{ color: '#ccccdd' }}>
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                  style={{ background: 'rgba(0,229,255,0.15)', color: '#00e5ff' }}
                >
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{testimonial.name}</p>
                  <p className="text-xs" style={{ color: '#8888aa' }}>{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTABanner({ onOpenModal }: { onOpenModal: (plan: string) => void }) {
  return (
    <section className="py-24 px-6" style={{ background: '#0a0a0f' }}>
      <div className="max-w-4xl mx-auto">
        <div
          className="rounded-3xl p-10 md:p-16 text-center relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(0,229,255,0.12) 0%, rgba(0,100,200,0.08) 100%)',
            border: '1px solid rgba(0,229,255,0.2)',
            boxShadow: '0 0 80px rgba(0,229,255,0.08)'
          }}
        >
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-1 rounded-full"
            style={{ background: 'linear-gradient(90deg, transparent, #00e5ff, transparent)' }}
          />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Ready to grow your
            <span style={{ color: '#00e5ff' }}> 5-star reputation?</span>
          </h2>
          <p className="text-lg mb-8 max-w-xl mx-auto" style={{ color: '#8888aa' }}>
            Join hundreds of European restaurants and salons using ReviewAgent to automate review management and attract more customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => onOpenModal('pro')}
              className="flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-base transition-all duration-200 hover:scale-105 hover:shadow-lg"
              style={{
                background: '#00e5ff',
                color: '#0a0a0f',
                boxShadow: '0 0 24px rgba(0,229,255,0.4)'
              }}
            >
              Start Free Trial
              <ChevronRight size={18} />
            </button>
            <button
              onClick={() => onOpenModal('business')}
              className="flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-base transition-all duration-200 hover:scale-105"
              style={{
                background: 'rgba(255,255,255,0.06)',
                color: '#ffffff',
                border: '1px solid rgba(255,255,255,0.12)'
              }}
            >
              Book a Demo Call
            </button>
          </div>
          <p className="text-xs mt-6" style={{ color: '#8888aa' }}>
            No credit card required · 14-day free trial · Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-12 px-6" style={{ background: '#080810', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: 'rgba(0,229,255,0.15)' }}
              >
                <Star size={16} fill="#00e5ff" color="#00e5ff" />
              </div>
              <span className="text-lg font-bold" style={{ color: '#00e5ff' }}>ReviewAgent</span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: '#8888aa' }}>
              AI-powered review management for restaurants and beauty salons across Europe. Automate responses, collect more reviews, grow your reputation.
            </p>
            <p className="text-xs mt-4" style={{ color: '#555566' }}>
              © 2025 ReviewAgent by ailnex. All rights reserved.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-2">
              {['Features', 'Pricing', 'Integrations', 'Changelog'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm transition-colors hover:text-white" style={{ color: '#8888aa' }}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              {['About', 'Blog', 'Privacy Policy', 'Terms of Service', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm transition-colors hover:text-white" style={{ color: '#8888aa' }}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div
          className="pt-6 flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          <p className="text-xs" style={{ color: '#555566' }}>
            GDPR compliant · EU data residency · SOC 2 Type II certified
          </p>
          <div className="flex items-center gap-4">
            {['🇩🇪 DE', '🇵🇱 PL', '🇫🇷 FR', '🇳🇱 NL', '🇪🇸 ES'].map((lang) => (
              <span key={lang} className="text-xs" style={{ color: '#555566' }}>{lang}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Sections({ onOpenModal }: SectionsProps) {
  return (
    <>
      <FeaturesSection />
      <TestimonialsSection />
      <CTABanner onOpenModal={onOpenModal} />
      <Footer />
    </>
  );
}

export { FeaturesSection, TestimonialsSection, CTABanner, Footer };
