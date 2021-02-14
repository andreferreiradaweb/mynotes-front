import RegisterForm from '../../form_register'
import Layout from '../../layout'
import * as S from './styled'
import Bg from '../../../assets/images/wave-register.svg'

const Register = () => {
  return (
    <Layout>
      <S.ContentBg>
        <S.BContentBgImage src={Bg}/>
      </S.ContentBg>
      <S.ContentWrapper>
        <S.ContentForm>
          <RegisterForm />
        </S.ContentForm>
      </S.ContentWrapper>
    </Layout>
  )
}

export default Register