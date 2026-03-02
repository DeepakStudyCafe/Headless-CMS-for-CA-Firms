import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PaymentForm from '@/components/PaymentForm'

export default function PaymentPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PaymentForm />
      <Footer />
    </main>
  )
}
