import Animation from "../../../../components/Animation/Animation"


const CardE = ({handleCard, state}) => {
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
            {state === 'active' ? <Animation animation='A11'/> : <div className="animationNull"></div>}
        </div>
        </div>   

        {state === 'active' && 
        <div className="auxCards auxE">  
          <p><span>VELOCIDAD</span><br/>DE RESPUESTA</p>      
          <p>POSIBILIDAD DE <br/><span>AUTOGESTIÓN</span></p>      
          <p>BRINDAMOS<span> INFORMACIÓN CONCRETA</span> EN POCOS SEGUNDOS</p>      
        </div>    
        }           
    </div>
  )
}

export default CardE