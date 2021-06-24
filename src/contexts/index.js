import React from 'react'

import { ModalProvider } from './modal'

export const AppContexts = ({ children }) => (
  <ModalProvider>
    {children}
  </ModalProvider>
)
