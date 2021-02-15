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

const RegisterForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [redirectToLogin, setRedirectToLogin] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = async evt => {
    evt.preventDefault()
    try {
      await UserService.register({ name, email, password })
      setRedirectToLogin(true)
    } catch (error) {
      setError(true)
    }
  }

  if (redirectToLogin) return <Redirect to={{ pathname: '/' }} />

  return (
    <ContentForm onSubmit={handleSubmit}>
      <FormTitle>Preencha seus dados abaixo:</FormTitle>
      <FormInput
        type="name"
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Digite seu nome"
      />
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
          Cadastrar
        </Button>
      </FormBtn>
    </ContentForm>
  )
}

export default RegisterForm
