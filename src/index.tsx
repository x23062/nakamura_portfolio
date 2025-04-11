import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './pages/Header/Header.tsx'
import Main from './pages/Main/main.tsx'
import Footer from './pages/Footer/Footer.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='background'></div>
    <Header />
    <Main />
    <Footer />
  </StrictMode>,
)
