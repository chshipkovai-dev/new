import { Star } from 'lucide-react';

const stats = [
  { value: '2,400+', label: 'Businesses across Europe' },
  { value: '98%', label: 'Response rate improvement' },
  { value: '4.8★', label: 'Average rating increase' },
  { value: '3 min', label: 'Average response time' },
];

const testimonials = [
  {
    name: 'Marco Rossi',
    role: 'Owner, Trattoria Bella Roma',
    location: 'Milan, Italy',
    avatar: 'MR',
    rating: 5,
    text: 'ReviewAgent transformed how we handle customer feedback. We went from ignoring Google reviews to responding to every single one within minutes. Our rating jumped from 3.9 to 4.7 in just two months.',
  },
  {
    name: 'Sophie Müller',
    role: 'Manager, Glamour Salon Group',
    location: 'Berlin, Germany',
    avatar: 'SM',
    rating: 5,
    text: 'Managing reviews across our 4 salon locations was a nightmare before ReviewAgent. Now everything is handled automatically and the AI responses actually sound like us. Our clients are impressed with how quickly we reply.',
  },
  {
    name: 'Carlos Fernández',
    role: 'Owner, Restaurante El Sol',
    location: 'Barcelona, Spain',
    avatar: 'CF',
    rating: 5,
    text: 'I was skeptical about AI writing our responses, but the quality is genuinely impressive. It understands context and tone perfectly. We\'ve saved at least 5 hours per week and our review engagement is up 220%.',
  },
];

const logos = [
  { name: 'Google Business', abbr: 'G' },
  { name: 'Tripadvisor', abbr: 'TA' },
  { name: 'Yelp', abbr: 'Y' },
  { name: 'Trustpilot', abbr: 'TP' },
  { name: 'Booking.com', abbr: 'B' },
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
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00e5ff] opacity-[0.03] rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold tracking-widest text-[#00e5ff] uppercase mb-3">
            Trusted by local businesses
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Join 2,400+ restaurants and salons
            <span className="block text-[#00e5ff]">already growing with ReviewAgent</span>
          </h2>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-[#111118] border border-white/[0.06] rounded-2xl p-6 text-center hover:border-[#00e5ff]/20 transition-colors duration-300"
            >
              <p className="text-3xl font-bold text-[#00e5ff] mb-1">{stat.value}</p>
              <p className="text-sm text-white/50">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-[#111118] border border-white/[0.06] rounded-2xl p-6 flex flex-col gap-4 hover:border-[#00e5ff]/20 transition-colors duration-300 group"
            >
              {/* Rating */}
              <StarRating count={t.rating} />

              {/* Text */}
              <p className="text-white/70 text-sm leading-relaxed flex-1">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-white/[0.06]">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00e5ff]/20 to-[#00e5ff]/5 border border-[#00e5ff]/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-bold text-[#00e5ff]">{t.avatar}</span>
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">{t.name}</p>
                  <p className="text-white/40 text-xs">{t.role}</p>
                  <p className="text-white/30 text-xs">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Platform integrations */}
        <div className="text-center">
          <p className="text-white/30 text-sm mb-6 uppercase tracking-widest font-medium">
            Works with all major review platforms
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4">
            {logos.map((logo) => (
              <div
                key={logo.name}
                className="flex items-center gap-2 bg-[#111118] border border-white/[0.06] rounded-xl px-5 py-3 hover:border-[#00e5ff]/20 transition-colors duration-300"
              >
                <div className="w-6 h-6 rounded-md bg-[#00e5ff]/10 flex items-center justify-center">
                  <span className="text-[10px] font-bold text-[#00e5ff]">{logo.abbr}</span>
                </div>
                <span className="text-white/60 text-sm font-medium">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
