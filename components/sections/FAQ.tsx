'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'What is ReviewAgent and how does it work?',
    answer:
      'ReviewAgent is an AI-powered platform that automatically monitors, analyzes, and responds to customer reviews across Google, TripAdvisor, Yelp, and other platforms. Once connected, the AI reads each new review, generates a personalized and brand-consistent reply, and either posts it automatically or queues it for your approval — depending on your plan settings.'
  },
  {
    question: 'Which review platforms are supported?',
    answer:
      'ReviewAgent currently supports Google Business Profile, TripAdvisor, Yelp, Booking.com, and Facebook Reviews. We are actively adding more integrations. Pro and Business plan users get access to all platforms simultaneously, while Free plan users can connect one platform.'
  },
  {
    question: 'Is the AI response quality good enough to represent my business?',
    answer:
      'Yes. ReviewAgent uses advanced large language models fine-tuned specifically for hospitality and beauty businesses in Europe. You can set your brand tone (friendly, professional, formal), add custom phrases, and define topics to avoid. Every response sounds human and on-brand. Business plan users also get a dedicated onboarding session to configure the AI to their exact voice.'
  },
  {
    question: 'How does ReviewAgent handle negative reviews?',
    answer:
      'Negative reviews trigger a special workflow. The AI crafts an empathetic, solution-oriented response that acknowledges the issue without admitting liability. You receive an instant alert via email or Slack (Pro and Business plans) so you can review the draft before it is posted. You always have the final word — ReviewAgent never posts a response to a 1-star or 2-star review without your explicit approval unless you enable full-auto mode in settings.'
  },
  {
    question: 'Can I try ReviewAgent before paying?',
    answer:
      'Absolutely. The Free plan gives you full access to core features for one location and one connected platform with up to 30 AI responses per month — no credit card required. You can upgrade to Pro or Business at any time from your dashboard, and your existing data and settings carry over instantly.'
  },
  {
    question: 'How is billing handled and can I cancel anytime?',
    answer:
      'All plans are billed monthly or annually in EUR. Annual billing gives you two months free compared to monthly. You can cancel your subscription at any time from your account settings — no phone calls, no cancellation fees. Your plan remains active until the end of the current billing period, and you keep access to all data exports.'
  },
  {
    question: 'Is my customer data safe and GDPR-compliant?',
    answer:
      'Yes. ReviewAgent is fully GDPR-compliant. All data is stored on EU-based servers (Frankfurt, Germany). We act as a data processor under your instructions, and we provide a Data Processing Agreement (DPA) for all paid plans. We never sell or share your data with third parties. Review content processed by the AI is not used for model training.'
  },
  {
    question: 'Do you offer a dedicated plan for restaurant or salon chains with multiple locations?',
    answer:
      'Yes — the Business plan supports up to 10 locations under a single account, with a unified dashboard, per-location reporting, and team access controls. If you manage more than 10 locations, contact us for an Enterprise quote. We work with several European hospitality groups and offer custom pricing, SLA guarantees, and a dedicated customer success manager.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="py-24 px-4" style={{ backgroundColor: '#0a0a0f' }}>
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4 border"
            style={{ color: '#00e5ff', borderColor: 'rgba(0,229,255,0.25)', backgroundColor: 'rgba(0,229,255,0.06)' }}
          >
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Frequently asked questions
          </h2>
          <p className="text-gray-400 text-lg">
            Everything you need to know about ReviewAgent. Can&apos;t find an answer?{' '}
            <a
              href="mailto:hello@ailnex.com"
              className="underline underline-offset-4 transition-colors duration-200"
              style={{ color: '#00e5ff' }}
            >
              Email us
            </a>
            .
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-xl border transition-all duration-200"
                style={{
                  backgroundColor: '#111118',
                  borderColor: isOpen ? 'rgba(0,229,255,0.35)' : 'rgba(255,255,255,0.07)'
                }}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left group"
                  aria-expanded={isOpen}
                >
                  <span
                    className="text-base font-medium transition-colors duration-200"
                    style={{ color: isOpen ? '#00e5ff' : '#f1f5f9' }}
                  >
                    {faq.question}
                  </span>
                  <span
                    className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300"
                    style={{
                      backgroundColor: isOpen ? 'rgba(0,229,255,0.15)' : 'rgba(255,255,255,0.06)',
                      transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)'
                    }}
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 1V11M1 6H11"
                        stroke={isOpen ? '#00e5ff' : '#94a3b8'}
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </button>

                <div
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{ maxHeight: isOpen ? '400px' : '0px' }}
                >
                  <p className="px-6 pb-5 text-gray-400 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div
          className="mt-14 rounded-2xl p-8 text-center border"
          style={{
            backgroundColor: '#111118',
            borderColor: 'rgba(0,229,255,0.15)',
            backgroundImage: 'radial-gradient(ellipse at 50% 0%, rgba(0,229,255,0.06) 0%, transparent 70%)'
          }}
        >
          <h3 className="text-xl font-semibold text-white mb-2">
            Still have questions?
          </h3>
          <p className="text-gray-400 text-sm mb-6">
            Our team is happy to walk you through ReviewAgent and help you pick the right plan for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="mailto:hello@ailnex.com"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold border transition-all duration-200 hover:opacity-80"
              style={{
                borderColor: 'rgba(0,229,255,0.4)',
                color: '#00e5ff',
                backgroundColor: 'rgba(0,229,255,0.08)'
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="#00e5ff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                <polyline points="22,6 12,13 2,6" stroke="#00e5ff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Email us
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:opacity-90"
              style={{ backgroundColor: '#00e5ff', color: '#0a0a0f' }}
            >
              View pricing
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M13 6l6 6-6 6" stroke="#0a0a0f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
