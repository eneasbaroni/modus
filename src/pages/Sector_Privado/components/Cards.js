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
    }, 200)
  }


  return (
    <section className='gpCardsContainer'>

      <img className='gpCardImg' src='./images/sector_privado/card-01.png' alt='card' style={{display: 'none'}}/>
      <img className='gpCardImg' src='./images/sector_privado/card-02.png' alt='card' style={{display: 'none'}}/>      
      <img className='gpCardImg' src='./images/sector_privado/card-03.png' alt='card' style={{display: 'none'}} onLoad={() => setLoading(false)}/>

      {loading && <Loader />}
      

      <div className="cardImgContainer">
        <div className='blury'></div>
        <div className='noise'></div>
        {/* <img className='gpCardImgContainer' src='./images/gestion_publica/image-container.png' alt='card' style={{opacity:'0'}} /> */}
        {imageActive === 'card-01' && <img className='gpCardImg' src='./images/sector_privado/card-01.png' alt='card' style={{opacity: opacity}}/>}
        {imageActive === 'card-02' && <img className='gpCardImg' src='./images/sector_privado/card-02.png' alt='card' style={{opacity: opacity}}/>}
        {imageActive === 'card-03' && <img className='gpCardImg' src='./images/sector_privado/card-03.png' alt='card' style={{opacity: opacity}}/>}
          
        
        <img className='cardCircle' src='./images/gestion_publica/card-circle.png' alt='card' />
      </div>
      
      <div className='gpCardInfo'>
        <h1>Sector <br/><span>privado</span></h1> 
        <div className={cardActive === 'card-01' ? 'textGroup activeGroup' : 'textGroup'} id="card-01" onMouseEnter= {() => handleActiveCard('card-01')}>
          <p><span>•Brillá</span></p>
          <p>&nbsp;Diferenciate de la competencia con</p>
          <p>&nbsp;una atención al cliente de calidad.</p>
        </div>
        <div className={cardActive === 'card-02' ? 'textGroup activeGroup' : 'textGroup'} id="card-02" onMouseEnter= {() => handleActiveCard('card-02')}>
          <p><span>•Conversá con tus clientes</span></p>
          <p>&nbsp;Diferenciate de la competencia con</p>
          <p>&nbsp;una atención al cliente de calidad.</p>
        </div>
        <div className={cardActive === 'card-03' ? 'textGroup activeGroup' : 'textGroup'} id="card-03" onMouseEnter= {() => handleActiveCard('card-03')}>
          <p><span>•Fidelizá</span></p>
          <p>&nbsp;Construí confianza a través de</p>
          <p>&nbsp;comunicación transparente y</p>
          <p>&nbsp;resolución de problemas.</p>
        </div>       
      </div>  

      <div className='gpBtnContainer'>
        <a className='mainBtn' href='#why'>
          <img className='mainBtnArrow' src='./images/main/main_arrow_red.svg' alt='arrow' />
        </a>
      </div>     

    </section>
  )
}

export default Cards