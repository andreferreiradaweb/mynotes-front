import React from 'react'
import { Button } from '../../elements/button'
import Layout from '../../layout'
import * as S from './styled'
import Bg from '../../../assets/images/wave.svg'
import Card from '../../../assets/images/card.png'

const Home = () => {
  return (
    <Layout>
      <S.ContentBg>
        <S.BContentBgImage src={Bg} />
      </S.ContentBg>
      <S.ContentWrapper>
        <S.ContentText>
          <S.ContentTextTitle>Salve textos online</S.ContentTextTitle>
          <S.ContentTextDesc>
            O local perfeito para você salvar suas notas na nuvem de forma
            gratuita.
          </S.ContentTextDesc>
          <Button primary="true" big="true" to="/register">
            Criar conta
          </Button>
        </S.ContentText>

        <S.ContentImage>
          <S.Image src={Card} />
        </S.ContentImage>
      </S.ContentWrapper>
    </Layout>
  )
}

export default Home
