import { useEffect, useState } from "react"

const Msn = ({msg}) => {
  const [mensajes, setMensajes] = useState([])

  useEffect(() => {
    if (msg) {
      setMensajes(msg.filter((msn) => msn.leido === false))
    }
  },[msg])

  return (
    <div id="userMsn">
      {/* un p por cada msg */}
      {mensajes.length === 0 &&
        <div className="msgContainer">
          <div className="msgPointer">
                <div></div>
              </div>
              <div className="msgText">
                <p>No hay mensajes Nuevos</p>
              </div>
        </div>

      }
      {mensajes.map((msn) => (
        <div className="msgContainer" key={msn.date}>
          {!msn.leido &&            
            <>
              <div className="msgPointer">
                <div></div>
              </div>
              <div className="msgText">
                <p>{msn.message}</p>
              </div>
            </> 
          }
        </div>
        ))}
    </div>
  )
}

export default Msn