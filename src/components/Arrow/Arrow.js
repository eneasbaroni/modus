import './Arrow.css'
const Arrow = () => {

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div className='upArrowContainer' onClick={scrollUp}>
      <img className='upArrow' src='./images/main/main_arrow.svg' alt='up arrow' />
    </div>
  )
}

export default Arrow