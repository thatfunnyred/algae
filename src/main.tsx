import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HomePage from './pages/HomePage'
import Filters from './components/Filters'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Filters />
    <HomePage />
  </StrictMode>
)
