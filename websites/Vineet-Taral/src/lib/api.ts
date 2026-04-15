export const API_URL = import.meta.env.VITE_API_URL || '/api';
export const WEBSITE_SLUG = import.meta.env.VITE_WEBSITE_SLUG || 'vineet-taral-and-associates';

export interface SectionContent {
  heading?: string;
  subheading?: string;
  description?: string;
  cta?: string;
  features?: string[];
  stats?: any[];
  items?: any[];
  [key: string]: any;
}

export interface Section {
  type: string;
  order: number;
  imageUrl?: string | null;
  textContent: SectionContent;
}

export interface PageData {
  title: string;
  slug: string;
  sections: Section[];
}

export async function getWebsiteData() {
  try {
    const res = await fetch(`${API_URL}/public/website/${WEBSITE_SLUG}`);
    if (!res.ok) return null;
    const data = await res.json();
    return data?.data?.website || null;
  } catch (error) {
    console.error('Error fetching website data:', error);
    return null;
  }
}

export async function getPageData(slug: string): Promise<PageData | null> {
  try {
    let fetchSlug = slug;
    if (slug === '/' || slug === 'index' || slug === '') fetchSlug = 'home';
    fetchSlug = fetchSlug.replace(/^\//, '');

    const trySlugs = [fetchSlug];
    // also try singular/plural variant if primary fails
    if (fetchSlug.endsWith('s')) {
      trySlugs.push(fetchSlug.replace(/s$/, ''));
    } else {
      trySlugs.push(fetchSlug + 's');
    }

    for (const s of trySlugs) {
      try {
        const res = await fetch(`${API_URL}/public/pages/${WEBSITE_SLUG}/${s}`);
        if (!res.ok) continue;
        const data = await res.json();
        return data?.data?.page || null;
      } catch (e) {
        continue;
      }
    }
    return null;
  } catch (error) {
    console.error('Error fetching page data:', error);
    return null;
  }
}

export function getImageUrl(path: string | undefined | null) {
  if (!path) return '';
  if (path.startsWith('http')) return path;
  const baseUrl = API_URL.replace(/\/api$/, '');
  return `${baseUrl}${path}`;
}
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

export async function getPosts(perPage = 20): Promise<WPPost[]> {
  try {
    const res = await fetch(`${API_URL}/public/whats-new/posts?per_page=${perPage}`)
    if (!res.ok) return []
    const json = await res.json()
    return Array.isArray(json.data?.posts) ? json.data.posts : []
  } catch {
    return []
  }
}


export async function getPostBySlug(slug: string): Promise<WPPost | null> {
  try {
    const res = await fetch(`${API_URL}/public/whats-new/post/${encodeURIComponent(slug)}`);
    if (!res.ok) return null;
    const json = await res.json();
    return json?.success && json?.data?.post ? json.data.post : null;
  } catch (error) {
    return null;
  }
}

// Form submission helpers
export async function submitContactForm(formData: { name: string; email: string; phone?: string; company?: string; message: string; subject?: string }) {
  try {
    const payload = { ...formData, website: WEBSITE_SLUG };
    const res = await fetch(`${API_URL}/forms/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const result = await res.json();
    return result;
  } catch (err) {
    console.error('submitContactForm error', err);
    return { success: false, message: 'An error occurred. Please try again.' };
  }
}

export async function submitQueryForm(formData: any) {
  try {
    const payload = { ...formData, website: WEBSITE_SLUG };
    const res = await fetch(`${API_URL}/forms/query`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const result = await res.json();
    return result;
  } catch (err) {
    console.error('submitQueryForm error', err);
    return { success: false, message: 'An error occurred. Please try again.' };
  }
}

export async function submitCareerForm(formData: FormData) {
  try {
    formData.append('website', WEBSITE_SLUG);
    const res = await fetch(`${API_URL}/forms/career`, {
      method: 'POST',
      body: formData,
    });
    const result = await res.json();
    return result;
  } catch (err) {
    console.error('submitCareerForm error', err);
    return { success: false, message: 'An error occurred. Please try again.' };
  }
}
