import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "You're In — ReviewAgent",
  description: 'Thank you for joining ReviewAgent. Check your email for next steps.',
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center px-4 py-24"
      style={{ background: '#0a0a0f' }}
    >
      {/* Glow backdrop */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(0,229,255,0.08) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div
        className="relative z-10 w-full max-w-lg rounded-2xl border p-10 text-center"
        style={{
          background: '#111118',
          borderColor: 'rgba(0,229,255,0.15)',
          boxShadow: '0 0 60px rgba(0,229,255,0.06)',
        }}
      >
        {/* Animated checkmark */}
        <div className="flex items-center justify-center mb-8">
          <div
            className="flex items-center justify-center w-20 h-20 rounded-full"
            style={{
              background: 'rgba(0,229,255,0.1)',
              border: '2px solid rgba(0,229,255,0.4)',
            }}
          >
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M8 18L15 25L28 11"
                stroke="#00e5ff"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-white mb-3">
          You&apos;re on the list!
        </h1>

        <p className="text-base leading-relaxed mb-8" style={{ color: '#8b8b9a' }}>
          Thanks for signing up to{' '}
          <span style={{ color: '#00e5ff' }} className="font-medium">
            ReviewAgent
          </span>
          . We&apos;ve received your request and will be in touch within{' '}
          <strong className="text-white">24 hours</strong> with your account
          details and onboarding instructions.
        </p>

        <div
          className="rounded-xl p-6 text-left mb-8"
          style={{ background: 'rgba(0,229,255,0.04)', border: '1px solid rgba(0,229,255,0.08)' }}
        >
          <h2 className="text-sm font-semibold uppercase tracking-widest mb-5" style={{ color: '#00e5ff' }}>
            What happens next
          </h2>
          <ol className="space-y-4">
            {[
              {
                step: '1',
                title: 'Check your inbox',
                desc: "We've sent a confirmation to your email address. If you don't see it, check your spam folder.",
              },
              {
                step: '2',
                title: 'We set up your account',
                desc: 'Our team configures your ReviewAgent profile and connects it to Google, Tripadvisor, and Booking.com.',
              },
              {
                step: '3',
                title: 'Start getting AI-powered replies',
                desc: 'Your AI agent begins monitoring and responding to new reviews automatically — no manual work needed.',
              },
            ].map(({ step, title, desc }) => (
              <li key={step} className="flex gap-4">
                <span
                  className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold"
                  style={{
                    background: 'rgba(0,229,255,0.12)',
                    color: '#00e5ff',
                    border: '1px solid rgba(0,229,255,0.25)',
                  }}
                >
                  {step}
                </span>
                <div>
                  <p className="text-sm font-semibold text-white mb-0.5">{title}</p>
                  <p className="text-sm" style={{ color: '#8b8b9a' }}>{desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <p className="text-sm mb-6" style={{ color: '#8b8b9a' }}>
          Know a fellow restaurant or salon owner who could benefit?{' '}
          <a
            href="https://twitter.com/intent/tweet?text=Just%20signed%20up%20for%20ReviewAgent%20%E2%80%94%20AI-powered%20review%20management%20for%20restaurants%20%26%20salons%20in%20Europe."
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium transition-colors duration-200 hover:underline"
            style={{ color: '#00e5ff' }}
          >
            Share ReviewAgent on X
          </a>
        </p>

        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 w-full py-3 px-6 rounded-xl text-sm font-semibold transition-all duration-200"
          style={{
            background: 'rgba(0,229,255,0.08)',
            color: '#00e5ff',
            border: '1px solid rgba(0,229,255,0.2)',
          }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back to Home
        </Link>
      </div>

      <p className="relative z-10 mt-8 text-sm" style={{ color: '#4a4a5a' }}>
        Questions? Email us at{' '}
        <a
          href="mailto:support@ailnex.com"
          className="transition-colors duration-200 hover:underline"
          style={{ color: '#8b8b9a' }}
        >
          support@ailnex.com
        </a>
      </p>
    </main>
  );
}
