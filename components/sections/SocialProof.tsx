'use client';

import { useEffect, useRef, useState } from 'react';

const logos = [
  { name: 'Bella Italia', category: 'Restaurant', initials: 'BI' },
  { name: 'Kaffehaus Wien', category: 'Coffee Shop', initials: 'KW' },
  { name: 'Studio Lumière', category: 'Beauty Salon', initials: 'SL' },
  { name: 'Le Petit Bistro', category: 'Restaurant', initials: 'LB' },
  { name: 'Nordic Brew', category: 'Coffee Shop', initials: 'NB' },
  { name: 'Velvet Touch', category: 'Beauty Salon', initials: 'VT' },
  { name: 'Casa Madrid', category: 'Restaurant', initials: 'CM' },
  { name: 'Bloom & Co', category: 'Beauty Salon', initials: 'BC' },
];

const testimonials = [
  {
    id: 1,
    name: 'Marco Bellini',
    role: 'Owner, Bella Italia',
    location: 'Milan, Italy',
    avatar: 'MB',
    rating: 5,
    text: 'ReviewAgent transformed how we handle customer feedback. Before, I spent 2 hours every morning replying to Google reviews. Now it happens automatically, and our average rating went from 3.8 to 4.7 in just three months.',
    metric: '+0.9 stars in 3 months',
    plan: 'Pro',
  },
  {
    id: 2,
    name: 'Sophie Müller',
    role: 'Manager, Nordic Brew Chain',
    location: 'Hamburg, Germany',
    avatar: 'SM',
    rating: 5,
    text: 'We run 14 coffee shops across Germany. Managing reviews at scale was a nightmare. ReviewAgent handles all locations seamlessly. The AI responses sound genuinely human — our customers love the personal touch.',
    metric: '14 locations automated',
    plan: 'Business',
  },
  {
    id: 3,
    name: 'Isabelle Fontaine',
    role: 'Owner, Studio Lumière',
    location: 'Paris, France',
    avatar: 'IF',
    rating: 5,
    text: 'As a beauty salon owner, reputation is everything. ReviewAgent helped us respond to every review within minutes, even on weekends. One client told me she booked because of how thoughtfully we responded to a negative review.',
    metric: '100% response rate',
    plan: 'Pro',
  },
  {
    id: 4,
    name: 'Carlos Ruiz',
    role: 'Owner, Casa Madrid',
    location: 'Barcelona, Spain',
    avatar: 'CR',
    rating: 5,
    text: "I was skeptical about AI-generated responses feeling robotic. The first week I double-checked every reply — they were perfect. Warm, professional, and specific to each review. I haven't looked back since.",
    metric: 'Saves 15h/month',
    plan: 'Pro',
  },
  {
    id: 5,
    name: 'Anna Kowalski',
    role: 'Operations Director, Velvet Touch',
    location: 'Warsaw, Poland',
    avatar: 'AK',
    rating: 5,
    text: 'Our Google ranking improved significantly after we started responding to all reviews consistently. ReviewAgent made that possible without hiring extra staff. The ROI is undeniable — we saw 23% more bookings from Google.',
    metric: '+23% bookings from Google',
    plan: 'Business',
  },
  {
    id: 6,
    name: 'Thomas Bergmann',
    role: 'Owner, Kaffehaus Wien',
    location: 'Vienna, Austria',
    avatar: 'TB',
    rating: 5,
    text: "Started with the Free plan to test it out. Within two weeks I upgraded to Pro. The difference in engagement and the time I save every day is incredible. Best investment I've made for the café this year.",
    metric: 'Upgraded within 2 weeks',
    plan: 'Pro',
  },
];

