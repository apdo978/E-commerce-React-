import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes,Route } from 'react-router'
import NavBar from './NavBar.jsx'
import DetailsPAge from './DetailsPAge.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar/>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}> </Route>
      <Route path='About' element={<><h1 className='About'> About page</h1> </>}> </Route>
      <Route path='Contact-Us' element={<><h1 className='Contact-Us'> Contact-Us page</h1> </>}> </Route>
      <Route path="product/:Id"   element={<DetailsPAge />}  > </Route>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
