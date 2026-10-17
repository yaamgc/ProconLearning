import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router'
import Top from './top.tsx'
import Slide from './slide.tsx'
import HtmlMenu from './htmlMenu.tsx'
import App from './App.tsx'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>

        <App />
        <Routes>
          <Route path='/' element={<Top />} />
          <Route path='/menu' element={<HtmlMenu />} />
          <Route path='/:course/:id' element={<Slide />} />
        </Routes>
    </BrowserRouter>
  </StrictMode>,
)
