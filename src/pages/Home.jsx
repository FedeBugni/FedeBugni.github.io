import Hero from '../components/Hero/Hero'
import Opere from '../components/Opere/Opere.jsx'

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="home-container">
        <Opere />
      </div>
    </div>
  )
}

export default Home
