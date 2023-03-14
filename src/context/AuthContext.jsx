import { useEffect, useContext, createContext, useMemo } from 'react'
import axios from 'axios'
// import { ErrorContent, FullPageSpinner } from "components";
import { useState } from 'react'
import { useCallback } from 'react'
import { useQueryClient } from '@tanstack/react-query'

// const { useAsync } = require("utils/hooks");

const AuthContext = createContext()
AuthContext.displayName = 'AuthContext'

export default function AuthProvider(props) {
  const [user, setUser] = useState(null)
  const queryClient = useQueryClient()

  const [token] = useState(localStorage.getItem('USER_ACCESS_TOKEN'))

  useEffect(() => {
    // retrieve user from last session or cache

    const autoLogin = async () => {
      console.log('running auto login')
      let userData = null

      if (!token) {
        return
      }

      userData = await axios.get('/ad/profile/me/').catch((e) => {
        return null
      })

      console.log('userData', userData)

      setUser({ id: userData.data.id, ...userData.data.user })
    }
    autoLogin()
  }, [token])

  const login = useCallback(
    async (details) => {
      const result = await axios.post('/auth/login/', details)

      console.log('result', result.data)

      setUser(result.data)
      localStorage.setItem('USER_ID', result.data.id)
      localStorage.setItem('USER_EMAIL', result.data.email)
      localStorage.setItem('USER_ACCESS_TOKEN', result.data.tokens.access)
      localStorage.setItem('USER_REFRESH_TOKEN', result.data.tokens.refresh)

      queryClient.invalidateQueries({ queryKey: ['cart'] })
      queryClient.invalidateQueries({ queryKey: ['notification'] })
      return result.data
    },
    [setUser]
  )

  const logout = useCallback(() => {
    return Promise.all([
      setUser(null),
      localStorage.removeItem('USER_ID'),
      localStorage.removeItem('USER_EMAIL'),
      localStorage.removeItem('USER_ACCESS_TOKEN'),
      localStorage.removeItem('USER_REFRESH_TOKEN'),
    ]).then(() => {
      queryClient.invalidateQueries({ queryKey: ['cart'] })
      queryClient.invalidateQueries({ queryKey: ['notification'] })
    })
  }, [setUser])

  const register = useCallback((details) => {
    return axios.post('/auth/register/', details)
  }, [])

  // const updateUser = useCallback(
  //   (data) => {
  //     setUser({ ...user, ...data });
  //   },
  //   [setUser]
  // );

  const value = useMemo(
    () => ({ user, login, logout, register }),
    [login, logout, user, register]
  )

  return <AuthContext.Provider value={value} {...props} />
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error(`useAuth must be used within a AuthProvider`)
  }
  return context
}
