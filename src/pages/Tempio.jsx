import tempio1 from '../assets/SempoStudio-Tempio-01.png'
import tempio2 from '../assets/SempoStudio-Tempio-02.png'
import tempio3 from '../assets/SempoStudio-Tempio-03.png'

const tempio = () => {
  return (
    <div className='container'>
        <div className='testo'>
            <div className='titolo'>
                <h2>Tempio</h2>
                <p>Cascina Cappuccina - Melegnano</p>
            </div>
            <div className='descrizione'>
                <p>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                </p>
            </div>
        </div>
        <div className='img1'>
            <img src={tempio1} alt='tempio'/>
        </div>
        <div className='img2'>
            <div>
                <img src={tempio2} alt='tempio'/>
            </div>
            <div>
                <img src={tempio3} alt='tempio'/>
            </div>
        </div>
    </div>
  )
}

export default tempio