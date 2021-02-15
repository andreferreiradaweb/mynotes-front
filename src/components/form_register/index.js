import { Redirect } from 'react-router-dom'

import useFormRegister from '../../hooks/formRegister'
import {
  Button,
  ContentForm,
  Error,
  FormBtn,
  FormInput,
  FormTitle,
} from './styled'

export default function RegisterFormComponent () {
  const [formRegister, handleChange, handleSubmit, redirectToLogin, error] = useFormRegister()

  if (redirectToLogin) return <Redirect to={{ pathname: '/' }} />

  return (
    <ContentForm onSubmit={handleSubmit}>
      <FormTitle>Preencha seus dados abaixo:</FormTitle>
      <FormInput
        name="name"
        onChange={handleChange}
        placeholder="Digite seu nome"
        type="name"
        value={formRegister?.name || ''}
      />
      <FormInput
        name="email"
        onChange={handleChange}
        placeholder="Digite seu melhor e-mail"
        type="email"
        value={formRegister?.email || ''}
      />
      <FormInput
        name="password"
        onChange={handleChange}
        placeholder="Escolha uma senha"
        type="password"
        value={formRegister?.password || ''}
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
