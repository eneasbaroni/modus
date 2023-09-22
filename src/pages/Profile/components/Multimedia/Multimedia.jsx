import { useContext, useState } from 'react'
import './Multimedia.css'
import UserContext from '../../../../context/userContex'

const meses = [ "Enero", "Febrero", "Marzo", "Abril","Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

const mothDate = (date) => {
  const parts = date.split('-')
  return `${meses[parseInt(parts[1]) - 1]}`
}

const formatDate = (date) => {
  const parts = date.split('-')
  return `${parts[0]} de ${meses[parseInt(parts[1]) - 1]} de ${parts[2]}`
}

//funcion para obtener link descargable a partir de un googel drive
const obtenerIDDeLinkDrive = (link) => {
  // Expresión regular para buscar el patrón del ID en el enlace de Google Drive
  const regex = /\/file\/d\/([a-zA-Z0-9_-]+)\//;
  const match = link.match(regex);

  if (match && match.length === 2) {
    console.log('hola');
    return `https://drive.google.com/uc?export=download&id=${match[1]}`    
  } else {
    console.log("No se pudo extraer el ID del enlace de Google Drive.");
    return null;
  }
}


const Multimedia = () => {
  const {user} = useContext (UserContext)
  const [indexInf, setIndexInf] = useState(null)
  const [playing, setPlaying] = useState(false)

  return (
    <div id='multimedia'>
      <div className='titleContainer'>
        <h2>Multimedia</h2>
      </div>
      <div className="multimediaContainer">
        {user.informes.map((file, index) => (
          <div className="fileContainer" key={index} >            
            {indexInf === index ?
              <div className='file fileOpen'>
                <div className="fileInfo">
                  <h3>Análisi de {mothDate(file.fecha)}</h3> 
                  <p>{formatDate(file.fecha)}</p>
                </div>
                <audio controls className={playing ? 'playing' : ''} onPlay={() => setPlaying(!playing)} onPause={() => setPlaying(!playing)}>
                    <source src={obtenerIDDeLinkDrive(file.multimedia)} type="audio/mp3" />
                    Tu navegador no soporta la reproducción de audio.
                </audio>             
                <p className="closeInfo"  onClick={() => setIndexInf(null)}>-</p>
              </div>:
              <div className='file'>
                <p className='textNoOpen'>{formatDate(file.fecha)}</p>
                <img src="./images/profile/inf-arrow.svg" alt="" onClick={() => setIndexInf(index)}/>
              </div>
            }
          </div>          
        ))}
      </div>
    </div>
  )
}

export default Multimedia