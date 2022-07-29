// Import react
import { createContext, useEffect, useState, ReactNode } from 'react'

// Next router
import { useRouter } from 'next/router'

// Axios
import axios from 'axios'

// ** Config
import authConfig from '../configs/auth'

// ** Types
import { AuthValuesType, LoginParams, ErrCallbackType, UserDataType } from './types'

// ** Defaults
const defaultProvider: AuthValuesType = {
    user: null,
    loading: true,
    setUser: () => null,
    setLoading: () => Boolean,
    isInitialized: false,
    login: () => Promise.resolve(),
    logout: () => Promise.resolve(),
    setIsInitialized: () => Boolean
}

const AuthContext = createContext(defaultProvider)

type Props = {
    children: ReactNode
}

const AuthProvider = ({ children }: Props) => {
    // ** States
    const [user, setUser] = useState<UserDataType | null>(defaultProvider.user)
    const [loading, setLoading] = useState<boolean>(defaultProvider.loading)
    const [isInitialized, setIsInitialized] = useState<boolean>(defaultProvider.isInitialized)
  
    // ** Hooks
    const router = useRouter()
  
    useEffect(() => {
      const initAuth = async (): Promise<void> => {
        setIsInitialized(true)
        const storedToken = window.localStorage.getItem(authConfig.storageTokenKeyName)!
        console.log(storedToken)
        if (storedToken) {
          setLoading(true)
          await axios
            .get(authConfig.meEndpoint, {
              headers: {
                Authorization: storedToken
              }
            })
            .then(async response => {
              setLoading(false)
              setUser({ ...response.data.userData })
            })
            .catch(() => {
              localStorage.removeItem('userData')
              localStorage.removeItem('refreshToken')
              localStorage.removeItem('accessToken')
              setUser(null)
              setLoading(false)
            })
        } else {
          setLoading(false)
        }
      }
      initAuth()
    }, [])
  
    const handleLogin = (params: LoginParams, errorCallback?: ErrCallbackType) => {
      axios
        .post(authConfig.loginEndpoint, params, { headers:{ 
          'api-key': 'eyJpZCI6IjciLCJuYW1lIjoic2Nvb3Bfd2ViX2FwcHMifQ'
        }})
        .then(async res => {
          setUser({ ...res.data.data.first_name })
          window.localStorage.setItem(authConfig.storageTokenKeyName, res.data.data.access_token)
          window.localStorage.setItem('refreshToken', res.data.data.refresh_token)
          window.localStorage.setItem('userData', JSON.stringify(res.data.data.first_name))
          const returnUrl = router.back()
          const currentUrl = router.asPath
          const redirectURL = currentUrl && currentUrl !== '/login' ? returnUrl : '/'
          router.replace(redirectURL as string)
        })
        .catch(err => {
          if (errorCallback) errorCallback(err)
        })
    }
  
    const handleLogout = () => {
      setUser(null)
      setIsInitialized(false)
      window.localStorage.removeItem('userData')
      window.localStorage.removeItem(authConfig.storageTokenKeyName)
      router.push('/login')
    }
  
    const values = {
      user,
      loading,
      setUser,
      setLoading,
      isInitialized,
      setIsInitialized,
      login: handleLogin,
      logout: handleLogout
    }
  
    return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}
  
export { AuthContext, AuthProvider }
