import React, { useState } from 'react'
import {
  Button,
  ContentForm,
  Error,
  FormBtn,
  FormInput,
  FormTitle,
} from './styled'
import UserService from '../../services/users'
import { Redirect } from 'react-router-dom'

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [redirectToNotes, setRedirectToNotes] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = async evt => {
    evt.preventDefault()
    try {
      await UserService.login({ email, password })
      setRedirectToNotes(true)
    } catch (error) {
      setError(true)
      console.log(error)
    }
  }

  if (redirectToNotes) return <Redirect to={{ pathname: '/notes' }} />

  return (
    <ContentForm onSubmit={handleSubmit}>
      <FormTitle>Faça o login:</FormTitle>
      <FormInput
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Digite seu melhor e-mail"
      />
      <FormInput
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="Escolha uma senha"
      />
      {error && <Error>A problem ocurred, please try again!</Error>}
      <FormBtn>
        <Button primary="true" type="submit">
          Entrar
        </Button>
      </FormBtn>
    </ContentForm>
  )
}

export default LoginForm
