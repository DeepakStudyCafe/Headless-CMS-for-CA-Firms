import { getPageData } from '@/lib/api'
import { PageContent } from '@/components/PageContent'
import { Metadata } from 'next'
import Link from 'next/link'

export const revalidate = 60

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageData('services')
  return {
    title: page?.title || 'Services - Sharma & Associates',
  }
}

export default async function ServicePage() {
  const page = await getPageData('services')

  if (!page) {
    return <div>Page not found</div>
  }

  return (
    <div>
      <PageContent page={page} />
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((num) => (
            <Link
              key={num}
              href={`/service-${num}`}
              className="p-6 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-2">Service {num}</h3>
              <p className="text-gray-600">Click to learn more about our specialized service offerings</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
