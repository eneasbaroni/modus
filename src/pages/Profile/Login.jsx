import { useContext, useEffect, useState } from 'react'
import './Profile.css'
import UserContext from '../../context/userContex'

const LoginError = ({foo}) => {
  const [opacity, setOpacity] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      setOpacity(1)
    }, 100)
  },[])

  return (
    <div id='loginError' style={{opacity: opacity}}>
      <div className='errorContainer'>
        <div className='error'>
          <p>EL NOMBRE DE USUARIO O CONTRASEÑA NO SON CORRECTOS</p>
          <button onClick={foo}
            className='btnError'
            type='button'
            name='button'
          >Volver a intentar</button>
          
        </div>
      </div>
    </div>
  )
}

const Login = () => {
  const {login} = useContext (UserContext)
  const [loginError, setLoginError] = useState(false)

  const [usuario, setUsuario] = useState({
    nombre:"",
    password:"",     
  })

  const handleInputChange = (event) => {
    setUsuario({
      ...usuario,
      [event.target.name] : event.target.value
    })
  } 

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log(usuario)
    const logueado = await login(usuario.nombre, usuario.password)
    if (logueado) {
      console.log('logueado')
    } else {
      setLoginError(true)    
    }

  }

  const handleLogError = () => {
    //restart form
    setLoginError(false)
  }


  return (
    <>
      {loginError && <LoginError foo={handleLogError}/>}
      <div className='loginFormContainer'>
        <form onSubmit={handleSubmit} >
          <div className="circleA"></div>
          <div className="circleB"></div>

          <h2>Iniciar Sesión</h2>
          <input type='text'  placeholder='USUARIO' name='nombre' id='nombre' onChange={handleInputChange} required></input>        
          <input className='formPass' type='password'  placeholder='CONTRASEÑA' name='password' id='password' onChange={handleInputChange} required></input>

          {usuario.nombre && usuario.password ?
            <button onClick={handleSubmit}className='btnActive'><p>Ingresar</p></button> :
            <button disabled><p>Ingresar</p></button> 
          } 

          
        </form>
      </div>
    </>
  )
}

export default Login