import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './metal-essay.css'
import MetalEssay from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <MetalEssay />

  </StrictMode>,
)
