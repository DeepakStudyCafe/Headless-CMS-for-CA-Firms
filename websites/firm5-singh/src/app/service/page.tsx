import { getPageData } from '@/lib/api'
import { PageContent } from '@/components/PageContent'
import { Metadata } from 'next'
import Link from 'next/link'

export const revalidate = 60

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageData('services')
  return {
    title: page?.title || 'Services - Singh & Co. Advisors',
  }
}

export default async function ServicePage() {
  const page = await getPageData('services')

  if (!page) {
    return <div>Page not found</div>
  }

  const services = [
    { id: '1', name: 'Digital Accounting', slug: 'digital-accounting', description: 'Cloud-based accounting and bookkeeping services with real-time reporting' },
    { id: '2', name: 'Startup Advisory', slug: 'startup-advisory', description: 'Complete startup setup, compliance, and business advisory services' },
    { id: '3', name: 'Business Automation', slug: 'business-automation', description: 'Process automation and digital transformation solutions' },
    { id: '4', name: 'Financial Analytics', slug: 'financial-analytics', description: 'Advanced financial reporting and business analytics' },
    { id: '5', name: 'Compliance Management', slug: 'compliance-management', description: 'Automated compliance and regulatory services' },
    { id: '6', name: 'HR & Payroll', slug: 'hr-payroll', description: 'Complete HR and payroll management solutions' }
  ]

  return (
    <div>
      <PageContent page={page} />
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold text-orange-800 mb-8 text-center">Our Digital Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link
              key={service.id}
              href={`/service-${service.id}`}
              className="group p-6 border-2 border-orange-600 rounded-xl hover:bg-orange-50 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-3 text-orange-700 group-hover:text-orange-800">
                {service.name}
              </h3>
              <p className="text-gray-600 group-hover:text-gray-700">{service.description}</p>
              <div className="mt-4 text-orange-600 font-medium group-hover:text-orange-700">
                Learn More →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
