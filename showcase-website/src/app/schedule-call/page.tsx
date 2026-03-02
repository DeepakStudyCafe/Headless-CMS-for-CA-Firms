import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScheduleCallContent from '@/components/ScheduleCallContent'

export default function ScheduleCallPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ScheduleCallContent />
      <Footer />
    </main>
  )
}
