import React, { useState, useEffect } from 'react'
import * as S from './styled'
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
    <S.Nav>
      <S.NavLink to="/">
        <S.NavLogo src={Logo} />
      </S.NavLink>
      <S.Bars />
      <S.NavBtn>
        <S.NavName>Olá, {user ? user.name : ''}</S.NavName>
        <Button to="/" onClick={() => logOut()}>
          Sair
        </Button>
      </S.NavBtn>
    </S.Nav>
  )
}

export default HeaderLogged
