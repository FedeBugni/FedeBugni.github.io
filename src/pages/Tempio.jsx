import './Pagine.css'
import foto1 from "../assets/SempoStudio-Tempio-01.png";
import foto2 from "../assets/SempoStudio-Tempio-02.png";
import foto3 from "../assets/SempoStudio-Tempio-03.png";
import foto4 from "../assets/SempoStudio-Tempio-04.png";

const tempio = () => {
  return (
    <div className="tempio_container">
        <div className="title">
            <p>Tempio / Cascina Cappuccina - Melegnano</p>
        </div>
        <div className='foto_singola'>
            <img src={foto1} alt="" />
        </div>

        <div className='testo'>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
        </div>

        <div className='foto_singola'>
            <img src={foto2} alt="" />
        </div>

        <div className='foto_doppie'>
            <img src={foto3} alt="" />
            <img src={foto4} alt="" />
        </div>
    </div>
  )
}

export default tempio
