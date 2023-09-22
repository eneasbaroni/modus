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

const Profile = () => {
  const {user} = useContext (UserContext)  

  return (
    <main id='profile'>
      <Header/>
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