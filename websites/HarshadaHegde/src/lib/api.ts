const API_URL = process.env.NEXT_PUBLIC_API_URL
const WEBSITE_SLUG = process.env.NEXT_PUBLIC_WEBSITE_SLUG || 'satyug-corporate-consultancy'

export async function getWebsiteData() {
  try {
    const res = await fetch(`${API_URL}/public/website/${WEBSITE_SLUG}`, {
      next: { revalidate: 3600 },
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
      next: { revalidate: 3600 },
    })
    
    if (!res.ok) {
      const altSlug = slug === 'services' ? 'service' : slug === 'service' ? 'services' : null
      if (altSlug) {
        const altRes = await fetch(`${API_URL}/public/pages/${WEBSITE_SLUG}/${altSlug}`, {
          next: { revalidate: 3600 },
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

  // Prefer explicit env var; otherwise derive from current origin at runtime.
  // This avoids hardcoded fallbacks while ensuring built sites can resolve images.
  let baseUrl: string | undefined = API_URL

  if (!baseUrl && typeof window !== 'undefined') {
    baseUrl = `${window.location.origin}/api`
  }

  // Remove trailing /api if present to form root URL for image paths
  if (baseUrl) baseUrl = baseUrl.replace(/\/api$/, '')

  return baseUrl ? `${baseUrl}${path}` : path
}

export async function trackPageView(pageSlug: string) {
  try {
    const websitesRes = await fetch(`${API_URL}/public/websites`, {
      next: { revalidate: 3600 },
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
        next: { revalidate: 3600 },
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
          website: WEBSITE_SLUG
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
          website: WEBSITE_SLUG
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
    formData.append('website', WEBSITE_SLUG)
    
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

// ─── StudyCafe "What's New" post helpers ─────────────────────────────────────

export interface WPPost {
  id: number
  date: string
  slug: string
  title: string
  excerpt: string
  content: string
  link: string
  authorName: string
  featuredImage: string
}

/** Fetch combined latest posts from the StudyCafe proxy (all sites). */
export async function getPosts(perPage = 20): Promise<WPPost[]> {
  try {
    const res = await fetch(`${API_URL}/public/whats-new/posts?per_page=${perPage}`, {
      next: { revalidate: 86400 },
    })
    if (!res.ok) return []
    const json = await res.json()
    return Array.isArray(json.data?.posts) ? json.data.posts : []
  } catch {
    return []
  }
}

/** Fetch a single post by slug. */
export async function getPostBySlug(slug: string): Promise<WPPost | null> {
  try {
    const res = await fetch(`${API_URL}/public/whats-new/post/${encodeURIComponent(slug)}`, {
      next: { revalidate: 86400 },
    })
    if (!res.ok) return null
    const json = await res.json()
    return json?.success && json.data?.post ? json.data.post : null
  } catch {
    return null
  }
}

/** Search posts by keyword via the StudyCafe proxy. */
export async function searchPosts(q: string, perPage = 10): Promise<WPPost[]> {
  try {
    const res = await fetch(`${API_URL}/public/whats-new/search?q=${encodeURIComponent(q)}&per_page=${perPage}`, {
      next: { revalidate: 3600 },
    })
    if (!res.ok) return []
    const json = await res.json()
    return Array.isArray(json.data?.posts) ? json.data.posts : []
  } catch {
    return []
  }
}

/** Fetch a single post by numeric ID (for ?p= style WP links). */
export async function getPostById(id: number): Promise<WPPost | null> {
  try {
    const res = await fetch(`${API_URL}/public/whats-new/post/by-id/${id}`, {
      next: { revalidate: 86400 },
    })
    if (!res.ok) return null
    const json = await res.json()
    return json?.success && json.data?.post ? json.data.post : null
  } catch {
    return null
  }
}
