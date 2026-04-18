'use client'

import { useState, useEffect, useCallback } from 'react'
import { useRouter, useParams } from 'next/navigation'

const API_URL = process.env.NEXT_PUBLIC_API_URL || ''
const IMG_BASE = API_URL.replace(/\/api$/, '')

function getToken() {
  if (typeof window === 'undefined') return null
  return localStorage.getItem('site_admin_token')
}

async function apiFetch(path: string, options: RequestInit = {}) {
  const token = getToken()
  const res = await fetch(`${API_URL}/site-admin${path}`, {
    ...options,
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(options.headers || {}),
    },
  })
  const data = await res.json()
  if (!res.ok) throw new Error(data.error || 'Request failed')
  return data
}

function resolveImg(url: string | null | undefined) {
  if (!url) return null
  return url.startsWith('http') ? url : `${IMG_BASE}${url}`
}

const inp = 'w-full text-sm border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
const lbl = 'block text-xs font-medium text-gray-600 mb-1'

interface Section {
  id: string
  type: string
  imageUrl: string | null
  textContent: Record<string, any> | null
  order: number
}

interface Page {
  id: string
  title: string
  slug: string
  status: string
  sections?: Section[]
}

export default function PageEditor() {
  const router = useRouter()
  const params = useParams()
  const pageId = params?.pageId as string

  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState<Page | null>(null)
  const [sections, setSections] = useState<Section[]>([])
  const [saving, setSaving] = useState(false)
  const [toast, setToast] = useState<{ msg: string; type: 'ok' | 'err' } | null>(null)

  const showToast = useCallback((msg: string, type: 'ok' | 'err' = 'ok') => {
    setToast({ msg, type })
    setTimeout(() => setToast(null), 3500)
  }, [])

  useEffect(() => {
    const token = getToken()
    if (!token) { router.replace('/admin/login'); return }
    if (!pageId) return
    apiFetch(`/content/pages/${pageId}`)
      .then((d) => {
        setPage(d.data.page)
        setSections(d.data.page.sections || [])
      })
      .catch((e: any) => { showToast(e.message, 'err'); router.replace('/admin/dashboard') })
      .finally(() => setLoading(false))
  }, [router, pageId, showToast])

  const setTC = (sectionId: string, patch: Record<string, any>) =>
    setSections((prev) =>
      prev.map((s) =>
        s.id === sectionId ? { ...s, textContent: { ...(s.textContent || {}), ...patch } } : s
      )
    )

  const setItemField = (sectionId: string, arrayKey: string, idx: number, field: string, val: string) => {
    setSections((prev) =>
      prev.map((s) => {
        if (s.id !== sectionId) return s
        const arr = [...((s.textContent?.[arrayKey]) || [])]
        arr[idx] = { ...arr[idx], [field]: val }
        return { ...s, textContent: { ...(s.textContent || {}), [arrayKey]: arr } }
      })
    )
  }

  const handleImageUpload = async (sectionId: string, file: File) => {
    const token = getToken()
    const formData = new FormData()
    formData.append('image', file)
    try {
      const res = await fetch(`${API_URL}/site-admin/content/upload`, {
        method: 'POST',
        credentials: 'include',
        headers: token ? { Authorization: `Bearer ${token}` } : {},
        body: formData,
      })
      const d = await res.json()
      if (!res.ok) throw new Error(d.error)
      setSections((prev) => prev.map((s) => s.id === sectionId ? { ...s, imageUrl: d.data.imageUrl } : s))
      showToast('Image uploaded')
    } catch (e: any) { showToast(e.message, 'err') }
  }

  const handleItemImageUpload = async (sectionId: string, arrayKey: string, itemIdx: number, file: File) => {
    const token = getToken()
    const formData = new FormData()
    formData.append('image', file)
    try {
      const res = await fetch(`${API_URL}/site-admin/content/upload`, {
        method: 'POST',
        credentials: 'include',
        headers: token ? { Authorization: `Bearer ${token}` } : {},
        body: formData,
      })
      const d = await res.json()
      if (!res.ok) throw new Error(d.error)
      setSections((prev) =>
        prev.map((s) => {
          if (s.id !== sectionId) return s
          const arr = [...((s.textContent?.[arrayKey]) || [])]
          arr[itemIdx] = { ...arr[itemIdx], image: d.data.imageUrl }
          return { ...s, textContent: { ...(s.textContent || {}), [arrayKey]: arr } }
        })
      )
      showToast('Image uploaded')
    } catch (e: any) { showToast(e.message, 'err') }
  }

  const handleSave = async () => {
    setSaving(true)
    try {
      await Promise.all(
        sections.map((s) =>
          apiFetch(`/content/sections/${s.id}`, {
            method: 'PUT',
            body: JSON.stringify({ imageUrl: s.imageUrl, textContent: s.textContent }),
          })
        )
      )
      showToast('Changes saved successfully')
    } catch (e: any) { showToast(e.message, 'err') }
    finally { setSaving(false) }
  }

  const handlePublish = async () => {
    if (!page) return
    setSaving(true)
    try {
      await handleSave()
      await apiFetch(`/content/pages/${page.id}/publish`, { method: 'POST' })
      setPage((p) => p ? { ...p, status: 'PUBLISHED' } : p)
      showToast('Page published!')
    } catch (e: any) { showToast(e.message, 'err') }
    finally { setSaving(false) }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {toast && (
        <div className={`fixed top-4 right-4 z-50 px-4 py-3 rounded-lg shadow-lg text-sm text-white transition-all ${toast.type === 'ok' ? 'bg-green-600' : 'bg-red-600'}`}>
          {toast.msg}
        </div>
      )}

      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => router.push('/admin/dashboard')}
              className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back
            </button>
            <span className="text-gray-300">|</span>
            <span className="font-semibold text-gray-800 text-sm">{page?.title || 'Page Editor'}</span>
            {page?.status && (
              <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${page.status === 'PUBLISHED' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                {page.status}
              </span>
            )}
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleSave}
              disabled={saving}
              className="flex items-center gap-2 bg-white border border-gray-300 text-gray-700 text-sm px-4 py-1.5 rounded-lg hover:bg-gray-50 disabled:opacity-50 transition-colors"
            >
              {saving
                ? <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-600" />
                : <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" /></svg>
              }
              Save Draft
            </button>
            <button
              type="button"
              onClick={handlePublish}
              disabled={saving}
              className="flex items-center gap-2 bg-blue-600 text-white text-sm px-4 py-1.5 rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Publish
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-6 space-y-5">
        {sections.length === 0 && (
          <div className="text-center py-16 text-gray-400 text-sm">No sections found for this page.</div>
        )}
        {sections.map((section, idx) => (
          <SectionEditor
            key={section.id}
            section={section}
            idx={idx}
            onImageUpload={handleImageUpload}
            onRemoveImage={() => setSections((prev) => prev.map((s) => s.id === section.id ? { ...s, imageUrl: null } : s))}
            onSetTC={(patch) => setTC(section.id, patch)}
            onSetItemField={(arrayKey, itemIdx, field, val) => setItemField(section.id, arrayKey, itemIdx, field, val)}
            onItemImageUpload={(arrayKey, itemIdx, file) => handleItemImageUpload(section.id, arrayKey, itemIdx, file)}
          />
        ))}
        {sections.length > 0 && (
          <div className="flex items-center gap-3 pt-2 pb-8">
            <button
              type="button"
              onClick={handleSave}
              disabled={saving}
              className="flex items-center gap-2 bg-white border border-gray-300 text-gray-700 text-sm px-4 py-2 rounded-lg hover:bg-gray-50 disabled:opacity-50 transition-colors"
            >
              {saving
                ? <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-600" />
                : <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" /></svg>
              }
              Save Draft
            </button>
            <button
              type="button"
              onClick={handlePublish}
              disabled={saving}
              className="flex items-center gap-2 bg-blue-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Publish
            </button>
          </div>
        )}
      </main>
    </div>
  )
}

