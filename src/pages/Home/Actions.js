const Actions = () => {
  return (
    <section id="actions">
      <div className='mainActionsContainer' >

        <div className='mainAction'>
          <div className='imagesContainer'>
            <img className='imgActive' src='./images/main/main_action_01_active.svg' alt='soluciones'/>
            <img src='./images/main/main_action_01.svg' alt='soluciones'/>
          </div>
          <h3><span>Conversá</span> con tus<br/>audiencias.</h3>
        </div>
        <div className='mainAction'>
          <div className='imagesContainer'>
            <img className='imgActive' src='./images/main/main_action_02_active.svg' alt='soluciones'/>
            <img src='./images/main/main_action_02.svg' alt='soluciones'/>
          </div>
          <h3>Creá una<br/><span>audiencias</span>.</h3>
        </div>
        <div className='mainAction'>
          <div className='imagesContainer'>
            <img className='imgActive' src='./images/main/main_action_03_active.svg' alt='soluciones'/>
            <img src='./images/main/main_action_03.svg' alt='soluciones'/>
          </div>
          <h3><span>Personas reales</span><br/>gestionando la relación<br/>de tu marca con haters<br/>y seguidores.</h3>
        </div>
        <div className='mainAction'>
          <div className='imagesContainer'>
            <img className='imgActive' src='./images/main/main_action_04_active.svg' alt='soluciones'/>
            <img src='./images/main/main_action_04.svg' alt='soluciones'/>
          </div>
          <h3><span>Con recién llegados</span><br/>a tu comunidad y con<br/>los miembros <span>más fieles</span><br/>de ella. </h3>
        </div>

      </div>
    </section>
  )
}

export default Actions