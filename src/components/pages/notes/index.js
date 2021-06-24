import LayoutLogged from '../../layout_logged'

import useNotes from '../../../hooks/notes'
import useModal from '../../../hooks/modal'

import { FaPencilAlt, FaRegTrashAlt } from 'react-icons/fa'

import {
  ContentWrapper,
  Notes,
  Note,
  NoteHead,
  NoteBody,
  NoteIcons,
  NoteButton
} from './styled'

import ButtonComponent from '../../elements/Button'
import Modal from '../../../components/modal'
import { useModalContext } from '../../../contexts/modal'

export default function NotesPage() {

  const { notes, handleDeleteNote, updateNotes } = useNotes()
  const { open, handleModalChange, handleEditNote } = useModalContext()

  return (
    <LayoutLogged>
      <ContentWrapper>
        {open && <Modal updateFetch={updateNotes} onClose={handleModalChange}/>}
        <ButtonComponent primary="true" onClick={() => handleModalChange()}>+ Criar nota</ButtonComponent>
        <Notes>
          {notes.map(note => (
            <Note key={note._id}>
              <NoteHead>
                <h1>{note.title}</h1>
              </NoteHead>
              <NoteBody>
                <p>{note.body}</p>
              </NoteBody>
              <NoteIcons>
                <FaPencilAlt onClick={() => {
                  handleEditNote(note)
                  handleModalChange()
                }} />
                <NoteButton onClick={() => handleDeleteNote(note._id)}><FaRegTrashAlt /></NoteButton>
              </NoteIcons>
            </Note>
          ))}
        </Notes>
      </ContentWrapper>
    </LayoutLogged>
  )
}
