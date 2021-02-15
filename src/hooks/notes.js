import { useState, useEffect } from 'react'

import NotesService from '../services/notes'

export default function useNotes () {
  const [notes, setNotes] = useState([])

  const fetchNotes = async () => {
    const { data } = await NotesService.index()
    setNotes(data)
  }

  useEffect(() => {
    fetchNotes()
  }, [])

  return [notes]
}
