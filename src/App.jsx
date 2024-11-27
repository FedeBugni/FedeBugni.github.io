import React from 'react'
import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import Header from './components/Header/Header.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import NoPage from './pages/NoPage.jsx'

const App = () => {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App


/// errore nel usare un router per navigare tra le pagine
/// router: App.jsx
/// pagine in pages folder
