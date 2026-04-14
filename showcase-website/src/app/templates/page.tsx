import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import TemplatesPageContent from '@/components/TemplatesPageContent'
import { getSeoMetadata } from '@/lib/seoHelper';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const meta = await getSeoMetadata('templates');
  return {
    title: meta.title,
    description: meta.description,
  };
}

export default function TemplatesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <TemplatesPageContent />
      <Footer />
    </main>
  )
}

export const dynamic = 'force-dynamic';
