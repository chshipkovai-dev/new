'use client';

import { useRef, useEffect, useState } from 'react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  country: string;
  countryFlag: string;
  businessType: 'restaurant' | 'salon';
  avatar: string;
  rating: number;
  text: string;
  metric: string;
  metricLabel: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Marco Bianchi',
    role: 'Owner',
    company: 'Osteria del Porto',
    country: 'Italy',
    countryFlag: '🇮🇹',
    businessType: 'restaurant',
    avatar: 'MB',
    rating: 5,
    text: 'ReviewAgent completely transformed how we handle customer feedback. Before, I was spending 2 hours every morning replying to Google and TripAdvisor reviews. Now the AI handles 90% of responses overnight, and they sound more professional than what I was writing myself. Our average rating jumped from 4.1 to 4.7 in just six weeks.',
    metric: '+0.6★',
    metricLabel: 'Rating increase in 6 weeks',
  },
  {
    id: 2,
    name: 'Elena Vasquez',
    role: 'Operations Manager',
    company: 'Belleza & Co. Salons',
    country: 'Spain',
    countryFlag: '🇪🇸',
    businessType: 'salon',
    avatar: 'EV',
    rating: 5,
    text: 'We manage 8 salon locations across Madrid and Barcelona. Keeping up with reviews across all of them was a nightmare. ReviewAgent monitors every platform simultaneously and flags anything that needs human attention. Our response rate went from 34% to 98% and clients actually mention in new reviews how responsive we are. The Pro plan pays for itself every month.',
    metric: '98%',
    metricLabel: 'Review response rate',
  },
  {
    id: 3,
    name: 'Klaus Hoffmann',
    role: 'CEO',
    company: 'Gasthaus Gruppe GmbH',
    country: 'Germany',
    countryFlag: '🇩🇪',
    businessType: 'restaurant',
    avatar: 'KH',
    rating: 5,
    text: 'As a group operating 12 restaurants in Berlin and Hamburg, reputation management at scale was our biggest challenge. We tried hiring a part-time social media manager — costly and inconsistent. ReviewAgent on the Business plan gave us unified analytics, sentiment trend reports, and AI replies that match each restaurant\'s tone. Bookings via Google increased 23% in Q1 compared to last year.',
    metric: '+23%',
    metricLabel: 'Bookings via Google in Q1',
  },
];

const stats = [
  { value: '4,200+', label: 'Businesses onboarded' },
  { value: '98.4%', label: 'Average response rate' },
  { value: '0.5★', label: 'Avg rating improvement' },
  { value: '11h', label: 'Saved per week per location' },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${
            i < rating ? 'text-[#00e5ff]' : 'text-white/20'
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function AvatarPlaceholder({ initials, businessType }: { initials: string; businessType: 'restaurant' | 'salon' }) {
  const bgColor = businessType === 'restaurant' ? 'from-[#00e5ff]/30 to-[#00e5ff]/10' : 'from-purple-500/30 to-purple-500/10';
  return (
    <div
      className={`w-12 h-12 rounded-full bg-gradient-to-br ${bgColor} border border-white/10 flex items-center justify-center text-white font-semibold text-sm flex-shrink-0`}
    >
      {initials}
    </div>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="flex flex-col justify-between bg-[#111118] border border-white/[0.07] rounded-2xl p-6 h-full hover:border-[#00e5ff]/20 transition-all duration-300 group relative overflow-hidden">
      {/* Subtle glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00e5ff]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />

      {/* Top: rating + metric */}
      <div className="flex items-start justify-between mb-4">
        <StarRating rating={testimonial.rating} />
        <div className="text-right">
          <div className="text-[#00e5ff] font-bold text-xl leading-tight">{testimonial.metric}</div>
          <div className="text-white/40 text-xs leading-tight mt-0.5 max-w-[110px] text-right">{testimonial.metricLabel}</div>
        </div>
      </div>

      {/* Quote */}
      <p className="text-white/70 text-sm leading-relaxed flex-1 mb-6">
        &ldquo;{testimonial.text}&rdquo;
      </p>

      {/* Bottom: avatar + info */}
      <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
        <AvatarPlaceholder initials={testimonial.avatar} businessType={testimonial.businessType} />
        <div className="flex-1 min-w-0">
          <div className="text-white font-semibold text-sm">{testimonial.name}</div>
          <div className="text-white/50 text-xs">
            {testimonial.role}, {testimonial.company}
          </div>
        </div>
        <div className="text-lg" title={testimonial.country}>
          {testimonial.countryFlag}
        </div>
      </div>
    </div>
  );
}

function StatCounter({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-3xl md:text-4xl font-bold text-white mb-1">
        <span className="bg-gradient-to-r from-[#00e5ff] to-[#00b8d9] bg-clip-text text-transparent">
          {value}
        </span>
      </div>
      <div className="text-white/50 text-sm">{label}</div>
    </div>
  );
}

export default function SocialProof() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="social-proof"
      ref={sectionRef}
      className="relative py-24 bg-[#0a0a0f] overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#00e5ff]/[0.03] rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-[#00e5ff]/10 border border-[#00e5ff]/20 rounded-full px-4 py-1.5 mb-6">
            <svg className="w-3.5 h-3.5 text-[#00e5ff]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-[#00e5ff] text-xs font-semibold uppercase tracking-widest">Customer Stories</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Trusted by hospitality
            <br />
            <span className="bg-gradient-to-r from-[#00e5ff] to-[#00b8d9] bg-clip-text text-transparent">
              businesses across Europe
            </span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Restaurants, cafes, and beauty salons use ReviewAgent to protect their reputation
            and win more customers through consistent, intelligent responses.
          </p>
        </div>

        {/* Stats row */}
        <div
          className={`grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16 p-8 bg-[#111118] border border-white/[0.07] rounded-2xl transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {stats.map((stat) => (
            <StatCounter key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>

        {/* Trust logos / platform badges */}
        <div
          className={`mt-16 text-center transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-white/30 text-sm uppercase tracking-widest mb-6">Monitors reviews on</p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            {[
              { name: 'Google', icon: 'G' },
              { name: 'TripAdvisor', icon: 'TA' },
              { name: 'Yelp', icon: 'Y' },
              { name: 'Booking.com', icon: 'B' },
              { name: 'Trustpilot', icon: 'TP' },
            ].map((platform) => (
              <div
                key={platform.name}
                className="flex items-center gap-2 text-white/30 hover:text-white/60 transition-colors duration-200"
              >
                <div className="w-7 h-7 rounded-lg bg-white/[0.05] border border-white/[0.08] flex items-center justify-center">
                  <span className="text-xs font-bold">{platform.icon}</span>
                </div>
                <span className="text-sm font-medium">{platform.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
