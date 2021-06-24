import styled from 'styled-components'

export const Wrapper = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  z-index: 9;
  background: rgba(0,0,0,0.5);
`

export const ModalElement = styled.div`
  padding: 15px;
  display: flex;
  top: 150px;
  margin: 0 auto;
  flex-direction: column;
  position: relative;
  width: 600px;
  height: auto;
  background: #fff;
  box-shadow: 0px 7px 17px -6px rgba(0,0,0,0.58);
  border-radius: 10px;
`

export const ModalTitle = styled.input`
  padding: 10px;
  width: 90%;
  border-radius: 10px;
  border: 1.5px solid #78828D;
`

export const ModalBody = styled.textarea`
  width: 100%;
  margin: 15px 0;
  padding: 10px;
  height: 180px;
  border-radius: 10px;
  border: 1.5px solid #78828D;
`

export const Close = styled.button`
  cursor: pointer;
  position: absolute;
  font-weight: 600;
  top: 15px;
  right: 15px;
  padding: 2px 5px 1px 5px;
  border-radius: 50%;
  color: var(--blue);
  background: transparent;
  border: 2px solid var(--blue);
`