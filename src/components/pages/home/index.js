import {
  BContentBgImage,
  ContentBg,
  ContentImage,
  ContentText,
  ContentTextDesc,
  ContentTextTitle,
  ContentWrapper,
  Image,
} from './styled'

import Button from '../../elements/Button'
import Layout from '../../layout'
import Bg from '../../../assets/images/wave.svg'
import Card from '../../../assets/images/card.png'

export default function HomePage () {
  return (
    <Layout>
      <ContentBg>
        <BContentBgImage src={Bg} />
      </ContentBg>
      <ContentWrapper>
        <ContentText>
          <ContentTextTitle>Salve textos online</ContentTextTitle>
          <ContentTextDesc>
            O local perfeito para você salvar suas notas na nuvem de forma
            gratuita.
          </ContentTextDesc>
          <Button primary="true" big="true" to="/register">
            Criar conta
          </Button>
        </ContentText>

        <ContentImage>
          <Image src={Card} />
        </ContentImage>
      </ContentWrapper>
    </Layout>
  )
}
