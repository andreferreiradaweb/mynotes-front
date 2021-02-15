import { Bars, Nav, NavBtn, NavLink, NavLogo } from './styled'
import Button from '../elements/Button'
import Logo from '../../assets/images/logo-mynotes.png'

export default function HeaderComponent () {
  return (
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
}
