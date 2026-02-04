import { getPageData } from '@/lib/api'
import { PageContent } from '@/components/PageContent'
import { Metadata } from 'next'
import Link from 'next/link'

export const revalidate = 60

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageData('services')
  return {
    title: page?.title || 'Services - Patel Consulting',
  }
}

export default async function ServicePage() {
  const page = await getPageData('services')

  if (!page) {
    return <div>Page not found</div>
  }

  const services = [
    { id: '1', name: 'Strategic Planning', slug: 'strategic-planning', description: 'Long-term business strategy development and implementation planning' },
    { id: '2', name: 'Business Transformation', slug: 'business-transformation', description: 'Organizational change management and transformation consulting' },
    { id: '3', name: 'Performance Optimization', slug: 'performance-optimization', description: 'Operational efficiency improvement and performance enhancement' },
    { id: '4', name: 'Management Consulting', slug: 'management-consulting', description: 'Leadership development and management effectiveness consulting' },
    { id: '5', name: 'Market Expansion', slug: 'market-expansion', description: 'Market entry strategies and business expansion consulting' },
    { id: '6', name: 'Quality Excellence', slug: 'quality-excellence', description: 'Quality management and process improvement consulting' }
  ]

  return (
    <div>
      <PageContent page={page} />
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold text-primary-800 mb-8 text-center">Our Consulting Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link
              key={service.id}
              href={`/service-${service.id}`}
              className="group p-6 border-2 border-primary-600 rounded-xl hover:bg-primary-50 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-3 text-primary-700 group-hover:text-primary-800">
                {service.name}
              </h3>
              <p className="text-gray-600 group-hover:text-gray-700">{service.description}</p>
              <div className="mt-4 text-primary-600 font-medium group-hover:text-primary-700">
                Learn More →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
