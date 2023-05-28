import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Campana from './components/Campana'
import Cards from './components/Cards'
import Form from './components/Form'
import Why from './components/Why'
import './SectorPirvado.css'
import Header from './components/Header/Header'
import useScreenSize from '../../hooks/useScreenSize'
import HeaderMobile from './components/Header/HeaderMobile'
import FooterLinks from '../../components/FooterLinks/FooterLinks'
import LangSelector from '../../components/LangSelector/LangSelector'

const SectorPirvado = () => {
  const windowSize = useScreenSize()
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
       {windowSize.width > 1000 ? <Header/> : <> <HeaderMobile/> <LangSelector/> </>}
      <main id='sectorPrivado'>
        <Cards/>
        <Why/>
        <Campana/>
        <Form/>
        <FooterLinks page={"sectorprivado"}/>        
      </main>
    </>
  )
}

export default SectorPirvado