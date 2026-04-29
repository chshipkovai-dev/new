'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Review {
  id: string;
  author: string;
  avatar: string;
  rating: number;
  date: string;
  text: string;
  type: 'positive' | 'negative' | 'neutral';
  response: string;
  responseTime: string;
}

const reviews: Review[] = [
  {
    id: '1',
    author: 'Sarah Mitchell',
    avatar: 'SM',
    rating: 2,
    date: '2 hours ago',
    text: 'Waited 40 minutes for our table even with a reservation. The pasta was cold and the waiter seemed completely overwhelmed. Really disappointing experience for the price we paid.',
    type: 'negative',
    response: 'Dear Sarah, thank you for taking the time to share your experience. We sincerely apologize for the long wait and the cold pasta — this is absolutely not the standard we hold ourselves to. Our team was understaffed that evening, and we completely understand your frustration. We would love to make this right: please reach out to us directly at hello@restaurant.com and we will arrange a complimentary dinner for you and your guest. Your feedback helps us improve, and we hope to restore your confidence in us.',
    responseTime: 'Responded in 4 minutes',
  },
  {
    id: '2',
    author: 'Marco Bianchi',
    avatar: 'MB',
    rating: 5,
    date: '1 day ago',
    text: 'Absolutely fantastic experience from start to finish! The tiramisu was the best I have had outside of Italy. Staff were warm and attentive. Will definitely be back with the whole family.',
    type: 'positive',
    response: 'Grazie mille, Marco! Your kind words truly made our day. We are so happy you loved the tiramisu — our pastry chef will be thrilled to hear that! We look forward to welcoming you and your family back very soon. Next time, ask for our off-menu limoncello dessert — we think you will love it just as much!',
    responseTime: 'Responded in 3 minutes',
  },
  {
    id: '3',
    author: 'Lena Hofmann',
    avatar: 'LH',
    rating: 3,
    date: '3 days ago',
    text: 'The food was decent but nothing special. Ambiance is nice but the music was too loud for a conversation. Service was friendly though. Might try again on a quieter night.',
    type: 'neutral',
    response: 'Thank you for the honest feedback, Lena! We really appreciate you mentioning the music — it is something we have heard from a couple of guests recently and we are actively adjusting the volume levels during dinner service. We are glad the team made a good impression and we would love to show you a better experience on your next visit. Weekday evenings tend to be much calmer — we hope to see you again soon!',
    responseTime: 'Responded in 5 minutes',
  },
];

