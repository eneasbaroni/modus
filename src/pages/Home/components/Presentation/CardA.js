import './CardA.css'

const CardA = () => {
  return (
    <div className='placaContainer'>
      <div className='placa'>
        <h1>¿De qué sirve<br/>tener redes sociales<br/><span>si no vas a socializar?</span></h1>
        <div className='patronContainer'>    
          {[...Array(90)].map((e, i) => <div key={i} className='patron'></div>)}   
        </div>
        <div className='gradientBG'></div>
        
      </div>
    </div>
  )
}

export default CardA