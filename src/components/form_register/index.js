import React, { useState } from 'react'
import * as S from './styled'
import UserService from '../../services/users'
import { Redirect } from "react-router-dom";

const RegisterForm = () => {

  const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [redirectToLogin, setRedirectToLogin] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = async evt => {
        evt.preventDefault()
        try {
            await UserService.register({ name, email, password })
            setRedirectToLogin(true)
        } catch (error) {
            setError(true)
        }
    }

    if(redirectToLogin)
        return <Redirect to={{pathname: "/"}}/>

  return (
    <S.ContentForm onSubmit={handleSubmit}>
      <S.FormTitle>Preencha seus dados abaixo:</S.FormTitle>
          <S.FormInput 
          type="name"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Digite seu nome" />
          <S.FormInput
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Digite seu melhor e-mail" />
          <S.FormInput
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Escolha uma senha" />
          { error && <S.Error>A problem ocurred, please try again!</S.Error> }
          <S.FormBtn>
            <S.Button primary="true" type="submit">Cadastrar</S.Button>
          </S.FormBtn>
    </S.ContentForm>
  )
}

export default RegisterForm
