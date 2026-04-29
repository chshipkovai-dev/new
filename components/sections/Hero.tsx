'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Modal } from '@/components/ui/Modal';
import { LeadForm } from '@/components/ui/LeadForm';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

export function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<'free' | 'pro' | 'business'>('free');

  const handleOpenModal = (plan: 'free' | 'pro' | 'business' = 'free') => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0f] pt-20 pb-16">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,229,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.08) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Radial glow top-center */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, #00e5ff 0%, transparent 70%)',
        }}
      />

      {/* Radial glow bottom-left */}
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, #00e5ff 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column — text */}
          <div className="flex flex-col items-start">
            <Badge className="mb-6">
              🚀 Now available in EU — Restaurants &amp; Salons
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6">
              Turn Every Review into a{' '}
              <span
                className="inline-block"
                style={{
                  background: 'linear-gradient(90deg, #00e5ff 0%, #00b4d8 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Growth Engine
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-400 leading-relaxed mb-8 max-w-xl">
              ReviewAgent is an AI-powered assistant that automatically monitors,
              responds to, and analyses customer reviews across Google, Tripadvisor
              and Yelp — so you can focus on running your business, not managing
              your reputation.
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap gap-6 mb-10">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white">94%</span>
                <span className="text-sm text-gray-500">response rate</span>
              </div>
              <div className="w-px bg-gray-700 hidden sm:block" />
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white">4.8★</span>
                <span className="text-sm text-gray-500">avg rating lift</span>
              </div>
              <div className="w-px bg-gray-700 hidden sm:block" />
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white">2 min</span>
                <span className="text-sm text-gray-500">setup time</span>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button
                variant="primary"
                size="lg"
                onClick={() => handleOpenModal('free')}
                className="w-full sm:w-auto"
              >
                Start Free — No Card Needed
              </Button>
              <Button
                variant="ghost"
                size="lg"
                onClick={() => {
                  document
                    .getElementById('pricing')
                    ?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto"
              >
                See Pricing →
              </Button>
            </div>

            {/* Trust line */}
            <p className="mt-6 text-sm text-gray-600">
              Trusted by{' '}
              <span className="text-gray-400 font-medium">320+ businesses</span>{' '}
              across Germany, Spain, France and Italy.
            </p>
          </div>

          {/* Right column — dashboard mockup */}
          <div className="relative flex items-center justify-center">
            {/* Glow behind the card */}
            <div
              className="absolute inset-0 rounded-3xl blur-2xl opacity-30 pointer-events-none"
              style={{
                background:
                  'radial-gradient(ellipse at center, #00e5ff 0%, transparent 65%)',
              }}
            />

            <div
              className="relative w-full max-w-lg rounded-2xl border border-[#00e5ff]/20 bg-[#111118] shadow-2xl overflow-hidden"
              style={{ boxShadow: '0 0 60px rgba(0,229,255,0.08)' }}
            >
              {/* Fake browser bar */}
              <div className="flex items-center gap-2 px-4 py-3 bg-[#0d0d14] border-b border-white/5">
                <span className="w-3 h-3 rounded-full bg-red-500/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-400/70" />
                <span className="w-3 h-3 rounded-full bg-green-400/70" />
                <span className="flex-1 mx-4 h-5 rounded-md bg-white/5 text-xs text-gray-500 flex items-center px-2">
                  app.reviewagent.io/dashboard
                </span>
              </div>

              {/* Dashboard content */}
              <div className="p-5 space-y-4">
                {/* Top summary row */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: 'New Reviews', value: '12', delta: '+3 today', color: '#00e5ff' },
                    { label: 'Replied', value: '11', delta: '91% auto', color: '#22c55e' },
                    { label: 'Avg Rating', value: '4.7★', delta: '+0.2 mo', color: '#a78bfa' },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-xl bg-[#0a0a0f] border border-white/5 p-3 flex flex-col gap-1"
                    >
                      <span className="text-xs text-gray-500">{stat.label}</span>
                      <span
                        className="text-xl font-bold"
                        style={{ color: stat.color }}
                      >
                        {stat.value}
                      </span>
                      <span className="text-xs text-gray-600">{stat.delta}</span>
                    </div>
                  ))}
                </div>

                {/* Review cards */}
                <div className="space-y-3">
                  {[
                    {
                      name: 'Maria S.',
                      rating: 5,
                      text: 'Absolutely loved the atmosphere and service!',
                      platform: 'Google',
                      status: 'Replied by AI',
                      statusColor: '#00e5ff',
                    },
                    {
                      name: 'Hans K.',
                      rating: 3,
                      text: 'Food was okay but waiting time was too long.',
                      platform: 'Tripadvisor',
                      status: 'Escalated',
                      statusColor: '#f59e0b',
                    },
                    {
                      name: 'Elena R.',
                      rating: 5,
                      text: 'Best hair salon in Madrid! Will be back.',
                      platform: 'Google',
                      status: 'Replied by AI',
                      statusColor: '#00e5ff',
                    },
                  ].map((review, i) => (
                    <div
                      key={i}
                      className="rounded-xl bg-[#0a0a0f] border border-white/5 p-3 flex flex-col gap-1.5"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div
                            className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-[#0a0a0f]"
                            style={{ background: '#00e5ff' }}
                          >
                            {review.name.charAt(0)}
                          </div>
                          <div>
                            <p className="text-xs font-semibold text-white">{review.name}</p>
                            <p className="text-xs text-gray-600">{review.platform}</p>
                          </div>
                        </div>
                        <span
                          className="text-xs font-medium px-2 py-0.5 rounded-full"
                          style={{
                            background: `${review.statusColor}18`,
                            color: review.statusColor,
                            border: `1px solid ${review.statusColor}30`,
                          }}
                        >
                          {review.status}
                        </span>
                      </div>
                      <div className="flex gap-0.5">
                        {Array.from({ length: 5 }).map((_, si) => (
                          <svg
                            key={si}
                            className="w-3 h-3"
                            fill={si < review.rating ? '#f59e0b' : '#374151'}
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-xs text-gray-400 leading-snug">{review.text}</p>
                    </div>
                  ))}
                </div>

                {/* AI typing indicator */}
                <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#00e5ff]/5 border border-[#00e5ff]/15">
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00e5ff] animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00e5ff] animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00e5ff] animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                  <span className="text-xs text-[#00e5ff]/80">AI is drafting a response...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lead form modal */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} title="Start Your Free Plan">
        <LeadForm defaultPlan={selectedPlan} onSuccess={handleCloseModal} />
      </Modal>
    </section>
  );
}
