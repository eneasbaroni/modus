import { useState } from "react"
import Loader from "../../../components/Loader/Loader"
import './Cards.css'


const Cards = () => {
  const [loading, setLoading] = useState(true)
  const [opacity, setOpacity] = useState(1)
  const [cardActive, setCardActive] = useState('card-01')
  const [imageActive, setImageActive] = useState('card-01')

  const handleActiveCard = (card) => {
    setCardActive(card)    
    setOpacity(0)
    setTimeout(() => {
      setImageActive(card)
      setOpacity(1)
    }, 500)
  } 

  return (
    <section className='gpCardsContainer'>

      <img className='gpCardImg' src='./images/gestion_publica/card-01.png' alt='card' style={{display: 'none'}}/>
      <img className='gpCardImg' src='./images/gestion_publica/card-02.png' alt='card' style={{display: 'none'}}/>
      <img className='gpCardImg' src='./images/gestion_publica/card-03.png' alt='card' style={{display: 'none'}}/>
      <img className='gpCardImg' src='./images/gestion_publica/card-04.png' alt='card' style={{display: 'none'}}/>
      <img className='gpCardImg' src='./images/gestion_publica/card-04.png' alt='card' style={{display: 'none'}} onLoad={() => setLoading(false)}/>



      {loading && <Loader />}
      

      <div className="cardImgContainer">
        <div className='noise'></div>
        <img className='gpCardImgContainer' src='./images/gestion_publica/image-container.png' alt='card' />
        {imageActive === 'card-01' && <img className='gpCardImg' src='./images/gestion_publica/card-01.png' alt='card' style={{scale: opacity}}/>}
        {imageActive === 'card-02' && <img className='gpCardImg' src='./images/gestion_publica/card-02.png' alt='card' style={{scale: opacity}}/>}
        {imageActive === 'card-03' && <img className='gpCardImg' src='./images/gestion_publica/card-03.png' alt='card' style={{scale: opacity}}/>}
        {imageActive === 'card-04' && <img className='gpCardImg' src='./images/gestion_publica/card-04.png' alt='card' style={{scale: opacity}}/>}
        {imageActive === 'card-05' && <img className='gpCardImg' src='./images/gestion_publica/card-05.png' alt='card' style={{scale: opacity}}/>}
        
        
        
        <img className='cardCircle' src='./images/gestion_publica/card-circle.png' alt='card' />
      </div>
      
      <div className='gpCardInfo'>
        <h1>Gestión <br/>pública</h1> 
        <div className={cardActive === 'card-01' ? 'textGroup activeGroup' : 'textGroup'} id="card-01" onMouseEnter= {() => handleActiveCard('card-01')}>
          <p><span>•Difundí</span></p>
          <p>&nbsp;tu mensaje</p>
        </div>
        <div className={cardActive === 'card-02' ? 'textGroup activeGroup' : 'textGroup'} id="card-02" onMouseEnter= {() => handleActiveCard('card-02')}>
          <p><span>•Asegurate de repetir y</span></p>
          <p>&nbsp;hacer llegar tu propuesta</p>
        </div>
        <div className={cardActive === 'card-03' ? 'textGroup activeGroup' : 'textGroup'} id="card-03" onMouseEnter= {() => handleActiveCard('card-03')}>
          <p><span>•Conversá</span></p>
          <p>&nbsp;con tu electorado</p>
        </div>
        <div className={cardActive === 'card-04' ? 'textGroup activeGroup' : 'textGroup'} id="card-04" onMouseEnter= {() => handleActiveCard('card-04')}>
          <p><span>•</span>Aprovechá cada comentario</p>
          <p>&nbsp;como una oportunidad de</p>
          <p><span>&nbsp;responder y conversar</span></p>
        </div>
        <div className={cardActive === 'card-05' ? 'textGroup activeGroup' : 'textGroup'} id="card-05" onMouseEnter= {() => handleActiveCard('card-05')}>
          <p><span>•Mejorá la percepción que</span></p>
          <p>&nbsp;tienen de vos. Aumentá tu</p>
          <p><span>&nbsp;nivel de reconocimiento.</span></p>          
        </div>
      </div>  

      <div className='gpBtnContainer'>
        <a className='mainBtn' href='#why'>
          <img className='mainBtnArrow' src='./images/main/main_arrow.svg' alt='arrow' />
        </a>
      </div>     

    </section>
  )
}

export default Cards