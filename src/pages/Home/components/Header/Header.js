import { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Link } from 'react-scroll'
import './Header.css'
import Resume from '../../../../components/Resume/Resume'

const Header = () => {  
  const [resumeActive, setResumeActive] = useState(false)

  const desactiveResume = () => {
    setResumeActive(false)
  }


  return (
    <header>
      <div className = 'navBar'>
        <RouterLink to="/"> <img className='headerLogo' src={"/images/Logo.svg"} alt="logo" /> </RouterLink> 
        <Link to='actions' className="linkedin-icon">Soluciones</Link>
        <Link to='style' className="linkedin-icon">¿Por qué Modus?</Link>        
        <Link to='formulario' className="linkedin-icon">Contacto</Link>        
        <h3 onClick={() => setResumeActive(!resumeActive)}>Unite al equipo</h3>
      </div>
      {resumeActive && <Resume desactive={desactiveResume}/>}
    </header>
  )
}

export default Header
