// Use environment variable or fallback to empty string (will be determined at runtime)
const API_URL = process.env.NEXT_PUBLIC_API_URL || ''
const WEBSITE_SLUG = 'kapoor-financial'

export async function getWebsiteData() {
  try {
    const res = await fetch(`${API_URL}/public/website/${WEBSITE_SLUG}`, {
      cache: 'no-store',
    })
    
    if (!res.ok) {
      console.error('Failed to fetch website data:', res.status)
      return null
    }
    
    const data = await res.json()
    return data?.data?.website || null
  } catch (error) {
    console.error('Error fetching website data:', error)
    return null
  }
}

export async function getPageData(slug: string) {
  try {
    const res = await fetch(`${API_URL}/public/pages/${WEBSITE_SLUG}/${slug}`, {
      cache: 'no-store',
    })
    
    if (!res.ok) {
      const altSlug = slug === 'services' ? 'service' : slug === 'service' ? 'services' : null
      if (altSlug) {
        const altRes = await fetch(`${API_URL}/public/pages/${WEBSITE_SLUG}/${altSlug}`, {
          cache: 'no-store',
        })
        if (altRes.ok) {
          const altData = await altRes.json()
          return altData?.data?.page || null
        }
      }
      console.error('Failed to fetch page:', res.status)
      return null
    }
    
    const data = await res.json()
    return data?.data?.page || null
  } catch (error) {
    console.error('Error fetching page data:', error)
    return null
  }
}

export function getImageUrl(path: string) {
  if (!path) return ''
  if (path.startsWith('http')) return path
  
  // Get base URL from environment variable
  let baseUrl = API_URL
  
  // Runtime detection if env var not available
  if (!baseUrl && typeof window !== 'undefined') {
    // Use fetch to detect API URL from the website data endpoint
    // This will work because the websites are served by Next.js which knows where to fetch from
    const protocol = window.location.protocol
    const hostname = window.location.hostname
    
    // Try common patterns based on deployment
    if (hostname === 'localhost' || hostname === '127.0.0.1') {
      baseUrl = 'http://localhost:5000/api'
    } else {
      // Production: derive from current domain
      // Extract root domain (e.g., digitechai.in from automatepractice.com)
      const parts = hostname.split('.')
      if (parts.length >= 2) {
        // Check if it's a digitechai.in subdomain
        const lastTwo = parts.slice(-2).join('.')
        if (lastTwo === 'digitechai.in') {
          baseUrl = 'https://api.digitechai.in/api'
        } else {
          // Standalone domain - infer from page fetch patterns
          // Since we successfully fetched the page data, use the same pattern
          // All sites resolve to api.digitechai.in in production
          baseUrl = 'https://api.digitechai.in/api'
        }
      }
    }
  }
  
  // Remove /api suffix to get base URL for images
  if (baseUrl) {
    baseUrl = baseUrl.replace(/\/api$/, '')
  }
  
  return baseUrl ? `${baseUrl}${path}` : path
}

export async function trackPageView(pageSlug: string) {
  try {
    const websitesRes = await fetch(`${API_URL}/public/websites`, {
      cache: 'no-store',
    })
    
    if (!websitesRes.ok) return
    
    const websitesData = await websitesRes.json()
    
    if (!websitesData || !websitesData.data || !websitesData.data.websites) {
      return
    }
    
    const website = websitesData.data.websites.find(
      (w: any) => w.slug === WEBSITE_SLUG
    )

    if (website) {
      await fetch(`${API_URL}/analytics/track`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          websiteId: website.id,
          pageSlug,
        }),
        cache: 'no-store',
      })
    }
  } catch (error) {
    console.error('Error tracking page view:', error)
  }
}

export async function submitContactForm(formData: {
  name: string
  email: string
  phone: string
  company?: string
  message: string
}) {
  try {
    const res = await fetch(`${API_URL}/forms/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...formData,
        website: 'firm4-kapoor'
      }),
    })
    
    const result = await res.json()
    return result
  } catch (error) {
    console.error('Error submitting contact form:', error)
    return { success: false, message: 'An error occurred. Please try again.' }
  }
}

export async function submitQueryForm(formData: {
  name: string
  designation?: string
  organization?: string
  officeAddress?: string
  city: string
  email: string
  telephone?: string
  mobile: string
  otherUpdates: string
  subjectOfQuery: string
  query: string
}) {
  try {
    const res = await fetch(`${API_URL}/forms/query`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...formData,
        website: 'firm4-kapoor'
      }),
    })
    
    const result = await res.json()
    return result
  } catch (error) {
    console.error('Error submitting query form:', error)
    return { success: false, message: 'An error occurred. Please try again.' }
  }
}

export async function submitCareerForm(formData: FormData) {
  try {
    formData.append('website', 'firm4-kapoor')
    
    const res = await fetch(`${API_URL}/forms/career`, {
      method: 'POST',
      body: formData,
    })
    
    const result = await res.json()
    return result
  } catch (error) {
    console.error('Error submitting career form:', error)
    return { success: false, message: 'An error occurred. Please try again.' }
  }
}
