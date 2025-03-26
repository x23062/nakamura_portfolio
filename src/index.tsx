import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './pages/Header/Header.tsx'
import Footer from './pages/Footer/Footer.tsx'
// import { ThreeSample } from './pages/threeSample.tsx'
// import Water from './pages/water.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    {/* <Water />
    <ThreeSample /> */}
    <Footer />
  </StrictMode>,
)
