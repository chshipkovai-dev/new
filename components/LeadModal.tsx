'use client';

import { useState, useEffect, useRef } from 'react';
import { X, Loader2, CheckCircle, AlertCircle, Mail, Building2 } from 'lucide-react';

export type PlanType = 'free' | 'pro' | 'business';

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPlan?: PlanType;
}

const PLAN_LABELS: Record<PlanType, string> = {
  free: 'Free — $0/mo',
  pro: 'Pro — $49/mo',
  business: 'Business — $149/mo',
};

const PLAN_DESCRIPTIONS: Record<PlanType, string> = {
  free: 'Perfect to get started with AI review management',
  pro: 'Most popular for growing restaurants & salons',
  business: 'Full power for multi-location businesses',
};

type FormState = 'idle' | 'loading' | 'success' | 'error';

export default function LeadModal({ isOpen, onClose, initialPlan = 'pro' }: LeadModalProps) {
  const [email, setEmail] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [plan, setPlan] = useState<PlanType>(initialPlan);
  const [formState, setFormState] = useState<FormState>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const overlayRef = useRef<HTMLDivElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setPlan(initialPlan);
  }, [initialPlan]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => emailRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && formState !== 'loading') {
        handleClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, formState]);

  const handleClose = () => {
    if (formState === 'loading') return;
    onClose();
    setTimeout(() => {
      setEmail('');
      setBusinessName('');
      setPlan(initialPlan);
      setFormState('idle');
      setErrorMessage('');
    }, 300);
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === overlayRef.current && formState !== 'loading') {
      handleClose();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formState === 'loading') return;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage('Please enter a valid email address.');
      setFormState('error');
      return;
    }

    setFormState('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email.trim().toLowerCase(),
          business_name: businessName.trim(),
          plan,
        }),
      });

      if (response.ok) {
        setFormState('success');
      } else if (response.status === 503) {
        setErrorMessage('Service temporarily unavailable. Please try again later.');
        setFormState('error');
      } else {
        const data = await response.json().catch(() => ({}));
        setErrorMessage(data?.error || 'Something went wrong. Please try again.');
        setFormState('error');
      }
    } catch {
      setErrorMessage('Network error. Please check your connection and try again.');
      setFormState('error');
    }
  };

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(4px)' }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-md rounded-2xl border border-white/10 shadow-2xl"
        style={{ backgroundColor: '#111118' }}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          disabled={formState === 'loading'}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        <div className="p-8">
          {formState === 'success' ? (
            /* Success State */
            <div className="text-center py-4">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                style={{ backgroundColor: 'rgba(0,229,255,0.1)' }}
              >
                <CheckCircle size={32} style={{ color: '#00e5ff' }} />
              </div>
              <h2 className="text-2xl font-bold text-white mb-3">You're on the list!</h2>
              <p className="text-gray-400 mb-2">
                We'll contact you at <span className="text-white font-medium">{email}</span> within 24 hours to get you started.
              </p>
              <p className="text-sm text-gray-500 mb-6">
                Plan selected: <span style={{ color: '#00e5ff' }} className="font-medium">{PLAN_LABELS[plan]}</span>
              </p>
              <button
                onClick={handleClose}
                className="w-full py-3 px-6 rounded-xl font-semibold text-sm transition-all"
                style={{ backgroundColor: 'rgba(0,229,255,0.1)', color: '#00e5ff', border: '1px solid rgba(0,229,255,0.3)' }}
              >
                Close
              </button>
            </div>
          ) : (
            /* Form State */
            <>
              {/* Header */}
              <div className="mb-6">
                <h2 id="modal-title" className="text-2xl font-bold text-white mb-1">
                  Get started with ReviewAgent
                </h2>
                <p className="text-gray-400 text-sm">
                  {PLAN_DESCRIPTIONS[plan]}. No credit card required to start.
                </p>
              </div>

              {/* Plan Selector */}
              <div className="mb-5">
                <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                  Selected Plan
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['free', 'pro', 'business'] as PlanType[]).map((p) => (
                    <button
                      key={p}
                      type="button"
                      onClick={() => setPlan(p)}
                      className="relative py-2.5 px-2 rounded-xl text-xs font-semibold transition-all border"
                      style={{
                        backgroundColor: plan === p ? 'rgba(0,229,255,0.12)' : 'rgba(255,255,255,0.04)',
                        borderColor: plan === p ? 'rgba(0,229,255,0.5)' : 'rgba(255,255,255,0.08)',
                        color: plan === p ? '#00e5ff' : '#9ca3af',
                      }}
                    >
                      {p === 'pro' && (
                        <span
                          className="absolute -top-2 left-1/2 -translate-x-1/2 text-[9px] font-bold px-1.5 py-0.5 rounded-full whitespace-nowrap"
                          style={{ backgroundColor: '#00e5ff', color: '#0a0a0f' }}
                        >
                          POPULAR
                        </span>
                      )}
                      <div>{p.charAt(0).toUpperCase() + p.slice(1)}</div>
                      <div className="text-[10px] font-normal opacity-70 mt-0.5">
                        {p === 'free' ? '$0' : p === 'pro' ? '$49/mo' : '$149/mo'}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} noValidate>
                {/* Business Name */}
                <div className="mb-4">
                  <label htmlFor="business-name" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">
                    Business Name
                  </label>
                  <div className="relative">
                    <Building2
                      size={16}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
                    />
                    <input
                      id="business-name"
                      type="text"
                      value={businessName}
                      onChange={(e) => setBusinessName(e.target.value)}
                      placeholder="e.g. Bella Ristorante, Studio Lumière"
                      className="w-full pl-10 pr-4 py-3 rounded-xl text-sm text-white placeholder-gray-600 outline-none transition-all border"
                      style={{
                        backgroundColor: 'rgba(255,255,255,0.05)',
                        borderColor: 'rgba(255,255,255,0.1)',
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = 'rgba(0,229,255,0.4)';
                        e.target.style.backgroundColor = 'rgba(0,229,255,0.04)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = 'rgba(255,255,255,0.1)';
                        e.target.style.backgroundColor = 'rgba(255,255,255,0.05)';
                      }}
                      disabled={formState === 'loading'}
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="mb-5">
                  <label htmlFor="email" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">
                    Work Email <span style={{ color: '#00e5ff' }}>*</span>
                  </label>
                  <div className="relative">
                    <Mail
                      size={16}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
                    />
                    <input
                      ref={emailRef}
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (formState === 'error') {
                          setFormState('idle');
                          setErrorMessage('');
                        }
                      }}
                      placeholder="you@yourbusiness.com"
                      required
                      className="w-full pl-10 pr-4 py-3 rounded-xl text-sm text-white placeholder-gray-600 outline-none transition-all border"
                      style={{
                        backgroundColor: 'rgba(255,255,255,0.05)',
                        borderColor: formState === 'error' ? 'rgba(239,68,68,0.5)' : 'rgba(255,255,255,0.1)',
                      }}
                      onFocus={(e) => {
                        if (formState !== 'error') {
                          e.target.style.borderColor = 'rgba(0,229,255,0.4)';
                          e.target.style.backgroundColor = 'rgba(0,229,255,0.04)';
                        }
                      }}
                      onBlur={(e) => {
                        if (formState !== 'error') {
                          e.target.style.borderColor = 'rgba(255,255,255,0.1)';
                          e.target.style.backgroundColor = 'rgba(255,255,255,0.05)';
                        }
                      }}
                      disabled={formState === 'loading'}
                    />
                  </div>
                </div>

                {/* Error message */}
                {formState === 'error' && errorMessage && (
                  <div
                    className="flex items-start gap-2.5 p-3 rounded-xl mb-4 text-sm"
                    style={{ backgroundColor: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)' }}
                  >
                    <AlertCircle size={16} className="text-red-400 mt-0.5 flex-shrink-0" />
                    <span className="text-red-400">{errorMessage}</span>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={formState === 'loading' || !email}
                  className="w-full py-3.5 px-6 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{
                    background: formState === 'loading' ? 'rgba(0,229,255,0.6)' : 'linear-gradient(135deg, #00e5ff, #00b8cc)',
                    color: '#0a0a0f',
                    boxShadow: formState !== 'loading' ? '0 0 24px rgba(0,229,255,0.25)' : 'none',
                  }}
                >
                  {formState === 'loading' ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <span>
                      {plan === 'free' ? 'Start for Free →' : `Get Started with ${plan.charAt(0).toUpperCase() + plan.slice(1)} →`}
                    </span>
                  )}
                </button>

                <p className="text-center text-xs text-gray-600 mt-3">
                  By submitting, you agree to our{' '}
                  <span className="underline cursor-pointer" style={{ color: 'rgba(0,229,255,0.6)' }}>Terms of Service</span>
                  {' '}and{' '}
                  <span className="underline cursor-pointer" style={{ color: 'rgba(0,229,255,0.6)' }}>Privacy Policy</span>.
                  GDPR compliant.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
