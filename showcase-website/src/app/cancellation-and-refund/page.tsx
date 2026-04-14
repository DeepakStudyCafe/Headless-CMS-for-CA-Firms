import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Banner from '@/components/Banner'
import { getSeoMetadata } from '@/lib/seoHelper';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const meta = await getSeoMetadata('cancellationRefund');
  return {
    title: meta.title,
    description: meta.description,
  };
}

export default function CancellationAndRefund() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
        <Banner 
          title="Cancellation & Refund Policy" 
          subtitle="Our policies regarding service cancellations, renewals, and refunds." 
        />
      <div className="container-custom py-16">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
          <div className="prose prose-lg text-gray-600 max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Cancellation and Refund Policy</h2>
            <p><strong>Last Updated: {new Date().toLocaleDateString()}</strong></p>
            
            <p className="mt-4">
              At <strong>Webcafe</strong>, we aim to provide high-quality digital deliverables, such as modern website templates tailored for CA firms. Given the digital nature of our assets and immediate deployment processes, we have specific parameters for cancellations and refunds.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">1. Template & Digital Goods Purchases</h3>
            <p>
              Due to the non-returnable nature of downloaded or deployed digital software/templates:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li><strong>No Refunds</strong> are provided once a website template has been successfully deployed to the server or handed over to the client.</li>
              <li>A refund request may be considered <strong>only</strong> if it is made before any deployment, configuration, or structural work has begun.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">2. Subscription & Hosting Services</h3>
            <p>
              If your CA website is on a recurring hosting and maintenance plan with Webcafe:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>You may <strong>cancel your subscription</strong> at any time by notifying us 15 days before the next billing cycle.</li>
              <li>Cancellations will take effect at the end of the current paid term.</li>
              <li>We do not offer pro-rated refunds for mid-cycle cancellations.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">3. Third-Party Costs</h3>
            <p>
              Any fees paid by Webcafe on your behalf to third parties (such as Domain Name Registrations, SSL certificates, or Premium stock images) are <strong>strictly non-refundable</strong> under any circumstances.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">4. Defective or Undelivered Services</h3>
            <p>
              If we completely fail to deliver the agreed-upon template setup within the stated, extended timeline without valid cause, or if the delivered website drastically deviates from the advertised features and we are unable to rectify it, a partial or full refund may be issued after detailed review by management.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">5. Requesting a Cancellation</h3>
            <p>
              All cancellation and refund requests must be communicated in writing. Please email your details and invoice number to <a href="mailto:support@studycafe.in" className="text-primary-600 hover:underline">support@studycafe.in</a>. Our team typically processes these requests within 5-7 business days.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

export const dynamic = 'force-dynamic';
