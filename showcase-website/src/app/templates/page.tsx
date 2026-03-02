import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import TemplatesPageContent from '@/components/TemplatesPageContent'

export default function TemplatesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <TemplatesPageContent />
      <Footer />
    </main>
  )
}
