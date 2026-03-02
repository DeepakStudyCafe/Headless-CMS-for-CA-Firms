import Navbar from '@/components/Navbar'
import Hero from '@/components/sections/Hero'
import Features from '@/components/sections/Features'
import About from '@/components/sections/About'
import TemplateFeatures from '@/components/sections/TemplateFeatures'
import Stats from '@/components/sections/Stats'
import Testimonials from '@/components/sections/Testimonials'
import CTA from '@/components/sections/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <About />
      <TemplateFeatures />
      <Stats />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}
