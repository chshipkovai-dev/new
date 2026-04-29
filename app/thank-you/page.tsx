import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Thank You — ReviewAgent',
  description: 'You have successfully signed up for ReviewAgent. Check your inbox for next steps.',
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center px-4 py-24"
      style={{ background: '#0a0a0f' }}
    >
      {/* Glow background */}
      <div
        className="fixed inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(0,229,255,0.08) 0%, transparent 70%)',
        }}
      />

      <div
        className="relative z-10 flex flex-col items-center text-center max-w-lg w-full rounded-2xl p-10 border border-white/10"
        style={{ background: '#111118' }}
      >
        {/* Animated checkmark circle */}
        <div
          className="mb-8 flex items-center justify-center w-20 h-20 rounded-full border-2"
          style={{
            borderColor: '#00e5ff',
            background: 'rgba(0,229,255,0.08)',
            boxShadow: '0 0 32px 4px rgba(0,229,255,0.18)',
          }}
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M10 21L17 28L30 14"
              stroke="#00e5ff"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Badge */}
        <span
          className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-4"
          style={{
            background: 'rgba(0,229,255,0.1)',
            color: '#00e5ff',
            border: '1px solid rgba(0,229,255,0.25)',
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full inline-block"
            style={{ background: '#00e5ff' }}
          />
          You&apos;re on the list
        </span>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3 leading-tight">
          Thank you for signing up!
        </h1>

        {/* Subheading */}
        <p className="text-base sm:text-lg text-white/60 mb-8 leading-relaxed">
          We&apos;ve received your request. Check your inbox — we&apos;ll send you
          everything you need to get started with{' '}
          <span className="font-semibold" style={{ color: '#00e5ff' }}>
            ReviewAgent
          </span>{' '}
          within the next few minutes.
        </p>

        {/* Steps */}
        <div className="w-full flex flex-col gap-3 mb-10">
          {[
            {
              step: '1',
              title: 'Check your inbox',
              desc: 'A confirmation email is on its way with your access details.',
            },
            {
              step: '2',
              title: 'Connect your Google account',
              desc: 'Link your Google Business Profile to start tracking reviews.',
            },
            {
              step: '3',
              title: 'Let AI reply for you',
              desc: 'ReviewAgent generates personalised responses in seconds.',
            },
          ].map(({ step, title, desc }) => (
            <div
              key={step}
              className="flex items-start gap-4 rounded-xl px-4 py-3 text-left"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              <div
                className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold mt-0.5"
                style={{
                  background: 'rgba(0,229,255,0.12)',
                  color: '#00e5ff',
                  border: '1px solid rgba(0,229,255,0.3)',
                }}
              >
                {step}
              </div>
              <div>
                <p className="text-sm font-semibold text-white mb-0.5">{title}</p>
                <p className="text-xs text-white/50 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA back to home */}
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:opacity-90 active:scale-95"
          style={{
            background: 'linear-gradient(135deg, #00e5ff 0%, #00b8cc 100%)',
            color: '#0a0a0f',
            boxShadow: '0 0 20px rgba(0,229,255,0.3)',
          }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M10 12L6 8L10 4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Back to Homepage
        </Link>

        {/* Support line */}
        <p className="mt-6 text-xs text-white/30">
          Didn&apos;t receive an email?{' '}
          <a
            href="mailto:support@ailnex.com"
            className="underline underline-offset-2 transition-colors duration-150 hover:text-white/60"
            style={{ color: 'rgba(0,229,255,0.6)' }}
          >
            Contact support
          </a>
        </p>
      </div>

      {/* Footer note */}
      <p className="mt-10 text-xs text-white/20 text-center">
        © {new Date().getFullYear()} ailnex · ReviewAgent · All rights reserved.
      </p>
    </main>
  );
}
