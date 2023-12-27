import './Profile.css'
import { useContext, useEffect, useState } from 'react'
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
import SharedFolder from './components/SharedFolder/SharedFolder'
import Loader from '../../components/Loader/Loader'

const Profile = () => {
  const {user, userLoading} = useContext (UserContext) 
  const [folder, setFolder] = useState(false) 
  const windowSize = useScreenSize()

  useEffect(() => {
    //verificar si en alguno de los reportes tiene carpeta compartida
    if (user){
      if(user.reports){
        for (let i = 0; i < user.reports.length; i++) {
          if(user.reports[i].carpeta){
            setFolder(true)
            break
          }
        }
      }   
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])
  

  return (
    <main id='profile'>   
      {userLoading && <Loader/>}   
      {windowSize.width > 1000 ? <Header/> : <HeaderMobile/>}

      {user ? 
        <>
          {user.username !== 'ModusAdmin' ?
            <>
              <Welcome/>
              <Informes/> 
              <Multimedia/>
              <Estadisticas/>
              {folder && <SharedFolder/>}           
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