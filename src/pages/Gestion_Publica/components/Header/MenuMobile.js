const MenuMobile = ({desactive, setResumeActive}) => {
  return (
    <>
      <div className="menuMobile__background" onClick={desactive}></div>
      <div className="menuMobile">
        <a href="#why" className="linkedin-icon" onClick={desactive}>¿Por qué Modus?</a>
        <a href="#campana" className="linkedin-icon" onClick={desactive}>Te conectamos</a>
        <h3 onClick={setResumeActive}>Unite al equipo</h3>
        <a href="#formulario" className="linkedin-icon" onClick={desactive}>Contacto</a>
      </div>
    </>
  )
}

export default MenuMobile