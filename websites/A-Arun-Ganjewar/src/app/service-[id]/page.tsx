import { getPageData } from '@/lib/api'
import { PageContent } from '@/components/PageContent'
import { Metadata } from 'next'

export const revalidate = 60

export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
  ]
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const page = await getPageData(`service-${params.id}`)
  return {
    title: page?.title || `Service ${params.id} - Singh & Co. Advisors`,
  }
}

export default async function ServiceDetailPage({ params }: { params: { id: string } }) {
  const page = await getPageData(`service-${params.id}`)

  if (!page) {
    return <div>Service not found</div>
  }

  return <PageContent page={page} />
}
