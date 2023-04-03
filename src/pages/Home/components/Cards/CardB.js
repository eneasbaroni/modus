import Animation from "../../../../components/Animation/Animation"


const CardB = ({handleCard, state}) => {
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
    </div>
  )
}

export default CardB