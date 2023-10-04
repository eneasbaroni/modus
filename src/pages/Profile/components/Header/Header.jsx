import { useContext, useEffect, useState } from 'react'
import './Header.css'
import { Link as RouterLink } from 'react-router-dom'
import { Link } from 'react-scroll'
import UserContext from '../../../../context/userContex'
import Msn from './Msn'

const Logout = () => {
  const {logout} = useContext (UserContext)
  const handleLogout = () => {
    logout()
  }

  return (
    <button className='logoutButton' onClick={handleLogout}>
      Logout
    </button>
  )
}

const Header = () => {
  const {user} = useContext (UserContext)
  const [msgPanel, setMsgPanel] = useState(false)
  const [mensajesNoLeidos, setMensajesNoLeidos] = useState(false)
  const [logout, setLogout] = useState(false)

  useEffect(() => {
    if (user) {
      if (user.mensajes.some((mensaje) => !mensaje.leido)) {
        setMensajesNoLeidos(true)
      }
    }   
  }, [user])



  return (
    <header className='profileHeader'>

      <div className = 'navBar'>
        <RouterLink to="/"> <img className='headerLogo' src={"/images/Logo_red.svg"} alt="logo" /> </RouterLink>
        <Link to="informes" className="linkedin-icon">Informes</Link>
        <Link to="multimedia" className="linkedin-icon">Multimedia</Link>
        <Link to="estadisticas" className="linkedin-icon">Estadísticas</Link>
        <Link to="casos" className="linkedin-icon">Caso de éxito</Link>               
      </div>
      <div className='iconsContainer'>
        <div className='mailsContainer' onClick={() => setMsgPanel(!msgPanel)}>
          {user && <img className='mailIcon' src={"/images/header/notification.svg"} alt="mail icon" />}
          {user && msgPanel && <Msn msg={user.mensajes}/>}   
          {user && mensajesNoLeidos && <div className='mailNotification'></div>}       
        </div>
        {/* <div className='notifContainer'>
          <img className='notifIcon' src={"/images/header/notification.svg"} alt="notification icon" />        
        </div> */}
        {user && 
          /* user first leter */
          <div className='userInitial' onClick={() => setLogout(!logout)}>                      
              <p>{user.nombre.charAt(0).toUpperCase()}</p>  
              {logout && <Logout/>}
          </div>
        }
      </div>

    </header>
  )
}

export default Header