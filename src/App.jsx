import React from 'react'
import { Routes, Route  } from 'react-router-dom'
import Header from './components/Header/Header.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contacts.jsx'
import Projects from './pages/Projects.jsx'
import Installation from './pages/Installation.jsx'
import TesteIdra from './pages/TesteIdra.jsx'
import Exhibition from './pages/Exhibition.jsx'
import Archive from './pages/Archive.jsx'
import ArtDirection from './pages/ArtDirection.jsx'
import SetDesign from './pages/SetDesign.jsx'
import NoPage from './pages/NoPage.jsx'

const App = () => {
  return (
    <div>
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/artDirection' element={<ArtDirection />} />
          <Route path='/setDesign' element={<SetDesign />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/installation' element={<Installation />} />
          <Route path='/testeIdra' element={<TesteIdra />} />
          <Route path='/exhibition' element={<Exhibition />} />
          <Route path='/archive' element={<Archive />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<NoPage />} />
        </Routes>
    </div>
  )
}

export default App


/// errore nel usare un router per navigare tra le pagine
/// router: App.jsx
/// pagine in pages folder
