import { useContext, useEffect, useState } from 'react'
import './Header.css'
import { Link as RouterLink } from 'react-router-dom'
import { Link } from 'react-scroll'
import {UserContext} from '../../../../context/userContex'
import Msn from './Msn'
import axios from 'axios'
import Loader from '../../../../components/Loader/Loader'

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
		  url: 'https://modus-server-sjng.onrender.com/client/message',
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
          <RouterLink to="/"> <img className='headerLogo' src={"/images/Logo_red.svg"} alt="logo" /> </RouterLink>
          <Link to="informes" className="linkedin-icon">Informes</Link>
          <Link to="multimedia" className="linkedin-icon">Multimedia</Link>
          <Link to="estadisticas" className="linkedin-icon">Estadísticas</Link>
          <Link to="casos" className="linkedin-icon">Caso de éxito</Link>               
        </div>
        <div className='iconsContainer'>
          <div className='mailsContainer' onClick={handleMsgPanel}>
            {user && <img className='mailIcon' src={"/images/header/notification.svg"} alt="mail icon" />}
            {user && msgPanel && <Msn msg={user.messages}/>}   
            {user && mensajesNoLeidos && <div className='mailNotification'></div>}       
          </div>
          {/* <div className='notifContainer'>
            <img className='notifIcon' src={"/images/header/notification.svg"} alt="notification icon" />        
          </div> */}
          {user && 
            /* user first leter */
            <div className='userInitial' onClick={() => setLogout(!logout)}>                      
                <p>{user.username.charAt(0).toUpperCase()}</p>  
                {logout && <Logout/>}
            </div>
          }
        </div>

      </header>
    </>
  )
}

export default Header