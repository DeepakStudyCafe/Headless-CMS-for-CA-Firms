import { getPageData } from '@/lib/api'
import { PageContent } from '@/components/PageContent'
import { Metadata } from 'next'

export const revalidate = 60

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageData('audit-services')
  return {
    title: page?.title || 'Audit Services - Sharma & Associates',
    description: 'Professional audit and assurance services'
  }
}

export default async function AuditServicesPage() {
  const page = await getPageData('audit-services')

  if (!page) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Page Not Found</h1>
          <p className="text-gray-600">This page is being configured.</p>
        </div>
      </div>
    )
  }

  return <PageContent page={page} />
}
