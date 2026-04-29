import Hero from '@/components/Hero';
import Sections from '@/components/Sections';
import Pricing from '@/components/Pricing';

export default function HomePage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#0a0a0f', color: '#ffffff' }}>
      <Hero />
      <Sections />
      <Pricing />
    </main>
  );
}