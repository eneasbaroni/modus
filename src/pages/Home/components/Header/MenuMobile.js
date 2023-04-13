const MenuMobile = ({desactive, setResumeActive}) => {
  return (
    <div className="menuMobile">      

      <a href="#actions" className="linkedin-icon" onClick={desactive}>Soluciones</a>
      <a href="#style" className="linkedin-icon" onClick={desactive}>¿Por qué Modus?</a>
      <a href="#formulario" className="linkedin-icon" onClick={desactive}>Contacto</a>
      <h3 onClick={setResumeActive}>Unite al equipo</h3>
      
    </div>
  )
}

export default MenuMobile