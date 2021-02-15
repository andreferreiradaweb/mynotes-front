import React from 'react'

import { Bars, Nav, NavBtn, NavLink, NavLogo } from './styled'
import { Button } from '../elements/button'
import Logo from '../../assets/images/logo-mynotes.png'

const Header = () => (
  <Nav>
    <NavLink to="/">
      <NavLogo src={Logo} />
    </NavLink>
    <Bars />
    <NavBtn>
      <Button to="/notes">My Notes</Button>
      <Button to="/login">Entrar</Button>
      <Button primary="true" to="/register">
        Criar Conta
      </Button>
    </NavBtn>
  </Nav>
)

export default Header
