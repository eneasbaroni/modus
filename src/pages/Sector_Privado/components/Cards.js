import { useState } from "react"
import Loader from "../../../components/Loader/Loader"
import './Cards.css'
import useScreenSize from "../../../hooks/useScreenSize"


const Cards = () => {
  const windowSize = useScreenSize()

  const [loading, setLoading] = useState(true)
  const [opacity, setOpacity] = useState(1)
  const [cardActive, setCardActive] = useState('card-01')
  const [imageActive, setImageActive] = useState('card-01')
  const [inactiveImage, setInactiveImage] = useState('')
  const [inactiveOpacity, setInactiveOpacity] = useState(1)

  const handleActiveCard = (card) => {
    setCardActive(card)    
    setInactiveOpacity(1)
    setInactiveImage(imageActive)
    setOpacity(0)
    setTimeout(() => {
      setImageActive(card)         
    }, 200)

    setTimeout(() => {
      setOpacity(1)
      setInactiveOpacity(0)
    }, 300)    
  }

  const handleNextCard = () => {
    cardActive === 'card-01' && handleActiveCard('card-02')
    cardActive === 'card-02' && handleActiveCard('card-03')
    cardActive === 'card-03' && handleActiveCard('card-01')    
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
        {inactiveImage === 'card-01' && <img className='gpCardImg' src='./images/sector_privado/card-01.png' alt='card' style={{opacity: inactiveOpacity}}/>}
        {inactiveImage === 'card-02' && <img className='gpCardImg' src='./images/sector_privado/card-02.png' alt='card' style={{opacity: inactiveOpacity}}/>}
        {inactiveImage === 'card-03' && <img className='gpCardImg' src='./images/sector_privado/card-03.png' alt='card' style={{opacity: inactiveOpacity}}/>}

        {imageActive === 'card-01' && <img className='gpCardImg' src='./images/sector_privado/card-01.png' alt='card' style={{opacity: opacity}}/>}
        {imageActive === 'card-02' && <img className='gpCardImg' src='./images/sector_privado/card-02.png' alt='card' style={{opacity: opacity}}/>}
        {imageActive === 'card-03' && <img className='gpCardImg' src='./images/sector_privado/card-03.png' alt='card' style={{opacity: opacity}}/>}
          
        {windowSize.width > 768 && <img className='cardCircle' src='./images/gestion_publica/card-circle.png' alt='card' />}

        {windowSize.width < 769 && 
          <div className="changeCardBtnContainer" onClick={handleNextCard}>
            <div className="changeCardBtn"> 
              <p> PRESIONÁ<br/>EL BOTÓN</p>           
            </div>          
          </div>
        }
        
      </div>
      
      <div className='gpCardInfo'>
        <h1>Sector <br/><span>privado</span></h1> 
        <div className={cardActive === 'card-01' ? 'textGroup activeGroup' : 'textGroup'} id="card-01" onMouseEnter= {() => handleActiveCard('card-01')}>
          <p><span>•Brillá</span></p>
          <p>&nbsp;Diferenciate de la competencia con</p>
          <p>&nbsp;una atención al cliente de calidad.</p>          
        </div>
        <div className={cardActive === 'card-02' ? 'textGroup activeGroup' : 'textGroup'} id="card-02" onMouseEnter= {() => handleActiveCard('card-02')}>
        {windowSize.width > 769 ?
          <p><span>•Conversá con tus clientes</span></p> :
          <p><span>•Conversá<br/>&nbsp; con tus clientes</span></p> }
        {windowSize.width > 769 ?
          <>
            <p>&nbsp;Conectate con tu público</p>
            <p>&nbsp;atendiendo a sus necesidades</p>
            <p>&nbsp;particulares.</p>          
          </> :
          <>
            <p>&nbsp;&nbsp;&nbsp;Conectate con tu público</p>
            <p>&nbsp;&nbsp;&nbsp;atendiendo a sus necesidades</p>
            <p>&nbsp;&nbsp;&nbsp;particulares.</p>          
          </> }

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