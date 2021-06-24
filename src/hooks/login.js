import { useState } from 'react'

import UserService from '../services/users'

export default function useLogin () {
  const initialLogin = {
    email: '',
    password: '',
  }
  const [login, setLogin] = useState(initialLogin)
  const [redirectToNotes, setRedirectToNotes] = useState(false)
  const [error, setError] = useState(false)

  function handleChange (event) {
    event.preventDefault()
    setLogin(prevLogin => ({
      ...prevLogin,
      [event.target.name]: event.target.value,
    }))
  }

  async function handleSubmit (event) {
    event.preventDefault()
    try {
      await UserService.login(login)
      setRedirectToNotes(true)
    } catch (error) {
      setError(true)
      console.log(error)
    }
  }

  return {
    login, 
    handleChange, 
    handleSubmit, 
    redirectToNotes, 
    error
  } 
  
  // [login, handleChange, handleSubmit, redirectToNotes, error]
}