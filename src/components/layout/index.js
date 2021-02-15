import React from 'react'
import * as S from './styled'
import { GlobalStyles } from '../../globalStyles'
import Header from '../header'

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <Header />
    <S.LayoutMain>{children}</S.LayoutMain>
  </>
)

export default Layout
