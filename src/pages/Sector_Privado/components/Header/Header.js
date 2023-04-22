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
    <header className='rojo'>
      <div className = 'navBar'>
        <RouterLink to="/"> <img className='headerLogo' src={"/images/Logo_red.svg"} alt="logo" /> </RouterLink>
        <Link to="why" className="linkedin-icon">Te impulsamos</Link>   
        <Link to="campana" className="linkedin-icon">Resolvemos</Link>        
        <h3 onClick={() => setResumeActive(!resumeActive)}>Unite al equipo</h3>
        <Link to="formulario" className="linkedin-icon">Contacto</Link>        
      </div>
      {resumeActive && <Resume desactive={desactiveResume}/>}
    </header> 
  )
}

export default Header
