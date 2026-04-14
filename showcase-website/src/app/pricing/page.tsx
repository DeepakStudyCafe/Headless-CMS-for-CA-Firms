import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PricingContent from '@/components/PricingContent'
import { getSeoMetadata } from '@/lib/seoHelper';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const meta = await getSeoMetadata('pricing');
  return {
    title: meta.title,
    description: meta.description,
  };
}

export default function PricingPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PricingContent />
      <Footer />
    </main>
  )
}

export const dynamic = 'force-dynamic';
