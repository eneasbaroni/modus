import Campana from './components/Campana'
import Cards from './components/Cards'
import Form from './components/Form'
import Why from './components/Why'
import './GestionPublica.css'

const GestionPublica = () => {
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