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
    </div>
  )
}

export default CardA