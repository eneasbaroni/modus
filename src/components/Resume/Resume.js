import { useEffect, useState } from 'react'
import Dragging from './Dragging'
import './Resume.css'
import axios from 'axios';
import Loader from '../Loader/Loader'



const Resume = ({desactive}) => {
  const [opacity, setOpacity] = useState(0)
  const [dragging, setDragging] = useState(false)
  const [selectedFile, setSelectedFile] = useState(null)
  const [loading, setLoading] = useState(false)

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


 /*  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Nombre del archivo:", selectedFile.name)
    console.log("Tipo del archivo:", selectedFile.type);
    console.log("Tamaño del archivo:", selectedFile.size);
    desactive()    
    return false
  } */

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);
      axios.post('http://localhost:8000/send-email', formData)
        .then(response => {
          console.log(response.data);
          setLoading(false)
          desactive();
        })
        .catch(error => {
          setLoading(false)
          console.error(error);
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
      <div className='noisy' style={{ opacity: opacity - 0.7 }}></div>
      <div id='resumeContainer' style={{ opacity: opacity }} onDragOver={handleDragOver}  onDrop={handleDrop}>
        <h2>Unite al equipo</h2>
        <img src="/images/main/main_arrow.svg" alt="arrow" />
        <p>Importá tu CV</p>
        <div className='note'>
          <p>Postulate importando tu currículum<br/>en formato PDF o Word:</p>
        </div>
        <form>          
          {selectedFile ? (
            <div className="file-upload">
            {/* <div className="file-upload" onClick={() => {document.getElementById('file').click()}}> */}
              <img src="/images/resume/check.svg" alt="upload" />
              <h3>Archivo cargado<br/><span>Listo para enviar</span></h3>  
              <button type='button' onClick={handleSubmit}>
                <img src="/images/resume/send.svg" alt="send" className='sendImg'/>
              </button>            
            </div>
          ) : (
            <>
              <label htmlFor="file">
                <img src="/images/resume/add.svg" alt="upload" className='addImg' />
                <h3>Subir archivo<br/><span>o selecciona una carpeta</span></h3>
              </label>
              <input type="file" id="file" name="file" accept=".pdf,.doc,.docx" onChange={handleFileSelect} style={{ display: 'none' }} />
            </>
          )}
        </form>  

        {dragging  &&  <Dragging/>} 

      </div>
    </>
  )
}

export default Resume
