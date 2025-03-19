import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './pages/App.tsx'
import { ThreeSample } from './pages/threeSample.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <ThreeSample />
  </StrictMode>,
)
