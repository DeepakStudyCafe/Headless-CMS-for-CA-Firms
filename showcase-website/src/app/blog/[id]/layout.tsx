import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  try {
    // Attempt to fetch the blog details for metadata
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs/${params.id}`, { cache: 'no-store' });
    if (res.ok) {
      const json = await res.json();
      const blog = json.data;
      if (blog) {
        return {
          title: `${blog.title} | Webcafe Blog`,
          description: blog.excerpt || blog.title,
          alternates: {
            canonical: `/blog/${blog.slug || blog.id}`,
          },
        };
      }
    }
  } catch (err) {
    console.error('Error fetching blog metadata:', err);
  }

  return {
    title: 'Blog Post | Webcafe',
  };
}

export default function BlogDetailLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
