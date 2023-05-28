import { Link } from 'react-router-dom'
import './FooterLinks.css'
import LanguageContext from '../../context/languageContext'
import { useContext, useEffect, useState } from 'react'

const FooterLinks = ({page}) => {
  const {language} = useContext (LanguageContext)
  const [lang, setLang] = useState()  

  useEffect(() => {
    setLang(language)    
  }, [language])

   
  return (
    <secction id='footerLinks'>

        <Link to="/"> <img className='lnkTH' src='./images/main/linkToHome.svg' alt='Link BTN' /></Link>
            {page === "gestionpublica" ?  
                lang === 'esp' ?           
                  <Link to="/sector-privado"><img className='lnkTSP' src='./images/main/linkToSP-01.svg' alt='Link BTN'/></Link> :
                  <Link to="/sector-privado"><img className='lnkTSP' src='./images/main/linkToSP-Eng-01.svg' alt='Link BTN'/></Link> :
                lang === 'esp' ? 
                <Link to="/gestion-publica"><img className='lnkTGP' src='./images/main/linkToGP-01.svg' alt='Link BTN'/></Link> :
                <Link to="/gestion-publica"><img className='lnkTGP' src='./images/main/linkToGP-Eng-01.svg' alt='Link BTN'/></Link> 
            }     
        </secction>
  )
}

export default FooterLinks