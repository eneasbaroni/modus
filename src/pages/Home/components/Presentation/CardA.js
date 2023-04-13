import useScreenSize from '../../../../hooks/useScreenSize'
import './CardA.css'

const CardA = () => {
  const windowSize = useScreenSize()

  /* funcion para afectar a los divs adyacentes */
  /* gruilla 15 x 6 */
  const addHovered = (e) => {
    const id = e.target.id
    const patron = document.getElementById(id)
    if (windowSize.width > 768) {
      const patronPrev = document.getElementById(parseInt(id) - 1)
      const patronNext = document.getElementById(parseInt(id) + 1)
      const patronUp = document.getElementById(parseInt(id) - 15)
      const patronDown = document.getElementById(parseInt(id) + 15)
      const patronUpLeft = document.getElementById(parseInt(id) - 16)
      const patronUpRight = document.getElementById(parseInt(id) - 14)
      const patronDownLeft = document.getElementById(parseInt(id) + 14)
      const patronDownRight = document.getElementById(parseInt(id) + 16)
      patron.className = 'patron hovered'
      patronPrev.className = 'patron hovered'
      patronNext.className = 'patron hovered'
      patronUp.className = 'patron hovered'
      patronDown.className = 'patron hovered'
      patronUpLeft.className = 'patron hovered'
      patronUpRight.className = 'patron hovered'
      patronDownLeft.className = 'patron hovered'
      patronDownRight.className = 'patron hovered' 
    }else{
      const patronPrev = document.getElementById(parseInt(id) - 1)
      const patronNext = document.getElementById(parseInt(id) + 1)
      const patronUp = document.getElementById(parseInt(id) - 6)
      const patronDown = document.getElementById(parseInt(id) + 6)
      const patronUpLeft = document.getElementById(parseInt(id) - 7)
      const patronUpRight = document.getElementById(parseInt(id) - 5)
      const patronDownLeft = document.getElementById(parseInt(id) + 5)
      const patronDownRight = document.getElementById(parseInt(id) + 7)
      patron.className = 'patron hovered'
      patronPrev.className = 'patron hovered'
      patronNext.className = 'patron hovered'
      patronUp.className = 'patron hovered'
      patronDown.className = 'patron hovered'
      patronUpLeft.className = 'patron hovered'
      patronUpRight.className = 'patron hovered'
      patronDownLeft.className = 'patron hovered'
      patronDownRight.className = 'patron hovered' 
    }   
  }

  const deleteHovered = (e) => {
    const id = e.target.id
    const patron = document.getElementById(id)
    if (windowSize.width > 768) {
      const patronPrev = document.getElementById(parseInt(id) - 1)
      const patronNext = document.getElementById(parseInt(id) + 1)
      const patronUp = document.getElementById(parseInt(id) - 15)
      const patronDown = document.getElementById(parseInt(id) + 15)
      const patronUpLeft = document.getElementById(parseInt(id) - 16)
      const patronUpRight = document.getElementById(parseInt(id) - 14)
      const patronDownLeft = document.getElementById(parseInt(id) + 14)
      const patronDownRight = document.getElementById(parseInt(id) + 16)
      patron.className = 'patron'
      patronPrev.className = 'patron'
      patronNext.className = 'patron'
      patronUp.className = 'patron'
      patronDown.className = 'patron'
      patronUpLeft.className = 'patron'
      patronUpRight.className = 'patron'
      patronDownLeft.className = 'patron'
      patronDownRight.className = 'patron'
    }else{
      const patronPrev = document.getElementById(parseInt(id) - 1)
      const patronNext = document.getElementById(parseInt(id) + 1)
      const patronUp = document.getElementById(parseInt(id) - 6)
      const patronDown = document.getElementById(parseInt(id) + 6)
      const patronUpLeft = document.getElementById(parseInt(id) - 7)
      const patronUpRight = document.getElementById(parseInt(id) - 5)
      const patronDownLeft = document.getElementById(parseInt(id) + 5)
      const patronDownRight = document.getElementById(parseInt(id) + 7)
      patron.className = 'patron'
      patronPrev.className = 'patron'
      patronNext.className = 'patron'
      patronUp.className = 'patron'
      patronDown.className = 'patron'
      patronUpLeft.className = 'patron'
      patronUpRight.className = 'patron'
      patronDownLeft.className = 'patron'
      patronDownRight.className = 'patron'

    }
  }
 
  
  return (
    <div className='placaContainer'>
      <div className='placa'>
        <h1>¿De qué sirve<br/>tener redes sociales<br/><span>si no vas a socializar?</span></h1>
        <div className='patronContainer'>    
          {[...Array(90)].map((e, i) => <div key={i} id={i} className='patron' onMouseEnter={addHovered} onMouseLeave={deleteHovered}><div></div></div>)}
        </div>
        <div className='gradientBG'></div>
        
      </div>
    </div>
  )
}

export default CardA
