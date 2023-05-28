import { useContext, useEffect, useState } from "react"
import LanguageContext from "../../../../context/languageContext"

const MenuMobile = ({desactive, setResumeActive}) => {
  const {language} = useContext (LanguageContext)
  const [lang, setLang] = useState()  

  useEffect(() => {
    setLang(language)    
  }, [language])

  return (
    <>
      <div className="menuMobile__background" onClick={desactive}></div>
      <div className="menuMobile">
        <a href="#why" className="linkedin-icon" onClick={desactive}>{lang === 'esp' ? '¿Por qué Modus?' : 'Why Modus?'}</a>
        <a href="#campana" className="linkedin-icon" onClick={desactive}>{lang === 'esp' ? 'Te conectamos' : 'We connect you'}</a>
        <h3 onClick={setResumeActive}>{lang === 'esp' ? 'Unite al equipo' : 'Join the team'}</h3>
        <a href="#formulario" className="linkedin-icon" onClick={desactive}>{lang === 'esp' ? 'Contacto' : 'Contact'}</a>
      </div>
    </>
  )
}

export default MenuMobile