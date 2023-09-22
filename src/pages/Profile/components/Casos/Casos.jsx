import './Casos.css'
import casos from '../../../../data/casos'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

const meses = [ "Enero", "Febrero", "Marzo", "Abril","Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

const formatDate = (date) => {
  const parts = date.split('-')
  return `${parts[0]} de ${meses[parseInt(parts[1]) - 1]} de ${parts[2]}`
}

const mothDate = (date) => {
  const parts = date.split('-')
  return `${meses[parseInt(parts[1]) - 1]}`
}

const Casos = () => {  
  const [indexInf, setIndexInf] = useState(null)
  const [casosArr, setCasosArr] = useState()

  useEffect(() => {
    //reemplazar por logica de Base de datos en la nube
    setCasosArr(casos)
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
                    <a className='linkContainer casoLink' href={caso.url} target="_blank" rel="noreferrer">
                      <p>VER</p>
                    </a>  
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