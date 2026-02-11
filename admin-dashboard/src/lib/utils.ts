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
  console.log('🖼️ getImageUrl called with path:', path)
  
  if (!path) return ''
  
  // If already a complete valid URL, return as-is
  if (path.startsWith('https://') && !path.includes('/.')) return path
  
  let imagePath = path
  
  // Fix all types of malformed URLs
  if (imagePath.includes('/.digitechai.in')) {
    // Extract just the filename from malformed URLs like "/.digitechai.in/api/uploads/filename.jpg"
    const match = imagePath.match(/([^\/]+\.(jpg|jpeg|png|gif|webp|svg))$/i)
    if (match) {
      imagePath = `/uploads/${match[1]}`
    } else {
      imagePath = '/uploads/' + imagePath.split('/').pop()
    }
  }
  
  // Clean up URL that starts with domain
  if (imagePath.includes('digitechai.in')) {
    const match = imagePath.match(/uploads\/([^\/]+\.(jpg|jpeg|png|gif|webp|svg))$/i)
    if (match) {
      imagePath = `/uploads/${match[1]}`
    }
  }
  
  // Ensure path starts with /uploads/ for relative paths
  if (!imagePath.startsWith('http') && !imagePath.startsWith('/uploads/')) {
    // Remove any leading slashes and "uploads" duplicates
    imagePath = imagePath.replace(/^\/+/, '').replace(/^uploads\//, '')
    imagePath = `/uploads/${imagePath}`
  }
  
  const baseUrl = 'https://api.digitechai.in'
  const finalUrl = `${baseUrl}${imagePath}`
  
  console.log('✅ Final URL:', finalUrl)  
  return finalUrl
}
