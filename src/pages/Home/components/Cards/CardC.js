import Animation from "../../../../components/Animation/Animation"


const CardC = ({handleCard, state}) => {
  return (
    <div 
        className={state === 'active' ? 'content active' : state === 'standby' ? 'content standby' : 'content cardOff'} 
        onMouseEnter={() => handleCard('A3')}
        onMouseLeave={() => handleCard('')}
        >
        <div className="card">
        <div className="card-content" style={{padding: '10% 10% 0%'}}>              
            <h4>Gestión de reclamos.</h4> 
            {state === 'active' ? <Animation animation='A11'/> : <div className="animationNull"></div>}
        </div>
        </div> 

        {state === 'active' && 
        <div className="auxCards auxC">  
          <p><span>ATENCIÓN 1:1</span><br/>PERSONALIZADA</p>      
          <p><span>ENTENDEMOS</span><br/><span className="pSmall"> EMPATIZAMOS Y RESOLVEMOS</span></p>                     
        </div>    
        }             
    </div>
  )
}

export default CardC