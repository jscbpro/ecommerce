import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Routing from './App'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Routing />
  </StrictMode>,
)
