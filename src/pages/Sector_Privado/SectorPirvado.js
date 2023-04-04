import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Campana from './components/Campana'
import Cards from './components/Cards'
import Form from './components/Form'
import Why from './components/Why'
import './SectorPirvado.css'
import Header from './components/Header/Header'

const SectorPirvado = () => {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Header/>
      <main id='sectorPrivado'>
        <Cards/>
        <Why/>
        <Campana/>
        <Form/>
        
      </main>
    </>
  )
}

export default SectorPirvado