import './Art_Direction.css'
import foto from '../../assets/foto_mancante.jpg'

const Art_Direction = () => {
  return (
    <div className='arts'>
      <div className="art">
        <img src={foto} alt="" />
      </div>

      <div className="art">
        <img src={foto} alt="" />
      </div>

      <div className="art">
        <img src={foto} alt="" /> 
      </div>
    </div>
  )
}

export default Art_Direction