interface SEProps {
  section: Section
  idx: number
  onImageUpload: (id: string, file: File) => void
  onRemoveImage: () => void
  onSetTC: (patch: Record<string, any>) => void
  onSetItemField: (arrayKey: string, itemIdx: number, field: string, val: string) => void
  onItemImageUpload: (arrayKey: string, itemIdx: number, file: File) => void
}

function SectionEditor({ section, idx, onImageUpload, onRemoveImage, onSetTC, onSetItemField, onItemImageUpload }: SEProps) {
  const tc = section.textContent || {}

  function Field({ label, k, area }: { label: string; k: string; area?: boolean }) {
    if (tc[k] === undefined) return null
    return (
      <div className="mb-3">
        <label className={lbl}>{label}</label>
        {area
          ? <textarea autoComplete="off" value={tc[k] || ''} onChange={(e) => onSetTC({ [k]: e.target.value })} rows={3} className={`${inp} resize-vertical`} />
          : <input type="text" autoComplete="off" value={tc[k] || ''} onChange={(e) => onSetTC({ [k]: e.target.value })} className={inp} />
        }
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4">
      <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">
        Section {idx + 1} — {section.type}
      </p>

      {(section.imageUrl !== null || section.type === 'hero' || section.type === 'text-image') && (
        <div className="mb-4">
          <label className={lbl}>Section Image</label>
          {section.imageUrl ? (
            <div className="relative w-full h-40 rounded-lg overflow-hidden border border-gray-200 group">
              <img src={resolveImg(section.imageUrl) || ''} alt="" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                <label className="cursor-pointer bg-white text-gray-800 text-xs px-3 py-1.5 rounded-lg hover:bg-gray-100 transition-colors">
                  Change Image
                  <input type="file" accept="image/*" className="hidden" onChange={(e) => { const f = e.target.files?.[0]; if (f) onImageUpload(section.id, f) }} />
                </label>
                <button type="button" onClick={onRemoveImage} className="bg-red-500 text-white text-xs px-3 py-1.5 rounded-lg hover:bg-red-600 transition-colors">
                  Remove
                </button>
              </div>
            </div>
          ) : (
            <label className="cursor-pointer inline-flex items-center gap-2 text-xs text-blue-600 border border-dashed border-blue-300 rounded-lg px-3 py-2 hover:bg-blue-50 transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Upload Image
              <input type="file" accept="image/*" className="hidden" onChange={(e) => { const f = e.target.files?.[0]; if (f) onImageUpload(section.id, f) }} />
            </label>
          )}
        </div>
      )}

      <Field label="Title" k="title" />
      <Field label="Subtitle" k="subtitle" />
      <Field label="Heading" k="heading" />
      <Field label="Subheading" k="subheading" />
      <Field label="Description" k="description" area />
      <Field label="Call to Action" k="cta" />
      <Field label="Button Text" k="buttonText" />
      <Field label="Badge / Label" k="badge" />
      <Field label="Tag Line" k="tagline" />

      {section.type === 'contact-info' && (
        <>
          <Field label="Address" k="address" />
          <Field label="Phone" k="phone" />
          <Field label="Email" k="email" />
          <Field label="Business Hours" k="hours" />
        </>
      )}

      {section.type === 'map' && (
        <>
          <Field label="Map Embed Code" k="mapEmbed" area />
          <Field label="Location Address" k="address" />
        </>
      )}

      {Array.isArray(tc.features) && (
        <div className="mb-3">
          <label className={lbl}>Features</label>
          <div className="space-y-2">
            {(tc.features as string[]).map((feat, fi) => (
              <input
                key={fi}
                type="text"
                autoComplete="off"
                value={feat}
                onChange={(e) => {
                  const arr = [...tc.features]
                  arr[fi] = e.target.value
                  onSetTC({ features: arr })
                }}
                placeholder={`Feature ${fi + 1}`}
                className={inp}
              />
            ))}
          </div>
        </div>
      )}

      {Array.isArray(tc.stats) && (
        <div className="mb-3">
          <label className={lbl}>Statistics</label>
          <div className="space-y-2">
            {(tc.stats as { value: string; label: string }[]).map((stat, si) => (
              <div key={si} className="grid grid-cols-2 gap-2">
                <div>
                  <span className="block text-[11px] text-gray-400 mb-1">Value</span>
                  <input type="text" autoComplete="off" value={stat.value || ''} onChange={(e) => onSetItemField('stats', si, 'value', e.target.value)} className={inp} placeholder="500+" />
                </div>
                <div>
                  <span className="block text-[11px] text-gray-400 mb-1">Label</span>
                  <input type="text" autoComplete="off" value={stat.label || ''} onChange={(e) => onSetItemField('stats', si, 'label', e.target.value)} className={inp} placeholder="Clients" />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {Array.isArray(tc.items) && (
        <div className="mb-3">
          <label className={lbl}>
            {section.type === 'team' ? 'Team Members' : section.type === 'gallery' ? 'Gallery Items' : 'Service Items'}
          </label>
          <div className="space-y-3">
            {(tc.items as Record<string, any>[]).map((item, ii) => (
              <div key={ii} className="border border-gray-100 rounded-lg p-3 bg-gray-50 space-y-2">
                <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wide">Item {ii + 1}</p>

                {/* Per-item image (team member photo, gallery image) */}
                {item.image !== undefined && (
                  <div>
                    <span className="block text-[11px] text-gray-400 mb-1">Image</span>
                    {item.image ? (
                      <div className="relative w-full h-32 rounded-lg overflow-hidden border border-gray-200 group">
                        <img src={resolveImg(item.image) || ''} alt="" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                          <label className="cursor-pointer bg-white text-gray-800 text-xs px-2 py-1 rounded hover:bg-gray-100 transition-colors">
                            Change
                            <input type="file" accept="image/*" className="hidden" onChange={(e) => { const f = e.target.files?.[0]; if (f) onItemImageUpload('items', ii, f) }} />
                          </label>
                          <button type="button" onClick={() => onSetItemField('items', ii, 'image', '')} className="bg-red-500 text-white text-xs px-2 py-1 rounded hover:bg-red-600 transition-colors">
                            Remove
                          </button>
                        </div>
                      </div>
                    ) : (
                      <label className="cursor-pointer inline-flex items-center gap-2 text-xs text-blue-600 border border-dashed border-blue-300 rounded-lg px-3 py-2 hover:bg-blue-50 transition-colors">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        Upload Image
                        <input type="file" accept="image/*" className="hidden" onChange={(e) => { const f = e.target.files?.[0]; if (f) onItemImageUpload('items', ii, f) }} />
                      </label>
                    )}
                  </div>
                )}

                {item.icon !== undefined && (
                  <div>
                    <span className="block text-[11px] text-gray-400 mb-1">Icon</span>
                    <input type="text" autoComplete="off" value={item.icon || ''} onChange={(e) => onSetItemField('items', ii, 'icon', e.target.value)} className={inp} placeholder="e.g. calculator" />
                  </div>
                )}
                {item.title !== undefined && (
                  <div>
                    <span className="block text-[11px] text-gray-400 mb-1">Title</span>
                    <input type="text" autoComplete="off" value={item.title || ''} onChange={(e) => onSetItemField('items', ii, 'title', e.target.value)} className={inp} />
                  </div>
                )}
                {item.name !== undefined && (
                  <div>
                    <span className="block text-[11px] text-gray-400 mb-1">Name</span>
                    <input type="text" autoComplete="off" value={item.name || ''} onChange={(e) => onSetItemField('items', ii, 'name', e.target.value)} className={inp} />
                  </div>
                )}
                {item.role !== undefined && (
                  <div>
                    <span className="block text-[11px] text-gray-400 mb-1">Role</span>
                    <input type="text" autoComplete="off" value={item.role || ''} onChange={(e) => onSetItemField('items', ii, 'role', e.target.value)} className={inp} />
                  </div>
                )}
                {item.description !== undefined && (
                  <div>
                    <span className="block text-[11px] text-gray-400 mb-1">Description</span>
                    <textarea autoComplete="off" value={item.description || ''} onChange={(e) => onSetItemField('items', ii, 'description', e.target.value)} rows={2} className={`${inp} resize-vertical`} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}