import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import './Arrow.css'
const Arrow = () => {

  const [url, setUrl] = useState()
  const location = useLocation()

  useEffect(() => {
    setUrl(location.pathname)
  }, [location])
    

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  
  return (
    <div className={url === '/profile' ? 'upArrowContainer profileArrow' : 'upArrowContainer'} onClick={scrollUp}>
      {/* <img className='upArrow' src='./images/main/form-arrow.svg' alt='up arrow' /> */}
      <img className='upArrow' src='/images/main/form-arrow.svg' alt='up arrow' />
    </div>
  )
}

export default Arrow