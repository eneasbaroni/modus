import { useEffect } from "react"
import Animation from "../../../../components/Animation/Animation"
import useScreenSize from "../../../../hooks/useScreenSize"


const CardA = ({handleCard, state}) => {  
  const windowSize = useScreenSize()

  useEffect(() => {
    if(state === 'active'){      
      setTimeout(() => {
        /* auxCards first child, delete class */
        document.querySelector('.auxA').children[0].classList.remove('defaseA')
      }, 10);
      setTimeout(() => {
        /* auxCards second child, delete class */
        document.querySelector('.auxA').children[1].classList.remove('defaseA')
      }, 800);
      setTimeout(() => {
        /* auxCards third child, delete class */
        document.querySelector('.auxA').children[2].classList.remove('defaseA')
      }, 1600);
    }   
  }, [state]) 


  return (
    <div       
        className={state === 'active' ? 'content active' : state === 'standby' ? 'content standby' : 'content cardOff'} 
        onMouseEnter={() => handleCard('A1')}
        onMouseLeave={() => handleCard('')}
        >
        <div className="card">
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
          <div className="auxCards auxA">  
            <p className="defaseA"><span>TRANSFORMAMOS</span><br/>OPINIONES</p>      
            <p className="defaseA"><span>CONTROLAMOS</span><br/>CONFLICTOS</p>      
            <p className="defaseA"><span>CUIDAMOS</span><br/>LA IMÁGEN</p>      
          </div>    
        }         
    </div>
  )
}

export default CardA