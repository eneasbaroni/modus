import { useContext, useEffect, useState } from 'react'
import LanguageContext from '../../../context/languageContext'
import useScreenSize from '../../../hooks/useScreenSize'
import './Actions.css'

const Actions = () => {
  const windowSize = useScreenSize()
  const {language} = useContext (LanguageContext)
  const [lang, setLang] = useState()  

  useEffect(() => {
    setLang(language)    
  }, [language])

  return (
    <section id="actions">
      <div className='mainActionsContainer' >
        {lang === 'esp' ?
          <h2>Nos encargamos de la gestión de las conversaciones de tu marca con un equipo especializado de respuesta</h2> :
          <h2>We take care of the management of your brand's conversations with a specialized response team</h2>
        }
        <a className='mainBtn' href='#actions2'>
          <img className='mainBtnArrow' src='./images/main/main_arrow.svg' alt='arrow' />
        </a>

        <div id='actions2'></div>

        <div className='mainAction'>
          <div className='imagesContainer'>
            <img className='imgActive' src='./images/main/main_action_01_active.svg' alt='soluciones'/>
            <img src='./images/main/main_action_01.svg' alt='soluciones'/>
          </div>
          {lang === 'esp' ?
            <h3><span>Hablá</span> directamente<br/>con tus audiencias y <span>creá</span><br/>relaciones duraderas.</h3> :
            <h3><span>Talk</span> directly with<br/> your audiences and <span>create</span><br/>lasting relationships.</h3>
          }          
        </div>
        <div className='mainAction'>
          <div className='imagesContainer'>
            <img className='imgActive' src='./images/main/main_action_02_active.svg' alt='soluciones'/>
            <img src='./images/main/main_action_02.svg' alt='soluciones'/>
          </div>
          {windowSize.width > 768 ?
            lang === 'esp' ?
              <h3>Contamos con<span> expertos en<br/>moderación</span> de redes sociales<br/>para que tu marca mantenga una imagen positiva.</h3>:
              <h3>We have <span>experts in<br/>moderation</span> of social networks<br/>so that your brand maintains a positive image.</h3>:
            lang === 'esp' ?
              <h3>Contamos con<span> expertos<br/>en moderación</span> de redes<br/>sociales para que tu marca<br/>mantenga una imagen positiva.</h3>:
              <h3>We have <span> experts<br/>in moderation</span> of social<br/>networks so that your brand<br/>maintains a positive image.</h3>
          }
        </div>        
        <div className='mainAction'>
          <div className='imagesContainer'>
            <img className='imgActive' src='./images/main/main_action_04_active.svg' alt='soluciones'/>
            <img src='./images/main/main_action_04.svg' alt='soluciones'/>
          </div>
          {windowSize.width > 768 ?
            lang === 'esp' ?
              <h3>Ya sea que se trate de nuevos miembros<br/>en tu comunidad o de los más fieles,<br/>nuestro equipo está aquí para <span>atender a todos<br/>y cada uno de ellos de manera personalizada.</span></h3>:
              <h3>Whether it's new members in your<br/>community or the most loyal,<br/>our team is here to <span>serve each and<br/>every one of them in a personalized way.</span></h3>:
            lang === 'esp' ?
              <h3>Ya sea que se trate de<br/>nuevos miembros en tu<br/>comunidad o de los más fieles,<br/>nuestro equipo está aquí<br/>para <span>atender a todos y cada<br/>uno de ellos de manera<br/>personalizada.</span></h3>:
              <h3>Whether it's new members<br/>in your community or the<br/>most loyal ones, our team is here<br/>to <span>serve each and every<br/>one of them in a<br/>personalized way.</span></h3>
          }
        </div>

      </div>
    </section>
  )
}

export default Actions