'use client'

import { useEffect, useState, useMemo, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { websiteAPI } from '@/lib/api'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Globe, ArrowRight, BarChart3, Search, ChevronLeft, ChevronRight, X, Filter } from 'lucide-react'
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

// Custom hook for debounced search
const useDebounce = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])

  return debouncedValue
}

export default function DashboardPage() {
  const [allWebsites, setAllWebsites] = useState<Website[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [isSearching, setIsSearching] = useState(false)
  const router = useRouter()
  const { toast } = useToast()

  // Debounced search value to reduce API calls
  const debouncedSearchQuery = useDebounce(searchQuery, 500)

  // Pagination settings
  const WEBSITES_PER_PAGE = 6

  // Fetch all websites initially
  useEffect(() => {
    fetchAllWebsites()
  }, [])

  // Perform search when debounced value changes
  useEffect(() => {
    if (debouncedSearchQuery.trim()) {
      performSearch(debouncedSearchQuery)
    } else {
      // Reset to all websites when search is cleared
      if (searchQuery === '') {
        setIsSearching(false)
        fetchAllWebsites()
      }
    }
  }, [debouncedSearchQuery, searchQuery])

  const fetchAllWebsites = async () => {
    try {
      setLoading(true)
      const response = await websiteAPI.getAll()
      setAllWebsites(response.data.data.websites)
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

  const performSearch = useCallback(async (searchTerm: string) => {
    if (!searchTerm.trim()) return
    
    try {
      setIsSearching(true)
      console.log('🔍 Performing search for:', searchTerm)
      
      // Don't show loading for search, just update results
      const response = await websiteAPI.getAll({ search: searchTerm })
      console.log('✅ Search results:', response.data.data.websites)
      
      setAllWebsites(response.data.data.websites)
    } catch (error: any) {
      console.error('❌ Search error:', error)
      toast({
        variant: 'destructive',
        title: 'Search Failed',
        description: error.response?.data?.error || 'Failed to search websites',
      })
    } finally {
      setIsSearching(false)
    }
  }, [toast])

  // Get displayed websites (filtered results or all websites)
  const displayWebsites = useMemo(() => {
    return allWebsites
  }, [allWebsites])

  // Suggestions for search (first 5 websites from current results)
  const searchSuggestions = useMemo(() => {
    if (!showSuggestions) return []
    if (!searchQuery) return displayWebsites.slice(0, 5)
    
    // Show current filtered results as suggestions
    return displayWebsites.slice(0, 5)
  }, [displayWebsites, searchQuery, showSuggestions])

  // Pagination calculations
  const totalPages = Math.ceil(displayWebsites.length / WEBSITES_PER_PAGE)
  const startIndex = (currentPage - 1) * WEBSITES_PER_PAGE
  const endIndex = startIndex + WEBSITES_PER_PAGE
  const currentWebsites = displayWebsites.slice(startIndex, endIndex)

  // Reset to first page when search changes
  useEffect(() => {
    setCurrentPage(1)
  }, [debouncedSearchQuery])

  const handleSearchChange = (value: string) => {
    setSearchQuery(value)
  }

  const handleClearSearch = () => {
    setSearchQuery('')
    setShowSuggestions(false)
    fetchAllWebsites()
  }

  const handleSuggestionClick = (website: Website) => {
    setSearchQuery('')
    setShowSuggestions(false)
    router.push(`/dashboard/websites/${website.id}`)
  }

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-50 to-indigo-100 animate-fadeIn">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 animate-fadeIn">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent drop-shadow-sm">
            Website Management
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Manage your websites, pages, and content in one place
          </p>
          
          {/* Enhanced Search Section */}
          <div className="relative max-w-2xl ml-0 mr-auto">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-purple-200 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative bg-white rounded-xl p-1 shadow">
                <div className="flex items-center">
                  <div className="relative flex-1">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <Input
                      placeholder="Search by website name, URL, or domain..."
                      value={searchQuery}
                      onChange={(e) => handleSearchChange(e.target.value)}
                      onFocus={() => setShowSuggestions(true)}
                      onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                      className="pl-12 pr-12 py-4 text-base border-0 rounded-xl bg-transparent focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    {searchQuery && (
                      <button
                        onClick={handleClearSearch}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    )}
                  </div>
                  {isSearching && (
                    <div className="ml-3 mr-2">
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500"></div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            {/* Enhanced Search Suggestions */}
            <AnimatePresence>
              {showSuggestions && searchSuggestions.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  className="absolute z-50 w-full mt-3 bg-white/95 backdrop-blur-lg border border-gray-200/50 rounded-2xl shadow-2xl max-h-96 overflow-y-auto"
                >
                  <div className="p-2">
                    {searchSuggestions.map((website, index) => (
                      <motion.div
                        key={website.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        onClick={() => handleSuggestionClick(website)}
                        className="flex items-center gap-4 p-4 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 cursor-pointer rounded-xl transition-all duration-200 border border-transparent hover:border-blue-200 group"
                      >
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                          {website.bannerImage ? (
                            <img 
                              src={getImageUrl(website.bannerImage)} 
                              alt={website.name}
                              className="w-full h-full object-cover rounded-xl"
                            />
                          ) : (
                            <Globe className="w-6 h-6 text-blue-500" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-gray-900 truncate text-left">{website.name}</p>
                          <p className="text-sm text-blue-600 truncate text-left">
                            {website.domain || `/${website.slug}`}
                          </p>
                          <p className="text-xs text-gray-500 text-left">{website._count.pages} pages</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all duration-200" />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Results Info */}
        {/* Results Info removed as requested */}

        {/* Websites Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentWebsites.map((website, index) => (
            <motion.div
              key={website.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.4, delay: index * 0.1, type: 'spring', stiffness: 120 }}
            >
              <Card className="relative overflow-hidden shadow-lg border-0 rounded-3xl bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 cursor-pointer group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-indigo-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardHeader className="relative z-10 p-0">
                  <div className="relative h-52 w-full overflow-hidden rounded-t-3xl">
                    {/* Website Banner/Image */}
                    {website.bannerImage ? (
                      <img
                        src={getImageUrl(website.bannerImage)}
                        alt={website.name + ' Banner'}
                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-blue-100 via-purple-100 to-indigo-100 flex items-center justify-center">
                        <Globe className="w-20 h-20 text-blue-400 group-hover:text-blue-600 transition-colors duration-500 group-hover:scale-110 transition-transform" />
                      </div>
                    )}
                    
                    {/* Overlay with website info */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-bold truncate mb-1 drop-shadow-lg" title={website.name}>
                        {website.name}
                      </h3>
                      <p className="text-sm text-blue-100 truncate">
                        {website.domain ? (
                          <a
                            href={website.domain.startsWith('http') ? website.domain : `https://${website.domain}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                            onClick={(e) => e.stopPropagation()}
                          >
                            {website.domain}
                          </a>
                        ) : (
                          <span className="text-blue-200/70">/{website.slug}</span>
                        )}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="relative z-10 p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-gray-600 group-hover:text-blue-600 transition-colors duration-300">
                      <BarChart3 className="w-5 h-5" />
                      <span className="font-medium">{website._count.pages} pages</span>
                    </div>
                    <Button
                      className="font-semibold py-3 px-6 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg hover:shadow-xl hover:from-blue-600 hover:to-indigo-600 transform hover:scale-105 transition-all duration-300 group-hover:animate-pulse"
                      onClick={() => router.push(`/dashboard/websites/${website.id}`)}
                    >
                      <span>Manage</span>
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* No Results Message */}
        {displayWebsites.length === 0 && !loading && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <div className="mx-auto w-32 h-32 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl flex items-center justify-center mb-6">
              <Globe className="w-16 h-16 text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-700 mb-4">
              {searchQuery ? 'No websites found' : 'No websites available'}
            </h3>
            <p className="text-gray-500 mb-6 max-w-md mx-auto">
              {searchQuery 
                ? `We couldn't find any websites matching "${searchQuery}". Try adjusting your search terms.`
                : 'Create your first website to get started with content management.'
              }
            </p>
            {searchQuery && (
              <Button
                onClick={handleClearSearch}
                variant="outline"
                className="px-6 py-3 rounded-xl border-2 border-blue-200 text-blue-600 hover:bg-blue-50 transition-all duration-300"
              >
                <X className="w-4 h-4 mr-2" />
                Clear Search
              </Button>
            )}
          </motion.div>
        )}

        {/* Enhanced Pagination */}
        {totalPages > 1 && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center mt-16 gap-6"
          >
            {/* Pagination Numbers */}
            <div className="flex items-center gap-2">
              <Button
                onClick={prevPage}
                disabled={currentPage === 1}
                variant="outline"
                className="px-6 py-3 rounded-xl border-2 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-50 transition-all duration-300"
              >
                <ChevronLeft className="w-4 h-4 mr-1" />
                Previous
              </Button>
              
              <div className="flex items-center gap-2 mx-4">
                {Array.from({ length: Math.min(5, totalPages) }, (_, index) => {
                  let pageNum
                  if (totalPages <= 5) {
                    pageNum = index + 1
                  } else if (currentPage <= 3) {
                    pageNum = index + 1
                  } else if (currentPage >= totalPages - 2) {
                    pageNum = totalPages - 4 + index
                  } else {
                    pageNum = currentPage - 2 + index
                  }
                  
                  return (
                    <Button
                      key={pageNum}
                      onClick={() => setCurrentPage(pageNum)}
                      variant={currentPage === pageNum ? "default" : "outline"}
                      className={`w-12 h-12 rounded-xl font-semibold transition-all duration-300 ${
                        currentPage === pageNum 
                          ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg scale-110' 
                          : 'border-2 border-gray-200 hover:bg-blue-50 hover:border-blue-300'
                      }`}
                    >
                      {pageNum}
                    </Button>
                  )
                })}
              </div>

              <Button
                onClick={nextPage}
                disabled={currentPage === totalPages}
                variant="outline"
                className="px-6 py-3 rounded-xl border-2 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-50 transition-all duration-300"
              >
                Next
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>

            {/* Pagination Info */}
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200/50 shadow-sm">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <p className="text-sm text-gray-600 font-medium">
                  Page <span className="text-blue-600">{currentPage}</span> of <span className="text-blue-600">{totalPages}</span>
                  <span className="mx-2">•</span>
                  <span className="text-indigo-600">{currentWebsites.length}</span> of 
                  <span className="text-indigo-600 ml-1">{displayWebsites.length}</span> websites
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}
