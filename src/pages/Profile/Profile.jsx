import './Profile.css'
import { useContext } from 'react'
import UserContext from '../../context/userContex'
import Login from './Login'
import Header from './components/Header/Header'
import Welcome from './components/Welcome/Welcome'
import Informes from './components/Informes/Informes'
import Multimedia from './components/Multimedia/Multimedia'
import Estadisticas from './components/Estadisticas/Estadisticas'
import Casos from './components/Casos/Casos'
import HeaderMobile from './components/Header/HeaderMobile'
import useScreenSize from '../../hooks/useScreenSize'

const Profile = () => {
  const {user} = useContext (UserContext)  
  const windowSize = useScreenSize()

  return (
    <main id='profile'>      
      {windowSize.width > 1000 ? <Header/> : <HeaderMobile/>}

      {user ? 
        <>
          <Welcome/>     
          <Informes/> 
          <Multimedia/> 
          <Estadisticas/> 
          <Casos/>
        </> :
        <>
          <Login/>
        </>
      }

    </main>
  )
}

export default Profile