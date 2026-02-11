import axios from 'axios'

const API_URL = process.env.NEXT_PUBLIC_API_URL

const apiClient = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
})


apiClient.interceptors.request.use(
  (config) => {
    
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)


apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      
      localStorage.removeItem('token')
      localStorage.removeItem('auth-storage')
      
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

// Auth API
export const authAPI = {
  login: (email: string, password: string) =>
    apiClient.post('/auth/login', { email, password }),
  register: (name: string, email: string, password: string, role?: string) =>
    apiClient.post('/auth/register', { name, email, password, role }),
  getProfile: () => apiClient.get('/auth/profile'),
  verifyToken: () => apiClient.get('/auth/verify'),
  logout: () => apiClient.post('/auth/logout'),
}

// Website API
export const websiteAPI = {
  getAll: (params?: { search?: string; page?: number; limit?: number }) => 
    apiClient.get('/websites', { params }),
  getById: (id: string) => apiClient.get(`/websites/${id}`),
  create: (data: any) => apiClient.post('/websites', data),
  update: (id: string, data: any) => apiClient.put(`/websites/${id}`, data),
  delete: (id: string) => apiClient.delete(`/websites/${id}`),
}

// Page API
export const pageAPI = {
  getByWebsite: (websiteId: string, status?: string) =>
    apiClient.get(`/pages/website/${websiteId}`, { params: { status } }),
  getById: (id: string) => apiClient.get(`/pages/${id}`),
  create: (data: any) => apiClient.post('/pages', data),
  update: (id: string, data: any) => apiClient.put(`/pages/${id}`, data),
  delete: (id: string) => apiClient.delete(`/pages/${id}`),
  publish: (id: string) => apiClient.post(`/pages/${id}/publish`),
}

// Section API
export const sectionAPI = {
  getByPage: (pageId: string) => apiClient.get(`/sections/page/${pageId}`),
  getById: (id: string) => apiClient.get(`/sections/${id}`),
  create: (data: any) => apiClient.post('/sections', data),
  update: (id: string, data: any) => apiClient.put(`/sections/${id}`, data),
  delete: (id: string) => apiClient.delete(`/sections/${id}`),
  reorder: (sections: any[]) => apiClient.post('/sections/reorder', { sections }),
}

// Media API
export const mediaAPI = {
  upload: (file: File) => {
    const formData = new FormData()
    formData.append('image', file)
    return apiClient.post('/media/upload', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
  },
  delete: (filename: string) => apiClient.delete(`/media/${filename}`),
}

// Revalidation API
export const revalidateAPI = {
  website: (websiteId: string) => apiClient.post(`/revalidate/${websiteId}`),
  page: (pageId: string) => apiClient.post(`/revalidate/page/${pageId}`),
}

// Analytics API
export const analyticsAPI = {
  getByWebsite: (websiteId: string, startDate?: string, endDate?: string) =>
    apiClient.get(`/analytics/${websiteId}`, { params: { startDate, endDate } }),
  track: (websiteId: string, pageSlug: string) =>
    apiClient.post('/analytics/track', { websiteId, pageSlug }),
}

export default apiClient
