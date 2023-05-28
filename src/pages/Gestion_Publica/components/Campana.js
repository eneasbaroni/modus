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
          <h2>¿Cuál es tu mensaje de campaña?</h2>
          <h3>¿Qué necesitás decirle a tu electorado?</h3>
        </> :
        <>
          <h2>What's your campaign message?</h2>
          <h3>What do you need to tell your electorate?</h3>
        </>
      }
      
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
                {lang === 'esp' ? <h4>Interacción uno a uno en comentarios de publicaciones.</h4> : <h4>One-on-one interaction in post comments.</h4>}
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
              {lang === 'esp' ? <h4>Respuesta a mensajes y consultas inbox.</h4> : <h4>Response to messages and inbox queries.</h4>}
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
              {lang === 'esp' ? <h4>Difusión de ideas a través de la conversación.</h4> : <h4>Spread of ideas through conversation.</h4>}
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
              {lang === 'esp' ? <h4>Centro de respuestas para campañas electorales y gestión de gobierno.</h4> : <h4>Response center for electoral campaigns and government management.</h4>}
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
