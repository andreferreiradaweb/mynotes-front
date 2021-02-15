import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Button = styled(Link)`
  background: ${({ primary }) => (primary ? 'var(--blue)' : 'var(--white)')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '16px' : '10px')};
  color: ${({ primary }) => (primary ? 'var(--white)' : 'var(--blue)')};
  font-family: 'montserrat', sans-serif;
  font-weight: bold;
  font-size: ${({ big }) => (big ? '20px' : '16px')};
  outline: none;
  border: none;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s !important;
  border-radius: ${({ round }) => (round ? '10px' : 'none')};

  &:hover {
    background: ${({ primary }) => (primary ? '#1c0051' : '')};
    transform: translateY(-5px);
  }
`
