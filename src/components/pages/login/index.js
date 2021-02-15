import LoginForm from '../../form_login'
import Layout from '../../layout'
import { BContentBg, ContentBg, ContentForm, ContentWrapper } from './styled'

export default function RegisterPage () {
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
