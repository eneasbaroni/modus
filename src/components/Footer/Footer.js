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
    if (location.pathname === '/gestion-publica'){
      setColor('yellow')      
    } else {
      setColor('red')
    }
  }, [location])


  return (
    <footer className={color}>
      <img src={color === 'red' ? '/images/footer-logo.svg' : '/images/footer-logo-y.svg'} alt="logo" />      
    </footer>
  )
}

export default Footer