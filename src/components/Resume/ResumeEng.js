import { useEffect, useState } from 'react'
import DraggingEng from './DraggingEng'
import './Resume.css'
import axios from 'axios';
import Loader from '../Loader/Loader'
import useScreenSize from '../../hooks/useScreenSize';



const ResumeEng = ({desactive}) => {
  const windowSize = useScreenSize()
  const [opacity, setOpacity] = useState(0)
  const [dragging, setDragging] = useState(false)
  const [selectedFile, setSelectedFile] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const [user, setUser] = useState({
    nombre:"",    
    correo:"",    
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

  const handleFileSelect = (event) => {
  setSelectedFile(event.target.files[0])
  }

  const handleDragOver = (event) => {
    event.preventDefault();
    setDragging(true)    
  }; 

  const handleDrop = (event) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    if (files.length > 0) {
      setSelectedFile(files[0])
    }
    setDragging(false)    
  };  

  const handleSubmit = (e) => {
    e.preventDefault();  

    setError(false)
    if (!emailRegex.test(user.correo)) { 
      setError(true)
      return
    }  

    setLoading(true)
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);
      formData.append('nombre', user.nombre);
      formData.append('correo', user.correo);
      formData.append('mensaje', user.mensaje);
      axios.post('https://modus-server.onrender.com/send-resume', formData)
        .then(response => {
          console.log('respuesta del server', response.data);
          setLoading(false)
          desactive();
        })
        .catch(error => {
          setLoading(false)
          console.error('error del server', error);
          desactive();
        });
    }
  };     

  useEffect(() => {
    setTimeout(() => {
      setOpacity(1)
    }, 20)
  }, [])

  return (
    <>
      {loading && <Loader/>}
      <div className='bluryBg' onClick={desactive}></div>
      <div className='resumeContainer' style={{ opacity: opacity }}>
      <div className='noisy' style={{ opacity: opacity - 0.7 }}></div>
      <div id='resumeContainer' style={{ opacity: opacity }} onDragOver={handleDragOver}  onDrop={handleDrop}>
        <h2>Join the team</h2>
        {!selectedFile && 
          <>
            <img src="/images/main/main_arrow.svg" alt="arrow" />
            {/* <p>Importá tu CV</p> */}
            <div className='note'>
              <p>Apply by importing your resume<br/>in PDF or Word format:</p>
            </div>
          </>
        }
        <form className='resumeForm'>          
          {selectedFile ? (
            <div className="file-upload">
            {/* <div className="file-upload" onClick={() => {document.getElementById('file').click()}}> */}
              <div className='checkResumeContainer'>
                <img src="/images/resume/check.svg" alt="upload" />
                <h3>File uploaded<br/><span>Ready to ship</span></h3>  
              </div>

              
              <input type='text'  placeholder='Name' name='nombre' id='nombre' onChange={handleInputChange} required></input>  
              {error && <p className='error' style={{color: 'red', fontSize: '12px'}}>Invalid mail</p>}
              <input type='email'  placeholder='Mail' name='correo' id='correo' onChange={handleInputChange} required></input>                
              <textarea  rows='5' cols='33'  placeholder='Tell us about yourself ' name='mensaje' id='mensaje' onChange={handleInputChange} required></textarea>  

              {user.correo && user.nombre && user.mensaje ?
              <button type='button' onClick={handleSubmit}>
                <img src="/images/resume/send.svg" alt="send" className='sendImg'/>
              </button>:            
              <button type='button' className='disableBtn'>
                <img src="/images/resume/send.svg" alt="send" className='sendImg'/>
              </button> }           
            </div>
          ) : (
            <>
              <label htmlFor="file">
                <img src="/images/resume/add.svg" alt="upload" className='addImg' />
                {windowSize.width > 768 ? <h3>Upload file<br/><span>or select a folder</span></h3> : <h3>Upload file</h3>}
                
              </label>
              <input type="file" id="file" name="file" accept=".pdf,.doc,.docx" onChange={handleFileSelect} style={{ display: 'none' }} />
            </>
          )}
        </form>  

        {dragging  &&  <DraggingEng/>} 

      </div>      
      </div>
    </>
  )
}

export default ResumeEng
