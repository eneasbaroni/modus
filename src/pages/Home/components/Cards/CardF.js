import Animation from "../../../../components/Animation/Animation"


const CardF = ({handleCard, state}) => {
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
          <p><span>CREAR</span><br/>LAZOS</p>      
          <p><span>FORMAR</span><br/>COMUNIDAD</p>    
          <p>GENERAR<span> PERTENENCIA E IDENTIDAD</span> CON LA MARCA</p>      
        </div>    
        }           
    </div>
  )
}

export default CardF