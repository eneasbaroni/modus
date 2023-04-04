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
    <header className='rojo'>
      <div className = 'navBar'>
        <Link to="/"> <img className='headerLogo' src={"/images/Logo_red.svg"} alt="logo" /> </Link>   
        <a href="#why" className="linkedin-icon">Te impulsamos</a>
        <a href="#campana" className="linkedin-icon">Resolvemos</a>
        <h3 onClick={() => setResumeActive(!resumeActive)}>Unite al equipo</h3>
        <a href="#formulario" className="linkedin-icon">Contacto</a>
      </div>
      {resumeActive && <Resume desactive={desactiveResume}/>}
    </header> 
  )
}

export default Header
