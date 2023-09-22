const Msn = ({msg}) => {
  return (
    <div id="userMsn">
      {/* un p por cada msg */}
      {msg.map((msn) => (
        <div className="msgContainer" key={msn.fecha}>
          {msn.leido ? 
            <>
              <div className="msgPointer">
                <div className="msgPointerFalse"></div>
              </div>
              <div className="msgText">
                <p className="msgTextfalse">{msn.mensaje}</p>
              </div>
            </>:
            <>
              <div className="msgPointer">
                <div></div>
              </div>
              <div className="msgText">
                <p>{msn.mensaje}</p>
              </div>
            </> 
          }
        </div>
        ))}
    </div>
  )
}

export default Msn