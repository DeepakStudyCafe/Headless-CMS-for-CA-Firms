import PageEditorClient from './PageEditor.client'

// For static export, return empty params so admin pages aren't pre-rendered.
export async function generateStaticParams() {
  return []
}

export default function PageEditor({ params }: { params: { pageId: string } }) {
  return <PageEditorClient pageId={params.pageId} />
}