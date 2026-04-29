'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import Modal from '@/components/ui/Modal';
import LeadForm from '@/components/ui/LeadForm';

const stats = [
  { value: '4.8★', label: 'Average rating boost' },
  { value: '2 min', label: 'Setup time' },
  { value: '10x', label: 'Faster responses' },
  { value: '98%', label: 'Customer satisfaction' },
];

const floatingReviews = [
  {
    id: 1,
    author: 'Maria K.',
    rating: 5,
    text: 'Amazing coffee and atmosphere!',
    response: 'Thank you, Maria! We look forward to seeing you again ☕',
    avatar: 'MK',
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 2,
    author: 'James R.',
    rating: 2,
    text: 'Waited 40 minutes for my order...',
    response: 'We sincerely apologize, James. We\'ve addressed this with our team and would love to make it right.',
    avatar: 'JR',
    color: 'from-blue-500 to-cyan-500',
  },
];

export default function Hero() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<'free' | 'pro' | 'business'>('free');
  const [activeReview, setActiveReview] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveReview((prev) => (prev + 1) % floatingReviews.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleCTAClick = (plan: 'free' | 'pro' | 'business' = 'free') => {
    setSelectedPlan(plan);
    setModalOpen(true);
  };

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0f]">
        {/* Background grid */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0,229,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.08) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Radial glow top */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-[#00e5ff] opacity-[0.06] blur-[120px] pointer-events-none" />

        {/* Radial glow bottom-left */}
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-purple-600 opacity-[0.05] blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left column — text */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Badge text="AI-Powered · Google Reviews · Auto-Respond" />
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.08] tracking-tight text-white"
              >
                Never miss a{' '}
                <span
                  className="text-transparent bg-clip-text"
                  style={{
                    backgroundImage: 'linear-gradient(90deg, #00e5ff 0%, #7b6fff 100%)',
                  }}
                >
                  Google review
                </span>{' '}
                again
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-6 text-xl text-gray-400 leading-relaxed max-w-lg"
              >
                ReviewAgent automatically responds to your restaurant, salon or café Google reviews — in seconds, in any language, with your brand voice. Start free today.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-10 flex flex-col sm:flex-row gap-4"
              >
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => handleCTAClick('free')}
                >
                  Start for Free — No Card Required
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => handleCTAClick('pro')}
                >
                  See Pro Features
                </Button>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="mt-4 text-sm text-gray-600"
              >
                Trusted by 500+ businesses across Europe · GDPR-compliant
              </motion.p>

              {/* Stats row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6"
              >
                {stats.map((stat) => (
                  <div key={stat.label} className="flex flex-col">
                    <span className="text-3xl font-bold text-[#00e5ff]">{stat.value}</span>
                    <span className="mt-1 text-sm text-gray-500">{stat.label}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right column — animated review demo */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative flex flex-col gap-6"
            >
              {/* Google card mockup */}
              <div className="rounded-2xl border border-white/10 bg-[#111118] p-6 shadow-2xl">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-400 to-orange-500 flex items-center justify-center text-white font-bold text-sm">G</div>
                  <div>
                    <p className="text-white font-semibold text-sm">Google Reviews</p>
                    <p className="text-gray-500 text-xs">Live dashboard preview</p>
                  </div>
                  <div className="ml-auto flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-green-400 text-xs font-medium">Auto-responding</span>
                  </div>
                </div>

                {floatingReviews.map((review, idx) => (
                  <motion.div
                    key={review.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{
                      opacity: activeReview === idx ? 1 : 0,
                      y: activeReview === idx ? 0 : 10,
                    }}
                    transition={{ duration: 0.5 }}
                    className={`absolute top-6 left-6 right-6 ${activeReview === idx ? 'relative' : 'pointer-events-none'}`}
                    style={{ position: activeReview === idx ? 'relative' : 'absolute' }}
                  >
                    {/* Customer review */}
                    <div className="rounded-xl border border-white/8 bg-white/5 p-4 mb-3">
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${review.color} flex items-center justify-center text-white text-xs font-bold`}>
                          {review.avatar}
                        </div>
                        <div>
                          <p className="text-white text-sm font-medium">{review.author}</p>
                          <div className="flex gap-0.5">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <span
                                key={i}
                                className={`text-xs ${i < review.rating ? 'text-yellow-400' : 'text-gray-600'}`}
                              >
                                ★
                              </span>
                            ))}
                          </div>
                        </div>
                        <span className="ml-auto text-xs text-gray-600">2 min ago</span>
                      </div>
                      <p className="text-gray-300 text-sm">{review.text}</p>
                    </div>

                    {/* AI response */}
                    <div className="rounded-xl border border-[#00e5ff]/20 bg-[#00e5ff]/5 p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-6 h-6 rounded-full bg-[#00e5ff] flex items-center justify-center">
                          <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </div>
                        <span className="text-[#00e5ff] text-xs font-semibold">ReviewAgent AI · Auto-replied</span>
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: [0, 1, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                          className="ml-auto text-xs text-gray-500"
                        >
                          ✦ generating...
                        </motion.span>
                      </div>
                      <p className="text-gray-200 text-sm leading-relaxed">{review.response}</p>
                    </div>
                  </motion.div>
                ))}

                {/* Pagination dots */}
                <div className="flex justify-center gap-2 mt-5">
                  {floatingReviews.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveReview(idx)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        activeReview === idx ? 'bg-[#00e5ff] w-6' : 'bg-gray-700 hover:bg-gray-500'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Bottom floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#111118] px-5 py-4 shadow-xl"
              >
                <div className="flex -space-x-2">
                  {['bg-pink-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500'].map((color, i) => (
                    <div
                      key={i}
                      className={`w-8 h-8 rounded-full ${color} border-2 border-[#111118] flex items-center justify-center text-white text-xs font-bold`}
                    >
                      {['A', 'B', 'C', 'D'][i]}
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-white text-sm font-medium">500+ happy business owners</p>
                  <p className="text-gray-500 text-xs">joined this month across Europe</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0f] to-transparent pointer-events-none" />
      </section>

      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Get started with ReviewAgent"
      >
        <LeadForm
          initialPlan={selectedPlan}
          onSuccess={() => setModalOpen(false)}
        />
      </Modal>
    </>
  );
}
