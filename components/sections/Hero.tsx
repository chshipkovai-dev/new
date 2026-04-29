'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import Modal from '@/components/ui/Modal';
import LeadForm from '@/components/ui/LeadForm';

const ROTATING_WORDS = ['Restaurants', 'Coffee Shops', 'Beauty Salons', 'Hotels', 'Barbershops'];

const STATS = [
  { value: '2,400+', label: 'Businesses using ReviewAgent' },
  { value: '98%', label: 'Positive reply rate' },
  { value: '4.9★', label: 'Average rating boost' },
];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<'free' | 'pro' | 'business'>('pro');

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  const handleCTAClick = (plan: 'free' | 'pro' | 'business' = 'pro') => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  return (
    <>
      <section
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-24 pb-16 px-4"
        style={{ background: '#0a0a0f' }}
      >
        {/* Radial glow background */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
        >
          <div
            className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full opacity-20 blur-[120px]"
            style={{ background: 'radial-gradient(ellipse, #00e5ff 0%, transparent 70%)' }}
          />
          <div
            className="absolute bottom-0 right-[-10%] w-[500px] h-[400px] rounded-full opacity-10 blur-[100px]"
            style={{ background: 'radial-gradient(ellipse, #00e5ff 0%, transparent 70%)' }}
          />
          {/* Grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                'linear-gradient(#00e5ff 1px, transparent 1px), linear-gradient(90deg, #00e5ff 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center gap-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <Badge>🚀 Now with AI-powered tone detection</Badge>
          </motion.div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="flex flex-col items-center gap-2"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight">
              Auto-Reply to Google Reviews
            </h1>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
              for{' '}
              <span
                className="relative inline-block"
                style={{ color: '#00e5ff' }}
              >
                <motion.span
                  key={wordIndex}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="inline-block"
                >
                  {ROTATING_WORDS[wordIndex]}
                </motion.span>
                <span
                  className="absolute bottom-1 left-0 w-full h-[3px] rounded-full"
                  style={{ background: '#00e5ff', opacity: 0.5 }}
                />
              </span>
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="max-w-2xl text-lg sm:text-xl text-gray-400 leading-relaxed"
          >
            ReviewAgent connects to your Google Business Profile and instantly replies to every review — 5-star praise or tough criticism — with a personalised, on-brand response. No manual work. Ever.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <Button
              variant="primary"
              size="lg"
              onClick={() => handleCTAClick('pro')}
            >
              Start Free — No Credit Card
            </Button>
            <Button
              variant="ghost"
              size="lg"
              onClick={() => {
                const demo = document.getElementById('demo');
                if (demo) demo.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              See Demo Response ↓
            </Button>
          </motion.div>

          {/* Trust line */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-sm text-gray-600"
          >
            Trusted by 2,400+ local businesses across Europe · GDPR compliant · Cancel anytime
          </motion.p>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
            className="w-full mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4"
          >
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center gap-1 rounded-2xl border border-white/5 py-5 px-4"
                style={{ background: '#111118' }}
              >
                <span
                  className="text-3xl font-bold"
                  style={{ color: '#00e5ff' }}
                >
                  {stat.value}
                </span>
                <span className="text-sm text-gray-400 text-center">{stat.label}</span>
              </div>
            ))}
          </motion.div>

          {/* Hero Demo Preview Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65, ease: 'easeOut' }}
            className="w-full max-w-2xl mt-4 rounded-2xl border border-white/8 overflow-hidden shadow-2xl"
            style={{ background: '#111118' }}
          >
            {/* Window chrome */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5" style={{ background: '#0d0d14' }}>
              <span className="w-3 h-3 rounded-full bg-red-500/70" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <span className="w-3 h-3 rounded-full bg-green-500/70" />
              <span className="ml-3 text-xs text-gray-500 font-mono">Google Business — Reviews</span>
            </div>

            <div className="p-5 flex flex-col gap-4 text-left">
              {/* Customer review */}
              <div className="flex gap-3">
                <div
                  className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white"
                  style={{ background: '#1e3a5f' }}
                >
                  M
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-white">Marco Bianchi</span>
                    <span className="text-xs text-gray-500">2 days ago</span>
                  </div>
                  <div className="flex gap-0.5">
                    {[1, 2].map((s) => (
                      <svg key={s} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    ))}
                    {[3, 4, 5].map((s) => (
                      <svg key={s} className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    ))}
                  </div>
                  <p className="text-sm text-gray-300">Waited 40 minutes for a table even with a reservation. Staff seemed unaware of the booking. Food was okay but the experience left a lot to be desired.</p>
                </div>
              </div>

              {/* AI reply */}
              <div
                className="rounded-xl p-4 border flex flex-col gap-2"
                style={{ background: '#0d1a1a', borderColor: 'rgba(0,229,255,0.15)' }}
              >
                <div className="flex items-center gap-2">
                  <span
                    className="text-xs font-semibold px-2 py-0.5 rounded-full"
                    style={{ background: 'rgba(0,229,255,0.12)', color: '#00e5ff' }}
                  >
                    ✦ ReviewAgent replied
                  </span>
                  <span className="text-xs text-gray-500">· just now · auto-generated</span>
                </div>
                <p className="text-sm text-gray-200 leading-relaxed">
                  Dear Marco, thank you for taking the time to share your experience. We sincerely apologise for the confusion with your reservation — this falls well below the standard we hold ourselves to. Your feedback has been passed directly to our floor manager. We would love the opportunity to make this right; please reach out to us at hello@ristorantebianchi.it and we will arrange a complimentary visit. Warm regards, The Team.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Get Started with ReviewAgent"
      >
        <LeadForm
          defaultPlan={selectedPlan}
          onSuccess={() => setIsModalOpen(false)}
        />
      </Modal>
    </>
  );
}
