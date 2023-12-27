import './SharedFolder.css'
import { useContext, useEffect, useState } from 'react'
import {UserContext} from '../../../../context/userContex'

const SharedFolder = () => {
  const {user} = useContext (UserContext)
  const [folder, setFolder] = useState(null)  

  useEffect(() => {
    //verificar si en alguno de los reportes tiene carpeta compartida
    if (user){
      if(user.reports){
        for (let i = 0; i < user.reports.length; i++) {
          if(user.reports[i].carpeta){
            setFolder(user.reports[i].carpeta)
            break
          }
        }
      }   
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])


  
  return (
    <div id='estadisticas'>      
      <div className='titleContainer'>
        <h2>Carpeta Compartida</h2>
      </div>
      <div className="grafContainer">

      <div className="graficoContainer" >
            <div className='grafico'>
            <img className='graphImg' src="https://cdn-icons-png.flaticon.com/512/5994/5994710.png" alt="grafico torta"></img>
                  <div className='graficoOpen'>
                    <h3>Carpeta compartida</h3>
                    <a className='linkContainer graphLink' href={folder} target="_blank" rel="noreferrer">
                      <p>ACCEDER</p>
                    </a>  
                  </div>
            </div>
        </div>
        
      </div>
    </div>
  )
}

export default SharedFolder