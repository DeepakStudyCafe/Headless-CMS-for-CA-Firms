import { getPageData } from '@/lib/api'
import { PageContent } from '@/components/PageContent'
import { Metadata } from 'next'
import Link from 'next/link'

export const revalidate = 60

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageData('services')
  return {
    title: page?.title || 'Services - David & Co',
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
    </div>
  )
}

