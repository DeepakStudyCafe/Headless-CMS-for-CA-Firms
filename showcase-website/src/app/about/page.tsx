import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AboutContent from '@/components/AboutContent'
import { getSeoMetadata } from '@/lib/seoHelper';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const meta = await getSeoMetadata('about');
  return {
    title: meta.title,
    description: meta.description,
  };
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <AboutContent />
      <Footer />
    </main>
  )
}
