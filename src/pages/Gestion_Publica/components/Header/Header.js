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
        <a href="#why" className="linkedin-icon">¿Por qué Modus?</a>
        <a href="#campana" className="linkedin-icon">Te conectamos</a>
        <h3 onClick={() => setResumeActive(!resumeActive)}>Unite al equipo</h3>
        <a href="#formulario" className="linkedin-icon">Contacto</a>
      </div>
      {resumeActive && <Resume desactive={desactiveResume}/>}
    </header>
  )
}

export default Header
