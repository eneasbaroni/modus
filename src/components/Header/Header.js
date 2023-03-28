import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Resume from '../Resume/Resume'
import './Header.css'

const Header = () => {
  const [color, setColor] = useState('red')
  const [resumeActive, setResumeActive] = useState(false)

  const location = useLocation()
  useEffect (() => {
    console.log(location.pathname)
    if (location.pathname === '/sector-privado'){
      setColor('rojo')      
    } else {
      setColor('amarillo')
    }
  }, [location])

  const desactiveResume = () => {
    setResumeActive(false)
  }


  return (
    <header className={color}>
      <div className = 'navBar'>
        <Link to="/"> <img className='headerLogo' src={color === 'rojo' ? "/images/Logo_red.svg" : "/images/Logo.svg"} alt="logo" /> </Link>         
        <Link to="/">Soluciones</Link>        
        <a href="#formulario" className="linkedin-icon">Contacto</a>
        <h3 onClick={() => setResumeActive(!resumeActive)}>Unite al equipo</h3>
      </div>
      {resumeActive && <Resume desactive={desactiveResume}/>}
    </header>
  )
}

export default Header