'use client'

import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

// Convert various date strings to YYYY-MM-DD for <input type="date" />
const toInputDate = (val?: string) => {
  if (!val) return ''
  try {
    const d = new Date(val)
    if (isNaN(d.getTime())) return ''
    return d.toISOString().slice(0, 10)
  } catch {
    return ''
  }
}
import { motion } from 'framer-motion'
import { clientWebsiteAPI } from '@/lib/api'
import { ArrowLeft, Save, Info, Globe, CreditCard } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useToast } from '@/hooks/use-toast'

export default function CreateWebsitePage() {
  const router = useRouter()
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)
  const searchParams = useSearchParams()
  const editId = searchParams?.get('id') || null
  const [isEdit, setIsEdit] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    slug: '',
    companyName: '',
    email: '',
    phone: '',
    startDate: '',
    websiteExpiryDate: '',
    domainOwnership: 'Client',
    domainStartDate: '',
    domainExpiryDate: '',
    paymentAmount: '',
    paymentDate: '',
    paymentDetails: '',
    domainPaymentAmount: '',
    templateSerialNo: '',
    remarks: ''
  })

  // Name input — do not auto-generate slug; user must enter slug manually

  useEffect(() => {
    const loadForEdit = async () => {
      if (!editId) return
      setIsEdit(true)
      setLoading(true)
      try {
        // Server does not expose GET /client-websites/:id — fetch all and find the record
        const res = await clientWebsiteAPI.getAll()
        const list = res.data?.data?.clientWebsites || res.data?.data?.websites || res.data?.data || res.data
        const w = Array.isArray(list) ? list.find((x: any) => x.id === editId) : null
        if (!w) throw new Error('Not found')
        setFormData({
          name: w.name || '',
          slug: w.slug || '',
          companyName: w.companyName || '',
          email: w.email || '',
          phone: w.phone || '',
          startDate: toInputDate(w.startDate),
          websiteExpiryDate: toInputDate(w.websiteExpiryDate),
          domainOwnership: w.domainOwnership || 'Client',
          domainStartDate: toInputDate(w.domainStartDate),
          domainExpiryDate: toInputDate(w.domainExpiryDate),
          paymentAmount: w.paymentAmount || '',
          paymentDate: toInputDate(w.paymentDate),
          paymentDetails: w.paymentDetails || '',
          domainPaymentAmount: w.domainPaymentAmount || '',
          templateSerialNo: w.templateSerialNo || '',
          remarks: w.remarks || ''
        })
      } catch (err) {
        console.error('Failed to load website for edit', err)
        toast({ variant: 'destructive', title: 'Error', description: 'Failed to load website data for editing' })
        router.push('/dashboard/websites')
      } finally {
        setLoading(false)
      }
    }
    loadForEdit()
  }, [editId])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    // If domainOwnership changed to something other than 'We Own', clear domainStartDate
    if (name === 'domainOwnership' && value !== 'We Own') {
      setFormData({ ...formData, [name]: value, domainStartDate: '', domainExpiryDate: '' })
      return
    }
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      if (isEdit && editId) {
        await clientWebsiteAPI.update(editId, formData)
        toast({ title: 'Success', description: 'Website updated successfully' })
      } else {
        await clientWebsiteAPI.create(formData)
        toast({ title: 'Success', description: 'Website created successfully' })
      }
      router.push('/dashboard/websites')
    } catch (error: any) {
      console.error('Failed to create website', error)
      toast({
        title: 'Error',
        description: error?.response?.data?.error || 'Failed to save website',
        variant: 'destructive',
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <button
          onClick={() => router.back()}
          className="flex items-center text-sm text-gray-500 hover:text-gray-900 mb-4 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back to Websites
        </button>
        <h1 className="text-3xl font-bold text-gray-900">{isEdit ? 'Edit Website' : 'Add New Website'}</h1>
        <p className="text-gray-500 mt-2">{isEdit ? 'Update website details.' : 'Create a new website profile for a customer.'}</p>
      </motion.div>

      <div className="max-w-5xl">
        <form onSubmit={handleSubmit} className="space-y-8">
          
          {/* Basic Information Section */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="border-b border-gray-100 bg-gray-50/50 px-8 py-5 flex items-center">
              <Info className="w-5 h-5 text-blue-600 mr-2.5" />
              <h3 className="text-lg font-semibold text-gray-800">Website Details</h3>
            </div>
            <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
              <div>
                <label className="block text-[13px] font-semibold text-gray-700 mb-2">Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                  placeholder="E.g., John Doe"
                />
              </div>
              
              <div>
                <label className="block text-[13px] font-semibold text-gray-700 mb-2">URL Slug *</label>
                <input
                  type="text"
                  name="slug"
                  required
                  value={formData.slug}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-xl bg-gray-50/50 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                  placeholder="john-doe"
                />
              </div>

              <div>
                <label className="block text-[13px] font-semibold text-gray-700 mb-2">Company Name</label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                  placeholder="Doe Associates"
                />
              </div>

              <div>
                <label className="block text-[13px] font-semibold text-gray-700 mb-2">Email ID</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-[13px] font-semibold text-gray-700 mb-2">Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                  placeholder="+91 9876543210"
                />
              </div>

              <div className="hidden md:block"></div> {/* Empty space for alignment */}

              <div>
                <label className="block text-[13px] font-semibold text-gray-700 mb-2">Website Start Date</label>
                <input
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-[13px] font-semibold text-gray-700 mb-2">Website Expiry Date</label>
                <input
                  type="date"
                  name="websiteExpiryDate"
                  value={formData.websiteExpiryDate}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                />
              </div>
            </div>
          </div>

          {/* Domain Details Section */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="border-b border-gray-100 bg-gray-50/50 px-8 py-5 flex items-center">
              <Globe className="w-5 h-5 text-purple-600 mr-2.5" />
              <h3 className="text-lg font-semibold text-gray-800">Domain Details</h3>
            </div>
            <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
              <div>
                <label className="block text-[13px] font-semibold text-gray-700 mb-2">Domain Ownership</label>
                <select
                  name="domainOwnership"
                  value={formData.domainOwnership}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all appearance-none bg-white"
                  style={{ backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 20 20\'%3e%3cpath stroke=\'%236b7280\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'1.5\' d=\'M6 8l4 4 4-4\'/%3e%3c/svg%3e")', backgroundPosition: 'right 0.5rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.5em 1.5em', paddingRight: '2.5rem' }}
                >
                  <option value="Client">Client</option>
                  <option value="We Own">We Own</option>
                  <option value="Third Party">Third Party</option>
                </select>
              </div>

              {formData.domainOwnership === 'We Own' && (
                <>
                  <div>
                    <label className="block text-[13px] font-semibold text-gray-700 mb-2">Domain Payment Amount</label>
                    <input
                      type="text"
                      name="domainPaymentAmount"
                      value={formData.domainPaymentAmount}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                      placeholder="E.g., 500"
                    />
                  </div>
                  <div>
                    <label className="block text-[13px] font-semibold text-gray-700 mb-2">Domain Starting Date</label>
                    <input
                      type="date"
                      name="domainStartDate"
                      value={formData.domainStartDate}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[13px] font-semibold text-gray-700 mb-2">Domain Expiry Date</label>
                    <input
                      type="date"
                      name="domainExpiryDate"
                      value={formData.domainExpiryDate}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                    />
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Payment & Template Info Section */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="border-b border-gray-100 bg-gray-50/50 px-8 py-5 flex items-center">
              <CreditCard className="w-5 h-5 text-emerald-600 mr-2.5" />
              <h3 className="text-lg font-semibold text-gray-800">Payment & Template</h3>
            </div>
            <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
              <div>
                <label className="block text-[13px] font-semibold text-gray-700 mb-2">Payment Amount</label>
                <input
                  type="text"
                  name="paymentAmount"
                  value={formData.paymentAmount}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                  placeholder="E.g., 15000"
                />
              </div>

              <div>
                <label className="block text-[13px] font-semibold text-gray-700 mb-2">Payment Date</label>
                <input
                  type="date"
                  name="paymentDate"
                  value={formData.paymentDate}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-[13px] font-semibold text-gray-700 mb-2">Payment Details</label>
                <input
                  type="text"
                  name="paymentDetails"
                  value={formData.paymentDetails}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                  placeholder="E.g., UPI, Bank Transfer"
                />
              </div>

              <div>
                <label className="block text-[13px] font-semibold text-gray-700 mb-2">Template Serial No.</label>
                <input
                  type="text"
                  name="templateSerialNo"
                  value={formData.templateSerialNo}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                  placeholder="E.g., TPL-12345"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-[13px] font-semibold text-gray-700 mb-2">Remarks</label>
                <textarea
                  name="remarks"
                  value={formData.remarks}
                  onChange={(e: any) => handleChange(e)}
                  rows={3}
                  className="w-full px-4 py-3 text-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none resize-none transition-all"
                  placeholder="Add any additional notes or details here..."
                />
              </div>
            </div>
          </div>

          <div className="pt-4 flex justify-end gap-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => router.back()}
              disabled={loading}
              className="px-6 rounded-xl"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={loading}
              className="px-8 rounded-xl flex items-center gap-2 shadow-md hover:shadow-lg transition-shadow"
            >
              <Save className="w-4 h-4" />
                {loading ? (isEdit ? 'Updating...' : 'Creating...') : (isEdit ? 'Update Website' : 'Save Website')}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
