import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Banner from '@/components/Banner'
import { getSeoMetadata } from '@/lib/seoHelper';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const meta = await getSeoMetadata('privacyPolicy');
  return {
    title: meta.title,
    description: meta.description,
  };
}

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <Banner 
        title="Privacy Policy" 
        subtitle="Your privacy is important to us. Learn how Webcafe protects and handles your data." 
      />
       
      <div className="container-custom py-16">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
          <div className="prose prose-lg text-gray-600 max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h2>
            <p><strong>Last Updated: {new Date().toLocaleDateString()}</strong></p>
            
            <p className="mt-4">
              At <strong>Webcafe</strong>, specialized in providing premium website templates for Chartered Accountants and professional firms, we are committed to safeguarding your privacy. This policy outlines our practices concerning the collection, use, and protection of your personal information when you use our website or purchase our templates and services.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">1. Information We Collect</h3>
            <p>
              When you purchase a CA website template or contact us for custom development, we may collect:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li><strong>Personal Data:</strong> Name, firm name, email address, phone number, and physical address.</li>
              <li><strong>Firm Data:</strong> Logo, GSTIN, team details, and other content necessary for configuring your website template.</li>
              <li><strong>Technical Data:</strong> IP address, browser type, and usage patterns gathered naturally when you visit Webcafe.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">2. How We Use Your Information</h3>
            <p>
              We use the collected information primarily to deliver our digital products and services effectively to your CA firm. Specifically to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Set up, configure, and host your professional CA website.</li>
              <li>Process transactions securely and send invoices.</li>
              <li>Provide ongoing client support, website maintenance, and digital marketing insights.</li>
              <li>Improve our website templates and introduce new features for Chartered Accountants.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">3. Data Security</h3>
            <p>
              We implement industry-standard security measures to protect your firm's data against unauthorized access, alteration, disclosure, or destruction. However, no internet transmission is completely secure, and we cannot guarantee absolute security.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">4. Third-Party Services</h3>
            <p>
              Webcafe may employ third-party companies and individuals to facilitate our services (e.g., payment gateways, domain registrars, hosting providers like AWS/Hostinger). These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">5. Contact Us</h3>
            <p>
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <p className="mt-2">
              Email: <a href="mailto:support@studycafe.in" className="text-primary-600 hover:underline">support@studycafe.in</a><br />
              Address: 1003, 10th Floor, Modi Tower, 98, Nehruplace, Delhi 110019
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

export const dynamic = 'force-dynamic';
