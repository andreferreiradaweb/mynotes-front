import { useState, useEffect } from 'react'

import { Bars, Nav, NavBtn, NavLink, NavLogo, NavName } from './styled'
import { Button } from '../elements/button'
import Logo from '../../assets/images/logo-mynotes-white.png'
import UserService from '../../services/users'

const HeaderLogged = () => {
  const [user, setUser] = useState()

  const fetchUser = async () => {
    try {
      const data = await UserService.index()
      setUser(data)
    } catch (error) {
      console.log({ error: error })
    }
  }

  useEffect(() => {
    fetchUser()
  }, [])

  const logOut = () => {
    UserService.logout()
  }

  return (
    <Nav>
      <NavLink to="/">
        <NavLogo src={Logo} />
      </NavLink>
      <Bars />
      <NavBtn>
        <NavName>Olá, {user ? user.name : ''}</NavName>
        <Button to="/" onClick={() => logOut()}>
          Sair
        </Button>
      </NavBtn>
    </Nav>
  )
}

export default HeaderLogged
