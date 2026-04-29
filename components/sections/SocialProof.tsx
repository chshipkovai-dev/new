'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const logos = [
  { name: 'Bella Italia', category: 'Restaurant', icon: '🍝' },
  { name: 'Bloom & Co', category: 'Beauty Salon', icon: '💅' },
  { name: 'Morning Brew', category: 'Coffee Chain', icon: '☕' },
  { name: 'Le Bistro', category: 'Restaurant', icon: '🥗' },
  { name: 'Glow Studio', category: 'Wellness', icon: '✨' },
  { name: 'The Daily Grind', category: 'Café', icon: '☕' },
  { name: 'Verde Kitchen', category: 'Restaurant', icon: '🌿' },
  { name: 'Luxe Hair', category: 'Hair Salon', icon: '💇' },
];

const testimonials = [
  {
    name: 'Marco Ferretti',
    role: 'Owner, Bella Italia',
    location: 'Milan, Italy',
    avatar: 'MF',
    avatarColor: 'from-orange-500 to-red-500',
    rating: 5,
    text: 'ReviewAgent transformed how we handle feedback. Before, negative reviews sat unanswered for weeks. Now every review gets a professional, personalised response within minutes. Our Google rating went from 3.9 to 4.6 in just two months.',
    metric: '+0.7 stars in 2 months',
    plan: 'Pro',
  },
  {
    name: 'Sophie Laurent',
    role: 'Manager, Morning Brew',
    location: 'Paris, France',
    avatar: 'SL',
    avatarColor: 'from-cyan-500 to-blue-500',
    rating: 5,
    text: "We have 8 locations across France and manually responding to 200+ monthly reviews was impossible. With the Business plan, all our branches are covered and the AI responses actually sound like us — warm, genuine, and on-brand. It's incredible.",
    metric: '8 locations, 200+ reviews/mo',
    plan: 'Business',
  },
  {
    name: 'Emma van der Berg',
    role: 'Owner, Bloom & Co',
    location: 'Amsterdam, Netherlands',
    avatar: 'EB',
    avatarColor: 'from-pink-500 to-purple-500',
    rating: 5,
    text: "I was sceptical at first — I thought AI responses would feel robotic. But ReviewAgent's tone is surprisingly natural. Clients actually comment that they appreciate our replies. The Free plan got me started and I upgraded to Pro within the first week.",
    metric: 'Upgraded to Pro in week 1',
    plan: 'Pro',
  },
];

const stats = [
  { value: '2,400+', label: 'Businesses trust ReviewAgent' },
  { value: '98%', label: 'Response rate achieved' },
  { value: '4.8★', label: 'Average rating improvement' },
  { value: '<3 min', label: 'Average response time' },
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

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function SocialProof() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section
      ref={sectionRef}
      id="social-proof"
      className="relative py-24 overflow-hidden"
      style={{ backgroundColor: '#0a0a0f' }}
    >
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full opacity-5 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse, #00e5ff 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full border mb-4"
            style={{
              color: '#00e5ff',
              borderColor: 'rgba(0,229,255,0.25)',
              backgroundColor: 'rgba(0,229,255,0.06)',
            }}
          >
            Social Proof
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Trusted by 2,400+ businesses
            <br />
            <span style={{ color: '#00e5ff' }}>across Europe</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Restaurant owners, salon managers, and café chains use ReviewAgent
            to respond faster, sound better, and grow their reputation on
            autopilot.
          </p>
        </motion.div>

        {/* Stats row */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="text-center p-6 rounded-2xl border"
              style={{
                backgroundColor: '#111118',
                borderColor: 'rgba(255,255,255,0.07)',
              }}
            >
              <div
                className="text-3xl lg:text-4xl font-extrabold mb-2"
                style={{ color: '#00e5ff' }}
              >
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Logo ticker */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-20"
        >
          <p className="text-center text-gray-500 text-sm uppercase tracking-widest mb-8">
            Businesses that chose ReviewAgent
          </p>
          <div className="relative overflow-hidden">
            {/* Fade masks */}
            <div
              className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
              style={{
                background:
                  'linear-gradient(to right, #0a0a0f, transparent)',
              }}
            />
            <div
              className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
              style={{
                background:
                  'linear-gradient(to left, #0a0a0f, transparent)',
              }}
            />
            <div className="flex gap-6 animate-[scroll_30s_linear_infinite] w-max">
              {[...logos, ...logos].map((logo, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 px-5 py-3 rounded-xl border flex-shrink-0"
                  style={{
                    backgroundColor: '#111118',
                    borderColor: 'rgba(255,255,255,0.07)',
                  }}
                >
                  <span className="text-xl">{logo.icon}</span>
                  <div>
                    <div className="text-white text-sm font-semibold whitespace-nowrap">
                      {logo.name}
                    </div>
                    <div className="text-gray-500 text-xs">{logo.category}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={itemVariants}
              className="relative flex flex-col p-7 rounded-2xl border group hover:border-cyan-500/30 transition-colors duration-300"
              style={{
                backgroundColor: '#111118',
                borderColor: 'rgba(255,255,255,0.07)',
              }}
            >
              {/* Quote mark */}
              <div
                className="absolute top-6 right-7 text-5xl font-serif leading-none select-none"
                style={{ color: 'rgba(0,229,255,0.12)' }}
              >
                &ldquo;
              </div>

              {/* Rating + plan badge */}
              <div className="flex items-center justify-between mb-4">
                <StarRating rating={t.rating} />
                <span
                  className="text-xs font-semibold px-2.5 py-1 rounded-full"
                  style={{
                    backgroundColor: 'rgba(0,229,255,0.1)',
                    color: '#00e5ff',
                  }}
                >
                  {t.plan} Plan
                </span>
              </div>

              {/* Text */}
              <p className="text-gray-300 text-sm leading-relaxed flex-1 mb-6">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Metric highlight */}
              <div
                className="text-xs font-semibold px-3 py-2 rounded-lg mb-5 inline-block self-start"
                style={{
                  backgroundColor: 'rgba(0,229,255,0.07)',
                  color: '#00e5ff',
                  border: '1px solid rgba(0,229,255,0.15)',
                }}
              >
                📈 {t.metric}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.avatarColor} flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">{t.name}</div>
                  <div className="text-gray-500 text-xs">{t.role}</div>
                  <div className="text-gray-600 text-xs">{t.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom trust line */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-14"
        >
          <p className="text-gray-500 text-sm">
            Reviewed on{' '}
            <span className="text-white font-medium">Google</span>,{' '}
            <span className="text-white font-medium">Product Hunt</span> and{' '}
            <span className="text-white font-medium">Trustpilot</span>
            {' '}·{' '}
            <span style={{ color: '#00e5ff' }}>4.9 / 5.0</span> average rating
          </p>
        </motion.div>
      </div>

      {/* Scroll animation keyframes */}
      <style jsx>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
