import './Casos.css'
import casos from '../../../../data/casos'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import Loader from '../../../../components/Loader/Loader';

const meses = [ "Enero", "Febrero", "Marzo", "Abril","Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

const formatDate = (date) => {
  const parts = date.split('-')
  return `${parts[0]} de ${meses[parseInt(parts[1]) - 1]} de ${parts[2]}`
}

const mothDate = (date) => {
  const parts = date.split('-')
  return `${meses[parseInt(parts[1]) - 1]}`
}

//funcion para obtener en enlace directo a una imagen
const obtenerImg = (link) => {
  // Expresión regular para buscar el patrón del ID en el enlace de Google Drive
  const regex = /\/file\/d\/([a-zA-Z0-9_-]+)\//;
  const match = link.match(regex);

  if (match && match.length === 2) {   
    console.log('hola'); 
    return `https://drive.google.com/uc?id=${match[1]}`    
  } else {
    console.log("No se pudo extraer el ID del enlace de Google Drive.");
    return null;
  }
}

const Casos = () => {  
  const [indexInf, setIndexInf] = useState(null)
  const [casosArr, setCasosArr] = useState()
  const [imgOpening, setImgOpening] = useState(false)
  const [caseOpen, setCaseOpen] = useState()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    //reemplazar por logica de Base de datos en la nube
    setCasosArr(casos)
  }, [])

  const handleOpenImg = (url) => {
    if (!imgOpening) {
    setLoading(true)
    setCaseOpen(obtenerImg(url))
    setImgOpening(true)
    }  
  }

  const handleCloseImg = () => {
    setImgOpening(false)    
  }

  //escuchar la tecla esc y cerrar imagen 
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        handleCloseImg()
      }
    }
    window.addEventListener('keydown', handleEsc)
    return () => {
      window.removeEventListener('keydown', handleEsc)
    }
  }, [])

 


  return (
    <div id='casos'>
      <div className='titleContainer'>
        <h2>Casos de éxito</h2>
      </div>
      <div className="casosContainer">
        {casosArr &&
        casosArr.map((caso, index) => (
          <div className="casoContainer" key={index} >
            <div className='caso'>
              {indexInf === index ?
                <>
                  <img className='graphImg' src="./images/profile/star.svg" alt="estrella"></img>
                  <div className='casoOpen'>
                    <h3>Caso mes de {mothDate(caso.fecha)}</h3>
                    <p>{formatDate(caso.fecha)}</p>

                    <div className="linkContainer" onClick={ () => handleOpenImg(caso.url)}>:                                            
                                                                
                      <p>VER</p>                    
                      {imgOpening &&
                        <>
                        {loading ?
                          <>
                            <Loader/>
                            <img src={caseOpen} alt="caso de éxitooooo" style={{opacity: 0}} onLoad={() => setLoading(false)}/>
                          </>:
                          <>
                            <div className='imgContainer'>
                              <img src={caseOpen} alt="caso de éxito"  onClick={handleCloseImg}/>                                                        
                            </div>
                          </>
                        }
                        </>
                      }                       
                    </div>
                  </div>
                </>:
                <p className='textNoOpen'>{formatDate(caso.fecha)}</p> 
              }
              {indexInf === index ?
                <p className="closeInfo"  onClick={() => setIndexInf(null)}>-</p>:              
                <img src="./images/profile/inf-arrow.svg" alt="" onClick={() => setIndexInf(index)}/>}
            </div>
          </div>
        ))}        
      </div>      
      
      <div className='mainLinksContainer'>
          <Link to="/"> <img className='lnkTH' src='./images/main/linkToHome.svg' alt='Link BTN' /></Link>
          <Link className='mainLinks linktoGP' to='/gestion-publica'>Sector público</Link>
          <Link className='mainLinks linktoSP' to='/sector-privado'>Sector privado</Link>
      </div>
    </div>
  )
}

export default Casos