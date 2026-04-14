import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Banner from '@/components/Banner'
import { getSeoMetadata } from '@/lib/seoHelper';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const meta = await getSeoMetadata('terms');
  return {
    title: meta.title,
    description: meta.description,
  };
}

export default function TermsAndConditions() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <Banner 
        title="Terms & Conditions" 
        subtitle="Please read our terms of service carefully before using Webcafe's CA template solutions." 
      />
      <div className="container-custom py-16">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
          <div className="prose prose-lg text-gray-600 max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Terms and Conditions</h2>
            <p><strong>Last Updated: {new Date().toLocaleDateString()}</strong></p>
            
            <p className="mt-4">
              Welcome to <strong>Webcafe</strong>. By accessing our website and purchasing our website templates, development, or hosting services designed for Chartered Accountants, you agree to be bound by these Terms and Conditions.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">1. Use of Our Templates</h3>
            <p>
              Webcafe grants your firm a non-exclusive, non-transferable license to use our templates for your own professional CA practice. You may not:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Resell, redistribute, or sub-license the templates.</li>
              <li>Claim intellectual property rights over the base design or codebase.</li>
              <li>Use the templates for any unlawful, fraudulent, or malicious purposes.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">2. Hosted Services & Maintenance</h3>
            <p>
              If your plan includes hosting and maintenance handled by Webcafe:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>We will make reasonable efforts to ensure 99% uptime of your CA firm website.</li>
              <li>You must provide necessary domain access credentials if you are bringing your own domain.</li>
              <li>Continuous functionality depends on keeping your subscription or maintenance fees up to date.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">3. Content Accuracy & Liability</h3>
            <p>
              While our templates come with pre-filled content relevant to CA services (like GST, audit, tax advisory), <strong>you are entirely responsible</strong> for verifying the accuracy of the content and compliance with the ICAI code of ethics regarding website guidelines or advertisements. Webcafe is not liable for regulatory penalties incurred by your firm.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">4. Revisions and Modifications</h3>
            <p>
              Minor modifications requested shortly after template installation are subject to our standard revisions policy. Major structural changes, custom development, or extensive content uploads will be billed as additional services unless explicitly covered in your purchased plan.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">5. Reverting or Discontinuing</h3>
            <p>
              Webcafe reserves the right to modify or discontinue, temporarily or permanently, the service (or any part thereof) with or without notice. In cases of service closure, appropriate data export options will be provided where applicable.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
