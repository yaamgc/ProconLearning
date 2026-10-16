import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router'
import Top from './top.tsx'
import Slide from './slide.tsx'
import HtmlMenu from './htmlMenu.tsx'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
        <div className='bg-red-600 text-center'>
          <Link to='/'><p className='text-4xl text-white pt-3 font-bold mb-2'>PROGYM</p></Link>
          <Link to='/'><p className='text-2xl text-white font-bold pb-4 mb-7'>プロコンゼミ新入生教育用サイト（仮）</p></Link>

        </div>
        <Routes>
          <Route path='/' element={<Top />} />
          <Route path='/menu' element={<HtmlMenu />} />
          <Route path='/:course/:id' element={<Slide />} />
        </Routes>
    </BrowserRouter>
  </StrictMode>,
)
