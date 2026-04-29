import { Star } from 'lucide-react';

const stats = [
  { value: '2,400+', label: 'Businesses Onboarded' },
  { value: '98%', label: 'Response Rate' },
  { value: '4.9★', label: 'Average Rating Boost' },
  { value: '3 min', label: 'Avg. Response Time' },
];

const testimonials = [
  {
    name: 'Marco Bianchi',
    role: 'Owner, Trattoria da Marco',
    location: 'Milan, Italy',
    avatar: 'MB',
    rating: 5,
    text: 'ReviewAgent transformed how we handle customer feedback. Our Google rating went from 4.1 to 4.8 in just two months. The AI responses feel genuinely personal — customers even comment on how thoughtful our replies are.',
  },
  {
    name: 'Sofia Müller',
    role: 'Manager, Glanz Beauty Studio',
    location: 'Berlin, Germany',
    avatar: 'SM',
    rating: 5,
    text: 'We were drowning in unanswered reviews across three locations. With the Business plan, everything is handled automatically. Our team saves at least 8 hours per week, and our online reputation has never looked better.',
  },
  {
    name: 'Aleksandra Nowak',
    role: 'Marketing Director, Café Varsovia',
    location: 'Warsaw, Poland',
    avatar: 'AN',
    rating: 5,
    text: 'I was skeptical about AI writing our responses, but the quality genuinely surprised me. ReviewAgent understands context, tone, and even handles negative reviews with professionalism. Absolutely worth every euro.',
  },
];

const logos = [
  { name: 'Google Business', abbr: 'GB' },
  { name: 'TripAdvisor', abbr: 'TA' },
  { name: 'Yelp', abbr: 'YP' },
  { name: 'Booking.com', abbr: 'BC' },
  { name: 'Trustpilot', abbr: 'TP' },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className="fill-[#00e5ff] text-[#00e5ff]"
        />
      ))}
    </div>
  );
}

export default function SocialProof() {
  return (
    <section className="py-20 bg-[#0a0a0f] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#00e5ff]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold tracking-widest uppercase text-[#00e5ff] mb-3">
            Trusted Across Europe
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Businesses that chose to grow smarter
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto text-base">
            From single-location cafés to multi-city salon chains — ReviewAgent is the reputation engine behind their growth.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-[#111118] border border-white/5 rounded-2xl p-6 text-center hover:border-[#00e5ff]/20 transition-colors duration-300"
            >
              <p className="text-3xl font-extrabold text-[#00e5ff] mb-1">{stat.value}</p>
              <p className="text-sm text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-[#111118] border border-white/5 rounded-2xl p-6 flex flex-col gap-4 hover:border-[#00e5ff]/20 transition-colors duration-300"
            >
              <StarRating count={t.rating} />
              <p className="text-gray-300 text-sm leading-relaxed flex-1">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-2 border-t border-white/5">
                <div className="w-10 h-10 rounded-full bg-[#00e5ff]/10 border border-[#00e5ff]/20 flex items-center justify-center text-[#00e5ff] text-xs font-bold shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">{t.name}</p>
                  <p className="text-gray-500 text-xs">{t.role}</p>
                  <p className="text-gray-600 text-xs">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Platform logos strip */}
        <div className="flex flex-col items-center gap-5">
          <p className="text-xs uppercase tracking-widest text-gray-600 font-medium">
            Integrates with all major review platforms
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {logos.map((logo) => (
              <div
                key={logo.name}
                className="flex items-center gap-2 bg-[#111118] border border-white/5 rounded-xl px-5 py-3 hover:border-[#00e5ff]/20 transition-colors duration-300"
              >
                <span className="w-6 h-6 rounded-md bg-[#00e5ff]/10 text-[#00e5ff] text-[10px] font-bold flex items-center justify-center">
                  {logo.abbr}
                </span>
                <span className="text-gray-400 text-sm font-medium">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