const typeLabels: Record<Review['type'], { label: string; color: string }> = {
  negative: { label: 'Negative Review', color: 'text-red-400 bg-red-400/10 border-red-400/20' },
  positive: { label: 'Positive Review', color: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20' },
  neutral: { label: 'Neutral Review', color: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20' },
};

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${star <= rating ? 'text-yellow-400' : 'text-gray-600'}`}
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
  const [activeId, setActiveId] = useState<string>('1');
  const [isTyping, setIsTyping] = useState(false);
  const [showResponse, setShowResponse] = useState(true);

  const activeReview = reviews.find((r) => r.id === activeId)!;

  const handleSelectReview = (id: string) => {
    if (id === activeId) return;
    setShowResponse(false);
    setIsTyping(true);
    setActiveId(id);
    setTimeout(() => {
      setIsTyping(false);
      setShowResponse(true);
    }, 1200);
  };

  return (
    <section id="demo" className="py-24 px-4 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#00e5ff]/5 rounded-full blur-[120px]" />
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
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase text-[#00e5ff] bg-[#00e5ff]/10 border border-[#00e5ff]/20 rounded-full mb-4">
            Live Demo
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            See ReviewAgent in{' '}
            <span className="text-[#00e5ff]">action</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Select any review type below and watch ReviewAgent craft a perfect, on-brand response in seconds — just like it does for your business, 24/7.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="grid lg:grid-cols-2 gap-6"
        >
          {/* Left panel: Review selector + review card */}
          <div className="flex flex-col gap-4">
            {/* Selector tabs */}
            <div className="flex gap-2 flex-wrap">
              {reviews.map((review) => {
                const meta = typeLabels[review.type];
                const isActive = review.id === activeId;
                return (
                  <button
                    key={review.id}
                    onClick={() => handleSelectReview(review.id)}
                    className={`px-4 py-2 text-sm font-medium rounded-lg border transition-all duration-200 ${
                      isActive
                        ? `${meta.color} ring-1 ring-current`
                        : 'text-gray-400 bg-[#111118] border-white/10 hover:border-white/20 hover:text-white'
                    }`}
                  >
                    {meta.label}
                  </button>
                );
              })}
            </div>

            {/* Review card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeReview.id + '-review'}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="flex-1 bg-[#111118] border border-white/10 rounded-2xl p-6"
              >
                {/* Google header */}
                <div className="flex items-center gap-2 mb-5">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[#4285F4] font-bold text-lg">G</span>
                    <span className="text-xs text-gray-500 font-medium">Google Review</span>
                  </div>
                  <span className="ml-auto text-xs text-gray-600">{activeReview.date}</span>
                </div>

                {/* Author */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00e5ff]/30 to-purple-500/30 flex items-center justify-center text-sm font-semibold text-white border border-white/10">
                    {activeReview.avatar}
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">{activeReview.author}</p>
                    <StarRating rating={activeReview.rating} />
                  </div>
                  <div className="ml-auto">
                    <span className={`px-2 py-0.5 text-xs font-medium rounded border ${typeLabels[activeReview.type].color}`}>
                      {activeReview.rating}/5
                    </span>
                  </div>
                </div>

                {/* Review text */}
                <p className="text-gray-300 text-sm leading-relaxed">
                  &ldquo;{activeReview.text}&rdquo;
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Stats strip */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { value: '< 5 min', label: 'Avg response time' },
                { value: '98%', label: 'Positive sentiment' },
                { value: '24/7', label: 'Always on' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-[#111118] border border-white/10 rounded-xl p-3 text-center"
                >
                  <p className="text-[#00e5ff] font-bold text-lg">{stat.value}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right panel: AI response */}
          <div className="flex flex-col">
            <div className="bg-[#111118] border border-white/10 rounded-2xl p-6 flex-1 flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#00e5ff]/15 border border-[#00e5ff]/30 flex items-center justify-center">
                    <svg className="w-4 h-4 text-[#00e5ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                    </svg>
                  </div>
                  <span className="text-white text-sm font-semibold">ReviewAgent Response</span>
                </div>

                <AnimatePresence mode="wait">
                  {isTyping ? (
                    <motion.div
                      key="typing"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-1.5"
                    >
                      <span className="text-xs text-[#00e5ff]">Generating</span>
                      <div className="flex gap-1">
                        {[0, 1, 2].map((i) => (
                          <motion.div
                            key={i}
                            className="w-1.5 h-1.5 rounded-full bg-[#00e5ff]"
                            animate={{ opacity: [0.3, 1, 0.3] }}
                            transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.2 }}
                          />
                        ))}
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="done"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-1.5"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span className="text-xs text-emerald-400 font-medium">{activeReview.responseTime}</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Response body */}
              <div className="flex-1 relative">
                <AnimatePresence mode="wait">
                  {isTyping ? (
                    <motion.div
                      key="skeleton"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="space-y-3"
                    >
                      {[100, 85, 90, 70, 95, 60].map((width, i) => (
                        <motion.div
                          key={i}
                          className="h-3 bg-white/5 rounded-full"
                          style={{ width: `${width}%` }}
                          animate={{ opacity: [0.4, 0.8, 0.4] }}
                          transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.1 }}
                        />
                      ))}
                    </motion.div>
                  ) : showResponse ? (
                    <motion.div
                      key={activeReview.id + '-response'}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {activeReview.response}
                      </p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>

              {/* Footer actions */}
              <div className="mt-6 pt-5 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Auto-posted to Google
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                    </svg>
                    Tone-matched
                  </span>
                </div>
                <div className="flex gap-2">
                  <button className="p-1.5 text-gray-500 hover:text-white transition-colors rounded-lg hover:bg-white/5">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                    </svg>
                  </button>
                  <button className="p-1.5 text-gray-500 hover:text-[#00e5ff] transition-colors rounded-lg hover:bg-[#00e5ff]/10">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* CTA nudge */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-4 p-4 bg-[#00e5ff]/5 border border-[#00e5ff]/20 rounded-xl flex items-center justify-between gap-4"
            >
              <p className="text-sm text-gray-400">
                <span className="text-white font-medium">Ready to automate your reviews?</span>{' '}
                Set up takes less than 5 minutes.
              </p>
              <a
                href="#pricing"
                className="shrink-0 px-4 py-2 text-sm font-semibold text-[#00e5ff] bg-[#00e5ff]/10 border border-[#00e5ff]/30 rounded-lg hover:bg-[#00e5ff]/20 transition-colors whitespace-nowrap"
              >
                Get started
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
