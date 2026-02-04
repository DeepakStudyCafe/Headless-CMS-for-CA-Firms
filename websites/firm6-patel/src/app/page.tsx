import '@/app/globals.css'
import { getPageData } from '@/lib/api'
import { PageContent } from '@/components/PageContent'
import { Metadata } from 'next'

export const revalidate = 60

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageData('home')
  return {
    title: page?.title || 'Patel Consulting',
    description: page?.sections?.[0]?.textContent?.subheading || 'Teal/Cyan themed consulting website',
  }
}

export default async function Home() {
  const page = await getPageData('home')

  if (!page) {
    return <div>Page not found</div>
  }

  return <PageContent page={page} />
}
