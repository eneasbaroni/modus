import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Card.css'
import CardA from './CardA'
import CardB from './CardB'
import CardC from './CardC' 
import CardD from './CardD' 
import CardE from './CardE'
import CardF from './CardF'

const Cards = () => {
  const [cardActive, setCardActive] = useState('')

  const handleCard = (card) => {
    setCardActive(card)
  }

  return (
    <section id='mainCards'>
      <div className='cardsContainer'>

        <CardA handleCard={handleCard} state = {cardActive==='A1' ? 'active' : cardActive==='' ? 'standby' : ''}/>
        <CardB handleCard={handleCard} state = {cardActive==='A2' ? 'active' : cardActive==='' ? 'standby' : ''}/>
        <CardC handleCard={handleCard} state = {cardActive==='A3' ? 'active' : cardActive==='' ? 'standby' : ''}/>       
        <CardD handleCard={handleCard} state = {cardActive==='A4' ? 'active' : cardActive==='' ? 'standby' : ''}/>  
        <CardE handleCard={handleCard} state = {cardActive==='A5' ? 'active' : cardActive==='' ? 'standby' : ''}/> 
        <CardF handleCard={handleCard} state = {cardActive==='A6' ? 'active' : cardActive==='' ? 'standby' : ''}/>

        <div className='mainLinksContainer'>
          <Link className='mainLinks linktoGP' to='/gestion-publica'>Sector público</Link>
          <Link className='mainLinks linktoSP' to='/sector-privado'>Sector privado</Link>
        </div>

      </div>
    </section>
  )
}

export default Cards