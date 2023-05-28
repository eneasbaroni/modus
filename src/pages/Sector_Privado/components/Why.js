import { useContext, useEffect, useState } from 'react'
import LanguageContext from '../../../context/languageContext'
import './Why.css'

const Why = () => {
  const {language} = useContext (LanguageContext)
  const [lang, setLang] = useState()  

  useEffect(() => {
    setLang(language)    
  }, [language])

  return (
    <section id='why'>
      {lang === 'esp' ?
        <div className='whyContainer'>
          <h2>Ayudamos a escalar tu proceso comercial</h2>
          <h3>conectando con tus clientes.</h3>
          <div className='whyInfo'>
            <img src='./images/sector_privado/why-01.png' alt='why1' />
            <p>Nos integramos con las tecnologías de tu empresa.</p>
            <img src='./images/sector_privado/why-02.png' alt='why1' />
            <p>Generamos reportes inteligentes que te permitirán optimizar tu atención.</p>
            <img src='./images/sector_privado/why-03.png' alt='why1' />
            <p>Realizamos atención 1 a 1 con personal altamente capacitado.</p>
          </div>
        </div>:

        <div className='whyContainer'>
          <h2>We help you scale your sales process</h2>
          <h3>by connecting with your customers.</h3>
          <div className='whyInfo'>
            <img src='./images/sector_privado/why-01.png' alt='why1' />
            <p>We integrate with your company's technologies.</p>
            <img src='./images/sector_privado/why-02.png' alt='why1' />
            <p>We generate intelligent reports that will allow you to optimize your attention.</p>
            <img src='./images/sector_privado/why-03.png' alt='why1' />
            <p>We carry out 1 to 1 attention with highly trained personnel.</p>
          </div>
        </div>
      }

    </section>
  )
}

export default Why
