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
        <Link to="why" className="linkedin-icon">¿Por qué Modus?</Link> 
        <Link to="campana" className="linkedin-icon">Te conectamos</Link>        
        <h3 onClick={() => setResumeActive(!resumeActive)}>Unite al equipo</h3>
        <Link to="formulario" className="linkedin-icon">Contacto</Link>
      </div>
      {resumeActive && <Resume desactive={desactiveResume}/>}
    </header>
  )
}

export default Header
