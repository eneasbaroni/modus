import { useEffect, useState } from "react"
import Animation from "../../../../components/Animation/Animation"
import useScreenSize from "../../../../hooks/useScreenSize"
import Pulse from "../../../../components/Pulse/Pulse"


const CardA = ({handleCard, state}) => {  
  const windowSize = useScreenSize()
  const [pulseActive, setPulseActive] = useState(true)

  useEffect(() => {
    if(state === 'active'){      
      setTimeout(() => {
        /* auxCards first child, delete class */
        windowSize.width > 768 ?
        document.querySelector('.auxA').children[0].classList.remove('defaseA'):
        document.querySelector('.auxB-A').children[2].classList.remove('defaseB-A')
      }, 10);
      setTimeout(() => {
        /* auxCards second child, delete class */
        windowSize.width > 768 ?
        document.querySelector('.auxA').children[1].classList.remove('defaseA'):
        document.querySelector('.auxB-A').children[1].classList.remove('defaseB-A')
      }, 800);
      setTimeout(() => {
        /* auxCards third child, delete class */
        windowSize.width > 768 ?
        document.querySelector('.auxA').children[2].classList.remove('defaseA'):
        document.querySelector('.auxB-A').children[0].classList.remove('defaseB-A')
      }, 1600);
    }   // eslint-disable-next-line
  }, [state]) 

  const handlePulse = () => {
    setPulseActive(false)
    handleCard('A1')
  }

  return (
    <div       
        className={state === 'active' ? 'content active' : state === 'standby' ? 'content standby' : 'content cardOff'} 
        onMouseEnter={() => handleCard('A1')}
        onMouseLeave={() => handleCard('')}
        >
        <div className="card">
        {windowSize.width < 768 && pulseActive && <Pulse foo = {handlePulse}/>}
        <div className="card-content" style={{padding: '10% 10% 0%'}}>              
            <h4>Prevención y gestión de crisis.</h4>
            {windowSize.width > 768 ? 
              state === 'active' 
                ? <Animation animation='A9'/> 
                : <div className="animationNull"></div>
              :<Animation animation='A9'/>}            
        </div>
        </div>
        
        {state === 'active' && 
          <div className={windowSize.width > 768 ? 'auxCards auxA' : 'auxCards auxB-A'}>  
            <p className={windowSize.width > 768 ? 'defaseA' : 'defaseB-A'}><span>TRANSFORMAMOS</span><br/>OPINIONES</p>      
            <p className={windowSize.width > 768 ? 'defaseA' : 'defaseB-A'}><span>CONTROLAMOS</span><br/>CONFLICTOS</p>      
            <p className={windowSize.width > 768 ? 'defaseA' : 'defaseB-A'}><span>CUIDAMOS</span><br/>LA IMÁGEN</p>      
          </div>    
        }         
    </div>
  )
}

export default CardA