import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: string | Date) {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

export function formatDateTime(date: string | Date) {
  return new Date(date).toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

const LOCAL_MAP: Record<string, string> = {
  hero1: '/uploads/hero-1.jpg',
  hero2: '/uploads/hero-2.jpg',
  hero3: '/uploads/hero-3.jpg',
  heroAbout: '/uploads/about-hero.jpg',
  heroContact: '/uploads/contact-hero.jpg',
  heroServices: '/uploads/services-hero.jpg',
  heroTeam: '/uploads/team-hero.jpg',
  heroGallery: '/uploads/gallery-hero.jpg',
};

export function getImageUrl(path: string) {
  if (!path) return "";
  if (path.startsWith('http://') || path.startsWith('https://')) return path;

  let imagePath = path;
  if (LOCAL_MAP[path]) {
    imagePath = LOCAL_MAP[path];
  } else if (!imagePath.includes('.') && !imagePath.startsWith('/')) {
    return `https://placehold.co/800x600/10b981/ffffff.png?text=${path}`;
  } else if (imagePath.startsWith('/assets/')) {
    return imagePath; // Serve it straight if it's already an asset path
  } else if (!imagePath.startsWith('/uploads/')) {
    imagePath = imagePath.replace(/^\/+/, "").replace(/^uploads\//, "");
    imagePath = '/uploads/' + imagePath;
  }
  
  const baseUrl = process.env.NEXT_PUBLIC_API_URL?.replace('/api', "") || 'http://localhost:5000';
  return baseUrl + imagePath;
}

