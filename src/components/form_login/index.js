import { Redirect } from 'react-router-dom'

import {
  Button,
  ContentForm,
  Error,
  FormBtn,
  FormInput,
  FormTitle,
} from './styled'
import useLogin from '../../hooks/login'

export default function LoginFormComponent () {
  const [login, handleChange, handleSubmit, redirectToNotes, error] = useLogin()

  if (redirectToNotes) return <Redirect to={{ pathname: '/notes' }} />

  return (
    <ContentForm onSubmit={handleSubmit}>
      <FormTitle>Faça o login:</FormTitle>
      <FormInput
        name="email"
        onChange={handleChange}
        placeholder="Digite seu melhor e-mail"
        type="email"
        value={login?.email || ''}
      />
      <FormInput
        name="password"
        onChange={handleChange}
        placeholder="Escolha uma senha"
        type="password"
        value={login?.password || ''}
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
