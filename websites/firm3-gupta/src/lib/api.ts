const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'
const WEBSITE_SLUG = 'gupta-tax-advisors'

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
    // Use public API endpoint directly
    const res = await fetch(`${API_URL}/public/pages/${WEBSITE_SLUG}/${slug}`, {
      cache: 'no-store',
    })
    
    if (!res.ok) {
      // Try alternate slug (service vs services)
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
  
  // Try to get base URL from environment variable first
  let baseUrl = API_URL ? API_URL.replace('/api', '') : ''
  
  // Client-side fallback: derive API domain from current URL (fully dynamic)
  if (!baseUrl || baseUrl === 'http://localhost:5000') {
    if (typeof window !== 'undefined') {
      const hostname = window.location.hostname
      const parts = hostname.split('.')
      // Convert website.domain.com -> api.domain.com
      if (parts.length >= 2) {
        parts[0] = 'api'
        baseUrl = `https://${parts.join('.')}`
      }
    }
  }
  
  return baseUrl ? `${baseUrl}${path}` : path
}

// Form submission functions
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
        website: 'firm3-gupta'
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
        website: 'firm3-gupta'
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
    // Add website parameter to FormData
    formData.append('website', 'firm3-gupta')
    
    const res = await fetch(`${API_URL}/forms/career`, {
      method: 'POST',
      body: formData, // FormData for file upload
    })
    
    const result = await res.json()
    return result
  } catch (error) {
    console.error('Error submitting career form:', error)
    return { success: false, message: 'An error occurred. Please try again.' }
  }
}
