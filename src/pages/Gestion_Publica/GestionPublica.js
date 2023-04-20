import Campana from './components/Campana'
import Cards from './components/Cards'
import Form from './components/Form'
import Why from './components/Why'
import './GestionPublica.css'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header/Header'
import useScreenSize from '../../hooks/useScreenSize'
import HeaderMobile from './components/Header/HeaderMobile'
import FooterLinks from '../../components/FooterLinks/FooterLinks'

const GestionPublica = () => {
  const windowSize = useScreenSize()

  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);



  return (
    <>
      {windowSize.width > 1000 ? <Header/> : <HeaderMobile/>}
      <main id='gestionPublica'>      
        <Cards/> 
        <Why/>  
        <Campana/>   
        <Form/>  
        <FooterLinks page={"gestionpublica"}/>    
      </main>
    </>
  )
}

export default GestionPublica