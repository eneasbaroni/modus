import './Header.css'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
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

const HeaderMobile = () => {
  const {user} = useContext (UserContext)
  const [logout, setLogout] = useState(false) 


  return (
    <header className='profileHeader'>
      <div className = 'navBar'>
        <Link to="/"> <img className='headerLogo' src={"/images/Logo_red.svg"} alt="logo" /> </Link>
        
       
        <div className='iconsContainer'>
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