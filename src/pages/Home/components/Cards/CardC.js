import { useEffect } from "react";
import Animation from "../../../../components/Animation/Animation"
import useScreenSize from "../../../../hooks/useScreenSize";


const CardC = ({handleCard, state}) => {
  const windowSize = useScreenSize()

  useEffect(() => {
    if(state === 'active'){      
      setTimeout(() => {
        /* auxCards first child, delete class */
        document.querySelector('.auxC').children[0].classList.remove('defaseC')
      }, 10);
      setTimeout(() => {
        /* auxCards second child, delete class */
        document.querySelector('.auxC').children[1].classList.remove('defaseC')
      }, 800);       
    }   
  }, [state])


  return (
    <div 
        className={state === 'active' ? 'content active' : state === 'standby' ? 'content standby' : 'content cardOff'} 
        onMouseEnter={() => handleCard('A3')}
        onMouseLeave={() => handleCard('')}
        >
        <div className="card">
        <div className="card-content" style={{padding: '10% 10% 0%'}}>              
            <h4>Gestión de reclamos.</h4> 
            {windowSize.width > 768 ? 
              state === 'active' 
                ? <Animation animation='A11'/> 
                : <div className="animationNull"></div>
              :<Animation animation='A11'/>} 
        </div>
        </div> 

        {state === 'active' && 
        <div className="auxCards auxC">  
          <p className="defaseC"><span>ATENCIÓN 1:1</span><br/>PERSONALIZADA</p>      
          <p className="defaseC"><span>ENTENDEMOS</span><br/><span className="pSmall"> EMPATIZAMOS Y RESOLVEMOS</span></p>                     
        </div>    
        }             
    </div>
  )
}

export default CardC