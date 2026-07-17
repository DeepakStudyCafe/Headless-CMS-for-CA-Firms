import { getPageData } from '@/lib/api'
import { PageContent } from '@/components/PageContent'
import { Metadata } from 'next'
import Link from 'next/link'

export const revalidate = 60

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageData('services')
  return {
    title: page?.title || 'Services - MAY & Associates',
  }
}

export default async function ServicePage() {
  const page = await getPageData('services')

  if (!page) {
    return <div>Page not found</div>
  }

  const services = [
    { id: '1', name: 'Bookkeeping', slug: 'bookkeeping', description: 'Comprehensive bookkeeping and financial record maintenance.' },
    { id: '2', name: 'GST Filing', slug: 'gst-filing', description: 'Expert assistance in GST registration, filing, and compliance.' },
    { id: '3', name: 'Payroll', slug: 'payroll', description: 'Efficient and accurate payroll processing for your workforce.' },
    { id: '4', name: 'Tax Planning', slug: 'tax-planning', description: 'Strategic tax optimization to minimize liabilities.' },
    { id: '5', name: 'Company Formation', slug: 'company-formation', description: 'End-to-end support for business incorporation and setup.' },
    { id: '6', name: 'Compliance', slug: 'compliance', description: 'Ensuring your business meets all statutory requirements.' },
    { id: '7', name: 'Audit Services', slug: 'audit-services', description: 'High-quality auditing services to ensure financial integrity.' },
    { id: '8', name: 'Financial Advisory', slug: 'financial-advisory', description: 'Sound financial advice and capital management solutions.' },
  ]

  return (
    <div>
      <PageContent page={page} />
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold text-blue-900 mb-8 text-center">Our Specialized Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link
              key={service.id}
              href={`/services/${service.slug}`}
              className="group p-6 border-2 border-blue-600 rounded-xl hover:bg-blue-50 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-3 text-blue-700 group-hover:text-blue-800">
                {service.name}
              </h3>
              <p className="text-gray-600 group-hover:text-gray-700">{service.description}</p>
              <div className="mt-4 text-blue-600 font-medium group-hover:text-blue-700">
                Learn More →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
