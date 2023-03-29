
import { useState } from 'react'
import Animation from '../../../components/Animation/Animation'
import './Campana.css'

const Campana = () => {
  const [animetionActive, setAnimetionActive] = useState('')
  return (
    <section id='campana'>      

      <h2>¿Cómo querés comunicar tus<br/>productos y servicios?</h2>
      <h3>¿Cuál es tu público objetivo?</h3>
      
      <div className='campanaContainer'>

        <div className="content" onMouseEnter={() => setAnimetionActive('A5')} onMouseLeave={() => setAnimetionActive('')}>
          <div className="card">
            <div className="card-content">
                {animetionActive === 'A5' ?  
                <Animation animation='A5'/> :
                <div className='point'><img src='./images/sector_privado/point-red.svg' alt='point'/></div>
                }                                            
                <h4>Interacción personalizada en comentarios de publicaciones.</h4>
            </div>
          </div>            
        </div>

        <div className="content" onMouseEnter={() => setAnimetionActive('A6')} onMouseLeave={() => setAnimetionActive('')}>
          <div className="card">
            <div className="card-content">  
              {animetionActive === 'A6' ?
              <Animation animation='A6'/> :
              <div className='point'><img src='./images/sector_privado/point-red.svg' alt='point'/></div>
              }          
                                           
              <h4>Respuestas acertadas y ágiles a mensajes y consultas inbox.</h4>
            </div>
          </div>            
        </div>

        <div className="content" onMouseEnter={() => setAnimetionActive('A7')} onMouseLeave={() => setAnimetionActive('')}>
          <div className="card">
            <div className="card-content">              
                {animetionActive === 'A7' ?
                <Animation animation='A7'/> :
                <div className='point'><img src='./images/sector_privado/point-red.svg' alt='point'/></div>
                }                           
                <h4>Generación y mantenimiento de comunidades.</h4>
            </div>
          </div>            
        </div>

        <div className="content" onMouseEnter={() => setAnimetionActive('A8')} onMouseLeave={() => setAnimetionActive('')}>
          <div className="card">
            <div className="card-content">
              {animetionActive === 'A8' ?
              <Animation animation='A8'/> :
              <div className='point'><img src='./images/sector_privado/point-red.svg' alt='point'/></div>
              }                                            
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
