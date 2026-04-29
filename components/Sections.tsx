'use client';

import { Star, Zap, BarChart2, Globe, Shield, Clock, MessageSquare, ChevronRight, Mail, Twitter, Linkedin, Facebook } from 'lucide-react';

// ─── Features ───────────────────────────────────────────────────────────────

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <Zap size={24} />,
    title: 'Instant AI Responses',
    description:
      'ReviewAgent crafts personalised, on-brand replies to every Google, Yelp and TripAdvisor review within minutes — not days.',
  },
  {
    icon: <BarChart2 size={24} />,
    title: 'Sentiment Analytics',
    description:
      'Track star-rating trends, keyword clusters and customer mood over time with a real-time dashboard built for busy owners.',
  },
  {
    icon: <Globe size={24} />,
    title: 'Multi-Platform Coverage',
    description:
      'One inbox for Google Business, Facebook, Yelp, TripAdvisor and Booksy — no more switching between seven browser tabs.',
  },
  {
    icon: <Shield size={24} />,
    title: 'GDPR-Compliant by Design',
    description:
      'All data is processed on EU servers. We never sell customer data and comply fully with GDPR and the Polish UODO regulation.',
  },
  {
    icon: <Clock size={24} />,
    title: 'Automated Review Requests',
    description:
      'Send post-visit SMS or email nudges automatically via your POS or booking system to grow your review volume by up to 3×.',
  },
  {
    icon: <MessageSquare size={24} />,
    title: 'Team Collaboration',
    description:
      'Assign reviews to staff, add internal notes and set escalation rules so nothing falls through the cracks across locations.',
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-24" style={{ background: '#0a0a0f' }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase mb-4 px-4 py-1.5 rounded-full"
            style={{ color: '#00e5ff', background: 'rgba(0,229,255,0.08)', border: '1px solid rgba(0,229,255,0.2)' }}
          >
            Platform Features
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Everything you need to{' '}
            <span style={{ color: '#00e5ff' }}>dominate local search</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#8b8ba7' }}>
            ReviewAgent handles the entire review lifecycle — from collection to response — so you can focus on running your business.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="group rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1"
              style={{
                background: '#111118',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.border = '1px solid rgba(0,229,255,0.3)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 0 32px rgba(0,229,255,0.06)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.border = '1px solid rgba(255,255,255,0.06)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
              }}
            >
              <div
                className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-5"
                style={{ background: 'rgba(0,229,255,0.1)', color: '#00e5ff' }}
              >
                {f.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">{f.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#8b8ba7' }}>
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials ────────────────────────────────────────────────────────────

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  location: string;
  rating: number;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      'ReviewAgent saved us at least 8 hours a week. Our average Google rating jumped from 4.1 to 4.7 in just three months. The AI responses feel genuinely human — guests keep complimenting our attentiveness.',
    author: 'Markus Hoffmann',
    role: 'Owner, Gasthaus Rheingold',
    location: 'Frankfurt, Germany',
    rating: 5,
    avatar: 'MH',
  },
  {
    quote:
      'As a beauty salon with four locations in Warsaw, managing reviews manually was a nightmare. Now every review gets a reply within 15 minutes and our booking rate from Google has gone up 34%.',
    author: 'Karolina Wiśniewska',
    role: 'Director, Glam & Go Salons',
    location: 'Warsaw, Poland',
    rating: 5,
    avatar: 'KW',
  },
  {
    quote:
      "We tested three competitors before ReviewAgent. Nothing else matched the quality of AI replies or the clarity of the analytics dashboard. It's now a non-negotiable part of our operations stack.",
    author: 'Sophie Leclerc',
    role: 'Operations Manager, Brasserie du Marché',
    location: 'Lyon, France',
    rating: 5,
    avatar: 'SL',
  },
];

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="py-24"
      style={{ background: '#0d0d14' }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase mb-4 px-4 py-1.5 rounded-full"
            style={{ color: '#00e5ff', background: 'rgba(0,229,255,0.08)', border: '1px solid rgba(0,229,255,0.2)' }}
          >
            Social Proof
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Trusted by 1,200+ businesses{' '}
            <span style={{ color: '#00e5ff' }}>across Europe</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: '#8b8ba7' }}>
            From single-location restaurants in Berlin to beauty salon chains in Kraków — here's what our customers say.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="flex flex-col rounded-2xl p-7"
              style={{
                background: '#111118',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, s) => (
                  <Star key={s} size={16} fill="#f59e0b" color="#f59e0b" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm leading-relaxed flex-1 mb-6" style={{ color: '#c4c4d4' }}>
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                  style={{ background: 'rgba(0,229,255,0.15)', color: '#00e5ff' }}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{t.author}</p>
                  <p className="text-xs" style={{ color: '#8b8ba7' }}>
                    {t.role} · {t.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust bar */}
        <div
          className="mt-12 rounded-2xl px-8 py-6 flex flex-wrap items-center justify-center gap-10"
          style={{ background: '#111118', border: '1px solid rgba(255,255,255,0.06)' }}
        >
          {[
            { value: '1,200+', label: 'Active businesses' },
            { value: '4.8 ★', label: 'Average rating lift' },
            { value: '3×', label: 'More reviews collected' },
            { value: '< 15 min', label: 'Average response time' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-3xl font-bold mb-1" style={{ color: '#00e5ff' }}>
                {stat.value}
              </p>
              <p className="text-sm" style={{ color: '#8b8ba7' }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA Banner ──────────────────────────────────────────────────────────────

interface CTABannerProps {
  onOpenModal: (plan: string) => void;
}

export function CTABanner({ onOpenModal }: CTABannerProps) {
  return (
    <section className="py-20" style={{ background: '#0a0a0f' }}>
      <div className="max-w-4xl mx-auto px-6">
        <div
          className="rounded-3xl px-8 py-14 text-center relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(0,229,255,0.12) 0%, rgba(0,229,255,0.03) 100%)',
            border: '1px solid rgba(0,229,255,0.25)',
          }}
        >
          {/* Glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(0,229,255,0.12) 0%, transparent 70%)',
            }}
          />

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight relative z-10">
            Ready to automate your{' '}
            <span style={{ color: '#00e5ff' }}>reputation?</span>
          </h2>
          <p className="text-lg mb-10 max-w-xl mx-auto relative z-10" style={{ color: '#8b8ba7' }}>
            Join 1,200+ European restaurants and salons that respond to every review — automatically.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <button
              onClick={() => onOpenModal('pro')}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-base transition-all duration-200 hover:brightness-110 active:scale-95"
              style={{ background: '#00e5ff', color: '#0a0a0f' }}
            >
              Start Free Trial
              <ChevronRight size={18} />
            </button>
            <button
              onClick={() => onOpenModal('business')}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-base transition-all duration-200 hover:brightness-110 active:scale-95"
              style={{
                background: 'transparent',
                color: '#00e5ff',
                border: '1px solid rgba(0,229,255,0.4)',
              }}
            >
              Book a Demo Call
            </button>
          </div>
          <p className="mt-5 text-xs relative z-10" style={{ color: '#8b8ba7' }}>
            No credit card required · Cancel anytime · GDPR compliant
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ──────────────────────────────────────────────────────────────────

export function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    {
      heading: 'Product',
      items: [
        { label: 'Features', href: '#features' },
        { label: 'Pricing', href: '#pricing' },
        { label: 'Integrations', href: '#' },
        { label: 'Changelog', href: '#' },
      ],
    },
    {
      heading: 'Company',
      items: [
        { label: 'About Us', href: '#' },
        { label: 'Blog', href: '#' },
        { label: 'Careers', href: '#' },
        { label: 'Press Kit', href: '#' },
      ],
    },
    {
      heading: 'Legal',
      items: [
        { label: 'Privacy Policy', href: '#' },
        { label: 'Terms of Service', href: '#' },
        { label: 'GDPR', href: '#' },
        { label: 'Cookie Policy', href: '#' },
      ],
    },
  ];

  return (
    <footer style={{ background: '#0d0d14', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: '#00e5ff' }}
              >
                <Star size={16} fill="#0a0a0f" color="#0a0a0f" />
              </div>
              <span className="text-lg font-bold text-white">ReviewAgent</span>
            </div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: '#8b8ba7' }}>
              AI-powered review management for restaurants and beauty salons across Europe.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: <Twitter size={16} />, href: '#' },
                { icon: <Linkedin size={16} />, href: '#' },
                { icon: <Facebook size={16} />, href: '#' },
                { icon: <Mail size={16} />, href: 'mailto:hello@reviewagent.ai' },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:brightness-125"
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    color: '#8b8ba7',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = '#00e5ff';
                    (e.currentTarget as HTMLAnchorElement).style.border = '1px solid rgba(0,229,255,0.3)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = '#8b8ba7';
                    (e.currentTarget as HTMLAnchorElement).style.border = '1px solid rgba(255,255,255,0.08)';
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {links.map((col, i) => (
            <div key={i}>
              <h4 className="text-sm font-semibold text-white mb-5 tracking-wide">{col.heading}</h4>
              <ul className="space-y-3">
                {col.items.map((item, j) => (
                  <li key={j}>
                    <a
                      href={item.href}
                      className="text-sm transition-colors duration-150 hover:text-white"
                      style={{ color: '#8b8ba7' }}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          <p className="text-xs" style={{ color: '#8b8ba7' }}>
            © {currentYear} ReviewAgent by ailnex. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <div
              className="w-2 h-2 rounded-full"
              style={{ background: '#22c55e', boxShadow: '0 0 6px #22c55e' }}
            />
            <span className="text-xs" style={{ color: '#8b8ba7' }}>
              All systems operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
