import React from 'react'
import * as S from './styled'
import { Button } from '../elements/button'
import Logo from '../../assets/images/logo-mynotes.png'

const Header = () => (
  <S.Nav>
    <S.NavLink to="/">
      <S.NavLogo src={Logo} />
    </S.NavLink>
    <S.Bars />
    <S.NavBtn>
      <Button to="/notes">My Notes</Button>
      <Button to="/login">Entrar</Button>
      <Button primary="true" to="/register">
        Criar Conta
      </Button>
    </S.NavBtn>
  </S.Nav>
)

export default Header
