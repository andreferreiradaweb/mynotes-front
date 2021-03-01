import { useState, useEffect } from 'react'

import UserService from '../services/users'

export default function useUser () {
  const initialUser = ''
  const [user, setUser] = useState(initialUser)

  const fetchUser = async () => {
    try {
      const data = await UserService.index()
      setUser(data)
    } catch (error) {
      console.log({ error })
    }
  }

  useEffect(() => {
    fetchUser()
  }, [])

  const handleLogout = () => {
    UserService.logout()
  }

  return [user, handleLogout]
}
