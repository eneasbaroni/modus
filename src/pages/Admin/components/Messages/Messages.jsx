import { useEffect, useState } from "react";
import Loader from "../../../../components/Loader/Loader";
import "./Messages.css";
import RequestSucces from "../RequestSucces/RequestSucces";
import RequestError from "../RequestError/RequestError";
import axios from "axios";

const Messages = () => {
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState(false);
	const [clients, setClients] = useState([]);
	const [clientToSend, setClientToSend] = useState('');
	const [viewOptions, setViewOptions] = useState(false);

	const [message, setMessage] = useState({
		message: ""
	});

  	const handleInputChange = (event) => {
		setMessage({
			...message,
			[event.target.name] : event.target.value
		})
	}


  useEffect(() => {
    axios({
      method: 'get',
      //origin: "http://localhost:3000", 
      withCredentials: true,
      url: 'https://modus-server-sjng.onrender.com/client',
    })
    .then(res => {
      if (res.status === 200) {
				//filtrar al administrador
				const onlyClients = res.data.filter(client => client.username !== 'ModusAdmin')
				//setClients solo un array de los username
				const clientNames = onlyClients.map(client => client.username)
				setClients(clientNames)	
        setLoading(false)        
      }
    })
  }, [])

  const handleSubmit = (event) => {
	event.preventDefault()
	const messageToSend = {
		username: clientToSend,
		message: message.message
	}
	//console.log(messageToSend)
	setLoading(true)

	axios({
		method: 'post',
		//origin: "http://localhost:3000", 
		withCredentials: true,
		url: 'https://modus-server-sjng.onrender.com/client/message',
		data: messageToSend,
	})
	.then(async res => {
		if (res.status === 200) {
			setSuccess(true)
			setLoading(false)
		}
	})
	.catch(err => {
		console.log('Error al enviar mensaje', err)
		setError(true)
		setLoading(false)
	})
  }

  const handleViewOptions = () => {
		setViewOptions(!viewOptions)
  }

  const handleSelectClient = (client) => {
		setClientToSend(client)	
		setViewOptions(false)	
  }


  return (
    <>
		{loading && <Loader />}
		{success && <RequestSucces succes={"Mensaje enviado con exito"} />}
		{error && <RequestError error={"Error al enviar mensaje"} foo={() => setError(false)}/>}
		<h1>Enviar Mensaje</h1>
		<form className="actionForms" onSubmit={handleSubmit}>
			<legend>Formulario de envio</legend> 
			<legend className="subLegend">A: {clientToSend ? clientToSend : 'No selecciono cliente aun' }</legend> 

			<p className="selectBtn" type="button" onClick={handleViewOptions}>Seleccione un cliente</p>

			{viewOptions &&
				<div className="selectOptions">
					{clients.map((client, index) => (
						<p key={index} onClick={() => handleSelectClient(client)} >
							{client}
						</p>
					))}
				</div>
			}
			
			
			<input type="text" name="message" id="message" placeholder='Mensaje' onChange={handleInputChange} required/>

			{clientToSend && message.message ?

				<button type="submit">Enviar</button>:
				<button type="submit" className='disabledBtn' disabled>Enviar</button>
			}
		</form>
    </>
  );
};

export default Messages;
