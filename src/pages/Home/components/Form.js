import './Form.css'
import { useState } from "react";
import axios from 'axios';
import Loader from '../../../components/Loader/Loader';


const Form = () => {
  const [loading, setLoading] = useState(false)
  const [sended, setSended] = useState(false)
  const [error, setError] = useState(false)

  const [user, setUser] = useState({
    nombre:"",
    compania:"",
    correo:"",
    asunto:"",
    mensaje:""    
  }) 

  // Expresiones regulares para los campos del formulario 
  // eslint-disable-next-line
  const emailRegex = /^[\w_\.-]+@[\w\.-]+\.[a-z\.]{2,6}$/i 

  const handleInputChange = (event) => {
    setUser({
      ...user,
      [event.target.name] : event.target.value
    })
  } 

  const sendData = (e) => {

    e.preventDefault();
    
    setError(false)
    if (!emailRegex.test(user.correo)) { 
      setError(true)
      return
    }   

    console.log('user', user);
    setLoading(true)
    if (user.nombre && user.compania && user.correo && user.asunto && user.mensaje) {
      axios.post('https://modus-server.onrender.com/send-contact', user)
        .then(response => {          
          /* resetear formulario */          
          document.getElementById('nombre').value = '';
          document.getElementById('compania').value = '';
          document.getElementById('correo').value = '';
          document.getElementById('asunto').value = '';
          document.getElementById('mensaje').value = '';
          setSended(true)
          setLoading(false)          
        })      
        .catch(error => {
          document.getElementById('nombre').value = '';
          document.getElementById('compania').value = '';
          document.getElementById('correo').value = '';
          document.getElementById('asunto').value = '';
          document.getElementById('mensaje').value = '';  
          setSended(true)        
          setLoading(false)
          console.error('error del server', error);
        });  
    }  
  }

  return (
    <section id="mainForm">
      {loading && <Loader/>}
      <div className="formContainer" id="formulario">

      <div className="iconsContainer">

        <a href="https://www.linkedin.com/in/modus-moderaci%C3%B3n-y-ux-672a30272/" target="_blank" rel="noreferrer" className="linkedin-icon"><p></p></a>
        <a href="https://wa.me/+5493517666737" target="_blank" rel="noreferrer" className="whatsapp-icon"><p></p></a>
        <a href="mailto:contacto@somosmodus.com?Subject=Contacto%20desde%20web" target="_blank" rel="noreferrer" className="mail-icon"><p></p></a>

      </div>


      <form onSubmit={sendData}>
        
        <legend>Tengamos una conversación...</legend>  
        <input type='text'  placeholder='Nombre' name='nombre' id='nombre' onChange={handleInputChange} required></input>        
        <input type='text'  placeholder='Compañía' name='compania' id='compania' onChange={handleInputChange} required></input>
        {error && <p className='error' style={{color: 'red', fontSize: '12px'}}>Correo inválido</p>}
        <input type='email'  placeholder='Correo' name='correo' id='correo' onChange={handleInputChange} required></input>
        <input type='text'  placeholder='Asunto' name='asunto' id='asunto' onChange={handleInputChange} required></input>    
        <textarea  rows='5' cols='33'  placeholder='Mensaje' name='mensaje' id='mensaje' onChange={handleInputChange} required></textarea>
        

        {user.correo && user.nombre  && user.compania  && user.asunto  && user.mensaje ?
        <div className= 'formSubmitControl' onClick={sendData}>
          <p>Enviar</p>          
          <div className={sended ? 'arrowContainer arrowContainerSended' : 'arrowContainer'}><img src="./images/main/form-arrow.svg" alt=""/></div>
        </div> :   
        <div className= 'formSubmitControl disableBtn' >
          <p>Enviar</p>          
          <div className={sended ? 'arrowContainer arrowContainerSended' : 'arrowContainer'}><img src="./images/main/form-arrow.svg" alt=""/></div>
        </div> }
                
      </form>
        

      </div>
    </section>
  )
}

export default Form
