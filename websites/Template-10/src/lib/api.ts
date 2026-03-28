export const API_URL = import.meta.env.VITE_API_URL || '/api';
export const WEBSITE_SLUG = 'template-10';

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
    const res = await fetch(`${API_URL}/public/website/${WEBSITE_SLUG}`, { cache: 'no-store' });
    if (!res.ok) return null;
    const contentType = res.headers.get('content-type') || '';
    if (!contentType.includes('application/json')) {
      console.error('Website API did not return JSON. Check Vite proxy or VITE_API_URL.');
      return null;
    }
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

    // Remove leading slash if any
    fetchSlug = fetchSlug.replace(/^\//, '');

    const res = await fetch(`${API_URL}/public/pages/${WEBSITE_SLUG}/${fetchSlug}`, { cache: 'no-store' });
    if (!res.ok) return null;
    const contentType = res.headers.get('content-type') || '';
    if (!contentType.includes('application/json')) {
      console.error(`Page API did not return JSON for slug: ${fetchSlug}. Check Vite proxy or VITE_API_URL.`);
      return null;
    }
    const data = await res.json();
    return data?.data?.page || null;
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
