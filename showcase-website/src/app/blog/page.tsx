import BlogListingClient from '@/components/BlogListingClient';
import { getSeoMetadata } from '@/lib/seoHelper';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const meta = await getSeoMetadata('blog');
  return {
    title: meta.title,
    description: meta.description,
  };
}

export default function BlogListingPage() {
  return <BlogListingClient />;
}

export const dynamic = 'force-dynamic';
