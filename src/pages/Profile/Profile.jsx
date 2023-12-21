import './Profile.css'
import { useContext } from 'react'
import {UserContext} from '../../context/userContex'
import Login from './Login'
import Header from './components/Header/Header'
import Welcome from './components/Welcome/Welcome'
import Informes from './components/Informes/Informes'
import Multimedia from './components/Multimedia/Multimedia'
import Estadisticas from './components/Estadisticas/Estadisticas'
import Casos from './components/Casos/Casos'
import HeaderMobile from './components/Header/HeaderMobile'
import useScreenSize from '../../hooks/useScreenSize'
import { Link } from 'react-router-dom'

const Profile = () => {
  const {user} = useContext (UserContext)  
  const windowSize = useScreenSize()

  return (
    <main id='profile'>      
      {windowSize.width > 1000 ? <Header/> : <HeaderMobile/>}

      {user ? 
        <>
          {user.username !== 'ModusAdmin' ?
            <>
              <Welcome/>
              <Informes/> 
              <Multimedia/>
              <Estadisticas/>
              <Casos/>              
            </>:
            <div id='noAccesContainer'>
              <h1>Acceso Denegado</h1>
              <p className='noAdminText'>El administrador no tiene permiso para acceder al panel de usuario</p>      
              <Link to='/'><button className='backButton backButtonB'>Ir a Home</button>  </Link>    
              <Link to='/admin'><button className='backButton'>Ir a Panel Administrador</button></Link> 
            </div>
          }
        </> :
        <>
          <Login/>
        </>
      }

    </main>
  )
}

export default Profile