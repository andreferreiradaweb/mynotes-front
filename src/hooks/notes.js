import { useState, useEffect } from 'react'

import NotesService from '../services/notes'

export default function useNotes () {
  const [ notes, setNotes ] = useState([])

  const fetchNotes = async () => {
    const { data } = await NotesService.index()
    setNotes(data)
  }

  const updateNotes = () => {
    fetchNotes()
  }

  const getNoteIndex = (noteId) => {
    const findIndex = notes.findIndex((note) => note._id === noteId)
    return findIndex
  }

  const handleDeleteNote = async (noteId) => {
    const noteIndex = getNoteIndex(noteId, notes)

    if (noteIndex === -1) return

    try {
      await NotesService.delete(noteId)

      const newNotes = notes.filter((note) => note._id !== noteId)

      setNotes(newNotes)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchNotes()
  }, [])

  return { notes, updateNotes, fetchNotes, getNoteIndex, handleDeleteNote }
}
