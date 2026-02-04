import { getPageData } from '@/lib/api'
import { PageContent } from '@/components/PageContent'
import { Metadata } from 'next'

export const revalidate = 60

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageData('about')
  return {
    title: page?.title || 'About Us - Patel Consulting',
  }
}

export default async function AboutPage() {
  const page = await getPageData('about')

  if (!page) {
    return <div>Page not found</div>
  }

  return <PageContent page={page} />
}
