import { Routes, Route  } from 'react-router-dom'
import Header from './components/Header/Header.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contacts from './pages/Contacts.jsx'
import Giudizio from './pages/Giudizio.jsx'
import Morte from './pages/Morte.jsx'
import Sfilata from './pages/Sfilata.jsx'
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
          <Route path='/Tempio' element={<Tempio />} />
          <Route path='/EcoLuminoso' element={<EcoLuminoso />} />
          <Route path='/Giudizio' element={<Giudizio />} />
          <Route path='/Morte' element={<Morte />} />
          <Route path='/Sfilata' element={<Sfilata />} />
          <Route path='/Archive' element={<Archive />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contacts' element={<Contacts />} />
          <Route path='*' element={<NoPage />} />
        </Routes>
      <Footer />
    </div>
  )
}

export default App