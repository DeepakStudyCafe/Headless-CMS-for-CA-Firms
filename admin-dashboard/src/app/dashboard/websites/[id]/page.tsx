'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { websiteAPI, pageAPI } from '@/lib/api'
import { Button } from '@/components/ui/button'
import { ArrowLeft, FileText, Edit, Eye, CheckCircle, Clock, Save, Globe, Phone, KeyRound } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'
import { formatDate } from '@/lib/utils'
import { SiteAdminCredentials } from '@/components/dashboard/SiteAdminCredentials'

interface Page {
  id: string
  slug: string
  title: string
  status: string
  publishedAt: string | null
  _count: { sections: number }
}

interface Website {
  id: string
  name: string
  slug: string
  domain?: string
  themeConfig: any
  phone?: string
  email?: string
  address?: string
  workingHours?: string
  isActive: boolean
  isAdminEnabled: boolean
}

type Tab = 'pages' | 'contact' | 'footer' | 'credentials'

const TABS: { id: Tab; label: string; icon: React.ReactNode }[] = [
  { id: 'pages',       label: 'Website Pages',              icon: <FileText className="w-4 h-4" /> },
  { id: 'contact',     label: 'Contact Page',        icon: <Phone className="w-4 h-4" /> },
  { id: 'footer',      label: 'Footer Content',      icon: <Globe className="w-4 h-4" /> },
  { id: 'credentials', label: 'Website Credentials', icon: <KeyRound className="w-4 h-4" /> },
]

const inp = 'w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white'
const lbl = 'block text-sm font-medium text-gray-700 mb-1.5'

