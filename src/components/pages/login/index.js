import LoginForm from '../../form_login'
import Layout from '../../layout'
import * as S from './styled'

const Register = () => {
  return (
    <Layout>
      <S.ContentBg>
        <S.BContentBg/>
      </S.ContentBg>
      <S.ContentWrapper>
        <S.ContentForm>
          <LoginForm />
        </S.ContentForm>
      </S.ContentWrapper>
    </Layout>
  )
}

export default Register