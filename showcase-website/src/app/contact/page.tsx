import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ContactContent from '@/components/ContactContent'
import { getSeoMetadata } from '@/lib/seoHelper';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const meta = await getSeoMetadata('contact');
  return {
    title: meta.title,
    description: meta.description,
  };
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ContactContent />
      <Footer />
    </main>
  )
}
