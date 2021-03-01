import RegisterForm from '../../form_register'
import Layout from '../../layout'
import {
  BContentBgImage,
  ContentBg,
  ContentForm,
  ContentWrapper,
} from './styled'
import Bg from '../../../assets/images/wave-register.svg'

export default function RegisterPage () {
  return (
    <Layout>
      <ContentBg>
        <BContentBgImage src={Bg} />
      </ContentBg>
      <ContentWrapper>
        <ContentForm>
          <RegisterForm />
        </ContentForm>
      </ContentWrapper>
    </Layout>
  )
}
