'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'What is ReviewAgent and how does it work?',
    answer: 'ReviewAgent is an AI-powered review management tool designed for restaurants and beauty salons. It automatically monitors your Google reviews, generates personalized responses using AI, and helps you maintain a strong online reputation — all without spending hours manually replying to each review.'
  },
  {
    question: 'Which platforms does ReviewAgent support?',
    answer: 'Currently ReviewAgent supports Google Business Profile reviews. Support for Tripadvisor, Yelp, Booking.com, and Facebook Reviews is coming in Q3 2025. Pro and Business plan users will get early access to new integrations.'
  },
  {
    question: 'Is my data secure? Where is it stored?',
    answer: 'Yes. All data is stored in EU-based servers (Frankfurt, Germany) in compliance with GDPR. We never sell your data to third parties. Your review data and customer information are encrypted at rest and in transit using AES-256 and TLS 1.3.'
  },
  {
    question: 'Can I customize the AI-generated responses?',
    answer: 'Absolutely. On the Pro and Business plans you can set your brand tone of voice, create response templates, define keywords to include or avoid, and review AI drafts before they go live. The Free plan uses standard AI responses with basic customization.'
  },
  {
    question: 'What happens when I exceed my monthly review limit?',
    answer: 'On the Free plan, once you reach 30 responses per month, new reviews are queued and responded to in the following billing cycle. You will receive an email notification when you are at 80% of your limit. You can upgrade your plan at any time to avoid interruptions.'
  },
  {
    question: 'Does the Business plan support multiple locations?',
    answer: 'Yes. The Business plan is built specifically for multi-location businesses. You can manage up to 20 locations from a single dashboard, set location-specific response styles, and view aggregated analytics across all your venues. Need more than 20 locations? Contact us for a custom Enterprise quote.'
  },
  {
    question: 'How long does it take to set up ReviewAgent?',
    answer: 'Setup takes less than 10 minutes. You connect your Google Business Profile, configure your preferences, and ReviewAgent starts monitoring your reviews immediately. No technical knowledge required — if you can use email, you can use ReviewAgent.'
  },
  {
    question: 'Can I cancel my subscription at any time?',
    answer: 'Yes, you can cancel at any time with no cancellation fees. Your plan remains active until the end of the current billing period. After cancellation, you retain read-only access to your review history and analytics for 30 days.'
  },
  {
    question: 'Do you offer a free trial for paid plans?',
    answer: 'We offer a 14-day free trial on the Pro plan — no credit card required. You get full access to all Pro features so you can see the impact before committing. After the trial, you choose to subscribe or automatically roll back to the Free plan.'
  },
  {
    question: 'What languages does the AI respond in?',
    answer: 'ReviewAgent automatically detects the language of each review and responds in the same language. We support 28 languages including English, German, Spanish, French, Italian, Polish, Dutch, Portuguese, and all major European languages. This is included in all plans.'
  }
];

function FAQItem({ item, isOpen, onToggle }: { item: FAQItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border border-white/10 rounded-xl overflow-hidden transition-all duration-200 hover:border-[#00e5ff]/30">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-[#111118] hover:bg-white/5 transition-colors duration-200"
        aria-expanded={isOpen}
      >
        <span className="text-white font-medium text-base leading-snug">{item.question}</span>
        <span
          className={`flex-shrink-0 w-6 h-6 rounded-full border border-white/20 flex items-center justify-center transition-all duration-300 ${
            isOpen ? 'bg-[#00e5ff]/20 border-[#00e5ff]/50 rotate-45' : 'bg-white/5'
          }`}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`transition-colors duration-200 ${isOpen ? 'text-[#00e5ff]' : 'text-white/50'}`}
          >
            <path
              d="M6 1V11M1 6H11"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-5 pt-1 bg-[#111118] border-t border-white/5">
          <p className="text-white/60 text-sm leading-relaxed">{item.answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-24 px-4 overflow-hidden" style={{ backgroundColor: '#0a0a0f' }}>
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full opacity-5 blur-3xl"
          style={{ background: 'radial-gradient(circle, #00e5ff 0%, transparent 70%)' }}
        />
      </div>

      <div className="relative max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00e5ff]/30 bg-[#00e5ff]/5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00e5ff]"></span>
            <span className="text-[#00e5ff] text-xs font-semibold uppercase tracking-widest">FAQ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
            Everything you need to know
          </h2>
          <p className="text-white/50 text-base max-w-xl mx-auto">
            Can't find the answer you're looking for? Reach out to our team at{' '}
            <a
              href="mailto:support@ailnex.com"
              className="text-[#00e5ff] hover:underline transition-colors duration-200"
            >
              support@ailnex.com
            </a>
          </p>
        </div>

        {/* FAQ List */}
        <div className="flex flex-col gap-3">
          {faqs.map((item, index) => (
            <FAQItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center p-8 rounded-2xl border border-white/10 bg-[#111118] relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              background:
                'radial-gradient(ellipse at 50% 0%, #00e5ff 0%, transparent 70%)'
            }}
          />
          <div className="relative">
            <div className="w-12 h-12 rounded-full bg-[#00e5ff]/10 border border-[#00e5ff]/30 flex items-center justify-center mx-auto mb-4">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11 2C6.03 2 2 6.03 2 11C2 12.74 2.5 14.36 3.35 15.73L2 20L6.27 18.65C7.64 19.5 9.26 20 11 20C15.97 20 20 15.97 20 11C20 6.03 15.97 2 11 2Z"
                  stroke="#00e5ff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M8 11H14M8 8H14M8 14H11" stroke="#00e5ff" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">Still have questions?</h3>
            <p className="text-white/50 text-sm mb-5">
              Our team typically responds within 2 hours during business hours (CET).
            </p>
            <a
              href="mailto:support@ailnex.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-[#0a0a0f] transition-all duration-200 hover:opacity-90 hover:scale-105 active:scale-95"
              style={{ backgroundColor: '#00e5ff' }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M2 4L8 9L14 4M2 4H14V12H2V4Z"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}