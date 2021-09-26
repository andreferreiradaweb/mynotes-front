import { Wrapper, ModalElement, Close, ModalTitle, ModalBody } from './styled'
import Button from '../elements/Button'

import { useModalContext } from '../../contexts/modal'

export default function Modal({ onClose = () => {}, updateFetch = () => {}}) {

  const { modalCreate, handleChange, handleSubmit } = useModalContext()

  return (
    <Wrapper>
      <ModalElement>
        <ModalTitle 
          name="title"
          onChange={handleChange}
          placeholder="Escreva o título da sua tarefa"
          type="text"
          value={modalCreate?.title || ''}
        />
        <ModalBody 
          name="body"
          onChange={handleChange}
          placeholder="Escreva uma descrição para a tarefa"
          type="text"
          value={modalCreate?.body || ''}
        />
        <Close onClick={() => onClose()}>X</Close>
        <Button primary type="button" onClick={() => {
          handleSubmit()
          updateFetch()
          }}>Salvar nota</Button>
      </ModalElement>
    </Wrapper>
  )
}
