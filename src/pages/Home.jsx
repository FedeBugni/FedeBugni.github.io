import React from 'react'
import Hero from '../components/Hero/Hero'
import Title from '../components/Title/Title'
import Art_Direction from '../components/Art_Direction/Art_Direction'
import Set_Design from '../components/Set_Design/Set_Design'
import '../index.css'

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="container">
        <Title title='ART DIRECTION'/>
        <Art_Direction />
        <Title title='SET DESIGN'/>
        <Set_Design />
      </div>
    </div>
  )
}

export default Home
