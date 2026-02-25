'use client'

import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'

const API_URL = process.env.NEXT_PUBLIC_API_URL || ''

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

const inp = 'w-full text-sm border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
const lbl = 'block text-xs font-medium text-gray-600 mb-1'

interface Page {
  id: string
  title: string
  slug: string
  status: string
  _count?: { sections: number }
}

interface ContactForm {
  phone: string
  email: string
  address: string
  workingHours: string
  phone2: string
  email2: string
  heroTitle: string
  heroSubtitle: string
  mapUrl: string
}

const emptyContact: ContactForm = {
  phone: '', email: '', address: '', workingHours: '',
  phone2: '', email2: '', heroTitle: '', heroSubtitle: '', mapUrl: '',
}

interface FooterForm {
  phone: string
  email: string
  address: string
  workingHours: string
  description: string
  facebook: string
  twitter: string
  linkedin: string
  instagram: string
  youtube: string
  copyright: string
}

const emptyFooter: FooterForm = {
  phone: '', email: '', address: '', workingHours: '',
  description: '', facebook: '', twitter: '', linkedin: '',
  instagram: '', youtube: '', copyright: '',
}

export default function AdminDashboard() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [pages, setPages] = useState<Page[]>([])
  const [activeTab, setActiveTab] = useState<'pages' | 'footer' | 'contact'>('pages')
  const [footerForm, setFooterForm] = useState<FooterForm>(emptyFooter)
  const [footerSaving, setFooterSaving] = useState(false)
  const [contactForm, setContactForm] = useState<ContactForm>(emptyContact)
  const [contactSaving, setContactSaving] = useState(false)
  const [toast, setToast] = useState<{ msg: string; type: 'ok' | 'err' } | null>(null)
  const [showPwModal, setShowPwModal] = useState(false)
  const [pwForm, setPwForm] = useState({ current: '', next: '', confirm: '' })
  const [pwSaving, setPwSaving] = useState(false)

  const showToast = useCallback((msg: string, type: 'ok' | 'err' = 'ok') => {
    setToast({ msg, type })
    setTimeout(() => setToast(null), 3500)
  }, [])

  useEffect(() => {
    const token = getToken()
    if (!token) { router.replace('/admin/login'); return }
    Promise.all([
      apiFetch('/content/pages').then((d) => {
        const all: Page[] = d.data.pages || []
        setPages(all.filter((p) => p.slug !== 'career' && p.slug !== 'query' && p.slug !== 'contact'))
      }),
      apiFetch('/website').then((d) => {
        const w = d.data.website
        const fc = (w.themeConfig as any)?.footerContent || {}
        setFooterForm({
          phone: w.phone || '',
          email: w.email || '',
          address: w.address || '',
          workingHours: w.workingHours || '',
          description: fc.description || '',
          facebook: fc.facebook || '',
          twitter: fc.twitter || '',
          linkedin: fc.linkedin || '',
          instagram: fc.instagram || '',
          youtube: fc.youtube || '',
          copyright: fc.copyright || '',
        })
        const cc = (w.themeConfig as any)?.contactContent || {}
        setContactForm({
          phone: w.phone || '', email: w.email || '', address: w.address || '',
          workingHours: w.workingHours || '', phone2: cc.phone2 || '',
          email2: cc.email2 || '', heroTitle: cc.heroTitle || '', heroSubtitle: cc.heroSubtitle || '', mapUrl: cc.mapUrl || '',
        })
      }),
    ])
      .catch(() => { localStorage.removeItem('site_admin_token'); router.replace('/admin/login') })
      .finally(() => setLoading(false))
  }, [router])

  const handleFooterSave = async () => {
    setFooterSaving(true)
    try {
      const { phone, email, address, workingHours, ...fc } = footerForm
      await apiFetch('/website', {
        method: 'PUT',
        body: JSON.stringify({
          phone, email, address, workingHours,
          footerContent: {
            description: fc.description,
            facebook: fc.facebook,
            twitter: fc.twitter,
            linkedin: fc.linkedin,
            instagram: fc.instagram,
            youtube: fc.youtube,
            copyright: fc.copyright,
          },
        }),
      })
      showToast('Footer saved successfully')
    } catch (e: any) { showToast(e.message, 'err') }
    finally { setFooterSaving(false) }
  }

  const handleContactSave = async () => {
    setContactSaving(true)
    try {
      const { phone, email, address, workingHours, phone2, email2, heroTitle, heroSubtitle, mapUrl } = contactForm
      await apiFetch('/website', {
        method: 'PUT',
        body: JSON.stringify({
          phone, email, address, workingHours,
          contactContent: { phone2, email2, heroTitle, heroSubtitle, mapUrl },
        }),
      })
      showToast('Contact info saved successfully')
    } catch (e: any) { showToast(e.message, 'err') }
    finally { setContactSaving(false) }
  }

  const handleLogout = async () => {
    try { await fetch(`${API_URL}/site-admin/logout`, { method: 'POST', credentials: 'include' }) } catch {}
    localStorage.removeItem('site_admin_token')
    router.replace('/admin/login')
  }

  const handleChangePassword = async () => {
    if (pwForm.next.length < 8) { showToast('New password must be at least 8 characters', 'err'); return }
    if (pwForm.next !== pwForm.confirm) { showToast('Passwords do not match', 'err'); return }
    setPwSaving(true)
    try {
      await apiFetch('/change-password', {
        method: 'POST',
        body: JSON.stringify({ currentPassword: pwForm.current, newPassword: pwForm.next }),
      })
      showToast('Password changed. Please log in again.')
      setTimeout(() => { localStorage.removeItem('site_admin_token'); router.replace('/admin/login') }, 1500)
    } catch (e: any) { showToast(e.message, 'err') }
    finally { setPwSaving(false) }
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
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <span className="font-semibold text-gray-800 text-sm">Admin Panel</span>
          </div>
          <div className="flex items-center gap-2">
            <button type="button" onClick={() => setShowPwModal(true)} className="text-xs text-gray-500 hover:text-gray-800 px-3 py-1.5 rounded-lg hover:bg-gray-100 transition-colors">
              Change Password
            </button>
            <button type="button" onClick={handleLogout} className="text-xs bg-gray-800 text-white px-3 py-1.5 rounded-lg hover:bg-gray-700 transition-colors">
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-6">
        <h1 className="text-xl font-bold text-gray-900 mb-4">Content Management</h1>

        {/* Tabs */}
        <div className="flex gap-1 bg-gray-100 rounded-xl p-1 mb-6 w-fit">
          <button
            type="button"
            onClick={() => setActiveTab('pages')}
            className={`text-sm px-5 py-2 rounded-lg font-medium transition-all ${activeTab === 'pages' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
          >
            Pages
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('footer')}
            className={`text-sm px-5 py-2 rounded-lg font-medium transition-all ${activeTab === 'footer' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
          >
            Footer
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('contact')}
            className={`text-sm px-5 py-2 rounded-lg font-medium transition-all ${activeTab === 'contact' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
          >
            Contact
          </button>
        </div>

        {/* Pages Tab */}
        {activeTab === 'pages' && (
          <div className="space-y-3">
            <p className="text-sm text-gray-500 mb-4">Select a page to edit its sections.</p>
            {pages.map((page) => (
              <button
                key={page.id}
                type="button"
                onClick={() => router.push(`/admin/pages/${page.id}`)}
                className="w-full bg-white rounded-xl border border-gray-200 px-5 py-4 flex items-center justify-between hover:bg-gray-50 hover:border-blue-200 transition-all text-left group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                    <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">{page.title}</p>
                    <p className="text-xs text-gray-400">/{page.slug} · {page._count?.sections ?? 0} sections</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${page.status === 'PUBLISHED' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                    {page.status}
                  </span>
                  <svg className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </button>
            ))}
          </div>
        )}

        {/* Footer Tab */}
        {activeTab === 'footer' && (
          <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-5">
            <div>
              <h2 className="text-base font-semibold text-gray-900 mb-1">Footer Content</h2>
              <p className="text-xs text-gray-400">Edit the footer description, contact details and social media links.</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className={lbl}>Footer Description</label>
                <textarea
                  rows={3}
                  autoComplete="off"
                  value={footerForm.description}
                  onChange={(e) => setFooterForm((f) => ({ ...f, description: e.target.value }))}
                  placeholder="Brief description shown in the footer..."
                  className={`${inp} resize-vertical`}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={lbl}>Phone</label>
                  <input type="text" autoComplete="off" value={footerForm.phone} onChange={(e) => setFooterForm((f) => ({ ...f, phone: e.target.value }))} placeholder="+91 XX XXXX XXXX" className={inp} />
                </div>
                <div>
                  <label className={lbl}>Email</label>
                  <input type="email" autoComplete="off" value={footerForm.email} onChange={(e) => setFooterForm((f) => ({ ...f, email: e.target.value }))} placeholder="info@example.com" className={inp} />
                </div>
                <div className="sm:col-span-2">
                  <label className={lbl}>Address</label>
                  <input type="text" autoComplete="off" value={footerForm.address} onChange={(e) => setFooterForm((f) => ({ ...f, address: e.target.value }))} placeholder="Complete business address" className={inp} />
                </div>
                <div className="sm:col-span-2">
                  <label className={lbl}>Working Hours</label>
                  <input type="text" autoComplete="off" value={footerForm.workingHours} onChange={(e) => setFooterForm((f) => ({ ...f, workingHours: e.target.value }))} placeholder="Mon - Sat: 9:30 AM - 7:00 PM" className={inp} />
                </div>
              </div>

              <div>
                <p className={lbl}>Social Media Links</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-1">
                  {([
                    { key: 'facebook', label: 'Facebook URL', ph: 'https://facebook.com/...' },
                    { key: 'twitter', label: 'X / Twitter URL', ph: 'https://x.com/...' },
                    { key: 'linkedin', label: 'LinkedIn URL', ph: 'https://linkedin.com/...' },
                    { key: 'instagram', label: 'Instagram URL', ph: 'https://instagram.com/...' },
                    { key: 'youtube', label: 'YouTube URL', ph: 'https://youtube.com/...' },
                  ] as const).map(({ key, label, ph }) => (
                    <div key={key}>
                      <label className={lbl}>{label}</label>
                      <input type="url" autoComplete="off" value={(footerForm as any)[key]} onChange={(e) => setFooterForm((f) => ({ ...f, [key]: e.target.value }))} placeholder={ph} className={inp} />
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label className={lbl}>Copyright Text</label>
                <input type="text" autoComplete="off" value={footerForm.copyright} onChange={(e) => setFooterForm((f) => ({ ...f, copyright: e.target.value }))} placeholder="© 2026 Firm Name. All rights reserved." className={inp} />
              </div>
            </div>

            <button
              type="button"
              onClick={handleFooterSave}
              disabled={footerSaving}
              className="flex items-center gap-2 bg-blue-600 text-white text-sm px-5 py-2.5 rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors"
            >
              {footerSaving
                ? <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white" />
                : <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              }
              Save Footer
            </button>
          </div>
        )}
        {/* Contact Tab */}
        {activeTab === 'contact' && (
          <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-6">
            <div>
              <h2 className="text-base font-semibold text-gray-900 mb-1">Contact Page</h2>
              <p className="text-xs text-gray-400">All fields here appear on the Contact Us page of the website.</p>
            </div>

            <div className="space-y-3 pb-5 border-b border-gray-100">
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Hero Text</p>
              <div>
                <label className={lbl}>Page Heading (H1)</label>
                <input type="text" autoComplete="off" value={contactForm.heroTitle} onChange={(e) => setContactForm((f) => ({ ...f, heroTitle: e.target.value }))} placeholder="e.g. Contact Patel Consulting" className={inp} />
              </div>
              <div>
                <label className={lbl}>Subtitle</label>
                <textarea rows={2} autoComplete="off" value={contactForm.heroSubtitle} onChange={(e) => setContactForm((f) => ({ ...f, heroSubtitle: e.target.value }))} placeholder="Short description below the heading..." className={`${inp} resize-vertical`} />
              </div>
            </div>

            <div className="space-y-3 pb-5 border-b border-gray-100">
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Contact Details</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className={lbl}>Phone</label>
                  <input type="text" autoComplete="off" value={contactForm.phone} onChange={(e) => setContactForm((f) => ({ ...f, phone: e.target.value }))} placeholder="+91 XX XXXX XXXX" className={inp} />
                </div>
                <div>
                  <label className={lbl}>Phone 2 <span className="text-gray-400 font-normal">(optional)</span></label>
                  <input type="text" autoComplete="off" value={contactForm.phone2} onChange={(e) => setContactForm((f) => ({ ...f, phone2: e.target.value }))} placeholder="+91 XX XXXX XXXX" className={inp} />
                </div>
                <div>
                  <label className={lbl}>Email</label>
                  <input type="email" autoComplete="off" value={contactForm.email} onChange={(e) => setContactForm((f) => ({ ...f, email: e.target.value }))} placeholder="info@example.com" className={inp} />
                </div>
                <div>
                  <label className={lbl}>Email 2 <span className="text-gray-400 font-normal">(optional)</span></label>
                  <input type="email" autoComplete="off" value={contactForm.email2} onChange={(e) => setContactForm((f) => ({ ...f, email2: e.target.value }))} placeholder="support@example.com" className={inp} />
                </div>
                <div className="sm:col-span-2">
                  <label className={lbl}>Address</label>
                  <input type="text" autoComplete="off" value={contactForm.address} onChange={(e) => setContactForm((f) => ({ ...f, address: e.target.value }))} placeholder="Complete business address" className={inp} />
                </div>
                <div className="sm:col-span-2">
                  <label className={lbl}>Working Hours</label>
                  <input type="text" autoComplete="off" value={contactForm.workingHours} onChange={(e) => setContactForm((f) => ({ ...f, workingHours: e.target.value }))} placeholder="Mon - Sat: 9:30 AM - 7:00 PM" className={inp} />
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Map <span className="text-gray-400 font-normal normal-case">(optional)</span></p>
              <div>
                <label className={lbl}>Google Maps Embed URL</label>
                <input type="url" autoComplete="off" value={contactForm.mapUrl} onChange={(e) => setContactForm((f) => ({ ...f, mapUrl: e.target.value }))} placeholder="https://maps.google.com/maps?..." className={inp} />
                <p className="text-xs text-gray-400 mt-1">Google Maps → Share → Embed a map → copy the src URL</p>
              </div>
            </div>

            <button type="button" onClick={handleContactSave} disabled={contactSaving} className="flex items-center gap-2 bg-blue-600 text-white text-sm px-5 py-2.5 rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors">
              {contactSaving ? <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white" /> : <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>}
              Save Contact Page
            </button>
          </div>
        )}
      </main>

      {showPwModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Change Password</h2>
            <div className="space-y-3">
              {(['current', 'next', 'confirm'] as const).map((k) => (
                <div key={k}>
                  <label className={lbl}>{k === 'current' ? 'Current Password' : k === 'next' ? 'New Password (min. 8 chars)' : 'Confirm New Password'}</label>
                  <input type="password" autoComplete="new-password" value={pwForm[k]} onChange={(e) => setPwForm((p) => ({ ...p, [k]: e.target.value }))} className={inp} />
                </div>
              ))}
            </div>
            <div className="flex gap-2 mt-5">
              <button type="button" onClick={handleChangePassword} disabled={pwSaving} className="flex-1 bg-blue-600 text-white text-sm py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors">
                {pwSaving ? 'Saving...' : 'Update Password'}
              </button>
              <button type="button" onClick={() => { setShowPwModal(false); setPwForm({ current: '', next: '', confirm: '' }) }} className="flex-1 bg-gray-100 text-gray-700 text-sm py-2 rounded-lg hover:bg-gray-200 transition-colors">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}