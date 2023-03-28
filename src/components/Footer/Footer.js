import './Footer.css'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'

const Footer = () => {
  const [color, setColor] = useState('red')
  /* dectectar path coun react router */

  const location = useLocation()
  useEffect (() => {
    console.log(location.pathname)
    if (location.pathname === '/'){
      setColor('red') 
    } else if (location.pathname === '/sector-privado'){
      setColor('redish')     
    } else {
      setColor('yellow')
    }
  }, [location])


  return (
    <footer className={color}>
      <img src={color === 'red' ? '/images/footer-logo.svg' 
      : color === 'redish' ? '/images/footer-logo.svg' 
      : '/images/footer-logo-y.svg'} alt="logo" />      
    </footer>
  )
}

export default Footer