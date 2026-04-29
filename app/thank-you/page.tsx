import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Thank You — ReviewAgent',
  description: 'You are on your way to effortless review management. Check your inbox for next steps.',
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-24" style={{ backgroundColor: '#0a0a0f' }}>
      {/* Ambient glow */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 50% 20%, rgba(0,229,255,0.07) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-lg w-full flex flex-col items-center text-center">

        {/* Animated checkmark circle */}
        <div
          className="w-24 h-24 rounded-full flex items-center justify-center mb-8 shadow-lg"
          style={{
            background: 'linear-gradient(135deg, rgba(0,229,255,0.15) 0%, rgba(0,229,255,0.05) 100%)',
            border: '2px solid rgba(0,229,255,0.4)',
            boxShadow: '0 0 40px rgba(0,229,255,0.2)',
          }}
        >
          <svg
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M8 22L18 32L36 12"
              stroke="#00e5ff"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Badge */}
        <span
          className="inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-6"
          style={{
            backgroundColor: 'rgba(0,229,255,0.1)',
            color: '#00e5ff',
            border: '1px solid rgba(0,229,255,0.25)',
          }}
        >
          You're in!
        </span>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight mb-4">
          Welcome to{' '}
          <span style={{ color: '#00e5ff' }}>ReviewAgent</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg leading-relaxed mb-10" style={{ color: '#8b8ba7' }}>
          We've received your request and saved your spot. Check your inbox — we've sent you a confirmation email with everything you need to get started.
        </p>

        {/* Steps card */}
        <div
          className="w-full rounded-2xl p-6 mb-10 text-left"
          style={{
            backgroundColor: '#111118',
            border: '1px solid rgba(255,255,255,0.07)',
          }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest mb-5" style={{ color: '#00e5ff' }}>
            What happens next
          </p>

          <ol className="space-y-5">
            {[
              {
                step: '01',
                title: 'Confirm your email',
                desc: 'Open the confirmation email we just sent and click the link to verify your address.',
              },
              {
                step: '02',
                title: 'Connect your Google Business profile',
                desc: 'Follow the simple setup guide to link ReviewAgent to your Google reviews in under 2 minutes.',
              },
              {
                step: '03',
                title: 'Watch replies go out automatically',
                desc: 'ReviewAgent starts crafting personalised responses to every new review — you don\'t lift a finger.',
              },
            ].map(({ step, title, desc }) => (
              <li key={step} className="flex gap-4 items-start">
                <span
                  className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold"
                  style={{
                    backgroundColor: 'rgba(0,229,255,0.12)',
                    color: '#00e5ff',
                  }}
                >
                  {step}
                </span>
                <div>
                  <p className="font-semibold text-white text-sm mb-0.5">{title}</p>
                  <p className="text-sm" style={{ color: '#8b8ba7' }}>{desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-3 w-full justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200"
            style={{
              backgroundColor: 'rgba(0,229,255,0.1)',
              color: '#00e5ff',
              border: '1px solid rgba(0,229,255,0.25)',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'rgba(0,229,255,0.18)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'rgba(0,229,255,0.1)';
            }}
          >
            ← Back to Home
          </Link>

          <a
            href="mailto:hello@reviewagent.ai"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200"
            style={{
              backgroundColor: 'transparent',
              color: '#8b8ba7',
              border: '1px solid rgba(255,255,255,0.07)',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = '#ffffff';
              (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.2)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = '#8b8ba7';
              (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.07)';
            }}
          >
            Contact Support
          </a>
        </div>

        {/* Trust line */}
        <p className="mt-10 text-xs" style={{ color: 'rgba(139,139,167,0.5)' }}>
          Questions? Email us at{' '}
          <a
            href="mailto:hello@reviewagent.ai"
            className="underline underline-offset-2 transition-colors"
            style={{ color: 'rgba(0,229,255,0.6)' }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#00e5ff'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(0,229,255,0.6)'; }}
          >
            hello@reviewagent.ai
          </a>
          {' '}— we typically reply within 2 hours.
        </p>
      </div>
    </main>
  );
}
