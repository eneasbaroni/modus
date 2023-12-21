import { useEffect, useState } from 'react'
import './ReportViewer.css'
import Loader from '../../../../components/Loader/Loader'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import ConfirmDelete from './ConfirmDelete'
import UpdateReport from './UpdateReport'
import { Link } from 'react-router-dom'


const ReportViewer = () => {
	const [client, setClient] = useState(null)	
	const [loading, setLoading] = useState(true)
	const [reports, setReports] = useState([])
	const [idToDelete, setIdToDelete] = useState(null)
	const [deleteModal, setDeleteModal] = useState(false)
	const [actualLocation, setActualLocation] = useState(null)

	const [showUpdateModal, setShowUpdateModal] = useState(false)
	const [reportToUpdate, setReportToUpdate] = useState(null)
	
	const location = useLocation()

	useEffect(() => {
		setActualLocation(location)
	}, [location])

	useEffect(() => {	
		//user id es la ultima parte del location.pathname --> /admin/reports/6578681e20df41efc98442c7
		const path= location.pathname
		const userId = path.split('/').pop()	
		axios({
			method: 'get',
			//origin: "http://localhost:3000", 
			withCredentials: true,
			url: `https://modus-server-client.onrender.com/client/${userId}`,
		})
		.then(res => {
			if (res.status === 200) {	
				setClient(res.data)		
				setReports(res.data.reports)			
				setLoading(false)
			}
		})
		.catch(err => {
			alert('Error al obtener informes')
			setLoading(false)
		})
		 
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [actualLocation]) 

	const openDeleteModal = (id) => {
		setIdToDelete(id)		
		setDeleteModal(true)
	}

	const closeDeleteModal = () => {
		setIdToDelete(null)
		setDeleteModal(false)
	}

	const openUpdateModal = (report) => {
		setReportToUpdate(report)
		setShowUpdateModal(true)
	}

	const closeUpdateModal = () => {
		setReportToUpdate(null)
		setShowUpdateModal(false)		
	}



	const updateReports = () => {
		setLoading(true)
		//hacer petion a axios para obtener el cliente con los reportes actualizados
		axios ({
			method: 'get',
			//origin: "http://localhost:3000", 
			withCredentials: true,
			url: `https://modus-server-client.onrender.com/client/${client._id}`,
		})
		.then(res => {					
			if (res.status === 200) {
				setClient(res.data)
				setReports(res.data.reports)	
				setDeleteModal(false)
				setShowUpdateModal(false)		
				setLoading(false)
			}
		})
		.catch(err => {
			alert('Error al actualizar informe')
			setLoading(false)
		})
	}




	return (
	<>		
		{loading && <Loader/>}
		{deleteModal && idToDelete && client && <ConfirmDelete userId={client._id} reportId={idToDelete} closeModal={closeDeleteModal} loadReports={updateReports}/>}
		{showUpdateModal && client && <UpdateReport userId={client._id} report={reportToUpdate} closeModal={closeUpdateModal} loadReports={updateReports}/>}
		{reports && client &&
		<>
		<section id="reportsViewer">			
			<div className="reportsContainer">
				<h1>Informes de {client.username}</h1>
				{reports.length === 0 && <p>No hay informes</p>}
				{reports.map(report => 
					<div className="report" key={report._id}>
						<p>Cliente: {client.username}</p>
						<p>Id de Informe: {report._id}</p>
						<p>Fecha: {report.fecha}</p>
						<p>Informe: {report.informe}</p>
						<p>Multimedia: {report.multimedia}</p>
						<p>Grafico: {report.grafico}</p>
						<button onClick={() => openUpdateModal(report)}>Editar Informe</button>
						<button onClick={() => openDeleteModal(report._id)}>Eliminar Informe</button>
					</div>
				)}
			</div>
		</section>	
		<Link to='/admin/clientes'><button className='backButton'>Volver  a Clientes</button></Link>
		</>		
		}
	</>
	)
}

export default ReportViewer