const stats = [
  { value: '2,400+', label: 'Businesses trust ReviewAgent' },
  { value: '1.2M+', label: 'Reviews auto-responded' },
  { value: '4.8★', label: 'Average rating improvement' },
  { value: '94%', label: 'Customer satisfaction score' },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-600'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), index * 100);
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [index]);

  const planColors: Record<string, string> = {
    Free: 'text-gray-400 bg-gray-400/10 border-gray-400/20',
    Pro: 'text-[#00e5ff] bg-[#00e5ff]/10 border-[#00e5ff]/20',
    Business: 'text-purple-400 bg-purple-400/10 border-purple-400/20',
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="h-full bg-[#111118] border border-white/8 rounded-2xl p-6 flex flex-col gap-4 hover:border-[#00e5ff]/20 hover:bg-[#111118]/80 transition-all duration-300 group">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00e5ff]/20 to-[#00e5ff]/5 border border-[#00e5ff]/20 flex items-center justify-center flex-shrink-0">
              <span className="text-[#00e5ff] text-xs font-bold">{testimonial.avatar}</span>
            </div>
            <div>
              <p className="text-white text-sm font-semibold">{testimonial.name}</p>
              <p className="text-gray-500 text-xs">{testimonial.role}</p>
            </div>
          </div>
          <span className={`text-xs font-medium px-2 py-0.5 rounded-full border ${planColors[testimonial.plan]} flex-shrink-0`}>
            {testimonial.plan}
          </span>
        </div>

        <StarRating rating={testimonial.rating} />

        <p className="text-gray-400 text-sm leading-relaxed flex-1">
          &ldquo;{testimonial.text}&rdquo;
        </p>

        <div className="flex items-center justify-between pt-3 border-t border-white/5">
          <div className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-[#00e5ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-gray-600 text-xs">{testimonial.location}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            <span className="text-emerald-400 text-xs font-medium">{testimonial.metric}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SocialProof() {
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);
  const [logosVisible, setLogosVisible] = useState(false);
  const logosRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const statsObserver = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsVisible(true); },
      { threshold: 0.2 }
    );
    const logosObserver = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setLogosVisible(true); },
      { threshold: 0.2 }
    );
    if (statsRef.current) statsObserver.observe(statsRef.current);
    if (logosRef.current) logosObserver.observe(logosRef.current);
    return () => { statsObserver.disconnect(); logosObserver.disconnect(); };
  }, []);

  return (
    <section className="py-24 px-4 relative overflow-hidden" id="social-proof">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#00e5ff]/3 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#00e5ff]/20 bg-[#00e5ff]/5 mb-6">
            <svg className="w-3.5 h-3.5 text-[#00e5ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
            <span className="text-[#00e5ff] text-xs font-medium tracking-wide uppercase">Trusted by businesses across Europe</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5">
            Real results from real
            <span className="text-[#00e5ff]"> business owners</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Over 2,400 restaurants, coffee shops, and salons across Europe use ReviewAgent to automate their reputation management.
          </p>
        </div>

        {/* Stats bar */}
        <div
          ref={statsRef}
          className={`grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16 transition-all duration-700 ${
            statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-[#111118] border border-white/8 rounded-2xl p-5 text-center"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-gray-500 text-xs md:text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Trusted logos */}
        <div
          ref={logosRef}
          className={`mb-16 transition-all duration-700 ${
            logosVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="text-center text-gray-600 text-xs uppercase tracking-widest mb-6">Businesses using ReviewAgent</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {logos.map((logo, i) => (
              <div
                key={i}
                className="flex items-center gap-2.5 px-4 py-2.5 bg-[#111118] border border-white/8 rounded-xl hover:border-white/15 transition-colors duration-200"
              >
                <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#00e5ff]/20 to-[#00e5ff]/5 border border-[#00e5ff]/15 flex items-center justify-center flex-shrink-0">
                  <span className="text-[#00e5ff] text-[9px] font-bold">{logo.initials}</span>
                </div>
                <div>
                  <p className="text-white text-xs font-medium leading-tight">{logo.name}</p>
                  <p className="text-gray-600 text-[10px] leading-tight">{logo.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
          ))}
        </div>

        {/* Google rating badge */}
        <div className="mt-12 flex justify-center">
          <div className="inline-flex items-center gap-4 px-6 py-4 bg-[#111118] border border-white/8 rounded-2xl">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span className="text-white text-sm font-medium">Google Reviews</span>
            </div>
            <div className="w-px h-5 bg-white/10" />
            <div className="flex items-center gap-1.5">
              <StarRating rating={5} />
              <span className="text-white text-sm font-bold">4.9</span>
              <span className="text-gray-500 text-sm">(847 reviews)</span>
            </div>
            <div className="w-px h-5 bg-white/10" />
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-emerald-400 text-xs font-medium">Verified</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
