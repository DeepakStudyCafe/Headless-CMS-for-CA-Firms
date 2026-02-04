'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { websiteAPI, pageAPI } from '@/lib/api'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ArrowLeft, FileText, Edit, Eye, CheckCircle, Clock, Settings, Save } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'
import { formatDate } from '@/lib/utils'

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
  themeConfig: any
  phone?: string
  email?: string
  address?: string
  workingHours?: string
}

export default function WebsiteDetailPage({ params }: { params: { id: string } }) {
  const [website, setWebsite] = useState<Website | null>(null)
  const [pages, setPages] = useState<Page[]>([])
  const [loading, setLoading] = useState(true)
  const [showContactEdit, setShowContactEdit] = useState(false)
  const [contactForm, setContactForm] = useState({
    phone: '',
    email: '',
    address: '',
    workingHours: ''
  })
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
      setPages(pagesRes.data.data.pages)
      
      // Initialize contact form with current data
      setContactForm({
        phone: websiteData.phone || '',
        email: websiteData.email || '',
        address: websiteData.address || '',
        workingHours: websiteData.workingHours || 'Mon - Sat: 9:30 AM - 7:00 PM'
      })
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Failed to fetch website data',
      })
    } finally {
      setLoading(false)
    }
  }

  const handleContactUpdate = async () => {
    try {
      await websiteAPI.update(params.id, contactForm)
      setWebsite(prev => prev ? { ...prev, ...contactForm } : null)
      setShowContactEdit(false)
      toast({
        title: 'Success',
        description: 'Contact information updated successfully',
      })
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Failed to update contact information',
      })
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'PUBLISHED':
        return <CheckCircle className="w-4 h-4 text-green-600" />
      case 'DRAFT':
        return <Clock className="w-4 h-4 text-yellow-600" />
      default:
        return <FileText className="w-4 h-4 text-gray-600" />
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (!website) {
    return <div>Website not found</div>
  }

  return (
    <div className="p-8">
      <Button variant="ghost" onClick={() => router.back()} className="mb-6">
        <ArrowLeft className="mr-2 w-4 h-4" />
        Back to Websites
      </Button>

      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h1 className="text-4xl font-bold mb-2">{website.name}</h1>
            <p className="text-muted-foreground">Manage pages and content for this website</p>
          </div>
          <Button 
            onClick={() => setShowContactEdit(!showContactEdit)}
            variant={showContactEdit ? 'secondary' : 'outline'}
          >
            <Settings className="mr-2 w-4 h-4" />
            Contact Info
          </Button>
        </div>

        {showContactEdit && (
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>Edit the contact details displayed in the header</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    value={contactForm.phone}
                    onChange={(e) => setContactForm(prev => ({ ...prev, phone: e.target.value }))}
                    placeholder="+91 XX XXXX XXXX"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={contactForm.email}
                    onChange={(e) => setContactForm(prev => ({ ...prev, email: e.target.value }))}
                    placeholder="info@example.com"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="address">Address</Label>
                <Input
                  id="address"
                  value={contactForm.address}
                  onChange={(e) => setContactForm(prev => ({ ...prev, address: e.target.value }))}
                  placeholder="Complete business address"
                />
              </div>
              <div>
                <Label htmlFor="workingHours">Working Hours</Label>
                <Input
                  id="workingHours"
                  value={contactForm.workingHours}
                  onChange={(e) => setContactForm(prev => ({ ...prev, workingHours: e.target.value }))}
                  placeholder="Mon - Sat: 9:30 AM - 7:00 PM"
                />
              </div>
              <div className="flex gap-2 pt-2">
                <Button onClick={handleContactUpdate}>
                  <Save className="mr-2 w-4 h-4" />
                  Save Changes
                </Button>
                <Button variant="outline" onClick={() => setShowContactEdit(false)}>
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      <div className="grid gap-4">
        {pages.map((page, index) => (
          <motion.div
            key={page.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 flex-1">
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <FileText className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-lg font-semibold">{page.title}</h3>
                        {getStatusIcon(page.status)}
                        <span className="text-sm text-muted-foreground">
                          {page.status}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        /{page.slug} • {page._count.sections} sections
                        {page.publishedAt && ` • Published ${formatDate(page.publishedAt)}`}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => router.push(`/dashboard/pages/${page.id}`)}
                    >
                      <Edit className="w-4 h-4 mr-2" />
                      Edit
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(`http://localhost:300${website.themeConfig?.theme === 'professional' ? '1' : website.themeConfig?.theme === 'modern' ? '2' : '3'}/${page.slug}`, '_blank')}
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      Preview
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
