import { useEffect } from "react";
import Animation from "../../../../components/Animation/Animation"
import useScreenSize from "../../../../hooks/useScreenSize";


const CardE = ({handleCard, state}) => {
  const windowSize = useScreenSize()

  useEffect(() => {
    if(state === 'active'){      
      setTimeout(() => {
        /* auxCards first child, delete class */
        document.querySelector('.auxE').children[0].classList.remove('defaseE')
      }, 10);
      setTimeout(() => {
        /* auxCards second child, delete class */
        document.querySelector('.auxE').children[1].classList.remove('defaseE')
      }, 800);
      setTimeout(() => {
        /* auxCards third child, delete class */
        document.querySelector('.auxE').children[2].classList.remove('defaseE')
      }, 1600);
    }   
  }, [state])

  return (
    <div 
        className={state === 'active' ? 'content active' : state === 'standby' ? 'content standby' : 'content cardOff'} 
        onMouseEnter={() => handleCard('A5')}
        onMouseLeave={() => handleCard('')}
        >
        <div className="card">
        <div className="card-content" style={{padding: '10% 10% 0%'}}>              
            <h4>Automatizamos respuestas</h4> 
            <p>con chatbot.</p>
            {windowSize.width > 768 ? 
              state === 'active' 
                ? <Animation animation='A11'/> 
                : <div className="animationNull"></div>
              :<Animation animation='A11'/>} 
        </div>
        </div>   

        {state === 'active' && 
        <div className="auxCards auxE">  
          <p className="defaseE"><span>VELOCIDAD</span><br/>DE RESPUESTA</p>      
          <p className="defaseE">POSIBILIDAD DE <br/><span>AUTOGESTIÓN</span></p>      
          <p className="defaseE">BRINDAMOS<span> INFORMACIÓN CONCRETA</span> EN POCOS SEGUNDOS</p>      
        </div>    
        }           
    </div>
  )
}

export default CardE