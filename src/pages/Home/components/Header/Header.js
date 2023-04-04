import { useState } from 'react'
import { Link } from 'react-router-dom'
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
        <Link to="/"> <img className='headerLogo' src={"/images/Logo.svg"} alt="logo" /> </Link>   
        <a href="#actions" className="linkedin-icon">Soluciones</a>
        <a href="#style" className="linkedin-icon">¿Por qué Modus?</a>
        <a href="#formulario" className="linkedin-icon">Contacto</a>
        <h3 onClick={() => setResumeActive(!resumeActive)}>Unite al equipo</h3>
      </div>
      {resumeActive && <Resume desactive={desactiveResume}/>}
    </header>
  )
}

export default Header
