import './Header.css'
import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import MenuMobile from './MenuMobile'
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

const HeaderMobile = () => {
  const {user} = useContext (UserContext)
  const [menuActive, setMenuActive] = useState(false)
  const [resumeActive, setResumeActive] = useState(false)
  const [logout, setLogout] = useState(false)
  const [msgPanel, setMsgPanel] = useState(false)
  const [mensajesNoLeidos, setMensajesNoLeidos] = useState(false)

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
        <Link to="/"> <img className='headerLogo' src={"/images/Logo_red.svg"} alt="logo" /> </Link>
        
       
        <div className='iconsContainer'>
        {menuActive ? <img className='menuIcon' src={"/images/main/menu_mobile_icon_active_red.svg"} alt="logo" onClick={() => setMenuActive(!menuActive)}/> : <img className='menuIcon' src={"/images/main/menu_mobile_icon_red.svg"} alt="logo" onClick={() => setMenuActive(!menuActive)}/>}
        
        {menuActive && <MenuMobile desactive={() => setMenuActive(false)} setResumeActive={() => setResumeActive(!resumeActive)}/>}
          <div className='mailsContainer' onClick={() => setMsgPanel(!msgPanel)}>
            <img className='mailIcon' src={"/images/header/mail.svg"} alt="mail icon" />
            {user && msgPanel && <Msn msg={user.mensajes}/>}   
            {mensajesNoLeidos && <div className='mailNotification'></div>}       
          </div>
          <div className='notifContainer'>
            <img className='notifIcon' src={"/images/header/notification.svg"} alt="notification icon" />        
          </div>
          {user && 
            /* user first leter */
            <div className='userInitial' onClick={() => setLogout(!logout)}>                      
                <p>{user.nombre.charAt(0).toUpperCase()}</p>  
                {logout && <Logout/>}
            </div>
          }
        </div>       
      </div>  
    </header>
  )
}

export default HeaderMobile