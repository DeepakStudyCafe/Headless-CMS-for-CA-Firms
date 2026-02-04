import { getPageData } from '@/lib/api'
import { PageContent } from '@/components/PageContent'
import { Metadata } from 'next'

export const revalidate = 60

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageData('team')
  return {
    title: page?.title || 'Our Team - Sharma & Associates',
  }
}

export default async function TeamPage() {
  const page = await getPageData('team')

  if (!page) {
    return <div>Page not found</div>
  }

  return <PageContent page={page} />
}
