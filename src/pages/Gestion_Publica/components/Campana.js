import Animation from '../../../components/Animation/Animation'
import './Campana.css'

const Campana = () => {
  return (
    <section id='campana'>      

      <h2>¿Cuál es tu mensaje de campaña?</h2>
      <h3>¿Qué necesitás decirle a tu electorado?</h3>
      
      <div className='campanaContainer'>

        <div className="content">
          <div className="card">
            <div className="card-content">   
                <Animation/>            
                <h4>Interacción uno a uno en comentarios de publicaciones.</h4>
            </div>
          </div>            
        </div>

        <div className="content">
          <div className="card">
            <div className="card-content">              
                <h4>Respuesta a mensajes y consultas inbox.</h4>
            </div>
          </div>            
        </div>

        <div className="content">
          <div className="card">
            <div className="card-content">              
                <h4>Difusión de ideas a través de la conversación.</h4>
            </div>
          </div>            
        </div>

        <div className="content">
          <div className="card">
            <div className="card-content">                             
                <h4>Centro de respuestas para campañas electorales y gestión de gobierno.</h4>
            </div>
          </div>            
        </div>
      
      </div>

      <div className='campanaCircleContainer'>
      <div className='campanaCircle'></div>
      </div>

    </section>
  )
}

export default Campana
