import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'You're In — ReviewAgent',
  description: 'Thank you for joining ReviewAgent. Check your email for next steps.',
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center px-4 py-20"
      style={{ backgroundColor: '#0a0a0f' }}
    >
      {/* Glow background blob */}
      <div
        className="pointer-events-none fixed inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 blur-3xl"
          style={{ backgroundColor: '#00e5ff' }}
        />
      </div>

      <div
        className="relative z-10 w-full max-w-lg rounded-2xl border p-10 text-center shadow-2xl"
        style={{
          backgroundColor: '#111118',
          borderColor: 'rgba(0, 229, 255, 0.18)',
        }}
      >
        {/* Animated checkmark icon */}
        <div className="flex items-center justify-center mb-8">
          <div
            className="flex items-center justify-center w-20 h-20 rounded-full"
            style={{ backgroundColor: 'rgba(0, 229, 255, 0.12)', border: '2px solid rgba(0, 229, 255, 0.4)' }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#00e5ff"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-10 h-10"
              aria-hidden="true"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-3xl font-bold text-white mb-3 tracking-tight">
          You&apos;re on the list!
        </h1>

        {/* Subheadline */}
        <p className="text-base leading-relaxed mb-2" style={{ color: '#a0a0b8' }}>
          Thank you for signing up for{' '}
          <span className="font-semibold" style={{ color: '#00e5ff' }}>
            ReviewAgent
          </span>
          . We&apos;ve received your request and you&apos;ll be among the first to get access.
        </p>

        {/* Email instruction */}
        <div
          className="flex items-start gap-3 rounded-xl p-4 mt-6 text-left"
          style={{ backgroundColor: 'rgba(0, 229, 255, 0.07)', border: '1px solid rgba(0, 229, 255, 0.15)' }}
        >
          <div className="mt-0.5 shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#00e5ff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
              aria-hidden="true"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-semibold text-white mb-0.5">Check your inbox</p>
            <p className="text-sm" style={{ color: '#a0a0b8' }}>
              We&apos;ve sent a confirmation email with your plan details and onboarding instructions. If you don&apos;t see it within a few minutes, check your spam folder.
            </p>
          </div>
        </div>

        {/* What happens next */}
        <div className="mt-8 text-left">
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#00e5ff' }}>
            What happens next
          </p>
          <ol className="space-y-3">
            {[
              {
                step: '1',
                title: 'Confirmation email',
                desc: 'You\'ll receive an email within 5 minutes with your account details.',
              },
              {
                step: '2',
                title: 'Onboarding call (Pro & Business)',
                desc: 'Our team will reach out to schedule a 20-min setup call tailored to your business.',
              },
              {
                step: '3',
                title: 'Connect your review platforms',
                desc: 'Link Google, Tripadvisor, Booking.com or Yelp — takes under 2 minutes.',
              },
              {
                step: '4',
                title: 'Your AI agent goes live',
                desc: 'ReviewAgent starts monitoring and responding to reviews automatically.',
              },
            ].map(({ step, title, desc }) => (
              <li key={step} className="flex items-start gap-3">
                <span
                  className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold"
                  style={{ backgroundColor: 'rgba(0, 229, 255, 0.15)', color: '#00e5ff' }}
                >
                  {step}
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">{title}</p>
                  <p className="text-sm" style={{ color: '#a0a0b8' }}>{desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Divider */}
        <div className="my-8 border-t" style={{ borderColor: 'rgba(255,255,255,0.07)' }} />

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-200"
            style={{
              backgroundColor: '#00e5ff',
              color: '#0a0a0f',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#33ecff';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#00e5ff';
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
              aria-hidden="true"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
            Back to homepage
          </Link>

          <a
            href="mailto:hello@reviewagent.ai"
            className="inline-flex items-center justify-center gap-2 rounded-xl border px-6 py-3 text-sm font-semibold transition-all duration-200"
            style={{
              borderColor: 'rgba(0, 229, 255, 0.3)',
              color: '#00e5ff',
              backgroundColor: 'transparent',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'rgba(0, 229, 255, 0.08)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'transparent';
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
              aria-hidden="true"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            Contact support
          </a>
        </div>

        {/* Footer note */}
        <p className="mt-6 text-xs" style={{ color: '#5a5a78' }}>
          Questions? Email us at{' '}
          <a
            href="mailto:hello@reviewagent.ai"
            className="underline underline-offset-2 transition-colors"
            style={{ color: '#00e5ff' }}
          >
            hello@reviewagent.ai
          </a>
        </p>
      </div>

      {/* Brand watermark */}
      <div className="relative z-10 mt-10 flex items-center gap-2">
        <span className="text-xs" style={{ color: '#3a3a52' }}>
          Powered by
        </span>
        <span className="text-xs font-bold tracking-tight" style={{ color: '#00e5ff' }}>
          ailnex
        </span>
      </div>
    </main>
  );
}
