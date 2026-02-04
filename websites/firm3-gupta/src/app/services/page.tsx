import { getPageData } from '@/lib/api'
import { PageContent } from '@/components/PageContent'
import { Metadata } from 'next'

export const revalidate = 60

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageData('services')
  return {
    title: page?.title || 'Our Services - Gupta Tax Advisors',
    description: 'Expert tax consultancy and compliance services'
  }
}

export default async function ServicesPage() {
  const page = await getPageData('services')

  if (!page) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-900 to-pink-900 bg-clip-text text-transparent mb-4">Page Not Found</h1>
          <p className="text-gray-700">This page is being configured.</p>
        </div>
      </div>
    )
  }

  return <PageContent page={page} />
}
