import { useState } from "react";
import './Form.css'


const Form = () => {
  const [sended, setSended] = useState(false)

  const [user, setUser] = useState({
    nombre:"",
    asunto:"",
    mensaje:""    
  }) 

  const handleInputChange = (event) => {
    setUser({
      ...user,
      [event.target.name] : event.target.value
    })
  } 

  const sendData = (e) => {
    e.preventDefault();
    console.log(user);
    setSended(true);
  }

  return (
    <section id="redForm">
      <div className="formContainer" id="formulario">

      <div className="iconsContainer">

        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="linkedin-icon"><p></p></a>
        <a href="https://www.whatsapp.com/" target="_blank" rel="noreferrer" className="whatsapp-icon"><p></p></a>
        <a href="https://www.gmail.com/" target="_blank" rel="noreferrer" className="mail-icon"><p></p></a>

      </div>


      <form onSubmit={sendData}>
        
        <legend>Tengamos una conversación...</legend>  
        <input type='text'  placeholder='Nombre' name='nombre' id='nombre' onChange={handleInputChange} required></input>        
        <input type='text'  placeholder='Asunto' name='asunto' id='asunto' onChange={handleInputChange} required></input>    
        <textarea  rows='5' cols='33'  placeholder='Mensaje' name='mensaje' id='mensaje' onChange={handleInputChange} required></textarea>        
      
        <div className= 'formSubmitControl' onClick={sendData}>
          <p>Enviar</p>
          <div className={sended ? 'arrowContainer arrowContainerSended' : 'arrowContainer'}><img src="./images/main/form-arrow.svg" alt=""/></div>
        </div> 
       
                
      </form>
        

      </div>
    </section>
  )
}

export default Form