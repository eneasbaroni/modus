import React from 'react'
import './Style.css'
import useScreenSize from '../../../hooks/useScreenSize'

const Style = () => {
  const windowSize = useScreenSize()
  return (
    <section id='style'>

      <div className='titlesContainer'>
        <h2><span>¿En qué</span><br/>ayudamos?</h2>
        {windowSize.width > 768 ?
        <h3>Elegí el servicio que sea capaz de crear<br/>la comunicación que necesitás</h3>:
        <h3>Elegí el servicio que sea capaz de<br/>crearla comunicación que necesitás</h3>}
        
      </div> 
      <p>Con Modus vas a poder conectar con tu audiencia de la forma que más te convenga. Contamos con el servicio de <span>chatbot automático y múltiples equipos de personas</span> para respuesta especializada, según cada necesidad. </p>
     

    </section>
  )
}

export default Style
