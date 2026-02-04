import { getPageData } from '@/lib/api'
import { PageContent } from '@/components/PageContent'
import { Metadata } from 'next'
import Link from 'next/link'

export const revalidate = 60

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageData('services')
  return {
    title: page?.title || 'Services - Kapoor Financial Services',
  }
}

export default async function ServicePage() {
  const page = await getPageData('services')

  if (!page) {
    return <div>Page not found</div>
  }

  const services = [
    { id: '1', name: 'Investment Banking', slug: 'investment-banking', description: 'Comprehensive investment banking services including M&A advisory' },
    { id: '2', name: 'Wealth Management', slug: 'wealth-management', description: 'Personal wealth planning and portfolio management services' },
    { id: '3', name: 'Corporate Finance', slug: 'corporate-finance', description: 'Strategic financial advisory and corporate restructuring' },
    { id: '4', name: 'Portfolio Management', slug: 'portfolio-management', description: 'Professional portfolio management services' },
    { id: '5', name: 'Financial Planning', slug: 'financial-planning', description: 'Comprehensive financial planning and advisory' },
    { id: '6', name: 'Risk Management', slug: 'risk-management', description: 'Financial risk assessment and mitigation strategies' }
  ]

  return (
    <div>
      <PageContent page={page} />
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold text-emerald-800 mb-8 text-center">Our Service Portfolio</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link
              key={service.id}
              href={`/service-${service.id}`}
              className="group p-6 border-2 border-emerald-600 rounded-xl hover:bg-emerald-50 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-3 text-emerald-700 group-hover:text-emerald-800">
                {service.name}
              </h3>
              <p className="text-gray-600 group-hover:text-gray-700">{service.description}</p>
              <div className="mt-4 text-emerald-600 font-medium group-hover:text-emerald-700">
                Learn More →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
