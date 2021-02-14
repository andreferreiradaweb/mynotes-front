import styled from 'styled-components'
import { Link } from "react-router-dom"
import { FaBars } from 'react-icons/fa'

export const Nav = styled.nav`
  padding: 0 50px;
  background: var(--white);
  height: 80px;
  width: 100%;
  display: flex;
  z-index: 9;
  justify-content: space-between;
  position: relative;
  -webkit-box-shadow: 0px 7px 17px -6px rgba(0,0,0,0.58);
  -moz-box-shadow: 0px 7px 17px -6px rgba(0,0,0,0.58);
  box-shadow: 0px 7px 17px -6px rgba(0,0,0,0.58);
`

export const NavLink = styled(Link)`
  color: var(--black);
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 10px;
  border-radius: 15px;
  transition: .5s all;
  cursor: pointer;

  &:hover {
    transition: .3s all;
    transform: translateY(-5px);
  }
`

export const NavLogo = styled.img`
  width: 150px;
`

export const Bars = styled(FaBars)`
  color: #fff;
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    cursor: pointer;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
  }
`

export const NavBtn = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`