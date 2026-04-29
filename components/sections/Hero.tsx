'use client';

import { useState } from 'react';

const STATS = [
  { value: '4.8★', label: 'Average rating boost' },
  { value: '3×', label: 'More reviews collected' },
  { value: '90%', label: 'Response automation' },
  { value: '2 min', label: 'Setup time' },
];

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold"
      style={{ background: 'rgba(0,229,255,0.08)', color: '#00e5ff', border: '1px solid rgba(0,229,255,0.2)' }}
    >
      {children}
    </span>
  );
}

interface ButtonProps {
  variant?: 'primary' | 'ghost';
  size?: 'lg' | 'md';
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}
function Button({ onClick, className = '', style, children }: ButtonProps) {
  return (
    <button onClick={onClick} className={`transition-all duration-200 ${className}`} style={style}>
      {children}
    </button>
  );
}

function LeadForm({ defaultPlan, onSuccess }: { defaultPlan: string; onSuccess: () => void }) {
  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    await new Promise(r => setTimeout(r, 800));
    setSubmitting(false);
    onSuccess();
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        type="email"
        required
        placeholder="your@email.com"
        value={email}
        onChange={e => setEmail(e.target.value)}
        className="w-full px-4 py-3 rounded-xl text-white placeholder-gray-500 outline-none focus:ring-2 focus:ring-[#00e5ff]"
        style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
      />
      <div className="text-sm text-gray-400">
        Plan: <span className="text-white font-medium capitalize">{defaultPlan}</span>
      </div>
      <button
        type="submit"
        disabled={submitting}
        className="w-full py-3 rounded-xl text-sm font-semibold transition-opacity"
        style={{ background: '#00e5ff', color: '#0a0a0f', opacity: submitting ? 0.7 : 1 }}
      >
        {submitting ? 'Starting...' : 'Start Free'}
      </button>
    </form>
  );
}

