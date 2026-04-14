import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PaymentForm from '@/components/PaymentForm'
import { getSeoMetadata } from '@/lib/seoHelper';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const meta = await getSeoMetadata('payment');
  return {
    title: meta.title,
    description: meta.description,
  };
}

export default function PaymentPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PaymentForm />
      <Footer />
    </main>
  )
}
