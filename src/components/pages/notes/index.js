import React, { useState, useEffect } from 'react'
import LayoutLogged from '../../layout_logged'
import { FaPencilAlt, FaRegTrashAlt  } from 'react-icons/fa'
import NotesService from '../../../services/notes'
import * as S from './styled'

const Notes = () => {

  const [ notes, setNotes ] = useState([])

  const fetchNotes = async () => {
    const { data } = await NotesService.index()
    setNotes(data.reverse())
  }
  
  useEffect(() => {
    fetchNotes()
  }, [])

  return (
    <LayoutLogged>
      <S.ContentWrapper>
        <S.Notes>
        {notes.map(note => (
          <S.Note key={note._id}>
            <S.noteHead>
              <h1>{note.title}</h1>
            </S.noteHead>
            <S.noteBody>
              <p>{note.body}</p>
            </S.noteBody>
            <S.noteIcons>
              <FaPencilAlt />
              <FaRegTrashAlt />
            </S.noteIcons>
          </S.Note>
        ))}
        </S.Notes>
      </S.ContentWrapper>
    </LayoutLogged>
  )
}

export default Notes
