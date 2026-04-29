'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  text: string;
  sentiment: 'positive' | 'negative' | 'neutral';
  response: string;
  responseTime: string;
}

const reviews: Review[] = [
  {
    id: 'negative-1',
    author: 'Marcus Weber',
    rating: 2,
    date: '2 days ago',
    text: 'Waited 40 minutes for our food on a Tuesday evening. The pasta was cold when it arrived and the waiter barely acknowledged us. Very disappointing experience for the price.',
    sentiment: 'negative',
    response: 'Dear Marcus, thank you for taking the time to share your experience. We sincerely apologize for the long wait and the quality of your pasta — this is absolutely not the standard we hold ourselves to. Our kitchen was understaffed that evening and we fell short. We would love the opportunity to make this right: please reach out to us directly at hello@bistro-example.com and we will arrange a complimentary dinner for you. Your feedback helps us improve every day.',
    responseTime: 'Responded in 4 minutes'
  },
  {
    id: 'positive-1',
    author: 'Sophie Laurent',
    rating: 5,
    date: '1 day ago',
    text: 'Absolutely stunning evening! The truffle risotto was divine, our server Elena was incredibly attentive and the atmosphere was perfect for our anniversary dinner. Will definitely be back!',
    sentiment: 'positive',
    response: 'Thank you so much for your wonderful words, Sophie! We are thrilled your anniversary dinner was everything you hoped for. Elena will be delighted to hear your kind mention — she truly goes above and beyond for every guest. We look forward to celebrating many more special moments with you. See you soon!',
    responseTime: 'Responded in 3 minutes'
  },
  {
    id: 'neutral-1',
    author: 'Jakub Novak',
    rating: 3,
    date: '3 days ago',
    text: 'Decent place overall. Food was good but nothing exceptional. Service was a bit slow during peak hours. The interior is nice and cozy. Might return to try the weekend brunch menu.',
    sentiment: 'neutral',
    response: 'Hi Jakub, thank you for your honest feedback! We appreciate you taking the time to review us. You are right that we can be slower during peak hours — we are actively working on optimising our service flow. We would love to impress you more on your next visit: our weekend brunch is indeed a highlight and we hope to see you there. Thank you for giving us another chance!',
    responseTime: 'Responded in 6 minutes'
  }
];

const sentimentLabels = {
  negative: { label: 'Negative Review', color: 'text-red-400', bg: 'bg-red-400/10 border-red-400/20' },
  positive: { label: 'Positive Review', color: 'text-emerald-400', bg: 'bg-emerald-400/10 border-emerald-400/20' },
  neutral: { label: 'Neutral Review', color: 'text-yellow-400', bg: 'bg-yellow-400/10 border-yellow-400/20' }
};

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

function TypingIndicator() {
  return (
    <div className="flex items-center gap-1 px-4 py-3">
      <span className="w-2 h-2 rounded-full bg-[#00e5ff]/60 animate-bounce" style={{ animationDelay: '0ms' }} />
      <span className="w-2 h-2 rounded-full bg-[#00e5ff]/60 animate-bounce" style={{ animationDelay: '150ms' }} />
      <span className="w-2 h-2 rounded-full bg-[#00e5ff]/60 animate-bounce" style={{ animationDelay: '300ms' }} />
    </div>
  );
}

