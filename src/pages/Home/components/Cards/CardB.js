import { useEffect } from "react";
import Animation from "../../../../components/Animation/Animation"


const CardB = ({handleCard, state}) => {

  useEffect(() => {
    if(state === 'active'){      
      setTimeout(() => {
        /* auxCards first child, delete class */
        document.querySelector('.auxB').children[1].classList.remove('defaseB')
      }, 10);
      setTimeout(() => {
        /* auxCards second child, delete class */
        document.querySelector('.auxB').children[0].classList.remove('defaseB')
      }, 800);       
    }   
  }, [state])



  return (
    <div 
        className={state === 'active' ? 'content active' : state === 'standby' ? 'content standby' : 'content cardOff'} 
        onMouseEnter={() => handleCard('A2')}
        onMouseLeave={() => handleCard('')}
        >
        <div className="card">
        <div className="card-content" style={{padding: '10% 10% 0%'}}>              
            <h4>Atención al cliente en redes sociales.</h4>
            {state === 'active' ? <Animation animation='A2'/> : <div className="animationNull"></div>}
        </div>
        </div>

        {state === 'active' && 
        <div className="auxCards auxB">  
          <p className="defaseB"><span>CONECTAR</span><br/>CON EL USUARIO</p>      
          <p className="defaseB"><span>ESTAR PRESENTE Y ATENDER</span><br/><span className="pSmall"> A LAS NECESIDADES DEL CLIENTE</span></p>   
        </div>    
        }              
    </div>
  )
}

export default CardB