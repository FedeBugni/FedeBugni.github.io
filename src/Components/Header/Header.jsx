import React, { useEffect, useState } from 'react'
import './Header.css'
import logo from '../../assets/logo.png'


const Header = () => {
  return (
    <header className='container'>
        <img src={logo} alt="" className='logo'/>
        <ul>
          <li>Art Direction</li>
          <li>Set Design</li>
          <li>Projects</li>
          <li>Installation</li>
          <li>Teste D'Idra</li>
          <li>Exhibition</li>
          <li>Archive</li>
          <li>Contacts</li>
          <li>About us</li>
        </ul>
    </header>
  )
}

export default Header
