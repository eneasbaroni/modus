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
    cardActive === 'card-03' && handleActiveCard('card-04')
    cardActive === 'card-04' && handleActiveCard('card-05')
    cardActive === 'card-05' && handleActiveCard('card-01')
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
        <div className='blury'></div>
        <div className='noisee'></div>
        {/* <img className='gpCardImgContainer' src='./images/gestion_publica/image-container.png' alt='card' style={{opacity:'0'}} /> */}
        {inactiveImage === 'card-01' && <img className='gpCardImg' src='./images/gestion_publica/card-01.png' alt='card' style={{opacity: inactiveOpacity}}/>}
        {inactiveImage === 'card-02' && <img className='gpCardImg' src='./images/gestion_publica/card-02.png' alt='card' style={{opacity: inactiveOpacity}}/>}
        {inactiveImage === 'card-03' && <img className='gpCardImg' src='./images/gestion_publica/card-03.png' alt='card' style={{opacity: inactiveOpacity}}/>}
        {inactiveImage === 'card-04' && <img className='gpCardImg' src='./images/gestion_publica/card-04.png' alt='card' style={{opacity: inactiveOpacity}}/>}
        {inactiveImage === 'card-05' && <img className='gpCardImg' src='./images/gestion_publica/card-05.png' alt='card' style={{opacity: inactiveOpacity}}/>}
        
        {imageActive === 'card-01' && <img className='gpCardImg' src='./images/gestion_publica/card-01.png' alt='card' style={{opacity: opacity}}/>}
        {imageActive === 'card-02' && <img className='gpCardImg' src='./images/gestion_publica/card-02.png' alt='card' style={{opacity: opacity}}/>}
        {imageActive === 'card-03' && <img className='gpCardImg' src='./images/gestion_publica/card-03.png' alt='card' style={{opacity: opacity}}/>}
        {imageActive === 'card-04' && <img className='gpCardImg' src='./images/gestion_publica/card-04.png' alt='card' style={{opacity: opacity}}/>}
        {imageActive === 'card-05' && <img className='gpCardImg' src='./images/gestion_publica/card-05.png' alt='card' style={{opacity: opacity}}/>}
               
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
        <h1>Sector <br/><span>público</span></h1> 
        <div className={cardActive === 'card-01' ? 'textGroup activeGroup' : 'textGroup'} id="card-01" onMouseEnter= {() => handleActiveCard('card-01')}>
          <p><span>•Difundí</span></p>
          <p>&nbsp;tu mensaje.</p>
        </div>
        <div className={cardActive === 'card-02' ? 'textGroup activeGroup' : 'textGroup'} id="card-02" onMouseEnter= {() => handleActiveCard('card-02')}>
          <p><span>•Asegurate de repetir y</span></p>
          <p>&nbsp;hacer llegar tu propuesta.</p>
        </div>
        <div className={cardActive === 'card-03' ? 'textGroup activeGroup' : 'textGroup'} id="card-03" onMouseEnter= {() => handleActiveCard('card-03')}>
          <p><span>•Conversá</span></p>
          <p>&nbsp;con tu electorado.</p>
        </div>
        <div className={cardActive === 'card-04' ? 'textGroup activeGroup' : 'textGroup'} id="card-04" onMouseEnter= {() => handleActiveCard('card-04')}>
          <p><span>•</span>Aprovechá cada comentario</p>
          <p>&nbsp;como una oportunidad de</p>
          <p><span>&nbsp;responder y conversar.</span></p>
        </div>
        <div className={cardActive === 'card-05' ? 'textGroup activeGroup' : 'textGroup'} id="card-05" onMouseEnter= {() => handleActiveCard('card-05')}>
          {windowSize.width > 768 ?
            <>
              <p><span>•Mejorá la percepción que</span></p>
              <p>&nbsp;tienen de vos. Aumentá tu</p>
              <p><span>&nbsp;nivel de reconocimiento.</span></p>          
            </> :
            <>
              <p><span>•Mejorá la percepción</span></p>
              <p>&nbsp; que tienen de vos. Aumentá</p>
              <p>&nbsp; tu<span> nivel de reconocimiento.</span></p>               
            </>
          }

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