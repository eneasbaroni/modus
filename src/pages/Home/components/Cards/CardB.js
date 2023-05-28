import { useContext, useEffect, useState } from "react";
import Animation from "../../../../components/Animation/Animation"
import useScreenSize from "../../../../hooks/useScreenSize";
import LanguageContext from "../../../../context/languageContext";


const CardB = ({handleCard, state}) => {
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
        document.querySelector('.auxB').children[1].classList.remove('defaseB') :
        document.querySelector('.auxB').children[1].classList.remove('defaseB') 
      }, 10);
      setTimeout(() => {
        /* auxCards second child, delete class */
        windowSize.width > 768 ?
        document.querySelector('.auxB').children[0].classList.remove('defaseB') :
        document.querySelector('.auxB').children[0].classList.remove('defaseB') 
      }, 800);       
    }   // eslint-disable-next-line
  }, [state])



  return (
    <div 
        className={state === 'active' ? 'content active' : state === 'standby' ? 'content standby' : 'content cardOff'} 
        onMouseEnter={() => handleCard('A2')}
        onMouseLeave={() => handleCard('')}
        >
        <div className="card">
        <div className="card-content" style={{padding: '10% 10% 0%'}}>  
            {lang === 'esp' ?            
              <h4>Atención al cliente en redes sociales.</h4>:
              <h4>Customer service on social networks.</h4>
            }
            {windowSize.width > 768 ? 
              state === 'active' 
                ? <Animation animation='A2'/> 
                : <div className="animationNull"></div>
              :<Animation animation='A2'/>} 
        </div>
        </div>

        {state === 'active' && 
        <div className={windowSize.width > 768 ? 'auxCards auxB' : 'auxCards auxB'}>  
          {lang === 'esp' ?
          <>
            <p className={windowSize.width > 768 ? 'defaseB' : 'defaseB'}><span>CONECTAR</span><br/>CON EL USUARIO</p>      
            <p className={windowSize.width > 768 ? 'defaseB' : 'defaseB'}><span>ESTAR PRESENTE Y ATENDER</span><br/><span className="pSmall"> A LAS NECESIDADES DEL CLIENTE</span></p>   
          </> :
          <>
            <p className={windowSize.width > 768 ? 'defaseB' : 'defaseB'}><span>CONNECT</span><br/>WITH THE USER</p>
            <p className={windowSize.width > 768 ? 'defaseB' : 'defaseB'}><span>BE PRESENT AND ATTEND</span><br/><span className="pSmall"> TO THE NEEDS OF THE CLIENT</span></p>
          </>}
        </div>    
        }              
    </div>
  )
}

export default CardB