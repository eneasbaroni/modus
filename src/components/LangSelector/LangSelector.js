import './LangSelector.css'
import LanguageContext from '../../context/languageContext'
import { useContext, useEffect, useState } from 'react'

const LangSelector = () => {
  const {language, handleLanguage} = useContext (LanguageContext)
  const [lang, setLang] = useState()   

  useEffect(() => {
    setLang(language)    
  }, [language])


  return (
    <div id='langSelector'>
      <img onClick={() => handleLanguage("esp")} className={lang === "eng" ? "inactived" : ""} src="./images/main/flags-01.svg" alt=""/>
      <img onClick={() => handleLanguage("eng")} className={lang === "esp" ? "inactived" : ""} src="./images/main/flags-02.svg" alt=""/>      
    </div>
  )
}

export default LangSelector