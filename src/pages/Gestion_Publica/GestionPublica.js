import Campana from './components/Campana'
import Cards from './components/Cards'
import Form from './components/Form'
import Why from './components/Why'
import './GestionPublica.css'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

const GestionPublica = () => {

  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);



  return (
    <main id='gestionPublica'>      
      <Cards/> 
      <Why/>  
      <Campana/>   
      <Form/>      
    </main>
  )
}

export default GestionPublica