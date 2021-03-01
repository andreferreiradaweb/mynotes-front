import { useState } from 'react'

import UserService from '../services/users'

export default function useFormRegister () {
  const initialFormRegister = {
    name: '',
    email: '',
    password: '',
  }
  const [formRegister, setFormRegister] = useState(initialFormRegister)
  const [redirectToLogin, setRedirectToLogin] = useState(false)
  const [error, setError] = useState(false)

  const handleChange = event => {
    event.preventDefault()
    setFormRegister(prevFormRegister => ({
      ...prevFormRegister,
      [event.target.name]: event.target.value,
    }))
  }

  const handleSubmit = async event => {
    event.preventDefault()
    try {
      await UserService.register(formRegister)
      setRedirectToLogin(true)
    } catch (error) {
      setError(true)
    }
  }

  return [formRegister, handleChange, handleSubmit, redirectToLogin, error]
}
