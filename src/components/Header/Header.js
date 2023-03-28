import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'

const Header = () => {
  const [color, setColor] = useState('red')

  const location = useLocation()
  useEffect (() => {
    console.log(location.pathname)
    if (location.pathname === '/sector-privado'){
      setColor('rojo')      
    } else {
      setColor('amarillo')
    }
  }, [location])


  return (
    <header className={color}>
      <div className = 'navBar'>
        <Link to="/"> <img className='headerLogo' src="/images/Logo.svg" alt="logo" /> </Link>
        <Link to="/">Soluciones</Link>
        <Link to="/">Contacto</Link>
        <Link to="/">Unite al equipo</Link>
      </div>
    </header>
  )
}

export default Header