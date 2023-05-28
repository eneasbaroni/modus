import { useContext, useEffect, useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Link } from 'react-scroll'
import './Header.css'
import Resume from '../../../../components/Resume/Resume'
import LangSelector from '../../../../components/LangSelector/LangSelector'
import LanguageContext from '../../../../context/languageContext'
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
    <header>
      <div className = 'navBar'>
        <RouterLink to="/"> <img className='headerLogo' src={"/images/Logo.svg"} alt="logo" /> </RouterLink> 
        <Link to='actions' className="linkedin-icon"> {lang === "esp" ? "Soluciones" : "Solutions"}</Link>          
        <Link to='style' className="linkedin-icon"> {lang === "esp" ? "¿Por qué Modus?" : "Why Modus?"}</Link>      
        <Link to='formulario' className="linkedin-icon"> {lang === "esp" ? "Contacto" : "Contact"}</Link>       
        <h3 onClick={() => setResumeActive(!resumeActive)}> {lang === "esp" ? "Unite al equipo" : "Join the team"}</h3>
      </div>
      <LangSelector />
      {resumeActive && lang === 'esp' && <Resume desactive={desactiveResume}/>}
      {resumeActive && lang === 'eng' && <ResumeEng desactive={desactiveResume}/>}
      
    </header>
  )
}

export default Header
