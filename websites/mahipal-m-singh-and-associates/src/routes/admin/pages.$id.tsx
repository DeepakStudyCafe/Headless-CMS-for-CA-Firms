import { createFileRoute } from '@tanstack/react-router'
import AdminPageEditor from '@/pages/admin/AdminPageEditor'

export const Route = createFileRoute('/admin/pages/$id')({
  component: AdminPageEditorWrapper,
})

function AdminPageEditorWrapper() {
  const { id } = Route.useParams()
  return <AdminPageEditor id={id} />
}
