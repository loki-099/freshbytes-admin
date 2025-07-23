export default defineNuxtPlugin(() => {
  // Global error handler for token expiration
  const { logout } = useAuth()
  
  // Prevent infinite logout loops
  let isLoggingOut = false

  // Handle global fetch errors
  const originalFetch = globalThis.$fetch
  globalThis.$fetch = new Proxy(originalFetch, {
    apply: async (target, thisArg, argumentsList) => {
      try {
        return await target.apply(thisArg, argumentsList)
      } catch (error: unknown) {
        // Check for 401 errors and force logout
        const errorObj = error as { response?: { status?: number }; status?: number; statusCode?: number; message?: string }
        if (errorObj.response?.status === 401 || 
            errorObj.status === 401 || 
            errorObj.statusCode === 401 ||
            (errorObj.message && errorObj.message.includes('401'))) {
          
          // Don't trigger logout if already logging out or if it's a logout request
          const url = argumentsList[0] as string
          if (!isLoggingOut && !url.includes('/api/auth/logout/')) {
            console.log('🔒 Global 401 detected, forcing logout...')
            isLoggingOut = true
            await logout(true) // Skip API call when logging out due to 401
            // Reset flag after a delay
            setTimeout(() => { isLoggingOut = false }, 2000)
          }
          return Promise.reject(error)
        }
        
        throw error
      }
    }
  })

  // Handle unhandled promise rejections
  if (import.meta.client) {
    window.addEventListener('unhandledrejection', async (event) => {
      const error = event.reason
      
      if (error?.response?.status === 401 || 
          error?.status === 401 || 
          error?.statusCode === 401 ||
          (error?.message && error.message.includes('401'))) {
        
        // Don't trigger logout if already logging out
        if (!isLoggingOut) {
          console.log('🔒 Unhandled 401 rejection detected, forcing logout...')
          event.preventDefault() // Prevent the error from being logged
          isLoggingOut = true
          await logout(true) // Skip API call when logging out due to 401
          // Reset flag after a delay
          setTimeout(() => { isLoggingOut = false }, 2000)
        }
      }
    })
  }
})
