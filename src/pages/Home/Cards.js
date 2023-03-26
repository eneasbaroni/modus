import { Link } from 'react-router-dom'
import './Home.css'

const Cards = () => {
  return (
    <section id='mainCards'>
      <div className='cardsContainer'>

        <div className="content">
          <div className="card">
            <div className="card-content">              
                <h4>Prevención y gestión de crisis.</h4>
            </div>
          </div>            
        </div>

        <div className="content">
          <div className="card">
            <div className="card-content">              
                <h4>Atención al cliente en redes sociales.</h4>
            </div>
          </div>            
        </div>

        <div className="content">
          <div className="card">
            <div className="card-content">              
                <h4>Gestión de reclamos.</h4> 
            </div>
          </div>            
        </div>

        <div className="content">
          <div className="card">
            <div className="card-content">              
                <h4>Campañas de lanzamiento</h4> 
                <p>de producto y electorales.</p>
            </div>
          </div>            
        </div>

        <div className="content">
          <div className="card">
            <div className="card-content">              
                <h4>Automatizamos respuestas</h4> 
                <p>con chatbot.</p>
            </div>
          </div>            
        </div>

        <div className="content">
          <div className="card">
            <div className="card-content">   
                <p>Programas de </p>           
                <h4>fidelización y retención.</h4> 
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