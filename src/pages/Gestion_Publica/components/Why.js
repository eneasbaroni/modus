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
          <h2>¿Por qué Modus?</h2>
          <h3>Porque somos especialistas.</h3>
          <div className='whyInfo'>
            <img src='./images/gestion_publica/why-01.svg ' alt='why1' />
            <p>Estamos preparados para contener situaciones conflictivas y evitar escalamiento.</p>
            <img src='./images/gestion_publica/why-02.svg ' alt='why1' />
            <p>Mantenemos tu buena imagen de forma profesional y dedicada.</p>
          </div>
        </div> :
        <div className='whyContainer'>
          <h2>Why Modus?</h2>
          <h3>Because we are specialists.</h3>
          <div className='whyInfo'>
            <img src='./images/gestion_publica/why-01.svg ' alt='why1' />
            <p>We are prepared to contain conflictive situations and avoid escalation.</p>
            <img src='./images/gestion_publica/why-02.svg ' alt='why1' />
            <p>We maintain your good image in a professional and dedicated way.</p>
          </div>
        </div>
      }
    </section>
  )
}

export default Why
