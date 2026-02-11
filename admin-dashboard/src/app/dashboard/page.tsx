'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { websiteAPI } from '@/lib/api'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Globe, ArrowRight, BarChart3 } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'
import { getImageUrl } from '@/lib/utils'

interface Website {
  id: string
  name: string
  slug: string
  domain?: string
  logo: string
  themeConfig: any
  _count: { pages: number }
  bannerImage?: string
}

export default function DashboardPage() {
  const [websites, setWebsites] = useState<Website[]>([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const { toast } = useToast()

  useEffect(() => {
    fetchWebsites()
  }, [])

  const fetchWebsites = async () => {
    try {
      const response = await websiteAPI.getAll()
      setWebsites(response.data.data.websites)
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Failed to fetch websites',
      })
    } finally {
      setLoading(false)
    }
  }

  const getThemeGradient = (theme: string) => {
    switch (theme) {
      case 'professional':
        return 'from-blue-600 to-gray-600'
      case 'modern':
        return 'from-white to-black'
      case 'creative':
        return 'from-purple-600 to-pink-600'
      default:
        return 'from-blue-500 to-purple-500'
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Website Management</h1>
        <p className="text-muted-foreground">
          Select a website to manage its content, pages, and sections
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {websites.map((website, index) => (
          <motion.div
            key={website.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card className="hover:shadow-xl transition-shadow duration-300 cursor-pointer group">
              <CardHeader>
                <div
                  className="h-32 -mx-6 -mt-6 mb-4 rounded-t-lg overflow-hidden flex items-center justify-center bg-gray-100"
                >
                  {/* Show home page banner image if available, else fallback icon */}
                  {website.bannerImage ? (
                    <img
                      src={getImageUrl(website.bannerImage)}
                      alt={website.name + ' Banner'}
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <Globe className="w-16 h-16 text-gray-400" />
                  )}
                </div>
                <CardTitle className="text-xl">{website.name}</CardTitle>
                <CardDescription>
                  {website.domain ? (
                    <a
                      href={website.domain.startsWith('http') ? website.domain : `https://${website.domain}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      {website.domain}
                    </a>
                  ) : 'No domain set'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <BarChart3 className="w-4 h-4" />
                    <span>{website._count.pages} pages</span>
                  </div>
                </div>
                <Button
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground"
                  onClick={() => router.push(`/dashboard/websites/${website.id}`)}
                >
                  Manage Content
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
