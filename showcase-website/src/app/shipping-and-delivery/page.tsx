import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Banner from '@/components/Banner'
import { getSeoMetadata } from '@/lib/seoHelper';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const meta = await getSeoMetadata('shipping');
  return {
    title: meta.title,
    description: meta.description,
  };
}

export default function ShippingAndDelivery() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <Banner 
        title="Shipping & Delivery Policy" 
        subtitle="Understanding how our digital website products and CA firm services are delivered." 
      />
      <div className="container-custom py-16">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
          <div className="prose prose-lg text-gray-600 max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Shipping and Delivery Policy</h2>
            <p><strong>Last Updated: {new Date().toLocaleDateString()}</strong></p>
            
            <p className="mt-4">
              At <strong>Webcafe</strong>, we provide digital solutions—primarily specialized website templates, custom web development, and hosting for Chartered Accountant firms. This policy details how our digital products and services are "delivered" to you.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">1. Digital Nature of Deliverables</h3>
            <p>
              Since all our website templates and consulting services are delivered electronically via the internet, <strong>no physical shipping is involved</strong>. We do not dispatch any CDs, DVDs, or printed manuals to physical addresses unless specifically arranged in an enterprise agreement.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">2. Timeline for Website Template Delivery</h3>
            <p>
              Our standard delivery workflow involves configuring the chosen template for your CA firm:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li><strong>Initial Setup:</strong> Upon receiving your requisite materials (logo, firm details, specific service list) and initial payment, standard template installation typically takes <strong>2 to 4 business days</strong>.</li>
              <li><strong>Review Phase:</strong> Once set up, we transfer a staging link for your review. Timeframes for final delivery depend on the speed of feedback provided by your firm's partners.</li>
              <li><strong>Live Deployment:</strong> After approval, moving the site to your live domain takes 24 to 48 hours, dependent on domain DNS propagation times.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">3. Access Credentials Delivery</h3>
            <p>
              Upon successful completion and full payment, we will deliver the following to your registered email address securely:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Admin dashboard login credentials.</li>
              <li>Hosting control panel access (if purchased under an exclusive ownership plan).</li>
              <li>Digital documentation or tutorials highlighting how to modify your CA site content.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">4. Maintenance & Ongoing Support Services</h3>
            <p>
              For maintenance packages (e.g., SEO tracking, content updates, security patches), delivery of the service is continual. Monthly summary reports, if included in your plan, are emailed to you electronically in PDF format at the end of each billing cycle.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">5. Inquiries</h3>
            <p>
              If your expected delivery timeline has exceeded the estimate or you misplace your delivery emails, please reach out to our project management team promptly at <a href="mailto:support@studycafe.in" className="text-primary-600 hover:underline">support@studycafe.in</a>.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

export const dynamic = 'force-dynamic';