export default function Demo() {
  const [activeReview, setActiveReview] = useState<string>('negative-1');
  const [isGenerating, setIsGenerating] = useState(false);
  const [showResponse, setShowResponse] = useState<Record<string, boolean>>({
    'negative-1': true,
    'positive-1': false,
    'neutral-1': false
  });

  const currentReview = reviews.find((r) => r.id === activeReview)!;

  const handleSelectReview = (id: string) => {
    if (id === activeReview) return;
    setActiveReview(id);
    if (!showResponse[id]) {
      setIsGenerating(true);
      setTimeout(() => {
        setIsGenerating(false);
        setShowResponse((prev) => ({ ...prev, [id]: true }));
      }, 1800);
    }
  };

  const handleRegenerate = () => {
    setIsGenerating(true);
    setShowResponse((prev) => ({ ...prev, [activeReview]: false }));
    setTimeout(() => {
      setIsGenerating(false);
      setShowResponse((prev) => ({ ...prev, [activeReview]: true }));
    }, 1800);
  };

  return (
    <section id="demo" className="py-24 bg-[#0a0a0f] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#00e5ff]/3 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#00e5ff]/20 bg-[#00e5ff]/5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00e5ff] animate-pulse" />
            <span className="text-[#00e5ff] text-sm font-medium tracking-wide">Live Demo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            See ReviewAgent in{' '}
            <span className="text-[#00e5ff]">action</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Select any review below and watch ReviewAgent craft a perfect, personalised response in seconds — automatically posted to Google.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-start">
          {/* Left: Review selector */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <p className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-5">
              Choose a review scenario
            </p>
            {reviews.map((review) => {
              const sentiment = sentimentLabels[review.sentiment];
              const isActive = activeReview === review.id;
              return (
                <button
                  key={review.id}
                  onClick={() => handleSelectReview(review.id)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 group ${
                    isActive
                      ? 'border-[#00e5ff]/40 bg-[#111118] shadow-lg shadow-[#00e5ff]/5'
                      : 'border-white/5 bg-[#111118]/60 hover:border-white/10 hover:bg-[#111118]'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-gray-600 to-gray-700 flex items-center justify-center text-white text-sm font-semibold flex-shrink-0">
                        {review.author.charAt(0)}
                      </div>
                      <div>
                        <p className="text-white font-medium text-sm">{review.author}</p>
                        <p className="text-gray-500 text-xs">{review.date}</p>
                      </div>
                    </div>
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${sentiment.bg} ${sentiment.color} flex-shrink-0`}>
                      {sentiment.label}
                    </span>
                  </div>
                  <StarRating rating={review.rating} />
                  <p className="mt-3 text-gray-400 text-sm leading-relaxed line-clamp-2">
                    {review.text}
                  </p>
                  {isActive && (
                    <div className="mt-3 flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#00e5ff]" />
                      <span className="text-[#00e5ff] text-xs font-medium">Currently viewing</span>
                    </div>
                  )}
                </button>
              );
            })}
          </motion.div>

          {/* Right: Response display */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="sticky top-6"
          >
            {/* Browser chrome mockup */}
            <div className="rounded-2xl border border-white/8 bg-[#111118] overflow-hidden shadow-2xl">
              {/* Top bar */}
              <div className="flex items-center gap-3 px-4 py-3 border-b border-white/5 bg-[#0d0d14]">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/60" />
                </div>
                <div className="flex-1 flex items-center gap-2 bg-white/5 rounded-md px-3 py-1.5">
                  <svg className="w-3.5 h-3.5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                  </svg>
                  <span className="text-gray-500 text-xs">business.google.com/reviews</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-[#00e5ff] font-medium bg-[#00e5ff]/10 px-2.5 py-1 rounded-full border border-[#00e5ff]/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00e5ff] animate-pulse" />
                  ReviewAgent Active
                </div>
              </div>

              <div className="p-5">
                {/* Original review */}
                <div className="mb-5">
                  <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">Customer Review</p>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentReview.id + '-review'}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.3 }}
                      className="bg-white/3 rounded-xl p-4 border border-white/5"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-500 to-gray-600 flex items-center justify-center text-white text-xs font-bold">
                            {currentReview.author.charAt(0)}
                          </div>
                          <div>
                            <p className="text-white text-sm font-medium">{currentReview.author}</p>
                            <StarRating rating={currentReview.rating} />
                          </div>
                        </div>
                        <span className="text-gray-500 text-xs">{currentReview.date}</span>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed">{currentReview.text}</p>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* AI Response */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-md bg-[#00e5ff]/20 flex items-center justify-center">
                        <svg className="w-3 h-3 text-[#00e5ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">AI Response</p>
                    </div>
                    {showResponse[activeReview] && !isGenerating && (
                      <button
                        onClick={handleRegenerate}
                        className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-[#00e5ff] transition-colors duration-200 group"
                      >
                        <svg className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                        Regenerate
                      </button>
                    )}
                  </div>

                  <AnimatePresence mode="wait">
                    {isGenerating ? (
                      <motion.div
                        key="generating"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="bg-[#00e5ff]/5 rounded-xl border border-[#00e5ff]/15 min-h-[120px] flex flex-col justify-center"
                      >
                        <div className="flex items-center gap-3 px-4 py-3 border-b border-[#00e5ff]/10">
                          <div className="w-5 h-5 rounded-full bg-[#00e5ff]/20 flex items-center justify-center">
                            <svg className="w-3 h-3 text-[#00e5ff] animate-spin" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                          </div>
                          <span className="text-[#00e5ff] text-xs font-medium">Analysing review sentiment...</span>
                        </div>
                        <TypingIndicator />
                      </motion.div>
                    ) : showResponse[activeReview] ? (
                      <motion.div
                        key={currentReview.id + '-response'}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.4 }}
                        className="bg-[#00e5ff]/5 rounded-xl border border-[#00e5ff]/15 overflow-hidden"
                      >
                        <div className="flex items-center gap-2 px-4 py-2.5 border-b border-[#00e5ff]/10">
                          <div className="w-4 h-4 rounded-full bg-[#00e5ff]/20 flex items-center justify-center">
                            <svg className="w-2.5 h-2.5 text-[#00e5ff]" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-[#00e5ff] text-xs font-medium">Owner response — generated by ReviewAgent</span>
                        </div>
                        <div className="p-4">
                          <p className="text-gray-200 text-sm leading-relaxed">{currentReview.response}</p>
                        </div>
                        <div className="flex items-center justify-between px-4 py-2.5 border-t border-[#00e5ff]/10 bg-[#00e5ff]/3">
                          <div className="flex items-center gap-1.5">
                            <svg className="w-3.5 h-3.5 text-[#00e5ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-[#00e5ff]/70 text-xs">{currentReview.responseTime}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                            <span className="text-emerald-400 text-xs font-medium">Auto-posted to Google</span>
                          </div>
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Stats below demo */}
            <div className="grid grid-cols-3 gap-3 mt-4">
              {[
                { value: '< 5 min', label: 'Avg. response time' },
                { value: '98%', label: 'Positive sentiment' },
                { value: '4.9★', label: 'Avg. rating boost' }
              ].map((stat) => (
                <div key={stat.label} className="bg-[#111118] rounded-xl border border-white/5 p-3 text-center">
                  <p className="text-[#00e5ff] font-bold text-lg">{stat.value}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
