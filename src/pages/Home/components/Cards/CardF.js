import { useEffect } from "react";
import Animation from "../../../../components/Animation/Animation"


const CardF = ({handleCard, state}) => {

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
      setTimeout(() => {
        /* auxCards third child, delete class */
        document.querySelector('.auxC').children[2].classList.remove('defaseC')
      }, 1600);
    }   
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
            {state === 'active' ? <Animation animation='A12'/> : <div className="animationNull"></div>} 
        </div>
        </div>   

        {state === 'active' && 
        <div className="auxCards auxC">  
          <p className="defaseC"><span>CREAR</span><br/>LAZOS</p>      
          <p className="defaseC"><span>FORMAR</span><br/>COMUNIDAD</p>    
          <p className="defaseC">GENERAR<span> PERTENENCIA E IDENTIDAD</span> CON LA MARCA</p>      
        </div>    
        }           
    </div>
  )
}

export default CardF