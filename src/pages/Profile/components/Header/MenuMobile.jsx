import './Header.css'

const MenuMobile = ({desactive}) => {
  
  return (
    <>
      {/* <div className="menuMobile__background" onClick={desactive}></div> */}
      <div className="menuMobile">
        <a href="#informes" className="linkedin-icon topLink" onClick={desactive}>Informes</a>
        <a href="#multimedia" className="linkedin-icon" onClick={desactive}>Multimedia</a>
        <a href="#estadisticas" className="linkedin-icon" onClick={desactive}>Estadisticas</a>
        <a href="#casos" className="linkedin-icon btnLink" onClick={desactive}>Casos</a>       
      </div>
    </>
  )
}

export default MenuMobile