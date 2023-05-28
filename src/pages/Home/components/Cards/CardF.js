import { useContext, useEffect, useState } from "react";
import Animation from "../../../../components/Animation/Animation"
import useScreenSize from "../../../../hooks/useScreenSize";
import LanguageContext from "../../../../context/languageContext";


const CardF = ({handleCard, state}) => {
  const windowSize = useScreenSize()
  const {language} = useContext (LanguageContext)
  const [lang, setLang] = useState()  

  useEffect(() => {
    setLang(language)    
  }, [language])

  useEffect(() => {
    if(state === 'active'){      
      setTimeout(() => {
        /* auxCards first child, delete class */
        windowSize.width > 768 ?
        document.querySelector('.auxC').children[0].classList.remove('defaseC'):
        document.querySelector('.auxE').children[0].classList.remove('defaseE')
      }, 10);
      setTimeout(() => {
        /* auxCards second child, delete class */
        windowSize.width > 768 ?
        document.querySelector('.auxC').children[1].classList.remove('defaseC'):
        document.querySelector('.auxE').children[1].classList.remove('defaseE')
      }, 800);
      setTimeout(() => {
        /* auxCards third child, delete class */
        windowSize.width > 768 ?
        document.querySelector('.auxC').children[2].classList.remove('defaseC'):
        document.querySelector('.auxE').children[2].classList.remove('defaseE')
      }, 1600);
    }   // eslint-disable-next-line 
  }, [state])

  return (
    <div 
        className={state === 'active' ? 'content active' : state === 'standby' ? 'content standby' : 'content cardOff'} 
        onMouseEnter={() => handleCard('A6')}
        onMouseLeave={() => handleCard('')}
        >
        <div className="card">
        <div className="card-content" style={{padding: '10% 10% 0%'}}>       
            {lang === 'esp' ?
              <>
                <p>Programas de </p>           
                <h4>fidelización y retención.</h4>
              </>:
              <>
                <h4>Loyalty and retention</h4>
                <p>programs.</p>
              </>       
            }
            {windowSize.width > 768 ? 
              state === 'active' 
                ? <Animation animation='A12'/> 
                : <div className="animationNull"></div>
              :<Animation animation='A12'/>} 
        </div>
        </div>   

        {state === 'active' && 
        <div className={windowSize.width > 768 ? 'auxCards auxC' : 'auxCards auxE'}>  
          {lang === 'esp' ?
          <>
            <p className={windowSize.width > 768 ? 'defaseC' : 'defaseE'}><span>CREAR</span><br/>LAZOS</p>      
            <p className={windowSize.width > 768 ? 'defaseC' : 'defaseE'}><span>FORMAR</span><br/>COMUNIDAD</p>    
            <p className={windowSize.width > 768 ? 'defaseC' : 'defaseE'}>GENERAR<span> PERTENENCIA E IDENTIDAD</span> CON LA MARCA</p>      
          </>:
          <>
            <p className={windowSize.width > 768 ? 'defaseC' : 'defaseE'}><span>CREATE</span><br/>BONDS</p>
            <p className={windowSize.width > 768 ? 'defaseC' : 'defaseE'}><span>FORM</span><br/>COMMUNITY</p>
            <p className={windowSize.width > 768 ? 'defaseC' : 'defaseE'}>GENERATE<span> BELONGING AND IDENTITY</span> WITH THE BRAND</p>
          </>}
        </div>    
        }           
    </div>
  )
}

export default CardF