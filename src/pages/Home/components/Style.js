import React, { useContext, useEffect, useState } from 'react'
import './Style.css'
import useScreenSize from '../../../hooks/useScreenSize'
import LanguageContext from '../../../context/languageContext'

const Style = () => {
  const {language} = useContext (LanguageContext)
  const [lang, setLang] = useState()  

  useEffect(() => {
    setLang(language)    
  }, [language])

  const windowSize = useScreenSize()

  return (
    <section id='style'>

      <div className='titlesContainer'>
        {lang === 'esp' ?
        <>
          <h2><span>¿En qué</span><br/>ayudamos?</h2>
          {windowSize.width > 768 ?
          <h3>Elegí el servicio que sea capaz de crear<br/>la comunicación que necesitás</h3>:
          <h3>Elegí el servicio que sea capaz de<br/>crearla comunicación que necesitás</h3>}
        </> :
        <>
          <h2><span>How do</span><br/>we help?</h2>
          {windowSize.width > 768 ?
          <h3>Choose the service that is able to create<br/>the communication you need</h3>:
          <h3>Choose the service that is able to<br/>create the communication you need</h3>}
        </>}
        
      </div>
      {lang === 'esp' ?
        <p>Con Modus vas a poder conectar con tu audiencia de la forma que más te convenga. Respondemos todos los <span>comentarios y mensajes de tus usuarios</span> con múltiples equipos de personas para respuesta especializada según cada necesidad.<br/>También contamos con un servicio de chatbot automático para informar de manera rápida y autogestiva.</p>:
        <p>With Modus you will be able to connect with your audience in the way that suits you best. We respond to all <span>comments and messages from your users</span> with multiple teams of people for specialized response according to each need.<br/>We also have an automatic chatbot service to inform quickly and self-managed.</p>
      }
      {/* <p>Con Modus vas a poder conectar con tu audiencia de la forma que más te convenga. Contamos con el servicio de <span>chatbot automático y múltiples equipos de personas</span> para respuesta especializada, según cada necesidad. </p>: */}
      

    </section>
  )
}

export default Style
