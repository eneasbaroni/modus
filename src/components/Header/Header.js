import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <header>
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