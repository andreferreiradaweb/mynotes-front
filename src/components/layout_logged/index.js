import React from 'react'
import { LayoutMain } from './styled'
import { GlobalStyles } from '../../globalStyles'
import HeaderLogged from '../header_logged'

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <HeaderLogged />
    <LayoutMain>{children}</LayoutMain>
  </>
)

export default Layout
