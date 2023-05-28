import { useContext, useEffect, useState } from "react";
import Animation from "../../../../components/Animation/Animation"
import useScreenSize from "../../../../hooks/useScreenSize";
import LanguageContext from "../../../../context/languageContext";


const CardC = ({handleCard, state}) => {
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
        document.querySelector('.auxB').children[1].classList.remove('defaseB')
      }, 10);
      setTimeout(() => {
        /* auxCards second child, delete class */
        windowSize.width > 768 ?
        document.querySelector('.auxC').children[1].classList.remove('defaseC'):
        document.querySelector('.auxB').children[0].classList.remove('defaseB')
      }, 800);       
    }   // eslint-disable-next-line
  }, [state])


  return (
    <div 
        className={state === 'active' ? 'content active' : state === 'standby' ? 'content standby' : 'content cardOff'} 
        onMouseEnter={() => handleCard('A3')}
        onMouseLeave={() => handleCard('')}
        >
        <div className="card">
        <div className="card-content" style={{padding: '10% 10% 0%'}}> 
            {lang === 'esp' ?
              <h4>Gestión de reclamos.</h4> :
              <h4>Claims management.</h4>
            }
            {windowSize.width > 768 ? 
              state === 'active' 
                ? <Animation animation='A13'/> 
                : <div className="animationNull"></div>
              :<Animation animation='A13'/>} 
        </div>
        </div> 

        {state === 'active' && 
        <div className={windowSize.width > 768 ? 'auxCards auxC' : 'auxCards auxB'}>  
          {lang === 'esp' ?
          <>
            <p className={windowSize.width > 768 ? 'defaseC' : 'defaseB'}><span>ATENCIÓN 1:1</span><br/>PERSONALIZADA</p>      
            <p className={windowSize.width > 768 ? 'defaseC' : 'defaseB'}><span>ENTENDEMOS</span><br/><span className="pSmall"> EMPATIZAMOS Y RESOLVEMOS</span></p>                     
          </>:
          <>
            <p className={windowSize.width > 768 ? 'defaseC' : 'defaseB'}>PERSONALIZED<br/><span>1:1 ATTENTION</span></p>
            <p className={windowSize.width > 768 ? 'defaseC' : 'defaseB'}><span>WE UNDERSTAND</span><br/><span className="pSmall"> WE EMPATHIZE AND SOLVE</span></p>
          </>}
        </div>    
        }             
    </div>
  )
}

export default CardC
