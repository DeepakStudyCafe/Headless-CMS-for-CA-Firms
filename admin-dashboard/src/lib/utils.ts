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

export function getImageUrl(path: string) {
  if (!path) return "";
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  
  if (!path.includes('.') && !path.startsWith('/')) {
    return `https://picsum.photos/seed/${path}/800/600`;
  }

  let imagePath = path;
  if (!imagePath.startsWith('/uploads/') && !imagePath.startsWith('/assets/')) {
    imagePath = imagePath.replace(/^\/+/, "").replace(/^uploads\//, "");
    imagePath = '/uploads/' + imagePath;
  }
  const baseUrl = process.env.NEXT_PUBLIC_API_URL?.replace('/api', "") || 'http://localhost:5000';
  return baseUrl + imagePath;
}

