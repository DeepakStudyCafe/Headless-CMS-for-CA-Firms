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

  // All cards use the same soft gray gradient
  const getCardGradient = () => 'from-gray-50 to-gray-200';

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-100 to-gray-300 animate-fadeIn">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-200"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-gray-100 to-gray-300 animate-fadeIn">
      <div className="mb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-2 bg-gradient-to-r from-gray-400 to-gray-700 bg-clip-text text-transparent drop-shadow transition-all duration-500">Website Management</h1>
        <p className="text-base md:text-lg text-gray-600">Select a website to manage its content, pages, and sections</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {websites.map((website, index) => (
          <motion.div
            key={website.id}
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{ scale: 1.012, boxShadow: '0 6px 24px 0 rgba(80, 120, 180, 0.10)' }}
            transition={{ duration: 0.4, delay: index * 0.10, type: 'spring', stiffness: 120 }}
          >
            <Card className="relative overflow-hidden shadow-md border border-gray-200 rounded-xl bg-white/90 hover:shadow-lg transition-all duration-300 cursor-pointer group">
              <div className={`absolute inset-0 z-0 bg-gradient-to-tr ${getCardGradient()} opacity-60 group-hover:opacity-80 transition-all duration-500`} />
              <CardHeader className="relative z-10 p-0">
                <div className="relative h-50 w-full -mt-6 mb-4 rounded-t-lg overflow-hidden flex items-end justify-center bg-gradient-to-br from-gray-50 to-gray-200 group-hover:from-gray-100 group-hover:to-gray-300 transition-all duration-500">
                  {/* Show home page banner image if available, else fallback icon */}
                  {website.bannerImage ? (
                    <img
                      src={getImageUrl(website.bannerImage)}
                      alt={website.name + ' Banner'}
                      className="object-cover w-full h-full scale-100"
                    />
                  ) : (
                    <Globe className="w-16 h-16 text-gray-300 group-hover:text-gray-500 transition-colors duration-500" />
                  )}
                  {/* Overlay: heading and url on image */}
                    <div className="absolute left-0 right-0 bottom-0 px-6 pt-10 pb-2 flex flex-col items-start" style={{zIndex:2}}>
                    <div className="w-full flex flex-col items-start">
                      <span className="text-xl font-semibold text-gray-900 drop-shadow-sm truncate w-full mt-4" title={website.name}>{website.name}</span>
                      <span className="text-xs text-gray-700 truncate w-full">
                        {website.domain ? (
                          <a
                            href={website.domain.startsWith('http') ? website.domain : `https://${website.domain}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                          >
                            {website.domain}
                          </a>
                        ) : <span className="text-gray-400">No domain set</span>}
                      </span>
                    </div>
                  </div>
                  {/* Blur effect at bottom of image */}
                  <div className="absolute left-0 right-0 bottom-0 h-16 pointer-events-none" style={{backdropFilter:'blur(10px)', WebkitBackdropFilter:'blur(10px)', background:'linear-gradient(to top, rgba(245,245,245,0.85) 80%, rgba(245,245,245,0))', zIndex:1}} />
                </div>
              </CardHeader>
              <CardContent className="relative z-10 px-4 pt-1 pb-4 mt-0">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-400 group-hover:text-gray-700 transition-colors duration-300">
                    <BarChart3 className="w-4 h-4" />
                    <span>{website._count.pages} pages</span>
                  </div>
                  <Button
                    className="font-medium py-2 px-4 rounded-lg bg-gradient-to-r from-gray-100 to-gray-300 text-gray-700 shadow-sm hover:from-gray-200 hover:to-gray-400 hover:scale-[1.01] hover:shadow-md transition-all duration-300 group-hover:bg-gradient-to-l group-hover:from-gray-300 group-hover:to-gray-100 group-hover:text-gray-900"
                    onClick={() => router.push(`/dashboard/websites/${website.id}`)}
                  >
                    <span className="transition-transform group-hover:translate-x-1">Manage</span>
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
