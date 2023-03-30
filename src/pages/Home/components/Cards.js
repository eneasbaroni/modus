import { Link } from 'react-router-dom'
import Animation from '../../../components/Animation/Animation'
import './Card.css'

const Cards = () => {
  return (
    <section id='mainCards'>
      <div className='cardsContainer'>

        <div className="content">
          <div className="card">
            <div className="card-content" style={{padding: '10% 10% 0%'}}>              
                <h4>Prevención y gestión de crisis.</h4>
                <Animation animation='A9'/>
            </div>
          </div>            
        </div>

        <div className="content">
          <div className="card">
            <div className="card-content" style={{padding: '10% 10% 0%'}}>              
                <h4>Atención al cliente en redes sociales.</h4>
                <Animation animation='A10'/>
            </div>
          </div>            
        </div>

        <div className="content">
          <div className="card">
            <div className="card-content" style={{padding: '10% 10% 0%'}}>              
                <h4>Gestión de reclamos.</h4> 
                <Animation animation='A11'/>
            </div>
          </div>            
        </div>

        <div className="content">
          <div className="card">
            <div className="card-content" style={{padding: '10% 10% 0%'}}>              
                <h4>Campañas de lanzamiento</h4> 
                <p>de producto y electorales.</p>
                <Animation animation='A10'/>
            </div>
          </div>            
        </div>

        <div className="content">
          <div className="card">
            <div className="card-content" style={{padding: '10% 10% 0%'}}>              
                <h4>Automatizamos respuestas</h4> 
                <p>con chatbot.</p>
                <Animation animation='A11'/>
            </div>
          </div>            
        </div>

        <div className="content">
          <div className="card">
            <div className="card-content" style={{padding: '10% 10% 0%'}}>   
                <p>Programas de </p>           
                <h4>fidelización y retención.</h4> 
                <Animation animation='A12'/>
            </div>
          </div>            
        </div>

        <div className='mainLinksContainer'>
          <Link className='mainLinks linktoGP' to='/gestion-publica'>Gestión pública</Link>
          <Link className='mainLinks linktoSP' to='/sector-privado'>Sector privado</Link>
        </div>

      </div>
    </section>
  )
}

export default Cards