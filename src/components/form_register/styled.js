import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const ContentForm = styled.form`
  background-color: var(--white);
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  -webkit-box-shadow: 0px 7px 17px -6px rgba(0, 0, 0, 0.58);
  -moz-box-shadow: 0px 7px 17px -6px rgba(0, 0, 0, 0.58);
  box-shadow: 0px 7px 17px -6px rgba(0, 0, 0, 0.58);
`

export const FormTitle = styled.strong`
  font-size: 35px;
  color: var(--blue);
  font-weight: bold;
`

export const FormInput = styled.input`
  color: var(--white);
  background: var(--blue);
  border: none;
  padding: 10px;
  margin-top: 25px;
  width: 350px;

  &::-webkit-input-placeholder {
    color: var(--white);
  }

  &:-moz-placeholder {
    color: var(--white);
  }

  &::-moz-placeholder {
    color: var(--white);
  }

  &:-ms-input-placeholder {
    color: var(--white);
  }
`

export const Error = styled.p`
  margin-top: 25px;
  color: red;
  font-weight: bold;
  font-family: var(--font);
`

export const FormBtn = styled.div`
  display: flex;
  margin-top: 25px;
`

export const Button = styled.button`
  background: ${({ primary }) => (primary ? 'var(--blue)' : '')};
  color: #fff;
  font-weight: bold;
  border: none;
  padding: 16px;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s !important;

  &:hover {
    background: ${({ primary }) => (primary ? '#1c0051' : '')};
    transform: translateY(-5px);
  }
`
