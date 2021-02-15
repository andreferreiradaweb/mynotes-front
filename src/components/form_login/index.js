import React, { useState } from 'react'
import * as S from './styled'
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
    <S.ContentForm onSubmit={handleSubmit}>
      <S.FormTitle>Faça o login:</S.FormTitle>
      <S.FormInput
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Digite seu melhor e-mail"
      />
      <S.FormInput
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="Escolha uma senha"
      />
      {error && <S.Error>A problem ocurred, please try again!</S.Error>}
      <S.FormBtn>
        <S.Button primary="true" type="submit">
          Entrar
        </S.Button>
      </S.FormBtn>
    </S.ContentForm>
  )
}

export default LoginForm
