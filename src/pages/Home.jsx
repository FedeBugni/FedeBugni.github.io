import Hero from '../components/Hero/Hero'
import Title from '../components/Title/Title'
import Art_Direction from '../components/Art_Direction/Art_Direction'
import Set_Design from '../components/Set_Design/Set_Design'

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="home-container">
        <Hero />
        <Title title='ART DIRECTION'/>
        <Art_Direction />
        <Title title='SET DESIGN'/>
        <Set_Design />
      </div>
    </div>
  )
}

export default Home
