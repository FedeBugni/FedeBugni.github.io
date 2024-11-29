import React, { useEffect, useState } from 'react'
import './Header.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='container'>
        <Link to='/'><img src={logo} alt="" className='logo'/></Link>
        <ul>
          <Link to='/artDirection'><li>Art Direction</li></Link>
          <Link to='/setDesign'><li>Set Design</li></Link>
          <Link to='/projects'><li>Projects</li></Link>
          <Link to='/installation'><li>Installation</li></Link>
          <Link to='/testeIdra'><li>Teste D'Idra</li></Link>
          <Link to='/exhibition'><li>Exhibition</li></Link>
          <Link to='/archive'><li>Archive</li></Link>
          <Link to='/contacts'><li>Contacts</li></Link>
          <Link to='/about'><li>About us</li></Link>
        </ul>
    </header>
  )
}

export default Header