function Modal({
  isOpen,
  onClose,
  title,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4" onClick={onClose}>
      <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.7)' }} />
      <div
        className="relative w-full max-w-md rounded-2xl p-6"
        style={{ background: '#111118', border: '1px solid rgba(0,229,255,0.15)' }}
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white text-xl leading-none">
            ×
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

export function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<'free' | 'pro' | 'business'>('free');

  function handleCTA() {
    setSelectedPlan('free');
    setIsModalOpen(true);
  }

  function handleSuccess() {
    setIsModalOpen(false);
    window.location.href = '/thank-you';
  }

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 pt-24 pb-16"
      style={{ background: '#0a0a0f' }}
    >
      {/* Ambient glow background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full opacity-20 blur-[120px]"
          style={{ background: 'radial-gradient(ellipse, #00e5ff 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-0 right-[-15%] w-[600px] h-[400px] rounded-full opacity-10 blur-[100px]"
          style={{ background: 'radial-gradient(ellipse, #00e5ff 0%, transparent 70%)' }}
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(#00e5ff 1px, transparent 1px), linear-gradient(90deg, #00e5ff 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col items-center text-center">
        {/* Badge */}
        <div className="mb-6">
          <Badge>
            <span
              className="inline-block w-2 h-2 rounded-full mr-2 animate-pulse"
              style={{ background: '#00e5ff' }}
            />
            Now live across Europe — Restaurants &amp; Salons
          </Badge>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight max-w-4xl mb-6">
          Your AI Agent That{' '}
          <span className="relative inline-block" style={{ color: '#00e5ff' }}>
            Handles Every Review
            <span
              className="absolute -bottom-1 left-0 w-full h-[3px] rounded-full opacity-60"
              style={{ background: 'linear-gradient(90deg, #00e5ff, transparent)' }}
            />
          </span>{' '}
          — While You Run Your Business
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-2xl mb-10 leading-relaxed">
          ReviewAgent reads, responds, and escalates customer feedback on Google, Tripadvisor, and
          Yelp — 24/7, in any language. Built for European restaurants and beauty salons.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-14 w-full max-w-md sm:max-w-none sm:w-auto">
          <Button
            variant="primary"
            size="lg"
            onClick={handleCTA}
            className="text-base font-semibold px-8 py-4 rounded-xl shadow-lg"
            style={{
              background: '#00e5ff',
              color: '#0a0a0f',
              boxShadow: '0 0 32px rgba(0,229,255,0.35)',
            }}
          >
            Start Free — No Credit Card
          </Button>
          <Button
            variant="ghost"
            size="lg"
            onClick={() => {
              document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-base font-semibold px-8 py-4 rounded-xl border text-white"
            style={{ borderColor: 'rgba(255,255,255,0.15)' }}
          >
            See How It Works →
          </Button>
        </div>

        {/* Social trust line */}
        <p className="text-sm text-gray-500 mb-10">
          Trusted by{' '}
          <span className="text-white font-medium">500+ businesses</span>{' '}
          in Germany, Spain, France, Italy &amp; the Netherlands
        </p>

        {/* Stats row */}
        <div
          className="w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden mb-16"
          style={{ background: 'rgba(255,255,255,0.06)' }}
        >
          {STATS.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center py-6 px-4"
              style={{ background: '#111118' }}
            >
              <span className="text-3xl font-extrabold mb-1" style={{ color: '#00e5ff' }}>
                {stat.value}
              </span>
              <span className="text-xs text-gray-400 text-center leading-snug">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Hero visual: mock dashboard card */}
        <div
          className="relative w-full max-w-3xl rounded-2xl overflow-hidden border"
          style={{
            background: '#111118',
            borderColor: 'rgba(0,229,255,0.15)',
            boxShadow: '0 0 80px rgba(0,229,255,0.08), 0 30px 60px rgba(0,0,0,0.5)',
          }}
        >
          {/* Window chrome */}
          <div
            className="flex items-center gap-2 px-4 py-3 border-b"
            style={{ borderColor: 'rgba(255,255,255,0.06)' }}
          >
            <span className="w-3 h-3 rounded-full" style={{ background: '#ff5f57' }} />
            <span className="w-3 h-3 rounded-full" style={{ background: '#febc2e' }} />
            <span className="w-3 h-3 rounded-full" style={{ background: '#28c840' }} />
            <span className="ml-4 text-xs text-gray-500 font-mono">
              ReviewAgent Dashboard — La Bella Cucina, Berlin
            </span>
          </div>

          {/* Dashboard body */}
          <div className="p-6">
            <div className="grid grid-cols-3 gap-4 mb-6">
              {[
                { label: 'New Reviews', value: '12', delta: '+4 today', color: '#00e5ff' },
                { label: 'Auto-Replied', value: '11', delta: '91% automated', color: '#a78bfa' },
                { label: 'Avg Rating', value: '4.9★', delta: '↑ 0.3 this month', color: '#34d399' },
              ].map((card, i) => (
                <div
                  key={i}
                  className="rounded-xl p-4 flex flex-col gap-1"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
                >
                  <span className="text-xs text-gray-500">{card.label}</span>
                  <span className="text-2xl font-bold text-white">{card.value}</span>
                  <span className="text-xs font-medium" style={{ color: card.color }}>{card.delta}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              {[
                {
                  platform: 'Google',
                  author: 'Maria K.',
                  country: '🇩🇪',
                  rating: 5,
                  text: 'Amazing pasta and incredible service! Will definitely come back.',
                  reply:
                    'Thank you so much, Maria! We are thrilled you enjoyed your visit. See you soon at La Bella Cucina! 🍝',
                  status: 'Replied',
                  statusColor: '#34d399',
                  time: '2m ago',
                },
                {
                  platform: 'Tripadvisor',
                  author: 'James O.',
                  country: '🇬🇧',
                  rating: 3,
                  text: 'Good food but the wait was a bit long on Friday evening.',
                  reply:
                    'Hi James, thank you for the honest feedback! Friday evenings are our busiest — we are adding staff from next week. Hope to see you again!',
                  status: 'Escalated',
                  statusColor: '#fbbf24',
                  time: '18m ago',
                },
              ].map((review, i) => (
                <div
                  key={i}
                  className="rounded-xl p-4"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div className="flex items-center gap-2">
                      <span
                        className="text-xs font-semibold px-2 py-0.5 rounded-full"
                        style={{ background: 'rgba(0,229,255,0.1)', color: '#00e5ff' }}
                      >
                        {review.platform}
                      </span>
                      <span className="text-sm text-white font-medium">
                        {review.country} {review.author}
                      </span>
                      <span className="text-yellow-400 text-xs">
                        {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-xs text-gray-500">{review.time}</span>
                      <span
                        className="text-xs font-medium px-2 py-0.5 rounded-full"
                        style={{ background: `${review.statusColor}18`, color: review.statusColor }}
                      >
                        {review.status}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-400 mb-2">{review.text}</p>
                  <div
                    className="rounded-lg px-3 py-2 text-sm text-gray-300 italic border-l-2"
                    style={{ background: 'rgba(0,229,255,0.05)', borderColor: '#00e5ff' }}
                  >
                    <span className="text-xs font-semibold not-italic" style={{ color: '#00e5ff' }}>
                      AI Reply:{' '}
                    </span>
                    {review.reply}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
            style={{ background: 'linear-gradient(to top, #0a0a0f, transparent)' }}
          />
        </div>
      </div>

      {/* Lead capture modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Get Started Free"
      >
        <LeadForm defaultPlan={selectedPlan} onSuccess={handleSuccess} />
      </Modal>
    </section>
  );
}
