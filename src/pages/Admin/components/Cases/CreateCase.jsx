import { useEffect, useState } from "react"
import axios from "axios"
import Loader from "../../../../components/Loader/Loader"

const CreateCase = ({closeModal, loadCases}) => {
	const [loading, setLoading] = useState(false)
	const [clients, setClients] = useState([]);
	const [clientToSend, setClientToSend] = useState('');
	const [viewOptions, setViewOptions] = useState(false);

	const [caseCreated, setCaseCreated] = useState({
		name: '',
		link: '',
		client: ''
	})

	const handleInputChange = (event) => {
		setCaseCreated({
			...caseCreated,
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

	const handleViewOptions = () => {
		setViewOptions(!viewOptions)
  	}

	const handleSelectClient = (client) => {
		setClientToSend(client)	
		setViewOptions(false)	
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		setLoading(true)	
		
		caseCreated.client = clientToSend

		axios({
			method: 'post',
			//origin: "http://localhost:3000", 
			withCredentials: true,
			url: 'https://modus-server-client.onrender.com/case',
			data: caseCreated
		})
		.then(res => {
			if (res.status === 200) {
				loadCases()
				closeModal()
				setLoading(false)
			}
		})
		.catch(err => {
			alert('Error al crear caso')
			closeModal()
			setLoading(false)
		})		
	}



	return (
		<>
			{loading && <Loader/>}
			<div className="createCaseContainer">
				<form className="actionForms" onSubmit={handleSubmit}>
					<legend>Crear Caso de Éxito</legend>
					<legend className="subLegend">Para: {clientToSend ? clientToSend : 'No selecciono cliente aun' }</legend> 

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



					<input type="text" name="name" id="name" placeholder='Nombre del caso' onChange={handleInputChange} required/>
					<input type="text" name="link" id="link" placeholder='Link del caso' onChange={handleInputChange} required/>
					{ caseCreated.name && caseCreated.link && clientToSend ?			
						<button type="submit">Crear</button>:
						<button type="submit" className='disabledBtn' disabled>Crear</button>
					}
					<button onClick={() => closeModal()}>Cancelar</button>
				</form>
			</div>
			
		</>
	)
}

export default CreateCase