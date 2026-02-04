import { getPageData } from '@/lib/api'
import { PageContent } from '@/components/PageContent'

export const revalidate = 60

export default async function HomePage() {
  const page = await getPageData('home')
  if (!page) return <div>Page not found</div>
  return <PageContent page={page} />
}
