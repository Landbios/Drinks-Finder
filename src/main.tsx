import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import AppRouter from './Router.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>,
)
