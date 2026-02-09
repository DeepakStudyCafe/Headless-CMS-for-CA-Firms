import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface User {
  id: string
  name: string
  email: string
  role: string
}

interface AuthState {
  user: User | null
  token: string | null
  isAuthenticated: boolean
  isInitialized: boolean
  setAuth: (user: User, token: string) => void
  logout: () => void
  checkAuth: () => boolean
  initialize: () => Promise<void>
  verifyToken: () => Promise<boolean>
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      isInitialized: false,
      setAuth: (user, token) => {
        localStorage.setItem('token', token)
        set({ user, token, isAuthenticated: true })
      },
      logout: () => {
        // Clear all auth data
        localStorage.removeItem('token')
        localStorage.removeItem('auth-storage')
        set({ user: null, token: null, isAuthenticated: false })
      },
      checkAuth: () => {
        const state = get()
        const isValid = !!(state.user && state.token)
        if (state.isAuthenticated !== isValid) {
          set({ isAuthenticated: isValid })
        }
        return isValid
      },
      verifyToken: async () => {
        const state = get()
        if (!state.token) {
          
          return false
        }
        
        try {
         
          // Import authAPI dynamically to avoid circular dependency
          const { authAPI } = await import('../lib/api')
          const response = await authAPI.verifyToken()
          
          if (response.data.success && response.data.data.valid) {
            const user = response.data.data.user
      
            set({ user, isAuthenticated: true })
            return true
          } else {
            throw new Error('Token invalid')
          }
        } catch (error: any) {
         
          
          // On ANY error (500 or 401), logout the user to prevent stuck state
          
          localStorage.removeItem('token')
          localStorage.removeItem('auth-storage')
          set({ user: null, token: null, isAuthenticated: false })
          return false
        }
      },
      initialize: async () => {
        const state = get()
        const localToken = localStorage.getItem('token')
        
        // If no stored data, mark as initialized
        if (!state.token && !localToken) {
          set({ isInitialized: true })
          return
        }
        
        // If tokens don't match, clear everything
        if (localToken !== state.token) {
          localStorage.removeItem('token')
          localStorage.removeItem('auth-storage')
          set({ user: null, token: null, isAuthenticated: false, isInitialized: true })
          return
        }
        
        // If we have a token, verify it with the server
        if (state.token && state.user) {
          const isValid = await get().verifyToken()
          set({ isAuthenticated: isValid, isInitialized: true })
        } else {
          set({ isInitialized: true })
        }
      },
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({
        user: state.user,
        token: state.token,
      })
    }
  )
)
