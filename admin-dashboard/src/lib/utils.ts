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
  
 
  if (path.startsWith('https://') && !path.includes('/.')) return path
  
  let imagePath = path
  
  
  if (imagePath.includes('/.digitechai.in')) {
    
    const match = imagePath.match(/([^\/]+\.(jpg|jpeg|png|gif|webp|svg))$/i)
    if (match) {
      imagePath = `/uploads/${match[1]}`
    } else {
      imagePath = '/uploads/' + imagePath.split('/').pop()
    }
  }
  
  if (imagePath.includes('digitechai.in')) {
    const match = imagePath.match(/uploads\/([^\/]+\.(jpg|jpeg|png|gif|webp|svg))$/i)
    if (match) {
      imagePath = `/uploads/${match[1]}`
    }
  }
  
  
  if (!imagePath.startsWith('http') && !imagePath.startsWith('/uploads/')) {
   
    imagePath = imagePath.replace(/^\/+/, '').replace(/^uploads\//, '')
    imagePath = `/uploads/${imagePath}`
  }
  
  const baseUrl = 'https://api.digitechai.in'
  const finalUrl = `${baseUrl}${imagePath}`
  
   
  return finalUrl
}
