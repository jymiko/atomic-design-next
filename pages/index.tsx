// ** React Imports
import { useEffect } from 'react'

// ** Next Imports
import { useRouter } from 'next/router'

// ** Hook Imports
import { useAuth } from '../hooks/useAuth'

export const getHomeRoute = (role: string) => {
  console.log(role)
  return '/home'
}

const Home = () => {
  const auth = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!router.isReady) {
      return
    }

    if (auth.user && auth.user.role) {
      const homeRoute = getHomeRoute(auth.user.role)

      // Redirect user to Home URL
      router.replace(homeRoute)
    }
  },[])
}

export default Home