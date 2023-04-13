import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import Resume from '../../../../components/Resume/Resume'
import MenuMobile from './MenuMobile'

const HeaderMobile = () => {
  const [menuActive, setMenuActive] = useState(false)
  const [resumeActive, setResumeActive] = useState(false)

  const desactiveResume = () => {
    setResumeActive(false)
  }

  return (
    <header>
      <div className = 'navBar'>
        <Link to="/"> <img className='headerLogo' src={"/images/Logo.svg"} alt="logo" /> </Link>
        {menuActive ? <img className='menuIcon' src={"/images/main/menu_mobile_icon_active.svg"} alt="logo" onClick={() => setMenuActive(!menuActive)}/> : <img className='menuIcon' src={"/images/main/menu_mobile_icon.svg"} alt="logo" onClick={() => setMenuActive(!menuActive)}/>}
        
        {menuActive && <MenuMobile desactive={() => setMenuActive(false)} setResumeActive={() => setResumeActive(!resumeActive)}/>}
       
      </div>
      {resumeActive && <Resume desactive={desactiveResume}/>}
    </header>
  )
}

export default HeaderMobile