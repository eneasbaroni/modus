import './Estadisticas.css'
import { useContext, useState } from 'react'
import {UserContext} from '../../../../context/userContex'

/* const meses = [ "Enero", "Febrero", "Marzo", "Abril","Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

const formatDate = (date) => {
  const parts = date.split('-')
  return `${parts[0]} de ${meses[parseInt(parts[1]) - 1]} de ${parts[2]}`
}

const mothDate = (date) => {
  const parts = date.split('-')
  return `${meses[parseInt(parts[1]) - 1]}`
} */

const Estadisticas = () => {
  const {user} = useContext (UserContext) 
  const [indexInf, setIndexInf] = useState(null)

  
  return (
    <div id='estadisticas'>      
      <div className='titleContainer'>
        <h2>Estadísticas</h2>
      </div>
      <div className="grafContainer">
        {/* Si no hay informes */}
        {user.reports && user.reports.length === 0 && 
        <div className="graficoContainer">
          <div className='grafico'>
            <p className='textNoOpen'>No existen informes</p>
          </div>
        </div>}
        {user.reports.map((grafico, index) => (
          <div className="graficoContainer" key={index} >
            <div className='grafico'>
              {indexInf === index ?
                /* Informe Abierto */
                <>
                  <img className='graphImg' src="./images/profile/grafico.svg" alt="grafico torta"></img>
                  <div className='graficoOpen'>
                    <h3>Rendimiento</h3>
                    <p>{grafico.nombre}</p>
                    <a className='linkContainer graphLink' href={grafico.grafico} target="_blank" rel="noreferrer">
                      <p>VER</p>
                    </a>  
                  </div>
                </>:
                /* Informe Cerrado */
                <p className='textNoOpen'>{grafico.nombre}</p> 
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

export default Estadisticas