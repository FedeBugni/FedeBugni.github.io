import { Routes, Route  } from 'react-router-dom'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Giudizio from './pages/Giudizio.jsx'
import FashionShow from './pages/FashionShow.jsx'
import TesteIdra from './pages/TesteIdra.jsx'
import Fontana from './pages/Fontana.jsx'
import LavorareMorte from './pages/LavorareMorte.jsx'
import EcoLuminoso from './pages/EcoLuminoso.jsx'
import NoPage from './pages/NoPage.jsx'
import Footer from './components/Footer/Footer.jsx'
import Sidebar from './components/Sidebar/Sidebar.jsx'
import Tempio from "./pages/Tempio.jsx";
import Home from "./pages/Home.jsx";

const App = () => {
  return (
    <div>
      <Sidebar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/tempio' element={<Tempio />} />
          <Route path='/setDesign' element={<EcoLuminoso />} />
          <Route path='/projects' element={<Giudizio />} />
          <Route path='/installation' element={<FashionShow />} />
          <Route path='/testeIdra' element={<TesteIdra />} />
          <Route path='/exhibition' element={<Fontana />} />
          <Route path='/archive' element={<LavorareMorte />} />
          <Route path='/about' element={<About />} />
          <Route path='/contacts' element={<Contact />} />
          <Route path='*' element={<NoPage />} />
        </Routes>
      <Footer />
    </div>
  )
}

export default App