import { useState } from 'react'

export default function useModal(initialValue = false) {

  const [ open, setOpen ] = useState(initialValue)

  const handleModalChange = () => {
    setOpen(!open)
  }

  return [ open, setOpen, handleModalChange ]
}
