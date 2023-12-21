import { useEffect, useState } from 'react'
import axios from 'axios'
import './ClientsView.css'
import Loader from '../../../../components/Loader/Loader'
import { Link } from 'react-router-dom'
import ConfirmDelete from './ConfirmDelete'

const ClientsView = () => {

	const [clients, setClients] = useState(null)
	const [cacheClients, setCacheClients] = useState(null)
	const [clientSearch, setClientSearch] = useState('')
	const [noClients, setNoClients] = useState(false)
	const [loading, setLoading] = useState(true)
	const [idToDelete, setIdToDelete] = useState(null)
	const [deleteModal, setDeleteModal] = useState(false)

	useEffect(() => {
		axios({
			method: 'get',
			//origin: "http://localhost:3000", 
			withCredentials: true,
			url: 'http://localhost:8080/client',
		})
		.then(res => {
			if (res.status === 200) {
					//filtrar al administrador
					const onlyClients = res.data.filter(client => client.username !== 'ModusAdmin')
					setClients(onlyClients)
					setCacheClients(onlyClients)
			setLoading(false)        
			}
		})
	}, [])

	const handleSearch = (event) => {
		setClientSearch(event.target.value)
		if (event.target.value === '') {
			reloadClients()
		} else {
			const filteredClients = cacheClients.filter(client => client.username.toLowerCase().includes(event.target.value.toLowerCase()))
			setClients(filteredClients)
			if (filteredClients.length === 0) {
				setNoClients(true)				
			} else {
				setNoClients(false)
			}
		}
	}

	const reloadClients = () => {
		setLoading(true)
		axios({
			method: 'get',
			//origin: "http://localhost:3000", 
			withCredentials: true,
			url: 'http://localhost:8080/client',
		})
		.then(res => {
			if (res.status === 200) {
				//filtrar al administrador
				const onlyClients = res.data.filter(client => client.username !== 'ModusAdmin')
				setClients(onlyClients)
				setCacheClients(onlyClients)
				setLoading(false)        
			}
		})
	}

	const openDeleteModal = (id) => {
		setIdToDelete(id)
		setDeleteModal(true)
	}

	const closeDeleteModal = () => {
		setIdToDelete(null)
		setDeleteModal(false)
	}

	return (
		<>
			{loading && <Loader/>}	
			{deleteModal && idToDelete && <ConfirmDelete id={idToDelete} closeModal={closeDeleteModal} loadClients={reloadClients}/>}
			
			{clients && 
				<section id='clientsView'>
					<h1>Clientes</h1>
					<div className='searchContainer'>
						<input type="text" placeholder='Search' value={clientSearch} onChange={handleSearch}/>
					</div>

					<div className='clientsContainer'>
					{noClients && <h2>No hay clientes con ese nombre</h2>}
					{clients.map(client => 
						
							client.active &&	
														
								<div className='client' key={client._id}>
											<h3>Username: {client.username}</h3>
											<p>Contacto Principal: <span>{client.contactA}</span></p>
											<p>Email Principal: <span>{client.emailA}</span></p>
											<p>Teléfono Principal: <span>{client.phoneA}</span></p>
											<p>Contacto Secundario: <span>{client.contactB ? client.contactB : '-'}</span></p>
											<p>Email Secundario: <span>{client.emailB ? client.emailB : '-'}</span></p>
											<p>Teléfono Secundario: <span>{client.phoneB ? client.phoneB : '-'}</span></p>
											<Link to={`/admin/reports/${client._id}`}><button>Ver Informes</button></Link>
											<button onClick={() => openDeleteModal(client._id)}>Eliminar</button>
								</div>

					)}
					</div>
				</section>
			}			  
		</>
	)
}

export default ClientsView