import { useEffect } from "react";
import Animation from "../../../../components/Animation/Animation"
import useScreenSize from "../../../../hooks/useScreenSize";


const CardC = ({handleCard, state}) => {
  const windowSize = useScreenSize()

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
            <h4>Gestión de reclamos.</h4> 
            {windowSize.width > 768 ? 
              state === 'active' 
                ? <Animation animation='A13'/> 
                : <div className="animationNull"></div>
              :<Animation animation='A13'/>} 
        </div>
        </div> 

        {state === 'active' && 
        <div className={windowSize.width > 768 ? 'auxCards auxC' : 'auxCards auxB'}>  
          <p className={windowSize.width > 768 ? 'defaseC' : 'defaseB'}><span>ATENCIÓN 1:1</span><br/>PERSONALIZADA</p>      
          <p className={windowSize.width > 768 ? 'defaseC' : 'defaseB'}><span>ENTENDEMOS</span><br/><span className="pSmall"> EMPATIZAMOS Y RESOLVEMOS</span></p>                     
        </div>    
        }             
    </div>
  )
}

export default CardC
