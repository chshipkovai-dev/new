'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const reviews = [
  {
    id: 'negative',
    label: 'Negative Review',
    badgeColor: 'bg-red-500/20 text-red-400 border border-red-500/30',
    dotColor: 'bg-red-400',
    author: 'Marcus T.',
    rating: 2,
    time: '2 days ago',
    reviewText:
      'Very disappointed with my visit. The pasta was cold and the service was incredibly slow — waited over 40 minutes for our main course. The waiter seemed disinterested and never apologized. For the price, I expected much better. Won\'t be coming back.',
    response:
      'Dear Marcus, thank you for taking the time to share your experience — we\'re truly sorry it didn\'t meet your expectations. Cold pasta and a 40-minute wait are simply not acceptable, and we completely understand your frustration. We\'ve already spoken with our kitchen and front-of-house teams to address these issues directly. We\'d love the opportunity to make this right: please reach out to us at hello@lapiazzarome.com and we\'ll arrange a complimentary visit at your convenience. Your feedback helps us grow, and we hope to welcome you back soon. — The La Piazza Team',
    responseTime: 'Responded in 4 minutes',
  },
  {
    id: 'neutral',
    label: 'Neutral Review',
    badgeColor: 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30',
    dotColor: 'bg-yellow-400',
    author: 'Sophie L.',
    rating: 3,
    time: '5 days ago',
    reviewText:
      'Decent place overall. The coffee was good but the pastries were a bit dry. Atmosphere is nice and staff were friendly enough. Nothing extraordinary but not bad either. Might give it another try.',
    response:
      'Hi Sophie, thank you for stopping by and for your honest feedback! We\'re glad you enjoyed the coffee and the atmosphere. You\'re absolutely right about the pastries — freshness is something we take seriously, and we\'re working with our bakery supplier to improve consistency. We\'d love to impress you on your next visit: ask our barista about our daily fresh-baked specials when you come in. See you soon! — The Brew & Co. Team',
    responseTime: 'Responded in 6 minutes',
  },
  {
    id: 'positive',
    label: 'Positive Review',
    badgeColor: 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30',
    dotColor: 'bg-emerald-400',
    author: 'Elena V.',
    rating: 5,
    time: '1 week ago',
    reviewText:
      'Absolutely loved my experience at Bloom Studio! The team was professional, attentive, and clearly talented. My hair color came out exactly as I envisioned — maybe even better. The salon has a beautiful, relaxing vibe. Booked my next appointment already!',
    response:
      'Elena, your kind words made our whole team smile! 😊 We\'re so thrilled the color came out exactly as you envisioned — our stylists put a lot of care into every consultation to make that happen. We absolutely love having you as a client and can\'t wait to see you at your next appointment. Don\'t forget, refer a friend and you both get 15% off your next service. See you soon! — The Bloom Studio Team',
    responseTime: 'Responded in 3 minutes',
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${
            star <= rating ? 'text-yellow-400' : 'text-gray-600'
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

export default function Demo() {
  const [activeId, setActiveId] = useState<string>('negative');

  const activeReview = reviews.find((r) => r.id === activeId)!;

  return (
    <section id="demo" className="py-24 px-4 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#00e5ff]/3 blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00e5ff]/10 border border-[#00e5ff]/20 text-[#00e5ff] text-sm font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00e5ff] animate-pulse" />
            Live Demo
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            See ReviewAgent in{' '}
            <span className="text-[#00e5ff]">Action</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Real reviews, real responses — generated and posted automatically within minutes.
            Pick a review type to see how ReviewAgent handles it.
          </p>
        </motion.div>

        {/* Tab selector */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {reviews.map((review) => (
            <button
              key={review.id}
              onClick={() => setActiveId(review.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 border ${
                activeId === review.id
                  ? review.badgeColor + ' shadow-lg'
                  : 'bg-[#111118] border-white/10 text-gray-400 hover:border-white/20 hover:text-white'
              }`}
            >
              <span
                className={`w-2 h-2 rounded-full ${
                  activeId === review.id ? review.dotColor : 'bg-gray-600'
                }`}
              />
              {review.label}
            </button>
          ))}
        </motion.div>

        {/* Demo card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="bg-[#111118] border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
          >
            {/* Google Maps header bar */}
            <div className="flex items-center gap-3 px-5 py-3.5 bg-[#0d0d14] border-b border-white/8">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/60" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/60" />
              </div>
              <div className="flex-1 flex items-center gap-2 bg-[#111118] rounded-md px-3 py-1.5 max-w-xs mx-auto">
                <svg className="w-3.5 h-3.5 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                </svg>
                <span className="text-gray-500 text-xs truncate">google.com/maps/reviews</span>
              </div>
            </div>

            <div className="p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Original review */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Customer Review</span>
                  </div>
                  <div className="bg-[#0a0a0f] rounded-xl p-5 border border-white/8 h-full">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                        {activeReview.author.charAt(0)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-white font-semibold text-sm">{activeReview.author}</span>
                          <span className="text-gray-600 text-xs flex-shrink-0">{activeReview.time}</span>
                        </div>
                        <StarRating rating={activeReview.rating} />
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">{activeReview.reviewText}</p>
                  </div>
                </div>

                {/* AI response */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest">AI-Generated Response</span>
                    <span className="flex items-center gap-1.5 text-xs text-[#00e5ff] bg-[#00e5ff]/10 border border-[#00e5ff]/20 px-2.5 py-1 rounded-full">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00e5ff] opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00e5ff]" />
                      </span>
                      Auto-posted
                    </span>
                  </div>
                  <div className="bg-[#0a0a0f] rounded-xl p-5 border border-[#00e5ff]/20 h-full relative">
                    <div className="absolute top-3 right-3">
                      <svg className="w-4 h-4 text-[#00e5ff]/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                      </svg>
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-6 h-6 rounded-full bg-[#00e5ff]/20 border border-[#00e5ff]/30 flex items-center justify-center">
                        <svg className="w-3 h-3 text-[#00e5ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <span className="text-[#00e5ff] text-xs font-semibold">ReviewAgent</span>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">{activeReview.response}</p>
                    <div className="mt-4 pt-4 border-t border-white/8 flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-emerald-400 text-xs font-medium">{activeReview.responseTime}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom stats bar */}
              <div className="mt-6 pt-6 border-t border-white/8 grid grid-cols-3 gap-4">
                {[
                  { label: 'Avg. Response Time', value: '< 5 min', icon: '⚡' },
                  { label: 'Response Rate', value: '100%', icon: '✅' },
                  { label: 'Tone Matched', value: 'Always', icon: '🎯' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-lg mb-0.5">{stat.icon}</div>
                    <div className="text-white font-bold text-lg">{stat.value}</div>
                    <div className="text-gray-500 text-xs">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Disclaimer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-gray-600 text-sm mt-6"
        >
          * Example responses shown above. ReviewAgent learns your brand voice and personalizes every reply.
        </motion.p>
      </div>
    </section>
  );
}
