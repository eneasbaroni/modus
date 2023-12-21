import { useContext, useState } from 'react'
import './Informes.css'
import {UserContext} from '../../../../context/userContex'

const meses = [ "Enero", "Febrero", "Marzo", "Abril","Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

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


const Informes = () => {
  const {user} = useContext (UserContext) 
  const [indexInf, setIndexInf] = useState(null)
  const [imgLoaded, setImgLoaded] = useState(false)


  return (
    <div id='informes'>
      <div className="circleInforme"></div>
      <div className='titleContainer'>
        <h2>Informes</h2>
      </div>
      <div className="informesContainer">
        {/* Si no hay informes */}
        {user.reports && user.reports.length === 0 && 
        <div className="informeContainer">
          <div className='informe'>
            <p className='textNoOpen'>No existen informes</p>
          </div>
        </div>}
        {/* Mapeo de Informes */}
        {user.reports.map((informe, index) => (          
          <div className="informeContainer" key={index} >
            <div className='informe'>
              {indexInf === index ?
                /* Informe Abierto */
                <div className='informeOpen'>
                  <h3>Informe {user.nombre}</h3>
                  <p>{formatDate(informe.fecha)}</p>
                  <a className='linkContainer' href={informe.informe} target="_blank" rel="noreferrer">
                    {imgLoaded && <p>ABRIR</p>}
                    <img className='informeLink' src="./images/profile/link-Informe.svg" alt="Link" onLoad={ () => setImgLoaded(true)}/>
                  </a>
                  <a className='downloadContainer' href={ obtenerIDDeLinkDrive(informe.informe)} download>
                    <img className='informeDonwload' src="./images/profile/download.svg" alt="Link" />
                  </a>
                </div>:
                /* Informe Cerrado */
                <p className='textNoOpen'>{formatDate(informe.fecha)}</p> 
              }
              {indexInf === index ?
                <p className="closeInfo"  onClick={() => setIndexInf(null)}>-</p>:              
                <img src="./images/profile/inf-arrow.svg" alt="" onClick={() => setIndexInf(index)}/>}
            </div>
          </div>
        ))}        
      </div>
    </div>
  )
}

export default Informes