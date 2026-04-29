'use client';

import { useState } from 'react';
import { Star, ThumbsUp, MessageSquare, ChevronLeft, ChevronRight } from 'lucide-react';

const reviews = [
  {
    id: '1',
    author: 'Maria S.',
    rating: 5,
    text: 'Amazing food and great service! Will definitely come back.',
    platform: 'Google',
    date: '2 days ago',
    aiReply: 'Thank you so much, Maria! We\'re thrilled you enjoyed your experience. We look forward to welcoming you back soon!',
  },
  {
    id: '2',
    author: 'Thomas K.',
    rating: 3,
    text: 'Food was good but waiting time was too long.',
    platform: 'Google',
    date: '5 days ago',
    aiReply: 'Hi Thomas, thank you for your honest feedback. We apologize for the wait and are actively improving our service speed. Hope to serve you better next time!',
  },
  {
    id: '3',
    author: 'Anna L.',
    rating: 5,
    text: 'Best salon in the city! My hair looks fantastic.',
    platform: 'Google',
    date: '1 week ago',
    aiReply: 'We\'re so happy to hear that, Anna! Our team works hard to make every visit special. See you next time!',
  },
];

export default function Demo() {
  const [current, setCurrent] = useState(0);
  const [showReply, setShowReply] = useState(false);

  const review = reviews[current];

  const prev = () => { setShowReply(false); setCurrent((c) => (c - 1 + reviews.length) % reviews.length); };
  const next = () => { setShowReply(false); setCurrent((c) => (c + 1) % reviews.length); };

  return (
    <section className="py-24 px-4" style={{ background: '#111118' }}>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4"
            style={{ background: 'rgba(0,229,255,0.08)', color: '#00e5ff', border: '1px solid rgba(0,229,255,0.2)' }}>
            Live Demo
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">See ReviewAgent in action</h2>
          <p className="text-gray-400">Real reviews, AI-generated replies in seconds.</p>
        </div>

        <div className="rounded-2xl p-6 md:p-8" style={{ background: '#0a0a0f', border: '1px solid rgba(255,255,255,0.07)' }}>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <MessageSquare size={18} style={{ color: '#00e5ff' }} />
              <span className="text-sm font-medium text-white">{review.platform} Review</span>
            </div>
            <span className="text-xs text-gray-500">{review.date}</span>
          </div>

          <div className="flex items-center gap-1 mb-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={16} fill={i < review.rating ? '#f59e0b' : 'none'}
                style={{ color: i < review.rating ? '#f59e0b' : '#374151' }} />
            ))}
          </div>

          <p className="text-white font-medium mb-1">{review.author}</p>
          <p className="text-gray-400 text-sm mb-6 leading-relaxed">{review.text}</p>

          {!showReply ? (
            <button onClick={() => setShowReply(true)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all hover:scale-105"
              style={{ background: '#00e5ff', color: '#0a0a0f' }}>
              <ThumbsUp size={14} />
              Generate AI Reply
            </button>
          ) : (
            <div className="rounded-xl p-4" style={{ background: 'rgba(0,229,255,0.06)', border: '1px solid rgba(0,229,255,0.2)' }}>
              <p className="text-xs font-semibold mb-2" style={{ color: '#00e5ff' }}>AI Reply</p>
              <p className="text-sm text-gray-300 leading-relaxed">{review.aiReply}</p>
            </div>
          )}
        </div>

        <div className="flex items-center justify-center gap-4 mt-6">
          <button onClick={prev} className="p-2 rounded-lg transition-colors hover:bg-white/10"
            style={{ color: 'rgba(255,255,255,0.5)' }}>
            <ChevronLeft size={20} />
          </button>
          <span className="text-sm text-gray-500">{current + 1} / {reviews.length}</span>
          <button onClick={next} className="p-2 rounded-lg transition-colors hover:bg-white/10"
            style={{ color: 'rgba(255,255,255,0.5)' }}>
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
