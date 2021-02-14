import React from 'react'
import * as S from './styled'
import { GlobalStyles } from '../../globalStyles'
import HeaderLogged from '../header_logged'

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <HeaderLogged />
    <S.LayoutMain>{children}</S.LayoutMain>  
  </>
)

export default Layout