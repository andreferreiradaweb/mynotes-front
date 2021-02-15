import LoginForm from '../../form_login'
import Layout from '../../layout'
import { BContentBg, ContentBg, ContentForm, ContentWrapper } from './styled'

const Register = () => {
  return (
    <Layout>
      <ContentBg>
        <BContentBg />
      </ContentBg>
      <ContentWrapper>
        <ContentForm>
          <LoginForm />
        </ContentForm>
      </ContentWrapper>
    </Layout>
  )
}

export default Register
