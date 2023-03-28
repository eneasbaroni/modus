import React, { useEffect, useState } from 'react'

const Dragging = () => {
  const [opacity, setOpacity] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      setOpacity(1)
    }, 20)
  }, [])



  return (
    <div id='drag' style={{ opacity: opacity }}> 
      /*<div className='noisy-2'></div>*/
      <div className='dragContainer'>
        <h3>Soltalo acá</h3>
        <p>Subí tu archivo arrastrándolo <br/>a esta ventana</p>
      </div>
    </div>
  )
}

export default Dragging
