import { useState } from "react"
import Loader from "../../../../components/Loader/Loader"
import axios from "axios"

const ConfirmDelete = ({userId, reportId, closeModal, loadReports}) => {
	const [loading, setLoading] = useState(false)	

	const deleteReport = (userId, reportId) => {
		setLoading(true)
		axios({
			method: 'delete',
			//origin: "http://localhost:3000", 
			withCredentials: true,
			url: `https://modus-server-sjng.onrender.com/client/report`,	
			data: {
				userId,
				reportId
			}	
		})
		.then(res => {			
			if (res.status === 200) {			
				loadReports()				
			}
		})
		.catch(err => {
			alert('Error al eliminar reporte')
			closeModal()
			setLoading(false)
		})	  
	
	  }

	return (
		<>
			{loading && <Loader/>}
			<div className="modalContainer">
				<div className='deleteModalContiner'>
					<div className='deleteModal'>
						<h2>¿Seguro que quieres eliminar este cliente?</h2>
						<p>Una vez eliminado no se podrá recuperar</p>
						<div>
							<button onClick={() => closeModal()}>Cancelar</button>
							<button onClick={() => deleteReport(userId, reportId)}>Eliminar</button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
	
}

export default ConfirmDelete