export default function WebsiteDetailPage({ params }: { params: { id: string } }) {
  const [website, setWebsite] = useState<Website | null>(null)
  const [pages, setPages] = useState<Page[]>([])
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState<Tab>('pages')

  const [footerForm, setFooterForm] = useState({
    description: '', facebook: '', twitter: '',
    linkedin: '', instagram: '', youtube: '', copyright: ''
  })
  const [footerSaving, setFooterSaving] = useState(false)

  const [contactForm, setContactForm] = useState({
    heroTitle: '', heroSubtitle: '',
    phone: '', phone2: '', email: '', email2: '',
    address: '', workingHours: '', mapUrl: ''
  })
  const [contactSaving, setContactSaving] = useState(false)

  const [isActive, setIsActive] = useState(true)
  const [isAdminEnabled, setIsAdminEnabled] = useState(true)
  const [toggleSaving, setToggleSaving] = useState(false)
  const [confirmOpen, setConfirmOpen] = useState(false)
  const [confirmField, setConfirmField] = useState<'isActive' | 'isAdminEnabled' | null>(null)
  const [confirmValue, setConfirmValue] = useState<boolean | null>(null)

  const router = useRouter()
  const { toast } = useToast()

  useEffect(() => {
    fetchWebsiteAndPages()
  }, [params.id])

  const fetchWebsiteAndPages = async () => {
    try {
      const [websiteRes, pagesRes] = await Promise.all([
        websiteAPI.getById(params.id),
        pageAPI.getByWebsite(params.id),
      ])
      const websiteData = websiteRes.data.data.website
      setWebsite(websiteData)

      const filteredPages = Array.isArray(pagesRes.data.data.pages)
        ? pagesRes.data.data.pages.filter(
            (p: Page) => p.slug !== 'career' && p.slug !== 'query' && p.slug !== 'contact'
          )
        : []
      setPages(filteredPages)

      setIsActive(websiteData.isActive !== false)
      setIsAdminEnabled(websiteData.isAdminEnabled !== false)

      const cc = websiteData.themeConfig?.contactContent || {}
      setContactForm({
        heroTitle:    cc.heroTitle    || '',
        heroSubtitle: cc.heroSubtitle || '',
        phone:        websiteData.phone        || '',
        phone2:       cc.phone2       || '',
        email:        websiteData.email        || '',
        email2:       cc.email2       || '',
        address:      websiteData.address      || '',
        workingHours: websiteData.workingHours || '',
        mapUrl:       cc.mapUrl       || ''
      })

      const fc = websiteData.themeConfig?.footerContent || {}
      setFooterForm({
        description: fc.description || '',
        facebook:    fc.facebook    || '',
        twitter:     fc.twitter     || '',
        linkedin:    fc.linkedin    || '',
        instagram:   fc.instagram   || '',
        youtube:     fc.youtube     || '',
        copyright:   fc.copyright   || ''
      })
    } catch {
      toast({ variant: 'destructive', title: 'Error', description: 'Failed to fetch website data' })
    } finally {
      setLoading(false)
    }
  }

  const handleContactSave = async () => {
    setContactSaving(true)
    try {
      const { phone, email, address, workingHours, heroTitle, heroSubtitle, phone2, email2, mapUrl } = contactForm
      await websiteAPI.update(params.id, {
        phone, email, address, workingHours,
        themeConfig: {
          ...(website?.themeConfig || {}),
          contactContent: { heroTitle, heroSubtitle, phone2, email2, mapUrl }
        }
      })
      setWebsite(prev => prev ? {
        ...prev, phone, email, address, workingHours,
        themeConfig: { ...(prev.themeConfig || {}), contactContent: { heroTitle, heroSubtitle, phone2, email2, mapUrl } }
      } : null)
      toast({ title: 'Saved', description: 'Contact page content updated.' })
    } catch {
      toast({ variant: 'destructive', title: 'Error', description: 'Failed to save contact page' })
    } finally {
      setContactSaving(false)
    }
  }

  const handleToggleSave = async (field: 'isActive' | 'isAdminEnabled', value: boolean) => {
    setToggleSaving(true)
    try {
      await websiteAPI.update(params.id, { [field]: value })
      setWebsite(prev => prev ? { ...prev, [field]: value } : null)
      if (field === 'isActive') setIsActive(value)
      else setIsAdminEnabled(value)
      toast({
        title: value ? 'Enabled' : 'Disabled',
        description: field === 'isActive'
          ? `Website is now ${value ? 'live' : 'offline'}.`
          : `Built-in admin panel is now ${value ? 'accessible' : 'locked'}.`,
      })
    } catch {
      toast({ variant: 'destructive', title: 'Error', description: 'Failed to update setting' })
    } finally {
      setToggleSaving(false)
    }
  }

  const handleToggleAttempt = (field: 'isActive' | 'isAdminEnabled', value: boolean) => {
    // Show confirmation only when turning OFF (true -> false)
    if (value === false) {
      setConfirmField(field)
      setConfirmValue(value)
      setConfirmOpen(true)
      return
    }
    // Turning ON — proceed immediately
    handleToggleSave(field, value)
  }

  const closeConfirm = () => {
    setConfirmOpen(false)
    setConfirmField(null)
    setConfirmValue(null)
  }

  const confirmToggle = async () => {
    if (!confirmField || confirmValue === null) return closeConfirm()
    await handleToggleSave(confirmField, confirmValue)
    closeConfirm()
  }

  const handleFooterSave = async () => {
    setFooterSaving(true)
    try {
      await websiteAPI.update(params.id, {
        themeConfig: { ...(website?.themeConfig || {}), footerContent: { ...footerForm } }
      })
      setWebsite(prev => prev ? {
        ...prev,
        themeConfig: { ...(prev.themeConfig || {}), footerContent: { ...footerForm } }
      } : null)
      toast({ title: 'Saved', description: 'Footer content updated.' })
    } catch {
      toast({ variant: 'destructive', title: 'Error', description: 'Failed to save footer content' })
    } finally {
      setFooterSaving(false)
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600" />
      </div>
    )
  }

  if (!website) {
    return <div className="p-6 text-gray-500">Website not found.</div>
  }

  return (
    <div className="p-6 max-w-5xl mx-auto">

      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>
        <div className="h-5 w-px bg-gray-200" />
        <div>
          <h1 className="text-xl font-bold text-gray-900 leading-none">{website.name}</h1>
          {website.domain && (
            <p className="text-xs text-gray-400 mt-0.5">{website.domain}</p>
          )}
        </div>
      </div>

      {/* Tab Bar */}
      <div className="flex gap-1 bg-gray-100 p-1 rounded-xl mb-6">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 flex-1 justify-center px-3 py-2 rounded-lg text-sm font-medium transition-all ${
              activeTab === tab.id
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {tab.icon}
            <span className="hidden sm:inline">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* ── Pages ── */}
      {activeTab === 'pages' && (
        <div className="space-y-3">
          {pages.length === 0 ? (
            <div className="text-center py-16 text-gray-400 text-sm">No pages found.</div>
          ) : (
            pages.map((page, index) => (
              <motion.div
                key={page.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: index * 0.04 }}
                className="bg-white border border-gray-200 rounded-xl p-4 flex items-center justify-between hover:shadow-sm transition-shadow"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-blue-50 rounded-lg shrink-0">
                    <FileText className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-gray-900 text-sm">{page.title}</span>
                      {page.status === 'PUBLISHED'
                        ? <span className="flex items-center gap-1 text-xs text-green-600 bg-green-50 px-2 py-0.5 rounded-full"><CheckCircle className="w-3 h-3" />Published</span>
                        : <span className="flex items-center gap-1 text-xs text-yellow-600 bg-yellow-50 px-2 py-0.5 rounded-full"><Clock className="w-3 h-3" />Draft</span>
                      }
                    </div>
                    <p className="text-xs text-gray-400 mt-0.5">
                      /{page.slug} · {page._count.sections} sections
                      {page.publishedAt && ` · ${formatDate(page.publishedAt)}`}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 shrink-0">
                  <Button variant="outline" size="sm" onClick={() => router.push(`/dashboard/pages/${page.id}`)}>
                    <Edit className="w-3.5 h-3.5 mr-1.5" />
                    Edit
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      if (website.domain) {
                        const isHome = page.slug === '' || page.slug === 'home'
                        window.open(isHome ? `${website.domain}/` : `${website.domain}/services/${page.slug}`, '_blank')
                      } else {
                        toast({ variant: 'destructive', title: 'Error', description: 'Website URL not configured' })
                      }
                    }}
                  >
                    <Eye className="w-3.5 h-3.5 mr-1.5" />
                    Preview
                  </Button>
                </div>
              </motion.div>
            ))
          )}
        </div>
      )}

      {/* ── Contact Page ── */}
      {activeTab === 'contact' && (
        <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-6">
          <div className="space-y-3 pb-5 border-b border-gray-100">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Hero Text</p>
            <div>
              <label className={lbl}>Page Heading (H1)</label>
              <input type="text" className={inp} value={contactForm.heroTitle} onChange={(e) => setContactForm(f => ({ ...f, heroTitle: e.target.value }))} placeholder="e.g. Contact Our Team" />
            </div>
            <div>
              <label className={lbl}>Subtitle</label>
              <textarea rows={2} className={`${inp} resize-vertical`} value={contactForm.heroSubtitle} onChange={(e) => setContactForm(f => ({ ...f, heroSubtitle: e.target.value }))} placeholder="Brief description shown below the heading..." />
            </div>
          </div>

          <div className="space-y-3 pb-5 border-b border-gray-100">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Contact Details</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className={lbl}>Phone</label>
                <input type="text" className={inp} value={contactForm.phone} onChange={(e) => setContactForm(f => ({ ...f, phone: e.target.value }))} placeholder="+91 XX XXXX XXXX" />
              </div>
              <div>
                <label className={lbl}>Phone 2 <span className="text-gray-400 font-normal">(optional)</span></label>
                <input type="text" className={inp} value={contactForm.phone2} onChange={(e) => setContactForm(f => ({ ...f, phone2: e.target.value }))} placeholder="+91 XX XXXX XXXX" />
              </div>
              <div>
                <label className={lbl}>Email</label>
                <input type="email" className={inp} value={contactForm.email} onChange={(e) => setContactForm(f => ({ ...f, email: e.target.value }))} placeholder="info@example.com" />
              </div>
              <div>
                <label className={lbl}>Email 2 <span className="text-gray-400 font-normal">(optional)</span></label>
                <input type="email" className={inp} value={contactForm.email2} onChange={(e) => setContactForm(f => ({ ...f, email2: e.target.value }))} placeholder="support@example.com" />
              </div>
              <div className="sm:col-span-2">
                <label className={lbl}>Address</label>
                <input type="text" className={inp} value={contactForm.address} onChange={(e) => setContactForm(f => ({ ...f, address: e.target.value }))} placeholder="Complete business address" />
              </div>
              <div className="sm:col-span-2">
                <label className={lbl}>Working Hours</label>
                <input type="text" className={inp} value={contactForm.workingHours} onChange={(e) => setContactForm(f => ({ ...f, workingHours: e.target.value }))} placeholder="Mon - Sat: 9:30 AM - 7:00 PM" />
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Map <span className="text-gray-400 font-normal normal-case">(optional)</span></p>
            <div>
              <label className={lbl}>Google Maps Embed URL</label>
              <input type="url" className={inp} value={contactForm.mapUrl} onChange={(e) => setContactForm(f => ({ ...f, mapUrl: e.target.value }))} placeholder="https://maps.google.com/maps?..." />
              <p className="text-xs text-gray-400 mt-1">Google Maps → Share → Embed a map → copy the src URL</p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleContactSave}
            disabled={contactSaving}
            className="flex items-center gap-2 bg-blue-600 text-white text-sm px-5 py-2.5 rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors"
          >
            {contactSaving
              ? <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white" />
              : <Save className="w-4 h-4" />
            }
            Save Contact Page
          </button>
        </div>
      )}

      {/* ── Footer Content ── */}
      {activeTab === 'footer' && (
        <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-6">
          <div className="space-y-3 pb-5 border-b border-gray-100">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">General</p>
            <div>
              <label className={lbl}>Description</label>
              <textarea rows={3} className={`${inp} resize-vertical`} value={footerForm.description} onChange={(e) => setFooterForm(f => ({ ...f, description: e.target.value }))} placeholder="Short description about the firm shown in the footer..." />
            </div>
            <div>
              <label className={lbl}>Copyright Text</label>
              <input type="text" className={inp} value={footerForm.copyright} onChange={(e) => setFooterForm(f => ({ ...f, copyright: e.target.value }))} placeholder="© 2026 Your Firm. All rights reserved." />
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Social Media <span className="text-gray-400 font-normal normal-case">(optional)</span></p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className={lbl}>Facebook</label>
                <input type="url" className={inp} value={footerForm.facebook} onChange={(e) => setFooterForm(f => ({ ...f, facebook: e.target.value }))} placeholder="https://facebook.com/yourpage" />
              </div>
              <div>
                <label className={lbl}>Twitter / X</label>
                <input type="url" className={inp} value={footerForm.twitter} onChange={(e) => setFooterForm(f => ({ ...f, twitter: e.target.value }))} placeholder="https://x.com/yourhandle" />
              </div>
              <div>
                <label className={lbl}>LinkedIn</label>
                <input type="url" className={inp} value={footerForm.linkedin} onChange={(e) => setFooterForm(f => ({ ...f, linkedin: e.target.value }))} placeholder="https://linkedin.com/company/yourfirm" />
              </div>
              <div>
                <label className={lbl}>Instagram</label>
                <input type="url" className={inp} value={footerForm.instagram} onChange={(e) => setFooterForm(f => ({ ...f, instagram: e.target.value }))} placeholder="https://instagram.com/yourhandle" />
              </div>
              <div className="sm:col-span-2">
                <label className={lbl}>YouTube</label>
                <input type="url" className={inp} value={footerForm.youtube} onChange={(e) => setFooterForm(f => ({ ...f, youtube: e.target.value }))} placeholder="https://youtube.com/@yourchannel" />
              </div>
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
              : <Save className="w-4 h-4" />
            }
            Save Footer Content
          </button>
        </div>
      )}

      {/* ── Website Credentials ── */}
      {activeTab === 'credentials' && (
        <div className="space-y-4">

          {/* Website On/Off */}
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <div className={`w-2 h-2 rounded-full ${isActive ? 'bg-green-500' : 'bg-red-400'}`} />
                  <p className="text-sm font-semibold text-gray-900">Website Status</p>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                    isActive ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-600'
                  }`}>
                    {isActive ? 'Live' : 'Offline'}
                  </span>
                </div>
                <p className="text-xs text-gray-500">
                  {isActive
                    ? 'The website is publicly accessible. Visitors can browse all pages.'
                    : 'The website is offline. Visitors see a "service unavailable" notice.'}
                </p>
              </div>
              <button
                type="button"
                disabled={toggleSaving}
                onClick={() => handleToggleAttempt('isActive', !isActive)}
                className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors disabled:opacity-50 ${
                  isActive ? 'bg-green-500' : 'bg-gray-300'
                }`}
                aria-label="Toggle website status"
              >
                <span
                  className={`pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform transition-transform ${
                    isActive ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Admin Panel On/Off */}
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <div className={`w-2 h-2 rounded-full ${isAdminEnabled ? 'bg-green-500' : 'bg-orange-400'}`} />
                  <p className="text-sm font-semibold text-gray-900">Built-in Admin Panel</p>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                    isAdminEnabled ? 'bg-green-50 text-green-700' : 'bg-orange-50 text-orange-700'
                  }`}>
                    {isAdminEnabled ? 'Accessible' : 'Locked'}
                  </span>
                </div>
                <p className="text-xs text-gray-500">
                  {isAdminEnabled
                    ? 'The site owner can log in at /admin and edit content.'
                    : 'The /admin route is locked. The site owner cannot access the built-in panel.'}
                </p>
              </div>
              <button
                type="button"
                disabled={toggleSaving}
                onClick={() => handleToggleAttempt('isAdminEnabled', !isAdminEnabled)}
                className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors disabled:opacity-50 ${
                  isAdminEnabled ? 'bg-green-500' : 'bg-gray-300'
                }`}
                aria-label="Toggle admin panel"
              >
                <span
                  className={`pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform transition-transform ${
                    isAdminEnabled ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Site Admin Credentials */}
          <SiteAdminCredentials websiteId={params.id} websiteName={website.name} />
        </div>
      )}

      {/* Confirmation Modal for turning settings OFF */}
      {confirmOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black opacity-30" onClick={closeConfirm} />
          <div className="relative bg-white rounded-xl shadow-xl max-w-sm w-full p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Are you sure?</h3>
            <p className="text-sm text-gray-500 mb-4">
              {confirmField === 'isActive'
                ? 'Turning the website offline will show a maintenance / payment notice to visitors. This action can be reversed later.'
                : 'Disabling the built-in admin panel will prevent logging in at /admin. You can re-enable it later.'}
            </p>
            <div className="flex justify-end gap-3">
              <Button variant="outline" size="sm" onClick={closeConfirm}>Cancel</Button>
              <Button size="sm" onClick={confirmToggle} className="bg-red-600 hover:bg-red-700 text-white">
                Yes, turn off
              </Button>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}
