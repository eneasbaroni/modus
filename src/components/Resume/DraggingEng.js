import React, { useEffect, useState } from 'react'

const DraggingEng = () => {
  const [opacity, setOpacity] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      setOpacity(1)
    }, 20)
  }, [])



  return (
    <div id='drag' style={{ opacity: opacity }}>      
      <div className='dragContainer'>
        <h3>Drop it here</h3>
        <p>Upload your file by dragging it <br/>in this window</p>
      </div>
    </div>
  )
}

export default DraggingEng
