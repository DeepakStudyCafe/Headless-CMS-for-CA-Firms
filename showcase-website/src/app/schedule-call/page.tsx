import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScheduleCallContent from '@/components/ScheduleCallContent'
import { getSeoMetadata } from '@/lib/seoHelper';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const meta = await getSeoMetadata('scheduleCall');
  return {
    title: meta.title,
    description: meta.description,
  };
}

export default function ScheduleCallPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ScheduleCallContent />
      <Footer />
    </main>
  )
}

export const dynamic = 'force-dynamic';
