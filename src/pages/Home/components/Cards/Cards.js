import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Card.css'
import CardA from './CardA'
import CardB from './CardB'
import CardC from './CardC' 
import CardD from './CardD' 
import CardE from './CardE'
import CardF from './CardF'
import LanguageContext from '../../../../context/languageContext'

const Cards = () => {
  const {language} = useContext (LanguageContext)
  const [lang, setLang] = useState()  
  const [cardActive, setCardActive] = useState('')

  useEffect(() => {
    setLang(language)    
  }, [language])

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
          <Link className='mainLinks linktoGP' to='/gestion-publica'> {lang === 'esp' ? 'Sector público' : 'Public sector'}</Link>
          <Link className='mainLinks linktoSP' to='/sector-privado'> {lang === 'esp' ? 'Sector privado' : 'Private sector'}</Link>
        </div>

      </div>
    </section>
  )
}

export default Cards