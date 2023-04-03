import Animation from "../../../../components/Animation/Animation"


const CardA = ({handleCard, state}) => {
  return (
    <div 
        className={state === 'active' ? 'content active' : state === 'standby' ? 'content standby' : 'content cardOff'} 
        onMouseEnter={() => handleCard('A1')}
        onMouseLeave={() => handleCard('')}
        >
        <div className="card">
        <div className="card-content" style={{padding: '10% 10% 0%'}}>              
            <h4>Prevención y gestión de crisis.</h4>
            {state === 'active' ? <Animation animation='A9'/> : <div className="animationNull"></div>}            
        </div>
        </div>
        
        {state === 'active' && 
          <div className="auxCards auxA">  
            <p><span>TRANSFORMAMOS</span><br/>OPINIONES</p>      
            <p><span>CONTROLAMOS</span><br/>CONFLICTOS</p>      
            <p><span>CUIDAMOS</span><br/>LA IMÁGEN</p>      
          </div>    
        }        
    </div>
  )
}

export default CardA