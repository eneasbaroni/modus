import { useContext, useEffect, useState } from 'react'
import './CardE.css'
import LanguageContext from '../../../../context/languageContext'
import useScreenSize from '../../../../hooks/useScreenSize'

const CardE = () => {
  const windowSize = useScreenSize()

  const {language} = useContext (LanguageContext)
  const [lang, setLang] = useState()  

  useEffect(() => {
    setLang(language)    
  }, [language])

  
    


  return (
    <div className='placaContainer'>
      <div className='placa placaE'>
        {lang === 'esp' ?
          windowSize.width > 768 ?          
            <h1><span>Moderación de<br/>redes sociales</span></h1>:
            <h1><span>Moderación<br/>de redes<br/>sociales</span></h1>:            

          windowSize.width > 768 ?
            <h1><span>Moderation of<br/>social networks</span></h1>:  
            <h1><span>Moderation<br/>of social<br/>networks</span></h1>           
                    
        }
        <div className='bigArrowContainer'>
          <div className='bigArrowA'></div>
          <div className='bigArrowB'></div>
          {/* <img src='./images/main/BigArrow.svg' alt='arrow' className='bigArrow'/>   */}        
        </div>
        {/* <div id='placaB'></div> */}
      </div>
    </div>
  )
}

export default CardE