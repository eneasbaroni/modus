
import { useContext, useEffect, useState } from 'react'
import Animation from '../../../components/Animation/Animation'
import './Campana.css'
import useScreenSize from '../../../hooks/useScreenSize'
import LanguageContext from '../../../context/languageContext'

const Campana = () => {
  const windowSize = useScreenSize()
  const [animetionActive, setAnimetionActive] = useState('')
  const {language} = useContext (LanguageContext)
  const [lang, setLang] = useState()  

  useEffect(() => {
    setLang(language)    
  }, [language])

  return (
    <section id='campana'>      

      {lang === 'esp' ?
        <>
          <h2>¿Cómo querés comunicar tus<br/>productos y servicios?</h2>
          <h3>¿Cuál es tu público objetivo?</h3>
        </> :
        <>
          <h2>How do you want to communicate<br/>your products and services?</h2>
          <h3>What is your target audience?</h3>
        </> 
      }

      
      <div className='campanaContainer'>

        <div className="content" onMouseEnter={() => setAnimetionActive('A5')} onMouseLeave={() => setAnimetionActive('')}>
          <div className="card">
            <div className="card-content">
              {windowSize.width > 768 ? 
                animetionActive === 'A5' ? 
                  <Animation animation='A5'/> : 
                  <div className='point'><img src='./images/sector_privado/point-red.svg' alt='point'/></div>:                  
                <Animation animation='A5'/>               
              }                                                           
              {lang === 'esp' ? <h4>Interacción personalizada en comentarios de publicaciones.</h4> : <h4>Personalized interaction in post comments.</h4>}
            </div>
          </div>            
        </div>

        <div className="content" onMouseEnter={() => setAnimetionActive('A6')} onMouseLeave={() => setAnimetionActive('')}>
          <div className="card">
            <div className="card-content">  
            {windowSize.width > 768 ? 
                animetionActive === 'A6' ? 
                  <Animation animation='A6'/> : 
                  <div className='point'><img src='./images/sector_privado/point-red.svg' alt='point'/></div>:                  
                <Animation animation='A6'/>               
              }          
                                           
              {lang === 'esp' ? <h4>Respuestas acertadas y ágiles a mensajes y consultas inbox.</h4> : <h4>Accurate and agile responses to messages and inbox queries.</h4>}
            </div>
          </div>            
        </div>

        <div className="content" onMouseEnter={() => setAnimetionActive('A7')} onMouseLeave={() => setAnimetionActive('')}>
          <div className="card">
            <div className="card-content">              
            {windowSize.width > 768 ? 
                animetionActive === 'A7' ? 
                  <Animation animation='A7'/> : 
                  <div className='point'><img src='./images/sector_privado/point-red.svg' alt='point'/></div>:                  
                <Animation animation='A7'/>               
              }                          
                {lang === 'esp' ? <h4>Generación y mantenimiento de comunidades.</h4> : <h4>Generation and maintenance of communities.</h4>}
            </div>
          </div>            
        </div>

        <div className="content" onMouseEnter={() => setAnimetionActive('A8')} onMouseLeave={() => setAnimetionActive('')}>
          <div className="card">
            <div className="card-content">
            {windowSize.width > 768 ? 
                animetionActive === 'A8' ? 
                  <Animation animation='A8'/> : 
                  <div className='point'><img src='./images/sector_privado/point-red.svg' alt='point'/></div>:                  
                <Animation animation='A8'/>               
              }                                           
              {lang === 'esp' ? <h4>Generación de informes y de propuestas de mejora.</h4> : <h4>Generation of reports and improvement proposals.</h4>}
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
