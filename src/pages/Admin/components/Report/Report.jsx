import { useEffect, useState } from 'react';
import Loader from '../../../../components/Loader/Loader';
import RequestError from '../RequestError/RequestError';
import RequestSucces from '../RequestSucces/RequestSucces';
import './Report.css';
import axios from 'axios';


const Report = () => {
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState(false);
	const [clients, setClients] = useState([]);
	const [clientToSend, setClientToSend] = useState('');
	const [viewOptions, setViewOptions] = useState(false);

	const [informe, setInforme] = useState({
		informe: "",
		multimedia: "",
		/* estadistica: "", */
		grafico: ""	
	});

	const handleInputChange = (event) => {
		setInforme({
			...informe,
			[event.target.name] : event.target.value
		})
	}

	useEffect(() => {
		axios({
		  method: 'get',
		  //origin: "http://localhost:3000", 
		  withCredentials: true,
		  url: 'https://modus-server-client.onrender.com/client',
		})
		.then(res => {
		  if (res.status === 200) {
					//filtrar al administrador
					const onlyClients = res.data.filter(client => client.username !== 'ModusAdmin')
					//filter actives clients
					const activeClients = onlyClients.filter(client => client.active)
					//setClients solo un array de los username
					const clientNames = activeClients.map(client => client.username)
					setClients(clientNames)	
			setLoading(false)        
		  }
		})
	  }, [])

	  const handleSubmit = (event) => {
		event.preventDefault()
		const report = {
			username: clientToSend,
			informe: informe
		}
		//console.log(messageToSend)
		setLoading(true)
	
		axios({
			method: 'post',
			//origin: "http://localhost:3000", 
			withCredentials: true,
			url: 'https://modus-server-client.onrender.com/client/report',
			data: report,
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
			{success && <RequestSucces succes={"Informe enviado con exito"} />}
			{error && <RequestError error={"Error al enviar informe"} foo={() => setError(false)}/>}
			<h1>Enviar Informe</h1>
			<form className="actionForms" onSubmit={handleSubmit}>
				<legend>Enviar Informe</legend> 
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
				
				
				<input type="text" name="informe" id="informe" placeholder='Link a Informe en PDF' onChange={handleInputChange} required/>
				<input type="text" name="multimedia" id="Multimedia" placeholder='Link a archivo de Audio' onChange={handleInputChange} required/>
				<input type="text" name="grafico" id="grafico" placeholder='Link a Grafico' onChange={handleInputChange} required/>
				
	
				{clientToSend && informe.informe && informe.multimedia  && informe.grafico ?
	
					<button type="submit">Enviar</button>:
					<button type="submit" className='disabledBtn' disabled>Enviar</button>
				}
			</form>
		</>
	);
}

export default Report