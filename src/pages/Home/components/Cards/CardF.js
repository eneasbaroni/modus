import { useEffect } from "react";
import Animation from "../../../../components/Animation/Animation"
import useScreenSize from "../../../../hooks/useScreenSize";


const CardF = ({handleCard, state}) => {
  const windowSize = useScreenSize()

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
            <p>Programas de </p>           
            <h4>fidelización y retención.</h4>
            {windowSize.width > 768 ? 
              state === 'active' 
                ? <Animation animation='A12'/> 
                : <div className="animationNull"></div>
              :<Animation animation='A12'/>} 
        </div>
        </div>   

        {state === 'active' && 
        <div className={windowSize.width > 768 ? 'auxCards auxC' : 'auxCards auxE'}>  
          <p className={windowSize.width > 768 ? 'defaseC' : 'defaseE'}><span>CREAR</span><br/>LAZOS</p>      
          <p className={windowSize.width > 768 ? 'defaseC' : 'defaseE'}><span>FORMAR</span><br/>COMUNIDAD</p>    
          <p className={windowSize.width > 768 ? 'defaseC' : 'defaseE'}>GENERAR<span> PERTENENCIA E IDENTIDAD</span> CON LA MARCA</p>      
        </div>    
        }           
    </div>
  )
}

export default CardF