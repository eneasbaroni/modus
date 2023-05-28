import { useContext, useEffect, useState } from "react";
import Animation from "../../../../components/Animation/Animation"
import useScreenSize from "../../../../hooks/useScreenSize";
import LanguageContext from "../../../../context/languageContext";


const CardE = ({handleCard, state}) => {
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
        document.querySelector('.auxE').children[0].classList.remove('defaseE'):
        document.querySelector('.auxB-D').children[2].classList.remove('defaseB-D')
      }, 10);
      setTimeout(() => {
        /* auxCards second child, delete class */
        windowSize.width > 768 ?
        document.querySelector('.auxE').children[1].classList.remove('defaseE'):
        document.querySelector('.auxB-D').children[1].classList.remove('defaseB-D')
      }, 800);
      setTimeout(() => {
        /* auxCards third child, delete class */
        windowSize.width > 768 ?
        document.querySelector('.auxE').children[2].classList.remove('defaseE'):
        document.querySelector('.auxB-D').children[0].classList.remove('defaseB-D')
      }, 1600);
    }   // eslint-disable-next-line 
  }, [state])

  return (
    <div 
        className={state === 'active' ? 'content active' : state === 'standby' ? 'content standby' : 'content cardOff'} 
        onMouseEnter={() => handleCard('A5')}
        onMouseLeave={() => handleCard('')}
        >
        <div className="card">
        <div className="card-content" style={{padding: '10% 10% 0%'}}> 
            {lang === 'esp' ?
              <>
                <h4>Automatizamos respuestas</h4> 
                <p>con chatbot.</p>
              </>:
              <>
                <h4>We automate answers</h4>
                <p>with chatbot.</p>
              </>           
            }
            {windowSize.width > 768 ? 
              state === 'active' 
                ? <Animation animation='A11'/> 
                : <div className="animationNull"></div>
              :<Animation animation='A11'/>} 
        </div>
        </div>   

        {state === 'active' && 
        <div className={windowSize.width > 768 ? 'auxCards auxE' : 'auxCards auxB-D'}>  
          {lang === 'esp' ?
          <>
            <p className={windowSize.width > 768 ? 'defaseE' : 'defaseB-D'}><span>VELOCIDAD</span><br/>DE RESPUESTA</p>      
            <p className={windowSize.width > 768 ? 'defaseE' : 'defaseB-D'}>POSIBILIDAD DE <br/><span>AUTOGESTIÓN</span></p>      
            <p className={windowSize.width > 768 ? 'defaseE' : 'defaseB-D'}>BRINDAMOS<span> INFORMACIÓN CONCRETA</span> EN POCOS SEGUNDOS</p>      
          </>:
          <>
            <p className={windowSize.width > 768 ? 'defaseE' : 'defaseB-D'}><span>SPEED</span><br/>OF RESPONSE</p>
            <p className={windowSize.width > 768 ? 'defaseE' : 'defaseB-D'}>POSSIBILITY OF <br/><span>SELF-MANAGEMENT</span></p>
            <p className={windowSize.width > 768 ? 'defaseE' : 'defaseB-D'}>WE PROVIDE<span> CONCRETE INFORMATION</span> IN A FEW SECONDS</p>
          </>}
        </div>    
        }           
    </div>
  )
}

export default CardE