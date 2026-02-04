import { getPageData } from '@/lib/api'
import { PageContent } from '@/components/PageContent'
import { Metadata } from 'next'

export const revalidate = 60

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageData('team')
  return {
    title: page?.title || 'Our Team - Verma Accounting Services',
    description: 'Meet our professional accounting team'
  }
}

export default async function TeamPage() {
  const page = await getPageData('team')

  if (!page) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-4xl font-light text-gray-900 mb-4">Page Not Found</h1>
          <p className="text-gray-600 font-light">This page is being configured.</p>
        </div>
      </div>
    )
  }

  return <PageContent page={page} />
}
