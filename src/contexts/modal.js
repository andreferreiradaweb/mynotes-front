import React, { createContext, useContext, useEffect, useState } from 'react'
import NotesService from '../services/notes'

const ModalContext = createContext({})

export const ModalProvider = ({ children }) => {
  const initialModalCreate = {
    title: '',
    body: '',
    id: ''
  }

  const [ open, setOpen ] = useState(false)

  const handleModalChange = () => {
    setOpen(!open)
  }

  const [modalCreate, setModalCreate] = useState(initialModalCreate)
  const [error, setError] = useState(false)
  
  const handleChange = event => {
    event.preventDefault()
    setModalCreate(prevModalCreate => ({
      ...prevModalCreate,
      [event.target.name]: event.target.value,
    }))
  }

  const handleEditNote = (note) => {
    setModalCreate({
      title: note.title,
      body: note.body,
      id: note._id
    })
  }

  const handleSubmit = async () => {
    try {
      if (modalCreate.id) {
        await NotesService.updateNote(modalCreate.id, {title: modalCreate.title, body: modalCreate.body})
        setModalCreate(initialModalCreate)
        handleModalChange()
      } else {
        await NotesService.createNote(modalCreate)
        setModalCreate(initialModalCreate)
        handleModalChange()
      }
    } catch (error) {
      console.log({ error })
    }
  }

  const contextValues = {
   modalCreate, 
   handleEditNote, 
   handleChange, 
   handleSubmit,
   error,
   open,
   handleModalChange
  }

  return (
    <ModalContext.Provider value={contextValues}>
      {children}
    </ModalContext.Provider>
  )
}

export const useModalContext = () => {
  const context = useContext(ModalContext)
  if (!context) {
    throw new Error('useModalContext must be used with a ModalProvider')
  }
  return context
}
