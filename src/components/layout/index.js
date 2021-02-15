import { LayoutMain } from './styled'
import { GlobalStyles } from '../../globalStyles'
import Header from '../header'

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <Header />
    <LayoutMain>{children}</LayoutMain>
  </>
)

export default Layout
