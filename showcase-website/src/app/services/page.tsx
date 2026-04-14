import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ServicesContent from '@/components/ServicesContent'
import { getSeoMetadata } from '@/lib/seoHelper';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const meta = await getSeoMetadata('services');
  return {
    title: meta.title,
    description: meta.description,
  };
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ServicesContent />
      <Footer />
    </main>
  )
}
