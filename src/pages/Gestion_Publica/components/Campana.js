import { useState } from 'react'
import Animation from '../../../components/Animation/Animation'
import './Campana.css'
import useScreenSize from '../../../hooks/useScreenSize'

const Campana = () => {
  const windowSize = useScreenSize()
  const [animetionActive, setAnimetionActive] = useState('')
  return (
    <section id='campana'>      

      <h2>¿Cuál es tu mensaje de campaña?</h2>
      <h3>¿Qué necesitás decirle a tu electorado?</h3>
      
      <div className='campanaContainer'>

        <div className="content" onMouseEnter={() => setAnimetionActive('A1')} onMouseLeave={() => setAnimetionActive('')}>
          <div className="card">
            <div className="card-content"> 
              {windowSize.width > 768 ? 
                animetionActive === 'A1' ? 
                  <Animation animation='A1'/> : 
                  <div className='point'><img src='./images/gestion_publica/point-yellow.svg' alt='point'/></div>:                  
                <Animation animation='A1'/>                
              }                         
                <h4>Interacción uno a uno en comentarios de publicaciones.</h4>
            </div>
          </div>            
        </div>

        <div className="content" onMouseEnter={() => setAnimetionActive('A2')} onMouseLeave={() => setAnimetionActive('')}>
          <div className="card">
            <div className="card-content">
            {windowSize.width > 768 ? 
                animetionActive === 'A2' ? 
                  <Animation animation='A2'/> : 
                  <div className='point'><img src='./images/gestion_publica/point-yellow.svg' alt='point'/></div>:                  
                <Animation animation='A2'/>                
              }                            
              <h4>Respuesta a mensajes y consultas inbox.</h4>
            </div>
          </div>            
        </div>

        <div className="content" onMouseEnter={() => setAnimetionActive('A3')} onMouseLeave={() => setAnimetionActive('')}>
          <div className="card">
            <div className="card-content">  
            {windowSize.width > 768 ? 
                animetionActive === 'A3' ? 
                  <Animation animation='A3'/> : 
                  <div className='point'><img src='./images/gestion_publica/point-yellow.svg' alt='point'/></div>:                  
                <Animation animation='A3'/>                
              }                         
              <h4>Difusión de ideas a través de la conversación.</h4>
            </div>
          </div>            
        </div>

        <div className="content" onMouseEnter={() => setAnimetionActive('A4')} onMouseLeave={() => setAnimetionActive('')}>
          <div className="card">
            <div className="card-content"> 
            {windowSize.width > 768 ? 
                animetionActive === 'A4' ? 
                  <Animation animation='A4'/> : 
                  <div className='point'><img src='./images/gestion_publica/point-yellow.svg' alt='point'/></div>:                  
                <Animation animation='A4'/>                
              }                                          
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
