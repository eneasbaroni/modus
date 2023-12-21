import { useState } from 'react'
import './CreateClient.css'
import axios from 'axios'
import Loader from '../../../../components/Loader/Loader'
import RequestError from '../RequestError/RequestError'
import RequestSucces from '../RequestSucces/RequestSucces'

const CreateClient = () => {
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)

    const [client, setClient] = useState({
        username: '',
        password: '',
        contactA: '',
        emailA: '',
        phoneA: '',
        contactB: '',
        emailB: '',
        phoneB: ''
    })

    const handleInputChange = (event) => {
        setClient({
            ...client,
            [event.target.name] : event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        //console.log(client)
        setLoading(true)

        axios({
            method: 'post',
            //origin: "http://localhost:3000", 
            withCredentials: true,
            url: 'https://modus-server-client.onrender.com/client',
            data: client,
        })
        .then(async res => {
            if (res.status === 200) {
                setSuccess(true)
            }
            setLoading(false)
        })
        .catch(err => {
            console.log('Error al crear cliente', err)
            setError(true)
            setLoading(false)
        })
    }

  return (
    <>
        {loading && <Loader/>}
        {success && <RequestSucces succes={'Cliente creado con exito'}/>}
        {error && <RequestError error={'Error al crear cliente'} foo={() => setError(false)}/>}
        <h1>Crear nuevo cliente</h1>
        <form className="actionForms" onSubmit={handleSubmit}>
            <legend>Formulario de Carga</legend>  
            <input type="text" name="username" id="username" placeholder='Username' onChange={handleInputChange} required/>
            <input type="password" name="password" id="password" placeholder='Token' onChange={handleInputChange} required/>
            <input type="text" name="contactA" id="contactA" placeholder='Contacto A' onChange={handleInputChange} required/>
            <input type="email" name="emailA" id="emailA" placeholder='Email contacto A' onChange={handleInputChange} required/>
            <input type="text" name="phoneA" id="phoneA" placeholder='Teléfono contaco A' onChange={handleInputChange} required/>
            <input type="text" name="contactB" id="contactB" placeholder='Contacto B' onChange={handleInputChange} />
            <input type="email" name="emailB" id="emailB" placeholder='Email contacto B' onChange={handleInputChange} />
            <input type="text" name="phoneB" id="phoneB" placeholder='Teléfono contaco B' onChange={handleInputChange} />

            {client.username && client.password && client.contactA && client.emailA && client.phoneA ?

                <button type="submit">Crear</button>:
                <button type="submit" className='disabledBtn' disabled>Crear</button>
            }
        </form>
    </>
  )
}
export default CreateClient