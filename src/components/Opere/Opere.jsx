import './Opere.css'
import tempio from '../../assets/SempoStudio-Tempio-01.png'
import eco from '../../assets/SempoStudio-ECO_LUMINOSO-01.jpeg'
import giudizio from '../../assets/SempoStudio-Giudizio-ArtDate 01.jpg'
import morte from '../../assets/Lavorare con la morte è difficile.png'
import sfilata from '../../assets/SempoStudio-Sfilata-Briup.jpg'
import { Link } from 'react-router-dom'

const Opere = () => {
  const opere = [
    {
      immagine: tempio,
      titolo: "Il Tempio",
      sottotitolo: "Cascina Cappuccina",
      link: "/tempio"
    },
    {
      immagine: eco,
      titolo: "Eco Luminoso",
      sottotitolo: "Otolab",
      link: "/eco-luminoso"
    },
    {
      immagine: giudizio,
      titolo: "Il Giudizio",
      sottotitolo: "?",
      link: "/giudizio"
    },
    {
      immagine: morte,
      titolo: "Lavorare con la Morte è difficile",
      sottotitolo: "?",
      link: "/morte"
    },
    {
      immagine: sfilata,
      titolo: "Sfilata Briup",
      sottotitolo: "?",
      link: "/sfilata"
    }
  ]

  return (
    <div className='arts'>
      {opere.map((opera, index) => (
        <Link to={opera.link} key={index} className="art">
          <div className="art-content">
            <div className="art-text">
              <h2 className="art-title">{opera.titolo}</h2>
              <p className="art-subtitle">{opera.sottotitolo}</p>
            </div>
            <img src={opera.immagine} alt={opera.titolo} />
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Opere