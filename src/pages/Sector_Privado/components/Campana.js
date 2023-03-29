
import Animation from '../../../components/Animation/Animation'
import './Campana.css'

const Campana = () => {
  return (
    <section id='campana'>      

      <h2>¿Cómo querés comunicar tus<br/>productos y servicios?</h2>
      <h3>¿Cuál es tu público objetivo?</h3>
      
      <div className='campanaContainer'>

        <div className="content">
          <div className="card">
            <div className="card-content">  
                <Animation animation='A5'/>                            
                <h4>Interacción personalizada en comentarios de publicaciones.</h4>
            </div>
          </div>            
        </div>

        <div className="content">
          <div className="card">
            <div className="card-content">              
                <Animation animation='A6'/>                            
                <h4>Respuestas acertadas y ágiles a mensajes y consultas inbox.</h4>
            </div>
          </div>            
        </div>

        <div className="content">
          <div className="card">
            <div className="card-content">              
                <Animation animation='A7'/>                            
                <h4>Generación y mantenimiento de comunidades.</h4>
            </div>
          </div>            
        </div>

        <div className="content">
          <div className="card">
            <div className="card-content">                             
                <Animation animation='A8'/>                            
                <h4>Generación de informes y de propuestas de mejora.</h4>
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
