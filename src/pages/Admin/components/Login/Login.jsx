import axios from 'axios'
import { UserContext } from '../../../../context/userContex'
import { useContext, useEffect, useState } from 'react'
import Loader from '../../../../components/Loader/Loader'
import './Login.css'

const URL = 'http://localhost:8080/auth/login' //cambiar al subir a produccion

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
    const [loading, setLoading] = useState(false)
    const {login} = useContext (UserContext) 
    const [loginError, setLoginError] = useState(false)


    const [user, setUser] = useState({
        username: '',
        password: ''
    })

    const handleInputChange = (event) => {
        setUser({
            ...user,
            [event.target.name] : event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setLoading(true)

        axios({
            method: 'post',
            //origin: "http://localhost:3000", 
            withCredentials: true,
            url: URL,
            data: user,    
        })
        .then(async res => {
            
            if (res.status === 200) {                      
                login(res.data)
            }
            setLoading(false)
            
        })
        .catch(err => {         
            console.log('Error de logue', err)
            setLoginError(true)
            setLoading(false)
        })
    }

    const handleLogError = () => {
        //restart form
        setLoginError(false)
    }



  return (
    <>    
        {loading && <Loader/>}
        {loginError && <LoginError foo={handleLogError}/>}
        <div className='loginAdminForm'>
            <form  onSubmit={handleSubmit}>
                <h2>Iniciar Sesion</h2>       
                <input type="text" name="username" id="username" placeholder='USERNAME' onChange={handleInputChange}/>
                <input type="password" name="password" id="password" placeholder='PASSWORD' onChange={handleInputChange}/>
                {user.username && user.password ?
                    <button onClick={handleSubmit}className='btnActive'><p>Ingresar</p></button> :
                    <button disabled><p>Ingresar</p></button> 
                } 
            </form>
        </div>
    </>
  )
}
export default Login
