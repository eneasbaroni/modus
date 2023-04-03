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
    </div>
  )
}

export default CardC