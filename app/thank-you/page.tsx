import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'You\'re In — ReviewAgent',
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
        className="pointer-events-none fixed inset-0 z-0"
        aria-hidden="true"
      >
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 blur-3xl"
          style={{ background: 'radial-gradient(circle, #00e5ff 0%, transparent 70%)' }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-lg w-full">
        {/* Animated checkmark circle */}
        <div
          className="mb-8 flex items-center justify-center w-24 h-24 rounded-full border-2"
          style={{ borderColor: '#00e5ff', backgroundColor: 'rgba(0,229,255,0.08)' }}
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
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
          You&apos;re on the list!{' '}
          <span style={{ color: '#00e5ff' }}>🎉</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg text-gray-400 mb-6 leading-relaxed">
          Thanks for signing up for <span className="text-white font-medium">ReviewAgent</span>. We\'ve received your request and will be in touch shortly.
        </p>

        {/* What happens next card */}
        <div
          className="w-full rounded-2xl border p-6 mb-8 text-left"
          style={{ backgroundColor: '#111118', borderColor: 'rgba(255,255,255,0.08)' }}
        >
          <h2 className="text-white font-semibold text-lg mb-4">What happens next?</h2>
          <ol className="space-y-4">
            <li className="flex gap-4 items-start">
              <span
                className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold"
                style={{ backgroundColor: 'rgba(0,229,255,0.15)', color: '#00e5ff' }}
              >
                1
              </span>
              <div>
                <p className="text-white font-medium text-sm">Check your inbox</p>
                <p className="text-gray-400 text-sm mt-0.5">
                  A confirmation email is on its way. If you don\'t see it within 5 minutes, check your spam folder.
                </p>
              </div>
            </li>
            <li className="flex gap-4 items-start">
              <span
                className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold"
                style={{ backgroundColor: 'rgba(0,229,255,0.15)', color: '#00e5ff' }}
              >
                2
              </span>
              <div>
                <p className="text-white font-medium text-sm">We\'ll set up your account</p>
                <p className="text-gray-400 text-sm mt-0.5">
                  Our team will prepare your ReviewAgent workspace and connect it to your review platforms.
                </p>
              </div>
            </li>
            <li className="flex gap-4 items-start">
              <span
                className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold"
                style={{ backgroundColor: 'rgba(0,229,255,0.15)', color: '#00e5ff' }}
              >
                3
              </span>
              <div>
                <p className="text-white font-medium text-sm">Start responding automatically</p>
                <p className="text-gray-400 text-sm mt-0.5">
                  Within 24 hours your AI agent will be live — handling Google, Tripadvisor and Yelp reviews on autopilot.
                </p>
              </div>
            </li>
          </ol>
        </div>

        {/* Social sharing nudge */}
        <p className="text-gray-500 text-sm mb-6">
          Got a colleague who manages reviews too?{' '}
          <a
            href="https://twitter.com/intent/tweet?text=Just%20signed%20up%20for%20%40ReviewAgent%20%E2%80%94%20AI-powered%20review%20automation%20for%20restaurants%20%26%20salons%20in%20Europe.%20Check%20it%20out%3A%20https%3A%2F%2Freviewagent.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium transition-colors duration-200"
            style={{ color: '#00e5ff' }}
          >
            Share ReviewAgent on X
          </a>
        </p>

        {/* Back to home CTA */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 border"
          style={{
            borderColor: 'rgba(0,229,255,0.4)',
            color: '#00e5ff',
            backgroundColor: 'rgba(0,229,255,0.06)',
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
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Back to homepage
        </Link>

        {/* Support fallback */}
        <p className="mt-8 text-xs text-gray-600">
          Questions?{' '}
          <a
            href="mailto:hello@reviewagent.ai"
            className="underline underline-offset-2 transition-colors duration-200 hover:text-gray-400"
          >
            hello@reviewagent.ai
          </a>
        </p>
      </div>
    </main>
  );
}
