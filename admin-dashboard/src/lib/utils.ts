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
  if (!path) return ''
  if (path.startsWith('http')) return path
  
  // Avoid double processing - if it already looks like a processed URL, return as-is
  if (path.includes('digitechai.in')) return path
  
  const apiUrl = process.env.NEXT_PUBLIC_API_URL
  if (!apiUrl) {
    console.warn('NEXT_PUBLIC_API_URL is not defined. Using fallback.')
    return `https://api.digitechai.in${path}`
  }
  
  // Remove /api from the end to get the base URL
  const baseUrl = apiUrl.replace('/api', '')
  return `${baseUrl}${path}`
}
