'use client';

import { useState, useEffect, useRef } from 'react';
import { X, CheckCircle, AlertCircle, Loader2, Sparkles } from 'lucide-react';

export type Plan = 'free' | 'pro' | 'business';

interface LeadModalProps {
  isOpen: boolean;
  selectedPlan: Plan;
  onClose: () => void;
}

const PLAN_LABELS: Record<Plan, string> = {
  free: 'Free — $0/mo',
  pro: 'Pro — $49/mo',
  business: 'Business — $149/mo',
};

const PLAN_COLORS: Record<Plan, string> = {
  free: 'text-slate-300',
  pro: 'text-[#00e5ff]',
  business: 'text-violet-400',
};

type FormState = 'idle' | 'loading' | 'success' | 'error';

export default function LeadModal({ isOpen, selectedPlan, onClose }: LeadModalProps) {
  const [email, setEmail] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [plan, setPlan] = useState<Plan>(selectedPlan);
  const [formState, setFormState] = useState<FormState>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const emailRef = useRef<HTMLInputElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setPlan(selectedPlan);
  }, [selectedPlan]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => emailRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = '';
      if (formState === 'success') {
        setTimeout(() => {
          setFormState('idle');
          setEmail('');
          setBusinessName('');
          setErrorMessage('');
        }, 300);
      }
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && formState !== 'loading') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [formState, onClose]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === backdropRef.current && formState !== 'loading') {
      onClose();
    }
  };

  const validateEmail = (value: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    if (!businessName.trim()) {
      setErrorMessage('Please enter your business name.');
      return;
    }

    setFormState('loading');

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email.trim().toLowerCase(),
          business_name: businessName.trim(),
          plan,
        }),
      });

      if (res.ok) {
        setFormState('success');
      } else if (res.status === 503) {
        setFormState('error');
        setErrorMessage('Service temporarily unavailable. Please try again later.');
      } else {
        const data = await res.json().catch(() => ({}));
        setFormState('error');
        setErrorMessage(data?.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setFormState('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    }
  };

  if (!isOpen) return null;

  return (
    <div
      ref={backdropRef}
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(6px)' }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-md rounded-2xl border border-white/10 shadow-2xl"
        style={{ backgroundColor: '#111118' }}
      >
        <div
          className="absolute -top-px left-1/2 -translate-x-1/2 h-px w-3/4 rounded-full"
          style={{ background: 'linear-gradient(90deg, transparent, #00e5ff, transparent)' }}
        />
        <button
          onClick={onClose}
          disabled={formState === 'loading'}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          aria-label="Close modal"
        >
          <X size={18} />
        </button>
        <div className="p-8">
          {formState === 'success' ? (
            <SuccessState onClose={onClose} plan={plan} />
          ) : (
            <FormFields
              email={email}
              setEmail={setEmail}
              businessName={businessName}
              setBusinessName={setBusinessName}
              plan={plan}
              setPlan={setPlan}
              formState={formState}
              errorMessage={errorMessage}
              handleSubmit={handleSubmit}
              emailRef={emailRef}
            />
          )}
        </div>
      </div>
    </div>
  );
}

interface FormFieldsProps {
  email: string;
  setEmail: (v: string) => void;
  businessName: string;
  setBusinessName: (v: string) => void;
  plan: Plan;
  setPlan: (v: Plan) => void;
  formState: FormState;
  errorMessage: string;
  handleSubmit: (e: React.FormEvent) => void;
  emailRef: React.RefObject<HTMLInputElement | null>;
}

function FormFields({
  email, setEmail, businessName, setBusinessName,
  plan, setPlan, formState, errorMessage, handleSubmit, emailRef,
}: FormFieldsProps) {
  const isLoading = formState === 'loading';

  return (
    <>
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-3">
          <Sparkles size={18} style={{ color: '#00e5ff' }} />
          <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#00e5ff' }}>Get Started</span>
        </div>
        <h2 id="modal-title" className="text-2xl font-bold text-white mb-2">Activate ReviewAgent</h2>
        <p className="text-slate-400 text-sm leading-relaxed">
          Join 500+ restaurants and beauty salons across Europe automating their reputation management.
        </p>
      </div>
      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        <div>
          <label htmlFor="business-name" className="block text-sm font-medium text-slate-300 mb-1.5">Business Name</label>
          <input
            id="business-name" type="text" value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            placeholder="e.g. La Bella Cucina" required disabled={isLoading}
            className="w-full px-4 py-3 rounded-xl text-white placeholder-slate-500 text-sm outline-none transition-all disabled:opacity-50"
            style={{ backgroundColor: '#0a0a0f', border: '1px solid rgba(255,255,255,0.1)' }}
            onFocus={(e) => (e.target.style.borderColor = '#00e5ff')}
            onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
          />
        </div>
        <div>
          <label htmlFor="lead-email" className="block text-sm font-medium text-slate-300 mb-1.5">Work Email</label>
          <input
            ref={emailRef} id="lead-email" type="email" value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@yourbusiness.com" required disabled={isLoading}
            className="w-full px-4 py-3 rounded-xl text-white placeholder-slate-500 text-sm outline-none transition-all disabled:opacity-50"
            style={{ backgroundColor: '#0a0a0f', border: '1px solid rgba(255,255,255,0.1)' }}
            onFocus={(e) => (e.target.style.borderColor = '#00e5ff')}
            onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1.5">Selected Plan</label>
          <div className="grid grid-cols-3 gap-2">
            {(['free', 'pro', 'business'] as Plan[]).map((p) => (
              <button key={p} type="button" disabled={isLoading} onClick={() => setPlan(p)}
                className={`py-2.5 px-2 rounded-xl text-xs font-semibold border transition-all capitalize disabled:cursor-not-allowed ${
                  plan === p
                    ? p === 'pro' ? 'border-[#00e5ff] bg-[#00e5ff]/10 text-[#00e5ff]'
                      : p === 'business' ? 'border-violet-400 bg-violet-400/10 text-violet-400'
                      : 'border-slate-400 bg-slate-400/10 text-slate-300'
                    : 'border-white/10 text-slate-500 hover:border-white/20 hover:text-slate-400 bg-transparent'
                }`}
              >
                {p === 'free' ? 'Free' : p === 'pro' ? 'Pro $49' : 'Biz $149'}
              </button>
            ))}
          </div>
          <p className={`mt-1.5 text-xs font-medium ${PLAN_COLORS[plan]}`}>{PLAN_LABELS[plan]}</p>
        </div>
        {formState === 'error' && errorMessage && (
          <div className="flex items-start gap-2.5 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/20">
            <AlertCircle size={16} className="text-red-400 mt-0.5 shrink-0" />
            <p className="text-sm text-red-300">{errorMessage}</p>
          </div>
        )}
        <button type="submit" disabled={isLoading}
          className="w-full py-3.5 px-6 rounded-xl font-semibold text-sm text-black transition-all flex items-center justify-center gap-2 disabled:opacity-70 hover:opacity-90 active:scale-[0.98]"
          style={{ background: isLoading ? 'rgba(0,229,255,0.7)' : 'linear-gradient(135deg, #00e5ff 0%, #00b8d4 100%)' }}
        >
          {isLoading ? <><Loader2 size={16} className="animate-spin" /><span>Submitting...</span></> : <span>Activate {plan.charAt(0).toUpperCase() + plan.slice(1)} Plan</span>}
        </button>
        <p className="text-center text-xs text-slate-500">
          No credit card required for Free plan. By submitting, you agree to our{' '}
          <span className="text-slate-400 underline cursor-pointer">Terms of Service</span>.
        </p>
      </form>
    </>
  );
}

function SuccessState({ onClose, plan }: { onClose: () => void; plan: Plan }) {
  return (
    <div className="text-center py-4">
      <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
        style={{ backgroundColor: 'rgba(0,229,255,0.1)', border: '2px solid rgba(0,229,255,0.3)' }}
      >
        <CheckCircle size={32} style={{ color: '#00e5ff' }} />
      </div>
      <h3 className="text-2xl font-bold text-white mb-2">You&apos;re on the list!</h3>
      <p className="text-slate-400 text-sm leading-relaxed mb-1">
        Thanks for choosing the{' '}
        <span className={`font-semibold ${PLAN_COLORS[plan]}`}>{PLAN_LABELS[plan]}</span> plan.
      </p>
      <p className="text-slate-400 text-sm leading-relaxed mb-6">
        We&apos;ll contact you within{' '}
        <span className="text-white font-semibold">24 hours</span> to set up your account.
      </p>
      <div className="rounded-xl px-4 py-3 mb-6 text-left"
        style={{ backgroundColor: 'rgba(0,229,255,0.05)', border: '1px solid rgba(0,229,255,0.15)' }}
      >
        <p className="text-xs font-semibold text-slate-300 mb-2">What happens next:</p>
        <ul className="space-y-1.5">
          {['Onboarding email with setup instructions', 'Connect Google Business & other platforms', 'AI agent starts responding to reviews'].map((step, i) => (
            <li key={i} className="flex items-center gap-2 text-xs text-slate-400">
              <span className="w-4 h-4 rounded-full flex items-center justify-center text-black text-[10px] font-bold shrink-0" style={{ backgroundColor: '#00e5ff' }}>{i + 1}</span>
              {step}
            </li>
          ))}
        </ul>
      </div>
      <button onClick={onClose} className="w-full py-3 rounded-xl font-semibold text-sm text-slate-300 border border-white/10 hover:bg-white/5 transition-colors">Close</button>
    </div>
  );
}
