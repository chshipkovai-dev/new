import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'You\'re In! — ReviewAgent',
  description: 'Thank you for signing up to ReviewAgent. Check your inbox for next steps.',
  robots: { index: false, follow: false },
};

export default function ThankYouPage({
  searchParams,
}: {
  searchParams: { plan?: string; email?: string };
}) {
  const plan = searchParams.plan ?? 'free';
  const email = searchParams.email ?? '';

  const planDetails: Record<string, { label: string; color: string; nextStep: string }> = {
    free: {
      label: 'Free',
      color: 'text-gray-300',
      nextStep: 'We will send you onboarding instructions within the next few minutes. Connect your Google Business account and start receiving automated replies.',
    },
    pro: {
      label: 'Pro',
      color: 'text-[#00e5ff]',
      nextStep: 'Our team will reach out within 24 hours to schedule your onboarding call and help you configure your first AI reply templates.',
    },
    business: {
      label: 'Business',
      color: 'text-purple-400',
      nextStep: 'A dedicated account manager will contact you within a few hours to kick off your onboarding and set up multi-location support.',
    },
  };

  const current = planDetails[plan] ?? planDetails.free;

  const steps = [
    {
      icon: '✉️',
      title: 'Check your inbox',
      description: 'We sent a confirmation email with your account details and a quick-start guide.',
    },
    {
      icon: '🔗',
      title: 'Connect Google Business',
      description: 'Follow the link in the email to authorise ReviewAgent to read and reply to your Google reviews.',
    },
    {
      icon: '🤖',
      title: 'Watch AI replies go live',
      description: 'Within minutes, ReviewAgent starts crafting personalised responses to new and existing reviews.',
    },
  ];

  return (
    <main className="min-h-screen bg-[#0a0a0f] flex flex-col items-center justify-center px-4 py-24">
      {/* Glow background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#00e5ff]/5 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-2xl w-full text-center">
        {/* Success icon */}
        <div className="flex items-center justify-center mb-8">
          <div className="w-20 h-20 rounded-full bg-[#00e5ff]/10 border border-[#00e5ff]/30 flex items-center justify-center">
            <svg
              className="w-10 h-10 text-[#00e5ff]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
          You&apos;re officially on the list!
        </h1>

        {/* Plan badge */}
        <div className="inline-flex items-center gap-2 bg-[#111118] border border-white/10 rounded-full px-4 py-2 mb-6">
          <span className="text-sm text-gray-400">Selected plan:</span>
          <span className={`text-sm font-semibold ${current.color}`}>
            {current.label}
          </span>
        </div>

        {/* Email confirmation */}
        {email && (
          <p className="text-gray-400 text-base mb-4">
            A confirmation has been sent to{' '}
            <span className="text-white font-medium">{email}</span>.
          </p>
        )}

        {/* Next step message */}
        <p className="text-gray-300 text-base leading-relaxed mb-12 max-w-lg mx-auto">
          {current.nextStep}
        </p>

        {/* What happens next */}
        <div className="bg-[#111118] border border-white/8 rounded-2xl p-8 mb-10 text-left">
          <h2 className="text-lg font-semibold text-white mb-6 text-center">What happens next</h2>
          <ol className="space-y-6">
            {steps.map((step, index) => (
              <li key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#0a0a0f] border border-[#00e5ff]/20 flex items-center justify-center text-lg">
                  {step.icon}
                </div>
                <div>
                  <p className="text-white font-medium mb-1">
                    <span className="text-[#00e5ff] mr-2">{index + 1}.</span>
                    {step.title}
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Social share nudge */}
        <div className="bg-[#111118] border border-[#00e5ff]/15 rounded-2xl p-6 mb-10">
          <p className="text-gray-400 text-sm mb-3">Know another restaurant or salon owner who struggles with review management?</p>
          <p className="text-white font-medium text-sm">Share ReviewAgent and help them put replies on autopilot 🚀</p>
          <div className="flex flex-wrap justify-center gap-3 mt-4">
            <a
              href="https://twitter.com/intent/tweet?text=I%20just%20signed%20up%20for%20ReviewAgent%20%E2%80%94%20AI-powered%20Google%20review%20replies%20for%20restaurants%20%26%20salons.%20Check%20it%20out!&url=https://reviewagent.ailnex.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#0a0a0f] hover:bg-white/5 border border-white/10 text-gray-300 hover:text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors duration-200"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              Share on X
            </a>
            <a
              href="https://www.linkedin.com/sharing/share-offsite/?url=https://reviewagent.ailnex.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#0a0a0f] hover:bg-white/5 border border-white/10 text-gray-300 hover:text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors duration-200"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              Share on LinkedIn
            </a>
          </div>
        </div>

        {/* CTA back home */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[#00e5ff] hover:bg-[#00cce6] text-[#0a0a0f] font-semibold px-6 py-3 rounded-xl transition-colors duration-200 text-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
          <a
            href="mailto:support@ailnex.com"
            className="inline-flex items-center gap-2 bg-transparent hover:bg-white/5 border border-white/10 text-gray-300 hover:text-white font-medium px-6 py-3 rounded-xl transition-colors duration-200 text-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Contact Support
          </a>
        </div>

        {/* Footer note */}
        <p className="mt-10 text-gray-600 text-xs">
          Didn&apos;t receive an email? Check your spam folder or{' '}
          <a href="mailto:support@ailnex.com" className="text-[#00e5ff] hover:underline">
            contact us
          </a>
          .
        </p>
      </div>
    </main>
  );
}
