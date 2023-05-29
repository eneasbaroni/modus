import { useContext, useEffect, useState } from 'react'
import LanguageContext from '../../../../context/languageContext'
import './CardD.css'

const CardD = () => {
  const {language} = useContext (LanguageContext)
  const [lang, setLang] = useState()  

  useEffect(() => {
    setLang(language)    
  }, [language])

  return (
    <div className='placaContainer'>
      <div className='placa'>
        {lang === 'esp' ?
          <h1>¿De qué sirve<br/>generar contenido<br/><span>si no vas a interactuar?</span></h1>:
          <h1>What's the point<br/>of generating content<br/><span className='spanA'>if you're not going<br/>to interact?</span></h1>      
        }

        <div className='placaCircle03'></div>
        <div className='placaCircle02'></div>
        <div className='placaCircle01'></div> 
        <div className='gradientBGD'></div>

      </div>
    </div>
  )
}

export default CardD