import { Star } from 'lucide-react';

const stats = [
  { value: '2,400+', label: 'Businesses trust ReviewAgent' },
  { value: '98%', label: 'Response rate achieved' },
  { value: '4.9★', label: 'Average rating improvement' },
  { value: '3 min', label: 'Average response time' },
];

const testimonials = [
  {
    name: 'Marco Bianchi',
    role: 'Owner, Ristorante della Piazza',
    location: 'Milan, Italy',
    avatar: 'MB',
    rating: 5,
    text: 'ReviewAgent transformed how we handle customer feedback. We went from ignoring reviews to responding within minutes. Our Google rating jumped from 4.1 to 4.8 in just two months.',
  },
  {
    name: 'Sofia Müller',
    role: 'Director, Bella Hair Studios',
    location: 'Munich, Germany',
    avatar: 'SM',
    rating: 5,
    text: 'Managing 6 salon locations meant hundreds of reviews every week. With ReviewAgent Business plan, every single review gets a personalised, professional response. Our clients feel genuinely heard.',
  },
  {
    name: 'Aleksandra Nowak',
    role: 'Marketing Manager, Café Kraków',
    location: 'Kraków, Poland',
    avatar: 'AN',
    rating: 5,
    text: 'I was sceptical at first, but the free plan convinced me instantly. The AI responses sound so natural — several customers replied back saying how much they appreciated our thoughtful answers.',
  },
  {
    name: 'Carlos Fernández',
    role: 'Owner, El Rincón Andaluz',
    location: 'Barcelona, Spain',
    avatar: 'CF',
    rating: 5,
    text: 'Before ReviewAgent, negative reviews would sit unanswered for weeks. Now every review — good or bad — gets a smart, brand-aligned response automatically. It has genuinely saved our reputation.',
  },
  {
    name: 'Isabelle Dupont',
    role: 'Founder, Maison de Beauté',
    location: 'Lyon, France',
    avatar: 'ID',
    rating: 5,
    text: 'The Pro plan is exactly what a single-location salon needs. Setup took ten minutes, and by the next morning I already had five auto-responses live on Google. Absolutely brilliant product.',
  },
  {
    name: 'Jan Kowalski',
    role: 'Operations Lead, Burger Block Warsaw',
    location: 'Warsaw, Poland',
    avatar: 'JK',
    rating: 5,
    text: 'Our franchise needed a scalable review solution fast. ReviewAgent delivered from day one. The analytics dashboard alone is worth the subscription — we can finally track sentiment trends across all outlets.',
  },
];

const brandLogos = [
  { name: 'Google Business', abbr: 'G' },
  { name: 'TripAdvisor', abbr: 'TA' },
  { name: 'Trustpilot', abbr: 'TP' },
  { name: 'Yelp', abbr: 'Y' },
  { name: 'Booking.com', abbr: 'B' },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} className="fill-[#00e5ff] text-[#00e5ff]" />
      ))}
    </div>
  );
}

function TestimonialCard({
  name,
  role,
  location,
  avatar,
  rating,
  text,
}: (typeof testimonials)[0]) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-white/[0.07] bg-[#111118] p-6 transition-all duration-300 hover:border-[#00e5ff]/20 hover:shadow-[0_0_24px_rgba(0,229,255,0.06)]">
      <StarRating count={rating} />
      <p className="flex-1 text-sm leading-relaxed text-white/70">&ldquo;{text}&rdquo;</p>
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#00e5ff]/10 text-xs font-bold text-[#00e5ff]">
          {avatar}
        </div>
        <div>
          <p className="text-sm font-semibold text-white">{name}</p>
          <p className="text-xs text-white/40">
            {role} &middot; {location}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function SocialProof() {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0f] py-24">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#00e5ff]/20 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#00e5ff]/20 bg-[#00e5ff]/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-[#00e5ff]">
            Trusted across Europe
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Restaurants & salons already winning
            <br />
            <span className="text-[#00e5ff]">with ReviewAgent</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/50">
            Over 2,400 local businesses across Europe use ReviewAgent to respond faster, protect their reputation, and turn reviews into revenue.
          </p>
        </div>

        {/* Stats row */}
        <div className="mb-20 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-1 rounded-2xl border border-white/[0.06] bg-[#111118] px-4 py-6 text-center"
            >
              <span className="text-3xl font-extrabold tracking-tight text-[#00e5ff]">
                {stat.value}
              </span>
              <span className="text-xs text-white/50">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Platform logos */}
        <div className="mb-20">
          <p className="mb-6 text-center text-xs uppercase tracking-widest text-white/30">
            Connects with all major review platforms
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {brandLogos.map((logo) => (
              <div
                key={logo.name}
                className="flex items-center gap-2 rounded-xl border border-white/[0.07] bg-[#111118] px-5 py-3"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#00e5ff]/10 text-xs font-bold text-[#00e5ff]">
                  {logo.abbr}
                </span>
                <span className="text-sm font-medium text-white/60">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>

        {/* Bottom trust line */}
        <div className="mt-16 flex flex-col items-center gap-3 text-center">
          <div className="flex -space-x-2">
            {['MB', 'SM', 'AN', 'CF', 'ID'].map((initials) => (
              <div
                key={initials}
                className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#0a0a0f] bg-[#00e5ff]/10 text-[10px] font-bold text-[#00e5ff]"
              >
                {initials}
              </div>
            ))}
            <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#0a0a0f] bg-[#111118] text-[10px] font-bold text-white/40">
              +2k
            </div>
          </div>
          <p className="text-sm text-white/40">
            Join <span className="text-white/70 font-medium">2,400+ business owners</span> already automating their review management
          </p>
        </div>
      </div>
    </section>
  );
}
