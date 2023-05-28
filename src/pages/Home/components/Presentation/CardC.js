import { useContext, useEffect, useState } from 'react'
import './CardC.css'
import LanguageContext from '../../../../context/languageContext'

const CardA = () => {
  const {language} = useContext (LanguageContext)
  const [lang, setLang] = useState()  

  useEffect(() => {
    setLang(language)    
  }, [language])

  return (
    <div className='placaContainer'>
      <div className='placa'>        
        <div className='placaCircle04'><img src='https://upload.wikimedia.org/wikipedia/commons/7/76/1k_Dissolve_Noise_Texture.png' alt='placaC' className='circle4Img'/></div>
        <div className='placaCircle05'></div>
        { lang === 'esp' 
        ?
          <>
            <h1 className='mainH1'>De nada.</h1>
            <h3>Pero acá estamos nosotros<br/><span>para ayudarte</span>, de nada.</h3>
          </>
        :
          <>
            <h1 className='mainH1'>For nothing.</h1>
            <h3>But here we are<br/><span>to help you</span>, you're welcome.</h3>
          </>
        }
      <div className='gradientBGC'></div>
      </div>
    </div>
  )
}

export default CardA