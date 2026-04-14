import Navbar from '@/components/Navbar'
import Hero from '@/components/sections/Hero'
import Features from '@/components/sections/Features'
import About from '@/components/sections/About'
import TemplateFeatures from '@/components/sections/TemplateFeatures'
import TestimonialsCarousel from '@/components/sections/TestimonialsCarousel'
import ReviewsCarousel from '@/components/sections/ReviewsCarousel'
import Stats from '@/components/sections/Stats'
import CTA from '@/components/sections/CTA'
import FAQ from '@/components/sections/FAQ'
import Footer from '@/components/Footer'
import { getSeoMetadata } from '@/lib/seoHelper';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const meta = await getSeoMetadata('home');
  return {
    title: meta.title,
    description: meta.description,
  };
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <About />
      <TestimonialsCarousel />
      <TemplateFeatures />     
      <ReviewsCarousel />
      <Stats />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}
