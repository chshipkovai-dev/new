import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'You're In! — ReviewAgent',
  description: 'Thank you for signing up to ReviewAgent. Check your inbox for next steps.',
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center px-4 py-24"
      style={{ backgroundColor: '#0a0a0f' }}
    >
      {/* Glow background */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        aria-hidden="true"
      >
        <div
          className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 blur-3xl"
          style={{ background: 'radial-gradient(circle, #00e5ff 0%, transparent 70%)' }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-xl w-full">
        {/* Icon */}
        <div
          className="flex items-center justify-center w-20 h-20 rounded-full mb-8 shadow-lg"
          style={{
            background: 'linear-gradient(135deg, rgba(0,229,255,0.15) 0%, rgba(0,229,255,0.05) 100%)',
            border: '1.5px solid rgba(0,229,255,0.35)',
            boxShadow: '0 0 40px rgba(0,229,255,0.18)',
          }}
        >
          <svg
            width="38"
            height="38"
            viewBox="0 0 38 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <circle cx="19" cy="19" r="19" fill="rgba(0,229,255,0.08)" />
            <path
              d="M11 19.5L16.5 25L27 14"
              stroke="#00e5ff"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Headline */}
        <h1
          className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4"
          style={{ color: '#f0f4ff' }}
        >
          You&apos;re on the list!{' '}
          <span style={{ color: '#00e5ff' }}>🎉</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl mb-10" style={{ color: '#8892aa' }}>
          Thanks for signing up to <span style={{ color: '#00e5ff' }}>ReviewAgent</span>. We&apos;ve
          received your request and will be in touch within{' '}
          <span style={{ color: '#f0f4ff', fontWeight: 600 }}>24 hours</span> with your
          onboarding instructions.
        </p>

        {/* What happens next */}
        <div
          className="w-full rounded-2xl p-6 sm:p-8 mb-10 text-left"
          style={{
            backgroundColor: '#111118',
            border: '1px solid rgba(255,255,255,0.07)',
          }}
        >
          <h2
            className="text-base font-semibold uppercase tracking-widest mb-6"
            style={{ color: '#00e5ff' }}
          >
            What happens next
          </h2>
          <ol className="space-y-5">
            {[
              {
                step: '01',
                title: 'Check your inbox',
                desc: 'A confirmation email is on its way. It contains your access link and a quick-start guide.',
              },
              {
                step: '02',
                title: 'Connect your Google Business profile',
                desc: 'Follow the 2-minute setup to link your location — no technical skills required.',
              },
              {
                step: '03',
                title: 'Watch ReviewAgent reply for you',
                desc: 'Sit back while our AI crafts personalised, on-brand replies to every new review.',
              },
            ].map(({ step, title, desc }) => (
              <li key={step} className="flex gap-4">
                <span
                  className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                  style={{
                    background: 'rgba(0,229,255,0.10)',
                    color: '#00e5ff',
                    border: '1px solid rgba(0,229,255,0.25)',
                  }}
                >
                  {step}
                </span>
                <div>
                  <p
                    className="text-sm font-semibold mb-0.5"
                    style={{ color: '#f0f4ff' }}
                  >
                    {title}
                  </p>
                  <p className="text-sm" style={{ color: '#6b7485' }}>
                    {desc}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:opacity-90 active:scale-95"
            style={{
              background: 'linear-gradient(135deg, #00e5ff 0%, #00b8cc 100%)',
              color: '#0a0a0f',
              boxShadow: '0 4px 24px rgba(0,229,255,0.25)',
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
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

          <a
            href="mailto:support@reviewagent.ai"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:opacity-80"
            style={{
              background: 'rgba(255,255,255,0.05)',
              color: '#8892aa',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <rect
                x="1.5"
                y="3.5"
                width="13"
                height="9"
                rx="1.5"
                stroke="currentColor"
                strokeWidth="1.4"
              />
              <path
                d="M1.5 5L8 9.5L14.5 5"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
            </svg>
            Contact Support
          </a>
        </div>

        {/* Footer note */}
        <p className="mt-10 text-xs" style={{ color: '#3d4455' }}>
          Didn&apos;t receive an email?{' '}
          <a
            href="mailto:support@reviewagent.ai"
            className="underline underline-offset-2 transition-colors duration-150"
            style={{ color: '#00e5ff' }}
          >
            Let us know
          </a>{' '}
          and we&apos;ll sort it out right away.
        </p>
      </div>
    </main>
  );
}
