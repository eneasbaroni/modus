import Animation from "../../../../components/Animation/Animation"


const CardA = ({handleCard, state}) => {
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
            {state === 'active' ? <Animation animation='A10'/> : <div className="animationNull"></div>}
        </div>
        </div> 

        {state === 'active' && 
        <div className="auxCards auxA">  
          <p>LISTOS PARA<br/><span>GRANDES EVENTOS</span></p>      
          <p><span>APORTAMOS VALOR<br/>PERSONAL</span> A LAS RESPUESTAS MASIVAS</p>      
          <p><span>RESPONDEMOS</span><br/><h5 className="pSmall"> A TODOS CON CORRECCIÓN Y CALIDAD</h5></p>      
        </div>    
        }             
    </div>
  )
}

export default CardA