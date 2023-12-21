import { useContext, useState } from 'react'
import './Header.css'
import { Link as RouterLink } from 'react-router-dom'
import {UserContext} from '../../../../context/userContex'


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
  const [logout, setLogout] = useState(false)

  return (
    <header className='profileHeader'>

      <div className = 'navBar'>
        <RouterLink to="/"> <img className='headerLogo' src={"/images/Logo_red.svg"} alt="logo" /> </RouterLink>                 
      </div>
      <div className='iconsContainer'>      
        {user && 
          /* user first leter */
          <div className='userInitial' onClick={() => setLogout(!logout)}>                      
              <p>{user.username.charAt(0).toUpperCase()}</p>  
              {logout && <Logout/>}
          </div>
        }
      </div>

    </header>
  )
}

export default Header