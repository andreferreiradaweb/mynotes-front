import React, { useState, useEffect } from 'react'

import LayoutLogged from '../../layout_logged'
import NotesService from '../../../services/notes'

const Notes = () => {
  const [notes, setNotes] = useState([])

  const fetchNotes = async () => {
    const { data } = await NotesService.index()
    setNotes(data)
  }

  useEffect(() => {
    fetchNotes()
  }, [])

  return (
    <LayoutLogged>
      {notes.map(note => (
        <div key={note._id}>
          <h1>{note.title}</h1>
          <p>{note.body}</p>
        </div>
      ))}
    </LayoutLogged>
  )
}

export default Notes
