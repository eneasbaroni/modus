import { useEffect } from "react";
import Animation from "../../../../components/Animation/Animation"
import useScreenSize from "../../../../hooks/useScreenSize";


const CardA = ({handleCard, state}) => {
  const windowSize = useScreenSize()

  useEffect(() => {
    if(state === 'active'){      
      setTimeout(() => {
        /* auxCards first child, delete class */
        windowSize.width > 768 ?
        document.querySelector('.auxA').children[0].classList.remove('defaseA'):
        document.querySelector('.auxB-D').children[2].classList.remove('defaseB-D')
      }, 10);
      setTimeout(() => {
        /* auxCards second child, delete class */
        windowSize.width > 768 ?
        document.querySelector('.auxA').children[1].classList.remove('defaseA'):
        document.querySelector('.auxB-D').children[1].classList.remove('defaseB-D')
      }, 800);
      setTimeout(() => {
        /* auxCards third child, delete class */
        windowSize.width > 768 ?
        document.querySelector('.auxA').children[2].classList.remove('defaseA'):
        document.querySelector('.auxB-D').children[0].classList.remove('defaseB-D')
      }, 1600);
    }  // eslint-disable-next-line 
  }, [state]) 

  return (
    <div 
        className={state === 'active' ? 'content active' : state === 'standby' ? 'content standby' : 'content cardOff'} 
        onMouseEnter={() => handleCard('A4')}
        onMouseLeave={() => handleCard('')}
        >
        <div className="card">
        <div className="card-content" style={{padding: '10% 10% 0%'}}>              
            <h4>Campañas de lanzamiento</h4> 
            <p>de producto y electorales.</p>
            {windowSize.width > 768 ? 
              state === 'active' 
                ? <Animation animation='A10'/> 
                : <div className="animationNull"></div>
              :<Animation animation='A10'/>} 
        </div>
        </div> 

        {state === 'active' && 
        <div className={windowSize.width > 768 ? 'auxCards auxA' : 'auxCards auxB-D'}>  
          <p className={windowSize.width > 768 ? 'defaseA' : 'defaseB-D'}>LISTOS PARA<br/><span>GRANDES EVENTOS</span></p>      
          <p className={windowSize.width > 768 ? 'defaseA' : 'defaseB-D'}><span>APORTAMOS VALOR<br/>PERSONAL</span> A LAS RESPUESTAS MASIVAS</p>      
          <p className={windowSize.width > 768 ? 'defaseA' : 'defaseB-D'}><span>RESPONDEMOS</span><br/><h5 className="pSmall"> A TODOS CON CORRECCIÓN Y CALIDAD</h5></p>      
        </div>    
        }             
    </div>
  )
}

export default CardA