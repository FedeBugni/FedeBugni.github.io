import React from 'react'
import './Set_Design.css'
import foto from '../../assets/foto_mancante.jpg'

const Set_Design = () => {
  return (
    <div className='designs'>
      
      <div className="design">
        <img src={foto} alt="" />
      </div>

      <div className="design">
        <img src={foto} alt="" />
      </div>

      <div className="design">
        <img src={foto} alt="" /> 
      </div>

    </div>
  )
}

export default Set_Design