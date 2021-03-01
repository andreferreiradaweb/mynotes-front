import { Bars, Nav, NavBtn, NavLink, NavLogo, NavName } from './styled'
import Button from '../elements/Button'
import Logo from '../../assets/images/logo-mynotes-white.png'
import useUser from '../../hooks/user'

export default function HeaderLoggedComponent () {
  const [user, handleLogout] = useUser()

  return (
    <Nav>
      <NavLink to="/">
        <NavLogo src={Logo} />
      </NavLink>
      <Bars />
      <NavBtn>
        <NavName>Olá, {user?.name || ''}</NavName>
        <Button to="/" onClick={() => handleLogout()}>
          Sair
        </Button>
      </NavBtn>
    </Nav>
  )
}
