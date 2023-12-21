import { useContext, useEffect, useState } from 'react'
import './Welcome.css'
import {UserContext} from '../../../../context/userContex'
import useScreenSize from '../../../../hooks/useScreenSize'

const Welcome = () => {
  const windowSize = useScreenSize()
  const [scrollY, setScrollY] = useState()
  const {user} = useContext (UserContext)

  /* detectar posicion scrol y */
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Agregar un evento de escucha para el evento scroll cuando el componente se monta.
    window.addEventListener('scroll', handleScroll);

    // Eliminar el evento de escucha cuando el componente se desmonta.
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
 
  

  return (
    <div id='welcome'>
      <h1 style={scrollY > windowSize.width * 0.2 ? {filter: 'blur(2px)'} : {}}>¡Bienvenido</h1>
      <p style={scrollY > windowSize.width * 0.2 ? {filter: 'blur(2px)'} : {}}>a tu espacio</p>
      <p style={scrollY > windowSize.width * 0.2 ? {filter: 'blur(2px)'} : {}}>{user.username}!</p>
      <div className="circleA"></div>
      <div className="circleB"></div>
    </div>
  )
}

export default Welcome