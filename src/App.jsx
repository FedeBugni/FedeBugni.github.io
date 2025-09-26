import { Routes, Route  } from 'react-router-dom'
import Header from './components/Header/Header.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contacts from './pages/Contacts.jsx'
import Giudizio from './pages/Giudizio.jsx'
import Morte from './pages/Morte.jsx'
import Sfilata from './pages/Sfilata.jsx'
import Exhibition from './pages/Exhibition.jsx'
import Archive from './pages/Archive.jsx'
import Tempio from './pages/./Tempio.jsx'
import EcoLuminoso from './pages/Eco-luminoso.jsx'
import NoPage from './pages/NoPage.jsx'
import Footer from './components/Footer/Footer.jsx'

const App = () => {
  return (
    <div>
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/tempio' element={<Tempio />} />
          <Route path='/eco-luminoso' element={<EcoLuminoso />} />
          <Route path='/giudizio' element={<Giudizio />} />
          <Route path='/morte' element={<Morte />} />
          <Route path='/sfilata' element={<Sfilata />} />
          <Route path='/exhibition' element={<Exhibition />} />
          <Route path='/archive' element={<Archive />} />
          <Route path='/about' element={<About />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='*' element={<NoPage />} />
        </Routes>
      <Footer />
    </div>
  )
}

export default App