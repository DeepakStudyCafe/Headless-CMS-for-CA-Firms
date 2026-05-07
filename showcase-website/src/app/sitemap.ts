import { MetadataRoute } from 'next';

export const dynamic = 'force-dynamic';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://webcafe.co.in';

  // Base static routes from the original public/sitemap.xml
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 1.0 },
    { url: `${baseUrl}/templates`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/services`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/pricing`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/schedule-call`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/payment`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
  ];

  let blogRoutes: MetadataRoute.Sitemap = [];

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs`, { cache: 'no-store' });
    
    if (res.ok) {
      const data = await res.json();
      const blogs = data.data || [];
      
      blogRoutes = blogs.map((blog: any) => ({
        url: `${baseUrl}/blog/${blog.slug || blog.id}`,
        lastModified: blog.updatedAt ? new Date(blog.updatedAt) : new Date(blog.createdAt || new Date()),
        changeFrequency: 'weekly',
        priority: 0.6,
      }));
    }
  } catch (error) {
    console.error('Error fetching blogs for sitemap:', error);
  }

  return [...staticRoutes, ...blogRoutes];
}
