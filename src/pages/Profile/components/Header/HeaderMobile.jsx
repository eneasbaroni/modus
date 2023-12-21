import './Header.css'
import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import MenuMobile from './MenuMobile'
import {UserContext} from '../../../../context/userContex'
import Msn from './Msn'
import Loader from '../../../../components/Loader/Loader'
import axios from 'axios'

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
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (user) {
      if (user.messages.some((mensaje) => !mensaje.leido)) {
        setMensajesNoLeidos(true)
      }
    }   
  }, [user])

  const checkMensajes = async () => {
    if (mensajesNoLeidos === false) {
      setMsgPanel(false)
      return
    }
    setLoading(true)
    axios({
      method: 'put',
      withCredentials: true,
		  url: 'https://modus-server-client.onrender.com/client/message',
      data: {
        username: user.username      
      }
    })
    .then(res => {
      if (res.status === 200) {
        setMensajesNoLeidos(false)
        setMsgPanel(false)
        setLoading(false)
      } else {
        alert ('Error al marcar como leido')
        setMensajesNoLeidos(false)
        setMsgPanel(false)
        setLoading(false)
      }
    })
    .catch(err => {
      alert ('Error al marcar como leido')
      setMensajesNoLeidos(false)
      setMsgPanel(false)
      setLoading(false)
    })
  }  


  const handleMsgPanel = async () => {
    if (msgPanel) {
      await checkMensajes()
      /* setMsgPanel(false) */
    } else {
      setMsgPanel(true)
    }
  }


  return (
    <>
      {loading && <Loader/>}
      <header className='profileHeader'>
        <div className = 'navBar'>
          <Link to="/"> <img className='headerLogo' src={"/images/Logo_red.svg"} alt="logo" /> </Link>
          
        
          <div className='iconsContainer'>
          
            {menuActive && <MenuMobile desactive={() => setMenuActive(false)} setResumeActive={() => setResumeActive(!resumeActive)}/>}
              <div className='mailsContainer' onClick={handleMsgPanel}>
                {user && <img className='mailIcon' src={"/images/header/notification.svg"} alt="mail icon" />}
                {user && msgPanel && <Msn msg={user.messages}/>}   
                {user && mensajesNoLeidos && <div className='mailNotification'></div>}       
              </div>         
              {user && 
                /* user first leter */
                <div className='userInitial' onClick={() => setLogout(!logout)}>                      
                    <p>{user.username.charAt(0).toUpperCase()}</p>  
                    {logout && <Logout/>}
                </div>
              }
            {menuActive ? <img className='menuIcon' src={"/images/main/menu_mobile_icon_active_red.svg"} alt="logo" onClick={() => setMenuActive(!menuActive)}/> : <img className='menuIcon' src={"/images/main/menu_mobile_icon_red.svg"} alt="logo" onClick={() => setMenuActive(!menuActive)}/>}
          </div>       
        </div>  
      </header>
    </>
  )
}

export default HeaderMobile