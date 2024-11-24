import React from 'react'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import Footer from './Components/Footer/Footer'
import Title from './Components/Title/Title'
import Art_Direction from './Components/Art_Direction/Art_Direction'
import Set_Design from './Components/Set_Design/Set_Design'

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <div className="container">
        <Title title='ART DIRECTION'/>
        <Art_Direction />
        <Title title='SET DESIGN'/>
        <Set_Design />
      </div>
      <Footer />
    </div>
  )
}

export default App
