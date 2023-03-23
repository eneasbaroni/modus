import { useState } from "react";


const Form = () => {

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
  }

  return (
    <section id="mainForm">
      <div className="formContainer">

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

        {/* <div class="inputGroup">
          <div class="input-card">
            <div class="input-content">              
                <input type='text'  placeholder='Nombre' name='nombre' id='nombre' onChange={handleInputChange} required></input>        
            </div>
          </div>            
        </div>

        <div class="inputGroup">
          <div class="input-card">
            <div class="input-content">              
            <input type='text'  placeholder='Asunto' name='asunto' id='asunto' onChange={handleInputChange} required></input>    
            </div>
          </div>            
        </div>

        <div class="textareaGroup">
          <div class="input-card">
            <div class="input-content">              
            <textarea  rows='5' cols='33'  placeholder='Mensaje' name='mensaje' id='mensaje' onChange={handleInputChange} required></textarea>        
            </div>
          </div>            
        </div> */}

        <input type="submit" value="Enviar" className="submitBtn"></input>
       
                
      </form>
        

      </div>
    </section>
  )
}

export default Form
