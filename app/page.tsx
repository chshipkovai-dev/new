'use client';

import { useState } from 'react';
import Hero from '@/components/Hero';
import Pricing from '@/components/Pricing';
import LeadModal, { type Plan } from '@/components/LeadModal';
import { FeaturesSection, TestimonialsSection, CTABanner, Footer } from '@/components/Sections';

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<Plan>('pro');

  const handleOpenModal = (plan: string) => {
    setSelectedPlan(plan as Plan);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <main className="min-h-screen" style={{ backgroundColor: '#0a0a0f' }}>
      <Hero onOpenModal={handleOpenModal} />
      <FeaturesSection />
      <TestimonialsSection />
      <Pricing onSelectPlan={(plan) => handleOpenModal(plan)} />
      <CTABanner onOpenModal={handleOpenModal} />
      <Footer />
      <LeadModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        selectedPlan={selectedPlan}
      />
    </main>
  );
}
