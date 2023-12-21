import { useContext, useEffect, useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Link } from 'react-scroll'
import './Header.css'
import Resume from '../../../../components/Resume/Resume'
import LanguageContext from '../../../../context/languageContext'
import LangSelector from '../../../../components/LangSelector/LangSelector'
import ResumeEng from '../../../../components/Resume/ResumeEng'

const Header = () => {  
  const [resumeActive, setResumeActive] = useState(false)
  const {language} = useContext (LanguageContext)
  const [lang, setLang] = useState()  

  useEffect(() => {
    setLang(language)    
  }, [language])

  const desactiveResume = () => {
    setResumeActive(false)
  }


  return (
    <header className='rojo'>
      <div className = 'navBar'>
        <RouterLink to="/"> <img className='headerLogo' src={"/images/Logo_red.svg"} alt="logo" /> </RouterLink>
        <Link to="why" className="linkedin-icon">{lang === 'esp' ? 'Te impulsamos' : 'We boost you'}</Link>
        <Link to="campana" className="linkedin-icon">{lang === 'esp' ? 'Resolvemos' : 'We solve'}</Link>
        <h3 onClick={() => setResumeActive(!resumeActive)}>{lang === 'esp' ? 'Unite al equipo' : 'Join the team'}</h3>
        <Link to="formulario" className="linkedin-icon">{lang === "esp" ? "Contacto" : "Contact"}</Link>        
      </div>
      <RouterLink to="/profile"> <img className='profileIcon' src={"/images/header/profile-pink.svg"} alt="logo" /> </RouterLink>
      <LangSelector/>
      {resumeActive && lang === 'esp' && <Resume desactive={desactiveResume}/>}
      {resumeActive && lang === 'eng' && <ResumeEng desactive={desactiveResume}/>}
    </header> 
  )
}

export default Header
